var H = wx.$F;
let config = { game_id: H[11644], game_pkg: H[14468], partner_id: "4", is_auth: !1, from: null };window.config = config;let f1K$2AI = f1K2IA$(),
    HOST = H[14469],
    f1K$2IA = null,
    f1K2A$I = null,
    game_ver = "";function f1K2IA$() {
  var e = {};return { order_data: {}, init: function (e, o) {
      game_ver = e && e.game_ver ? e.game_ver : 0, console.log(H[14470]);var n,
          t = wx.getStorageSync(H[14471]);t ? n = 0 : (t = this.uuid(16, 32), wx.setStorageSync(H[14471], t), n = 1);var a = wx.getStorageSync(H[14472]);a || (a = this.uuid(16, 32), wx.setStorageSync(H[14472], a));var r = wx.getLaunchOptionsSync(),
          i = r.scene ? r.scene : "";if (console.log(H[14473]), console.log(r), n && r.query && r.query.ad_code && wx.setStorageSync(H[14474], r.query.ad_code), r.query && r.query.from && "" != r.query.from) n && wx.setStorageSync(H[14475], r.query.from), config.from = r.query.from;else {
        var s = wx.getStorageSync(H[14475]);s || "" == s || (config.from = s);
      }console.log(config.from);var l = { install: n, scene: i };this.log(H[987], l), wx.showShareMenu(), game_ver && this.checkGameVersion(game_ver, function (e) {
        o && o(e);
      });
    }, login: function (o, n) {
      console.log(H[14476]);var t = this;e.login = H[704] == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          if (e.authSetting[H[14477]]) console.log(H[14478]), t.do_login();else {
            console.log(H[14479]), wx.hideLoading({});var o = wx.getSystemInfoSync(),
                n = (o.screenWidth, o.screenHeight, wx.createUserInfoButton({ type: H[1000], text: H[14480], withCredentials: !1, style: { top: o.windowHeight / 2 + o.windowHeight / 4, left: o.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: H[14481], color: H[1735], textAlign: H[921], fontSize: 16, borderRadius: 4 } }));n.show(), n.onTap(e => {
              console.log(e), f1A$I2({ title: H[14482] }), H[14483] == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), n.destroy();
            });
          }
        }, fail: function () {
          console.log(H[14484]), t.do_login();
        } }) : (console.log(H[14485] + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var n = this;wx.login({ success: function (t) {
          if (console.log(H[14486] + JSON.stringify(t)), t.code) {
            var a = n.getPublicData();a.mo = 1, a.code = t.code, a.nick_name = o ? o.nick_name : "", a.head_img = o ? o.head_img : "", config.is_auth ? wx.getUserInfo({ success: function (o) {
                var n = o.encryptedData,
                    t = o.iv,
                    r = o.signature;a.encryptedData = n, a.iv = t, a.signature = r, wx.request({ url: HOST + H[14487], method: H[7038], dataType: H[7030], header: { "content-type": H[14488] }, data: a, success: function (o) {
                    if (console.log(H[14489]), console.log(o), 200 == o.statusCode) {
                      var n = o.data;if (n.state) {
                        var t = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token };try {
                          wx.setStorageSync(H[14490], n.data.sdk_token), wx.setStorageSync(H[14491], n.data.user_id), wx.setStorageSync(H[14492], n.data.username), wx.setStorageSync(H[14493], n.data.openid), n.data.ext && wx.setStorageSync(H[14494], n.data.ext);
                        } catch (e) {}e.login && e.login(0, t);
                      } else e.login && e.login(1, { errMsg: n.msg });
                    } else e.login && e.login(1, { errMsg: H[14495] });
                  }, fail: function (o) {
                    e.login && e.login(1, { errMsg: o.errMsg });
                  } });
              }, fail: function (o) {
                e.login && e.login(1, { errMsg: o.errMsg });
              } }) : wx.request({ url: HOST + H[14487], method: H[7038], dataType: H[7030], header: { "content-type": H[14488] }, data: a, success: function (o) {
                if (console.log(H[14489]), console.log(o), 200 == o.statusCode) {
                  var n = o.data;if (n.state) {
                    var t = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token };try {
                      wx.setStorageSync(H[14490], n.data.sdk_token), wx.setStorageSync(H[14491], n.data.user_id), wx.setStorageSync(H[14492], n.data.username), wx.setStorageSync(H[14493], n.data.openid), n.data.ext && wx.setStorageSync(H[14494], n.data.ext);
                    } catch (e) {}e.login && e.login(0, t);
                  } else e.login && e.login(1, { errMsg: n.msg });
                } else e.login && e.login(1, { errMsg: H[14496] });
              } });
          } else e.login && e.login(1, { errMsg: t.errMsg });
        }, fail: function (o) {
          console.log(H[14497] + JSON.stringify(o)), (o.errMsg.indexOf(H[14498]) > -1 || o.errMsg.indexOf(H[14499]) > -1) && e.login && e.login(1, { errMsg: o.errMsg });
        } });
    }, checkGameVersion: function (e, o) {
      console.log(H[14500]);wx.getStorageSync(H[14490]);wx.request({ url: HOST + H[14501], method: H[7038], dataType: H[7030], header: { "content-type": H[14488] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          if (console.log(H[14502]), console.log(e), 200 == e.statusCode) {
            var n = e.data;n.state ? o && o(n.data) : o && o({ develop: 0 });
          } else o && o({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, pay: function (e, o) {
      var n = this;wx.checkSession({ success: function () {
          n.startPay(e, o);
        }, fail: function () {
          console.log(H[14503]), n.login({}, function () {
            n.startPay(e, o);
          });
        } });
    }, startPay: function (o, n) {
      console.log(H[14504]), console.log(o);var t = this;e.pay = H[704] == typeof n ? n : null, 0;var a = wx.getStorageSync(H[14490]),
          r = wx.getStorageSync(H[14494]);if (a && r) {
        var i = wx.getSystemInfoSync(),
            s = { cpbill: o.cpbill, productid: o.productid, productname: o.productname, productdesc: o.productdesc, serverid: o.serverid, servername: o.servername, roleid: o.roleid, rolename: o.rolename, rolelevel: o.rolelevel, price: o.price, extension: o.extension, sdk_token: a, session_key: r, platform: i.platform };t.order_data = s;var l = t.getPublicData();l.order_data = JSON.stringify(s), wx.request({ url: HOST + H[14505], method: H[7038], dataType: H[7030], header: { "content-type": H[14488] }, data: l, success: function (o) {
            if (console.log(H[14506]), console.log(o), 200 == o.statusCode) {
              var n = o.data;n.state ? void 0 === wx.requestPayment ? H[7022] == i.platform || H[14507] == i.platform || H[14508] == i.platform ? n.data.is_android_pay ? t.kfPay(n.data) : t.gamePay(n.data) : n.data.is_ios_pay ? 1 == n.data.ios_pay_type && t.kfPay(n.data) : wx.showModal({ title: H[14509], content: H[14510], confirmText: H[14511], showCancel: !1 }) : t.minPay(n.data) : e.pay && e.pay(1, { errMsg: n.msg });
            } else e.login && e.login(1, { errMsg: H[14512] });
          } });
      } else e.pay && e.pay(1, { errMsg: H[14513] });
    }, gamePay: function (o) {
      var n = this;o.buyQuantity <= o.balance ? (console.log(H[14514]), wx.showModal({ title: H[14509], content: H[14515] + o.balance + H[14516] + o.buyQuantity + H[14517], showCancel: !1, confirmText: H[14511], success: function () {
          n.gameGoPay(o);
        } })) : (console.log(H[14518]), console.log(o), wx.requestMidasPayment({ mode: H[6160], env: o.env, offerId: o.offerId, currencyType: o.currencyType, platform: o.platform, buyQuantity: o.buyQuantity, zoneId: o.zoneId, success: function (e) {
          H[14519] == e.errMsg && n.gameGoPay(o);
        }, fail: function (o) {
          -1 !== o.errMsg.indexOf(H[14520]) ? e.pay && e.pay(2, { errMsg: H[14521] }) : e.pay && e.pay(1, { errMsg: H[14522] + o.errMsg + "(" + o.errCode + ")" });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      f1K2A$I = e.orderId, wx.showModal({ title: H[14509], content: H[14523], showCancel: !1, confirmText: H[14511], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: H[14524], sendMessageImg: H[14525] });
        } });
    }, gameGoPay: function (o, n) {
      console.log(H[14526]);var t = this,
          a = wx.getStorageSync(H[14494]);wx.request({ url: HOST + H[14527] + config.partner_id + "/" + config.game_pkg + "/", method: H[7038], dataType: H[7030], header: { "content-type": H[14488] }, data: { order_id: o.orderId, time: o.time, sign: o.sign, session_key: a }, success: function (n) {
          if (console.log(H[14528]), console.log(n), 200 == n.statusCode) if (1 == n.data.state) {
            var a = { cpOrderNo: t.order_data.cpbill, orderNo: o.orderId, amount: t.order_data.price, extension: t.order_data.extension };e.pay && e.pay(0, a);
          } else e.pay && e.pay(1, { errMsg: H[14529] });
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync(H[14491]),
          n = wx.getStorageSync(H[14492]),
          t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (f1K$2IA = { role_id: e.roleid, server_id: e.serverid }), this.log(H[7434], t);
    }, logEnterGame: function (e) {
      var o = wx.getStorageSync(H[14491]),
          n = wx.getStorageSync(H[14492]),
          t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (f1K$2IA = { role_id: e.roleid, server_id: e.serverid }), this.log(H[13080], t);
    }, logRoleUpLevel: function (e) {
      var o = wx.getStorageSync(H[14491]),
          n = wx.getStorageSync(H[14492]),
          t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (f1K$2IA = { role_id: e.roleid, server_id: e.serverid }), this.log(H[14530], t);
    }, uuid: function (e, o) {
      var n,
          t,
          a = H[14531].split(""),
          r = [];if (e = e || a.length, o) for (n = 0; n < o; n++) r[n] = a[0 | Math.random() * e];else for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", n = 0; n < 36; n++) r[n] || (t = 0 | 16 * Math.random(), r[n] = a[19 == n ? 3 & t | 8 : t]);return r.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync(),
          o = wx.getStorageSync(H[14471]),
          n = wx.getStorageSync(H[14472]),
          t = wx.getStorageSync(H[14474]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: o, idfv: n, dname: e.model, mac: H[14532], net_type: 0 == e.wifiSignal ? H[14533] : H[14534], os_ver: e.system, sdk_ver: e.version, game_ver: game_ver, device: H[7022] == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, o) {
      var n = this.getPublicData();for (var t in o) n[t] = o[t];console.log(H[14535] + e), console.log(n), wx.request({ url: HOST + H[14536] + e + H[14537] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      var e = H[14538] + wx.getStorageSync(H[14493]);wx.showModal({ title: H[14539], content: H[14540], showCancel: !1, confirmText: H[14511], success: function () {
          var o = { showMessageCard: !0, sendMessageTitle: e, sendMessageImg: H[14541] };wx.openCustomerServiceConversation(o);
        } });
    }, checkMsg: function (e, o) {
      console.log(H[14542]);var n = wx.getStorageSync(H[14490]);wx.request({ url: HOST + H[14543], method: H[7038], dataType: H[7030], header: { "content-type": H[14488] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, content: e }, success: function (e) {
          console.log(H[14544]), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    }, checkMsgV2: function (e, o) {
      console.log(H[14542]);var n = wx.getStorageSync(H[14490]);wx.request({ url: HOST + H[14545], method: H[7038], dataType: H[7030], header: { "content-type": H[14488] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, content: e, scene: 1 }, success: function (e) {
          console.log(H[14544]), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    }, sendMessage: function (e, o, n) {
      console.log(H[14546]);var t = wx.getStorageSync(H[14490]);wx.request({ url: HOST + H[14547], method: H[7038], dataType: H[7030], header: { "content-type": H[14488] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, template_id: e, data: o }, success: function (e) {
          console.log(H[14548]), n && n(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    } };
}function run(e, o, n) {
  e in f1K$2AI && f1K$2AI[e](o, n);
}const tempobj = {};window.cwan = tempobj, tempobj.init = function (e, o) {
  run(H[5700], e, o);
}, tempobj.login = function (e) {
  run(H[5704], "", e);
}, tempobj.pay = function (e, o) {
  run(H[11437], e, o);
}, tempobj.logCreateRole = function (e, o, n, t, a) {
  run(H[14549], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, tempobj.logEnterGame = function (e, o, n, t, a) {
  run(H[14550], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, tempobj.logRoleUpLevel = function (e, o, n, t, a) {
  run(H[14551], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, tempobj.downloadClient = function () {
  run(H[14552]);
}, tempobj.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, tempobj.getPublicData = function () {
  run(H[14553]);
}, tempobj.checkMsg = function (e, o) {
  run(H[14554], e, o);
}, tempobj.checkMsgV2 = function (e, o) {
  run(H[14555], e, o);
}, tempobj.sendMessage = function (e, o, n) {
  run(H[14556], e, o, n);
};