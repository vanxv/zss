# appium：1.server and andriod connection，
from appium import webdriver
from appium.webdriver.common.touch_action import TouchAction
import datetime
import time
import re
import requests
import json
import sys
import subprocess
# using images model
import csv
import os,sys
import platform
import tempfile
import shutil
from PIL import Image
# using images model
#import pytesseract
from multiprocessing import Pool
import multiprocessing
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
import codecs
# get user tempfile
PATH = lambda p: os.path.abspath(p)
TEMP_FILE = PATH(tempfile.gettempdir() + "/temp_screen.png")
print(str(28)+tempfile.gettempdir())
geturl = 'http://127.0.0.1:8000/'
#geturl = 'http://www.zhess.com/'
# get user tempfile


#images_to_string
def image_to_string(img, cleanup=True, plus=''):
    # cleanup为True则识别完成后删除生成的文本文件
    # plus参数为给tesseract的附加高级参数
    subprocess.check_output('tesseract ' + img + ' ' +
                            img + ' ' + plus, shell=True)  # 生成同名txt文件
    text = ''
    with open(img + '.txt', 'rt', encoding='utf-8-sig') as f:
        text = f.read().strip()
    if cleanup:
        os.remove(img + '.txt')
    return text
    #print(image_to_string('/Users/VANXV/Downloads/pyocr.png', False, '-l chi_sim'))

#DiffImg coding
class Appium_Extend(object):
    def __init__(self, driver):
        self.driver = driver

    def get_screenshot_by_element(self, element):
        # 先截取整个屏幕，存储至系统临时目录下
        self.driver.get_screenshot_as_file(TEMP_FILE)

        # 获取元素bounds
        location = element.location
        size = element.size
        box = (location["x"], location["y"], location["x"] + size["width"], location["y"] + size["height"])

        # 截取图片
        image = Image.open(TEMP_FILE)
        newImage = image.crop(box)
        newImage.save(TEMP_FILE)

        return self

    def get_screenshot_by_custom_size(self, start_x, start_y, end_x, end_y):
        # 自定义截取范围
        self.driver.get_screenshot_as_file(TEMP_FILE)
        box = (start_x, start_y, end_x, end_y)

        image = Image.open(TEMP_FILE)
        newImage = image.crop(box)
        newImage.save(TEMP_FILE)

        return self

    def write_to_file(self, dirPath, imageName, form="png"):
        # 将截屏文件复制到指定目录下
        if not os.path.isdir(dirPath):
            os.makedirs(dirPath)
        shutil.copyfile(TEMP_FILE, PATH(dirPath + "/" + imageName + "." + form))

    def load_image(self, image_path):
        # 加载目标图片供对比用
        if os.path.isfile(image_path):
            load = Image.open(image_path)
            return load
        else:
            raise Exception("%s is not exist" % image_path)

            # http://testerhome.com/topics/202

    def same_as(self, load_image, percent):
        # 对比图片，percent值设为0，则100%相似时返回True，设置的值越大，相差越大
        import math
        import operator

        image1 = Image.open(TEMP_FILE)
        image2 = load_image

        histogram1 = image1.histogram()
        histogram2 = image2.histogram()

        differ = math.sqrt(reduce(operator.add, list(map(lambda a, b: (a - b) ** 2, \
                                                         histogram1, histogram2))) / len(histogram1))
        if differ <= percent:
            return True
        else:
            return False

