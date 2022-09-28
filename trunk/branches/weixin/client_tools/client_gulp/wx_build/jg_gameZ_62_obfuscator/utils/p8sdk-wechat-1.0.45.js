var f = wx.$B;
var P8SDK_VERSION = "1.0.46";
var systemValues = {};
var start_param = "";
var inBPack = null;
let paydata = {
  offerId: "",
  scale: "",
  zoneId: "",
  pf: ""
};
let switchCheck;
var template_ids;
var gotoObj = {
  b_site: null
};
var DEBUG = false;
if (DEBUG) {
  initTestBtnObj();
}

// setTimeout(() => {
//   wx.onTouchEnd((result) => {
//     wx.previewImage({
//       urls: ['https://trecharge.play800.cn/t1.html']
//     })
//   })
// }, 1500);

function initTestBtnObj() {
  function e(e, t, a) {
    let i = wx.createUserInfoButton({
      type: "text",
      text: e,
      style: t
    });
    i.onTap(a);
  }
  let t = {
    left: 10,
    top: 20,
    width: 200,
    height: 40,
    lineHeight: 40,
    backgroundColor: "#ff0000",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    borderRadius: 4
  };
  t.top += 50;
  e("登录", t, e => {
    print("支付点击回调");
  });
  t.top += 50;
  e("支付", t, e => {
    print("支付点击回调");
  });
}

function wxRequest(e, t, a, i, n) {
  wx.request({
    url: e,
    method: t,
    data: a,
    success: e => {
      if (i) {
        i(e);
      }
    },
    fail: e => {
      if (n) {
        n(e);
      }
    }
  });
}

function print() {
  let t = "";
  for (let e = 0; e < 20; e++) {
    if (!arguments[e]) {
      console.info(t);
      return;
    }
    t += " " + JSON.stringify(arguments[e]);
  }
}

function getUrlConfig(a) {
  let e = `https://ks3-cn-shanghai.ksyun.com/aliyun/${sdklogData.aid}.txt`;
  let t = "GET";
  let i = "";
  let n = function (t) {
    print("获取到的url信息", t);
    if (t.statusCode == 200) {
      let e = dateOrRes(t);
      if (e.url_address) {
        print("获取到的 urlaid.txt", e.url_address);
        Object.assign(sdklogData, {
          platform_url: e.url_address.platform_url,
          data_url: e.url_address.data_url,
          rg_url: e.url_address.rg_url
        });
        if (a) {
          a();
        }
      } else {
        wx.showModal({
          title: "aid 配置异常",
          content: "异常",
          success(e) {}
        });
      }
    }
  };
  wxRequest(e, t, i, n);
}

function dateOrRes(e) {
  return e.data ? e.data : e;
}

function dateFormat() {
  let e = new Date();
  let t;
  let a = "YYYY-mm-dd HH:MM:SS";
  const i = {
    "Y+": e.getFullYear().toString(),
    "m+": (e.getMonth() + 1).toString(),
    "d+": e.getDate().toString(),
    "H+": e.getHours().toString(),
    "M+": e.getMinutes().toString(),
    "S+": e.getSeconds().toString()
  };
  for (let e in i) {
    t = new RegExp("(" + e + ")").exec(a);
    if (t) {
      a = a.replace(t[1], t[1].length == 1 ? i[e] : i[e].padStart(t[1].length, "0"));
    }
  }
  return a;
}
var sdkConfigData = require("./p8sdk-wechat-config.js");
let p8openid;
var cpwantData = {
  result: "1",
  data: {
    errorcode: "000",
    msg: " 初始值"
  }
};
var queryData = {
  weixinadinfo: "",
  gdt_vid: "",
  aid: "",
  code: "",
  c: ""
};
let sdklogData = {
  platform_url: "",
  data_url: "",
  key_android: "",
  site_android: "",
  key_ios: "",
  site_ios: "",
  aid: "",
  monitorAid: "",
  uid: "",
  sid: "",
  sname: "",
  roleid: "1",
  rolename: "1",
  vip: "",
  level: "",
  gold: "",
  mac: "",
  device: "",
  ip: "",
  modeltype: "wx",
  device_type: "1",
  gameversion: "",
  device_model: "",
  device_resolution: "",
  device_version: "",
  device_net: "",
  platform: "",
  initOnshowFlag: true,
  onshowFlag: true,
  account: "",
  password: ""
};
init();
getUrlConfig(() => {
  getpaydata();
  getCPwantData();
});

function init() {
  Object.assign(sdklogData, sdkConfigData);
  getDevice();
  getInitAidAndCode();
}
wx.onShow(e => {
  console.log("onshow~~", e);
  let t = e.query;
  let a = JSON.stringify(t);
  if (a.length > 2) {
    start_param = a;
  }
  let i = e.referrerInfo && e.referrerInfo.extraData;
  if (i && i.p8go_site && i.p8go_aid) {
    inBPack = true;
    console.error("onshow 获取到跳转过来的参数", i);
    console.error("冷启动 获取到跳转过来的参数", i);
    gotoObj.site = i.p8go_site;
    gotoObj.aid = i.p8go_aid;
    gotoObj.b_site = i.b_site;
    gotoObj.b_appid = i.b_appid;
  }
  if (t.aid) {
    Object.assign(queryData, t);
    print("onShow存在启动参数 query", queryData);
    blowPoint("onShow 存在aid" + JSON.stringify(e));
  }
});
var wx_videoAD;
var wx_bannerAD;
var wx_sceneAD;
var wx_CustomAD;

function BannerAdCreate(e, t = 0, a = 0, i = "", n) {
  let o = wx.getSystemInfoSync().screenWidth;
  if (!i) i = o;
  wx_bannerAD = wx.createBannerAd({
    adUnitId: e,
    adIntervals: 30,
    style: {
      left: t,
      top: a,
      width: i,
      height: n
    }
  });
  wx_bannerAD.onLoad(() => {
    print("banner 广告加载成功");
  });
  wx_bannerAD.onResize(e => {
    print("banner 广告onResize", e.width, e.height);
    print("banner 广告onResize2", wx_bannerAD.style.realWidth, wx_bannerAD.style.realHeight);
  });
  wx_bannerAD.onError(e => {
    print("banner 广告异常", e);
  });
}

function CustomAdCreate(e, t = 0, a = 0, i = "") {
  let n = wx.getSystemInfoSync().screenWidth;
  if (!i) i = n;
  wx_CustomAD = wx.createCustomAd({
    adUnitId: e,
    style: {
      left: t,
      top: a,
      width: i,
      fixed: true
    }
  });
  wx_CustomAD.onLoad(() => {
    print("模板 广告加载成功");
  });
  wx_CustomAD.onError(e => {
    print("模板 广告异常", e);
  });
}

export function wxshowShareMenu(title = '', imageUrl = '', query = '') {
  wx.showShareMenu({
    withShareTicket: true,
    menus: ['shareAppMessage', 'shareTimeline']
  });

  wx.onShareAppMessage(() => {
    return {
      title: title,
      imageUrl: imageUrl, // 图片 URL
      query: query
    };
  });
}

export function wxshareAppMessage(title = '', imageUrl = '', query = '') {
  wx.shareAppMessage({
    title: title,
    imageUrl: imageUrl, // 图片 URL
    query: query
  });
}

export function wxADinit(e, t, o, n) {
  if (e) {
    wx_videoAD = wx.createRewardedVideoAd({
      adUnitId: e
    });
    wx_videoAD.onLoad(() => {
      print("激励视频 广告加载成功");
    });
    wx_videoAD.onError(e => {
      print("激励视频 广告加载异常", e);
    });
  }
  if (o) {
    if (o.adUnitId) {
      let e = o.adUnitId;
      let t = o.left;
      let a = o.top;
      let i = o.width;
      let n = o.height;
      BannerAdCreate(e, t, a, i, n);
    } else {
      print("广告初始化 banner广告参数不对 ");
    }
  }
  if (t) {
    wx_sceneAD = wx.createInterstitialAd({
      adUnitId: t
    });
    wx_sceneAD.onLoad(() => {
      print("插屏 广告加载成功");
    });
    wx_sceneAD.onError(e => {
      print("插屏 广告加载异常", e);
    });
  }
  if (n) {
    if (n.adUnitId) {
      let e = n.adUnitId;
      let t = n.left;
      let a = n.top;
      let i = n.width;
      CustomAdCreate(e, t, a, i);
    } else {
      print("广告初始化 原生模板广告参数不对 ");
    }
  }
}
export function sceneADShow(t, a) {
  if (!wx_sceneAD || !wx_sceneAD.show()) {
    print("插屏广告不存在");
    return;
  }
  wx_sceneAD.show().catch(e => {
    print("插屏 广告显示异常", e);
    if (a) {
      a();
    }
  });
  wx_sceneAD.onClose(e => {
    print("插屏 广告关闭");
    if (t) {
      t();
    }
  });
}
export function videoADShow(t, a) {
  if (!wx_videoAD || !wx_videoAD.show) {
    print("激励视频不存在");
    return;
  }
  wx_videoAD.show().catch(e => {
    print("激励视频 广告加载异常", e);
    print("激励视频 再次广告加载");
    wx_videoAD.load().then(() => wx_videoAD.show());
  });
  wx_videoAD.onClose(e => {
    if (e && e.isEnded || e === undefined) {
      print("正常播放结束，可以下发游戏奖励");
      if (t) {
        t();
      }
    } else {
      print("播放中途退出，不下发游戏奖励");
      if (a) {
        a();
      }
    }
  });
}
export function bannerAdShow() {
  if (wx_bannerAD && wx_bannerAD.show) {
    wx_bannerAD.show();
  } else {
    print("bannerAD不存在");
  }
}
export function bannerAdHide() {
  wx_bannerAD.hide();
}
export function customADShow() {
  if (wx_CustomAD && wx_CustomAD.show) {
    wx_CustomAD.show();
  } else {
    print("模板 广告不存在");
  }
}
export function customADHide() {
  wx_CustomAD.hide();
}
export function customADOnclose(e) {
  if (!wx_CustomAD || !wx_CustomAD.onClose) {
    print("模板 广告不存在");
    return;
  }
  wx_CustomAD.onClose(e);
}

