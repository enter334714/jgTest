var p = wx.$h;
var config = { game_id: "2", game_pkg: p[73788], partner_id: "4", is_auth: !1, from: null };window.config = config;var $aOX1E0 = $aO1EX0();var HOST = p[73789];var $aO10EX = null;var $aO1E0X = null;var game_ver = "";function $aO1EX0() {
  var r = {};return { order_data: {}, init: function (e, o) {
      game_ver = e && e.game_ver ? e.game_ver : 0, console.log(p[73790]);var n = this;var a;a = (t = wx.getStorageSync(p[73791])) ? 0 : (t = n.uuid(16, 32), wx.setStorageSync(p[73791], t), 1), (e = wx.getStorageSync(p[73792])) || (e = n.uuid(16, 32), wx.setStorageSync(p[73792], e));var t = wx.getLaunchOptionsSync();e = t.scene || "";console.log(p[73793]), console.log(t), a && t.query && t.query.ad_code && wx.setStorageSync(p[73794], t.query.ad_code), t.query && t.query.from && "" != t.query.from ? (a && wx.setStorageSync(p[73795], t.query.from), config.from = t.query.from) : (t = wx.getStorageSync(p[73795])) || "" == t || (config.from = t), console.log(config.from), n.log(p[73796], { install: a, scene: e }), wx.showShareMenu(), game_ver && this.checkGameVersion(game_ver, function (e) {
        o && o(e);
      });
    }, login: function (e, o) {
      console.log(p[73797]);var a = this;r.login = p[73747] == typeof o ? o : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var o, n;e.authSetting[p[73798]] ? (console.log(p[73799]), a.do_login()) : (console.log(p[73800]), wx.hideLoading({}), e = 2 * (o = wx.getSystemInfoSync()).screenWidth / 3, o.screenHeight, (n = wx.createUserInfoButton({ type: p[72357], text: p[73801], withCredentials: !1, style: { top: o.windowHeight / 2 + o.windowHeight / 4, left: o.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: p[73802], color: p[62909], textAlign: p[60556], fontSize: 16, borderRadius: 4 } })).show(), n.onTap(e => {
            console.log(e), $a0XE1({ title: p[73803] }), p[73804] == e.errMsg ? a.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : a.do_login(), n.destroy();
          }));
        }, fail: function () {
          console.log(p[73805]), a.do_login();
        } }) : (console.log(p[73806] + config.is_auth), a.do_login());
    }, do_login: function (o) {
      var n = this;wx.login({ success: function (e) {
          var a;console.log(p[73807] + JSON.stringify(e)), e.code ? ((a = n.getPublicData()).mo = 1, a.code = e.code, a.nick_name = o ? o.nick_name : "", a.head_img = o ? o.head_img : "", config.is_auth ? wx.getUserInfo({ success: function (e) {
              var o = e.encryptedData;var n = e.iv;e = e.signature;a.encryptedData = o, a.iv = n, a.signature = e, wx.request({ url: HOST + p[73808], method: p[73809], dataType: p[73810], header: { "content-type": p[73811] }, data: a, success: function (e) {
                  if (console.log(p[73812]), console.log(e), 200 == e.statusCode) {
                    var o = e.data;if (o.state) {
                      e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                        wx.setStorageSync(p[73813], o.data.sdk_token), wx.setStorageSync(p[73814], o.data.user_id), wx.setStorageSync(p[73815], o.data.username), o.data.ext && wx.setStorageSync(p[73816], o.data.ext);
                      } catch (e) {}r.login && r.login(0, e);
                    } else r.login && r.login(1, { errMsg: o.msg });
                  } else r.login && r.login(1, { errMsg: p[73817] });
                }, fail: function (e) {
                  r.login && r.login(1, { errMsg: e.errMsg });
                } });
            }, fail: function (e) {
              r.login && r.login(1, { errMsg: e.errMsg });
            } }) : wx.request({ url: HOST + p[73808], method: p[73809], dataType: p[73810], header: { "content-type": p[73811] }, data: a, success: function (e) {
              if (console.log(p[73812]), console.log(e), 200 == e.statusCode) {
                var o = e.data;if (o.state) {
                  e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                    wx.setStorageSync(p[73813], o.data.sdk_token), wx.setStorageSync(p[73814], o.data.user_id), wx.setStorageSync(p[73815], o.data.username), o.data.ext && wx.setStorageSync(p[73816], o.data.ext);
                  } catch (e) {}r.login && r.login(0, e);
                } else r.login && r.login(1, { errMsg: o.msg });
              } else r.login && r.login(1, { errMsg: p[73818] });
            } })) : r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(p[73819] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(p[73820]) || -1 < e.errMsg.indexOf(p[73821])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, checkGameVersion: function (e, n) {
      console.log(p[73822]);wx.getStorageSync(p[73813]);wx.request({ url: HOST + p[73823], method: p[73809], dataType: p[73810], header: { "content-type": p[73811] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var o;console.log(p[73824]), console.log(e), 200 == e.statusCode && (o = e.data).state ? n && n(o.data) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, pay: function (e, o) {
      var n = this;wx.checkSession({ success: function () {
          n.startPay(e, o);
        }, fail: function () {
          console.log(p[73825]), n.login({}, function () {
            n.startPay(e, o);
          });
        } });
    }, startPay: function (e, o) {
      console.log(p[73826]), console.log(e);var n = this;r.pay = p[73747] == typeof o ? o : null;var a = wx.getStorageSync(p[73813]);o = wx.getStorageSync(p[73816]);var t;a && o ? (t = wx.getSystemInfoSync(), a = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: a, session_key: o, platform: t.platform }, n.order_data = a, (o = n.getPublicData()).order_data = JSON.stringify(a), wx.request({ url: HOST + p[73827], method: p[73809], dataType: p[73810], header: { "content-type": p[73811] }, data: o, success: function (e) {
          console.log(p[73828]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? p[73829] == t.platform || p[73830] == t.platform || p[73831] == t.platform ? e.data.is_android_pay ? n.kfPay(e.data) : n.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type && n.kfPay(e.data) : wx.showModal({ title: p[73832], content: p[73833], confirmText: p[73834], showCancel: !1 }) : n.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: p[73835] });
        } })) : r.pay && r.pay(1, { errMsg: p[73836] });
    }, gamePay: function (o) {
      var n = this;o.buyQuantity <= o.balance ? (console.log(p[73837]), wx.showModal({ title: p[73832], content: p[73838] + o.balance + p[73839] + o.buyQuantity + p[73840], showCancel: !1, confirmText: p[73834], success: function () {
          n.gameGoPay(o);
        } })) : (console.log(p[73841]), console.log(o), wx.requestMidasPayment({ mode: p[73842], env: o.env, offerId: o.offerId, currencyType: o.currencyType, platform: o.platform, buyQuantity: o.buyQuantity, zoneId: o.zoneId, success: function (e) {
          p[73843] == e.errMsg && n.gameGoPay(o);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(p[73844]) ? r.pay && r.pay(2, { errMsg: p[73845] }) : r.pay && r.pay(1, { errMsg: p[73846] + e.errMsg + "(" + e.errCode + ")" });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      $aO1E0X = e.orderId, wx.showModal({ title: p[73832], content: p[73847], showCancel: !1, confirmText: p[73834], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: p[73848], sendMessageImg: p[73849] });
        } });
    }, gameGoPay: function (o, e) {
      console.log(p[73850]);var n = this;var a = wx.getStorageSync(p[73816]);wx.request({ url: HOST + p[73851] + config.partner_id + "/" + config.game_pkg + "/", method: p[73809], dataType: p[73810], header: { "content-type": p[73811] }, data: { order_id: o.orderId, time: o.time, sign: o.sign, session_key: a }, success: function (e) {
          console.log(p[73852]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: n.order_data.cpbill, orderNo: o.orderId, amount: n.order_data.price, extension: n.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: p[73853] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync(p[73814]);var n = wx.getStorageSync(p[73815]);var a = {};a.user_id = o, a.user_name = n, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($aO10EX = { role_id: e.roleid, server_id: e.serverid }), this.log(p[60044], a);
    }, logEnterGame: function (e) {
      var o = wx.getStorageSync(p[73814]);var n = wx.getStorageSync(p[73815]);var a = {};a.user_id = o, a.user_name = n, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($aO10EX = { role_id: e.roleid, server_id: e.serverid }), this.log(p[73854], a);
    }, logRoleUpLevel: function (e) {
      var o = wx.getStorageSync(p[73814]);var n = wx.getStorageSync(p[73815]);var a = {};a.user_id = o, a.user_name = n, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($aO10EX = { role_id: e.roleid, server_id: e.serverid }), this.log(p[73855], a);
    }, uuid: function (e, o) {
      var n = p[73856].split("");var a,
          t = [];var r;if (e = e || n.length, o) for (a = 0; a < o; a++) t[a] = n[0 | Math.random() * e];else for (t[8] = t[13] = t[18] = t[23] = "-", t[14] = "4", a = 0; a < 36; a++) t[a] || (r = 0 | 16 * Math.random(), t[a] = n[19 == a ? 3 & r | 8 : r]);return t.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var o = wx.getStorageSync(p[73791]);var n = wx.getStorageSync(p[73792]);var a = wx.getStorageSync(p[73794]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: a, uuid: o, idfv: n, dname: e.model, mac: p[73857], net_type: 0 == e.wifiSignal ? "4G" : p[73858], os_ver: e.system, sdk_ver: e.version, game_ver: game_ver, device: p[73829] == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, o) {
      var n = this.getPublicData();for (var a in o) n[a] = o[a];console.log(p[73859] + e), console.log(n), wx.request({ url: HOST + p[73860] + e + p[73861] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, checkMsg: function (e, o) {
      console.log(p[73862]);var n = wx.getStorageSync(p[73813]);wx.request({ url: HOST + p[73863], method: p[73809], dataType: p[73810], header: { "content-type": p[73811] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, content: e }, success: function (e) {
          console.log(p[73864]), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    } };
}function run(e, o, n) {
  e in $aOX1E0 && $aOX1E0[e](o, n);
}exports.init = function (e, o) {
  run(p[71868], e, o);
}, exports.login = function (e) {
  run(p[73865], "", e);
}, exports.pay = function (e, o) {
  run(p[73866], e, o);
}, exports.logCreateRole = function (e, o, n, a, t) {
  run(p[73867], { serverid: e, servername: o, roleid: n, rolename: a, rolelevel: t });
}, exports.logEnterGame = function (e, o, n, a, t) {
  run(p[73868], { serverid: e, servername: o, roleid: n, rolename: a, rolelevel: t });
}, exports.logRoleUpLevel = function (e, o, n, a, t) {
  run(p[73869], { serverid: e, servername: o, roleid: n, rolename: a, rolelevel: t });
}, exports.downloadClient = function () {
  run(p[73870]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[73871]);
}, exports.checkMsg = function (e, o) {
  run(p[73872], e, o);
};