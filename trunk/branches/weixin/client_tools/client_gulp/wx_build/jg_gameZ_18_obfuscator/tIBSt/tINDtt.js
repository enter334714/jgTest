import AKSDK from "../ttkttt/t6ktgt.js";
window.versions = {
  wxVersion: window.config.game_ver
};

window.DEBUG = false;
window.D$$5 = 1;
window.ENV = 1;
window.D$45$ = true;
window.WSS = true;
window.D$HQ45$ = "";
window.D$5$ = {
  base_cdn: "https://cdn-tjqy.shzbkj.com/weixin_0/",
  cdn: "https://cdn-tjqy.shzbkj.com/weixin_0/"
};

D$5$.pay_infos = {};
D$5$.package = "0";
D$5$.version = window.versions.wxVersion;
D$5$.mac = "";
D$5$.os = "1";
D$5$.sdk_name = "9130";
D$5$.apiurl = "https://api-tjqytest.shzbkj.com";
D$5$.logurl = "https://log-tjqytest.shzbkj.com";
D$5$.payurl = "https://pay-tjqytest.shzbkj.com";
D$5$.apikey = "MQx0mYlUWO5XYKvgAIPKWgK1w722GKih";
D$5$.partnerId = "1";
D$5$.pkgName = "";
D$5$.device_id = "";
D$5$.from_scene = 0;
D$5$.serverList = {};
D$5$.channelNum = parseInt(D$5$.partnerId);
D$5$.channel = D$5$.partnerId;
D$5$.selectedServer = {};

D$5$.D$Q5 = "https://jgcenter.sh9130.com/clientlog/";
D$5$.showLogo = false;
D$5$.debugUsers = "39927500|58163716|74597555";
D$5$.tick = Date.now();

D$5$.configType = "_weixin";
D$5$.exposeType = "_a";
D$5$.loadingType = 2;
D$5$.lastVersion = 1985;
D$5$.wxVersion = window.versions.wxVersion;
D$5$.wxShield = false;
D$5$.wxIOS = false;
D$5$.wxAndroid = false;
D$5$.wxPC = false;

window.D$4$5 = 5;
window.D$4$ = false;
window.D$$4 = false;
window.D$54$ = false;
window.loadServerRes = false;
window.loadLoadingRes = false;
window.D$5$4 = false;
window.D$45 = false;
window.D$54 = false;

window.D$$45 = false;
window.sdkInitRes = null;

window.alert = function (value) {
  console.log("alert", value);
  wx.hideLoading({});
  wx.showModal({
    title: '提示',
    content: value,
    success(res) {
      if (res.confirm) {
        console.log('用户点击确定');
      } else if (res.cancel) {
        console.log('用户点击取消');
      }
    }
  });
};
window.D$Q45$ = function (value) {
  console.log("loginAlert", value);
  D$Q5$4();
  wx.showModal({
    title: '提示',
    content: value,
    confirmText: "重试",
    cancelText: "退出",
    success(res) {
      if (res.confirm) {
        window.D$5Q();
      } else if (res.cancel) {
        console.log("退出游戏");
        wx.exitMiniProgram({});
      }
    }
  });
};
window.exitAlert = function (value) {
  console.log("exitAlert", value);
  wx.showModal({
    title: '提示',
    content: value,
    confirmText: "重登",
    showCancel: false,
    complete(res) {
      console.log("退出游戏");
      wx.exitMiniProgram({});
    }
  });
};

window.D$Q4$5 = false;
window.D$Q54$ = function (value) {
  window.D$Q4$5 = true;
  wx.showLoading(value);
};
window.D$Q5$4 = function () {
  if (window.D$Q4$5) {
    window.D$Q4$5 = false;
    wx.hideLoading({});
  }
};
window.D$Q$45 = function (value) {
  window.ServerLoading.instance.D$Q$45(value);
};
window.msgCheck = function (value, callback) {
  AKSDK.msgCheck(value, function (res) {
    if (res && res.data) {
      if (res.data.state == 1) {
        //没有敏感词
        callback(true);
      } else {
        //存在敏感词xxx
        callback(false);
        console.info("存在敏感词： " + res.data.msg);
      }
    } else {
      console.log("msgCheck", res);
    }
  });
};

window.D$Q$54 = function (value) {
  console.log("getJsURL", value);
};
window.D$Q5$ = function (value) {
  // console.log("toAllProgress", value);
};
window.D$Q$5 = function (value, str, currTaskIndex) {
  // console.log("toProgress", value, str, currTaskIndex);
};
window.D$Q$ = function (value) {
  console.log("toEnterGame", value);
  window.ServerLoading.instance.closeAuthor();
  window.ServerLoading.instance.closeServer();
  window.ServerLoading.instance.closeLoading();
};

