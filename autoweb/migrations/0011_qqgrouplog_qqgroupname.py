# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-09-04 22:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autoweb', '0010_qqgroup_qqgroupname'),
    ]

    operations = [
        migrations.AddField(
            model_name='qqgrouplog',
            name='QQGroupName',
            field=models.CharField(max_length=220, null=True),
        ),
    ]
