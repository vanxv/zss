# coding:utf-8
from django.conf.urls import url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    url(r'^wallet/index/$', views.WalletManagerView.as_view(), name='wallet_index'),

    url(r'^account/index/$', views.AccountManagerView.as_view(), name='account_index'),
    url(r'^account/inpour/$', views.AccountInpourView.as_view(), name='account_inpour'),
    url(r'^account/withdraw/$', views.AccountWithDrawView.as_view(), name='account_withdraw'),

    # url(r'^delete/$', views.delete_order,name='delete'),

    url(r'^getaccounttransfers/$', views.get_account_transfers, name='getaccounttransfers'),
    url(r'^getwalletbills/$', views.get_walletbills, name='getwalletbills')
]
