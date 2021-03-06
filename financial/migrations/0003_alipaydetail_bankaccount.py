# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-06-20 18:20
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('financial', '0002_auto_20170620_1039'),
    ]

    operations = [
        migrations.CreateModel(
            name='alipayDetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('alipayid', models.CharField(max_length=70, unique=True)),
                ('alipayNote', models.CharField(max_length=200)),
                ('alipayAmount', models.DecimalField(decimal_places=2, max_digits=6)),
                ('datetime', models.DateTimeField(default=datetime.datetime(2017, 6, 20, 18, 20, 20, 949539))),
                ('alipayusername', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'alipayDetail',
                'verbose_name_plural': 'alipayDetail',
            },
        ),
        migrations.CreateModel(
            name='BankAccount',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('BankSort', models.IntegerField(choices=[(1, 'alipay'), (2, 'wechat'), (3, 'jiaotongBank'), (4, 'GongshangBank')], max_length=5, verbose_name='BankSort')),
                ('BankAccount', models.CharField(max_length=30, verbose_name='BankAccount')),
                ('Status', models.IntegerField(choices=[(0, 'off'), (1, 'on')], default=1, max_length=2, verbose_name='bankStatus')),
                ('Note', models.CharField(max_length=100, verbose_name='Note')),
            ],
            options={
                'verbose_name': 'BankAccount',
                'verbose_name_plural': 'BankAccount',
            },
        ),
    ]
