from django.contrib.auth.mixins import LoginRequiredMixin #用户验证系统，只允许登录过的用户使用
from django.db import transaction
from django.db.models import F
from django.http import JsonResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from cashback.forms import TaskForm, CashbackForm
from cashback.models import CashbackTask, CashbackTaskGoods, Cashback, CashbackStatus
from cashback.services.task import TaskService, CashbackService
from crm.models import Customer
from finance.models import FOrder, OrderStatus, FWalletBill
from goods.models import Shop, Goods
from libs.common.form import invalid_msg
from libs.common.tree import TreeDto
from libs.utils.http import JSONResponse
from libs.utils.response import paged_result
import json

from libs.utils.string_extension import safe_dict_value, generate_orderno
from users.models import AuthUser


class TaskManagerView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        return render(request, template_name='cashback/task/index.html')


class TaskCreateView(LoginRequiredMixin, View):
    '''新增任务'''
    template_name = 'cashback/task/add.html'

    def get(self, request, *args, **kwargs):
        form = TaskForm()
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = TaskForm(request.POST)
        if not form.is_valid():
            errors = {key: invalid_msg.format(value[0]) for key, value in form.errors.items()}
            return render(request, self.template_name, {'error': errors, 'form': form})

        try:
            with transaction.atomic():
                task = form.save(commit=False)
                task.seller_id = request.user.id
                task.save()

                products = json.loads(request.POST.get('products'))
                TaskService().save_task_goods(task.id, request.user.id, products)

        except Exception as ex:
            errors = dict(name=invalid_msg.format('保存失败！'))
            return render(request, self.template_name, {'error': errors, 'form': form})

        return redirect('cashback:task_index')


class TaskEditView(LoginRequiredMixin, View):
    '''编辑任务'''
    template_name = 'cashback/task/edit.html'

    def get(self, request, *args, **kwargs):
        task_id = request.GET.get('id')
        task = get_object_or_404(CashbackTask, id=task_id)
        form = TaskForm(instance=task)
        context = {
            'id': task_id,
            'form': form
        }
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        task_id = request.POST.get('id')
        task = get_object_or_404(CashbackTask, id=task_id)
        form = TaskForm(request.POST, instance=task)
        if not form.is_valid():
            errors = {key: invalid_msg.format(value[0]) for key, value in form.errors.items()}
            return render(request, self.template_name, {'error': errors, 'form': form})

        # 保存
        try:
            with transaction.atomic():
                form.save()
                CashbackTaskGoods.objects.filter(seller_id=request.user.id, task_id=task_id).delete()

                products = json.loads(request.POST.get('products'))
                TaskService().save_task_goods(task_id, request.user.id, products)

        except Exception as ex:
            errors = dict(name=invalid_msg.format('保存失败！'))
            return render(request, self.template_name, {'error': errors, 'form': form})

        return redirect('cashback:task_index')


@csrf_exempt
@require_http_methods(['POST'])
def delete_task(request):
    try:
        data = json.loads(request.body.decode())
        task_ids = data.get('ids')
        # 删除任务
        CashbackTask.objects.filter(id__in=task_ids, seller_id=request.user.id).delete()
    except Exception as e:
        return JSONResponse(msg='删除失败！')
    return JSONResponse()


def get_goods_tree(request):
    shops = Shop.objects.filter(user_id=request.user.id).values('id', 'shopname')
    shops = list(shops)
    shop_ids = [item['id'] for item in shops]  # 商家所有店铺id

    goods = Goods.objects.filter(shop_id__in=shop_ids).values('id', 'shop_id', 'name')  # 商家店铺下所有商品
    goods = list(goods)

    trees = [TreeDto(item['id'], None, item['shopname'], True, True) for item in shops]  # 父级元素 店铺
    for item in goods:
        tree = TreeDto(item['id'], item['shop_id'], item['name'], False, False)  # 子级元素 商品
        trees.append(tree)

    result = [item.to_dict() for item in trees]

    return JsonResponse(result, safe=False)


