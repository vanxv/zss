from django.conf.urls import url, include
from . import views
urlpatterns = [
    url(r'^PcHardwareInsert/', views.PcHardwareInsert, name='PcHardwareInsert'),
    url(r'^ip/', views.get_client_ip, name='ip'),
]