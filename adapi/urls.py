from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^advert$', views.advert_method, name='advert_method'),
]