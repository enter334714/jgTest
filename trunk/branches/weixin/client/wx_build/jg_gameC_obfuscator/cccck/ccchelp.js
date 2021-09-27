var p = wx.$h;
var config = { game_id: "2", game_pkg: p[87172], partner_id: "4", is_auth: !1, from: null };window.config = config;var $aOXZW8 = $aOZWX8();var HOST = p[87173];var $aOZ8WX = null;var $aOZW8X = null;var game_ver = "";function $aOZWX8() {
  var r = {};return { order_data: {}, init: function (e, o) {
      game_ver = e && e.game_ver ? e.game_ver : 0, console.log(p[87174]);var n = this;var a;a = (t = wx.getStorageSync(p[87175])) ? 0 : (t = n.uuid(16, 32), wx.setStorageSync(p[87175], t), 1), (e = wx.getStorageSync(p[87176])) || (e = n.uuid(16, 32), wx.setStorageSync(p[87176], e));var t = wx.getLaunchOptionsSync();e = t.scene || "";console.log(p[87177]), console.log(t), a && t.query && t.query.ad_code && wx.setStorageSync(p[87178], t.query.ad_code), t.query && t.query.from && "" != t.query.from ? (a && wx.setStorageSync(p[87179], t.query.from), config.from = t.query.from) : (t = wx.getStorageSync(p[87179])) || "" == t || (config.from = t), console.log(config.from), n.log(p[60284], { install: a, scene: e }), wx.showShareMenu(), game_ver && this.checkGameVersion(game_ver, function (e) {
        o && o(e);
      });
    }, login: function (e, o) {
      console.log(p[87180]);var a = this;r.login = p[86850] == typeof o ? o : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var o, n;e.authSetting[p[87181]] ? (console.log(p[87182]), a.do_login()) : (console.log(p[87183]), wx.hideLoading({}), e = 2 * (o = wx.getSystemInfoSync()).screenWidth / 3, o.screenHeight, (n = wx.createUserInfoButton({ type: p[64286], text: p[87184], withCredentials: !1, style: { top: o.windowHeight / 2 + o.windowHeight / 4, left: o.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: p[87185], color: p[64308], textAlign: p[61543], fontSize: 16, borderRadius: 4 } })).show(), n.onTap(e => {
            console.log(e), $a8XWZ({ title: p[87186] }), p[87187] == e.errMsg ? a.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : a.do_login(), n.destroy();
          }));
        }, fail: function () {
          console.log(p[87188]), a.do_login();
        } }) : (console.log(p[87189] + config.is_auth), a.do_login());
    }, do_login: function (o) {
      var n = this;wx.login({ success: function (e) {
          var a;console.log(p[87190] + JSON.stringify(e)), e.code ? ((a = n.getPublicData()).mo = 1, a.code = e.code, a.nick_name = o ? o.nick_name : "", a.head_img = o ? o.head_img : "", config.is_auth ? wx.getUserInfo({ success: function (e) {
              var o = e.encryptedData;var n = e.iv;e = e.signature;a.encryptedData = o, a.iv = n, a.signature = e, wx.request({ url: HOST + p[87191], method: p[87192], dataType: p[65684], header: { "content-type": p[87193] }, data: a, success: function (e) {
                  if (console.log(p[87194]), console.log(e), 200 == e.statusCode) {
                    var o = e.data;if (o.state) {
                      e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                        wx.setStorageSync(p[87195], o.data.sdk_token), wx.setStorageSync(p[87196], o.data.user_id), wx.setStorageSync(p[87197], o.data.username), o.data.ext && wx.setStorageSync(p[87198], o.data.ext);
                      } catch (e) {}r.login && r.login(0, e);
                    } else r.login && r.login(1, { errMsg: o.msg });
                  } else r.login && r.login(1, { errMsg: p[87199] });
                }, fail: function (e) {
                  r.login && r.login(1, { errMsg: e.errMsg });
                } });
            }, fail: function (e) {
              r.login && r.login(1, { errMsg: e.errMsg });
            } }) : wx.request({ url: HOST + p[87191], method: p[87192], dataType: p[65684], header: { "content-type": p[87193] }, data: a, success: function (e) {
              if (console.log(p[87194]), console.log(e), 200 == e.statusCode) {
                var o = e.data;if (o.state) {
                  e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                    wx.setStorageSync(p[87195], o.data.sdk_token), wx.setStorageSync(p[87196], o.data.user_id), wx.setStorageSync(p[87197], o.data.username), o.data.ext && wx.setStorageSync(p[87198], o.data.ext);
                  } catch (e) {}r.login && r.login(0, e);
                } else r.login && r.login(1, { errMsg: o.msg });
              } else r.login && r.login(1, { errMsg: p[87200] });
            } })) : r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(p[87201] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(p[87202]) || -1 < e.errMsg.indexOf(p[87203])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, checkGameVersion: function (e, n) {
      console.log(p[87204]);wx.getStorageSync(p[87195]);wx.request({ url: HOST + p[87205], method: p[87192], dataType: p[65684], header: { "content-type": p[87193] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var o;console.log(p[87206]), console.log(e), 200 == e.statusCode && (o = e.data).state ? n && n(o.data) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, pay: function (e, o) {
      var n = this;wx.checkSession({ success: function () {
          n.startPay(e, o);
        }, fail: function () {
          console.log(p[87207]), n.login({}, function () {
            n.startPay(e, o);
          });
        } });
    }, startPay: function (e, o) {
      console.log(p[87208]), console.log(e);var n = this;r.pay = p[86850] == typeof o ? o : null;var a = wx.getStorageSync(p[87195]);o = wx.getStorageSync(p[87198]);var t;a && o ? (t = wx.getSystemInfoSync(), a = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: a, session_key: o, platform: t.platform }, n.order_data = a, (o = n.getPublicData()).order_data = JSON.stringify(a), wx.request({ url: HOST + p[87209], method: p[87192], dataType: p[65684], header: { "content-type": p[87193] }, data: o, success: function (e) {
          console.log(p[87210]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? p[87211] == t.platform || p[87212] == t.platform || p[87213] == t.platform ? e.data.is_android_pay ? n.kfPay(e.data) : n.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type && n.kfPay(e.data) : wx.showModal({ title: p[87214], content: p[87215], confirmText: p[87216], showCancel: !1 }) : n.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: p[87217] });
        } })) : r.pay && r.pay(1, { errMsg: p[87218] });
    }, gamePay: function (o) {
      var n = this;o.buyQuantity <= o.balance ? (console.log(p[87219]), wx.showModal({ title: p[87214], content: p[87220] + o.balance + p[87221] + o.buyQuantity + p[87222], showCancel: !1, confirmText: p[87216], success: function () {
          n.gameGoPay(o);
        } })) : (console.log(p[87223]), console.log(o), wx.requestMidasPayment({ mode: p[87224], env: o.env, offerId: o.offerId, currencyType: o.currencyType, platform: o.platform, buyQuantity: o.buyQuantity, zoneId: o.zoneId, success: function (e) {
          p[87225] == e.errMsg && n.gameGoPay(o);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(p[87226]) ? r.pay && r.pay(2, { errMsg: p[87227] }) : r.pay && r.pay(1, { errMsg: p[87228] + e.errMsg + "(" + e.errCode + ")" });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      $aOZW8X = e.orderId, wx.showModal({ title: p[87214], content: p[87229], showCancel: !1, confirmText: p[87216], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: p[87230], sendMessageImg: p[87231] });
        } });
    }, gameGoPay: function (o, e) {
      console.log(p[87232]);var n = this;var a = wx.getStorageSync(p[87198]);wx.request({ url: HOST + p[87233] + config.partner_id + "/" + config.game_pkg + "/", method: p[87192], dataType: p[65684], header: { "content-type": p[87193] }, data: { order_id: o.orderId, time: o.time, sign: o.sign, session_key: a }, success: function (e) {
          console.log(p[87234]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: n.order_data.cpbill, orderNo: o.orderId, amount: n.order_data.price, extension: n.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: p[87235] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync(p[87196]);var n = wx.getStorageSync(p[87197]);var a = {};a.user_id = o, a.user_name = n, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($aOZ8WX = { role_id: e.roleid, server_id: e.serverid }), this.log(p[60006], a);
    }, logEnterGame: function (e) {
      var o = wx.getStorageSync(p[87196]);var n = wx.getStorageSync(p[87197]);var a = {};a.user_id = o, a.user_name = n, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($aOZ8WX = { role_id: e.roleid, server_id: e.serverid }), this.log(p[65565], a);
    }, logRoleUpLevel: function (e) {
      var o = wx.getStorageSync(p[87196]);var n = wx.getStorageSync(p[87197]);var a = {};a.user_id = o, a.user_name = n, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && ($aOZ8WX = { role_id: e.roleid, server_id: e.serverid }), this.log(p[87236], a);
    }, uuid: function (e, o) {
      var n = p[87237].split("");var a,
          t = [];var r;if (e = e || n.length, o) for (a = 0; a < o; a++) t[a] = n[0 | Math.random() * e];else for (t[8] = t[13] = t[18] = t[23] = "-", t[14] = "4", a = 0; a < 36; a++) t[a] || (r = 0 | 16 * Math.random(), t[a] = n[19 == a ? 3 & r | 8 : r]);return t.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var o = wx.getStorageSync(p[87175]);var n = wx.getStorageSync(p[87176]);var a = wx.getStorageSync(p[87178]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: a, uuid: o, idfv: n, dname: e.model, mac: p[87238], net_type: 0 == e.wifiSignal ? "4G" : p[87239], os_ver: e.system, sdk_ver: e.version, game_ver: game_ver, device: p[87211] == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, o) {
      var n = this.getPublicData();for (var a in o) n[a] = o[a];console.log(p[87240] + e), console.log(n), wx.request({ url: HOST + p[87241] + e + p[87242] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, checkMsg: function (e, o) {
      console.log(p[87243]);var n = wx.getStorageSync(p[87195]);wx.request({ url: HOST + p[87244], method: p[87192], dataType: p[65684], header: { "content-type": p[87193] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, content: e }, success: function (e) {
          console.log(p[87245]), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    } };
}function run(e, o, n) {
  e in $aOXZW8 && $aOXZW8[e](o, n);
}exports.init = function (e, o) {
  run(p[60364], e, o);
}, exports.login = function (e) {
  run(p[87246], "", e);
}, exports.pay = function (e, o) {
  run(p[87247], e, o);
}, exports.logCreateRole = function (e, o, n, a, t) {
  run(p[87248], { serverid: e, servername: o, roleid: n, rolename: a, rolelevel: t });
}, exports.logEnterGame = function (e, o, n, a, t) {
  run(p[87249], { serverid: e, servername: o, roleid: n, rolename: a, rolelevel: t });
}, exports.logRoleUpLevel = function (e, o, n, a, t) {
  run(p[87250], { serverid: e, servername: o, roleid: n, rolename: a, rolelevel: t });
}, exports.downloadClient = function () {
  run(p[87251]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[87252]);
}, exports.checkMsg = function (e, o) {
  run(p[87253], e, o);
};