var p = wx.$h;
var config = { game_id: "2", game_pkg: p[68906], partner_id: "4", is_auth: !1, from: null };var $aBED = $aDEB();var HOST = "https://sdk.357pk.net";var $aBE = null;var $aDBE = null;var game_ver = "";function $aDEB() {
  var a = {};return { order_data: {}, init: function (e, o) {
      game_ver = e && e.game_ver ? e.game_ver : 0, console.log(p[68907]);var t = this;var n;n = (r = wx.getStorageSync("plat_uuid")) ? 0 : (r = t.uuid(16, 32), wx.setStorageSync("plat_uuid", r), 1), (e = wx.getStorageSync("plat_idfv")) || (e = t.uuid(16, 32), wx.setStorageSync("plat_idfv", e));var r = wx.getLaunchOptionsSync();e = r.scene || "";console.log(p[68908]), console.log(r), n && r.query && r.query.ad_code && wx.setStorageSync("plat_ad_code", r.query.ad_code), r.query && r.query.from && "" != r.query.from ? (n && wx.setStorageSync("plat_from", r.query.from), config.from = r.query.from) : (r = wx.getStorageSync("plat_from")) || "" == r || (config.from = r), console.log(config.from), t.log(p[68909], { install: n, scene: e }), wx.showShareMenu(), game_ver && this.checkGameVersion(game_ver, function (e) {
        o && o(e);
      });
    }, login: function (e, o) {
      console.log(p[68910]);var n = this;a.login = "function" == typeof o ? o : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var o, t;e.authSetting["scope.userInfo"] ? (console.log(p[68911]), n.do_login()) : (console.log(p[68912]), wx.hideLoading({}), e = 2 * (o = wx.getSystemInfoSync()).screenWidth / 3, o.screenHeight, (t = wx.createUserInfoButton({ type: p[68091], text: p[68913], withCredentials: !1, style: { top: o.windowHeight / 2 + o.windowHeight / 4, left: o.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: p[68914], color: p[61706], textAlign: p[60423], fontSize: 16, borderRadius: 4 } })).show(), t.onTap(e => {
            console.log(e), $aACBD({ title: p[68915] }), p[68916] == e.errMsg ? n.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : n.do_login(), t.destroy();
          }));
        }, fail: function () {
          console.log(p[68917]), n.do_login();
        } }) : (console.log(p[68918] + config.is_auth), n.do_login());
    }, do_login: function (o) {
      var t = this;wx.login({ success: function (e) {
          var n;console.log(p[68919] + JSON.stringify(e)), e.code ? ((n = t.getPublicData()).mo = 1, n.code = e.code, n.nick_name = o ? o.nick_name : "", n.head_img = o ? o.head_img : "", config.is_auth ? wx.getUserInfo({ success: function (e) {
              var o = e.encryptedData;var t = e.iv;e = e.signature;n.encryptedData = o, n.iv = t, n.signature = e, wx.request({ url: HOST + "/partner/auth", method: p[68920], dataType: p[68921], header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (e) {
                  if (console.log(p[68922]), console.log(e), 200 == e.statusCode) {
                    var o = e.data;if (o.state) {
                      e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                        wx.setStorageSync("plat_sdk_token", o.data.sdk_token), wx.setStorageSync("plat_uid", o.data.user_id), wx.setStorageSync("plat_username", o.data.username), o.data.ext && wx.setStorageSync("plat_session_key", o.data.ext);
                      } catch (e) {}a.login && a.login(0, e);
                    } else a.login && a.login(1, { errMsg: o.msg });
                  } else a.login && a.login(1, { errMsg: p[68923] });
                }, fail: function (e) {
                  a.login && a.login(1, { errMsg: e.errMsg });
                } });
            }, fail: function (e) {
              a.login && a.login(1, { errMsg: e.errMsg });
            } }) : wx.request({ url: HOST + "/partner/auth", method: p[68920], dataType: p[68921], header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (e) {
              if (console.log(p[68922]), console.log(e), 200 == e.statusCode) {
                var o = e.data;if (o.state) {
                  e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token };try {
                    wx.setStorageSync("plat_sdk_token", o.data.sdk_token), wx.setStorageSync("plat_uid", o.data.user_id), wx.setStorageSync("plat_username", o.data.username), o.data.ext && wx.setStorageSync("plat_session_key", o.data.ext);
                  } catch (e) {}a.login && a.login(0, e);
                } else a.login && a.login(1, { errMsg: o.msg });
              } else a.login && a.login(1, { errMsg: p[68924] });
            } })) : a.login && a.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log(p[68925] + JSON.stringify(e)), (-1 < e.errMsg.indexOf("auth deny") || -1 < e.errMsg.indexOf("auth denied")) && a.login && a.login(1, { errMsg: e.errMsg });
        } });
    }, checkGameVersion: function (e, t) {
      console.log(p[68926]);wx.getStorageSync("plat_sdk_token");wx.request({ url: HOST + p[68927], method: p[68920], dataType: p[68921], header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var o;console.log(p[68928]), console.log(e), 200 == e.statusCode && (o = e.data).state ? t && t(o.data) : t && t({ develop: 0 });
        }, fail: function (e) {
          console.log(e);
        } });
    }, pay: function (e, o) {
      var t = this;wx.checkSession({ success: function () {
          t.startPay(e, o);
        }, fail: function () {
          console.log(p[68929]), t.login({}, function () {
            t.startPay(e, o);
          });
        } });
    }, startPay: function (e, o) {
      console.log(p[68930]), console.log(e);var t = this;a.pay = "function" == typeof o ? o : null;var n = wx.getStorageSync("plat_sdk_token");o = wx.getStorageSync("plat_session_key");var r;n && o ? (r = wx.getSystemInfoSync(), n = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: o, platform: r.platform }, t.order_data = n, (o = t.getPublicData()).order_data = JSON.stringify(n), wx.request({ url: HOST + "/partner/order", method: p[68920], dataType: p[68921], header: { "content-type": "application/x-www-form-urlencoded" }, data: o, success: function (e) {
          console.log(p[68931]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? p[68932] == r.platform || p[68933] == r.platform || p[68934] == r.platform ? e.data.is_android_pay ? t.kfPay(e.data) : t.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type && t.kfPay(e.data) : wx.showModal({ title: p[68935], content: p[68936], confirmText: p[68937], showCancel: !1 }) : t.minPay(e.data) : a.pay && a.pay(1, { errMsg: e.msg }) : a.login && a.login(1, { errMsg: p[68938] });
        } })) : a.pay && a.pay(1, { errMsg: p[68939] });
    }, gamePay: function (o) {
      var t = this;o.buyQuantity <= o.balance ? (console.log(p[68940]), wx.showModal({ title: p[68935], content: p[68941] + o.balance + p[68942] + o.buyQuantity + p[68943], showCancel: !1, confirmText: p[68937], success: function () {
          t.gameGoPay(o);
        } })) : (console.log(p[68944]), console.log(o), wx.requestMidasPayment({ mode: p[68945], env: o.env, offerId: o.offerId, currencyType: o.currencyType, platform: o.platform, buyQuantity: o.buyQuantity, zoneId: o.zoneId, success: function (e) {
          "requestMidasPayment:ok" == e.errMsg && t.gameGoPay(o);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf(p[68946]) ? a.pay && a.pay(2, { errMsg: p[68947] }) : a.pay && a.pay(1, { errMsg: p[68948] + e.errMsg + "(" + e.errCode + ")" });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      $aDBE = e.orderId, wx.showModal({ title: p[68935], content: p[68949], showCancel: !1, confirmText: p[68937], success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: p[68950], sendMessageImg: "https://static.sh9130.com/gw/images/WechatIMG700.png" });
        } });
    }, gameGoPay: function (o, e) {
      console.log(p[68951]);var t = this;var n = wx.getStorageSync("plat_session_key");wx.request({ url: HOST + "/partner/pay/" + config.partner_id + "/" + config.game_pkg + "/", method: p[68920], dataType: p[68921], header: { "content-type": "application/x-www-form-urlencoded" }, data: { order_id: o.orderId, time: o.time, sign: o.sign, session_key: n }, success: function (e) {
          console.log(p[68952]), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: t.order_data.cpbill, orderNo: o.orderId, amount: t.order_data.price, extension: t.order_data.extension }, a.pay && a.pay(0, e)) : a.pay && a.pay(1, { errMsg: p[68953] }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var n = {};n.user_id = o, n.user_name = t, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && ($aBE = { role_id: e.roleid, server_id: e.serverid }), this.log(p[60027], n);
    }, logEnterGame: function (e) {
      var o = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var n = {};n.user_id = o, n.user_name = t, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && ($aBE = { role_id: e.roleid, server_id: e.serverid }), this.log(p[68954], n);
    }, logRoleUpLevel: function (e) {
      var o = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var n = {};n.user_id = o, n.user_name = t, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && ($aBE = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", n);
    }, uuid: function (e, o) {
      var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var n,
          r = [];var a;if (e = e || t.length, o) for (n = 0; n < o; n++) r[n] = t[0 | Math.random() * e];else for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", n = 0; n < 36; n++) r[n] || (a = 0 | 16 * Math.random(), r[n] = t[19 == n ? 3 & a | 8 : a]);return r.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var o = wx.getStorageSync("plat_uuid");var t = wx.getStorageSync("plat_idfv");var n = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: n, uuid: o, idfv: t, dname: e.model, mac: p[68955], net_type: 0 == e.wifiSignal ? "4G" : p[68956], os_ver: e.system, sdk_ver: e.version, game_ver: game_ver, device: p[68932] == e.platform ? 1 : 2, is_from_min: 1 };
    }, log: function (e, o) {
      var t = this.getPublicData();for (var n in o) t[n] = o[n];console.log(p[68957] + e), console.log(t), wx.request({ url: HOST + "/partner/h5Log/?type=" + e + p[68958] + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, checkMsg: function (e, o) {
      console.log(p[68959]);var t = wx.getStorageSync("plat_sdk_token");wx.request({ url: HOST + p[68960], method: p[68920], dataType: p[68921], header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, content: e }, success: function (e) {
          console.log(p[68961]), o && o(0 == e.data.code ? 1 : 0, e.data.msg);
        } });
    } };
}function run(e, o, t) {
  e in $aBED && $aBED[e](o, t);
}exports.init = function (e, o) {
  run(p[67821], e, o);
}, exports.login = function (e) {
  run(p[68962], "", e);
}, exports.pay = function (e, o) {
  run("pay", e, o);
}, exports.logCreateRole = function (e, o, t, n, r) {
  run(p[68963], { serverid: e, servername: o, roleid: t, rolename: n, rolelevel: r });
}, exports.logEnterGame = function (e, o, t, n, r) {
  run(p[68964], { serverid: e, servername: o, roleid: t, rolename: n, rolelevel: r });
}, exports.logRoleUpLevel = function (e, o, t, n, r) {
  run("logRoleUpLevel", { serverid: e, servername: o, roleid: t, rolename: n, rolelevel: r });
}, exports.downloadClient = function () {
  run(p[68965]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run("getPublicData");
}, exports.checkMsg = function (e, o) {
  run(p[68966], e, o);
};