# coding: utf-8
import uuid
import time


def get_uuid():
    # return str(time.time()).replace('.', '')
    return str(uuid.uuid3()).replace('-', '')
