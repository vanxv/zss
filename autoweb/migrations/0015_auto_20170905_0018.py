# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-09-05 00:18
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('autoweb', '0014_auto_20170904_2248'),
    ]

    operations = [
        migrations.DeleteModel(
            name='QQFriends',
        ),
        migrations.DeleteModel(
            name='QQFriendslog',
        ),
        migrations.DeleteModel(
            name='QQGroup',
        ),
        migrations.DeleteModel(
            name='QQGroupList',
        ),
        migrations.DeleteModel(
            name='QQGroupListlog',
        ),
        migrations.DeleteModel(
            name='QQGrouplog',
        ),
        migrations.DeleteModel(
            name='QQID',
        ),
    ]
