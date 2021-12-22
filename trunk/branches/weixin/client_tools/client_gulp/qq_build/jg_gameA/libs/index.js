window.sdk_config = qq.sdk_config;
window.md5 = qq.wx_md5;
window.AKSDK = qq.AKSDK;
window.PF_INFO = qq.PF_INFO;
window.WX_MAIN = qq.WX_MAIN;


window.DEBUG = false;
window.PLATFORM = 2;
window.ENV = 2;
window.PACK = true;
window.WSS = true;
window.workerJsURL = "";


window.isCheckBan = false;
window.loadProbPkg = false;
window.loadMainPkg = false;
window.loadServerRes = false;
window.loadLoadingRes = false;
window.loadVersion = false;
window.loadOption = false;
window.loadServer = false;

window.bEnterGame = false;

//比较版本号
window.compareVersion = WX_MAIN.compareVersion;
window.isMatchSDKVersion = WX_MAIN.isMatchSDKVersion;

window.apiRetryAmount = WX_MAIN.apiRetryAmount;
window.clientlog = WX_MAIN.clientlog;
window.reqRecordError = WX_MAIN.reqRecordError;
window.reqRecordInfo = WX_MAIN.reqRecordInfo;
window.send = WX_MAIN.send;
window.sendApi = WX_MAIN.sendApi;
window.onApiError = WX_MAIN.onApiError;
window.onRoleRecordStep = WX_MAIN.onRoleRecordStep;
window.wxShowLoading = WX_MAIN.wxShowLoading;
window.wxHideLoading = WX_MAIN.wxHideLoading;
window.alert = WX_MAIN.alert;
window.loginAlert = WX_MAIN.loginAlert;
window.exitAlert = WX_MAIN.exitAlert;
window.get_status = WX_MAIN.get_status;

var sysInfo = qq.getSystemInfoSync();
window.SDKVersion = sysInfo.SDKVersion;
window.AppPlatform = sysInfo.AppPlatform;
console.log("QQ基础库版本："+window.SDKVersion+"  联盟平台："+window.AppPlatform);


