var k = wx.$f;
let confArr = ["", k[25698], k[25699], k[25700], k[25701], k[25702], k[25703], k[25704], k[25705], k[25706], k[25707], k[25708], k[25709], k[25710], k[25711], k[25712], k[25713], k[25714]];const SY_CONF = { APP_ID: k[25715], APP_VERSION: k[25716], GAME_KEY: k[25717], offerId: k[25718] };const Sygame = { appid: "", app_version: k[25719], openid: "", real_openid: "", share_data: {}, clipboard: "", role_id: 0, role_name: "", server_id: "", server_name: "", init: e => {
    Sygame.appid = SY_CONF[confArr[1]], Sygame.query = e.query, Sygame.channel = SY_CONF[confArr[6]], Sygame.offerId = SY_CONF.offerId, Sygame.scene = e.scene, console.log(k[25720], Sygame);let a = { query: e.query };wx.request({ url: confArr[17], data: { appid: Sygame.appid }, method: k[25721], success: e => {
        console.log(k[25722], e), e.data.is_open_clipboard && wx.getClipboardData({ success(e) {
            e.data && (Sygame.clipboard = e.data), console.log(k[25723], e);
          } }), wx.request({ url: confArr[7], data: a, method: k[25721], success: e => {
            console.log(k[25724], e);
          } });
      } }), Sygame.getShareData(), wx.showShareMenu(), wx.onShareAppMessage(() => {
      var e = Sygame.share_data[1];var a = e.length;e = e[Math.floor(Math.random() * a)];console.log(k[25725], e);a = { title: e.title, imageUrlId: e.imageUrlId, imageUrl: e.imageUrl };return console.log(k[25726], e), a;
    });
  }, syLogin: () => new Promise(function (n, e) {
    wx.login({ success(e) {
        if (console.log(k[25727], e), !e.code) return !1;var a = confArr[2];wx.request({ url: a, data: { code: e.code, appid: Sygame.appid, version: Sygame.app_version, query: Sygame.query, scene: Sygame.scene, channel: Sygame.channel, clipboard: Sygame.clipboard }, success(o) {
            if (console.log(k[25728], o), 1001 == o.data.code) n(o.data), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid;else if (3001 == o.data.code) {
              var e = !0;var t = 0;if (1 == o.data.jump_mandatory) e = !1;else {
                var a = k[25729] + o.data.openid;if (t = Sygame.cookieData({ type: k[437], key: a }), 0 < o.data.jump_mandatory_number && t >= o.data.jump_mandatory_number) {
                  a = [];return a.code = 1001, a.openid = o.data.openid, a.real_openid = o.data.real_openid, n(a), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid, !1;
                }
              }wx.showModal({ title: o.data.jump_title_tip || k[25730], content: o.data.jump_tip ? o.data.jump_tip.replace(/\\n/g, "\n") : k[25731], confirmText: o.data.jump_button_tip || k[8479], cancelText: o.data.jump_cancel_tip || k[8480], showCancel: e, success: e => {
                  var a;e.cancel ? ((a = []).code = 1001, a.openid = o.data.openid, a.real_openid = o.data.real_openid, n(a), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid, 0 < o.data.jump_mandatory_number && (e = new Date(new Date().toLocaleDateString()).getTime() + 864e5, a = k[25729] + o.data.openid, Sygame.cookieData({ type: k[19], key: a, data: t + 1, expired_at: e }))) : o.data.jump_to ? wx.onTouchStart(() => {
                    wx.navigateToMiniProgram({ appId: o.data.jump_to, path: o.data.jump_path, success: () => {
                        console.log("syForceJump:success");
                      } });
                  }) : o.data.jump_img ? (wx.previewImage({ urls: [o.data.jump_img] }), wx.onTouchStart(() => {
                    wx.showModal({ title: k[25730], content: o.data.jump_tip || k[25731], confirmText: k[8479], showCancel: !1, success: () => {
                        wx.previewImage({ urls: [o.data.jump_img] });
                      } });
                  })) : o.data.jump_copy ? (wx.setClipboardData({ data: o.data.jump_copy, success(e) {
                      console.log(k[25732], o.data);
                    } }), wx.onTouchStart(() => {
                    wx.showModal({ title: k[25730], content: o.data.jump_tip || k[25731], confirmText: k[8479], showCancel: !1, success: () => {
                        wx.setClipboardData({ data: o.data.jump_copy, success(e) {
                            console.log(k[25732], o.data);
                          } });
                      } });
                  })) : o.data.jump_copy_apk && (wx.setClipboardData({ data: o.data.jump_copy_apk, success(e) {
                      console.log(k[25732], o.data);
                    } }), wx.onTouchStart(() => {
                    wx.openCustomerServiceConversation({ sessionFrom: k[25733] + Sygame.appid, showMessageCard: !0, sendMessageImg: k[25734], success: () => {
                        console.log(k[8866]);
                      } });
                  }));
                } });
            } else 5001 == o.data.code && (wx.showModal({ title: k[25735], content: o.data.game_tip || k[25736], confirmText: k[8479], showCancel: !1, success: () => {
                console.log(k[25737], o);
              } }), wx.onTouchStart(() => {
              wx.showModal({ title: k[25735], content: o.data.game_tip || k[25736], confirmText: k[8479], showCancel: !1, success: () => {
                  console.log(k[25737], o);
                } });
            }));
          } });
      }, fail: function () {
        console.log(k[23040]);
      } });
  }), syReportRoleInfo: t => new Promise(function (a, e) {
    if (k[272] != typeof t) return k[25738];var o = confArr[3];t.role_id && void 0 !== t.role_id && (Sygame.role_id = t.role_id), t.role_name && void 0 !== t.role_name && (Sygame.role_name = t.role_name), t.server_id && void 0 !== t.server_id && (Sygame.server_id = t.server_id), t.server_name && void 0 !== t.server_name && (Sygame.server_name = t.server_name), t.wecha_id = Sygame.openid, t.real_openid = Sygame.real_openid, t.channel = Sygame.channel, t.query = Sygame.query, t.scene = Sygame.scene, t.appid = Sygame.appid, t.version = Sygame.app_version, wx.request({ url: o, data: t, method: k[25721], success: e => {
        console.log(k[25739], e), e.data.is_gs_login && Sygame.syUserLoginRecord(Sygame.openid, e.data.request_time), a(e.data);
      } });
  }), syPay: t => new Promise(function (e, a) {
    var o = confArr[5];k[272] == typeof t ? (t.openid = Sygame.openid, t.real_openid = Sygame.real_openid, t.appid = Sygame.appid, t.channel = Sygame.channel, t.version = Sygame.app_version, t.is_buckle_pay = 0, wx.request({ url: o, method: k[25721], data: t, success: function (a) {
        switch (console.log(k[25740], a), a.data.payType) {case "1":
            1 == a.data.can_use_balance ? wx.showModal({ title: k[25741], content: a.data.midas_pay_tip, confirmText: k[8479], showCancel: k[8480], success: e => {
                e.confirm ? (t.is_buckle_pay = 1, Sygame.syDescMidasCoin(t)) : (console.log(k[25742]), Sygame.syMidasPay(t));
              } }) : Sygame.syMidasPay(t);break;case "2":
            wx.showModal({ title: k[25743], content: k[25744], confirmText: k[25745], showCancel: !1, success: e => {
                e.confirm && wx.openCustomerServiceConversation({ sessionFrom: k[25746] + a.data.payId, showMessageCard: !0, sendMessageImg: k[25747], success: () => {
                    console.log(k[8866]);
                  } });
              } });break;case "3":
            wx.previewImage({ urls: [a.data.payImage] });}
      } })) : a(k[25748]);
  }), syDescMidasCoin: e => {
    wx.request({ url: confArr[11], data: e, method: k[25721], dataType: k[5201], success: function (e) {
        console.log(k[25749], e), wx.showModal({ title: k[5724], content: e.data.tip, confirmText: k[8479], showCancel: k[8480], success: e => {
            e.confirm;
          } });
      }, fail: function (e) {
        console.log(k[25750], e);
      } });
  }, syMidasPay: a => {
    wx.requestMidasPayment({ mode: k[25751], env: 0, offerId: Sygame.offerId, currencyType: k[25752], buyQuantity: 100 * a.product_price, platform: k[25753], success(e) {
        Sygame.syDescMidasCoin(a), console.log(k[25754], e);
      }, fail(e) {
        console.log(e);
      }, complete(e) {
        console.log(e);
      } });
  }, syBindMobile: e => new Promise(function (e, a) {
    Sygame.channel;var o = Sygame.openid;wx.openCustomerServiceConversation({ sessionFrom: k[25755] + o, success: () => {
        console.log(k[25756]);
      } });
  }), syGetSubscribe: t => new Promise(function (o, a) {
    wx.requestSubscribeMessage({ tmplIds: [t.template], success: e => {
        console.log(k[25757], e);let a = "";a = k[25758] === e[t.template] ? k[25759] : k[526], wx.request({ url: confArr[12], data: { openid: Sygame.openid, channel: Sygame.channel, role_id: t.role_id, tpl_type: t.tpl_type, type: a }, method: k[25721], dataType: k[5201], success: function (e) {
            o(e);
          }, fail: function (e) {
            console.log(k[25750], e);
          } });
      }, fail(e) {
        console.error(e), a();
      } });
  }), syGetBoxList: o => new Promise(function (a, e) {
    wx.request({ url: confArr[13], data: { wecha_id: Sygame.openid, appid: Sygame.appid, page: o.page, count: o.count }, method: k[25721], dataType: k[5201], success: function (e) {
        console.log(k[25760], e), a(e);
      }, fail: function (e) {
        console.log(k[25750], e);
      } });
  }), syClickOpenBox: () => new Promise(function (a, e) {
    var o = k[25761] + Sygame.openid;var t = Sygame.cookieData({ type: k[437], key: o }) ? 0 : 1;wx.request({ url: confArr[14], data: { wecha_id: Sygame.openid, appid: Sygame.appid, uv: t }, method: k[25721], dataType: k[5201], success: function (e) {
        1 == t && Sygame.cookieData({ type: k[19], key: o, data: 1 }), console.log(k[25762], e.data), a(e.data);
      }, fail: function (e) {
        console.log(k[25750], e);
      } });
  }), syClickBox: n => new Promise(function (a, e) {
    var o = k[20320] + n.game_id;var t = Sygame.cookieData({ type: k[437], key: o }) ? 0 : 1;wx.request({ url: confArr[15], data: { wecha_id: Sygame.openid, appid: Sygame.appid, uv: t, game_id: n.game_id, tunnel_id: n.tunnel_id, jump_appid: n.jump_appid, jump_path: n.jump_path }, method: k[25721], dataType: k[5201], success: function (e) {
        1 == t && Sygame.cookieData({ type: k[19], key: o, data: 1 }), console.log(k[25763], e.data), a(e.data);
      }, fail: function (e) {
        console.log(k[25750], e);
      } });
  }), getShareData: a => {
    wx.request({ url: confArr[8], data: { appid: Sygame.appid, channel: Sygame.channel }, method: k[25721], dataType: k[5201], success: function (e) {
        console.log(k[25764], e), 1001 == e.data.status ? (console.log(k[25765], e.data.data), Sygame.share_data = e.data.data) : (a.errorCallback(e), console.log(k[25766], e));
      }, fail: function (e) {
        console.log(k[25750], e);
      } });
  }, goShareData: e => {
    var a = Sygame.share_data[e.type];var o = a.length;a = a[Math.floor(Math.random() * o)];console.log(k[25767], a);o = { title: a.title, imageUrlId: a.imageUrlId, imageUrl: a.imageUrl, query: e.shareQuery + k[25768] + a.id };console.log(k[25765], a), wx.shareAppMessage(o), e.successCallback(a);
  }, upShareData: e => {
    var a = k[25769] + e.material_id;var o = Sygame.cookieData({ type: k[437], key: a }) ? 1 : 0;0 == o && Sygame.cookieData({ type: k[19], key: a, data: new Date().getTime() }), e.log = o, wx.request({ url: confArr[9], data: e, method: k[25721], dataType: k[5201], success: function (e) {
        console.log(e);
      }, fail: function (e) {
        console.log(k[25750], e);
      } });
  }, upClickData: e => {
    var a = k[25770] + e.material_id;var o = Sygame.cookieData({ type: k[437], key: a }) ? 1 : 0;0 == o && Sygame.cookieData({ type: k[19], key: a, data: new Date().getTime() }), e.log = o, wx.request({ url: confArr[10], data: e, method: k[25721], dataType: k[5201], success: function (e) {
        console.log(e);
      }, fail: function (e) {
        console.log(k[25750], e);
      } });
  }, cookieData: e => {
    switch (e.type) {case k[437]:
        var a = wx.getStorageSync(e.key);try {
          if (a = JSON.parse(a), new Date().getTime() < a.expired_at) return a.data;
        } catch (e) {}return !1;case k[19]:
        e.expired_at || (e.expired_at = new Date(new Date().toLocaleDateString()).getTime() + 31536e7);try {
          return wx.setStorageSync(e.key, JSON.stringify({ data: e.data, expired_at: e.expired_at })), !0;
        } catch (e) {}return !1;case "rm":
        return wx.removeStorageSync(e.key), !0;}
  }, syUserLoginRecord: (a, e) => {
    var o;var t = e || 30;function createWebSocket() {
      (o = new WebSocket(SY_CONF[confArr[16]])).onopen = function (e) {
        o.send(JSON.stringify({ code: 1, wecha_id: a })), console.log(k[25771]), n.start();
      }, o.onclose = function (e) {
        createWebSocket();
      };
    }createWebSocket();var n = { timeout: 1e3 * t, timeoutObj: null, start: function () {
        this.timeoutObj && clearInterval(this.timeoutObj), this.timeoutObj = setInterval(function () {
          o.send(JSON.stringify({ code: 4, wecha_id: a, timer: t })), console.log(k[25772]);
        }, this.timeout);
      } };
  } };export default Sygame;