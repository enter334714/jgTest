var S = wx.$J;
const sdk = require(S[27404]);sdk.getFyhd().startSdk();var config = { game_id: S[27405], game_pkg: S[27406], partner_id: S[27407], game_ver: S[27408], is_auth: !1 };window.config = config;var $j$41HV = $j$1H4V();var HOST = S[27409];var $j$1VH4 = null;var $j$1V4H = null;var open_id = null;function $j$1H4V() {
  var a = {};return { order_data: {}, init: function (e, n) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log(S[27410]);var r = this;var a;a = (o = wx.getStorageSync(S[27411])) ? 0 : (o = r.uuid(16, 32), wx.setStorageSync(S[27411], o), 1), (e = wx.getStorageSync(S[27412])) || (e = r.uuid(16, 32), wx.setStorageSync(S[27412], e));var o = wx.getLaunchOptionsSync();e = o.scene || "";a && o.query && o.query.ad_code && wx.setStorageSync(S[27413], o.query.ad_code), r.log(S[284], { install: a, scene: e }), wx.showShareMenu();r = o.query && o.query.invite ? o.query.invite : "";o = o.query && o.query.invite_type ? o.query.invite_type : "";r && ($j$1V4H = { invite: r, invite_type: o, is_new: a, scene: e }), t && this.checkGameVersion(t, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(S[27414]);a.login = S[27081] == typeof n ? n : null, this.do_login();
    }, do_login: function () {
      var t = this;var r = t.getPublicData();sdk.getFyhd().getFyhdUserInfo({}, config.is_auth, function (e) {
        console.log(S[27415] + JSON.stringify(e));var n = { openid: open_id = e.result.user.openid };sdk.getFyhd().loginData(n, function () {}), r.openid = e.result.user.openid, r.token = e.result.user.token, r.timestamp = e.result.user.timestamp, r.sign = e.result.user.sign, wx.request({ url: S[27416] + HOST + S[27417], method: S[27418], dataType: S[5696], header: { "content-type": S[27419] }, data: r, success: function (e) {
            if (console.log(S[27420]), console.log(e), 200 == e.statusCode) {
              var n = e.data;if (n.state) {
                e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                  wx.setStorageSync(S[27421], n.data.sdk_token), wx.setStorageSync(S[27422], n.data.user_id), wx.setStorageSync(S[27423], n.data.username), n.data.ext && wx.setStorageSync(S[27424], n.data.ext);
                } catch (e) {}a.login && a.login(0, e);
              } else a.login && a.login(1, { errMsg: n.msg });sdk.getFyhd().shareConfig({}, function (e) {
                console.log(S[27425] + JSON.stringify(e)), wx.onShareAppMessage(function () {
                  return t.logStartShare(S[27426]), { title: e.data.title, imageUrl: e.data.share_pic, query: e.data.path };
                });
              });
            } else a.login && a.login(1, { errMsg: S[27427] });
          } });
      });
    }, share: function (e) {
      a.share = S[27081] == typeof callback ? callback : null;e = e.type || S[27428];console.log(S[27429] + e);this.logStartShare(e), sdk.getFyhd().shareConfig({}, function (e) {
        console.log(S[27430] + JSON.stringify(e)), wx.shareAppMessage({ title: e.data.title, imageUrl: e.data.share_pic, query: e.data.path });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(S[27421]);wx.request({ url: S[27416] + HOST + S[27431], method: S[27418], dataType: S[5696], header: { "content-type": S[27419] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: $j$1VH4 ? $j$1VH4.server_id : "", role_id: $j$1VH4 ? $j$1VH4.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log(S[27432]);wx.getStorageSync(S[27421]);wx.request({ url: S[27416] + HOST + S[27433], method: S[27418], dataType: S[5696], header: { "content-type": S[27419] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var n;console.log(S[27434]), console.log(e), 200 == e.statusCode && (n = e.data).state ? t && t(n.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, n) {
      console.log(S[27435]);var t = wx.getStorageSync(S[27421]);wx.request({ url: S[27416] + HOST + S[27436], method: S[27418], dataType: S[5696], header: { "content-type": S[27419] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: $j$1VH4 ? $j$1VH4.server_id : "", role_id: $j$1VH4 ? $j$1VH4.role_id : "", no_log: 1 }, success: function (e) {
          console.log(S[27437]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : a.share && a.share(1, { errMsg: S[27438] + e.msg }) : a.share && a.share(1, { errMsg: S[27439] });
        } });
    }, updateShare: function (e, n, t, r, a, o) {
      console.log(S[27440]);var i = wx.getStorageSync(S[27421]);wx.request({ url: S[27416] + HOST + S[27441], method: S[27418], dataType: S[5696], header: { "content-type": S[27419] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: t, role_id: r, sever_id: a, scene: o }, success: function (e) {
          console.log(S[27442]), console.log(e);
        } });
    }, pay: function (e, n) {
      var t = this;wx.checkSession({ success: function () {
          t.startPay(e, n);
        }, fail: function () {
          console.log(S[27443]), t.login({}, function () {
            t.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(S[27444]), console.log(e);a.pay = S[27081] == typeof n ? n : null;var t = wx.getStorageSync(S[27421]);var r = wx.getStorageSync(S[27424]);t || r ? (n = wx.getSystemInfoSync(), r = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: r, platform: n.platform }, this.order_data = r, (n = this.getPublicData()).order_data = JSON.stringify(r), n.is_from_min = 1, wx.request({ url: S[27416] + HOST + S[27445], method: S[27418], dataType: S[5696], header: { "content-type": S[27419] }, data: n, success: function (n) {
          if (console.log(S[27446]), console.log(n), 200 == n.statusCode) {
            n = n.data;if (n.state) {
              let e = {};e.openid = open_id, e.goods_count = 1, e.goods_des = n.data.pay_data.productDec, e.goods_identifier = n.data.pay_data.productName, e.goods_name = n.data.pay_data.productId, e.pay_amount = n.data.pay_data.amount, e.redirect_uri = n.data.pay_data.payCallbackUrl, e.role_id = n.data.pay_data.roleId, e.role_name = n.data.pay_data.roleName, e.server_id = n.data.pay_data.serverId, e.server_name = n.data.pay_data.serverName, e.extra_info = n.data.pay_data.orderId, e.order_sn = n.data.pay_data.orderId;n = wx.getSystemInfoSync();S[27447] == n.platform || S[27448] == n.platform ? sdk.getFyhd().submitOrder(e, function () {}) : sdk.getFyhd().shanwan_pay(e, function () {});
            } else a.pay && a.pay(1, { errMsg: e.msg });
          } else a.login && a.login(1, { errMsg: S[27427] });
        } })) : a.pay && a.pay(1, { errMsg: S[27449] });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(S[27422]);var t = wx.getStorageSync(S[27423]);var r = {};r.user_id = n, r.user_name = t, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && ($j$1VH4 = { role_id: e.roleid, server_id: e.serverid }), this.log(S[6], r);r = { openid: open_id, role_id: e.roleid, nickname: e.rolename, type: 1, server_id: e.serverid, server_name: e.servername, create_time: Date.parse(new Date()) / 1e3 };sdk.getFyhd().roleData(r, function () {});e = { openid: open_id, role_id: e.roleid, create_time: Date.parse(new Date()) / 1e3, nickname: e.rolename, server_id: e.serverid, server_name: e.servername };sdk.getFyhd().uploginData(e, function () {});e = { openid: open_id };sdk.getFyhd().valueuser(e, function () {});
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(S[27422]);var t = wx.getStorageSync(S[27423]);var r = {};r.user_id = n, r.user_name = t, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && ($j$1VH4 = { role_id: e.roleid, server_id: e.serverid }), this.log(S[5577], r), $j$1V4H && this.updateShare($j$1V4H.invite, $j$1V4H.invite_type, $j$1V4H.is_new, e.roleid, e.serverid, $j$1V4H.scene);e = { openid: open_id, role_id: e.roleid, create_time: Date.parse(new Date()) / 1e3, nickname: e.rolename, server_id: e.serverid, server_name: e.servername };sdk.getFyhd().uploginData(e, function () {});
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(S[27422]);var t = wx.getStorageSync(S[27423]);var r = {};r.user_id = n, r.user_name = t, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && ($j$1VH4 = { role_id: e.roleid, server_id: e.serverid }), this.log(S[27450], r);
    }, paylimit: function (n) {
      var e = { openid: open_id };sdk.getFyhd().paylimit(e, function (e) {
        n(e);
      });
    }, shareConfig: function (n) {
      sdk.getFyhd().shareConfig({}, function (e) {
        console.log(S[27425] + JSON.stringify(e)), n(e);
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
      var t = S[27451].split("");var r,
          a = [];var o;if (e = e || t.length, n) for (r = 0; r < n; r++) a[r] = t[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", r = 0; r < 36; r++) a[r] || (o = 0 | 16 * Math.random(), a[r] = t[19 == r ? 3 & o | 8 : o]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(S[27411]);var t = wx.getStorageSync(S[27412]);var r = wx.getStorageSync(S[27413]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: r, uuid: n, idfv: t, dname: e.model, mac: S[27452], net_type: 0 == e.wifiSignal ? "4G" : S[27453], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: S[27447] == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, n) {
      var t = this.getPublicData();for (var r in n) t[r] = n[r];console.log(S[27454] + e), console.log(t), wx.request({ url: S[27416] + HOST + S[27455] + e + S[27456] + encodeURIComponent(JSON.stringify(t)) });
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
  e in $j$41HV && $j$41HV[e](n, t);
}wx.setKeepScreenOn({ keepScreenOn: !0 }), exports.init = function (e, n) {
  run(S[364], e, n);
}, exports.login = function (e) {
  run(S[27457], "", e);
}, exports.login = function (e) {
  run(S[27457], "", e);
}, exports.pay = function (e, n) {
  run(S[27458], e, n);
}, exports.openService = function () {
  run(S[23689]);
}, exports.logCreateRole = function (e, n, t, r, a) {
  run(S[27459], { serverid: e, servername: n, roleid: t, rolename: r, rolelevel: a });
}, exports.logEnterGame = function (e, n, t, r, a) {
  run(S[27460], { serverid: e, servername: n, roleid: t, rolename: r, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, t, r, a) {
  run(S[27461], { serverid: e, servername: n, roleid: t, rolename: r, rolelevel: a });
}, exports.share = function (e) {
  run(S[27428], { type: e });
}, exports.downloadClient = function () {
  run(S[27462]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.paylimit = function (e) {
  run(S[27463], e);
}, exports.shareConfig = function (e) {
  run(S[27464], e);
}, exports.msgSecCheck = function (e, n) {
  run(S[27465], e, n);
}, exports.shareRecommend = function (e) {
  run(S[27466], e);
}, exports.sharePlay = function (e, n) {
  run(S[27467], e, n);
}, exports.mplimit = function (e) {
  run(S[27468], e);
}, exports.onShareMessageToFriend = function (e, n) {
  run(S[27469], e, n);
};