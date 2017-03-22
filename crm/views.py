import json

from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect

# Create your views here.
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from crm.forms import CustomerForm
from crm.models import Customer
from libs.common.form import invalid_msg
from libs.utils.http import JSONResponse
from libs.utils.response import paged_result


class CustomerManagerView(LoginRequiredMixin, View):
    template_name = 'customer/index.html'

    def get(self, request, *args, **kwargs):
        # user = get_object_or_404(Customer, bid=request.user.id)
        # form = CustomerForm(initial={'tags': user.tags})
        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        pass
        # form = CustomerForm(request.POST)
        # if not form.is_valid():
        #     errors = {key: invalid_msg.format(value[0]) for key, value in form.errors.items()}
        #     return render(request, self.template_name, {'error': errors, 'form': form})
        # # 保存
        # user = get_object_or_404(Customer, bid=request.user.id)
        # user.tags = form.cleaned_data.get('tags')
        # user.save()
        #
        # return redirect('user:index')


class UpdateCustomerView(LoginRequiredMixin, View):
    '''修改订单'''
    template_name = 'customer/edit.html'

    def get(self, request, *args, **kwargs):
        customer_id = request.GET.get('id')
        customer = get_object_or_404(Customer, id=customer_id)
        form = CustomerForm(instance=customer)
        context = {
            'id': customer.id,
            'username': customer.username,
            'address': customer.address,
            'form': form
        }

        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        customer_id = request.POST.get('id')
        customer = get_object_or_404(Customer, id=customer_id)
        form = CustomerForm(request.POST, instance=customer)
        if not form.is_valid():
            errors = {key: invalid_msg.format(value[0]) for key, value in form.errors.items()}
            return render(request, self.template_name, {'error': errors, 'form': form})
        # 保存
        form.save()

        return redirect('crm:customer_index')


@csrf_exempt
@require_http_methods(['POST'])
def delete_customer(request):
    try:
        data = json.loads(request.body.decode())
        customer_ids = data.get('ids')
        # 删除买家
        Customer.objects.filter(id__in=customer_ids, bid=request.user.id).delete()
    except Exception as e:
        return JSONResponse(msg='删除失败！')
    return JSONResponse()


def get_customers(request):
    ''' 获取买家列表 '''

    page = int(request.GET.get('page', 1))
    pagesize = int(request.GET.get('rows', 15))
    keyword = request.GET.get('keywords')

    customers = Customer.objects.filter(bid=request.user.id)
    if keyword:
        customers = customers.filter(tags__contains=keyword)  # 按标签查询
    count = customers.count()  # 总数
    customers = customers.order_by('-add_time')[(page - 1) * pagesize:page * pagesize]
    result = [item.to_dict() for item in list(customers)]

    paged_result.set(page, pagesize, count, result)

    return JsonResponse(paged_result.to_dict())
