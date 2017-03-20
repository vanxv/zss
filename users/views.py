from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password
from django.contrib.auth.backends import ModelBackend
from django.db.models import Q
from .models import AuthUser
from django.views.generic.base import View #View是一个get和post的一个系统，可以直接def post和get，
from .froms import LoginForm, RegisterForm #载入form表单
from itsdangerous import URLSafeTimedSerializer as utsr
import base64
import re

# Create your views here.


#下面是一个验证流程，用了Q，Q是多条件查询的组建
class CustomBackend(ModelBackend):
    def authenticate(self, username=None, password=None, **kwargs):
        try:
            user = AuthUser.objects.get(Q(username=username)|Q(email=username))
            if user.check_password(password):
                return user
        except Exception as e:
            return None

class RegisterView(View):
    def get(self, request):
        return render(request, 'register.html')
    def post(self, request):
        register_Form = RegisterForm(request.POST)
        if register_Form.is_valid():
            user_name = request.POST.get("username","")
            pass_word = request.POST.get("password","")
            pass_word2 = request.POST.get("password2","")
            if pass_word != pass_word2:
                return render(request, 'register.html', {"msg":"密码两次输入不一致"})
            else:
                user_profile = AuthUser()
                user_profile.username = user_name
                user_profile.email = user_name
                user_profile.password = make_password(pass_word)
                user_profile.is_active = False
                user_profile.save()
                token = token_confirm.generate_validate_token(username)

        pass


#下面是用View实现的get和post，效率很高。不用写if post和if get，用类解决这个问题。
class LoginView(View):
    def get(self, request):
        return render(request, "login.html", {})
    def post(self, request):
        login_form = LoginForm(request.POST)#利用form来验证是否正确，这样验证效率更高。不需要进数据库验证。
        if login_form.is_valid():
            user_name = request.POST.get("username", "")
            pass_word = request.POST.get("password", "")
            user = authenticate(username=user_name, password=pass_word)
            if user is not None:
                login(request, user)
                return render(request, "index.html")
            else:
                return render(request, "login.html", {"msg":"账号密码错误"})
        else:
            return render(request, "login.html", {"login_form": login_form})


# def user_login(request):
#     if request.method == 'POST':
#         user_name = request.POST.get("username", "")
#         pass_word = request.POST.get("password", "")
#         user = authenticate(username=user_name, password=pass_word)
#         if user is not None:
#             login(request, user)
#             return render(request, 'index.html')
#         else:
#             return render(request, 'login_v2.html', {"msg":"用户名和密码错误！"})
#             pass
#     elif request.method == 'GET':
#         return render(request, 'login_v2.html', {})


class MemberView(View):
    def get(self,request,*args,**kwargs):
        return render(request,template_name='user/index.html')

    def post(self,request,*args,**kwargs):
        file=request.FILES.get('member')
        return HttpResponse('success')

