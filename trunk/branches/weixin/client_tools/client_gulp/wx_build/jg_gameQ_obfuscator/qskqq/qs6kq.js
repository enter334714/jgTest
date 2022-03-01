var g = wx.$Q;
import Gzsdk from "../utils/gzsdk";import md5 from "../utils/md5";var config = { game_id: 256, game_pkg: g[290082], partner_label: g[290083], partner_id: g[290084], game_ver: g[290085], is_auth: !1, partner_game_id: g[290086], partner_channel_id: g[290087], partner_app_id: g[290088], partner_secret: g[290089] };window.config = config;var _qAO7YU = _qA7UYO();var HOST = g[290090];var _qAO7UY = null;var _qA7YUO = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var partner_user_info = null;const gzsdk = new Gzsdk();function _qA7UYO() {
  var o = {};return { order_data: {}, init: function (e, n) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log(g[290091]);e = this;var r;r = wx.getStorageSync(g[290092]) ? 0 : (r = e.uuid(16, 32), wx.setStorageSync(g[290092], r), 1), wx.getStorageSync(g[290093]) || (o = e.uuid(16, 32), wx.setStorageSync(g[290093], o));var o = wx.getLaunchOptionsSync();var a = o.scene || "";r && o.query && o.query.ad_code && wx.setStorageSync(g[290094], o.query.ad_code), e.log(g[261950], { install: r, scene: a }), wx.showShareMenu();e = o.query && o.query.invite ? o.query.invite : "";o = o.query && o.query.invite_type ? o.query.invite_type : "";e && (_qA7YUO = { invite: e, invite_type: o, is_new: r, scene: a }), t && this.checkGameVersion(t, function (r) {
        gzsdk.init({ game_id: config.partner_game_id, channel_id: config.partner_channel_id, appid: config.partner_app_id, version: t }, function (e) {
          console.log(g[290095] + JSON.stringify(e)), r.res_msg = e.res_msg, n && n(r), e && 200 == e.res_code && e.res_msg.iosPay;
        });
      });
    }, login: function (e, r) {
      console.log(g[290096]), o.login = g[260958] == typeof r ? r : null;var n = this;gzsdk.login(function (e) {
        e && 200 == e.res_code ? (console.log(g[290097] + JSON.stringify(e)), n.do_login(e.res_msg)) : console.log(g[290098] + JSON.stringify(e));
      });
    }, do_login: function (n) {
      var t = this;var e = t.getPublicData();if (e.user_info = JSON.stringify(n), _qA7YUO && g[260857] == typeof _qA7YUO) for (var r in _qA7YUO) e[r] = _qA7YUO[r];wx.request({ url: g[287095] + HOST + g[290099], method: g[260220], dataType: g[261202], header: { "content-type": g[260378] }, data: e, success: function (e) {
          if (console.log(g[290100] + JSON.stringify(e)), 200 == e.statusCode) {
            e = e.data;if (e.state) {
              partner_user_info = { user_id: e.data.ext.partner_uid, token: n.token };try {
                wx.setStorageSync(g[290101], e.data.sdk_token), wx.setStorageSync(g[290102], e.data.user_id), wx.setStorageSync(g[290103], e.data.username), e.data.ext && wx.setStorageSync(g[290104], e.data.ext);
              } catch (e) {}var r = { userid: e.data.user_id, account: e.data.nick_name, token: e.data.token, invite_uid: e.data.invite_uid || "", invite_nickname: e.data.invite_nickname || "", invite_head_img: e.data.invite_head_img || "", head_img: e.data.head_img || "", is_client: e.data.is_client || "0", ios_pay: e.data.ios_pay || "0" };o.login && o.login(0, r);
            } else o.login && o.login(1, { errMsg: e.msg });t.getShareInfo(g[290105], function (e) {
              console.log(g[290106]), wx.onShareAppMessage(function () {
                return t.logStartShare(g[290105]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else o.login && o.login(1, { errMsg: g[290107] });
        } });
    }, share: function (e) {
      o.share = g[260958] == typeof callback ? callback : null;var r = e.type || g[260337];console.log(g[290108] + r);var n = this;this.getShareInfo(r, function (e) {
        n.logStartShare(r);e.query;wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(g[290101]);wx.request({ url: g[287095] + HOST + g[290109], method: g[260220], dataType: g[261202], header: { "content-type": g[260378] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: _qAO7UY ? _qAO7UY.server_id : "", role_id: _qAO7UY ? _qAO7UY.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(g[290110]);wx.getStorageSync(g[290101]);wx.request({ url: g[287095] + HOST + g[290111], method: g[260220], dataType: g[261202], header: { "content-type": g[260378] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(g[290112] + JSON.stringify(e)), 200 == e.statusCode && (r = e.data).state ? n && n(r.data) : n && n({ develop: 0 });
        } });
    }, getShareInfo: function (e, r) {
      console.log(g[290113]);var n = wx.getStorageSync(g[290101]);wx.request({ url: g[287095] + HOST + g[290114], method: g[260220], dataType: g[261202], header: { "content-type": g[260378] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, type: e, server_id: _qAO7UY ? _qAO7UY.server_id : "", role_id: _qAO7UY ? _qAO7UY.role_id : "", no_log: 1 }, success: function (e) {
          console.log(g[290115]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : o.share && o.share(1, { errMsg: g[290116] + e.msg }) : o.share && o.share(1, { errMsg: g[290117] });
        } });
    }, updateShare: function (e, r, n, t, o, a) {
      console.log(g[290118]);var i = wx.getStorageSync(g[290101]);wx.request({ url: g[287095] + HOST + g[290119], method: g[260220], dataType: g[261202], header: { "content-type": g[260378] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: n, role_id: t, sever_id: o, scene: a }, success: function (e) {
          console.log(g[290120] + JSON.stringify(e));
        } });
    }, msgCheck: function (e, r) {
      console.log(g[290121] + e);let n = { data: {} };gzsdk.msgCheck({ user_id: partner_user_info.user_id, content: e }, function (e) {
        e && 200 == e.res_code ? n.data.state = 1 : n.data.state = 0, n.statusCode = 200, r && r(n);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log(g[290122] + JSON.stringify(e));var n = this;o.pay = g[260958] == typeof r ? r : null;r = wx.getStorageSync(g[290101]);var t = wx.getStorageSync(g[290104]);r ? (e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, session_key: t, platform: platform, user_id: partner_user_info.user_id }, n.order_data = e, (r = n.getPublicData()).order_data = JSON.stringify(e), wx.request({ url: g[287095] + HOST + g[290123], method: g[260220], dataType: g[261202], header: { "content-type": g[260378] }, data: r, success: function (e) {
          console.log(g[290124] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? "" == e.data.ext ? gzsdk.pay(e.data.pay_data, function (e) {
            console.log(g[290125] + JSON.stringify(e));
          }) : n.extDo({ ext1: e.data.ext, ext2: e.data.pay_data }) : o.pay && o.pay(1, { errMsg: e.msg }) : o.login && o.login(1, { errMsg: g[290107] });
        } })) : o.pay && o.pay(1, { errMsg: g[290126] });
    }, extDo: function (e) {
      wx.navigateToMiniProgram({ appId: e.ext1, path: g[290127] + e.ext2.trade_id + g[290128] + e.ext2.total_fee / 100, extraData: {}, envVersion: g[290129], success(e) {} });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync(g[290102]);var n = wx.getStorageSync(g[290103]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (_qAO7UY = { role_id: e.roleid, server_id: e.serverid }), this.log(g[260456], t);r = Date.parse(new Date()).toString();var o = { action: g[290130], event_time: r = r.substr(0, 10), user_id: partner_user_info.user_id, game_id: config.partner_game_id, game_server: e.serverid, server_name: e.servername, role_id: e.roleid, role_name: e.rolename, role_gender: 0 };let a = {};n = Object.keys(o);n.sort(), n.forEach(e => {
        a[e] = o[e];
      });var i = "";Object.getOwnPropertyNames(a).forEach(function (e) {
        "" != a[e] && (i += e + "=" + a[e] + "&");
      });t = i + g[290131] + config.partner_secret;o.sign = md5(t).toUpperCase(), gzsdk.report(o);
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync(g[290102]);var n = wx.getStorageSync(g[290103]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (_qAO7UY = { role_id: e.roleid, server_id: e.serverid }), this.log(g[267290], t), _qA7YUO && this.updateShare(_qA7YUO.invite, _qA7YUO.invite_type, _qA7YUO.is_new, e.roleid, e.serverid, _qA7YUO.scene);r = { action: g[290132], user_id: partner_user_info.user_id, game_id: config.partner_game_id, game_server: e.serverid, server_name: e.servername, role_id: e.roleid, role_name: e.rolename, role_level: e.rolelevel, role_gender: 0, role_power: 0, vip_level: 0 };gzsdk.report(r);
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync(g[290102]);var n = wx.getStorageSync(g[290103]);var t = {};t.user_id = r, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (_qAO7UY = { role_id: e.roleid, server_id: e.serverid, server_name: e.servername, role_name: e.rolename, role_level: e.rolelevel, role_createtime: e.rolecreatetime }), this.log(g[290133], t);r = Date.parse(new Date()).toString();n = { action: g[290134], event_time: r = r.substr(0, 10), user_id: partner_user_info.user_id, game_id: config.partner_game_id, game_server: e.serverid, server_name: e.servername, role_id: e.roleid, role_name: e.rolename, role_level: e.rolelevel, role_gender: 0, role_power: 0, vip_level: 0 };gzsdk.report(n);
    }, uuid: function (e, r) {
      var n = g[290135].split("");var t,
          o = [];var a;if (e = e || n.length, r) for (t = 0; t < r; t++) o[t] = n[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", t = 0; t < 36; t++) o[t] || (a = 0 | 16 * Math.random(), o[t] = n[19 == t ? 3 & a | 8 : a]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync(g[290092]);var r = wx.getStorageSync(g[290093]);var n = wx.getStorageSync(g[290094]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: n, uuid: e, idfv: r, mac: g[290136], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : g[290137], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: g[260111] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var n = this.getPublicData();for (var t in r) n[t] = r[t];console.log(g[290138] + e), console.log(n), wx.request({ url: g[287095] + HOST + g[290139] + e + g[290140] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {}, setMessageToFriendQuery: function (e, r) {
      e = e.activity_id;r(wx.setMessageToFriendQuery({ shareMessageToFriendScene: e }));
    }, subscribeMessage: function (e, r) {
      console.log(g[290141] + e), o.subscribeMessage = g[260958] == typeof r ? r : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log(g[290142]), console.log(e), o.subscribeMessage && o.subscribeMessage(e);
        }, fail(e) {
          console.log(g[290143]), console.log(e), o.subscribeMessage && o.subscribeMessage(e);
        } });
    } };
}function run(e, r, n) {
  e in _qAO7YU && _qAO7YU[e](r, n);
}exports.init = function (e, r) {
  run(g[260232], e, r);
}, exports.login = function (e) {
  run(g[260257], "", e);
}, exports.login = function (e) {
  run(g[260257], "", e);
}, exports.pay = function (e, r) {
  run(g[260324], e, r);
}, exports.openService = function () {
  run(g[260338]);
}, exports.logCreateRole = function (e, r, n, t, o, a) {
  run(g[260332], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o, rolecreatetime: a });
}, exports.logEnterGame = function (e, r, n, t, o, a) {
  run(g[260334], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o, rolecreatetime: a });
}, exports.logRoleUpLevel = function (e, r, n, t, o, a) {
  run(g[260336], { serverid: e, servername: r, roleid: n, rolename: t, rolelevel: o, rolecreatetime: a });
}, exports.share = function (e) {
  run(g[260337], { type: e });
}, exports.msgCheck = function (e, r) {
  run(g[260199], e, r);
}, exports.downloadClient = function () {
  run(g[290144]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(g[290145]);
}, exports.weiduanHelper = function () {
  run(g[260340]);
}, exports.setMessageToFriendQuery = function (e, r) {
  run(g[290146], e, r);
}, exports.subscribeMessage = function (e, r) {
  run(g[260349], e, r);
};