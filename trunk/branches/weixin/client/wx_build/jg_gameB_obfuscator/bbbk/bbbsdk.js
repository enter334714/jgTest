var _ = wx.y$;
import Dall from "./bbbhelp";var config = { game_id: _[12741], game_pkg: _[12742], partner_id: "19", game_ver: _[12743], is_auth: !1, from: null, tmpId: { 1: _[12744], 2: _[12745], 3: _[12746] }, min_app_id: "" };window.config = config;var p$BE = p$EBD();var HOST = _[12725];var t;var t_second = 0;var t_max = 300;var p$EB = null;var p$DBE = null;var p$DEB = null;function p$EBD() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log(_[12747]);var t = this;var a;a = (r = wx.getStorageSync(_[12748])) ? 0 : (r = t.uuid(16, 32), wx.setStorageSync(_[12748], r), 1), (i = wx.getStorageSync(_[12749])) || (i = t.uuid(16, 32), wx.setStorageSync(_[12749], i));e = wx.getLaunchOptionsSync();var r = e.scene || "";var i;console.log(_[12750]), console.log(e), a && e.query && e.query.ad_code && wx.setStorageSync(_[12751], e.query.ad_code), e.query && e.query.from && "" != e.query.from ? (a && wx.setStorageSync(_[12752], e.query.from), config.from = e.query.from) : (i = wx.getStorageSync(_[12752])) || "" == i || (config.from = i), console.log(config.from), t.log(_[12753], { install: a, scene: r }), wx.showShareMenu();t = e.query && e.query.invite ? e.query.invite : "";e = e.query && e.query.invite_type ? e.query.invite_type : "";t && (p$DBE = { invite: t, invite_type: e, is_new: a, scene: r }), o && this.checkGameVersion(o, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(_[12754]);var t = this;r.login = _[12755] == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var n, o;e.authSetting[_[12756]] ? (console.log(_[12757]), t.do_login()) : (console.log(_[12758]), wx.hideLoading({}), e = 2 * (n = wx.getSystemInfoSync()).screenWidth / 3, n.screenHeight, (o = wx.createUserInfoButton({ type: _[11434], text: _[12759], withCredentials: !1, style: { top: n.windowHeight / 2 + n.windowHeight / 4, left: n.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: _[12760], color: _[2405], textAlign: _[505], fontSize: 16, borderRadius: 4 } })).show(), o.onTap(e => {
            console.log(e), p$ACBD({ title: _[12761] }), _[12762] == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), o.destroy();
          }));
        }, fail: function () {
          console.log(_[12763]), t.do_login();
        } }) : (console.log(_[12764] + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var a = this;wx.login({ success: function (e) {
          if (console.log(_[12765] + JSON.stringify(e)), e.code) {
            var t = a.getPublicData();if (t.is_from_min = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", p$DBE && _[26] == typeof p$DBE) for (var n in p$DBE) t[n] = p$DBE[n];config.is_auth ? wx.getUserInfo({ success: function (e) {
                var n = e.encryptedData;var o = e.iv;e = e.signature;t.encryptedData = n, t.iv = o, t.signature = e, wx.request({ url: _[12728] + HOST + _[12766], method: _[12730], dataType: _[12731], header: { "content-type": _[12732] }, data: t, success: function (e) {
                    if (console.log(_[12767]), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync(_[12768], n.data.sdk_token), wx.setStorageSync(_[12769], n.data.user_id), wx.setStorageSync(_[12726], n.data.username), n.data.ext && wx.setStorageSync(_[12770], n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(_[12771], function (e) {
                        console.log(_[12772]), wx.onShareAppMessage(function () {
                          return a.logStartShare(_[12771]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: _[12773] });
                  }, fail: function (e) {
                    r.login && r.login(1, { errMsg: e.errMsg });
                  } });
              }, fail: function (e) {
                r.login && r.login(1, { errMsg: e.errMsg });
              } }) : wx.request({ url: _[12728] + HOST + _[12766], method: _[12730], dataType: _[12731], header: { "content-type": _[12732] }, data: t, success: function (e) {
                if (console.log(_[12767]), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(_[12768], n.data.sdk_token), wx.setStorageSync(_[12769], n.data.user_id), wx.setStorageSync(_[12726], n.data.username), n.data.ext && wx.setStorageSync(_[12770], n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(_[12771], function (e) {
                    console.log(_[12772]), wx.onShareAppMessage(function () {
                      return a.logStartShare(_[12771]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: _[12773] });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(_[12774] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(_[12775]) || -1 < e.errMsg.indexOf(_[12776])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = _[12755] == typeof callback ? callback : null;var n = e.type || _[12777];console.log(_[12778] + n);var o = this;this.getShareInfo(n, function (e) {
        o.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(_[12768]);wx.request({ url: _[12728] + HOST + _[12779], method: _[12730], dataType: _[12731], header: { "content-type": _[12732] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: p$EB ? p$EB.server_id : "", role_id: p$EB ? p$EB.role_id : "", type: e }, success: function (e) {} });
    }, p$BA: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(_[12780]);wx.getStorageSync(_[12768]);wx.request({ url: _[12728] + HOST + _[12781], method: _[12730], dataType: _[12731], header: { "content-type": _[12732] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          console.log(_[12782]), console.log(e), 200 == e.statusCode ? (e = e.data, config.min_app_id = e.data.min_app_id, e.state ? n && n(e.data) : n && n({ develop: 0 })) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, getShareInfo: function (e, n) {
      console.log(_[12783]);var o = wx.getStorageSync(_[12768]);wx.request({ url: _[12728] + HOST + _[12784], method: _[12730], dataType: _[12731], header: { "content-type": _[12732] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, type: e, server_id: p$EB ? p$EB.server_id : "", role_id: p$EB ? p$EB.role_id : "", no_log: 1 }, success: function (e) {
          console.log(_[12785]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: _[12786] + e.msg }) : r.share && r.share(1, { errMsg: _[12787] });
        } });
    }, updateShare: function (e, n, o, t, a, r) {
      console.log(_[12788]);var i = wx.getStorageSync(_[12768]);wx.request({ url: _[12728] + HOST + _[12789], method: _[12730], dataType: _[12731], header: { "content-type": _[12732] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: o, role_id: t, sever_id: a, scene: r }, success: function (e) {
          console.log(_[12790]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(_[12791]);var o = wx.getStorageSync(_[12768]);wx.request({ url: _[12728] + HOST + _[12792], method: _[12730], dataType: _[12731], header: { "content-type": _[12732] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, content: e }, success: function (e) {
          console.log(_[12793]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var o = this;wx.checkSession({ success: function () {
          o.startPay(e, n);
        }, fail: function () {
          console.log(_[12794]), o.login({}, function () {
            o.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(_[12795]), console.log(e);var o = this;r.pay = _[12755] == typeof n ? n : null;var t = wx.getStorageSync(_[12768]);n = wx.getStorageSync(_[12770]);var a;t && n ? (a = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: n, platform: a.platform }, o.order_data = t, (n = o.getPublicData()).order_data = JSON.stringify(t), n.is_from_min = 1, wx.request({ url: _[12728] + HOST + _[12796], method: _[12730], dataType: _[12731], header: { "content-type": _[12732] }, data: n, success: function (e) {
          console.log(_[12797]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? _[12798] == a.platform || _[12799] == a.platform ? e.data.is_android_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : o.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : wx.showModal({ title: _[12800], content: _[12801], confirmText: _[12802], showCancel: !1 }) : o.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: _[12773] });
        } })) : r.pay && r.pay(1, { errMsg: _[12803] });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: config.min_app_id, path: _[12804] + e.orderId + _[12805] + e.money, extraData: {}, envVersion: _[12739], success(e) {} });
    }, minPay: function (n) {
      var o = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          _[12806] == e.errMsg && (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          _[12807] == e.errMsg ? r.pay && r.pay(2, { errMsg: _[12808] }) : r.pay && r.pay(1, { errMsg: _[12809] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var o = this;n.buyQuantity <= n.balance ? (console.log(_[12810]), wx.showModal({ title: _[12800], content: _[12811] + n.balance + _[12812] + n.buyQuantity + _[12813], showCancel: !1, confirmText: _[12802], success: function () {
          o.gameGoPay(n);
        } })) : (console.log(_[12814]), wx.requestMidasPayment({ mode: _[12815], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          _[12816] == e.errMsg && o.gameGoPay(n);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(_[12817]) ? r.pay && r.pay(2, { errMsg: _[12808] }) : r.pay && r.pay(1, { errMsg: _[12809] + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      p$DEB = e.orderId, wx.showModal({ title: _[12800], content: _[12818], showCancel: !1, confirmText: _[12802], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: _[12819], sendMessageImg: _[12820] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(_[12821]);var o = this;var t = wx.getStorageSync(_[12770]);wx.request({ url: _[12728] + HOST + _[12822] + config.partner_id + "/" + config.game_pkg + "/", method: _[12730], dataType: _[12731], header: { "content-type": _[12732] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: t }, success: function (e) {
          console.log(_[12823]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: _[12824] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(_[12769]);var o = wx.getStorageSync(_[12726]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$EB = { role_id: e.roleid, server_id: e.serverid }), this.log(_[43], t);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(_[12769]);var o = wx.getStorageSync(_[12726]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$EB = { role_id: e.roleid, server_id: e.serverid }), this.log(_[12825], t), p$DBE && this.updateShare(p$DBE.invite, p$DBE.invite_type, p$DBE.is_new, e.roleid, e.serverid, p$DBE.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(_[12769]);var o = wx.getStorageSync(_[12726]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$EB = { role_id: e.roleid, server_id: e.serverid }), this.log(_[12826], t);
    }, uuid: function (e, n) {
      var o = _[12827].split("");var t,
          a = [];var r;if (e = e || o.length, n) for (t = 0; t < n; t++) a[t] = o[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = o[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(_[12748]);var o = wx.getStorageSync(_[12749]);var t = wx.getStorageSync(_[12751]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: n, idfv: o, dname: e.model, mac: _[12828], net_type: 0 == e.wifiSignal ? "4G" : _[12829], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: _[12798] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var o = this.getPublicData();for (var t in n) o[t] = n[t];console.log(_[12830] + e), console.log(o), wx.request({ url: _[12728] + HOST + _[12831] + e + _[12832] + encodeURIComponent(JSON.stringify(o)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, subscribeMessage: function (e, n) {
      console.log(_[12833] + e), r.subscribeMessage = _[12755] == typeof n ? n : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log(_[12834]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        }, fail(e) {
          console.log(_[12835]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        } });
    }, weiduanHelper: function () {
      new Dall().stebutonanimation(config.partner_id, config.game_pkg, config.game_id);
    } };
}function run(e, n, o) {
  e in p$BE && p$BE[e](n, o);
}exports.init = function (e, n) {
  run(_[11002], e, n);
}, exports.login = function (e) {
  run(_[12836], "", e);
}, exports.pay = function (e, n) {
  run(_[12837], e, n);
}, exports.p$BA = function () {
  run(_[12838]);
}, exports.logCreateRole = function (e, n, o, t, a) {
  run(_[12839], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, n, o, t, a) {
  run(_[12840], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, o, t, a) {
  run(_[12841], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.share = function (e) {
  run(_[12777], { type: e });
}, exports.msgCheck = function (e, n) {
  run(_[12842], e, n);
}, exports.downloadClient = function () {
  run(_[12843]);
}, exports.subscribeMessage = function (e, n) {
  run(_[12844], e, n);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(_[12845]);
}, exports.weiduanHelper = function () {
  run(_[12846]);
};