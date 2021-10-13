var p = wx.$h;
import sdk from "./ccchelp.js";var config = { game_id: 256, game_pkg: p[95], partner_label: p[96], partner_id: p[97], game_ver: p[98], is_auth: !1, from: null, tmpId: {} };window.config = config;var $aE$DGI = $aEDG$I();var HOST = p[99];var $aEDIG$ = null;var $aEDI$G = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;function $aEDG$I() {
  var o = {};return { order_data: {}, init: function (e, r) {
      var n = e && e.game_ver ? e.game_ver : 0;console.log(p[2]);var t = this;var o;o = (a = wx.getStorageSync(p[3])) ? 0 : (a = t.uuid(16, 32), wx.setStorageSync(p[3], a), 1), (e = wx.getStorageSync(p[4])) || (e = t.uuid(16, 32), wx.setStorageSync(p[4], e));var a = wx.getLaunchOptionsSync();e = a.scene || "";o && a.query && a.query.ad_code && wx.setStorageSync(p[6], a.query.ad_code), t.log(p[8], { install: o, scene: e });t = a.query && a.query.invite ? a.query.invite : "";a = a.query && a.query.invite_type ? a.query.invite_type : "";t && ($aEDI$G = { invite: t, invite_type: a, is_new: o, scene: e }), sdk.init({ game_ver: n }, function (e) {
        console.log(p[100], JSON.stringify(e));
      }), n && this.checkGameVersion(n, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log(p[9]), o.login = p[10] == typeof r ? r : null;var n = this;sdk.login(function (e, r) {
        0 == e ? (n.do_login(r), console.log(p[101] + JSON.stringify(r))) : (console.warn(p[102]), o.login && o.login(1, { errMsg: p[103] }));
      });
    }, do_login: function (e) {
      var n = this;var r = n.getPublicData();if (r.user_info = JSON.stringify(e), $aEDI$G && p[104] == typeof $aEDI$G) for (var t in $aEDI$G) r[t] = $aEDI$G[t];wx.request({ url: p[105] + HOST + p[24], method: p[25], dataType: p[26], header: { "content-type": p[27] }, data: r, success: function (e) {
          if (console.log(p[28] + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync(p[106], r.data.sdk_token), wx.setStorageSync(p[107], r.data.user_id), wx.setStorageSync(p[108], r.data.username), r.data.ext && wx.setStorageSync(p[109], r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };o.login && o.login(0, e);
            } else o.login && o.login(1, { errMsg: r.msg });n.getShareInfo(p[110], function (e) {
              console.log(p[111]), wx.onShareAppMessage(function () {
                return n.logStartShare(p[110]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: p[112] });
        } });
    }, share: function (e) {
      o.share = p[10] == typeof callback ? callback : null;var r = e.type || p[113];console.log(p[114] + r);var n = this;this.getShareInfo(r, function (e) {
        n.logStartShare(r), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(p[106]);wx.request({ url: p[105] + HOST + p[115], method: p[25], dataType: p[26], header: { "content-type": p[27] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: $aEDIG$ ? $aEDIG$.server_id : "", role_id: $aEDIG$ ? $aEDIG$.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(p[38]);wx.getStorageSync(p[106]);wx.request({ url: p[105] + HOST + p[39], method: p[25], dataType: p[26], header: { "content-type": p[27] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(p[40] + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? n && n(r.data) : n && n({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log(p[116]);var n = wx.getStorageSync(p[106]);wx.request({ url: p[105] + HOST + p[117], method: p[25], dataType: p[26], header: { "content-type": p[27] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, type: e, server_id: $aEDIG$ ? $aEDIG$.server_id : "", role_id: $aEDIG$ ? $aEDIG$.role_id : "", no_log: 1 }, success: function (e) {
          console.log(p[118]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : o.share && o.share(1, { errMsg: p[119] + e.msg }) : o.share && o.share(1, { errMsg: p[120] });
        } });
    }, updateShare: function (e, r, n, t, o, a) {
      console.log(p[121]);var i = wx.getStorageSync(p[106]);wx.request({ url: p[105] + HOST + p[122], method: p[25], dataType: p[26], header: { "content-type": p[27] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: n, role_id: t, sever_id: o, scene: a }, success: function (e) {
          console.log(p[123] + JSON.stringify(e));
        } });
    }, msgCheck: function (e, n) {
      console.log(p[124] + e), sdk.checkMsg(e, function (e) {
        console.log(p[125] + JSON.stringify(e));let r = { data: {} };0 == e ? (r.statusCode = 200, r.data.state = 1) : (r.statusCode = 0, r.data.state = 0), n && n(r);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log(p[42] + JSON.stringify(e));o.pay = p[10] == typeof r ? r : null;var n = wx.getStorageSync(p[106]);r = wx.getStorageSync(p[109]);n ? (n = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: r, platform: platform }, this.order_data = n, (r = this.getPublicData()).order_data = JSON.stringify(n), wx.request({ url: p[105] + HOST + p[43], method: p[25], dataType: p[26], header: { "content-type": p[27] }, data: r, success: function (e) {
          console.log(p[44] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.pay(e.data.pay_data, function (e, r) {
            console.log(p[126] + JSON.stringify(r));
          }) : o.pay && o.pay(1, { errMsg: e.msg }) : o.login && o.login(1, { errMsg: p[112] });
        } })) : o.pay && o.pay(1, { errMsg: p[52] });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync(p[107]);var n = wx.getStorageSync(p[108]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aEDIG$ = { role_id: e.roleid, server_id: e.serverid }), this.log(p[70], t), sdk.logCreateRole(e.serverid, e.servername, e.roleid, e.rolename, e.rolelevel);
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync(p[107]);var n = wx.getStorageSync(p[108]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aEDIG$ = { role_id: e.roleid, server_id: e.serverid }), this.log(p[71], t), $aEDI$G && this.updateShare($aEDI$G.invite, $aEDI$G.invite_type, $aEDI$G.is_new, e.roleid, e.serverid, $aEDI$G.scene), sdk.logEnterGame(e.serverid, e.servername, e.roleid, e.rolename, e.rolelevel);
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync(p[107]);var n = wx.getStorageSync(p[108]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aEDIG$ = { role_id: e.roleid, server_id: e.serverid }), this.log(p[72], t), sdk.logRoleUpLevel(e.serverid, e.servername, e.roleid, e.rolename, e.rolelevel);
    }, uuid: function (e, r) {
      var n = p[73].split("");var t,
          o = [];var a;if (e = e || n.length, r) for (t = 0; t < r; t++) o[t] = n[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", t = 0; t < 36; t++) o[t] || (a = 0 | 16 * Math.random(), o[t] = n[19 == t ? 3 & a | 8 : a]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync(p[3]);var r = wx.getStorageSync(p[4]);var n = wx.getStorageSync(p[6]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: n, uuid: e, idfv: r, mac: p[74], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : p[75], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: p[45] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var n = this.getPublicData();for (var t in r) n[t] = r[t];console.log(p[76] + e), console.log(n), wx.request({ url: p[105] + HOST + p[77] + e + p[78] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {
      sdk.downloadClient();
    } };
}function run(e, r, n) {
  e in $aE$DGI && $aE$DGI[e](r, n);
}exports.init = function (e, r) {
  run(p[86], e, r);
}, exports.login = function (e) {
  run(p[87], "", e);
}, exports.login = function (e) {
  run(p[87], "", e);
}, exports.pay = function (e, r) {
  run(p[88], e, r);
}, exports.openService = function () {
  run(p[127]);
}, exports.logCreateRole = function (e, r, n, t, o) {
  run(p[89], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.logEnterGame = function (e, r, n, t, o) {
  run(p[90], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.logRoleUpLevel = function (e, r, n, t, o) {
  run(p[91], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.share = function (e) {
  run(p[113], { type: e });
}, exports.msgCheck = function (e, r) {
  run(p[128], e, r);
}, exports.downloadClient = function () {
  run(p[92]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[93]);
}, exports.weiduanHelper = function () {
  run(p[129]);
};