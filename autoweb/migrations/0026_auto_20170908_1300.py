# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-09-08 13:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autoweb', '0025_auto_20170907_1838'),
    ]

    operations = [
        migrations.AlterField(
            model_name='qqid',
            name='QQ',
            field=models.CharField(max_length=13, null=True),
        ),
    ]
