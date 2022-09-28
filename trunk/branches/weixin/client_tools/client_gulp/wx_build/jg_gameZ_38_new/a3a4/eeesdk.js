import gameSDK from "../utils/tjqy.bundle";var config = { game_id: 112, game_pkg: "tjqy_tjqytwwxxcxlxzc_VA", partner_label: "twxyx1", partner_id: "592", game_ver: "70.0.1", is_auth: !1 };window.config = config;var PARTNER_SDK = mainSDK();var HOST = "sdk.sh9130.com";var user_game_info = null;var user_invite_info = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var partner_user_info = null;var sdkInitOk = !1;function mainSDK() {
  var o = {};return { order_data: {}, init: function (e, r) {
      e = e && e.game_ver ? e.game_ver : 0;console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var n = this;var t;t = wx.getStorageSync("plat_uuid") ? 0 : (t = n.uuid(16, 32), wx.setStorageSync("plat_uuid", t), 1), wx.getStorageSync("plat_idfv") || (o = n.uuid(16, 32), wx.setStorageSync("plat_idfv", o));var o = wx.getLaunchOptionsSync();var a = o.scene || "";wx.showShareMenu(), t && o.query && o.query.ad_code && wx.setStorageSync("plat_ad_code", o.query.ad_code), n.log("start", { install: t, scene: a });n = o.query && o.query.invite ? o.query.invite : "";o = o.query && o.query.invite_type ? o.query.invite_type : "";n && (user_invite_info = { invite: n, invite_type: o, is_new: t, scene: a }), e && this.checkGameVersion(e, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55"), o.login = "function" == typeof r ? r : null;var n = this;gameSDK.init(() => {
        console.log("\u6e20\u9053sdk \u521d\u59cb\u5316\u6210\u529f"), gameSDK.entryGame(() => {
          console.log("\u6e20\u9053sdk \u8fdb\u5165\u6e38\u620f\u6210\u529f"), gameSDK.loginUserInfo(e => {
            console.log("\u6e20\u9053sdk \u767b\u5f55\u6210\u529f", JSON.stringify(e)), partner_user_info = e, n.do_login(e);
          }, e => {
            console.log("\u6e20\u9053sdk \u767b\u5f55\u5931\u8d25", e);
          });
        }, e => {
          console.log("\u6e20\u9053sdk \u8fdb\u5165\u6e38\u620f\u5931\u8d25", e);
        });
      }, e => {
        console.log("\u6e20\u9053sdk \u521d\u59cb\u5316\u5931\u8d25", e);
      });
    }, do_login: function (n) {
      var t = this;var e = t.getPublicData();if (e.user_info = JSON.stringify(n), user_invite_info && "object" == typeof user_invite_info) for (var r in user_invite_info) e[r] = user_invite_info[r];wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: e, success: function (e) {
          if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a" + JSON.stringify(e)), 200 == e.statusCode) {
            e = e.data;if (e.state) {
              try {
                wx.setStorageSync("plat_sdk_token", e.data.sdk_token), wx.setStorageSync("plat_uid", e.data.user_id), wx.setStorageSync("plat_username", e.data.username), e.data.ext && wx.setStorageSync("plat_session_key", e.data.ext);
              } catch (e) {}var r = { userid: e.data.user_id, account: e.data.nick_name, token: e.data.token, invite_uid: e.data.invite_uid || "", invite_nickname: e.data.invite_nickname || "", invite_head_img: e.data.invite_head_img || "", head_img: e.data.head_img || "", is_client: e.data.is_client || "0", ios_pay: e.data.ios_pay || "0", isBindPhone: n.isBindPhone };o.login && o.login(0, r);
            } else o.login && o.login(1, { errMsg: e.msg });t.getShareInfo("menu", function (e) {
              console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab"), t.logStartShare("menu"), gameSDK.setMenuShare({ title: e.title, imageUrl: e.img, ext: e.query + "&share_ext=" + JSON.stringify(n.share_ext) });
            });
          } else o.login && o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } });
    }, jsontoQuery: function (e) {
      let r = "";for (var n in e) r += n + "=" + e[n] + "&";return r.substring(0, r.length - 1);
    }, share: function (e) {
      o.share = "function" == typeof callback ? callback : null;var r = e.type || "share";console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + r);var n = this;this.getShareInfo(r, function (e) {
        n.logStartShare(r), gameSDK.shareAppMessage({ title: e.title, imageUrl: e.img, ext: e.query + "&share_ext=" + JSON.stringify(partner_user_info.share_ext) });
      });
    }, logStartShare: function (e) {
      var r = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=logStartShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      gameSDK.connectCustomer(() => {}, e => {});
    }, checkGameVersion: function (e, n) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u7ed3\u679c" + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? n && n(r.data) : n && n({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570");var n = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=shareConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, type: e, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", no_log: 1 }, success: function (e) {
          console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570\u7ed3\u679c"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : o.share && o.share(1, { errMsg: "\u5206\u4eab\u5931\u8d25\uff1a" + e.msg }) : o.share && o.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u6570\u636e\u5931\u8d25\uff01" });
        } });
    }, updateShare: function (e, r, n, t, o, a) {
      console.log("[SDK]\u5206\u4eab\u8fc7\u6765\u7684\u73a9\u5bb6\u4e0a\u62a5\u7ed9\u670d\u52a1\u5668");var i = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: n, role_id: t, sever_id: o, scene: a }, success: function (e) {
          console.log("[SDK]\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:" + JSON.stringify(e));
        } });
    }, msgCheck: function (e, r) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9" + e);let n = { data: {} };gameSDK.msgCheck(e).then(e => {
        console.log("msgCheck success", e), n.statusCode = 200, n.data.state = 1, r && r(n);
      }).catch(e => {
        console.log("msgCheck error", e), n.statusCode = 200, n.data.state = 0, r && r(n);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a" + JSON.stringify(e));var n = this;o.pay = "function" == typeof r ? r : null;r = wx.getStorageSync("plat_sdk_token");var t = wx.getStorageSync("plat_session_key");r ? (e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, session_key: t, platform: platform, partner_openid: partner_user_info.uid }, n.order_data = e, (r = n.getPublicData()).order_data = JSON.stringify(e), wx.request({ url: "https://" + HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: r, success: function (e) {
          console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355" + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? "" == e.data.ext ? gameSDK.makePayment(e.data.pay_data).then(e => {
            console.log("\u652f\u4ed8\u6210\u529f\uff1a", e);
          }).catch(e => {
            console.log("\u652f\u4ed8\u5931\u8d25\uff1a", e), o.pay && o.pay(1, { errMsg: "\u53d1\u8d77\u652f\u4ed8\u5931\u8d25" });
          }) : n.extDo({ ext1: e.data.ext, ext2: e.data.pay_data }) : o.pay && o.pay(1, { errMsg: e.msg }) : o.login && o.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } })) : o.pay && o.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, extDo: function (e) {
      wx.navigateToMiniProgram({ appId: e.ext1, path: "pages/pay/pay?order_id=" + e.ext2.orderId + "&money=" + e.ext2.amount, extraData: {}, envVersion: "release", success(e) {} });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync("plat_uid");var n = wx.getStorageSync("plat_username");var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", t);r = { data_type: 2, server_id: e.serverid, server_name: e.servername, role_id: e.roleid, role_name: e.rolename, role_level: e.rolelevel, role_currency: 0 };gameSDK.dataReport(r);
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync("plat_uid");var n = wx.getStorageSync("plat_username");var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", t), user_invite_info && this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, e.roleid, e.serverid, user_invite_info.scene);gameSDK.checkIosPay(e.rolelevel);r = { data_type: 3, server_id: e.serverid, server_name: e.servername, role_id: e.roleid, role_name: e.rolename, role_level: e.rolelevel, role_currency: 0 };gameSDK.dataReport(r);
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync("plat_uid");var n = wx.getStorageSync("plat_username");var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", t);r = { data_type: 4, server_id: e.serverid, server_name: e.servername, role_id: e.roleid, role_name: e.rolename, role_level: e.rolelevel, role_currency: 0 };gameSDK.dataReport(r);
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
    }, weiduanHelper: function () {}, sendUrl: function () {}, setMessageToFriendQuery: function (e, r) {
      e = e.activity_id;r(wx.setMessageToFriendQuery({ shareMessageToFriendScene: e }));
    }, setLoadingCmp: function () {}, sendCode: function (e, r) {}, bindPhone: function (e, r) {}, subscribeMessage: function (e, r) {
      console.log("[SDK]\u8ba2\u9605\u6d88\u606f\uff1a" + e), o.subscribeMessage = "function" == typeof r ? r : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u8fd4\u56de\uff1a\u6210\u529f"), console.log(e), o.subscribeMessage && o.subscribeMessage(e);
        }, fail(e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u8fd4\u56de\uff1a\u5931\u8d25"), console.log(e), o.subscribeMessage && o.subscribeMessage(e);
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