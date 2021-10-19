var W = wx.$l;
import Dall from "./llllHELP";var config = { game_id: W[110075], game_pkg: W[110076], partner_id: "19", game_ver: W[110077], is_auth: !1, tmpId: { 1: W[110078], 2: W[110079], 3: W[110080] }, min_app_id: "" };window.config = config;var $LC4GDU = $LCGD4U();var HOST = W[110064];var t;var t_second = 0;var t_max = 300;var $LCGUD4 = null;var $LCGU4D = null;var $LCGDU4 = null;function $LCGD4U() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log(W[110081]);var o = this;var a;a = (r = wx.getStorageSync(W[110082])) ? 0 : (r = o.uuid(16, 32), wx.setStorageSync(W[110082], r), 1), (e = wx.getStorageSync(W[110083])) || (e = o.uuid(16, 32), wx.setStorageSync(W[110083], e));var r = wx.getLaunchOptionsSync();e = r.scene || "";a && r.query && r.query.ad_code && wx.setStorageSync(W[110084], r.query.ad_code), o.log(W[81051], { install: a, scene: e }), wx.showShareMenu();o = r.query && r.query.invite ? r.query.invite : "";r = r.query && r.query.invite_type ? r.query.invite_type : "";o && ($LCGU4D = { invite: o, invite_type: r, is_new: a, scene: e }), t && this.checkGameVersion(t, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(W[110085]);var o = this;r.login = W[81364] == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var n, t;e.authSetting[W[110086]] ? (console.log(W[110087]), o.do_login()) : (console.log(W[110088]), wx.hideLoading({}), e = 2 * (n = wx.getSystemInfoSync()).screenWidth / 3, n.screenHeight, (t = wx.createUserInfoButton({ type: W[80175], text: W[110089], withCredentials: !1, style: { top: n.windowHeight / 2 + n.windowHeight / 4, left: n.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: W[110090], color: W[80092], textAlign: W[80045], fontSize: 16, borderRadius: 4 } })).show(), t.onTap(e => {
            console.log(e), $LU4DG({ title: W[110091] }), W[110092] == e.errMsg ? o.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : o.do_login(), t.destroy();
          }));
        }, fail: function () {
          console.log(W[110093]), o.do_login();
        } }) : (console.log(W[110094] + config.is_auth), o.do_login());
    }, do_login: function (t) {
      var a = this;wx.login({ success: function (e) {
          if (console.log(W[110095] + JSON.stringify(e)), e.code) {
            var o = a.getPublicData();if (o.is_from_min = 1, o.code = e.code, o.nick_name = t ? t.nick_name : "", o.head_img = t ? t.head_img : "", $LCGU4D && W[81438] == typeof $LCGU4D) for (var n in $LCGU4D) o[n] = $LCGU4D[n];config.is_auth ? wx.getUserInfo({ success: function (e) {
                var n = e.encryptedData;var t = e.iv;e = e.signature;o.encryptedData = n, o.iv = t, o.signature = e, wx.request({ url: W[110067] + HOST + W[110096], method: W[80573], dataType: W[81188], header: { "content-type": W[80701] }, data: o, success: function (e) {
                    if (console.log(W[110097]), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync(W[110098], n.data.sdk_token), wx.setStorageSync(W[110099], n.data.user_id), wx.setStorageSync(W[110065], n.data.username), n.data.ext && wx.setStorageSync(W[110100], n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(W[110101], function (e) {
                        console.log(W[110102]), wx.onShareAppMessage(function () {
                          return a.logStartShare(W[110101]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: W[110103] });
                  }, fail: function (e) {
                    r.login && r.login(1, { errMsg: e.errMsg });
                  } });
              }, fail: function (e) {
                r.login && r.login(1, { errMsg: e.errMsg });
              } }) : wx.request({ url: W[110067] + HOST + W[110096], method: W[80573], dataType: W[81188], header: { "content-type": W[80701] }, data: o, success: function (e) {
                if (console.log(W[110097]), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(W[110098], n.data.sdk_token), wx.setStorageSync(W[110099], n.data.user_id), wx.setStorageSync(W[110065], n.data.username), n.data.ext && wx.setStorageSync(W[110100], n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(W[110101], function (e) {
                    console.log(W[110102]), wx.onShareAppMessage(function () {
                      return a.logStartShare(W[110101]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: W[110103] });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(W[110104] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(W[110105]) || -1 < e.errMsg.indexOf(W[110106])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = W[81364] == typeof callback ? callback : null;var n = e.type || W[80660];console.log(W[110107] + n);var t = this;this.getShareInfo(n, function (e) {
        t.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(W[110098]);wx.request({ url: W[110067] + HOST + W[110108], method: W[80573], dataType: W[81188], header: { "content-type": W[80701] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: $LCGUD4 ? $LCGUD4.server_id : "", role_id: $LCGUD4 ? $LCGUD4.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(W[110109]);wx.getStorageSync(W[110098]);wx.request({ url: W[110067] + HOST + W[110110], method: W[80573], dataType: W[81188], header: { "content-type": W[80701] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          console.log(W[110111]), console.log(e), 200 == e.statusCode ? (e = e.data, config.min_app_id = e.data.min_app_id, e.state ? n && n(e.data) : n && n({ develop: 0 })) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, getShareInfo: function (e, n) {
      console.log(W[110112]);var t = wx.getStorageSync(W[110098]);wx.request({ url: W[110067] + HOST + W[110113], method: W[80573], dataType: W[81188], header: { "content-type": W[80701] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: $LCGUD4 ? $LCGUD4.server_id : "", role_id: $LCGUD4 ? $LCGUD4.role_id : "", no_log: 1 }, success: function (e) {
          console.log(W[110114]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: W[110115] + e.msg }) : r.share && r.share(1, { errMsg: W[110116] });
        } });
    }, updateShare: function (e, n, t, o, a, r) {
      console.log(W[110117]);var i = wx.getStorageSync(W[110098]);wx.request({ url: W[110067] + HOST + W[110118], method: W[80573], dataType: W[81188], header: { "content-type": W[80701] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: t, role_id: o, sever_id: a, scene: r }, success: function (e) {
          console.log(W[110119]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(W[110120]);var t = wx.getStorageSync(W[110098]);wx.request({ url: W[110067] + HOST + W[110121], method: W[80573], dataType: W[81188], header: { "content-type": W[80701] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, content: e }, success: function (e) {
          console.log(W[110122]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var t = this;wx.checkSession({ success: function () {
          t.startPay(e, n);
        }, fail: function () {
          console.log(W[110123]), t.login({}, function () {
            t.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(W[110124]), console.log(e);var t = this;r.pay = W[81364] == typeof n ? n : null;var o = wx.getStorageSync(W[110098]);n = wx.getStorageSync(W[110100]);var a;o && n ? (a = wx.getSystemInfoSync(), o = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: o, session_key: n, platform: a.platform }, t.order_data = o, (n = t.getPublicData()).order_data = JSON.stringify(o), n.is_from_min = 1, wx.request({ url: W[110067] + HOST + W[110125], method: W[80573], dataType: W[81188], header: { "content-type": W[80701] }, data: n, success: function (e) {
          console.log(W[110126]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? W[80479] == a.platform || W[80482] == a.platform ? e.data.is_android_pay ? 1 == e.data.ios_pay_type ? t.kfPay(e.data) : 2 == e.data.ios_pay_type && t.xiaoPay(e.data) : t.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type ? t.kfPay(e.data) : 2 == e.data.ios_pay_type && t.xiaoPay(e.data) : wx.showModal({ title: W[110127], content: W[110128], confirmText: W[110129], showCancel: !1 }) : t.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: W[110103] });
        } })) : r.pay && r.pay(1, { errMsg: W[110130] });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: config.min_app_id, path: W[110131] + e.orderId + W[110132] + e.money, extraData: {}, envVersion: W[81836], success(e) {} });
    }, minPay: function (n) {
      var t = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          W[110133] == e.errMsg && (e = { cpOrderNo: t.order_data.cpbill, orderNo: n.orderId, amount: t.order_data.price, extension: t.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          W[110134] == e.errMsg ? r.pay && r.pay(2, { errMsg: W[110135] }) : r.pay && r.pay(1, { errMsg: W[110136] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var t = this;n.buyQuantity <= n.balance ? (console.log(W[110137]), wx.showModal({ title: W[110127], content: W[110138] + n.balance + W[110139] + n.buyQuantity + W[110140], showCancel: !1, confirmText: W[110129], success: function () {
          t.gameGoPay(n);
        } })) : (console.log(W[110141]), wx.requestMidasPayment({ mode: W[110142], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          W[110143] == e.errMsg && t.gameGoPay(n);
        }, fail: function (e) {
          console.log(W[110144] + JSON.stringify(e)), -1 !== e.errMsg.indexOf(W[110145]) ? r.pay && r.pay(2, { errMsg: W[110135] }) : r.pay && r.pay(1, { errMsg: W[110136] + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      $LCGDU4 = e.orderId, wx.showModal({ title: W[110127], content: W[110146], showCancel: !1, confirmText: W[110129], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: W[110147], sendMessageImg: W[110148] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(W[110149]);var t = this;var o = wx.getStorageSync(W[110100]);wx.request({ url: W[110067] + HOST + W[110150] + config.partner_id + "/" + config.game_pkg + "/", method: W[80573], dataType: W[81188], header: { "content-type": W[80701] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: o }, success: function (e) {
          console.log(W[110151]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: t.order_data.cpbill, orderNo: n.orderId, amount: t.order_data.price, extension: t.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: W[110152] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(W[110099]);var t = wx.getStorageSync(W[110065]);var o = {};o.user_id = n, o.user_name = t, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && ($LCGUD4 = { role_id: e.roleid, server_id: e.serverid }), this.log(W[80007], o);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(W[110099]);var t = wx.getStorageSync(W[110065]);var o = {};o.user_id = n, o.user_name = t, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && ($LCGUD4 = { role_id: e.roleid, server_id: e.serverid }), this.log(W[81040], o), $LCGU4D && this.updateShare($LCGU4D.invite, $LCGU4D.invite_type, $LCGU4D.is_new, e.roleid, e.serverid, $LCGU4D.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(W[110099]);var t = wx.getStorageSync(W[110065]);var o = {};o.user_id = n, o.user_name = t, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && ($LCGUD4 = { role_id: e.roleid, server_id: e.serverid }), this.log(W[110153], o);
    }, uuid: function (e, n) {
      var t = W[110154].split("");var o,
          a = [];var r;if (e = e || t.length, n) for (o = 0; o < n; o++) a[o] = t[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", o = 0; o < 36; o++) a[o] || (r = 0 | 16 * Math.random(), a[o] = t[19 == o ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(W[110082]);var t = wx.getStorageSync(W[110083]);var o = wx.getStorageSync(W[110084]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: o, uuid: n, idfv: t, dname: e.model, mac: W[110155], net_type: 0 == e.wifiSignal ? "4G" : W[110156], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: W[80479] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var t = this.getPublicData();for (var o in n) t[o] = n[o];console.log(W[110157] + e), console.log(t), wx.request({ url: W[110067] + HOST + W[110158] + e + W[110159] + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, subscribeMessage: function (e, n) {
      console.log(W[110160] + e), r.subscribeMessage = W[81364] == typeof n ? n : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log(W[110161]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        }, fail(e) {
          console.log(W[110162]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        } });
    }, weiduanHelper: function () {
      new Dall().stebutonanimation(config.partner_id, config.game_pkg);
    } };
}function run(e, n, t) {
  e in $LC4GDU && $LC4GDU[e](n, t);
}exports.init = function (e, n) {
  run(W[80295], e, n);
}, exports.login = function (e) {
  run(W[80603], "", e);
}, exports.pay = function (e, n) {
  run(W[80648], e, n);
}, exports.openService = function () {
  run(W[80661]);
}, exports.logCreateRole = function (e, n, t, o, a) {
  run(W[80656], { serverid: e, servername: n, roleid: t, rolename: o, rolelevel: a });
}, exports.logEnterGame = function (e, n, t, o, a) {
  run(W[80658], { serverid: e, servername: n, roleid: t, rolename: o, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, t, o, a) {
  run(W[110163], { serverid: e, servername: n, roleid: t, rolename: o, rolelevel: a });
}, exports.share = function (e) {
  run(W[80660], { type: e });
}, exports.msgCheck = function (e, n) {
  run(W[80558], e, n);
}, exports.downloadClient = function () {
  run(W[110164]);
}, exports.subscribeMessage = function (e, n) {
  run(W[80670], e, n);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(W[110165]);
}, exports.weiduanHelper = function () {
  run(W[80663]);
};