var Y = wx.$M;
import sdk from "./mmmmHELP.js";var config = { game_id: 256, game_pkg: Y[28049], partner_label: Y[28050], partner_id: Y[28051], game_ver: Y[28052], is_auth: !1, from: null, tmpId: {} };window.config = config;var $mT85FC = $mT5F8C();var HOST = Y[28053];var $mT5CF8 = null;var $mT5C8F = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var checkHandler = null;var loginHandler = null;var requestCallback = !1;function $mT5F8C() {
  var a = {};return { order_data: {}, init: function (e, n) {
      var r = e && e.game_ver ? e.game_ver : 0;console.log(Y[27975]);var t = this;var o;o = (a = wx.getStorageSync(Y[27976])) ? 0 : (a = t.uuid(16, 32), wx.setStorageSync(Y[27976], a), 1), (e = wx.getStorageSync(Y[27977])) || (e = t.uuid(16, 32), wx.setStorageSync(Y[27977], e));var a = wx.getLaunchOptionsSync();e = a.scene || "";o && a.query && a.query.ad_code && wx.setStorageSync(Y[27979], a.query.ad_code), t.log(Y[1448], { install: o, scene: e });t = a.query && a.query.invite ? a.query.invite : "";a = a.query && a.query.invite_type ? a.query.invite_type : "";t && ($mT5C8F = { invite: t, invite_type: a, is_new: o, scene: e }), sdk.init({ game_ver: r }, function (e) {
        console.log(Y[28054], JSON.stringify(e));
      }), r && this.checkGameVersion(r, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(Y[27981]), a.login = Y[1102] == typeof n ? n : null;var r = this;sdk.login(function (e, n) {
        0 == e ? (r.do_login(n), console.log(Y[28055] + JSON.stringify(n))) : (console.warn(Y[28056]), a.login && a.login(1, { errMsg: Y[28057] }));
      });
    }, do_login: function (e) {
      var t = this;var n = t.getPublicData();if (n.user_info = JSON.stringify(e), $mT5C8F && Y[1037] == typeof $mT5C8F) for (var r in $mT5C8F) n[r] = $mT5C8F[r];var o = Date.now();wx.request({ url: Y[28058] + HOST + Y[27992], method: Y[590], dataType: Y[1209], header: { "content-type": Y[725] }, data: n, success: function (e) {
          if (console.log(Y[27993] + JSON.stringify(e)), requestCallback = !0, loginHandler && clearTimeout(loginHandler), loginHandler = null, 200 == e.statusCode) {
            var n = e.data;if (n.state) {
              try {
                wx.setStorageSync(Y[28059], n.data.sdk_token), wx.setStorageSync(Y[28060], n.data.user_id), wx.setStorageSync(Y[28061], n.data.username), n.data.ext && wx.setStorageSync(Y[28062], n.data.ext);
              } catch (e) {}var r = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };a.login && a.login(0, r);
            } else a.login && a.login(1, { type: Y[28063], errMsg: n.msg, time: Date.now() - o, res: e });t.getShareInfo(Y[28064], function (e) {
              console.log(Y[28065]), wx.onShareAppMessage(function () {
                return t.logStartShare(Y[28064]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else a.login && a.login(1, { type: Y[28063], errMsg: Y[28066], time: Date.now() - o, res: e });
        }, fail: function (e) {
          console.log(Y[28067]), console.log(e), requestCallback = !0, loginHandler && clearTimeout(loginHandler), loginHandler = null, a.login && a.login(1, { type: Y[28068], errMsg: e.errMsg, time: Date.now() - o, res: e });
        } }), requestCallback || (loginHandler = setTimeout(function () {
        console.log(Y[28069]), a.login && a.login(1, { type: Y[28070], errMsg: Y[28071], time: Date.now() - o }), a.login = null;
      }, 2e4));
    }, share: function (e) {
      a.share = Y[1102] == typeof callback ? callback : null;var n = e.type || Y[685];console.log(Y[28072] + n);var r = this;this.getShareInfo(n, function (e) {
        r.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(Y[28059]);wx.request({ url: Y[28058] + HOST + Y[28073], method: Y[590], dataType: Y[1209], header: { "content-type": Y[725] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: $mT5CF8 ? $mT5CF8.server_id : "", role_id: $mT5CF8 ? $mT5CF8.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(Y[28003]), a.check = Y[1102] == typeof n ? n : null;wx.getStorageSync(Y[28059]);wx.request({ url: Y[28058] + HOST + Y[28004], method: Y[590], dataType: Y[1209], header: { "content-type": Y[725] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var n;console.log(Y[28074]), console.log(e), requestCallback = !0, checkHandler && clearTimeout(checkHandler), checkHandler = null, 200 == e.statusCode && (n = e.data).state ? a.check && a.check(n.data) : a.check && a.check({ develop: 0 });
        }, fail: function (e) {
          console.log(Y[28075]), console.log(e), requestCallback = !0, checkHandler && clearTimeout(checkHandler), checkHandler = null, a.check && a.check({ develop: 0 });
        } }), requestCallback || (checkHandler = setTimeout(function () {
        console.log(Y[28076]), a.check && a.check({ develop: 0 }), a.check = null;
      }, 1e4));
    }, getShareInfo: function (e, n) {
      console.log(Y[28077]);var r = wx.getStorageSync(Y[28059]);wx.request({ url: Y[28058] + HOST + Y[28078], method: Y[590], dataType: Y[1209], header: { "content-type": Y[725] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: $mT5CF8 ? $mT5CF8.server_id : "", role_id: $mT5CF8 ? $mT5CF8.role_id : "", no_log: 1 }, success: function (e) {
          console.log(Y[28079]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : a.share && a.share(1, { errMsg: Y[28080] + e.msg }) : a.share && a.share(1, { errMsg: Y[28081] });
        } });
    }, updateShare: function (e, n, r, t, o, a) {
      console.log(Y[28082]);var i = wx.getStorageSync(Y[28059]);wx.request({ url: Y[28058] + HOST + Y[28083], method: Y[590], dataType: Y[1209], header: { "content-type": Y[725] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: r, role_id: t, sever_id: o, scene: a }, success: function (e) {
          console.log(Y[28084] + JSON.stringify(e));
        } });
    }, msgCheck: function (e, r) {
      console.log(Y[28085] + e), sdk.checkMsg(e, function (e) {
        console.log(Y[28086] + JSON.stringify(e));let n = { data: {} };0 == e ? (n.statusCode = 200, n.data.state = 1) : (n.statusCode = 0, n.data.state = 0), r && r(n);
      });
    }, pay: function (e, n) {
      this.startPay(e, n);
    }, startPay: function (e, n) {
      console.log(Y[28007] + JSON.stringify(e));a.pay = Y[1102] == typeof n ? n : null;var r = wx.getStorageSync(Y[28059]);n = wx.getStorageSync(Y[28062]);r ? (r = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, session_key: n, platform: platform }, this.order_data = r, (n = this.getPublicData()).order_data = JSON.stringify(r), wx.request({ url: Y[28058] + HOST + Y[28008], method: Y[590], dataType: Y[1209], header: { "content-type": Y[725] }, data: n, success: function (e) {
          console.log(Y[28009] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.pay(e.data.pay_data, function (e, n) {
            console.log(Y[28087] + JSON.stringify(n));
          }) : a.pay && a.pay(1, { errMsg: e.msg }) : a.login && a.login(1, { errMsg: Y[28066] });
        } })) : a.pay && a.pay(1, { errMsg: Y[28014] });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(Y[28060]);var r = wx.getStorageSync(Y[28061]);var t = {};t.user_id = n, t.user_name = r, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($mT5CF8 = { role_id: e.roleid, server_id: e.serverid }), this.log(Y[150], t), sdk.logCreateRole(e.serverid, e.servername, e.roleid, e.rolename, e.rolelevel);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(Y[28060]);var r = wx.getStorageSync(Y[28061]);var t = {};t.user_id = n, t.user_name = r, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($mT5CF8 = { role_id: e.roleid, server_id: e.serverid }), this.log(Y[6622], t), $mT5C8F && this.updateShare($mT5C8F.invite, $mT5C8F.invite_type, $mT5C8F.is_new, e.roleid, e.serverid, $mT5C8F.scene), sdk.logEnterGame(e.serverid, e.servername, e.roleid, e.rolename, e.rolelevel);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(Y[28060]);var r = wx.getStorageSync(Y[28061]);var t = {};t.user_id = n, t.user_name = r, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($mT5CF8 = { role_id: e.roleid, server_id: e.serverid }), this.log(Y[28032], t), sdk.logRoleUpLevel(e.serverid, e.servername, e.roleid, e.rolename, e.rolelevel);
    }, uuid: function (e, n) {
      var r = Y[28033].split("");var t,
          o = [];var a;if (e = e || r.length, n) for (t = 0; t < n; t++) o[t] = r[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", t = 0; t < 36; t++) o[t] || (a = 0 | 16 * Math.random(), o[t] = r[19 == t ? 3 & a | 8 : a]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync(Y[27976]);var n = wx.getStorageSync(Y[27977]);var r = wx.getStorageSync(Y[27979]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: r, uuid: e, idfv: n, mac: Y[28034], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : Y[28035], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: Y[110] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, n) {
      var r = this.getPublicData();for (var t in n) r[t] = n[t];console.log(Y[28036] + e), console.log(r), wx.request({ url: Y[28058] + HOST + Y[28037] + e + Y[28038] + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {
      sdk.downloadClient();
    } };
}function run(e, n, r) {
  e in $mT85FC && $mT85FC[e](n, r);
}exports.init = function (e, n) {
  run(Y[444], e, n);
}, exports.login = function (e) {
  run(Y[621], "", e);
}, exports.login = function (e) {
  run(Y[621], "", e);
}, exports.pay = function (e, n) {
  run(Y[672], e, n);
}, exports.openService = function () {
  run(Y[686]);
}, exports.logCreateRole = function (e, n, r, t, o) {
  run(Y[680], { serverid: e, servername: n, roleid: r, rolename: t, rolelevel: o });
}, exports.logEnterGame = function (e, n, r, t, o) {
  run(Y[682], { serverid: e, servername: n, roleid: r, rolename: t, rolelevel: o });
}, exports.logRoleUpLevel = function (e, n, r, t, o) {
  run(Y[684], { serverid: e, servername: n, roleid: r, rolename: t, rolelevel: o });
}, exports.share = function (e) {
  run(Y[685], { type: e });
}, exports.msgCheck = function (e, n) {
  run(Y[574], e, n);
}, exports.downloadClient = function () {
  run(Y[28046]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(Y[28047]);
}, exports.weiduanHelper = function () {
  run(Y[688]);
};