var config = { game_id: "2", game_pkg: "tjqy_tjqyxyx_A", partner_id: "4", is_auth: !1, from: null };window.config = config;var PARTNER_SDK = mainSDK();var HOST = "https://sdk.357pk.net";var user_game_info = null;var this_order_id = null;var game_ver = "";function mainSDK() {
  var r = {};return { order_data: {}, init: function (e, o) {
      game_ver = e && e.game_ver ? e.game_ver : 0, console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var n = this;var t;t = (a = wx.getStorageSync("plat_uuid")) ? 0 : (a = n.uuid(16, 32), wx.setStorageSync("plat_uuid", a), 1), (e = wx.getStorageSync("plat_idfv")) || (e = n.uuid(16, 32), wx.setStorageSync("plat_idfv", e));var a = wx.getLaunchOptionsSync();e = a.scene || "";console.log("[SDK]\u5c0f\u6e38\u620f\u542f\u52a8\u53c2\u6570"), console.log(a), t && a.query && a.query.ad_code && wx.setStorageSync("plat_ad_code", a.query.ad_code), a.query && a.query.from && "" != a.query.from ? (t && wx.setStorageSync("plat_from", a.query.from), config.from = a.query.from) : (a = wx.getStorageSync("plat_from")) || "" == a || (config.from = a), console.log(config.from), n.log("start", { install: t, scene: e }), wx.showShareMenu(), game_ver && this.checkGameVersion(game_ver, function (e) {
        o && o(e);
      });
    }, login: function (e, o) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55");var t = this;r.login = "function" == typeof o ? o : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var o, n;e.authSetting["scope.userInfo"] ? (console.log("[SDK]\u83b7\u5f97\u6388\u6743\u8bbe\u7f6e\uff1a\u5df2\u6388\u6743"), t.do_login()) : (console.log("[SDK]\u83b7\u5f97\u6388\u6743\u8bbe\u7f6e\uff1a\u672a\u6388\u6743"), wx.hideLoading({}), e = 2 * (o = wx.getSystemInfoSync()).screenWidth / 3, o.screenHeight, (n = wx.createUserInfoButton({ type: "text", text: "\u6388\u6743\u767b\u5f55\u6e38\u620f", withCredentials: !1, style: { top: o.windowHeight / 2 + o.windowHeight / 4, left: o.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: "#07c160", color: "#ffffff", textAlign: "center", fontSize: 16, borderRadius: 4 } })).show(), n.onTap(e => {
            console.log(e), wxShowLoading({ title: "\u6b63\u5728\u767b\u5f55\u6e38\u620f" }), "getUserInfo:ok" == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), n.destroy();
          }));
        }, fail: function () {
          console.log("[SDK]\u83b7\u5f97\u6388\u6743\u8bbe\u7f6e\uff1a\u5931\u8d25"), t.do_login();
        } }) : (console.log("[SDK]\u6388\u6743\u767b\u5f55" + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var n = this;wx.login({ success: function (e) {
          var t;console.log("\u5fae\u4fe1\u767b\u5f55\u6210\u529f\u8fd4\u56de" + JSON.stringify(e)), e.code ? ((t = n.getPublicData()).mo = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", config.is_auth ? wx.getUserInfo({ success: function (e) {
              var o = e.encryptedData;var n = e.iv;e = e.signature;t.encryptedData = o, t.iv = n, t.signature = e, wx.request({ url: HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
                  if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a"), console.log(e), 200 == e.statusCode) {
                    var o = e.data;if (o.state) {
                      e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                        wx.setStorageSync("plat_sdk_token", o.data.sdk_token), wx.setStorageSync("plat_uid", o.data.user_id), wx.setStorageSync("plat_username", o.data.username), o.data.ext && wx.setStorageSync("plat_session_key", o.data.ext);
                      } catch (e) {}r.login && r.login(0, e);
                    } else r.login && r.login(1, { errMsg: o.msg });
                  } else r.login && r.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01#1" });
                }, fail: function (e) {
                  r.login && r.login(1, { errMsg: e.errMsg });
                } });
            }, fail: function (e) {
              r.login && r.login(1, { errMsg: e.errMsg });
            } }) : wx.request({ url: HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
              if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a"), console.log(e), 200 == e.statusCode) {
                var o = e.data;if (o.state) {
                  e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                    wx.setStorageSync("plat_sdk_token", o.data.sdk_token), wx.setStorageSync("plat_uid", o.data.user_id), wx.setStorageSync("plat_username", o.data.username), o.data.ext && wx.setStorageSync("plat_session_key", o.data.ext);
                  } catch (e) {}r.login && r.login(0, e);
                } else r.login && r.login(1, { errMsg: o.msg });
              } else r.login && r.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01#2" });
            } })) : r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log("\u5fae\u4fe1\u767b\u5f55\u5931\u8d25" + JSON.stringify(e)), (-1 < e.errMsg.indexOf("auth deny") || -1 < e.errMsg.indexOf("auth denied")) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, checkGameVersion: function (e, n) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("plat_sdk_token");wx.request({ url: HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var o;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u7ed3\u679c"), console.log(e), 200 == e.statusCode && (o = e.data).state ? n && n(o.data) : n && n({ develop: 0 });
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
    }, startPay: function (e, o) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a"), console.log(e);var n = this;r.pay = "function" == typeof o ? o : null;var t = wx.getStorageSync("plat_sdk_token");o = wx.getStorageSync("plat_session_key");var a;t && o ? (a = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: o, platform: a.platform }, n.order_data = t, (o = n.getPublicData()).order_data = JSON.stringify(t), wx.request({ url: HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: o, success: function (e) {
          console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? "android" == a.platform || "windows" == a.platform || "devtools" == a.platform ? e.data.is_android_pay ? n.kfPay(e.data) : n.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type && n.kfPay(e.data) : wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: "\u5f88\u62b1\u6b49\uff0c\u7531\u4e8e\u82f9\u679c\u653f\u7b56\uff0c\u6682\u65f6\u4e0d\u80fd\u652f\u4ed8\uff0c\u5b89\u5353\u624b\u673a\u4e0d\u53d7\u5f71\u54cd", confirmText: "\u6211\u77e5\u9053\u4e86", showCancel: !1 }) : n.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01#3" });
        } })) : r.pay && r.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, gamePay: function (o) {
      var n = this;o.buyQuantity <= o.balance ? (console.log("[SDK]\u6e38\u620f\u5e01\u5145\u503c\u76f4\u63a5\u6263\u9664"), wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: "\u60a8\u8fd8\u6709" + o.balance + "\u4e2a\u6e38\u620f\u5e01\u672a\u6d88\u8d39\uff0c\u672c\u6b21\u652f\u4ed8\u5c06\u6263\u9664" + o.buyQuantity + "\u6e38\u620f\u5e01", showCancel: !1, confirmText: "\u6211\u77e5\u9053\u4e86", success: function () {
          n.gameGoPay(o);
        } })) : (console.log("[SDK]\u8c03\u8d77\u7c73\u5927\u5e08\u652f\u4ed8"), console.log(o), wx.requestMidasPayment({ mode: "game", env: o.env, offerId: o.offerId, currencyType: o.currencyType, platform: o.platform, buyQuantity: o.buyQuantity, zoneId: o.zoneId, success: function (e) {
          "requestMidasPayment:ok" == e.errMsg && n.gameGoPay(o);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf("\u7528\u6237\u53d6\u6d88") ? r.pay && r.pay(2, { errMsg: "\u7528\u6237\u53d6\u6d88\u652f\u4ed8" }) : r.pay && r.pay(1, { errMsg: "\u652f\u4ed8\u5931\u8d25:" + e.errMsg + "(" + e.errCode + ")" });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      this_order_id = e.orderId, wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: '\u8fdb\u5165\u5ba2\u670d\u4f1a\u8bdd\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2\u5c0f\u5361\u7247\u6216\u8f93\u5165"cz"\u6216"\u5145\u503c"\u83b7\u53d6\u652f\u4ed8\u94fe\u63a5', showCancel: !1, confirmText: "\u6211\u77e5\u9053\u4e86", success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: "\u4e0d\u7528\u70b9\u8fd9\u4e2a\u5361\u7247", sendMessageImg: "https://static.357pk.net/uploads/2109/weixin_pay_img1.png" });
        } });
    }, gameGoPay: function (o, e) {
      console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u5b8c\u6bd5\uff0c\u901a\u77e5\u670d\u52a1\u5668\u53d1\u8d27");var n = this;var t = wx.getStorageSync("plat_session_key");wx.request({ url: HOST + "/partner/pay/" + config.partner_id + "/" + config.game_pkg + "/", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { order_id: o.orderId, time: o.time, sign: o.sign, session_key: t }, success: function (e) {
          console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u7ed3\u679c"), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: n.order_data.cpbill, orderNo: o.orderId, amount: n.order_data.price, extension: n.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: "\u652f\u4ed8\u5931\u8d25" }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync("plat_uid");var n = wx.getStorageSync("plat_username");var t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", t);
    }, logEnterGame: function (e) {
      var o = wx.getStorageSync("plat_uid");var n = wx.getStorageSync("plat_username");var t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", t);
    }, logRoleUpLevel: function (e) {
      var o = wx.getStorageSync("plat_uid");var n = wx.getStorageSync("plat_username");var t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", t);
    }, uuid: function (e, o) {
      var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var t,
          a = [];var r;if (e = e || n.length, o) for (t = 0; t < o; t++) a[t] = n[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = n[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var o = wx.getStorageSync("plat_uuid");var n = wx.getStorageSync("plat_idfv");var t = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: o, idfv: n, dname: e.model, mac: "0000", net_type: 0 == e.wifiSignal ? "4G" : "WIFI", os_ver: e.system, sdk_ver: e.version, game_ver: game_ver, device: "android" == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, o) {
      var n = this.getPublicData();for (var t in o) n[t] = o[t];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(n), wx.request({ url: HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.showModal({ title: "\u5fae\u7aef\u4e0b\u8f7d\u63d0\u793a", content: '\u8fdb\u5165\u5ba2\u670d\u4f1a\u8bdd\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2\u5c0f\u5361\u7247\u6216\u8f93\u5165"wd"\u6216"\u5fae\u7aef"\u83b7\u53d6\u5fae\u7aef\u4e0b\u8f7d\u94fe\u63a5', showCancel: !1, confirmText: "\u6211\u77e5\u9053\u4e86", success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: "\u5fae\u7aef-\u4e0d\u7528\u70b9\u8fd9\u4e2a\u5361\u7247", sendMessageImg: "https://static.357pk.net/uploads/2109/weixin_download_img2.jpg" });
        } });
    }, checkMsg: function (e, o) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9");var n = wx.getStorageSync("plat_sdk_token");wx.request({ url: HOST + "/game/min/?ac=msgCheck", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, content: e }, success: function (e) {
          console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9\u7ed3\u679c\u8fd4\u56de:"), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    } };
}function run(e, o, n) {
  e in PARTNER_SDK && PARTNER_SDK[e](o, n);
}exports.init = function (e, o) {
  run("init", e, o);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.pay = function (e, o) {
  run("pay", e, o);
}, exports.logCreateRole = function (e, o, n, t, a) {
  run("logCreateRole", { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, o, n, t, a) {
  run("logEnterGame", { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, o, n, t, a) {
  run("logRoleUpLevel", { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, exports.downloadClient = function () {
  run("downloadClient");
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run("getPublicData");
}, exports.checkMsg = function (e, o) {
  run("checkMsg", e, o);
};