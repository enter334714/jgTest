import SDKyyw from "./eeehelp";var config = { game_id: "256", game_pkg: "tjqy_tjqyxyjz_FU", partner_id: "317", game_ver: "5.0.40", is_auth: !1, from: null, tmpId: {} };window.config = config;var partner_config = { app_id: 1000207, app_key: "9a784f02d527218cd7869f368a265116" };var PARTNER_SDK = mainSDK();var HOST = "sdk.sh9130.com";var user_game_info = null;var user_invite_info = null;var this_order_id = null;var partner_user_info = null;var partner_swtich_info = null;function mainSDK() {
  var o = {};return { order_data: {}, init: function (e, t) {
      e = e && e.game_ver ? e.game_ver : 0;console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var r = this;var a;a = wx.getStorageSync("plat_uuid") ? 0 : (a = r.uuid(16, 32), wx.setStorageSync("plat_uuid", a), 1), wx.getStorageSync("plat_idfv") || (n = r.uuid(16, 32), wx.setStorageSync("plat_idfv", n));var n = wx.getLaunchOptionsSync();var o = n.scene || "";a && n.query && n.query.ad_code && wx.setStorageSync("plat_ad_code", n.query.ad_code), r.log("start", { install: a, scene: o }), wx.showShareMenu();r = n.query && n.query.invite ? n.query.invite : "";n = n.query && n.query.invite_type ? n.query.invite_type : "";r && (user_invite_info = { invite: r, invite_type: n, is_new: a, scene: o }), e && this.checkGameVersion(e, function (e) {
        t && t(e);
      });
    }, login: function (e, t) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55");var r = this;o.login = "function" == typeof t ? t : null, SDKyyw.initLoginCallback = e => {
        if (console.log("\u6e20\u9053\u521d\u59cb\u5316\u7ed3\u679c\uff1a" + JSON.stringify(e)), 0 == e.status) return console.log("\u521d\u59cb\u5316\u5931\u8d25"), void t(1, { errMsg: "\u6e20\u9053\u521d\u59cb\u5316\u8fd4\u56de\u5931\u8d25\uff01" });partner_swtich_info = { showSwitchOn: e.data.showSwitchOn, switchApp: e.data.switchApp, switchContent: e.data.switchContent }, partner_user_info = e.data, r.do_login(partner_user_info);
      }, SDKyyw.init(partner_config.app_id, partner_config.app_key);
    }, do_login: function (e) {
      var r = this;var t = r.getPublicData();if (t.nick_name = e ? e.nick_name : "", t.head_img = e ? e.head_img : "", user_invite_info && "object" == typeof user_invite_info) for (var a in user_invite_info) t[a] = user_invite_info[a];t.partner_uid = e.uid, wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
          if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a" + JSON.stringify(e)), 200 == e.statusCode) {
            e = e.data;if (e.state) {
              var t = { userid: e.data.user_id, account: e.data.nick_name, token: e.data.token, invite_uid: e.data.invite_uid || "", invite_nickname: e.data.invite_nickname || "", invite_head_img: e.data.invite_head_img || "", head_img: e.data.head_img || "", is_client: e.data.is_client || "0", ios_pay: e.data.ios_pay || "0" };try {
                wx.setStorageSync("plat_sdk_token", e.data.sdk_token), wx.setStorageSync("plat_uid", e.data.user_id), wx.setStorageSync("plat_username", e.data.username), e.data.ext && wx.setStorageSync("plat_session_key", e.data.ext);
              } catch (e) {}o.login && o.login(0, t);
            } else o.login && o.login(1, { errMsg: e.msg });r.getShareInfo("menu", function (e) {
              console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab"), wx.onShareAppMessage(function () {
                return r.logStartShare("menu"), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } });
    }, share: function (e) {
      o.share = "function" == typeof callback ? callback : null;var t = e.type || "share";console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + t);var r = this;this.getShareInfo(t, function (e) {
        r.logStartShare(t), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, switchEnv: function (e) {
      e(partner_swtich_info);
    }, switchGame: function (t) {
      SDKyyw.cutGameCallback = e => {
        t(e);
      }, 1 == partner_swtich_info.showSwitchOn ? SDKyyw.cutGame() : t({ status: 0, msg: "\u6ca1\u5f00\u542f\u8df3\u8f6c" });
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
          console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570\u7ed3\u679c"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? t && t(e.data) : o.share && o.share(1, { errMsg: "\u5206\u4eab\u5931\u8d25\uff1a" + e.msg }) : o.share && o.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u6570\u636e\u5931\u8d25\uff01" });
        } });
    }, updateShare: function (e, t, r, a, n, o) {
      console.log("[SDK]\u5206\u4eab\u8fc7\u6765\u7684\u73a9\u5bb6\u4e0a\u62a5\u7ed9\u670d\u52a1\u5668");var i = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: t, is_new: r, role_id: a, sever_id: n, scene: o }, success: function (e) {
          console.log("[SDK]\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:"), console.log(e);
        } });
    }, pay: function (e, t) {
      var r = this;wx.checkSession({ success: function () {
          r.startPay(e, t);
        }, fail: function () {
          console.log("[SDK]session\u8fc7\u671f\u9700\u8981\u91cd\u65b0\u767b\u5f55"), r.login({}, function () {
            r.startPay(e, t);
          });
        } });
    }, startPay: function (e, t) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a"), console.log(e);var r = this;o.pay = "function" == typeof t ? t : null;t = wx.getStorageSync("plat_sdk_token");var a = wx.getStorageSync("plat_session_key");var n;t || a ? (n = wx.getSystemInfoSync(), e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: a, platform: n.platform }, r.order_data = e, (t = r.getPublicData()).order_data = JSON.stringify(e), wx.request({ url: "https://" + HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (t) {
          if (console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355" + JSON.stringify(t)), 200 == t.statusCode) {
            t = t.data;if (t.state) {
              if ("" == t.data.ext) {
                SDKyyw.onPayCallback = e => {};let e = {};e.serverId = t.data.pay_data.serverId, e.serverName = t.data.pay_data.serverName, e.roleId = t.data.pay_data.roleId, e.roleName = t.data.pay_data.roleName, e.roleLevel = t.data.pay_data.roleLevel, e.gameOrderid = t.data.pay_data.orderId, e.pext = t.data.pay_data.orderId, e.money = t.data.pay_data.amount, e.productName = t.data.pay_data.productName, e.productId = t.data.pay_data.productId, console.log("\u6e20\u9053\u4e0b\u5355\u6570\u636e" + JSON.stringify(e)), SDKyyw.pay(e);
              } else r.extDo({ ext1: t.data.ext, ext2: t.data.pay_data });
            } else o.pay && o.pay(1, { errMsg: t.msg });
          } else o.login && o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } })) : o.pay && o.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, extDo: function (e) {
      wx.navigateToMiniProgram({ appId: e.ext1, path: "pages/pay/pay?order_id=" + e.ext2.orderId + "&money=" + e.ext2.amount, extraData: {}, envVersion: "release", success(e) {} });
    }, logCreateRole: function (e) {
      var t = wx.getStorageSync("plat_uid");var r = wx.getStorageSync("plat_username");var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", a);let n = {};n.type = 2, n.roleId = e.roleid, n.roleName = e.rolename, n.serverId = e.serverid, SDKyyw.pushData(n);
    }, logEnterGame: function (e) {
      var t = wx.getStorageSync("plat_uid");var r = wx.getStorageSync("plat_username");var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", a), user_invite_info && this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, e.roleid, e.serverid, user_invite_info.scene);let n = {};n.type = 1, n.roleId = e.roleid, n.roleName = e.rolename, n.serverId = e.serverid, SDKyyw.pushData(n);let o = {};o.type = 5, o.roleId = e.roleid, o.roleName = e.rolename, o.serverId = e.serverid, SDKyyw.pushData(o);
    }, logRoleUpLevel: function (e) {
      var t = wx.getStorageSync("plat_uid");var r = wx.getStorageSync("plat_username");var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", a);let n = {};n.type = 4, n.roleId = e.roleid, n.roleName = e.rolename, n.serverId = e.serverid, n.level = e.rolelevel, SDKyyw.pushData(n);
    }, uuid: function (e, t) {
      var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var a,
          n = [];var o;if (e = e || r.length, t) for (a = 0; a < t; a++) n[a] = r[0 | Math.random() * e];else for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", a = 0; a < 36; a++) n[a] || (o = 0 | 16 * Math.random(), n[a] = r[19 == a ? 3 & o | 8 : o]);return n.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var t = wx.getStorageSync("plat_uuid");var r = wx.getStorageSync("plat_idfv");var a = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, is_from_min: 1, ad_code: a, uuid: t, idfv: r, dname: e.model, mac: "0000", net_type: 0 == e.wifiSignal ? "4G" : "WIFI", os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: "android" == e.platform ? 1 : 2 };
    }, log: function (e, t) {
      var r = this.getPublicData();for (var a in t) r[a] = t[a];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(r), wx.request({ url: "https://" + HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, getLaunchOptionsSync: function (e) {
      var t = SDKyyw.getLaunchOptionsSync();e(t), console.log("\u83b7\u53d6\u573a\u666f\u503c" + JSON.stringify(t));
    }, msgCheck: function (e, r) {
      SDKyyw.msgSecCheck(e, function (e) {
        console.log("\u654f\u611f\u8bcd\u68c0\u6d4b\u7ed3\u679c" + JSON.stringify(e));let t = { data: {} };1 == e.status ? (t.statusCode = 200, t.data.state = 1) : (t.statusCode = 0, t.data.state = 0), r && r(t);
      });
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
}, exports.switchEnv = function (e) {
  run("switchEnv", e);
}, exports.switchGame = function (e) {
  run("switchGame", e);
}, exports.openService = function () {
  run("openService");
}, exports.logCreateRole = function (e, t, r, a, n) {
  run("logCreateRole", { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n });
}, exports.logEnterGame = function (e, t, r, a, n) {
  run("logEnterGame", { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n });
}, exports.logRoleUpLevel = function (e, t, r, a, n) {
  run("logRoleUpLevel", { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n });
}, exports.share = function (e) {
  run("share", { type: e });
}, exports.downloadClient = function () {
  run("downloadClient");
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getLaunchOptionsSync = function (e) {
  run("getLaunchOptionsSync", e);
}, exports.msgCheck = function (e, t) {
  run("msgCheck", e, t);
};