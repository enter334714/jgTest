var v = wx.$d;
var config = { game_id: v[0x35db], game_pkg: v[0x35dc], partner_id: v[0x35dd], game_ver: "4.0.3", is_auth: "1", btn_img: "", btn_bg: "" };var D$QGB05 = D$QB0G5();var HOST = v[0x35df];var t;var t_second = 0;var t_max = 300;var D$QB50G = null;var D$QB5G0 = null;var D$QB05G = null;var btnImg_url = "";function D$QB0G5() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log(v[0x35e0]);var a = this;var o;o = (r = wx.getStorageSync(v[0x35e1])) ? 0 : (r = a.uuid(16, 32), wx.setStorageSync(v[0x35e1], r), 1), (e = wx.getStorageSync(v[0x35e2])) || (e = a.uuid(16, 32), wx.setStorageSync(v[0x35e2], e));var r = wx.getLaunchOptionsSync();e = r.scene || "";o && r.query && r.query.ad_code && wx.setStorageSync(v[0x35e3], r.query.ad_code), a.log(v[0x35e4], { install: o, scene: e }), wx.showShareMenu();a = r.query && r.query.invite ? r.query.invite : "";r = r.query && r.query.invite_type ? r.query.invite_type : "";a && (D$QB5G0 = { invite: a, invite_type: r, is_new: o, scene: e }), t && this.checkGameVersion(t, function (e) {
        config.is_auth = e.is_auth, config.btn_bg = e.auth_bg_image, config.btn_img = e.auth_button_image, n && n(e);
      });
    }, login: function (e, n) {
      console.log(v[0x35e5]);var i = this;r.login = v[0x26] == typeof n ? n : null, "1" == config.is_auth ? wx.getSetting({ success: function (e) {
          var t, a, o, r;e.authSetting[v[0x35e6]] ? i.do_login1() : (e = wx.getSystemInfoSync(), t = e.screenWidth, a = e.screenHeight, (r = wx.createImage()).src = config.btn_img, r.onload = function () {
            o = .15 * a;var n = wx.createUserInfoButton({ type: v[0x35e7], image: r.src, style: { left: (t - t) / 2, top: a / 1.35, width: t, height: o } });n.onTap(function (e) {
              console.log(e), v[0x35e8] == e.errMsg && (i.do_login1({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }), n.destroy());
            });
          });
        }, fail: function () {
          i.do_login2();
        } }) : i.do_login2();
    }, do_login1: function (t) {
      var o = this;wx.login({ success: function (e) {
          if (console.log(v[0x35e9] + JSON.stringify(e)), e.code) {
            var a = o.getPublicData();if (a.is_from_min = 1, a.code = e.code, a.nick_name = t ? t.nick_name : "", a.head_img = t ? t.head_img : "", D$QB5G0 && v[0x1d] == typeof D$QB5G0) for (var n in D$QB5G0) a[n] = D$QB5G0[n];wx.getUserInfo({ success: function (e) {
                console.log(v[0x35ea] + JSON.stringify(e));var n = e.encryptedData;var t = e.iv;e = e.signature;a.encryptedData = encodeURIComponent(n), a.iv = encodeURIComponent(t), a.signature = e, wx.request({ url: v[0x35eb] + HOST + v[0x35ec], method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: a, success: function (e) {
                    if (console.log(v[0x35f0]), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync(v[0x35f1], n.data.sdk_token), wx.setStorageSync(v[0x35f2], n.data.user_id), wx.setStorageSync(v[0x35f3], n.data.username), n.data.ext && wx.setStorageSync(v[0x35f4], n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });o.getShareInfo(v[0x35f5], function (e) {
                        console.log(v[0x35f6]), wx.onShareAppMessage(function () {
                          return o.logStartShare(v[0x35f5]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: v[0x35f7] });
                  } });
              }, fail: function (e) {
                console.log(v[0x35f8] + e.errMsg);
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          (-1 < e.errMsg.indexOf(v[0x35f9]) || -1 < e.errMsg.indexOf(v[0x35fa])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, do_login2: function (a) {
      var o = this;wx.login({ success: function (e) {
          if (console.log(v[0x35e9] + JSON.stringify(e)), e.code) {
            var n = o.getPublicData();if (n.is_from_min = 1, n.code = e.code, n.nick_name = a ? a.nick_name : "", n.head_img = a ? a.head_img : "", D$QB5G0 && v[0x1d] == typeof D$QB5G0) for (var t in D$QB5G0) n[t] = D$QB5G0[t];wx.request({ url: v[0x35eb] + HOST + v[0x35ec], method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: n, success: function (e) {
                if (console.log(v[0x35f0]), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(v[0x35f1], n.data.sdk_token), wx.setStorageSync(v[0x35f2], n.data.user_id), wx.setStorageSync(v[0x35f3], n.data.username), n.data.ext && wx.setStorageSync(v[0x35f4], n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });o.getShareInfo(v[0x35f5], function (e) {
                    console.log(v[0x35f6]), wx.onShareAppMessage(function () {
                      return o.logStartShare(v[0x35f5]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: v[0x35f7] });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          (-1 < e.errMsg.indexOf(v[0x35f9]) || -1 < e.errMsg.indexOf(v[0x35fa])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = v[0x26] == typeof callback ? callback : null;var n = e.type || v[0x35fb];console.log(v[0x35fc] + n);var t = this;this.getShareInfo(n, function (e) {
        t.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(v[0x35f1]);wx.request({ url: v[0x35eb] + HOST + v[0x35fd], method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: D$QB50G ? D$QB50G.server_id : "", role_id: D$QB50G ? D$QB50G.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log(v[0x35fe]);wx.getStorageSync(v[0x35f1]);var n = wx.getStorageSync(v[0x35e1]);wx.request({ url: v[0x35eb] + HOST + v[0x35ff], method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e, uuid: n }, success: function (e) {
          var n;console.log(v[0x3600]), console.log(e), 200 == e.statusCode && (n = e.data).state ? t && t(n.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, n) {
      console.log(v[0x3601]);var t = wx.getStorageSync(v[0x35f1]);wx.request({ url: v[0x35eb] + HOST + v[0x3602], method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: D$QB50G ? D$QB50G.server_id : "", role_id: D$QB50G ? D$QB50G.role_id : "", no_log: 1 }, success: function (e) {
          console.log(v[0x3603]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: v[0x3604] + e.msg }) : r.share && r.share(1, { errMsg: v[0x3605] });
        } });
    }, updateShare: function (e, n, t, a, o, r) {
      console.log(v[0x3606]);var i = wx.getStorageSync(v[0x35f1]);wx.request({ url: v[0x35eb] + HOST + v[0x3607], method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: t, role_id: a, sever_id: o, scene: r }, success: function (e) {
          console.log(v[0x3608]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(v[0x3609]);var t = wx.getStorageSync(v[0x35f1]);wx.request({ url: v[0x35eb] + HOST + v[0x360a], method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, content: e }, success: function (e) {
          console.log(v[0x360b]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var t = this;wx.checkSession({ success: function () {
          t.startPay(e, n);
        }, fail: function () {
          console.log(v[0x360c]), t.login({}, function () {
            t.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(v[0x360d]), console.log(e);var t = this;r.pay = v[0x26] == typeof n ? n : null;var a = wx.getStorageSync(v[0x35f1]);var o = wx.getStorageSync(v[0x35f4]);a && o ? (n = wx.getSystemInfoSync(), o = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: a, session_key: o, platform: n.platform }, t.order_data = o, (n = t.getPublicData()).order_data = JSON.stringify(o), n.is_from_min = 1, wx.request({ url: v[0x35eb] + HOST + v[0x360e], method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: n, success: function (e) {
          console.log(v[0x360f]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? v[0x3610] == e.data.platform ? e.data.is_android_pay ? e.data.is_min_pay ? t.jumpPay(e.data) : t.kfPay(e.data) : t.gamePay(e.data) : e.data.is_ios_pay ? e.data.is_min_pay ? t.jumpPay(e.data) : t.kfPay(e.data) : wx.showModal({ title: v[0x3611], content: v[0x3612], confirmText: v[0x3613], showCancel: !1 }) : t.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: v[0x35f7] });
        } })) : r.pay && r.pay(1, { errMsg: v[0x3614] });
    }, jumpPay: function (e) {
      var n = e.orderId;var t = e.money;e = e.min_pay_app_id;wx.navigateToMiniProgram({ appId: e, path: v[0x3615] + n + v[0x3616] + t, extraData: {}, success(e) {}, fail(e) {} });
    }, minPay: function (n) {
      var t = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          v[0x3617] == e.errMsg && (e = { cpOrderNo: t.order_data.cpbill, orderNo: n.orderId, amount: t.order_data.price, extension: t.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          v[0x3618] == e.errMsg ? r.pay && r.pay(2, { errMsg: v[0x3619] }) : r.pay && r.pay(1, { errMsg: v[0x361a] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var t = this;n.buyQuantity <= n.balance ? (console.log(v[0x361b]), wx.showModal({ title: v[0x3611], content: v[0x361c] + n.balance + v[0x361d] + n.buyQuantity + v[0x361e], showCancel: !1, confirmText: v[0x3613], success: function () {
          t.gameGoPay(n);
        } })) : (console.log(v[0x361f]), console.log(n), wx.requestMidasPayment({ mode: v[0x3620], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          console.log(v[0x3621]), console.log(e), v[0x3622] == e.errMsg && t.gameGoPay(n);
        }, fail: function (e) {
          console.log(v[0x3623]), console.log(e), -1 !== e.errMsg.indexOf(v[0x3624]) ? r.pay && r.pay(2, { errMsg: v[0x3619] }) : r.pay && r.pay(1, { errMsg: v[0x361a] + e.errCode + "," + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      D$QB05G = e.orderId, wx.showModal({ title: v[0x3611], content: v[0x3625], showCancel: !1, confirmText: v[0x3613], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: v[0x3626], sendMessagePath: v[0x3627], sendMessageImg: v[0x3627] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(v[0x3628]);var t = this;var a = wx.getStorageSync(v[0x35f4]);wx.request({ url: v[0x35eb] + HOST + v[0x3629] + config.partner_id + "/" + config.game_pkg + "/", method: v[0x35ed], dataType: v[0x35ee], header: { "content-type": v[0x35ef] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: a }, success: function (e) {
          console.log(v[0x362a]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: t.order_data.cpbill, orderNo: n.orderId, amount: t.order_data.price, extension: t.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: v[0x362b] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(v[0x35f2]);var t = wx.getStorageSync(v[0x35f3]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$QB50G = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x63], a);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(v[0x35f2]);var t = wx.getStorageSync(v[0x35f3]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$QB50G = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x362c], a), D$QB5G0 && this.updateShare(D$QB5G0.invite, D$QB5G0.invite_type, D$QB5G0.is_new, e.roleid, e.serverid, D$QB5G0.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(v[0x35f2]);var t = wx.getStorageSync(v[0x35f3]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$QB50G = { role_id: e.roleid, server_id: e.serverid }), this.log(v[0x362d], a);
    }, uuid: function (e, n) {
      var t = v[0x362e].split("");var a,
          o = [];var r;if (e = e || t.length, n) for (a = 0; a < n; a++) o[a] = t[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", a = 0; a < 36; a++) o[a] || (r = 0 | 16 * Math.random(), o[a] = t[19 == a ? 3 & r | 8 : r]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(v[0x35e1]);var t = wx.getStorageSync(v[0x35e2]);var a = wx.getStorageSync(v[0x35e3]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: a, uuid: n, idfv: t, dname: e.model, mac: v[0x362f], net_type: 0 == e.wifiSignal ? "4G" : v[0x3630], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: v[0x3610] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var t = this.getPublicData();for (var a in n) t[a] = n[a];console.log(v[0x3631] + e), console.log(t), wx.request({ url: v[0x35eb] + HOST + v[0x3632] + e + v[0x3633] + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: v[0x3634], sendMessagePath: v[0x3635], sendMessageImg: v[0x3635] });
    }, adClick: function (e) {
      var n = e.game_id;e = e.query;this.log(v[0x3636], { event: v[0x3637], ext1: n, ext2: e });
    } };
}function run(e, n, t) {
  e in D$QGB05 && D$QGB05[e](n, t);
}exports.init = function (e, n) {
  run(v[0x2e8f], e, n);
}, exports.login = function (e) {
  run(v[0x3638], "", e);
}, exports.login = function (e) {
  run(v[0x3638], "", e);
}, exports.pay = function (e, n) {
  run(v[0x3639], e, n);
}, exports.openService = function () {
  run(v[0x363a]);
}, exports.logCreateRole = function (e, n, t, a, o) {
  run(v[0x363b], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.logEnterGame = function (e, n, t, a, o) {
  run(v[0x363c], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.logRoleUpLevel = function (e, n, t, a, o) {
  run(v[0x363d], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.share = function (e) {
  run(v[0x35fb], { type: e });
}, exports.msgCheck = function (e, n) {
  run(v[0x363e], e, n);
}, exports.downloadClient = function () {
  run(v[0x363f]);
}, exports.adClick = function (e, n) {
  run(v[0x3640], { game_id: e, query: n });
};