class getimages():
    def get_screenshot_by_element(self, element):
        # 先截取整个屏幕，存储至系统临时目录下
        self.driver.get_screenshot_as_file(TEMP_FILE)

        # 获取元素bounds
        location = element.location
        size = element.size
        box = (location["x"], location["y"], location["x"] + size["width"], location["y"] + size["height"])

        # 截取图片
        image = Image.open(TEMP_FILE)
        newImage = image.crop(box)
        newImage.save(TEMP_FILE)
        newImage.save("//Users/VANXV/Downloads/new.png")
        image1 = Image.open(TEMP_FILE)
        text = image_to_string(TEMP_FILE, False, '-l chi_sim')
        text = text.replace(" …u_P", "")
        return text

        return self

    def get_screenshot_by_custom_size(self, start_x, start_y, end_x, end_y):
        # 自定义截取范围
        self.driver.get_screenshot_as_file(TEMP_FILE)
        box = (start_x, start_y, end_x, end_y)

        image = Image.open(TEMP_FILE)
        newImage = image.crop(box)
        newImage.save(TEMP_FILE)
        return self

    def images_to_string(self, image):
        image = Image.open(TEMP_FILE)

    def write_to_file(self, dirPath, imageName, form="png"):
        # 将截屏文件复制到指定目录下
        if not os.path.isdir(dirPath):
            os.makedirs(dirPath)
        shutil.copyfile(TEMP_FILE, PATH(dirPath + "/" + imageName + "." + form))

    def load_image(self, image_path):
        # 加载目标图片供对比用
        if os.path.isfile(image_path):
            load = Image.open(image_path)
            return load
        else:
            raise Exception("%s is not exist" % image_path)
    # DiffImg coding

#using reference
class QQaction():
    def connect(self):
        self.driver.implicitly_wait(15)
        self.driver.find_element_by_xpath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabWidget[1]/android.widget.FrameLayout[1]').click()
        self.driver.implicitly_wait(15)

    def freindConcentGetQQnumber(self):
        self.driver.implicitly_wait(5)
        try:
            whilegetQQnumber = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.AbsListView[1]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]")
            swipe.qqswipe(self)
            whilegetQQnumber = self.driver.find_elements_by_xpath("//android.widget.AbsListView[1]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]")
            getelement_temp = self.driver.find_elements_by_xpath("//android.widget.AbsListView[1]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/*")
            getQQnumber = getelement_temp[0].find_element_by_xpath("//android.widget.TextView").text
            nick = ''
            if ')' in getQQnumber:
                nick = self.driver.find_element_by_xpath("//android.widget.TextView[contains(@content-desc, '昵称:')]").text
                objectid = re.findall(r'(\d+)', getQQnumber)[0]
                name =getQQnumber
            else:
                name = self.driver.find_element_by_xpath("//android.widget.TextView[contains(@content-desc, '昵称:')]").text
                objectid = getQQnumber

            usercontains = ''
            # get contains #

            gettest = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.AbsListView[1]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.TextView")
            for gettestN in gettest:
                if not objectid in gettestN.text:
                    usercontains += gettestN.text

            print(objectid+name+nick+usercontains)
        except:
            objectid = ''
            name = ''
            nick = ''
            usercontains = ''
        return objectid,name,nick,usercontains

    def friendConcentSendMessage(self):
        self.driver.implicitly_wait(15)
        self.driver.find_element_by_xpath("//*[@text='发消息']").click()
        print('start send message')
        # input connect
        self.driver.find_element_by_xpath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.EditText[1]').send_keys(self.mark['content'])
        self.driver.implicitly_wait(15)
        # send_message
        self.driver.find_element_by_xpath("//*[@text='发送']").click()
        self.driver.implicitly_wait(15)
        # RETURN
        time.sleep(1)
        self.driver.keyevent(keycode=4)
        self.driver.implicitly_wait(15)

    def clickGroupinfo(self):
        try:
            if self.Groupcardx == 0:
                groupjudge = self.driver.find_element_by_xpath("//android.widget.ImageView[contains(@content-desc, '群资料卡')]")
                self.Groupcardx = int(groupjudge.location['x'])
                self.Groupcardy = int(groupjudge.location['y'])
            if self.mark['taskSort'] == 9:
                time.sleep(1.5)
            time.sleep(2.5)
            action = TouchAction(self.driver)
            action.tap(x=self.Groupcardx, y=self.Groupcardy).perform()
            return 1
        except:
            action = TouchAction(self.driver)
            action.tap(x=688, y=55).perform()
            return 0

        #clickgroupjudge = 0
        # while clickgroupjudge == 0:
        #     try:
        #         time.sleep(1.5)
        #         action = TouchAction(self.driver)
        #         action.tap(x=self.Groupcardx,y=self.Groupcardy).perform()
        #         clickgroupjudge = 1
        #         # groupjudge = self.driver.find_elements_by_xpath("//android.widget.ImageView[contains(@content-desc, '群资料卡')]")
        #         # if groupjudge.__len__() >0:
        #         #     clickgroupjudge =1
        #         return 1
        #     except:
        #         return 0

    def groupreturn(self):
        # click return number
        if self.returnnumber == 0:
            try:
                groupjudge = self.driver.find_elements_by_xpath("//android.widget.ImageView[contains(@content-desc, '群资料卡')]")
                if groupjudge.__len__() > 0:
                    self.returnnumber = 1
                    self.driver.keyevent(keycode=4)
                if groupjudge.__len__() == 0:
                    self.returnnumber = 2
            except:
                self.driver.keyevent(keycode=4)
                self.returnnumber = 1
        elif self.returnnumber == 1:
            time.sleep(1)
            self.driver.keyevent(keycode=4)
        elif self.returnnumber == 2:
            pass
            # click return number