function getGoToSwitchdata() {
  if (inBPack) {
    return;
  }
  let e = parseInt(new Date().getTime() / 1e3);
  let t = {
    site: sdklogData.site,
    aid: sdklogData.aid,
    uid: sdklogData.uid,
    time: e
  };
  let a = SignGetForCenter(t, sdklogData.key);
  t.sign = hex_md5(a);
  print("跳包开关参数请求obj ", t);
  let i = `${sdklogData.platform_url}/switch/wxSwitch`;
  let n = function (e) {
    let a = e.data.data;
    print("跳包开关返回的值:", a);
    if (a.redirect && a.redirect.s) {
      print("跳包开关返回的值 可以转端:", a.redirect.data);
      let msg = a.redirect.data.msg;
      let t = a.redirect.data.b_appid;

      let edata = {
        p8go_site: a.redirect.data.site,
        p8go_aid: a.redirect.data.aid,
        b_site: a.redirect.data.b_site,
        b_appid: t
      };
      console.error('edata::', edata);

      function i(e, appid, edata) {
        print("跳包开关返回的值 可以转端: gotoAnotherApp", e, appid);
        wx.showModal({
          title: "提示",
          content: e ? e : "提示文本",
          confirmText: "确认",
          showCancel: false,
          confirmColor: "#576B95",
          success: function (e) {
            if (e.confirm) {
              console.log("用户点击确定");
              gotoSystem(appid, e, edata);
            } else if (e.cancel) {
              console.log("用户点击取消");
            }
          },
          fail: function (e) {
            print("showModal 失败", e);
          }
        });
      }

      // function fe(e, t, a) {
      //   let i = wx.createUserInfoButton({
      //     type: "text",
      //     text: e,
      //     style: t
      //   });
      //   i.onTap(a)
      // }
      // let ot = {
      //   left: 10,
      //   top: 20,
      //   width: 200,
      //   height: 40,
      //   lineHeight: 40,
      //   backgroundColor: "#ff0000",
      //   color: "#ffffff",
      //   textAlign: "center",
      //   fontSize: 16,
      //   borderRadius: 4
      // };
      // fe("跳包", ot, e => {
      //   print("跳包点击回调")
      //   i(msg, t, edata)
      // });
      wx.onTouchStart(() => {
        i(msg, t, edata);
      });
    }
  };
  wxRequest(i, "GET", t, n);
}

function getpaydata() {
  let e = parseInt(new Date().getTime() / 1e3);
  let t = {
    site: sdklogData.site,
    appid: sdklogData.appid,
    time: e
  };
  let a = SignGetForCenter(t, sdklogData.key);
  t.sign = hex_md5(a);
  print("支付配置参数请求obj ", t);
  let i = `${sdklogData.platform_url}/api/wxGameConf`;
  let n = function (e) {
    let t = e.data.data;
    print("支付配置参数返回的值:", t);
    if (e.data.result == 0 && t.is_set == true) {
      paydata.offerId = t.offerId;
      paydata.scale = t.scale;
      paydata.zoneId = t.zoneId;
      paydata.pf = t.pf;
    } else if (e.data.result == 0 && t.is_set == false) {
      console.error("参数沒有配置 运营要先后台配置");
      var a = {
        result: "1",
        msg: "后台支付參數沒有配置",
        data: {}
      };
      cpwantData = a;
    } else if (e.data.result == 1) {
      print("接口請求失敗");
    }
  };
  wxRequest(i, "GET", t, n);
}
export function gotoSystemSwitch() {
  print("转端开关检测: " + dateFormat());
  let e = new Promise((t, e) => {
    if (switchCheck == true) {
      let e = {
        result: "0",
        data: {
          msg: "已达到转端条件，可以转端"
        }
      };
      t(e);
      print("可以转端");
    } else {
      let e = {
        result: "1",
        data: {
          msg: "未达到转端条件，不可以转端"
        }
      };
      t(e);
      print("不可以转端");
    }
  });
  return e;
}

function getGotoSystemInfo() {
  let e = parseInt(new Date().getTime() / 1e3);
  let t = {
    site: sdklogData.site,
    aid: sdklogData.aid,
    time: e,
    uid: sdklogData.uid
  };
  let a = SignGetForCenter(t, sdklogData.key);
  t.sign = hex_md5(a);
  print("跳转别的小程序参数 ", t);
  let i = `${sdklogData.platform_url}/switch/wxToApp`;
  let n = function (e) {
    print("转端获取到的参数 ", e);
    switchCheck = e.data.data.s;
  };
  let o = "GET";
  wxRequest(i, o, t, n);
}
export function gotoSystem(e, edata, a) {
  print("wx 跳转别的小程序 ---------------- ");
  wx.navigateToMiniProgram({
    appId: e,
    extraData: edata,
    path: a,
    envVersion: "release",
    success(e) {
      print(" 跳转别的小程序 success  :", e);
    },
    fail(e) {
      print("跳转别的小程序 fail  :", e);
    }
  });
}
var systemType = "";

function getInitAidAndCode() {
  let e = wx.getLaunchOptionsSync().query;
  let t = wx.getLaunchOptionsSync().referrerInfo;
  if (!e) {
    e = wx.getEnterOptionsSync().query;
    if (e && e.aid) {
      blowPoint("镜华看到请联系我~");
    }
  }
  let a = JSON.stringify(e);
  if (a.length > 2) {
    start_param = a;
  }
  let i = t && t.extraData;
  if (i && i.p8go_site && i.p8go_aid) {
    console.error("冷启动 获取到跳转过来的参数", i);
    inBPack = true;
    gotoObj.site = i.p8go_site;
    gotoObj.aid = i.p8go_aid;
    gotoObj.b_site = i.b_site;
    gotoObj.b_appid = i.b_appid;
    console.log(" 冷启动 extraData.goto_aid:", i.goto_aid);
  }
  if (e.clue_token) {
    systemType = "TT";
    systemValues.clue_token = e.clue_token;
    systemValues.ad_id = e.ad_id;
    systemValues.creative_id = e.creative_id;
    systemValues.channel = "jrtt_wxxyx";
  }
  if (e.aid || e.code) {
    Object.assign(queryData, e);
  }
}
var requireCheck = true;

function getCPwantData(l) {
  if (requireCheck) {
    print("开始调用wx.login", sdklogData.key + sdklogData.site);
    requireCheck = false;
  } else {
    print("wx.login调用中");
    setTimeout(() => {
      requireCheck = true;
      print(" 重置请求参数 可以再次调用login");
    }, 3e3);
    return;
  }
  wx.login({
    success(r) {
      if (r.code) {
        var s = r.code;
        let n = parseInt(new Date().getTime() / 1e3);
        if (gotoObj.aid) {
          sdklogData.b_site = gotoObj.b_site;
          sdklogData.b_appid = gotoObj.b_appid;
          sdklogData.aid = gotoObj.aid;
          console.error(" 跳转过来的 前site ", sdklogData.site);
          sdklogData.site = gotoObj.site;
          console.error(" 跳转过来的 b_site", b_site);
        } else {}
        var d = hex_md5(`${sdklogData.key}WX${sdklogData.site}WX${n}${n}`);
        let t = {
          cname: "wxxyx",
          js_code: s,
          channel_parame: start_param,
          aid2: queryData.aid,
          code: queryData.code,
          gdt_vid: queryData.gdt_vid,
          c: queryData.c,
          weixinadinfo: queryData.weixinadinfo,
          modeltype: sdklogData.modeltype ? sdklogData.modeltype : "test",
          aid: sdklogData.aid,
          appid: sdklogData.appid,
          site: sdklogData.site,
          b_site: gotoObj.b_site,
          sign: d,
          time: n
        };
        console.log("已经获取到登录jscode 登录获取openid请求参数：", t);
        print("已经获取到登录jscode 登录获取openid请求参数：", t);
        if (systemType === "TT") {
          l.clue_token = systemValues.clue_token;
          l.ad_id = systemValues.ad_id;
          l.creative_id = systemValues.creative_id;
          l.channel = systemValues.channel;
        }
        let a = `${sdklogData.platform_url}/oauth/wxLoginToReport`;
        let e = "POST";
        let i = function (i) {
          print("登录成功回调返回的所有参数：", i);
          var i = i.data;
          if (i.result == 0) {
            let e = i.data;
            print("登录成功回调 获取openid的所有data：", e);
            sdklogData.sign = d;
            sdklogData.time = n;
            sdklogData.account = e.account;
            sdklogData.password = e.password;
            p8openid = e.openid;
            sdklogData.openid = p8openid;
            blowPoint("已经获取到了openid" + JSON.stringify(queryData));
            let t = e.session_key;
            sdklogData.device = p8openid;
            sdklogData.uid = e.uid;
            print("登录成功回调 进行赋值", sdklogData);
            let a = {
              result: "0",
              data: {
                openid: p8openid,
                session_key: t,
                sign: d,
                time: n
              }
            };
            Object.assign(a.data, e);
            getGoToSwitchdata();
            cpwantData = a;
            if (window.cc) {
              lvcompare();
            }
            getGotoSystemInfo();
          } else {
            let e = {
              result: "1",
              data: {
                errorcode: "500",
                msg: " :配置信息有误 无法通过配置url访问微信接口获取用户openid",
                reqData: t,
                resData: i,
                url: a
              }
            };
            cpwantData = e;
          }
        };
        let o = function (e) {
          print("请求800login接口失败" + JSON.stringify(e));
          blowPoint("请求800login接口失败" + JSON.stringify(e));
        };
        wxRequest(a, e, t, i, o);
      } else {
        let e = {
          result: "1",
          msg: "login fail ",
          data: {
            msg: "code 获取失败"
          }
        };
        blowPoint("wx.login 获取code失败" + JSON.stringify(r));
        cpwantData = e;
      }
    },
    fail: function (e) {
      blowPoint("wx.login fail" + JSON.stringify(e));
      var t = {
        result: "1",
        msg: "wx.login fail",
        data: {
          msg: "wx.login 接口调用失败，将无法正常使用开放接口等服务 重启游戏试试看？"
        }
      };
      cpwantData = t;
    }
  });
}

