# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-07-16 21:38
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('auto', '0002_auto_20170716_2044'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mobiletask',
            old_name='mobileSort',
            new_name='taskSort',
        ),
    ]
