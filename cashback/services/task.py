# coding:utf-8
from django.db import transaction
from cashback.models import CashbackTaskGoods, CashbackTask, CashbackStatus
from crm.models import Customer
from finance.models import FOrder, OrderStatus, FWalletBill
from libs.utils.string_extension import safe_dict_value, generate_orderno

class TaskService:
    def save_task_goods(self, task_id, user_id, products):
        task_goods = []
        for item in products:
            if item['pId'] is None:
                continue

            goods = CashbackTaskGoods()
            goods.seller_id = user_id
            goods.task_id = task_id
            goods.shop_id = item['pId']
            goods.goods_id = item['id']
            task_goods.append(goods)

        CashbackTaskGoods.objects.bulk_create(task_goods)


class CashbackService:
    def __init__(self, cashback=None):
        self.cashback = cashback

    def audit(self, user_id, status):
        '''
        审核返现申请
        :param user_id:
        :param status:
        :return:
        '''
        try:
            with transaction.atomic():
                self.cashback.status = status
                self.cashback.save()

                if status == CashbackStatus.Completed.value:  # 审核通过
                    order = FOrder(id=generate_orderno())
                    order.user_id = user_id
                    order.relate_id = self.cashback.id
                    order.relate_obj = 'cashback',
                    order.total_amount = self.cashback.amount
                    order.orderstatus = OrderStatus.Paid.value
                    order.save()

                    # 更改商家账户余额
                    order.user.balance = order.user.balance - self.cashback.amount
                    order.user.save()

                    # 创建商家账单
                    bill = FWalletBill()
                    bill.user_id = user_id
                    bill.order_id = order.id
                    bill.title = '返现账单'
                    bill.billtype = 'cashback'
                    bill.amount = order.total_amount
                    bill.balance = order.user.balance
                    bill.save()
                return True
        except Exception as ex:
            return False

    def get_taskname(self, cashback):
        tasks = CashbackTask.objects.filter(id=cashback.task_id).values('id', 'name')
        return safe_dict_value(list(filter(lambda m: m['id'] == cashback.task_id, tasks)), 'name')

    def get_customername(self, cashback):
        customers = Customer.objects.filter(id=cashback.customer_id).values('id', 'username')
        return safe_dict_value(list(filter(lambda m: m['id'] == cashback.customer_id, customers)),
                               'username')
