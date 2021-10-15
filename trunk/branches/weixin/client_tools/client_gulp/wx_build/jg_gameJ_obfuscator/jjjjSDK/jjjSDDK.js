var S = wx.$J;
const sdk = require(S[486]);sdk.getFyhd().startSdk();var config = { game_id: S[487], game_pkg: S[488], partner_id: S[489], game_ver: S[490], is_auth: !1 };window.config = config;var $j69OKS = $j6OK9S();var HOST = S[491];var $j6OSK9 = null;var $j6OS9K = null;var open_id = null;function $j6OK9S() {
  var a = {};return { order_data: {}, init: function (e, n) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log(S[492]);var r = this;var a;a = (o = wx.getStorageSync(S[493])) ? 0 : (o = r.uuid(16, 32), wx.setStorageSync(S[493], o), 1), (e = wx.getStorageSync(S[494])) || (e = r.uuid(16, 32), wx.setStorageSync(S[494], e));var o = wx.getLaunchOptionsSync();e = o.scene || "";a && o.query && o.query.ad_code && wx.setStorageSync(S[495], o.query.ad_code), r.log(S[496], { install: a, scene: e }), wx.showShareMenu();r = o.query && o.query.invite ? o.query.invite : "";o = o.query && o.query.invite_type ? o.query.invite_type : "";r && ($j6OS9K = { invite: r, invite_type: o, is_new: a, scene: e }), t && this.checkGameVersion(t, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(S[497]);a.login = S[92] == typeof n ? n : null, this.do_login();
    }, do_login: function () {
      var t = this;var r = t.getPublicData();sdk.getFyhd().getFyhdUserInfo({}, config.is_auth, function (e) {
        console.log(S[498] + JSON.stringify(e));var n = { openid: open_id = e.result.user.openid };sdk.getFyhd().loginData(n, function () {}), r.openid = e.result.user.openid, r.token = e.result.user.token, r.timestamp = e.result.user.timestamp, r.sign = e.result.user.sign, wx.request({ url: S[499] + HOST + S[500], method: S[501], dataType: S[219], header: { "content-type": S[502] }, data: r, success: function (e) {
            if (console.log(S[503]), console.log(e), 200 == e.statusCode) {
              var n = e.data;if (n.state) {
                e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                  wx.setStorageSync(S[504], n.data.sdk_token), wx.setStorageSync(S[505], n.data.user_id), wx.setStorageSync(S[506], n.data.username), n.data.ext && wx.setStorageSync(S[507], n.data.ext);
                } catch (e) {}a.login && a.login(0, e);
              } else a.login && a.login(1, { errMsg: n.msg });sdk.getFyhd().shareConfig({}, function (e) {
                console.log(S[508] + JSON.stringify(e)), wx.onShareAppMessage(function () {
                  return t.logStartShare(S[509]), { title: e.data.title, imageUrl: e.data.share_pic, query: e.data.path };
                });
              });
            } else a.login && a.login(1, { errMsg: S[510] });
          } });
      });
    }, share: function (e) {
      a.share = S[92] == typeof callback ? callback : null;e = e.type || S[511];console.log(S[512] + e);this.logStartShare(e), sdk.getFyhd().shareConfig({}, function (e) {
        console.log(S[513] + JSON.stringify(e)), wx.shareAppMessage({ title: e.data.title, imageUrl: e.data.share_pic, query: e.data.path });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(S[504]);wx.request({ url: S[499] + HOST + S[514], method: S[501], dataType: S[219], header: { "content-type": S[502] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: $j6OSK9 ? $j6OSK9.server_id : "", role_id: $j6OSK9 ? $j6OSK9.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log(S[515]);wx.getStorageSync(S[504]);wx.request({ url: S[499] + HOST + S[516], method: S[501], dataType: S[219], header: { "content-type": S[502] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var n;console.log(S[517]), console.log(e), 200 == e.statusCode && (n = e.data).state ? t && t(n.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, n) {
      console.log(S[518]);var t = wx.getStorageSync(S[504]);wx.request({ url: S[499] + HOST + S[519], method: S[501], dataType: S[219], header: { "content-type": S[502] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: $j6OSK9 ? $j6OSK9.server_id : "", role_id: $j6OSK9 ? $j6OSK9.role_id : "", no_log: 1 }, success: function (e) {
          console.log(S[520]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : a.share && a.share(1, { errMsg: S[521] + e.msg }) : a.share && a.share(1, { errMsg: S[522] });
        } });
    }, updateShare: function (e, n, t, r, a, o) {
      console.log(S[523]);var i = wx.getStorageSync(S[504]);wx.request({ url: S[499] + HOST + S[524], method: S[501], dataType: S[219], header: { "content-type": S[502] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: t, role_id: r, sever_id: a, scene: o }, success: function (e) {
          console.log(S[525]), console.log(e);
        } });
    }, pay: function (e, n) {
      var t = this;wx.checkSession({ success: function () {
          t.startPay(e, n);
        }, fail: function () {
          console.log(S[526]), t.login({}, function () {
            t.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(S[527]), console.log(e);a.pay = S[92] == typeof n ? n : null;var t = wx.getStorageSync(S[504]);var r = wx.getStorageSync(S[507]);t || r ? (n = wx.getSystemInfoSync(), r = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: r, platform: n.platform }, this.order_data = r, (n = this.getPublicData()).order_data = JSON.stringify(r), n.is_from_min = 1, wx.request({ url: S[499] + HOST + S[528], method: S[501], dataType: S[219], header: { "content-type": S[502] }, data: n, success: function (n) {
          if (console.log(S[529]), console.log(n), 200 == n.statusCode) {
            n = n.data;if (n.state) {
              let e = {};e.openid = open_id, e.goods_count = 1, e.goods_des = n.data.pay_data.productDec, e.goods_identifier = n.data.pay_data.productName, e.goods_name = n.data.pay_data.productId, e.pay_amount = n.data.pay_data.amount, e.redirect_uri = n.data.pay_data.payCallbackUrl, e.role_id = n.data.pay_data.roleId, e.role_name = n.data.pay_data.roleName, e.server_id = n.data.pay_data.serverId, e.server_name = n.data.pay_data.serverName, e.extra_info = n.data.pay_data.orderId, e.order_sn = n.data.pay_data.orderId;n = wx.getSystemInfoSync();S[530] == n.platform || S[531] == n.platform ? sdk.getFyhd().submitOrder(e, function () {}) : sdk.getFyhd().shanwan_pay(e, function () {});
            } else a.pay && a.pay(1, { errMsg: e.msg });
          } else a.login && a.login(1, { errMsg: S[510] });
        } })) : a.pay && a.pay(1, { errMsg: S[532] });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(S[505]);var t = wx.getStorageSync(S[506]);var r = {};r.user_id = n, r.user_name = t, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && ($j6OSK9 = { role_id: e.roleid, server_id: e.serverid }), this.log(S[10], r);r = { openid: open_id, role_id: e.roleid, nickname: e.rolename, type: 1, server_id: e.serverid, server_name: e.servername, create_time: Date.parse(new Date()) / 1e3 };sdk.getFyhd().roleData(r, function () {});e = { openid: open_id, role_id: e.roleid, create_time: Date.parse(new Date()) / 1e3, nickname: e.rolename, server_id: e.serverid, server_name: e.servername };sdk.getFyhd().uploginData(e, function () {});e = { openid: open_id };sdk.getFyhd().valueuser(e, function () {});
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(S[505]);var t = wx.getStorageSync(S[506]);var r = {};r.user_id = n, r.user_name = t, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && ($j6OSK9 = { role_id: e.roleid, server_id: e.serverid }), this.log(S[533], r), $j6OS9K && this.updateShare($j6OS9K.invite, $j6OS9K.invite_type, $j6OS9K.is_new, e.roleid, e.serverid, $j6OS9K.scene);e = { openid: open_id, role_id: e.roleid, create_time: Date.parse(new Date()) / 1e3, nickname: e.rolename, server_id: e.serverid, server_name: e.servername };sdk.getFyhd().uploginData(e, function () {});
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(S[505]);var t = wx.getStorageSync(S[506]);var r = {};r.user_id = n, r.user_name = t, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && ($j6OSK9 = { role_id: e.roleid, server_id: e.serverid }), this.log(S[534], r);
    }, paylimit: function (n) {
      var e = { openid: open_id };sdk.getFyhd().paylimit(e, function (e) {
        n(e);
      });
    }, shareConfig: function (n) {
      sdk.getFyhd().shareConfig({}, function (e) {
        console.log(S[508] + JSON.stringify(e)), n(e);
      });
    }, msgSecCheck: function (e, n) {
      e = { content: e };sdk.getFyhd().msgSecCheck(e, function (e) {
        n(e);
      });
    }, shareRecommend: function (n) {
      sdk.getFyhd().shareRecommend({}, function (e) {
        n(e);
      });
    }, sharePlay: function (e, n) {
      e = { openid: open_id, to_appid: e };sdk.getFyhd().sharePlay(e, function (e) {
        n(e);
      });
    }, mplimit: function (n) {
      var e = { openid: open_id };sdk.getFyhd().mplimit(e, function (e) {
        n(e);
      });
    }, uuid: function (e, n) {
      var t = S[535].split("");var r,
          a = [];var o;if (e = e || t.length, n) for (r = 0; r < n; r++) a[r] = t[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", r = 0; r < 36; r++) a[r] || (o = 0 | 16 * Math.random(), a[r] = t[19 == r ? 3 & o | 8 : o]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(S[493]);var t = wx.getStorageSync(S[494]);var r = wx.getStorageSync(S[495]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: r, uuid: n, idfv: t, dname: e.model, mac: S[536], net_type: 0 == e.wifiSignal ? "4G" : S[537], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: S[530] == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, n) {
      var t = this.getPublicData();for (var r in n) t[r] = n[r];console.log(S[538] + e), console.log(t), wx.request({ url: S[499] + HOST + S[539] + e + S[540] + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, onShareMessageToFriend: function (e, n) {
      wx.onShareMessageToFriend(function (e) {
        n(e);
      });
    } };
}function run(e, n, t) {
  e in $j69OKS && $j69OKS[e](n, t);
}wx.setKeepScreenOn({ keepScreenOn: !0 }), exports.init = function (e, n) {
  run(S[541], e, n);
}, exports.login = function (e) {
  run(S[542], "", e);
}, exports.login = function (e) {
  run(S[542], "", e);
}, exports.pay = function (e, n) {
  run(S[543], e, n);
}, exports.openService = function () {
  run(S[544]);
}, exports.logCreateRole = function (e, n, t, r, a) {
  run(S[545], { serverid: e, servername: n, roleid: t, rolename: r, rolelevel: a });
}, exports.logEnterGame = function (e, n, t, r, a) {
  run(S[546], { serverid: e, servername: n, roleid: t, rolename: r, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, t, r, a) {
  run(S[547], { serverid: e, servername: n, roleid: t, rolename: r, rolelevel: a });
}, exports.share = function (e) {
  run(S[511], { type: e });
}, exports.downloadClient = function () {
  run(S[548]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.paylimit = function (e) {
  run(S[549], e);
}, exports.shareConfig = function (e) {
  run(S[550], e);
}, exports.msgSecCheck = function (e, n) {
  run(S[551], e, n);
}, exports.shareRecommend = function (e) {
  run(S[552], e);
}, exports.sharePlay = function (e, n) {
  run(S[553], e, n);
}, exports.mplimit = function (e) {
  run(S[554], e);
}, exports.onShareMessageToFriend = function (e, n) {
  run(S[555], e, n);
};