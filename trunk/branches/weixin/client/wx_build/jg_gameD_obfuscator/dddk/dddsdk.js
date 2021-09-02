var v = wx.$d;
import dkm from "./dddhelp";var config = { game_id: v[0x359a], game_pkg: v[0x359b], partner_id: v[0x359c], game_ver: v[0x3537], partner_label: v[0x359d], is_auth: !1, from: null };window.config = config;var PARTNER_UNION_SDK = mainUnionSDK();var PARTNER_HOST = v[0x359e];var t;var t_second = 0;var t_max = 300;var user_game_info_9130 = null;var user_invite_info_9130 = null;var D$Z9NPW = null;var timeHandler = null;function mainUnionSDK() {
  var a = {};return { order_data: {}, init: function (e, n) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log(v[0x359f]);var r = this;var a;a = (t = wx.getStorageSync(v[0x35a0])) ? 0 : (t = r.uuid(16, 32), wx.setStorageSync(v[0x35a0], t), 1), (e = wx.getStorageSync(v[0x35a1])) || (e = r.uuid(16, 32), wx.setStorageSync(v[0x35a1], e));var t = wx.getLaunchOptionsSync();e = t.scene || "";console.log(v[0x35a2]), console.log(t), a && t.query && t.query.ad_code && wx.setStorageSync(v[0x35a3], t.query.ad_code), r.log(v[0x353d], { install: a, scene: e }), dkm.init({ game_ver: o }, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(v[0x35a4]);var o = this;a.login = v[0x3523] == typeof n ? n : null, dkm.login(function (e, n) {
        console.log(v[0x35a5]), console.log(e), console.log(n), n.token ? o.do_login(n) : a.login && a.login(1, { errMsg: res.errMsg });
      });
    }, do_login: function (e) {
      var n = this.getPublicData();if (n.token = e.token, n.uid = e.userid, n.is_from_min = 1, user_invite_info_9130 && v[0x1a] == typeof D$Z9PWN) for (var o in user_invite_info_9130) n[o] = user_invite_info_9130[o];if (user_invite_info_9130 && v[0x1a] == typeof user_invite_info_9130) for (var o in user_invite_info_9130) n[o] = user_invite_info_9130[o];wx.request({ url: v[0x3544] + PARTNER_HOST + v[0x3545], method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: n, success: function (e) {
          if (console.log(v[0x35a6]), console.log(e), 200 == e.statusCode) {
            var n = e.data;if (n.state) {
              e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                wx.setStorageSync(v[0x35a7], n.data.sdk_token), wx.setStorageSync(v[0x35a8], n.data.user_id), wx.setStorageSync(v[0x35a9], n.data.username);
              } catch (e) {}a.login && a.login(0, e);
            } else a.login && a.login(1, { errMsg: n.msg });
          } else a.login && a.login(1, { errMsg: v[0x35aa] });
        } });
    }, share: function (e) {
      dkm.share(e);
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(v[0x35a7]);wx.request({ url: v[0x3544] + PARTNER_HOST + v[0x3556], method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: user_game_info_9130 ? user_game_info_9130.server_id : "", role_id: user_game_info_9130 ? user_game_info_9130.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      dkm.openService();
    }, checkGameVersion: function (e, o) {
      console.log(v[0x35ab]);wx.getStorageSync(v[0x35a7]);wx.request({ url: v[0x3544] + PARTNER_HOST + v[0x3558], method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var n;console.log(v[0x35ac]), console.log(e), timeHandler && clearTimeout(timeHandler), 200 == e.statusCode && (n = e.data).state ? o && o(n.data) : o && o({ develop: 0 });
        }, fail: function (e) {
          console.log(v[0x35ad]), console.log(e), timeHandler && clearTimeout(timeHandler), o && o({ develop: 0 });
        } });timeHandler = setTimeout(function () {
        console.log(v[0x35ae]), o && o({ develop: 0 });
      }, 1e4);
    }, getShareInfo: function (e, n) {
      var o = wx.getStorageSync(v[0x35a7]);wx.request({ url: v[0x3544] + PARTNER_HOST + v[0x355b], method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, type: e, server_id: user_game_info_9130 ? user_game_info_9130.server_id : "", role_id: user_game_info_9130 ? user_game_info_9130.role_id : "", no_log: 1 }, success: function (e) {
          console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : a.share && a.share(1, { errMsg: v[0x35af] + e.msg }) : a.share && a.share(1, { errMsg: v[0x35af] });
        } });
    }, updateShare: function (e, n, o, r, a, t) {
      var i = wx.getStorageSync(v[0x35a7]);wx.request({ url: v[0x3544] + PARTNER_HOST + v[0x3560], method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: o, role_id: r, sever_id: a, scene: t }, success: function (e) {
          console.log(v[0x35b0]), console.log(e);
        } });
    }, adClick: function (e, n) {
      dkm.adClick(e, n);
    }, msgCheck: function (e, n) {
      console.log(v[0x35b1]), dkm.msgCheck(e, n);
    }, pay: function (e, n) {
      var o = this;wx.checkSession({ success: function () {
          o.startPay(e, n);
        }, fail: function () {
          console.log(v[0x35b2]), o.login({}, function () {
            o.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(v[0x35b3]), console.log(e);a.pay = v[0x3523] == typeof n ? n : null;var o = wx.getStorageSync(v[0x35a7]);var r;o ? (n = wx.getSystemInfoSync(), r = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: o, platform: n.platform }, this.order_data = r, (n = this.getPublicData()).order_data = JSON.stringify(r), n.is_from_min = 1, wx.request({ url: v[0x3544] + PARTNER_HOST + v[0x3567], method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: n, success: function (e) {
          var n;console.log(v[0x35b4]), console.log(e), 200 == e.statusCode ? (n = e.data).state ? (e = { cpbill: r.cpbill, price: n.data.pay_data.price, currency: v[0x35b5], productid: n.data.pay_data.productid, productname: n.data.pay_data.productname, productdesc: n.data.pay_data.productdesc, roleid: n.data.pay_data.roleid, rolename: n.data.pay_data.rolename, rolelevel: n.data.pay_data.rolelevel, serverid: n.data.pay_data.serverid, servername: n.data.pay_data.servername, extension: n.data.orderId, callback: function (e) {
              v[0x35b6] == e.result || a.pay && a.pay(1, { errMsg: n.msg });
            } }, console.log(v[0x35b7] + JSON.stringify(e)), dkm.pay(e)) : a.pay && a.pay(1, { errMsg: n.msg }) : a.login && a.login(1, { errMsg: v[0x35b8] });
        } })) : a.pay && a.pay(1, { errMsg: v[0x35b9] });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: v[0x35ba], path: v[0x35bb] + e.orderId + v[0x356f] + e.money, extraData: {}, envVersion: v[0x35bc], success(e) {} });
    }, minPay: function (n) {
      var o = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          v[0x3570] == e.errMsg && (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, a.pay && a.pay(0, e));
        }, fail: function (e) {
          v[0x3571] == e.errMsg ? a.pay && a.pay(2, { errMsg: v[0x3584] }) : a.pay && a.pay(1, { errMsg: v[0x3573] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var o = this;n.buyQuantity <= n.balance ? (console.log(v[0x35bd]), wx.showModal({ title: v[0x35be], content: v[0x35bf] + n.balance + v[0x35c0] + n.buyQuantity + v[0x35c1], showCancel: !1, confirmText: v[0x35c2], success: function () {
          o.gameGoPay(n);
        } })) : (console.log(v[0x35c3]), wx.requestMidasPayment({ mode: v[0x3579], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          v[0x357b] == e.errMsg && o.gameGoPay(n);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(v[0x35c4]) ? a.pay && a.pay(2, { errMsg: v[0x35c5] }) : a.pay && a.pay(1, { errMsg: v[0x35c6] + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      D$Z9NPW = e.orderId, wx.showModal({ title: v[0x35be], content: v[0x35c7], showCancel: !1, confirmText: v[0x35c2], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: v[0x35c8], sendMessageImg: v[0x35c9] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(v[0x35ca]);var o = this;wx.request({ url: v[0x3544] + PARTNER_HOST + v[0x3582] + config.partner_id + "/" + config.game_pkg + "/", method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: { order_id: n.orderId, time: n.time, sign: n.sign }, success: function (e) {
          console.log(v[0x35cb]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, a.pay && a.pay(0, e)) : a.pay && a.pay(1, { errMsg: v[0x35cc] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(v[0x35a8]);var o = wx.getStorageSync(v[0x35a9]);var r = {};r.user_id = n, r.user_name = o, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && (user_game_info_9130 = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x2c], r), dkm.logCreateRole(e.serverid, e.servername, e.serverid, e.rolename, e.rolelevel);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(v[0x35a8]);var o = wx.getStorageSync(v[0x35a9]);var r = {};r.user_id = n, r.user_name = o, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && (user_game_info_9130 = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x3585], r), dkm.logEnterGame(e.serverid, e.servername, e.serverid, e.rolename, e.rolelevel), user_invite_info_9130 && this.updateShare(user_invite_info_9130.invite, user_invite_info_9130.invite_type, user_invite_info_9130.is_new, e.roleid, e.serverid, user_invite_info_9130.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(v[0x35a8]);var o = wx.getStorageSync(v[0x35a9]);var r = {};r.user_id = n, r.user_name = o, r.role_id = e.roleid, r.role_lev = e.rolelevel, r.role_name = e.rolename, r.server_id = e.serverid, e.roleid && e.serverid && (user_game_info_9130 = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x3586], r), dkm.logRoleUpLevel(e.serverid, e.servername, e.serverid, e.rolename, e.rolelevel);
    }, weiduanHelper: function () {
      dkm.downloadClient();
    }, uuid: function (e, n) {
      var o = v[0x3587].split("");var r,
          a = [];var t;if (e = e || o.length, n) for (r = 0; r < n; r++) a[r] = o[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", r = 0; r < 36; r++) a[r] || (t = 0 | 16 * Math.random(), a[r] = o[19 == r ? 3 & t | 8 : t]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(v[0x35a0]);var o = wx.getStorageSync(v[0x35a1]);var r = wx.getStorageSync(v[0x35a3]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: r, uuid: n, idfv: o, dname: e.model, mac: v[0x3588], net_type: 0 == e.wifiSignal ? "4G" : v[0x3589], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: v[0x3569] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var o = this.getPublicData();for (var r in n) o[r] = n[r];console.log(v[0x35cd] + e), console.log(o), wx.request({ url: v[0x3544] + PARTNER_HOST + v[0x358b] + e + v[0x358c] + encodeURIComponent(JSON.stringify(o)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    } };
}function unionRun(e, n, o) {
  e in PARTNER_UNION_SDK && PARTNER_UNION_SDK[e](n, o);
}exports.init = function (e, n) {
  unionRun(v[0x2dd1], e, n);
}, exports.login = function (e) {
  unionRun(v[0x3591], "", e);
}, exports.login = function (e) {
  unionRun(v[0x3591], "", e);
}, exports.pay = function (e, n) {
  unionRun(v[0x3592], e, n);
}, exports.openService = function () {
  unionRun(v[0x3593]);
}, exports.logCreateRole = function (e, n, o, r, a) {
  unionRun(v[0x3594], { serverid: e, servername: n, roleid: o, rolename: r, rolelevel: a });
}, exports.logEnterGame = function (e, n, o, r, a) {
  unionRun(v[0x3595], { serverid: e, servername: n, roleid: o, rolename: r, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, o, r, a) {
  unionRun(v[0x3596], { serverid: e, servername: n, roleid: o, rolename: r, rolelevel: a });
}, exports.share = function (e) {
  unionRun(v[0x3554], e);
}, exports.msgCheck = function (e, n) {
  unionRun(v[0x3597], e, n);
}, exports.downloadClient = function () {
  unionRun(v[0x3598]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.adClick = function (e, n) {
  unionRun(v[0x3599], { game_id: e, query: n });
}, exports.weiduanHelper = function () {
  unionRun(v[0x35ce]);
};