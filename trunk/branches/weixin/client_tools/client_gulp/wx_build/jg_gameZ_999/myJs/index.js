﻿// var QuickSDK= window["QuickSDK"];
var __reflect = this && this.__reflect || function (t, r, h) { t.__class__ = r, h ? h.push(r) : h = [r], t.__types__ = t.__types__ ? h.concat(t.__types__) : h }, md5 = function () { function t() { this.hexcase = 0, this.b64pad = "" } return t.prototype.hex_md5 = function (t) { return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t))) }, t.prototype.b64_md5 = function (t) { return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t))) }, t.prototype.any_md5 = function (t, r) { return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), r) }, t.prototype.hex_hmac_md5 = function (t, r) { return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(r))) }, t.prototype.b64_hmac_md5 = function (t, r) { return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(r))) }, t.prototype.any_hmac_md5 = function (t, r, h) { return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(r)), h) }, t.prototype.md5_vm_test = function () { return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase() }, t.prototype.rstr_md5 = function (t) { return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length)) }, t.prototype.rstr_hmac_md5 = function (t, r) { var h = this.rstr2binl(t); h.length > 16 && (h = this.binl_md5(h, 8 * t.length)); for (var i = Array(16), s = Array(16), _ = 0; 16 > _; _++)i[_] = 909522486 ^ h[_], s[_] = 1549556828 ^ h[_]; var d = this.binl_md5(i.concat(this.rstr2binl(r)), 512 + 8 * r.length); return this.binl2rstr(this.binl_md5(s.concat(d), 640)) }, t.prototype.rstr2hex = function (t) { try { this.hexcase } catch (r) { this.hexcase = 0 } for (var h, i = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", s = "", _ = 0; _ < t.length; _++)h = t.charCodeAt(_), s += i.charAt(h >>> 4 & 15) + i.charAt(15 & h); return s }, t.prototype.rstr2b64 = function (t) { try { this.b64pad } catch (r) { this.b64pad = "" } for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = "", s = t.length, _ = 0; s > _; _ += 3)for (var d = t.charCodeAt(_) << 16 | (s > _ + 1 ? t.charCodeAt(_ + 1) << 8 : 0) | (s > _ + 2 ? t.charCodeAt(_ + 2) : 0), n = 0; 4 > n; n++)i += 8 * _ + 6 * n > 8 * t.length ? this.b64pad : h.charAt(d >>> 6 * (3 - n) & 63); return i }, t.prototype.rstr2any = function (t, r) { var h, i, s, _, d, n = r.length, e = Array(Math.ceil(t.length / 2)); for (h = 0; h < e.length; h++)e[h] = t.charCodeAt(2 * h) << 8 | t.charCodeAt(2 * h + 1); var o = Math.ceil(8 * t.length / (Math.log(r.length) / Math.log(2))), m = Array(o); for (i = 0; o > i; i++) { for (d = Array(), _ = 0, h = 0; h < e.length; h++)_ = (_ << 16) + e[h], s = Math.floor(_ / n), _ -= s * n, (d.length > 0 || s > 0) && (d[d.length] = s); m[i] = _, e = d } var f = ""; for (h = m.length - 1; h >= 0; h--)f += r.charAt(m[h]); return f }, t.prototype.str2rstr_utf8 = function (t) { for (var r, h, i = "", s = -1; ++s < t.length;)r = t.charCodeAt(s), h = s + 1 < t.length ? t.charCodeAt(s + 1) : 0, r >= 55296 && 56319 >= r && h >= 56320 && 57343 >= h && (r = 65536 + ((1023 & r) << 10) + (1023 & h), s++), 127 >= r ? i += String.fromCharCode(r) : 2047 >= r ? i += String.fromCharCode(192 | r >>> 6 & 31, 128 | 63 & r) : 65535 >= r ? i += String.fromCharCode(224 | r >>> 12 & 15, 128 | r >>> 6 & 63, 128 | 63 & r) : 2097151 >= r && (i += String.fromCharCode(240 | r >>> 18 & 7, 128 | r >>> 12 & 63, 128 | r >>> 6 & 63, 128 | 63 & r)); return i }, t.prototype.str2rstr_utf16le = function (t) { for (var r = "", h = 0; h < t.length; h++)r += String.fromCharCode(255 & t.charCodeAt(h), t.charCodeAt(h) >>> 8 & 255); return r }, t.prototype.str2rstr_utf16be = function (t) { for (var r = "", h = 0; h < t.length; h++)r += String.fromCharCode(t.charCodeAt(h) >>> 8 & 255, 255 & t.charCodeAt(h)); return r }, t.prototype.rstr2binl = function (t) { for (var r = Array(t.length >> 2), h = 0; h < r.length; h++)r[h] = 0; for (var h = 0; h < 8 * t.length; h += 8)r[h >> 5] |= (255 & t.charCodeAt(h / 8)) << h % 32; return r }, t.prototype.binl2rstr = function (t) { for (var r = "", h = 0; h < 32 * t.length; h += 8)r += String.fromCharCode(t[h >> 5] >>> h % 32 & 255); return r }, t.prototype.binl_md5 = function (t, r) { t[r >> 5] |= 128 << r % 32, t[(r + 64 >>> 9 << 4) + 14] = r; for (var h = 1732584193, i = -271733879, s = -1732584194, _ = 271733878, d = 0; d < t.length; d += 16) { var n = h, e = i, o = s, m = _; h = this.md5_ff(h, i, s, _, t[d + 0], 7, -680876936), _ = this.md5_ff(_, h, i, s, t[d + 1], 12, -389564586), s = this.md5_ff(s, _, h, i, t[d + 2], 17, 606105819), i = this.md5_ff(i, s, _, h, t[d + 3], 22, -1044525330), h = this.md5_ff(h, i, s, _, t[d + 4], 7, -176418897), _ = this.md5_ff(_, h, i, s, t[d + 5], 12, 1200080426), s = this.md5_ff(s, _, h, i, t[d + 6], 17, -1473231341), i = this.md5_ff(i, s, _, h, t[d + 7], 22, -45705983), h = this.md5_ff(h, i, s, _, t[d + 8], 7, 1770035416), _ = this.md5_ff(_, h, i, s, t[d + 9], 12, -1958414417), s = this.md5_ff(s, _, h, i, t[d + 10], 17, -42063), i = this.md5_ff(i, s, _, h, t[d + 11], 22, -1990404162), h = this.md5_ff(h, i, s, _, t[d + 12], 7, 1804603682), _ = this.md5_ff(_, h, i, s, t[d + 13], 12, -40341101), s = this.md5_ff(s, _, h, i, t[d + 14], 17, -1502002290), i = this.md5_ff(i, s, _, h, t[d + 15], 22, 1236535329), h = this.md5_gg(h, i, s, _, t[d + 1], 5, -165796510), _ = this.md5_gg(_, h, i, s, t[d + 6], 9, -1069501632), s = this.md5_gg(s, _, h, i, t[d + 11], 14, 643717713), i = this.md5_gg(i, s, _, h, t[d + 0], 20, -373897302), h = this.md5_gg(h, i, s, _, t[d + 5], 5, -701558691), _ = this.md5_gg(_, h, i, s, t[d + 10], 9, 38016083), s = this.md5_gg(s, _, h, i, t[d + 15], 14, -660478335), i = this.md5_gg(i, s, _, h, t[d + 4], 20, -405537848), h = this.md5_gg(h, i, s, _, t[d + 9], 5, 568446438), _ = this.md5_gg(_, h, i, s, t[d + 14], 9, -1019803690), s = this.md5_gg(s, _, h, i, t[d + 3], 14, -187363961), i = this.md5_gg(i, s, _, h, t[d + 8], 20, 1163531501), h = this.md5_gg(h, i, s, _, t[d + 13], 5, -1444681467), _ = this.md5_gg(_, h, i, s, t[d + 2], 9, -51403784), s = this.md5_gg(s, _, h, i, t[d + 7], 14, 1735328473), i = this.md5_gg(i, s, _, h, t[d + 12], 20, -1926607734), h = this.md5_hh(h, i, s, _, t[d + 5], 4, -378558), _ = this.md5_hh(_, h, i, s, t[d + 8], 11, -2022574463), s = this.md5_hh(s, _, h, i, t[d + 11], 16, 1839030562), i = this.md5_hh(i, s, _, h, t[d + 14], 23, -35309556), h = this.md5_hh(h, i, s, _, t[d + 1], 4, -1530992060), _ = this.md5_hh(_, h, i, s, t[d + 4], 11, 1272893353), s = this.md5_hh(s, _, h, i, t[d + 7], 16, -155497632), i = this.md5_hh(i, s, _, h, t[d + 10], 23, -1094730640), h = this.md5_hh(h, i, s, _, t[d + 13], 4, 681279174), _ = this.md5_hh(_, h, i, s, t[d + 0], 11, -358537222), s = this.md5_hh(s, _, h, i, t[d + 3], 16, -722521979), i = this.md5_hh(i, s, _, h, t[d + 6], 23, 76029189), h = this.md5_hh(h, i, s, _, t[d + 9], 4, -640364487), _ = this.md5_hh(_, h, i, s, t[d + 12], 11, -421815835), s = this.md5_hh(s, _, h, i, t[d + 15], 16, 530742520), i = this.md5_hh(i, s, _, h, t[d + 2], 23, -995338651), h = this.md5_ii(h, i, s, _, t[d + 0], 6, -198630844), _ = this.md5_ii(_, h, i, s, t[d + 7], 10, 1126891415), s = this.md5_ii(s, _, h, i, t[d + 14], 15, -1416354905), i = this.md5_ii(i, s, _, h, t[d + 5], 21, -57434055), h = this.md5_ii(h, i, s, _, t[d + 12], 6, 1700485571), _ = this.md5_ii(_, h, i, s, t[d + 3], 10, -1894986606), s = this.md5_ii(s, _, h, i, t[d + 10], 15, -1051523), i = this.md5_ii(i, s, _, h, t[d + 1], 21, -2054922799), h = this.md5_ii(h, i, s, _, t[d + 8], 6, 1873313359), _ = this.md5_ii(_, h, i, s, t[d + 15], 10, -30611744), s = this.md5_ii(s, _, h, i, t[d + 6], 15, -1560198380), i = this.md5_ii(i, s, _, h, t[d + 13], 21, 1309151649), h = this.md5_ii(h, i, s, _, t[d + 4], 6, -145523070), _ = this.md5_ii(_, h, i, s, t[d + 11], 10, -1120210379), s = this.md5_ii(s, _, h, i, t[d + 2], 15, 718787259), i = this.md5_ii(i, s, _, h, t[d + 9], 21, -343485551), h = this.safe_add(h, n), i = this.safe_add(i, e), s = this.safe_add(s, o), _ = this.safe_add(_, m) } return [h, i, s, _] }, t.prototype.md5_cmn = function (t, r, h, i, s, _) { return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(r, t), this.safe_add(i, _)), s), h) }, t.prototype.md5_ff = function (t, r, h, i, s, _, d) { return this.md5_cmn(r & h | ~r & i, t, r, s, _, d) }, t.prototype.md5_gg = function (t, r, h, i, s, _, d) { return this.md5_cmn(r & i | h & ~i, t, r, s, _, d) }, t.prototype.md5_hh = function (t, r, h, i, s, _, d) { return this.md5_cmn(r ^ h ^ i, t, r, s, _, d) }, t.prototype.md5_ii = function (t, r, h, i, s, _, d) { return this.md5_cmn(h ^ (r | ~i), t, r, s, _, d) }, t.prototype.safe_add = function (t, r) { var h = (65535 & t) + (65535 & r), i = (t >> 16) + (r >> 16) + (h >> 16); return i << 16 | 65535 & h }, t.prototype.bit_rol = function (t, r) { return t << r | t >>> 32 - r }, t } (); __reflect(md5.prototype, "md5");
//import QCSDK from '../js/7cwan_sdk'
import MYWXSDK from './myWXSDK'
//资源版本
window["resVersion"] = "?v=20191115";
window["thmVersion"] = "?v=20191115";
window["pf"] = "duiwai";////测试
window["Report"]=8;
window["ReportItemType"]=0;
window["platform"] = "quick";
 window["quanping"]=true;
//是否显示公告
window["isShowNotice"]=true;
//是否自动打开公告
window["isAutoOpenNotice"] = true;
window["fuliRedPoint"]=true;//福利按钮是否永久显示红点
window["gonggaoRedPoint"]=true;//公告红点
window["ishidePayorXfNum"]= true;//是否隐藏消费或充值排行的消费数量和充值数量
//要显示的公告序号
window["openNoticeTitle"]="notice3";
window["Report"] = "208";
window["ReportVersion"]="著作权人：滁州好游网络科技开发有限公司\n出版单位：北京艺术与科学电子出版社\n批准文号：新广出审[2015]1424号\n出版物号：ISBN 978-7-89988-598-7";
window['game_notice']='';
//拉取服务器列表
window["serviceListdUrl"] = "https://api.k1.5tun.cn/server_list_s1/Serverlist.php";
//保存最近登录
window["setServiceListdUrl"] = "https://api.k1.5tun.cn/server_list_s1/Serverlist.php";
//订单号
//window["orderUrl"] = "http://h5zzbtws.988973.com/order.php";
window["orderUrl"] = "https://api.k1.5tun.cn/ziwanOrder.php";
window["rechargeUrl"] = "http://123.207.58.13:81/test/recharge.php";

window["myresroot"] = "https://static.k1.5tun.cn";
window["noticeUrl"] = "https://api.k1.5tun.cn/notice.php?pfrom_id=";

var urlData = window.location.search; //获取url中"?"符后的字串
if (urlData && urlData.indexOf("?") != -1) {
    urlData = urlData.substr(1);
    // window['userData']=str.split("&");
    var strs = urlData.split("&");
    var objDat = {};
    for (var i = 0; i < strs.length; i++) {
        objDat[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
    window['userData'] = objDat;
} else {
    window['userData'] = null;
}
//document.getElementById("mainDiv").innerHTML = '<iframe id="paramIframe" style="border: 0px; width: 100%;height: 99%;"src="./indexlogin.html?v=10412"></iframe>';
//document.getElementById().innerHTML = '<iframe id="paramIframe" style="border: 0px; width: 100%;height: 99%;"src="./indexlogin.html?v=10412"></iframe>';
window.addEventListener("onmessage", function (event) {
    start(event.data);
});

function onSelectServer(obj){

}

function showRecharge(orderInfo) { 
    orderInfo['rate'] =500;
    var orderStr = "金额:"+orderInfo['amount']+"元\n商品:"+orderInfo['subject']+"\n描述:"+orderInfo['desc']+"\n数据:"+JSON.stringify(orderInfo);
    
	if(window['wx']) //wxgame
	{
		MYWXSDK.pay(orderInfo,null);
	}
	else
	{
		if (confirm(orderStr)) {
			httpGet(window["rechargeUrl"] +"?data="+JSON.stringify(orderInfo));
		}  
		else {  
			  
		}  
	}
}
window['showRecharge'] = showRecharge;

function checkMsg(data,callback)
{
	MYWXSDK.checkMsg(data,callback);
}
window['checkMsg'] = checkMsg;


function Login() {
    var pIframe = document.getElementById("paramIframe");
    if (pIframe) {
        var LoginFunction = pIframe.contentWindow.LoginFunction;
        if (window["pf"] == "ydx") {
            LoginFunction(window['userData']);
        }
		 else if (window["pt"] == "soeasy") {//
            if (window['ZmSdk']) {
               this.parObj = window['ZmSdk'].getInstance().getUserInfo();
                if (this.parObj) {
                    LoginFunction({ openId: this.parObj['userdata']['uid'] });
                }
            }
        }
		else if(window["pt"] == "quickgame"){
            //请求quickgame信息
			var url = "http://h5zzbtws.988973.com/Quick_xzlc/quickcheck.php?token="+window['userData'].token+"&uid="+window['userData'].uid;
			console.log(url);
            httpGet(url,LoginFunction);

        }else if (window["platform"] == "quick") { //Quick登录
            var sdk = window["QuickSDK"];
            var productCode = '89726814652230298702487289419777';        //QuickSDK后台自动分配
            var productKey = '65034181';        //QuickSDK后台自动分配
            sdk.init(productCode, productKey, true);//授权

            // sdk.setSwitchAccountNotification(function (callbackData) {
            //     alert(callbackData);
            //     console.log('Game:切换帐号');
            //     window.location.reload();
            // });
            onClickLogin();
            sdk.setLogoutNotification(function (logoutObject) {
                // console.log('Game:玩家点击注销帐号');
                onClickLogin();
                // window.location.reload();
            }
            )

        } else {
            alert("暂无平台！")
        }
    }
	else if(window["wx"]) //wx game
	{
		MYWXSDK.login('',null);
	}
}
window["Login"] = Login;


function onClickLogin() {
    var pIframe = document.getElementById("paramIframe");
    if (pIframe) {
        var showLoginButton = pIframe.contentWindow.showLoginButton;
        if (showLoginButton) {
            showLoginButton();
        }
        var LoginFunction = pIframe.contentWindow.LoginFunction;
        var sdk = window["QuickSDK"];
        sdk.login(function (callbackData) {
            var message;
            if (callbackData.status) {
                message = 'GameDemo:QuickSDK登录成功: uid=>' + callbackData.data.uid;
                // window('userInfo') = callbackData.data;
                window['channelId'] = callbackData.data.channelId;
                //  alert(window['channelId']);
                LoginFunction({ openId: callbackData.data.uid });
                sdk.setLogoutNotification(function (logoutObject) {
                    // console.log('Game:玩家点击注销帐号');
                    window.location.reload();
                }
                )
            } else {
                message = 'GameDemo:QuickSDK登录失败:' + callbackData.data.message;
                // if (callbackData.data.message == "cancel") {
                //     //百度用户取消时，强制重新调用登录
                //     self.reqLogin();
                // }
            }
            console.log(message);
        })
    }
}
function paramInit(str) {
    var whIndex = str.indexOf("?");
    if (whIndex != -1) {
        var param = str.slice(whIndex + 1).split("&");
        var strArr;
        for (var i = 0; i < param.length; i++) {
            strArr = param[i].split("=");
            urlParam[strArr[0]] = strArr[1];
        }
    }
}


function showLoadProgress(progress, des) {
    var pIframe = document.getElementById("paramIframe");
    if (pIframe) {
        pIframe.contentWindow.showLoadProgress(progress, des);
    }
	else 
	{
		var selectServer = window.selectServer;
		if(selectServer)
			selectServer.showLoadProgress(progress, des);
	}
	//Main.showLoadProgress(progress, des);
}
window["showLoadProgress"] = showLoadProgress;

function showGame() {
    var pIframe = document.getElementById("paramIframe");
    if (pIframe) {
        document.getElementById("mainDiv").removeChild(pIframe)
    }
	else
	{
		if(window.selectServer && window.selectServer.parent)
		{
			var stage = window.selectServer.parent;
			stage.removeChild(window.selectServer);
			stage.removeChildAt(0);
			stage.getChildAt(1).touchEnabled = true;

			//stage.addEventListener(egret.TouchEvent.TOUCH_TAP, onButtonClick, stage);
			//function onButtonClick(e)
			//{
			//	console.log("点击");
			//}
		}
	}

}
window["showGame"] = showGame;

function stop() {
    return false;
}
window["stop"] = stop;
//右击
//document.oncontextmenu = stop;

window.onorientationchange = function (e) {
    // var d = document.getElementById("screenHint");
    // if (window.orientation == 180 || window.orientation == 0) {
    //     //竖屏状态
    //     d.style.display = "none";
    // }
    // if (window.orientation == 90 || window.orientation == -90) {
    //     //横屏状态
    //     d.style.display = "block";
    // }
}

function sdkInit(appid) {
}


function gameRoleInfo(roleInfo) {
    var sdk = window["QuickSDK"];
    if(sdk && sdk.uploadGameRoleInfo){
        var roleInfoJson = JSON.stringify(roleInfo);
        sdk.uploadGameRoleInfo(roleInfoJson, function (response) {

    });
    }
   
}
function showQrCode(use) {
}
window['showQrCode'] = showQrCode;
function connectError() {
}
window['connectError'] = connectError;
function closeSocket() {
    Main.closesocket();
}
window['closeSocket'] = closeSocket;
function checkAWY() {

}
window['checkAWY'] = checkAWY;
function reportSDK(str) {

}
window['reportSDK'] = reportSDK;
function showQRCode() {

}
window['showQRCode'] = showQRCode;
function isFocus() {

}
window['isFocus'] = isFocus;
function isShare() {

}
window['isShare'] = isShare;
function roleUp(obj) {

	if(window['wx']) //wxgame
	{
		obj['sendType'] = 2;
		MYWXSDK.logRoleInfo(obj,null);
	}
	else
	{
		if(window.jsbridge && window.jsbridge.roleUp){
			window.jsbridge.roleUp(JSON.stringify(obj)); 
		}                   
		else if(window.webkit != null && window.webkit.messageHandlers != null){
			window.webkit.messageHandlers.roleUp.postMessage(JSON.stringify(obj));
		}
	}
}
window['roleUp'] = roleUp;


function enterGame(obj) {
	if(window['wx']) //wxgame
	{
		obj['sendType'] = 1;
		MYWXSDK.logRoleInfo(obj,null);
	}
	else
	{
		if(window.jsbridge && window.jsbridge.enterGame){
			window.jsbridge.enterGame(JSON.stringify(obj)); 
		}                   
		else if(window.webkit != null && window.webkit.messageHandlers != null){
			window.webkit.messageHandlers.enterGame.postMessage(JSON.stringify(obj));
		}
	}
}
window['enterGame'] = enterGame;

function createRole(obj) {
	if(window['wx']) //wxgame
	{
		obj['sendType'] = 0;
		MYWXSDK.logRoleInfo(obj,null);
	}
	else
	{
		if(window.jsbridge && window.jsbridge.createRole){
			window.jsbridge.createRole(JSON.stringify(obj));
		}
		if(window.webkit != null && window.webkit.messageHandlers != null){
			window.webkit.messageHandlers.createRole.postMessage(JSON.stringify(obj));
		}	
	}
}
window['createRole'] = createRole;


function getVipInfo() {

}
window['getVipInfo'] = getVipInfo;
function isShowGameDesktop() {
}
window['isShowGameDesktop'] = isShowGameDesktop;
function saveGameDesktop() {
}
window['saveGameDesktop'] = saveGameDesktop;
function httpGet(url,LoginFunction){
   var httpReq = new XMLHttpRequest();
   httpReq.open('GET',url,true);
   httpReq.send();
   // httpReq.onreadystatechange = function (){
   //     if(httpReq.readyState==4&& httpReq.status==200){
   //         var json = httpReq.responseText;
   //         var paramOjb=JSON.parse(json);
          
   //         if(paramOjb && paramOjb["data"]){
   //              var sdk = window["QuickSDK"];
   //              var productCode = "52435347707145573673621502797783";        //QuickSDK后台自动分配
   //              var productKey = "93757234";        //QuickSDK后台自动分配
   //              if(paramOjb['data']['channelId']){
   //                   sdk.init(productCode, productKey, true,paramOjb['data']['channelId']);//授权
   //              }else{
   //                   sdk.init(productCode, productKey, true);//授权
   //              }
   //             //开始登陆
   //              LoginFunction({openId:paramOjb['data']['uid']});
   //         }

   //     }
   // }
}
function getClientVersion(callback) {
    if (callback) callback(0);
}
var loadScript = function (list, callback) {
    var loaded = 0;
    var loadNext = function () {
        loadSingleScript(list[loaded], function () {
            loaded++;
            if (loaded >= list.length) {
                callback();
            }
            else {
                loadNext();
            }
        })
    };
    loadNext();
};

var loadSingleScript = function (src, callback) {
    var s = document.createElement('script');
    s.async = false;
    s.src = src;
    s.addEventListener('load', function () {
        s.parentNode.removeChild(s);
        s.removeEventListener('load', arguments.callee, false);
        callback();
    }, false);
    document.body.appendChild(s);
};

function start(param) {
    window['paraUrl'] = param;
	egret.cleanCache();
	//var xhr = require('./main.js',function () {

	var mainJsUrl = '../myMainJs/main.min.js';
	if(window["wxdebug"] == 0)
		mainJsUrl = '../myDebugMainJs/main.js'
	var xhr = require(mainJsUrl,function () {
       //egret.runEgret({ renderMode: "webgl", audioType: 0 });
		egret.reInit();
		//var main = Main();
		//egret.MainContext.instance.stage.addChild(main);
		//console.log(egret.MainContext.instance.stage);

		//window.Main();
	}
	);
	//egret.runEgret({ renderMode: "webgl", audioType: 0 });
}
window["start"] = start;