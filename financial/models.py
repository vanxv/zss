from django.db import models
from users.models import AuthUser
from django.utils import timezone
from cryapp.models import CryOrder
import uuid
class deposit(models.Model):
    user = models.ForeignKey(AuthUser)
    deposit = models.DecimalField(max_digits=6, decimal_places=2)
    datetime = models.DateTimeField(default=timezone.now)
    remark = models.CharField('备注', max_length=500, blank=True, null=True)

    class Meta:
        verbose_name = 'deposit'
        verbose_name_plural = verbose_name
# Create your models here.

# Create orderBill

orderBill_orderBillSort =(
    (0, 'refund'),
    (1, 'CryOrders'),
    (2, 'FlowOrder'),
)

class orderBill(models.Model):
    CryOrderid = models.ForeignKey(CryOrder, related_name='orderBillCryOrderid')
    total_amount = models.DecimalField('总金额(元)', max_digits=8, decimal_places=2, blank=True, null=True)
    orderBillSort = models.IntegerField('订单状态', choices=orderBill_orderBillSort, blank=True, null=True)
    datetime = models.DateTimeField(default=timezone.now)
    remark = models.CharField('备注', max_length=500, blank=True, null=True)
    class Meta:
        verbose_name = 'orderBill'
        verbose_name_plural = verbose_name


# Create Top-up_withdrawal
TopUp_withdrawalSort =(
    (1, 'Top-up'),
    (2, 'withdrawal'),
)
TopUp_withdrawalStatus=(
    (1, 'waitting'),
    (2, 'through'),
    (3, 'Not_Through'),
)
#TopUp_withdrawal
class TopUpwithdrawal(models.Model):
    TopUp_withdrawalSort = models.CharField('交易类型', choices=TopUp_withdrawalSort, max_length=20, null=True)
    certificate = models.CharField('充值凭证', null=True, blank=True, max_length=200)
    certificateid = models.IntegerField('账单编号', null=True, blank=True)
    amount = models.DecimalField('金额', max_digits=8, decimal_places=2, blank=True, null=True)
    transfer_account = models.CharField('收款账户', null=True, blank=True, max_length=200)
    user = models.ForeignKey(AuthUser, name='user', null=True, related_name='user')
    managerUser = models.ForeignKey(AuthUser, name='manager', null=True, related_name='manageUser')
    status = models.IntegerField(verbose_name='审核状态', choices=TopUp_withdrawalStatus, null=True)
    remark = models.CharField('备注', max_length=500, blank=True, null=True)
    add_time = models.DateTimeField('创建时间', default=timezone.now)
    audit_time = models.DateTimeField('审核时间', default=timezone.now, null=True)
    class Meta:
        verbose_name = 'TopUp_withdrawal'
        verbose_name_plural = verbose_name



bankSort = (
    (1, 'alipay'),
    (2, 'wechat'),
    (3, 'jiaotongBank'),
    (4, 'GongshangBank'),
)

BankStatusSort = (
    (0, 'off'),
    (1, 'on'),
)
#BankAccount
class BankAccount():
    BankSort = models.IntegerField('BankSort', choices=bankSort, max_length=5)
    BankAccount = models.CharField('BankAccount', max_length=30)
    Status = models.IntegerField('bankStatus', choices=BankStatusSort, max_length=2, default=1)
    Note = models.CharField('Note', max_length=100)
    class Meta:
        verbose_name = 'BankAccount'
        verbose_name_plural = verbose_name
