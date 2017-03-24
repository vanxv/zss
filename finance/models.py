# -*- coding: UTF-8 -*-
from collections import namedtuple
from datetime import datetime
from enum import Enum

from django.db import models

from libs.utils.string_extension import get_formattime
from users.models import AuthUser

TRANSTER_TYPE = (
    ('inpour', '充值'),
    ('withdraw', '提现')
)

AUDIT_STATUS = (
    (0, '审核不通过'),
    (1, '审核通过'),
    (2, '待审核'),
)


class AuditStatus(Enum):
    Fail = 0
    Success = 1
    Processing = 2


class FAccountTransferAudits(models.Model):
    transfertype = models.CharField('交易类型', choices=TRANSTER_TYPE, max_length=20, null=True)
    certificate = models.CharField('充值凭证', null=True, blank=True, max_length=200)
    amount = models.DecimalField('金额', max_digits=18, decimal_places=2, blank=True, null=True)
    transfer_account = models.CharField('收款账户', null=True, blank=True, max_length=200)
    seller = models.ForeignKey(AuthUser, related_name='seller', verbose_name='申请人', null=True)
    manager = models.ForeignKey(AuthUser, related_name='manager', verbose_name='审核人', null=True)
    status = models.IntegerField(verbose_name='审核状态', choices=AUDIT_STATUS, null=True)
    remark = models.CharField('备注', max_length=500, blank=True, null=True)
    add_time = models.DateTimeField('创建时间', default=datetime.now)
    audit_time = models.DateTimeField('审核时间', null=True)

    class Meta:
        db_table = 'f_account_transfer_audits'
        verbose_name = '充值&提现'
        verbose_name_plural = '充值&提现列表'

    def to_dict(self):
        return {
            'id': self.id,
            'transfertype': self.transfertype,
            'amount': float(self.amount),
            'transfer_account': self.transfer_account,
            'status': self.status,
            'add_time': get_formattime(self.add_time),
            'audit_time': get_formattime(self.audit_time),
            'remark': self.remark
        }

    def __str__(self):
        return str(self.id)


ORDER_STATUS = (
    (0, '未支付'),
    (1, '已支付'),
    (2, '已退款'),
    (3, '交易成功'),
    (4, '交易关闭')
)


class OrderStatus(Enum):
    UnPaid = 0
    Paid = 1
    Refund = 2


class FOrder(models.Model):
    id = models.CharField('订单号', primary_key=True, max_length=40)
    user = models.ForeignKey(AuthUser, verbose_name='用户')
    relateobj = models.CharField('关联对象', max_length=20, blank=True, null=True)
    transfer = models.ForeignKey(FAccountTransferAudits, verbose_name='关联交易', null=True)
    total_amount = models.DecimalField('总金额(元)', max_digits=18, decimal_places=2, blank=True, null=True)
    paytype = models.CharField('支付方式', max_length=20, blank=True, null=True)
    transaction_id = models.CharField('第三方交易号', max_length=40, blank=True, null=True)
    orderstatus = models.IntegerField('订单状态', choices=ORDER_STATUS, blank=True, null=True)
    add_time = models.DateTimeField('下单时间', default=datetime.now, blank=True, null=True)
    paytime = models.DateTimeField('支付时间', blank=True, null=True)
    remark = models.CharField('备注', max_length=500, blank=True, null=True)

    class Meta:
        db_table = 'f_orders'


class BillType(Enum):
    INCOME = "income"
    EXPEND = "expend"
    WITHDRAW = "withdraw"


# billtype=namedtuple('BillType',['income','expand','inpour','withdraw'])
# billtype({'income':'income'})

class FWalletBill(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name='用户')
    order = models.ForeignKey(FOrder, verbose_name='订单')
    title = models.CharField('标题', max_length=200, blank=True, null=True)
    billtype = models.CharField('账单类型', max_length=20, blank=True, null=True)
    amount = models.DecimalField('账单金额(元)', max_digits=18, decimal_places=2, blank=True, null=True)
    paytype = models.CharField('支付方式', max_length=20, blank=True, null=True)
    balance = models.DecimalField('账号余额', max_digits=18, decimal_places=2, blank=True, null=True)
    add_time = models.DateTimeField('创建时间', default=datetime.now, blank=True, null=True)
    remark = models.CharField('备注', max_length=500, blank=True, null=True)

    class Meta:
        db_table = 'f_walletbills'

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'billtype': self.billtype,
            'amount': self.amount,
            'paytype': self.paytype,
            'balance': self.balance,
            'add_time': get_formattime(self.add_time)
        }
