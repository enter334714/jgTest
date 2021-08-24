var a_ = wx.$d;
import dkm from "./dddhelp";var config = { game_id: a_[13449], game_pkg: a_[13450], partner_id: a_[13451], game_ver: a_[13452], partner_label: a_[13453], is_auth: !1 };window.config = config;var PARTNER_UNION_SDK = mainUnionSDK();var PARTNER_HOST = a_[13454];var t;var t_second = 0;var t_max = 300;var user_game_info_9130 = null;var user_invite_info_9130 = null;var D$LNWPR = null;function mainUnionSDK() {
  var a = {};return { order_data: {}, init: function (e, n) {
      var r = e && e.game_ver ? e.game_ver : 0;console.log(a_[13455]);var o = this;var a;a = (t = wx.getStorageSync(a_[13456])) ? 0 : (t = o.uuid(16, 32), wx.setStorageSync(a_[13456], t), 1), (e = wx.getStorageSync(a_[13457])) || (e = o.uuid(16, 32), wx.setStorageSync(a_[13457], e));var t = wx.getLaunchOptionsSync();e = t.scene || "";a && t.query && t.query.ad_code && wx.setStorageSync(a_[13458], t.query.ad_code), o.log(a_[13355], { install: a, scene: e }), dkm.init({ game_ver: r }, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(a_[13459]);var r = this;a.login = a_[13357] == typeof n ? n : null, dkm.login(function (e, n) {
        console.log(a_[13460]), console.log(e), console.log(n), n.token ? r.do_login(n) : a.login && a.login(1, { errMsg: res.errMsg });
      });
    }, do_login: function (e) {
      var n = this.getPublicData();if (n.token = e.token, n.uid = e.userid, n.is_from_min = 1, user_invite_info_9130 && a_[26] == typeof D$LNPRW) for (var r in user_invite_info_9130) n[r] = user_invite_info_9130[r];if (user_invite_info_9130 && a_[26] == typeof user_invite_info_9130) for (var r in user_invite_info_9130) n[r] = user_invite_info_9130[r];wx.request({ url: a_[13363] + PARTNER_HOST + a_[13364], method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: n, success: function (e) {
          if (console.log(a_[13461]), console.log(e), 200 == e.statusCode) {
            var n = e.data;if (n.state) {
              e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                wx.setStorageSync(a_[13462], n.data.sdk_token), wx.setStorageSync(a_[13463], n.data.user_id), wx.setStorageSync(a_[13464], n.data.username);
              } catch (e) {}a.login && a.login(0, e);
            } else a.login && a.login(1, { errMsg: n.msg });
          } else a.login && a.login(1, { errMsg: a_[13465] });
        } });
    }, share: function (e) {
      dkm.share(e);
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(a_[13462]);wx.request({ url: a_[13363] + PARTNER_HOST + a_[13381], method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: user_game_info_9130 ? user_game_info_9130.server_id : "", role_id: user_game_info_9130 ? user_game_info_9130.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      dkm.openService();
    }, checkGameVersion: function (e, r) {
      console.log(a_[13466]);wx.getStorageSync(a_[13462]);wx.request({ url: a_[13363] + PARTNER_HOST + a_[13383], method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var n;console.log(a_[13467]), console.log(e), 200 == e.statusCode && (n = e.data).state ? r && r(n.data) : r && r({ develop: 0 });
        } });
    }, getShareInfo: function (e, n) {
      var r = wx.getStorageSync(a_[13462]);wx.request({ url: a_[13363] + PARTNER_HOST + a_[13386], method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: user_game_info_9130 ? user_game_info_9130.server_id : "", role_id: user_game_info_9130 ? user_game_info_9130.role_id : "", no_log: 1 }, success: function (e) {
          console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : a.share && a.share(1, { errMsg: a_[13468] + e.msg }) : a.share && a.share(1, { errMsg: a_[13468] });
        } });
    }, updateShare: function (e, n, r, o, a, t) {
      var i = wx.getStorageSync(a_[13462]);wx.request({ url: a_[13363] + PARTNER_HOST + a_[13391], method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: r, role_id: o, sever_id: a, scene: t }, success: function (e) {
          console.log(a_[13469]), console.log(e);
        } });
    }, adClick: function (e, n) {
      dkm.adClick(e, n);
    }, msgCheck: function (e, n) {
      dkm.msgCheck(e, n);
    }, pay: function (e, n) {
      var r = this;wx.checkSession({ success: function () {
          r.startPay(e, n);
        }, fail: function () {
          console.log(a_[13470]), r.login({}, function () {
            r.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(a_[13471]), console.log(e);a.pay = a_[13357] == typeof n ? n : null;var r = wx.getStorageSync(a_[13462]);var o;r ? (n = wx.getSystemInfoSync(), o = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, platform: n.platform }, this.order_data = o, (n = this.getPublicData()).order_data = JSON.stringify(o), n.is_from_min = 1, wx.request({ url: a_[13363] + PARTNER_HOST + a_[13398], method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: n, success: function (e) {
          var n;console.log(a_[13472]), console.log(e), 200 == e.statusCode ? (n = e.data).state ? (e = { cpbill: o.cpbill, price: n.data.pay_data.price, currency: a_[13473], productid: n.data.pay_data.productid, productname: n.data.pay_data.productname, productdesc: n.data.pay_data.productdesc, roleid: n.data.pay_data.roleid, rolename: n.data.pay_data.rolename, rolelevel: n.data.pay_data.rolelevel, serverid: n.data.pay_data.serverid, servername: n.data.pay_data.servername, extension: n.data.orderId, callback: function (e) {
              a_[13474] == e.result || a.pay && a.pay(1, { errMsg: n.msg });
            } }, console.log(a_[13475] + JSON.stringify(e)), dkm.pay(e)) : a.pay && a.pay(1, { errMsg: n.msg }) : a.login && a.login(1, { errMsg: a_[13476] });
        } })) : a.pay && a.pay(1, { errMsg: a_[13477] });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: a_[13478], path: a_[13479] + e.orderId + a_[13406] + e.money, extraData: {}, envVersion: a_[13480], success(e) {} });
    }, minPay: function (n) {
      var r = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          a_[13407] == e.errMsg && (e = { cpOrderNo: r.order_data.cpbill, orderNo: n.orderId, amount: r.order_data.price, extension: r.order_data.extension }, a.pay && a.pay(0, e));
        }, fail: function (e) {
          a_[13408] == e.errMsg ? a.pay && a.pay(2, { errMsg: a_[13427] }) : a.pay && a.pay(1, { errMsg: a_[13410] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var r = this;n.buyQuantity <= n.balance ? (console.log(a_[13481]), wx.showModal({ title: a_[13482], content: a_[13483] + n.balance + a_[13484] + n.buyQuantity + a_[13485], showCancel: !1, confirmText: a_[13486], success: function () {
          r.gameGoPay(n);
        } })) : (console.log(a_[13487]), wx.requestMidasPayment({ mode: a_[13416], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          a_[13418] == e.errMsg && r.gameGoPay(n);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(a_[13488]) ? a.pay && a.pay(2, { errMsg: a_[13489] }) : a.pay && a.pay(1, { errMsg: a_[13490] + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      D$LNWPR = e.orderId, wx.showModal({ title: a_[13482], content: a_[13491], showCancel: !1, confirmText: a_[13486], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: a_[13492], sendMessageImg: a_[13493] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(a_[13494]);var r = this;wx.request({ url: a_[13363] + PARTNER_HOST + a_[13425] + config.partner_id + "/" + config.game_pkg + "/", method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: { order_id: n.orderId, time: n.time, sign: n.sign }, success: function (e) {
          console.log(a_[13495]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: r.order_data.cpbill, orderNo: n.orderId, amount: r.order_data.price, extension: r.order_data.extension }, a.pay && a.pay(0, e)) : a.pay && a.pay(1, { errMsg: a_[13496] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(a_[13463]);var r = wx.getStorageSync(a_[13464]);var o = {};o.user_id = n, o.user_name = r, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && (user_game_info_9130 = { role_id: e.roleid, server_id: e.serverid }), this.log(a_[44], o), dkm.logCreateRole(e.serverid, e.servername, e.serverid, e.rolename, e.rolelevel);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(a_[13463]);var r = wx.getStorageSync(a_[13464]);var o = {};o.user_id = n, o.user_name = r, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && (user_game_info_9130 = { role_id: e.roleid, server_id: e.serverid }), this.log(a_[13428], o), dkm.logEnterGame(e.serverid, e.servername, e.serverid, e.rolename, e.rolelevel), user_invite_info_9130 && this.updateShare(user_invite_info_9130.invite, user_invite_info_9130.invite_type, user_invite_info_9130.is_new, e.roleid, e.serverid, user_invite_info_9130.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(a_[13463]);var r = wx.getStorageSync(a_[13464]);var o = {};o.user_id = n, o.user_name = r, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && (user_game_info_9130 = { role_id: e.roleid, server_id: e.serverid }), this.log(a_[13429], o), dkm.logRoleUpLevel(e.serverid, e.servername, e.serverid, e.rolename, e.rolelevel);
    }, weiduanHelper: function () {
      dkm.downloadClient();
    }, uuid: function (e, n) {
      var r = a_[13430].split("");var o,
          a = [];var t;if (e = e || r.length, n) for (o = 0; o < n; o++) a[o] = r[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", o = 0; o < 36; o++) a[o] || (t = 0 | 16 * Math.random(), a[o] = r[19 == o ? 3 & t | 8 : t]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(a_[13456]);var r = wx.getStorageSync(a_[13457]);var o = wx.getStorageSync(a_[13458]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: o, uuid: n, idfv: r, dname: e.model, mac: a_[13431], net_type: 0 == e.wifiSignal ? "4G" : a_[13432], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: a_[13400] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var r = this.getPublicData();for (var o in n) r[o] = n[o];console.log(a_[13497] + e), console.log(r), wx.request({ url: a_[13363] + PARTNER_HOST + a_[13434] + e + a_[13435] + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    } };
}function unionRun(e, n, r) {
  e in PARTNER_UNION_SDK && PARTNER_UNION_SDK[e](n, r);
}exports.init = function (e, n) {
  unionRun(a_[11522], e, n);
}, exports.login = function (e) {
  unionRun(a_[13440], "", e);
}, exports.login = function (e) {
  unionRun(a_[13440], "", e);
}, exports.pay = function (e, n) {
  unionRun(a_[13441], e, n);
}, exports.openService = function () {
  unionRun(a_[13442]);
}, exports.logCreateRole = function (e, n, r, o, a) {
  unionRun(a_[13443], { serverid: e, servername: n, roleid: r, rolename: o, rolelevel: a });
}, exports.logEnterGame = function (e, n, r, o, a) {
  unionRun(a_[13444], { serverid: e, servername: n, roleid: r, rolename: o, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, r, o, a) {
  unionRun(a_[13445], { serverid: e, servername: n, roleid: r, rolename: o, rolelevel: a });
}, exports.share = function (e) {
  unionRun(a_[13379], e);
}, exports.msgCheck = function (e, n) {
  unionRun(a_[13446], e, n);
}, exports.downloadClient = function () {
  unionRun(a_[13447]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.adClick = function (e, n) {
  unionRun(a_[13448], { game_id: e, query: n });
}, exports.weiduanHelper = function () {
  unionRun(a_[13498]);
};