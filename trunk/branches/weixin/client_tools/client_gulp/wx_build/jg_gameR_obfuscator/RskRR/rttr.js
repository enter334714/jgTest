var i = wx.$R;
let confArr = ['', i[298786], 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=login', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportRoleInfo', i[298787], 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=canPay', i[298788], 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=setTunnelClick', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getMaterials', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportShare', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportClick', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=descMidasCoin', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=send_tpl_msg', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=get_box_list', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=open_box', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=click_box', 'wss://ws.docater1.cn', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getOpenClipboard'];

const SY_CONF = {
  "APP_ID": i[298789],
  "APP_VERSION": i[298790],
  "GAME_KEY": i[298791],
  "offerId": i[298792]
};
const Sygame = {
  // 初始化
  appid: '',
  app_version: i[298793],
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
    Sygame.offerId = SY_CONF['offerId'];
    Sygame.scene = data.scene;
    console.log(i[298794], Sygame);
    let queryData = {
      query: data.query
    };
    //获取该游戏是否开启获取剪切板功能
    wx.request({
      url: confArr[17],
      data: { appid: Sygame.appid },
      method: i[280138],
      success: res => {
        console.log('getIsOpenClipboard:', res);
        if (res.data.is_open_clipboard) {
          //获取剪切板内的信息
          wx.getClipboardData({
            success(res) {
              if (res.data) {
                Sygame.clipboard = res.data;
              }
              console.log("syGetClipboardData:", res);
            }
          });
        }
        // +1 click
        wx.request({
          url: confArr[7],
          data: queryData,
          method: i[280138],
          success: res => {
            console.log(i[298795], res);
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
      console.log(i[298796], shareData);
      var data = {
        title: shareData.title,
        imageUrlId: shareData.imageUrlId,
        imageUrl: shareData.imageUrl
      };
      console.log("syShareInit:", shareData);
      return data;
    });
  },
  // 游戏登录
  syLogin: () => new Promise(function (resolve, reject) {
    // 发起登陆请求
    wx.login({
      success(res) {
        console.log(i[298797], res);
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
              console.log(i[298798], ret);
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
                  var loginKey = i[298799] + ret.data.openid;
                  loginInfo = Sygame.cookieData({ type: i[280661], 'key': loginKey });
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
                  title: ret.data.jump_title_tip ? ret.data.jump_title_tip : i[298800],
                  content: ret.data.jump_tip ? ret.data.jump_tip.replace(/\\n/g, '\n') : i[298801],
                  confirmText: ret.data.jump_button_tip ? ret.data.jump_button_tip : i[285935],
                  cancelText: ret.data.jump_cancel_tip ? ret.data.jump_cancel_tip : i[285936],
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
                        var loginKey = i[298799] + ret.data.openid;
                        Sygame.cookieData({ type: i[280451], key: loginKey, data: loginInfo + 1, expired_at: time });
                      }
                    } else {
                      if (ret.data.jump_to) {
                        wx.onTouchStart(() => {
                          wx.navigateToMiniProgram({
                            appId: ret.data.jump_to,
                            path: ret.data.jump_path,
                            // envVersion: "trial",
                            success: () => {
                              console.log('syForceJump:success');
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
                            title: i[298800],
                            content: ret.data.jump_tip ? ret.data.jump_tip : i[298801],
                            confirmText: i[285935],
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
                            console.log(i[298802], ret.data); // data
                          }
                        });
                        wx.onTouchStart(() => {
                          wx.showModal({
                            title: i[298800],
                            content: ret.data.jump_tip ? ret.data.jump_tip : i[298801],
                            confirmText: i[285935],
                            showCancel: false,
                            success: () => {
                              wx.setClipboardData({
                                data: ret.data.jump_copy,
                                success(res) {
                                  console.log(i[298802], ret.data); // data
                                }
                              });
                            }
                          });
                        });
                      } else if (ret.data.jump_copy_apk) {
                        wx.setClipboardData({
                          data: ret.data.jump_copy_apk,
                          success(res) {
                            console.log(i[298802], ret.data); // data
                          }
                        });
                        wx.onTouchStart(() => {
                          wx.openCustomerServiceConversation({
                            sessionFrom: i[298803] + Sygame.appid,
                            showMessageCard: true,
                            sendMessageImg: i[298804],
                            success: () => {
                              console.log(i[280175]);
                            }
                          });
                        });
                      }
                    }
                  }
                });
              } else if (ret.data.code == 5001) {
                wx.showModal({
                  title: i[298805],
                  content: ret.data.game_tip ? ret.data.game_tip : i[298806],
                  confirmText: i[285935],
                  showCancel: false,
                  success: () => {
                    console.log(i[298807], ret);
                  }
                });
                wx.onTouchStart(() => {
                  wx.showModal({
                    title: i[298805],
                    content: ret.data.game_tip ? ret.data.game_tip : i[298806],
                    confirmText: i[285935],
                    showCancel: false,
                    success: () => {
                      console.log(i[298807], ret);
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
        console.log(i[296302]);
      }
    });
  }),
  // 创角，进入游戏，用户升级等接口
  syReportRoleInfo: data => new Promise(function (resolve, reject) {
    if (typeof data === i[280572]) {
      let url = confArr[3];
      if (data.role_id && typeof data.role_id !== i[298192]) Sygame.role_id = data.role_id;
      if (data.role_name && typeof data.role_name !== i[298192]) Sygame.role_name = data.role_name;
      if (data.server_id && typeof data.server_id !== i[298192]) Sygame.server_id = data.server_id;
      if (data.server_name && typeof data.server_name !== i[298192]) Sygame.server_name = data.server_name;
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
        method: i[280138],
        success: res => {
          console.log("syReportRoleInfo:", res);
          if (res.data.is_gs_login) {
            Sygame.syUserLoginRecord(Sygame.openid, res.data.request_time);
          }
          resolve(res.data);
        }
      });
    } else {
      return i[298808];
    }
  }),
  // 下单发起支付
  syPay: data => new Promise(function (resolve, reject) {
    let url = confArr[5];
    if (typeof data == i[280572]) {
      data.openid = Sygame.openid;
      data.real_openid = Sygame.real_openid;
      data.appid = Sygame.appid;
      data.channel = Sygame.channel;
      data.version = Sygame.app_version;
      data.is_buckle_pay = 0;
      wx.request({
        url: url,
        method: i[280138],
        data: data,
        success: function (res) {
          console.log(i[298809], res);
          // 后台配置支付参数
          switch (res.data.payType) {
            case "1":
              //米大师余额支付
              if (res.data.can_use_balance == 1) {
                wx.showModal({
                  title: i[298810],
                  content: res.data.midas_pay_tip,
                  confirmText: i[285935],
                  showCancel: i[285936],
                  success: ret => {
                    if (ret.confirm) {
                      data.is_buckle_pay = 1;
                      Sygame.syDescMidasCoin(data);
                    } else {
                      console.log(i[280120]);
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
                title: i[298811],
                content: i[298812],
                confirmText: i[298813],
                showCancel: false,
                success: ret => {
                  if (ret.confirm) {
                    wx.openCustomerServiceConversation({
                      sessionFrom: i[298814] + res.data.payId,
                      showMessageCard: true,
                      sendMessageImg: i[298815],
                      success: () => {
                        console.log(i[280175]);
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
      reject(i[298816]);
    }
  }),

  //通知米大师扣除余额发货接口
  syDescMidasCoin: data => {
    wx.request({
      url: confArr[11],
      data: data,
      method: i[280138],
      dataType: i[283501],
      success: function (res) {
        console.log(i[298817], res);
        wx.showModal({
          title: i[280040],
          content: res.data.tip,
          confirmText: i[285935],
          showCancel: i[285936],
          success: ret => {
            if (ret.confirm) {}
          }
        });
      },
      fail: function (e) {
        console.log(i[298818], e);
      }
    });
  },

  syMidasPay: data => {
    wx.requestMidasPayment({
      mode: i[298819],
      env: 0,
      offerId: Sygame.offerId,
      currencyType: i[298820],
      buyQuantity: data.product_price * 100,
      platform: 'android',
      success(res) {
        Sygame.syDescMidasCoin(data);
        console.log(i[298821], res);
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
      sessionFrom: i[298822] + openid,
      success: () => {
        console.log(i[298823]);
      }
    });
  }),

  // 调起客户端小游戏订阅消息界面
  syGetSubscribe: data => new Promise(function (reslove, reject) {
    wx.requestSubscribeMessage({
      tmplIds: [data.template],
      success: res => {
        console.log('syGetSubscribe: ', res);
        let type = '';
        if (res[data.template] === i[280201]) {
          type = 'confirm';
        } else {
          type = i[280119];
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
          method: i[280138],
          dataType: i[283501],
          success: function (res) {
            reslove(res);
          },
          fail: function (e) {
            console.log(i[298818], e);
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
      method: i[280138],
      dataType: i[283501],
      success: function (res) {
        console.log(i[298824], res);
        reslove(res);
      },
      fail: function (e) {
        console.log(i[298818], e);
      }
    });
  }),

  /**
   * 用户点击展开盒子事件上报
   */
  syClickOpenBox: () => new Promise(function (reslove, reject) {
    // 判断用户是否点击
    var clickOpenBox = i[298825] + Sygame.openid;
    var isClick = Sygame.cookieData({ type: i[280661], 'key': clickOpenBox });
    var uv = isClick ? 0 : 1;
    wx.request({
      url: confArr[14],
      data: {
        "wecha_id": Sygame.openid,
        "appid": Sygame.appid,
        "uv": uv
      },
      method: i[280138],
      dataType: i[283501],
      success: function (res) {
        if (uv == 1) {
          Sygame.cookieData({ type: i[280451], key: clickOpenBox, data: 1 });
        }
        console.log(i[298826], res.data);
        reslove(res.data);
      },
      fail: function (e) {
        console.log(i[298818], e);
      }
    });
  }),

  /**
   * 用户点击盒子内游戏事件上报
   */
  syClickBox: data => new Promise(function (reslove, reject) {
    // 判断用户是否点击
    var clickBox = i[294570] + data.game_id;
    var isClick = Sygame.cookieData({ type: i[280661], 'key': clickBox });
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
      method: i[280138],
      dataType: i[283501],
      success: function (res) {
        if (uv == 1) {
          Sygame.cookieData({ type: i[280451], key: clickBox, data: 1 });
        }
        console.log(i[298827], res.data);
        reslove(res.data);
      },
      fail: function (e) {
        console.log(i[298818], e);
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
      method: i[280138],
      dataType: i[283501],
      success: function (res) {
        console.log("getShareData:", res);
        if (res.data.status == 1001) {
          console.log(i[298828], res.data.data);
          Sygame.share_data = res.data.data;
        } else {
          params && params.errorCallback && params.errorCallback(res);
          console.log("盛也share失败", res);
        }
      },
      fail: function (e) {
        console.log(i[298818], e);
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
    console.log("盛也share数据", shareData);
    var data = {
      title: shareData.title,
      imageUrlId: shareData.imageUrlId,
      imageUrl: shareData.imageUrl,
      query: params.shareQuery + "&share_material_id=" + shareData.id
    };
    console.log(i[298828], shareData);
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
    var key = "sy_share_material:" + params.material_id;
    var log = Sygame.cookieData({ type: i[280661], 'key': key }) ? 1 : 0; //1-已记录，0-未记录
    if (log == 0) Sygame.cookieData({ type: i[280451], key: key, data: new Date().getTime() });
    params.log = log;
    wx.request({
      url: confArr[9],
      data: params,
      method: i[280138],
      dataType: i[283501],
      success: function (res) {
        console.log(res);
      },
      fail: function (e) {
        console.log(i[298818], e);
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
    var key = "sy_click_material:" + params.material_id;
    var log = Sygame.cookieData({ type: i[280661], 'key': key }) ? 1 : 0; //1-已记录，0-未记录
    if (log == 0) Sygame.cookieData({ type: i[280451], key: key, data: new Date().getTime() });
    params.log = log;
    wx.request({
      url: confArr[10],
      data: params,
      method: i[280138],
      dataType: i[283501],
      success: function (res) {
        console.log(res);
      },
      fail: function (e) {
        console.log(i[298818], e);
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
      case i[280661]:
        var data = wx.getStorageSync(params.key);
        try {
          data = JSON.parse(data);
          if (new Date().getTime() < data.expired_at) {
            return data.data;
          }
        } catch (e) {}
        return false;
        break;
      case i[280451]:
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
        console.log(i[298829]);
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
          console.log(i[298830]);
        }, this.timeout);
      }
    };
  }

};
export default Sygame;