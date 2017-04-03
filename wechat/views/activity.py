import os
import time
from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from django.views import View
from cashback.models import CashbackTask, Cashback, CashbackStatus
from libs.common.form import invalid_msg
from libs.common.helper import save_file
from libs.utils.decorators import request_validate
from libs.utils.http import JSONError, JSONResponse
from wechat.forms import ActivityForm


class ActivityView(View):
    template_name = 'wechat/activity.html'

    def get(self, request, *args, **kwargs):
        activity_id = request.GET.get('activityid')
        get_object_or_404(CashbackTask, id=activity_id)

        return render(request, self.template_name, {'id': activity_id})

    @request_validate(ActivityForm)
    def post(self, request, *args, **kwargs):
        file = request.FILES.get('certificate')
        form = kwargs.pop('form')

        error_msg = None
        if not file:
            error_msg = '请上传截图'
        else:
            extensions = os.path.splitext(file.name)[1].lower()
            if extensions not in ['.png', '.jpg', '.bmp']:
                error_msg = '图片格式错误'
        if error_msg:
            return JSONError(error_msg)

        filename = save_file(file)  # 保存文件

        cashback = Cashback()
        cashback.task_id = form.cleaned_data.get('id')
        cashback.seller_id = form.task.seller_id
        cashback.customer_id = form.order.customer_id
        cashback.wechat = form.cleaned_data.get('wechat')
        cashback.alipay = form.cleaned_data.get('alipay')
        cashback.orderno = form.cleaned_data.get('orderno')
        cashback.amount = form.task.amount
        cashback.certificate = filename
        cashback.status = CashbackStatus.Processing.value
        cashback.save()

        return JSONResponse()
