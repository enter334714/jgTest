var b = wx.$e;
import SDKyyw from "./eeehelp";var config = { game_id: b[43371], game_pkg: b[43372], partner_id: b[43373], game_ver: b[43374], is_auth: !1, from: null, tmpId: {} };window.config = config;var partner_config = { app_id: 1000207, app_key: b[43375] };var E$32AJP = E$3AJ2P();var HOST = b[43376];var E$3APJ2 = null;var E$3AP2J = null;var E$3AJP2 = null;var partner_user_info = null;function E$3AJ2P() {
  var n = {};return { order_data: {}, init: function (e, t) {
      var r = e && e.game_ver ? e.game_ver : 0;console.log(b[43377]);var a = this;var n;n = (o = wx.getStorageSync(b[43378])) ? 0 : (o = a.uuid(16, 32), wx.setStorageSync(b[43378], o), 1), (e = wx.getStorageSync(b[43379])) || (e = a.uuid(16, 32), wx.setStorageSync(b[43379], e));var o = wx.getLaunchOptionsSync();e = o.scene || "";n && o.query && o.query.ad_code && wx.setStorageSync(b[43380], o.query.ad_code), a.log(b[43381], { install: n, scene: e }), wx.showShareMenu();a = o.query && o.query.invite ? o.query.invite : "";o = o.query && o.query.invite_type ? o.query.invite_type : "";a && (E$3AP2J = { invite: a, invite_type: o, is_new: n, scene: e }), r && this.checkGameVersion(r, function (e) {
        t && t(e);
      });
    }, login: function (e, t) {
      console.log(b[43382]);var r = this;n.login = b[43176] == typeof t ? t : null, SDKyyw.initLoginCallback = e => {
        if (console.log(b[43383] + JSON.stringify(e)), 0 == e.status) return console.log(b[43384]), void t(1, { errMsg: b[43385] });partner_user_info = e.data, r.do_login(partner_user_info);
      }, SDKyyw.init(partner_config.app_id, partner_config.app_key);
    }, do_login: function (e) {
      var r = this;var t = r.getPublicData();if (t.nick_name = e ? e.nick_name : "", t.head_img = e ? e.head_img : "", E$3AP2J && b[30026] == typeof E$3AP2J) for (var a in E$3AP2J) t[a] = E$3AP2J[a];t.partner_uid = e.uid, wx.request({ url: b[43386] + HOST + b[43387], method: b[43388], dataType: b[43389], header: { "content-type": b[43310] }, data: t, success: function (e) {
          if (console.log(b[43390] + JSON.stringify(e)), 200 == e.statusCode) {
            var t = e.data;if (t.state) {
              e = { userid: t.data.user_id, account: t.data.nick_name, token: t.data.token, invite_uid: t.data.invite_uid || "", invite_nickname: t.data.invite_nickname || "", invite_head_img: t.data.invite_head_img || "", head_img: t.data.head_img || "", is_client: t.data.is_client || "0", ios_pay: t.data.ios_pay || "0" };try {
                wx.setStorageSync(b[43391], t.data.sdk_token), wx.setStorageSync(b[43392], t.data.user_id), wx.setStorageSync(b[43393], t.data.username), t.data.ext && wx.setStorageSync(b[43394], t.data.ext);
              } catch (e) {}n.login && n.login(0, e);
            } else n.login && n.login(1, { errMsg: t.msg });r.getShareInfo(b[43395], function (e) {
              console.log(b[43396]), wx.onShareAppMessage(function () {
                return r.logStartShare(b[43395]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else n.login && n.login(1, { errMsg: b[43397] });
        } });
    }, share: function (e) {
      n.share = b[43176] == typeof callback ? callback : null;var t = e.type || b[43360];console.log(b[43398] + t);var r = this;this.getShareInfo(t, function (e) {
        r.logStartShare(t), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var t = wx.getStorageSync(b[43391]);wx.request({ url: b[43386] + HOST + b[43399], method: b[43388], dataType: b[43389], header: { "content-type": b[43310] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, server_id: E$3APJ2 ? E$3APJ2.server_id : "", role_id: E$3APJ2 ? E$3APJ2.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, r) {
      console.log(b[43400]);wx.getStorageSync(b[43391]);wx.request({ url: b[43386] + HOST + b[43401], method: b[43388], dataType: b[43389], header: { "content-type": b[43310] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var t;console.log(b[43402]), console.log(e), 200 == e.statusCode && (t = e.data).state ? r && r(t.data) : r && r({ develop: 0 });
        } });
    }, getShareInfo: function (e, t) {
      console.log(b[43403]);var r = wx.getStorageSync(b[43391]);wx.request({ url: b[43386] + HOST + b[43404], method: b[43388], dataType: b[43389], header: { "content-type": b[43310] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: E$3APJ2 ? E$3APJ2.server_id : "", role_id: E$3APJ2 ? E$3APJ2.role_id : "", no_log: 1 }, success: function (e) {
          console.log(b[43405]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? t && t(e.data) : n.share && n.share(1, { errMsg: b[43406] + e.msg }) : n.share && n.share(1, { errMsg: b[43407] });
        } });
    }, updateShare: function (e, t, r, a, n, o) {
      console.log(b[43408]);var i = wx.getStorageSync(b[43391]);wx.request({ url: b[43386] + HOST + b[43409], method: b[43388], dataType: b[43389], header: { "content-type": b[43310] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: t, is_new: r, role_id: a, sever_id: n, scene: o }, success: function (e) {
          console.log(b[43410]), console.log(e);
        } });
    }, pay: function (e, t) {
      var r = this;wx.checkSession({ success: function () {
          r.startPay(e, t);
        }, fail: function () {
          console.log(b[43411]), r.login({}, function () {
            r.startPay(e, t);
          });
        } });
    }, startPay: function (e, t) {
      console.log(b[43412]), console.log(e);n.pay = b[43176] == typeof t ? t : null;var r = wx.getStorageSync(b[43391]);var a = wx.getStorageSync(b[43394]);r || a ? (t = wx.getSystemInfoSync(), a = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, session_key: a, platform: t.platform }, this.order_data = a, (t = this.getPublicData()).order_data = JSON.stringify(a), wx.request({ url: b[43386] + HOST + b[43413], method: b[43388], dataType: b[43389], header: { "content-type": b[43310] }, data: t, success: function (t) {
          if (console.log(b[43414] + JSON.stringify(t)), 200 == t.statusCode) {
            t = t.data;if (t.state) {
              SDKyyw.onPayCallback = e => {};let e = {};e.serverId = t.data.pay_data.serverId, e.serverName = t.data.pay_data.serverName, e.roleId = t.data.pay_data.roleId, e.roleName = t.data.pay_data.roleName, e.roleLevel = t.data.pay_data.roleLevel, e.gameOrderid = t.data.pay_data.orderId, e.pext = t.data.pay_data.orderId, e.money = t.data.pay_data.amount, e.productName = t.data.pay_data.productName, e.productId = t.data.pay_data.productId, console.log(b[43415] + JSON.stringify(e)), SDKyyw.pay(e);
            } else n.pay && n.pay(1, { errMsg: t.msg });
          } else n.login && n.login(1, { errMsg: b[43397] });
        } })) : n.pay && n.pay(1, { errMsg: b[43416] });
    }, logCreateRole: function (e) {
      var t = wx.getStorageSync(b[43392]);var r = wx.getStorageSync(b[43393]);var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (E$3APJ2 = { role_id: e.roleid, server_id: e.serverid }), this.log(b[30044], a);let n = {};n.type = 2, n.roleId = e.roleid, n.roleName = e.rolename, SDKyyw.pushData(n);
    }, logEnterGame: function (e) {
      var t = wx.getStorageSync(b[43392]);var r = wx.getStorageSync(b[43393]);var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (E$3APJ2 = { role_id: e.roleid, server_id: e.serverid }), this.log(b[43417], a), E$3AP2J && this.updateShare(E$3AP2J.invite, E$3AP2J.invite_type, E$3AP2J.is_new, e.roleid, e.serverid, E$3AP2J.scene);let n = {};n.type = 1, n.roleId = e.roleid, n.roleName = e.rolename, SDKyyw.pushData(n);let o = {};o.type = 5, o.roleId = e.roleid, o.roleName = e.rolename, SDKyyw.pushData(o);
    }, logRoleUpLevel: function (e) {
      var t = wx.getStorageSync(b[43392]);var r = wx.getStorageSync(b[43393]);var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (E$3APJ2 = { role_id: e.roleid, server_id: e.serverid }), this.log(b[43418], a);
    }, uuid: function (e, t) {
      var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var a,
          n = [];var o;if (e = e || r.length, t) for (a = 0; a < t; a++) n[a] = r[0 | Math.random() * e];else for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", a = 0; a < 36; a++) n[a] || (o = 0 | 16 * Math.random(), n[a] = r[19 == a ? 3 & o | 8 : o]);return n.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var t = wx.getStorageSync(b[43378]);var r = wx.getStorageSync(b[43379]);var a = wx.getStorageSync(b[43380]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, is_from_min: 1, ad_code: a, uuid: t, idfv: r, dname: e.model, mac: b[43419], net_type: 0 == e.wifiSignal ? "4G" : b[43420], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: b[43201] == e.platform ? 1 : 2 };
    }, log: function (e, t) {
      var r = this.getPublicData();for (var a in t) r[a] = t[a];console.log(b[43421] + e), console.log(r), wx.request({ url: b[43386] + HOST + b[43422] + e + b[43423] + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, getLaunchOptionsSync: function (e) {
      var t = SDKyyw.getLaunchOptionsSync();e(t), console.log(b[43424] + JSON.stringify(t));
    }, msgCheck: function (e, r) {
      SDKyyw.msgSecCheck(e, function (e) {
        console.log(b[43425] + JSON.stringify(e));let t = { data: {} };0 == e.errcode ? (t.statusCode = 200, t.data.state = 1) : (t.statusCode = 0, t.data.state = 0), r && r(t);
      });
    } };
}function run(e, t, r) {
  e in E$32AJP && E$32AJP[e](t, r);
}exports.init = function (e, t) {
  run(b[41301], e, t);
}, exports.login = function (e) {
  run(b[43284], "", e);
}, exports.login = function (e) {
  run(b[43284], "", e);
}, exports.pay = function (e, t) {
  run(b[43426], e, t);
}, exports.openService = function () {
  run(b[43427]);
}, exports.logCreateRole = function (e, t, r, a, n) {
  run(b[43428], { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n });
}, exports.logEnterGame = function (e, t, r, a, n) {
  run("logEnterGame", { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n });
}, exports.logRoleUpLevel = function (e, t, r, a, n) {
  run(b[43429], { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n });
}, exports.share = function (e) {
  run(b[43360], { type: e });
}, exports.downloadClient = function () {
  run(b[43430]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getLaunchOptionsSync = function (e) {
  run(b[43431], e);
}, exports.msgCheck = function (e, t) {
  run(b[43432], e, t);
};