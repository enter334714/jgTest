var md5 = require('./js-md5.js');
class YishiSdk {
  constructor(params = {}) {
    let paramskeys = ['game_package_id', 'secret', 'ios_game_package_id', 'ios_secret'];
    // 验证初始化参数
    if (!params) {
      this.alert('初始化参数为空');
      return false;
    }
    if (!this.checkParams(params, paramskeys)) {
      this.alert('初始化参数错误');
      return false;
    }

    this.systemInfoSync = wx.getSystemInfoSync(); // 当前系统信息
    this.accountInfoSync = this.getAccountInfoSync(); // 当前帐号信息
    this.enterOptionSync = this.getEnterOptionsSync(); // 小游戏打开的参数（包括冷启动和热启动）

    this.initSystem(params);

    YishiSdk.domain = 'https://apix.3456wan.com'; // 默认请求域名
    YishiSdk.header = { 'content-type': 'application/json' }; // 默认请求header
    YishiSdk.traceDomain = 'https://t.3456wan.com'; // 数据追踪域名
  }

  // 初始化系统参数
  initSystem(params) {
    // 设置系统平台
    this.platform = this.getPlatform();

    // 根据系统平台配置母包参数
    if ('ios' == this.platform) {
      this.systemInfo = {
        'gamePackageId': params['ios_game_package_id'],
        'secret': params['ios_secret']
      };
    } else {
      this.systemInfo = {
        'gamePackageId': params['game_package_id'],
        'secret': params['secret']
      };
    }
    // 设置广告位
    let channelAdId = 0;
    if (this.enterOptionSync.query && this.enterOptionSync.query.channelAdId) {
      channelAdId = this.enterOptionSync.query.channelAdId;
    }
    this.systemInfo.channelAdId = channelAdId;

    // 设置版本号信息
    this.envVersion = this.accountInfoSync.miniProgram ? this.accountInfoSync.miniProgram.envVersion : '';
    this.version = this.accountInfoSync.miniProgram ? this.accountInfoSync.miniProgram.version : '';

    // 设置启动小游戏的场景值
    this.scene = this.enterOptionSync.scene ? this.enterOptionSync.scene : '';
  }

  // 获取当前帐号信息
  getAccountInfoSync() {
    if (wx.getAccountInfoSync) {
      return wx.getAccountInfoSync();
    } else {
      console.error("当前微信版本过低，无法使用该功能(当前帐号信息-版本号)");
      return {};
    }
  }

  // 获取小游戏打开的参数（包括冷启动和热启动）
  getEnterOptionsSync() {
    if (wx.getEnterOptionsSync) {
      YishiSdk.enterOptionSync = wx.getEnterOptionsSync(); // 包括冷启动和热启动
    } else {
      if (!YishiSdk.enterOptionSync) {
        YishiSdk.enterOptionSync = wx.getLaunchOptionsSync(); // 冷启动
      }
      wx.onShow(enterOptionSync => {
        YishiSdk.enterOptionSync = enterOptionSync; // 热启动
      });
    }
    return YishiSdk.enterOptionSync;
  }

  // 获取操作平台
  getPlatform() {
    return this.systemInfoSync.platform.toLowerCase();
  }

  /** 小游戏登录方法 **/
  login(object) {
    if (!this.systemInfo) {
      console.error("初始化错误");
      return false;
    }

    //防止短时间多次点击
    let now = this.getTimeStamp();
    let key = 'yishi-sdk:last_login_time';
    let lastLoginTime = wx.getStorageSync(key);
    if (now - lastLoginTime < 3) {
      console.log("登录中...");
      return false;
    }
    wx.setStorageSync(key, now);

    wx.login({
      success: res => {
        let code = res.code;
        if (code) this.apiLogin({ 'code': code, 'success': object.success });
      },
      fail: error => {
        console.error("登录失败");
      }
    });
  }

