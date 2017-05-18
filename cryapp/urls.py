#coding:utf-8
from django.conf.urls import url
from cryapp import views

urlpatterns=[
    url(r'^$', views.index.as_view(), name='customer_index'),
    url(r'^GoodIndexAdd', views.Good_Index_Add.as_view(), name='Good_Index_Add'),
]