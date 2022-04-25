var H = wx.$F;
let config = { game_id: H[15917], game_pkg: H[22137], partner_id: H[22138], is_auth: !1, from: null };window.config = config;let f1QB83L = f1Q8L3B(),
    HOST = H[22139],
    f1QB8L3 = null,
    f1Q83BL = null,
    game_ver = "";function f1Q8L3B() {
  var e = {};return { order_data: {}, init: function (e, o) {
      game_ver = e && e.game_ver ? e.game_ver : 0, console.log(H[22140]);var n,
          t = wx.getStorageSync(H[22141]);t ? n = 0 : (t = this.uuid(16, 32), wx.setStorageSync(H[22141], t), n = 1);var a = wx.getStorageSync(H[22142]);a || (a = this.uuid(16, 32), wx.setStorageSync(H[22142], a));var r = wx.getLaunchOptionsSync(),
          i = r.scene ? r.scene : "";if (console.log(H[22143]), console.log(r), n && r.query && r.query.ad_code && wx.setStorageSync(H[22144], r.query.ad_code), r.query && r.query.from && "" != r.query.from) n && wx.setStorageSync(H[22145], r.query.from), config.from = r.query.from;else {
        var s = wx.getStorageSync(H[22145]);s || "" == s || (config.from = s);
      }console.log(config.from);var l = { install: n, scene: i };this.log(H[84], l), wx.showShareMenu(), game_ver && this.checkGameVersion(game_ver, function (e) {
        o && o(e);
      });
    }, login: function (o, n) {
      console.log(H[22146]);var t = this;e.login = H[18] == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          if (e.authSetting[H[22147]]) console.log(H[22148]), t.do_login();else {
            console.log(H[22149]), wx.hideLoading({});var o = wx.getSystemInfoSync(),
                n = (o.screenWidth, o.screenHeight, wx.createUserInfoButton({ type: H[2962], text: H[22150], withCredentials: !1, style: { top: o.windowHeight / 2 + o.windowHeight / 4, left: o.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: H[22151], color: H[3594], textAlign: H[22152], fontSize: 16, borderRadius: 4 } }));n.show(), n.onTap(e => {
              console.log(e), f13BL8({ title: H[22153] }), H[22154] == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), n.destroy();
            });
          }
        }, fail: function () {
          console.log(H[22155]), t.do_login();
        } }) : (console.log(H[22156] + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var n = this;wx.login({ success: function (t) {
          if (console.log(H[22157] + JSON.stringify(t)), t.code) {
            var a = n.getPublicData();a.mo = 1, a.code = t.code, a.nick_name = o ? o.nick_name : "", a.head_img = o ? o.head_img : "", config.is_auth ? wx.getUserInfo({ success: function (o) {
                var n = o.encryptedData,
                    t = o.iv,
                    r = o.signature;a.encryptedData = n, a.iv = t, a.signature = r, wx.request({ url: HOST + H[22158], method: H[8896], dataType: H[4564], header: { "content-type": H[22159] }, data: a, success: function (o) {
                    if (console.log(H[22160]), console.log(o), 200 == o.statusCode) {
                      var n = o.data;if (n.state) {
                        var t = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token };try {
                          wx.setStorageSync(H[22161], n.data.sdk_token), wx.setStorageSync(H[22162], n.data.user_id), wx.setStorageSync(H[22163], n.data.username), wx.setStorageSync(H[22164], n.data.openid), n.data.ext && wx.setStorageSync(H[22165], n.data.ext);
                        } catch (e) {}e.login && e.login(0, t);
                      } else e.login && e.login(1, { errMsg: n.msg });
                    } else e.login && e.login(1, { errMsg: H[22166] });
                  }, fail: function (o) {
                    e.login && e.login(1, { errMsg: o.errMsg });
                  } });
              }, fail: function (o) {
                e.login && e.login(1, { errMsg: o.errMsg });
              } }) : wx.request({ url: HOST + H[22158], method: H[8896], dataType: H[4564], header: { "content-type": H[22159] }, data: a, success: function (o) {
                if (console.log(H[22160]), console.log(o), 200 == o.statusCode) {
                  var n = o.data;if (n.state) {
                    var t = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token };try {
                      wx.setStorageSync(H[22161], n.data.sdk_token), wx.setStorageSync(H[22162], n.data.user_id), wx.setStorageSync(H[22163], n.data.username), wx.setStorageSync(H[22164], n.data.openid), n.data.ext && wx.setStorageSync(H[22165], n.data.ext);
                    } catch (e) {}e.login && e.login(0, t);
                  } else e.login && e.login(1, { errMsg: n.msg });
                } else e.login && e.login(1, { errMsg: H[22167] });
              } });
          } else e.login && e.login(1, { errMsg: t.errMsg });
        }, fail: function (o) {
          console.log(H[22168] + JSON.stringify(o)), (o.errMsg.indexOf(H[22169]) > -1 || o.errMsg.indexOf(H[22170]) > -1) && e.login && e.login(1, { errMsg: o.errMsg });
        } });
    }, checkGameVersion: function (e, o) {
      console.log(H[22171]);wx.getStorageSync(H[22161]);wx.request({ url: HOST + H[22172], method: H[8896], dataType: H[4564], header: { "content-type": H[22159] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          if (console.log(H[22173]), console.log(e), 200 == e.statusCode) {
            var n = e.data;n.state ? o && o(n.data) : o && o({ develop: 0 });
          } else o && o({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, pay: function (e, o) {
      var n = this;wx.checkSession({ success: function () {
          n.startPay(e, o);
        }, fail: function () {
          console.log(H[22174]), n.login({}, function () {
            n.startPay(e, o);
          });
        } });
    }, startPay: function (o, n) {
      console.log(H[22175]), console.log(o);var t = this;e.pay = H[18] == typeof n ? n : null, 0;var a = wx.getStorageSync(H[22161]),
          r = wx.getStorageSync(H[22165]);if (a && r) {
        var i = wx.getSystemInfoSync(),
            s = { cpbill: o.cpbill, productid: o.productid, productname: o.productname, productdesc: o.productdesc, serverid: o.serverid, servername: o.servername, roleid: o.roleid, rolename: o.rolename, rolelevel: o.rolelevel, price: o.price, extension: o.extension, sdk_token: a, session_key: r, platform: i.platform };t.order_data = s;var l = t.getPublicData();l.order_data = JSON.stringify(s), wx.request({ url: HOST + H[22176], method: H[8896], dataType: H[4564], header: { "content-type": H[22159] }, data: l, success: function (o) {
            if (console.log(H[22177]), console.log(o), 200 == o.statusCode) {
              var n = o.data;n.state ? void 0 === wx.requestPayment ? H[8880] == i.platform || H[22178] == i.platform || H[22179] == i.platform ? n.data.is_android_pay ? t.kfPay(n.data) : t.gamePay(n.data) : n.data.is_ios_pay ? 1 == n.data.ios_pay_type && t.kfPay(n.data) : wx.showModal({ title: H[22180], content: H[22181], confirmText: H[22182], showCancel: !1 }) : t.minPay(n.data) : e.pay && e.pay(1, { errMsg: n.msg });
            } else e.login && e.login(1, { errMsg: H[22183] });
          } });
      } else e.pay && e.pay(1, { errMsg: H[22184] });
    }, gamePay: function (o) {
      var n = this;o.buyQuantity <= o.balance ? (console.log(H[22185]), wx.showModal({ title: H[22180], content: H[22186] + o.balance + H[22187] + o.buyQuantity + H[22188], showCancel: !1, confirmText: H[22182], success: function () {
          n.gameGoPay(o);
        } })) : (console.log(H[22189]), console.log(o), wx.requestMidasPayment({ mode: H[981], env: o.env, offerId: o.offerId, currencyType: o.currencyType, platform: o.platform, buyQuantity: o.buyQuantity, zoneId: o.zoneId, success: function (e) {
          H[22190] == e.errMsg && n.gameGoPay(o);
        }, fail: function (o) {
          -1 !== o.errMsg.indexOf(H[22191]) ? e.pay && e.pay(2, { errMsg: H[22192] }) : e.pay && e.pay(1, { errMsg: H[22193] + o.errMsg + H[1923] + o.errCode + H[1924] });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      f1Q83BL = e.orderId, wx.showModal({ title: H[22180], content: H[22194], showCancel: !1, confirmText: H[22182], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: H[22195], sendMessageImg: H[22196] });
        } });
    }, gameGoPay: function (o, n) {
      console.log(H[22197]);var t = this,
          a = wx.getStorageSync(H[22165]);wx.request({ url: HOST + H[22198] + config.partner_id + H[16] + config.game_pkg + H[16], method: H[8896], dataType: H[4564], header: { "content-type": H[22159] }, data: { order_id: o.orderId, time: o.time, sign: o.sign, session_key: a }, success: function (n) {
          if (console.log(H[22199]), console.log(n), 200 == n.statusCode) if (1 == n.data.state) {
            var a = { cpOrderNo: t.order_data.cpbill, orderNo: o.orderId, amount: t.order_data.price, extension: t.order_data.extension };e.pay && e.pay(0, a);
          } else e.pay && e.pay(1, { errMsg: H[22200] });
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync(H[22162]),
          n = wx.getStorageSync(H[22163]),
          t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (f1QB8L3 = { role_id: e.roleid, server_id: e.serverid }), this.log(H[33], t);
    }, logEnterGame: function (e) {
      var o = wx.getStorageSync(H[22162]),
          n = wx.getStorageSync(H[22163]),
          t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (f1QB8L3 = { role_id: e.roleid, server_id: e.serverid }), this.log(H[18469], t);
    }, logRoleUpLevel: function (e) {
      var o = wx.getStorageSync(H[22162]),
          n = wx.getStorageSync(H[22163]),
          t = {};t.user_id = o, t.user_name = n, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (f1QB8L3 = { role_id: e.roleid, server_id: e.serverid }), this.log(H[22201], t);
    }, uuid: function (e, o) {
      var n,
          t,
          a = H[22202].split(""),
          r = [];if (e = e || a.length, o) for (n = 0; n < o; n++) r[n] = a[0 | Math.random() * e];else for (r[8] = r[13] = r[18] = r[23] = H[433], r[14] = H[22138], n = 0; n < 36; n++) r[n] || (t = 0 | 16 * Math.random(), r[n] = a[19 == n ? 3 & t | 8 : t]);return r.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync(),
          o = wx.getStorageSync(H[22141]),
          n = wx.getStorageSync(H[22142]),
          t = wx.getStorageSync(H[22144]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: o, idfv: n, dname: e.model, mac: H[22203], net_type: 0 == e.wifiSignal ? H[22204] : H[22205], os_ver: e.system, sdk_ver: e.version, game_ver: game_ver, device: H[8880] == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, o) {
      var n = this.getPublicData();for (var t in o) n[t] = o[t];console.log(H[22206] + e), console.log(n), wx.request({ url: HOST + H[22207] + e + H[22208] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + H[433] + e.getMonth() + H[433] + e.getDate();
    }, downloadClient: function () {
      var e = H[22209] + wx.getStorageSync(H[22164]);wx.showModal({ title: H[22210], content: H[22211], showCancel: !1, confirmText: H[22182], success: function () {
          var o = { showMessageCard: !0, sendMessageTitle: e, sendMessageImg: H[22212] };wx.openCustomerServiceConversation(o);
        } });
    }, checkMsg: function (e, o) {
      console.log(H[22213]);var n = wx.getStorageSync(H[22161]);wx.request({ url: HOST + H[22214], method: H[8896], dataType: H[4564], header: { "content-type": H[22159] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, content: e }, success: function (e) {
          console.log(H[22215]), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    }, checkMsgV2: function (e, o) {
      console.log(H[22213]);var n = wx.getStorageSync(H[22161]);wx.request({ url: HOST + H[22216], method: H[8896], dataType: H[4564], header: { "content-type": H[22159] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, content: e, scene: 1 }, success: function (e) {
          console.log(H[22215]), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    }, sendMessage: function (e, o, n) {
      console.log(H[22217]);var t = wx.getStorageSync(H[22161]);wx.request({ url: HOST + H[22218], method: H[8896], dataType: H[4564], header: { "content-type": H[22159] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, template_id: e, data: o }, success: function (e) {
          console.log(H[22219]), n && n(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    } };
}function run(e, o, n) {
  e in f1QB83L && f1QB83L[e](o, n);
}const tempobj = {};window.cwan = tempobj, tempobj.init = function (e, o) {
  run(H[48], e, o);
}, tempobj.login = function (e) {
  run(H[5909], "", e);
}, tempobj.pay = function (e, o) {
  run(H[9916], e, o);
}, tempobj.logCreateRole = function (e, o, n, t, a) {
  run(H[18452], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, tempobj.logEnterGame = function (e, o, n, t, a) {
  run(H[18454], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, tempobj.logRoleUpLevel = function (e, o, n, t, a) {
  run(H[18453], { serverid: e, servername: o, roleid: n, rolename: t, rolelevel: a });
}, tempobj.downloadClient = function () {
  run(H[713]);
}, tempobj.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, tempobj.getPublicData = function () {
  run(H[22220]);
}, tempobj.checkMsg = function (e, o) {
  run(H[12773], e, o);
}, tempobj.checkMsgV2 = function (e, o) {
  run(H[22221], e, o);
}, tempobj.sendMessage = function (e, o, n) {
  run(H[22222], e, o, n);
};