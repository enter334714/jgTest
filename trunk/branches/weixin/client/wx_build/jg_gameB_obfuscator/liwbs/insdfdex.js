var $c = wx.$b;
import AKSDK from "../wxsdk/wxdfwsdk.js";
window.versions = {
  wxVersion: window.config.game_ver
};

window.DEBUG = false;
window.B_CB = 1;
window.ENV = 1;
window.B_ABC = true;
window.WSS = true;
window.B_IH = "";
window.B_BC = {
  base_cdn: $c[223],
  cdn: $c[224]
};

B_BC.pay_infos = {};
B_BC.package = $c[225];
B_BC.callback = $c[226];
B_BC.version = window.versions.wxVersion;
B_BC.mac = "";
B_BC.os = $c[227];
B_BC.sdk_name = $c[228];
B_BC.apiurl = $c[229];
B_BC.apikey = $c[230];
B_BC.partnerId = $c[231];
B_BC.pkgName = "";
B_BC.device_id = "";
B_BC.serverList = {};
B_BC.channelNum = parseInt(B_BC.partnerId);
B_BC.channel = B_BC.partnerId;
B_BC.selectedServer = {};

B_BC.B_CDE = $c[232];
B_BC.showLogo = false;
B_BC.debugUsers = $c[233];
B_BC.tick = Date.now();

B_BC.configType = $c[234];
B_BC.exposeType = $c[235];
B_BC.loadingType = 1;
B_BC.lastVersion = 1985;
B_BC.wxVersion = window.versions.wxVersion;
B_BC.wxShield = false;
B_BC.wxIOS = false;

window.B_ACB = 5;
window.B_AC = false;
window.B_CA = false;
window.B_BAC = false;
window.B_BCA = false;
window.B_AB = false;
window.B_BA = false;

window.B_CAB = false;

window.alert = function (value) {
  console.log($c[236], value);
  wx.hideLoading({});
  wx.showModal({
    title: $c[237],
    content: value,
    success(res) {
      if (res.confirm) {
        console.log($c[238]);
      } else if (res.cancel) {
        console.log($c[239]);
      }
    }
  });
};
window.B_CD = function (value) {
  console.log($c[240], value);
  B_BDC();
  wx.showModal({
    title: $c[241],
    content: value,
    confirmText: $c[242],
    cancelText: $c[243],
    success(res) {
      if (res.confirm) {
        window.B_CED();
      } else if (res.cancel) {
        console.log($c[244]);
        wx.exitMiniProgram({});
      }
    }
  });
};
window.B_LJK = function (value) {
  console.log($c[245], value);
  wx.showModal({
    title: $c[246],
    content: value,
    confirmText: $c[247],
    showCancel: false,
    complete(res) {
      console.log($c[248]);
      wx.exitMiniProgram({});
    }
  });
};

window.B_DC = false;
window.B_BCD = function (value) {
  window.B_DC = true;
  wx.showLoading(value);
};
window.B_BDC = function () {
  if (window.B_DC) {
    window.B_DC = false;
    wx.hideLoading({});
  }
};
window.B_BD = function (value) {
  window.ServerLoading.instance.B_BD(value);
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
        console.info($c[249] + res.data.msg);
      }
    } else {
      console.log($c[250], res);
    }
  });
};

window.B_DB = function (value) {
  console.log($c[251], value);
};
window.B_CBD = function (value) {
  // console.log("toAllProgress", value);
};
window.B_CDB = function (value, str, currTaskIndex) {
  // console.log("toProgress", value, str, currTaskIndex);
};
window.B_DBC = function (value) {
  console.log($c[252], value);
  window.ServerLoading.instance.closeAuthor();
  window.ServerLoading.instance.closeServer();
  window.ServerLoading.instance.closeLoading();
};

