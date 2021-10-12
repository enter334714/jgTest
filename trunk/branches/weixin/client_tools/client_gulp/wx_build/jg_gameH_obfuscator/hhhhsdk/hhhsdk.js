var O = wx.$C;
import sdk from "./hhhhelp.js";var config = { game_id: 256, game_pkg: O[574], partner_label: O[575], partner_id: O[576], game_ver: O[577], is_auth: !1, partner_app_id: 28, partner_mp_id: O[578] };window.config = config;var $h0P5O6 = $h05OP6();var HOST = O[579];var $h056OP = null;var $h056PO = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var partner_user_info = null;function $h05OP6() {
  var o = {};return { order_data: {}, init: function (e, r) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log(O[580]);var a = this;var o;o = (n = wx.getStorageSync(O[581])) ? 0 : (n = a.uuid(16, 32), wx.setStorageSync(O[581], n), 1), (e = wx.getStorageSync(O[582])) || (e = a.uuid(16, 32), wx.setStorageSync(O[582], e));var n = wx.getLaunchOptionsSync();e = n.scene || "";o && n.query && n.query.ad_code && wx.setStorageSync(O[583], n.query.ad_code), a.log(O[584], { install: o, scene: e }), wx.showShareMenu();a = n.query && n.query.invite ? n.query.invite : "";n = n.query && n.query.invite_type ? n.query.invite_type : "";a && ($h056PO = { invite: a, invite_type: n, is_new: o, scene: e }), t && this.checkGameVersion(t, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log(O[585]), o.login = O[94] == typeof r ? r : null;var t = this;let a = wx.getLaunchOptionsSync();sdk.init({ app_id: config.partner_app_id, mp_id: config.partner_mp_id, showLoading: !1 }).then(e => {
        sdk.login({ data: { state: a.query.state || a.query.scene || "" }, confg: { showLoading: !1 } }).then(e => {
          partner_user_info = e.data, t.do_login(e.data), console.log(O[586] + JSON.stringify(e));
        });
      });
    }, do_login: function (e) {
      var t = this;var r = t.getPublicData();if (r.user_info = JSON.stringify(e), $h056PO && O[11] == typeof $h056PO) for (var a in $h056PO) r[a] = $h056PO[a];wx.request({ url: O[587] + HOST + O[588], method: O[503], dataType: O[221], header: { "content-type": O[504] }, data: r, success: function (e) {
          if (console.log(O[589] + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync(O[590], r.data.sdk_token), wx.setStorageSync(O[591], r.data.user_id), wx.setStorageSync(O[592], r.data.username), r.data.ext && wx.setStorageSync(O[593], r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };o.login && o.login(0, e);
            } else o.login && o.login(1, { errMsg: r.msg });t.getShareInfo(O[594], function (e) {
              console.log(O[595]), wx.onShareAppMessage(function () {
                return t.logStartShare(O[594]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: O[596] });
        } });
    }, share: function (e) {
      o.share = O[94] == typeof callback ? callback : null;var t = e.type || O[597];console.log(O[598] + t);var a = this;this.getShareInfo(t, function (e) {
        a.logStartShare(t);var r = e.query;sdk.getShareInfo({ data: { path: O[599] } }).then(e => {
          wx.onShareAppMessage(function () {
            return { title: e.data.title, imageUrl: e.data.image, query: `state=${e.data.state}` + "&" + r };
          });
        });
      }), sdk.addShareInfo({ data: { to_target: "wx" } }).then(e => {});
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(O[590]);wx.request({ url: O[587] + HOST + O[600], method: O[503], dataType: O[221], header: { "content-type": O[504] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: $h056OP ? $h056OP.server_id : "", role_id: $h056OP ? $h056OP.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log(O[601]);wx.getStorageSync(O[590]);wx.request({ url: O[587] + HOST + O[602], method: O[503], dataType: O[221], header: { "content-type": O[504] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(O[603] + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? t && t(r.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log(O[604]);var t = wx.getStorageSync(O[590]);wx.request({ url: O[587] + HOST + O[605], method: O[503], dataType: O[221], header: { "content-type": O[504] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: $h056OP ? $h056OP.server_id : "", role_id: $h056OP ? $h056OP.role_id : "", no_log: 1 }, success: function (e) {
          console.log(O[606]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : o.share && o.share(1, { errMsg: O[607] + e.msg }) : o.share && o.share(1, { errMsg: O[608] });
        } });
    }, updateShare: function (e, r, t, a, o, n) {
      console.log(O[609]);var i = wx.getStorageSync(O[590]);wx.request({ url: O[587] + HOST + O[610], method: O[503], dataType: O[221], header: { "content-type": O[504] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: t, role_id: a, sever_id: o, scene: n }, success: function (e) {
          console.log(O[611] + JSON.stringify(e));
        } });
    }, msgCheck: function (e, r) {
      console.log(O[612] + e);let t = { data: {} };sdk.checkMsg({ data: { content: e } }).then(e => {
        console.log(O[613] + JSON.stringify(e)), O[526] == e.msg ? (t.statusCode = 200, t.data.state = 1) : (t.statusCode = 0, t.data.state = 0), r && r(t);
      }, e => {
        console.log(e), t.statusCode = 0, t.data.state = 0, r && r(t);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log(O[614] + JSON.stringify(e));o.pay = O[94] == typeof r ? r : null;var t = wx.getStorageSync(O[590]);r = wx.getStorageSync(O[593]);t ? (t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: r, platform: platform }, this.order_data = t, (r = this.getPublicData()).order_data = JSON.stringify(t), wx.request({ url: O[587] + HOST + O[615], method: O[503], dataType: O[221], header: { "content-type": O[504] }, data: r, success: function (e) {
          console.log(O[616] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.checkPay({ data: { "order-currency": O[617], "order-cp_order_id": e.data.pay_data.orderId, "order-product_price": e.data.pay_data.amount, "order-product_id": e.data.pay_data.productId, "order-product_cnt": 1, "order-product_name": e.data.pay_data.productName, "order-product_desc": e.data.pay_data.productDec, "order-ext": e.data.pay_data.orderId, "role-event": "5", "role-server_id": e.data.pay_data.serverId, "role-server_name": e.data.pay_data.serverName, "role-role_id": e.data.pay_data.roleId, "role-role_name": e.data.pay_data.roleName, "role-role_level": e.data.pay_data.roleLevel, "role-role_vip": 0 } }).then(e => {
            console.log(O[618] + JSON.stringify(e));
          }) : o.pay && o.pay(1, { errMsg: e.msg }) : o.login && o.login(1, { errMsg: O[596] });
        } })) : o.pay && o.pay(1, { errMsg: O[619] });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync(O[591]);var t = wx.getStorageSync(O[592]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($h056OP = { role_id: e.roleid, server_id: e.serverid }), this.log(O[12], a), sdk.updateRole({ data: { "role-event": "2", "role-server_id": e.serverid, "role-server_name": e.servername, "role-role_id": e.roleid, "role-role_name": e.rolename, "role-role_level": e.rolelevel, "role-role_vip": 0, "role-combat_num": 0 } }).then(e => {}, e => {});
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync(O[591]);var t = wx.getStorageSync(O[592]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($h056OP = { role_id: e.roleid, server_id: e.serverid }), this.log(O[620], a), $h056PO && this.updateShare($h056PO.invite, $h056PO.invite_type, $h056PO.is_new, e.roleid, e.serverid, $h056PO.scene), sdk.updateRole({ data: { "role-event": "1", "role-server_id": e.serverid, "role-server_name": e.servername, "role-role_id": e.roleid, "role-role_name": e.rolename, "role-role_level": e.rolelevel, "role-role_vip": 0, "role-combat_num": 0 } }).then(e => {}, e => {});
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync(O[591]);var t = wx.getStorageSync(O[592]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($h056OP = { role_id: e.roleid, server_id: e.serverid }), this.log(O[621], a);
    }, uuid: function (e, r) {
      var t = O[622].split("");var a,
          o = [];var n;if (e = e || t.length, r) for (a = 0; a < r; a++) o[a] = t[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", a = 0; a < 36; a++) o[a] || (n = 0 | 16 * Math.random(), o[a] = t[19 == a ? 3 & n | 8 : n]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync(O[581]);var r = wx.getStorageSync(O[582]);var t = wx.getStorageSync(O[583]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: t, uuid: e, idfv: r, mac: O[623], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : O[624], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: O[498] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var t = this.getPublicData();for (var a in r) t[a] = r[a];console.log(O[625] + e), console.log(t), wx.request({ url: O[587] + HOST + O[626] + e + O[627] + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {}, setMessageToFriendQuery: function (e, r) {
      e = e.activity_id;r(wx.setMessageToFriendQuery({ shareMessageToFriendScene: e }));
    } };
}function run(e, r, t) {
  e in $h0P5O6 && $h0P5O6[e](r, t);
}exports.init = function (e, r) {
  run(O[628], e, r);
}, exports.login = function (e) {
  run(O[629], "", e);
}, exports.login = function (e) {
  run(O[629], "", e);
}, exports.pay = function (e, r) {
  run(O[630], e, r);
}, exports.openService = function () {
  run(O[631]);
}, exports.logCreateRole = function (e, r, t, a, o) {
  run(O[632], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: o });
}, exports.logEnterGame = function (e, r, t, a, o) {
  run(O[633], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: o });
}, exports.logRoleUpLevel = function (e, r, t, a, o) {
  run(O[634], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: o });
}, exports.share = function (e) {
  run(O[597], { type: e });
}, exports.msgCheck = function (e, r) {
  run(O[635], e, r);
}, exports.downloadClient = function () {
  run(O[636]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(O[637]);
}, exports.weiduanHelper = function () {
  run(O[638]);
}, exports.setMessageToFriendQuery = function (e, r) {
  run(O[639], e, r);
};