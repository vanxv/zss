from datetime import datetime
from django.db import models

from libs.utils.string_extension import get_uuid
# Create your models here.

class Customer(models.Model):
    bid=models.IntegerField('商家id',null=True)  #与AuthUser表关联
    username = models.CharField(max_length=20, null=True, blank=True, verbose_name=u"用户名")
    address = models.CharField(max_length=130, default=u"", null=True, blank=True, verbose_name=u"地址")
    mobile = models.CharField(max_length=11, verbose_name=u"手机号")
    wechatName = models.CharField(max_length=20, null=True, blank=True, verbose_name=u"微信名")
    wechat = models.CharField(max_length=20, null=True, blank=True, verbose_name=u"微信号")
    qq = models.CharField(max_length=13, null=True, blank=True, verbose_name=u"qq")
    alipay = models.CharField(max_length=20, null=True, blank=True, verbose_name=u"alipay")
    bankName = models.CharField(choices=(
    ('zsbank', '招商银行'), ('zgbank', '中国银行'), ('jsbank', '建设银行'), ('gsbank', '工商银行'), ('nybank', '农业银行'),
    ('jtbank', '交通银行')), null=True, verbose_name=u"银行", max_length=9)
    bankID = models.CharField(max_length=20, null=True, blank=True, verbose_name=u"银行")
    realname = models.CharField(max_length=20, null=True, blank=True, verbose_name=u"真名")
    tags = models.CharField(max_length=200, null=True, blank=True, verbose_name=u"标签")
    image = models.ImageField(upload_to="image/Userimage/%Y/%m", default=u'image/default.png', max_length=100,
                              null=True)
    referrercode = models.CharField(max_length=40, null=True, blank=True, verbose_name=u"推荐号")
    remark = models.CharField(max_length=255, null=True, blank=True, verbose_name=u"备注")
    add_time = models.DateTimeField(default=datetime.now)

    class Meta:
        db_table='customers'

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'mobile': self.mobile,
            'address': self.address,
            'tags': self.tags,
            'realname': self.realname,
            'add_time': self.add_time.strftime('%Y-%m-%d %H:%M:%S'),
        }

# class buyscore(models.Model):
#     user = models.ForeignKey(UserProfile, verbose_name=u'用户')
#     scoregood = models.IntegerField(default='0', verbose_name=u'好评数')
#     scoremiddle = models.IntegerField( default='0', verbose_name=u'中评数')
#     scorepoor = models.IntegerField(default='0', verbose_name=u'差评数')
#
#     class Meta:
#         verbose_name = u'买家好评'
#         verbose_name_plural = verbose_name