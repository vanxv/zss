var bg = chrome.extension.connect({
    name: "danet"
});
bg.onMessage.addListener(function(msg) {
    if (msg.cb && !msg.content.other) {
        var cb = eval(msg.cb);
        cb(msg.content)
    } else {
        var cb = eval(msg.cb);
        cb(msg.content.data, msg.content.other)
    }
});
var comm_ver = chrome.runtime.getManifest().version;
var srcurl = window.location.href;
var comm_list = new Array();
var comm_token = "";
var which_type = true;
var price_percent = 1;
var commen_del_min;
var commen_del_max;
var day_type = 0;
var my_pertinence = -1;
var nowPrice_array = new Array();
var comm_userid = "";
var comm_multiple = 100;
var ccy_host = "http://www.zhess.com/";
var isLogin = false;
var user_member_id = "";
var user_shop_id = "";
var user_name = "";
var ad_html_list = new Array();
var inHtml = '<div id="layer1"class="container clearfix"><div class="top"><div><span class="ccy-title"onclick="window.open(&quot;http://www.zhess.com&quot;)"style="cursor: pointer;"><b class="ccy-logo"></b>自动广告魔方<a class="mgl"href="http://www.zhess.com"target="_blank">www.zhess.com</a>数据化机器学习广告研发中心</span><span id="MsgtoUser"></span><span id="VersionInfo"></span></div></div></div>';
var infoHtml = ['<div class="infomation"><div class="info">', '<div class="produce"><span class="yc-icon icon-one xy-one"></span>一键添加关键词：智能云端词库：</select><select id="condition_1_1"class="sleck-box"><option>展现指数</option><option>点击率</option><option>转化率</option></select>排序，包含关键词：<input type="text"class="reason sleck-box"id="condition_1_2"/><button class="button-b sleck-box"id="btn_fun_1">添加<span class="vip small-icon">标</span></button><span class="yc-icon icon-five xy-two"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>帮您一键添加深度学习广告智能云端词库关键词，可按展现指数排序，可自定义添加包含关键词。</div></span></div>', '<div class="produce"><span class="yc-icon xy-one"></span>一键删除低分词：选择平台：<select id="condition_2_1"class="sleck-box"><option>移动端</option><option>计算机</option></select>关键词质量得分，小于：<input type="text"class="reason sleck-box"id="condition_2_2"/>分<button class="button-b sleck-box"id="btn_fun_2">删除<span class="vip small-icon">标</span></button><span class="yc-icon icon-five xy-two"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>帮您自定义删除质量得分低分关键词，计算机/移动端可分别删除。</div></span></div>', '<div class="produce"><span class="yc-icon icon-two xy-one"></span>一键删除低展现词：关键词行业日均展现指数，小于：<input type="text"class="reason sleck-box"id="condition_3_1"/><button class="button-b sleck-box"id="btn_fun_3">删除<span class="vip small-icon">标</span></button><span class="yc-icon icon-five xy-two"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>根据所有关键词行业指数，帮您一键删除日均展现指数低于自定义值的关键词。</div></span></div>', '<div class="produce"><span class="yc-icon icon-nine xy-one"></span>一键调整关键词匹配方式：关键词行业日均展现指数，大于：<input type="text"class="reason sleck-box"id="condition_4_1"/>调整为精准匹配，其余调整为广泛匹配<button class="button-b sleck-box"id="btn_fun_4">调整<span class="vip small-icon">标</span></button><span class="yc-icon icon-five xy-two"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>根据所有关键词行业指数，帮您一键将计划内所有日均展现指数大于自定义值的关键词，匹配方式调整为精准匹配，其余关键词调整为广泛匹配。</div></span></div>', '<div class="produce"><span class="yc-icon icon-three xy-one"></span>一键修改出价：关键词：<select id="condition_5_1"class="sleck-box"><option>移动端</option><option>计算机</option></select>出价调整为：<select id="condition_5_2"class="sleck-box"><option>昨日行业出价</option><option>近3天行业均价</option><option>近7天行业均价</option><option>近14天行业均价</option></select>提升百分比：<select id="condition_5_3"class="sleck-box"><option>0%</option><option>10%</option><option>20%</option><option>50%</option><option>-10%</option><option>-20%</option><option>-50%</option></select><button class="button-b sleck-box"id="btn_fun_5">改价<span class="vip small-icon">标</span></button><span class="yc-icon icon-five xy-two"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>根据关键词的行业数据，一键帮您对计划内所有关键词出价调整为昨日/近三天/近七天/近十四天，行业平均出价。</div></span></div>', '<div class="produce"><span class="yc-icon icon-ten xy-one"></span>一键修改卡位出价：关键词移动端出价进入：<select id="condition_6_1"class="sleck-box"><option>首条</option><option>前三</option><option>四至六</option><option>七至十</option><option>十至十五</option><option>十六至二十</option></select>若无数据，则不修改<button class="button-b sleck-box"id="btn_fun_6">修改<span class="vip small-icon">标</span></button><span class="yc-icon icon-five xy-two"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>根据系统出价，帮您一键将计划内所有关键词，移动端出价，卡位至自选目标，若无数据则不修改。</div></span></div>', '<div class="produce"><span class="yc-icon icon-six xy-one"></span>一键添加精选人群：选择添加：<select id="condition_7_1"class="sleck-box"><option>优质人群</option><option>节日人群</option><option>同类店铺人群</option><option>付费推广/活动人群</option><option>人口属性人群</option><option>以上所有</option><option>天气人群</option></select>溢价设置：<input type="text"class="reason sleck-box"id="condition_7_2"/>（5-300）%<button class="button-b sleck-box"id="btn_fun_7">添加<span class="new small-icon">专</span></button><span class="yc-icon icon-five xy-two"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>帮您一键添加精选人群，系统推荐四组人群；天气人群单一添加，人口属性人群由性别女、男分别和风格、类目笔单价、年龄、月均消费额度进行两两组合，并且按选项命名。</div></span></div>', '<div class="produce"><span class="yc-icon icon-seven xy-one"></span>一键优化投放地域：选择指标：<select id="condition_8_1"class="sleck-box"><option>展现指数</option><option>点击率</option><option>点击转化率</option></select>排序，保留前：<input type="text"class="reason sleck-box"id="condition_8_2"/>（1-35）省份<button class="button-b sleck-box"id="btn_fun_8">调整<span class="new small-icon">专</span></button><span class="yc-icon  icon-five xy-two"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>根据计划内所有关键词行业数据，可分别按展现指数/点击率/点击转化率排序，帮您一键保留自定义数量的省份。</div></span></div>', '<div class="produce"><span class="yc-icon icon-four xy-one"></span>一键优化出价：关键词：<select id="condition_9_2"class="sleck-box"><option>今日</option><option>昨日</option><option>近三天</option><option>近一周</option></select>指标：<select id="condition_9_3"class="sleck-box"><option>展现量</option><option>点击量</option><option>点击率</option><option>转化率</option><option>投产比</option><option>花费</option></select><select id="condition_9_4"class="sleck-box"><option>大于</option><option>小于</option></select><input type="text"class="reason sleck-box"id="condition_9_5"/><select id="condition_9_6"class="sleck-box cmgl"><option>提升</option><option>降低</option></select><select id="condition_9_7"class="sleck-box cmgl"><option>10%</option><option>20%</option><option>50%</option></select><button class="button-b sleck-box"id="btn_fun_9">改价<span class="new small-icon">专</span></button><span class="yc-icon  icon-five xy-two"id="xgprice"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>帮您一键对计划内关键词实时点击率/转化率，高于/低于行业均值，进行提升/降低出价。</div></span></div>', '<div class="produce"><span class="yc-icon icon-eight xy-one"></span>一键高级优化出价：关键词：<select id="condition_10_1"class="sleck-box"><option>移动端</option><option>计算机</option></select>指标：<select id="condition_10_2"class="sleck-box"><option>点击率</option><option>点击转化率</option></select><select id="condition_10_3"class="sleck-box"><option>大于</option><option>小于</option></select>行业均值，出价：<select id="condition_10_4"class="sleck-box"><option>提升</option><option>降低</option></select><select id="condition_10_5"class="sleck-box"><option>10%</option><option>20%</option><option>50%</option></select><button class="button-b sleck-box"id="btn_fun_10">改价<span class="new small-icon">专</span></button><span class="yc-icon  icon-five xy-two"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>帮您一键对计划内关键词实时点击率/转化率，高于/低于行业均值，进行提升/降低出价。</div></span></div>', '<div class="produce"><span class="yc-icon icon-eleven xy-one"></span>一键高级删除关键词：关键词<select id="condition_11_1"class="sleck-box"><option>移动端</option><option>计算机</option></select>行业：<select id="condition_11_2"class="sleck-box"><option>昨日</option><option>前日</option><option>近一周</option></select>指标：<select id="condition_11_3"class="sleck-box"><option>展现指数</option><option>点击指数</option><option>点击率</option><option>转化率</option><option>市场均价</option></select><select id="condition_11_4"class="sleck-box"><option>大于</option><option>小于</option></select><input type="text"class="reason sleck-box"id="condition_11_5"/><button class="button-b sleck-box"id="btn_fun_11">删除<span class="new small-icon">专</span></button><span class="yc-icon icon-five xy-two"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>帮您获取每个关键词行业数据、选择展现指数、点击指数、点击率、转化率、平均点击花费、大与小于自定义数值关键词、进行一键删除（此功能适合上分、降低PPC等作用）。</div></span></div>', '<div class="produce"><span class="yc-icon icon-twelve xy-one"></span>一键添加推广创意：测图必备<button class="button-b sleck-box"id="btn_fun_12">添加<span class="new small-icon">专</span></button><span class="yc-icon icon-five xy-two"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>帮您一键加满4个直通车推广创意、创意标题由直通车推广关键词、宝贝标题、类目、属性等、去重复后、按搜索权重设置不同推广创意标题，创意图片使用宝贝1、2、3、4张主图。</div></span></div>', "</div></div>", '<div class="data-right"><div class="ad-banner"></div>', '<ul class="info-right"><div class="finture"><span>实时数据</span><span class="yc-icon icon-five xy-three"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>实时数据看板：帮您计算当前推广宝贝实时数据指标，作为关键词数据以及与行业数据看板对比，提升直通车数据多纬度对比，找到优化入口。</div></span></div><li><span>实时点击率</span>：<span id="clickPercent"class="finture-c">--%</span></li><li><span>实时收藏率：</span><span id="likePercent"class="finture-c">--%</span></li><li><span>实时转化率：</span><span id="converPercent"class="finture-c">--%</span></li><li><span>平均点击花费：</span><span id="avgClickCost"class="finture-c">￥--</span></li><li><span>实时加购率：</span><span id="cartPercent"class="finture-c">--%</span></li></ul>', '<ul class="info-right bdr-l"><div class="finture tbg"><span>行业数据</span><span class="yc-icon icon-five xy-three"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>行业数据看板：帮您计算当前推广宝贝下所有关键词行业日均情况，五大指标，帮助您提升直通车。如：平均点击率为：当前页面所有关键词在行业中的平均点击率、作为分析关键词以及计划表现指标，进行行业对比，找到优化入口。关键词表现低于行业数据则需优化，高于则重点关注。</div></span></div><li><span>平均点击率：</span><span id="avgClick"class="finture-c sdq">--%</span></li><li><span>平均点击指数：</span><span id="avgClickNum"class="finture-c">--</span></li><li><span></span>平均转化率：<span id="avgConver"class="finture-c sdq">--%</span></li><li><span>平均点击花费：</span><span id="avgCost"class="finture-c">￥--</span></li><li><span>平均展现指数：</span><span id="avgImpress"class="finture-c">--</span></li><button id="btn_fun_count"class="btn-count">一键获取行业数据</button><span class="yc-icon icon-five xy-one"><div class="show-info"><span class="poptip-arrow poptip-arrow-top"><em>◆</em><i>◆</i></span><i class="yc-icon icon-bulb"></i>点击获取次数：免费版5次/天、标准版20次/天、专业版50次/天。</div></span></ul>', "</div>"];
var loginHtml = '<div class="logtag"><form class="drt"><label>登陆名称：</label><input type="text"id="username"name="username"class="text"autofocus="autofocus"required="required"autocomplete="off"placeholder="请输入用户名/手机号"value=""/><label class="text_a"for="password">登陆密码：</label><input type="password"id="password"name="password"class="text"required="required"placeholder="请输入密码"value=""/><button class="btn_login"id="loginIn">登陆</button><a class="text_b"href="http://www.zhess.com/login/">忘记密码?</a><a class="text_b"href="http://www.zhess.com/alogin/">会员注册</a><span class="cver">#version#</span></form></div>';
var statusHtml = '<div class="usertag"><div class="ort"><p class="fl fcf cmglt mgr" id="username">会员名：#username#</p><p class=" fl fcf cmglt" id="userpower">#userpower#</p><p class="fl fcf cmglt">#leftdays#</p><button class="btn_out"id="loginOut">退出</button></div><span class="cver">#version#</span></div>';
var adHtml = '<div id="imgAd" style="text-align:center"><img src="#urlsrc#" style="CURSOR:pointer" onclick="window.open(&quot;#urllink#&quot;)"></div>';

//task options
function showSpin() {
    var spinnerOpts = {
        lines: 11,
        length: 13,
        width: 8,
        radius: 19,
        scale: .5,
        corners: .1,
        color: "#000",
        opacity: .1,
        rotate: 18,
        direction: 1,
        speed: .8,
        trail: 55,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "65%",
        left: "45%",
        shadow: false,
        hwaccel: false,
        position: "absolute"
    };
    var spinTarget = document.getElementById("layer1");
    new Spinner(spinnerOpts).spin(spinTarget)
}
//regex
function RegexItem(src, re, index) {
    try {
        var arr = re.exec(src);
        return arr[index]
    } catch (e) {}
    return null
}
function strContent(s, s1, s2) {
    if (s != null && s != "") {
        var n1 = 0;
        var n2 = 0;
        n1 = s.indexOf(s1, 0) + s1.length;
        n2 = s.indexOf(s2, n1);
        return s.substring(n1, n2)
    } else {
        return ""
    }
}
function getStorage(nkey, fn) {
    chrome.storage.local.get(nkey, function(data) {
        fn(data)
    })
}
var convertUnicode = {
    hexchars: "0123456789ABCDEF",
    okURIchars: "",
    toHex: function(n) {
        return convertUnicode.hexchars.charAt(n >> 4) + convertUnicode.hexchars.charAt(n & 15)
    },
    utf8: function(wide) {
        var c, s;
        var enc = "";
        var i = 0;
        while (i < wide.length) {
            c = wide.charCodeAt(i++);
            if (c >= 56320 && c < 57344) continue;
            if (c >= 55296 && c < 56320) {
                if (i >= wide.length) continue;
                s = wide.charCodeAt(i++);
                if (s < 56320 || c >= 56832) continue;
                c = (c - 55296 << 10) + (s - 56320) + 65536
            }
            if (c < 128) {
                enc += String.fromCharCode(c)
            } else if (c < 2048) {
                enc += String.fromCharCode(192 + (c >> 6), 128 + (c & 63))
            } else if (c < 65536) {
                enc += String.fromCharCode(224 + (c >> 12), 128 + (c >> 6 & 63), 128 + (c & 63))
            } else {
                enc += String.fromCharCode(240 + (c >> 18), 128 + (c >> 12 & 63), 128 + (c >> 6 & 63), 128 + (c & 63))
            }
        }
        return enc
    },
    encodeURI: function(s) {
        var s = convertUnicode.utf8(s);
        var c;
        var enc = "";
        for (var i = 0; i < s.length; i++) {
            if (convertUnicode.okURIchars.indexOf(s.charAt(i)) == -1) {
                enc += "%" + convertUnicode.toHex(s.charCodeAt(i))
            } else {
                enc += s.charAt(i)
            }
        }
        return enc
    }
};

