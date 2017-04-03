# coding: utf-8
import uuid
import time
from datetime import datetime


def get_uuid():
    return str(time.time()).replace('.', '')
    # return str(uuid.uuid3()).replace('-', '')


def generate_orderno():
    return datetime.now().strftime('%Y%m%d') + str(int(datetime.utcnow().timestamp()))


def get_formattime(time):
    return time.strftime('%Y-%m-%d %H:%M:%S') if time else '',


def safe_dict_value(dict_list, field_name):
    return dict_list[0][field_name] if len(dict_list) > 0 else ''
