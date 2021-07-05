import AKSDK from "../ddk/ddsdk.js";
window.versions = { 
  wxVersion: window.config.game_ver,  
};


window.DEBUG = false;
window.PLATFORM = 1;
window.ENV = 1;
window.PACK = true;
window.WSS = true;
window.workerJsURL = "";
window.PF_INFO = {
  base_cdn: "https://cdn-gz-jg.sh9130.com/weixin_0/",
  cdn: "https://cdn-gz-jg.sh9130.com/weixin_0/",
}

PF_INFO.pay_infos = {}
PF_INFO.package = "0";
PF_INFO.callback = "https://jgcenter.sh9130.com/api/sdk/game.php/";
PF_INFO.version = window.versions.wxVersion;
PF_INFO.mac = "";
PF_INFO.os = "1";
PF_INFO.sdk_name = "9130";
PF_INFO.apiurl = "https://api-pjg.sh9130.com";
PF_INFO.apikey = "MQx0mYlUWO5XYKvgAIPKWgK1w722GKih";
PF_INFO.partnerId = "1";
PF_INFO.pkgName = "";
PF_INFO.device_id = "";
PF_INFO.serverList = {};
PF_INFO.channelNum = parseInt(PF_INFO.partnerId);
PF_INFO.channel = PF_INFO.partnerId;
PF_INFO.selectedServer = {};

PF_INFO.clientlog = "https://jgcenter.sh9130.com/clientlog/";
PF_INFO.showLogo = false;
PF_INFO.debugUsers = "39927500|58163716|74597555";
PF_INFO.tick = Date.now();

PF_INFO.configType = "_weixin";
PF_INFO.exposeType = "_a";
PF_INFO.loadingType = 1;
PF_INFO.lastVersion = 1985;
PF_INFO.wxVersion = window.versions.wxVersion;
PF_INFO.wxShield = false;
PF_INFO.wxIOS = false;

window.apiRetryAmount = 5;
window.isCheckBan = false;
window.loadProbPkg = false;
window.loadMainPkg = false;
window.loadVersion = false;
window.loadOption = false;
window.loadServer = false;

window.bEnterGame = false;


window.alert = function(value) {
  console.log("alert", value);
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
  console.log("loginAlert", value);
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
  console.log("toEnterGame", value);
  window.ServerLoading.instance.closeAuthor();
  window.ServerLoading.instance.closeServer();
  window.ServerLoading.instance.closeLoading();
}

