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
from rest_framework import routers, serializers, viewsets

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AuthUser
        fields = ('url', 'username', 'email')

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = AuthUser.objects.all()
    serializer_class = UserSerializer

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'AuthUser', UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
#!-------- rest freawork --------------##

urlpatterns = [
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
    #!-------- rest freawork --------------##
    url(r'^router/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^snippets/', include('snippets.urls')),
    #!-------- rest freawork --------------##


#!------- new index -----#
    url(r'^$', buyerIndex.as_view(), name='buyerindex'),
#!------- new index -----#

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # debug模式下 可用
