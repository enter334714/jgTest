import sdk from "./hhhhelp.js";var config = { game_id: 256, game_pkg: "tjqy_tjqywlsdh5_GD", partner_label: "bgxyx", partner_id: "389", game_ver: "8.0.4", is_auth: !1, partner_app_id: 28, partner_mp_id: "wx41e26949e9eae873" };window.config = config;var PARTNER_SDK = mainSDK();var HOST = "sdk.sh9130.com";var user_game_info = null;var user_invite_info = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var partner_user_info = null;function mainSDK() {
  var o = {};return { order_data: {}, init: function (e, r) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var a = this;var o;o = (n = wx.getStorageSync("plat_uuid")) ? 0 : (n = a.uuid(16, 32), wx.setStorageSync("plat_uuid", n), 1), (e = wx.getStorageSync("plat_idfv")) || (e = a.uuid(16, 32), wx.setStorageSync("plat_idfv", e));var n = wx.getLaunchOptionsSync();e = n.scene || "";o && n.query && n.query.ad_code && wx.setStorageSync("plat_ad_code", n.query.ad_code), a.log("start", { install: o, scene: e }), wx.showShareMenu();a = n.query && n.query.invite ? n.query.invite : "";n = n.query && n.query.invite_type ? n.query.invite_type : "";a && (user_invite_info = { invite: a, invite_type: n, is_new: o, scene: e }), t && this.checkGameVersion(t, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55"), o.login = "function" == typeof r ? r : null;var t = this;let a = wx.getLaunchOptionsSync();sdk.init({ app_id: config.partner_app_id, mp_id: config.partner_mp_id, showLoading: !1 }).then(e => {
        sdk.login({ data: { state: a.query.state || a.query.scene || "" }, confg: { showLoading: !1 } }).then(e => {
          partner_user_info = e.data, t.do_login(e.data), console.log("\u6e20\u9053\u767b\u5f55\u8fd4\u56de\u6210\u529f" + JSON.stringify(e));
        });
      });
    }, do_login: function (e) {
      var t = this;var r = t.getPublicData();if (r.user_info = JSON.stringify(e), user_invite_info && "object" == typeof user_invite_info) for (var a in user_invite_info) r[a] = user_invite_info[a];wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: r, success: function (e) {
          if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a" + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync("plat_sdk_token", r.data.sdk_token), wx.setStorageSync("plat_uid", r.data.user_id), wx.setStorageSync("plat_username", r.data.username), r.data.ext && wx.setStorageSync("plat_session_key", r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };o.login && o.login(0, e);
            } else o.login && o.login(1, { errMsg: r.msg });t.getShareInfo("menu", function (e) {
              console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab"), wx.onShareAppMessage(function () {
                return t.logStartShare("menu"), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } });
    }, share: function (e) {
      o.share = "function" == typeof callback ? callback : null;var t = e.type || "share";console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + t);var a = this;this.getShareInfo(t, function (e) {
        a.logStartShare(t);var r = e.query;sdk.getShareInfo({ data: { path: "pages/index/index" } }).then(e => {
          wx.onShareAppMessage(function () {
            return { title: e.data.title, imageUrl: e.data.image, query: `state=${e.data.state}` + "&" + r };
          });
        });
      }), sdk.addShareInfo({ data: { to_target: "wx" } }).then(e => {});
    }, logStartShare: function (e) {
      var r = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=logStartShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u7ed3\u679c" + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? t && t(r.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570");var t = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=shareConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", no_log: 1 }, success: function (e) {
          console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570\u7ed3\u679c"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : o.share && o.share(1, { errMsg: "\u5206\u4eab\u5931\u8d25\uff1a" + e.msg }) : o.share && o.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u6570\u636e\u5931\u8d25\uff01" });
        } });
    }, updateShare: function (e, r, t, a, o, n) {
      console.log("[SDK]\u5206\u4eab\u8fc7\u6765\u7684\u73a9\u5bb6\u4e0a\u62a5\u7ed9\u670d\u52a1\u5668");var i = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: t, role_id: a, sever_id: o, scene: n }, success: function (e) {
          console.log("[SDK]\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:" + JSON.stringify(e));
        } });
    }, msgCheck: function (e, r) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9" + e);let t = { data: {} };sdk.checkMsg({ data: { content: e } }).then(e => {
        console.log("\u6587\u672c\u68c0\u6d4b\u7ed3\u679c" + JSON.stringify(e)), "success" == e.msg ? (t.statusCode = 200, t.data.state = 1) : (t.statusCode = 0, t.data.state = 0), r && r(t);
      }, e => {
        console.log(e), t.statusCode = 0, t.data.state = 0, r && r(t);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a" + JSON.stringify(e));o.pay = "function" == typeof r ? r : null;var t = wx.getStorageSync("plat_sdk_token");r = wx.getStorageSync("plat_session_key");t ? (t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: r, platform: platform }, this.order_data = t, (r = this.getPublicData()).order_data = JSON.stringify(t), wx.request({ url: "https://" + HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: r, success: function (e) {
          console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355" + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.checkPay({ data: { "order-currency": "CNY", "order-cp_order_id": e.data.pay_data.orderId, "order-product_price": e.data.pay_data.amount, "order-product_id": e.data.pay_data.productId, "order-product_cnt": 1, "order-product_name": e.data.pay_data.productName, "order-product_desc": e.data.pay_data.productDec, "order-ext": e.data.pay_data.orderId, "role-event": "5", "role-server_id": e.data.pay_data.serverId, "role-server_name": e.data.pay_data.serverName, "role-role_id": e.data.pay_data.roleId, "role-role_name": e.data.pay_data.roleName, "role-role_level": e.data.pay_data.roleLevel, "role-role_vip": 0 } }).then(e => {
            console.log("\u6e20\u9053\u652f\u4ed8\u7ed3\u679cres==" + JSON.stringify(e));
          }) : o.pay && o.pay(1, { errMsg: e.msg }) : o.login && o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } })) : o.pay && o.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", a), sdk.updateRole({ data: { "role-event": "2", "role-server_id": e.serverid, "role-server_name": e.servername, "role-role_id": e.roleid, "role-role_name": e.rolename, "role-role_level": e.rolelevel, "role-role_vip": 0, "role-combat_num": 0 } }).then(e => {}, e => {});
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", a), user_invite_info && this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, e.roleid, e.serverid, user_invite_info.scene), sdk.updateRole({ data: { "role-event": "1", "role-server_id": e.serverid, "role-server_name": e.servername, "role-role_id": e.roleid, "role-role_name": e.rolename, "role-role_level": e.rolelevel, "role-role_vip": 0, "role-combat_num": 0 } }).then(e => {}, e => {});
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", a);
    }, uuid: function (e, r) {
      var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var a,
          o = [];var n;if (e = e || t.length, r) for (a = 0; a < r; a++) o[a] = t[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", a = 0; a < 36; a++) o[a] || (n = 0 | 16 * Math.random(), o[a] = t[19 == a ? 3 & n | 8 : n]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync("plat_uuid");var r = wx.getStorageSync("plat_idfv");var t = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: t, uuid: e, idfv: r, mac: "0000", is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : "WIFI", os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: "android" == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var t = this.getPublicData();for (var a in r) t[a] = r[a];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(t), wx.request({ url: "https://" + HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {}, setMessageToFriendQuery: function (e, r) {
      e = e.activity_id;r(wx.setMessageToFriendQuery({ shareMessageToFriendScene: e }));
    } };
}function run(e, r, t) {
  e in PARTNER_SDK && PARTNER_SDK[e](r, t);
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
}, exports.logCreateRole = function (e, r, t, a, o) {
  run("logCreateRole", { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: o });
}, exports.logEnterGame = function (e, r, t, a, o) {
  run("logEnterGame", { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: o });
}, exports.logRoleUpLevel = function (e, r, t, a, o) {
  run("logRoleUpLevel", { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: o });
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
}, exports.setMessageToFriendQuery = function (e, r) {
  run("setMessageToFriendQuery", e, r);
};