#!/usr/bin/python
# -*- coding: utf-8 -*-
# ģ����: gsextractor
# ����: GsExtractor
# Version: 2.0
# ˵��: html������ȡ��
# ����: ʹ��xslt��Ϊģ�壬������ȡHTML DOM�е����ݡ�
# released by ���ѿ�(http://www.gooseeker.com) on May 18, 2016
# github: https://github.com/FullerHua/jisou/core/gooseeker.py

from urllib import request
from urllib.parse import quote
from lxml import etree
import time

class GsExtractor(object):
    def _init_(self):
        self.xslt = ""
    # ���ļ���ȡxslt
    def setXsltFromFile(self , xsltFilePath):
        file = open(xsltFilePath , 'r' , encoding='UTF-8')
        try:
            self.xslt = file.read()
        finally:
            file.close()
    # ���ַ������xslt
    def setXsltFromMem(self , xsltStr):
        self.xslt = xsltStr
    # ͨ��GooSeeker API�ӿڻ��xslt
    def setXsltFromAPI(self , APIKey , theme, middle=None, bname=None):
        apiurl = "http://www.gooseeker.com/api/getextractor?key="+ APIKey +"&theme="+quote(theme)
        if (middle):
            apiurl = apiurl + "&middle="+quote(middle)
        if (bname):
            apiurl = apiurl + "&bname="+quote(bname)
        apiconn = request.urlopen(apiurl)
        self.xslt = apiconn.read()
    # ���ص�ǰxslt
    def getXslt(self):
        return self.xslt
    # ��ȡ�����������һ��HTML DOM���󣬷�������ȡ���
    def extract(self , html):
        doc = etree.HTML(html)
        xslt_root = etree.XML(self.xslt)
        transform = etree.XSLT(xslt_root)
        result_tree = transform(doc)
        return result_tree