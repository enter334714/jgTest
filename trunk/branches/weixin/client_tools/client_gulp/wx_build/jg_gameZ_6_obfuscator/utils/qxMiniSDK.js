const version = '4.0.5';
const sdkVersion = '8.0';
var channel_cfg_version = 1;

const domain = {
  yisdk: 'https://yisdk-api.gowan8.com',
  api: 'https://api.gowan8.com',
  box: "https://box.gowan8.com"
};
const test_domain = {
  yisdk: 'http://yisdk-api.gowanme.com',
  api: 'http://api.gowanme.com',
  box: "http://box.gowanme.com"
};
const USER_INFO = 'gowan_user_info'; // 用户信息保存在微信缓存上的键值
const XCX_USER_INFO = 'xcx_user_info'; // 微信授权后的信息保存在微信缓存上的键值

// 设置游戏可分享
if (wx) {
  wx.showShareMenu({
    withShareTicket: true,
    menus: ['shareAppMessage', 'shareTimeline']
  });
}
//uuid--用户唯一标识码
const uuid = () => {
  const S4 = () => ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
};
// 获取uuid
// 作用：存储用户的唯一标示码
function getUuid() {
  let id = getStorageSync("qx_uuid");
  if (id) {
    return id;
  }
  id = uuid();
  saveStorageSync('qx_uuid', id);
  return id;
}

// 引入md5，以及引入加密解密方法
var md5 = require('./utility/qx_md5.js'),
    qx_auth = require('./utility/qx_auth.js'),
    {
  requestEncrypt,
  returnDecrypt
} = qx_auth;

// 定义全局变量，用于除保存账户信息以外的数据
var _globalData = {
  loginTipsNum: 0, //转端提醒次数
  otherGame: {}
},
    localUserInfo = {},

// 登录后的用户信息
/* 定义全局变量，在某个时刻会被赋值 */
microParame = getUuid(); //生成IMEI值


/*
 * 本地分享参数
 * 在初始化接口中如果存在返回值，那么在分享接口调时则会覆本地分享参数
 */
var shareCfg = {
  img_url: 'https://yxfile.gowan8.com/share/default/share_logo.png',
  title: '千禧游戏'

  /* ************函数开始************** */
  /*
   * 封装一个请求方法---->> request(ct, ac, params = {}, is_jsdk = 1)
   * is_jsdk = 1 代表是is_jsdk = 1 ， 其他代表为js
   */
};function request(ct, ac, params = {}, is_jsdk = 1, headers = {}) {
  let KEY = String(new Date().getTime()).substr(0, 10);
  var domainkey = params.domain || 'yisdk';
  if (params.hasOwnProperty('domain')) {
    delete params.domain;
  }
  var url;
  // _obj 是具体发送的参数
  let _obj = {
    ts: KEY
  };
  let _domain = qxyxSDK.reqEnv == 'test' ? test_domain[domainkey] : domain[domainkey];
  // 对第二个参数ac做相关处理
  if (ac === null) {
    url = _domain + `/${ct}`;
    _obj = params;
  } else {
    url = _domain + `/?ct=${ct}&ac=${ac}`;
    if (is_jsdk == 1) {
      _obj.is_jsdk = 1;
      params.is_jsdk = 1;
    } else {
      _obj.js = 1;
    }
    console.log('[请求参数]', params);
    let p = requestEncrypt(JSON.stringify(params), KEY).e;
    _obj.p = p;
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data: _obj,
      header: Object.assign({
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }, headers),
      'method': 'POST',
      success(res) {
        // 对返回值进行解密
        if (res.data.data) {
          let dt = res.data.data;
          if (dt.d) {
            res.data.data = JSON.parse(returnDecrypt(dt.d, String(dt.ts)).d);
          }
        }
        console.log(`[${ac}接口返回值]`, res);
        resolve(res.data);
      },
      fail(e) {
        if (e.errMsg === "request:fail abort") return;
        if (reject) {
          reject(e);
        } else {
          wx.showModal({
            title: '提示',
            content: '请求失败,请检查网络',
            showCancel: false,
            confirmColor: '#0f77ff',
            success: res => {}
          });
        }
      }
    });
  });
}

/* 格式化角色信息 */
function getRoleBaseInfo(arg) {
  return {
    server_id: arg.serverId,
    server_name: arg.serverName,
    role_id: arg.roleId,
    role_name: arg.roleName,
    role_level: arg.roleLevel,
    balance: arg.userMoney || 0,
    vip_level: arg.vipLevel || 1,
    fighting: arg.fighting || '', // 战力
    role_c_time: arg.roleCTime || '' // 角色创建时间
  };
}

/** 处理cocoscreator--wx不存在异常 */
function extFooter() {
  let systemInfo = wx.getSystemInfoSync();
  return {
    screen: systemInfo.windowWidth + 'x' + systemInfo.windowHeight,
    os_version: systemInfo.system.replace(/[a-zA-Z]+\s*/, ''), // 系统版本号
    simulator: '0', // 是否模拟器，0不是；1是
    isroot: 0, // 是否root/越狱，0不是1是
    serial_number: '', // 设备序列号
    imsi: '', // 手机卡的编号
    android_id: '', // 设备标识 ANDROID_iD
    net: 4, // 手机网络1、2G；2、3G；3、wifi；4、其他
    operators: 4, // 运营商 1、移动；2、联通；3、电信；4、其他
    location: '', // 地址位置
    version, // 必填	融合SDK版本号
    game_version: '1.0', // 必填	游戏版本号
    platform_version: systemInfo.SDKVersion, //	必填	渠道版本号
    imei: microParame.replace(/-/g, ''), // 手机IMEI/IDFA
    mac: microParame.replace(/-/g, ''), // 手机mac网卡地址
    utma: microParame.replace(/-/g, ''), // 设备标识
    os: systemInfo.system.indexOf('iOS') == 0 ? 2 : 1, // 手机系统1、android；2、越狱ios；3、其他；4、正版ios
    model: systemInfo.model.replace(/\<(.*?)\>/g, ''),
    gosdk_type: 'wxmini'
  };
}

// SDKFooter
function sdkFooter() {
  let systemInfo = wx.getSystemInfoSync();
  return {
    version: sdkVersion, // 必填	融合SDK版本号
    device: microParame.replace(/-/g, ''), // 手机IMEI/IDFA
    imei: microParame.replace(/-/g, ''), // 手机IMEI/IDFA
    screen: systemInfo.windowWidth + 'x' + systemInfo.windowHeight,
    platform: systemInfo.system.indexOf('iOS') == 0 ? 1 : 2, // 手机系统1、ios；2、android；3、其他；
    model: systemInfo.model.replace(/\<(.*?)\>/g, ''),
    system: systemInfo.system.replace(/[a-zA-Z]+\s*/, ''), // 系统版本号
    system_language: 'zh',
    net: 4, //手机网络
    operator: '', // 运营商 1、移动；2、联通；3、电信；4、其他
    location: '',
    gosdk_type: 'wxmini'
  };
}

