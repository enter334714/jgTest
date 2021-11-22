"use strict";

var a = wx.$y;
var _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
  return typeof e;
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
},
    _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return void 0 === e ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof2(e);
};!function () {
  function e(e, o) {
    if (!(e.length > 0)) return void o({ code: 0, msg: "拒绝订阅" });wx.request({ url: u + "/api/wx/wx_subscribe", method: "POST", data: { tmpid: e, appid: h, openid: v, sign: y, platform: b }, success: function (e) {
        var n = e.data.data;for (var t in n) wx.setStorageSync(t, n[t]);o({ code: 1, msg: "订阅成功", tem_ids: n });
      }, fail: function (e) {
        console.log(e, "rrrrrrrrrr");
      } });
  }function o() {
    var e = Math.floor((+new Date() - q) / 1e3);if ("develop" == p && console.log("----------timing-------------:", e, D, q), v && !(e < D)) {
      var o = { openid: v, game_appid: h, timing: e, sign: y, version: l, platform: b };wx.request({ url: u + "/api/wx/online_time", data: o, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, success: function (e) {
          q = +new Date();
        } });
    }
  }function n() {
    S = wx.getLaunchOptionsSync(), "develop" == p && console.log(S, "wx.getLaunchOptionsSync(111)");var e = S.query;f = S.scene, _ = e.gdt_vid ? e.gdt_vid : "";var o = e.weixinadinfo;if (o) {
      var n = o.split(".");M = n[0], console.log("来源⼴告的⼴告id是：" + M);
    }var t = S.referrerInfo;e.via ? (g = e.via ? e.via : "test_sub_channel_id", w = e.shareid ? e.shareid : 0, m = e.sharetype ? e.sharetype : "") : e.subchid ? (g = e.subchid ? e.subchid : "test_sub_channel_id", w = e.shareid ? e.shareid : 0, m = e.sharetype ? e.sharetype : "") : t && "string" == typeof t.extraData && (t.extraData = JSON.parse(t.extraData), g = t.extraData.subchid, w = t.extraData.shareid ? t.extraData.shareid : 0, m = t.extraData.sharetype ? t.extraData.sharetype : ""), r = wx.getSystemInfoSync(), b = r.platform, I = r.SDKVersion;
  }function t(e) {
    wx.checkSession({ success: function () {
        if (console.log("重新获取 success-" + v), v) {
          var o = { user: { openid: v, sign: y }, shareInfo: S.query };e(o);
        } else T.login(function (o) {
          if (!v) return void wx.showModal({ title: "提示", content: "登录异常，请重新打开小游戏4" });e(o);
        });
      }, fail: function () {
        "develop" == p && console.log("重新获取openid fail"), T.login(function (o) {
          v ? e(o) : wx.showModal({ title: "提示", content: "登录异常，请重新打开小游戏3" });
        });
      } });
  }function a(e) {
    var o = [];o = e.split("&");for (var n = 0; n < o.length; n++) {
      if ("" == o[n]) return !1;var t = e.split("=");if ("chid" == t[0] || "subchid" == t[0] || "shareid" == t[0] || "sharetype" == t[0]) return !1;
    }return !0;
  }function i(e, o) {
    e = e.split("."), o = o.split(".");for (var n = Math.max(e.length, o.length); e.length < n;) e.push("0");for (; o.length < n;) o.push("0");for (var t = 0; t < n; t++) {
      var a = parseInt(e[t]),
          i = parseInt(o[t]);if (a > i) return 1;if (a < i) return -1;
    }return 0;
  }var r,
      s,
      c,
      d = require("./config.js"),
      l = "v3.7",
      u = "",
      p = "develop",
      f = "",
      g = "test_sub_channel_id",
      m = "",
      w = 0,
      h = "",
      v = "",
      _ = "",
      y = "",
      x = {},
      S = {},
      b = "",
      q = +new Date(),
      D = 120,
      M = 0,
      I = 0,
      T = { getDybUserInfo: function (e) {
      q = +new Date(), "develop" == p && console.log("----------getDybUserInfo-------------"), t(function (o) {
        T.initData(function (e) {}), e(o);
      });
    }, login: function (e) {
      "develop" == p && console.log(v + "======login========"), wx.login({ success: function (o) {
          var n = { code: o.code, game_appid: h, channel_id: f, sub_channel_id: g, shareid: w, sharetype: m, version: l, gdt: _, platform: b, aid: M };"develop" == p && console.log(n, "初始化登陆logins数据"), wx.request({ url: u + "/api/wx/get_wx_userinfo", header: { "content-type": "application/x-www-form-urlencoded" }, method: "POST", data: n, dataType: "json", success: function (o) {
              if (!o.data.code) return void wx.showModal({ title: "提示", content: o.data.msg });var n = {};n = { openid: o.data.data.openid, sign: o.data.data.sign };var t = { user: n, shareInfo: S.query };v = o.data.data.openid, y = o.data.data.sign, x = n, wx.setStorageSync("sop_user", n), e(t);
            }, fail: function (e) {
              console.log("调用失败", e), wx.showModal({ title: "提示", content: "登录异常，请重新打开小游戏1" });
            } });
        }, fail: function (e) {
          console.log("调用失败", e), wx.showModal({ title: "提示", content: "登录异常，请重新打开小游戏2" });
        } });
    }, initData: function (e) {
      "develop" == p && console.log("----------init_Data-------------");var o = {};o.openid = v, o.sign = y, o.game_appid = h, o.channel_id = f, o.sub_channel_id = g, o.version = l, o.platform = b, o.aid = M, o.gdt = _, wx.request({ url: u + "/api/wx/init_data", data: o, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, success: function (e) {
          "develop" == p && console.log(e.data, "init_data_success"), 1 == e.data.code && (D = e.data.data.online_time ? e.data.data.online_time : 60);
        } });
    }, createRole: function (e, o) {
      "develop" == p && console.log("----------roleData-------------"), t(function () {
        var n = { openid: v, game_appid: h, sign: y, gdt: _, version: l, platform: b, aid: M };return void 0 == _typeof2(e.server_id) && "" == String(e.server_id) && "undefined" == String(e.server_id) ? void o({ code: 0, msg: "服务器ID不正确" }) : (n.server_id = e.server_id, void 0 != _typeof2(e.server_name) || "" != String(e.server_name) || "undefined" != String(e.server_name) ? n.server_name = e.server_name : n.server_name = "默认区服", void 0 == _typeof2(e.role_name) && "" == String(e.role_name) && "undefined" == String(e.role_name) ? void o({ code: 0, msg: "角色名称不正确" }) : (n.role_name = e.role_name, void wx.request({ url: u + "/api/wx/create_role", data: n, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, success: function (e) {
            o(e.data), 1 == e.data.code ? wx.request({ url: u + "/api/wx/role_login", data: n, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, complete: function (e) {} }) : o(e.data);
          }, complete: function () {
            console.log("finshshow-----"), wx.reportAnalytics("finishShow");
          } })));
      });
    }, submitOrder: function (e, o) {
      var n = +new Date();console.log("开始时间:", n), wx.showLoading({ title: "正在支付", mask: !0 }), "develop" == p && console.log("----------提交订单-------------支付环境"), t(function () {
        if (void 0 == _typeof2(e.server_name) || "" == String(e.server_name) || "undefined" == String(e.server_name)) return void o({ code: 0, msg: "缺少服务器名" });if (void 0 == _typeof2(e.role_name) || "" == String(e.role_name) || "undefined" == String(e.role_name)) return void o({ code: 0, msg: "缺少角色名" });var t = { game_appid: h, extra_info: e.extra_info, goods_count: e.goods_count, goods_name: e.goods_name, pay_amount: e.pay_amount, account_id: v, redirect_uri: e.redirect_uri, role_name: e.role_name, server_name: e.server_name, channel_id: f, sub_channel_id: g, order_sn: e.order_sn, sign: y, gdt: _, version: l, platform: b, aid: M },
            a = +new Date() - n;console.log("request_before", a), wx.request({ url: u + "/api/wx/wxgame_create", method: "POST", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
            var t = +new Date() - n;if ("develop" == p && console.log(e.data, "支付接口返回", t), e.data.code) "ios" == b || "js" == e.data.data.type ? wx.navigateToMiniProgram({ appId: "wxab2e839b6578e72c", path: "pages/come/come?scene=" + e.data.data.id, extraData: { game_appid: h, openid: v }, envVersion: "release", success: function (e) {
                wx.hideLoading(), console.log(e, "res");
              }, fail: function (e) {
                wx.hideLoading(), console.log(e, "fff");
              }, complete: function (e) {
                wx.hideLoading();
              } }) : "android" == b || "windows" == b ? wx.requestMidasPayment({ mode: e.data.data.param.mode, offerId: e.data.data.param.offerId, currencyType: e.data.data.param.currencyType, platform: e.data.data.param.platform, buyQuantity: e.data.data.param.buyQuantity, success: function (n) {
                o({ code: 1, msg: "支付成功" }), "develop" == p && console.log("支付成功回调函数");var t = 0,
                    a = e.data.data.order_sn,
                    i = setInterval(function () {
                  wx.request({ url: u + "/api/wx/wxgame_notify", method: "POST", header: { "content-type": "application/x-www-form-urlencoded" }, data: { bill_no: a, game_appid: h, account_id: v, sign: y }, success: function (e) {
                      "develop" == p && console.log(e.data, "支付成功查询回调"), (1 == e.data.code || t > 10) && clearInterval(i), t++;
                    }, complete: function (e) {
                      t > 30 && clearInterval(i);
                    } });
                }, 2e3);
              }, fail: function (e) {
                "develop" == p && console.log("支付失败", e), wx.hideLoading(), o({ code: 0, msg: "支付失败" });var i = +new Date() - n;console.log("fail_time", i), e.request_before = a, e.req_success = t, e.failTime = i, e.appid = h, e.openid = v, wx.request({ url: u + "/api/wx/fail_pay", method: "POST", header: { "content-type": "application/x-www-form-urlencoded" }, data: e, success: function (e) {} });
              } }) : (wx.hideLoading(), wx.showModal({ title: "提示", content: "请使用手机完成支付", showCancel: !1, cancelColor: "cancelColor" }));else {
              wx.hideLoading();var i = e.data.data.data;i && 90011 == i.errcode && (v = "", wx.removeStorageSync("sop_user")), o({ code: 0, msg: e.data.msg });
            }
          }, fail: function (e) {
            o({ code: 0, msg: "请求失败" });
          } });
      });
    }, subscribeMsg: function (o, n) {
      var t = [],
          a = [];for (var i in o) wx.getStorageSync(o[i]) || t.push(o[i]);if (0 == t.length) return console.log("已经订阅"), void n({ code: 2, msg: "已经订阅" });var r = [];wx.requestSubscribeMessage({ tmplIds: t, success: function (o) {
          if (console.log(o, "success-ssssssss"), "requestSubscribeMessage:ok" == o.errMsg) {
            for (var i in t) wx.getStorageSync(t[i]) || ("accept" == o[t[i]] ? (a.push(t[i]), console.log(a, "upppppppp")) : (r.push(t[i]), wx.showModal({ title: "订阅", content: "为了及时了解游戏动态,请订阅通知", cancelColor: "cancelColor", success: function (e) {
                if (!e.confirm) return void n({ code: 0, msg: "拒绝订阅" });wx.openSetting({ withSubscriptions: !0, success: function (e) {
                    console.log(e, "openSetting");var o = e.subscriptionsSetting.itemSettings;for (var n in r) wx.getStorageSync(r[n]) || "accept" == o[r[n]] && (a[t[n]] = t[n]);
                  } });
              } })));e(a, n);
          }
        }, fail: function (o) {
          console.log(o, "fail"), wx.openSetting({ withSubscriptions: !0, success: function (o) {
              console.log(o, "openSetting");var i = o.subscriptionsSetting.itemSettings;for (var r in t) wx.getStorageSync(t[r]) || "accept" == i[t[r]] && a.push(t[r]);e(a, n);
            }, fail: function () {
              n({ code: 0, msg: "拒绝订阅" });
            } });
        } });
    }, onShare: function (e) {
      if ("develop" == p && console.log("----------设置转发-------------"), e.query && !a(e.query)) return void console.log("query error");wx.showShareMenu({ showShareItems: ["shareAppMessage", "shareTimeline"], withShareTicket: !0 }), wx.onShareAppMessage(function () {
        return { title: e.title, imageUrl: e.imageUrl, query: "subchid=" + g + "&sharetype=onshare&shareid=" + v + "&" + e.query };
      });
    }, share: function (e) {
      "develop" == p && console.log("----------主动转发-------------"), t(function () {
        if (e.query && !a(e.query)) return void console.log("query error");wx.showShareMenu({ showShareItems: ["shareAppMessage", "shareTimeline"], withShareTicket: !0 }), wx.shareAppMessage({ title: e.title, imageUrl: e.imageUrl, query: "subchid=" + g + "&sharetype=share&shareid=" + v + "&" + e.query });
      });
    }, dot: function (e, o) {
      var n = { game_appid: h, account_id: v, step: e, sign: y, version: l, platform: b };wx.request({ url: u + "/api/wx/dot_record", method: "POST", header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (e) {
          o(e.data);
        }, fail: function (e) {
          o({ code: 0, msg: "网络请求失败", res: e });
        } });
    }, createVideoAd: function (e, o) {
      if ("develop" == p && console.log(void 0 === s ? "undefined" : _typeof2(s), "typeof(video)"), "object" != (void 0 === s ? "undefined" : _typeof2(s))) "develop" == p && console.log(c, "typeof(adUnitId11)"), c = e, s = wx.createRewardedVideoAd({ adUnitId: e }), s.onError(function (e) {
        var n = {};"develop" == p && console.log(e, "----------onError-------------"), n.msg = e.errMsg, n.state = "error", n.isEnded = !1, n.res = e, o(n);
      }), s.onClose(function (e) {
        var n = {};T.advertisement("close", function (e) {}), n.state = "close", n.isEnded = e.isEnded, n.msg = "视频广告关闭", o(n);
      }), s.load().then(function () {
        console.log("激励视频加载成功"), s.show().then(function (e) {
          T.advertisement("show", function (e) {}), o({ state: "show", msg: "视频展示成功", isEnded: !1 });
        }).catch(function (e) {
          var n = {};n.code = 2, n.state = "error", n.msg = e.errMsg, n.isEnded = !1, o(e);
        });
      }).catch(function (e) {
        console.log("激励视频加载失败", e);
      });else if (c != e) {
        "develop" == p && console.log(c, e, "typeof(new)"), c = e;var n = wx.createRewardedVideoAd({ adUnitId: e });n.load().then(function () {
          n.show().then(function (e) {
            T.advertisement("show", function (e) {}), o({ state: "show", msg: "视频展示成功", isEnded: !1 });
          }).catch(function (e) {
            var n = {};n.code = 2, n.state = "error", n.msg = e.errMsg, n.isEnded = !1, o(e);
          });
        }).catch(function (e) {
          console.log("激励视频加载失败", e);
        });
      } else "develop" == p && console.log(s, "----------createVideoAd-------------"), s.onClose(function (e) {
        s.offClose(s.onClose());var n = {};T.advertisement("close", function (e) {}), n.state = "close", n.isEnded = e.isEnded, n.msg = "视频广告关闭", o(n);
      }), s.show().then(function (e) {
        T.advertisement("show", function (e) {}), o({ state: "show", msg: "视频展示成功", isEnded: !1 });
      }).catch(function (e) {
        var n = {};n.code = 2, n.state = "error", n.msg = e.errMsg, n.isEnded = !1, o(e);
      });
    }, advertisement: function (e, o) {
      "develop" == p && console.log(e, "----------上报广告-------------"), t(function () {
        var n = { openid: v, game_appid: h, sign: y, version: l, platform: b },
            t = "";"show" == e ? t = u + "/api/wx/videoClick" : "close" == e ? t = u + "/api/wx/watch" : "share" == e && (t = u + "/api/wx/share"), wx.request({ url: t, data: n, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, complete: function (e) {
            o(e.data);
          } });
      });
    }, gameLevel: function (e, o) {
      var n = {};n.openid = v, n.appid = h, n.sign = y, n.level = e, n.version = l, n.platform = b, wx.request({ url: u + "/api/wx/game_level", data: n, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, complete: function (e) {
          o(e.data);
        } });
    }, msg_check: function (e, o) {
      var n = {};n.content = e, n.appid = h, n.version = l, wx.request({ url: u + "/api/v2/msg_sec_check", data: n, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, success: function (e) {
          o(e.data);
        } });
    }, img_check: function (e, o) {
      wx.uploadFile({ url: u + "/api/v2/img_sec_check", filePath: e, name: "media", formData: { appid: h }, success: function (e) {
          o(e.data);
        } });
    }, media_check: function (e, o, n) {
      wx.request({ url: u + "/api/v2/media_check", data: { appid: h, media_url: e, type: o }, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, success: function (e) {
          n(e.data);
        } });
    } };!function () {
    x = wx.getStorageSync("sop_user"), v = x.openid, y = x.sign, console.log("==wxsdk version==", l), p = d.env, u = d.url, h = d.appid, n(), wx.onHide(function () {
      console.log("onhide", q), o(), q = +new Date();
    }), i(I, "2.10.3") >= 0 && wx.onAddToFavorites(function () {}), window.dyb = T;
  }();
}();