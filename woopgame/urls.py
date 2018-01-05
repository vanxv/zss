#coding:utf-8
from django.conf.urls import url
from woopgame import views

urlpatterns=[
    url(r'^/(?P<woopgameid>.*)/$', views.woopgame),
    url(r'^$', views.index, name='woop_game_index'),
    #------ managerbuyer ---#

    #--- buyer CRUD --#
]