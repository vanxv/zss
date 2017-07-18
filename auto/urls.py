from django.conf.urls import url, include
from . import views
urlpatterns = [
    url(r'^task/(?P<mobile_ID>.*)/$', views.Task, name='autoreturn'),
    url(r'^$', views.index, name='autoreturn'),
]