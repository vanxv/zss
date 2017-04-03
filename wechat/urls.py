# coding:utf-8
from django.conf.urls import url
from wechat.views import activity,wechat_login

urlpatterns = [
    url(r'', activity.ActivityView.as_view(), name='activity')
]
