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
import csv,codecs, cStringIO
#import requests
import cookielib

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
    # import module
 #   import os
 
    # remove the first blanck space
    path=path.strip()
    # delete the last \ symble
    path=path.rstrip("\\")
 
    # check whether the fold exists or not
    # exists:     True
    # not exist:   False
    isExists=os.path.exists(path)
 
    # the result
    if not isExists:
        # if the fold does not exist, create it
        print path+' has been created!'
        # 创建目录操作函数
        os.makedirs(path)
        return True
    else:
        # if fold exist, print the information and quit
        print path+' exists!'
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
            print 'Too many times...'
            break
        try:
            print 'Opening the thread ' + myurl + '......' 
            myurlopener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cookieSimu))
            BrowseSimu = urllib2.Request(myurl)
            BrowseSimu.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.8 Safari/537.36')
            BrowseSimu.add_header('accept','text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8')
            BrowseSimu.add_header('accept-encoding','gzip;q=0,deflate,sdch')
    #        BrowseSimu.add_header('accept-language','zh-CN,en-US;q=0.8,en;q=0.6')
            BrowseSimu.add_header('accept-language','en-US,zh-CN;q=0.8,en;q=0.6')
            BrowseSimu.add_header('cache-control','max-age=0')
            browser_web = myurlopener.open(BrowseSimu).read()
            return browser_web, True
                               
            break
        except:
            fails+=1
            print 'Connection fails, try again: %s' %fails
            browser_web = None
            url_result = False
            time.sleep(k_time_sleep*(0.95+0.1*random.random()))      # if fail to open, then wait a moment.
        else:
            print 'What happen?'
            browser_web = None
            url_result = False
    return browser_web,url_result

def OperUrlAndWriteFalse(pass_link_path,myurl,k_time_sleep,f_thr):
    #-------------------------------------------------------------
    # This function is used to open an url and return the source packge. If can not open the url, then write this url into a txt file saved in pass_link_path
    # pass_link_path: saving the url which can not be opened
    # myurl: the link need to be opened
    # k_time_sleep: sleep factor
    # f_thr: try how many times
    # browser_web: the source code
    # url_result: true, succesful open, false, fail to open
    #---------------------------------------------------------------------
    browser_web,url_result = OpenUrl(myurl,k_time_sleep,f_thr)
    list_file = open(pass_link_path,'a')
    list_file.writelines(myurl+'\n')               #'\n' create a new line, Note that on windows, it is '\n', on Mac it is '\r', on Unix, it is '\n'
    list_file.close()
    return browser_web,url_result
    


def DownloadSinglePageAndWriteList(browser_web,myurl,download_page_fold,page_name,webpage_infor_file_path):
    #------------------------------------------------------------------------------
    # download_page_fold is the fold for saving (1) the downloaded webpage; (2) the txt file saving the name of the downloaded webpage; (3) the txt file saving the link that can not open, in passs_Link_path
    # page_name is the  name used to format the name of the download pages
    # webpage_infor_file_path is a txt file that including the information of the downloaded page: (1) the url of webpage; (2) the name of the downloaed page
    # myurl is the oringianl link we need to open and save the corresponding webpage.
    # k_time_sleep is the time for sleeping
    # f_thr is the time for reconnected if fails to connecte a webpage
    # time_create is the time for downloading the webpage
    # browser_web is generated by: browser_web, url_result = BrowseSimu(myurl)    # open this url
    #------------------------------------------------------------------------------------------------------------
    page_name = page_name +  '.html'
    page_saving_path = download_page_fold + page_name          # the path for saving the downloaded page.

    # save the web_page into dowload_page_fold
    open(page_saving_path,'w').write(browser_web)
    print  page_saving_path + ' has been downloaded' 
          
    # write a txt file save name and url of these pages. Then, it will be utilized  for further analysis
    webpage_infor = 'URL:[' + myurl + ']' + '    ' + 'Page Name:[' + page_name +']' 
    list_file = open(webpage_infor_file_path,'a')
    list_file.writelines(webpage_infor + '\n')               #'\n' create a new line, Note that on windows, it is '\n', on Mac it is '\r', on Unix, it is '\n'
    list_file.close()



    
    

