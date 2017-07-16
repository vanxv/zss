from django.conf.urls import url, include
from . import views
urlpatterns = [
    url(r'^task/(?P<deviceName>.*)/(?P<platformVersion>.*)/$', views.Task, name='autoreturn'),
    url(r'^$', views.index, name='autoreturn'),
]