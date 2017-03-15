#-*- coding: UTF-8 -*-
from datetime import datetime
from django.db import models
from users.models import UserProfile

class taobaoshop(models.Model):
    user = models.ForeignKey(UserProfile, verbose_name=u'用户')
    tbShopName = models.CharField(max_length=50, verbose_name=u'淘宝店铺名')
    Remark = models.CharField(max_length=20, verbose_name=u'备注')
    add_time = models.DateTimeField(default=datetime.now)

    class Meta:
        verbose_name = u'淘宝店铺名'
        verbose_name_plural = verbose_name
    def  __unicode__(self):
        return self.tbShopName

class jdshop(models.Model):
    user = models.ForeignKey(UserProfile, verbose_name=u'用户')
    jdshopname = models.CharField(max_length=50, verbose_name=u'京东店铺名')
    Remark = models.CharField(max_length=20, verbose_name=u'备注')
    add_time = models.DateTimeField(default=datetime.now)

    class Meta:
        verbose_name = u'京东店铺名'
        verbose_name_plural = verbose_name
    def  __unicode__(self):
        return '{0}({1})'.format(self.user, self.jdshopname)

class TaobaoGoods(models.Model):
    user = models.ForeignKey(UserProfile, verbose_name=u'用户')
    taobaoshop = models.ForeignKey(taobaoshop, verbose_name=u'所属店铺')
    tbID = models.CharField(max_length=50, verbose_name=u'淘宝商品ID')
    SendAddress = models.CharField(max_length=50, verbose_name=u'发货地')
    tbimage = models.ImageField(upload_to="image/tbgoods/%Y/%m", default=u'image/default.png', max_length=100, null=True)
    tbimage2 = models.ImageField(upload_to="image/tbgoods/%Y/%m", default=u'image/default.png', max_length=100, null=True)
    tbimage3 = models.ImageField(upload_to="image/tbgoods/%Y/%m", default=u'image/default.png', max_length=100, null=True)
    tbKeyword1 =  models.CharField(max_length=50, verbose_name=u'1关键词', null=True)
    tbPrice1 =  models.FloatField(max_length=50, verbose_name=u'1价格', null=True)
    tbRemark1 =  models.CharField(max_length=50, verbose_name=u'1备注', null=True)
    tbKeyword2 =  models.CharField(max_length=50, verbose_name=u'1关键词', null=True)
    tbPrice2 =  models.FloatField(max_length=50, verbose_name=u'2价格', null=True)
    tbRemark2 =  models.CharField(max_length=50, verbose_name=u'2备注', null=True)
    tbKeyword3 =  models.CharField(max_length=50, verbose_name=u'3关键词', null=True)
    tbPrice3 =  models.FloatField(max_length=50, verbose_name=u'3价格', null=True)
    tbRemark3 =  models.CharField(max_length=50, verbose_name=u'3备注', null=True)
    tbKeyword4 =  models.CharField(max_length=50, verbose_name=u'4关键词', null=True)
    tbPrice4 =  models.FloatField(max_length=50, verbose_name=u'4价格', null=True)
    tbRemark4 =  models.CharField(max_length=50, verbose_name=u'4备注', null=True)
    tbKeyword5 =  models.CharField(max_length=50, verbose_name=u'5关键词', null=True)
    tbPrice5 =  models.FloatField(max_length=50, verbose_name=u'5价格', null=True)
    tbRemark5 =  models.CharField(max_length=50, verbose_name=u'5备注', null=True)
    add_time = models.DateTimeField(default=datetime.now)

    class Meta:
        verbose_name = u'淘宝商品ID'
        verbose_name_plural = verbose_name

class JDGoods(models.Model):
    user = models.ForeignKey(UserProfile, verbose_name=u'用户')
    jdshopid = models.ForeignKey(jdshop, verbose_name=u'所属机构')
    jdid = models.CharField(max_length=50, verbose_name=u'京东商品ID')
    SendAddress = models.CharField(max_length=50, verbose_name=u'发货地')
    jdimage = models.ImageField(upload_to="image/jdgoods/%Y/%m", default=u'image/default.png', max_length=100, null=True)
    jdimage2 = models.ImageField(upload_to="image/jdgoods/%Y/%m", default=u'image/default.png', max_length=100, null=True)
    jdimage3 = models.ImageField(upload_to="image/jdgoods/%Y/%m", default=u'image/default.png', max_length=100, null=True)
    jdKeyword1 =  models.CharField(max_length=50, verbose_name=u'1关键词')
    jdPrice1 =  models.FloatField(max_length=50, verbose_name=u'1价格')
    jdRemark1 =  models.CharField(max_length=50, verbose_name=u'1备注')
    jdKeyword2 =  models.CharField(max_length=50, verbose_name=u'1关键词')
    jdPrice2 =  models.FloatField(max_length=50, verbose_name=u'2价格')
    jdRemark2 =  models.CharField(max_length=50, verbose_name=u'2备注')
    jdKeyword3 =  models.CharField(max_length=50, verbose_name=u'3关键词')
    jdPrice3 =  models.FloatField(max_length=50, verbose_name=u'3价格')
    jdRemark3 =  models.CharField(max_length=50, verbose_name=u'3备注')
    jdKeyword4 =  models.CharField(max_length=50, verbose_name=u'4关键词')
    jdPrice4 =  models.FloatField(max_length=50, verbose_name=u'4价格')
    jdRemark4 =  models.CharField(max_length=50, verbose_name=u'4备注')
    jdKeyword5 =  models.CharField(max_length=50, verbose_name=u'5关键词')
    jdPrice5 =  models.FloatField(max_length=50, verbose_name=u'5价格')
    jdRemark5 =  models.CharField(max_length=50, verbose_name=u'5备注')
    add_time = models.DateTimeField(default=datetime.now)

    class Meta:
        verbose_name = u'京东商品ID'
        verbose_name_plural = verbose_name
