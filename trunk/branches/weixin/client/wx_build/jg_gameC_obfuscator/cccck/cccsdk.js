var p = wx.$h;
import sdk from "./ccchelp.js";var config = { game_id: 256, game_pkg: p[73873], partner_label: p[73874], partner_id: p[73875], game_ver: p[73876], is_auth: !1, from: null, tmpId: {} };window.config = config;var $aOX1E0 = $aO1EX0();var HOST = p[73877];var $aO10EX = null;var $aO10XE = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var timeHandler = null;function $aO1EX0() {
  var t = {};return { order_data: {}, init: function (e, r) {
      var n = e && e.game_ver ? e.game_ver : 0;console.log(p[73790]);var o = this;var t;t = (a = wx.getStorageSync(p[73878])) ? 0 : (a = o.uuid(16, 32), wx.setStorageSync(p[73878], a), 1), (e = wx.getStorageSync(p[73879])) || (e = o.uuid(16, 32), wx.setStorageSync(p[73879], e));var a = wx.getLaunchOptionsSync();e = a.scene || "";console.log(p[73793]), console.log(a), t && a.query && a.query.ad_code && wx.setStorageSync(p[73880], a.query.ad_code), o.log(p[73796], { install: t, scene: e });o = a.query && a.query.invite ? a.query.invite : "";a = a.query && a.query.invite_type ? a.query.invite_type : "";o && ($aO10XE = { invite: o, invite_type: a, is_new: t, scene: e }), sdk.init({ game_ver: n }, function (e) {
        console.log(p[73881], JSON.stringify(e));
      }), n && this.checkGameVersion(n, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log(p[73797]), t.login = p[73747] == typeof r ? r : null;var n = this;sdk.login(function (e, r) {
        0 == e ? (n.do_login(r), console.log(p[73882] + JSON.stringify(r))) : (console.warn(p[73883]), t.login && t.login(1, { errMsg: p[73884] }));
      });
    }, do_login: function (e) {
      var n = this;var r = n.getPublicData();if (r.user_info = JSON.stringify(e), $aO10XE && p[60026] == typeof $aO10XE) for (var o in $aO10XE) r[o] = $aO10XE[o];wx.request({ url: p[73885] + HOST + p[73808], method: p[73809], dataType: p[73810], header: { "content-type": p[73811] }, data: r, success: function (e) {
          if (console.log(p[73812] + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync(p[73886], r.data.sdk_token), wx.setStorageSync(p[73887], r.data.user_id), wx.setStorageSync(p[73888], r.data.username), r.data.ext && wx.setStorageSync(p[73889], r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };t.login && t.login(0, e);
            } else t.login && t.login(1, { errMsg: r.msg });n.getShareInfo(p[73890], function (e) {
              console.log(p[73891]), wx.onShareAppMessage(function () {
                return n.logStartShare(p[73890]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else t.login && t.login(1, { errMsg: p[73892] });
        } });
    }, share: function (e) {
      t.share = p[73747] == typeof callback ? callback : null;var r = e.type || p[73893];console.log(p[73894] + r);var n = this;this.getShareInfo(r, function (e) {
        n.logStartShare(r), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(p[73886]);wx.request({ url: p[73885] + HOST + p[73895], method: p[73809], dataType: p[73810], header: { "content-type": p[73811] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: $aO10EX ? $aO10EX.server_id : "", role_id: $aO10EX ? $aO10EX.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(p[73822]);wx.getStorageSync(p[73886]);wx.request({ url: p[73885] + HOST + p[73823], method: p[73809], dataType: p[73810], header: { "content-type": p[73811] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(p[73896]), console.log(e), timeHandler && clearTimeout(timeHandler), 200 == e.statusCode && (r = e.data).state ? n && n(r.data) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(p[73897]), console.log(e), timeHandler && clearTimeout(timeHandler), n && n({ develop: 0 });
        } });timeHandler = setTimeout(function () {
        console.log(p[73898]), n && n({ develop: 0 });
      }, 1e4);
    }, getShareInfo: function (e, r) {
      console.log(p[73899]);var n = wx.getStorageSync(p[73886]);wx.request({ url: p[73885] + HOST + p[73900], method: p[73809], dataType: p[73810], header: { "content-type": p[73811] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, type: e, server_id: $aO10EX ? $aO10EX.server_id : "", role_id: $aO10EX ? $aO10EX.role_id : "", no_log: 1 }, success: function (e) {
          console.log(p[73901]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : t.share && t.share(1, { errMsg: p[73902] + e.msg }) : t.share && t.share(1, { errMsg: p[73903] });
        } });
    }, updateShare: function (e, r, n, o, t, a) {
      console.log(p[73904]);var i = wx.getStorageSync(p[73886]);wx.request({ url: p[73885] + HOST + p[73905], method: p[73809], dataType: p[73810], header: { "content-type": p[73811] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: n, role_id: o, sever_id: t, scene: a }, success: function (e) {
          console.log(p[73906]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(p[73907] + e), sdk.checkMsg(e, function (e) {
        console.log(p[73908] + JSON.stringify(e));let r = { data: {} };0 == e ? (r.statusCode = 200, r.data.state = 1) : (r.statusCode = 0, r.data.state = 0), n && n(r);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log(p[73826] + JSON.stringify(e));t.pay = p[73747] == typeof r ? r : null;var n = wx.getStorageSync(p[73886]);r = wx.getStorageSync(p[73889]);n ? (n = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: r, platform: platform }, this.order_data = n, (r = this.getPublicData()).order_data = JSON.stringify(n), wx.request({ url: p[73885] + HOST + p[73827], method: p[73809], dataType: p[73810], header: { "content-type": p[73811] }, data: r, success: function (e) {
          console.log(p[73828] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.pay(e.data.pay_data, function (e, r) {
            console.log(p[73909] + JSON.stringify(r));
          }) : t.pay && t.pay(1, { errMsg: e.msg }) : t.login && t.login(1, { errMsg: p[73892] });
        } })) : t.pay && t.pay(1, { errMsg: p[73836] });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync(p[73887]);var n = wx.getStorageSync(p[73888]);var o = {};o.user_id = r, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && ($aO10EX = { role_id: e.roleid, server_id: e.serverid }), this.log(p[60044], o), sdk.logCreateRole({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync(p[73887]);var n = wx.getStorageSync(p[73888]);var o = {};o.user_id = r, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && ($aO10EX = { role_id: e.roleid, server_id: e.serverid }), this.log(p[73854], o), $aO10XE && this.updateShare($aO10XE.invite, $aO10XE.invite_type, $aO10XE.is_new, e.roleid, e.serverid, $aO10XE.scene), sdk.logEnterGame({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync(p[73887]);var n = wx.getStorageSync(p[73888]);var o = {};o.user_id = r, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && ($aO10EX = { role_id: e.roleid, server_id: e.serverid }), this.log(p[73855], o), sdk.logRoleUpLevel({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, uuid: function (e, r) {
      var n = p[73856].split("");var o,
          t = [];var a;if (e = e || n.length, r) for (o = 0; o < r; o++) t[o] = n[0 | Math.random() * e];else for (t[8] = t[13] = t[18] = t[23] = "-", t[14] = "4", o = 0; o < 36; o++) t[o] || (a = 0 | 16 * Math.random(), t[o] = n[19 == o ? 3 & a | 8 : a]);return t.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync(p[73878]);var r = wx.getStorageSync(p[73879]);var n = wx.getStorageSync(p[73880]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: n, uuid: e, idfv: r, mac: p[73857], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : p[73858], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: p[73829] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var n = this.getPublicData();for (var o in r) n[o] = r[o];console.log(p[73859] + e), console.log(n), wx.request({ url: p[73885] + HOST + p[73860] + e + p[73861] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {} };
}function run(e, r, n) {
  e in $aOX1E0 && $aOX1E0[e](r, n);
}exports.init = function (e, r) {
  run(p[71868], e, r);
}, exports.login = function (e) {
  run(p[73865], "", e);
}, exports.login = function (e) {
  run(p[73865], "", e);
}, exports.pay = function (e, r) {
  run(p[73866], e, r);
}, exports.openService = function () {
  run(p[73910]);
}, exports.logCreateRole = function (e, r, n, o, t) {
  run(p[73867], { serverid: e, servername: r, roleid: n, rolename: o, rolelevel: t });
}, exports.logEnterGame = function (e, r, n, o, t) {
  run(p[73868], { serverid: e, servername: r, roleid: n, rolename: o, rolelevel: t });
}, exports.logRoleUpLevel = function (e, r, n, o, t) {
  run(p[73869], { serverid: e, servername: r, roleid: n, rolename: o, rolelevel: t });
}, exports.share = function (e) {
  run(p[73893], { type: e });
}, exports.msgCheck = function (e, r) {
  run(p[73911], e, r);
}, exports.downloadClient = function () {
  run(p[73870]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[73871]);
}, exports.weiduanHelper = function () {
  run(p[73912]);
};