/* 清除本地缓存 */
function removeStorageSync(key) {
  try {
    wx.removeStorageSync(key);
    if (_globalData[key]) {
      delete _globalData[key];
    }
  } catch (e) {
    delete _globalData[key];
  }
}
/* 添加本地缓存 */
function saveStorageSync(key, value) {
  try {
    wx.setStorageSync(key, value);
  } catch (e) {
    _globalData[key] = value;
  }
}

function getStorageSync(key) {
  let value;
  try {
    value = wx.getStorageSync(key);
    if ('' === value) {
      value = _globalData[key] ? _globalData[key] : "";
    }
  } catch (e) {
    value = _globalData[key] ? _globalData[key] : "";
  }
  return value;
}

/**
 * 获取场景值
 */
function getZjwlScene() {
  let query = wx.getLaunchOptionsSync().query;
  if (query.scene) {
    let scene = decodeURIComponent(query.scene);
    //替换scene=
    scene = scene.replace(/^\s+|\s+$/g, '').replace(/^(scene=)/g, "");
    return scene.replace(/^\s+|\s+$/g, '');
  }
  return 0;
}

// 获取投放推广参数
function getTfParams(name) {
  let query = wx.getLaunchOptionsSync().query;
  let result = {};
  if (query.ksChannel && query.ksChannel == 'kuaishou') {
    result = {
      ad_source: 'ks_wx',
      ad_id: query.ksUnitId,
      adgroup_id: query.ksCampaignId,
      callback: query.callback
    };
  } else if (query.clue_token) {
    result = {
      ad_source: 'tt_wx',
      ad_id: query.ad_id,
      clue_token: query.clue_token
    };
  } else if (query.gdt_vid) {
    result = {
      ad_source: 'gdt',
      gdt_vid: query.gdt_vid
    };
    var arrs = query.weixinadinfo.split(".");
    result.ad_id = arrs['0'] || '';
  } else if (query.qxad_extra) {
    // 用于默认参数，用于动态创建生成url scheme主动塞参数进入
    result = {
      qxad_extra: decodeURIComponent(query.qxad_extra)
    };
  } else if (query.qx_channel) {
    result = {
      ad_source: query.qx_channel,
      trackid: query.qx_trackid
    };
  } else if (query.uctrackid) {
    result = {
      ad_source: 'uc',
      uctrackid: query.uctrackid
    };
  }
  if (name) {
    return result[name] || '';
  }
  return result;
}

// 合并参数
var __assign = Object.assign || function __assign(t) {
  var n = arguments.length,
      s;
  for (var i = 1; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
  }
  return t;
};

// 获取从另一个游戏跳转过来的数据
function getOtherGameData(name) {
  if (!_globalData.otherGame.game_id) {
    var extraData = wx.getEnterOptionsSync();
    if (extraData.referrerInfo.extraData && extraData.referrerInfo.extraData.game_id) {
      _globalData.otherGame = extraData.referrerInfo.extraData;
    }
  }
  if (name) {
    return _globalData.otherGame[name] || '';
  }
  return _globalData.otherGame;
}

