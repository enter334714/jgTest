import dkm from "./dddhelp";var config = { game_id: "285", game_pkg: "tjqy_tjqyjyhjl_FH", partner_id: "249", game_ver: "4.0.0", partner_label: "pbxyx", is_auth: !1 };window.config = config;var PARTNER_UNION_SDK = mainUnionSDK();var PARTNER_HOST = "sdk.sh9130.com";var t;var t_second = 0;var t_max = 300;var user_game_info_9130 = null;var user_invite_info_9130 = null;var this_order_id = null;function mainUnionSDK() {
  var a = {};return { order_data: {}, init: function (e, n) {
      var r = e && e.game_ver ? e.game_ver : 0;console.log("[UNION_SDK]CP init");var o = this;var a;a = (t = wx.getStorageSync("9130_plat_uuid")) ? 0 : (t = o.uuid(16, 32), wx.setStorageSync("9130_plat_uuid", t), 1), (e = wx.getStorageSync("9130_plat_idfv")) || (e = o.uuid(16, 32), wx.setStorageSync("9130_plat_idfv", e));var t = wx.getLaunchOptionsSync();e = t.scene || "";a && t.query && t.query.ad_code && wx.setStorageSync("9130_plat_ad_code", t.query.ad_code), o.log("start", { install: a, scene: e }), dkm.init({ game_ver: r }, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log("[UNION_SDK]\u767b\u5f55");var r = this;a.login = "function" == typeof n ? n : null, dkm.login(function (e, n) {
        console.log("[UNION_SDK]\u767b\u5f55\u8fd4\u56de"), console.log(e), console.log(n), n.token ? r.do_login(n) : a.login && a.login(1, { errMsg: res.errMsg });
      });
    }, do_login: function (e) {
      var n = this.getPublicData();if (n.token = e.token, n.uid = e.userid, n.is_from_min = 1, user_invite_info_9130 && "object" == typeof user_invite_info) for (var r in user_invite_info_9130) n[r] = user_invite_info_9130[r];if (user_invite_info_9130 && "object" == typeof user_invite_info_9130) for (var r in user_invite_info_9130) n[r] = user_invite_info_9130[r];wx.request({ url: "https://" + PARTNER_HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (e) {
          if (console.log("[UNION_SDK]\u8054\u8fd0\u767b\u5f55\u7ed3\u679c"), console.log(e), 200 == e.statusCode) {
            var n = e.data;if (n.state) {
              e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                wx.setStorageSync("9130_plat_sdk_token", n.data.sdk_token), wx.setStorageSync("9130_plat_uid", n.data.user_id), wx.setStorageSync("9130_plat_username", n.data.username);
              } catch (e) {}a.login && a.login(0, e);
            } else a.login && a.login(1, { errMsg: n.msg });
          } else a.login && a.login(1, { errMsg: "\u8054\u8fd0\u767b\u5f55\u5931\u8d25" });
        } });
    }, share: function (e) {
      dkm.share(e);
    }, logStartShare: function (e) {
      var n = wx.getStorageSync("9130_plat_sdk_token");wx.request({ url: "https://" + PARTNER_HOST + "/game/min/?ac=logStartShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: user_game_info_9130 ? user_game_info_9130.server_id : "", role_id: user_game_info_9130 ? user_game_info_9130.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      dkm.openService();
    }, checkGameVersion: function (e, r) {
      console.log("[UNION_SDK]\u68c0\u67e5\u7248\u672c");wx.getStorageSync("9130_plat_sdk_token");wx.request({ url: "https://" + PARTNER_HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var n;console.log("[UNION_SDK]\u68c0\u67e5\u7248\u672c\u7ed3\u679c"), console.log(e), 200 == e.statusCode && (n = e.data).state ? r && r(n.data) : r && r({ develop: 0 });
        } });
    }, getShareInfo: function (e, n) {
      var r = wx.getStorageSync("9130_plat_sdk_token");wx.request({ url: "https://" + PARTNER_HOST + "/game/min/?ac=shareConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: user_game_info_9130 ? user_game_info_9130.server_id : "", role_id: user_game_info_9130 ? user_game_info_9130.role_id : "", no_log: 1 }, success: function (e) {
          console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : a.share && a.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u5931\u8d25" + e.msg }) : a.share && a.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u5931\u8d25" });
        } });
    }, updateShare: function (e, n, r, o, a, t) {
      var i = wx.getStorageSync("9130_plat_sdk_token");wx.request({ url: "https://" + PARTNER_HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: r, role_id: o, sever_id: a, scene: t }, success: function (e) {
          console.log("[UNION_SDK]:\u5206\u4eab\u6570\u636e\u5931\u8d25"), console.log(e);
        } });
    }, adClick: function (e, n) {
      dkm.adClick(e, n);
    }, msgCheck: function (e, n) {
      dkm.msgCheck(e, n);
    }, pay: function (e, n) {
      var r = this;wx.checkSession({ success: function () {
          r.startPay(e, n);
        }, fail: function () {
          console.log("[UNION_SDK]\u672a\u767b\u5f55"), r.login({}, function () {
            r.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log("[UNION_SDK]\u5f00\u59cb\u652f\u4ed8"), console.log(e);a.pay = "function" == typeof n ? n : null;var r = wx.getStorageSync("9130_plat_sdk_token");var o;r ? (n = wx.getSystemInfoSync(), o = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, platform: n.platform }, this.order_data = o, (n = this.getPublicData()).order_data = JSON.stringify(o), n.is_from_min = 1, wx.request({ url: "https://" + PARTNER_HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (e) {
          var n;console.log("[UNION_SDK]\u8054\u8fd0\u4e0b\u5355"), console.log(e), 200 == e.statusCode ? (n = e.data).state ? (e = { cpbill: o.cpbill, price: n.data.pay_data.price, currency: "CNY", productid: n.data.pay_data.productid, productname: n.data.pay_data.productname, productdesc: n.data.pay_data.productdesc, roleid: n.data.pay_data.roleid, rolename: n.data.pay_data.rolename, rolelevel: n.data.pay_data.rolelevel, serverid: n.data.pay_data.serverid, servername: n.data.pay_data.servername, extension: n.data.orderId, callback: function (e) {
              "200" == e.result || a.pay && a.pay(1, { errMsg: n.msg });
            } }, console.log("[UNION_SDK]\u8054\u8fd0\u4e0b\u5355\u53c2\u6570" + JSON.stringify(e)), dkm.pay(e)) : a.pay && a.pay(1, { errMsg: n.msg }) : a.login && a.login(1, { errMsg: "\u4e0b\u5355\u5931\u8d25" });
        } })) : a.pay && a.pay(1, { errMsg: "\u672a\u767b\u5f55" });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: "wxb9e0af496b6bdedf", path: "pages/pay/pay?order_id=" + e.orderId + "&money=" + e.money, extraData: {}, envVersion: "release", success(e) {} });
    }, minPay: function (n) {
      var r = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          "requestPayment:ok" == e.errMsg && (e = { cpOrderNo: r.order_data.cpbill, orderNo: n.orderId, amount: r.order_data.price, extension: r.order_data.extension }, a.pay && a.pay(0, e));
        }, fail: function (e) {
          "requestPayment:fail cancel" == e.errMsg ? a.pay && a.pay(2, { errMsg: "\u652f\u4ed8\u5931\u8d25" }) : a.pay && a.pay(1, { errMsg: "\u652f\u4ed8\u5931\u8d25:" + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var r = this;n.buyQuantity <= n.balance ? (console.log("[UNION_SDK]game_pay"), wx.showModal({ title: "\u93c0\ue219\u7caf\u93bb\u612e\u305a", content: "\u93ae\u3128\u7e55\u93c8\ufffd" + n.balance + "\u6d93\ue045\u7236\u93b4\u5fd3\u7af5\u93c8\ue045\u79f7\u7490\u7678\u7d1d\u93c8\ue101\ue0bc\u93c0\ue219\u7caf\u704f\u55d8\u58b8\u95c4\ufffd" + n.buyQuantity + "\u5a13\u544a\u5799\u752f\ufffd", showCancel: !1, confirmText: "\u93b4\u6220\u7161\u95ac\u64b2\u7c21", success: function () {
          r.gameGoPay(n);
        } })) : (console.log("[UNION_SDK]\u7c73\u5927\u5e08"), wx.requestMidasPayment({ mode: "game", env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          "requestMidasPayment:ok" == e.errMsg && r.gameGoPay(n);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf("\u9422\u3126\u57db\u9359\u6828\u79f7") ? a.pay && a.pay(2, { errMsg: "\u8c03\u8d77\u7c73\u5927\u5e08\u5931\u8d25" }) : a.pay && a.pay(1, { errMsg: "\u8c03\u8d77\u7c73\u5927\u5e08\u5931\u8d25:" + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      this_order_id = e.orderId, wx.showModal({ title: "\u93c0\ue219\u7caf\u93bb\u612e\u305a", content: '\u9357\u51b2\u76a2\u93b5\u64b3\u7d11\u7039\u3221\u6e47\u9471\u5a42\u3049\u9423\u5c84\u6f70\u951b\u5c83\u7ded\u934f\ufffd"cz"\u93b4\u682c\u20ac\ufffd"\u934f\u546d\u20ac\ufffd"\u9359\ue219\u4e92\u947e\u5cf0\u5f47\u93c0\ue219\u7caf\u95be\u70ac\u5e34', showCancel: !1, confirmText: "\u93b4\u6220\u7161\u95ac\u64b2\u7c21", success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: "\u9410\u89c4\u579c\u934f\u546d\u20ac\ufffd", sendMessageImg: "https://static.sh9130.com/gw/images/WechatIMG700.png" });
        } });
    }, gameGoPay: function (n, e) {
      console.log("[UNION_SDK]\u7eeb\u51b2\u3047\u752f\u581f\u656e\u6d60\u6a3a\u756c\u59e3\u66ea\u7d1d\u95ab\u6c31\u7161\u93c8\u5d85\u59df\u9363\u3125\u5f42\u7490\ufffd");var r = this;wx.request({ url: "https://" + PARTNER_HOST + "/partner/pay/" + config.partner_id + "/" + config.game_pkg + "/", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { order_id: n.orderId, time: n.time, sign: n.sign }, success: function (e) {
          console.log("[UNION_SDK]\u7eeb\u51b2\u3047\u752f\u581f\u656e\u6d60\u6a3c\u7ca8\u93cb\ufffd"), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: r.order_data.cpbill, orderNo: n.orderId, amount: r.order_data.price, extension: r.order_data.extension }, a.pay && a.pay(0, e)) : a.pay && a.pay(1, { errMsg: "\u93c0\ue219\u7caf\u6fb6\u8fab\u89e6" }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync("9130_plat_uid");var r = wx.getStorageSync("9130_plat_username");var o = {};o.user_id = n, o.user_name = r, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && (user_game_info_9130 = { role_id: e.roleid, server_id: e.serverid }), this.log("create", o), dkm.logCreateRole(e.serverid, e.servername, e.serverid, e.rolename, e.rolelevel);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync("9130_plat_uid");var r = wx.getStorageSync("9130_plat_username");var o = {};o.user_id = n, o.user_name = r, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && (user_game_info_9130 = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", o), dkm.logEnterGame(e.serverid, e.servername, e.serverid, e.rolename, e.rolelevel), user_invite_info_9130 && this.updateShare(user_invite_info_9130.invite, user_invite_info_9130.invite_type, user_invite_info_9130.is_new, e.roleid, e.serverid, user_invite_info_9130.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync("9130_plat_uid");var r = wx.getStorageSync("9130_plat_username");var o = {};o.user_id = n, o.user_name = r, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && (user_game_info_9130 = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", o), dkm.logRoleUpLevel(e.serverid, e.servername, e.serverid, e.rolename, e.rolelevel);
    }, weiduanHelper: function () {
      dkm.downloadClient();
    }, uuid: function (e, n) {
      var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var o,
          a = [];var t;if (e = e || r.length, n) for (o = 0; o < n; o++) a[o] = r[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", o = 0; o < 36; o++) a[o] || (t = 0 | 16 * Math.random(), a[o] = r[19 == o ? 3 & t | 8 : t]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync("9130_plat_uuid");var r = wx.getStorageSync("9130_plat_idfv");var o = wx.getStorageSync("9130_plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: o, uuid: n, idfv: r, dname: e.model, mac: "0000", net_type: 0 == e.wifiSignal ? "4G" : "WIFI", os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: "android" == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var r = this.getPublicData();for (var o in n) r[o] = n[o];console.log("[UNION_SDK]\u65e5\u5fd7\u4e0a\u62a5" + e), console.log(r), wx.request({ url: "https://" + PARTNER_HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    } };
}function unionRun(e, n, r) {
  e in PARTNER_UNION_SDK && PARTNER_UNION_SDK[e](n, r);
}exports.init = function (e, n) {
  unionRun("init", e, n);
}, exports.login = function (e) {
  unionRun("login", "", e);
}, exports.login = function (e) {
  unionRun("login", "", e);
}, exports.pay = function (e, n) {
  unionRun("pay", e, n);
}, exports.openService = function () {
  unionRun("openService");
}, exports.logCreateRole = function (e, n, r, o, a) {
  unionRun("logCreateRole", { serverid: e, servername: n, roleid: r, rolename: o, rolelevel: a });
}, exports.logEnterGame = function (e, n, r, o, a) {
  unionRun("logEnterGame", { serverid: e, servername: n, roleid: r, rolename: o, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, r, o, a) {
  unionRun("logRoleUpLevel", { serverid: e, servername: n, roleid: r, rolename: o, rolelevel: a });
}, exports.share = function (e) {
  unionRun("share", e);
}, exports.msgCheck = function (e, n) {
  unionRun("msgCheck", e, n);
}, exports.downloadClient = function () {
  unionRun("downloadClient");
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.adClick = function (e, n) {
  unionRun("adClick", { game_id: e, query: n });
}, exports.weiduanHelper = function () {
  unionRun("weiduanHelper");
};