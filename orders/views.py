import json
import os
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from orders.forms import OrderForm
from orders.models import Order
from users.services.order import OrderService
from libs.common.form import invalid_msg
from libs.utils.response import paged_result
from libs.utils.http import JSONResponse, JSONError
import time


class OrderManagerView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        return render(request, template_name='order/index.html')

    def post(self, request, *args, **kwargs):
        '''批量导入订单'''
        tb_file = request.FILES.get('tb_order')
        jd_file = request.FILES.get('jd_order')

        file = tb_file or jd_file
        platform = 'taobao' if tb_file else 'jd'
        if not file:
            return JSONError('文件上传出错')
        if not file.name.endswith('.csv'):
            return JSONError('文件格式错误')

        filename = str(int(time.time())) + '.csv'
        filename = os.path.join(settings.MEDIA_ROOT, filename)
        with open(filename, 'wb+') as f:
            for chunk in file.chunks():
                f.write(chunk)

        result = OrderService().import_orders(filename, request.user.id, platform)
        return JSONResponse('导入成功' if result else '导入失败', success=result)


class CreateOrderView(LoginRequiredMixin, View):
    '''添加订单'''
    template_name = 'order/add.html'

    def get(self, request, *args, **kwargs):
        form = OrderForm()
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = OrderForm(request.POST)
        if not form.is_valid():
            errors = {key: invalid_msg.format(value[0]) for key, value in form.errors.items()}
            return render(request, self.template_name, {'error': errors, 'form': form})
        # 保存
        form.save(request.user.id)

        return redirect('order:index')


class UpdateOrderView(LoginRequiredMixin, View):
    '''修改订单'''
    template_name = 'order/edit.html'

    def get(self, request, *args, **kwargs):
        order_id = request.GET.get('id')
        order = get_object_or_404(Order, id=order_id)
        form = OrderForm(instance=order)

        return render(request, self.template_name, {'id': order_id, 'form': form})

    def post(self, request, *args, **kwargs):
        order_id = request.POST.get('id')
        order = get_object_or_404(Order, id=order_id)
        form = OrderForm(request.POST, instance=order)
        if not form.is_valid():
            errors = {key: invalid_msg.format(value[0]) for key, value in form.errors.items()}
            return render(request, self.template_name, {'error': errors, 'form': form})
        # 保存
        form.save(request.user.id)

        return redirect('order:index')


@csrf_exempt
@require_http_methods(['POST'])
def delete_order(request):
    try:
        data = json.loads(request.body.decode())
        order_ids = data.get('ids')
        # 删除订单
        Order.objects.filter(id__in=order_ids).delete()
    except Exception as e:
        return JSONResponse(msg='删除失败！')
    return JSONResponse()


def get_orders(request):
    '''
    获取订单列表
    # sidx 排序字段
    # sord 排序 asc/desc
    # page 页码
    # rows  页容量
    # keywords 搜索关键字
    '''

    page = int(request.GET.get('page', 1))
    pagesize = int(request.GET.get('rows', 15))
    keyword = request.GET.get('keywords')

    orders = Order.objects.filter(user=request.user)
    if keyword:
        orders = orders.filter(id__contains=keyword)  # 按订单号查询
    count = orders.count()  #
    orders = orders.order_by('-add_time')[(page - 1) * pagesize:page * pagesize]
    result = [order.to_dict() for order in list(orders)]

    paged_result.set(page, pagesize, count, result)

    return JsonResponse(paged_result.to_dict())