  /** 获取游戏适配参数 **/
  adaptParams(object) {
    let paramsKeys = ['role_level'];
    if (!this.checkParams(object, paramsKeys)) {
      this.alert('游戏适配参数错误');
      return false;
    }

    // 检查是否已登录联运
    let loginInfoKey = "yishi-sdk:login_info";
    let loginInfo = wx.getStorageSync(loginInfoKey);
    let token = loginInfo.token;
    if (!token) {
      this.alert('请先登录');
      return false;
    }
    object.envVersion = this.envVersion;
    object.version = this.version;
    object.token = token;
    this.apiAdaptParams(object);
  }

  /** 获取设备信息 **/
  getSystemInfoSync(object) {
    let res = {
      'brand': this.systemInfoSync.brand,
      'model': this.systemInfoSync.model,
      'platform': this.systemInfoSync.platform,
      'system': this.systemInfoSync.system,
      'version': this.systemInfoSync.version,
      'SDKVersion': this.systemInfoSync.SDKVersion,
      'screenWidth': this.systemInfoSync.screenWidth,
      'screenHeight': this.systemInfoSync.screenHeight,
      'windowWidth': this.systemInfoSync.windowWidth,
      'windowHeight': this.systemInfoSync.windowHeight,
      'deviceOrientation': this.systemInfoSync.deviceOrientation
    };
    if (object.success) object.success(res);
  }

  /** 小游戏支付 **/
  pay(object) {
    if (!this.systemInfo) {
      console.error("初始化错误");
      return false;
    }
    let paramsKeys = ['money', 'role_name', 'role_level', 'server_id', 'extra_info', 'extra_data'];
    if (!this.checkParams(object, paramsKeys)) {
      this.alert('支付参数错误');
      return false;
    }

    //防止短时间多次点击
    let now = this.getTimeStamp();
    let key = 'yishi-sdk:last_pay_time';
    let lastPayTime = wx.getStorageSync(key);
    if (now - lastPayTime < 3) {
      console.log("支付中...");
      return false;
    }
    wx.setStorageSync(key, now);

    // 检查是否已登录联运
    let loginInfoKey = "yishi-sdk:login_info";
    let loginInfo = wx.getStorageSync(loginInfoKey);
    let token = loginInfo.token;
    if (!token) {
      this.alert('请先登录');
      return false;
    }
    object.envVersion = this.envVersion;
    object.version = this.version;
    object.token = token;

    // 检查微信session
    wx.checkSession({
      success: res => {
        this.payHandle(object);
      },
      fail: err => {
        wx.login({
          success: res => {
            let code = res.code;
            if (code) {
              this.apiFlushSessionKey({
                'code': code,
                'token': loginInfo.token,
                success: res => {
                  if (1 != res.errno) {
                    console.error('刷新sessionKey失败', res);
                    return false;
                  }
                  this.payHandle(object);
                }
              });
            }
          },
          fail: error => {
            console.error("wx.login 获取code失败");
          }
        });
      }
    });
  }

  /** 上报角色信息方法 **/
  uploadRoleInfo(object) {
    let paramsKeys = ['role_id', 'role_name', 'role_level', 'server_id', 'server_name'];
    if (!this.checkParams(object, paramsKeys)) {
      this.alert('上报角色信息参数错误');
      return false;
    }

    // 检查是否已登录联运
    let loginInfoKey = "yishi-sdk:login_info";
    let loginInfo = wx.getStorageSync(loginInfoKey);
    let token = loginInfo.token;
    if (!token) {
      this.alert('请先登录');
      return false;
    }
    object.token = token;
    this.apiUploadRoleInfoParams(object);
  }

  /** 显示当前页面的分享按钮 **/
  showShareMenu(object) {
    let paramsKeys = ['withShareTicket', 'menus'];
    if (!this.checkParams(object, paramsKeys)) {
      this.alert('缺少必要参数：withShareTicket');
      return false;
    }
    wx.showShareMenu({
      withShareTicket: object.withShareTicket,
      menus: object.menus,
      success: res => {
        if ("function" == typeof object.success) object.success(res);
      },
      fail: err => {
        if ("function" == typeof object.fail) object.fail(err);
      }
    });
  }

  /** 隐藏当前页面的分享按钮 **/
  hideShareMenu(object) {
    wx.hideShareMenu({
      success: res => {
        if ("function" == typeof object.success) object.success(res);
      },
      fail: err => {
        if ("function" == typeof object.fail) object.fail(err);
      }
    });
  }

