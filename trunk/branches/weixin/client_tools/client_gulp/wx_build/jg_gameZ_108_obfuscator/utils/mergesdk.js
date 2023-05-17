var _j = wx.n$;
/** 
 * 第三方sdk 导入
 */

import $$Rangers from '@datarangers/sdk-qg';
import $$Oreyun from './oreyunwx.min';

/** sdk版本号 */
let _sdk_version = "merge_sdk_v_2023_0310_1646";

/**
 * sdk 配置导入
 */
let _config = require('./merge_sdk_config');

/** 小游戏后台日志 */
var _wxgame_server_log = require('./log.js');

/**
 * sdk 参数
 */
let _params = {};

/** 激励视频广告 */
let _videoAd = null;
let _videoAdCall = null;

/** 插屏广告 */
let _interstitialAd = null;

/**
 * 初始化
 */
function _init() {
  _params._sandbox_url = "api-sandbox.aictr.co";
  _params._url = "api.aictr.co";
  _params.wxCode = null;
  _params.cookies = null;
  _params.loginData = null;
  _params.balance = -1;
  // 打印
  console.log(_params);
  // 数说初始化
  $$Rangers.init({
    app_id: _config.datarangers_app_id, // 替换成申请的app_id，参考2.1节获取，注意类型是number而非字符串
    log: true, // 开启后会控制台会打印日志，开发阶段有助于查看埋点上报过程
    auto_report: true // 开启后会上报一些预定义事件，如app_launch、app_terminate等
  });
  $$Rangers.config({
    mp_name: _config.app_name, // 一些预定义属性，可以通过config进行设置
    mp_version: _config.app_verson
  });
  $$Rangers.send();
  // 创建激励视频广告实例，提前初始化
  if (!!_config.rewarded_vedio_ad_unit && _config.rewarded_vedio_ad_unit !== "") {
    _videoAd = wx.createRewardedVideoAd({
      adUnitId: _config.rewarded_vedio_ad_unit
    });
    _videoAd.onError(res => {
      console.log("激励视频广告播放错误：", res);
    });
    _videoAd.onClose(res => {
      console.log("激励视频广告关闭，是否完整看完视频：", res.isEnded);
      // 播放激励视频
      !!_videoAdCall && _videoAdCall(res.isEnded);
    });
  }
  // 创建插屏广告实例，提前初始化
  if (!!_config.interstitial_ad_unit && _config.interstitial_ad_unit !== "") {
    _interstitialAd = wx.createInterstitialAd({
      adUnitId: _config.interstitial_ad_unit
    });
  }
  // 日志
  console.log("sdk初始化，版本为：" + _sdk_version);
  _wxgame_server_log.info("sdk初始化，版本为：" + _sdk_version);
  // 微信菜单分享开启
  _showShareMenu();
  // 获取微信启动参数
  let result = wx.getLaunchOptionsSync();
  // 初始化热云
  if (!!_config.oreyun_app_key && _config.oreyun_app_key !== "") {
    console.log("小游戏参数查询值：", JSON.stringify(result.query));
    _wxgame_server_log.info("小游戏参数查询值：", JSON.stringify(result.query));

    // 登陆服务器
    _loginToServerApi(data => {
      if (!!data) {
        console.log("热云初始化成功！");
        _wxgame_server_log.info("热云初始化成功！");
        // 热云初始化
        $$Oreyun.init(_config.oreyun_app_key, data.openid);
        _reyunLaunch(result);
        // 上报安装事件
        _reportLauchEvent(result);
        // 日志打印
        let rywx_cid = wx.getStorageSync("rywx_cid");
        console.log("热云本地存储值rywx_cid：" + rywx_cid);
        _wxgame_server_log.info("热云本地存储值rywx_cid：" + rywx_cid);
        let rywx_campaignid = wx.getStorageSync("rywx_campaignid");
        console.log("热云本地存储值rywx_campaignid：" + rywx_campaignid);
        _wxgame_server_log.info("热云本地存储值rywx_campaignid：" + rywx_campaignid);
        let rywx_appid = wx.getStorageSync("rywx_appid");
        console.log("热云本地存储值rywx_appid：" + rywx_appid);
        _wxgame_server_log.info("热云本地存储值rywx_appid：" + rywx_appid);
        let rywx_openid = wx.getStorageSync("rywx_openid");
        console.log("热云本地存储值rywx_openid：" + rywx_openid);
        _wxgame_server_log.info("热云本地存储值rywx_openid：" + rywx_openid);
        // 余额查询
        _midasGetbalance(() => {});
      } else {
        console.log("热云初始化失败，原因：登陆服务器获取openid失败！");
        _wxgame_server_log.error("热云初始化失败，原因：登陆服务器获取openid失败！");
      }
    });
  } else {
    console.log("热云初始化失败，原因：热云appKey没在sdk_config中配置！");
    _wxgame_server_log.info("热云初始化失败，原因：热云appKey没在sdk_config中配置！");
  }
}

