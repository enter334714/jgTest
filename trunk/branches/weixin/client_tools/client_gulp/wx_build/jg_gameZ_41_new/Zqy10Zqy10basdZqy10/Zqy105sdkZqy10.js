import sdk6kw from "../utils/sdkFrom6kw.com-v1.0.10";var config = { game_id: "256", game_pkg: "tjqy_tjqydtslm6kwwxxcx_UZ", partner_label: "6kwxyx2", partner_id: "573", game_ver: "74.0.1", is_auth: !0 };window.config = config;var PARTNER_SDK = mainSDK();var HOST = "sdk.sh9130.com";var user_game_info = null;var user_invite_info = null;function mainSDK() {
  var n = {};return { order_data: {}, init: function (e, t) {
      e = e && e.game_ver ? e.game_ver : 0;console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var r = this;var a;a = wx.getStorageSync("plat_uuid") ? 0 : (a = r.uuid(16, 32), wx.setStorageSync("plat_uuid", a), 1), wx.getStorageSync("plat_idfv") || (o = r.uuid(16, 32), wx.setStorageSync("plat_idfv", o));var o = wx.getLaunchOptionsSync();var n = o.scene || "";a && o.query && o.query.ad_code && wx.setStorageSync("plat_ad_code", o.query.ad_code), r.log("start", { install: a, scene: n }), sdk6kw.init(function (e, t) {
        console.log("[SDK]\u521d\u59cb\u5316\u56de\u8c03\uff1a", e, t);
      });r = o.query && o.query.invite ? o.query.invite : "";o = o.query && o.query.invite_type ? o.query.invite_type : "";r && (user_invite_info = { invite: r, invite_type: o, is_new: a, scene: n }), e && this.checkGameVersion(e, function (e) {
        t && t(e);
      });
    }, login: function (e, r) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55");var a = this;n.login = "function" == typeof r ? r : null, sdk6kw.login(function (e, t) {
        console.log("[SDK]\u767b\u5f55\u56de\u8c03"), 1 === e ? a.do_login(t) : r(1, { errMsg: "SDK\u767b\u5f55\u5931\u8d25" });
      });
    }, do_login: function (e) {
      var a = this;var t = a.getPublicData();if (t.userId = e.userId, t.nickName = e.nickName, t.token = e.token, t.is_from_min = 1, user_invite_info && "object" == typeof user_invite_info) for (var r in user_invite_info) t[r] = user_invite_info[r];wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
          if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a"), console.log(e), 200 === e.statusCode) {
            e = e.data;if (e.state) {
              try {
                wx.setStorageSync("plat_sdk_token", e.data.sdk_token), wx.setStorageSync("plat_uid", e.data.user_id), wx.setStorageSync("plat_username", e.data.username), e.data.ext && wx.setStorageSync("plat_session_key", e.data.ext);
              } catch (e) {}var t = { userid: e.data.user_id, account: e.data.nick_name, token: e.data.token, invite_uid: e.data.invite_uid || "", invite_nickname: e.data.invite_nickname || "", invite_head_img: e.data.invite_head_img || "", head_img: e.data.head_img || "", is_client: e.data.is_client || "0", ios_pay: e.data.ios_pay || "0" };n.login && n.login(0, t);
            } else n.login && n.login(1, { errMsg: e.msg });a.getShareInfo("menu", function (r) {
              console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab", r), a.logStartShare("menu"), sdk6kw.shareLog(function (e, t) {
                wx.onShareAppMessage(function () {
                  return { title: r.title, imageUrl: r.img, query: r.query + "&" + t.query };
                });
              });
            });
          } else n.login && n.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } });
    }, share: function (e) {
      n.share = "function" == typeof callback ? callback : null;var t = e.type || "share";console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + t);var r = this;this.getShareInfo(t, function (e) {
        r.logStartShare(t);e = { title: e.title, imageUrl: e.img, query: e.query };sdk6kw.share(e, function (e, t) {
          console.log("[SDK]\u5206\u4eab\u56de\u8c03:", e, t);
        });
      });
    }, logStartShare: function (e) {
      var t = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=logStartShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, r) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var t;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u7ed3\u679c"), console.log(e), 200 == e.statusCode && (t = e.data).state ? r && r(t.data) : r && r({ develop: 0 });
        } });
    }, getShareInfo: function (e, t) {
      console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570");var r = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=shareConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", no_log: 1 }, success: function (e) {
          console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570\u7ed3\u679c"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? t && t(e.data) : n.share && n.share(1, { errMsg: "\u5206\u4eab\u5931\u8d25\uff1a" + e.msg }) : n.share && n.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u6570\u636e\u5931\u8d25\uff01" });
        } });
    }, updateShare: function (e, t, r, a, o, n) {
      console.log("[SDK]\u5206\u4eab\u8fc7\u6765\u7684\u73a9\u5bb6\u4e0a\u62a5\u7ed9\u670d\u52a1\u5668");var i = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: t, is_new: r, role_id: a, sever_id: o, scene: n }, success: function (e) {
          console.log("[SDK]\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:"), console.log(e);
        } });
    }, msgCheck: function (e, a) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9");wx.getStorageSync("plat_sdk_token");sdk6kw.msgSecCheck({ content: e, callback: (e, t) => {
          console.log("check result is %o", e);let r = { data: {} };"pass" == t.data.result.suggest ? (r.statusCode = 200, r.data.state = 1) : (r.statusCode = 200, r.data.state = 0), a && a(r);
        } });
    }, pay: function (e, t) {
      this.startPay(e, t);
    }, startPay: function (e, t) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a"), console.log(e);var a = this;n.pay = "function" == typeof t ? t : null;t = wx.getStorageSync("plat_sdk_token");var r = wx.getStorageSync("plat_session_key");var o;t || r ? (o = wx.getSystemInfoSync(), e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: r, platform: o.platform }, a.order_data = e, (t = a.getPublicData()).order_data = JSON.stringify(e), t.is_from_min = 1, wx.request({ url: "https://" + HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
          var r;console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355"), console.log(e), 200 == e.statusCode ? (r = e.data).state && r.data.pay_data ? (console.log("[SDK]\u8054\u8fd0\u652f\u4ed8\u53c2\u6570" + JSON.stringify(r.data.pay_data)), e = { cpOrder: r.data.pay_data.cpOrder, serverId: r.data.pay_data.serverId, serverName: r.data.pay_data.serverName, productId: r.data.pay_data.productId, productName: r.data.pay_data.productName, roleId: r.data.pay_data.roleId, roleName: r.data.pay_data.roleName, roleLevel: r.data.pay_data.roleLevel, notifyUrl: r.data.pay_data.notifyUrl, price: r.data.pay_data.price, extension: r.data.pay_data.extension }, "" == r.data.ext ? sdk6kw.pay(e, function (e, t) {
            console.log("[SDK]\u8054\u8fd0\u652f\u4ed8\u56de\u8c03\uff1a", e, t), 0 === e && n.pay && n.pay(1, { errMsg: r.errMsg });
          }) : a.extDo({ ext1: r.data.ext, ext2: r.data.pay_data })) : n.pay && n.pay(1, { errMsg: r.errMsg }) : n.login && n.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } })) : n.pay && n.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, extDo: function (e) {
      wx.navigateToMiniProgram({ appId: e.ext1, path: "pages/pay/pay?order_id=" + e.ext2.extension + "&money=" + e.ext2.price / 100, extraData: {}, envVersion: "release", success(e) {} });
    }, logCreateRole: function (e) {
      var t = wx.getStorageSync("plat_uid");var r = wx.getStorageSync("plat_username");var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", a);t = { roleId: e.roleid, roleName: e.rolename, serverName: e.servername, serverId: e.serverid, roleLevel: e.rolelevel, payLevel: 0, createTime: Date.parse(new Date()) / 1e3 };sdk6kw.logRole(t.createTime, t.serverId, t.serverName, t.roleId, t.roleName, t.roleLevel, t.payLevel);
    }, logEnterGame: function (e, t) {
      var r = wx.getStorageSync("plat_uid");var a = wx.getStorageSync("plat_username");n.enter = "function" == typeof t ? t : null, this.upLogAndCheckPay("enter", e);t = {};t.user_id = r, t.user_name = a, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", t), user_invite_info && this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, e.roleid, e.serverid, user_invite_info.scene);
    }, logRoleUpLevel: function (e, t) {
      var r = wx.getStorageSync("plat_uid");var a = wx.getStorageSync("plat_username");n.levelup = "function" == typeof t ? t : null, this.log("levelup", e);t = {};t.user_id = r, t.user_name = a, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.upLogAndCheckPay("levelup", e);
    }, upLogAndCheckPay: function (r, e) {
      e = { roleId: e.roleid, roleName: e.rolename, serverName: e.servername, serverId: e.serverid, roleLevel: e.rolelevel, payLevel: 0, createTime: e.rolecreatetime };sdk6kw.logRole(e.createTime, e.serverId, e.serverName, e.roleId, e.roleName, e.roleLevel, e.payLevel), sdk6kw.getPayState(e, function (e, t) {
        console.log("[SDK]\u68c0\u6d4b\u5145\u503c\u5f00\u5173\u63a5\u53e3\uff1a", t), 1 !== e || 1 === t.switch ? n[r] && n[r](0) : 1 === t.gamePayLimitSwitch ? n[r] && n[r](2) : n[r] && n[r](1);
      });
    }, uuid: function (e, t) {
      var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var a,
          o = [];var n;if (e = e || r.length, t) for (a = 0; a < t; a++) o[a] = r[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", a = 0; a < 36; a++) o[a] || (n = 0 | 16 * Math.random(), o[a] = r[19 == a ? 3 & n | 8 : n]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var t = wx.getStorageSync("plat_uuid");var r = wx.getStorageSync("plat_idfv");var a = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: a, uuid: t, idfv: r, dname: e.model, mac: "0000", net_type: 0 == e.wifiSignal ? "4G" : "WIFI", os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: "android" == e.platform ? 1 : 2 };
    }, log: function (e, t) {
      var r = this.getPublicData();for (var a in t) r[a] = t[a];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(r), wx.request({ url: "https://" + HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(r)) });
    }, weiduanHelper: function () {
      sdk6kw.openCustomerWithClientChange();
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, subscribeMessage: function (e, t) {
      console.log("[SDK]\u8ba2\u9605\u6d88\u606f\uff1a" + e), n.subscribeMessage = "function" == typeof t ? t : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u8fd4\u56de\uff1a\u6210\u529f"), console.log(e), n.subscribeMessage && n.subscribeMessage(e);
        }, fail(e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u8fd4\u56de\uff1a\u5931\u8d25"), console.log(e), n.subscribeMessage && n.subscribeMessage(e);
        } });
    } };
}function run(e, t, r) {
  e in PARTNER_SDK && PARTNER_SDK[e](t, r);
}exports.init = function (e, t) {
  run("init", e, t);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.pay = function (e, t) {
  run("pay", e, t);
}, exports.openService = function () {
  run("openService");
}, exports.logCreateRole = function (e, t, r, a, o) {
  run("logCreateRole", { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: o });
}, exports.logEnterGame = function (e, t, r, a, o, n, i) {
  run("logEnterGame", { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: o, rolecreatetime: n }, i);
}, exports.logRoleUpLevel = function (e, t, r, a, o, n, i) {
  run("logRoleUpLevel", { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: o, rolecreatetime: n }, i);
}, exports.share = function (e) {
  run("share", { type: e });
}, exports.msgCheck = function (e, t) {
  run("msgCheck", e, t);
}, exports.downloadClient = function () {
  run("downloadClient");
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run("getPublicData");
}, exports.subscribeMessage = function (e, t) {
  run("subscribeMessage", e, t);
}, exports.weiduanHelper = function () {
  run("weiduanHelper");
};