from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^advert$', views.advert_method, name='advert_method'),
    url(r'^version_last$', views.version_last, name='last_version'),
    url(r'^get_word', views.get_word, name='last_version'),
    url(r'^login', views.login, name='adapi_login'),
    url(r'^package', views.package, name='adapi_package'),
]