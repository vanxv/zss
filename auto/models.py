from django.db import models
from users.models import AuthUser
from django.utils import timezone
# Create your models here.


class mobileid(models.Model):
    platformVersion = models.CharField(null=True, max_length=200, name='platformVersion')
    deviceName = models.CharField(max_length=500, name='andriodname', null=True)
    StyleLabel = models.CharField(max_length=500, name='label_User_portrait', null=True)
    sort = models.IntegerField(name='mobileSort',null=True)
    class Meta:
        verbose_name = 'mobileid'
        verbose_name_plural = verbose_name

class softid(models.Model):
    appPackage = models.CharField(null=True, max_length=200)
    appActivity = models.CharField(null=True, max_length=200)
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
    (3, 'send_message_to_user_Accoutid'),
    (4, 'send_message_to_GROUP_Accoutid'),
    (5, 'send_message_to_friend_list'),
    (6, 'send_message_to_GROUP_list'),
)
class mobiletask(models.Model):
    mobileid = models.ForeignKey(mobileid)
    softid = models.ForeignKey(softid)
    taskSort = models.IntegerField(choices=mobiletask_taskSort_choices, null=True)
    AccountId = models.CharField(null=True, max_length=200, name='AccountId')
    content = models.CharField(null=True, max_length=200, name='content')
    startTime = models.DateTimeField(null=True,default=timezone.now)
    endTime = models.DateTimeField(null=True,default=timezone.now)
    statusTime = models.DateTimeField(null=True,default=timezone.now)
    status = models.IntegerField(null=True, default=1, choices=mobiletask_status_choices)
    class Meta:
        verbose_name = 'mobileid'
        verbose_name_plural = verbose_name

class mobiletasklog(models.Model):
    mobileid = models.ForeignKey(mobileid)
    mobiletask = models.ForeignKey(mobiletask)
