from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^advert$', views.advert_method, name='advert_method'),
    url(r'^versionlast$', views.version_last, name='last_version'),
    url(r'^getword', views.getword, name='last_version'),
    url(r'^login', views.login, name='adapi_login'),
    url(r'^package', views.package, name='adapi_package'),
    url(r'^keywords', views.keywords, name='keyword'),
    url(r'^binding', views.binding, name='binding'),
    url(r'^clientstore', views.clientstore, name='clientstore'),
    url(r'^stat', views.stat, name='stat'),
    url(r'^getdata', views.getdata, name='get_data'),
    url(r'^getshop', views.getshop, name='getshop'),
]