function fix(num, length) {
    return ("" + num).length < length ? (new Array(length + 1).join("0") + num).slice(-length) : "" + num
}
function addDate(dadd) {
    var a = new Date().getTime();
    a = a + dadd * 24 * 60 * 60 * 1e3;
    a = new Date(a);
    return a
}
function makeDate(passdays) {
    var myDate = new Date();
    if (passdays != 0) {
        myDate = addDate(passdays)
    }
    var stringTime = "" + myDate.getFullYear() + "-" + fix(myDate.getMonth() + 1, 2) + "-" + fix(myDate.getDate(), 2);
    return stringTime
}
function timeStamp() {
    var stringTime = new Date().getTime();
    return parseInt(stringTime) / 1e3
}
function mixIt(s) {
    var t = " " + s;
    if (t.indexOf("NaN") > 0 || t.indexOf("null") > 0) {
        return "--%"
    } else {
        return s
    }
}
//get now price
var getNowPrice = {
    doing: function(funName) {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var s1 = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "campaignId=" + campaignId + "&adGroupId=" + adGroupId + "&queryWord=" + "" + "&queryType=0&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer" + encodeURIComponent(s1);
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/list.htm",
            data: dara,
            method: funName,
            other: {
                type: "sub_getNowPrice"
            },
            cb: "getNowPrice.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var tArray = jsonp.result;
        var list = new Array();
        for (var i = 0; i < tArray.length; i++) {
            var item = new Object();
            item.keywordId = tArray[i].keywordId;
            item.maxPrice = tArray[i].maxPrice;
            item.maxMobilePrice = tArray[i].maxMobilePrice;
            list.push(item)
        }
        if (list.length > 0) {
            nowPrice_array = list
        }
    }
};

//get plan info
var getPlanInfo = {
    preper: function() {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var dataStr = makeDate(0);
        var refererStr = "/campaigns/standards/adgroups/index?type=item&campaignId=" + campaignId + "&rptType=realTime&start=" + dataStr + "&end=" + dataStr;
        var dara = "campaignid=" + campaignId + "&theDate=" + dataStr + "&ids=" + adGroupId + "&traffictype=%5B1%2C2%2C4%2C5%5D&mechanism=%5B0%2C2%5D&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=";
        getPlanInfo.action(dara)
    },
    action: function(dara) {
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/rtreport/rptBpp4pAdgroupRealtimeSubwayList.htm",
            data: dara,
            other: {
                type: "sub_updataPrice"
            },
            cb: "getPlanInfo.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var tArray = jsonp.result;
        var clicknum = 0;
        var carttotal = 0;
        var favitemtotal = 0;
        var clickPercent, converPercent;
        clickPercent = converPercent = "0.0%";
        var list = new Array();
        for (var i = 0; i < tArray.length; i++) {
            var item = new Object();
            clicknum = parseFloat(tArray[i].click);
            carttotal = parseFloat(tArray[i].carttotal);
            favitemtotal = parseFloat(tArray[i].favitemtotal);
            clickPercent = tArray[i].ctr;
            converPercent = tArray[i].coverage;
            avgClickCost = tArray[i].cpc
        }
        if (clicknum > 0) {
            var cartPercent = carttotal / clicknum * 100;
            var favitemPercent = favitemtotal / clicknum * 100;
            var a = favitemPercent.toFixed(1) + "%";
            var b = cartPercent.toFixed(1) + "%";
            var c = clickPercent + "%";
            var d = converPercent + "%";
            var e = "￥" + Math.round(parseFloat(avgClickCost)) / 100;
            $("#likePercent").text(mixIt(a));
            $("#cartPercent").text(mixIt(b));
            $("#clickPercent").text(mixIt(c));
            $("#converPercent").text(mixIt(d));
            $("#avgClickCost").text(mixIt(e))
        } else {
            $("#likePercent").text("0.0%");
            $("#cartPercent").text("0.0%");
            $("#clickPercent").text("0.0%");
            $("#converPercent").text("0.0%");
            $("#avgClickCost").text("￥0.0")
        }
    }
};
// get sub info
var getSubInfo = {
    token: "",
    action: function() {
        bg.postMessage({
            act: "get",
            url: "https://subway.simba.taobao.com/bpenv/getLoginUserInfo.htm",
            other: {
                type: "sub_getSubInfo_1"
            },
            cb: "getSubInfo.work"
        })
    },
    work: function(JHtml, Obj) {
        getSubInfo.token = strContent(JHtml, '"token":"', '","');
        comm_token = getSubInfo.token;
        getSubInfo.preper()
    },
    preper: function() {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var s2 = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "campaignId=" + campaignId + "&adGroupId=" + adGroupId + "&queryWord=&queryType=0&sla=json&isAjaxRequest=true&token=" + getSubInfo.token + "&_referer=" + encodeURIComponent(s2);
        getSubInfo.action2(dara)
    },
    action2: function(dara) {
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/list.htm",
            data: dara,
            other: {
                type: "sub_getSubInfo_2"
            },
            cb: "getSubInfo.work2"
        })
    },
    work2: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var tArray = jsonp.result;
        var list = new Array();
        for (var i = 0; i < tArray.length; i++) {
            var item = new Object();
            item.keywordId = tArray[i].keywordId;
            item.normalWord = tArray[i].normalWord;
            list.push(item)
        }
        if (list.length > 0) {
            comm_list = list
        }
    }
};
// get avg data
var getAvgData = {
    avgA: 0,
    avgB: 0,
    avgC: 0,
    avgD: 0,
    avgE: 0,
    nCount: 0,
    tCount: 0,
    doing: function() {
        for (var i = 0; i < comm_list.length; i++) {
            getAvgData.action(comm_list[i]);
            getAvgData.nCount++
        }
    },
    action: function(item) {
        var now_day = makeDate(-1);
        var pass_day = makeDate(-7);
        var referStr = "/tools/insight/queryresult?kws=" + item.normalWord + "&tab=tabs-region&start=&end=";
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        var url = "https://subway.simba.taobao.com/report/getNetworkPerspective.htm?bidwordstr=" + encodeURIComponent(item.normalWord) + "&startDate=" + pass_day + "&endDate=" + now_day + "&perspectiveType=2";
        bg.postMessage({
            act: "post",
            url: url,
            data: dara,
            other: {
                type: "sub_getAvgData_1",
                keyId: item.keywordId
            },
            cb: "getAvgData.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var new_avgprice = 0;
        var tArray = jsonp.result;
        var a, b, c, d, e;
        a = b = c = d = e = 0;
        if (tArray.length == 2) {
            a += isNaN(parseInt(tArray[1].ctr)) ? 0 : parseInt(tArray[1].ctr);
            b += isNaN(parseInt(tArray[1].click)) ? 0 : parseInt(tArray[1].click);
            c += isNaN(parseInt(tArray[1].cvr)) ? 0 : parseInt(tArray[1].cvr);
            d += isNaN(parseInt(tArray[1].avgPrice)) ? 0 : parseInt(tArray[1].avgPrice);
            e += isNaN(parseInt(tArray[1].impression)) ? 0 : parseInt(tArray[1].impression)
        }
        getAvgData.tCount++;
        getAvgData.out(a, b, c, d, e)
    },
    out: function(a, b, c, d, e) {
        var k = comm_list.length;
        getAvgData.avgA += a / k / 100;
        getAvgData.avgB += b / k / 7;
        getAvgData.avgC += c / k / 100;
        getAvgData.avgD += d / k / 100;
        getAvgData.avgE += e / k / 7;
        $("#avgClick").text(getAvgData.avgA.toFixed(1) + "%");
        $("#avgClickNum").text(getAvgData.avgB.toFixed(0));
        $("#avgConver").text(getAvgData.avgC.toFixed(1) + "%");
        $("#avgCost").text("￥" + getAvgData.avgD.toFixed(2));
        $("#avgImpress").text(getAvgData.avgE.toFixed(0));
        if (getAvgData.tCount == getAvgData.nCount && getAvgData.nCount != 0) {
            getIndustryData.doing(getAvgData.avgA.toFixed(1), getAvgData.avgB.toFixed(0), getAvgData.avgC.toFixed(1), getAvgData.avgD.toFixed(2), getAvgData.avgE.toFixed(0));
            getAvgData.avgA = getAvgData.avgB = getAvgData.avgC = getAvgData.avgD = getAvgData.avgE = 0
        }
    }
};

//reviseOffer
var reviseOffer = {
    doing: function(list) {
        daypass = day_type;
        for (var i = 0; i < comm_list.length; i++) {
            if (daypass == 0) {
                reviseOffer.task(comm_list[i])
            } else {
                reviseOffer.action(daypass, comm_list[i])
            }
        }
    },
    action: function(daypass, item) {
        var now_day = makeDate(0);
        var pass_day = makeDate(daypass);
        var referStr = "/tools/insight/queryresult?kws=" + item.normalWord + "&tab=tabs-bidwords&start=" + pass_day + "&end=" + now_day;
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        var t_url = "https://subway.simba.taobao.com/report/getMarketAnalysis.htm?bidwordstr=" + encodeURIComponent('["' + item.normalWord + '"]') + "&startDate=" + pass_day + "&endDate=" + now_day;
        bg.postMessage({
            act: "post",
            url: t_url,
            data: dara,
            other: {
                type: "sub_reviseOffer_1",
                keyId: item.keywordId
            },
            cb: "reviseOffer.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var new_price = 0;
        try {
            var tArray = jsonp.result;
            var bArray = tArray[0].inRecordBaseDTOList;
            var count_price = 0;
            for (var i = 0; i < bArray.length; i++) {
                count_price += parseFloat(bArray[i].avgPrice)
            }
            new_price = Math.round(count_price / bArray.length * price_percent)
        } catch (e) {}
        if (new_price > 0) {
            reviseOffer.preper(Obj.keyId, new_price)
        }
    },
    task: function(item) {
        var new_price = 0;
        for (var i = 0; i < nowPrice_array.length; i++) {
            if (nowPrice_array[i].keywordId == item.keywordId) {
                if (which_type == true) {
                    new_price = parseFloat(nowPrice_array[i].maxMobilePrice)
                } else {
                    new_price = parseFloat(nowPrice_array[i].maxPrice)
                }
            }
        }
        if (price_percent != 1) {
            new_price = Math.round(new_price * price_percent)
        }
        reviseOffer.preper(item.keywordId, new_price)
    },
    preper: function(keyid, newprice) {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var referStr = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var typeStr = "pc";
        if (which_type == true) {
            typeStr = "mobile"
        }
        var dara = "adGroupId=" + adGroupId + "&bidwordIds=" + keyid + "&type=" + typeStr + "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/tool/bidword/getPriceTool3.htm",
            data: dara,
            other: {
                type: "sub_reviseOffer_2",
                keyId: keyid,
                price: newprice
            },
            cb: "reviseOffer.deal"
        })
    },
    deal: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var analy_id = jsonp.analyseTraceId;
        var keyid = Obj.keyId;
        var price = Obj.price;
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var keyStr = '[{"keywordId":"' + keyid + '","maxMobilePrice":' + price + ',"mobileIsDefaultPrice":0}]';
        if (which_type == false) {
            keyStr = '[{"keywordId":"' + keyid + '","maxPrice":' + price + ',"isDefaultPrice":0}]'
        }
        var referStr = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "keywords=" + encodeURIComponent(keyStr) + "&analyseTraceId=" + analy_id + "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/updatePrice.htm",
            data: dara,
            other: {
                type: "sub_reviseOffer_3"
            },
            cb: "reviseOffer.job"
        })
    },
    job: function(JHtml, Obj) {
        setTimeout("myrefresh()", 500)
    }
};

//updata Price by Bit
var updataPricebyBit = {
    priceList: new Array(),
    keyType: 1,
    isBigger: true,
    doing: function(keytype, isbigger) {
        updataPricebyBit.keyType = keytype;
        updataPricebyBit.isBigger = isbigger;
        var now_day = makeDate(day_End);
        var pass_day = makeDate(day_Start);
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var dara, posturl;
        if (day_End == day_Start && day_Start == 0) {
            var refererWord = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId + "&rptType=realTime&start=" + pass_day + "&end=" + now_day;
            dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(refererWord);
            posturl = "https://subway.simba.taobao.com/rtreport/rptBpp4pBidwordRealtimeSubwayList.htm?campaignid=" + campaignId + "&adgroupid=" + adGroupId + "&theDate=" + now_day + "&traffictype=1%2C2%2C4%2C5"
        } else {
            var refererWord = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId + "&rptType=history&start=" + pass_day + "&end=" + now_day;
            dara = "templateId=rptBpp4pBidwordSubwayList&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(refererWord);
            posturl = "https://subway.simba.taobao.com/report/commondList.htm?campaignid=" + campaignId + "&adgroupid=" + adGroupId + "&startDate=" + pass_day + "&endDate=" + now_day + "&isshop=0&traffictype=1%2C2%2C4%2C5"
        }
        bg.postMessage({
            act: "post",
            url: posturl,
            data: dara,
            other: {
                type: "sub_updataPricebyBit_1"
            },
            cb: "updataPricebyBit.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var new_avgprice = 0;
        var tArray = jsonp.result;
        if (tArray.length == 0) {
            for (var k = 0; k < nowPrice_array.length; k++) {
                if (which_type == true) {
                    new_avgprice = parseFloat(nowPrice_array[k].maxMobilePrice)
                } else {
                    new_avgprice = parseFloat(nowPrice_array[k].maxPrice)
                }
                new_avgprice = Math.round(new_avgprice * price_percent);
                updataPricebyBit.preper(nowPrice_array[k].keywordId, new_avgprice)
            }
        } else {
            for (var i = 0; i < nowPrice_array.length; i++) {
                var keyPart = 0;
                if (which_type == true) {
                    new_avgprice = parseFloat(nowPrice_array[i].maxMobilePrice)
                } else {
                    new_avgprice = parseFloat(nowPrice_array[i].maxPrice)
                }
                for (var k = 0; k < tArray.length; k++) {
                    if (nowPrice_array[i].keywordId == tArray[k].bidwordid) {
                        if (updataPricebyBit.keyType == 1) {
                            keyPart = parseFloat(tArray[k].impression)
                        } else if (updataPricebyBit.keyType == 2) {
                            keyPart = parseFloat(tArray[k].click)
                        } else if (updataPricebyBit.keyType == 3) {
                            keyPart = parseFloat(tArray[k].ctr)
                        } else if (updataPricebyBit.keyType == 4) {
                            keyPart = parseFloat(tArray[k].coverage)
                        } else if (updataPricebyBit.keyType == 5) {
                            keyPart = parseFloat(tArray[k].roi)
                        } else if (updataPricebyBit.keyType == 6) {
                            keyPart = parseFloat(tArray[k].cost)
                        }
                    }
                }
                if (isNaN(keyPart)) {
                    keyPart = 0
                }
                if (updataPricebyBit.isBigger) {
                    if (keyPart > commen_del_max) {
                        new_avgprice = Math.round(new_avgprice * price_percent);
                        updataPricebyBit.preper(nowPrice_array[i].keywordId, new_avgprice)
                    }
                } else {
                    if (keyPart < commen_del_max) {
                        new_avgprice = Math.round(new_avgprice * price_percent);
                        updataPricebyBit.preper(nowPrice_array[i].keywordId, new_avgprice)
                    }
                }
            }
        }
    },
    preper: function(keyid, new_avgprice) {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var s1 = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "adGroupId=" + adGroupId + "&bidwordIds=" + keyid + "&type=mobile&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(s1);
        updataPricebyBit.action2(dara, keyid, new_avgprice)
    },
    action2: function(dara, keyid, new_avgprice) {
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/tool/bidword/getPriceStrategyNewDTO.htm",
            data: dara,
            other: {
                type: "sub_updataPricebyBit_2",
                keyId: keyid,
                new_avgPrice: new_avgprice
            },
            cb: "updataPricebyBit.work2"
        })
    },
    work2: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var analy_id = jsonp.analyseTraceId;
        var keyid = Obj.keyId;
        var new_avgprices = Obj.new_avgPrice;
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var s1 = '[{"keywordId":"' + keyid + '","maxMobilePrice":' + new_avgprices + ',"mobileIsDefaultPrice":0}]';
        if (which_type == false) {
            s1 = '[{"keywordId":"' + keyid + '","maxPrice":' + new_avgprices + ',"isDefaultPrice":0}]'
        }
        var s2 = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "keywords=" + s1 + "&analyseTraceId=" + analy_id + "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(s2);
        updataPricebyBit.action3(dara)
    },
    action3: function(dara) {
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/updatePrice.htm",
            data: dara,
            other: {
                type: "sub_updataPricebyBit_3"
            },
            cb: "updataPricebyBit.work3"
        })
    },
    work3: function(JHtml, Obj) {
        setTimeout("myrefresh()", 500)
    }
};