window.D$$Q = function (str) {
  // console.log('on api error');
  // AKSDK.logout(function(){});
  window.toErrorAlarm(14, "onApiError " + str);
  window.D$Q45$('on api error');
  var info = {
    id: window.D$5$.roleId,
    role: window.D$5$.roleName,
    level: window.D$5$.roleLevel,
    account: window.D$5$.account,
    version: window.D$5$.lastVersion,
    cdn: window.D$5$.cdn,
    pkgName: window.D$5$.pkgName,
    gamever: window.config.game_ver,
    serverid: window.D$5$.selectedServer ? window.D$5$.selectedServer.server_id : 0,
    systemInfo: window.systemInfo,
    error: "onApiError",
    stack: str ? str : "on api error"
  };
  var infostr = JSON.stringify(info);
  console.error("API错误：" + infostr);
  window.D$Q5(infostr);
};
// 错误警报
window.toErrorAlarm = function (type, info) {
  sendApi(D$5$.logurl, 'log.client_error', {
    'game_pkg': D$5$.pkgName,
    'partner_id': D$5$.partnerId,
    'server_id': D$5$.selectedServer && D$5$.selectedServer.server_id > 0 ? D$5$.selectedServer.server_id : 0,
    'uid': D$5$.account > 0 ? D$5$.account : 0,
    'type': type,
    'info': info
  });
};
window.D$5Q$ = function (str) {
  var info = JSON.parse(str);
  info.gamever = window.config.game_ver;
  info.serverid = window.D$5$.selectedServer ? window.D$5$.selectedServer.server_id : 0;
  info.systemInfo = window.systemInfo;
  var infostr = JSON.stringify(info);
  console.error("上报错误：" + infostr);
  window.D$Q5(infostr);
};
window.D$5$Q = function (error, stack) {
  var info = {
    id: window.D$5$.roleId,
    role: window.D$5$.roleName,
    level: window.D$5$.roleLevel,
    account: window.D$5$.account,
    version: window.D$5$.lastVersion,
    cdn: window.D$5$.cdn,
    pkgName: window.D$5$.pkgName,
    gamever: window.config.game_ver,
    serverid: window.D$5$.selectedServer ? window.D$5$.selectedServer.server_id : 0,
    systemInfo: window.systemInfo,
    error: error,
    stack: stack
  };
  var infostr = JSON.stringify(info);
  console.warn("上报信息：" + infostr);
  window.D$Q5(infostr);
};
window.D$Q5 = function (info) {
  if (window.D$5$.wxPlatform == "devtools") return;
  var url = D$5$.D$Q5 + "?account=" + D$5$.account;
  wx.request({
    url: url,
    method: "POST",
    data: info,
    header: {
      "content-type": "application/json",
      "cache-control": "no-cache"
    },
    success: function (res) {
      DEBUG && console.log("clientlog:", url, info, res);
    },
    fail: function (res) {
      DEBUG && console.log("clientlog:", url, info, res);
    },
    complete: function () {}
  });
};

window.guild = function () {
  function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }
  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "+" + S4() + S4() + S4();
};
/*sdk初始化*/
window.D$5Q = function () {
  console.log("#SDK 初始化：");
  var cfg = AKSDK.getConfig();
  D$5$.channel = cfg.partner_id;
  D$5$.channelNum = cfg.partner_id;
  D$5$.partnerId = cfg.partner_id;
  D$5$.pkgName = cfg.game_pkg;
  var initData = {
    game_ver: D$5$.version
  };
  D$5$.device_id = this.guild();

  D$Q54$({ title: '正在初始化' });
  AKSDK.init(initData, this.D$$Q5.bind(this));
};
/*sdk初始化回调*/
window.D$$Q5 = function (res) {
  var develop = res.develop;
  sdkInitRes = res;
  // res.game_ver = "1.0.86";
  // console.info(window.compareVersion("1.0.61", res.game_ver), window.compareVersion("1.0.62", res.game_ver), window.compareVersion("1.0.63", res.game_ver), window.compareVersion("1.1.64", "1.1.64"));
  console.log("#初始化成功   提审状态:" + develop + "   是否提审:" + (develop == 1) + "   提审版本号:" + res.game_ver + "   当前版本号:" + window.versions.wxVersion); //develop为1的时候说明当前game_ver是提审版本
  if (!res.game_ver || window.D$H4$Q5(window.versions.wxVersion, res.game_ver) < 0) {
    //当前版本 < 后台版本   
    console.log("#正式版=============================");
    D$5$.apiurl = "https://api-tjqy.shzbkj.com"; //正式服（线上版本）
    D$5$.logurl = "https://log-tjqy.shzbkj.com";
    D$5$.payurl = "https://pay-tjqy.shzbkj.com";
    D$5$.cdn = "https://cdn-tjqy-sj.shzbkj.com/weixin_1/";
    D$5$.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/";
    D$5$.version_name = "sj";
    D$5$.wxShield = false;
  } else if (window.D$H4$Q5(window.versions.wxVersion, res.game_ver) == 0) {
    //当前版本 == 后台版本
    console.log("#审核版=============================");
    D$5$.apiurl = "https://api-tjqytest.shzbkj.com"; //测试服（审核版本）
    D$5$.logurl = "https://log-tjqytest.shzbkj.com";
    D$5$.payurl = "https://pay-tjqytest.shzbkj.com";
    D$5$.cdn = "https://cdn-tjqy-sj.shzbkj.com/weixin_0/";
    D$5$.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/";
    D$5$.version_name = "weixin";
    D$5$.wxShield = true; //屏蔽活动
  } else {
    console.log("#开发版=============================");
    D$5$.apiurl = "https://api-tjqytest.shzbkj.com"; //测试服（开发版本）
    D$5$.logurl = "https://log-tjqytest.shzbkj.com";
    D$5$.payurl = "https://pay-tjqytest.shzbkj.com";
    D$5$.cdn = "https://cdn-tjqy-sq.shzbkj.com/weixin_0/";
    D$5$.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/";
    D$5$.version_name = "weixin";
    D$5$.wxShield = false;
  }
  D$5$.from_scene = config.from ? config.from : 0;

  this.D$45Q$();
  this.D$45$Q();

  window.sdkLoginRetry = 5;
  D$Q54$({ title: '正在登录账号' });
  AKSDK.login(this.D$$5Q.bind(this));
};
window.sdkLoginRetry = 5;
/*sdk登录回调*/
window.D$$5Q = function (status, data) {
  if (status == 0 && data && data.token) {
    D$5$.sdk_token = data.token;
    var self = this;
    D$Q54$({ title: '正在验证账号' });
    sendApi(D$5$.apiurl, 'User.login', {
      'platform': D$5$.sdk_name,
      'partner_id': D$5$.partnerId,
      'token': data.token,
      'game_pkg': D$5$.pkgName,
      'deviceId': D$5$.device_id,
      'scene': 'WX_' + D$5$.from_scene
    }, this.D$4Q5$.bind(this), D$4$5, D$$Q);
  } else {
    if (data && data.errMsg && window.sdkLoginRetry > 0 && (data.errMsg.indexOf("fail interrupted") != -1 || data.errMsg.indexOf("network api interrupted") != -1 || data.errMsg.indexOf("Network Error") != -1 || data.errMsg.indexOf("ERR_TIMED_OUT") != -1 || data.errMsg.indexOf("ERR_CONNECTION_ABORTED") != -1 || data.errMsg.indexOf("ERR_CONNECTION_RESET") != -1)) {
      //可以自动重试的失败  network api interrupted in suspend state(小程序退后台之后发起网络请求)
      window.sdkLoginRetry--;
      AKSDK.login(this.D$$5Q.bind(this));
    } else {
      window.toErrorAlarm(1, "AKSDK.login fail: status=" + status + ",errMsg=" + (data ? data.errMsg : ""));
      window.D$5$Q("sdkOnLoginError", JSON.stringify({ status: status, data: data }));
      window.D$Q45$("登录/注册失败" + (data && data.errMsg ? "，" + data.errMsg : ""));
    }
  }
};

