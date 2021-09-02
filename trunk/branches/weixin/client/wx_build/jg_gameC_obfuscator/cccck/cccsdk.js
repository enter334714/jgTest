var p = wx.$h;
import sdk from "./ccchelp.js";var config = { game_id: 256, game_pkg: p[0x11fe9], partner_label: p[0x11fea], partner_id: p[0x11feb], game_ver: p[0x11fec], is_auth: !1 };window.config = config;var $a1CESA = $a1ESCA();var HOST = p[0x11fed];var $a1EASC = null;var $a1EACS = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;function $a1ESCA() {
  var o = {};return { order_data: {}, init: function (e, r) {
      var n = e && e.game_ver ? e.game_ver : 0;console.log(p[0x11f96]);var t = this;var o;o = (a = wx.getStorageSync(p[0x11f97])) ? 0 : (a = t.uuid(16, 32), wx.setStorageSync(p[0x11f97], a), 1), (e = wx.getStorageSync(p[0x11f98])) || (e = t.uuid(16, 32), wx.setStorageSync(p[0x11f98], e));var a = wx.getLaunchOptionsSync();e = a.scene || "";o && a.query && a.query.ad_code && wx.setStorageSync(p[0x11f9a], a.query.ad_code), t.log(p[0x11f9c], { install: o, scene: e });t = a.query && a.query.invite ? a.query.invite : "";a = a.query && a.query.invite_type ? a.query.invite_type : "";t && ($a1EACS = { invite: t, invite_type: a, is_new: o, scene: e }), sdk.init({ game_ver: n }, function (e) {
        console.log(p[0x11fee], JSON.stringify(e));
      }), n && this.checkGameVersion(n, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log(p[0x11f9d]), o.login = p[0x11f6b] == typeof r ? r : null;var n = this;sdk.login(function (e, r) {
        0 == e ? (n.do_login(r), console.log(p[0x11fef] + JSON.stringify(r))) : (console.warn(p[0x11ff0]), o.login && o.login(1, { errMsg: p[0x11ff1] }));
      });
    }, do_login: function (e) {
      var n = this;var r = n.getPublicData();if (r.user_info = JSON.stringify(e), $a1EACS && p[0xea7a] == typeof $a1EACS) for (var t in $a1EACS) r[t] = $a1EACS[t];wx.request({ url: p[0x11ff2] + HOST + p[0x11fa8], method: p[0x11fa9], dataType: p[0x11faa], header: { "content-type": p[0x11fab] }, data: r, success: function (e) {
          if (console.log(p[0x11fac] + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync(p[0x11ff3], r.data.sdk_token), wx.setStorageSync(p[0x11ff4], r.data.user_id), wx.setStorageSync(p[0x11ff5], r.data.username), r.data.ext && wx.setStorageSync(p[0x11ff6], r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };o.login && o.login(0, e);
            } else o.login && o.login(1, { errMsg: r.msg });n.getShareInfo(p[0x11ff7], function (e) {
              console.log(p[0x11ff8]), wx.onShareAppMessage(function () {
                return n.logStartShare(p[0x11ff7]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: p[0x11ff9] });
        } });
    }, share: function (e) {
      o.share = p[0x11f6b] == typeof callback ? callback : null;var r = e.type || p[0x11ffa];console.log(p[0x11ffb] + r);var n = this;this.getShareInfo(r, function (e) {
        n.logStartShare(r), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(p[0x11ff3]);wx.request({ url: p[0x11ff2] + HOST + p[0x11ffc], method: p[0x11fa9], dataType: p[0x11faa], header: { "content-type": p[0x11fab] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: $a1EASC ? $a1EASC.server_id : "", role_id: $a1EASC ? $a1EASC.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(p[0x11fb6]);wx.getStorageSync(p[0x11ff3]);wx.request({ url: p[0x11ff2] + HOST + p[0x11fb7], method: p[0x11fa9], dataType: p[0x11faa], header: { "content-type": p[0x11fab] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(p[0x11fb8] + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? n && n(r.data) : n && n({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log(p[0x11ffd]);var n = wx.getStorageSync(p[0x11ff3]);wx.request({ url: p[0x11ff2] + HOST + p[0x11ffe], method: p[0x11fa9], dataType: p[0x11faa], header: { "content-type": p[0x11fab] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, type: e, server_id: $a1EASC ? $a1EASC.server_id : "", role_id: $a1EASC ? $a1EASC.role_id : "", no_log: 1 }, success: function (e) {
          console.log(p[0x11fff]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : o.share && o.share(1, { errMsg: p[0x12000] + e.msg }) : o.share && o.share(1, { errMsg: p[0x12001] });
        } });
    }, updateShare: function (e, r, n, t, o, a) {
      console.log(p[0x12002]);var i = wx.getStorageSync(p[0x11ff3]);wx.request({ url: p[0x11ff2] + HOST + p[0x12003], method: p[0x11fa9], dataType: p[0x11faa], header: { "content-type": p[0x11fab] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: n, role_id: t, sever_id: o, scene: a }, success: function (e) {
          console.log(p[0x12004] + JSON.stringify(e));
        } });
    }, msgCheck: function (e, n) {
      console.log(p[0x12005] + e), sdk.checkMsg(e, function (e) {
        console.log(p[0x12006] + JSON.stringify(e));let r = { data: {} };0 == e ? (r.statusCode = 200, r.data.state = 1) : (r.statusCode = 0, r.data.state = 0), n && n(r);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log(p[0x11fba] + JSON.stringify(e));o.pay = p[0x11f6b] == typeof r ? r : null;var n = wx.getStorageSync(p[0x11ff3]);r = wx.getStorageSync(p[0x11ff6]);n ? (n = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: r, platform: platform }, this.order_data = n, (r = this.getPublicData()).order_data = JSON.stringify(n), wx.request({ url: p[0x11ff2] + HOST + p[0x11fbb], method: p[0x11fa9], dataType: p[0x11faa], header: { "content-type": p[0x11fab] }, data: r, success: function (e) {
          console.log(p[0x11fbc] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.pay(e.data.pay_data, function (e, r) {
            console.log(p[0x12007] + JSON.stringify(r));
          }) : o.pay && o.pay(1, { errMsg: e.msg }) : o.login && o.login(1, { errMsg: p[0x11ff9] });
        } })) : o.pay && o.pay(1, { errMsg: p[0x11fc4] });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync(p[0x11ff4]);var n = wx.getStorageSync(p[0x11ff5]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($a1EASC = { role_id: e.roleid, server_id: e.serverid }), this.log(p[0xea8c], t), sdk.logCreateRole({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync(p[0x11ff4]);var n = wx.getStorageSync(p[0x11ff5]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($a1EASC = { role_id: e.roleid, server_id: e.serverid }), this.log(p[0x11fd6], t), $a1EACS && this.updateShare($a1EACS.invite, $a1EACS.invite_type, $a1EACS.is_new, e.roleid, e.serverid, $a1EACS.scene), sdk.logEnterGame({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync(p[0x11ff4]);var n = wx.getStorageSync(p[0x11ff5]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($a1EASC = { role_id: e.roleid, server_id: e.serverid }), this.log(p[0x11fd7], t), sdk.logRoleUpLevel({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, uuid: function (e, r) {
      var n = p[0x11fd8].split("");var t,
          o = [];var a;if (e = e || n.length, r) for (t = 0; t < r; t++) o[t] = n[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", t = 0; t < 36; t++) o[t] || (a = 0 | 16 * Math.random(), o[t] = n[19 == t ? 3 & a | 8 : a]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync(p[0x11f97]);var r = wx.getStorageSync(p[0x11f98]);var n = wx.getStorageSync(p[0x11f9a]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: n, uuid: e, idfv: r, mac: p[0x11fd9], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : p[0x11fda], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: p[0x11fbd] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var n = this.getPublicData();for (var t in r) n[t] = r[t];console.log(p[0x11fdb] + e), console.log(n), wx.request({ url: p[0x11ff2] + HOST + p[0x11fdc] + e + p[0x11fdd] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {} };
}function run(e, r, n) {
  e in $a1CESA && $a1CESA[e](r, n);
}exports.init = function (e, r) {
  run(p[0x11831], e, r);
}, exports.login = function (e) {
  run(p[0x11fe1], "", e);
}, exports.login = function (e) {
  run(p[0x11fe1], "", e);
}, exports.pay = function (e, r) {
  run(p[0x11fe2], e, r);
}, exports.openService = function () {
  run(p[0x12008]);
}, exports.logCreateRole = function (e, r, n, t, o) {
  run(p[0x11fe3], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.logEnterGame = function (e, r, n, t, o) {
  run(p[0x11fe4], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.logRoleUpLevel = function (e, r, n, t, o) {
  run(p[0x11fe5], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.share = function (e) {
  run(p[0x11ffa], { type: e });
}, exports.msgCheck = function (e, r) {
  run(p[0x12009], e, r);
}, exports.downloadClient = function () {
  run(p[0x11fe6]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[0x11fe7]);
}, exports.weiduanHelper = function () {
  run(p[0x1200a]);
};