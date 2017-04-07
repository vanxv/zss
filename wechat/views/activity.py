from django.shortcuts import render, get_object_or_404
from django.views import View
from cashback.models import CashbackTask, Cashback, CashbackStatus
from libs.common.helper import save_file
from libs.utils.decorators import request_validate
from libs.utils.http import JSONError, JSONResponse
from wechat.forms import ActivityForm
import os


class ActivityView(View):
    template_name = 'wechat/activity.html'

    def get(self, request, *args, **kwargs):
        activity_id = request.GET.get('activityid')
        get_object_or_404(CashbackTask, id=activity_id)

        return render(request, self.template_name, {'id': activity_id})

    @request_validate(ActivityForm)
    def post(self, request, *args, **kwargs):
        form = kwargs.pop('form')
        commentpic = form.cleaned_data.get('commentpic')
        showpic1 = form.cleaned_data.get('showpic1')
        showpic2 = form.cleaned_data.get('showpic2')

        commentpic = save_file(commentpic)  # 保存文件
        if showpic1:
            showpic1 = save_file(showpic1)
        if showpic2:
            showpic2 = save_file(showpic2)

        cashback = Cashback()
        cashback.task_id = form.cleaned_data.get('id')
        cashback.seller_id = form.task.seller_id
        cashback.customer_id = form.order.customer_id
        cashback.wechat = form.cleaned_data.get('wechat')
        cashback.alipay = form.cleaned_data.get('alipay')
        cashback.orderno = form.cleaned_data.get('orderno')
        cashback.amount = form.task.amount
        cashback.certificate = commentpic
        cashback.showpic1 = showpic1
        cashback.showpic2 = showpic2
        cashback.status = CashbackStatus.Processing.value
        cashback.save()

        return JSONResponse()