window.D$4Q5$ = function (response) {
  if (!response) {
    window.toErrorAlarm(2, "User.login fail: response is null");
    window.D$5$Q("userLoginError", "response is null");
    window.D$Q45$('User.login failed');
    return;
  }
  if (response.state != 'success') {
    window.toErrorAlarm(2, "User.login fail: state=" + response.state);
    window.D$5$Q("userLoginError", JSON.stringify(response));
    window.D$Q45$('User.login failed: ' + response.state);
    return;
  }

  D$5$.userId = String(response.account);
  D$5$.account = String(response.account);
  D$5$.platform = String(response.platform);
  D$5$.channel = String(response.platform);
  D$5$.platform_uid = String(response.platform_uid);
  D$5$.php_sign = String(response.sign);
  D$5$.php_signtime = String(response.time);
  D$5$.sign = ''; // TODO

  var self = this;
  D$Q54$({ title: '请求服务器' });

  var lastSerStr = localStorage.getItem("LastSer_" + D$5$.pkgName + D$5$.account);
  if (lastSerStr && lastSerStr != "") {
    var lastSerId = Number(lastSerStr);
    self.getCheckServers(lastSerId);
  } else {
    self.getDefaultServers();
  }
};

window.getDefaultServers = function () {
  var self = this;
  sendApi(D$5$.apiurl, 'Server.defaultServer', {
    'partner_id': D$5$.partnerId,
    'uid': D$5$.account,
    'version': D$5$.version,
    'game_pkg': D$5$.pkgName,
    'device': D$5$.device_id
  }, self.D$4Q$5.bind(self), D$4$5, D$$Q);
};
window.D$4Q$5 = function (response) {
  if (!response) {
    window.toErrorAlarm(3, 'Server.defaultServer failed');
    window.D$Q45$('Server.defaultServer failed');
    return;
  }
  if (response.state != 'success') {
    window.toErrorAlarm(3, 'Server.defaultServer failed: ' + response.state);
    window.D$Q45$('Server.defaultServer failed: ' + response.state);
    return;
  }
  if (!response.data || response.data.length == 0) {
    window.toErrorAlarm(3, 'Server.defaultServer failed: data null');
    window.D$Q45$('服务器尚未开启');
    return;
  }
  this.updCurServer(response);
};
window.getCheckServers = function (lastSerId) {
  var self = this;
  sendApi(D$5$.apiurl, 'Server.check_server', {
    'server_id': lastSerId,
    'time': Date.now() / 1000
  }, self.onUserLoginCheckServers.bind(self), D$4$5, D$$Q);
};
window.onUserLoginCheckServers = function (response) {
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
    window.ServerLoading.instance.openJumpTipsBtn(sdkInitRes.isShowSdkAge, sdkInitRes.sdk_age_adaptation_icon, sdkInitRes.sdk_age_adaptation_content, sdkInitRes.coordinate_x, sdkInitRes.coordinate_y);
  }
};
window.updCurServer = function (response) {
  D$5$.newRegister = response.is_new != undefined ? response.is_new : 0;
  D$5$.selectedServer = {
    'server_id': String(response.data[0].server_id),
    'server_name': String(response.data[0].server_name),
    'entry_ip': response.data[0].entry_ip,
    'entry_port': parseInt(response.data[0].entry_port),
    'status': D$54Q(response.data[0]),
    'start_time': response.data[0].start_time,
    'cdn': D$5$.cdn
  };
  this.D$$54Q();
};

