# appium：1.server and andriod connection，
from appium import webdriver
from appium.webdriver.common.touch_action import TouchAction

import time
import re
import requests
import json
import subprocess
# using images model
import csv
import os
import platform
import tempfile
import shutil
from PIL import Image
# using images model
import pytesseract
import pool
import multiprocessing
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

# get user tempfile
PATH = lambda p: os.path.abspath(p)
TEMP_FILE = PATH(tempfile.gettempdir() + "/temp_screen.png")

geturl = 'http://127.0.0.1:8000/'
# get user tempfile


#images_to_string
def image_to_string(img, cleanup=True, plus=''):
    # cleanup为True则识别完成后删除生成的文本文件
    # plus参数为给tesseract的附加高级参数
    subprocess.check_output('tesseract ' + img + ' ' +
                            img + ' ' + plus, shell=True)  # 生成同名txt文件
    text = ''
    with open(img + '.txt', 'rt', encoding='utf-8') as f:
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
        time.sleep(6)
        swipe.qqswipe(self)
        whilegetQQnumber = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.AbsListView[1]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]")
        while whilegetQQnumber.__len__ == 0:
            swipe.qqswipe(self)
            whilegetQQnumber = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.AbsListView[1]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]")
        print(whilegetQQnumber[0].text)
        getQQnumber = self.driver.find_element_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.AbsListView[1]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]")
        print(getQQnumber.text)
        if ')' in getQQnumber.text:
            objectid = re.findall(r'(\d+)', getQQnumber.text)[0]
        else:
            objectid = re.findall(r'\d+', getQQnumber.text)
        objectid = [len(objectid) - 1]

        #objectid = re.findall(r'(\d+)', getQQnumber.text)[0]
        print(objectid+'-177')
        return objectid

    def friendConcentSendMessage(self):
        self.driver.implicitly_wait(15)
        self.driver.find_element_by_xpath("//*[@text='发消息']").click()
        print('start send message')
        # input connect
        # self.driver.find_element_by_xpath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.EditText[1]').send_keys(self.mark['content'])
        # self.driver.implicitly_wait(15)
        # send_message
        # self.driver.find_element_by_xpath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.Button[1]').click()
        # self.driver.implicitly_wait(15)
        # RETURN
        time.sleep(1)
        self.driver.keyevent(keycode=4)
        self.driver.implicitly_wait(15)



class swipe():
    def qqswipe(self):
        for i in range(1):
            print('qqswipe', i + 1)
            #TouchAction(self.driver).press(x=400)
            self.driver.swipe(start_x=400, start_y=450, end_x=400, end_y=100)
            self.driver.implicitly_wait(15)
    def qqnumberswipe(self):
        for i in range(1):
            print('qqnumberswipe', i + 1)
            self.driver.swipe(start_x=400, start_y=270, end_x=500, end_y=100, duration=4000)
            self.driver.implicitly_wait(15)
