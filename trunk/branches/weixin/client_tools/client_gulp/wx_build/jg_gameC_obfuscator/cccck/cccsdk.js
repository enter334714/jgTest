var p = wx.$h;
import sdk from "./ccchelp.js";var config = { game_id: 256, game_pkg: p[87486], partner_label: p[87487], partner_id: p[87488], game_ver: p[87489], is_auth: !1, from: null, tmpId: {} };window.config = config;var $aK7UOT = $aKUO7T();var HOST = p[87490];var $aKUTO7 = null;var $aKUT7O = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;function $aKUO7T() {
  var o = {};return { order_data: {}, init: function (e, r) {
      var n = e && e.game_ver ? e.game_ver : 0;console.log(p[87402]);var t = this;var o;o = (a = wx.getStorageSync(p[87403])) ? 0 : (a = t.uuid(16, 32), wx.setStorageSync(p[87403], a), 1), (e = wx.getStorageSync(p[87404])) || (e = t.uuid(16, 32), wx.setStorageSync(p[87404], e));var a = wx.getLaunchOptionsSync();e = a.scene || "";o && a.query && a.query.ad_code && wx.setStorageSync(p[87406], a.query.ad_code), t.log(p[60284], { install: o, scene: e });t = a.query && a.query.invite ? a.query.invite : "";a = a.query && a.query.invite_type ? a.query.invite_type : "";t && ($aKUT7O = { invite: t, invite_type: a, is_new: o, scene: e }), sdk.init({ game_ver: n }, function (e) {
        console.log(p[87491], JSON.stringify(e));
      }), n && this.checkGameVersion(n, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log(p[87408]), o.login = p[87076] == typeof r ? r : null;var n = this;sdk.login(function (e, r) {
        0 == e ? (n.do_login(r), console.log(p[87492] + JSON.stringify(r))) : (console.warn(p[87493]), o.login && o.login(1, { errMsg: p[87494] }));
      });
    }, do_login: function (e) {
      var n = this;var r = n.getPublicData();if (r.user_info = JSON.stringify(e), $aKUT7O && p[60279] == typeof $aKUT7O) for (var t in $aKUT7O) r[t] = $aKUT7O[t];wx.request({ url: p[87495] + HOST + p[87419], method: p[87420], dataType: p[65696], header: { "content-type": p[87421] }, data: r, success: function (e) {
          if (console.log(p[87422] + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync(p[87496], r.data.sdk_token), wx.setStorageSync(p[87497], r.data.user_id), wx.setStorageSync(p[87498], r.data.username), r.data.ext && wx.setStorageSync(p[87499], r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };o.login && o.login(0, e);
            } else o.login && o.login(1, { errMsg: r.msg });n.getShareInfo(p[87500], function (e) {
              console.log(p[87501]), wx.onShareAppMessage(function () {
                return n.logStartShare(p[87500]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: p[87502] });
        } });
    }, share: function (e) {
      o.share = p[87076] == typeof callback ? callback : null;var r = e.type || p[87503];console.log(p[87504] + r);var n = this;this.getShareInfo(r, function (e) {
        n.logStartShare(r), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(p[87496]);wx.request({ url: p[87495] + HOST + p[87505], method: p[87420], dataType: p[65696], header: { "content-type": p[87421] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: $aKUTO7 ? $aKUTO7.server_id : "", role_id: $aKUTO7 ? $aKUTO7.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(p[87432]);wx.getStorageSync(p[87496]);wx.request({ url: p[87495] + HOST + p[87433], method: p[87420], dataType: p[65696], header: { "content-type": p[87421] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(p[87434] + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? n && n(r.data) : n && n({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log(p[87506]);var n = wx.getStorageSync(p[87496]);wx.request({ url: p[87495] + HOST + p[87507], method: p[87420], dataType: p[65696], header: { "content-type": p[87421] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, type: e, server_id: $aKUTO7 ? $aKUTO7.server_id : "", role_id: $aKUTO7 ? $aKUTO7.role_id : "", no_log: 1 }, success: function (e) {
          console.log(p[87508]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : o.share && o.share(1, { errMsg: p[87509] + e.msg }) : o.share && o.share(1, { errMsg: p[87510] });
        } });
    }, updateShare: function (e, r, n, t, o, a) {
      console.log(p[87511]);var i = wx.getStorageSync(p[87496]);wx.request({ url: p[87495] + HOST + p[87512], method: p[87420], dataType: p[65696], header: { "content-type": p[87421] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: n, role_id: t, sever_id: o, scene: a }, success: function (e) {
          console.log(p[87513] + JSON.stringify(e));
        } });
    }, msgCheck: function (e, n) {
      console.log(p[87514] + e), sdk.checkMsg(e, function (e) {
        console.log(p[87515] + JSON.stringify(e));let r = { data: {} };0 == e ? (r.statusCode = 200, r.data.state = 1) : (r.statusCode = 0, r.data.state = 0), n && n(r);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log(p[87436] + JSON.stringify(e));o.pay = p[87076] == typeof r ? r : null;var n = wx.getStorageSync(p[87496]);r = wx.getStorageSync(p[87499]);n ? (n = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: r, platform: platform }, this.order_data = n, (r = this.getPublicData()).order_data = JSON.stringify(n), wx.request({ url: p[87495] + HOST + p[87437], method: p[87420], dataType: p[65696], header: { "content-type": p[87421] }, data: r, success: function (e) {
          console.log(p[87438] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.pay(e.data.pay_data, function (e, r) {
            console.log(p[87516] + JSON.stringify(r));
          }) : o.pay && o.pay(1, { errMsg: e.msg }) : o.login && o.login(1, { errMsg: p[87502] });
        } })) : o.pay && o.pay(1, { errMsg: p[87446] });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync(p[87497]);var n = wx.getStorageSync(p[87498]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aKUTO7 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[60006], t), sdk.logCreateRole(e.serverid, e.servername, e.roleid, e.rolename, e.rolelevel);
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync(p[87497]);var n = wx.getStorageSync(p[87498]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aKUTO7 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[65577], t), $aKUT7O && this.updateShare($aKUT7O.invite, $aKUT7O.invite_type, $aKUT7O.is_new, e.roleid, e.serverid, $aKUT7O.scene), sdk.logEnterGame(e.serverid, e.servername, e.roleid, e.rolename, e.rolelevel);
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync(p[87497]);var n = wx.getStorageSync(p[87498]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aKUTO7 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[87464], t), sdk.logRoleUpLevel(e.serverid, e.servername, e.roleid, e.rolename, e.rolelevel);
    }, uuid: function (e, r) {
      var n = p[87465].split("");var t,
          o = [];var a;if (e = e || n.length, r) for (t = 0; t < r; t++) o[t] = n[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", t = 0; t < 36; t++) o[t] || (a = 0 | 16 * Math.random(), o[t] = n[19 == t ? 3 & a | 8 : a]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync(p[87403]);var r = wx.getStorageSync(p[87404]);var n = wx.getStorageSync(p[87406]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: n, uuid: e, idfv: r, mac: p[87466], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : p[87467], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: p[87439] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var n = this.getPublicData();for (var t in r) n[t] = r[t];console.log(p[87468] + e), console.log(n), wx.request({ url: p[87495] + HOST + p[87469] + e + p[87470] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {
      sdk.downloadClient();
    } };
}function run(e, r, n) {
  e in $aK7UOT && $aK7UOT[e](r, n);
}exports.init = function (e, r) {
  run(p[60364], e, r);
}, exports.login = function (e) {
  run(p[87478], "", e);
}, exports.login = function (e) {
  run(p[87478], "", e);
}, exports.pay = function (e, r) {
  run(p[87479], e, r);
}, exports.openService = function () {
  run(p[83685]);
}, exports.logCreateRole = function (e, r, n, t, o) {
  run(p[87480], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.logEnterGame = function (e, r, n, t, o) {
  run(p[87481], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.logRoleUpLevel = function (e, r, n, t, o) {
  run(p[87482], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.share = function (e) {
  run(p[87503], { type: e });
}, exports.msgCheck = function (e, r) {
  run(p[71530], e, r);
}, exports.downloadClient = function () {
  run(p[87483]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[87484]);
}, exports.weiduanHelper = function () {
  run(p[82719]);
};