window.B_DCB = function (info) {
  console.log($c[253]);
  // AKSDK.logout(function(){});
  window.B_CD($c[254]);
  B_CDE(info ? info : $c[255]);
};
window.B_DE = function (str) {
  var info = JSON.parse(str);
  info.gamever = window.config.game_ver;
  info.serverid = window.B_BC.selectedServer ? window.B_BC.selectedServer.server_id : 0;
  info.B_HGF = window.B_HGF;
  var infostr = JSON.stringify(info);
  console.error($c[256] + infostr);
  B_CDE(infostr);
};
window.B_ED = function (str) {
  var info = {
    id: window.B_BC.roleId,
    role: window.B_BC.roleName,
    level: window.B_BC.roleLevel,
    user: window.B_BC.account,
    version: window.B_BC.lastVersion,
    cdn: window.B_BC.cdn,
    pkgName: window.B_BC.pkgName,
    gamever: window.config.game_ver,
    serverid: window.B_BC.selectedServer ? window.B_BC.selectedServer.server_id : 0,
    B_HGF: window.B_HGF,
    error: str
  };
  var infostr = JSON.stringify(info);
  console.warn($c[257] + infostr);
  window.B_CDE(infostr);
};
window.B_CDE = function (info) {
  if (window.B_BC.wxPlatform == $c[258]) return;
  var url = B_BC.B_CDE + $c[259] + B_BC.account;
  wx.request({
    url: url,
    method: $c[260],
    data: info,
    header: {
      "content-type": $c[261],
      "cache-control": $c[262]
    },
    success: function (res) {
      DEBUG && console.log($c[263], url, info, res);
    },
    fail: function (res) {
      DEBUG && console.log($c[264], url, info, res);
    },
    complete: function () {}
  });
};

window.guild = function () {
  function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }
  return S4() + S4() + $c[265] + S4() + $c[266] + S4() + $c[267] + S4() + $c[268] + S4() + S4() + S4();
};
/*sdk初始化*/
window.B_CED = function () {
  console.log($c[269]);
  var cfg = AKSDK.getConfig();
  B_BC.channel = cfg.partner_id;
  B_BC.channelNum = cfg.partner_id;
  B_BC.partnerId = cfg.partner_id;
  B_BC.pkgName = cfg.game_pkg;
  var initData = {
    game_ver: B_BC.version
  };
  B_BC.device_id = this.guild();
  AKSDK.init(initData, this.B_CE.bind(this));
};
/*sdk初始化回调*/
window.B_CE = function (res) {
  var develop = res.develop;
  // res.game_ver = "1.0.86";
  // console.info(window.compareVersion("1.0.61", res.game_ver), window.compareVersion("1.0.62", res.game_ver), window.compareVersion("1.0.63", res.game_ver), window.compareVersion("1.1.64", "1.1.64"));
  console.log($c[270] + develop + $c[271] + (develop == 1) + $c[272] + res.game_ver + $c[273] + window.versions.wxVersion); //develop为1的时候说明当前game_ver是提审版本
  if (window.B_JI(window.versions.wxVersion, res.game_ver) < 0) {
    //当前版本 < 后台版本   
    console.log($c[274]);
    B_BC.apiurl = $c[275]; //正式服（线上版本）
    B_BC.apikey = $c[276];
    B_BC.spareCdn = $c[277], B_BC.version_name = $c[278];
    B_BC.wxShield = false;
  } else if (window.B_JI(window.versions.wxVersion, res.game_ver) == 0) {
    //当前版本 == 后台版本
    console.log($c[279]);
    B_BC.apiurl = $c[280]; //测试服（审核版本）
    B_BC.apikey = $c[281];
    B_BC.spareCdn = $c[282], B_BC.version_name = "";
    B_BC.wxShield = true; //屏蔽活动
  } else {
    console.log($c[283]);
    B_BC.apiurl = $c[284]; //测试服（开发版本）
    B_BC.apikey = $c[285];
    B_BC.spareCdn = $c[286], B_BC.version_name = "";
    B_BC.wxShield = false;
  }
  this.B_ECD();
  this.B_EDC();
  AKSDK.login(this.B_EC.bind(this));
};
/*sdk登录回调*/
window.B_EC = function (status, data) {
  B_BCD({ title: $c[287] });
  if (status === 0 && data && data.token) {
    B_BC.sdk_token = data.token;
    var self = this;
    sendApi($c[288], {
      'platform': B_BC.sdk_name,
      'partner_id': B_BC.partnerId,
      'token': data.token,
      'game_pkg': B_BC.pkgName,
      'deviceId': B_BC.device_id
    }, this.B_DCE.bind(this), B_ACB, B_DCB);
  } else {
    B_CDE(JSON.stringify({
      error: JSON.stringify({
        type: $c[289],
        status: status,
        data: data
      })
    }));
    window.B_CD($c[290] + (data && data.errMsg ? $c[291] + data.errMsg : ""));
  }
};

