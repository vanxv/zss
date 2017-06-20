from django.conf.urls import url, include
from . import views
urlpatterns = [
    url(r'^$', views.financial_index, name='financial_index'),
    url(r'^topUp/$', views.financial_topUp, name='financial_index_topUp'),
]