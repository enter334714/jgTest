var O = wx.$C;
import sdk from "./hhhhelp.js";var config = { game_id: 256, game_pkg: O[0x70d0], partner_label: O[0x70d1], partner_id: O[0x70d2], game_ver: O[0x70d3], is_auth: !1, partner_app_id: 28, partner_mp_id: O[0x70d4] };window.config = config;var $hX6RYU = $hXRUY6();var HOST = O[0x70d5];var $hX6RUY = null;var $hXRYU6 = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var partner_user_info = null;var checkHandler = null;var loginHandler = null;var requestCallback = !1;function $hXRUY6() {
  var o = {};return { order_data: {}, init: function (e, r) {
      e = e && e.game_ver ? e.game_ver : 0;console.log(O[0x70d6]);var t = this;var a;a = wx.getStorageSync(O[0x70d7]) ? 0 : (a = t.uuid(16, 32), wx.setStorageSync(O[0x70d7], a), 1), wx.getStorageSync(O[0x70d8]) || (n = t.uuid(16, 32), wx.setStorageSync(O[0x70d8], n));var n = wx.getLaunchOptionsSync();var o = n.scene || "";a && n.query && n.query.ad_code && wx.setStorageSync(O[0x70d9], n.query.ad_code), t.log(O[0x11f], { install: a, scene: o }), wx.showShareMenu();t = n.query && n.query.invite ? n.query.invite : "";n = n.query && n.query.invite_type ? n.query.invite_type : "";t && ($hXRYU6 = { invite: t, invite_type: n, is_new: a, scene: o }), e && this.checkGameVersion(e, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log(O[0x70da]), o.login = O[0x70db] == typeof r ? r : null;var t = this;let a = wx.getLaunchOptionsSync();sdk.init({ app_id: config.partner_app_id, mp_id: config.partner_mp_id, showLoading: !1 }).then(e => {
        sdk.login({ data: { state: a.query.state || a.query.scene || "" }, confg: { showLoading: !1 } }).then(e => {
          partner_user_info = e.data, t.do_login(e.data), console.log(O[0x70dc] + JSON.stringify(e));
        });
      });
    }, do_login: function (e) {
      var a = this;var r = a.getPublicData();if (r.user_info = JSON.stringify(e), $hXRYU6 && O[0x11a] == typeof $hXRYU6) for (var t in $hXRYU6) r[t] = $hXRYU6[t];var n = Date.now();wx.request({ url: O[0x64bd] + HOST + O[0x70dd], method: O[0x7094], dataType: O[0x1708], header: { "content-type": O[0x7095] }, data: r, success: function (e) {
          if (console.log(O[0x70de] + JSON.stringify(e)), requestCallback = !0, loginHandler && clearTimeout(loginHandler), loginHandler = null, 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync(O[0x70df], r.data.sdk_token), wx.setStorageSync(O[0x70e0], r.data.user_id), wx.setStorageSync(O[0x70e1], r.data.username), r.data.ext && wx.setStorageSync(O[0x70e2], r.data.ext);
              } catch (e) {}var t = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };o.login && o.login(0, t);
            } else o.login && o.login(1, { type: O[0x70e3], errMsg: r.msg, time: Date.now() - n, res: e });a.getShareInfo(O[0x70e4], function (e) {
              console.log(O[0x70e5]), wx.onShareAppMessage(function () {
                return a.logStartShare(O[0x70e4]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { type: O[0x70e3], errMsg: O[0x70e6], time: Date.now() - n, res: e });
        }, fail: function (e) {
          console.log(O[0x70e7]), console.log(e), requestCallback = !0, loginHandler && clearTimeout(loginHandler), loginHandler = null, o.login && o.login(1, { type: O[0x70e8], errMsg: e.errMsg, time: Date.now() - n, res: e });
        } }), requestCallback || (loginHandler = setTimeout(function () {
        console.log(O[0x70e9]), o.login && o.login(1, { type: O[0x70ea], errMsg: O[0x70eb], time: Date.now() - n }), o.login = null;
      }, 2e4));
    }, share: function (e) {
      o.share = O[0x70db] == typeof callback ? callback : null;var t = e.type || O[0x70ec];console.log(O[0x70ed] + t);var a = this;this.getShareInfo(t, function (e) {
        a.logStartShare(t);var r = e.query;sdk.getShareInfo({ data: { path: O[0x70ee] } }).then(e => {
          wx.onShareAppMessage(function () {
            return { title: e.data.title, imageUrl: e.data.image, query: O[0x70ef] + e.data.state + "&" + r };
          });
        });
      }), sdk.addShareInfo({ data: { to_target: "wx" } }).then(e => {});
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(O[0x70df]);wx.request({ url: O[0x64bd] + HOST + O[0x70f0], method: O[0x7094], dataType: O[0x1708], header: { "content-type": O[0x7095] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: $hX6RUY ? $hX6RUY.server_id : "", role_id: $hX6RUY ? $hX6RUY.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, r) {
      console.log(O[0x70f1]), o.check = O[0x70db] == typeof r ? r : null;wx.getStorageSync(O[0x70df]);wx.request({ url: O[0x64bd] + HOST + O[0x70f2], method: O[0x7094], dataType: O[0x1708], header: { "content-type": O[0x7095] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(O[0x70f3]), console.log(e), requestCallback = !0, checkHandler && clearTimeout(checkHandler), checkHandler = null, 200 == e.statusCode && (r = e.data).state ? o.check && o.check(r.data) : o.check && o.check({ develop: 0 });
        }, fail: function (e) {
          console.log(O[0x70f4]), console.log(e), requestCallback = !0, checkHandler && clearTimeout(checkHandler), checkHandler = null, o.check && o.check({ develop: 0 });
        } }), requestCallback || (checkHandler = setTimeout(function () {
        console.log(O[0x70f5]), o.check && o.check({ develop: 0 }), o.check = null;
      }, 1e4));
    }, getShareInfo: function (e, r) {
      console.log(O[0x70f6]);var t = wx.getStorageSync(O[0x70df]);wx.request({ url: O[0x64bd] + HOST + O[0x70f7], method: O[0x7094], dataType: O[0x1708], header: { "content-type": O[0x7095] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: $hX6RUY ? $hX6RUY.server_id : "", role_id: $hX6RUY ? $hX6RUY.role_id : "", no_log: 1 }, success: function (e) {
          console.log(O[0x70f8]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : o.share && o.share(1, { errMsg: O[0x70f9] + e.msg }) : o.share && o.share(1, { errMsg: O[0x70fa] });
        } });
    }, updateShare: function (e, r, t, a, n, o) {
      console.log(O[0x70fb]);var i = wx.getStorageSync(O[0x70df]);wx.request({ url: O[0x64bd] + HOST + O[0x70fc], method: O[0x7094], dataType: O[0x1708], header: { "content-type": O[0x7095] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: t, role_id: a, sever_id: n, scene: o }, success: function (e) {
          console.log(O[0x70fd] + JSON.stringify(e));
        } });
    }, msgCheck: function (e, r) {
      console.log(O[0x70fe] + e);let t = { data: {} };sdk.checkMsg({ data: { content: e } }).then(e => {
        console.log(O[0x70ff] + JSON.stringify(e)), O[0x2708] == e.msg ? (t.statusCode = 200, t.data.state = 1) : (t.statusCode = 0, t.data.state = 0), r && r(t);
      }, e => {
        console.log(e), t.statusCode = 0, t.data.state = 0, r && r(t);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log(O[0x7100] + JSON.stringify(e));o.pay = O[0x70db] == typeof r ? r : null;r = wx.getStorageSync(O[0x70df]);var t = wx.getStorageSync(O[0x70e2]);r ? (e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, session_key: t, platform: platform }, this.order_data = e, (r = this.getPublicData()).order_data = JSON.stringify(e), wx.request({ url: O[0x64bd] + HOST + O[0x7101], method: O[0x7094], dataType: O[0x1708], header: { "content-type": O[0x7095] }, data: r, success: function (e) {
          console.log(O[0x7102] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.checkPay({ data: { "order-currency": O[0x7103], "order-cp_order_id": e.data.pay_data.orderId, "order-product_price": e.data.pay_data.amount, "order-product_id": e.data.pay_data.productId, "order-product_cnt": 1, "order-product_name": e.data.pay_data.productName, "order-product_desc": e.data.pay_data.productDec, "order-ext": e.data.pay_data.orderId, "role-event": "5", "role-server_id": e.data.pay_data.serverId, "role-server_name": e.data.pay_data.serverName, "role-role_id": e.data.pay_data.roleId, "role-role_name": e.data.pay_data.roleName, "role-role_level": e.data.pay_data.roleLevel, "role-role_vip": 0 } }).then(e => {
            console.log(O[0x7104] + JSON.stringify(e));
          }) : o.pay && o.pay(1, { errMsg: e.msg }) : o.login && o.login(1, { errMsg: O[0x70e6] });
        } })) : o.pay && o.pay(1, { errMsg: O[0x7105] });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync(O[0x70e0]);var t = wx.getStorageSync(O[0x70e1]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($hX6RUY = { role_id: e.roleid, server_id: e.serverid }), this.log(O[0x6], a), sdk.updateRole({ data: { "role-event": "2", "role-server_id": e.serverid, "role-server_name": e.servername, "role-role_id": e.roleid, "role-role_name": e.rolename, "role-role_level": e.rolelevel, "role-role_vip": 0, "role-combat_num": 0 } }).then(e => {}, e => {});
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync(O[0x70e0]);var t = wx.getStorageSync(O[0x70e1]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($hX6RUY = { role_id: e.roleid, server_id: e.serverid }), this.log(O[0x1696], a), $hXRYU6 && this.updateShare($hXRYU6.invite, $hXRYU6.invite_type, $hXRYU6.is_new, e.roleid, e.serverid, $hXRYU6.scene), sdk.updateRole({ data: { "role-event": "1", "role-server_id": e.serverid, "role-server_name": e.servername, "role-role_id": e.roleid, "role-role_name": e.rolename, "role-role_level": e.rolelevel, "role-role_vip": 0, "role-combat_num": 0 } }).then(e => {}, e => {});
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync(O[0x70e0]);var t = wx.getStorageSync(O[0x70e1]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($hX6RUY = { role_id: e.roleid, server_id: e.serverid }), this.log(O[0x7106], a);
    }, uuid: function (e, r) {
      var t = O[0x7107].split("");var a,
          n = [];var o;if (e = e || t.length, r) for (a = 0; a < r; a++) n[a] = t[0 | Math.random() * e];else for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", a = 0; a < 36; a++) n[a] || (o = 0 | 16 * Math.random(), n[a] = t[19 == a ? 3 & o | 8 : o]);return n.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync(O[0x70d7]);var r = wx.getStorageSync(O[0x70d8]);var t = wx.getStorageSync(O[0x70d9]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: t, uuid: e, idfv: r, mac: O[0x7108], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : O[0x7109], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: O[0x708f] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var t = this.getPublicData();for (var a in r) t[a] = r[a];console.log(O[0x710a] + e), console.log(t), wx.request({ url: O[0x64bd] + HOST + O[0x710b] + e + O[0x710c] + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {}, setMessageToFriendQuery: function (e, r) {
      e = e.activity_id;r(wx.setMessageToFriendQuery({ shareMessageToFriendScene: e }));
    } };
}function run(e, r, t) {
  e in $hX6RYU && $hX6RYU[e](r, t);
}exports.init = function (e, r) {
  run(O[0x170], e, r);
}, exports.login = function (e) {
  run(O[0x710d], "", e);
}, exports.login = function (e) {
  run(O[0x710d], "", e);
}, exports.pay = function (e, r) {
  run(O[0x710e], e, r);
}, exports.openService = function () {
  run(O[0x629a]);
}, exports.logCreateRole = function (e, r, t, a, n) {
  run(O[0x710f], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: n });
}, exports.logEnterGame = function (e, r, t, a, n) {
  run(O[0x7110], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: n });
}, exports.logRoleUpLevel = function (e, r, t, a, n) {
  run(O[0x7111], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: n });
}, exports.share = function (e) {
  run(O[0x70ec], { type: e });
}, exports.msgCheck = function (e, r) {
  run(O[0x2fe2], e, r);
}, exports.downloadClient = function () {
  run(O[0x7112]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(O[0x7113]);
}, exports.weiduanHelper = function () {
  run(O[0x5cf4]);
}, exports.setMessageToFriendQuery = function (e, r) {
  run(O[0x7114], e, r);
};