def get_task_goods(request):
    task_id = request.GET.get('id')
    task_id = int(task_id)

    goods_ids = CashbackTaskGoods.objects.filter(seller_id=request.user.id, task_id=task_id) \
        .values_list('goods_id', flat=True)
    goods_ids = list(goods_ids)

    return JsonResponse(goods_ids, safe=False)


class CashbackManagerView(LoginRequiredMixin, View):
    '''返现管理'''

    def get(self, request, *args, **kwargs):
        return render(request, template_name='cashback/index.html')


class CashbackEditView(LoginRequiredMixin, View):
    '''编辑 返现记录'''
    template_name = 'cashback/edit.html'

    def get(self, request, *args, **kwargs):
        cashback_id = request.GET.get('id')
        cashback = get_object_or_404(Cashback, id=cashback_id)

        service = CashbackService(cashback)
        cashback.task_name = service.get_taskname(cashback)
        cashback.customer_name = service.get_customername(cashback)

        form = CashbackForm(initial={'status': cashback.status})
        context = {
            'model': cashback,
            'form': form
        }
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        cashback_id = request.POST.get('id')
        cashback = get_object_or_404(Cashback, id=cashback_id)

        service = CashbackService(cashback)
        cashback.task_name = service.get_taskname(cashback)
        cashback.customer_name = service.get_customername(cashback)

        form = CashbackForm(request.POST, instance=cashback, seller=request.user)
        if not form.is_valid():
            errors = {key: invalid_msg.format(value[0]) for key, value in form.errors.items()}
            return render(request, self.template_name, {'error': errors, 'form': form, 'model': cashback})

        status = form.cleaned_data.get('status')
        result = service.audit(request.user.id, status)
        if not result:
            return render(request, self.template_name, {'error': {'status': '保存失败'}, 'form': form, 'model': cashback})
        return redirect('cashback:index')


def get_cashbacktasks(request):
    ''' 获取任务列表 '''

    page = int(request.GET.get('page', 1))
    pagesize = int(request.GET.get('rows', 15))
    keyword = request.GET.get('keywords')

    tasks = CashbackTask.objects.filter(seller_id=request.user.id)
    if keyword:
        tasks = tasks.filter(name__contains=keyword)  # 按名称查询
    count = tasks.count()  # 总数
    tasks = tasks.order_by('-add_time')[(page - 1) * pagesize:page * pagesize]
    result = [item.to_dict() for item in list(tasks)]

    paged_result.set(page, pagesize, count, result)

    return JsonResponse(paged_result.to_dict())


def get_cashbacks(request):
    ''' 获取返现列表 '''

    page = int(request.GET.get('page', 1))
    pagesize = int(request.GET.get('rows', 15))
    keyword = request.GET.get('keywords')

    cashbacks = Cashback.objects.filter(seller_id=request.user.id)
    # if keyword:
    #     cashbacks = cashbacks.filter(tags__contains=keyword)  # 按标签查询
    count = cashbacks.count()  # 总数
    cashbacks = cashbacks.order_by('-add_time')[(page - 1) * pagesize:page * pagesize]
    cashbacks = list(cashbacks)

    customer_ids = []
    task_ids = []
    result = []
    for cashback in cashbacks:
        task_ids.append(cashback.task_id)
        customer_ids.append(cashback.customer_id)

    tasks = CashbackTask.objects.filter(id__in=task_ids).values('id', 'name')
    customers = Customer.objects.filter(id__in=customer_ids).values('id', 'username')

    for cashback in cashbacks:
        task_name = safe_dict_value(list(filter(lambda m: m['id'] == cashback.task_id, tasks)), 'name')
        customer_name = safe_dict_value(list(filter(lambda m: m['id'] == cashback.customer_id, customers)), 'username')
        result.append(cashback.to_dict(task_name, customer_name))

    paged_result.set(page, pagesize, count, result)
    return JsonResponse(paged_result.to_dict())
