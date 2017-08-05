from django.shortcuts import render, HttpResponse
from adapi.models import advert
import json
def advert_method(request):
    advertlist =  {}
    advertvalue = advert.objects.all()
    for i in advertvalue.all():
        advertlist[i.name] = {'id':i.id,'key':i.name,'title':i.title,'thumb':i.thumb,'url':i.url,'timeline':i.timeline}
    print(json.dumps(advertlist))
    print(type(json.dumps(advertlist)))
    return HttpResponse(json.dumps(advertlist), content_type='application/json')

# Create your views here.
