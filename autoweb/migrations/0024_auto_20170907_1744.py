# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-09-07 17:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autoweb', '0023_auto_20170907_1559'),
    ]

    operations = [
        migrations.AddField(
            model_name='qqgroup',
            name='number',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='qqgrouplog',
            name='number',
            field=models.IntegerField(null=True),
        ),
    ]
