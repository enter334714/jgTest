var H = wx.$F;
let config = { game_id: H[0x3e21], game_pkg: H[0x7de6], partner_id: H[0x7de7], is_auth: !1, from: null };window.config = config;let f1QB83L = f1Q8L3B(),
    HOST = H[0x7de8],
    f1QB8L3 = null,
    f1Q83BL = null,
    game_ver = "";function f1Q8L3B() {
  var e = {};return { order_data: {}, init: function (e, o) {
      game_ver = e && e.game_ver ? e.game_ver : 0, console.log(H[0x7de9]);var n,
          t = wx.getStorageSync(H[0x7dea]);t ? n = 0 : (t = this.uuid(16, 32), wx.setStorageSync(H[0x7dea], t), n = 1);var a = wx.getStorageSync(H[0x7deb]);a || (a = this.uuid(16, 32), wx.setStorageSync(H[0x7deb], a));var r = wx.getLaunchOptionsSync(),
          i = r.scene ? r.scene : "";if (console.log(H[0x7dec]), console.log(r), n && r.query && r.query.ad_code && wx.setStorageSync(H[0x7ded], r.query.ad_code), r.query && r.query.from && "" != r.query.from) n && wx.setStorageSync(H[0x7dee], r.query.from), config.from = r.query.from;else {
        var s = wx.getStorageSync(H[0x7dee]);s || "" == s || (config.from = s);
      }console.log(config.from);var l = { install: n, scene: i };this.log(H[0x54], l), wx.showShareMenu(), game_ver && this.checkGameVersion(game_ver, function (e) {
        o && o(e);
      });
    }, login: function (o, n) {
      console.log(H[0x7def]);var t = this;e.login = H[0x12] == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          if (e.authSetting[H[0x7df0]]) console.log(H[0x7df1]), t.do_login();else {
            console.log(H[0x7df2]), wx.hideLoading({});var o = wx.getSystemInfoSync(),
                n = (o.screenWidth, o.screenHeight, wx.createUserInfoButton({ type: H[0xb90], text: H[0x7df3], withCredentials: !1, style: { top: o.windowHeight / 2 + o.windowHeight / 4, left: o.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: H[0x7df4], color: H[0xe08], textAlign: H[0x5239], fontSize: 16, borderRadius: 4 } }));n.show(), n.onTap(e => {
              console.log(e), f13BL8({ title: H[0x7df5] }), H[0x7df6] == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), n.destroy();
            });
          }
        }, fail: function () {
          console.log(H[0x7df7]), t.do_login();
        } }) : (console.log(H[0x7df8] + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var n = this;wx.login({ success: function (t) {
          if (console.log(H[0x7df9] + JSON.stringify(t)), t.code) {
            var a = n.getPublicData();a.mo = 1, a.code = t.code, a.nick_name = o ? o.nick_name : "", a.head_img = o ? o.head_img : "", config.is_auth ? wx.getUserInfo({ success: function (o) {
                var n = o.encryptedData,
                    t = o.iv,
                    r = o.signature;a.encryptedData = n, a.iv = t, a.signature = r, wx.request({ url: HOST + H[0x7dfa], method: H[0x22bc], dataType: H[0x11d2], header: { "content-type": H[0x7dfb] }, data: a, success: function (o) {
                    if (console.log(H[0x7dfc]), console.log(o), 200 == o.statusCode) {
                      var n = o.data;if (n.state) {
                        var t = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token };try {
                          wx.setStorageSync(H[0x7dfd], n.data.sdk_token), wx.setStorageSync(H[0x7dfe], n.data.user_id), wx.setStorageSync(H[0x7dff], n.data.username), wx.setStorageSync(H[0x7e00], n.data.openid), n.data.ext && wx.setStorageSync(H[0x7e01], n.data.ext);
                        } catch (e) {}e.login && e.login(0, t);
                      } else e.login && e.login(1, { errMsg: n.msg });
                    } else e.login && e.login(1, { errMsg: H[0x7e02] });
                  }, fail: function (o) {
                    e.login && e.login(1, { errMsg: o.errMsg });
                  } });
              }, fail: function (o) {
                e.login && e.login(1, { errMsg: o.errMsg });
              } }) : wx.request({ url: HOST + H[0x7dfa], method: H[0x22bc], dataType: H[0x11d2], header: { "content-type": H[0x7dfb] }, data: a, success: function (o) {
                if (console.log(H[0x7dfc]), console.log(o), 200 == o.statusCode) {
                  var n = o.data;if (n.state) {
                    var t = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token };try {
                      wx.setStorageSync(H[0x7dfd], n.data.sdk_token), wx.setStorageSync(H[0x7dfe], n.data.user_id), wx.setStorageSync(H[0x7dff], n.data.username), wx.setStorageSync(H[0x7e00], n.data.openid), n.data.ext && wx.setStorageSync(H[0x7e01], n.data.ext);
                    } catch (e) {}e.login && e.login(0, t);
                  } else e.login && e.login(1, { errMsg: n.msg });
                } else e.login && e.login(1, { errMsg: H[0x7e03] });
              } });
          } else e.login && e.login(1, { errMsg: t.errMsg });
        }, fail: function (o) {
          console.log(H[0x7e04] + JSON.stringify(o)), (o.errMsg.indexOf(H[0x7e05]) > -1 || o.errMsg.indexOf(H[0x7e06]) > -1) && e.login && e.login(1, { errMsg: o.errMsg });
        } });
    }, checkGameVersion: function (e, o) {
      console.log(H[0x7e07]);wx.getStorageSync(H[0x7dfd]);wx.request({ url: HOST + H[0x7e08], method: H[0x22bc], dataType: H[0x11d2], header: { "content-type": H[0x7dfb] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          if (console.log(H[0x7e09]), console.log(e), 200 == e.statusCode) {
            var n = e.data;n.state ? o && o(n.data) : o && o({ develop: 0 });
          } else o && o({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, pay: function (e, o) {
      var n = this;wx.checkSession({ success: function () {
          n.startPay(e, o);
        }, fail: function () {
          console.log(H[0x7e0a]), n.login({}, function () {
            n.startPay(e, o);
          });
        } });
    }, startPay: function (o, n) {
      console.log(H[0x7e0b]), console.log(o);var t = this;e.pay = H[0x12] == typeof n ? n : null, 0;var a = wx.getStorageSync(H[0x7dfd]),
          r = wx.getStorageSync(H[0x7e01]);if (a && r) {
        var i = wx.getSystemInfoSync(),
            s = { cpbill: o.cpbill, productid: o.productid, productname: o.productname, productdesc: o.productdesc, serverid: o.serverid, servername: o.servername, roleid: o.roleid, rolename: o.rolename, rolelevel: o.rolelevel, price: o.price, extension: o.extension, sdk_token: a, session_key: r, platform: i.platform };t.order_data = s;var l = t.getPublicData();l.order_data = JSON.stringify(s), wx.request({ url: HOST + H[0x7e0c], method: H[0x22bc], dataType: H[0x11d2], header: { "content-type": H[0x7dfb] }, data: l, success: function (o) {
            if (console.log(H[0x7e0d]), console.log(o), 200 == o.statusCode) {
              var n = o.data;n.state ? void 0 === wx.requestPayment ? H[0x22ac] == i.platform || H[0x7e0e] == i.platform || H[0x7e0f] == i.platform ? n.data.is_android_pay ? t.kfPay(n.data) : t.gamePay(n.data) : n.data.is_ios_pay ? 1 == n.data.ios_pay_type && t.kfPay(n.data) : wx.showModal({ title: H[0x7e10], content: H[0x7e11], confirmText: H[0x7e12], showCancel: !1 }) : t.minPay(n.data) : e.pay && e.pay(1, { errMsg: n.msg });
            } else e.login && e.login(1, { errMsg: H[0x7e13] });
          } });
      } else e.pay && e.pay(1, { errMsg: H[0x7e14] });
    }, gamePay: function (o) {
      var n = this;o.buyQuantity <= o.balance ? (console.log(H[0x7e15]), wx.showModal({ title: H[0x7e10], content: H[0x7e16] + o.balance + H[0x7e17] + o.buyQuantity + H[0x7e18], showCancel: !1, confirmText: H[0x7e12], success: function () {
          n.gameGoPay(o);
        } })) : (console.log(H[0x7e19]), console.log(o), wx.requestMidasPayment({ mode: H[0x3d5], env: o.env, offerId: o.offerId, currencyType: o.currencyType, platform: o.platform, buyQuantity: o.buyQuantity, zoneId: o.zoneId, success: function (e) {
          H[0x7e1a] == e.errMsg && n.gameGoPay(o);
        }, fail: function (o) {
          -1 !== o.errMsg.indexOf(H[0x7e1b]) ? e.pay && e.pay(2, { errMsg: H[0x7e1c] }) : e.pay && e.pay(1, { errMsg: H[0x7e1d] + o.errMsg + H[0x783] + o.errCode + H[0x784] });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      f1Q83BL = e.orderId, wx.showModal({ title: H[0x7e10], content: H[0x7e1e], showCancel: !1, confirmText: H[0x7e12], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: H[0x7e1f], sendMessageImg: H[0x7e20] });
        } });
    }, gameGoPay: function (o, n) {
      console.log(H[0x7e21]);var t = this,
          a = wx.getStorageSync(H[0x7e01]);wx.request({ url: HOST + H[0x7e22] + config.partner_id + H[0x10] + config.game_pkg + H[0x10], method: H[0x22bc], dataType: H[0x11d2], header: { "content-type": H[0x7dfb] }, data: { order_id: o.orderId, time: o.time, sign: o.sign, session_key: a }, success: function (n) {
          if (console.log(H[0x7e23]), console.log(n), 200 == n.statusCode) if (1 == n.data.state) {
            var a = { cpOrderNo: t.order_data.cpbill, orderNo: o.orderId, amount: t.order_data.price, extension: t.order_data.extension };e.pay && e.pay(0, a);
          } else e.pay && e.pay(1, { errMsg: H[0x7e24] });
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync(H[0x7dfe]),
          n = wx.getStorageSync(H[0x7dff]),
          t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (f1QB8L3 = { role_id: e.roleid, server_id: e.serverid }), this.log(H[0x21], t);
    }, logEnterGame: function (e) {
      var o = wx.getStorageSync(H[0x7dfe]),
          n = wx.getStorageSync(H[0x7dff]),
          t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (f1QB8L3 = { role_id: e.roleid, server_id: e.serverid }), this.log(H[0x4816], t);
    }, logRoleUpLevel: function (e) {
      var o = wx.getStorageSync(H[0x7dfe]),
          n = wx.getStorageSync(H[0x7dff]),
          t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (f1QB8L3 = { role_id: e.roleid, server_id: e.serverid }), this.log(H[0x7e25], t);
    }, uuid: function (e, o) {
      var n,
          t,
          a = H[0x7e26].split(""),
          r = [];if (e = e || a.length, o) for (n = 0; n < o; n++) r[n] = a[0 | Math.random() * e];else for (r[8] = r[13] = r[18] = r[23] = H[0x1b1], r[14] = H[0x7de7], n = 0; n < 36; n++) r[n] || (t = 0 | 16 * Math.random(), r[n] = a[19 == n ? 3 & t | 8 : t]);return r.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync(),
          o = wx.getStorageSync(H[0x7dea]),
          n = wx.getStorageSync(H[0x7deb]),
          t = wx.getStorageSync(H[0x7ded]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: o, idfv: n, dname: e.model, mac: H[0x7e27], net_type: 0 == e.wifiSignal ? H[0x7e28] : H[0x7e29], os_ver: e.system, sdk_ver: e.version, game_ver: game_ver, device: H[0x22ac] == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, o) {
      var n = this.getPublicData();for (var t in o) n[t] = o[t];console.log(H[0x7e2a] + e), console.log(n), wx.request({ url: HOST + H[0x7e2b] + e + H[0x7e2c] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + H[0x1b1] + e.getMonth() + H[0x1b1] + e.getDate();
    }, downloadClient: function () {
      var e = H[0x7e2d] + wx.getStorageSync(H[0x7e00]);wx.showModal({ title: H[0x7e2e], content: H[0x7e2f], showCancel: !1, confirmText: H[0x7e12], success: function () {
          var o = { showMessageCard: !0, sendMessageTitle: e, sendMessageImg: H[0x7e30] };wx.openCustomerServiceConversation(o);
        } });
    }, checkMsg: function (e, o) {
      console.log(H[0x7e31]);var n = wx.getStorageSync(H[0x7dfd]);wx.request({ url: HOST + H[0x7e32], method: H[0x22bc], dataType: H[0x11d2], header: { "content-type": H[0x7dfb] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, content: e }, success: function (e) {
          console.log(H[0x7e33]), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    }, checkMsgV2: function (e, o) {
      console.log(H[0x7e31]);var n = wx.getStorageSync(H[0x7dfd]);wx.request({ url: HOST + H[0x7e34], method: H[0x22bc], dataType: H[0x11d2], header: { "content-type": H[0x7dfb] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, content: e, scene: 1 }, success: function (e) {
          console.log(H[0x7e33]), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    }, sendMessage: function (e, o, n) {
      console.log(H[0x7e35]);var t = wx.getStorageSync(H[0x7dfd]);wx.request({ url: HOST + H[0x7e36], method: H[0x22bc], dataType: H[0x11d2], header: { "content-type": H[0x7dfb] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, template_id: e, data: o }, success: function (e) {
          console.log(H[0x7e37]), n && n(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    } };
}function run(e, o, n) {
  e in f1QB83L && f1QB83L[e](o, n);
}const tempobj = {};window.cwan = tempobj, tempobj.init = function (e, o) {
  run(H[0x30], e, o);
}, tempobj.login = function (e) {
  run(H[0x1711], "", e);
}, tempobj.pay = function (e, o) {
  run(H[0x26b8], e, o);
}, tempobj.logCreateRole = function (e, o, n, t, a) {
  run(H[0x4805], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, tempobj.logEnterGame = function (e, o, n, t, a) {
  run(H[0x4807], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, tempobj.logRoleUpLevel = function (e, o, n, t, a) {
  run(H[0x4806], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, tempobj.downloadClient = function () {
  run(H[0x2c9]);
}, tempobj.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, tempobj.getPublicData = function () {
  run(H[0x7e38]);
}, tempobj.checkMsg = function (e, o) {
  run(H[0x31e1], e, o);
}, tempobj.checkMsgV2 = function (e, o) {
  run(H[0x7e39], e, o);
}, tempobj.sendMessage = function (e, o, n) {
  run(H[0x7e3a], e, o, n);
};