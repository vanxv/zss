#coding:utf-8
from django.conf.urls import url
from . import views

urlpatterns=[
    url(r'^customer/index/$', views.CustomerManagerView.as_view(), name='customer_index'),
    url(r'^customer/edit/$', views.UpdateCustomerView.as_view(), name='customer_edit'),
    url(r'^customer/delete/$', views.delete_customer, name='customer_delete'),

    url(r'^getcustomers/$', views.get_customers, name='getcustomers')

]