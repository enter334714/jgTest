var p = wx.$h;
var config = { game_id: "2", game_pkg: p[87165], partner_id: "4", is_auth: !1, from: null };window.config = config;var PARTNER_SDK = mainSDK();var HOST = p[87166];var user_game_info = null;var this_order_id = null;var game_ver = "";function mainSDK() {
  var r = {};return { order_data: {}, init: function (e, o) {
      game_ver = e && e.game_ver ? e.game_ver : 0, console.log(p[87167]);var n = this;var t;t = (a = wx.getStorageSync(p[87168])) ? 0 : (a = n.uuid(16, 32), wx.setStorageSync(p[87168], a), 1), (e = wx.getStorageSync(p[87169])) || (e = n.uuid(16, 32), wx.setStorageSync(p[87169], e));var a = wx.getLaunchOptionsSync();e = a.scene || "";console.log(p[87170]), console.log(a), t && a.query && a.query.ad_code && wx.setStorageSync(p[87171], a.query.ad_code), a.query && a.query.from && "" != a.query.from ? (t && wx.setStorageSync(p[87172], a.query.from), config.from = a.query.from) : (a = wx.getStorageSync(p[87172])) || "" == a || (config.from = a), console.log(config.from), n.log(p[60304], { install: t, scene: e }), wx.showShareMenu(), game_ver && this.checkGameVersion(game_ver, function (e) {
        o && o(e);
      });
    }, login: function (e, o) {
      console.log(p[87173]);var t = this;r.login = p[87174] == typeof o ? o : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var o, n;e.authSetting[p[87175]] ? (console.log(p[87176]), t.do_login()) : (console.log(p[87177]), wx.hideLoading({}), e = 2 * (o = wx.getSystemInfoSync()).screenWidth / 3, o.screenHeight, (n = wx.createUserInfoButton({ type: p[64422], text: p[87178], withCredentials: !1, style: { top: o.windowHeight / 2 + o.windowHeight / 4, left: o.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: p[87179], color: p[64444], textAlign: p[61661], fontSize: 16, borderRadius: 4 } })).show(), n.onTap(e => {
            console.log(e), wxShowLoading({ title: p[87180] }), p[87181] == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), n.destroy();
          }));
        }, fail: function () {
          console.log(p[87182]), t.do_login();
        } }) : (console.log(p[87183] + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var n = this;wx.login({ success: function (e) {
          var t;console.log(p[87184] + JSON.stringify(e)), e.code ? ((t = n.getPublicData()).mo = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", config.is_auth ? wx.getUserInfo({ success: function (e) {
              var o = e.encryptedData;var n = e.iv;e = e.signature;t.encryptedData = o, t.iv = n, t.signature = e, wx.request({ url: HOST + p[87185], method: p[87186], dataType: p[65824], header: { "content-type": p[87187] }, data: t, success: function (e) {
                  if (console.log(p[87188]), console.log(e), 200 == e.statusCode) {
                    var o = e.data;if (o.state) {
                      e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                        wx.setStorageSync(p[87189], o.data.sdk_token), wx.setStorageSync(p[87190], o.data.user_id), wx.setStorageSync(p[87191], o.data.username), o.data.ext && wx.setStorageSync(p[87192], o.data.ext);
                      } catch (e) {}r.login && r.login(0, e);
                    } else r.login && r.login(1, { errMsg: o.msg });
                  } else r.login && r.login(1, { errMsg: p[87193] });
                }, fail: function (e) {
                  r.login && r.login(1, { errMsg: e.errMsg });
                } });
            }, fail: function (e) {
              r.login && r.login(1, { errMsg: e.errMsg });
            } }) : wx.request({ url: HOST + p[87185], method: p[87186], dataType: p[65824], header: { "content-type": p[87187] }, data: t, success: function (e) {
              if (console.log(p[87188]), console.log(e), 200 == e.statusCode) {
                var o = e.data;if (o.state) {
                  e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                    wx.setStorageSync(p[87189], o.data.sdk_token), wx.setStorageSync(p[87190], o.data.user_id), wx.setStorageSync(p[87191], o.data.username), o.data.ext && wx.setStorageSync(p[87192], o.data.ext);
                  } catch (e) {}r.login && r.login(0, e);
                } else r.login && r.login(1, { errMsg: o.msg });
              } else r.login && r.login(1, { errMsg: p[87194] });
            } })) : r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(p[87195] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(p[87196]) || -1 < e.errMsg.indexOf(p[87197])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, checkGameVersion: function (e, n) {
      console.log(p[87198]);wx.getStorageSync(p[87189]);wx.request({ url: HOST + p[87199], method: p[87186], dataType: p[65824], header: { "content-type": p[87187] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var o;console.log(p[87200]), console.log(e), 200 == e.statusCode && (o = e.data).state ? n && n(o.data) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, pay: function (e, o) {
      var n = this;wx.checkSession({ success: function () {
          n.startPay(e, o);
        }, fail: function () {
          console.log(p[87201]), n.login({}, function () {
            n.startPay(e, o);
          });
        } });
    }, startPay: function (e, o) {
      console.log(p[87202]), console.log(e);var n = this;r.pay = p[87174] == typeof o ? o : null;var t = wx.getStorageSync(p[87189]);o = wx.getStorageSync(p[87192]);var a;t && o ? (a = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: o, platform: a.platform }, n.order_data = t, (o = n.getPublicData()).order_data = JSON.stringify(t), wx.request({ url: HOST + p[87203], method: p[87186], dataType: p[65824], header: { "content-type": p[87187] }, data: o, success: function (e) {
          console.log(p[87204]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? p[87205] == a.platform || p[87206] == a.platform || p[87207] == a.platform ? e.data.is_android_pay ? n.kfPay(e.data) : n.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type && n.kfPay(e.data) : wx.showModal({ title: p[87208], content: p[87209], confirmText: p[87210], showCancel: !1 }) : n.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: p[87211] });
        } })) : r.pay && r.pay(1, { errMsg: p[87212] });
    }, gamePay: function (o) {
      var n = this;o.buyQuantity <= o.balance ? (console.log(p[87213]), wx.showModal({ title: p[87208], content: p[87214] + o.balance + p[87215] + o.buyQuantity + p[87216], showCancel: !1, confirmText: p[87210], success: function () {
          n.gameGoPay(o);
        } })) : (console.log(p[87217]), console.log(o), wx.requestMidasPayment({ mode: p[87218], env: o.env, offerId: o.offerId, currencyType: o.currencyType, platform: o.platform, buyQuantity: o.buyQuantity, zoneId: o.zoneId, success: function (e) {
          p[87219] == e.errMsg && n.gameGoPay(o);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(p[87220]) ? r.pay && r.pay(2, { errMsg: p[87221] }) : r.pay && r.pay(1, { errMsg: p[87222] + e.errMsg + "(" + e.errCode + ")" });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      this_order_id = e.orderId, wx.showModal({ title: p[87208], content: p[87223], showCancel: !1, confirmText: p[87210], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: p[87224], sendMessageImg: p[87225] });
        } });
    }, gameGoPay: function (o, e) {
      console.log(p[87226]);var n = this;var t = wx.getStorageSync(p[87192]);wx.request({ url: HOST + p[87227] + config.partner_id + "/" + config.game_pkg + "/", method: p[87186], dataType: p[65824], header: { "content-type": p[87187] }, data: { order_id: o.orderId, time: o.time, sign: o.sign, session_key: t }, success: function (e) {
          console.log(p[87228]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: n.order_data.cpbill, orderNo: o.orderId, amount: n.order_data.price, extension: n.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: p[87229] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync(p[87190]);var n = wx.getStorageSync(p[87191]);var t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log(p[60006], t);
    }, logEnterGame: function (e) {
      var o = wx.getStorageSync(p[87190]);var n = wx.getStorageSync(p[87191]);var t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log(p[65705], t);
    }, logRoleUpLevel: function (e) {
      var o = wx.getStorageSync(p[87190]);var n = wx.getStorageSync(p[87191]);var t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log(p[87230], t);
    }, uuid: function (e, o) {
      var n = p[87231].split("");var t,
          a = [];var r;if (e = e || n.length, o) for (t = 0; t < o; t++) a[t] = n[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = n[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var o = wx.getStorageSync(p[87168]);var n = wx.getStorageSync(p[87169]);var t = wx.getStorageSync(p[87171]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: o, idfv: n, dname: e.model, mac: p[87232], net_type: 0 == e.wifiSignal ? "4G" : p[87233], os_ver: e.system, sdk_ver: e.version, game_ver: game_ver, device: p[87205] == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, o) {
      var n = this.getPublicData();for (var t in o) n[t] = o[t];console.log(p[87234] + e), console.log(n), wx.request({ url: HOST + p[87235] + e + p[87236] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.showModal({ title: p[87237], content: p[87238], showCancel: !1, confirmText: p[87210], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: p[87239], sendMessageImg: p[87240] });
        } });
    }, checkMsg: function (e, o) {
      console.log(p[87241]);var n = wx.getStorageSync(p[87189]);wx.request({ url: HOST + p[87242], method: p[87186], dataType: p[65824], header: { "content-type": p[87187] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, content: e }, success: function (e) {
          console.log(p[87243]), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    } };
}function run(e, o, n) {
  e in PARTNER_SDK && PARTNER_SDK[e](o, n);
}exports.init = function (e, o) {
  run(p[60393], e, o);
}, exports.login = function (e) {
  run(p[87244], "", e);
}, exports.pay = function (e, o) {
  run(p[87245], e, o);
}, exports.logCreateRole = function (e, o, n, t, a) {
  run(p[87246], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, o, n, t, a) {
  run(p[87247], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, o, n, t, a) {
  run(p[87248], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, exports.downloadClient = function () {
  run(p[87249]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[87250]);
}, exports.checkMsg = function (e, o) {
  run(p[87251], e, o);
};