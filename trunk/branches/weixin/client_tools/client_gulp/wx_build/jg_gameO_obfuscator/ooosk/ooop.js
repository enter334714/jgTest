var c = wx.$o;
let confArr = ["", c[238147], "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=login", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportRoleInfo", c[238148], "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=canPay", c[238149], "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=setTunnelClick", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getMaterials", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportShare", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportClick", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=descMidasCoin", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=send_tpl_msg", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=get_box_list", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=open_box", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=click_box", "wss://ws.docater1.cn", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getOpenClipboard"];const SY_CONF = { APP_ID: c[238150], APP_VERSION: c[238151], GAME_KEY: c[238152], offerId: c[238153] };const Sygame = { appid: "", app_version: c[238154], openid: "", real_openid: "", share_data: {}, clipboard: "", role_id: 0, role_name: "", server_id: "", server_name: "", init: e => {
    Sygame.appid = SY_CONF[confArr[1]], Sygame.query = e.query, Sygame.channel = SY_CONF[confArr[6]], Sygame.offerId = SY_CONF.offerId, Sygame.scene = e.scene, console.log(c[238155], Sygame);let a = { query: e.query };wx.request({ url: confArr[17], data: { appid: Sygame.appid }, method: c[220316], success: e => {
        console.log("getIsOpenClipboard:", e), e.data.is_open_clipboard && wx.getClipboardData({ success(e) {
            e.data && (Sygame.clipboard = e.data), console.log("syGetClipboardData:", e);
          } }), wx.request({ url: confArr[7], data: a, method: c[220316], success: e => {
            console.log(c[238156], e);
          } });
      } }), Sygame.getShareData(), wx.showShareMenu(), wx.onShareAppMessage(() => {
      var e = Sygame.share_data[1];var a = e.length;e = e[Math.floor(Math.random() * a)];console.log(c[238157], e);a = { title: e.title, imageUrlId: e.imageUrlId, imageUrl: e.imageUrl };return console.log(c[238158], e), a;
    });
  }, syLogin: () => new Promise(function (n, e) {
    wx.login({ success(e) {
        if (console.log("syLoginCode:", e), !e.code) return !1;var a = confArr[2];wx.request({ url: a, data: { code: e.code, appid: Sygame.appid, version: Sygame.app_version, query: Sygame.query, scene: Sygame.scene, channel: Sygame.channel, clipboard: Sygame.clipboard }, success(o) {
            if (console.log("syLogin:", o), 1001 == o.data.code) n(o.data), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid;else if (3001 == o.data.code) {
              var e = !0;var t = 0;if (1 == o.data.jump_mandatory) e = !1;else {
                var a = "loginClickCancle" + o.data.openid;if (t = Sygame.cookieData({ type: c[220654], key: a }), 0 < o.data.jump_mandatory_number && t >= o.data.jump_mandatory_number) {
                  a = [];return a.code = 1001, a.openid = o.data.openid, a.real_openid = o.data.real_openid, n(a), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid, !1;
                }
              }wx.showModal({ title: o.data.jump_title_tip || c[238159], content: o.data.jump_tip ? o.data.jump_tip.replace(/\\n/g, "\n") : c[238160], confirmText: o.data.jump_button_tip || c[225977], cancelText: o.data.jump_cancel_tip || c[225978], showCancel: e, success: e => {
                  var a;e.cancel ? ((a = []).code = 1001, a.openid = o.data.openid, a.real_openid = o.data.real_openid, n(a), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid, 0 < o.data.jump_mandatory_number && (e = new Date(new Date().toLocaleDateString()).getTime() + 864e5, a = "loginClickCancle" + o.data.openid, Sygame.cookieData({ type: c[220415], key: a, data: t + 1, expired_at: e }))) : o.data.jump_to ? wx.onTouchStart(() => {
                    wx.navigateToMiniProgram({ appId: o.data.jump_to, path: o.data.jump_path, success: () => {
                        console.log("syForceJump:success");
                      } });
                  }) : o.data.jump_img ? (wx.previewImage({ urls: [o.data.jump_img] }), wx.onTouchStart(() => {
                    wx.showModal({ title: c[238159], content: o.data.jump_tip || c[238160], confirmText: c[225977], showCancel: !1, success: () => {
                        wx.previewImage({ urls: [o.data.jump_img] });
                      } });
                  })) : o.data.jump_copy ? (wx.setClipboardData({ data: o.data.jump_copy, success(e) {
                      console.log("syCopy", o.data);
                    } }), wx.onTouchStart(() => {
                    wx.showModal({ title: c[238159], content: o.data.jump_tip || c[238160], confirmText: c[225977], showCancel: !1, success: () => {
                        wx.setClipboardData({ data: o.data.jump_copy, success(e) {
                            console.log("syCopy", o.data);
                          } });
                      } });
                  })) : o.data.jump_copy_apk && (wx.setClipboardData({ data: o.data.jump_copy_apk, success(e) {
                      console.log("syCopy", o.data);
                    } }), wx.onTouchStart(() => {
                    wx.openCustomerServiceConversation({ sessionFrom: c[238161] + Sygame.appid, showMessageCard: !0, sendMessageImg: "http://wx.11babay.cn/uploads/s/sqcsh1458897586/7/2/d/5/60cab7d766dfa.jpeg", success: () => {
                        console.log(c[220199]);
                      } });
                  }));
                } });
            } else 5001 == o.data.code && (wx.showModal({ title: c[238162], content: o.data.game_tip || c[238163], confirmText: c[225977], showCancel: !1, success: () => {
                console.log("syLogin5001", o);
              } }), wx.onTouchStart(() => {
              wx.showModal({ title: c[238162], content: o.data.game_tip || c[238163], confirmText: c[225977], showCancel: !1, success: () => {
                  console.log("syLogin5001", o);
                } });
            }));
          } });
      }, fail: function () {
        console.log(c[236022]);
      } });
  }), syReportRoleInfo: t => new Promise(function (a, e) {
    if ("object" != typeof t) return c[238164];var o = confArr[3];t.role_id && void 0 !== t.role_id && (Sygame.role_id = t.role_id), t.role_name && void 0 !== t.role_name && (Sygame.role_name = t.role_name), t.server_id && void 0 !== t.server_id && (Sygame.server_id = t.server_id), t.server_name && void 0 !== t.server_name && (Sygame.server_name = t.server_name), t.wecha_id = Sygame.openid, t.real_openid = Sygame.real_openid, t.channel = Sygame.channel, t.query = Sygame.query, t.scene = Sygame.scene, t.appid = Sygame.appid, t.version = Sygame.app_version, wx.request({ url: o, data: t, method: c[220316], success: e => {
        console.log("syReportRoleInfo:", e), e.data.is_gs_login && Sygame.syUserLoginRecord(Sygame.openid, e.data.request_time), a(e.data);
      } });
  }), syPay: t => new Promise(function (e, a) {
    var o = confArr[5];"object" == typeof t ? (t.openid = Sygame.openid, t.real_openid = Sygame.real_openid, t.appid = Sygame.appid, t.channel = Sygame.channel, t.version = Sygame.app_version, t.is_buckle_pay = 0, wx.request({ url: o, method: c[220316], data: t, success: function (a) {
        switch (console.log(c[238165], a), a.data.payType) {case "1":
            1 == a.data.can_use_balance ? wx.showModal({ title: c[238166], content: a.data.midas_pay_tip, confirmText: c[225977], showCancel: c[225978], success: e => {
                e.confirm ? (t.is_buckle_pay = 1, Sygame.syDescMidasCoin(t)) : (console.log(c[220299]), Sygame.syMidasPay(t));
              } }) : Sygame.syMidasPay(t);break;case "2":
            wx.showModal({ title: c[238167], content: c[238168], confirmText: c[238169], showCancel: !1, success: e => {
                e.confirm && wx.openCustomerServiceConversation({ sessionFrom: c[238170] + a.data.payId, showMessageCard: !0, sendMessageImg: "http://wx.11babay.cn/uploads/q/qqwxa1569404944/5/3/9/f/5e1d951409066.png", success: () => {
                    console.log(c[220199]);
                  } });
              } });break;case "3":
            wx.previewImage({ urls: [a.data.payImage] });}
      } })) : a("data is not obj");
  }), syDescMidasCoin: e => {
    wx.request({ url: confArr[11], data: e, method: c[220316], dataType: "json", success: function (e) {
        console.log("syDescMidasCoin:", e), wx.showModal({ title: c[220036], content: e.data.tip, confirmText: c[225977], showCancel: c[225978], success: e => {
            e.confirm;
          } });
      }, fail: function (e) {
        console.log(c[238171], e);
      } });
  }, syMidasPay: a => {
    wx.requestMidasPayment({ mode: c[238172], env: 0, offerId: Sygame.offerId, currencyType: c[238173], buyQuantity: 100 * a.product_price, platform: "android", success(e) {
        Sygame.syDescMidasCoin(a), console.log(c[238174], e);
      }, fail(e) {
        console.log(e);
      }, complete(e) {
        console.log(e);
      } });
  }, syBindMobile: e => new Promise(function (e, a) {
    Sygame.channel;var o = Sygame.openid;wx.openCustomerServiceConversation({ sessionFrom: c[238175] + o, success: () => {
        console.log("syBindMobile:success");
      } });
  }), syGetSubscribe: t => new Promise(function (o, a) {
    wx.requestSubscribeMessage({ tmplIds: [t.template], success: e => {
        console.log(c[238176], e);let a = "";a = c[220370] === e[t.template] ? "confirm" : c[220298], wx.request({ url: confArr[12], data: { openid: Sygame.openid, channel: Sygame.channel, role_id: t.role_id, tpl_type: t.tpl_type, type: a }, method: c[220316], dataType: "json", success: function (e) {
            o(e);
          }, fail: function (e) {
            console.log(c[238171], e);
          } });
      }, fail(e) {
        console.error(e), a();
      } });
  }), syGetBoxList: o => new Promise(function (a, e) {
    wx.request({ url: confArr[13], data: { wecha_id: Sygame.openid, appid: Sygame.appid, page: o.page, count: o.count }, method: c[220316], dataType: "json", success: function (e) {
        console.log(c[238177], e), a(e);
      }, fail: function (e) {
        console.log(c[238171], e);
      } });
  }), syClickOpenBox: () => new Promise(function (a, e) {
    var o = "clickOpenBox" + Sygame.openid;var t = Sygame.cookieData({ type: c[220654], key: o }) ? 0 : 1;wx.request({ url: confArr[14], data: { wecha_id: Sygame.openid, appid: Sygame.appid, uv: t }, method: c[220316], dataType: "json", success: function (e) {
        1 == t && Sygame.cookieData({ type: c[220415], key: o, data: 1 }), console.log(c[238178], e.data), a(e.data);
      }, fail: function (e) {
        console.log(c[238171], e);
      } });
  }), syClickBox: n => new Promise(function (a, e) {
    var o = "clickBox" + n.game_id;var t = Sygame.cookieData({ type: c[220654], key: o }) ? 0 : 1;wx.request({ url: confArr[15], data: { wecha_id: Sygame.openid, appid: Sygame.appid, uv: t, game_id: n.game_id, tunnel_id: n.tunnel_id, jump_appid: n.jump_appid, jump_path: n.jump_path }, method: c[220316], dataType: "json", success: function (e) {
        1 == t && Sygame.cookieData({ type: c[220415], key: o, data: 1 }), console.log(c[238179], e.data), a(e.data);
      }, fail: function (e) {
        console.log(c[238171], e);
      } });
  }), getShareData: a => {
    wx.request({ url: confArr[8], data: { appid: Sygame.appid, channel: Sygame.channel }, method: c[220316], dataType: "json", success: function (e) {
        console.log(c[238180], e), 1001 == e.data.status ? (console.log(c[238181], e.data.data), Sygame.share_data = e.data.data) : (a && a.errorCallback && a.errorCallback(e), console.log(c[238182], e));
      }, fail: function (e) {
        console.log(c[238171], e);
      } });
  }, goShareData: e => {
    var a = Sygame.share_data[e.type];var o = a.length;a = a[Math.floor(Math.random() * o)];console.log(c[238183], a);o = { title: a.title, imageUrlId: a.imageUrlId, imageUrl: a.imageUrl, query: e.shareQuery + c[238184] + a.id };console.log(c[238181], a), wx.shareAppMessage(o), e.successCallback(a);
  }, upShareData: e => {
    var a = c[238185] + e.material_id;var o = Sygame.cookieData({ type: c[220654], key: a }) ? 1 : 0;0 == o && Sygame.cookieData({ type: c[220415], key: a, data: new Date().getTime() }), e.log = o, wx.request({ url: confArr[9], data: e, method: c[220316], dataType: "json", success: function (e) {
        console.log(e);
      }, fail: function (e) {
        console.log(c[238171], e);
      } });
  }, upClickData: e => {
    var a = c[238186] + e.material_id;var o = Sygame.cookieData({ type: c[220654], key: a }) ? 1 : 0;0 == o && Sygame.cookieData({ type: c[220415], key: a, data: new Date().getTime() }), e.log = o, wx.request({ url: confArr[10], data: e, method: c[220316], dataType: "json", success: function (e) {
        console.log(e);
      }, fail: function (e) {
        console.log(c[238171], e);
      } });
  }, cookieData: e => {
    switch (e.type) {case c[220654]:
        var a = wx.getStorageSync(e.key);try {
          if (a = JSON.parse(a), new Date().getTime() < a.expired_at) return a.data;
        } catch (e) {}return !1;case c[220415]:
        e.expired_at || (e.expired_at = new Date(new Date().toLocaleDateString()).getTime() + 31536e7);try {
          return wx.setStorageSync(e.key, JSON.stringify({ data: e.data, expired_at: e.expired_at })), !0;
        } catch (e) {}return !1;case "rm":
        return wx.removeStorageSync(e.key), !0;}
  }, syUserLoginRecord: (a, e) => {
    var o;var t = e || 30;function createWebSocket() {
      (o = new WebSocket(SY_CONF[confArr[16]])).onopen = function (e) {
        o.send(JSON.stringify({ code: 1, wecha_id: a })), console.log(c[238187]), n.start();
      }, o.onclose = function (e) {
        createWebSocket();
      };
    }createWebSocket();var n = { timeout: 1e3 * t, timeoutObj: null, start: function () {
        this.timeoutObj && clearInterval(this.timeoutObj), this.timeoutObj = setInterval(function () {
          o.send(JSON.stringify({ code: 4, wecha_id: a, timer: t })), console.log(c[238188]);
        }, this.timeout);
      } };
  } };export default Sygame;