/** 菜单分享 */
function _showShareMenu() {
  wx.showShareMenu({
    withShareTicket: true,
    menus: ['shareAppMessage', 'shareTimeline']
  });
  wx.onShareAppMessage(() => {
    return {
      imageUrlId: _config.menu_share_img_id,
      imageUrl: _config.menu_share_img_url
    };
  });
  wx.onShareTimeline(() => {
    return {
      imagePreviewUrlId: _config.menu_share_img_id,
      imageUrlId: _config.menu_share_img_id,
      imageUrl: _config.menu_share_img_url,
      imagePreviewUrl: _config.menu_share_img_url
    };
  });
}

/** 熱云launch */
function _reyunLaunch(e) {
  var t = e.query;
  if (JSON.stringify(t) !== "{}") {
    var n = {};
    for (var i in t) {
      var a = i.replace("?", "");
      n[a] = t[i];
    }
    _setReyunId("querystring", n);
  }
  if (!_getReyunId("campaignid")) {
    _setReyunId("campaignid", e.query.surl ? e.query.surl : "_default_");
  }
  if (!_getReyunId("cid")) {
    _setReyunId("cid", e.query.cid ? parseInt(e.query.cid) : -1);
  }
  _setReyunId("starttime", Date.now());
  _setReyunId("sceneid", e.scene);
  // launch
  $$Oreyun.launch();
  // 日志
  console.log("热云launch成功！");
  _wxgame_server_log.info("热云launch成功！");
}

/** 獲取熱雲id */
function _getReyunId(k) {
  try {
    return wx.getStorageSync("rywx_" + k);
  } catch (e) {}
}

/** 設置熱云id */
function _setReyunId(k, v) {
  try {
    wx.setStorageSync("rywx_" + k, v);
  } catch (e) {}
}

/** 热云注册 */
function _oreyunRegister(uid, servername, serverid, rolename) {
  $$Oreyun.register(uid);
  // BI打点
  _reportRegisterEvent(servername, serverid, rolename, uid);
}

/** 热云登陆 */
function _oreyunLoggedin(uid, servername, serverid, rolename) {
  $$Oreyun.loggedin(uid);
  // bi打点
  _reportLoggedinEvent(servername, serverid, rolename, uid);
}

/** 热云付费 */
function _oreyunPayment(transactionid, currencyamount, servername, serverid, rolename, roleid) {
  $$Oreyun.payment(transactionid, currencyamount, "CNY", "weixinpay");
  // 上报bi
  _reportPaymentEvent(servername, serverid, rolename, roleid, transactionid, currencyamount);
}

/** 自定义事件 */
function _oreyunEvent(eventName) {
  $$Oreyun.event(eventName);
}

/** 展示插屏广告 */
function _showInterstitialAd() {
  if (!!_interstitialAd) {
    _interstitialAd.show().catch(err => {
      console.log('插屏 广告失败！', err);
    });
  } else {
    console.log("插屏广告未初始化，请检查配置文件插屏广告id是否填写！");
  }
}

/** 播放激励视频广告 */
function _showRewardedVedioAd(callback) {
  if (!!_videoAd) {
    _videoAdCall = callback;
    _videoAd.show().catch(err => {
      console.log('激励视频 广告失败重试！', err);
      // 失败重试
      _videoAd.load().then(() => {
        _videoAd.show().catch(() => {
          console.log('激励视频 广告显示失败1');
          callback(false);
        });
      }).catch(err => {
        console.log('激励视频 广告显示失败2');
        callback(false);
      });
    });
  } else {
    console.log("激励视频广告未初始化，请检查配置文件激励视频广告id是否填写！");
    callback(false);
  }
}

