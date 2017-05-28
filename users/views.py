from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.hashers import make_password
from .models import AuthUser
from django.views.generic.base import View
from .forms import LoginForm, RegisterForm
# Create your views here.

@login_required
def index(request):
    '''后台首页'''
    return render(request, 'index.html')


@login_required
def logout(request):
    '''注销登录'''
    auth.logout(request)
    return redirect('login')


class RegisterView(View):
    template_name = 'register.html'

    def get(self, request):
        return render(request, self.template_name)

    def post(self, request):
        form = RegisterForm(request.POST)
        if not form.is_valid():
            return render(request, self.template_name)
        username = request.POST.get('username')
        password = request.POST.get('password')
        password2 = request.POST.get('password2')
        if password != password2:
            return render(request, 'register.html', {"msg": "密码两次输入不一致"})

        user_profile = AuthUser()
        user_profile.username = username
        # user_profile.email = username
        user_profile.password = make_password(password)
        user_profile.is_active = True
        user_profile.save()

        return redirect('login')


class LoginView(View):
    def get(self, request):
        return render(request, "login.html")

    def post(self, request):
        form = LoginForm(request.POST)
        if not form.is_valid():
            return render(request, "login.html", {"login_form": form})

        username = request.POST.get('username')
        password = request.POST.get('password')
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('home')
        else:
            return render(request, 'login.html', {'msg': '账号密码错误'})


##pc hardware insert
def PcHardwareInsert(request):
    if request.method == 'GET':
        return render(request, 'users/0.html')
        pass
    elif request.method == 'POST':
        form = LoginForm(request.POST)
        if not form.is_valid():
            return render(request,{'form': form})
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            pass
        else:
            return render(request, 'users/1.html');