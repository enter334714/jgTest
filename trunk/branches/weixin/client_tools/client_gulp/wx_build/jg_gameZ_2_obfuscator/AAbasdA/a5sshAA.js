var d = wx.$A;
var window = window || GameGlobal;var aladinSDK = function (a) {
  var n = {};function o(e) {
    if (n[e]) return n[e].exports;var t = n[e] = { i: e, l: !1, exports: {} };return a[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports;
  }return o.m = a, o.c = n, o.d = function (e, t, a) {
    o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
  }, o.r = function (e) {
    d[481243] != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: d[481245] }), Object.defineProperty(e, d[481246], { value: !0 });
  }, o.t = function (t, e) {
    if (1 & e && (t = o(t)), 8 & e) return t;if (4 & e && d[481247] == typeof t && t && t.__esModule) return t;var a = Object.create(null);if (o.r(a), Object.defineProperty(a, d[481248], { enumerable: !0, value: t }), 2 & e && d[480798] != typeof t) for (var n in t) o.d(a, n, function (e) {
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

  Object.defineProperty(t, d[481246], { value: !0 });var n = (o.sdkVersion = d[509361], o.envVersion = d[509362], o.appId = "", o.version = d[509363], o.openId = "", o.unionId = "", o.testAppid = d[509364], o.testOpenId = d[509365], o.ReportMarketDomain = window.ReportMarketDev ? d[509366] : d[509367], o.QQH5PayUrl = window.ReportMarketDev ? d[509368] : d[509369], o.ImgDomain = d[509370], o.token = "", o.RunEnv = {}, o.GamePlatform = "", o.AutoPayCb = !1, o.base64Test = d[509371], o.AccountInfo = null, o.InviteStartTime = null, o.InviteEndTime = null, o.InviteKeyList = [], o);function o() {}t.ALConfig = n;
}, function (e, t, a) {
  "use strict";

  Object.defineProperty(t, d[481246], { value: !0 });var n = (o.opts = null, o.scene = 0, o.shareScene = 0, o.topInviter = "0", o.inviter = "0", o.level = 1, o.score = 1, o.isVertical = !1, o.isTSA = !1, o.allowShare = !1, o.appIdListStr = "", o.sdkData = null, o.moreData = null, o.iconData = null, o.curShareData = null, o.curShareScene = "", o.shareData = [], o);function o() {}t.ALData = n;var r = (i.NickName = "", i.AvatarUrl = "", i.Country = "", i.Gender = 0, i.Language = "", i.Province = "", i.Model = "", i.NewPlayer = !1, i.Openid = "", i.City = "", i.SessionKey = "", i.ReportOpenid = !1, i);function i() {}t.UserInfoData = r;var p = (s.Inviter = { normal_invite_num: 0, normal_level_help_sum: 0, normal_pay_help_sum: 0, normal_user_list: [], open_invite_num: 0, open_today_invite_num: 0, open_level_help_sum: 0, open_pay_help_sum: 0 }, s.Invited = { level_help_sum: 0, pay_help_sum: 0 }, s);function s() {}t.InvitedData = p;t.PlatformEnum = { QQ: "qq", WeChat: d[480628], TouTiao: "tt", Oppo: d[509372], Vivo: d[509373], HuaWei: "hw", Other: d[506274] };t.BehaviorEnum = { Goods: d[509374], Growth: d[509375], Activity: d[509376] };t.LoginTypeEnum = { Other: "0", Visitor: "1", Wechat: "2", QQ: "3" };t.MsgCheckSceneEnum = { Other: 0, Info: 1, Comments: 2, Form: 3, SocialLog: 4 };
}, function (e, t, a) {
  "use strict";

  Object.defineProperty(t, d[481246], { value: !0 });var n = a(4),
      o = a(3),
      r = a(0),
      i = a(1),
      p = (s.LOG = function (e) {
    for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];this.DEBUG && console.log(d[509377], e, t);
  }, s.addAppidPrefix = function (e) {
    return r.ALConfig.GamePlatform == i.PlatformEnum.Oppo || r.ALConfig.GamePlatform == i.PlatformEnum.Vivo || r.ALConfig.GamePlatform == i.PlatformEnum.HuaWei ? r.ALConfig.GamePlatform + e : e;
  }, s.wxNotExist = function () {
    return d[481243] == typeof wx;
  }, s.wxExist = function () {
    return d[481243] != typeof wx;
  }, s.ttExist = function () {
    return d[481243] != typeof tt;
  }, s.ttNotExist = function () {
    return d[481243] == typeof tt;
  }, s.qgExist = function () {
    return d[481243] != typeof qg;
  }, s.qgNotExist = function () {
    return d[481243] == typeof qg;
  }, s.hbsExist = function () {
    return d[481243] != typeof hbs;
  }, s.hbsNotExist = function () {
    return d[481243] == typeof hbs;
  }, s.qqNotExist = function () {
    return d[481243] == typeof qq;
  }, s.qqExist = function () {
    return d[481243] != typeof qq;
  }, s.runEnvExist = function () {
    return d[481243] != typeof wx || d[481243] != typeof qq || d[481243] != typeof tt || d[481243] != typeof qg || d[481243] != typeof hbs;
  }, s.runEnvNotExist = function () {
    return d[481243] == typeof wx && d[481243] == typeof qq && d[481243] == typeof tt && d[481243] == typeof qg && d[481243] == typeof hbs;
  }, s.initRunEnv = function () {
    switch (r.ALConfig.GamePlatform) {case i.PlatformEnum.QQ:
        r.ALConfig.RunEnv = qq;break;case i.PlatformEnum.WeChat:
        r.ALConfig.RunEnv = wx;break;case i.PlatformEnum.TouTiao:
        r.ALConfig.RunEnv = tt;break;case i.PlatformEnum.HuaWei:
        r.ALConfig.RunEnv = hbs;break;case i.PlatformEnum.Oppo || i.PlatformEnum.Vivo:
        r.ALConfig.RunEnv = qg;break;default:
        throw Error(d[509378]);}
  }, s.initGamePlatform = function () {
    if (s.qqExist()) r.ALConfig.GamePlatform = i.PlatformEnum.QQ;else if (s.wxExist()) r.ALConfig.GamePlatform = i.PlatformEnum.WeChat;else if (s.ttExist()) r.ALConfig.GamePlatform = i.PlatformEnum.TouTiao;else if (s.hbsExist()) r.ALConfig.GamePlatform = i.PlatformEnum.HuaWei;else {
      if (s.qgExist()) try {
        var e = qg.getSystemInfoSync();if (e && e.brand) return void (r.ALConfig.GamePlatform = e.brand.toLowerCase());
      } catch (e) {
        console.error(d[509379], e);
      }r.ALConfig.GamePlatform = i.PlatformEnum.Other;
    }
  }, s.readAppIDList = function () {
    return new Promise(function (o, e) {
      var t = d[480598] === r.ALConfig.RunEnv.getSystemInfoSync().platform ? d[509380] : d[509381];r.ALConfig.RunEnv.getFileSystemManager().readFile({ filePath: t, encoding: d[509382], success: function (e) {
          var t = e.data,
              a = JSON.parse(t).navigateToMiniProgramAppIdList,
              n = "";a && (n = a.join(",")), s.LOG(d[509383], n), o(n);
        }, fail: function (e) {
          s.LOG(d[509384], e), o("");
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
        n = e[2] || d[509385],
        o = this._parseQueryString(e[3]);if (-1 < n.indexOf("?")) {
      var r = n.split("?"),
          i = this._parseQueryString(r[1]);this._mergeParams(o, i);
    }return o.tgt = e[1], { appId: t, path: n += "?" + this._buildQueryString(o), extraData: o, target_appid: a };
  }, s.isInteger = function (e) {
    return Math.floor(e) === e;
  }, s.isFunction = function (e) {
    return d[509386] === Object.prototype.toString.call(e);
  }, s.convertVersionStringToNumber = function (e) {
    var t = e.split(".");return Number(t[0]) << 24 | Number(t[1]) << 16 | 0 | Number(t[2]);
  }, s.reportUserInfo = function () {
    r.ALConfig.GamePlatform != i.PlatformEnum.WeChat && r.ALConfig.GamePlatform != i.PlatformEnum.QQ || r.ALConfig.RunEnv.getUserInfo({ success: function (e) {
        if (e && e.userInfo && 0 != e.userInfo.gender && "" != e.userInfo.language && "" != e.userInfo.country) {
          var t = {};t.nickName = i.UserInfoData.NickName = e.userInfo.nickName || "", t.avatarUrl = i.UserInfoData.AvatarUrl = e.userInfo.avatarUrl || "", t.country = i.UserInfoData.Country = e.userInfo.country || "", t.gender = i.UserInfoData.Gender = void 0 !== e.userInfo.gender ? e.userInfo.gender : 0, t.language = i.UserInfoData.Language = e.userInfo.language || "", t.province = i.UserInfoData.Province = e.userInfo.province || "", t.city = i.UserInfoData.City = e.userInfo.city || "", o.ALReport.reportDataToServer(t);
        } else console.log(d[509387]);
      }, fail: function (e) {
        console.warn(d[509388], e);
      } });
  }, s.saveSystemInfo = function () {
    if (!s.runEnvNotExist()) try {
      i.UserInfoData.Model = r.ALConfig.RunEnv.getSystemInfoSync().model;
    } catch (e) {
      console.error(d[509389]);
    }
  }, s.saveNetworkType = function () {
    if (!s.runEnvNotExist()) try {
      r.ALConfig.RunEnv.getNetworkType({ success: function (e) {
          n.ALIntercept.NetworkType = e.networkType;
        } });
    } catch (e) {
      console.error(d[509390]);
    }
  }, s.saveAccountInfo = function () {
    if (r.ALConfig.GamePlatform == i.PlatformEnum.WeChat) try {
      r.ALConfig.AccountInfo = r.ALConfig.RunEnv.getAccountInfoSync();
    } catch (e) {
      console.error(d[509391], e);
    }
  }, s.showString = function (e) {
    if ((r.ALConfig.GamePlatform == i.PlatformEnum.WeChat || r.ALConfig.GamePlatform == i.PlatformEnum.QQ) && window.ShowReportTips) {
      var t = function () {
        s.Showing || 0 != s.ToastStrList.length && (s.Showing = !0, r.ALConfig.RunEnv.showToast({ title: d[509392] + s.ToastStrList.shift(), icon: d[480424], duration: 300, success: function () {
            s.TimerID && clearTimeout(s.TimerID), s.TimerID = setTimeout(function () {
              s.Showing = !1, s.TimerID = null, t();
            }, 300), console.log(d[509393]);
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
  };Object.defineProperty(s, d[481246], { value: !0 });var d = t(1),
      c = t(0),
      u = t(5),
      f = t(2),
      i = t(4),
      a = (m.getAdsPos = function () {
    return this.Ads + "|" + this.AdsPos;
  }, m.init = function () {
    this._inited || (this._inited = !0, f.ALUtil.LOG(d[509394], c.ALConfig.GamePlatform), f.ALUtil.LOG(d[509395]), this.initStartTime(), f.ALUtil.runEnvNotExist() || (this._initAdsPos(), this._initReportData(), f.ALUtil.LOG(d[509396])));
  }, m.initStartTime = function () {
    m.startTime = new Date().getTime(), f.ALUtil.LOG(d[509397], m.startTime);
  }, m.reportTime = function (e) {
    if (0 != m.startTime) {
      var t = new Date().getTime(),
          a = l(l({}, m.publicParam), { report_type: d[509398], typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_TIME, value: t - m.startTime });m.reportCheck.startTime = t - m.startTime, this.reportDataToMarketNew(a);
    }
  }, m.reportAnalytics = function (e, t) {
    if (isNaN(t)) f.ALUtil.LOG(d[509399], t);else if (m.CustomNode[t]) console.warn(d[509400], t);else {
      m.CustomNode[t] = !0, this._inited || (console.warn(d[509401]), c.ALConfig.appId = e, this.init()), this._initReportData(), this.reportPrefix, this._getCurrentDate(), this._getTimeStamp(), this.reportDevice2Sence, d.ALData.level, c.ALConfig.openId, d.ALData.topInviter, d.UserInfoData.Gender;var a = l(l({}, m.publicParam), { report_type: d[509402], typeStr: d[509403] + t, ply: d.ALData.level, node: "0", open_id: c.ALConfig.openId, type: "10", sub_type: t, value: "", extra: d.UserInfoData.ReportOpenid ? "1" : "0", uuid: d.UserInfoData.NewPlayer ? "1" : "0", p_open_id: d.ALData.topInviter, gender: d.UserInfoData.Gender });f.ALUtil.showString(d[509403] + t), u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509404], a, function (e) {
        e.isSucc || f.ALUtil.LOG(d[509405], e.reason);
      });var n = 0,
          o = new Date().getTime(),
          r = m.LastCustomNode;n = 0 == m.CusRepLastTime ? o - m.startTime : o - m.CusRepLastTime, m.CusRepLastTime = o, m.LastCustomNode = Number(t), f.ALUtil.LOG(d[509406], t, n, m.CusRepLastTime, i.ALIntercept.NetworkType, i.ALIntercept.IsOnShow, m.publicParam.channel, m.publicParam.benchmarkLevel), m.CustomDataCache.push({ step: Number(t), dtime: n, network_type: i.ALIntercept.NetworkType, is_onshow: i.ALIntercept.IsOnShow, last_node: r });
    }
  }, m.report = function (e, t) {
    if (this._inited || this.init(), e != s.REPORT_TYPE_ENUM.REPORT_TYPE_TIME) {
      var a = e.split("_");if (a.length < 2) console.warn(d[509407]);else {
        f.ALUtil.showString(e);var n = t || "";if (e === s.REPORT_TYPE_ENUM.REPORT_TYPE_OPEN_ID) return c.ALConfig.openId = t, "" == m.reportCheck.openid ? m.reportCheck.openid = t : console.warn(d[509408]), window.ALOpenId = t, this.reportOpenId(), this.reportPerformanceData(), void this._initLevelData();if (e === s.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_BTN_SHOW && (m.reportCheck.video_sence = t, m.publicParam.video_sence = t), d[509409] === e && (m.reportCheck.level = t), e === s.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_WATCH_NORMAL && m.reportCheck.video_play++, e !== s.REPORT_TYPE_ENUM.REPORT_TYPE_PAY_MENT_IOS) {
          var o = a[0],
              r = a[1];this._initReportData(), this.reportPrefix, this._getCurrentDate(), this._getTimeStamp(), this.reportDevice2Sence, d.ALData.level, c.ALConfig.openId, d.ALData.topInviter, d.UserInfoData.Gender;var i = l(l({}, m.publicParam), { report_type: d[487158], typeStr: e, ply: d.ALData.level, node: "0", open_id: c.ALConfig.openId, type: o, sub_type: r, value: "0", extra: n, uuid: "", p_open_id: d.ALData.topInviter, gender: d.UserInfoData.Gender });e === s.REPORT_TYPE_ENUM.REPORT_TYPE_SHARE_READY && (i.video_sence = d.ALData.curShareScene), u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509404], i, function (e) {
            e.isSucc || f.ALUtil.LOG(d[509405], e.reason);
          });
        } else {
          f.ALUtil.LOG(d[509410], t);var p = l(l({}, m.publicParam), { report_type: d[509411], typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_PAY_MENT_IOS, extra_data: t });this.reportDataToMarketNew(p);
        }
      }
    } else this.reportTime(t);
  }, m.commonReport = function (e, t, a) {
    var n = l(l(l({}, m.publicParam), { report_type: d[487158], typeStr: e + "_" + t, project_id: c.ALConfig.appId, open_id: c.ALConfig.openId, type: e, sub_type: t }), a);u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509404], n, function (e) {
      e.isSucc || f.ALUtil.LOG(d[509412], e.reason);
    });
  }, m.reportPerformanceData = function () {
    if (c.ALConfig.openId && 0 < m.CustomDataCache.length) {
      var e = new Date().getTime(),
          t = e - m.CusRepLastTime;m.CusRepLastTime = e, m.CustomDataCache.push({ step: 100, dtime: t, network_type: i.ALIntercept.NetworkType, is_onshow: i.ALIntercept.IsOnShow, last_node: m.LastCustomNode }), m.CustomDataCache.push({ step: 200, dtime: e - m.startTime, network_type: i.ALIntercept.NetworkType, is_onshow: i.ALIntercept.IsOnShow, last_node: i.ALIntercept.OnHideAllTime }), f.ALUtil.LOG(d[509413], m.CustomDataCache);var a = l(l({}, m.publicParam), { report_type: d[509414], typeStr: d[509415], open_id: c.ALConfig.openId, type: 20, sub_type: 1, p_open_id: d.ALData.topInviter, gender: d.UserInfoData.Gender, ply: m.publicParam.benchmarkLevel, video_sence: JSON.stringify(m.CustomDataCache) });u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509404], a, function (e) {
        e.isSucc || f.ALUtil.LOG(d[509416], e.reason);
      }), m.CustomDataCache = [], m.LastCustomNode = -1;
    }
  }, m.reportOpenId = function () {
    var e = l(l({}, m.publicParam), { report_type: d[509417], typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_OPEN_ID, extra_data: this.getAdsPos(), value: new Date().getTime() - m.startTime });m.ad_appid && (e.ad_appid = m.ad_appid), e.nickName = d.UserInfoData.NickName, e.avatarUrl = d.UserInfoData.AvatarUrl, e.country = d.UserInfoData.Country, e.gender = d.UserInfoData.Gender, e.language = d.UserInfoData.Language, e.province = d.UserInfoData.Province, e.networkType = i.ALIntercept.NetworkType, e.model = d.UserInfoData.Model, m.reportDataToMarketNew(e);
  }, m.reportDataToServer = function (t) {
    var e = { appid: c.ALConfig.appId, openid: c.ALConfig.openId, nickName: t.nickName, gender: t.gender, avatarUrl: t.avatarUrl, country: t.country, province: t.province, city: t.city, language: t.language };u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509418], e, function (e) {
      t.complete && t.complete(e);
    });
  }, m.reportPay = function (e) {
    f.ALUtil.LOG(d[509419], e);var t = e.split("|");2 <= t.length && "1" == t[1] && (m.reportCheck.payAmount += parseInt(t[0]));var a = l(l({}, m.publicParam), { report_type: d[480687], typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_PAY_MENT_ENTER, extra_data: e });this.reportDataToMarketNew(a);
  }, m.reportShareState = function (e) {
    var t = e ? "1" : "2",
        a = l(l({}, m.publicParam), { report_type: d[480700], typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_SHARE_SUCCESS, diff_key: t });this.reportDataToMarketNew(a);
  }, m.reportDataToMarket = function (e) {
    e.id = c.ALConfig.appId, e.openid = c.ALConfig.openId, f.ALUtil.LOG(d[509420], e), u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509421], e, function (e) {
      e.isSucc || f.ALUtil.LOG(d[509422], e.reason);
    });
  }, m.reportDataToMarketNew = function (e) {
    var t = e.typeStr.split("_");t.length < 2 ? console.warn(d[509407]) : (e.type = t[0], e.sub_type = t[1], e.project_id = c.ALConfig.appId, e.open_id = c.ALConfig.openId, e.ply = d.ALData.level, e.p_open_id = d.ALData.topInviter, e.gender = d.UserInfoData.Gender, f.ALUtil.LOG(d[509420], e), u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509404], e, function (e) {
      e.isSucc || f.ALUtil.LOG(d[509422], e.reason);
    }));
  }, m.getPublicParam = function () {
    var e = l({}, m.publicParam);return e.project_id = c.ALConfig.appId, e.open_id = c.ALConfig.openId, e.ply = d.ALData.level, e.p_open_id = d.ALData.topInviter, e.gender = d.UserInfoData.Gender, e;
  }, m._initAdsPos = function () {
    if (c.ALConfig.GamePlatform == d.PlatformEnum.WeChat || c.ALConfig.GamePlatform == d.PlatformEnum.QQ || c.ALConfig.GamePlatform == d.PlatformEnum.TouTiao || c.ALConfig.GamePlatform == d.PlatformEnum.Oppo) {
      console.log(d[509423], c.ALConfig.GamePlatform);var e = "",
          t = "";try {
        var a = c.ALConfig.RunEnv.getLaunchOptionsSync();f.ALUtil.LOG(d[509424], a);var n = a.query,
            o = a.referrerInfo && a.referrerInfo.extraData;if (m.publicParam.query_str = f.ALUtil._getInitParams(l({}, n), l({}, o)), f.ALUtil.LOG(d[509425], m.publicParam.query_str), c.ALConfig.GamePlatform != d.PlatformEnum.Oppo) {
          if (d.ALData.opts = a, d.ALData.scene = a.scene, (s = a.query).qz_gdt && (this.qz_gdt = s.qz_gdt ? s.qz_gdt : ""), s.ad_appid && (this.ad_appid = s.ad_appid ? s.ad_appid : ""), s.scene) {
            var r = decodeURIComponent(s.scene).split(",");e = r[1], t = r[2];
          } else if (s.Ads || s.AdsPos || s[d[509426]]) e = s.Ads ? s.Ads : "", t = s.AdsPos ? s.AdsPos : "", s[d[509426]] && f.ALUtil.qqExist() && -1 < (e = s[d[509426]]).indexOf(d[509427]) && 3 < e.length && (t = e.split(d[509427])[1], e = d[509427]);else if (a.referrerInfo && a.referrerInfo.extraData) {
            var i = a.referrerInfo.extraData;e = i.Ads ? i.Ads : "", t = i.AdsPos ? i.AdsPos : "";
          } else s.shareMessageToFriendScene && 1 == s.shareMessageToFriendScene && (e = d[509428], t = s.shareMessageToFriendScene);"" === e && (t = d[509429] == a.scene || d[509430] == a.scene || d[509431] == a.scene || d[509432] == a.scene ? (e = d[509433], a.referrerInfo.appId || "0") : (e = c.ALConfig.GamePlatform, a.scene || "0"));
        } else {
          if (d.ALData.opts = a) {
            if (a && a.query && (a.query.Ads || a.query.AdsPos)) e = a.query.Ads ? a.query.Ads : "", t = a.query.AdsPos ? a.query.AdsPos : "";else if (a && a.referrerInfo && a.referrerInfo.extraData) {
              var p = a.referrerInfo.extraData;e = p.Ads ? p.Ads : "", t = p.AdsPos ? p.AdsPos : "";
            }
          } else e = d[509372], t = "0";"" === e && (a && a.referrerInfo && a.referrerInfo.package ? (e = d[509433], t = a.referrerInfo.package || "0", a.referrerInfo.package && u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509434], { pkgs: a.referrerInfo.package, platform: c.ALConfig.GamePlatform }, function (e) {
            e.isSucc ? e.data && 0 < e.data.length && (m.AdsPos = e.data[0], m.publicParam.ads_pos = e.data[0]) : console.warn(d[509435], e.reason);
          })) : (e = d[509372], t = "0"));
        }
      } catch (e) {
        console.log(d[509436], e);
      }if (this.Ads = e, this.AdsPos = t, m.publicParam.ads = e, m.publicParam.ads_pos = t, 1044 == d.ALData.scene || 1007 == d.ALData.scene || 1036 == d.ALData.scene || 1008 == d.ALData.scene) {
        var s = d.ALData.opts.query;d.ALData.topInviter = s.a_top_inviter || "0", d.ALData.level = s.a_level || 1;
      }
    }
  }, m._initLevelData = function () {
    var e = null;if (1044 == d.ALData.scene || 1007 == d.ALData.scene || 1036 == d.ALData.scene || 1008 == d.ALData.scene) {
      var t = d.ALData.opts.query;e = { appid: c.ALConfig.appId, openid: c.ALConfig.openId, level: t.a_level || "", inviter: t.a_inviter || "", top_inviter: t.a_top_inviter || "" };
    } else e = { appid: c.ALConfig.appId, openid: c.ALConfig.openId };this.qz_gdt ? e.adsinfo = this.Ads + "|" + this.AdsPos + "|" + this.qz_gdt : e.adsinfo = this.Ads + "|" + this.AdsPos, m.ad_appid && (e.ad_appid = m.ad_appid), u.HttpUtil.GET(c.ALConfig.ReportMarketDomain + d[509437], e, function (e) {
      if (e.isSucc) {
        var t = e.data.info;f.ALUtil.LOG(d[509438], e.data), f.ALUtil.LOG(d[509439], t), d.ALData.topInviter = t.top_inviter || "0", d.ALData.inviter = c.ALConfig.openId, d.ALData.level = t.share_level ? parseInt(t.share_level) + 1 : 1, d.ALData.score = t.score ? parseInt(t.score) : 0, i.ALIntercept._execOnShareApp();
      } else f.ALUtil.LOG(d[509440], e.reason);
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
        console.warn(d[509441], e);
      }t && d[509442] !== t || (t = d[480109]);
    }this.reportPrefix = d[509443], this.reportDevice2Sence = e + "|" + t + "|" + c.ALConfig.version + "|" + a + d[509444] + n + "||" + o + "|" + c.ALConfig.appId + "|" + this.Ads + "|" + this.AdsPos + "|", m.publicParam.gamePlatform = c.ALConfig.GamePlatform, m.publicParam.platform = r, m.publicParam.device = e, m.publicParam.channel = t, m.publicParam.version = c.ALConfig.version, m.publicParam.os = a, m.publicParam.language = n, m.publicParam.wx_version = o, m.publicParam.project_id = c.ALConfig.appId, m.publicParam.qz_gdt = this.qz_gdt, m.publicParam.benchmarkLevel = i;
  }, m._getCurrentDate = function () {
    var e = new Date(),
        t = e.getFullYear().toString(),
        a = (e.getMonth() + 1).toString(),
        n = e.getDate().toString();return 1 === a.length && (a = "0" + a), 1 === n.length && (n = "0" + n), t + a + n;
  }, m._getTimeStamp = function () {
    return Math.round(Date.now() / 1e3);
  }, m.publicParam = { gamePlatform: "", qz_gdt: "", platform: "", sdkVersion: c.ALConfig.sdkVersion, report_type: "", typeStr: "", device: "", channel: "", version: "", os: "", language: "", wx_version: "", project_id: "", ads: "", ads_pos: "", ply: "", node: "", open_id: "", type: "", sub_type: "", value: "", extra: "", uuid: "", p_open_id: "", gender: "", video_sence: "", query_str: "", benchmarkLevel: -1, zone_id: "", role_id: "", is_gs: 0 }, m.reportCheck = { appid: "", openid: "", startTime: "", level: "", video_sence: "", video_play: 0, payAmount: 0, gameTime: 0, gameShow: "", sharePic: "", jumpData: "" }, m.CustomNode = [], m.CustomDataCache = [], m.Ads = "", m.AdsPos = "", m.reportPrefix = "", m.reportDevice2Sence = "", m.qz_gdt = "", m.ad_appid = "", m.appPlatform = "", m._inited = !1, m.startTime = 0, m.CusRepLastTime = 0, m.LastCustomNode = -1, m);function m() {}s.ALReport = a, s.REPORT_TYPE_ENUM = { REPORT_TYPE_SHOW: d[509445], REPORT_TYPE_LOGIN: d[509446], REPORT_TYPE_OPEN_ID: d[509447], REPORT_TYPE_AUTH: d[509448], REPORT_TYPE_LIKE_CLICK: d[509449], REPORT_TYPE_LIKE_SHOW: d[509450], REPORT_TYPE_DRAWER_CLICK: d[509451], REPORT_TYPE_DRAWER_SHOW: d[509452], REPORT_TYPE_CLICK_SUCCESS: d[509453], REPORT_TYPE_SHARE_READY: d[509454], REPORT_TYPE_SHARE_SUCCESS: d[509455], REPORT_TYPE_GAME_DURATION: d[509456], REPORT_TYPE_SCENE_CLICK: d[509457], REPORT_TYPE_SCENE_CLICK_SUCCESS: d[509458], REPORT_TYPE_PAY_MENT: d[509459], REPORT_TYPE_PAY_MENT_START: d[509460], REPORT_TYPE_PAY_MENT_ENTER: d[509461], REPORT_TYPE_PAY_MENT_IOS: d[509462], REPORT_TYPE_MORE_SHOW: d[486230], REPORT_TYPE_MORE_CLICK: d[509463], REPORT_TYPE_MORE_CLICK_O: d[509464], REPORT_TYPE_MORE_LONG_CLICK_O: d[509465], REPORT_TYPE_VIDEO_OPEN: d[509466], REPORT_TYPE_VIDEO_WATCH_FAIL: d[509467], REPORT_TYPE_VIDEO_WATCH_NORMAL: d[509468], REPORT_TYPE_GAME_BOX_SHOW: d[509469], REPORT_TYPE_GAME_BOX_CLICK: d[509470], REPORT_TYPE_GAME_BOX_BANNER_CLICK: d[509471], REPORT_TYPE_VIDEO_BTN_SHOW: d[509472], REPORT_TYPE_VIDEO_CLICK: d[509473], REPORT_TYPE_SHARE_BTN_SHOW: d[509474], REPORT_TYPE_SHARE_CLICK: d[509475], REPORT_TYPE_TIME: d[509476], REPORT_TYPE_QQ_SUBSCRIBE: d[509477], REPORT_TYPE_QQ_UNSUBSCRIBE: d[509478] };
}, function (e, t, a) {
  "use strict";

  var i = this && this.__assign || function () {
    return (i = Object.assign || function (e) {
      for (var t, a = 1, n = arguments.length; a < n; a++) for (var o in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);return e;
    }).apply(this, arguments);
  };Object.defineProperty(t, d[481246], { value: !0 });var c = a(1),
      u = a(2),
      f = a(3),
      n = a(6),
      p = a(0),
      o = (s.EmptyFn = function () {
    u.ALUtil.LOG(d[509479]);
  }, s.init = function () {
    this._inited || (this._inited = !0, u.ALUtil.LOG(d[509480]), u.ALUtil.runEnvNotExist() || (this._pay(), this._shareApp(), this._execShowHide(), this._onShareApp(), this._rewardedVideoAd(), this._qqSubscribe(), this._wxSubscribe(), this._getUserProfile(), u.ALUtil.LOG(d[509481])));
  }, s._execShowHide = function () {
    s.TimeShow = Date.now(), s.Params = i(i({}, f.ALReport.publicParam), { report_type: d[481542], typeStr: f.REPORT_TYPE_ENUM.REPORT_TYPE_GAME_DURATION, value: "" }), p.ALConfig.RunEnv.onShow(function (e) {
      s.IsOnShow = !0, s.TimeShow = Date.now(), s.FirstOnShow ? s.FirstOnShow = !1 : s.OnHideAllTime += s.TimeShow - s.OnHideTimestamp, n.ALSDK.paycallback(e), n.ALSDK.handleNaviTime(e), u.ALUtil.LOG(d[509482], e);
    }), p.ALConfig.RunEnv.onHide(function (e) {
      s.IsOnShow = !1, s.OnHideTimestamp = Date.now();var t = Math.ceil((Date.now() - s.TimeShow) / 1e3);0 < t && (f.ALReport.reportCheck.gameTime += t, s.Params.value = t.toString(), f.ALReport.reportDataToMarketNew(s.Params)), u.ALUtil.LOG(d[509483]);
    }), p.ALConfig.GamePlatform != c.PlatformEnum.WeChat && p.ALConfig.GamePlatform != c.PlatformEnum.QQ || (p.ALConfig.RunEnv.getNetworkType({ success: function (e) {
        u.ALUtil.LOG(d[509484], e), s.NetworkType = e.networkType;
      } }), p.ALConfig.RunEnv.onNetworkStatusChange(function (e) {
      u.ALUtil.LOG(d[509485], e), s.NetworkType = e.networkType;
    }));
  }, s._qqSubscribe = function () {
    if (!u.ALUtil.qqNotExist() && p.ALConfig.RunEnv.subscribeAppMsg) {
      var t = p.ALConfig.RunEnv.subscribeAppMsg;Object.defineProperty(p.ALConfig.RunEnv, d[509486], { configurable: !0, enumerable: !0, writable: !0, value: function () {
          var e = arguments[0] || {},
              n = e.success || null,
              o = e.subscribe,
              r = e.tmplIds || null;return e.success = function (e) {
            if (u.ALUtil.LOG(d[509487], e), r) {
              for (var t = 0; t < r.length; t++) if (e[r[t]] && d[480712] == e[r[t]]) {
                var a = i(i({}, f.ALReport.publicParam), { report_type: d[509488], typeStr: f.REPORT_TYPE_ENUM.REPORT_TYPE_QQ_SUBSCRIBE, extra: r[t] });f.ALReport.reportDataToMarketNew(a);
              }
            } else o ? f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_QQ_SUBSCRIBE) : f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_QQ_UNSUBSCRIBE);n && n(e);
          }, t.apply(this, arguments);
        } }), s._qqSubscribe = s.EmptyFn;
    }
  }, s._wxSubscribe = function () {
    if (!(u.ALUtil.wxNotExist() || u.ALUtil.wxExist() && !p.ALConfig.RunEnv.requestSubscribeMessage)) {
      var t = p.ALConfig.RunEnv.requestSubscribeMessage;Object.defineProperty(p.ALConfig.RunEnv, d[509489], { configurable: !0, enumerable: !0, writable: !0, value: function () {
          var e = arguments[0] || {},
              n = e.success || null,
              o = e.tmplIds || [];return e.success = function (e) {
            u.ALUtil.LOG(d[509490], e);for (var t = 0; t < o.length; t++) if (e[o[t]] && d[480712] == e[o[t]]) {
              var a = i(i({}, f.ALReport.publicParam), { report_type: d[509488], typeStr: f.REPORT_TYPE_ENUM.REPORT_TYPE_QQ_SUBSCRIBE, extra: o[t] });f.ALReport.reportDataToMarketNew(a);
            }n && n(e);
          }, t.apply(this, arguments);
        } }), s._wxSubscribe = s.EmptyFn;
    }
  }, s._rewardedVideoAd = function () {
    if (!u.ALUtil.runEnvNotExist() && p.ALConfig.RunEnv.createRewardedVideoAd) {
      console.log(d[509491]);var o = p.ALConfig.RunEnv.createRewardedVideoAd;Object.defineProperty(p.ALConfig.RunEnv, d[509492], { configurable: !0, enumerable: !0, writable: !0, value: function () {
          var e = o.apply(this, arguments),
              t = arguments[0] || {};if (s.VideoId = t.adUnitId, p.ALConfig.GamePlatform === c.PlatformEnum.Vivo && (s.VideoId = t.posId), e.isIntercept) return e;e.isIntercept = !0;var a = e.show;Object.defineProperty(e, d[481931], { configurable: !0, enumerable: !0, writable: !0, value: function () {
              return u.ALUtil.LOG(d[509493]), f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_OPEN, s.VideoId), a.apply(this, arguments);
            } }), e.onClose(s.VideoClose);var n = e.offClose;return Object.defineProperty(e, d[509494], { configurable: !0, enumerable: !0, writable: !0, value: function () {
              u.ALUtil.LOG(d[509495]), n.apply(this, arguments), 0 == arguments.length && this.onClose(s.VideoClose);
            } }), e;
        } }), s._rewardedVideoAd = s.EmptyFn;
    }
  }, s.VideoClose = function (e) {
    u.ALUtil.LOG(d[509496], e), void 0 === e || e && e.isEnded ? f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_WATCH_NORMAL, s.VideoId) : f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_WATCH_FAIL, s.VideoId);
  }, s._pay = function () {
    if (p.ALConfig.GamePlatform == c.PlatformEnum.WeChat || p.ALConfig.GamePlatform == c.PlatformEnum.QQ || p.ALConfig.GamePlatform == c.PlatformEnum.TouTiao) {
      var e = d[509497],
          r = p.ALConfig.RunEnv.requestMidasPayment;u.ALUtil.ttExist() && (e = d[509498], r = p.ALConfig.RunEnv.requestGamePayment), Object.defineProperty(p.ALConfig.RunEnv, e, { configurable: !0, enumerable: !0, writable: !0, value: function () {
          f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_PAY_MENT_START);var e = arguments[0] || {},
              t = "0";t = u.ALUtil.qqExist() ? e.starCurrency : e.buyQuantity;var a = null,
              n = e.success || null;e.success = function (e) {
            a && (u.ALUtil.LOG(d[509499]), clearInterval(a)), u.ALUtil.LOG(d[509500], e), t += "|1", f.ALReport.reportPay(t), n && n(e);
          };var o = e.fail || null;return e.fail = function (e) {
            a && (u.ALUtil.LOG(d[509499]), clearInterval(a)), u.ALUtil.LOG(d[509501], e), t += "|0", f.ALReport.reportPay(t), o && o(e);
          }, p.ALConfig.GamePlatform == c.PlatformEnum.WeChat && p.ALConfig.AutoPayCb && (a = setInterval(function () {
            a && (u.ALUtil.LOG(d[509499]), clearInterval(a)), n && (u.ALUtil.LOG(d[509502]), n({ sdkPaySuc: !0, errMsg: d[509503] }));
          }, 13e3)), r.apply(this, arguments);
        } }), s._pay = s.EmptyFn;
    }
  }, s._execOnShareApp = function () {
    s.InfoGot = !0, s.ShareParamFunc && (p.ALConfig.RunEnv.offShareAppMessage(s.ShareParamFunc), p.ALConfig.RunEnv.onShareAppMessage(s.ShareParamFunc));
  }, s._shareApp = function () {
    if (p.ALConfig.GamePlatform == c.PlatformEnum.WeChat || p.ALConfig.GamePlatform == c.PlatformEnum.QQ || p.ALConfig.GamePlatform == c.PlatformEnum.TouTiao) {
      var t = p.ALConfig.RunEnv.shareAppMessage;Object.defineProperty(p.ALConfig.RunEnv, d[509504], { configurable: !0, enumerable: !0, writable: !0, value: function () {
          var e = arguments[0] || {};return s._handleShareParam(e), e.query = e.query + d[509505] + c.ALData.inviter + d[509506] + c.ALData.level + d[509507] + c.ALData.topInviter, u.ALUtil.LOG(d[509508], e.query), t.apply(this, arguments);
        } }), s._shareApp = s.EmptyFn;
    }
  }, s._onShareApp = function () {
    if (p.ALConfig.GamePlatform == c.PlatformEnum.WeChat || p.ALConfig.GamePlatform == c.PlatformEnum.QQ || p.ALConfig.GamePlatform == c.PlatformEnum.TouTiao) {
      var e = p.ALConfig.RunEnv.onShareAppMessage;Object.defineProperty(p.ALConfig.RunEnv, d[509509], { configurable: !0, enumerable: !0, writable: !0, value: function () {
          u.ALUtil.LOG(d[509510]);var t = arguments[0];return t ? s.InfoGot ? (u.ALUtil.LOG(d[509511]), arguments[0] = function () {
            var e = t();return s._handleShareParam(e, !1), e.query = e.query + d[509505] + c.ALData.inviter + d[509506] + c.ALData.level + d[509507] + c.ALData.topInviter, u.ALUtil.LOG(d[509512], e.query), u.ALUtil.ttExist() ? { title: e.title, imageUrl: e.imageUrl, templateId: e.templateId, query: e.query } : { title: e.title, imageUrl: e.imageUrl, imageUrlId: e.imageUrlId, query: e.query };
          }) : (s.ShareParamFunc = t, u.ALUtil.LOG(d[509513])) : u.ALUtil.LOG(d[509514]), e.apply(this, arguments);
        } });var t = p.ALConfig.RunEnv.offShareAppMessage;Object.defineProperty(p.ALConfig.RunEnv, d[509515], { configurable: !0, enumerable: !0, writable: !0, value: function () {
          t.apply(this, arguments), u.ALUtil.LOG(d[509516]);
        } }), s._onShareApp = s.EmptyFn;
    }
  }, s._handleShareParam = function (e, t) {
    void 0 === t && (t = !0);var a = e.query || "",
        n = e.imageUrl,
        o = e.imageUrlId,
        r = e.templateId;void 0 !== e.sceneid && AladinSDK.initShareData(e.sceneid);var i = u.ALUtil._parseQueryString(a);u.ALUtil.LOG(d[509517], i), c.ALData.shareScene = i.shareScene || 0;var p = d[481248];if (!i.Ads) {
      if (c.ALData.curShareData && t) {
        var s = c.ALData.curShareData;e.imageUrl = s.url, e.title = s.desc, p = s.shareid;
      } else if (o) p = o;else if (r) p = r;else if (n) {
        var l = u.ALUtil.getUrlFileName(n);u.ALUtil.LOG(d[509518], n, l), p = 0 !== n.indexOf(d[509519]) && -1 === l.indexOf(".") ? d[509520] : l.replace(".", "_");
      }var d = d[509521] + p;u.ALUtil.LOG(d[509522], d), e.query = a + d;
    }t && (f.ALReport.reportCheck.sharePic = p, f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_SHARE_READY, p));
  }, s._getUserProfile = function () {
    if (p.ALConfig.GamePlatform == c.PlatformEnum.WeChat) try {
      var e = p.ALConfig.RunEnv.getSystemInfoSync().SDKVersion;if (u.ALUtil.convertVersionStringToNumber(e) < u.ALUtil.convertVersionStringToNumber(d[509523])) return void console.log(d[509524] + e);var t = p.ALConfig.RunEnv.getUserProfile;if (!t) return void console.error(d[509525]);Object.defineProperty(p.ALConfig.RunEnv, d[509526], { configurable: !0, enumerable: !0, writable: !0, value: function () {
          u.ALUtil.LOG(d[509527]);var e = arguments[0],
              n = e.success;return e.success = function (e) {
            var t = e.userInfo,
                a = {};c.UserInfoData.NickName = a.nickName = t.nickName || "", c.UserInfoData.Gender = a.gender = void 0 !== t.gender ? e.userInfo.gender : 0, c.UserInfoData.AvatarUrl = a.avatarUrl = t.avatarUrl || "", c.UserInfoData.Country = a.country = t.country || "", c.UserInfoData.Province = a.province = t.province || "", c.UserInfoData.City = a.city = t.city || "", c.UserInfoData.Language = a.language = t.language || "", f.ALReport.reportDataToServer(a), n && n(e);
          }, t.apply(this, arguments);
        } });
    } catch (e) {
      console.error(d[509528]);
    }
  }, s._inited = !1, s.IsOnShow = !0, s.NetworkType = "", s.TimeShow = null, s.Params = null, s.FirstOnShow = !0, s.OnHideTimestamp = 0, s.OnHideAllTime = 0, s.VideoId = null, s.InfoGot = !1, s.ShareParamFunc = null, s);function s() {}t.ALIntercept = o;
}, function (e, o, t) {
  "use strict";

  Object.defineProperty(o, d[481246], { value: !0 });var s = t(2),
      l = t(0),
      d = t(1);o.METHOD_GET = d[480728], o.METHOD_POST = d[480601];var a = (n.GET = function (e, t, a, n) {
    this._request(e, o.METHOD_GET, t, a, n);
  }, n.POST = function (e, t, a, n) {
    this._request(e, o.METHOD_POST, t, a, n);
  }, n._request = function (e, t, a, n, o) {
    if (s.ALUtil.LOG(d[509529], a), a.event_time = new Date().getTime(), l.ALConfig.GamePlatform == d.PlatformEnum.WeChat || l.ALConfig.GamePlatform == d.PlatformEnum.QQ || l.ALConfig.GamePlatform == d.PlatformEnum.TouTiao || l.ALConfig.GamePlatform == d.PlatformEnum.Vivo) {
      d[480728] == t && a && (e += encodeURI("?" + this.objParam2PostString(a))), s.ALUtil.LOG(d[509530], e);var r = { url: e, method: t, success: function (e) {
          s.ALUtil.LOG(d[509531], e);try {
            var t = e.data;return t && 0 !== t.code && 0 !== t.ret ? (s.ALUtil.LOG(d[509532]), void n({ isSucc: !1, reason: t.msg })) : void n({ isSucc: !0, data: t ? t.data : null });
          } catch (e) {
            return s.ALUtil.LOG(d[509533], e), void n({ isSucc: !1, reason: d[509534] });
          }
        }, fail: function (e) {
          s.ALUtil.LOG(d[509535], e), n({ isSucc: !1, reason: d[509536] });
        } };this.Authorization ? r.header = { "content-type": d[480737], Authorization: this.Authorization } : r.header = { "content-type": d[480737] }, o && o[d[509537]] && d[480737] != o[d[509537]] && (r.header[d[509537]] = o[d[509537]]), a && (r.data = a), l.ALConfig.RunEnv.request(r);
    } else {
      var i = new XMLHttpRequest(),
          p = null;d[480728] == t && a && (e += encodeURI("?" + this.objParam2PostString(a))), i.open(t, e, !0), o && o[d[509537]] && d[480737] != o[d[509537]] ? (i.setRequestHeader(d[509537], o[d[509537]]), a && (p = a)) : (i.setRequestHeader(d[509537], d[480737]), p = null == a ? null : encodeURI(this.objParam2PostString(a))), this.Authorization && i.setRequestHeader(d[509538], this.Authorization), i.onreadystatechange = function () {
        if (4 === i.readyState && 199 < i.status && i.status < 400) {
          s.ALUtil.LOG(d[509531], i.responseText);try {
            var e = i.responseText ? JSON.parse(i.responseText) : null;return e && 0 !== e.code && 0 !== e.ret ? (s.ALUtil.LOG(d[509532]), void n({ isSucc: !1, reason: e.msg })) : void n({ isSucc: !0, data: e ? e.data : null });
          } catch (e) {
            return s.ALUtil.LOG(d[509533], e), void n({ isSucc: !1, reason: d[509534] });
          }
        }
      }, i.onerror = function (e) {
        s.ALUtil.LOG(d[509539], e), n({ isSucc: !1, reason: d[509536] });
      }, i.ontimeout = function (e) {
        s.ALUtil.LOG(d[509540], e), n({ isSucc: !1, reason: d[509541] });
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
  };Object.defineProperty(t, d[481246], { value: !0 });var y = a(0),
      C = a(2),
      f = a(3),
      m = a(1),
      h = a(5),
      n = (I.init = function (e, t, a, n) {
    this._inited || (this._inited = !0, "" == e && console.warn(d[509542]), y.ALConfig.appId = e, y.ALConfig.version = t, f.ALReport.reportCheck.appid = e, y.ALConfig.GamePlatform == m.PlatformEnum.WeChat && h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[509543], { appid: y.ALConfig.appId }, function (e) {
      e.isSucc ? (C.ALUtil.LOG(d[509544], e.data), m.ALData.shareData = e.data) : C.ALUtil.LOG(d[509545], e.reason);
    }));
  }, I.toMiniProgram = function (e, t, a, n, o, r, i) {
    var p = C.ALUtil.parseNavigateParam(e),
        s = e[14] || e[4],
        l = e[11] || "",
        d = P(P({}, f.ALReport.publicParam), { target_appid: p.target_appid, report_type: d[488873], typeStr: t, diff_key: s, extra_data: a, scene: n }),
        c = P(P({}, f.ALReport.publicParam), { target_appid: p.target_appid, report_type: d[509546], typeStr: f.REPORT_TYPE_ENUM.REPORT_TYPE_SCENE_CLICK_SUCCESS, extra_data: a, scene: n });if (C.ALUtil.LOG(d[509547], e), C.ALUtil.LOG(d[509548], p.appId), C.ALUtil.LOG(d[509549], p.path), C.ALUtil.LOG(d[509550], p.extraData), C.ALUtil.LOG(d[509551], l), C.ALUtil.LOG(d[509552], y.ALConfig.envVersion), !C.ALUtil.runEnvNotExist()) {
      var u = e[6] || null;f.ALReport.reportDataToMarketNew(d), !u || y.ALConfig.RunEnv.navigateToMiniProgram || y.ALConfig.RunEnv.navigateToMiniGame ? y.ALConfig.GamePlatform == m.PlatformEnum.WeChat ? y.ALConfig.RunEnv.navigateToMiniProgram({ appId: p.appId, path: p.path, extraData: p.extraData, envVersion: y.ALConfig.envVersion, success: function (e) {
          console.log(d[509553], Date.now(), p.appId), I.NavigeteTime = Date.now(), I.NavigeteAppid = p.appId, f.ALReport.reportCheck.jumpData = c, f.ALReport.reportDataToMarketNew(c), o && o(e);
        }, fail: function (e) {
          C.ALUtil.LOG(d[509554], e), e && e.errMsg && -1 === e.errMsg.indexOf(d[480575]) && u && I._preview(u, c), r && r(e);
        }, complete: function (e) {
          i && i(e);
        } }) : y.ALConfig.GamePlatform == m.PlatformEnum.Oppo && (l || console.warn(d[509555]), y.ALConfig.RunEnv.navigateToMiniGame({ pkgName: l, path: p.path, extraData: p.extraData, success: function (e) {
          console.log(d[509556], Date.now(), p.appId), I.NavigeteTime = Date.now(), I.NavigeteAppid = p.appId, f.ALReport.reportCheck.jumpData = c, f.ALReport.reportDataToMarketNew(c), o && o(e);
        }, fail: function (e) {
          C.ALUtil.LOG(d[509557], e), e && e.errMsg && -1 === e.errMsg.indexOf(d[480575]) && u && I._preview(u, c), r && r(e);
        }, complete: function (e) {
          i && i(e);
        } })) : I._preview(u, c);
    }
  }, I.handleNaviTime = function (e) {
    if (C.ALUtil.LOG(d[509558], e, I.NavigeteAppid), e && 1038 == e.scene && I.NavigeteAppid && I.NavigeteTime) {
      var t = Math.ceil((Date.now() - I.NavigeteTime) / 1e3);if (C.ALUtil.LOG(d[509559], t), 15 <= t) {
        C.ALUtil.LOG(d[509560], I.NavigeteAppid);var a = { appid: y.ALConfig.appId, openid: y.ALConfig.openId, targetAppid: I.NavigeteAppid };return void h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[509561], a, function (e) {
          e.isSucc || console.warn(d[509562], e.reason);
        });
      }
    }I.NavigeteAppid = "", I.NavigeteTime = null;
  }, I._preview = function (e, t) {
    y.ALConfig.RunEnv.previewImage({ urls: [e], success: function () {
        C.ALUtil.LOG(d[509563]), f.ALReport.reportDataToMarketNew(t);
      }, fail: function (e) {
        console.warn(d[509564], e);
      } });
  }, I.requestModuleData = function (a, n, e, t) {
    void 0 === e && (e = 400), void 0 === t && (t = "");var o = { appid: y.ALConfig.appId, module: a, openid: y.ALConfig.openId, size: e, nickName: m.UserInfoData.NickName, avatarUrl: m.UserInfoData.AvatarUrl, country: m.UserInfoData.Country, gender: m.UserInfoData.Gender, language: m.UserInfoData.Language, province: m.UserInfoData.Province, scene: t };d[509565] === a ? m.ALData.iconData : m.ALData.moreData, h.HttpUtil.GET(y.ALConfig.ReportMarketDomain + d[509566], o, function (e) {
      if (e.isSucc) {
        var t = I.handleHttpData(e);d[509565] === a ? m.ALData.iconData = t : d[509567] === a && (m.ALData.moreData = t), n(t);
      } else console.warn(d[509568], e.reason, a);
    });
  }, I.handleHttpData = function (e) {
    var t = e.data.values || [],
        a = e.data.base;if (a && 0 < t.length) for (var n = 0, o = t.length; n < o; n++) {
      var r = t[n];r[4] = a + r[4];
    }return t;
  }, I.reportFlowShow = function (e) {
    var t = P(P({}, f.ALReport.getPublicParam()), { appid: y.ALConfig.appId, openid: y.ALConfig.openId, gamelist: e });h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[509569], t, function (e) {
      e.isSucc || C.ALUtil.LOG(d[509570], e.reason);
    });
  }, I.paycheck = function (e, t) {
    var a = { game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, limit: e },
        n = { switch: 0, msg: "" };return d[480109] == f.ALReport.publicParam.platform ? (n.switch = 1, void t(n)) : "" == y.ALConfig.appId || "" == y.ALConfig.openId ? (console.warn(d[509571]), n.msg = d[509572], void t(n)) : void h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[509573], a, function (e) {
      return e.isSucc ? n.switch = 1 : n.msg = e.reason, void t(n);
    });
  }, I.pay = function (e, t, p, s, l, d, c, a, n, u, f, m, o) {
    I.oriPayParam = { appid: e, openid: t, amount: p, pid: s, zoneId: l, orderTitle: d, orderDesc: c, imgUrl: a, limit: n, params: u, cb: f, env: m, extraParams: o }, y.ALConfig.appId = e, y.ALConfig.openId = t;var _ = o.zone_id ? o.zone_id : 0,
        A = o.role_id ? o.role_id : 0,
        L = o.model_id ? o.model_id : 0,
        g = o.package_id ? o.package_id : "",
        r = { appid: y.ALConfig.appId, openid: y.ALConfig.openId, price: p, title: d, desc: c, pid: s, params: u, img: a, zoneid: l, limit: n, zone_id: _, role_id: A, model_id: L, package_id: g };I.invalidAppid && 0 == I.invalidAppid.indexOf("wx") && (r.invalid_appid = I.invalidAppid, I.invalidAppid = "");var v = { ret: 0, msg: "", pid: s, payMethod: 0, amount: p, params: u, payCount: 1, qrCode: "" };return "" == y.ALConfig.appId || "" == y.ALConfig.openId ? (console.error(d[509571]), v.msg = d[509572], void f(v)) : 1 == I.PayStatus ? (v.msg = d[509574], void f(v)) : (I.PayStatus = 1, I.RetCallback = f, void h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[509575], r, function (e) {
      if (!e.isSucc) return v.msg = d[509576] + e.reason, I.PayMethod = 0, I.PayStatus = 0, void f(v);console.log(d[509577], P({}, e.data)), I.PayMethod = e.data.pay_method, v.payMethod = e.data.pay_method, I.PayId = e.data.pay_id, I.RetObj = v;var t = e.data.pre_img,
          o = e.data.offer_id,
          a = e.data.appid,
          r = e.data.buy_quantity,
          n = e.data.qr_code,
          i = e.data.order_id;switch (i && (m = e.data.env, I.oriPayParam.env = e.data.env), e.data.pay_method) {case 1:
          y.ALConfig.RunEnv.navigateToMiniProgram({ appId: a, path: d[509385], envVersion: y.ALConfig.envVersion, extraData: { appid: y.ALConfig.appId, openid: y.ALConfig.openId, orderid: I.PayId, amount: p, params: u, orderTitle: d, orderDesc: c, a_pid: s }, success: function (e) {
              C.ALUtil.LOG(d[509578], e), I.PayStatus = 2;
            }, fail: function (e) {
              C.ALUtil.LOG(d[509579], e), v.msg = d[509580] + e.errMsg, I.PayMethod = 0, I.PayStatus = 0, f(v);
            }, complete: function (e) {
              C.ALUtil.LOG(d[509581], e);
            } });break;case 2:
          y.ALConfig.RunEnv.openCustomerServiceConversation({ sessionFrom: d[509582] + I.PayId, showMessageCard: !0, sendMessageTitle: d[497333], sendMessagePath: d[509583], sendMessageImg: t, success: function (e) {
              C.ALUtil.LOG(d[509584], e), I.PayStatus = 2;
            }, fail: function (e) {
              C.ALUtil.LOG(d[509585], e), v.msg = d[509586] + e.errMsg, I.PayMethod = 0, I.PayStatus = 0, f(v);
            }, complete: function (e) {
              C.ALUtil.LOG(d[509587], e);
            } });break;case 3:
          y.ALConfig.RunEnv.requestMidasPayment({ mode: d[509588], env: m, offerId: o, currencyType: d[509589], platform: d[480109], buyQuantity: r, zoneId: l, success: function (e) {
              if (C.ALUtil.LOG(d[509590], e), v.ret = 1, v.msg = d[509590], e && e.sdkPaySuc ? v.ret = 2 : I.reportMidasPayStatus({ game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, order_id: i, status: d[480424], offerId: o, buyQuantity: r, zoneId: l }), i) {
                var t = { game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, order_id: i, sdk_pay: 0, tryNum: 0, zone_id: _, role_id: A, model_id: L, package_id: g };e && e.sdkPaySuc && (t.sdk_pay = 1);var a = new Date().getTime() + 6e5,
                    n = function () {
                  t.tryNum++, y.ALConfig.RunEnv.request({ url: y.ALConfig.ReportMarketDomain + d[509591], method: d[480601], data: t, timeout: 15e3, header: { "content-type": d[480737] }, success: function (e) {
                      return e && e.data && 200 == e.statusCode ? (0 == e.data.ret ? C.ALUtil.LOG(d[509592], e) : (v.msg = d[509593] + e.data.msg, v.ret = 0), void f(v)) : (C.ALUtil.LOG(d[509594], e), a > new Date().getTime() ? void n() : (v.msg = d[509595], v.ret = 0, void f(v)));
                    }, fail: function (e) {
                      if (C.ALUtil.LOG(d[509596], e), !(a > new Date().getTime())) return v.msg = d[509595], v.ret = 0, void f(v);n();
                    } });
                };n();
              } else f(v);
            }, fail: function (e) {
              C.ALUtil.LOG(d[509597], e, m, o, r, l), v.msg = d[509593] + e.errMsg, v.ret = 0, I.reportMidasPayStatus({ game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, order_id: i, status: d[506365], offerId: o, buyQuantity: r, zoneId: l }), f(v);
            }, complete: function (e) {
              I.PayMethod = 0, I.PayStatus = 0, I.reportMidasPayStatus({ game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, order_id: i, status: d[487397], offerId: o, buyQuantity: r, zoneId: l }), C.ALUtil.LOG(d[509598], e);
            } });break;case 4:
          return n ? (v.qrCode = n, v.ret = 1, v.msg = d[509599]) : (v.ret = 0, v.msg = d[509600]), I.PayStatus = 0, I.PayMethod = 0, void f(v);default:
          return v.msg = d[509601], void f(v);}
    }));
  }, I.reportMidasPayStatus = function (t) {
    h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[509602], t, function (e) {
      C.ALUtil.LOG(d[509603], t, e);
    });
  }, I.paycallback = function (e) {
    if (C.ALUtil.LOG(d[480694], I.PayMethod, I.PayStatus, I.PayId, e), e && e.referrerInfo && e.referrerInfo.extraData && 1 == I.PayMethod && 2 == I.PayStatus) return e.referrerInfo.extraData.aladinPayStatus ? (I.RetObj.ret = 1, I.RetObj.msg = d[509604], C.ALUtil.LOG(d[509604]), I.RetCallback(I.RetObj), I.PayMethod = 0, void (I.PayStatus = 0)) : (I.RetObj.ret = 0, I.RetObj.msg = d[509605], C.ALUtil.LOG(d[509605]), I.PayMethod = 0, I.PayStatus = 0, void (e.referrerInfo && e.referrerInfo.extraData && e.referrerInfo.extraData.mchLimit && e.referrerInfo.extraData.pay_appid ? (I.invalidAppid = e.referrerInfo.extraData.pay_appid, I.pay(I.oriPayParam.appid, I.oriPayParam.openid, I.oriPayParam.amount, I.oriPayParam.pid, I.oriPayParam.zoneId, I.oriPayParam.orderTitle, I.oriPayParam.orderDesc, I.oriPayParam.imgUrl, I.oriPayParam.limit, I.oriPayParam.params, I.oriPayParam.cb, I.oriPayParam.env, I.oriPayParam.extraParams)) : I.RetCallback(I.RetObj)));if (2 == I.PayMethod && 2 == I.PayStatus) return I.RetObj.ret = 1, I.RetObj.msg = d[509606], C.ALUtil.LOG(d[509606]), I.RetCallback(I.RetObj), I.PayMethod = 0, void (I.PayStatus = 0);if (y.ALConfig.GamePlatform === m.PlatformEnum.QQ && 0 < I.QQPayCbQueue.length) {
      for (var t = function (t) {
        var a = I.QQPayCbQueue[t],
            n = new Date().getTime() + 5e3,
            o = function () {
          h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[509607], { id: a.order_id }, function (e) {
            C.ALUtil.LOG(d[509608], t, new Date().getTime(), P({}, e)), e.isSucc ? (C.ALUtil.LOG(d[509606], a.order_id), a.ret_obj.ret = 1, a.ret_obj.msg = d[509609], a.cb(a.ret_obj)) : n > new Date().getTime() ? o() : (C.ALUtil.LOG(d[509610], e.reason, a.order_id), a.ret_obj.ret = 0, a.ret_obj.msg = d[509611] + e.reason, a.cb(a.ret_obj));
          });
        };o();
      }, a = 0; a < I.QQPayCbQueue.length; a++) t(a);I.QQPayCbQueue = [];
    }
  }, I.payinit = function () {
    I.RetObj = null, I.RetCallback = null, I.PayMethod = 0, I.PayStatus = 0;
  }, I.qqpay = function (e, t, a, n, o, r, i, p, s, l, d, c, u, f) {
    var m = { ret: 0, msg: "", params: i, starCurrency: 0, prepayId: "" },
        _ = { appid: e, openid: t, amt: a, goodid: n, good_num: o, params: i, limit: p, pid: s, title: l, zone_id: d, role_id: c, model_id: u, package_id: f };C.ALUtil.LOG(d[509612], _), h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[509613], _, function (e) {
      if (!e.isSucc) return m.msg = d[509614] + e.reason, void r(m);C.ALUtil.LOG(d[509615], P({}, e.data));var t = e.data.pay_method;switch (t) {case 7:
          var a = e.data.prepay_id,
              n = e.data.starCurrency;if ("" == a || !C.ALUtil.isInteger(n) || n < 1) return m.msg = d[509616] + a + ":" + n, void r(m);m.starCurrency = n, m.prepayId = a, y.ALConfig.RunEnv.requestMidasPayment({ prepayId: a, starCurrency: n, setEnv: 0, success: function (e) {
              C.ALUtil.LOG(d[509617], e), m.ret = 1, r(m);
            }, fail: function (e) {
              C.ALUtil.LOG(d[509618], e), m.msg = d[509619] + e.errMsg, r(m);
            }, complete: function (e) {
              C.ALUtil.LOG(d[509620], e);
            } });break;case 8:
          if (a = e.data.prepay_id, m.prepayId = a, I.QQPayCbQueue.push({ pay_method: 8, cb: r, order_id: e.data.order_id, ret_obj: m }), "" == a) return m.msg = d[509616] + a, void r(m);var o = y.ALConfig.QQH5PayUrl + d[509621] + a;y.ALConfig.RunEnv.openUrl({ url: o, success: function (e) {
              C.ALUtil.LOG(d[509622], o, e);
            }, fail: function (e) {
              C.ALUtil.LOG(d[509623], o, e), m.msg = d[509624], r(m);
            }, complete: function (e) {
              C.ALUtil.LOG(d[509625], o, e);
            } });break;default:
          return m.msg = d[509626] + t, void r(m);}
    }, { "content-type": d[480602] });
  }, I._inited = !1, I.NavigeteTime = null, I.NavigeteAppid = "", I.RetObj = null, I.RetCallback = null, I.PayMethod = 0, I.PayStatus = 0, I.PayId = 0, I.oriPayParam = null, I.invalidAppid = "", I.QQPayCbQueue = [], I);function I() {}t.ALSDK = n, t.SDK_MODULE_LIKE = d[509565], t.SDK_MODULE_ICONS_CLICK = d[509627], t.SDK_MODULE_BANNER_CLICK = d[509628];
}, function (e, t, a) {
  "use strict";

  var r = this && this.__assign || function () {
    return (r = Object.assign || function (e) {
      for (var t, a = 1, n = arguments.length; a < n; a++) for (var o in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);return e;
    }).apply(this, arguments);
  };Object.defineProperty(t, d[481246], { value: !0 });var f = a(6),
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
      _.ALData.appIdListStr = e, t(_.ALData.appIdListStr), l.ALUtil.LOG(d[509629], e);
    }) : console.warn(d[509630]);
  }, i.init = function (e, t, a, n) {
    f.ALSDK.init(l.ALUtil.addAppidPrefix(e), t, a, n);
  }, i.login = function (r) {
    var i = { code: -1, msg: "", openid: "", token: "" };if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.QQ) {
      var p = 0,
          t = function () {
        p += 1, m.ALConfig.RunEnv.login({ success: function (e) {
            p = 0, l.ALUtil.LOG(d[509631], e.code);var t = _.ALData.opts.query,
                a = { code: e.code, appid: m.ALConfig.appId, codetype: m.ALConfig.GamePlatform, ads: s.ALReport.Ads, ads_pos: s.ALReport.AdsPos, share_level: t.a_level || "", inviter: t.a_inviter || "", top_inviter: t.a_top_inviter || "", ad_appid: t.ad_appid ? t.ad_appid : "", query: JSON.stringify(t), model: s.ALReport.publicParam.channel },
                n = 0,
                o = function () {
              n += 1, d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[509632], a, function (e) {
                e.isSucc ? (n = 0, l.ALUtil.LOG(d[509633], e), m.ALConfig.token = e.data.token, _.UserInfoData.Openid = m.ALConfig.openId = e.data.openid, _.UserInfoData.NewPlayer = e.data.is_new, _.UserInfoData.Gender = e.data.gender || "", _.UserInfoData.NickName = e.data.nickName || "", _.UserInfoData.SessionKey = e.data.session_key || "", _.UserInfoData.ReportOpenid = e.data.is_reported_openid, m.ALConfig.appId = e.data.appid, i.code = 0, i.openid = e.data.openid, i.token = e.data.token, r && r(i)) : n < 6 ? o() : (l.ALUtil.LOG(d[509634], e.reason), i.msg = e.reason, r && r(i));
              });
            };o();
          }, fail: function (e) {
            p <= 6 ? t() : (i.msg = e, r && r(i));
          } });
      };t();
    } else console.warn(d[509635]), i.msg = d[509636], r && r(i);
  }, i.getHttpData = function (t, a, n) {
    if ("" != m.ALConfig.appId) {
      var o = { ret: 0, data: [] };d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + t, r(r({}, a), { appid: m.ALConfig.appId, openid: m.ALConfig.openId }), function (e) {
        e.isSucc ? e.data && (o.data = e.data) : (console.warn(d[509637], t, a, e.reason), o.ret = -1), n(o);
      });
    } else console.warn(d[509638]);
  }, i.getUserInfo = function () {
    var e = {};return e.NickName = _.UserInfoData.NickName, e.AvatarUrl = _.UserInfoData.AvatarUrl, e.Country = _.UserInfoData.Country, e.Gender = _.UserInfoData.Gender, e.Language = _.UserInfoData.Language, e.Province = _.UserInfoData.Province, e.Model = _.UserInfoData.Model, e.NewPlayer = _.UserInfoData.NewPlayer, e.Openid = _.UserInfoData.Openid, e.City = _.UserInfoData.City, e.SessionKey = _.UserInfoData.SessionKey, e.ReportOpenid = _.UserInfoData.ReportOpenid, e;
  }, i.msgCheck = function (e, t, a) {
    var n = { ret: 0, msg: "", content: e };if ("" == m.ALConfig.appId) return console.warn(d[509638]), n.ret = -1, n.msg = d[509638], void t(n);d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[509639], { appid: m.ALConfig.appId, content: e, scene: a || _.MsgCheckSceneEnum.Comments, openid: m.ALConfig.openId }, function (e) {
      e.isSucc || (console.warn(d[509640], e.reason), n.ret = -1, n.msg = d[509640] + e.reason), t(n);
    });
  }, i.imgCheck = function (e, t) {
    var a = { ret: 0, msg: "" };if ("" == m.ALConfig.appId) return console.warn(d[509638]), a.ret = -1, a.msg = d[509638], void t(a);var n = new FormData();n.append(d[509641], e), n.append(d[509642], m.ALConfig.appId), d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[509643], n, function (e) {
      e.isSucc || (console.warn(d[509640], e.reason), a.ret = -1, a.msg = d[509640] + e.reason), t(a);
    }, { "content-type": d[509644] });
  }, i.openShop = function (e, t) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat && m.ALConfig.RunEnv.openCustomerServiceConversation({ sessionFrom: d[509645] + e, showMessageCard: !0, sendMessageTitle: d[509646], sendMessagePath: d[509583], sendMessageImg: t });
  }, i.reportData = function (e, t, a) {
    l.ALUtil.LOG(d[509647], t, a), "" != m.ALConfig.appId && "" != m.ALConfig.openId || console.warn(d[509648]);var n = r(r({}, s.ALReport.publicParam), { report_type: d[487158], typeStr: e, value: t, extra: a });s.ALReport.reportDataToMarketNew(n);
  }, i.initShareData = function (e) {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat) {
      if (_.ALData.shareData && 0 < _.ALData.shareData.length) {
        _.ALData.curShareData = null, _.ALData.curShareScene = "";var t = [];if (e) for (var a = 0; a < _.ALData.shareData.length; a++) _.ALData.shareData[a].sceneid == e && t.push(_.ALData.shareData[a]);else t = _.ALData.shareData;if (0 < t.length) {
          var n = Math.floor(Math.random() * t.length);_.ALData.curShareData = t[n], _.ALData.curShareScene = e || "", l.ALUtil.LOG(d[509649], _.ALData.curShareData, _.ALData.curShareScene);
        } else l.ALUtil.LOG(d[509650]);
      }
    } else console.warn(d[509630]);
  }, i.getToken = function () {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.QQ) return "" == m.ALConfig.token && console.warn(d[509651]), m.ALConfig.token;console.warn(d[509630]);
  }, i.paycheck = function (e, t) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat ? f.ALSDK.paycheck(e, t) : console.warn(d[509630]);
  }, i.pay = function (e, t, a, n, o, r, i, p, s, l, d, c) {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat) {
      var u = 0;c && (u = c), f.ALSDK.pay(e, m.ALConfig.openId, a, n, "1", r, i, p, s, l, d, u, {});
    } else console.warn(d[509630]);
  }, i.midasPay = function (e) {
    if (console.log(d[509652], m.ALConfig.GamePlatform, e), m.ALConfig.GamePlatform === _.PlatformEnum.WeChat) {
      for (var t = 0; t < this.mustNeed.length; t++) {
        var a = this.mustNeed[t];if (!e.hasOwnProperty(a)) return void console.warn(d[509653], a);
      }var n = 0;return e.env && (n = e.env), e.hasOwnProperty(d[509654]) && e.hasOwnProperty(d[509655]) && e.hasOwnProperty(d[509656]) && e.hasOwnProperty(d[492088]) && s.ALReport.commonReport(26, 2, { ply: e.model_id, video_sence: e.package_id, zone_id: e.zone_id, role_id: e.role_id }), void f.ALSDK.pay(e.appid, m.ALConfig.openId, e.amount, e.pid, "1", e.orderTitle, e.orderDesc, e.imgUrl, e.limit, e.params, e.cb, n, e);
    }m.ALConfig.GamePlatform !== _.PlatformEnum.QQ ? console.warn(d[509657]) : this.qqpay(e);
  }, i.qqpay = function (e) {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.QQ) {
      if ("" != m.ALConfig.appId && "" != m.ALConfig.openId) {
        if ("" == e.goodid || !l.ALUtil.isInteger(e.good_num) || e.good_num < 1 || !l.ALUtil.isInteger(e.amt) || e.amt < 1 || !e.callback || !l.ALUtil.isFunction(e.callback)) console.warn(d[509658], e);else {
          var t = e.params ? e.params : "",
              a = e.limit ? e.limit : 0,
              n = e.pid ? e.pid : "",
              o = e.title ? e.title : "",
              r = e.zone_id ? e.zone_id : 0,
              i = e.role_id ? e.role_id : 0,
              p = e.model_id ? e.model_id : 0,
              s = e.package_id ? e.package_id : "";f.ALSDK.qqpay(m.ALConfig.appId, m.ALConfig.openId, e.amt, e.goodid, e.good_num, e.callback, t, a, n, o, r, i, p, s);
        }
      } else console.warn(d[509659], m.ALConfig.appId, m.ALConfig.openId);
    } else console.warn(d[509660], m.ALConfig.GamePlatform);
  }, i.getGiftPack = function (t) {
    var a = r({}, t);if (m.ALConfig.appId && (a.appid = m.ALConfig.appId), m.ALConfig.openId && (a.openid = m.ALConfig.openId), !(a.hasOwnProperty(d[509642]) && a.hasOwnProperty(d[509661]) && a.hasOwnProperty(d[480124]) && a.hasOwnProperty(d[509662]) && a.hasOwnProperty(d[509656]) && a.hasOwnProperty(d[492088]))) return console.warn(d[509663], a, t, m.ALConfig.appId, m.ALConfig.openId), void t.cb({ ret: -1, msg: d[504752], list: [] });d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[509664], a, function (e) {
      if (l.ALUtil.LOG(d[509665], t, a, e), !e.isSucc) return console.warn(d[509666], e.reason), void t.cb({ ret: -2, msg: d[509666] + e.reason, list: [] });t.cb({ ret: 0, msg: "", list: e.data });
    });
  }, i.reportGiftPackShow = function (e) {
    e.hasOwnProperty(d[509654]) && e.hasOwnProperty(d[509655]) && e.hasOwnProperty(d[509656]) && e.hasOwnProperty(d[492088]) ? s.ALReport.commonReport(26, 1, { ply: e.model_id, video_sence: e.package_id, zone_id: e.zone_id, role_id: e.role_id }) : console.error(d[509667], e);
  }, i.ipShield = function (t) {
    var a = { ip: "", province: "", city: "", status: 1 };d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[509668], {}, function (e) {
      return e.isSucc ? e.data && (a.status = e.data.status, a.ip = e.data.ip, a.province = e.data.province, a.city = e.data.city) : console.warn(d[509669], e.reason), void t(a);
    });
  }, i.reportOpenId = function (e, t) {
    void 0 === t && (t = {}), l.ALUtil.LOG(d[509670], e, t), s.ALReport.publicParam.zone_id = t.zone_id || "", s.ALReport.publicParam.role_id = t.role_id || "", s.ALReport.publicParam.is_gs = t.is_gs || 0, s.ALReport.report(s.REPORT_TYPE_ENUM.REPORT_TYPE_OPEN_ID, m.ALConfig.openId || e);
  }, i.commonReport = function (e, t, a) {
    s.ALReport.commonReport(e, t, a);
  }, i.reportGoodsBehavior = function (e) {
    var t = r({}, s.ALReport.publicParam);t.event_type = _.BehaviorEnum.Goods, t.product_type = e.product_type, t.product_id = e.product_id, t.change_type = e.change_type, t.product_cnt_before = e.product_cnt_before, t.product_cnt = e.product_cnt, t.product_cnt_after = e.product_cnt_after, t.reason = e.reason, t.scene = e.scene || "", t.login_type = l.ALUtil.getLoginType(), t.zone_id = e.zone_id || t.zone_id, t.open_id = e.open_id || t.open_id, t.is_gs = e.is_gs || t.is_gs, d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[509671], t, function (e) {
      t.callback && t.callback(e);
    });
  }, i.reportGrowthBehavior = function (e) {
    var t = r({}, s.ALReport.publicParam);t.event_type = _.BehaviorEnum.Growth, t.product_type = e.product_type, t.product_id = e.product_id, t.change_type = e.change_type, t.product_cnt_before = e.product_cnt_before, t.product_cnt = e.product_cnt, t.product_cnt_after = e.product_cnt_after, t.reason = e.reason, t.scene = e.scene || "", t.zone_id = e.zone_id || t.zone_id, t.open_id = e.open_id || t.open_id, t.is_gs = e.is_gs || t.is_gs, t.login_type = l.ALUtil.getLoginType(), d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[509671], t, function (e) {
      t.callback && t.callback(e);
    });
  }, i.reportActivityBehavior = function (e) {
    var t = r({}, s.ALReport.publicParam);t.activity_id = e.activity_id || _.BehaviorEnum.Activity, t.activity_action = e.activity_action, t.progress = e.progress || 0, t.scene = e.scene || "", t.zone_id = e.zone_id || t.zone_id, t.open_id = e.open_id || t.open_id, t.is_gs = e.is_gs || t.is_gs, t.login_type = l.ALUtil.getLoginType(), d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[509672], t, function (e) {
      t.callback && t.callback(e);
    });
  }, i.reportAnalytics = function (e, t, a) {
    var n = l.ALUtil.addAppidPrefix(e);"" == m.ALConfig.appId && (console.warn(d[509401]), m.ALConfig.appId = n), m.ALConfig.appId != n && console.warn(d[509673]), s.ALReport.reportAnalytics(n, t);
  }, i.reportFlowShow = function (e) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.Oppo ? (s.ALReport.reportCheck.gameShow = e, f.ALSDK.reportFlowShow(e)) : console.warn(d[509630]);
  }, i.reportWithAppId = function (e, t, a) {
    void 0 === a && (a = "");var n = l.ALUtil.addAppidPrefix(e);"" == m.ALConfig.appId && (console.warn(d[509401]), m.ALConfig.appId = n), m.ALConfig.appId != n && console.warn(d[509674]), s.ALReport.report(t, a);
  }, i.jumpForum = function (t) {
    return m.ALConfig.GamePlatform != _.PlatformEnum.WeChat ? (console.warn(d[509675]), void (t.fail && t.fail(d[509630]))) : "" == m.ALConfig.appId ? (console.warn(d[509676]), void (t.fail && t.fail(d[509677]))) : void m.ALConfig.RunEnv.navigateToMiniProgram({ appId: d[509678], path: d[509679] + m.ALConfig.appId, extraData: { from: d[509588], game_appid: m.ALConfig.appId }, success: function (e) {
        console.log(d[509680], e), t.success && t.success(e);
      }, fail: function (e) {
        console.log(d[509681], e), t.fail && t.fail(e);
      }, complete: function (e) {
        console.log(d[509682], e), t.complete && t.complete(e);
      } });
  }, i.clickToMiniProgram = function (e, t, a, n, o, r) {
    void 0 === a && (a = ""), void 0 === n && (n = null), void 0 === o && (o = null), void 0 === r && (r = null), m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.Oppo ? t === this.ClickTypes.ICONS_CLICK ? f.ALSDK.toMiniProgram(e, this.ClickTypes.ICONS_CLICK, f.SDK_MODULE_ICONS_CLICK, a || d[503981], n, o, r) : t === this.ClickTypes.BANNER_CLICK ? f.ALSDK.toMiniProgram(e, this.ClickTypes.BANNER_CLICK, f.SDK_MODULE_BANNER_CLICK, a || d[509683], n, o, r) : f.ALSDK.toMiniProgram(e, this.ClickTypes.ICONS_CLICK, f.SDK_MODULE_ICONS_CLICK, a, n, o, r) : console.warn(d[509630]);
  }, i.getFavoData = function (e, t, a) {
    void 0 === t && (t = 400), void 0 === a && (a = ""), m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.Oppo ? f.ALSDK.requestModuleData(f.SDK_MODULE_LIKE, e, t, a) : console.warn(d[509630]);
  }, i.reportCheckSingle = function (e) {
    s.ALReport.reportCheck[e] ? console.log(d[509684], s.ALReport.reportCheck[e]) : console.warn(d[509685]);
  }, i.reportCheck = function () {
    if (console.log(d[509686], m.ALConfig.sdkVersion), console.log(d[509687], m.ALConfig.ReportMarketDomain), s.ALReport.reportCheck.appid ? console.log(d[509688], s.ALReport.reportCheck.appid) : console.warn(d[509689]), s.ALReport.reportCheck.openid ? console.log(d[509690], s.ALReport.reportCheck.openid) : console.warn(d[509691]), 0 < s.ALReport.CustomNode.length) {
      for (var e = "", t = 0; t < s.ALReport.CustomNode.length; t++) s.ALReport.CustomNode[t] && (e = e + t + ",");console.log(d[509692], e);
    } else console.warn(d[509693]);s.ALReport.reportCheck.startTime ? console.log(d[509694], s.ALReport.reportCheck.startTime) : console.warn(d[509695]), s.ALReport.reportCheck.level ? console.log(d[509696], s.ALReport.reportCheck.level) : console.warn(d[509697]), s.ALReport.reportCheck.video_sence ? console.log(d[509698], s.ALReport.reportCheck.video_sence) : console.warn(d[509699]), s.ALReport.reportCheck.video_play ? console.log(d[509700], s.ALReport.reportCheck.video_play) : console.warn(d[509701], d[509702]), s.ALReport.reportCheck.video_play ? console.log(d[509700], s.ALReport.reportCheck.video_play) : console.warn(d[509701], d[509702]), s.ALReport.reportCheck.payAmount ? console.log(d[509703], s.ALReport.reportCheck.payAmount) : console.warn(d[509704], d[509702]), s.ALReport.reportCheck.gameTime ? console.log(d[509705], s.ALReport.reportCheck.gameTime) : console.warn(d[509706], d[509702]), s.ALReport.reportCheck.gameShow ? console.log(d[509707], s.ALReport.reportCheck.gameShow) : console.warn(d[509708], d[509702]), s.ALReport.reportCheck.sharePic ? console.log(d[509709], s.ALReport.reportCheck.sharePic) : console.warn(d[509710], d[509702]), s.ALReport.reportCheck.jumpData ? console.log(d[509711], [s.ALReport.reportCheck.jumpData]) : console.warn(d[509712], d[509702]);
  }, i.antiAddiction = function (t) {
    if (null !== t.id && null !== t.name) {
      var e = {};e.appid = t.appid || m.ALConfig.appId, e.openid = t.openid || m.ALConfig.openId, e.id = t.id, e.name = t.name, d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[509713], e, function (e) {
        t.callback && t.callback(e);
      }, { "content-type": d[480602] });
    } else console.error(d[509714]);
  }, i.opInit = function (e) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat && (m.ALConfig.RunEnv.offInteractiveStorageModified && m.ALConfig.RunEnv.offInteractiveStorageModified(i.opReportInteractiveStorageModified), m.ALConfig.RunEnv.onInteractiveStorageModified && m.ALConfig.RunEnv.onInteractiveStorageModified(i.opReportInteractiveStorageModified), i.openDataContext = m.ALConfig.RunEnv.getOpenDataContext(), i.shareCanvas = i.openDataContext.canvas, m.ALConfig.InviteStartTime = e.start, m.ALConfig.InviteEndTime = e.end, m.ALConfig.InviteKeyList = e.keylist || ["1", "2", "3"], i.openDataContext.postMessage({ type: d[480455], start: e && e.start, end: e && e.end, period: e && e.period, sharedata: _.ALData.shareData }), i.opUpdateInviteData(function () {
      i.opCheckLaunchQuery(), e.callback && e.callback();
    }));
  }, i.opReportInteractiveStorageModified = function (t) {
    if (1 !== Number(t)) {
      var e = {};e.appid = m.ALConfig.appId, e.openid = m.ALConfig.openId, e.type = t, d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[509715], e, function (e) {
        console.log(d[509716], t);
      });
    }
  }, i.opUpdateInviteData = function (a) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat && m.ALConfig.RunEnv.getUserInteractiveStorage({ keyList: m.ALConfig.InviteKeyList, success: function (e) {
        var t = { appid: m.ALConfig.appId, openid: m.ALConfig.openId, date: m.ALConfig.InviteStartTime, duration: l.ALUtil.getActivityDuration(m.ALConfig.InviteStartTime, m.ALConfig.InviteEndTime), token: m.ALConfig.token, encryptedData: encodeURIComponent(e.encryptedData), iv: encodeURIComponent(e.iv) };d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[509717], t, function (e) {
          e.isSucc ? (i.opInitInviteData(e.data), i.opPostOpenidsToOpenCentext(), a && a()) : console.error(d[509718] + e.reason);
        });
      }, fail: function (e) {
        console.error(d[509719], e);
      } });
  }, i.opInitInviteData = function (e) {
    _.InvitedData.Inviter.normal_level_help_sum = e.inviter.normal_level_help_sum, _.InvitedData.Inviter.normal_pay_help_sum = e.inviter.normal_pay_help_sum, _.InvitedData.Inviter.normal_user_list = e.inviter.normal_user_list, _.InvitedData.Inviter.normal_invite_num = e.inviter.normal_invite_num, _.InvitedData.Inviter.open_invite_num = e.inviter.open_invite_num, _.InvitedData.Inviter.open_today_invite_num = e.inviter.open_today_invite_num, _.InvitedData.Inviter.open_level_help_sum = e.inviter.open_level_help_sum, _.InvitedData.Inviter.open_pay_help_sum = e.inviter.open_pay_help_sum, _.InvitedData.Invited.level_help_sum = e.invited.level_help_sum, _.InvitedData.Invited.pay_help_sum = e.invited.pay_help_sum;
  }, i.opGetInviteData = function () {
    var e = { Inviter: {}, Invited: {} };return e.Inviter.normal_level_help_sum = _.InvitedData.Inviter.normal_level_help_sum, e.Inviter.normal_pay_help_sum = _.InvitedData.Inviter.normal_pay_help_sum, e.Inviter.normal_user_list = _.InvitedData.Inviter.normal_user_list, e.Inviter.normal_invite_num = _.InvitedData.Inviter.normal_invite_num, e.Inviter.open_invite_num = _.InvitedData.Inviter.open_invite_num, e.Inviter.open_today_invite_num = _.InvitedData.Inviter.open_today_invite_num, e.Inviter.open_level_help_sum = _.InvitedData.Inviter.open_level_help_sum, e.Inviter.open_pay_help_sum = _.InvitedData.Inviter.open_pay_help_sum, e.Invited.level_help_sum = _.InvitedData.Invited.level_help_sum, e.Invited.pay_help_sum = _.InvitedData.Invited.pay_help_sum, e;
  }, i.opPostOpenidsToOpenCentext = function () {
    if (i.openDataContext) {
      var t = [];_.InvitedData.Inviter.normal_user_list.forEach(function (e) {
        t.push(e.openid);
      }), i.openDataContext.postMessage({ type: d[509720], list: t, param: {} });
    }
  }, i.opCheckLaunchQuery = function () {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat && i.openDataContext) {
      var e = m.ALConfig.RunEnv.getLaunchOptionsSync().query;if (e && e.shareMessageToFriendScene && 1 == e.shareMessageToFriendScene) {
        if (_.UserInfoData.ReportOpenid) return void console.log(d[509721]);i.openDataContext.postMessage({ type: d[509722], param: {} });
      }
    }
  }, i.opUpgradeHelp = function (e) {
    i.openDataContext && (e = e || {}, i.openDataContext.postMessage({ type: d[509723], param: e }));
  }, i.opRechargeHelp = function (e) {
    i.openDataContext && (e = e || {}, i.openDataContext.postMessage({ type: d[509724], param: e }));
  }, i.opRenderInvite = function (e) {
    i.openDataContext && (i.shareCanvas.width = e.canvas.width, i.shareCanvas.height = e.canvas.height, i.opUpdateInviteData(function () {
      i.openDataContext.postMessage({ type: d[509725], param: e });
    }));
  }, i.opRefreshInvite = function (e) {
    i.openDataContext && (e = e || {}, i.openDataContext.postMessage({ type: d[509726], param: e }));
  }, i.opClose = function (e) {
    i.openDataContext && i.openDataContext.postMessage({ type: d[480328], param: e });
  }, i.openDataContext = null, i.shareCanvas = null, i.mustNeed = [d[509642], d[509727], d[509728], d[509729], d[509730], d[509731], d[506374], d[487258], "cb", d[509656], d[492088]], i.ClickTypes = { ICONS_CLICK: d[509732], BANNER_CLICK: d[509733] }, i.ReportTypes = { SHOW: d[509445], LOGIN: d[509446], OPEN_ID: d[509447], AUTH: d[509448], SHARE: d[509455], LIKE_CLICK: d[509449], DRAWER_CLICK: d[509451], LIKE_SHOW: d[509450], DRAWER_SHOW: d[509452], SHARE_Ready: d[509454], PAY_MENT: d[509734], PAY_MENT_STAR: d[509460], PAY_MENT_INTER: d[509461], PAY_MENT_FAIL: d[509735], MORE_SHOW: d[486230], MORE_FOLD: d[509463], MORE_CLICK: d[509464], MORE_LONG_CLICK: d[509465], VIDEO_OPEN: d[509466], VIDEO_WATCH_FAIL: d[509467], VIDEO_WATCH_NORMAL: d[509468], GAME_BOX_SHOW: d[509469], GAME_BOX_CLICK: d[509470], GAME_BOX_BANNER_CLICK: d[509471], VIDEO_BTN_SHOW: d[509472], VIDEO_CLICK: d[509473], SHARE_BTN_SHOW: d[509474], SHARE_CLICK: d[509475] }, i);function i() {}t.AladinSDK = o, l.ALUtil.qgExist() && console.log(d[509736]), console.log(d[509737]), l.ALUtil.runEnvExist() ? (console.log(d[509738]), l.ALUtil.initGamePlatform(), console.log(d[509394], m.ALConfig.GamePlatform), l.ALUtil.initRunEnv(), console.log(d[509739], m.ALConfig.RunEnv), s.ALReport.init(), n.ALIntercept.init(), l.ALUtil.reportUserInfo(), l.ALUtil.saveSystemInfo(), l.ALUtil.saveNetworkType(), o.login(function () {
    o.reportAnalytics(m.ALConfig.appId, 0);
  })) : console.warn(d[509740]), window.AladinSDK = o;
}]);window.AladinSDK = aladinSDK.AladinSDK;module.exports = { AladinSDK: aladinSDK.AladinSDK };