  /** 主动分享 **/
  shareAppMessage(object) {
    let paramsKeys = ['title', 'imageUrl'];
    if (!this.checkParams(object, paramsKeys)) {
      this.alert('缺少必要参数');
      return false;
    }
    wx.shareAppMessage({
      title: object.title,
      imageUrl: object.imageUrl, // 图片 URL
      query: this.httpBuildQuery(this.getOwnShareParams())
    });
  }

  /** 被动分享 **/
  // 分享给好友
  onShareAppMessage(object) {
    let paramsKeys = ['title', 'imageUrl'];
    if (!this.checkParams(object, paramsKeys)) {
      this.alert('缺少必要参数');
      return false;
    }
    wx.onShareAppMessage(() => {
      return {
        title: object.title,
        imageUrl: object.imageUrl,
        query: this.httpBuildQuery(this.getOwnShareParams())
      };
    });
  }

  // 分享到朋友圈
  onShareTimeline(object) {
    let paramsKeys = ['title', 'imageUrl'];
    if (!this.checkParams(object, paramsKeys)) {
      this.alert('缺少必要参数');
      return false;
    }
    wx.onShareTimeline(() => {
      return {
        title: object.title,
        imageUrl: object.imageUrl,
        query: this.httpBuildQuery(this.getOwnShareParams())
      };
    });
  }

  /** 加Q群 **/
  openQQGroup(object) {
    let gamePackageId = this.systemInfo.gamePackageId;
    let loginInfoKey = "yishi-sdk:login_info";
    let cardUrl = wx.getStorageSync(loginInfoKey).qq_group_card_url; // 卡片图片地址
    // 确认窗口
    wx.showModal({
      title: '加Q群教程',
      content: "即将跳转官方【客服会话】\n 给客服发送任意消息获取Q群链接",
      confirmText: '前往获取',
      showCancel: false,
      success(res) {
        if (res.confirm) {
          // 跳到客服中心
          let sessionFrom = {
            'action': 'open_qq_group',
            'game_package_id': gamePackageId
          };
          wx.openCustomerServiceConversation({
            'sessionFrom': JSON.stringify(sessionFrom),
            'showMessageCard': true,
            'sendMessageTitle': "发送任意消息获取Q群链接",
            'sendMessageImg': cardUrl,
            'success': res => {
              console.log("openCustomerServiceConversation complete :", sessionFrom);
              if ("function" == typeof object.success) {
                object.success(res);
              }
            }
          });
        }
      },
      fail: err => {
        console.error(err);
      }
    });
  }

  /** 关注公众号 **/
  openMp(object) {
    let gamePackageId = this.systemInfo.gamePackageId;
    let loginInfoKey = "yishi-sdk:login_info";
    let cardUrl = wx.getStorageSync(loginInfoKey).mp_card_url; // 卡片图片地址
    // 确认窗口
    wx.showModal({
      title: '关注教程',
      content: "即将跳转官方【客服会话】\n 给客服发送任意消息获取二维码",
      confirmText: '前往获取',
      showCancel: false,
      success(res) {
        if (res.confirm) {
          // 跳到客服中心
          let sessionFrom = {
            'action': 'open_mp',
            'game_package_id': gamePackageId
          };
          wx.openCustomerServiceConversation({
            'sessionFrom': JSON.stringify(sessionFrom),
            'showMessageCard': true,
            'sendMessageTitle': "发送任意消息获取公众号二维码",
            'sendMessageImg': cardUrl,
            'success': res => {
              console.log("openCustomerServiceConversation complete :", sessionFrom);
              if ("function" == typeof object.success) {
                object.success(res);
              }
            }
          });
        }
      },
      fail: err => {
        console.error(err);
      }
    });
  }

