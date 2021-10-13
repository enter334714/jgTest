var Q = wx.$I;
import sdk from "./iiiiHELP.js";var config = { game_id: 256, game_pkg: Q[39875], partner_label: Q[39876], partner_id: Q[39877], game_ver: Q[39878], is_auth: !1, partner_app_id: 26, partner_mp_id: Q[39879] };window.config = config;var $i9KWBT = $i9WBKT();var HOST = Q[39880];var $i9WTBK = null;var $i9WTKB = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var partner_user_info = null;function $i9WBKT() {
  var o = {};return { order_data: {}, init: function (e, r) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log(Q[39881]);var a = this;var o;o = (n = wx.getStorageSync(Q[39882])) ? 0 : (n = a.uuid(16, 32), wx.setStorageSync(Q[39882], n), 1), (e = wx.getStorageSync(Q[39883])) || (e = a.uuid(16, 32), wx.setStorageSync(Q[39883], e));var n = wx.getLaunchOptionsSync();e = n.scene || "";o && n.query && n.query.ad_code && wx.setStorageSync(Q[39884], n.query.ad_code), a.log(Q[284], { install: o, scene: e }), wx.showShareMenu();a = n.query && n.query.invite ? n.query.invite : "";n = n.query && n.query.invite_type ? n.query.invite_type : "";a && ($i9WTKB = { invite: a, invite_type: n, is_new: o, scene: e }), t && this.checkGameVersion(t, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log(Q[39885]), o.login = Q[39479] == typeof r ? r : null;var t = this;let a = wx.getLaunchOptionsSync();sdk.init({ app_id: config.partner_app_id, mp_id: config.partner_mp_id, showLoading: !1 }).then(e => {
        sdk.login({ data: { state: a.query.state || a.query.scene || "" }, confg: { showLoading: !1 } }).then(e => {
          partner_user_info = e.data, t.do_login(e.data), console.log(Q[39886] + JSON.stringify(e));
        });
      });
    }, do_login: function (e) {
      var t = this;var r = t.getPublicData();if (r.user_info = JSON.stringify(e), $i9WTKB && Q[279] == typeof $i9WTKB) for (var a in $i9WTKB) r[a] = $i9WTKB[a];wx.request({ url: Q[39887] + HOST + Q[39888], method: Q[39815], dataType: Q[5731], header: { "content-type": Q[39816] }, data: r, success: function (e) {
          if (console.log(Q[39889] + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync(Q[39890], r.data.sdk_token), wx.setStorageSync(Q[39891], r.data.user_id), wx.setStorageSync(Q[39892], r.data.username), r.data.ext && wx.setStorageSync(Q[39893], r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };o.login && o.login(0, e);
            } else o.login && o.login(1, { errMsg: r.msg });t.getShareInfo(Q[39894], function (e) {
              console.log(Q[39895]), wx.onShareAppMessage(function () {
                return t.logStartShare(Q[39894]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: Q[39896] });
        } });
    }, share: function (e) {
      o.share = Q[39479] == typeof callback ? callback : null;var t = e.type || Q[39897];console.log(Q[39898] + t);var a = this;this.getShareInfo(t, function (e) {
        a.logStartShare(t);var r = e.query;sdk.getShareInfo({ data: { path: Q[39899] } }).then(e => {
          wx.onShareAppMessage(function () {
            return { title: e.data.title, imageUrl: e.data.image, query: `state=${e.data.state}` + "&" + r };
          });
        });
      }), sdk.addShareInfo({ data: { to_target: "wx" } }).then(e => {});
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(Q[39890]);wx.request({ url: Q[39887] + HOST + Q[39900], method: Q[39815], dataType: Q[5731], header: { "content-type": Q[39816] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: $i9WTBK ? $i9WTBK.server_id : "", role_id: $i9WTBK ? $i9WTBK.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log(Q[39901]);wx.getStorageSync(Q[39890]);wx.request({ url: Q[39887] + HOST + Q[39902], method: Q[39815], dataType: Q[5731], header: { "content-type": Q[39816] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(Q[39903] + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? t && t(r.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log(Q[39904]);var t = wx.getStorageSync(Q[39890]);wx.request({ url: Q[39887] + HOST + Q[39905], method: Q[39815], dataType: Q[5731], header: { "content-type": Q[39816] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: $i9WTBK ? $i9WTBK.server_id : "", role_id: $i9WTBK ? $i9WTBK.role_id : "", no_log: 1 }, success: function (e) {
          console.log(Q[39906]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : o.share && o.share(1, { errMsg: Q[39907] + e.msg }) : o.share && o.share(1, { errMsg: Q[39908] });
        } });
    }, updateShare: function (e, r, t, a, o, n) {
      console.log(Q[39909]);var i = wx.getStorageSync(Q[39890]);wx.request({ url: Q[39887] + HOST + Q[39910], method: Q[39815], dataType: Q[5731], header: { "content-type": Q[39816] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: t, role_id: a, sever_id: o, scene: n }, success: function (e) {
          console.log(Q[39911] + JSON.stringify(e));
        } });
    }, msgCheck: function (e, r) {
      console.log(Q[39912] + e);let t = { data: {} };sdk.checkMsg({ data: { content: e } }).then(e => {
        console.log(Q[39913] + JSON.stringify(e)), Q[11966] == e.msg ? (t.statusCode = 200, t.data.state = 1) : (t.statusCode = 0, t.data.state = 0), r && r(t);
      }, e => {
        console.log(e), t.statusCode = 0, t.data.state = 0, r && r(t);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log(Q[39914] + JSON.stringify(e));o.pay = Q[39479] == typeof r ? r : null;var t = wx.getStorageSync(Q[39890]);r = wx.getStorageSync(Q[39893]);t ? (t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: r, platform: platform }, this.order_data = t, (r = this.getPublicData()).order_data = JSON.stringify(t), wx.request({ url: Q[39887] + HOST + Q[39915], method: Q[39815], dataType: Q[5731], header: { "content-type": Q[39816] }, data: r, success: function (e) {
          console.log(Q[39916] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.checkPay({ data: { "order-currency": Q[39917], "order-cp_order_id": e.data.pay_data.orderId, "order-product_price": e.data.pay_data.amount, "order-product_id": e.data.pay_data.productId, "order-product_cnt": 1, "order-product_name": e.data.pay_data.productName, "order-product_desc": e.data.pay_data.productDec, "order-ext": e.data.pay_data.orderId, "role-event": "5", "role-server_id": e.data.pay_data.serverId, "role-server_name": e.data.pay_data.serverName, "role-role_id": e.data.pay_data.roleId, "role-role_name": e.data.pay_data.roleName, "role-role_level": e.data.pay_data.roleLevel, "role-role_vip": 0 } }).then(e => {
            console.log(Q[39918] + JSON.stringify(e));
          }) : o.pay && o.pay(1, { errMsg: e.msg }) : o.login && o.login(1, { errMsg: Q[39896] });
        } })) : o.pay && o.pay(1, { errMsg: Q[39919] });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync(Q[39891]);var t = wx.getStorageSync(Q[39892]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($i9WTBK = { role_id: e.roleid, server_id: e.serverid }), this.log(Q[6], a), sdk.updateRole({ data: { "role-event": "2", "role-server_id": e.serverid, "role-server_name": e.servername, "role-role_id": e.roleid, "role-role_name": e.rolename, "role-role_level": e.rolelevel, "role-role_vip": 0, "role-combat_num": 0 } }).then(e => {}, e => {});
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync(Q[39891]);var t = wx.getStorageSync(Q[39892]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($i9WTBK = { role_id: e.roleid, server_id: e.serverid }), this.log(Q[5600], a), $i9WTKB && this.updateShare($i9WTKB.invite, $i9WTKB.invite_type, $i9WTKB.is_new, e.roleid, e.serverid, $i9WTKB.scene), sdk.updateRole({ data: { "role-event": "1", "role-server_id": e.serverid, "role-server_name": e.servername, "role-role_id": e.roleid, "role-role_name": e.rolename, "role-role_level": e.rolelevel, "role-role_vip": 0, "role-combat_num": 0 } }).then(e => {}, e => {});
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync(Q[39891]);var t = wx.getStorageSync(Q[39892]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($i9WTBK = { role_id: e.roleid, server_id: e.serverid }), this.log(Q[39920], a);
    }, uuid: function (e, r) {
      var t = Q[39921].split("");var a,
          o = [];var n;if (e = e || t.length, r) for (a = 0; a < r; a++) o[a] = t[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", a = 0; a < 36; a++) o[a] || (n = 0 | 16 * Math.random(), o[a] = t[19 == a ? 3 & n | 8 : n]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync(Q[39882]);var r = wx.getStorageSync(Q[39883]);var t = wx.getStorageSync(Q[39884]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: t, uuid: e, idfv: r, mac: Q[39922], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : Q[39923], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: Q[39810] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var t = this.getPublicData();for (var a in r) t[a] = r[a];console.log(Q[39924] + e), console.log(t), wx.request({ url: Q[39887] + HOST + Q[39925] + e + Q[39926] + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {}, setMessageToFriendQuery: function (e, r) {
      e = e.activity_id;r(wx.setMessageToFriendQuery({ shareMessageToFriendScene: e }));
    } };
}function run(e, r, t) {
  e in $i9KWBT && $i9KWBT[e](r, t);
}exports.init = function (e, r) {
  run(Q[364], e, r);
}, exports.login = function (e) {
  run(Q[39927], "", e);
}, exports.login = function (e) {
  run(Q[39927], "", e);
}, exports.pay = function (e, r) {
  run(Q[39928], e, r);
}, exports.openService = function () {
  run(Q[34453]);
}, exports.logCreateRole = function (e, r, t, a, o) {
  run(Q[39929], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: o });
}, exports.logEnterGame = function (e, r, t, a, o) {
  run(Q[39930], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: o });
}, exports.logRoleUpLevel = function (e, r, t, a, o) {
  run(Q[39931], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: o });
}, exports.share = function (e) {
  run(Q[39897], { type: e });
}, exports.msgCheck = function (e, r) {
  run(Q[14682], e, r);
}, exports.downloadClient = function () {
  run(Q[39932]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(Q[39933]);
}, exports.weiduanHelper = function () {
  run(Q[33290]);
}, exports.setMessageToFriendQuery = function (e, r) {
  run(Q[39934], e, r);
};