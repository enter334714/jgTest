let hortor = require("../utils/Hortor/sdk");let hortorSdk = hortor.sdk;let wallSDK = hortorSdk.wallSDK;let partner_config = hortor.config;let wxapm = hortor.wxapm;var config = { game_id: "256", game_pkg: "tjqy_tjlywffkxyxmj_FV", partner_label: "fkxyx", partner_id: "222", game_ver: "7.0.4", partner_game_id: "xjtjqymini", is_auth: !1 };window.config = config;var partner_user_data = {};var PARTNER_SDK = mainSDK();var HOST = "sdk.sh9130.com";var user_game_info = null;var user_invite_info = null;var system = wx.getSystemInfoSync();var device = "android" == system.platform ? "android" : "ios";var userInfoBtn = "";function mainSDK() {
  var l = {};return { order_data: {}, init: function (e, r) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log("[SDK]CP\u8c03\u7528init\u63a5\u53e3");var t = this;var n;n = (a = wx.getStorageSync("plat_uuid")) ? 0 : (a = t.uuid(16, 32), wx.setStorageSync("plat_uuid", a), 1), (i = wx.getStorageSync("plat_idfv")) || (i = t.uuid(16, 32), wx.setStorageSync("plat_idfv", i));var a = wx.getLaunchOptionsSync();var i = a.scene || "";n && a.query && a.query.ad_code && wx.setStorageSync("plat_ad_code", a.query.ad_code), t.log("start", { install: n, scene: i }), partner_config.gameVersion && (partner_config.gameVersion = e.game_ver), hortor.init(partner_config);e = a.query && a.query.invite ? a.query.invite : "";a = a.query && a.query.invite_type ? a.query.invite_type : "";e && (user_invite_info = { invite: e, invite_type: a, is_new: n, scene: i }), o && this.checkGameVersion(o, function (o) {
        hortorSdk.checkSwitches({ switches: ["share", "iospay", "vipds", "gzgzh"] }).then(e => {
          console.log("checkSwitches result", e), o.is_share = e.share ? 1 : 0, o.show_pay = e.iospay ? 1 : 0, o.is_vipds = e.vipds ? 1 : 0, o.is_gzgzh = e.gzgzh ? 1 : 0, o.is_skip_create_role = o.skip_create_role ? 1 : 0, r && r(o);
        }).catch(e => {
          console.log(`获取失败，errCode=${e.errCode} errMsg=${e.errMsg}`), r && r(o);
        });
      });
    }, login: function (e, o) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55"), console.log("sdk login.............." + Date.now());var r = this;l.login = "function" == typeof o ? o : null;var t = wx.getSystemInfoSync();o = t.screenWidth;t = t.screenHeight;var n = 2 * o / 4;var a = n / 4;var i = (o - n) / 2;var s = t / 2;config.is_auth ? wx.getSetting({ success: function (e) {
          if (e.authSetting["scope.userInfo"]) hortorSdk.login().then(e => {
            console.log("[SDK]\u8054\u8fd0\u767b\u5f55\u7ed3\u679c " + JSON.stringify(e)), r.do_login(e);
          }).catch(e => {
            console.log("[SDK]\u767b\u5f55\u5931\u8d25\uff01", e);
          });else {
            const o = hortorSdk.createGetUserInfoBtn({ type: "text", text: "\u6388\u6743\u767b\u5f55\u6e38\u620f", style: { left: i, top: s, width: n, height: a, lineHeight: a, backgroundColor: "#07c160", color: "#ffffff", textAlign: "center", fontSize: 16, borderRadius: 4 } });o && (o.show(), o.onTap(e => {
              e && e.userInfo ? (console.log("[SDK]\u540c\u610f\u6388\u6743"), hortorSdk.login().then(e => {
                console.log("[SDK]\u8054\u8fd0\u767b\u5f55\u7ed3\u679c " + JSON.stringify(e)), r.do_login(e);
              }).catch(e => {
                console.log("[SDK]\u767b\u5f55\u5931\u8d25\uff01", e);
              }), o.hide()) : r.weak_login();
            }));
          }
        }, fail: function () {
          r.weak_login();
        } }) : r.weak_login();
    }, weak_login: function () {
      hortorSdk.weakLogin().then(e => {
        console.log("\u5f31\u6388\u6743\u767b\u5f55\u6210\u529f\uff01", e), this.do_login(e);
      }).catch(e => {
        console.log("\u5f31\u6388\u6743\u767b\u5f55\u5931\u8d25\uff01", e), l.login && l.login(1, { errMsg: "\u767b\u5f55\u5931\u8d25" });
      });
    }, do_login: function (e) {
      var t = this;var o = t.getPublicData();if (o.userInfo = e.encryptUserInfo || e.userInfo, o.timestamp = e.timestamp, o.sign = e.sign, o.is_from_min = 1, user_invite_info && "object" == typeof user_invite_info) for (var r in user_invite_info) o[r] = user_invite_info[r];wx.request({ url: "https://" + HOST + "/partner/auth", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: o, success: function (e) {
          if (console.log("[SDK]\u767b\u5f55\u7ed3\u679c\uff1a"), console.log(e), 200 === e.statusCode) {
            var o = e.data;if (o.state) {
              partner_user_data.uid = o.data.openid, partner_user_data.uniqueIdNew = o.data.ext.uniqueId;try {
                wx.setStorageSync("plat_sdk_token", o.data.sdk_token), wx.setStorageSync("plat_uid", o.data.user_id), wx.setStorageSync("plat_username", o.data.username), o.data.ext && wx.setStorageSync("plat_session_key", o.data.ext);
              } catch (e) {}e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token, openid: o.data.ext.uniqueId, invite_uid: o.data.invite_uid || "", invite_nickname: o.data.invite_nickname || "", invite_head_img: o.data.invite_head_img || "", head_img: o.data.head_img || "", is_client: o.data.is_client || "0", ios_pay: o.data.ios_pay || "0" };l.login && l.login(0, e);
            } else l.login && l.login(1, { errMsg: o.msg });hortorSdk.setGameUserInfo(), t.getShareInfo("menu", function (e) {
              console.log("[SDK]\u5f00\u59cb\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u5206\u4eab");var o = "default";var r = hortorSdk.getShareData({ shareType: o });console.log("[SDK]\u5206\u4eab\u7c7b\u578b default \u7684\u5206\u4eab\u65b9\u6848\u662f", JSON.stringify(r)), wx.onShareAppMessage(function () {
                return t.logStartShare("menu"), hortorSdk.sharePointShow(o), { title: r.title, imageUrl: r.imageUrl, query: r.query + "&" + e.query };
              });
            });
          } else l.login && l.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } });
    }, share: function (e) {
      l.share = "function" == typeof callback ? callback : null;var t = e.type || "share";console.log("[SDK]CP\u8c03\u7528\u5206\u4eab type=" + t);var n = this;this.getShareInfo(t, function (e) {
        var o = "Invite";var r = hortorSdk.getShareData({ shareType: o });console.log("[SDK]\u5206\u4eab\u7c7b\u578b Invite \u7684\u5206\u4eab\u65b9\u6848\u662f", r), n.logStartShare(t), hortorSdk.sharePointShow(o), wx.shareAppMessage({ title: r.title, imageUrl: r.imageUrl, query: r.query + "&" + e.query });
      });
    }, logStartShare: function (e) {
      var o = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=logStartShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", type: e }, success: function (e) {} });
    }, is_authorize: function (o) {
      console.log("[SDK]\u5224\u65ad\u662f\u5426\u6388\u6743"), wx.getSetting({ success: function (e) {
          e.authSetting["scope.userInfo"] ? o(1) : o(0);
        } });
    }, go_authorize: function (e, o) {
      console.log("[SDK]\u524d\u5f80\u6388\u6743"), (userInfoBtn = hortorSdk.createGetUserInfoBtn({ type: "image", image: "https://static.sh9130.com/uploads/images/wx_fk_btn.jpg", style: { left: e.left, top: e.top, width: e.width, height: e.height, lineHeight: e.height, textAlign: "center", fontSize: 16, borderRadius: 4 } })) && (userInfoBtn.show(), userInfoBtn.onTap(e => {
        e && e.userInfo ? (console.log("[SDK]\u540c\u610f\u6388\u6743"), hortorSdk.updateUserInfo().then(e => {
          console.log("[SDK]\u66f4\u65b0\u6210\u529f\uff01", e), o(1);
        }).catch(e => {
          console.log("[SDK]\u66f4\u65b0\u5931\u8d25\uff01", e), o(0);
        })) : (console.log("[SDK]\u62d2\u7edd\u6388\u6743"), o(0)), userInfoBtn.hide();
      }));
    }, hideUserInfoBtn: function () {
      userInfoBtn && userInfoBtn.hide();
    }, openService: function () {
      hortorSdk.customerService({ showMessageCard: !0, success: e => {
          console.log("send card success", e);
        }, fail: e => {
          console.log("send card fail:", e);
        } });
    }, goCustomer: function (e) {
      hortorSdk.goCustomer({ playerId: e.roleid, playerName: e.rolename }).then(e => {
        console.log("\u8df3\u8f6c\u6210\u529f\uff01");
      }).catch(e => {
        console.log("\u8df3\u8f6c\u5931\u8d25\uff01", e);
      });
    }, checkGameVersion: function (e, r) {
      console.log("[SDK]\u68c0\u67e5\u6e38\u620f\u7248\u672c");wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=checkGameVersion", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var o;console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u7248\u672c\u7ed3\u679c"), console.log(e), 200 == e.statusCode && (o = e.data).state ? r && r(o.data) : r && r({ develop: 0 });
        } });
    }, getShareInfo: function (e, o) {
      console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570");var r = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=shareConfig", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: user_game_info ? user_game_info.server_id : "", role_id: user_game_info ? user_game_info.role_id : "", no_log: 1 }, success: function (e) {
          console.log("[SDK]\u83b7\u53d6\u5206\u4eab\u53c2\u6570\u7ed3\u679c"), console.log(e), 200 == e.statusCode ? (e = e.data).state ? o && o(e.data) : l.share && l.share(1, { errMsg: "\u5206\u4eab\u5931\u8d25\uff1a" + e.msg }) : l.share && l.share(1, { errMsg: "\u83b7\u53d6\u5206\u4eab\u6570\u636e\u5931\u8d25\uff01" });
        } });
    }, updateShare: function (e, o, r, t, n, a) {
      console.log("[SDK]\u5206\u4eab\u8fc7\u6765\u7684\u73a9\u5bb6\u4e0a\u62a5\u7ed9\u670d\u52a1\u5668");var i = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/game/min/?ac=updateShare", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: o, is_new: r, role_id: t, sever_id: n, scene: a }, success: function (e) {
          console.log("[SDK]\u4e0a\u62a5\u5206\u4eab\u7ed3\u679c\u8fd4\u56de:"), console.log(e);
        } });
    }, msgCheck: function (e, o) {
      console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9");var r = wx.getStorageSync("plat_sdk_token");wx.request({ url: "https://" + HOST + "/partner/data/msgSecCheck/" + config.partner_id + "/" + config.game_pkg, method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, content: e, uId: partner_user_data.uid }, success: function (e) {
          console.log("[SDK]\u67e5\u770b\u6587\u672c\u662f\u5426\u6709\u8fdd\u89c4\u5185\u5bb9\u7ed3\u679c\u8fd4\u56de:"), console.log(e), o && o(e);
        } });
    }, isSubscribe: function (o) {
      console.log("[SDK]\u68c0\u67e5\u662f\u5426\u5173\u6ce8\u516c\u4f17\u53f7");var e = wx.getStorageSync("plat_session_key");wx.request({ url: "https://" + HOST + "/partner/data/is_subscribe/" + config.partner_id + "/" + config.game_pkg, method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { openid: e.uniqueId }, success: function (e) {
          console.log("[SDK]\u68c0\u67e5\u662f\u5426\u5173\u6ce8\u516c\u4f17\u53f7\u7ed3\u679c\u8fd4\u56de:", e), 1 == e.data.state ? o({ status: 1 }) : o({ status: 0 });
        } });
    }, pay: function (e, o) {
      this.startPay(e, o);
    }, startPay: function (e, o) {
      console.log("[SDK]\u8c03\u8d77\u652f\u4ed8\uff0cCP\u4f20\u503c\uff1a"), console.log(e);l.pay = "function" == typeof o ? o : null;var r = wx.getStorageSync("plat_sdk_token");var t = wx.getStorageSync("plat_session_key");r || t ? (o = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, session_key: t, platform: o.platform }, this.order_data = t, (o = this.getPublicData()).order_data = JSON.stringify(t), o.is_from_min = 1, wx.request({ url: "https://" + HOST + "/partner/order", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: o, success: function (e) {
          console.log("[SDK]\u5b8c\u6210\u521b\u5efa\u8ba2\u5355"), console.log(e), 200 === e.statusCode ? (e = e.data).state && e.data.pay_data ? (console.log("[SDK]\u8054\u8fd0\u652f\u4ed8\u53c2\u6570" + JSON.stringify(e.data.pay_data)), "ios" === device ? (console.log("[SDK]\u8df3\u8f6c\u652f\u4ed8"), hortorSdk.jumpPay(e.data.pay_data).then(e => {
            console.log("\u8df3\u8f6c\u6210\u529f\uff01");
          }).catch(e => {
            console.log("\u8df3\u8f6c\u5931\u8d25\uff01", e), l.pay && l.pay(1, { errMsg: e.errMsg });
          })) : (console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8"), hortorSdk.midasPay(e.data.pay_data).then(e => {
            console.log("\u652f\u4ed8\u6210\u529f\uff01");
          }).catch(e => {
            console.log("\u652f\u4ed8\u5931\u8d25\uff01", e), l.pay && l.pay(1, { errMsg: e.errMsg });
          }))) : l.pay && l.pay(1, { errMsg: e.msg }) : l.login && l.login(1, { errMsg: "\u8bf7\u6c42\u5e73\u53f0\u670d\u52a1\u5668\u5931\u8d25\uff01" });
        } })) : l.pay && l.pay(1, { errMsg: "\u7528\u6237\u672a\u767b\u5f55\uff0c\u652f\u4ed8\u5931\u8d25\uff01" });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync("plat_uid");var r = wx.getStorageSync("plat_username");var t = wx.getStorageSync("plat_session_key");var n = {};n.user_id = o, n.user_name = r, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("create", n);t = { roleId: e.roleid, roleName: e.rolename, serverId: e.serverid, level: e.rolelevel, roleCtime: Date.parse(new Date()), id: t.uniqueId };hortorSdk.setGameUserInfo(t), this.roleCreateReport(0);
    }, roleCreateReport: function (e = 1) {
      wx.request({ url: "https://" + HOST + "/partner/data/roleCreate/" + config.partner_id + "/" + config.game_pkg, method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, uniqueId: partner_user_data.uid, is_valid: 1 === e ? 1 : 0 }, success: function (e) {
          console.log("[SDK]\u4e0a\u62a5\u521b\u89d2\u4fe1\u606f\u63a5\u53e3\u7ed3\u679c\u8fd4\u56de:", e);
        } });
    }, logEnterGame: function (e, r) {
      var o = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var n = wx.getStorageSync("plat_session_key");var a = {};a.user_id = o, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), hortorSdk.checkSwitches({ switches: ["antiaddicted"] }).then(e => {
        console.log("[SDK]\u68c0\u67e5\u9632\u6c89\u8ff7\u5f00\u5173\u8fd4\u56de\uff1a", e), e.antiaddicted && hortorSdk.checkRest(() => {
          console.log("[SDK]\u9632\u6c89\u8ff7\u56de\u8c03\uff1a\u73a9\u5bb6\u9700\u8981\u4f11\u606f");
        });
      }).catch(e => {
        console.log(`[SDK]检查防沉迷开关返回失败，errCode=${e.errCode} errMsg=${e.errMsg}`);
      }), this.log("enter", a);n = { roleId: e.roleid, roleName: e.rolename, serverId: e.serverid, level: e.rolelevel, roleCtime: e.rolecreatetime ? 1e3 * e.rolecreatetime : 0, id: n.uniqueId };hortorSdk.setGameUserInfo(n), user_invite_info && this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, e.roleid, e.serverid, user_invite_info.scene), hortorSdk.checkSwitches({ switches: ["iospay"] }).then(e => {
        console.log("[SDK]\u83b7\u53d6\u652f\u4ed8\u5f00\u5173\uff1a", e);var o = 0;e.iospay && (o = 1), r && r({ show_pay: o });
      }).catch(e => {
        console.log(`[SDK]获取支付开关返回失败，errCode=${e.errCode} errMsg=${e.errMsg}`), r && r({ show_pay: 0 });
      });
    }, logRoleUpLevel: function (e, r) {
      var o = wx.getStorageSync("plat_uid");var t = wx.getStorageSync("plat_username");var n = wx.getStorageSync("plat_session_key");var a = {};a.user_id = o, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (user_game_info = { role_id: e.roleid, server_id: e.serverid }), this.log("levelup", a);n = { roleId: e.roleid, roleName: e.rolename, serverId: e.serverid, level: e.rolelevel, roleCtime: e.rolecreatetime ? 1e3 * e.rolecreatetime : 0, id: n.uniqueId };hortorSdk.setGameUserInfo(n), 80 <= e.rolelevel && this.roleCreateReport(1), hortorSdk.checkSwitches({ switches: ["iospay"] }).then(e => {
        console.log("[SDK]\u83b7\u53d6\u652f\u4ed8\u5f00\u5173\uff1a", e);var o = 0;e.iospay && (o = 1), r && r({ show_pay: o });
      }).catch(e => {
        console.log(`[SDK]获取支付开关返回失败，errCode=${e.errCode} errMsg=${e.errMsg}`), r && r({ show_pay: 0 });
      });
    }, uuid: function (e, o) {
      var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var t,
          n = [];var a;if (e = e || r.length, o) for (t = 0; t < o; t++) n[t] = r[0 | Math.random() * e];else for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", t = 0; t < 36; t++) n[t] || (a = 0 | 16 * Math.random(), n[t] = r[19 == t ? 3 & a | 8 : a]);return n.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var o = wx.getStorageSync("plat_uuid");var r = wx.getStorageSync("plat_idfv");var t = wx.getStorageSync("plat_ad_code");return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: t, uuid: o, idfv: r, dname: e.model, mac: "0000", net_type: 0 == e.wifiSignal ? "4G" : "WIFI", os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: "android" == e.platform ? 1 : 2 };
    }, log: function (e, o) {
      var r = this.getPublicData();for (var t in o) r[t] = o[t];console.log("[SDK]\u4e0a\u62a5\u6570\u636e\uff1a" + e), console.log(r), wx.request({ url: "https://" + HOST + "/partner/h5Log/?type=" + e + "&data=" + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    } };
}function run(e, o, r) {
  e in PARTNER_SDK && PARTNER_SDK[e](o, r);
}exports.init = function (e, o) {
  run("init", e, o);
}, exports.login = function (e) {
  run("login", "", e);
}, exports.pay = function (e, o) {
  run("pay", e, o);
}, exports.openService = function () {
  run("openService");
}, exports.goCustomer = function (e, o, r, t, n, a) {
  run("goCustomer", { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n });
}, exports.logCreateRole = function (e, o, r, t, n) {
  run("logCreateRole", { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n });
}, exports.logEnterGame = function (e, o, r, t, n, a, i) {
  run("logEnterGame", { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n, rolecreatetime: a, rolepower: i.rolepower }, i.callback);
}, exports.logRoleUpLevel = function (e, o, r, t, n, a, i) {
  run("logRoleUpLevel", { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n, rolecreatetime: a, rolepower: i.rolepower }, i.callback);
}, exports.share = function (e) {
  run("share", { type: e });
}, exports.msgCheck = function (e, o) {
  run("msgCheck", e, o);
}, exports.downloadClient = function () {
  run("downloadClient");
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run("getPublicData");
}, exports.roleCreateReport = function (e) {
  run("roleCreateReport", e);
}, exports.isSubscribe = function (e) {
  run("isSubscribe", e);
}, exports.is_authorize = function (e) {
  run("is_authorize", e);
}, exports.go_authorize = function (e, o) {
  run("go_authorize", e, o);
}, exports.hideUserInfoBtn = function (e) {
  run("hideUserInfoBtn", e);
};