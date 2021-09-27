var p = wx.$h;
import sdk from "./ccchelp.js";var config = { game_id: 256, game_pkg: p[87254], partner_label: p[87255], partner_id: p[87256], game_ver: p[87257], is_auth: !1, from: null, tmpId: {} };window.config = config;var $aOXZW8 = $aOZWX8();var HOST = p[87258];var $aOZ8WX = null;var $aOZ8XW = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var timeHandler = null;function $aOZWX8() {
  var t = {};return { order_data: {}, init: function (e, r) {
      var n = e && e.game_ver ? e.game_ver : 0;console.log(p[87174]);var o = this;var t;t = (a = wx.getStorageSync(p[87259])) ? 0 : (a = o.uuid(16, 32), wx.setStorageSync(p[87259], a), 1), (e = wx.getStorageSync(p[87260])) || (e = o.uuid(16, 32), wx.setStorageSync(p[87260], e));var a = wx.getLaunchOptionsSync();e = a.scene || "";console.log(p[87177]), console.log(a), t && a.query && a.query.ad_code && wx.setStorageSync(p[87261], a.query.ad_code), o.log(p[60284], { install: t, scene: e });o = a.query && a.query.invite ? a.query.invite : "";a = a.query && a.query.invite_type ? a.query.invite_type : "";o && ($aOZ8XW = { invite: o, invite_type: a, is_new: t, scene: e }), sdk.init({ game_ver: n }, function (e) {
        console.log(p[87262], JSON.stringify(e));
      }), n && this.checkGameVersion(n, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log(p[87180]), t.login = p[86850] == typeof r ? r : null;var n = this;sdk.login(function (e, r) {
        0 == e ? (n.do_login(r), console.log(p[87263] + JSON.stringify(r))) : (console.warn(p[87264]), t.login && t.login(1, { errMsg: p[87265] }));
      });
    }, do_login: function (e) {
      var n = this;var r = n.getPublicData();if (r.user_info = JSON.stringify(e), $aOZ8XW && p[60279] == typeof $aOZ8XW) for (var o in $aOZ8XW) r[o] = $aOZ8XW[o];wx.request({ url: p[87266] + HOST + p[87191], method: p[87192], dataType: p[65684], header: { "content-type": p[87193] }, data: r, success: function (e) {
          if (console.log(p[87194] + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync(p[87267], r.data.sdk_token), wx.setStorageSync(p[87268], r.data.user_id), wx.setStorageSync(p[87269], r.data.username), r.data.ext && wx.setStorageSync(p[87270], r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };t.login && t.login(0, e);
            } else t.login && t.login(1, { errMsg: r.msg });n.getShareInfo(p[87271], function (e) {
              console.log(p[87272]), wx.onShareAppMessage(function () {
                return n.logStartShare(p[87271]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else t.login && t.login(1, { errMsg: p[87273] });
        } });
    }, share: function (e) {
      t.share = p[86850] == typeof callback ? callback : null;var r = e.type || p[87274];console.log(p[87275] + r);var n = this;this.getShareInfo(r, function (e) {
        n.logStartShare(r), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(p[87267]);wx.request({ url: p[87266] + HOST + p[87276], method: p[87192], dataType: p[65684], header: { "content-type": p[87193] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: $aOZ8WX ? $aOZ8WX.server_id : "", role_id: $aOZ8WX ? $aOZ8WX.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(p[87204]);wx.getStorageSync(p[87267]);wx.request({ url: p[87266] + HOST + p[87205], method: p[87192], dataType: p[65684], header: { "content-type": p[87193] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(p[87277]), console.log(e), timeHandler && clearTimeout(timeHandler), 200 == e.statusCode && (r = e.data).state ? n && n(r.data) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(p[87278]), console.log(e), timeHandler && clearTimeout(timeHandler), n && n({ develop: 0 });
        } });timeHandler = setTimeout(function () {
        console.log(p[87279]), n && n({ develop: 0 });
      }, 1e4);
    }, getShareInfo: function (e, r) {
      console.log(p[87280]);var n = wx.getStorageSync(p[87267]);wx.request({ url: p[87266] + HOST + p[87281], method: p[87192], dataType: p[65684], header: { "content-type": p[87193] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, type: e, server_id: $aOZ8WX ? $aOZ8WX.server_id : "", role_id: $aOZ8WX ? $aOZ8WX.role_id : "", no_log: 1 }, success: function (e) {
          console.log(p[87282]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : t.share && t.share(1, { errMsg: p[87283] + e.msg }) : t.share && t.share(1, { errMsg: p[87284] });
        } });
    }, updateShare: function (e, r, n, o, t, a) {
      console.log(p[87285]);var i = wx.getStorageSync(p[87267]);wx.request({ url: p[87266] + HOST + p[87286], method: p[87192], dataType: p[65684], header: { "content-type": p[87193] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: n, role_id: o, sever_id: t, scene: a }, success: function (e) {
          console.log(p[87287]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(p[87288] + e), sdk.checkMsg(e, function (e) {
        console.log(p[87289] + JSON.stringify(e));let r = { data: {} };0 == e ? (r.statusCode = 200, r.data.state = 1) : (r.statusCode = 0, r.data.state = 0), n && n(r);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log(p[87208] + JSON.stringify(e));t.pay = p[86850] == typeof r ? r : null;var n = wx.getStorageSync(p[87267]);r = wx.getStorageSync(p[87270]);n ? (n = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: r, platform: platform }, this.order_data = n, (r = this.getPublicData()).order_data = JSON.stringify(n), wx.request({ url: p[87266] + HOST + p[87209], method: p[87192], dataType: p[65684], header: { "content-type": p[87193] }, data: r, success: function (e) {
          console.log(p[87210] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.pay(e.data.pay_data, function (e, r) {
            console.log(p[87290] + JSON.stringify(r));
          }) : t.pay && t.pay(1, { errMsg: e.msg }) : t.login && t.login(1, { errMsg: p[87273] });
        } })) : t.pay && t.pay(1, { errMsg: p[87218] });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync(p[87268]);var n = wx.getStorageSync(p[87269]);var o = {};o.user_id = r, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && ($aOZ8WX = { role_id: e.roleid, server_id: e.serverid }), this.log(p[60006], o), sdk.logCreateRole({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync(p[87268]);var n = wx.getStorageSync(p[87269]);var o = {};o.user_id = r, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && ($aOZ8WX = { role_id: e.roleid, server_id: e.serverid }), this.log(p[65565], o), $aOZ8XW && this.updateShare($aOZ8XW.invite, $aOZ8XW.invite_type, $aOZ8XW.is_new, e.roleid, e.serverid, $aOZ8XW.scene), sdk.logEnterGame({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync(p[87268]);var n = wx.getStorageSync(p[87269]);var o = {};o.user_id = r, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && ($aOZ8WX = { role_id: e.roleid, server_id: e.serverid }), this.log(p[87236], o), sdk.logRoleUpLevel({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, uuid: function (e, r) {
      var n = p[87237].split("");var o,
          t = [];var a;if (e = e || n.length, r) for (o = 0; o < r; o++) t[o] = n[0 | Math.random() * e];else for (t[8] = t[13] = t[18] = t[23] = "-", t[14] = "4", o = 0; o < 36; o++) t[o] || (a = 0 | 16 * Math.random(), t[o] = n[19 == o ? 3 & a | 8 : a]);return t.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync(p[87259]);var r = wx.getStorageSync(p[87260]);var n = wx.getStorageSync(p[87261]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: n, uuid: e, idfv: r, mac: p[87238], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : p[87239], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: p[87211] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var n = this.getPublicData();for (var o in r) n[o] = r[o];console.log(p[87240] + e), console.log(n), wx.request({ url: p[87266] + HOST + p[87241] + e + p[87242] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {} };
}function run(e, r, n) {
  e in $aOXZW8 && $aOXZW8[e](r, n);
}exports.init = function (e, r) {
  run(p[60364], e, r);
}, exports.login = function (e) {
  run(p[87246], "", e);
}, exports.login = function (e) {
  run(p[87246], "", e);
}, exports.pay = function (e, r) {
  run(p[87247], e, r);
}, exports.openService = function () {
  run(p[83501]);
}, exports.logCreateRole = function (e, r, n, o, t) {
  run(p[87248], { serverid: e, servername: r, roleid: n, rolename: o, rolelevel: t });
}, exports.logEnterGame = function (e, r, n, o, t) {
  run(p[87249], { serverid: e, servername: r, roleid: n, rolename: o, rolelevel: t });
}, exports.logRoleUpLevel = function (e, r, n, o, t) {
  run(p[87250], { serverid: e, servername: r, roleid: n, rolename: o, rolelevel: t });
}, exports.share = function (e) {
  run(p[87274], { type: e });
}, exports.msgCheck = function (e, r) {
  run(p[71445], e, r);
}, exports.downloadClient = function () {
  run(p[87251]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[87252]);
}, exports.weiduanHelper = function () {
  run(p[82586]);
};