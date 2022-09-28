let sdk = require("../utils/ln_sdk");var config = { game_id: 256, game_pkg: "tjqy_tjqylnxcxmxgj_WM", partner_label: "lnxyx", partner_id: "577", game_ver: "75.0.1", is_auth: !1 };window.config = config;var PARTNER_SDK = mainSDK();var HOST = "sdk.sh9130.com";var user_game_info = null;var user_invite_info = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var partner_user_info = null;var sdkInitOk = !1;function mainSDK() {
  var o = {};return { order_data: {}, init: function (e, n) {
      e = e && e.game_ver ? e.game_ver : 0;console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var r = this;var t;t = wx.getStorageSync("plat_uuid") ? 0 : (t = r.uuid(16, 32), wx.setStorageSync("plat_uuid", t), 1), wx.getStorageSync("plat_idfv") || (o = r.uuid(16, 32), wx.setStorageSync("plat_idfv", o));var o = wx.getLaunchOptionsSync();var a = o.scene || "";t && o.query && o.query.ad_code && wx.setStorageSync("plat_ad_code", o.query.ad_code), r.log("start", { install: t, scene: a });r = o.query && o.query.invite ? o.query.invite : "";o = o.query && o.query.invite_type ? o.query.invite_type : "";r && (user_invite_info = { invite: r, invite_type: o, is_new: t, scene: a }), e && this.checkGameVersion(e, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55"), o.login = "function" == typeof n ? n : null;var r = this;sdk.initLoginCallback = e => {
        0 == e.status ? (r.do_login(e.data), console.log("\u6e20\u9053\u767b\u5f55\u8fd4\u56de\u6210\u529f" + JSON.stringify(e.data))) : (console.warn("sdk\u521d\u59cb\u5316\u5931\u8d25\uff0c\u91cd\u8bd5\u3002"), o.login && o.login(1, { errMsg: "sdk\u521d\u59cb\u5316\u5931\u8d25\uff0c\u91cd\u8bd5\u3002" }));
      }, sdk.init();
    }, do_login: function (e) {
      var r = this;var n = r.getPublicData();if (n.user_info = JSON.stringify(e), user_invite_info && "object" == typeof user_invite_info) for (var t in user_invite_info) n[t] = user_invite_info[t];wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (e) {
          if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a" + JSON.stringify(e)), 200 == e.statusCode) {
            e = e.data;if (e.state) {
              try {
                wx.setStorageSync("plat_sdk_token", e.data.sdk_token), wx.setStorageSync("plat_uid", e.data.user_id), wx.setStorageSync("plat_username", e.data.username), e.data.ext && wx.setStorageSync("plat_session_key", e.data.ext);
              } catch (e) {}var n = { userid: e.data.user_id, account: e.data.nick_name, token: e.data.token, invite_uid: e.data.invite_uid || "", invite_nickname: e.data.invite_nickname || "", invite_head_img: e.data.invite_head_img || "", head_img: e.data.head_img || "", is_client: e.data.is_client || "0", ios_pay: e.data.ios_pay || "0" };o.login && o.login(0, n);
            } else o.login && o.login(1, { errMsg: e.msg });r.getShareInfo("menu", function (e) {
              console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab"), r.logStartShare("menu"), wx.onShareAppMessage(function () {
                return r.logStartShare("menu"), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } });
    }, share: function (e) {
      o.share = "function" == typeof callback ? callback : null;var n = e.type || "share";console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + n);var r = this;this.getShareInfo(n, function (e) {
        r.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=logStartShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, r) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var n;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u7ed3\u679c" + JSON.stringify(e)), 200 == e.statusCode && (n = e.data).state ? r && r(n.data) : r && r({ develop: 0 });
        } });
    }, getShareInfo: function (e, n) {
      console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570");var r = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=shareConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", no_log: 1 }, success: function (e) {
          console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570\u7ed3\u679c"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : o.share && o.share(1, { errMsg: "\u5206\u4eab\u5931\u8d25\uff1a" + e.msg }) : o.share && o.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u6570\u636e\u5931\u8d25\uff01" });
        } });
    }, updateShare: function (e, n, r, t, o, a) {
      console.log("[SDK]\u5206\u4eab\u8fc7\u6765\u7684\u73a9\u5bb6\u4e0a\u62a5\u7ed9\u670d\u52a1\u5668");var i = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: r, role_id: t, sever_id: o, scene: a }, success: function (e) {
          console.log("[SDK]\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:" + JSON.stringify(e));
        } });
    }, msgCheck: function (e, n) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9" + e);let r = { data: {} };sdk.msgSecCheck({ version: 2, scene: 1, content: e }, function (e) {
        0 != e.status ? (r.statusCode = 200, r.data.state = 1) : (r.statusCode = 200, r.data.state = 0), n && n(r);
      });
    }, pay: function (e, n) {
      this.startPay(e, n);
    }, startPay: function (e, n) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a" + JSON.stringify(e));var r = this;o.pay = "function" == typeof n ? n : null;n = wx.getStorageSync("plat_sdk_token");var t = wx.getStorageSync("plat_session_key");n ? (e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: t, platform: platform }, r.order_data = e, (n = r.getPublicData()).order_data = JSON.stringify(e), wx.request({ url: "https://" + HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (e) {
          console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355" + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? (console.log("\u4e0b\u5355\u7ed3\u679c\uff1a" + JSON.stringify(e.data.pay_data)), "" == e.data.ext ? (sdk.onPayCallback = e => {
            console.log("onPayCallback", e), 0 != e.status && o.pay && o.pay(1, { errMsg: e.msg });
          }, sdk.sdkPay(e.data.pay_data)) : r.extDo({ ext1: e.data.ext, ext2: e.data.pay_data })) : o.pay && o.pay(1, { errMsg: e.msg }) : o.login && o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } })) : o.pay && o.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, extDo: function (e) {
      wx.navigateToMiniProgram({ appId: e.ext1, path: "pages/pay/pay?order_id=" + e.ext2.cp_order_id + "&money=" + e.ext2.amount / 100, extraData: {}, envVersion: "release", success(e) {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync("plat_uid");var r = wx.getStorageSync("plat_username");var t = {};t.user_id = n, t.user_name = r, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", t);n = { type: 1, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel, serverId: e.serverid, vipLevel: "0" };sdk.sdkRole(n);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync("plat_uid");var r = wx.getStorageSync("plat_username");var t = {};t.user_id = n, t.user_name = r, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", t), user_invite_info && this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, e.roleid, e.serverid, user_invite_info.scene);n = { type: 3, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel, serverId: e.serverid, vipLevel: "0" };sdk.sdkRole(n);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync("plat_uid");var r = wx.getStorageSync("plat_username");var t = {};t.user_id = n, t.user_name = r, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", t);n = { type: 2, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel, serverId: e.serverid, vipLevel: "0" };sdk.sdkRole(n);
    }, uuid: function (e, n) {
      var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var t,
          o = [];var a;if (e = e || r.length, n) for (t = 0; t < n; t++) o[t] = r[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", t = 0; t < 36; t++) o[t] || (a = 0 | 16 * Math.random(), o[t] = r[19 == t ? 3 & a | 8 : a]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync("plat_uuid");var n = wx.getStorageSync("plat_idfv");var r = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: r, uuid: e, idfv: n, mac: "0000", is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : "WIFI", os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: "android" == sysInfo.platform ? 1 : 2 };
    }, log: function (e, n) {
      var r = this.getPublicData();for (var t in n) r[t] = n[t];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(r), wx.request({ url: "https://" + HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {
      sdk.sdkTransferApp();
    }, sendUrl: function () {
      sdk.sdkTransferApp();
    }, setMessageToFriendQuery: function (e, n) {
      e = e.activity_id;n(wx.setMessageToFriendQuery({ shareMessageToFriendScene: e }));
    }, setLoadingCmp: function () {}, sendCode: function (e, n) {
      console.log("\u5f00\u59cb\u83b7\u53d6\u9a8c\u8bc1\u7801\uff1a", e.phone);
    }, bindPhone: function (e, n) {
      console.log("\u5f00\u59cb\u7ed1\u5b9a\u624b\u673a\uff1a", e.phone, e.code);
    }, subscribeMessage: function (e, n) {
      console.log("[SDK]\u8ba2\u9605\u6d88\u606f\uff1a" + e), o.subscribeMessage = "function" == typeof n ? n : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u8fd4\u56de\uff1a\u6210\u529f"), console.log(e), o.subscribeMessage && o.subscribeMessage(e);
        }, fail(e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u8fd4\u56de\uff1a\u5931\u8d25"), console.log(e), o.subscribeMessage && o.subscribeMessage(e);
        } });
    } };
}function run(e, n, r) {
  e in PARTNER_SDK && PARTNER_SDK[e](n, r);
}exports.init = function (e, n) {
  run("init", e, n);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.pay = function (e, n) {
  run("pay", e, n);
}, exports.openService = function () {
  run("openService");
}, exports.logCreateRole = function (e, n, r, t, o) {
  run("logCreateRole", { serverid: e, servername: n, roleid: r, rolename: t, rolelevel: o });
}, exports.logEnterGame = function (e, n, r, t, o) {
  run("logEnterGame", { serverid: e, servername: n, roleid: r, rolename: t, rolelevel: o });
}, exports.logRoleUpLevel = function (e, n, r, t, o) {
  run("logRoleUpLevel", { serverid: e, servername: n, roleid: r, rolename: t, rolelevel: o });
}, exports.share = function (e) {
  run("share", { type: e });
}, exports.msgCheck = function (e, n) {
  run("msgCheck", e, n);
}, exports.downloadClient = function () {
  run("downloadClient");
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run("getPublicData");
}, exports.weiduanHelper = function () {
  run("weiduanHelper");
}, exports.sendUrl = function () {
  run("sendUrl");
}, exports.setMessageToFriendQuery = function (e, n) {
  run("setMessageToFriendQuery", e, n);
}, exports.setLoadingCmp = function () {
  run("setLoadingCmp");
}, exports.sendCode = function (e, n) {
  run("sendCode", e, n);
}, exports.bindPhone = function (e, n) {
  run("bindPhone", e, n);
}, exports.subscribeMessage = function (e, n) {
  run("subscribeMessage", e, n);
};