var v = wx.$d;
var config = { game_id: v[0x3534], game_pkg: v[0x3535], partner_id: v[0x3536], game_ver: v[0x3537], is_auth: "1", btn_img: "", btn_bg: "" };var D$ZW9NP = D$Z9NWP();var HOST = v[0x3538];var t;var t_second = 0;var t_max = 300;var D$Z9PNW = null;var D$Z9PWN = null;var D$Z9NPW = null;var btnImg_url = "";function D$Z9NWP() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log(v[0x3539]);var a = this;var o;o = (r = wx.getStorageSync(v[0x353a])) ? 0 : (r = a.uuid(16, 32), wx.setStorageSync(v[0x353a], r), 1), (e = wx.getStorageSync(v[0x353b])) || (e = a.uuid(16, 32), wx.setStorageSync(v[0x353b], e));var r = wx.getLaunchOptionsSync();e = r.scene || "";o && r.query && r.query.ad_code && wx.setStorageSync(v[0x353c], r.query.ad_code), a.log(v[0x353d], { install: o, scene: e }), wx.showShareMenu();a = r.query && r.query.invite ? r.query.invite : "";r = r.query && r.query.invite_type ? r.query.invite_type : "";a && (D$Z9PWN = { invite: a, invite_type: r, is_new: o, scene: e }), t && this.checkGameVersion(t, function (e) {
        config.is_auth = e.is_auth, config.btn_bg = e.auth_bg_image, config.btn_img = e.auth_button_image, n && n(e);
      });
    }, login: function (e, n) {
      console.log(v[0x353e]);var i = this;r.login = v[0x3523] == typeof n ? n : null, "1" == config.is_auth ? wx.getSetting({ success: function (e) {
          var t, a, o, r;e.authSetting[v[0x353f]] ? i.do_login1() : (e = wx.getSystemInfoSync(), t = e.screenWidth, a = e.screenHeight, (r = wx.createImage()).src = config.btn_img, r.onload = function () {
            o = .15 * a;var n = wx.createUserInfoButton({ type: v[0x3540], image: r.src, style: { left: (t - t) / 2, top: a / 1.35, width: t, height: o } });n.onTap(function (e) {
              console.log(e), v[0x3541] == e.errMsg && (i.do_login1({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }), n.destroy());
            });
          });
        }, fail: function () {
          i.do_login2();
        } }) : i.do_login2();
    }, do_login1: function (t) {
      var o = this;wx.login({ success: function (e) {
          if (console.log(v[0x3542] + JSON.stringify(e)), e.code) {
            var a = o.getPublicData();if (a.is_from_min = 1, a.code = e.code, a.nick_name = t ? t.nick_name : "", a.head_img = t ? t.head_img : "", D$Z9PWN && v[0x1a] == typeof D$Z9PWN) for (var n in D$Z9PWN) a[n] = D$Z9PWN[n];wx.getUserInfo({ success: function (e) {
                console.log(v[0x3543] + JSON.stringify(e));var n = e.encryptedData;var t = e.iv;e = e.signature;a.encryptedData = encodeURIComponent(n), a.iv = encodeURIComponent(t), a.signature = e, wx.request({ url: v[0x3544] + HOST + v[0x3545], method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: a, success: function (e) {
                    if (console.log(v[0x3549]), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync(v[0x354a], n.data.sdk_token), wx.setStorageSync(v[0x354b], n.data.user_id), wx.setStorageSync(v[0x354c], n.data.username), n.data.ext && wx.setStorageSync(v[0x354d], n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });o.getShareInfo(v[0x354e], function (e) {
                        console.log(v[0x354f]), wx.onShareAppMessage(function () {
                          return o.logStartShare(v[0x354e]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: v[0x3550] });
                  } });
              }, fail: function (e) {
                console.log(v[0x3551] + e.errMsg);
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          (-1 < e.errMsg.indexOf(v[0x3552]) || -1 < e.errMsg.indexOf(v[0x3553])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, do_login2: function (a) {
      var o = this;wx.login({ success: function (e) {
          if (console.log(v[0x3542] + JSON.stringify(e)), e.code) {
            var n = o.getPublicData();if (n.is_from_min = 1, n.code = e.code, n.nick_name = a ? a.nick_name : "", n.head_img = a ? a.head_img : "", D$Z9PWN && v[0x1a] == typeof D$Z9PWN) for (var t in D$Z9PWN) n[t] = D$Z9PWN[t];wx.request({ url: v[0x3544] + HOST + v[0x3545], method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: n, success: function (e) {
                if (console.log(v[0x3549]), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(v[0x354a], n.data.sdk_token), wx.setStorageSync(v[0x354b], n.data.user_id), wx.setStorageSync(v[0x354c], n.data.username), n.data.ext && wx.setStorageSync(v[0x354d], n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });o.getShareInfo(v[0x354e], function (e) {
                    console.log(v[0x354f]), wx.onShareAppMessage(function () {
                      return o.logStartShare(v[0x354e]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: v[0x3550] });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          (-1 < e.errMsg.indexOf(v[0x3552]) || -1 < e.errMsg.indexOf(v[0x3553])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = v[0x3523] == typeof callback ? callback : null;var n = e.type || v[0x3554];console.log(v[0x3555] + n);var t = this;this.getShareInfo(n, function (e) {
        t.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(v[0x354a]);wx.request({ url: v[0x3544] + HOST + v[0x3556], method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: D$Z9PNW ? D$Z9PNW.server_id : "", role_id: D$Z9PNW ? D$Z9PNW.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log(v[0x3557]);wx.getStorageSync(v[0x354a]);var n = wx.getStorageSync(v[0x353a]);wx.request({ url: v[0x3544] + HOST + v[0x3558], method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e, uuid: n }, success: function (e) {
          var n;console.log(v[0x3559]), console.log(e), 200 == e.statusCode && (n = e.data).state ? t && t(n.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, n) {
      console.log(v[0x355a]);var t = wx.getStorageSync(v[0x354a]);wx.request({ url: v[0x3544] + HOST + v[0x355b], method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: D$Z9PNW ? D$Z9PNW.server_id : "", role_id: D$Z9PNW ? D$Z9PNW.role_id : "", no_log: 1 }, success: function (e) {
          console.log(v[0x355c]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: v[0x355d] + e.msg }) : r.share && r.share(1, { errMsg: v[0x355e] });
        } });
    }, updateShare: function (e, n, t, a, o, r) {
      console.log(v[0x355f]);var i = wx.getStorageSync(v[0x354a]);wx.request({ url: v[0x3544] + HOST + v[0x3560], method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: t, role_id: a, sever_id: o, scene: r }, success: function (e) {
          console.log(v[0x3561]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(v[0x3562]);var t = wx.getStorageSync(v[0x354a]);wx.request({ url: v[0x3544] + HOST + v[0x3563], method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, content: e }, success: function (e) {
          console.log(v[0x3564]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var t = this;wx.checkSession({ success: function () {
          t.startPay(e, n);
        }, fail: function () {
          console.log(v[0x3565]), t.login({}, function () {
            t.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(v[0x3566]), console.log(e);var t = this;r.pay = v[0x3523] == typeof n ? n : null;var a = wx.getStorageSync(v[0x354a]);var o = wx.getStorageSync(v[0x354d]);a && o ? (n = wx.getSystemInfoSync(), o = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: a, session_key: o, platform: n.platform }, t.order_data = o, (n = t.getPublicData()).order_data = JSON.stringify(o), n.is_from_min = 1, wx.request({ url: v[0x3544] + HOST + v[0x3567], method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: n, success: function (e) {
          console.log(v[0x3568]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? v[0x3569] == e.data.platform ? e.data.is_android_pay ? e.data.is_min_pay ? t.jumpPay(e.data) : t.kfPay(e.data) : t.gamePay(e.data) : e.data.is_ios_pay ? e.data.is_min_pay ? t.jumpPay(e.data) : t.kfPay(e.data) : wx.showModal({ title: v[0x356a], content: v[0x356b], confirmText: v[0x356c], showCancel: !1 }) : t.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: v[0x3550] });
        } })) : r.pay && r.pay(1, { errMsg: v[0x356d] });
    }, jumpPay: function (e) {
      var n = e.orderId;var t = e.money;e = e.min_pay_app_id;wx.navigateToMiniProgram({ appId: e, path: v[0x356e] + n + v[0x356f] + t, extraData: {}, success(e) {}, fail(e) {} });
    }, minPay: function (n) {
      var t = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          v[0x3570] == e.errMsg && (e = { cpOrderNo: t.order_data.cpbill, orderNo: n.orderId, amount: t.order_data.price, extension: t.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          v[0x3571] == e.errMsg ? r.pay && r.pay(2, { errMsg: v[0x3572] }) : r.pay && r.pay(1, { errMsg: v[0x3573] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var t = this;n.buyQuantity <= n.balance ? (console.log(v[0x3574]), wx.showModal({ title: v[0x356a], content: v[0x3575] + n.balance + v[0x3576] + n.buyQuantity + v[0x3577], showCancel: !1, confirmText: v[0x356c], success: function () {
          t.gameGoPay(n);
        } })) : (console.log(v[0x3578]), console.log(n), wx.requestMidasPayment({ mode: v[0x3579], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          console.log(v[0x357a]), console.log(e), v[0x357b] == e.errMsg && t.gameGoPay(n);
        }, fail: function (e) {
          console.log(v[0x357c]), console.log(e), -1 !== e.errMsg.indexOf(v[0x357d]) ? r.pay && r.pay(2, { errMsg: v[0x3572] }) : r.pay && r.pay(1, { errMsg: v[0x3573] + e.errCode + "," + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      D$Z9NPW = e.orderId, wx.showModal({ title: v[0x356a], content: v[0x357e], showCancel: !1, confirmText: v[0x356c], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: v[0x357f], sendMessagePath: v[0x3580], sendMessageImg: v[0x3580] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(v[0x3581]);var t = this;var a = wx.getStorageSync(v[0x354d]);wx.request({ url: v[0x3544] + HOST + v[0x3582] + config.partner_id + "/" + config.game_pkg + "/", method: v[0x3546], dataType: v[0x3547], header: { "content-type": v[0x3548] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: a }, success: function (e) {
          console.log(v[0x3583]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: t.order_data.cpbill, orderNo: n.orderId, amount: t.order_data.price, extension: t.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: v[0x3584] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(v[0x354b]);var t = wx.getStorageSync(v[0x354c]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$Z9PNW = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x2c], a);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(v[0x354b]);var t = wx.getStorageSync(v[0x354c]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$Z9PNW = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x3585], a), D$Z9PWN && this.updateShare(D$Z9PWN.invite, D$Z9PWN.invite_type, D$Z9PWN.is_new, e.roleid, e.serverid, D$Z9PWN.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(v[0x354b]);var t = wx.getStorageSync(v[0x354c]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$Z9PNW = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x3586], a);
    }, uuid: function (e, n) {
      var t = v[0x3587].split("");var a,
          o = [];var r;if (e = e || t.length, n) for (a = 0; a < n; a++) o[a] = t[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", a = 0; a < 36; a++) o[a] || (r = 0 | 16 * Math.random(), o[a] = t[19 == a ? 3 & r | 8 : r]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(v[0x353a]);var t = wx.getStorageSync(v[0x353b]);var a = wx.getStorageSync(v[0x353c]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: a, uuid: n, idfv: t, dname: e.model, mac: v[0x3588], net_type: 0 == e.wifiSignal ? "4G" : v[0x3589], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: v[0x3569] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var t = this.getPublicData();for (var a in n) t[a] = n[a];console.log(v[0x358a] + e), console.log(t), wx.request({ url: v[0x3544] + HOST + v[0x358b] + e + v[0x358c] + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: v[0x358d], sendMessagePath: v[0x358e], sendMessageImg: v[0x358e] });
    }, adClick: function (e) {
      var n = e.game_id;e = e.query;this.log(v[0x358f], { event: v[0x3590], ext1: n, ext2: e });
    } };
}function run(e, n, t) {
  e in D$ZW9NP && D$ZW9NP[e](n, t);
}exports.init = function (e, n) {
  run(v[0x2dd1], e, n);
}, exports.login = function (e) {
  run(v[0x3591], "", e);
}, exports.login = function (e) {
  run(v[0x3591], "", e);
}, exports.pay = function (e, n) {
  run(v[0x3592], e, n);
}, exports.openService = function () {
  run(v[0x3593]);
}, exports.logCreateRole = function (e, n, t, a, o) {
  run(v[0x3594], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.logEnterGame = function (e, n, t, a, o) {
  run(v[0x3595], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.logRoleUpLevel = function (e, n, t, a, o) {
  run(v[0x3596], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.share = function (e) {
  run(v[0x3554], { type: e });
}, exports.msgCheck = function (e, n) {
  run(v[0x3597], e, n);
}, exports.downloadClient = function () {
  run(v[0x3598]);
}, exports.adClick = function (e, n) {
  run(v[0x3599], { game_id: e, query: n });
};