/**
 * 获取微信用户信息
 */
function _getWxUserInfo(callback, buttonInfo) {
  wx.getSetting({
    success(res) {
      if (res.authSetting["scope.userInfo"]) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        wx.getUserInfo({
          success: function (res) {
            console.log("授权成功，获得玩家的基本信息: ", res);
            res.newAuth = false;
            // 获取用户信息成功回调
            callback(res);
          }
        });
      } else {
        // 未授权，显示授权按钮
        let sysInfo = wx.getSystemInfoSync();
        // 授权按钮信息
        if (!buttonInfo) {
          console.log("未授权,创建一个全屏的授权按钮,需要用户点击屏幕！");
          // 默认授权按钮信息
          buttonInfo = {
            type: 'text',
            text: "",
            style: {
              left: 0,
              top: 0,
              width: sysInfo.screenWidth,
              height: sysInfo.screenHeight,
              backgroundColor: "#00000000",
              color: "#ffffff",
              textAlign: "center",
              lineHeight: sysInfo.screenHeight
            }
          };
        } else {
          console.log("未授权,创建一个自定义的授权按钮！");
        }
        // 创建授权按钮
        let button = wx.createUserInfoButton(buttonInfo);
        // 授权按钮点击
        button.onTap(res => {
          // 判断用户是否点击授权
          if (res.userInfo) {
            console.log("授权成功，获得玩家的基本信息: ", res.userInfo);
            // 销毁按钮
            button.destroy();
            // 获取用户信息成功回调
            res.newAuth = true;
            callback(res);
          } else {
            let title = "温馨提示";
            let content = "《" + _config.app_name + "》需要您的用户信息来登录游戏，请您同意授权!";
            wx.showModal({
              title: title,
              content: content,
              showCancel: false
            });
            // 获取用户信息失败回调
            callback(null);
          }
        });
        // 授权按钮展示
        button.show();
      }
    },
    fail() {
      console.log("获得微信用户信息授权设置失败！");
      // 获取用户信息失败回调
      callback(null);
    },
    complete() {}
  });
}

/** 
 * 数说 打点
 */
function _dotEvent(eventName, params) {
  $$Rangers.event(eventName, params);
}

/**
 * 数说 公共属性配置
 */
function _configRangers(user_unique_id, params) {
  // 配置参数初始化
  if (!params) {
    params = {};
  };
  // 设置uuid
  params.user_unique_id = user_unique_id;
  // 进行数说公共属性配置
  $$Rangers.config(params);
}

/**
 * 数说 A/B实验
 */
function _getVar(test_name, dft_value, call) {
  // 获取A/B实验变量
  $$Rangers.getVar(test_name, dft_value, value => {
    call(value);
  });
}

/**
 * 打开客服对话
 */
function _openCustomerServiceConversation() {
  wx.openCustomerServiceConversation({});
}

/**
 * 订阅模版消息
 */
function _requestSubscribeMessage(tmplIds, callback) {
  // 微信订阅
  wx.requestSubscribeMessage({
    tmplIds: tmplIds,
    success(res) {
      if (res.errMsg === "requestSubscribeMessage:ok") {
        let tmpl_states = {};
        // 获取系统订阅状态
        _getAllSubscribeStates(subscriptionsSetting => {
          if (!!subscriptionsSetting && subscriptionsSetting.mainSwitch) {
            // 系统订阅状态
            let itemSettings = subscriptionsSetting.itemSettings;
            for (let key in itemSettings) {
              if (itemSettings[key] !== "accept") {
                tmpl_states[key] = false;
              }
            }
            // 临时的订阅状态
            for (let i = 0; i < tmplIds.length; i++) {
              if (res[tmplIds[i]] === "accept") {
                tmpl_states[tmplIds[i]] = true;
              } else {
                tmpl_states[tmplIds[i]] = false;
              }
            }
            // 返回订阅的状态
            _subscribeToServer(tmpl_states, callback);
          } else {
            callback(null);
          }
        });
      } else {
        // 订阅模版消息失败
        callback(null);
      }
    },
    fail() {
      // 订阅模版消息失败
      callback(null);
    }
  });
}

