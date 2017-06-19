# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-06-19 11:12
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_auto_20170619_1108'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='visuallog',
            options={'verbose_name': 'VisualLog', 'verbose_name_plural': 'VisualLog'},
        ),
        migrations.AlterField(
            model_name='pcguid',
            name='addtime',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2017, 6, 19, 11, 12, 54, 275731), null=True, verbose_name='登录验证时间'),
        ),
        migrations.AlterField(
            model_name='pcguidlog',
            name='addtime',
            field=models.DateTimeField(default=datetime.datetime(2017, 6, 19, 11, 12, 54, 276375), verbose_name='loginTime'),
        ),
        migrations.AlterField(
            model_name='visuallog',
            name='addtime',
            field=models.DateTimeField(default=datetime.datetime(2017, 6, 19, 11, 12, 54, 277298), verbose_name='loginTime'),
        ),
    ]