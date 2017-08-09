if (!chrome.cookies) {
    chrome.cookies = chrome.experimental.cookies;
}
function getAjax(b, a) {
    var c = new XMLHttpRequest();
    c.open("GET", b, true);
    c.onreadystatechange = function () {
        if (c.readyState == 4) { msg_cache = c.responseText; a(c.responseText); }
    };
    c.send();
}
function postAjax(b, c, a) {
    var d = new XMLHttpRequest();
    d.open("POST", b, true);
    d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    d.onreadystatechange = function () {
        if (d.readyState == 4) {
            msg_cache = d.responseText; a(d.responseText);
        }
    };
    d.send(c);
}
chrome.extension.onConnect.addListener(function (a) {
    a.onMessage.addListener(function (b) {
        if (b.act == "get") {
            getAjax(b.url, function (c) {
                a.postMessage({
                    content: {
                        data: c,
                        other: b.other
                    },
                    cb: b.cb
                });
            });
        } else
            if (b.act == "post") {
                postAjax(b.url, b.data, function (c) {
                    a.postMessage({
                        content: {
                            data: c,
                            other: b.other
                        },
                        cb: b.cb
                    });
                });
        }
    });
});