# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-09-12 15:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autoweb', '0028_auto_20170908_1421'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mobileaccount',
            name='QQ',
            field=models.CharField(max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='mobileaccount',
            name='QQps',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='qqfriends',
            name='QQ',
            field=models.CharField(max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='qqfriends',
            name='QQFriends',
            field=models.CharField(max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='qqfriendslog',
            name='QQ',
            field=models.CharField(max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='qqfriendslog',
            name='QQFriends',
            field=models.CharField(max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='qqgroup',
            name='QQ',
            field=models.CharField(max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='qqgroup',
            name='QQGroup',
            field=models.CharField(max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='qqgrouplist',
            name='QQ',
            field=models.CharField(max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='qqgrouplist',
            name='QQGroup',
            field=models.CharField(max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='qqgrouplistlog',
            name='QQ',
            field=models.CharField(max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='qqgrouplistlog',
            name='QQGroup',
            field=models.CharField(max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='qqgrouplog',
            name='QQ',
            field=models.CharField(max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='qqgrouplog',
            name='QQGroup',
            field=models.CharField(max_length=13, null=True),
        ),
    ]
