# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-06-23 16:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cryapp', '0007_auto_20170622_1126'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cryorder',
            name='PlatformOrdersid',
            field=models.CharField(default=0, max_length=40, null=True, verbose_name='平台订单编号'),
        ),
    ]