//find element
function findElem(arrayToSearch, attr, val) {
    for (var i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i][attr] == val) {
            return i
        }
    }
    return -1
}
var Ace_Type = 0;
var Ace_Times = 1;
var Ace_Compare = true;

//updata Price by Ace
var updataPricebyAce = {
    doing: function() {
        var the_day = makeDate(0);
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var refererWord = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId + "&rptType=realTime&start=" + the_day + "&end=" + the_day;
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(refererWord);
        var posturl = "https://subway.simba.taobao.com/rtreport/rptBpp4pBidwordRealtimeSubwayList.htm?campaignid=" + campaignId + "&adgroupid=" + adGroupId + "&theDate=" + the_day + "&traffictype=1%2C2%2C4%2C5";
        bg.postMessage({
            act: "post",
            url: posturl,
            data: dara,
            other: {
                type: "sub_updataPricebyAce_1"
            },
            cb: "updataPricebyAce.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var new_avgprice = 0;
        var tArray = jsonp.result;
        if (tArray.length == 0) {} else {
            for (var i = 1; i < tArray.length; i++) {
                try {
                    var obj = new Object();
                    var item = tArray[i];
                    obj.bid = item.bidwordid;
                    obj.ctr = parseFloat(item.ctr == null ? 0 : item.ctr);
                    obj.cvr = parseFloat(item.coverage == null ? 0 : item.coverage);
                    updataPricebyAce.task(obj)
                } catch (e) {}
            }
        }
    },
    task: function(item) {
        var index = findElem(comm_list, "keywordId", item.bid);
        var normalWord = comm_list[index].normalWord;
        var number = 0;
        if (Ace_Type == 0) {
            number = item.ctr
        } else if (Ace_Type == 1) {
            number = item.cvr
        }
        var now_day = makeDate(-1);
        var pass_day = makeDate(-7);
        var referStr = "/tools/insight/queryresult?kws=" + normalWord + "&tab=tabs-bidwords&start=" + pass_day + "&end=" + now_day;
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        var t_url = "https://subway.simba.taobao.com/report/getMarketAnalysis.htm?bidwordstr=" + encodeURIComponent('["' + normalWord + '"]') + "&startDate=" + pass_day + "&endDate=" + now_day;
        bg.postMessage({
            act: "post",
            url: t_url,
            data: dara,
            other: {
                type: "sub_updataPricebyAce_2",
                keyId: item.bid,
                score: number
            },
            cb: "updataPricebyAce.job"
        })
    },
    job: function(JHtml, Obj) {
        var keyid = Obj.keyId;
        var jsonp = eval("(" + JHtml + ")");
        try {
            var tArray = jsonp.result;
            var bArray = tArray[0].inRecordBaseDTOList;
            var score = 0;
            for (var i = 0; i < bArray.length; i++) {
                if (Ace_Type == 0) {
                    score += parseFloat(bArray[i].ctr)
                } else if (Ace_Type == 1) {
                    score += parseFloat(bArray[i].cvr)
                }
            }
            score = score / bArray.length / 100;
            var qscore = Obj.score;
            var query_type = true;
            if (Ace_Compare) {
                if (qscore > score) {
                    query_type = true
                } else {
                    query_type = false
                }
            } else {
                if (qscore < score) {
                    query_type = true
                } else {
                    query_type = false
                }
            }
            if (query_type) {
                var price = 0;
                if (which_type == true) {
                    var index = findElem(nowPrice_array, "keywordId", keyid);
                    price = nowPrice_array[index].maxMobilePrice
                } else {
                    var index = findElem(nowPrice_array, "keywordId", keyid);
                    price = nowPrice_array[index].maxPrice
                }
                updataPricebyAce.preper(keyid, parseFloat(price) * Ace_Times)
            }
        } catch (e) {}
    },
    preper: function(keyid, new_avgprice) {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var s1 = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "adGroupId=" + adGroupId + "&bidwordIds=" + keyid + "&type=mobile&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(s1);
        updataPricebyAce.action2(dara, keyid, new_avgprice)
    },
    action2: function(dara, keyid, new_avgprice) {
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/tool/bidword/getPriceStrategyNewDTO.htm",
            data: dara,
            other: {
                type: "sub_updataPricebyAce_3",
                keyId: keyid,
                new_avgPrice: new_avgprice
            },
            cb: "updataPricebyAce.work2"
        })
    },
    work2: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var analy_id = jsonp.analyseTraceId;
        var keyid = Obj.keyId;
        var new_avgprices = Obj.new_avgPrice;
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var s1 = '[{"keywordId":"' + keyid + '","maxMobilePrice":' + new_avgprices + ',"mobileIsDefaultPrice":0}]';
        if (which_type == false) {
            s1 = '[{"keywordId":"' + keyid + '","maxPrice":' + new_avgprices + ',"isDefaultPrice":0}]'
        }
        var s2 = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "keywords=" + s1 + "&analyseTraceId=" + analy_id + "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(s2);
        updataPricebyAce.action3(dara)
    },
    action3: function(dara) {
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/updatePrice.htm",
            data: dara,
            other: {
                type: "sub_updataPricebyAce_4"
            },
            cb: "updataPricebyAce.work3"
        })
    },
    work3: function(JHtml, Obj) {
        setTimeout("myrefresh()", 500)
    }
};
//detele Price
var detelPrice = {
    ncount: 0,
    doing: function() {
        for (var i = 0; i < comm_list.length; i++) {
            detelPrice.action(comm_list[i])
        }
    },
    action: function(item) {
        var referStr = "/tools/insight/queryresult?kws=" + item.normalWord + "&tab=tabs-bidwords";
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        var now_day = makeDate(-1);
        var pass_day = makeDate(-7);
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/report/getMarketAnalysis.htm?bidwordstr=" + encodeURIComponent('["' + item.normalWord + '"]') + "&startDate=" + pass_day + "&endDate=" + now_day,
            data: dara,
            other: {
                type: "detelPrice_2",
                keyId: item.keywordId
            },
            cb: "detelPrice.work1"
        })
    },
    work1: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var tArray = jsonp.result;
        var count_impression = 0;
        var bArray = tArray[0].inRecordBaseDTOList;
        if (bArray.length == 0) {
            detelPrice.preper(Obj.keyId)
        } else {
            for (var i = 0; i < bArray.length; i++) {
                count_impression += parseInt(bArray[i].impression)
            }
            if (count_impression < commen_del_max * 7) {
                detelPrice.preper(Obj.keyId)
            }
        }
    },
    preper: function(keyid) {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var s1 = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var s3 = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "campaignId=" + campaignId + "&keywordIds=" + encodeURIComponent('["' + keyid + '"]') + "&_op_context_action_id=004003003&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(s3);
        detelPrice.action2(dara)
    },
    action2: function(dara) {
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/delete.htm",
            data: dara,
            other: {
                type: "detelPrice_3"
            },
            cb: "detelPrice.work2"
        })
    },
    work2: function(JHtml, Obj) {
        setTimeout("myrefresh()", 500)
    }
};
//delete price Quality 
var detelPriceByQuality = {
    doing: function() {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var s1 = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId" + campaignId + "&adGroupId=" + adGroupId;
        var s2 = "";
        for (var i = 0; i < comm_list.length; i++) {
            if (i == comm_list.length - 1) {
                s2 += '"' + comm_list[i].keywordId + '"'
            } else {
                s2 += '"' + comm_list[i].keywordId + '",'
            }
        }
        s2 = "[" + s2 + "]";
        var dara = "adGroupId=" + adGroupId + "&bidwordIds=" + encodeURIComponent(s2) + "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(s1);
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/tool/adgroup/newscoreSplit.htm",
            data: dara,
            other: {
                type: "detelPriceByQuality_1"
            },
            cb: "detelPriceByQuality.work1"
        })
    },
    work1: function(JHtml) {
        var jsonp = eval("(" + JHtml + ")");
        var tArray = jsonp.result;
        var maxnum = parseInt(commen_del_max);
        var ncount = 0;
        for (var i = 0; i < tArray.length; i++) {
            var quality_score_pc = parseInt(tArray[i].qscore);
            var quality_score_mobile = parseInt(tArray[i].wirelessQscore);
            if (which_type == true) {
                if (quality_score_mobile < maxnum) {
                    detelPriceByQuality.preper(tArray[i].keywordId);
                    ncount++
                }
            } else {
                if (quality_score_pc < maxnum) {
                    detelPriceByQuality.preper(tArray[i].keywordId);
                    ncount++
                }
            }
        }
        if (ncount == 0) {
            alert("深度学习广告提醒您：没有发现需要删除的数据。")
        }
    },
    preper: function(keyid) {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var s1 = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "campaignId=" + campaignId + "&keywordIds=" + encodeURIComponent('["' + keyid + '"]') + "&_op_context_action_id=004003003&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(s1);
        detelPriceByQuality.action2(dara)
    },
    action2: function(dara) {
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/delete.htm",
            data: dara,
            other: {
                type: "detelPriceByQuality_2"
            },
            cb: "detelPriceByQuality.work2"
        })
    },
    work2: function(JHtml, Obj) {
        setTimeout("myrefresh()", 500)
    }
};
//delete word
var deleteWord = {
    nCount: 0,
    tCount: 0,
    dayStart: 0,
    dayEnd: 0,
    keyType: 1,
    isBigger: true,
    doing: function(d1, d2, kt, ib) {
        deleteWord.dayStart = d1;
        deleteWord.dayEnd = d2;
        deleteWord.keyType = kt;
        deleteWord.isBigger = ib;
        for (var i = 0; i < comm_list.length; i++) {
            deleteWord.action(comm_list[i]);
            deleteWord.nCount++
        }
    },
    action: function(item) {
        var now_day = makeDate(deleteWord.dayStart);
        var pass_day = makeDate(deleteWord.dayEnd);
        var referStr = "/tools/insight/queryresult?kws=" + item.normalWord + "&tab=tabs-region&start=&end=";
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        var url = "https://subway.simba.taobao.com/report/getNetworkPerspective.htm?bidwordstr=" + encodeURIComponent(item.normalWord) + "&startDate=" + pass_day + "&endDate=" + now_day + "&perspectiveType=2";
        bg.postMessage({
            act: "post",
            url: url,
            data: dara,
            other: {
                type: "sub_deleteWord_1",
                keyId: item.keywordId
            },
            cb: "deleteWord.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var tArray = jsonp.result;
        var keyid = Obj.keyId;
        if (tArray.length == 0) {
            if (!deleteWord.isBigger) {
                deleteWord.preper(Obj.keyId)
            }
        } else {
            var keyPart = 0;
            var forumnum = 0;
            if (which_type == true) {
                forumnum = 1
            }
            if (tArray.length == 1) {
                if (forumnum == 1) {
                    keyPart = 0
                } else {
                    if (deleteWord.keyType == 1) {
                        keyPart = parseFloat(tArray[0].impression)
                    } else if (deleteWord.keyType == 2) {
                        keyPart = parseFloat(tArray[0].click)
                    } else if (deleteWord.keyType == 3) {
                        keyPart = parseFloat(tArray[0].ctr) / 100
                    } else if (deleteWord.keyType == 4) {
                        keyPart = parseFloat(tArray[0].cvr) / 100
                    } else if (deleteWord.keyType == 5) {
                        keyPart = parseFloat(tArray[0].avgPrice) / 100
                    }
                }
            } else {
                if (deleteWord.keyType == 1) {
                    keyPart = parseFloat(tArray[forumnum].impression)
                } else if (deleteWord.keyType == 2) {
                    keyPart = parseFloat(tArray[forumnum].click)
                } else if (deleteWord.keyType == 3) {
                    keyPart = parseFloat(tArray[forumnum].ctr) / 100
                } else if (deleteWord.keyType == 4) {
                    keyPart = parseFloat(tArray[forumnum].cvr) / 100
                } else if (deleteWord.keyType == 5) {
                    keyPart = parseFloat(tArray[forumnum].avgPrice) / 100
                }
            }
            if (deleteWord.isBigger) {
                if (keyPart > commen_del_max) {
                    deleteWord.preper(Obj.keyId)
                }
            } else {
                if (keyPart < commen_del_max) {
                    deleteWord.preper(Obj.keyId)
                }
            }
        }
        deleteWord.tCount++;
        if (deleteWord.tCount == deleteWord.nCount && deleteWord.nCount != 0) {
            setTimeout("myrefresh()", 1e3)
        }
    },
    preper: function(keyid) {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var s1 = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "campaignId=" + campaignId + "&keywordIds=" + encodeURIComponent('["' + keyid + '"]') + "&_op_context_action_id=004003003&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(s1);
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/delete.htm",
            data: dara,
            other: {
                type: "sub_deleteWord_2"
            },
            cb: "deleteWord.work2"
        })
    },
    work2: function(JHtml) {}
};

