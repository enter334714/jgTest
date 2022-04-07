import Sygame from "./fffhelp";window.Sygame = Sygame;var config = { game_id: "256", game_pkg: "tjqy_tjqygjhol_FW", partner_label: "shengye2", partner_id: "398", game_ver: "6.0.40", is_auth: !1, tmpId: { 1: "r9EXyfU6PuWuCRkUp7C9ndzw9ak29C7FoEk3-zjJgsk", 2: "hAW1dt8vCojsgnK5EWpAqO6R_8_tN-BuwRSKWN-1zTs", 3: "XX3rRSCxKDWGYhATlC-jj_QTOd5kCzJBXv0HWCYbsMo" } };window.config = config;var PARTNER_SDK = mainSDK();var HOST = "sdk.sh9130.com";var user_game_info = null;var user_invite_info = null;var partner_user_data = {};var user_invite_by_activity = null;var checkHandler = null;var loginHandler = null;var requestCallback = !1;function mainSDK() {
  var o = {};return { order_data: {}, init: function (e, t) {
      e = e && e.game_ver ? e.game_ver : 0;console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var r = this;var a;a = wx.getStorageSync("plat_uuid") ? 0 : (a = r.uuid(16, 32), wx.setStorageSync("plat_uuid", a), 1), wx.getStorageSync("plat_idfv") || (n = r.uuid(16, 32), wx.setStorageSync("plat_idfv", n));var n = wx.getLaunchOptionsSync();var o = n.scene || "";a && n.query && n.query.ad_code && wx.setStorageSync("plat_ad_code", n.query.ad_code), r.log("start", { install: a, scene: o }), Sygame.init(n);r = n.query && n.query.invite ? n.query.invite : "";var i = n.query && n.query.invite_type ? n.query.invite_type : "";var s = n.query && n.query.cp_activity_id ? n.query.cp_activity_id : "";s || (i = (s = n.query && n.query.shareMessageToFriendScene ? n.query.shareMessageToFriendScene : "") ? "activity" : ""), s && (user_invite_by_activity = { invite: r, invite_type: i, is_new: a, scene: o, cp_activity_id: s }), r && (user_invite_info = { invite: r, invite_type: i, is_new: a, scene: o }), e && this.checkGameVersion(e, function (e) {
        t && t(e);
      });
    }, login: function (e, t) {
      var r = this;console.log("[SDK]\u8c03\u8d77\u767b\u5f55"), o.login = "function" == typeof t ? t : null, Sygame.syLogin().then(e => {
        console.log("[SDK]\u767b\u5f55\u56de\u8c03:", e), 1001 === e.code ? (partner_user_data = e, r.do_login(partner_user_data)) : o.login && o.login(1, { errMsg: e.message });
      });
    }, do_login: function (e) {
      var a = this;var t = a.getPublicData();if (t.partner_user_info = JSON.stringify(e), user_invite_info && "object" == typeof user_invite_info) for (var r in user_invite_info) t[r] = user_invite_info[r];var n = Date.now();wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
          if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a" + JSON.stringify(e)), requestCallback = !0, loginHandler && clearTimeout(loginHandler), loginHandler = null, 200 == e.statusCode) {
            var t = e.data;if (t.state) {
              partner_user_data.openid = t.data.ext;try {
                wx.setStorageSync("plat_sdk_token", t.data.sdk_token), wx.setStorageSync("plat_uid", t.data.user_id), wx.setStorageSync("plat_username", t.data.username), t.data.ext && wx.setStorageSync("plat_session_key", t.data.ext);
              } catch (e) {}var r = { userid: t.data.user_id, account: t.data.nick_name, token: t.data.token, invite_uid: t.data.invite_uid || "", invite_nickname: t.data.invite_nickname || "", invite_head_img: t.data.invite_head_img || "", head_img: t.data.head_img || "", is_client: t.data.is_client || "0", ios_pay: t.data.ios_pay || "0" };o.login && o.login(0, r);
            } else o.login && o.login(1, { type: "wx.request.success", errMsg: t.msg, time: Date.now() - n, res: e });a.getShareInfo("menu", function (e) {
              console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab"), wx.onShareAppMessage(function () {
                return a.logStartShare("menu"), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { type: "wx.request.success", errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01", time: Date.now() - n, res: e });
        }, fail: function (e) {
          console.log("[SDK]\u767b\u5f55\u5931\u8d25"), console.log(e), requestCallback = !0, loginHandler && clearTimeout(loginHandler), loginHandler = null, o.login && o.login(1, { type: "wx.request.fail", errMsg: e.errMsg, time: Date.now() - n, res: e });
        } }), requestCallback || (loginHandler = setTimeout(function () {
        console.log("[SDK]\u767b\u5f55\u8d85\u65f6"), o.login && o.login(1, { type: "wx.request", errMsg: "\u767b\u5f55\u8d85\u65f620\u79d2\u65e0\u8fd4\u56de", time: Date.now() - n }), o.login = null;
      }, 2e4));
    }, share: function (e) {
      o.share = "function" == typeof callback ? callback : null;var t = e.type || "share";var r = e.cp_activity_id || "";console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + t);var a = this;this.getShareInfo(t, function (e) {
        "" != r && "" != e.query && (e.query = e.query + "&cp_activity_id=" + r), a.logStartShare(t), a.logSheyeShare(), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logSheyeShare: function () {
      var t = { openid: partner_user_data.openid, server_id: user_game_info.server_id };wx.request({ url: "https://" + HOST + "/partner/data/report_share/" + config.partner_id + "/" + config.game_pkg, method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
          console.log("[SDK]\u5206\u4eab\u4e0a\u62a5\u6e20\u9053\uff1a" + JSON.stringify(t)), console.log("[SDK]\u5206\u4eab\u4e0a\u62a5\u6e20\u9053\u7ed3\u679c\uff1a" + JSON.stringify(e));
        } });
    }, logStartShare: function (e) {
      var t = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=logStartShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c"), o.check = "function" == typeof t ? t : null;wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var t;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u6210\u529f"), console.log(e), requestCallback = !0, checkHandler && clearTimeout(checkHandler), checkHandler = null, 200 == e.statusCode && (t = e.data).state ? o.check && o.check(t.data) : o.check && o.check({ develop: 0 });
        }, fail: function (e) {
          console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u5931\u8d25"), console.log(e), requestCallback = !0, checkHandler && clearTimeout(checkHandler), checkHandler = null, o.check && o.check({ develop: 0 });
        } }), requestCallback || (checkHandler = setTimeout(function () {
        console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u8d85\u65f6"), o.check && o.check({ develop: 0 }), o.check = null;
      }, 1e4));
    }, getShareInfo: function (e, t) {
      console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570");var r = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=shareConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", no_log: 1 }, success: function (e) {
          console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570\u7ed3\u679c"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? t && t(e.data) : o.share && o.share(1, { errMsg: "\u5206\u4eab\u5931\u8d25\uff1a" + e.msg }) : o.share && o.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u6570\u636e\u5931\u8d25\uff01" });
        } });
    }, updateShare: function (e, t, r, a, n, o) {
      console.log("[SDK]\u5206\u4eab\u8fc7\u6765\u7684\u73a9\u5bb6\u4e0a\u62a5\u7ed9\u670d\u52a1\u5668");var i = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: t, is_new: r, role_id: a, sever_id: n, scene: o }, success: function (e) {
          console.log("[SDK]\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:"), console.log(e);
        } });
    }, msgCheck: function (e, t) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9");let r = { data: {} };Sygame.syMsgSecCheck({ content: e, scene: 2 }).then(e => {
        1001 == e.status ? (r.statusCode = 200, r.data.state = 1, console.log("\u6b63\u786e" + JSON.stringify(e))) : (r.statusCode = 0, r.data.state = 0, console.log("\u4e0d\u6b63\u786e" + JSON.stringify(e))), t && t(r);
      });
    }, pay: function (e, t) {
      this.startPay(e, t);
    }, startPay: function (e, t) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a", e);o.pay = "function" == typeof t ? t : null;t = wx.getStorageSync("plat_sdk_token");var r = wx.getStorageSync("plat_session_key");var a;t || r ? (a = wx.getSystemInfoSync(), e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: r, platform: a.platform }, this.order_data = e, (t = this.getPublicData()).order_data = JSON.stringify(e), wx.request({ url: "https://" + HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
          var t;console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355", e), 200 === e.statusCode ? (e = e.data).state && e.data.pay_data ? (console.log("[SDK]\u8054\u8fd0\u652f\u4ed8\u53c2\u6570" + JSON.stringify(e.data.pay_data)), t = { product_name: e.data.pay_data.productName, product_id: e.data.pay_data.productId, order_id: e.data.pay_data.orderId, product_price: e.data.pay_data.amount, extends_param1: e.data.pay_data.orderId, extends_param2: e.data.pay_data.orderId, role_id: e.data.pay_data.roleId, role_name: e.data.pay_data.roleName, role_level: e.data.pay_data.roleLevel, server_id: e.data.pay_data.serverId, server_name: e.data.pay_data.serverName, role_vip: 0 }, Sygame.syPay(t).then(e => {
            console.log("\u652f\u4ed8\u7ed3\u679c", e);
          })) : o.pay && o.pay(1, { errMsg: e.errMsg }) : o.login && o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } })) : o.pay && o.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, logCreateRole: function (e) {
      var t = wx.getStorageSync("plat_uid");var r = wx.getStorageSync("plat_username");var a = {};var n, o, i;var s;a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", a), user_invite_by_activity && (r = user_invite_by_activity.scene, a = user_invite_by_activity.is_new, n = user_invite_by_activity.invite, o = user_invite_by_activity && user_invite_by_activity.invite_type ? user_invite_by_activity.invite_type : "", i = user_invite_by_activity.cp_activity_id, r = { uid: t, role_id: e.roleid, role_name: e.rolename, server_id: e.serverid, server_name: e.servername, game_id: config.game_id, partner_id: config.partner_id, game_pkg: config.game_pkg, scene: r, is_new: a, invite_code: n, invite_type: o, cp_activity_id: i }, wx.request({ url: "https://" + HOST + "/game/min/?ac=report2Cp", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: r, success: function (e) {
          console.log("[SDK]\u6d3b\u52a8\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:" + JSON.stringify(e));
        } })), this.upRoleInfo("createrole", e), user_invite_info && "object" == typeof user_invite_info && (s = { pf_uid: t, partner_uid: partner_data.openid, role_id: e.roleid, role_name: e.rolename, server_id: e.serverid, server_name: e.servername, invite_code: user_invite_info.invite, user_invite_info: JSON.stringify(user_invite_info), partner_user_info: JSON.stringify(partner_data) }, wx.request({ url: "https://" + HOST + "/partner/data/report_share_info/" + config.partner_id + "/" + config.game_pkg, method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: s, success: function (e) {
          console.log("[SDK]\u5206\u4eab\u4e0a\u62a5\u6e20\u9053\uff1a" + JSON.stringify(s)), console.log("[SDK]\u5206\u4eab\u4e0a\u62a5\u6e20\u9053\u7ed3\u679c\uff1a" + JSON.stringify(e));
        } }));
    }, subscribeMessage: function (t, e) {
      console.log("[SDK]\u8ba2\u9605\u6d88\u606f\uff1a" + t), o.subscribeMessage = "function" == typeof e ? e : null;e = { template: t[0], role_id: user_game_info ? user_game_info.role_id : "", tpl_type: 2 };Sygame.syGetSubscribe(e).then(e => {
        1001 == e.status && (e.errMsg = "requestSubscribeMessage:ok", e[t[0]] = e.type), o.subscribeMessage && o.subscribeMessage(e);
      });
    }, logEnterGame: function (e) {
      var t = wx.getStorageSync("plat_uid");var r = wx.getStorageSync("plat_username");var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", a), this.upRoleInfo("entergame", e), user_invite_info && this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, e.roleid, e.serverid, user_invite_info.scene);
    }, logRoleUpLevel: function (e) {
      var t = wx.getStorageSync("plat_uid");var r = wx.getStorageSync("plat_username");var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", a), this.upRoleInfo("roleupgrade", e);
    }, upRoleInfo: function (e, t) {
      e = { report_type: e, role_id: t.roleid, role_name: t.rolename, role_level: t.rolelevel, server_id: t.serverid, server_name: t.servername, role_power: t.rolepower || 0, role_vip: 0 };Sygame.syReportRoleInfo(e).then(e => {
        console.log("[SDK]\u89d2\u8272\u4e0a\u62a5\u56de\u8c03\uff1a", e);
      });
    }, shareConfig: function (e) {
      e && e({ code: 1, msg: "\u6210\u529f", data: { is_push: !0 } });
    }, shareRecommend: function (n) {
      Sygame.syGetBoxList({ page: 0, count: 15 }).then(e => {
        let t = {};if (1001 == e.data.status) {
          t.code = 1, t.msg = e.data.info;var r = Array();var a = e.data.data;if (t.data = {}, 0 < a.length) {
            for (let e = 0; e < a.length; ++e) r[e] = Object(), r[e].jump_path = a[e].jump_path, r[e].panel = e + 1, r[e].pic = a[e].icon, r[e].to_appid = a[e].jump_appid, r[e].to_game_name = a[e].title, r[e].jump_type = a[e].jump_type, r[e].preview_img = a[e].preview_img, r[e].game_id = a[e].game_id, r[e].tunnel_id = a[e].tunnel_id;t.data = r;
          }
        } else t.code = e.data.status, t.msg = e.data.info, t.data = e.data.data || {};console.log("\u83b7\u53d6\u76d2\u2f26\u5217\u8868:" + JSON.stringify(t)), n && n(t);
      });
    }, openBox: function (t) {
      Sygame.syClickOpenBox().then(e => {
        console.log("\u5c55\u5f00\u76d2\u2f26\u4e8b\u4ef6\u4e0a\u62a5:", e), t && t(e);
      });
    }, clickBoxGame: function (e) {
      e = { game_id: e.game_id, tunnel_id: e.tunnel_id, jump_appid: e.jump_appid, jump_path: e.jump_path };Sygame.syClickBox(e).then(e => {
        console.log("\u70b9\u51fb\u76d2\u2f26\u5185\u6e38\u620f\u4e8b\u4ef6\u4e0a\u62a5:", e);
      });
    }, uuid: function (e, t) {
      var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var a,
          n = [];var o;if (e = e || r.length, t) for (a = 0; a < t; a++) n[a] = r[0 | Math.random() * e];else for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", a = 0; a < 36; a++) n[a] || (o = 0 | 16 * Math.random(), n[a] = r[19 == a ? 3 & o | 8 : o]);return n.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var t = wx.getStorageSync("plat_uuid");var r = wx.getStorageSync("plat_idfv");var a = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: a, is_from_min: 1, uuid: t, idfv: r, dname: e.model, mac: "0000", net_type: 0 == e.wifiSignal ? "4G" : "WIFI", os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: "android" == e.platform ? 1 : 2 };
    }, log: function (e, t) {
      var r = this.getPublicData();for (var a in t) r[a] = t[a];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(r), wx.request({ url: "https://" + HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, setMessageToFriendQuery: function (e, t) {
      e = e.activity_id;e = wx.setMessageToFriendQuery({ shareMessageToFriendScene: e });t && t(e);
    }, getFriendShareInfo: function (t) {
      this.getShareInfo("activity", function (e) {
        t && t({ title: e.title, img: e.img });
      });
    } };
}function run(e, t, r) {
  e in PARTNER_SDK && PARTNER_SDK[e](t, r);
}exports.init = function (e, t) {
  run("init", e, t);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.pay = function (e, t) {
  run("pay", e, t);
}, exports.subscribeMessage = function (e, t) {
  run("subscribeMessage", e, t);
}, exports.openService = function () {
  run("openService");
}, exports.logCreateRole = function (e, t, r, a, n) {
  run("logCreateRole", { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n });
}, exports.logEnterGame = function (e, t, r, a, n, o, i) {
  run("logEnterGame", { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n, rolecreatetime: o, rolepower: i && i.rolepower ? i.rolepower : 0 });
}, exports.logRoleUpLevel = function (e, t, r, a, n, o, i) {
  run("logRoleUpLevel", { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n, rolecreatetime: o, rolepower: i && i.rolepower ? i.rolepower : 0 });
}, exports.share = function (e, t) {
  run("share", { type: e, cp_activity_id: t && t.activity_id ? t.activity_id : "" });
}, exports.msgCheck = function (e, t) {
  run("msgCheck", e, t);
}, exports.shareConfig = function (e) {
  run("shareConfig", e);
}, exports.shareRecommend = function (e) {
  run("shareRecommend", e);
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
}, exports.setMessageToFriendQuery = function (e, t) {
  run("setMessageToFriendQuery", e, t);
}, exports.getFriendShareInfo = function (e) {
  run("getFriendShareInfo", e);
};