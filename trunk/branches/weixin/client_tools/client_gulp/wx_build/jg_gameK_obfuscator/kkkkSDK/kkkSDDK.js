var U = wx.$k;
const sdk = require(U[67483]);sdk.getFyhd().startSdk();var config = { game_id: U[67484], game_pkg: U[67485], partner_id: U[67486], game_ver: U[67487], is_auth: !1 };window.config = config;var $KNGA51 = $KNA5G1();var HOST = U[67488];var $KNA15G = null;var $KNA1G5 = null;var open_id = null;function $KNA5G1() {
  var a = {};return { order_data: {}, init: function (e, n) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log(U[67489]);var r = this;var a;a = (o = wx.getStorageSync(U[67490])) ? 0 : (o = r.uuid(16, 32), wx.setStorageSync(U[67490], o), 1), (e = wx.getStorageSync(U[67491])) || (e = r.uuid(16, 32), wx.setStorageSync(U[67491], e));var o = wx.getLaunchOptionsSync();e = o.scene || "";a && o.query && o.query.ad_code && wx.setStorageSync(U[67492], o.query.ad_code), r.log(U[40284], { install: a, scene: e }), wx.showShareMenu();r = o.query && o.query.invite ? o.query.invite : "";o = o.query && o.query.invite_type ? o.query.invite_type : "";r && ($KNA1G5 = { invite: r, invite_type: o, is_new: a, scene: e }), t && this.checkGameVersion(t, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(U[67493]);a.login = U[67087] == typeof n ? n : null, this.do_login();
    }, do_login: function () {
      var t = this;var r = t.getPublicData();sdk.getFyhd().getFyhdUserInfo({}, config.is_auth, function (e) {
        console.log(U[67494] + JSON.stringify(e));var n = { openid: open_id = e.result.user.openid };sdk.getFyhd().loginData(n, function () {}), r.openid = e.result.user.openid, r.token = e.result.user.token, r.timestamp = e.result.user.timestamp, r.sign = e.result.user.sign, wx.request({ url: U[67495] + HOST + U[67496], method: U[67424], dataType: U[45696], header: { "content-type": U[67425] }, data: r, success: function (e) {
            if (console.log(U[67497]), console.log(e), 200 == e.statusCode) {
              var n = e.data;if (n.state) {
                e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                  wx.setStorageSync(U[67498], n.data.sdk_token), wx.setStorageSync(U[67499], n.data.user_id), wx.setStorageSync(U[67500], n.data.username), n.data.ext && wx.setStorageSync(U[67501], n.data.ext);
                } catch (e) {}a.login && a.login(0, e);
              } else a.login && a.login(1, { errMsg: n.msg });sdk.getFyhd().shareConfig({}, function (e) {
                console.log(U[67502] + JSON.stringify(e)), wx.onShareAppMessage(function () {
                  return t.logStartShare(U[67503]), { title: e.data.title, imageUrl: e.data.share_pic, query: e.data.path };
                });
              });
            } else a.login && a.login(1, { errMsg: U[67504] });
          } });
      });
    }, share: function (e) {
      a.share = U[67087] == typeof callback ? callback : null;e = e.type || U[67505];console.log(U[67506] + e);this.logStartShare(e), sdk.getFyhd().shareConfig({}, function (e) {
        console.log(U[67507] + JSON.stringify(e)), wx.shareAppMessage({ title: e.data.title, imageUrl: e.data.share_pic, query: e.data.path });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(U[67498]);wx.request({ url: U[67495] + HOST + U[67508], method: U[67424], dataType: U[45696], header: { "content-type": U[67425] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: $KNA15G ? $KNA15G.server_id : "", role_id: $KNA15G ? $KNA15G.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log(U[67509]);wx.getStorageSync(U[67498]);wx.request({ url: U[67495] + HOST + U[67510], method: U[67424], dataType: U[45696], header: { "content-type": U[67425] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var n;console.log(U[67511]), console.log(e), 200 == e.statusCode && (n = e.data).state ? t && t(n.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, n) {
      console.log(U[67512]);var t = wx.getStorageSync(U[67498]);wx.request({ url: U[67495] + HOST + U[67513], method: U[67424], dataType: U[45696], header: { "content-type": U[67425] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: $KNA15G ? $KNA15G.server_id : "", role_id: $KNA15G ? $KNA15G.role_id : "", no_log: 1 }, success: function (e) {
          console.log(U[67514]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : a.share && a.share(1, { errMsg: U[67515] + e.msg }) : a.share && a.share(1, { errMsg: U[67516] });
        } });
    }, updateShare: function (e, n, t, r, a, o) {
      console.log(U[67517]);var i = wx.getStorageSync(U[67498]);wx.request({ url: U[67495] + HOST + U[67518], method: U[67424], dataType: U[45696], header: { "content-type": U[67425] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: t, role_id: r, sever_id: a, scene: o }, success: function (e) {
          console.log(U[67519]), console.log(e);
        } });
    }, pay: function (e, n) {
      var t = this;wx.checkSession({ success: function () {
          t.startPay(e, n);
        }, fail: function () {
          console.log(U[67520]), t.login({}, function () {
            t.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(U[67521]), console.log(e);a.pay = U[67087] == typeof n ? n : null;var t = wx.getStorageSync(U[67498]);var r = wx.getStorageSync(U[67501]);t || r ? (n = wx.getSystemInfoSync(), r = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: r, platform: n.platform }, this.order_data = r, (n = this.getPublicData()).order_data = JSON.stringify(r), n.is_from_min = 1, wx.request({ url: U[67495] + HOST + U[67522], method: U[67424], dataType: U[45696], header: { "content-type": U[67425] }, data: n, success: function (n) {
          if (console.log(U[67523]), console.log(n), 200 == n.statusCode) {
            n = n.data;if (n.state) {
              let e = {};e.openid = open_id, e.goods_count = 1, e.goods_des = n.data.pay_data.productDec, e.goods_identifier = n.data.pay_data.productName, e.goods_name = n.data.pay_data.productId, e.pay_amount = n.data.pay_data.amount, e.redirect_uri = n.data.pay_data.payCallbackUrl, e.role_id = n.data.pay_data.roleId, e.role_name = n.data.pay_data.roleName, e.server_id = n.data.pay_data.serverId, e.server_name = n.data.pay_data.serverName, e.extra_info = n.data.pay_data.orderId, e.order_sn = n.data.pay_data.orderId;n = wx.getSystemInfoSync();U[67419] == n.platform || U[67524] == n.platform ? sdk.getFyhd().submitOrder(e, function () {}) : sdk.getFyhd().shanwan_pay(e, function () {});
            } else a.pay && a.pay(1, { errMsg: e.msg });
          } else a.login && a.login(1, { errMsg: U[67504] });
        } })) : a.pay && a.pay(1, { errMsg: U[67525] });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(U[67499]);var t = wx.getStorageSync(U[67500]);var r = {};r.user_id = n, r.user_name = t, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && ($KNA15G = { role_id: e.roleid, server_id: e.serverid }), this.log(U[40006], r);r = { openid: open_id, role_id: e.roleid, nickname: e.rolename, type: 1, server_id: e.serverid, server_name: e.servername, create_time: Date.parse(new Date()) / 1e3 };sdk.getFyhd().roleData(r, function () {});e = { openid: open_id, role_id: e.roleid, create_time: Date.parse(new Date()) / 1e3, nickname: e.rolename, server_id: e.serverid, server_name: e.servername };sdk.getFyhd().uploginData(e, function () {});e = { openid: open_id };sdk.getFyhd().valueuser(e, function () {});
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(U[67499]);var t = wx.getStorageSync(U[67500]);var r = {};r.user_id = n, r.user_name = t, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && ($KNA15G = { role_id: e.roleid, server_id: e.serverid }), this.log(U[45577], r), $KNA1G5 && this.updateShare($KNA1G5.invite, $KNA1G5.invite_type, $KNA1G5.is_new, e.roleid, e.serverid, $KNA1G5.scene);e = { openid: open_id, role_id: e.roleid, create_time: Date.parse(new Date()) / 1e3, nickname: e.rolename, server_id: e.serverid, server_name: e.servername };sdk.getFyhd().uploginData(e, function () {});
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(U[67499]);var t = wx.getStorageSync(U[67500]);var r = {};r.user_id = n, r.user_name = t, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && ($KNA15G = { role_id: e.roleid, server_id: e.serverid }), this.log(U[67526], r);
    }, paylimit: function (n) {
      var e = { openid: open_id };sdk.getFyhd().paylimit(e, function (e) {
        n(e);
      });
    }, shareConfig: function (n) {
      sdk.getFyhd().shareConfig({}, function (e) {
        console.log(U[67502] + JSON.stringify(e)), n(e);
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
      var t = U[67527].split("");var r,
          a = [];var o;if (e = e || t.length, n) for (r = 0; r < n; r++) a[r] = t[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", r = 0; r < 36; r++) a[r] || (o = 0 | 16 * Math.random(), a[r] = t[19 == r ? 3 & o | 8 : o]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(U[67490]);var t = wx.getStorageSync(U[67491]);var r = wx.getStorageSync(U[67492]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: r, uuid: n, idfv: t, dname: e.model, mac: U[67528], net_type: 0 == e.wifiSignal ? "4G" : U[67529], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: U[67419] == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, n) {
      var t = this.getPublicData();for (var r in n) t[r] = n[r];console.log(U[67530] + e), console.log(t), wx.request({ url: U[67495] + HOST + U[67531] + e + U[67532] + encodeURIComponent(JSON.stringify(t)) });
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
  e in $KNGA51 && $KNGA51[e](n, t);
}wx.setKeepScreenOn({ keepScreenOn: !0 }), exports.init = function (e, n) {
  run(U[40364], e, n);
}, exports.login = function (e) {
  run(U[67533], "", e);
}, exports.login = function (e) {
  run(U[67533], "", e);
}, exports.pay = function (e, n) {
  run(U[67534], e, n);
}, exports.openService = function () {
  run(U[63689]);
}, exports.logCreateRole = function (e, n, t, r, a) {
  run(U[67535], { serverid: e, servername: n, roleid: t, rolename: r, rolelevel: a });
}, exports.logEnterGame = function (e, n, t, r, a) {
  run(U[67536], { serverid: e, servername: n, roleid: t, rolename: r, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, t, r, a) {
  run(U[67537], { serverid: e, servername: n, roleid: t, rolename: r, rolelevel: a });
}, exports.share = function (e) {
  run(U[67505], { type: e });
}, exports.downloadClient = function () {
  run(U[67538]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.paylimit = function (e) {
  run(U[67539], e);
}, exports.shareConfig = function (e) {
  run(U[67540], e);
}, exports.msgSecCheck = function (e, n) {
  run(U[67541], e, n);
}, exports.shareRecommend = function (e) {
  run(U[67542], e);
}, exports.sharePlay = function (e, n) {
  run(U[67543], e, n);
}, exports.mplimit = function (e) {
  run(U[67544], e);
}, exports.onShareMessageToFriend = function (e, n) {
  run(U[67545], e, n);
};