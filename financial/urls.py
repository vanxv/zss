from django.conf.urls import url, include
from . import views
urlpatterns = [
    url(r'^$', views.financial_index, name='financial_index'),
    url(r'^topUp/$', views.financial_topUp_list, name='financial_index_topUp'),
    url(r'^AutoTopUp/$', views.financial_AutoTopUp, name='financial_index_topUp'),
    url(r'^kiting/$', views.financial_kiting, name='financial_kiting'),
]