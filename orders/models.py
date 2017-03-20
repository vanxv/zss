from datetime import datetime
from django.db import models
from users.models import AuthUser
from goods.models import Shop, Good

PLATFORM = (
    ('taobao', '淘宝'),
    ('jd', '京东')
)


class Order(models.Model):
    id=models.CharField('订单id',primary_key=True,max_length=50)
    user = models.ForeignKey(AuthUser, verbose_name='用户')
    shop = models.ForeignKey(Shop, verbose_name='店铺')
    good = models.ForeignKey(Good, verbose_name='商品')
    keyword = models.CharField(max_length=50, verbose_name='关键词')
    count = models.IntegerField('数量',default=0)
    amount = models.DecimalField('金额', max_digits=18, decimal_places=2)
    status = models.IntegerField('订单状态1.审核2,完成.3,失败,4执行中,5失败,6.审核未通过')
    error_desc = models.CharField(max_length=255, null=True, blank=True, verbose_name='备注')
    platform = models.CharField('平台', choices=PLATFORM, max_length=20)
    add_time = models.DateTimeField(default=datetime.now, verbose_name='最后修改时间')
    remark = models.CharField(max_length=255, null=True, blank=True, verbose_name='备注')

    class Meta:
        db_table = 'orders'
        verbose_name = '订单'
        verbose_name_plural = verbose_name
