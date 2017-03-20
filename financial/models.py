#-*- coding: UTF-8 -*-
from datetime import datetime
from django.db import models
from users.models import AuthUser

class treasure(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'用户')
    Amount = models.FloatField(max_length=50, verbose_name=u'余额')
    WithDrawAmount = models.FloatField(verbose_name=u'提现资金', default=0)
    OrdersAmount = models.FloatField(max_length=50, verbose_name=u'任务资金')
    add_time = models.DateTimeField(default=datetime.now, verbose_name=u'最后修改时间')

    class Meta:
        verbose_name = u'财务'
        verbose_name_plural = verbose_name

class WithDrawAmount(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'用户')
    WithDrawAmount = models.FloatField(max_length=50, verbose_name=u'提现资金')
    Status = models.IntegerField(verbose_name=u'状态1.失败,2成功')
    Error = models.CharField(max_length=22, verbose_name=u'错误')
    Time = models.DateTimeField(default=datetime.now, verbose_name=u'最后修改时间')

    class Meta:
        verbose_name = u'提现'
        verbose_name_plural = verbose_name

