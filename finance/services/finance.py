# coding:utf-8
from django.db import transaction

from finance.models import AuditStatus, FOrder, OrderStatus
from libs.utils.string_extension import generate_orderno


class FinanceService:
    def __init__(self, transfer=None):
        self.transfer = transfer

    def inpour(self, user_id, filename):
        try:
            with transaction.atomic():  # 启用事务提交self.
                self.transfer.transfertype = 'inpour'
                self.transfer.certificate = filename
                self.transfer.seller_id = user_id
                self.transfer.status = AuditStatus.Processing.value
                self.transfer.save()

                order = FOrder()
                order.id = generate_orderno()
                order.user_id = user_id
                order.relate_obj = self.transfer.transfertype
                order.relate_id = self.transfer.id
                order.total_amount = self.transfer.amount
                order.orderstatus = OrderStatus.UnPaid.value
                order.save()
            return True
        except Exception as ex:
            return False

    def withdraw(self, user_id):
        try:
            with transaction.atomic():  # 启用事务提交
                self.transfer.transfertype = 'withdraw'
                self.transfer.seller_id = user_id
                self.transfer.status = AuditStatus.Processing.value
                self.transfer.save()

                order = FOrder()
                order.id = generate_orderno()
                order.user_id = user_id
                order.relate_obj = self.transfer.transfertype
                order.relate_id = self.transfer.id
                order.total_amount = self.transfer.amount
                order.orderstatus = OrderStatus.UnPaid.value
                order.save()
            return True
        except Exception as ex:
            return False
