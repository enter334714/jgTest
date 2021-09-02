var _ = wx.y$;
import Dall from "./bbbhelp";var config = { game_id: _[13948], game_pkg: _[13949], partner_id: "19", game_ver: _[13950], is_auth: !1, from: null, tmpId: { 1: _[13951], 2: _[13952], 3: _[13953] }, min_app_id: "" };window.config = config;var p$BED = p$DEB();var HOST = _[13934];var t;var t_second = 0;var t_max = 300;var p$BE = null;var p$EB = null;var p$DBE = null;var timeHandler = null;function p$DEB() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log(_[13954]);var t = this;var a;a = (r = wx.getStorageSync(_[13955])) ? 0 : (r = t.uuid(16, 32), wx.setStorageSync(_[13955], r), 1), (i = wx.getStorageSync(_[13956])) || (i = t.uuid(16, 32), wx.setStorageSync(_[13956], i));e = wx.getLaunchOptionsSync();var r = e.scene || "";var i;console.log(_[13957]), console.log(e), a && e.query && e.query.ad_code && wx.setStorageSync(_[13958], e.query.ad_code), e.query && e.query.from && "" != e.query.from ? (a && wx.setStorageSync(_[13959], e.query.from), config.from = e.query.from) : (i = wx.getStorageSync(_[13959])) || "" == i || (config.from = i), console.log(_[13960] + config.from), t.log(_[13961], { install: a, scene: r }), wx.showShareMenu();t = e.query && e.query.invite ? e.query.invite : "";e = e.query && e.query.invite_type ? e.query.invite_type : "";t && (p$EB = { invite: t, invite_type: e, is_new: a, scene: r }), o && this.checkGameVersion(o, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(_[13962]);var t = this;r.login = _[13579] == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var n, o;e.authSetting[_[13963]] ? (console.log(_[13964]), t.do_login()) : (console.log(_[13965]), wx.hideLoading({}), e = 2 * (n = wx.getSystemInfoSync()).screenWidth / 3, n.screenHeight, (o = wx.createUserInfoButton({ type: _[12210], text: _[13966], withCredentials: !1, style: { top: n.windowHeight / 2 + n.windowHeight / 4, left: n.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: _[13967], color: _[2872], textAlign: _[552], fontSize: 16, borderRadius: 4 } })).show(), o.onTap(e => {
            console.log(e), p$ACBD({ title: _[13968] }), _[13969] == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), o.destroy();
          }));
        }, fail: function () {
          console.log(_[13970]), t.do_login();
        } }) : (console.log(_[13971] + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var a = this;wx.login({ success: function (e) {
          if (console.log(_[13972] + JSON.stringify(e)), e.code) {
            var t = a.getPublicData();if (t.is_from_min = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", p$EB && _[26] == typeof p$EB) for (var n in p$EB) t[n] = p$EB[n];config.is_auth ? wx.getUserInfo({ success: function (e) {
                var n = e.encryptedData;var o = e.iv;e = e.signature;t.encryptedData = n, t.iv = o, t.signature = e, wx.request({ url: _[13937] + HOST + _[13973], method: _[13708], dataType: _[13939], header: { "content-type": _[13771] }, data: t, success: function (e) {
                    if (console.log(_[13974]), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync(_[13975], n.data.sdk_token), wx.setStorageSync(_[13976], n.data.user_id), wx.setStorageSync(_[13935], n.data.username), n.data.ext && wx.setStorageSync(_[13977], n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(_[13978], function (e) {
                        console.log(_[13979]), wx.onShareAppMessage(function () {
                          return a.logStartShare(_[13978]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: _[13980] });
                  }, fail: function (e) {
                    r.login && r.login(1, { errMsg: e.errMsg });
                  } });
              }, fail: function (e) {
                r.login && r.login(1, { errMsg: e.errMsg });
              } }) : wx.request({ url: _[13937] + HOST + _[13973], method: _[13708], dataType: _[13939], header: { "content-type": _[13771] }, data: t, success: function (e) {
                if (console.log(_[13974]), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(_[13975], n.data.sdk_token), wx.setStorageSync(_[13976], n.data.user_id), wx.setStorageSync(_[13935], n.data.username), n.data.ext && wx.setStorageSync(_[13977], n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo(_[13978], function (e) {
                    console.log(_[13979]), wx.onShareAppMessage(function () {
                      return a.logStartShare(_[13978]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: _[13980] });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(_[13981] + JSON.stringify(e)), (-1 < e.errMsg.indexOf(_[13982]) || -1 < e.errMsg.indexOf(_[13983])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = _[13579] == typeof callback ? callback : null;var n = e.type || _[13753];console.log(_[13984] + n);var o = this;this.getShareInfo(n, function (e) {
        o.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(_[13975]);wx.request({ url: _[13937] + HOST + _[13985], method: _[13708], dataType: _[13939], header: { "content-type": _[13771] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: p$BE ? p$BE.server_id : "", role_id: p$BE ? p$BE.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(_[13986]);wx.getStorageSync(_[13975]);wx.request({ url: _[13937] + HOST + _[13987], method: _[13708], dataType: _[13939], header: { "content-type": _[13771] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          console.log(_[13988]), console.log(e), timeHandler && clearTimeout(timeHandler), 200 == e.statusCode ? (e = e.data, config.min_app_id = e.data.min_app_id, e.state ? n && n(e.data) : n && n({ develop: 0 })) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(_[13989]), console.log(e), timeHandler && clearTimeout(timeHandler), n && n({ develop: 0 });
        } });timeHandler = setTimeout(function () {
        console.log(_[13990]), n && n({ develop: 0 });
      }, 1e4);
    }, getShareInfo: function (e, n) {
      console.log(_[13991]);var o = wx.getStorageSync(_[13975]);wx.request({ url: _[13937] + HOST + _[13992], method: _[13708], dataType: _[13939], header: { "content-type": _[13771] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, type: e, server_id: p$BE ? p$BE.server_id : "", role_id: p$BE ? p$BE.role_id : "", no_log: 1 }, success: function (e) {
          console.log(_[13993]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: _[13994] + e.msg }) : r.share && r.share(1, { errMsg: _[13995] });
        } });
    }, updateShare: function (e, n, o, t, a, r) {
      console.log(_[13996]);var i = wx.getStorageSync(_[13975]);wx.request({ url: _[13937] + HOST + _[13997], method: _[13708], dataType: _[13939], header: { "content-type": _[13771] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: o, role_id: t, sever_id: a, scene: r }, success: function (e) {
          console.log(_[13998]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(_[13999]);var o = wx.getStorageSync(_[13975]);wx.request({ url: _[13937] + HOST + _[14000], method: _[13708], dataType: _[13939], header: { "content-type": _[13771] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, content: e }, success: function (e) {
          console.log(_[14001]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var o = this;wx.checkSession({ success: function () {
          o.startPay(e, n);
        }, fail: function () {
          console.log(_[14002]), o.login({}, function () {
            o.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(_[14003]), console.log(e);var o = this;r.pay = _[13579] == typeof n ? n : null;var t = wx.getStorageSync(_[13975]);n = wx.getStorageSync(_[13977]);var a;t && n ? (a = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: n, platform: a.platform }, o.order_data = t, (n = o.getPublicData()).order_data = JSON.stringify(t), n.is_from_min = 1, wx.request({ url: _[13937] + HOST + _[14004], method: _[13708], dataType: _[13939], header: { "content-type": _[13771] }, data: n, success: function (e) {
          console.log(_[14005]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? _[13665] == a.platform || _[13666] == a.platform ? e.data.is_android_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : o.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : wx.showModal({ title: _[14006], content: _[14007], confirmText: _[14008], showCancel: !1 }) : o.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: _[13980] });
        } })) : r.pay && r.pay(1, { errMsg: _[14009] });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: config.min_app_id, path: _[14010] + e.orderId + _[14011] + e.money, extraData: {}, envVersion: _[13946], success(e) {} });
    }, minPay: function (n) {
      var o = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          _[14012] == e.errMsg && (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          _[14013] == e.errMsg ? r.pay && r.pay(2, { errMsg: _[14014] }) : r.pay && r.pay(1, { errMsg: _[14015] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var o = this;n.buyQuantity <= n.balance ? (console.log(_[14016]), wx.showModal({ title: _[14006], content: _[14017] + n.balance + _[14018] + n.buyQuantity + _[14019], showCancel: !1, confirmText: _[14008], success: function () {
          o.gameGoPay(n);
        } })) : (console.log(_[14020]), wx.requestMidasPayment({ mode: _[14021], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          _[14022] == e.errMsg && o.gameGoPay(n);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(_[14023]) ? r.pay && r.pay(2, { errMsg: _[14014] }) : r.pay && r.pay(1, { errMsg: _[14015] + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      p$DBE = e.orderId, wx.showModal({ title: _[14006], content: _[14024], showCancel: !1, confirmText: _[14008], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: _[14025], sendMessageImg: _[14026] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(_[14027]);var o = this;var t = wx.getStorageSync(_[13977]);wx.request({ url: _[13937] + HOST + _[14028] + config.partner_id + "/" + config.game_pkg + "/", method: _[13708], dataType: _[13939], header: { "content-type": _[13771] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: t }, success: function (e) {
          console.log(_[14029]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: _[14030] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(_[13976]);var o = wx.getStorageSync(_[13935]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$BE = { role_id: e.roleid, server_id: e.serverid }), this.log(_[44], t);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(_[13976]);var o = wx.getStorageSync(_[13935]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$BE = { role_id: e.roleid, server_id: e.serverid }), this.log(_[14031], t), p$EB && this.updateShare(p$EB.invite, p$EB.invite_type, p$EB.is_new, e.roleid, e.serverid, p$EB.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(_[13976]);var o = wx.getStorageSync(_[13935]);var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (p$BE = { role_id: e.roleid, server_id: e.serverid }), this.log(_[14032], t);
    }, uuid: function (e, n) {
      var o = _[14033].split("");var t,
          a = [];var r;if (e = e || o.length, n) for (t = 0; t < n; t++) a[t] = o[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = o[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(_[13955]);var o = wx.getStorageSync(_[13956]);var t = wx.getStorageSync(_[13958]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: n, idfv: o, dname: e.model, mac: _[14034], net_type: 0 == e.wifiSignal ? "4G" : _[14035], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: _[13665] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var o = this.getPublicData();for (var t in n) o[t] = n[t];console.log(_[14036] + e), console.log(o), wx.request({ url: _[13937] + HOST + _[14037] + e + _[14038] + encodeURIComponent(JSON.stringify(o)), success: function (e) {}, fail: function (e) {} });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, subscribeMessage: function (e, n) {
      console.log(_[14039] + e), r.subscribeMessage = _[13579] == typeof n ? n : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log(_[14040]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        }, fail(e) {
          console.log(_[14041]), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        } });
    }, weiduanHelper: function () {
      new Dall().stebutonanimation(config.partner_id, config.game_pkg, config.game_id);
    } };
}function run(e, n, o) {
  e in p$BED && p$BED[e](n, o);
}exports.init = function (e, n) {
  run(_[11729], e, n);
}, exports.login = function (e) {
  run(_[14042], "", e);
}, exports.pay = function (e, n) {
  run(_[14043], e, n);
}, exports.openService = function () {
  run(_[14044]);
}, exports.logCreateRole = function (e, n, o, t, a) {
  run(_[14045], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, n, o, t, a) {
  run(_[14046], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, o, t, a) {
  run(_[14047], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.share = function (e) {
  run(_[13753], { type: e });
}, exports.msgCheck = function (e, n) {
  run(_[13699], e, n);
}, exports.downloadClient = function () {
  run(_[14048]);
}, exports.subscribeMessage = function (e, n) {
  run(_[14049], e, n);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(_[14050]);
}, exports.weiduanHelper = function () {
  run(_[14051]);
};