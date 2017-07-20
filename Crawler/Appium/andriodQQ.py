# appium原理：1.server and andriod connection，
from appium import webdriver
import time
import requests
import json
import subprocess
# using images model
import os
import platform
import tempfile
import shutil
from PIL import Image
# using images model
import pytesseract

import multiprocessing

from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

# get user tempfile
PATH = lambda p: os.path.abspath(p)
TEMP_FILE = PATH(tempfile.gettempdir() + "/temp_screen.png")
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
        image1 = Image.open(TEMP_FILE)
        text = image_to_string(TEMP_FILE, False, '-l chi_sim')
        print(text)
        print('end')

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


#using reference

class multipleLoop(multiprocessing.Process):
    def __init__(self, mobile_id_for):
        multiprocessing.Process.__init__(self)
        self.mobile_id_for = mobile_id_for

    def run(self):
        print(self.mobile_id_for)
        time.sleep(self.mobile_id_for)
        whilen =1
        while whilen == 1:
            response = requests.post('http://127.0.0.1:8000/auto/task/' + str(self.mobile_id_for) + '/')
            data = response.json()
            mark = {}
            for x, y in data.items():
                # x = x.encode('utf-8')
                # try:
                #     y = y.encode('utf-8')
                mark[x] = y
            # data中 1.APP名，2.Activety名， 3任务信息
            print(data)
            desired_caps = {
                'platformName': 'Android',
                'deviceName': mark['deviceName'],
                'platformVersion': mark['platformVersion'],
                'appPackage': mark['appPackage'],
                'appActivity': mark['appActivity'],
                'udid': mark['udid'],
                #'exported': "True",
                'unicodeKeyboard': "True",
                'resetKeyboard': "True",
            }

            self.driver = webdriver.Remote(mark['webserverurl'], desired_caps)

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
            if mark['taskSort'] == 1:
                multipleLoop.QQaddPeople(self,mark)
            elif mark['taskSort'] == 2:
                multipleLoop.QQaddGroup(self,mark)
            elif mark['taskSort'] == 3:
                multipleLoop.send_message_to_friend_list(self,mark)

            # ---- loop select_work----#
    #Need add_QQ_list
    def QQaddPeople(self,mark):
        try:
            time.sleep(7)
            print('click')
            self.driver.find_element_by_xpath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabWidget[1]/android.widget.FrameLayout[1]').click()
            time.sleep(5)
            self.driver.find_element_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]").click()
            time.sleep(5)
            self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.EditText[1]").click()
            time.sleep(2)
            self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.EditText[1]").send_keys(mark['AccountId'])
            time.sleep(2)
            self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]").click()
            #self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]").click()
            time.sleep(7)
            self.driver.find_element_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.Button[1]").click()
            time.sleep(2)
            self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.EditText[1]").clear()
            time.sleep(2)
            self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.EditText[1]").send_keys(mark['content'])
            time.sleep(5)
            self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[3]").click()
            time.sleep(2)
            print('end')
        except:
            pass
        print('click')
    #Need add_Group_list
    def QQaddGroup(self,mark):
        try:
            self.driver.implicitly_wait(15)
            print('click')
            self.driver.find_element_by_xpath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabWidget[1]/android.widget.FrameLayout[1]').click()
            self.driver.implicitly_wait(15)
            self.driver.find_element_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]").click()
            self.driver.implicitly_wait(15)
            self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.EditText[1]").click()
            time.sleep(2)
            self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.EditText[1]").send_keys(mark['AccountId'])
            time.sleep(2)
            self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]").click()
            time.sleep(5)
            #self.driver.find_element_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.Button[1]").click()
            self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]").click()
            time.sleep(3)
            self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.EditText[1]").clear()
            #self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.EditText[1]").clear()
            time.sleep(1)
            self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.EditText[1]").send_keys(mark['content'])
            #self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.EditText[1]").send_keys(mark['content'])
            time.sleep(5)
            self.driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[3]").click()
            time.sleep(5)
            self.driver.find_element_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[3]/android.widget.TextView[1]").click()
            print('click')
        except:
            pass
    #Need Send_message_Need_time
    def send_message_to_friend_list(self,mark):
        #try:
        print('click')
        #click contact
        self.driver.implicitly_wait(15)
        self.driver.find_element_by_xpath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabWidget[1]/android.widget.FrameLayout[1]').click()
        self.driver.implicitly_wait(15)
        #click friend
        self.driver.find_element_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.HorizontalScrollView[1]/android.widget.LinearLayout[1]/android.widget.TextView[1]").click()
        #GO_TOP
        self.driver.swipe(start_x=75, start_y=500, end_x=75, end_y=0, duration=1000)
        self.driver.implicitly_wait(15)
        elementsClick = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/*")
        if elementsClick[2].tag_name == 'android.widget.RelativeLayout':
            elementsClick[1].click()
        tempElement = self.driver.find_element_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/android.widget.RelativeLayout[2]/android.view.View[1]")
        getimages.get_screenshot_by_element(self, tempElement)
        self.driver.implicitly_wait(15)
        for i in range(2):
            print('开始执行滑动', i + 1)
            self.driver.swipe(start_x=50, start_y=333, end_x=50, end_y=50, duration=1000)
            self.driver.implicitly_wait(15)
        time.sleep(2)
        print(elementsClick)
        time.sleep(3)
        print(elementsClick)
        for elementsClicklist in elementsClick:
            print(elementsClicklist.tag_name)
        # except:
        #     pass
    #Need Send_Group_Message_Need_time
    def send_message_to_GROUP_list(self):
        pass

    def send_message_to_GROUP_list(self):
        pass

    def send_message_to_user_Accoutid(self):
        pass

    def send_message_to_user_Accoutid(self):
        pass

    def send_message_to_GROUP_Accoutid(self):
        pass

    #No Need
    def Get_Pople_list(self):
        time.sleep(7)
        print('click')
        self.driver.find_element_by_xpath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabWidget[1]/android.widget.FrameLayout[1]').click()
        time.sleep(5)

        cc = self.driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/android.widget.LinearLayout")
        ccc = cc[1].find_element_by_xpath("//android.widget.FrameLayout[1]")
        getimages_class = getimages(self.driver)
        getimages_class.get_screenshot_by_element(ccc)

    #No Need
    def Get_Group_list(self):
        pass
    def Get_Group_People_list(self):
        pass

if __name__ == '__main__':
    mobile_id = [1,2]
    for mobile_id_for in mobile_id:
        locals()['a' + str(mobile_id_for)] = multipleLoop(mobile_id_for)
        locals()['a' + str(mobile_id_for)].start()
        locals()['a' + str(mobile_id_for)].join()#加进去以后不会报错，得查查什么原因。
        #locals()['a' + str(mobile_id_for)].start()
