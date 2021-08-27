var a_ = wx.$d;
var config = { game_id: a_[0x358f], game_pkg: a_[0x3590], partner_id: a_[0x3591], game_ver: a_[0x3592], is_auth: "1", btn_img: "", btn_bg: "" };var D$AYI6$ = D$AI6Y$();var HOST = a_[0x3593];var t;var t_second = 0;var t_max = 300;var D$AI$6Y = null;var D$AI$Y6 = null;var D$AI6$Y = null;var btnImg_url = "";function D$AI6Y$() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log(a_[0x3594]);var a = this;var o;o = (r = wx.getStorageSync(a_[0x3595])) ? 0 : (r = a.uuid(16, 32), wx.setStorageSync(a_[0x3595], r), 1), (e = wx.getStorageSync(a_[0x3596])) || (e = a.uuid(16, 32), wx.setStorageSync(a_[0x3596], e));var r = wx.getLaunchOptionsSync();e = r.scene || "";o && r.query && r.query.ad_code && wx.setStorageSync(a_[0x3597], r.query.ad_code), a.log(a_[0x3598], { install: o, scene: e }), wx.showShareMenu();a = r.query && r.query.invite ? r.query.invite : "";r = r.query && r.query.invite_type ? r.query.invite_type : "";a && (D$AI$Y6 = { invite: a, invite_type: r, is_new: o, scene: e }), t && this.checkGameVersion(t, function (e) {
        config.is_auth = e.is_auth, config.btn_bg = e.auth_bg_image, config.btn_img = e.auth_button_image, n && n(e);
      });
    }, login: function (e, n) {
      console.log(a_[0x3599]);var i = this;r.login = a_[0x3440] == typeof n ? n : null, "1" == config.is_auth ? wx.getSetting({ success: function (e) {
          var t, a, o, r;e.authSetting[a_[0x359a]] ? i.do_login1() : (e = wx.getSystemInfoSync(), t = e.screenWidth, a = e.screenHeight, (r = wx.createImage()).src = config.btn_img, r.onload = function () {
            o = .15 * a;var n = wx.createUserInfoButton({ type: a_[0x359b], image: r.src, style: { left: (t - t) / 2, top: a / 1.35, width: t, height: o } });n.onTap(function (e) {
              console.log(e), a_[0x359c] == e.errMsg && (i.do_login1({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }), n.destroy());
            });
          });
        }, fail: function () {
          i.do_login2();
        } }) : i.do_login2();
    }, do_login1: function (t) {
      var o = this;wx.login({ success: function (e) {
          if (console.log(a_[0x359d] + JSON.stringify(e)), e.code) {
            var a = o.getPublicData();if (a.is_from_min = 1, a.code = e.code, a.nick_name = t ? t.nick_name : "", a.head_img = t ? t.head_img : "", D$AI$Y6 && a_[0x1a] == typeof D$AI$Y6) for (var n in D$AI$Y6) a[n] = D$AI$Y6[n];wx.getUserInfo({ success: function (e) {
                console.log(a_[0x359e] + JSON.stringify(e));var n = e.encryptedData;var t = e.iv;e = e.signature;a.encryptedData = encodeURIComponent(n), a.iv = encodeURIComponent(t), a.signature = e, wx.request({ url: a_[0x359f] + HOST + a_[0x35a0], method: a_[0x34ae], dataType: a_[0x35a1], header: { "content-type": a_[0x34ec] }, data: a, success: function (e) {
                    if (console.log(a_[0x35a2]), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync(a_[0x35a3], n.data.sdk_token), wx.setStorageSync(a_[0x35a4], n.data.user_id), wx.setStorageSync(a_[0x35a5], n.data.username), n.data.ext && wx.setStorageSync(a_[0x35a6], n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });o.getShareInfo(a_[0x35a7], function (e) {
                        console.log(a_[0x35a8]), wx.onShareAppMessage(function () {
                          return o.logStartShare(a_[0x35a7]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: a_[0x35a9] });
                  } });
              }, fail: function (e) {
                console.log(a_[0x35aa] + e.errMsg);
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          (-1 < e.errMsg.indexOf(a_[0x35ab]) || -1 < e.errMsg.indexOf(a_[0x35ac])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, do_login2: function (a) {
      var o = this;wx.login({ success: function (e) {
          if (console.log(a_[0x359d] + JSON.stringify(e)), e.code) {
            var n = o.getPublicData();if (n.is_from_min = 1, n.code = e.code, n.nick_name = a ? a.nick_name : "", n.head_img = a ? a.head_img : "", D$AI$Y6 && a_[0x1a] == typeof D$AI$Y6) for (var t in D$AI$Y6) n[t] = D$AI$Y6[t];wx.request({ url: a_[0x359f] + HOST + a_[0x35a0], method: a_[0x34ae], dataType: a_[0x35a1], header: { "content-type": a_[0x34ec] }, data: n, success: function (e) {
                if (console.log(a_[0x35a2]), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(a_[0x35a3], n.data.sdk_token), wx.setStorageSync(a_[0x35a4], n.data.user_id), wx.setStorageSync(a_[0x35a5], n.data.username), n.data.ext && wx.setStorageSync(a_[0x35a6], n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });o.getShareInfo(a_[0x35a7], function (e) {
                    console.log(a_[0x35a8]), wx.onShareAppMessage(function () {
                      return o.logStartShare(a_[0x35a7]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: a_[0x35a9] });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          (-1 < e.errMsg.indexOf(a_[0x35ab]) || -1 < e.errMsg.indexOf(a_[0x35ac])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = a_[0x3440] == typeof callback ? callback : null;var n = e.type || a_[0x34db];console.log(a_[0x35ad] + n);var t = this;this.getShareInfo(n, function (e) {
        t.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(a_[0x35a3]);wx.request({ url: a_[0x359f] + HOST + a_[0x35ae], method: a_[0x34ae], dataType: a_[0x35a1], header: { "content-type": a_[0x34ec] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: D$AI$6Y ? D$AI$6Y.server_id : "", role_id: D$AI$6Y ? D$AI$6Y.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log(a_[0x35af]);wx.getStorageSync(a_[0x35a3]);var n = wx.getStorageSync(a_[0x3595]);wx.request({ url: a_[0x359f] + HOST + a_[0x35b0], method: a_[0x34ae], dataType: a_[0x35a1], header: { "content-type": a_[0x34ec] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e, uuid: n }, success: function (e) {
          var n;console.log(a_[0x35b1]), console.log(e), 200 == e.statusCode && (n = e.data).state ? t && t(n.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, n) {
      console.log(a_[0x35b2]);var t = wx.getStorageSync(a_[0x35a3]);wx.request({ url: a_[0x359f] + HOST + a_[0x35b3], method: a_[0x34ae], dataType: a_[0x35a1], header: { "content-type": a_[0x34ec] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: D$AI$6Y ? D$AI$6Y.server_id : "", role_id: D$AI$6Y ? D$AI$6Y.role_id : "", no_log: 1 }, success: function (e) {
          console.log(a_[0x35b4]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: a_[0x35b5] + e.msg }) : r.share && r.share(1, { errMsg: a_[0x35b6] });
        } });
    }, updateShare: function (e, n, t, a, o, r) {
      console.log(a_[0x35b7]);var i = wx.getStorageSync(a_[0x35a3]);wx.request({ url: a_[0x359f] + HOST + a_[0x35b8], method: a_[0x34ae], dataType: a_[0x35a1], header: { "content-type": a_[0x34ec] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: t, role_id: a, sever_id: o, scene: r }, success: function (e) {
          console.log(a_[0x35b9]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(a_[0x35ba]);var t = wx.getStorageSync(a_[0x35a3]);wx.request({ url: a_[0x359f] + HOST + a_[0x35bb], method: a_[0x34ae], dataType: a_[0x35a1], header: { "content-type": a_[0x34ec] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, content: e }, success: function (e) {
          console.log(a_[0x35bc]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var t = this;wx.checkSession({ success: function () {
          t.startPay(e, n);
        }, fail: function () {
          console.log(a_[0x35bd]), t.login({}, function () {
            t.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(a_[0x35be]), console.log(e);var t = this;r.pay = a_[0x3440] == typeof n ? n : null;var a = wx.getStorageSync(a_[0x35a3]);var o = wx.getStorageSync(a_[0x35a6]);a && o ? (n = wx.getSystemInfoSync(), o = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: a, session_key: o, platform: n.platform }, t.order_data = o, (n = t.getPublicData()).order_data = JSON.stringify(o), n.is_from_min = 1, wx.request({ url: a_[0x359f] + HOST + a_[0x35bf], method: a_[0x34ae], dataType: a_[0x35a1], header: { "content-type": a_[0x34ec] }, data: n, success: function (e) {
          console.log(a_[0x35c0]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? a_[0x3483] == e.data.platform ? e.data.is_android_pay ? e.data.is_min_pay ? t.jumpPay(e.data) : t.kfPay(e.data) : t.gamePay(e.data) : e.data.is_ios_pay ? e.data.is_min_pay ? t.jumpPay(e.data) : t.kfPay(e.data) : wx.showModal({ title: a_[0x35c1], content: a_[0x35c2], confirmText: a_[0x35c3], showCancel: !1 }) : t.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: a_[0x35a9] });
        } })) : r.pay && r.pay(1, { errMsg: a_[0x35c4] });
    }, jumpPay: function (e) {
      var n = e.orderId;var t = e.money;e = e.min_pay_app_id;wx.navigateToMiniProgram({ appId: e, path: a_[0x35c5] + n + a_[0x35c6] + t, extraData: {}, success(e) {}, fail(e) {} });
    }, minPay: function (n) {
      var t = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          a_[0x35c7] == e.errMsg && (e = { cpOrderNo: t.order_data.cpbill, orderNo: n.orderId, amount: t.order_data.price, extension: t.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          a_[0x35c8] == e.errMsg ? r.pay && r.pay(2, { errMsg: a_[0x35c9] }) : r.pay && r.pay(1, { errMsg: a_[0x35ca] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var t = this;n.buyQuantity <= n.balance ? (console.log(a_[0x35cb]), wx.showModal({ title: a_[0x35c1], content: a_[0x35cc] + n.balance + a_[0x35cd] + n.buyQuantity + a_[0x35ce], showCancel: !1, confirmText: a_[0x35c3], success: function () {
          t.gameGoPay(n);
        } })) : (console.log(a_[0x35cf]), console.log(n), wx.requestMidasPayment({ mode: a_[0x35d0], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          console.log(a_[0x35d1]), console.log(e), a_[0x35d2] == e.errMsg && t.gameGoPay(n);
        }, fail: function (e) {
          console.log(a_[0x35d3]), console.log(e), -1 !== e.errMsg.indexOf(a_[0x35d4]) ? r.pay && r.pay(2, { errMsg: a_[0x35c9] }) : r.pay && r.pay(1, { errMsg: a_[0x35ca] + e.errCode + "," + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      D$AI6$Y = e.orderId, wx.showModal({ title: a_[0x35c1], content: a_[0x35d5], showCancel: !1, confirmText: a_[0x35c3], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: a_[0x35d6], sendMessagePath: a_[0x35d7], sendMessageImg: a_[0x35d7] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(a_[0x35d8]);var t = this;var a = wx.getStorageSync(a_[0x35a6]);wx.request({ url: a_[0x359f] + HOST + a_[0x35d9] + config.partner_id + "/" + config.game_pkg + "/", method: a_[0x34ae], dataType: a_[0x35a1], header: { "content-type": a_[0x34ec] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: a }, success: function (e) {
          console.log(a_[0x35da]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: t.order_data.cpbill, orderNo: n.orderId, amount: t.order_data.price, extension: t.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: a_[0x35db] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(a_[0x35a4]);var t = wx.getStorageSync(a_[0x35a5]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$AI$6Y = { role_id: e.roleid, server_id: e.serverid }), this.log(a_[0x2c], a);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(a_[0x35a4]);var t = wx.getStorageSync(a_[0x35a5]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$AI$6Y = { role_id: e.roleid, server_id: e.serverid }), this.log(a_[0x35dc], a), D$AI$Y6 && this.updateShare(D$AI$Y6.invite, D$AI$Y6.invite_type, D$AI$Y6.is_new, e.roleid, e.serverid, D$AI$Y6.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(a_[0x35a4]);var t = wx.getStorageSync(a_[0x35a5]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$AI$6Y = { role_id: e.roleid, server_id: e.serverid }), this.log(a_[0x35dd], a);
    }, uuid: function (e, n) {
      var t = a_[0x35de].split("");var a,
          o = [];var r;if (e = e || t.length, n) for (a = 0; a < n; a++) o[a] = t[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", a = 0; a < 36; a++) o[a] || (r = 0 | 16 * Math.random(), o[a] = t[19 == a ? 3 & r | 8 : r]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(a_[0x3595]);var t = wx.getStorageSync(a_[0x3596]);var a = wx.getStorageSync(a_[0x3597]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: a, uuid: n, idfv: t, dname: e.model, mac: a_[0x35df], net_type: 0 == e.wifiSignal ? "4G" : a_[0x35e0], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: a_[0x3483] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var t = this.getPublicData();for (var a in n) t[a] = n[a];console.log(a_[0x35e1] + e), console.log(t), wx.request({ url: a_[0x359f] + HOST + a_[0x35e2] + e + a_[0x35e3] + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: a_[0x35e4], sendMessagePath: a_[0x35e5], sendMessageImg: a_[0x35e5] });
    }, adClick: function (e) {
      var n = e.game_id;e = e.query;this.log(a_[0x35e6], { event: a_[0x35e7], ext1: n, ext2: e });
    } };
}function run(e, n, t) {
  e in D$AYI6$ && D$AYI6$[e](n, t);
}exports.init = function (e, n) {
  run(a_[0x2d02], e, n);
}, exports.login = function (e) {
  run(a_[0x35e8], "", e);
}, exports.login = function (e) {
  run(a_[0x35e8], "", e);
}, exports.pay = function (e, n) {
  run(a_[0x35e9], e, n);
}, exports.openService = function () {
  run(a_[0x35ea]);
}, exports.logCreateRole = function (e, n, t, a, o) {
  run(a_[0x35eb], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.logEnterGame = function (e, n, t, a, o) {
  run(a_[0x35ec], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.logRoleUpLevel = function (e, n, t, a, o) {
  run(a_[0x35ed], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.share = function (e) {
  run(a_[0x34db], { type: e });
}, exports.msgCheck = function (e, n) {
  run(a_[0x34a5], e, n);
}, exports.downloadClient = function () {
  run(a_[0x35ee]);
}, exports.adClick = function (e, n) {
  run(a_[0x35ef], { game_id: e, query: n });
};