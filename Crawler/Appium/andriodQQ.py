# coding=utf-8
#---python2.7
#---appium

# appium原理：1.server and andriod connection，
from appium import webdriver
import time
import requests
import json
# using images model
import os
import platform
import tempfile
import shutil
from PIL import Image
# using images model
import pytesseract
# get user tempfile
PATH = lambda p: os.path.abspath(p)
TEMP_FILE = PATH(tempfile.gettempdir() + "/temp_screen.png")
# get user tempfile

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
        image1 = Image.open(TEMP_FILE)
        text = pytesseract.image_to_string(Image.open(TEMP_FILE),lang='chi_sim')
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

#Need add_QQ_list
def addPeople(number):
    time.sleep(7)
    print('click')
    driver.find_element_by_xpath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabWidget[1]/android.widget.FrameLayout[1]').click()
    time.sleep(5)
    driver.find_element_by_id('com.tencent.mobileqq:id/et_search_keyword').click()
    time.sleep(2)
    driver.find_element_by_id('com.tencent.mobileqq:id/et_search_keyword').send_keys(number)
    time.sleep(4)
    #driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.AbsListView[1]/android.widget.LinearLayout[2]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[2]").click()
    #driver.find_element_by_android_uiautomator('new UiSelector().text(' + number +')').click()
    driver.find_element_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.Button[1]").click()
    time.sleep(3)
    driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.EditText[1]").clear()
    time.sleep(3)
    driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.EditText[1]").send_keys('hello')
    time.sleep(5)
    driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[3]").click()
    print('click')

#Need add_Group_list
def addGroup():
    time.sleep(7)
    print('click')
    driver.find_element_by_xpath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabWidget[1]/android.widget.FrameLayout[1]').click()
    time.sleep(5)
    driver.find_element_by_id('com.tencent.mobileqq:id/et_search_keyword').click()
    time.sleep(2)
    driver.find_element_by_id('com.tencent.mobileqq:id/et_search_keyword').send_keys("24782122")
    time.sleep(4)
    #driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.AbsListView[1]/android.widget.LinearLayout[2]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[2]").click()
    driver.find_element_by_android_uiautomator('new UiSelector().text("24782122")').click()
    time.sleep(5)
    driver.find_element_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.Button[1]").click()
    time.sleep(3)
    driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.EditText[1]").clear()
    time.sleep(3)
    driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.EditText[1]").send_keys('hello')
    time.sleep(5)
    driver.find_element_by_xpath("//android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.TextView[3]").click()
    print('click')

#Need Send_message_Need_time
def SendPeopleMessages():
    pass
#Need Send_Group_Message_Need_time
def SendGroupMessages():
    pass

#No Need
def GetPoplelist():
    time.sleep(7)
    print('click')
    driver.find_element_by_xpath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabWidget[1]/android.widget.FrameLayout[1]').click()
    time.sleep(5)

    cc = driver.find_elements_by_xpath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TabHost[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.view.View[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.AbsListView[1]/android.widget.LinearLayout")
    ccc = cc[1].find_element_by_xpath("//android.widget.FrameLayout[1]")
    getimages_class = getimages(driver)
    getimages_class.get_screenshot_by_element(ccc)

#No Need
def GetGrouplist():
    pass
def GetGroupPeoplelist():
    pass

deviceName = 'vbox86p'
platformVersion = '4.3'
response = requests.post('http://127.0.0.1:8000/auto/task/' + deviceName + '/' + platformVersion + '/')
data = response.json()
nl = {}
for x,y in data.iteritems():
    x = x.encode('utf-8')
    try:
        y = y.encode('utf-8')
    except:
        y = y
    nl[x] = y
#data中 1.APP名，2.Activety名， 3任务信息
desired_caps = {
    'platformName': 'Android',
    'deviceName': deviceName,
    'platformVersion': platformVersion,
    # apk
    'appPackage': nl['appPackage'],
    # apk launcherActivity
    'appActivity': nl['appActivity'],
    'unicodeKeyboard': "True",
    'resetKeyboard': "True",
}
driver = webdriver.Remote('http://127.0.0.1:4723/wd/hub', desired_caps)
addPeople(nl['AccountId'])



#test()
