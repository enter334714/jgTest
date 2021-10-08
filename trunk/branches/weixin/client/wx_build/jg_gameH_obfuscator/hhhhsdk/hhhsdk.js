var O = wx.$C;
import sdk from "./hhhhelp.js";var config = { game_id: 256, game_pkg: O[27251], partner_label: O[27252], partner_id: O[27253], game_ver: O[27254], is_auth: !1, partner_app_id: 28, partner_mp_id: O[27255] };window.config = config;var $h8GKA1 = $h8KAG1();var HOST = O[27256];var $h8K1AG = null;var $h8K1GA = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var partner_user_info = null;function $h8KAG1() {
  var o = {};return { order_data: {}, init: function (e, r) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log(O[27257]);var a = this;var o;o = (n = wx.getStorageSync(O[27258])) ? 0 : (n = a.uuid(16, 32), wx.setStorageSync(O[27258], n), 1), (e = wx.getStorageSync(O[27259])) || (e = a.uuid(16, 32), wx.setStorageSync(O[27259], e));var n = wx.getLaunchOptionsSync();e = n.scene || "";o && n.query && n.query.ad_code && wx.setStorageSync(O[27260], n.query.ad_code), a.log(O[284], { install: o, scene: e }), wx.showShareMenu();a = n.query && n.query.invite ? n.query.invite : "";n = n.query && n.query.invite_type ? n.query.invite_type : "";a && ($h8K1GA = { invite: a, invite_type: n, is_new: o, scene: e }), t && this.checkGameVersion(t, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log(O[27261]), o.login = O[26855] == typeof r ? r : null;var t = this;let a = wx.getLaunchOptionsSync();sdk.init({ app_id: config.partner_app_id, mp_id: config.partner_mp_id, showLoading: !1 }).then(e => {
        sdk.login({ data: { state: a.query.state || a.query.scene || "" }, confg: { showLoading: !1 } }).then(e => {
          partner_user_info = e.data, t.do_login(e.data), console.log(O[27262] + JSON.stringify(e));
        });
      });
    }, do_login: function (e) {
      var t = this;var r = t.getPublicData();if (r.user_info = JSON.stringify(e), $h8K1GA && O[279] == typeof $h8K1GA) for (var a in $h8K1GA) r[a] = $h8K1GA[a];wx.request({ url: O[27263] + HOST + O[27264], method: O[27190], dataType: O[5680], header: { "content-type": O[27191] }, data: r, success: function (e) {
          if (console.log(O[27265] + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync(O[27266], r.data.sdk_token), wx.setStorageSync(O[27267], r.data.user_id), wx.setStorageSync(O[27268], r.data.username), r.data.ext && wx.setStorageSync(O[27269], r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };o.login && o.login(0, e);
            } else o.login && o.login(1, { errMsg: r.msg });t.getShareInfo(O[27270], function (e) {
              console.log(O[27271]), wx.onShareAppMessage(function () {
                return t.logStartShare(O[27270]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: O[27272] });
        } });
    }, share: function (e) {
      o.share = O[26855] == typeof callback ? callback : null;var t = e.type || O[27273];console.log(O[27274] + t);var a = this;this.getShareInfo(t, function (e) {
        a.logStartShare(t);var r = e.query;sdk.getShareInfo({ data: { path: O[27275] } }).then(e => {
          wx.onShareAppMessage(function () {
            return { title: e.data.title, imageUrl: e.data.image, query: `state=${e.data.state}` + "&" + r };
          });
        });
      }), sdk.addShareInfo({ data: { to_target: "wx" } }).then(e => {});
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(O[27266]);wx.request({ url: O[27263] + HOST + O[27276], method: O[27190], dataType: O[5680], header: { "content-type": O[27191] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: $h8K1AG ? $h8K1AG.server_id : "", role_id: $h8K1AG ? $h8K1AG.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log(O[27277]);wx.getStorageSync(O[27266]);wx.request({ url: O[27263] + HOST + O[27278], method: O[27190], dataType: O[5680], header: { "content-type": O[27191] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(O[27279] + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? t && t(r.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log(O[27280]);var t = wx.getStorageSync(O[27266]);wx.request({ url: O[27263] + HOST + O[27281], method: O[27190], dataType: O[5680], header: { "content-type": O[27191] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: $h8K1AG ? $h8K1AG.server_id : "", role_id: $h8K1AG ? $h8K1AG.role_id : "", no_log: 1 }, success: function (e) {
          console.log(O[27282]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : o.share && o.share(1, { errMsg: O[27283] + e.msg }) : o.share && o.share(1, { errMsg: O[27284] });
        } });
    }, updateShare: function (e, r, t, a, o, n) {
      console.log(O[27285]);var i = wx.getStorageSync(O[27266]);wx.request({ url: O[27263] + HOST + O[27286], method: O[27190], dataType: O[5680], header: { "content-type": O[27191] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: t, role_id: a, sever_id: o, scene: n }, success: function (e) {
          console.log(O[27287] + JSON.stringify(e));
        } });
    }, msgCheck: function (e, r) {
      console.log(O[27288] + e);let t = { data: {} };sdk.checkMsg({ data: { content: e } }).then(e => {
        console.log(O[27289] + JSON.stringify(e)), O[9529] == e.msg ? (t.statusCode = 200, t.data.state = 1) : (t.statusCode = 0, t.data.state = 0), r && r(t);
      }, e => {
        console.log(e), t.statusCode = 0, t.data.state = 0, r && r(t);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log(O[27290] + JSON.stringify(e));o.pay = O[26855] == typeof r ? r : null;var t = wx.getStorageSync(O[27266]);r = wx.getStorageSync(O[27269]);t ? (t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: r, platform: platform }, this.order_data = t, (r = this.getPublicData()).order_data = JSON.stringify(t), wx.request({ url: O[27263] + HOST + O[27291], method: O[27190], dataType: O[5680], header: { "content-type": O[27191] }, data: r, success: function (e) {
          console.log(O[27292] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.checkPay({ data: { "order-currency": O[27293], "order-cp_order_id": e.data.pay_data.orderId, "order-product_price": e.data.pay_data.amount, "order-product_id": e.data.pay_data.productId, "order-product_cnt": 1, "order-product_name": e.data.pay_data.productName, "order-product_desc": e.data.pay_data.productDec, "order-ext": e.data.pay_data.orderId, "role-event": "5", "role-server_id": e.data.pay_data.serverId, "role-server_name": e.data.pay_data.serverName, "role-role_id": e.data.pay_data.roleId, "role-role_name": e.data.pay_data.roleName, "role-role_level": e.data.pay_data.roleLevel, "role-role_vip": 0 } }).then(e => {
            console.log(O[27294] + JSON.stringify(e));
          }) : o.pay && o.pay(1, { errMsg: e.msg }) : o.login && o.login(1, { errMsg: O[27272] });
        } })) : o.pay && o.pay(1, { errMsg: O[27295] });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync(O[27267]);var t = wx.getStorageSync(O[27268]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($h8K1AG = { role_id: e.roleid, server_id: e.serverid }), this.log(O[6], a), sdk.updateRole({ data: { "role-event": "2", "role-server_id": e.serverid, "role-server_name": e.servername, "role-role_id": e.roleid, "role-role_name": e.rolename, "role-role_level": e.rolelevel, "role-role_vip": 0, "role-combat_num": 0 } }).then(e => {}, e => {});
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync(O[27267]);var t = wx.getStorageSync(O[27268]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($h8K1AG = { role_id: e.roleid, server_id: e.serverid }), this.log(O[5565], a), $h8K1GA && this.updateShare($h8K1GA.invite, $h8K1GA.invite_type, $h8K1GA.is_new, e.roleid, e.serverid, $h8K1GA.scene), sdk.updateRole({ data: { "role-event": "1", "role-server_id": e.serverid, "role-server_name": e.servername, "role-role_id": e.roleid, "role-role_name": e.rolename, "role-role_level": e.rolelevel, "role-role_vip": 0, "role-combat_num": 0 } }).then(e => {}, e => {});
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync(O[27267]);var t = wx.getStorageSync(O[27268]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($h8K1AG = { role_id: e.roleid, server_id: e.serverid }), this.log(O[27296], a);
    }, uuid: function (e, r) {
      var t = O[27297].split("");var a,
          o = [];var n;if (e = e || t.length, r) for (a = 0; a < r; a++) o[a] = t[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", a = 0; a < 36; a++) o[a] || (n = 0 | 16 * Math.random(), o[a] = t[19 == a ? 3 & n | 8 : n]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync(O[27258]);var r = wx.getStorageSync(O[27259]);var t = wx.getStorageSync(O[27260]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: t, uuid: e, idfv: r, mac: O[27298], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : O[27299], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: O[27185] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var t = this.getPublicData();for (var a in r) t[a] = r[a];console.log(O[27300] + e), console.log(t), wx.request({ url: O[27263] + HOST + O[27301] + e + O[27302] + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {}, setMessageToFriendQuery: function (e, r) {
      e = e.activity_id;r(wx.setMessageToFriendQuery({ shareMessageToFriendScene: e }));
    } };
}function run(e, r, t) {
  e in $h8GKA1 && $h8GKA1[e](r, t);
}exports.init = function (e, r) {
  run(O[364], e, r);
}, exports.login = function (e) {
  run(O[27303], "", e);
}, exports.login = function (e) {
  run(O[27303], "", e);
}, exports.pay = function (e, r) {
  run(O[27304], e, r);
}, exports.openService = function () {
  run(O[23502]);
}, exports.logCreateRole = function (e, r, t, a, o) {
  run(O[27305], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: o });
}, exports.logEnterGame = function (e, r, t, a, o) {
  run(O[27306], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: o });
}, exports.logRoleUpLevel = function (e, r, t, a, o) {
  run(O[27307], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: o });
}, exports.share = function (e) {
  run(O[27273], { type: e });
}, exports.msgCheck = function (e, r) {
  run(O[11443], e, r);
}, exports.downloadClient = function () {
  run(O[27308]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(O[27309]);
}, exports.weiduanHelper = function () {
  run(O[22588]);
}, exports.setMessageToFriendQuery = function (e, r) {
  run(O[27310], e, r);
};