/** 获得全部订阅状态 */
function _getAllSubscribeStates(callback) {
  wx.getSetting({
    withSubscriptions: true,
    success(res) {
      callback(res.subscriptionsSetting);
    },
    fail() {
      callback(null);
    }
  });
}

/** 订阅接口 */
function _subscribeToServer(tmpl_states, callback) {
  console.log("系统订阅状态:", tmpl_states);
  // 请求服务器
  wx.request({
    url: _getServerApiUrl() + "/v1/subscribe/client",
    method: "POST",
    header: {
      cookie: _params.cookies[0]
    },
    data: {
      tmpl_states: tmpl_states
    },
    success(res) {
      let result = res.data;
      if (result.code === "200") {
        console.log("订阅成功！结果：", result);
        callback(result.data);
      } else {
        console.log("订阅失败！错误码：" + result.code);
        callback(null);
      }
    },
    fail() {
      console.log("订阅失败!");
      callback(null);
    }
  });
}

/**
 * 通过客服发送支付
 */
function _payForCustomerServiceConversation(title, params) {
  // 发送带支付参数的消息给客服
  wx.openCustomerServiceConversation({
    sendMessageTitle: title,
    sessionFrom: JSON.stringify({ "params": params }),
    showMessageCard: true,
    sendMessageImg: '/MergeSDK/pay.jpg'
  });
}

/** 微信登录 */
function _wxLogin(callback) {
  // 微信登录
  wx.login({
    success(res) {
      if (res.code) {
        // 获得微信code成功
        console.log("微信登陆获取code成功！code:" + res.code);
        _wxgame_server_log.info("微信登陆获取code成功！code:" + res.code);
        _params.wxCode = res.code;
        callback(res.code);
      } else {
        // 获得微信code失败，带错误码
        console.log('微信登陆获取code失败!errMsg' + res.errMsg);
        _wxgame_server_log.error('微信登陆获取code失败!errMsg' + res.errMsg);
        callback(null);
      }
    },
    fail() {
      // 获得微信code失败
      console.log('微信登陆获取code失败!');
      callback(null);
    },
    complete(res) {
      console.log('微信登陆结果：' + JSON.stringify(res));
      _wxgame_server_log.info('微信登陆结果：' + JSON.stringify(res));
    }
  });
}

/**
 * 微信授权
 */
function _wxAuthorize(scope, callback) {
  wx.getSetting({
    success(res) {
      if (!res.authSetting[scope]) {
        wx.authorize({
          scope: scope,
          success() {
            // 授权成功
            console.log("授权" + scope + "成功！");
            callback(true);
          },
          fail() {
            // 授权失败
            console.log("授权" + scope + "失败！");
            callback(false);
          }
        });
      } else {
        // 授权成功
        console.log("授权" + scope + "成功！");
        callback(true);
      }
    },
    fail() {
      // 授权失败
      console.log("授权" + scope + "失败！");
      callback(false);
    }
  });
}

/**
 * 检查微信登录态
 */
function _checkWxSession(callback) {
  wx.checkSession({
    success() {
      //session_key 未过期，并且在本生命周期一直有效
      callback(true);
    },
    fail() {
      // session_key 已经失效
      callback(false);
    }
  });
}

/** 米大师下单 */
function _requestMidasPayOrder(amount, sku, extension, callback) {
  // 检查微信登陆态
  _checkWxSession(isValid => {
    // 登录态没过期 && 有sessionId
    if (isValid && !!_params.cookies) {
      // 米大师下支付订单
      _midasPayOrder(amount, sku, extension, callback);
    } else {
      // 登陆态过期，需要微信登陆
      _loginToServer(res => {
        if (!!res) {
          // 登陆成功
          // 米大师下支付订单
          _midasPayOrder(amount, sku, extension, callback);
        } else {
          // 登陆失败
          callback(null);
        }
      });
    }
  });
}

/**
 * 米大师余额查询
 */
