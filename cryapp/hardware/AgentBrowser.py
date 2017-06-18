#!/usr/bin/env python
# -*- coding: utf-8 -*-

'''
python3.4.4 + pyqt5.5.1
wmi
pywin32
pyinstaller
pyinstaller -w Anxxx.py -i main.ico
'''
from random import randint
import sys
from urllib.parse import urlencode

from PyQt5.QtCore import QUrl, QRunnable, pyqtSignal, QThreadPool
from PyQt5.QtGui import QIcon
from PyQt5.QtNetwork import QNetworkRequest
from PyQt5.QtWebKit import QWebSettings
from PyQt5.QtWebKitWidgets import QWebView, QWebPage
from PyQt5.QtWidgets import QWidget, QVBoxLayout, QLineEdit, QComboBox,\
    QHBoxLayout, QPushButton, QMessageBox, QToolBar, QProgressBar, \
    QApplication, QGridLayout

import hardVisual  # @UnresolvedImport @UnusedImport


__Author__ = "By: vanxv"
__Copyright__ = "Copyright (c) 2017 vanxv"
__Version__ = "Version 1.0"

class AgentPage(QWebPage):

    def __init__(self, *args, **kwargs):
        super(AgentPage, self).__init__(*args, **kwargs)
        self.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"
        self.networkAccessManager().sslErrors.connect(self.handleSslErrors)

    def handleSslErrors(self, reply, errors):
        reply.ignoreSslErrors()

    def setUserAgent(self, userAgent):
        try:
            self.userAgent = userAgent.split("  ###  ")[1]
        except:
            self.userAgent = userAgent

    def userAgentForUrl(self, url):
        #         print(self.userAgent)
        return self.userAgent


class HardVisualRunnable(QRunnable):

    def __init__(self, signal, *args, **kwargs):
        super(HardVisualRunnable, self).__init__(*args, **kwargs)
        self.setAutoDelete(False)
        self.isStop = False
        self.signal = signal

    def stop(self):
        self.isStop = True

    def run(self):
        self.isStop = False
        data = hardVisual.getData()
        if not self.isStop:
            self.signal.emit(data)


class Button(QPushButton):

    def __init__(self, url, webView, *args, **kwargs):
        super(Button, self).__init__(*args, **kwargs)
        self.url = QUrl(url)
        self.webView = webView
        self.clicked.connect(self.onClick)

    def onClick(self):
        self.webView.load(self.url)