window.B_DCE = function (response) {
  if (!response) {
    window.B_CD($c[292]);
    return;
  }
  if (response.state != $c[293]) {
    window.B_CD($c[294] + response.state);
    return;
  }

  B_BC.userId = String(response.account);
  B_BC.account = String(response.account);
  B_BC.platform = String(response.platform);
  B_BC.channel = String(response.platform);
  B_BC.platform_uid = String(response.platform_uid);
  B_BC.php_sign = String(response.sign);
  B_BC.php_signtime = String(response.time);
  B_BC.sign = ''; // TODO

  var self = this;
  sendApi($c[295], {
    'partner_id': B_BC.partnerId,
    'uid': B_BC.account,
    'version': B_BC.version,
    'game_pkg': B_BC.pkgName,
    'device': B_BC.device_id
  }, self.B_DEC.bind(self), B_ACB, B_DCB);
};

window.B_DEC = function (response) {
  if (!response) {
    window.B_CD($c[296]);
    return;
  }
  if (response.state != $c[297]) {
    window.B_CD($c[298] + response.state);
    return;
  }
  if (!response.data || response.data.length == 0) {
    window.B_CD($c[299]);
    return;
  }

  B_BC.newRegister = response.is_new;
  B_BC.selectedServer = {
    'server_id': String(response.data[0].server_id),
    'server_name': String(response.data[0].server_name),
    'entry_ip': response.data[0].entry_ip,
    'entry_port': parseInt(response.data[0].entry_port),
    'status': B_FHG(response.data[0]),
    'start_time': response.data[0].start_time,
    'cdn': B_BC.cdn
  };
  this.B_HI();
};

window.B_HI = function () {
  if (B_BC.newRegister == 1) {
    //新用户，发送验证
    var status = B_BC.selectedServer.status;
    if (status === -1 || status === 0) {
      window.B_CD(status === -1 ? $c[300] : $c[301]);
      return;
    }
    B_FH(0, B_BC.selectedServer.server_id);
    window.ServerLoading.instance.openLoading(B_BC.newRegister);
  } else {
    //老用户，进游戏的选服界面
    window.ServerLoading.instance.openServer();
    B_BDC();
  }
  window.B_BA = true;
  window.B_GHF();
  window.B_HFG();
};

// 加载version_config版本文件，读取lastVersion号，外网是从后台请求获取
window.B_ECD = function () {
  var self = this;
  sendApi($c[302], {
    'game_pkg': B_BC.pkgName,
    'version_name': B_BC.version_name
  }, function (response) {
    if (!response) {
      window.B_CD($c[303]);
      return;
    }
    if (response.state != $c[304]) {
      window.B_CD($c[305] + response.state);
      return;
    }
    B_BC.base_cdn = response.data.cdn_url || B_BC.base_cdn;
    B_BC.cdn = response.data.cdn_url || B_BC.cdn;
    B_BC.lastVersion = response.data.version || B_BC.lastVersion;
    console.info($c[306] + B_BC.lastVersion);
    window.B_BCA = true;
    window.B_GHF();
    window.B_HFG();
  });
};

// 请求隐私、超级VIP、微信公众号信息
window.pkgOptions;
window.B_EDC = function () {
  sendApi($c[307], {
    'game_pkg': B_BC.pkgName
  }, B_EF);
};
window.B_EF = function (data) {
  if (data.state === $c[308] && data.data) {
    window.pkgOptions = data.data;
    for (var k in data.data) {
      B_BC[k] = data.data[k];
    }
  } else {
    console.info($c[309] + data.state);
  }
  window.B_AB = true;
  window.B_HFG();
};