function getTempLateIDs() {
  let time = parseInt(new Date().getTime() / 1e3);
  let data = {
    site: sdklogData.site,
    aid: sdklogData.aid,
    time: time
  };
  let t = SignGetForCenter(data);
  data.sign = hex_md5(t);
  print("订阅推送消息请求参数 ", data);
  let url = `${sdklogData.platform_url}/oauth/getWxSubscriptionId`;
  let i = "GET";
  let n = e => {
    print('订阅推送消息请求的url:', url);
    print("订阅推送消息获取到的data", e);

    if (e.data.result == 0) {
      let t = e.data.data.template_id;
      if (t) {
        template_ids = t.split(",");
      } else {
        print("没有配置订阅模板id");
      }
      print("订阅推送消息获取到的id", e.data.data.template_id);
    } else {
      print("请求订阅模板id异常 请求参数", e.data, data);
    }
  };
  let o = e => {
    print("订阅推送消息获取服务器数据失败", e);
    resolve(e);
  };
  wxRequest(url, i, data, n, o);
}

export function subscribeMessage() {
  console.error(' 调用接口 subscribeMessage');
  let e = new Promise((l, e) => {
    wx.requestSubscribeMessage({
      tmplIds: template_ids,
      success: a => {
        console.error("微信消息订阅窗口弹出 ", a);
        let i = "";
        for (let t = 0; t < template_ids.length; t++) {
          let e = template_ids[t];
          if (a[e] == "accept") {
            i += e + ",";
          }
        }
        i = i.substring(0, i.length - 1);
        let time = parseInt(new Date().getTime() / 1e3);
        let t = {
          site: sdklogData.site,
          aid: sdklogData.aid,
          template_id: i,
          open_id: sdklogData.openid,
          uid: sdklogData.uid,
          time: time
        };
        let n = SignGetForCenter(t);
        t.sign = hex_md5(n);
        let o = `${sdklogData.platform_url}/oauth/getWxSubscription`;
        console.error('请求 订阅消息请求url ', o);
        let r = "GET";
        let s = e => {
          console.error('订阅消息请求 返回data', e);
          l(e);
        };
        let d = e => {
          l(e);
        };
        wxRequest(o, r, t, s, d);
      },
      fail(e) {
        console.error("微信消息订阅窗口弹出异常:", e);
        l(e);
      }
    });
  });
  return e;
}

var temporarytime;
export function gotoCustomerServiceConversation(e) {
  if (!e || e.showMessageCard === undefined) {
    e = {};
    e.showMessageCard = false;
  }
  wx.openCustomerServiceConversation({
    showMessageCard: e.showMessageCard,
    sendMessageTitle: e.sendMessageTitle,
    sendMessagePath: e.sendMessagePath,
    sendMessageImg: e.sendMessageImg
  });
}

function openKeFu() {
  let e = new Date();
  let t = e.getTime();
  temporarytime = t;
  wx.openCustomerServiceConversation({
    showMessageCard: true,
    sendMessagePath: "page/index/index?a=b&c=d",
    sendMessageTitle: "回复“礼包”继续",
    sendMessageImg: "https://ks3-cn-shanghai.ksyuncs.com/800img/1109.png"
  });
}
wx.onHide(function () {
  let e = new Date();
  let t = e.getTime();
  if (Math.abs(temporarytime - t) < 1e4) {
    let e = `${sdklogData.platform_url}/oauth/wechat/${sdklogData.appid}?MsgType=wxToH5&openid=${sdklogData.device}&site=${sdklogData.site}&aid=${sdklogData.aid}`;
    let t = "GET";
    let a = "";
    let i = () => {
      print("进入微信后台上报成功");
    };
    wxRequest(e, t, a, i);
  }
});