class multipleLoop(multiprocessing.Process):
    def __init__(self, mobile_id_for):
        multiprocessing.Process.__init__(self)
        self.mobile_id_for = mobile_id_for

    def run(self):
        time.sleep(self.mobile_id_for)
        whilen =1
        #while whilen == 1:
        response = requests.post(geturl + 'autoweb/task/' + str(self.mobile_id_for) + '/')
        data = response.json()
        self.mark = {}
        for x, y in data.items():
            # x = x.encode('utf-8')
            # try:
            #     y = y.encode('utf-8')
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
        self.driver = webdriver.Remote(self.mark['webserverurl'], desired_caps)
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

        if textmarktaskSort == 1 or textmarktaskSort == 2:
            multipleLoop.QQaddPeople(self)
        elif textmarktaskSort == 3:
            multipleLoop.send_message_to_friend_list(self)
        elif textmarktaskSort == 4:
            multipleLoop.send_message_to_GROUP_list(self)
        elif textmarktaskSort == 7:
            multipleLoop.Get_Group_list(self)
        elif textmarktaskSort == 9:
            multipleLoop.Get_Group_QQ_list(self)
        else:
            pass

            # ---- loop select_work----#
    #Need add_QQ_list
    def QQaddPeople(self):
        try:
            time.sleep(4)
            print('click')
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
            elif self.mark['taskSort'] == 2:
                self.driver.find_element_by_xpath("//*[contains(@text, '找群')]").click()
            xpathname = "//*[contains(@text, '" + '(' + self.mark['AccountId'] + ')' + "')]"
            self.driver.find_element_by_xpath(xpathname).click()
            if self.mark['taskSort'] == 1:
                self.driver.find_element_by_xpath("//*[contains(@text, '加好友')]").click()
            elif self.mark['taskSort'] == 2:
                self.driver.find_element_by_xpath("//*[contains(@text, '申请加群')]").click()
            self.driver.find_element_by_xpath("//android.widget.EditText").clear()
            self.driver.find_element_by_xpath("//android.widget.EditText").send_keys(self.mark['content'])
            self.driver.find_element_by_xpath("//*[contains(@text, '发送')]").click()

            #self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.EditText[1]").clear()
            #self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.EditText[1]").send_keys(self.mark['content'])
            #self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[3]").click()
            posturl = geturl + 'autoweb/done/' + str(self.mark['taskid']) + '/'
            requests.post(str(posturl))
        except:
            pass

    #Need Send_message_Need_time
    def send_message_to_friend_list(self):
        #create  && open tempcsv
        temp_taskid = PATH(tempfile.gettempdir() + "/"+ str(self.mark['taskid']) +".csv")

        if os.path.exists(temp_taskid) == False:
            texttask = open(temp_taskid, 'w')
            texttask.close()

        self.driver.implicitly_wait(20)
        #click contact
        QQaction.connect(self)
        self.driver.implicitly_wait(20)
        time.sleep(3)
        self.driver.find_element_by_xpath("//*['@text=好友']").click()

        QQaction.connect(self)
        QQaction.connect(self)
        #get_elementlist
        elementsList = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/*")
        elementsList[1].click()
        severQQ = []
        while (objectEnd != 1):
            elementsList = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/*")

            self.driver.implicitly_wait(15)
            for N in range(2, elementsList.__len__()-1):
                # if N >= elementsList.__len__() - 1:
                #     break
                #---- judge element is last ---#
                if elementsList[N].tag_name == 'android.widget.LinearLayout':
                    if not elementsList[N + 1]:
                        print('over409')
                        objectEnd = 1
                    if elementsList[N + 1]:
                        if elementsList[N + 1].tag_name == 'android.widget.RelativeLayout':
                            print('over413')
                            objectEnd =1
                # ---- judge element is last ---#
                    # flow
                    # 1.get name
                    #   if name not in serverqq
                    #       open get number
                    #       changer note name
                    #       send
                    #       return
                    # 1. post list

                    elementsList = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/*")
                    tempElement = elementsList[N].find_element_by_xpath('//android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]')

                    self.driver.implicitly_wait(15)
                    tempElement.click()

                    GetQQnumbertry = QQaction.freindConcentGetQQnumber(self)
                    if not GetQQnumbertry in open(temp_taskid, 'r', encoding='utf-8').read():
                        QQaction.friendConcentSendMessage(self)
                        QQaction.connect(self)
                        open(temp_taskid, 'a',encoding='utf-8').write(','+ GetQQnumbertry)
                        print(GetQQnumbertry)
                        print(N)
                    else:
                        self.driver.keyevent(keycode=4)
                    if N == elementsList.__len__()-2:
                        self.driver.swipe(start_x=elementsList[5].location_in_view['x'],start_y=elementsList[5].location_in_view['y'],end_x=elementsList[1].location_in_view['x'],end_y=elementsList[1].location_in_view['y'])
                        time.sleep(3)
                        break
        #getqqlists
        #postqqlist
        #postname

    def send_message_to_GROUP_list(self):
        #create  && open tempcsv
        temp_taskid = PATH(tempfile.gettempdir() + "/"+ str(self.mark['taskid']) +".csv")

        if os.path.exists(temp_taskid) == False:
            texttask = open(temp_taskid, 'w')
            texttask.close()

        QQaction.connect(self)
        self.driver.implicitly_wait(20)
        time.sleep(3)
        self.driver.find_element_by_xpath("//*['@text=群']").click()
        time.sleep(3)
        QQaction.connect(self)
        QQaction.connect(self)
        elementsList = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/*")
        elementsList[elementsList.__len__() - 1].click()

        # -- start get qqlist --- #
        elementsList = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/*")
        objectEnd = 0
        while (objectEnd != 1):
            elementsList = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/*")
            self.driver.implicitly_wait(15)
            for N in range(2, elementsList.__len__()-1):
                #---- judge element is last ---#
                if elementsList[N].tag_name == 'android.widget.LinearLayout':
                    if not elementsList[N + 1]:
                        print('over452')
                        objectEnd = 1
                    if elementsList[N + 1]:
                        if elementsList[N + 1].tag_name == 'android.widget.RelativeLayout':
                            print('over456')
                            objectEnd =1
                # ---- judge element is last ---#

                    elementsList = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/*")
                    tempElement = elementsList[N].find_element_by_xpath('//android.widget.TextView[1]')
                    tempElement.click()
                    #time.sleep(3)
                    self.driver.implicitly_wait(15)
                    time.sleep(1)
                    print('455_click')
                    if self.driver.find_elements_by_xpath("//*['@text=我知道了']").__len__() >1:
                        self.driver.find_element_by_xpath("//*['@text=我知道了']").click()
                        self.driver.keyevent(keycode=4)
                        self.driver.implicitly_wait(15)
                        QQaction.connect(self)
                        continue


                    self.driver.find_element_by_xpath("//android.widget.ImageView[contains(@content-desc, '群资料卡')]").click()

                    GetQQnumbertry = self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.AbsListView[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[2]/android.widget.TextView[1]").text
                    self.driver.keyevent(keycode=4)
                    if not GetQQnumbertry in open(temp_taskid, 'r', encoding='utf-8').read():
                        open(temp_taskid, 'a',encoding='utf-8').write(','+ GetQQnumbertry)
                        print('send messages in 461')
                    time.sleep(3)
                    self.driver.keyevent(keycode=4)
                    self.driver.implicitly_wait(15)
                    QQaction.connect(self)

                    if N == elementsList.__len__()-2:
                        self.driver.swipe(start_x=elementsList[5].location_in_view['x'],start_y=elementsList[5].location_in_view['y'],end_x=elementsList[1].location_in_view['x'],end_y=elementsList[1].location_in_view['y'])
                        time.sleep(3)
                        break
        #getGrouplists
        #postlist + name

    def send_message_to_user_Accoutid(self):
        pass

    def send_message_to_user_Accoutid(self):
        pass

    def send_message_to_GROUP_Accoutid(self):
        pass

    def Get_Group_list(self):
        #create  && open tempcsv
        temp_taskid = PATH(tempfile.gettempdir() + "/"+ str(self.mark['taskid']) +".csv")

        if os.path.exists(temp_taskid) == False:
            texttask = open(temp_taskid, 'w')
            texttask.close()

        QQaction.connect(self)
        self.driver.implicitly_wait(20)
        time.sleep(3)
        self.driver.find_element_by_xpath("//*['@text=群']").click()
        time.sleep(3)
        QQaction.connect(self)
        QQaction.connect(self)
        elementsList = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/*")
        elementsList[elementsList.__len__() - 1].click()

        # -- start get qqlist --- #
        elementsList = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/*")
        objectEnd = 0
        while (objectEnd != 1):
            elementsList = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/*")
            self.driver.implicitly_wait(15)
            for N in range(2, elementsList.__len__()-1):
                #---- judge element is last ---#
                if elementsList[N].tag_name == 'android.widget.LinearLayout':
                    if not elementsList[N + 1]:
                        print('over452')
                        objectEnd = 1
                    if elementsList[N + 1]:
                        if elementsList[N + 1].tag_name == 'android.widget.RelativeLayout':
                            print('over456')
                            objectEnd =1
                # ---- judge element is last ---#

                    elementsList = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/*")
                    tempElement = elementsList[N].find_element_by_xpath('//android.widget.TextView[1]')
                    tempElement.click()
                    time.sleep(3)
                    self.driver.implicitly_wait(15)
                    self.driver.find_element_by_xpath("//android.widget.ImageView[contains(@content-desc, '群资料卡')]").click()
                    #self.driver.find_element_by_xpath("//*['@content-desc=群资料卡']").click()
                    #self.driver.find_element_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.ImageView[1]").click()

                    GetQQnumbertry = self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.AbsListView[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[2]/android.widget.TextView[1]").text
                    if not GetQQnumbertry in open(temp_taskid, 'r', encoding='utf-8').read():
                        open(temp_taskid, 'a',encoding='utf-8').write(','+ GetQQnumbertry)
                    self.driver.keyevent(keycode=4)
                    time.sleep(3)
                    self.driver.keyevent(keycode=4)
                    self.driver.implicitly_wait(15)
                    QQaction.connect(self)

                    if N == elementsList.__len__()-2:
                        self.driver.swipe(start_x=elementsList[5].location_in_view['x'],start_y=elementsList[5].location_in_view['y'],end_x=elementsList[1].location_in_view['x'],end_y=elementsList[1].location_in_view['y'])
                        time.sleep(3)
                        break
        #getGrouplists
        #postlist + name
        pass
    def Get_Group_QQ_list(self):
        #create  && open tempcsv
        temp_taskid = PATH(tempfile.gettempdir() + "/"+ str(self.mark['taskid']) +".csv")

        if os.path.exists(temp_taskid) == False:
            texttask = open(temp_taskid, 'w')
            texttask.close()

        self.driver.implicitly_wait(20)
        #click contact
        QQaction.connect(self)
        self.driver.implicitly_wait(15)
        time.sleep(3)
        QQaction.connect(self)
        QQaction.connect(self)
        self.driver.find_element_by_xpath("//android.widget.EditText[contains(@content-desc, '搜索')]").click()
        time.sleep(3)
        self.driver.find_element_by_xpath("//android.widget.EditText[contains(@text, '搜索')]").send_keys(self.mark['AccountId'])
        #self.driver.find_element_by_xpath("//android.widget.EditText[contains(@content-desc, '搜索')]").send_keys(self.mark['AccountId'])
        #INPUT GROUP NUMBER
        #CLICK GROUP NUMBER LIST
        xpathname = "//*[contains(@text, '"+ '(' + self.mark['AccountId'] + ')'+ "')]"
        self.driver.find_element_by_xpath(xpathname).click()
        self.driver.implicitly_wait(15)
        self.driver.find_element_by_xpath("//*[contains(@content-desc, '群资料卡')]").click()
        self.driver.implicitly_wait(15)
        self.driver.find_element_by_xpath("//*[contains(@text, '名成员')]").click()
        #if elements# wait...loading
        loadingwait = 0
        while loadingwait== 0:
            time.sleep(2)
            if self.driver.find_elements_by_xpath("//android.widget.TextView[contains(@text, '加载中')]").__len__() != 1:
                loadingwait = 1
            time.sleep(2)
        #get admin list

        #get qq
        #back
        #roll
        objectEnd = 0
        while (objectEnd != 1):
            elementsList = self.driver.find_elements_by_xpath("//android.widget.AbsListView[1]/*")

            # get qq
            # back
            # roll

            self.driver.implicitly_wait(15)
            for N in range(1, elementsList.__len__()-1):
                print(N)
                if elementsList[N].tag_name =='android.widget.LinearLayout':
                    continue
                elementjudge = elementsList[N].find_elements_by_xpath("//android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[1]")
                if elementjudge.__len__() == 0:
                    continue
                # if not elementsList[N + 1]:
                #     print('606')
                #     objectEnd = 1
                # get number admin name
                # back
                # roll
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
                GetQQnumbertry = self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]").text
                if not GetQQnumbertry in open(temp_taskid, 'r', encoding='utf-8').read():
                    open(temp_taskid, 'a',encoding='utf-8').write(','+ GetQQnumbertry)
                    self.driver.keyevent(keycode=4)
                    print(GetQQnumbertry)
                    print(N)
                else:
                    self.driver.keyevent(keycode=4)
                if N == elementsList.__len__()-2:
                    self.driver.swipe(start_x=elementsList[9].location_in_view['x'],start_y=elementsList[92].location_in_view['y'],end_x=elementsList[1].location_in_view['x'],end_y=elementsList[1].location_in_view['y'])
                    time.sleep(3)
                    break
        #getqqlists
        #postqqlist
        #postname

        # click group
        # click connect
        # click my own join group
        # qq details
        # click list
        #
        # return
        pass

if __name__ == '__main__':
    mobile_id = [1]
    for mobile_id_for in mobile_id:
        locals()['a' + str(mobile_id_for)] = multipleLoop(mobile_id_for)
        locals()['a' + str(mobile_id_for)].start()
        locals()['a' + str(mobile_id_for)].join()#加进去以后不会报错，得查查什么原因。
        #locals()['a' + str(mobile_id_for)].start()



#---- next is qq list xpath ----#
# qq friends list name xpath
#elementslistname = self.driver.find_element_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]")
