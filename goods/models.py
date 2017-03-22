from datetime import datetime
from django.db import models
from users.models import AuthUser

PLATFORM = (
    ('taobao', '淘宝'),
    ('jd', '京东')
)


class Shop(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name='用户',null=True)
    shopname = models.CharField('店铺名称',max_length=50 ,null=True)
    sellername = models.CharField('掌柜名称',max_length=50,null=True)
    platform = models.CharField('店铺平台', choices=PLATFORM, max_length=20,null=True)
    add_time = models.DateTimeField(default=datetime.now)

    class Meta:
        db_table='shops'
        verbose_name = '店铺名'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.shopname


class Good(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name='用户',null=True)
    shop = models.ForeignKey(Shop, verbose_name='所属店铺',null=True)
    pgood_id = models.CharField('平台商品id', max_length=50,null=True)
    sendaddress = models.CharField('发货地', max_length=50,null=True)
    image1 = models.ImageField(upload_to="image/tbgoods/%Y/%m", default=u'image/default.png', max_length=100, null=True)
    image2 = models.ImageField(upload_to="image/tbgoods/%Y/%m", default=u'image/default.png', max_length=100, null=True)
    image3 = models.ImageField(upload_to="image/tbgoods/%Y/%m", default=u'image/default.png', max_length=100, null=True)
    keyword1 = models.CharField('1关键词', max_length=50, null=True)
    price1 = models.FloatField('1价格', max_length=50, null=True)
    remark1 = models.CharField('1备注', max_length=50, null=True)
    keyword2 = models.CharField('1关键词', max_length=50, null=True)
    price2 = models.FloatField('2价格', max_length=50, null=True)
    remark2 = models.CharField('2备注', max_length=50, null=True)
    keyword3 = models.CharField('3关键词', max_length=50, null=True)
    price3 = models.FloatField('3价格', max_length=50, null=True)
    remark3 = models.CharField('3备注', max_length=50, null=True)
    keyword4 = models.CharField('4关键词', max_length=50, null=True)
    price4 = models.FloatField('4价格', max_length=50, null=True)
    remark4 = models.CharField('4备注', max_length=50, null=True)
    keywor5 = models.CharField('5关键词', max_length=50, null=True)
    price5 = models.FloatField('5价格', max_length=50, null=True)
    remark5 = models.CharField('5备注', max_length=50, null=True)
    add_time = models.DateTimeField(default=datetime.now)

    class Meta:
        db_table='goods'
        verbose_name = '商品'
        verbose_name_plural = verbose_name
