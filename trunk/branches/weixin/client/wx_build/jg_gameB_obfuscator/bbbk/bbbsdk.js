var _ = wx.y$;
import Dall from "./bbbhelp";var config = { game_id: _[12783], game_pkg: _[12784], partner_id: "19", game_ver: _[12785], is_auth: !1, from: null, tmpId: { 1: _[12786], 2: _[12787], 3: _[12788] }, min_app_id: "" };window.config = config;var p$BE = p$EBD();var HOST = _[12767];var t;var t_second = 0;var t_max = 300;var p$EB = null;var p$DBE = null;var p$DEB = null;function p$EBD() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log(_[12789]);var t = this;var a;a = (r = wx.getStorageSync(_[12790])) ? 0 : (r = t.uuid(16, 32), wx.setStorageSync(_[12790], r), 1), (i = wx.getStorageSync(_[12791])) || (i = t.uuid(16, 32), wx.setStorageSync(_[12791], i));e = wx.getLaunchOptionsSync();var r = e.scene || "";var i;console.log(_[12792]), console.log(e), a && e.query && e.query.ad_code && wx.setStorageSync(_[12793], e.query.ad_code), e.query && e.query.from && "" != e.query.from ? (a && wx.setStorageSync(_[12794], e.query.from), config.from = e.query.from) : (i = wx.getStorageSync(_[12794])) || "" == i || (config.from = i), console.log(config.from), t.log(_[12795], { install: a, scene: r }), wx.showShareMenu();t = e.query && e.query.invite ? e.query.invite : "";e = e.query && e.query.invite_type ? e.query.invite_type : "";t && (p$DBE = { invite: t, invite_type: e, is_new: a, scene: r }), o && this.checkGameVersion(o, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(_[12796]);var t = this;r.login = _[12726] == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var n, o;e.authSetting[_[12797]] ? (console.log(_[12798]), t.do_login()) : (console.log(_[12799]), wx.hideLoading({}), e = 2 * (n = wx.getSystemInfoSync()).screenWidth / 3, n.screenHeight, (o = wx.createUserInfoButton({ type: _[11429], text: _[12800], withCredentials: !1, style: { top: n.windowHeight / 2 + n.windowHeight / 4, left: n.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: _[12801], color: _[2405], textAlign: _[505], fontSize: 16, borderRadius: 4 } })).show(), o.onTap(e => {
            console.log(e), p$ACBD({ title: _[12802] }), _[12803] == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), o.destroy();
          }));
        }, fail: function () {
          console.log(_[12804]), t.do_login();
        } }) : (console.log(_[12805] + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var a = this;wx.login({ success: function (e) {
          if (console.log(_[12806] + JSON.stringify(e)), e.code) {
            var t = a.getPublicData();if (t.is_from_min = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", p$DBE && _[26] == typeof p$DBE) for (var n in p$DBE) t[n] = p$DBE[n];config.is_auth ? wx.getUserInfo({ success: function (e) {
                var n = e.encryptedData;var o = e.iv;e = e.signature;t.encryptedData = n, t.iv = o, t.signature = e, wx.request({ url: _[12770] + HOST + _[12807], method: _[12772], dataType: _[12773], header: { "content-type": _[12774] }, data: t, success: function (e) {
                    if (console.log(_[12808]), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync(_[12809], n.data.sdk_token), wx.setStorageSync(_[12810], n.data.user_id), wx.setStorageSync(_[12768], n.data.username), n.data.ext && wx.setStorageSync(_[12811], n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(_[12812], function (e) {
                        console.log(_[12813]), wx.onShareAppMessage(function () {
                          return a.logStartShare(_[12812]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: _[12814] });
                  }, fail: function (e) {
                    r.login && r.login(1, { errMsg: e.errMsg });
                  } });
              }, fail: function (e) {
                r.login && r.login(1, { errMsg: e.errMsg });
              } }) : wx.request({ url: _[12770] + HOST + _[12807], method: _[12772], dataType: _[12773], header: { "content-type": _[12774] }, data: t, success: function (e) {
                if (console.log(_[12808]), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(_[12809], n.data.sdk_token), wx.setStorageSync(_[12810], n.data.user_id), wx.setStorageSync(_[12768], n.data.username), n.data.ext && wx.setStorageSync(_[12811], n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(_[12812], function (e) {
                    console.log(_[12813]), wx.onShareAppMessage(function () {
                      return a.logStartShare(_[12812]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: _[12814] });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(_[12815] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(_[12816]) || -1 < e.errMsg.indexOf(_[12817])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = _[12726] == typeof callback ? callback : null;var n = e.type || _[12818];console.log(_[12819] + n);var o = this;this.getShareInfo(n, function (e) {
        o.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(_[12809]);wx.request({ url: _[12770] + HOST + _[12820], method: _[12772], dataType: _[12773], header: { "content-type": _[12774] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: p$EB ? p$EB.server_id : "", role_id: p$EB ? p$EB.role_id : "", type: e }, success: function (e) {} });
    }, p$BA: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(_[12821]);wx.getStorageSync(_[12809]);wx.request({ url: _[12770] + HOST + _[12822], method: _[12772], dataType: _[12773], header: { "content-type": _[12774] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          console.log(_[12823]), console.log(e), 200 == e.statusCode ? (e = e.data, config.min_app_id = e.data.min_app_id, e.state ? n && n(e.data) : n && n({ develop: 0 })) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, getShareInfo: function (e, n) {
      console.log(_[12824]);var o = wx.getStorageSync(_[12809]);wx.request({ url: _[12770] + HOST + _[12825], method: _[12772], dataType: _[12773], header: { "content-type": _[12774] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, type: e, server_id: p$EB ? p$EB.server_id : "", role_id: p$EB ? p$EB.role_id : "", no_log: 1 }, success: function (e) {
          console.log(_[12826]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: _[12827] + e.msg }) : r.share && r.share(1, { errMsg: _[12828] });
        } });
    }, updateShare: function (e, n, o, t, a, r) {
      console.log(_[12829]);var i = wx.getStorageSync(_[12809]);wx.request({ url: _[12770] + HOST + _[12830], method: _[12772], dataType: _[12773], header: { "content-type": _[12774] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: o, role_id: t, sever_id: a, scene: r }, success: function (e) {
          console.log(_[12831]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(_[12832]);var o = wx.getStorageSync(_[12809]);wx.request({ url: _[12770] + HOST + _[12833], method: _[12772], dataType: _[12773], header: { "content-type": _[12774] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, content: e }, success: function (e) {
          console.log(_[12834]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var o = this;wx.checkSession({ success: function () {
          o.startPay(e, n);
        }, fail: function () {
          console.log(_[12835]), o.login({}, function () {
            o.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(_[12836]), console.log(e);var o = this;r.pay = _[12726] == typeof n ? n : null;var t = wx.getStorageSync(_[12809]);n = wx.getStorageSync(_[12811]);var a;t && n ? (a = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: n, platform: a.platform }, o.order_data = t, (n = o.getPublicData()).order_data = JSON.stringify(t), n.is_from_min = 1, wx.request({ url: _[12770] + HOST + _[12837], method: _[12772], dataType: _[12773], header: { "content-type": _[12774] }, data: n, success: function (e) {
          console.log(_[12838]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? _[12839] == a.platform || _[12840] == a.platform ? e.data.is_android_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : o.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : wx.showModal({ title: _[12841], content: _[12842], confirmText: _[12843], showCancel: !1 }) : o.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: _[12814] });
        } })) : r.pay && r.pay(1, { errMsg: _[12844] });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: config.min_app_id, path: _[12845] + e.orderId + _[12846] + e.money, extraData: {}, envVersion: _[12781], success(e) {} });
    }, minPay: function (n) {
      var o = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          _[12847] == e.errMsg && (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          _[12848] == e.errMsg ? r.pay && r.pay(2, { errMsg: _[12849] }) : r.pay && r.pay(1, { errMsg: _[12850] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var o = this;n.buyQuantity <= n.balance ? (console.log(_[12851]), wx.showModal({ title: _[12841], content: _[12852] + n.balance + _[12853] + n.buyQuantity + _[12854], showCancel: !1, confirmText: _[12843], success: function () {
          o.gameGoPay(n);
        } })) : (console.log(_[12855]), wx.requestMidasPayment({ mode: _[12856], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          _[12857] == e.errMsg && o.gameGoPay(n);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(_[12858]) ? r.pay && r.pay(2, { errMsg: _[12849] }) : r.pay && r.pay(1, { errMsg: _[12850] + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      p$DEB = e.orderId, wx.showModal({ title: _[12841], content: _[12859], showCancel: !1, confirmText: _[12843], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: _[12860], sendMessageImg: _[12861] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(_[12862]);var o = this;var t = wx.getStorageSync(_[12811]);wx.request({ url: _[12770] + HOST + _[12863] + config.partner_id + "/" + config.game_pkg + "/", method: _[12772], dataType: _[12773], header: { "content-type": _[12774] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: t }, success: function (e) {
          console.log(_[12864]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: _[12865] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(_[12810]);var o = wx.getStorageSync(_[12768]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$EB = { role_id: e.roleid, server_id: e.serverid }), this.log(_[43], t);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(_[12810]);var o = wx.getStorageSync(_[12768]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$EB = { role_id: e.roleid, server_id: e.serverid }), this.log(_[12866], t), p$DBE && this.updateShare(p$DBE.invite, p$DBE.invite_type, p$DBE.is_new, e.roleid, e.serverid, p$DBE.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(_[12810]);var o = wx.getStorageSync(_[12768]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$EB = { role_id: e.roleid, server_id: e.serverid }), this.log(_[12867], t);
    }, uuid: function (e, n) {
      var o = _[12868].split("");var t,
          a = [];var r;if (e = e || o.length, n) for (t = 0; t < n; t++) a[t] = o[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = o[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(_[12790]);var o = wx.getStorageSync(_[12791]);var t = wx.getStorageSync(_[12793]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: n, idfv: o, dname: e.model, mac: _[12869], net_type: 0 == e.wifiSignal ? "4G" : _[12870], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: _[12839] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var o = this.getPublicData();for (var t in n) o[t] = n[t];console.log(_[12871] + e), console.log(o), wx.request({ url: _[12770] + HOST + _[12872] + e + _[12873] + encodeURIComponent(JSON.stringify(o)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, subscribeMessage: function (e, n) {
      console.log(_[12874] + e), r.subscribeMessage = _[12726] == typeof n ? n : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log(_[12875]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        }, fail(e) {
          console.log(_[12876]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        } });
    }, weiduanHelper: function () {
      new Dall().stebutonanimation(config.partner_id, config.game_pkg, config.game_id);
    } };
}function run(e, n, o) {
  e in p$BE && p$BE[e](n, o);
}exports.init = function (e, n) {
  run(_[11002], e, n);
}, exports.login = function (e) {
  run(_[12877], "", e);
}, exports.pay = function (e, n) {
  run(_[12878], e, n);
}, exports.p$BA = function () {
  run(_[12879]);
}, exports.logCreateRole = function (e, n, o, t, a) {
  run(_[12880], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, n, o, t, a) {
  run(_[12881], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, o, t, a) {
  run(_[12882], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.share = function (e) {
  run(_[12818], { type: e });
}, exports.msgCheck = function (e, n) {
  run(_[12883], e, n);
}, exports.downloadClient = function () {
  run(_[12884]);
}, exports.subscribeMessage = function (e, n) {
  run(_[12885], e, n);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(_[12886]);
}, exports.weiduanHelper = function () {
  run(_[12887]);
};