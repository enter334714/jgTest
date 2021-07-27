var p = wx.$h;
import Dall from "./ccchelp";var config = { game_id: p[25815], game_pkg: p[25816], partner_id: "19", game_ver: p[25817], is_auth: !1, from: null, tmpId: { 1: p[25818], 2: p[25819], 3: p[25820] }, min_app_id: "" };window.config = config;var $aAEBCD = $aAEDBC();var HOST = p[25801];var t;var t_second = 0;var t_max = 300;var $aAEBDC = null;var $aAECBD = null;var $aAECDB = null;function $aAEDBC() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log(p[25821]);var t = this;var a;a = (r = wx.getStorageSync(p[25822])) ? 0 : (r = t.uuid(16, 32), wx.setStorageSync(p[25822], r), 1), (i = wx.getStorageSync(p[25823])) || (i = t.uuid(16, 32), wx.setStorageSync(p[25823], i));e = wx.getLaunchOptionsSync();var r = e.scene || "";var i;console.log(p[25824]), console.log(e), a && e.query && e.query.ad_code && wx.setStorageSync(p[25825], e.query.ad_code), e.query && e.query.from && "" != e.query.from ? (a && wx.setStorageSync(p[25826], e.query.from), config.from = e.query.from) : (i = wx.getStorageSync(p[25826])) || "" == i || (config.from = i), console.log(config.from), t.log(p[712], { install: a, scene: r }), wx.showShareMenu();t = e.query && e.query.invite ? e.query.invite : "";e = e.query && e.query.invite_type ? e.query.invite_type : "";t && ($aAECBD = { invite: t, invite_type: e, is_new: a, scene: r }), o && this.checkGameVersion(o, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(p[25827]);var t = this;r.login = p[89] == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var n, o;e.authSetting[p[25828]] ? (console.log(p[25829]), t.do_login()) : (console.log(p[25830]), wx.hideLoading({}), e = 2 * (n = wx.getSystemInfoSync()).screenWidth / 3, n.screenHeight, (o = wx.createUserInfoButton({ type: p[4154], text: p[25831], withCredentials: !1, style: { top: n.windowHeight / 2 + n.windowHeight / 4, left: n.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: p[25832], color: p[4176], textAlign: p[1881], fontSize: 16, borderRadius: 4 } })).show(), o.onTap(e => {
            console.log(e), $aBDCE({ title: p[25833] }), p[25834] == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), o.destroy();
          }));
        }, fail: function () {
          console.log(p[25835]), t.do_login();
        } }) : (console.log(p[25836] + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var a = this;wx.login({ success: function (e) {
          if (console.log(p[25837] + JSON.stringify(e)), e.code) {
            var t = a.getPublicData();if (t.is_from_min = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", $aAECBD && p[4] == typeof $aAECBD) for (var n in $aAECBD) t[n] = $aAECBD[n];config.is_auth ? wx.getUserInfo({ success: function (e) {
                var n = e.encryptedData;var o = e.iv;e = e.signature;t.encryptedData = n, t.iv = o, t.signature = e, wx.request({ url: p[25804] + HOST + p[25838], method: p[25806], dataType: p[218], header: { "content-type": p[25807] }, data: t, success: function (e) {
                    if (console.log(p[25839]), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync(p[25840], n.data.sdk_token), wx.setStorageSync(p[25841], n.data.user_id), wx.setStorageSync(p[25802], n.data.username), n.data.ext && wx.setStorageSync(p[25842], n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(p[25843], function (e) {
                        console.log(p[25844]), wx.onShareAppMessage(function () {
                          return a.logStartShare(p[25843]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: p[25845] });
                  }, fail: function (e) {
                    r.login && r.login(1, { errMsg: e.errMsg });
                  } });
              }, fail: function (e) {
                r.login && r.login(1, { errMsg: e.errMsg });
              } }) : wx.request({ url: p[25804] + HOST + p[25838], method: p[25806], dataType: p[218], header: { "content-type": p[25807] }, data: t, success: function (e) {
                if (console.log(p[25839]), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(p[25840], n.data.sdk_token), wx.setStorageSync(p[25841], n.data.user_id), wx.setStorageSync(p[25802], n.data.username), n.data.ext && wx.setStorageSync(p[25842], n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(p[25843], function (e) {
                    console.log(p[25844]), wx.onShareAppMessage(function () {
                      return a.logStartShare(p[25843]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: p[25845] });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(p[25846] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(p[25847]) || -1 < e.errMsg.indexOf(p[25848])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = p[89] == typeof callback ? callback : null;var n = e.type || p[25849];console.log(p[25850] + n);var o = this;this.getShareInfo(n, function (e) {
        o.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(p[25840]);wx.request({ url: p[25804] + HOST + p[25851], method: p[25806], dataType: p[218], header: { "content-type": p[25807] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: $aAEBDC ? $aAEBDC.server_id : "", role_id: $aAEBDC ? $aAEBDC.role_id : "", type: e }, success: function (e) {} });
    }, $aCB: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(p[25852]);wx.getStorageSync(p[25840]);wx.request({ url: p[25804] + HOST + p[25853], method: p[25806], dataType: p[218], header: { "content-type": p[25807] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          console.log(p[25854]), console.log(e), 200 == e.statusCode ? (e = e.data, config.min_app_id = e.data.min_app_id, e.state ? n && n(e.data) : n && n({ develop: 0 })) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, getShareInfo: function (e, n) {
      console.log(p[25855]);var o = wx.getStorageSync(p[25840]);wx.request({ url: p[25804] + HOST + p[25856], method: p[25806], dataType: p[218], header: { "content-type": p[25807] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, type: e, server_id: $aAEBDC ? $aAEBDC.server_id : "", role_id: $aAEBDC ? $aAEBDC.role_id : "", no_log: 1 }, success: function (e) {
          console.log(p[25857]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: p[25858] + e.msg }) : r.share && r.share(1, { errMsg: p[25859] });
        } });
    }, updateShare: function (e, n, o, t, a, r) {
      console.log(p[25860]);var i = wx.getStorageSync(p[25840]);wx.request({ url: p[25804] + HOST + p[25861], method: p[25806], dataType: p[218], header: { "content-type": p[25807] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: o, role_id: t, sever_id: a, scene: r }, success: function (e) {
          console.log(p[25862]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(p[25863]);var o = wx.getStorageSync(p[25840]);wx.request({ url: p[25804] + HOST + p[25864], method: p[25806], dataType: p[218], header: { "content-type": p[25807] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, content: e }, success: function (e) {
          console.log(p[25865]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var o = this;wx.checkSession({ success: function () {
          o.startPay(e, n);
        }, fail: function () {
          console.log(p[25866]), o.login({}, function () {
            o.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(p[25867]), console.log(e);var o = this;r.pay = p[89] == typeof n ? n : null;var t = wx.getStorageSync(p[25840]);n = wx.getStorageSync(p[25842]);var a;t && n ? (a = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: n, platform: a.platform }, o.order_data = t, (n = o.getPublicData()).order_data = JSON.stringify(t), n.is_from_min = 1, wx.request({ url: p[25804] + HOST + p[25868], method: p[25806], dataType: p[218], header: { "content-type": p[25807] }, data: n, success: function (e) {
          console.log(p[25869]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? p[25870] == a.platform || p[25871] == a.platform ? e.data.is_android_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : o.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : wx.showModal({ title: p[25872], content: p[25873], confirmText: p[25874], showCancel: !1 }) : o.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: p[25845] });
        } })) : r.pay && r.pay(1, { errMsg: p[25875] });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: config.min_app_id, path: p[25876] + e.orderId + p[25877] + e.money, extraData: {}, envVersion: p[25813], success(e) {} });
    }, minPay: function (n) {
      var o = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          p[25878] == e.errMsg && (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          p[25879] == e.errMsg ? r.pay && r.pay(2, { errMsg: p[25880] }) : r.pay && r.pay(1, { errMsg: p[25881] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var o = this;n.buyQuantity <= n.balance ? (console.log(p[25882]), wx.showModal({ title: p[25872], content: p[25883] + n.balance + p[25884] + n.buyQuantity + p[25885], showCancel: !1, confirmText: p[25874], success: function () {
          o.gameGoPay(n);
        } })) : (console.log(p[25886]), wx.requestMidasPayment({ mode: p[25887], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          p[25888] == e.errMsg && o.gameGoPay(n);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(p[25889]) ? r.pay && r.pay(2, { errMsg: p[25880] }) : r.pay && r.pay(1, { errMsg: p[25881] + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      $aAECDB = e.orderId, wx.showModal({ title: p[25872], content: p[25890], showCancel: !1, confirmText: p[25874], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: p[25891], sendMessageImg: p[25892] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(p[25893]);var o = this;var t = wx.getStorageSync(p[25842]);wx.request({ url: p[25804] + HOST + p[25894] + config.partner_id + "/" + config.game_pkg + "/", method: p[25806], dataType: p[218], header: { "content-type": p[25807] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: t }, success: function (e) {
          console.log(p[25895]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: p[25896] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(p[25841]);var o = wx.getStorageSync(p[25802]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aAEBDC = { role_id: e.roleid, server_id: e.serverid }), this.log(p[5], t);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(p[25841]);var o = wx.getStorageSync(p[25802]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aAEBDC = { role_id: e.roleid, server_id: e.serverid }), this.log(p[5390], t), $aAECBD && this.updateShare($aAECBD.invite, $aAECBD.invite_type, $aAECBD.is_new, e.roleid, e.serverid, $aAECBD.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(p[25841]);var o = wx.getStorageSync(p[25802]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && ($aAEBDC = { role_id: e.roleid, server_id: e.serverid }), this.log(p[25897], t);
    }, uuid: function (e, n) {
      var o = p[25898].split("");var t,
          a = [];var r;if (e = e || o.length, n) for (t = 0; t < n; t++) a[t] = o[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = o[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(p[25822]);var o = wx.getStorageSync(p[25823]);var t = wx.getStorageSync(p[25825]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: n, idfv: o, dname: e.model, mac: p[25899], net_type: 0 == e.wifiSignal ? "4G" : p[25900], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: p[25870] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var o = this.getPublicData();for (var t in n) o[t] = n[t];console.log(p[25901] + e), console.log(o), wx.request({ url: p[25804] + HOST + p[25902] + e + p[25903] + encodeURIComponent(JSON.stringify(o)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, subscribeMessage: function (e, n) {
      console.log(p[25904] + e), r.subscribeMessage = p[89] == typeof n ? n : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log(p[25905]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        }, fail(e) {
          console.log(p[25906]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        } });
    }, weiduanHelper: function () {
      new Dall().stebutonanimation(config.partner_id, config.game_pkg, config.game_id);
    } };
}function run(e, n, o) {
  e in $aAEBCD && $aAEBCD[e](n, o);
}exports.init = function (e, n) {
  run(p[782], e, n);
}, exports.login = function (e) {
  run(p[25907], "", e);
}, exports.pay = function (e, n) {
  run(p[25908], e, n);
}, exports.$aCB = function () {
  run(p[25909]);
}, exports.logCreateRole = function (e, n, o, t, a) {
  run(p[25910], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, n, o, t, a) {
  run(p[25911], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, o, t, a) {
  run(p[25912], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.share = function (e) {
  run(p[25849], { type: e });
}, exports.msgCheck = function (e, n) {
  run(p[11066], e, n);
}, exports.downloadClient = function () {
  run(p[25913]);
}, exports.subscribeMessage = function (e, n) {
  run(p[25914], e, n);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[25915]);
}, exports.weiduanHelper = function () {
  run(p[22668]);
};