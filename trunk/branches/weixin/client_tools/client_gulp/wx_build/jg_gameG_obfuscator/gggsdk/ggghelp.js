var m = wx.$g;
let confArr = ["", m[26783], "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=login", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportRoleInfo", m[26784], "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=canPay", "GAME_KEY", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=setTunnelClick", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getMaterials", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportShare", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=reportClick", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=descMidasCoin", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=send_tpl_msg", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=get_box_list", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=open_box", "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=click_box", m[26785], "https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getOpenClipboard"];const SY_CONF = { APP_ID: m[26786], APP_VERSION: m[26787], GAME_KEY: m[26788], offerId: m[26789] };const Sygame = { appid: "", app_version: m[26790], openid: "", real_openid: "", share_data: {}, clipboard: "", role_id: 0, role_name: "", server_id: "", server_name: "", init: e => {
    Sygame.appid = SY_CONF[confArr[1]], Sygame.query = e.query, Sygame.channel = SY_CONF[confArr[6]], Sygame.offerId = SY_CONF.offerId, Sygame.scene = e.scene, console.log(m[26791], Sygame);let a = { query: e.query };wx.request({ url: confArr[17], data: { appid: Sygame.appid }, method: m[26461], success: e => {
        console.log(m[26792], e), e.data.is_open_clipboard && wx.getClipboardData({ success(e) {
            e.data && (Sygame.clipboard = e.data), console.log("syGetClipboardData:", e);
          } }), wx.request({ url: confArr[7], data: a, method: m[26461], success: e => {
            console.log(m[26793], e);
          } });
      } }), Sygame.getShareData(), wx.showShareMenu(), wx.onShareAppMessage(() => {
      var e = Sygame.share_data[1];var a = e.length;e = e[Math.floor(Math.random() * a)];console.log(m[26794], e);a = { title: e.title, imageUrlId: e.imageUrlId, imageUrl: e.imageUrl };return console.log(m[26795], e), a;
    });
  }, syLogin: () => new Promise(function (n, e) {
    wx.login({ success(e) {
        if (console.log(m[26796], e), !e.code) return !1;var a = confArr[2];wx.request({ url: a, data: { code: e.code, appid: Sygame.appid, version: Sygame.app_version, query: Sygame.query, scene: Sygame.scene, channel: Sygame.channel, clipboard: Sygame.clipboard }, success(o) {
            if (console.log(m[26797], o), 1001 == o.data.code) n(o.data), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid;else if (3001 == o.data.code) {
              var e = !0;var t = 0;if (1 == o.data.jump_mandatory) e = !1;else {
                var a = m[26798] + o.data.openid;if (t = Sygame.cookieData({ type: m[433], key: a }), 0 < o.data.jump_mandatory_number && t >= o.data.jump_mandatory_number) {
                  a = [];return a.code = 1001, a.openid = o.data.openid, a.real_openid = o.data.real_openid, n(a), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid, !1;
                }
              }wx.showModal({ title: o.data.jump_title_tip || m[26799], content: o.data.jump_tip ? o.data.jump_tip.replace(/\\n/g, "\n") : m[26800], confirmText: o.data.jump_button_tip || m[8591], cancelText: o.data.jump_cancel_tip || m[8592], showCancel: e, success: e => {
                  var a;e.cancel ? ((a = []).code = 1001, a.openid = o.data.openid, a.real_openid = o.data.real_openid, n(a), Sygame.openid = o.data.openid, Sygame.real_openid = o.data.real_openid, 0 < o.data.jump_mandatory_number && (e = new Date(new Date().toLocaleDateString()).getTime() + 864e5, a = m[26798] + o.data.openid, Sygame.cookieData({ type: m[19], key: a, data: t + 1, expired_at: e }))) : o.data.jump_to ? wx.onTouchStart(() => {
                    wx.navigateToMiniProgram({ appId: o.data.jump_to, path: o.data.jump_path, success: () => {
                        console.log(m[26801]);
                      } });
                  }) : o.data.jump_img ? (wx.previewImage({ urls: [o.data.jump_img] }), wx.onTouchStart(() => {
                    wx.showModal({ title: m[26799], content: o.data.jump_tip || m[26800], confirmText: m[8591], showCancel: !1, success: () => {
                        wx.previewImage({ urls: [o.data.jump_img] });
                      } });
                  })) : o.data.jump_copy ? (wx.setClipboardData({ data: o.data.jump_copy, success(e) {
                      console.log(m[26802], o.data);
                    } }), wx.onTouchStart(() => {
                    wx.showModal({ title: m[26799], content: o.data.jump_tip || m[26800], confirmText: m[8591], showCancel: !1, success: () => {
                        wx.setClipboardData({ data: o.data.jump_copy, success(e) {
                            console.log(m[26802], o.data);
                          } });
                      } });
                  })) : o.data.jump_copy_apk && (wx.setClipboardData({ data: o.data.jump_copy_apk, success(e) {
                      console.log(m[26802], o.data);
                    } }), wx.onTouchStart(() => {
                    wx.openCustomerServiceConversation({ sessionFrom: "h5GameJumpApk_" + Sygame.appid, showMessageCard: !0, sendMessageImg: m[26803], success: () => {
                        console.log(m[8959]);
                      } });
                  }));
                } });
            } else 5001 == o.data.code && (wx.showModal({ title: m[26804], content: o.data.game_tip || m[26805], confirmText: m[8591], showCancel: !1, success: () => {
                console.log(m[26806], o);
              } }), wx.onTouchStart(() => {
              wx.showModal({ title: m[26804], content: o.data.game_tip || m[26805], confirmText: m[8591], showCancel: !1, success: () => {
                  console.log(m[26806], o);
                } });
            }));
          } });
      }, fail: function () {
        console.log(m[23249]);
      } });
  }), syReportRoleInfo: t => new Promise(function (a, e) {
    if (m[268] != typeof t) return m[26807];var o = confArr[3];t.role_id && void 0 !== t.role_id && (Sygame.role_id = t.role_id), t.role_name && void 0 !== t.role_name && (Sygame.role_name = t.role_name), t.server_id && void 0 !== t.server_id && (Sygame.server_id = t.server_id), t.server_name && void 0 !== t.server_name && (Sygame.server_name = t.server_name), t.wecha_id = Sygame.openid, t.real_openid = Sygame.real_openid, t.channel = Sygame.channel, t.query = Sygame.query, t.scene = Sygame.scene, t.appid = Sygame.appid, t.version = Sygame.app_version, wx.request({ url: o, data: t, method: m[26461], success: e => {
        console.log(m[26808], e), e.data.is_gs_login && Sygame.syUserLoginRecord(Sygame.openid, e.data.request_time), a(e.data);
      } });
  }), syPay: t => new Promise(function (e, a) {
    var o = confArr[5];m[268] == typeof t ? (t.openid = Sygame.openid, t.real_openid = Sygame.real_openid, t.appid = Sygame.appid, t.channel = Sygame.channel, t.version = Sygame.app_version, t.is_buckle_pay = 0, wx.request({ url: o, method: m[26461], data: t, success: function (a) {
        switch (console.log(m[26809], a), a.data.payType) {case "1":
            1 == a.data.can_use_balance ? wx.showModal({ title: m[26810], content: a.data.midas_pay_tip, confirmText: m[8591], showCancel: m[8592], success: e => {
                e.confirm ? (t.is_buckle_pay = 1, Sygame.syDescMidasCoin(t)) : (console.log(m[26442]), Sygame.syMidasPay(t));
              } }) : Sygame.syMidasPay(t);break;case "2":
            wx.showModal({ title: m[26811], content: m[26812], confirmText: m[26813], showCancel: !1, success: e => {
                e.confirm && wx.openCustomerServiceConversation({ sessionFrom: "h5Game_" + a.data.payId, showMessageCard: !0, sendMessageImg: m[26814], success: () => {
                    console.log(m[8959]);
                  } });
              } });break;case "3":
            wx.previewImage({ urls: [a.data.payImage] });}
      } })) : a(m[26815]);
  }), syDescMidasCoin: e => {
    wx.request({ url: confArr[11], data: e, method: m[26461], dataType: m[5299], success: function (e) {
        console.log(m[26816], e), wx.showModal({ title: m[5827], content: e.data.tip, confirmText: m[8591], showCancel: m[8592], success: e => {
            e.confirm;
          } });
      }, fail: function (e) {
        console.log(m[26817], e);
      } });
  }, syMidasPay: a => {
    wx.requestMidasPayment({ mode: m[26818], env: 0, offerId: Sygame.offerId, currencyType: m[26819], buyQuantity: 100 * a.product_price, platform: m[26384], success(e) {
        Sygame.syDescMidasCoin(a), console.log(m[26820], e);
      }, fail(e) {
        console.log(e);
      }, complete(e) {
        console.log(e);
      } });
  }, syBindMobile: e => new Promise(function (e, a) {
    Sygame.channel;var o = Sygame.openid;wx.openCustomerServiceConversation({ sessionFrom: m[26821] + o, success: () => {
        console.log(m[26822]);
      } });
  }), syGetSubscribe: t => new Promise(function (o, a) {
    wx.requestSubscribeMessage({ tmplIds: [t.template], success: e => {
        console.log("syGetSubscribe: ", e);let a = "";a = m[26546] === e[t.template] ? m[26440] : m[524], wx.request({ url: confArr[12], data: { openid: Sygame.openid, channel: Sygame.channel, role_id: t.role_id, tpl_type: t.tpl_type, type: a }, method: m[26461], dataType: m[5299], success: function (e) {
            o(e);
          }, fail: function (e) {
            console.log(m[26817], e);
          } });
      }, fail(e) {
        console.error(e), a();
      } });
  }), syGetBoxList: o => new Promise(function (a, e) {
    wx.request({ url: confArr[13], data: { wecha_id: Sygame.openid, appid: Sygame.appid, page: o.page, count: o.count }, method: m[26461], dataType: m[5299], success: function (e) {
        console.log(m[26823], e), a(e);
      }, fail: function (e) {
        console.log(m[26817], e);
      } });
  }), syClickOpenBox: () => new Promise(function (a, e) {
    var o = m[26824] + Sygame.openid;var t = Sygame.cookieData({ type: m[433], key: o }) ? 0 : 1;wx.request({ url: confArr[14], data: { wecha_id: Sygame.openid, appid: Sygame.appid, uv: t }, method: m[26461], dataType: m[5299], success: function (e) {
        1 == t && Sygame.cookieData({ type: m[19], key: o, data: 1 }), console.log(m[26825], e.data), a(e.data);
      }, fail: function (e) {
        console.log(m[26817], e);
      } });
  }), syClickBox: n => new Promise(function (a, e) {
    var o = m[20515] + n.game_id;var t = Sygame.cookieData({ type: m[433], key: o }) ? 0 : 1;wx.request({ url: confArr[15], data: { wecha_id: Sygame.openid, appid: Sygame.appid, uv: t, game_id: n.game_id, tunnel_id: n.tunnel_id, jump_appid: n.jump_appid, jump_path: n.jump_path }, method: m[26461], dataType: m[5299], success: function (e) {
        1 == t && Sygame.cookieData({ type: m[19], key: o, data: 1 }), console.log(m[26826], e.data), a(e.data);
      }, fail: function (e) {
        console.log(m[26817], e);
      } });
  }), getShareData: a => {
    wx.request({ url: confArr[8], data: { appid: Sygame.appid, channel: Sygame.channel }, method: m[26461], dataType: m[5299], success: function (e) {
        console.log(m[26827], e), 1001 == e.data.status ? (console.log(m[26828], e.data.data), Sygame.share_data = e.data.data) : (a.errorCallback(e), console.log(m[26829], e));
      }, fail: function (e) {
        console.log(m[26817], e);
      } });
  }, goShareData: e => {
    var a = Sygame.share_data[e.type];var o = a.length;a = a[Math.floor(Math.random() * o)];console.log(m[26830], a);o = { title: a.title, imageUrlId: a.imageUrlId, imageUrl: a.imageUrl, query: e.shareQuery + m[26831] + a.id };console.log(m[26828], a), wx.shareAppMessage(o), e.successCallback(a);
  }, upShareData: e => {
    var a = m[26832] + e.material_id;var o = Sygame.cookieData({ type: m[433], key: a }) ? 1 : 0;0 == o && Sygame.cookieData({ type: m[19], key: a, data: new Date().getTime() }), e.log = o, wx.request({ url: confArr[9], data: e, method: m[26461], dataType: m[5299], success: function (e) {
        console.log(e);
      }, fail: function (e) {
        console.log(m[26817], e);
      } });
  }, upClickData: e => {
    var a = m[26833] + e.material_id;var o = Sygame.cookieData({ type: m[433], key: a }) ? 1 : 0;0 == o && Sygame.cookieData({ type: m[19], key: a, data: new Date().getTime() }), e.log = o, wx.request({ url: confArr[10], data: e, method: m[26461], dataType: m[5299], success: function (e) {
        console.log(e);
      }, fail: function (e) {
        console.log(m[26817], e);
      } });
  }, cookieData: e => {
    switch (e.type) {case m[433]:
        var a = wx.getStorageSync(e.key);try {
          if (a = JSON.parse(a), new Date().getTime() < a.expired_at) return a.data;
        } catch (e) {}return !1;case m[19]:
        e.expired_at || (e.expired_at = new Date(new Date().toLocaleDateString()).getTime() + 31536e7);try {
          return wx.setStorageSync(e.key, JSON.stringify({ data: e.data, expired_at: e.expired_at })), !0;
        } catch (e) {}return !1;case "rm":
        return wx.removeStorageSync(e.key), !0;}
  }, syUserLoginRecord: (a, e) => {
    var o;var t = e || 30;function createWebSocket() {
      (o = new WebSocket(SY_CONF[confArr[16]])).onopen = function (e) {
        o.send(JSON.stringify({ code: 1, wecha_id: a })), console.log(m[26834]), n.start();
      }, o.onclose = function (e) {
        createWebSocket();
      };
    }createWebSocket();var n = { timeout: 1e3 * t, timeoutObj: null, start: function () {
        this.timeoutObj && clearInterval(this.timeoutObj), this.timeoutObj = setInterval(function () {
          o.send(JSON.stringify({ code: 4, wecha_id: a, timer: t })), console.log(m[26835]);
        }, this.timeout);
      } };
  } };export default Sygame;