from datetime import datetime
from django.db import models
from users.models import AuthUser
from goods.models import Shop, Good

PLATFORM = (
    ('taobao', '淘宝'),
    ('jd', '京东')
)

ORDER_STATUS = (
    (1, '买家已付款，等待卖家发货'),
    (2, '卖家已发货，等待买家确认'),
    (3, '交易成功'),
    (4, '交易关闭')
)


class Order(models.Model):
    id = models.CharField('订单id', primary_key=True, max_length=50)
    user = models.ForeignKey(AuthUser, verbose_name='用户', null=True)
    shop_id = models.IntegerField('店铺', null=True)
    good_id = models.IntegerField('商品', null=True)
    keyword = models.CharField(max_length=50, verbose_name='关键词', null=True)
    count = models.IntegerField('数量', default=0, null=True)
    amount = models.DecimalField('金额', max_digits=18, decimal_places=2, null=True)
    status = models.IntegerField('订单状态1.审核2,完成.3,失败,4执行中,5失败,6.审核未通过', null=True)
    error_desc = models.CharField(max_length=255, null=True, blank=True, verbose_name='备注')
    platform = models.CharField('平台', choices=PLATFORM, max_length=20, null=True)
    add_time = models.DateTimeField(default=datetime.now, verbose_name='最后修改时间')
    remark = models.CharField(max_length=255, null=True, blank=True, verbose_name='备注')

    class Meta:
        db_table = 'orders'
        verbose_name = '订单'
        verbose_name_plural = verbose_name

    def to_dict(self):
        return {
            'id': self.id,
            'shop_id': self.shop_id,
            'good_id': self.good_id,
            'count': self.count,
            'amount': float(self.amount),
            'status': self.status,
            'platform': self.platform,
            'add_time': self.add_time.strftime('%Y-%m-%d %H:%M:%S'),
            'remark': self.remark
        }
