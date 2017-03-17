from django.db import models
from users.models import UserProfile
# Create your models here.
# class buyscore(models.Model):
#     user = models.ForeignKey(UserProfile, verbose_name=u'用户')
#     scoregood = models.IntegerField(default='0', verbose_name=u'好评数')
#     scoremiddle = models.IntegerField( default='0', verbose_name=u'中评数')
#     scorepoor = models.IntegerField(default='0', verbose_name=u'差评数')
#
#     class Meta:
#         verbose_name = u'买家好评'
#         verbose_name_plural = verbose_name