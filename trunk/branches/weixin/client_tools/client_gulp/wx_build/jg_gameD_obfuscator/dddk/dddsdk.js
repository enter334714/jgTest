var v = wx.$d;
import SDKyyw from "./dddhelp";var config = { game_id: v[0x73e8], game_pkg: v[0x73e9], partner_id: v[0x73ea], game_ver: v[0x73eb], is_auth: !1 };window.config = config;var partner_config = { app_id: 1000221, app_key: v[0x73ec] };var D$YLZSA = D$YZASL();var HOST = v[0x73ed];var D$YLZAS = null;var D$YZSAL = null;var D$YZSLA = null;var partner_user_info = null;var partner_swtich_info = null;function D$YZASL() {
  var o = {};return { order_data: {}, init: function (e, t) {
      e = e && e.game_ver ? e.game_ver : 0;console.log(v[0x73ee]);var a = this;var n;n = wx.getStorageSync(v[0x73ef]) ? 0 : (n = a.uuid(16, 32), wx.setStorageSync(v[0x73ef], n), 1), wx.getStorageSync(v[0x73f0]) || (r = a.uuid(16, 32), wx.setStorageSync(v[0x73f0], r));var r = wx.getLaunchOptionsSync();var o = r.scene || "";n && r.query && r.query.ad_code && wx.setStorageSync(v[0x73f1], r.query.ad_code), a.log(v[0x11f], { install: n, scene: o }), wx.showShareMenu();a = r.query && r.query.invite ? r.query.invite : "";r = r.query && r.query.invite_type ? r.query.invite_type : "";a && (D$YZSAL = { invite: a, invite_type: r, is_new: n, scene: o }), e && this.checkGameVersion(e, function (e) {
        t && t(e);
      });
    }, login: function (e, t) {
      console.log(v[0x73f2]);var a = this;o.login = v[0x72b4] == typeof t ? t : null, SDKyyw.initLoginCallback = e => {
        if (console.log(v[0x73f3] + JSON.stringify(e)), 0 == e.status) return console.log(v[0x73f4]), void t(1, { errMsg: v[0x73f5] });partner_swtich_info = { showSwitchOn: e.data.showSwitchOn, switchApp: e.data.switchApp, switchContent: e.data.switchContent }, partner_user_info = e.data, a.do_login(partner_user_info);
      }, SDKyyw.init(partner_config.app_id, partner_config.app_key);
    }, do_login: function (e) {
      var a = this;var t = a.getPublicData();if (t.nick_name = e ? e.nick_name : "", t.head_img = e ? e.head_img : "", D$YZSAL && v[0x11a] == typeof D$YZSAL) for (var n in D$YZSAL) t[n] = D$YZSAL[n];t.partner_uid = e.uid, wx.request({ url: v[0x64c7] + HOST + v[0x73f6], method: v[0x73f7], dataType: v[0x170c], header: { "content-type": v[0x7382] }, data: t, success: function (e) {
          if (console.log(v[0x73f8] + JSON.stringify(e)), 200 == e.statusCode) {
            e = e.data;if (e.state) {
              var t = { userid: e.data.user_id, account: e.data.nick_name, token: e.data.token, invite_uid: e.data.invite_uid || "", invite_nickname: e.data.invite_nickname || "", invite_head_img: e.data.invite_head_img || "", head_img: e.data.head_img || "", is_client: e.data.is_client || "0", ios_pay: e.data.ios_pay || "0" };try {
                wx.setStorageSync(v[0x73f9], e.data.sdk_token), wx.setStorageSync(v[0x73fa], e.data.user_id), wx.setStorageSync(v[0x73fb], e.data.username), e.data.ext && wx.setStorageSync(v[0x73fc], e.data.ext);
              } catch (e) {}o.login && o.login(0, t);
            } else o.login && o.login(1, { errMsg: e.msg });a.getShareInfo(v[0x73fd], function (e) {
              console.log(v[0x73fe]), wx.onShareAppMessage(function () {
                return a.logStartShare(v[0x73fd]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: v[0x73ff] });
        } });
    }, share: function (e) {
      o.share = v[0x72b4] == typeof callback ? callback : null;var t = e.type || v[0x73de];console.log(v[0x7400] + t);var a = this;this.getShareInfo(t, function (e) {
        a.logStartShare(t), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, switchEnv: function (e) {
      e(partner_swtich_info);
    }, switchGame: function (t) {
      SDKyyw.cutGameCallback = e => {
        t(e);
      }, 1 == partner_swtich_info.showSwitchOn ? SDKyyw.cutGame() : t({ status: 0, msg: v[0x7401] });
    }, logStartShare: function (e) {
      var t = wx.getStorageSync(v[0x73f9]);wx.request({ url: v[0x64c7] + HOST + v[0x7402], method: v[0x73f7], dataType: v[0x170c], header: { "content-type": v[0x7382] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, server_id: D$YLZAS ? D$YLZAS.server_id : "", role_id: D$YLZAS ? D$YLZAS.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, a) {
      console.log(v[0x7403]);wx.getStorageSync(v[0x73f9]);wx.request({ url: v[0x64c7] + HOST + v[0x7404], method: v[0x73f7], dataType: v[0x170c], header: { "content-type": v[0x7382] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var t;console.log(v[0x7405]), console.log(e), 200 == e.statusCode && (t = e.data).state ? a && a(t.data) : a && a({ develop: 0 });
        } });
    }, getShareInfo: function (e, t) {
      console.log(v[0x7406]);var a = wx.getStorageSync(v[0x73f9]);wx.request({ url: v[0x64c7] + HOST + v[0x7407], method: v[0x73f7], dataType: v[0x170c], header: { "content-type": v[0x7382] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: a, type: e, server_id: D$YLZAS ? D$YLZAS.server_id : "", role_id: D$YLZAS ? D$YLZAS.role_id : "", no_log: 1 }, success: function (e) {
          console.log(v[0x7408]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? t && t(e.data) : o.share && o.share(1, { errMsg: v[0x7409] + e.msg }) : o.share && o.share(1, { errMsg: v[0x740a] });
        } });
    }, updateShare: function (e, t, a, n, r, o) {
      console.log(v[0x740b]);var i = wx.getStorageSync(v[0x73f9]);wx.request({ url: v[0x64c7] + HOST + v[0x740c], method: v[0x73f7], dataType: v[0x170c], header: { "content-type": v[0x7382] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: t, is_new: a, role_id: n, sever_id: r, scene: o }, success: function (e) {
          console.log(v[0x740d]), console.log(e);
        } });
    }, pay: function (e, t) {
      var a = this;wx.checkSession({ success: function () {
          a.startPay(e, t);
        }, fail: function () {
          console.log(v[0x740e]), a.login({}, function () {
            a.startPay(e, t);
          });
        } });
    }, startPay: function (e, t) {
      console.log(v[0x740f]), console.log(e);var a = this;o.pay = v[0x72b4] == typeof t ? t : null;t = wx.getStorageSync(v[0x73f9]);var n = wx.getStorageSync(v[0x73fc]);var r;t || n ? (r = wx.getSystemInfoSync(), e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: n, platform: r.platform }, a.order_data = e, (t = a.getPublicData()).order_data = JSON.stringify(e), wx.request({ url: v[0x64c7] + HOST + v[0x7410], method: v[0x73f7], dataType: v[0x170c], header: { "content-type": v[0x7382] }, data: t, success: function (t) {
          if (console.log(v[0x7411] + JSON.stringify(t)), 200 == t.statusCode) {
            t = t.data;if (t.state) {
              if ("" == t.data.ext) {
                SDKyyw.onPayCallback = e => {};let e = {};e.serverId = t.data.pay_data.serverId, e.serverName = t.data.pay_data.serverName, e.roleId = t.data.pay_data.roleId, e.roleName = t.data.pay_data.roleName, e.roleLevel = t.data.pay_data.roleLevel, e.gameOrderid = t.data.pay_data.orderId, e.pext = t.data.pay_data.orderId, e.money = t.data.pay_data.amount, e.productName = t.data.pay_data.productName, e.productId = t.data.pay_data.productId, console.log(v[0x7412] + JSON.stringify(e)), SDKyyw.pay(e);
              } else a.extDo({ ext1: t.data.ext, ext2: t.data.pay_data });
            } else o.pay && o.pay(1, { errMsg: t.msg });
          } else o.login && o.login(1, { errMsg: v[0x73ff] });
        } })) : o.pay && o.pay(1, { errMsg: v[0x7413] });
    }, extDo: function (e) {
      wx.navigateToMiniProgram({ appId: e.ext1, path: v[0x7414] + e.ext2.orderId + v[0x7415] + e.ext2.amount, extraData: {}, envVersion: v[0x7335], success(e) {} });
    }, logCreateRole: function (e) {
      var t = wx.getStorageSync(v[0x73fa]);var a = wx.getStorageSync(v[0x73fb]);var n = {};n.user_id = t, n.user_name = a, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (D$YLZAS = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x6], n);let r = {};r.type = 2, r.roleId = e.roleid, r.roleName = e.rolename, SDKyyw.pushData(r);
    }, logEnterGame: function (e) {
      var t = wx.getStorageSync(v[0x73fa]);var a = wx.getStorageSync(v[0x73fb]);var n = {};n.user_id = t, n.user_name = a, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (D$YLZAS = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x1696], n), D$YZSAL && this.updateShare(D$YZSAL.invite, D$YZSAL.invite_type, D$YZSAL.is_new, e.roleid, e.serverid, D$YZSAL.scene);let r = {};r.type = 1, r.roleId = e.roleid, r.roleName = e.rolename, SDKyyw.pushData(r);let o = {};o.type = 5, o.roleId = e.roleid, o.roleName = e.rolename, SDKyyw.pushData(o);
    }, logRoleUpLevel: function (e) {
      var t = wx.getStorageSync(v[0x73fa]);var a = wx.getStorageSync(v[0x73fb]);var n = {};n.user_id = t, n.user_name = a, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (D$YLZAS = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x7416], n);
    }, uuid: function (e, t) {
      var a = v[0x7417].split("");var n,
          r = [];var o;if (e = e || a.length, t) for (n = 0; n < t; n++) r[n] = a[0 | Math.random() * e];else for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", n = 0; n < 36; n++) r[n] || (o = 0 | 16 * Math.random(), r[n] = a[19 == n ? 3 & o | 8 : o]);return r.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var t = wx.getStorageSync(v[0x73ef]);var a = wx.getStorageSync(v[0x73f0]);var n = wx.getStorageSync(v[0x73f1]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, is_from_min: 1, ad_code: n, uuid: t, idfv: a, dname: e.model, mac: v[0x7418], net_type: 0 == e.wifiSignal ? "4G" : v[0x7419], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: v[0x7310] == e.platform ? 1 : 2 };
    }, log: function (e, t) {
      var a = this.getPublicData();for (var n in t) a[n] = t[n];console.log(v[0x741a] + e), console.log(a), wx.request({ url: v[0x64c7] + HOST + v[0x741b] + e + v[0x741c] + encodeURIComponent(JSON.stringify(a)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, getLaunchOptionsSync: function (e) {
      var t = SDKyyw.getLaunchOptionsSync();e(t), console.log(v[0x741d] + JSON.stringify(t));
    }, msgCheck: function (e, a) {
      SDKyyw.msgSecCheck(e, function (e) {
        console.log(v[0x741e] + JSON.stringify(e));let t = { data: {} };1 == e.status ? (t.statusCode = 200, t.data.state = 1) : (t.statusCode = 0, t.data.state = 0), a && a(t);
      });
    } };
}function run(e, t, a) {
  e in D$YLZSA && D$YLZSA[e](t, a);
}exports.init = function (e, t) {
  run(v[0x170], e, t);
}, exports.login = function (e) {
  run(v[0x7367], "", e);
}, exports.login = function (e) {
  run(v[0x7367], "", e);
}, exports.pay = function (e, t) {
  run(v[0x741f], e, t);
}, exports.switchEnv = function (e) {
  run(v[0x7420], e);
}, exports.switchGame = function (e) {
  run(v[0x7421], e);
}, exports.openService = function () {
  run(v[0x62a4]);
}, exports.logCreateRole = function (e, t, a, n, r) {
  run(v[0x7422], { serverid: e, servername: t, roleid: a, rolename: n, rolelevel: r });
}, exports.logEnterGame = function (e, t, a, n, r) {
  run(v[0x7423], { serverid: e, servername: t, roleid: a, rolename: n, rolelevel: r });
}, exports.logRoleUpLevel = function (e, t, a, n, r) {
  run(v[0x7424], { serverid: e, servername: t, roleid: a, rolename: n, rolelevel: r });
}, exports.share = function (e) {
  run(v[0x73de], { type: e });
}, exports.downloadClient = function () {
  run(v[0x7425]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getLaunchOptionsSync = function (e) {
  run(v[0x7426], e);
}, exports.msgCheck = function (e, t) {
  run(v[0x2fe6], e, t);
};