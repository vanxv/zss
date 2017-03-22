#coding:utf-8
from django.conf.urls import url
from . import views

urlpatterns=[
    url(r'^index/$', views.UserManagerView.as_view(), name='index'),

]