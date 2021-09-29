var p = wx.$h;
import sdk from "./ccchelp.js";var config = { game_id: 256, game_pkg: p[27735], partner_label: p[27736], partner_id: p[27737], game_ver: p[27738], is_auth: !1, from: null, tmpId: {} };window.config = config;var $aQ1GNI = $aQGN1I();var HOST = p[27739];var $aQGIN1 = null;var $aQGI1N = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;function $aQGN1I() {
  var o = {};return { order_data: {}, init: function (e, r) {
      var n = e && e.game_ver ? e.game_ver : 0;console.log(p[27664]);var t = this;var o;o = (a = wx.getStorageSync(p[27665])) ? 0 : (a = t.uuid(16, 32), wx.setStorageSync(p[27665], a), 1), (e = wx.getStorageSync(p[27666])) || (e = t.uuid(16, 32), wx.setStorageSync(p[27666], e));var a = wx.getLaunchOptionsSync();e = a.scene || "";o && a.query && a.query.ad_code && wx.setStorageSync(p[27668], a.query.ad_code), t.log(p[284], { install: o, scene: e });t = a.query && a.query.invite ? a.query.invite : "";a = a.query && a.query.invite_type ? a.query.invite_type : "";t && ($aQGI1N = { invite: t, invite_type: a, is_new: o, scene: e }), sdk.init({ game_ver: n }, function (e) {
        console.log(p[27740], JSON.stringify(e));
      }), n && this.checkGameVersion(n, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log(p[27670]), o.login = p[26855] == typeof r ? r : null;var n = this;sdk.login(function (e, r) {
        0 == e ? (n.do_login(r), console.log(p[27741] + JSON.stringify(r))) : (console.warn(p[27742]), o.login && o.login(1, { errMsg: p[27743] }));
      });
    }, do_login: function (e) {
      var n = this;var r = n.getPublicData();if (r.user_info = JSON.stringify(e), $aQGI1N && p[279] == typeof $aQGI1N) for (var t in $aQGI1N) r[t] = $aQGI1N[t];wx.request({ url: p[27744] + HOST + p[27681], method: p[27331], dataType: p[5684], header: { "content-type": p[27436] }, data: r, success: function (e) {
          if (console.log(p[27682] + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync(p[27745], r.data.sdk_token), wx.setStorageSync(p[27746], r.data.user_id), wx.setStorageSync(p[27747], r.data.username), r.data.ext && wx.setStorageSync(p[27748], r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };o.login && o.login(0, e);
            } else o.login && o.login(1, { errMsg: r.msg });n.getShareInfo(p[27749], function (e) {
              console.log(p[27750]), wx.onShareAppMessage(function () {
                return n.logStartShare(p[27749]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: p[27751] });
        } });
    }, share: function (e) {
      o.share = p[26855] == typeof callback ? callback : null;var r = e.type || p[27407];console.log(p[27752] + r);var n = this;this.getShareInfo(r, function (e) {
        n.logStartShare(r), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(p[27745]);wx.request({ url: p[27744] + HOST + p[27753], method: p[27331], dataType: p[5684], header: { "content-type": p[27436] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: $aQGIN1 ? $aQGIN1.server_id : "", role_id: $aQGIN1 ? $aQGIN1.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(p[27692]);wx.getStorageSync(p[27745]);wx.request({ url: p[27744] + HOST + p[27693], method: p[27331], dataType: p[5684], header: { "content-type": p[27436] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(p[27694] + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? n && n(r.data) : n && n({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log(p[27754]);var n = wx.getStorageSync(p[27745]);wx.request({ url: p[27744] + HOST + p[27755], method: p[27331], dataType: p[5684], header: { "content-type": p[27436] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, type: e, server_id: $aQGIN1 ? $aQGIN1.server_id : "", role_id: $aQGIN1 ? $aQGIN1.role_id : "", no_log: 1 }, success: function (e) {
          console.log(p[27756]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : o.share && o.share(1, { errMsg: p[27757] + e.msg }) : o.share && o.share(1, { errMsg: p[27758] });
        } });
    }, updateShare: function (e, r, n, t, o, a) {
      console.log(p[27759]);var i = wx.getStorageSync(p[27745]);wx.request({ url: p[27744] + HOST + p[27760], method: p[27331], dataType: p[5684], header: { "content-type": p[27436] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: n, role_id: t, sever_id: o, scene: a }, success: function (e) {
          console.log(p[27761] + JSON.stringify(e));
        } });
    }, msgCheck: function (e, n) {
      console.log(p[27762] + e), sdk.checkMsg(e, function (e) {
        console.log(p[27763] + JSON.stringify(e));let r = { data: {} };0 == e ? (r.statusCode = 200, r.data.state = 1) : (r.statusCode = 0, r.data.state = 0), n && n(r);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log(p[27696] + JSON.stringify(e));o.pay = p[26855] == typeof r ? r : null;var n = wx.getStorageSync(p[27745]);r = wx.getStorageSync(p[27748]);n ? (n = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: r, platform: platform }, this.order_data = n, (r = this.getPublicData()).order_data = JSON.stringify(n), wx.request({ url: p[27744] + HOST + p[27697], method: p[27331], dataType: p[5684], header: { "content-type": p[27436] }, data: r, success: function (e) {
          console.log(p[27698] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.pay(e.data.pay_data, function (e, r) {
            console.log(p[27764] + JSON.stringify(r));
          }) : o.pay && o.pay(1, { errMsg: e.msg }) : o.login && o.login(1, { errMsg: p[27751] });
        } })) : o.pay && o.pay(1, { errMsg: p[27703] });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync(p[27746]);var n = wx.getStorageSync(p[27747]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aQGIN1 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[6], t), sdk.logCreateRole({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync(p[27746]);var n = wx.getStorageSync(p[27747]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aQGIN1 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[5565], t), $aQGI1N && this.updateShare($aQGI1N.invite, $aQGI1N.invite_type, $aQGI1N.is_new, e.roleid, e.serverid, $aQGI1N.scene), sdk.logEnterGame({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync(p[27746]);var n = wx.getStorageSync(p[27747]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aQGIN1 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[27721], t), sdk.logRoleUpLevel({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, uuid: function (e, r) {
      var n = p[27722].split("");var t,
          o = [];var a;if (e = e || n.length, r) for (t = 0; t < r; t++) o[t] = n[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", t = 0; t < 36; t++) o[t] || (a = 0 | 16 * Math.random(), o[t] = n[19 == t ? 3 & a | 8 : a]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync(p[27665]);var r = wx.getStorageSync(p[27666]);var n = wx.getStorageSync(p[27668]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: n, uuid: e, idfv: r, mac: p[27723], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : p[27724], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: p[27252] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var n = this.getPublicData();for (var t in r) n[t] = r[t];console.log(p[27725] + e), console.log(n), wx.request({ url: p[27744] + HOST + p[27726] + e + p[27727] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {
      sdk.downloadClient();
    } };
}function run(e, r, n) {
  e in $aQ1GNI && $aQ1GNI[e](r, n);
}exports.init = function (e, r) {
  run(p[364], e, r);
}, exports.login = function (e) {
  run(p[27357], "", e);
}, exports.login = function (e) {
  run(p[27357], "", e);
}, exports.pay = function (e, r) {
  run(p[27396], e, r);
}, exports.openService = function () {
  run(p[23505]);
}, exports.logCreateRole = function (e, r, n, t, o) {
  run(p[27403], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.logEnterGame = function (e, r, n, t, o) {
  run(p[27405], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.logRoleUpLevel = function (e, r, n, t, o) {
  run(p[27731], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.share = function (e) {
  run(p[27407], { type: e });
}, exports.msgCheck = function (e, r) {
  run(p[11445], e, r);
}, exports.downloadClient = function () {
  run(p[27732]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[27733]);
}, exports.weiduanHelper = function () {
  run(p[22590]);
};