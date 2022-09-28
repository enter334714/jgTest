"use strict";

var u = wx.$x;
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
    if (!(e.length > 0)) return void o({ code: 0, msg: "拒绝订阅" });wx.request({ url: p + "/api/wx/wx_subscribe", method: "POST", data: { tmpid: e, appid: v, openid: _, sign: y, platform: q }, success: function (e) {
        var n = e.data.data;for (var t in n) wx.setStorageSync(t, n[t]);o({ code: 1, msg: "订阅成功", tem_ids: n });
      }, fail: function (e) {
        console.log(e, "rrrrrrrrrr");
      } });
  }function o() {
    var e = Math.floor((+new Date() - M) / 1e3);if ("develop" == f && console.log("----------timing-------------:", e, D, M), _ && !(e < D)) {
      var o = { openid: _, game_appid: v, timing: e, sign: y, version: u, platform: q };wx.request({ url: p + "/api/wx/online_time", data: o, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, success: function (e) {
          M = +new Date();
        } });
    }
  }function n() {
    b = wx.getLaunchOptionsSync(), "develop" == f && console.log(b, "wx.getLaunchOptionsSync(111)");var e = b.query;g = b.scene, x = e.gdt_vid ? e.gdt_vid : "";var o = e.weixinadinfo;if (o) {
      var n = o.split(".");T = n[0], console.log("来源⼴告的⼴告id是：" + T);
    }k = e.clue_token ? e.clue_token : "", L = e.ad_id ? e.ad_id : "", C = e.creative_id ? e.creative_id : "";var t = b.referrerInfo;e.via ? (w = e.via ? e.via : "test_sub_channel_id", h = e.shareid ? e.shareid : 0, m = e.sharetype ? e.sharetype : "") : e.subchid ? (w = e.subchid ? e.subchid : "test_sub_channel_id", h = e.shareid ? e.shareid : 0, m = e.sharetype ? e.sharetype : "") : t && "string" == typeof t.extraData && (t.extraData = JSON.parse(t.extraData), w = t.extraData.subchid, h = t.extraData.shareid ? t.extraData.shareid : 0, m = t.extraData.sharetype ? t.extraData.sharetype : ""), s = wx.getSystemInfoSync(), q = s.platform, I = s.SDKVersion;
  }function t(e) {
    wx.checkSession({ success: function () {
        if (console.log("重新获取 success-" + _), _) {
          var o = { user: { openid: _, sign: y }, shareInfo: b.query };e(o);
        } else O.login(function (o) {
          if (!_) return void wx.showModal({ title: "提示", content: "登录异常，请重新打开小游戏4" });e(o);
        });
      }, fail: function () {
        "develop" == f && console.log("重新获取openid fail"), O.login(function (o) {
          _ ? e(o) : wx.showModal({ title: "提示", content: "登录异常，请重新打开小游戏3" });
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
  }var s,
      r,
      c,
      d,
      l = require("./config.js"),
      u = "v3.13",
      p = "",
      f = "develop",
      g = "",
      w = "test_sub_channel_id",
      m = "",
      h = 0,
      v = "",
      _ = "",
      x = "",
      y = "",
      S = {},
      b = {},
      q = "",
      M = 0,
      D = 120,
      T = 0,
      I = 0,
      k = "",
      L = 0,
      C = 0,
      O = { getDybUserInfo: function (e) {
      M = +new Date(), "develop" == f && console.log("----------getDybUserInfo-------------"), t(function (o) {
        O.initData(function (e) {}), e(o);
      });
    }, login: function (e) {
      "develop" == f && console.log(_ + "======login========"), wx.login({ success: function (o) {
          var n = { code: o.code, game_appid: v, channel_id: g, sub_channel_id: w, shareid: h, sharetype: m, version: u, gdt: x, platform: q, clue_token: k, ad_id: L, creative_id: C };"develop" == f && console.log(n, "初始化登陆logins数据"), console.log(2222222222222), wx.request({ url: p + "/api/wx/get_wx_userinfo", header: { "content-type": "application/x-www-form-urlencoded" }, method: "POST", data: n, dataType: "json", success: function (o) {
              if (!o.data.code) return void wx.showModal({ title: "提示", content: o.data.msg });var n = {};n = { openid: o.data.data.openid, sign: o.data.data.sign };var t = { user: n, shareInfo: b.query };_ = o.data.data.openid, y = o.data.data.sign, S = n, wx.setStorageSync("sop_user", n), e(t);
            }, fail: function (e) {
              console.log("调用失败", e), wx.showModal({ title: "提示", content: "登录异常，请重新打开小游戏1" });
            } });
        }, fail: function (e) {
          console.log("调用失败", e), wx.showModal({ title: "提示", content: "登录异常，请重新打开小游戏2" });
        } });
    }, initData: function (e) {
      "develop" == f && console.log("----------init_Data-------------");var o = {};o.openid = _, o.sign = y, o.game_appid = v, o.channel_id = g, o.sub_channel_id = w, o.version = u, o.platform = q, o.clue_token = k, wx.request({ url: p + "/api/wx/init_data", data: o, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, success: function (e) {
          "develop" == f && console.log(e.data, "init_data_success"), 1 == e.data.code && (D = e.data.data.online_time ? e.data.data.online_time : 60);
        } });
    }, createRole: function (e, o) {
      console.log("获取字节创角clue_token111111111", k), "develop" == f && console.log("----------roleData-------------"), t(function () {
        var n = { openid: _, game_appid: v, sign: y, gdt: x, version: u, platform: q };return void 0 == _typeof2(e.server_id) && "" == String(e.server_id) && "undefined" == String(e.server_id) ? void o({ code: 0, msg: "服务器ID不正确" }) : (n.server_id = e.server_id, void 0 != _typeof2(e.server_name) || "" != String(e.server_name) || "undefined" != String(e.server_name) ? n.server_name = e.server_name : n.server_name = "默认区服", void 0 == _typeof2(e.role_name) && "" == String(e.role_name) && "undefined" == String(e.role_name) ? void o({ code: 0, msg: "角色名称不正确" }) : (n.role_name = e.role_name, void wx.request({ url: p + "/api/wx/create_role", data: n, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, success: function (e) {
            o(e.data), 1 == e.data.code ? wx.request({ url: p + "/api/wx/role_login", data: n, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, complete: function (e) {} }) : o(e.data);
          }, complete: function () {
            console.log("finshshow-----"), wx.reportAnalytics("finishShow");
          } })));
      });
    }, submitOrder: function (e, o) {
      var n = +new Date();console.log("开始时间:", n), "develop" == f && console.log("----------提交订单-------------支付环境"), t(function () {
        if (void 0 == _typeof2(e.server_name) || "" == String(e.server_name) || "undefined" == String(e.server_name)) return void o({ code: 0, msg: "缺少服务器名" });if (void 0 == _typeof2(e.role_name) || "" == String(e.role_name) || "undefined" == String(e.role_name)) return void o({ code: 0, msg: "缺少角色名" });var t = { game_appid: v, extra_info: e.extra_info, goods_count: e.goods_count, goods_name: e.goods_name, pay_amount: e.pay_amount, account_id: _, redirect_uri: e.redirect_uri, role_name: e.role_name, server_name: e.server_name, channel_id: g, sub_channel_id: w, order_sn: e.order_sn, sign: y, gdt: x, version: u, platform: q },
            a = +new Date() - n;console.log("request_before", a), wx.request({ url: p + "/api/wx/wxgame_create", method: "POST", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
            var i = +new Date() - n;if ("develop" == f && console.log(e.data, "支付接口返回", i), e.data.code) 2 == e.data.data.pay_type ? wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: e.data.data.order_sn, sendMessagePath: JSON.stringify(t), sendMessageImg: p + "/kefuIcon.png", success: function (e) {
                wx.hideLoading(), console.log(e, "客服回调");
              }, fail: function (e) {
                wx.hideLoading(), o({ code: 0, msg: "取消支付" }), console.log(e, "客服回调fail");
              } }) : 1 == e.data.data.pay_type ? (wx.hideLoading(), wx.navigateToMiniProgram({ appId: "wxab2e839b6578e72c", path: "pages/come/come?scene=" + e.data.data.id, extraData: { game_appid: v, openid: _ }, envVersion: "release", success: function (e) {
                wx.hideLoading(), console.log(e, "res");
              }, fail: function (e) {
                wx.hideLoading(), console.log(e, "fff");
              }, complete: function (e) {
                wx.hideLoading();
              } })) : 3 == e.data.data.pay_type ? wx.request({ url: p + "/api/wx/native_pay", method: "POST", data: { id: e.data.data.id }, header: { "content-type": "application/json" }, success: function (e) {
                if (console.log(e, "sss"), e.data.code) {
                  var o = p + "/" + e.data.data.url;console.log(o), wx.previewImage({ current: o, urls: [o, o], success: function (e) {
                      wx.hideLoading();
                    }, fail: function (e) {
                      wx.hideLoading(), console.log(e, "prf");
                    }, complete: function (e) {
                      wx.hideLoading(), console.log(e, "com");
                    } });
                }
              } }) : 4 == e.data.data.pay_type ? wx.request({ url: p + "/api/mini/getUnlimit", method: "POST", data: { scene: e.data.data.id, appid: "wxab2e839b6578e72c" }, header: { "content-type": "application/json" }, success: function (e) {
                console.log(e, "sss"), e.data.code && (console.log(p + "/" + e.data.data.url), wx.previewImage({ current: p + "/" + e.data.data.url, urls: [p + "/" + e.data.data.url], success: function (e) {
                    wx.hideLoading();
                  }, fail: function (e) {
                    wx.hideLoading(), console.log(e, "prf");
                  } }));
              } }) : "android" == q || "windows" == q ? wx.requestMidasPayment({ mode: e.data.data.param.mode, offerId: e.data.data.param.offerId, currencyType: e.data.data.param.currencyType, platform: e.data.data.param.platform, buyQuantity: e.data.data.param.buyQuantity, success: function (n) {
                o({ code: 1, msg: "支付成功" }), "develop" == f && console.log("支付成功回调函数");var t = 0,
                    a = e.data.data.order_sn,
                    i = setInterval(function () {
                  wx.request({ url: p + "/api/wx/wxgame_notify", method: "POST", header: { "content-type": "application/x-www-form-urlencoded" }, data: { bill_no: a, game_appid: v, account_id: _, sign: y }, success: function (e) {
                      "develop" == f && console.log(e.data, "支付成功查询回调"), (1 == e.data.code || t > 10) && clearInterval(i), t++;
                    }, complete: function (e) {
                      t > 30 && clearInterval(i);
                    } });
                }, 2e3);
              }, fail: function (e) {
                "develop" == f && console.log("支付失败", e), wx.hideLoading(), o({ code: 0, msg: "支付失败" });var t = +new Date() - n;console.log("fail_time", t), e.request_before = a, e.req_success = i, e.failTime = t, e.appid = v, e.openid = _, wx.request({ url: p + "/api/wx/fail_pay", method: "POST", header: { "content-type": "application/x-www-form-urlencoded" }, data: e, success: function (e) {} });
              } }) : (wx.hideLoading(), wx.showModal({ title: "提示", content: "请使用手机完成支付", showCancel: !1, cancelColor: "cancelColor" }));else {
              wx.hideLoading();var s = e.data.data.data;s && 90011 == s.errcode && (_ = "", wx.removeStorageSync("sop_user")), o({ code: 0, msg: e.data.msg });
            }
          }, fail: function (e) {
            o({ code: 0, msg: "请求失败" });
          } });
      });
    }, transfer: function () {
      var e = { game_appid: v, account_id: _, sign: y, platform: "ios" == q ? "Trial" : "Develop" };wx.request({ url: p + "/api/wx/transfer", method: "POST", header: { "content-type": "application/x-www-form-urlencoded" }, data: e, success: function (e) {
          var o = e.data;console.log(o, "ssssssss"), 1 == o.code && wx.showModal({ title: "转移大福利", content: "转移微端送福利！！！  \n福利1：转端至尊大礼包*1  \n福利2：微端微信账号相互通，想在哪玩就在哪玩！  \n各位道友，可点击前往领取参与转端活动，如有疑问，可联系官方客服QQ：800821618", confirmText: "立即前往", cancelText: "暂时跳过", success: function (e) {
              e.confirm ? (console.log("用户点击确定"), wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: "转移", sendMessagePath: q, success: function (e) {
                  console.log(e, "客服回调");
                }, fail: function (e) {
                  console.log(e, "客服回调fail"), wx.showModal({ title: "转移大福利", content: "转移微端送福利！！！  \n福利1：转端至尊大礼包*1  \n福利2：微端微信账号相互通，想在哪玩就在哪玩！  \n各位道友，可点击前往领取参与转端活动，如有疑问，可联系官方客服QQ：800821618", confirmText: "立即前往", cancelText: "暂时跳过", success: function (e) {
                      e.confirm ? (console.log("用户点击确定"), wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: "转移", sendMessagePath: q, success: function (e) {
                          console.log(e, "客服回调");
                        }, fail: function (e) {
                          console.log(e, "客服回调fail");
                        } })) : console.log("用户点击取消");
                    } });
                } })) : console.log("用户点击取消");
            } });
        }, fail: function (e) {
          console.log("transfer", e);
        } });
    }, subscribeMsg: function (o, n) {
      var t = [],
          a = [];for (var i in o) wx.getStorageSync(o[i]) || t.push(o[i]);if (0 == t.length) return console.log("已经订阅"), void n({ code: 2, msg: "已经订阅" });var s = [];wx.requestSubscribeMessage({ tmplIds: t, success: function (o) {
          if (console.log(o, "success-ssssssss"), "requestSubscribeMessage:ok" == o.errMsg) {
            for (var i in t) wx.getStorageSync(t[i]) || ("accept" == o[t[i]] ? (a.push(t[i]), console.log(a, "upppppppp")) : (s.push(t[i]), wx.showModal({ title: "订阅", content: "为了及时了解游戏动态,请订阅通知", cancelColor: "cancelColor", success: function (e) {
                if (!e.confirm) return void n({ code: 0, msg: "拒绝订阅" });wx.openSetting({ withSubscriptions: !0, success: function (e) {
                    console.log(e, "openSetting");var o = e.subscriptionsSetting.itemSettings;for (var n in s) wx.getStorageSync(s[n]) || "accept" == o[s[n]] && (a[t[n]] = t[n]);
                  } });
              } })));e(a, n);
          }
        }, fail: function (o) {
          console.log(o, "fail"), wx.openSetting({ withSubscriptions: !0, success: function (o) {
              console.log(o, "openSetting");var i = o.subscriptionsSetting.itemSettings;for (var s in t) wx.getStorageSync(t[s]) || "accept" == i[t[s]] && a.push(t[s]);e(a, n);
            }, fail: function () {
              n({ code: 0, msg: "拒绝订阅" });
            } });
        } });
    }, onShare: function (e) {
      if ("develop" == f && console.log("----------设置转发-------------"), e.query && !a(e.query)) return void console.log("query error");wx.showShareMenu({ showShareItems: ["shareAppMessage", "shareTimeline"], withShareTicket: !0 }), wx.onShareAppMessage(function () {
        return { title: e.title, imageUrl: e.imageUrl, query: "subchid=" + w + "&sharetype=onshare&shareid=" + _ + "&" + e.query };
      });
    }, share: function (e) {
      "develop" == f && console.log("----------主动转发-------------"), t(function () {
        if (e.query && !a(e.query)) return void console.log("query error");wx.showShareMenu({ showShareItems: ["shareAppMessage", "shareTimeline"], withShareTicket: !0 }), wx.shareAppMessage({ title: e.title, imageUrl: e.imageUrl, query: "subchid=" + w + "&sharetype=share&shareid=" + _ + "&" + e.query });
      });
    }, dot: function (e, o) {
      var n = { game_appid: v, account_id: _, step: e, sign: y, version: u, platform: q };wx.request({ url: p + "/api/wx/dot_record", method: "POST", header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (e) {
          o(e.data);
        }, fail: function (e) {
          o({ code: 0, msg: "网络请求失败", res: e });
        } });
    }, createVideoAd: function (e, o) {
      if (c = !1, "develop" == f && console.log(void 0 === r ? "undefined" : _typeof2(r), "typeof(video)"), "object" != (void 0 === r ? "undefined" : _typeof2(r))) "develop" == f && console.log(d, "typeof(adUnitId11)"), d = e, r = wx.createRewardedVideoAd({ adUnitId: e }), r.onError(function (e) {
        var n = {};"develop" == f && console.log(e, "----------onError-------------"), n.msg = e.errMsg, n.state = "error", n.isEnded = !1, n.res = e, o(n);
      }), r.onClose(function (e) {
        if (c) ;else {
          var n = {};O.advertisement("close", function (e) {}), n.state = "close", n.isEnded = e.isEnded, n.msg = "视频广告关闭", o(n);
        }
      }), r.load().then(function () {
        console.log("激励视频加载成功"), r.show().then(function (e) {
          O.advertisement("show", function (e) {}), o({ state: "show", msg: "视频展示成功", isEnded: !1 });
        }).catch(function (e) {
          var n = {};n.code = 2, n.state = "error", n.msg = e.errMsg, n.isEnded = !1, o(e);
        });
      }).catch(function (e) {
        console.log("激励视频加载失败", e);
      });else if (d != e) {
        "develop" == f && console.log(d, e, "typeof(new)"), d = e;var n = wx.createRewardedVideoAd({ adUnitId: e });n.load().then(function () {
          n.show().then(function (e) {
            O.advertisement("show", function (e) {}), o({ state: "show", msg: "视频展示成功", isEnded: !1 });
          }).catch(function (e) {
            var n = {};n.code = 2, n.state = "error", n.msg = e.errMsg, n.isEnded = !1, o(e);
          });
        }).catch(function (e) {
          console.log("激励视频加载失败", e);
        });
      } else "develop" == f && console.log(r, "----------createVideoAd-------------"), r.show().then(function (e) {
        O.advertisement("show", function (e) {}), o({ state: "show", msg: "视频展示成功", isEnded: !1 });
      }).catch(function (e) {
        var n = {};n.code = 2, n.state = "error", n.msg = e.errMsg, n.isEnded = !1, o(e);
      });
    }, advertisement: function (e, o) {
      "develop" == f && console.log(e, "----------上报广告-------------"), t(function () {
        var n = { openid: _, game_appid: v, sign: y, version: u, platform: q },
            t = "";"show" == e ? t = p + "/api/wx/videoClick" : "close" == e ? t = p + "/api/wx/watch" : "share" == e && (t = p + "/api/wx/share"), wx.request({ url: t, data: n, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, complete: function (e) {
            o(e.data);
          } });
      });
    }, gameLevel: function (e, o) {
      var n = {};n.openid = _, n.appid = v, n.sign = y, n.level = e, n.version = u, n.platform = q, wx.request({ url: p + "/api/wx/game_level", data: n, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, complete: function (e) {
          o(e.data);
        } });
    }, msg_check: function (e, o) {
      var n = {};n.content = e, n.appid = v, n.openid = _, n.version = u, wx.request({ url: p + "/api/wx/msg_sec_check", data: n, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, success: function (e) {
          o(e.data);
        } });
    }, img_check: function (e, o) {
      wx.uploadFile({ url: p + "/api/v2/img_sec_check", filePath: e, name: "media", formData: { appid: v, openid: _ }, success: function (e) {
          o(e.data);
        } });
    }, media_check: function (e, o, n) {
      wx.request({ url: p + "/api/v2/media_check", data: { appid: v, media_url: e, type: o }, method: "post", header: { "content-type": "application/x-www-form-urlencoded" }, success: function (e) {
          n(e.data);
        } });
    } };!function () {
    S = wx.getStorageSync("sop_user"), _ = S.openid, y = S.sign, console.log("==wxsdk version==", u), f = l.env, p = l.url, v = l.appid, n(), wx.onHide(function () {
      console.log("onhide", M), o(), M = +new Date();
    }), wx.onShow(function (e) {
      M = +new Date(), console.log(JSON.stringify(e), "show");var o = e.referrerInfo;if (console.log(o, "refer"), o.extraData) {
        "success" == o.extraData.pay ? wx.showToast({ title: "成功", icon: "success", duration: 2e3, fail: function (e) {
            console.log(e, "eeeeeee");
          } }) : wx.showToast({ title: "支付失败", icon: "success", duration: 2e3, fail: function (e) {
            console.log(e, "eeeeeee");
          } });
      }
    }), i(I, "2.10.3") >= 0 && wx.onAddToFavorites(function () {}), window.dyb = O;
  }();
}();