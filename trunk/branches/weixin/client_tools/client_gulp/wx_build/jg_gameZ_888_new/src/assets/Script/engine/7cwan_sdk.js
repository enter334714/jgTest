let config = { game_id: "11", game_pkg: "wzcq-q2-_q2wxxcxqd_H", partner_id: "4", is_auth: !1, from: null };window.config = config;let PARTNER_SDK = mainSDK(),
    HOST = "https://sdk.5tun.cn",
    user_game_info = null,
    this_order_id = null,
    game_ver = "";function mainSDK() {
  var e = {};return { order_data: {}, init: function (e, o) {
      game_ver = e && e.game_ver ? e.game_ver : 0, console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var n,
          t = wx.getStorageSync("plat_uuid");t ? n = 0 : (t = this.uuid(16, 32), wx.setStorageSync("plat_uuid", t), n = 1);var a = wx.getStorageSync("plat_idfv");a || (a = this.uuid(16, 32), wx.setStorageSync("plat_idfv", a));var r = wx.getLaunchOptionsSync(),
          i = r.scene ? r.scene : "";if (console.log("[SDK]\u5c0f\u6e38\u620f\u542f\u52a8\u53c2\u6570"), console.log(r), n && r.query && r.query.ad_code && wx.setStorageSync("plat_ad_code", r.query.ad_code), r.query && r.query.from && "" != r.query.from) n && wx.setStorageSync("plat_from", r.query.from), config.from = r.query.from;else {
        var s = wx.getStorageSync("plat_from");s || "" == s || (config.from = s);
      }console.log(config.from);var l = { install: n, scene: i };this.log("start", l), wx.showShareMenu(), game_ver && this.checkGameVersion(game_ver, function (e) {
        o && o(e);
      });
    }, login: function (o, n) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55");var t = this;e.login = "function" == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          if (e.authSetting["scope.userInfo"]) console.log("[SDK]\u83b7\u5f97\u6388\u6743\u8bbe\u7f6e\uff1a\u5df2\u6388\u6743"), t.do_login();else {
            console.log("[SDK]\u83b7\u5f97\u6388\u6743\u8bbe\u7f6e\uff1a\u672a\u6388\u6743"), wx.hideLoading({});var o = wx.getSystemInfoSync(),
                n = (o.screenWidth, o.screenHeight, wx.createUserInfoButton({ type: "text", text: "\u6388\u6743\u767b\u5f55\u6e38\u620f", withCredentials: !1, style: { top: o.windowHeight / 2 + o.windowHeight / 4, left: o.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: "#07c160", color: "#ffffff", textAlign: "center", fontSize: 16, borderRadius: 4 } }));n.show(), n.onTap(e => {
              console.log(e), wxShowLoading({ title: "\u6b63\u5728\u767b\u5f55\u6e38\u620f" }), "getUserInfo:ok" == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), n.destroy();
            });
          }
        }, fail: function () {
          console.log("[SDK]\u83b7\u5f97\u6388\u6743\u8bbe\u7f6e\uff1a\u5931\u8d25"), t.do_login();
        } }) : (console.log("[SDK]\u6388\u6743\u767b\u5f55" + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var n = this;wx.login({ success: function (t) {
          if (console.log("\u5fae\u4fe1\u767b\u5f55\u6210\u529f\u8fd4\u56de" + JSON.stringify(t)), t.code) {
            var a = n.getPublicData();a.mo = 1, a.code = t.code, a.nick_name = o ? o.nick_name : "", a.head_img = o ? o.head_img : "", config.is_auth ? wx.getUserInfo({ success: function (o) {
                var n = o.encryptedData,
                    t = o.iv,
                    r = o.signature;a.encryptedData = n, a.iv = t, a.signature = r, wx.request({ url: HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: a, success: function (o) {
                    if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a"), console.log(o), 200 == o.statusCode) {
                      var n = o.data;if (n.state) {
                        var t = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token };try {
                          wx.setStorageSync("plat_sdk_token", n.data.sdk_token), wx.setStorageSync("plat_uid", n.data.user_id), wx.setStorageSync("plat_username", n.data.username), wx.setStorageSync("wx_openid", n.data.openid), n.data.ext && wx.setStorageSync("plat_session_key", n.data.ext);
                        } catch (e) {}e.login && e.login(0, t);
                      } else e.login && e.login(1, { errMsg: n.msg });
                    } else e.login && e.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01#1" });
                  }, fail: function (o) {
                    e.login && e.login(1, { errMsg: o.errMsg });
                  } });
              }, fail: function (o) {
                e.login && e.login(1, { errMsg: o.errMsg });
              } }) : wx.request({ url: HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: a, success: function (o) {
                if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a"), console.log(o), 200 == o.statusCode) {
                  var n = o.data;if (n.state) {
                    var t = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token };try {
                      wx.setStorageSync("plat_sdk_token", n.data.sdk_token), wx.setStorageSync("plat_uid", n.data.user_id), wx.setStorageSync("plat_username", n.data.username), wx.setStorageSync("wx_openid", n.data.openid), n.data.ext && wx.setStorageSync("plat_session_key", n.data.ext);
                    } catch (e) {}e.login && e.login(0, t);
                  } else e.login && e.login(1, { errMsg: n.msg });
                } else e.login && e.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01#2" });
              } });
          } else e.login && e.login(1, { errMsg: t.errMsg });
        }, fail: function (o) {
          console.log("\u5fae\u4fe1\u767b\u5f55\u5931\u8d25" + JSON.stringify(o)), (o.errMsg.indexOf("auth deny") > -1 || o.errMsg.indexOf("auth denied") > -1) && e.login && e.login(1, { errMsg: o.errMsg });
        } });
    }, checkGameVersion: function (e, o) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("plat_sdk_token");wx.request({ url: HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          if (console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u7ed3\u679c"), console.log(e), 200 == e.statusCode) {
            var n = e.data;n.state ? o && o(n.data) : o && o({ develop: 0 });
          } else o && o({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, pay: function (e, o) {
      var n = this;wx.checkSession({ success: function () {
          n.startPay(e, o);
        }, fail: function () {
          console.log("[SDK]session\u8fc7\u671f\u9700\u8981\u91cd\u65b0\u767b\u5f55"), n.login({}, function () {
            n.startPay(e, o);
          });
        } });
    }, startPay: function (o, n) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a"), console.log(o);var t = this;e.pay = "function" == typeof n ? n : null, 0;var a = wx.getStorageSync("plat_sdk_token"),
          r = wx.getStorageSync("plat_session_key");if (a && r) {
        var i = wx.getSystemInfoSync(),
            s = { cpbill: o.cpbill, productid: o.productid, productname: o.productname, productdesc: o.productdesc, serverid: o.serverid, servername: o.servername, roleid: o.roleid, rolename: o.rolename, rolelevel: o.rolelevel, price: o.price, extension: o.extension, sdk_token: a, session_key: r, platform: i.platform };t.order_data = s;var l = t.getPublicData();l.order_data = JSON.stringify(s), wx.request({ url: HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: l, success: function (o) {
            if (console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355"), console.log(o), 200 == o.statusCode) {
              var n = o.data;n.state ? void 0 === wx.requestPayment ? "android" == i.platform || "windows" == i.platform || "devtools" == i.platform ? n.data.is_android_pay ? t.kfPay(n.data) : t.gamePay(n.data) : n.data.is_ios_pay ? 1 == n.data.ios_pay_type && t.kfPay(n.data) : wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: "\u5f88\u62b1\u6b49\uff0c\u7531\u4e8e\u82f9\u679c\u653f\u7b56\uff0c\u6682\u65f6\u4e0d\u80fd\u652f\u4ed8\uff0c\u5b89\u5353\u624b\u673a\u4e0d\u53d7\u5f71\u54cd", confirmText: "\u6211\u77e5\u9053\u4e86", showCancel: !1 }) : t.minPay(n.data) : e.pay && e.pay(1, { errMsg: n.msg });
            } else e.login && e.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01#3" });
          } });
      } else e.pay && e.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, gamePay: function (o) {
      var n = this;o.buyQuantity <= o.balance ? (console.log("[SDK]\u6e38\u620f\u5e01\u5145\u503c\u76f4\u63a5\u6263\u9664"), wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: "\u60a8\u8fd8\u6709" + o.balance + "\u4e2a\u6e38\u620f\u5e01\u672a\u6d88\u8d39\uff0c\u672c\u6b21\u652f\u4ed8\u5c06\u6263\u9664" + o.buyQuantity + "\u6e38\u620f\u5e01", showCancel: !1, confirmText: "\u6211\u77e5\u9053\u4e86", success: function () {
          n.gameGoPay(o);
        } })) : (console.log("[SDK]\u8c03\u8d77\u7c73\u5927\u5e08\u652f\u4ed8"), console.log(o), wx.requestMidasPayment({ mode: "game", env: o.env, offerId: o.offerId, currencyType: o.currencyType, platform: o.platform, buyQuantity: o.buyQuantity, zoneId: o.zoneId, success: function (e) {
          "requestMidasPayment:ok" == e.errMsg && n.gameGoPay(o);
        }, fail: function (o) {
          -1 !== o.errMsg.indexOf("\u7528\u6237\u53d6\u6d88") ? e.pay && e.pay(2, { errMsg: "\u7528\u6237\u53d6\u6d88\u652f\u4ed8" }) : e.pay && e.pay(1, { errMsg: "\u652f\u4ed8\u5931\u8d25:" + o.errMsg + "(" + o.errCode + ")" });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      this_order_id = e.orderId, wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: '\u8fdb\u5165\u5ba2\u670d\u4f1a\u8bdd\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2\u5c0f\u5361\u7247\u6216\u8f93\u5165"cz"\u6216"\u5145\u503c"\u83b7\u53d6\u652f\u4ed8\u94fe\u63a5', showCancel: !1, confirmText: "\u6211\u77e5\u9053\u4e86", success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: "\u4e0d\u7528\u70b9\u8fd9\u4e2a\u5361\u7247", sendMessageImg: "https://static.357pk.net/uploads/2109/weixin_pay_img1.png" });
        } });
    }, gameGoPay: function (o, n) {
      console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u5b8c\u6bd5\uff0c\u901a\u77e5\u670d\u52a1\u5668\u53d1\u8d27");var t = this,
          a = wx.getStorageSync("plat_session_key");wx.request({ url: HOST + "/partner/pay/" + config.partner_id + "/" + config.game_pkg + "/", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { order_id: o.orderId, time: o.time, sign: o.sign, session_key: a }, success: function (n) {
          if (console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u7ed3\u679c"), console.log(n), 200 == n.statusCode) if (1 == n.data.state) {
            var a = { cpOrderNo: t.order_data.cpbill, orderNo: o.orderId, amount: t.order_data.price, extension: t.order_data.extension };e.pay && e.pay(0, a);
          } else e.pay && e.pay(1, { errMsg: "\u652f\u4ed8\u5931\u8d25" });
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync("plat_uid"),
          n = wx.getStorageSync("plat_username"),
          t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", t);
    }, logEnterGame: function (e) {
      var o = wx.getStorageSync("plat_uid"),
          n = wx.getStorageSync("plat_username"),
          t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", t);
    }, logRoleUpLevel: function (e) {
      var o = wx.getStorageSync("plat_uid"),
          n = wx.getStorageSync("plat_username"),
          t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", t);
    }, uuid: function (e, o) {
      var n,
          t,
          a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
          r = [];if (e = e || a.length, o) for (n = 0; n < o; n++) r[n] = a[0 | Math.random() * e];else for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", n = 0; n < 36; n++) r[n] || (t = 0 | 16 * Math.random(), r[n] = a[19 == n ? 3 & t | 8 : t]);return r.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync(),
          o = wx.getStorageSync("plat_uuid"),
          n = wx.getStorageSync("plat_idfv"),
          t = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: o, idfv: n, dname: e.model, mac: "0000", net_type: 0 == e.wifiSignal ? "4G" : "WIFI", os_ver: e.system, sdk_ver: e.version, game_ver: game_ver, device: "android" == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, o) {
      var n = this.getPublicData();for (var t in o) n[t] = o[t];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(n), wx.request({ url: HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      var e = "\u5fae\u7aef-\u4e0d\u7528\u70b9\u8fd9\u4e2a\u5361\u7247-" + wx.getStorageSync("wx_openid");wx.showModal({ title: "\u5fae\u7aef\u4e0b\u8f7d\u63d0\u793a", content: "\u8fdb\u5165\u5ba2\u670d\u4f1a\u8bdd\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2\u5c0f\u5361\u7247\u83b7\u53d6\u5fae\u7aef\u4e0b\u8f7d\u94fe\u63a5", showCancel: !1, confirmText: "\u6211\u77e5\u9053\u4e86", success: function () {
          var o = { showMessageCard: !0, sendMessageTitle: e, sendMessageImg: "https://static.357pk.net/uploads/2109/weixin_download_img2.jpg" };wx.openCustomerServiceConversation(o);
        } });
    }, checkMsg: function (e, o) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9");var n = wx.getStorageSync("plat_sdk_token");wx.request({ url: HOST + "/game/min/?ac=msgCheck", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, content: e }, success: function (e) {
          console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9\u7ed3\u679c\u8fd4\u56de:"), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    }, checkMsgV2: function (e, o) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9");var n = wx.getStorageSync("plat_sdk_token");wx.request({ url: HOST + "/game/min/?ac=msgCheckV2", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, content: e, scene: 1 }, success: function (e) {
          console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9\u7ed3\u679c\u8fd4\u56de:"), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    }, sendMessage: function (e, o, n) {
      console.log("[SDK]\u53d1\u9001\u8ba2\u9605\u6d88\u606f");var t = wx.getStorageSync("plat_sdk_token");wx.request({ url: HOST + "/game/min/?ac=sendMessage", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, template_id: e, data: o }, success: function (e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u53d1\u9001\u6210\u529f"), n && n(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    }, videoAdvert: function (e, o) {
      wx.request({ url: HOST + "/?method=user.gameConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id }, success: function (e) {
          var o = e.data.data.weixin_advert_id;let n = null;(n = wx.createRewardedVideoAd({ adUnitId: o })).show().catch(() => {
            n.load().then(() => n.show()).catch(e => {
              console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25");
            });
          }), n.onError(e => {
            console.log(e);
          }), n.onClose(e => {
            n && (n.offClose(), e && e.isEnded || void 0 === e ? console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u9700\u8981\u4e0b\u53d1\u5956\u52b1") : console.log("\u64ad\u653e\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u5956\u52b1"));
          });
        } });
    }, getGameConfig: function (e) {
      console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u914d\u7f6e"), wx.request({ url: HOST + "/?method=user.gameConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id }, success: function (o) {
          var n = o.data.data;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u914d\u7f6e\u6210\u529f"), console.log(o.data);var t;t = { pay_switch: n.pay_switch, game_ver: n.game_ver }, e && e(t);
        } });
    } };
}function run(e, o, n) {
  e in PARTNER_SDK && PARTNER_SDK[e](o, n);
}const tempobj = {};window.cwan = tempobj, tempobj.init = function (e, o) {
  run("init", e, o);
}, tempobj.login = function (e) {
  run("login", "", e);
}, tempobj.pay = function (e, o) {
  run("pay", e, o);
}, tempobj.logCreateRole = function (e, o, n, t, a) {
  run("logCreateRole", { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, tempobj.logEnterGame = function (e, o, n, t, a) {
  run("logEnterGame", { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, tempobj.logRoleUpLevel = function (e, o, n, t, a) {
  run("logRoleUpLevel", { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, tempobj.downloadClient = function () {
  run("downloadClient");
}, tempobj.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, tempobj.getPublicData = function () {
  run("getPublicData");
}, tempobj.checkMsg = function (e, o) {
  run("checkMsg", e, o);
}, tempobj.checkMsgV2 = function (e, o) {
  run("checkMsgV2", e, o);
}, tempobj.sendMessage = function (e, o, n) {
  run("sendMessage", e, o, n);
}, tempobj.videoAdvert = function (e, o) {
  run("videoAdvert", e, o);
}, tempobj.getGameConfig = function (e) {
  run("getGameConfig", e);
};