function _requestMidasGetbalance(callback) {
  // 检查微信登陆态
  _checkWxSession(isValid => {
    // 登录态没过期 && 有sessionId
    if (isValid && !!_params.cookies) {
      // 米大师查询余额
      _midasGetbalance(callback);
    } else {
      // 登陆态过期，需要微信登陆
      _loginToServer(res => {
        if (!!res) {
          // 登陆成功
          // 米大师查询余额
          _midasGetbalance(callback);
        } else {
          // 登陆失败
          callback(null);
        }
      });
    }
  });
}

/**
 * 米大师支付
 */
function _requestMidasPayment(buy_quantity, callback) {
  // 检查微信登陆态
  _checkWxSession(isValid => {
    if (isValid) {
      // 米大师支付
      _midasPayment(buy_quantity, callback);
    } else {
      // 登陆态过期，需要微信登陆
      _wxLogin(code => {
        if (!!code) {
          // 登陆成功
          // 米大师支付
          _midasPayment(buy_quantity, callback);
        } else {
          // 登陆失败
          callback(false);
        }
      });
    }
  });
}

// 查询米大师余额
function _midasGetbalance(callback) {
  // 请求服务器
  wx.request({
    url: _getServerApiUrl() + "/v1/midas/getbalance",
    method: "POST",
    header: {
      cookie: _params.cookies[0]
    },
    data: {
      zone_id: "1"
    },
    success(res) {
      let result = res.data;
      if (result.code === "200") {
        // 存在内存中
        _params.balance = Number(result.data.balance);
        console.log("查询米大师余额成功！结果：", result);
        callback(result.data);
      } else {
        console.log("查询米大师余额失败!错误码：" + result.code);
        callback(null);
      }
      // 401重新登陆一下
      if (result.code === "401") {
        _loginToServer(() => {});
      };
    },
    fail() {
      console.log("查询米大师余额失败!");
      callback(null);
    }
  });
}

// 米大师下订单
function _midasPayOrder(amount, sku, extension, callback) {
  // 检查支付订单
  let checkPayOrder = function (balance) {
    if (balance >= amount) {
      // 游戏币充足
      // 下订单
      _midasPay(amount, sku, extension, callback);
    } else {
      // 余额不足，米大师充值后下单
      _midasPayment(amount, isSuccess => {
        if (isSuccess) {
          // 成功执行下单逻辑
          _midasPay(amount, sku, extension, callback);
        } else {
          // 充值失败
          callback(null);
          wx.showModal({
            title: '温馨提示',
            content: '充值返回：充值失败'
          });
        }
      });
    }
  };
  // 先查询余额是否足够
  if (_params.balance !== -1) {
    checkPayOrder(_params.balance);
  } else {
    _midasGetbalance(result => {
      // 查询成功
      if (!!result) {
        checkPayOrder(_params.balance);
      } else {
        // 查询订单失败
        callback(null);
      }
    });
  }
}

// 米大师下单
function _midasPay(amount, sku, extension, callback) {
  // 重制余额参数
  _params.balance = -1;
  // 请求服务器
  wx.request({
    url: _getServerApiUrl() + "/v1/midas/pay",
    header: {
      cookie: _params.cookies[0]
    },
    method: "POST",
    data: {
      zone_id: "1",
      amount: amount,
      sku: sku,
      extension: extension
    },
    success(res) {
      let result = res.data;
      if (result.code === "200") {
        // 余额参数刷新
        _params.balance = result.data.balance;
        console.log("米大师下单成功！结果：", res);
        callback(result.data);
        // 充值成功提示
        wx.showModal({
          title: '温馨提示',
          content: '充值返回：充值成功'
        });
      } else {
        console.log("米大师下单失败!错误码：" + result.code);
        callback(null);
        // 充值失败提示
        wx.showModal({
          title: '温馨提示',
          content: '充值返回：下单失败，请重试'
        });
        // 重新获取余额
        _midasGetbalance(() => {});
      }
      // 401重新登陆一下
      if (result.code === "401") {
        _loginToServer(() => {});
      }
    },
    fail() {
      console.log("米大师下单失败!");
      callback(null);
      // 充值失败提示
      wx.showModal({
        title: '温馨提示',
        content: '充值返回：下单失败，请重试'
      });
      // 重新获取余额
      _midasGetbalance(() => {});
    }
  });
}