class swipe():
    def qqswipe(self):
        for i in range(1):
            print('qqswipe', i + 1)
            self.driver.swipe(start_x=400, start_y=450, end_x=400, end_y=100)
            self.driver.implicitly_wait(15)
    def qqnumberswipe(self):
        for i in range(1):
            print('qqnumberswipe', i + 1)
            self.driver.swipe(start_x=400, start_y=270, end_x=500, end_y=100, duration=1000)
            self.driver.implicitly_wait(15)
    def listswipe(self,elementsList):
        self.driver.swipe(start_x=elementsList[elementsList.__len__() - 3].location_in_view['x'],
                          start_y=elementsList[elementsList.__len__() - 3].location_in_view['y'],
                          end_x=elementsList[1].location_in_view['x'],
                          end_y=elementsList[1].location_in_view['y'])

class multipleLoop():
    #class multipleLoop(multiprocessing.Process):
    def __init__(self, mobile_id_for):
        self.mobile_id_for = mobile_id_for
        multipleLoop.run(self)
    #Need add_QQ_list
    def QQaddPeople_group(self):
        #sort 1 & 2
        time.sleep(4)
        QQaction.connect(self)
        QQaction.connect(self)
        self.driver.implicitly_wait(20)
        self.driver.find_element_by_xpath("//*[contains(@content-desc, '添加')]").click()
        time.sleep(3)
        self.driver.find_element_by_xpath("//*[contains(@content-desc, '找人')]").click()
        self.driver.find_element_by_xpath("//*[contains(@content-desc, 'QQ号')]").click()
        self.driver.find_element_by_xpath("//*[contains(@text, 'QQ号')]").send_keys(self.mark['AccountId'])
        if self.mark['taskSort'] == 1:
            self.driver.find_element_by_xpath("//*[contains(@text, '找人')]").click()
            xpathname = "//*[contains(@text, '" + '(' + self.mark['AccountId'] + ')' + "')]"
            self.driver.find_element_by_xpath(xpathname).click()
        elif self.mark['taskSort'] == 2:
            self.driver.find_element_by_xpath("//*[contains(@text, '找群')]").click()

        if self.mark['taskSort'] == 1:
            self.driver.find_element_by_xpath("//*[contains(@text, '加好友')]").click()
        elif self.mark['taskSort'] == 2:
            try:
                self.driver.find_element_by_xpath("//*[contains(@text, '申请加群')]").click()
            except:
                self.driver.find_element_by_xpath("//*[contains(@text, '发消息')]").click()
        self.driver.find_element_by_xpath("//android.widget.EditText").clear()
        self.driver.find_element_by_xpath("//android.widget.EditText").send_keys(self.mark['content'])
        self.driver.find_element_by_xpath("//*[contains(@text, '发送')]").click()
        requests.post(geturl + 'autoweb/done/' + str(self.mark['taskid']) + '/')
    #Need Send_message_Need_time
    def send_message_And_get_to_friend_list(self):
        #-- sort 3 & 7
        #create  && open tempcsv
        temp_taskid = PATH(tempfile.gettempdir() + "/"+ str(self.mark['taskid']) +".csv")
        objectEnd =0
        objectEndNo =0
        objectendroll = 0
        numberinxls = 0
        numberinxlsnumber = 0

        if os.path.exists(temp_taskid) == False:
            texttask = codecs.open(temp_taskid, 'w', 'utf_8')
            namefield = ['QQ','name','nick','contains']
            writer = csv.DictWriter(texttask,fieldnames=namefield)
            writer.writeheader()
            texttask.close()

        #click contact
        QQaction.connect(self)
        self.driver.implicitly_wait(20)
        self.driver.find_element_by_xpath("//*[contains(@text, '好友')]").click()
        QQaction.connect(self)
        time.sleep(4)
        temproll335 = 0
        elementsList = self.driver.find_elements_by_xpath("//android.widget.AbsListView[1]/*")
        tempclickelement = elementsList.__len__()
        elementsList[elementsList.__len__() - 1].click()
        time.sleep(4)
        elementsList = self.driver.find_elements_by_xpath("//android.widget.AbsListView[1]/*")
        print(tempclickelement)
        print(elementsList.__len__())
        if tempclickelement ==elementsList.__len__():
            raise Exception
        swipe.qqswipe(self)
        while (objectEnd != 1):
            try:
                elementsList = self.driver.find_elements_by_xpath("//android.widget.AbsListView[1]/*")
                objectendroll = 0
            except:
                if objectendroll <= 15:
                    swipe.qqnumberswipe(self)
                    objectendroll += 1
                    print('609')
                    continue
                elif objectendroll > 15:
                    objectEnd = 1
                    continue
            if tempclickelement == elementsList.__len__():
                raise Exception
            for N in range(2, elementsList.__len__()-1):
                elementsList[N].click()
                GetQQnumbertry, name,nick,usercontains= QQaction.freindConcentGetQQnumber(self)
                if GetQQnumbertry == '':
                    self.driver.keyevent(keycode=4)
                elif not GetQQnumbertry in open(temp_taskid, 'r', encoding='utf-8-sig').read():
                    csvfile = codecs.open(temp_taskid, 'a','utf-8-sig')
                    namefield = ['QQ', 'name', 'nick', 'contains']
                    whiter = csv.DictWriter(csvfile,fieldnames=namefield)
                    whiter.writerow({'QQ': GetQQnumbertry, 'name': name, 'nick': nick, 'contains': usercontains})
                    csvfile.close()
                    if self.mark['taskSort'] == 3:
                        QQaction.friendConcentSendMessage(self)
                        QQaction.connect(self)
                    elif self.mark['taskSort'] == 7:
                        self.driver.keyevent(keycode=4)
                else:
                    self.driver.keyevent(keycode=4)
                    if numberinxls == 0:
                        if numberinxlsnumber == GetQQnumbertry:
                            numberinxls =1
                        else:
                            swipe.listswipe(self, elementsList)
                            time.sleep(3)
                            numberinxlsnumber = GetQQnumbertry
                            break

                time.sleep(0.8)
                if N == elementsList.__len__()-2:
                    if elementsList[N + 1].tag_name == 'android.widget.RelativeLayout':
                        objectEnd = 1
                    if objectEndNo == GetQQnumbertry:
                        objectEnd = 1
                    else:
                        swipe.listswipe(self,elementsList)
                        time.sleep(3)
                        objectEndNo = GetQQnumbertry
                        break

        opentemp = codecs.open(temp_taskid, 'r', 'utf-8-sig')
        fieldname = ['QQ', 'name', 'nick', 'contains']
        reader = csv.DictReader(opentemp)
        csvtuples = {}
        for row in reader:
            if row['QQ'] == 'QQ':
                continue
            a = {}
            a['name'] = row['name']
            a['nick'] = row['nick']
            a['contains'] = row['contains']
            b = row['QQ']
            b = b.replace(u'\ufeff', '')
            csvtuples[b] = a
            out = json.dumps(csvtuples)

        requests.post(geturl + 'autoweb/done/' + str(self.mark['taskid']) + '/', json=out)

    def send_message_to_GROUP_list(self):
        #-- sort 4 &8
        #create  && open tempcsv
        temp_taskid = PATH(tempfile.gettempdir() + "/"+ str(self.mark['taskid']) +".csv")
        self.returnnumber = 0
        objectEnd = 0
        objectEndNo = 0
        numberinxlsnumber = 0
        numberinxls = 0
        objectendroll = 0
        #-- group card tacking---#

        if os.path.exists(temp_taskid) == False:
            texttask = codecs.open(temp_taskid, 'w', 'utf-8-sig')
            fieldname = ['GroupId','GroupName','number']
            writers = csv.DictWriter(texttask,fieldnames=fieldname)
            writers.writeheader()
            texttask.close()
            rolltostarttask = 1
        QQaction.connect(self)
        self.driver.implicitly_wait(20)
        clickGROUP =0
        while clickGROUP == 0:
            CGE = self.driver.find_elements_by_xpath("//android.widget.HorizontalScrollView[1]/android.widget.LinearLayout[1]/android.widget.TextView[contains(@text, '群')]")
            if CGE.__len__()>0:
                CGE[0].click()
                clickGROUP =1

        QQaction.connect(self)
        time.sleep(4)
        elementsList = self.driver.find_elements_by_xpath("//android.widget.AbsListView[1]/*")
        tempclickelement = elementsList.__len__()
        elementsList[elementsList.__len__() - 1].click()

        # -- start get qqlist --- #
        while (objectEnd != 1):
            try:
                elementsList = self.driver.find_elements_by_xpath("//android.widget.AbsListView[1]/*")
                objectendroll =0
            except:
                if objectendroll <= 15:
                    swipe.qqnumberswipe(self)
                    objectendroll += 1
                    print('609')
                    continue
                elif objectendroll > 15:
                    objectEnd = 1
                    continue

            if tempclickelement == elementsList.__len__():
                raise Exception
            for N in range(2, elementsList.__len__()-1):
                #---- judge element is last ---#
                elementsList = self.driver.find_elements_by_xpath("//android.widget.AbsListView[1]/*")
                if elementsList[N].tag_name == 'android.widget.LinearLayout':
                # ---- judge element is last ---#
                    elementsList = self.driver.find_elements_by_xpath("//android.widget.AbsListView[1]/*")
                    self.driver.implicitly_wait(15)
                    elementsList[N].click()
                    getgroupinfo = QQaction.clickGroupinfo(self)
                    time.sleep(2.5)
                    try:
                        GetQQnumbertry = self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.AbsListView[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[2]/android.widget.TextView[1]").text
                    except:
                        GetQQnumbertry = ''
                    try:
                        getGroupname = self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.AbsListView[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[1]").text
                    except:
                        getGroupname = ''
                    number = self.driver.find_element_by_xpath("//*[contains(@text, '名成员')]").text.replace('名成员', '')
                    self.driver.keyevent(keycode=4)



                    #click return number
                    QQaction.groupreturn(self)
                    #click return number
                    self.driver.implicitly_wait(15)
                    QQaction.connect(self)
                    # ----------------if -----#
                    if GetQQnumbertry == '':
                        self.driver.keyevent(keycode=4)
                    elif not GetQQnumbertry in open(temp_taskid, 'r', encoding='utf-8-sig').read():
                        opentemp = codecs.open(temp_taskid, 'a', 'utf-8-sig')
                        fieldname = ['GroupId', 'GroupName', 'number']
                        writers = csv.DictWriter(opentemp, fieldnames=fieldname)
                        writers.writerow({'GroupId': GetQQnumbertry, 'GroupName': getGroupname, 'number': number})
                        opentemp.close()
                    else:
                        if numberinxls == 0:
                            if numberinxlsnumber == GetQQnumbertry:
                                numberinxls = 1
                            else:
                                swipe.listswipe(self, elementsList)
                                time.sleep(3)
                                numberinxlsnumber = GetQQnumbertry
                                break

                    time.sleep(0.8)

                    if N == elementsList.__len__() - 2:
                        if elementsList[N + 1].tag_name == 'android.widget.RelativeLayout':
                            objectEnd = 1
                        if objectEndNo == GetQQnumbertry:
                            objectEnd = 1
                        else:
                            swipe.listswipe(self, elementsList)
                            time.sleep(3)
                            objectEndNo = GetQQnumbertry
                            break
        #getGrouplists
        #postlist + name

        print('ready send data')
        opentemp = codecs.open(temp_taskid, 'r', 'utf-8-sig')
        reader = csv.DictReader(opentemp)
        csvtuples = {}
        for row in reader:
            print(row['GroupId'])
            if row['GroupId'] == 'GroupId':
                continue
            a = {}
            a['GroupName'] = row['GroupName']
            a['number'] = row['number']
            b = row['GroupId']
            b = b.replace(u'\ufeff', '')
            csvtuples[b] = a
            out = json.dumps(csvtuples)

        requesttext = requests.post(geturl + 'autoweb/done/' + str(self.mark['taskid']) + '/', json=out)
        print('text')

    def Get_Group_QQ_list(self):
        #-- sort 9
        #create  && open tempcsv
        temp_taskid = PATH(tempfile.gettempdir() + "/"+ str(self.mark['taskid']) +".csv")
        objectEnd = 0
        objectEndNo = 0
        numberinxls = 0
        objectendroll = 0
        numberinxlsnumber = 0
        if os.path.exists(temp_taskid) == False:
                texttask = codecs.open(temp_taskid, 'w','utf_8_sig')
                fieldname = ['QQ', 'name', 'level', 'contains']
                writers = csv.DictWriter(texttask,fieldnames=fieldname)
                writers.writeheader()
                texttask.close()
                rolltostarttask = 1

        self.driver.implicitly_wait(20)
        #click contact
        QQaction.connect(self)
        self.driver.implicitly_wait(15)
        time.sleep(2)
        print(self.mark['AccountId'])
        self.driver.find_element_by_xpath("//android.widget.EditText[contains(@content-desc, '搜索')]").send_keys(self.mark['AccountId'])
        print(self.mark['AccountId'])
        time.sleep(2)
        #self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.EditText[1]").send_keys(self.mark['AccountId'])
        #self.driver.find_element_by_xpath("//android.widget.EditText[contains(@text, '搜索')]").send_keys(self.mark['AccountId'])
        #INPUT GROUP NUMBER
        #CLICK GROUP NUMBER LIST
        xpathname = "//*[contains(@text, '"+ '(' + self.mark['AccountId'] + ')'+ "')]"
        self.driver.find_element_by_xpath(xpathname).click()
        self.driver.implicitly_wait(15)
        QQaction.clickGroupinfo(self)
        self.driver.implicitly_wait(15)
        time.sleep(4)
        self.driver.find_element_by_xpath("//*[contains(@text, '名成员')]").click()
        #if elements# wait...loading
        loadingwait = 0
        while loadingwait== 0:
            time.sleep(2)
            try:
                self.driver.find_element_by_xpath("//android.widget.TextView[contains(@text, '加载中')]")
            except:
                loadingwait = 1
            time.sleep(1)

        while (objectEnd != 1):
            try:
                elementsList = self.driver.find_elements_by_xpath("//android.widget.AbsListView[1]/*")
                objectendroll = 0
            except:
                if objectendroll <= 15:
                    swipe.qqnumberswipe(self)
                    objectendroll+=1
                    print('609')
                    continue
                elif objectendroll > 15:
                    objectEnd =1
                    continue
            for N in range(1, elementsList.__len__()-1):
                if elementsList[N].tag_name =='android.widget.LinearLayout':
                    continue
                try:
                    elementjudge = elementsList[N].find_elements_by_xpath("//android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[1]")
                except:
                    continue
                if elementjudge.__len__() == 0:
                    if N == elementsList.__len__() - 2:
                        if elementsList[N + 1].tag_name == 'android.widget.RelativeLayout':
                            objectEnd = 1
                        if objectEndNo == GetQQnumbertry:
                            objectEnd = 1
                        else:
                            swipe.listswipe(self, elementsList)
                            time.sleep(3)
                            objectEndNo = GetQQnumbertry
                            break
                    continue
                temp_elements_List = elementsList[N].find_element_by_xpath("//android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[1]")
                QQname = elementsList[N].find_element_by_xpath("//android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[1]").text
                qqlevel = elementsList[N].find_element_by_xpath("//android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]").text
                if qqlevel == '群主' or qqlevel == '管理员':
                    qqlevel = 1
                else:
                    qqlevel = 0
                elementjudge = elementjudge[0]
                self.driver.implicitly_wait(15)
                temp_elements_List.click()
                self.driver.implicitly_wait(15)
                time.sleep(2)
                timea = datetime.datetime.now()
                try:
                    contains = self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView[2]").text
                except:
                    contains = ''
                try:
                    GetQQnumbertry = self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]").text
                except:
                    GetQQnumbertry = ''
                timeb = datetime.datetime.now()
                timec = timeb - timea
                print(timec)
                print(str(contains))
                print(str(GetQQnumbertry))

                # ----------------if -----#
                if GetQQnumbertry == '':
                    self.driver.keyevent(keycode=4)
                elif not GetQQnumbertry in open(temp_taskid, 'r', encoding='utf_8').read():
                    texttask = codecs.open(temp_taskid, 'a', 'utf_8')
                    fieldname = ['QQ', 'name', 'level', 'contains']
                    writers = csv.DictWriter(texttask, fieldnames=fieldname)
                    writers.writerow({'QQ': GetQQnumbertry, 'name': QQname, 'level': qqlevel, 'contains':contains })
                    texttask.close()
                    self.driver.keyevent(keycode=4)
                    print('QQ:'+str(GetQQnumbertry) + 'QQname:'+str(QQname)+' QQlevel:'+str(qqlevel)+'N:'+str(N))
                else:
                    self.driver.keyevent(keycode=4)
                    if numberinxls == 0:
                        if numberinxlsnumber == GetQQnumbertry:
                            numberinxls = 1
                        else:
                            swipe.listswipe(self, elementsList)
                            time.sleep(2)
                            numberinxlsnumber = GetQQnumbertry
                            break

                time.sleep(0.8)
                if N == elementsList.__len__() - 2:
                    if objectEndNo == GetQQnumbertry:
                        objectEnd = 1
                    else:
                        swipe.listswipe(self,elementsList)
                        time.sleep(3)
                        objectEndNo = GetQQnumbertry
                        break
        # return
        print('end')
        fieldname = ['QQ', 'name', 'level', 'contains']
        opentemp = codecs.open(temp_taskid, 'r', 'utf-8-sig')
        reader = csv.DictReader(opentemp)
        csvtuples = {}
        for row in reader:
            if row['QQ'] == 'QQ':
                continue
            a = {}
            a['name'] = row['name']
            a['level'] = row['level']
            a['contains'] = row['contains']
            b = row['QQ']
            b = b.replace(u'\ufeff', '')
            csvtuples[b] = a
            out = json.dumps(csvtuples)
        requeststext = requests.post(geturl + 'autoweb/done/' + str(self.mark['taskid']) + '/', json=out)
        print(requeststext.text)

    def wechat_addPeople(self):
        time.sleep(14)
        #self.driver.find_element_by_xpath("//*[contains(@text, 'Contacts')]").click()
        self.driver.find_element_by_xpath("//*[contains(@text, 'Contacts')]").click()
        self.driver.find_element_by_xpath("//*[contains(@text, 'New Friends')]").click()
        self.driver.find_element_by_xpath("//*[contains(@text, 'Add Contacts')]").click()
        self.driver.find_element_by_xpath("//*[contains(@text, 'WeChat ID/Phone')]").click()
        self.driver.find_element_by_xpath("//*[contains(@text, 'Search')]").send_keys(self.mark['AccountId'])
        time.sleep(2)
        self.driver.find_element_by_xpath("//*[contains(@text, 'Search')]").click()

        #self.driver.find_element_by_xpath("//android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.view.View[1]/android.widget.FrameLayout[2]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.ListView[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]").click()
        time.sleep(2)
        self.driver.find_element_by_xpath("//*[contains(@text, 'Add')]").click()
        time.sleep(3)
        self.driver.find_element_by_xpath("//android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.view.View[1]/android.widget.FrameLayout[2]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.EditText[1]").send_keys(self.mark['content'])
        time.sleep(1)
        self.driver.find_element_by_xpath("//*[contains(@text, 'Send')]").click()
        print('done735')
        requests.post(geturl + 'autoweb/done/' + str(self.mark['taskid']) + '/')

    def wechat_post_article(self):
        text = re.split(self.mark['content'])
        pass

    def run(self):
        print('task:'+self.mobile_id_for)
        whilen = 1
        while whilen == 1:
            #try:
            response = requests.post(geturl + 'autoweb/task/' + str(self.mobile_id_for) + '/')
            open('/Users/VANXV/index.html', 'w',).write(response.text)
            data = response.json()
            self.mark = {}
            self.Groupcardx = 0
            self.Groupcardy = 0
            for x, y in data.items():

                self.mark[x] = y
            # data中 1.APP名，2.Activety名， 3任务信息
            desired_caps = {
                'platformName': 'Android',
                'deviceName': self.mark['deviceName'],
                'platformVersion': self.mark['platformVersion'],
                'appPackage': self.mark['appPackage'],
                'appActivity': self.mark['appActivity'],
                #'udid': self.mark['udid'],
                #'exported': "True",
                'unicodeKeyboard': "True",
                'resetKeyboard': "True",
            }
            print(self.mark['webserverurl'])
            self.driver = webdriver.Remote(self.mark['webserverurl'], desired_caps)

            desired_caps1 = {
                'platformName': 'Android',
                'deviceName': '7N3AME1584011383',
                'appPackage': 'com.tencent.mobileqq',
                'appActivity': '.activity.SplashActivity',
                #'udid': self.mark['udid'],
                #'exported': "True",
                'unicodeKeyboard': "True",
                'resetKeyboard': "True",
            }
            #self.driver = webdriver.Remote('http://127.0.0.1:4727/wd/hub', desired_caps1)


            # deviceName： 172.20.10.6:5555
            # deviceName： 01700ee54bd54754
            # deviceName： dd0af4c1
            # deviceName： 7N3AME1584011383
            # appPackage:  com.tencent.mobileqq  、com.tencent.mm
            # appactivity: .activity.SplashActivity   、.ui.LauncherUI
            # webserverurl: http://127.0.0.1:4727/wd/hub



            mobiletask_taskSort_choices = (
            (1, 'add_User'),
            (2, 'ADD_GROUP'),
            (3, 'send_message_to_friend_list'),
            (4, 'send_message_to_GROUP_list'),
            (5, 'send_message_to_user_Accoutid'),
            (6, 'send_message_to_GROUP_Accoutid'),
            (7, 'Get_Pople_list'),
            (8, 'Get_Group_list'),
            (9, 'Get_Group_People_list'),
            )
            #---- loop select_work----#
            textmarktaskSort = self.mark['taskSort']
            print("taskSort:"+str(textmarktaskSort)+"taskid:"+str(self.mark['taskid']))
            if self.mark['sortid'] == 1:
                if textmarktaskSort == 1 or textmarktaskSort == 2:
                    multipleLoop.QQaddPeople_group(self)
                elif textmarktaskSort == 3 or textmarktaskSort == 7:
                    multipleLoop.send_message_And_get_to_friend_list(self)
                elif textmarktaskSort == 4 or textmarktaskSort == 8:
                    multipleLoop.send_message_to_GROUP_list(self)
                elif textmarktaskSort == 9:
                    multipleLoop.Get_Group_QQ_list(self)
                else:
                    pass
            elif self.mark['sortid'] == 2:
                if textmarktaskSort == 1 or textmarktaskSort == 2:
                    multipleLoop.wechat_addPeople(self)
                elif textmarktaskSort == 3 or textmarktaskSort == 7:
                    multipleLoop.send_message_And_get_to_friend_list(self)
                elif textmarktaskSort == 4 or textmarktaskSort == 8:
                    multipleLoop.send_message_to_GROUP_list(self)
                elif textmarktaskSort == 9:
                    multipleLoop.Get_Group_QQ_list(self)
                elif textmarktaskSort == 10:
                    multipleLoop.wechat_post_article(self)
                else:
                    pass
            # ---- loop select_work----#
            # except Exception as e:
            #     exc_type, exc_obj, exc_tb = sys.exc_info()
            #     errore= sys.exc_info()
            #     fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
            #     print(exc_type, fname, exc_tb.tb_lineno)
            #     print('exc_type, fname, exc_tb.tb_lineno')
            #     print(e)
            #     print('e')
            #     print(errore)
            #     print(type(errore))

if __name__ == '__main__':
    p = Pool(3)
    p.map(multipleLoop, ['3'])
