# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-05-17 15:57
from __future__ import unicode_literals

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('goods', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='CryOrder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Money', models.FloatField(verbose_name='交易金额')),
                ('Keywords', models.CharField(max_length=20, verbose_name='关键词')),
                ('platForm', models.IntegerField(choices=[('taobao', 'taobao'), ('jd', 'jd'), ('tmall', 'tmall'), ('1688', '1688')], verbose_name='平台分类1:淘宝,2.京东')),
                ('OrderSort', models.IntegerField(choices=[(1, '红包任务'), (2, '好评返现'), (3, '免费试用')], verbose_name='订单分类')),
                ('Status', models.IntegerField(choices=[(0, '关闭'), (1, '启动')], verbose_name='状态启动与关闭')),
                ('StartTime', models.DateField(verbose_name='startTime开始时间')),
                ('EndTime', models.DateField(verbose_name='EndTime结束时间')),
                ('AddTime', models.DateTimeField(default=datetime.datetime.now, verbose_name='创建时间')),
                ('Note', models.CharField(max_length=1200, verbose_name='备注')),
                ('GoodId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goods.Goods', verbose_name='GoodsId')),
                ('ShopId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goods.Shop', verbose_name='Shopid')),
                ('ShopName', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='UserId卖家')),
            ],
            options={
                'verbose_name': '试用任务表',
                'verbose_name_plural': '试用任务表',
            },
        ),
    ]
