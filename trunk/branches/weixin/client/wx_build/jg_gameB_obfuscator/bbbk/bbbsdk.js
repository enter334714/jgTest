var _ = wx.y$;
import Dall from "./bbbhelp";var config = { game_id: _[27355], game_pkg: _[27356], partner_id: "19", game_ver: _[27357], is_auth: !1, from: null, tmpId: { 1: _[27358], 2: _[27359], 3: _[27360] }, min_app_id: "" };window.config = config;var p$ADECB = p$AECDB();var HOST = _[27341];var t;var t_second = 0;var t_max = 300;var p$AEBCD = null;var p$AEBDC = null;var p$AECBD = null;var timeHandler = null;function p$AECDB() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log(_[27361]);var t = this;var a;a = (r = wx.getStorageSync(_[27362])) ? 0 : (r = t.uuid(16, 32), wx.setStorageSync(_[27362], r), 1), (i = wx.getStorageSync(_[27363])) || (i = t.uuid(16, 32), wx.setStorageSync(_[27363], i));e = wx.getLaunchOptionsSync();var r = e.scene || "";var i;console.log(_[27364]), console.log(e), a && e.query && e.query.ad_code && wx.setStorageSync(_[27365], e.query.ad_code), e.query && e.query.from && "" != e.query.from ? (a && wx.setStorageSync(_[27366], e.query.from), config.from = e.query.from) : (i = wx.getStorageSync(_[27366])) || "" == i || (config.from = i), console.log(_[27367] + config.from), t.log(_[723], { install: a, scene: r }), wx.showShareMenu();t = e.query && e.query.invite ? e.query.invite : "";e = e.query && e.query.invite_type ? e.query.invite_type : "";t && (p$AEBDC = { invite: t, invite_type: e, is_new: a, scene: r }), o && this.checkGameVersion(o, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(_[27368]);var t = this;r.login = _[89] == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var n, o;e.authSetting[_[27369]] ? (console.log(_[27370]), t.do_login()) : (console.log(_[27371]), wx.hideLoading({}), e = 2 * (n = wx.getSystemInfoSync()).screenWidth / 3, n.screenHeight, (o = wx.createUserInfoButton({ type: _[4700], text: _[27372], withCredentials: !1, style: { top: n.windowHeight / 2 + n.windowHeight / 4, left: n.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: _[27373], color: _[4722], textAlign: _[1959], fontSize: 16, borderRadius: 4 } })).show(), o.onTap(e => {
            console.log(e), p$BDCE({ title: _[27374] }), _[27375] == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), o.destroy();
          }));
        }, fail: function () {
          console.log(_[27376]), t.do_login();
        } }) : (console.log(_[27377] + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var a = this;wx.login({ success: function (e) {
          if (console.log(_[27378] + JSON.stringify(e)), e.code) {
            var t = a.getPublicData();if (t.is_from_min = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", p$AEBDC && _[4] == typeof p$AEBDC) for (var n in p$AEBDC) t[n] = p$AEBDC[n];config.is_auth ? wx.getUserInfo({ success: function (e) {
                var n = e.encryptedData;var o = e.iv;e = e.signature;t.encryptedData = n, t.iv = o, t.signature = e, wx.request({ url: _[27344] + HOST + _[27379], method: _[27346], dataType: _[218], header: { "content-type": _[27347] }, data: t, success: function (e) {
                    if (console.log(_[27380]), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync(_[27381], n.data.sdk_token), wx.setStorageSync(_[27382], n.data.user_id), wx.setStorageSync(_[27342], n.data.username), n.data.ext && wx.setStorageSync(_[27383], n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(_[27384], function (e) {
                        console.log(_[27385]), wx.onShareAppMessage(function () {
                          return a.logStartShare(_[27384]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: _[27386] });
                  }, fail: function (e) {
                    r.login && r.login(1, { errMsg: e.errMsg });
                  } });
              }, fail: function (e) {
                r.login && r.login(1, { errMsg: e.errMsg });
              } }) : wx.request({ url: _[27344] + HOST + _[27379], method: _[27346], dataType: _[218], header: { "content-type": _[27347] }, data: t, success: function (e) {
                if (console.log(_[27380]), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(_[27381], n.data.sdk_token), wx.setStorageSync(_[27382], n.data.user_id), wx.setStorageSync(_[27342], n.data.username), n.data.ext && wx.setStorageSync(_[27383], n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(_[27384], function (e) {
                    console.log(_[27385]), wx.onShareAppMessage(function () {
                      return a.logStartShare(_[27384]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: _[27386] });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(_[27387] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(_[27388]) || -1 < e.errMsg.indexOf(_[27389])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = _[89] == typeof callback ? callback : null;var n = e.type || _[27390];console.log(_[27391] + n);var o = this;this.getShareInfo(n, function (e) {
        o.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(_[27381]);wx.request({ url: _[27344] + HOST + _[27392], method: _[27346], dataType: _[218], header: { "content-type": _[27347] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: p$AEBCD ? p$AEBCD.server_id : "", role_id: p$AEBCD ? p$AEBCD.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(_[27393]);wx.getStorageSync(_[27381]);wx.request({ url: _[27344] + HOST + _[27394], method: _[27346], dataType: _[218], header: { "content-type": _[27347] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          console.log(_[27395]), console.log(e), timeHandler && clearTimeout(timeHandler), 200 == e.statusCode ? (e = e.data, config.min_app_id = e.data.min_app_id, e.state ? n && n(e.data) : n && n({ develop: 0 })) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(_[27396]), console.log(e), timeHandler && clearTimeout(timeHandler), n && n({ develop: 0 });
        } });timeHandler = setTimeout(function () {
        console.log(_[27397]), n && n({ develop: 0 });
      }, 1e4);
    }, getShareInfo: function (e, n) {
      console.log(_[27398]);var o = wx.getStorageSync(_[27381]);wx.request({ url: _[27344] + HOST + _[27399], method: _[27346], dataType: _[218], header: { "content-type": _[27347] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, type: e, server_id: p$AEBCD ? p$AEBCD.server_id : "", role_id: p$AEBCD ? p$AEBCD.role_id : "", no_log: 1 }, success: function (e) {
          console.log(_[27400]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: _[27401] + e.msg }) : r.share && r.share(1, { errMsg: _[27402] });
        } });
    }, updateShare: function (e, n, o, t, a, r) {
      console.log(_[27403]);var i = wx.getStorageSync(_[27381]);wx.request({ url: _[27344] + HOST + _[27404], method: _[27346], dataType: _[218], header: { "content-type": _[27347] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: o, role_id: t, sever_id: a, scene: r }, success: function (e) {
          console.log(_[27405]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(_[27406]);var o = wx.getStorageSync(_[27381]);wx.request({ url: _[27344] + HOST + _[27407], method: _[27346], dataType: _[218], header: { "content-type": _[27347] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, content: e }, success: function (e) {
          console.log(_[27408]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var o = this;wx.checkSession({ success: function () {
          o.startPay(e, n);
        }, fail: function () {
          console.log(_[27409]), o.login({}, function () {
            o.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(_[27410]), console.log(e);var o = this;r.pay = _[89] == typeof n ? n : null;var t = wx.getStorageSync(_[27381]);n = wx.getStorageSync(_[27383]);var a;t && n ? (a = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: n, platform: a.platform }, o.order_data = t, (n = o.getPublicData()).order_data = JSON.stringify(t), n.is_from_min = 1, wx.request({ url: _[27344] + HOST + _[27411], method: _[27346], dataType: _[218], header: { "content-type": _[27347] }, data: n, success: function (e) {
          console.log(_[27412]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? _[27413] == a.platform || _[27414] == a.platform ? e.data.is_android_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : o.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : wx.showModal({ title: _[27415], content: _[27416], confirmText: _[27417], showCancel: !1 }) : o.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: _[27386] });
        } })) : r.pay && r.pay(1, { errMsg: _[27418] });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: config.min_app_id, path: _[27419] + e.orderId + _[27420] + e.money, extraData: {}, envVersion: _[27353], success(e) {} });
    }, minPay: function (n) {
      var o = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          _[27421] == e.errMsg && (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          _[27422] == e.errMsg ? r.pay && r.pay(2, { errMsg: _[27423] }) : r.pay && r.pay(1, { errMsg: _[27424] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var o = this;n.buyQuantity <= n.balance ? (console.log(_[27425]), wx.showModal({ title: _[27415], content: _[27426] + n.balance + _[27427] + n.buyQuantity + _[27428], showCancel: !1, confirmText: _[27417], success: function () {
          o.gameGoPay(n);
        } })) : (console.log(_[27429]), wx.requestMidasPayment({ mode: _[27430], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          _[27431] == e.errMsg && o.gameGoPay(n);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(_[27432]) ? r.pay && r.pay(2, { errMsg: _[27423] }) : r.pay && r.pay(1, { errMsg: _[27424] + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      p$AECBD = e.orderId, wx.showModal({ title: _[27415], content: _[27433], showCancel: !1, confirmText: _[27417], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: _[27434], sendMessageImg: _[27435] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(_[27436]);var o = this;var t = wx.getStorageSync(_[27383]);wx.request({ url: _[27344] + HOST + _[27437] + config.partner_id + "/" + config.game_pkg + "/", method: _[27346], dataType: _[218], header: { "content-type": _[27347] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: t }, success: function (e) {
          console.log(_[27438]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: _[27439] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(_[27382]);var o = wx.getStorageSync(_[27342]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$AEBCD = { role_id: e.roleid, server_id: e.serverid }), this.log(_[5], t);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(_[27382]);var o = wx.getStorageSync(_[27342]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$AEBCD = { role_id: e.roleid, server_id: e.serverid }), this.log(_[5973], t), p$AEBDC && this.updateShare(p$AEBDC.invite, p$AEBDC.invite_type, p$AEBDC.is_new, e.roleid, e.serverid, p$AEBDC.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(_[27382]);var o = wx.getStorageSync(_[27342]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$AEBCD = { role_id: e.roleid, server_id: e.serverid }), this.log(_[27440], t);
    }, uuid: function (e, n) {
      var o = _[27441].split("");var t,
          a = [];var r;if (e = e || o.length, n) for (t = 0; t < n; t++) a[t] = o[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = o[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(_[27362]);var o = wx.getStorageSync(_[27363]);var t = wx.getStorageSync(_[27365]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: n, idfv: o, dname: e.model, mac: _[27442], net_type: 0 == e.wifiSignal ? "4G" : _[27443], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: _[27413] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var o = this.getPublicData();for (var t in n) o[t] = n[t];console.log(_[27444] + e), console.log(o), wx.request({ url: _[27344] + HOST + _[27445] + e + _[27446] + encodeURIComponent(JSON.stringify(o)), success: function (e) {}, fail: function (e) {} });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, subscribeMessage: function (e, n) {
      console.log(_[27447] + e), r.subscribeMessage = _[89] == typeof n ? n : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log(_[27448]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        }, fail(e) {
          console.log(_[27449]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        } });
    }, weiduanHelper: function () {
      new Dall().stebutonanimation(config.partner_id, config.game_pkg, config.game_id);
    } };
}function run(e, n, o) {
  e in p$ADECB && p$ADECB[e](n, o);
}exports.init = function (e, n) {
  run(_[796], e, n);
}, exports.login = function (e) {
  run(_[27450], "", e);
}, exports.pay = function (e, n) {
  run(_[27451], e, n);
}, exports.openService = function () {
  run(_[23886]);
}, exports.logCreateRole = function (e, n, o, t, a) {
  run(_[27452], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, n, o, t, a) {
  run(_[27453], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, o, t, a) {
  run(_[27454], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.share = function (e) {
  run(_[27390], { type: e });
}, exports.msgCheck = function (e, n) {
  run(_[11841], e, n);
}, exports.downloadClient = function () {
  run(_[27455]);
}, exports.subscribeMessage = function (e, n) {
  run(_[27456], e, n);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(_[27457]);
}, exports.weiduanHelper = function () {
  run(_[22971]);
};