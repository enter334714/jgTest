var v = wx.$d;
var config = { game_id: v[0x3453], game_pkg: v[0x3454], partner_id: v[0x3455], game_ver: v[0x3456], is_auth: "1", btn_img: "", btn_bg: "" };var D$P76GN = D$P6G7N();var HOST = v[0x3457];var t;var t_second = 0;var t_max = 300;var D$P6NG7 = null;var D$P6N7G = null;var D$P6GN7 = null;var btnImg_url = "";function D$P6G7N() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log(v[0x3458]);var a = this;var o;o = (r = wx.getStorageSync(v[0x3459])) ? 0 : (r = a.uuid(16, 32), wx.setStorageSync(v[0x3459], r), 1), (e = wx.getStorageSync(v[0x345a])) || (e = a.uuid(16, 32), wx.setStorageSync(v[0x345a], e));var r = wx.getLaunchOptionsSync();e = r.scene || "";o && r.query && r.query.ad_code && wx.setStorageSync(v[0x345b], r.query.ad_code), a.log(v[0x345c], { install: o, scene: e }), wx.showShareMenu();a = r.query && r.query.invite ? r.query.invite : "";r = r.query && r.query.invite_type ? r.query.invite_type : "";a && (D$P6N7G = { invite: a, invite_type: r, is_new: o, scene: e }), t && this.checkGameVersion(t, function (e) {
        config.is_auth = e.is_auth, config.btn_bg = e.auth_bg_image, config.btn_img = e.auth_button_image, n && n(e);
      });
    }, login: function (e, n) {
      console.log(v[0x345d]);var i = this;r.login = v[0x3442] == typeof n ? n : null, "1" == config.is_auth ? wx.getSetting({ success: function (e) {
          var t, a, o, r;e.authSetting[v[0x345e]] ? i.do_login1() : (e = wx.getSystemInfoSync(), t = e.screenWidth, a = e.screenHeight, (r = wx.createImage()).src = config.btn_img, r.onload = function () {
            o = .15 * a;var n = wx.createUserInfoButton({ type: v[0x345f], image: r.src, style: { left: (t - t) / 2, top: a / 1.35, width: t, height: o } });n.onTap(function (e) {
              console.log(e), v[0x3460] == e.errMsg && (i.do_login1({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }), n.destroy());
            });
          });
        }, fail: function () {
          i.do_login2();
        } }) : i.do_login2();
    }, do_login1: function (t) {
      var o = this;wx.login({ success: function (e) {
          if (console.log(v[0x3461] + JSON.stringify(e)), e.code) {
            var a = o.getPublicData();if (a.is_from_min = 1, a.code = e.code, a.nick_name = t ? t.nick_name : "", a.head_img = t ? t.head_img : "", D$P6N7G && v[0x1a] == typeof D$P6N7G) for (var n in D$P6N7G) a[n] = D$P6N7G[n];wx.getUserInfo({ success: function (e) {
                console.log(v[0x3462] + JSON.stringify(e));var n = e.encryptedData;var t = e.iv;e = e.signature;a.encryptedData = encodeURIComponent(n), a.iv = encodeURIComponent(t), a.signature = e, wx.request({ url: v[0x3463] + HOST + v[0x3464], method: v[0x3465], dataType: v[0x3466], header: { "content-type": v[0x3467] }, data: a, success: function (e) {
                    if (console.log(v[0x3468]), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync(v[0x3469], n.data.sdk_token), wx.setStorageSync(v[0x346a], n.data.user_id), wx.setStorageSync(v[0x346b], n.data.username), n.data.ext && wx.setStorageSync(v[0x346c], n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });o.getShareInfo(v[0x346d], function (e) {
                        console.log(v[0x346e]), wx.onShareAppMessage(function () {
                          return o.logStartShare(v[0x346d]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: v[0x346f] });
                  } });
              }, fail: function (e) {
                console.log(v[0x3470] + e.errMsg);
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          (-1 < e.errMsg.indexOf(v[0x3471]) || -1 < e.errMsg.indexOf(v[0x3472])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, do_login2: function (a) {
      var o = this;wx.login({ success: function (e) {
          if (console.log(v[0x3461] + JSON.stringify(e)), e.code) {
            var n = o.getPublicData();if (n.is_from_min = 1, n.code = e.code, n.nick_name = a ? a.nick_name : "", n.head_img = a ? a.head_img : "", D$P6N7G && v[0x1a] == typeof D$P6N7G) for (var t in D$P6N7G) n[t] = D$P6N7G[t];wx.request({ url: v[0x3463] + HOST + v[0x3464], method: v[0x3465], dataType: v[0x3466], header: { "content-type": v[0x3467] }, data: n, success: function (e) {
                if (console.log(v[0x3468]), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(v[0x3469], n.data.sdk_token), wx.setStorageSync(v[0x346a], n.data.user_id), wx.setStorageSync(v[0x346b], n.data.username), n.data.ext && wx.setStorageSync(v[0x346c], n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });o.getShareInfo(v[0x346d], function (e) {
                    console.log(v[0x346e]), wx.onShareAppMessage(function () {
                      return o.logStartShare(v[0x346d]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: v[0x346f] });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          (-1 < e.errMsg.indexOf(v[0x3471]) || -1 < e.errMsg.indexOf(v[0x3472])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = v[0x3442] == typeof callback ? callback : null;var n = e.type || v[0x3473];console.log(v[0x3474] + n);var t = this;this.getShareInfo(n, function (e) {
        t.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(v[0x3469]);wx.request({ url: v[0x3463] + HOST + v[0x3475], method: v[0x3465], dataType: v[0x3466], header: { "content-type": v[0x3467] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: D$P6NG7 ? D$P6NG7.server_id : "", role_id: D$P6NG7 ? D$P6NG7.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log(v[0x3476]);wx.getStorageSync(v[0x3469]);var n = wx.getStorageSync(v[0x3459]);wx.request({ url: v[0x3463] + HOST + v[0x3477], method: v[0x3465], dataType: v[0x3466], header: { "content-type": v[0x3467] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e, uuid: n }, success: function (e) {
          var n;console.log(v[0x3478]), console.log(e), 200 == e.statusCode && (n = e.data).state ? t && t(n.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, n) {
      console.log(v[0x3479]);var t = wx.getStorageSync(v[0x3469]);wx.request({ url: v[0x3463] + HOST + v[0x347a], method: v[0x3465], dataType: v[0x3466], header: { "content-type": v[0x3467] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: D$P6NG7 ? D$P6NG7.server_id : "", role_id: D$P6NG7 ? D$P6NG7.role_id : "", no_log: 1 }, success: function (e) {
          console.log(v[0x347b]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: v[0x347c] + e.msg }) : r.share && r.share(1, { errMsg: v[0x347d] });
        } });
    }, updateShare: function (e, n, t, a, o, r) {
      console.log(v[0x347e]);var i = wx.getStorageSync(v[0x3469]);wx.request({ url: v[0x3463] + HOST + v[0x347f], method: v[0x3465], dataType: v[0x3466], header: { "content-type": v[0x3467] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: t, role_id: a, sever_id: o, scene: r }, success: function (e) {
          console.log(v[0x3480]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(v[0x3481]);var t = wx.getStorageSync(v[0x3469]);wx.request({ url: v[0x3463] + HOST + v[0x3482], method: v[0x3465], dataType: v[0x3466], header: { "content-type": v[0x3467] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, content: e }, success: function (e) {
          console.log(v[0x3483]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var t = this;wx.checkSession({ success: function () {
          t.startPay(e, n);
        }, fail: function () {
          console.log(v[0x3484]), t.login({}, function () {
            t.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(v[0x3485]), console.log(e);var t = this;r.pay = v[0x3442] == typeof n ? n : null;var a = wx.getStorageSync(v[0x3469]);var o = wx.getStorageSync(v[0x346c]);a && o ? (n = wx.getSystemInfoSync(), o = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: a, session_key: o, platform: n.platform }, t.order_data = o, (n = t.getPublicData()).order_data = JSON.stringify(o), n.is_from_min = 1, wx.request({ url: v[0x3463] + HOST + v[0x3486], method: v[0x3465], dataType: v[0x3466], header: { "content-type": v[0x3467] }, data: n, success: function (e) {
          console.log(v[0x3487]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? v[0x3488] == e.data.platform ? e.data.is_android_pay ? e.data.is_min_pay ? t.jumpPay(e.data) : t.kfPay(e.data) : t.gamePay(e.data) : e.data.is_ios_pay ? e.data.is_min_pay ? t.jumpPay(e.data) : t.kfPay(e.data) : wx.showModal({ title: v[0x3489], content: v[0x348a], confirmText: v[0x348b], showCancel: !1 }) : t.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: v[0x346f] });
        } })) : r.pay && r.pay(1, { errMsg: v[0x348c] });
    }, jumpPay: function (e) {
      var n = e.orderId;var t = e.money;e = e.min_pay_app_id;wx.navigateToMiniProgram({ appId: e, path: v[0x348d] + n + v[0x348e] + t, extraData: {}, success(e) {}, fail(e) {} });
    }, minPay: function (n) {
      var t = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          v[0x348f] == e.errMsg && (e = { cpOrderNo: t.order_data.cpbill, orderNo: n.orderId, amount: t.order_data.price, extension: t.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          v[0x3490] == e.errMsg ? r.pay && r.pay(2, { errMsg: v[0x3491] }) : r.pay && r.pay(1, { errMsg: v[0x3492] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var t = this;n.buyQuantity <= n.balance ? (console.log(v[0x3493]), wx.showModal({ title: v[0x3489], content: v[0x3494] + n.balance + v[0x3495] + n.buyQuantity + v[0x3496], showCancel: !1, confirmText: v[0x348b], success: function () {
          t.gameGoPay(n);
        } })) : (console.log(v[0x3497]), console.log(n), wx.requestMidasPayment({ mode: v[0x3498], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          console.log(v[0x3499]), console.log(e), v[0x349a] == e.errMsg && t.gameGoPay(n);
        }, fail: function (e) {
          console.log(v[0x349b]), console.log(e), -1 !== e.errMsg.indexOf(v[0x349c]) ? r.pay && r.pay(2, { errMsg: v[0x3491] }) : r.pay && r.pay(1, { errMsg: v[0x3492] + e.errCode + "," + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      D$P6GN7 = e.orderId, wx.showModal({ title: v[0x3489], content: v[0x349d], showCancel: !1, confirmText: v[0x348b], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: v[0x349e], sendMessagePath: v[0x349f], sendMessageImg: v[0x349f] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(v[0x34a0]);var t = this;var a = wx.getStorageSync(v[0x346c]);wx.request({ url: v[0x3463] + HOST + v[0x34a1] + config.partner_id + "/" + config.game_pkg + "/", method: v[0x3465], dataType: v[0x3466], header: { "content-type": v[0x3467] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: a }, success: function (e) {
          console.log(v[0x34a2]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: t.order_data.cpbill, orderNo: n.orderId, amount: t.order_data.price, extension: t.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: v[0x34a3] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(v[0x346a]);var t = wx.getStorageSync(v[0x346b]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$P6NG7 = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x2c], a);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(v[0x346a]);var t = wx.getStorageSync(v[0x346b]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$P6NG7 = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x34a4], a), D$P6N7G && this.updateShare(D$P6N7G.invite, D$P6N7G.invite_type, D$P6N7G.is_new, e.roleid, e.serverid, D$P6N7G.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(v[0x346a]);var t = wx.getStorageSync(v[0x346b]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$P6NG7 = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x34a5], a);
    }, uuid: function (e, n) {
      var t = v[0x34a6].split("");var a,
          o = [];var r;if (e = e || t.length, n) for (a = 0; a < n; a++) o[a] = t[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", a = 0; a < 36; a++) o[a] || (r = 0 | 16 * Math.random(), o[a] = t[19 == a ? 3 & r | 8 : r]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(v[0x3459]);var t = wx.getStorageSync(v[0x345a]);var a = wx.getStorageSync(v[0x345b]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: a, uuid: n, idfv: t, dname: e.model, mac: v[0x34a7], net_type: 0 == e.wifiSignal ? "4G" : v[0x34a8], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: v[0x3488] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var t = this.getPublicData();for (var a in n) t[a] = n[a];console.log(v[0x34a9] + e), console.log(t), wx.request({ url: v[0x3463] + HOST + v[0x34aa] + e + v[0x34ab] + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: v[0x34ac], sendMessagePath: v[0x34ad], sendMessageImg: v[0x34ad] });
    }, adClick: function (e) {
      var n = e.game_id;e = e.query;this.log(v[0x34ae], { event: v[0x34af], ext1: n, ext2: e });
    } };
}function run(e, n, t) {
  e in D$P76GN && D$P76GN[e](n, t);
}exports.init = function (e, n) {
  run(v[0x2d04], e, n);
}, exports.login = function (e) {
  run(v[0x34b0], "", e);
}, exports.login = function (e) {
  run(v[0x34b0], "", e);
}, exports.pay = function (e, n) {
  run(v[0x34b1], e, n);
}, exports.openService = function () {
  run(v[0x34b2]);
}, exports.logCreateRole = function (e, n, t, a, o) {
  run(v[0x34b3], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.logEnterGame = function (e, n, t, a, o) {
  run(v[0x34b4], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.logRoleUpLevel = function (e, n, t, a, o) {
  run(v[0x34b5], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.share = function (e) {
  run(v[0x3473], { type: e });
}, exports.msgCheck = function (e, n) {
  run(v[0x34b6], e, n);
}, exports.downloadClient = function () {
  run(v[0x34b7]);
}, exports.adClick = function (e, n) {
  run(v[0x34b8], { game_id: e, query: n });
};