/* ************函数结束************** */
var qxyxSDK = {
  // sdk 标识
  sdkChannel: 'minigame',
  initData: {
    channel: 'gowan'
  },
  /* 请求开始标识*/
  apiStart() {
    this.apiRuning = true;
  },

  /* 请求结束标识*/
  apiEnd() {
    this.apiRuning = false;
  },
  // 直播室数据
  liveDt: {},

  /*
   * 接口请求状态
   * 返回值 true / false
   */
  isApiRunning() {
    return this.apiRuning;
  },
  //环境标示变量
  reqEnv: 'prod',

  /* 初始化 */
  init(initParams = {}, callback) {
    var that = this;
    /* 防止重复请求 */
    if (that.isApiRunning()) {
      return;
    }
    that.apiStart();
    let scene = getZjwlScene();
    let from_id = scene ? scene : initParams.channel_id;
    let wxmini_appid = initParams.wxmini_appid || '';
    // wx.getAccountInfoSync 接口存在兼容性问题
    if (!wxmini_appid && wx.getAccountInfoSync) {
      let accountInfo = wx.getAccountInfoSync();
      wxmini_appid = accountInfo.miniProgram.appId;
    }
    // 显示游戏圈--部分游戏需要
    // this.showGameClub()
    getOtherGameData();
    // 组装全局参数
    let _initData = {
      game_id: initParams.game_id,
      channel: that.initData.channel,
      game_name: initParams.game_name,
      from_id: from_id, // fuse 默认为 0
      original_from_id: initParams.channel_id,
      wxmini_appid: wxmini_appid
    };
    that.initData = __assign(that.initData, _initData);
    that.reqEnv = initParams.req_env || 'prod';
    // 参数对象
    let initReq = __assign({}, _initData, extFooter(), {
      channel: that.sdkChannel
    });
    /** ********** 发送js_load请求*********************/
    request('init', 'index', initReq, 1).then(resulte => {
      that.apiEnd();
      if (resulte.code == 0) {
        let initReslute = resulte.data;
        // 分享配置
        if (initReslute.share) {
          shareCfg = __assign(shareCfg, initReslute.share);
        }
        _globalData.pay_wxappid = initReslute.pay_wxappid || 'wxb42f1c9f32c599b2';
        // 渠道版本配置
        channel_cfg_version = initReslute.channel_cfg_version || channel_cfg_version;
        // 公告
        let notice = initReslute.init_notice;
        if (notice) {
          wx.showModal({
            title: notice.title,
            content: notice.content,
            showCancel: false,
            success(res) {
              if (res.confirm) {
                //callback && callback(cbData)
              }
            }
          });
        }
        // 激活
        if (!_globalData.otherGame.game_id) {
          that._active();
        }
        var launchOptions = wx.getLaunchOptionsSync();
        callback && callback({
          statusCode: 0,
          status: '初始化成功',
          launchOptions: launchOptions
        });
      } else {
        if (callback) {
          callback({
            statusCode: 1,
            status: '初始化失败',
            launchOptions: launchOptions
          });
        }
      }
    });
  },

  /* 检查Session值 */
  checkSession(callback) {
    var that = this;
    wx.checkSession({
      success(res) {
        let qxyxUserInfo = getStorageSync(USER_INFO);
        let xcxUserInfo = getStorageSync(XCX_USER_INFO);
        let type = 'checkSession';
        if (qxyxUserInfo && qxyxUserInfo.ext.openid) {
          console.log('[session_key 未过期------->直接执行登录方法]');
          that._dologin(xcxUserInfo, type, callback);
        } else {
          if (callback) {
            callback({
              statusCode: 1,
              status: '登录已经过期'
            });
          }
        }
      },
      fail() {
        console.log('[session_key 已经过期------->需要重新执行登录流程]');
        if (callback) {
          callback({
            statusCode: 1,
            status: 'session_key 已经过期'
          });
        }
      }
    });
  },

  /* 登录 */
  login(xcxUserInfo = {}, callback) {
    var that = this;
    saveStorageSync(XCX_USER_INFO, xcxUserInfo);
    let type = 'login';
    that.checkSession(function (res) {
      if (res.statusCode === 0) {
        callback && callback(res);
      } else {
        that._dologin(xcxUserInfo, type, callback);
      }
    });
  },

  _dologin(xcxUserInfo, type, callback) {
    console.log('[登录类型]', type);
    let that = this;
    /* 防止重复请求 */
    if (that.isApiRunning()) {
      return;
    }
    that.apiStart();
    let qxyxUserInfo = getStorageSync(USER_INFO);
    wx.login({
      success: ret => {
        let code = ret.code;
        let userinfo = encodeURIComponent(JSON.stringify(xcxUserInfo));
        let ext_header = {};
        var otherGame = getOtherGameData();
        if (otherGame.game_id) {
          ext_header = {
            game_id: otherGame.game_id,
            game_name: otherGame.game_name,
            from_id: otherGame.from_id,
            user_id: otherGame.user_id,
            guid: otherGame.guid,
            wxmini_appid: otherGame.wxmini_appid
          };
        }
        let dt_header = {
          code,
          userinfo
          // 获取主动分享的玩家信息
          // var shareOptions = wx.getLaunchOptionsSync()
        };if (type == 'checkSession') {
          dt_header['uopenid'] = qxyxUserInfo.ext.openid;
        }
        let loginParams = __assign({}, {
          ext: JSON.stringify(ext_header),
          data: JSON.stringify(dt_header)
        }, that.initData, extFooter());
        loginParams.channel_cfg_version = channel_cfg_version;
        // 广告参数 getTfParams()
        let tfData = getTfParams();
        let headers = {};
        if (Object.keys(tfData).length) {
          if (tfData.ad_source) {
            loginParams.ad_source = tfData.ad_source;
          }
          headers['qxyx-ad'] = JSON.stringify(tfData);
        }
        /* 发送登录请求 */
        request('minigame', 'login', loginParams, 1, headers).then(result => {
          that.apiEnd();
          if (result.code == 0) {
            // 替换原始游戏参数
            if (result.data.relationship) {
              that.initData.new_gameid = that.initData.game_id;
              that.initData = __assign(that.initData, result.data.relationship);
            }
            console.log('[initData]', that.initData);
            let loginResult = result.data;
            //获取unionid--0 不需要获取，1 需要获取
            if (loginResult.ext.is_bind_user == 1) {
              that.getUnionid(loginResult);
            }
            /* 清除本地缓存 */
            if (qxyxUserInfo) {
              removeStorageSync(USER_INFO);
            }
            saveStorageSync(USER_INFO, loginResult); // 存储gowan服务端返回的用户信息
            localUserInfo = loginResult; // 存储用户信息
            //配置被动分享信息
            that.onShareAppMessage();
            // 这里不要被删除，用于替换自然量分包
            that.initData.from_id = loginResult.from_id;
            let cpRes = {
              statusCode: 0,
              userId: loginResult.user_id,
              platformChanleId: Number(0),
              userName: loginResult.userName || '',
              timestamp: String(loginResult.timestamp),
              sign: loginResult.new_sign,
              guid: loginResult.guid,
              cp_ext: loginResult.cp_ext || '',
              ext: loginResult.ext || ''
            };
            if (callback) {
              let cbData = {
                statusCode: 0,
                loginParams: cpRes,
                status: '登录成功'
              };
              callback(cbData);
            }
            this._loginTips({});
          } else {
            if (callback) {
              callback({
                statusCode: 1,
                status: result.msg || '登录失败'
              });
            }
          }
        });
      }
    });
  },

  // 获取Unionid
  getUnionid: function (data) {
    var that = this;
    let sysInfo = wx.getSystemInfoSync();
    //获取微信界面大小
    let width = sysInfo.screenWidth;
    let height = sysInfo.screenHeight;
    wx.getSetting({
      success(res) {
        if (res.authSetting["scope.userInfo"] && data.ext.is_unionid != '1') {} else {
          let button = wx.createUserInfoButton({
            type: 'text',
            text: '',
            style: {
              left: 0,
              top: 0,
              width: width,
              height: height,
              backgroundColor: '#00000001', //最后两位为透明度
              color: '#ffffff',
              fontSize: 20,
              textAlign: "center",
              lineHeight: height
            }
          });
          button.onTap(res => {
            if (res.userInfo) {
              var obj = __assign({}, extFooter(), that.initData, {
                data: {
                  uopenid: data.ext.openid,
                  userinfo: encodeURIComponent(JSON.stringify(res))
                }
              });
              request('h5', 'bind_user', obj, 0).then(res => {
                if (res.code == 0) {
                  button.destroy();
                } else {
                  wx.showModal({
                    title: '提示',
                    showCancel: false,
                    content: '授权失败，请卸载微信小游戏后，重新登录授权'
                  });
                }
              });
            } else {
              wx.showModal({
                title: "温馨提示",
                content: "需要同意微信授权才可以登录游戏！",
                showCancel: false,
                confirmText: "朕知道了",
                confirmColor: "#576B95",
                success(res) {
                  console.log('[用户已查阅授权提示框]');
                }
              });
            }
          });
        }
      }
    });
  },

  /**登录时长上报 */
  loginDuration(time = 0, callback) {
    var nowTime = new Date().getTime();
    var poorTime = nowTime - time;
    var qxyxUserInfo = getStorageSync(USER_INFO);
    let that = this;
    let reqData = __assign({}, extFooter(), that.initData, {
      user_id: qxyxUserInfo.user_id,
      guid: qxyxUserInfo.guid,
      duration: poorTime / 1000
    });
    /** ********** 发送登录时长上报请求*********************/
    request('loadlog', 'login_duration', reqData, 1).then(resulte => {
      if (resulte.code == 0) {
        callback && callback({
          statusCode: 0,
          status: '上报成功'
        });
      } else {
        callback && callback({
          statusCode: 1,
          status: '上报异常'
        });
      }
    });
  },

  /* 支付 */
  recharge(args, callback) {
    var that = this;
    let qxyxUserInfo = getStorageSync(USER_INFO);
    let user_id = qxyxUserInfo.user_id;
    let openid = qxyxUserInfo.ext.openid;
    let ext = {
      openid,
      pf: wx.getSystemInfoSync().system.indexOf('iOS') == 0 ? 'ios' : 'android',
      new_gameid: that.initData.new_gameid || ''
    };
    let payParams = __assign({}, {
      ext: JSON.stringify(ext),
      user_id
    }, extFooter(), getRoleBaseInfo(args), that.initData, {
      product_name: args.productName,
      amount: args.amount, // 必填充值金额 单位：分
      notify_url: args.callbackURL, // 必填 CP通知URL
      callback_info: args.callbackInfo, // cP回调参数
      cp_product_id: args.cpProductId,
      charge_mount: args.chargeMount, // 金钱数量/道具数量
      cp_order_id: args.cpOrderId,
      channel_cfg_version
    });
    console.log('[支付参数payParams]', payParams);
    /**
     * 下单说明
     * 如果存在real_name，并且real_name的值是1，则需要进行实名认证，否则，不需要
     *
     */
    if (localUserInfo.ext.is_realname && localUserInfo.ext.is_realname == 1) {
      this._isRealName(payParams, callback);
    } else {
      this._doMakeOrder(payParams, callback);
    }
  },

  pay(args, callback) {
    this.recharge(args, callback);
  },

  /* 是否实名
   * 0 -- 已实名
   * 1 -- 未实名
   */
  _isRealName(payParams, callback) {
    let that = this;
    let qxyxUserInfo = getStorageSync(USER_INFO);
    let user_id = qxyxUserInfo.user_id;
    let args = __assign({}, extFooter(), that.initData, {
      user_id,
      real_name: '',
      guid: localUserInfo.guid,
      id_number: '',
      mode: 2
    });
    /** ********** 发送是否需要实名请求*********************/
    request('user', 'real_name', args, 1).then(resulte => {
      if (resulte.code == 0) {
        this._doMakeOrder(payParams, callback);
      } else if (resulte.code == 1) {
        wx.showModal({
          title: '实名认证',
          showCancel: false,
          content: '根据国家相关法规，需要您完成实名认证',
          success(res) {
            if (res.confirm) {
              var initData = that.initData;
              let pr = {
                guid: localUserInfo.guid,
                game_id: initData.game_id,
                channel: that.channel,
                user_id,
                qx_event_type: 'real_name',
                from_id: initData.from_id
              };
              that._customerService(pr, true, '实名认证(绑定id:' + localUserInfo.guid + ')', 'http://yxfile.gowan8.com/upload/image/202008/realname.jpg', function (res) {
                if (res.statusCode == 1) {
                  // 用户取消打开客服或者打开客服失败
                  wx.showModal({
                    title: '温馨提示',
                    cancelText: '朕知道了',
                    confirmText: '前往实名',
                    content: '充值需要实名认证，请您谅解',
                    success: function (res) {
                      if (res.confirm) {
                        that._customerService(pr, true, '实名认证(绑定id:' + localUserInfo.guid + ')', 'http://yxfile.gowan8.com/upload/image/202008/realname.jpg');
                      } else if (res.cancel) {
                        console.log('[用户点击取消支付]');
                      }
                    }
                  });
                }
              });
            }
          }
        });
      } else {
        console.log('[实名接口请求错误，检查实名异常]');
      }
    });
  },

  _doMakeOrder(payParams, callback) {
    var that = this;
    let qxyxUserInfo = getStorageSync(USER_INFO);
    let order_id = '';
    let user_id = qxyxUserInfo.user_id;
    let openid = qxyxUserInfo.ext.openid;
    request('minigame', 'make_order', payParams, 1).then(resulte => {
      if (resulte.code == 0) {
        let payResult = resulte.data;
        let op_type = payResult.ext.op_type; // 保存op_type用于后面的判断
        order_id = payResult.order_id;
        let dataForMidashi = {
          'mode': 'game',
          'env': payResult.ext.env,
          'offerId': payResult.ext.offerId,
          'currencyType': 'CNY',
          'platform': 'android',
          'buyQuantity': payResult.ext.buyQuantity,
          'zoneId': '1'
        };
        let ts = Date.parse(new Date()) / 1000;
        var paycbData = {
          op_msg: payResult.ext.op_msg || '',
          op_type,
          money: payParams.amount,
          user_id, // 登录的时候可以获取
          order_id,
          openid,
          pf: wx.getSystemInfoSync().system.indexOf('iOS') == 0 ? 'ios' : 'android',
          ts,
          channel_cfg_version,
          game_id: that.initData.game_id, // when pay的时cp传进来的参数里有
          new_gameid: that.initData.new_gameid || '',
          sign: md5(order_id + user_id + openid + payParams.amount + that.initData.game_id + ts),
          channel: that.initData.channel
        };
        console.log('[支付类型op_type]', op_type);
        /**
         * op_type 参数说明
         * -1--表示关闭支付
         *  0--是调用客服支付
         *  1--是米大师支付
         *  -2--表示二维码支付
         *  -3--表示小程序支付
         */
        if (op_type >= 0) {
          switch (op_type) {
            case 0:
              /* 客服pay */
              wx.showLoading({
                title: '加载中……'
              });
              that._payCustomerService(paycbData, callback);
              break;
            case 1:
              that._requestMidasPayment(dataForMidashi, paycbData, callback);
              break;
            case 2:
              that._requestMidasPayment(dataForMidashi, paycbData, callback);
              break;
            case 3:
              if (callback) {
                callback({
                  statusCode: 0,
                  status: '下单成功'
                });
              }
              break;
            case 4:
              wx.showModal({
                title: '温馨提示',
                showCancel: false,
                content: paycbData.op_msg || resulte.msg
              });
              if (callback) {
                callback({
                  statusCode: 1,
                  status: '下单失败'
                });
              }
              break;
            case 5:
              that._payCallback(paycbData, callback); //直接回调
              break;
          }
        } else if (op_type == -2) {
          //进二维码支付
          console.log('[payResult]', payResult);
          if (payResult.ext.qrcode_url) {
            wx.previewImage({
              current: payResult.ext.qrcode_url,
              urls: [payResult.ext.qrcode_url]
            });
          } else {
            wx.showToast({
              title: '下单失败，请重新下单',
              icon: 'none'
            });
          }
        } else if (op_type == -3) {
          //进入微信小程序支付
          wx.navigateToMiniProgram({
            appId: _globalData.pay_wxappid,
            path: `pages/wxpay/wxpay?order_id=${payResult.order_id}`,
            extraData: {},
            // envVersion: 'release',
            envVersion: 'develop',
            success(res) {
              // 打开成功
              console.log('[打开小程序成功]');
            },
            fail: function (err) {
              console.log('[打开小程序失败]', err);
            }
          });
        } else {
          // 这里是-1---表示关闭支付
          wx.showModal({
            title: '温馨提示',
            showCancel: false,
            content: resulte.msg
          });
        }
      } else if (resulte.code == 2000) {
        var modal = resulte.data.modal;
        var new_wxappid = resulte.data.new_wxappid;
        wx.showModal({
          title: modal.title,
          showCancel: false,
          content: modal.content,
          success: function () {
            wx.navigateToMiniProgram({
              appId: new_wxappid,
              extraData: {
                game_id: that.initData.game_id,
                game_name: that.initData.game_name,
                from_id: that.initData.from_id,
                wxmini_appid: that.initData.wxmini_appid,
                user_id: user_id,
                guid: qxyxUserInfo.guid
                // envVersion: 'develop'
              } });
          }
        });
      } else {
        if (resulte.msg !== '') {
          wx.showModal({
            title: '温馨提示',
            showCancel: false,
            content: resulte.msg
          });
        }
      }
    });
  },

  /* midashi_pay */
  _requestMidasPayment(data, paycbData, callback) {
    var that = this;
    wx.requestMidasPayment({
      mode: data.mode,
      env: data.env,
      offerId: data.offerId,
      currencyType: data.currencyType,
      platform: data.platform,
      buyQuantity: data.buyQuantity,
      zoneId: data.zoneId,
      success(res) {
        // 发起pay回调请求
        that._payCallback(paycbData, callback);
      },
      fail(res) {
        console.log('[米大师支付失败]', res);
        if (callback) {
          callback({
            statusCode: 1,
            status: '米大师fail'
          });
        }
      }
    });
  },

  /* 打开客服充值 */
  _payCustomerService(paycbData, callback) {
    wx.hideLoading();
    var that = this;
    wx.showModal({
      title: '充值教程',
      showCancel: false,
      content: paycbData.op_msg,
      success(res) {
        if (res.confirm) {
          that._customerService('', true, paycbData.order_id, 'https://yxfile.gowan8.com/xcxmajia/mjwsw/imgs/xcx_pay.png', function (res) {
            if (res.statusCode == 1) {
              wx.showModal({
                title: '温馨提示',
                cancelText: '朕知道了',
                confirmText: '前往充值',
                content: '是否确定取消？',
                success: function (res) {
                  if (res.confirm) {
                    that._customerService('', true, paycbData.order_id, 'https://yxfile.gowan8.com/xcxmajia/mjwsw/imgs/xcx_pay.png');
                  } else if (res.cancel) {
                    console.log('[用户点击取消支付]');
                  }
                }
              });
            }
          });
        }
      }
    });
  },

  /* pay回调通知请求 */
  _payCallback(paycbData, callback) {
    delete paycbData.op_msg;
    request('notify/jsdk/channel/minigame', null, paycbData, 1).then(res => {
      if (callback) {
        callback({
          statusCode: res.code,
          status: res.msg
        });
      }
    });
  },

  /* 激活 */
  _active() {
    // 参数对象
    let that = this;
    let active_qx_uuid = getStorageSync('active_qx_uuid');
    if (!active_qx_uuid || active_qx_uuid != microParame) {
      let args = __assign(that.initData, extFooter());
      // 广告参数 getTfParams()
      let tfData = getTfParams();
      let headers = {};
      if (Object.keys(tfData).length) {
        if (tfData.ad_source) {
          args.ad_source = tfData.ad_source;
        }
        headers['qxyx-ad'] = JSON.stringify(tfData);
      }
      /** ********** 发送激活请求*********************/
      request('loadlog', 'active', args, 1, headers).then(resulte => {
        saveStorageSync('active_qx_uuid', microParame);
      });
    }
  },

  //登录成功显示提示(对外)
  loginTips: function (roleParams) {
    this._loginTips(roleParams);
  },

  //登录成功显示提示,type--1 表示谈转端图片，其他表示转客服会话
  _loginTips: function (roleParams, type = 0) {
    var params = localUserInfo.ext.login_tips;
    if (!params) {
      return;
    }
    var isOpen = false;
    if (params.open == 2) {
      if (roleParams.roleLevel <= params.cfg.max_role_level && roleParams.roleLevel >= params.cfg.min_role_level) {
        isOpen = true;
      }
    } else if (params.open == 1) {
      isOpen = true;
    }
    if (!isOpen) {
      console.log('[isOpenReturn]', isOpen);
      return;
    }

    if (_globalData.loginTipsNum >= 5) {
      delete localUserInfo.ext.login_tips;
      return;
    }
    _globalData.loginTipsNum++;
    // mode说明 -- 1- 旧版，弹框，2-新版
    var mode = params.mode;
    console.log('[mode]', mode);
    if (mode == 1) {
      this._loginTipsItem(type);
    } else if (mode == 2) {
      this._showActionSheet();
    }
  },

  // type--1 表示谈转端图片，其他表示转客服会话
  _loginTipsItem(type = 0) {
    var that = this;
    var qxyxUserInfo = getStorageSync(USER_INFO);
    var login_tips = qxyxUserInfo.ext.login_tips;
    if (!login_tips.title || !login_tips.content) {
      return false;
    }
    wx.showModal({
      title: login_tips.title,
      content: login_tips.content,
      showCancel: false,
      // cancelText: "残忍拒绝",
      confirmText: "前往修复",
      success: function (res) {
        if (res.confirm) {
          if (type == 1) {
            // 功能2，展示转端图片
            that.showShareImageMenu('zd_lead');
            return;
          }
          that.showShareImageMenu('zd_qrcode2');
          // 功能1，前往客服
          /*var user_id = qxyxUserInfo.user_id;
          var initData = that.initData;
          let pr = {
            game_id: initData.game_id,
            user_id: user_id,
            channel: initData.channel,
            qx_event_type: "user_account"
          };
          that._customerService(pr, true, '手机版(token:' + localUserInfo.guid + ')', 'https://yxfile.gowan8.com/upload/image/202008/icon_gift.jpg');*/
        }
      },
      fail: function () {}
    });
  },

  /* 创建角色上报 */
  createRole(params) {
    let type = 'add';
    let input = __assign({}, this.initData, extFooter(), getRoleBaseInfo(params), {
      user_id: localUserInfo.user_id
    });
    this._loginTips(params);
    return new Promise((resolve, reject) => {
      this._reportRequst(type, input, resolve);
    });
  },

  /* 切换角色上报 */
  changeRole(params) {
    let type = 'login';
    let input = __assign({}, this.initData, extFooter(), getRoleBaseInfo(params), {
      user_id: localUserInfo.user_id
    });
    this._loginTips(params);
    return new Promise((resolve, reject) => {
      this._reportRequst(type, input, resolve);
    });
  },

  /* 角色升级上报 */
  upgradeRole(params) {
    let type = 'level';
    let input = __assign({}, this.initData, extFooter(), {
      user_id: localUserInfo.user_id
    }, getRoleBaseInfo(params));
    this._loginTips(params);
    return new Promise((resolve, reject) => {
      this._reportRequst(type, input, resolve);
    });
  },

  /* 上报请求 */
  _reportRequst(type, input, resolve) {
    request('role', type, input, 1).then(res => {
      let reportReslute = {
        statusCode: res.code,
        status: res.msg
      };
      resolve(reportReslute);
    });
  },

  /* 主动分享 */
  shareToArk(params = {}, callback) {
    var options = this.onShareToArk(params);
    console.log('[主动分享数据options]', options);
    wx.shareAppMessage(options);
    if (callback) {
      callback({
        statusCode: 0,
        status: '分享成功'
      });
    }
  },

  /* 配置右上角微信分享信息 */
  onShareAppMessage(params = {}, callback) {
    var shareData = this.onShareToArk(params);
    console.log('[右上角分享数据shareData]', shareData);
    wx.onShareAppMessage(() => {
      return shareData;
    });
    callback && callback({
      statusCode: 0,
      status: '配置成功'
    });
  },

  /* 组装分享参数 */
  onShareToArk(params = {}) {
    var qxQuery = 'share_user=' + localUserInfo.user_id;
    if (params.query) {
      params.query = qxQuery + '&' + params.query;
    }
    var options = {
      title: shareCfg.title,
      imageUrl: shareCfg.img_url,
      query: qxQuery
    };
    return __assign({}, options, params);
  },

  /* banner广告 */
  bannerAdShow(config = {}, callback) {
    if (!config.adUnitId) {
      wx.showToast({
        title: '请传入广告位ID',
        icon: 'none'
      });
      return;
    }
    let defaultConfig = {
      adUnitId: config.adUnitId,
      adIntervals: config.adIntervals >= 30 ? config.adIntervals : 30,
      style: {
        left: config.left || 30,
        top: config.top || 520,
        width: config.width || 320
      }
    };
    if (_globalData.bannerAd) {
      _globalData.bannerAd.destroy();
      delete _globalData.bannerAd;
    }
    _globalData.bannerAd = wx.createBannerAd(defaultConfig);
    _globalData.bannerAd.show().then(() => {
      callback && callback({
        statusCode: 0,
        status: '成功'
      });
    });
    _globalData.bannerAd.onError(err => {
      callback && callback({
        statusCode: 1,
        status: '发生错误'
      });
    });
  },

  /** 隐藏banner广告 */
  bannerAdHide(callback) {
    if (_globalData.bannerAd) {
      _globalData.bannerAd.hide().then(() => {
        callback && callback({
          statusCode: 0,
          status: '关闭banner广告成功'
        });
      }).catch(() => {
        callback && callback({
          statusCode: 1,
          status: '关闭banner广告异常'
        });
      });
    } else {
      callback && callback({
        statusCode: 0,
        status: '关闭banner广告成功'
      });
    }
  },

  /* 激励视频广告 */
  rewardedVideoAd(adUnitId = '', callback) {
    //创建
    let VideoAd = wx.createRewardedVideoAd({
      adUnitId: adUnitId
    });
    //显示
    VideoAd.show().catch(err => {
      VideoAd.load().then(() => VideoAd.show());
    });
    // 监听关闭事件
    VideoAd.onClose(function (_res) {
      VideoAd.offClose();
      // 小于 2.1.0 的基础库版本，res 是一个 undefined
      if (_res && _res.isEnded || _res === undefined) {
        // 正常播放结束，可以下发游戏奖励
        callback && callback({
          statusCode: 0,
          status: '正常播放结束'
        });
      } else {
        // 播放中途退出，不下发游戏奖励
        callback && callback({
          statusCode: -1,
          status: '播放中途退出'
        });
      }
    });
    // 监听错误事件
    VideoAd.onError(function (_res) {
      callback({
        statusCode: 1,
        status: '视频播放错误'
      });
    });
  },

  /* 插屏广告 */
  interstitialAd(adUnitId, callback) {
    let interstitialAdRes = wx.createInterstitialAd({
      adUnitId: adUnitId
    });
    interstitialAdRes.show().catch(err => {
      callback && callback({
        statusCode: 1,
        status: '插屏广告显示发生错误'
      });
    });
    interstitialAdRes.onLoad(() => {
      callback && callback({
        statusCode: 0,
        status: '插屏广告已正常显示'
      });
    });
    interstitialAdRes.onClose(() => {
      callback && callback({
        statusCode: -1,
        status: '插屏广告已关闭'
      });
    });
  },

  // 打开客服
  _customerService(sf, showCard, msgTitle, msgImg, callback) {
    if (sf && typeof sf == 'object') {
      sf = JSON.stringify(sf);
    }
    wx.openCustomerServiceConversation({
      sessionFrom: sf, //会话来源
      showMessageCard: showCard || false,
      sendMessageTitle: msgTitle || '',
      sendMessageImg: msgImg || '',
      success: function (res) {
        callback && callback({
          statusCode: 0,
          status: '打开客服成功'
        });
      },
      fail: function (res) {
        callback && callback({
          statusCode: 1,
          status: '打开客服失败'
        });
      }
    });
  },

  /** 联系客服 */
  goKefu(callback) {
    let pr = {
      guid: localUserInfo.guid,
      game_id: this.initData.game_id,
      user_id: localUserInfo.user_id,
      channel: this.channel,
      qx_event_type: 'kefu',
      from_id: this.initData.from_id
    };
    this._customerService(pr, false, '联系客服', '', callback);
  },

  /** 订阅消息 */
  requestSubscribeMessage(tmplIds = [], callback) {
    wx.requestSubscribeMessage({
      tmplIds: tmplIds,
      success: function (res) {
        callback && callback({
          statusCode: 0,
          status: '消息订阅成功'
        });
      },
      fail: function (err) {
        callback && callback({
          statusCode: 1,
          status: err.errMsg + ',消息订阅失败'
        });
      }
    });
  },

  /** 小游戏跳转 */
  navigateToMiniProgram(appId, callback) {
    wx.navigateToMiniProgram({
      appId: appId,
      success: function (res) {
        callback && callback({
          statusCode: 0,
          status: '跳转成功'
        });
      },
      fail: function (res) {
        callback && callback({
          statusCode: 1,
          status: '跳转失败'
        });
      }
    });
  },

  // 检查是否显示支付
  canPay(params, callback) {
    let result = {
      statusCode: 0,
      status: ''
      // 获取设备类型
    };var systemInfo = wx.getSystemInfoSync();
    let pf = systemInfo.system.indexOf('iOS') == 0 ? 2 : 1;
    let input = __assign({}, this.initData, getRoleBaseInfo(params), {
      os: pf,
      platform: systemInfo.platform,
      is_test: params.isTest || 0 // 1 审核环境， 0 非审核环境
    });
    request('h5', 'wxmini_can_pay', input, 0).then(res => {
      if (res.code != 0) {
        result = {
          statusCode: res.code,
          status: res.msg
        };
      }
      if (callback) {
        callback(result);
      }
    });
  },

  // 检查是否已绑定手机号码
  checkBindPhone(callback) {
    let result = {
      statusCode: 0, // 0 表示已绑定，其他值表示未绑定
      status: ''
    };
    var qxyxUserInfo = getStorageSync(USER_INFO);
    var reqData = __assign({}, this.initData, sdkFooter(), {
      user_id: qxyxUserInfo.user_id,
      domain: 'api'
    });
    request('user', 'check_bind_phone', reqData, 0).then(res => {
      if (res.code != 0) {
        result = {
          statusCode: res.code,
          status: res.msg
        };
      }
      if (callback) {
        callback(result);
      }
    });
  },

  // 获取手机验证码
  bindSendCode(params, callback) {
    delete _globalData.bindSendCodeRes;
    let result = {
      statusCode: 0,
      status: ''
    };
    var reqData = __assign({}, this.initData, sdkFooter(), {
      phone: params.phone || '',
      domain: 'api',
      user_id: localUserInfo.user_id,
      pos: 3
    });
    request('send_code', 'index', reqData, 0).then(res => {
      if (res.code != 0) {
        result = {
          statusCode: res.code,
          status: res.msg
        };
      } else {
        _globalData.bindSendCodeRes = res.data;
      }
      if (callback) {
        callback(result);
      }
    });
  },

  // 绑定手机号码
  bindPhone(params, callback) {
    let result = {
      statusCode: 0,
      status: ''
    };
    var qxyxUserInfo = getStorageSync(USER_INFO);
    var bindSendCodeRes = _globalData.bindSendCodeRes;
    if (!bindSendCodeRes) {
      result = {
        statusCode: 1,
        status: '请先获取验证码'
      };
      callback && callback(result);
      return;
    }
    delete _globalData.bindSendCodeRes;
    var reqData = __assign({}, {
      user_id: qxyxUserInfo.user_id,
      phone: params.phone,
      code: params.code,
      code_sign: bindSendCodeRes.code_sign,
      code_timeout: bindSendCodeRes.timeout,
      domain: 'api'
    }, sdkFooter(), this.initData);
    request('user', 'bind_phone', reqData, 0).then(res => {
      if (res.code != 0) {
        result = {
          statusCode: res.code,
          status: res.msg
        };
      }
      if (callback) {
        callback(result);
      }
    });
  },

  // 显示悬浮窗--egretobj为游戏场景对象
  showEgretFloatBall(egretobj, roleParams = {}) {
    return;
    var isOpen = this.isShowFloatBtn(roleParams);
    if (!isOpen) {
      return;
    }
    let that = this;
    // let btn = new window.qxMiniButton.cross.MiniButton; //原版
    let btn = new window.qxMiniFloatBall.cross.MiniButton(); //更改后版本
    egretobj.addChildAt(btn, 100);
    btn.init({
      iconpath: ["https://yxfile.gowan8.com/upload/icon/wxmini/bg-left.png", "https://yxfile.gowan8.com/upload/icon/wxmini/bg-right.png", "https://yxfile.gowan8.com/upload/icon/wxmini/main.png", "https://yxfile.gowan8.com/upload/icon/wxmini/weixin.png", "https://yxfile.gowan8.com/upload/icon/wxmini/youxi.png", 'https://yxfile.gowan8.com/test/icon/shouji.png'],
      texts: ["公众号", "升 级", '手 机'],
      icon: {
        posX: 200,
        posY: 340
      },
      onClick: idx => {
        // console.log("btn call idx ", idx)
        var iconIndex = Number(idx);
        switch (iconIndex) {
          case 0:
            that.goGzh();
            break;
          case 1:
            that._loginTipsItem(1);
            break;
          case 2:
            that.goBindPhone();
            break;
        }
      }
    });
  },

  // 是否显示跳转小程序按钮
  isShowFloatBtn(roleParams, callback) {
    var params = localUserInfo.ext.floating_ball;
    console.log('[研发传入的角色信息roleParams]', roleParams);
    console.log('[后台配置信息params]', params);
    var isOpen = false;
    if (params.open == 2) {
      if (roleParams.roleLevel <= params.cfg.max_role_level && roleParams.roleLevel >= params.cfg.min_role_level) {
        isOpen = true;
      }
    } else if (params.open == 1) {
      isOpen = true;
    }
    if (isOpen) {
      callback && callback({
        statusCode: 0,
        isOpen: isOpen,
        status: "显示"
      });
    } else {
      callback && callback({
        statusCode: 1,
        isOpen: isOpen,
        status: "隐藏"
      });
    }
    console.log('[是否显示转端isOpen]', isOpen);
    return isOpen;
  },

  // 判断玩家是否从我的小程序进入
  isSourceMy(callback) {
    var source = wx.getLaunchOptionsSync();
    if (source.scene == 1089) {
      callback && callback({
        statusCode: 0,
        status: '来源我的小程序'
      });
    } else {
      callback && callback({
        statusCode: 1,
        status: '不是来源我的小程序'
      });
    }
  },

  // 获取直播室信息
  getLiveInfo(params, callback) {
    var _this = this;
    if (wx.getChannelsLiveInfo) {
      wx.getChannelsLiveInfo({
        finderUserName: params.finderUserName,
        success: function (sucRes) {
          _this.liveDt = sucRes;
          _this.liveDt.finderUserName = params.finderUserName;
          callback && callback({
            statusCode: 0,
            liveInfo: _this.liveDt,
            status: '获取直播室信息成功'
          });
        },
        fail: function (errRes) {
          callback && callback({
            statusCode: 1,
            status: '获取直播室信息失败'
          });
        }
      });
    } else {
      callback && callback({
        statusCode: 1,
        status: '该微信版本不支持此api'
      });
    }
  },

  // 跳转直播室
  goLive(callback) {
    var dt = {
      finderUserName: this.liveDt.finderUserName,
      feedId: this.liveDt.feedId,
      nonceId: this.liveDt.nonceId
    };
    if (wx.openChannelsLive) {
      wx.openChannelsLive(dt);
      callback && callback({
        statusCode: 0,
        status: '进入直播室成功'
      });
    } else {
      callback && callback({
        statusCode: 1,
        status: '当前微信不支持此api,进入直播室失败'
      });
    }
  },

  //显示游戏圈
  showGameClub(params = {}) {
    wx.createGameClubButton({
      type: params.type || "image",
      icon: params.icon || "green",
      text: params.text || "",
      style: {
        left: params.left || 10,
        top: params.top || 76,
        width: params.width || 40,
        height: params.height || 40
      }
    });
  },

  // 前往公众号
  goGzh() {
    let pr = {
      qx_event_type: "gzh",
      game_id: this.initData.game_id
    };
    this._customerService(pr, true, '下方扫码关注公众号，领礼包', 'https://yxfile.gowan8.com/upload/image/202008/icon_gift.jpg');
  },

  // 是否展示激励视频---说明。没有充值才展示激励视频
  isShowVideoAd(params = {}, callback) {
    var dt = {
      game_id: this.initData.game_id,
      channel: this.initData.channel,
      role_id: params.roleId,
      server_id: params.serverId
    };
    request('h5', 'role_charge', dt, 0).then(res => {
      // 0--有充值
      if (res.code == 0) {
        callback && callback({
          statusCode: 1,
          status: '不展示激励视频'
        });
      } else {
        callback && callback({
          statusCode: 0,
          status: '展示激励视频'
        });
      }
    });
  },

  // 检测文本
  msgSecCheck(params = {}, callback) {
    var qxyxUserInfo = getStorageSync(USER_INFO);
    var openid = qxyxUserInfo.ext.openid;
    var dt = {
      openid: openid,
      scene: params.scene,
      game_id: this.initData.game_id,
      wxmini_appid: this.initData.wxmini_appid,
      content: params.content,
      domain: "box"
    };
    request('wxa', 'msg_sec_check', dt, 1).then(res => {
      if (res.code == 0) {
        callback && callback({
          statusCode: 0,
          checkResult: res.data,
          status: '检测正常'
        });
      } else {
        callback && callback({
          statusCode: 1,
          status: '检测异常，请重新检测'
        });
      }
    });
  },

  // 检测图片或者音频
  mediaCheckAsync(params = {}, callback) {
    var qxyxUserInfo = getStorageSync(USER_INFO);
    var openid = qxyxUserInfo.ext.openid;
    var dt = {
      openid: openid,
      scene: params.scene,
      game_id: this.initData.game_id,
      wxmini_appid: this.initData.wxmini_appid,
      content: params.content,
      domain: "box"
    };
    request('wxa', 'media_check_async', dt, 1).then(res => {
      if (res.code == 0) {
        callback && callback({
          statusCode: 0,
          checkResult: res.data,
          status: '检测正常'
        });
      } else {
        callback && callback({
          statusCode: 1,
          status: '检测异常，请重新检测'
        });
      }
    });
  },

  // 显示分享图片菜单
  showShareImageMenu(ac = 'zd_lead') {
    // 先判断是否有图片，有图片就不需要发请求
    var sKey = ac + 'login_url';
    var login_url = getStorageSync(sKey);
    if (login_url) {
      wx.downloadFile({
        url: login_url,
        success: res => {
          wx.showShareImageMenu({
            path: res.tempFilePath,
            success: function () {}
          });
        }
      });
      return;
    }
    var qxyxUserInfo = getStorageSync(USER_INFO);
    var openid = qxyxUserInfo.ext.openid;
    var dt = {
      openid: openid,
      user_id: qxyxUserInfo.user_id,
      wxmini_appid: this.initData.wxmini_appid,
      game_id: this.initData.game_id,
      channel: this.initData.channel,
      domain: "box"
    };
    request('wxa', ac, dt, 1).then(res => {
      if (res.code == 0) {
        saveStorageSync(sKey, res.data.login_url);
        wx.downloadFile({
          url: res.data.login_url,
          success: res => {
            wx.showShareImageMenu({
              path: res.tempFilePath,
              success: function () {}
            });
          }
        });
      } else {
        console.log('[获取转端图片异常]', res);
      }
    });
  },

  // 前往绑定手机号码小程序
  goBindPhone() {
    var qxyxUserInfo = getStorageSync(USER_INFO);
    let initData = this.initData;
    console.log(`/pages/index/index?game_id=${initData.game_id}&from_id=${initData.original_from_id}&user_id=${qxyxUserInfo.user_id}&wxmini_appid=${initData.wxmini_appid}&channel=${initData.channel}&guid=${qxyxUserInfo.guid}`);
    var path = `/pages/news/news?game_id=${initData.game_id}&from_id=${initData.original_from_id}&user_id=${qxyxUserInfo.user_id}&wxmini_appid=${initData.wxmini_appid}&channel=${initData.channel}&guid=${qxyxUserInfo.guid}`;
    wx.navigateToMiniProgram({
      appId: "wx7be2eb52189caebf",
      path: path
      // envVersion: "develop"
    });
  },

  // 显示转端列表
  _showActionSheet() {
    this._getActionSheet().then(res => {
      var itemList = [];
      res.list.forEach(i => {
        itemList.push(i.desc);
      });
      wx.showActionSheet({
        alertText: res.title,
        itemList: itemList,
        success(res2) {
          var tapIndex = res2.tapIndex;
          var type = res.list[tapIndex]['type'];
          var text = res.list[tapIndex]['text'];
          if (type == 1) {
            wx.setClipboardData({
              data: text
            });
          } else if (type == 2) {
            wx.previewImage({
              current: text,
              urls: [text]
            });
          }
        },
        fail(res) {
          console.log(res.errMsg);
        }
      });
    });
  },

  // 获取ActionSheet
  _getActionSheet() {
    return new Promise(resolve => {
      var loginTipsSheet = _globalData.loginTipsSheet;
      if (!loginTipsSheet) {
        let qxyxUserInfo = getStorageSync(USER_INFO);
        let user_id = qxyxUserInfo.user_id;
        let openid = qxyxUserInfo.ext.openid;
        var dt = __assign({}, {
          openid: openid,
          user_id: user_id,
          domain: "box"
        }, this.initData);
        request('wxa', 'login_tips', dt, 1).then(res => {
          console.log('[res]', res);
          _globalData.loginTipsSheet = res.data;
          if (res.code == 0) {
            resolve(res.data);
          }
        });
      } else if (loginTipsSheet.title) {
        resolve(_globalData.loginTipsSheet);
      }
    });
  },

  // 获取玩家转端二维码链接
  zdQrcode(callback) {
    var qxyxUserInfo = getStorageSync(USER_INFO);
    var dt = {
      game_id: this.initData.game_id,
      channel: this.initData.channel,
      user_id: qxyxUserInfo.user_id,
      wxmini_appid: this.initData.wxmini_appid,
      guid: qxyxUserInfo.guid,
      domain: "box"
    };
    request('wxa', 'zd_qrcode', dt, 1).then(res => {
      console.log('[返回值res]', res);
      if (res.code == 0) {
        callback && callback({
          statusCode: 0,
          qrImg: res.data.qr,
          status: '获取成功'
        });
      } else {
        callback && callback({
          statusCode: 1,
          status: '获取失败'
        });
      }
    });
  }
};
if (typeof module !== "undefined") {
  module.exports = qxyxSDK;
  if (typeof window !== "undefined") {
    window.qxyxSDK = qxyxSDK;
  }
} else if (typeof window !== "undefined") {
  window.qxyxSDK = qxyxSDK;
}