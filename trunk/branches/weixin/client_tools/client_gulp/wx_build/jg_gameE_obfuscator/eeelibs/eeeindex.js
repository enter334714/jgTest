import AKSDK from "../eeeesdk/eeesdk.js";
window.versions = {
  wxVersion: window.config.game_ver
};

window.DEBUG = false;
window.E$3E = 1;
window.ENV = 1;
window.E$PE3 = true;
window.WSS = true;
window.E$Q_P3E = "";
window.E$E3 = {
  base_cdn: "https://cdn-tjqy.shzbkj.com/weixin_0/",
  cdn: "https://cdn-tjqy.shzbkj.com/weixin_0/"
};

E$E3.pay_infos = {};
E$E3.package = "0";
E$E3.version = window.versions.wxVersion;
E$E3.mac = "";
E$E3.os = "1";
E$E3.sdk_name = "9130";
E$E3.apiurl = "https://api-tjqytest.shzbkj.com";
E$E3.logurl = "https://log-tjqytest.shzbkj.com";
E$E3.payurl = "https://pay-tjqytest.shzbkj.com";
E$E3.apikey = "MQx0mYlUWO5XYKvgAIPKWgK1w722GKih";
E$E3.partnerId = "1";
E$E3.pkgName = "";
E$E3.device_id = "";
E$E3.from_scene = 0;
E$E3.serverList = {};
E$E3.channelNum = parseInt(E$E3.partnerId);
E$E3.channel = E$E3.partnerId;
E$E3.selectedServer = {};

E$E3.E$_E = "https://jgcenter.sh9130.com/clientlog/";
E$E3.showLogo = false;
E$E3.debugUsers = "39927500|58163716|74597555";
E$E3.tick = Date.now();

E$E3.configType = "_weixin";
E$E3.exposeType = "_a";
E$E3.loadingType = 2;
E$E3.lastVersion = 1985;
E$E3.wxVersion = window.versions.wxVersion;
E$E3.wxShield = false;
E$E3.wxIOS = false;
E$E3.wxAndroid = false;
E$E3.wxPC = false;

window.E$P3E = 5;
window.E$P3 = false;
window.E$3P = false;
window.E$EP3 = false;
window.loadServerRes = false;
window.loadLoadingRes = false;
window.E$E3P = false;
window.E$PE = false;
window.E$EP = false;