var precisionGuided = {
    doing: function() {
        for (var i = 0; i < comm_list.length; i++) {
            precisionGuided.action(comm_list[i])
        }
    },
    action: function(item) {
        var s1 = "/tools/insight/queryresult?kws=" + item.normalWord + "&tab=tabs-bidwords";
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(s1);
        var now_day = makeDate(-1);
        var pass_day = makeDate(-7);
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/report/getMarketAnalysis.htm?bidwordstr=" + encodeURIComponent('["' + item.normalWord + '"]') + "&startDate=" + pass_day + "&endDate=" + now_day,
            data: dara,
            other: {
                type: "precisionGuided1",
                keyId: item.keywordId
            },
            cb: "precisionGuided.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var tArray = jsonp.result;
        var count_impression = 0;
        var bArray = tArray[0].inRecordBaseDTOList;
        if (bArray.length > 0) {
            for (var i = 0; i < bArray.length; i++) {
                count_impression += parseInt(bArray[i].impression)
            }
            if (count_impression > commen_del_max * bArray.length) {
                precisionGuided.preper(Obj.keyId, true)
            } else {
                precisionGuided.preper(Obj.keyId, false)
            }
        }
    },
    preper: function(keyid, istype) {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var keyStr = '[{"keywordId":"' + keyid + '","matchScope":' + (istype ? 1 : 4) + "}]";
        var referStr = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "keywords=" + encodeURIComponent(keyStr) + "&_op_context_action_id=004002005&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/updateMatch.htm",
            data: dara,
            other: {
                type: "precisionGuided2"
            },
            cb: "precisionGuided.work2"
        })
    },
    work2: function(JHtml, Obj) {
        setTimeout("myrefresh()", 500)
    }
};
var query_words = new Array();
// add word
var addWord = {
    HostUrl: ccy_host,
    ready: function(queryWord, sortby) {
        var queryUrl = addWord.HostUrl + "adapi/keywords?text=" + encodeURIComponent(queryWord);
        bg.postMessage({
            act: "get",
            url: queryUrl,
            other: {
                type: "sub_dictWord",
                word: queryWord,
                sort: sortby
            },
            cb: "addWord.doing"
        })
    },
    doing: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        query_words = jsonp.words;
        var queryWord = Obj.word;
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var referStr = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        var queryUrl = "https://subway.simba.taobao.com/bidword/tool/adgroup/relative.htm?pageSize=800&wordPackage=48&adGroupId=" + adGroupId + "&queryWord=" + encodeURIComponent(queryWord) + "&orderBy=3&productId=101001005";
        bg.postMessage({
            act: "post",
            url: queryUrl,
            data: dara,
            other: {
                type: "sub_addWord_1",
                sort: Obj.sort
            },
            cb: "addWord.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var my_analyseTraceId = jsonp.analyseTraceId;
        var tArray = jsonp.result;
        var temp_list = new Array();
        var temp_length = 0;
        for (var i = 0; i < tArray.length; i++) {
            var str = tArray[i].word;
            var ncount = 0;
            for (var n = 0; n < query_words.length; n++) {
                if (str.indexOf(query_words[n]) >= 0) {
                    ncount++
                }
            }
            if (ncount > (query_words.length == 1 ? 0 : 1)) {
                if (tArray[i].pertinence >= my_pertinence) {
                    temp_list.push(tArray[i])
                }
            }
        }
        if (Obj.sort == "pv") {
            temp_list.sort(function(a, b) {
                return b.pv - a.pv
            })
        } else if (Obj.sort == "ctr") {
            temp_list.sort(function(a, b) {
                return b.ctr - a.ctr
            })
        } else if (Obj.sort == "cvr") {
            temp_list.sort(function(a, b) {
                return b.cvr - a.cvr
            })
        }
        temp_length = temp_list.length > 200 ? 200 : temp_list.length;
        addWord.task(temp_list.slice(0, temp_length), my_analyseTraceId)
    },
    task: function(addlist, my_analyseTraceId) {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var s1 = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var bidwordStr = "";
        var keywordStr = "";
        var contextData = "";
        for (var i = 0; i < addlist.length; i++) {
            if (i == addlist.length - 1) {
                bidwordStr += addlist[i].word + "~^)(2"
            } else {
                bidwordStr += addlist[i].word + "~^)(2_#}{"
            }
            var tmpStr_1 = '{"word":"' + addlist[i].word + '","matchScope":4,"isDefaultPrice":1,"maxPrice":"0"}';
            keywordStr += tmpStr_1;
            var tmpStr_2 = '{"adgroup_id":"' + adGroupId + '","original":"' + addlist[i].word + '","pack":{"source":"TJ","platform":16,"tags":[]},"algo_v":1,"price_opt":{"opt":"mr"}}';
            contextData += tmpStr_2;
            if (addlist.length > 1 && i < addlist.length - 1) {
                keywordStr += ",";
                contextData += ","
            }
        }
        keywordStr = "[" + keywordStr + "]";
        contextData = "[" + contextData + "]";
        var dara = "logsBidwordStr=" + encodeURIComponent(bidwordStr) + "&adGroupId=" + adGroupId + "&keywords=" + encodeURIComponent(keywordStr) + "&analyseTraceId=" + my_analyseTraceId + "&_op_context_action_id=004001002&_op_context_data=" + encodeURIComponent(contextData) + "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(s1);
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/add.htm",
            data: dara,
            other: {
                type: "sub_addWord_3"
            },
            cb: "addWord.work6"
        })
    },
    work6: function(JHtml, Obj) {
        setTimeout("myrefresh()", 500)
    }
};
//add withoutWord
var addWordWithoutWord = {
    ready: function(sortby) {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var referStr = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        var queryUrl = "https://subway.simba.taobao.com/bidword/tool/adgroup/recommend.htm?wordPackage=16&adGroupId=" + adGroupId + "&orderBy=3&platForm=1&pageSize=800&productId=101001005";
        bg.postMessage({
            act: "post",
            url: queryUrl,
            data: dara,
            other: {
                type: "sub_addWordWithoutWord_1",
                sort: sortby
            },
            cb: "addWordWithoutWord.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var my_analyseTraceId = jsonp.analyseTraceId;
        var tArray = jsonp.result;
        var temp_list = new Array();
        var temp_length = 0;
        if (my_pertinence >= 4) {
            for (var i = 0; i < tArray.length; i++) {
                if (tArray[i].pertinence >= my_pertinence) {
                    temp_list.push(tArray[i])
                }
            }
        }
        if (Obj.sort == "pv") {
            temp_list.sort(function(a, b) {
                return b.pv - a.pv
            })
        } else if (Obj.sort == "ctr") {
            temp_list.sort(function(a, b) {
                return b.ctr - a.ctr
            })
        } else if (Obj.sort == "cvr") {
            temp_list.sort(function(a, b) {
                return b.cvr - a.cvr
            })
        }
        temp_length = temp_list.length > 200 ? 200 : temp_list.length;
        addWordWithoutWord.task(temp_list.slice(0, temp_length), my_analyseTraceId)
    },
    task: function(addlist, my_analyseTraceId) {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var s1 = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var bidwordStr = "";
        var keywordStr = "";
        var contextData = "";
        for (var i = 0; i < addlist.length; i++) {
            if (i == addlist.length - 1) {
                bidwordStr += addlist[i].word + "~^)(2"
            } else {
                bidwordStr += addlist[i].word + "~^)(2_#}{"
            }
            var tmpStr_1 = '{"word":"' + addlist[i].word + '","matchScope":4,"isDefaultPrice":1,"maxPrice":"0"}';
            keywordStr += tmpStr_1;
            var tmpStr_2 = '{"adgroup_id":"' + adGroupId + '","original":"' + addlist[i].word + '","pack":{"source":"TJ","platform":16,"tags":[]},"algo_v":1,"price_opt":{"opt":"mr"}}';
            contextData += tmpStr_2;
            if (addlist.length > 1 && i < addlist.length - 1) {
                keywordStr += ",";
                contextData += ","
            }
        }
        keywordStr = "[" + keywordStr + "]";
        contextData = "[" + contextData + "]";
        var dara = "logsBidwordStr=" + encodeURIComponent(bidwordStr) + "&adGroupId=" + adGroupId + "&keywords=" + encodeURIComponent(keywordStr) + "&analyseTraceId=" + my_analyseTraceId + "&_op_context_action_id=004001002&_op_context_data=" + encodeURIComponent(contextData) + "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(s1);
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/add.htm",
            data: dara,
            other: {
                type: "sub_addWordWithoutWord_3"
            },
            cb: "addWordWithoutWord.work6"
        })
    },
    work6: function(JHtml, Obj) {}
};

var addGroup = {
    doing: function(crowdtype) {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var referStr = "/campaigns/standards/adgroups/items/detail?tab=prime-crowd&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        addGroup.action(dara, campaignId, adGroupId, crowdtype)
    },
    action: function(dara, cid, gid, crowdtype) {
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/crowdTemplate/getLayoutExt.htm?bizType=1&productId=101001005&crowdType=" + crowdtype + "&adgroupId=" + gid,
            data: dara,
            other: {
                campaignId: cid,
                groupId: gid,
                type: "sub_addGroup_1"
            },
            cb: "addGroup.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var list = new Array();
        try {
            var Result = jsonp.result;
            var DimDTOs = Result[0].dimDTOs;
            var TagOptions = DimDTOs[0].tagOptions;
            var TemplateId = Result[0].id;
            var list = new Array();
            for (var i = 0; i < TagOptions.length; i++) {
                var item = new Object();
                item.tempId = TemplateId;
                item.dimId = TagOptions[i].dimId;
                item.groupId = TagOptions[i].optionGroupId;
                item.tagId = TagOptions[i].tagId;
                item.tagName = TagOptions[i].tagName;
                list.push(item)
            }
        } catch (e) {}
        if (list.length > 0) {
            var makeupWord = "";
            var multiple = comm_multiple;
            for (var i = 0; i < list.length; i++) {
                var str = '{"crowdDTO":{"templateId":"' + item.tempId + '","name":"' + list[i].tagName + '","tagList":[{"dimId":"' + list[i].dimId + '","tagId":"' + list[i].tagId + '","tagName":"' + list[i].tagName + '","optionGroupId":"' + list[i].groupId + '"}]},"isDefaultPrice":0,"discount":' + multiple + "}";
                if (i == list.length - 1) {
                    makeupWord += str
                } else {
                    makeupWord += str + ","
                }
            }
            makeupWord = "[" + makeupWord + "]";
            var adgroupIdList = '["' + Obj.groupId + '"]';
            var referStr = "/campaigns/standards/adgroups/items/detail?tab=prime-crowd&campaignId=" + Obj.campaignId + "&adGroupId=" + Obj.groupId;
            var dara = "productId=101001005&bizType=1&adgroupId=" + Obj.groupId + "&targetings=" + encodeURIComponent(makeupWord) + "&adgroupIdList=" + encodeURIComponent(adgroupIdList) + "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
            addGroup.action2(dara)
        }
    },
    action2: function(dara) {
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/adgroupTargeting/addBatch.htm",
            data: dara,
            other: {
                type: "sub_addGroup_2"
            },
            cb: "addGroup.work2"
        })
    },
    work2: function(JHtml, Obj) {}
};
var time_range = function(beginTime, endTime) {
        var date = new Date();
        var nowTime = date.getHours() + ":" + date.getMinutes();
        var strb = beginTime.split(":");
        if (strb.length != 2) {
            return false
        }
        var stre = endTime.split(":");
        if (stre.length != 2) {
            return false
        }
        var strn = nowTime.split(":");
        if (stre.length != 2) {
            return false
        }
        var b = new Date();
        var e = new Date();
        var n = new Date();
        b.setHours(strb[0]);
        b.setMinutes(strb[1]);
        e.setHours(stre[0]);
        e.setMinutes(stre[1]);
        n.setHours(strn[0]);
        n.setMinutes(strn[1]);
        if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
            return true
        } else {
            return false
        }
    };
var day_index = function() {
        var date = new Date();
        var index = "6012345".charAt(new Date().getDay());
        return parseInt(index)
    };

var offer_type = "";

var updataPriceByTif = {
    doing: function() {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var url_tmp = "https://subway.simba.taobao.com/schedule/getSetting.htm?campaignId=" + campaignId;
        var referStr = "/campaigns/standards/adgroups/index?type=item&campaignId=" + campaignId;
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        bg.postMessage({
            act: "post",
            url: url_tmp,
            data: dara,
            other: {
                type: "sub_updataPriceByTif_1"
            },
            cb: "updataPriceByTif.work"
        })
    },
    work: function(JHtml) {
        var jsonp = eval("(" + JHtml + ")");
        var list = jsonp.result;
        var schedule = list.schedule;
        var dayArray = schedule.split(";");
        var timeArray = dayArray[day_index()].split(",");
        var prcent = 100;
        for (var i = 0; i < timeArray.length; i++) {
            var s = timeArray[i].substring(0, timeArray[i].lastIndexOf(":"));
            var p = timeArray[i].substring(timeArray[i].lastIndexOf(":") + 1, timeArray[i].length + 1);
            var e = s.split("-");
            if (time_range(e[0], e[1])) {
                prcent = parseInt(p);
                break
            }
        }
        for (var i = 0; i < comm_list.length; i++) {
            updataPriceByTif.reaction(prcent, comm_list[i].keywordId)
        }
    },
    reaction: function(prcent, keyid) {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var referStr = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var typeStr = "mobile";
        var dara = "adGroupId=" + adGroupId + "&bidwordIds=" + keyid + "&type=" + typeStr + "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/bidword/tool/bidword/getPriceTool3.htm",
            data: dara,
            other: {
                type: "sub_updataPriceByTif_2",
                keyId: keyid,
                discount: prcent
            },
            cb: "updataPriceByTif.deal"
        })
    },
    deal: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var analy_id = jsonp.analyseTraceId;
        try {
            var price = 0;
            var tmpObj = jsonp.result[0].wireless_guidance_prices;
            for (var i = 0; i < tmpObj.length; i++) {
                if (parseInt(tmpObj[i].price_flag) == parseInt(offer_type)) {
                    price = parseInt(tmpObj[i].price);
                    break
                }
            }
            if (price != 0) {
                price = Math.abs(price / Obj.discount * 100);
                var keyid = Obj.keyId;
                var tmp_url = srcurl + "&";
                var campaignId = strContent(tmp_url, "campaignId=", "&");
                var adGroupId = strContent(tmp_url, "adGroupId=", "&");
                var keyStr = '[{"keywordId":"' + keyid + '","maxMobilePrice":' + price + ',"mobileIsDefaultPrice":0}]';
                var referStr = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
                var dara = "keywords=" + encodeURIComponent(keyStr) + "&analyseTraceId=" + analy_id + "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
                bg.postMessage({
                    act: "post",
                    url: "https://subway.simba.taobao.com/bidword/updatePrice.htm",
                    data: dara,
                    other: {
                        type: "sub_updataPriceByTif_3"
                    },
                    cb: "updataPriceByTif.job"
                })
            }
        } catch (e) {}
    },
    job: function(JHtml, Obj) {
        setTimeout("myrefresh()", 500)
    }
};

