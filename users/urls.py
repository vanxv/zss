from django.conf.urls import url, include
from . import views
urlpatterns = [
    url(r'^PcHardwareInsert/', views.PcHardwareInsert, name='PcHardwareInsert'),
    url(r'^ip/', views.get_client_ip, name='ip'),

    #---- ADD account ----#
    url(r'^tb/', views.tb),
    url(r'^jd/', views.jd),

    #----manage ----#
    url(r'^manage/$', views.manage),
    url(r'^manage/hardware/$', views.manage_hardware),
    url(r'^manage/get/(?P<cryorders_id>\d+)/$', views.getorder, name='ordersdone'),
    url(r'^manage/statussix/$', views.managestatusSix),
    url(r'^manage/statusseven/$', views.managestatusSeven),

    url(r'^manage/upstatusseven/(?P<cryorders_id>\d+)/$', views.update_cryorder_statussix),
    url(r'^manage/done/(?P<cryorders_id>\d+)/$', views.cryorder_done),
    url(r'^manage/delete/(?P<cryorders_id>\d+)/$', views.update_cryorder_delete, name='ordersdelete'),
    url(r'^manage/edit/(?P<cryorders_id>\d+)/$', views.cryorder_edit, name='ordersedit'),
]