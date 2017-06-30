from django.http import HttpResponse
from django.views.generic import TemplateView,ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.core.urlresolvers import reverse_lazy

from servers.models import Server
from django.shortcuts import render, redirect, get_object_or_404
from django.forms import ModelForm

from servers.models import Server

class ServerList(ListView):
    model = Server

class ServerCreate(CreateView):
    model = Server
    success_url = reverse_lazy('server_list')
    fields = ['name', 'ip', 'order']

class ServerUpdate(UpdateView):
    model = Server
    success_url = reverse_lazy('server_list')
    fields = ['name', 'ip', 'order']

class ServerDelete(DeleteView):
    model = Server
    success_url = reverse_lazy('server_list')



class ServerForm(ModelForm):
    class Meta:
        model = Server
        fields = ['name', 'ip', 'order']

def server_list(request, template_name='servers/server_list.html'):
    servers = Server.objects.all()
    data = {}
    data['object_list'] = servers
    return render(request, template_name, data)

def server_create(request, template_name='servers/server_form.html'):
    form = ServerForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('server_list')
    return render(request, template_name, {'form':form})

def server_update(request, pk, template_name='servers/server_form.html'):
    server = get_object_or_404(Server, pk=pk)
    form = ServerForm(request.POST or None, instance=server)
    if form.is_valid():
        form.save()
        return redirect('server_list')
    return render(request, template_name, {'form':form})

def server_delete(request, pk, template_name='servers/server_confirm_delete.html'):
    server = get_object_or_404(Server, pk=pk)
    if request.method=='POST':
        server.delete()
        return redirect('server_list')
    return render(request, template_name, {'object':server})