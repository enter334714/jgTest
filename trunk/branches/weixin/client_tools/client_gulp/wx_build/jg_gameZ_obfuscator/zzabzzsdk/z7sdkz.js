var B = wx.$z;
import SDKyyw from "./zzsshz";var config = { game_id: B[441730], game_pkg: B[441731], partner_id: B[441732], game_ver: B[441733], is_auth: !1, from: null, tmpId: {} };window.config = config;var partner_config = { app_id: 1000220, app_key: B[441734] };var z0RJD0Y = z0RDY0J();var HOST = B[441735];var z0RJDY0 = null;var z0RD0YJ = null;var z0RD0JY = null;var partner_user_info = null;var partner_swtich_info = null;function z0RDY0J() {
  var o = {};return { order_data: {}, init: function (e, t) {
      e = e && e.game_ver ? e.game_ver : 0;console.log(B[441736]);var a = this;var n;n = wx.getStorageSync(B[441737]) ? 0 : (n = a.uuid(16, 32), wx.setStorageSync(B[441737], n), 1), wx.getStorageSync(B[441738]) || (r = a.uuid(16, 32), wx.setStorageSync(B[441738], r));var r = wx.getLaunchOptionsSync();var o = r.scene || "";n && r.query && r.query.ad_code && wx.setStorageSync(B[441739], r.query.ad_code), a.log(B[441740], { install: n, scene: o }), wx.showShareMenu();a = r.query && r.query.invite ? r.query.invite : "";r = r.query && r.query.invite_type ? r.query.invite_type : "";a && (z0RD0YJ = { invite: a, invite_type: r, is_new: n, scene: o }), e && this.checkGameVersion(e, function (e) {
        t && t(e);
      });
    }, login: function (e, t) {
      console.log(B[441741]);var a = this;o.login = B[440956] == typeof t ? t : null, SDKyyw.initLoginCallback = e => {
        if (console.log(B[441742] + JSON.stringify(e)), 0 == e.status) return console.log(B[441743]), void t(1, { errMsg: B[441744] });partner_swtich_info = { showSwitchOn: e.data.showSwitchOn, switchApp: e.data.switchApp, switchContent: e.data.switchContent }, partner_user_info = e.data, a.do_login(partner_user_info);
      }, SDKyyw.init(partner_config.app_id, partner_config.app_key);
    }, do_login: function (e) {
      var a = this;var t = a.getPublicData();if (t.nick_name = e ? e.nick_name : "", t.head_img = e ? e.head_img : "", z0RD0YJ && B[440855] == typeof z0RD0YJ) for (var n in z0RD0YJ) t[n] = z0RD0YJ[n];t.partner_uid = e.uid, wx.request({ url: B[441745] + HOST + B[441746], method: B[440100], dataType: B[441200], header: { "content-type": B[440270] }, data: t, success: function (e) {
          if (console.log(B[441747] + JSON.stringify(e)), 200 == e.statusCode) {
            e = e.data;if (e.state) {
              var t = { userid: e.data.user_id, account: e.data.nick_name, token: e.data.token, invite_uid: e.data.invite_uid || "", invite_nickname: e.data.invite_nickname || "", invite_head_img: e.data.invite_head_img || "", head_img: e.data.head_img || "", is_client: e.data.is_client || "0", ios_pay: e.data.ios_pay || "0" };try {
                wx.setStorageSync(B[441748], e.data.sdk_token), wx.setStorageSync(B[441749], e.data.user_id), wx.setStorageSync(B[441750], e.data.username), e.data.ext && wx.setStorageSync(B[441751], e.data.ext);
              } catch (e) {}o.login && o.login(0, t);
            } else o.login && o.login(1, { errMsg: e.msg });a.getShareInfo(B[441752], function (e) {
              console.log(B[441753]), wx.onShareAppMessage(function () {
                return a.logStartShare(B[441752]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: B[441754] });
        } });
    }, share: function (e) {
      o.share = B[440956] == typeof callback ? callback : null;var t = e.type || B[440222];console.log(B[441755] + t);var a = this;this.getShareInfo(t, function (e) {
        a.logStartShare(t), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, switchEnv: function (e) {
      e(partner_swtich_info);
    }, switchGame: function (t) {
      SDKyyw.cutGameCallback = e => {
        t(e);
      }, 1 == partner_swtich_info.showSwitchOn ? SDKyyw.cutGame() : t({ status: 0, msg: B[441756] });
    }, logStartShare: function (e) {
      var t = wx.getStorageSync(B[441748]);wx.request({ url: B[441745] + HOST + B[441757], method: B[440100], dataType: B[441200], header: { "content-type": B[440270] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, server_id: z0RJDY0 ? z0RJDY0.server_id : "", role_id: z0RJDY0 ? z0RJDY0.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, a) {
      console.log(B[441758]);wx.getStorageSync(B[441748]);wx.request({ url: B[441745] + HOST + B[441759], method: B[440100], dataType: B[441200], header: { "content-type": B[440270] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var t;console.log(B[441760]), console.log(e), 200 == e.statusCode && (t = e.data).state ? a && a(t.data) : a && a({ develop: 0 });
        } });
    }, getShareInfo: function (e, t) {
      console.log(B[441761]);var a = wx.getStorageSync(B[441748]);wx.request({ url: B[441745] + HOST + B[441762], method: B[440100], dataType: B[441200], header: { "content-type": B[440270] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: a, type: e, server_id: z0RJDY0 ? z0RJDY0.server_id : "", role_id: z0RJDY0 ? z0RJDY0.role_id : "", no_log: 1 }, success: function (e) {
          console.log(B[441763]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? t && t(e.data) : o.share && o.share(1, { errMsg: B[441764] + e.msg }) : o.share && o.share(1, { errMsg: B[441765] });
        } });
    }, updateShare: function (e, t, a, n, r, o) {
      console.log(B[441766]);var i = wx.getStorageSync(B[441748]);wx.request({ url: B[441745] + HOST + B[441767], method: B[440100], dataType: B[441200], header: { "content-type": B[440270] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: t, is_new: a, role_id: n, sever_id: r, scene: o }, success: function (e) {
          console.log(B[441768]), console.log(e);
        } });
    }, pay: function (e, t) {
      var a = this;wx.checkSession({ success: function () {
          a.startPay(e, t);
        }, fail: function () {
          console.log(B[441769]), a.login({}, function () {
            a.startPay(e, t);
          });
        } });
    }, startPay: function (e, t) {
      console.log(B[441770]), console.log(e);var a = this;o.pay = B[440956] == typeof t ? t : null;t = wx.getStorageSync(B[441748]);var n = wx.getStorageSync(B[441751]);var r;t || n ? (r = wx.getSystemInfoSync(), e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: n, platform: r.platform }, a.order_data = e, (t = a.getPublicData()).order_data = JSON.stringify(e), wx.request({ url: B[441745] + HOST + B[441771], method: B[440100], dataType: B[441200], header: { "content-type": B[440270] }, data: t, success: function (t) {
          if (console.log(B[441772] + JSON.stringify(t)), 200 == t.statusCode) {
            t = t.data;if (t.state) {
              if ("" == t.data.ext) {
                SDKyyw.onPayCallback = e => {};let e = {};e.serverId = t.data.pay_data.serverId, e.serverName = t.data.pay_data.serverName, e.roleId = t.data.pay_data.roleId, e.roleName = t.data.pay_data.roleName, e.roleLevel = t.data.pay_data.roleLevel, e.gameOrderid = t.data.pay_data.orderId, e.pext = t.data.pay_data.orderId, e.money = t.data.pay_data.amount, e.productName = t.data.pay_data.productName, e.productId = t.data.pay_data.productId, console.log(B[441773] + JSON.stringify(e)), SDKyyw.pay(e);
              } else a.extDo({ ext1: t.data.ext, ext2: t.data.pay_data });
            } else o.pay && o.pay(1, { errMsg: t.msg });
          } else o.login && o.login(1, { errMsg: B[441754] });
        } })) : o.pay && o.pay(1, { errMsg: B[441774] });
    }, extDo: function (e) {
      wx.navigateToMiniProgram({ appId: e.ext1, path: B[441775] + e.ext2.orderId + B[441776] + e.ext2.amount, extraData: {}, envVersion: B[441777], success(e) {} });
    }, logCreateRole: function (e) {
      var t = wx.getStorageSync(B[441749]);var a = wx.getStorageSync(B[441750]);var n = {};n.user_id = t, n.user_name = a, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (z0RJDY0 = { role_id: e.roleid, server_id: e.serverid }), this.log(B[440455], n);let r = {};r.type = 2, r.roleId = e.roleid, r.roleName = e.rolename, SDKyyw.pushData(r);
    }, logEnterGame: function (e) {
      var t = wx.getStorageSync(B[441749]);var a = wx.getStorageSync(B[441750]);var n = {};n.user_id = t, n.user_name = a, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (z0RJDY0 = { role_id: e.roleid, server_id: e.serverid }), this.log(B[441778], n), z0RD0YJ && this.updateShare(z0RD0YJ.invite, z0RD0YJ.invite_type, z0RD0YJ.is_new, e.roleid, e.serverid, z0RD0YJ.scene);let r = {};r.type = 1, r.roleId = e.roleid, r.roleName = e.rolename, SDKyyw.pushData(r);let o = {};o.type = 5, o.roleId = e.roleid, o.roleName = e.rolename, SDKyyw.pushData(o);
    }, logRoleUpLevel: function (e) {
      var t = wx.getStorageSync(B[441749]);var a = wx.getStorageSync(B[441750]);var n = {};n.user_id = t, n.user_name = a, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (z0RJDY0 = { role_id: e.roleid, server_id: e.serverid }), this.log(B[441779], n);
    }, uuid: function (e, t) {
      var a = B[441780].split("");var n,
          r = [];var o;if (e = e || a.length, t) for (n = 0; n < t; n++) r[n] = a[0 | Math.random() * e];else for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", n = 0; n < 36; n++) r[n] || (o = 0 | 16 * Math.random(), r[n] = a[19 == n ? 3 & o | 8 : o]);return r.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var t = wx.getStorageSync(B[441737]);var a = wx.getStorageSync(B[441738]);var n = wx.getStorageSync(B[441739]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, is_from_min: 1, ad_code: n, uuid: t, idfv: a, dname: e.model, mac: B[441781], net_type: 0 == e.wifiSignal ? "4G" : B[441782], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: B[440423] == e.platform ? 1 : 2 };
    }, log: function (e, t) {
      var a = this.getPublicData();for (var n in t) a[n] = t[n];console.log(B[441783] + e), console.log(a), wx.request({ url: B[441745] + HOST + B[441784] + e + B[441785] + encodeURIComponent(JSON.stringify(a)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, getLaunchOptionsSync: function (e) {
      var t = SDKyyw.getLaunchOptionsSync();e(t), console.log(B[441786] + JSON.stringify(t));
    }, msgCheck: function (e, a) {
      SDKyyw.msgSecCheck(e, function (e) {
        console.log(B[441787] + JSON.stringify(e));let t = { data: {} };1 == e.status ? (t.statusCode = 200, t.data.state = 1) : (t.statusCode = 0, t.data.state = 0), a && a(t);
      });
    } };
}function run(e, t, a) {
  e in z0RJD0Y && z0RJD0Y[e](t, a);
}exports.init = function (e, t) {
  run(B[440112], e, t);
}, exports.login = function (e) {
  run(B[440134], "", e);
}, exports.login = function (e) {
  run(B[440134], "", e);
}, exports.pay = function (e, t) {
  run(B[440209], e, t);
}, exports.switchEnv = function (e) {
  run(B[440175], e);
}, exports.switchGame = function (e) {
  run(B[440188], e);
}, exports.openService = function () {
  run(B[440223]);
}, exports.logCreateRole = function (e, t, a, n, r) {
  run(B[440217], { serverid: e, servername: t, roleid: a, rolename: n, rolelevel: r });
}, exports.logEnterGame = function (e, t, a, n, r) {
  run(B[440219], { serverid: e, servername: t, roleid: a, rolename: n, rolelevel: r });
}, exports.logRoleUpLevel = function (e, t, a, n, r) {
  run(B[440221], { serverid: e, servername: t, roleid: a, rolename: n, rolelevel: r });
}, exports.share = function (e) {
  run(B[440222], { type: e });
}, exports.downloadClient = function () {
  run(B[441788]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getLaunchOptionsSync = function (e) {
  run(B[440322], e);
}, exports.msgCheck = function (e, t) {
  run(B[440067], e, t);
};