function setSpriteFrame(a, e) {
  var t = "https://ks3-cn-shanghai.ksyuncs.com";
  cc.loader.load(t + e, function (e, t) {
    e ? print("cc.loader.load网络加载图片失败", e) : a.spriteFrame = new cc.SpriteFrame(t);
  });
}
var SuspensionTypeBtn = false;
export function SuspensionBtn() {
  print("调用生成悬浮窗");

  function b(e, t) {
    let a = new cc.Node(e);
    if (t) {
      a.parent = t;
    }
    return a;
  }
  SuspensionTypeBtn = true;
  var e = 375;
  var t = 812;
  var a = wx.getSystemInfoSync().windowWidth;
  var i = wx.getSystemInfoSync().windowHeight;
  var C = e / a;
  var T = t / i;
  let n = b("moveButton");
  n.zIndex = 100;
  let o = n.addComponent(cc.Sprite);
  n.addComponent(cc.Button);
  n.setContentSize(80 / C, 80 / T);
  setSpriteFrame(o, "/800img/bg.png");
  o.sizeMode = cc.Sprite.SizeMode.CUSTOM, cc.game.addPersistRootNode(n);
  n.setPosition(50, i);
  let r = b("xuanfukuang", n);
  let s = r.addComponent(cc.Sprite);
  setSpriteFrame(s, "/hswl/p8SDK-img/%E6%9B%B4%E5%A4%9A.png");
  r.addComponent(cc.Button);
  r.setContentSize(80 / C, 80 / T);
  s.sizeMode = cc.Sprite.SizeMode.CUSTOM;
  let d;
  r.on("touchstart", e => {
    d = false;
  }, this);
  r.on("touchmove", e => {
    d = true;
    n.x = e.currentTouch._point.x;
    n.y = e.currentTouch._point.y;
  }, this);
  r.on("touchend", e => {
    if (n.y <= 40) {
      n.y = 50;
    } else if (n.y >= 2 * i - 80 / T) {
      n.y = 2 * i - 20 - 80 / T;
    }
    if (!d) l.active = !l.active;
  }, this);
  let l = b("layout", n);
  let c = l.addComponent(cc.Sprite);
  setSpriteFrame(c, "/hswl/20211026104715.png");
  l.setContentSize(200 / C, 250 / T);
  c.sizeMode = cc.Sprite.SizeMode.CUSTOM;
  l.setPosition(150 / C, -40 / T);
  l.active = false;
  let g = b("shoujiButton", l);
  let f = g.addComponent(cc.Sprite);
  g.addComponent(cc.Button);
  g.setContentSize(45 / C, 45 / T);
  setSpriteFrame(f, "/hswl/p8SDK-img/%E6%89%8B%E6%9C%BA.png");
  f.sizeMode = cc.Sprite.SizeMode.CUSTOM;
  g.setPosition(-40, 43 / T);
  let u = b("label2", g);
  u.color = new cc.color().fromHEX("#9F9F9F");
  u.setPosition(0, -50 / T);
  creatorlabel("label2", "#9F9F9F", g, 0, -50 / T, "手机", 22 / T);
  var A = false;
  var I = false;
  let P = b("binding");
  g.on("click", e => {
    if (A == false && I == false) {
      A = true;
      I = true;
      P.addComponent(cc.BlockInputEvents);
      P.zIndex = 90;
      cc.game.addPersistRootNode(P);
      P.setContentSize(cc.director.getWinSizeInPixels().width, cc.director.getWinSizeInPixels().height);
      P.setPosition(cc.director.getWinSizeInPixels().width / 2, cc.director.getWinSizeInPixels().height / 2);
      let e = P.addComponent(cc.Sprite);
      setSpriteFrame(e, "/800img/1108.png");
      e.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      let t = cc.director.getWinSizeInPixels().height / 1560;
      creatorlabel("shoujihao", "#0D0D0D", P, -250 / C, 400 * t, "手 机 号 :");
      creatorlabel("yanzhengma", "#0D0D0D", P, -250 / C, 280 * t, "验 证 码 :");
      creatorlabel("mima", "#0D0D0D", P, -250 / C, 100 * t, "密       码:");
      creatorlabel("quedingmima", "#0D0D0D", P, -250 / C, 0 * t, "确认密码:");
      creatorlabel("quedingmima", "#0D0D0D", P, 0, -350 * t, "绑定后，您可以使用手机号登陆app客户端");
      let r = creatorlabel("success", "#E82C2C", P, 0, -400 * t, "请 输 入 您 的 手 机 号", 28);
      let s = creatorlabel("success", "#E82C2C", P, 0, -150 * t, "该账号以绑定过了", 28);
      s.node.active = false;
      let d = creatorlabel("success", "#E82C2C", P, 0, -150 * t, "请 输 入 验 证 码", 28);
      d.node.active = false;
      let l = creatorlabel("success", "#E82C2C", P, 0, -200 * t, "并设置最少大于6位的密码", 28);
      l.node.active = false;
      let a = b("EditBox1", P);
      a.setPosition(0 / C, 400 * t);
      a.setContentSize(300 / C, 100 / T);
      let c = a.addComponent(cc.EditBox);
      let i = creatorlabel("textlabel", "#8E8888", a, 0, 0, "手机号");
      a.on("editing-did-began", () => {
        i.string = "|";
      });
      a.on("text-changed", () => {
        i.string = c.string;
      });
      a.on("editing-did-ended", () => {
        if (c.string.length == 0) {
          i.string = "手机号";
        } else {
          i.string = c.string;
        }
      });
      var S = creatorlabel("daojishi", "#0D0D0D", P, 280 / C, 400 * t, "60");
      let n = 60;
      S.node.active = false;
      let o = b("jurisdiction1", P);
      o.setContentSize(180 / C, 120 / T);
      o.setPosition(260 / C, 400 * t);
      let g = o.addComponent(cc.Sprite);
      setSpriteFrame(g, "/hswl/bindingimg/20211102-154359.png");
      g.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      o.addComponent(cc.Button);
      o.on("click", e => {
        o.active = false;
        S.node.active = true;
        n = 60;
        if (n >= 0) {
          setInterval(function () {
            if (n >= 1 && S.node.active == true) {
              n -= 1;
              S.string = n;
            } else {
              S.node.active = false;
              o.active = true;
            }
          }, 500);
        }
        if (i.string.length == 11) {
          r.node.active = false;
          let e = parseInt(new Date().getTime() / 1e3);
          let n = {
            site: sdklogData.site,
            time: e,
            mobile: c.string,
            sendtype: "bind"
          };
          let t = newSignGetType(n);
          n.sign = hex_md5(t);
          let a = `${sdklogData.platform_url}/api/newcheckbind`;
          let i = "GET";
          let o = function (e) {
            let i = e.data.data;
            if (i.status == 0) {
              s.node.active = false;
              print("未绑定手机号,获取授权成功", i);
              let e = `${sdklogData.platform_url}/api/sendmobilecode`;
              let t = "GET";
              let a = function (e) {
                print("验证码已经发送", e);
                let t = e.data;
                if (t.result == 0) {
                  d.node.active = true;
                  l.node.active = true;
                }
              };
              wxRequest(e, t, n, a);
            } else {
              print("请输入正确的手机号");
              s.node.active = true;
            }
          };
          wxRequest(a, i, n, o);
        }
      }, this);
      let f = b("EditBox2", P);
      f.setPosition(0 / C, 280 * t);
      f.setContentSize(300 / C, 100 / T);
      let u = f.addComponent(cc.EditBox);
      let p = creatorlabel("textlabel", "#8E8888", f, 0, 0, "验证码");
      f.on("editing-did-began", () => {
        p.string = "|";
      });
      f.on("text-changed", () => {
        p.string = u.string;
      });
      f.on("editing-did-ended", () => {
        if (u.string.length == 0) {
          p.string = "验证码";
        } else {
          p.string = u.string;
        }
      });
      let m = b("EditBox3", P);
      m.setPosition(0 / C, 100 * t);
      m.setContentSize(300 / C, 100 / T);
      let h = m.addComponent(cc.EditBox);
      let _ = creatorlabel("textlabel", "#8E8888", m, 0, 0, "请输入密码");
      m.on("editing-did-began", () => {
        _.string = "|";
      });
      m.on("text-changed", () => {
        _.string = h.string;
      });
      m.on("editing-did-ended", () => {
        if (h.string.length == 0) {
          _.string = "请输入密码";
        } else {
          _.string = h.string;
        }
      });
      let w = b("EditBox4", P);
      w.setPosition(0, 0);
      w.setContentSize(300 / C, 100 / T);
      let D = w.addComponent(cc.EditBox);
      let v = creatorlabel("textlabel", "#8E8888", w, 0, 0, "确认密码");
      w.on("editing-did-began", () => {
        v.string = "|";
      });
      w.on("text-changed", () => {
        v.string = D.string;
      });
      w.on("editing-did-ended", () => {
        if (D.string.length == 0) {
          v.string = "确认密码";
        } else {
          v.string = D.string;
        }
      });
      let x = b("jurisdiction2", P);
      x.setContentSize(600 / C, 120 / T);
      x.setPosition(0 / C, -500 * t);
      let y = x.addComponent(cc.Sprite);
      setSpriteFrame(y, "/hswl/bindingimg/20211102-154422.png");
      y.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      x.addComponent(cc.Button);
      let k = {
        account: sdklogData.account,
        password: sdklogData.password,
        site: sdklogData.site,
        time: "",
        mobile: "",
        code: "",
        newpassword: ""
      };
      x.on("click", e => {
        k.time = parseInt(new Date().getTime() / 1e3), k.mobile = c.string;
        k.code = u.string;
        k.newpassword = h.string;
        let t = newSignGetType(k);
        k.sign = hex_md5(t);
        if (D.string.length == h.string.length && D.string.length >= 6 && c.string.length == 11 && u.string.length == 5) {
          let e = `${sdklogData.platform_url}/api/newbindmobile`;
          let t = "GET";
          let a = function (e) {
            if (e.data.result == 0) {
              d.node.active = false;
              l.string = "提 交 成 功";
              x.active = false;
              setTimeout(function () {
                P.active = false;
              }, 2e3);
            } else if (e.data.result == 1) {
              l.node.active = true;
              d.node.active = false;
              l.string = e.data.data.msg;
              setTimeout(function () {
                l.node.active = false;
              }, 2e3);
            }
          };
          wxRequest(e, t, k, a);
        } else {
          print("提交失败");
        }
        print("binding", P);
      }, this);
    } else if (A == true && I == true) {
      P.active = false;
      A = false;
    } else if (A == false && I == true) {
      P.active = true;
      A = true;
    }
  }, this);
  let p = b("shoujiButton", l);
  let m = p.addComponent(cc.Sprite);
  p.addComponent(cc.Button);
  p.setContentSize(45 / C, 45 / T);
  setSpriteFrame(m, "/hswl/p8SDK-img/%E6%89%8B%E6%B8%B8.png");
  m.sizeMode = cc.Sprite.SizeMode.CUSTOM;
  p.setPosition(40, 43 / T);
  creatorlabel("label3", "#9F9F9F", p, 0, -50 / T, "升级", 22 / T);
  p.on("click", e => {
    let t = "下载并使用手机版游戏即可享受:\n\n✨✨【纵享流畅体验,减少卡顿闪退问题】✨✨\n\n✨【福利满满的高价值礼包等你来兑换】✨\n\n限时福利，机不可失,千万别错过!\n前往客服回复“礼包”领取手机版";
    wx.showModal({
      title: "超值福利领取",
      content: t,
      cancelText: "残忍拒绝",
      confirmText: "前往客服",
      success(e) {
        if (e.confirm) {
          print("用户点击确定--\x3e 前往客服");
          openKeFu();
        } else if (e.cancel) {
          print("用户点击取消--\x3e 残忍拒绝");
        }
      }
    });
  }, this);
}
export function lvcompare() {
  let e = parseInt(new Date().getTime() / 1e3);
  let t = {
    site: sdklogData.site,
    time: e,
    aid: sdklogData.aid,
    uid: sdklogData.uid
  };
  print("悬浮窗条件查询请求参数", t);
  let a = newSignGetType(t);
  t.sign = hex_md5(a);
  let i = `${sdklogData.platform_url}/switch/wxFrame`;
  let n = "GET";
  let o = function (e) {
    let t = e.data.data;
    if (t.s == true && SuspensionTypeBtn == false) {
      print("条件满足，生成悬浮框");
      SuspensionBtn();
    } else {
      print("生成悬浮框条件不满足");
    }
  };
  wxRequest(i, n, t, o);
}
export function creatorlabel(e = "", t = "", a, i = 0, n = 0, o = "", r) {
  let s = new cc.Node(e);
  if (t) s.color = new cc.color().fromHEX(t);
  s.setPosition(i, n);
  s.parent = a;
  let d = s.addComponent(cc.Label);
  if (r) d.fontSize = r;
  d.string = o;
  return d;
}
export function login() {
  print("P8SDK.js  login开始调用: " + dateFormat());
  let n = 0;
  let e = new Promise((e, t) => {
    if (cpwantData.result == 0) {
      e(cpwantData);
      getTempLateIDs();
    } else {
      function a() {
        n++;
        if (n < 10) {
          print(" P8SDK.js login 目前获取的参数", cpwantData);
        }
        if (cpwantData.result == 0) {
          print("P8SDK.js  login开始返回数据: " + dateFormat());
          clearInterval(i);
          e(cpwantData);
          getTempLateIDs();
        }
      }
      var i = setInterval(a, 300);
    }
  });
  return e;
}