window.D$$54Q = function () {
  // PF_INFO.newRegister = 0;
  var self = this;
  if (D$5$.newRegister == 1) {
    //新用户，发送验证
    var status = D$5$.selectedServer.status;
    if (status === -1 || status === 0) {
      window.toErrorAlarm(15, 'new register selectedServer status error: id=' + D$5$.selectedServer.id + ',status=' + D$5$.selectedServer.status);
      window.D$Q45$(status === -1 ? "当前服务器在维护中" : "当前服务器尚未开启，敬请期待");
      return;
    }
    D$$Q45(0, D$5$.selectedServer.server_id);
    window.ServerLoading.instance.openLoading(D$5$.newRegister);
  } else {
    //老用户，进游戏的选服界面
    window.ServerLoading.instance.openServer();
    D$Q5$4();
  }
  window.D$54 = true;
  window.D$$45Q();
  window.D$$5Q4();
};

window.forceJumpMiniGame = function () {
  AKSDK.switchGame(function (res) {
    console.log("跳转小游戏" + JSON.stringify(res)); //res {"status":0,"msg":"没开启跳转"} status:0失败 1：成功 msg：提示语
  });
};

// 加载version_config版本文件，读取lastVersion号，外网是从后台请求获取
window.D$45Q$ = function () {
  sendApi(D$5$.apiurl, 'User.getCdnVersion', {
    'game_pkg': D$5$.pkgName,
    'version_name': D$5$.version_name
  }, this.reqVersionConfigCallBack.bind(this), D$4$5, D$$Q);
};
window.reqVersionConfigCallBack = function (data) {
  if (!data) {
    window.toErrorAlarm(5, 'User.getCdnVersion failed');
    window.D$Q45$('User.getCdnVersion failed');
    return;
  }
  if (data.state != 'success') {
    window.toErrorAlarm(5, 'User.getCdnVersion failed: state=' + data.state);
    window.D$Q45$('User.getCdnVersion failed: state=' + data.state);
    return;
  }
  if (!data.data || !data.data.version) {
    window.toErrorAlarm(5, 'User.getCdnVersion failed: version=' + (data.data && data.data.version));
    window.D$Q45$('User.getCdnVersion failed: version=' + (data.data && data.data.version));
    return;
  }
  if (data.data.cdn_url && data.data.cdn_url.length > 10) {
    D$5$.base_cdn = data.data.cdn_url;
    D$5$.cdn = data.data.cdn_url;
  }
  if (data.data.version) {
    D$5$.lastVersion = data.data.version;
  }
  console.info("lastVersion:" + D$5$.lastVersion + ", version_name:" + D$5$.version_name);
  window.D$5$4 = true;
  window.D$$45Q();
  window.D$$5Q4();
};

// 请求隐私、超级VIP、公众号信息
window.pkgOptions;
window.D$45$Q = function () {
  sendApi(D$5$.apiurl, 'Common.get_option_pkg', {
    'game_pkg': D$5$.pkgName
  }, this.D$4$Q5.bind(this), D$4$5, D$$Q);
};
window.D$4$Q5 = function (data) {
  if (data && data.state === "success" && data.data) {
    window.pkgOptions = data.data;
    for (var k in data.data) {
      D$5$[k] = data.data[k];
    }
  } else {
    window.toErrorAlarm(11, 'Common.get_option_pkg failed');
    console.info("reqPkgOptionsCallBack " + data.state);
  }
  window.D$45 = true;
  window.D$$5Q4();
};

window.toPay = function (roleId, roleName, roleLevel, roleCareer, productId, price, productName, productDesc, callback, appleprd_id) {
  productId = String(productId);
  var productname = productName;
  var productdesc = productDesc;
  D$5$.pay_infos[productId] = {
    'productid': productId,
    'productname': productname,
    'productdesc': productdesc,
    // 'ApplePrdId': appleprd_id,
    'roleid': roleId,
    'rolename': roleName,
    'rolelevel': roleLevel,
    'price': price,
    'callback': callback
  };
  sendApi(D$5$.payurl, 'Order.order', {
    'game_pkg': D$5$.pkgName,
    'server_id': D$5$.selectedServer.server_id,
    'server_name': D$5$.selectedServer.server_name,
    'level': roleLevel,
    'uid': D$5$.account,
    'role_id': roleId,
    'role_name': roleName,
    'product_id': productId,
    'product_name': productname,
    'product_desc': productdesc,
    'money': price,
    'partner_id': D$5$.partnerId
    // 'appleprd_id': appleprd_id,
  }, toPayCallBack, D$4$5, D$$Q);
};
window.toPayCallBack = function (data) {
  if (data && (data.errCode === 200 || data.state == 'success')) {
    var info = D$5$.pay_infos[String(data.product_id)];
    if (info.callback) info.callback(data.product_id, data.cp_order_id, -1);
    AKSDK.pay({
      'cpbill': data.cp_order_id,
      'productid': data.product_id,
      'productname': info.productname,
      'productdesc': info.productdesc,
      'serverid': D$5$.selectedServer.server_id,
      'servername': D$5$.selectedServer.server_name,
      'roleid': info.roleid,
      'rolename': info.rolename,
      'rolelevel': info.rolelevel,
      'price': info.price,
      // 'ApplePrdId': info.ApplePrdId,
      'extension': JSON.stringify({
        'cp_order_id': data.cp_order_id
      })
    }, function (status, d) {
      if (info.callback && status == 0) {
        info.callback(data.product_id, data.cp_order_id, status);
      }
      //clientlog(JSON.stringify({error: JSON.stringify({type: "paycallback", status: status, data: data, role_name: info.rolename})}))
      console.info(JSON.stringify({ type: "paycallback", status: status, data: data, role_name: info.rolename }));

      if (status === 0) {
        //成功
      } else if (status === 1) {
        //失败
      } else if (status === 2) {
        //取消
      }
    });
  } else {
    var err = data ? "errCode=" + data.errCode + ",state=" + data.state + ",info=" + data.info : "获取订单失败";
    window.toErrorAlarm(13, "Order.order fail: " + err);
    alert(err);
  }
};

