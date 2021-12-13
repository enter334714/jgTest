var c = wx.$o;
let confArr = ['', c[248962], c[248963], c[248964], c[248965], c[248966], c[248967], c[248968], c[248969], c[248970], c[248971], c[248972], c[248973], c[248974], c[248975], c[248976], c[248977], c[248978], c[248979], c[248980], c[248981], c[248982]];

const SY_CONF = {
  "APP_ID": c[248983],
  "APP_VERSION": c[248984],
  "GAME_KEY": c[248985],
  "offerId": c[248986],
  "commitId": "53"
};
const Sygame = {
  // 初始化
  SY_CONF: SY_CONF,
  appid: '',
  app_version: c[248987],
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
    Sygame.offerId = SY_CONF[c[248988]];
    Sygame.scene = data.scene;
    Sygame.commit_id = SY_CONF[c[248989]];
    Sygame.touchNumber = 0;
    Sygame.jumpVersion = 0;
    console.log(c[248990], Sygame);
    let queryData = {
      query: data.query
    };
    //获取该游戏是否开启获取剪切板功能
    wx.request({
      url: confArr[17],
      data: { appid: Sygame.appid },
      method: c[248310],
      success: res => {
        console.log(c[248991], res);
        if (res.data.is_open_clipboard) {
          //获取剪切板内的信息
          wx.getClipboardData({
            success(res) {
              if (res.data) {
                Sygame.clipboard = res.data;
              }
              console.log(c[248992], res);
            }
          });
        }
        // +1 click
        wx.request({
          url: confArr[7],
          data: queryData,
          method: c[248310],
          success: res => {
            console.log(c[248993], res);
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
      console.log(c[248994], shareData);
      var data = {
        title: shareData.title,
        imageUrlId: shareData.imageUrlId,
        imageUrl: shareData.imageUrl
      };
      console.log(c[248995], shareData);
      return data;
    });
  },
  // 游戏登录
  syLogin: () => new Promise(function (resolve, reject) {
    // 发起登陆请求
    wx.login({
      success(res) {
        console.log(c[248996], res);
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
              console.log(c[248997], ret);
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
                  var loginKey = c[248998] + ret.data.openid;
                  loginInfo = Sygame.cookieData({ type: c[220451], 'key': loginKey });
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
                  title: c[248999],
                  content: ret.data.game_tip ? ret.data.game_tip : c[249000],
                  confirmText: c[226311],
                  showCancel: false,
                  success: () => {
                    console.log(c[249001], ret);
                  }
                });
                wx.onTouchStart(() => {
                  wx.showModal({
                    title: c[248999],
                    content: ret.data.game_tip ? ret.data.game_tip : c[249000],
                    confirmText: c[226311],
                    showCancel: false,
                    success: () => {
                      console.log(c[249001], ret);
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
        console.log(c[245030]);
      }
    });
  }),

  // 创角，进入游戏，用户升级等接口
  syReportRoleInfo: data => new Promise(function (resolve, reject) {
    if (typeof data === c[220276]) {
      let url = confArr[3];
      if (data.role_id && typeof data.role_id !== c[248479]) Sygame.role_id = data.role_id;
      if (data.role_name && typeof data.role_name !== c[248479]) Sygame.role_name = data.role_name;
      if (data.server_id && typeof data.server_id !== c[248479]) Sygame.server_id = data.server_id;
      if (data.server_name && typeof data.server_name !== c[248479]) Sygame.server_name = data.server_name;
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
        method: c[248310],
        success: res => {
          console.log(c[249002], res);
          if (res.data.is_gs_login) {
            Sygame.syUserLoginRecord(Sygame.openid, res.data.request_time);
          }
          resolve(res.data);
        }
      });
    } else {
      return c[249003];
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
    if (typeof data == c[220276]) {
      data.openid = Sygame.openid;
      data.real_openid = Sygame.real_openid;
      data.appid = Sygame.appid;
      data.channel = Sygame.channel;
      data.version = Sygame.app_version;
      data.is_buckle_pay = 0;
      wx.request({
        url: url,
        method: c[248310],
        data: data,
        success: function (res) {
          console.log(c[249004], res);
          // 后台配置支付参数
          switch (res.data.payType) {
            case "1":
              //米大师余额支付
              if (res.data.can_use_balance == 1) {
                wx.showModal({
                  title: c[249005],
                  content: res.data.midas_pay_tip,
                  confirmText: c[226311],
                  showCancel: c[229309],
                  success: ret => {
                    if (ret.confirm) {
                      data.is_buckle_pay = 1;
                      Sygame.syDescMidasCoin(data);
                    } else {
                      console.log(c[248292]);
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
                title: c[249006],
                content: c[249007],
                confirmText: c[249008],
                showCancel: false,
                success: ret => {
                  if (ret.confirm) {
                    wx.openCustomerServiceConversation({
                      sessionFrom: c[249009] + res.data.payId,
                      showMessageCard: true,
                      sendMessageImg: c[249010],
                      success: () => {
                        console.log(c[229730]);
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
      reject(c[249011]);
    }
  }),

  //通知米大师扣除余额发货接口
  syDescMidasCoin: data => {
    wx.request({
      url: confArr[11],
      data: data,
      method: c[248310],
      dataType: c[225801],
      success: function (res) {
        console.log(c[249012], res);
        wx.showModal({
          title: c[226309],
          content: res.data.tip,
          confirmText: c[226311],
          showCancel: c[229309],
          success: ret => {
            if (ret.confirm) {}
          }
        });
      },
      fail: function (e) {
        console.log(c[249013], e);
      }
    });
  },

  syMidasPay: data => {
    wx.requestMidasPayment({
      mode: c[249014],
      env: 0,
      offerId: Sygame.offerId,
      currencyType: c[249015],
      buyQuantity: data.product_price * 100,
      platform: c[248031],
      zoneId: 1,
      success(res) {
        Sygame.syDescMidasCoin(data);
        console.log(c[249016], res);
      },
      fail(res) {
        console.log(res);
      },
      complete(res) {
        console.log(res);
      }
    });
  },

  // 绑定手机
  syBindMobile: data => new Promise(function (reslove, reject) {
    let channel = Sygame.channel;
    let openid = Sygame.openid;
    wx.openCustomerServiceConversation({
      sessionFrom: c[249017] + openid,
      success: () => {
        console.log(c[249018]);
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
      method: c[248310],
      success: ret => {
        console.log(c[249019], ret);
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
      title: ret.data.jump_title_tip ? ret.data.jump_title_tip : c[249020],
      content: ret.data.jump_tip ? ret.data.jump_tip.replace(/\\n/g, '\n') : c[249021],
      confirmText: ret.data.jump_button_tip ? ret.data.jump_button_tip : c[226311],
      cancelText: ret.data.jump_cancel_tip ? ret.data.jump_cancel_tip : c[229309],
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
            var loginKey = c[248998] + ret.data.openid;
            Sygame.cookieData({ type: c[220018], key: loginKey, data: loginInfo + 1, expired_at: time });
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
          console.log(c[249022]);
        }
      });
    } else if (ret.data.jump_img) {
      //获取二维码
      wx.previewImage({
        urls: [ret.data.jump_img]
      });
      wx.showModal({
        title: c[249020],
        content: ret.data.jump_tip ? ret.data.jump_tip : c[249021],
        confirmText: c[226311],
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
          console.log(c[249023], ret.data); // data
        }
      });
      wx.showModal({
        title: c[249020],
        content: ret.data.jump_tip ? ret.data.jump_tip : c[249021],
        confirmText: c[226311],
        showCancel: false,
        success: () => {
          wx.setClipboardData({
            data: ret.data.jump_copy,
            success(res) {
              console.log(c[249023], ret.data); // data
            }
          });
        }
      });
    } else if (ret.data.jump_copy_apk) {
      wx.setClipboardData({
        data: ret.data.jump_copy_apk,
        success(res) {
          console.log(c[249023], ret.data); // data
        }
      });
      wx.openCustomerServiceConversation({
        sessionFrom: c[249024] + Sygame.appid,
        showMessageCard: true,
        sendMessageImg: c[249025],
        success: () => {
          console.log(c[229730]);
        }
      });
    }
  }),

  // 调起客户端小游戏订阅消息界面
  syGetSubscribe: data => new Promise(function (reslove, reject) {
    wx.requestSubscribeMessage({
      tmplIds: [data.template],
      success: res => {
        console.log(c[249026], res);
        let type = '';
        if (res[data.template] === c[248405]) {
          type = c[248290];
        } else {
          type = c[220543];
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
          method: c[248310],
          dataType: c[225801],
          success: function (res) {
            reslove(res);
          },
          fail: function (e) {
            console.log(c[249013], e);
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
      method: c[248310],
      success: res => {
        console.log(c[249027], res);
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
      name: c[249028],
      formData: {
        appId: Sygame.appid
      },
      success: function (res) {
        console.log(c[249029], res);
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
      method: c[248310],
      success: res => {
        console.log(c[249030], res);
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
      method: c[248310],
      dataType: c[225801],
      success: function (res) {
        console.log(c[249031], res);
        reslove(res);
      },
      fail: function (e) {
        console.log(c[249013], e);
      }
    });
  }),

  /**
   * 用户点击展开盒子事件上报
   */
  syClickOpenBox: () => new Promise(function (reslove, reject) {
    // 判断用户是否点击
    var clickOpenBox = c[249032] + Sygame.openid;
    var isClick = Sygame.cookieData({ type: c[220451], 'key': clickOpenBox });
    var uv = isClick ? 0 : 1;
    wx.request({
      url: confArr[14],
      data: {
        "wecha_id": Sygame.openid,
        "appid": Sygame.appid,
        "uv": uv
      },
      method: c[248310],
      dataType: c[225801],
      success: function (res) {
        if (uv == 1) {
          Sygame.cookieData({ type: c[220018], key: clickOpenBox, data: 1 });
        }
        console.log(c[249033], res.data);
        reslove(res.data);
      },
      fail: function (e) {
        console.log(c[249013], e);
      }
    });
  }),

  /**
   * 用户点击盒子内游戏事件上报
   */
  syClickBox: data => new Promise(function (reslove, reject) {
    // 判断用户是否点击
    var clickBox = c[242021] + data.game_id;
    var isClick = Sygame.cookieData({ type: c[220451], 'key': clickBox });
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
      method: c[248310],
      dataType: c[225801],
      success: function (res) {
        if (uv == 1) {
          Sygame.cookieData({ type: c[220018], key: clickBox, data: 1 });
        }
        console.log(c[249034], res.data);
        reslove(res.data);
      },
      fail: function (e) {
        console.log(c[249013], e);
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
      method: c[248310],
      dataType: c[225801],
      success: function (res) {
        console.log(c[249035], res);
        if (res.data.status == 1001) {
          console.log(c[249036], res.data.data);
          Sygame.share_data = res.data.data;
        } else {
          params && params.errorCallback && params.errorCallback(res);
          console.log(c[249037], res);
        }
      },
      fail: function (e) {
        console.log(c[249013], e);
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
    console.log(c[249038], shareData);
    var data = {
      title: shareData.title,
      imageUrlId: shareData.imageUrlId,
      imageUrl: shareData.imageUrl,
      query: params.shareQuery + c[249039] + shareData.id
    };
    console.log(c[249036], shareData);
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
    var key = c[249040] + params.material_id;
    var log = Sygame.cookieData({ type: c[220451], 'key': key }) ? 1 : 0; //1-已记录，0-未记录
    if (log == 0) Sygame.cookieData({ type: c[220018], key: key, data: new Date().getTime() });
    params.log = log;
    wx.request({
      url: confArr[9],
      data: params,
      method: c[248310],
      dataType: c[225801],
      success: function (res) {
        console.log(res);
      },
      fail: function (e) {
        console.log(c[249013], e);
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
    var key = c[249041] + params.material_id;
    var log = Sygame.cookieData({ type: c[220451], 'key': key }) ? 1 : 0; //1-已记录，0-未记录
    if (log == 0) Sygame.cookieData({ type: c[220018], key: key, data: new Date().getTime() });
    params.log = log;
    wx.request({
      url: confArr[10],
      data: params,
      method: c[248310],
      dataType: c[225801],
      success: function (res) {
        console.log(res);
      },
      fail: function (e) {
        console.log(c[249013], e);
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
      case c[220451]:
        var data = wx.getStorageSync(params.key);
        try {
          data = JSON.parse(data);
          if (new Date().getTime() < data.expired_at) {
            return data.data;
          }
        } catch (e) {}
        return false;
        break;
      case c[220018]:
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
        console.log(c[249042]);
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
          console.log(c[249043]);
        }, this.timeout);
      }
    };
  }

};
export default Sygame;