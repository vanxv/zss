 # coding:utf-8
from django.conf.urls import url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    url(r'^shop/', views.shopsViews.as_view(),name='shop'),
    url(r'^product/(?P<shop_id>[0-9]+)/', views.shop_goodsViews.as_view(), name='shop_good'),    
    url(r'^product/', views.all_goodsViews.as_view(), name='all_good'),
    url(r'^add_good/(?P<shop_id>[0-9]+)/(?P<good_id>[0-9]+)/',views.change_goodViews.as_view(),name='good_id'),
    url(r'^add_good/(?P<shop_id>[0-9]+)/',views.add_goodViews.as_view(),name='add_good'),

]



