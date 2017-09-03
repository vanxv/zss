from django.conf.urls import url, include
from . import views
urlpatterns = [
    url(r'^task/(?P<mobile_ID>.*)/$', views.Task),
    url(r'^done/(?P<task_id>.*)/(?P<task_sort>.*)/$', views.TaskDone),
    url(r'^QQID/(?P<QQ_ID>.*)$', views.QQID, name='QQ'),
    # url(r'^tasklog/(?P<mobileID>.*)/(?P<taskid>.*)/$', views.tasklog, name='autolog'),
    # url(r'^tasklogdone/(?P<mobileID>.*)/(?P<taskid>.*)/(?P<objectid>.*)/$', views.tasklogDone, name='autologdone'),
    url(r'^$', views.index, name='autoreturn'),
]