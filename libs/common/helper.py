# coding:utf-8
from datetime import datetime
import time
import os
from django.conf import settings


def save_file(file):
    '''
    文件上传
    :param file: 文件
    :return: 文件相对路径
    '''
    try:
        extensions = os.path.splitext(file.name)[1].lower()
        now = datetime.now()
        relate_path = os.path.join(str(now.year), str(now.month), str(now.day))
        filename = str(int(time.time())) + extensions  # 新的文件名称

        filedir = os.path.join(settings.MEDIA_ROOT, relate_path)
        if not os.path.exists(filedir):
            os.makedirs(filedir)

        with open(os.path.join(filedir, filename), 'wb+') as f:
            for chunk in file.chunks():
                f.write(chunk)

        # 文件相对路径
        filename = os.path.join(settings.MEDIA_URL, relate_path, filename).replace('\\', '/')
        return filename

    except Exception as ex:
        raise Exception('文件上传失败')
