from enum import Enum #序列化
from django.db import models #数据库
from datetime import datetime
# Create your models here.
from libs.utils.string_extension import get_formattime
from users.models import AuthUser #用户名登录权


class CashbackTask(models.Model):
    seller_id = models.IntegerField('商家id', null=True)
    name = models.CharField('名称', max_length=50, null=True, blank=True)
    amount = models.DecimalField('返现金额', null=True, blank=True, max_digits=18, decimal_places=2)
    max_count = models.IntegerField('最大参与人数', null=True)
    expiretime = models.DateTimeField('截止时间', blank=True, null=True)
    remark = models.CharField('备注', max_length=200, null=True)
    add_time = models.DateTimeField(default=datetime.now)

    class Meta:
        db_table = 'cashback_tasks'
        verbose_name = '返现任务CashbackTask'
        verbose_name_plural = verbose_name

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'amount': float(self.amount),
            'max_count': self.max_count,
            'expiretime': get_formattime(self.expiretime),
            'add_time': get_formattime(self.add_time)
        }


class CashbackTaskGoods(models.Model):
    seller_id = models.IntegerField('商家id', null=True)  # 与AuthUser表关联
    task_id = models.IntegerField('任务id', null=True)
    shop_id = models.CharField('店铺id', max_length=32, null=True)
    goods_id = models.CharField('商品id', max_length=32, null=True)

    class Meta:
        db_table = 'cashback_task_goods'
        verbose_name = '任务产品cashback_task_goods'
        verbose_name_plural = verbose_name


CASHBACK_CHOICES = (
    (1, '待审核'),
    (2, '审核通过，等待平台打款'),
    (3, '关闭申请'),
    (4, '已完成')
)


class CashbackStatus(Enum):
    Processing = 1
    Completed = 2
    Closed = 3


CASHBACK_STATUS = {
    1: '待审核',
    2: '审核通过',
    3: '已关闭',
    4: '已完成'
}


class Cashback(models.Model):
    seller = models.ForeignKey(AuthUser, verbose_name='商家', null=True, on_delete='CASCADE')  # 与AuthUser表关联
    task_id = models.IntegerField('任务id', null=True)
    customer_id = models.IntegerField('会员id', null=True)
    wechat = models.CharField('会员微信', max_length=50, null=True, blank=True)
    alipay = models.CharField('会员支付宝账号', max_length=50, null=True, blank=True)
    orderno = models.CharField('订单号', max_length=100, null=True, blank=True)
    amount = models.DecimalField('返现金额', null=True, blank=True, max_digits=18, decimal_places=2)
    certificate = models.CharField('好评凭证', max_length=200, null=True, blank=True)
    showpic1 = models.CharField('买家秀', max_length=200, null=True, blank=True)
    showpic2 = models.CharField('买家秀', max_length=200, null=True, blank=True)
    status = models.IntegerField('状态', choices=CASHBACK_CHOICES, null=True)
    add_time = models.DateTimeField('创建时间', default=datetime.now)

    class Meta:
        db_table = 'cashbacks'
        verbose_name = '返现列表cashbacks'
        verbose_name_plural = verbose_name

    def certificate_img(self):
        return '<img src="%s" />' % self.certificate

    certificate_img.short_description = '截图'
    certificate_img.allow_tags = True

    def to_dict(self, *args):
        return {
            'id': self.id,
            'task_id': self.task_id,
            'task_name': args[0],
            'customer_id': self.customer_id,
            'customer_name': args[1],
            'wechat': self.wechat,
            'alipay': self.alipay,
            'orderno': self.orderno,
            'amount': self.amount,
            'status': CASHBACK_STATUS[self.status],
            'add_time': get_formattime(self.add_time)
        }


class Sendsms(models.Model):
    seller_id = models.IntegerField('商家id', null=True)
    customer_id = models.IntegerField('会员id', null=True)
    mobile = models.CharField('手机号', max_length=20, null=True, blank=True)
    content = models.CharField('内容', max_length=200, null=True, blank=True)
    captcha = models.CharField('验证码', max_length=100, null=True, blank=True)
    is_success = models.NullBooleanField('发送是否成功', null=True)
    add_time = models.DateTimeField(default=datetime.now)

    class Meta:
        db_table = 'sendsms'

    def to_dict(self, customer_name):
        return {
            'id': self.id,
            'customer_id': self.customer_id,
            'customer_name': customer_name,
            'mobile': self.mobile,
            'content': self.content,
            'add_time': get_formattime(self.add_time)
        }


class WXOfficialConfig(models.Model):
    user_id = models.IntegerField('商家id', null=True)
    appid = models.CharField(max_length=200, null=True, blank=True)
    appsecret = models.CharField(max_length=200, null=True, blank=True)
    mchid = models.CharField(max_length=200, null=True, blank=True)
    key = models.CharField(max_length=200, null=True)
    apptoken = models.CharField(max_length=200, null=True)
    encodingaeskey = models.CharField(max_length=200, null=True, blank=True)

    class Meta:
        db_table = 'wxofficial_config'