window.D$4$5Q = function () {
  // AKSDK.logLoadingFinish();
};
window.D$Q4$ = function (role_id, role_name, role_level, role_type, time) {
  AKSDK.logCreateRole(D$5$.selectedServer.server_id, D$5$.selectedServer.server_name || D$5$.selectedServer.server_id, role_id, role_name, role_level);
  sendApi(D$5$.apiurl, 'User.create_role', {
    'game_pkg': D$5$.pkgName,
    'server_id': D$5$.selectedServer.server_id,
    'role_id': role_id,
    'uid': D$5$.account,
    'role_name': role_name,
    'role_type': role_type,
    'level': role_level
  });
};
window.D$Q$4 = function (role_id, role_name, role_level, role_type, evolution, time, fight, gold, eraLv, eraNum) {
  D$5$.roleId = role_id;
  D$5$.roleName = role_name;
  D$5$.roleLevel = role_level;
  AKSDK.logEnterGame(D$5$.selectedServer.server_id, D$5$.selectedServer.server_name || D$5$.selectedServer.server_id, role_id, role_name, role_level);
  sendApi(D$5$.apiurl, 'User.update_role', {
    'game_pkg': D$5$.pkgName,
    'server_id': D$5$.selectedServer.server_id,
    'role_id': role_id,
    'uid': D$5$.account,
    'role_name': role_name,
    'role_type': role_type,
    'level': role_level,
    'evolution': evolution
  });
};
window.D$4Q$ = function (role_id, role_name, role_level, role_type, evolution, time, fight, gold, eraLv, eraNum) {
  D$5$.roleId = role_id;
  D$5$.roleName = role_name;
  D$5$.roleLevel = role_level;
  AKSDK.logRoleUpLevel(D$5$.selectedServer.server_id, D$5$.selectedServer.server_name || D$5$.selectedServer.server_id, role_id, role_name, role_level);
  sendApi(D$5$.apiurl, 'User.update_role', {
    'game_pkg': D$5$.pkgName,
    'server_id': D$5$.selectedServer.server_id,
    'role_id': role_id,
    'uid': D$5$.account,
    'role_name': role_name,
    'role_type': role_type,
    'level': role_level,
    'evolution': evolution
  });
};
window.D$4$Q = function (callback) {};

//调起分享
window.D$Q4 = function (callback) {
  AKSDK.share('share', function (data) {
    callback && callback(data);
  });
};
//调起客服
window.openService = function () {
  AKSDK.openService();
};

//微端引导
window.microPortGuide = function () {
  AKSDK.weiduanHelper();
};

//绑定有礼请求短信验证码
window.reqSMSCode = function (phone, role_id, uid, game_pkg, partner_id, sign, callback, server_id) {
  server_id = server_id || D$5$.selectedServer.server_id;
  sendApi(D$5$.apiurl, 'User.get_code', {
    'phone': phone,
    'role_id': role_id,
    'uid': D$5$.account,
    'game_pkg': D$5$.pkgName,
    'partner_id': D$5$.partnerId,
    'server_id': server_id
  }, callback, 2, null, function () {
    return true;
  });
};

