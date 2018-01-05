from django.db import models
from users.models import AuthUser
from django.utils import timezone

# Create your models here.
class woopGameName(models.Model):
    user = models.ForeignKey(AuthUser)
    woopGameName = models.CharField(max_length=200)

class woopGameOutcome(models.Model):
    woopGameNameId = models.ForeignKey(woopGameName)
    ValueObject = models.CharField(max_length=70, null=True)
    Value = models.CharField(max_length=999, null=True)

ObstaclesSort_Choices = (
    (1, 'mood'),
    (2, 'perform'),
    (3, 'bug'),
    (4, 'Rules'),
)

class woopGameObstacles(models.Model):
    woopGameNameId = models.ForeignKey(woopGameName)
    ObstaclesSort = models.CharField(choices=ObstaclesSort_Choices, max_length=80, null=True)
    Obstacles = models.CharField(max_length=300, null=True)
    whenTime = models.CharField(max_length=200, null=True)
    whenmethod = models.CharField(max_length=999, null=True)
    score = models.IntegerField()

class WoopGameScore(models.Model):
    user = models.ForeignKey(AuthUser)
    woopGameObstacles = models.ForeignKey(woopGameObstacles)
    score = models.IntegerField()

class UserWoopGameScore(models.Model):
    user = models.ForeignKey(AuthUser)
    time = models.DateTimeField(default=timezone.now())
    score = models.BigIntegerField()

class WoopGameReward(models.Model):
    user = models.ForeignKey(AuthUser)
    woopGameReward = models.CharField(max_length=900, null=True)
    time = models.DateTimeField(default=timezone.now())
    score = models.IntegerField()
