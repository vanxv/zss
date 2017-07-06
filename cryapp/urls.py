#coding:utf-8
from django.conf.urls import url
from cryapp import views

urlpatterns=[
    url(r'^seller/$', views.sellerIndex.as_view(), name='customer_index'),
    url(r'^GoodIndexAdd', views.Good_Index_Add.as_view(), name='Good_Index_Add'),
    #----- seller CRUD ---#
    url(r'^seller/orders/delete/(?P<cryorders_id>\d+)/$', views.cryapp_delete, name='cryorders_delete'),
    url(r'^seller/orders/edit/(?P<cryorders_id>\d+)/$', views.cryapp_edit, name='cryorders_edit'),
    url(r'^seller/orders/notdone/(?P<cryorders_id>\d+)/$', views.ordersnotdone, name='ordernotdone'),
    url(r'^seller/orders/done/(?P<cryorders_id>\d+)/$', views.ordersdone, name='ordersdone'),
    url(r'^seller/orders/$', views.seller_orders.as_view(), name='sellerindex'),
    #----- seller CRUD ----#

    #------ managerbuyer ---#

    url(r'^buyer/$', views.buyer_orders.as_view(), name='buyerindex'),
    url(r'^buyer/users/$', views.buyer_user, name='buyerusers'),
    url(r'^buyer/orders/$', views.buyer_orders.as_view(), name='buyerorders'),
    url(r'^buyer/orders/commitorders/(?P<cryorders_id>\d+)/$', views.buyer_commit_orders, name='commitorders'),
    url(r'^buyer/orders/edit/(?P<cryorders_id>\d+)/$', views.buyer_edit, name='buyer_edit'),
    #------ managerbuyer ---#

    #--- buyer CRUD --#
    url(r'^buyer/orders/delete/(?P<cryorders_id>\d+)/$', views.cryapp_buyer_delete, name='cryorders_buyer_delete'),
]