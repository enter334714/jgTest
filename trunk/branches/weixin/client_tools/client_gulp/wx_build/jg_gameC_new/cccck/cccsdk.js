import sdk from "./ccchelp.js";var config = { game_id: 256, game_pkg: "tjqy_tjqylmfb_FK", partner_label: "GNWX", partner_id: "443", game_ver: "3.0.14", is_auth: !1, from: null, tmpId: {} };window.config = config;var PARTNER_SDK = mainSDK();var HOST = "sdk.sh9130.com";var user_game_info = null;var user_invite_info = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;function mainSDK() {
  var o = {};return { order_data: {}, init: function (e, r) {
      var n = e && e.game_ver ? e.game_ver : 0;console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var t = this;var o;o = (a = wx.getStorageSync("plat_uuid")) ? 0 : (a = t.uuid(16, 32), wx.setStorageSync("plat_uuid", a), 1), (e = wx.getStorageSync("plat_idfv")) || (e = t.uuid(16, 32), wx.setStorageSync("plat_idfv", e));var a = wx.getLaunchOptionsSync();e = a.scene || "";o && a.query && a.query.ad_code && wx.setStorageSync("plat_ad_code", a.query.ad_code), t.log("start", { install: o, scene: e });t = a.query && a.query.invite ? a.query.invite : "";a = a.query && a.query.invite_type ? a.query.invite_type : "";t && (user_invite_info = { invite: t, invite_type: a, is_new: o, scene: e }), sdk.init({ game_ver: n }, function (e) {
        console.log("\u6e20\u9053\u521d\u59cb\u5316", JSON.stringify(e));
      }), n && this.checkGameVersion(n, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55"), o.login = "function" == typeof r ? r : null;var n = this;sdk.login(function (e, r) {
        0 == e ? (n.do_login(r), console.log("\u6e20\u9053\u767b\u5f55\u8fd4\u56de\u6210\u529f" + JSON.stringify(r))) : (console.warn("\u6e20\u9053\u767b\u5f55\u5931\u8d25\u3002"), o.login && o.login(1, { errMsg: "\u6e20\u9053\u767b\u5f55\u5931\u8d25\uff01" }));
      });
    }, do_login: function (e) {
      var n = this;var r = n.getPublicData();if (r.user_info = JSON.stringify(e), user_invite_info && "object" == typeof user_invite_info) for (var t in user_invite_info) r[t] = user_invite_info[t];wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: r, success: function (e) {
          if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a" + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync("9130_plat_sdk_token", r.data.sdk_token), wx.setStorageSync("9130_plat_uid", r.data.user_id), wx.setStorageSync("9130_plat_username", r.data.username), r.data.ext && wx.setStorageSync("9130_plat_session_key", r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };o.login && o.login(0, e);
            } else o.login && o.login(1, { errMsg: r.msg });n.getShareInfo("menu", function (e) {
              console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab"), wx.onShareAppMessage(function () {
                return n.logStartShare("menu"), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } });
    }, share: function (e) {
      o.share = "function" == typeof callback ? callback : null;var r = e.type || "share";console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + r);var n = this;this.getShareInfo(r, function (e) {
        n.logStartShare(r), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var r = wx.getStorageSync("9130_plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=logStartShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("9130_plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u7ed3\u679c" + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? n && n(r.data) : n && n({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570");var n = wx.getStorageSync("9130_plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=shareConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, type: e, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", no_log: 1 }, success: function (e) {
          console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570\u7ed3\u679c"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : o.share && o.share(1, { errMsg: "\u5206\u4eab\u5931\u8d25\uff1a" + e.msg }) : o.share && o.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u6570\u636e\u5931\u8d25\uff01" });
        } });
    }, updateShare: function (e, r, n, t, o, a) {
      console.log("[SDK]\u5206\u4eab\u8fc7\u6765\u7684\u73a9\u5bb6\u4e0a\u62a5\u7ed9\u670d\u52a1\u5668");var i = wx.getStorageSync("9130_plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: n, role_id: t, sever_id: o, scene: a }, success: function (e) {
          console.log("[SDK]\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:" + JSON.stringify(e));
        } });
    }, msgCheck: function (e, n) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9\uff1a" + e), sdk.checkMsg(e, function (e) {
        console.log("[SDK]\u6e20\u9053\u8fd4\u56de\u6587\u672c\u68c0\u6d4b\u7ed3\u679c\uff1a" + JSON.stringify(e));let r = { data: {} };0 == e ? (r.statusCode = 200, r.data.state = 1) : (r.statusCode = 0, r.data.state = 0), n && n(r);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a" + JSON.stringify(e));o.pay = "function" == typeof r ? r : null;var n = wx.getStorageSync("9130_plat_sdk_token");r = wx.getStorageSync("9130_plat_session_key");n ? (n = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: r, platform: platform }, this.order_data = n, (r = this.getPublicData()).order_data = JSON.stringify(n), wx.request({ url: "https://" + HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: r, success: function (e) {
          console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355" + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.pay(e.data.pay_data, function (e, r) {
            console.log("\u6e20\u9053sdk\u652f\u4ed8\u63a5\u53e3,\u8fd4\u56de:" + JSON.stringify(r));
          }) : o.pay && o.pay(1, { errMsg: e.msg }) : o.login && o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } })) : o.pay && o.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync("9130_plat_uid");var n = wx.getStorageSync("9130_plat_username");var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", t), sdk.logCreateRole(e.serverid, e.servername, e.roleid, e.rolename, e.rolelevel);
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync("9130_plat_uid");var n = wx.getStorageSync("9130_plat_username");var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", t), user_invite_info && this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, e.roleid, e.serverid, user_invite_info.scene), sdk.logEnterGame(e.serverid, e.servername, e.roleid, e.rolename, e.rolelevel);
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync("9130_plat_uid");var n = wx.getStorageSync("9130_plat_username");var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", t), sdk.logRoleUpLevel(e.serverid, e.servername, e.roleid, e.rolename, e.rolelevel);
    }, uuid: function (e, r) {
      var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var t,
          o = [];var a;if (e = e || n.length, r) for (t = 0; t < r; t++) o[t] = n[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", t = 0; t < 36; t++) o[t] || (a = 0 | 16 * Math.random(), o[t] = n[19 == t ? 3 & a | 8 : a]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync("plat_uuid");var r = wx.getStorageSync("plat_idfv");var n = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: n, uuid: e, idfv: r, mac: "0000", is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : "WIFI", os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: "android" == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var n = this.getPublicData();for (var t in r) n[t] = r[t];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(n), wx.request({ url: "https://" + HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {
      sdk.downloadClient();
    } };
}function run(e, r, n) {
  e in PARTNER_SDK && PARTNER_SDK[e](r, n);
}exports.init = function (e, r) {
  run("init", e, r);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.pay = function (e, r) {
  run("pay", e, r);
}, exports.openService = function () {
  run("openService");
}, exports.logCreateRole = function (e, r, n, t, o) {
  run("logCreateRole", { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.logEnterGame = function (e, r, n, t, o) {
  run("logEnterGame", { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.logRoleUpLevel = function (e, r, n, t, o) {
  run("logRoleUpLevel", { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.share = function (e) {
  run("share", { type: e });
}, exports.msgCheck = function (e, r) {
  run("msgCheck", e, r);
}, exports.downloadClient = function () {
  run("downloadClient");
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run("getPublicData");
}, exports.weiduanHelper = function () {
  run("weiduanHelper");
};