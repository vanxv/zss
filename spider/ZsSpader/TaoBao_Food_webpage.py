#!/usr/bin/env python
# -*- coding: utf-8 -*- 
#@zd
import urllib2  
import urllib  
import re  
#import thread  
import time 
import string
#import shutil
import os
import random
import socket
#import csv,codecs,cStringIO
import csv,codecs
#import requests
import cookielib
import json


socket.setdefaulttimeout(30) 

cookieSimu =cookielib.CookieJar()
def BrowseSimu(myurl):
    try:
        myurlopener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cookieSimu))
        BrowseSimu = urllib2.Request(myurl)
        BrowseSimu.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.8 Safari/537.36')
        BrowseSimu.add_header('accept','text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8')
        BrowseSimu.add_header('accept-encoding','gzip;q=0,deflate,sdch')
        BrowseSimu.add_header('accept-language','zh-CN,en-US;q=0.8,en;q=0.6')
        BrowseSimu.add_header('cache-control','max-age=0')
        browser_web = myurlopener.open(BrowseSimu).read()
        return browser_web, True
    except:
        return '', False
    
def strip_non_ascii(string):
    ''' Returns the string without non ASCII characters'''
    stripped = (c for c in string if 0 < ord(c) < 127)
    return ''.join(stripped)


def mkdir(path):
 #   import os
 
    path=path.strip()
    path=path.rstrip("\\")
 
    # ����     True
    # ������   False
    isExists=os.path.exists(path)
 
    if not isExists:
        print(path+' �����ɹ�')
        # ����Ŀ¼��������
        os.makedirs(path)
        return True
    else:
        # ���Ŀ¼�����򲻴���������ʾĿ¼�Ѵ���
        print(path+' Ŀ¼�Ѵ���')
        return False
 
def OpenUrl(myurl,k_time_sleep,f_thr):
    #-------------------------------------------------------------
    # This function is used to open an url and return the source package.
    # pass_link_path: saving the url which can not be opened
    # myurl: the link need to be opened
    # k_time_sleep: sleep factor
    # f_thr: try how many times
    # browser_web: the source code
    # url_result: true, succesful open, false, fail to open
    #-------------------------------------------------------------------------    
    fails = 0
#    time.sleep( k_time_sleep *(1+ random.random()) )        # sleep time for avoiding being blocked.
    while True:
        if fails >= f_thr:
            print('Too many times...')
            break
        try:
            print('Opening the thread ' + myurl + '......')
            myurlopener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cookieSimu))
            BrowseSimu = urllib2.Request(myurl)
            BrowseSimu.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.8 Safari/537.36')
            BrowseSimu.add_header('accept','text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8')
            BrowseSimu.add_header('accept-encoding','gzip;q=0,deflate,sdch')
            BrowseSimu.add_header('accept-language','zh-CN,en-US;q=0.8,en;q=0.6')
            BrowseSimu.add_header('cache-control','max-age=0')
            browser_web = myurlopener.open(BrowseSimu).read()
            return browser_web, True
                               
            break
        except:
            fails+=1
            print('Connection fails, try again: %s' %fails)
            time.sleep(k_time_sleep*(0.95+0.1*random.random()))      # if fail to open, then wait a moment.
        else:
            print('What happen?')
            browser_web = None
            url_result = False
    return browser_web,url_result





def openGzipURL(myurl,k_time_sleep,f_thr):
    fails = 0
#    time.sleep( k_time_sleep *(1+ random.random()) )        # sleep time for avoiding being blocked.
    while True:
        if fails >= f_thr:
            print 'Too many times...'
            break
        try:
            print'Opening the thread ' + myurl + '......'
            request = urllib2.Request(myurl)
            f = urllib2.urlopen(request)
            data = f.read()
            from cStringIO import StringIO
            from gzip import GzipFile
            data2 = GzipFile('', 'r', 0, StringIO(data)).read()
            data = data2
            return data, True
                      
            break
        except:
            fails+=1
            print('Connection fails, try again: %s' %fails)
            time.sleep(40)      # if fail to open, then wait a moment.
        else:
            print('What happen?')
            return '', False 


