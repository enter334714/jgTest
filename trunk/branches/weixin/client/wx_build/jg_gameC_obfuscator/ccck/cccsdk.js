var p = wx.$h;
import Dall from "./ccchelp";var config = { game_id: p[0x33ba], game_pkg: p[0x33bb], partner_id: "19", game_ver: p[0x33bc], is_auth: !1, from: null, tmpId: { 1: p[0x33bd], 2: p[0x33be], 3: p[0x33bf] }, min_app_id: "" };window.config = config;var $aAEBCD = $aAEDBC();var HOST = p[0x33aa];var t;var t_second = 0;var t_max = 300;var $aAEBDC = null;var $aAECBD = null;var $aAECDB = null;function $aAEDBC() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log(p[0x33c0]);var t = this;var a;a = (r = wx.getStorageSync(p[0x33c1])) ? 0 : (r = t.uuid(16, 32), wx.setStorageSync(p[0x33c1], r), 1), (i = wx.getStorageSync(p[0x33c2])) || (i = t.uuid(16, 32), wx.setStorageSync(p[0x33c2], i));e = wx.getLaunchOptionsSync();var r = e.scene || "";var i;console.log(p[0x33c3]), console.log(e), a && e.query && e.query.ad_code && wx.setStorageSync(p[0x33c4], e.query.ad_code), e.query && e.query.from && "" != e.query.from ? (a && wx.setStorageSync(p[0x33c5], e.query.from), config.from = e.query.from) : (i = wx.getStorageSync(p[0x33c5])) || "" == i || (config.from = i), console.log(p[0x33c6] + config.from), t.log(p[0x33c7], { install: a, scene: r }), wx.showShareMenu();t = e.query && e.query.invite ? e.query.invite : "";e = e.query && e.query.invite_type ? e.query.invite_type : "";t && ($aAECBD = { invite: t, invite_type: e, is_new: a, scene: r }), o && this.checkGameVersion(o, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(p[0x33c8]);var t = this;r.login = p[0x3381] == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var n, o;e.authSetting[p[0x33c9]] ? (console.log(p[0x33ca]), t.do_login()) : (console.log(p[0x33cb]), wx.hideLoading({}), e = 2 * (n = wx.getSystemInfoSync()).screenWidth / 3, n.screenHeight, (o = wx.createUserInfoButton({ type: p[0x2e4e], text: p[0x33cc], withCredentials: !1, style: { top: n.windowHeight / 2 + n.windowHeight / 4, left: n.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: p[0x33cd], color: p[0xa96], textAlign: p[0x1ff], fontSize: 16, borderRadius: 4 } })).show(), o.onTap(e => {
            console.log(e), $aBDCE({ title: p[0x33ce] }), p[0x33cf] == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), o.destroy();
          }));
        }, fail: function () {
          console.log(p[0x33d0]), t.do_login();
        } }) : (console.log(p[0x33d1] + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var a = this;wx.login({ success: function (e) {
          if (console.log(p[0x33d2] + JSON.stringify(e)), e.code) {
            var t = a.getPublicData();if (t.is_from_min = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", $aAECBD && p[0x1b] == typeof $aAECBD) for (var n in $aAECBD) t[n] = $aAECBD[n];config.is_auth ? wx.getUserInfo({ success: function (e) {
                var n = e.encryptedData;var o = e.iv;e = e.signature;t.encryptedData = n, t.iv = o, t.signature = e, wx.request({ url: p[0x33ad] + HOST + p[0x33d3], method: p[0x33af], dataType: p[0x33b0], header: { "content-type": p[0x33b1] }, data: t, success: function (e) {
                    if (console.log(p[0x33d4]), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync(p[0x33d5], n.data.sdk_token), wx.setStorageSync(p[0x33d6], n.data.user_id), wx.setStorageSync(p[0x33ab], n.data.username), n.data.ext && wx.setStorageSync(p[0x33d7], n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(p[0x33d8], function (e) {
                        console.log(p[0x33d9]), wx.onShareAppMessage(function () {
                          return a.logStartShare(p[0x33d8]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: p[0x33da] });
                  }, fail: function (e) {
                    r.login && r.login(1, { errMsg: e.errMsg });
                  } });
              }, fail: function (e) {
                r.login && r.login(1, { errMsg: e.errMsg });
              } }) : wx.request({ url: p[0x33ad] + HOST + p[0x33d3], method: p[0x33af], dataType: p[0x33b0], header: { "content-type": p[0x33b1] }, data: t, success: function (e) {
                if (console.log(p[0x33d4]), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(p[0x33d5], n.data.sdk_token), wx.setStorageSync(p[0x33d6], n.data.user_id), wx.setStorageSync(p[0x33ab], n.data.username), n.data.ext && wx.setStorageSync(p[0x33d7], n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(p[0x33d8], function (e) {
                    console.log(p[0x33d9]), wx.onShareAppMessage(function () {
                      return a.logStartShare(p[0x33d8]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: p[0x33da] });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(p[0x33db] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(p[0x33dc]) || -1 < e.errMsg.indexOf(p[0x33dd])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = p[0x3381] == typeof callback ? callback : null;var n = e.type || p[0x33de];console.log(p[0x33df] + n);var o = this;this.getShareInfo(n, function (e) {
        o.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(p[0x33d5]);wx.request({ url: p[0x33ad] + HOST + p[0x33e0], method: p[0x33af], dataType: p[0x33b0], header: { "content-type": p[0x33b1] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: $aAEBDC ? $aAEBDC.server_id : "", role_id: $aAEBDC ? $aAEBDC.role_id : "", type: e }, success: function (e) {} });
    }, $aCB: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(p[0x33e1]);wx.getStorageSync(p[0x33d5]);wx.request({ url: p[0x33ad] + HOST + p[0x33e2], method: p[0x33af], dataType: p[0x33b0], header: { "content-type": p[0x33b1] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          console.log(p[0x33e3]), console.log(e), 200 == e.statusCode ? (e = e.data, config.min_app_id = e.data.min_app_id, e.state ? n && n(e.data) : n && n({ develop: 0 })) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, getShareInfo: function (e, n) {
      console.log(p[0x33e4]);var o = wx.getStorageSync(p[0x33d5]);wx.request({ url: p[0x33ad] + HOST + p[0x33e5], method: p[0x33af], dataType: p[0x33b0], header: { "content-type": p[0x33b1] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, type: e, server_id: $aAEBDC ? $aAEBDC.server_id : "", role_id: $aAEBDC ? $aAEBDC.role_id : "", no_log: 1 }, success: function (e) {
          console.log(p[0x33e6]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: p[0x33e7] + e.msg }) : r.share && r.share(1, { errMsg: p[0x33e8] });
        } });
    }, updateShare: function (e, n, o, t, a, r) {
      console.log(p[0x33e9]);var i = wx.getStorageSync(p[0x33d5]);wx.request({ url: p[0x33ad] + HOST + p[0x33ea], method: p[0x33af], dataType: p[0x33b0], header: { "content-type": p[0x33b1] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: o, role_id: t, sever_id: a, scene: r }, success: function (e) {
          console.log(p[0x33eb]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(p[0x33ec]);var o = wx.getStorageSync(p[0x33d5]);wx.request({ url: p[0x33ad] + HOST + p[0x33ed], method: p[0x33af], dataType: p[0x33b0], header: { "content-type": p[0x33b1] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, content: e }, success: function (e) {
          console.log(p[0x33ee]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var o = this;wx.checkSession({ success: function () {
          o.startPay(e, n);
        }, fail: function () {
          console.log(p[0x33ef]), o.login({}, function () {
            o.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(p[0x33f0]), console.log(e);var o = this;r.pay = p[0x3381] == typeof n ? n : null;var t = wx.getStorageSync(p[0x33d5]);n = wx.getStorageSync(p[0x33d7]);var a;t && n ? (a = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: n, platform: a.platform }, o.order_data = t, (n = o.getPublicData()).order_data = JSON.stringify(t), n.is_from_min = 1, wx.request({ url: p[0x33ad] + HOST + p[0x33f1], method: p[0x33af], dataType: p[0x33b0], header: { "content-type": p[0x33b1] }, data: n, success: function (e) {
          console.log(p[0x33f2]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? p[0x33f3] == a.platform || p[0x33f4] == a.platform ? e.data.is_android_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : o.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : wx.showModal({ title: p[0x33f5], content: p[0x33f6], confirmText: p[0x33f7], showCancel: !1 }) : o.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: p[0x33da] });
        } })) : r.pay && r.pay(1, { errMsg: p[0x33f8] });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: config.min_app_id, path: p[0x33f9] + e.orderId + p[0x33fa] + e.money, extraData: {}, envVersion: p[0x33b8], success(e) {} });
    }, minPay: function (n) {
      var o = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          p[0x33fb] == e.errMsg && (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          p[0x33fc] == e.errMsg ? r.pay && r.pay(2, { errMsg: p[0x33fd] }) : r.pay && r.pay(1, { errMsg: p[0x33fe] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var o = this;n.buyQuantity <= n.balance ? (console.log(p[0x33ff]), wx.showModal({ title: p[0x33f5], content: p[0x3400] + n.balance + p[0x3401] + n.buyQuantity + p[0x3402], showCancel: !1, confirmText: p[0x33f7], success: function () {
          o.gameGoPay(n);
        } })) : (console.log(p[0x3403]), wx.requestMidasPayment({ mode: p[0x3404], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          p[0x3405] == e.errMsg && o.gameGoPay(n);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(p[0x3406]) ? r.pay && r.pay(2, { errMsg: p[0x33fd] }) : r.pay && r.pay(1, { errMsg: p[0x33fe] + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      $aAECDB = e.orderId, wx.showModal({ title: p[0x33f5], content: p[0x3407], showCancel: !1, confirmText: p[0x33f7], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: p[0x3408], sendMessageImg: p[0x3409] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(p[0x340a]);var o = this;var t = wx.getStorageSync(p[0x33d7]);wx.request({ url: p[0x33ad] + HOST + p[0x340b] + config.partner_id + "/" + config.game_pkg + "/", method: p[0x33af], dataType: p[0x33b0], header: { "content-type": p[0x33b1] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: t }, success: function (e) {
          console.log(p[0x340c]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: p[0x340d] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(p[0x33d6]);var o = wx.getStorageSync(p[0x33ab]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aAEBDC = { role_id: e.roleid, server_id: e.serverid }), this.log(p[0x2d], t);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(p[0x33d6]);var o = wx.getStorageSync(p[0x33ab]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aAEBDC = { role_id: e.roleid, server_id: e.serverid }), this.log(p[0x340e], t), $aAECBD && this.updateShare($aAECBD.invite, $aAECBD.invite_type, $aAECBD.is_new, e.roleid, e.serverid, $aAECBD.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(p[0x33d6]);var o = wx.getStorageSync(p[0x33ab]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aAEBDC = { role_id: e.roleid, server_id: e.serverid }), this.log(p[0x340f], t);
    }, uuid: function (e, n) {
      var o = p[0x3410].split("");var t,
          a = [];var r;if (e = e || o.length, n) for (t = 0; t < n; t++) a[t] = o[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = o[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(p[0x33c1]);var o = wx.getStorageSync(p[0x33c2]);var t = wx.getStorageSync(p[0x33c4]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: n, idfv: o, dname: e.model, mac: p[0x3411], net_type: 0 == e.wifiSignal ? "4G" : p[0x3412], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: p[0x33f3] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var o = this.getPublicData();for (var t in n) o[t] = n[t];console.log(p[0x3413] + e), console.log(o), wx.request({ url: p[0x33ad] + HOST + p[0x3414] + e + p[0x3415] + encodeURIComponent(JSON.stringify(o)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, subscribeMessage: function (e, n) {
      console.log(p[0x3416] + e), r.subscribeMessage = p[0x3381] == typeof n ? n : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log(p[0x3417]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        }, fail(e) {
          console.log(p[0x3418]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        } });
    }, weiduanHelper: function () {
      new Dall().stebutonanimation(config.partner_id, config.game_pkg, config.game_id);
    } };
}function run(e, n, o) {
  e in $aAEBCD && $aAEBCD[e](n, o);
}exports.init = function (e, n) {
  run(p[0x2c8b], e, n);
}, exports.login = function (e) {
  run(p[0x3419], "", e);
}, exports.pay = function (e, n) {
  run(p[0x341a], e, n);
}, exports.$aCB = function () {
  run(p[0x341b]);
}, exports.logCreateRole = function (e, n, o, t, a) {
  run(p[0x341c], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, n, o, t, a) {
  run(p[0x341d], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, o, t, a) {
  run(p[0x341e], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.share = function (e) {
  run(p[0x33de], { type: e });
}, exports.msgCheck = function (e, n) {
  run(p[0x341f], e, n);
}, exports.downloadClient = function () {
  run(p[0x3420]);
}, exports.subscribeMessage = function (e, n) {
  run(p[0x3421], e, n);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[0x3422]);
}, exports.weiduanHelper = function () {
  run(p[0x3423]);
};