var addGroupByWeather = {
    doing: function() {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var referStr = "/campaigns/standards/adgroups/items/detail?tab=prime-crowd&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        addGroupByWeather.action(dara, campaignId, adGroupId)
    },
    action: function(dara, cid, gid) {
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/crowdTemplate/getLayoutExt.htm?productId=101001005&bizType=1&firstCat=16",
            data: dara,
            other: {
                campaignId: cid,
                groupId: gid,
                type: "sub_addGroupByWeather_1"
            },
            cb: "addGroupByWeather.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var list = new Array();
        try {
            var Result = jsonp.result;
            var DimDTOs = Result[0].dimDTOs;
            var TemplateId = Result[0].id;
            var list = new Array();
            for (var i = 0; i < DimDTOs.length; i++) {
                var tagList = DimDTOs[i].tagOptions;
                for (var k = 0; k < tagList.length; k++) {
                    var item = new Object();
                    item.tempId = TemplateId;
                    item.dimId = tagList[k].dimId;
                    item.groupId = tagList[k].optionGroupId;
                    item.tagId = tagList[k].tagId;
                    item.tagName = tagList[k].tagName;
                    list.push(item)
                }
            }
        } catch (e) {}
        if (list.length > 0) {
            var makeupWord = "";
            var multiple = comm_multiple;
            var templateId;
            var tempName = "";
            var referStr = "/campaigns/standards/adgroups/items/detail?tab=prime-crowd&campaignId=" + Obj.campaignId + "&adGroupId=" + Obj.groupId;
            var dara = "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
            for (var i = 0; i < list.length; i++) {
                templateId = list[i].tempId;
                tempName = list[i].tagName;
                var str = '{"dimId":"' + list[i].dimId + '","tagId":"' + list[i].tagId + '","tagName":"' + list[i].tagName + '","optionGroupId":"' + list[i].groupId + '"}';
                str = '[{"crowdDTO":{"extParam":{"firstCat":"16"},"templateId":' + templateId + ',"name":"' + list[i].tagName + '","tagList":[' + str + ']},"isDefaultPrice":0,"priceMode":1,"discount":' + multiple + "}]";
                var url = "https://subway.simba.taobao.com/adgroupTargeting/add.htm?productId=101001005&bizType=1&adgroupId=" + Obj.groupId + "&targetings=" + encodeURIComponent(str);
                addGroupByWeather.action2(url, dara)
            }
        }
    },
    action2: function(posturl, dara) {
        bg.postMessage({
            act: "post",
            url: posturl,
            data: dara,
            other: {
                type: "sub_addGroupByWeather_2"
            },
            cb: "addGroupByWeather.work2"
        })
    },
    work2: function(JHtml, Obj) {}
};
var addGroupByCrowd = {
    doing: function() {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var referStr = "/campaigns/standards/adgroups/items/detail?tab=prime-crowd&campaignId=" + campaignId + "&adGroupId=" + adGroupId;
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        addGroupByCrowd.action(dara, campaignId, adGroupId, "16");
        addGroupByCrowd.action(dara, campaignId, adGroupId, "26");
        addGroupByCrowd.action(dara, campaignId, adGroupId, "30");
        addGroupByCrowd.action(dara, campaignId, adGroupId, "50008165")
    },
    action: function(dara, cid, gid, tid) {
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/crowdTemplate/getLayoutExt.htm?productId=101001005&bizType=1&firstCat=" + tid,
            data: dara,
            other: {
                campaignId: cid,
                groupId: gid,
                type: "sub_addGroupByCrowd_1"
            },
            cb: "addGroupByCrowd.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var list = new Array();
        var male = new Object();
        var female = new Object();
        try {
            var Result = jsonp.result;
            var DimDTOs = Result[1].dimDTOs;
            var TemplateId = Result[1].id;
            var list = new Array();
            for (var i = 0; i < DimDTOs.length; i++) {
                var tagList = DimDTOs[i].tagOptions;
                for (var k = 0; k < tagList.length; k++) {
                    var item = new Object();
                    item.tempId = TemplateId;
                    item.dimId = tagList[k].dimId;
                    item.groupId = tagList[k].optionGroupId;
                    item.tagId = tagList[k].tagId;
                    item.tagName = tagList[k].tagName;
                    if (item.tagName == "女" && item.dimId == "100000") {
                        female = item
                    } else if (item.tagName == "男" && item.dimId == "100000") {
                        male = item
                    } else {
                        list.push(item)
                    }
                }
            }
        } catch (e) {}
        if (list.length > 0) {
            var makeupWord = "";
            var multiple = comm_multiple;
            var templateId;
            var tempName = "";
            var referStr = "/campaigns/standards/adgroups/items/detail?tab=prime-crowd&campaignId=" + Obj.campaignId + "&adGroupId=" + Obj.groupId;
            var dara = "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
            for (var i = 0; i < list.length; i++) {
                templateId = list[i].tempId;
                tempName = list[i].tagName + female.tagName;
                var str = '{"dimId":"' + list[i].dimId + '","tagId":"' + list[i].tagId + '","tagName":"' + list[i].tagName + '","optionGroupId":"' + list[i].groupId + '"}' + "," + '{"dimId":"' + female.dimId + '","tagId":"' + female.tagId + '","tagName":"' + female.tagName + '","optionGroupId":"' + female.groupId + '"}';
                str = '[{"crowdDTO":{"extParam":{"firstCat":"16"},"templateId":' + templateId + ',"name":"' + tempName + '","tagList":[' + str + ']},"isDefaultPrice":0,"priceMode":1,"discount":' + multiple + "}]";
                var url = "https://subway.simba.taobao.com/adgroupTargeting/add.htm?productId=101001005&bizType=1&adgroupId=" + Obj.groupId + "&targetings=" + encodeURIComponent(str);
                addGroupByCrowd.action2(url, dara)
            }
            for (var i = 0; i < list.length; i++) {
                templateId = list[i].tempId;
                tempName = list[i].tagName + male.tagName;
                var str = '{"dimId":"' + list[i].dimId + '","tagId":"' + list[i].tagId + '","tagName":"' + list[i].tagName + '","optionGroupId":"' + list[i].groupId + '"}' + "," + '{"dimId":"' + male.dimId + '","tagId":"' + male.tagId + '","tagName":"' + male.tagName + '","optionGroupId":"' + male.groupId + '"}';
                str = '[{"crowdDTO":{"extParam":{"firstCat":"16"},"templateId":' + templateId + ',"name":"' + tempName + '","tagList":[' + str + ']},"isDefaultPrice":0,"priceMode":1,"discount":' + multiple + "}]";
                var url = "https://subway.simba.taobao.com/adgroupTargeting/add.htm?productId=101001005&bizType=1&adgroupId=" + Obj.groupId + "&targetings=" + encodeURIComponent(str);
                addGroupByCrowd.action2(url, dara)
            }
        }
    },
    action2: function(posturl, dara) {
        bg.postMessage({
            act: "post",
            url: posturl,
            data: dara,
            other: {
                type: "sub_addGroupByCrowd_2"
            },
            cb: "addGroupByCrowd.work2"
        })
    },
    work2: function(JHtml, Obj) {}
};

function unique(array) {
    array.sort();
    var re = [array[0]];
    for (var i = 1; i < array.length; i++) {
        if (array[i] !== re[re.length - 1]) {
            re.push(array[i])
        }
    }
    return re
}
function chkstrlen(str) {
    var strlen = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) {
            strlen += 2
        } else {
            strlen++
        }
    }
    return strlen
}
function get(str) {
    var maxLength = 0;
    var result = "";
    while (str != "") {
        oldStr = str;
        getStr = str.charAt(0);
        str = str.replace(new RegExp(getStr, "g"), "");
        if (oldStr.length - str.length > maxLength) {
            maxLength = oldStr.length - str.length;
            result = getStr + "=" + maxLength
        }
    }
    alert(result)
}
function countRate(arr) {
    var count = {};
    for (var i in arr) {
        var str = arr[i];
        if (typeof count[str] === "undefined") {
            count[str] = 1
        } else {
            count[str]++
        }
    }
    var nlist = new Array();
    for (var k in count) {
        var obj = new Object();
        obj.name = k;
        obj.num = count[k];
        nlist.push(obj)
    }
    return nlist
}
function sortNumber(a, b) {return a - b}

function makeRand(count) {
    var arr = new Array();
    for (var i = 0; i < count; i++) {
        arr.push(i)
    }
    arr.sort(function(a, b) {
        return Math.random() > .5 ? -1 : 1
    });
    return arr
}
var uploadCreative = {
    strCollect: new Array(),
    nCount: 0,
    tCount: 0,
    cWords: new Array(),
    HostUrl: ccy_host,
    doing: function() {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var posturl = "https://subway.simba.taobao.com/adgroup/getAdGroupWithCategory.htm?adGroupId=" + adGroupId;
        var referStr = "/campaigns/standards/adgroups/items/detail?tab=creative&campaignId=" + adGroupId + "&campaignId=" + campaignId;
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        bg.postMessage({
            act: "post",
            url: posturl,
            data: dara,
            other: {
                type: "sub_uploadCreative_0"
            },
            cb: "uploadCreative.goon"
        })
    },
    goon: function(JHtml) {
        var jsonp = eval("(" + JHtml + ")");
        var title = jsonp.result.adGroupDTO.title;
        var catpath = jsonp.result.adGroupDTO.catPathNames;
        uploadCreative.nCount++;
        uploadCreative.ready(title);
        for (var i in catpath) {
            uploadCreative.nCount++;
            uploadCreative.ready(catpath[i])
        }
        for (var i = 0; i < comm_list.length; i++) {
            var str = comm_list[i].normalWord;
            uploadCreative.nCount++;
            uploadCreative.ready(str)
        }
    },
    ready: function(str) {
        var queryUrl = uploadCreative.HostUrl + "adapi/keywords?text=" + encodeURIComponent(queryWord);
        bg.postMessage({
            act: "get",
            url: queryUrl,
            other: {
                type: "sub_dictWord"
            },
            cb: "uploadCreative.action"
        })
    },
    action: function(JHtml) {
        var jsonp = eval("(" + JHtml + ")");
        var queryWord = jsonp.words;
        for (var i in jsonp.words) {
            uploadCreative.strCollect.push(jsonp.words[i])
        }
        uploadCreative.tCount++;
        if (uploadCreative.nCount == uploadCreative.tCount && uploadCreative.nCount != 0) {
            var nlist = countRate(uploadCreative.strCollect);
            var list = nlist.sort(compare("num"));
            if (list.length > 10) {
                var coreword = list[0].name;
                var threshold = Math.ceil(list.length / 2);
                var otherword = [];
                for (var n = 1; n < list.length; n++) {
                    if (list[n].num > threshold) {
                        coreword = list[n].name + coreword
                    } else {
                        otherword.push(list[n].name)
                    }
                }
            } else {
                var coreword = list[0].name;
                var otherword = []
            }
            var nflag = 0;
            for (var n = 0; n < 5; n++) {
                var nword = coreword;
                for (var i = nflag; i < otherword.length; i++) {
                    if (chkstrlen(nword + otherword[i]) < 40) {
                        nword = otherword[i] + nword
                    } else {
                        nflag = i;
                        uploadCreative.cWords.push(nword);
                        break
                    }
                }
            }
            if (uploadCreative.cWords.length < 5) {
                var nlength = 5 - uploadCreative.cWords.length;
                for (var i = 0; i < nlength; i++) {
                    var nums = makeRand(otherword.length);
                    var nword = coreword;
                    for (var n in nums) {
                        if (chkstrlen(otherword[nums[n]] + nword) < 40) {
                            nword = otherword[nums[n]] + nword
                        } else {
                            uploadCreative.cWords.push(nword);
                            break
                        }
                    }
                }
            }
            uploadCreative.preper()
        }
    },
    preper: function() {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var posturl = "https://subway.simba.taobao.com/creative/preAddCreative.htm?adGroupId=" + adGroupId;
        var referStr = "/campaigns/standards/adgroups/items/creative/add?adGroupId=" + adGroupId + "&campaignId=" + campaignId;
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        bg.postMessage({
            act: "post",
            url: posturl,
            data: dara,
            other: {
                type: "sub_addGroupByCrowd_2"
            },
            cb: "uploadCreative.job"
        })
    },
    job: function(JHtml) {
        var jsonp = eval("(" + JHtml + ")");
        var imgs = jsonp.result.itemDTO.mutiImageURL;
        var goodurl = jsonp.result.adGroup.linkUrl;
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var posturl = "https://subway.simba.taobao.com/creative/addCreative.htm";
        var referStr = "/campaigns/standards/adgroups/items/creative/add?adGroupId=" + adGroupId + "&campaignId=" + campaignId;
        for (var i in imgs) {
            var creativeStr = '{"creativeElementList":[{"cname":"TITLE","cvalue":"' + uploadCreative.cWords[i] + '"},{"cname":"IMGURL","cvalue":"' + imgs[i] + '"},{"cname":"SUBTITLE","cvalue":""},{"cname":"DESCRIPTION","cvalue":""},{"cname":"LINKURL","cvalue":"' + goodurl + '"},{"cname":"DISPLAYURL","cvalue":""},{"cname":"NPXSCORE","cvalue":""},{"cname":"MINISTORY","cvalue":""},{"cname":"DOCUMENTS","cvalue":""}],"campaignId":"' + campaignId + '","adGroupId":"' + adGroupId + '","elementTId":"1","qualityflag":0,"expTraffic":null,"expTime":null,"creativeAdvancedSettingDTO":{"channel":{"pc":"1","wireless":"1"}}}';
            var dara = "creative=" + encodeURIComponent(creativeStr) + "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
            bg.postMessage({
                act: "post",
                url: posturl,
                data: dara,
                other: {
                    type: "sub_addGroupByCrowd_2"
                },
                cb: "uploadCreative.work"
            })
        }
        setTimeout("updataTraffic.doing()", 1e3);
        setTimeout("myrefresh()", 1500)
    },
    work: function(JHtml) {}
};

//updatevalues
var updataTraffic = {
    doing: function() {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var postUrl = "https://subway.simba.taobao.com/adgroup/updateAdGroupTraffic.htm";
        var referStr = "/campaigns/standards/adgroups/items/detail?tab=creative&campaignId=" + adGroupId + "&campaignId=" + campaignId;
        var trafficStr = '{"pc":"1","wirelessSquare":"1","wirelessRectangle":"0"}';
        var postData = "adgroupId=" + adGroupId + "&adgroupCreativeTrafficDTO=" + encodeURIComponent(trafficStr) + "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        bg.postMessage({
            act: "post",
            url: postUrl,
            data: postData,
            other: {
                type: "sub_updataTraffic_1"
            },
            cb: "uploadCreative.job"
        })
    },
    job: function(JHtml) {}
};
var AreaNum = 0;
var AreaList = new Array();
var AreaMap = {
    "北京": 0,
    "新疆": 0,
    "重庆": 0,
    "国外": 0,
    "广东": 0,
    "天津": 0,
    "浙江": 0,
    "澳门": 0,
    "未知": 0,
    "广西": 0,
    "宁夏": 0,
    "江西": 0,
    "台湾": 0,
    "中国其它": 0,
    "贵州": 0,
    "安徽": 0,
    "陕西": 0,
    "辽宁": 0,
    "山西": 0,
    "青海": 0,
    "香港": 0,
    "内蒙": 0,
    "四川": 0,
    "江苏": 0,
    "河北": 0,
    "西藏": 0,
    "福建": 0,
    "吉林": 0,
    "上海": 0,
    "海南": 0,
    "湖北": 0,
    "云南": 0,
    "甘肃": 0,
    "湖南": 0,
    "山东": 0,
    "河南": 0,
    "黑龙江": 0
};
var wordAreaPer = {
    "北京": "19",
    "新疆": "471",
    "重庆": "532",
    "国外": "574",
    "广东": "68",
    "天津": "461",
    "浙江": "508",
    "澳门": "576",
    "未知": "9999",
    "广西": "92",
    "宁夏": "351",
    "江西": "279",
    "台湾": "578",
    "中国其它": "531",
    "贵州": "109",
    "安徽": "1",
    "陕西": "406",
    "辽宁": "294",
    "山西": "393",
    "青海": "357",
    "香港": "599",
    "内蒙": "333",
    "四川": "438",
    "江苏": "255",
    "河北": "125",
    "西藏": "463",
    "福建": "39",
    "吉林": "234",
    "上海": "417",
    "海南": "120",
    "湖北": "184",
    "云南": "488",
    "甘肃": "52",
    "湖南": "212",
    "山东": "368",
    "河南": "145",
    "黑龙江": "165"
};


