# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-07-17 21:17
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('auto', '0003_auto_20170716_2138'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mobileid',
            old_name='andriodname',
            new_name='StyleLabel',
        ),
        migrations.RenameField(
            model_name='mobileid',
            old_name='label_User_portrait',
            new_name='deviceName',
        ),
    ]