var AKSDK = require("./wx_aksdk.js");
window.versions = { 
  wxVersion: window.config.game_ver,  
};


window.DEBUG = false;
window.PLATFORM = 1;
window.ENV = 5;
window.PACK = true;
window.WSS = true;
window.workerJsURL = "";
window.isWaiFangWx = false;
window.PF_INFO = {
  base_cdn: "https://cdn-tjqy.shzbkj.com/weixing_0/",
  cdn: "https://cdn-tjqy.shzbkj.com/weixing_0/",
}

PF_INFO.pay_infos = {}
PF_INFO.package = "0";
PF_INFO.version = window.versions.wxVersion;
PF_INFO.mac = "";
PF_INFO.os = "1";
PF_INFO.sdk_name = "9130";
PF_INFO.apiurl = "https://api-tjqytest.shzbkj.com";
PF_INFO.logurl = "https://log-tjqytest.shzbkj.com";
PF_INFO.payurl = "https://pay-tjqytest.shzbkj.com";
PF_INFO.apikey = "MQx0mYlUWO5XYKvgAIPKWgK1w722GKih";
PF_INFO.partnerId = "1";
PF_INFO.pkgName = "";
PF_INFO.device_id = "";
PF_INFO.from_scene = 0;
PF_INFO.serverList = {};
PF_INFO.channelNum = parseInt(PF_INFO.partnerId);
PF_INFO.channel = PF_INFO.partnerId;
PF_INFO.selectedServer = {};

PF_INFO.clientlog = "https://jgcenter.sh9130.com/clientlog/";
PF_INFO.showLogo = false;
PF_INFO.debugUsers = "39927500|58163716|74597555|172978096"; //平台账号
PF_INFO.tick = Date.now();

PF_INFO.configType = "_weixin";
PF_INFO.exposeType = "_a";
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

