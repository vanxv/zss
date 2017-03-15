from datetime import datetime
from django.db import models
from users.models import UserProfile
from goods.models import TaobaoGoods, JDGoods, taobaoshop, jdshop

class tborder(models.Model):
    user = models.ForeignKey(UserProfile, verbose_name=u'用户')
    taobaoshop = models.ForeignKey(taobaoshop, verbose_name=u'淘宝店铺')
    TaobaoGoods = models.ForeignKey(TaobaoGoods, verbose_name=u'tb产品ID')
    tbOrderKeyword = models.CharField(max_length=50, verbose_name=u'淘宝关键词')
    tbOrderNumber = models.IntegerField(verbose_name=u'数量')
    Amount = models.FloatField(max_length=50, verbose_name=u'金额')
    tbOrderState = models.IntegerField(verbose_name=u'订单状态1.审核2,完成.3,失败,4执行中,5失败,6.审核未通过')
    tbOrderError = models.CharField(max_length=255, null=True, blank=True, verbose_name=u"备注")
    add_time = models.DateTimeField(default=datetime.now, verbose_name=u'最后修改时间')
    remark = models.CharField(max_length=255, null=True, blank=True, verbose_name=u"备注")
    class Meta:
        verbose_name = u'淘宝订单'
        verbose_name_plural = verbose_name

class jdorder(models.Model):
    user = models.ForeignKey(UserProfile, verbose_name=u'用户')
    jdshop = models.ForeignKey(jdshop, verbose_name=u'京东店铺')
    JDGoods = models.ForeignKey(JDGoods, verbose_name=u'jd产品ID')
    tbOrderKeyword = models.CharField(max_length=50, verbose_name=u'淘宝关键词')
    tbOrderNumber = models.IntegerField(verbose_name=u'数量')
    Amount = models.FloatField(verbose_name=u'金额')
    jdOrderState = models.IntegerField(verbose_name=u'订单状态1.审核2,完成.3,失败,4执行中,5失败,6.审核未通过')
    jdOrderError = models.CharField(max_length=255, null=True, blank=True, verbose_name=u"备注")
    add_time = models.DateTimeField(default=datetime.now, verbose_name=u'最后修改时间')
    remark = models.CharField(max_length=255, null=True, blank=True, verbose_name=u"备注")
    class Meta:
        verbose_name = u'京东订单'
        verbose_name_plural = verbose_name

