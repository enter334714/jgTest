var M = wx.$T;
import Dall from "./ttsstt";var config = { game_id: M[1701], game_pkg: M[1702], partner_id: "19", game_ver: M[1703], is_auth: !1, from: null, tmpId: { 1: M[1704], 2: M[1705], 3: M[1706] }, min_app_id: "" };window.config = config;var t_FZKM6 = t_FK6MZ();var HOST = M[1707];var t;var t_second = 0;var t_max = 300;var t_FZK6M = null;var t_FKM6Z = null;var t_FKMZ6 = null;var checkHandler = null;var loginHandler = null;var requestCallback = !1;function t_FK6MZ() {
  var i = {};return { order_data: {}, init: function (e, n) {
      e = e && e.game_ver ? e.game_ver : 0;console.log(M[1708]);var o = this;var t;t = wx.getStorageSync("plat_uuid") ? 0 : (t = o.uuid(16, 32), wx.setStorageSync("plat_uuid", t), 1), wx.getStorageSync("plat_idfv") || (a = o.uuid(16, 32), wx.setStorageSync("plat_idfv", a));var a = wx.getLaunchOptionsSync();var r = a.scene || "";console.log(M[1709]), console.log(a), t && a.query && a.query.ad_code && wx.setStorageSync("plat_ad_code", a.query.ad_code), a.query && a.query.from && "" != a.query.from ? (t && wx.setStorageSync("plat_from", a.query.from), config.from = a.query.from) : (i = wx.getStorageSync("plat_from")) || "" == i || (config.from = i), console.log(M[1710] + config.from), o.log(M[1711], { install: t, scene: r }), wx.showShareMenu();var i = a.query && a.query.invite ? a.query.invite : "";o = a.query && a.query.invite_type ? a.query.invite_type : "";i && (t_FKM6Z = { invite: i, invite_type: o, is_new: t, scene: r }), e && this.checkGameVersion(e, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log(M[1712]);var o = this;i.login = M[928] == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var n;e.authSetting[M[1713]] ? (console.log(M[1714]), o.do_login()) : (console.log(M[1715]), wx.hideLoading({}), (e = wx.getSystemInfoSync()).screenWidth, e.screenHeight, (n = wx.createUserInfoButton({ type: M[353], text: M[1716], withCredentials: !1, style: { top: e.windowHeight / 2 + e.windowHeight / 4, left: e.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: M[1717], color: M[516], textAlign: M[473], fontSize: 16, borderRadius: 4 } })).show(), n.onTap(e => {
            console.log(e), t_MZ6K({ title: M[1718] }), M[1719] == e.errMsg ? o.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : o.do_login(), n.destroy();
          }));
        }, fail: function () {
          console.log(M[1720]), o.do_login();
        } }) : (console.log(M[1721] + config.is_auth), o.do_login());
    }, do_login: function (o) {
      var r = this;wx.login({ success: function (e) {
          if (console.log(M[1722] + JSON.stringify(e)), e.code) {
            var t = r.getPublicData();if (t.is_from_min = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", t_FKM6Z && M[827] == typeof t_FKM6Z) for (var n in t_FKM6Z) t[n] = t_FKM6Z[n];var a;config.is_auth ? wx.getUserInfo({ success: function (e) {
                var n = e.encryptedData;var o = e.iv;e = e.signature;t.encryptedData = n, t.iv = o, t.signature = e, wx.request({ url: M[1723] + HOST + M[1724], method: M[220], dataType: M[1172], header: { "content-type": M[362] }, data: t, success: function (e) {
                    if (console.log(M[1725]), console.log(e), 200 == e.statusCode) {
                      e = e.data;if (e.state) {
                        var n = { userid: e.data.user_id, account: e.data.nick_name, token: e.data.token, invite_uid: e.data.invite_uid || "", invite_nickname: e.data.invite_nickname || "", invite_head_img: e.data.invite_head_img || "", head_img: e.data.head_img || "", is_client: e.data.is_client || "0", ios_pay: e.data.ios_pay || "0" };try {
                          wx.setStorageSync("plat_sdk_token", e.data.sdk_token), wx.setStorageSync("plat_uid", e.data.user_id), wx.setStorageSync("plat_username", e.data.username), e.data.ext && wx.setStorageSync("plat_session_key", e.data.ext);
                        } catch (e) {}i.login && i.login(0, n);
                      } else i.login && i.login(1, { errMsg: e.msg });r.getShareInfo(M[1726], function (e) {
                        console.log(M[1727]), wx.onShareAppMessage(function () {
                          return r.logStartShare(M[1726]), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else i.login && i.login(1, { errMsg: M[1728] });
                  }, fail: function (e) {
                    i.login && i.login(1, { errMsg: e.errMsg });
                  } });
              }, fail: function (e) {
                i.login && i.login(1, { errMsg: e.errMsg });
              } }) : (a = Date.now(), wx.request({ url: M[1723] + HOST + M[1724], method: M[220], dataType: M[1172], header: { "content-type": M[362] }, data: t, success: function (e) {
                if (console.log(M[1725]), console.log(e), requestCallback = !0, loginHandler && clearTimeout(loginHandler), loginHandler = null, 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    var o = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync("plat_sdk_token", n.data.sdk_token), wx.setStorageSync("plat_uid", n.data.user_id), wx.setStorageSync("plat_username", n.data.username), n.data.ext && wx.setStorageSync("plat_session_key", n.data.ext);
                    } catch (e) {}i.login && i.login(0, o);
                  } else i.login && i.login(1, { type: M[1729], errMsg: n.msg, time: Date.now() - a, res: e });r.getShareInfo(M[1726], function (e) {
                    console.log(M[1727]), wx.onShareAppMessage(function () {
                      return r.logStartShare(M[1726]), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else i.login && i.login(1, { type: M[1729], errMsg: M[1728], time: Date.now() - a, res: e });
              }, fail: function (e) {
                console.log(M[1730]), console.log(e), r.log(M[598], { event: M[1731] }), requestCallback = !0, loginHandler && clearTimeout(loginHandler), loginHandler = null, i.login && i.login(1, { type: M[1732], errMsg: e.errMsg, time: Date.now() - a, res: e });
              } }), requestCallback || (loginHandler = setTimeout(function () {
              console.log(M[1733]), r.log(M[598], { event: M[1734] }), i.login && i.login(1, { type: M[1735], errMsg: M[1736], time: Date.now() - a }), i.login = null;
            }, 2e4)));
          } else i.login && i.login(1, { type: M[1737], errMsg: e.errMsg, res: e });
        }, fail: function (e) {
          console.log(M[1738] + JSON.stringify(e)), -1 < e.errMsg.indexOf(M[1739]) || e.errMsg.indexOf(M[1740]), i.login && i.login(1, { type: M[1741], errMsg: e.errMsg, res: e });
        } });
    }, share: function (e) {
      i.share = M[928] == typeof callback ? callback : null;var n = e.type || M[323];console.log(M[1742] + n);var o = this;this.getShareInfo(n, function (e) {
        o.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync("plat_sdk_token");wx.request({ url: M[1723] + HOST + M[1743], method: M[220], dataType: M[1172], header: { "content-type": M[362] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: t_FZK6M ? t_FZK6M.server_id : "", role_id: t_FZK6M ? t_FZK6M.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(M[1744]), i.check = M[928] == typeof n ? n : null;wx.getStorageSync("plat_sdk_token");wx.request({ url: M[1723] + HOST + M[1745], method: M[220], dataType: M[1172], header: { "content-type": M[362] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          console.log(M[1746]), console.log(e), requestCallback = !0, checkHandler && clearTimeout(checkHandler), checkHandler = null, 200 == e.statusCode ? (e = e.data, config.min_app_id = e.data.min_app_id, e.state ? i.check && i.check(e.data) : i.check && i.check({ develop: 0 })) : i.check && i.check({ develop: 0 });
        }, fail: function (e) {
          console.log(M[1747]), console.log(e), requestCallback = !0, checkHandler && clearTimeout(checkHandler), checkHandler = null, i.check && i.check({ develop: 0 });
        } }), requestCallback || (checkHandler = setTimeout(function () {
        console.log(M[1748]), i.check && i.check({ develop: 0 }), i.check = null;
      }, 1e4));
    }, getShareInfo: function (e, n) {
      console.log(M[1749]);var o = wx.getStorageSync("plat_sdk_token");wx.request({ url: M[1723] + HOST + M[1750], method: M[220], dataType: M[1172], header: { "content-type": M[362] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, type: e, server_id: t_FZK6M ? t_FZK6M.server_id : "", role_id: t_FZK6M ? t_FZK6M.role_id : "", no_log: 1 }, success: function (e) {
          console.log(M[1751]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : i.share && i.share(1, { errMsg: M[1752] + e.msg }) : i.share && i.share(1, { errMsg: M[1753] });
        } });
    }, updateShare: function (e, n, o, t, a, r) {
      console.log(M[1754]);var i = wx.getStorageSync("plat_sdk_token");wx.request({ url: M[1723] + HOST + M[1755], method: M[220], dataType: M[1172], header: { "content-type": M[362] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: o, role_id: t, sever_id: a, scene: r }, success: function (e) {
          console.log(M[1756]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(M[1757]);var o = wx.getStorageSync("plat_sdk_token");wx.request({ url: M[1723] + HOST + M[1758], method: M[220], dataType: M[1172], header: { "content-type": M[362] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, content: e }, success: function (e) {
          console.log(M[1759]), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var o = this;wx.checkSession({ success: function () {
          o.startPay(e, n);
        }, fail: function () {
          console.log(M[1760]), o.login({}, function () {
            o.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log(M[1761]), console.log(e);var o = this;i.pay = M[928] == typeof n ? n : null;n = wx.getStorageSync("plat_sdk_token");var t = wx.getStorageSync("plat_session_key");var a;n && t ? (a = wx.getSystemInfoSync(), e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: t, platform: a.platform }, o.order_data = e, (n = o.getPublicData()).order_data = JSON.stringify(e), n.is_from_min = 1, wx.request({ url: M[1723] + HOST + M[1762], method: M[220], dataType: M[1172], header: { "content-type": M[362] }, data: n, success: function (e) {
          console.log(M[1763]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? M[111] == a.platform || M[114] == a.platform ? e.data.is_android_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : o.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : wx.showModal({ title: M[1764], content: M[1765], confirmText: M[1766], showCancel: !1 }) : o.minPay(e.data) : i.pay && i.pay(1, { errMsg: e.msg }) : i.login && i.login(1, { errMsg: M[1728] });
        } })) : i.pay && i.pay(1, { errMsg: M[1767] });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: config.min_app_id, path: M[1768] + e.orderId + M[1769] + e.money, extraData: {}, envVersion: M[1770], success(e) {} });
    }, minPay: function (n) {
      var o = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          M[1771] == e.errMsg && (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, i.pay && i.pay(0, e));
        }, fail: function (e) {
          M[1772] == e.errMsg ? i.pay && i.pay(2, { errMsg: M[1773] }) : i.pay && i.pay(1, { errMsg: M[1774] + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var o = this;n.buyQuantity <= n.balance ? (console.log(M[1775]), wx.showModal({ title: M[1764], content: M[1776] + n.balance + M[1777] + n.buyQuantity + M[1778], showCancel: !1, confirmText: M[1766], success: function () {
          o.gameGoPay(n);
        } })) : (console.log(M[1779]), wx.requestMidasPayment({ mode: M[1780], env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          M[1781] == e.errMsg && o.gameGoPay(n);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(M[1782]) ? i.pay && i.pay(2, { errMsg: M[1773] }) : i.pay && i.pay(1, { errMsg: M[1774] + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      t_FKMZ6 = e.orderId, wx.showModal({ title: M[1764], content: M[1783], showCancel: !1, confirmText: M[1766], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: M[1784], sendMessageImg: M[1785] });
        } });
    }, gameGoPay: function (n, e) {
      console.log(M[1786]);var o = this;var t = wx.getStorageSync("plat_session_key");wx.request({ url: M[1723] + HOST + M[1787] + config.partner_id + "/" + config.game_pkg + "/", method: M[220], dataType: M[1172], header: { "content-type": M[362] }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: t }, success: function (e) {
          console.log(M[1788]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, i.pay && i.pay(0, e)) : i.pay && i.pay(1, { errMsg: M[1789] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync("plat_uid");var o = wx.getStorageSync("plat_username");var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (t_FZK6M = { role_id: e.roleid, server_id: e.serverid }), this.log(M[435], t);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync("plat_uid");var o = wx.getStorageSync("plat_username");var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (t_FZK6M = { role_id: e.roleid, server_id: e.serverid }), this.log(M[1790], t), t_FKM6Z && this.updateShare(t_FKM6Z.invite, t_FKM6Z.invite_type, t_FKM6Z.is_new, e.roleid, e.serverid, t_FKM6Z.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync("plat_uid");var o = wx.getStorageSync("plat_username");var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (t_FZK6M = { role_id: e.roleid, server_id: e.serverid }), this.log(M[1791], t);
    }, uuid: function (e, n) {
      var o = M[1792].split("");var t,
          a = [];var r;if (e = e || o.length, n) for (t = 0; t < n; t++) a[t] = o[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = o[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync("plat_uuid");var o = wx.getStorageSync("plat_idfv");var t = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: n, idfv: o, dname: e.model, mac: M[1793], net_type: 0 == e.wifiSignal ? "4G" : M[1794], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: M[111] == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var o = this.getPublicData();for (var t in n) o[t] = n[t];console.log(M[1795] + e), console.log(o), wx.request({ url: M[1723] + HOST + M[1796] + e + M[1797] + encodeURIComponent(JSON.stringify(o)), success: function (e) {}, fail: function (e) {} });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, subscribeMessage: function (e, n) {
      console.log(M[1798] + e), i.subscribeMessage = M[928] == typeof n ? n : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log(M[1799]), console.log(e), i.subscribeMessage && i.subscribeMessage(e);
        }, fail(e) {
          console.log(M[1800]), console.log(e), i.subscribeMessage && i.subscribeMessage(e);
        } });
    }, weiduanHelper: function () {
      new Dall().stebutonanimation(config.partner_id, config.game_pkg, config.game_id);
    } };
}function run(e, n, o) {
  e in t_FZKM6 && t_FZKM6[e](n, o);
}exports.init = function (e, n) {
  run(M[232], e, n);
}, exports.login = function (e) {
  run(M[253], "", e);
}, exports.pay = function (e, n) {
  run(M[310], e, n);
}, exports.openService = function () {
  run(M[324]);
}, exports.logCreateRole = function (e, n, o, t, a) {
  run(M[318], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, n, o, t, a) {
  run(M[320], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, o, t, a) {
  run(M[322], { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.share = function (e) {
  run(M[323], { type: e });
}, exports.msgCheck = function (e, n) {
  run(M[199], e, n);
}, exports.downloadClient = function () {
  run(M[1801]);
}, exports.subscribeMessage = function (e, n) {
  run(M[334], e, n);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(M[1802]);
}, exports.weiduanHelper = function () {
  run(M[326]);
};