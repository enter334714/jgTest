var W = wx.$l;
import Dall from "./llllHELP";var config = { game_id: W[29958], game_pkg: W[29959], partner_id: "19", game_ver: W[29960], is_auth: !1, from: null, tmpId: { 1: W[29961], 2: W[29962], 3: W[29963] }, min_app_id: "" };window.config = config;var $LBHDT0 = $LBD0TH();var HOST = W[29947];var t;var t_second = 0;var t_max = 300;var $LBHD0T = null;var $LBDT0H = null;var $LBDTH0 = null;var checkHandler = null;var loginHandler = null;var requestCallback = !1;function $LBD0TH() {
  var i = {};return { order_data: {}, init: function (e, n) {
      e = e && e.game_ver ? e.game_ver : 0;console.log(W[29964]);var o = this;var t;t = wx.getStorageSync(W[29965]) ? 0 : (t = o.uuid(16, 32), wx.setStorageSync(W[29965], t), 1), wx.getStorageSync(W[29966]) || (a = o.uuid(16, 32), wx.setStorageSync(W[29966], a));var a = wx.getLaunchOptionsSync();var r = a.scene || "";console.log(W[29967]), console.log(a), t && a.query && a.query.ad_code && wx.setStorageSync(W[29968], a.query.ad_code), a.query && a.query.from && "" != a.query.from ? (t && wx.setStorageSync(W[29969], a.query.from), config.from = a.query.from) : (i = wx.getStorageSync(W[29969])) || "" == i || (config.from = i), console.log(W[29970] + config.from), o.log(W[1069], { install: t, scene: r }), wx.showShareMenu();var i = a.query && a.query.invite ? a.query.invite : "";o = a.query && a.query.invite_type ? a.query.invite_type : "";i && ($LBDT0H = { invite: i, invite_type: o, is_new: t, scene: r }), e && this.checkGameVersion(e, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(W[29971]);var o = this;i.login = W[29865] == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var n;e.authSetting[W[29972]] ? (console.log(W[29973]), o.do_login()) : (console.log(W[29974]), wx.hideLoading({}), (e = wx.getSystemInfoSync()).screenWidth, e.screenHeight, (n = wx.createUserInfoButton({ type: W[202], text: W[29975], withCredentials: !1, style: { top: e.windowHeight / 2 + e.windowHeight / 4, left: e.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: W[29976], color: W[89], textAlign: W[45], fontSize: 16, borderRadius: 4 } })).show(), n.onTap(e => {
            console.log(e), $LTH0D({ title: W[29977] }), W[29978] == e.errMsg ? o.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : o.do_login(), n.destroy();
          }));
        }, fail: function () {
          console.log(W[29979]), o.do_login();
        } }) : (console.log(W[29980] + config.is_auth), o.do_login());
    }, do_login: function (o) {
      var r = this;wx.login({ success: function (e) {
          if (console.log(W[29981] + JSON.stringify(e)), e.code) {
            var t = r.getPublicData();if (t.is_from_min = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", $LBDT0H && W[1064] == typeof $LBDT0H) for (var n in $LBDT0H) t[n] = $LBDT0H[n];var a;config.is_auth ? wx.getUserInfo({ success: function (e) {
                var n = e.encryptedData;var o = e.iv;e = e.signature;t.encryptedData = n, t.iv = o, t.signature = e, wx.request({ url: W[26336] + HOST + W[29982], method: W[630], dataType: W[6561], header: { "content-type": W[764] }, data: t, success: function (e) {
                    if (console.log(W[29983]), console.log(e), 200 == e.statusCode) {
                      e = e.data;if (e.state) {
                        var n = { userid: e.data.user_id, account: e.data.nick_name, token: e.data.token, invite_uid: e.data.invite_uid || "", invite_nickname: e.data.invite_nickname || "", invite_head_img: e.data.invite_head_img || "", head_img: e.data.head_img || "", is_client: e.data.is_client || "0", ios_pay: e.data.ios_pay || "0" };try {
                          wx.setStorageSync(W[29984], e.data.sdk_token), wx.setStorageSync(W[29985], e.data.user_id), wx.setStorageSync(W[29948], e.data.username), e.data.ext && wx.setStorageSync(W[29986], e.data.ext);
                        } catch (e) {}i.login && i.login(0, n);
                      } else i.login && i.login(1, { errMsg: e.msg });r.getShareInfo(W[29987], function (e) {
                        console.log(W[29988]), wx.onShareAppMessage(function () {
                          return r.logStartShare(W[29987]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else i.login && i.login(1, { errMsg: W[29989] });
                  }, fail: function (e) {
                    i.login && i.login(1, { errMsg: e.errMsg });
                  } });
              }, fail: function (e) {
                i.login && i.login(1, { errMsg: e.errMsg });
              } }) : (a = Date.now(), wx.request({ url: W[26336] + HOST + W[29982], method: W[630], dataType: W[6561], header: { "content-type": W[764] }, data: t, success: function (e) {
                if (console.log(W[29983]), console.log(e), requestCallback = !0, loginHandler && clearTimeout(loginHandler), loginHandler = null, 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    var o = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(W[29984], n.data.sdk_token), wx.setStorageSync(W[29985], n.data.user_id), wx.setStorageSync(W[29948], n.data.username), n.data.ext && wx.setStorageSync(W[29986], n.data.ext);
                    } catch (e) {}i.login && i.login(0, o);
                  } else i.login && i.login(1, { type: W[29990], errMsg: n.msg, time: Date.now() - a, res: e });r.getShareInfo(W[29987], function (e) {
                    console.log(W[29988]), wx.onShareAppMessage(function () {
                      return r.logStartShare(W[29987]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else i.login && i.login(1, { type: W[29990], errMsg: W[29989], time: Date.now() - a, res: e });
              }, fail: function (e) {
                console.log(W[29991]), console.log(e), r.log(W[179], { event: W[29992] }), requestCallback = !0, loginHandler && clearTimeout(loginHandler), loginHandler = null, i.login && i.login(1, { type: W[29993], errMsg: e.errMsg, time: Date.now() - a, res: e });
              } }), requestCallback || (loginHandler = setTimeout(function () {
              console.log(W[29994]), r.log(W[179], { event: W[29995] }), i.login && i.login(1, { type: W[29996], errMsg: W[29997], time: Date.now() - a }), i.login = null;
            }, 2e4)));
          } else i.login && i.login(1, { type: W[29998], errMsg: e.errMsg, res: e });
        }, fail: function (e) {
          console.log(W[29999] + JSON.stringify(e)), -1 < e.errMsg.indexOf(W[30000]) || e.errMsg.indexOf(W[30001]), i.login && i.login(1, { type: W[30002], errMsg: e.errMsg, res: e });
        } });
    }, share: function (e) {
      i.share = W[29865] == typeof callback ? callback : null;var n = e.type || W[727];console.log(W[30003] + n);var o = this;this.getShareInfo(n, function (e) {
        o.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(W[29984]);wx.request({ url: W[26336] + HOST + W[30004], method: W[630], dataType: W[6561], header: { "content-type": W[764] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: $LBHD0T ? $LBHD0T.server_id : "", role_id: $LBHD0T ? $LBHD0T.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(W[30005]), i.check = W[29865] == typeof n ? n : null;wx.getStorageSync(W[29984]);wx.request({ url: W[26336] + HOST + W[30006], method: W[630], dataType: W[6561], header: { "content-type": W[764] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          console.log(W[30007]), console.log(e), requestCallback = !0, checkHandler && clearTimeout(checkHandler), checkHandler = null, 200 == e.statusCode ? (e = e.data, config.min_app_id = e.data.min_app_id, e.state ? i.check && i.check(e.data) : i.check && i.check({ develop: 0 })) : i.check && i.check({ develop: 0 });
        }, fail: function (e) {
          console.log(W[30008]), console.log(e), requestCallback = !0, checkHandler && clearTimeout(checkHandler), checkHandler = null, i.check && i.check({ develop: 0 });
        } }), requestCallback || (checkHandler = setTimeout(function () {
        console.log(W[30009]), i.check && i.check({ develop: 0 }), i.check = null;
      }, 1e4));
    }, getShareInfo: function (e, n) {
      console.log(W[30010]);var o = wx.getStorageSync(W[29984]);wx.request({ url: W[26336] + HOST + W[30011], method: W[630], dataType: W[6561], header: { "content-type": W[764] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, type: e, server_id: $LBHD0T ? $LBHD0T.server_id : "", role_id: $LBHD0T ? $LBHD0T.role_id : "", no_log: 1 }, success: function (e) {
          console.log(W[30012]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : i.share && i.share(1, { errMsg: W[30013] + e.msg }) : i.share && i.share(1, { errMsg: W[30014] });
        } });
    }, updateShare: function (e, n, o, t, a, r) {
      console.log(W[30015]);var i = wx.getStorageSync(W[29984]);wx.request({ url: W[26336] + HOST + W[30016], method: W[630], dataType: W[6561], header: { "content-type": W[764] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: o, role_id: t, sever_id: a, scene: r }, success: function (e) {
          console.log(W[30017]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(W[30018]);var o = wx.getStorageSync(W[29984]);wx.request({ url: W[26336] + HOST + W[30019], method: W[630], dataType: W[6561], header: { "content-type": W[764] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, content: e }, success: function (e) {
          console.log(W[30020]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var o = this;wx.checkSession({ success: function () {
          o.startPay(e, n);
        }, fail: function () {
          console.log(W[30021]), o.login({}, function () {
            o.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(W[30022]), console.log(e);var o = this;i.pay = W[29865] == typeof n ? n : null;n = wx.getStorageSync(W[29984]);var t = wx.getStorageSync(W[29986]);var a;n && t ? (a = wx.getSystemInfoSync(), e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: t, platform: a.platform }, o.order_data = e, (n = o.getPublicData()).order_data = JSON.stringify(e), n.is_from_min = 1, wx.request({ url: W[26336] + HOST + W[30023], method: W[630], dataType: W[6561], header: { "content-type": W[764] }, data: n, success: function (e) {
          console.log(W[30024]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? W[533] == a.platform || W[536] == a.platform ? e.data.is_android_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : o.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : wx.showModal({ title: W[30025], content: W[30026], confirmText: W[30027], showCancel: !1 }) : o.minPay(e.data) : i.pay && i.pay(1, { errMsg: e.msg }) : i.pay && i.pay(1, { errMsg: W[29989] });
        } })) : i.pay && i.pay(1, { errMsg: W[30028] });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: config.min_app_id, path: W[30029] + e.orderId + W[30030] + e.money, extraData: {}, envVersion: W[29956], success(e) {} });
    }, minPay: function (n) {
      var o = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          W[30031] == e.errMsg && (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, i.pay && i.pay(0, e));
        }, fail: function (e) {
          W[30032] == e.errMsg ? i.pay && i.pay(2, { errMsg: W[30033] }) : i.pay && i.pay(1, { errMsg: W[30034] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var o = this;n.buyQuantity <= n.balance ? (console.log(W[30035]), wx.showModal({ title: W[30025], content: W[30036] + n.balance + W[30037] + n.buyQuantity + W[30038], showCancel: !1, confirmText: W[30027], success: function () {
          o.gameGoPay(n);
        } })) : (console.log(W[30039]), wx.requestMidasPayment({ mode: W[30040], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          W[30041] == e.errMsg && o.gameGoPay(n);
        }, fail: function (e) {
          console.log(W[30042] + JSON.stringify(e)), -1 !== e.errMsg.indexOf(W[30043]) ? i.pay && i.pay(2, { errMsg: W[30033] }) : i.pay && i.pay(1, { errMsg: W[30034] + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      $LBDTH0 = e.orderId, wx.showModal({ title: W[30025], content: W[30044], showCancel: !1, confirmText: W[30027], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: W[30045], sendMessageImg: W[30046] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(W[30047]);var o = this;var t = wx.getStorageSync(W[29986]);wx.request({ url: W[26336] + HOST + W[30048] + config.partner_id + "/" + config.game_pkg + "/", method: W[630], dataType: W[6561], header: { "content-type": W[764] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: t }, success: function (e) {
          console.log(W[30049]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, i.pay && i.pay(0, e)) : i.pay && i.pay(1, { errMsg: W[30050] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(W[29985]);var o = wx.getStorageSync(W[29948]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($LBHD0T = { role_id: e.roleid, server_id: e.serverid }), this.log(W[7], t);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(W[29985]);var o = wx.getStorageSync(W[29948]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($LBHD0T = { role_id: e.roleid, server_id: e.serverid }), this.log(W[6443], t), $LBDT0H && this.updateShare($LBDT0H.invite, $LBDT0H.invite_type, $LBDT0H.is_new, e.roleid, e.serverid, $LBDT0H.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(W[29985]);var o = wx.getStorageSync(W[29948]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($LBHD0T = { role_id: e.roleid, server_id: e.serverid }), this.log(W[30051], t);
    }, uuid: function (e, n) {
      var o = W[30052].split("");var t,
          a = [];var r;if (e = e || o.length, n) for (t = 0; t < n; t++) a[t] = o[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = o[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(W[29965]);var o = wx.getStorageSync(W[29966]);var t = wx.getStorageSync(W[29968]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: n, idfv: o, dname: e.model, mac: W[30053], net_type: 0 == e.wifiSignal ? "4G" : W[30054], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: W[533] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var o = this.getPublicData();for (var t in n) o[t] = n[t];console.log(W[30055] + e), console.log(o), wx.request({ url: W[26336] + HOST + W[30056] + e + W[30057] + encodeURIComponent(JSON.stringify(o)), success: function (e) {}, fail: function (e) {} });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, subscribeMessage: function (e, n) {
      console.log(W[30058] + e), i.subscribeMessage = W[29865] == typeof n ? n : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log(W[30059]), console.log(e), i.subscribeMessage && i.subscribeMessage(e);
        }, fail(e) {
          console.log(W[30060]), console.log(e), i.subscribeMessage && i.subscribeMessage(e);
        } });
    }, weiduanHelper: function () {
      new Dall().stebutonanimation(config.partner_id, config.game_pkg, config.game_id);
    } };
}function run(e, n, o) {
  e in $LBHDT0 && $LBHDT0[e](n, o);
}exports.init = function (e, n) {
  run(W[351], e, n);
}, exports.login = function (e) {
  run(W[660], "", e);
}, exports.pay = function (e, n) {
  run(W[714], e, n);
}, exports.openService = function () {
  run(W[728]);
}, exports.logCreateRole = function (e, n, o, t, a) {
  run(W[722], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, n, o, t, a) {
  run(W[724], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, o, t, a) {
  run(W[726], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.share = function (e) {
  run(W[727], { type: e });
}, exports.msgCheck = function (e, n) {
  run(W[614], e, n);
}, exports.downloadClient = function () {
  run(W[30061]);
}, exports.subscribeMessage = function (e, n) {
  run(W[739], e, n);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(W[30062]);
}, exports.weiduanHelper = function () {
  run(W[730]);
};