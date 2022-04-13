var A = wx.$N;
/** * 漫方SDK * by 陌上老农 2022-03 * version:2.0.3 */!function () {
  "use strict";
};export default class FunGame {
  constructor() {
    this.host = A[0];
  }sign(e) {
    var o = "",
        s = Object.keys(e);return s.sort(), s.forEach(s => {
      A[1] != s && (o += e[s]);
    }), o;
  }setParameter(e, o, s) {
    e = e.replace(/(#.*)/gi, "");var l = new RegExp(A[2] + o + "=([^&]*)(?=&|$)", "i");return l.test(e) ? e.replace(l, "$1" + o + "=" + s) : e + (-1 == e.indexOf("?") ? "?" : "&") + o + "=" + s;
  }ajaxRequest(e, o, s, l) {
    e = this.setParameter(e, "v", Math.random());wx.request({ url: e, header: { "content-type": A[3] }, method: A[4], data: o, dataType: A[5], success: function (e) {
        s && s(e.data);
      }, fail: function (e) {
        l && l(e);
      } });
  }game(e, o, s) {
    if (console.log(A[6]), e.game_key) {
      var l = this.host + A[7];this.ajaxRequest(l, e, o, s);
    } else console.log(A[8]);
  }wxChannelCode() {
    console.log(A[9]);const { query: e } = wx.getLaunchOptionsSync(),
          o = decodeURIComponent(e.query),
          s = decodeURIComponent(e.clue_token),
          l = decodeURIComponent(e.gdt_vid),
          n = JSON.stringify(e);var t = new Object();if (t.wx_extension = "", t.clue_token = "", t.click_id = "", A[10] != o && "" != o) t.code = o, t.type = 1e4;else {
      const o = decodeURIComponent(e.scene);if (A[10] == o) return t;for (var c = o.split("&"), a = 0; a < c.length; a++) t[c[a].split("=")[0]] = c[a].split("=")[1];
    }return A[10] != s && "" != s && (t.clue_token = s), A[10] != n && "" != n && (t.wx_extension = n), A[10] != l && "" != l && (t.click_id = l), t;
  }role(e, o, s) {
    if (console.log(A[11]), e.host_url) {
      if (e.game_key) {
        if (e.account) {
          if (e.server) {
            if (e.server_name) {
              if (e.role) {
                if (e.role_name) {
                  if (e.level) {
                    null != e.type && "" != e.type && null != e.type || (e.type = 0), e.sign = this.sign(e);var l = e.host_url + A[12];this.ajaxRequest(l, e, o, s);
                  } else console.log(A[13]);
                } else console.log("缺少role_name");
              } else console.log(A[14]);
            } else console.log("缺少server_name");
          } else console.log(A[15]);
        } else console.log(A[16]);
      } else console.log(A[8]);
    } else console.log(A[17]);
  }order(e, o, s) {
    if (console.log(A[18]), e.host_url) {
      if (e.game_key) {
        if (e.account) {
          if (e.server) {
            if (e.role) {
              if (e.amount) {
                e.sign = this.sign(e);var l = e.host_url + A[19];this.ajaxRequest(l, e, o, s);
              } else console.log(A[20]);
            } else console.log(A[14]);
          } else console.log(A[15]);
        } else console.log(A[16]);
      } else console.log(A[8]);
    } else console.log(A[17]);
  }gameLogin(e, o, s) {
    if (console.log(A[21]), e.host_url) {
      if (e.game_key) {
        var l = e.host_url + A[22],
            n = this;wx.login({ success(t) {
            e.code = t.code, e.channel_code = "";var c = n.wxChannelCode();c && c.code && (e.channel_code = c.code), e.clue_token = c.clue_token, e.click_id = c.click_id, e.wx_extension = c.wx_extension, console.log(e), n.ajaxRequest(l, e, o, s);
          } });
      } else console.log(A[8]);
    } else console.log(A[17]);
  }gameToken(e, o, s) {
    if (console.log(A[23]), e.host_url) {
      if (e.game_key) {
        var l = e.host_url + A[24];this.ajaxRequest(l, e, o, s);
      } else console.log(A[8]);
    } else console.log(A[17]);
  }midasNotice(e, o, s) {
    if (console.log(A[25]), null != e.game_env && "" != e.game_env && null != e.game_env || (e.game_env = 0), e.offer_id) {
      if (e.currency_type) {
        if (e.amount) {
          if (e.server) {
            if (e.game_key) {
              if (e.host_url) {
                if (e.account) {
                  if (e.role) {
                    var l = this;this.checkPaySwicth(e, function (n) {
                      if (1 == n.data.is_check_pay) {
                        var t = { host_url: e.host_url, game_key: e.game_key, account: e.account, server: e.server, role: e.role, amount: e.amount, extend: e.extend };l.order(t, function (e) {
                          0 == e.code && e.data.order && l.openCustomerService();
                        });
                      } else {
                        var c = !1;wx.requestMidasPayment({ currencyType: e.currency_type, env: e.game_env, mode: A[26], offerId: e.offer_id, buyQuantity: e.amount, platform: A[27], zoneId: "1", success(n) {
                            c = !0, console.log(A[28]);var t = e.host_url + A[29];l.ajaxRequest(t, e, o, s);
                          }, fail(e) {
                            console.log(e);
                          }, complete(n) {
                            if (0 == c) {
                              console.log(A[30]);var t = e.host_url + A[29];l.ajaxRequest(t, e, o, s);
                            }
                          } });
                      }
                    }, function () {
                      console.log(A[31]);
                    });
                  } else console.log(A[14]);
                } else console.log(A[16]);
              } else console.log(A[17]);
            } else console.log(A[8]);
          } else console.log(A[15]);
        } else console.log(A[20]);
      } else console.log(A[32]);
    } else console.log(A[33]);
  }midasOrderSubmit(e, o, s) {
    if (console.log(A[34]), e.host_url) {
      if (e.game_key) {
        if (e.account) {
          if (e.server) {
            if (e.role) {
              if (e.extend) {
                if (e.amount) {
                  e.sign = this.sign(e);var l = e.host_url + A[35];this.ajaxRequest(l, e, o, s);
                } else console.log(A[20]);
              } else console.log(A[36]);
            } else console.log(A[14]);
          } else console.log(A[15]);
        } else console.log(A[16]);
      } else console.log(A[8]);
    } else console.log(A[17]);
  }checkWords(e, o, s) {
    if (console.log(A[37]), e.host_url) {
      if (e.game_key) {
        if (e.account) {
          if (e.scene) {
            if (e.content) {
              var l = e.host_url + A[38];this.ajaxRequest(l, e, o, s);
            } else console.log(A[39]);
          } else console.log(A[40]);
        } else console.log(A[16]);
      } else console.log(A[8]);
    } else console.log(A[17]);
  }gameCenter(e, o, s) {
    if (console.log(A[41]), e.host_url) {
      if (e.game_key) {
        var l = e.host_url + A[42];this.ajaxRequest(l, e, o, s);
      } else console.log(A[8]);
    } else console.log(A[17]);
  }openGame(e, o, s) {
    if (console.log(A[43]), e.app_id) {
      var l = { account: e.account, from_app_id: e.from_app_id, app_id: e.app_id, type: 0 },
          n = e.host_url + A[44],
          t = this;wx.navigateToMiniProgram({ appId: e.app_id, path: e.path, envVersion: e.env_version, success(e) {
          l.type = 1, t.ajaxRequest(n, l, o, s);
        }, fail(e) {
          t.ajaxRequest(n, l, o, s);
        } });
    } else console.log(A[45]);
  }vipDesc(e, o, s) {
    if (console.log(A[46]), e.host_url) {
      if (e.game_key) {
        var l = e.host_url + A[47];this.ajaxRequest(l, e, o, s);
      } else console.log(A[8]);
    } else console.log(A[17]);
  }wxFollowSteps(e, o, s) {
    if (console.log(A[48]), e.host_url) {
      if (e.game_key) {
        var l = e.host_url + A[49];this.ajaxRequest(l, e, o, s);
      } else console.log(A[8]);
    } else console.log(A[17]);
  }openCustomerService() {
    wx.showModal({ title: A[50], content: A[51], showCancel: !1, confirmText: A[52], success(e) {
        wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: A[53], sendMessageImg: A[54] });
      } });
  }phoneDesc(e, o, s) {
    if (console.log(A[55]), e.host_url) {
      var l = e.host_url + A[56];this.ajaxRequest(l, e, o, s);
    } else console.log(A[17]);
  }phoneCode(e, o, s) {
    if (console.log(A[57]), e.host_url) {
      if (e.phone) {
        var l = e.host_url + A[58];this.ajaxRequest(l, e, o, s);
      } else console.log(A[59]);
    } else console.log(A[17]);
  }phoneBind(e, o, s) {
    if (console.log(A[60]), e.host_url) {
      if (e.game_key) {
        if (e.account) {
          if (e.phone) {
            if (e.code) {
              var l = e.host_url + A[61];this.ajaxRequest(l, e, o, s);
            } else console.log(A[62]);
          } else console.log(A[59]);
        } else console.log(A[16]);
      } else console.log(A[8]);
    } else console.log(A[17]);
  }gameLoop(e) {
    console.log(A[63]), e.type ? A[64] == e.type || A[65] == e.type ? A[64] != e.type || e.text ? A[65] != e.type || e.icon ? e.style ? wx.createGameClubButton(e) : console.log(A[66]) : console.log(A[67]) : console.log(A[68]) : console.log(A[69]) : console.log(A[70]);
  }subscribeToData(e, o, s) {
    if (console.log(A[71]), !e.tmpl_ids) return void console.log(A[72]);if (!e.account) return void console.log(A[16]);if (!e.host_url) return void console.log(A[17]);if (!e.game_key) return void console.log(A[8]);const l = { code: "0", msg: A[73], data: [] },
          n = e.host_url + A[74],
          t = this,
          c = { account: e.account, game_key: e.game_key, pushTmplIds: [] };wx.requestSubscribeMessage({ tmplIds: e.tmpl_ids, success: function (l) {
        if (A[75] == l.errMsg) {
          for (var a = 0; a < e.tmpl_ids.length; a++) A[76] == l[e.tmpl_ids.length[a]] && c.pushTmplIds.push(e.tmpl_ids[a]);t.ajaxRequest(n, c, o, s);
        }
      }, fail: function (e) {
        l.code = e.errCode ? e.errCode : "-1", l.msg = A[77], s && s(l);
      } });
  }sharingInMoments(e) {
    if (console.log(A[78]), !e.host_url) return void console.log(A[17]);if (!e.game_key) return void console.log(A[8]);const o = e.host_url + A[79];var s = "",
        l = "",
        n = "",
        t = "";wx.showShareMenu({ withShareTicket: !0, menus: [A[80], A[81]] }), this.ajaxRequest(o, e, function (e) {
      0 == e.code && (s = e.data.CircleOfFriends.title, l = e.data.CircleOfFriends.imageUrl, n = e.data.GroupChat.title, t = e.data.GroupChat.imageUrl), wx.onShareAppMessage(() => ({ title: n, imageUrl: t })), wx.onShareTimeline(() => ({ title: s, imageUrl: l }));
    }, function (e) {
      console.log(A[77], e);
    });
  }checkPaySwicth(e, o, s) {
    if (console.log(A[82]), e.host_url) {
      if (e.game_key) {
        if (e.account) {
          if (e.server) {
            if (e.role) {
              var l = e.host_url + A[83];this.ajaxRequest(l, e, o, s);
            } else console.log(A[14]);
          } else console.log(A[15]);
        } else console.log(A[16]);
      } else console.log(A[8]);
    } else console.log(A[17]);
  }
};