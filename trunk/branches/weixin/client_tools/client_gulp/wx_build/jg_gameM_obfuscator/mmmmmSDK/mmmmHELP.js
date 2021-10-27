var Y = wx.$M;
var config = { game_id: "2", game_pkg: Y[27973], partner_id: "4", is_auth: !1, from: null };window.config = config;var $mT85FC = $mT5F8C();var HOST = Y[27974];var $mT5CF8 = null;var $mT5FC8 = null;var game_ver = "";function $mT5F8C() {
  var r = {};return { order_data: {}, init: function (e, o) {
      game_ver = e && e.game_ver ? e.game_ver : 0, console.log(Y[27975]);var n = this;var t;t = (a = wx.getStorageSync(Y[27976])) ? 0 : (a = n.uuid(16, 32), wx.setStorageSync(Y[27976], a), 1), (e = wx.getStorageSync(Y[27977])) || (e = n.uuid(16, 32), wx.setStorageSync(Y[27977], e));var a = wx.getLaunchOptionsSync();e = a.scene || "";console.log(Y[27978]), console.log(a), t && a.query && a.query.ad_code && wx.setStorageSync(Y[27979], a.query.ad_code), a.query && a.query.from && "" != a.query.from ? (t && wx.setStorageSync(Y[27980], a.query.from), config.from = a.query.from) : (a = wx.getStorageSync(Y[27980])) || "" == a || (config.from = a), console.log(config.from), n.log(Y[1448], { install: t, scene: e }), wx.showShareMenu(), game_ver && this.checkGameVersion(game_ver, function (e) {
        o && o(e);
      });
    }, login: function (e, o) {
      console.log(Y[27981]);var t = this;r.login = Y[1102] == typeof o ? o : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var o, n;e.authSetting[Y[27982]] ? (console.log(Y[27983]), t.do_login()) : (console.log(Y[27984]), wx.hideLoading({}), e = 2 * (o = wx.getSystemInfoSync()).screenWidth / 3, o.screenHeight, (n = wx.createUserInfoButton({ type: Y[324], text: Y[27985], withCredentials: !1, style: { top: o.windowHeight / 2 + o.windowHeight / 4, left: o.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: Y[27986], color: Y[239], textAlign: Y[188], fontSize: 16, borderRadius: 4 } })).show(), n.onTap(e => {
            console.log(e), $mC8F5({ title: Y[27987] }), Y[27988] == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), n.destroy();
          }));
        }, fail: function () {
          console.log(Y[27989]), t.do_login();
        } }) : (console.log(Y[27990] + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var n = this;wx.login({ success: function (e) {
          var t;console.log(Y[27991] + JSON.stringify(e)), e.code ? ((t = n.getPublicData()).mo = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", config.is_auth ? wx.getUserInfo({ success: function (e) {
              var o = e.encryptedData;var n = e.iv;e = e.signature;t.encryptedData = o, t.iv = n, t.signature = e, wx.request({ url: HOST + Y[27992], method: Y[590], dataType: Y[1209], header: { "content-type": Y[725] }, data: t, success: function (e) {
                  if (console.log(Y[27993]), console.log(e), 200 == e.statusCode) {
                    var o = e.data;if (o.state) {
                      e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                        wx.setStorageSync(Y[27994], o.data.sdk_token), wx.setStorageSync(Y[27995], o.data.user_id), wx.setStorageSync(Y[27996], o.data.username), o.data.ext && wx.setStorageSync(Y[27997], o.data.ext);
                      } catch (e) {}r.login && r.login(0, e);
                    } else r.login && r.login(1, { errMsg: o.msg });
                  } else r.login && r.login(1, { errMsg: Y[27998] });
                }, fail: function (e) {
                  r.login && r.login(1, { errMsg: e.errMsg });
                } });
            }, fail: function (e) {
              r.login && r.login(1, { errMsg: e.errMsg });
            } }) : wx.request({ url: HOST + Y[27992], method: Y[590], dataType: Y[1209], header: { "content-type": Y[725] }, data: t, success: function (e) {
              if (console.log(Y[27993]), console.log(e), 200 == e.statusCode) {
                var o = e.data;if (o.state) {
                  e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                    wx.setStorageSync(Y[27994], o.data.sdk_token), wx.setStorageSync(Y[27995], o.data.user_id), wx.setStorageSync(Y[27996], o.data.username), o.data.ext && wx.setStorageSync(Y[27997], o.data.ext);
                  } catch (e) {}r.login && r.login(0, e);
                } else r.login && r.login(1, { errMsg: o.msg });
              } else r.login && r.login(1, { errMsg: Y[27999] });
            } })) : r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(Y[28000] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(Y[28001]) || -1 < e.errMsg.indexOf(Y[28002])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, checkGameVersion: function (e, n) {
      console.log(Y[28003]);wx.getStorageSync(Y[27994]);wx.request({ url: HOST + Y[28004], method: Y[590], dataType: Y[1209], header: { "content-type": Y[725] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var o;console.log(Y[28005]), console.log(e), 200 == e.statusCode && (o = e.data).state ? n && n(o.data) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, pay: function (e, o) {
      var n = this;wx.checkSession({ success: function () {
          n.startPay(e, o);
        }, fail: function () {
          console.log(Y[28006]), n.login({}, function () {
            n.startPay(e, o);
          });
        } });
    }, startPay: function (e, o) {
      console.log(Y[28007]), console.log(e);var n = this;r.pay = Y[1102] == typeof o ? o : null;var t = wx.getStorageSync(Y[27994]);o = wx.getStorageSync(Y[27997]);var a;t && o ? (a = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: o, platform: a.platform }, n.order_data = t, (o = n.getPublicData()).order_data = JSON.stringify(t), wx.request({ url: HOST + Y[28008], method: Y[590], dataType: Y[1209], header: { "content-type": Y[725] }, data: o, success: function (e) {
          console.log(Y[28009]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? Y[110] == a.platform || Y[113] == a.platform || Y[587] == a.platform ? e.data.is_android_pay ? n.kfPay(e.data) : n.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type && n.kfPay(e.data) : wx.showModal({ title: Y[28010], content: Y[28011], confirmText: Y[28012], showCancel: !1 }) : n.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: Y[28013] });
        } })) : r.pay && r.pay(1, { errMsg: Y[28014] });
    }, gamePay: function (o) {
      var n = this;o.buyQuantity <= o.balance ? (console.log(Y[28015]), wx.showModal({ title: Y[28010], content: Y[28016] + o.balance + Y[28017] + o.buyQuantity + Y[28018], showCancel: !1, confirmText: Y[28012], success: function () {
          n.gameGoPay(o);
        } })) : (console.log(Y[28019]), console.log(o), wx.requestMidasPayment({ mode: Y[28020], env: o.env, offerId: o.offerId, currencyType: o.currencyType, platform: o.platform, buyQuantity: o.buyQuantity, zoneId: o.zoneId, success: function (e) {
          Y[28021] == e.errMsg && n.gameGoPay(o);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(Y[28022]) ? r.pay && r.pay(2, { errMsg: Y[28023] }) : r.pay && r.pay(1, { errMsg: Y[28024] + e.errMsg + "(" + e.errCode + ")" });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      $mT5FC8 = e.orderId, wx.showModal({ title: Y[28010], content: Y[28025], showCancel: !1, confirmText: Y[28012], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: Y[28026], sendMessageImg: Y[28027] });
        } });
    }, gameGoPay: function (o, e) {
      console.log(Y[28028]);var n = this;var t = wx.getStorageSync(Y[27997]);wx.request({ url: HOST + Y[28029] + config.partner_id + "/" + config.game_pkg + "/", method: Y[590], dataType: Y[1209], header: { "content-type": Y[725] }, data: { order_id: o.orderId, time: o.time, sign: o.sign, session_key: t }, success: function (e) {
          console.log(Y[28030]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: n.order_data.cpbill, orderNo: o.orderId, amount: n.order_data.price, extension: n.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: Y[28031] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync(Y[27995]);var n = wx.getStorageSync(Y[27996]);var t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($mT5CF8 = { role_id: e.roleid, server_id: e.serverid }), this.log(Y[150], t);
    }, logEnterGame: function (e) {
      var o = wx.getStorageSync(Y[27995]);var n = wx.getStorageSync(Y[27996]);var t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($mT5CF8 = { role_id: e.roleid, server_id: e.serverid }), this.log(Y[6622], t);
    }, logRoleUpLevel: function (e) {
      var o = wx.getStorageSync(Y[27995]);var n = wx.getStorageSync(Y[27996]);var t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($mT5CF8 = { role_id: e.roleid, server_id: e.serverid }), this.log(Y[28032], t);
    }, uuid: function (e, o) {
      var n = Y[28033].split("");var t,
          a = [];var r;if (e = e || n.length, o) for (t = 0; t < o; t++) a[t] = n[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = n[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var o = wx.getStorageSync(Y[27976]);var n = wx.getStorageSync(Y[27977]);var t = wx.getStorageSync(Y[27979]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: o, idfv: n, dname: e.model, mac: Y[28034], net_type: 0 == e.wifiSignal ? "4G" : Y[28035], os_ver: e.system, sdk_ver: e.version, game_ver: game_ver, device: Y[110] == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, o) {
      var n = this.getPublicData();for (var t in o) n[t] = o[t];console.log(Y[28036] + e), console.log(n), wx.request({ url: HOST + Y[28037] + e + Y[28038] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.showModal({ title: Y[28039], content: Y[28040], showCancel: !1, confirmText: Y[28012], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: Y[28041], sendMessageImg: Y[28042] });
        } });
    }, checkMsg: function (e, o) {
      console.log(Y[28043]);var n = wx.getStorageSync(Y[27994]);wx.request({ url: HOST + Y[28044], method: Y[590], dataType: Y[1209], header: { "content-type": Y[725] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, content: e }, success: function (e) {
          console.log(Y[28045]), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    } };
}function run(e, o, n) {
  e in $mT85FC && $mT85FC[e](o, n);
}exports.init = function (e, o) {
  run(Y[444], e, o);
}, exports.login = function (e) {
  run(Y[621], "", e);
}, exports.pay = function (e, o) {
  run(Y[672], e, o);
}, exports.logCreateRole = function (e, o, n, t, a) {
  run(Y[680], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, o, n, t, a) {
  run(Y[682], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, o, n, t, a) {
  run(Y[684], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, exports.downloadClient = function () {
  run(Y[28046]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(Y[28047]);
}, exports.checkMsg = function (e, o) {
  run(Y[28048], e, o);
};