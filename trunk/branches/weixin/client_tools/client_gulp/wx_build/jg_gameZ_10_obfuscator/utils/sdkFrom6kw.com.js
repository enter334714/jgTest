var J = wx.h$;
var config6kw = {
  sdkVersion: '1.0.8',
  url: 'https://usmini.6kw.com/',
  channel: 0,
  sdkChannelID: 34,
  subChannelID: "0",
  appID: "1283",

  urlParam: '',
  switch: 1
};
var sdk6kwFunction = sdk6kw();
var sdk6kw_user_game_info = {};

const request6kwFunction = param => {
  return new Promise((resolve, reject) => {
    console.log("-------------------------------------");
    console.log(param);
    console.log("-------------------------------------");
    console.log(config6kw.url + param.path);
    wx.request({
      url: config6kw.url + param.path,
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

function sdk6kw() {
  var callbacks = {};
  return {
    init: function (callback) {
      console.log("[SDK]调用init初始化接口");
      callbacks['init'] = typeof callback == 'function' ? callback : null;
      config6kw.urlParam = config6kw.appID + '/' + config6kw.sdkChannelID + '/' + config6kw.subChannelID;
      //开启分享
      wx.showShareMenu({
        withShareTicket: true
      });
      var self = this;
      //小游戏启动参数
      var sdk6kwLaunchOptions = wx.getStorageSync('sdk6kwLaunchOptions');
      var systemInfo = wx.getSystemInfoSync();
      if (!sdk6kwLaunchOptions) {
        if (wx.getEnterOptionsSync) {
          sdk6kwLaunchOptions = wx.getEnterOptionsSync();
        } else {
          sdk6kwLaunchOptions = wx.getLaunchOptionsSync();
        }
        wx.setStorageSync('sdk6kwLaunchOptions', sdk6kwLaunchOptions);
      }
      console.log("[SDK]调用init初始化接口 %o", sdk6kwLaunchOptions);
      //获取微信openId
      console.log(wx.getStorageSync('wxg6kw_openid'));
      if (!wx.getStorageSync('wxg6kw_openid')) {
        wx.login({
          success: function (res) {
            //先通过code获取到用户openId
            var getOpenIdParam = {
              path: 'openid/' + config6kw.urlParam,
              data: {
                code: res.code
              }
            };
            request6kwFunction(getOpenIdParam).then(res => {
              if (res.data.code == 1) {
                console.log('[SDK]服务端获取微信openId成功：' + JSON.stringify(res.data));
                //请求完缓存起来
                wx.setStorageSync('wxg6kw_openid', res.data.data.openid);
                // wx.setStorageSync('wxg6kw_session_key', res.data.data.session_key);
              } else {
                console.log('[SDK]服务端获取微信openId失败：' + JSON.stringify(res.data));
                callbacks['init'] && callbacks['init'](0, { errMsg: '初始化失败，获取微信openId失败' });
              }
            }).catch(res => {
              console.log('[SDK]服务端获取微信openId异常：' + JSON.stringify(res.data));
            });
          },
          fail: function (res) {
            console.log("微信登录失败，返回" + JSON.stringify(res));
            // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
            // if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
            //   // 处理用户拒绝授权的情况
            //   callbacks['init'] && callbacks['init'](0, { errMsg: res.errMsg });
            // }
            callbacks['init'] && callbacks['init'](0, { errMsg: res.errMsg });
            console.log('[SDK]获取微信用户授权失败');
          }
        });
      }
      /**记录打开 和隐藏后后台运行的日志 start*/
      wx.onShow(function (opt) {
        //分享后再次进来会调用这里 
        //记录打开小程序的时间
        wx.setStorageSync('wxg6kw_enter_time', 0);
        var entryTime = Date.parse(new Date()) / 1000;
        wx.setStorageSync('wxg6kw_enter_time', entryTime);
      });
      wx.onHide(function (opt) {
        //记录切换后台运行的时间
        wx.setStorageSync('wxg6kw_left_time', 0);
        wx.setStorageSync('wxg6kw_left_time', Date.parse(new Date()) / 1000);
        self.recordLog();
      });
      /**记录打开 和隐藏后后台运行的日志 end*/
      //获取小游戏配置
      var getWayInfo = {
        path: 'init/' + config6kw.urlParam,
        data: {
          sdkVersion: config6kw.sdkVersion,
          os: systemInfo.platform
        }
      };
      request6kwFunction(getWayInfo).then(res => {
        console.log('[SDK]获取游戏配置成功：' + JSON.stringify(res.data));
        config6kw.switch = res.data.data.switch;
        callbacks['init'] && callbacks['init'](1, { is_switch: res.data.data.switch });
      }).catch(res => {
        console.log('[SDK]获取游戏配置异常：' + res.data);
        callbacks['init'] && callbacks['init'](0, { errMsg: '初始化失败' });
      });
    },
    login: function (callback) {
      console.log("[SDK]调起登录");
      var self = this;
      var allInfo = self.getPublicData();
      var enterOptionsData = allInfo.sdk6kwLaunchOptions;
      var enterOPtionsDataBase64 = this.base64_encode(JSON.stringify(enterOptionsData));
      console.log("enterOptionsData is %o", enterOptionsData);
      console.log("enterOptionsData is %o", enterOPtionsDataBase64);

      callbacks['login'] = typeof callback == 'function' ? callback : null;
      wx.login({
        success: function (res) {

          var loginInfo = {
            path: 'login/' + config6kw.urlParam,
            data: {
              code: res.code,
              channel: allInfo.sdk6kwLaunchOptions.query.channel,
              scene: allInfo.sdk6kwLaunchOptions.scene,
              brand: allInfo.wxSystemInfo.brand,
              model: allInfo.wxSystemInfo.model,
              mobileVersion: allInfo.wxSystemInfo.system,
              isWifi: allInfo.wxSystemInfo.wifiEnabled,
              os: allInfo.wxSystemInfo.platform,
              sdkVersion: config6kw.sdkVersion,
              extension: enterOPtionsDataBase64,
              query: JSON.stringify(enterOptionsData.query)
            }
          };
          console.log(loginInfo);
          request6kwFunction(loginInfo).then(res => {
            if (res.data.code == 1) {
              console.log('[SDK]登录成功：' + JSON.stringify(res.data));
              wx.setStorageSync('wxg6kw_token', res.data.data.token);
              wx.setStorageSync('wxg6kw_userId', res.data.data.userId);
              wx.setStorageSync('wxg6kw_nickName', res.data.data.nickName);
              if (res.data.data.extension) {
                wx.setStorageSync('wxg6kw_userInfo_extension', res.data.data.extension);
              }
              callbacks['login'] && callbacks['login'](1, res.data.data);
            } else {
              console.log('[SDK]登录失败：' + JSON.stringify(res.data));
              callbacks['login'] && callbacks['login'](0, { errMsg: res.data.msg });
            }
          });
        },
        fail: function (res) {
          console.log("微信登录失败，返回" + JSON.stringify(res));
          // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
          // if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
          //   // 处理用户拒绝授权的情况
          // }
          callbacks['login'] && callbacks['login'](0, { errMsg: res.errMsg });
          console.log('[SDK]获取微信用户授权失败');
        }
      });
    },
    share: function (data, callback) {
      var self = this;
      var allInfo = self.getPublicData();
      console.log("[SDK]CP调用分享" + JSON.stringify(data));
      callbacks['share'] = typeof callback == 'function' ? callback : null;
      var shareInfo = {
        path: 'share/' + config6kw.urlParam,
        data: {
          userID: wx.getStorageSync('wxg6kw_userId'),
          token: wx.getStorageSync('wxg6kw_token'),
          openId: wx.getStorageSync('wxg6kw_openid'),
          channel: allInfo.sdk6kwLaunchOptions.query.channel,
          type: 'diybtn'
        }
      };
      Object.assign(shareInfo.data, sdk6kw_user_game_info);
      // console.log(shareInfo);
      request6kwFunction(shareInfo).then(res => {
        if (res.data.code == 1) {
          wx.shareAppMessage({
            title: data.title,
            imageUrl: data.imageUrl,
            query: res.data.data.query + '&' + data.query
          });
          callbacks['share'] && callbacks['share'](1, res.data.data);
        } else {
          callbacks['share'] && callbacks['share'](0, res.data.msg);
        }
      });
    },
    shareLog: function (callback) {
      console.log('[SDK]右上角主动分享上报');
      var self = this;
      var allInfo = self.getPublicData();
      var shareInfo = {
        path: 'share/' + config6kw.urlParam,
        data: {
          type: 'right',
          openId: wx.getStorageSync('wxg6kw_openid'),
          roleId: sdk6kw_user_game_info.roleID,
          roleName: sdk6kw_user_game_info.roleName,
          roleLevel: sdk6kw_user_game_info.roleLevel,
          serverId: sdk6kw_user_game_info.serverID,
          serverName: sdk6kw_user_game_info.serverName,
          channel: allInfo.sdk6kwLaunchOptions.query.channel,
          type: 'right'
        }
      };
      request6kwFunction(shareInfo).then(res => {
        callbacks['share'] && callbacks['share'](1, res.data.data);
      });
    },
    pay: function (data, callback) {
      var self = this;
      wx.checkSession({
        success: function () {
          self.startPay(data, callback);
        },
        fail: function () {
          console.log("[SDK]调起transaction时发现用户session过期需要重新登录");
          self.login(function (status) {
            status == 1 && self.startPay(data, callback);
          });
        }
      });
    },
    startPay: function (data, callback) {
      wx.showLoading({
        title: '正在支付'
      });
      console.log("[SDK]调起transaction，CP传值：" + JSON.stringify(data));
      var self = this;
      callbacks['pay'] = typeof callback == 'function' ? callback : null;
      var allInfo = this.getPublicData();
      console.log(allInfo.wxSystemInfo);
      if (wx.getStorageSync('wxg6kw_token') == "" || wx.getStorageSync('wxg6kw_token') == null) {
        wx.showToast({
          title: '登录信息失效，请退出重试'
        });
        return false;
      }
      var orderInfo = {
        path: 'pay/' + config6kw.urlParam,
        data: {
          os: allInfo.wxSystemInfo.platform,
          brand: allInfo.wxSystemInfo.brand,
          model: allInfo.wxSystemInfo.model,
          osVersion: allInfo.wxSystemInfo.system,
          token: wx.getStorageSync('wxg6kw_token'),
          userID: wx.getStorageSync('wxg6kw_userId'),
          sessionKey: wx.getStorageSync('wxg6kw_session_key'),
          sdkVersion: config6kw.sdkVersion,
          cpOrder: data.cpOrder,
          serverId: data.serverId,
          serverName: data.serverName,
          productId: data.productId,
          productName: data.productName,
          roleId: data.roleId,
          roleName: data.roleName,
          roleLevel: data.roleLevel,
          price: data.price, //单位分
          extension: data.extension,
          notifyUrl: data.notifyUrl
        }
      };
      request6kwFunction(orderInfo).then(res => {
        console.log("-----------------");
        console.log(res.data);
        wx.hideLoading({
          success: res => {}
        });
        if (res.data.code == 0) {
          console.log(orderInfo);
          if (res.data.msg == '令牌校验失败') {
            console.log('[SDK]令牌校验失败，重新登录');
            self.login(function (status) {
              status == 1 && self.startPay(data);
            });
            return false;
          }
          self.showTips(res.data.msg);
          callbacks['pay'] && callbacks['pay'](0, { errMsg: res.data.msg });
          return false;
        }
        var ret = {
          cpOrder: res.data.data.cpOrder,
          orderId: res.data.data.orderId,
          price: res.data.data.total,
          extension: res.data.data.extension,
          text: res.data.data.text
        };
        if (res.data.data.isSwitch == 1) {
          if (!res.data.data.wayInfo.sessionFrom) {
            self.showTips(res.data.msg);
            callbacks['pay'] && callbacks['pay'](0, { errMsg: '参数丢失' });
            return false;
          }

          self.showModel().then(ret => {
            wx.openCustomerServiceConversation({
              showMessageCard: true,
              sendMessageTitle: res.data.data.wayInfo.title,
              sendMessageImg: res.data.data.wayInfo.img,
              sessionFrom: JSON.stringify(res.data.data.wayInfo.sessionFrom), //字符串格式
              success: function () {
                console.log("[SDK]通知结果");
                console.log(ret);
                callbacks['pay'] && callbacks['pay'](1, ret);
              },
              fail: function (res) {
                console.log(res);
                // if (res.errMsg.indexOf('fail cancel') > -1) {
                //   callbacks['pay'] && callbacks['pay'](0, { errMsg: '取消客服会话' });
                //   return false;
                // }
                callbacks['pay'] && callbacks['pay'](0, { errMsg: '调起客服会话失败' });
              }
            });
          });
          return false;
        } else if (res.data.data.isSwitch == 2) {
          if (!res.data.data.miniprogram_id && !res.data.data.miniprogram_path) {
            self.showTips(res.data.msg);
            callbacks['pay'] && callbacks['pay'](0, { errMsg: '参数丢失' });
            return false;
          }

          console.log(res.data.data);
          wx.navigateToMiniProgram({
            appId: res.data.data.miniprogram_id,
            path: res.data.data.miniprogram_path + '?price=' + res.data.data.total + '&appId=' + config6kw.appID + '&orderId=' + res.data.data.orderId + '&service=' + config6kw.urlParam + '&appKey=' + config6kw.appKey,
            extraData: {
              count: res.data.data.total,
              orderId: res.data.data.orderId,
              cpOrder: res.data.data.cpOrder
            },
            envVersion: 'develop',
            success(res) {
              // 打开成功
              console.log("打开成功");
            },
            fail: res => {}
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
                var payData = self.gameGoPay(res.data.data);
                if (payData.code == 1) {
                  self.showTips('支付成功');
                  callbacks['pay'] && callbacks['pay'](1, payData.data);
                } else {
                  if (payData.msg.indexOf('取消') == -1) {
                    self.showTips('支付失败' + payData.msg);
                  }
                  callbacks['pay'] && callbacks['pay'](0, { errMsg: "支付失败:" + payData.msg });
                }
              }
            });
          } else {
            //充值米大师游戏币成功再进行扣费
            self.MidasPay(res.data.data).then(midasRes => {
              console.log('[SDK]调起米大师支付结果' + JSON.stringify(midasRes));
              if (midasRes.errMsg == 'requestMidasPayment:ok') {
                var payData = self.gameGoPay(res.data.data);
                if (payData.code == 1) {
                  self.showTips('支付成功');
                  callbacks['pay'] && callbacks['pay'](1, payData.data);
                } else {
                  if (payData.msg.indexOf('取消') == -1) {
                    self.showTips('支付失败' + payData.msg);
                  }
                  callbacks['pay'] && callbacks['pay'](0, { errMsg: "支付失败:" + payData.msg });
                }
              }
              return false;
            }).catch(error => {
              console.log("[SDK]调起米大师支付结果异常" + JSON.stringify(error));
              if (JSON.stringify(error) == "{}") {
                return;
              }
              if (payData.msg.indexOf('取消') == -1) {
                self.showTips('支付失败' + payData.msg);
              }
              callbacks['pay'] && callbacks['pay'](0, { errMsg: "支付失败:" + error.errMsg });
            });
          }
        }
      });
    },
    //调起米大师
    MidasPay: function (data) {
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
          },
          complete: function (res) {
            // console.log("[SDK]调起米大师支付" + JSON.stringify(res));
          }
        });
      });
    },
    //服务端扣费
    gameGoPay: function (data) {
      var self = this;
      var allInfo = this.getPublicData();
      var gotopay = {
        path: 'checkPay/' + config6kw.urlParam,
        data: {
          os: allInfo.wxSystemInfo.platform,
          token: wx.getStorageSync('wxg6kw_token'),
          userID: wx.getStorageSync('wxg6kw_userId'),
          sdkVersion: config6kw.sdkVersion,
          orderID: data.orderId
        }
      };
      console.log(gotopay);
      request6kwFunction(gotopay).then(res => {
        console.log("[SDK]米大师支付结果：" + JSON.stringify(res));
        if (res.data.msg == '用户session已失效,请重新登录') {
          self.login(function (status) {
            status == 1 && self.gameGoPay(data);
          });
          return false;
        }
        return res.data;
      });
    },
    logEnterGame: function (data) {
      var self = this;
      wx.checkSession({
        success: function () {
          self.postRole(data);
        },
        fail: function () {
          console.log("[SDK]调用角色信息接口session过期需要重新登录");
          self.login(function (status) {
            status == 1 && self.postRole(data);
          });
        }
      });
    },
    //角色信息   创角 角色升级 角色转区  角色改名 均可调用
    logRole: function (data) {
      var self = this;
      wx.checkSession({
        success: function () {
          self.postRole(data);
        },
        fail: function () {
          console.log("[SDK]调用角色信息接口session过期需要重新登录");
          self.login(function (status) {
            status == 1 && self.postRole(data);
          });
        }
      });
    },
    postRole: function (data) {
      console.log('[SDK]调用角色上传' + JSON.stringify(data));
      var self = this;
      var roleInfo = {
        token: wx.getStorageSync('wxg6kw_token'),
        userID: wx.getStorageSync('wxg6kw_userId'),
        roleID: data.roleId,
        roleName: data.roleName,
        roleLevel: data.roleLevel,
        serverID: data.serverId,
        serverName: data.serverName,
        payLevel: data.payLevel,
        roleCreateTime: data.createTime
      };
      sdk6kw_user_game_info = roleInfo;
      // console.log(sdk6kw_user_game_info);
      if (!roleInfo.token || !roleInfo.userID) {
        console.log('用户信息过期导致用户调起角色信息接口失败');
        self.login(function (status) {
          status == 1 && self.postRole(data);
        });
      }
      var roledata = {
        path: 'role/' + config6kw.urlParam,
        data: roleInfo
      };
      request6kwFunction(roledata).then(res => {
        console.log(res);
      });
    },
    //记录访问日志  
    recordLog: function () {
      console.log('[SDK]访问日志上报');
      var self = this;
      var allInfo = self.getPublicData();
      //将onluanch获取到的打开小程序数据发送到服务器
      var visitParam = {
        path: 'visit/' + config6kw.urlParam,
        data: {
          openId: wx.getStorageSync('wxg6kw_openid'),
          enterTime: wx.getStorageSync('wxg6kw_enter_time'),
          leftTime: wx.getStorageSync('wxg6kw_left_time'),
          channel: allInfo.sdk6kwLaunchOptions.query.channel,
          model: allInfo.wxSystemInfo.model,
          platform: allInfo.wxSystemInfo.platform,
          brand: allInfo.wxSystemInfo.brand,
          system: allInfo.wxSystemInfo.system,
          scene: allInfo.sdk6kwLaunchOptions.scene,
          id: allInfo.sdk6kwLaunchOptions.query.id,
          shareTime: allInfo.sdk6kwLaunchOptions.query.shareTime,
          shareId: allInfo.sdk6kwLaunchOptions.query.shareId
        }
      };
      request6kwFunction(visitParam).then(res => {
        if (res.data.code == 1) {
          console.log('[SDK]访问记录上报成功' + JSON.stringify(res.data));
        } else {
          console.log('[SDK]访问记录上报失败：' + JSON.stringify(res.data));
        }
      }).catch(res => {
        console.log('[SDK]访问记录上报失败' + JSON.stringify(res));
      });
    },
    getPublicData: function () {
      var wxSystemInfo = wx.getSystemInfoSync();
      var sdk6kwLaunchOptions = wx.getStorageSync('sdk6kwLaunchOptions');
      if (!sdk6kwLaunchOptions) {
        if (wx.getEnterOptionsSync) {
          sdk6kwLaunchOptions = wx.getEnterOptionsSync();
        } else {
          sdk6kwLaunchOptions = wx.getLaunchOptionsSync();
        }
        wx.setStorageSync('sdk6kwLaunchOptions', sdk6kwLaunchOptions);
      }
      return {
        wxSystemInfo: wxSystemInfo,
        sdk6kwLaunchOptions: sdk6kwLaunchOptions,
        config6kw: config6kw
      };
    },
    showModel: function () {
      return new Promise((resolve, reject) => {
        wx.showModal({
          title: "温馨提示",
          content: "请进入【客服会话】窗口点击右下角卡片获取支付链接",
          showCancel: true,
          confirmText: "前往充值",
          success: function (res) {
            if (res.confirm === true) {
              resolve();
            } else if (res.cancel === true) {
              reject();
            }
          },
          fail: function () {
            reject();
          }
        });
      });
    },
    showTips: function (tips) {
      wx.showModal({
        title: "温馨提示",
        content: tips,
        showCancel: false,
        success: function (res) {},
        fail: function () {}
      });
    },
    getPayState: function (data, callback) {
      var allInfo = this.getPublicData();
      var payState = {
        path: 'payState/' + config6kw.urlParam,
        data: {
          sdkVersion: config6kw.sdkVersion,
          token: wx.getStorageSync('wxg6kw_token'),
          userID: wx.getStorageSync('wxg6kw_userId'),
          roleID: sdk6kw_user_game_info.roleId,
          roleName: sdk6kw_user_game_info.roleName,
          roleLevel: sdk6kw_user_game_info.roleLevel,
          os: allInfo.wxSystemInfo.platform,
          cpData: data
        }
      };
      request6kwFunction(payState).then(res => {
        callback(1, res.data.data);
        return false;
      }).catch(error => {
        callback(0, error);
        return false;
      });
    },
    msgSecCheck: function (options) {
      var content = options.content;
      var scene = options.scene ? options.scene : "0";
      var callback = options.callback;
      var checkMsgContent = {
        path: 'frontCheckContent/' + config6kw.urlParam,
        data: {
          scene: scene,
          type: "msg",
          content: content,
          openid: wx.getStorageSync('wxg6kw_openid'),
          userID: wx.getStorageSync('wxg6kw_userId'),
          token: wx.getStorageSync('wxg6kw_token')
        }
      };
      request6kwFunction(checkMsgContent).then(res => {
        callback(1, res.data);
        return false;
      }).catch(error => {
        callback(0, error);
        return false;
      });
    },
    payDebug: function () {
      wx.navigateToMiniProgram({
        appId: 'wxb4cda18c9d8daea6',
        path: 'pages/charge/charge?price=600&productId=10010',
        extraData: {
          count: '600',
          productId: 100230
        },
        envVersion: 'develop',
        success(res) {
          // 打开成功
          console.log("打开成功");
        }
      });
    },
    openCustomerWithClientChange() {
      var self = this;
      var allInfo = self.getPublicData();
      var clientChangeInfo = {
        path: 'kf/' + config6kw.urlParam,
        data: {
          type: "clientChange",
          userID: wx.getStorageSync('wxg6kw_userId'),
          token: wx.getStorageSync('wxg6kw_token'),
          openId: wx.getStorageSync('wxg6kw_openid'),
          channel: allInfo.sdk6kwLaunchOptions.query.channel
        }
      };
      request6kwFunction(clientChangeInfo).then(res => {
        console.log("response Object %o", res);
        if (res.data.code == 1) {
          wx.openCustomerServiceConversation({
            showMessageCard: true,
            sendMessageTitle: res.data.data.title,
            sendMessageImg: res.data.data.img,
            sessionFrom: JSON.stringify(res.data.data.sessionFrom), //字符串格式
            success: function () {
              console.log("[SDK]通知结果");
              console.log(ret);
            },
            fail: function (res) {
              console.log(res);
            }
          });
        } else {
          console.log('[SDK]登录失败：' + JSON.stringify(res.data));
          callbacks['init'] && callbacks['init'](0, { errMsg: res.data.msg });
          callbacks['login'] && callbacks['login'](0, { errMsg: res.data.msg });
        }
      });
    },
    base64_encode(str) {
      // 编码，配合encodeURIComponent使用
      var c1, c2, c3;
      var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var i = 0,
          len = str.length,
          strin = '';
      while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
          strin += base64EncodeChars.charAt(c1 >> 2);
          strin += base64EncodeChars.charAt((c1 & 0x3) << 4);
          strin += "==";
          break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
          strin += base64EncodeChars.charAt(c1 >> 2);
          strin += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
          strin += base64EncodeChars.charAt((c2 & 0xF) << 2);
          strin += "=";
          break;
        }
        c3 = str.charCodeAt(i++);
        strin += base64EncodeChars.charAt(c1 >> 2);
        strin += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
        strin += base64EncodeChars.charAt((c2 & 0xF) << 2 | (c3 & 0xC0) >> 6);
        strin += base64EncodeChars.charAt(c3 & 0x3F);
      }
      return strin;
    }
  };
}
function sdk6kwRun(method, data, callback) {
  method in sdk6kwFunction && sdk6kwFunction[method](data, callback);
}
exports.init = function (callback) {
  sdk6kwRun('init', callback);
};
exports.login = function (callback) {
  sdk6kwRun('login', callback);
};
exports.pay = function (data, callback) {
  sdk6kwRun('pay', data, callback);
};
exports.debugPay = function () {
  sdk6kwRun('payDebug');
};
exports.logRole = function (createTime, serverId, serverName, roleId, roleName, roleLevel, payLevel) {
  var data = {
    createTime: createTime,
    serverId: serverId,
    serverName: serverName,
    roleId: roleId,
    roleName: roleName,
    roleLevel: roleLevel,
    payLevel: payLevel
  };
  sdk6kwRun('logRole', data);
};
exports.logEnterGame = function (createTime, serverId, serverName, roleId, roleName, roleLevel, payLevel) {
  var data = {
    createTime: createTime,
    serverId: serverId,
    serverName: serverName,
    roleId: roleId,
    roleName: roleName,
    roleLevel: roleLevel,
    payLevel: payLevel
  };
  sdk6kwRun('logEnterGame', data);
};
exports.share = function (data, callback) {
  sdk6kwRun('share', data, callback);
};
exports.shareLog = function (callback) {
  sdk6kwRun('shareLog', callback);
};
exports.getPayState = function (data, callback) {
  sdk6kwRun('getPayState', data, callback);
};
exports.msgSecCheck = function (options) {
  sdk6kwRun('msgSecCheck', options);
};
exports.openCustomerWithClientChange = function () {
  sdk6kwRun('openCustomerWithClientChange');
};