  /** 升级转微端-绑定手机 **/
  bindPhone(object) {
    let gamePackageId = this.systemInfo.gamePackageId;
    let loginInfoKey = "yishi-sdk:login_info";
    let cardUrl = wx.getStorageSync(loginInfoKey).bind_phone_card_url; // 卡片图片地址
    // 确认窗口
    wx.showModal({
      title: '升级教程',
      content: "即将跳转官方【客服会话】\n 给客服发送任意消息获取升级链接",
      confirmText: '前往获取',
      showCancel: false,
      success(res) {
        if (res.confirm) {
          // 跳到客服中心
          let sessionFrom = {
            'action': 'bind_phone',
            'game_package_id': gamePackageId
          };
          wx.openCustomerServiceConversation({
            'sessionFrom': JSON.stringify(sessionFrom),
            'showMessageCard': true,
            'sendMessageTitle': "发送任意消息获取升级链接",
            'sendMessageImg': cardUrl,
            'success': res => {
              console.log("openCustomerServiceConversation complete :", sessionFrom);
              if ("function" == typeof object.success) {
                object.success(res);
              }
            }
          });
        }
      },
      fail: err => {
        console.error(err);
      }
    });
  }

  // 合并对象
  objMerge(object1, object2) {
    var data = {};
    for (var x in object1) {
      data[x] = object1[x];
    }
    for (var x in object2) {
      data[x] = object2[x];
    }
    return data;
  }

  // 获取小游戏分享参数
  getOwnShareParams() {
    let parentShareParams = {};
    let launchOptions = wx.getLaunchOptionsSync();
    if (undefined !== launchOptions.query) {
      parentShareParams = launchOptions.query;
    }
    let loginInfoKey = "yishi-sdk:login_info";
    let loginInfo = wx.getStorageSync(loginInfoKey);
    let ownShareParams = {
      'userId': loginInfo.userid
    };
    ownShareParams = this.objMerge(parentShareParams, ownShareParams);
    return ownShareParams;
  }

  // 生成URL-encode 之后的请求字符串
  httpBuildQuery(params) {
    try {
      var tempArr = [];
      for (var i in params) {
        var key = encodeURIComponent(i);
        var value = encodeURIComponent(params[i]);
        tempArr.push(key + '=' + value);
      }
      var queryStr = tempArr.join('&');
      return queryStr;
    } catch (err) {
      console.log('httpBuildQuery method error');
      return '';
    }
  }

  // 支付处理
  payHandle(object) {
    // 检查是否有缓存支付订单
    let key = 'yishi-sdk:un_pushed_order';
    let orderObj = wx.getStorageSync(key);
    console.warn('缓存支付订单: ', orderObj);
    if (orderObj && orderObj.order_id) {
      this.payResult({
        'order_id': orderObj.order_id,
        'token': object.token,
        success: res => {
          if (1 == res.errno) {
            // 清除缓存支付订单
            wx.removeStorageSync(key);
            this.payInit(object);
          } else {
            this.alert('有支付订单未上报，暂不允许下单，请联系客服');
          }
        },
        fail: res => {
          console.error('上报已支付订单失败，暂不允许下单，请联系客服');
        }
      });
    } else {
      console.log("初始化订单...");
      this.payInit(object);
    }
  }

  payInit(object) {
    // 检查支付金额合法性
    let acbill = [1, 3, 6, 8, 12, 18, 25, 30, 40, 45, 50, 60, 68, 73, 78, 88, 98, 108, 118, 128, 148, 168, 188, 198, 328, 648, 998, 1998, 2998];
    if (acbill.indexOf(object.money) == -1) {
      this.alert('支付金额不符合支付标准，请联系客服');
      return false;
    }
    let params = {
      'money': object.money,
      'role_name': object.role_name,
      'role_level': object.role_level,
      'server_id': object.server_id,
      'extra_info': object.extra_info,
      'env_version': object.envVersion,
      'sdk_version': object.version,
      'token': object.token
    };
    this.apiPayInit({
      'params': params,
      'success': res => {
        if (1 == res.errno) {
          let canSwitch = res.data.switch;
          let switchPayType = res.data.switch_params.pay_type;
          let payMethod = this.getPayMethod(canSwitch, switchPayType);
          object.data = res.data;
          if (payMethod) payMethod.call(this, object);
        } else {
          this.alert('下单失败，请联系客服');
        }
      }
    });
  }

