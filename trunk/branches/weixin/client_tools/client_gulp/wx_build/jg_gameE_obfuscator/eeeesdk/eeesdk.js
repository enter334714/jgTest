var b = wx.$e;
import SDKyyw from "./eeehelp";var config = { game_id: b[69142], game_pkg: b[69143], partner_id: b[69144], game_ver: b[69145], is_auth: !1, from: null, tmpId: {} };window.config = config;var partner_config = { app_id: 1000207, app_key: b[69146] };var e1IU01G = e1I0G1U();var HOST = b[69147];var e1IU0G1 = null;var e1I01GU = null;var e1I01UG = null;var partner_user_info = null;var partner_swtich_info = null;function e1I0G1U() {
  var o = {};return { order_data: {}, init: function (e, t) {
      e = e && e.game_ver ? e.game_ver : 0;console.log(b[69148]);var a = this;var n;n = wx.getStorageSync(b[69149]) ? 0 : (n = a.uuid(16, 32), wx.setStorageSync(b[69149], n), 1), wx.getStorageSync(b[69150]) || (r = a.uuid(16, 32), wx.setStorageSync(b[69150], r));var r = wx.getLaunchOptionsSync();var o = r.scene || "";n && r.query && r.query.ad_code && wx.setStorageSync(b[69151], r.query.ad_code), a.log(b[40287], { install: n, scene: o }), wx.showShareMenu();a = r.query && r.query.invite ? r.query.invite : "";r = r.query && r.query.invite_type ? r.query.invite_type : "";a && (e1I01GU = { invite: a, invite_type: r, is_new: n, scene: o }), e && this.checkGameVersion(e, function (e) {
        t && t(e);
      });
    }, login: function (e, t) {
      console.log(b[69152]);var a = this;o.login = b[68935] == typeof t ? t : null, SDKyyw.initLoginCallback = e => {
        if (console.log(b[69153] + JSON.stringify(e)), 0 == e.status) return console.log(b[69154]), void t(1, { errMsg: b[69155] });partner_swtich_info = { showSwitchOn: e.data.showSwitchOn, switchApp: e.data.switchApp, switchContent: e.data.switchContent }, partner_user_info = e.data, a.do_login(partner_user_info);
      }, SDKyyw.init(partner_config.app_id, partner_config.app_key);
    }, do_login: function (e) {
      var a = this;var t = a.getPublicData();if (t.nick_name = e ? e.nick_name : "", t.head_img = e ? e.head_img : "", e1I01GU && b[40282] == typeof e1I01GU) for (var n in e1I01GU) t[n] = e1I01GU[n];t.partner_uid = e.uid, wx.request({ url: b[65677] + HOST + b[69156], method: b[69157], dataType: b[45861], header: { "content-type": b[69040] }, data: t, success: function (e) {
          if (console.log(b[69158] + JSON.stringify(e)), 200 == e.statusCode) {
            e = e.data;if (e.state) {
              var t = { userid: e.data.user_id, account: e.data.nick_name, token: e.data.token, invite_uid: e.data.invite_uid || "", invite_nickname: e.data.invite_nickname || "", invite_head_img: e.data.invite_head_img || "", head_img: e.data.head_img || "", is_client: e.data.is_client || "0", ios_pay: e.data.ios_pay || "0" };try {
                wx.setStorageSync(b[69159], e.data.sdk_token), wx.setStorageSync(b[69160], e.data.user_id), wx.setStorageSync(b[69161], e.data.username), e.data.ext && wx.setStorageSync(b[69162], e.data.ext);
              } catch (e) {}o.login && o.login(0, t);
            } else o.login && o.login(1, { errMsg: e.msg });a.getShareInfo(b[69163], function (e) {
              console.log(b[69164]), wx.onShareAppMessage(function () {
                return a.logStartShare(b[69163]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: b[69165] });
        } });
    }, share: function (e) {
      o.share = b[68935] == typeof callback ? callback : null;var t = e.type || b[69132];console.log(b[69166] + t);var a = this;this.getShareInfo(t, function (e) {
        a.logStartShare(t), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, switchEnv: function (e) {
      e(partner_swtich_info);
    }, switchGame: function (t) {
      SDKyyw.cutGameCallback = e => {
        t(e);
      }, 1 == partner_swtich_info.showSwitchOn ? SDKyyw.cutGame() : t({ status: 0, msg: b[69167] });
    }, logStartShare: function (e) {
      var t = wx.getStorageSync(b[69159]);wx.request({ url: b[65677] + HOST + b[69168], method: b[69157], dataType: b[45861], header: { "content-type": b[69040] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, server_id: e1IU0G1 ? e1IU0G1.server_id : "", role_id: e1IU0G1 ? e1IU0G1.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, a) {
      console.log(b[69169]);wx.getStorageSync(b[69159]);wx.request({ url: b[65677] + HOST + b[69170], method: b[69157], dataType: b[45861], header: { "content-type": b[69040] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var t;console.log(b[69171]), console.log(e), 200 == e.statusCode && (t = e.data).state ? a && a(t.data) : a && a({ develop: 0 });
        } });
    }, getShareInfo: function (e, t) {
      console.log(b[69172]);var a = wx.getStorageSync(b[69159]);wx.request({ url: b[65677] + HOST + b[69173], method: b[69157], dataType: b[45861], header: { "content-type": b[69040] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: a, type: e, server_id: e1IU0G1 ? e1IU0G1.server_id : "", role_id: e1IU0G1 ? e1IU0G1.role_id : "", no_log: 1 }, success: function (e) {
          console.log(b[69174]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? t && t(e.data) : o.share && o.share(1, { errMsg: b[69175] + e.msg }) : o.share && o.share(1, { errMsg: b[69176] });
        } });
    }, updateShare: function (e, t, a, n, r, o) {
      console.log(b[69177]);var i = wx.getStorageSync(b[69159]);wx.request({ url: b[65677] + HOST + b[69178], method: b[69157], dataType: b[45861], header: { "content-type": b[69040] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: t, is_new: a, role_id: n, sever_id: r, scene: o }, success: function (e) {
          console.log(b[69179]), console.log(e);
        } });
    }, pay: function (e, t) {
      var a = this;wx.checkSession({ success: function () {
          a.startPay(e, t);
        }, fail: function () {
          console.log(b[69180]), a.login({}, function () {
            a.startPay(e, t);
          });
        } });
    }, startPay: function (e, t) {
      console.log(b[69181]), console.log(e);var a = this;o.pay = b[68935] == typeof t ? t : null;t = wx.getStorageSync(b[69159]);var n = wx.getStorageSync(b[69162]);var r;t || n ? (r = wx.getSystemInfoSync(), e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: n, platform: r.platform }, a.order_data = e, (t = a.getPublicData()).order_data = JSON.stringify(e), wx.request({ url: b[65677] + HOST + b[69182], method: b[69157], dataType: b[45861], header: { "content-type": b[69040] }, data: t, success: function (t) {
          if (console.log(b[69183] + JSON.stringify(t)), 200 == t.statusCode) {
            t = t.data;if (t.state) {
              if ("" == t.data.ext) {
                SDKyyw.onPayCallback = e => {};let e = {};e.serverId = t.data.pay_data.serverId, e.serverName = t.data.pay_data.serverName, e.roleId = t.data.pay_data.roleId, e.roleName = t.data.pay_data.roleName, e.roleLevel = t.data.pay_data.roleLevel, e.gameOrderid = t.data.pay_data.orderId, e.pext = t.data.pay_data.orderId, e.money = t.data.pay_data.amount, e.productName = t.data.pay_data.productName, e.productId = t.data.pay_data.productId, console.log(b[69184] + JSON.stringify(e)), SDKyyw.pay(e);
              } else a.extDo({ ext1: t.data.ext, ext2: t.data.pay_data });
            } else o.pay && o.pay(1, { errMsg: t.msg });
          } else o.login && o.login(1, { errMsg: b[69165] });
        } })) : o.pay && o.pay(1, { errMsg: b[69185] });
    }, extDo: function (e) {
      wx.navigateToMiniProgram({ appId: e.ext1, path: b[69186] + e.ext2.orderId + b[69187] + e.ext2.amount, extraData: {}, envVersion: b[68963], success(e) {} });
    }, logCreateRole: function (e) {
      var t = wx.getStorageSync(b[69160]);var a = wx.getStorageSync(b[69161]);var n = {};n.user_id = t, n.user_name = a, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (e1IU0G1 = { role_id: e.roleid, server_id: e.serverid }), this.log(b[40006], n);let r = {};r.type = 2, r.roleId = e.roleid, r.roleName = e.rolename, SDKyyw.pushData(r);
    }, logEnterGame: function (e) {
      var t = wx.getStorageSync(b[69160]);var a = wx.getStorageSync(b[69161]);var n = {};n.user_id = t, n.user_name = a, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (e1IU0G1 = { role_id: e.roleid, server_id: e.serverid }), this.log(b[45743], n), e1I01GU && this.updateShare(e1I01GU.invite, e1I01GU.invite_type, e1I01GU.is_new, e.roleid, e.serverid, e1I01GU.scene);let r = {};r.type = 1, r.roleId = e.roleid, r.roleName = e.rolename, SDKyyw.pushData(r);let o = {};o.type = 5, o.roleId = e.roleid, o.roleName = e.rolename, SDKyyw.pushData(o);
    }, logRoleUpLevel: function (e) {
      var t = wx.getStorageSync(b[69160]);var a = wx.getStorageSync(b[69161]);var n = {};n.user_id = t, n.user_name = a, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (e1IU0G1 = { role_id: e.roleid, server_id: e.serverid }), this.log(b[69188], n);
    }, uuid: function (e, t) {
      var a = b[69189].split("");var n,
          r = [];var o;if (e = e || a.length, t) for (n = 0; n < t; n++) r[n] = a[0 | Math.random() * e];else for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", n = 0; n < 36; n++) r[n] || (o = 0 | 16 * Math.random(), r[n] = a[19 == n ? 3 & o | 8 : o]);return r.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var t = wx.getStorageSync(b[69149]);var a = wx.getStorageSync(b[69150]);var n = wx.getStorageSync(b[69151]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, is_from_min: 1, ad_code: n, uuid: t, idfv: a, dname: e.model, mac: b[69190], net_type: 0 == e.wifiSignal ? "4G" : b[69191], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: b[68925] == e.platform ? 1 : 2 };
    }, log: function (e, t) {
      var a = this.getPublicData();for (var n in t) a[n] = t[n];console.log(b[69192] + e), console.log(a), wx.request({ url: b[65677] + HOST + b[69193] + e + b[69194] + encodeURIComponent(JSON.stringify(a)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, getLaunchOptionsSync: function (e) {
      var t = SDKyyw.getLaunchOptionsSync();e(t), console.log(b[69195] + JSON.stringify(t));
    }, msgCheck: function (e, a) {
      SDKyyw.msgSecCheck(e, function (e) {
        console.log(b[69196] + JSON.stringify(e));let t = { data: {} };1 == e.status ? (t.statusCode = 200, t.data.state = 1) : (t.statusCode = 0, t.data.state = 0), a && a(t);
      });
    } };
}function run(e, t, a) {
  e in e1IU01G && e1IU01G[e](t, a);
}exports.init = function (e, t) {
  run(b[40368], e, t);
}, exports.login = function (e) {
  run(b[69013], "", e);
}, exports.login = function (e) {
  run(b[69013], "", e);
}, exports.pay = function (e, t) {
  run(b[69197], e, t);
}, exports.switchEnv = function (e) {
  run(b[69198], e);
}, exports.switchGame = function (e) {
  run(b[69199], e);
}, exports.openService = function () {
  run(b[65130]);
}, exports.logCreateRole = function (e, t, a, n, r) {
  run(b[69200], { serverid: e, servername: t, roleid: a, rolename: n, rolelevel: r });
}, exports.logEnterGame = function (e, t, a, n, r) {
  run(b[69201], { serverid: e, servername: t, roleid: a, rolename: n, rolelevel: r });
}, exports.logRoleUpLevel = function (e, t, a, n, r) {
  run(b[69202], { serverid: e, servername: t, roleid: a, rolename: n, rolelevel: r });
}, exports.share = function (e) {
  run(b[69132], { type: e });
}, exports.downloadClient = function () {
  run(b[69203]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getLaunchOptionsSync = function (e) {
  run(b[69204], e);
}, exports.msgCheck = function (e, t) {
  run(b[52223], e, t);
};