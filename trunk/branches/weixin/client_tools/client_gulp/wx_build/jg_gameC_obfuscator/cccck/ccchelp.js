var p = wx.$h;
var config = { game_id: "2", game_pkg: p[87400], partner_id: "4", is_auth: !1, from: null };window.config = config;var $aK7UOT = $aKUO7T();var HOST = p[87401];var $aKUTO7 = null;var $aKUOT7 = null;var game_ver = "";function $aKUO7T() {
  var r = {};return { order_data: {}, init: function (e, o) {
      game_ver = e && e.game_ver ? e.game_ver : 0, console.log(p[87402]);var n = this;var t;t = (a = wx.getStorageSync(p[87403])) ? 0 : (a = n.uuid(16, 32), wx.setStorageSync(p[87403], a), 1), (e = wx.getStorageSync(p[87404])) || (e = n.uuid(16, 32), wx.setStorageSync(p[87404], e));var a = wx.getLaunchOptionsSync();e = a.scene || "";console.log(p[87405]), console.log(a), t && a.query && a.query.ad_code && wx.setStorageSync(p[87406], a.query.ad_code), a.query && a.query.from && "" != a.query.from ? (t && wx.setStorageSync(p[87407], a.query.from), config.from = a.query.from) : (a = wx.getStorageSync(p[87407])) || "" == a || (config.from = a), console.log(config.from), n.log(p[60284], { install: t, scene: e }), wx.showShareMenu(), game_ver && this.checkGameVersion(game_ver, function (e) {
        o && o(e);
      });
    }, login: function (e, o) {
      console.log(p[87408]);var t = this;r.login = p[87076] == typeof o ? o : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var o, n;e.authSetting[p[87409]] ? (console.log(p[87410]), t.do_login()) : (console.log(p[87411]), wx.hideLoading({}), e = 2 * (o = wx.getSystemInfoSync()).screenWidth / 3, o.screenHeight, (n = wx.createUserInfoButton({ type: p[64294], text: p[87412], withCredentials: !1, style: { top: o.windowHeight / 2 + o.windowHeight / 4, left: o.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: p[87413], color: p[64316], textAlign: p[61546], fontSize: 16, borderRadius: 4 } })).show(), n.onTap(e => {
            console.log(e), $aT7OU({ title: p[87414] }), p[87415] == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), n.destroy();
          }));
        }, fail: function () {
          console.log(p[87416]), t.do_login();
        } }) : (console.log(p[87417] + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var n = this;wx.login({ success: function (e) {
          var t;console.log(p[87418] + JSON.stringify(e)), e.code ? ((t = n.getPublicData()).mo = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", config.is_auth ? wx.getUserInfo({ success: function (e) {
              var o = e.encryptedData;var n = e.iv;e = e.signature;t.encryptedData = o, t.iv = n, t.signature = e, wx.request({ url: HOST + p[87419], method: p[87420], dataType: p[65696], header: { "content-type": p[87421] }, data: t, success: function (e) {
                  if (console.log(p[87422]), console.log(e), 200 == e.statusCode) {
                    var o = e.data;if (o.state) {
                      e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                        wx.setStorageSync(p[87423], o.data.sdk_token), wx.setStorageSync(p[87424], o.data.user_id), wx.setStorageSync(p[87425], o.data.username), o.data.ext && wx.setStorageSync(p[87426], o.data.ext);
                      } catch (e) {}r.login && r.login(0, e);
                    } else r.login && r.login(1, { errMsg: o.msg });
                  } else r.login && r.login(1, { errMsg: p[87427] });
                }, fail: function (e) {
                  r.login && r.login(1, { errMsg: e.errMsg });
                } });
            }, fail: function (e) {
              r.login && r.login(1, { errMsg: e.errMsg });
            } }) : wx.request({ url: HOST + p[87419], method: p[87420], dataType: p[65696], header: { "content-type": p[87421] }, data: t, success: function (e) {
              if (console.log(p[87422]), console.log(e), 200 == e.statusCode) {
                var o = e.data;if (o.state) {
                  e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                    wx.setStorageSync(p[87423], o.data.sdk_token), wx.setStorageSync(p[87424], o.data.user_id), wx.setStorageSync(p[87425], o.data.username), o.data.ext && wx.setStorageSync(p[87426], o.data.ext);
                  } catch (e) {}r.login && r.login(0, e);
                } else r.login && r.login(1, { errMsg: o.msg });
              } else r.login && r.login(1, { errMsg: p[87428] });
            } })) : r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(p[87429] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(p[87430]) || -1 < e.errMsg.indexOf(p[87431])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, checkGameVersion: function (e, n) {
      console.log(p[87432]);wx.getStorageSync(p[87423]);wx.request({ url: HOST + p[87433], method: p[87420], dataType: p[65696], header: { "content-type": p[87421] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var o;console.log(p[87434]), console.log(e), 200 == e.statusCode && (o = e.data).state ? n && n(o.data) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, pay: function (e, o) {
      var n = this;wx.checkSession({ success: function () {
          n.startPay(e, o);
        }, fail: function () {
          console.log(p[87435]), n.login({}, function () {
            n.startPay(e, o);
          });
        } });
    }, startPay: function (e, o) {
      console.log(p[87436]), console.log(e);var n = this;r.pay = p[87076] == typeof o ? o : null;var t = wx.getStorageSync(p[87423]);o = wx.getStorageSync(p[87426]);var a;t && o ? (a = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: o, platform: a.platform }, n.order_data = t, (o = n.getPublicData()).order_data = JSON.stringify(t), wx.request({ url: HOST + p[87437], method: p[87420], dataType: p[65696], header: { "content-type": p[87421] }, data: o, success: function (e) {
          console.log(p[87438]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? p[87439] == a.platform || p[87440] == a.platform || p[87441] == a.platform ? e.data.is_android_pay ? n.kfPay(e.data) : n.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type && n.kfPay(e.data) : wx.showModal({ title: p[87442], content: p[87443], confirmText: p[87444], showCancel: !1 }) : n.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: p[87445] });
        } })) : r.pay && r.pay(1, { errMsg: p[87446] });
    }, gamePay: function (o) {
      var n = this;o.buyQuantity <= o.balance ? (console.log(p[87447]), wx.showModal({ title: p[87442], content: p[87448] + o.balance + p[87449] + o.buyQuantity + p[87450], showCancel: !1, confirmText: p[87444], success: function () {
          n.gameGoPay(o);
        } })) : (console.log(p[87451]), console.log(o), wx.requestMidasPayment({ mode: p[87452], env: o.env, offerId: o.offerId, currencyType: o.currencyType, platform: o.platform, buyQuantity: o.buyQuantity, zoneId: o.zoneId, success: function (e) {
          p[87453] == e.errMsg && n.gameGoPay(o);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(p[87454]) ? r.pay && r.pay(2, { errMsg: p[87455] }) : r.pay && r.pay(1, { errMsg: p[87456] + e.errMsg + "(" + e.errCode + ")" });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      $aKUOT7 = e.orderId, wx.showModal({ title: p[87442], content: p[87457], showCancel: !1, confirmText: p[87444], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: p[87458], sendMessageImg: p[87459] });
        } });
    }, gameGoPay: function (o, e) {
      console.log(p[87460]);var n = this;var t = wx.getStorageSync(p[87426]);wx.request({ url: HOST + p[87461] + config.partner_id + "/" + config.game_pkg + "/", method: p[87420], dataType: p[65696], header: { "content-type": p[87421] }, data: { order_id: o.orderId, time: o.time, sign: o.sign, session_key: t }, success: function (e) {
          console.log(p[87462]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: n.order_data.cpbill, orderNo: o.orderId, amount: n.order_data.price, extension: n.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: p[87463] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync(p[87424]);var n = wx.getStorageSync(p[87425]);var t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aKUTO7 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[60006], t);
    }, logEnterGame: function (e) {
      var o = wx.getStorageSync(p[87424]);var n = wx.getStorageSync(p[87425]);var t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aKUTO7 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[65577], t);
    }, logRoleUpLevel: function (e) {
      var o = wx.getStorageSync(p[87424]);var n = wx.getStorageSync(p[87425]);var t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aKUTO7 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[87464], t);
    }, uuid: function (e, o) {
      var n = p[87465].split("");var t,
          a = [];var r;if (e = e || n.length, o) for (t = 0; t < o; t++) a[t] = n[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = n[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var o = wx.getStorageSync(p[87403]);var n = wx.getStorageSync(p[87404]);var t = wx.getStorageSync(p[87406]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: o, idfv: n, dname: e.model, mac: p[87466], net_type: 0 == e.wifiSignal ? "4G" : p[87467], os_ver: e.system, sdk_ver: e.version, game_ver: game_ver, device: p[87439] == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, o) {
      var n = this.getPublicData();for (var t in o) n[t] = o[t];console.log(p[87468] + e), console.log(n), wx.request({ url: HOST + p[87469] + e + p[87470] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.showModal({ title: p[87471], content: p[87472], showCancel: !1, confirmText: p[87444], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: p[87473], sendMessageImg: p[87474] });
        } });
    }, checkMsg: function (e, o) {
      console.log(p[87475]);var n = wx.getStorageSync(p[87423]);wx.request({ url: HOST + p[87476], method: p[87420], dataType: p[65696], header: { "content-type": p[87421] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, content: e }, success: function (e) {
          console.log(p[87477]), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    } };
}function run(e, o, n) {
  e in $aK7UOT && $aK7UOT[e](o, n);
}exports.init = function (e, o) {
  run(p[60364], e, o);
}, exports.login = function (e) {
  run(p[87478], "", e);
}, exports.pay = function (e, o) {
  run(p[87479], e, o);
}, exports.logCreateRole = function (e, o, n, t, a) {
  run(p[87480], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, o, n, t, a) {
  run(p[87481], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, o, n, t, a) {
  run(p[87482], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, exports.downloadClient = function () {
  run(p[87483]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[87484]);
}, exports.checkMsg = function (e, o) {
  run(p[87485], e, o);
};