def PubListGenerateAndDownload_Google_PubCita(download_url_file_fold,download_page_fold,page_pub_name_original,url_pub_cita,k_time_sleep,f_thr,time_create):
    #---------------------------------------------------------------------------------------------
    # create download list
    #----------------------------------------------------------------------------------------------        
    #-------------------------------------------------------------------------------
    # google scholar publication url
    # For example: https://scholar.google.com/citations?user=cVeVZ1YAAAAJ&cstart=0&pagesize=20
    # https://scholar.google.com/citations?hl=zh-TW&user=cVeVZ1YAAAAJ&view_op=list_works&sortby=pubdate&cstart=0&pagesize=100
    #------------------------------------------------------------------------------
    # download_url_file_fold  is the fold for saving the information of downloaded webpage 
    # download_page_fold is the fold for saving (1) the downloaded webpage; (2) the txt file saving the name of the downloaded webpage; (3) the txt file saving the link that can not open, in passs_Link_path
    # page_pub_name_original is the original name used to format the name of the download pages, such as all the webpage is named as page_pub_name_original+ time create + 00001,00002......
    # url_pub_cita is the oringianl link we need to open and save the corresponding webpage.
    # k_time_sleep is the time for sleeping
    # f_thr is the time for reconnected if fails to connecte a webpage
    # time_create is the time for downloading the webpage
    #------------------------------------------------------------------------------------------------------------
    
    #------------------------------------------------------------------------------------------------------------------
    page_infor_file_path = download_url_file_fold + 'PageInfor-' + page_pub_name_original +'-' + time_create + '.txt'   # The txt file for saving the webPage name and url of the donwload pages
    pass_link_path =  download_url_file_fold + page_pub_name_original + '_'+ time_create + r"-pass_link.txt"                   # the txt file for saving the link that can not be opened.
    #-----------------------------------------------------------------------------------------------------------
    url_result = True
    i_page = 0
    try: 
        list_file = open(page_infor_file_path,'w')
        while url_result:
            myurl = url_pub_cita + str(i_page*100) + '&pagesize=100'  # here is the link of webpage we need to open and download
            print myurl
            
            #------------------------------------------------------------
            # Check this link is exist or not      
    #         fails = 0
            time.sleep( k_time_sleep *(0.95 + 0.1*random.random()) )        # sleep time for avoiding being blocked.
            browser_web,url_result = OperUrlAndWriteFalse(pass_link_path,myurl,k_time_sleep,f_thr)
           
                     
            if url_result == True:
                #encode is utilized to change the unicode to other code, 
                # while decode is utilized to change other code form to unicode
                unicodePage = browser_web.decode("utf-8")  
                # find out all </a></span><span id="gsc_a_nn">
                # re.S is the matching form, which means '.' can match  newline character
                myItems = re.search('<span id="gsc_a_nn">',unicodePage,re.S)     # if myItems is empty, it means we reache the final page including the publication information of a researcher

                # write down the download list into a txt file
                if myItems is not None:                
                    # Download the webpage into download_page_fold and write the information of the webpape in a txt file page_infor_file_path
                    page_name = page_pub_name_original + '-'+ time_create + '-' + string.zfill(i_page,5) #the name of the webpage
                    DownloadSinglePageAndWriteList(browser_web,myurl,download_page_fold,page_name,page_infor_file_path) 
                    
                else:
                    url_result = False
                       
            else:                                     
                print 'Can not open this webpage! Try again!'
            
            print i_page*100
            i_page = i_page+1
        
        print  'Download list  and all webpages are saved!'
        return page_infor_file_path
    except:
        print 'Extracting Information  fails!!!!'
    
    
    