//收藏
//window.onShowData = null;
//window.onShowCallback = null;
window.onShow = function (callback) {
  window.D$$Q4 = callback;
  if (window.D$$Q4 && window.D$4Q) {
    console.info("小游戏切前台事件，场景值：" + window.D$4Q.scene);
    window.D$$Q4(window.D$4Q);
    window.D$4Q = null;
  }
};
//获取邀请者
window.D$$4Q = function (packageName, role_id, serverId, callBack) {
  window.send('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', {
    'game_pkg': window.D$5$.pkgName,
    'role_id': role_id,
    'server_id': serverId
  }, callBack);
};
//调起订阅消息
window.D$5Q4$ = function (ids, callback) {
  function onTouchEnd(res) {
    var data = [];
    var tmpIds = [];
    var tmpObj = window.config.tmpId;
    for (var id in tmpObj) {
      var idn = Number(id);
      if (!ids || !ids.length || ids.indexOf(idn) != -1) {
        //ids为空表示所有都请求
        tmpIds.push(tmpObj[id]);
        data.push([idn, 3]); //拒绝、封禁、过滤
      }
    }
    if (window.D$H4$Q5(window.SDKVersion, '2.4.4') >= 0) {
      console.log("调用订阅");
      AKSDK.subscribeMessage && AKSDK.subscribeMessage(tmpIds, function (res) {
        console.log("订阅回调：");
        console.log(res);
        if (res && res.errMsg == "requestSubscribeMessage:ok") {
          for (var id in tmpObj) {
            if (res[tmpObj[id]] == 'accept') {
              //同意
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
        if (window.D$H4$Q5(window.SDKVersion, '2.10.1') >= 0) {
          wx.getSetting({
            withSubscriptions: true, //只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。
            success: function (res1) {
              var sets = res1.subscriptionsSetting['itemSettings'];
              if (sets) {
                console.log("获得订阅设置：");
                console.log(sets);
                for (var id in tmpObj) {
                  if (sets[tmpObj[id]] == 'accept') {
                    //永久同意
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
              } else {
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
          console.log("版本过低，获得订阅设置：失败 " + window.SDKVersion);
          console.log(data);
          callback && callback(data);
        }
      });
    } else {
      console.log("版本过低，不支持订阅 " + window.SDKVersion);
      console.log(data);
      callback && callback(data);
    }
    wx.offTouchEnd(onTouchEnd);
  }
  wx.onTouchEnd(onTouchEnd);
};
//获取电池信息
window.D$5Q$4 = { isSuccess: false, level: "100", isCharging: false };
window.D$54Q$ = function (callback) {
  // console.log("调用获取电池信息");
  wx.getBatteryInfo({
    success: function (resSuccess) {
      var info = window.D$5Q$4;
      info.isSuccess = true;
      info.level = Number(resSuccess.level).toFixed(0);
      info.isCharging = resSuccess.isCharging;
      // console.log("调用获取电池信息成功", info.level, info.isCharging, resSuccess.errMsg, resSuccess.level);
      callback && callback(info.isSuccess, info.level, info.isCharging);
    },
    fail: function (resFail) {
      console.log("调用获取电池信息失败", resFail.errMsg);
      var info = window.D$5Q$4;
      callback && callback(info.isSuccess, info.level, info.isCharging);
    }
  });
};
//获取网络类型
window.getNetworkType = function (callback) {
  wx.getNetworkType({
    success: function (resSuc) {
      callback && callback(true, resSuc);
    },
    fail: function (resFail) {
      callback && callback(false, resFail);
    }
  });
};
//添加网络状态变化监听
window.onNetworkStatusChange = function (func) {
  if (func) wx.onNetworkStatusChange(func);
};
//移除网络状态变化监听
window.offNetworkStatusChange = function (func) {
  wx.offNetworkStatusChange(func);
};

window.send = function (url, data, callBack, retryAmount, errorCB, checkSuccess, reqType, contentType) {
  if (retryAmount == undefined) retryAmount = 1;

  wx.request({
    url: url,
    method: reqType || "GET",
    responseType: "text",
    data: data,
    header: {
      "content-type": contentType || 'application/json'
    },
    success: function (res) {
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
    fail: function (res) {
      DEBUG && console.log("send.fail:", url, info, res);
      window.sendFail(url, data, callBack, retryAmount, errorCB, checkSuccess, res);
    },
    complete: function () {}
  });
};
window.sendFail = function (url, data, callBack, retryAmount, errorCB, checkSuccess, res) {
  if (retryAmount - 1 > 0) {
    setTimeout(function () {
      window.send(url, data, callBack, retryAmount - 1, errorCB, checkSuccess);
    }, 1000);
  } else {
    if (errorCB) {
      errorCB(JSON.stringify({
        url: url,
        response: res
      }));
    }
  }
};

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
  md5Str = md5Str + D$5$.apikey;

  var extendParam = 'sign=' + md5(md5Str);

  send(apiurl + '?' + reqStr + (reqStr == '' ? '' : '&') + extendParam, null, callBack, retryAmount, errorCB, checkSuccess || function (response) {
    return response.state == 'success';
  }, null, 'application/x-www-form-urlencoded');
};

window.D$54$Q = function (step, role_id) {
  var serverTmpId = 0;
  if (D$5$.selectedServer) {
    serverTmpId = D$5$.selectedServer.server_id;
  }
  sendApi(D$5$.logurl, 'UserLog.reportUidStep', {
    'partnerId': D$5$.partnerId,
    'gamePkg': D$5$.pkgName,
    'logTime': Math.floor(Date.now() / 1000),
    'platformUid': D$5$.platform_uid,
    'type': step,
    'serverId': serverTmpId
  }, null, 2, null, function () {
    return true;
  });
};

window.D$5$Q4 = function (step) {
  sendApi(D$5$.apiurl, 'Server.getServerGroup', {
    'partner_id': D$5$.partnerId,
    'uid': D$5$.account,
    'version': D$5$.version,
    'game_pkg': D$5$.pkgName,
    'device': D$5$.device_id
  }, D$5$4Q, D$4$5, D$$Q);
};
window.D$5$4Q = function (data) {
  if (data && data.state === "success" && data.data) {
    data.data.unshift({
      'id': -2,
      'name': "最新服"
    });
    data.data.unshift({
      'id': -1,
      'name': "已有角色"
    });
    D$5$.groupList = data.data;
    if (window.initPanel) window.initPanel.showGroupList();
  } else {
    D$5$.hasGroupReq = false;
    var err = data ? data.state : "";
    window.toErrorAlarm(7, "Server.getServerGroup fail: " + err);
    window.D$Q45$("reqServerGroupCallBack " + err);
  }
};

window.D$Q45 = function (step) {
  sendApi(D$5$.apiurl, 'Server.getServerByUid', {
    'partner_id': D$5$.partnerId,
    'uid': D$5$.account,
    'version': D$5$.version,
    'game_pkg': D$5$.pkgName,
    'device': D$5$.device_id
  }, D$Q54, D$4$5, D$$Q);
};
window.D$Q54 = function (data) {
  D$5$.hasServerReq = false;
  if (data && data.state === "success" && data.data) {
    for (var i = 0; i < data.data.length; i++) {
      data.data[i].status = D$54Q(data.data[i]);
    }
    D$5$.serverList[-1] = window.changeServerName(data.data);
    window.initPanel.showServerList(-1);
  } else {
    var err = data ? data.state : "";
    window.toErrorAlarm(8, "Server.getServerByUid fail: " + err);
    window.D$Q45$("reqServerOwnerCallBack " + err);
  }
};
window.req_server_owner_status = function (callback) {
  sendApi(D$5$.apiurl, 'Server.getServerByUid', {
    'partner_id': D$5$.partnerId,
    'uid': D$5$.account,
    'version': D$5$.version,
    'game_pkg': D$5$.pkgName,
    'device': D$5$.device_id
  }, callback, D$4$5, D$$Q);
};

window.D$4Q5 = function (step, group_id) {
  sendApi(D$5$.apiurl, 'Server.getServerByGroup', {
    'partner_id': D$5$.partnerId,
    'uid': D$5$.account,
    'version': D$5$.version,
    'game_pkg': D$5$.pkgName,
    'device': D$5$.device_id,
    'server_group_id': group_id
  }, D$45Q, D$4$5, D$$Q);
};
window.D$45Q = function (data) {
  D$5$.hasServerReq = false;
  if (data && data.state === "success" && data.data && data.data.data) {
    var groupid = data.data.server_group_id;
    var server_list = [];
    for (var i = 0; i < data.data.data.length; i++) {
      data.data.data[i].status = D$54Q(data.data.data[i]);

      if (server_list.length == 0 || data.data.data[i].status != 0) {
        server_list[server_list.length] = data.data.data[i];
      }
    }
    D$5$.serverList[groupid] = window.changeServerName(server_list);
    window.initPanel.showServerList(groupid);
  } else {
    var err = data ? data.state : "";
    window.toErrorAlarm(9, "Server.getServerByGroup fail: " + err);
    window.D$Q45$("reqServerListCallBack " + err);
  }
};
window.D$H4$5 = function (step) {
  sendApi(D$5$.apiurl, 'Server.getRecommendServerList', {
    'partner_id': D$5$.partnerId,
    'uid': D$5$.account,
    'version': D$5$.version,
    'game_pkg': D$5$.pkgName,
    'device': D$5$.device_id
  }, reqServerRecommendCallBack, D$4$5, D$$Q);
};
window.reqServerRecommendCallBack = function (data) {
  D$5$.hasServerReq = false;
  if (data && data.state === "success" && data.data) {
    for (var i = 0; i < data.data.length; i++) {
      data.data[i].status = D$54Q(data.data[i]);
    }
    D$5$.serverList[-2] = window.changeServerName(data.data);
    window.initPanel.showServerList(-2);
  } else {
    var err = data ? data.state : "";
    window.toErrorAlarm(10, "Server.getRecommendServerList fail: " + err);
    alert("reqServerRecommendCallBack " + err);
  }
};
window.changeServerName = function (lst) {
  return lst;
};
window.D$5Q4 = function (server_id, callback) {
  server_id = server_id || D$5$.selectedServer.server_id;
  sendApi(D$5$.apiurl, 'Common.get_anno', {
    'type': '4',
    'game_pkg': D$5$.pkgName,
    'server_id': server_id
  }, callback);
};
window.req_multi_server_notice = function (type, pkgName, server_id, callback) {
  server_id = server_id || D$5$.selectedServer.server_id;
  sendApi(D$5$.apiurl, 'Common.get_new_anno', {
    'type': type,
    'game_pkg': pkgName,
    'server_id': server_id
  }, callback);
};
window.req_privacy = function (pkgName, callback) {
  sendApi(D$5$.apiurl, 'Common.get_option_pkg_detail', {
    'game_pkg': pkgName
  }, callback);
};

window.D$54Q = function (server) {
  if (server) {
    if (server.status == 1) {
      if (server.online_status == 1) return 2;else return 1;
    } else if (server.status == 0) {
      return 0;
    } else {
      return -1;
    }
  }
  return -1;
};

window.D$$Q45 = function (step, server_id) {
  D$5$.last_check_ban = {
    'step': step,
    'server_id': server_id
  };

  D$Q54$({ title: '正在验证角色' });
  sendApi(D$5$.apiurl, 'User.checkInfo', {
    'partner_id': D$5$.partnerId,
    'uid': D$5$.account,
    'game_pkg': D$5$.pkgName,
    'server_id': server_id,
    'platform': D$5$.platform,
    'platform_uid': D$5$.platform_uid,
    'check_login_time': D$5$.php_signtime,
    'check_login_sign': D$5$.php_sign,
    'version_name': D$5$.version_name
  }, D$$Q54, D$4$5, D$$Q, function (response) {
    return response.state == 'success' || response.info == 'time_err' || response.info == 'sign_err';
  });
};
window.D$$Q54 = function (data) {
  var self = this;
  if (data && data.state === "success" && data.data) {
    var server = D$5$.selectedServer;
    server.channel_num = D$5$.channelNum;
    server.sign = String(data.data.login_sign);
    server.tick = parseInt(data.data.time);
    if (data.data.server_num) server.server_num = parseInt(data.data.server_num);else server.server_num = parseInt(data.data.server_id);
    server.is_domain = 0;
    server.cdn = D$5$.base_cdn;
    server.resver = data.data.cdn_version;
    server.server_options = data.data.server_options;
    if (data.data.max_create) server.max_create = parseInt(data.data.max_create);

    console.log("server_options：" + JSON.stringify(server.server_options));

    if (D$5$.newRegister == 1 && server.server_options && server.server_options.show_btn == 1) {
      D$5$.showGetBtn = 1;
      window.ServerLoading.instance.D$H$5();
    }

    D$$4Q5();
  } else {
    if (D$5$.last_check_ban.step >= 3) {
      var err = data ? data.state : "";
      window.toErrorAlarm(12, "User.checkInfo fail: " + err);
      D$$Q(JSON.stringify(data));
      window.D$Q45$('User.checkInfo failed: ' + err);
    } else {
      sendApi(D$5$.apiurl, 'User.login', {
        'platform': D$5$.sdk_name,
        'partner_id': D$5$.partnerId,
        'token': D$5$.sdk_token,
        'game_pkg': D$5$.pkgName,
        'deviceId': D$5$.device_id,
        'scene': 'WX_' + D$5$.from_scene
      }, function (response) {
        if (!response || response.state != 'success') {
          window.D$Q45$('User.login failed: ' + response && response.state);
          return;
        }
        D$5$.php_sign = String(response.sign);
        D$5$.php_signtime = String(response.time);

        setTimeout(function () {
          D$$Q45(D$5$.last_check_ban.step + 1, D$5$.last_check_ban.server_id);
        }, 1500);
      }, D$4$5, D$$Q, function (response) {
        return response.state == 'success' || response.state == 'failed';
      });
    }
  }
};
window.D$$4Q5 = function () {
  ServerLoading.instance.openLoading(D$5$.newRegister);
  window.D$4$ = true;
  window.D$$5Q4();
};

window.D$$45Q = function () {
  if (window.D$$4 && window.D$54$ && window.loadServerRes && window.loadLoadingRes && window.D$5$4 && window.D$54) {
    if (!window.MainWX.instance) {
      console.log("Main 初始化" + window.MainWX.instance);
      var info = wx.getLaunchOptionsSync();
      var scene = info.scene ? info.scene : 0;
      var platData = {
        cdn: window.D$5$.cdn,
        spareCdn: window.D$5$.spareCdn,
        newRegister: window.D$5$.newRegister,
        wxPC: window.D$5$.wxPC,
        wxIOS: window.D$5$.wxIOS,
        wxAndroid: window.D$5$.wxAndroid,
        wxParam: { limitLoad: window.D$5$.D$HQ4$5, benchmarkLevel: window.D$5$.D$HQ54$, wxFrom: window.config.from == "txcps" ? 1 : 0, wxSDKVersion: window.SDKVersion },
        configType: window.D$5$.configType,
        exposeType: window.D$5$.exposeType,
        scene: scene
      };
      new window.MainWX(platData, window.D$5$.lastVersion, window.D$HQ45$);
    }
  }
};

window.D$$5Q4 = function () {
  if (window.D$$4 && window.D$54$ && window.loadServerRes && window.loadLoadingRes && window.D$5$4 && window.D$54 && window.D$4$ && window.D$45) {
    D$Q5$4();
    if (!D$$45) {
      D$$45 = true;
      if (!window.MainWX.instance) window.D$$45Q();
      var top = 0;
      var rec = wx.getMenuButtonBoundingClientRect(); //基础库 2.1.0 开始支持
      if (rec) {
        if (window.D$5$.wxPhone) {
          top = rec.top;
        }
        console.info("MenuButton  top:" + rec.top + ",bottom:" + rec.bottom + ",left:" + rec.left + ",right:" + rec.right + ",width:" + rec.width + ",height:" + rec.height);
      }

      var selectedServer = {};
      for (const key in D$5$.selectedServer) {
        selectedServer[key] = D$5$.selectedServer[key];
      }

      var platData = {
        channel: window.D$5$.channel,
        account: window.D$5$.account,
        userId: window.D$5$.userId,
        cdn: window.D$5$.cdn,
        data: window.D$5$.data,
        package: window.D$5$.package,
        newRegister: window.D$5$.newRegister,
        pkgName: window.D$5$.pkgName,
        partnerId: window.D$5$.partnerId,
        platform_uid: window.D$5$.platform_uid,
        deviceId: window.D$5$.device_id,
        selectedServer: selectedServer,
        configType: window.D$5$.configType,
        exposeType: window.D$5$.exposeType,
        debugUsers: window.D$5$.debugUsers,
        wxMenuTop: top,
        wxShield: window.D$5$.wxShield
      };

      if (window.pkgOptions) {
        for (var k in window.pkgOptions) {
          platData[k] = window.pkgOptions[k];
        }
      }

      window.MainWX.instance.D$$5H(platData);
      if (D$5$.selectedServer && D$5$.selectedServer.server_id) localStorage.setItem("LastSer_" + D$5$.pkgName + D$5$.account, D$5$.selectedServer.server_id);
    }
  } else {
    console.info("【登录】loadProbPkg:" + window.D$$4 + ",loadMainPkg:" + window.D$54$ + ",loadServerRes:" + window.loadServerRes + ",loadLoadingRes:" + window.loadLoadingRes + ",loadVersion:" + window.D$5$4 + ",loadServer:" + window.D$54 + ",isCheckBan:" + window.D$4$ + ",loadOption:" + window.D$45);
  }
};