# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-08-20 14:09
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auto', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mobiletasklog',
            name='logdatetime',
            field=models.DateTimeField(default=datetime.datetime(2017, 8, 20, 14, 9, 46, 936992)),
        ),
    ]
