var config6kw = { sdkVersion: "1.0.8", url: "https://usmini.6kw.com/", channel: 0, sdkChannelID: 34, subChannelID: "0", appID: "1397", appKey: "11a348927984f7681cb170f6799edc09", urlParam: "", switch: 1 };var sdk6kwFunction = sdk6kw();var sdk6kw_user_game_info = {};const request6kwFunction = n => new Promise((t, a) => {
  console.log("-------------------------------------"), console.log(n), console.log("-------------------------------------"), console.log(config6kw.url + n.path), wx.request({ url: config6kw.url + n.path, data: JSON.stringify(n.data), method: "POST", dataType: "json", success: function (e) {
      t(e);
    }, fail: function (e) {
      console.log("[SDK]" + n.path + "\u53d1\u8d77\u8bf7\u6c42\u5931\u8d25"), a(e);
    } });
});function sdk6kw() {
  var s = {};return { init: function (e) {
      console.log("[SDK]\u8c03\u7528init\u521d\u59cb\u5316\u63a5\u53e3"), s.init = "function" == typeof e ? e : null, config6kw.urlParam = config6kw.appID + "/" + config6kw.sdkChannelID + "/" + config6kw.subChannelID, wx.showShareMenu({ withShareTicket: !0 });var t = this;e = wx.getStorageSync("sdk6kwLaunchOptions");var a = wx.getSystemInfoSync();e || (e = wx.getEnterOptionsSync ? wx.getEnterOptionsSync() : wx.getLaunchOptionsSync(), wx.setStorageSync("sdk6kwLaunchOptions", e)), console.log("[SDK]\u8c03\u7528init\u521d\u59cb\u5316\u63a5\u53e3 %o", e), console.log(wx.getStorageSync("wxg6kw_openid")), wx.getStorageSync("wxg6kw_openid") || wx.login({ success: function (e) {
          e = { path: "openid/" + config6kw.urlParam, data: { code: e.code } };request6kwFunction(e).then(e => {
            1 == e.data.code ? (console.log("[SDK]\u670d\u52a1\u7aef\u83b7\u53d6\u5fae\u4fe1openId\u6210\u529f\uff1a" + JSON.stringify(e.data)), wx.setStorageSync("wxg6kw_openid", e.data.data.openid)) : (console.log("[SDK]\u670d\u52a1\u7aef\u83b7\u53d6\u5fae\u4fe1openId\u5931\u8d25\uff1a" + JSON.stringify(e.data)), s.init && s.init(0, { errMsg: "\u521d\u59cb\u5316\u5931\u8d25\uff0c\u83b7\u53d6\u5fae\u4fe1openId\u5931\u8d25" }));
          }).catch(e => {
            console.log("[SDK]\u670d\u52a1\u7aef\u83b7\u53d6\u5fae\u4fe1openId\u5f02\u5e38\uff1a" + JSON.stringify(e.data));
          });
        }, fail: function (e) {
          console.log("\u5fae\u4fe1\u767b\u5f55\u5931\u8d25\uff0c\u8fd4\u56de" + JSON.stringify(e)), s.init && s.init(0, { errMsg: e.errMsg }), console.log("[SDK]\u83b7\u53d6\u5fae\u4fe1\u7528\u6237\u6388\u6743\u5931\u8d25");
        } }), wx.onShow(function (e) {
        wx.setStorageSync("wxg6kw_enter_time", 0);var t = Date.parse(new Date()) / 1e3;wx.setStorageSync("wxg6kw_enter_time", t);
      }), wx.onHide(function (e) {
        wx.setStorageSync("wxg6kw_left_time", 0), wx.setStorageSync("wxg6kw_left_time", Date.parse(new Date()) / 1e3), t.recordLog();
      });e = { path: "init/" + config6kw.urlParam, data: { sdkVersion: config6kw.sdkVersion, os: a.platform } };request6kwFunction(e).then(e => {
        console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u914d\u7f6e\u6210\u529f\uff1a" + JSON.stringify(e.data)), config6kw.switch = e.data.data.switch, s.init && s.init(1, { is_switch: e.data.data.switch });
      }).catch(e => {
        console.log("[SDK]\u83b7\u53d6\u6e38\u620f\u914d\u7f6e\u5f02\u5e38\uff1a" + e.data), s.init && s.init(0, { errMsg: "\u521d\u59cb\u5316\u5931\u8d25" });
      });
    }, login: function (e) {
      console.log("[SDK]\u8c03\u8d77\u767b\u5f55");var t = this.getPublicData();var a = t.sdk6kwLaunchOptions;var n = this.base64_encode(JSON.stringify(a));console.log("enterOptionsData is %o", a), console.log("enterOptionsData is %o", n), s.login = "function" == typeof e ? e : null, wx.login({ success: function (e) {
          e = { path: "login/" + config6kw.urlParam, data: { code: e.code, channel: t.sdk6kwLaunchOptions.query.channel, scene: t.sdk6kwLaunchOptions.scene, brand: t.wxSystemInfo.brand, model: t.wxSystemInfo.model, mobileVersion: t.wxSystemInfo.system, isWifi: t.wxSystemInfo.wifiEnabled, os: t.wxSystemInfo.platform, sdkVersion: config6kw.sdkVersion, extension: n, query: JSON.stringify(a.query) } };console.log(e), request6kwFunction(e).then(e => {
            1 == e.data.code ? (console.log("[SDK]\u767b\u5f55\u6210\u529f\uff1a" + JSON.stringify(e.data)), wx.setStorageSync("wxg6kw_token", e.data.data.token), wx.setStorageSync("wxg6kw_userId", e.data.data.userId), wx.setStorageSync("wxg6kw_nickName", e.data.data.nickName), e.data.data.extension && wx.setStorageSync("wxg6kw_userInfo_extension", e.data.data.extension), s.login && s.login(1, e.data.data)) : (console.log("[SDK]\u767b\u5f55\u5931\u8d25\uff1a" + JSON.stringify(e.data)), s.login && s.login(0, { errMsg: e.data.msg }));
          });
        }, fail: function (e) {
          console.log("\u5fae\u4fe1\u767b\u5f55\u5931\u8d25\uff0c\u8fd4\u56de" + JSON.stringify(e)), s.login && s.login(0, { errMsg: e.errMsg }), console.log("[SDK]\u83b7\u53d6\u5fae\u4fe1\u7528\u6237\u6388\u6743\u5931\u8d25");
        } });
    }, share: function (t, e) {
      var a = this.getPublicData();console.log("[SDK]CP\u8c03\u7528\u5206\u4eab" + JSON.stringify(t)), s.share = "function" == typeof e ? e : null;e = { path: "share/" + config6kw.urlParam, data: { userID: wx.getStorageSync("wxg6kw_userId"), token: wx.getStorageSync("wxg6kw_token"), openId: wx.getStorageSync("wxg6kw_openid"), channel: a.sdk6kwLaunchOptions.query.channel, type: "diybtn" } };Object.assign(e.data, sdk6kw_user_game_info), request6kwFunction(e).then(e => {
        1 == e.data.code ? (wx.shareAppMessage({ title: t.title, imageUrl: t.imageUrl, query: e.data.data.query + "&" + t.query }), s.share && s.share(1, e.data.data)) : s.share && s.share(0, e.data.msg);
      });
    }, shareLog: function (e) {
      console.log("[SDK]\u53f3\u4e0a\u89d2\u4e3b\u52a8\u5206\u4eab\u4e0a\u62a5");var t = this.getPublicData();t = { path: "share/" + config6kw.urlParam, data: { type: "right", openId: wx.getStorageSync("wxg6kw_openid"), roleId: sdk6kw_user_game_info.roleID, roleName: sdk6kw_user_game_info.roleName, roleLevel: sdk6kw_user_game_info.roleLevel, serverId: sdk6kw_user_game_info.serverID, serverName: sdk6kw_user_game_info.serverName, channel: t.sdk6kwLaunchOptions.query.channel, type: "right" } };request6kwFunction(t).then(e => {
        s.share && s.share(1, e.data.data);
      });
    }, pay: function (t, a) {
      var n = this;wx.checkSession({ success: function () {
          n.startPay(t, a);
        }, fail: function () {
          console.log("[SDK]\u8c03\u8d77transaction\u65f6\u53d1\u73b0\u7528\u6237session\u8fc7\u671f\u9700\u8981\u91cd\u65b0\u767b\u5f55"), n.login(function (e) {
            1 == e && n.startPay(t, a);
          });
        } });
    }, startPay: function (a, e) {
      wx.showLoading({ title: "\u6b63\u5728\u652f\u4ed8" }), console.log("[SDK]\u8c03\u8d77transaction\uff0cCP\u4f20\u503c\uff1a" + JSON.stringify(a));var n = this;s.pay = "function" == typeof e ? e : null;e = this.getPublicData();if (console.log(e.wxSystemInfo), "" == wx.getStorageSync("wxg6kw_token") || null == wx.getStorageSync("wxg6kw_token")) return wx.showToast({ title: "\u767b\u5f55\u4fe1\u606f\u5931\u6548\uff0c\u8bf7\u9000\u51fa\u91cd\u8bd5" }), !1;var o = { path: "pay/" + config6kw.urlParam, data: { os: e.wxSystemInfo.platform, brand: e.wxSystemInfo.brand, model: e.wxSystemInfo.model, osVersion: e.wxSystemInfo.system, token: wx.getStorageSync("wxg6kw_token"), userID: wx.getStorageSync("wxg6kw_userId"), sessionKey: wx.getStorageSync("wxg6kw_session_key"), sdkVersion: config6kw.sdkVersion, cpOrder: a.cpOrder, serverId: a.serverId, serverName: a.serverName, productId: a.productId, productName: a.productName, roleId: a.roleId, roleName: a.roleName, roleLevel: a.roleLevel, price: a.price, extension: a.extension, notifyUrl: a.notifyUrl } };request6kwFunction(o).then(t => {
        if (console.log("-----------------"), console.log(t.data), wx.hideLoading({ success: e => {} }), 0 == t.data.code) return console.log(o), "\u4ee4\u724c\u6821\u9a8c\u5931\u8d25" == t.data.msg ? (console.log("[SDK]\u4ee4\u724c\u6821\u9a8c\u5931\u8d25\uff0c\u91cd\u65b0\u767b\u5f55"), n.login(function (e) {
          1 == e && n.startPay(a);
        })) : (n.showTips(t.data.msg), s.pay && s.pay(0, { errMsg: t.data.msg })), !1;t.data.data.cpOrder, t.data.data.orderId, t.data.data.total, t.data.data.extension, t.data.data.text;return 1 == t.data.data.isSwitch ? (t.data.data.wayInfo.sessionFrom ? n.showModel().then(e => {
          wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: t.data.data.wayInfo.title, sendMessageImg: t.data.data.wayInfo.img, sessionFrom: JSON.stringify(t.data.data.wayInfo.sessionFrom), success: function () {
              console.log("[SDK]\u901a\u77e5\u7ed3\u679c"), console.log(e), s.pay && s.pay(1, e);
            }, fail: function (e) {
              console.log(e), s.pay && s.pay(0, { errMsg: "\u8c03\u8d77\u5ba2\u670d\u4f1a\u8bdd\u5931\u8d25" });
            } });
        }) : (n.showTips(t.data.msg), s.pay && s.pay(0, { errMsg: "\u53c2\u6570\u4e22\u5931" })), !1) : 2 == t.data.data.isSwitch ? (t.data.data.miniprogram_id || t.data.data.miniprogram_path ? (console.log(t.data.data), wx.navigateToMiniProgram({ appId: t.data.data.miniprogram_id, path: t.data.data.miniprogram_path + "?price=" + t.data.data.total + "&appId=" + config6kw.appID + "&orderId=" + t.data.data.orderId + "&service=" + config6kw.urlParam + "&appKey=" + config6kw.appKey, extraData: { count: t.data.data.total, orderId: t.data.data.orderId, cpOrder: t.data.data.cpOrder }, envVersion: "develop", success(e) {
            console.log("\u6253\u5f00\u6210\u529f");
          }, fail: e => {} })) : (n.showTips(t.data.msg), s.pay && s.pay(0, { errMsg: "\u53c2\u6570\u4e22\u5931" })), !1) : void (t.data.data.buyQuantity <= t.data.data.balance && 0 != t.data.data.buyQuantity && 0 != t.data.data.balance ? (console.log("[SDK]\u4f59\u989d\u5145\u8db3\uff0c\u6e38\u620f\u5e01\u76f4\u63a5\u6263\u9664"), wx.showModal({ title: "\u652f\u4ed8\u63d0\u793a", content: "\u60a8\u8fd8\u6709" + t.data.data.balance + "\u4e2a\u6e38\u620f\u5e01\u672a\u6d88\u8d39\uff0c\u672c\u6b21\u652f\u4ed8\u5c06\u6263\u9664" + t.data.data.buyQuantity + "\u6e38\u620f\u5e01", showCancel: !1, confirmText: "\u6211\u77e5\u9053\u4e86", success: function () {
            var e = n.gameGoPay(t.data.data);1 == e.code ? (n.showTips("\u652f\u4ed8\u6210\u529f"), s.pay && s.pay(1, e.data)) : (n.showTips("\u652f\u4ed8\u5931\u8d25" + e.msg), s.pay && s.pay(0, { errMsg: "\u652f\u4ed8\u5931\u8d25:" + e.msg }));
          } })) : n.MidasPay(t.data.data).then(e => {
          return console.log("[SDK]\u8c03\u8d77\u7c73\u5927\u5e08\u652f\u4ed8\u7ed3\u679c" + JSON.stringify(e)), "requestMidasPayment:ok" == e.errMsg && (1 == (e = n.gameGoPay(t.data.data)).code ? (n.showTips("\u652f\u4ed8\u6210\u529f"), s.pay && s.pay(1, e.data)) : (n.showTips("\u652f\u4ed8\u5931\u8d25" + e.msg), s.pay && s.pay(0, { errMsg: "\u652f\u4ed8\u5931\u8d25:" + e.msg }))), !1;
        }).catch(e => {
          console.log("[SDK]\u8c03\u8d77\u7c73\u5927\u5e08\u652f\u4ed8\u7ed3\u679c\u5f02\u5e38" + JSON.stringify(e)), "{}" != JSON.stringify(e) && (n.showTips("\u652f\u4ed8\u5931\u8d25" + e.errMsg), s.pay && s.pay(0, { errMsg: "\u652f\u4ed8\u5931\u8d25:" + e.errMsg }));
        }));
      });
    }, MidasPay: function (e) {
      return new Promise((t, a) => {
        wx.requestMidasPayment({ mode: "game", env: e.env, offerId: e.offerId, currencyType: e.currencyType, platform: e.platform, buyQuantity: e.buyQuantity, zoneId: e.zoneId, success: function (e) {
            t(e);
          }, fail: function (e) {
            a(e);
          }, complete: function (e) {} });
      });
    }, gameGoPay: function (t) {
      var a = this;var e = this.getPublicData();e = { path: "checkPay/" + config6kw.urlParam, data: { os: e.wxSystemInfo.platform, token: wx.getStorageSync("wxg6kw_token"), userID: wx.getStorageSync("wxg6kw_userId"), sdkVersion: config6kw.sdkVersion, orderID: t.orderId } };console.log(e), request6kwFunction(e).then(e => (console.log("[SDK]\u7c73\u5927\u5e08\u652f\u4ed8\u7ed3\u679c\uff1a" + JSON.stringify(e)), "\u7528\u6237session\u5df2\u5931\u6548,\u8bf7\u91cd\u65b0\u767b\u5f55" == e.data.msg ? (a.login(function (e) {
        1 == e && a.gameGoPay(t);
      }), !1) : e.data));
    }, logEnterGame: function (t) {
      var a = this;wx.checkSession({ success: function () {
          a.postRole(t);
        }, fail: function () {
          console.log("[SDK]\u8c03\u7528\u89d2\u8272\u4fe1\u606f\u63a5\u53e3session\u8fc7\u671f\u9700\u8981\u91cd\u65b0\u767b\u5f55"), a.login(function (e) {
            1 == e && a.postRole(t);
          });
        } });
    }, logRole: function (t) {
      var a = this;wx.checkSession({ success: function () {
          a.postRole(t);
        }, fail: function () {
          console.log("[SDK]\u8c03\u7528\u89d2\u8272\u4fe1\u606f\u63a5\u53e3session\u8fc7\u671f\u9700\u8981\u91cd\u65b0\u767b\u5f55"), a.login(function (e) {
            1 == e && a.postRole(t);
          });
        } });
    }, postRole: function (t) {
      console.log("[SDK]\u8c03\u7528\u89d2\u8272\u4e0a\u4f20" + JSON.stringify(t));var a = this;var e = { token: wx.getStorageSync("wxg6kw_token"), userID: wx.getStorageSync("wxg6kw_userId"), roleID: t.roleId, roleName: t.roleName, roleLevel: t.roleLevel, serverID: t.serverId, serverName: t.serverName, payLevel: t.payLevel, roleCreateTime: t.createTime };(sdk6kw_user_game_info = e).token && e.userID || (console.log("\u7528\u6237\u4fe1\u606f\u8fc7\u671f\u5bfc\u81f4\u7528\u6237\u8c03\u8d77\u89d2\u8272\u4fe1\u606f\u63a5\u53e3\u5931\u8d25"), a.login(function (e) {
        1 == e && a.postRole(t);
      }));e = { path: "role/" + config6kw.urlParam, data: e };request6kwFunction(e).then(e => {
        console.log(e);
      });
    }, recordLog: function () {
      console.log("[SDK]\u8bbf\u95ee\u65e5\u5fd7\u4e0a\u62a5");var e = this.getPublicData();e = { path: "visit/" + config6kw.urlParam, data: { openId: wx.getStorageSync("wxg6kw_openid"), enterTime: wx.getStorageSync("wxg6kw_enter_time"), leftTime: wx.getStorageSync("wxg6kw_left_time"), channel: e.sdk6kwLaunchOptions.query.channel, model: e.wxSystemInfo.model, platform: e.wxSystemInfo.platform, brand: e.wxSystemInfo.brand, system: e.wxSystemInfo.system, scene: e.sdk6kwLaunchOptions.scene, id: e.sdk6kwLaunchOptions.query.id, shareTime: e.sdk6kwLaunchOptions.query.shareTime, shareId: e.sdk6kwLaunchOptions.query.shareId } };request6kwFunction(e).then(e => {
        1 == e.data.code ? console.log("[SDK]\u8bbf\u95ee\u8bb0\u5f55\u4e0a\u62a5\u6210\u529f" + JSON.stringify(e.data)) : console.log("[SDK]\u8bbf\u95ee\u8bb0\u5f55\u4e0a\u62a5\u5931\u8d25\uff1a" + JSON.stringify(e.data));
      }).catch(e => {
        console.log("[SDK]\u8bbf\u95ee\u8bb0\u5f55\u4e0a\u62a5\u5931\u8d25" + JSON.stringify(e));
      });
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var t = wx.getStorageSync("sdk6kwLaunchOptions");return t || (t = wx.getEnterOptionsSync ? wx.getEnterOptionsSync() : wx.getLaunchOptionsSync(), wx.setStorageSync("sdk6kwLaunchOptions", t)), { wxSystemInfo: e, sdk6kwLaunchOptions: t, config6kw: config6kw };
    }, showModel: function () {
      return new Promise((t, a) => {
        wx.showModal({ title: "\u6e29\u99a8\u63d0\u793a", content: "\u8bf7\u8fdb\u5165\u3010\u5ba2\u670d\u4f1a\u8bdd\u3011\u7a97\u53e3\u70b9\u51fb\u53f3\u4e0b\u89d2\u5361\u7247\u83b7\u53d6\u652f\u4ed8\u94fe\u63a5", showCancel: !0, confirmText: "\u524d\u5f80\u5145\u503c", success: function (e) {
            !0 === e.confirm ? t() : !0 === e.cancel && a();
          }, fail: function () {
            a();
          } });
      });
    }, showTips: function (e) {
      wx.showModal({ title: "\u6e29\u99a8\u63d0\u793a", content: e, showCancel: !1, success: function (e) {}, fail: function () {} });
    }, getPayState: function (e, t) {
      var a = this.getPublicData();a = { path: "payState/" + config6kw.urlParam, data: { sdkVersion: config6kw.sdkVersion, token: wx.getStorageSync("wxg6kw_token"), userID: wx.getStorageSync("wxg6kw_userId"), roleID: sdk6kw_user_game_info.roleId, roleName: sdk6kw_user_game_info.roleName, roleLevel: sdk6kw_user_game_info.roleLevel, os: a.wxSystemInfo.platform, cpData: e } };request6kwFunction(a).then(e => (t(1, e.data.data), !1)).catch(e => (t(0, e), !1));
    }, msgSecCheck: function (e) {
      var t = e.content;var a = e.scene || "0";var n = e.callback;e = { path: "frontCheckContent/" + config6kw.urlParam, data: { scene: a, type: "msg", content: t, openid: wx.getStorageSync("wxg6kw_openid"), userID: wx.getStorageSync("wxg6kw_userId"), token: wx.getStorageSync("wxg6kw_token") } };request6kwFunction(e).then(e => (n(1, e.data), !1)).catch(e => (n(0, e), !1));
    }, payDebug: function () {
      wx.navigateToMiniProgram({ appId: "wxb4cda18c9d8daea6", path: "pages/charge/charge?price=600&productId=10010", extraData: { count: "600", productId: 100230 }, envVersion: "develop", success(e) {
          console.log("\u6253\u5f00\u6210\u529f");
        } });
    }, openCustomerWithClientChange() {
      var e = this.getPublicData();e = { path: "kf/" + config6kw.urlParam, data: { type: "clientChange", userID: wx.getStorageSync("wxg6kw_userId"), token: wx.getStorageSync("wxg6kw_token"), openId: wx.getStorageSync("wxg6kw_openid"), channel: e.sdk6kwLaunchOptions.query.channel } };request6kwFunction(e).then(e => {
        console.log("response Object %o", e), 1 == e.data.code ? wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: e.data.data.title, sendMessageImg: e.data.data.img, sessionFrom: JSON.stringify(e.data.data.sessionFrom), success: function () {
            console.log("[SDK]\u901a\u77e5\u7ed3\u679c"), console.log(ret);
          }, fail: function (e) {
            console.log(e);
          } }) : (console.log("[SDK]\u767b\u5f55\u5931\u8d25\uff1a" + JSON.stringify(e.data)), s.init && s.init(0, { errMsg: e.data.msg }), s.login && s.login(0, { errMsg: e.data.msg }));
      });
    }, base64_encode(e) {
      var t, a, n;var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var s = 0,
          r = e.length,
          i = "";for (; s < r;) {
        if (t = 255 & e.charCodeAt(s++), s == r) {
          i = (i += o.charAt(t >> 2)) + o.charAt((3 & t) << 4) + "==";break;
        }if (a = e.charCodeAt(s++), s == r) {
          i = (i = (i += o.charAt(t >> 2)) + o.charAt((3 & t) << 4 | (240 & a) >> 4)) + o.charAt((15 & a) << 2) + "=";break;
        }n = e.charCodeAt(s++), i = (i = (i = (i += o.charAt(t >> 2)) + o.charAt((3 & t) << 4 | (240 & a) >> 4)) + o.charAt((15 & a) << 2 | (192 & n) >> 6)) + o.charAt(63 & n);
      }return i;
    } };
}function sdk6kwRun(e, t, a) {
  e in sdk6kwFunction && sdk6kwFunction[e](t, a);
}exports.init = function (e) {
  sdk6kwRun("init", e);
}, exports.login = function (e) {
  sdk6kwRun("login", e);
}, exports.pay = function (e, t) {
  sdk6kwRun("pay", e, t);
}, exports.debugPay = function () {
  sdk6kwRun("payDebug");
}, exports.logRole = function (e, t, a, n, o, s, r) {
  sdk6kwRun("logRole", { createTime: e, serverId: t, serverName: a, roleId: n, roleName: o, roleLevel: s, payLevel: r });
}, exports.logEnterGame = function (e, t, a, n, o, s, r) {
  sdk6kwRun("logEnterGame", { createTime: e, serverId: t, serverName: a, roleId: n, roleName: o, roleLevel: s, payLevel: r });
}, exports.share = function (e, t) {
  sdk6kwRun("share", e, t);
}, exports.shareLog = function (e) {
  sdk6kwRun("shareLog", e);
}, exports.getPayState = function (e, t) {
  sdk6kwRun("getPayState", e, t);
}, exports.msgSecCheck = function (e) {
  sdk6kwRun("msgSecCheck", e);
}, exports.openCustomerWithClientChange = function () {
  sdk6kwRun("openCustomerWithClientChange");
};