from django.conf.urls import url, include
from . import views
urlpatterns = [
    url(r'^PcHardwareInsert/', views.PcHardwareInsert, name='PcHardwareInsert'),
]