function blowPoint(e = "null") {
  var t = parseInt(new Date().getTime() / 1e3);
  let a = {
    str: e,
    time: t,
    openid: p8openid
  };
  let i = `${sdklogData.platform_url}/sdk_callback/setLog`;
  let n = "POST";
  let o = function (e) {
    print("上报打点日志成功", a);
    var e = e.data;
    if (e.result == 0) {}
  };
  wxRequest(i, n, a, o);
}

function getItem(e) {
  return wx.getStorageSync(e);
}

function setItem(e, t) {
  wx.setStorageSync(e, t);
}

function SignGetForCenter(e) {
  let t = sdklogData.key;
  print("新的加密方式请求数据sdklogData.key", t);
  var a = [];
  for (var i in e) {
    a.push(i);
  }
  a = a.sort();
  var n = "";
  for (var o = 0; o < a.length; o++) {
    var r = e[a[o]];
    if (o != a.length - 1) {
      n += a[o] + "=" + r + "&";
    } else {
      n += a[o] + "=" + r;
    }
  }
  return e.site + n + t;
}

function newSignGetType(t) {
  var a = [];
  for (var e in t) {
    a.push(e);
  }
  a = a.sort();
  let i = "";
  for (let e = 0; e < a.length; e++) {
    const n = t[a[e]];
    if (e != 0) {
      i += a[e] + n;
    } else {
      i += a[e] + n;
    }
  }
  return i;
}

function ChangeUndefined(t) {
  for (let e in t) {
    if (t.hasOwnProperty(e)) {
      if (typeof t[e] == "undefined") {
        t[e] = "";
      }
    }
  }
}
export function showPayStatus(l) {
  let e = new Promise((t, e) => {
    let a = parseInt(new Date().getTime() / 1e3);
    let i = hex_md5(sdklogData.key + "WX" + sdklogData.site + "WX" + a + a);
    let n = {
      site: sdklogData.site,
      time: a,
      uid: sdklogData.uid,
      sign: i,
      version: P8SDK_VERSION,
      roleid: l.roleid,
      level: l.level,
      ce: 0,
      vip: false,
      sid: 1
    };
    let o = `${sdklogData.rg_url}/h/isShowPay`;
    Object.assign(n, l);
    print(" 显示支付入口开关 请求参数", n);
    let r = "GET";
    let s = e => {
      print(" 显示支付入口开关 返回参数", e);
      t(e && e.data);
    };
    let d = e => {
      t({
        result: 1,
        data: {
          msg: "微信请求异常 error",
          res: e
        }
      });
    };
    wxRequest(o, r, n, s, d);
  });
  return e;
}
export function pay(g) {
  console.info("调用P8支付接口");
  let e = new Promise((l, e) => {
    let c = parseInt(new Date().getTime() / 1e3);
    let t = sdklogData.b_site ? sdklogData.b_site : sdklogData.site;
    sdklogData.b_appid;
    var a = {
      aid: sdklogData.aid,
      cp_order_id: g.cp_order_id,
      device_type: sdklogData.device_type,
      ext: g.ext,
      ip: sdklogData.ip,
      json: 1,
      level: g.level,
      money: g.money,
      product_name: g.product_name,
      productid: g.productid,
      roleid: g.roleid,
      rolename: g.rolename,
      serverid: g.serverid,
      site: t,
      time: c,
      udid: sdklogData.device,
      uid: sdklogData.uid,
      ce: g.ce,
      vip: g.vip
    };
    var i = "";
    ChangeUndefined(a);
    i = newSignGetType(a);
    let n = `${c}${sdklogData.site}${i}${sdklogData.key}${c}`;
    var o = hex_md5(`${c}${sdklogData.site}${i}${sdklogData.key}${c}`);
    a.sign = o;
    print("支付请求参数", a);
    let r = `${sdklogData.rg_url}/h/p`;
    let s = "GET";
    let d = d => {
      if (d.data.result == 0) {
        if (false) {} else if (d.data.data.paytype == 5) {
          var e = {
            result: 0,
            data: {
              paytype: "5",
              url: d.data.data.url,
              order_id: d.data.data.orderid
            }
          };
          l(e);
        } else if (d.data.data.paytype == 13) {
          var n = d.data.data.orderid;
          let e = sdklogData.b_appid ? sdklogData.b_appid : sdklogData.appid;
          var o = {
            appid: e,
            env: g.env,
            money: g.money,
            offer_id: paydata.offerId,
            openid: sdklogData.device,
            order_id: n,
            pf: "android",
            scale: paydata.scale,
            site: sdklogData.site,
            b_site: gotoObj.b_site,
            time: c,
            zone_id: paydata.zoneId
          };
          print(" 支付正常返回 开始请求检查余额 ", o);
          var r = "";
          for (let e in o) {
            r += "&" + e + "=" + o[e];
          }
          r = r.substring(1);
          var s = hex_md5(`${sdklogData.site}${r}${sdklogData.key}`);
          o.sign = s;
          let t = `${sdklogData.rg_url}/midas/notify`;
          let a = "POST";
          let i = e => {
            var t = e.data;
            if (t.result == 1) {
              var a = {
                result: 1,
                data: {
                  errorcode: "500",
                  msg: t.data.msg
                }
              };
              l(a);
            } else {
              if (t.data && t.data.errcode == 90013) {
                let mdsData = {
                  mode: "game",
                  env: g.env,
                  offerId: paydata.offerId,
                  currencyType: "CNY",
                  zoneId: paydata.zoneId,
                  platform: "android",
                  buyQuantity: g.money * paydata.scale,
                  success: function (e) {
                    let t = `${sdklogData.rg_url}/midas/notify`;
                    let a = "POST";
                    let i = e => {
                      var t = {
                        result: 0,
                        data: {
                          errorcode: "0",
                          msg: "付款成功！"
                        }
                      };
                      l(t);
                    };
                    wxRequest(t, a, o, i);
                  },
                  fail: function (e) {
                    var t = {
                      result: 1,
                      data: {
                        errorcode: "",
                        msg: "付款失败！",
                        data: JSON.stringify(e)
                      }
                    };
                    console.error("米大师异常:", JSON.stringify(e));
                    console.error("米大师异常2:", e);
                    mdsData.g_money = g.money;
                    mdsData.paydata_scale = paydata.scale;
                    let logStr = '';
                    for (const key in mdsData) {
                      if (Object.hasOwnProperty.call(mdsData, key)) {
                        const element = mdsData[key];
                        if (key != 'success' && key != 'fail' && key != 'complete') {
                          logStr += key + ':' + element + '\n';
                        }
                      }
                    }
                    console.error("米大师支付参数:", logStr);
                    l(t);
                  },
                  complete: function (e) {}
                };

                wx.requestMidasPayment(mdsData);
              } else if (t.data && t.data.errcode == 0) {
                var a = {
                  result: 0,
                  data: {
                    errorcode: "0",
                    msg: "扣除余额成功！"
                  }
                };
                l(a);
              } else {
                var a = {
                  result: 1,
                  data: {
                    errorcode: t.data.errcode,
                    msg: t.data.errmsg,
                    res: "服务端返回参数：" + t
                  }
                };
                if (t.data && t.data.errcode == 90011) {
                  a.data.msg = "运营检查下 米大师支付参数 官方报异常";
                }
                print(a);
                l(a);
              }
            }
          };
          wxRequest(t, a, o, i);
        } else if (d.data.data.paytype == 16) {
          let e = d.data.data.orderid;
          let t = g.roleid;
          let a = g.serverid;
          let i = g.productid;
          let n = g.money;
          let o = "wxa0c72fc2bbe4cd69";
          let r = "pages/pay/pay";
          let s = {
            gotoPay_order: e,
            gotoPay_character: t,
            gotoPay_area: a,
            gotoPay_goods: i,
            gotoPay_price: n
          };
          gotoSystem(o, s, r);
        } else if (d.data.data.paytype == 17) {
          // let imgUrl = 'https://trecharge.play800.cn/toPay'
          let imgUrl = `${sdklogData.rg_url}/toPay`;
          let rData = {
            pay_type: 17,
            order_id: d.data.data.orderid
          };
          let sucFunc = r => {
            console.error('rrr1', r);
            r = dateOrRes(r);
            console.error('rrr', r);
            if (r.result === 0 && r.data && r.data.url) {
              let url = r.data.url;
              // url = 'https://wxgsjsons.ks3-cn-shanghai.ksyuncs.com/20220614-114752.jpg'
              // console.error('加载url', url);
              // console.error('加载url[0]', url[0]);
              // console.error('加载url[url.length-1]', url[url.length - 1]);
              wx.previewImage({
                urls: [url]
              });
            } else {
              console.error('加载异常', r);
            }
          };
          wxRequest(imgUrl, 'get', rData, sucFunc);
        } else {
          var e = {
            result: 0,
            data: {
              errorcode: "-1",
              msg: "暂不支持支付 paytype： " + d.data.data.paytype,
              res: d
            }
          };
          l(e);
        }
      } else {
        var e = {
          result: 1,
          data: {
            errorcode: "1100",
            msg: d.data.data.msg
          }
        };
        l(e);
      }
    };
    wxRequest(r, s, a, d);
  });
  return e;
}
export function wxdialog(d) {
  let e = new Promise((a, e) => {
    let t = parseInt(new Date().getTime() / 1e3);
    var i = hex_md5(`${sdklogData.key}WX${sdklogData.site}WX${t}${t}`);
    let n = {
      uid: sdklogData.uid,
      site: sdklogData.site,
      aid: sdklogData.aid,
      level: d.level,
      sign: i,
      time: t
    };
    let o = `${sdklogData.platform_url}/api/wxdialog`;
    let r = "GET";
    let s = e => {
      if (e.data.result == 0) {
        wx.showModal({
          title: "礼包福利",
          content: "下载并使用手机版游戏，即可享受:\n\n1.高价值手机版礼包\n2.沉浸式无干扰游戏体验\n\n限时福利，错过再等一年\n前往客服回复“礼包”领取手机版",
          showCancel: true,
          cancelText: "残忍拒绝",
          confirmText: "前往客服",
          confirmColor: "#999",
          success(e) {
            if (e.confirm) {
              var t = {
                result: 0,
                data: {
                  errorcode: "0",
                  msg: "处理成功"
                }
              };
            } else if (e.cancel) {
              var t = {
                result: 1,
                data: {
                  errorcode: "201",
                  msg: "用户点击取消"
                }
              };
            }
            a(t);
          }
        });
      } else {
        var t = {
          result: 1,
          data: {
            errorcode: "500",
            msg: e.data.data.msg
          }
        };
        a(t);
      }
    };
    wxRequest(o, r, n, s);
  });
  return e;
}

