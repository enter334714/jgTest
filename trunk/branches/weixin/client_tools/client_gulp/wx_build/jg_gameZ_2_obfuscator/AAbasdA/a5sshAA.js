var d = wx.$A;
var window = window || GameGlobal;var aladinSDK = function (a) {
  var n = {};function o(e) {
    if (n[e]) return n[e].exports;var t = n[e] = { i: e, l: !1, exports: {} };return a[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports;
  }return o.m = a, o.c = n, o.d = function (e, t, a) {
    o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
  }, o.r = function (e) {
    d[481253] != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: d[481255] }), Object.defineProperty(e, d[481256], { value: !0 });
  }, o.t = function (t, e) {
    if (1 & e && (t = o(t)), 8 & e) return t;if (4 & e && d[481257] == typeof t && t && t.__esModule) return t;var a = Object.create(null);if (o.r(a), Object.defineProperty(a, d[481258], { enumerable: !0, value: t }), 2 & e && d[480802] != typeof t) for (var n in t) o.d(a, n, function (e) {
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

  Object.defineProperty(t, d[481256], { value: !0 });var n = (o.sdkVersion = d[509817], o.envVersion = d[509818], o.appId = "", o.version = d[509819], o.openId = "", o.unionId = "", o.testAppid = d[509820], o.testOpenId = d[509821], o.ReportMarketDomain = window.ReportMarketDev ? d[509822] : d[509823], o.QQH5PayUrl = window.ReportMarketDev ? d[509824] : d[509825], o.ImgDomain = d[509826], o.token = "", o.RunEnv = {}, o.GamePlatform = "", o.AutoPayCb = !1, o.base64Test = d[509827], o.AccountInfo = null, o.InviteStartTime = null, o.InviteEndTime = null, o.InviteKeyList = [], o);function o() {}t.ALConfig = n;
}, function (e, t, a) {
  "use strict";

  Object.defineProperty(t, d[481256], { value: !0 });var n = (o.opts = null, o.scene = 0, o.shareScene = 0, o.topInviter = "0", o.inviter = "0", o.level = 1, o.score = 1, o.isVertical = !1, o.isTSA = !1, o.allowShare = !1, o.appIdListStr = "", o.sdkData = null, o.moreData = null, o.iconData = null, o.curShareData = null, o.curShareScene = "", o.shareData = [], o);function o() {}t.ALData = n;var r = (i.NickName = "", i.AvatarUrl = "", i.Country = "", i.Gender = 0, i.Language = "", i.Province = "", i.Model = "", i.NewPlayer = !1, i.Openid = "", i.City = "", i.SessionKey = "", i.ReportOpenid = !1, i);function i() {}t.UserInfoData = r;var p = (s.Inviter = { normal_invite_num: 0, normal_level_help_sum: 0, normal_pay_help_sum: 0, normal_user_list: [], open_invite_num: 0, open_today_invite_num: 0, open_level_help_sum: 0, open_pay_help_sum: 0 }, s.Invited = { level_help_sum: 0, pay_help_sum: 0 }, s);function s() {}t.InvitedData = p;t.PlatformEnum = { QQ: "qq", WeChat: d[480631], TouTiao: "tt", Oppo: d[509828], Vivo: d[509829], HuaWei: "hw", Other: d[506723] };t.BehaviorEnum = { Goods: d[509830], Growth: d[509831], Activity: d[509832] };t.LoginTypeEnum = { Other: "0", Visitor: "1", Wechat: "2", QQ: "3" };t.MsgCheckSceneEnum = { Other: 0, Info: 1, Comments: 2, Form: 3, SocialLog: 4 };
}, function (e, t, a) {
  "use strict";

  Object.defineProperty(t, d[481256], { value: !0 });var n = a(4),
      o = a(3),
      r = a(0),
      i = a(1),
      p = (s.LOG = function (e) {
    for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];this.DEBUG && console.log(d[509833], e, t);
  }, s.addAppidPrefix = function (e) {
    return r.ALConfig.GamePlatform == i.PlatformEnum.Oppo || r.ALConfig.GamePlatform == i.PlatformEnum.Vivo || r.ALConfig.GamePlatform == i.PlatformEnum.HuaWei ? r.ALConfig.GamePlatform + e : e;
  }, s.wxNotExist = function () {
    return d[481253] == typeof wx;
  }, s.wxExist = function () {
    return d[481253] != typeof wx;
  }, s.ttExist = function () {
    return d[481253] != typeof tt;
  }, s.ttNotExist = function () {
    return d[481253] == typeof tt;
  }, s.qgExist = function () {
    return d[481253] != typeof qg;
  }, s.qgNotExist = function () {
    return d[481253] == typeof qg;
  }, s.hbsExist = function () {
    return d[481253] != typeof hbs;
  }, s.hbsNotExist = function () {
    return d[481253] == typeof hbs;
  }, s.qqNotExist = function () {
    return d[481253] == typeof qq;
  }, s.qqExist = function () {
    return d[481253] != typeof qq;
  }, s.runEnvExist = function () {
    return d[481253] != typeof wx || d[481253] != typeof qq || d[481253] != typeof tt || d[481253] != typeof qg || d[481253] != typeof hbs;
  }, s.runEnvNotExist = function () {
    return d[481253] == typeof wx && d[481253] == typeof qq && d[481253] == typeof tt && d[481253] == typeof qg && d[481253] == typeof hbs;
  }, s.initRunEnv = function () {
    switch (r.ALConfig.GamePlatform) {case i.PlatformEnum.QQ:
        r.ALConfig.RunEnv = qq;break;case i.PlatformEnum.WeChat:
        r.ALConfig.RunEnv = wx;break;case i.PlatformEnum.TouTiao:
        r.ALConfig.RunEnv = tt;break;case i.PlatformEnum.HuaWei:
        r.ALConfig.RunEnv = hbs;break;case i.PlatformEnum.Oppo || i.PlatformEnum.Vivo:
        r.ALConfig.RunEnv = qg;break;default:
        throw Error(d[509834]);}
  }, s.initGamePlatform = function () {
    if (s.qqExist()) r.ALConfig.GamePlatform = i.PlatformEnum.QQ;else if (s.wxExist()) r.ALConfig.GamePlatform = i.PlatformEnum.WeChat;else if (s.ttExist()) r.ALConfig.GamePlatform = i.PlatformEnum.TouTiao;else if (s.hbsExist()) r.ALConfig.GamePlatform = i.PlatformEnum.HuaWei;else {
      if (s.qgExist()) try {
        var e = qg.getSystemInfoSync();if (e && e.brand) return void (r.ALConfig.GamePlatform = e.brand.toLowerCase());
      } catch (e) {
        console.error(d[509835], e);
      }r.ALConfig.GamePlatform = i.PlatformEnum.Other;
    }
  }, s.readAppIDList = function () {
    return new Promise(function (o, e) {
      var t = d[480601] === r.ALConfig.RunEnv.getSystemInfoSync().platform ? d[509836] : d[509837];r.ALConfig.RunEnv.getFileSystemManager().readFile({ filePath: t, encoding: d[509838], success: function (e) {
          var t = e.data,
              a = JSON.parse(t).navigateToMiniProgramAppIdList,
              n = "";a && (n = a.join(",")), s.LOG(d[509839], n), o(n);
        }, fail: function (e) {
          s.LOG(d[509840], e), o("");
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
        n = e[2] || d[509841],
        o = this._parseQueryString(e[3]);if (-1 < n.indexOf("?")) {
      var r = n.split("?"),
          i = this._parseQueryString(r[1]);this._mergeParams(o, i);
    }return o.tgt = e[1], { appId: t, path: n += "?" + this._buildQueryString(o), extraData: o, target_appid: a };
  }, s.isInteger = function (e) {
    return Math.floor(e) === e;
  }, s.isFunction = function (e) {
    return d[509842] === Object.prototype.toString.call(e);
  }, s.convertVersionStringToNumber = function (e) {
    var t = e.split(".");return Number(t[0]) << 24 | Number(t[1]) << 16 | 0 | Number(t[2]);
  }, s.reportUserInfo = function () {
    r.ALConfig.GamePlatform != i.PlatformEnum.WeChat && r.ALConfig.GamePlatform != i.PlatformEnum.QQ || r.ALConfig.RunEnv.getUserInfo({ success: function (e) {
        if (e && e.userInfo && 0 != e.userInfo.gender && "" != e.userInfo.language && "" != e.userInfo.country) {
          var t = {};t.nickName = i.UserInfoData.NickName = e.userInfo.nickName || "", t.avatarUrl = i.UserInfoData.AvatarUrl = e.userInfo.avatarUrl || "", t.country = i.UserInfoData.Country = e.userInfo.country || "", t.gender = i.UserInfoData.Gender = void 0 !== e.userInfo.gender ? e.userInfo.gender : 0, t.language = i.UserInfoData.Language = e.userInfo.language || "", t.province = i.UserInfoData.Province = e.userInfo.province || "", t.city = i.UserInfoData.City = e.userInfo.city || "", o.ALReport.reportDataToServer(t);
        } else console.log(d[509843]);
      }, fail: function (e) {
        console.warn(d[509844], e);
      } });
  }, s.saveSystemInfo = function () {
    if (!s.runEnvNotExist()) try {
      i.UserInfoData.Model = r.ALConfig.RunEnv.getSystemInfoSync().model;
    } catch (e) {
      console.error(d[509845]);
    }
  }, s.saveNetworkType = function () {
    if (!s.runEnvNotExist()) try {
      r.ALConfig.RunEnv.getNetworkType({ success: function (e) {
          n.ALIntercept.NetworkType = e.networkType;
        } });
    } catch (e) {
      console.error(d[509846]);
    }
  }, s.saveAccountInfo = function () {
    if (r.ALConfig.GamePlatform == i.PlatformEnum.WeChat) try {
      r.ALConfig.AccountInfo = r.ALConfig.RunEnv.getAccountInfoSync();
    } catch (e) {
      console.error(d[509847], e);
    }
  }, s.showString = function (e) {
    if ((r.ALConfig.GamePlatform == i.PlatformEnum.WeChat || r.ALConfig.GamePlatform == i.PlatformEnum.QQ) && window.ShowReportTips) {
      var t = function () {
        s.Showing || 0 != s.ToastStrList.length && (s.Showing = !0, r.ALConfig.RunEnv.showToast({ title: d[509848] + s.ToastStrList.shift(), icon: d[480428], duration: 300, success: function () {
            s.TimerID && clearTimeout(s.TimerID), s.TimerID = setTimeout(function () {
              s.Showing = !1, s.TimerID = null, t();
            }, 300), console.log(d[509849]);
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
  };Object.defineProperty(s, d[481256], { value: !0 });var d = t(1),
      c = t(0),
      u = t(5),
      f = t(2),
      i = t(4),
      a = (m.getAdsPos = function () {
    return this.Ads + "|" + this.AdsPos;
  }, m.init = function () {
    this._inited || (this._inited = !0, f.ALUtil.LOG(d[509850], c.ALConfig.GamePlatform), f.ALUtil.LOG(d[509851]), this.initStartTime(), f.ALUtil.runEnvNotExist() || (this._initAdsPos(), this._initReportData(), f.ALUtil.LOG(d[509852])));
  }, m.initStartTime = function () {
    m.startTime = new Date().getTime(), f.ALUtil.LOG(d[509853], m.startTime);
  }, m.reportTime = function (e) {
    if (0 != m.startTime) {
      var t = new Date().getTime(),
          a = l(l({}, m.publicParam), { report_type: d[509854], typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_TIME, value: t - m.startTime });m.reportCheck.startTime = t - m.startTime, this.reportDataToMarketNew(a);
    }
  }, m.reportAnalytics = function (e, t) {
    if (isNaN(t)) f.ALUtil.LOG(d[509855], t);else if (m.CustomNode[t]) console.warn(d[509856], t);else {
      m.CustomNode[t] = !0, this._inited || (console.warn(d[509857]), c.ALConfig.appId = e, this.init()), this._initReportData(), this.reportPrefix, this._getCurrentDate(), this._getTimeStamp(), this.reportDevice2Sence, d.ALData.level, c.ALConfig.openId, d.ALData.topInviter, d.UserInfoData.Gender;var a = l(l({}, m.publicParam), { report_type: d[509858], typeStr: d[509859] + t, ply: d.ALData.level, node: "0", open_id: c.ALConfig.openId, type: "10", sub_type: t, value: "", extra: d.UserInfoData.ReportOpenid ? "1" : "0", uuid: d.UserInfoData.NewPlayer ? "1" : "0", p_open_id: d.ALData.topInviter, gender: d.UserInfoData.Gender });f.ALUtil.showString(d[509859] + t), u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509860], a, function (e) {
        e.isSucc || f.ALUtil.LOG(d[509861], e.reason);
      });var n = 0,
          o = new Date().getTime(),
          r = m.LastCustomNode;n = 0 == m.CusRepLastTime ? o - m.startTime : o - m.CusRepLastTime, m.CusRepLastTime = o, m.LastCustomNode = Number(t), f.ALUtil.LOG(d[509862], t, n, m.CusRepLastTime, i.ALIntercept.NetworkType, i.ALIntercept.IsOnShow, m.publicParam.channel, m.publicParam.benchmarkLevel), m.CustomDataCache.push({ step: Number(t), dtime: n, network_type: i.ALIntercept.NetworkType, is_onshow: i.ALIntercept.IsOnShow, last_node: r });
    }
  }, m.report = function (e, t) {
    if (this._inited || this.init(), e != s.REPORT_TYPE_ENUM.REPORT_TYPE_TIME) {
      var a = e.split("_");if (a.length < 2) console.warn(d[509863]);else {
        f.ALUtil.showString(e);var n = t || "";if (e === s.REPORT_TYPE_ENUM.REPORT_TYPE_OPEN_ID) return c.ALConfig.openId = t, "" == m.reportCheck.openid ? m.reportCheck.openid = t : console.warn(d[509864]), window.ALOpenId = t, this.reportOpenId(), this.reportPerformanceData(), void this._initLevelData();if (e === s.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_BTN_SHOW && (m.reportCheck.video_sence = t, m.publicParam.video_sence = t), d[509865] === e && (m.reportCheck.level = t), e === s.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_WATCH_NORMAL && m.reportCheck.video_play++, e !== s.REPORT_TYPE_ENUM.REPORT_TYPE_PAY_MENT_IOS) {
          var o = a[0],
              r = a[1];this._initReportData(), this.reportPrefix, this._getCurrentDate(), this._getTimeStamp(), this.reportDevice2Sence, d.ALData.level, c.ALConfig.openId, d.ALData.topInviter, d.UserInfoData.Gender;var i = l(l({}, m.publicParam), { report_type: d[487206], typeStr: e, ply: d.ALData.level, node: "0", open_id: c.ALConfig.openId, type: o, sub_type: r, value: "0", extra: n, uuid: "", p_open_id: d.ALData.topInviter, gender: d.UserInfoData.Gender });e === s.REPORT_TYPE_ENUM.REPORT_TYPE_SHARE_READY && (i.video_sence = d.ALData.curShareScene), u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509860], i, function (e) {
            e.isSucc || f.ALUtil.LOG(d[509861], e.reason);
          });
        } else {
          f.ALUtil.LOG(d[509866], t);var p = l(l({}, m.publicParam), { report_type: d[509867], typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_PAY_MENT_IOS, extra_data: t });this.reportDataToMarketNew(p);
        }
      }
    } else this.reportTime(t);
  }, m.commonReport = function (e, t, a) {
    var n = l(l(l({}, m.publicParam), { report_type: d[487206], typeStr: e + "_" + t, project_id: c.ALConfig.appId, open_id: c.ALConfig.openId, type: e, sub_type: t }), a);u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509860], n, function (e) {
      e.isSucc || f.ALUtil.LOG(d[509868], e.reason);
    });
  }, m.reportPerformanceData = function () {
    if (c.ALConfig.openId && 0 < m.CustomDataCache.length) {
      var e = new Date().getTime(),
          t = e - m.CusRepLastTime;m.CusRepLastTime = e, m.CustomDataCache.push({ step: 100, dtime: t, network_type: i.ALIntercept.NetworkType, is_onshow: i.ALIntercept.IsOnShow, last_node: m.LastCustomNode }), m.CustomDataCache.push({ step: 200, dtime: e - m.startTime, network_type: i.ALIntercept.NetworkType, is_onshow: i.ALIntercept.IsOnShow, last_node: i.ALIntercept.OnHideAllTime }), f.ALUtil.LOG(d[509869], m.CustomDataCache);var a = l(l({}, m.publicParam), { report_type: d[509870], typeStr: d[509871], open_id: c.ALConfig.openId, type: 20, sub_type: 1, p_open_id: d.ALData.topInviter, gender: d.UserInfoData.Gender, ply: m.publicParam.benchmarkLevel, video_sence: JSON.stringify(m.CustomDataCache) });u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509860], a, function (e) {
        e.isSucc || f.ALUtil.LOG(d[509872], e.reason);
      }), m.CustomDataCache = [], m.LastCustomNode = -1;
    }
  }, m.reportOpenId = function () {
    var e = l(l({}, m.publicParam), { report_type: d[509873], typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_OPEN_ID, extra_data: this.getAdsPos(), value: new Date().getTime() - m.startTime });m.ad_appid && (e.ad_appid = m.ad_appid), e.nickName = d.UserInfoData.NickName, e.avatarUrl = d.UserInfoData.AvatarUrl, e.country = d.UserInfoData.Country, e.gender = d.UserInfoData.Gender, e.language = d.UserInfoData.Language, e.province = d.UserInfoData.Province, e.networkType = i.ALIntercept.NetworkType, e.model = d.UserInfoData.Model, m.reportDataToMarketNew(e);
  }, m.reportDataToServer = function (t) {
    var e = { appid: c.ALConfig.appId, openid: c.ALConfig.openId, nickName: t.nickName, gender: t.gender, avatarUrl: t.avatarUrl, country: t.country, province: t.province, city: t.city, language: t.language };u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509874], e, function (e) {
      t.complete && t.complete(e);
    });
  }, m.reportPay = function (e) {
    f.ALUtil.LOG(d[509875], e);var t = e.split("|");2 <= t.length && "1" == t[1] && (m.reportCheck.payAmount += parseInt(t[0]));var a = l(l({}, m.publicParam), { report_type: d[480690], typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_PAY_MENT_ENTER, extra_data: e });this.reportDataToMarketNew(a);
  }, m.reportShareState = function (e) {
    var t = e ? "1" : "2",
        a = l(l({}, m.publicParam), { report_type: d[480703], typeStr: s.REPORT_TYPE_ENUM.REPORT_TYPE_SHARE_SUCCESS, diff_key: t });this.reportDataToMarketNew(a);
  }, m.reportDataToMarket = function (e) {
    e.id = c.ALConfig.appId, e.openid = c.ALConfig.openId, f.ALUtil.LOG(d[509876], e), u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509877], e, function (e) {
      e.isSucc || f.ALUtil.LOG(d[509878], e.reason);
    });
  }, m.reportDataToMarketNew = function (e) {
    var t = e.typeStr.split("_");t.length < 2 ? console.warn(d[509863]) : (e.type = t[0], e.sub_type = t[1], e.project_id = c.ALConfig.appId, e.open_id = c.ALConfig.openId, e.ply = d.ALData.level, e.p_open_id = d.ALData.topInviter, e.gender = d.UserInfoData.Gender, f.ALUtil.LOG(d[509876], e), u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509860], e, function (e) {
      e.isSucc || f.ALUtil.LOG(d[509878], e.reason);
    }));
  }, m.getPublicParam = function () {
    var e = l({}, m.publicParam);return e.project_id = c.ALConfig.appId, e.open_id = c.ALConfig.openId, e.ply = d.ALData.level, e.p_open_id = d.ALData.topInviter, e.gender = d.UserInfoData.Gender, e;
  }, m._initAdsPos = function () {
    if (c.ALConfig.GamePlatform == d.PlatformEnum.WeChat || c.ALConfig.GamePlatform == d.PlatformEnum.QQ || c.ALConfig.GamePlatform == d.PlatformEnum.TouTiao || c.ALConfig.GamePlatform == d.PlatformEnum.Oppo) {
      console.log(d[509879], c.ALConfig.GamePlatform);var e = "",
          t = "";try {
        var a = c.ALConfig.RunEnv.getLaunchOptionsSync();f.ALUtil.LOG(d[509880], a);var n = a.query,
            o = a.referrerInfo && a.referrerInfo.extraData;if (m.publicParam.query_str = f.ALUtil._getInitParams(l({}, n), l({}, o)), f.ALUtil.LOG(d[509881], m.publicParam.query_str), c.ALConfig.GamePlatform != d.PlatformEnum.Oppo) {
          if (d.ALData.opts = a, d.ALData.scene = a.scene, (s = a.query).qz_gdt && (this.qz_gdt = s.qz_gdt ? s.qz_gdt : ""), s.ad_appid && (this.ad_appid = s.ad_appid ? s.ad_appid : ""), s.scene) {
            var r = decodeURIComponent(s.scene).split(",");e = r[1], t = r[2];
          } else if (s.Ads || s.AdsPos || s[d[509882]]) e = s.Ads ? s.Ads : "", t = s.AdsPos ? s.AdsPos : "", s[d[509882]] && f.ALUtil.qqExist() && -1 < (e = s[d[509882]]).indexOf(d[509883]) && 3 < e.length && (t = e.split(d[509883])[1], e = d[509883]);else if (a.referrerInfo && a.referrerInfo.extraData) {
            var i = a.referrerInfo.extraData;e = i.Ads ? i.Ads : "", t = i.AdsPos ? i.AdsPos : "";
          } else s.shareMessageToFriendScene && 1 == s.shareMessageToFriendScene && (e = d[509884], t = s.shareMessageToFriendScene);"" === e && (t = d[509885] == a.scene || d[509886] == a.scene || d[509887] == a.scene || d[509888] == a.scene ? (e = d[509889], a.referrerInfo.appId || "0") : (e = c.ALConfig.GamePlatform, a.scene || "0"));
        } else {
          if (d.ALData.opts = a) {
            if (a && a.query && (a.query.Ads || a.query.AdsPos)) e = a.query.Ads ? a.query.Ads : "", t = a.query.AdsPos ? a.query.AdsPos : "";else if (a && a.referrerInfo && a.referrerInfo.extraData) {
              var p = a.referrerInfo.extraData;e = p.Ads ? p.Ads : "", t = p.AdsPos ? p.AdsPos : "";
            }
          } else e = d[509828], t = "0";"" === e && (a && a.referrerInfo && a.referrerInfo.package ? (e = d[509889], t = a.referrerInfo.package || "0", a.referrerInfo.package && u.HttpUtil.POST(c.ALConfig.ReportMarketDomain + d[509890], { pkgs: a.referrerInfo.package, platform: c.ALConfig.GamePlatform }, function (e) {
            e.isSucc ? e.data && 0 < e.data.length && (m.AdsPos = e.data[0], m.publicParam.ads_pos = e.data[0]) : console.warn(d[509891], e.reason);
          })) : (e = d[509828], t = "0"));
        }
      } catch (e) {
        console.log(d[509892], e);
      }if (this.Ads = e, this.AdsPos = t, m.publicParam.ads = e, m.publicParam.ads_pos = t, 1044 == d.ALData.scene || 1007 == d.ALData.scene || 1036 == d.ALData.scene || 1008 == d.ALData.scene) {
        var s = d.ALData.opts.query;d.ALData.topInviter = s.a_top_inviter || "0", d.ALData.level = s.a_level || 1;
      }
    }
  }, m._initLevelData = function () {
    var e = null;if (1044 == d.ALData.scene || 1007 == d.ALData.scene || 1036 == d.ALData.scene || 1008 == d.ALData.scene) {
      var t = d.ALData.opts.query;e = { appid: c.ALConfig.appId, openid: c.ALConfig.openId, level: t.a_level || "", inviter: t.a_inviter || "", top_inviter: t.a_top_inviter || "" };
    } else e = { appid: c.ALConfig.appId, openid: c.ALConfig.openId };this.qz_gdt ? e.adsinfo = this.Ads + "|" + this.AdsPos + "|" + this.qz_gdt : e.adsinfo = this.Ads + "|" + this.AdsPos, m.ad_appid && (e.ad_appid = m.ad_appid), u.HttpUtil.GET(c.ALConfig.ReportMarketDomain + d[509893], e, function (e) {
      if (e.isSucc) {
        var t = e.data.info;f.ALUtil.LOG(d[509894], e.data), f.ALUtil.LOG(d[509895], t), d.ALData.topInviter = t.top_inviter || "0", d.ALData.inviter = c.ALConfig.openId, d.ALData.level = t.share_level ? parseInt(t.share_level) + 1 : 1, d.ALData.score = t.score ? parseInt(t.score) : 0, i.ALIntercept._execOnShareApp();
      } else f.ALUtil.LOG(d[509896], e.reason);
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
        console.warn(d[509897], e);
      }t && d[509898] !== t || (t = d[480110]);
    }this.reportPrefix = d[509899], this.reportDevice2Sence = e + "|" + t + "|" + c.ALConfig.version + "|" + a + d[509900] + n + "||" + o + "|" + c.ALConfig.appId + "|" + this.Ads + "|" + this.AdsPos + "|", m.publicParam.gamePlatform = c.ALConfig.GamePlatform, m.publicParam.platform = r, m.publicParam.device = e, m.publicParam.channel = t, m.publicParam.version = c.ALConfig.version, m.publicParam.os = a, m.publicParam.language = n, m.publicParam.wx_version = o, m.publicParam.project_id = c.ALConfig.appId, m.publicParam.qz_gdt = this.qz_gdt, m.publicParam.benchmarkLevel = i;
  }, m._getCurrentDate = function () {
    var e = new Date(),
        t = e.getFullYear().toString(),
        a = (e.getMonth() + 1).toString(),
        n = e.getDate().toString();return 1 === a.length && (a = "0" + a), 1 === n.length && (n = "0" + n), t + a + n;
  }, m._getTimeStamp = function () {
    return Math.round(Date.now() / 1e3);
  }, m.publicParam = { gamePlatform: "", qz_gdt: "", platform: "", sdkVersion: c.ALConfig.sdkVersion, report_type: "", typeStr: "", device: "", channel: "", version: "", os: "", language: "", wx_version: "", project_id: "", ads: "", ads_pos: "", ply: "", node: "", open_id: "", type: "", sub_type: "", value: "", extra: "", uuid: "", p_open_id: "", gender: "", video_sence: "", query_str: "", benchmarkLevel: -1, zone_id: "", role_id: "", is_gs: 0 }, m.reportCheck = { appid: "", openid: "", startTime: "", level: "", video_sence: "", video_play: 0, payAmount: 0, gameTime: 0, gameShow: "", sharePic: "", jumpData: "" }, m.CustomNode = [], m.CustomDataCache = [], m.Ads = "", m.AdsPos = "", m.reportPrefix = "", m.reportDevice2Sence = "", m.qz_gdt = "", m.ad_appid = "", m.appPlatform = "", m._inited = !1, m.startTime = 0, m.CusRepLastTime = 0, m.LastCustomNode = -1, m);function m() {}s.ALReport = a, s.REPORT_TYPE_ENUM = { REPORT_TYPE_SHOW: d[509901], REPORT_TYPE_LOGIN: d[509902], REPORT_TYPE_OPEN_ID: d[509903], REPORT_TYPE_AUTH: d[509904], REPORT_TYPE_LIKE_CLICK: d[509905], REPORT_TYPE_LIKE_SHOW: d[509906], REPORT_TYPE_DRAWER_CLICK: d[509907], REPORT_TYPE_DRAWER_SHOW: d[509908], REPORT_TYPE_CLICK_SUCCESS: d[509909], REPORT_TYPE_SHARE_READY: d[509910], REPORT_TYPE_SHARE_SUCCESS: d[509911], REPORT_TYPE_GAME_DURATION: d[509912], REPORT_TYPE_SCENE_CLICK: d[509913], REPORT_TYPE_SCENE_CLICK_SUCCESS: d[509914], REPORT_TYPE_PAY_MENT: d[509915], REPORT_TYPE_PAY_MENT_START: d[509916], REPORT_TYPE_PAY_MENT_ENTER: d[509917], REPORT_TYPE_PAY_MENT_IOS: d[509918], REPORT_TYPE_MORE_SHOW: d[486292], REPORT_TYPE_MORE_CLICK: d[509919], REPORT_TYPE_MORE_CLICK_O: d[509920], REPORT_TYPE_MORE_LONG_CLICK_O: d[509921], REPORT_TYPE_VIDEO_OPEN: d[509922], REPORT_TYPE_VIDEO_WATCH_FAIL: d[509923], REPORT_TYPE_VIDEO_WATCH_NORMAL: d[509924], REPORT_TYPE_GAME_BOX_SHOW: d[509925], REPORT_TYPE_GAME_BOX_CLICK: d[509926], REPORT_TYPE_GAME_BOX_BANNER_CLICK: d[509927], REPORT_TYPE_VIDEO_BTN_SHOW: d[509928], REPORT_TYPE_VIDEO_CLICK: d[509929], REPORT_TYPE_SHARE_BTN_SHOW: d[509930], REPORT_TYPE_SHARE_CLICK: d[509931], REPORT_TYPE_TIME: d[509932], REPORT_TYPE_QQ_SUBSCRIBE: d[509933], REPORT_TYPE_QQ_UNSUBSCRIBE: d[509934] };
}, function (e, t, a) {
  "use strict";

  var i = this && this.__assign || function () {
    return (i = Object.assign || function (e) {
      for (var t, a = 1, n = arguments.length; a < n; a++) for (var o in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);return e;
    }).apply(this, arguments);
  };Object.defineProperty(t, d[481256], { value: !0 });var c = a(1),
      u = a(2),
      f = a(3),
      n = a(6),
      p = a(0),
      o = (s.EmptyFn = function () {
    u.ALUtil.LOG(d[509935]);
  }, s.init = function () {
    this._inited || (this._inited = !0, u.ALUtil.LOG(d[509936]), u.ALUtil.runEnvNotExist() || (this._pay(), this._shareApp(), this._execShowHide(), this._onShareApp(), this._rewardedVideoAd(), this._qqSubscribe(), this._wxSubscribe(), this._getUserProfile(), u.ALUtil.LOG(d[509937])));
  }, s._execShowHide = function () {
    s.TimeShow = Date.now(), s.Params = i(i({}, f.ALReport.publicParam), { report_type: d[481552], typeStr: f.REPORT_TYPE_ENUM.REPORT_TYPE_GAME_DURATION, value: "" }), p.ALConfig.RunEnv.onShow(function (e) {
      s.IsOnShow = !0, s.TimeShow = Date.now(), s.FirstOnShow ? s.FirstOnShow = !1 : s.OnHideAllTime += s.TimeShow - s.OnHideTimestamp, n.ALSDK.paycallback(e), n.ALSDK.handleNaviTime(e), u.ALUtil.LOG(d[509938], e);
    }), p.ALConfig.RunEnv.onHide(function (e) {
      s.IsOnShow = !1, s.OnHideTimestamp = Date.now();var t = Math.ceil((Date.now() - s.TimeShow) / 1e3);0 < t && (f.ALReport.reportCheck.gameTime += t, s.Params.value = t.toString(), f.ALReport.reportDataToMarketNew(s.Params)), u.ALUtil.LOG(d[509939]);
    }), p.ALConfig.GamePlatform != c.PlatformEnum.WeChat && p.ALConfig.GamePlatform != c.PlatformEnum.QQ || (p.ALConfig.RunEnv.getNetworkType({ success: function (e) {
        u.ALUtil.LOG(d[509940], e), s.NetworkType = e.networkType;
      } }), p.ALConfig.RunEnv.onNetworkStatusChange(function (e) {
      u.ALUtil.LOG(d[509941], e), s.NetworkType = e.networkType;
    }));
  }, s._qqSubscribe = function () {
    if (!u.ALUtil.qqNotExist() && p.ALConfig.RunEnv.subscribeAppMsg) {
      var t = p.ALConfig.RunEnv.subscribeAppMsg;Object.defineProperty(p.ALConfig.RunEnv, d[509942], { configurable: !0, enumerable: !0, writable: !0, value: function () {
          var e = arguments[0] || {},
              n = e.success || null,
              o = e.subscribe,
              r = e.tmplIds || null;return e.success = function (e) {
            if (u.ALUtil.LOG(d[509943], e), r) {
              for (var t = 0; t < r.length; t++) if (e[r[t]] && d[480715] == e[r[t]]) {
                var a = i(i({}, f.ALReport.publicParam), { report_type: d[509944], typeStr: f.REPORT_TYPE_ENUM.REPORT_TYPE_QQ_SUBSCRIBE, extra: r[t] });f.ALReport.reportDataToMarketNew(a);
              }
            } else o ? f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_QQ_SUBSCRIBE) : f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_QQ_UNSUBSCRIBE);n && n(e);
          }, t.apply(this, arguments);
        } }), s._qqSubscribe = s.EmptyFn;
    }
  }, s._wxSubscribe = function () {
    if (!(u.ALUtil.wxNotExist() || u.ALUtil.wxExist() && !p.ALConfig.RunEnv.requestSubscribeMessage)) {
      var t = p.ALConfig.RunEnv.requestSubscribeMessage;Object.defineProperty(p.ALConfig.RunEnv, d[509945], { configurable: !0, enumerable: !0, writable: !0, value: function () {
          var e = arguments[0] || {},
              n = e.success || null,
              o = e.tmplIds || [];return e.success = function (e) {
            u.ALUtil.LOG(d[509946], e);for (var t = 0; t < o.length; t++) if (e[o[t]] && d[480715] == e[o[t]]) {
              var a = i(i({}, f.ALReport.publicParam), { report_type: d[509944], typeStr: f.REPORT_TYPE_ENUM.REPORT_TYPE_QQ_SUBSCRIBE, extra: o[t] });f.ALReport.reportDataToMarketNew(a);
            }n && n(e);
          }, t.apply(this, arguments);
        } }), s._wxSubscribe = s.EmptyFn;
    }
  }, s._rewardedVideoAd = function () {
    if (!u.ALUtil.runEnvNotExist() && p.ALConfig.RunEnv.createRewardedVideoAd) {
      console.log(d[509947]);var o = p.ALConfig.RunEnv.createRewardedVideoAd;Object.defineProperty(p.ALConfig.RunEnv, d[509948], { configurable: !0, enumerable: !0, writable: !0, value: function () {
          var e = o.apply(this, arguments),
              t = arguments[0] || {};if (s.VideoId = t.adUnitId, p.ALConfig.GamePlatform === c.PlatformEnum.Vivo && (s.VideoId = t.posId), e.isIntercept) return e;e.isIntercept = !0;var a = e.show;Object.defineProperty(e, d[481943], { configurable: !0, enumerable: !0, writable: !0, value: function () {
              return u.ALUtil.LOG(d[509949]), f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_OPEN, s.VideoId), a.apply(this, arguments);
            } }), e.onClose(s.VideoClose);var n = e.offClose;return Object.defineProperty(e, d[509950], { configurable: !0, enumerable: !0, writable: !0, value: function () {
              u.ALUtil.LOG(d[509951]), n.apply(this, arguments), 0 == arguments.length && this.onClose(s.VideoClose);
            } }), e;
        } }), s._rewardedVideoAd = s.EmptyFn;
    }
  }, s.VideoClose = function (e) {
    u.ALUtil.LOG(d[509952], e), void 0 === e || e && e.isEnded ? f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_WATCH_NORMAL, s.VideoId) : f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_VIDEO_WATCH_FAIL, s.VideoId);
  }, s._pay = function () {
    if (p.ALConfig.GamePlatform == c.PlatformEnum.WeChat || p.ALConfig.GamePlatform == c.PlatformEnum.QQ || p.ALConfig.GamePlatform == c.PlatformEnum.TouTiao) {
      var e = d[509953],
          r = p.ALConfig.RunEnv.requestMidasPayment;u.ALUtil.ttExist() && (e = d[509954], r = p.ALConfig.RunEnv.requestGamePayment), Object.defineProperty(p.ALConfig.RunEnv, e, { configurable: !0, enumerable: !0, writable: !0, value: function () {
          f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_PAY_MENT_START);var e = arguments[0] || {},
              t = "0";t = u.ALUtil.qqExist() ? e.starCurrency : e.buyQuantity;var a = null,
              n = e.success || null;e.success = function (e) {
            a && (u.ALUtil.LOG(d[509955]), clearInterval(a)), u.ALUtil.LOG(d[509956], e), t += "|1", f.ALReport.reportPay(t), n && n(e);
          };var o = e.fail || null;return e.fail = function (e) {
            a && (u.ALUtil.LOG(d[509955]), clearInterval(a)), u.ALUtil.LOG(d[509957], e), t += "|0", f.ALReport.reportPay(t), o && o(e);
          }, p.ALConfig.GamePlatform == c.PlatformEnum.WeChat && p.ALConfig.AutoPayCb && (a = setInterval(function () {
            a && (u.ALUtil.LOG(d[509955]), clearInterval(a)), n && (u.ALUtil.LOG(d[509958]), n({ sdkPaySuc: !0, errMsg: d[509959] }));
          }, 13e3)), r.apply(this, arguments);
        } }), s._pay = s.EmptyFn;
    }
  }, s._execOnShareApp = function () {
    s.InfoGot = !0, s.ShareParamFunc && (p.ALConfig.RunEnv.offShareAppMessage(s.ShareParamFunc), p.ALConfig.RunEnv.onShareAppMessage(s.ShareParamFunc));
  }, s._shareApp = function () {
    if (p.ALConfig.GamePlatform == c.PlatformEnum.WeChat || p.ALConfig.GamePlatform == c.PlatformEnum.QQ || p.ALConfig.GamePlatform == c.PlatformEnum.TouTiao) {
      var t = p.ALConfig.RunEnv.shareAppMessage;Object.defineProperty(p.ALConfig.RunEnv, d[509960], { configurable: !0, enumerable: !0, writable: !0, value: function () {
          var e = arguments[0] || {};return s._handleShareParam(e), e.query = e.query + d[509961] + c.ALData.inviter + d[509962] + c.ALData.level + d[509963] + c.ALData.topInviter, u.ALUtil.LOG(d[509964], e.query), t.apply(this, arguments);
        } }), s._shareApp = s.EmptyFn;
    }
  }, s._onShareApp = function () {
    if (p.ALConfig.GamePlatform == c.PlatformEnum.WeChat || p.ALConfig.GamePlatform == c.PlatformEnum.QQ || p.ALConfig.GamePlatform == c.PlatformEnum.TouTiao) {
      var e = p.ALConfig.RunEnv.onShareAppMessage;Object.defineProperty(p.ALConfig.RunEnv, d[509965], { configurable: !0, enumerable: !0, writable: !0, value: function () {
          u.ALUtil.LOG(d[509966]);var t = arguments[0];return t ? s.InfoGot ? (u.ALUtil.LOG(d[509967]), arguments[0] = function () {
            var e = t();return s._handleShareParam(e, !1), e.query = e.query + d[509961] + c.ALData.inviter + d[509962] + c.ALData.level + d[509963] + c.ALData.topInviter, u.ALUtil.LOG(d[509968], e.query), u.ALUtil.ttExist() ? { title: e.title, imageUrl: e.imageUrl, templateId: e.templateId, query: e.query } : { title: e.title, imageUrl: e.imageUrl, imageUrlId: e.imageUrlId, query: e.query };
          }) : (s.ShareParamFunc = t, u.ALUtil.LOG(d[509969])) : u.ALUtil.LOG(d[509970]), e.apply(this, arguments);
        } });var t = p.ALConfig.RunEnv.offShareAppMessage;Object.defineProperty(p.ALConfig.RunEnv, d[509971], { configurable: !0, enumerable: !0, writable: !0, value: function () {
          t.apply(this, arguments), u.ALUtil.LOG(d[509972]);
        } }), s._onShareApp = s.EmptyFn;
    }
  }, s._handleShareParam = function (e, t) {
    void 0 === t && (t = !0);var a = e.query || "",
        n = e.imageUrl,
        o = e.imageUrlId,
        r = e.templateId;void 0 !== e.sceneid && AladinSDK.initShareData(e.sceneid);var i = u.ALUtil._parseQueryString(a);u.ALUtil.LOG(d[509973], i), c.ALData.shareScene = i.shareScene || 0;var p = d[481258];if (!i.Ads) {
      if (c.ALData.curShareData && t) {
        var s = c.ALData.curShareData;e.imageUrl = s.url, e.title = s.desc, p = s.shareid;
      } else if (o) p = o;else if (r) p = r;else if (n) {
        var l = u.ALUtil.getUrlFileName(n);u.ALUtil.LOG(d[509974], n, l), p = 0 !== n.indexOf(d[509975]) && -1 === l.indexOf(".") ? d[509976] : l.replace(".", "_");
      }var d = d[509977] + p;u.ALUtil.LOG(d[509978], d), e.query = a + d;
    }t && (f.ALReport.reportCheck.sharePic = p, f.ALReport.report(f.REPORT_TYPE_ENUM.REPORT_TYPE_SHARE_READY, p));
  }, s._getUserProfile = function () {
    if (p.ALConfig.GamePlatform == c.PlatformEnum.WeChat) try {
      var e = p.ALConfig.RunEnv.getSystemInfoSync().SDKVersion;if (u.ALUtil.convertVersionStringToNumber(e) < u.ALUtil.convertVersionStringToNumber(d[509979])) return void console.log(d[509980] + e);var t = p.ALConfig.RunEnv.getUserProfile;if (!t) return void console.error(d[509981]);Object.defineProperty(p.ALConfig.RunEnv, d[509982], { configurable: !0, enumerable: !0, writable: !0, value: function () {
          u.ALUtil.LOG(d[509983]);var e = arguments[0],
              n = e.success;return e.success = function (e) {
            var t = e.userInfo,
                a = {};c.UserInfoData.NickName = a.nickName = t.nickName || "", c.UserInfoData.Gender = a.gender = void 0 !== t.gender ? e.userInfo.gender : 0, c.UserInfoData.AvatarUrl = a.avatarUrl = t.avatarUrl || "", c.UserInfoData.Country = a.country = t.country || "", c.UserInfoData.Province = a.province = t.province || "", c.UserInfoData.City = a.city = t.city || "", c.UserInfoData.Language = a.language = t.language || "", f.ALReport.reportDataToServer(a), n && n(e);
          }, t.apply(this, arguments);
        } });
    } catch (e) {
      console.error(d[509984]);
    }
  }, s._inited = !1, s.IsOnShow = !0, s.NetworkType = "", s.TimeShow = null, s.Params = null, s.FirstOnShow = !0, s.OnHideTimestamp = 0, s.OnHideAllTime = 0, s.VideoId = null, s.InfoGot = !1, s.ShareParamFunc = null, s);function s() {}t.ALIntercept = o;
}, function (e, o, t) {
  "use strict";

  Object.defineProperty(o, d[481256], { value: !0 });var s = t(2),
      l = t(0),
      d = t(1);o.METHOD_GET = d[480731], o.METHOD_POST = d[480604];var a = (n.GET = function (e, t, a, n) {
    this._request(e, o.METHOD_GET, t, a, n);
  }, n.POST = function (e, t, a, n) {
    this._request(e, o.METHOD_POST, t, a, n);
  }, n._request = function (e, t, a, n, o) {
    if (s.ALUtil.LOG(d[509985], a), a.event_time = new Date().getTime(), l.ALConfig.GamePlatform == d.PlatformEnum.WeChat || l.ALConfig.GamePlatform == d.PlatformEnum.QQ || l.ALConfig.GamePlatform == d.PlatformEnum.TouTiao || l.ALConfig.GamePlatform == d.PlatformEnum.Vivo) {
      d[480731] == t && a && (e += encodeURI("?" + this.objParam2PostString(a))), s.ALUtil.LOG(d[509986], e);var r = { url: e, method: t, success: function (e) {
          s.ALUtil.LOG(d[509987], e);try {
            var t = e.data;return t && 0 !== t.code && 0 !== t.ret ? (s.ALUtil.LOG(d[509988]), void n({ isSucc: !1, reason: t.msg })) : void n({ isSucc: !0, data: t ? t.data : null });
          } catch (e) {
            return s.ALUtil.LOG(d[509989], e), void n({ isSucc: !1, reason: d[509990] });
          }
        }, fail: function (e) {
          s.ALUtil.LOG(d[509991], e), n({ isSucc: !1, reason: d[509992] });
        } };this.Authorization ? r.header = { "content-type": d[480740], Authorization: this.Authorization } : r.header = { "content-type": d[480740] }, o && o[d[509993]] && d[480740] != o[d[509993]] && (r.header[d[509993]] = o[d[509993]]), a && (r.data = a), l.ALConfig.RunEnv.request(r);
    } else {
      var i = new XMLHttpRequest(),
          p = null;d[480731] == t && a && (e += encodeURI("?" + this.objParam2PostString(a))), i.open(t, e, !0), o && o[d[509993]] && d[480740] != o[d[509993]] ? (i.setRequestHeader(d[509993], o[d[509993]]), a && (p = a)) : (i.setRequestHeader(d[509993], d[480740]), p = null == a ? null : encodeURI(this.objParam2PostString(a))), this.Authorization && i.setRequestHeader(d[509994], this.Authorization), i.onreadystatechange = function () {
        if (4 === i.readyState && 199 < i.status && i.status < 400) {
          s.ALUtil.LOG(d[509987], i.responseText);try {
            var e = i.responseText ? JSON.parse(i.responseText) : null;return e && 0 !== e.code && 0 !== e.ret ? (s.ALUtil.LOG(d[509988]), void n({ isSucc: !1, reason: e.msg })) : void n({ isSucc: !0, data: e ? e.data : null });
          } catch (e) {
            return s.ALUtil.LOG(d[509989], e), void n({ isSucc: !1, reason: d[509990] });
          }
        }
      }, i.onerror = function (e) {
        s.ALUtil.LOG(d[509995], e), n({ isSucc: !1, reason: d[509992] });
      }, i.ontimeout = function (e) {
        s.ALUtil.LOG(d[509996], e), n({ isSucc: !1, reason: d[509997] });
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
  };Object.defineProperty(t, d[481256], { value: !0 });var y = a(0),
      C = a(2),
      f = a(3),
      m = a(1),
      h = a(5),
      n = (I.init = function (e, t, a, n) {
    this._inited || (this._inited = !0, "" == e && console.warn(d[509998]), y.ALConfig.appId = e, y.ALConfig.version = t, f.ALReport.reportCheck.appid = e, y.ALConfig.GamePlatform == m.PlatformEnum.WeChat && h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[509999], { appid: y.ALConfig.appId }, function (e) {
      e.isSucc ? (C.ALUtil.LOG(d[510000], e.data), m.ALData.shareData = e.data) : C.ALUtil.LOG(d[510001], e.reason);
    }));
  }, I.toMiniProgram = function (e, t, a, n, o, r, i) {
    var p = C.ALUtil.parseNavigateParam(e),
        s = e[14] || e[4],
        l = e[11] || "",
        d = P(P({}, f.ALReport.publicParam), { target_appid: p.target_appid, report_type: d[488926], typeStr: t, diff_key: s, extra_data: a, scene: n }),
        c = P(P({}, f.ALReport.publicParam), { target_appid: p.target_appid, report_type: d[510002], typeStr: f.REPORT_TYPE_ENUM.REPORT_TYPE_SCENE_CLICK_SUCCESS, extra_data: a, scene: n });if (C.ALUtil.LOG(d[510003], e), C.ALUtil.LOG(d[510004], p.appId), C.ALUtil.LOG(d[510005], p.path), C.ALUtil.LOG(d[510006], p.extraData), C.ALUtil.LOG(d[510007], l), C.ALUtil.LOG(d[510008], y.ALConfig.envVersion), !C.ALUtil.runEnvNotExist()) {
      var u = e[6] || null;f.ALReport.reportDataToMarketNew(d), !u || y.ALConfig.RunEnv.navigateToMiniProgram || y.ALConfig.RunEnv.navigateToMiniGame ? y.ALConfig.GamePlatform == m.PlatformEnum.WeChat ? y.ALConfig.RunEnv.navigateToMiniProgram({ appId: p.appId, path: p.path, extraData: p.extraData, envVersion: y.ALConfig.envVersion, success: function (e) {
          console.log(d[510009], Date.now(), p.appId), I.NavigeteTime = Date.now(), I.NavigeteAppid = p.appId, f.ALReport.reportCheck.jumpData = c, f.ALReport.reportDataToMarketNew(c), o && o(e);
        }, fail: function (e) {
          C.ALUtil.LOG(d[510010], e), e && e.errMsg && -1 === e.errMsg.indexOf(d[480578]) && u && I._preview(u, c), r && r(e);
        }, complete: function (e) {
          i && i(e);
        } }) : y.ALConfig.GamePlatform == m.PlatformEnum.Oppo && (l || console.warn(d[510011]), y.ALConfig.RunEnv.navigateToMiniGame({ pkgName: l, path: p.path, extraData: p.extraData, success: function (e) {
          console.log(d[510012], Date.now(), p.appId), I.NavigeteTime = Date.now(), I.NavigeteAppid = p.appId, f.ALReport.reportCheck.jumpData = c, f.ALReport.reportDataToMarketNew(c), o && o(e);
        }, fail: function (e) {
          C.ALUtil.LOG(d[510013], e), e && e.errMsg && -1 === e.errMsg.indexOf(d[480578]) && u && I._preview(u, c), r && r(e);
        }, complete: function (e) {
          i && i(e);
        } })) : I._preview(u, c);
    }
  }, I.handleNaviTime = function (e) {
    if (C.ALUtil.LOG(d[510014], e, I.NavigeteAppid), e && 1038 == e.scene && I.NavigeteAppid && I.NavigeteTime) {
      var t = Math.ceil((Date.now() - I.NavigeteTime) / 1e3);if (C.ALUtil.LOG(d[510015], t), 15 <= t) {
        C.ALUtil.LOG(d[510016], I.NavigeteAppid);var a = { appid: y.ALConfig.appId, openid: y.ALConfig.openId, targetAppid: I.NavigeteAppid };return void h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[510017], a, function (e) {
          e.isSucc || console.warn(d[510018], e.reason);
        });
      }
    }I.NavigeteAppid = "", I.NavigeteTime = null;
  }, I._preview = function (e, t) {
    y.ALConfig.RunEnv.previewImage({ urls: [e], success: function () {
        C.ALUtil.LOG(d[510019]), f.ALReport.reportDataToMarketNew(t);
      }, fail: function (e) {
        console.warn(d[510020], e);
      } });
  }, I.requestModuleData = function (a, n, e, t) {
    void 0 === e && (e = 400), void 0 === t && (t = "");var o = { appid: y.ALConfig.appId, module: a, openid: y.ALConfig.openId, size: e, nickName: m.UserInfoData.NickName, avatarUrl: m.UserInfoData.AvatarUrl, country: m.UserInfoData.Country, gender: m.UserInfoData.Gender, language: m.UserInfoData.Language, province: m.UserInfoData.Province, scene: t };d[510021] === a ? m.ALData.iconData : m.ALData.moreData, h.HttpUtil.GET(y.ALConfig.ReportMarketDomain + d[510022], o, function (e) {
      if (e.isSucc) {
        var t = I.handleHttpData(e);d[510021] === a ? m.ALData.iconData = t : d[510023] === a && (m.ALData.moreData = t), n(t);
      } else console.warn(d[510024], e.reason, a);
    });
  }, I.handleHttpData = function (e) {
    var t = e.data.values || [],
        a = e.data.base;if (a && 0 < t.length) for (var n = 0, o = t.length; n < o; n++) {
      var r = t[n];r[4] = a + r[4];
    }return t;
  }, I.reportFlowShow = function (e) {
    var t = P(P({}, f.ALReport.getPublicParam()), { appid: y.ALConfig.appId, openid: y.ALConfig.openId, gamelist: e });h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[510025], t, function (e) {
      e.isSucc || C.ALUtil.LOG(d[510026], e.reason);
    });
  }, I.paycheck = function (e, t) {
    var a = { game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, limit: e },
        n = { switch: 0, msg: "" };return d[480110] == f.ALReport.publicParam.platform ? (n.switch = 1, void t(n)) : "" == y.ALConfig.appId || "" == y.ALConfig.openId ? (console.warn(d[510027]), n.msg = d[510028], void t(n)) : void h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[510029], a, function (e) {
      return e.isSucc ? n.switch = 1 : n.msg = e.reason, void t(n);
    });
  }, I.pay = function (e, t, p, s, l, d, c, a, n, u, f, m, o) {
    I.oriPayParam = { appid: e, openid: t, amount: p, pid: s, zoneId: l, orderTitle: d, orderDesc: c, imgUrl: a, limit: n, params: u, cb: f, env: m, extraParams: o }, y.ALConfig.appId = e, y.ALConfig.openId = t;var _ = o.zone_id ? o.zone_id : 0,
        A = o.role_id ? o.role_id : 0,
        L = o.model_id ? o.model_id : 0,
        g = o.package_id ? o.package_id : "",
        r = { appid: y.ALConfig.appId, openid: y.ALConfig.openId, price: p, title: d, desc: c, pid: s, params: u, img: a, zoneid: l, limit: n, zone_id: _, role_id: A, model_id: L, package_id: g };I.invalidAppid && 0 == I.invalidAppid.indexOf("wx") && (r.invalid_appid = I.invalidAppid, I.invalidAppid = "");var v = { ret: 0, msg: "", pid: s, payMethod: 0, amount: p, params: u, payCount: 1, qrCode: "" };return "" == y.ALConfig.appId || "" == y.ALConfig.openId ? (console.error(d[510027]), v.msg = d[510028], void f(v)) : 1 == I.PayStatus ? (v.msg = d[510030], void f(v)) : (I.PayStatus = 1, I.RetCallback = f, void h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[510031], r, function (e) {
      if (!e.isSucc) return v.msg = d[510032] + e.reason, I.PayMethod = 0, I.PayStatus = 0, void f(v);console.log(d[510033], P({}, e.data)), I.PayMethod = e.data.pay_method, v.payMethod = e.data.pay_method, I.PayId = e.data.pay_id, I.RetObj = v;var t = e.data.pre_img,
          o = e.data.offer_id,
          a = e.data.appid,
          r = e.data.buy_quantity,
          n = e.data.qr_code,
          i = e.data.order_id;switch (i && (m = e.data.env, I.oriPayParam.env = e.data.env), e.data.pay_method) {case 1:
          y.ALConfig.RunEnv.navigateToMiniProgram({ appId: a, path: d[509841], envVersion: y.ALConfig.envVersion, extraData: { appid: y.ALConfig.appId, openid: y.ALConfig.openId, orderid: I.PayId, amount: p, params: u, orderTitle: d, orderDesc: c, a_pid: s }, success: function (e) {
              C.ALUtil.LOG(d[510034], e), I.PayStatus = 2;
            }, fail: function (e) {
              C.ALUtil.LOG(d[510035], e), v.msg = d[510036] + e.errMsg, I.PayMethod = 0, I.PayStatus = 0, f(v);
            }, complete: function (e) {
              C.ALUtil.LOG(d[510037], e);
            } });break;case 2:
          y.ALConfig.RunEnv.openCustomerServiceConversation({ sessionFrom: d[510038] + I.PayId, showMessageCard: !0, sendMessageTitle: d[497583], sendMessagePath: d[510039], sendMessageImg: t, success: function (e) {
              C.ALUtil.LOG(d[510040], e), I.PayStatus = 2;
            }, fail: function (e) {
              C.ALUtil.LOG(d[510041], e), v.msg = d[510042] + e.errMsg, I.PayMethod = 0, I.PayStatus = 0, f(v);
            }, complete: function (e) {
              C.ALUtil.LOG(d[510043], e);
            } });break;case 3:
          y.ALConfig.RunEnv.requestMidasPayment({ mode: d[510044], env: m, offerId: o, currencyType: d[510045], platform: d[480110], buyQuantity: r, zoneId: l, success: function (e) {
              if (C.ALUtil.LOG(d[510046], e), v.ret = 1, v.msg = d[510046], e && e.sdkPaySuc ? v.ret = 2 : I.reportMidasPayStatus({ game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, order_id: i, status: d[480428], offerId: o, buyQuantity: r, zoneId: l }), i) {
                var t = { game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, order_id: i, sdk_pay: 0, tryNum: 0, zone_id: _, role_id: A, model_id: L, package_id: g };e && e.sdkPaySuc && (t.sdk_pay = 1);var a = new Date().getTime() + 6e5,
                    n = function () {
                  t.tryNum++, y.ALConfig.RunEnv.request({ url: y.ALConfig.ReportMarketDomain + d[510047], method: d[480604], data: t, timeout: 15e3, header: { "content-type": d[480740] }, success: function (e) {
                      return e && e.data && 200 == e.statusCode ? (0 == e.data.ret ? C.ALUtil.LOG(d[510048], e) : (v.msg = d[510049] + e.data.msg, v.ret = 0), void f(v)) : (C.ALUtil.LOG(d[510050], e), a > new Date().getTime() ? void n() : (v.msg = d[510051], v.ret = 0, void f(v)));
                    }, fail: function (e) {
                      if (C.ALUtil.LOG(d[510052], e), !(a > new Date().getTime())) return v.msg = d[510051], v.ret = 0, void f(v);n();
                    } });
                };n();
              } else f(v);
            }, fail: function (e) {
              C.ALUtil.LOG(d[510053], e, m, o, r, l), v.msg = d[510049] + e.errMsg, v.ret = 0, I.reportMidasPayStatus({ game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, order_id: i, status: d[506811], offerId: o, buyQuantity: r, zoneId: l }), f(v);
            }, complete: function (e) {
              I.PayMethod = 0, I.PayStatus = 0, I.reportMidasPayStatus({ game_appid: y.ALConfig.appId, game_openid: y.ALConfig.openId, order_id: i, status: d[487445], offerId: o, buyQuantity: r, zoneId: l }), C.ALUtil.LOG(d[510054], e);
            } });break;case 4:
          return n ? (v.qrCode = n, v.ret = 1, v.msg = d[510055]) : (v.ret = 0, v.msg = d[510056]), I.PayStatus = 0, I.PayMethod = 0, void f(v);default:
          return v.msg = d[510057], void f(v);}
    }));
  }, I.reportMidasPayStatus = function (t) {
    h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[510058], t, function (e) {
      C.ALUtil.LOG(d[510059], t, e);
    });
  }, I.paycallback = function (e) {
    if (C.ALUtil.LOG(d[480697], I.PayMethod, I.PayStatus, I.PayId, e), e && e.referrerInfo && e.referrerInfo.extraData && 1 == I.PayMethod && 2 == I.PayStatus) return e.referrerInfo.extraData.aladinPayStatus ? (I.RetObj.ret = 1, I.RetObj.msg = d[510060], C.ALUtil.LOG(d[510060]), I.RetCallback(I.RetObj), I.PayMethod = 0, void (I.PayStatus = 0)) : (I.RetObj.ret = 0, I.RetObj.msg = d[510061], C.ALUtil.LOG(d[510061]), I.PayMethod = 0, I.PayStatus = 0, void (e.referrerInfo && e.referrerInfo.extraData && e.referrerInfo.extraData.mchLimit && e.referrerInfo.extraData.pay_appid ? (I.invalidAppid = e.referrerInfo.extraData.pay_appid, I.pay(I.oriPayParam.appid, I.oriPayParam.openid, I.oriPayParam.amount, I.oriPayParam.pid, I.oriPayParam.zoneId, I.oriPayParam.orderTitle, I.oriPayParam.orderDesc, I.oriPayParam.imgUrl, I.oriPayParam.limit, I.oriPayParam.params, I.oriPayParam.cb, I.oriPayParam.env, I.oriPayParam.extraParams)) : I.RetCallback(I.RetObj)));if (2 == I.PayMethod && 2 == I.PayStatus) return I.RetObj.ret = 1, I.RetObj.msg = d[510062], C.ALUtil.LOG(d[510062]), I.RetCallback(I.RetObj), I.PayMethod = 0, void (I.PayStatus = 0);if (y.ALConfig.GamePlatform === m.PlatformEnum.QQ && 0 < I.QQPayCbQueue.length) {
      for (var t = function (t) {
        var a = I.QQPayCbQueue[t],
            n = new Date().getTime() + 5e3,
            o = function () {
          h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[510063], { id: a.order_id }, function (e) {
            C.ALUtil.LOG(d[510064], t, new Date().getTime(), P({}, e)), e.isSucc ? (C.ALUtil.LOG(d[510062], a.order_id), a.ret_obj.ret = 1, a.ret_obj.msg = d[510065], a.cb(a.ret_obj)) : n > new Date().getTime() ? o() : (C.ALUtil.LOG(d[510066], e.reason, a.order_id), a.ret_obj.ret = 0, a.ret_obj.msg = d[510067] + e.reason, a.cb(a.ret_obj));
          });
        };o();
      }, a = 0; a < I.QQPayCbQueue.length; a++) t(a);I.QQPayCbQueue = [];
    }
  }, I.payinit = function () {
    I.RetObj = null, I.RetCallback = null, I.PayMethod = 0, I.PayStatus = 0;
  }, I.qqpay = function (e, t, a, n, o, r, i, p, s, l, d, c, u, f) {
    var m = { ret: 0, msg: "", params: i, starCurrency: 0, prepayId: "" },
        _ = { appid: e, openid: t, amt: a, goodid: n, good_num: o, params: i, limit: p, pid: s, title: l, zone_id: d, role_id: c, model_id: u, package_id: f };C.ALUtil.LOG(d[510068], _), h.HttpUtil.POST(y.ALConfig.ReportMarketDomain + d[510069], _, function (e) {
      if (!e.isSucc) return m.msg = d[510070] + e.reason, void r(m);C.ALUtil.LOG(d[510071], P({}, e.data));var t = e.data.pay_method;switch (t) {case 7:
          var a = e.data.prepay_id,
              n = e.data.starCurrency;if ("" == a || !C.ALUtil.isInteger(n) || n < 1) return m.msg = d[510072] + a + ":" + n, void r(m);m.starCurrency = n, m.prepayId = a, y.ALConfig.RunEnv.requestMidasPayment({ prepayId: a, starCurrency: n, setEnv: 0, success: function (e) {
              C.ALUtil.LOG(d[510073], e), m.ret = 1, r(m);
            }, fail: function (e) {
              C.ALUtil.LOG(d[510074], e), m.msg = d[510075] + e.errMsg, r(m);
            }, complete: function (e) {
              C.ALUtil.LOG(d[510076], e);
            } });break;case 8:
          if (a = e.data.prepay_id, m.prepayId = a, I.QQPayCbQueue.push({ pay_method: 8, cb: r, order_id: e.data.order_id, ret_obj: m }), "" == a) return m.msg = d[510072] + a, void r(m);var o = y.ALConfig.QQH5PayUrl + d[510077] + a;y.ALConfig.RunEnv.openUrl({ url: o, success: function (e) {
              C.ALUtil.LOG(d[510078], o, e);
            }, fail: function (e) {
              C.ALUtil.LOG(d[510079], o, e), m.msg = d[510080], r(m);
            }, complete: function (e) {
              C.ALUtil.LOG(d[510081], o, e);
            } });break;default:
          return m.msg = d[510082] + t, void r(m);}
    }, { "content-type": d[480605] });
  }, I._inited = !1, I.NavigeteTime = null, I.NavigeteAppid = "", I.RetObj = null, I.RetCallback = null, I.PayMethod = 0, I.PayStatus = 0, I.PayId = 0, I.oriPayParam = null, I.invalidAppid = "", I.QQPayCbQueue = [], I);function I() {}t.ALSDK = n, t.SDK_MODULE_LIKE = d[510021], t.SDK_MODULE_ICONS_CLICK = d[510083], t.SDK_MODULE_BANNER_CLICK = d[510084];
}, function (e, t, a) {
  "use strict";

  var r = this && this.__assign || function () {
    return (r = Object.assign || function (e) {
      for (var t, a = 1, n = arguments.length; a < n; a++) for (var o in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);return e;
    }).apply(this, arguments);
  };Object.defineProperty(t, d[481256], { value: !0 });var f = a(6),
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
      _.ALData.appIdListStr = e, t(_.ALData.appIdListStr), l.ALUtil.LOG(d[510085], e);
    }) : console.warn(d[510086]);
  }, i.init = function (e, t, a, n) {
    f.ALSDK.init(l.ALUtil.addAppidPrefix(e), t, a, n);
  }, i.login = function (r) {
    var i = { code: -1, msg: "", openid: "", token: "" };if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.QQ) {
      var p = 0,
          t = function () {
        p += 1, m.ALConfig.RunEnv.login({ success: function (e) {
            p = 0, l.ALUtil.LOG(d[510087], e.code);var t = _.ALData.opts.query,
                a = { code: e.code, appid: m.ALConfig.appId, codetype: m.ALConfig.GamePlatform, ads: s.ALReport.Ads, ads_pos: s.ALReport.AdsPos, share_level: t.a_level || "", inviter: t.a_inviter || "", top_inviter: t.a_top_inviter || "", ad_appid: t.ad_appid ? t.ad_appid : "", query: JSON.stringify(t), model: s.ALReport.publicParam.channel },
                n = 0,
                o = function () {
              n += 1, d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[510088], a, function (e) {
                e.isSucc ? (n = 0, l.ALUtil.LOG(d[510089], e), m.ALConfig.token = e.data.token, _.UserInfoData.Openid = m.ALConfig.openId = e.data.openid, _.UserInfoData.NewPlayer = e.data.is_new, _.UserInfoData.Gender = e.data.gender || "", _.UserInfoData.NickName = e.data.nickName || "", _.UserInfoData.SessionKey = e.data.session_key || "", _.UserInfoData.ReportOpenid = e.data.is_reported_openid, m.ALConfig.appId = e.data.appid, i.code = 0, i.openid = e.data.openid, i.token = e.data.token, r && r(i)) : n < 6 ? o() : (l.ALUtil.LOG(d[510090], e.reason), i.msg = e.reason, r && r(i));
              });
            };o();
          }, fail: function (e) {
            p <= 6 ? t() : (i.msg = e, r && r(i));
          } });
      };t();
    } else console.warn(d[510091]), i.msg = d[510092], r && r(i);
  }, i.getHttpData = function (t, a, n) {
    if ("" != m.ALConfig.appId) {
      var o = { ret: 0, data: [] };d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + t, r(r({}, a), { appid: m.ALConfig.appId, openid: m.ALConfig.openId }), function (e) {
        e.isSucc ? e.data && (o.data = e.data) : (console.warn(d[510093], t, a, e.reason), o.ret = -1), n(o);
      });
    } else console.warn(d[510094]);
  }, i.getUserInfo = function () {
    var e = {};return e.NickName = _.UserInfoData.NickName, e.AvatarUrl = _.UserInfoData.AvatarUrl, e.Country = _.UserInfoData.Country, e.Gender = _.UserInfoData.Gender, e.Language = _.UserInfoData.Language, e.Province = _.UserInfoData.Province, e.Model = _.UserInfoData.Model, e.NewPlayer = _.UserInfoData.NewPlayer, e.Openid = _.UserInfoData.Openid, e.City = _.UserInfoData.City, e.SessionKey = _.UserInfoData.SessionKey, e.ReportOpenid = _.UserInfoData.ReportOpenid, e;
  }, i.msgCheck = function (e, t, a) {
    var n = { ret: 0, msg: "", content: e };if ("" == m.ALConfig.appId) return console.warn(d[510094]), n.ret = -1, n.msg = d[510094], void t(n);d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[510095], { appid: m.ALConfig.appId, content: e, scene: a || _.MsgCheckSceneEnum.Comments, openid: m.ALConfig.openId }, function (e) {
      e.isSucc || (console.warn(d[510096], e.reason), n.ret = -1, n.msg = d[510096] + e.reason), t(n);
    });
  }, i.imgCheck = function (e, t) {
    var a = { ret: 0, msg: "" };if ("" == m.ALConfig.appId) return console.warn(d[510094]), a.ret = -1, a.msg = d[510094], void t(a);var n = new FormData();n.append(d[510097], e), n.append(d[510098], m.ALConfig.appId), d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[510099], n, function (e) {
      e.isSucc || (console.warn(d[510096], e.reason), a.ret = -1, a.msg = d[510096] + e.reason), t(a);
    }, { "content-type": d[510100] });
  }, i.openShop = function (e, t) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat && m.ALConfig.RunEnv.openCustomerServiceConversation({ sessionFrom: d[510101] + e, showMessageCard: !0, sendMessageTitle: d[510102], sendMessagePath: d[510039], sendMessageImg: t });
  }, i.reportData = function (e, t, a) {
    l.ALUtil.LOG(d[510103], t, a), "" != m.ALConfig.appId && "" != m.ALConfig.openId || console.warn(d[510104]);var n = r(r({}, s.ALReport.publicParam), { report_type: d[487206], typeStr: e, value: t, extra: a });s.ALReport.reportDataToMarketNew(n);
  }, i.initShareData = function (e) {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat) {
      if (_.ALData.shareData && 0 < _.ALData.shareData.length) {
        _.ALData.curShareData = null, _.ALData.curShareScene = "";var t = [];if (e) for (var a = 0; a < _.ALData.shareData.length; a++) _.ALData.shareData[a].sceneid == e && t.push(_.ALData.shareData[a]);else t = _.ALData.shareData;if (0 < t.length) {
          var n = Math.floor(Math.random() * t.length);_.ALData.curShareData = t[n], _.ALData.curShareScene = e || "", l.ALUtil.LOG(d[510105], _.ALData.curShareData, _.ALData.curShareScene);
        } else l.ALUtil.LOG(d[510106]);
      }
    } else console.warn(d[510086]);
  }, i.getToken = function () {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.QQ) return "" == m.ALConfig.token && console.warn(d[510107]), m.ALConfig.token;console.warn(d[510086]);
  }, i.paycheck = function (e, t) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat ? f.ALSDK.paycheck(e, t) : console.warn(d[510086]);
  }, i.pay = function (e, t, a, n, o, r, i, p, s, l, d, c) {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat) {
      var u = 0;c && (u = c), f.ALSDK.pay(e, m.ALConfig.openId, a, n, "1", r, i, p, s, l, d, u, {});
    } else console.warn(d[510086]);
  }, i.midasPay = function (e) {
    if (console.log(d[510108], m.ALConfig.GamePlatform, e), m.ALConfig.GamePlatform === _.PlatformEnum.WeChat) {
      for (var t = 0; t < this.mustNeed.length; t++) {
        var a = this.mustNeed[t];if (!e.hasOwnProperty(a)) return void console.warn(d[510109], a);
      }var n = 0;return e.env && (n = e.env), e.hasOwnProperty(d[510110]) && e.hasOwnProperty(d[510111]) && e.hasOwnProperty(d[510112]) && e.hasOwnProperty(d[492276]) && s.ALReport.commonReport(26, 2, { ply: e.model_id, video_sence: e.package_id, zone_id: e.zone_id, role_id: e.role_id }), void f.ALSDK.pay(e.appid, m.ALConfig.openId, e.amount, e.pid, "1", e.orderTitle, e.orderDesc, e.imgUrl, e.limit, e.params, e.cb, n, e);
    }m.ALConfig.GamePlatform !== _.PlatformEnum.QQ ? console.warn(d[510113]) : this.qqpay(e);
  }, i.qqpay = function (e) {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.QQ) {
      if ("" != m.ALConfig.appId && "" != m.ALConfig.openId) {
        if ("" == e.goodid || !l.ALUtil.isInteger(e.good_num) || e.good_num < 1 || !l.ALUtil.isInteger(e.amt) || e.amt < 1 || !e.callback || !l.ALUtil.isFunction(e.callback)) console.warn(d[510114], e);else {
          var t = e.params ? e.params : "",
              a = e.limit ? e.limit : 0,
              n = e.pid ? e.pid : "",
              o = e.title ? e.title : "",
              r = e.zone_id ? e.zone_id : 0,
              i = e.role_id ? e.role_id : 0,
              p = e.model_id ? e.model_id : 0,
              s = e.package_id ? e.package_id : "";f.ALSDK.qqpay(m.ALConfig.appId, m.ALConfig.openId, e.amt, e.goodid, e.good_num, e.callback, t, a, n, o, r, i, p, s);
        }
      } else console.warn(d[510115], m.ALConfig.appId, m.ALConfig.openId);
    } else console.warn(d[510116], m.ALConfig.GamePlatform);
  }, i.getGiftPack = function (t) {
    var a = r({}, t);if (m.ALConfig.appId && (a.appid = m.ALConfig.appId), m.ALConfig.openId && (a.openid = m.ALConfig.openId), !(a.hasOwnProperty(d[510098]) && a.hasOwnProperty(d[510117]) && a.hasOwnProperty(d[480125]) && a.hasOwnProperty(d[510118]) && a.hasOwnProperty(d[510112]) && a.hasOwnProperty(d[492276]))) return console.warn(d[510119], a, t, m.ALConfig.appId, m.ALConfig.openId), void t.cb({ ret: -1, msg: d[505018], list: [] });d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[510120], a, function (e) {
      if (l.ALUtil.LOG(d[510121], t, a, e), !e.isSucc) return console.warn(d[510122], e.reason), void t.cb({ ret: -2, msg: d[510122] + e.reason, list: [] });t.cb({ ret: 0, msg: "", list: e.data });
    });
  }, i.reportGiftPackShow = function (e) {
    e.hasOwnProperty(d[510110]) && e.hasOwnProperty(d[510111]) && e.hasOwnProperty(d[510112]) && e.hasOwnProperty(d[492276]) ? s.ALReport.commonReport(26, 1, { ply: e.model_id, video_sence: e.package_id, zone_id: e.zone_id, role_id: e.role_id }) : console.error(d[510123], e);
  }, i.ipShield = function (t) {
    var a = { ip: "", province: "", city: "", status: 1 };d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[510124], {}, function (e) {
      return e.isSucc ? e.data && (a.status = e.data.status, a.ip = e.data.ip, a.province = e.data.province, a.city = e.data.city) : console.warn(d[510125], e.reason), void t(a);
    });
  }, i.reportOpenId = function (e, t) {
    void 0 === t && (t = {}), l.ALUtil.LOG(d[510126], e, t), s.ALReport.publicParam.zone_id = t.zone_id || "", s.ALReport.publicParam.role_id = t.role_id || "", s.ALReport.publicParam.is_gs = t.is_gs || 0, s.ALReport.report(s.REPORT_TYPE_ENUM.REPORT_TYPE_OPEN_ID, m.ALConfig.openId || e);
  }, i.commonReport = function (e, t, a) {
    s.ALReport.commonReport(e, t, a);
  }, i.reportGoodsBehavior = function (e) {
    var t = r({}, s.ALReport.publicParam);t.event_type = _.BehaviorEnum.Goods, t.product_type = e.product_type, t.product_id = e.product_id, t.change_type = e.change_type, t.product_cnt_before = e.product_cnt_before, t.product_cnt = e.product_cnt, t.product_cnt_after = e.product_cnt_after, t.reason = e.reason, t.scene = e.scene || "", t.login_type = l.ALUtil.getLoginType(), t.zone_id = e.zone_id || t.zone_id, t.open_id = e.open_id || t.open_id, t.is_gs = e.is_gs || t.is_gs, d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[510127], t, function (e) {
      t.callback && t.callback(e);
    });
  }, i.reportGrowthBehavior = function (e) {
    var t = r({}, s.ALReport.publicParam);t.event_type = _.BehaviorEnum.Growth, t.product_type = e.product_type, t.product_id = e.product_id, t.change_type = e.change_type, t.product_cnt_before = e.product_cnt_before, t.product_cnt = e.product_cnt, t.product_cnt_after = e.product_cnt_after, t.reason = e.reason, t.scene = e.scene || "", t.zone_id = e.zone_id || t.zone_id, t.open_id = e.open_id || t.open_id, t.is_gs = e.is_gs || t.is_gs, t.login_type = l.ALUtil.getLoginType(), d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[510127], t, function (e) {
      t.callback && t.callback(e);
    });
  }, i.reportActivityBehavior = function (e) {
    var t = r({}, s.ALReport.publicParam);t.activity_id = e.activity_id || _.BehaviorEnum.Activity, t.activity_action = e.activity_action, t.progress = e.progress || 0, t.scene = e.scene || "", t.zone_id = e.zone_id || t.zone_id, t.open_id = e.open_id || t.open_id, t.is_gs = e.is_gs || t.is_gs, t.login_type = l.ALUtil.getLoginType(), d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[510128], t, function (e) {
      t.callback && t.callback(e);
    });
  }, i.reportAnalytics = function (e, t, a) {
    var n = l.ALUtil.addAppidPrefix(e);"" == m.ALConfig.appId && (console.warn(d[509857]), m.ALConfig.appId = n), m.ALConfig.appId != n && console.warn(d[510129]), s.ALReport.reportAnalytics(n, t);
  }, i.reportFlowShow = function (e) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.Oppo ? (s.ALReport.reportCheck.gameShow = e, f.ALSDK.reportFlowShow(e)) : console.warn(d[510086]);
  }, i.reportWithAppId = function (e, t, a) {
    void 0 === a && (a = "");var n = l.ALUtil.addAppidPrefix(e);"" == m.ALConfig.appId && (console.warn(d[509857]), m.ALConfig.appId = n), m.ALConfig.appId != n && console.warn(d[510130]), s.ALReport.report(t, a);
  }, i.jumpForum = function (t) {
    return m.ALConfig.GamePlatform != _.PlatformEnum.WeChat ? (console.warn(d[510131]), void (t.fail && t.fail(d[510086]))) : "" == m.ALConfig.appId ? (console.warn(d[510132]), void (t.fail && t.fail(d[510133]))) : void m.ALConfig.RunEnv.navigateToMiniProgram({ appId: d[510134], path: d[510135] + m.ALConfig.appId, extraData: { from: d[510044], game_appid: m.ALConfig.appId }, success: function (e) {
        console.log(d[510136], e), t.success && t.success(e);
      }, fail: function (e) {
        console.log(d[510137], e), t.fail && t.fail(e);
      }, complete: function (e) {
        console.log(d[510138], e), t.complete && t.complete(e);
      } });
  }, i.clickToMiniProgram = function (e, t, a, n, o, r) {
    void 0 === a && (a = ""), void 0 === n && (n = null), void 0 === o && (o = null), void 0 === r && (r = null), m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.Oppo ? t === this.ClickTypes.ICONS_CLICK ? f.ALSDK.toMiniProgram(e, this.ClickTypes.ICONS_CLICK, f.SDK_MODULE_ICONS_CLICK, a || d[504239], n, o, r) : t === this.ClickTypes.BANNER_CLICK ? f.ALSDK.toMiniProgram(e, this.ClickTypes.BANNER_CLICK, f.SDK_MODULE_BANNER_CLICK, a || d[510139], n, o, r) : f.ALSDK.toMiniProgram(e, this.ClickTypes.ICONS_CLICK, f.SDK_MODULE_ICONS_CLICK, a, n, o, r) : console.warn(d[510086]);
  }, i.getFavoData = function (e, t, a) {
    void 0 === t && (t = 400), void 0 === a && (a = ""), m.ALConfig.GamePlatform == _.PlatformEnum.WeChat || m.ALConfig.GamePlatform == _.PlatformEnum.Oppo ? f.ALSDK.requestModuleData(f.SDK_MODULE_LIKE, e, t, a) : console.warn(d[510086]);
  }, i.reportCheckSingle = function (e) {
    s.ALReport.reportCheck[e] ? console.log(d[510140], s.ALReport.reportCheck[e]) : console.warn(d[510141]);
  }, i.reportCheck = function () {
    if (console.log(d[510142], m.ALConfig.sdkVersion), console.log(d[510143], m.ALConfig.ReportMarketDomain), s.ALReport.reportCheck.appid ? console.log(d[510144], s.ALReport.reportCheck.appid) : console.warn(d[510145]), s.ALReport.reportCheck.openid ? console.log(d[510146], s.ALReport.reportCheck.openid) : console.warn(d[510147]), 0 < s.ALReport.CustomNode.length) {
      for (var e = "", t = 0; t < s.ALReport.CustomNode.length; t++) s.ALReport.CustomNode[t] && (e = e + t + ",");console.log(d[510148], e);
    } else console.warn(d[510149]);s.ALReport.reportCheck.startTime ? console.log(d[510150], s.ALReport.reportCheck.startTime) : console.warn(d[510151]), s.ALReport.reportCheck.level ? console.log(d[510152], s.ALReport.reportCheck.level) : console.warn(d[510153]), s.ALReport.reportCheck.video_sence ? console.log(d[510154], s.ALReport.reportCheck.video_sence) : console.warn(d[510155]), s.ALReport.reportCheck.video_play ? console.log(d[510156], s.ALReport.reportCheck.video_play) : console.warn(d[510157], d[510158]), s.ALReport.reportCheck.video_play ? console.log(d[510156], s.ALReport.reportCheck.video_play) : console.warn(d[510157], d[510158]), s.ALReport.reportCheck.payAmount ? console.log(d[510159], s.ALReport.reportCheck.payAmount) : console.warn(d[510160], d[510158]), s.ALReport.reportCheck.gameTime ? console.log(d[510161], s.ALReport.reportCheck.gameTime) : console.warn(d[510162], d[510158]), s.ALReport.reportCheck.gameShow ? console.log(d[510163], s.ALReport.reportCheck.gameShow) : console.warn(d[510164], d[510158]), s.ALReport.reportCheck.sharePic ? console.log(d[510165], s.ALReport.reportCheck.sharePic) : console.warn(d[510166], d[510158]), s.ALReport.reportCheck.jumpData ? console.log(d[510167], [s.ALReport.reportCheck.jumpData]) : console.warn(d[510168], d[510158]);
  }, i.antiAddiction = function (t) {
    if (null !== t.id && null !== t.name) {
      var e = {};e.appid = t.appid || m.ALConfig.appId, e.openid = t.openid || m.ALConfig.openId, e.id = t.id, e.name = t.name, d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[510169], e, function (e) {
        t.callback && t.callback(e);
      }, { "content-type": d[480605] });
    } else console.error(d[510170]);
  }, i.opInit = function (e) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat && (m.ALConfig.RunEnv.offInteractiveStorageModified && m.ALConfig.RunEnv.offInteractiveStorageModified(i.opReportInteractiveStorageModified), m.ALConfig.RunEnv.onInteractiveStorageModified && m.ALConfig.RunEnv.onInteractiveStorageModified(i.opReportInteractiveStorageModified), i.openDataContext = m.ALConfig.RunEnv.getOpenDataContext(), i.shareCanvas = i.openDataContext.canvas, m.ALConfig.InviteStartTime = e.start, m.ALConfig.InviteEndTime = e.end, m.ALConfig.InviteKeyList = e.keylist || ["1", "2", "3"], i.openDataContext.postMessage({ type: d[480459], start: e && e.start, end: e && e.end, period: e && e.period, sharedata: _.ALData.shareData }), i.opUpdateInviteData(function () {
      i.opCheckLaunchQuery(), e.callback && e.callback();
    }));
  }, i.opReportInteractiveStorageModified = function (t) {
    if (1 !== Number(t)) {
      var e = {};e.appid = m.ALConfig.appId, e.openid = m.ALConfig.openId, e.type = t, d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[510171], e, function (e) {
        console.log(d[510172], t);
      });
    }
  }, i.opUpdateInviteData = function (a) {
    m.ALConfig.GamePlatform == _.PlatformEnum.WeChat && m.ALConfig.RunEnv.getUserInteractiveStorage({ keyList: m.ALConfig.InviteKeyList, success: function (e) {
        var t = { appid: m.ALConfig.appId, openid: m.ALConfig.openId, date: m.ALConfig.InviteStartTime, duration: l.ALUtil.getActivityDuration(m.ALConfig.InviteStartTime, m.ALConfig.InviteEndTime), token: m.ALConfig.token, encryptedData: encodeURIComponent(e.encryptedData), iv: encodeURIComponent(e.iv) };d.HttpUtil.POST(m.ALConfig.ReportMarketDomain + d[510173], t, function (e) {
          e.isSucc ? (i.opInitInviteData(e.data), i.opPostOpenidsToOpenCentext(), a && a()) : console.error(d[510174] + e.reason);
        });
      }, fail: function (e) {
        console.error(d[510175], e);
      } });
  }, i.opInitInviteData = function (e) {
    _.InvitedData.Inviter.normal_level_help_sum = e.inviter.normal_level_help_sum, _.InvitedData.Inviter.normal_pay_help_sum = e.inviter.normal_pay_help_sum, _.InvitedData.Inviter.normal_user_list = e.inviter.normal_user_list, _.InvitedData.Inviter.normal_invite_num = e.inviter.normal_invite_num, _.InvitedData.Inviter.open_invite_num = e.inviter.open_invite_num, _.InvitedData.Inviter.open_today_invite_num = e.inviter.open_today_invite_num, _.InvitedData.Inviter.open_level_help_sum = e.inviter.open_level_help_sum, _.InvitedData.Inviter.open_pay_help_sum = e.inviter.open_pay_help_sum, _.InvitedData.Invited.level_help_sum = e.invited.level_help_sum, _.InvitedData.Invited.pay_help_sum = e.invited.pay_help_sum;
  }, i.opGetInviteData = function () {
    var e = { Inviter: {}, Invited: {} };return e.Inviter.normal_level_help_sum = _.InvitedData.Inviter.normal_level_help_sum, e.Inviter.normal_pay_help_sum = _.InvitedData.Inviter.normal_pay_help_sum, e.Inviter.normal_user_list = _.InvitedData.Inviter.normal_user_list, e.Inviter.normal_invite_num = _.InvitedData.Inviter.normal_invite_num, e.Inviter.open_invite_num = _.InvitedData.Inviter.open_invite_num, e.Inviter.open_today_invite_num = _.InvitedData.Inviter.open_today_invite_num, e.Inviter.open_level_help_sum = _.InvitedData.Inviter.open_level_help_sum, e.Inviter.open_pay_help_sum = _.InvitedData.Inviter.open_pay_help_sum, e.Invited.level_help_sum = _.InvitedData.Invited.level_help_sum, e.Invited.pay_help_sum = _.InvitedData.Invited.pay_help_sum, e;
  }, i.opPostOpenidsToOpenCentext = function () {
    if (i.openDataContext) {
      var t = [];_.InvitedData.Inviter.normal_user_list.forEach(function (e) {
        t.push(e.openid);
      }), i.openDataContext.postMessage({ type: d[510176], list: t, param: {} });
    }
  }, i.opCheckLaunchQuery = function () {
    if (m.ALConfig.GamePlatform == _.PlatformEnum.WeChat && i.openDataContext) {
      var e = m.ALConfig.RunEnv.getLaunchOptionsSync().query;if (e && e.shareMessageToFriendScene && 1 == e.shareMessageToFriendScene) {
        if (_.UserInfoData.ReportOpenid) return void console.log(d[510177]);i.openDataContext.postMessage({ type: d[510178], param: {} });
      }
    }
  }, i.opUpgradeHelp = function (e) {
    i.openDataContext && (e = e || {}, i.openDataContext.postMessage({ type: d[510179], param: e }));
  }, i.opRechargeHelp = function (e) {
    i.openDataContext && (e = e || {}, i.openDataContext.postMessage({ type: d[510180], param: e }));
  }, i.opRenderInvite = function (e) {
    i.openDataContext && (i.shareCanvas.width = e.canvas.width, i.shareCanvas.height = e.canvas.height, i.opUpdateInviteData(function () {
      i.openDataContext.postMessage({ type: d[510181], param: e });
    }));
  }, i.opRefreshInvite = function (e) {
    i.openDataContext && (e = e || {}, i.openDataContext.postMessage({ type: d[510182], param: e }));
  }, i.opClose = function (e) {
    i.openDataContext && i.openDataContext.postMessage({ type: d[480332], param: e });
  }, i.openDataContext = null, i.shareCanvas = null, i.mustNeed = [d[510098], d[510183], d[510184], d[510185], d[510186], d[510187], d[506820], d[487306], "cb", d[510112], d[492276]], i.ClickTypes = { ICONS_CLICK: d[510188], BANNER_CLICK: d[510189] }, i.ReportTypes = { SHOW: d[509901], LOGIN: d[509902], OPEN_ID: d[509903], AUTH: d[509904], SHARE: d[509911], LIKE_CLICK: d[509905], DRAWER_CLICK: d[509907], LIKE_SHOW: d[509906], DRAWER_SHOW: d[509908], SHARE_Ready: d[509910], PAY_MENT: d[510190], PAY_MENT_STAR: d[509916], PAY_MENT_INTER: d[509917], PAY_MENT_FAIL: d[510191], MORE_SHOW: d[486292], MORE_FOLD: d[509919], MORE_CLICK: d[509920], MORE_LONG_CLICK: d[509921], VIDEO_OPEN: d[509922], VIDEO_WATCH_FAIL: d[509923], VIDEO_WATCH_NORMAL: d[509924], GAME_BOX_SHOW: d[509925], GAME_BOX_CLICK: d[509926], GAME_BOX_BANNER_CLICK: d[509927], VIDEO_BTN_SHOW: d[509928], VIDEO_CLICK: d[509929], SHARE_BTN_SHOW: d[509930], SHARE_CLICK: d[509931] }, i);function i() {}t.AladinSDK = o, l.ALUtil.qgExist() && console.log(d[510192]), console.log(d[510193]), l.ALUtil.runEnvExist() ? (console.log(d[510194]), l.ALUtil.initGamePlatform(), console.log(d[509850], m.ALConfig.GamePlatform), l.ALUtil.initRunEnv(), console.log(d[510195], m.ALConfig.RunEnv), s.ALReport.init(), n.ALIntercept.init(), l.ALUtil.reportUserInfo(), l.ALUtil.saveSystemInfo(), l.ALUtil.saveNetworkType(), o.login(function () {
    o.reportAnalytics(m.ALConfig.appId, 0);
  })) : console.warn(d[510196]), window.AladinSDK = o;
}]);window.AladinSDK = aladinSDK.AladinSDK;module.exports = { AladinSDK: aladinSDK.AladinSDK };