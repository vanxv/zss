from django.db import models
from users.models import AuthUser
from django.utils import timezone
# Create your models here.

class UserPortrait(models.Model):
    UserPortraitname = models.CharField(max_length=120)

UserPortraitSortChoose =(
    (1,'QQSendMessage'),
    (2,'QQSaysay'),
    (3,'QQSpace'),
)
class UserPortraitlog(models.Model):
    UserPortraitId = models.ForeignKey(UserPortrait, name='UserPortkey', on_delete='CASCADE')
    contains = models.CharField(max_length=9999, name='contains')
    UserPortraitSort = models.IntegerField(choices=UserPortraitSortChoose, name='UserPortSort')
    startTime = models.DateTimeField(name='startTime')


class softid(models.Model):
    appPackage = models.CharField(null=True, max_length=200)
    appActivity = models.CharField(null=True, max_length=200)
    class Meta:
        verbose_name = 'mobileid'
        verbose_name_plural = verbose_name

class mobileid(models.Model):
    platformVersion = models.CharField(null=True, max_length=200)
    deviceName = models.CharField(max_length=500, null=True)
    udid = models.CharField(max_length=500, null=True)
    StyleLabel = models.CharField(max_length=500, null=True)
    webserverurl = models.CharField(max_length=500, null=True)
    sort = models.IntegerField(name='mobileSort',null=True)
    QQ = models.CharField(name='QQ', null=True,max_length=20)
    UserPortraitId = models.ForeignKey(UserPortrait, null=True, blank=True, on_delete='CASCADE')
    note = models.CharField(max_length=500, null=True)

    class Meta:
        verbose_name = 'mobileid'
        verbose_name_plural = verbose_name

mobiletask_status_choices = (
    (0, 'Done'),
    (1, 'Start_Task'),
    (2, 'working'),
)
mobiletask_taskSort_choices = (
    (1, 'add_User'),
    (2, 'ADD_GROUP'),
    (3, 'send_message_to_friend_list'),
    (4, 'send_message_to_GROUP_list'),
    (5, 'send_message_to_user_Accoutid'),
    (6, 'send_message_to_GROUP_Accoutid'),
    (7, 'Get_Pople_list'),
    (8, 'Get_Group_list'),
    (9, 'Get_Group_QQ_list'),
)
class mobiletask(models.Model):
    mobileid = models.ForeignKey(mobileid, null=True, on_delete='CASCADE')
    UserPortraitId = models.ForeignKey(UserPortrait, null=True, on_delete='CASCADE')
    softid = models.ForeignKey(softid, on_delete='CASCADE')
    taskSort = models.IntegerField(choices=mobiletask_taskSort_choices, null=True)
    AccountId = models.CharField(null=True, max_length=200)
    content = models.CharField(null=True, max_length=9999)
    startTime = models.DateTimeField(null=True,default=timezone.now)
    endTime = models.DateTimeField(null=True,default=timezone.now)
    statusTime = models.DateTimeField(null=True,default=timezone.now)
    status = models.IntegerField(null=True, default=1, choices=mobiletask_status_choices)
    SpecifyStartTime = models.IntegerField(null=True)
    SpecifyEndTime = models.IntegerField(null=True)

    class Meta:
        verbose_name = 'mobileid'
        verbose_name_plural = verbose_name

class mobileAccount(models.Model):
    mobileid = models.ForeignKey(mobileid, on_delete='CASCADE')
    QQ = models.CharField(max_length=13, null=True)
    QQps = models.CharField(max_length=30, null=True)
    QQmobile = models.CharField(max_length=20, null=True)
    wechat = models.CharField(max_length=100, null=True)
    wechatps = models.CharField(max_length=100, null=True)
    wechatmobile = models.CharField(max_length=20, null=True)
    class Meta:
        verbose_name = 'mobileAccount'
        verbose_name_plural = verbose_name

class QQID(models.Model):
    QQ = models.CharField(null=True,max_length=13)
    password = models.CharField(max_length=80,null=True)
    note = models.CharField(max_length=300,null=True)
    class Meta:
        verbose_name = 'QQID'
        verbose_name_plural = verbose_name

class QQFriends(models.Model):
    QQ = models.CharField(null=True,max_length=13)
    QQFriends = models.CharField(null=True,max_length=13)
    name = models.CharField(max_length=120,null=True)
    nick = models.CharField(max_length=120,null=True)
    contains = models.CharField(max_length=200,null=True)
    time = models.DateTimeField(null=True,default=timezone.now)

    class Meta:
        verbose_name = 'QQFriends'
        verbose_name_plural = verbose_name

QQFriendslog_add_del = (
    (1,'add'),
    (2,'delete')
)
class QQFriendslog(models.Model):
    QQ = models.CharField(null=True,max_length=13)
    QQFriends = models.CharField(null=True,max_length=13)
    name = models.CharField(max_length=120,null=True)
    nick = models.CharField(max_length=120,null=True)
    contains = models.CharField(max_length=200,null=True)
    status = models.IntegerField(choices=QQFriendslog_add_del)
    time = models.DateTimeField(null=True,default=timezone.now)
    class Meta:
        verbose_name = 'QQFriendslog'
        verbose_name_plural = verbose_name


class QQGroup(models.Model):
    QQ = models.CharField(null=True,max_length=13)
    QQGroup = models.CharField(null=True,max_length=13)
    QQGroupName = models.CharField(null=True, max_length=220)
    number = models.IntegerField(null=True)
    time = models.DateTimeField(null=True,default=timezone.now)
    class Meta:
        verbose_name = 'QQGroup'
        verbose_name_plural = verbose_name

class QQGrouplog(models.Model):
    QQ = models.CharField(null=True,max_length=13)
    QQGroup = models.CharField(null=True,max_length=13)
    number = models.IntegerField(null=True)
    QQGroupName = models.CharField(null=True, max_length=220)
    status = models.IntegerField(choices=QQFriendslog_add_del)
    time = models.DateTimeField(null=True,default=timezone.now)
    class Meta:
        verbose_name = 'QQGrouplog'
        verbose_name_plural = verbose_name

class QQGroupList(models.Model):
    QQGroup = models.CharField(null=True,max_length=13)
    QQ = models.CharField(max_length=13,null=True)
    level = models.IntegerField(null=True)
    name = models.CharField(max_length=100, null=True)
    contains = models.CharField(max_length=500, null=True)
    time = models.DateTimeField(null=True,default=timezone.now)

    class Meta:
        verbose_name = 'QQGroupList'
        verbose_name_plural = verbose_name

class QQGroupListlog(models.Model):
    QQGroup = models.CharField(null=True,max_length=13)
    QQ = models.CharField(max_length=13,null=True)
    name = models.CharField(max_length=100, null=True)
    contains = models.CharField(max_length=500, null=True)
    status = models.IntegerField(choices=QQFriendslog_add_del,null=True)
    time = models.DateTimeField(null=True,default=timezone.now)


    class Meta:
        verbose_name = 'QQGroupListlog'
        verbose_name_plural = verbose_name