function getDevice() {
  wx.getNetworkType({
    success: function (e) {
      sdklogData.device_net = e.networkType;
    }
  });
  let e = wx.getSystemInfoSync();
  var t = e.platform;
  sdklogData.modeltype = t;
  sdklogData.platform = t;
  sdklogData.device_model = e.model;
  sdklogData.device_resolution = e.screenWidth + "*" + e.screenHeight;
  sdklogData.device_version = e.system;
  if (t.toLowerCase().indexOf("ios") != -1 || t.toUpperCase().indexOf("IOS") != -1) {
    sdklogData.key = sdklogData.key_ios;
    sdklogData.site = sdklogData.site_ios;
    sdklogData.aid = sdklogData.aid_ios;
  } else {
    sdklogData.key = sdklogData.key_android;
    sdklogData.site = sdklogData.site_android;
    sdklogData.aid = sdklogData.aid_android;
  }
}
var V = V || {};
V.Security = V.Security || {};
(function () {
  var k = V.Security;
  k.maxExactInt = Math.pow(2, 53);
  k.toUtf8ByteArr = function (e) {
    var t = [],
        a;
    for (var i = 0; i < e.length; i++) {
      a = e.charCodeAt(i);
      if (55296 <= a && a <= 56319) {
        var n = a,
            o = e.charCodeAt(i + 1);
        a = (n - 55296) * 1024 + (o - 56320) + 65536;
        i++;
      }
      if (a <= 127) {
        t[t.length] = a;
      } else if (a <= 2047) {
        t[t.length] = (a >>> 6) + 192;
        t[t.length] = a & 63 | 128;
      } else if (a <= 65535) {
        t[t.length] = (a >>> 12) + 224;
        t[t.length] = a >>> 6 & 63 | 128;
        t[t.length] = a & 63 | 128;
      } else if (a <= 1114111) {
        t[t.length] = (a >>> 18) + 240;
        t[t.length] = a >>> 12 & 63 | 128;
        t[t.length] = a >>> 6 & 63 | 128;
        t[t.length] = a & 63 | 128;
      } else {
        throw "Unicode standart supports code points up-to U+10FFFF";
      }
    }
    return t;
  };
  k.toHex32 = function (e) {
    if (e & 2147483648) {
      e = e & ~2147483648;
      e += Math.pow(2, 31);
    }
    var t = e.toString(16);
    while (t.length < 8) {
      t = "0" + t;
    }
    return t;
  };
  k.reverseBytes = function (e) {
    var t = 0;
    t += e >>> 24 & 255;
    t += (e >>> 16 & 255) << 8;
    t += (e >>> 8 & 255) << 16;
    t += (e & 255) << 24;
    return t;
  };
  k.leftRotate = function (e, t) {
    return e << t | e >>> 32 - t;
  };
  k.md5 = function (e) {
    var t = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21];
    var a = [];
    for (var i = 0; i <= 63; i++) {
      a[i] = Math.abs(Math.sin(i + 1)) * Math.pow(2, 32) << 0;
    }
    var n = 1732584193,
        o = 4023233417,
        r = 2562383102,
        s = 271733878,
        d,
        l;
    d = k.toUtf8ByteArr(e);
    e = null;
    l = d.length;
    d.push(128);
    var c = Math.abs(448 - d.length * 8 % 512) / 8;
    while (c--) {
      d.push(0);
    }
    d.push(l * 8 & 255, l * 8 >> 8 & 255, l * 8 >> 16 & 255, l * 8 >> 24 & 255);
    var i = 4;
    while (i--) {
      d.push(0);
    }
    var g = k.leftRotate;
    var i = 0,
        f = [];
    while (i < d.length) {
      for (var u = 0; u <= 15; u++) {
        f[u] = (d[i + 4 * u] << 0) + (d[i + 4 * u + 1] << 8) + (d[i + 4 * u + 2] << 16) + (d[i + 4 * u + 3] << 24);
      }
      var p = n,
          m = o,
          h = r,
          _ = s,
          w,
          D;
      for (var u = 0; u <= 63; u++) {
        if (u <= 15) {
          w = m & h | ~m & _;
          D = u;
        } else if (u <= 31) {
          w = _ & m | ~_ & h;
          D = (5 * u + 1) % 16;
        } else if (u <= 47) {
          w = m ^ h ^ _;
          D = (3 * u + 5) % 16;
        } else {
          w = h ^ (m | ~_);
          D = 7 * u % 16;
        }
        var v = _;
        _ = h;
        h = m;
        m = m + g(p + w + a[u] + f[D], t[u]);
        p = v;
      }
      n = n + p << 0;
      o = o + m << 0;
      r = r + h << 0;
      s = s + _ << 0;
      i += 512 / 8;
    }
    var x = y(n) + y(o) + y(r) + y(s);

    function y(e) {
      return k.toHex32(k.reverseBytes(e));
    }
    return x;
  };
})();
var hexcase = 0;
var b64pad = "";

function hex_md5(e) {
  return rstr2hex(rstr_md5(str2rstr_utf8(e)));
}

function rstr_md5(e) {
  return binl2rstr(binl_md5(rstr2binl(e), e.length * 8));
}

function rstr2hex(e) {
  try {
    hexcase;
  } catch (e) {
    hexcase = 0;
  }
  var t = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var a = "";
  var i;
  for (var n = 0; n < e.length; n++) {
    i = e.charCodeAt(n);
    a += t.charAt(i >>> 4 & 15) + t.charAt(i & 15);
  }
  return a;
}

function str2rstr_utf8(e) {
  return unescape(encodeURI(e));
}

function rstr2binl(e) {
  var t = Array(e.length >> 2);
  for (var a = 0; a < t.length; a++) t[a] = 0;
  for (var a = 0; a < e.length * 8; a += 8) t[a >> 5] |= (e.charCodeAt(a / 8) & 255) << a % 32;
  return t;
}

function binl2rstr(e) {
  var t = "";
  for (var a = 0; a < e.length * 32; a += 8) t += String.fromCharCode(e[a >> 5] >>> a % 32 & 255);
  return t;
}

