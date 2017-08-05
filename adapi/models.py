from django.db import models
from django.shortcuts import render

class advert(models.Model):
    name = models.CharField(max_length=200, null=True)
    title = models.CharField(max_length=200, null=True)
    thumb = models.CharField(max_length=200, null=True)
    url = models.CharField(max_length=200, null=True)
    timeline = models.IntegerField(name='timeline', null=True)

    class Meta:
        verbose_name = 'advert'
        verbose_name_plural = verbose_name



# Create your models here.
