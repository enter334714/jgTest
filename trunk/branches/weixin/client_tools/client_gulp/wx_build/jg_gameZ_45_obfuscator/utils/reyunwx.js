var _ = wx.y$;
var TKIO_CONFIG = { app_id: "", open_id: "", api_base: "https://log.reyun.com/receive/tkio/", prefix: "rywx_", version: "v1.0.2" };function getID(e) {
  try {
    return wx.getStorageSync(TKIO_CONFIG.prefix + e);
  } catch (e) {}
}function setID(e, t) {
  try {
    wx.setStorageSync(TKIO_CONFIG.prefix + e, t);return t;
  } catch (e) {}
}function callout(e, t, n) {
  var i = e[t];e[t] = function (e) {
    i && i.call(this, e), n.call(this, e);
  };
}!function () {
  setInterval(function () {
    wx.getNetworkType({ success: function (e) {
        var t = e.networkType;if (t != "none") {
          var n = getID("requests");if (n) {
            for (var i in n) {
              n[i].issending = true;if (!n[i].params.context._openid) {
                n[i].params.context._openid = getID("openid");n[i].params.context._deviceid = getID("openid");
              }if (!n[i].params.appid) {
                n[i].params.appid = getID("appid");
              }setID("requests", n);TKIO.send(n[i].what, n[i].params, n[i]);
            }
          }
        }
      } });
  }, 3e5);setInterval(function () {
    if (!getID("openid")) {
      var e = getID("appid");TKIO.getOpenId(e);
    }
  }, 5e3);if ("undefined" == typeof App) {
    setID("apptype", "wg");wx.getLaunchOptionsSync(function (e) {
      if (!getID("campaignid")) {
        setID("campaignid", e.query.surl ? e.query.surl : "_default_");
      }if (!getID("cid")) {
        setID("cid", e.query.cid ? parseInt(e.query.cid) : -1);
      }setID("starttime", Date.now());
    });wx.onHide(function () {
      var e = { _num_pages: 1, _duration: parseInt((Date.now() - getID("starttime")) / 1e3) };TKIO.hide(e);
    });wx.onShow(function (e) {
      if (!getID("campaignid")) {
        setID("campaignid", e.query.surl ? e.query.surl : "_default_");
      }if (!getID("cid")) {
        setID("cid", e.query.cid ? parseInt(e.query.cid) : -1);
      }if (!getID("starttime")) {
        setID("starttime", Date.now());
      }setID("sceneid", e.scene);setTimeout(function () {
        TKIO.launch();
      }, 2e3);
    });return;
  }var e = App,
      i = Page,
      a = 0;setID("apptype", "wx");App = function (t) {
    var n = { onLaunch: function (e) {
        if (!getID("campaignid")) {
          setID("campaignid", e.query.surl ? e.query.surl : "_default_");
        }if (!getID("cid")) {
          setID("cid", e.query.cid ? parseInt(e.query.cid) : -1);
        }setID("starttime", Date.now());
      }, onShow: function (e) {
        if (!getID("campaignid")) {
          setID("campaignid", e.query.surl ? e.query.surl : "_default_");
        }if (!getID("cid")) {
          setID("cid", e.query.cid ? parseInt(e.query.cid) : -1);
        }if (!getID("starttime")) {
          setID("starttime", Date.now());
        }setID("sceneid", e.scene);setTimeout(function () {
          TKIO.launch();
        }, 2e3);
      }, onHide: function (e) {
        var t = { _num_pages: getID("pagecount"), _duration: parseInt((Date.now() - getID("starttime")) / 1e3) };TKIO.hide(t);
      } };Object.keys(n).forEach(function (e) {
      callout(t, e, n[e]);
    }), e(t);
  }, Page = function (t) {
    var n = { onLoad: function (e) {
        if (getID("appid")) {
          setTimeout(function () {
            TKIO.pv();
          }, 2e3);setID("pagecount", ++a);
        }
      }, onUnload: function () {
        if (getID("appid")) {
          TKIO.pv();setID("pagecount", ++a);
        }
      } };Object.keys(n).forEach(function (e) {
      callout(t, e, n[e]);
    }), i(t);
  };
}();var TKIO = { init: function (e, t) {
    setID("appid", e);setID("openid", t);if (!t) {
      this.getOpenId(e);
    }
  }, getOpenId: function (n) {
    wx.login({ success: function (e) {
        var t = e.code;wx.request({ url: "https://openid.reyun.com/small/api/v1/getplanid?appkey=" + n + "&js_code=" + t + "&grant_type=authorization_code", data: {}, header: { "content-type": "application/json" }, success: function (e) {
            var t = e.data.openid;setID("openid", t);
          } });
      } });
  }, getCommonParams: function (e) {
    var t = { appid: getID("appid"), who: getID("usid") ? getID("usid") : "unknown", when: new Date().Format("yyyy-MM-dd hh:mm:ss"), context: { _deviceid: getID("openid"), _openid: getID("openid"), _cid: getID("cid") ? getID("cid") : -1, _campaignid: getID("campaignid") ? getID("campaignid") : "_default_", _sceneid: getID("sceneid"), _apptype: getID("apptype") } };if (e && typeof e === "object") {
      for (var n in e) {
        t.context[n] = e[n];
      }
    }return t;
  }, pv: function () {
    var e = this.getCommonParams();e.what = "pageview";this.send("event", e);
  }, launch: function () {
    var e = this.getCommonParams();e.what = "launch";this.send("event", e);
  }, hide: function (e) {
    var t = this.getCommonParams(e);t.what = "hide";this.send("event", t);
  }, register: function (e, t) {
    var n = this.getCommonParams(t);n.who = e;this.send("register", n);
  }, loggedin: function (e, t) {
    var n = this.getCommonParams(t);n.who = e;setID("usid", e);this.send("loggedin", n);
  }, payment: function (e, t, n, i, a) {
    var s = this.getCommonParams(a);s.context._transactionid = e;s.context._currencyamount = t;s.context._currencytype = n;s.context._paymenttype = i;this.send("payment", s);
  }, event: function (e, t) {
    var n = this.getCommonParams(t);n.context._isreyundefaultevent = 1;n.what = e;this.send("event", n);
  }, send: function (i, a, s) {
    if (!getID("appid")) return;var r = this;wx.request({ url: TKIO_CONFIG.api_base + i, method: "POST", data: JSON.stringify(a), header: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" }, success: function (e) {
        if (e.data.status != 0) {
          if (!s) r.cacheRequsets(i, a);
        } else {
          if (!s) return;var t = getID("requests");if (t) {
            for (var n in t) {
              if (JSON.stringify(t[n]) == JSON.stringify(s)) {
                t.splice(n, 1);setID("requests", t);return;
              }
            }
          }
        }
      }, fail: function () {
        if (!s) r.cacheRequsets(i, a);
      } });
  }, cacheRequsets: function (e, t) {
    var n = [];if (getID("requests")) {
      n = getID("requests");
    }n.push({ what: e, params: t });setID("requests", n);
  }, Data: { userInfo: null, lanchInfo: null } };Date.prototype.Format = function (e) {
  if (!e) {
    e = "yyyy-MM-dd";
  }var t = { "M+": this.getMonth() + 1, "d+": this.getDate(), "h+": this.getHours(), "m+": this.getMinutes(), "s+": this.getSeconds(), "q+": Math.floor((this.getMonth() + 3) / 3), S: this.getMilliseconds() };if (/(y+)/.test(e)) e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));for (var n in t) if (new RegExp("(" + n + ")").test(e)) e = e.replace(RegExp.$1, RegExp.$1.length == 1 ? t[n] : ("00" + t[n]).substr(("" + t[n]).length));return e;
};module.exports = TKIO;