window.onApiError = function(info) {
  console.log('on api error');
  // AKSDK.logout(function(){});
  window.loginAlert('on api error');
  clientlog(info ? info : '{"error": "on api error"}');
}
window.reqRecordError = function(str) {
  var info = JSON.parse(str);
  info.gamever = window.config.game_ver;
  info.serverid = (window.PF_INFO.selectedServer ? window.PF_INFO.selectedServer.server_id : 0);
  info.systemInfo = window.systemInfo;
  var infostr = JSON.stringify(info);
  console.error("上报错误："+ infostr);
  clientlog(infostr);
}
window.reqRecordInfo = function(str) {
  var info = {
    id: window.PF_INFO.roleId,
    role: window.PF_INFO.roleName,
    level: window.PF_INFO.roleLevel,
    user: window.PF_INFO.account,
    version: window.PF_INFO.lastVersion,
    cdn: window.PF_INFO.cdn,
    pkgName: window.PF_INFO.pkgName,
    gamever: window.config.game_ver,
    serverid: (window.PF_INFO.selectedServer ? window.PF_INFO.selectedServer.server_id : 0),
    systemInfo: window.systemInfo,
    error: str,
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



window.guild = function() {
  function S4() {
    return (((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1));
  }
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "+" + S4() + S4() + S4());
}
/*sdk初始化*/
window.sdkInit = function() {
  console.log("#SDK 初始化：")
  var cfg = AKSDK.getConfig();
  PF_INFO.channel = cfg.partner_id;
  PF_INFO.channelNum = cfg.partner_id;
  PF_INFO.partnerId = cfg.partner_id;
  PF_INFO.pkgName = cfg.game_pkg;
  var initData = {
    game_ver: PF_INFO.version
  };
  PF_INFO.device_id = this.guild();
  AKSDK.init(initData, this.sdkOnInited.bind(this));
}
/*sdk初始化回调*/
window.sdkOnInited = function(res) {
  var develop = res.develop;
  // res.game_ver = "1.0.86";
  // console.info(window.compareVersion("1.0.61", res.game_ver), window.compareVersion("1.0.62", res.game_ver), window.compareVersion("1.0.63", res.game_ver), window.compareVersion("1.1.64", "1.1.64"));
  console.log("#初始化成功   提审状态:"+ develop +"   是否提审:"+ (develop == 1) +"   提审版本号:"+res.game_ver +"   当前版本号:"+window.versions.wxVersion); //develop为1的时候说明当前game_ver是提审版本
  if (window.compareVersion(window.versions.wxVersion, res.game_ver) < 0) {  //当前版本 < 后台版本   
    console.log("#正式版=============================");
    PF_INFO.apiurl = "https://api-tjqy.shzbkj.com";    //正式服（线上版本）
    PF_INFO.apikey = "MQx0mYlUWO5XYKvgAIPKWgK1w722GKih";
    PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/",
    PF_INFO.version_name = "weixin";
    PF_INFO.wxShield = false;
  } else if (window.compareVersion(window.versions.wxVersion, res.game_ver) == 0){  //当前版本 == 后台版本
    console.log("#审核版=============================");
    PF_INFO.apiurl = "https://api-pjg.sh9130.com";    //测试服（审核版本）
    PF_INFO.apikey = "MQx0mYlUWO5XYKvgAIPKWgK1w722GKih";
    PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/",
    PF_INFO.version_name = "";
    PF_INFO.wxShield = true;                          //屏蔽活动
  } else {
    console.log("#开发版=============================");
    PF_INFO.apiurl = "https://api-pjg.sh9130.com";    //测试服（开发版本）
    PF_INFO.apikey = "MQx0mYlUWO5XYKvgAIPKWgK1w722GKih";
    PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/",
    PF_INFO.version_name = "";
    PF_INFO.wxShield = false;
  }
  this.loadVersionConfig();
  this.reqPkgOptions();
  AKSDK.login(this.sdkOnLogin.bind(this));
}
/*sdk登录回调*/
window.sdkOnLogin = function(status, data) {
  wxShowLoading({ title: '正在验证账号' });
  if (status === 0 && data && data.token) {
    PF_INFO.sdk_token = data.token;
    var self = this;
    sendApi('User.login', {
      'platform': PF_INFO.sdk_name,
      'partner_id': PF_INFO.partnerId,
      'token': data.token,
      'game_pkg': PF_INFO.pkgName,
      'deviceId': PF_INFO.device_id,
    }, this.onUserLogin.bind(this), apiRetryAmount, onApiError);
  } else {
    clientlog(JSON.stringify({
      error: JSON.stringify({
        type: "sdkOnLoginError",
        status: status,
        data: data
      })
    }));
    window.loginAlert("登录/注册失败" + (data&&data.errMsg ? "，"+data.errMsg : ""));
  }
}

window.onUserLogin = function (response) {
  if (!response) {
    window.loginAlert('User.login failed');
    return;
  }
  if (response.state != 'success') {
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
  sendApi('Server.defaultServer', {
    'partner_id': PF_INFO.partnerId,
    'uid': PF_INFO.account,
    'version': PF_INFO.version,
    'game_pkg': PF_INFO.pkgName,
    'device': PF_INFO.device_id,
  }, self.onUserLoginDefaultServers.bind(self), apiRetryAmount, onApiError);
}

window.onUserLoginDefaultServers = function(response) {
  if (!response) {
    window.loginAlert('Server.defaultServer failed');
    return;
  }
  if (response.state != 'success') {
    window.loginAlert('Server.defaultServer failed: ' + response.state);
    return;
  }
  if (!response.data || response.data.length == 0) {
    window.loginAlert('服务器尚未开启');
    return;
  }

  PF_INFO.newRegister = response.is_new;
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
      window.loginAlert(status === -1 ? "当前服务器在维护中" : "当前服务器尚未开启，敬请期待");
      return;
    } 
    req_server_check_ban(0, PF_INFO.selectedServer.server_id);
    window.ServerLoading.instance.openLoading(PF_INFO.newRegister);
  } else { //老用户，进游戏的选服界面
    window.ServerLoading.instance.openServer();
    wxHideLoading();
  }
  window.loadServer = true;
  window.initMain();
  window.enterToGame(); 
}

// 加载version_config版本文件，读取lastVersion号，外网是从后台请求获取
window.loadVersionConfig = function() {
  var self = this;
  sendApi('User.getCdnVersion', {
    'game_pkg': PF_INFO.pkgName,
    'version_name': PF_INFO.version_name,
  }, function(response) {
    if (!response) {
      window.loginAlert('User.getCdnVersion failed');
      return;
    }
    if (response.state != 'success') {
      window.loginAlert('User.getCdnVersion failed: ' + response.state);
      return;
    }
    PF_INFO.base_cdn = response.data.cdn_url || PF_INFO.base_cdn;
    PF_INFO.cdn = response.data.cdn_url || PF_INFO.cdn;
    PF_INFO.lastVersion = response.data.version || PF_INFO.lastVersion;
    console.info("资源版本号："+PF_INFO.lastVersion);
    window.loadVersion = true;
    window.initMain();
    window.enterToGame(); 
  });
}

// 请求隐私、超级VIP、微信公众号信息
window.pkgOptions
window.reqPkgOptions = function() {
  sendApi('Common.get_option_pkg', { 
    'game_pkg': PF_INFO.pkgName,
  }, reqPkgOptionsCallBack);
}
window.reqPkgOptionsCallBack = function(data) {
  if (data.state === "success" && data.data) {
    window.pkgOptions = data.data;
    for (var k in data.data) {
      PF_INFO[k] = data.data[k];
    }
  } else {            
    console.info("reqPkgOptionsCallBack "+data.state);
  }
  window.loadOption = true;
  window.enterToGame(); 
}


window.toPay = function(roleId, roleName, roleLevel, roleCareer, productId, price, productName, productDesc, callback) {
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
  sendApi('Order.order', {
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
    // 'appleprd_id': appleprd_id,
  }, toPayCallBack, apiRetryAmount, onApiError)

}
window.toPayCallBack = function(data) {
  if (data) {
    if (data.errCode === 200 || data.state == 'success') {
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
      alert(data.info);
    }
  }
}


window.loadCreateRole = function() {
  // AKSDK.logLoadingFinish();
}
window.toCreate = function(role_id, role_name, role_level, role_type) {
  AKSDK.logCreateRole(PF_INFO.selectedServer.server_id, PF_INFO.selectedServer.server_name || PF_INFO.selectedServer.server_id, role_id, role_name, role_level);
  sendApi('User.create_role', {
    'game_pkg': PF_INFO.pkgName,
    'server_id': PF_INFO.selectedServer.server_id,
    'role_id': role_id,
    'uid': PF_INFO.account,
    'role_name': role_name,
    'role_type': role_type,
    'level': role_level,
  })
}
window.toLogin = function(role_id, role_name, role_level, role_type, evolution) {
  PF_INFO.roleId = role_id;
  PF_INFO.roleName = role_name;
  PF_INFO.roleLevel = role_level;
  AKSDK.logEnterGame(PF_INFO.selectedServer.server_id, PF_INFO.selectedServer.server_name || PF_INFO.selectedServer.server_id, role_id, role_name, role_level);
  sendApi('User.update_role', {
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
window.toLevelUp = function(role_id, role_name, role_level, role_type, evolution) {
  PF_INFO.roleId = role_id;
  PF_INFO.roleName = role_name;
  PF_INFO.roleLevel = role_level;
  // AKSDK.logRoleUpLevel(PF_INFO.selectedServer.server_id, PF_INFO.selectedServer.server_name || PF_INFO.selectedServer.server_id, role_id, role_name, role_level);
  /*sendApi('User.update_role', {
      'game_pkg': PF_INFO.pkgName,
      'server_id': PF_INFO.selectedServer.server_id,
      'role_id': role_id,
      'uid': PF_INFO.account,
      'role_name': role_name,
      'role_type': role_type,
      'level': role_level,
      'evolution': evolution,
  })*/
}
window.toRealName = function(callback) {

}

//调起分享（微信）
window.openShare = function(callback){
  AKSDK.share('share', function (data) {
      callback(data);
  }); 
}
//调起客服
window.openService = function(){
  AKSDK.openService();
}

//微端引导
window.microPortGuide = function(){
  AKSDK.weiduanHelper();
}

//收藏
window.onShowData = null;
window.onShowCallback = null;
window.onShow = function(callback){
  window.onShowCallback = callback;
  if (window.onShowCallback && window.onShowData) {
    console.info("小游戏切前台事件，场景值："+window.onShowData.scene);
    window.onShowCallback(window.onShowData);
    window.onShowData = null;
  }
}
//微信获取邀请者
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
  // console.log("调用获取电池信息");
  wx.getBatteryInfo({
    success: function(resSuccess) {
      var info = window.batteryInfo;
      info.isSuccess = true;
      info.level = Number(resSuccess.level).toFixed(0);
      info.isCharging = resSuccess.isCharging;
      // console.log("调用获取电池信息成功", info.level, info.isCharging, resSuccess.errMsg, resSuccess.level);
      callback && callback(info.isSuccess, info.level, info.isCharging);
    },
    fail: function(resFail) {
      console.log("调用获取电池信息失败", resFail.errMsg);
      var info = window.batteryInfo;
      callback && callback(info.isSuccess, info.level, info.isCharging);
    }
  });
}

window.send = function(url, data, callBack, retryAmount, errorCB, checkSuccess, reqType, contentType) {
  if (retryAmount == undefined) {
    retryAmount = 1;
  }

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if ((xhr.status == 200 || xhr.status == 301)) {
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
        setTimeout(function() {
          send(url, data, callBack, retryAmount - 1, errorCB, checkSuccess);
        }, 1000);
      } else {
        if (errorCB) {
          errorCB(JSON.stringify({
            error: JSON.stringify({
              url: url,
              status: xhr.status,
              response: xhr.response,
              responseType: xhr.responseType
            })
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
}

window.sendApi = function(method, param, callBack, retryAmount, errorCB, checkSuccess) {
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

  send(PF_INFO.apiurl + '?' + reqStr + (reqStr == '' ? '' : '&') + extendParam, null, callBack, retryAmount, errorCB, checkSuccess || function(response) {
    return response.state == 'success';
  }, null, 'application/x-www-form-urlencoded');
}

window.onRoleRecordStep = function(step, role_id) {
  var serverTmpId = 0;
  if (PF_INFO.selectedServer) {
    serverTmpId = PF_INFO.selectedServer.server_id;
  }
  sendApi('UserLog.reportUidStep', {
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
  sendApi('Server.getServerGroup', {
    'partner_id': PF_INFO.partnerId,
    'uid': PF_INFO.account,
    'version': PF_INFO.version,
    'game_pkg': PF_INFO.pkgName,
    'device': PF_INFO.device_id,
  }, reqServerGroupCallBack, apiRetryAmount, onApiError)
}
window.reqServerGroupCallBack = function(data) {
  if (data.state === "success" && data.data) {
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
    window.loginAlert("reqServerGroupCallBack " + data.state);
  }
}

window.req_server_owner = function(step) {
  sendApi('Server.getServerByUid', {
    'partner_id': PF_INFO.partnerId,
    'uid': PF_INFO.account,
    'version': PF_INFO.version,
    'game_pkg': PF_INFO.pkgName,
  }, reqServerOwnerCallBack, apiRetryAmount, onApiError);
}
window.reqServerOwnerCallBack = function(data) {
  PF_INFO.hasServerReq = false;
  if (data.state === "success" && data.data) {
    for (var i = 0; i < data.data.length; i++) {
      data.data[i].status = get_status(data.data[i]);
    }
    PF_INFO.serverList[-1] = window.changeServerName(data.data);
    window.initPanel.showServerList(-1);
  } else {
    window.loginAlert("reqServerOwnerCallBack " + data.state);
  }
}

window.req_server_list = function(step, group_id) {
  sendApi('Server.getServerByGroup', {
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
  if (data.state === "success" && data.data && data.data.data) {
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
    window.loginAlert("reqServerListCallBack " + data.state);
  }
}
window.req_recommend_server_list = function(step) {
  sendApi('Server.getRecommendServerList', {
    'partner_id': PF_INFO.partnerId,
    'uid': PF_INFO.account,
    'version': PF_INFO.version,
    //'game_pkg': PF_INFO.pkgName,
  }, reqServerRecommendCallBack, apiRetryAmount, onApiError);
}
window.reqServerRecommendCallBack = function(data) {
  PF_INFO.hasServerReq = false;
  if (data.state === "success" && data.data) {
      for (var i = 0; i < data.data.length; i++) {
          data.data[i].status = get_status(data.data[i]);
      }
      PF_INFO.serverList[-2] = window.changeServerName(data.data);
      window.initPanel.showServerList(-2);
  } else {
      alert("reqServerRecommendCallBack " + data.state);
  }
}
window.changeServerName = function(lst) {
  if(!lst && lst.length <= 0) return lst;
  for(let i = 0; i < lst.length; i++) {
      if(lst[i].is_recommend && lst[i].is_recommend == 1) {
          lst[i].server_name += "(推荐)";
      }
  }
  return lst;
}
window.req_server_notice = function(server_id, callback) {
  server_id = server_id || PF_INFO.selectedServer.server_id;
  sendApi('Common.get_anno', {
    'type': '4',
    'game_pkg': PF_INFO.pkgName,
    'server_id': server_id,
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
  sendApi('User.checkInfo', {
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
  if (data.state === "success" && data.data) {
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

    if (PF_INFO.newRegister == 1 && server.server_options && server.server_options.show_btn == 1) {
      PF_INFO.showGetBtn = 1;
      window.ServerLoading.instance.setShowBtn();
    }

    checkBanSuccess();
  } else {
    sendApi('User.login', {
      'platform': PF_INFO.sdk_name,
      'partner_id': PF_INFO.partnerId,
      'token': PF_INFO.sdk_token,
      'game_pkg': PF_INFO.pkgName,
      'deviceId': PF_INFO.device_id,
    }, function(response) {
      if (response.state == "failed") {
        window.loginAlert('User.login failed: ' + response.state);
        return;
      }
      PF_INFO.php_sign = String(response.sign);
      PF_INFO.php_signtime = String(response.time);

      setTimeout(function() {
        req_server_check_ban(PF_INFO.last_check_ban.step, PF_INFO.last_check_ban.server_id);
      }, 1500);
    }, apiRetryAmount, onApiError, function(response) {
      return response.state == 'success' || response.state == 'failed';
    });
  }
}
window.checkBanSuccess = function() {
  ServerLoading.instance.openLoading(PF_INFO.newRegister);
  window.isCheckBan = true;
  window.enterToGame(); 
}


window.initMain = function() {
  if(window.loadProbPkg && window.loadMainPkg && window.loadVersion && window.loadServer) {
    if (!window.MainWX.instance) {
      console.log("Main 初始化"+window.MainWX.instance);
      var info = wx.getLaunchOptionsSync();
      var scene = info.scene?info.scene:0;
      var platData = {
        cdn: window.PF_INFO.cdn,
        spareCdn: window.PF_INFO.spareCdn, 
        newRegister: window.PF_INFO.newRegister,
        wxPC: window.PF_INFO.wxPC,
        wxIOS: window.PF_INFO.wxIOS,
        wxParam: {limitLoad: window.PF_INFO.wxLimitLoad, benchmarkLevel: window.PF_INFO.wxBenchmarkLevel},
        configType: window.PF_INFO.configType, 
        exposeType: window.PF_INFO.exposeType,
        scene:scene
      }
      new window.MainWX(platData, window.PF_INFO.lastVersion, window.workerJsURL);
    }
  }
}

window.enterToGame = function() {
  if(window.loadProbPkg && window.loadMainPkg && window.loadVersion && window.loadServer && window.isCheckBan && window.loadOption) {
    if (!bEnterGame) {
      bEnterGame = true;
      if (!window.MainWX.instance) window.initMain();
      var top = 0;
      var rec = wx.getMenuButtonBoundingClientRect(); //基础库 2.1.0 开始支持
      if (rec) {
        if (window.PF_INFO.wxPhone) {
          top = rec.top;
        }
        console.info("MenuButton  top:"+rec.top+",bottom:"+rec.bottom+",left:"+rec.left+",right:"+rec.right+",width:"+rec.width+",height:"+rec.height);
      }

      var selectedServer = {};
      for (const key in PF_INFO.selectedServer) {
          selectedServer[key] = PF_INFO.selectedServer[key];
      }

      var platData = {
        channel: window.PF_INFO.channel,
        account: window.PF_INFO.account,
        userId: window.PF_INFO.userId,
        serverId: selectedServer.server_id,
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

      window.MainWX.instance.initPlatdata(platData);
    } else {
      wxHideLoading();
    }
  }
}
