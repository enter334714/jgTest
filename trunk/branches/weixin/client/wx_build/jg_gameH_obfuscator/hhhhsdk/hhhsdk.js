var O = wx.$c;
import sdk from "./hhhhelp.js";var config = { game_id: 256, game_pkg: O[26167], partner_label: O[26168], partner_id: O[26169], game_ver: O[26170], is_auth: !1, partner_app_id: 28, partner_mp_id: O[26171] };window.config = config;var h$G7RA8 = h$GRA78();var HOST = O[26172];var h$GR8A7 = null;var h$GR87A = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var partner_user_info = null;function h$GRA78() {
  var n = {};return { order_data: {}, init: function (e, r) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log(O[26173]);var a = this;var n;n = (o = wx.getStorageSync(O[26174])) ? 0 : (o = a.uuid(16, 32), wx.setStorageSync(O[26174], o), 1), (e = wx.getStorageSync(O[26175])) || (e = a.uuid(16, 32), wx.setStorageSync(O[26175], e));var o = wx.getLaunchOptionsSync();e = o.scene || "";n && o.query && o.query.ad_code && wx.setStorageSync(O[26176], o.query.ad_code), a.log(O[719], { install: n, scene: e });a = o.query && o.query.invite ? o.query.invite : "";o = o.query && o.query.invite_type ? o.query.invite_type : "";a && (h$GR87A = { invite: a, invite_type: o, is_new: n, scene: e }), t && this.checkGameVersion(t, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log(O[26177]), n.login = O[94] == typeof r ? r : null;var t = this;let a = wx.getLaunchOptionsSync();sdk.init({ app_id: config.partner_app_id, mp_id: config.partner_mp_id }).then(e => {
        sdk.login({ data: { state: a.query.state || a.query.scene || "" } }).then(e => {
          partner_user_info = e.data, t.do_login(e.data), console.log(O[26178] + JSON.stringify(e));
        });
      });
    }, do_login: function (e) {
      var t = this;var r = t.getPublicData();if (r.user_info = JSON.stringify(e), h$GR87A && O[11] == typeof h$GR87A) for (var a in h$GR87A) r[a] = h$GR87A[a];wx.request({ url: O[26179] + HOST + O[26180], method: O[26107], dataType: O[221], header: { "content-type": O[26108] }, data: r, success: function (e) {
          if (console.log(O[26181] + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync(O[26182], r.data.sdk_token), wx.setStorageSync(O[26183], r.data.user_id), wx.setStorageSync(O[26184], r.data.username), r.data.ext && wx.setStorageSync(O[26185], r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };n.login && n.login(0, e);
            } else n.login && n.login(1, { errMsg: r.msg });t.getShareInfo(O[26186], function (e) {
              console.log(O[26187]), wx.onShareAppMessage(function () {
                return t.logStartShare(O[26186]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else n.login && n.login(1, { errMsg: O[26188] });
        } });
    }, share: function (e) {
      n.share = O[94] == typeof callback ? callback : null;var t = e.type || O[26189];console.log(O[26190] + t);var a = this;this.getShareInfo(t, function (e) {
        a.logStartShare(t);var r = e.query;sdk.getShareInfo({ data: { path: O[26191] } }).then(e => {
          wx.onShareAppMessage(function () {
            return { title: e.data.title, imageUrl: e.data.image, query: `state=${e.data.state}` + "&" + r };
          });
        });
      }), sdk.addShareInfo({ data: { to_target: "wx" } }).then(e => {});
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(O[26182]);wx.request({ url: O[26179] + HOST + O[26192], method: O[26107], dataType: O[221], header: { "content-type": O[26108] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: h$GR8A7 ? h$GR8A7.server_id : "", role_id: h$GR8A7 ? h$GR8A7.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log(O[26193]);wx.getStorageSync(O[26182]);wx.request({ url: O[26179] + HOST + O[26194], method: O[26107], dataType: O[221], header: { "content-type": O[26108] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(O[26195] + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? t && t(r.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log(O[26196]);var t = wx.getStorageSync(O[26182]);wx.request({ url: O[26179] + HOST + O[26197], method: O[26107], dataType: O[221], header: { "content-type": O[26108] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: h$GR8A7 ? h$GR8A7.server_id : "", role_id: h$GR8A7 ? h$GR8A7.role_id : "", no_log: 1 }, success: function (e) {
          console.log(O[26198]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : n.share && n.share(1, { errMsg: O[26199] + e.msg }) : n.share && n.share(1, { errMsg: O[26200] });
        } });
    }, updateShare: function (e, r, t, a, n, o) {
      console.log(O[26201]);var i = wx.getStorageSync(O[26182]);wx.request({ url: O[26179] + HOST + O[26202], method: O[26107], dataType: O[221], header: { "content-type": O[26108] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: t, role_id: a, sever_id: n, scene: o }, success: function (e) {
          console.log(O[26203] + JSON.stringify(e));
        } });
    }, msgCheck: function (e, r) {
      console.log(O[26204] + e);let t = { data: {} };sdk.checkMsg({ data: { content: e } }).then(e => {
        console.log(O[26205] + JSON.stringify(e)), O[9311] == e.msg ? (t.statusCode = 200, t.data.state = 1) : (t.statusCode = 0, t.data.state = 0), r && r(t);
      }, e => {
        console.log(e), t.statusCode = 0, t.data.state = 0, r && r(t);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log(O[26206] + JSON.stringify(e));n.pay = O[94] == typeof r ? r : null;var t = wx.getStorageSync(O[26182]);r = wx.getStorageSync(O[26185]);t ? (t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: r, platform: platform }, this.order_data = t, (r = this.getPublicData()).order_data = JSON.stringify(t), wx.request({ url: O[26179] + HOST + O[26207], method: O[26107], dataType: O[221], header: { "content-type": O[26108] }, data: r, success: function (e) {
          console.log(O[26208] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.checkPay({ data: { "order-currency": O[26209], "order-cp_order_id": e.data.pay_data.orderId, "order-product_price": e.data.pay_data.amount, "order-product_id": e.data.pay_data.productId, "order-product_cnt": 1, "order-product_name": e.data.pay_data.productName, "order-product_desc": e.data.pay_data.productDec, "order-ext": e.data.pay_data.orderId, "role-event": "5", "role-server_id": e.data.pay_data.serverId, "role-server_name": e.data.pay_data.serverName, "role-role_id": e.data.pay_data.roleId, "role-role_name": e.data.pay_data.roleName, "role-role_level": e.data.pay_data.roleLevel, "role-role_vip": 0 } }).then(e => {
            console.log(O[26210] + JSON.stringify(e));
          }) : n.pay && n.pay(1, { errMsg: e.msg }) : n.login && n.login(1, { errMsg: O[26188] });
        } })) : n.pay && n.pay(1, { errMsg: O[26211] });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync(O[26183]);var t = wx.getStorageSync(O[26184]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (h$GR8A7 = { role_id: e.roleid, server_id: e.serverid }), this.log(O[12], a), sdk.updateRole({ data: { "role-event": "2", "role-server_id": e.serverid, "role-server_name": e.servername, "role-role_id": e.roleid, "role-role_name": e.rolename, "role-role_level": e.rolelevel, "role-role_vip": 0, "role-combat_num": 0 } }).then(e => {}, e => {});
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync(O[26183]);var t = wx.getStorageSync(O[26184]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (h$GR8A7 = { role_id: e.roleid, server_id: e.serverid }), this.log(O[5488], a), h$GR87A && this.updateShare(h$GR87A.invite, h$GR87A.invite_type, h$GR87A.is_new, e.roleid, e.serverid, h$GR87A.scene), sdk.updateRole({ data: { "role-event": "1", "role-server_id": e.serverid, "role-server_name": e.servername, "role-role_id": e.roleid, "role-role_name": e.rolename, "role-role_level": e.rolelevel, "role-role_vip": 0, "role-combat_num": 0 } }).then(e => {}, e => {});
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync(O[26183]);var t = wx.getStorageSync(O[26184]);var a = {};a.user_id = r, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (h$GR8A7 = { role_id: e.roleid, server_id: e.serverid }), this.log(O[26212], a);
    }, uuid: function (e, r) {
      var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var a,
          n = [];var o;if (e = e || t.length, r) for (a = 0; a < r; a++) n[a] = t[0 | Math.random() * e];else for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", a = 0; a < 36; a++) n[a] || (o = 0 | 16 * Math.random(), n[a] = t[19 == a ? 3 & o | 8 : o]);return n.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync(O[26174]);var r = wx.getStorageSync(O[26175]);var t = wx.getStorageSync(O[26176]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: t, uuid: e, idfv: r, mac: O[26213], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : O[26214], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: O[26102] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var t = this.getPublicData();for (var a in r) t[a] = r[a];console.log(O[26215] + e), console.log(t), wx.request({ url: O[26179] + HOST + O[26216] + e + O[26217] + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {}, setMessageToFriendQuery: function (e, r) {
      e = e.activity_id;r(wx.setMessageToFriendQuery({ shareMessageToFriendScene: e }));
    } };
}function run(e, r, t) {
  e in h$G7RA8 && h$G7RA8[e](r, t);
}exports.init = function (e, r) {
  run(O[792], e, r);
}, exports.login = function (e) {
  run(O[26218], "", e);
}, exports.login = function (e) {
  run(O[26218], "", e);
}, exports.pay = function (e, r) {
  run(O[26219], e, r);
}, exports.openService = function () {
  run(O[22903]);
}, exports.logCreateRole = function (e, r, t, a, n) {
  run(O[26220], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: n });
}, exports.logEnterGame = function (e, r, t, a, n) {
  run(O[26221], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: n });
}, exports.logRoleUpLevel = function (e, r, t, a, n) {
  run(O[26222], { serverid: e, servername: r, roleid: t, rolename: a, rolelevel: n });
}, exports.share = function (e) {
  run(O[26189], { type: e });
}, exports.msgCheck = function (e, r) {
  run(O[11109], e, r);
}, exports.downloadClient = function () {
  run(O[26223]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(O[26224]);
}, exports.weiduanHelper = function () {
  run("weiduanHelper");
}, exports.setMessageToFriendQuery = function (e, r) {
  run(O[26225], e, r);
};