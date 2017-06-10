#coding:utf-8
from django.conf.urls import url
from cryapp import views

urlpatterns=[
    url(r'^$', views.sellerIndex.as_view(), name='customer_index'),
    url(r'^GoodIndexAdd', views.Good_Index_Add.as_view(), name='Good_Index_Add'),
    url(r'^orders/delete/(?P<cryorders_id>\d+)/$', views.cryapp_delete, name='cryorders_delete'),
    url(r'^orders/edit/(?P<cryorders_id>\d+)/$', views.cryapp_edit, name='cryorders_edit'),
    url(r'^orders/$', views.seller_orders.as_view(), name='sellerindex'),

    #------ managerbuyer ---#
    url(r'^buyer/$', views.buyeradmin, name='buyerindex'),
    url(r'^buyer/orders/$', views.buyer_orders.as_view(), name='buyerorders'),
    #------ managerbuyer ---#
]