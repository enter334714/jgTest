"use strict";

var f = wx.$B;
Object.defineProperty(exports, "__esModule", { value: !0 });var _createClass = function () {
  function n(e, t) {
    for (var a = 0; a < t.length; a++) {
      var n = t[a];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }return function (e, t, a) {
    return t && n(e.prototype, t), a && n(e, a), e;
  };
}(),
    _common = require("./utils/common"),
    _common2 = _interopRequireDefault(_common),
    _base = require("./utils/base64"),
    _base2 = _interopRequireDefault(_base),
    _event = require("./utils/event"),
    _event2 = _interopRequireDefault(_event),
    _baseparameter = require("./utils/baseparameter"),
    _baseparameter2 = _interopRequireDefault(_baseparameter),
    _gameserver = require("./utils/gameserver"),
    _gameserver2 = _interopRequireDefault(_gameserver),
    _gamedatas = require("./utils/gamedatas"),
    _gamedatas2 = _interopRequireDefault(_gamedatas),
    _userinfo = require("./utils/userinfo"),
    _userinfo2 = _interopRequireDefault(_userinfo),
    _reportanalytics = require("./utils/reportanalytics"),
    _reportanalytics2 = _interopRequireDefault(_reportanalytics);function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}var base64encode = new _base2.default(),
    instance = void 0,
    XiYouGameSDK = function () {
  function t(e) {
    _classCallCheck(this, t), this.sdk_version = "1.0.1", this.api_version = "1.4", (instance = this).config = {}, this.baseParams, this.gameServer, this.gameDatas, this.bParams, this.timeTm = 0;
  }return _createClass(t, [{ key: "init", value: function (e) {
      this.config = e, new _common2.default().debugStatus = this.config.debugState, this.baseParams = new _baseparameter2.default(), this.gameServer = new _gameserver2.default(), this.gameDatas = new _gamedatas2.default(), this.userInfo = new _userinfo2.default(), this.baseParams.sdkVersion = this.sdk_version, this.baseParams.apiVersion = this.config.debugStatus ? "1.3.0" : this.api_version, this.bParams = this.baseParams.getQueryParam();wx.getStorageSync("xiyou:firstLaunchMack") || (instance.analyticsLaunch({ act: "Install" }), wx.setStorageSync("xiyou:firstLaunchMack", 1)), setTimeout(function () {
        instance.analyticsLaunch({ act: "Start" });
      }, 1e3);_event2.default.getInstance().emit("onInitResult", { msg: "SDK初始化成功", status: _common2.default.Status().Success });
    } }, { key: "authorize", value: function () {
      wx.authorize({ scope: "scope.record", success: function (e) {
          _common2.default.xylog("wx.authorize result:", e), _event2.default.getInstance().emit("onInitResult", { msg: "SDK初始化成功", status: _common2.default.Status().Success });
        }, fail: function () {
          _common2.default.xylog("message", "授权失败！"), _event2.default.getInstance().emit("onInitResult", { msg: "SDK初始化失败", status: _common2.default.Status().Fail });
        } });
    } }, { key: "login", value: function () {
      wx.login({ success: function (e) {
          var t;_common2.default.xylog("wx.login result:", e), e.code ? (e = JSON.stringify({ code: e.code, scene_id: this.baseParams.getLaunchOptions().scene, share_id: "", referrer_appid: "" }), (t = this.baseParams.getQueryParam()).sid = base64encode.encode(e), t.device_id = this.baseParams.UUID, _common2.default.xylog("登陆API请求参数：", t), _common2.default.wxRequest("oauth/token", "post", t, function (e) {
            var t;_common2.default.xylog("success", e.data), 200 == e.data.status ? (t = e.data.data, instance.userInfo.uid = t.sdkUserID, instance.userInfo.openid = t.openid, instance.userInfo.token = t.token, instance.userInfo.whiteip = t.isWhiteIP, console.log(instance.userInfo), _event2.default.getInstance().emit("onLoginResult", { token: t.token, userId: t.openid, msg: "登陆成功", status: _common2.default.Status().Success }), _common2.default.xylog(e.data), 0 == instance.timeTm ? (setInterval(function () {
              wx.checkSession({ success: function () {
                  _common2.default.xylog("session_key status:", "session_key未过期!");
                }, fail: function () {
                  _common2.default.xylog("session_key status:", "session_key过期!重新登陆中..."), instance.login();
                }.bind(instance) });
            }, 1e4), _common2.default.xylog("【timer】", "新增 timer"), instance.timeTm = 1) : _common2.default.xylog("【timer】", "已有 timer")) : (_event2.default.getInstance().emit("onLoginResult", { msg: "登陆失败", status: _common2.default.Status().Fail }), _common2.default.xylog("登录失败", _common2.default.Status().Fail));
          }, function (e) {
            _common2.default.xylog("fail", e), _event2.default.getInstance().emit("onLoginResult", { msg: "登陆失败", status: _common2.default.Status().Fail });
          })) : (_event2.default.getInstance().emit("onLoginResult", { msg: "登陆失败", status: _common2.default.Status().Fail }), _common2.default.xylog("登录失败！", { msg: "登陆失败", status: _common2.default.Status().Fail }));
        }.bind(this), fail: function (e) {
          _event2.default.getInstance().emit("onLoginResult", { msg: "登陆失败", status: e }), _common2.default.xylog("登录失败！", { msg: "登陆失败", status: e });
        } });
    } }, { key: "pay", value: function (s) {
      _common2.default.xylog("【payType extension】：", s.extension), wx.checkSession({ success: function () {
          if (1 == s.extension.pm_type || "1" == s.extension.pm_type) wx.navigateToMiniProgram({ appId: "wxed8e2fee72052dbd", path: "pages/fortune/fortune?order_no=" + s.orderId, success: function (e) {} });else {
            var a, o;if (0 == s.extension.pm_type || "0" == s.extension.pm_type) return (a = {}).orderNo = s.orderId, void _common2.default.wxRequest("weixin/qrcode", "post", a, function (e) {
              _common2.default.xylog("成功获取小程序码接口数据：", e), wx.setStorage({ key: "minipropaykey", data: e.data }), wx.getStorage({ key: "minipropaykey", success: function (e) {
                  _common2.default.xylog("获取缓存数据：", e.data);
                } }), _event2.default.getInstance().emit("onPayResult", { msg: "获取小程序码成功", status: _common2.default.Status().Success, data: e.data });var e = _common2.default.serHost() + "weixin/qrcode?orderNo=" + s.orderId + "&sign=" + _common2.default.buildSortMD5Sign(a).sign,
                  t = [];t.push(e), _common2.default.xylog("qrArr", t), wx.previewImage({ current: "", urls: t });
            }, function (e) {
              _common2.default.xylog("获取小程序码失败", e), _event2.default.getInstance().emit("onPayResult", { msg: "获取小程序码失败", status: _common2.default.Status().Pay_Fail });
            });2 == s.extension.pm_type || "2" == s.extension.pm_type ? wx.showModal({ title: "提示", content: "即将打开客服聊天界面并获取支付链接", showCancel: !1, confirmText: "我知道了", confirmColor: "#999", success: function (e) {
                e.confirm ? (console.log("用户点击确定"), wx.navigateToMiniProgram({ appId: "wxed8e2fee72052dbd", path: "pages/kefu/kefu?order_no=" + s.orderId, success: function (e) {} })) : e.cancel && console.log("用户点击取消");
              } }) : "ios" == this.baseParams.getSystemInfo().osn ? wx.navigateToMiniProgram({ appId: "wxed8e2fee72052dbd", path: "pages/fortune/fortune?order_no=" + s.orderId, success: function (e) {} }) : ((o = this.baseParams.getQueryParam()).uid = instance.userInfo.openid, o.openid = instance.userInfo.uid, o.orderno = s.orderId, o.zone_id = s.zoneid, o.pf = "android", o.sandbox = s.sandbox, _common2.default.xylog("支付查询余额请求前：", o), _common2.default.wxRequest("pay/wx/query", "post", o, function (e) {
              var t = s.price / 100 * s.buyNum * s.ration,
                  a = e.data.data,
                  n = a.money;if (_common2.default.xylog("支付查询余额请求后：", e), t <= n) _common2.default.wxRequest("pay/wx/charge", "post", o, function (e) {
                wx.setStorage({ key: "paykey", data: e.data }), wx.getStorage({ key: "paykey", success: function (e) {
                    _common2.default.xylog("获取缓存数据：", e.data);
                  } }), _event2.default.getInstance().emit("onPayResult", { msg: "扣款成功", status: _common2.default.Status().Success, qrcode: e.data }), _common2.default.xylog(e.data);
              }, function (e) {
                _common2.default.xylog("扣款失败", e), _event2.default.getInstance().emit("onPayResult", { msg: "扣款失败", status: _common2.default.Status().Pay_Fail });
              });else {
                e = a.offer_id;if (!e) throw new Error("offer_id is null ,please config offer_id on xiyou platform");t = s.price / 100 * s.buyNum * s.ration;_common2.default.xylog("米大师支付参数：", { mode: "game", offerId: e, currencyType: "CNY", zoneId: s.zoneid, buyQuantity: t, platform: "android", env: s.sandbox ? 1 : 0 }), wx.requestMidasPayment({ mode: "game", offerId: e, currencyType: "CNY", zoneId: s.zoneid, buyQuantity: t, platform: "android", env: s.sandbox ? 1 : 0, success: function (e) {
                    _common2.default.wxRequest("pay/wx/charge", "post", o, function (e) {
                      wx.setStorage({ key: "mipaykey", data: e.data }), _event2.default.getInstance().emit("onPayResult", { msg: "扣款成功", status: _common2.default.Status().Success, qrcode: e.data }), _common2.default.xylog(e.data);
                    }, function (e) {
                      _common2.default.xylog("扣款失败", e), _event2.default.getInstance().emit("onPayResult", { msg: "扣款失败", status: _common2.default.Status().Pay_Fail });
                    });
                  }, fail: function (e) {
                    _event2.default.getInstance().emit("onPayResult", { msg: "米大师支付调用失败", status: _common2.default.Status().Pay_Fail }), _common2.default.xylog("米大师支付调用失败：", e);
                  } });
              }
            }, function (e) {
              _event2.default.getInstance().emit("onPayResult", _common2.default.Status().Pay_Fail), _common2.default.xylog(e.data);
            }));
          }
        }.bind(this), fail: function () {
          t.login();
        } });
    } }, { key: "requestAvailableServer", value: function () {
      this.gameServer.getServerList();
    } }, { key: "submitExtraData", value: function (e) {
      this.gameDatas.report(e);
    } }, { key: "analyticsLaunch", value: function (e) {
      var t = new _reportanalytics2.default(),
          a = this.baseParams.getAnalyticsLaunch();Object.assign(a, e, { ic: "TrackEvent", cat: "MiniGame" }), t.send(a);
    } }, { key: "getCurrFlag", value: function () {
      if (this.baseParams) return this.baseParams.getSdkInfo().package_id;throw new Error("请在初始化成功后调用");
    } }, { key: "getClientInfo", value: function () {
      if (!this.baseParams) return "";var e = this.baseParams.getSdkInfo();try {
        var t = wx.getSystemInfoSync(),
            a = "",
            a = "ios" === t.platform ? 2 : "android" === t.platform ? 1 : 3,
            n = { package_id: e.package_id, session_id: _common2.default.getSessionId(), version_code: e.version_code, os_flag: a };return base64encode.encode(JSON.stringify(n));
      } catch (e) {
        return console.error("getClientInfo", e), "";
      }
    } }, { key: "checkSensitiveWords", value: function (e, t) {
      var a = instance.getClientInfo();_common2.default.wxRequest("weixin/msg_sec_check", "post", { clientInfo: a, content: e }, function (e) {
        200 === e.data.status ? t({ status: 1, data: e }) : t({ status: 0, data: e });
      }, function (e) {
        t({ status: 0, data: e });
      });
    } }, { key: "openCustomerServiceConversation", value: function () {
      wx.showModal({ title: "提示", content: "即将打开客服聊天界面", showCancel: !1, confirmText: "我知道了", confirmColor: "#999", success: function (e) {
          e.confirm ? (console.log("用户点击确定"), wx.navigateToMiniProgram({ appId: "wxed8e2fee72052dbd", path: "pages/kefu/kefu", success: function (e) {} })) : e.cancel && console.log("用户点击取消");
        } });
    } }], [{ key: "getInstance", value: function () {
      return this.instance || (this.instance = new t()), this.instance;
    } }]), t;
}();exports.default = XiYouGameSDK;