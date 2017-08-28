"""zhess103 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import TemplateView
from users.views import *
from django.views.static import serve
from cryapp.views import *


#!-------- rest freawork --------------##
from django.conf.urls import url, include
from django.contrib.auth.models import User
from users.models import AuthUser

urlpatterns = [
     url(r'^autoweb/', include('autoweb.urls', namespace='autoweb')),
    url(r'^grappelli/', include('grappelli.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^blacklist/', include('blacklist.urls', namespace='blacklist')),
    url(r'^good/', include('goods.urls', namespace='good')),
    url(r'^order/', include('orders.urls', namespace='order')),
    url(r'^crm/', include('crm.urls', namespace='crm')),
    url(r'^finance/', include('finance.urls', namespace='finance')),
    url(r'^cashback/', include('cashback.urls', namespace='cashback')),
    url(r'^cryapp/', include('cryapp.urls', namespace='cryapp')),
    url(r'm/', include('wechat.urls', namespace='wechat')),
    url(r'^login/', LoginView.as_view(), name='login'),
    url(r'^register/', RegisterView.as_view(), name='register'),
    url(r'^logout/', logout, name='logout'),
    url(r'^welcome/$', TemplateView.as_view(template_name="welcome.html"), name='welcome'),
    #---seller admin-----#
    #---seller admin-----#
    url(r'^$', buyerIndex.as_view(), name='buyerindex'),
    url(r'^users/', include('users.urls')),
    url(r'^goods/(?P<goodid>(\d+))', GetGoods, name = 'GetGoods'),


    #!---- webbrowser ----#
    url(r'webbrowser/', TemplateView.as_view(template_name="webbrowser.html"), name='webbrowser'),
    #!---- webbrowser ----#

    #----- financial ----#
    url(r'^financial/', include('financial.urls', namespace='financialurl')),
    #----- financial ----#
    #!------- new index -----#
    url(r'^$', buyerIndex.as_view(), name='buyerindex'),
#!------- new index -----#
    #---- CRUD---#
    url(r'^servers/', include('servers.urls')),
    #----CRUD---#

#!---- adapi ---#
    url(r'^adapi/', include('adapi.urls')),
#!---- adapi ---#
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # debug模式下 可用