def GoogleScholarPubCitaGenCSV(pubcita_infor_file_fold,download_page_fold,download_url_list_fold,download_webpage_open_fold,prof_name,url_pub_cita,f_thr,k_time_sleep,time_create):
    #------------------------------------------------------------------------------
    # download_url_file_fold  is the fold for saving the downloaded url list
    # download_open_page_fold  when open a save webpage, the previous path of the fold should be added in this form 
    # download_page_fold is the fold for saving (1) the downloaded webpage; (2) the txt file saving the name of the downloaded webpage; (3) the txt file saving the link that can not open, in passs_Link_path
    # page_pub_name_original is the original name used to format the name of the download pages, such as all the webpage is named as page_pub_name_original+ time create + 00001,00002......
    # url_pub_cita is the oringianl link we need to open and save the corresponding webpage.
    # k_time_sleep is the time for sleeping
    # f_thr is the time for reconnected if fails to connecte a webpage
    # time_create is the time for downloading the webpage
    #------------------------------------------------------------------------------------------------------------
    page_pub_name_original = prof_name + '_PubGsh'             # the original name for the downloaded webpage and the publication csv
    page_cita_hisgoram_name = prof_name + '_histogram'         # the original name for the downloaded webpage of citation and the citation csv
 

    csv_cita_file_path = pubcita_infor_file_fold + prof_name + '_CitaGsh-'+ time_create + '.csv'        # the csv file saving the citation information of a researcher
    csv_pub_file_path = pubcita_infor_file_fold + prof_name + '_PubGsh-'+ time_create + '.csv'              # the csv file saving the publication information of a researcher
    #-----------------------------------------------------------------------------------------
    
    #-----------------------------------------------------------------------------------
    # download citation histogram into download_page_fold and extract the citation number
    #-------------------------------------------------------------------------------------
    url_cita_histogram = url_pub_cita + '&view_op=citations_histogram'         # the url of citation webpage of a researcher
 
    # Download the page into download_page_fold
    browser_web,url_result = OpenUrl(url_cita_histogram,k_time_sleep,f_thr)
    page_name = page_cita_hisgoram_name + '-'+ time_create +  '.html'
    page_saving_path = download_page_fold + page_name          # the path for saving the downloaded page.

    try:
        open(page_saving_path,'w').write(browser_web)
        # Extract the citation number
        with open(csv_cita_file_path, 'wb') as csvfile:
            myWriter = csv.writer(csvfile)
        
            page_path = download_webpage_open_fold + page_name
            print page_path,                 # ����� ',' �����Ի��з� , ',' is utilized to ignore newline character
            req = urllib2.Request(page_path)   # send request and list of data ��������ͬʱ��data�� 
            m_web = urllib2.urlopen(req).read()
            print 'Successfully opening page ' + page_name 
                     
            #encode is utilized to change the unicode to other code, 
            # while decode is utilized to change other code form to unicode
            unicodePage = m_web.decode("utf-8")
             
            #------------------------------------------------------
            # csv file path and name
            #-----------------------------------------------------
            # find out all the source block
            # re.S is a match model which can match any newline character
            myItems_year = re.findall(u'<span class="gsc_g_t" style="left:.*?">(\d\d\d\d)</span>',unicodePage,re.S)
            myItems_cita = re.findall(u'<span class="gsc_g_al">(\d*)</span>',unicodePage,re.S)
            
            if len(myItems_year) == len(myItems_cita):
                myWriter.writerow(myItems_year)
                myWriter.writerow(myItems_cita)
            else:
                print 'The length of year do not match the length of citation.'
                
        print 'Citation information of ' + prof_name + ' has been written!'
    except:
        print 'Extracting Information  fails!!!!'
    

     
    #--------------------------------------------------------------------------
    # Download pages 
    #-------------------------------------------------------------------------  
    page_name_file_path = PubListGenerateAndDownload_Google_PubCita(download_url_list_fold,download_page_fold,page_pub_name_original,url_pub_cita,k_time_sleep,f_thr,time_create)
       
    
    #---------------------------------------------------------------------
    # Extract useful information: find out the publication of a researcher
    #----------------------------------------------------------------------
    try:
        f_txt = open(page_name_file_path )             #
        line = f_txt.readline()             #  readline()
        with open(csv_pub_file_path, 'wb') as csvfile:
            myWriter = csv.writer(csvfile)
            while line:
                line = re.findall(u'Page Name:\[(.*?)\]', line, re.S)
                line = line[0]
    
                page_path = download_webpage_open_fold + line
                print page_path,                 #  , ',' is utilized to ignore newline character
                req = urllib2.Request(page_path)   # send request and list of data ��������ͬʱ��data�� 
                m_web = urllib2.urlopen(req).read()
                          
                  
                #encode is utilized to change the unicode to other code, 
                # while decode is utilized to change other code form to unicode
                unicodePage = m_web.decode("utf-8")
                  
                #------------------------------------------------------
                # csv file path and name
                #-----------------------------------------------------
                # find out all the source block
                # re.S is a match model which can match any newline character
                myItems = re.findall(u'<tr class="gsc_a_tr"><td class="gsc_a_t"><a href=".*?</span></td></tr>',unicodePage,re.S)
                  
                items = [];
                for items in myItems:
                    paper_title = re.findall(u'class="gsc_a_at">(.*?)</a><div class="gs_gray">', items, re.S)
                    paper_title = paper_title[0].replace(':', '-')
                      
                    paper_author = re.findall(u'</a><div class="gs_gray">(.*?)</div><div class="gs_gray">', items, re.S)
                          
                    paper_journal = re.findall(u'</div><div class="gs_gray">(.*?)<span class="gs_oph">,', items, re.S)
                    if not paper_journal:
                        paper_journal = [u'Not a journal']
                    paper_journal = paper_journal[0].replace(':', '-')
                          
                    paper_cita = re.findall(u'class="gsc_a_ac">(.*?)</a></td><td class="gsc_a_y"><span class="gsc_a_h">', items, re.S)
                    if not paper_cita:
                        paper_cita = re.findall(u'class="gsc_a_ac">(.*?)</a><span class="gsc_a_m"><a href=', items, re.S)
                    if not paper_cita:
                        paper_cita = [u'No citation']
                          
                    paper_year = re.findall(u'<span class="gsc_a_h">(.*?)</span></td></tr>', items, re.S)
                    
                    
                    myWriter.writerow([paper_title.encode('utf-8')+' ', paper_author[0].encode('utf-8')+ ' ', paper_journal.encode('utf-8')+ ' ', paper_cita[0]+' ', paper_year[0]])
          
                line = f_txt.readline()
              
        print 'Publication information of ' + prof_name + ' has been written!'
    except:
        print 'Extracting Information  fails!!!!'
    

    

