from django.db import models

class Link(models.Model):
    link_description = models.CharField(max_length=120)
    link_url = models.CharField(max_length=200)

    class Admin:
        pass

    def __str__(self):
        return self.link_description
# Create your models here.
