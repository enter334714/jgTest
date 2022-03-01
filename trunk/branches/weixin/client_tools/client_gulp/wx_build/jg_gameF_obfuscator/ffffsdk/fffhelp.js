var k = wx.$f;
let confArr = ['', k[87614], k[87615], k[87616], k[87617], k[87618], k[87619], k[87620], k[87621], k[87622], k[87623], k[87624], k[87625], k[87626], k[87627], k[87628], k[87629], k[87630], k[87631], k[87632], k[87633], k[87634]];

const SY_CONF = {
  "APP_ID": k[87635],
  "APP_VERSION": k[87636],
  "GAME_KEY": k[87637],
  "offerId": k[87638],
  "commitId": "52"
};

const Sygame = {
  // 初始化
  SY_CONF: SY_CONF,
  appid: '',
  app_version: k[87639],
  openid: '',
  real_openid: '',
  share_data: {},
  clipboard: '',
  role_id: 0, //角色id
  role_name: '', //角色名称
  server_id: '', //区服id
  server_name: '', //区服名称
  commitIdStatus: false,
  popupNumber: 0,
  popupStatus: false,
  popupData: {},
  userBrand: '',
  userBrandModel: '',
  init: data => {
    Sygame.appid = SY_CONF[confArr[1]];
    Sygame.query = data.query;
    Sygame.channel = SY_CONF[confArr[6]];
    Sygame.offerId = SY_CONF[k[87640]];
    Sygame.scene = data.scene;
    Sygame.commit_id = SY_CONF[k[87641]];
    Sygame.touchNumber = 0;
    Sygame.jumpVersion = 0;
    console.log(k[87642], Sygame);
    let queryData = {
      query: data.query
    };
    //获取该游戏是否开启获取剪切板功能
    wx.request({
      url: confArr[17],
      data: { appid: Sygame.appid },
      method: k[87643],
      success: res => {
        console.log(k[87644], res);
        if (res.data.is_open_clipboard) {
          //获取剪切板内的信息
          wx.getClipboardData({
            success(res) {
              if (res.data) {
                Sygame.clipboard = res.data;
              }
              console.log(k[87645], res);
            }
          });
        }
        // +1 click
        wx.request({
          url: confArr[7],
          data: queryData,
          method: k[87643],
          success: res => {
            console.log(k[87646], res);
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
      console.log(k[87647], shareData);
      var data = {
        title: shareData.title,
        imageUrlId: shareData.imageUrlId,
        imageUrl: shareData.imageUrl
      };
      console.log(k[87648], shareData);
      return data;
    });
    Sygame.getCommitIdStatus();
    // 获取手机型号
    wx.getSystemInfo({
      success(res) {
        Sygame.userBrand = res.brand;
        Sygame.userBrandModel = res.model;
      }
    });
  },
  // 游戏登录
  syLogin: () => new Promise(function (resolve, reject) {
    // 发起登陆请求
    wx.login({
      success(res) {
        console.log(k[87649], res);
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
              console.log(k[87650], ret);
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
                  var loginKey = k[87651] + ret.data.openid;
                  loginInfo = Sygame.cookieData({ type: k[60452], 'key': loginKey });
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
                  title: k[87652],
                  content: ret.data.game_tip ? ret.data.game_tip : k[87653],
                  confirmText: k[65880],
                  showCancel: false,
                  success: () => {
                    console.log(k[87654], ret);
                  }
                });
                wx.onTouchStart(() => {
                  wx.showModal({
                    title: k[87652],
                    content: ret.data.game_tip ? ret.data.game_tip : k[87653],
                    confirmText: k[65880],
                    showCancel: false,
                    success: () => {
                      console.log(k[87654], ret);
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
        console.log(k[84553]);
      }
    });
  }),

  // 创角，进入游戏，用户升级等接口
  syReportRoleInfo: data => new Promise(function (resolve, reject) {
    if (typeof data === k[60275]) {
      let url = confArr[3];
      if (data.role_id && typeof data.role_id !== k[87655]) Sygame.role_id = data.role_id;
      if (data.role_name && typeof data.role_name !== k[87655]) Sygame.role_name = data.role_name;
      if (data.server_id && typeof data.server_id !== k[87655]) Sygame.server_id = data.server_id;
      if (data.server_name && typeof data.server_name !== k[87655]) Sygame.server_name = data.server_name;
      data.wecha_id = Sygame.openid;
      data.real_openid = Sygame.real_openid;
      data.channel = Sygame.channel;
      data.query = Sygame.query;
      data.scene = Sygame.scene;
      data.appid = Sygame.appid;
      data.version = Sygame.app_version;
      data.brand = Sygame.userBrand;
      data.model = Sygame.userBrandModel;
      wx.request({
        url: url,
        data: data,
        method: k[87643],
        success: res => {
          console.log(k[87656], res);
          if (res.data.is_gs_login) {
            Sygame.syUserLoginRecord(Sygame.openid, res.data.request_time);
          }
          resolve(res.data);
          if (!Sygame.popupNumber) {
            Sygame.popupNumber++;
            Sygame.newUserPopupFunc(data);
          }
        }
      });
    } else {
      return k[87657];
    }
  }),
  // 下单发起支付
  syPay: data => new Promise(function (resolve, reject) {
    // 支付前弹窗
    Sygame.popupPayFunc(0).then(() => {
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
    });
  }),

  // 真实支付方法
  syRealPay: data => new Promise(function (resolve, reject) {
    let url = confArr[5];
    if (typeof data == k[60275]) {
      data.openid = Sygame.openid;
      data.real_openid = Sygame.real_openid;
      data.appid = Sygame.appid;
      data.channel = Sygame.channel;
      data.version = Sygame.app_version;
      data.is_buckle_pay = 0;
      wx.request({
        url: url,
        method: k[87643],
        data: data,
        success: function (res) {
          console.log(k[87658], res);
          // 后台配置支付参数
          switch (res.data.payType) {
            case "1":
              //米大师余额支付
              if (res.data.can_use_balance == 1) {
                wx.showModal({
                  title: k[87659],
                  content: res.data.midas_pay_tip,
                  confirmText: k[65880],
                  showCancel: k[68856],
                  success: ret => {
                    if (ret.confirm) {
                      data.is_buckle_pay = 1;
                      Sygame.syDescMidasCoin(data);
                    } else {
                      console.log(k[87660]);
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
                title: k[87661],
                content: k[87662],
                confirmText: k[87663],
                showCancel: false,
                success: ret => {
                  if (ret.confirm) {
                    wx.openCustomerServiceConversation({
                      sessionFrom: k[87664] + res.data.payId,
                      showMessageCard: true,
                      sendMessageImg: k[87665],
                      success: () => {
                        console.log(k[69241]);
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
      reject(k[87666]);
    }
  }),

  //通知米大师扣除余额发货接口
  syDescMidasCoin: data => {
    wx.request({
      url: confArr[11],
      data: data,
      method: k[87643],
      dataType: k[65375],
      success: function (res) {
        console.log(k[87667], res);
        wx.showModal({
          title: k[65878],
          content: res.data.tip,
          confirmText: k[65880],
          showCancel: k[68856],
          success: ret => {
            if (ret.confirm) {}
          }
        });
      },
      fail: function (e) {
        console.log(k[87668], e);
      }
    });
  },

  syMidasPay: data => {
    wx.requestMidasPayment({
      mode: k[87669],
      env: 0,
      offerId: Sygame.offerId,
      currencyType: k[87670],
      buyQuantity: data.product_price * 100,
      platform: k[87671],
      zoneId: 1,
      success(res) {
        Sygame.syDescMidasCoin(data);
        console.log(k[87672], res);
        // 支付成功
        Sygame.popupPayFunc(data.product_price);
      },
      fail(res) {
        // 上报失败信息、取消支付不上报
        if (res.errCode != 1) {
          Sygame.syReportMidasErrorInfo(res, data);
        }
        console.log(res);
      },
      complete(res) {
        console.log(res);
      }
    });
  },

  // 上报米大师错误信息
  syReportMidasErrorInfo: function (info, payInfo) {
    wx.request({
      url: confArr[22],
      data: {
        'appid': Sygame.appid,
        'info': JSON.stringify(info),
        'openid': Sygame.openid,
        'real_openid': Sygame.real_openid,
        'pay_info': payInfo
      },
      method: k[87643],
      success: ret => {
        console.log(k[87673], ret);
      }
    });
  },

  // 绑定手机
  syBindMobile: data => new Promise(function (reslove, reject) {
    let channel = Sygame.channel;
    let openid = Sygame.openid;
    wx.openCustomerServiceConversation({
      sessionFrom: k[87674] + openid,
      success: () => {
        console.log(k[87675]);
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
      method: k[87643],
      success: ret => {
        console.log(k[87676], ret);
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
      title: ret.data.jump_title_tip ? ret.data.jump_title_tip : k[87677],
      content: ret.data.jump_tip ? ret.data.jump_tip.replace(/\\n/g, '\n') : k[87678],
      confirmText: ret.data.jump_button_tip ? ret.data.jump_button_tip : k[65880],
      cancelText: ret.data.jump_cancel_tip ? ret.data.jump_cancel_tip : k[68856],
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
            var loginKey = k[87651] + ret.data.openid;
            Sygame.cookieData({ type: k[60019], key: loginKey, data: loginInfo + 1, expired_at: time });
          }
        } else if (res.cancel) {
          resolve(true);
        } else {
          Sygame.touchNumber += 1;
          if (ret.data.jump_copy || ret.data.jump_copy_apk) {
            Sygame.syDealJumpData(ret);
          } else {
            wx.onTouchStart(() => {
              Sygame.syDealJumpData(ret);
            });
          }
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
          console.log('syForceJump:success');
        }
      });
    } else if (ret.data.jump_img) {
      //获取二维码
      wx.previewImage({
        urls: [ret.data.jump_img]
      });
      wx.showModal({
        title: k[87677],
        content: ret.data.jump_tip ? ret.data.jump_tip : k[87678],
        confirmText: k[65880],
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
          console.log(k[87679], ret.data); // data
        }
      });
      wx.onTouchStart(() => {
        wx.showModal({
          title: k[87677],
          content: ret.data.jump_tip ? ret.data.jump_tip : k[87678],
          confirmText: k[65880],
          showCancel: false,
          success: () => {
            wx.setClipboardData({
              data: ret.data.jump_copy,
              success(res) {
                console.log(k[87679], ret.data); // data
              }
            });
          }
        });
      });
    } else if (ret.data.jump_copy_apk) {
      wx.setClipboardData({
        data: ret.data.jump_copy_apk,
        success(res) {
          console.log(k[87679], ret.data); // data
        }
      });
      wx.onTouchStart(() => {
        wx.openCustomerServiceConversation({
          sessionFrom: k[87680] + Sygame.appid,
          showMessageCard: true,
          sendMessageImg: k[87681],
          success: () => {
            console.log(k[69241]);
          }
        });
      });
    }
  }),

  // 调起客户端小游戏订阅消息界面
  syGetSubscribe: data => new Promise(function (reslove, reject) {
    wx.requestSubscribeMessage({
      tmplIds: [data.template],
      success: res => {
        console.log(k[87682], res);
        let type = '';
        if (res[data.template] === k[87683]) {
          type = k[87684];
        } else {
          type = k[60539];
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
          method: k[87643],
          dataType: k[65375],
          success: function (res) {
            reslove(res);
          },
          fail: function (e) {
            console.log(k[87668], e);
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
      method: k[87643],
      success: res => {
        console.log(k[87685], res);
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
      name: k[87686],
      formData: {
        appId: Sygame.appid
      },
      success: function (res) {
        console.log(k[87687], res);
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
      method: k[87643],
      success: res => {
        console.log(k[87688], res);
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
      method: k[87643],
      dataType: k[65375],
      success: function (res) {
        console.log(k[87689], res);
        reslove(res);
      },
      fail: function (e) {
        console.log(k[87668], e);
      }
    });
  }),

  /**
   * 用户点击展开盒子事件上报
   */
  syClickOpenBox: () => new Promise(function (reslove, reject) {
    // 判断用户是否点击
    var clickOpenBox = k[87690] + Sygame.openid;
    var isClick = Sygame.cookieData({ type: k[60452], 'key': clickOpenBox });
    var uv = isClick ? 0 : 1;
    wx.request({
      url: confArr[14],
      data: {
        "wecha_id": Sygame.openid,
        "appid": Sygame.appid,
        "uv": uv
      },
      method: k[87643],
      dataType: k[65375],
      success: function (res) {
        if (uv == 1) {
          Sygame.cookieData({ type: k[60019], key: clickOpenBox, data: 1 });
        }
        console.log(k[87691], res.data);
        reslove(res.data);
      },
      fail: function (e) {
        console.log(k[87668], e);
      }
    });
  }),

  /**
   * 用户点击盒子内游戏事件上报
   */
  syClickBox: data => new Promise(function (reslove, reject) {
    // 判断用户是否点击
    var clickBox = k[81335] + data.game_id;
    var isClick = Sygame.cookieData({ type: k[60452], 'key': clickBox });
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
      method: k[87643],
      dataType: k[65375],
      success: function (res) {
        if (uv == 1) {
          Sygame.cookieData({ type: k[60019], key: clickBox, data: 1 });
        }
        console.log(k[87692], res.data);
        reslove(res.data);
      },
      fail: function (e) {
        console.log(k[87668], e);
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
      method: k[87643],
      dataType: k[65375],
      success: function (res) {
        console.log(k[87693], res);
        if (res.data.status == 1001) {
          console.log(k[87694], res.data.data);
          Sygame.share_data = res.data.data;
        } else {
          if (params) {
            params.errorCallback(res);
          }
          console.log(k[87695], res);
        }
      },
      fail: function (e) {
        console.log(k[87668], e);
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
    console.log(k[87696], shareData);
    var data = {
      title: shareData.title,
      imageUrlId: shareData.imageUrlId,
      imageUrl: shareData.imageUrl,
      query: params.shareQuery + k[87697] + shareData.id
    };
    console.log(k[87694], shareData);
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
    var key = k[87698] + params.material_id;
    var log = Sygame.cookieData({ type: k[60452], 'key': key }) ? 1 : 0; //1-已记录，0-未记录
    if (log == 0) Sygame.cookieData({ type: k[60019], key: key, data: new Date().getTime() });
    params.log = log;
    wx.request({
      url: confArr[9],
      data: params,
      method: k[87643],
      dataType: k[65375],
      success: function (res) {
        console.log(res);
      },
      fail: function (e) {
        console.log(k[87668], e);
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
    var key = k[87699] + params.material_id;
    var log = Sygame.cookieData({ type: k[60452], 'key': key }) ? 1 : 0; //1-已记录，0-未记录
    if (log == 0) Sygame.cookieData({ type: k[60019], key: key, data: new Date().getTime() });
    params.log = log;
    wx.request({
      url: confArr[10],
      data: params,
      method: k[87643],
      dataType: k[65375],
      success: function (res) {
        console.log(res);
      },
      fail: function (e) {
        console.log(k[87668], e);
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
      case k[60452]:
        var data = wx.getStorageSync(params.key);
        try {
          data = JSON.parse(data);
          if (new Date().getTime() < data.expired_at) {
            return data.data;
          }
        } catch (e) {}
        return false;
        break;
      case k[60019]:
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
        console.log(k[87700]);
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
          console.log(k[87701]);
        }, this.timeout);
      }
    };
  },

  // 获取commitId状态
  getCommitIdStatus: () => {
    wx.request({
      url: confArr[23],
      data: { 'commitId': Sygame.commit_id },
      method: k[87643],
      success: ret => {
        if (ret.data.popup_status == 4001) {
          Sygame.commitIdStatus = true;
        } else {
          Sygame.commitIdStatus = false;
        }
        console.log(k[87702], Sygame.commitIdStatus);
      }
    });
  },
  // 新用户弹窗功能
  newUserPopupFunc: () => {
    if (Sygame.commitIdStatus == false) {
      return false;
    }
    // 获取弹窗功能配置信息
    wx.request({
      url: confArr[24],
      data: {
        'appid': Sygame.appid,
        'openid': Sygame.openid,
        'realOpenid': Sygame.real_openid
      },
      method: k[87643],
      success: ret => {
        if (ret.data.status == 4001) {
          Sygame.popupStatus = false;
          console.log(k[87703]);
          return false;
        }
        Sygame.popupStatus = true;
        Sygame.popupData = ret.data.data;
        console.log(k[87704]);
        // 计时
        window.timeInterval = setInterval(timing, 1000);
      }
    });

    // 进入游戏的时间
    var enterGameTime = 0;
    function timing() {
      // 进入游戏的时间大于倒计时剩余时间、或大于设定时间，则停止定时
      if (enterGameTime >= Sygame.popupData.remain_time) {
        Sygame.commitIdStatus = false;
        Sygame.popupStatus = false;
        clearInterval(window.timeInterval);
        return false;
      }
      if (enterGameTime > Sygame.popupData.popup_cycle) {
        clearInterval(window.timeInterval);
        return false;
      }
      // commtid状态、或 popup弹窗状态存在一个为false，则停止定时（因支付完成导致或者倒计时结束）
      if (Sygame.commitIdStatus == false || Sygame.popupStatus == false) {
        clearInterval(window.timeInterval);
        return false;
      }
      dealGamePopupData(enterGameTime, Sygame.popupData);
      enterGameTime++;
    }

    // 处理游戏数据
    function dealGamePopupData(enterGameTime, data) {
      // 是否是首次进入游戏，且达到固定时间
      if (data.is_first_login && enterGameTime == data.first_popup_time) {
        Sygame.reportClickThePopup(0, data.first_popup_cont);
      }
      // 是否在固定时间内，每间隔设定时间
      if (enterGameTime && enterGameTime <= data.popup_cycle && enterGameTime % data.popup_interval == 0) {
        Sygame.reportClickThePopup(1, data.first_popup_cont);
      }
    }
  },
  /**
   * 处理弹窗以及打点数据上报
   * @param type 弹窗类型
   * @param popupContent 弹窗内容
   */
  reportClickThePopup: (type, popupContent) => new Promise(function (resolve, reject) {
    if (!popupContent) return false;
    wx.showModal({
      title: k[87677],
      content: popupContent,
      confirmText: k[65880],
      showCancel: false,
      success: () => {
        // 上报
        wx.request({
          url: confArr[25],
          data: {
            appid: Sygame.appid,
            openid: Sygame.openid,
            real_openid: Sygame.real_openid,
            roleid: Sygame.role_id,
            type: type
          },
          method: k[87643],
          success: ret => {
            resolve();
          }
        });
      }
    });
  }),
  // 支付弹窗
  popupPayFunc: payPrice => new Promise(function (resolve, reject) {
    // commtId状态 和 popup弹窗状态不存在，则停止执行
    if (!Sygame.commitIdStatus || !Sygame.popupStatus) {
      resolve();
      return false;
    }
    if (payPrice == 0) {
      Sygame.reportClickThePopup(2, Sygame.popupData.pay_before).then(() => {
        resolve();
      });
    }
    // payPrice存在，则为支付成功
    if (payPrice) {
      clearInterval(window.timeInterval);
      Sygame.commitIdStatus = false;
      Sygame.popupStatus = false;
      resolve();
    }
    if (payPrice && Sygame.popupData.first_pay_price == payPrice) {
      Sygame.reportClickThePopup(3, Sygame.popupData.pay_after).then(() => {
        resolve();
      });
    }
  })

};
export default Sygame;