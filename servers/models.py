from django.db import models
from django.core.urlresolvers import reverse

class Server(models.Model):
    name = models.CharField(max_length=200)
    ip = models.GenericIPAddressField()
    order = models.IntegerField()

    def __unicode__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('server_edit', kwargs={'pk': self.pk})