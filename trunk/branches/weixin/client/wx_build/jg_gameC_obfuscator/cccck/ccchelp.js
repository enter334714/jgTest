var p = wx.$h;
var config = { game_id: "2", game_pkg: p[27662], partner_id: "4", is_auth: !1, from: null };window.config = config;var $aQ1GNI = $aQGN1I();var HOST = p[27663];var $aQGIN1 = null;var $aQGNI1 = null;var game_ver = "";function $aQGN1I() {
  var a = {};return { order_data: {}, init: function (e, o) {
      game_ver = e && e.game_ver ? e.game_ver : 0, console.log(p[27664]);var t = this;var n;n = (r = wx.getStorageSync(p[27665])) ? 0 : (r = t.uuid(16, 32), wx.setStorageSync(p[27665], r), 1), (e = wx.getStorageSync(p[27666])) || (e = t.uuid(16, 32), wx.setStorageSync(p[27666], e));var r = wx.getLaunchOptionsSync();e = r.scene || "";console.log(p[27667]), console.log(r), n && r.query && r.query.ad_code && wx.setStorageSync(p[27668], r.query.ad_code), r.query && r.query.from && "" != r.query.from ? (n && wx.setStorageSync(p[27669], r.query.from), config.from = r.query.from) : (r = wx.getStorageSync(p[27669])) || "" == r || (config.from = r), console.log(config.from), t.log(p[284], { install: n, scene: e }), wx.showShareMenu(), game_ver && this.checkGameVersion(game_ver, function (e) {
        o && o(e);
      });
    }, login: function (e, o) {
      console.log(p[27670]);var n = this;a.login = p[26855] == typeof o ? o : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var o, t;e.authSetting[p[27671]] ? (console.log(p[27672]), n.do_login()) : (console.log(p[27673]), wx.hideLoading({}), e = 2 * (o = wx.getSystemInfoSync()).screenWidth / 3, o.screenHeight, (t = wx.createUserInfoButton({ type: p[4286], text: p[27674], withCredentials: !1, style: { top: o.windowHeight / 2 + o.windowHeight / 4, left: o.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: p[27675], color: p[4308], textAlign: p[1543], fontSize: 16, borderRadius: 4 } })).show(), t.onTap(e => {
            console.log(e), $aI1NG({ title: p[27676] }), p[27677] == e.errMsg ? n.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : n.do_login(), t.destroy();
          }));
        }, fail: function () {
          console.log(p[27678]), n.do_login();
        } }) : (console.log(p[27679] + config.is_auth), n.do_login());
    }, do_login: function (o) {
      var t = this;wx.login({ success: function (e) {
          var n;console.log(p[27680] + JSON.stringify(e)), e.code ? ((n = t.getPublicData()).mo = 1, n.code = e.code, n.nick_name = o ? o.nick_name : "", n.head_img = o ? o.head_img : "", config.is_auth ? wx.getUserInfo({ success: function (e) {
              var o = e.encryptedData;var t = e.iv;e = e.signature;n.encryptedData = o, n.iv = t, n.signature = e, wx.request({ url: HOST + p[27681], method: p[27331], dataType: p[5684], header: { "content-type": p[27436] }, data: n, success: function (e) {
                  if (console.log(p[27682]), console.log(e), 200 == e.statusCode) {
                    var o = e.data;if (o.state) {
                      e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                        wx.setStorageSync(p[27683], o.data.sdk_token), wx.setStorageSync(p[27684], o.data.user_id), wx.setStorageSync(p[27685], o.data.username), o.data.ext && wx.setStorageSync(p[27686], o.data.ext);
                      } catch (e) {}a.login && a.login(0, e);
                    } else a.login && a.login(1, { errMsg: o.msg });
                  } else a.login && a.login(1, { errMsg: p[27687] });
                }, fail: function (e) {
                  a.login && a.login(1, { errMsg: e.errMsg });
                } });
            }, fail: function (e) {
              a.login && a.login(1, { errMsg: e.errMsg });
            } }) : wx.request({ url: HOST + p[27681], method: p[27331], dataType: p[5684], header: { "content-type": p[27436] }, data: n, success: function (e) {
              if (console.log(p[27682]), console.log(e), 200 == e.statusCode) {
                var o = e.data;if (o.state) {
                  e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                    wx.setStorageSync(p[27683], o.data.sdk_token), wx.setStorageSync(p[27684], o.data.user_id), wx.setStorageSync(p[27685], o.data.username), o.data.ext && wx.setStorageSync(p[27686], o.data.ext);
                  } catch (e) {}a.login && a.login(0, e);
                } else a.login && a.login(1, { errMsg: o.msg });
              } else a.login && a.login(1, { errMsg: p[27688] });
            } })) : a.login && a.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(p[27689] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(p[27690]) || -1 < e.errMsg.indexOf(p[27691])) && a.login && a.login(1, { errMsg: e.errMsg });
        } });
    }, checkGameVersion: function (e, t) {
      console.log(p[27692]);wx.getStorageSync(p[27683]);wx.request({ url: HOST + p[27693], method: p[27331], dataType: p[5684], header: { "content-type": p[27436] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var o;console.log(p[27694]), console.log(e), 200 == e.statusCode && (o = e.data).state ? t && t(o.data) : t && t({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, pay: function (e, o) {
      var t = this;wx.checkSession({ success: function () {
          t.startPay(e, o);
        }, fail: function () {
          console.log(p[27695]), t.login({}, function () {
            t.startPay(e, o);
          });
        } });
    }, startPay: function (e, o) {
      console.log(p[27696]), console.log(e);var t = this;a.pay = p[26855] == typeof o ? o : null;var n = wx.getStorageSync(p[27683]);o = wx.getStorageSync(p[27686]);var r;n && o ? (r = wx.getSystemInfoSync(), n = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: o, platform: r.platform }, t.order_data = n, (o = t.getPublicData()).order_data = JSON.stringify(n), wx.request({ url: HOST + p[27697], method: p[27331], dataType: p[5684], header: { "content-type": p[27436] }, data: o, success: function (e) {
          console.log(p[27698]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? p[27252] == r.platform || p[27254] == r.platform || p[27329] == r.platform ? e.data.is_android_pay ? t.kfPay(e.data) : t.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type && t.kfPay(e.data) : wx.showModal({ title: p[27699], content: p[27700], confirmText: p[27701], showCancel: !1 }) : t.minPay(e.data) : a.pay && a.pay(1, { errMsg: e.msg }) : a.login && a.login(1, { errMsg: p[27702] });
        } })) : a.pay && a.pay(1, { errMsg: p[27703] });
    }, gamePay: function (o) {
      var t = this;o.buyQuantity <= o.balance ? (console.log(p[27704]), wx.showModal({ title: p[27699], content: p[27705] + o.balance + p[27706] + o.buyQuantity + p[27707], showCancel: !1, confirmText: p[27701], success: function () {
          t.gameGoPay(o);
        } })) : (console.log(p[27708]), console.log(o), wx.requestMidasPayment({ mode: p[27709], env: o.env, offerId: o.offerId, currencyType: o.currencyType, platform: o.platform, buyQuantity: o.buyQuantity, zoneId: o.zoneId, success: function (e) {
          p[27710] == e.errMsg && t.gameGoPay(o);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(p[27711]) ? a.pay && a.pay(2, { errMsg: p[27712] }) : a.pay && a.pay(1, { errMsg: p[27713] + e.errMsg + "(" + e.errCode + ")" });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      $aQGNI1 = e.orderId, wx.showModal({ title: p[27699], content: p[27714], showCancel: !1, confirmText: p[27701], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: p[27715], sendMessageImg: p[27716] });
        } });
    }, gameGoPay: function (o, e) {
      console.log(p[27717]);var t = this;var n = wx.getStorageSync(p[27686]);wx.request({ url: HOST + p[27718] + config.partner_id + "/" + config.game_pkg + "/", method: p[27331], dataType: p[5684], header: { "content-type": p[27436] }, data: { order_id: o.orderId, time: o.time, sign: o.sign, session_key: n }, success: function (e) {
          console.log(p[27719]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: t.order_data.cpbill, orderNo: o.orderId, amount: t.order_data.price, extension: t.order_data.extension }, a.pay && a.pay(0, e)) : a.pay && a.pay(1, { errMsg: p[27720] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync(p[27684]);var t = wx.getStorageSync(p[27685]);var n = {};n.user_id = o, n.user_name = t, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && ($aQGIN1 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[6], n);
    }, logEnterGame: function (e) {
      var o = wx.getStorageSync(p[27684]);var t = wx.getStorageSync(p[27685]);var n = {};n.user_id = o, n.user_name = t, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && ($aQGIN1 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[5565], n);
    }, logRoleUpLevel: function (e) {
      var o = wx.getStorageSync(p[27684]);var t = wx.getStorageSync(p[27685]);var n = {};n.user_id = o, n.user_name = t, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && ($aQGIN1 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[27721], n);
    }, uuid: function (e, o) {
      var t = p[27722].split("");var n,
          r = [];var a;if (e = e || t.length, o) for (n = 0; n < o; n++) r[n] = t[0 | Math.random() * e];else for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", n = 0; n < 36; n++) r[n] || (a = 0 | 16 * Math.random(), r[n] = t[19 == n ? 3 & a | 8 : a]);return r.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var o = wx.getStorageSync(p[27665]);var t = wx.getStorageSync(p[27666]);var n = wx.getStorageSync(p[27668]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: n, uuid: o, idfv: t, dname: e.model, mac: p[27723], net_type: 0 == e.wifiSignal ? "4G" : p[27724], os_ver: e.system, sdk_ver: e.version, game_ver: game_ver, device: p[27252] == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, o) {
      var t = this.getPublicData();for (var n in o) t[n] = o[n];console.log(p[27725] + e), console.log(t), wx.request({ url: HOST + p[27726] + e + p[27727] + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, checkMsg: function (e, o) {
      console.log(p[27728]);var t = wx.getStorageSync(p[27683]);wx.request({ url: HOST + p[27729], method: p[27331], dataType: p[5684], header: { "content-type": p[27436] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, content: e }, success: function (e) {
          console.log(p[27730]), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    } };
}function run(e, o, t) {
  e in $aQ1GNI && $aQ1GNI[e](o, t);
}exports.init = function (e, o) {
  run(p[364], e, o);
}, exports.login = function (e) {
  run(p[27357], "", e);
}, exports.pay = function (e, o) {
  run(p[27396], e, o);
}, exports.logCreateRole = function (e, o, t, n, r) {
  run(p[27403], { serverid: e, servername: o, roleid: t, rolename: n, rolelevel: r });
}, exports.logEnterGame = function (e, o, t, n, r) {
  run(p[27405], { serverid: e, servername: o, roleid: t, rolename: n, rolelevel: r });
}, exports.logRoleUpLevel = function (e, o, t, n, r) {
  run(p[27731], { serverid: e, servername: o, roleid: t, rolename: n, rolelevel: r });
}, exports.downloadClient = function () {
  run(p[27732]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[27733]);
}, exports.checkMsg = function (e, o) {
  run(p[27734], e, o);
};