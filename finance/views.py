from django.conf import settings
from django.contrib.auth.mixins import LoginRequiredMixin
from django.db import transaction
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render, redirect
from django.views import View
from finance.forms import WithdrawForm, InpourForm
from finance.models import FWalletBill, FAccountTransferAudits
from finance.services.finance import FinanceService
from libs.common.form import invalid_msg
from libs.common.helper import save_file
from libs.utils.response import paged_result
import os

class AccountManagerView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        return render(request, template_name='finance/account/index.html')


class AccountInpourView(LoginRequiredMixin, View):
    '''充值'''
    template_name = 'finance/account/inpour.html'

    def get(self, request, *args, **kwargs):
        alipay_account = settings.ALIPAY_ACCOUNT
        form = InpourForm()
        return render(request, self.template_name, {'form': form, 'alipay_account': alipay_account})

    def post(self, request, *args, **kwargs):
        file = request.FILES.get('certificate')

        errors = {}
        form = InpourForm(request.POST)
        if not form.is_valid():
            errors = {key: invalid_msg.format(value[0]) for key, value in form.errors.items()}

        error_msg = None
        if not file:
            error_msg = '文件上传出错'
        else:
            extensions = os.path.splitext(file.name)[1].lower()
            if extensions not in ['.png', '.jpg', '.bmp']:
                error_msg = '文件格式错误'
        if error_msg:
            errors['certificate'] = invalid_msg.format(error_msg)
        if len(errors.keys()) > 0:
            return render(request, self.template_name, {'error': errors, 'form': form})

        filename = save_file(file)  # 保存文件

        service = FinanceService(form.save(commit=False))
        result = service.inpour(request.user.id, filename)
        if not result:
            return render(request, self.template_name, {'error': {'amount': invalid_msg.format('保存失败！')}, 'form': form})
        return redirect('finance:account_index')


class AccountWithDrawView(LoginRequiredMixin, View):
    '''提现'''
    template_name = 'finance/account/withdraw.html'

    def get(self, request, *args, **kwargs):
        form = WithdrawForm()
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = WithdrawForm(data=request.POST, user=request.user)
        if not form.is_valid():
            errors = {key: invalid_msg.format(value[0]) for key, value in form.errors.items()}
            return render(request, self.template_name, {'error': errors, 'form': form})

        service = FinanceService(form.save(commit=False))
        result = service.withdraw(request.user.id)
        if not result:
            return render(request, self.template_name, {'error': {'amount': invalid_msg.format('保存失败！')}, 'form': form})
        return redirect('finance:account_index')


class WalletManagerView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        return render(request, template_name='finance/wallet/index.html')


def get_account_transfers(request):
    '''获取充值、提现列表'''

    page = int(request.GET.get('page', 1))
    pagesize = int(request.GET.get('rows', 15))
    keyword = request.GET.get('keywords')

    audits = FAccountTransferAudits.objects.filter(seller_id=request.user.id)
    # if keyword:
    #     orders = bills.filter(id__contains=keyword)  # 按订单号查询
    count = audits.count()  #
    audits = audits.order_by('-add_time')[(page - 1) * pagesize:page * pagesize]
    result = [audit.to_dict() for audit in list(audits)]

    paged_result.set(page, pagesize, count, result)

    return JsonResponse(paged_result.to_dict())


def get_walletbills(request):
    '''获取账单列表'''

    page = int(request.GET.get('page', 1))
    pagesize = int(request.GET.get('rows', 15))
    keyword = request.GET.get('keywords')

    bills = FWalletBill.objects.filter(user_id=request.user.id)
    # if keyword:
    #     bills = bills.filter(billtype__contains=keyword)  # 按账单类型查询
    count = bills.count()  #
    bills = bills.order_by('-add_time')[(page - 1) * pagesize:page * pagesize]
    result = [bill.to_dict() for bill in list(bills)]

    paged_result.set(page, pagesize, count, result)

    return JsonResponse(paged_result.to_dict())
