import Sygame from "../utils/sysdk-wxapp";window.Sygame = Sygame;var config = { game_id: "256", game_pkg: "tjqy_tjqygjhsyxcx_UH", partner_label: "syxyx3", partner_id: "586", game_ver: "67.0.3", is_auth: !1 };window.config = config;var PARTNER_SDK = mainSDK();var HOST = "sdk.sh9130.com";var user_game_info = null;var user_invite_info = null;var partner_data = {};var open_box_uv = "";var click_box_uv = "";function mainSDK() {
  var r = {};return { order_data: {}, init: function (e, t) {
      e = e && e.game_ver ? e.game_ver : 0;console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var o = this;var a;a = wx.getStorageSync("plat_uuid") ? 0 : (a = o.uuid(16, 32), wx.setStorageSync("plat_uuid", a), 1), wx.getStorageSync("plat_idfv") || (n = o.uuid(16, 32), wx.setStorageSync("plat_idfv", n));var n = wx.getLaunchOptionsSync();var r = n.scene || "";a && n.query && n.query.ad_code && wx.setStorageSync("plat_ad_code", n.query.ad_code), o.log("start", { install: a, scene: r }), Sygame.init(n);o = n.query && n.query.invite ? n.query.invite : "";n = n.query && n.query.invite_type ? n.query.invite_type : "";o && (user_invite_info = { invite: o, invite_type: n, is_new: a, scene: r }), e && this.checkGameVersion(e, function (e) {
        t && t(e);
      });
    }, login: function (e, t) {
      var o = this;console.log("[SDK]\u8c03\u8d77\u767b\u5f55"), r.login = "function" == typeof t ? t : null, Sygame.syLogin().then(e => {
        console.log("[SDK]\u767b\u5f55\u56de\u8c03:", e), 1001 === e.code ? o.do_login(e) : r.login && r.login(1, { errMsg: e.message });
      });
    }, do_login: function (e) {
      var o = this;partner_data = { openid: e.openid, uid: e.uid, session_key: e.session_key };var t = o.getPublicData();if (t.is_from_min = 1, t.partner_data = JSON.stringify(partner_data), user_invite_info && "object" == typeof user_invite_info) for (var a in user_invite_info) t[a] = user_invite_info[a];wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
          if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a", e), 200 === e.statusCode) {
            e = e.data;if (e.state) {
              partner_data.openid = e.data.ext;try {
                wx.setStorageSync("plat_sdk_token", e.data.sdk_token), wx.setStorageSync("plat_uid", e.data.user_id), wx.setStorageSync("plat_username", e.data.username), e.data.ext && wx.setStorageSync("plat_session_key", e.data.ext);
              } catch (e) {}var t = { userid: e.data.user_id, account: e.data.nick_name, token: e.data.token, invite_uid: e.data.invite_uid || "", invite_nickname: e.data.invite_nickname || "", invite_head_img: e.data.invite_head_img || "", head_img: e.data.head_img || "", is_client: e.data.is_client || "0", ios_pay: e.data.ios_pay || "0" };r.login && r.login(0, t);
            } else r.login && r.login(1, { errMsg: e.msg });o.getShareInfo("menu", function (e) {
              console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab"), wx.onShareAppMessage(function () {
                return o.logStartShare("menu"), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else r.login && r.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } });
    }, share: function (e) {
      r.share = "function" == typeof callback ? callback : null;var t = e.type || "share";console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + t);console.log("\u8c03\u7528sdk\u5206\u4eab"), this.logStartShare(t);t = { shareQuery: e.shareQuery || "" };Sygame.goShareData(t);
    }, logStartShare: function (e) {
      var t = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=logStartShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, o) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var t;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u7ed3\u679c"), console.log(e), 200 == e.statusCode && (t = e.data).state ? o && o(t.data) : o && o({ develop: 0 });
        } });
    }, getShareInfo: function (e, t) {
      console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570");var o = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=shareConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, type: e, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", no_log: 1 }, success: function (e) {
          console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570\u7ed3\u679c"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? t && t(e.data) : r.share && r.share(1, { errMsg: "\u5206\u4eab\u5931\u8d25\uff1a" + e.msg }) : r.share && r.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u6570\u636e\u5931\u8d25\uff01" });
        } });
    }, updateShare: function (e, t, o, a, n, r) {
      console.log("[SDK]\u5206\u4eab\u8fc7\u6765\u7684\u73a9\u5bb6\u4e0a\u62a5\u7ed9\u670d\u52a1\u5668");var i = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: t, is_new: o, role_id: a, sever_id: n, scene: r }, success: function (e) {
          console.log("[SDK]\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:"), console.log(e);
        } });
    }, msgCheck: function (e, t) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9");let o = { data: {} };Sygame.syMsgSecCheck({ content: e, scene: 1 }).then(e => {
        1001 == e.status ? (o.statusCode = 200, o.data.state = 1, console.log("\u6b63\u786e" + JSON.stringify(e))) : (o.statusCode = 200, o.data.state = 0, console.log("\u4e0d\u6b63\u786e" + JSON.stringify(e))), t && t(o);
      });
    }, pay: function (e, t) {
      this.startPay(e, t);
    }, startPay: function (e, t) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a", e);var o = this;r.pay = "function" == typeof t ? t : null;t = wx.getStorageSync("plat_sdk_token");var a = wx.getStorageSync("plat_session_key");var n;t || a ? (n = wx.getSystemInfoSync(), e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: a, platform: n.platform }, o.order_data = e, (t = o.getPublicData()).order_data = JSON.stringify(e), t.is_from_min = 1, wx.request({ url: "https://" + HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
          console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355"), console.log(e), 200 === e.statusCode ? (e = e.data).state && e.data.pay_data ? "" == e.data.ext ? (console.log("[SDK]\u8054\u8fd0\u652f\u4ed8\u53c2\u6570" + JSON.stringify(e.data.pay_data)), Sygame.syPay(e.data.pay_data).then(e => {
            console.log("[SDK]\u4e0b\u5355\u56de\u8c03\uff1a", e);
          })) : o.extDo({ ext1: e.data.ext, ext2: e.data.pay_data }) : r.pay && r.pay(1, { errMsg: e.errMsg }) : r.login && r.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } })) : r.pay && r.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, extDo: function (e) {
      wx.navigateToMiniProgram({ appId: e.ext1, path: "pages/pay/pay?order_id=" + e.ext2.cp_order_id + "&money=" + e.ext2.amount / 100, extraData: {}, envVersion: "release", success(e) {} });
    }, gamePay: function (e) {
      var o = this;wx.request({ url: "https://" + HOST + "/partner/data/mdsPay/" + config.partner_id + "/" + config.game_pkg, method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, pay_data: JSON.stringify(e), openid: partner_data.openid, session_key: partner_data.session_key }, success: function (t) {
          var e;console.log("[SDK]\u7c73\u5927\u5e08\u67e5\u8be2:", t), t.data.buyQuantity <= t.data.balance ? (console.log("[SDK]\u6e38\u620f\u5e01\u5145\u503c\u76f4\u63a5\u6263\u9664"), wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: "\u60a8\u8fd8\u6709" + t.data.balance + "\u4e2a\u6e38\u620f\u5e01\u672a\u6d88\u8d39\uff0c\u672c\u6b21\u652f\u4ed8\u5c06\u6263\u9664" + t.data.buyQuantity + "\u6e38\u620f\u5e01", showCancel: !1, confirmText: "\u6211\u77e5\u9053\u4e86", success: function () {
              o.gameGoPay(t.data.callbackParams);
            } })) : (console.log("[SDK]\u8c03\u8d77\u7c73\u5927\u5e08\u652f\u4ed8"), e = { mode: "game", env: t.data.env, offerId: t.data.offerId, currencyType: t.data.currencyType, buyQuantity: t.data.buyQuantity, zoneId: t.data.zoneId, platform: "android", success: function (e) {
              "requestMidasPayment:ok" == e.errMsg && o.gameGoPay(t.data.callbackParams);
            }, fail: function (e) {
              console.log("\u7c73\u5927\u5e08\u652f\u4ed8\u5931\u8d25\uff1a", e), -1 !== e.errMsg.indexOf("\u7528\u6237\u53d6\u6d88") ? r.pay && r.pay(2, { errMsg: "\u7528\u6237\u53d6\u6d88\u652f\u4ed8" }) : r.pay && r.pay(1, { errMsg: "\u652f\u4ed8\u5931\u8d25:" + e.errMsg });
            }, complete: function (e) {} }, console.log("\u7c73\u5927\u5e08\u652f\u4ed8\u53c2\u6570\uff1a", e), wx.requestMidasPayment(e));
        } });
    }, gameGoPay: function (e) {
      console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u5b8c\u6bd5\uff0c\u901a\u77e5\u670d\u52a1\u5668\u53d1\u8d27");wx.request({ url: "https://" + HOST + "/partner/pay/" + config.partner_id + "/" + config.game_pkg, method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { orderid: e.orderid, price: e.price, item_id: e.item_id, other: e.other, openid: e.openid, sign: e.sign }, success: function (e) {
          console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u7ed3\u679c:", e), 0 === e.data.state && r.pay && r.pay(1, { errMsg: e.data.msg });
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var t = wx.getStorageSync("plat_uid");var o = wx.getStorageSync("plat_username");var a = {};var n;a.user_id = t, a.user_name = o, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", a), this.upRoleInfo("createrole", e), user_invite_info && "object" == typeof user_invite_info && (n = { pf_uid: t, partner_uid: partner_data.openid, role_id: e.roleid, role_name: e.rolename, server_id: e.serverid, server_name: e.servername, invite_code: user_invite_info.invite, user_invite_info: JSON.stringify(user_invite_info), partner_user_info: JSON.stringify(partner_data) }, wx.request({ url: "https://" + HOST + "/partner/data/report_share_info/" + config.partner_id + "/" + config.game_pkg, method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (e) {
          console.log("[SDK]\u5206\u4eab\u4e0a\u62a5\u6e20\u9053\uff1a" + JSON.stringify(n)), console.log("[SDK]\u5206\u4eab\u4e0a\u62a5\u6e20\u9053\u7ed3\u679c\uff1a" + JSON.stringify(e));
        } }));
    }, logEnterGame: function (e) {
      var t = wx.getStorageSync("plat_uid");var o = wx.getStorageSync("plat_username");var a = {};a.user_id = t, a.user_name = o, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", a), this.upRoleInfo("entergame", e), user_invite_info && this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, e.roleid, e.serverid, user_invite_info.scene);
    }, logRoleUpLevel: function (e) {
      var t = wx.getStorageSync("plat_uid");var o = wx.getStorageSync("plat_username");var a = {};a.user_id = t, a.user_name = o, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", a), this.upRoleInfo("roleupgrade", e);
    }, upRoleInfo: function (e, t) {
      e = { report_type: e, role_id: t.roleid, role_name: t.rolename, role_level: t.rolelevel, server_id: t.serverid, server_name: t.servername, role_power: t.rolepower || 0, role_vip: 0 };Sygame.syReportRoleInfo(e).then(e => {
        console.log("[SDK]\u89d2\u8272\u4e0a\u62a5\u56de\u8c03\uff1a", e);
      });
    }, getBoxList: function (e, o) {
      console.log("[SDK]\u83b7\u53d6\u76d2\u5b50\u5217\u8868");e = { page: e.page || 0, count: e.count || 15 };Sygame.syGetBoxList(e).then(e => {
        let t = { data: {}, state: 0 };1001 == e.status && (t.state = 1, t.data = e.data), o && o(t);
      });
    }, openBox: function (t) {
      console.log("[SDK]\u70b9\u51fb\u5c55\u5f00\u76d2\u5b50\u4e8b\u4ef6\u4e0a\u62a5"), "" === (open_box_uv = wx.getStorageSync("open_box_uv")) && (wx.setStorageSync("open_box_uv", 0), open_box_uv = 1), wx.request({ url: "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=open_box", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { appid: Sygame.appid, wecha_id: partner_data.openid, uv: open_box_uv }, success: function (e) {
          t && t(e.data);
        } });
    }, clickBoxGame: function (o) {
      console.log("[SDK]\u70b9\u51fb\u76d2\u5b50\u5185\u6e38\u620f\u4e8b\u4ef6\u4e0a\u62a5"), "" === (click_box_uv = wx.getStorageSync("click_box_uv")) && (wx.setStorageSync("click_box_uv", 0), click_box_uv = 1), wx.request({ url: "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=click_box", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { appid: Sygame.appid, wecha_id: partner_data.openid, uv: click_box_uv, game_id: o.game_id, tunnel_id: o.tunnel_id, jump_appid: o.jump_appid, jump_path: o.jump_path }, success: function (e) {
          var t = { appId: o.jump_appid, path: o.jump_path, success: function (e) {
              console.log("\u8df3\u8f6c\u6210\u529f", e);
            }, fail: function (e) {
              console.log("\u8df3\u8f6c\u5931\u8d25", e);
            } };wx.navigateToMiniProgram(t);
        } });
    }, subscribeMessage: function (e, t) {
      console.log("[SDK]\u8ba2\u9605\u6d88\u606f\uff1a" + e), r.subscribeMessage = "function" == typeof t ? t : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u8fd4\u56de\uff1a\u6210\u529f"), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        }, fail(e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u8fd4\u56de\uff1a\u5931\u8d25"), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        } });
    }, uuid: function (e, t) {
      var o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var a,
          n = [];var r;if (e = e || o.length, t) for (a = 0; a < t; a++) n[a] = o[0 | Math.random() * e];else for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", a = 0; a < 36; a++) n[a] || (r = 0 | 16 * Math.random(), n[a] = o[19 == a ? 3 & r | 8 : r]);return n.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var t = wx.getStorageSync("plat_uuid");var o = wx.getStorageSync("plat_idfv");var a = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: a, uuid: t, idfv: o, dname: e.model, mac: "0000", net_type: 0 == e.wifiSignal ? "4G" : "WIFI", os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: "android" == e.platform ? 1 : 2 };
    }, log: function (e, t) {
      var o = this.getPublicData();for (var a in t) o[a] = t[a];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(o), wx.request({ url: "https://" + HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(o)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {
      Sygame.syBindMobile();
    } };
}function run(e, t, o) {
  e in PARTNER_SDK && PARTNER_SDK[e](t, o);
}exports.init = function (e, t) {
  run("init", e, t);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.pay = function (e, t) {
  run("pay", e, t);
}, exports.openService = function () {
  run("openService");
}, exports.logCreateRole = function (e, t, o, a, n) {
  run("logCreateRole", { serverid: e, servername: t, roleid: o, rolename: a, rolelevel: n });
}, exports.logEnterGame = function (e, t, o, a, n, r, i) {
  run("logEnterGame", { serverid: e, servername: t, roleid: o, rolename: a, rolelevel: n, rolecreatetime: r, rolepower: (i = i || {}).rolepower });
}, exports.logRoleUpLevel = function (e, t, o, a, n, r, i) {
  run("logRoleUpLevel", { serverid: e, servername: t, roleid: o, rolename: a, rolelevel: n, rolecreatetime: r, rolepower: (i = i || {}).rolepower });
}, exports.share = function (e) {
  run("share", { type: e });
}, exports.msgCheck = function (e, t) {
  run("msgCheck", e, t);
}, exports.getBoxList = function (e, t) {
  run("getBoxList", e, t);
}, exports.openBox = function (e) {
  run("openBox", e);
}, exports.clickBoxGame = function (e) {
  run("clickBoxGame", e);
}, exports.downloadClient = function () {
  run("downloadClient");
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run("getPublicData");
}, exports.weiduanHelper = function () {
  run("weiduanHelper");
}, exports.subscribeMessage = function (e, t) {
  run("subscribeMessage", e, t);
};