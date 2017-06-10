from django.shortcuts import render
from .models import Link
from django.template import Context, loader
from django.shortcuts import render_to_response

def list(request):
    link_list = Link.objects.all()
    return render_to_response('l')
# Create your views here.