def main():
    start = time.clock()
    #-----------------------------------------------------------------------
    # Default parameters, 
    f_thr = 10;
    k_time_sleep = 55
    #-----------------------------------------------------------------------------------------
    # The path for saving (1) webpage; (2) information of publication; (3) download url
    download_page_fold_original = r"E:\\Z_Project\\Data_Research\\Publication_Citation\\Google\Webpage\\"               # the fold saving all the dowloaded webpage
    pubcita_infor_file_fold_original = r"E:\\Z_Project\\Data_Research\\Publication_Citation\\Google\\Element Infor\\"   # the fold saving all the publication information, here in csv format
    download_url_list_fold_original = r"E:\\Z_Project\\Data_Research\\Publication_Citation\\Google\\Download List\\"     # the fold saving all the webpage list of every reseacher, which is generated after downloading a webpage
    download_webpage_open_fold_original = r"file:///E:/Z_Project\Data_Research/Publication_Citation/Google/Webpage/"    # the original url for opening the dowloaded webpage
    #-------------------------------------------------------------------------------------------------


    #-------------------------------------------------------------------------------------------------------
    # The fold including all the reseachers' id
    researcher_id_list_fold = r"E:\\Z_Project\\Data_Research\\Publication_Citation\\Google\\Researcher Id\\"            # the fold saving all the researcher id
    file_name = os.listdir(r"E:\\Z_Project\\Data_Research\\Publication_Citation\\Google\\Researcher Id\\")
    print file_name
    print len(file_name)
    
    ind_begin = 1
    ind_end = len(file_name)
