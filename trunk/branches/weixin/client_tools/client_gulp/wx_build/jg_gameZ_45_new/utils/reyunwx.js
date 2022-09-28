var TKIO_CONFIG = { app_id: "", open_id: "", api_base: "https://log.reyun.com/receive/tkio/", prefix: "rywx_", version: "v1.0.2" };function getID(e) {
  try {
    return wx.getStorageSync(TKIO_CONFIG.prefix + e);
  } catch (e) {}
}function setID(e, t) {
  try {
    return wx.setStorageSync(TKIO_CONFIG.prefix + e, t), t;
  } catch (e) {}
}function callout(e, t, n) {
  var i = e[t];e[t] = function (e) {
    i && i.call(this, e), n.call(this, e);
  };
}!function () {
  if (setInterval(function () {
    wx.getNetworkType({ success: function (e) {
        if ("none" != e.networkType) {
          var t = getID("requests");if (t) for (var n in t) t[n].issending = !0, t[n].params.context._openid || (t[n].params.context._openid = getID("openid"), t[n].params.context._deviceid = getID("openid")), t[n].params.appid || (t[n].params.appid = getID("appid")), setID("requests", t), TKIO.send(t[n].what, t[n].params, t[n]);
        }
      } });
  }, 3e5), setInterval(function () {
    var e;getID("openid") || (e = getID("appid"), TKIO.getOpenId(e));
  }, 5e3), "undefined" == typeof App) return setID("apptype", "wg"), wx.getLaunchOptionsSync(function (e) {
    getID("campaignid") || setID("campaignid", e.query.surl || "_default_"), getID("cid") || setID("cid", e.query.cid ? parseInt(e.query.cid) : -1), setID("starttime", Date.now());
  }), wx.onHide(function () {
    var e = { _num_pages: 1, _duration: parseInt((Date.now() - getID("starttime")) / 1e3) };TKIO.hide(e);
  }), wx.onShow(function (e) {
    getID("campaignid") || setID("campaignid", e.query.surl || "_default_"), getID("cid") || setID("cid", e.query.cid ? parseInt(e.query.cid) : -1), getID("starttime") || setID("starttime", Date.now()), setID("sceneid", e.scene), setTimeout(function () {
      TKIO.launch();
    }, 2e3);
  });var e = App,
      i = Page,
      a = 0;setID("apptype", "wx"), App = function (t) {
    var n = { onLaunch: function (e) {
        getID("campaignid") || setID("campaignid", e.query.surl || "_default_"), getID("cid") || setID("cid", e.query.cid ? parseInt(e.query.cid) : -1), setID("starttime", Date.now());
      }, onShow: function (e) {
        getID("campaignid") || setID("campaignid", e.query.surl || "_default_"), getID("cid") || setID("cid", e.query.cid ? parseInt(e.query.cid) : -1), getID("starttime") || setID("starttime", Date.now()), setID("sceneid", e.scene), setTimeout(function () {
          TKIO.launch();
        }, 2e3);
      }, onHide: function (e) {
        var t = { _num_pages: getID("pagecount"), _duration: parseInt((Date.now() - getID("starttime")) / 1e3) };TKIO.hide(t);
      } };Object.keys(n).forEach(function (e) {
      callout(t, e, n[e]);
    }), e(t);
  }, Page = function (t) {
    var n = { onLoad: function (e) {
        getID("appid") && (setTimeout(function () {
          TKIO.pv();
        }, 2e3), setID("pagecount", ++a));
      }, onUnload: function () {
        getID("appid") && (TKIO.pv(), setID("pagecount", ++a));
      } };Object.keys(n).forEach(function (e) {
      callout(t, e, n[e]);
    }), i(t);
  };
}();var TKIO = { init: function (e, t) {
    setID("appid", e), setID("openid", t), t || this.getOpenId(e);
  }, getOpenId: function (t) {
    wx.login({ success: function (e) {
        e = e.code;wx.request({ url: "https://openid.reyun.com/small/api/v1/getplanid?appkey=" + t + "&js_code=" + e + "&grant_type=authorization_code", data: {}, header: { "content-type": "application/json" }, success: function (e) {
            setID("openid", e.data.openid);
          } });
      } });
  }, getCommonParams: function (e) {
    var t = { appid: getID("appid"), who: getID("usid") ? getID("usid") : "unknown", when: new Date().Format("yyyy-MM-dd hh:mm:ss"), context: { _deviceid: getID("openid"), _openid: getID("openid"), _cid: getID("cid") ? getID("cid") : -1, _campaignid: getID("campaignid") ? getID("campaignid") : "_default_", _sceneid: getID("sceneid"), _apptype: getID("apptype") } };if (e && "object" == typeof e) for (var n in e) t.context[n] = e[n];return t;
  }, pv: function () {
    var e = this.getCommonParams();e.what = "pageview", this.send("event", e);
  }, launch: function () {
    var e = this.getCommonParams();e.what = "launch", this.send("event", e);
  }, hide: function (e) {
    e = this.getCommonParams(e);e.what = "hide", this.send("event", e);
  }, register: function (e, t) {
    t = this.getCommonParams(t);t.who = e, this.send("register", t);
  }, loggedin: function (e, t) {
    t = this.getCommonParams(t);setID("usid", t.who = e), this.send("loggedin", t);
  }, payment: function (e, t, n, i, a) {
    a = this.getCommonParams(a);a.context._transactionid = e, a.context._currencyamount = t, a.context._currencytype = n, a.context._paymenttype = i, this.send("payment", a);
  }, event: function (e, t) {
    t = this.getCommonParams(t);t.context._isreyundefaultevent = 1, t.what = e, this.send("event", t);
  }, send: function (i, a, s) {
    var o;getID("appid") && (o = this, wx.request({ url: TKIO_CONFIG.api_base + i, method: "POST", data: JSON.stringify(a), header: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" }, success: function (e) {
        if (0 != e.data.status) s || o.cacheRequsets(i, a);else if (s) {
          var t = getID("requests");if (t) for (var n in t) if (JSON.stringify(t[n]) == JSON.stringify(s)) return t.splice(n, 1), void setID("requests", t);
        }
      }, fail: function () {
        s || o.cacheRequsets(i, a);
      } }));
  }, cacheRequsets: function (e, t) {
    var n = [];(n = getID("requests") ? getID("requests") : n).push({ what: e, params: t }), setID("requests", n);
  }, Data: { userInfo: null, lanchInfo: null } };Date.prototype.Format = function (e) {
  e = e || "yyyy-MM-dd";var t = { "M+": this.getMonth() + 1, "d+": this.getDate(), "h+": this.getHours(), "m+": this.getMinutes(), "s+": this.getSeconds(), "q+": Math.floor((this.getMonth() + 3) / 3), S: this.getMilliseconds() };for (var n in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));return e;
}, module.exports = TKIO;