var _ = wx.y$;
import Dall from "./bbbhelp";var config = { game_id: _[11693], game_pkg: _[11694], partner_id: "19", game_ver: _[11695], is_auth: !1, from: null, tmpId: { 1: _[11696], 2: _[11697], 3: _[11698] }, min_app_id: "" };window.config = config;var p$EB = p$EDB();var HOST = _[11677];var t;var t_second = 0;var t_max = 300;var p$DBE = null;var p$DEB = null;var p$EBD = null;function p$EDB() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log(_[11699]);var t = this;var a;a = (r = wx.getStorageSync(_[11700])) ? 0 : (r = t.uuid(16, 32), wx.setStorageSync(_[11700], r), 1), (i = wx.getStorageSync(_[11701])) || (i = t.uuid(16, 32), wx.setStorageSync(_[11701], i));e = wx.getLaunchOptionsSync();var r = e.scene || "";var i;console.log(_[11702]), console.log(e), a && e.query && e.query.ad_code && wx.setStorageSync(_[11703], e.query.ad_code), e.query && e.query.from && "" != e.query.from ? (a && wx.setStorageSync(_[11704], e.query.from), config.from = e.query.from) : (i = wx.getStorageSync(_[11704])) || "" == i || (config.from = i), console.log(config.from), t.log(_[11705], { install: a, scene: r }), wx.showShareMenu();t = e.query && e.query.invite ? e.query.invite : "";e = e.query && e.query.invite_type ? e.query.invite_type : "";t && (p$DEB = { invite: t, invite_type: e, is_new: a, scene: r }), o && this.checkGameVersion(o, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(_[11706]);var t = this;r.login = _[11707] == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var n, o;e.authSetting[_[11708]] ? (console.log(_[11709]), t.do_login()) : (console.log(_[11710]), wx.hideLoading({}), e = 2 * (n = wx.getSystemInfoSync()).screenWidth / 3, n.screenHeight, (o = wx.createUserInfoButton({ type: _[10532], text: _[11711], withCredentials: !1, style: { top: n.windowHeight / 2 + n.windowHeight / 4, left: n.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: _[11712], color: _[2359], textAlign: _[496], fontSize: 16, borderRadius: 4 } })).show(), o.onTap(e => {
            console.log(e), p$ACBD({ title: _[11713] }), _[11714] == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), o.destroy();
          }));
        }, fail: function () {
          console.log(_[11715]), t.do_login();
        } }) : (console.log(_[11716] + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var a = this;wx.login({ success: function (e) {
          if (console.log(_[11717] + JSON.stringify(e)), e.code) {
            var t = a.getPublicData();if (t.is_from_min = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", p$DEB && _[26] == typeof p$DEB) for (var n in p$DEB) t[n] = p$DEB[n];config.is_auth ? wx.getUserInfo({ success: function (e) {
                var n = e.encryptedData;var o = e.iv;e = e.signature;t.encryptedData = n, t.iv = o, t.signature = e, wx.request({ url: _[11680] + HOST + _[11718], method: _[11682], dataType: _[11683], header: { "content-type": _[11684] }, data: t, success: function (e) {
                    if (console.log(_[11719]), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync(_[11720], n.data.sdk_token), wx.setStorageSync(_[11721], n.data.user_id), wx.setStorageSync(_[11678], n.data.username), n.data.ext && wx.setStorageSync(_[11722], n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(_[11723], function (e) {
                        console.log(_[11724]), wx.onShareAppMessage(function () {
                          return a.logStartShare(_[11723]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: _[11725] });
                  }, fail: function (e) {
                    r.login && r.login(1, { errMsg: e.errMsg });
                  } });
              }, fail: function (e) {
                r.login && r.login(1, { errMsg: e.errMsg });
              } }) : wx.request({ url: _[11680] + HOST + _[11718], method: _[11682], dataType: _[11683], header: { "content-type": _[11684] }, data: t, success: function (e) {
                if (console.log(_[11719]), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(_[11720], n.data.sdk_token), wx.setStorageSync(_[11721], n.data.user_id), wx.setStorageSync(_[11678], n.data.username), n.data.ext && wx.setStorageSync(_[11722], n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(_[11723], function (e) {
                    console.log(_[11724]), wx.onShareAppMessage(function () {
                      return a.logStartShare(_[11723]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: _[11725] });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(_[11726] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(_[11727]) || -1 < e.errMsg.indexOf(_[11728])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = _[11707] == typeof callback ? callback : null;var n = e.type || _[11729];console.log(_[11730] + n);var o = this;this.getShareInfo(n, function (e) {
        o.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(_[11720]);wx.request({ url: _[11680] + HOST + _[11731], method: _[11682], dataType: _[11683], header: { "content-type": _[11684] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: p$DBE ? p$DBE.server_id : "", role_id: p$DBE ? p$DBE.role_id : "", type: e }, success: function (e) {} });
    }, p$BA: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(_[11732]);wx.getStorageSync(_[11720]);wx.request({ url: _[11680] + HOST + _[11733], method: _[11682], dataType: _[11683], header: { "content-type": _[11684] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          console.log(_[11734]), console.log(e), 200 == e.statusCode ? (e = e.data, config.min_app_id = e.data.min_app_id, e.state ? n && n(e.data) : n && n({ develop: 0 })) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, getShareInfo: function (e, n) {
      console.log(_[11735]);var o = wx.getStorageSync(_[11720]);wx.request({ url: _[11680] + HOST + _[11736], method: _[11682], dataType: _[11683], header: { "content-type": _[11684] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, type: e, server_id: p$DBE ? p$DBE.server_id : "", role_id: p$DBE ? p$DBE.role_id : "", no_log: 1 }, success: function (e) {
          console.log(_[11737]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: _[11738] + e.msg }) : r.share && r.share(1, { errMsg: _[11739] });
        } });
    }, updateShare: function (e, n, o, t, a, r) {
      console.log(_[11740]);var i = wx.getStorageSync(_[11720]);wx.request({ url: _[11680] + HOST + _[11741], method: _[11682], dataType: _[11683], header: { "content-type": _[11684] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: o, role_id: t, sever_id: a, scene: r }, success: function (e) {
          console.log(_[11742]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(_[11743]);var o = wx.getStorageSync(_[11720]);wx.request({ url: _[11680] + HOST + _[11744], method: _[11682], dataType: _[11683], header: { "content-type": _[11684] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, content: e }, success: function (e) {
          console.log(_[11745]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var o = this;wx.checkSession({ success: function () {
          o.startPay(e, n);
        }, fail: function () {
          console.log(_[11746]), o.login({}, function () {
            o.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(_[11747]), console.log(e);var o = this;r.pay = _[11707] == typeof n ? n : null;var t = wx.getStorageSync(_[11720]);n = wx.getStorageSync(_[11722]);var a;t && n ? (a = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: n, platform: a.platform }, o.order_data = t, (n = o.getPublicData()).order_data = JSON.stringify(t), n.is_from_min = 1, wx.request({ url: _[11680] + HOST + _[11748], method: _[11682], dataType: _[11683], header: { "content-type": _[11684] }, data: n, success: function (e) {
          console.log(_[11749]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? _[11750] == a.platform || _[11751] == a.platform ? e.data.is_android_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : o.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : wx.showModal({ title: _[11752], content: _[11753], confirmText: _[11754], showCancel: !1 }) : o.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: _[11725] });
        } })) : r.pay && r.pay(1, { errMsg: _[11755] });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: config.min_app_id, path: _[11756] + e.orderId + _[11757] + e.money, extraData: {}, envVersion: _[11691], success(e) {} });
    }, minPay: function (n) {
      var o = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          _[11758] == e.errMsg && (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          _[11759] == e.errMsg ? r.pay && r.pay(2, { errMsg: _[11760] }) : r.pay && r.pay(1, { errMsg: _[11761] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var o = this;n.buyQuantity <= n.balance ? (console.log(_[11762]), wx.showModal({ title: _[11752], content: _[11763] + n.balance + _[11764] + n.buyQuantity + _[11765], showCancel: !1, confirmText: _[11754], success: function () {
          o.gameGoPay(n);
        } })) : (console.log(_[11766]), wx.requestMidasPayment({ mode: _[11767], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          _[11768] == e.errMsg && o.gameGoPay(n);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(_[11769]) ? r.pay && r.pay(2, { errMsg: _[11760] }) : r.pay && r.pay(1, { errMsg: _[11761] + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      p$EBD = e.orderId, wx.showModal({ title: _[11752], content: _[11770], showCancel: !1, confirmText: _[11754], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: _[11771], sendMessageImg: "https://static.sh9130.com/gw/images/WechatIMG700.png" });
        } });
    }, gameGoPay: function (n, e) {
      console.log(_[11772]);var o = this;var t = wx.getStorageSync(_[11722]);wx.request({ url: _[11680] + HOST + _[11773] + config.partner_id + "/" + config.game_pkg + "/", method: _[11682], dataType: _[11683], header: { "content-type": _[11684] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: t }, success: function (e) {
          console.log(_[11774]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: _[11775] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(_[11721]);var o = wx.getStorageSync(_[11678]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$DBE = { role_id: e.roleid, server_id: e.serverid }), this.log(_[43], t);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(_[11721]);var o = wx.getStorageSync(_[11678]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$DBE = { role_id: e.roleid, server_id: e.serverid }), this.log(_[11776], t), p$DEB && this.updateShare(p$DEB.invite, p$DEB.invite_type, p$DEB.is_new, e.roleid, e.serverid, p$DEB.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(_[11721]);var o = wx.getStorageSync(_[11678]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$DBE = { role_id: e.roleid, server_id: e.serverid }), this.log(_[11777], t);
    }, uuid: function (e, n) {
      var o = _[11778].split("");var t,
          a = [];var r;if (e = e || o.length, n) for (t = 0; t < n; t++) a[t] = o[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = o[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(_[11700]);var o = wx.getStorageSync(_[11701]);var t = wx.getStorageSync(_[11703]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: n, idfv: o, dname: e.model, mac: _[11779], net_type: 0 == e.wifiSignal ? "4G" : _[11780], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: _[11750] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var o = this.getPublicData();for (var t in n) o[t] = n[t];console.log(_[11781] + e), console.log(o), wx.request({ url: _[11680] + HOST + _[11782] + e + _[11783] + encodeURIComponent(JSON.stringify(o)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, subscribeMessage: function (e, n) {
      console.log(_[11784] + e), r.subscribeMessage = _[11707] == typeof n ? n : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log(_[11785]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        }, fail(e) {
          console.log(_[11786]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        } });
    }, weiduanHelper: function () {
      new Dall().stebutonanimation(config.partner_id, config.game_pkg, config.game_id);
    } };
}function run(e, n, o) {
  e in p$EB && p$EB[e](n, o);
}exports.init = function (e, n) {
  run(_[10148], e, n);
}, exports.login = function (e) {
  run(_[11787], "", e);
}, exports.pay = function (e, n) {
  run(_[11788], e, n);
}, exports.p$BA = function () {
  run(_[11789]);
}, exports.logCreateRole = function (e, n, o, t, a) {
  run(_[11790], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, n, o, t, a) {
  run(_[11791], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, o, t, a) {
  run(_[11792], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.share = function (e) {
  run(_[11729], { type: e });
}, exports.msgCheck = function (e, n) {
  run(_[11793], e, n);
}, exports.downloadClient = function () {
  run(_[11794]);
}, exports.subscribeMessage = function (e, n) {
  run(_[11795], e, n);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(_[11796]);
}, exports.weiduanHelper = function () {
  run(_[11797]);
};