class AgentBrowser(QWidget):

    Url_PCI = QUrl("http://www.zhess.com/users/PcHardwareInsert/")
    SignalGetData = pyqtSignal(dict)

    def __init__(self, agents, urls, *args, **kwargs):
        super(AgentBrowser, self).__init__(*args, **kwargs)
        self.resize(800, 600)
        # 浏览器
        self.webView = QWebView(self)

        hlayout = QHBoxLayout()
        # 账号输入框
        self.edit_username = QLineEdit(
            self, placeholderText="请输入账号", clearButtonEnabled=True)
        hlayout.addWidget(self.edit_username)
        # 密码输入框
        self.edit_password = QLineEdit(
            self, placeholderText="请输入密码", clearButtonEnabled=True)
        hlayout.addWidget(self.edit_password)
        # 登录按钮
        self.buttonLogin = QPushButton("登　　录", self, clicked=self.onLogin)
        hlayout.addWidget(self.buttonLogin)

        # 初始化动态url按钮
        urlLayout = self.setupUrls(urls)

        layout = QVBoxLayout(self)
        layout.addItem(hlayout)
        layout.addItem(urlLayout)

        self.webView.linkClicked.connect(self.webView.load)
        self.webPage = AgentPage(self.webView)
        self.webPage.setLinkDelegationPolicy(QWebPage.DelegateAllLinks)
        self.webView.setPage(self.webPage)
        self.initSetting()

        hlayout2 = QHBoxLayout()
        # Agent选择框
        self.box_agents = QComboBox(
            self, maximumWidth=600, currentTextChanged=self.webPage.setUserAgent)
        self.box_agents.addItems(agents)
        hlayout2.addWidget(self.box_agents)

        toolBar = QToolBar("&Menu", self)
        toolBar.addAction(self.webView.pageAction(QWebPage.Back))
        toolBar.addAction(self.webView.pageAction(QWebPage.Forward))
        toolBar.addAction(self.webView.pageAction(QWebPage.Reload))
        toolBar.addAction(self.webView.pageAction(QWebPage.Stop))
        hlayout2.addWidget(toolBar)

        layout.addItem(hlayout2)
        # 进度条
        self.progressBar = QProgressBar(self)
        self.progressBar.setTextVisible(False)
        self.progressBar.setStyleSheet("""QProgressBar {
    min-height: 3px;
    max-height: 3px;
    }
    QProgressBar::chunk {
        background-color: #27ae61;
    }
        """)
        self.webView.loadStarted.connect(self.progressBar.show)
        self.webView.loadFinished.connect(self.progressBar.hide)
        self.webView.loadProgress.connect(self.progressBar.setValue)
        layout.addWidget(self.progressBar)
        layout.addWidget(self.webView)

        # 随机选择一个agent
        self.box_agents.setCurrentIndex(randint(0, len(agents) - 1))

        # 获取信息的信号槽
        self.SignalGetData.connect(self.onGetData)
        self.loginRunnable = None

    def setupUrls(self, urls):
        layout = QGridLayout()
        _urls = []
        for url in urls:
            try:
                _urls.append(url.split("  ###  "))
            except:
                pass
        m = len(_urls) % 6
        items = []
        for i in range(int(len(_urls) / 6)):
            items.append(_urls[i * 6:i * 6 + 6])
        if m > 0:
            items.append(_urls[-m:])
        for row, item in enumerate(items):
            for col, value in enumerate(item):
                layout.addWidget(
                    Button(value[1], self.webView, value[0], self), row, col)
        return layout

    def onLogin(self):
        username = self.edit_username.text().strip()
        if not username:
            return QMessageBox.critical(self, "提示", "请输入账号")
        password = self.edit_password.text().strip()
        if not password:
            return QMessageBox.critical(self, "提示", "请输入密码")
        # 不可用
        self.buttonLogin.setText("登陆中...")
        self.buttonLogin.setEnabled(False)
        threadPool = QThreadPool.globalInstance()
        if threadPool.maxThreadCount() < 6:
            threadPool.setMaxThreadCount(6)
        if threadPool.activeThreadCount() == 4:
            self.buttonLogin.setText("登　　陆")
            self.buttonLogin.setEnabled(True)
            return QMessageBox.information(self, "提示", "任务进行太快请稍后再试")
        #print(threadPool.maxThreadCount(), threadPool.activeThreadCount())
        # 先停止
        if self.loginRunnable:
            self.loginRunnable.stop()
        self.loginRunnable = HardVisualRunnable(self.SignalGetData)
        # 重新启动一个
        threadPool.tryStart(self.loginRunnable)

    def replyFinished(self, reply):
        self.buttonLogin.setText("登　　陆")
        self.buttonLogin.setEnabled(True)
        data = reply.readAll()
        reply.deleteLater()
        try:
            data = data.decode(errors="ignore")
            data = str(data)
        except:
            data = "0"
        if data == "1":
            return QMessageBox.information(self, "提示", "登录成功")
        elif data == "0":
            return QMessageBox.information(self, "提示", "登录失败")
        else:
            QMessageBox.information(self, "提示", "登录失败")

    def onGetData(self, data):
        # print("onGetData")
        if not data:
            return QMessageBox.critical(self, "错误", "获取信息失败")
        username = self.edit_username.text().strip()
        if not username:
            return QMessageBox.critical(self, "提示", "请输入账号")
        password = self.edit_password.text().strip()
        if not password:
            return QMessageBox.critical(self, "提示", "请输入密码")
        data["username"] = username
        data["password"] = password
        # 开始提交
        manager = self.webPage.networkAccessManager()
        req = QNetworkRequest(self.Url_PCI)
        req.setHeader(
            QNetworkRequest.ContentTypeHeader, "application/x-www-form-urlencoded")
        reply = manager.post(req, urlencode(data).encode())
        reply.finished.connect(lambda: self.replyFinished(reply))

    def onOpenTaobao(self):
        self.webView.load(self.Url_TB)

    def onOpenJingDong(self):
        self.webView.load(self.Url_JD)

    def closeEvent(self, event):
        self.hide()
        super(AgentBrowser, self).closeEvent(event)
        QApplication.instance().quit()
        sys.exit()

    def initSetting(self):
        # 获取当前设置
        webSettings = QWebSettings.globalSettings()
        # 设置默认编码为utf-8
        webSettings.setDefaultTextEncoding("utf-8")
        # 自动加载图片
        webSettings.setAttribute(QWebSettings.AutoLoadImages, True)
        # 开发人员工具
        webSettings.setAttribute(QWebSettings.DeveloperExtrasEnabled, False)
        # 开启java支持
        webSettings.setAttribute(QWebSettings.JavaEnabled, True)
        # js 打开窗口
        webSettings.setAttribute(QWebSettings.JavascriptCanOpenWindows, True)
        # js 关闭窗口
        webSettings.setAttribute(QWebSettings.JavascriptCanCloseWindows, True)
        # js 访问剪贴板
        webSettings.setAttribute(
            QWebSettings.JavascriptCanAccessClipboard, True)
        # html5离线储存
        webSettings.setAttribute(
            QWebSettings.OfflineStorageDatabaseEnabled, True)
        webSettings.setAttribute(
            QWebSettings.OfflineWebApplicationCacheEnabled, True)
        # 开启插件
        webSettings.setAttribute(QWebSettings.PluginsEnabled, True)
        # 私密浏览
        webSettings.setAttribute(QWebSettings.PrivateBrowsingEnabled, True)
        # html5本地储存
        webSettings.setAttribute(QWebSettings.LocalStorageEnabled, True)
        webSettings.setAttribute(
            QWebSettings.LocalStorageDatabaseEnabled, True)
        webSettings.setAttribute(
            QWebSettings.LocalContentCanAccessFileUrls, True)
        webSettings.setAttribute(
            QWebSettings.LocalContentCanAccessRemoteUrls, True)
        # css3网格布局
        webSettings.setAttribute(QWebSettings.CSSGridLayoutEnabled, True)
        # 允许桌面通知
        webSettings.setAttribute(QWebSettings.NotificationsEnabled, True)
        # 跨站点
        webSettings.setAttribute(QWebSettings.XSSAuditingEnabled, True)


def main():
    # 加载agents
    try:
        with open("agents.txt", "rb") as fp:
            agents = fp.read().decode("utf8", errors="ignore").split("\r\n")
            agents = [agent for agent in agents if agent]
    except Exception as e:
        print(e)
        agents = [
            "Chrome  ###  Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"]
    # 加载页面url
    try:
        with open("urls.txt", "rb") as fp:
            urls = fp.read().decode("utf8", errors="ignore").split("\r\n")
            urls = [url for url in urls if url]
    except Exception as e:
        print(e)
        urls = []
    app = QApplication(sys.argv)
    app.setWindowIcon(QIcon("main.ico"))
    app.quitOnLastWindowClosed()
    w = AgentBrowser(agents, urls)
    w.show()
    sys.exit(app.exec_())

if __name__ == "__main__":
    try:
        main()
    except SystemExit as e:
        print(e)
    except Exception as e:
        print(e)