def OpenUrlAcfun(myurl,k_time_sleep,f_thr):
    #-----------------------------------------------------
    # This function utilize BrowserSimu to open the webpage.
    # The webpage, which  can not be opened by request, can use
    # this function to try to open.
    #----------------------------------------------------
    fails = 0
#    time.sleep( k_time_sleep *(1+ random.random()) )        # sleep time for avoiding being blocked.
    while True:
        if fails >= f_thr:
            print 'Too many times...'
            break
        try:
            print 'Opening the thread ' + myurl + '......' 
#             request = urllib2.Request(myurl)
#             f = urllib2.urlopen(request)
#             data = f.read()
            myurlopener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cookieSimu))
            BrowseSimu = urllib2.Request(myurl)
            BrowseSimu.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0')
            BrowseSimu.add_header('accept','text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8')
            BrowseSimu.add_header('accept-encoding','gzip')
    #        BrowseSimu.add_header('accept-language','zh-CN,en-US;q=0.8,en;q=0.6')
            BrowseSimu.add_header('accept-language','en-US,en;q=0.5')
            BrowseSimu.add_header('cache-control','max-age=0')    
            BrowseSimu.add_header('connection','keep-alive')  
            data = myurlopener.open(BrowseSimu).read()
            from cStringIO import StringIO
            from gzip import GzipFile
            data2 = GzipFile('', 'r', 0, StringIO(data)).read()
            data = data2   
            url_result = True
            break
        except:
            fails+=1
            data = None
            url_result = False
            print 'Connection fails, try again: %s' %fails
            time.sleep(40)      # if fail to open, then wait a moment.
        else:
            print('What happen?')
            return '', False 
    return data, url_result
    

def TaoBaoFoodDownload(page_name,url0,url1,download_page_fold,end_page,k_time_sleep,k_time_sleep1,f_thr):
    start = time.clock()
    
    
    myurl = url0  + url1
    print(myurl)
     
    time_open =  time.strftime('%Y-%m-%d-%H-%M-%S',time.localtime(time.time()))
    browser_web,url_result = OpenUrlAcfun(myurl,k_time_sleep,f_thr)
    if url_result == True:
        page_saving_path = download_page_fold + page_name + string.zfill(0,3) +'_'+ time_open + '.html'
        try:
            open(page_saving_path,'w').write(browser_web)
            print(time_open)
        except:
            print('Can not open this page!!: ' + myurl)
    

    for i_page in range(1,end_page):
        myurl = url0 + '&s=' + str(i_page*60) + url1
        print(myurl)
         
         
        time_open =  time.strftime('%Y-%m-%d-%H-%M-%S',time.localtime(time.time()))
        browser_web,url_result = OpenUrlAcfun(myurl,k_time_sleep,f_thr)
        if url_result == True:
            page_saving_path = download_page_fold + page_name + string.zfill(i_page,3) +'_'+ time_open + '.html'
            open(page_saving_path,'w').write(browser_web)
            print  time_open
        
        time.sleep(k_time_sleep1*(0.95+0.1*random.random()))      # if fail to open, then wait a moment.
    print('Download all finished!!!!!!!!!!!!!!!!!!!!!!!!!')
    elapsed_splinter = (time.clock() - start)
    print("Time used:",elapsed_splinter)
    return elapsed_splinter
    #-------------------------------------------------------------------------------------




def main():
    start = time.clock()
    #-----------------------------------------------------------------------
    # Default parameters, 
    f_thr = 2;
    k_time_sleep = 20
    k_time_sleep1 = 30
    #-----------------------------------------------------------------------------------------
    # The path for saving (1) webpage; (2) information of publication; (3) download url
    download_page_fold_original = "/users/VANXV/Downloaads/Crawer/taobao/"               # the fold saving all the dowloaded webpage
 #   pubcita_infor_file_fold_original = r"E:\\Z_Project\\Data_Research\\Unclassfied Webpage\\Webpage Daily\\"   # the fold saving all the publication information, here in csv format
 #   download_url_list_fold_original = r"E:\\Z_Project\\Data_Research\\Unclassfied Webpage\\paper_cita_google\\Download List\\"     # the fold saving all the webpage list of every reseacher, which is generated after downloading a webpage
 #   download_webpage_open_fold_original = r"file:///E:/Z_Project\Data_Research/Unclassfied Webpage/paper_cita_google/Webpage/"    # the original url for opening the dowloaded webpage
    #-------------------------------------------------------------------------------------------------

    #-------------------------------------------------------------------------------------------------------
    time_create= time.strftime('%Y%m%d',time.localtime(time.time()))
    download_page_fold  = download_page_fold_original + 'TMall_' + time_create[0:-1] + '0' + r"\\"  # fold for saving download url list     
    mkdir(download_page_fold)
    #------------------------------------------------------------------------------------------------------- 
        
