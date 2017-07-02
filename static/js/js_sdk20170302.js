function is_kingkr_obj() {
    var type = sdk_judge();
    if (type.ios == true) {
        if (typeof window.webkit == 'undefined' || typeof window.webkit.messageHandlers.local_kingkr_obj == 'undefined') {
            return false
        } else {
            return true
        }
    }else{ 
        if (typeof local_kingkr_obj == 'undefined') {
            return false
        } else {
            return true
        }
    }
}
function share(){
    switch(arguments[0]){
        case 'share':
            shareOnly(arguments[1],arguments[2],arguments[3],arguments[4]); 
        break;
        case 'image':
            shareImage(arguments[1]);
        break;
        case 'screenshot':
            shareCutImage();
        break;
        default:
            shareOnly(arguments[0],arguments[1],arguments[2],arguments[3]); 
        break;
    }
}
function shareOnly(content, imageurl, targetUrl, title) {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        var message = { 'methodName' : 'share', 'content': content,'imageurl': imageurl,'targetUrl': targetUrl,'title': title, 'callbackMethod': 'shareCallback' };
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    }else{
        var share = "{\"content\":\"" + content + "\",\"imageurl\": \"" + imageurl + "\",\"targetUrl\": \"" + targetUrl + "\",\"title\": \"" + title + "\"}";
        local_kingkr_obj.share(share)
    }
}
function shareImage(imageurl) {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        var message = { 'methodName' : 'shareImage', 'imageurl': imageurl, 'callbackMethod': 'shareCallback' };
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    }else{
        var share = "{\"content\":\"\",\"imageurl\": \"" + imageurl + "\",\"targetUrl\": \"\",\"title\": \"\"}";
        local_kingkr_obj.shareImage(share)
    }
}
function shareCutImage() {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        var message = { 'methodName' : 'shareCutImage', 'callbackMethod': 'shareCallback' };
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    }else{
        var share = "{\"content\":\"\",\"imageurl\": \"\",\"targetUrl\": \"\",\"title\": \"\"}";
        local_kingkr_obj.shareCutImage(share)
    }
}
function openDownLoad() {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        
    }else{
        local_kingkr_obj.openDownLoadFile();
    }
}
function downloadFile(url){
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        
    }else{
        local_kingkr_obj.downloadFile(url);
    }
}
function login(platform, forwardurl, callbackMethod) {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        var message ={'methodName':'login','platform':platform,'forwardurl':forwardurl,'callbackMethod':callbackMethod};
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    }else{
        var login = "{\"platform\":\"" + platform + "\",\"forwardurl\":\"" + forwardurl + "\",\"callbackMethod\":\"" + callbackMethod + "\"}";
        local_kingkr_obj.login(login)
    }
}
function payType(order,paytype,callbackMethod) {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        var message = {'methodName':'pay','order':order,'paytype':paytype,'callbackMethod':callbackMethod};
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    }else{
        var payType = '{"paytype":\"' + paytype + '\","callbackMethod":\"' + callbackMethod + '\"}';
        local_kingkr_obj.payType(order, payType)
    }
}
function audioPlay(operator) {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        
    }else{
        var data = "{\"operator\":" + operator + "}";
        local_kingkr_obj.audioPlay(data);
    }
}
function qrcode() {
    if(!sdk_checkinside())return false;
    var resulttype = 1;
    if(arguments[0] != null)
        resulttype = arguments[0];
    type = sdk_judge();
    if (type.ios == true) {
        var message = {'methodName':'qrcoder','controlQRCodeResult':resulttype,'callbackMethod':'qrcodeCallback'};
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    }else{
        local_kingkr_obj.qrcoderWithCallback(resulttype);
    }
}
function cleanCache() {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        var message = {'methodName': 'cleancache'};
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    } else {
        local_kingkr_obj.cleanCache();
    }
}
function controlBottomTabLayout(param) {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        if(param == null)
            var message = {'methodName':'controlBottomTabLayout'};
        else
            var message = {'methodName':'controlBottomTabLayout','show':''+param+''};
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    } else {
        if(param == null)
            param = '';
        local_kingkr_obj.controlBottomTabLayout(param);
    }
}
function controllNavigateLayout(param) {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        if(param == null)
            var message = {'methodName':'controllNavigateLayout'};
        else
            var message = {'methodName':'controllNavigateLayout','show':''+param+''};
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    } else {
        if(param == null)
            param = '';
        local_kingkr_obj.controlNavigatorLayout(param);
    }
}
function controlLeftMenuLayout(state) {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        var message = {'methodName':'controlLeftMenuLayout','show':state};
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    } else {
        local_kingkr_obj.controlLeftMenuLayout(state);
    }
}
function getDeviceIdentifier(callbackMethod) {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        var message = {'methodName':'getDeviceIdentifier','callbackMethod':callbackMethod};
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    }else{
        local_kingkr_obj.getDeviceIndentify(callbackMethod);
    }
}
function setScreenOrientation(orientation) {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        var message = {'methodName':'setScreenOrientation','orientation':orientation};
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    }else{
        local_kingkr_obj.setScreenOrientation(orientation);
    }
}
function copyUrlToClipboard() {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        var message = {'methodName':'copyUrlToClipboard'};
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    }else{
        local_kingkr_obj.clipboardManager();
    }
}
function awakeOtherBrowser(url) {
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        if(url == ''){
            var message = {'methodName':'awakeOtherWebview'}
            window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
        }else{
            var message = {'methodName':'awakeOtherWebview','webviewUrl':url}
            window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
        } 
    }else{
        local_kingkr_obj.awakeOtherWebview(url);
    }
}
function registerPushTag(tag,callbackmethod)
{
    if(tag == ''){
        return false;
    }
    tag = tag.split(',');
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        var message = { 'methodName' : 'registerPushTag', 'tag':tag,'callbackMethod':callbackmethod};
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    }else{
        var message = "{'tag':"+JSON.stringify(tag)+",'callbackMethod':"+callbackmethod+"}";
        local_kingkr_obj.registerPushTag(message);
    }
}
function getBuild(){
    type = sdk_judge();
    if (type.ios == true) {
        var message = {'methodName':'getBuild','callbackMethod':'getBuildResult'}
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    }else{
        var b = local_kingkr_obj.getBuild();
        alert(b);
    }
}
function getBuildResult(buildVersion)
{
    alert(buildVersion);
}
function sdk_judge() {
    var u = navigator.userAgent;
    return {
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
    }
}
function sdk_checkinside(){
    if(!is_kingkr_obj()){
        alert("请在App内打开");
        return false;
    }
    return true;
}
function getLocation(callbackMethod){
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        var message = {'methodName':'getLocation','callbackMethod':callbackMethod}
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    }else{
        local_kingkr_obj.getLocation(callbackMethod);
    }
}
function copyText(txt){
    if(!sdk_checkinside())return false;
    type = sdk_judge();
    if (type.ios == true) {
        var message = {'methodName':'copyText','content':txt};
        window.webkit.messageHandlers.local_kingkr_obj.postMessage(message);
    }else{
        local_kingkr_obj.copyText(txt);
    }
}