function binl_md5(e, t) {
  e[t >> 5] |= 128 << t % 32;
  e[(t + 64 >>> 9 << 4) + 14] = t;
  var a = 1732584193;
  var i = -271733879;
  var n = -1732584194;
  var o = 271733878;
  for (var r = 0; r < e.length; r += 16) {
    var s = a;
    var d = i;
    var l = n;
    var c = o;
    a = md5_ff(a, i, n, o, e[r + 0], 7, -680876936);
    o = md5_ff(o, a, i, n, e[r + 1], 12, -389564586);
    n = md5_ff(n, o, a, i, e[r + 2], 17, 606105819);
    i = md5_ff(i, n, o, a, e[r + 3], 22, -1044525330);
    a = md5_ff(a, i, n, o, e[r + 4], 7, -176418897);
    o = md5_ff(o, a, i, n, e[r + 5], 12, 1200080426);
    n = md5_ff(n, o, a, i, e[r + 6], 17, -1473231341);
    i = md5_ff(i, n, o, a, e[r + 7], 22, -45705983);
    a = md5_ff(a, i, n, o, e[r + 8], 7, 1770035416);
    o = md5_ff(o, a, i, n, e[r + 9], 12, -1958414417);
    n = md5_ff(n, o, a, i, e[r + 10], 17, -42063);
    i = md5_ff(i, n, o, a, e[r + 11], 22, -1990404162);
    a = md5_ff(a, i, n, o, e[r + 12], 7, 1804603682);
    o = md5_ff(o, a, i, n, e[r + 13], 12, -40341101);
    n = md5_ff(n, o, a, i, e[r + 14], 17, -1502002290);
    i = md5_ff(i, n, o, a, e[r + 15], 22, 1236535329);
    a = md5_gg(a, i, n, o, e[r + 1], 5, -165796510);
    o = md5_gg(o, a, i, n, e[r + 6], 9, -1069501632);
    n = md5_gg(n, o, a, i, e[r + 11], 14, 643717713);
    i = md5_gg(i, n, o, a, e[r + 0], 20, -373897302);
    a = md5_gg(a, i, n, o, e[r + 5], 5, -701558691);
    o = md5_gg(o, a, i, n, e[r + 10], 9, 38016083);
    n = md5_gg(n, o, a, i, e[r + 15], 14, -660478335);
    i = md5_gg(i, n, o, a, e[r + 4], 20, -405537848);
    a = md5_gg(a, i, n, o, e[r + 9], 5, 568446438);
    o = md5_gg(o, a, i, n, e[r + 14], 9, -1019803690);
    n = md5_gg(n, o, a, i, e[r + 3], 14, -187363961);
    i = md5_gg(i, n, o, a, e[r + 8], 20, 1163531501);
    a = md5_gg(a, i, n, o, e[r + 13], 5, -1444681467);
    o = md5_gg(o, a, i, n, e[r + 2], 9, -51403784);
    n = md5_gg(n, o, a, i, e[r + 7], 14, 1735328473);
    i = md5_gg(i, n, o, a, e[r + 12], 20, -1926607734);
    a = md5_hh(a, i, n, o, e[r + 5], 4, -378558);
    o = md5_hh(o, a, i, n, e[r + 8], 11, -2022574463);
    n = md5_hh(n, o, a, i, e[r + 11], 16, 1839030562);
    i = md5_hh(i, n, o, a, e[r + 14], 23, -35309556);
    a = md5_hh(a, i, n, o, e[r + 1], 4, -1530992060);
    o = md5_hh(o, a, i, n, e[r + 4], 11, 1272893353);
    n = md5_hh(n, o, a, i, e[r + 7], 16, -155497632);
    i = md5_hh(i, n, o, a, e[r + 10], 23, -1094730640);
    a = md5_hh(a, i, n, o, e[r + 13], 4, 681279174);
    o = md5_hh(o, a, i, n, e[r + 0], 11, -358537222);
    n = md5_hh(n, o, a, i, e[r + 3], 16, -722521979);
    i = md5_hh(i, n, o, a, e[r + 6], 23, 76029189);
    a = md5_hh(a, i, n, o, e[r + 9], 4, -640364487);
    o = md5_hh(o, a, i, n, e[r + 12], 11, -421815835);
    n = md5_hh(n, o, a, i, e[r + 15], 16, 530742520);
    i = md5_hh(i, n, o, a, e[r + 2], 23, -995338651);
    a = md5_ii(a, i, n, o, e[r + 0], 6, -198630844);
    o = md5_ii(o, a, i, n, e[r + 7], 10, 1126891415);
    n = md5_ii(n, o, a, i, e[r + 14], 15, -1416354905);
    i = md5_ii(i, n, o, a, e[r + 5], 21, -57434055);
    a = md5_ii(a, i, n, o, e[r + 12], 6, 1700485571);
    o = md5_ii(o, a, i, n, e[r + 3], 10, -1894986606);
    n = md5_ii(n, o, a, i, e[r + 10], 15, -1051523);
    i = md5_ii(i, n, o, a, e[r + 1], 21, -2054922799);
    a = md5_ii(a, i, n, o, e[r + 8], 6, 1873313359);
    o = md5_ii(o, a, i, n, e[r + 15], 10, -30611744);
    n = md5_ii(n, o, a, i, e[r + 6], 15, -1560198380);
    i = md5_ii(i, n, o, a, e[r + 13], 21, 1309151649);
    a = md5_ii(a, i, n, o, e[r + 4], 6, -145523070);
    o = md5_ii(o, a, i, n, e[r + 11], 10, -1120210379);
    n = md5_ii(n, o, a, i, e[r + 2], 15, 718787259);
    i = md5_ii(i, n, o, a, e[r + 9], 21, -343485551);
    a = safe_add(a, s);
    i = safe_add(i, d);
    n = safe_add(n, l);
    o = safe_add(o, c);
  }
  return Array(a, i, n, o);
}

function md5_cmn(e, t, a, i, n, o) {
  return safe_add(bit_rol(safe_add(safe_add(t, e), safe_add(i, o)), n), a);
}

function md5_ff(e, t, a, i, n, o, r) {
  return md5_cmn(t & a | ~t & i, e, t, n, o, r);
}

function md5_gg(e, t, a, i, n, o, r) {
  return md5_cmn(t & i | a & ~i, e, t, n, o, r);
}

function md5_hh(e, t, a, i, n, o, r) {
  return md5_cmn(t ^ a ^ i, e, t, n, o, r);
}

function md5_ii(e, t, a, i, n, o, r) {
  return md5_cmn(a ^ (t | ~i), e, t, n, o, r);
}

function safe_add(e, t) {
  var a = (e & 65535) + (t & 65535);
  var i = (e >> 16) + (t >> 16) + (a >> 16);
  return i << 16 | a & 65535;
}

function bit_rol(e, t) {
  return e << t | e >>> 32 - t;
}

function md5cycle(e, t) {
  var a = e[0],
      i = e[1],
      n = e[2],
      o = e[3];
  a = ff(a, i, n, o, t[0], 7, -680876936);
  o = ff(o, a, i, n, t[1], 12, -389564586);
  n = ff(n, o, a, i, t[2], 17, 606105819);
  i = ff(i, n, o, a, t[3], 22, -1044525330);
  a = ff(a, i, n, o, t[4], 7, -176418897);
  o = ff(o, a, i, n, t[5], 12, 1200080426);
  n = ff(n, o, a, i, t[6], 17, -1473231341);
  i = ff(i, n, o, a, t[7], 22, -45705983);
  a = ff(a, i, n, o, t[8], 7, 1770035416);
  o = ff(o, a, i, n, t[9], 12, -1958414417);
  n = ff(n, o, a, i, t[10], 17, -42063);
  i = ff(i, n, o, a, t[11], 22, -1990404162);
  a = ff(a, i, n, o, t[12], 7, 1804603682);
  o = ff(o, a, i, n, t[13], 12, -40341101);
  n = ff(n, o, a, i, t[14], 17, -1502002290);
  i = ff(i, n, o, a, t[15], 22, 1236535329);
  a = gg(a, i, n, o, t[1], 5, -165796510);
  o = gg(o, a, i, n, t[6], 9, -1069501632);
  n = gg(n, o, a, i, t[11], 14, 643717713);
  i = gg(i, n, o, a, t[0], 20, -373897302);
  a = gg(a, i, n, o, t[5], 5, -701558691);
  o = gg(o, a, i, n, t[10], 9, 38016083);
  n = gg(n, o, a, i, t[15], 14, -660478335);
  i = gg(i, n, o, a, t[4], 20, -405537848);
  a = gg(a, i, n, o, t[9], 5, 568446438);
  o = gg(o, a, i, n, t[14], 9, -1019803690);
  n = gg(n, o, a, i, t[3], 14, -187363961);
  i = gg(i, n, o, a, t[8], 20, 1163531501);
  a = gg(a, i, n, o, t[13], 5, -1444681467);
  o = gg(o, a, i, n, t[2], 9, -51403784);
  n = gg(n, o, a, i, t[7], 14, 1735328473);
  i = gg(i, n, o, a, t[12], 20, -1926607734);
  a = hh(a, i, n, o, t[5], 4, -378558);
  o = hh(o, a, i, n, t[8], 11, -2022574463);
  n = hh(n, o, a, i, t[11], 16, 1839030562);
  i = hh(i, n, o, a, t[14], 23, -35309556);
  a = hh(a, i, n, o, t[1], 4, -1530992060);
  o = hh(o, a, i, n, t[4], 11, 1272893353);
  n = hh(n, o, a, i, t[7], 16, -155497632);
  i = hh(i, n, o, a, t[10], 23, -1094730640);
  a = hh(a, i, n, o, t[13], 4, 681279174);
  o = hh(o, a, i, n, t[0], 11, -358537222);
  n = hh(n, o, a, i, t[3], 16, -722521979);
  i = hh(i, n, o, a, t[6], 23, 76029189);
  a = hh(a, i, n, o, t[9], 4, -640364487);
  o = hh(o, a, i, n, t[12], 11, -421815835);
  n = hh(n, o, a, i, t[15], 16, 530742520);
  i = hh(i, n, o, a, t[2], 23, -995338651);
  a = ii(a, i, n, o, t[0], 6, -198630844);
  o = ii(o, a, i, n, t[7], 10, 1126891415);
  n = ii(n, o, a, i, t[14], 15, -1416354905);
  i = ii(i, n, o, a, t[5], 21, -57434055);
  a = ii(a, i, n, o, t[12], 6, 1700485571);
  o = ii(o, a, i, n, t[3], 10, -1894986606);
  n = ii(n, o, a, i, t[10], 15, -1051523);
  i = ii(i, n, o, a, t[1], 21, -2054922799);
  a = ii(a, i, n, o, t[8], 6, 1873313359);
  o = ii(o, a, i, n, t[15], 10, -30611744);
  n = ii(n, o, a, i, t[6], 15, -1560198380);
  i = ii(i, n, o, a, t[13], 21, 1309151649);
  a = ii(a, i, n, o, t[4], 6, -145523070);
  o = ii(o, a, i, n, t[11], 10, -1120210379);
  n = ii(n, o, a, i, t[2], 15, 718787259);
  i = ii(i, n, o, a, t[9], 21, -343485551);
  e[0] = add32(a, e[0]);
  e[1] = add32(i, e[1]);
  e[2] = add32(n, e[2]);
  e[3] = add32(o, e[3]);
}

