var SDKyyw = require("../utils/SDKyyw.min.js");var config = { game_id: "256", game_pkg: "tjqy_tjqysgsyyywxxcx_RM", partner_id: "317", game_ver: "53.0.1", is_auth: !1, partner_app_id: "1000238", partner_app_key: "9ee82ccddf32dad743546195b68e80a1" };window.config = config;var PARTNER_SDK = mainSDK();var HOST = "sdk.sh9130.com";var user_game_info = null;var user_invite_info = null;var this_order_id = null;var partner_user_info = null;var partner_swtich_info = null;function mainSDK() {
  var C$99o = {};return { order_data: {}, init: function (C$99e, C$99t) {
      C$99e = C$99e && C$99e.game_ver ? C$99e.game_ver : 0;console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var C$99n;C$99n = wx.getStorageSync("plat_uuid") ? 0 : (C$99n = this.uuid(16, 32), wx.setStorageSync("plat_uuid", C$99n), 1), wx.getStorageSync("plat_idfv") || (C$99a = this.uuid(16, 32), wx.setStorageSync("plat_idfv", C$99a));var C$99a = wx.getLaunchOptionsSync();var C$99r = C$99a.scene || "";C$99n && C$99a.query && C$99a.query.ad_code && wx.setStorageSync("plat_ad_code", C$99a.query.ad_code), this.log("start", { install: C$99n, scene: C$99r }), wx.showShareMenu();var C$99o = C$99a.query && C$99a.query.invite ? C$99a.query.invite : "";C$99a = C$99a.query && C$99a.query.invite_type ? C$99a.query.invite_type : "";C$99o && (user_invite_info = { invite: C$99o, invite_type: C$99a, is_new: C$99n, scene: C$99r }), C$99e && this.checkGameVersion(C$99e, function (C$99e) {
        C$99t && C$99t(C$99e);
      });
    }, login: function (C$99e, C$99t) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55");var C$99n = this;C$99o.login = "function" == typeof C$99t ? C$99t : null, SDKyyw.initLoginCallback = C$99e => {
        if (console.log("\u6e20\u9053\u521d\u59cb\u5316\u7ed3\u679c\uff1a" + JSON.stringify(C$99e)), 0 == C$99e.status) return console.log("\u521d\u59cb\u5316\u5931\u8d25"), void C$99t(1, { errMsg: "\u6e20\u9053\u521d\u59cb\u5316\u8fd4\u56de\u5931\u8d25\uff01" });partner_swtich_info = { showSwitchOn: C$99e.data.showSwitchOn, switchApp: C$99e.data.switchApp, switchContent: C$99e.data.switchContent }, partner_user_info = C$99e.data, C$99n.do_login(partner_user_info);
      }, SDKyyw.init(config.partner_app_id, config.partner_app_key);
    }, do_login: function (C$99e) {
      var C$99n = this;var C$99t = C$99n.getPublicData();if (C$99t.nick_name = C$99e ? C$99e.nick_name : "", C$99t.head_img = C$99e ? C$99e.head_img : "", user_invite_info && "object" == typeof user_invite_info) for (var C$99a in user_invite_info) C$99t[C$99a] = user_invite_info[C$99a];C$99t.partner_uid = C$99e.uid, wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: C$99t, success: function (C$99e) {
          if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a" + JSON.stringify(C$99e)), 200 == C$99e.statusCode) {
            C$99e = C$99e.data;if (C$99e.state) {
              var C$99t = { userid: C$99e.data.user_id, account: C$99e.data.nick_name, token: C$99e.data.token, invite_uid: C$99e.data.invite_uid || "", invite_nickname: C$99e.data.invite_nickname || "", invite_head_img: C$99e.data.invite_head_img || "", head_img: C$99e.data.head_img || "", is_client: C$99e.data.is_client || "0", ios_pay: C$99e.data.ios_pay || "0" };try {
                wx.setStorageSync("plat_sdk_token", C$99e.data.sdk_token), wx.setStorageSync("plat_uid", C$99e.data.user_id), wx.setStorageSync("plat_username", C$99e.data.username), C$99e.data.ext && wx.setStorageSync("plat_session_key", C$99e.data.ext);
              } catch (C$99e) {}C$99o.login && C$99o.login(0, C$99t);
            } else C$99o.login && C$99o.login(1, { errMsg: C$99e.msg });C$99n.getShareInfo("menu", function (C$99e) {
              console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab"), wx.onShareAppMessage(function () {
                return C$99n.logStartShare("menu"), { title: C$99e.title, imageUrl: C$99e.img, query: C$99e.query };
              });
            });
          } else C$99o.login && C$99o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } });
    }, share: function (C$99e) {
      C$99o.share = "function" == typeof callback ? callback : null;var C$99t = C$99e.type || "share";console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + C$99t);var C$99n = this;this.getShareInfo(C$99t, function (C$99e) {
        C$99n.logStartShare(C$99t), wx.shareAppMessage({ title: C$99e.title, imageUrl: C$99e.img, query: C$99e.query });
      });
    }, logStartShare: function (C$99e) {
      var C$99t = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=logStartShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: C$99t, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", type: C$99e }, success: function (C$99e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (C$99e, C$99n) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: C$99e }, success: function (C$99e) {
          var C$99t;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u7ed3\u679c"), console.log(C$99e), 200 == C$99e.statusCode && (C$99t = C$99e.data).state ? C$99n && C$99n(C$99t.data) : C$99n && C$99n({ develop: 0 });
        } });
    }, getShareInfo: function (C$99e, C$99t) {
      console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570");var C$99n = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=shareConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: C$99n, type: C$99e, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", no_log: 1 }, success: function (C$99e) {
          console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570\u7ed3\u679c"), console.log(C$99e), 200 == C$99e.statusCode ? (C$99e = C$99e.data).state ? C$99t && C$99t(C$99e.data) : C$99o.share && C$99o.share(1, { errMsg: "\u5206\u4eab\u5931\u8d25\uff1a" + C$99e.msg }) : C$99o.share && C$99o.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u6570\u636e\u5931\u8d25\uff01" });
        } });
    }, switchEnv: function (C$99e) {
      C$99e(partner_swtich_info);
    }, switchGame: function (C$99t) {
      SDKyyw.cutGameCallback = C$99e => {
        C$99t(C$99e);
      }, 1 == partner_swtich_info.showSwitchOn ? SDKyyw.cutGame() : C$99t({ status: 0, msg: "\u6ca1\u5f00\u542f\u8df3\u8f6c" });
    }, updateShare: function (C$99e, C$99t, C$99n, C$99a, C$99r, C$99o) {
      console.log("[SDK]\u5206\u4eab\u8fc7\u6765\u7684\u73a9\u5bb6\u4e0a\u62a5\u7ed9\u670d\u52a1\u5668");var C$99i = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: C$99i, invite: C$99e, invite_type: C$99t, is_new: C$99n, role_id: C$99a, sever_id: C$99r, scene: C$99o }, success: function (C$99e) {
          console.log("[SDK]\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:"), console.log(C$99e);
        } });
    }, pay: function (C$99e, C$99t) {
      var C$99n = this;wx.checkSession({ success: function () {
          C$99n.startPay(C$99e, C$99t);
        }, fail: function () {
          console.log("[SDK]session\u8fc7\u671f\u9700\u8981\u91cd\u65b0\u767b\u5f55"), C$99n.login({}, function () {
            C$99n.startPay(C$99e, C$99t);
          });
        } });
    }, startPay: function (C$99e, C$99t) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a"), console.log(C$99e);var C$99n = this;C$99o.pay = "function" == typeof C$99t ? C$99t : null;C$99t = wx.getStorageSync("plat_sdk_token");var C$99a = wx.getStorageSync("plat_session_key");var C$99r;C$99t || C$99a ? (C$99r = wx.getSystemInfoSync(), C$99e = { cpbill: C$99e.cpbill, productid: C$99e.productid, productname: C$99e.productname, productdesc: C$99e.productdesc, serverid: C$99e.serverid, servername: C$99e.servername, roleid: C$99e.roleid, rolename: C$99e.rolename, rolelevel: C$99e.rolelevel, price: C$99e.price, extension: C$99e.extension, sdk_token: C$99t, session_key: C$99a, platform: C$99r.platform }, C$99n.order_data = C$99e, (C$99t = C$99n.getPublicData()).order_data = JSON.stringify(C$99e), wx.request({ url: "https://" + HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: C$99t, success: function (C$99t) {
          if (console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355" + JSON.stringify(C$99t)), 200 == C$99t.statusCode) {
            C$99t = C$99t.data;if (C$99t.state) {
              if ("" == C$99t.data.ext) {
                SDKyyw.onPayCallback = C$99e => {};let C$99e = {};C$99e.serverId = C$99t.data.pay_data.serverId, C$99e.serverName = C$99t.data.pay_data.serverName, C$99e.roleId = C$99t.data.pay_data.roleId, C$99e.roleName = C$99t.data.pay_data.roleName, C$99e.roleLevel = C$99t.data.pay_data.roleLevel, C$99e.gameOrderid = C$99t.data.pay_data.orderId, C$99e.pext = C$99t.data.pay_data.orderId, C$99e.money = C$99t.data.pay_data.amount, C$99e.productName = C$99t.data.pay_data.productName, C$99e.productId = C$99t.data.pay_data.productId, console.log("\u6e20\u9053\u4e0b\u5355\u6570\u636e" + JSON.stringify(C$99e)), SDKyyw.pay(C$99e);
              } else C$99n.extDo({ ext1: C$99t.data.ext, ext2: C$99t.data.pay_data });
            } else C$99o.pay && C$99o.pay(1, { errMsg: C$99t.msg });
          } else C$99o.login && C$99o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } })) : C$99o.pay && C$99o.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, extDo: function (C$99e) {
      wx.navigateToMiniProgram({ appId: C$99e.ext1, path: "pages/pay/pay?order_id=" + C$99e.ext2.orderId + "&money=" + C$99e.ext2.amount, extraData: {}, envVersion: "release", success(C$99e) {} });
    }, logCreateRole: function (C$99e) {
      var C$99t = wx.getStorageSync("plat_uid");var C$99n = wx.getStorageSync("plat_username");var C$99a = {};C$99a.user_id = C$99t, C$99a.user_name = C$99n, C$99a.role_id = C$99e.roleid, C$99a.role_lev = C$99e.rolelevel, C$99a.role_name = C$99e.rolename, C$99a.server_id = C$99e.serverid, C$99e.roleid && C$99e.serverid && (user_game_info = { role_id: C$99e.roleid, server_id: C$99e.serverid }), this.log("create", C$99a);let C$99r = {};C$99r.type = 2, C$99r.roleId = C$99e.roleid, C$99r.roleName = C$99e.rolename, C$99r.serverId = C$99e.serverid, SDKyyw.pushData(C$99r);
    }, logEnterGame: function (C$99e) {
      var C$99t = wx.getStorageSync("plat_uid");var C$99n = wx.getStorageSync("plat_username");var C$99a = {};C$99a.user_id = C$99t, C$99a.user_name = C$99n, C$99a.role_id = C$99e.roleid, C$99a.role_lev = C$99e.rolelevel, C$99a.role_name = C$99e.rolename, C$99a.server_id = C$99e.serverid, C$99e.roleid && C$99e.serverid && (user_game_info = { role_id: C$99e.roleid, server_id: C$99e.serverid }), this.log("enter", C$99a), user_invite_info && this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, C$99e.roleid, C$99e.serverid, user_invite_info.scene);let C$99r = {};C$99r.type = 1, C$99r.roleId = C$99e.roleid, C$99r.roleName = C$99e.rolename, C$99r.serverId = C$99e.serverid, SDKyyw.pushData(C$99r);let C$99o = {};C$99o.type = 5, C$99o.roleId = C$99e.roleid, C$99o.roleName = C$99e.rolename, C$99o.serverId = C$99e.serverid, SDKyyw.pushData(C$99o);
    }, logRoleUpLevel: function (C$99e) {
      var C$99t = wx.getStorageSync("plat_uid");var C$99n = wx.getStorageSync("plat_username");var C$99a = {};C$99a.user_id = C$99t, C$99a.user_name = C$99n, C$99a.role_id = C$99e.roleid, C$99a.role_lev = C$99e.rolelevel, C$99a.role_name = C$99e.rolename, C$99a.server_id = C$99e.serverid, C$99e.roleid && C$99e.serverid && (user_game_info = { role_id: C$99e.roleid, server_id: C$99e.serverid }), this.log("levelup", C$99a);let C$99r = {};C$99r.type = 4, C$99r.roleId = C$99e.roleid, C$99r.roleName = C$99e.rolename, C$99r.serverId = C$99e.serverid, C$99r.level = 0, SDKyyw.pushData(C$99r);
    }, uuid: function (C$99e, C$99t) {
      var C$99n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var C$99a,
          C$99r = [];var C$99o;if (C$99e = C$99e || C$99n.length, C$99t) for (C$99a = 0; C$99a < C$99t; C$99a++) C$99r[C$99a] = C$99n[0 | Math.random() * C$99e];else for (C$99r[8] = C$99r[13] = C$99r[18] = C$99r[23] = "-", C$99r[14] = "4", C$99a = 0; C$99a < 36; C$99a++) C$99r[C$99a] || (C$99o = 0 | 16 * Math.random(), C$99r[C$99a] = C$99n[19 == C$99a ? 3 & C$99o | 8 : C$99o]);return C$99r.join("");
    }, getPublicData: function () {
      var C$99e = wx.getSystemInfoSync();var C$99t = wx.getStorageSync("plat_uuid");var C$99n = wx.getStorageSync("plat_idfv");var C$99a = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, is_from_min: 1, ad_code: C$99a, uuid: C$99t, idfv: C$99n, dname: C$99e.model, mac: "0000", net_type: 0 == C$99e.wifiSignal ? "4G" : "WIFI", os_ver: C$99e.system, sdk_ver: C$99e.version, game_ver: config.game_ver, device: "android" == C$99e.platform ? 1 : 2 };
    }, log: function (C$99e, C$99t) {
      var C$99n = this.getPublicData();for (var C$99a in C$99t) C$99n[C$99a] = C$99t[C$99a];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + C$99e), console.log(C$99n), wx.request({ url: "https://" + HOST + "/partner/h5Log/?type=" + C$99e + "&data=" + encodeURIComponent(JSON.stringify(C$99n)) });
    }, getDate: function () {
      var C$99e = new Date();return C$99e.getFullYear() + "-" + C$99e.getMonth() + "-" + C$99e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, getLaunchOptionsSync: function (C$99e) {
      var C$99t = SDKyyw.getLaunchOptionsSync();C$99e(C$99t), console.log("\u83b7\u53d6\u573a\u666f\u503c" + JSON.stringify(C$99t));
    }, msgCheck: function (C$99e, C$99n) {
      SDKyyw.msgSecCheck(C$99e, function (C$99e) {
        console.log("\u654f\u611f\u8bcd\u68c0\u6d4b\u7ed3\u679c" + JSON.stringify(C$99e));let C$99t = { data: {} };0 == C$99e.errcode ? (C$99t.statusCode = 200, C$99t.data.state = 1) : (C$99t.statusCode = 200, C$99t.data.state = 0), C$99n && C$99n(C$99t);
      });
    }, sendCode: function (C$99e, C$99t) {
      console.log("\u5f00\u59cb\u83b7\u53d6\u9a8c\u8bc1\u7801\uff1a", C$99e.phone), SDKyyw.getCaptchaCallback = C$99e => {
        console.log(C$99e), 1 == C$99e.status ? C$99t && C$99t(0, C$99e) : C$99t && C$99t(1, C$99e);
      }, SDKyyw.getCaptcha({ telephone: C$99e.phone });
    }, bindPhone: function (C$99e, C$99t) {
      console.log("\u5f00\u59cb\u7ed1\u5b9a\u624b\u673a\uff1a", C$99e.phone, C$99e.code), SDKyyw.bindTelephoneCallback = C$99e => {
        console.log("datadata", C$99e), 1 == C$99e.status ? C$99t && C$99t(0, C$99e) : C$99t && C$99t(1, C$99e);
      }, SDKyyw.bindTelephone({ telephone: C$99e.phone, captcha: C$99e.code });
    }, subscribeMessage: function (C$99e, C$99t) {
      console.log("[SDK]\u8ba2\u9605\u6d88\u606f\uff1a" + C$99e), C$99o.subscribeMessage = "function" == typeof C$99t ? C$99t : null, wx.requestSubscribeMessage({ tmplIds: C$99e, success(C$99e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u8fd4\u56de\uff1a\u6210\u529f"), console.log(C$99e), C$99o.subscribeMessage && C$99o.subscribeMessage(C$99e);
        }, fail(C$99e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u8fd4\u56de\uff1a\u5931\u8d25"), console.log(C$99e), C$99o.subscribeMessage && C$99o.subscribeMessage(C$99e);
        } });
    } };
}function run(C$99e, C$99t, C$99n) {
  C$99e in PARTNER_SDK && PARTNER_SDK[C$99e](C$99t, C$99n);
}exports.init = function (C$99e, C$99t) {
  run("init", C$99e, C$99t);
}, exports.login = function (C$99e) {
  run("login", "", C$99e);
}, exports.login = function (C$99e) {
  run("login", "", C$99e);
}, exports.pay = function (C$99e, C$99t) {
  run("pay", C$99e, C$99t);
}, exports.openService = function () {
  run("openService");
}, exports.logCreateRole = function (C$99e, C$99t, C$99n, C$99a, C$99r) {
  run("logCreateRole", { serverid: C$99e, servername: C$99t, roleid: C$99n, rolename: C$99a, rolelevel: C$99r });
}, exports.logEnterGame = function (C$99e, C$99t, C$99n, C$99a, C$99r) {
  run("logEnterGame", { serverid: C$99e, servername: C$99t, roleid: C$99n, rolename: C$99a, rolelevel: C$99r });
}, exports.logRoleUpLevel = function (C$99e, C$99t, C$99n, C$99a, C$99r) {
  run("logRoleUpLevel", { serverid: C$99e, servername: C$99t, roleid: C$99n, rolename: C$99a, rolelevel: C$99r });
}, exports.share = function (C$99e) {
  run("share", { type: C$99e });
}, exports.downloadClient = function () {
  run("downloadClient");
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getLaunchOptionsSync = function (C$99e) {
  run("getLaunchOptionsSync", C$99e);
}, exports.msgCheck = function (C$99e, C$99t) {
  run("msgCheck", C$99e, C$99t);
}, exports.switchEnv = function (C$99e) {
  run("switchEnv", C$99e);
}, exports.switchGame = function (C$99e) {
  run("switchGame", C$99e);
}, exports.weiduanHelper = function (C$99e, C$99t) {
  run("weiduanHelper", C$99e, C$99t);
}, exports.sendCode = function (C$99e, C$99t) {
  run("sendCode", C$99e, C$99t);
}, exports.bindPhone = function (C$99e, C$99t) {
  run("bindPhone", C$99e, C$99t);
}, exports.subscribeMessage = function (C$99e, C$99t) {
  run("subscribeMessage", C$99e, C$99t);
};