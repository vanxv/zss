# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-10-05 14:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autoweb', '0030_auto_20170929_1204'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mobiletask',
            name='content',
            field=models.CharField(max_length=9999, null=True),
        ),
    ]
