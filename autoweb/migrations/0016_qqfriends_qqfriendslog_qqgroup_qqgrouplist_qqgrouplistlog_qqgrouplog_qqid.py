# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-09-05 00:20
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('autoweb', '0015_auto_20170905_0018'),
    ]

    operations = [
        migrations.CreateModel(
            name='QQFriends',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('QQ', models.IntegerField(null=True)),
                ('QQFriends', models.IntegerField(null=True)),
                ('time', models.DateTimeField(default=django.utils.timezone.now, null=True)),
            ],
            options={
                'verbose_name': 'QQFriends',
                'verbose_name_plural': 'QQFriends',
            },
        ),
        migrations.CreateModel(
            name='QQFriendslog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('QQ', models.IntegerField(null=True)),
                ('QQFriends', models.IntegerField(null=True)),
                ('status', models.IntegerField(choices=[(1, 'add'), (2, 'delete')])),
                ('time', models.DateTimeField(default=django.utils.timezone.now, null=True)),
            ],
            options={
                'verbose_name': 'QQFriendslog',
                'verbose_name_plural': 'QQFriendslog',
            },
        ),
        migrations.CreateModel(
            name='QQGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('QQ', models.IntegerField(null=True)),
                ('QQGroup', models.IntegerField(null=True)),
                ('QQGroupName', models.CharField(max_length=220, null=True)),
                ('time', models.DateTimeField(default=django.utils.timezone.now, null=True)),
            ],
            options={
                'verbose_name': 'QQGroup',
                'verbose_name_plural': 'QQGroup',
            },
        ),
        migrations.CreateModel(
            name='QQGroupList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('QQGroup', models.IntegerField(null=True)),
                ('QQGroupList', models.IntegerField(null=True)),
                ('time', models.DateTimeField(default=django.utils.timezone.now, null=True)),
            ],
            options={
                'verbose_name': 'QQGroupList',
                'verbose_name_plural': 'QQGroupList',
            },
        ),
        migrations.CreateModel(
            name='QQGroupListlog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('QQGroup', models.IntegerField(null=True)),
                ('QQGroupList', models.IntegerField(null=True)),
                ('status', models.IntegerField(choices=[(1, 'add'), (2, 'delete')])),
                ('time', models.DateTimeField(default=django.utils.timezone.now, null=True)),
            ],
            options={
                'verbose_name': 'QQGroupList',
                'verbose_name_plural': 'QQGroupList',
            },
        ),
        migrations.CreateModel(
            name='QQGrouplog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('QQ', models.IntegerField(null=True)),
                ('QQGroup', models.IntegerField(null=True)),
                ('QQGroupName', models.CharField(max_length=220, null=True)),
                ('status', models.IntegerField(choices=[(1, 'add'), (2, 'delete')])),
                ('time', models.DateTimeField(default=django.utils.timezone.now, null=True)),
            ],
            options={
                'verbose_name': 'QQGrouplog',
                'verbose_name_plural': 'QQGrouplog',
            },
        ),
        migrations.CreateModel(
            name='QQID',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('QQ', models.IntegerField(null=True)),
                ('password', models.CharField(max_length=80)),
            ],
            options={
                'verbose_name': 'QQID',
                'verbose_name_plural': 'QQID',
            },
        ),
    ]
