from __future__ import unicode_literals
from datetime import datetime
from django.db import models
from django.contrib.auth.models import AbstractUser  # AbstractBaseUser继承自己的字段，还可以增加自己的字段
from django.utils import timezone
class AuthUser(AbstractUser):
    is_seller = models.IntegerField(default="0", null=True, blank=True, verbose_name=u"是否是卖家")
    is_blacklist = models.IntegerField(default=0, null=True, blank=True, verbose_name=u'blacklist')
    address = models.CharField(max_length=130, default=u"", null=True, blank=True, verbose_name=u"地址")
    realname = models.CharField(max_length=20, null=True, blank=True, verbose_name=u"真名")
    tags = models.CharField(max_length=200, null=True, blank=True, verbose_name=u"标签")
    image = models.ImageField(upload_to="image/Userimage/%Y/%m", default=u'image/default.png', max_length=100,
                              null=True)
    referrercode = models.CharField(max_length=40, null=True, blank=True, verbose_name=u"推荐号")
    remark = models.CharField(max_length=255, null=True, blank=True, verbose_name=u"备注")

    class Meta:
        db_table = 'auth_user'
        verbose_name = "用户信息"
        verbose_name_plural = verbose_name

    # USERNAME_FIELD = 'username'
    def __unicode__(self):
        return self.username


class AuthPlatformUser(models.Model):
    user_id = models.IntegerField(blank=True, null=True)
    nickname = models.CharField(max_length=40, blank=True, null=True)
    avatar = models.CharField(max_length=200, blank=True, null=True)
    platform = models.CharField(max_length=20, blank=True, null=True)
    openid = models.CharField(max_length=200, blank=True, null=True)
    unionid = models.CharField(max_length=200, blank=True, null=True)
    access_token = models.CharField(max_length=200, blank=True, null=True)
    refresh_token = models.CharField(max_length=200, blank=True, null=True)
    expiretime = models.DateTimeField(blank=True, null=True)
    profileurl = models.CharField(max_length=200, blank=True, null=True)
    ts = models.DateTimeField(blank=True, null=True, auto_now=True)

    class Meta:
        db_table = 'auth_platform_user'


class buyscore(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'用户')
    scoregood = models.IntegerField(default='0', verbose_name=u'好评数')
    scoremiddle = models.IntegerField(default='0', verbose_name=u'中评数')
    scorepoor = models.IntegerField(default='0', verbose_name=u'差评数')

    class Meta:
        verbose_name = u'买家好评'
        verbose_name_plural = verbose_name


class sellscore(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'用户')
    scoregood = models.IntegerField(default='0', verbose_name=u'好评数')
    scoremiddle = models.IntegerField(default='0', verbose_name=u'中评数')
    scorepoor = models.IntegerField(default='0', verbose_name=u'差评数')

    class Meta:
        verbose_name = u'卖家好评'
        verbose_name_plural = verbose_name


class tbUsername(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'用户')
    tbUsername = models.CharField(max_length=30,unique=True, verbose_name=u'淘宝账号')
    is_blacklist = models.IntegerField(default=0, null=True, blank=True, verbose_name=u'blacklist')

    class Meta:
        verbose_name = u'淘宝账号'
        verbose_name_plural = verbose_name

    def __unicode__(self):
        return '{0}({1})'.format(self.user, self.tbUsername)


class jdUsername(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'用户')
    jdUsername = models.CharField(max_length=30,unique=True, verbose_name=u'京东账号')
    is_blacklist = models.IntegerField(default=0, null=True, blank=True, verbose_name=u'blacklist')

    class Meta:
        verbose_name = u'京东账号'
        verbose_name_plural = verbose_name

    def __unicode__(self):
        return '{0}({1})'.format(self.user, self.jdUsername)


class wechat(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'用户', blank=True, null=True)
    wechat = models.CharField(max_length=100, verbose_name='wechat', blank=True, null=True, unique=True)
    is_blacklist = models.IntegerField(default=0, null=True, blank=True, verbose_name=u'blacklist')
    class Meta:
        verbose_name = u'wechat'
        verbose_name_plural = verbose_name

class alipay(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'用户', blank=True, null=True)
    alipay = models.CharField(max_length=100, verbose_name='alipay', blank=True, null=True, unique=True)
    is_blacklist = models.IntegerField(default=0, null=True, blank=True, verbose_name=u'blacklist')
    class Meta:
        verbose_name = u'alipay'
        verbose_name_plural = verbose_name

