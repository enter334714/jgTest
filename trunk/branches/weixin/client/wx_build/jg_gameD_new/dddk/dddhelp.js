var config = { game_id: "699", game_pkg: "tjqy_jyhjl_AF", partner_id: "5156", game_ver: "4.0.1", is_auth: "1", btn_img: "", btn_bg: "" };var PARTNER_SDK = mainSDK();var HOST = "sdk.9187.cn";var t;var t_second = 0;var t_max = 300;var user_game_info = null;var user_invite_info = null;var this_order_id = null;var btnImg_url = "";function mainSDK() {
  var r = {};return { order_data: {}, init: function (e, n) {
      var t = e && e.game_ver ? e.game_ver : 0;console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var a = this;var o;o = (r = wx.getStorageSync("plat_uuid")) ? 0 : (r = a.uuid(16, 32), wx.setStorageSync("plat_uuid", r), 1), (e = wx.getStorageSync("plat_idfv")) || (e = a.uuid(16, 32), wx.setStorageSync("plat_idfv", e));var r = wx.getLaunchOptionsSync();e = r.scene || "";o && r.query && r.query.ad_code && wx.setStorageSync("plat_ad_code", r.query.ad_code), a.log("start", { install: o, scene: e }), wx.showShareMenu();a = r.query && r.query.invite ? r.query.invite : "";r = r.query && r.query.invite_type ? r.query.invite_type : "";a && (user_invite_info = { invite: a, invite_type: r, is_new: o, scene: e }), t && this.checkGameVersion(t, function (e) {
        config.is_auth = e.is_auth, config.btn_bg = e.auth_bg_image, config.btn_img = e.auth_button_image, n && n(e);
      });
    }, login: function (e, n) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55");var i = this;r.login = "function" == typeof n ? n : null, "1" == config.is_auth ? wx.getSetting({ success: function (e) {
          var t, a, o, r;e.authSetting["scope.userInfo"] ? i.do_login1() : (e = wx.getSystemInfoSync(), t = e.screenWidth, a = e.screenHeight, (r = wx.createImage()).src = config.btn_img, r.onload = function () {
            o = .15 * a;var n = wx.createUserInfoButton({ type: "image", image: r.src, style: { left: (t - t) / 2, top: a / 1.35, width: t, height: o } });n.onTap(function (e) {
              console.log(e), "getUserInfo:ok" == e.errMsg && (i.do_login1({ head_img: e.userInfo.avatarUrl || "", nick_name: e.userInfo.nickName || "" }), n.destroy());
            });
          });
        }, fail: function () {
          i.do_login2();
        } }) : i.do_login2();
    }, do_login1: function (t) {
      var o = this;wx.login({ success: function (e) {
          if (console.log("\u5fae\u4fe1\u767b\u5f55\u8fd4\u56de" + JSON.stringify(e)), e.code) {
            var a = o.getPublicData();if (a.is_from_min = 1, a.code = e.code, a.nick_name = t ? t.nick_name : "", a.head_img = t ? t.head_img : "", user_invite_info && "object" == typeof user_invite_info) for (var n in user_invite_info) a[n] = user_invite_info[n];wx.getUserInfo({ success: function (e) {
                console.log("getUserInfo:" + JSON.stringify(e));var n = e.encryptedData;var t = e.iv;e = e.signature;a.encryptedData = encodeURIComponent(n), a.iv = encodeURIComponent(t), a.signature = e, wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: a, success: function (e) {
                    if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a"), console.log(e), 200 == e.statusCode) {
                      var n = e.data;if (n.state) {
                        e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                          wx.setStorageSync("plat_sdk_token", n.data.sdk_token), wx.setStorageSync("plat_uid", n.data.user_id), wx.setStorageSync("plat_username", n.data.username), n.data.ext && wx.setStorageSync("plat_session_key", n.data.ext);
                        } catch (e) {}r.login && r.login(0, e);
                      } else r.login && r.login(1, { errMsg: n.msg });o.getShareInfo("menu", function (e) {
                        console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab"), wx.onShareAppMessage(function () {
                          return o.logStartShare("menu"), { title: e.title, imageUrl: e.img, query: e.query };
                        });
                      });
                    } else r.login && r.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
                  } });
              }, fail: function (e) {
                console.log("\u5fae\u4fe1\u767b\u5f55\u9519\u8bef:" + e.errMsg);
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          (-1 < e.errMsg.indexOf("auth deny") || -1 < e.errMsg.indexOf("auth denied")) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, do_login2: function (a) {
      var o = this;wx.login({ success: function (e) {
          if (console.log("\u5fae\u4fe1\u767b\u5f55\u8fd4\u56de" + JSON.stringify(e)), e.code) {
            var n = o.getPublicData();if (n.is_from_min = 1, n.code = e.code, n.nick_name = a ? a.nick_name : "", n.head_img = a ? a.head_img : "", user_invite_info && "object" == typeof user_invite_info) for (var t in user_invite_info) n[t] = user_invite_info[t];wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (e) {
                if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a"), console.log(e), 200 == e.statusCode) {
                  var n = e.data;if (n.state) {
                    e = { userid: n.data.user_id, account: n.data.nick_name, token: n.data.token, invite_uid: n.data.invite_uid || "", invite_nickname: n.data.invite_nickname || "", invite_head_img: n.data.invite_head_img || "", head_img: n.data.head_img || "", is_client: n.data.is_client || "0", ios_pay: n.data.ios_pay || "0" };try {
                      wx.setStorageSync("plat_sdk_token", n.data.sdk_token), wx.setStorageSync("plat_uid", n.data.user_id), wx.setStorageSync("plat_username", n.data.username), n.data.ext && wx.setStorageSync("plat_session_key", n.data.ext);
                    } catch (e) {}r.login && r.login(0, e);
                  } else r.login && r.login(1, { errMsg: n.msg });o.getShareInfo("menu", function (e) {
                    console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab"), wx.onShareAppMessage(function () {
                      return o.logStartShare("menu"), { title: e.title, imageUrl: e.img, query: e.query };
                    });
                  });
                } else r.login && r.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
              } });
          } else r.login && r.login(1, { errMsg: e.errMsg });
        }, fail: function (e) {
          (-1 < e.errMsg.indexOf("auth deny") || -1 < e.errMsg.indexOf("auth denied")) && r.login && r.login(1, { errMsg: e.errMsg });
        } });
    }, share: function (e) {
      r.share = "function" == typeof callback ? callback : null;var n = e.type || "share";console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + n);var t = this;this.getShareInfo(n, function (e) {
        t.logStartShare(n), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var n = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=logStartShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, t) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("plat_sdk_token");var n = wx.getStorageSync("plat_uuid");wx.request({ url: "https://" + HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e, uuid: n }, success: function (e) {
          var n;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u7ed3\u679c"), console.log(e), 200 == e.statusCode && (n = e.data).state ? t && t(n.data) : t && t({ develop: 0 });
        } });
    }, getShareInfo: function (e, n) {
      console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570");var t = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=shareConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, type: e, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", no_log: 1 }, success: function (e) {
          console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570\u7ed3\u679c"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? n && n(e.data) : r.share && r.share(1, { errMsg: "\u5206\u4eab\u5931\u8d25\uff1a" + e.msg }) : r.share && r.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u6570\u636e\u5931\u8d25\uff01" });
        } });
    }, updateShare: function (e, n, t, a, o, r) {
      console.log("[SDK]\u5206\u4eab\u8fc7\u6765\u7684\u73a9\u5bb6\u4e0a\u62a5\u7ed9\u670d\u52a1\u5668");var i = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: n, is_new: t, role_id: a, sever_id: o, scene: r }, success: function (e) {
          console.log("[SDK]\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:"), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9");var t = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=msgSecCheck", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, content: e }, success: function (e) {
          console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9\u7ed3\u679c\u8fd4\u56de:"), console.log(e), n && n(e);
        } });
    }, pay: function (e, n) {
      var t = this;wx.checkSession({ success: function () {
          t.startPay(e, n);
        }, fail: function () {
          console.log("[SDK]session\u8fc7\u671f\u9700\u8981\u91cd\u65b0\u767b\u5f55"), t.login({}, function () {
            t.startPay(e, n);
          });
        } });
    }, startPay: function (e, n) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a"), console.log(e);var t = this;r.pay = "function" == typeof n ? n : null;var a = wx.getStorageSync("plat_sdk_token");var o = wx.getStorageSync("plat_session_key");a && o ? (n = wx.getSystemInfoSync(), o = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: a, session_key: o, platform: n.platform }, t.order_data = o, (n = t.getPublicData()).order_data = JSON.stringify(o), n.is_from_min = 1, wx.request({ url: "https://" + HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: n, success: function (e) {
          console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? void 0 === wx.requestPayment ? "android" == e.data.platform ? e.data.is_android_pay ? e.data.is_min_pay ? t.jumpPay(e.data) : t.kfPay(e.data) : t.gamePay(e.data) : e.data.is_ios_pay ? e.data.is_min_pay ? t.jumpPay(e.data) : t.kfPay(e.data) : wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: "\u5f88\u62b1\u6b49\uff0c\u7531\u4e8e\u82f9\u679c\u653f\u7b56\uff0c\u6682\u65f6\u4e0d\u80fd\u652f\u4ed8\uff0c\u5b89\u5353\u624b\u673a\u4e0d\u53d7\u5f71\u54cd", confirmText: "\u6211\u77e5\u9053\u4e86", showCancel: !1 }) : t.minPay(e.data) : r.pay && r.pay(1, { errMsg: e.msg }) : r.login && r.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } })) : r.pay && r.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, jumpPay: function (e) {
      var n = e.orderId;var t = e.money;e = e.min_pay_app_id;wx.navigateToMiniProgram({ appId: e, path: "/pages/pay/pay?order_id=" + n + "&money=" + t, extraData: {}, success(e) {}, fail(e) {} });
    }, minPay: function (n) {
      var t = this;wx.requestPayment({ timeStamp: n.timeStamp, nonceStr: n.nonceStr, package: n.package, signType: n.signType, paySign: n.paySign, success: function (e) {
          "requestPayment:ok" == e.errMsg && (e = { cpOrderNo: t.order_data.cpbill, orderNo: n.orderId, amount: t.order_data.price, extension: t.order_data.extension }, r.pay && r.pay(0, e));
        }, fail: function (e) {
          "requestPayment:fail cancel" == e.errMsg ? r.pay && r.pay(2, { errMsg: "\u7528\u6237\u53d6\u6d88\u652f\u4ed8" }) : r.pay && r.pay(1, { errMsg: "\u652f\u4ed8\u5931\u8d25:" + e.err_desc });
        }, complete: function (e) {} });
    }, gamePay: function (n) {
      var t = this;n.buyQuantity <= n.balance ? (console.log("[SDK]\u6e38\u620f\u5e01\u5145\u503c\u76f4\u63a5\u6263\u9664"), wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: "\u60a8\u8fd8\u6709" + n.balance + "\u4e2a\u6e38\u620f\u5e01\u672a\u6d88\u8d39\uff0c\u672c\u6b21\u652f\u4ed8\u5c06\u6263\u9664" + n.buyQuantity + "\u6e38\u620f\u5e01", showCancel: !1, confirmText: "\u6211\u77e5\u9053\u4e86", success: function () {
          t.gameGoPay(n);
        } })) : (console.log("[SDK]\u8c03\u8d77\u7c73\u5927\u5e08\u652f\u4ed8"), console.log(n), wx.requestMidasPayment({ mode: "game", env: n.env, offerId: n.offerId, currencyType: n.currencyType, platform: n.platform, buyQuantity: n.buyQuantity, zoneId: n.zoneId, success: function (e) {
          console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u6210\u529f"), console.log(e), "requestMidasPayment:ok" == e.errMsg && t.gameGoPay(n);
        }, fail: function (e) {
          console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u5931\u8d25"), console.log(e), -1 !== e.errMsg.indexOf("\u7528\u6237\u53d6\u6d88") ? r.pay && r.pay(2, { errMsg: "\u7528\u6237\u53d6\u6d88\u652f\u4ed8" }) : r.pay && r.pay(1, { errMsg: "\u652f\u4ed8\u5931\u8d25:" + e.errCode + "," + e.errMsg });
        }, complete: function (e) {} }));
    }, kfPay: function (e) {
      this_order_id = e.orderId, wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: '\u5373\u5c06\u6253\u5f00\u5ba2\u670d\u804a\u5929\u754c\u9762\uff0c\u8f93\u5165"cz"\u6216\u8005"\u5145\u503c"\u53ef\u4ee5\u83b7\u53d6\u652f\u4ed8\u94fe\u63a5', showCancel: !1, confirmText: "\u6211\u77e5\u9053\u4e86", success: function () {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: '\u56de\u590d"cz"\u6216"\u5145\u503c"\u83b7\u53d6\u8ba2\u5355\u94fe\u63a5', sendMessagePath: "https://pic.9187.cn/uploads/2010/171354165962.jpg", sendMessageImg: "https://pic.9187.cn/uploads/2010/171354165962.jpg" });
        } });
    }, gameGoPay: function (n, e) {
      console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u5b8c\u6bd5\uff0c\u901a\u77e5\u670d\u52a1\u5668\u53d1\u8d27");var t = this;var a = wx.getStorageSync("plat_session_key");wx.request({ url: "https://" + HOST + "/partner/pay/" + config.partner_id + "/" + config.game_pkg + "/", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { order_id: n.orderId, time: n.time, sign: n.sign, session_key: a }, success: function (e) {
          console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u7ed3\u679c"), console.log(e), 200 == e.statusCode && (1 == e.data.state ? (e = { cpOrderNo: t.order_data.cpbill, orderNo: n.orderId, amount: t.order_data.price, extension: t.order_data.extension }, r.pay && r.pay(0, e)) : r.pay && r.pay(1, { errMsg: "\u652f\u4ed8\u5931\u8d25" }));
        }, fail: function () {} });
    }, logCreateRole: function (e) {
      var n = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", a);
    }, logEnterGame: function (e) {
      var n = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("enter", a), user_invite_info && this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, e.roleid, e.serverid, user_invite_info.scene);
    }, logRoleUpLevel: function (e) {
      var n = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var a = {};a.user_id = n, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", a);
    }, uuid: function (e, n) {
      var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var a,
          o = [];var r;if (e = e || t.length, n) for (a = 0; a < n; a++) o[a] = t[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", a = 0; a < 36; a++) o[a] || (r = 0 | 16 * Math.random(), o[a] = t[19 == a ? 3 & r | 8 : r]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var n = wx.getStorageSync("plat_uuid");var t = wx.getStorageSync("plat_idfv");var a = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, ad_code: a, uuid: n, idfv: t, dname: e.model, mac: "0000", net_type: 0 == e.wifiSignal ? "4G" : "WIFI", os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: "android" == e.platform ? 1 : 2 };
    }, log: function (e, n) {
      var t = this.getPublicData();for (var a in n) t[a] = n[a];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(t), wx.request({ url: "https://" + HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(t)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: "\u7ed1\u5b9a\u5fae\u7aef\u9886\u53d6\u8c6a\u793c", sendMessagePath: "https://pic.9187.cn/uploads/2105/111727402151.jpg", sendMessageImg: "https://pic.9187.cn/uploads/2105/111727402151.jpg" });
    }, adClick: function (e) {
      var n = e.game_id;e = e.query;this.log("event", { event: "mingame_ad_click", ext1: n, ext2: e });
    } };
}function run(e, n, t) {
  e in PARTNER_SDK && PARTNER_SDK[e](n, t);
}exports.init = function (e, n) {
  run("init", e, n);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.pay = function (e, n) {
  run("pay", e, n);
}, exports.openService = function () {
  run("openService");
}, exports.logCreateRole = function (e, n, t, a, o) {
  run("logCreateRole", { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.logEnterGame = function (e, n, t, a, o) {
  run("logEnterGame", { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.logRoleUpLevel = function (e, n, t, a, o) {
  run("logRoleUpLevel", { serverid: e, servername: n, roleid: t, rolename: a, rolelevel: o });
}, exports.share = function (e) {
  run("share", { type: e });
}, exports.msgCheck = function (e, n) {
  run("msgCheck", e, n);
}, exports.downloadClient = function () {
  run("downloadClient");
}, exports.adClick = function (e, n) {
  run("adClick", { game_id: e, query: n });
};