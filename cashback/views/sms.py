# coding:utf-8
import json
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views import View
from cashback.forms import SmsForm
from cashback.models import Sendsms
from cashback.services.sms import send_sms
from crm.models import Customer
from libs.common.form import invalid_msg
from libs.utils.response import paged_result
from libs.utils.string_extension import safe_dict_value


class SmsManagerView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        return render(request, template_name='cashback/sms/index.html')


class SmsCreateView(LoginRequiredMixin, View):
    '''发送短信'''
    template_name = 'cashback/sms/add.html'

    def get(self, request, *args, **kwargs):
        form = SmsForm()
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = SmsForm(request.POST)
        if not form.is_valid():
            errors = {key: invalid_msg.format(value[0]) for key, value in form.errors.items()}
            return render(request, self.template_name, {'error': errors, 'form': form})

        customer_ids = form.cleaned_data.get('customers')
        customer_ids = customer_ids.split(',')
        customers = Customer.objects.filter(id__in=customer_ids).values('id', 'mobile')

        mobiles = list(map(lambda m: m['mobile'], customers))
        mobiles = ','.join(mobiles)

        content = form.cleaned_data.get('content')
        result = send_sms(mobiles, form.cleaned_data.get('content'))

        sms = [Sendsms(seller_id=request.user.id, mobile=item['mobile'], customer_id=item['id'], content=content)
               for item in customers]
        Sendsms.objects.bulk_create(sms)

        return redirect('cashback:sms_index')


def get_sms(request):
    ''' 获取推送消息列表 '''

    page = int(request.GET.get('page', 1))
    pagesize = int(request.GET.get('rows', 15))
    keyword = request.GET.get('keywords')

    sms = Sendsms.objects.filter(seller_id=request.user.id)
    # if keyword:
    #     cashbacks = cashbacks.filter(tags__contains=keyword)  # 按标签查询
    count = sms.count()  # 总数
    sms = sms.order_by('-add_time')[(page - 1) * pagesize:page * pagesize]
    sms = list(sms)

    result = []
    customer_ids = [item.customer_id for item in sms]
    customers = Customer.objects.filter(id__in=customer_ids).values('id', 'username')

    for item in sms:
        customer_name = safe_dict_value(list(filter(lambda m: m['id'] == item.customer_id, customers)), 'username')
        result.append(item.to_dict(customer_name))

    paged_result.set(page, pagesize, count, result)
    return JsonResponse(paged_result.to_dict())
