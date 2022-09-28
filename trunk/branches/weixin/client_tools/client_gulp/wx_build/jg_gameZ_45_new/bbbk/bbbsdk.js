require("../utils/qjsdk-1.0.4");var config = { game_id: 256, game_pkg: "tjqy_tjqyqjwxxcxhxfx_WS", partner_label: "qjxyx1", partner_id: "605", game_ver: "77.0.1", is_auth: !1 };window.config = config;var PARTNER_SDK = mainSDK();var HOST = "sdk.sh9130.com";var user_game_info = null;var user_invite_info = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var partner_user_info = null;var sdkInitOk = !1;function mainSDK() {
  var t = {};return { order_data: {}, init: function (e, r) {
      e = e && e.game_ver ? e.game_ver : 0;console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var n = this;var o;o = wx.getStorageSync("plat_uuid") ? 0 : (o = n.uuid(16, 32), wx.setStorageSync("plat_uuid", o), 1), wx.getStorageSync("plat_idfv") || (t = n.uuid(16, 32), wx.setStorageSync("plat_idfv", t));var t = wx.getLaunchOptionsSync();var a = t.scene || "";wx.showShareMenu(), o && t.query && t.query.ad_code && wx.setStorageSync("plat_ad_code", t.query.ad_code), n.log("start", { install: o, scene: a });n = t.query && t.query.invite ? t.query.invite : "";t = t.query && t.query.invite_type ? t.query.invite_type : "";n && (user_invite_info = { invite: n, invite_type: t, is_new: o, scene: a }), e && this.checkGameVersion(e, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55"), t.login = "function" == typeof r ? r : null;var n = this;window.qjsdk.SDKLogin().then(e => {
        partner_user_info = e, n.do_login(e), console.log("\u6e20\u9053\u767b\u5f55\u8fd4\u56de\u6210\u529f" + JSON.stringify(e));
      }).catch(e => {
        console.warn("sdk\u521d\u59cb\u5316\u5931\u8d25\uff0c\u91cd\u8bd5\u3002", e);
      });
    }, do_login: function (n) {
      var o = this;var e = o.getPublicData();if (e.user_info = JSON.stringify(n), user_invite_info && "object" == typeof user_invite_info) for (var r in user_invite_info) e[r] = user_invite_info[r];wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: e, success: function (e) {
          if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a" + JSON.stringify(e)), 200 == e.statusCode) {
            e = e.data;if (e.state) {
              try {
                wx.setStorageSync("plat_sdk_token", e.data.sdk_token), wx.setStorageSync("plat_uid", e.data.user_id), wx.setStorageSync("plat_username", e.data.username), e.data.ext && wx.setStorageSync("plat_session_key", e.data.ext);
              } catch (e) {}var r = { userid: e.data.user_id, account: e.data.nick_name, token: e.data.token, invite_uid: e.data.invite_uid || "", invite_nickname: e.data.invite_nickname || "", invite_head_img: e.data.invite_head_img || "", head_img: e.data.head_img || "", is_client: e.data.is_client || "0", ios_pay: e.data.ios_pay || "0", isBindPhone: n.isBindPhone };t.login && t.login(0, r);
            } else t.login && t.login(1, { errMsg: e.msg });o.getShareInfo("menu", function (e) {
              console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab"), o.logStartShare("menu"), wx.onShareAppMessage(function () {
                return o.logStartShare("menu"), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else t.login && t.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } });
    }, share: function (e) {
      t.share = "function" == typeof callback ? callback : null;var r = e.type || "share";console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + r);var n = this;this.getShareInfo(r, function (e) {
        n.logStartShare(r), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var r = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=logStartShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u7ed3\u679c" + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? n && n(r.data) : n && n({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570");var n = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=shareConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, type: e, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", no_log: 1 }, success: function (e) {
          console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570\u7ed3\u679c"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : t.share && t.share(1, { errMsg: "\u5206\u4eab\u5931\u8d25\uff1a" + e.msg }) : t.share && t.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u6570\u636e\u5931\u8d25\uff01" });
        } });
    }, updateShare: function (e, r, n, o, t, a) {
      console.log("[SDK]\u5206\u4eab\u8fc7\u6765\u7684\u73a9\u5bb6\u4e0a\u62a5\u7ed9\u670d\u52a1\u5668");var i = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: n, role_id: o, sever_id: t, scene: a }, success: function (e) {
          console.log("[SDK]\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:" + JSON.stringify(e));
        } });
    }, msgCheck: function (e, r) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9" + e);let n = { data: {} };window.qjsdk.msgSecCheck(partner_user_info.openId, "1", e).then(e => {
        console.log("\u6210\u529f\uff1a", e), n.statusCode = 200, n.data.state = 1, r && r(n);
      }).catch(e => {
        console.log("\u5931\u8d25\uff1a", e), n.statusCode = 200, n.data.state = 0, r && r(n);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a" + JSON.stringify(e));var n = this;t.pay = "function" == typeof r ? r : null;r = wx.getStorageSync("plat_sdk_token");var o = wx.getStorageSync("plat_session_key");r ? (e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, session_key: o, platform: platform }, n.order_data = e, (r = n.getPublicData()).order_data = JSON.stringify(e), wx.request({ url: "https://" + HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: r, success: function (e) {
          console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355" + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? "" == e.data.ext ? window.qjsdk.SDKPay(e.data.pay_data) : n.extDo({ ext1: e.data.ext, ext2: e.data.pay_data }) : t.pay && t.pay(1, { errMsg: e.msg }) : t.login && t.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } })) : t.pay && t.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, extDo: function (e) {
      wx.navigateToMiniProgram({ appId: e.ext1, path: "pages/pay/pay?order_id=" + e.ext2.orderId + "&money=" + e.ext2.amount, extraData: {}, envVersion: "release", success(e) {} });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync("plat_uid");var n = wx.getStorageSync("plat_username");var o = {};o.user_id = r, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", o);r = { sceneId: "1", serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel, vipLevel: "0", power: "0", roleCreateTime: Date.parse(new Date()) / 1e3, roleUpgradeTime: Date.parse(new Date()) / 1e3 };window.qjsdk.UploadRoleInfo(r).then(e => {
        console.log("\u4e0a\u62a5\u6210\u529f\uff1a", e);
      }).catch(e => {
        console.log("\u4e0a\u62a5\u5931\u8d25\uff1a", e);
      });
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync("plat_uid");var n = wx.getStorageSync("plat_username");var o = {};o.user_id = r, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", o), user_invite_info && this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, e.roleid, e.serverid, user_invite_info.scene);r = { sceneId: "2", serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel, vipLevel: "0", power: "0", roleCreateTime: "0", roleUpgradeTime: Date.parse(new Date()) / 1e3 };window.qjsdk.UploadRoleInfo(r).then(e => {
        console.log("\u4e0a\u62a5\u6210\u529f\uff1a", e);
      }).catch(e => {
        console.log("\u4e0a\u62a5\u5931\u8d25\uff1a", e);
      });
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync("plat_uid");var n = wx.getStorageSync("plat_username");var o = {};o.user_id = r, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", o);r = { sceneId: "3", serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel, vipLevel: "0", power: "0", roleCreateTime: "0", roleUpgradeTime: Date.parse(new Date()) / 1e3 };window.qjsdk.UploadRoleInfo(r).then(e => {
        console.log("\u4e0a\u62a5\u6210\u529f\uff1a", e);
      }).catch(e => {
        console.log("\u4e0a\u62a5\u5931\u8d25\uff1a", e);
      });
    }, uuid: function (e, r) {
      var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var o,
          t = [];var a;if (e = e || n.length, r) for (o = 0; o < r; o++) t[o] = n[0 | Math.random() * e];else for (t[8] = t[13] = t[18] = t[23] = "-", t[14] = "4", o = 0; o < 36; o++) t[o] || (a = 0 | 16 * Math.random(), t[o] = n[19 == o ? 3 & a | 8 : a]);return t.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync("plat_uuid");var r = wx.getStorageSync("plat_idfv");var n = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: n, uuid: e, idfv: r, mac: "0000", is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : "WIFI", os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: "android" == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var n = this.getPublicData();for (var o in r) n[o] = r[o];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(n), wx.request({ url: "https://" + HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {}, sendUrl: function () {}, setMessageToFriendQuery: function (e, r) {
      e = e.activity_id;r(wx.setMessageToFriendQuery({ shareMessageToFriendScene: e }));
    }, setLoadingCmp: function () {}, sendCode: function (e, r) {
      console.log("\u5f00\u59cb\u83b7\u53d6\u9a8c\u8bc1\u7801\uff1a", e.phone);
    }, bindPhone: function (e, r) {
      console.log("\u5f00\u59cb\u7ed1\u5b9a\u624b\u673a\uff1a", e.phone, e.code);
    }, subscribeMessage: function (e, r) {
      console.log("[SDK]\u8ba2\u9605\u6d88\u606f\uff1a" + e), t.subscribeMessage = "function" == typeof r ? r : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u8fd4\u56de\uff1a\u6210\u529f"), console.log(e), t.subscribeMessage && t.subscribeMessage(e);
        }, fail(e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u8fd4\u56de\uff1a\u5931\u8d25"), console.log(e), t.subscribeMessage && t.subscribeMessage(e);
        } });
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
}, exports.logCreateRole = function (e, r, n, o, t) {
  run("logCreateRole", { serverid: e, servername: r, roleid: n, rolename: o, rolelevel: t });
}, exports.logEnterGame = function (e, r, n, o, t) {
  run("logEnterGame", { serverid: e, servername: r, roleid: n, rolename: o, rolelevel: t });
}, exports.logRoleUpLevel = function (e, r, n, o, t) {
  run("logRoleUpLevel", { serverid: e, servername: r, roleid: n, rolename: o, rolelevel: t });
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
}, exports.sendUrl = function () {
  run("sendUrl");
}, exports.setMessageToFriendQuery = function (e, r) {
  run("setMessageToFriendQuery", e, r);
}, exports.setLoadingCmp = function () {
  run("setLoadingCmp");
}, exports.sendCode = function (e, r) {
  run("sendCode", e, r);
}, exports.bindPhone = function (e, r) {
  run("bindPhone", e, r);
}, exports.subscribeMessage = function (e, r) {
  run("subscribeMessage", e, r);
};