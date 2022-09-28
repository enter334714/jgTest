var _ = wx.y$;
window.pjsdk = function () {
  return { initSdk: function (n, o, i, e) {
      window.pjsdk.channelGameId = n;window.pjsdk.channel = o;window.pjsdk.appVersion = i;window.pjsdk.platformType = e;window.pjsdk.sdkVersion = "PjMiniGameSdk1.1";window.pjsdk.publicParam = {};window.pjsdk.publicParam["channelGameId"] = window.pjsdk.channelGameId;window.pjsdk.publicParam["channel"] = window.pjsdk.channel;window.pjsdk.publicParam["appVersion"] = window.pjsdk.appVersion;window.pjsdk.publicParam["platformType"] = window.pjsdk.platformType;window.pjsdk.publicParam["sdkVersion"] = window.pjsdk.sdkVersion;window.pjsdk.publicParam["udid"] = window.pjsdk.getUdid();window.pjsdk.publicParam["imei"] = window.pjsdk.getUdid();window.pjsdk.apiHost = "https://h5.paojiao.cn";var d = wx.getLaunchOptionsSync();var a = d.query;console.log("小游戏 obj 参数:", JSON.stringify(d));console.log("小游戏 query 参数:", JSON.stringify(a));var r = window.pjsdk.getItem(window.pjsdk.channelGameId + "_channel");console.log("小游戏 localPjChannel 参数:" + r);if (r == null || r == "") {
        if (a.pjChannel != null && a.pjChannel != "") {
          window.pjsdk.channel = a.pjChannel;window.pjsdk.setItem(window.pjsdk.channelGameId + "_channel", a.pjChannel);
        }
      } else {
        window.pjsdk.channel = r;
      }window.pjsdk.publicParam["channel"] = window.pjsdk.channel;var s = window.pjsdk.getItem(window.pjsdk.channelGameId + "_gdt_vid");console.log("小游戏 loclaGdtVid 参数:" + s);if (s == null || s == "") {
        if (a.gdt_vid != null && a.gdt_vid != "") {
          window.pjsdk.setItem(window.pjsdk.channelGameId + "_gdt_vid", a.gdt_vid);window.pjsdk.publicParam["gdt_vid"] = a.gdt_vid;
        }
      } else {
        window.pjsdk.publicParam["gdt_vid"] = s;
      }var t = window.pjsdk.getItem(window.pjsdk.channelGameId + "_pjClickId");console.log("小游戏 localPjClickId 参数:" + t);if (t == null || t == "") {
        if (a.pjClickId != null && a.pjClickId != "") {
          window.pjsdk.setItem(window.pjsdk.channelGameId + "_pjClickId", a.pjClickId);window.pjsdk.publicParam["pjClickId"] = a.pjClickId;
        }
      } else {
        window.pjsdk.publicParam["pjClickId"] = t;
      }var w = window.pjsdk.getItem(window.pjsdk.channelGameId + "_wxQuery");console.log("小游戏 localWxQuery 参数:" + w);if (w == null || w == "") {
        var l = JSON.stringify(a);if (l != null && l != "{}" && l != "") {
          window.pjsdk.setItem(window.pjsdk.channelGameId + "_wxQuery", encodeURIComponent(l));window.pjsdk.publicParam["wxQuery"] = encodeURIComponent(l);
        }
      } else {
        window.pjsdk.publicParam["wxQuery"] = w;
      }console.info("小游戏公共参数:" + JSON.stringify(window.pjsdk.publicParam));window.pjsdk.api(window.pjsdk.publicParam, "/api/initWxGame", function (n) {
        console.info("小游戏初始化返回:" + JSON.stringify(n));if (n.code == 1) {
          window.pjsdk.imageUrl = n.data.imgUrl;window.pjsdk.ucAppid = n.data.ucAppid;window.pjsdk.logoUrl = n.data.logoUrl;wx.showShareMenu();wx.onShareAppMessage(function () {
            return { imageUrlId: n.data.imgId, imageUrl: n.data.imgUrl };
          });console.info("小游戏初始化成功");
        } else {
          console.info("小游戏初始化失败");
        }
      });
    }, login: function (d) {
      var a = window.pjsdk.platformType;console.log("PJ:SDK开始登录:" + a);wx.login({ success(n) {
          if (n.code) {
            console.log("PJ:" + a + "登录成功:" + JSON.stringify(n));var o = window.pjsdk.publicParam;var i = {};for (var e in o) {
              i[e] = o[e];
            }i["sdkToken"] = encodeURIComponent(JSON.stringify({ js_code: n.code }));window.pjsdk.getToken(i, function (n) {
              if (n.code != 1) {
                console.log("PJ:" + a + "登录失败:" + n.msg);wx.showToast({ title: "登录失败:" + n.msg, getUserCryptoManager: getUserCryptoManager });return;
              }window.pjsdk.uid = n.data.userInfo.uid;window.pjsdk.token = n.data.userInfo.token;window.pjsdk.suid = n.data.userInfo.suid;d(n);
            });
          } else {
            wx.showToast({ title: "登录失败:" + n.errMsg });
          }
        } });
    }, pay: function (n) {
      var o = n;var e = window.pjsdk.publicParam;for (var i in e) {
        o[i] = e[i];
      }o["uid"] = window.pjsdk.uid;o["sdkUserId"] = window.pjsdk.sdkToken;console.log("PJ:拉起支付:" + JSON.stringify(o));window.pjsdk.api(o, "/api/getOrderNo", function (d) {
        console.info("getOrderNo返回：" + JSON.stringify(d));if (d.code != 1) {
          console.log("PJ:生成订单失败:" + d.msg);return;
        }if (d.data.orderInfo.ptype == 2) {
          var n = {};for (var o in e) {
            n[o] = e[o];
          }n["orderPirce"] = d.data.orderInfo.money;n["uid"] = d.data.orderInfo.uid;n["orderNumber"] = d.data.orderInfo.orderNumber;console.info("wx拉起支付订单:" + JSON.stringify(n));window.pjsdk.api(n, "/pay/getWxPayUrl", function (n) {
            console.info("wx支付拉起返回：" + JSON.stringify(n));const o = n.data.title;const i = n.data.content;const e = n.data.wxPayUrl;wx.showModal({ title: o, showCancel: false, content: i, confirmText: "前往粘贴", success: n => {
                if (n.confirm) {
                  wx.setClipboardData({ data: e, success: n => {
                      wx.showToast({ title: "内容已复制" });
                    } });var o = { showMessageCard: true, sendMessageImg: window.pjsdk.imageUrl };wx.openCustomerServiceConversation(o);
                } else if (n.cancel) {
                  console.log("用户点击取消");
                }
              } });
          });
        } else {
          var i = d.data.envStats;wx.requestMidasPayment({ mode: "game", env: i == 0 ? 1 : 0, offerId: d.data.extension, currencyType: "CNY", platform: "android", zoneId: "1", buyQuantity: d.data.orderInfo.money, success: function () {
              var n = window.pjsdk.publicParam;var o = {};for (var i in n) {
                o[i] = n[i];
              }o["openid"] = window.pjsdk.suid;o["amt"] = d.data.orderInfo.money;o["bill_no"] = d.data.orderInfo.orderNumber;console.info("请求payCallBack参数：" + JSON.stringify(o));var e = "/api/payCallBack/" + d.data.orderInfo.channelGameId;window.pjsdk.api(o, e, function (n) {
                console.info("wx支付回调返回：" + JSON.stringify(n));if (n.code == "success") {
                  wx.showToast({ title: "支付成功", icon: "success" });
                } else {
                  wx.showToast({ title: "支付失败", icon: "error" });
                }
              });
            }, fail: function (n) {
              console.info("wx拉起支付返回参数:" + JSON.stringify(n));wx.showToast({ title: n.errMsg, icon: "error" });
            } });
        }
      });
    }, reportRoleinfo: function (n) {
      var o = n;var i = window.pjsdk.publicParam;for (var e in i) {
        o[e] = i[e];
      }o["uid"] = window.pjsdk.uid;o["token"] = window.pjsdk.token;o["sdkVersion"] = window.pjsdk.sdkVersion;o["openid"] = window.pjsdk.suid;console.log("PJ:上报角色信息:" + JSON.stringify(o));window.pjsdk.api(o, "/api/reportRoleInfo");
    }, getToken: function (n, o) {
      n["channelGameId"] = window.pjsdk.channelGameId;n["appVersion"] = window.pjsdk.appVersion;n["channel"] = window.pjsdk.channel;n["sdkVersion"] = window.pjsdk.sdkVersion;console.log("PJ:token验证:" + JSON.stringify(n));window.pjsdk.api(n, "/api/getToken", o);
    }, msgSecCheck: function (n, o) {
      var i = { sdkVersion: window.pjsdk.sdkVersion, channel: window.pjsdk.channel, channelGameId: window.pjsdk.channelGameId, uid: window.pjsdk.uid, content: n, appVersion: window.pjsdk.appVersion, openid: window.pjsdk.suid, platformType: window.pjsdk.platformType };window.pjsdk.api(i, "/api/msgSecCheck", function (n) {
        console.info("小游戏文字内容校验结果:" + JSON.stringify(n));if (n.code == 1) {
          o(n);
        } else {
          o(n);
        }
      });
    }, initFloat: function (n) {
      try {
        if (window.Laya) {
          window.pjsdk.initLayaFloat(n);
        } else if (window.egret) {
          console.log("暂不支持当前引擎悬浮球");
        } else {
          console.log("暂不支持当前引擎悬浮球");
        }
      } catch (n) {
        console.log(n);
      }
    }, initLayaFloat: function (n) {
      console.log("初始化laya悬浮球");if (!window.pjsdk.logoUrl) {
        return;
      }var i = new Laya.Image();var o = 200;var e = 90;var d = new Laya.Rectangle(0, 0, n.width, n.height);i.skin = window.pjsdk.logoUrl;i.zOder = 999999;i.pos(0, o);i.width = e;n.addChild(i);s(-e / 2, o);let a = false;let r = null;i.on(Laya.Event.MOUSE_DOWN, this, function (n) {
        i.alpha = 1;t(0, i.y);i.startDrag(d);r = n.target;a = false;
      });i.on(Laya.Event.MOUSE_MOVE, this, function (n) {
        i.alpha = 1;if (r) {
          a = true;
        }
      });i.on(Laya.Event.MOUSE_UP, this, function (n) {
        t(0, i.y);s(-e / 2, i.y);if (a) {} else {
          r = null;window.pjsdk.openUc();
        }
      });function s(n, o) {
        setTimeout(function () {
          i.alpha = .5;t(n, o);
        }, 1500);
      }function t(n, o) {
        i.pos(n, o);
      }
    }, openUc: function () {
      wx.navigateToMiniProgram({ appId: window.pjsdk.ucAppid, path: "pages/login/login?fromChannel=" + window.pjsdk.channel + "&fromGameId=" + window.pjsdk.channelGameId + "&fromUid=" + window.pjsdk.uid + "&fromOpenid=" + window.pjsdk.suid + "&fromToken=" + window.pjsdk.token, success(n) {}, fail(n) {}, complete(n) {} });
    }, openZd: function () {
      wx.navigateToMiniProgram({ appId: window.pjsdk.ucAppid, envVersion: "trial", path: "pages/login/zd?fromChannel=" + window.pjsdk.channel + "&fromGameId=" + window.pjsdk.channelGameId + "&fromUid=" + window.pjsdk.uid + "&fromOpenid=" + window.pjsdk.suid + "&fromToken=" + window.pjsdk.token, success(n) {}, fail(n) {}, complete(n) {} });
    }, getUdid: function () {
      var n = window.pjsdk.getItem("udid");if (n != null && n != "") {
        return n;
      } else {
        var o = window.pjsdk.getItem("udid");if (!o) {
          var i = window.pjsdk.genUdid();window.pjsdk.setItem("udid", i);return i;
        } else {
          return o;
        }
      }
    }, s4: function () {
      return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    }, genUdid: function () {
      return window.pjsdk.s4() + window.pjsdk.s4() + window.pjsdk.s4() + window.pjsdk.s4() + window.pjsdk.s4() + window.pjsdk.s4() + window.pjsdk.s4() + window.pjsdk.s4();
    }, getItem: function (n) {
      if (window.localStorage) {
        return window.localStorage.getItem("pj_" + n);
      } else {
        var o = document.cookie.match(new RegExp("(^| )pj_" + n + "=([^;]*)(;|$)"));if (o != null) {
          return unescape(o[2]);
        }
      }return null;
    }, setItem: function (n, o) {
      if (window.localStorage) {
        try {
          window.localStorage.setItem("pj_" + n, o);
        } catch (n) {}
      } else {
        var i = new Date();i.setTime(i.getTime() + 365 * 24 * 60 * 60 * 1e3);document.cookie = "pj_" + n + "=" + escape(o) + ";expires=" + i.toGMTString();
      }
    }, buildURL: function (n, o) {
      if (n) {
        var i = n.split("#");var e = {};var d = i[0].split("?")[1];var a = i[0].split("?")[0] + "?";if (d) {
          d = d.split("&");for (var r in d) {
            var s = d[r].split("=");e[s[0]] = s[1];
          }
        }for (var r in o) {
          if (o[r] !== undefined && o[r] !== null) {
            e[r] = o[r];
          }
        }var t = true;for (var r in e) {
          a += (t ? "" : "&") + r + "=" + (e[r] ? e[r] : "");t = false;
        }return a + (i[1] ? "#" + i[1] : "");
      }return "";
    }, api: function (n, o, i) {
      var e = window.pjsdk.buildURL(window.pjsdk.apiHost + o, n);window.pjsdk.httpGet(e, function (n) {
        i && i(n);
      });
    }, httpGet: function (n, o) {
      var i = new XMLHttpRequest();i.open("GET", n);i.onreadystatechange = function () {
        if (i.readyState === 4 && i.status === 200) {
          var n = i.responseText;o && o(JSON.parse(n));
        }i.onerror = function (n) {
          console.log(n);
        };i.ontimeout = function (n) {
          console.log(n);
        };
      };i.send(null);
    }, m: function (n) {
      var o = function (n) {
        var o = Array();var i, e, d, a, r, s, t, w, l;var p = 7,
            c = 12,
            u = 17,
            f = 22;var k = 5,
            j = 9,
            g = 14,
            m = 20;var v = 4,
            h = 11,
            I = 16,
            y = 23;var C = 6,
            S = 10,
            P = 15,
            x = 21;n = M(n);o = N(n);s = 1732584193;t = 4023233417;w = 2562383102;l = 271733878;for (i = 0; i < o.length; i += 16) {
          e = s;d = t;a = w;r = l;s = O(s, t, w, l, o[i + 0], p, 3614090360);l = O(l, s, t, w, o[i + 1], c, 3905402710);w = O(w, l, s, t, o[i + 2], u, 606105819);t = O(t, w, l, s, o[i + 3], f, 3250441966);s = O(s, t, w, l, o[i + 4], p, 4118548399);l = O(l, s, t, w, o[i + 5], c, 1200080426);w = O(w, l, s, t, o[i + 6], u, 2821735955);t = O(t, w, l, s, o[i + 7], f, 4249261313);s = O(s, t, w, l, o[i + 8], p, 1770035416);l = O(l, s, t, w, o[i + 9], c, 2336552879);w = O(w, l, s, t, o[i + 10], u, 4294925233);t = O(t, w, l, s, o[i + 11], f, 2304563134);s = O(s, t, w, l, o[i + 12], p, 1804603682);l = O(l, s, t, w, o[i + 13], c, 4254626195);w = O(w, l, s, t, o[i + 14], u, 2792965006);t = O(t, w, l, s, o[i + 15], f, 1236535329);s = T(s, t, w, l, o[i + 1], k, 4129170786);l = T(l, s, t, w, o[i + 6], j, 3225465664);w = T(w, l, s, t, o[i + 11], g, 643717713);t = T(t, w, l, s, o[i + 0], m, 3921069994);s = T(s, t, w, l, o[i + 5], k, 3593408605);l = T(l, s, t, w, o[i + 10], j, 38016083);w = T(w, l, s, t, o[i + 15], g, 3634488961);t = T(t, w, l, s, o[i + 4], m, 3889429448);s = T(s, t, w, l, o[i + 9], k, 568446438);l = T(l, s, t, w, o[i + 14], j, 3275163606);w = T(w, l, s, t, o[i + 3], g, 4107603335);t = T(t, w, l, s, o[i + 8], m, 1163531501);s = T(s, t, w, l, o[i + 13], k, 2850285829);l = T(l, s, t, w, o[i + 2], j, 4243563512);w = T(w, l, s, t, o[i + 7], g, 1735328473);t = T(t, w, l, s, o[i + 12], m, 2368359562);s = G(s, t, w, l, o[i + 5], v, 4294588738);l = G(l, s, t, w, o[i + 8], h, 2272392833);w = G(w, l, s, t, o[i + 11], I, 1839030562);t = G(t, w, l, s, o[i + 14], y, 4259657740);s = G(s, t, w, l, o[i + 1], v, 2763975236);l = G(l, s, t, w, o[i + 4], h, 1272893353);w = G(w, l, s, t, o[i + 7], I, 4139469664);t = G(t, w, l, s, o[i + 10], y, 3200236656);s = G(s, t, w, l, o[i + 13], v, 681279174);l = G(l, s, t, w, o[i + 0], h, 3936430074);w = G(w, l, s, t, o[i + 3], I, 3572445317);t = G(t, w, l, s, o[i + 6], y, 76029189);s = G(s, t, w, l, o[i + 9], v, 3654602809);l = G(l, s, t, w, o[i + 12], h, 3873151461);w = G(w, l, s, t, o[i + 15], I, 530742520);t = G(t, w, l, s, o[i + 2], y, 3299628645);s = J(s, t, w, l, o[i + 0], C, 4096336452);l = J(l, s, t, w, o[i + 7], S, 1126891415);w = J(w, l, s, t, o[i + 14], P, 2878612391);t = J(t, w, l, s, o[i + 5], x, 4237533241);s = J(s, t, w, l, o[i + 12], C, 1700485571);l = J(l, s, t, w, o[i + 3], S, 2399980690);w = J(w, l, s, t, o[i + 10], P, 4293915773);t = J(t, w, l, s, o[i + 1], x, 2240044497);s = J(s, t, w, l, o[i + 8], C, 1873313359);l = J(l, s, t, w, o[i + 15], S, 4264355552);w = J(w, l, s, t, o[i + 6], P, 2734768916);t = J(t, w, l, s, o[i + 13], x, 1309151649);s = J(s, t, w, l, o[i + 4], C, 4149444226);l = J(l, s, t, w, o[i + 11], S, 3174756917);w = J(w, l, s, t, o[i + 2], P, 718787259);t = J(t, w, l, s, o[i + 9], x, 3951481745);s = b(s, e);t = b(t, d);w = b(w, a);l = b(l, r);
        }var U = _(s) + _(t) + _(w) + _(l);return U.toLowerCase();
      };var s = function (n, o) {
        return n << o | n >>> 32 - o;
      };var b = function (n, o) {
        var i, e, d, a, r;d = n & 2147483648;a = o & 2147483648;i = n & 1073741824;e = o & 1073741824;r = (n & 1073741823) + (o & 1073741823);if (i & e) {
          return r ^ 2147483648 ^ d ^ a;
        }if (i | e) {
          if (r & 1073741824) {
            return r ^ 3221225472 ^ d ^ a;
          } else {
            return r ^ 1073741824 ^ d ^ a;
          }
        } else {
          return r ^ d ^ a;
        }
      };var t = function (n, o, i) {
        return n & o | ~n & i;
      };var w = function (n, o, i) {
        return n & i | o & ~i;
      };var l = function (n, o, i) {
        return n ^ o ^ i;
      };var p = function (n, o, i) {
        return o ^ (n | ~i);
      };var O = function (n, o, i, e, d, a, r) {
        n = b(n, b(b(t(o, i, e), d), r));return b(s(n, a), o);
      };var T = function (n, o, i, e, d, a, r) {
        n = b(n, b(b(w(o, i, e), d), r));return b(s(n, a), o);
      };var G = function (n, o, i, e, d, a, r) {
        n = b(n, b(b(l(o, i, e), d), r));return b(s(n, a), o);
      };var J = function (n, o, i, e, d, a, r) {
        n = b(n, b(b(p(o, i, e), d), r));return b(s(n, a), o);
      };var N = function (n) {
        var o;var i = n.length;var e = i + 8;var d = (e - e % 64) / 64;var a = (d + 1) * 16;var r = Array(a - 1);var s = 0;var t = 0;while (t < i) {
          o = (t - t % 4) / 4;s = t % 4 * 8;r[o] = r[o] | n.charCodeAt(t) << s;t++;
        }o = (t - t % 4) / 4;s = t % 4 * 8;r[o] = r[o] | 128 << s;r[a - 2] = i << 3;r[a - 1] = i >>> 29;return r;
      };var _ = function (n) {
        var o = "",
            i = "",
            e,
            d;for (d = 0; d <= 3; d++) {
          e = n >>> d * 8 & 255;i = "0" + e.toString(16);o = o + i.substr(i.length - 2, 2);
        }return o;
      };var M = function (n) {
        n = n.toString().replace(/\x0d\x0a/g, "\n");var o = "";for (var i = 0; i < n.length; i++) {
          var e = n.charCodeAt(i);if (e < 128) {
            o += String.fromCharCode(e);
          } else {
            if (e > 127 && e < 2048) {
              o += String.fromCharCode(e >> 6 | 192);o += String.fromCharCode(e & 63 | 128);
            } else {
              o += String.fromCharCode(e >> 12 | 224);o += String.fromCharCode(e >> 6 & 63 | 128);o += String.fromCharCode(e & 63 | 128);
            }
          }
        }return o;
      };return o(n);
    } };
}();