var p = wx.$h;
import sdk from "./ccchelp.js";var config = { game_id: 256, game_pkg: p[68967], partner_label: p[68968], partner_id: p[68969], game_ver: p[68970], is_auth: !1 };window.config = config;var $aBED = $aDEB();var HOST = p[68971];var $aBE = null;var $aEB = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;function $aDEB() {
  var o = {};return { order_data: {}, init: function (e, r) {
      var n = e && e.game_ver ? e.game_ver : 0;console.log(p[68907]);var t = this;var o;o = (a = wx.getStorageSync("plat_uuid")) ? 0 : (a = t.uuid(16, 32), wx.setStorageSync("plat_uuid", a), 1), (e = wx.getStorageSync("plat_idfv")) || (e = t.uuid(16, 32), wx.setStorageSync("plat_idfv", e));var a = wx.getLaunchOptionsSync();e = a.scene || "";o && a.query && a.query.ad_code && wx.setStorageSync("plat_ad_code", a.query.ad_code), t.log(p[68909], { install: o, scene: e });t = a.query && a.query.invite ? a.query.invite : "";a = a.query && a.query.invite_type ? a.query.invite_type : "";t && ($aEB = { invite: t, invite_type: a, is_new: o, scene: e }), sdk.init({ game_ver: n }, function (e) {
        console.log(p[68972], JSON.stringify(e));
      }), n && this.checkGameVersion(n, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log(p[68910]), o.login = "function" == typeof r ? r : null;var n = this;sdk.login(function (e, r) {
        0 == e ? (n.do_login(r), console.log(p[68973] + JSON.stringify(r))) : (console.warn(p[68974]), o.login && o.login(1, { errMsg: p[68975] }));
      });
    }, do_login: function (e) {
      var n = this;var r = n.getPublicData();if (r.user_info = JSON.stringify(e), $aEB && p[60018] == typeof $aEB) for (var t in $aEB) r[t] = $aEB[t];wx.request({ url: "https://" + HOST + "/partner/auth", method: p[68920], dataType: p[68921], header: { "content-type": "application/x-www-form-urlencoded" }, data: r, success: function (e) {
          if (console.log(p[68922] + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync("9130_plat_sdk_token", r.data.sdk_token), wx.setStorageSync("9130_plat_uid", r.data.user_id), wx.setStorageSync("9130_plat_username", r.data.username), r.data.ext && wx.setStorageSync("9130_plat_session_key", r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };o.login && o.login(0, e);
            } else o.login && o.login(1, { errMsg: r.msg });n.getShareInfo("menu", function (e) {
              console.log(p[68976]), wx.onShareAppMessage(function () {
                return n.logStartShare("menu"), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: p[68977] });
        } });
    }, share: function (e) {
      o.share = "function" == typeof callback ? callback : null;var r = e.type || p[68978];console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + r);var n = this;this.getShareInfo(r, function (e) {
        n.logStartShare(r), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var r = wx.getStorageSync("9130_plat_sdk_token");wx.request({ url: "https://" + HOST + p[68979], method: p[68920], dataType: p[68921], header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: $aBE ? $aBE.server_id : "", role_id: $aBE ? $aBE.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(p[68926]);wx.getStorageSync("9130_plat_sdk_token");wx.request({ url: "https://" + HOST + p[68927], method: p[68920], dataType: p[68921], header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(p[68928] + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? n && n(r.data) : n && n({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log(p[68980]);var n = wx.getStorageSync("9130_plat_sdk_token");wx.request({ url: "https://" + HOST + p[68981], method: p[68920], dataType: p[68921], header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, type: e, server_id: $aBE ? $aBE.server_id : "", role_id: $aBE ? $aBE.role_id : "", no_log: 1 }, success: function (e) {
          console.log(p[68982]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : o.share && o.share(1, { errMsg: p[68983] + e.msg }) : o.share && o.share(1, { errMsg: p[68984] });
        } });
    }, updateShare: function (e, r, n, t, o, a) {
      console.log(p[68985]);var i = wx.getStorageSync("9130_plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: p[68920], dataType: p[68921], header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: n, role_id: t, sever_id: o, scene: a }, success: function (e) {
          console.log(p[68986] + JSON.stringify(e));
        } });
    }, msgCheck: function (e, n) {
      console.log(p[68987] + e), sdk.checkMsg(e, function (e) {
        console.log(p[68988] + JSON.stringify(e));let r = { data: {} };0 == e ? (r.statusCode = 200, r.data.state = 1) : (r.statusCode = 0, r.data.state = 0), n && n(r);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log(p[68930] + JSON.stringify(e));o.pay = "function" == typeof r ? r : null;var n = wx.getStorageSync("9130_plat_sdk_token");r = wx.getStorageSync("9130_plat_session_key");n ? (n = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: r, platform: platform }, this.order_data = n, (r = this.getPublicData()).order_data = JSON.stringify(n), wx.request({ url: "https://" + HOST + "/partner/order", method: p[68920], dataType: p[68921], header: { "content-type": "application/x-www-form-urlencoded" }, data: r, success: function (e) {
          console.log(p[68931] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.pay(e.data.pay_data, function (e, r) {
            console.log(p[68989] + JSON.stringify(r));
          }) : o.pay && o.pay(1, { errMsg: e.msg }) : o.login && o.login(1, { errMsg: p[68977] });
        } })) : o.pay && o.pay(1, { errMsg: p[68939] });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync("9130_plat_uid");var n = wx.getStorageSync("9130_plat_username");var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aBE = { role_id: e.roleid, server_id: e.serverid }), this.log(p[60027], t), sdk.logCreateRole({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync("9130_plat_uid");var n = wx.getStorageSync("9130_plat_username");var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aBE = { role_id: e.roleid, server_id: e.serverid }), this.log(p[68954], t), $aEB && this.updateShare($aEB.invite, $aEB.invite_type, $aEB.is_new, e.roleid, e.serverid, $aEB.scene), sdk.logEnterGame({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync("9130_plat_uid");var n = wx.getStorageSync("9130_plat_username");var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aBE = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", t), sdk.logRoleUpLevel({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, uuid: function (e, r) {
      var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var t,
          o = [];var a;if (e = e || n.length, r) for (t = 0; t < r; t++) o[t] = n[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", t = 0; t < 36; t++) o[t] || (a = 0 | 16 * Math.random(), o[t] = n[19 == t ? 3 & a | 8 : a]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync("plat_uuid");var r = wx.getStorageSync("plat_idfv");var n = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: n, uuid: e, idfv: r, mac: p[68955], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : p[68956], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: p[68932] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var n = this.getPublicData();for (var t in r) n[t] = r[t];console.log(p[68957] + e), console.log(n), wx.request({ url: "https://" + HOST + "/partner/h5Log/?type=" + e + p[68958] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {} };
}function run(e, r, n) {
  e in $aBED && $aBED[e](r, n);
}exports.init = function (e, r) {
  run(p[67821], e, r);
}, exports.login = function (e) {
  run(p[68962], "", e);
}, exports.login = function (e) {
  run(p[68962], "", e);
}, exports.pay = function (e, r) {
  run("pay", e, r);
}, exports.openService = function () {
  run("openService");
}, exports.logCreateRole = function (e, r, n, t, o) {
  run(p[68963], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.logEnterGame = function (e, r, n, t, o) {
  run(p[68964], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.logRoleUpLevel = function (e, r, n, t, o) {
  run("logRoleUpLevel", { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.share = function (e) {
  run(p[68978], { type: e });
}, exports.msgCheck = function (e, r) {
  run(p[68990], e, r);
}, exports.downloadClient = function () {
  run(p[68965]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run("getPublicData");
}, exports.weiduanHelper = function () {
  run("weiduanHelper");
};