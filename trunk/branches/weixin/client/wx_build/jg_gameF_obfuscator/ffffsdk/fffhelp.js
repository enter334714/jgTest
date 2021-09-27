var k = wx.$f;
let confArr = ["", k[26331], k[26332], k[26333], k[26334], k[26335], k[26336], k[26337], k[26338], k[26339], k[26340], k[26341], k[26342], k[26343], k[26344], k[26345], k[26346], k[26347]];const SY_CONF = { APP_ID: k[26348], APP_VERSION: k[26349], GAME_KEY: k[26350], offerId: k[26351] };const Sygame = { appid: "", app_version: k[26352], openid: "", real_openid: "", share_data: {}, clipboard: "", role_id: 0, role_name: "", server_id: "", server_name: "", init: e => {
    Sygame.appid = SY_CONF[confArr[1]], Sygame.query = e.query, Sygame.channel = SY_CONF[confArr[6]], Sygame.offerId = SY_CONF.offerId, Sygame.scene = e.scene, console.log(k[26353], Sygame);let a = { query: e.query };wx.request({ url: confArr[17], data: { appid: Sygame.appid }, method: k[25635], success: e => {
        console.log(k[26354], e), e.data.is_open_clipboard && wx.getClipboardData({ success(e) {
            e.data && (Sygame.clipboard = e.data), console.log(k[26355], e);
          } }), wx.request({ url: confArr[7], data: a, method: k[25635], success: e => {
            console.log(k[26356], e);
          } });
      } }), Sygame.getShareData(), wx.showShareMenu(), wx.onShareAppMessage(() => {
      var e = Sygame.share_data[1];var a = e.length;e = e[Math.floor(Math.random() * a)];console.log(k[26357], e);a = { title: e.title, imageUrlId: e.imageUrlId, imageUrl: e.imageUrl };return console.log(k[26358], e), a;
    });
  }, syLogin: () => new Promise(function (n, e) {
    wx.login({ success(e) {
        if (console.log(k[26359], e), !e.code) return !1;var a = confArr[2];wx.request({ url: a, data: { code: e.code, appid: Sygame.appid, version: Sygame.app_version, query: Sygame.query, scene: Sygame.scene, channel: Sygame.channel, clipboard: Sygame.clipboard }, success(o) {
            if (console.log(k[26360], o), 1001 == o.data.code) n(o.data), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid;else if (3001 == o.data.code) {
              var e = !0;var t = 0;if (1 == o.data.jump_mandatory) e = !1;else {
                var a = k[26361] + o.data.openid;if (t = Sygame.cookieData({ type: k[437], key: a }), 0 < o.data.jump_mandatory_number && t >= o.data.jump_mandatory_number) {
                  a = [];return a.code = 1001, a.openid = o.data.openid, a.real_openid = o.data.real_openid, n(a), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid, !1;
                }
              }wx.showModal({ title: o.data.jump_title_tip || k[26362], content: o.data.jump_tip ? o.data.jump_tip.replace(/\\n/g, "\n") : k[26363], confirmText: o.data.jump_button_tip || k[8444], cancelText: o.data.jump_cancel_tip || k[8445], showCancel: e, success: e => {
                  var a;e.cancel ? ((a = []).code = 1001, a.openid = o.data.openid, a.real_openid = o.data.real_openid, n(a), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid, 0 < o.data.jump_mandatory_number && (e = new Date(new Date().toLocaleDateString()).getTime() + 864e5, a = k[26361] + o.data.openid, Sygame.cookieData({ type: k[19], key: a, data: t + 1, expired_at: e }))) : o.data.jump_to ? wx.onTouchStart(() => {
                    wx.navigateToMiniProgram({ appId: o.data.jump_to, path: o.data.jump_path, success: () => {
                        console.log("syForceJump:success");
                      } });
                  }) : o.data.jump_img ? (wx.previewImage({ urls: [o.data.jump_img] }), wx.onTouchStart(() => {
                    wx.showModal({ title: k[26362], content: o.data.jump_tip || k[26363], confirmText: k[8444], showCancel: !1, success: () => {
                        wx.previewImage({ urls: [o.data.jump_img] });
                      } });
                  })) : o.data.jump_copy ? (wx.setClipboardData({ data: o.data.jump_copy, success(e) {
                      console.log(k[26364], o.data);
                    } }), wx.onTouchStart(() => {
                    wx.showModal({ title: k[26362], content: o.data.jump_tip || k[26363], confirmText: k[8444], showCancel: !1, success: () => {
                        wx.setClipboardData({ data: o.data.jump_copy, success(e) {
                            console.log(k[26364], o.data);
                          } });
                      } });
                  })) : o.data.jump_copy_apk && (wx.setClipboardData({ data: o.data.jump_copy_apk, success(e) {
                      console.log(k[26364], o.data);
                    } }), wx.onTouchStart(() => {
                    wx.openCustomerServiceConversation({ sessionFrom: k[26365] + Sygame.appid, showMessageCard: !0, sendMessageImg: k[26366], success: () => {
                        console.log(k[8827]);
                      } });
                  }));
                } });
            } else 5001 == o.data.code && (wx.showModal({ title: k[26367], content: o.data.game_tip || k[26368], confirmText: k[8444], showCancel: !1, success: () => {
                console.log(k[26369], o);
              } }), wx.onTouchStart(() => {
              wx.showModal({ title: k[26367], content: o.data.game_tip || k[26368], confirmText: k[8444], showCancel: !1, success: () => {
                  console.log(k[26369], o);
                } });
            }));
          } });
      }, fail: function () {
        console.log(k[26370]);
      } });
  }), syReportRoleInfo: t => new Promise(function (a, e) {
    if (k[272] != typeof t) return k[26371];var o = confArr[3];t.role_id && void 0 !== t.role_id && (Sygame.role_id = t.role_id), t.role_name && void 0 !== t.role_name && (Sygame.role_name = t.role_name), t.server_id && void 0 !== t.server_id && (Sygame.server_id = t.server_id), t.server_name && void 0 !== t.server_name && (Sygame.server_name = t.server_name), t.wecha_id = Sygame.openid, t.real_openid = Sygame.real_openid, t.channel = Sygame.channel, t.query = Sygame.query, t.scene = Sygame.scene, t.appid = Sygame.appid, t.version = Sygame.app_version, wx.request({ url: o, data: t, method: k[25635], success: e => {
        console.log(k[26372], e), e.data.is_gs_login && Sygame.syUserLoginRecord(Sygame.openid, e.data.request_time), a(e.data);
      } });
  }), syPay: t => new Promise(function (e, a) {
    var o = confArr[5];k[272] == typeof t ? (t.openid = Sygame.openid, t.real_openid = Sygame.real_openid, t.appid = Sygame.appid, t.channel = Sygame.channel, t.version = Sygame.app_version, t.is_buckle_pay = 0, wx.request({ url: o, method: k[25635], data: t, success: function (a) {
        switch (console.log(k[26373], a), a.data.payType) {case "1":
            1 == a.data.can_use_balance ? wx.showModal({ title: k[26374], content: a.data.midas_pay_tip, confirmText: k[8444], showCancel: k[8445], success: e => {
                e.confirm ? (t.is_buckle_pay = 1, Sygame.syDescMidasCoin(t)) : (console.log(k[25615]), Sygame.syMidasPay(t));
              } }) : Sygame.syMidasPay(t);break;case "2":
            wx.showModal({ title: k[26375], content: k[26376], confirmText: k[26377], showCancel: !1, success: e => {
                e.confirm && wx.openCustomerServiceConversation({ sessionFrom: k[26378] + a.data.payId, showMessageCard: !0, sendMessageImg: k[26379], success: () => {
                    console.log(k[8827]);
                  } });
              } });break;case "3":
            wx.previewImage({ urls: [a.data.payImage] });}
      } })) : a(k[26380]);
  }), syDescMidasCoin: e => {
    wx.request({ url: confArr[11], data: e, method: k[25635], dataType: k[5191], success: function (e) {
        console.log(k[26381], e), wx.showModal({ title: k[5710], content: e.data.tip, confirmText: k[8444], showCancel: k[8445], success: e => {
            e.confirm;
          } });
      }, fail: function (e) {
        console.log(k[26382], e);
      } });
  }, syMidasPay: a => {
    wx.requestMidasPayment({ mode: k[26383], env: 0, offerId: Sygame.offerId, currencyType: k[26384], buyQuantity: 100 * a.product_price, platform: k[25556], success(e) {
        Sygame.syDescMidasCoin(a), console.log(k[26385], e);
      }, fail(e) {
        console.log(e);
      }, complete(e) {
        console.log(e);
      } });
  }, syBindMobile: e => new Promise(function (e, a) {
    Sygame.channel;var o = Sygame.openid;wx.openCustomerServiceConversation({ sessionFrom: k[26386] + o, success: () => {
        console.log(k[26387]);
      } });
  }), syGetSubscribe: t => new Promise(function (o, a) {
    wx.requestSubscribeMessage({ tmplIds: [t.template], success: e => {
        console.log(k[26388], e);let a = "";a = k[25724] === e[t.template] ? k[25613] : k[526], wx.request({ url: confArr[12], data: { openid: Sygame.openid, channel: Sygame.channel, role_id: t.role_id, tpl_type: t.tpl_type, type: a }, method: k[25635], dataType: k[5191], success: function (e) {
            o(e);
          }, fail: function (e) {
            console.log(k[26382], e);
          } });
      }, fail(e) {
        console.error(e), a();
      } });
  }), syGetBoxList: o => new Promise(function (a, e) {
    wx.request({ url: confArr[13], data: { wecha_id: Sygame.openid, appid: Sygame.appid, page: o.page, count: o.count }, method: k[25635], dataType: k[5191], success: function (e) {
        console.log(k[26389], e), a(e);
      }, fail: function (e) {
        console.log(k[26382], e);
      } });
  }), syClickOpenBox: () => new Promise(function (a, e) {
    var o = k[26390] + Sygame.openid;var t = Sygame.cookieData({ type: k[437], key: o }) ? 0 : 1;wx.request({ url: confArr[14], data: { wecha_id: Sygame.openid, appid: Sygame.appid, uv: t }, method: k[25635], dataType: k[5191], success: function (e) {
        1 == t && Sygame.cookieData({ type: k[19], key: o, data: 1 }), console.log(k[26391], e.data), a(e.data);
      }, fail: function (e) {
        console.log(k[26382], e);
      } });
  }), syClickBox: n => new Promise(function (a, e) {
    var o = k[20208] + n.game_id;var t = Sygame.cookieData({ type: k[437], key: o }) ? 0 : 1;wx.request({ url: confArr[15], data: { wecha_id: Sygame.openid, appid: Sygame.appid, uv: t, game_id: n.game_id, tunnel_id: n.tunnel_id, jump_appid: n.jump_appid, jump_path: n.jump_path }, method: k[25635], dataType: k[5191], success: function (e) {
        1 == t && Sygame.cookieData({ type: k[19], key: o, data: 1 }), console.log(k[26392], e.data), a(e.data);
      }, fail: function (e) {
        console.log(k[26382], e);
      } });
  }), getShareData: a => {
    wx.request({ url: confArr[8], data: { appid: Sygame.appid, channel: Sygame.channel }, method: k[25635], dataType: k[5191], success: function (e) {
        console.log(k[26393], e), 1001 == e.data.status ? (console.log(k[26394], e.data.data), Sygame.share_data = e.data.data) : (a.errorCallback(e), console.log(k[26395], e));
      }, fail: function (e) {
        console.log(k[26382], e);
      } });
  }, goShareData: e => {
    var a = Sygame.share_data[e.type];var o = a.length;a = a[Math.floor(Math.random() * o)];console.log(k[26396], a);o = { title: a.title, imageUrlId: a.imageUrlId, imageUrl: a.imageUrl, query: e.shareQuery + k[26397] + a.id };console.log(k[26394], a), wx.shareAppMessage(o), e.successCallback(a);
  }, upShareData: e => {
    var a = k[26398] + e.material_id;var o = Sygame.cookieData({ type: k[437], key: a }) ? 1 : 0;0 == o && Sygame.cookieData({ type: k[19], key: a, data: new Date().getTime() }), e.log = o, wx.request({ url: confArr[9], data: e, method: k[25635], dataType: k[5191], success: function (e) {
        console.log(e);
      }, fail: function (e) {
        console.log(k[26382], e);
      } });
  }, upClickData: e => {
    var a = k[26399] + e.material_id;var o = Sygame.cookieData({ type: k[437], key: a }) ? 1 : 0;0 == o && Sygame.cookieData({ type: k[19], key: a, data: new Date().getTime() }), e.log = o, wx.request({ url: confArr[10], data: e, method: k[25635], dataType: k[5191], success: function (e) {
        console.log(e);
      }, fail: function (e) {
        console.log(k[26382], e);
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
        o.send(JSON.stringify({ code: 1, wecha_id: a })), console.log(k[26400]), n.start();
      }, o.onclose = function (e) {
        createWebSocket();
      };
    }createWebSocket();var n = { timeout: 1e3 * t, timeoutObj: null, start: function () {
        this.timeoutObj && clearInterval(this.timeoutObj), this.timeoutObj = setInterval(function () {
          o.send(JSON.stringify({ code: 4, wecha_id: a, timer: t })), console.log(k[26401]);
        }, this.timeout);
      } };
  } };export default Sygame;