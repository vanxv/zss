# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-08-18 22:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0016_auto_20170810_0052'),
    ]

    operations = [
        migrations.AddField(
            model_name='idcard',
            name='Idcardname',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Idcardname'),
        ),
    ]
