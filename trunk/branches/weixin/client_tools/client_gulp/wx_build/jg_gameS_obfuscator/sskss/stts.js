var K = wx.$S;
let confArr = ['', K[329832], K[329833], K[329834], K[329835], K[329836], K[329837], K[329838], K[329839], K[329840], K[329841], K[329842], K[329843], K[329844], K[329845], K[329846], K[329847], K[329848], K[329849], K[329850], K[329851], K[329852]];

const SY_CONF = {
  "APP_ID": K[329853],
  "APP_VERSION": K[329854],
  "GAME_KEY": K[329855],
  "offerId": K[329856],
  "commitId": "54"
};

const Sygame = {
  // 初始化
  SY_CONF: SY_CONF,
  appid: '',
  app_version: K[329857],
  openid: '',
  real_openid: '',
  share_data: {},
  clipboard: '',
  role_id: 0, //角色id
  role_name: '', //角色名称
  server_id: '', //区服id
  server_name: '', //区服名称
  init: data => {
    Sygame.appid = SY_CONF[confArr[1]];
    Sygame.query = data.query;
    Sygame.channel = SY_CONF[confArr[6]];
    Sygame.offerId = SY_CONF[K[329858]];
    Sygame.scene = data.scene;
    Sygame.commit_id = SY_CONF[K[329859]];
    Sygame.touchNumber = 0;
    Sygame.jumpVersion = 0;
    console.log(K[329860], Sygame);
    let queryData = {
      query: data.query
    };
    //获取该游戏是否开启获取剪切板功能
    wx.request({
      url: confArr[17],
      data: { appid: Sygame.appid },
      method: K[300220],
      success: res => {
        console.log(K[329861], res);
        if (res.data.is_open_clipboard) {
          //获取剪切板内的信息
          wx.getClipboardData({
            success(res) {
              if (res.data) {
                Sygame.clipboard = res.data;
              }
              console.log(K[329862], res);
            }
          });
        }
        // +1 click
        wx.request({
          url: confArr[7],
          data: queryData,
          method: K[300220],
          success: res => {
            console.log(K[329863], res);
          }
        });
      }
    });
    //get share conf
    Sygame.getShareData();
    wx.showShareMenu();
    wx.onShareAppMessage(() => {
      var arr = Sygame.share_data[1];
      var len = arr.length;
      var ranIndex = Math.floor(Math.random() * len);
      var shareData = arr[ranIndex];
      console.log(K[329864], shareData);
      var data = {
        title: shareData.title,
        imageUrlId: shareData.imageUrlId,
        imageUrl: shareData.imageUrl
      };
      console.log(K[329865], shareData);
      return data;
    });
  },
  // 游戏登录
  syLogin: () => new Promise(function (resolve, reject) {
    // 发起登陆请求
    wx.login({
      success(res) {
        console.log(K[329866], res);
        if (res.code) {
          // 到服务器去换取openId和用户信息
          let url = confArr[2];
          wx.request({
            url: url,
            data: {
              code: res.code,
              appid: Sygame.appid,
              version: Sygame.app_version,
              query: Sygame.query,
              scene: Sygame.scene,
              channel: Sygame.channel,
              clipboard: Sygame.clipboard
            },
            success(ret) {
              console.log(K[329867], ret);
              if (ret.data.code == 1001) {
                resolve(ret.data);
                Sygame.openid = ret.data.openid;
                Sygame.real_openid = ret.data.real_openid;
                // 判断 jump_version 是否存在，存在则说明是新版导包
                Sygame.jumpVersion = ret.data.jump_version;
              } else if (ret.data.code == 3001) {
                var showCancelType = true;
                var loginInfo = 0;
                if (ret.data.jump_mandatory == 1) {
                  showCancelType = false;
                } else {
                  var loginKey = K[329868] + ret.data.openid;
                  loginInfo = Sygame.cookieData({ type: K[301209], 'key': loginKey });
                  if (ret.data.jump_mandatory_number > 0 && loginInfo >= ret.data.jump_mandatory_number) {
                    var data = [];
                    data.code = 1001;
                    data.openid = ret.data.openid;
                    data.real_openid = ret.data.real_openid;
                    resolve(data);
                    Sygame.openid = ret.data.openid;
                    Sygame.real_openid = ret.data.real_openid;
                    return false;
                  }
                }
                resolve(Sygame.syPackageShow(ret, 1, showCancelType));
              } else if (ret.data.code == 5001) {
                wx.showModal({
                  title: K[329869],
                  content: ret.data.game_tip ? ret.data.game_tip : K[329870],
                  confirmText: K[306993],
                  showCancel: false,
                  success: () => {
                    console.log(K[329871], ret);
                  }
                });
                wx.onTouchStart(() => {
                  wx.showModal({
                    title: K[329869],
                    content: ret.data.game_tip ? ret.data.game_tip : K[329870],
                    confirmText: K[306993],
                    showCancel: false,
                    success: () => {
                      console.log(K[329871], ret);
                    }
                  });
                });
              }
            }
          });
        } else {
          return false;
        }
      },
      fail: function () {
        console.log(K[326002]);
      }
    });
  }),

  // 创角，进入游戏，用户升级等接口
  syReportRoleInfo: data => new Promise(function (resolve, reject) {
    if (typeof data === K[301037]) {
      let url = confArr[3];
      if (data.role_id && typeof data.role_id !== K[328942]) Sygame.role_id = data.role_id;
      if (data.role_name && typeof data.role_name !== K[328942]) Sygame.role_name = data.role_name;
      if (data.server_id && typeof data.server_id !== K[328942]) Sygame.server_id = data.server_id;
      if (data.server_name && typeof data.server_name !== K[328942]) Sygame.server_name = data.server_name;
      data.wecha_id = Sygame.openid;
      data.real_openid = Sygame.real_openid;
      data.channel = Sygame.channel;
      data.query = Sygame.query;
      data.scene = Sygame.scene;
      data.appid = Sygame.appid;
      data.version = Sygame.app_version;
      wx.request({
        url: url,
        data: data,
        method: K[300220],
        success: res => {
          console.log(K[329872], res);
          if (res.data.is_gs_login) {
            Sygame.syUserLoginRecord(Sygame.openid, res.data.request_time);
          }
          resolve(res.data);
        }
      });
    } else {
      return K[329873];
    }
  }),
  // 下单发起支付
  syPay: data => new Promise(function (resolve, reject) {
    // jumpVersion存在为新版导包，导包条件获取为支付之前
    if (Sygame.jumpVersion) {
      // 是否确定导包但是没导过去
      if (Sygame.touchNumber > 0) {
        return false;
      }
      // 获取导包信息
      Sygame.syPackageJump().then(() => {
        resolve(Sygame.syRealPay(data));
      });
    } else {
      resolve(Sygame.syRealPay(data));
    }
  }),

  // 真实支付方法
  syRealPay: data => new Promise(function (resolve, reject) {
    let url = confArr[5];
    if (typeof data == K[301037]) {
      data.openid = Sygame.openid;
      data.real_openid = Sygame.real_openid;
      data.appid = Sygame.appid;
      data.channel = Sygame.channel;
      data.version = Sygame.app_version;
      data.is_buckle_pay = 0;
      wx.request({
        url: url,
        method: K[300220],
        data: data,
        success: function (res) {
          console.log(K[329874], res);
          // 后台配置支付参数
          switch (res.data.payType) {
            case "1":
              //米大师余额支付
              if (res.data.can_use_balance == 1) {
                wx.showModal({
                  title: K[329875],
                  content: res.data.midas_pay_tip,
                  confirmText: K[306993],
                  showCancel: K[310118],
                  success: ret => {
                    if (ret.confirm) {
                      data.is_buckle_pay = 1;
                      Sygame.syDescMidasCoin(data);
                    } else {
                      console.log(K[300190]);
                      Sygame.syMidasPay(data);
                    }
                  }
                });
              } else {
                Sygame.syMidasPay(data);
              }
              break;
            case "2":
              wx.showModal({
                title: K[329876],
                content: K[329877],
                confirmText: K[329878],
                showCancel: false,
                success: ret => {
                  if (ret.confirm) {
                    wx.openCustomerServiceConversation({
                      sessionFrom: K[329879] + res.data.payId,
                      showMessageCard: true,
                      sendMessageImg: K[329880],
                      success: () => {
                        console.log(K[300273]);
                      }
                    });
                  }
                }
              });
              break;
            case "3":
              // 获取支付二维码
              wx.previewImage({
                urls: [res.data.payImage]
              });
              // 二维码
              break;
          }
        }
      });
    } else {
      reject(K[329881]);
    }
  }),

  //通知米大师扣除余额发货接口
  syDescMidasCoin: data => {
    wx.request({
      url: confArr[11],
      data: data,
      method: K[300220],
      dataType: K[306479],
      success: function (res) {
        console.log(K[329882], res);
        wx.showModal({
          title: K[300072],
          content: res.data.tip,
          confirmText: K[306993],
          showCancel: K[310118],
          success: ret => {
            if (ret.confirm) {}
          }
        });
      },
      fail: function (e) {
        console.log(K[329883], e);
      }
    });
  },

  syMidasPay: data => {
    wx.requestMidasPayment({
      mode: K[329884],
      env: 0,
      offerId: Sygame.offerId,
      currencyType: K[329885],
      buyQuantity: data.product_price * 100,
      platform: K[300111],
      zoneId: 1,
      success(res) {
        Sygame.syDescMidasCoin(data);
        console.log(K[329886], res);
      },
      fail(res) {
        // 上报失败信息、取消支付不上报
        if (res.errCode != 1) {
          Sygame.syReportMidasErrorInfo(res);
        }
        console.log(res);
      },
      complete(res) {
        console.log(res);
      }
    });
  },

  // 上报米大师错误信息
  syReportMidasErrorInfo: function (info) {
    wx.request({
      url: confArr[22],
      data: {
        'appid': Sygame.appid,
        'info': JSON.stringify(info),
        'openid': Sygame.openid,
        'real_openid': Sygame.real_openid
      },
      method: K[300220],
      success: ret => {
        console.log(K[329887], ret);
      }
    });
  },

  // 绑定手机
  syBindMobile: data => new Promise(function (reslove, reject) {
    let channel = Sygame.channel;
    let openid = Sygame.openid;
    wx.openCustomerServiceConversation({
      sessionFrom: K[329888] + openid,
      success: () => {
        console.log(K[329889]);
      }
    });
  }),

  // 获取导包跳转信息
  syPackageJump: () => new Promise(function (resolve, reject) {
    wx.request({
      url: confArr[18],
      data: {
        'appid': Sygame.appid,
        'openid': Sygame.openid,
        'real_openid': Sygame.real_openid
      },
      method: K[300220],
      success: ret => {
        console.log(K[329890], ret);
        if (ret.data.status == 1001) {
          resolve(true);
        } else {
          var showCancelType = true;
          if (ret.data.jump_mandatory == 1) {
            showCancelType = false;
          }
          resolve(Sygame.syPackageShow(ret, 0, showCancelType));
        }
      }
    });
  }),

  /**
   * 将导包时候的弹窗取出来单独封装，避免新旧两种导包方式代码重复
   * ret 获取到的导包参数信息
   * jumpType 跳转方式（1 老版导包，重复调用onTouch事件；0 新版导包，仅调用一次ontouch事件）
   * showCancelType showModel方法的取消按钮是否显示
   */
  syPackageShow: (ret, jumpType, showCancelType) => new Promise(function (resolve, reject) {
    wx.showModal({
      title: ret.data.jump_title_tip ? ret.data.jump_title_tip : K[329891],
      content: ret.data.jump_tip ? ret.data.jump_tip.replace(/\\n/g, '\n') : K[329892],
      confirmText: ret.data.jump_button_tip ? ret.data.jump_button_tip : K[306993],
      cancelText: ret.data.jump_cancel_tip ? ret.data.jump_cancel_tip : K[310118],
      showCancel: showCancelType,
      success: res => {
        // 点击取消按钮可以获取用户信息进入游戏（仅老版导包可以）
        if (res.cancel && jumpType) {
          var data = [];
          data.code = 1001;
          data.openid = ret.data.openid;
          data.real_openid = ret.data.real_openid;
          resolve(data);
          Sygame.openid = ret.data.openid;
          Sygame.real_openid = ret.data.real_openid;
          // 点击取消
          if (ret.data.jump_mandatory_number > 0) {
            var time = new Date(new Date().toLocaleDateString()).getTime() + 3600 * 24 * 1000;
            var loginKey = K[329868] + ret.data.openid;
            Sygame.cookieData({ type: K[300810], key: loginKey, data: loginInfo + 1, expired_at: time });
          }
        } else if (res.cancel) {
          resolve(true);
        } else {
          Sygame.touchNumber += 1;
          wx.onTouchStart(() => {
            Sygame.syDealJumpData(ret);
          });
        }
      }
    });
  }),

  // 封装导包具体跳转方式，这样无论是一次onTouch事件还是多次onTouch事件，都可以在外部调用的时候去使用onTouch，防止代码重复
  syDealJumpData: ret => new Promise(function (resolve, reject) {
    if (ret.data.jump_to) {
      wx.navigateToMiniProgram({
        appId: ret.data.jump_to,
        path: ret.data.jump_path,
        // envVersion: "trial",
        success: () => {
          console.log(K[329893]);
        }
      });
    } else if (ret.data.jump_img) {
      //获取二维码
      wx.previewImage({
        urls: [ret.data.jump_img]
      });
      wx.showModal({
        title: K[329891],
        content: ret.data.jump_tip ? ret.data.jump_tip : K[329892],
        confirmText: K[306993],
        showCancel: false,
        success: () => {
          wx.previewImage({
            urls: [ret.data.jump_img]
          });
        }
      });
    } else if (ret.data.jump_copy) {
      wx.setClipboardData({
        data: ret.data.jump_copy,
        success(res) {
          console.log(K[329894], ret.data); // data
        }
      });
      wx.showModal({
        title: K[329891],
        content: ret.data.jump_tip ? ret.data.jump_tip : K[329892],
        confirmText: K[306993],
        showCancel: false,
        success: () => {
          wx.setClipboardData({
            data: ret.data.jump_copy,
            success(res) {
              console.log(K[329894], ret.data); // data
            }
          });
        }
      });
    } else if (ret.data.jump_copy_apk) {
      wx.setClipboardData({
        data: ret.data.jump_copy_apk,
        success(res) {
          console.log(K[329894], ret.data); // data
        }
      });
      wx.openCustomerServiceConversation({
        sessionFrom: K[329895] + Sygame.appid,
        showMessageCard: true,
        sendMessageImg: K[329896],
        success: () => {
          console.log(K[300273]);
        }
      });
    }
  }),

  // 调起客户端小游戏订阅消息界面
  syGetSubscribe: data => new Promise(function (reslove, reject) {
    wx.requestSubscribeMessage({
      tmplIds: [data.template],
      success: res => {
        console.log(K[329897], res);
        let type = '';
        if (res[data.template] === K[300341]) {
          type = K[300187];
        } else {
          type = K[300189];
        }
        wx.request({
          url: confArr[12],
          data: {
            "openid": Sygame.openid,
            "channel": Sygame.channel,
            "role_id": data.role_id,
            "tpl_type": data.tpl_type,
            "type": type
          },
          method: K[300220],
          dataType: K[306479],
          success: function (res) {
            reslove(res);
          },
          fail: function (e) {
            console.log(K[329883], e);
          }
        });
      },
      fail(err) {
        //失败
        console.error(err);
        reject();
      }
    });
  }),

  // 微信消息内容检测
  syMsgSecCheck: data => new Promise(function (reslove, reject) {
    data.appId = Sygame.appid;
    data.openId = Sygame.real_openid;
    wx.request({
      url: confArr[19],
      data: data,
      method: K[300220],
      success: res => {
        console.log(K[329898], res);
        reslove(res.data);
      },
      fail: res => {
        console.error(res);
        reject();
      }
    });
  }),

  // 微信图片内容检测
  syImgSecCheck: data => new Promise(function (reslove, reject) {
    wx.uploadFile({
      url: confArr[20],
      //小程序本地的路径
      filePath: data,
      //后台获取我们图片的key
      name: K[329899],
      formData: {
        appId: Sygame.appid
      },
      success: function (res) {
        console.log(K[329900], res);
        reslove(res.data);
      },
      fail: function (res) {
        console.error(res);
        reject();
      }
    });
  }),

  // 分享卡片参数信息
  syShareCardInfo: () => new Promise(function (reslove, reject) {
    wx.request({
      url: confArr[21],
      data: {
        appid: Sygame.appid
      },
      method: K[300220],
      success: res => {
        console.log(K[329901], res);
        reslove(res.data);
      },
      fail: res => {
        console.error(res);
        reject();
      }
    });
  }),

  /**
   * 获取侧边栏盒子列表
   */
  syGetBoxList: data => new Promise(function (reslove, reject) {
    wx.request({
      url: confArr[13],
      data: {
        "wecha_id": Sygame.openid,
        "appid": Sygame.appid,
        "page": data.page,
        "count": data.count
      },
      method: K[300220],
      dataType: K[306479],
      success: function (res) {
        console.log(K[329902], res);
        reslove(res);
      },
      fail: function (e) {
        console.log(K[329883], e);
      }
    });
  }),

  /**
   * 用户点击展开盒子事件上报
   */
  syClickOpenBox: () => new Promise(function (reslove, reject) {
    // 判断用户是否点击
    var clickOpenBox = K[329903] + Sygame.openid;
    var isClick = Sygame.cookieData({ type: K[301209], 'key': clickOpenBox });
    var uv = isClick ? 0 : 1;
    wx.request({
      url: confArr[14],
      data: {
        "wecha_id": Sygame.openid,
        "appid": Sygame.appid,
        "uv": uv
      },
      method: K[300220],
      dataType: K[306479],
      success: function (res) {
        if (uv == 1) {
          Sygame.cookieData({ type: K[300810], key: clickOpenBox, data: 1 });
        }
        console.log(K[329904], res.data);
        reslove(res.data);
      },
      fail: function (e) {
        console.log(K[329883], e);
      }
    });
  }),

  /**
   * 用户点击盒子内游戏事件上报
   */
  syClickBox: data => new Promise(function (reslove, reject) {
    // 判断用户是否点击
    var clickBox = K[322844] + data.game_id;
    var isClick = Sygame.cookieData({ type: K[301209], 'key': clickBox });
    var uv = isClick ? 0 : 1;
    wx.request({
      url: confArr[15],
      data: {
        "wecha_id": Sygame.openid,
        "appid": Sygame.appid,
        "uv": uv,
        "game_id": data.game_id,
        "tunnel_id": data.tunnel_id,
        "jump_appid": data.jump_appid,
        "jump_path": data.jump_path
      },
      method: K[300220],
      dataType: K[306479],
      success: function (res) {
        if (uv == 1) {
          Sygame.cookieData({ type: K[300810], key: clickBox, data: 1 });
        }
        console.log(K[329905], res.data);
        reslove(res.data);
      },
      fail: function (e) {
        console.log(K[329883], e);
      }
    });
  }),

  /**
   * 获取分享参数
   * params参数由3部分构成
   */
  getShareData: params => {
    wx.request({
      url: confArr[8],
      data: { appid: Sygame.appid, channel: Sygame.channel },
      method: K[300220],
      dataType: K[306479],
      success: function (res) {
        console.log(K[329906], res);
        if (res.data.status == 1001) {
          console.log(K[329907], res.data.data);
          Sygame.share_data = res.data.data;
        } else {
          if (params) {
            params.errorCallback(res);
          }
          console.log(K[329908], res);
        }
      },
      fail: function (e) {
        console.log(K[329883], e);
      }
    });
  },

  /**
   * 分享
   * params参数由3部分构成
   * type———————-------—1，2，3，4（1:正常分享  2:分数分享  3:助力分享  4:vip分享）
   * shareQuery---------入口参数
   * successCallback----成功分享回调函数
   * errorCallback------失败分享回调函数
   */
  goShareData: params => {
    var arr = Sygame.share_data[params.type];
    var len = arr.length;
    var ranIndex = Math.floor(Math.random() * len);
    var shareData = arr[ranIndex];
    console.log(K[329909], shareData);
    var data = {
      title: shareData.title,
      imageUrlId: shareData.imageUrlId,
      imageUrl: shareData.imageUrl,
      query: params.shareQuery + K[329910] + shareData.id
    };
    console.log(K[329907], shareData);
    wx.shareAppMessage(data);
    params.successCallback(shareData);
  },

  /**
   * 上报分享
   * params.material_id-----素材的id
   * channel
   * appid
   * server_id----------(必填：否)所在区服
   * openid------------（必填，否）当前用户的openid
   * shareQuery--------（必填，否）用户的分享拼接字符串
   */
  upShareData: params => {
    var key = K[329911] + params.material_id;
    var log = Sygame.cookieData({ type: K[301209], 'key': key }) ? 1 : 0; //1-已记录，0-未记录
    if (log == 0) Sygame.cookieData({ type: K[300810], key: key, data: new Date().getTime() });
    params.log = log;
    wx.request({
      url: confArr[9],
      data: params,
      method: K[300220],
      dataType: K[306479],
      success: function (res) {
        console.log(res);
      },
      fail: function (e) {
        console.log(K[329883], e);
      }
    });
  },

  /**
   * 上报点击
   * params.material_id-----素材的id
   * params.channel
   * params.appid
   * params.shareData---(必填：否)入口参数。
   */
  upClickData: params => {
    var key = K[329912] + params.material_id;
    var log = Sygame.cookieData({ type: K[301209], 'key': key }) ? 1 : 0; //1-已记录，0-未记录
    if (log == 0) Sygame.cookieData({ type: K[300810], key: key, data: new Date().getTime() });
    params.log = log;
    wx.request({
      url: confArr[10],
      data: params,
      method: K[300220],
      dataType: K[306479],
      success: function (res) {
        console.log(res);
      },
      fail: function (e) {
        console.log(K[329883], e);
      }
    });
  },

  /**
   * 利用本地存储简单的记录
   * params有4个参数
   *
   * type---可选项，get，set，rm
   * key----键名
   * data---值
   * expired_at——————js的13位毫秒时间戳
   */
  cookieData: params => {
    switch (params.type) {
      case K[301209]:
        var data = wx.getStorageSync(params.key);
        try {
          data = JSON.parse(data);
          if (new Date().getTime() < data.expired_at) {
            return data.data;
          }
        } catch (e) {}
        return false;
        break;
      case K[300810]:
        if (!params.expired_at) {
          params.expired_at = new Date(new Date().toLocaleDateString()).getTime() + 3600 * 24 * 1000 * 3650;
        }
        try {
          wx.setStorageSync(params.key, JSON.stringify({ data: params.data, expired_at: params.expired_at }));
          return true;
        } catch (e) {}
        return false;
        break;
      case 'rm':
        wx.removeStorageSync(params.key);
        return true;
        break;
    }
  },

  /**
   * 长链接统计在线
   */
  syUserLoginRecord: ($wecha_id, $time) => {
    var websocket;
    var time = $time ? $time : 30;
    createWebSocket();
    // ①开启WebSocket
    function createWebSocket() {
      websocket = new WebSocket(SY_CONF[confArr[16]]);
      init();
    }
    // ②初始化WebSocket，并设置定时检测
    function init() {
      // 连接成功
      websocket.onopen = function (evt) {
        var data = {
          'code': 1, // 我们假设code为1时，是登录请求
          'wecha_id': $wecha_id
        };
        // 前端发送json前，必须先转义成字符串
        websocket.send(JSON.stringify(data));
        console.log(K[329913]);
        // 定时请求
        heartCheck.start();
      };
      // 接收Socket断开时的消息通知
      websocket.onclose = function (evt) {
        createWebSocket();
      };
    }
    // ④定时检测
    var heartCheck = {
      timeout: time * 1000,
      timeoutObj: null,
      start: function () {
        this.timeoutObj && clearInterval(this.timeoutObj);
        this.timeoutObj = setInterval(function () {
          // 这里发送一个连接，后端收到后，确定为一次通讯，
          var data = {
            'code': 4, // 我们假设code为4时，为定时检测
            'wecha_id': $wecha_id,
            'timer': time // 通讯间隔
          };
          // 前端发送json前，必须先转义成字符串
          websocket.send(JSON.stringify(data));
          console.log(K[329914]);
        }, this.timeout);
      }
    };
  }

};
export default Sygame;