var getAreaInfo = {
    tasks: 0,
    stats: 0,
    doing: function(numtype) {
        getAreaInfo.tasks = comm_list.length;
        for (var i = 0; i < comm_list.length; i++) {
            getAreaInfo.action(comm_list[i], numtype)
        }
    },
    action: function(item, numtype) {
        var now_day = makeDate(-1);
        var pass_day = makeDate(-7);
        var referStr = "/tools/insight/queryresult?kws=" + item.normalWord + "&tab=tabs-region&start=&end=";
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/report/getAreaPerspective.htm?bidwordstr=" + encodeURIComponent(item.normalWord) + "&startDate=" + pass_day + "&endDate=" + now_day,
            data: dara,
            other: {
                type: "getAreaInfo_1",
                ntype: numtype
            },
            cb: "getAreaInfo.work"
        })
    },
    work: function(JHtml, Obj) {
        getAreaInfo.stats++;
        var datatype = Obj.ntype;
        var jsonp = eval("(" + JHtml + ")");
        var tArray = jsonp.result;
        var bArray = tArray[0].areaBaseDTOList;
        for (var i = 0; i < bArray.length; i++) {
            var item = bArray[i].inRecordBaseDTO;
            var keyname = item.area;
            var valuenum = 0;
            if (datatype == "0") {
                valuenum = parseInt(item.impression)
            } else if (datatype == "1") {
                valuenum = parseInt(item.ctr)
            } else if (datatype == "2") {
                valuenum = parseInt(item.cvr)
            }
            AreaMap[keyname] += valuenum
        }
        if (getAreaInfo.tasks && getAreaInfo.tasks == getAreaInfo.stats) {
            addAreas.doing()
        }
    }
};

var addAreas = {
    doing: function() {
        for (var key in AreaMap) {
            var obj = new Object();
            obj.area = key;
            obj.num = AreaMap[key];
            AreaList.push(obj)
        }
        AreaList = AreaList.sort(compare("num"));
        var max_length = AreaNum;
        if (AreaList.length > max_length) {
            var newary = AreaList.slice(0, max_length);
            var areaStr = "";
            for (var i = 0; i < newary.length; i++) {
                areaStr += wordAreaPer[newary[i].area];
                if (i != newary.length - 1) {
                    areaStr += ","
                }
            }
            addAreas.action(areaStr)
        }
    },
    action: function(areaStr) {
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var referStr = "/campaigns/standards/adgroups/index?type=item&campaignId=" + campaignId;
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        bg.postMessage({
            act: "post",
            url: "https://subway.simba.taobao.com/area/update.htm?campaignId=" + campaignId + "&areaState=" + encodeURIComponent(areaStr),
            data: dara,
            other: {
                type: "addAreas_1"
            },
            cb: "addAreas.work"
        })
    },
    work: function(JHtml, Obj) {
        setTimeout("myrefresh()", 500)
    }
};

function compare(key) {
    return function(obj1, obj2) {
        var val1 = obj1[key],
            val2 = obj2[key];
        return val1 > val2 ? -1 : 1
    }
}
//refresh
function myrefresh() {
    window.location.reload()
}
//insert html
function insertHtml() {
    var html = "";
    for (var i in infoHtml) {
        html += infoHtml[i]
    }
    //insert htmlvalues
    $(".nav-tabs.clearfix.mt15").before(inHtml);
    //insert version
    loginHtml = loginHtml.replace("#version#", "v" + comm_ver);
    //insert loginHtml
    $(".top").after(loginHtml);
    //insert html
    $(".logtag").after(html)
}

//button function
var btnAction = {
    btn_fun_1: function() {
        var s1 = document.getElementById("condition_1_1").value;
        var s2 = document.getElementById("condition_1_2").value;
        var t1 = "";
        if (s1 == "展现指数") {
            t1 = "pv"
        } else if (s1 == "点击率") {
            t1 = "ctr"
        } else if (s1 == "转化率") {
            t1 = "cvr"
        }
        var queryWord = "";
        if (s2 != "" && typeof s2 != undefined) {
            queryWord = s2
        }
        if (queryWord == "") {
            alert("深度学习广告提醒您：请填写包含关键词！")
        } else {
            var funstr = 'addWord.ready("' + queryWord + '", "' + t1 + '")';
            setTimeout(funstr, 200)
        }
    },
    btn_fun_2: function() {
        var s1 = document.getElementById("condition_2_1").value;
        var s2 = document.getElementById("condition_2_2").value;
        if (s1 == "移动端") {
            which_type = true
        } else {
            which_type = false
        }
        if (Number(s2) != NaN) {
            commen_del_max = s2;
            setTimeout("detelPriceByQuality.doing()", 500)
        }
    },
    btn_fun_3: function() {
        var s1 = document.getElementById("condition_3_1").value;
        day_type = 7;
        if (Number(s1) != NaN) {
            commen_del_max = s1;
            setTimeout("detelPrice.doing()", 500)
        }
    },
    btn_fun_4: function() {
        var s1 = document.getElementById("condition_4_1").value;
        if (s1 != "" && typeof s1 != undefined) {
            commen_del_max = parseInt(s1)
        }
        precisionGuided.doing()
    },
    btn_fun_5: function() {
        var s1 = document.getElementById("condition_5_1").value;
        var s2 = document.getElementById("condition_5_2").value;
        var s3 = document.getElementById("condition_5_3").value;
        if (s1 == "移动端") {
            which_type = true
        } else {
            which_type = false
        }
        if (s2 == "实时出价") {
            day_type = 0
        } else if (s2 == "昨日行业出价") {
            day_type = -1
        } else if (s2 == "近3天行业均价") {
            day_type = -3
        } else if (s2 == "近7天行业均价") {
            day_type = -7
        } else if (s2 == "近14天行业均价") {
            day_type = -14
        }
        if (s3 == "0%") {
            price_percent = 1
        } else if (s3 == "10%") {
            price_percent = 1.1
        } else if (s3 == "-10%") {
            price_percent = .9
        } else if (s3 == "20%") {
            price_percent = 1.2
        } else if (s3 == "-20%") {
            price_percent = .8
        } else if (s3 == "50%") {
            price_percent = 1.5
        } else if (s3 == "-50%") {
            price_percent = .5
        }
        if (day_type == 0) {
            getNowPrice.doing();
            setTimeout("reviseOffer.doing()", 500)
        } else {
            reviseOffer.doing()
        }
    },
    btn_fun_6: function() {
        var s1 = document.getElementById("condition_6_1").value;
        if (s1 == "首条") {
            offer_type = "0"
        } else if (s1 == "前三") {
            offer_type = "3"
        } else if (s1 == "四至六") {
            offer_type = "4"
        } else if (s1 == "七至十") {
            offer_type = "5"
        } else if (s1 == "十至十五") {
            offer_type = "6"
        } else if (s1 == "十六至二十") {
            offer_type = "7"
        }
        updataPriceByTif.doing()
    },
    btn_fun_7: function() {
        var s1 = document.getElementById("condition_7_1").value;
        var s2 = document.getElementById("condition_7_2").value;
        if (Number(s2) != NaN) {
            comm_multiple = 100 + parseInt(s2)
        }
        if (s1 == "优质人群") {
            addGroup.doing("0")
        } else if (s1 == "节日人群") {
            addGroup.doing("1")
        } else if (s1 == "同类店铺人群") {
            addGroup.doing("2")
        } else if (s1 == "付费推广/活动人群") {
            addGroup.doing("3")
        } else if (s1 == "天气人群") {
            addGroupByWeather.doing()
        } else if (s1 == "人口属性人群") {
            addGroupByCrowd.doing()
        } else if (s1 == "以上所有") {
            addGroup.doing("0");
            setTimeout('addGroup.doing("1")', 200);
            setTimeout('addGroup.doing("2")', 800);
            setTimeout('addGroup.doing("3")', 400);
            addGroupByCrowd.doing()
        }
        setTimeout("myrefresh()", 4e3)
    },
    btn_fun_8: function() {
        var s1 = document.getElementById("condition_8_1").value;
        var s2 = document.getElementById("condition_8_2").value;
        if (Number(s2) != NaN) {
            var num = parseInt(s2);
            if (num > 35) {
                num = 35
            }
            AreaNum = num
        }
        if (s1 == "展现指数") {
            getAreaInfo.doing("0")
        } else if (s1 == "点击率") {
            getAreaInfo.doing("1")
        } else if (s1 == "点击转化率") {
            getAreaInfo.doing("2")
        }
    },
    btn_fun_9: function() {
        var s2 = document.getElementById("condition_9_2").value;
        var s3 = document.getElementById("condition_9_3").value;
        var s4 = document.getElementById("condition_9_4").value;
        var s5 = document.getElementById("condition_9_5").value;
        var s6 = document.getElementById("condition_9_6").value;
        var s7 = document.getElementById("condition_9_7").value;
        which_type = true;
        if (s2 == "今日") {
            day_Start = 0;
            day_End = 0
        } else if (s2 == "昨日") {
            day_Start = -1;
            day_End = -1
        } else if (s2 == "近三天") {
            day_Start = -3;
            day_End = -1
        } else if (s2 == "近一周") {
            day_Start = -7;
            day_End = -1
        }
        var t1 = 1;
        if (s3 == "展现量") {
            t1 = 1
        } else if (s3 == "点击量") {
            t1 = 2
        } else if (s3 == "点击率") {
            t1 = 3
        } else if (s3 == "转化率") {
            t1 = 4
        } else if (s3 == "投产比") {
            t1 = 5
        } else if (s3 == "花费") {
            t1 = 6
        }
        var t2 = true;
        if (s4 == "大于") {
            t2 = true
        } else {
            t2 = false
        }
        if (Number(s5) != NaN) {
            commen_del_max = parseFloat(s5)
        }
        if (s6 == "提升") {
            if (s7 == "10%") {
                price_percent = 1.1
            } else if (s7 == "20%") {
                price_percent = 1.2
            } else if (s7 == "50%") {
                price_percent = 1.5
            }
        } else {
            if (s7 == "10%") {
                price_percent = .9
            } else if (s7 == "20%") {
                price_percent = .8
            } else if (s7 == "50%") {
                price_percent = .5
            }
        }
        dayPast = day_type;
        getNowPrice.doing();
        var funname = "updataPricebyBit.doing(" + t1 + "," + t2 + ")";
        setTimeout(funname, 500)
    },
    btn_fun_10: function() {
        var s1 = document.getElementById("condition_10_1").value;
        var s2 = document.getElementById("condition_10_2").value;
        var s3 = document.getElementById("condition_10_3").value;
        var s4 = document.getElementById("condition_10_4").value;
        var s5 = document.getElementById("condition_10_5").value;
        if (s1 == "移动端") {
            which_type = true
        } else {
            which_type = false
        }
        if (s2 == "点击率") {
            Ace_Type = 0
        } else if (s2 == "转化率") {
            Ace_Type = 1
        }
        if (s3 == "大于") {
            Ace_Compare = true
        } else {
            Ace_Compare = false
        }
        if (s4 == "提升") {
            if (s5 == "10%") {
                Ace_Times = 1.1
            } else if (s5 == "20%") {
                Ace_Times = 1.2
            } else if (s5 == "50%") {
                Ace_Times = 1.5
            }
        } else {
            if (s5 == "10%") {
                Ace_Times = .9
            } else if (s5 == "20%") {
                Ace_Times = .8
            } else if (s5 == "50%") {
                Ace_Times = .5
            }
        }
        getNowPrice.doing();
        setTimeout("updataPricebyAce.doing()", 500);
        setTimeout("myrefresh()", 5e3)
    },
    btn_fun_11: function() {
        var s1 = document.getElementById("condition_11_1").value;
        var s2 = document.getElementById("condition_11_2").value;
        var s3 = document.getElementById("condition_11_3").value;
        var s4 = document.getElementById("condition_11_4").value;
        var s5 = document.getElementById("condition_11_5").value;
        if (s1 == "移动端") {
            which_type = true
        } else {
            which_type = false
        }
        var ds, de;
        if (s2 == "昨日") {
            ds = -1;
            de = -1
        } else if (s2 == "前日") {
            ds = -2;
            de = -2
        } else if (s2 == "近一周") {
            ds = -1;
            de = -7
        }
        var t1 = 1;
        if (s3 == "展现指数") {
            t1 = 1
        } else if (s3 == "点击指数") {
            t1 = 2
        } else if (s3 == "点击率") {
            t1 = 3
        } else if (s3 == "转化率") {
            t1 = 4
        } else if (s3 == "市场均价") {
            t1 = 5
        }
        var t2 = true;
        if (s4 == "大于") {
            t2 = true
        } else {
            t2 = false
        }
        if (Number(s5) != NaN) {
            commen_del_max = parseFloat(s5)
        }
        var funname = "deleteWord.doing(" + ds + "," + de + "," + t1 + "," + t2 + ")";
        setTimeout(funname, 500)
    },
    btn_fun_12: function() {
        uploadCreative.doing()
    },
    btn_fun_count: function() {
        btnPower.doing()
    },
    Default: function() {}
};
//bindshop & loginout button
var otherBtnAction = {
    btn_binde: function() {
        bindShop.doing()
    },
    loginOut: function() {
        loginOut.doing()
    },
    Default: function() {}
};
//Authentication， 
//debug value
function bindBtnEvent() {
    $(document).on("click", "button", function() {
        var btnid = this.id;
        if (btnAction[btnid]) {
            if (isLogin) {
                if (flag_shop) {
                    if (powerArray.length > 0) {
                        var index = $.inArray(btnid.replace("btn_", ""), powerArray);
                        if (index > -1) {
                            if (index != 10) {
                                showSpin()
                            }
                            btnAction[btnid]()
                        } else {
                            alert("深度学习广告提醒您：您的版本无此功能使用权限，请升级后再使用。")
                        }
                    } else {
                        alert("深度学习广告提醒您：请付费升级后使用软件的功能。")
                    }
                } else {
                    alert("深度学习广告提醒您：您还没绑定店铺，请先绑定再使用。")
                }
            } else {
                alert("深度学习广告提醒您：您还没有登录，请登录后再操作。")
            }
        } else {
            if (otherBtnAction[btnid]) {
                if (isLogin) {
                    otherBtnAction[btnid]()
                } else {
                    alert("深度学习广告提醒您：您还没有登录，请登录后再操作。")
                }
            } else {
                console.log("未知按钮")
            }
        }
    })
}
function LoginbindBtnEvent() {
    $(document).on("click", "button", function() {
        if (this.id == "loginIn") {
            loginIn.doing()
        }
    })
}
//start door
window.setInterval(hello, 2500);
var oldurl = "";