  getPayMethod(canSwitch, switchPayType) {
    if ('windows' == this.platform) {
      return this.midasPay;
    }
    if (canSwitch) {
      let switchPayFuncList = {
        "jsPay": this.jsPay,
        "miniAppPay": this.miniAppPay
      };
      return switchPayFuncList[switchPayType];
    }
    if ('android' == this.platform) {
      return this.midasPay;
    } else {
      this.alert('支付系统尚未开启，敬请期待');
      return false;
    }
  }

  midasPay(object) {
    let _this = this;
    let data = object.data; // 初始化订单返回结果
    let orderId = data.order_id;
    let offerId = data.offer_id;
    let payRate = data.pay_rate;
    let env = parseInt(data.pay_env);
    let zoneId = data.zone_id;

    // 默认缓存支付订单，以防支付过程中途出错
    let key = 'yishi-sdk:un_pushed_order';
    let orderObj = {
      'order_id': orderId
    };
    wx.setStorageSync(key, orderObj);

    // 调起小游戏官方支付
    wx.requestMidasPayment({
      mode: 'game',
      platform: 'android',
      env: env,
      offerId: offerId,
      zoneId: zoneId,
      currencyType: 'CNY',
      buyQuantity: object.money * payRate, // 游戏币 = 金额 * 兑换比
      success() {
        if ("function" == typeof object.success) {
          let ret = { 'order_id': orderId };
          object.success(ret);
        }
        // 上报支付结果
        _this.payResult({
          order_id: orderId,
          token: object.token,
          success: res => {
            if (1 == res.errno) {
              // 上报成功，清除缓存支付订单
              let key = 'yishi-sdk:un_pushed_order';
              wx.removeStorageSync(key);
            }
          }
        });
      },
      fail(err) {
        // 支付失败，清除缓存支付订单
        let key = 'yishi-sdk:un_pushed_order';
        wx.removeStorageSync(key);
        if ("function" == typeof object.fail) object.fail(err);

        if (1 == err.errCode) {
          _this.alert('充值失败');
        } else {
          _this.alert('充值异常，请稍后再试');
          console.error("requestMidasPayment error :", err);
        }
      }
    });
  }

  jsPay(object) {
    let data = object.data; // 初始化订单返回结果
    let orderId = data.order_id;
    let gamePackageId = this.systemInfo.gamePackageId;

    let loginInfoKey = "yishi-sdk:login_info";
    let cardUrl = wx.getStorageSync(loginInfoKey).pay_card_url; // 卡片图片地址

    // 确认支付窗口
    wx.showModal({
      title: '充值教程',
      content: "即将跳转官方【客服会话】\n 给客服发送任意消息获取充值链接",
      confirmText: '前往充值',
      showCancel: false,
      success(res) {
        if (res.confirm) {
          // 跳到客服中心
          let sessionFrom = {
            'action': 'js_pay',
            'order_id': orderId,
            'game_package_id': gamePackageId,
            'extra_data': object.extra_data //extra_data: product_name
          };
          wx.openCustomerServiceConversation({
            'sessionFrom': JSON.stringify(sessionFrom),
            'showMessageCard': true,
            'sendMessageTitle': "发送任意消息获取充值链接",
            'sendMessageImg': cardUrl,
            'success': res => {
              console.log("openCustomerServiceConversation complete :", sessionFrom);
              if ("function" == typeof object.success) {
                let ret = { 'order_id': orderId };
                object.success(ret);
              }
            },
            'fail': err => {
              wx.showModal({
                title: '温馨提示',
                content: "因版本限制，需通过【客服会话】充值，请您谅解",
                confirmText: '前往充值',
                cancelText: '朕知道了',
                success(res) {
                  if (res.confirm) {
                    // 跳到客服中心
                    wx.openCustomerServiceConversation({
                      'sessionFrom': JSON.stringify(sessionFrom),
                      'showMessageCard': true,
                      'sendMessageTitle': "发送任意消息获取充值链接",
                      'sendMessageImg': cardUrl,
                      'complete': res => {
                        console.log("openCustomerServiceConversation complete :", sessionFrom);
                        if ("function" == typeof object.success) {
                          let ret = { 'order_id': orderId };
                          object.success(ret);
                        }
                      }
                    });
                  }
                }
              });
            }
          });
        }
      },
      fail: err => {
        console.error(err);
      }
    });
  }

