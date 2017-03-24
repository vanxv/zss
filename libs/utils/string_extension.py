# coding: utf-8
import uuid
import time


def get_uuid():
    # return str(time.time()).replace('.', '')
    return str(uuid.uuid3()).replace('-', '')


def get_formattime(time):
    return time.strftime('%Y-%m-%d %H:%M:%S') if time else '',
