var H = wx.$F;
//  window["loginType"] = 0;////测试 0=测试 1 正式
//拉取服务器列表
// window["serviceListdUrl"]="http://123.206.107.182:2350/getList/";
// //保存最近登录
//  window["setServiceListdUrl"] = "http://123.206.107.182:2350/saveList/";;
// window["serviceUrl"]="http://118.89.113.179:2345/";
// window["serviceYxdUrl"]="http://118.89.113.179:2345/";
// window["serviceUrl"]="http://192.168.6.114:2345/";
// window["serviceYxdUrl"]="http://192.168.6.114:2345/";
window["pf"] = parent.pf; ////测试
window["pt"] = parent.pt; ////测试
window["serviceListdUrl"] = parent.serviceListdUrl; ////测试
window["setServiceListdUrl"] = parent.setServiceListdUrl; ////测试
window["loginType"] = parent.loginType; ////测试 0=测试 1 正式
//是否显示公告
window["isShowNotice"] = parent.isShowNotice;
//是否自动打开公告
window["isAutoOpenNotice"] = parent.isAutoOpenNotice;
//要显示的公告序号
window["openNoticeTitle"] = parent.openNoticeTitle;
window["ReportVersion"] = parent.ReportVersion;
window["Report"] = parent.Report;
var str = window.location.search;
if (str && str.indexOf("?") != -1) {
    str = str.substr(1);
    // window['userData']=str.split("&");
    var strs = str.split("&");
    var objDat = {};
    for (var i = 0; i < strs.length; i++) {
        objDat[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
    window['userData'] = objDat;
} else {
    window['userData'] = null;
}

function start(param) {
    // param="http://127.0.0.1:5327/serverList.html?srvid=6&serverid=6&srvaddr=192.168.6.114&srvport=9001&egretWidth=777&egretHeight=1009&orientation=portrait&scaleMode=showAll&user=flk01"//+param//内网
    // param="http://127.0.0.1:5327/serverList.html?srvid=6&serverid=6&srvaddr=118.89.113.179&srvport=9001&egretWidth=777&egretHeight=1009&orientation=portrait&scaleMode=showAll&user="+param //外网
    //param="http://127.0.0.1:5327/serverList.html?srvid=6&serverid=6&srvaddr=192.168.6.147&srvport=9001&egretWidth=777&egretHeight=1009&orientation=portrait&scaleMode=showAll&user=cehua1";//+param//Linux内网
    // window.parent.postMessage(
    //     param
    //     , "*")
    parent.start(param);
}
function onSelectServer(param) {
    parent.onSelectServer(param);
}
function Login(param) {
    parent.Login(param);
}
function onClickLogin(param) {
    parent.onClickLogin(param);
}
function LoginFunction(param) {
    Main.init.LoginFunction(param);
}
function showLoginButton() {
    Main.init.showLoginButton();
}
function showLoadProgress(progress, des) {
    Main.showLoadProgress(progress, des);
}
function reqHttpRequest(urlStr, callbackFunction) {
    Main.init.reqHttpRequest(urlStr, callbackFunction);
}

window.loginMinJs = require("./login.min.js");