var s = wx.$W;
import qingjs from "../utils/qingjs-wxapp.js";var config = { game_id: s[0x6a2], game_pkg: s[0x6a3], partner_label: s[0x6a4], partner_id: s[0x6a5], game_ver: "22.0.19", is_auth: !0 };window.config = config;var _w$A1IY = _w$1YIA();var HOST = s[0x6a7];var _w$A1YI = null;var _w$1IYA = null;var partner_data = {};function _w$1YIA() {
  var o = {};return { order_data: {}, init: function (e, r) {
      var a = e && e.game_ver ? e.game_ver : 0;console.log(s[0x6a8]);var n = this;var o;o = (t = wx.getStorageSync(s[0x6a9])) ? 0 : (t = n.uuid(16, 32), wx.setStorageSync(s[0x6a9], t), 1), (e = wx.getStorageSync(s[0x6aa])) || (e = n.uuid(16, 32), wx.setStorageSync(s[0x6aa], e));var t = wx.getLaunchOptionsSync();e = t.scene || "";o && t.query && t.query.ad_code && wx.setStorageSync(s[0x6ab], t.query.ad_code), n.log(s[0x6ac], { install: o, scene: e }), qingjs.instance.onInit(function (e) {
        console.log(s[0x6ad], e);
      }), wx.showShareMenu({ withShareTicket: !0 });n = t.query && t.query.invite ? t.query.invite : "";t = t.query && t.query.invite_type ? t.query.invite_type : "";n && (_w$1IYA = { invite: n, invite_type: t, is_new: o, scene: e }), a && this.checkGameVersion(a, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      var a = this;console.log(s[0x6ae]), o.login = s[0x3a2] == typeof r ? r : null, qingjs.instance.login({}, function (e) {
        console.log(s[0x6af], e), 200 === e.code ? a.do_login(e) : r && r(1, { errMsg: e.message });
      });
    }, subscribeMessage: function (e, r) {
      console.log(s[0x6b0] + e), o.subscribeMessage = s[0x3a2] == typeof r ? r : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log(s[0x6b1]), console.log(e), o.subscribeMessage && o.subscribeMessage(e);
        }, fail(e) {
          console.log(s[0x6b2]), console.log(e), o.subscribeMessage && o.subscribeMessage(e);
        } });
    }, do_login: function (e) {
      var a = this;partner_data = { uid: e.uid, token: e.token };var r = a.getPublicData();if (r.is_from_min = 1, r.partner_data = JSON.stringify(partner_data), _w$1IYA && s[0x33d] == typeof _w$1IYA) for (var n in _w$1IYA) r[n] = _w$1IYA[n];wx.request({ url: s[0x6b3] + HOST + s[0x6b4], method: s[0x63], dataType: s[0x496], header: { "content-type": s[0x102] }, data: r, success: function (e) {
          if (console.log(s[0x6b5], e), 200 === e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync(s[0x6b6], r.data.sdk_token), wx.setStorageSync(s[0x6b7], r.data.user_id), wx.setStorageSync(s[0x6b8], r.data.username), r.data.ext && wx.setStorageSync(s[0x6b9], r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };o.login && o.login(0, e);
            } else o.login && o.login(1, { errMsg: r.msg });a.getShareInfo(s[0x6ba], function (e) {
              console.log(s[0x6bb] + JSON.stringify(e)), wx.onShareAppMessage(function () {
                return a.logStartShare(s[0x6ba]), { title: e.title, imageUrl: e.img, query: e.query + "&" + qingjs.instance.getShareToken() };
              });
            });
          } else o.login && o.login(1, { errMsg: s[0x6bc] });
        } });
    }, share: function (e) {
      o.share = s[0x3a2] == typeof callback ? callback : null;var r = e.type || s[0xd2];console.log(s[0x6bd] + r);var a = this;this.getShareInfo(r, function (e) {
        a.logStartShare(r), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(s[0x6b6]);wx.request({ url: s[0x6b3] + HOST + s[0x6be], method: s[0x63], dataType: s[0x496], header: { "content-type": s[0x102] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: _w$A1YI ? _w$A1YI.server_id : "", role_id: _w$A1YI ? _w$A1YI.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      qingjs.instance.goCustomerService();
    }, checkGameVersion: function (e, a) {
      console.log(s[0x6bf]);wx.getStorageSync(s[0x6b6]);wx.request({ url: s[0x6b3] + HOST + s[0x6c0], method: s[0x63], dataType: s[0x496], header: { "content-type": s[0x102] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(s[0x6c1]), console.log(e), 200 == e.statusCode && (r = e.data).state ? a && a(r.data) : a && a({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log(s[0x6c2]);var a = wx.getStorageSync(s[0x6b6]);wx.request({ url: s[0x6b3] + HOST + s[0x6c3], method: s[0x63], dataType: s[0x496], header: { "content-type": s[0x102] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: a, type: e, server_id: _w$A1YI ? _w$A1YI.server_id : "", role_id: _w$A1YI ? _w$A1YI.role_id : "", no_log: 1 }, success: function (e) {
          console.log(s[0x6c4]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : o.share && o.share(1, { errMsg: s[0x6c5] + e.msg }) : o.share && o.share(1, { errMsg: s[0x6c6] });
        } });
    }, updateShare: function (e, r, a, n, o, t) {
      console.log(s[0x6c7]);var i = wx.getStorageSync(s[0x6b6]);wx.request({ url: s[0x6b3] + HOST + s[0x6c8], method: s[0x63], dataType: s[0x496], header: { "content-type": s[0x102] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: a, role_id: n, sever_id: o, scene: t }, success: function (e) {
          console.log(s[0x6c9]), console.log(e);
        } });
    }, msgCheck: function (e, r) {
      console.log(s[0x6ca]);var a = wx.getStorageSync(s[0x6b6]);wx.request({ url: s[0x6b3] + HOST + s[0x6cb] + config.partner_id + "/" + config.game_pkg, method: s[0x63], dataType: s[0x496], header: { "content-type": s[0x102] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: a, content: e }, success: function (e) {
          console.log(s[0x6cc]), console.log(e), r && r(e);
        } });
    }, pay: function (e, r) {
      qingjs.instance.canPay() ? this.startPay(e, r) : r && r(1, { errMsg: s[0x6cd] });
    }, startPay: function (e, r) {
      console.log(s[0x6ce], e);o.pay = s[0x3a2] == typeof r ? r : null;var a = wx.getStorageSync(s[0x6b6]);var n = wx.getStorageSync(s[0x6b9]);a || n ? (r = wx.getSystemInfoSync(), n = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: a, session_key: n, platform: r.platform }, this.order_data = n, (r = this.getPublicData()).order_data = JSON.stringify(n), r.is_from_min = 1, wx.request({ url: s[0x6b3] + HOST + s[0x6cf], method: s[0x63], dataType: s[0x496], header: { "content-type": s[0x102] }, data: r, success: function (e) {
          var r;console.log(s[0x6d0]), console.log(e), 200 == e.statusCode ? (r = e.data).state && r.data.pay_data ? (console.log(s[0x6d1] + JSON.stringify(r.data.pay_data)), e = { productName: r.data.pay_data.productName, productId: r.data.pay_data.productId, productPrice: r.data.pay_data.productPrice, cpOrderId: r.data.pay_data.cpOrderId, extendsParam1: r.data.pay_data.extendsParam1, extendsParam2: r.data.pay_data.extendsParam2, roleId: r.data.pay_data.roleId, roleName: r.data.pay_data.roleName, roleLevel: r.data.pay_data.roleLevel, serverId: r.data.pay_data.serverId, serverName: r.data.pay_data.serverName, roleVip: r.data.pay_data.roleVip, function(e) {
              console.log(s[0x6d2], e);
            } }, qingjs.instance.purchase(e)) : o.pay && o.pay(1, { errMsg: r.errMsg }) : o.login && o.login(1, { errMsg: s[0x6bc] });
        } })) : o.pay && o.pay(1, { errMsg: s[0x6d3] });
    }, logCreateRole: function (e, r) {
      var a = wx.getStorageSync(s[0x6b7]);var n = wx.getStorageSync(s[0x6b8]);var o = {};o.user_id = a, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && (_w$A1YI = { role_id: e.roleid, server_id: e.serverid }), this.log(s[0x1b9], o);e = { roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel, serverId: e.serverid, serverName: e.servername, roleVip: 0, rolePower: 0, reportType: s[0x6d4] };qingjs.instance.reportRoleInfo(e, function (e) {
        console.log(s[0x6d5], e), qingjs.instance.canPay() ? r && r({ show_pay: 1 }) : r && r({ show_pay: 0 });
      });
    }, logEnterGame: function (e, r) {
      var a = wx.getStorageSync(s[0x6b7]);var n = wx.getStorageSync(s[0x6b8]);var o = {};o.user_id = a, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && (_w$A1YI = { role_id: e.roleid, server_id: e.serverid }), this.log(s[0x6d6], o);o = { roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel, serverId: e.serverid, serverName: e.servername, roleVip: 0, rolePower: e.rolepower || 0, reportType: s[0x6d7] };qingjs.instance.reportRoleInfo(o, function (e) {
        console.log(s[0x6d8], e), qingjs.instance.canPay() ? r && r({ show_pay: 1 }) : r && r({ show_pay: 0 });
      }), _w$1IYA && this.updateShare(_w$1IYA.invite, _w$1IYA.invite_type, _w$1IYA.is_new, e.roleid, e.serverid, _w$1IYA.scene);
    }, logRoleUpLevel: function (e, r) {
      var a = wx.getStorageSync(s[0x6b7]);var n = wx.getStorageSync(s[0x6b8]);this.log(s[0x6d9], e);var o = {};o.user_id = a, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && (_w$A1YI = { role_id: e.roleid, server_id: e.serverid });e = { roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel, serverId: e.serverid, serverName: e.servername, roleVip: 0, rolePower: e.rolepower || 0, reportType: s[0x6da] };qingjs.instance.reportRoleInfo(e, function (e) {
        console.log(s[0x6db], e), qingjs.instance.canPay() ? r && r({ show_pay: 1 }) : r && r({ show_pay: 0 });
      });
    }, uuid: function (e, r) {
      var a = s[0x6dc].split("");var n,
          o = [];var t;if (e = e || a.length, r) for (n = 0; n < r; n++) o[n] = a[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", n = 0; n < 36; n++) o[n] || (t = 0 | 16 * Math.random(), o[n] = a[19 == n ? 3 & t | 8 : t]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var r = wx.getStorageSync(s[0x6a9]);var a = wx.getStorageSync(s[0x6aa]);var n = wx.getStorageSync(s[0x6ab]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: n, uuid: r, idfv: a, dname: e.model, mac: s[0x6dd], net_type: 0 == e.wifiSignal ? "4G" : s[0x6de], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: s[0x199] == e.platform ? 1 : 2 };
    }, log: function (e, r) {
      var a = this.getPublicData();for (var n in r) a[n] = r[n];console.log(s[0x6df] + e), console.log(a), wx.request({ url: s[0x6b3] + HOST + s[0x6e0] + e + s[0x6e1] + encodeURIComponent(JSON.stringify(a)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, beQuit: function (e) {
      wx.request({ url: s[0x6b3] + HOST + s[0x6e2] + config.partner_id + "/" + config.game_pkg, method: s[0x63], dataType: s[0x496], header: { "content-type": s[0x102] }, data: { uid: partner_data.uid, event: s[0x6e3] }, success: function (e) {
          console.log(s[0x6e4] + JSON.stringify(e));
        } });
    }, showMenu: function () {
      qingjs.instance.showMenu({ stage: Laya.stage, canvas: canvas, entryIconX: 0, entryIconY: 300 });
    } };
}function run(e, r, a) {
  e in _w$A1IY && _w$A1IY[e](r, a);
}exports.init = function (e, r) {
  run(s[0x6f], e, r);
}, exports.login = function (e) {
  run(s[0x85], "", e);
}, exports.login = function (e) {
  run(s[0x85], "", e);
}, exports.pay = function (e, r) {
  run(s[0xc5], e, r);
}, exports.openService = function () {
  run(s[0xd3]);
}, exports.logCreateRole = function (e, r, a, n, o) {
  run(s[0xcd], { serverid: e, servername: r, roleid: a, rolename: n, rolelevel: o });
}, exports.logEnterGame = function (e, r, a, n, o, t, i) {
  run(s[0xcf], { serverid: e, servername: r, roleid: a, rolename: n, rolelevel: o, rolecreatetime: t, rolepower: i ? i.rolepower : 0 }, i ? i.callback : "");
}, exports.logRoleUpLevel = function (e, r, a, n, o, t, i) {
  run(s[0xd1], { serverid: e, servername: r, roleid: a, rolename: n, rolelevel: o, rolecreatetime: t, rolepower: i ? i.rolepower : 0 }, i ? i.callback : "");
}, exports.share = function (e) {
  run(s[0xd2], { type: e });
}, exports.msgCheck = function (e, r) {
  run(s[0x42], e, r);
}, exports.downloadClient = function () {
  run(s[0x6e5]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(s[0x6e6]);
}, exports.beQuit = function (e) {
  run(s[0x6e7], e);
}, exports.showMenu = function () {
  run(s[0x143]);
}, exports.subscribeMessage = function (e, r) {
  run(s[0xe3], e, r);
};