// 米大师支付
function _midasPayment(amount, callback) {
  let env = _config.isTestEvn ? 1 : 0;
  console.log("米大师支付");
  wx.requestMidasPayment({
    mode: "game",
    currencyType: "CNY",
    buyQuantity: amount,
    env: env, // 1测试环境 0 正式环境
    offerId: _config.offerId,
    platform: "android",
    success() {
      // 启动付款成功
      callback(true);
    },
    fail(res) {
      // 启动付款失败
      callback(false);
      console.log("米大师支付失败！错误码：", res.errCode);
    }
  });
}

/**
 * 获得服务器域名
 */
function _getServerApiUrl() {
  return "https://" + (_config.isTestEvn ? _params._sandbox_url : _params._url);
}

/** 登陆到服务器外部接口 */
function _loginToServerApi(callback) {
  _checkWxSession(isValid => {
    if (isValid && !!_params.loginData) {
      console.log("直接返回登陆数据");
      _wxgame_server_log.info("直接返回登陆数据");
      callback(_params.loginData);
    } else {
      console.log("登陆服务器获取数据");
      _wxgame_server_log.info("登陆服务器获取数据");
      // 登陆服务器，重新获取
      _loginToServer(callback);
    }
  });
}

/**
 * 登录到服务器
 */
function _loginToServer(callback) {
  // 微信登录获取code
  _wxLogin(code => {
    if (!!code) {
      // 请求服务器
      wx.request({
        url: _getServerApiUrl() + "/v1/auth/login",
        method: "POST",
        data: {
          appid: _config.wx_app_id,
          code: code
        },
        success(res) {
          let result = res.data;
          // session_id保存
          _params.cookies = res.cookies;
          _params.loginData = result.data;
          console.log("登录到服务器成功！结果：" + JSON.stringify(result.data));
          _wxgame_server_log.info("登录到服务器成功！结果：" + JSON.stringify(result.data));
          callback(result.data);
        },
        fail() {
          console.log("登录到服务器失败!");
          _wxgame_server_log.error("登录到服务器失败!");
          callback(null);
        }
      });
    } else {
      callback(null);
    }
  });
}

/** 请求效验敏感词接口 */
function _requestMsgSecCheck(scene, content, callback) {
  // 检查微信登陆态
  _checkWxSession(isValid => {
    // 登录态没过期 && 有sessionId
    if (isValid && !!_params.cookies) {
      // 效验敏感词
      _msgSecCheck(scene, content, callback);
    } else {
      // 登陆态过期，需要微信登陆
      _loginToServer(res => {
        if (!!res) {
          // 登陆成功
          // 效验敏感词
          _msgSecCheck(scene, content, callback);
        } else {
          // 登陆失败
          callback(null);
        }
      });
    }
  });
}

/** 敏感词接口 */
function _msgSecCheck(scene, content, callback) {
  console.log("场景值：" + scene);
  console.log("敏感词：" + content);
  // 请求服务器
  wx.request({
    url: _getServerApiUrl() + "/v1/security/msg_sec_check",
    header: {
      cookie: _params.cookies[0]
    },
    method: "POST",
    data: {
      scene: scene,
      content: content
    },
    success(res) {
      let result = res.data;
      console.log("敏感词校验成功！结果：", res);
      callback(result.data);
    },
    fail() {
      console.log("敏感词校验失败!");
      callback(null);
    }
  });
}

function _exit() {
  // 退出小程序
  wx.exitMiniProgram({
    success(res) {
      console.log("退出成功！结果：", res);
    },
    fail() {
      console.log("退出失败!");
      callback(null);
    }
  });
}

/** 剪切板 */
function _setClipboardData(text, callback) {
  // 微信设置剪贴板功能
  wx.setClipboardData({
    data: text,
    success() {
      callback(true);
      console.log("复制剪贴板成功！");
    },
    fail() {
      callback(false);
      console.log("复制剪贴板失败！");
    }
  });
}

/**
 * 获得归因Install域名
 */
function _getInstallUrl() {
  return _config.isTestEvn ? "http://a37a17470566447c0ab44523ccc60d45-c31726f295a3f060.elb.cn-northwest-1.amazonaws.com.cn" : "https://in.walknode.com";
}

/**
 * 获得归因Event域名
 */
