# coding:utf-8
from django.conf.urls import url
from django.views.generic import TemplateView

from .views import task, sms

urlpatterns = [
    url(r'^index/$', task.CashbackManagerView.as_view(), name='index'),
    url(r'^edit/$', task.CashbackEditView.as_view(), name='edit'),

    url(r'^task/index/$', task.TaskManagerView.as_view(), name='task_index'),
    url(r'^task/add/$', task.TaskCreateView.as_view(), name='task_add'),
    url(r'^task/edit/$', task.TaskEditView.as_view(), name='task_edit'),
    url(r'^task/delete/$', task.delete_task, name='task_delete'),

    url(r'^sms/index/$', sms.SmsManagerView.as_view(), name='sms_index'),
    url(r'^sms/add/$', sms.SmsCreateView.as_view(), name='sms_add'),

    # url(r'^delete/$', views.delete_order,name='delete'),

    url(r'^getcashbacks/$', task.get_cashbacks, name='getcashbacks'),
    url(r'^getcashbacktasks/$', task.get_cashbacktasks, name='getcashbacktasks'),
    url(r'^getsms/$', sms.get_sms, name='getsms'),

    url(r'^getgoodstree/$', task.get_goods_tree, name='getgoodstree'),

    url(r'^gettaskgoods/$', task.get_task_goods, name='gettaskgoods'),
]