window.toPay = function (roleId, roleName, roleLevel, roleCareer, productId, price, productName, productDesc, callback) {
  productId = String(productId);
  var productname = productName;
  var productdesc = productDesc;
  B_BC.pay_infos[productId] = {
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
  sendApi($c[310], {
    'game_pkg': B_BC.pkgName,
    'server_id': B_BC.selectedServer.server_id,
    'server_name': B_BC.selectedServer.server_name,
    'level': roleLevel,
    'uid': B_BC.account,
    'role_id': roleId,
    'role_name': roleName,
    'product_id': productId,
    'product_name': productname,
    'product_desc': productdesc,
    'money': price
    // 'appleprd_id': appleprd_id,
  }, toPayCallBack, B_ACB, B_DCB);
};
window.toPayCallBack = function (data) {
  if (data) {
    if (data.errCode === 200 || data.state == $c[311]) {
      var info = B_BC.pay_infos[String(data.product_id)];
      if (info.callback) info.callback(data.product_id, data.cp_order_id, -1);
      AKSDK.pay({
        'cpbill': data.cp_order_id,
        'productid': data.product_id,
        'productname': info.productname,
        'productdesc': info.productdesc,
        'serverid': B_BC.selectedServer.server_id,
        'servername': B_BC.selectedServer.server_name,
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
        console.info(JSON.stringify({ type: $c[312], status: status, data: data, role_name: info.rolename }));

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

window.B_FE = function () {
  // AKSDK.logLoadingFinish();
};
window.B_DEF = function (role_id, role_name, role_level, role_type) {
  AKSDK.logCreateRole(B_BC.selectedServer.server_id, B_BC.selectedServer.server_name || B_BC.selectedServer.server_id, role_id, role_name, role_level);
  sendApi($c[313], {
    'game_pkg': B_BC.pkgName,
    'server_id': B_BC.selectedServer.server_id,
    'role_id': role_id,
    'uid': B_BC.account,
    'role_name': role_name,
    'role_type': role_type,
    'level': role_level
  });
};
window.B_DFE = function (role_id, role_name, role_level, role_type, evolution) {
  B_BC.roleId = role_id;
  B_BC.roleName = role_name;
  B_BC.roleLevel = role_level;
  AKSDK.logEnterGame(B_BC.selectedServer.server_id, B_BC.selectedServer.server_name || B_BC.selectedServer.server_id, role_id, role_name, role_level);
  sendApi($c[314], {
    'game_pkg': B_BC.pkgName,
    'server_id': B_BC.selectedServer.server_id,
    'role_id': role_id,
    'uid': B_BC.account,
    'role_name': role_name,
    'role_type': role_type,
    'level': role_level,
    'evolution': evolution
  });
};
window.B_DF = function (role_id, role_name, role_level, role_type, evolution) {
  B_BC.roleId = role_id;
  B_BC.roleName = role_name;
  B_BC.roleLevel = role_level;
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
};
window.B_FD = function (callback) {};

//调起分享（微信）
window.B_EDF = function (callback) {
  AKSDK.share($c[315], function (data) {
    callback(data);
  });
};
//调起客服
window.B_EFD = function () {
  AKSDK.B_EFD();
};

//微端引导
window.microPortGuide = function () {
  AKSDK.weiduanHelper();
};

//收藏
window.B_FED = null;
window.B_FG = null;
window.B_FDE = function (callback) {
  window.B_FG = callback;
  if (window.B_FG && window.B_FED) {
    console.info($c[316] + window.B_FED.scene);
    window.B_FG(window.B_FED);
    window.B_FED = null;
  }
};
//微信获取邀请者
window.B_GF = function (packageName, role_id, serverId, callBack) {
  window.send($c[317], {
    'game_pkg': window.B_BC.pkgName,
    'role_id': role_id,
    'server_id': serverId
  }, callBack);
};
//调起订阅消息
window.B_EFG = function (ids, callback) {
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
    if (window.B_JI(window.SDKVersion, $c[318]) >= 0) {
      console.log($c[319]);
      AKSDK.subscribeMessage(tmpIds, function (res) {
        console.log($c[320]);
        console.log(res);
        if (res && res.errMsg == $c[321]) {
          for (var id in tmpObj) {
            if (res[tmpObj[id]] == $c[322]) {
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
        if (window.B_JI(window.SDKVersion, $c[323]) >= 0) {
          wx.getSetting({
            withSubscriptions: true, //只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。
            success: function (res1) {
              var sets = res1.subscriptionsSetting[$c[324]];
              if (sets) {
                console.log($c[325]);
                console.log(sets);
                for (var id in tmpObj) {
                  if (sets[tmpObj[id]] == $c[326]) {
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
                console.log($c[327]);
                console.log(res1);
                console.log(data);
                callback && callback(data);
              }
            },
            fail: function () {
              console.log($c[328]);
              console.log(data);
              callback && callback(data);
            }
          });
        } else {
          console.log($c[329] + window.SDKVersion);
          console.log(data);
          callback && callback(data);
        }
      });
    } else {
      console.log($c[330] + window.SDKVersion);
      console.log(data);
      callback && callback(data);
    }
    wx.offTouchEnd(onTouchEnd);
  }
  wx.onTouchEnd(onTouchEnd);
};
//获取电池信息
window.B_EGF = { isSuccess: false, level: $c[331], isCharging: false };
window.B_EG = function (callback) {
  // console.log("调用获取电池信息");
  wx.getBatteryInfo({
    success: function (resSuccess) {
      var info = window.B_EGF;
      info.isSuccess = true;
      info.level = Number(resSuccess.level).toFixed(0);
      info.isCharging = resSuccess.isCharging;
      // console.log("调用获取电池信息成功", info.level, info.isCharging, resSuccess.errMsg, resSuccess.level);
      callback && callback(info.isSuccess, info.level, info.isCharging);
    },
    fail: function (resFail) {
      console.log($c[332], resFail.errMsg);
      var info = window.B_EGF;
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
  xhr.open(reqType || $c[333], url);
  xhr.responseType = $c[334];
  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader($c[335], contentType || $c[336]);
  xhr.send(data);
};

window.sendApi = function (method, param, callBack, retryAmount, errorCB, checkSuccess) {
  if (!param) {
    param = {};
  }

  var now = Math.floor(Date.now() / 1000);
  param[$c[337]] = now;
  param[$c[338]] = method;

  var sortKeys = Object.keys(param).sort();
  var md5Str = '';
  var reqStr = '';
  for (var i = 0; i < sortKeys.length; i++) {
    md5Str = md5Str + (i == 0 ? '' : $c[339]) + sortKeys[i] + param[sortKeys[i]];
    reqStr = reqStr + (i == 0 ? '' : $c[340]) + sortKeys[i] + $c[341] + encodeURIComponent(param[sortKeys[i]]);
  }
  md5Str = md5Str + B_BC.apikey;

  var extendParam = $c[342] + md5(md5Str);

  send(B_BC.apiurl + $c[343] + reqStr + (reqStr == '' ? '' : $c[344]) + extendParam, null, callBack, retryAmount, errorCB, checkSuccess || function (response) {
    return response.state == $c[345];
  }, null, $c[346]);
};

window.B_GE = function (step, role_id) {
  var serverTmpId = 0;
  if (B_BC.selectedServer) {
    serverTmpId = B_BC.selectedServer.server_id;
  }
  sendApi($c[347], {
    'partnerId': B_BC.partnerId,
    'gamePkg': B_BC.pkgName,
    'logTime': Math.floor(Date.now() / 1000),
    'platformUid': B_BC.platform_uid,
    'type': step,
    'serverId': serverTmpId
  }, null, 2, null, function () {
    return true;
  });
};

window.B_FEG = function (step) {
  sendApi($c[348], {
    'partner_id': B_BC.partnerId,
    'uid': B_BC.account,
    'version': B_BC.version,
    'game_pkg': B_BC.pkgName,
    'device': B_BC.device_id
  }, B_FGE, B_ACB, B_DCB);
};
window.B_FGE = function (data) {
  if (data.state === $c[349] && data.data) {
    data.data.unshift({
      'id': -2,
      'name': $c[350]
    });
    data.data.unshift({
      'id': -1,
      'name': $c[351]
    });
    B_BC.groupList = data.data;
    if (window.initPanel) window.initPanel.showGroupList();
  } else {
    B_BC.hasGroupReq = false;
    window.B_CD($c[352] + data.state);
  }
};

window.B_GEF = function (step) {
  sendApi($c[353], {
    'partner_id': B_BC.partnerId,
    'uid': B_BC.account,
    'version': B_BC.version,
    'game_pkg': B_BC.pkgName
  }, B_GFE, B_ACB, B_DCB);
};
window.B_GFE = function (data) {
  B_BC.hasServerReq = false;
  if (data.state === $c[354] && data.data) {
    for (var i = 0; i < data.data.length; i++) {
      data.data[i].status = B_FHG(data.data[i]);
    }
    B_BC.serverList[-1] = window.changeServerName(data.data);
    window.initPanel.showServerList(-1);
  } else {
    window.B_CD($c[355] + data.state);
  }
};

window.B_GH = function (step, group_id) {
  sendApi($c[356], {
    'partner_id': B_BC.partnerId,
    'uid': B_BC.account,
    'version': B_BC.version,
    'game_pkg': B_BC.pkgName,
    'device': B_BC.device_id,
    'server_group_id': group_id
  }, B_HG, B_ACB, B_DCB);
};
window.B_HG = function (data) {
  B_BC.hasServerReq = false;
  if (data.state === $c[357] && data.data && data.data.data) {
    var groupid = data.data.server_group_id;
    var server_list = [];
    for (var i = 0; i < data.data.data.length; i++) {
      data.data.data[i].status = B_FHG(data.data.data[i]);

      if (server_list.length == 0 || data.data.data[i].status != 0) {
        server_list[server_list.length] = data.data.data[i];
      }
    }
    B_BC.serverList[groupid] = window.changeServerName(server_list);
    window.initPanel.showServerList(groupid);
  } else {
    window.B_CD($c[358] + data.state);
  }
};
window.B_JIK = function (step) {
  sendApi($c[359], {
    'partner_id': B_BC.partnerId,
    'uid': B_BC.account,
    'version': B_BC.version
    //'game_pkg': PF_INFO.pkgName,
  }, reqServerRecommendCallBack, B_ACB, B_DCB);
};
window.reqServerRecommendCallBack = function (data) {
  B_BC.hasServerReq = false;
  if (data.state === $c[360] && data.data) {
    for (var i = 0; i < data.data.length; i++) {
      data.data[i].status = B_FHG(data.data[i]);
    }
    B_BC.serverList[-2] = window.changeServerName(data.data);
    window.initPanel.showServerList(-2);
  } else {
    alert($c[361] + data.state);
  }
};
window.changeServerName = function (lst) {
  if (!lst && lst.length <= 0) return lst;
  for (let i = 0; i < lst.length; i++) {
    if (lst[i].is_recommend && lst[i].is_recommend == 1) {
      lst[i].server_name += $c[362];
    }
  }
  return lst;
};
window.B_FGH = function (server_id, callback) {
  server_id = server_id || B_BC.selectedServer.server_id;
  sendApi($c[363], {
    'type': $c[364],
    'game_pkg': B_BC.pkgName,
    'server_id': server_id
  }, callback);
};

window.B_FHG = function (server) {
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

window.B_FH = function (step, server_id) {
  B_BC.last_check_ban = {
    'step': step,
    'server_id': server_id
  };
  var self = this;
  sendApi($c[365], {
    'partner_id': B_BC.partnerId,
    'uid': B_BC.account,
    'game_pkg': B_BC.pkgName,
    'server_id': server_id,
    'platform': B_BC.platform,
    'platform_uid': B_BC.platform_uid,
    'check_login_time': B_BC.php_signtime,
    'check_login_sign': B_BC.php_sign,
    'version_name': B_BC.version_name
  }, B_HF, B_ACB, B_DCB, function (response) {
    return response.state == $c[366] || response.info == $c[367] || response.info == $c[368];
  });
};
window.B_HF = function (data) {
  var self = this;
  if (data.state === $c[369] && data.data) {
    var server = B_BC.selectedServer;
    server.channel_num = B_BC.channelNum;

    server.sign = String(data.data.login_sign);
    server.tick = parseInt(data.data.time);
    if (data.data.server_num) server.server_num = parseInt(data.data.server_num);else server.server_num = parseInt(data.data.server_id);
    server.is_domain = 0;
    server.cdn = B_BC.base_cdn;
    server.resver = data.data.cdn_version;
    server.server_options = data.data.server_options;

    if (B_BC.newRegister == 1 && server.server_options && server.server_options.show_btn == 1) {
      B_BC.showGetBtn = 1;
      window.ServerLoading.instance.B_JKL();
    }

    B_GFH();
  } else {
    sendApi($c[370], {
      'platform': B_BC.sdk_name,
      'partner_id': B_BC.partnerId,
      'token': B_BC.sdk_token,
      'game_pkg': B_BC.pkgName,
      'deviceId': B_BC.device_id
    }, function (response) {
      if (response.state == $c[371]) {
        window.B_CD($c[372] + response.state);
        return;
      }
      B_BC.php_sign = String(response.sign);
      B_BC.php_signtime = String(response.time);

      setTimeout(function () {
        B_FH(B_BC.last_check_ban.step, B_BC.last_check_ban.server_id);
      }, 1500);
    }, B_ACB, B_DCB, function (response) {
      return response.state == $c[373] || response.state == $c[374];
    });
  }
};
window.B_GFH = function () {
  ServerLoading.instance.openLoading(B_BC.newRegister);
  window.B_AC = true;
  window.B_HFG();
};

window.B_GHF = function () {
  if (window.B_CA && window.B_BAC && window.B_BCA && window.B_BA) {
    if (!window.MainWX.instance) {
      console.log($c[375] + window.MainWX.instance);
      var info = wx.getLaunchOptionsSync();
      var scene = info.scene ? info.scene : 0;
      var platData = {
        cdn: window.B_BC.cdn,
        spareCdn: window.B_BC.spareCdn,
        newRegister: window.B_BC.newRegister,
        wxPC: window.B_BC.wxPC,
        wxIOS: window.B_BC.wxIOS,
        wxParam: { limitLoad: window.B_BC.B_GHI, benchmarkLevel: window.B_BC.B_GIH },
        configType: window.B_BC.configType,
        exposeType: window.B_BC.exposeType,
        scene: scene
      };
      new window.MainWX(platData, window.B_BC.lastVersion, window.B_IH);
    }
  }
};

window.B_HFG = function () {
  if (window.B_CA && window.B_BAC && window.B_BCA && window.B_BA && window.B_AC && window.B_AB) {
    if (!B_CAB) {
      B_CAB = true;
      if (!window.MainWX.instance) window.B_GHF();
      var top = 0;
      var rec = wx.getMenuButtonBoundingClientRect(); //基础库 2.1.0 开始支持
      if (rec) {
        if (window.B_BC.wxPhone) {
          top = rec.top;
        }
        console.info($c[376] + rec.top + $c[377] + rec.bottom + $c[378] + rec.left + $c[379] + rec.right + $c[380] + rec.width + $c[381] + rec.height);
      }

      var selectedServer = {};
      for (const key in B_BC.selectedServer) {
        selectedServer[key] = B_BC.selectedServer[key];
      }

      var platData = {
        channel: window.B_BC.channel,
        account: window.B_BC.account,
        userId: window.B_BC.userId,
        serverId: selectedServer.server_id,
        cdn: window.B_BC.cdn,
        data: window.B_BC.data,
        package: window.B_BC.package,
        newRegister: window.B_BC.newRegister,
        pkgName: window.B_BC.pkgName,
        partnerId: window.B_BC.partnerId,
        platform_uid: window.B_BC.platform_uid,
        deviceId: window.B_BC.device_id,
        selectedServer: selectedServer,
        configType: window.B_BC.configType,
        exposeType: window.B_BC.exposeType,
        debugUsers: window.B_BC.debugUsers,
        wxMenuTop: top,
        wxShield: window.B_BC.wxShield
      };

      if (window.pkgOptions) {
        for (var k in window.pkgOptions) {
          platData[k] = window.pkgOptions[k];
        }
      }

      window.MainWX.instance.B_ML(platData);
    } else {
      B_BDC();
    }
  }
};