# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-08-25 09:00
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('autoweb', '0003_mobileid_qq'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mobileid',
            name='QQ',
        ),
    ]
