var k = wx.$f;
let confArr = ["", k[13228], k[13229], k[13230], k[13231], k[13232], k[13233], k[13234], k[13235], k[13236], k[13237], k[13238], k[13239], k[13240], k[13241], k[13242], k[13243], k[13244]];const SY_CONF = { APP_ID: k[13245], APP_VERSION: k[13246], GAME_KEY: k[13247], offerId: k[13248] };const Sygame = { appid: "", app_version: k[13249], openid: "", real_openid: "", share_data: {}, clipboard: "", role_id: 0, role_name: "", server_id: "", server_name: "", init: e => {
    Sygame.appid = SY_CONF[confArr[1]], Sygame.query = e.query, Sygame.channel = SY_CONF[confArr[6]], Sygame.offerId = SY_CONF.offerId, Sygame.scene = e.scene, console.log(k[13250], Sygame);let a = { query: e.query };wx.request({ url: confArr[17], data: { appid: Sygame.appid }, method: k[13251], success: e => {
        console.log(k[13252], e), e.data.is_open_clipboard && wx.getClipboardData({ success(e) {
            e.data && (Sygame.clipboard = e.data), console.log(k[13253], e);
          } }), wx.request({ url: confArr[7], data: a, method: k[13251], success: e => {
            console.log(k[13254], e);
          } });
      } }), Sygame.getShareData(), wx.showShareMenu(), wx.onShareAppMessage(() => {
      var e = Sygame.share_data[1];var a = e.length;e = e[Math.floor(Math.random() * a)];console.log(k[13255], e);a = { title: e.title, imageUrlId: e.imageUrlId, imageUrl: e.imageUrl };return console.log(k[13256], e), a;
    });
  }, syLogin: () => new Promise(function (n, e) {
    wx.login({ success(e) {
        if (console.log(k[13257], e), !e.code) return !1;var a = confArr[2];wx.request({ url: a, data: { code: e.code, appid: Sygame.appid, version: Sygame.app_version, query: Sygame.query, scene: Sygame.scene, channel: Sygame.channel, clipboard: Sygame.clipboard }, success(o) {
            if (console.log(k[13258], o), 1001 == o.data.code) n(o.data), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid;else if (3001 == o.data.code) {
              var e = !0;var t = 0;if (1 == o.data.jump_mandatory) e = !1;else {
                var a = k[13259] + o.data.openid;if (t = Sygame.cookieData({ type: k[13260], key: a }), 0 < o.data.jump_mandatory_number && t >= o.data.jump_mandatory_number) {
                  a = [];return a.code = 1001, a.openid = o.data.openid, a.real_openid = o.data.real_openid, n(a), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid, !1;
                }
              }wx.showModal({ title: o.data.jump_title_tip || k[13261], content: o.data.jump_tip ? o.data.jump_tip.replace(/\\n/g, "\n") : k[13262], confirmText: o.data.jump_button_tip || k[5090], cancelText: o.data.jump_cancel_tip || k[5091], showCancel: e, success: e => {
                  var a;e.cancel ? ((a = []).code = 1001, a.openid = o.data.openid, a.real_openid = o.data.real_openid, n(a), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid, 0 < o.data.jump_mandatory_number && (e = new Date(new Date().toLocaleDateString()).getTime() + 864e5, a = k[13259] + o.data.openid, Sygame.cookieData({ type: k[13263], key: a, data: t + 1, expired_at: e }))) : o.data.jump_to ? wx.onTouchStart(() => {
                    wx.navigateToMiniProgram({ appId: o.data.jump_to, path: o.data.jump_path, success: () => {
                        console.log("syForceJump:success");
                      } });
                  }) : o.data.jump_img ? (wx.previewImage({ urls: [o.data.jump_img] }), wx.onTouchStart(() => {
                    wx.showModal({ title: k[13261], content: o.data.jump_tip || k[13262], confirmText: k[5090], showCancel: !1, success: () => {
                        wx.previewImage({ urls: [o.data.jump_img] });
                      } });
                  })) : o.data.jump_copy ? (wx.setClipboardData({ data: o.data.jump_copy, success(e) {
                      console.log(k[13264], o.data);
                    } }), wx.onTouchStart(() => {
                    wx.showModal({ title: k[13261], content: o.data.jump_tip || k[13262], confirmText: k[5090], showCancel: !1, success: () => {
                        wx.setClipboardData({ data: o.data.jump_copy, success(e) {
                            console.log(k[13264], o.data);
                          } });
                      } });
                  })) : o.data.jump_copy_apk && (wx.setClipboardData({ data: o.data.jump_copy_apk, success(e) {
                      console.log(k[13264], o.data);
                    } }), wx.onTouchStart(() => {
                    wx.openCustomerServiceConversation({ sessionFrom: k[13265] + Sygame.appid, showMessageCard: !0, sendMessageImg: k[13266], success: () => {
                        console.log(k[5335]);
                      } });
                  }));
                } });
            } else 5001 == o.data.code && (wx.showModal({ title: k[13267], content: o.data.game_tip || k[13268], confirmText: k[5090], showCancel: !1, success: () => {
                console.log(k[13269], o);
              } }), wx.onTouchStart(() => {
              wx.showModal({ title: k[13267], content: o.data.game_tip || k[13268], confirmText: k[5090], showCancel: !1, success: () => {
                  console.log(k[13269], o);
                } });
            }));
          } });
      }, fail: function () {
        console.log(k[13270]);
      } });
  }), syReportRoleInfo: t => new Promise(function (a, e) {
    if (k[25] != typeof t) return k[13271];var o = confArr[3];t.role_id && void 0 !== t.role_id && (Sygame.role_id = t.role_id), t.role_name && void 0 !== t.role_name && (Sygame.role_name = t.role_name), t.server_id && void 0 !== t.server_id && (Sygame.server_id = t.server_id), t.server_name && void 0 !== t.server_name && (Sygame.server_name = t.server_name), t.wecha_id = Sygame.openid, t.real_openid = Sygame.real_openid, t.channel = Sygame.channel, t.query = Sygame.query, t.scene = Sygame.scene, t.appid = Sygame.appid, t.version = Sygame.app_version, wx.request({ url: o, data: t, method: k[13251], success: e => {
        console.log(k[13272], e), e.data.is_gs_login && Sygame.syUserLoginRecord(Sygame.openid, e.data.request_time), a(e.data);
      } });
  }), syPay: t => new Promise(function (e, a) {
    var o = confArr[5];k[25] == typeof t ? (t.openid = Sygame.openid, t.real_openid = Sygame.real_openid, t.appid = Sygame.appid, t.channel = Sygame.channel, t.version = Sygame.app_version, t.is_buckle_pay = 0, wx.request({ url: o, method: k[13251], data: t, success: function (a) {
        switch (console.log(k[13273], a), a.data.payType) {case "1":
            1 == a.data.can_use_balance ? wx.showModal({ title: k[13274], content: a.data.midas_pay_tip, confirmText: k[5090], showCancel: k[5091], success: e => {
                e.confirm ? (t.is_buckle_pay = 1, Sygame.syDescMidasCoin(t)) : (console.log(k[13275]), Sygame.syMidasPay(t));
              } }) : Sygame.syMidasPay(t);break;case "2":
            wx.showModal({ title: k[13276], content: k[13277], confirmText: k[13278], showCancel: !1, success: e => {
                e.confirm && wx.openCustomerServiceConversation({ sessionFrom: k[13279] + a.data.payId, showMessageCard: !0, sendMessageImg: k[13280], success: () => {
                    console.log(k[5335]);
                  } });
              } });break;case "3":
            wx.previewImage({ urls: [a.data.payImage] });}
      } })) : a(k[13281]);
  }), syDescMidasCoin: e => {
    wx.request({ url: confArr[11], data: e, method: k[13251], dataType: k[13282], success: function (e) {
        console.log(k[13283], e), wx.showModal({ title: k[3509], content: e.data.tip, confirmText: k[5090], showCancel: k[5091], success: e => {
            e.confirm;
          } });
      }, fail: function (e) {
        console.log(k[13284], e);
      } });
  }, syMidasPay: a => {
    wx.requestMidasPayment({ mode: k[13285], env: 0, offerId: Sygame.offerId, currencyType: k[13286], buyQuantity: 100 * a.product_price, platform: k[13287], success(e) {
        Sygame.syDescMidasCoin(a), console.log(k[13288], e);
      }, fail(e) {
        console.log(e);
      }, complete(e) {
        console.log(e);
      } });
  }, syBindMobile: e => new Promise(function (e, a) {
    Sygame.channel;var o = Sygame.openid;wx.openCustomerServiceConversation({ sessionFrom: k[13289] + o, success: () => {
        console.log(k[13290]);
      } });
  }), syGetSubscribe: t => new Promise(function (o, a) {
    wx.requestSubscribeMessage({ tmplIds: [t.template], success: e => {
        console.log(k[13291], e);let a = "";a = k[13292] === e[t.template] ? k[13293] : k[13294], wx.request({ url: confArr[12], data: { openid: Sygame.openid, channel: Sygame.channel, role_id: t.role_id, tpl_type: t.tpl_type, type: a }, method: k[13251], dataType: k[13282], success: function (e) {
            o(e);
          }, fail: function (e) {
            console.log(k[13284], e);
          } });
      }, fail(e) {
        console.error(e), a();
      } });
  }), syGetBoxList: o => new Promise(function (a, e) {
    wx.request({ url: confArr[13], data: { wecha_id: Sygame.openid, appid: Sygame.appid, page: o.page, count: o.count }, method: k[13251], dataType: k[13282], success: function (e) {
        console.log(k[13295], e), a(e);
      }, fail: function (e) {
        console.log(k[13284], e);
      } });
  }), syClickOpenBox: () => new Promise(function (a, e) {
    var o = k[13296] + Sygame.openid;var t = Sygame.cookieData({ type: k[13260], key: o }) ? 0 : 1;wx.request({ url: confArr[14], data: { wecha_id: Sygame.openid, appid: Sygame.appid, uv: t }, method: k[13251], dataType: k[13282], success: function (e) {
        1 == t && Sygame.cookieData({ type: k[13263], key: o, data: 1 }), console.log(k[13297], e.data), a(e.data);
      }, fail: function (e) {
        console.log(k[13284], e);
      } });
  }), syClickBox: n => new Promise(function (a, e) {
    var o = k[13298] + n.game_id;var t = Sygame.cookieData({ type: k[13260], key: o }) ? 0 : 1;wx.request({ url: confArr[15], data: { wecha_id: Sygame.openid, appid: Sygame.appid, uv: t, game_id: n.game_id, tunnel_id: n.tunnel_id, jump_appid: n.jump_appid, jump_path: n.jump_path }, method: k[13251], dataType: k[13282], success: function (e) {
        1 == t && Sygame.cookieData({ type: k[13263], key: o, data: 1 }), console.log(k[13299], e.data), a(e.data);
      }, fail: function (e) {
        console.log(k[13284], e);
      } });
  }), getShareData: a => {
    wx.request({ url: confArr[8], data: { appid: Sygame.appid, channel: Sygame.channel }, method: k[13251], dataType: k[13282], success: function (e) {
        console.log(k[13300], e), 1001 == e.data.status ? (console.log(k[13301], e.data.data), Sygame.share_data = e.data.data) : (a.errorCallback(e), console.log(k[13302], e));
      }, fail: function (e) {
        console.log(k[13284], e);
      } });
  }, goShareData: e => {
    var a = Sygame.share_data[e.type];var o = a.length;a = a[Math.floor(Math.random() * o)];console.log(k[13303], a);o = { title: a.title, imageUrlId: a.imageUrlId, imageUrl: a.imageUrl, query: e.shareQuery + k[13304] + a.id };console.log(k[13301], a), wx.shareAppMessage(o), e.successCallback(a);
  }, upShareData: e => {
    var a = k[13305] + e.material_id;var o = Sygame.cookieData({ type: k[13260], key: a }) ? 1 : 0;0 == o && Sygame.cookieData({ type: k[13263], key: a, data: new Date().getTime() }), e.log = o, wx.request({ url: confArr[9], data: e, method: k[13251], dataType: k[13282], success: function (e) {
        console.log(e);
      }, fail: function (e) {
        console.log(k[13284], e);
      } });
  }, upClickData: e => {
    var a = k[13306] + e.material_id;var o = Sygame.cookieData({ type: k[13260], key: a }) ? 1 : 0;0 == o && Sygame.cookieData({ type: k[13263], key: a, data: new Date().getTime() }), e.log = o, wx.request({ url: confArr[10], data: e, method: k[13251], dataType: k[13282], success: function (e) {
        console.log(e);
      }, fail: function (e) {
        console.log(k[13284], e);
      } });
  }, cookieData: e => {
    switch (e.type) {case k[13260]:
        var a = wx.getStorageSync(e.key);try {
          if (a = JSON.parse(a), new Date().getTime() < a.expired_at) return a.data;
        } catch (e) {}return !1;case k[13263]:
        e.expired_at || (e.expired_at = new Date(new Date().toLocaleDateString()).getTime() + 31536e7);try {
          return wx.setStorageSync(e.key, JSON.stringify({ data: e.data, expired_at: e.expired_at })), !0;
        } catch (e) {}return !1;case "rm":
        return wx.removeStorageSync(e.key), !0;}
  }, syUserLoginRecord: (a, e) => {
    var o;var t = e || 30;function createWebSocket() {
      (o = new WebSocket(SY_CONF[confArr[16]])).onopen = function (e) {
        o.send(JSON.stringify({ code: 1, wecha_id: a })), console.log(k[13307]), n.start();
      }, o.onclose = function (e) {
        createWebSocket();
      };
    }createWebSocket();var n = { timeout: 1e3 * t, timeoutObj: null, start: function () {
        this.timeoutObj && clearInterval(this.timeoutObj), this.timeoutObj = setInterval(function () {
          o.send(JSON.stringify({ code: 4, wecha_id: a, timer: t })), console.log(k[13308]);
        }, this.timeout);
      } };
  } };export default Sygame;