function _getEventUrl() {
  return _config.isTestEvn ? "http://afe8130afc7674c25b1c33ccb04b2448-eb80de547afb96ec.elb.cn-northwest-1.amazonaws.com.cn" : "https://ev.walknode.com";
}

/** 上报launch事件 */
function _reportLauchEvent(e) {
  let isReportedInstall = wx.getStorageSync('merge_isLauch');
  if (isReportedInstall !== "true") {
    //直接在热云初始化前触发
    // e={query:{"clue_token":"1736778353722382,1759867349983287","ip":"__IP__","surl":"FFrq2ua","promotion_id":"7207286220455051297","advertiser_id":"1736778351120391","req_id":"202303091256387E4C2AAA5CE3F91F536C","clue_id":"1759867349983287","project_id":"7207283861549367308","mid3":"7202434473971367947","adv_id":"1736778351120391","mid2":"7207291756072894524","mid1":"0","mid5":"7202870394155941946","cid":"21029","mid4":"__MID4__"}} ;
    // e={query:{"weixinadinfo":"9001981543.wx0ca5peofsdc2ga00.1001.1","wx_aid":"9001981543","surl":"RFf2iaa","weixinadkey":"9d358e2334d2174e07ab11a1b71cbb0d730fe7aba7e44703851d5f18db0f4c371cbc3c5c710118cbd1ed0ad104137988","wx_traceid":"wx0ca5peofsdc2ga00","cid":"21059","gdt_vid":"wx0ca5peofsdc2ga00"} 
    // } ;
    var t = e.query;
    if (JSON.stringify(t) !== "{}") {
      var n = {};
      for (var i in t) {
        var a = i.replace("?", "");
        n[a] = t[i];
      }
    }
    let m_source = "Organic";
    let account_id = "";
    let campaign_id = "";
    let adset_id = "";
    let ad_id = "";
    let video_id = "";
    let img_id = "";
    let ip = ""; //待获取
    let sysInfo = wx.getSystemInfoSync();
    let platform = !!sysInfo.platform ? sysInfo.platform : "";
    if (t.cid == -1) {
      //自然量
      console.log("nature");
    } else if (t.cid == 21029) {
      //巨量
      m_source = "bytedance_int";
      account_id = t.advertiser_id;
      if (!!t.promotion_id) {
        //巨量2
        console.log("巨量2");
        adset_id = t.promotion_id;
        video_id = t.mid3;
        img_id = t.mid1;
        campaign_id = t.project_id; //巨量1获取不到
      } else {
        //巨量1
        console.log("巨量1");
        adset_id = t.ad_id;
        ad_id = t.creative_id;
      }
    } else if (t.cid == 21059) {
      //gdt
      console.log("gdt");
      m_source = "tencentams_int";
      if (!!t.weixinadinfo && !!t.weixinadinfo.split(".")) {
        adset_id = t.weixinadinfo.split(".")[0];
      }
    } else if (t.cid == 21035) {
      //ks
      console.log("ks");
      m_source = "kuaishou_int";
      campaign_id = t.ksCampaignId;
      adset_id = t.ksUnitId;
      ad_id = t.ksCreativeId;
    } else {
      //其余情况 按自然量处理
      console.log("other");
    }
    let go_data = {
      media_source: m_source,
      account_id: account_id,
      campaign_id: campaign_id,
      adset_id: adset_id,
      ad_id: ad_id,
      video_id: video_id,
      img_id: img_id,
      app_id: _config.wx_app_id,
      device_id: wx.getStorageSync("rywx_openid"),
      ip: ip,
      platform: platform,
      event_name: "we_install",
      event_time: Date.now()
    };
    console.log("_reportLauchEvent-发送的数据:", go_data);
    wx.request({
      url: _getInstallUrl() + "/v1/minigame/lauch",
      method: "POST",
      data: go_data,
      success() {
        // 已经上报过安装了
        wx.setStorageSync("merge_isLauch", "true");
        console.log("_reportLauchEvent succ");
      },
      fail() {
        console.log("_reportLauchEvent fail");
      }
    });
  }
}

