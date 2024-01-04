var AKSDK = require("../wx_aksdk.js");
window.versions = {
  wxVersion: window.config.game_ver,
};


window.DEBUG = false;
window.PLATFORM = 5;
window.ENV = 8;
window.PACK = true;
window.WSS = true;
window.workerJsURL = "";
window.isWaiFangWx = false;
window.PF_INFO = {
  base_cdn: "https://cdn-tjqy.sh9130.com/weixin_0/",
  cdn: "https://cdn-tjqy.sh9130.com/weixin_0/",
}
PF_INFO.pay_infos = {}
PF_INFO.package = "0";
PF_INFO.version = window.versions.wxVersion;
PF_INFO.mac = "";
PF_INFO.os = "1";
PF_INFO.sdk_name = "9130";
PF_INFO.apiurl = "https://api-tjqytest.sh9130.com";
PF_INFO.logurl = "https://log-tjqytest.sh9130.com";
PF_INFO.payurl = "https://pay-tjqytest.sh9130.com";
PF_INFO.apikey = "MQx0mYlUWO5XYKvgAIPKWgK1w722GKih";
PF_INFO.partnerId = "1";
PF_INFO.pkgName = "";
PF_INFO.device_id = "";
PF_INFO.from_scene = 0;
PF_INFO.serverList = {};
PF_INFO.channelNum = parseInt(PF_INFO.partnerId);
PF_INFO.channel = PF_INFO.partnerId;
PF_INFO.selectedServer = {};


PF_INFO.showLogo = false;
PF_INFO.debugUsers = "39927500|58163716|74597555|172978096"; //平台账号
PF_INFO.tick = Date.now();

PF_INFO.configType = "_weixin";
PF_INFO.exposeType = "_a";
PF_INFO.encryptParam = "";
PF_INFO.loadingType = 1;
PF_INFO.lastVersion = 1985;
PF_INFO.wxVersion = window.versions.wxVersion;
PF_INFO.wxShield = false;
PF_INFO.wxIOS = false;
PF_INFO.wxAndroid = false;
PF_INFO.wxPC = false;

window.apiRetryAmount = 5;
window.isCheckBan = false;
window.loadProbPkg = false;
window.loadMainPkg = false;
window.loadServerRes = false;
window.loadLoadingRes = false;
window.loadVersion = false;
window.loadOption = false;
window.loadServer = false;

window.bEnterGame = false;
window.sdkInitRes = null;
window.isOpenLoading = false;



window.isShowLoading = false;





window.send = function (url, data, callBack, retryAmount, errorCB, checkSuccess, reqType, contentType) {
  if (retryAmount == undefined) retryAmount = 1;
  // if(url.indexOf("User.login")!=-1)
  // console.log("send:"+url)
  my.request({
    url: url,
    method: (reqType || "GET"),
    data: data,
    headers: {
      "content-type": (contentType || 'application/json'),
    },
    success: function (res) {
      if (res && res.status == 200) {
        var response = res.data;
        if (!checkSuccess || checkSuccess(response)) {
          if (callBack) {
            callBack(response);
          }
        } else {
          window.sendFail(url, data, callBack, retryAmount, errorCB, checkSuccess, res);
        }
      } else {
        window.sendFail(url, data, callBack, retryAmount, errorCB, checkSuccess, res);
      }
    },
    fail: function (res) {
      DEBUG && console.log("send.fail:", url, info, res);
      window.sendFail(url, data, callBack, retryAmount, errorCB, checkSuccess, res);
    },
    complete: function () { }
  });
}
window.sendFail = function (url, data, callBack, retryAmount, errorCB, checkSuccess, res) {
  if (retryAmount - 1 > 0) {
    setTimeout(function () {
      window.send(url, data, callBack, retryAmount - 1, errorCB, checkSuccess);
    }, 1000);
  } else {
    if (errorCB) {
      errorCB(JSON.stringify({
        url: url,
        response: res,
      }));
    }
  }
}

window.sendApi = function (apiurl, method, param, callBack, retryAmount, errorCB, checkSuccess) {
  if (!param) {
    param = {};
  }

  var now = Math.floor(Date.now() / 1000);
  param['time'] = now;
  param['method'] = method;

  var sortKeys = Object.keys(param).sort();
  var md5Str = '';
  var reqStr = '';
  for (var i = 0; i < sortKeys.length; i++) {
    md5Str = md5Str + (i == 0 ? '' : '&') + sortKeys[i] + param[sortKeys[i]];
    reqStr = reqStr + (i == 0 ? '' : '&') + sortKeys[i] + '=' + encodeURIComponent(param[sortKeys[i]]);
  }
  md5Str = md5Str + PF_INFO.apikey;

  var extendParam = 'sign=' + md5(md5Str);

  send(apiurl + '?' + reqStr + (reqStr == '' ? '' : '&') + extendParam, null, callBack, retryAmount, errorCB, checkSuccess || function (response) {
    return response.state == 'success';
  }, null, 'application/x-www-form-urlencoded');
}


















