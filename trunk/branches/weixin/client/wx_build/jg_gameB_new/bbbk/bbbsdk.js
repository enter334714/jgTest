import Dall from "./bbbhelp";var config = { game_id: "256", game_pkg: "tjqy_jgxxyx_AF", partner_id: "19", game_ver: "2.0.103", is_auth: !1, from: null, tmpId: { 1: "EINuK1ZxS2r8DUPVqymQs_JbjT6nV5o_bo-wc67bbs8", 2: "JJ3T3yUyMvF_XfMKx3fFEPYJV8iZHI4M8Do5ddeN7sM", 3: "snQEtMujGdKT78ppl6C_k6z2Tzvp3W-2E_Tr02w2pB0" }, min_app_id: "" };window.config = config;var PARTNER_SDK = mainSDK();var HOST = "sdk.sh9130.com";var t;var t_second = 0;var t_max = 300;var user_game_info = null;var user_invite_info = null;var this_order_id = null;var timeHandler = null;function mainSDK() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var t = this;var a;a = (r = wx.getStorageSync("plat_uuid")) ? 0 : (r = t.uuid(16, 32), wx.setStorageSync("plat_uuid", r), 1), (i = wx.getStorageSync("plat_idfv")) || (i = t.uuid(16, 32), wx.setStorageSync("plat_idfv", i));e = wx.getLaunchOptionsSync();var r = e.scene || "";var i;console.log("[SDK]\u5c0f\u6e38\u620f\u542f\u52a8\u53c2\u6570"), console.log(e), a && e.query && e.query.ad_code && wx.setStorageSync("plat_ad_code", e.query.ad_code), e.query && e.query.from && "" != e.query.from ? (a && wx.setStorageSync("plat_from", e.query.from), config.from = e.query.from) : (i = wx.getStorageSync("plat_from")) || "" == i || (config.from = i), console.log("from: " + config.from), t.log("start", { install: a, scene: r }), wx.showShareMenu();t = e.query && e.query.invite ? e.query.invite : "";e = e.query && e.query.invite_type ? e.query.invite_type : "";t && (user_invite_info = { invite: t, invite_type: e, is_new: a, scene: r }), o && this.checkGameVersion(o, function (e) {
        n && n(e);
      });
    }, login: function (e, n) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55");var t = this;r.login = "function" == typeof n ? n : null, config.is_auth ? wx.getSetting({ success: function (e) {
          var n, o;e.authSetting["scope.userInfo"] ? (console.log("[SDK]\u83b7\u5f97\u6388\u6743\u8bbe\u7f6e\uff1a\u5df2\u6388\u6743"), t.do_login()) : (console.log("[SDK]\u83b7\u5f97\u6388\u6743\u8bbe\u7f6e\uff1a\u672a\u6388\u6743"), wx.hideLoading({}), e = 2 * (n = wx.getSystemInfoSync()).screenWidth / 3, n.screenHeight, (o = wx.createUserInfoButton({ type: "text", text: "\u6388\u6743\u767b\u5f55\u6e38\u620f", withCredentials: !1, style: { top: n.windowHeight / 2 + n.windowHeight / 4, left: n.windowWidth / 2 - 100, width: 200, height: 40, lineHeight: 40, backgroundColor: "#07c160", color: "#ffffff", textAlign: "center", fontSize: 16, borderRadius: 4 } })).show(), o.onTap(e => {
            console.log(e), wxShowLoading({ title: "\u6b63\u5728\u767b\u5f55\u6e38\u620f" }), "getUserInfo:ok" == e.errMsg ? t.do_login({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }) : t.do_login(), o.destroy();
          }));
        }, fail: function () {
          console.log("[SDK]\u83b7\u5f97\u6388\u6743\u8bbe\u7f6e\uff1a\u5931\u8d25"), t.do_login();
        } }) : (console.log("[SDK]\u6388\u6743\u767b\u5f55" + config.is_auth), t.do_login());
    }, do_login: function (o) {
      var a = this;wx.login({ success: function (e) {
          if (console.log("\u5fae\u4fe1\u767b\u5f55\u6210\u529f\u8fd4\u56de" + JSON.stringify(e)), e.code) {
            var t = a.getPublicData();if (t.is_from_min = 1, t.code = e.code, t.nick_name = o ? o.nick_name : "", t.head_img = o ? o.head_img : "", user_invite_info && "object" == typeof user_invite_info) for (var n in user_invite_info) t[n] = user_invite_info[n];config.is_auth ? wx.getUserInfo({ success: function (e) {
                var n = e.encryptedData;var o = e.iv;e = e.signature;t.encryptedData = n, t.iv = o, t.signature = e, wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
                    if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a"), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync("plat_sdk_token", n.data.sdk_token), wx.setStorageSync("plat_uid", n.data.user_id), wx.setStorageSync("plat_username", n.data.username), n.data.ext && wx.setStorageSync("plat_session_key", n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo("menu", function (e) {
                        console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab"), wx.onShareAppMessage(function () {
                          return a.logStartShare("menu"), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
                  }, fail: function (e) {
                    r.login && r.login(1, { errMsg: e.errMsg });
                  } });
              }, fail: function (e) {
                r.login && r.login(1, { errMsg: e.errMsg });
              } }) : wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: t, success: function (e) {
                if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a"), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync("plat_sdk_token", n.data.sdk_token), wx.setStorageSync("plat_uid", n.data.user_id), wx.setStorageSync("plat_username", n.data.username), n.data.ext && wx.setStorageSync("plat_session_key", n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });a.getShareInfo("menu", function (e) {
                    console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab"), wx.onShareAppMessage(function () {
                      return a.logStartShare("menu"), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          console.log("\u5fae\u4fe1\u767b\u5f55\u5931\u8d25" + JSON.stringify(e)), (-1 < e.errMsg.indexOf("auth deny") || -1 < e.errMsg.indexOf("auth denied")) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = "function" == typeof callback ? callback : null;var n = e.type || "share";console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + n);var o = this;this.getShareInfo(n, function (e) {
        o.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=logStartShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u6210\u529f"), console.log(e), timeHandler && clearTimeout(timeHandler), 200 == e.statusCode ? (e = e.data, config.min_app_id = e.data.min_app_id, e.state ? n && n(e.data) : n && n({ develop: 0 })) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u5931\u8d25"), console.log(e), timeHandler && clearTimeout(timeHandler), n && n({ develop: 0 });
        } });timeHandler = setTimeout(function () {
        console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u8d85\u65f6"), n && n({ develop: 0 });
      }, 1e4);
    }, getShareInfo: function (e, n) {
      console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570");var o = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=shareConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, type: e, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", no_log: 1 }, success: function (e) {
          console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570\u7ed3\u679c"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: "\u5206\u4eab\u5931\u8d25\uff1a" + e.msg }) : r.share && r.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u6570\u636e\u5931\u8d25\uff01" });
        } });
    }, updateShare: function (e, n, o, t, a, r) {
      console.log("[SDK]\u5206\u4eab\u8fc7\u6765\u7684\u73a9\u5bb6\u4e0a\u62a5\u7ed9\u670d\u52a1\u5668");var i = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: o, role_id: t, sever_id: a, scene: r }, success: function (e) {
          console.log("[SDK]\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:"), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9");var o = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=msgSecCheck", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, content: e }, success: function (e) {
          console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9\u7ed3\u679c\u8fd4\u56de:"), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var o = this;wx.checkSession({ success: function () {
          o.startPay(e, n);
        }, fail: function () {
          console.log("[SDK]session\u8fc7\u671f\u9700\u8981\u91cd\u65b0\u767b\u5f55"), o.login({}, function () {
            o.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a"), console.log(e);var o = this;r.pay = "function" == typeof n ? n : null;var t = wx.getStorageSync("plat_sdk_token");n = wx.getStorageSync("plat_session_key");var a;t && n ? (a = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: t, session_key: n, platform: a.platform }, o.order_data = t, (n = o.getPublicData()).order_data = JSON.stringify(t), n.is_from_min = 1, wx.request({ url: "https://" + HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (e) {
          console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? "android" == a.platform || "windows" == a.platform ? e.data.is_android_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : o.gamePay(e.data) : e.data.is_ios_pay ? 1 == e.data.ios_pay_type ? o.kfPay(e.data) : 2 == e.data.ios_pay_type && o.xiaoPay(e.data) : wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: "\u5f88\u62b1\u6b49\uff0c\u7531\u4e8e\u82f9\u679c\u653f\u7b56\uff0c\u6682\u65f6\u4e0d\u80fd\u652f\u4ed8\uff0c\u5b89\u5353\u624b\u673a\u4e0d\u53d7\u5f71\u54cd", confirmText: "\u6211\u77e5\u9053\u4e86", showCancel: !1 }) : o.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } })) : r.pay && r.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, xiaoPay: function (e) {
      wx.navigateToMiniProgram({ appId: config.min_app_id, path: "pages/pay/pay?order_id=" + e.orderId + "&money=" + e.money, extraData: {}, envVersion: "release", success(e) {} });
    }, minPay: function (n) {
      var o = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          "requestPayment:ok" == e.errMsg && (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          "requestPayment:fail cancel" == e.errMsg ? r.pay && r.pay(2, { errMsg: "\u7528\u6237\u53d6\u6d88\u652f\u4ed8" }) : r.pay && r.pay(1, { errMsg: "\u652f\u4ed8\u5931\u8d25:" + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var o = this;n.buyQuantity <= n.balance ? (console.log("[SDK]\u6e38\u620f\u5e01\u5145\u503c\u76f4\u63a5\u6263\u9664"), wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: "\u60a8\u8fd8\u6709" + n.balance + "\u4e2a\u6e38\u620f\u5e01\u672a\u6d88\u8d39\uff0c\u672c\u6b21\u652f\u4ed8\u5c06\u6263\u9664" + n.buyQuantity + "\u6e38\u620f\u5e01", showCancel: !1, confirmText: "\u6211\u77e5\u9053\u4e86", success: function () {
          o.gameGoPay(n);
        } })) : (console.log("[SDK]\u8c03\u8d77\u7c73\u5927\u5e08\u652f\u4ed8"), wx.requestMidasPayment({ mode: "game", env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          "requestMidasPayment:ok" == e.errMsg && o.gameGoPay(n);
        }, fail: function (e) {
          -1 !== e.errMsg.indexOf("\u7528\u6237\u53d6\u6d88") ? r.pay && r.pay(2, { errMsg: "\u7528\u6237\u53d6\u6d88\u652f\u4ed8" }) : r.pay && r.pay(1, { errMsg: "\u652f\u4ed8\u5931\u8d25:" + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      this_order_id = e.orderId, wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: '\u5373\u5c06\u6253\u5f00\u5ba2\u670d\u804a\u5929\u754c\u9762\uff0c\u8f93\u5165"cz"\u6216\u8005"\u5145\u503c"\u53ef\u4ee5\u83b7\u53d6\u652f\u4ed8\u94fe\u63a5', showCancel: !1, confirmText: "\u6211\u77e5\u9053\u4e86", success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: "\u70b9\u6211\u5145\u503c", sendMessageImg: "https://static.sh9130.com/gw/images/WechatIMG700.png" });
        } });
    }, gameGoPay: function (n, e) {
      console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u5b8c\u6bd5\uff0c\u901a\u77e5\u670d\u52a1\u5668\u53d1\u8d27");var o = this;var t = wx.getStorageSync("plat_session_key");wx.request({ url: "https://" + HOST + "/partner/pay/" + config.partner_id + "/" + config.game_pkg + "/", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: t }, success: function (e) {
          console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u7ed3\u679c"), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: o.order_data.cpbill, orderNo: n.orderId, amount: o.order_data.price, extension: o.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: "\u652f\u4ed8\u5931\u8d25" }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync("plat_uid");var o = wx.getStorageSync("plat_username");var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", t);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync("plat_uid");var o = wx.getStorageSync("plat_username");var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", t), user_invite_info && this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, e.roleid, e.serverid, user_invite_info.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync("plat_uid");var o = wx.getStorageSync("plat_username");var t = {};t.user_id = n, t.user_name = o, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", t);
    }, uuid: function (e, n) {
      var o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var t,
          a = [];var r;if (e = e || o.length, n) for (t = 0; t < n; t++) a[t] = o[0 | Math.random() * e];else for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", t = 0; t < 36; t++) a[t] || (r = 0 | 16 * Math.random(), a[t] = o[19 == t ? 3 & r | 8 : r]);return a.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync("plat_uuid");var o = wx.getStorageSync("plat_idfv");var t = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: t, uuid: n, idfv: o, dname: e.model, mac: "0000", net_type: 0 == e.wifiSignal ? "4G" : "WIFI", os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: "android" == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var o = this.getPublicData();for (var t in n) o[t] = n[t];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(o), wx.request({ url: "https://" + HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(o)), success: function (e) {}, fail: function (e) {} });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, subscribeMessage: function (e, n) {
      console.log("[SDK]\u8ba2\u9605\u6d88\u606f\uff1a" + e), r.subscribeMessage = "function" == typeof n ? n : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u8fd4\u56de\uff1a\u6210\u529f"), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        }, fail(e) {
          console.log("[SDK]\u8ba2\u9605\u6d88\u606f\u8fd4\u56de\uff1a\u5931\u8d25"), console.log(e), r.subscribeMessage && r.subscribeMessage(e);
        } });
    }, weiduanHelper: function () {
      new Dall().stebutonanimation(config.partner_id, config.game_pkg, config.game_id);
    } };
}function run(e, n, o) {
  e in PARTNER_SDK && PARTNER_SDK[e](n, o);
}exports.init = function (e, n) {
  run("init", e, n);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.pay = function (e, n) {
  run("pay", e, n);
}, exports.openService = function () {
  run("openService");
}, exports.logCreateRole = function (e, n, o, t, a) {
  run("logCreateRole", { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logEnterGame = function (e, n, o, t, a) {
  run("logEnterGame", { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.logRoleUpLevel = function (e, n, o, t, a) {
  run("logRoleUpLevel", { serverid: e, servername: n, roleid: o, rolename: t, rolelevel: a });
}, exports.share = function (e) {
  run("share", { type: e });
}, exports.msgCheck = function (e, n) {
  run("msgCheck", e, n);
}, exports.downloadClient = function () {
  run("downloadClient");
}, exports.subscribeMessage = function (e, n) {
  run("subscribeMessage", e, n);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run("getPublicData");
}, exports.weiduanHelper = function () {
  run("weiduanHelper");
};