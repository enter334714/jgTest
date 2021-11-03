var c = wx.$o;
import Sygame from "./ooop";window.Sygame = Sygame;var config = { game_id: "88", game_pkg: c[238090], partner_label: c[238091], partner_id: c[238092], game_ver: c[238093], is_auth: !1 };window.config = config;var _oQAE8U = _oQE8AU();var HOST = "sdk.sh9130.com";var _oQEU8A = null;var _oQEUA8 = null;var partner_user_data = {};var user_invite_by_activity = null;var checkHandler = null;var loginHandler = null;var requestCallback = !1;function _oQE8AU() {
  var o = {};return { order_data: {}, init: function (e, t) {
      var r = e && e.game_ver ? e.game_ver : 0;console.log(c[238094]);var a = this;var n;n = (i = wx.getStorageSync(c[238095])) ? 0 : (i = a.uuid(16, 32), wx.setStorageSync(c[238095], i), 1), (l = wx.getStorageSync(c[238096])) || (l = a.uuid(16, 32), wx.setStorageSync(c[238096], l));var o = wx.getLaunchOptionsSync();e = o.scene || "";n && o.query && o.query.ad_code && wx.setStorageSync("plat_ad_code", o.query.ad_code), a.log(c[220553], { install: n, scene: e }), Sygame.init(o);var i = o.query && o.query.invite ? o.query.invite : "";var l = o.query && o.query.invite_type ? o.query.invite_type : "";a = o.query && o.query.cp_activity_id ? o.query.cp_activity_id : "";a || (l = (a = o.query && o.query.shareMessageToFriendScene ? o.query.shareMessageToFriendScene : "") ? c[238097] : ""), a && (user_invite_by_activity = { invite: i, invite_type: l, is_new: n, scene: e, cp_activity_id: a }), i && (_oQEUA8 = { invite: i, invite_type: l, is_new: n, scene: e }), r && this.checkGameVersion(r, function (e) {
        t && t(e);
      });
    }, login: function (e, t) {
      var r = this;console.log(c[238098]), o.login = "function" == typeof t ? t : null, Sygame.syLogin().then(e => {
        console.log(c[238099], e), 1001 === e.code ? (partner_user_data = e, r.do_login(partner_user_data)) : o.login && o.login(1, { errMsg: e.message });
      });
    }, do_login: function (e) {
      var a = this;var t = a.getPublicData();if (t.partner_user_info = JSON.stringify(e), _oQEUA8 && "object" == typeof _oQEUA8) for (var r in _oQEUA8) t[r] = _oQEUA8[r];var n = Date.now();wx.request({ url: c[238100] + HOST + c[238101], method: c[220316], dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
          if (console.log(c[238102] + JSON.stringify(e)), requestCallback = !0, loginHandler && clearTimeout(loginHandler), loginHandler = null, 200 == e.statusCode) {
            var t = e.data;if (t.state) {
              partner_user_data.openid = t.data.ext;try {
                wx.setStorageSync("plat_sdk_token", t.data.sdk_token), wx.setStorageSync(c[238103], t.data.user_id), wx.setStorageSync(c[238104], t.data.username), t.data.ext && wx.setStorageSync("plat_session_key", t.data.ext);
              } catch (e) {}var r = { userid: t.data.user_id, account: t.data.nick_name, token: t.data.token, invite_uid: t.data.invite_uid || "", invite_nickname: t.data.invite_nickname || "", invite_head_img: t.data.invite_head_img || "", head_img: t.data.head_img || "", is_client: t.data.is_client || "0", ios_pay: t.data.ios_pay || "0" };o.login && o.login(0, r);
            } else o.login && o.login(1, { type: c[238105], errMsg: t.msg, time: Date.now() - n, res: e });a.getShareInfo(c[238106], function (e) {
              console.log(c[238107]), wx.onShareAppMessage(function () {
                return a.logStartShare(c[238106]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { type: c[238105], errMsg: c[238108], time: Date.now() - n, res: e });
        }, fail: function (e) {
          console.log(c[238109]), console.log(e), requestCallback = !0, loginHandler && clearTimeout(loginHandler), loginHandler = null, o.login && o.login(1, { type: c[238110], errMsg: e.errMsg, time: Date.now() - n, res: e });
        } }), requestCallback || (loginHandler = setTimeout(function () {
        console.log(c[238111]), o.login && o.login(1, { type: c[238112], errMsg: c[238113], time: Date.now() - n }), o.login = null;
      }, 2e4));
    }, share: function (e) {
      o.share = "function" == typeof callback ? callback : null;var t = e.type || c[220362];var r = e.cp_activity_id || "";console.log(c[238114] + t);var a = this;this.getShareInfo(t, function (e) {
        "" != r && "" != e.query && (e.query = e.query + c[238115] + r), a.logStartShare(t), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var t = wx.getStorageSync("plat_sdk_token");wx.request({ url: c[238100] + HOST + "/game/min/?ac=logStartShare", method: c[220316], dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, server_id: _oQEU8A ? _oQEU8A.server_id : "", role_id: _oQEU8A ? _oQEU8A.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log(c[238116]), o.check = "function" == typeof t ? t : null;wx.getStorageSync("plat_sdk_token");wx.request({ url: c[238100] + HOST + "/game/min/?ac=checkGameVersion", method: c[220316], dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var t;console.log(c[238117]), console.log(e), requestCallback = !0, checkHandler && clearTimeout(checkHandler), checkHandler = null, 200 == e.statusCode && (t = e.data).state ? o.check && o.check(t.data) : o.check && o.check({ develop: 0 });
        }, fail: function (e) {
          console.log(c[238118]), console.log(e), requestCallback = !0, checkHandler && clearTimeout(checkHandler), checkHandler = null, o.check && o.check({ develop: 0 });
        } }), requestCallback || (checkHandler = setTimeout(function () {
        console.log(c[238119]), o.check && o.check({ develop: 0 }), o.check = null;
      }, 1e4));
    }, getShareInfo: function (e, t) {
      console.log(c[238120]);var r = wx.getStorageSync("plat_sdk_token");wx.request({ url: c[238100] + HOST + "/game/min/?ac=shareConfig", method: c[220316], dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: _oQEU8A ? _oQEU8A.server_id : "", role_id: _oQEU8A ? _oQEU8A.role_id : "", no_log: 1 }, success: function (e) {
          console.log(c[238121]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? t && t(e.data) : o.share && o.share(1, { errMsg: c[238122] + e.msg }) : o.share && o.share(1, { errMsg: c[238123] });
        } });
    }, updateShare: function (e, t, r, a, n, o) {
      console.log(c[238124]);var i = wx.getStorageSync("plat_sdk_token");wx.request({ url: c[238100] + HOST + c[238125], method: c[220316], dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: t, is_new: r, role_id: a, sever_id: n, scene: o }, success: function (e) {
          console.log(c[238126]), console.log(e);
        } });
    }, msgCheck: function (e, t) {
      console.log(c[238127]);var r = wx.getStorageSync("plat_sdk_token");wx.request({ url: c[238100] + HOST + c[238128] + config.partner_id + "/" + config.game_pkg, method: c[220316], dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, content: e }, success: function (e) {
          console.log(c[238129]), console.log(e), t && t(e);
        } });
    }, pay: function (e, t) {
      this.startPay(e, t);
    }, startPay: function (e, t) {
      console.log(c[238130], e);o.pay = "function" == typeof t ? t : null;var r = wx.getStorageSync("plat_sdk_token");var a = wx.getStorageSync("plat_session_key");r || a ? (t = wx.getSystemInfoSync(), a = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, session_key: a, platform: t.platform }, this.order_data = a, (t = this.getPublicData()).order_data = JSON.stringify(a), wx.request({ url: c[238100] + HOST + "/partner/order", method: c[220316], dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
          var t;console.log(c[238131], e), 200 === e.statusCode ? (t = e.data).state && t.data.pay_data ? (console.log(c[238132] + JSON.stringify(t.data.pay_data)), e = { product_name: t.data.pay_data.productName, product_id: t.data.pay_data.productId, order_id: t.data.pay_data.orderId, product_price: t.data.pay_data.amount, extends_param1: t.data.pay_data.orderId, extends_param2: t.data.pay_data.orderId, role_id: t.data.pay_data.roleId, role_name: t.data.pay_data.roleName, role_level: t.data.pay_data.roleLevel, server_id: t.data.pay_data.serverId, server_name: t.data.pay_data.serverName, role_vip: 0 }, Sygame.syPay(e).then(e => {
            console.log(c[238133], e);
          })) : o.pay && o.pay(1, { errMsg: t.errMsg }) : o.login && o.login(1, { errMsg: c[238108] });
        } })) : o.pay && o.pay(1, { errMsg: c[238134] });
    }, logCreateRole: function (e) {
      var t = wx.getStorageSync(c[238103]);var r = wx.getStorageSync(c[238104]);var a = {};var n, o, i;a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (_oQEU8A = { role_id: e.roleid, server_id: e.serverid }), this.log(c[220081], a), user_invite_by_activity && (n = user_invite_by_activity.scene, o = user_invite_by_activity.is_new, i = user_invite_by_activity.invite, r = user_invite_by_activity && user_invite_by_activity.invite_type ? user_invite_by_activity.invite_type : "", a = user_invite_by_activity.cp_activity_id, a = { uid: t, role_id: e.roleid, role_name: e.rolename, server_id: e.serverid, server_name: e.servername, game_id: config.game_id, partner_id: config.partner_id, game_pkg: config.game_pkg, scene: n, is_new: o, invite_code: i, invite_type: r, cp_activity_id: a }, wx.request({ url: c[238100] + HOST + "/game/min/?ac=report2Cp", method: c[220316], dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: a, success: function (e) {
          console.log(c[238135] + JSON.stringify(e));
        } })), this.upRoleInfo("createrole", e);
    }, logEnterGame: function (e) {
      var t = wx.getStorageSync(c[238103]);var r = wx.getStorageSync(c[238104]);var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (_oQEU8A = { role_id: e.roleid, server_id: e.serverid }), this.log(c[223509], a), this.upRoleInfo(c[238136], e), _oQEUA8 && this.updateShare(_oQEUA8.invite, _oQEUA8.invite_type, _oQEUA8.is_new, e.roleid, e.serverid, _oQEUA8.scene);
    }, logRoleUpLevel: function (e) {
      var t = wx.getStorageSync(c[238103]);var r = wx.getStorageSync(c[238104]);var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (_oQEU8A = { role_id: e.roleid, server_id: e.serverid }), this.log(c[238137], a);
    }, upRoleInfo: function (e, t) {
      t = { report_type: e, role_id: t.roleid, role_name: t.rolename, role_level: t.rolelevel, server_id: t.serverid, server_name: t.servername, role_power: t.rolepower || 0, role_vip: 0 };Sygame.syReportRoleInfo(t).then(e => {
        console.log(c[238138], e);
      });
    }, shareConfig: function (e) {
      e && e({ code: 1, msg: c[236307], data: { is_push: !0 } });
    }, shareRecommend: function (n) {
      Sygame.syGetBoxList({ page: 0, count: 15 }).then(e => {
        let t = {};if (1001 == e.data.status) {
          t.code = 1, t.msg = e.data.info;var r = Array();var a = e.data.data;if (t.data = {}, 0 < a.length) {
            for (let e = 0; e < a.length; ++e) r[e] = Object(), r[e].jump_path = a[e].jump_path, r[e].panel = e + 1, r[e].pic = a[e].icon, r[e].to_appid = a[e].jump_appid, r[e].to_game_name = a[e].title, r[e].jump_type = a[e].jump_type, r[e].preview_img = a[e].preview_img, r[e].game_id = a[e].game_id, r[e].tunnel_id = a[e].tunnel_id;t.data = r;
          }
        } else t.code = e.data.status, t.msg = e.data.info, t.data = e.data.data || {};console.log(c[238139] + JSON.stringify(t)), n && n(t);
      });
    }, openBox: function (t) {
      Sygame.syClickOpenBox().then(e => {
        console.log(c[238140], e), t && t(e);
      });
    }, clickBoxGame: function (e) {
      e = { game_id: e.game_id, tunnel_id: e.tunnel_id, jump_appid: e.jump_appid, jump_path: e.jump_path };Sygame.syClickBox(e).then(e => {
        console.log(c[238141], e);
      });
    }, uuid: function (e, t) {
      var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var a,
          n = [];var o;if (e = e || r.length, t) for (a = 0; a < t; a++) n[a] = r[0 | Math.random() * e];else for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", a = 0; a < 36; a++) n[a] || (o = 0 | 16 * Math.random(), n[a] = r[19 == a ? 3 & o | 8 : o]);return n.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var t = wx.getStorageSync(c[238095]);var r = wx.getStorageSync(c[238096]);var a = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: a, is_from_min: 1, uuid: t, idfv: r, dname: e.model, mac: c[238142], net_type: 0 == e.wifiSignal ? "4G" : c[238143], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: "android" == e.platform ? 1 : 2 };
    }, log: function (e, t) {
      var r = this.getPublicData();for (var a in t) r[a] = t[a];console.log(c[238144] + e), console.log(r), wx.request({ url: c[238100] + HOST + "/partner/h5Log/?type=" + e + c[238145] + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, setMessageToFriendQuery: function (e, t) {
      e = e.activity_id;e = wx.setMessageToFriendQuery({ shareMessageToFriendScene: e });t && t(e);
    }, getFriendShareInfo: function (t) {
      this.getShareInfo(c[238097], function (e) {
        t && t({ title: e.title, img: e.img });
      });
    } };
}function run(e, t, r) {
  e in _oQAE8U && _oQAE8U[e](t, r);
}exports.init = function (e, t) {
  run(c[220225], e, t);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.pay = function (e, t) {
  run(c[220359], e, t);
}, exports.openService = function () {
  run("openService");
}, exports.logCreateRole = function (e, t, r, a, n) {
  run("logCreateRole", { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n });
}, exports.logEnterGame = function (e, t, r, a, n, o, i) {
  run("logEnterGame", { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n, rolecreatetime: o, rolepower: i && i.rolepower ? i.rolepower : 0 });
}, exports.logRoleUpLevel = function (e, t, r, a, n, o, i) {
  run("logRoleUpLevel", { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n, rolecreatetime: o, rolepower: i && i.rolepower ? i.rolepower : 0 });
}, exports.share = function (e, t) {
  run(c[220362], { type: e, cp_activity_id: t && t.activity_id ? t.activity_id : "" });
}, exports.msgCheck = function (e, t) {
  run(c[220305], e, t);
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
  run(c[238146]);
}, exports.setMessageToFriendQuery = function (e, t) {
  run("setMessageToFriendQuery", e, t);
}, exports.getFriendShareInfo = function (e) {
  run("getFriendShareInfo", e);
};