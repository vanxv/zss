from django.contrib import admin
from django.contrib import messages
from django.db.models import F

from finance.models import FAccountTransferAudits, FOrder, OrderStatus, AuditStatus, FWalletBill
from datetime import datetime

from users.models import AuthUser


@admin.register(FAccountTransferAudits)
class FAccountTransterAdmin(admin.ModelAdmin):
    list_per_page = 15
    list_display = ['id', 'transfertype', 'amount', 'seller', 'status', 'remark', 'add_time']

    # list_display_links = ['id', 'city', 'type']

    def save_model(self, request, obj, form, change):
        if not change:
            messages.error(request, '不允许新增')
            return

        transfer_id = obj.id
        status = form.cleaned_data.get('status')
        order = FOrder.objects.get(transfer_id=transfer_id)

        if status == AuditStatus.Fail.value:  # 审核不通过
            order.orderstatus = OrderStatus.UnPaid.value
        if status == AuditStatus.Success.value:  # 审核通过
            order.orderstatus = OrderStatus.Paid.value
            order.paytime = datetime.now()

            amount = obj.amount if obj.transfertype == 'inpour' else -obj.amount
            if order.user.balance + amount < 0:
                messages.error(request, '商家账户余额不足')
                return

            # 更改商家账户余额
            order.user.balance = order.user.balance + amount
            order.user.save()

            # 创建商家账单
            bill = FWalletBill()
            bill.user_id = obj.seller_id
            bill.order_id = order.id
            bill.title = '账单'
            bill.billtype = obj.transfertype
            bill.amount = order.total_amount
            bill.balance = order.user.balance
            bill.save()

        obj.audit_time = datetime.now()
        obj.save()
        order.save()
