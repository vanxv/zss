from django.db import models
from goods.models import Goods, Shop
from users.models import AuthUser, tbUsername,jdUsername
from datetime import datetime
from libs.utils.string_extension import get_uuid

PLATFORM = (
    ('taobao', 'taobao'),
    ('jd', 'jd'),
    ('tmall', 'tmall'),
    ('1688', '1688'),
)
orderSortChoices =(
    (1, '红包任务'),
    (2, '好评返现'),
    (3, '免费试用'),
)
StatusChoices =(
    (0, '关闭'),
    (1, '启动'),
    (2, '接任务'),
    (3, '提交等待审核'),
    (4, '审核不通过'),
    (5, '完成'),
    (6, '操作员接试用'),
    (7, '等待审核'),
    (8, '操作员完成'),

)
# Create your models here.
class CryOrder(models.Model):
    id = models.CharField('id', max_length=32, default=get_uuid, primary_key=True)
    GoodId = models.ForeignKey(Goods, verbose_name=u'GoodsId', on_delete='CASCADE')
    ShopId = models.ForeignKey(Shop, verbose_name=u'Shopid', on_delete='CASCADE')
    Userid = models.ForeignKey(AuthUser, related_name='Userid', on_delete='CASCADE')
    buyerid = models.ForeignKey(AuthUser, related_name='buyerid', null=True, on_delete='CASCADE')
    managerid = models.ForeignKey(AuthUser, related_name='managerid', null=True, on_delete='CASCADE')
    tbUsername = models.ForeignKey(tbUsername, related_name='tbid', null=True, on_delete='CASCADE')
    jdUsername = models.ForeignKey(jdUsername, related_name='jdid', null=True, on_delete='CASCADE')
    Money = models.DecimalField(max_digits=12, decimal_places=2, name='Money', null=True)
    Express = models.DecimalField(max_digits=12, decimal_places=2, verbose_name=u'快递费', null=True)
    sellerMoney = models.DecimalField(max_digits=12, decimal_places=2, verbose_name=u'商家费用', null=True)
    buyerMoney = models.DecimalField(max_digits=12, decimal_places=2, verbose_name=u'买手费用', null=True)
    Keywords = models.CharField(verbose_name=u'关键词', max_length=20)
    platform = models.CharField('店铺平台', max_length=20, null=True, choices=PLATFORM)
    OrderSort = models.IntegerField(verbose_name=u'订单分类', choices=orderSortChoices, null=True)
    PlatformOrdersid = models.CharField(verbose_name=u'平台订单编号', null=True, default=0, max_length=40)
    Status = models.IntegerField(verbose_name=u'状态启动与关闭', choices=StatusChoices)
    StartTime = models.DateField(verbose_name=u'startTime开始时间')
    EndTime = models.DateField(verbose_name=u'EndTime结束时间')
    AddTime = models.DateTimeField('创建时间', default=datetime.now)
    Note = models.CharField(verbose_name=u'备注', max_length=1200)
    class Meta:
        verbose_name = '试用任务表'
        verbose_name_plural = verbose_name

