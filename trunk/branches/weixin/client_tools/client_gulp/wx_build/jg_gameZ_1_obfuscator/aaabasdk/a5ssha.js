var C = wx.$a;
var window = window || GameGlobal;var aladinSDK = function (a) {
  var n = {};function o(e) {
    if (n[e]) return n[e].exports;var t = n[e] = { i: e, l: !1, exports: {} };return a[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports;
  }return o.m = a, o.c = n, o.d = function (e, t, a) {
    o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
  }, o.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, o.t = function (t, e) {
    if (1 & e && (t = o(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var a = Object.create(null);if (o.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var n in t) o.d(a, n, function (e) {
      return t[e];
    }.bind(null, n));return a;
  }, o.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return o.d(t, "a", t), t;
  }, o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, o.p = "", o(o.s = 7);
}([function (e, t, a) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var n = (o.sdkVersion = "4.0.5", o.envVersion = "release", o.appId = "", o.version = "1.0.0", o.openId = "", o.unionId = "", o.testAppid = "wx9797c6a657767e49", o.testOpenId = "oLxAA5B5RGw3OAO9OBnPCbJMjtXQ", o.ReportMarketDomain = window.ReportMarketDev ? "https://distribution-beta.boomegg.cn" : "https://mprogram.boomegg.cn", o.QQH5PayUrl = window.ReportMarketDev ? "https://www.boomegg.cn/sprogram/beta/html/qqpay.html" : "https://www.boomegg.cn/sprogram/production/html/qqpay.html", o.ImgDomain = "https://ad-static.boomegg.cn", o.token = "", o.RunEnv = {}, o.GamePlatform = "", o.AutoPayCb = !1, o.base64Test = "http://ad-static.boomegg.cn/flypic/%E4%B8%8A%E6%8A%A5%E6%A3%80%E6%9F%A5.png", o.AccountInfo = null, o.InviteStartTime = null, o.InviteEndTime = null, o.InviteKeyList = [], o);function o() {}t.ALConfig = n;
}, function (e, t, a) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var n = (o.opts = null, o.scene = 0, o.shareScene = 0, o.topInviter = "0", o.inviter = "0", o.level = 1, o.score = 1, o.isVertical = !1, o.isTSA = !1, o.allowShare = !1, o.appIdListStr = "", o.sdkData = null, o.moreData = null, o.iconData = null, o.curShareData = null, o.curShareScene = "", o.shareData = [], o);function o() {}t.ALData = n;var r = (i.NickName = "", i.AvatarUrl = "", i.Country = "", i.Gender = 0, i.Language = "", i.Province = "", i.Model = "", i.NewPlayer = !1, i.Openid = "", i.City = "", i.SessionKey = "", i.ReportOpenid = !1, i);function i() {}t.UserInfoData = r;var p = (s.Inviter = { normal_invite_num: 0, normal_level_help_sum: 0, normal_pay_help_sum: 0, normal_user_list: [], open_invite_num: 0, open_today_invite_num: 0, open_level_help_sum: 0, open_pay_help_sum: 0 }, s.Invited = { level_help_sum: 0, pay_help_sum: 0 }, s);function s() {}t.InvitedData = p;t.PlatformEnum = { QQ: "qq", WeChat: "weixin", TouTiao: "tt", Oppo: "oppo", Vivo: "vivo", HuaWei: "hw", Other: "other" };t.BehaviorEnum = { Goods: "goods", Growth: "growth", Activity: "activity" };t.LoginTypeEnum = { Other: "0", Visitor: "1", Wechat: "2", QQ: "3" };t.MsgCheckSceneEnum = { Other: 0, Info: 1, Comments: 2, Form: 3, SocialLog: 4 };
}, function (e, t, a) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var n = a(4),
      o = a(3),
      r = a(0),
      i = a(1),
      p = (s.LOG = function (e) {
    for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];this.DEBUG && console.log("[AladinSDK]", e, t);
  }, s.addAppidPrefix = function (e) {
    return r.ALConfig.GamePlatform == i.PlatformEnum.Oppo || r.ALConfig.GamePlatform == i.PlatformEnum.Vivo || r.ALConfig.GamePlatform == i.PlatformEnum.HuaWei ? r.ALConfig.GamePlatform + e : e;
  }, s.wxNotExist = function () {
    return "undefined" == typeof wx;
  }, s.wxExist = function () {
    return "undefined" != typeof wx;
  }, s.ttExist = function () {
    return "undefined" != typeof tt;
  }, s.ttNotExist = function () {
    return "undefined" == typeof tt;
  }, s.qgExist = function () {
    return "undefined" != typeof qg;
  }, s.qgNotExist = function () {
    return "undefined" == typeof qg;
  }, s.hbsExist = function () {
    return "undefined" != typeof hbs;
  }, s.hbsNotExist = function () {
    return "undefined" == typeof hbs;
  }, s.qqNotExist = function () {
    return "undefined" == typeof qq;
  }, s.qqExist = function () {
    return "undefined" != typeof qq;
  }, s.runEnvExist = function () {
    return "undefined" != typeof wx || "undefined" != typeof qq || "undefined" != typeof tt || "undefined" != typeof qg || "undefined" != typeof hbs;
  }, s.runEnvNotExist = function () {
    return "undefined" == typeof wx && "undefined" == typeof qq && "undefined" == typeof tt && "undefined" == typeof qg && "undefined" == typeof hbs;
  }, s.initRunEnv = function () {
    switch (r.ALConfig.GamePlatform) {case i.PlatformEnum.QQ:
        r.ALConfig.RunEnv = qq;break;case i.PlatformEnum.WeChat:
        r.ALConfig.RunEnv = wx;break;case i.PlatformEnum.TouTiao:
        r.ALConfig.RunEnv = tt;break;case i.PlatformEnum.HuaWei:
        r.ALConfig.RunEnv = hbs;break;case i.PlatformEnum.Oppo || i.PlatformEnum.Vivo:
        r.ALConfig.RunEnv = qg;break;default:
        throw Error("getRunEnv erro: no match runtime environment");}
  }, s.initGamePlatform = function () {
    if (s.qqExist()) r.ALConfig.GamePlatform = i.PlatformEnum.QQ;else if (s.wxExist()) r.ALConfig.GamePlatform = i.PlatformEnum.WeChat;else if (s.ttExist()) r.ALConfig.GamePlatform = i.PlatformEnum.TouTiao;else if (s.hbsExist()) r.ALConfig.GamePlatform = i.PlatformEnum.HuaWei;else {
      if (s.qgExist()) try {
        var e = qg.getSystemInfoSync();if (e && e.brand) return void (r.ALConfig.GamePlatform = e.brand.toLowerCase());
      } catch (e) {
        console.error("initGamePlatform catch error:", e);
      }r.ALConfig.GamePlatform = i.PlatformEnum.Other;
    }
  }, s.readAppIDList = function () {
    return new Promise(function (o, e) {
      var t = "devtools" === r.ALConfig.RunEnv.getSystemInfoSync().platform ? "a1GAMEa1.json" : "app-config.json";r.ALConfig.RunEnv.getFileSystemManager().readFile({ filePath: t, encoding: "utf-8", success: function (e) {
          var t = e.data,
              a = JSON.parse(t).navigateToMiniProgramAppIdList,
              n = "";a && (n = a.join(",")), s.LOG("ALSDK readAppIDList appIdListStr ", n), o(n);
        }, fail: function (e) {
          s.LOG("ALSDK readAppIDList error ", e), o("");
        } });
    });
  }, s.getUrlFileName = function (e) {
    return e.split("/").pop().split("?")[0].split("#")[0];
  }, s.getUrlReportName = function (e) {
    var t = e.split(r.ALConfig.ImgDomain);return 1 < t.length ? t[1].toString() : t[0].toString();
  }, s._buildQueryString = function (e) {
    var t = [];for (var a in e) e.hasOwnProperty(a) && t.push(a + "=" + e[a]);return t.join("&");
  }, s._mergeParams = function (e, t) {
    for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
  }, s._getInitParams = function (e, t) {
    if (t) for (var a in t) t.hasOwnProperty(a) && !e.hasOwnProperty(a) && (e[a] = t[a]);return s._buildQueryString(e);
  }, s._parseQueryString = function (e) {
    var t = {};if (!e) return t;for (var a = e.split("&"), n = null, o = 0, r = a.length; o < r; o++) t[(n = a[o].split("="))[0]] = n[1];return t;
  }, s.parseNavigateParam = function (e) {
    var t = e[0],
        a = e[1],
        n = e[2] || "pages/index/index",
        o = this._parseQueryString(e[3]);if (-1 < n.indexOf("?")) {
      var r = n.split("?"),
          i = this._parseQueryString(r[1]);this._mergeParams(o, i);
    }return o.tgt = e[1], { appId: t, path: n += "?" + this._buildQueryString(o), extraData: o, target_appid: a };
  }, s.isInteger = function (e) {
    return Math.floor(e) === e;
  }, s.isFunction = function (e) {
    return "[object Function]" === Object.prototype.toString.call(e);
  }, s.convertVersionStringToNumber = function (e) {
    var t = e.split(".");return Number(t[0]) << 24 | Number(t[1]) << 16 | 0 | Number(t[2]);
  }, s.reportUserInfo = function () {
    r.ALConfig.GamePlatform != i.PlatformEnum.WeChat && r.ALConfig.GamePlatform != i.PlatformEnum.QQ || r.ALConfig.RunEnv.getUserInfo({ success: function (e) {
        if (e && e.userInfo && 0 != e.userInfo.gender && "" != e.userInfo.language && "" != e.userInfo.country) {
          var t = {};t.nickName = i.UserInfoData.NickName = e.userInfo.nickName || "", t.avatarUrl = i.UserInfoData.AvatarUrl = e.userInfo.avatarUrl || "", t.country = i.UserInfoData.Country = e.userInfo.country || "", t.gender = i.UserInfoData.Gender = void 0 !== e.userInfo.gender ? e.userInfo.gender : 0, t.language = i.UserInfoData.Language = e.userInfo.language || "", t.province = i.UserInfoData.Province = e.userInfo.province || "", t.city = i.UserInfoData.City = e.userInfo.city || "", o.ALReport.reportDataToServer(t);
        } else console.log("getUserInfo interface return anonymous userinfo!");
      }, fail: function (e) {
        console.warn("reportUserInfo getUserInfo fail:", e);
      } });
  }, s.saveSystemInfo = function () {
    if (!s.runEnvNotExist()) try {
      i.UserInfoData.Model = r.ALConfig.RunEnv.getSystemInfoSync().model;
    } catch (e) {
      console.error("getSystemInfoSync erro");
    }
  }, s.saveNetworkType = function () {
    if (!s.runEnvNotExist()) try {
      r.ALConfig.RunEnv.getNetworkType({ success: function (e) {
          n.ALIntercept.NetworkType = e.networkType;
        } });
    } catch (e) {
      console.error("getNetworkType erro");
    }
  }, s.saveAccountInfo = function () {
    if (r.ALConfig.GamePlatform == i.PlatformEnum.WeChat) try {
      r.ALConfig.AccountInfo = r.ALConfig.RunEnv.getAccountInfoSync();
    } catch (e) {
      console.error("saveAccountInfo catch error:", e);
    }
  }, s.showString = function (e) {
    if ((r.ALConfig.GamePlatform == i.PlatformEnum.WeChat || r.ALConfig.GamePlatform == i.PlatformEnum.QQ) && window.ShowReportTips) {
      var t = function () {
        s.Showing || 0 != s.ToastStrList.length && (s.Showing = !0, r.ALConfig.RunEnv.showToast({ title: "打点:" + s.ToastStrList.shift(), icon: "success", duration: 300, success: function () {
            s.TimerID && clearTimeout(s.TimerID), s.TimerID = setTimeout(function () {
              s.Showing = !1, s.TimerID = null, t();
            }, 300), console.log("showtoast success");
          }, fail: function () {
            s.Showing = !1;
          }, complete: function () {
            s.Showing = !0;
          } }));
      };s.ToastStrList.push(e), t();
    }
  }, s.getTimeStamp = function (e) {
    return new Date(e.replace(/-/g, "/")).getTime();
  }, s.getActivityDuration = function (e, t) {
    var a = s.getTimeStamp(e),
        n = s.getTimeStamp(t);return Math.ceil((n - a) / 864e5);
  }, s.getLoginType = function () {
    var e = i.LoginTypeEnum.Other;switch (r.ALConfig.GamePlatform) {case i.PlatformEnum.QQ:
        e = i.LoginTypeEnum.QQ;break;case i.PlatformEnum.WeChat:
        e = i.LoginTypeEnum.Wechat;break;default:
        e = i.LoginTypeEnum.Other;}return e;
  }, s.DEBUG = !0, s.ToastStrList = [], s.TimerID = null, s.Showing = !1, s);function s() {}t.ALUtil = p;
}, function (e, s, t) {
  "use strict";

  var l = this && this.__assign || function () {
    return (l = Object.assign || function (e) {
      for (var t, a = 1, n = arguments.length; a < n; a++) for (var o in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);return e;
    }).apply(this, arguments);
  };Object.defineProperty(s, "__esModule", { value: !0 });var d = t(1),
      c = t(0),
      u = t(5),
      f = t(2),
      i = t(4),
      a = (m.getAdsPos = function () {
    return this.Ads + "|" + this.AdsPos;
  }, m.init = function () {
    this._inited || (this._inited = !0, f.ALUtil.LOG("GamePlatform:", c.ALConfig.GamePlatform), f.ALUtil.LOG("ALReport init"), this.initStartTime(), f.ALUtil.runEnvNotExist() || (this._initAdsPos(), this._initReportData(), f.ALUtil.LOG("ALReport init success")));
  }, m.initStartTime = function () {
    m.startTime = new Date().getTime(), f.ALUtil.LOG("初始化游戏开始时间", m.startTime);
  }, m.reportTime = function (e) {
    if (0 != m.startTime) {
      var t = new Date().getTime(),
          a = l(l({}, m.publicParam), { report_type: "loadtime", typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_TIME, value: t - m.startTime });m.reportCheck.startTime = t - m.startTime, this.reportDataToMarketNew(a);
    }
  }, m.reportAnalytics = function (e, t) {
    if (isNaN(t)) f.ALUtil.LOG("ALReport step error --- ", t);else if (m.CustomNode[t]) console.warn("[AladinSDK] repeat reportAnalytics", t);else {
      m.CustomNode[t] = !0, this._inited || (console.warn("请先调用init方法"), c.ALConfig.appId = e, this.init()), this._initReportData(), this.reportPrefix, this._getCurrentDate(), this._getTimeStamp(), this.reportDevice2Sence, d.ALData.level, c.ALConfig.openId, d.ALData.topInviter, d.UserInfoData.Gender;var a = l(l({}, m.publicParam), { report_type: "analytics", typeStr: "10_" + t, ply: d.ALData.level, node: "0", open_id: c.ALConfig.openId, type: "10", sub_type: t, value: "", extra: d.UserInfoData.ReportOpenid ? "1" : "0", uuid: d.UserInfoData.NewPlayer ? "1" : "0", p_open_id: d.ALData.topInviter, gender: d.UserInfoData.Gender });f.ALUtil.showString("10_" + t), u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + "/box/stats_sdk_new", a, function (e) {
        e.isSucc || f.ALUtil.LOG("ALReport _report fail --- ", e.reason);
      });var n = 0,
          o = new Date().getTime(),
          r = m.LastCustomNode;n = 0 == m.CusRepLastTime ? o - m.startTime : o - m.CusRepLastTime, m.CusRepLastTime = o, m.LastCustomNode = Number(t), f.ALUtil.LOG("reportAnalytics with time", t, n, m.CusRepLastTime, i.ALIntercept.NetworkType, i.ALIntercept.IsOnShow, m.publicParam.channel, m.publicParam.benchmarkLevel), m.CustomDataCache.push({ step: Number(t), dtime: n, network_type: i.ALIntercept.NetworkType, is_onshow: i.ALIntercept.IsOnShow, last_node: r });
    }
  }, m.report = function (e, t) {
    if (this._inited || this.init(), e != s.REPORT_TYPE_ENUM.REPORT_TYPE_TIME) {
      var a = e.split("_");if (a.length < 2) console.warn("ALReport 参数传递错误");else {
        f.ALUtil.showString(e);var n = t || "";if (e === s.REPORT_TYPE_ENUM.REPORT_TYPE_OPEN_ID) return c.ALConfig.openId = t, "" == m.reportCheck.openid ? m.reportCheck.openid = t : console.warn("openid重复上报"), window.ALOpenId = t, this.reportOpenId(), this.reportPerformanceData(), void this._initLevelData();if (e === s.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_BTN_SHOW && (m.reportCheck.video_sence = t, m.publicParam.video_sence = t), "16_1" === e && (m.reportCheck.level = t), e === s.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_WATCH_NORMAL && m.reportCheck.video_play++, e !== s.REPORT_TYPE_ENUM.REPORT_TYPE_PAY_MENT_IOS) {
          var o = a[0],
              r = a[1];this._initReportData(), this.reportPrefix, this._getCurrentDate(), this._getTimeStamp(), this.reportDevice2Sence, d.ALData.level, c.ALConfig.openId, d.ALData.topInviter, d.UserInfoData.Gender;var i = l(l({}, m.publicParam), { report_type: "normal", typeStr: e, ply: d.ALData.level, node: "0", open_id: c.ALConfig.openId, type: o, sub_type: r, value: "0", extra: n, uuid: "", p_open_id: d.ALData.topInviter, gender: d.UserInfoData.Gender });e === s.REPORT_TYPE_ENUM.REPORT_TYPE_SHARE_READY && (i.video_sence = d.ALData.curShareScene), u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + "/box/stats_sdk_new", i, function (e) {
            e.isSucc || f.ALUtil.LOG("ALReport _report fail --- ", e.reason);
          });
        } else {
          f.ALUtil.LOG("ios支付数据", t);var p = l(l({}, m.publicParam), { report_type: "iospay", typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_PAY_MENT_IOS, extra_data: t });this.reportDataToMarketNew(p);
        }
      }
    } else this.reportTime(t);
  }, m.commonReport = function (e, t, a) {
    var n = l(l(l({}, m.publicParam), { report_type: "normal", typeStr: e + "_" + t, project_id: c.ALConfig.appId, open_id: c.ALConfig.openId, type: e, sub_type: t }), a);u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + "/box/stats_sdk_new", n, function (e) {
      e.isSucc || f.ALUtil.LOG("commonReport fail --- ", e.reason);
    });
  }, m.reportPerformanceData = function () {
    if (c.ALConfig.openId && 0 < m.CustomDataCache.length) {
      var e = new Date().getTime(),
          t = e - m.CusRepLastTime;m.CusRepLastTime = e, m.CustomDataCache.push({ step: 100, dtime: t, network_type: i.ALIntercept.NetworkType, is_onshow: i.ALIntercept.IsOnShow, last_node: m.LastCustomNode }), m.CustomDataCache.push({ step: 200, dtime: e - m.startTime, network_type: i.ALIntercept.NetworkType, is_onshow: i.ALIntercept.IsOnShow, last_node: i.ALIntercept.OnHideAllTime }), f.ALUtil.LOG("[性能数据]reportPerformanceData:", m.CustomDataCache);var a = l(l({}, m.publicParam), { report_type: "performance", typeStr: "20_1", open_id: c.ALConfig.openId, type: 20, sub_type: 1, p_open_id: d.ALData.topInviter, gender: d.UserInfoData.Gender, ply: m.publicParam.benchmarkLevel, video_sence: JSON.stringify(m.CustomDataCache) });u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + "/box/stats_sdk_new", a, function (e) {
        e.isSucc || f.ALUtil.LOG("reportPerformanceData fail --- ", e.reason);
      }), m.CustomDataCache = [], m.LastCustomNode = -1;
    }
  }, m.reportOpenId = function () {
    var e = l(l({}, m.publicParam), { report_type: "openId", typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_OPEN_ID, extra_data: this.getAdsPos(), value: new Date().getTime() - m.startTime });m.ad_appid && (e.ad_appid = m.ad_appid), e.nickName = d.UserInfoData.NickName, e.avatarUrl = d.UserInfoData.AvatarUrl, e.country = d.UserInfoData.Country, e.gender = d.UserInfoData.Gender, e.language = d.UserInfoData.Language, e.province = d.UserInfoData.Province, e.networkType = i.ALIntercept.NetworkType, e.model = d.UserInfoData.Model, m.reportDataToMarketNew(e);
  }, m.reportDataToServer = function (t) {
    var e = { appid: c.ALConfig.appId, openid: c.ALConfig.openId, nickName: t.nickName, gender: t.gender, avatarUrl: t.avatarUrl, country: t.country, province: t.province, city: t.city, language: t.language };u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + "/box/userInfo/save", e, function (e) {
      t.complete && t.complete(e);
    });
  }, m.reportPay = function (e) {
    f.ALUtil.LOG("拦截支付数据", e);var t = e.split("|");2 <= t.length && "1" == t[1] && (m.reportCheck.payAmount += parseInt(t[0]));var a = l(l({}, m.publicParam), { report_type: "pay", typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_PAY_MENT_ENTER, extra_data: e });this.reportDataToMarketNew(a);
  }, m.reportShareState = function (e) {
    var t = e ? "1" : "2",
        a = l(l({}, m.publicParam), { report_type: "share", typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_SHARE_SUCCESS, diff_key: t });this.reportDataToMarketNew(a);
  }, m.reportDataToMarket = function (e) {
    e.id = c.ALConfig.appId, e.openid = c.ALConfig.openId, f.ALUtil.LOG("reportDataToMarket param --- ", e), u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + "/box/stats_sdk", e, function (e) {
      e.isSucc || f.ALUtil.LOG("ALReport reportServer fail --- ", e.reason);
    });
  }, m.reportDataToMarketNew = function (e) {
    var t = e.typeStr.split("_");t.length < 2 ? console.warn("ALReport 参数传递错误") : (e.type = t[0], e.sub_type = t[1], e.project_id = c.ALConfig.appId, e.open_id = c.ALConfig.openId, e.ply = d.ALData.level, e.p_open_id = d.ALData.topInviter, e.gender = d.UserInfoData.Gender, f.ALUtil.LOG("reportDataToMarket param --- ", e), u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + "/box/stats_sdk_new", e, function (e) {
      e.isSucc || f.ALUtil.LOG("ALReport reportServer fail --- ", e.reason);
    }));
  }, m.getPublicParam = function () {
    var e = l({}, m.publicParam);return e.project_id = c.ALConfig.appId, e.open_id = c.ALConfig.openId, e.ply = d.ALData.level, e.p_open_id = d.ALData.topInviter, e.gender = d.UserInfoData.Gender, e;
  }, m._initAdsPos = function () {
    if (c.ALConfig.GamePlatform == d.PlatformEnum.WeChat || c.ALConfig.GamePlatform == d.PlatformEnum.QQ || c.ALConfig.GamePlatform == d.PlatformEnum.TouTiao || c.ALConfig.GamePlatform == d.PlatformEnum.Oppo) {
      console.log("init ads pos gameplatefrom:", c.ALConfig.GamePlatform);var e = "",
          t = "";try {
        var a = c.ALConfig.RunEnv.getLaunchOptionsSync();f.ALUtil.LOG("ALReport opts --- ", a);var n = a.query,
            o = a.referrerInfo && a.referrerInfo.extraData;if (m.publicParam.query_str = f.ALUtil._getInitParams(l({}, n), l({}, o)), f.ALUtil.LOG("ALReport query_str --- ", m.publicParam.query_str), c.ALConfig.GamePlatform != d.PlatformEnum.Oppo) {
          if (d.ALData.opts = a, d.ALData.scene = a.scene, (s = a.query).qz_gdt && (this.qz_gdt = s.qz_gdt ? s.qz_gdt : ""), s.ad_appid && (this.ad_appid = s.ad_appid ? s.ad_appid : ""), s.scene) {
            var r = decodeURIComponent(s.scene).split(",");e = r[1], t = r[2];
          } else if (s.Ads || s.AdsPos || s["?Ads"]) e = s.Ads ? s.Ads : "", t = s.AdsPos ? s.AdsPos : "", s["?Ads"] && f.ALUtil.qqExist() && -1 < (e = s["?Ads"]).indexOf("TSA") && 3 < e.length && (t = e.split("TSA")[1], e = "TSA");else if (a.referrerInfo && a.referrerInfo.extraData) {
            var i = a.referrerInfo.extraData;e = i.Ads ? i.Ads : "", t = i.AdsPos ? i.AdsPos : "";
          } else s.shareMessageToFriendScene && 1 == s.shareMessageToFriendScene && (e = "open_Share", t = s.shareMessageToFriendScene);"" === e && (t = "1037" == a.scene || "011009" == a.scene || "021009" == a.scene || "061009" == a.scene ? (e = "fromMini", a.referrerInfo.appId || "0") : (e = c.ALConfig.GamePlatform, a.scene || "0"));
        } else {
          if (d.ALData.opts = a) {
            if (a && a.query && (a.query.Ads || a.query.AdsPos)) e = a.query.Ads ? a.query.Ads : "", t = a.query.AdsPos ? a.query.AdsPos : "";else if (a && a.referrerInfo && a.referrerInfo.extraData) {
              var p = a.referrerInfo.extraData;e = p.Ads ? p.Ads : "", t = p.AdsPos ? p.AdsPos : "";
            }
          } else e = "oppo", t = "0";"" === e && (a && a.referrerInfo && a.referrerInfo.package ? (e = "fromMini", t = a.referrerInfo.package || "0", a.referrerInfo.package && u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + "/box/sdk/pkg_appid", { pkgs: a.referrerInfo.package, platform: c.ALConfig.GamePlatform }, function (e) {
            e.isSucc ? e.data && 0 < e.data.length && (m.AdsPos = e.data[0], m.publicParam.ads_pos = e.data[0]) : console.warn("pkgToAppid fail:", e.reason);
          })) : (e = "oppo", t = "0"));
        }
      } catch (e) {
        console.log("ALReport _initAdSource catch--- ", e);
      }if (this.Ads = e, this.AdsPos = t, m.publicParam.ads = e, m.publicParam.ads_pos = t, 1044 == d.ALData.scene || 1007 == d.ALData.scene || 1036 == d.ALData.scene || 1008 == d.ALData.scene) {
        var s = d.ALData.opts.query;d.ALData.topInviter = s.a_top_inviter || "0", d.ALData.level = s.a_level || 1;
      }
    }
  }, m._initLevelData = function () {
    var e = null;if (1044 == d.ALData.scene || 1007 == d.ALData.scene || 1036 == d.ALData.scene || 1008 == d.ALData.scene) {
      var t = d.ALData.opts.query;e = { appid: c.ALConfig.appId, openid: c.ALConfig.openId, level: t.a_level || "", inviter: t.a_inviter || "", top_inviter: t.a_top_inviter || "" };
    } else e = { appid: c.ALConfig.appId, openid: c.ALConfig.openId };this.qz_gdt ? e.adsinfo = this.Ads + "|" + this.AdsPos + "|" + this.qz_gdt : e.adsinfo = this.Ads + "|" + this.AdsPos, m.ad_appid && (e.ad_appid = m.ad_appid), u.HttpUtil.GET(c.ALConfig.ReportMarketDomain + "/box/accountinfo", e, function (e) {
      if (e.isSucc) {
        var t = e.data.info;f.ALUtil.LOG("ALReport _initLevelData data --- ", e.data), f.ALUtil.LOG("初始化得到的分享数据：", t), d.ALData.topInviter = t.top_inviter || "0", d.ALData.inviter = c.ALConfig.openId, d.ALData.level = t.share_level ? parseInt(t.share_level) + 1 : 1, d.ALData.score = t.score ? parseInt(t.score) : 0, i.ALIntercept._execOnShareApp();
      } else f.ALUtil.LOG("ALReport _initLevelData fail --- ", e.reason);
    });
  }, m._initReportData = function () {
    var e = "",
        t = "",
        a = "",
        n = "",
        o = "",
        r = "",
        i = -1;if (f.ALUtil.runEnvExist()) {
      try {
        var p = c.ALConfig.RunEnv.getSystemInfoSync();e = p.platform.toLowerCase(), t = p.model, a = p.system, n = p.language, o = p.version, r = p.platform.toLowerCase(), i = p.benchmarkLevel, f.ALUtil.qqExist() && (m.appPlatform = p.AppPlatform), f.ALUtil.qgExist() && (o = p.platformVersionCode);
      } catch (e) {
        console.warn("ALReport _initParam error--- ", e);
      }t && "unknown" !== t || (t = "android");
    }this.reportPrefix = "t_event|distribute_all|", this.reportDevice2Sence = e + "|" + t + "|" + c.ALConfig.version + "|" + a + "||0.0.0.0||" + n + "||" + o + "|" + c.ALConfig.appId + "|" + this.Ads + "|" + this.AdsPos + "|", m.publicParam.gamePlatform = c.ALConfig.GamePlatform, m.publicParam.platform = r, m.publicParam.device = e, m.publicParam.channel = t, m.publicParam.version = c.ALConfig.version, m.publicParam.os = a, m.publicParam.language = n, m.publicParam.wx_version = o, m.publicParam.project_id = c.ALConfig.appId, m.publicParam.qz_gdt = this.qz_gdt, m.publicParam.benchmarkLevel = i;
  }, m._getCurrentDate = function () {
    var e = new Date(),
        t = e.getFullYear().toString(),
        a = (e.getMonth() + 1).toString(),
        n = e.getDate().toString();return 1 === a.length && (a = "0" + a), 1 === n.length && (n = "0" + n), t + a + n;
  }, m._getTimeStamp = function () {
    return Math.round(Date.now() / 1e3);
  }, m.publicParam = { gamePlatform: "", qz_gdt: "", platform: "", sdkVersion: c.ALConfig.sdkVersion, report_type: "", typeStr: "", device: "", channel: "", version: "", os: "", language: "", wx_version: "", project_id: "", ads: "", ads_pos: "", ply: "", node: "", open_id: "", type: "", sub_type: "", value: "", extra: "", uuid: "", p_open_id: "", gender: "", video_sence: "", query_str: "", benchmarkLevel: -1, zone_id: "", role_id: "", is_gs: 0 }, m.reportCheck = { appid: "", openid: "", startTime: "", level: "", video_sence: "", video_play: 0, payAmount: 0, gameTime: 0, gameShow: "", sharePic: "", jumpData: "" }, m.CustomNode = [], m.CustomDataCache = [], m.Ads = "", m.AdsPos = "", m.reportPrefix = "", m.reportDevice2Sence = "", m.qz_gdt = "", m.ad_appid = "", m.appPlatform = "", m._inited = !1, m.startTime = 0, m.CusRepLastTime = 0, m.LastCustomNode = -1, m);function m() {}s.ALReport = a, s.REPORT_TYPE_ENUM = { REPORT_TYPE_SHOW: "1_1", REPORT_TYPE_LOGIN: "1_2", REPORT_TYPE_OPEN_ID: "1_3", REPORT_TYPE_AUTH: "1_4", REPORT_TYPE_LIKE_CLICK: "1_6", REPORT_TYPE_LIKE_SHOW: "1_8", REPORT_TYPE_DRAWER_CLICK: "1_7", REPORT_TYPE_DRAWER_SHOW: "1_9", REPORT_TYPE_CLICK_SUCCESS: "3_1", REPORT_TYPE_SHARE_READY: "1_10", REPORT_TYPE_SHARE_SUCCESS: "1_5", REPORT_TYPE_GAME_DURATION: "1_12", REPORT_TYPE_SCENE_CLICK: "1_13", REPORT_TYPE_SCENE_CLICK_SUCCESS: "1_14", REPORT_TYPE_PAY_MENT: "6_0", REPORT_TYPE_PAY_MENT_START: "6_2", REPORT_TYPE_PAY_MENT_ENTER: "6_3", REPORT_TYPE_PAY_MENT_IOS: "6_5", REPORT_TYPE_MORE_SHOW: "2_0", REPORT_TYPE_MORE_CLICK: "2_1", REPORT_TYPE_MORE_CLICK_O: "2_2", REPORT_TYPE_MORE_LONG_CLICK_O: "2_3", REPORT_TYPE_VIDEO_OPEN: "2_4", REPORT_TYPE_VIDEO_WATCH_FAIL: "2_5", REPORT_TYPE_VIDEO_WATCH_NORMAL: "2_6", REPORT_TYPE_GAME_BOX_SHOW: "8_1", REPORT_TYPE_GAME_BOX_CLICK: "8_2", REPORT_TYPE_GAME_BOX_BANNER_CLICK: "8_3", REPORT_TYPE_VIDEO_BTN_SHOW: "5_6", REPORT_TYPE_VIDEO_CLICK: "5_7", REPORT_TYPE_SHARE_BTN_SHOW: "5_8", REPORT_TYPE_SHARE_CLICK: "5_9", REPORT_TYPE_TIME: "15_1", REPORT_TYPE_QQ_SUBSCRIBE: "18_1", REPORT_TYPE_QQ_UNSUBSCRIBE: "18_2" };
}, function (e, t, a) {
  "use strict";

  var i = this && this.__assign || function () {
    return (i = Object.assign || function (e) {
      for (var t, a = 1, n = arguments.length; a < n; a++) for (var o in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);return e;
    }).apply(this, arguments);
  };Object.defineProperty(t, "__esModule", { value: !0 });var c = a(1),
      u = a(2),
      f = a(3),
      n = a(6),
      p = a(0),
      o = (s.EmptyFn = function () {
    u.ALUtil.LOG("empty fn");
  }, s.init = function () {
    this._inited || (this._inited = !0, u.ALUtil.LOG("ALIntercept init "), u.ALUtil.runEnvNotExist() || (this._pay(), this._shareApp(), this._execShowHide(), this._onShareApp(), this._rewardedVideoAd(), this._qqSubscribe(), this._wxSubscribe(), this._getUserProfile(), u.ALUtil.LOG("ALIntercept init success ")));
  }, s._execShowHide = function () {
    s.TimeShow = Date.now(), s.Params = i(i({}, f.ALReport.publicParam), { report_type: "duration", typeStr: f.REPORT_TYPE_ENUM.REPORT_TYPE_GAME_DURATION, value: "" }), p.ALConfig.RunEnv.onShow(function (e) {
      s.IsOnShow = !0, s.TimeShow = Date.now(), s.FirstOnShow ? s.FirstOnShow = !1 : s.OnHideAllTime += s.TimeShow - s.OnHideTimestamp, n.ALSDK.paycallback(e), n.ALSDK.handleNaviTime(e), u.ALUtil.LOG("ALIntercept onShow", e);
    }), p.ALConfig.RunEnv.onHide(function (e) {
      s.IsOnShow = !1, s.OnHideTimestamp = Date.now();var t = Math.ceil((Date.now() - s.TimeShow) / 1e3);0 < t && (f.ALReport.reportCheck.gameTime += t, s.Params.value = t.toString(), f.ALReport.reportDataToMarketNew(s.Params)), u.ALUtil.LOG("ALIntercept onHide");
    }), p.ALConfig.GamePlatform != c.PlatformEnum.WeChat && p.ALConfig.GamePlatform != c.PlatformEnum.QQ || (p.ALConfig.RunEnv.getNetworkType({ success: function (e) {
        u.ALUtil.LOG("getNetworkType:", e), s.NetworkType = e.networkType;
      } }), p.ALConfig.RunEnv.onNetworkStatusChange(function (e) {
      u.ALUtil.LOG("onNetworkStatusChange:", e), s.NetworkType = e.networkType;
    }));
  }, s._qqSubscribe = function () {
    if (!u.ALUtil.qqNotExist() && p.ALConfig.RunEnv.subscribeAppMsg) {
      var t = p.ALConfig.RunEnv.subscribeAppMsg;Object.defineProperty(p.ALConfig.RunEnv, "subscribeAppMsg", { configurable: !0, enumerable: !0, writable: !0, value: function () {
          var e = arguments[0] || {},
              n = e.success || null,
              o = e.subscribe,
              r = e.tmplIds || null;return e.success = function (e) {
            if (u.ALUtil.LOG("ALIntercept _qqSubscribe success --- ", e), r) {
              for (var t = 0; t < r.length; t++) if (e[r[t]] && "accept" == e[r[t]]) {
                var a = i(i({}, f.ALReport.publicParam), { report_type: "wx_subscribe", typeStr: f.REPORT_TYPE_ENUM.REPORT_TYPE_QQ_SUBSCRIBE, extra: r[t] });f.ALReport.reportDataToMarketNew(a);
              }
            } else o ? f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_QQ_SUBSCRIBE) : f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_QQ_UNSUBSCRIBE);n && n(e);
          }, t.apply(this, arguments);
        } }), s._qqSubscribe = s.EmptyFn;
    }
  }, s._wxSubscribe = function () {
    if (!(u.ALUtil.wxNotExist() || u.ALUtil.wxExist() && !p.ALConfig.RunEnv.requestSubscribeMessage)) {
      var t = p.ALConfig.RunEnv.requestSubscribeMessage;Object.defineProperty(p.ALConfig.RunEnv, "requestSubscribeMessage", { configurable: !0, enumerable: !0, writable: !0, value: function () {
          var e = arguments[0] || {},
              n = e.success || null,
              o = e.tmplIds || [];return e.success = function (e) {
            u.ALUtil.LOG("ALIntercept _wxSubscribe success --- ", e);for (var t = 0; t < o.length; t++) if (e[o[t]] && "accept" == e[o[t]]) {
              var a = i(i({}, f.ALReport.publicParam), { report_type: "wx_subscribe", typeStr: f.REPORT_TYPE_ENUM.REPORT_TYPE_QQ_SUBSCRIBE, extra: o[t] });f.ALReport.reportDataToMarketNew(a);
            }n && n(e);
          }, t.apply(this, arguments);
        } }), s._wxSubscribe = s.EmptyFn;
    }
  }, s._rewardedVideoAd = function () {
    if (!u.ALUtil.runEnvNotExist() && p.ALConfig.RunEnv.createRewardedVideoAd) {
      console.log("_rewardedVideoAd run");var o = p.ALConfig.RunEnv.createRewardedVideoAd;Object.defineProperty(p.ALConfig.RunEnv, "createRewardedVideoAd", { configurable: !0, enumerable: !0, writable: !0, value: function () {
          var e = o.apply(this, arguments),
              t = arguments[0] || {};if (s.VideoId = t.adUnitId, p.ALConfig.GamePlatform === c.PlatformEnum.Vivo && (s.VideoId = t.posId), e.isIntercept) return e;e.isIntercept = !0;var a = e.show;Object.defineProperty(e, "show", { configurable: !0, enumerable: !0, writable: !0, value: function () {
              return u.ALUtil.LOG("ALIntercept _rewardedVideoAd show ---"), f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_OPEN, s.VideoId), a.apply(this, arguments);
            } }), e.onClose(s.VideoClose);var n = e.offClose;return Object.defineProperty(e, "offClose", { configurable: !0, enumerable: !0, writable: !0, value: function () {
              u.ALUtil.LOG("ALIntercept _rewardedVideoAd offClose!!!"), n.apply(this, arguments), 0 == arguments.length && this.onClose(s.VideoClose);
            } }), e;
        } }), s._rewardedVideoAd = s.EmptyFn;
    }
  }, s.VideoClose = function (e) {
    u.ALUtil.LOG("ALIntercept _rewardedVideoAd VideoClose--- ", e), void 0 === e || e && e.isEnded ? f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_WATCH_NORMAL, s.VideoId) : f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_WATCH_FAIL, s.VideoId);
  }, s._pay = function () {
    if (p.ALConfig.GamePlatform == c.PlatformEnum.WeChat || p.ALConfig.GamePlatform == c.PlatformEnum.QQ || p.ALConfig.GamePlatform == c.PlatformEnum.TouTiao) {
      var e = "requestMidasPayment",
          r = p.ALConfig.RunEnv.requestMidasPayment;u.ALUtil.ttExist() && (e = "requestGamePayment", r = p.ALConfig.RunEnv.requestGamePayment), Object.defineProperty(p.ALConfig.RunEnv, e, { configurable: !0, enumerable: !0, writable: !0, value: function () {
          f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_PAY_MENT_START);var e = arguments[0] || {},
              t = "0";t = u.ALUtil.qqExist() ? e.starCurrency : e.buyQuantity;var a = null,
              n = e.success || null;e.success = function (e) {
            a && (u.ALUtil.LOG("ALIntercept clearInterval sdkPaySuc"), clearInterval(a)), u.ALUtil.LOG("ALIntercept _pay success --- ", e), t += "|1", f.ALReport.reportPay(t), n && n(e);
          };var o = e.fail || null;return e.fail = function (e) {
            a && (u.ALUtil.LOG("ALIntercept clearInterval sdkPaySuc"), clearInterval(a)), u.ALUtil.LOG("ALIntercept _pay fail --- ", e), t += "|0", f.ALReport.reportPay(t), o && o(e);
          }, p.ALConfig.GamePlatform == c.PlatformEnum.WeChat && p.ALConfig.AutoPayCb && (a = setInterval(function () {
            a && (u.ALUtil.LOG("ALIntercept clearInterval sdkPaySuc"), clearInterval(a)), n && (u.ALUtil.LOG("ALIntercept sdkPaySuc callback"), n({ sdkPaySuc: !0, errMsg: "requestMidasPayment:ok" }));
          }, 13e3)), r.apply(this, arguments);
        } }), s._pay = s.EmptyFn;
    }
  }, s._execOnShareApp = function () {
    s.InfoGot = !0, s.ShareParamFunc && (p.ALConfig.RunEnv.offShareAppMessage(s.ShareParamFunc), p.ALConfig.RunEnv.onShareAppMessage(s.ShareParamFunc));
  }, s._shareApp = function () {
    if (p.ALConfig.GamePlatform == c.PlatformEnum.WeChat || p.ALConfig.GamePlatform == c.PlatformEnum.QQ || p.ALConfig.GamePlatform == c.PlatformEnum.TouTiao) {
      var t = p.ALConfig.RunEnv.shareAppMessage;Object.defineProperty(p.ALConfig.RunEnv, "shareAppMessage", { configurable: !0, enumerable: !0, writable: !0, value: function () {
          var e = arguments[0] || {};return s._handleShareParam(e), e.query = e.query + "&a_inviter=" + c.ALData.inviter + "&a_level=" + c.ALData.level + "&a_top_inviter=" + c.ALData.topInviter, u.ALUtil.LOG("ALIntercept shareAppMessage query ", e.query), t.apply(this, arguments);
        } }), s._shareApp = s.EmptyFn;
    }
  }, s._onShareApp = function () {
    if (p.ALConfig.GamePlatform == c.PlatformEnum.WeChat || p.ALConfig.GamePlatform == c.PlatformEnum.QQ || p.ALConfig.GamePlatform == c.PlatformEnum.TouTiao) {
      var e = p.ALConfig.RunEnv.onShareAppMessage;Object.defineProperty(p.ALConfig.RunEnv, "onShareAppMessage", { configurable: !0, enumerable: !0, writable: !0, value: function () {
          u.ALUtil.LOG("开始拦截_onShareApp");var t = arguments[0];return t ? s.InfoGot ? (u.ALUtil.LOG("ALIntercept onShareAppMessage _infoExist"), arguments[0] = function () {
            var e = t();return s._handleShareParam(e, !1), e.query = e.query + "&a_inviter=" + c.ALData.inviter + "&a_level=" + c.ALData.level + "&a_top_inviter=" + c.ALData.topInviter, u.ALUtil.LOG("ALIntercept onShareAppMessage query ", e.query), u.ALUtil.ttExist() ? { title: e.title, imageUrl: e.imageUrl, templateId: e.templateId, query: e.query } : { title: e.title, imageUrl: e.imageUrl, imageUrlId: e.imageUrlId, query: e.query };
          }) : (s.ShareParamFunc = t, u.ALUtil.LOG("ALIntercept onShareAppMessage _infoExist not")) : u.ALUtil.LOG("ALIntercept onShareAppMessage argument0F empty"), e.apply(this, arguments);
        } });var t = p.ALConfig.RunEnv.offShareAppMessage;Object.defineProperty(p.ALConfig.RunEnv, "offShareAppMessage", { configurable: !0, enumerable: !0, writable: !0, value: function () {
          t.apply(this, arguments), u.ALUtil.LOG("ALIntercept offShareAppMessage !!!");
        } }), s._onShareApp = s.EmptyFn;
    }
  }, s._handleShareParam = function (e, t) {
    void 0 === t && (t = !0);var a = e.query || "",
        n = e.imageUrl,
        o = e.imageUrlId,
        r = e.templateId;void 0 !== e.sceneid && AladinSDK.initShareData(e.sceneid);var i = u.ALUtil._parseQueryString(a);u.ALUtil.LOG("ALIntercept _handleShareParam queryObj ", i), c.ALData.shareScene = i.shareScene || 0;var p = "default";if (!i.Ads) {
      if (c.ALData.curShareData && t) {
        var s = c.ALData.curShareData;e.imageUrl = s.url, e.title = s.desc, p = s.shareid;
      } else if (o) p = o;else if (r) p = r;else if (n) {
        var l = u.ALUtil.getUrlFileName(n);u.ALUtil.LOG("ALIntercept _handleShareParam ", n, l), p = 0 !== n.indexOf("http") && -1 === l.indexOf(".") ? "screenShot" : l.replace(".", "_");
      }var d = "&Ads=a_Share&AdsPos=" + p;u.ALUtil.LOG("ALIntercept _handleShareParam ads_str ", d), e.query = a + d;
    }t && (f.ALReport.reportCheck.sharePic = p, f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_SHARE_READY, p));
  }, s._getUserProfile = function () {
    if (p.ALConfig.GamePlatform == c.PlatformEnum.WeChat) try {
      var e = p.ALConfig.RunEnv.getSystemInfoSync().SDKVersion;if (u.ALUtil.convertVersionStringToNumber(e) < u.ALUtil.convertVersionStringToNumber("2.10.4")) return void console.log("now use lib version not support getUserProfile SDKVersion:" + e);var t = p.ALConfig.RunEnv.getUserProfile;if (!t) return void console.error("no found function getUserProfile");Object.defineProperty(p.ALConfig.RunEnv, "getUserProfile", { configurable: !0, enumerable: !0, writable: !0, value: function () {
          u.ALUtil.LOG("开始拦截_getUserProfile");var e = arguments[0],
              n = e.success;return e.success = function (e) {
            var t = e.userInfo,
                a = {};c.UserInfoData.NickName = a.nickName = t.nickName || "", c.UserInfoData.Gender = a.gender = void 0 !== t.gender ? e.userInfo.gender : 0, c.UserInfoData.AvatarUrl = a.avatarUrl = t.avatarUrl || "", c.UserInfoData.Country = a.country = t.country || "", c.UserInfoData.Province = a.province = t.province || "", c.UserInfoData.City = a.city = t.city || "", c.UserInfoData.Language = a.language = t.language || "", f.ALReport.reportDataToServer(a), n && n(e);
          }, t.apply(this, arguments);
        } });
    } catch (e) {
      console.error("getUserProfile getSystemInfoSync catch error");
    }
  }, s._inited = !1, s.IsOnShow = !0, s.NetworkType = "", s.TimeShow = null, s.Params = null, s.FirstOnShow = !0, s.OnHideTimestamp = 0, s.OnHideAllTime = 0, s.VideoId = null, s.InfoGot = !1, s.ShareParamFunc = null, s);function s() {}t.ALIntercept = o;
}, function (e, o, t) {
  "use strict";

  Object.defineProperty(o, "__esModule", { value: !0 });var s = t(2),
      l = t(0),
      d = t(1);o.METHOD_GET = "GET", o.METHOD_POST = "POST";var a = (n.GET = function (e, t, a, n) {
    this._request(e, o.METHOD_GET, t, a, n);
  }, n.POST = function (e, t, a, n) {
    this._request(e, o.METHOD_POST, t, a, n);
  }, n._request = function (e, t, a, n, o) {
    if (s.ALUtil.LOG("请求参数[param]", a), a.event_time = new Date().getTime(), l.ALConfig.GamePlatform == d.PlatformEnum.WeChat || l.ALConfig.GamePlatform == d.PlatformEnum.QQ || l.ALConfig.GamePlatform == d.PlatformEnum.TouTiao || l.ALConfig.GamePlatform == d.PlatformEnum.Vivo) {
      "GET" == t && a && (e += encodeURI("?" + this.objParam2PostString(a))), s.ALUtil.LOG("HttpUtil url ----- ", e);var r = { url: e, method: t, success: function (e) {
          s.ALUtil.LOG("HttpUtil responseText---", e);try {
            var t = e.data;return t && 0 !== t.code && 0 !== t.ret ? (s.ALUtil.LOG("HttpUtil json---"), void n({ isSucc: !1, reason: t.msg })) : void n({ isSucc: !0, data: t ? t.data : null });
          } catch (e) {
            return s.ALUtil.LOG("HttpUtil parse---", e), void n({ isSucc: !1, reason: "json_parse_error" });
          }
        }, fail: function (e) {
          s.ALUtil.LOG("HttpUtil fail---", e), n({ isSucc: !1, reason: "network_error" });
        } };this.Authorization ? r.header = { "content-type": "application/x-www-form-urlencoded", Authorization: this.Authorization } : r.header = { "content-type": "application/x-www-form-urlencoded" }, o && o["content-type"] && "application/x-www-form-urlencoded" != o["content-type"] && (r.header["content-type"] = o["content-type"]), a && (r.data = a), l.ALConfig.RunEnv.request(r);
    } else {
      var i = new XMLHttpRequest(),
          p = null;"GET" == t && a && (e += encodeURI("?" + this.objParam2PostString(a))), i.open(t, e, !0), o && o["content-type"] && "application/x-www-form-urlencoded" != o["content-type"] ? (i.setRequestHeader("content-type", o["content-type"]), a && (p = a)) : (i.setRequestHeader("content-type", "application/x-www-form-urlencoded"), p = null == a ? null : encodeURI(this.objParam2PostString(a))), this.Authorization && i.setRequestHeader("Authorization", this.Authorization), i.onreadystatechange = function () {
        if (4 === i.readyState && 199 < i.status && i.status < 400) {
          s.ALUtil.LOG("HttpUtil responseText---", i.responseText);try {
            var e = i.responseText ? JSON.parse(i.responseText) : null;return e && 0 !== e.code && 0 !== e.ret ? (s.ALUtil.LOG("HttpUtil json---"), void n({ isSucc: !1, reason: e.msg })) : void n({ isSucc: !0, data: e ? e.data : null });
          } catch (e) {
            return s.ALUtil.LOG("HttpUtil parse---", e), void n({ isSucc: !1, reason: "json_parse_error" });
          }
        }
      }, i.onerror = function (e) {
        s.ALUtil.LOG("HttpUtil onerror---", e), n({ isSucc: !1, reason: "network_error" });
      }, i.ontimeout = function (e) {
        s.ALUtil.LOG("HttpUtil ontimeout---", e), n({ isSucc: !1, reason: "timeout_error" });
      }, i.send(p);
    }
  }, n.objParam2PostString = function (e) {
    var t = "";for (var a in e) t += a + "=" + e[a], t += "&";return "" != t && (t = t.slice(0, t.length - 1)), t;
  }, n.Authorization = null, n);function n() {}o.HttpUtil = a;
}, function (e, t, a) {
  "use strict";

  var P = this && this.__assign || function () {
    return (P = Object.assign || function (e) {
      for (var t, a = 1, n = arguments.length; a < n; a++) for (var o in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);return e;
    }).apply(this, arguments);
  };Object.defineProperty(t, "__esModule", { value: !0 });var y = a(0),
      C = a(2),
      f = a(3),
      m = a(1),
      h = a(5),
      n = (I.init = function (e, t, a, n) {
    this._inited || (this._inited = !0, "" == e && console.warn("初始化appid不能为空"), y.ALConfig.appId = e, y.ALConfig.version = t, f.ALReport.reportCheck.appid = e, y.ALConfig.GamePlatform == m.PlatformEnum.WeChat && h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + "/box/opr/sharepic/list", { appid: y.ALConfig.appId }, function (e) {
      e.isSucc ? (C.ALUtil.LOG("share data:", e.data), m.ALData.shareData = e.data) : C.ALUtil.LOG("get sharepic fail:", e.reason);
    }));
  }, I.toMiniProgram = function (e, t, a, n, o, r, i) {
    var p = C.ALUtil.parseNavigateParam(e),
        s = e[14] || e[4],
        l = e[11] || "",
        d = P(P({}, f.ALReport.publicParam), { target_appid: p.target_appid, report_type: "click", typeStr: t, diff_key: s, extra_data: a, scene: n }),
        c = P(P({}, f.ALReport.publicParam), { target_appid: p.target_appid, report_type: "jump", typeStr: f.REPORT_TYPE_ENUM.REPORT_TYPE_SCENE_CLICK_SUCCESS, extra_data: a, scene: n });if (C.ALUtil.LOG("[ALSDK] 跳转参数如下：", e), C.ALUtil.LOG("[ALSDK] data.appId:>>", p.appId), C.ALUtil.LOG("[ALSDK] data.path:>>", p.path), C.ALUtil.LOG("[ALSDK] data.extraData:>>", p.extraData), C.ALUtil.LOG("[ALSDK] pkgName:>>", l), C.ALUtil.LOG("[ALSDK] Data.conf.envVersion:>>", y.ALConfig.envVersion), !C.ALUtil.runEnvNotExist()) {
      var u = e[6] || null;f.ALReport.reportDataToMarketNew(d), !u || y.ALConfig.RunEnv.navigateToMiniProgram || y.ALConfig.RunEnv.navigateToMiniGame ? y.ALConfig.GamePlatform == m.PlatformEnum.WeChat ? y.ALConfig.RunEnv.navigateToMiniProgram({ appId: p.appId, path: p.path, extraData: p.extraData, envVersion: y.ALConfig.envVersion, success: function (e) {
          console.log("navigateToMiniProgram:", Date.now(), p.appId), I.NavigeteTime = Date.now(), I.NavigeteAppid = p.appId, f.ALReport.reportCheck.jumpData = c, f.ALReport.reportDataToMarketNew(c), o && o(e);
        }, fail: function (e) {
          C.ALUtil.LOG("ALSDK navigateToMiniProgram fail ", e), e && e.errMsg && -1 === e.errMsg.indexOf("cancel") && u && I._preview(u, c), r && r(e);
        }, complete: function (e) {
          i && i(e);
        } }) : y.ALConfig.GamePlatform == m.PlatformEnum.Oppo && (l || console.warn("包名为空无法跳转"), y.ALConfig.RunEnv.navigateToMiniGame({ pkgName: l, path: p.path, extraData: p.extraData, success: function (e) {
          console.log("navigateToMiniGame:", Date.now(), p.appId), I.NavigeteTime = Date.now(), I.NavigeteAppid = p.appId, f.ALReport.reportCheck.jumpData = c, f.ALReport.reportDataToMarketNew(c), o && o(e);
        }, fail: function (e) {
          C.ALUtil.LOG("ALSDK navigateToMiniGame fail ", e), e && e.errMsg && -1 === e.errMsg.indexOf("cancel") && u && I._preview(u, c), r && r(e);
        }, complete: function (e) {
          i && i(e);
        } })) : I._preview(u, c);
    }
  }, I.handleNaviTime = function (e) {
    if (C.ALUtil.LOG("handleNaviTime param", e, I.NavigeteAppid), e && 1038 == e.scene && I.NavigeteAppid && I.NavigeteTime) {
      var t = Math.ceil((Date.now() - I.NavigeteTime) / 1e3);if (C.ALUtil.LOG("handleNaviTime delta", t), 15 <= t) {
        C.ALUtil.LOG("handleNaviTime report", I.NavigeteAppid);var a = { appid: y.ALConfig.appId, openid: y.ALConfig.openId, targetAppid: I.NavigeteAppid };return void h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + "/box/sdk/flow_report_click", a, function (e) {
          e.isSucc || console.warn("handleNaviTime report err:", e.reason);
        });
      }
    }I.NavigeteAppid = "", I.NavigeteTime = null;
  }, I._preview = function (e, t) {
    y.ALConfig.RunEnv.previewImage({ urls: [e], success: function () {
        C.ALUtil.LOG("ALSDK _preview success "), f.ALReport.reportDataToMarketNew(t);
      }, fail: function (e) {
        console.warn("ALSDK _preview error ", e);
      } });
  }, I.requestModuleData = function (a, n, e, t) {
    void 0 === e && (e = 400), void 0 === t && (t = "");var o = { appid: y.ALConfig.appId, module: a, openid: y.ALConfig.openId, size: e, nickName: m.UserInfoData.NickName, avatarUrl: m.UserInfoData.AvatarUrl, country: m.UserInfoData.Country, gender: m.UserInfoData.Gender, language: m.UserInfoData.Language, province: m.UserInfoData.Province, scene: t };"Icon" === a ? m.ALData.iconData : m.ALData.moreData, h.HttpUtil.GET(y.ALConfig.ReportMarketDomain + "/box/sdk/module_new", o, function (e) {
      if (e.isSucc) {
        var t = I.handleHttpData(e);"Icon" === a ? m.ALData.iconData = t : "more" === a && (m.ALData.moreData = t), n(t);
      } else console.warn("ALSDK requestModuleData fail !!!", e.reason, a);
    });
  }, I.handleHttpData = function (e) {
    var t = e.data.values || [],
        a = e.data.base;if (a && 0 < t.length) for (var n = 0, o = t.length; n < o; n++) {
      var r = t[n];r[4] = a + r[4];
    }return t;
  }, I.reportFlowShow = function (e) {
    var t = P(P({}, f.ALReport.getPublicParam()), { appid: y.ALConfig.appId, openid: y.ALConfig.openId, gamelist: e });h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + "/box/sdk/flow_report_show", t, function (e) {
      e.isSucc || C.ALUtil.LOG("ALSDK reportFlowShow fail --- ", e.reason);
    });
  }, I.paycheck = function (e, t) {
    var a = { game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, limit: e },
        n = { switch: 0, msg: "" };return "android" == f.ALReport.publicParam.platform ? (n.switch = 1, void t(n)) : "" == y.ALConfig.appId || "" == y.ALConfig.openId ? (console.warn("[AladinSDK]:请先调用ALSDK.init和ALSDK.reportOpenId方法"), n.msg = "请先调用ALSDK.init和ALSDK.reportOpenId方法", void t(n)) : void h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + "/wxpay/paycheck", a, function (e) {
      return e.isSucc ? n.switch = 1 : n.msg = e.reason, void t(n);
    });
  }, I.pay = function (e, t, p, s, l, d, c, a, n, u, f, m, o) {
    I.oriPayParam = { appid: e, openid: t, amount: p, pid: s, zoneId: l, orderTitle: d, orderDesc: c, imgUrl: a, limit: n, params: u, cb: f, env: m, extraParams: o }, y.ALConfig.appId = e, y.ALConfig.openId = t;var _ = o.zone_id ? o.zone_id : 0,
        A = o.role_id ? o.role_id : 0,
        L = o.model_id ? o.model_id : 0,
        g = o.package_id ? o.package_id : "",
        r = { appid: y.ALConfig.appId, openid: y.ALConfig.openId, price: p, title: d, desc: c, pid: s, params: u, img: a, zoneid: l, limit: n, zone_id: _, role_id: A, model_id: L, package_id: g };I.invalidAppid && 0 == I.invalidAppid.indexOf("wx") && (r.invalid_appid = I.invalidAppid, I.invalidAppid = "");var v = { ret: 0, msg: "", pid: s, payMethod: 0, amount: p, params: u, payCount: 1, qrCode: "" };return "" == y.ALConfig.appId || "" == y.ALConfig.openId ? (console.error("[AladinSDK]:请先调用ALSDK.init和ALSDK.reportOpenId方法"), v.msg = "请先调用ALSDK.init和ALSDK.reportOpenId方法", void f(v)) : 1 == I.PayStatus ? (v.msg = "重复支付", void f(v)) : (I.PayStatus = 1, I.RetCallback = f, void h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + "/wxpay/paymethod", r, function (e) {
      if (!e.isSucc) return v.msg = "PayMethod fail:" + e.reason, I.PayMethod = 0, I.PayStatus = 0, void f(v);console.log("paymethod:", P({}, e.data)), I.PayMethod = e.data.pay_method, v.payMethod = e.data.pay_method, I.PayId = e.data.pay_id, I.RetObj = v;var t = e.data.pre_img,
          o = e.data.offer_id,
          a = e.data.appid,
          r = e.data.buy_quantity,
          n = e.data.qr_code,
          i = e.data.order_id;switch (i && (m = e.data.env, I.oriPayParam.env = e.data.env), e.data.pay_method) {case 1:
          y.ALConfig.RunEnv.navigateToMiniProgram({ appId: a, path: "pages/index/index", envVersion: y.ALConfig.envVersion, extraData: { appid: y.ALConfig.appId, openid: y.ALConfig.openId, orderid: I.PayId, amount: p, params: u, orderTitle: d, orderDesc: c, a_pid: s }, success: function (e) {
              C.ALUtil.LOG("navigateToMiniProgram pay suc", e), I.PayStatus = 2;
            }, fail: function (e) {
              C.ALUtil.LOG("navigateToMiniProgram pay fail", e), v.msg = "navigateToMiniProgram pay fail:" + e.errMsg, I.PayMethod = 0, I.PayStatus = 0, f(v);
            }, complete: function (e) {
              C.ALUtil.LOG("navigateToMiniProgram pay complete", e);
            } });break;case 2:
          y.ALConfig.RunEnv.openCustomerServiceConversation({ sessionFrom: "pay|" + I.PayId, showMessageCard: !0, sendMessageTitle: "充值", sendMessagePath: "/pages/index/index", sendMessageImg: t, success: function (e) {
              C.ALUtil.LOG("openCustomerServiceConversation pay suc", e), I.PayStatus = 2;
            }, fail: function (e) {
              C.ALUtil.LOG("openCustomerServiceConversation pay fail", e), v.msg = "openCustomerServiceConversation pay fail:" + e.errMsg, I.PayMethod = 0, I.PayStatus = 0, f(v);
            }, complete: function (e) {
              C.ALUtil.LOG("openCustomerServiceConversation pay complete", e);
            } });break;case 3:
          y.ALConfig.RunEnv.requestMidasPayment({ mode: "game", env: m, offerId: o, currencyType: "CNY", platform: "android", buyQuantity: r, zoneId: l, success: function (e) {
              if (C.ALUtil.LOG("android pay suc", e), v.ret = 1, v.msg = "android pay suc", e && e.sdkPaySuc ? v.ret = 2 : I.reportMidasPayStatus({ game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, order_id: i, status: "success", offerId: o, buyQuantity: r, zoneId: l }), i) {
                var t = { game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, order_id: i, sdk_pay: 0, tryNum: 0, zone_id: _, role_id: A, model_id: L, package_id: g };e && e.sdkPaySuc && (t.sdk_pay = 1);var a = new Date().getTime() + 6e5,
                    n = function () {
                  t.tryNum++, y.ALConfig.RunEnv.request({ url: y.ALConfig.ReportMarketDomain + "/wxpay/midas/settle", method: "POST", data: t, timeout: 15e3, header: { "content-type": "application/x-www-form-urlencoded" }, success: function (e) {
                      return e && e.data && 200 == e.statusCode ? (0 == e.data.ret ? C.ALUtil.LOG("requestMidasPayment suc---", e) : (v.msg = "android pay fail:" + e.data.msg, v.ret = 0), void f(v)) : (C.ALUtil.LOG("requestMidasPayment res err---", e), a > new Date().getTime() ? void n() : (v.msg = "android pay fail:try end", v.ret = 0, void f(v)));
                    }, fail: function (e) {
                      if (C.ALUtil.LOG("requestMidasPayment request fail---", e), !(a > new Date().getTime())) return v.msg = "android pay fail:try end", v.ret = 0, void f(v);n();
                    } });
                };n();
              } else f(v);
            }, fail: function (e) {
              C.ALUtil.LOG("android pay fail", e, m, o, r, l), v.msg = "android pay fail:" + e.errMsg, v.ret = 0, I.reportMidasPayStatus({ game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, order_id: i, status: "fail", offerId: o, buyQuantity: r, zoneId: l }), f(v);
            }, complete: function (e) {
              I.PayMethod = 0, I.PayStatus = 0, I.reportMidasPayStatus({ game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, order_id: i, status: "complete", offerId: o, buyQuantity: r, zoneId: l }), C.ALUtil.LOG("android pay complete", e);
            } });break;case 4:
          return n ? (v.qrCode = n, v.ret = 1, v.msg = "qrCode pay suc") : (v.ret = 0, v.msg = "qrCode pay fail"), I.PayStatus = 0, I.PayMethod = 0, void f(v);default:
          return v.msg = "pay_method error", void f(v);}
    }));
  }, I.reportMidasPayStatus = function (t) {
    h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + "/wxpay/midas/callback_report", t, function (e) {
      C.ALUtil.LOG("reportMidasPayStatus suc:", t, e);
    });
  }, I.paycallback = function (e) {
    if (C.ALUtil.LOG("paycallback", I.PayMethod, I.PayStatus, I.PayId, e), e && e.referrerInfo && e.referrerInfo.extraData && 1 == I.PayMethod && 2 == I.PayStatus) return e.referrerInfo.extraData.aladinPayStatus ? (I.RetObj.ret = 1, I.RetObj.msg = "MiniProgram pay suc", C.ALUtil.LOG("MiniProgram pay suc"), I.RetCallback(I.RetObj), I.PayMethod = 0, void (I.PayStatus = 0)) : (I.RetObj.ret = 0, I.RetObj.msg = "MiniProgram pay fail", C.ALUtil.LOG("MiniProgram pay fail"), I.PayMethod = 0, I.PayStatus = 0, void (e.referrerInfo && e.referrerInfo.extraData && e.referrerInfo.extraData.mchLimit && e.referrerInfo.extraData.pay_appid ? (I.invalidAppid = e.referrerInfo.extraData.pay_appid, I.pay(I.oriPayParam.appid, I.oriPayParam.openid, I.oriPayParam.amount, I.oriPayParam.pid, I.oriPayParam.zoneId, I.oriPayParam.orderTitle, I.oriPayParam.orderDesc, I.oriPayParam.imgUrl, I.oriPayParam.limit, I.oriPayParam.params, I.oriPayParam.cb, I.oriPayParam.env, I.oriPayParam.extraParams)) : I.RetCallback(I.RetObj)));if (2 == I.PayMethod && 2 == I.PayStatus) return I.RetObj.ret = 1, I.RetObj.msg = "h5 pay suc", C.ALUtil.LOG("h5 pay suc"), I.RetCallback(I.RetObj), I.PayMethod = 0, void (I.PayStatus = 0);if (y.ALConfig.GamePlatform === m.PlatformEnum.QQ && 0 < I.QQPayCbQueue.length) {
      for (var t = function (t) {
        var a = I.QQPayCbQueue[t],
            n = new Date().getTime() + 5e3,
            o = function () {
          h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + "/wxpay/qq/w/status", { id: a.order_id }, function (e) {
            C.ALUtil.LOG("qqpay h5 callback:", t, new Date().getTime(), P({}, e)), e.isSucc ? (C.ALUtil.LOG("h5 pay suc", a.order_id), a.ret_obj.ret = 1, a.ret_obj.msg = "qq h5 pay suc", a.cb(a.ret_obj)) : n > new Date().getTime() ? o() : (C.ALUtil.LOG("qq h5 pay fail", e.reason, a.order_id), a.ret_obj.ret = 0, a.ret_obj.msg = "h5 pay fail:" + e.reason, a.cb(a.ret_obj));
          });
        };o();
      }, a = 0; a < I.QQPayCbQueue.length; a++) t(a);I.QQPayCbQueue = [];
    }
  }, I.payinit = function () {
    I.RetObj = null, I.RetCallback = null, I.PayMethod = 0, I.PayStatus = 0;
  }, I.qqpay = function (e, t, a, n, o, r, i, p, s, l, d, c, u, f) {
    var m = { ret: 0, msg: "", params: i, starCurrency: 0, prepayId: "" },
        _ = { appid: e, openid: t, amt: a, goodid: n, good_num: o, params: i, limit: p, pid: s, title: l, zone_id: d, role_id: c, model_id: u, package_id: f };C.ALUtil.LOG("qqpay 参数：", _), h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + "/wxpay/qq/method", _, function (e) {
      if (!e.isSucc) return m.msg = "qqpay http fail:" + e.reason, void r(m);C.ALUtil.LOG("qqpay http ret:", P({}, e.data));var t = e.data.pay_method;switch (t) {case 7:
          var a = e.data.prepay_id,
              n = e.data.starCurrency;if ("" == a || !C.ALUtil.isInteger(n) || n < 1) return m.msg = "qqpay return params err:" + a + ":" + n, void r(m);m.starCurrency = n, m.prepayId = a, y.ALConfig.RunEnv.requestMidasPayment({ prepayId: a, starCurrency: n, setEnv: 0, success: function (e) {
              C.ALUtil.LOG("qqpay requestMidasPayment success---", e), m.ret = 1, r(m);
            }, fail: function (e) {
              C.ALUtil.LOG("qqpay requestMidasPayment fail---", e), m.msg = "qqpay requestMidasPayment fail:" + e.errMsg, r(m);
            }, complete: function (e) {
              C.ALUtil.LOG("qqpay requestMidasPayment complete---", e);
            } });break;case 8:
          if (a = e.data.prepay_id, m.prepayId = a, I.QQPayCbQueue.push({ pay_method: 8, cb: r, order_id: e.data.order_id, ret_obj: m }), "" == a) return m.msg = "qqpay return params err:" + a, void r(m);var o = y.ALConfig.QQH5PayUrl + "?source=qqpay&prepay_id=" + a;y.ALConfig.RunEnv.openUrl({ url: o, success: function (e) {
              C.ALUtil.LOG("openUrl success", o, e);
            }, fail: function (e) {
              C.ALUtil.LOG("openUrl fail", o, e), m.msg = "qqpay openUrl fail", r(m);
            }, complete: function (e) {
              C.ALUtil.LOG("openUrl complete", o, e);
            } });break;default:
          return m.msg = "pay_method error:" + t, void r(m);}
    }, { "content-type": "application/json" });
  }, I._inited = !1, I.NavigeteTime = null, I.NavigeteAppid = "", I.RetObj = null, I.RetCallback = null, I.PayMethod = 0, I.PayStatus = 0, I.PayId = 0, I.oriPayParam = null, I.invalidAppid = "", I.QQPayCbQueue = [], I);function I() {}t.ALSDK = n, t.SDK_MODULE_LIKE = "Icon", t.SDK_MODULE_ICONS_CLICK = "ICONS_CLICK", t.SDK_MODULE_BANNER_CLICK = "BANNER_CLICK";
}, function (e, t, a) {
  "use strict";

  var r = this && this.__assign || function () {
    return (r = Object.assign || function (e) {
      for (var t, a = 1, n = arguments.length; a < n; a++) for (var o in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);return e;
    }).apply(this, arguments);
  };Object.defineProperty(t, "__esModule", { value: !0 });var f = a(6),
      s = a(3),
      l = a(2),
      m = a(0),
      _ = a(1),
      n = a(4),
      d = a(5),
      o = (i.allowDebug = function (e) {
    l.ALUtil.DEBUG = e;
  }, i.changeAutoPay = function (e) {
    m.ALConfig.AutoPayCb = e;
  }, i.getAds = function () {
    return s.ALReport.Ads;
  }, i.getAdsPos = function () {
    return s.ALReport.AdsPos;
  }, i.readAppidList = function (t) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.QQ ? _.ALData.appIdListStr ? t(_.ALData.appIdListStr) : l.ALUtil.readAppIDList().then(function (e) {
      _.ALData.appIdListStr = e, t(_.ALData.appIdListStr), l.ALUtil.LOG("AladinSDK readAppIDList", e);
    }) : console.warn("当前环境无法调用此接口");
  }, i.init = function (e, t, a, n) {
    f.ALSDK.init(l.ALUtil.addAppidPrefix(e), t, a, n);
  }, i.login = function (r) {
    var i = { code: -1, msg: "", openid: "", token: "" };if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.QQ) {
      var p = 0,
          t = function () {
        p += 1, m.ALConfig.RunEnv.login({ success: function (e) {
            p = 0, l.ALUtil.LOG("login init code:", e.code);var t = _.ALData.opts.query,
                a = { code: e.code, appid: m.ALConfig.appId, codetype: m.ALConfig.GamePlatform, ads: s.ALReport.Ads, ads_pos: s.ALReport.AdsPos, share_level: t.a_level || "", inviter: t.a_inviter || "", top_inviter: t.a_top_inviter || "", ad_appid: t.ad_appid ? t.ad_appid : "", query: JSON.stringify(t), model: s.ALReport.publicParam.channel },
                n = 0,
                o = function () {
              n += 1, d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + "/box/sdk/user_login", a, function (e) {
                e.isSucc ? (n = 0, l.ALUtil.LOG("httpRsp:", e), m.ALConfig.token = e.data.token, _.UserInfoData.Openid = m.ALConfig.openId = e.data.openid, _.UserInfoData.NewPlayer = e.data.is_new, _.UserInfoData.Gender = e.data.gender || "", _.UserInfoData.NickName = e.data.nickName || "", _.UserInfoData.SessionKey = e.data.session_key || "", _.UserInfoData.ReportOpenid = e.data.is_reported_openid, m.ALConfig.appId = e.data.appid, i.code = 0, i.openid = e.data.openid, i.token = e.data.token, r && r(i)) : n < 6 ? o() : (l.ALUtil.LOG("login state:", e.reason), i.msg = e.reason, r && r(i));
              });
            };o();
          }, fail: function (e) {
            p <= 6 ? t() : (i.msg = e, r && r(i));
          } });
      };t();
    } else console.warn("登录功能仅支持微信和手Q平台！"), i.msg = "登录功能仅支持微信和手Q平台", r && r(i);
  }, i.getHttpData = function (t, a, n) {
    if ("" != m.ALConfig.appId) {
      var o = { ret: 0, data: [] };d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + t, r(r({}, a), { appid: m.ALConfig.appId, openid: m.ALConfig.openId }), function (e) {
        e.isSucc ? e.data && (o.data = e.data) : (console.warn("getHttpData fail:", t, a, e.reason), o.ret = -1), n(o);
      });
    } else console.warn("appId为空，请先调用init接口");
  }, i.getUserInfo = function () {
    var e = {};return e.NickName = _.UserInfoData.NickName, e.AvatarUrl = _.UserInfoData.AvatarUrl, e.Country = _.UserInfoData.Country, e.Gender = _.UserInfoData.Gender, e.Language = _.UserInfoData.Language, e.Province = _.UserInfoData.Province, e.Model = _.UserInfoData.Model, e.NewPlayer = _.UserInfoData.NewPlayer, e.Openid = _.UserInfoData.Openid, e.City = _.UserInfoData.City, e.SessionKey = _.UserInfoData.SessionKey, e.ReportOpenid = _.UserInfoData.ReportOpenid, e;
  }, i.msgCheck = function (e, t, a) {
    var n = { ret: 0, msg: "", content: e };if ("" == m.ALConfig.appId) return console.warn("appId为空，请先调用init接口"), n.ret = -1, n.msg = "appId为空，请先调用init接口", void t(n);d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + "/box/wx/msgSecCheck", { appid: m.ALConfig.appId, content: e, scene: a || _.MsgCheckSceneEnum.Comments, openid: m.ALConfig.openId }, function (e) {
      e.isSucc || (console.warn("msgCheck fail:", e.reason), n.ret = -1, n.msg = "msgCheck fail:" + e.reason), t(n);
    });
  }, i.imgCheck = function (e, t) {
    var a = { ret: 0, msg: "" };if ("" == m.ALConfig.appId) return console.warn("appId为空，请先调用init接口"), a.ret = -1, a.msg = "appId为空，请先调用init接口", void t(a);var n = new FormData();n.append("media", e), n.append("appid", m.ALConfig.appId), d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + "/box/wx/imgSecCheck", n, function (e) {
      e.isSucc || (console.warn("msgCheck fail:", e.reason), a.ret = -1, a.msg = "msgCheck fail:" + e.reason), t(a);
    }, { "content-type": "multipart/form-data" });
  }, i.openShop = function (e, t) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat && m.ALConfig.RunEnv.openCustomerServiceConversation({ sessionFrom: "shop|" + e, showMessageCard: !0, sendMessageTitle: "商城", sendMessagePath: "/pages/index/index", sendMessageImg: t });
  }, i.reportData = function (e, t, a) {
    l.ALUtil.LOG("上报的[value extra]:", t, a), "" != m.ALConfig.appId && "" != m.ALConfig.openId || console.warn("请先调用init接口和上报openid接口!");var n = r(r({}, s.ALReport.publicParam), { report_type: "normal", typeStr: e, value: t, extra: a });s.ALReport.reportDataToMarketNew(n);
  }, i.initShareData = function (e) {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat) {
      if (_.ALData.shareData && 0 < _.ALData.shareData.length) {
        _.ALData.curShareData = null, _.ALData.curShareScene = "";var t = [];if (e) for (var a = 0; a < _.ALData.shareData.length; a++) _.ALData.shareData[a].sceneid == e && t.push(_.ALData.shareData[a]);else t = _.ALData.shareData;if (0 < t.length) {
          var n = Math.floor(Math.random() * t.length);_.ALData.curShareData = t[n], _.ALData.curShareScene = e || "", l.ALUtil.LOG("ShareData:", _.ALData.curShareData, _.ALData.curShareScene);
        } else l.ALUtil.LOG("ShareData is empty");
      }
    } else console.warn("当前环境无法调用此接口");
  }, i.getToken = function () {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.QQ) return "" == m.ALConfig.token && console.warn("获取token失败，请先调用init方法"), m.ALConfig.token;console.warn("当前环境无法调用此接口");
  }, i.paycheck = function (e, t) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat ? f.ALSDK.paycheck(e, t) : console.warn("当前环境无法调用此接口");
  }, i.pay = function (e, t, a, n, o, r, i, p, s, l, d, c) {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat) {
      var u = 0;c && (u = c), f.ALSDK.pay(e, m.ALConfig.openId, a, n, "1", r, i, p, s, l, d, u, {});
    } else console.warn("当前环境无法调用此接口");
  }, i.midasPay = function (e) {
    if (console.log("midasPay params", m.ALConfig.GamePlatform, e), m.ALConfig.GamePlatform === _.PlatformEnum.WeChat) {
      for (var t = 0; t < this.mustNeed.length; t++) {
        var a = this.mustNeed[t];if (!e.hasOwnProperty(a)) return void console.warn("缺少必传字段：", a);
      }var n = 0;return e.env && (n = e.env), e.hasOwnProperty("model_id") && e.hasOwnProperty("package_id") && e.hasOwnProperty("zone_id") && e.hasOwnProperty("role_id") && s.ALReport.commonReport(26, 2, { ply: e.model_id, video_sence: e.package_id, zone_id: e.zone_id, role_id: e.role_id }), void f.ALSDK.pay(e.appid, m.ALConfig.openId, e.amount, e.pid, "1", e.orderTitle, e.orderDesc, e.imgUrl, e.limit, e.params, e.cb, n, e);
    }m.ALConfig.GamePlatform !== _.PlatformEnum.QQ ? console.warn("请在手Q或者微信环境调用此接口") : this.qqpay(e);
  }, i.qqpay = function (e) {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.QQ) {
      if ("" != m.ALConfig.appId && "" != m.ALConfig.openId) {
        if ("" == e.goodid || !l.ALUtil.isInteger(e.good_num) || e.good_num < 1 || !l.ALUtil.isInteger(e.amt) || e.amt < 1 || !e.callback || !l.ALUtil.isFunction(e.callback)) console.warn("qqpay:参数传递错误", e);else {
          var t = e.params ? e.params : "",
              a = e.limit ? e.limit : 0,
              n = e.pid ? e.pid : "",
              o = e.title ? e.title : "",
              r = e.zone_id ? e.zone_id : 0,
              i = e.role_id ? e.role_id : 0,
              p = e.model_id ? e.model_id : 0,
              s = e.package_id ? e.package_id : "";f.ALSDK.qqpay(m.ALConfig.appId, m.ALConfig.openId, e.amt, e.goodid, e.good_num, e.callback, t, a, n, o, r, i, p, s);
        }
      } else console.warn("qqpay:获取appid和openid失败", m.ALConfig.appId, m.ALConfig.openId);
    } else console.warn("qqpay:当前环境无法调用此接口", m.ALConfig.GamePlatform);
  }, i.getGiftPack = function (t) {
    var a = r({}, t);if (m.ALConfig.appId && (a.appid = m.ALConfig.appId), m.ALConfig.openId && (a.openid = m.ALConfig.openId), !(a.hasOwnProperty("appid") && a.hasOwnProperty("openid") && a.hasOwnProperty("level") && a.hasOwnProperty("check_point") && a.hasOwnProperty("zone_id") && a.hasOwnProperty("role_id"))) return console.warn("getGiftPack:缺少必传参数", a, t, m.ALConfig.appId, m.ALConfig.openId), void t.cb({ ret: -1, msg: "缺少参数", list: [] });d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + "/box/rfm/list", a, function (e) {
      if (l.ALUtil.LOG("getGiftPack data:", t, a, e), !e.isSucc) return console.warn("getGiftPack fail:", e.reason), void t.cb({ ret: -2, msg: "getGiftPack fail:" + e.reason, list: [] });t.cb({ ret: 0, msg: "", list: e.data });
    });
  }, i.reportGiftPackShow = function (e) {
    e.hasOwnProperty("model_id") && e.hasOwnProperty("package_id") && e.hasOwnProperty("zone_id") && e.hasOwnProperty("role_id") ? s.ALReport.commonReport(26, 1, { ply: e.model_id, video_sence: e.package_id, zone_id: e.zone_id, role_id: e.role_id }) : console.error("reportGiftPackShow:请填写模型ID，礼包ID，分区ID,角色ID", e);
  }, i.ipShield = function (t) {
    var a = { ip: "", province: "", city: "", status: 1 };d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + "/box/sdk/shield", {}, function (e) {
      return e.isSucc ? e.data && (a.status = e.data.status, a.ip = e.data.ip, a.province = e.data.province, a.city = e.data.city) : console.warn("ipShield:", e.reason), void t(a);
    });
  }, i.reportOpenId = function (e, t) {
    void 0 === t && (t = {}), l.ALUtil.LOG("上报的[OPENID]:", e, t), s.ALReport.publicParam.zone_id = t.zone_id || "", s.ALReport.publicParam.role_id = t.role_id || "", s.ALReport.publicParam.is_gs = t.is_gs || 0, s.ALReport.report(s.REPORT_TYPE_ENUM.REPORT_TYPE_OPEN_ID, m.ALConfig.openId || e);
  }, i.commonReport = function (e, t, a) {
    s.ALReport.commonReport(e, t, a);
  }, i.reportGoodsBehavior = function (e) {
    var t = r({}, s.ALReport.publicParam);t.event_type = _.BehaviorEnum.Goods, t.product_type = e.product_type, t.product_id = e.product_id, t.change_type = e.change_type, t.product_cnt_before = e.product_cnt_before, t.product_cnt = e.product_cnt, t.product_cnt_after = e.product_cnt_after, t.reason = e.reason, t.scene = e.scene || "", t.login_type = l.ALUtil.getLoginType(), t.zone_id = e.zone_id || t.zone_id, t.open_id = e.open_id || t.open_id, t.is_gs = e.is_gs || t.is_gs, d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + "/box/stats/report/goods_flow", t, function (e) {
      t.callback && t.callback(e);
    });
  }, i.reportGrowthBehavior = function (e) {
    var t = r({}, s.ALReport.publicParam);t.event_type = _.BehaviorEnum.Growth, t.product_type = e.product_type, t.product_id = e.product_id, t.change_type = e.change_type, t.product_cnt_before = e.product_cnt_before, t.product_cnt = e.product_cnt, t.product_cnt_after = e.product_cnt_after, t.reason = e.reason, t.scene = e.scene || "", t.zone_id = e.zone_id || t.zone_id, t.open_id = e.open_id || t.open_id, t.is_gs = e.is_gs || t.is_gs, t.login_type = l.ALUtil.getLoginType(), d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + "/box/stats/report/goods_flow", t, function (e) {
      t.callback && t.callback(e);
    });
  }, i.reportActivityBehavior = function (e) {
    var t = r({}, s.ALReport.publicParam);t.activity_id = e.activity_id || _.BehaviorEnum.Activity, t.activity_action = e.activity_action, t.progress = e.progress || 0, t.scene = e.scene || "", t.zone_id = e.zone_id || t.zone_id, t.open_id = e.open_id || t.open_id, t.is_gs = e.is_gs || t.is_gs, t.login_type = l.ALUtil.getLoginType(), d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + "/box/stats/report/game_activity", t, function (e) {
      t.callback && t.callback(e);
    });
  }, i.reportAnalytics = function (e, t, a) {
    var n = l.ALUtil.addAppidPrefix(e);"" == m.ALConfig.appId && (console.warn("请先调用init方法"), m.ALConfig.appId = n), m.ALConfig.appId != n && console.warn("init appid和reportAnalytics appid不一致"), s.ALReport.reportAnalytics(n, t);
  }, i.reportFlowShow = function (e) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.Oppo ? (s.ALReport.reportCheck.gameShow = e, f.ALSDK.reportFlowShow(e)) : console.warn("当前环境无法调用此接口");
  }, i.reportWithAppId = function (e, t, a) {
    void 0 === a && (a = "");var n = l.ALUtil.addAppidPrefix(e);"" == m.ALConfig.appId && (console.warn("请先调用init方法"), m.ALConfig.appId = n), m.ALConfig.appId != n && console.warn("init appid和reportWithAppId appid不一致"), s.ALReport.report(t, a);
  }, i.jumpForum = function (t) {
    return m.ALConfig.GamePlatform != _.PlatformEnum.WeChat ? (console.warn("jumpForum:当前环境无法调用此接口"), void (t.fail && t.fail("当前环境无法调用此接口"))) : "" == m.ALConfig.appId ? (console.warn("jumpForum:get appid fail"), void (t.fail && t.fail("get appid fail"))) : void m.ALConfig.RunEnv.navigateToMiniProgram({ appId: "wx0d26fd9185b4bc4d", path: "pages/index/index?from=game&game_appid=" + m.ALConfig.appId, extraData: { from: "game", game_appid: m.ALConfig.appId }, success: function (e) {
        console.log("jumpForum success", e), t.success && t.success(e);
      }, fail: function (e) {
        console.log("jumpForum fail", e), t.fail && t.fail(e);
      }, complete: function (e) {
        console.log("jumpForum complete", e), t.complete && t.complete(e);
      } });
  }, i.clickToMiniProgram = function (e, t, a, n, o, r) {
    void 0 === a && (a = ""), void 0 === n && (n = null), void 0 === o && (o = null), void 0 === r && (r = null), m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.Oppo ? t === this.ClickTypes.ICONS_CLICK ? f.ALSDK.toMiniProgram(e, this.ClickTypes.ICONS_CLICK, f.SDK_MODULE_ICONS_CLICK, a || "icons", n, o, r) : t === this.ClickTypes.BANNER_CLICK ? f.ALSDK.toMiniProgram(e, this.ClickTypes.BANNER_CLICK, f.SDK_MODULE_BANNER_CLICK, a || "banner", n, o, r) : f.ALSDK.toMiniProgram(e, this.ClickTypes.ICONS_CLICK, f.SDK_MODULE_ICONS_CLICK, a, n, o, r) : console.warn("当前环境无法调用此接口");
  }, i.getFavoData = function (e, t, a) {
    void 0 === t && (t = 400), void 0 === a && (a = ""), m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.Oppo ? f.ALSDK.requestModuleData(f.SDK_MODULE_LIKE, e, t, a) : console.warn("当前环境无法调用此接口");
  }, i.reportCheckSingle = function (e) {
    s.ALReport.reportCheck[e] ? console.log("[AladinSDK上报检查]上报成功：", s.ALReport.reportCheck[e]) : console.warn("[AladinSDK上报检查]上报失败");
  }, i.reportCheck = function () {
    if (console.log("[AladinSDK上报检查]SDK版本：", m.ALConfig.sdkVersion), console.log("[AladinSDK上报检查]SDK域名：", m.ALConfig.ReportMarketDomain), s.ALReport.reportCheck.appid ? console.log("[AladinSDK上报检查]appid：", s.ALReport.reportCheck.appid) : console.warn("[AladinSDK上报检查]appid：没有初始化SDK"), s.ALReport.reportCheck.openid ? console.log("[AladinSDK上报检查]openid上报成功：", s.ALReport.reportCheck.openid) : console.warn("[AladinSDK上报检查]openid：没有上报"), 0 < s.ALReport.CustomNode.length) {
      for (var e = "", t = 0; t < s.ALReport.CustomNode.length; t++) s.ALReport.CustomNode[t] && (e = e + t + ",");console.log("[AladinSDK上报检查]自定义打点上报成功：", e);
    } else console.warn("[AladinSDK上报检查]自定义打点：没有上报");s.ALReport.reportCheck.startTime ? console.log("[AladinSDK上报检查]启动时长上报成功：", s.ALReport.reportCheck.startTime) : console.warn("[AladinSDK上报检查]启动时长：没有上报"), s.ALReport.reportCheck.level ? console.log("[AladinSDK上报检查]用户等级上报成功：", s.ALReport.reportCheck.level) : console.warn("[AladinSDK上报检查]用户等级：没有上报"), s.ALReport.reportCheck.video_sence ? console.log("[AladinSDK上报检查]视频广告场景上报成功：", s.ALReport.reportCheck.video_sence) : console.warn("[AladinSDK上报检查]视频广告场景：没有上报"), s.ALReport.reportCheck.video_play ? console.log("[AladinSDK上报检查]视频广告播放次数上报成功：", s.ALReport.reportCheck.video_play) : console.warn("[AladinSDK上报检查]视频广告播放次数：", "没有上报"), s.ALReport.reportCheck.video_play ? console.log("[AladinSDK上报检查]视频广告播放次数上报成功：", s.ALReport.reportCheck.video_play) : console.warn("[AladinSDK上报检查]视频广告播放次数：", "没有上报"), s.ALReport.reportCheck.payAmount ? console.log("[AladinSDK上报检查]安卓支付金额上报成功：", s.ALReport.reportCheck.payAmount) : console.warn("[AladinSDK上报检查]安卓支付金额：", "没有上报"), s.ALReport.reportCheck.gameTime ? console.log("[AladinSDK上报检查]在线时长上报成功：", s.ALReport.reportCheck.gameTime) : console.warn("[AladinSDK上报检查]在线时长：", "没有上报"), s.ALReport.reportCheck.gameShow ? console.log("[AladinSDK上报检查]展示的游戏上报成功：", s.ALReport.reportCheck.gameShow) : console.warn("[AladinSDK上报检查]展示的游戏：", "没有上报"), s.ALReport.reportCheck.sharePic ? console.log("[AladinSDK上报检查]分享图ID上报成功：", s.ALReport.reportCheck.sharePic) : console.warn("[AladinSDK上报检查]分享图ID：", "没有上报"), s.ALReport.reportCheck.jumpData ? console.log("[AladinSDK上报检查]跳转数据上报成功：", [s.ALReport.reportCheck.jumpData]) : console.warn("[AladinSDK上报检查]跳转数据：", "没有上报");
  }, i.antiAddiction = function (t) {
    if (null !== t.id && null !== t.name) {
      var e = {};e.appid = t.appid || m.ALConfig.appId, e.openid = t.openid || m.ALConfig.openId, e.id = t.id, e.name = t.name, d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + "/box/wx_fcm", e, function (e) {
        t.callback && t.callback(e);
      }, { "content-type": "application/json" });
    } else console.error("id or name null");
  }, i.opInit = function (e) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat && (m.ALConfig.RunEnv.offInteractiveStorageModified && m.ALConfig.RunEnv.offInteractiveStorageModified(i.opReportInteractiveStorageModified), m.ALConfig.RunEnv.onInteractiveStorageModified && m.ALConfig.RunEnv.onInteractiveStorageModified(i.opReportInteractiveStorageModified), i.openDataContext = m.ALConfig.RunEnv.getOpenDataContext(), i.shareCanvas = i.openDataContext.canvas, m.ALConfig.InviteStartTime = e.start, m.ALConfig.InviteEndTime = e.end, m.ALConfig.InviteKeyList = e.keylist || ["1", "2", "3"], i.openDataContext.postMessage({ type: "init", start: e && e.start, end: e && e.end, period: e && e.period, sharedata: _.ALData.shareData }), i.opUpdateInviteData(function () {
      i.opCheckLaunchQuery(), e.callback && e.callback();
    }));
  }, i.opReportInteractiveStorageModified = function (t) {
    if (1 !== Number(t)) {
      var e = {};e.appid = m.ALConfig.appId, e.openid = m.ALConfig.openId, e.type = t, d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + "/box/invite/help_suc", e, function (e) {
        console.log("ReportInteractiveStorageModified:", t);
      });
    }
  }, i.opUpdateInviteData = function (a) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat && m.ALConfig.RunEnv.getUserInteractiveStorage({ keyList: m.ALConfig.InviteKeyList, success: function (e) {
        var t = { appid: m.ALConfig.appId, openid: m.ALConfig.openId, date: m.ALConfig.InviteStartTime, duration: l.ALUtil.getActivityDuration(m.ALConfig.InviteStartTime, m.ALConfig.InviteEndTime), token: m.ALConfig.token, encryptedData: encodeURIComponent(e.encryptedData), iv: encodeURIComponent(e.iv) };d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + "/box/invite/stat", t, function (e) {
          e.isSucc ? (i.opInitInviteData(e.data), i.opPostOpenidsToOpenCentext(), a && a()) : console.error("report opencontentdata error:" + e.reason);
        });
      }, fail: function (e) {
        console.error("getUserInteractiveStorage error:", e);
      } });
  }, i.opInitInviteData = function (e) {
    _.InvitedData.Inviter.normal_level_help_sum = e.inviter.normal_level_help_sum, _.InvitedData.Inviter.normal_pay_help_sum = e.inviter.normal_pay_help_sum, _.InvitedData.Inviter.normal_user_list = e.inviter.normal_user_list, _.InvitedData.Inviter.normal_invite_num = e.inviter.normal_invite_num, _.InvitedData.Inviter.open_invite_num = e.inviter.open_invite_num, _.InvitedData.Inviter.open_today_invite_num = e.inviter.open_today_invite_num, _.InvitedData.Inviter.open_level_help_sum = e.inviter.open_level_help_sum, _.InvitedData.Inviter.open_pay_help_sum = e.inviter.open_pay_help_sum, _.InvitedData.Invited.level_help_sum = e.invited.level_help_sum, _.InvitedData.Invited.pay_help_sum = e.invited.pay_help_sum;
  }, i.opGetInviteData = function () {
    var e = { Inviter: {}, Invited: {} };return e.Inviter.normal_level_help_sum = _.InvitedData.Inviter.normal_level_help_sum, e.Inviter.normal_pay_help_sum = _.InvitedData.Inviter.normal_pay_help_sum, e.Inviter.normal_user_list = _.InvitedData.Inviter.normal_user_list, e.Inviter.normal_invite_num = _.InvitedData.Inviter.normal_invite_num, e.Inviter.open_invite_num = _.InvitedData.Inviter.open_invite_num, e.Inviter.open_today_invite_num = _.InvitedData.Inviter.open_today_invite_num, e.Inviter.open_level_help_sum = _.InvitedData.Inviter.open_level_help_sum, e.Inviter.open_pay_help_sum = _.InvitedData.Inviter.open_pay_help_sum, e.Invited.level_help_sum = _.InvitedData.Invited.level_help_sum, e.Invited.pay_help_sum = _.InvitedData.Invited.pay_help_sum, e;
  }, i.opPostOpenidsToOpenCentext = function () {
    if (i.openDataContext) {
      var t = [];_.InvitedData.Inviter.normal_user_list.forEach(function (e) {
        t.push(e.openid);
      }), i.openDataContext.postMessage({ type: "addInvitedOpenid", list: t, param: {} });
    }
  }, i.opCheckLaunchQuery = function () {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat && i.openDataContext) {
      var e = m.ALConfig.RunEnv.getLaunchOptionsSync().query;if (e && e.shareMessageToFriendScene && 1 == e.shareMessageToFriendScene) {
        if (_.UserInfoData.ReportOpenid) return void console.log("Has ReportOpenid");i.openDataContext.postMessage({ type: "linkHelpFriend", param: {} });
      }
    }
  }, i.opUpgradeHelp = function (e) {
    i.openDataContext && (e = e || {}, i.openDataContext.postMessage({ type: "upgradeHelpInviter", param: e }));
  }, i.opRechargeHelp = function (e) {
    i.openDataContext && (e = e || {}, i.openDataContext.postMessage({ type: "rechargeHelpInviter", param: e }));
  }, i.opRenderInvite = function (e) {
    i.openDataContext && (i.shareCanvas.width = e.canvas.width, i.shareCanvas.height = e.canvas.height, i.opUpdateInviteData(function () {
      i.openDataContext.postMessage({ type: "showInvitedRank", param: e });
    }));
  }, i.opRefreshInvite = function (e) {
    i.openDataContext && (e = e || {}, i.openDataContext.postMessage({ type: "updatePotentialInvite", param: e }));
  }, i.opClose = function (e) {
    i.openDataContext && i.openDataContext.postMessage({ type: "close", param: e });
  }, i.openDataContext = null, i.shareCanvas = null, i.mustNeed = ["appid", "amount", "pid", "orderTitle", "orderDesc", "imgUrl", "limit", "params", "cb", "zone_id", "role_id"], i.ClickTypes = { ICONS_CLICK: "0_11", BANNER_CLICK: "0_12" }, i.ReportTypes = { SHOW: "1_1", LOGIN: "1_2", OPEN_ID: "1_3", AUTH: "1_4", SHARE: "1_5", LIKE_CLICK: "1_6", DRAWER_CLICK: "1_7", LIKE_SHOW: "1_8", DRAWER_SHOW: "1_9", SHARE_Ready: "1_10", PAY_MENT: "6_1", PAY_MENT_STAR: "6_2", PAY_MENT_INTER: "6_3", PAY_MENT_FAIL: "6_4", MORE_SHOW: "2_0", MORE_FOLD: "2_1", MORE_CLICK: "2_2", MORE_LONG_CLICK: "2_3", VIDEO_OPEN: "2_4", VIDEO_WATCH_FAIL: "2_5", VIDEO_WATCH_NORMAL: "2_6", GAME_BOX_SHOW: "8_1", GAME_BOX_CLICK: "8_2", GAME_BOX_BANNER_CLICK: "8_3", VIDEO_BTN_SHOW: "5_6", VIDEO_CLICK: "5_7", SHARE_BTN_SHOW: "5_8", SHARE_CLICK: "5_9" }, i);function i() {}t.AladinSDK = o, l.ALUtil.qgExist() && console.log("test1"), console.log("test consol log 1112"), l.ALUtil.runEnvExist() ? (console.log("runEnvExist"), l.ALUtil.initGamePlatform(), console.log("GamePlatform:", m.ALConfig.GamePlatform), l.ALUtil.initRunEnv(), console.log("RunEnv:", m.ALConfig.RunEnv), s.ALReport.init(), n.ALIntercept.init(), l.ALUtil.reportUserInfo(), l.ALUtil.saveSystemInfo(), l.ALUtil.saveNetworkType(), o.login(function () {
    o.reportAnalytics(m.ALConfig.appId, 0);
  })) : console.warn("当前运行环境错误，请勿调用相关接口！！！"), window.AladinSDK = o;
}]);window.AladinSDK = aladinSDK.AladinSDK;module.exports = { AladinSDK: aladinSDK.AladinSDK };