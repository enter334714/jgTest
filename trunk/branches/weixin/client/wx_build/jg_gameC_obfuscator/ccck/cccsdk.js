var p = wx.$h;
import Dall from "./ccchelp";var config = { game_id: p[0x31d0], game_pkg: p[0x31d1], partner_id: "19", game_ver: p[0x31d2], is_auth: !1, from: null, tmpId: { 1: p[0x31d3], 2: p[0x31d4], 3: p[0x31d5] }, min_app_id: "" };window.config = config;var $aAEBCD = $aAEDBC();var HOST = p[0x31c0];var t;var t_second = 0;var t_max = 300;var $aAEBDC = null;var $aAECBD = null;var $aAECDB = null;function $aAEDBC() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log(p[0x31d6]);var t = this;var a;a = (r = wx.getStorageSync(p[0x31d7])) ? 0 : (r = t.uuid(16, 32), wx.setStorageSync(p[0x31d7], r), 1), (i = wx.getStorageSync(p[0x31d8])) || (i = t.uuid(16, 32), wx.setStorageSync(p[0x31d8], i));e = wx.getLaunchOptionsSync();var r = e.scene || "";var i;console.log(p[0x31d9]), console.log(e), a && e.query && e.query.ad_code && wx.setStorageSync(p[0x31da], e.query.ad_code), e.query && e.query.from && "" != e.query.from ? (a && wx.setStorageSync(p[0x31db], e.query.from), config.from = e.query.from) : (i = wx.getStorageSync(p[0x31db])) || "" == i || (config.from = i), console.log(config.from), t.log(p[0x31dc], { install: a, scene: r }), wx.showShareMenu();t = e.query && e.query.invite ? e.query.invite : "";e = e.query && e.query.invite_type ? e.query.invite_type : "";t && ($aAECBD = { invite: t, invite_type: e, is_new: a, scene: r }), o && this.checkGameVersion(o, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(p[0x31dd]);var t = this;r.login = p[0x31de] == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var n, o;e.authSetting[p[0x31df]] ? (console.log(p[0x31e0]), t.do_login()) : (console.log(p[0x31e1]), wx.hideLoading({}), e = 2 * (n = wx.getSystemInfoSync()).screenWidth / 3, n.screenHeight, (o = wx.createUserInfoButton({ type: p[0x2cb5], text: p[0x31e2], withCredentials: !1, style: { top: n.windowHeight / 2 + n.windowHeight / 4, left: n.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: p[0x31e3], color: p[0x965], textAlign: p[0x1f9], fontSize: 16, borderRadius: 4 } })).show(), o.onTap(e => {
            console.log(e), $aBDCE({ title: p[0x31e4] }), p[0x31e5] == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), o.destroy();
          }));
        }, fail: function () {
          console.log(p[0x31e6]), t.do_login();
        } }) : (console.log(p[0x31e7] + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var a = this;wx.login({ success: function (e) {
          if (console.log(p[0x31e8] + JSON.stringify(e)), e.code) {
            var t = a.getPublicData();if (t.is_from_min = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", $aAECBD && p[0x1a] == typeof $aAECBD) for (var n in $aAECBD) t[n] = $aAECBD[n];config.is_auth ? wx.getUserInfo({ success: function (e) {
                var n = e.encryptedData;var o = e.iv;e = e.signature;t.encryptedData = n, t.iv = o, t.signature = e, wx.request({ url: p[0x31c3] + HOST + p[0x31e9], method: p[0x31c5], dataType: p[0x31c6], header: { "content-type": p[0x31c7] }, data: t, success: function (e) {
                    if (console.log(p[0x31ea]), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync(p[0x31eb], n.data.sdk_token), wx.setStorageSync(p[0x31ec], n.data.user_id), wx.setStorageSync(p[0x31c1], n.data.username), n.data.ext && wx.setStorageSync(p[0x31ed], n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(p[0x31ee], function (e) {
                        console.log(p[0x31ef]), wx.onShareAppMessage(function () {
                          return a.logStartShare(p[0x31ee]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: p[0x31f0] });
                  }, fail: function (e) {
                    r.login && r.login(1, { errMsg: e.errMsg });
                  } });
              }, fail: function (e) {
                r.login && r.login(1, { errMsg: e.errMsg });
              } }) : wx.request({ url: p[0x31c3] + HOST + p[0x31e9], method: p[0x31c5], dataType: p[0x31c6], header: { "content-type": p[0x31c7] }, data: t, success: function (e) {
                if (console.log(p[0x31ea]), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(p[0x31eb], n.data.sdk_token), wx.setStorageSync(p[0x31ec], n.data.user_id), wx.setStorageSync(p[0x31c1], n.data.username), n.data.ext && wx.setStorageSync(p[0x31ed], n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(p[0x31ee], function (e) {
                    console.log(p[0x31ef]), wx.onShareAppMessage(function () {
                      return a.logStartShare(p[0x31ee]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: p[0x31f0] });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(p[0x31f1] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(p[0x31f2]) || -1 < e.errMsg.indexOf(p[0x31f3])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = p[0x31de] == typeof callback ? callback : null;var n = e.type || p[0x31f4];console.log(p[0x31f5] + n);var o = this;this.getShareInfo(n, function (e) {
        o.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(p[0x31eb]);wx.request({ url: p[0x31c3] + HOST + p[0x31f6], method: p[0x31c5], dataType: p[0x31c6], header: { "content-type": p[0x31c7] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: $aAEBDC ? $aAEBDC.server_id : "", role_id: $aAEBDC ? $aAEBDC.role_id : "", type: e }, success: function (e) {} });
    }, $aCB: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(p[0x31f7]);wx.getStorageSync(p[0x31eb]);wx.request({ url: p[0x31c3] + HOST + p[0x31f8], method: p[0x31c5], dataType: p[0x31c6], header: { "content-type": p[0x31c7] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          console.log(p[0x31f9]), console.log(e), 200 == e.statusCode ? (e = e.data, config.min_app_id = e.data.min_app_id, e.state ? n && n(e.data) : n && n({ develop: 0 })) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, getShareInfo: function (e, n) {
      console.log(p[0x31fa]);var o = wx.getStorageSync(p[0x31eb]);wx.request({ url: p[0x31c3] + HOST + p[0x31fb], method: p[0x31c5], dataType: p[0x31c6], header: { "content-type": p[0x31c7] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, type: e, server_id: $aAEBDC ? $aAEBDC.server_id : "", role_id: $aAEBDC ? $aAEBDC.role_id : "", no_log: 1 }, success: function (e) {
          console.log(p[0x31fc]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: p[0x31fd] + e.msg }) : r.share && r.share(1, { errMsg: p[0x31fe] });
        } });
    }, updateShare: function (e, n, o, t, a, r) {
      console.log(p[0x31ff]);var i = wx.getStorageSync(p[0x31eb]);wx.request({ url: p[0x31c3] + HOST + p[0x3200], method: p[0x31c5], dataType: p[0x31c6], header: { "content-type": p[0x31c7] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: o, role_id: t, sever_id: a, scene: r }, success: function (e) {
          console.log(p[0x3201]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(p[0x3202]);var o = wx.getStorageSync(p[0x31eb]);wx.request({ url: p[0x31c3] + HOST + p[0x3203], method: p[0x31c5], dataType: p[0x31c6], header: { "content-type": p[0x31c7] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, content: e }, success: function (e) {
          console.log(p[0x3204]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var o = this;wx.checkSession({ success: function () {
          o.startPay(e, n);
        }, fail: function () {
          console.log(p[0x3205]), o.login({}, function () {
            o.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(p[0x3206]), console.log(e);var o = this;r.pay = p[0x31de] == typeof n ? n : null;var t = wx.getStorageSync(p[0x31eb]);n = wx.getStorageSync(p[0x31ed]);var a;t && n ? (a = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: n, platform: a.platform }, o.order_data = t, (n = o.getPublicData()).order_data = JSON.stringify(t), n.is_from_min = 1, wx.request({ url: p[0x31c3] + HOST + p[0x3207], method: p[0x31c5], dataType: p[0x31c6], header: { "content-type": p[0x31c7] }, data: n, success: function (e) {
          console.log(p[0x3208]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? p[0x3209] == a.platform || p[0x320a] == a.platform ? e.data.is_android_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : o.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : wx.showModal({ title: p[0x320b], content: p[0x320c], confirmText: p[0x320d], showCancel: !1 }) : o.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: p[0x31f0] });
        } })) : r.pay && r.pay(1, { errMsg: p[0x320e] });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: config.min_app_id, path: p[0x320f] + e.orderId + p[0x3210] + e.money, extraData: {}, envVersion: p[0x31ce], success(e) {} });
    }, minPay: function (n) {
      var o = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          p[0x3211] == e.errMsg && (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          p[0x3212] == e.errMsg ? r.pay && r.pay(2, { errMsg: p[0x3213] }) : r.pay && r.pay(1, { errMsg: p[0x3214] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var o = this;n.buyQuantity <= n.balance ? (console.log(p[0x3215]), wx.showModal({ title: p[0x320b], content: p[0x3216] + n.balance + p[0x3217] + n.buyQuantity + p[0x3218], showCancel: !1, confirmText: p[0x320d], success: function () {
          o.gameGoPay(n);
        } })) : (console.log(p[0x3219]), wx.requestMidasPayment({ mode: p[0x321a], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          p[0x321b] == e.errMsg && o.gameGoPay(n);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(p[0x321c]) ? r.pay && r.pay(2, { errMsg: p[0x3213] }) : r.pay && r.pay(1, { errMsg: p[0x3214] + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      $aAECDB = e.orderId, wx.showModal({ title: p[0x320b], content: p[0x321d], showCancel: !1, confirmText: p[0x320d], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: p[0x321e], sendMessageImg: p[0x321f] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(p[0x3220]);var o = this;var t = wx.getStorageSync(p[0x31ed]);wx.request({ url: p[0x31c3] + HOST + p[0x3221] + config.partner_id + "/" + config.game_pkg + "/", method: p[0x31c5], dataType: p[0x31c6], header: { "content-type": p[0x31c7] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: t }, success: function (e) {
          console.log(p[0x3222]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: p[0x3223] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(p[0x31ec]);var o = wx.getStorageSync(p[0x31c1]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aAEBDC = { role_id: e.roleid, server_id: e.serverid }), this.log(p[0x2b], t);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(p[0x31ec]);var o = wx.getStorageSync(p[0x31c1]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aAEBDC = { role_id: e.roleid, server_id: e.serverid }), this.log(p[0x3224], t), $aAECBD && this.updateShare($aAECBD.invite, $aAECBD.invite_type, $aAECBD.is_new, e.roleid, e.serverid, $aAECBD.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(p[0x31ec]);var o = wx.getStorageSync(p[0x31c1]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aAEBDC = { role_id: e.roleid, server_id: e.serverid }), this.log(p[0x3225], t);
    }, uuid: function (e, n) {
      var o = p[0x3226].split("");var t,
          a = [];var r;if (e = e || o.length, n) for (t = 0; t < n; t++) a[t] = o[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = o[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(p[0x31d7]);var o = wx.getStorageSync(p[0x31d8]);var t = wx.getStorageSync(p[0x31da]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: n, idfv: o, dname: e.model, mac: p[0x3227], net_type: 0 == e.wifiSignal ? "4G" : p[0x3228], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: p[0x3209] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var o = this.getPublicData();for (var t in n) o[t] = n[t];console.log(p[0x3229] + e), console.log(o), wx.request({ url: p[0x31c3] + HOST + p[0x322a] + e + p[0x322b] + encodeURIComponent(JSON.stringify(o)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, subscribeMessage: function (e, n) {
      console.log(p[0x322c] + e), r.subscribeMessage = p[0x31de] == typeof n ? n : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log(p[0x322d]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        }, fail(e) {
          console.log(p[0x322e]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        } });
    }, weiduanHelper: function () {
      new Dall().stebutonanimation(config.partner_id, config.game_pkg, config.game_id);
    } };
}function run(e, n, o) {
  e in $aAEBCD && $aAEBCD[e](n, o);
}exports.init = function (e, n) {
  run(p[0x2afa], e, n);
}, exports.login = function (e) {
  run(p[0x322f], "", e);
}, exports.pay = function (e, n) {
  run(p[0x3230], e, n);
}, exports.$aCB = function () {
  run(p[0x3231]);
}, exports.logCreateRole = function (e, n, o, t, a) {
  run(p[0x3232], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, n, o, t, a) {
  run(p[0x3233], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, o, t, a) {
  run(p[0x3234], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.share = function (e) {
  run(p[0x31f4], { type: e });
}, exports.msgCheck = function (e, n) {
  run(p[0x3235], e, n);
}, exports.downloadClient = function () {
  run(p[0x3236]);
}, exports.subscribeMessage = function (e, n) {
  run(p[0x3237], e, n);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[0x3238]);
}, exports.weiduanHelper = function () {
  run(p[0x3239]);
};