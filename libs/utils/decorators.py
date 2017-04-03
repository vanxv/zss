#coding:utf-8
from functools import wraps

from django.contrib.auth import REDIRECT_FIELD_NAME
from django.contrib.auth.decorators import user_passes_test
from libs.utils.http import JSONError


def request_validate(serializer_form):
    '''通用请求参数处理'''

    def decorator(func):
        @wraps(func)
        def wrapper(self, request, *args, **kwargs):
            form = serializer_form(request.POST)
            if not form.is_valid():
                error_string = [value[0] for key, value in form.errors.items()][0]
                return JSONError(error_string)
            kwargs['form'] = form
            return func(self, request, *args, **kwargs)

        return wrapper

    return decorator


def login_required(function=None, redirect_field_name=REDIRECT_FIELD_NAME, login_url=None):
    """
    Decorator for views that checks that the user is logged in, redirecting
    to the log-in page if necessary.
    """
    actual_decorator = user_passes_test(
        lambda u: u.is_authenticated(),
        login_url=login_url,
        redirect_field_name=redirect_field_name
    )
    if function:
        return actual_decorator(function)
    return actual_decorator