/**上报Loggedin事件 */
function _reportLoggedinEvent(servername, serverid, rolename, roleid) {
  let sysInfo = wx.getSystemInfoSync();
  let platform = !!sysInfo.platform ? sysInfo.platform : "";
  let data = {
    app_id: _config.wx_app_id,
    device_id: wx.getStorageSync("rywx_openid"),
    servername: servername,
    serverid: serverid,
    rolename: rolename,
    roleid: roleid,
    ip: "", //尝试获取ip
    platform: platform,
    event_name: "we_login",
    event_time: Date.now(),
    ev_json: { 'status': 'OK' //（后续补充字段使用），如果没有：
    } };
  console.log("_reportLoggedinEvent-发送的数据:", data);
  wx.request({
    url: _getEventUrl() + "/v1/minigame/event",
    method: "POST",
    data: data,
    success() {
      console.log("_reportLoggedinEvent succ");
    },
    fail() {
      console.log("_reportLoggedinEvent fail");
    }
  });
}

/**上报Payment事件 */
function _reportPaymentEvent(servername, serverid, rolename, roleid, order_id, amount) {
  let sysInfo = wx.getSystemInfoSync();
  let platform = !!sysInfo.platform ? sysInfo.platform : "";
  let data = {
    app_id: _config.wx_app_id,
    device_id: wx.getStorageSync("rywx_openid"),
    servername: servername,
    serverid: serverid,
    rolename: rolename,
    roleid: roleid,
    order_id: order_id,
    amount: amount,
    ip: "", //尝试获取ip
    platform: platform,
    event_name: "we_payment",
    event_time: Date.now(),
    ev_json: { 'status': 'OK' //（后续补充字段使用），如果没有：
    } };
  console.log("_reportPaymentEvent-发送的数据:", data);
  wx.request({
    url: _getEventUrl() + "/v1/minigame/event",
    method: "POST",
    data: data,
    success() {
      console.log("_reportPaymentEvent succ");
    },
    fail() {
      console.log("_reportPaymentEvent fail");
    }
  });
}

/**上报Register事件 */
function _reportRegisterEvent(servername, serverid, rolename, roleid) {
  let sysInfo = wx.getSystemInfoSync();
  let platform = !!sysInfo.platform ? sysInfo.platform : "";
  let data = {
    app_id: _config.wx_app_id,
    device_id: wx.getStorageSync("rywx_openid"),
    servername: servername,
    serverid: serverid,
    rolename: rolename,
    roleid: roleid,
    ip: "", //尝试获取ip
    platform: platform,
    event_name: "we_register",
    event_time: Date.now(),
    ev_json: { 'status': 'OK' //（后续补充字段使用），如果没有：
    } };
  console.log("_reportRegisterEvent-发送的数据:", data);
  wx.request({
    url: _getEventUrl() + "/v1/minigame/event",
    method: "POST",
    data: data,
    success() {
      console.log("_reportRegisterEvent succ");
    },
    fail() {
      console.log("_reportRegisterEvent fail");
    }
  });
}

// 初始化
_init();

// 导出
module.exports = {
  wx: wx,
  rangers: $$Rangers,
  oreyun: $$Oreyun,
  getWxUserInfo: _getWxUserInfo,
  dotEvent: _dotEvent,
  configRangers: _configRangers,
  getVar: _getVar,
  openCustomerServiceConversation: _openCustomerServiceConversation,
  requestSubscribeMessage: _requestSubscribeMessage,
  payForCustomerServiceConversation: _payForCustomerServiceConversation,
  wxLogin: _wxLogin,
  wxAuthorize: _wxAuthorize,
  checkWxSession: _checkWxSession,
  requestMidasPayment: _requestMidasPayment,
  loginToServer: _loginToServerApi,
  requestMidasPayOrder: _requestMidasPayOrder,
  requestMidasGetbalance: _requestMidasGetbalance,
  requestMsgSecCheck: _requestMsgSecCheck,
  showRewardedVedioAd: _showRewardedVedioAd,
  showInterstitialAd: _showInterstitialAd,
  exit: _exit,
  oreyunRegister: _oreyunRegister,
  oreyunLoggedin: _oreyunLoggedin,
  oreyunPayment: _oreyunPayment,
  oreyunEvent: _oreyunEvent,
  setClipboardData: _setClipboardData
};