window.E$3PE = false;

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
window.E$_PE3 = function (value) {
  console.log("loginAlert", value);
  E$_E3P();
  wx.showModal({
    title: '提示',
    content: value,
    confirmText: "重试",
    cancelText: "退出",
    success(res) {
      if (res.confirm) {
        window.E$E_();
      } else if (res.cancel) {
        console.log("退出游戏");
        wx.exitMiniProgram({});
      }
    }
  });
};
window.E$3QE = function (value) {
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

window.E$_P3E = false;
window.E$_EP3 = function (value) {
  window.E$_P3E = true;
  wx.showLoading(value);
};
window.E$_E3P = function () {
  if (window.E$_P3E) {
    window.E$_P3E = false;
    wx.hideLoading({});
  }
};
window.E$_3PE = function (value) {
  window.ServerLoading.instance.E$_3PE(value);
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

window.E$_3EP = function (value) {
  console.log("getJsURL", value);
};
window.E$_E3 = function (value) {
  // console.log("toAllProgress", value);
};
window.E$_3E = function (value, str, currTaskIndex) {
  // console.log("toProgress", value, str, currTaskIndex);
};
window.E$_3 = function (value) {
  console.log("toEnterGame", value);
  window.ServerLoading.instance.closeAuthor();
  window.ServerLoading.instance.closeServer();
  window.ServerLoading.instance.closeLoading();
};

window.E$3_ = function (str) {
  // console.log('on api error');
  // AKSDK.logout(function(){});
  window.E$_PE3('on api error');
  var info = {
    id: window.E$E3.roleId,
    role: window.E$E3.roleName,
    level: window.E$E3.roleLevel,
    account: window.E$E3.account,
    version: window.E$E3.lastVersion,
    cdn: window.E$E3.cdn,
    pkgName: window.E$E3.pkgName,
    gamever: window.config.game_ver,
    serverid: window.E$E3.selectedServer ? window.E$E3.selectedServer.server_id : 0,
    systemInfo: window.systemInfo,
    error: "onApiError",
    stack: str ? str : "on api error"
  };
  var infostr = JSON.stringify(info);
  console.error("API错误：" + infostr);
  window.E$_E(infostr);
};
window.E$E_3 = function (str) {
  var info = JSON.parse(str);
  info.gamever = window.config.game_ver;
  info.serverid = window.E$E3.selectedServer ? window.E$E3.selectedServer.server_id : 0;
  info.systemInfo = window.systemInfo;
  var infostr = JSON.stringify(info);
  console.error("上报错误：" + infostr);
  window.E$_E(infostr);
};
window.E$E3_ = function (error, stack) {
  var info = {
    id: window.E$E3.roleId,
    role: window.E$E3.roleName,
    level: window.E$E3.roleLevel,
    account: window.E$E3.account,
    version: window.E$E3.lastVersion,
    cdn: window.E$E3.cdn,
    pkgName: window.E$E3.pkgName,
    gamever: window.config.game_ver,
    serverid: window.E$E3.selectedServer ? window.E$E3.selectedServer.server_id : 0,
    systemInfo: window.systemInfo,
    error: error,
    stack: stack
  };
  var infostr = JSON.stringify(info);
  console.warn("上报信息：" + infostr);
  window.E$_E(infostr);
};
window.E$_E = function (info) {
  if (window.E$E3.wxPlatform == "devtools") return;
  var url = E$E3.E$_E + "?account=" + E$E3.account;
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
window.E$E_ = function () {
  console.log("#SDK 初始化：");
  var cfg = AKSDK.getConfig();
  E$E3.channel = cfg.partner_id;
  E$E3.channelNum = cfg.partner_id;
  E$E3.partnerId = cfg.partner_id;
  E$E3.pkgName = cfg.game_pkg;
  var initData = {
    game_ver: E$E3.version
  };
  E$E3.device_id = this.guild();

  E$_EP3({ title: '正在初始化' });
  AKSDK.init(initData, this.E$3_E.bind(this));
};
/*sdk初始化回调*/
window.E$3_E = function (res) {
  var develop = res.develop;
  // res.game_ver = "1.0.86";
  // console.info(window.compareVersion("1.0.61", res.game_ver), window.compareVersion("1.0.62", res.game_ver), window.compareVersion("1.0.63", res.game_ver), window.compareVersion("1.1.64", "1.1.64"));
  console.log("#初始化成功   提审状态:" + develop + "   是否提审:" + (develop == 1) + "   提审版本号:" + res.game_ver + "   当前版本号:" + window.versions.wxVersion); //develop为1的时候说明当前game_ver是提审版本
  if (!res.game_ver || window.E$QP3E_(window.versions.wxVersion, res.game_ver) < 0) {
    //当前版本 < 后台版本   
    console.log("#正式版=============================");
    E$E3.apiurl = "https://api-tjqy.shzbkj.com"; //正式服（线上版本）
    E$E3.logurl = "https://log-tjqy.shzbkj.com";
    E$E3.payurl = "https://pay-tjqy.shzbkj.com";
    E$E3.cdn = "https://cdn-tjqy-fj.shzbkj.com/weixin_1/";
    E$E3.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/";
    E$E3.version_name = "fj";
    E$E3.wxShield = false;
  } else if (window.E$QP3E_(window.versions.wxVersion, res.game_ver) == 0) {
    //当前版本 == 后台版本
    console.log("#审核版=============================");
    E$E3.apiurl = "https://api-tjqytest.shzbkj.com"; //测试服（审核版本）
    E$E3.logurl = "https://log-tjqytest.shzbkj.com";
    E$E3.payurl = "https://pay-tjqytest.shzbkj.com";
    E$E3.cdn = "https://cdn-tjqy-fj.shzbkj.com/weixin_0/";
    E$E3.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/";
    E$E3.version_name = "weixin";
    E$E3.wxShield = true; //屏蔽活动
  } else {
    console.log("#开发版=============================");
    E$E3.apiurl = "https://api-tjqytest.shzbkj.com"; //测试服（开发版本）
    E$E3.logurl = "https://log-tjqytest.shzbkj.com";
    E$E3.payurl = "https://pay-tjqytest.shzbkj.com";
    E$E3.cdn = "https://cdn-tjqy-fj.shzbkj.com/weixin_0/";
    E$E3.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/";
    E$E3.version_name = "weixin";
    E$E3.wxShield = false;
  }
  E$E3.from_scene = config.from ? config.from : 0;

  this.E$PE_3();
  this.E$PE3_();

  window.sdkLoginRetry = 5;
  E$_EP3({ title: '正在登录账号' });
  AKSDK.login(this.E$3E_.bind(this));
};
window.sdkLoginRetry = 5;
/*sdk登录回调*/
window.E$3E_ = function (status, data) {
  if (status == 0 && data && data.token) {
    E$E3.sdk_token = data.token;
    var self = this;
    E$_EP3({ title: '正在验证账号' });
    sendApi(E$E3.apiurl, 'User.login', {
      'platform': E$E3.sdk_name,
      'partner_id': E$E3.partnerId,
      'token': data.token,
      'game_pkg': E$E3.pkgName,
      'deviceId': E$E3.device_id,
      'scene': 'WX_' + E$E3.from_scene
    }, this.E$P_E3.bind(this), E$P3E, E$3_);
  } else {
    if (data && data.errMsg && window.sdkLoginRetry > 0 && (data.errMsg.indexOf("fail interrupted") != -1 || data.errMsg.indexOf("network api interrupted") != -1 || data.errMsg.indexOf("Network Error") != -1 || data.errMsg.indexOf("ERR_TIMED_OUT") != -1 || data.errMsg.indexOf("ERR_CONNECTION_ABORTED") != -1 || data.errMsg.indexOf("ERR_CONNECTION_RESET") != -1)) {
      //可以自动重试的失败  network api interrupted in suspend state(小程序退后台之后发起网络请求)
      window.sdkLoginRetry--;
      AKSDK.login(this.E$3E_.bind(this));
    } else {
      window.E$E3_("sdkOnLoginError", JSON.stringify({ status: status, data: data }));
      window.E$_PE3("登录/注册失败" + (data && data.errMsg ? "，" + data.errMsg : ""));
    }
  }
};

window.E$P_E3 = function (response) {
  if (!response) {
    window.E$_PE3('User.login failed');
    return;
  }
  if (response.state != 'success') {
    window.E$_PE3('User.login failed: ' + response.state);
    return;
  }

  E$E3.userId = String(response.account);
  E$E3.account = String(response.account);
  E$E3.platform = String(response.platform);
  E$E3.channel = String(response.platform);
  E$E3.platform_uid = String(response.platform_uid);
  E$E3.php_sign = String(response.sign);
  E$E3.php_signtime = String(response.time);
  E$E3.sign = ''; // TODO

  var self = this;
  E$_EP3({ title: '请求服务器' });
  sendApi(E$E3.apiurl, 'Server.defaultServer', {
    'partner_id': E$E3.partnerId,
    'uid': E$E3.account,
    'version': E$E3.version,
    'game_pkg': E$E3.pkgName,
    'device': E$E3.device_id
  }, self.E$P_3E.bind(self), E$P3E, E$3_);
};

window.E$P_3E = function (response) {
  if (!response) {
    window.E$_PE3('Server.defaultServer failed');
    return;
  }
  if (response.state != 'success') {
    window.E$_PE3('Server.defaultServer failed: ' + response.state);
    return;
  }
  if (!response.data || response.data.length == 0) {
    window.E$_PE3('服务器尚未开启');
    return;
  }

  E$E3.newRegister = response.is_new;
  E$E3.selectedServer = {
    'server_id': String(response.data[0].server_id),
    'server_name': String(response.data[0].server_name),
    'entry_ip': response.data[0].entry_ip,
    'entry_port': parseInt(response.data[0].entry_port),
    'status': E$3_PE(response.data[0]),
    'start_time': response.data[0].start_time,
    'cdn': E$E3.cdn
  };
  this.E$Q_PE3();
};

window.E$Q_PE3 = function () {
  if (E$E3.newRegister == 1) {
    //新用户，发送验证
    var status = E$E3.selectedServer.status;
    if (status === -1 || status === 0) {
      window.E$_PE3(status === -1 ? "当前服务器在维护中" : "当前服务器尚未开启，敬请期待");
      return;
    }
    E$3_EP(0, E$E3.selectedServer.server_id);
    window.ServerLoading.instance.openLoading(E$E3.newRegister);
  } else {
    //老用户，进游戏的选服界面
    window.ServerLoading.instance.openServer();
    E$_E3P();
  }
  window.E$EP = true;
  window.E$3E_P();
  window.E$3EP_();
};

// 加载version_config版本文件，读取lastVersion号，外网是从后台请求获取
window.E$PE_3 = function () {
  var self = this;
  sendApi(E$E3.apiurl, 'User.getCdnVersion', {
    'game_pkg': E$E3.pkgName,
    'version_name': E$E3.version_name
  }, function (response) {
    if (!response) {
      window.E$_PE3('User.getCdnVersion failed');
      return;
    }
    if (response.state != 'success') {
      window.E$_PE3('User.getCdnVersion failed: state=' + response.state);
      return;
    }
    if (!response.data || !response.data.version) {
      window.E$_PE3('User.getCdnVersion failed: version=' + (response.data && response.data.version));
      return;
    }
    if (response.data.cdn_url && response.data.cdn_url.length > 10) {
      E$E3.base_cdn = response.data.cdn_url;
      E$E3.cdn = response.data.cdn_url;
    }
    if (response.data.version) {
      E$E3.lastVersion = response.data.version;
    }
    console.info("lastVersion:" + E$E3.lastVersion + ", version_name:" + E$E3.version_name);
    window.E$E3P = true;
    window.E$3E_P();
    window.E$3EP_();
  });
};

// 请求隐私、超级VIP、公众号信息
window.pkgOptions;
window.E$PE3_ = function () {
  sendApi(E$E3.apiurl, 'Common.get_option_pkg', {
    'game_pkg': E$E3.pkgName
  }, E$P3_E);
};
window.E$P3_E = function (data) {
  if (data.state === "success" && data.data) {
    window.pkgOptions = data.data;
    for (var k in data.data) {
      E$E3[k] = data.data[k];
    }
  } else {
    console.info("reqPkgOptionsCallBack " + data.state);
  }
  window.E$PE = true;
  window.E$3EP_();
};

window.toPay = function (roleId, roleName, roleLevel, roleCareer, productId, price, productName, productDesc, callback) {
  productId = String(productId);
  var productname = productName;
  var productdesc = productDesc;
  E$E3.pay_infos[productId] = {
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
  sendApi(E$E3.payurl, 'Order.order', {
    'game_pkg': E$E3.pkgName,
    'server_id': E$E3.selectedServer.server_id,
    'server_name': E$E3.selectedServer.server_name,
    'level': roleLevel,
    'uid': E$E3.account,
    'role_id': roleId,
    'role_name': roleName,
    'product_id': productId,
    'product_name': productname,
    'product_desc': productdesc,
    'money': price,
    'partner_id': E$E3.partnerId
    // 'appleprd_id': appleprd_id,
  }, toPayCallBack, E$P3E, E$3_);
};
window.toPayCallBack = function (data) {
  if (data) {
    if (data.errCode === 200 || data.state == 'success') {
      var info = E$E3.pay_infos[String(data.product_id)];
      if (info.callback) info.callback(data.product_id, data.cp_order_id, -1);
      AKSDK.pay({
        'cpbill': data.cp_order_id,
        'productid': data.product_id,
        'productname': info.productname,
        'productdesc': info.productdesc,
        'serverid': E$E3.selectedServer.server_id,
        'servername': E$E3.selectedServer.server_name,
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
      alert(data.info);
    }
  }
};

window.E$P3E_ = function () {
  // AKSDK.logLoadingFinish();
};
window.E$_P3 = function (role_id, role_name, role_level, role_type, time) {
  AKSDK.logCreateRole(E$E3.selectedServer.server_id, E$E3.selectedServer.server_name || E$E3.selectedServer.server_id, role_id, role_name, role_level);
  sendApi(E$E3.apiurl, 'User.create_role', {
    'game_pkg': E$E3.pkgName,
    'server_id': E$E3.selectedServer.server_id,
    'role_id': role_id,
    'uid': E$E3.account,
    'role_name': role_name,
    'role_type': role_type,
    'level': role_level
  });
};
window.E$_3P = function (role_id, role_name, role_level, role_type, evolution, time, fight, gold, eraLv, eraNum) {
  E$E3.roleId = role_id;
  E$E3.roleName = role_name;
  E$E3.roleLevel = role_level;
  AKSDK.logEnterGame(E$E3.selectedServer.server_id, E$E3.selectedServer.server_name || E$E3.selectedServer.server_id, role_id, role_name, role_level);
  sendApi(E$E3.apiurl, 'User.update_role', {
    'game_pkg': E$E3.pkgName,
    'server_id': E$E3.selectedServer.server_id,
    'role_id': role_id,
    'uid': E$E3.account,
    'role_name': role_name,
    'role_type': role_type,
    'level': role_level,
    'evolution': evolution
  });
};
window.E$P_3 = function (role_id, role_name, role_level, role_type, evolution, time, fight, gold, eraLv, eraNum) {
  E$E3.roleId = role_id;
  E$E3.roleName = role_name;
  E$E3.roleLevel = role_level;
  AKSDK.logRoleUpLevel(E$E3.selectedServer.server_id, E$E3.selectedServer.server_name || E$E3.selectedServer.server_id, role_id, role_name, role_level);
  sendApi(E$E3.apiurl, 'User.update_role', {
    'game_pkg': E$E3.pkgName,
    'server_id': E$E3.selectedServer.server_id,
    'role_id': role_id,
    'uid': E$E3.account,
    'role_name': role_name,
    'role_type': role_type,
    'level': role_level,
    'evolution': evolution
  });
};
window.E$P3_ = function (callback) {};

//调起分享
window.E$_P = function (callback) {
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

//收藏
//window.onShowData = null;
//window.onShowCallback = null;
window.E$P_ = function (callback) {
  window.E$3P_ = callback;
  if (window.E$3P_ && window.E$3_P) {
    console.info("小游戏切前台事件，场景值：" + window.E$3_P.scene);
    window.E$3P_(window.E$3_P);
    window.E$3_P = null;
  }
};
//获取邀请者
window.E$E_P3 = function (packageName, role_id, serverId, callBack) {
  window.send('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', {
    'game_pkg': window.E$E3.pkgName,
    'role_id': role_id,
    'server_id': serverId
  }, callBack);
};
//调起订阅消息
window.E$E_3P = function (ids, callback) {
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
    if (window.E$QP3E_(window.SDKVersion, '2.4.4') >= 0) {
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
        if (window.E$QP3E_(window.SDKVersion, '2.10.1') >= 0) {
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
window.E$EP_3 = { isSuccess: false, level: "100", isCharging: false };
window.E$EP3_ = function (callback) {
  // console.log("调用获取电池信息");
  wx.getBatteryInfo({
    success: function (resSuccess) {
      var info = window.E$EP_3;
      info.isSuccess = true;
      info.level = Number(resSuccess.level).toFixed(0);
      info.isCharging = resSuccess.isCharging;
      // console.log("调用获取电池信息成功", info.level, info.isCharging, resSuccess.errMsg, resSuccess.level);
      callback && callback(info.isSuccess, info.level, info.isCharging);
    },
    fail: function (resFail) {
      console.log("调用获取电池信息失败", resFail.errMsg);
      var info = window.E$EP_3;
      callback && callback(info.isSuccess, info.level, info.isCharging);
    }
  });
};

window.send = function (url, data, callBack, retryAmount, errorCB, checkSuccess, reqType, contentType) {
  if (retryAmount == undefined) {
    retryAmount = 1;
  }

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200 || xhr.status == 301) {
        var response = xhr.response;
        response = JSON.parse(xhr.response);

        if (!checkSuccess || checkSuccess(response, xhr, url)) {
          if (callBack) {
            callBack(response);
          }
          return;
        } else {
          console.info(url);
          console.error(response);
        }
      }
      if (retryAmount - 1 > 0) {
        setTimeout(function () {
          send(url, data, callBack, retryAmount - 1, errorCB, checkSuccess);
        }, 1000);
      } else {
        if (errorCB) {
          errorCB(JSON.stringify({
            url: url,
            status: xhr.status,
            response: xhr.response,
            responseType: xhr.responseType
          }));
        }
      }
    }
  };
  xhr.open(reqType || "GET", url);
  xhr.responseType = "text";
  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('content-type', contentType || 'application/json');
  xhr.send(data);
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
  md5Str = md5Str + E$E3.apikey;

  var extendParam = 'sign=' + md5(md5Str);

  send(apiurl + '?' + reqStr + (reqStr == '' ? '' : '&') + extendParam, null, callBack, retryAmount, errorCB, checkSuccess || function (response) {
    return response.state == 'success';
  }, null, 'application/x-www-form-urlencoded');
};

window.E$E3_P = function (step, role_id) {
  var serverTmpId = 0;
  if (E$E3.selectedServer) {
    serverTmpId = E$E3.selectedServer.server_id;
  }
  sendApi(E$E3.logurl, 'UserLog.reportUidStep', {
    'partnerId': E$E3.partnerId,
    'gamePkg': E$E3.pkgName,
    'logTime': Math.floor(Date.now() / 1000),
    'platformUid': E$E3.platform_uid,
    'type': step,
    'serverId': serverTmpId
  }, null, 2, null, function () {
    return true;
  });
};

window.E$E3P_ = function (step) {
  sendApi(E$E3.apiurl, 'Server.getServerGroup', {
    'partner_id': E$E3.partnerId,
    'uid': E$E3.account,
    'version': E$E3.version,
    'game_pkg': E$E3.pkgName,
    'device': E$E3.device_id
  }, E$_PE, E$P3E, E$3_);
};
window.E$_PE = function (data) {
  if (data.state === "success" && data.data) {
    data.data.unshift({
      'id': -2,
      'name': "最新服"
    });
    data.data.unshift({
      'id': -1,
      'name': "已有角色"
    });
    E$E3.groupList = data.data;
    if (window.initPanel) window.initPanel.showGroupList();
  } else {
    E$E3.hasGroupReq = false;
    window.E$_PE3("reqServerGroupCallBack " + data.state);
  }
};

window.E$_EP = function (step) {
  sendApi(E$E3.apiurl, 'Server.getServerByUid', {
    'partner_id': E$E3.partnerId,
    'uid': E$E3.account,
    'version': E$E3.version,
    'game_pkg': E$E3.pkgName,
    'device': E$E3.device_id
  }, E$P_E, E$P3E, E$3_);
};
window.E$P_E = function (data) {
  E$E3.hasServerReq = false;
  if (data.state === "success" && data.data) {
    for (var i = 0; i < data.data.length; i++) {
      data.data[i].status = E$3_PE(data.data[i]);
    }
    E$E3.serverList[-1] = window.changeServerName(data.data);
    window.initPanel.showServerList(-1);
  } else {
    window.E$_PE3("reqServerOwnerCallBack " + data.state);
  }
};
window.req_server_owner_status = function (callback) {
  sendApi(E$E3.apiurl, 'Server.getServerByUid', {
    'partner_id': E$E3.partnerId,
    'uid': E$E3.account,
    'version': E$E3.version,
    'game_pkg': E$E3.pkgName,
    'device': E$E3.device_id
  }, callback, E$P3E, E$3_);
};

window.E$PE_ = function (step, group_id) {
  sendApi(E$E3.apiurl, 'Server.getServerByGroup', {
    'partner_id': E$E3.partnerId,
    'uid': E$E3.account,
    'version': E$E3.version,
    'game_pkg': E$E3.pkgName,
    'device': E$E3.device_id,
    'server_group_id': group_id
  }, E$E_P, E$P3E, E$3_);
};
window.E$E_P = function (data) {
  E$E3.hasServerReq = false;
  if (data.state === "success" && data.data && data.data.data) {
    var groupid = data.data.server_group_id;
    var server_list = [];
    for (var i = 0; i < data.data.data.length; i++) {
      data.data.data[i].status = E$3_PE(data.data.data[i]);

      if (server_list.length == 0 || data.data.data[i].status != 0) {
        server_list[server_list.length] = data.data.data[i];
      }
    }
    E$E3.serverList[groupid] = window.changeServerName(server_list);
    window.initPanel.showServerList(groupid);
  } else {
    window.E$_PE3("reqServerListCallBack " + data.state);
  }
};
window.E$QEP3 = function (step) {
  sendApi(E$E3.apiurl, 'Server.getRecommendServerList', {
    'partner_id': E$E3.partnerId,
    'uid': E$E3.account,
    'version': E$E3.version,
    'game_pkg': E$E3.pkgName,
    'device': E$E3.device_id
  }, reqServerRecommendCallBack, E$P3E, E$3_);
};
window.reqServerRecommendCallBack = function (data) {
  E$E3.hasServerReq = false;
  if (data.state === "success" && data.data) {
    for (var i = 0; i < data.data.length; i++) {
      data.data[i].status = E$3_PE(data.data[i]);
    }
    E$E3.serverList[-2] = window.changeServerName(data.data);
    window.initPanel.showServerList(-2);
  } else {
    alert("reqServerRecommendCallBack " + data.state);
  }
};
window.changeServerName = function (lst) {
  if (!lst && lst.length <= 0) return lst;
  for (let i = 0; i < lst.length; i++) {
    if (lst[i].is_recommend && lst[i].is_recommend == 1) {
      lst[i].server_name += "(推荐)";
    }
  }
  return lst;
};
window.E$EP_ = function (server_id, callback) {
  server_id = server_id || E$E3.selectedServer.server_id;
  sendApi(E$E3.apiurl, 'Common.get_anno', {
    'type': '4',
    'game_pkg': E$E3.pkgName,
    'server_id': server_id
  }, callback);
};
window.req_multi_server_notice = function (type, pkgName, server_id, callback) {
  server_id = server_id || E$E3.selectedServer.server_id;
  sendApi(E$E3.apiurl, 'Common.get_new_anno', {
    'type': type,
    'game_pkg': pkgName,
    'server_id': server_id
  }, callback);
};

window.E$3_PE = function (server) {
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

window.E$3_EP = function (step, server_id) {
  E$E3.last_check_ban = {
    'step': step,
    'server_id': server_id
  };
  var self = this;
  E$_EP3({ title: '正在验证角色' });
  sendApi(E$E3.apiurl, 'User.checkInfo', {
    'partner_id': E$E3.partnerId,
    'uid': E$E3.account,
    'game_pkg': E$E3.pkgName,
    'server_id': server_id,
    'platform': E$E3.platform,
    'platform_uid': E$E3.platform_uid,
    'check_login_time': E$E3.php_signtime,
    'check_login_sign': E$E3.php_sign,
    'version_name': E$E3.version_name
  }, E$3P_E, E$P3E, E$3_, function (response) {
    return response.state == 'success' || response.info == 'time_err' || response.info == 'sign_err';
  });
};
window.E$3P_E = function (data) {
  var self = this;
  if (data.state === "success" && data.data) {
    var server = E$E3.selectedServer;
    server.channel_num = E$E3.channelNum;

    server.sign = String(data.data.login_sign);
    server.tick = parseInt(data.data.time);
    if (data.data.server_num) server.server_num = parseInt(data.data.server_num);else server.server_num = parseInt(data.data.server_id);
    server.is_domain = 0;
    server.cdn = E$E3.base_cdn;
    server.resver = data.data.cdn_version;
    server.server_options = data.data.server_options;

    console.log("server_options：" + JSON.stringify(server.server_options));

    if (E$E3.newRegister == 1 && server.server_options && server.server_options.show_btn == 1) {
      E$E3.showGetBtn = 1;
      window.ServerLoading.instance.E$Q3();
    }

    E$3PE_();
  } else {
    sendApi(E$E3.apiurl, 'User.login', {
      'platform': E$E3.sdk_name,
      'partner_id': E$E3.partnerId,
      'token': E$E3.sdk_token,
      'game_pkg': E$E3.pkgName,
      'deviceId': E$E3.device_id,
      'scene': 'WX_' + E$E3.from_scene
    }, function (response) {
      if (response.state == "failed") {
        window.E$_PE3('User.login failed: ' + response.state);
        return;
      }
      E$E3.php_sign = String(response.sign);
      E$E3.php_signtime = String(response.time);

      setTimeout(function () {
        E$3_EP(E$E3.last_check_ban.step, E$E3.last_check_ban.server_id);
      }, 1500);
    }, E$P3E, E$3_, function (response) {
      return response.state == 'success' || response.state == 'failed';
    });
  }
};
window.E$3PE_ = function () {
  ServerLoading.instance.openLoading(E$E3.newRegister);
  window.E$P3 = true;
  window.E$3EP_();
};

window.E$3E_P = function () {
  if (window.E$3P && window.E$EP3 && window.loadServerRes && window.loadLoadingRes && window.E$E3P && window.E$EP) {
    if (!window.MainWX.instance) {
      console.log("Main 初始化" + window.MainWX.instance);
      var info = wx.getLaunchOptionsSync();
      var scene = info.scene ? info.scene : 0;
      var platData = {
        cdn: window.E$E3.cdn,
        spareCdn: window.E$E3.spareCdn,
        newRegister: window.E$E3.newRegister,
        wxPC: window.E$E3.wxPC,
        wxIOS: window.E$E3.wxIOS,
        wxAndroid: window.E$E3.wxAndroid,
        wxParam: { limitLoad: window.E$E3.E$Q_EP3, benchmarkLevel: window.E$E3.E$Q_E3P, wxFrom: window.config.from == "txcps" ? 1 : 0, wxSDKVersion: window.SDKVersion },
        configType: window.E$E3.configType,
        exposeType: window.E$E3.exposeType,
        scene: scene
      };
      new window.MainWX(platData, window.E$E3.lastVersion, window.E$Q_P3E);
    }
  }
};

window.E$3EP_ = function () {
  if (window.E$3P && window.E$EP3 && window.loadServerRes && window.loadLoadingRes && window.E$E3P && window.E$EP && window.E$P3 && window.E$PE) {
    E$_E3P();
    if (!E$3PE) {
      E$3PE = true;
      if (!window.MainWX.instance) window.E$3E_P();
      var top = 0;
      var rec = wx.getMenuButtonBoundingClientRect(); //基础库 2.1.0 开始支持
      if (rec) {
        if (window.E$E3.wxPhone) {
          top = rec.top;
        }
        console.info("MenuButton  top:" + rec.top + ",bottom:" + rec.bottom + ",left:" + rec.left + ",right:" + rec.right + ",width:" + rec.width + ",height:" + rec.height);
      }

      var selectedServer = {};
      for (const key in E$E3.selectedServer) {
        selectedServer[key] = E$E3.selectedServer[key];
      }

      var platData = {
        channel: window.E$E3.channel,
        account: window.E$E3.account,
        userId: window.E$E3.userId,
        serverId: selectedServer.server_id,
        cdn: window.E$E3.cdn,
        data: window.E$E3.data,
        package: window.E$E3.package,
        newRegister: window.E$E3.newRegister,
        pkgName: window.E$E3.pkgName,
        partnerId: window.E$E3.partnerId,
        platform_uid: window.E$E3.platform_uid,
        deviceId: window.E$E3.device_id,
        selectedServer: selectedServer,
        configType: window.E$E3.configType,
        exposeType: window.E$E3.exposeType,
        debugUsers: window.E$E3.debugUsers,
        wxMenuTop: top,
        wxShield: window.E$E3.wxShield
      };

      if (window.pkgOptions) {
        for (var k in window.pkgOptions) {
          platData[k] = window.pkgOptions[k];
        }
      }

      window.MainWX.instance.E$PQ3E(platData);
    }
  } else {
    console.info("【登录】loadProbPkg:" + window.E$3P + ",loadMainPkg:" + window.E$EP3 + ",loadServerRes:" + window.loadServerRes + ",loadLoadingRes:" + window.loadLoadingRes + ",loadVersion:" + window.E$E3P + ",loadServer:" + window.E$EP + ",isCheckBan:" + window.E$P3 + ",loadOption:" + window.E$PE);
  }
};