  miniAppPay(object) {
    let data = object.data; // 初始化订单返回结果
    let appId = data.switch_params.miniapp_app_id;
    let orderId = data.order_id;
    let price = object.money;
    let goodsName = object.extra_data.product_name;

    wx.navigateToMiniProgram({
      appId: appId,
      path: '/pages/pay/index?goods_name=' + goodsName + '&price=' + price + '&order_id=' + orderId + '&type=1',
      envVersion: 'release',
      success: res => {
        console.log("call miniAppPay success :", res);
        if ("function" == typeof object.success) {
          let ret = { 'order_id': orderId };
          object.success(ret);
        }
      },
      fail: err => {
        console.error(err);
      }
    });
  }

  // 小游戏上报支付结果
  payResult(object) {
    // 检查参数
    let paramskeys = ['order_id', 'token'];
    if (!this.checkParams(object, paramskeys)) {
      this.alert('上报支付结果参数错误');
    }
    let params = {
      'order_id': object.order_id,
      'token': object.token
    };
    this.apiPayResult({
      params: params,
      success: object.success,
      fail: object.fail
    });
  }

  /** 敏感词检查方法 **/
  msgSecCheck(object) {
    let paramsKeys = ['scene', 'content'];
    if (!this.checkParams(object, paramsKeys)) {
      this.alert('敏感词检查参数错误');
      return false;
    }

    // 检查是否已登录联运
    let loginInfoKey = "yishi-sdk:login_info";
    let loginInfo = wx.getStorageSync(loginInfoKey);
    let token = loginInfo.token;
    if (!token) {
      this.alert('请先登录');
      return false;
    }
    object.token = token;
    this.apiMsgSecCheck(object);
  }

  /** 订阅消息方法 **/
  subcribeMessage(object) {
    let paramsKeys = ['tmplIds'];
    if (!this.checkParams(object, paramsKeys)) {
      this.alert('订阅消息参数错误');
      return false;
    }

    wx.requestSubscribeMessage({
      tmplIds: object.tmplIds,
      success: res => {
        if (object.success) object.success(res);
      },
      fail: err => {
        if (object.fail) object.fail(err);
      },
      complete: res => {
        if (object.complete) object.complete(res);
      }
    });
  }

  // 请求联运登录接口
  apiLogin(object) {
    let params = {
      game_package_id: this.systemInfo.gamePackageId,
      channel_ad_id: this.systemInfo.channelAdId,
      scene: this.scene,
      code: object.code
    };
    this.request({
      uri: "/v3/user/wxgamelogin",
      params: params,
      method: 'post',
      success: res => {
        let loginInfoKey = "yishi-sdk:login_info";
        if (1 == res.errno) {
          wx.setStorageSync(loginInfoKey, res.data);
        }

        this.apiPushClickData(res.data);

        if (object.success) object.success({
          'errno': res.errno,
          'data': {
            'userid': res.data.userid,
            'tstamp': res.data.tstamp,
            'sign': res.data.sign,
            'open_id': res.data.open_id
          },
          'msg': res.msg
        });
      }
    });
  }

  // 请求游戏适配参数
  apiAdaptParams(object) {
    let params = {
      'env_version': object.envVersion,
      'sdk_version': object.version,
      'role_level': object.role_level,
      'token': object.token
    };
    this.request({
      uri: "/v3/user/wxgameadaptparams",
      params: params,
      method: 'post',
      success: res => {
        if (object.success) object.success(res);
      }
    });
  }

  // 上报角色信息
  apiUploadRoleInfoParams(object) {
    let params = {
      'role_id': object.role_id,
      'role_name': object.role_name,
      'role_level': object.role_level,
      'server_id': object.server_id,
      'server_name': object.server_name,
      'token': object.token
    };
    this.request({
      uri: "/v3/user/playerinfo",
      params: params,
      method: 'post',
      success: res => {
        if (object.success) object.success(res);
      }
    });
  }

