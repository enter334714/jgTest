let confArr = ["", "APP_ID", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=login", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportRoleInfo", "APP_VERSION", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=canPay", "GAME_KEY", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=setTunnelClick", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getMaterials", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportShare", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportClick", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=descMidasCoin", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=send_tpl_msg", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=get_box_list", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=open_box", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=click_box", "wss://ws.docater1.cn", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getOpenClipboard", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getDealPackageInfo", "https://docater1.cn/index.php?g=Wap&m=WxSecCheck&a=msgSecCheck", "https://docater1.cn/index.php?g=Wap&m=WxSecCheck&a=imgSecCheck", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getGameShareCardData"];const SY_CONF = { APP_ID: "wx4ce69989cfb43218", APP_VERSION: "1001.0.0", GAME_KEY: "98c5dab80922bf0570ea3318900929bd", offerId: "1450030861", commitId: "52" };const Sygame = { SY_CONF: SY_CONF, appid: "", app_version: "1005.5.0", openid: "", real_openid: "", share_data: {}, clipboard: "", role_id: 0, role_name: "", server_id: "", server_name: "", commitIdStatus: !1, popupNumber: 0, popupStatus: !1, popupData: {}, userBrand: "", userBrandModel: "", init: e => {
    Sygame.appid = SY_CONF[confArr[1]], Sygame.query = e.query, Sygame.channel = SY_CONF[confArr[6]], Sygame.offerId = SY_CONF.offerId, Sygame.scene = e.scene, Sygame.commit_id = SY_CONF.commitId, Sygame.touchNumber = 0, Sygame.jumpVersion = 0, console.log("syInit:", Sygame);let a = { query: e.query };wx.request({ url: confArr[17], data: { appid: Sygame.appid }, method: "POST", success: e => {
        console.log("getIsOpenClipboard:", e), e.data.is_open_clipboard && wx.getClipboardData({ success(e) {
            e.data && (Sygame.clipboard = e.data), console.log("syGetClipboardData:", e);
          } }), wx.request({ url: confArr[7], data: a, method: "POST", success: e => {
            console.log("syClickRequest:", e);
          } });
      } }), Sygame.getShareData(), wx.showShareMenu(), wx.onShareAppMessage(() => {
      var e = Sygame.share_data[1];var a = e.length;e = e[Math.floor(Math.random() * a)];console.log("sy\u66f4\u591a\u5206\u4eab\u6570\u636e:", e);a = { title: e.title, imageUrlId: e.imageUrlId, imageUrl: e.imageUrl };return console.log("syShareInit:", e), a;
    }), Sygame.getCommitIdStatus(), wx.getSystemInfo({ success(e) {
        Sygame.userBrand = e.brand, Sygame.userBrandModel = e.model;
      } });
  }, syLogin: () => new Promise(function (t, e) {
    wx.login({ success(e) {
        if (console.log("syLoginCode:", e), !e.code) return !1;var a = confArr[2];wx.request({ url: a, data: { code: e.code, appid: Sygame.appid, version: Sygame.app_version, query: Sygame.query, scene: Sygame.scene, channel: Sygame.channel, clipboard: Sygame.clipboard }, success(e) {
            if (console.log("syLogin:", e), 1001 == e.data.code) t(e.data), Sygame.openid = e.data.openid, Sygame.real_openid = e.data.real_openid, Sygame.jumpVersion = e.data.jump_version;else if (3001 == e.data.code) {
              var a = !0;if (1 == e.data.jump_mandatory) a = !1;else {
                var o = "loginClickCancle" + e.data.openid;if (o = Sygame.cookieData({ type: "get", key: o }), 0 < e.data.jump_mandatory_number && o >= e.data.jump_mandatory_number) return (o = []).code = 1001, o.openid = e.data.openid, o.real_openid = e.data.real_openid, t(o), Sygame.openid = e.data.openid, Sygame.real_openid = e.data.real_openid, !1;
              }t(Sygame.syPackageShow(e, 1, a));
            } else 5001 == e.data.code && (wx.showModal({ title: "\u6e38\u620f\u63d0\u793a", content: e.data.game_tip || "\u6e38\u620f\u7ef4\u62a4\u4e2d\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5", confirmText: "\u786e\u8ba4", showCancel: !1, success: () => {
                console.log("syLogin5001", e);
              } }), wx.onTouchStart(() => {
              wx.showModal({ title: "\u6e38\u620f\u63d0\u793a", content: e.data.game_tip || "\u6e38\u620f\u7ef4\u62a4\u4e2d\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5", confirmText: "\u786e\u8ba4", showCancel: !1, success: () => {
                  console.log("syLogin5001", e);
                } });
            }));
          } });
      }, fail: function () {
        console.log("fail");
      } });
  }), syReportRoleInfo: t => new Promise(function (a, e) {
    if ("object" != typeof t) return "\u53c2\u6570\u683c\u5f0f\u4e0d\u6b63\u786e";var o = confArr[3];t.role_id && void 0 !== t.role_id && (Sygame.role_id = t.role_id), t.role_name && void 0 !== t.role_name && (Sygame.role_name = t.role_name), t.server_id && void 0 !== t.server_id && (Sygame.server_id = t.server_id), t.server_name && void 0 !== t.server_name && (Sygame.server_name = t.server_name), t.wecha_id = Sygame.openid, t.real_openid = Sygame.real_openid, t.channel = Sygame.channel, t.query = Sygame.query, t.scene = Sygame.scene, t.appid = Sygame.appid, t.version = Sygame.app_version, t.brand = Sygame.userBrand, t.model = Sygame.userBrandModel, wx.request({ url: o, data: t, method: "POST", success: e => {
        console.log("syReportRoleInfo:", e), e.data.is_gs_login && Sygame.syUserLoginRecord(Sygame.openid, e.data.request_time), a(e.data), Sygame.popupNumber || (Sygame.popupNumber++, Sygame.newUserPopupFunc(t));
      } });
  }), syPay: o => new Promise(function (e, a) {
    Sygame.popupPayFunc(0).then(() => {
      if (Sygame.jumpVersion) {
        if (0 < Sygame.touchNumber) return !1;Sygame.syPackageJump().then(() => {
          e(Sygame.syRealPay(o));
        });
      } else e(Sygame.syRealPay(o));
    });
  }), syRealPay: t => new Promise(function (e, a) {
    var o = confArr[5];"object" == typeof t ? (t.openid = Sygame.openid, t.real_openid = Sygame.real_openid, t.appid = Sygame.appid, t.channel = Sygame.channel, t.version = Sygame.app_version, t.is_buckle_pay = 0, wx.request({ url: o, method: "POST", data: t, success: function (a) {
        switch (console.log("syPay:", a), a.data.payType) {case "1":
            1 == a.data.can_use_balance ? wx.showModal({ title: "\u652f\u4ed8\u786e\u8ba4", content: a.data.midas_pay_tip, confirmText: "\u786e\u8ba4", showCancel: "\u53d6\u6d88", success: e => {
                e.confirm ? (t.is_buckle_pay = 1, Sygame.syDescMidasCoin(t)) : (console.log("\u7528\u6237\u70b9\u51fb\u53d6\u6d88"), Sygame.syMidasPay(t));
              } }) : Sygame.syMidasPay(t);break;case "2":
            wx.showModal({ title: "\u5145\u503c\u6559\u7a0b", content: "\u5373\u5c06\u8df3\u8f6c\u5b98\u65b9\u3010\u5ba2\u670d\u4f1a\u8bdd\u3011\u5145\u503c\uff0c \n\u7ed9\u5ba2\u670d\u56de\u590d\u201c1\u201d\u83b7\u53d6\u5145\u503c\u94fe\u63a5", confirmText: "\u5ba2\u670d\u5145\u503c", showCancel: !1, success: e => {
                e.confirm && wx.openCustomerServiceConversation({ sessionFrom: "h5Game_" + a.data.payId, showMessageCard: !0, sendMessageImg: "http://wx.11babay.cn/uploads/q/qqwxa1569404944/5/3/9/f/5e1d951409066.png", success: () => {
                    console.log("success");
                  } });
              } });break;case "3":
            wx.previewImage({ urls: [a.data.payImage] });}
      } })) : a("data is not obj");
  }), syDescMidasCoin: e => {
    wx.request({ url: confArr[11], data: e, method: "POST", dataType: "json", success: function (e) {
        console.log("syDescMidasCoin:", e), wx.showModal({ title: "\u63d0\u793a", content: e.data.tip, confirmText: "\u786e\u8ba4", showCancel: "\u53d6\u6d88", success: e => {
            e.confirm;
          } });
      }, fail: function (e) {
        console.log("\u8bf7\u6c42\u5931\u8d25", e);
      } });
  }, syMidasPay: a => {
    wx.requestMidasPayment({ mode: "game", env: 0, offerId: Sygame.offerId, currencyType: "CNY", buyQuantity: 100 * a.product_price, platform: "android", zoneId: 1, success(e) {
        Sygame.syDescMidasCoin(a), console.log("syMidasPay:", e), Sygame.popupPayFunc(a.product_price);
      }, fail(e) {
        1 != e.errCode && Sygame.syReportMidasErrorInfo(e, a), console.log(e);
      }, complete(e) {
        console.log(e);
      } });
  }, syReportMidasErrorInfo: function (e, a) {
    wx.request({ url: confArr[22], data: { appid: Sygame.appid, info: JSON.stringify(e), openid: Sygame.openid, real_openid: Sygame.real_openid, pay_info: a }, method: "POST", success: e => {
        console.log("report Midas error info success", e);
      } });
  }, syBindMobile: e => new Promise(function (e, a) {
    Sygame.channel;var o = Sygame.openid;wx.openCustomerServiceConversation({ sessionFrom: "WxaBind_" + o, success: () => {
        console.log("syBindMobile:success");
      } });
  }), syPackageJump: () => new Promise(function (o, e) {
    wx.request({ url: confArr[18], data: { appid: Sygame.appid, openid: Sygame.openid, real_openid: Sygame.real_openid }, method: "POST", success: e => {
        var a;console.log("packageInfo", e), 1001 == e.data.status ? o(!0) : (a = !0, 1 == e.data.jump_mandatory && (a = !1), o(Sygame.syPackageShow(e, 0, a)));
      } });
  }), syPackageShow: (n, s, a) => new Promise(function (t, e) {
    wx.showModal({ title: n.data.jump_title_tip || "\u8df3\u8f6c\u63d0\u793a", content: n.data.jump_tip ? n.data.jump_tip.replace(/\\n/g, "\n") : "\u5373\u5c06\u8df3\u8f6c", confirmText: n.data.jump_button_tip || "\u786e\u8ba4", cancelText: n.data.jump_cancel_tip || "\u53d6\u6d88", showCancel: a, success: e => {
        var a, o;e.cancel && s ? ((a = []).code = 1001, a.openid = n.data.openid, a.real_openid = n.data.real_openid, t(a), Sygame.openid = n.data.openid, Sygame.real_openid = n.data.real_openid, 0 < n.data.jump_mandatory_number && (a = new Date(new Date().toLocaleDateString()).getTime() + 864e5, o = "loginClickCancle" + n.data.openid, Sygame.cookieData({ type: "set", key: o, data: loginInfo + 1, expired_at: a }))) : e.cancel ? t(!0) : (Sygame.touchNumber += 1, n.data.jump_copy || n.data.jump_copy_apk ? Sygame.syDealJumpData(n) : wx.onTouchStart(() => {
          Sygame.syDealJumpData(n);
        }));
      } });
  }), syDealJumpData: o => new Promise(function (e, a) {
    o.data.jump_to ? wx.navigateToMiniProgram({ appId: o.data.jump_to, path: o.data.jump_path, success: () => {
        console.log("syForceJump:success");
      } }) : o.data.jump_img ? (wx.previewImage({ urls: [o.data.jump_img] }), wx.showModal({ title: "\u8df3\u8f6c\u63d0\u793a", content: o.data.jump_tip || "\u5373\u5c06\u8df3\u8f6c", confirmText: "\u786e\u8ba4", showCancel: !1, success: () => {
        wx.previewImage({ urls: [o.data.jump_img] });
      } })) : o.data.jump_copy ? (wx.setClipboardData({ data: o.data.jump_copy, success(e) {
        console.log("syCopy", o.data);
      } }), wx.onTouchStart(() => {
      wx.showModal({ title: "\u8df3\u8f6c\u63d0\u793a", content: o.data.jump_tip || "\u5373\u5c06\u8df3\u8f6c", confirmText: "\u786e\u8ba4", showCancel: !1, success: () => {
          wx.setClipboardData({ data: o.data.jump_copy, success(e) {
              console.log("syCopy", o.data);
            } });
        } });
    })) : o.data.jump_copy_apk && (wx.setClipboardData({ data: o.data.jump_copy_apk, success(e) {
        console.log("syCopy", o.data);
      } }), wx.onTouchStart(() => {
      wx.openCustomerServiceConversation({ sessionFrom: "h5GameJumpApk_" + Sygame.appid, showMessageCard: !0, sendMessageImg: "http://wx.11babay.cn/uploads/s/sqcsh1458897586/7/2/d/5/60cab7d766dfa.jpeg", success: () => {
          console.log("success");
        } });
    }));
  }), syGetSubscribe: t => new Promise(function (o, a) {
    wx.requestSubscribeMessage({ tmplIds: [t.template], success: e => {
        console.log("syGetSubscribe: ", e);let a = "";a = "accept" === e[t.template] ? "confirm" : "cancel", wx.request({ url: confArr[12], data: { openid: Sygame.openid, channel: Sygame.channel, role_id: t.role_id, tpl_type: t.tpl_type, type: a }, method: "POST", dataType: "json", success: function (e) {
            o(e);
          }, fail: function (e) {
            console.log("\u8bf7\u6c42\u5931\u8d25", e);
          } });
      }, fail(e) {
        console.error(e), a();
      } });
  }), syMsgSecCheck: e => new Promise(function (a, o) {
    e.appId = Sygame.appid, e.openId = Sygame.real_openid, wx.request({ url: confArr[19], data: e, method: "POST", success: e => {
        console.log("\u6d88\u606f\u68c0\u6d4b\u6210\u529f", e), a(e.data);
      }, fail: e => {
        console.error(e), o();
      } });
  }), syImgSecCheck: e => new Promise(function (a, o) {
    wx.uploadFile({ url: confArr[20], filePath: e, name: "images", formData: { appId: Sygame.appid }, success: function (e) {
        console.log("\u68c0\u6d4b\u56fe\u7247\u6210\u529f", e), a(e.data);
      }, fail: function (e) {
        console.error(e), o();
      } });
  }), syShareCardInfo: () => new Promise(function (a, o) {
    wx.request({ url: confArr[21], data: { appid: Sygame.appid }, method: "POST", success: e => {
        console.log("\u5206\u4eab\u5361\u7247\u53c2\u6570\u4fe1\u606f", e), a(e.data);
      }, fail: e => {
        console.error(e), o();
      } });
  }), syGetBoxList: o => new Promise(function (a, e) {
    wx.request({ url: confArr[13], data: { wecha_id: Sygame.openid, appid: Sygame.appid, page: o.page, count: o.count }, method: "POST", dataType: "json", success: function (e) {
        console.log("\u76d2\u5b50", e), a(e);
      }, fail: function (e) {
        console.log("\u8bf7\u6c42\u5931\u8d25", e);
      } });
  }), syClickOpenBox: () => new Promise(function (a, e) {
    var o = "clickOpenBox" + Sygame.openid;var t = Sygame.cookieData({ type: "get", key: o }) ? 0 : 1;wx.request({ url: confArr[14], data: { wecha_id: Sygame.openid, appid: Sygame.appid, uv: t }, method: "POST", dataType: "json", success: function (e) {
        1 == t && Sygame.cookieData({ type: "set", key: o, data: 1 }), console.log("\u5c55\u5f00\u76d2\u5b50\u4e8b\u4ef6\u4e0a\u62a5", e.data), a(e.data);
      }, fail: function (e) {
        console.log("\u8bf7\u6c42\u5931\u8d25", e);
      } });
  }), syClickBox: n => new Promise(function (a, e) {
    var o = "clickBox" + n.game_id;var t = Sygame.cookieData({ type: "get", key: o }) ? 0 : 1;wx.request({ url: confArr[15], data: { wecha_id: Sygame.openid, appid: Sygame.appid, uv: t, game_id: n.game_id, tunnel_id: n.tunnel_id, jump_appid: n.jump_appid, jump_path: n.jump_path }, method: "POST", dataType: "json", success: function (e) {
        1 == t && Sygame.cookieData({ type: "set", key: o, data: 1 }), console.log("\u70b9\u51fb\u76d2\u5b50\u5185\u6e38\u620f\u4e8b\u4ef6\u4e0a\u62a5", e.data), a(e.data);
      }, fail: function (e) {
        console.log("\u8bf7\u6c42\u5931\u8d25", e);
      } });
  }), getShareData: a => {
    wx.request({ url: confArr[8], data: { appid: Sygame.appid, channel: Sygame.channel }, method: "POST", dataType: "json", success: function (e) {
        console.log("getShareData:", e), 1001 == e.data.status ? (console.log("\u5206\u4eab:", e.data.data), Sygame.share_data = e.data.data) : (a && a.errorCallback(e), console.log("\u76db\u4e5fshare\u5931\u8d25", e));
      }, fail: function (e) {
        console.log("\u8bf7\u6c42\u5931\u8d25", e);
      } });
  }, goShareData: e => {
    var a = Sygame.share_data[e.type];var o = a.length;a = a[Math.floor(Math.random() * o)];console.log("\u76db\u4e5fshare\u6570\u636e", a);o = { title: a.title, imageUrlId: a.imageUrlId, imageUrl: a.imageUrl, query: e.shareQuery + "&share_material_id=" + a.id };console.log("\u5206\u4eab:", a), wx.shareAppMessage(o), e.successCallback(a);
  }, upShareData: e => {
    var a = "sy_share_material:" + e.material_id;var o = Sygame.cookieData({ type: "get", key: a }) ? 1 : 0;0 == o && Sygame.cookieData({ type: "set", key: a, data: new Date().getTime() }), e.log = o, wx.request({ url: confArr[9], data: e, method: "POST", dataType: "json", success: function (e) {
        console.log(e);
      }, fail: function (e) {
        console.log("\u8bf7\u6c42\u5931\u8d25", e);
      } });
  }, upClickData: e => {
    var a = "sy_click_material:" + e.material_id;var o = Sygame.cookieData({ type: "get", key: a }) ? 1 : 0;0 == o && Sygame.cookieData({ type: "set", key: a, data: new Date().getTime() }), e.log = o, wx.request({ url: confArr[10], data: e, method: "POST", dataType: "json", success: function (e) {
        console.log(e);
      }, fail: function (e) {
        console.log("\u8bf7\u6c42\u5931\u8d25", e);
      } });
  }, cookieData: e => {
    switch (e.type) {case "get":
        var a = wx.getStorageSync(e.key);try {
          if (a = JSON.parse(a), new Date().getTime() < a.expired_at) return a.data;
        } catch (e) {}return !1;case "set":
        e.expired_at || (e.expired_at = new Date(new Date().toLocaleDateString()).getTime() + 31536e7);try {
          return wx.setStorageSync(e.key, JSON.stringify({ data: e.data, expired_at: e.expired_at })), !0;
        } catch (e) {}return !1;case "rm":
        return wx.removeStorageSync(e.key), !0;}
  }, syUserLoginRecord: (a, e) => {
    var o;var t = e || 30;function createWebSocket() {
      (o = new WebSocket(SY_CONF[confArr[16]])).onopen = function (e) {
        o.send(JSON.stringify({ code: 1, wecha_id: a })), console.log("\u5efa\u7acb\u901a\u8baf"), n.start();
      }, o.onclose = function (e) {
        createWebSocket();
      };
    }createWebSocket();var n = { timeout: 1e3 * t, timeoutObj: null, start: function () {
        this.timeoutObj && clearInterval(this.timeoutObj), this.timeoutObj = setInterval(function () {
          o.send(JSON.stringify({ code: 4, wecha_id: a, timer: t })), console.log("\u4fdd\u6301\u901a\u8baf");
        }, this.timeout);
      } };
  }, getCommitIdStatus: () => {
    wx.request({ url: confArr[23], data: { commitId: Sygame.commit_id }, method: "POST", success: e => {
        4001 == e.data.popup_status ? Sygame.commitIdStatus = !0 : Sygame.commitIdStatus = !1, console.log("getCommitIdStatus", Sygame.commitIdStatus);
      } });
  }, newUserPopupFunc: () => {
    if (0 == Sygame.commitIdStatus) return !1;wx.request({ url: confArr[24], data: { appid: Sygame.appid, openid: Sygame.openid, realOpenid: Sygame.real_openid }, method: "POST", success: e => {
        if (4001 == e.data.status) return Sygame.popupStatus = !1, console.log("\u7528\u6237\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u65e0\u6cd5\u8fdb\u5165\u65b0\u7528\u62377\u5929\u8ba1\u65f6"), !1;Sygame.popupStatus = !0, Sygame.popupData = e.data.data, console.log("\u8fdb\u5165\u65b0\u7528\u62377\u5929\u8ba1\u65f6"), window.timeInterval = setInterval(timing, 1e3);
      } });var o = 0;function timing() {
      if (o >= Sygame.popupData.remain_time) return Sygame.commitIdStatus = !1, Sygame.popupStatus = !1, clearInterval(window.timeInterval), !1;if (o > Sygame.popupData.popup_cycle) return clearInterval(window.timeInterval), !1;if (0 == Sygame.commitIdStatus || 0 == Sygame.popupStatus) return clearInterval(window.timeInterval), !1;var e = o;var a = Sygame.popupData;a.is_first_login && e == a.first_popup_time && Sygame.reportClickThePopup(0, a.first_popup_cont), e && e <= a.popup_cycle && e % a.popup_interval == 0 && Sygame.reportClickThePopup(1, a.first_popup_cont), o++;
    }
  }, reportClickThePopup: (o, t) => new Promise(function (a, e) {
    if (!t) return !1;wx.showModal({ title: "\u8df3\u8f6c\u63d0\u793a", content: t, confirmText: "\u786e\u8ba4", showCancel: !1, success: () => {
        wx.request({ url: confArr[25], data: { appid: Sygame.appid, openid: Sygame.openid, real_openid: Sygame.real_openid, roleid: Sygame.role_id, type: o }, method: "POST", success: e => {
            a();
          } });
      } });
  }), popupPayFunc: o => new Promise(function (e, a) {
    if (!Sygame.commitIdStatus || !Sygame.popupStatus) return e(), !1;0 == o && Sygame.reportClickThePopup(2, Sygame.popupData.pay_before).then(() => {
      e();
    }), o && (clearInterval(window.timeInterval), Sygame.commitIdStatus = !1, Sygame.popupStatus = !1, e()), o && Sygame.popupData.first_pay_price == o && Sygame.reportClickThePopup(3, Sygame.popupData.pay_after).then(() => {
      e();
    });
  }) };export default Sygame;