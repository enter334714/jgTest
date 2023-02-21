var P = wx.$y;
//配置
var config_form_onefive = {
  sdkVersion: '1.0.0',
  url: 'https://minigame.15yx.com/',
  channel: 0,
  appID: 1000134,
  urlParam: '',
  switch: 1,
  platform: 3,
  shareInfo: {}
};
//请求
const requestFunction = param => {
  console.log(config_form_onefive.url + param.path);
  return new Promise((resolve, reject) => {
    wx.request({
      url: config_form_onefive.url + param.path,
      data: JSON.stringify(param.data),
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        resolve(res);
      },
      fail: function (res) {
        console.log('[SDK]' + param.path + '发起请求失败');
        reject(res);
      }
    });
  });
};
var callbacks_from_onefive = {};
//SDK类
class ONEFIVE {
  constructor() {
    config_form_onefive.urlParam = config_form_onefive.appID;
  }
  init(initData, callback) {
    var self = this;
    var num = 0;
    console.log("[SDK]调用init初始化接口");
    var allInfo = self.getLaunchOptionsAndSystem();
    console.log(allInfo);
    if (!wx.getStorageSync('minigame_allInfo')) {
      wx.setStorageSync('minigame_allInfo', JSON.stringify(allInfo));
    }
    config_form_onefive.allInfoCache = JSON.parse(wx.getStorageSync('minigame_allInfo'));
    callbacks_from_onefive['init'] = typeof callback == 'function' ? callback : null;
    self.getShareConfig();
    //开启分享
    wx.showShareMenu({
      withShareTicket: true
    });
    if (!wx.getStorageSync('minigame_sdk_thd')) {
      wx.login({
        success: function (res) {
          var getOpenIdParam = {
            path: 'channel/login/openid/' + config_form_onefive.urlParam,
            data: {
              code: res.code,
              allInfoCache: config_form_onefive.allInfoCache,
              allInfo: allInfo,
              enterInfo: wx.getEnterOptionsSync(),
              platform: config_form_onefive.platform
            }
          };
          requestFunction(getOpenIdParam).then(res => {
            if (res.data.code == 1) {
              console.info('[SDK]服务端获取微信信息成功：' + JSON.stringify(res.data));
              wx.setStorageSync('minigame_sdk_thd', res.data.data.thd);
              wx.setStorageSync('minigame_sdk_thdu', res.data.data.thdu);
            } else {
              console.error('[SDK]服务端获取微信信息失败：' + JSON.stringify(res.data));
              callbacks_from_onefive['init'] && callbacks_from_onefive['init'](0, { msg: '初始化失败，获取微信信息失败' });
            }
          }).catch(res => {
            console.error('[SDK]服务端获取微信信息异常：' + JSON.stringify(res.data));
          });
        },
        fail: function (res) {
          console.error("微信登录失败，返回" + JSON.stringify(res));
          // iOS 和 Android 对于拒绝授权的回调 msg 没有统一，需要做一下兼容处理
          if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
            callbacks_from_onefive['init'] && callbacks_from_onefive['init'](0, { msg: res.msg });
          }
          console.error('[SDK]获取微信用户授权失败');
        }
      });
    }
    var entryTime = Date.parse(new Date()) / 1000;
    wx.setStorageSync('minigame_enter_time', entryTime);
    /**记录打开 和隐藏后后台运行的日志 start*/
    wx.onShow(function (opt) {
      //分享后再次进来会调用这里 
      //记录打开小程序的时间
      var entryTime = Date.parse(new Date()) / 1000;
      wx.setStorageSync('minigame_enter_time', entryTime);
    });
    wx.onHide(function (opt) {
      //记录切换后台运行的时间
      wx.setStorageSync('minigame_left_time', 0);
      wx.setStorageSync('minigame_left_time', Date.parse(new Date()) / 1000);
      self.recordLog();
    });
    /**记录打开 和隐藏后后台运行的日志 end*/
    // self.listenAppShare(initData.query);
    callbacks_from_onefive['init'] && callbacks_from_onefive['init'](1, { ad_flag: allInfo.LaunchOptions.query.channel > 10000 ? 1 : 0 });
  }
  login(callback) {
    console.log("[SDK]调起登录");
    var self = this;
    callbacks_from_onefive['login'] = typeof callback == 'function' ? callback : null;
    wx.login({
      success: function (res) {
        var allInfo = self.getLaunchOptionsAndSystem();
        var loginInfo = {
          path: 'channel/login/' + config_form_onefive.urlParam,
          data: {
            code: res.code,
            channel: allInfo.LaunchOptions.query.channel ? allInfo.LaunchOptions.query.channel : config_form_onefive.channel,
            scene: allInfo.LaunchOptions.scene,
            brand: allInfo.wxSystemInfo.brand,
            model: allInfo.wxSystemInfo.model,
            osVersion: allInfo.wxSystemInfo.system,
            isWifi: allInfo.wxSystemInfo.wifiEnabled,
            os: allInfo.wxSystemInfo.platform,
            sdkVersion: config_form_onefive.sdkVersion,
            allInfoCache: config_form_onefive.allInfoCache,
            allInfo: allInfo,
            enterInfo: wx.getEnterOptionsSync(),
            platform: config_form_onefive.platform,
            test: 1
          }
        };
        requestFunction(loginInfo).then(res => {
          if (res.data.code == 1) {
            console.info('[SDK]登录成功：' + JSON.stringify(res.data));
            wx.setStorageSync('minigame_sdk_token', res.data.data.sid);
            wx.setStorageSync('minigame_sdk_userId', res.data.data.sdkUserID);
            wx.setStorageSync('minigame_sdk_account', res.data.data.sdkUserName);
            wx.setStorageSync('minigame_sdk_thd', res.data.data.thd);
            wx.setStorageSync('minigame_sdk_thdu', res.data.data.thdu);
            wx.setStorageSync('minigame_token', res.data.data.token);
            wx.setStorageSync('minigame_userId', res.data.data.userID);
            res.data.data.extension && wx.setStorageSync('minigame_userInfo_extension', res.data.data.extension);
            callbacks_from_onefive['login'] && callbacks_from_onefive['login'](1, {
              userId: res.data.data.userID,
              token: res.data.data.token
            });
          } else {
            console.error('[SDK]登录失败：' + JSON.stringify(res.data));
            callbacks_from_onefive['login'] && callbacks_from_onefive['login'](0, { msg: res.data.msg });
          }
        });
      },
      fail: function (res) {
        console.log("微信登录失败，返回" + JSON.stringify(res));
        // iOS 和 Android 对于拒绝授权的回调 msg 没有统一，需要做一下兼容处理
        if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
          callbacks_from_onefive['login'] && callbacks_from_onefive['login'](0, { msg: res.errMsg });
        }
        console.error('[SDK]获取微信用户授权失败');
      }
    });
  }
  roleLog(roleInfo) {
    console.info("[SDK]调用角色信息接口");
    var self = this;
    wx.checkSession({
      success: function () {
        self.postRole(roleInfo);
      },
      fail: function () {
        console.info("[SDK]调用角色信息接口session过期需要重新登录");
        self.login(function (status) {
          status == 1 && self.postRole(roleInfo);
        });
      }
    });
  }

  postRole(data) {
    console.log('[SDK]调用角色上传' + JSON.stringify(data));
    var self = this;
    var allInfo = self.getLaunchOptionsAndSystem();
    var roleInfo = {
      token: wx.getStorageSync('minigame_token'),
      sid: wx.getStorageSync('minigame_sdk_token'),
      userID: wx.getStorageSync('minigame_userId'),
      uid: wx.getStorageSync('minigame_sdk_userId'),
      userAcount: wx.getStorageSync('minigame_sdk_account'),
      thd: wx.getStorageSync('minigame_sdk_thd'),
      thdu: wx.getStorageSync('minigame_sdk_thdu'),
      roleID: data.roleId,
      roleName: data.roleName,
      roleLevel: data.roleLevel,
      dataType: data.dataType,
      serverID: data.serverId,
      serverName: data.serverName,
      payLevel: data.payLevel,
      roleCreateTime: data.createTime,
      brand: allInfo.wxSystemInfo.brand,
      model: allInfo.wxSystemInfo.model,
      osVersion: allInfo.wxSystemInfo.system,
      isWifi: allInfo.wxSystemInfo.wifiEnabled,
      os: allInfo.wxSystemInfo.platform,
      sdkVersion: config_form_onefive.sdkVersion,
      platform: config_form_onefive.platform
    };
    self.sdk_user_game_info = roleInfo;
    if (!roleInfo.token || !roleInfo.userID) {
      console.error('用户信息过期导致用户调起角色信息接口失败');
      self.login(function (status) {
        status == 1 && self.postRole(data);
      });
    }
    var roledata = {
      path: 'channel/role/' + config_form_onefive.urlParam,
      data: roleInfo
    };

    requestFunction(roledata).then(res => {
      console.log(res);
    });
  }

  userShare(data, callback) {
    var self = this;
    var allInfo = self.getLaunchOptionsAndSystem();
    console.log("[SDK]CP调用分享" + JSON.stringify(data));
    callbacks_from_onefive['share'] = typeof callback == 'function' ? callback : null;
    var shareInfo = {
      path: 'channel/util/share/' + config_form_onefive.urlParam,
      data: {
        userID: wx.getStorageSync('minigame_userId'),
        uid: wx.getStorageSync('minigame_sdk_userId'),
        token: wx.getStorageSync('minigame_token'),
        sid: wx.getStorageSync('minigame_sdk_token'),
        thd: wx.getStorageSync('minigame_sdk_thd'),
        thdu: wx.getStorageSync('minigame_sdk_thdu'),
        channel: allInfo.LaunchOptions.query.channel,
        type: 'diybtn',
        brand: allInfo.wxSystemInfo.brand,
        model: allInfo.wxSystemInfo.model,
        osVersion: allInfo.wxSystemInfo.system,
        isWifi: allInfo.wxSystemInfo.wifiEnabled,
        os: allInfo.wxSystemInfo.platform,
        version: allInfo.wxSystemInfo.version,
        sdkVersion: config_form_onefive.sdkVersion,
        allInfoCache: config_form_onefive.allInfoCache,
        allInfo: allInfo,
        enterInfo: wx.getEnterOptionsSync(),
        platform: config_form_onefive.platform
      }
    };
    Object.assign(shareInfo.data, self.sdk_user_game_info);
    requestFunction(shareInfo).then(res => {
      if (res.data.code == 1) {
        callbacks_from_onefive['share'] && callbacks_from_onefive['share'](1, {
          title: res.data.data.title,
          imageUrl: res.data.data.imageUrl,
          imageUrlId: res.data.data.imageUrlId,
          query: res.data.data.query
        });
      } else {
        callbacks_from_onefive['share'] && callbacks_from_onefive['share'](0, { msg: res.data.msg });
      }
    });
  }

  appShare(callback) {
    console.log('[SDK]右上角主动分享上报');
    var self = this;
    var allInfo = self.getLaunchOptionsAndSystem();
    callbacks_from_onefive['appShare'] = typeof callback == 'function' ? callback : null;
    var shareInfo = {
      path: 'channel/util/share/' + config_form_onefive.urlParam,
      data: {
        type: 'right',
        thd: wx.getStorageSync('minigame_sdk_thd'),
        thdu: wx.getStorageSync('minigame_sdk_thdu'),
        channel: allInfo.LaunchOptions.query.channel,
        brand: allInfo.wxSystemInfo.brand,
        model: allInfo.wxSystemInfo.model,
        osVersion: allInfo.wxSystemInfo.system,
        isWifi: allInfo.wxSystemInfo.wifiEnabled,
        os: allInfo.wxSystemInfo.platform,
        version: allInfo.wxSystemInfo.version,
        sdkVersion: config_form_onefive.sdkVersion,
        allInfoCache: config_form_onefive.allInfoCache,
        allInfo: allInfo,
        enterInfo: wx.getEnterOptionsSync(),
        platform: config_form_onefive.platform
      }
    };
    if (self.sdk_user_game_info != undefined) {
      shareInfo.data.roleId = self.sdk_user_game_info.roleID;
      shareInfo.data.roleName = self.sdk_user_game_info.roleName;
      shareInfo.data.roleLevel = self.sdk_user_game_info.roleLevel;
      shareInfo.data.serverID = self.sdk_user_game_info.serverID;
      shareInfo.data.serverName = self.sdk_user_game_info.serverName;
    }
    requestFunction(shareInfo).then(res => {
      callbacks_from_onefive['appShare'] && callbacks_from_onefive['appShare'](1, res.data.data);
    });
  }

  pay(payInfo, callback) {
    console.info('[SDK]调用支付下单:' + JSON.stringify(payInfo));
    var self = this;
    wx.checkSession({
      success: function () {
        self.startPay(payInfo, callback);
      },
      fail: function () {
        console.log("[SDK]支付下单发现用户session过期需要重新登录");
        self.login(function (status) {
          status == 1 && self.startPay(payInfo, callback);
        });
      }
    });
  }

  startPay(orderInfos, callback) {
    var self = this;
    callbacks_from_onefive['pay'] = typeof callback == 'function' ? callback : null;
    var allInfo = this.getLaunchOptionsAndSystem();
    var orderInfo = {
      path: 'channel/pay/' + config_form_onefive.urlParam,
      data: {
        isWifi: allInfo.wxSystemInfo.wifiEnabled,
        os: allInfo.wxSystemInfo.platform,
        channel: allInfo.LaunchOptions.query.channel ? allInfo.LaunchOptions.query.channel : config_form_onefive.channel,
        brand: allInfo.wxSystemInfo.brand,
        model: allInfo.wxSystemInfo.model,
        osVersion: allInfo.wxSystemInfo.system,
        token: wx.getStorageSync('minigame_token'),
        sid: wx.getStorageSync('minigame_sdk_token'),
        userID: wx.getStorageSync('minigame_userId'),
        uid: wx.getStorageSync('minigame_sdk_userId'),
        userAcount: wx.getStorageSync('minigame_sdk_account'),
        thd: wx.getStorageSync('minigame_sdk_thd'),
        thdu: wx.getStorageSync('minigame_sdk_thdu'),
        sdkVersion: config_form_onefive.sdkVersion,
        cpOrder: orderInfos.cpOrder,
        serverId: orderInfos.serverId,
        serverName: orderInfos.serverName,
        productId: orderInfos.productId,
        productName: orderInfos.productName,
        roleId: orderInfos.roleId,
        roleName: orderInfos.roleName,
        roleLevel: orderInfos.roleLevel,
        price: orderInfos.price,
        extension: orderInfos.extension,
        notifyUrl: orderInfos.notifyUrl,
        allInfoCache: config_form_onefive.allInfoCache,
        allInfo: allInfo,
        enterInfo: wx.getEnterOptionsSync(),
        platform: config_form_onefive.platform
      }
    };
    //下单
    requestFunction(orderInfo).then(res => {
      console.log(res.data);
      //下单失败情况处理非令牌问题则直接提示，否则重新调起支付
      if (res.data.code == 0) {
        if (res.data.msg == '令牌校验失败') {
          console.log('[SDK]令牌校验失败，重新登录');
          self.login(function (status) {
            //登录成功后将下单CP传的值原样传输
            status == 1 && self.startPay(orderInfos);
          });
          return false;
        }
        self.showTips(res.data.msg);
        callbacks_from_onefive['pay'] && callbacks_from_onefive['pay'](0, { msg: res.data.msg });
        return false;
      } else {
        //下单成功
        var ret = {
          cpOrder: res.data.data.cpOrder,
          orderId: res.data.data.orderID,
          subOrderId: res.data.data.subOrderId,
          price: res.data.data.price,
          extension: res.data.data.extension,
          text: res.data.data.text
        };
        if (res.data.data.isSwitch == 1) {
          if (!res.data.data.sessionFrom) {
            self.showTips(res.data.msg);
            callbacks_from_onefive['pay'] && callbacks_from_onefive['pay'](0, { msg: '参数丢失' });
            return false;
          }
          self.showModel().then(rets => {
            wx.openCustomerServiceConversation({
              showMessageCard: true,
              sendMessageTitle: res.data.data.title,
              sendMessageImg: res.data.data.img,
              sessionFrom: JSON.stringify(res.data.data.sessionFrom), //字符串格式
              success: function () {
                console.log("[SDK]通知结果");
                callbacks_from_onefive['pay'] && callbacks_from_onefive['pay'](1, ret);
              },
              fail: function (res) {
                console.log(res);
                if (res.errMsg.indexOf('fail cancel') > -1) {
                  callbacks_from_onefive['pay'] && callbacks_from_onefive['pay'](0, { msg: '取消客服会话' });
                  return false;
                }
                callbacks_from_onefive['pay'] && callbacks_from_onefive['pay'](0, { msg: '调起客服会话失败' });
              }
            });
          });
          return false;
        } else {
          if (res.data.data.buyQuantity <= res.data.data.balance && res.data.data.buyQuantity != 0 && res.data.data.balance != 0) {
            console.log("[SDK]余额充足，游戏币直接扣除");
            wx.showModal({
              title: "支付提示",
              content: "您还有" + res.data.data.balance + "个游戏币未消费，本次支付将扣除" + res.data.data.buyQuantity + '游戏币',
              showCancel: false,
              confirmText: "我知道了",
              success: function () {
                //直接扣费
                self.gameGoPay(res.data.data, function (payData) {
                  console.log('[SDK]余额服务端扣费' + JSON.stringify(payData));
                  self.payCallBak(payData);
                });
              }
            });
          } else {
            console.log(res.data.data);
            //充值米大师游戏币成功再进行扣费
            self.MidasPay(res.data.data).then(midasRes => {
              console.log('[SDK]调起米大师支付结果' + JSON.stringify(midasRes));
              if (midasRes.errMsg == 'requestMidasPayment:ok') {
                self.gameGoPay(res.data.data, function (payData) {
                  console.log('[SDK]充值后服务端扣费' + JSON.stringify(payData));
                  self.payCallBak(payData);
                });
              }
              return false;
            }).catch(error => {
              console.log("[SDK]调起米大师支付结果异常" + JSON.stringify(error));
              if (error.errMsg !== undefined) {
                if (error.errMsg.indexOf('用户取消') !== -1) {
                  self.showTips('已取消购买');
                  callbacks_from_onefive['pay'] && callbacks_from_onefive['pay'](0, { msg: "用户取消支付" });
                  return false;
                }
              }
              self.showTips('支付失败' + error.errMsg);
              callbacks_from_onefive['pay'] && callbacks_from_onefive['pay'](0, { msg: "支付失败:" + error.errMsg });
            });
          }
        }
      }
    });
  }

  //调起米大师
  MidasPay(data) {
    return new Promise((resolve, reject) => {
      wx.requestMidasPayment({
        mode: 'game',
        env: data.env,
        offerId: data.offerId,
        currencyType: data.currencyType,
        platform: data.platform,
        buyQuantity: data.buyQuantity,
        zoneId: data.zoneId,
        success: function (res) {
          resolve(res);
        },
        fail: function (res) {
          reject(res);
        }
      });
    });
  }
  //服务端扣费
  gameGoPay(data, callback) {
    var self = this;
    var allInfo = self.getLaunchOptionsAndSystem();
    var gotopay = {
      path: 'channel/pay/checkPay/' + config_form_onefive.urlParam,
      data: {
        platform: config_form_onefive.platform,
        os: allInfo.wxSystemInfo.platform,
        uid: wx.getStorageSync('minigame_sdk_userId'),
        userAcount: wx.getStorageSync('minigame_sdk_account'),
        sdkVersion: config_form_onefive.sdkVersion,
        subOrderId: data.subOrderId,
        orderID: data.orderID
      }
    };
    requestFunction(gotopay).then(res => {
      console.log("[SDK]米大师支付结果：" + JSON.stringify(res));
      if (res.data.msg == '用户session已失效,请重新登录') {
        self.login(function (status) {
          status == 1 && self.gameGoPay(data, callback(res.data));
        });
        return false;
      }
      callback(res.data);
    });
  }
  payCallBak(payData) {
    var self = this;
    if (payData.code == 1) {
      self.showTips('支付成功');
      callbacks_from_onefive['pay'] && callbacks_from_onefive['pay'](1, payData.data);
    } else {
      self.showTips('支付失败' + payData.msg);
      callbacks_from_onefive['pay'] && callbacks_from_onefive['pay'](0, { errMsg: "支付失败:" + payData.msg });
    }
  }
  //获取冷启动参数 及 系统设备参数
  getLaunchOptionsAndSystem() {
    var systemInfo = wx.getSystemInfoSync();
    var launchOption = wx.getLaunchOptionsSync();
    return {
      wxSystemInfo: systemInfo,
      LaunchOptions: launchOption
    };
  }

  getPayState(data, callback) {
    var self = this;
    callbacks_from_onefive['payState'] = typeof callback == 'function' ? callback : null;
    var allInfo = this.getLaunchOptionsAndSystem();

    var payState = {
      path: 'channel/pay/payState/' + config_form_onefive.urlParam,
      data: {
        platform: config_form_onefive.platform,
        sdkVersion: config_form_onefive.sdkVersion,
        token: wx.getStorageSync('minigame_token'),
        sid: wx.getStorageSync('minigame_sdk_token'),
        userID: wx.getStorageSync('minigame_userId'),
        uid: wx.getStorageSync('minigame_sdk_userId'),
        userAcount: wx.getStorageSync('minigame_sdk_account'),
        thd: wx.getStorageSync('minigame_sdk_thd'),
        thdu: wx.getStorageSync('minigame_sdk_thdu'),
        os: allInfo.wxSystemInfo.platform,
        cpData: data,
        allInfoCache: config_form_onefive.allInfoCache,
        allInfo: allInfo,
        enterInfo: wx.getEnterOptionsSync()
      }
    };
    requestFunction(payState).then(res => {
      callbacks_from_onefive['payState'] && callbacks_from_onefive['payState'](1, res.data.data);
      return false;
    }).catch(error => {
      callbacks_from_onefive['payState'] && callbacks_from_onefive['payState'](0, error);
      return false;
    });
  }

  recordLog() {
    console.log('[SDK]访问日志上报');
    var self = this;
    var allInfo = self.getLaunchOptionsAndSystem();
    //将onluanch获取到的打开小程序数据发送到服务器
    var visitParam = {
      path: 'channel/util/visit/' + config_form_onefive.urlParam,
      data: {
        platform: config_form_onefive.platform,
        enterTime: wx.getStorageSync('minigame_enter_time'),
        leftTime: wx.getStorageSync('minigame_left_time'),
        channel: allInfo.LaunchOptions.query.channel,
        model: allInfo.wxSystemInfo.model,
        brand: allInfo.wxSystemInfo.brand,
        system: allInfo.wxSystemInfo.system,
        scene: allInfo.LaunchOptions.scene,
        thd: wx.getStorageSync('minigame_sdk_thd'),
        thdu: wx.getStorageSync('minigame_sdk_thdu'),
        shareOpenId: allInfo.LaunchOptions.query.onefiveOpenId,
        shareTime: allInfo.LaunchOptions.query.oneFiveShareTime,
        shareId: allInfo.LaunchOptions.query.oneFiveShareId,
        version: allInfo.wxSystemInfo.version,
        allInfoCache: config_form_onefive.allInfoCache,
        allInfo: allInfo,
        enterInfo: wx.getEnterOptionsSync()
      }
    };
    requestFunction(visitParam).then(res => {
      if (res.data.code == 1) {
        console.log('[SDK]访问记录上报成功' + JSON.stringify(res.data));
      } else {
        console.log('[SDK]访问记录上报失败：' + JSON.stringify(res.data));
      }
    }).catch(res => {
      console.log('[SDK]访问记录上报失败' + JSON.stringify(res));
    });
  }

  showModel() {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: "温馨提示",
        content: "请进入【客服会话】窗口点击右下角卡片获取支付链接",
        showCancel: true,
        confirmText: "前往充值",
        success: function (res) {
          console.log(res);
          if (res.confirm === true) {
            resolve(res);
          } else if (res.cancel === true) {
            reject(res);
          }
        },
        fail: function (error) {
          reject(error);
        }
      });
    });
  }

  showTips(tips) {
    wx.showModal({
      title: "温馨提示",
      content: tips,
      showCancel: false,
      success: function (res) {},
      fail: function () {}
    });
  }
  //获取分享配置
  getShareConfig() {
    var self = this;
    var allInfo = self.getLaunchOptionsAndSystem();
    var param = {
      path: 'channel/util/getShareConfig/' + config_form_onefive.urlParam,
      data: {
        allInfoCache: config_form_onefive.allInfoCache,
        allInfo: allInfo,
        enterInfo: wx.getEnterOptionsSync(),
        platform: config_form_onefive.platform
      }
    };
    requestFunction(param).then(res => {
      config_form_onefive.shareInfo = res.data.data;
    });
  }
  //监听主动分享
  onShareAppMessage(query) {
    var self = this;
    wx.onShareAppMessage(function () {
      var config = config_form_onefive.shareInfo;
      var title_index = Math.floor(Math.random() * config.title.length);
      var image_index = Math.floor(Math.random() * config.imageUrl.length);
      self.appShare();
      if (!query) {
        query = '';
      }
      return {
        title: config.title[title_index],
        imageUrl: config.imageUrl[image_index],
        query: 'onefiveOpenId=' + wx.getStorageSync('minigame_sdk_thd') + '&' + query
      };
    });
  }
}
export default ONEFIVE;