window.alert = function(value) {
//   console.log("alert", value);
  wx.hideLoading({});
  wx.showModal({
    title: '提示',
    content: value,
    success(res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
}
window.loginAlert = function(value) {
//   console.log("loginAlert", value);
  wxHideLoading();
  wx.showModal({
    title: '提示',
    content: value,
    confirmText: "重试",
    cancelText: "退出",
    success(res) {
      if (res.confirm) {
        window.sdkInit();
      } else if (res.cancel) {
        console.log("退出游戏");
        wx.exitMiniProgram({});
      }
    }
  })
}
window.exitAlert = function(value) {
  console.log("exitAlert", value);
  wx.showModal({
    title: '提示',
    content: value,
    confirmText: "重登",
    showCancel : false,
    complete(res) {
      console.log("退出游戏");
      wx.exitMiniProgram({});
    }
  })
}

window.isShowLoading = false;
window.wxShowLoading = function(value) {
  window.isShowLoading = true;
  wx.showLoading(value);
}
window.wxHideLoading = function() {
  if (window.isShowLoading) {
    window.isShowLoading = false;
    wx.hideLoading({});
  }
}
window.changeServerLoading = function(value) {
    // console.log("window.ServerLoading.instance.changeServerLoading(value);")
  window.ServerLoading.instance.changeServerLoading(value);
}
window.msgCheck = function(value, callback) {
  AKSDK.msgCheck(value, function(res){
    if (res && res.data) {
      if (res.data.state == 1){ //没有敏感词
        callback(true);
      } else { //存在敏感词xxx
        callback(false);
        console.info("存在敏感词： "+res.data.msg);
      }
    } else {
      console.log("msgCheck", res);
    }
  });
}

window.getJsURL = function(value) {
  console.log("getJsURL", value);
}
window.toAllProgress = function(value) {
  // console.log("toAllProgress", value);
}
window.toProgress = function(value, str, currTaskIndex) {
  // console.log("toProgress", value, str, currTaskIndex);
}
window.toEnterGame = function(value) {
  window.ServerLoading.instance.closeAuthor();
  window.ServerLoading.instance.closeServer();
  window.ServerLoading.instance.closeLoading();
}

window.onApiError = function(str) {
  window.toErrorAlarm(14, "onApiError "+str);
  window.loginAlert('on api error');
  var info = {
    id: window.PF_INFO.roleId,
    role: window.PF_INFO.roleName,
    level: window.PF_INFO.roleLevel,
    account: window.PF_INFO.account,
    version: window.PF_INFO.lastVersion,
    cdn: window.PF_INFO.cdn,
    pkgName: window.PF_INFO.pkgName,
    gamever: window.config.game_ver,
    serverid: (window.PF_INFO.selectedServer ? window.PF_INFO.selectedServer.server_id : 0),
    systemInfo: window.systemInfo,
    error: "onApiError",
    stack: str ? str : "on api error",
  }
  var infostr = JSON.stringify(info);
  console.error("API错误："+ infostr);
  window.clientlog(infostr);
}
// 错误警报
window.toErrorAlarm = function (type, info) {
  sendApi(PF_INFO.logurl, 'log.client_error', {
    'game_pkg': PF_INFO.pkgName,
    'partner_id': PF_INFO.partnerId,
    'server_id': (PF_INFO.selectedServer&&PF_INFO.selectedServer.server_id>0 ? PF_INFO.selectedServer.server_id : 0),
    'uid': (PF_INFO.account > 0 ? PF_INFO.account : 0),
    'type': type,
    'info': info,
  }) 
}
window.reqRecordError = function(str) {
  var info = JSON.parse(str);
  info.gamever = window.config.game_ver;
  info.serverid = (window.PF_INFO.selectedServer ? window.PF_INFO.selectedServer.server_id : 0);
  info.systemInfo = window.systemInfo;
  var infostr = JSON.stringify(info);
  console.error("上报错误："+ infostr);
  window.clientlog(infostr);
}
window.reqRecordInfo = function(error, stack) {
  var info = {
    id: window.PF_INFO.roleId,
    role: window.PF_INFO.roleName,
    level: window.PF_INFO.roleLevel,
    account: window.PF_INFO.account,
    version: window.PF_INFO.lastVersion,
    cdn: window.PF_INFO.cdn,
    pkgName: window.PF_INFO.pkgName,
    gamever: window.config.game_ver,
    serverid: (window.PF_INFO.selectedServer ? window.PF_INFO.selectedServer.server_id : 0),
    systemInfo: window.systemInfo,
    error: error,
    stack: stack,
  }
  var infostr = JSON.stringify(info);
  console.warn("上报信息："+ infostr);
  window.clientlog(infostr);
}
window.clientlog = function(info) {
  if (window.PF_INFO.wxPlatform == "devtools") return;
  var url = PF_INFO.clientlog + "?account=" + PF_INFO.account;
  wx.request({
    url: url,
    method: "POST",
    data: info,
    header: {
      "content-type": "application/json",
      "cache-control": "no-cache"
    },
    success: function(res) {
      DEBUG && console.log("clientlog:", url, info, res);
    },
    fail: function(res) {
      DEBUG && console.log("clientlog:", url, info, res);
    },
    complete: function() {}
  })
}


// iOS的实现会重新对query做一次encode，导致%变成了%25，所以错误的版本里面，deviceId是
// deviceId=f1f82ba6-b006-991b-e7bd%252Bd123fa9f198e
// 正确的deviceId是
// deviceId=f1f82ba6-b006-991b-e7bd%2Bd123fa9f198e
//快手设备号全部使用- 原因如上版本号1.4.1
window.guild = function() {
  function S4() {
    return (((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1));
  }
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
/*sdk初始化*/
window.sdkInit = function() {
  console.log("#SDK 初始化：");
  var cfg = AKSDK.getConfig();
  PF_INFO.channel = cfg.partner_id;
  PF_INFO.channelNum = cfg.partner_id;
  PF_INFO.partnerId = cfg.partner_id;
  PF_INFO.pkgName = cfg.game_pkg;
  var initData = {
    game_ver: PF_INFO.version
  };
  PF_INFO.device_id = this.guild();

  wxShowLoading({ title: '正在初始化' });
  AKSDK.init(initData, this.sdkOnInited.bind(this));
}
/*sdk初始化回调*/
window.sdkOnInited = function(res) {
  var develop = res.develop;
  sdkInitRes = res;
  // res.game_ver = "1.0.86";
  // console.info(window.compareVersion("1.0.61", res.game_ver), window.compareVersion("1.0.62", res.game_ver), window.compareVersion("1.0.63", res.game_ver), window.compareVersion("1.1.64", "1.1.64"));
  console.log("#初始化成功   提审状态:"+ develop +"   是否提审:"+ (develop == 1) +"   提审版本号:"+res.game_ver +"   当前版本号:"+window.versions.wxVersion); //develop为1的时候说明当前game_ver是提审版本
  if (!res.game_ver || window.compareVersion(window.versions.wxVersion, res.game_ver) < 0) {  //当前版本 < 后台版本   
    console.log("#正式版=============================");
    PF_INFO.apiurl = "https://api-tjqy.shzbkj.com";    //正式服（线上版本）
    PF_INFO.logurl = "https://log-tjqy.shzbkj.com";
    PF_INFO.payurl = "https://pay-tjqy.shzbkj.com";
    PF_INFO.cdn = "https://cdn-tjqy-ss.shzbkj.com/weixin_1/";
    PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/";
    PF_INFO.version_name = "ss";
    PF_INFO.wxShield = false;
  } else if (window.compareVersion(window.versions.wxVersion, res.game_ver) == 0){  //当前版本 == 后台版本
    console.log("#审核版=============================");
    PF_INFO.apiurl = "https://api-tjqytest.shzbkj.com";    //测试服（审核版本）
    PF_INFO.logurl = "https://log-tjqytest.shzbkj.com";
    PF_INFO.payurl = "https://pay-tjqytest.shzbkj.com";
    PF_INFO.cdn = "https://cdn-tjqy-xy.shzbkj.com/weixin_0/";
    PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/";
    PF_INFO.version_name = "weixin";
    PF_INFO.wxShield = true;                          //屏蔽活动
  } else {
    console.log("#开发版=============================");
    PF_INFO.apiurl = "https://api-tjqytest.shzbkj.com";    //测试服（开发版本）
    PF_INFO.logurl = "https://log-tjqytest.shzbkj.com";
    PF_INFO.payurl = "https://pay-tjqytest.shzbkj.com";
    PF_INFO.cdn = "https://cdn-tjqy-xy.shzbkj.com/weixin_0/";
    PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/";
    PF_INFO.version_name = "weixin";
    PF_INFO.wxShield = false;
  }
  PF_INFO.from_scene = config.from ? config.from : 0;

  this.loadVersionConfig();
  this.reqPkgOptions();

  window.sdkLoginRetry = 5;
  wxShowLoading({ title: '正在登录账号' });
  AKSDK.login(this.sdkOnLogin.bind(this));
}
window.sdkLoginRetry = 5;
/*sdk登录回调*/
window.sdkOnLogin = function(status, data) {
  if (status == 0 && data && data.token) {
    PF_INFO.sdk_token = data.token;
    var self = this;
    wxShowLoading({ title: '正在验证账号' });
    sendApi(PF_INFO.apiurl, 'User.login', {
      'platform': PF_INFO.sdk_name,
      'partner_id': PF_INFO.partnerId,
      'token': data.token,
      'game_pkg': PF_INFO.pkgName,
      'deviceId': PF_INFO.device_id,
      'scene': 'WX_'+ PF_INFO.from_scene,
    }, this.onUserLogin.bind(this), apiRetryAmount, onApiError);
  } else {
    if (data && data.errMsg && window.sdkLoginRetry > 0 && (
      data.errMsg.indexOf("fail interrupted") != -1 || 
      data.errMsg.indexOf("network api interrupted") != -1 || 
      data.errMsg.indexOf("Network Error") != -1 || 
      data.errMsg.indexOf("ERR_TIMED_OUT") != -1 || 
      data.errMsg.indexOf("ERR_CONNECTION_ABORTED") != -1 || 
      data.errMsg.indexOf("ERR_CONNECTION_RESET") != -1)) { //可以自动重试的失败  network api interrupted in suspend state(小程序退后台之后发起网络请求)
      window.sdkLoginRetry--;
      AKSDK.login(this.sdkOnLogin.bind(this));
    } else {
      window.toErrorAlarm(1, "AKSDK.login fail: status="+status+",errMsg="+(data ? data.errMsg : ""));
      window.reqRecordInfo("sdkOnLoginError", JSON.stringify({ status: status, data: data }));
      window.loginAlert("登录/注册失败" + (data&&data.errMsg ? "，"+data.errMsg : ""));
    }
  }
}

window.onUserLogin = function (response) {
  if (!response) {
    window.toErrorAlarm(2, "User.login fail: response is null");
    window.reqRecordInfo("userLoginError", "response is null");
    window.loginAlert('User.login failed');
    return;
  }
  if (response.state != 'success') {
    window.toErrorAlarm(2, "User.login fail: state="+response.state);
    window.reqRecordInfo("userLoginError", JSON.stringify(response));
    window.loginAlert('User.login failed: ' + response.state);
    return;
  }

  PF_INFO.userId = String(response.account);
  PF_INFO.account = String(response.account);
  PF_INFO.platform = String(response.platform);
  PF_INFO.channel = String(response.platform);
  PF_INFO.platform_uid = String(response.platform_uid);
  PF_INFO.php_sign = String(response.sign);
  PF_INFO.php_signtime = String(response.time);
  PF_INFO.sign = ''; // TODO

  var self = this;
  wxShowLoading({ title: '请求服务器' });

  var lastSerStr = localStorage.getItem("LastSer_" + PF_INFO.pkgName + PF_INFO.account);
  if (lastSerStr && lastSerStr != "") {
    var lastSerId = Number(lastSerStr);
    self.getCheckServers(lastSerId);
  } else {
    self.getDefaultServers();
  }
}

window.getDefaultServers = function() {
  var self = this;
  sendApi(PF_INFO.apiurl, 'Server.defaultServer', {
    'partner_id': PF_INFO.partnerId,
    'uid': PF_INFO.account,
    'version': PF_INFO.version,
    'game_pkg': PF_INFO.pkgName,
    'device': PF_INFO.device_id,
  }, self.onUserLoginDefaultServers.bind(self), apiRetryAmount, onApiError); 
}
window.onUserLoginDefaultServers = function(response) {
  if (!response) {
    window.toErrorAlarm(3, 'Server.defaultServer failed');
    window.loginAlert('Server.defaultServer failed');
    return;
  }
  if (response.state != 'success') {
    window.toErrorAlarm(3, 'Server.defaultServer failed: ' + response.state);
    window.loginAlert('Server.defaultServer failed: ' + response.state);
    return;
  }
  if (!response.data || response.data.length == 0) {
    window.toErrorAlarm(3, 'Server.defaultServer failed: data null');
    window.loginAlert('服务器尚未开启');
    return;
  }
  this.updCurServer(response);
}
window.getCheckServers = function(lastSerId) {
  var self = this;
  sendApi(PF_INFO.apiurl, 'Server.check_server', {
    'server_id': lastSerId,
    'time': Date.now() / 1000,
  }, self.onUserLoginCheckServers.bind(self), apiRetryAmount, onApiError);
}
window.onUserLoginCheckServers = function(response) {
  if (!response) {
    window.toErrorAlarm(4, 'Server.check_server failed');
    this.getDefaultServers();
    return;
  }
  if (response.state != 'success') {
    window.toErrorAlarm(4, 'Server.check_server failed: ' + response.state);
    this.getDefaultServers();
    return;
  }
  if (!response.data || response.data.length == 0) {
    window.toErrorAlarm(4, 'Server.check_server failed: data null');
    this.getDefaultServers();
    return;
  }
  this.updCurServer(response);

  if (window.ServerLoading && window.ServerLoading.instance.openJumpTipsBtn) {
    window.ServerLoading.instance.openJumpTipsBtn(sdkInitRes.isShowSdkAge, sdkInitRes.sdk_age_adaptation_icon, sdkInitRes.sdk_age_adaptation_content, sdkInitRes.coordinate_x, sdkInitRes.coordinate_y)
  }
}
window.updCurServer = function(response) {
  PF_INFO.newRegister = response.is_new != undefined ? response.is_new : 0;
  PF_INFO.selectedServer = {
    'server_id': String(response.data[0].server_id),
    'server_name': String(response.data[0].server_name),
    'entry_ip': response.data[0].entry_ip,
    'entry_port': parseInt(response.data[0].entry_port),
    'status': get_status(response.data[0]),
    'start_time': response.data[0].start_time,
    'cdn': PF_INFO.cdn,
  }
  this.initComplete();
}

window.initComplete = function() {
  if (PF_INFO.newRegister == 1) { //新用户，发送验证
    var status = PF_INFO.selectedServer.status;
    if (status === -1 || status === 0) {
      window.toErrorAlarm(15, 'new register selectedServer status error: id='+PF_INFO.selectedServer.id+',status='+PF_INFO.selectedServer.status);
      window.loginAlert(status === -1 ? "当前服务器在维护中" : "当前服务器尚未开启，敬请期待");
      return;
    } 
    req_server_check_ban(0, PF_INFO.selectedServer.server_id);
     console.log("window.ServerLoading.instance.openLoading(PF_INFO.newRegister);")
    window.ServerLoading.instance.openLoading(PF_INFO.newRegister);
  } else { //老用户，进游戏的选服界面
     console.log(" window.ServerLoading.instance.openServer();")
    window.ServerLoading.instance.openServer();
    wxHideLoading();
  }
  window.loadServer = true;
  window.initMain();
  window.enterToGame();
}

// 加载version_config版本文件，读取lastVersion号，外网是从后台请求获取
window.loadVersionConfig = function() {
  sendApi(PF_INFO.apiurl, 'User.getCdnVersion', {
    'game_pkg': PF_INFO.pkgName,
    'version_name': PF_INFO.version_name,
  }, this.reqVersionConfigCallBack.bind(this), apiRetryAmount, onApiError);
}
window.reqVersionConfigCallBack = function(data) {
    if (!data) {
        window.toErrorAlarm(5, 'User.getCdnVersion failed');
        window.loginAlert('User.getCdnVersion failed');
        return;
    }
    if (data.state != 'success') {
        window.toErrorAlarm(5, 'User.getCdnVersion failed: state=' + data.state);
        window.loginAlert('User.getCdnVersion failed: state=' + data.state);
        return;
    }
    if (!data.data || !data.data.version) {
        window.toErrorAlarm(5, 'User.getCdnVersion failed: version=' + (data.data && data.data.version));
        window.loginAlert('User.getCdnVersion failed: version=' + (data.data&&data.data.version));
        return;
    }
    if (data.data.cdn_url && data.data.cdn_url.length > 10) {
        PF_INFO.base_cdn = data.data.cdn_url;
        PF_INFO.cdn = data.data.cdn_url;
    }
    if (data.data.version) {
        PF_INFO.lastVersion = data.data.version;
    }
    console.info("lastVersion:"+PF_INFO.lastVersion+", version_name:"+PF_INFO.version_name);
    window.loadVersion = true;
    window.initMain();
    window.enterToGame();
}

// 请求隐私、超级VIP、公众号信息
window.pkgOptions;
window.reqPkgOptions = function() {
  sendApi(PF_INFO.apiurl, 'Common.get_option_pkg', { 
    'game_pkg': PF_INFO.pkgName,
  }, this.reqPkgOptionsCallBack.bind(this), apiRetryAmount, onApiError);
}
window.reqPkgOptionsCallBack = function(data) {
  if (data && data.state === "success" && data.data) {
    window.pkgOptions = data.data;
    for (var k in data.data) {
      PF_INFO[k] = data.data[k];
    }
  } else {            
    window.toErrorAlarm(11, 'Common.get_option_pkg failed');
    console.info("reqPkgOptionsCallBack "+data.state);
  }
  window.loadOption = true;
  window.enterToGame(); 
}


window.toPay = function(roleId, roleName, roleLevel, roleCareer, productId, price, productName, productDesc, callback, appleprd_id) {
  productId = String(productId)
  var productname = productName
  var productdesc = productDesc
  PF_INFO.pay_infos[productId] = {
    'productid': productId,
    'productname': productname,
    'productdesc': productdesc,
    // 'ApplePrdId': appleprd_id,
    'roleid': roleId,
    'rolename': roleName,
    'rolelevel': roleLevel,
    'price': price,
    'callback': callback,
  }
  sendApi(PF_INFO.payurl, 'Order.order', {
    'game_pkg': PF_INFO.pkgName,
    'server_id': PF_INFO.selectedServer.server_id,
    'server_name': PF_INFO.selectedServer.server_name,
    'level': roleLevel,
    'uid': PF_INFO.account,
    'role_id': roleId,
    'role_name': roleName,
    'product_id': productId,
    'product_name': productname,
    'product_desc': productdesc,
    'money': price,
    'partner_id': PF_INFO.partnerId,
    // 'appleprd_id': appleprd_id,
  }, toPayCallBack, apiRetryAmount, onApiError)

}
window.toPayCallBack = function(data) {
  if (data && (data.errCode === 200 || data.state == 'success')) {
      var info = PF_INFO.pay_infos[String(data.product_id)]
      if (info.callback)
        info.callback(data.product_id, data.cp_order_id, -1);
      AKSDK.pay({
        'cpbill': data.cp_order_id,
        'productid': data.product_id,
        'productname': info.productname,
        'productdesc': info.productdesc,
        'serverid': PF_INFO.selectedServer.server_id,
        'servername': PF_INFO.selectedServer.server_name,
        'roleid': info.roleid,
        'rolename': info.rolename,
        'rolelevel': info.rolelevel,
        'price': info.price,
        // 'ApplePrdId': info.ApplePrdId,
        'extension': JSON.stringify({
          'cp_order_id': data.cp_order_id
        }),
      }, function(status, d) {
        if (info.callback && status == 0) {
          info.callback(data.product_id, data.cp_order_id, status);
        }
        //clientlog(JSON.stringify({error: JSON.stringify({type: "paycallback", status: status, data: data, role_name: info.rolename})}))
        console.info(JSON.stringify({type: "paycallback", status: status, data: data, role_name: info.rolename}));

        if (status === 0) {
          //成功
        } else if (status === 1) {
          //失败
        } else if (status === 2) {
          //取消
        }
      });
    } else {
    var err = (data ? "errCode="+data.errCode+",state="+data.state+",info="+data.info : "获取订单失败");
    window.toErrorAlarm(13, "Order.order fail: " + err);
    alert(err);
  }
}


window.loadCreateRole = function() {
  // AKSDK.logLoadingFinish();
}
window.toCreate = function(role_id, role_name, role_level, role_type, time) {
  AKSDK.logCreateRole(PF_INFO.selectedServer.server_id, PF_INFO.selectedServer.server_name || PF_INFO.selectedServer.server_id, role_id, role_name, role_level);
  sendApi(PF_INFO.apiurl, 'User.create_role', {
    'game_pkg': PF_INFO.pkgName,
    'server_id': PF_INFO.selectedServer.server_id,
    'role_id': role_id,
    'uid': PF_INFO.account,
    'role_name': role_name,
    'role_type': role_type,
    'level': role_level,
  })
}
window.toLogin = function(role_id, role_name, role_level, role_type, evolution, time, fight, gold, eraLv, eraNum) {
  PF_INFO.roleId = role_id;
  PF_INFO.roleName = role_name;
  PF_INFO.roleLevel = role_level;
  AKSDK.logEnterGame(PF_INFO.selectedServer.server_id, PF_INFO.selectedServer.server_name || PF_INFO.selectedServer.server_id, role_id, role_name, role_level);
  sendApi(PF_INFO.apiurl, 'User.update_role', {
    'game_pkg': PF_INFO.pkgName,
    'server_id': PF_INFO.selectedServer.server_id,
    'role_id': role_id,
    'uid': PF_INFO.account,
    'role_name': role_name,
    'role_type': role_type,
    'level': role_level,
    'evolution': evolution,
  })
}
window.toLevelUp = function(role_id, role_name, role_level, role_type, evolution, time, fight, gold, eraLv, eraNum) {
  PF_INFO.roleId = role_id;
  PF_INFO.roleName = role_name;
  PF_INFO.roleLevel = role_level;
  AKSDK.logRoleUpLevel(PF_INFO.selectedServer.server_id, PF_INFO.selectedServer.server_name || PF_INFO.selectedServer.server_id, role_id, role_name, role_level);
  sendApi(PF_INFO.apiurl, 'User.update_role', {
      'game_pkg': PF_INFO.pkgName,
      'server_id': PF_INFO.selectedServer.server_id,
      'role_id': role_id,
      'uid': PF_INFO.account,
      'role_name': role_name,
      'role_type': role_type,
      'level': role_level,
      'evolution': evolution,
  })
}
window.toRealName = function(callback) {

}

//调起分享
window.openShare = function(callback){
  AKSDK.share('share', function (data) {
      callback && callback(data);
  }); 
}
//调起客服
window.openService = function(){
  AKSDK.openService();
}

//微端引导
window.microPortGuide = function(){
//   AKSDK.weiduanHelper();
   AKSDK.saveAPKShortcut();
}

//绑定有礼请求短信验证码
window.reqSMSCode = function(phone, role_id, uid, game_pkg, partner_id, sign, callback, server_id) {
  server_id = server_id || PF_INFO.selectedServer.server_id;
  sendApi(PF_INFO.apiurl, 'User.get_code', {
    'phone': phone,
    'role_id': role_id,
    'uid': PF_INFO.account,
    'game_pkg': PF_INFO.pkgName,
    'partner_id': PF_INFO.partnerId,
    'server_id': server_id,
  }, callback, 2, null, function() {
    return true;
  });
}

//收藏
wx.onShowData = null;
wx.onShowCallback = null;
window.onShow = function(callback){
  wx.onShowCallback = callback;
  if (wx.onShowCallback && wx.onShowData) {
    console.info("小游戏切前台事件，场景值："+wx.onShowData.scene);
    wx.onShowCallback(wx.onShowData);
    wx.onShowData = null;
  }
}

ks.ksOnShowCallBack = null;
ks.ksonShowContext = null;
window.ksOnShow = function(callback,context){
    ks.ksOnShowCallBack  = callback;
    ks.ksonShowContext = context;
}

//获取邀请者
window.reqPlayerAskInfo = function(packageName, role_id, serverId, callBack) {
  window.send('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', {
    'game_pkg': window.PF_INFO.pkgName, 
    'role_id': role_id, 
    'server_id': serverId
  }, callBack);
}
//调起订阅消息
window.openSubscribeMsg = function(ids, callback) {
  function onTouchEnd(res) {
    var data = [];
    var tmpIds = [];
    var tmpObj = window.config.tmpId;
    for (var id in tmpObj) {
        var idn = Number(id);
        if (!ids || !ids.length || ids.indexOf(idn)!=-1) { //ids为空表示所有都请求
            tmpIds.push(tmpObj[id]);
            data.push([idn, 3]); //拒绝、封禁、过滤
        }
    }
    if (window.compareVersion(window.SDKVersion, '2.4.4') >= 0) {
        console.log("调用订阅");
        AKSDK.subscribeMessage(tmpIds, function (res) {
            console.log("订阅回调：");
            console.log(res);
            if (res && res.errMsg == "requestSubscribeMessage:ok") {
                for (var id in tmpObj) {
                    if (res[tmpObj[id]] == 'accept') { //同意
                        var idn = Number(id);
                        for (var i = 0; i < data.length; i++) {
                            if (data[i][0] == idn) {
                                data[i][1] = 1;
                                break;
                            }
                        }
                    } 
                }
            }
            if (window.compareVersion(window.SDKVersion, '2.10.1') >= 0) {
                wx.getSetting({
                    withSubscriptions: true, //只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。
                    success: function (res1) {
                        var sets = res1.subscriptionsSetting['itemSettings'];
                        if(sets){
                            console.log("获得订阅设置：");
                            console.log(sets);
                            for (var id in tmpObj) {
                                if (sets[tmpObj[id]] == 'accept') { //永久同意
                                    var idn = Number(id);
                                    for (var i = 0; i < data.length; i++) {
                                        if (data[i][0] == idn) {
                                            data[i][1] = 2;
                                            break;
                                        }
                                    }
                                } 
                            }
                            console.log(data);
                            callback && callback(data);
                        } else{
                            console.log("获得订阅设置：没有长期订阅消息");
                            console.log(res1);
                            console.log(data);
                            callback && callback(data);
                        }
                    },
                    fail: function () {
                        console.log("获得订阅设置：失败");
                        console.log(data);
                        callback && callback(data);
                    }
                });
            } else {
                console.log("版本过低，获得订阅设置：失败 "+window.SDKVersion);
                console.log(data);
                callback && callback(data);
            }
        }); 
    } else {
        console.log("版本过低，不支持订阅 "+window.SDKVersion);
        console.log(data);
        callback && callback(data);
    }
    wx.offTouchEnd(onTouchEnd);
  }
  wx.onTouchEnd(onTouchEnd);
}
//获取电池信息
window.batteryInfo = {isSuccess: false, level: "100", isCharging: false};
window.getBatteryInfo = function(callback) {
  callback && callback(false);
  // console.log("调用获取电池信息");
  // wx.getBatteryInfo ({
  //   success: function(resSuccess) {
  //     var info = window.batteryInfo;
  //     info.isSuccess = true;
  //     info.level = Number(resSuccess.level).toFixed(0);
  //     info.isCharging = resSuccess.isCharging;
  //     // console.log("调用获取电池信息成功", info.level, info.isCharging, resSuccess.errMsg, resSuccess.level);
  //     callback && callback(info.isSuccess, info.level, info.isCharging);
  //   },
  //   fail: function(resFail) {
  //     console.log("调用获取电池信息失败", resFail.errMsg);
  //     var info = window.batteryInfo;
  //     callback && callback(info.isSuccess, info.level, info.isCharging);
  //   }
  // });
}
//获取网络类型
window.getNetworkType = function(callback) {
	// wx.getNetworkType({
 //    success: function(resSuc) {
 //      callback && callback(true, resSuc);
 //    },
 //    fail: function(resFail) {
 //      callback && callback(false, resFail);
 //    }
 //  });
}
//添加网络状态变化监听
window.onNetworkStatusChange = function(func) {
	// if (func) wx.onNetworkStatusChange(func);
}
//移除网络状态变化监听
window.offNetworkStatusChange = function(func) {
	// wx.offNetworkStatusChange(func);	
}

window.send = function(url, data, callBack, retryAmount, errorCB, checkSuccess, reqType, contentType) {
  if (retryAmount == undefined) retryAmount = 1;

  wx.request({
      url: url,
      method: (reqType || "GET"),
      responseType: "text",
      data: data,
      header: {
          "content-type": (contentType || 'application/json'),
      },
      success: function(res) {
          DEBUG && console.log("send.success:", url, info, res);
          if (res && res.statusCode == 200) {
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
      fail: function(res) {
          DEBUG && console.log("send.fail:", url, info, res);
          window.sendFail(url, data, callBack, retryAmount, errorCB, checkSuccess, res);
      },
      complete: function() {}
  });
}
window.sendFail = function(url, data, callBack, retryAmount, errorCB, checkSuccess, res) {
    if (retryAmount - 1 > 0) {
        setTimeout(function() {
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

window.sendApi = function(apiurl, method, param, callBack, retryAmount, errorCB, checkSuccess) {
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

  send(apiurl + '?' + reqStr + (reqStr == '' ? '' : '&') + extendParam, null, callBack, retryAmount, errorCB, checkSuccess || function(response) {
    return response.state == 'success';
  }, null, 'application/x-www-form-urlencoded');
}

window.onRoleRecordStep = function(step, role_id) {
  var serverTmpId = 0;
  if (PF_INFO.selectedServer) {
    serverTmpId = PF_INFO.selectedServer.server_id;
  }
  sendApi(PF_INFO.logurl, 'UserLog.reportUidStep', {
    'partnerId': PF_INFO.partnerId,
    'gamePkg': PF_INFO.pkgName,
    'logTime': Math.floor(Date.now() / 1000),
    'platformUid': PF_INFO.platform_uid,
    'type': step,
    'serverId': serverTmpId,
  }, null, 2, null, function() {
    return true;
  });
}


window.req_server_group = function(step) {
  sendApi(PF_INFO.apiurl, 'Server.getServerGroup', {
    'partner_id': PF_INFO.partnerId,
    'uid': PF_INFO.account,
    'version': PF_INFO.version,
    'game_pkg': PF_INFO.pkgName,
    'device': PF_INFO.device_id,
  }, reqServerGroupCallBack, apiRetryAmount, onApiError)
}
window.reqServerGroupCallBack = function(data) {
  if (data && data.state === "success" && data.data) {
    data.data.unshift({
      'id': -2,
      'name': "最新服"
    });
    data.data.unshift({
      'id': -1,
      'name': "已有角色"
    });
    PF_INFO.groupList = data.data;
    if (window.initPanel) window.initPanel.showGroupList();
  } else {
    PF_INFO.hasGroupReq = false;
    var err = (data ? data.state : "");
    window.toErrorAlarm(7, "Server.getServerGroup fail: " + err);
    window.loginAlert("reqServerGroupCallBack " + err);
  }
}

window.req_server_owner = function(step) {
  sendApi(PF_INFO.apiurl, 'Server.getServerByUid', {
    'partner_id': PF_INFO.partnerId,
    'uid': PF_INFO.account,
    'version': PF_INFO.version,
    'game_pkg': PF_INFO.pkgName,
    'device': PF_INFO.device_id,
  }, reqServerOwnerCallBack, apiRetryAmount, onApiError);
}
window.reqServerOwnerCallBack = function(data) {
  PF_INFO.hasServerReq = false;
  if (data && data.state === "success" && data.data) {
    for (var i = 0; i < data.data.length; i++) {
      data.data[i].status = get_status(data.data[i]);
    }
    PF_INFO.serverList[-1] = window.changeServerName(data.data);
    window.initPanel.showServerList(-1);
  } else {
    var err = (data ? data.state : "");
    window.toErrorAlarm(8, "Server.getServerByUid fail: " + err);
    window.loginAlert("reqServerOwnerCallBack " + err);
  }
}
window.req_server_owner_status = function(callback) {
  sendApi(PF_INFO.apiurl, 'Server.getServerByUid', {
    'partner_id': PF_INFO.partnerId,
    'uid': PF_INFO.account,
    'version': PF_INFO.version,
    'game_pkg': PF_INFO.pkgName,
    'device': PF_INFO.device_id,
  }, callback, apiRetryAmount, onApiError);
}

window.req_server_list = function(step, group_id) {
  sendApi(PF_INFO.apiurl, 'Server.getServerByGroup', {
    'partner_id': PF_INFO.partnerId,
    'uid': PF_INFO.account,
    'version': PF_INFO.version,
    'game_pkg': PF_INFO.pkgName,
    'device': PF_INFO.device_id,
    'server_group_id': group_id,
  }, reqServerListCallBack, apiRetryAmount, onApiError)
}
window.reqServerListCallBack = function(data) {
  PF_INFO.hasServerReq = false;
  if (data && data.state === "success" && data.data && data.data.data) {
    var groupid = data.data.server_group_id;
    var server_list = [];
    for (var i = 0; i < data.data.data.length; i++) {
      data.data.data[i].status = get_status(data.data.data[i]);

      if (server_list.length == 0 || data.data.data[i].status != 0) {
        server_list[server_list.length] = data.data.data[i]
      }
    }
    PF_INFO.serverList[groupid] = window.changeServerName(server_list);
    window.initPanel.showServerList(groupid);
  } else {
    var err = (data ? data.state : "");
    window.toErrorAlarm(9, "Server.getServerByGroup fail: " + err);
    window.loginAlert("reqServerListCallBack " + err);
  }
}
window.req_recommend_server_list = function(step) {
  sendApi(PF_INFO.apiurl, 'Server.getRecommendServerList', {
    'partner_id': PF_INFO.partnerId,
    'uid': PF_INFO.account,
    'version': PF_INFO.version,
    'game_pkg': PF_INFO.pkgName,
    'device': PF_INFO.device_id,
  }, reqServerRecommendCallBack, apiRetryAmount, onApiError);
}
window.reqServerRecommendCallBack = function(data) {
  PF_INFO.hasServerReq = false;
  if (data && data.state === "success" && data.data) {
      for (var i = 0; i < data.data.length; i++) {
          data.data[i].status = get_status(data.data[i]);
      }
      PF_INFO.serverList[-2] = window.changeServerName(data.data);
      window.initPanel.showServerList(-2);
  } else {
    var err = (data ? data.state : "");
    window.toErrorAlarm(10, "Server.getRecommendServerList fail: " + err);
    alert("reqServerRecommendCallBack " + err);
  }
}
window.changeServerName = function(lst) {
  return lst;
}
window.req_server_notice = function(server_id, callback) {
  server_id = server_id || PF_INFO.selectedServer.server_id;
  sendApi(PF_INFO.apiurl, 'Common.get_anno', {
    'type': '4',
    'game_pkg': PF_INFO.pkgName,
    'server_id': server_id,
  }, callback);
}
window.req_multi_server_notice = function(type, pkgName, server_id, callback) {
  server_id = server_id || PF_INFO.selectedServer.server_id;
  sendApi(PF_INFO.apiurl, 'Common.get_new_anno', {
    'type': type,
    'game_pkg': pkgName,
    'server_id': server_id,
  }, callback);
}
window.req_privacy = function(pkgName, callback) {
  sendApi(PF_INFO.apiurl, 'Common.get_option_pkg_detail', {
    'game_pkg': pkgName,
  }, callback);
}


window.get_status = function (server) {
  if (server) {
    if (server.status == 1) {
      if (server.online_status == 1)
        return 2;
      else
        return 1;
    } else if (server.status == 0) {
      return 0;
    } else {
      return -1;
    }
  }
  return -1;
}



window.req_server_check_ban = function(step, server_id) {
  PF_INFO.last_check_ban = {
    'step': step,
    'server_id': server_id
  };
  var self = this;
  wxShowLoading({ title: '正在验证角色' });
  sendApi(PF_INFO.apiurl, 'User.checkInfo', {
    'partner_id': PF_INFO.partnerId,
    'uid': PF_INFO.account,
    'game_pkg': PF_INFO.pkgName,
    'server_id': server_id,
    'platform': PF_INFO.platform,
    'platform_uid': PF_INFO.platform_uid,
    'check_login_time': PF_INFO.php_signtime,
    'check_login_sign': PF_INFO.php_sign,
    'version_name': PF_INFO.version_name,
  }, reqServerCheckBanCallBack, apiRetryAmount, onApiError, function(response) {
    return response.state == 'success' || response.info == 'time_err' || response.info == 'sign_err';
  });
}
window.reqServerCheckBanCallBack = function(data) {
  var self = this;
  if (data && data.state === "success" && data.data) {
    var server = PF_INFO.selectedServer;
    server.channel_num = PF_INFO.channelNum;
    server.sign = String(data.data.login_sign);
    server.tick = parseInt(data.data.time);
    if (data.data.server_num)
      server.server_num = parseInt(data.data.server_num);
    else
      server.server_num = parseInt(data.data.server_id);
    server.is_domain = 0;
    server.cdn = PF_INFO.base_cdn;
    server.resver = data.data.cdn_version;
    server.server_options = data.data.server_options;
    if (data.data.max_create)
      server.max_create = parseInt(data.data.max_create);

    console.log("server_options："+ JSON.stringify(server.server_options));

    if (PF_INFO.newRegister == 1 && server.server_options && server.server_options.show_btn == 1) {
      PF_INFO.showGetBtn = 1;
      console.log("window.ServerLoading.instance.setShowBtn();")
      window.ServerLoading.instance.setShowBtn();
    }

    checkBanSuccess();
  } else {
    if (PF_INFO.last_check_ban.step >= 3) {
      var err = (data ? data.state : "");
      window.toErrorAlarm(12, "User.checkInfo fail: " + err);
      onApiError(JSON.stringify(data));
      window.loginAlert('User.checkInfo failed: ' + err);
    } else {
      sendApi(PF_INFO.apiurl, 'User.login', {
        'platform': PF_INFO.sdk_name,
        'partner_id': PF_INFO.partnerId,
        'token': PF_INFO.sdk_token,
        'game_pkg': PF_INFO.pkgName,
        'deviceId': PF_INFO.device_id,
        'scene': 'WX_'+ PF_INFO.from_scene,
      }, function(response) {
        if (!response || response.state != 'success') {
          window.loginAlert('User.login failed: ' + response&&response.state);
          return;
        }
        PF_INFO.php_sign = String(response.sign);
        PF_INFO.php_signtime = String(response.time);
  
        setTimeout(function() {
          req_server_check_ban(PF_INFO.last_check_ban.step+1, PF_INFO.last_check_ban.server_id);
        }, 1500);
      }, apiRetryAmount, onApiError, function(response) {
        return response.state == 'success' || response.state == 'failed';
      });
    }
  }
}
window.checkBanSuccess = function() {    
  ServerLoading.instance.openLoading(PF_INFO.newRegister);
  window.isCheckBan = true;
  window.enterToGame("checkBanSuccess"); 
}


window.initMain = function() {
  if(window.loadProbPkg && window.loadMainPkg && window.loadServerRes && window.loadLoadingRes && window.loadVersion && window.loadServer) {     
    if (!window.MainWX.instance) {     
      var info = wx.getLaunchOptionsSync();
      var scene = info.scene?info.scene:0;
      var platData = {
        cdn: window.PF_INFO.cdn,
        spareCdn: window.PF_INFO.spareCdn, 
        newRegister: window.PF_INFO.newRegister,
        wxPC: window.PF_INFO.wxPC,
        wxIOS: window.PF_INFO.wxIOS,
        wxAndroid: window.PF_INFO.wxAndroid,
        wxParam: {limitLoad: window.PF_INFO.wxLimitLoad, benchmarkLevel: window.PF_INFO.wxBenchmarkLevel, wxFrom: (window.config.from=="txcps" ? 1: 0), wxSDKVersion: window.SDKVersion},
        configType: window.PF_INFO.configType, 
        exposeType: window.PF_INFO.exposeType,
        scene:scene
      }
      new window.MainWX(platData, window.PF_INFO.lastVersion, window.workerJsURL);
    }
  }
}

window.enterToGame = function(from) {    
  if(window.loadProbPkg && window.loadMainPkg && window.loadServerRes && window.loadLoadingRes && window.loadVersion && window.loadServer && window.isCheckBan && window.loadOption) {
    wxHideLoading();
    if (!bEnterGame) {
      bEnterGame = true;
      if (!window.MainWX.instance) {          
          window.initMain();
      }
      var top = 0;
    
      var safeArea = ks.getSystemInfoSync().safeArea;
      if (safeArea) {
        if (window.PF_INFO.wxPhone) {
          top = safeArea.top;
        }
        console.info("MenuButton  top:"+safeArea.top+",bottom:"+safeArea.bottom+",left:"+safeArea.left+",right:"+safeArea.right+",width:"+safeArea  .width+",height:"+safeArea.height);
      }       
      var selectedServer = {};
        for (const key in PF_INFO.selectedServer) {
          selectedServer[key] = PF_INFO.selectedServer[key];
      }
      console.info("top:",top)
      var platData = {
        channel: window.PF_INFO.channel,
        account: window.PF_INFO.account,
        userId: window.PF_INFO.userId,
        cdn: window.PF_INFO.cdn,
        data: window.PF_INFO.data,
        package: window.PF_INFO.package,
        newRegister: window.PF_INFO.newRegister,
        pkgName: window.PF_INFO.pkgName,
        partnerId: window.PF_INFO.partnerId,
        platform_uid: window.PF_INFO.platform_uid,
        deviceId: window.PF_INFO.device_id,
        selectedServer: selectedServer,
        configType: window.PF_INFO.configType,
        exposeType: window.PF_INFO.exposeType,
        debugUsers: window.PF_INFO.debugUsers,
        wxMenuTop: top,
        wxShield: window.PF_INFO.wxShield,
      };

      if (window.pkgOptions) {
        for (var k in window.pkgOptions) {
          platData[k] = window.pkgOptions[k];
        }
      }

            // if (ks.isLaunchFromApk()) {
            //     // 表明游戏从Apk启动
            // } else {
            //     // 表明游戏不是从Apk启动
            // }

            //   console.log("window.MainWX.instance.initPlatdata(platData);")
            var isLaunchFromApk = ks.isLaunchFromApk();
            console.info("isLaunchFromApk:", isLaunchFromApk);
            platData.ksLaunchFromApk = isLaunchFromApk;
            window.MainWX.instance.initPlatdata(platData);
        }
    } else {
        console.info("【登录】loadProbPkg:" + window.loadProbPkg + ",loadMainPkg:" + window.loadMainPkg + ",loadServerRes:" + window.loadServerRes + ",loadLoadingRes:" + window.loadLoadingRes + ",loadVersion:" + window.loadVersion + ",loadServer:" + window.loadServer + ",isCheckBan:" + window.isCheckBan + ",loadOption:" + window.loadOption);
    }
}