function hello() {
    srcurl = window.location.href;
    if (srcurl != oldurl) {
        oldurl = srcurl;
        beforeLogin.getAD_doing();
        if (srcurl.indexOf("subway.simba.taobao.com") > 0 && srcurl.indexOf("campaigns/standards/adgroups/items/detail") > 0) {
            bindBtnEvent();
            setTimeout("ShowTips()", 1e3);
            setTimeout("reBack.doing()", 5e3)
        }
    }
}
//baidu statistical
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?498339a30811fd4f6950b504fc916358";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s)
})();
//tips
function ShowTips() {
    var my_span = document.getElementsByClassName("icon-five");
    var my_div = document.getElementsByClassName("show-info");
    for (var i = 0; i < my_span.length; i++) {
        my_span[i].sfr = i;
        my_span[i].onmouseover = function() {
            my_div[this.sfr].style.display = "block"
        };
        my_span[i].onmouseout = function() {
            my_div[this.sfr].style.display = "none"
        }
    }
}
//md5
var MD5 = function(string) {
        function RotateLeft(lValue, iShiftBits) {
            return lValue << iShiftBits | lValue >>> 32 - iShiftBits
        }
        function AddUnsigned(lX, lY) {
            var lX4, lY4, lX8, lY8, lResult;
            lX8 = lX & 2147483648;
            lY8 = lY & 2147483648;
            lX4 = lX & 1073741824;
            lY4 = lY & 1073741824;
            lResult = (lX & 1073741823) + (lY & 1073741823);
            if (lX4 & lY4) {
                return lResult ^ 2147483648 ^ lX8 ^ lY8
            }
            if (lX4 | lY4) {
                if (lResult & 1073741824) {
                    return lResult ^ 3221225472 ^ lX8 ^ lY8
                } else {
                    return lResult ^ 1073741824 ^ lX8 ^ lY8
                }
            } else {
                return lResult ^ lX8 ^ lY8
            }
        }
        function F(x, y, z) {
            return x & y | ~x & z
        }
        function G(x, y, z) {
            return x & z | y & ~z
        }
        function H(x, y, z) {
            return x ^ y ^ z
        }
        function I(x, y, z) {
            return y ^ (x | ~z)
        }
        function FF(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b)
        }
        function GG(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b)
        }
        function HH(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b)
        }
        function II(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b)
        }
        function ConvertToWordArray(string) {
            var lWordCount;
            var lMessageLength = string.length;
            var lNumberOfWords_temp1 = lMessageLength + 8;
            var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
            var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
            var lWordArray = Array(lNumberOfWords - 1);
            var lBytePosition = 0;
            var lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - lByteCount % 4) / 4;
                lBytePosition = lByteCount % 4 * 8;
                lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
                lByteCount++
            }
            lWordCount = (lByteCount - lByteCount % 4) / 4;
            lBytePosition = lByteCount % 4 * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray
        }
        function WordToHex(lValue) {
            var WordToHexValue = "",
                WordToHexValue_temp = "",
                lByte, lCount;
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = lValue >>> lCount * 8 & 255;
                WordToHexValue_temp = "0" + lByte.toString(16);
                WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2)
            }
            return WordToHexValue
        }
        function Utf8Encode(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c)
                } else if (c > 127 && c < 2048) {
                    utftext += String.fromCharCode(c >> 6 | 192);
                    utftext += String.fromCharCode(c & 63 | 128)
                } else {
                    utftext += String.fromCharCode(c >> 12 | 224);
                    utftext += String.fromCharCode(c >> 6 & 63 | 128);
                    utftext += String.fromCharCode(c & 63 | 128)
                }
            }
            return utftext
        }
        var x = Array();
        var k, AA, BB, CC, DD, a, b, c, d;
        var S11 = 7,
            S12 = 12,
            S13 = 17,
            S14 = 22;
        var S21 = 5,
            S22 = 9,
            S23 = 14,
            S24 = 20;
        var S31 = 4,
            S32 = 11,
            S33 = 16,
            S34 = 23;
        var S41 = 6,
            S42 = 10,
            S43 = 15,
            S44 = 21;
        string = Utf8Encode(string);
        x = ConvertToWordArray(string);
        a = 1732584193;
        b = 4023233417;
        c = 2562383102;
        d = 271733878;
        for (k = 0; k < x.length; k += 16) {
            AA = a;
            BB = b;
            CC = c;
            DD = d;
            a = FF(a, b, c, d, x[k + 0], S11, 3614090360);
            d = FF(d, a, b, c, x[k + 1], S12, 3905402710);
            c = FF(c, d, a, b, x[k + 2], S13, 606105819);
            b = FF(b, c, d, a, x[k + 3], S14, 3250441966);
            a = FF(a, b, c, d, x[k + 4], S11, 4118548399);
            d = FF(d, a, b, c, x[k + 5], S12, 1200080426);
            c = FF(c, d, a, b, x[k + 6], S13, 2821735955);
            b = FF(b, c, d, a, x[k + 7], S14, 4249261313);
            a = FF(a, b, c, d, x[k + 8], S11, 1770035416);
            d = FF(d, a, b, c, x[k + 9], S12, 2336552879);
            c = FF(c, d, a, b, x[k + 10], S13, 4294925233);
            b = FF(b, c, d, a, x[k + 11], S14, 2304563134);
            a = FF(a, b, c, d, x[k + 12], S11, 1804603682);
            d = FF(d, a, b, c, x[k + 13], S12, 4254626195);
            c = FF(c, d, a, b, x[k + 14], S13, 2792965006);
            b = FF(b, c, d, a, x[k + 15], S14, 1236535329);
            a = GG(a, b, c, d, x[k + 1], S21, 4129170786);
            d = GG(d, a, b, c, x[k + 6], S22, 3225465664);
            c = GG(c, d, a, b, x[k + 11], S23, 643717713);
            b = GG(b, c, d, a, x[k + 0], S24, 3921069994);
            a = GG(a, b, c, d, x[k + 5], S21, 3593408605);
            d = GG(d, a, b, c, x[k + 10], S22, 38016083);
            c = GG(c, d, a, b, x[k + 15], S23, 3634488961);
            b = GG(b, c, d, a, x[k + 4], S24, 3889429448);
            a = GG(a, b, c, d, x[k + 9], S21, 568446438);
            d = GG(d, a, b, c, x[k + 14], S22, 3275163606);
            c = GG(c, d, a, b, x[k + 3], S23, 4107603335);
            b = GG(b, c, d, a, x[k + 8], S24, 1163531501);
            a = GG(a, b, c, d, x[k + 13], S21, 2850285829);
            d = GG(d, a, b, c, x[k + 2], S22, 4243563512);
            c = GG(c, d, a, b, x[k + 7], S23, 1735328473);
            b = GG(b, c, d, a, x[k + 12], S24, 2368359562);
            a = HH(a, b, c, d, x[k + 5], S31, 4294588738);
            d = HH(d, a, b, c, x[k + 8], S32, 2272392833);
            c = HH(c, d, a, b, x[k + 11], S33, 1839030562);
            b = HH(b, c, d, a, x[k + 14], S34, 4259657740);
            a = HH(a, b, c, d, x[k + 1], S31, 2763975236);
            d = HH(d, a, b, c, x[k + 4], S32, 1272893353);
            c = HH(c, d, a, b, x[k + 7], S33, 4139469664);
            b = HH(b, c, d, a, x[k + 10], S34, 3200236656);
            a = HH(a, b, c, d, x[k + 13], S31, 681279174);
            d = HH(d, a, b, c, x[k + 0], S32, 3936430074);
            c = HH(c, d, a, b, x[k + 3], S33, 3572445317);
            b = HH(b, c, d, a, x[k + 6], S34, 76029189);
            a = HH(a, b, c, d, x[k + 9], S31, 3654602809);
            d = HH(d, a, b, c, x[k + 12], S32, 3873151461);
            c = HH(c, d, a, b, x[k + 15], S33, 530742520);
            b = HH(b, c, d, a, x[k + 2], S34, 3299628645);
            a = II(a, b, c, d, x[k + 0], S41, 4096336452);
            d = II(d, a, b, c, x[k + 7], S42, 1126891415);
            c = II(c, d, a, b, x[k + 14], S43, 2878612391);
            b = II(b, c, d, a, x[k + 5], S44, 4237533241);
            a = II(a, b, c, d, x[k + 12], S41, 1700485571);
            d = II(d, a, b, c, x[k + 3], S42, 2399980690);
            c = II(c, d, a, b, x[k + 10], S43, 4293915773);
            b = II(b, c, d, a, x[k + 1], S44, 2240044497);
            a = II(a, b, c, d, x[k + 8], S41, 1873313359);
            d = II(d, a, b, c, x[k + 15], S42, 4264355552);
            c = II(c, d, a, b, x[k + 6], S43, 2734768916);
            b = II(b, c, d, a, x[k + 13], S44, 1309151649);
            a = II(a, b, c, d, x[k + 4], S41, 4149444226);
            d = II(d, a, b, c, x[k + 11], S42, 3174756917);
            c = II(c, d, a, b, x[k + 2], S43, 718787259);
            b = II(b, c, d, a, x[k + 9], S44, 3951481745);
            a = AddUnsigned(a, AA);
            b = AddUnsigned(b, BB);
            c = AddUnsigned(c, CC);
            d = AddUnsigned(d, DD)
        }
        var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
        return temp.toLowerCase()
    };

function getUserByInput() {
    var userid = $("#username").val();
    var userpwd = $("#password").val();
    if (typeof userid != "undefined" && userid != null && typeof userpwd != "undefined" && userpwd != null) {
        if (userid.length > 0 && userpwd.length > 0) {
            var user = new Object();
            user.id = userid;
            user.pwd = userpwd;
            return user
        } else {
            return null
        }
    } else {
        return null
    }
}

function getUserByStore() {
    var userid = window.localStorage.getItem("username");
    var userpwd = window.localStorage.getItem("password");
    if (typeof userid != "undefined" && userid != null && typeof userpwd != "undefined" && userpwd != null) {
        if (userid.length > 0 && userpwd.length > 0) {
            var user = new Object();
            user.id = userid;
            user.pwd = userpwd;
            return user
        } else {
            return null
        }
    } else {
        return null
    }
}
function setStoreKeys(key, value) {
    localStorage[key] = value
}
function setUserInfo(userid, userpwd) {
    if (typeof userid != "undefined" && userid != null && typeof userpwd != "undefined" && userpwd != null) {
        setStoreKeys("username", userid);
        setStoreKeys("password", userpwd)
    }
}
function setLoginStatus(isOK) {
    setStoreKeys("isLogin", isOK)
}
function ssss2() {
    $(".infomation").replaceWith("");
    $(".info-right").replaceWith("");
    if ($(".top").length <= 0) {
        setTimeout("ssss3()", 500)
    }
}
function numhandler(a) {
    return a == null ? 0 : parseFloat(a)
}
//uploaddata
//post data
var uploadData = {
    safeKey: "mbRTLDR4c1X3BUih",
    hostUrl: ccy_host,
    bArray: new Array(),
    cArray: new Array(),
    doing: function() {
        var now_day = makeDate(0);
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var theUrl = "https://subway.simba.taobao.com/bidword/list.htm";
        var referStr = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId + "&rptType=realTime&start=" + now_day + "&end=" + now_day;
        var postData = "campaignId=" + campaignId + "&adGroupId=" + adGroupId + "&queryWord=&queryType=0&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        bg.postMessage({
            act: "post",
            url: theUrl,
            data: postData,
            other: {
                type: "sub_uploadData_1"
            },
            cb: "uploadData.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        for (var i in jsonp.result) {
            var n = jsonp.result[i].normalWord;
            var m = numhandler(jsonp.result[i].maxMobilePrice) / 100;
            var p = numhandler(jsonp.result[i].maxPrice) / 100;
            var obj = new Object();
            obj.n = n;
            obj.m = m;
            obj.p = p;
            uploadData.bArray.push(obj)
        }
        if (uploadData.bArray.length > 0) {
            uploadData.doing_2()
        }
    },
    doing_2: function() {
        var now_day = makeDate(0);
        var tmp_url = srcurl + "&";
        var campaignId = strContent(tmp_url, "campaignId=", "&");
        var adGroupId = strContent(tmp_url, "adGroupId=", "&");
        var theUrl = "https://subway.simba.taobao.com/rtreport/rptBpp4pBidwordRealtimeSubwayList.htm?campaignid=" + campaignId + "&adgroupid=" + adGroupId + "&theDate=" + now_day + "&traffictype=1%2C2%2C4%2C5";
        var referStr = "/campaigns/standards/adgroups/items/detail?tab=bidword&campaignId=" + campaignId + "&adGroupId=" + adGroupId + "&rptType=realTime&start=" + now_day + "&end=" + now_day;
        var postData = "&sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        bg.postMessage({
            act: "post",
            url: theUrl,
            data: postData,
            other: {
                type: "sub_uploadData_2"
            },
            cb: "uploadData.work_2"
        })
    },
    work_2: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        for (var i in jsonp.result) {
            var a = numhandler(jsonp.result[i].impression);
            var b = numhandler(jsonp.result[i].click);
            var c = numhandler(jsonp.result[i].ctr) / 100;
            var d = numhandler(jsonp.result[i].cpc) / 100;
            var e = numhandler(jsonp.result[i].roi) / 100;
            var f = numhandler(jsonp.result[i].cost);
            var obj = new Object();
            obj.a = a;
            obj.b = b;
            obj.c = c;
            obj.d = d;
            obj.e = e;
            obj.f = f;
            uploadData.cArray.push(obj)
        }
        var list = new Array();
        for (var i in uploadData.bArray) {
            var obj = new Object();
            obj.n = uploadData.bArray[i].n;
            obj.m = uploadData.bArray[i].m;
            obj.p = uploadData.bArray[i].p;
            obj.a = uploadData.cArray[i].a;
            obj.b = uploadData.cArray[i].b;
            obj.c = uploadData.cArray[i].c;
            obj.d = uploadData.cArray[i].d;
            obj.e = uploadData.cArray[i].e;
            obj.f = uploadData.cArray[i].f;
            list.push(obj)
        }
    },
    job: function(list) {
        var word = "";
        for (var i in list) {
            var str = '"' + list[i].n + '":{"pc_offer":"' + list[i].p + '","move_offer":"' + list[i].m + '","show_amount":"' + list[i].a + '","click_amount":"' + list[i].b + '","click_rate":"' + list[i].c + '","conversion_rate":"' + list[i].d + '","input_ratio":"' + list[i].e + '","spend":"' + list[i].f + '"}';
            if (i < list.length) {
                word += str + ","
            } else {
                word += str
            }
        }
        word = "data={" + word + "}";
        var theUrl = uploadData.hostUrl + "word/backups_word?";
        var tokenStr = "member_id=" + user_member_id + "&member_name=" + user_name + "&shop_id=" + user_shop_id + uploadData.safeKey;
        theUrl += "member_id=" + user_member_id + "&member_name=" + user_name + "&shop_id=" + user_shop_id + "&token=" + MD5(tokenStr);
        bg.postMessage({
            act: "post",
            url: theUrl,
            data: word,
            other: {
                type: "sub_reBack_3"
            },
            cb: "reBack.goon"
        })
    },
    goon: function(JHtml) {}
};

//