  // 请求联运初始化订单接口
  apiPayInit(object) {
    this.request({
      uri: "/v3/pay/wxgamepayinit",
      params: object.params,
      method: 'post',
      success: object.success
    });
  }

  // 请求联运上报支付结果接口
  apiPayResult(object) {
    this.request({
      uri: "/v3/pay/wxgamepayresult",
      params: object.params,
      method: 'post',
      success: object.success,
      fail: object.fail
    });
  }

  // 请求联运刷新sessionKey接口
  apiFlushSessionKey(object) {
    let params = {
      'code': object.code,
      'token': object.token
    };
    this.request({
      uri: "/v3/user/wxgameflush",
      method: 'post',
      params: params,
      success: object.success
    });
  }

  // 推送点击数据
  apiPushClickData(object) {
    let query = null; // 需回传的点击数据
    let key = 'yishi-sdk:trace_click_data';

    console.log('点击数据:' + JSON.stringify(this.enterOptionSync.query));

    if (this.enterOptionSync.query && this.enterOptionSync.query.feedback && this.enterOptionSync.query.channelAdId && this.enterOptionSync.query.sign) {
      query = this.enterOptionSync.query;
      wx.setStorageSync(key, query);
    } else {
      query = wx.getStorageSync(key);
    }
    if (!query) return;

    let traceUrl = YishiSdk.traceDomain + '/' + query.feedback + '/' + query.channelAdId + '/' + query.sign + '.html';

    // 去除无用的参数再回传
    delete query.feedback;
    delete query.sign;

    let params = {
      'app_id': object.app_id,
      'open_id': object.open_id,
      'query': query
    };

    console.log('推送点击数据:' + traceUrl + ', data: ' + JSON.stringify(params));

    // 发起请求
    wx.request({
      url: traceUrl,
      method: 'Get',
      data: params,
      success: res => {
        wx.removeStorageSync(key);
      }
    });
  }

  // 敏感词检查
  apiMsgSecCheck(object) {
    let params = {
      'scene': object.scene,
      'content': object.content,
      'nickname': object.nickname,
      'title': object.title,
      'signature': object.signature,
      'token': object.token
    };
    this.request({
      uri: "/v3/wxgame/msgseccheck",
      params: params,
      method: 'post',
      success: res => {
        if (object.success) object.success(res);
      }
    });
  }

  // 请求方法
  request(object) {
    if (!object.uri || !object.params) {
      console.error("request func params error...");
      if ("function" == typeof object.fail) {
        object.fail({ errCode: -1, errMsg: "request func params error" });
      }
      return false;
    }
    let domain = YishiSdk.domain;
    let secret = this.systemInfo.secret;
    let sign = this.genSign(object.params, secret);
    let url = domain + object.uri + "?sign=" + sign;
    let header = object.header ? object.header : YishiSdk.header;
    let method = object.method ? object.method : 'Get';

    // 打印请求参数，需注释掉
    console.warn("请求uri：\n", object.uri + "?sign=" + sign, "\n 请求参数:\n", JSON.stringify(object.params));

    wx.request({
      url: url,
      method: method,
      header: header,
      data: object.params,
      success: res => {
        // 打印请求结果，需注释掉
        console.warn("请求结果：\n", JSON.stringify(res.data));

        if ("function" == typeof object.success) object.success(res.data);
      },
      fail: err => {
        if ("function" == typeof object.fail) object.fail(err);
      }
    });
  }

  // 检查参数
  checkParams(params, paramskeys) {
    for (var i in paramskeys) {
      let key = paramskeys[i];
      if ("undefined" == typeof params[key]) {
        return false;
      }
    }
    return true;
  }

  // 生成请求参数签名
  genSign(params, secret) {
    return md5(md5(md5(JSON.stringify(params)) + secret));
  }

  // 获取当前时间戳
  getTimeStamp() {
    return parseInt(Date.now() / 1000);
  }

  // 提示框
  alert(msg = '', title = '温馨提示', showCancel = false) {
    wx.showModal({
      title: title,
      content: msg,
      showCancel: showCancel
    });
  }
}

exports.default = YishiSdk;