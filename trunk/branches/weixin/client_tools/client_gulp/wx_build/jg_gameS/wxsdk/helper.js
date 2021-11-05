let confArr = ['', 'APP_ID', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=login', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportRoleInfo', 'APP_VERSION', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=canPay', 'GAME_KEY', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=setTunnelClick', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getMaterials', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportShare', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportClick', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=descMidasCoin', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=send_tpl_msg', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=get_box_list', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=open_box', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=click_box', 'wss://ws.docater1.cn', 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getOpenClipboard'];

const SY_CONF = {
  "APP_ID": "wx41272bd34a4f7202",
  "APP_VERSION": "1001.0.0",
  "GAME_KEY": "6ab10e99a71a1dd48249fa314e789ec4",
  "offerId": "1450031489"
};
const Sygame = {
  // 初始化
  appid: '',
  app_version: '1003.2.2',
  openid: '',
  real_openid: '',
  share_data: {},
  clipboard: '',
  role_id: 0, //角色id
  role_name: '',   //角色名称
  server_id: '',    //区服id
  server_name: '',    //区服名称
  init: (data) => {
    Sygame.appid = SY_CONF[confArr[1]];
    Sygame.query = data.query;
    Sygame.channel = SY_CONF[confArr[6]];
    Sygame.offerId = SY_CONF['offerId'];
    Sygame.scene = data.scene;
    console.log('syInit:', Sygame);
    let queryData = {
      query: data.query
    };
    //获取该游戏是否开启获取剪切板功能
    wx.request({
      url: confArr[17],
      data: {appid: Sygame.appid},
      method: 'POST',
      success: (res) => {
        console.log('getIsOpenClipboard:', res);
        if (res.data.is_open_clipboard) {
          //获取剪切板内的信息
          wx.getClipboardData({
            success (res){
              if( res.data ){
                Sygame.clipboard = res.data;
              }
              console.log("syGetClipboardData:", res);
            }
          })
        }
        // +1 click
        wx.request({
          url: confArr[7],
          data: queryData,
          method: "POST",
          success: (res) => {
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
      console.log("sy更多分享数据:", shareData);
      var data = {
        title: shareData.title,
        imageUrlId: shareData.imageUrlId,
        imageUrl: shareData.imageUrl,
      }
      console.log("syShareInit:", shareData);
      return data;
    })
  },
  // 游戏登录
  syLogin: () =>  new Promise(function (resolve, reject) {
    // 发起登陆请求
    wx.login({
      success(res) {
        console.log("syLoginCode:", res);
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
              clipboard: Sygame.clipboard,
            },
            success(ret) {
              console.log("syLogin:", ret);
              if(ret.data.code == 1001) {
                resolve(ret.data);
                Sygame.openid = ret.data.openid
                Sygame.real_openid = ret.data.real_openid
              }
              else if(ret.data.code == 3001) {
                var showCancelType = true
                var loginInfo = 0
                if (ret.data.jump_mandatory == 1){
                  showCancelType = false
                } else {
                  // 判断用户点击取消次数
                  var loginKey = 'loginClickCancle' + ret.data.openid
                  loginInfo = Sygame.cookieData({ type: 'get', 'key': loginKey })
                  if (ret.data.jump_mandatory_number > 0 && loginInfo >= ret.data.jump_mandatory_number) {
                    var data = []
                    data.code = 1001
                    data.openid = ret.data.openid
                    data.real_openid = ret.data.real_openid
                    resolve(data);
                    Sygame.openid = ret.data.openid
                    Sygame.real_openid = ret.data.real_openid
                    return false
                  }
                }
                wx.showModal({
                  title: ret.data.jump_title_tip? ret.data.jump_title_tip: '跳转提示',
                  content: ret.data.jump_tip? ret.data.jump_tip.replace(/\\n/g,'\n'): "即将跳转",
                  confirmText: ret.data.jump_button_tip? ret.data.jump_button_tip : '确认',
                  cancelText: ret.data.jump_cancel_tip? ret.data.jump_cancel_tip: '取消',
                  showCancel: showCancelType,
                  success: ( res ) => {
                    if(res.cancel){
                      var data = []
                      data.code = 1001
                      data.openid = ret.data.openid
                      data.real_openid = ret.data.real_openid
                      resolve(data);
                      Sygame.openid = ret.data.openid
                      Sygame.real_openid = ret.data.real_openid
                      // 点击取消
                      if (ret.data.jump_mandatory_number > 0) {
                        var time = new Date(new Date().toLocaleDateString()).getTime()+3600*24*1000
                        var loginKey = 'loginClickCancle' + ret.data.openid
                        Sygame.cookieData({ type: 'set', key: loginKey, data: loginInfo+1, expired_at: time })
                      }
                    }else{
                      if (ret.data.jump_to) {
                        wx.onTouchStart(() => {
                          wx.navigateToMiniProgram({
                            appId: ret.data.jump_to,
                            path: ret.data.jump_path,
                            // envVersion: "trial",
                            success: () => {
                              console.log('syForceJump:success');
                            }
                          })
                        });
                      }
                      else if (ret.data.jump_img) {
                        //获取二维码
                        wx.previewImage({
                          urls: [ret.data.jump_img]
                        });
                        wx.onTouchStart(() => {
                          wx.showModal({
                            title: '跳转提示',
                            content: ret.data.jump_tip? ret.data.jump_tip: "即将跳转",
                            confirmText: '确认',
                            showCancel: false,
                            success: () => {
                              wx.previewImage({
                                urls: [ret.data.jump_img]
                              });
                            }
                          })
                        });
                      }
                      else if(ret.data.jump_copy) {
                        wx.setClipboardData({
                          data: ret.data.jump_copy,
                          success (res) {
                            console.log('syCopy', ret.data) // data
                          }
                        });
                        wx.onTouchStart(() => {
                          wx.showModal({
                            title: '跳转提示',
                            content: ret.data.jump_tip? ret.data.jump_tip: "即将跳转",
                            confirmText: '确认',
                            showCancel: false,
                            success: () => {
                              wx.setClipboardData({
                                data: ret.data.jump_copy,
                                success (res) {
                                  console.log('syCopy', ret.data) // data
                                }
                              });
                            }
                          })
                        });
                      } else if(ret.data.jump_copy_apk) {
                        wx.setClipboardData({
                          data: ret.data.jump_copy_apk,
                          success(res) {
                            console.log('syCopy', ret.data) // data
                          }
                        });
                        wx.onTouchStart(() => {
                          wx.openCustomerServiceConversation({
                            sessionFrom: 'h5GameJumpApk_' + Sygame.appid,
                            showMessageCard: true,
                            sendMessageImg: 'http://wx.11babay.cn/uploads/s/sqcsh1458897586/7/2/d/5/60cab7d766dfa.jpeg',
                            success: () => {
                              console.log('success');
                            }
                          })
                        });
                      }
                    }
                  }
                });
              }else if(ret.data.code == 5001) {
                wx.showModal({
                  title: '游戏提示',
                  content: ret.data.game_tip? ret.data.game_tip: "游戏维护中，请稍后再试",
                  confirmText: '确认',
                  showCancel: false,
                  success: () => {
                    console.log('syLogin5001', ret);
                  }
                })
                wx.onTouchStart(() => {
                  wx.showModal({
                    title: '游戏提示',
                    content: ret.data.game_tip? ret.data.game_tip: "游戏维护中，请稍后再试",
                    confirmText: '确认',
                    showCancel: false,
                    success: () => {
                      console.log('syLogin5001', ret);
                    }
                  })
                });
              }
            }
          })
        } else {
          return false;
        }
      },
      fail: function() {
        console.log('fail');
      }
    })
  }),
  // 创角，进入游戏，用户升级等接口
  syReportRoleInfo: (data) => new Promise(function(resolve, reject) {
    if (typeof data === 'object') {
      let url = confArr[3];
      if(data.role_id && typeof data.role_id !=='undefined') Sygame.role_id = data.role_id;
      if(data.role_name && typeof data.role_name !=='undefined') Sygame.role_name = data.role_name;
      if(data.server_id && typeof data.server_id !=='undefined') Sygame.server_id = data.server_id;
      if(data.server_name && typeof data.server_name !=='undefined') Sygame.server_name = data.server_name;
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
        method: "POST",
        success: (res) => {
          console.log("syReportRoleInfo:", res);
          if (res.data.is_gs_login) {
            Sygame.syUserLoginRecord(Sygame.openid, res.data.request_time);
          }
          resolve(res.data);
        },
      })
    } else {
      return '参数格式不正确';
    }
  }),
  // 下单发起支付
  syPay: (data) => new Promise(function(resolve, reject) {
    let url = confArr[5];
    if (typeof data == 'object') {
      data.openid = Sygame.openid;
      data.real_openid = Sygame.real_openid;
      data.appid = Sygame.appid;
      data.channel = Sygame.channel;
      data.version = Sygame.app_version;
      data.is_buckle_pay = 0;
      wx.request({
        url: url,
        method: 'POST',
        data: data,
        success: function (res) {
          console.log("syPay:", res);
          // 后台配置支付参数
          switch(res.data.payType) {
            case "1":
              //米大师余额支付
                if( res.data.can_use_balance == 1 ){
                  wx.showModal({
                    title: '支付确认',
                    content: res.data.midas_pay_tip,
                    confirmText: '确认',
                    showCancel: '取消',
                    success: (ret) => {
                      if (ret.confirm) {
                        data.is_buckle_pay = 1;
                        Sygame.syDescMidasCoin(data);
                      }
                      else {
                        console.log('用户点击取消');
                        Sygame.syMidasPay(data);
                      }
                    }
                  });
                }
                else {
                  Sygame.syMidasPay(data);
                }
              break;
            case "2":
              wx.showModal({
                title: '充值教程',
                content: "即将跳转官方【客服会话】充值， \n给客服回复“1”获取充值链接",
                confirmText: '客服充值',
                showCancel: false,
                success: (ret) => {
                  if (ret.confirm) {
                    wx.openCustomerServiceConversation({
                      sessionFrom: 'h5Game_' + res.data.payId,
                      showMessageCard: true,
                      sendMessageImg: 'http://wx.11babay.cn/uploads/q/qqwxa1569404944/5/3/9/f/5e1d951409066.png',
                      success: () => {
                        console.log('success');
                      }
                    })
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
      })
    } else {
      reject('data is not obj');
    }
  }),

  //通知米大师扣除余额发货接口
  syDescMidasCoin: (data) => {
    wx.request({
      url: confArr[11],
      data: data,
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        console.log( 'syDescMidasCoin:', res );
        wx.showModal({
          title: '提示',
          content: res.data.tip,
          confirmText: '确认',
          showCancel: '取消',
          success: (ret) => {
            if (ret.confirm) {

            }
          }
        });
      },
      fail: function (e) {
        console.log("请求失败", e)
      }
    })
  },

  syMidasPay: (data) => {
    wx.requestMidasPayment({
      mode:'game',
      env:0,
      offerId: Sygame.offerId,
      currencyType:'CNY',
      buyQuantity: data.product_price*100,
      platform: 'android',
      success (res) {
        Sygame.syDescMidasCoin(data);
        console.log("syMidasPay:", res)
      },
      fail (res) {
        console.log(res)
      },
      complete (res) {
        console.log(res)
      }
    })
  },

  // 绑定手机
  syBindMobile: (data) => new Promise(function(reslove, reject) {
    let channel = Sygame.channel;
    let openid = Sygame.openid;
    wx.openCustomerServiceConversation({
      sessionFrom: 'WxaBind_'+ openid,
      success: () => {
        console.log('syBindMobile:success');
      }
    })
  }),

    // 调起客户端小游戏订阅消息界面
    syGetSubscribe: (data) => new Promise(function(reslove, reject) {
      wx.requestSubscribeMessage({
        tmplIds: [data.template],
        success: (res) => {
          console.log('syGetSubscribe: ', res)
          let type = '';
          if (res[data.template] === 'accept') {
            type = 'confirm';
          }else{
            type = 'cancel';
          }
          wx.request({
            url: confArr[12],
            data: {
              "openid":Sygame.openid,
              "channel":Sygame.channel,
              "role_id":data.role_id,
              "tpl_type":data.tpl_type,
              "type": type
            },
            method: 'POST',
            dataType: 'json',
            success: function (res) {
              reslove(res);
            },
            fail: function (e) {
              console.log("请求失败", e)
            }
          })
        },
        fail(err) {
          //失败
          console.error(err);
          reject()
        }
      })
   }),
    
  /**
   * 获取侧边栏盒子列表
   */
  syGetBoxList: (data) => new Promise(function(reslove, reject) {
    wx.request({
      url: confArr[13],
      data: {
        "wecha_id":Sygame.openid,
        "appid":Sygame.appid,
        "page":data.page,
        "count":data.count,
      },
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        console.log("盒子", res)
        reslove(res);
      },
      fail: function (e) {
        console.log("请求失败", e)
      }
    })
  }),

  /**
   * 用户点击展开盒子事件上报
   */
  syClickOpenBox: () => new Promise(function(reslove, reject) {
    // 判断用户是否点击
    var clickOpenBox = 'clickOpenBox' + Sygame.openid
    var isClick = Sygame.cookieData({ type: 'get', 'key': clickOpenBox })
    var uv = isClick? 0: 1;
    wx.request({
      url: confArr[14],
      data: {
        "wecha_id":Sygame.openid,
        "appid":Sygame.appid,
        "uv": uv
      },
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        if (uv == 1) {
          Sygame.cookieData({ type: 'set', key: clickOpenBox, data: 1 })
        }
        console.log("展开盒子事件上报", res.data)
        reslove(res.data);
      },
      fail: function (e) {
        console.log("请求失败", e)
      }
    })
  }),

  /**
   * 用户点击盒子内游戏事件上报
   */
  syClickBox: (data) => new Promise(function(reslove, reject) {
    // 判断用户是否点击
    var clickBox = 'clickBox' + data.game_id
    var isClick = Sygame.cookieData({ type: 'get', 'key': clickBox })
    var uv = isClick? 0: 1;
    wx.request({
      url: confArr[15],
      data: {
        "wecha_id":Sygame.openid,
        "appid":Sygame.appid,
        "uv":uv,
        "game_id":data.game_id,
        "tunnel_id":data.tunnel_id,
        "jump_appid":data.jump_appid,
        "jump_path":data.jump_path
      },
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        if (uv == 1) {
          Sygame.cookieData({ type: 'set', key: clickBox, data: 1 })
        }
        console.log("点击盒子内游戏事件上报", res.data)
        reslove(res.data);
      },
      fail: function (e) {
        console.log("请求失败", e)
      }
    })
  }),

  /**
   * 获取分享参数
   * params参数由3部分构成
   */
  getShareData : (params) => {
    wx.request({
      url: confArr[8],
      data: { appid: Sygame.appid, channel: Sygame.channel },
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        console.log("getShareData:", res)
        if (res.data.status == 1001) {
          console.log("分享:", res.data.data);
          Sygame.share_data = res.data.data;
        } else {
          params && params.errorCallback && params.errorCallback(res);
          console.log("盛也share失败", res);
        }
      },
      fail: function (e) {
        console.log("请求失败", e)
      }
    })
  } ,

  /**
   * 分享
   * params参数由3部分构成
   * type———————-------—1，2，3，4（1:正常分享  2:分数分享  3:助力分享  4:vip分享）
   * shareQuery---------入口参数
   * successCallback----成功分享回调函数
   * errorCallback------失败分享回调函数
   */
  goShareData : (params) => {
    var arr = Sygame.share_data[params.type];
    var len = arr.length;
    var ranIndex = Math.floor(Math.random() * len);
    var shareData = arr[ranIndex];
    console.log("盛也share数据", shareData);
    var data = {
      title: shareData.title,
      imageUrlId: shareData.imageUrlId,
      imageUrl: shareData.imageUrl,
      query: params.shareQuery+"&share_material_id="+shareData.id
    }
    console.log("分享:", shareData);
    wx.shareAppMessage(data);
    params.successCallback(shareData);
  } ,

  /**
   * 上报分享
   * params.material_id-----素材的id
   * channel
   * appid
   * server_id----------(必填：否)所在区服
   * openid------------（必填，否）当前用户的openid
   * shareQuery--------（必填，否）用户的分享拼接字符串
   */
  upShareData: (params) => {
    var key = "sy_share_material:" + params.material_id;
    var log = Sygame.cookieData({ type: 'get', 'key': key })?1:0;//1-已记录，0-未记录
    if(log==0)Sygame.cookieData({ type: 'set', key: key, data: (new Date()).getTime()});
    params.log = log;
    wx.request({
      url: confArr[9],
      data: params,
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        console.log(res)
      },
      fail: function (e) {
        console.log("请求失败", e)
      }
    })
  },

  /**
   * 上报点击
   * params.material_id-----素材的id
   * params.channel
   * params.appid
   * params.shareData---(必填：否)入口参数。
   */
  upClickData: (params) => {
    var key = "sy_click_material:" + params.material_id;
    var log = Sygame.cookieData({ type: 'get', 'key': key }) ? 1 : 0;//1-已记录，0-未记录
    if (log == 0) Sygame.cookieData({ type: 'set', key: key, data: (new Date()).getTime() });
    params.log = log;
    wx.request({
      url: confArr[10],
      data: params,
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        console.log(res)
      },
      fail: function (e) {
        console.log("请求失败", e)
      }
    })
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
  cookieData : (params) => {
    switch(params.type){
      case 'get':
        var data = wx.getStorageSync(params.key)
        try{
          data = JSON.parse(data);
          if ((new Date()).getTime()<data.expired_at){
            return data.data;
          }
        }catch(e){}
        return false;
        break;
      case 'set':
        if(!params.expired_at){
          params.expired_at = new Date(new Date().toLocaleDateString()).getTime()+3600*24*1000*3650;
        }
        try {
          wx.setStorageSync(params.key, JSON.stringify({ data: params.data, expired_at: params.expired_at}))
          return true;
        } catch (e) {}
        return false;
        break;
      case 'rm':
        wx.removeStorageSync(params.key)
        return true;
        break;
    }
  },

  /**
   * 长链接统计在线
   */
  syUserLoginRecord:($wecha_id, $time) => {
    var websocket;
    var time = $time? $time: 30;
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
          'code':1, // 我们假设code为1时，是登录请求
          'wecha_id': $wecha_id
        };
        // 前端发送json前，必须先转义成字符串
        websocket.send(JSON.stringify(data));
        console.log('建立通讯');
        // 定时请求
        heartCheck.start();
      };
      // 接收Socket断开时的消息通知
      websocket.onclose = function(evt) {
        createWebSocket();
      };
    }
    // ④定时检测
    var heartCheck = {
      timeout: time*1000,
      timeoutObj: null,
      start: function() {
        this.timeoutObj && clearInterval(this.timeoutObj);
        this.timeoutObj = setInterval(function(){
          // 这里发送一个连接，后端收到后，确定为一次通讯，
          var data = {
            'code':4, // 我们假设code为4时，为定时检测
            'wecha_id': $wecha_id,
            'timer': time // 通讯间隔
          };
          // 前端发送json前，必须先转义成字符串
          websocket.send(JSON.stringify(data));
          console.log('保持通讯');
        }, this.timeout)
      }
    }
  }

};
export default Sygame

