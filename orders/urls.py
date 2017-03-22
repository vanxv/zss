# coding:utf-8
from django.conf.urls import url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    url(r'^index/$', views.OrderManagerView.as_view(), name='index'),
    url(r'^add/$', views.CreateOrderView.as_view(), name='add'),
    url(r'^edit/$', views.UpdateOrderView.as_view(), name='edit'),
    url(r'^delete/$', views.delete_order,name='delete'),

    url(r'^getorders/$', views.get_orders, name='getorders')
]
