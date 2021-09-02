var config = { game_id: "2", game_pkg: "tjqy_tjqyxyx_A", partner_id: "4", is_auth: !1, from: null };var PARTNER_SDK = mainSDK();var HOST = "https://sdk.357pk.net";var user_game_info = null;var this_order_id = null;var game_ver = "";function mainSDK() {
  var a = {};return { order_data: {}, init: function (e, o) {
      game_ver = e && e.game_ver ? e.game_ver : 0, console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var t = this;var n;n = (r = wx.getStorageSync("plat_uuid")) ? 0 : (r = t.uuid(16, 32), wx.setStorageSync("plat_uuid", r), 1), (e = wx.getStorageSync("plat_idfv")) || (e = t.uuid(16, 32), wx.setStorageSync("plat_idfv", e));var r = wx.getLaunchOptionsSync();e = r.scene || "";console.log("[SDK]\u5c0f\u6e38\u620f\u542f\u52a8\u53c2\u6570"), console.log(r), n && r.query && r.query.ad_code && wx.setStorageSync("plat_ad_code", r.query.ad_code), r.query && r.query.from && "" != r.query.from ? (n && wx.setStorageSync("plat_from", r.query.from), config.from = r.query.from) : (r = wx.getStorageSync("plat_from")) || "" == r || (config.from = r), console.log(config.from), t.log("start", { install: n, scene: e }), wx.showShareMenu(), game_ver && this.checkGameVersion(game_ver, function (e) {
        o && o(e);
      });
    }, login: function (e, o) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55");var n = this;a.login = "function" == typeof o ? o : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var o, t;e.authSetting["scope.userInfo"] ? (console.log("[SDK]\u83b7\u5f97\u6388\u6743\u8bbe\u7f6e\uff1a\u5df2\u6388\u6743"), n.do_login()) : (console.log("[SDK]\u83b7\u5f97\u6388\u6743\u8bbe\u7f6e\uff1a\u672a\u6388\u6743"), wx.hideLoading({}), e = 2 * (o = wx.getSystemInfoSync()).screenWidth / 3, o.screenHeight, (t = wx.createUserInfoButton({ type: "text", text: "\u6388\u6743\u767b\u5f55\u6e38\u620f", withCredentials: !1, style: { top: o.windowHeight / 2 + o.windowHeight / 4, left: o.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: "#07c160", color: "#ffffff", textAlign: "center", fontSize: 16, borderRadius: 4 } })).show(), t.onTap(e => {
            console.log(e), wxShowLoading({ title: "\u6b63\u5728\u767b\u5f55\u6e38\u620f" }), "getUserInfo:ok" == e.errMsg ? n.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : n.do_login(), t.destroy();
          }));
        }, fail: function () {
          console.log("[SDK]\u83b7\u5f97\u6388\u6743\u8bbe\u7f6e\uff1a\u5931\u8d25"), n.do_login();
        } }) : (console.log("[SDK]\u6388\u6743\u767b\u5f55" + config.is_auth), n.do_login());
    }, do_login: function (o) {
      var t = this;wx.login({ success: function (e) {
          var n;console.log("\u5fae\u4fe1\u767b\u5f55\u6210\u529f\u8fd4\u56de" + JSON.stringify(e)), e.code ? ((n = t.getPublicData()).mo = 1, n.code = e.code, n.nick_name = o ? o.nick_name : "", n.head_img = o ? o.head_img : "", config.is_auth ? wx.getUserInfo({ success: function (e) {
              var o = e.encryptedData;var t = e.iv;e = e.signature;n.encryptedData = o, n.iv = t, n.signature = e, wx.request({ url: HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (e) {
                  if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a"), console.log(e), 200 == e.statusCode) {
                    var o = e.data;if (o.state) {
                      e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                        wx.setStorageSync("plat_sdk_token", o.data.sdk_token), wx.setStorageSync("plat_uid", o.data.user_id), wx.setStorageSync("plat_username", o.data.username), o.data.ext && wx.setStorageSync("plat_session_key", o.data.ext);
                      } catch (e) {}a.login && a.login(0, e);
                    } else a.login && a.login(1, { errMsg: o.msg });
                  } else a.login && a.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01#1" });
                }, fail: function (e) {
                  a.login && a.login(1, { errMsg: e.errMsg });
                } });
            }, fail: function (e) {
              a.login && a.login(1, { errMsg: e.errMsg });
            } }) : wx.request({ url: HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (e) {
              if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a"), console.log(e), 200 == e.statusCode) {
                var o = e.data;if (o.state) {
                  e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                    wx.setStorageSync("plat_sdk_token", o.data.sdk_token), wx.setStorageSync("plat_uid", o.data.user_id), wx.setStorageSync("plat_username", o.data.username), o.data.ext && wx.setStorageSync("plat_session_key", o.data.ext);
                  } catch (e) {}a.login && a.login(0, e);
                } else a.login && a.login(1, { errMsg: o.msg });
              } else a.login && a.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01#2" });
            } })) : a.login && a.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log("\u5fae\u4fe1\u767b\u5f55\u5931\u8d25" + JSON.stringify(e)), (-1 < e.errMsg.indexOf("auth deny") || -1 < e.errMsg.indexOf("auth denied")) && a.login && a.login(1, { errMsg: e.errMsg });
        } });
    }, checkGameVersion: function (e, t) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("plat_sdk_token");wx.request({ url: HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var o;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u7ed3\u679c"), console.log(e), 200 == e.statusCode && (o = e.data).state ? t && t(o.data) : t && t({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, pay: function (e, o) {
      var t = this;wx.checkSession({ success: function () {
          t.startPay(e, o);
        }, fail: function () {
          console.log("[SDK]session\u8fc7\u671f\u9700\u8981\u91cd\u65b0\u767b\u5f55"), t.login({}, function () {
            t.startPay(e, o);
          });
        } });
    }, startPay: function (e, o) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a"), console.log(e);var t = this;a.pay = "function" == typeof o ? o : null;var n = wx.getStorageSync("plat_sdk_token");o = wx.getStorageSync("plat_session_key");var r;n && o ? (r = wx.getSystemInfoSync(), n = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: o, platform: r.platform }, t.order_data = n, (o = t.getPublicData()).order_data = JSON.stringify(n), wx.request({ url: HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: o, success: function (e) {
          console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? "android" == r.platform || "windows" == r.platform || "devtools" == r.platform ? e.data.is_android_pay ? t.kfPay(e.data) : t.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type && t.kfPay(e.data) : wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: "\u5f88\u62b1\u6b49\uff0c\u7531\u4e8e\u82f9\u679c\u653f\u7b56\uff0c\u6682\u65f6\u4e0d\u80fd\u652f\u4ed8\uff0c\u5b89\u5353\u624b\u673a\u4e0d\u53d7\u5f71\u54cd", confirmText: "\u6211\u77e5\u9053\u4e86", showCancel: !1 }) : t.minPay(e.data) : a.pay && a.pay(1, { errMsg: e.msg }) : a.login && a.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01#3" });
        } })) : a.pay && a.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, gamePay: function (o) {
      var t = this;o.buyQuantity <= o.balance ? (console.log("[SDK]\u6e38\u620f\u5e01\u5145\u503c\u76f4\u63a5\u6263\u9664"), wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: "\u60a8\u8fd8\u6709" + o.balance + "\u4e2a\u6e38\u620f\u5e01\u672a\u6d88\u8d39\uff0c\u672c\u6b21\u652f\u4ed8\u5c06\u6263\u9664" + o.buyQuantity + "\u6e38\u620f\u5e01", showCancel: !1, confirmText: "\u6211\u77e5\u9053\u4e86", success: function () {
          t.gameGoPay(o);
        } })) : (console.log("[SDK]\u8c03\u8d77\u7c73\u5927\u5e08\u652f\u4ed8"), console.log(o), wx.requestMidasPayment({ mode: "game", env: o.env, offerId: o.offerId, currencyType: o.currencyType, platform: o.platform, buyQuantity: o.buyQuantity, zoneId: o.zoneId, success: function (e) {
          "requestMidasPayment:ok" == e.errMsg && t.gameGoPay(o);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf("\u7528\u6237\u53d6\u6d88") ? a.pay && a.pay(2, { errMsg: "\u7528\u6237\u53d6\u6d88\u652f\u4ed8" }) : a.pay && a.pay(1, { errMsg: "\u652f\u4ed8\u5931\u8d25:" + e.errMsg + "(" + e.errCode + ")" });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      this_order_id = e.orderId, wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: '\u8fdb\u5165\u5ba2\u670d\u4f1a\u8bdd\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2\u5c0f\u5361\u7247\u6216\u8f93\u5165"cz"\u6216"\u5145\u503c"\u83b7\u53d6\u652f\u4ed8\u94fe\u63a5', showCancel: !1, confirmText: "\u6211\u77e5\u9053\u4e86", success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: "\u4e0d\u7528\u70b9\u8fd9\u4e2a\u5361\u7247", sendMessageImg: "https://static.sh9130.com/gw/images/WechatIMG700.png" });
        } });
    }, gameGoPay: function (o, e) {
      console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u5b8c\u6bd5\uff0c\u901a\u77e5\u670d\u52a1\u5668\u53d1\u8d27");var t = this;var n = wx.getStorageSync("plat_session_key");wx.request({ url: HOST + "/partner/pay/" + config.partner_id + "/" + config.game_pkg + "/", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { order_id: o.orderId, time: o.time, sign: o.sign, session_key: n }, success: function (e) {
          console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u7ed3\u679c"), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: t.order_data.cpbill, orderNo: o.orderId, amount: t.order_data.price, extension: t.order_data.extension }, a.pay && a.pay(0, e)) : a.pay && a.pay(1, { errMsg: "\u652f\u4ed8\u5931\u8d25" }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var n = {};n.user_id = o, n.user_name = t, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", n);
    }, logEnterGame: function (e) {
      var o = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var n = {};n.user_id = o, n.user_name = t, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", n);
    }, logRoleUpLevel: function (e) {
      var o = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var n = {};n.user_id = o, n.user_name = t, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", n);
    }, uuid: function (e, o) {
      var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var n,
          r = [];var a;if (e = e || t.length, o) for (n = 0; n < o; n++) r[n] = t[0 | Math.random() * e];else for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", n = 0; n < 36; n++) r[n] || (a = 0 | 16 * Math.random(), r[n] = t[19 == n ? 3 & a | 8 : a]);return r.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var o = wx.getStorageSync("plat_uuid");var t = wx.getStorageSync("plat_idfv");var n = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: n, uuid: o, idfv: t, dname: e.model, mac: "0000", net_type: 0 == e.wifiSignal ? "4G" : "WIFI", os_ver: e.system, sdk_ver: e.version, game_ver: game_ver, device: "android" == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, o) {
      var t = this.getPublicData();for (var n in o) t[n] = o[n];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(t), wx.request({ url: HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, checkMsg: function (e, o) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9");var t = wx.getStorageSync("plat_sdk_token");wx.request({ url: HOST + "/game/min/?ac=msgCheck", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, content: e }, success: function (e) {
          console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9\u7ed3\u679c\u8fd4\u56de:"), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    } };
}function run(e, o, t) {
  e in PARTNER_SDK && PARTNER_SDK[e](o, t);
}exports.init = function (e, o) {
  run("init", e, o);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.pay = function (e, o) {
  run("pay", e, o);
}, exports.logCreateRole = function (e, o, t, n, r) {
  run("logCreateRole", { serverid: e, servername: o, roleid: t, rolename: n, rolelevel: r });
}, exports.logEnterGame = function (e, o, t, n, r) {
  run("logEnterGame", { serverid: e, servername: o, roleid: t, rolename: n, rolelevel: r });
}, exports.logRoleUpLevel = function (e, o, t, n, r) {
  run("logRoleUpLevel", { serverid: e, servername: o, roleid: t, rolename: n, rolelevel: r });
}, exports.downloadClient = function () {
  run("downloadClient");
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run("getPublicData");
}, exports.checkMsg = function (e, o) {
  run("checkMsg", e, o);
};