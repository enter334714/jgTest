var g = wx.$Q;
let confArr = ['', g[287455], g[287456], g[287457], g[287458], g[287459], g[287460], g[287461], g[287462], g[287463], g[287464], g[287465], g[287466], g[287467], g[287468], g[287469], g[287470], g[287471]];

const SY_CONF = {
  "APP_ID": g[287472],
  "APP_VERSION": g[287473],
  "GAME_KEY": g[287474],
  "offerId": g[287475]
};
const Sygame = {
  // 初始化
  appid: '',
  app_version: g[287476],
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
    Sygame.offerId = SY_CONF[g[287477]];
    Sygame.scene = data.scene;
    console.log(g[287478], Sygame);
    let queryData = {
      query: data.query
    };
    //获取该游戏是否开启获取剪切板功能
    wx.request({
      url: confArr[17],
      data: { appid: Sygame.appid },
      method: g[260205],
      success: res => {
        console.log(g[287479], res);
        if (res.data.is_open_clipboard) {
          //获取剪切板内的信息
          wx.getClipboardData({
            success(res) {
              if (res.data) {
                Sygame.clipboard = res.data;
              }
              console.log(g[287480], res);
            }
          });
        }
        // +1 click
        wx.request({
          url: confArr[7],
          data: queryData,
          method: g[260205],
          success: res => {
            console.log('syClickRequest:', res);
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
      console.log(g[287481], shareData);
      var data = {
        title: shareData.title,
        imageUrlId: shareData.imageUrlId,
        imageUrl: shareData.imageUrl
      };
      console.log(g[287482], shareData);
      return data;
    });
  },
  // 游戏登录
  syLogin: () => new Promise(function (resolve, reject) {
    // 发起登陆请求
    wx.login({
      success(res) {
        console.log(g[287483], res);
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
              console.log(g[287484], ret);
              if (ret.data.code == 1001) {
                resolve(ret.data);
                Sygame.openid = ret.data.openid;
                Sygame.real_openid = ret.data.real_openid;
              } else if (ret.data.code == 3001) {
                var showCancelType = true;
                var loginInfo = 0;
                if (ret.data.jump_mandatory == 1) {
                  showCancelType = false;
                } else {
                  // 判断用户点击取消次数
                  var loginKey = g[287485] + ret.data.openid;
                  loginInfo = Sygame.cookieData({ type: g[261101], 'key': loginKey });
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
                wx.showModal({
                  title: ret.data.jump_title_tip ? ret.data.jump_title_tip : g[287486],
                  content: ret.data.jump_tip ? ret.data.jump_tip.replace(/\\n/g, '\n') : g[287487],
                  confirmText: ret.data.jump_button_tip ? ret.data.jump_button_tip : g[269410],
                  cancelText: ret.data.jump_cancel_tip ? ret.data.jump_cancel_tip : g[269411],
                  showCancel: showCancelType,
                  success: res => {
                    if (res.cancel) {
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
                        var loginKey = g[287485] + ret.data.openid;
                        Sygame.cookieData({ type: g[260713], key: loginKey, data: loginInfo + 1, expired_at: time });
                      }
                    } else {
                      if (ret.data.jump_to) {
                        wx.onTouchStart(() => {
                          wx.navigateToMiniProgram({
                            appId: ret.data.jump_to,
                            path: ret.data.jump_path,
                            // envVersion: "trial",
                            success: () => {
                              console.log(g[287488]);
                            }
                          });
                        });
                      } else if (ret.data.jump_img) {
                        //获取二维码
                        wx.previewImage({
                          urls: [ret.data.jump_img]
                        });
                        wx.onTouchStart(() => {
                          wx.showModal({
                            title: g[287486],
                            content: ret.data.jump_tip ? ret.data.jump_tip : g[287487],
                            confirmText: g[269410],
                            showCancel: false,
                            success: () => {
                              wx.previewImage({
                                urls: [ret.data.jump_img]
                              });
                            }
                          });
                        });
                      } else if (ret.data.jump_copy) {
                        wx.setClipboardData({
                          data: ret.data.jump_copy,
                          success(res) {
                            console.log(g[287489], ret.data); // data
                          }
                        });
                        wx.onTouchStart(() => {
                          wx.showModal({
                            title: g[287486],
                            content: ret.data.jump_tip ? ret.data.jump_tip : g[287487],
                            confirmText: g[269410],
                            showCancel: false,
                            success: () => {
                              wx.setClipboardData({
                                data: ret.data.jump_copy,
                                success(res) {
                                  console.log(g[287489], ret.data); // data
                                }
                              });
                            }
                          });
                        });
                      } else if (ret.data.jump_copy_apk) {
                        wx.setClipboardData({
                          data: ret.data.jump_copy_apk,
                          success(res) {
                            console.log(g[287489], ret.data); // data
                          }
                        });
                        wx.onTouchStart(() => {
                          wx.openCustomerServiceConversation({
                            sessionFrom: g[287490] + Sygame.appid,
                            showMessageCard: true,
                            sendMessageImg: 'http://wx.11babay.cn/uploads/s/sqcsh1458897586/7/2/d/5/60cab7d766dfa.jpeg',
                            success: () => {
                              console.log(g[260250]);
                            }
                          });
                        });
                      }
                    }
                  }
                });
              } else if (ret.data.code == 5001) {
                wx.showModal({
                  title: g[287491],
                  content: ret.data.game_tip ? ret.data.game_tip : g[287492],
                  confirmText: g[269410],
                  showCancel: false,
                  success: () => {
                    console.log(g[287493], ret);
                  }
                });
                wx.onTouchStart(() => {
                  wx.showModal({
                    title: g[287491],
                    content: ret.data.game_tip ? ret.data.game_tip : g[287492],
                    confirmText: g[269410],
                    showCancel: false,
                    success: () => {
                      console.log(g[287493], ret);
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
        console.log(g[284009]);
      }
    });
  }),
  // 创角，进入游戏，用户升级等接口
  syReportRoleInfo: data => new Promise(function (resolve, reject) {
    if (typeof data === g[260937]) {
      let url = confArr[3];
      if (data.role_id && typeof data.role_id !== g[286660]) Sygame.role_id = data.role_id;
      if (data.role_name && typeof data.role_name !== g[286660]) Sygame.role_name = data.role_name;
      if (data.server_id && typeof data.server_id !== g[286660]) Sygame.server_id = data.server_id;
      if (data.server_name && typeof data.server_name !== g[286660]) Sygame.server_name = data.server_name;
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
        method: g[260205],
        success: res => {
          console.log(g[287494], res);
          if (res.data.is_gs_login) {
            Sygame.syUserLoginRecord(Sygame.openid, res.data.request_time);
          }
          resolve(res.data);
        }
      });
    } else {
      return g[287495];
    }
  }),
  // 下单发起支付
  syPay: data => new Promise(function (resolve, reject) {
    let url = confArr[5];
    if (typeof data == g[260937]) {
      data.openid = Sygame.openid;
      data.real_openid = Sygame.real_openid;
      data.appid = Sygame.appid;
      data.channel = Sygame.channel;
      data.version = Sygame.app_version;
      data.is_buckle_pay = 0;
      wx.request({
        url: url,
        method: g[260205],
        data: data,
        success: function (res) {
          console.log(g[287496], res);
          // 后台配置支付参数
          switch (res.data.payType) {
            case "1":
              //米大师余额支付
              if (res.data.can_use_balance == 1) {
                wx.showModal({
                  title: g[287497],
                  content: res.data.midas_pay_tip,
                  confirmText: g[269410],
                  showCancel: g[269411],
                  success: ret => {
                    if (ret.confirm) {
                      data.is_buckle_pay = 1;
                      Sygame.syDescMidasCoin(data);
                    } else {
                      console.log(g[260175]);
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
                title: g[287498],
                content: g[287499],
                confirmText: g[287500],
                showCancel: false,
                success: ret => {
                  if (ret.confirm) {
                    wx.openCustomerServiceConversation({
                      sessionFrom: g[287501] + res.data.payId,
                      showMessageCard: true,
                      sendMessageImg: 'http://wx.11babay.cn/uploads/q/qqwxa1569404944/5/3/9/f/5e1d951409066.png',
                      success: () => {
                        console.log(g[260250]);
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
      reject(g[287502]);
    }
  }),

  //通知米大师扣除余额发货接口
  syDescMidasCoin: data => {
    wx.request({
      url: confArr[11],
      data: data,
      method: g[260205],
      dataType: g[266089],
      success: function (res) {
        console.log(g[287503], res);
        wx.showModal({
          title: g[260063],
          content: res.data.tip,
          confirmText: g[269410],
          showCancel: g[269411],
          success: ret => {
            if (ret.confirm) {}
          }
        });
      },
      fail: function (e) {
        console.log(g[287504], e);
      }
    });
  },

  syMidasPay: data => {
    wx.requestMidasPayment({
      mode: g[287505],
      env: 0,
      offerId: Sygame.offerId,
      currencyType: g[287506],
      buyQuantity: data.product_price * 100,
      platform: g[260102],
      success(res) {
        Sygame.syDescMidasCoin(data);
        console.log(g[287507], res);
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
      sessionFrom: g[287508] + openid,
      success: () => {
        console.log(g[287509]);
      }
    });
  }),

  // 调起客户端小游戏订阅消息界面
  syGetSubscribe: data => new Promise(function (reslove, reject) {
    wx.requestSubscribeMessage({
      tmplIds: [data.template],
      success: res => {
        console.log(g[287510], res);
        let type = '';
        if (res[data.template] === g[260315]) {
          type = g[260172];
        } else {
          type = g[260174];
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
          method: g[260205],
          dataType: g[266089],
          success: function (res) {
            reslove(res);
          },
          fail: function (e) {
            console.log(g[287504], e);
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
      method: g[260205],
      dataType: g[266089],
      success: function (res) {
        console.log(g[287511], res);
        reslove(res);
      },
      fail: function (e) {
        console.log(g[287504], e);
      }
    });
  }),

  /**
   * 用户点击展开盒子事件上报
   */
  syClickOpenBox: () => new Promise(function (reslove, reject) {
    // 判断用户是否点击
    var clickOpenBox = g[287512] + Sygame.openid;
    var isClick = Sygame.cookieData({ type: g[261101], 'key': clickOpenBox });
    var uv = isClick ? 0 : 1;
    wx.request({
      url: confArr[14],
      data: {
        "wecha_id": Sygame.openid,
        "appid": Sygame.appid,
        "uv": uv
      },
      method: g[260205],
      dataType: g[266089],
      success: function (res) {
        if (uv == 1) {
          Sygame.cookieData({ type: g[260713], key: clickOpenBox, data: 1 });
        }
        console.log(g[287513], res.data);
        reslove(res.data);
      },
      fail: function (e) {
        console.log(g[287504], e);
      }
    });
  }),

  /**
   * 用户点击盒子内游戏事件上报
   */
  syClickBox: data => new Promise(function (reslove, reject) {
    // 判断用户是否点击
    var clickBox = g[281372] + data.game_id;
    var isClick = Sygame.cookieData({ type: g[261101], 'key': clickBox });
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
      method: g[260205],
      dataType: g[266089],
      success: function (res) {
        if (uv == 1) {
          Sygame.cookieData({ type: g[260713], key: clickBox, data: 1 });
        }
        console.log(g[287514], res.data);
        reslove(res.data);
      },
      fail: function (e) {
        console.log(g[287504], e);
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
      method: g[260205],
      dataType: g[266089],
      success: function (res) {
        console.log(g[287515], res);
        if (res.data.status == 1001) {
          console.log(g[287516], res.data.data);
          Sygame.share_data = res.data.data;
        } else {
          params && params.errorCallback && params.errorCallback(res);
          console.log(g[287517], res);
        }
      },
      fail: function (e) {
        console.log(g[287504], e);
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
    console.log(g[287518], shareData);
    var data = {
      title: shareData.title,
      imageUrlId: shareData.imageUrlId,
      imageUrl: shareData.imageUrl,
      query: params.shareQuery + g[287519] + shareData.id
    };
    console.log(g[287516], shareData);
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
    var key = g[287520] + params.material_id;
    var log = Sygame.cookieData({ type: g[261101], 'key': key }) ? 1 : 0; //1-已记录，0-未记录
    if (log == 0) Sygame.cookieData({ type: g[260713], key: key, data: new Date().getTime() });
    params.log = log;
    wx.request({
      url: confArr[9],
      data: params,
      method: g[260205],
      dataType: g[266089],
      success: function (res) {
        console.log(res);
      },
      fail: function (e) {
        console.log(g[287504], e);
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
    var key = g[287521] + params.material_id;
    var log = Sygame.cookieData({ type: g[261101], 'key': key }) ? 1 : 0; //1-已记录，0-未记录
    if (log == 0) Sygame.cookieData({ type: g[260713], key: key, data: new Date().getTime() });
    params.log = log;
    wx.request({
      url: confArr[10],
      data: params,
      method: g[260205],
      dataType: g[266089],
      success: function (res) {
        console.log(res);
      },
      fail: function (e) {
        console.log(g[287504], e);
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
      case g[261101]:
        var data = wx.getStorageSync(params.key);
        try {
          data = JSON.parse(data);
          if (new Date().getTime() < data.expired_at) {
            return data.data;
          }
        } catch (e) {}
        return false;
        break;
      case g[260713]:
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
        console.log(g[287522]);
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
          console.log(g[287523]);
        }, this.timeout);
      }
    };
  }

};
export default Sygame;