//were debug value 
var reBack = {
    safeKey: "mbRTLDR4c1X3BUih",
    hostUrl: ccy_host,
    doing: function() {
        for (var i = 0; i < comm_list.length; i++) {
            reBack.action(comm_list[i])
        }
    },
    action: function(item) {
        var now_day = makeDate(0);
        var pass_day = makeDate(-7);
        var referStr = "/tools/insight/queryresult?kws=" + item.normalWord + "&tab=tabs-bidwords&start=" + pass_day + "&end=" + now_day;
        var dara = "sla=json&isAjaxRequest=true&token=" + comm_token + "&_referer=" + encodeURIComponent(referStr);
        var theUrl = "https://subway.simba.taobao.com/report/getMarketAnalysis.htm?bidwordstr=" + encodeURIComponent('["' + item.normalWord + '"]') + "&startDate=" + pass_day + "&endDate=" + now_day;
        bg.postMessage({
            act: "post",
            url: theUrl,
            data: dara,
            other: {
                type: "sub_reBack_1",
                keyname: item.normalWord
            },
            cb: "reBack.work"
        })
    },
    work: function(JHtml, Obj) {
        var jsonp = eval("(" + JHtml + ")");
        var t_name = Obj.keyname;
        try {
            var tArray = jsonp.result;
            var bArray = tArray[0].inRecordBaseDTOList;
            var impress = 0;
            var clickrate = 0;
            for (var i = 0; i < bArray.length; i++) {
                if (bArray[i].impression != null) {
                    impress += parseFloat(bArray[i].impression)
                }
                if (bArray[i].ctr != null) {
                    clickrate += parseFloat(bArray[i].ctr)
                }
            }
            impress = Math.ceil(impress / bArray.length);
            clickrate = (clickrate / bArray.length / 100).toFixed(2);
            var postdata = "word=" + t_name + "&impress=" + impress + "&ctv=" + clickrate;
            if (isNaN(impress) || isNaN(clickrate)) {
                var postdata = "word=" + t_name + "&impress=0&ctv=0"
            }
            reBack.job(postdata)
        } catch (e) {}
    },
    job: function(postdata) {
        var theUrl = reBack.hostUrl + "adapi/getword?";
        var tokenStr = reBack.safeKey;
        theUrl += "token=" + MD5(tokenStr);
        bg.postMessage({
            act: "post",
            url: theUrl,
            data: postdata,
            other: {
                type: "sub_reBack_2"
            },
            cb: "reBack.goon"
        })
    },
    goon: function(JHtml) {}
};
//login
var loginIn = {
    safeKey: "mbRTLDR4c1X3BUih",
    hostUrl: ccy_host,
    doing: function() {
        var loginUrl = loginIn.hostUrl + "adapi/login?";
        var fromWhere = false;
        var user = getUserByStore();
        if (user == null) {
            user = getUserByInput();
            fromWhere = true
        }
        if (user != null) {
            setUserInfo(user.id, user.pwd);
            var username = user.id;
            var password = user.pwd;
            var timeline = Date.parse(new Date()) / 1e3;
            var tokenStr = "username=" + username + "&password=" + MD5(password) + "&software=card1&version=" + comm_ver + "&timeline=" + timeline + loginIn.safeKey;
            loginUrl += "username=" + username + "&password=" + MD5(password) + "&software=card1&version=" + comm_ver + "&timeline=" + timeline + "&token=" + MD5(tokenStr);
            bg.postMessage({
                act: "get",
                url: loginUrl,
                other: {
                    type: "loginIn_1",
                    where: fromWhere
                },
                cb: "loginIn.work"
            })
        }
    },
    work: function(JHtml, Obj) {
        var isFromInput = Obj.where;
        var jsonp = eval("(" + JHtml + ")");
        var reValue = jsonp.
        return;
        if (reValue > 0) {
            if (isFromInput) {
                alert("深度学习广告提醒您：登陆错误原因是" + jsonp.result)
            }
            setLoginStatus(false);
            setUserInfo("", "")
        } else {
            var severTime = parseInt(jsonp.servtime);
            var locatTime = parseInt(timeStamp());
            if (Math.abs(severTime - locatTime) > 600) {
                alert("深度学习广告提醒您：你的电脑时间不正确，请修改本地时间。");
                setLoginStatus(false);
                isLogin = false
            } else {
                var memberid = jsonp.result.member_id;
                user_member_id = memberid;
                user_name = jsonp.result.member_name;
                setLoginStatus(true);
                isLogin = true;
                setTimeout("loginedOperate.getshopid_doing()", 500)
            }
        }
    }
};
//out
var loginOut = {
    doing: function() {
        setStoreKeys("username", "");
        setStoreKeys("password", "");
        setStoreKeys("isLogin", false);
        setTimeout("myrefresh()", 500)
    }
};

var beforeLogin = {
    safeKey: "mbRTLDR4c1X3BUih",
    hostUrl: ccy_host,
    getAD_doing: function() {
        var adUrl = beforeLogin.hostUrl + "adapi/advert?";
        var tokenStr = beforeLogin.safeKey;
        adUrl += "token=" + MD5(tokenStr);
        bg.postMessage({
            act: "get",
            url: adUrl,
            other: {type: "ad_1"},
            cb: "beforeLogin.getAD_work"
        })
    },
//from getAD_doing to getAD_work
    getAD_work: function(JHtml) {
        var jsonp = eval("(" + JHtml + ")");
        var list = new Array();
        for (var i in jsonp) {
            var obj = new Object();
            obj.id = jsonp[i].id;
            obj.key = jsonp[i].key;
            obj.src = "http:" + jsonp[i].thumb;
            obj.link = jsonp[i].url;
            list.push(obj)
        }
        if (list.length > 0) {
            beforeLogin.getAD_after(list)
        }
    },
    getAD_after: function(list) {
        var ad_map = {};
        for (var i in list) {
            var html = adHtml.replace("#urlsrc#", list[i].src);
            html = html.replace("#urllink#", list[i].link);
            var key = list[i].key;
            ad_map[key] = html
        }
        if (srcurl.indexOf("taobao.com/search") > 0) {
            if ($("#imgAd").length <= 0) {
                $("#J_SiteNav").after(ad_map["ad2"]);
                $("#J_shopkeeper").before(ad_map["ztc"])
            }
        } else if (srcurl.indexOf("item.taobao.com/item.htm") > 0) {
            if ($("#imgAd").length <= 0) {
                $("#bd").before(ad_map["ad1"])
            }
        } else if (srcurl.indexOf("mai.taobao.com/seller_admin.htm") > 0) {
            if ($("#imgAd").length <= 0) {
                $("#page").before(ad_map["ad1"])
            }
        }
        if (srcurl.indexOf("subway.simba.taobao.com") > 0 && srcurl.indexOf("campaigns/standards/adgroups/items/detail") > 0) {
            if ($("#layer1").length <= 0) {
                getSubInfo.action();
                getVersion.doing();
                var html = "";
                for (var i in infoHtml) {
                    html += infoHtml[i]
                }
                $(".nav-tabs.clearfix.mt15").before(inHtml);
                //insert html values 
                loginHtml = loginHtml.replace("#version#", "v" + comm_ver);
                $(".top").after(loginHtml);
                $(".logtag").after(html);
                $(".ad-banner").replaceWith(ad_map["newver"]);
                LoginbindBtnEvent();
                setTimeout("loginIn.doing()", 1e3)
            }
        }
    }
};
//new version method
function isNewVersion(a, b) {
    var as = a.split(".");
    var bs = b.split(".");
    var isNew = false;
    for (var i in as) {
        if (parseInt(as[i]) != parseInt(bs[i])) {
            if (parseInt(as[i]) > parseInt(bs[i])) {
                isNew = true;
                break
            }
        }
    }
    return isNew
}

var getVersion = {
    HostUrl: ccy_host,
    versionInfo: '<span class="msg3" onclick="window.open(&quot;http://www.zhess.com/static/autoad.crx&quot;)">有新版本，点击下载</span>',
    doing: function() {
        var Versionurl = getVersion.HostUrl + "adapi/versionlast";
        bg.postMessage({
            act: "get",
            url: Versionurl,
            other: {
                type: "getVersion_1"
            },
            cb: "getVersion.work"
        })
    },
    work: function(JHtml) {
        try {
            var jsonp = eval("(" + JHtml + ")");
            //version different
            if (isNewVersion(jsonp.version, comm_ver)) {
                $("#VersionInfo").html(getVersion.versionInfo)
            }
        } catch (e) {}
    }
};
var btnPower = {
    safeKey: "mbRTLDR4c1X3BUih",
    hostUrl: ccy_host,
    doing: function() {
        memberid = user_member_id;
        shopid = user_shop_id;
        var powerUrl = btnPower.hostUrl + "adapi/stat?";
        var tokenStr = loginIn.safeKey;
        powerUrl += "token=" + MD5(tokenStr);
        var dara = "member_id=" + memberid + "&shop_id=" + shopid;
        bg.postMessage({
            act: "post",
            url: powerUrl,
            data: dara,
            other: {
                type: "btnPower_1"
            },
            cb: "btnPower.work"
        })
    },
    work: function(JHtml) {
        if (typeof JHtml == "undefined" || JHtml == "") {} else {
            var jsonp = eval("(" + JHtml + ")");
            var re = jsonp.
            return;
            if (re == 0) {
                getAvgData.doing()
            } else {
                alert("深度学习广告提醒您：" + jsonp.result)
            }
        }
    }
};
//get date
var getIndustryData = {
    safeKey: "mbRTLDR4c1X3BUih",
    hostUrl: ccy_host,
    doing: function(a, b, c, d, e) {
        memberid = user_member_id;
        shopid = user_shop_id;
        var dataUrl = getIndustryData.hostUrl + "adapi/getdata?";
        var tokenStr = getIndustryData.safeKey;
        dataUrl += "token=" + MD5(tokenStr);
        var dara = "member_id=" + memberid + "&shop_id=" + shopid + "&click=" + a + "&ctr=" + b + "&cpc=" + c + "&cost=" + d + "&impress=" + e;
        bg.postMessage({
            act: "post",
            url: dataUrl,
            data: dara,
            other: {
                type: "sub_data_1"
            },
            cb: "getIndustryData.work"
        })
    },
    work: function(JHtml) {}
};
var flag_shop = false;
//
var dictWord = {
    hostUrl: ccy_host,
    doing: function(word) {
        var url = dictWord.hostUrl + "adapi/keywords?text=" + encodeURIComponent(word);
        bg.postMessage({
            act: "get",
            url: url,
            other: {
                type: "sub_dictWord"
            },
            cb: "dictWord.work"
        })
    },
    work: function(JHtml) {
        var jsonp = eval("(" + JHtml + ")");
        return jsonp.words
    }
};

function DateDiff(sDate1, sDate2) {
    var sDate = sDate1.getTime() - sDate2.getTime();
    return Math.floor(sDate / (24 * 3600 * 1e3)) + 1
}
var bindShop = {
    safeKey: "mbRTLDR4c1X3BUih",
    hostUrl: ccy_host,
    doing: function() {
        var blocktext = $(".adgroup-details-text").html();
        var reg = /http.*?[&|?]id=(\d+)/g;
        var goodurl = RegexItem(blocktext, reg, 0);
        var memberid = user_member_id;
        var membername = user_name;
        var bindUrl = bindShop.hostUrl + "adapi/binding?";
        var tokenStr = bindShop.safeKey;
        bindUrl += "token=" + MD5(tokenStr);
        var dara = "url=" + encodeURIComponent(goodurl) + "&member_id=" + memberid + "&member_name=" + membername;
        bg.postMessage({
            act: "post",
            url: bindUrl,
            data: dara,
            other: {
                type: "bindShop_1"
            },
            cb: "bindShop.work"
        })
    },
    work: function(JHtml) {
        var jsonp = eval("(" + JHtml + ")");
        var re = jsonp.
        return;
        if (re != 0) {
            alert("深度学习广告提醒您：" + jsonp.result)
        } else {
            alert("深度学习广告提醒您：您的店铺已经绑定成功！");
            setTimeout("myrefresh()", 500)
        }
    }
};
var powerArray = new Array();
var loginedOperate = {
    usermessage_1: '<button id="btn_binde" class="msg1">您还未绑定店铺，请点击绑定</button>',
    usermessage_2: '<span class="msg2" onclick="window.open(&quot;http://www.zhess.com/&quot;)">您还可以提升为更高等级权限，点此购买更高版本</span>',
    safeKey: "mbRTLDR4c1X3BUih",
    hostUrl: ccy_host,
    getshopid_doing: function(JHtml) {
        var blocktext = $(".adgroup-details-text").html();
        var reg = /http.*?[&|?]id=(\d+)/g;
        var goodurl = RegexItem(blocktext, reg, 0);
        var timeline = Date.parse(new Date()) / 1e3;
        var queryurl = loginedOperate.hostUrl + "adapi/getshop?";
        var tokenStr = "beattime=" + timeline + "&software=card1&url=";
        queryurl += tokenStr + encodeURIComponent(goodurl) + "&token=" + MD5(tokenStr + goodurl + loginedOperate.safeKey);
        bg.postMessage({
            act: "get",
            url: queryurl,
            other: {
                type: "loginedOperate_1"
            },
            cb: "loginedOperate.getshopid_work"
        })
    },
    getshopid_work: function(JHtml) {
        var jsonp = eval("(" + JHtml + ")");
        var reValue = jsonp.
        return;
        if (reValue == 0) {
            var shopid = jsonp.result.shop_id;
            user_shop_id = shopid;
            loginedOperate.getshopstatus_doing(shopid)
        } else {
            flag_shop = false
        }
    },
    getshopstatus_doing: function(shop_id) {
        var shopUrl = loginedOperate.hostUrl + "adapi/clientstorestore?";
        var timeline = Date.parse(new Date()) / 1e3;
        var tokenStr = "memberid=" + user_member_id + "&software=card1" + "&beattime=" + timeline;
        shopUrl += tokenStr + "&token=" + MD5(tokenStr + loginedOperate.safeKey);
        bg.postMessage({
            act: "get",
            url: shopUrl,
            other: {
                type: "loginedOperate_2",
                shopid: shop_id
            },
            cb: "loginedOperate.getshopstatus_work"
        })
    },
    getshopstatus_work: function(JHtml, Obj) {
        var shop_id = Obj.shopid;
        var jsonp = eval("(" + JHtml + ")");
        var reValue = jsonp.
        return;
        if (jsonp.result.length == 0) {
            flag_shop = false;
            loginedOperate.getshoppower_doing(null, shop_id)
        } else {
            var index = findElem(jsonp.result, "shop_id", shop_id);
            if (index == -1) {
                flag_shop = false;
                loginedOperate.getshoppower_doing(null, shop_id)
            } else {
                flag_shop = true;
                var item = jsonp.result[index];
                var timeline = "" + item.validity + "000";
                var stime = DateDiff(new Date(parseInt(timeline)), new Date());
                loginedOperate.getshoppower_doing(stime, shop_id)
            }
        }
    },
    getshoppower_doing: function(sTime, shopid) {
        var powerUrl = loginedOperate.hostUrl + "adapi/package?";
        var tokenStr = loginedOperate.safeKey;
        powerUrl += "token=" + MD5(tokenStr);
        var dara = "member_id=" + user_member_id + "&shop_id=" + shopid;
        bg.postMessage({
            act: "post",
            url: powerUrl,
            data: dara,
            other: {
                type: "loginedOperate_3",
                stime: sTime
            },
            cb: "loginedOperate.getshoppower_work"
        })
    },
    getshoppower_work: function(JHtml, Obj) {
        var sTime = Obj.stime;
        var jsonp = eval("(" + JHtml + ")");
        try {
            var reValue = jsonp.
            return;
            var html = statusHtml;
            if (typeof reValue != "undefined") {
                $("#MsgtoUser").html(loginedOperate.usermessage_1);
                html = html.replace("#leftdays#", "");
                html = html.replace("#username#", user_name);
                html = html.replace("#userpower#", "您的店铺还未绑定，请先点击上面红色按钮绑定店铺");
                html = html.replace("#version#", "v" + comm_ver)
            } else {
                var softname = jsonp.name;
                if (softname == "标准版") {
                    $("#MsgtoUser").html(loginedOperate.usermessage_2);
                    html = html.replace("#leftdays#", "剩余时长：" + sTime + "天");
                    html = html.replace("#username#", user_name);
                    html = html.replace("#userpower#", "软件版本：" + softname);
                    html = html.replace("#version#", "v" + comm_ver)
                } else if (softname == "专业版") {
                    html = html.replace("#leftdays#", "剩余时长：" + sTime + "天");
                    html = html.replace("#username#", user_name);
                    html = html.replace("#userpower#", "软件版本：" + softname);
                    html = html.replace("#version#", "v" + comm_ver)
                } else {
                    $("#MsgtoUser").html(loginedOperate.usermessage_2);
                    html = html.replace("#leftdays#", "");
                    html = html.replace("#username#", user_name);
                    html = html.replace("#userpower#", "软件版本：" + softname);
                    html = html.replace("#version#", "v" + comm_ver)
                }
            }
            $(".logtag").replaceWith(html);
            loginedOperate.initDetion();
            var products = jsonp.product;
            if (products.length > 0) {
                powerArray = products
            }
            var tradeData = jsonp.data;
            if (tradeData != false) {
                $("#avgClick").text(tradeData.click + "%");
                $("#avgClickNum").text(tradeData.ctr);
                $("#avgConver").text(tradeData.cpc + "%");
                $("#avgCost").text("￥" + tradeData.cost);
                $("#avgImpress").text(tradeData.impress)
            }
        } catch (e) {
            console.log("权限管理出错")
        }
    },
    initDetion: function() {
        getPlanInfo.preper()
    }
};