var md5 = require('./js-md5.js');
var yishiSdk = require('./qy-ys.js');
let qy_sdk = {
  platformSdk: null,
  platformSdkParam: null,
  version: '1',
  clientConfig: null,
  lifeStatus: {
    init: false,
    login: false
  },
  loginUserId: null,
  requestConfig: {
    header: { 'content-type': 'application/json' },
    url: '',
    key: ''
  },
  requestRoute: {
    init: 'init',
    login: 'gameLogin',
    pay: 'gamePay',
    role: 'gameRole'
  },
  gameRoleUploadTypeList: ['JOIN_SERVER', 'CREATE_ROLE', 'UPGRADE', 'FACTION', 'EXIT', 'OTHER'],
  gameRoleSubmitIntervalObj: {},
  httpRequest: function (route, params, back, errback) {
    params.c = parseInt(Date.now() / 1000);
    params.v = this.version;
    // console.log('httpRequestSignStr:', JSON.stringify(params) + this.requestConfig.key);
    params.s = md5(JSON.stringify(params) + this.requestConfig.key);

    wx.request({
      url: this.requestConfig.url + '?action=' + route,
      method: 'POST',
      header: this.requestConfig.header,
      data: params,
      // dataType: 'text',
      timeout: 10000,
      success(res) {
        // console.log('httpRequest.success:', JSON.stringify(res))
        // let jsonData = JSON.parse(res.data);
        if (200 == res.data.code) {
          if ('function' === typeof back) {
            back(res.data);
          }
        } else {
          if ('function' === typeof errback) {
            if (res && res.hasOwnProperty('data') && res.data) {
              errback(res.data);
            } else {
              errback(res);
            }
          }
        }
      },
      fail(err) {
        console.log('httpRequest.fail:', JSON.stringify(err));
        if ('function' === typeof errback) {
          errback(err);
        }
      }
    });
  },
  successReturn: function (callback = null, data = null, msg = 'success') {
    if ('function' === typeof callback) {
      callback({ status: true, msg: msg, data: data });
    }
  },
  errorReturn: function (callback = null, msg = '', data = null) {
    if ('function' === typeof callback) {
      callback({ status: false, msg: msg, data: data });
    }
  },
  initSdk: function (callback, initInfo) {
    if (!initInfo.hasOwnProperty('game_id') || !initInfo.hasOwnProperty('app_key')) {
      this.errorReturn(callback, '初始化参数异常');
      return false;
    }
    this.requestConfig.url = 'https://sdk-platform-h5.qiyuyouxi.com/platformsdk/gameinit/huanjuyoufaxing2/c731c4faf077f26d7e7365d941569543/';
    this.requestConfig.key = initInfo.app_key;

    let wxSystemInfo = wx.getSystemInfoSync();
    let _this = this;
    this.httpRequest(this.requestRoute.init, { d: wxSystemInfo }, function (res) {
      _this.lifeStatus.init = true;
      _this.clientConfig = res.data;
      let config = {
        game_package_id: '896',
        secret: 'F046emDQstDHvCxC9F7HCVA6pIOIb6',
        ios_game_package_id: '895',
        ios_secret: 'F046emDQstDHvCxC9F7HCVA6pIOIb6'
        // console.log('yishiSdk:', yishiSdk);
      };_this.platformSdk = new yishiSdk.default(config);
      // console.log('this.platformSdk:', _this.platformSdk);
      _this.successReturn(callback);
    }, function (err) {
      if (err && err.hasOwnProperty('msg') && err.msg) {
        _this.errorReturn(callback, '初始化请求失败:' + err.msg);
      } else {
        _this.errorReturn(callback, '初始化请求失败');
      }
    });

    return true;
  },
  checkInitStatus: function (callback) {
    if (this.lifeStatus.init !== true) {
      this.errorReturn(callback, '未初始化');
      return false;
    }
    return true;
  },
  login: function (callback) {
    if (!this.checkInitStatus(callback)) {
      this.errorReturn(callback, '登录失败');
      return false;
    }
    if ('true' != this.clientConfig.login_status) {
      this.errorReturn(callback, '停止用户登录');
      return false;
    }
    let _this = this;
    console.log('login.platformSdk:', this.platformSdk);
    this.platformSdk.login({
      success(res) {
        console.log("登录请求结果：", JSON.stringify(res));
        _this.httpRequest(_this.requestRoute.login, { d: res }, function (res) {
          _this.lifeStatus.login = true;
          _this.loginUserId = res.data.user_id;
          _this.successReturn(callback, res.data);
        }, function (err) {
          if (err && err.hasOwnProperty('msg') && err.msg) {
            _this.errorReturn(callback, '登录请求失败:' + err.msg);
          } else {
            _this.errorReturn(callback, '登录请求失败');
          }
        });
      }
    });
  },
  checkLoginStatus: function (callback) {
    if (this.lifeStatus.login !== true) {
      this.errorReturn(callback, '未登录');
      return false;
    }
    return true;
  },
  pay: function (callback, payInfo) {
    if (!this.checkLoginStatus(callback)) {
      this.errorReturn(callback, '支付下单失败');
      return false;
    }
    // 防止多次点击支付
    if (!payInfo.hasOwnProperty('order_time')) {
      this.errorReturn(callback, '支付下单参数有误');
      return false;
    }
    let orderLimitStorageName = 'qy_pay';
    let lastOrderTime = parseInt(wx.getStorageSync(orderLimitStorageName));
    let orderTime = parseInt(payInfo.order_time);
    if (Math.abs(orderTime - lastOrderTime) <= 3) {
      this.errorReturn(callback, '支付下单频繁');
      return false;
    }
    wx.setStorageSync(orderLimitStorageName, payInfo.order_time);
    // 向服务器下单
    let _this = this;
    this.httpRequest(this.requestRoute.pay, { d: payInfo }, function (res) {
      console.log(res.data);
      _this.platformSdk.pay({
        'money': res.data.money,
        'role_name': res.data.role_name,
        'role_level': res.data.role_level,
        'server_id': res.data.server_id,
        'extra_info': res.data.extra_info,
        'extra_data': res.data.extra_data,
        'success': res => {
          console.log('支付结果', JSON.stringify(res));
          // 下单成功后回调
          _this.successReturn(callback);
        },
        'fail': err => {
          console.log(JSON.stringify(err));
        }
      });
    }, function (err) {
      if (err && err.hasOwnProperty('msg') && err.msg) {
        _this.errorReturn(callback, '支付下单请求失败:' + err.msg);
      } else {
        _this.errorReturn(callback, '支付下单请求失败');
      }
    });
  },
  showShare: function (callback, params) {
    if (!this.checkInitStatus(callback)) {
      this.errorReturn(callback, '显示分享按钮失败');
      return false;
    }
    this.platformSdk.showShareMenu({
      withShareTicket: params.withShareTicket,
      menus: params.menus,
      success: res => {
        console.log('显示分享按钮结果：', JSON.stringify(res));
        this.successReturn(callback);
      },
      fail: err => {
        this.errorReturn(callback, '显示分享按钮失败', err);
      }
    });
  },
  hideShare: function (callback) {
    if (!this.checkInitStatus(callback)) {
      this.errorReturn(callback, '隐藏分享按钮失败');
      return false;
    }
    this.platformSdk.hideShareMenu({
      success: res => {
        console.log('隐藏分享按钮结果：', JSON.stringify(res));
        this.successReturn(callback);
      },
      fail: err => {
        this.errorReturn(callback, '隐藏分享按钮失败', err);
      }
    });
  },
  shareAppMessage: function (callback, params) {
    if (!this.checkInitStatus(callback)) {
      this.errorReturn(callback, '调用主动分享失败');
      return false;
    }
    this.platformSdk.shareAppMessage({
      title: params.title,
      imageUrl: params.imageUrl,
      success: res => {
        console.log('主动分享结果：', JSON.stringify(res));
        this.successReturn(callback);
      }
    });
  },
  onShareAppMessage: function (callback, params) {
    if (!this.checkInitStatus(callback)) {
      this.errorReturn(callback, '调用被动分享失败');
      return false;
    }
    this.platformSdk.onShareAppMessage({
      title: params.title,
      imageUrl: params.imageUrl,
      success: res => {
        console.log('被动分享结果：', JSON.stringify(res));
        this.successReturn(callback);
      }
    });
  },
  role: function (callback, gameRoleInfo) {
    if (!this.checkLoginStatus(callback)) {
      this.errorReturn(callback, '调用角色上报失败');
      return false;
    }
    // JOIN_SERVER=进入游戏，CREATE_ROLE=创建角色，UPGRADE=角色升级，FACTION=加入工会，EXIT=退出游戏，OTHER=其他情况
    if (!this.roleInfoValidate(callback, gameRoleInfo)) {
      this.errorReturn(callback, '必传角色数据验证失败');
      return false;
    }
    // 限制角色上报频率
    let gameRoleInfoStorageName = gameRoleInfo['game_id'] + gameRoleInfo['user_id'] + gameRoleInfo['cp_server_id'] + gameRoleInfo['cp_role_id'] + gameRoleInfo['upload_type'],
        gameRoleSubmitTimeStorageName = 'submit_time' + gameRoleInfoStorageName,
        lastSubmitTime = parseInt(wx.getStorageSync(gameRoleSubmitTimeStorageName));
    wx.setStorageSync(gameRoleInfoStorageName, gameRoleInfo);
    console.log('lastSubmitTime:', lastSubmitTime);
    if (typeof lastSubmitTime === 'number' && lastSubmitTime === NaN) {
      wx.setStorageSync(gameRoleSubmitTimeStorageName, gameRoleInfo.submit_time);
      this.submitRole(gameRoleInfo);
    } else {
      console.log('等待角色队列上报:' + gameRoleInfo['upload_type']);
    }
    // 启动SDK角色上报队列
    if (this.gameRoleSubmitIntervalObj.hasOwnProperty(gameRoleInfo['upload_type']) !== true) {
      console.log('启动角色队列:' + gameRoleInfo['upload_type']);
      this.gameRoleSubmitIntervalObj[gameRoleInfo['upload_type']] = setInterval(this.roleInterval, 10000, this, gameRoleInfoStorageName, gameRoleSubmitTimeStorageName);
    } else {
      console.log('已启动角色队列:' + gameRoleInfo['upload_type']);
    }
    this.successReturn(callback);
  },
  roleInfoValidate: function (callback, validateRoleInfo) {
    // 角色上报必传参数
    let validateRoleList = ['game_id', 'user_id', 'cp_server_id', 'cp_server_name', 'cp_role_id', 'cp_role_name', 'cp_role_level', 'submit_time', 'upload_type'];

    for (var i = 0; i < validateRoleList.length; i++) {
      switch (typeof validateRoleInfo[validateRoleList[i]]) {
        case 'number':
          if (validateRoleInfo[validateRoleList[i]] === 0) {
            this.errorReturn(callback, '角色上报失败:' + validateRoleList[i] + '有误');
            return false;
          }
          break;
        case 'string':
          if (validateRoleInfo[validateRoleList[i]].length === 0) {
            this.errorReturn(callback, '角色上报失败:' + validateRoleList[i] + '有误');
            return false;
          }
          break;
        default:
          this.errorReturn(callback, '角色上报失败:' + validateRoleList[i] + '有误');
          return false;
          break;
      }
    }
    let flag = false;
    for (var i = 0; i < this.gameRoleUploadTypeList.length; i++) {
      if (this.gameRoleUploadTypeList[i] === validateRoleInfo['upload_type']) {
        flag = true;
        break;
      }
    }
    if (true != flag) {
      this.errorReturn(callback, '角色上报失败:upload_type有误有误');
      return false;
    } else {
      return true;
    }
  },
  roleInterval: function (_this, gameRoleInfoStorageName, gameRoleSubmitTimeStorageName) {
    let gameRoleInfoCacheData = wx.getStorageSync(gameRoleInfoStorageName);
    let lastSubmitTime = wx.getStorageSync(gameRoleSubmitTimeStorageName);
    if (gameRoleInfoCacheData && gameRoleInfoCacheData.hasOwnProperty('submit_time') && gameRoleInfoCacheData.submit_time > lastSubmitTime) {
      console.log('角色队列数据有效，进行上报');
      wx.setStorageSync(gameRoleSubmitTimeStorageName, gameRoleInfoCacheData.submit_time);
      _this.submitRole(gameRoleInfoCacheData);
    } else {
      console.log('角色队列数据无效');
    }
  },
  submitRole: function (submitRoleInfo) {
    let _this = this;
    this.httpRequest(this.requestRoute.role, { d: submitRoleInfo }, function (res) {
      _this.platformSdk.uploadRoleInfo({
        'role_id': res.data.role_id,
        'role_name': res.data.role_name,
        'role_level': res.data.role_level,
        'server_id': res.data.server_id,
        'server_name': res.data.server_name,
        success(res) {
          console.log("===> 上传角色请求结果：", JSON.stringify(res));
        }
      });
    }, function (err) {
      if (err && err.hasOwnProperty('msg') && err.msg) {
        console.log('角色上报请求失败:' + err.msg);
      } else {
        console.log('角色上报请求失败');
      }
    });
  },
  openQQGroup: function (callback) {
    if (!this.checkLoginStatus(callback)) {
      this.errorReturn(callback, '获取Q群链接失败');
      return false;
    }
    this.platformSdk.openQQGroup({
      success: res => {
        this.successReturn(callback, res);
      }
    });
  },
  bindPhone: function (callback) {
    if (!this.checkLoginStatus(callback)) {
      this.errorReturn(callback, '获取绑定手机失败');
      return false;
    }
    this.platformSdk.bindPhone({
      success: res => {
        this.successReturn(callback, res);
      }
    });
  },
  adaptParams: function (callback, params) {
    if (!this.checkLoginStatus(callback)) {
      this.errorReturn(callback, '获取绑定手机失败');
      return false;
    }
    this.platformSdk.adaptParams({
      role_level: params.role_level,
      success: res => {
        this.successReturn(callback, res);
      }
    });
  },
  msgSecCheck: function (callback, params) {
    if (!this.checkLoginStatus(callback)) {
      this.errorReturn(callback, '调用敏感词查询失败');
      return false;
    }
    this.platformSdk.msgSecCheck({
      nickname: params.nickname,
      title: params.title,
      signature: params.signature,
      scene: params.scene,
      content: params.content,
      success: res => {
        this.successReturn(callback, res);
      }
    });
  },
  subcribeMessage: function (callback, params) {
    if (!this.checkLoginStatus(callback)) {
      this.errorReturn(callback, '调用订阅消息授权失败');
      return false;
    }
    this.platformSdk.subcribeMessage({
      tmplIds: params.tmplIds,
      success: res => {
        this.successReturn(callback, res);
      },
      fail: res => {
        this.errorReturn(callback, res);
      },
      complete: res => {
        console.log('调用微信订阅消息-complete');
      }
    });
  }

};
GameGlobal['QY_SDK'] = qy_sdk;