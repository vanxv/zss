# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-08-20 14:10
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('auto', '0002_auto_20170820_1409'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mobiletasklog',
            name='mobileid',
        ),
        migrations.RemoveField(
            model_name='mobiletasklog',
            name='mobiletask',
        ),
        migrations.DeleteModel(
            name='mobiletasklog',
        ),
    ]