class Bankcard(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'user', blank=True, null=True)
    Bankcard = models.CharField(max_length=100, verbose_name='Bankcard', blank=True, null=True, unique=True)
    is_blacklist = models.IntegerField(default=0, null=True, blank=True, verbose_name=u'blacklist')
    class Meta:
        verbose_name = u'Bankcard'
        verbose_name_plural = verbose_name

class Idcard(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'用户', blank=True, null=True)
    Idcard = models.CharField(max_length=100, verbose_name='Idcard', blank=True, null=True, unique=True)
    Idcardname = models.CharField(max_length=100, verbose_name='Idcardname', blank=True, null=True)
    is_blacklist = models.IntegerField(default=0, null=True, blank=True, verbose_name=u'blacklist')
    class Meta:
        verbose_name = u'Idcard'
        verbose_name_plural = verbose_name
    def __str__(self):              # __unicode__ on Python 2
        return self.user

class pcGuid(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'用户', blank=True, null=True)
    PcGuid = models.CharField(verbose_name=u'pcGuid', unique=True, null=True, max_length=120)
    cpuid = models.CharField(max_length=60, verbose_name=u'cpuid', blank=True, null=True)
    diskid = models.CharField(max_length=120, verbose_name=u'diskid', blank=True, null=True)
    boardid = models.CharField(max_length=120, verbose_name=u'boardid', blank=True, null=True)
    biosid = models.CharField(max_length=120, verbose_name=u'biosid', blank=True, null=True)
    resip = models.GenericIPAddressField(verbose_name=u'RegisterIP', blank=True, null=True)
    addtime = models.DateTimeField(verbose_name=u'登录验证时间', default=timezone.now, blank=True, null=True)
    is_blacklist = models.IntegerField(default=0, null=True, blank=True, verbose_name=u'blacklist')
    class Meta:
        verbose_name = u'pcguid'
        verbose_name_plural = verbose_name

class pcGuidLog(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'user')
    PcGuid = models.ForeignKey(pcGuid, verbose_name=u'pcGuid', null=True)
    resip = models.GenericIPAddressField(verbose_name=u'IP')
    visual = models.IntegerField(verbose_name=u'pcGuid', null=True, blank=True, default=0)
    addtime = models.DateTimeField(verbose_name=u'loginTime', default=timezone.now)
    class Meta:
        verbose_name = u'guidlog'
        verbose_name_plural = verbose_name


class Visuallog(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'user')
    resip = models.GenericIPAddressField(verbose_name=u'IP')
    addtime = models.DateTimeField(verbose_name=u'loginTime', default=timezone.now)
    class Meta:
        verbose_name = u'VisualLog'
        verbose_name_plural = verbose_name



class mobileid(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'用户', blank=True, null=True)
    mobileid = models.CharField(verbose_name=u'mobileid', unique=True, null=True, max_length=120)
    resip = models.GenericIPAddressField(verbose_name=u'RegisterIP', blank=True, null=True)
    addtime = models.DateTimeField(verbose_name=u'登录验证时间', default=timezone.now, blank=True, null=True)
    is_blacklist = models.IntegerField(default=0, null=True, blank=True, verbose_name=u'blacklist')
    class Meta:
        verbose_name = u'mobileid'
        verbose_name_plural = verbose_name

class mobilelog(models.Model):
    user = models.ForeignKey(AuthUser, verbose_name=u'用户', blank=True, null=True)
    mobileid = models.ForeignKey(mobileid, verbose_name=u'mobileid', null=True)
    resip = models.GenericIPAddressField(verbose_name=u'IP')
    addtime = models.DateTimeField(verbose_name=u'loginTime', default=timezone.now)
    class Meta:
        verbose_name = u'phonelog'
        verbose_name_plural = verbose_name


class real_name(models.Model):
    user = models.ForeignKey(AuthUser, null=True, verbose_name=u'related_name')
    realNameid = models.CharField(max_length=30, verbose_name=u'RealNameid', unique=True)
    resip = models.GenericIPAddressField(verbose_name=u'IP')
    addtime = models.DateTimeField(verbose_name=u'loginTime', default=timezone.now)
    class Meta:
        verbose_name = u'realName'
        verbose_name_plural = verbose_name

class blacklistlog(models.Model):
    user = models.ForeignKey(AuthUser, null=True, verbose_name=u'related_name')
    addtime = models.DateTimeField(verbose_name=u'addTime', default=timezone.now)
    resip = models.GenericIPAddressField(verbose_name=u'IP', null=True)
    Remarks = models.CharField(max_length=9999, null=True)
