# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-09-01 16:39
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('autoweb', '0005_mobileid_qq'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userportrait',
            old_name='UserPortrait',
            new_name='UserPortraitname',
        ),
        migrations.RemoveField(
            model_name='qqfriends',
            name='QQFriends',
        ),
        migrations.AddField(
            model_name='mobileid',
            name='UserPortraitId',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='autoweb.UserPortrait'),
        ),
        migrations.AddField(
            model_name='qqfriends',
            name='QQfriends',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='mobiletask',
            name='taskSort',
            field=models.IntegerField(choices=[(1, 'add_User'), (2, 'ADD_GROUP'), (3, 'send_message_to_friend_list'), (4, 'send_message_to_GROUP_list'), (5, 'send_message_to_user_Accoutid'), (6, 'send_message_to_GROUP_Accoutid'), (7, 'Get_Pople_list'), (8, 'Get_Group_list'), (9, 'Get_Group_QQ_list')], null=True),
        ),
    ]
