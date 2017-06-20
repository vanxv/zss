# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-06-20 10:39
from __future__ import unicode_literals

from django.db import migrations, models
import libs.utils.string_extension


class Migration(migrations.Migration):

    dependencies = [
        ('financial', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderbill',
            name='id',
            field=models.CharField(default=libs.utils.string_extension.get_uuid, max_length=32, primary_key=True, serialize=False, verbose_name='id'),
        ),
    ]