#    ind_end = 40

    for i_file in range(ind_begin,ind_end+1):
        time_create= time.strftime('%Y%m%d',time.localtime(time.time()))
        txt_name = file_name[i_file-1]
        print txt_name

        download_name_url_list_path = researcher_id_list_fold + txt_name  # the txt file path saving all the researchers' id of an university
        f_txt = open(download_name_url_list_path)              # read the first line in the txt file including all the researchers' ID of one university
        line = f_txt.readline()                                  # read first line
        item_temp = re.findall(u'University: \[(.*?)\]', line, re.S)   # get the name of this university
        university_name = item_temp[0]
        university_name = university_name.strip()
        
        #--------------------------------------------------------------------------------------------------------------
        download_page_fold = download_page_fold_original + university_name + r"\\"     # fold for saving webpage
        mkdir(download_page_fold)                
        #-------------------------------------------------------------------------------------------------------
        pubcita_infor_file_fold = pubcita_infor_file_fold_original + university_name + r"\\"     # fold for saving pubication information
        mkdir(pubcita_infor_file_fold)                                     
        #-------------------------------------------------------------------------------------------------------
        download_url_list_fold = download_url_list_fold_original + university_name + r"\\"        # fold for saving download url list
        mkdir(download_url_list_fold)
        #-------------------------------------------------------------------------------------------------------
        download_webpage_open_fold = download_webpage_open_fold_original + university_name + r"/"    # the original url for opening the dowloaded webpage

        
        #-----------------------------------------------------------------------------------------------------------------
        # create folds. There are two cases: (1) researcher have uploaded photo; (2) researchers have not uploaded photo.
        if "photo" in txt_name:
            download_page_fold = download_page_fold + r"Photo\\" + time_create + r"\\"   # fold for saving webpage
            mkdir(download_page_fold)
            pubcita_infor_file_fold = pubcita_infor_file_fold + r"Photo\\" + time_create + r"\\"   # fold for saving pubication information
            mkdir(pubcita_infor_file_fold)
            download_url_list_fold = download_url_list_fold + r"Photo\\" + time_create + r"\\"      # fold for saving download url list
            mkdir(download_url_list_fold)
            download_webpage_open_fold = download_webpage_open_fold + r"Photo/" + time_create + r"/"    # the original url for opening the dowloaded webpage
        else:
            download_page_fold = download_page_fold + r"NoPho\\" + time_create + r"\\"
            mkdir(download_page_fold)
            pubcita_infor_file_fold = pubcita_infor_file_fold + r"NoPho\\" + time_create + r"\\"
            mkdir(pubcita_infor_file_fold)
            download_url_list_fold = download_url_list_fold + r"NoPho\\" + time_create + r"\\"
            mkdir(download_url_list_fold)
            download_webpage_open_fold = download_webpage_open_fold + r"NoPho/" + time_create + r"/"
        #-------------------------------------------------------------------------------------------------------------------------------



        #-----------------------------------------------------------------------------------
        # All the folds for saving the publication information of an university are created! Then, the next step is downloading and extracting all the information.
        #-------------------------------------------------------------------------
        # name of the prof and google scholar page url
        # google scholar publication page url, note that, it is better to use 'sort by time' and one page including 100 publications
        #------------------------------------------------------------------------
        # https://scholar.google.com/citations?hl=zh-TW&user=uT6HlNwAAAAJ&view_op=list_works&sortby=pubdate&cstart=100&pagesize=100
           
        f_txt = open(download_name_url_list_path)              # read the first line in the txt file including all the researchers' ID of one university
        line = f_txt.readline()             # 调用文件的 readline()方法
        while line:
            print i_file
            name_prof = re.findall(u'Name: \[(.*?)\]', line, re.S) 
            prof_name = name_prof[0]
            prof_name = prof_name.replace('*','')
            prof_name = strip_non_ascii(prof_name)
           
            ID_CODE = re.findall(u'ID: \[(.*?)\]', line, re.S) 
            ID_CODE = ID_CODE[0]
             
            url_pub_cita = 'https://scholar.google.ca/citations?hl=en&user=' + ID_CODE + '&view_op=list_works&sortby=pubdate&cstart='
            GoogleScholarPubCitaGenCSV(pubcita_infor_file_fold,download_page_fold,download_url_list_fold,download_webpage_open_fold,prof_name,url_pub_cita,f_thr,k_time_sleep,time_create)
            time.sleep(k_time_sleep*(0.95+0.1*random.random()))      # if fail to open, then wait a moment.
             
            line = f_txt.readline()
         
        print 'Download all finished!!!!!!!!!!!!!!!!!!!!!!!!!'
         
        elapsed = (time.clock() - start)
        print("Time used:",elapsed)
        
        
        #------------------------------------------------------------------------
        # Sleep one and half hours to avoid being blocked.... Hope google do not block...
        time.sleep(1.5*3600)      # if fail to open, then wait a moment.
        



if __name__=="__main__":
    main()

    





