import { setRoleInfo, init, getOpenId, userLogin, checkPay, payRequest, payMoney } from "../utils/currency";var config = { game_id: 256, game_pkg: "tjqy_tjqyhywxxyxntj_RX", partner_label: "hyxyx", partner_id: "566", game_ver: "59.0.9", is_auth: !1 };window.config = config;var partner_config = { appId: 2036, channel_id: 194, env: 1 };var PARTNER_SDK = mainSDK();var HOST = "sdk.sh9130.com";var user_game_info = null;var user_invite_info = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var partner_user_info = null;function mainSDK() {
  var o = {};return { order_data: {}, init: function (e, n) {
      e = e && e.game_ver ? e.game_ver : 0;console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var t = this;var r;r = wx.getStorageSync("plat_uuid") ? 0 : (r = t.uuid(16, 32), wx.setStorageSync("plat_uuid", r), 1), wx.getStorageSync("plat_idfv") || (o = t.uuid(16, 32), wx.setStorageSync("plat_idfv", o));var o = wx.getLaunchOptionsSync();var a = o.scene || "";wx.showShareMenu(), r && o.query && o.query.ad_code && wx.setStorageSync("plat_ad_code", o.query.ad_code), t.log("start", { install: r, scene: a });t = o.query && o.query.invite ? o.query.invite : "";o = o.query && o.query.invite_type ? o.query.invite_type : "";t && (user_invite_info = { invite: t, invite_type: o, is_new: r, scene: a }), e && this.checkGameVersion(e, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55"), o.login = "function" == typeof n ? n : null;wx.getStorageSync("openId") ? this.partner_login() : getOpenId(partner_config.appId).then(e => {
        e = e.data;0 == e.status ? (console.log("\u83b7\u53d6openid\u6210\u529f"), wx.setStorageSync("openId", e.data.openid), wx.setStorageSync("session_key", e.data.session_key), this.partner_login()) : console.log("\u83b7\u53d6openid\u5931\u8d25");
      });
    }, partner_login: function () {
      var e = { channel_id: partner_config.channel_id, imei: wx.getStorageSync("imei") || "", appId: partner_config.appId, mobile: "", device: wx.getStorageSync("device") || "" };init(e).then(e => {
        e = e.data;console.log("\u521d\u59cb\u5316\u6210\u529f\u8fd4\u56de", JSON.stringify(e)), 0 == e.status ? (wx.setStorageSync("imei", e.data.imei), wx.setStorageSync("device", e.data.device), userLogin({ channel_id: partner_config.channel_id, appId: partner_config.appId }).then(e => {
          console.log("\u767b\u5f55\u56de\u8c03", JSON.stringify(e));e = e.data;0 == e.Code ? (wx.setStorageSync("userId", e.UserId), this.do_login({ UserId: e.UserId, token: wx.getStorageSync("session_key") })) : (console.log("\u6e20\u9053\u767b\u5f55\u5931\u8d25"), o.login && o.login(1, { errMsg: e.Message }));
        })) : console.log("\u521d\u59cb\u5316\u5931\u8d25", JSON.stringify(err));
      });
    }, do_login: function (t) {
      var r = this;var e = r.getPublicData();if (e.user_info = JSON.stringify(t), user_invite_info && "object" == typeof user_invite_info) for (var n in user_invite_info) e[n] = user_invite_info[n];wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: e, success: function (e) {
          if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a" + JSON.stringify(e)), 200 == e.statusCode) {
            e = e.data;if (e.state) {
              try {
                wx.setStorageSync("plat_sdk_token", e.data.sdk_token), wx.setStorageSync("plat_uid", e.data.user_id), wx.setStorageSync("plat_username", e.data.username), e.data.ext && wx.setStorageSync("plat_session_key", e.data.ext);
              } catch (e) {}var n = { userid: e.data.user_id, account: e.data.nick_name, token: e.data.token, invite_uid: e.data.invite_uid || "", invite_nickname: e.data.invite_nickname || "", invite_head_img: e.data.invite_head_img || "", head_img: e.data.head_img || "", is_client: e.data.is_client || "0", ios_pay: e.data.ios_pay || "0", isBindPhone: t.isBindPhone };o.login && o.login(0, n);
            } else o.login && o.login(1, { errMsg: e.msg });r.getShareInfo("menu", function (e) {
              console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab"), r.logStartShare("menu"), wx.onShareAppMessage(function () {
                return r.logStartShare("menu"), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } });
    }, share: function (e) {
      o.share = "function" == typeof callback ? callback : null;var n = e.type || "share";console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + n);var t = this;this.getShareInfo(n, function (e) {
        t.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=logStartShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var n;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u7ed3\u679c" + JSON.stringify(e)), 200 == e.statusCode && (n = e.data).state ? t && t(n.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, n) {
      console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570");var t = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=shareConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", no_log: 1 }, success: function (e) {
          console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570\u7ed3\u679c"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : o.share && o.share(1, { errMsg: "\u5206\u4eab\u5931\u8d25\uff1a" + e.msg }) : o.share && o.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u6570\u636e\u5931\u8d25\uff01" });
        } });
    }, updateShare: function (e, n, t, r, o, a) {
      console.log("[SDK]\u5206\u4eab\u8fc7\u6765\u7684\u73a9\u5bb6\u4e0a\u62a5\u7ed9\u670d\u52a1\u5668");var i = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: t, role_id: r, sever_id: o, scene: a }, success: function (e) {
          console.log("[SDK]\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:" + JSON.stringify(e));
        } });
    }, msgCheck: function (e, t) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9" + e), wx.request({ url: "https://" + HOST + "/partner/data/msg_check/" + config.partner_id + "/" + config.game_pkg, method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { content: e, openid: wx.getStorageSync("openId") }, success: function (e) {
          console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9\u7ed3\u679c\u8fd4\u56de:" + JSON.stringify(e));let n = { data: {} };1 == e.data.code ? (n.statusCode = 200, n.data.state = 1) : (n.statusCode = 0, n.data.state = 0), t && t(n);
        } });
    }, pay: function (e, n) {
      this.startPay(e, n);
    }, startPay: function (e, n) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a" + JSON.stringify(e));var t = this;o.pay = "function" == typeof n ? n : null;n = wx.getStorageSync("plat_sdk_token");var r = wx.getStorageSync("plat_session_key");n ? (e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: r, platform: platform }, t.order_data = e, (n = t.getPublicData()).order_data = JSON.stringify(e), wx.request({ url: "https://" + HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (n) {
          if (console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355" + JSON.stringify(n)), 200 == n.statusCode) {
            n = n.data;if (n.state) {
              if (console.log("\u4e0b\u5355\u7ed3\u679c\uff1a" + JSON.stringify(n.data.pay_data)), "" == n.data.ext) {
                let e = n.data.pay_data;e.appId = partner_config.appId, e.channel_id = partner_config.channel_id, e.UserId = wx.getStorageSync("userId"), checkPay({ total_fee: e.amount, u9uid: wx.getStorageSync("userId"), channel: partner_config.channel_id, channel_id: partner_config.channel_id, platform: platform, appId: partner_config.appId, amount: e.amount, productOrderId: e.ProductOrderId, ext: e.ext, appExt: e.appExt, IsSwitchPayChannel: 0, role_id: e.role_id, zone_id: e.zone_id, zone_name: e.zone_name, env: 0, DeviceId: wx.getStorageSync("device") }).then(e => {
                  console.log("\u6e20\u9053\u652f\u4ed8\u8fd4\u56de", e);
                });
              } else t.extDo({ ext1: n.data.ext, ext2: n.data.pay_data });
            } else o.pay && o.pay(1, { errMsg: n.msg });
          } else o.login && o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } })) : o.pay && o.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, extDo: function (e) {
      wx.navigateToMiniProgram({ appId: e.ext1, path: "pages/pay/pay?order_id=" + e.ext2.cp_trade_sn + "&money=" + e.ext2.total_charge / 100, extraData: {}, envVersion: "release", success(e) {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var r = {};r.user_id = n, r.user_name = t, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", r), setRoleInfo({ appId: partner_config.appId, zone_id: e.serverid, zone_name: e.servername, role_id: e.roleid, role_name: e.rolename, role_level: e.rolelevel, vip: "0", party_name: "", left_coin: "", is_role_create: 1 });
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var r = {};r.user_id = n, r.user_name = t, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", r), user_invite_info && this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, e.roleid, e.serverid, user_invite_info.scene), setRoleInfo({ appId: partner_config.appId, zone_id: e.serverid, zone_name: e.servername, role_id: e.roleid, role_name: e.rolename, role_level: e.rolelevel, vip: "0", party_name: "", left_coin: "", is_role_create: 0 });
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var r = {};r.user_id = n, r.user_name = t, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", r), setRoleInfo({ appId: partner_config.appId, zone_id: e.serverid, zone_name: e.servername, role_id: e.roleid, role_name: e.rolename, role_level: e.rolelevel, vip: "0", party_name: "", left_coin: "", is_role_create: 0 });
    }, uuid: function (e, n) {
      var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var r,
          o = [];var a;if (e = e || t.length, n) for (r = 0; r < n; r++) o[r] = t[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", r = 0; r < 36; r++) o[r] || (a = 0 | 16 * Math.random(), o[r] = t[19 == r ? 3 & a | 8 : a]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync("plat_uuid");var n = wx.getStorageSync("plat_idfv");var t = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: t, uuid: e, idfv: n, mac: "0000", is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : "WIFI", os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: "android" == sysInfo.platform ? 1 : 2 };
    }, log: function (e, n) {
      var t = this.getPublicData();for (var r in n) t[r] = n[r];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(t), wx.request({ url: "https://" + HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {}, sendUrl: function () {}, setMessageToFriendQuery: function (e, n) {
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
}function run(e, n, t) {
  e in PARTNER_SDK && PARTNER_SDK[e](n, t);
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
}, exports.logCreateRole = function (e, n, t, r, o) {
  run("logCreateRole", { serverid: e, servername: n, roleid: t, rolename: r, rolelevel: o });
}, exports.logEnterGame = function (e, n, t, r, o) {
  run("logEnterGame", { serverid: e, servername: n, roleid: t, rolename: r, rolelevel: o });
}, exports.logRoleUpLevel = function (e, n, t, r, o) {
  run("logRoleUpLevel", { serverid: e, servername: n, roleid: t, rolename: r, rolelevel: o });
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