from django.db import models
from users.models import AuthUser
class blacklist(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name='用户', null=True)
    buyer = models.CharField(max_length=20,verbose_name='买家账号')
    buyerMobile = models.IntegerField(verbose_name='买家手机',null=True)
    buyeraddress = models.CharField(max_length=30,verbose_name='地址',null=True)
    blacklistsort = models.CharField(max_length=30, verbose_name='类别', null=True)
    buyeralipay = models.CharField(max_length=30,verbose_name='支付宝账户',null=True)
    proveimages1 = models.CharField(max_length=30,verbose_name='证明图片',null=True)
    shllerimages = models.CharField(max_length=30,verbose_name='卖家证明图片',null=True)
    note = models.CharField(max_length=50,verbose_name='备注',null=True)

    class Meta:
        verbose_name = '黑名单'

    def __unicode__(self):
        return self.buyer


# Create your models here.