function cmn(e, t, a, i, n, o) {
  t = add32(add32(t, e), add32(i, o));
  return add32(t << n | t >>> 32 - n, a);
}

function ff(e, t, a, i, n, o, r) {
  return cmn(t & a | ~t & i, e, t, n, o, r);
}

function gg(e, t, a, i, n, o, r) {
  return cmn(t & i | a & ~i, e, t, n, o, r);
}

function hh(e, t, a, i, n, o, r) {
  return cmn(t ^ a ^ i, e, t, n, o, r);
}

function ii(e, t, a, i, n, o, r) {
  return cmn(a ^ (t | ~i), e, t, n, o, r);
}

function md51(e) {
  var t = "";
  var a = e.length,
      i = [1732584193, -271733879, -1732584194, 271733878],
      n;
  for (n = 64; n <= e.length; n += 64) {
    md5cycle(i, md5blk(e.substring(n - 64, n)));
  }
  e = e.substring(n - 64);
  var o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (n = 0; n < e.length; n++) o[n >> 2] |= e.charCodeAt(n) << (n % 4 << 3);
  o[n >> 2] |= 128 << (n % 4 << 3);
  if (n > 55) {
    md5cycle(i, o);
    for (n = 0; n < 16; n++) o[n] = 0;
  }
  o[14] = a * 8;
  md5cycle(i, o);
  return i;
}

function md5blk(e) {
  var t = [],
      a;
  for (a = 0; a < 64; a += 4) {
    t[a >> 2] = e.charCodeAt(a) + (e.charCodeAt(a + 1) << 8) + (e.charCodeAt(a + 2) << 16) + (e.charCodeAt(a + 3) << 24);
  }
  return t;
}
var hex_chr = "0123456789abcdef".split("");

function rhex(e) {
  var t = "",
      a = 0;
  for (; a < 4; a++) t += hex_chr[e >> a * 8 + 4 & 15] + hex_chr[e >> a * 8 & 15];
  return t;
}

function hex(e) {
  for (var t = 0; t < e.length; t++) e[t] = rhex(e[t]);
  return e.join("");
}

function md5(e) {
  return hex(md51(e));
}

function add32(e, t) {
  return e + t & 4294967295;
}
if (md5("hello") != "5d41402abc4b2a76b9719d911017c592") {
  function add32(e, t) {
    var a = (e & 65535) + (t & 65535),
        i = (e >> 16) + (t >> 16) + (a >> 16);
    return i << 16 | a & 65535;
  }
}(function () {
  function e(e, t) {
    var a = e[0],
        i = e[1],
        n = e[2],
        o = e[3];
    a = r(a, i, n, o, t[0], 7, -680876936);
    o = r(o, a, i, n, t[1], 12, -389564586);
    n = r(n, o, a, i, t[2], 17, 606105819);
    i = r(i, n, o, a, t[3], 22, -1044525330);
    a = r(a, i, n, o, t[4], 7, -176418897);
    o = r(o, a, i, n, t[5], 12, 1200080426);
    n = r(n, o, a, i, t[6], 17, -1473231341);
    i = r(i, n, o, a, t[7], 22, -45705983);
    a = r(a, i, n, o, t[8], 7, 1770035416);
    o = r(o, a, i, n, t[9], 12, -1958414417);
    n = r(n, o, a, i, t[10], 17, -42063);
    i = r(i, n, o, a, t[11], 22, -1990404162);
    a = r(a, i, n, o, t[12], 7, 1804603682);
    o = r(o, a, i, n, t[13], 12, -40341101);
    n = r(n, o, a, i, t[14], 17, -1502002290);
    i = r(i, n, o, a, t[15], 22, 1236535329);
    a = d(a, i, n, o, t[1], 5, -165796510);
    o = d(o, a, i, n, t[6], 9, -1069501632);
    n = d(n, o, a, i, t[11], 14, 643717713);
    i = d(i, n, o, a, t[0], 20, -373897302);
    a = d(a, i, n, o, t[5], 5, -701558691);
    o = d(o, a, i, n, t[10], 9, 38016083);
    n = d(n, o, a, i, t[15], 14, -660478335);
    i = d(i, n, o, a, t[4], 20, -405537848);
    a = d(a, i, n, o, t[9], 5, 568446438);
    o = d(o, a, i, n, t[14], 9, -1019803690);
    n = d(n, o, a, i, t[3], 14, -187363961);
    i = d(i, n, o, a, t[8], 20, 1163531501);
    a = d(a, i, n, o, t[13], 5, -1444681467);
    o = d(o, a, i, n, t[2], 9, -51403784);
    n = d(n, o, a, i, t[7], 14, 1735328473);
    i = d(i, n, o, a, t[12], 20, -1926607734);
    a = l(a, i, n, o, t[5], 4, -378558);
    o = l(o, a, i, n, t[8], 11, -2022574463);
    n = l(n, o, a, i, t[11], 16, 1839030562);
    i = l(i, n, o, a, t[14], 23, -35309556);
    a = l(a, i, n, o, t[1], 4, -1530992060);
    o = l(o, a, i, n, t[4], 11, 1272893353);
    n = l(n, o, a, i, t[7], 16, -155497632);
    i = l(i, n, o, a, t[10], 23, -1094730640);
    a = l(a, i, n, o, t[13], 4, 681279174);
    o = l(o, a, i, n, t[0], 11, -358537222);
    n = l(n, o, a, i, t[3], 16, -722521979);
    i = l(i, n, o, a, t[6], 23, 76029189);
    a = l(a, i, n, o, t[9], 4, -640364487);
    o = l(o, a, i, n, t[12], 11, -421815835);
    n = l(n, o, a, i, t[15], 16, 530742520);
    i = l(i, n, o, a, t[2], 23, -995338651);
    a = c(a, i, n, o, t[0], 6, -198630844);
    o = c(o, a, i, n, t[7], 10, 1126891415);
    n = c(n, o, a, i, t[14], 15, -1416354905);
    i = c(i, n, o, a, t[5], 21, -57434055);
    a = c(a, i, n, o, t[12], 6, 1700485571);
    o = c(o, a, i, n, t[3], 10, -1894986606);
    n = c(n, o, a, i, t[10], 15, -1051523);
    i = c(i, n, o, a, t[1], 21, -2054922799);
    a = c(a, i, n, o, t[8], 6, 1873313359);
    o = c(o, a, i, n, t[15], 10, -30611744);
    n = c(n, o, a, i, t[6], 15, -1560198380);
    i = c(i, n, o, a, t[13], 21, 1309151649);
    a = c(a, i, n, o, t[4], 6, -145523070);
    o = c(o, a, i, n, t[11], 10, -1120210379);
    n = c(n, o, a, i, t[2], 15, 718787259);
    i = c(i, n, o, a, t[9], 21, -343485551);
    e[0] = g(a, e[0]);
    e[1] = g(i, e[1]);
    e[2] = g(n, e[2]);
    e[3] = g(o, e[3]);
  }

  function s(e, t, a, i, n, o) {
    t = g(g(t, e), g(i, o));
    return g(t << n | t >>> 32 - n, a);
  }

  function r(e, t, a, i, n, o, r) {
    return s(t & a | ~t & i, e, t, n, o, r);
  }

  function d(e, t, a, i, n, o, r) {
    return s(t & i | a & ~i, e, t, n, o, r);
  }

  function l(e, t, a, i, n, o, r) {
    return s(t ^ a ^ i, e, t, n, o, r);
  }

  function c(e, t, a, i, n, o, r) {
    return s(a ^ (t | ~i), e, t, n, o, r);
  }

  function g(e, t) {
    return e + t & 4294967295;
  }
  if (md5("hello") != "5d41402abc4b2a76b9719d911017c592") {
    function g(e, t) {
      var a = (e & 65535) + (t & 65535),
          i = (e >> 16) + (t >> 16) + (a >> 16);
      return i << 16 | a & 65535;
    }
  }
})();