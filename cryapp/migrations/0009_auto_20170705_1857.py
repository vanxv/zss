# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-07-05 18:57
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cryapp', '0008_auto_20170623_1627'),
    ]

    operations = [
        migrations.AddField(
            model_name='cryorder',
            name='managerid',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='managerid', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='cryorder',
            name='Status',
            field=models.IntegerField(choices=[(0, '关闭'), (1, '启动'), (2, '接任务'), (3, '提交等待审核'), (4, '审核不通过'), (5, '完成'), (6, '操作员接试用'), (7, '等待审核'), (8, '操作员完成')], verbose_name='状态启动与关闭'),
        ),
    ]
