var v = wx.$d;
import dkm from "./dddhelp";var config = { game_id: v[0x3641], game_pkg: v[0x3642], partner_id: v[0x3643], game_ver: "4.0.3", partner_label: v[0x3644], is_auth: !1, from: null, tmpId: {} };window.config = config;var PARTNER_UNION_SDK = mainUnionSDK();var PARTNER_HOST = v[0x3645];var t;var t_second = 0;var t_max = 300;var user_game_info_9130 = null;var user_invite_info_9130 = null;var D$QB05G = null;var timeHandler = null;function mainUnionSDK() {
  var a = {};return { order_data: {}, init: function (e, n) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log(v[0x3646]);var r = this;var a;a = (t = wx.getStorageSync(v[0x3647])) ? 0 : (t = r.uuid(16, 32), wx.setStorageSync(v[0x3647], t), 1), (e = wx.getStorageSync(v[0x3648])) || (e = r.uuid(16, 32), wx.setStorageSync(v[0x3648], e));var t = wx.getLaunchOptionsSync();e = t.scene || "";console.log(v[0x3649]), console.log(t), a && t.query && t.query.ad_code && wx.setStorageSync(v[0x364a], t.query.ad_code), r.log(v[0x35e4], { install: a, scene: e }), dkm.init({ game_ver: o }, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(v[0x364b]);var o = this;a.login = v[0x26] == typeof n ? n : null, dkm.login(function (e, n) {
        console.log(v[0x364c]), console.log(e), console.log(n), n.token ? o.do_login(n) : a.login && a.login(1, { errMsg: res.errMsg });
      });
    }, do_login: function (e) {
      var n = this.getPublicData();if (n.token = e.token, n.uid = e.userid, n.is_from_min = 1, user_invite_info_9130 && v[0x1d] == typeof D$QB5G0) for (var o in user_invite_info_9130) n[o] = user_invite_info_9130[o];if (user_invite_info_9130 && v[0x1d] == typeof user_invite_info_9130) for (var o in user_invite_info_9130) n[o] = user_invite_info_9130[o];wx.request({ url: v[0x35eb] + PARTNER_HOST + v[0x35ec], method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: n, success: function (e) {
          if (console.log(v[0x364d]), console.log(e), 200 == e.statusCode) {
            var n = e.data;if (n.state) {
              e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                wx.setStorageSync(v[0x364e], n.data.sdk_token), wx.setStorageSync(v[0x364f], n.data.user_id), wx.setStorageSync(v[0x3650], n.data.username);
              } catch (e) {}a.login && a.login(0, e);
            } else a.login && a.login(1, { errMsg: n.msg });
          } else a.login && a.login(1, { errMsg: v[0x3651] });
        } });
    }, share: function (e) {
      dkm.share(e);
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(v[0x364e]);wx.request({ url: v[0x35eb] + PARTNER_HOST + v[0x35fd], method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: user_game_info_9130 ? user_game_info_9130.server_id : "", role_id: user_game_info_9130 ? user_game_info_9130.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      dkm.openService();
    }, checkGameVersion: function (e, o) {
      console.log(v[0x3652]);wx.getStorageSync(v[0x364e]);wx.request({ url: v[0x35eb] + PARTNER_HOST + v[0x35ff], method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var n;console.log(v[0x3653]), console.log(e), timeHandler && clearTimeout(timeHandler), 200 == e.statusCode && (n = e.data).state ? o && o(n.data) : o && o({ develop: 0 });
        }, fail: function (e) {
          console.log(v[0x3654]), console.log(e), timeHandler && clearTimeout(timeHandler), o && o({ develop: 0 });
        } });timeHandler = setTimeout(function () {
        console.log(v[0x3655]), o && o({ develop: 0 });
      }, 1e4);
    }, getShareInfo: function (e, n) {
      var o = wx.getStorageSync(v[0x364e]);wx.request({ url: v[0x35eb] + PARTNER_HOST + v[0x3602], method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, type: e, server_id: user_game_info_9130 ? user_game_info_9130.server_id : "", role_id: user_game_info_9130 ? user_game_info_9130.role_id : "", no_log: 1 }, success: function (e) {
          console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : a.share && a.share(1, { errMsg: v[0x3656] + e.msg }) : a.share && a.share(1, { errMsg: v[0x3656] });
        } });
    }, updateShare: function (e, n, o, r, a, t) {
      var i = wx.getStorageSync(v[0x364e]);wx.request({ url: v[0x35eb] + PARTNER_HOST + v[0x3607], method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: o, role_id: r, sever_id: a, scene: t }, success: function (e) {
          console.log(v[0x3657]), console.log(e);
        } });
    }, adClick: function (e, n) {
      dkm.adClick(e, n);
    }, msgCheck: function (e, n) {
      console.log(v[0x3658]), dkm.msgCheck(e, n);
    }, pay: function (e, n) {
      var o = this;wx.checkSession({ success: function () {
          o.startPay(e, n);
        }, fail: function () {
          console.log(v[0x3659]), o.login({}, function () {
            o.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(v[0x365a]), console.log(e);a.pay = v[0x26] == typeof n ? n : null;var o = wx.getStorageSync(v[0x364e]);var r;o ? (n = wx.getSystemInfoSync(), r = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: o, platform: n.platform }, this.order_data = r, (n = this.getPublicData()).order_data = JSON.stringify(r), n.is_from_min = 1, wx.request({ url: v[0x35eb] + PARTNER_HOST + v[0x360e], method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: n, success: function (e) {
          var n;console.log(v[0x365b]), console.log(e), 200 == e.statusCode ? (n = e.data).state ? (e = { cpbill: r.cpbill, price: n.data.pay_data.price, currency: v[0x365c], productid: n.data.pay_data.productid, productname: n.data.pay_data.productname, productdesc: n.data.pay_data.productdesc, roleid: n.data.pay_data.roleid, rolename: n.data.pay_data.rolename, rolelevel: n.data.pay_data.rolelevel, serverid: n.data.pay_data.serverid, servername: n.data.pay_data.servername, extension: n.data.orderId, callback: function (e) {
              v[0x365d] == e.result || a.pay && a.pay(1, { errMsg: n.msg });
            } }, console.log(v[0x365e] + JSON.stringify(e)), dkm.pay(e)) : a.pay && a.pay(1, { errMsg: n.msg }) : a.login && a.login(1, { errMsg: v[0x365f] });
        } })) : a.pay && a.pay(1, { errMsg: v[0x3660] });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: v[0x3661], path: v[0x3662] + e.orderId + v[0x3616] + e.money, extraData: {}, envVersion: v[0x3663], success(e) {} });
    }, minPay: function (n) {
      var o = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          v[0x3617] == e.errMsg && (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, a.pay && a.pay(0, e));
        }, fail: function (e) {
          v[0x3618] == e.errMsg ? a.pay && a.pay(2, { errMsg: v[0x362b] }) : a.pay && a.pay(1, { errMsg: v[0x361a] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var o = this;n.buyQuantity <= n.balance ? (console.log(v[0x3664]), wx.showModal({ title: v[0x3665], content: v[0x3666] + n.balance + v[0x3667] + n.buyQuantity + v[0x3668], showCancel: !1, confirmText: v[0x3669], success: function () {
          o.gameGoPay(n);
        } })) : (console.log(v[0x366a]), wx.requestMidasPayment({ mode: v[0x3620], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          v[0x3622] == e.errMsg && o.gameGoPay(n);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(v[0x366b]) ? a.pay && a.pay(2, { errMsg: v[0x366c] }) : a.pay && a.pay(1, { errMsg: v[0x366d] + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      D$QB05G = e.orderId, wx.showModal({ title: v[0x3665], content: v[0x366e], showCancel: !1, confirmText: v[0x3669], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: v[0x366f], sendMessageImg: v[0x3670] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(v[0x3671]);var o = this;wx.request({ url: v[0x35eb] + PARTNER_HOST + v[0x3629] + config.partner_id + "/" + config.game_pkg + "/", method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: { order_id: n.orderId, time: n.time, sign: n.sign }, success: function (e) {
          console.log(v[0x3672]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, a.pay && a.pay(0, e)) : a.pay && a.pay(1, { errMsg: v[0x3673] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(v[0x364f]);var o = wx.getStorageSync(v[0x3650]);var r = {};r.user_id = n, r.user_name = o, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && (user_game_info_9130 = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x63], r), dkm.logCreateRole(e.serverid, e.servername, e.serverid, e.rolename, e.rolelevel);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(v[0x364f]);var o = wx.getStorageSync(v[0x3650]);var r = {};r.user_id = n, r.user_name = o, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && (user_game_info_9130 = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x362c], r), dkm.logEnterGame(e.serverid, e.servername, e.serverid, e.rolename, e.rolelevel), user_invite_info_9130 && this.updateShare(user_invite_info_9130.invite, user_invite_info_9130.invite_type, user_invite_info_9130.is_new, e.roleid, e.serverid, user_invite_info_9130.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(v[0x364f]);var o = wx.getStorageSync(v[0x3650]);var r = {};r.user_id = n, r.user_name = o, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && (user_game_info_9130 = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x362d], r), dkm.logRoleUpLevel(e.serverid, e.servername, e.serverid, e.rolename, e.rolelevel);
    }, weiduanHelper: function () {
      dkm.downloadClient();
    }, uuid: function (e, n) {
      var o = v[0x362e].split("");var r,
          a = [];var t;if (e = e || o.length, n) for (r = 0; r < n; r++) a[r] = o[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", r = 0; r < 36; r++) a[r] || (t = 0 | 16 * Math.random(), a[r] = o[19 == r ? 3 & t | 8 : t]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(v[0x3647]);var o = wx.getStorageSync(v[0x3648]);var r = wx.getStorageSync(v[0x364a]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: r, uuid: n, idfv: o, dname: e.model, mac: v[0x362f], net_type: 0 == e.wifiSignal ? "4G" : v[0x3630], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: v[0x3610] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var o = this.getPublicData();for (var r in n) o[r] = n[r];console.log(v[0x3674] + e), console.log(o), wx.request({ url: v[0x35eb] + PARTNER_HOST + v[0x3632] + e + v[0x3633] + encodeURIComponent(JSON.stringify(o)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    } };
}function unionRun(e, n, o) {
  e in PARTNER_UNION_SDK && PARTNER_UNION_SDK[e](n, o);
}exports.init = function (e, n) {
  unionRun(v[0x2e8f], e, n);
}, exports.login = function (e) {
  unionRun(v[0x3638], "", e);
}, exports.login = function (e) {
  unionRun(v[0x3638], "", e);
}, exports.pay = function (e, n) {
  unionRun(v[0x3639], e, n);
}, exports.openService = function () {
  unionRun(v[0x363a]);
}, exports.logCreateRole = function (e, n, o, r, a) {
  unionRun(v[0x363b], { serverid: e, servername: n, roleid: o, rolename: r, rolelevel: a });
}, exports.logEnterGame = function (e, n, o, r, a) {
  unionRun(v[0x363c], { serverid: e, servername: n, roleid: o, rolename: r, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, o, r, a) {
  unionRun(v[0x363d], { serverid: e, servername: n, roleid: o, rolename: r, rolelevel: a });
}, exports.share = function (e) {
  unionRun(v[0x35fb], e);
}, exports.msgCheck = function (e, n) {
  unionRun(v[0x363e], e, n);
}, exports.downloadClient = function () {
  unionRun(v[0x363f]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.adClick = function (e, n) {
  unionRun(v[0x3640], { game_id: e, query: n });
}, exports.weiduanHelper = function () {
  unionRun(v[0x3675]);
};