# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-05-09 09:30
from __future__ import unicode_literals

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import libs.utils.string_extension


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Goods',
            fields=[
                ('id', models.CharField(default=libs.utils.string_extension.get_uuid, max_length=32, primary_key=True, serialize=False, verbose_name='id')),
                ('name', models.CharField(max_length=100, null=True, verbose_name='商品名称')),
                ('pgoods_id', models.CharField(max_length=50, null=True, verbose_name='平台商品id')),
                ('sendaddress', models.CharField(max_length=50, null=True, verbose_name='发货地')),
                ('image1', models.ImageField(default='image/default.png', null=True, upload_to='image/tbgoods/%Y/%m')),
                ('image2', models.ImageField(default='image/default.png', null=True, upload_to='image/tbgoods/%Y/%m')),
                ('image3', models.ImageField(default='image/default.png', null=True, upload_to='image/tbgoods/%Y/%m')),
                ('keyword1', models.CharField(max_length=50, null=True, verbose_name='关键词1')),
                ('price1', models.FloatField(max_length=50, null=True, verbose_name='价格1')),
                ('remark1', models.CharField(max_length=50, null=True, verbose_name='备注1')),
                ('keyword2', models.CharField(max_length=50, null=True, verbose_name='关键词2')),
                ('price2', models.FloatField(max_length=50, null=True, verbose_name='价格2')),
                ('remark2', models.CharField(max_length=50, null=True, verbose_name='备注2')),
                ('keyword3', models.CharField(max_length=50, null=True, verbose_name='关键词3')),
                ('price3', models.FloatField(max_length=50, null=True, verbose_name='价格3')),
                ('remark3', models.CharField(max_length=50, null=True, verbose_name='备注3')),
                ('keyword4', models.CharField(max_length=50, null=True, verbose_name='关键词4')),
                ('price4', models.FloatField(max_length=50, null=True, verbose_name='价格4')),
                ('remark4', models.CharField(max_length=50, null=True, verbose_name='备注4')),
                ('keywor5', models.CharField(max_length=50, null=True, verbose_name='关键词5')),
                ('price5', models.FloatField(max_length=50, null=True, verbose_name='价格5')),
                ('remark5', models.CharField(max_length=50, null=True, verbose_name='备注5')),
                ('add_time', models.DateTimeField(default=datetime.datetime.now)),
            ],
            options={
                'verbose_name': '商品',
                'verbose_name_plural': '商品',
                'db_table': 'goods',
            },
        ),
        migrations.CreateModel(
            name='Shop',
            fields=[
                ('id', models.CharField(default=libs.utils.string_extension.get_uuid, max_length=32, primary_key=True, serialize=False, verbose_name='id')),
                ('shopname', models.CharField(max_length=50, null=True, verbose_name='店铺名称')),
                ('shopkeepername', models.CharField(max_length=50, null=True, verbose_name='掌柜名称')),
                ('platform', models.CharField(choices=[('taobao', '淘宝'), ('jd', '京东')], max_length=20, null=True, verbose_name='店铺平台')),
                ('add_time', models.DateTimeField(default=datetime.datetime.now)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='用户')),
            ],
            options={
                'verbose_name': '店铺名',
                'verbose_name_plural': '店铺名',
                'db_table': 'shops',
            },
        ),
        migrations.AddField(
            model_name='goods',
            name='shop',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='goods.Shop', verbose_name='所属店铺'),
        ),
        migrations.AddField(
            model_name='goods',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='用户'),
        ),
    ]