window.changeServerLoading = function(value) {
  window.ServerLoading.instance.changeServerLoading(value);
}
window.msgCheck = function(value, callback) {
  AKSDK.msgCheck(value, function(res){
    if (res == 1){ //没有敏感词
      callback(true);
    } else { //存在敏感词xxx
      callback(false);
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


qq.initComplete = function() {
  // 每个分包的图集不一样，采用传参形式
  // var wxData = {
  //   showLoadingBtn: true,
  // }
  // new window.ServerLoading(wxData);

  if (PF_INFO.newRegister == 1) { //新用户，发送验证
    var status = PF_INFO.selectedServer.status;
    if (status === -1 || status === 0) {
      window.loginAlert(status === -1 ? "当前服务器在维护中" : "当前服务器尚未开启，敬请期待");
      return;
    } 
    // window.loadServerRes = true;
    req_server_check_ban(0, PF_INFO.selectedServer.server_id);
    window.ServerLoading.instance.openLoading(PF_INFO.newRegister);
  } else { //老用户，进游戏的选服界面
    window.ServerLoading.instance.openServer();
    wxHideLoading();
  }
  
  // if (qq.loadingInterval) clearInterval(qq.loadingInterval);
  // qq.loadingInterval = null;

  window.loadServer = true;

  window.loadVersionConfig();
  window.reqPkgOptions();

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
        window.loginAlert('User.getCdnVersion failed');
        return;
    }
    if (data.state != 'success') {
        window.loginAlert('User.getCdnVersion failed: state=' + data.state);
        return;
    }
    if (!data.data || !data.data.version) {
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
  // 好友战力排行榜上报
  window.setUserCloudStorage(role_id, role_name, role_type, role_level, fight);
  
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

  // 添加最近浏览彩签，10级开启
  if (role_level == 10 && window.qqAppPlatform == "qq") {
    window.addColorSign();
  }
  // 好友战力排行榜上报
  window.setUserCloudStorage(role_id, role_name, role_type, role_level, fight);

  AKSDK.logRoleUpLevel(PF_INFO.selectedServer.server_id, PF_INFO.selectedServer.server_name || PF_INFO.selectedServer.server_id, role_id, role_name, role_level);
  /*sendApi(PF_INFO.apiurl, 'User.update_role', {
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
  AKSDK.weiduanHelper();
}

//调起组队分享（QQ）
window.shareInvite = function(callback){
  console.info("调起组队分享");
  if (window.qqAppPlatform == "qq") {
    if (window.isMatchSDKVersion('1.15.0')) { //shareInvite基础库 1.15.0 版本开始支持
      qq.shareInvite({
        success(resSucc) {
          console.info("组队分享成功"+ resSucc.errMsg);
          callback(resSucc);
        },
        fail(resFail){
          console.info("组队分享失败"+ resFail.errMsg);
        }
      });
    }
  }
}

//添加图标到桌面
window.saveAppToDesktop = function(){
  console.info("调用添加图标到桌面："+ window.SDKVersion);
  if (window.isMatchSDKVersion('1.7.1')) {  // saveAppToDesktop 基础库最低版本1.7.1
    qq.saveAppToDesktop({
      success: function(resSucc) {
        console.info("调用添加图标到桌面成功："+ (resSucc&&resSucc.errMsg));
      },
      fail: function(resFail) {
        console.info("调用添加图标到桌面失败："+ (resFail&&resFail.errMsg));
      }
    })
  }
}

//添加最近浏览彩签
window.addColorSign = function(){
  if (window.isMatchSDKVersion("1.20.0")) { //qq.addRecentColorSign  基础库 1.20.0 开始支持
    qq.getSetting({ // 可以通过 qq.getSetting 先查询一下用户是否授权了 "scope.recentColorSign" 这个 scope
      success(resSucc) {
        console.info("查询用户是否授权最近浏览彩签成功："+ (resSucc&&resSucc.errMsg));
        if (!resSucc.authSetting["scope.recentColorSign"]) {
          qq.authorize({
            scope: "scope.recentColorSign",
            success: function(resSucc) {
              console.info("调用添加最近浏览彩签授权成功："+ (resSucc&&resSucc.errMsg));
              qq.addRecentColorSign({
                query: "recentColorSign=1",
                success: function(resSucc) {
                    console.log("调用添加最近浏览彩签成功："+ (resSucc&&resSucc.errMsg));
                },
                fail: function(resFail) {
                    console.log("调用添加最近浏览彩签失败: "+ (resFail&&resFail.errMsg));
                }
              })
            },
            fail: function(resFail) {
              console.info("调用添加最近浏览彩签授权失败："+ (resFail&&resFail.errMsg));
            }
          })
        }
      },
      fail: function(resFail) {
        console.info("查询用户是否授权最近浏览彩签成功："+ (resFail&&resFail.errMsg));
      }
    })
  }
}

//好友战力排行榜上报
window.setUserCloudStorage = function(role_id, role_name, role_type, role_level, fight){
  qq.setUserCloudStorage({ 
    KVDataList: [{key:'fight', value: fight+""}],
    success: function(resSucc) {
      console.log("setUserCloudStorage 成功"+ resSucc.errMsg);
    },
    fail: function(resFail) {
      console.log("setUserCloudStorage 失败"+ resFail.errMsg);
    },
  })
}


window.setSharedCanvasSize = function (width, height) {
  const openDataContext = qq.getOpenDataContext()
  const sharedCanvas = openDataContext.canvas
  sharedCanvas.width = width;
  sharedCanvas.height = height;
}

/*定向分享*/
window.atShare = function (param) {
  let callback = param.data.callBack;
  callback() //直接回调 
  openContextPostMsg(param);
}

window.openContextPostMsg = function (param) {
  let shareConfig = AKSDK.getConfig();
  param.data.share_title = shareConfig.share_title;
  param.data.share_img = shareConfig.share_img
  const openDataContext = qq.getOpenDataContext();
  openDataContext.postMessage(param)
}

//收藏
window.onShow = function(callback){
  qq.wx_onShowCallback = callback;
  if (qq.wx_onShowCallback && qq.wx_onShowData) {
    console.info("小游戏切前台事件，场景值："+qq.wx_onShowData.scene);
    qq.wx_onShowCallback(qq.wx_onShowData);
    qq.wx_onShowData = null;
  }
}
//跳转活动会场
window.goToQQAct = function(type) {
	var jumpUrl = "";
	if (type == 1) {//春节活动
		jumpUrl = "https://act.qzone.qq.com/v2/vip/tx/p/7445_480816ae?_nav_alpha=0&_nav_txtclr=ffffff&_nav_titleclr=ffffff&_nav_anim=true&r=1&_wv=3&_wwv=4";
	}
	if (jumpUrl != "") {
		qq.openActivity({
			url: jumpUrl,
			success(res) {
				console.log("success：", res);
			},
			fail(res) {
				console.log("fail：", res);
			},
		});
	}
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
  if (window.qqAppPlatform == "qq") {
    function onTouchEnd(res) {
      var data = [];
      var tmpIds = [];
      var tmpObj = window.sdk_config.tmpId;
      for (var id in tmpObj) {
          var idn = Number(id);
          if (!ids || !ids.length || ids.indexOf(idn)!=-1) { //ids为空表示所有都请求
              tmpIds.push(tmpObj[id]);
              data.push([idn, 3]); //拒绝、封禁、过滤
          }
      }
      if (window.compareVersion(window.SDKVersion, '0.0.1') >= 0) {
          console.log("调用订阅");
          AKSDK.subscribeMessage(tmpIds, function (res) {
              console.log("订阅回调：");
              console.log(res);
              if (res && res.errMsg == "subscribeAppMsg:ok") {
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
              if (window.compareVersion(window.SDKVersion, '0.0.1') >= 0) {
                  qq.getSetting({
                      withSubscriptions: true, //只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。
                      success: function (res1) {
                          var sets = res1.subscriptionsSetting && res1.subscriptionsSetting['itemSettings'];
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
      qq.offTouchEnd(onTouchEnd);
    }
    qq.onTouchEnd(onTouchEnd);
  }
}
//获取电池信息
window.batteryInfo = {isSuccess: false, level: "100", isCharging: false};
window.getBatteryInfo = function(callback) {
  // console.log("调用获取电池信息");
  qq.getBatteryInfo({
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



window.req_server_check_ban = function(step, server_id) {
  PF_INFO.last_check_ban = {
    'step': step,
    'server_id': server_id
  };
  var self = this;
  window.onRoleRecordStep(28);
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
  window.onRoleRecordStep(29);
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

    console.log("server_options："+ JSON.stringify(server.server_options));

    if (PF_INFO.newRegister == 1 && server.server_options && server.server_options.show_btn == 1) {
      PF_INFO.showGetBtn = 1;
      window.ServerLoading.instance.setShowBtn();
    }

    checkBanSuccess();
  } else {
    if (PF_INFO.last_check_ban.step >= 3) {
      onApiError(JSON.stringify(data));
      window.loginAlert('User.checkInfo failed: ' + data.state);
    } else {
      sendApi(PF_INFO.apiurl, 'User.login', {
        'platform': PF_INFO.sdk_name,
        'partner_id': PF_INFO.partnerId,
        'token': PF_INFO.sdk_token,
        'game_pkg': PF_INFO.pkgName,
        'deviceId': PF_INFO.device_id,
        'scene': 'QQ_'+ PF_INFO.from_scene,
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
  window.enterToGame(); 
}


window.initMain = function() {
  if(window.loadProbPkg && window.loadMainPkg && window.loadServerRes && window.loadLoadingRes && window.loadVersion && window.loadServer) {
    if (!window.MainWX.instance) {
      console.log("Main 初始化"+window.MainWX.instance);
      var info = qq.getLaunchOptionsSync();
      var scene = info.scene?info.scene:0;
      var platData = {
        cdn: window.PF_INFO.cdn,
        spareCdn: window.PF_INFO.spareCdn, 
        newRegister: window.PF_INFO.newRegister,
        wxPC: window.PF_INFO.wxPC,
        wxIOS: window.PF_INFO.wxIOS,
        wxAndroid: window.PF_INFO.wxAndroid,
        wxParam: {limitLoad: window.PF_INFO.wxLimitLoad, benchmarkLevel: window.PF_INFO.wxBenchmarkLevel, wxFrom: (window.sdk_config.from ? 1: 0), qqAppPlatform: window.AppPlatform},
        configType: window.PF_INFO.configType, 
        exposeType: window.PF_INFO.exposeType,
        scene:scene
      }
      new window.MainWX(platData, window.PF_INFO.lastVersion, window.workerJsURL);
    }
  }
}

window.enterToGame = function() {
  if(window.loadProbPkg && window.loadMainPkg && window.loadServerRes && window.loadLoadingRes && window.loadVersion && window.loadServer && window.isCheckBan && window.loadOption) {
    wxHideLoading();
    if (!bEnterGame) {
      bEnterGame = true;
      if (!window.MainWX.instance) window.initMain();
      var top = 0;
      var rec = qq.getMenuButtonBoundingClientRect(); //基础库 2.1.0 开始支持
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
    }
  } else {
    console.info("【登录】loadProbPkg:"+window.loadProbPkg+",loadMainPkg:"+window.loadMainPkg+",loadServerRes:"+window.loadServerRes+",loadLoadingRes:"+window.loadLoadingRes+",loadVersion:"+window.loadVersion+",loadServer:"+window.loadServer+",isCheckBan:"+window.isCheckBan+",loadOption:"+window.loadOption);
  }
}
