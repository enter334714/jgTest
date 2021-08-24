var a_ = wx.$d;
var config = { game_id: a_[13346], game_pkg: a_[13347], partner_id: a_[13348], game_ver: a_[13349], is_auth: "1", btn_img: "", btn_bg: "" };var D$LRNWP = D$LNWRP();var HOST = a_[13350];var t;var t_second = 0;var t_max = 300;var D$LNPWR = null;var D$LNPRW = null;var D$LNWPR = null;var btnImg_url = "";function D$LNWRP() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log(a_[13351]);var a = this;var o;o = (r = wx.getStorageSync(a_[13352])) ? 0 : (r = a.uuid(16, 32), wx.setStorageSync(a_[13352], r), 1), (e = wx.getStorageSync(a_[13353])) || (e = a.uuid(16, 32), wx.setStorageSync(a_[13353], e));var r = wx.getLaunchOptionsSync();e = r.scene || "";o && r.query && r.query.ad_code && wx.setStorageSync(a_[13354], r.query.ad_code), a.log(a_[13355], { install: o, scene: e }), wx.showShareMenu();a = r.query && r.query.invite ? r.query.invite : "";r = r.query && r.query.invite_type ? r.query.invite_type : "";a && (D$LNPRW = { invite: a, invite_type: r, is_new: o, scene: e }), t && this.checkGameVersion(t, function (e) {
        config.is_auth = e.is_auth, config.btn_bg = e.auth_bg_image, config.btn_img = e.auth_button_image, n && n(e);
      });
    }, login: function (e, n) {
      console.log(a_[13356]);var i = this;r.login = a_[13357] == typeof n ? n : null, "1" == config.is_auth ? wx.getSetting({ success: function (e) {
          var t, a, o, r;e.authSetting[a_[13358]] ? i.do_login1() : (e = wx.getSystemInfoSync(), t = e.screenWidth, a = e.screenHeight, (r = wx.createImage()).src = config.btn_img, r.onload = function () {
            o = .15 * a;var n = wx.createUserInfoButton({ type: a_[13359], image: r.src, style: { left: (t - t) / 2, top: a / 1.35, width: t, height: o } });n.onTap(function (e) {
              console.log(e), a_[13360] == e.errMsg && (i.do_login1({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }), n.destroy());
            });
          });
        }, fail: function () {
          i.do_login2();
        } }) : i.do_login2();
    }, do_login1: function (t) {
      var o = this;wx.login({ success: function (e) {
          if (console.log(a_[13361] + JSON.stringify(e)), e.code) {
            var a = o.getPublicData();if (a.is_from_min = 1, a.code = e.code, a.nick_name = t ? t.nick_name : "", a.head_img = t ? t.head_img : "", D$LNPRW && a_[26] == typeof D$LNPRW) for (var n in D$LNPRW) a[n] = D$LNPRW[n];wx.getUserInfo({ success: function (e) {
                console.log(a_[13362] + JSON.stringify(e));var n = e.encryptedData;var t = e.iv;e = e.signature;a.encryptedData = encodeURIComponent(n), a.iv = encodeURIComponent(t), a.signature = e, wx.request({ url: a_[13363] + HOST + a_[13364], method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: a, success: function (e) {
                    if (console.log(a_[13368]), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync(a_[13369], n.data.sdk_token), wx.setStorageSync(a_[13370], n.data.user_id), wx.setStorageSync(a_[13371], n.data.username), n.data.ext && wx.setStorageSync(a_[13372], n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });o.getShareInfo(a_[13373], function (e) {
                        console.log(a_[13374]), wx.onShareAppMessage(function () {
                          return o.logStartShare(a_[13373]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: a_[13375] });
                  } });
              }, fail: function (e) {
                console.log(a_[13376] + e.errMsg);
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          (-1 < e.errMsg.indexOf(a_[13377]) || -1 < e.errMsg.indexOf(a_[13378])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, do_login2: function (a) {
      var o = this;wx.login({ success: function (e) {
          if (console.log(a_[13361] + JSON.stringify(e)), e.code) {
            var n = o.getPublicData();if (n.is_from_min = 1, n.code = e.code, n.nick_name = a ? a.nick_name : "", n.head_img = a ? a.head_img : "", D$LNPRW && a_[26] == typeof D$LNPRW) for (var t in D$LNPRW) n[t] = D$LNPRW[t];wx.request({ url: a_[13363] + HOST + a_[13364], method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: n, success: function (e) {
                if (console.log(a_[13368]), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync(a_[13369], n.data.sdk_token), wx.setStorageSync(a_[13370], n.data.user_id), wx.setStorageSync(a_[13371], n.data.username), n.data.ext && wx.setStorageSync(a_[13372], n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });o.getShareInfo(a_[13373], function (e) {
                    console.log(a_[13374]), wx.onShareAppMessage(function () {
                      return o.logStartShare(a_[13373]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: a_[13375] });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          (-1 < e.errMsg.indexOf(a_[13377]) || -1 < e.errMsg.indexOf(a_[13378])) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = a_[13357] == typeof callback ? callback : null;var n = e.type || a_[13379];console.log(a_[13380] + n);var t = this;this.getShareInfo(n, function (e) {
        t.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync(a_[13369]);wx.request({ url: a_[13363] + HOST + a_[13381], method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: D$LNPWR ? D$LNPWR.server_id : "", role_id: D$LNPWR ? D$LNPWR.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log(a_[13382]);wx.getStorageSync(a_[13369]);var n = wx.getStorageSync(a_[13352]);wx.request({ url: a_[13363] + HOST + a_[13383], method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e, uuid: n }, success: function (e) {
          var n;console.log(a_[13384]), console.log(e), 200 == e.statusCode && (n = e.data).state ? t && t(n.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, n) {
      console.log(a_[13385]);var t = wx.getStorageSync(a_[13369]);wx.request({ url: a_[13363] + HOST + a_[13386], method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: D$LNPWR ? D$LNPWR.server_id : "", role_id: D$LNPWR ? D$LNPWR.role_id : "", no_log: 1 }, success: function (e) {
          console.log(a_[13387]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: a_[13388] + e.msg }) : r.share && r.share(1, { errMsg: a_[13389] });
        } });
    }, updateShare: function (e, n, t, a, o, r) {
      console.log(a_[13390]);var i = wx.getStorageSync(a_[13369]);wx.request({ url: a_[13363] + HOST + a_[13391], method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: t, role_id: a, sever_id: o, scene: r }, success: function (e) {
          console.log(a_[13392]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(a_[13393]);var t = wx.getStorageSync(a_[13369]);wx.request({ url: a_[13363] + HOST + a_[13394], method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, content: e }, success: function (e) {
          console.log(a_[13395]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var t = this;wx.checkSession({ success: function () {
          t.startPay(e, n);
        }, fail: function () {
          console.log(a_[13396]), t.login({}, function () {
            t.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(a_[13397]), console.log(e);var t = this;r.pay = a_[13357] == typeof n ? n : null;var a = wx.getStorageSync(a_[13369]);var o = wx.getStorageSync(a_[13372]);a && o ? (n = wx.getSystemInfoSync(), o = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: a, session_key: o, platform: n.platform }, t.order_data = o, (n = t.getPublicData()).order_data = JSON.stringify(o), n.is_from_min = 1, wx.request({ url: a_[13363] + HOST + a_[13398], method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: n, success: function (e) {
          console.log(a_[13399]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? a_[13400] == e.data.platform ? e.data.is_android_pay ? e.data.is_min_pay ? t.jumpPay(e.data) : t.kfPay(e.data) : t.gamePay(e.data) : e.data.is_ios_pay ? e.data.is_min_pay ? t.jumpPay(e.data) : t.kfPay(e.data) : wx.showModal({ title: a_[13401], content: a_[13402], confirmText: a_[13403], showCancel: !1 }) : t.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: a_[13375] });
        } })) : r.pay && r.pay(1, { errMsg: a_[13404] });
    }, jumpPay: function (e) {
      var n = e.orderId;var t = e.money;e = e.min_pay_app_id;wx.navigateToMiniProgram({ appId: e, path: a_[13405] + n + a_[13406] + t, extraData: {}, success(e) {}, fail(e) {} });
    }, minPay: function (n) {
      var t = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          a_[13407] == e.errMsg && (e = { cpOrderNo: t.order_data.cpbill, orderNo: n.orderId, amount: t.order_data.price, extension: t.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          a_[13408] == e.errMsg ? r.pay && r.pay(2, { errMsg: a_[13409] }) : r.pay && r.pay(1, { errMsg: a_[13410] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var t = this;n.buyQuantity <= n.balance ? (console.log(a_[13411]), wx.showModal({ title: a_[13401], content: a_[13412] + n.balance + a_[13413] + n.buyQuantity + a_[13414], showCancel: !1, confirmText: a_[13403], success: function () {
          t.gameGoPay(n);
        } })) : (console.log(a_[13415]), console.log(n), wx.requestMidasPayment({ mode: a_[13416], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          console.log(a_[13417]), console.log(e), a_[13418] == e.errMsg && t.gameGoPay(n);
        }, fail: function (e) {
          console.log(a_[13419]), console.log(e), -1 !== e.errMsg.indexOf(a_[13420]) ? r.pay && r.pay(2, { errMsg: a_[13409] }) : r.pay && r.pay(1, { errMsg: a_[13410] + e.errCode + "," + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      D$LNWPR = e.orderId, wx.showModal({ title: a_[13401], content: a_[13421], showCancel: !1, confirmText: a_[13403], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: a_[13422], sendMessagePath: a_[13423], sendMessageImg: a_[13423] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(a_[13424]);var t = this;var a = wx.getStorageSync(a_[13372]);wx.request({ url: a_[13363] + HOST + a_[13425] + config.partner_id + "/" + config.game_pkg + "/", method: a_[13365], dataType: a_[13366], header: { "content-type": a_[13367] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: a }, success: function (e) {
          console.log(a_[13426]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: t.order_data.cpbill, orderNo: n.orderId, amount: t.order_data.price, extension: t.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: a_[13427] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync(a_[13370]);var t = wx.getStorageSync(a_[13371]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$LNPWR = { role_id: e.roleid, server_id: e.serverid }), this.log(a_[44], a);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync(a_[13370]);var t = wx.getStorageSync(a_[13371]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$LNPWR = { role_id: e.roleid, server_id: e.serverid }), this.log(a_[13428], a), D$LNPRW && this.updateShare(D$LNPRW.invite, D$LNPRW.invite_type, D$LNPRW.is_new, e.roleid, e.serverid, D$LNPRW.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync(a_[13370]);var t = wx.getStorageSync(a_[13371]);var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (D$LNPWR = { role_id: e.roleid, server_id: e.serverid }), this.log(a_[13429], a);
    }, uuid: function (e, n) {
      var t = a_[13430].split("");var a,
          o = [];var r;if (e = e || t.length, n) for (a = 0; a < n; a++) o[a] = t[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", a = 0; a < 36; a++) o[a] || (r = 0 | 16 * Math.random(), o[a] = t[19 == a ? 3 & r | 8 : r]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync(a_[13352]);var t = wx.getStorageSync(a_[13353]);var a = wx.getStorageSync(a_[13354]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: a, uuid: n, idfv: t, dname: e.model, mac: a_[13431], net_type: 0 == e.wifiSignal ? "4G" : a_[13432], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: a_[13400] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var t = this.getPublicData();for (var a in n) t[a] = n[a];console.log(a_[13433] + e), console.log(t), wx.request({ url: a_[13363] + HOST + a_[13434] + e + a_[13435] + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: a_[13436], sendMessagePath: a_[13437], sendMessageImg: a_[13437] });
    }, adClick: function (e) {
      var n = e.game_id;e = e.query;this.log(a_[13438], { event: a_[13439], ext1: n, ext2: e });
    } };
}function run(e, n, t) {
  e in D$LRNWP && D$LRNWP[e](n, t);
}exports.init = function (e, n) {
  run(a_[11522], e, n);
}, exports.login = function (e) {
  run(a_[13440], "", e);
}, exports.login = function (e) {
  run(a_[13440], "", e);
}, exports.pay = function (e, n) {
  run(a_[13441], e, n);
}, exports.openService = function () {
  run(a_[13442]);
}, exports.logCreateRole = function (e, n, t, a, o) {
  run(a_[13443], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.logEnterGame = function (e, n, t, a, o) {
  run(a_[13444], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.logRoleUpLevel = function (e, n, t, a, o) {
  run(a_[13445], { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.share = function (e) {
  run(a_[13379], { type: e });
}, exports.msgCheck = function (e, n) {
  run(a_[13446], e, n);
}, exports.downloadClient = function () {
  run(a_[13447]);
}, exports.adClick = function (e, n) {
  run(a_[13448], { game_id: e, query: n });
};