# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-05-18 14:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shop',
            name='platform',
            field=models.CharField(choices=[('taobao', 'taobao'), ('jd', 'jd'), ('tmall', 'tmall'), ('1688', '1688')], max_length=20, null=True, verbose_name='店铺平台'),
        ),
    ]
