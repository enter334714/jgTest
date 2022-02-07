var A = wx.$N;
import FunSdk from "./nnnhp";const sdk = new FunSdk();var config = { game_id: "88", partner_label: A[0x37], game_pkg: A[0x38], partner_id: A[0x39], game_ver: "13.0.23", is_auth: !1, partner_and_key: A[0x3b], partner_ios_key: A[0x3c] };window.config = config;var _nO06SC = _nO6CS0();var HOST = A[0x3d];var t;var t_second = 0;var t_max = 300;var _nO06CS = null;var _nO6SC0 = null;var _nO6S0C = null;var user_invite_by_activity = null;var partner_user_info = null;var sys_info = wx.getSystemInfoSync();var platform = sys_info.platform;function getGameInfo(r) {
  let e = config.partner_ios_key;A[0x1d] != platform && A[0x3e] != platform || (e = config.partner_and_key), sdk.game({ game_key: e }, function (e) {
    0 == e.code ? r && r(e.data) : r && r({});
  });
}function _nO6CS0() {
  var a = {};return { order_data: {}, init: function (e, r) {
      var n = e && e.game_ver ? e.game_ver : 0;console.log(A[0x3f]);var t = this;var o;o = (a = wx.getStorageSync(A[0x40])) ? 0 : (a = t.uuid(16, 32), wx.setStorageSync(A[0x40], a), 1), (s = wx.getStorageSync(A[0x41])) || (s = t.uuid(16, 32), wx.setStorageSync(A[0x41], s));var i = wx.getLaunchOptionsSync();e = i.scene || "";console.log(A[0x42], JSON.stringify(i)), o && i.query && i.query.ad_code && wx.setStorageSync(A[0x43], i.query.ad_code), t.log(A[0x44], { install: o, scene: e }), wx.showShareMenu();var a = i.query && i.query.invite ? i.query.invite : "";var s = i.query && i.query.invite_type ? i.query.invite_type : "";t = i.query && i.query.cp_activity_id ? i.query.cp_activity_id : "";t || (s = (t = i.query && i.query.shareMessageToFriendScene ? i.query.shareMessageToFriendScene : "") ? A[0x45] : ""), t && (user_invite_by_activity = { invite: a, invite_type: s, is_new: o, scene: e, cp_activity_id: t }), a && (_nO6SC0 = { invite: a, invite_type: s, is_new: o, scene: e }), n && this.checkGameVersion(n, function (e) {
        r && r(e);
      });
    }, login: function (e, n) {
      console.log(A[0x46]);var t = this;a.login = A[0x47] == typeof n ? n : null, wx.login({ success: function (r) {
          console.log(A[0x48] + JSON.stringify(r)), r.code ? getGameInfo(function (e) {
            sdk.gameLogin({ host_url: e.host_url, game_key: e.game_key, code: r.code }, function (e) {
              console.log(A[0x49] + JSON.stringify(e)), 0 == e.code ? (partner_user_info = e.data, t.do_login(e.data)) : n && n(1);
            }, function (e) {
              console.log(A[0x4a] + JSON.stringify(e)), n && n(1);
            });
          }) : n && n(1, { errMsg: r.errMsg });
        }, fail: function (e) {
          console.log(A[0x4b] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(A[0x4c]) || -1 < e.errMsg.indexOf(A[0x4d])) && n && n(1, { errMsg: e.errMsg });
        } });
    }, do_login: function (e) {
      var n = this;var r = n.getPublicData();if (r.user_info = JSON.stringify(e), _nO6SC0 && A[0x4e] == typeof _nO6SC0) for (var t in _nO6SC0) r[t] = _nO6SC0[t];wx.request({ url: A[0x4f] + HOST + A[0x50], method: A[0x4], dataType: A[0x5], header: { "content-type": A[0x3] }, data: r, success: function (e) {
          if (console.log(A[0x51] + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync(A[0x52], r.data.sdk_token), wx.setStorageSync(A[0x53], r.data.user_id), wx.setStorageSync(A[0x54], r.data.username), r.data.ext && wx.setStorageSync(A[0x55], r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };a.login && a.login(0, e);
            } else a.login && a.login(1, { errMsg: r.msg });n.getShareInfo(A[0x56], function (e) {
              console.log(A[0x57]), wx.onShareAppMessage(function () {
                return n.logStartShare(A[0x56]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else a.login && a.login(1, { errMsg: A[0x58] });
        } });
    }, share: function (e) {
      a.share = A[0x47] == typeof callback ? callback : null;var r = e.type || A[0x59];var n = e.cp_activity_id || "";console.log(A[0x5a] + r);var t = this;this.getShareInfo(r, function (e) {
        "" != n && "" != e.query && (e.query = e.query + A[0x5b] + n), t.logStartShare(r), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(A[0x52]);wx.request({ url: A[0x4f] + HOST + A[0x5c], method: A[0x4], dataType: A[0x5], header: { "content-type": A[0x3] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: _nO06CS ? _nO06CS.server_id : "", role_id: _nO06CS ? _nO06CS.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(A[0x5d]);wx.getStorageSync(A[0x52]);wx.request({ url: A[0x4f] + HOST + A[0x5e], method: A[0x4], dataType: A[0x5], header: { "content-type": A[0x3] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(A[0x5f] + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? n && n(r.data) : n && n({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log(A[0x60]);var n = wx.getStorageSync(A[0x52]);wx.request({ url: A[0x4f] + HOST + A[0x61], method: A[0x4], dataType: A[0x5], header: { "content-type": A[0x3] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, type: e, server_id: _nO06CS ? _nO06CS.server_id : "", role_id: _nO06CS ? _nO06CS.role_id : "", no_log: 1 }, success: function (e) {
          console.log(A[0x62]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : a.share && a.share(1, { errMsg: A[0x63] + e.msg }) : a.share && a.share(1, { errMsg: A[0x64] });
        } });
    }, updateShare: function (e, r, n, t, o, i) {
      console.log(A[0x65]);var a = wx.getStorageSync(A[0x52]);wx.request({ url: A[0x4f] + HOST + A[0x66], method: A[0x4], dataType: A[0x5], header: { "content-type": A[0x3] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: a, invite: e, invite_type: r, is_new: n, role_id: t, sever_id: o, scene: i }, success: function (e) {
          console.log(A[0x67] + JSON.stringify(e));
        } });
    }, msgCheck: function (n, t) {
      console.log(A[0x68]);let o = { data: {} };getGameInfo(function (e) {
        var r = e.game_key;sdk.checkWords({ game_key: r, account: partner_user_info.openid, scene: 4, content: n, host_url: e.host_url }, function (e) {
          console.log(A[0x69] + JSON.stringify(e)), 0 == e.code ? (o.statusCode = 200, o.data.state = 1) : (o.statusCode = 0, o.data.state = 0), t && t(o);
        }, function (e) {
          o.statusCode = 0, o.data.state = 0, t && t(o);
        });
      });
    }, pay: function (e, r) {
      var n = this;wx.checkSession({ success: function () {
          n.startPay(e, r);
        }, fail: function () {
          console.log(A[0x6a]), n.login({}, function () {
            n.startPay(e, r);
          });
        } });
    }, startPay: function (n, e) {
      console.log(A[0x6b] + JSON.stringify(n));var t = this;a.pay = A[0x47] == typeof e ? e : null;var o = wx.getStorageSync(A[0x52]);var i = wx.getStorageSync(A[0x55]);o && i ? getGameInfo(function (e) {
        var r = { cpbill: n.cpbill, productid: n.productid, productname: n.productname, productdesc: n.productdesc, serverid: n.serverid, servername: n.servername, roleid: n.roleid, rolename: n.rolename, rolelevel: n.rolelevel, price: n.price, extension: n.extension, sdk_token: o, session_key: i, platform: platform, partner_game_info: e, partner_openid: partner_user_info.openid };t.order_data = r;e = t.getPublicData();e.order_data = JSON.stringify(r), wx.request({ url: A[0x4f] + HOST + A[0x6c], method: A[0x4], dataType: A[0x5], header: { "content-type": A[0x3] }, data: e, success: function (e) {
            console.log(A[0x6d] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment && (A[0x1d] == platform || A[0x3e] == platform ? sdk.midasNotice(e.data.pay_data) : t.kfPay(e.data)) : a.pay && a.pay(1, { errMsg: e.msg }) : a.login && a.login(1, { errMsg: A[0x58] });
          } });
      }) : a.pay && a.pay(1, { errMsg: A[0x6e] });
    }, kfPay: function (e) {
      console.log(A[0x6f]), sdk.order({ host_url: e.pay_data.host_url, game_key: e.pay_data.game_key, account: e.pay_data.account, server: e.pay_data.server, role: e.pay_data.role, amount: e.pay_data.amount, extend: e.pay_data.extend }, function (e) {
        console.log(A[0x70] + JSON.stringify(e)), wx.showModal({ title: A[0x71], content: A[0x72], showCancel: !1, confirmText: A[0x73], success: function () {
            wx.openCustomerServiceConversation();
          } });
      });
    }, logCreateRole: function (r) {
      var e = wx.getStorageSync(A[0x53]);var n = wx.getStorageSync(A[0x54]);var t = {};var o, i, a;t.user_id = e, t.user_name = n, t.role_id = r.roleid, t.role_lev = r.rolelevel, t.role_name = r.rolename, t.server_id = r.serverid, r.roleid && r.serverid && (_nO06CS = { role_id: r.roleid, server_id: r.serverid }), this.log(A[0x74], t), user_invite_by_activity && (o = user_invite_by_activity.scene, i = user_invite_by_activity.is_new, a = user_invite_by_activity.invite, n = user_invite_by_activity && user_invite_by_activity.invite_type ? user_invite_by_activity.invite_type : "", t = user_invite_by_activity.cp_activity_id, t = { uid: e, role_id: r.roleid, role_name: r.rolename, server_id: r.serverid, server_name: r.servername, game_id: config.game_id, partner_id: config.partner_id, game_pkg: config.game_pkg, scene: o, is_new: i, invite_code: a, invite_type: n, cp_activity_id: t }, wx.request({ url: A[0x4f] + HOST + A[0x75], method: A[0x4], dataType: A[0x5], header: { "content-type": A[0x3] }, data: t, success: function (e) {
          console.log(A[0x76] + JSON.stringify(e));
        } })), getGameInfo(function (e) {
        sdk.role({ host_url: e.host_url, game_key: e.game_key, account: partner_user_info.openid, server: r.serverid, server_name: r.servername, role: r.roleid, role_name: r.rolename, level: r.rolelevel, type: 3 }, function (e) {
          console.log(A[0x77] + JSON.stringify(e));
        });
      });
    }, logEnterGame: function (n) {
      var e = wx.getStorageSync(A[0x53]);var r = wx.getStorageSync(A[0x54]);var t = {};t.user_id = e, t.user_name = r, t.role_id = n.roleid, t.role_lev = n.rolelevel, t.role_name = n.rolename, t.server_id = n.serverid, n.roleid && n.serverid && (_nO06CS = { role_id: n.roleid, server_id: n.serverid }), this.log(A[0x78], t), _nO6SC0 && this.updateShare(_nO6SC0.invite, _nO6SC0.invite_type, _nO6SC0.is_new, n.roleid, n.serverid, _nO6SC0.scene), getGameInfo(function (e) {
        var r = sdk.wxChannelCode();r && sdk.role({ host_url: e.host_url, game_key: e.game_key, account: partner_user_info.openid, server: n.serverid, server_name: n.servername, role: n.roleid, role_name: n.rolename, level: n.rolelevel, type: r && r.type ? r.type : "", code: r && r.code ? r.code : "" }, function (e) {
          console.log(A[0x79] + JSON.stringify(e));
        }), sdk.role({ host_url: e.host_url, game_key: e.game_key, account: partner_user_info.openid, server: n.serverid, server_name: n.servername, role: n.roleid, role_name: n.rolename, level: n.rolelevel, type: 0 }, function (e) {
          console.log(A[0x7a] + JSON.stringify(e));
        }), sdk.role({ host_url: e.host_url, game_key: e.game_key, account: partner_user_info.openid, server: n.serverid, server_name: n.servername, role: n.roleid, role_name: n.rolename, level: n.rolelevel, type: 3 }, function (e) {
          console.log(A[0x7b] + JSON.stringify(e));
        }), sdk.role({ host_url: e.host_url, game_key: e.game_key, account: partner_user_info.openid, server: n.serverid, server_name: n.servername, role: n.roleid, role_name: n.rolename, level: n.rolelevel, type: 6 }, function (e) {
          console.log(A[0x7c] + JSON.stringify(e));
        });
      });
    }, logRoleUpLevel: function (r) {
      var e = wx.getStorageSync(A[0x53]);var n = wx.getStorageSync(A[0x54]);var t = {};t.user_id = e, t.user_name = n, t.role_id = r.roleid, t.role_lev = r.rolelevel, t.role_name = r.rolename, t.server_id = r.serverid, r.roleid && r.serverid && (_nO06CS = { role_id: r.roleid, server_id: r.serverid }), this.log(A[0x7d], t), getGameInfo(function (e) {
        sdk.role({ host_url: e.host_url, game_key: e.game_key, account: partner_user_info.openid, server: r.serverid, server_name: r.servername, role: r.roleid, role_name: r.rolename, level: r.rolelevel, type: 8 }, function (e) {
          console.log(A[0x7e] + JSON.stringify(e));
        });
      });
    }, uuid: function (e, r) {
      var n = A[0x7f].split("");var t,
          o = [];var i;if (e = e || n.length, r) for (t = 0; t < r; t++) o[t] = n[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", t = 0; t < 36; t++) o[t] || (i = 0 | 16 * Math.random(), o[t] = n[19 == t ? 3 & i | 8 : i]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var r = wx.getStorageSync(A[0x40]);var n = wx.getStorageSync(A[0x41]);var t = wx.getStorageSync(A[0x43]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, is_from_min: 1, ad_code: t, uuid: r, idfv: n, dname: e.model, mac: A[0x80], net_type: 0 == e.wifiSignal ? "4G" : A[0x81], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: A[0x1d] == e.platform ? 1 : 2 };
    }, log: function (e, r) {
      var n = this.getPublicData();for (var t in r) n[t] = r[t];console.log(A[0x82] + e), console.log(n), wx.request({ url: A[0x4f] + HOST + A[0x83] + e + A[0x84] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {}, setMessageToFriendQuery: function (e, r) {
      e = e.activity_id;e = wx.setMessageToFriendQuery({ shareMessageToFriendScene: e });r && r(e);
    }, getFriendShareInfo: function (r) {
      this.getShareInfo(A[0x45], function (e) {
        r && r({ title: e.title, img: e.img });
      });
    } };
}function run(e, r, n) {
  e in _nO06SC && _nO06SC[e](r, n);
}exports.init = function (e, r) {
  run(A[0x85], e, r);
}, exports.login = function (e) {
  run(A[0x86], "", e);
}, exports.pay = function (e, r) {
  run(A[0x87], e, r);
}, exports.openService = function () {
  run(A[0x88]);
}, exports.logCreateRole = function (e, r, n, t, o) {
  run(A[0x89], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.logEnterGame = function (e, r, n, t, o) {
  run(A[0x8a], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.logRoleUpLevel = function (e, r, n, t, o) {
  run(A[0x8b], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o });
}, exports.share = function (e, r) {
  run(A[0x59], { type: e, cp_activity_id: r && r.activity_id ? r.activity_id : "" });
}, exports.msgCheck = function (e, r) {
  run(A[0x8c], e, r);
}, exports.downloadClient = function () {
  run(A[0x8d]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(A[0x8e]);
}, exports.weiduanHelper = function () {
  run(A[0x8f]);
}, exports.setMessageToFriendQuery = function (e, r) {
  run(A[0x90], e, r);
}, exports.getFriendShareInfo = function (e) {
  run(A[0x91], e);
};