#     #-------------------------------------------------------------------------------------------------------
#     # The fold including all the reseachers' id
#     download_list_path = r"E:\\Z_Project\\Data_Research\\Unclassfied Webpage\\Download List\\DailyList_20160311.txt"            # the fold saving all download List and the webpage name
    download_list_path = r"/users/VANXV/Downloaads/Crawer/taobao/Element Infor/TaoBao_Food_Wine_PriceComment_20160528.txt"
#     #------------------------------------------------------------------------------------------------------- 
#      

    #-------------------------------------------------------------------------------------------------------
    i_time = 1
    while True:
        #-----------------------------------------------------------------------
        if i_time > 7:
            start = time.clock()
            #-----------------------------------------------------------------------------------------
            # The path for saving (1) webpage; (2) information of publication; (3) download url
            download_page_fold_original = "/users/VANXV/Downloaads/Crawer/taobao/"               # the fold saving all the dowloaded webpage
            #   pubcita_infor_file_fold_original = r"E:\\Z_Project\\Data_Research\\Unclassfied Webpage\\Webpage Daily\\"   # the fold saving all the publication information, here in csv format
            #   download_url_list_fold_original = r"E:\\Z_Project\\Data_Research\\Unclassfied Webpage\\paper_cita_google\\Download List\\"     # the fold saving all the webpage list of every reseacher, which is generated after downloading a webpage
            #   download_webpage_open_fold_original = r"file:///E:/Z_Project\Data_Research/Unclassfied Webpage/paper_cita_google/Webpage/"    # the original url for opening the dowloaded webpage
            #-------------------------------------------------------------------------------------------------
            
            #-------------------------------------------------------------------------------------------------------
            time_create= time.strftime('%Y%m%d',time.localtime(time.time()))
            download_page_fold  = download_page_fold_original + 'TMall_' + time_create[0:-1] + '0' + r"\\"  # fold for saving download url list     
            mkdir(download_page_fold)
            #-------------------------------------------------------------------------------------------------------
            i_time = 1
    
        
        try:
            time_remain = 18*3600
            f_txt = open(download_list_path)              # read the first line in the txt file including all the researchers' ID of one university
            line = f_txt.readline()             # �����ļ��� readline()����
            while line:
                print(line)
                if 'Element Name' in line:
                    end_page = re.findall(u'End_Page:\[(.*?)\]', line, re.S)
                    end_page = int(end_page[0])
                    print(end_page)
                    
                    page_name = re.findall(u'Element Name:\[(.*?)\]', line, re.S) 
                    page_name = page_name[0]
                      
                    url = re.findall(u'URL:\[(.*?)&s=PPPPPP(.*?)\]', line, re.S) 
                    url = url[0] 
                    url0 = url[0]
                    url1 = url[1]
                    
                    #------------------------------------------------------------------------------------------------
                    try:
                        elapsed_splinter = TaoBaoFoodDownload(page_name,url0,url1,download_page_fold,end_page,k_time_sleep,k_time_sleep1,f_thr)
                        time_remain = time_remain-elapsed_splinter
       
                    except:
                        print('Fail once!')
            #            elapsed_splinter = JDFoodDownload(food_name,url0,url1,download_page_fold,k_time_sleep,k_time_sleep1,f_thr)
                     
                line = f_txt.readline()   
                 
            if time_remain > 0:
                time.sleep(time_remain)
            i_time = i_time + 1
            
        except:
            print('Something wrong happen!!!!!!!!!!!!!!!!!!!!!!!!!')
     

     



if __name__=="__main__":
    main()

    





