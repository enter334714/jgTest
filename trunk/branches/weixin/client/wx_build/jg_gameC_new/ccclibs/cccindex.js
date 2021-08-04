import AKSDK from "../ccck/cccsdk.js";window.versions = { wxVersion: window.config.game_ver }, window.DEBUG = !1, window.PLATFORM = 1, window.ENV = 1, window.PACK = !0, window.WSS = !0, window.workerJsURL = "", window.PF_INFO = { base_cdn: "https://cdn-gz-jg.sh9130.com/weixin_0/", cdn: "https://cdn-gz-jg.sh9130.com/weixin_0/" }, PF_INFO.pay_infos = {}, PF_INFO.package = "0", PF_INFO.version = window.versions.wxVersion, PF_INFO.mac = "", PF_INFO.os = "1", PF_INFO.sdk_name = "9130", PF_INFO.apiurl = "https://api-tjqytest.shzbkj.com", PF_INFO.logurl = "https://log-tjqytest.shzbkj.com", PF_INFO.payurl = "https://pay-tjqytest.shzbkj.com", PF_INFO.apikey = "MQx0mYlUWO5XYKvgAIPKWgK1w722GKih", PF_INFO.partnerId = "1", PF_INFO.pkgName = "", PF_INFO.device_id = "", PF_INFO.from_scene = 0, PF_INFO.serverList = {}, PF_INFO.channelNum = parseInt(PF_INFO.partnerId), PF_INFO.channel = PF_INFO.partnerId, PF_INFO.selectedServer = {}, PF_INFO.clientlog = "https://jgcenter.sh9130.com/clientlog/", PF_INFO.showLogo = !1, PF_INFO.debugUsers = "39927500|58163716|74597555", PF_INFO.tick = Date.now(), PF_INFO.configType = "_weixin", PF_INFO.exposeType = "_a", PF_INFO.loadingType = 2, PF_INFO.lastVersion = 1985, PF_INFO.wxVersion = window.versions.wxVersion, PF_INFO.wxShield = !1, PF_INFO.wxIOS = !1, PF_INFO.wxAndroid = !1, PF_INFO.wxPC = !1, window.apiRetryAmount = 5, window.isCheckBan = !1, window.loadProbPkg = !1, window.loadMainPkg = !1, window.loadVersion = !1, window.loadOption = !1, window.loadServer = !1, window.bEnterGame = !1, window.alert = function (e) {
  console.log("alert", e), wx.hideLoading({}), wx.showModal({ title: "\u63d0\u793a", content: e, success(e) {
      e.confirm ? console.log("\u7528\u6237\u70b9\u51fb\u786e\u5b9a") : e.cancel && console.log("\u7528\u6237\u70b9\u51fb\u53d6\u6d88");
    } });
}, window.loginAlert = function (e) {
  console.log("loginAlert", e), wxHideLoading(), wx.showModal({ title: "\u63d0\u793a", content: e, confirmText: "\u91cd\u8bd5", cancelText: "\u9000\u51fa", success(e) {
      e.confirm ? window.sdkInit() : e.cancel && (console.log("\u9000\u51fa\u6e38\u620f"), wx.exitMiniProgram({}));
    } });
}, window.exitAlert = function (e) {
  console.log("exitAlert", e), wx.showModal({ title: "\u63d0\u793a", content: e, confirmText: "\u91cd\u767b", showCancel: !1, complete(e) {
      console.log("\u9000\u51fa\u6e38\u620f"), wx.exitMiniProgram({});
    } });
}, window.isShowLoading = !1, window.wxShowLoading = function (e) {
  window.isShowLoading = !0, wx.showLoading(e);
}, window.wxHideLoading = function () {
  window.isShowLoading && (window.isShowLoading = !1, wx.hideLoading({}));
}, window.changeServerLoading = function (e) {
  window.ServerLoading.instance.changeServerLoading(e);
}, window.msgCheck = function (e, n) {
  AKSDK.msgCheck(e, function (e) {
    e && e.data ? 1 == e.data.state ? n(!0) : (n(!1), console.info("\u5b58\u5728\u654f\u611f\u8bcd\uff1a " + e.data.msg)) : console.log("msgCheck", e);
  });
}, window.getJsURL = function (e) {
  console.log("getJsURL", e);
}, window.toAllProgress = function (e) {}, window.toProgress = function (e, n, o) {}, window.toEnterGame = function (e) {
  console.log("toEnterGame", e), window.ServerLoading.instance.closeAuthor(), window.ServerLoading.instance.closeServer(), window.ServerLoading.instance.closeLoading();
}, window.onApiError = function (e) {
  console.log("on api error"), window.loginAlert("on api error"), clientlog(e || '{"error": "on api error"}');
}, window.reqRecordError = function (e) {
  e = JSON.parse(e);e.gamever = window.config.game_ver, e.serverid = window.PF_INFO.selectedServer ? window.PF_INFO.selectedServer.server_id : 0, e.systemInfo = window.systemInfo;e = JSON.stringify(e);console.error("\u4e0a\u62a5\u9519\u8bef\uff1a" + e), clientlog(e);
}, window.reqRecordInfo = function (e) {
  e = { id: window.PF_INFO.roleId, role: window.PF_INFO.roleName, level: window.PF_INFO.roleLevel, user: window.PF_INFO.account, version: window.PF_INFO.lastVersion, cdn: window.PF_INFO.cdn, pkgName: window.PF_INFO.pkgName, gamever: window.config.game_ver, serverid: window.PF_INFO.selectedServer ? window.PF_INFO.selectedServer.server_id : 0, systemInfo: window.systemInfo, error: e };e = JSON.stringify(e);console.warn("\u4e0a\u62a5\u4fe1\u606f\uff1a" + e), window.clientlog(e);
}, window.clientlog = function (e) {
  var n;"devtools" != window.PF_INFO.wxPlatform && (n = PF_INFO.clientlog + "?account=" + PF_INFO.account, wx.request({ url: n, method: "POST", data: e, header: { "content-type": "application/json", "cache-control": "no-cache" }, success: function (e) {}, fail: function (e) {}, complete: function () {} }));
}, window.guild = function () {
  function S4() {
    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
  }return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "+" + S4() + S4() + S4();
}, window.sdkInit = function () {
  console.log("#SDK \u521d\u59cb\u5316\uff1a");var e = AKSDK.getConfig();PF_INFO.channel = e.partner_id, PF_INFO.channelNum = e.partner_id, PF_INFO.partnerId = e.partner_id, PF_INFO.pkgName = e.game_pkg;e = { game_ver: PF_INFO.version };PF_INFO.device_id = this.guild(), wxShowLoading({ title: "\u6b63\u5728\u521d\u59cb\u5316" }), AKSDK.init(e, this.sdkOnInited.bind(this));
}, window.sdkOnInited = function (e) {
  var n = e.develop;console.log("#\u521d\u59cb\u5316\u6210\u529f   \u63d0\u5ba1\u72b6\u6001:" + n + "   \u662f\u5426\u63d0\u5ba1:" + (1 == n) + "   \u63d0\u5ba1\u7248\u672c\u53f7:" + e.game_ver + "   \u5f53\u524d\u7248\u672c\u53f7:" + window.versions.wxVersion), window.compareVersion(window.versions.wxVersion, e.game_ver) < 0 ? (console.log("#\u6b63\u5f0f\u7248============================="), PF_INFO.apiurl = "https://api-tjqy.shzbkj.com", PF_INFO.logurl = "https://log-tjqy.shzbkj.com", PF_INFO.payurl = "https://pay-tjqy.shzbkj.com", PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/", PF_INFO.version_name = "weixin", PF_INFO.wxShield = !1) : 0 == window.compareVersion(window.versions.wxVersion, e.game_ver) ? (console.log("#\u5ba1\u6838\u7248============================="), PF_INFO.apiurl = "https://api-tjqytest.shzbkj.com", PF_INFO.logurl = "https://log-tjqytest.shzbkj.com", PF_INFO.payurl = "https://pay-tjqytest.shzbkj.com", PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/", PF_INFO.version_name = "", PF_INFO.wxShield = !0) : (console.log("#\u5f00\u53d1\u7248============================="), PF_INFO.apiurl = "https://api-tjqytest.shzbkj.com", PF_INFO.logurl = "https://log-tjqytest.shzbkj.com", PF_INFO.payurl = "https://pay-tjqytest.shzbkj.com", PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/", PF_INFO.version_name = "", PF_INFO.wxShield = !1), PF_INFO.from_scene = config.from || 0, this.loadVersionConfig(), this.reqPkgOptions(), wxShowLoading({ title: "\u6b63\u5728\u767b\u5f55\u8d26\u53f7" }), AKSDK.login(this.sdkOnLogin.bind(this));
}, window.sdkOnLogin = function (e, n) {
  wxShowLoading({ title: "\u6b63\u5728\u9a8c\u8bc1\u8d26\u53f7" }), 0 === e && n && n.token ? (PF_INFO.sdk_token = n.token, sendApi(PF_INFO.apiurl, "User.login", { platform: PF_INFO.sdk_name, partner_id: PF_INFO.partnerId, token: n.token, game_pkg: PF_INFO.pkgName, deviceId: PF_INFO.device_id, scene: "WX_" + PF_INFO.from_scene }, this.onUserLogin.bind(this), apiRetryAmount, onApiError)) : (clientlog(JSON.stringify({ error: JSON.stringify({ type: "sdkOnLoginError", status: e, data: n }) })), window.loginAlert("\u767b\u5f55/\u6ce8\u518c\u5931\u8d25" + (n && n.errMsg ? "\uff0c" + n.errMsg : "")));
}, window.onUserLogin = function (e) {
  e ? "success" == e.state ? (PF_INFO.userId = String(e.account), PF_INFO.account = String(e.account), PF_INFO.platform = String(e.platform), PF_INFO.channel = String(e.platform), PF_INFO.platform_uid = String(e.platform_uid), PF_INFO.php_sign = String(e.sign), PF_INFO.php_signtime = String(e.time), PF_INFO.sign = "", wxShowLoading({ title: "\u8bf7\u6c42\u670d\u52a1\u5668" }), sendApi(PF_INFO.apiurl, "Server.defaultServer", { partner_id: PF_INFO.partnerId, uid: PF_INFO.account, version: PF_INFO.version, game_pkg: PF_INFO.pkgName, device: PF_INFO.device_id }, this.onUserLoginDefaultServers.bind(this), apiRetryAmount, onApiError)) : window.loginAlert("User.login failed: " + e.state) : window.loginAlert("User.login failed");
}, window.onUserLoginDefaultServers = function (e) {
  e ? "success" == e.state ? e.data && 0 != e.data.length ? (PF_INFO.newRegister = e.is_new, PF_INFO.selectedServer = { server_id: String(e.data[0].server_id), server_name: String(e.data[0].server_name), entry_ip: e.data[0].entry_ip, entry_port: parseInt(e.data[0].entry_port), status: get_status(e.data[0]), start_time: e.data[0].start_time, cdn: PF_INFO.cdn }, this.initComplete()) : window.loginAlert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f") : window.loginAlert("Server.defaultServer failed: " + e.state) : window.loginAlert("Server.defaultServer failed");
}, window.initComplete = function () {
  if (1 == PF_INFO.newRegister) {
    var e = PF_INFO.selectedServer.status;if (-1 === e || 0 === e) return void window.loginAlert(-1 === e ? "\u5f53\u524d\u670d\u52a1\u5668\u5728\u7ef4\u62a4\u4e2d" : "\u5f53\u524d\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85");req_server_check_ban(0, PF_INFO.selectedServer.server_id), window.ServerLoading.instance.openLoading(PF_INFO.newRegister);
  } else window.ServerLoading.instance.openServer(), wxHideLoading();window.loadServer = !0, window.initMain(), window.enterToGame();
}, window.loadVersionConfig = function () {
  sendApi(PF_INFO.apiurl, "User.getCdnVersion", { game_pkg: PF_INFO.pkgName, version_name: PF_INFO.version_name }, function (e) {
    e ? "success" == e.state ? e.data && e.data.version ? (PF_INFO.base_cdn = e.data.cdn_url || PF_INFO.base_cdn, PF_INFO.cdn = e.data.cdn_url || PF_INFO.cdn, PF_INFO.lastVersion = e.data.version || PF_INFO.lastVersion, console.info("\u8d44\u6e90\u7248\u672c\u53f7\uff1a" + PF_INFO.lastVersion), window.loadVersion = !0, window.initMain(), window.enterToGame()) : window.loginAlert("User.getCdnVersion failed: version=" + (e.data && e.data.version)) : window.loginAlert("User.getCdnVersion failed: state=" + e.state) : window.loginAlert("User.getCdnVersion failed");
  });
}, window.pkgOptions, window.reqPkgOptions = function () {
  sendApi(PF_INFO.apiurl, "Common.get_option_pkg", { game_pkg: PF_INFO.pkgName }, reqPkgOptionsCallBack);
}, window.reqPkgOptionsCallBack = function (e) {
  if ("success" === e.state && e.data) for (var n in window.pkgOptions = e.data, e.data) PF_INFO[n] = e.data[n];else console.info("reqPkgOptionsCallBack " + e.state);window.loadOption = !0, window.enterToGame();
}, window.toPay = function (e, n, o, i, r, t, a, s, d) {
  r = String(r);PF_INFO.pay_infos[r] = { productid: r, productname: a, productdesc: s, roleid: e, rolename: n, rolelevel: o, price: t, callback: d }, sendApi(PF_INFO.payurl, "Order.order", { game_pkg: PF_INFO.pkgName, server_id: PF_INFO.selectedServer.server_id, server_name: PF_INFO.selectedServer.server_name, level: o, uid: PF_INFO.account, role_id: e, role_name: n, product_id: r, product_name: a, product_desc: s, money: t, partner_id: PF_INFO.partnerId }, toPayCallBack, apiRetryAmount, onApiError);
}, window.toPayCallBack = function (o) {
  var i;o && (200 === o.errCode || "success" == o.state ? ((i = PF_INFO.pay_infos[String(o.product_id)]).callback && i.callback(o.product_id, o.cp_order_id, -1), AKSDK.pay({ cpbill: o.cp_order_id, productid: o.product_id, productname: i.productname, productdesc: i.productdesc, serverid: PF_INFO.selectedServer.server_id, servername: PF_INFO.selectedServer.server_name, roleid: i.roleid, rolename: i.rolename, rolelevel: i.rolelevel, price: i.price, extension: JSON.stringify({ cp_order_id: o.cp_order_id }) }, function (e, n) {
    i.callback && 0 == e && i.callback(o.product_id, o.cp_order_id, e), console.info(JSON.stringify({ type: "paycallback", status: e, data: o, role_name: i.rolename }));
  })) : alert(o.info));
}, window.loadCreateRole = function () {}, window.toCreate = function (e, n, o, i) {
  AKSDK.logCreateRole(PF_INFO.selectedServer.server_id, PF_INFO.selectedServer.server_name || PF_INFO.selectedServer.server_id, e, n, o), sendApi(PF_INFO.apiurl, "User.create_role", { game_pkg: PF_INFO.pkgName, server_id: PF_INFO.selectedServer.server_id, role_id: e, uid: PF_INFO.account, role_name: n, role_type: i, level: o });
}, window.toLogin = function (e, n, o, i, r) {
  PF_INFO.roleId = e, PF_INFO.roleName = n, PF_INFO.roleLevel = o, AKSDK.logEnterGame(PF_INFO.selectedServer.server_id, PF_INFO.selectedServer.server_name || PF_INFO.selectedServer.server_id, e, n, o), sendApi(PF_INFO.apiurl, "User.update_role", { game_pkg: PF_INFO.pkgName, server_id: PF_INFO.selectedServer.server_id, role_id: e, uid: PF_INFO.account, role_name: n, role_type: i, level: o, evolution: r });
}, window.toLevelUp = function (e, n, o, i, r) {
  PF_INFO.roleId = e, PF_INFO.roleName = n, PF_INFO.roleLevel = o;
}, window.toRealName = function (e) {}, window.openShare = function (n) {
  AKSDK.share("share", function (e) {
    n(e);
  });
}, window.openService = function () {
  AKSDK.openService();
}, window.microPortGuide = function () {
  AKSDK.weiduanHelper();
}, window.onShowData = null, window.onShowCallback = null, window.onShow = function (e) {
  window.onShowCallback = e, window.onShowCallback && window.onShowData && (console.info("\u5c0f\u6e38\u620f\u5207\u524d\u53f0\u4e8b\u4ef6\uff0c\u573a\u666f\u503c\uff1a" + window.onShowData.scene), window.onShowCallback(window.onShowData), window.onShowData = null);
}, window.reqPlayerAskInfo = function (e, n, o, i) {
  window.send("https://sdk.sh9130.com/game/?ct=min&ac=getInviter", { game_pkg: window.PF_INFO.pkgName, role_id: n, server_id: o }, i);
}, window.openSubscribeMsg = function (r, s) {
  wx.onTouchEnd(function onTouchEnd(e) {
    var t = [];var n = [];var a = window.config.tmpId;for (var o in a) {
      var i = Number(o);r && r.length && -1 == r.indexOf(i) || (n.push(a[o]), t.push([i, 3]));
    }0 <= window.compareVersion(window.SDKVersion, "2.4.4") ? (console.log("\u8c03\u7528\u8ba2\u9605"), AKSDK.subscribeMessage(n, function (e) {
      if (console.log("\u8ba2\u9605\u56de\u8c03\uff1a"), console.log(e), e && "requestSubscribeMessage:ok" == e.errMsg) for (var n in a) if ("accept" == e[a[n]]) {
        var o = Number(n);for (var i = 0; i < t.length; i++) if (t[i][0] == o) {
          t[i][1] = 1;break;
        }
      }0 <= window.compareVersion(window.SDKVersion, "2.10.1") ? wx.getSetting({ withSubscriptions: !0, success: function (e) {
          var n = e.subscriptionsSetting.itemSettings;if (n) {
            for (var o in console.log("\u83b7\u5f97\u8ba2\u9605\u8bbe\u7f6e\uff1a"), console.log(n), a) if ("accept" == n[a[o]]) {
              var i = Number(o);for (var r = 0; r < t.length; r++) if (t[r][0] == i) {
                t[r][1] = 2;break;
              }
            }console.log(t), s && s(t);
          } else console.log("\u83b7\u5f97\u8ba2\u9605\u8bbe\u7f6e\uff1a\u6ca1\u6709\u957f\u671f\u8ba2\u9605\u6d88\u606f"), console.log(e), console.log(t), s && s(t);
        }, fail: function () {
          console.log("\u83b7\u5f97\u8ba2\u9605\u8bbe\u7f6e\uff1a\u5931\u8d25"), console.log(t), s && s(t);
        } }) : (console.log("\u7248\u672c\u8fc7\u4f4e\uff0c\u83b7\u5f97\u8ba2\u9605\u8bbe\u7f6e\uff1a\u5931\u8d25 " + window.SDKVersion), console.log(t), s && s(t));
    })) : (console.log("\u7248\u672c\u8fc7\u4f4e\uff0c\u4e0d\u652f\u6301\u8ba2\u9605 " + window.SDKVersion), console.log(t), s && s(t)), wx.offTouchEnd(onTouchEnd);
  });
}, window.batteryInfo = { isSuccess: !1, level: "100", isCharging: !1 }, window.getBatteryInfo = function (o) {
  wx.getBatteryInfo({ success: function (e) {
      var n = window.batteryInfo;n.isSuccess = !0, n.level = Number(e.level).toFixed(0), n.isCharging = e.isCharging, o && o(n.isSuccess, n.level, n.isCharging);
    }, fail: function (e) {
      console.log("\u8c03\u7528\u83b7\u53d6\u7535\u6c60\u4fe1\u606f\u5931\u8d25", e.errMsg);e = window.batteryInfo;o && o(e.isSuccess, e.level, e.isCharging);
    } });
}, window.send = function (n, o, i, r, t, a, e, s) {
  null == r && (r = 1);var d = new XMLHttpRequest();d.onreadystatechange = function () {
    if (4 == d.readyState) {
      if (200 == d.status || 301 == d.status) {
        var e;d.response;if (e = JSON.parse(d.response), !a || a(e, d, n)) return void (i && i(e));console.info(n), console.error(e);
      }0 < r - 1 ? setTimeout(function () {
        send(n, o, i, r - 1, t, a);
      }, 1e3) : t && t(JSON.stringify({ error: JSON.stringify({ url: n, status: d.status, response: d.response, responseType: d.responseType }) }));
    }
  }, d.open(e || "GET", n), d.responseType = "text", d.setRequestHeader("content-type", s || "application/json"), d.send(o);
}, window.sendApi = function (e, n, o, i, r, t, a) {
  o = o || {};var s = Math.floor(Date.now() / 1e3);o.time = s, o.method = n;var d = Object.keys(o).sort();var w = "";var c = "";for (var l = 0; l < d.length; l++) w = w + (0 == l ? "" : "&") + d[l] + o[d[l]], c = c + (0 == l ? "" : "&") + d[l] + "=" + encodeURIComponent(o[d[l]]);w += PF_INFO.apikey;n = "sign=" + md5(w);send(e + "?" + c + ("" == c ? "" : "&") + n, null, i, r, t, a || function (e) {
    return "success" == e.state;
  }, null, "application/x-www-form-urlencoded");
}, window.onRoleRecordStep = function (e, n) {
  var o = 0;PF_INFO.selectedServer && (o = PF_INFO.selectedServer.server_id), sendApi(PF_INFO.logurl, "UserLog.reportUidStep", { partnerId: PF_INFO.partnerId, gamePkg: PF_INFO.pkgName, logTime: Math.floor(Date.now() / 1e3), platformUid: PF_INFO.platform_uid, type: e, serverId: o }, null, 2, null, function () {
    return !0;
  });
}, window.req_server_group = function (e) {
  sendApi(PF_INFO.apiurl, "Server.getServerGroup", { partner_id: PF_INFO.partnerId, uid: PF_INFO.account, version: PF_INFO.version, game_pkg: PF_INFO.pkgName, device: PF_INFO.device_id }, reqServerGroupCallBack, apiRetryAmount, onApiError);
}, window.reqServerGroupCallBack = function (e) {
  "success" === e.state && e.data ? (e.data.unshift({ id: -2, name: "\u6700\u65b0\u670d" }), e.data.unshift({ id: -1, name: "\u5df2\u6709\u89d2\u8272" }), PF_INFO.groupList = e.data, window.initPanel && window.initPanel.showGroupList()) : (PF_INFO.hasGroupReq = !1, window.loginAlert("reqServerGroupCallBack " + e.state));
}, window.req_server_owner = function (e) {
  sendApi(PF_INFO.apiurl, "Server.getServerByUid", { partner_id: PF_INFO.partnerId, uid: PF_INFO.account, version: PF_INFO.version, game_pkg: PF_INFO.pkgName }, reqServerOwnerCallBack, apiRetryAmount, onApiError);
}, window.reqServerOwnerCallBack = function (e) {
  if (PF_INFO.hasServerReq = !1, "success" === e.state && e.data) {
    for (var n = 0; n < e.data.length; n++) e.data[n].status = get_status(e.data[n]);PF_INFO.serverList[-1] = window.changeServerName(e.data), window.initPanel.showServerList(-1);
  } else window.loginAlert("reqServerOwnerCallBack " + e.state);
}, window.req_server_list = function (e, n) {
  sendApi(PF_INFO.apiurl, "Server.getServerByGroup", { partner_id: PF_INFO.partnerId, uid: PF_INFO.account, version: PF_INFO.version, game_pkg: PF_INFO.pkgName, device: PF_INFO.device_id, server_group_id: n }, reqServerListCallBack, apiRetryAmount, onApiError);
}, window.reqServerListCallBack = function (e) {
  if (PF_INFO.hasServerReq = !1, "success" === e.state && e.data && e.data.data) {
    var n = e.data.server_group_id;var o = [];for (var i = 0; i < e.data.data.length; i++) e.data.data[i].status = get_status(e.data.data[i]), 0 != o.length && 0 == e.data.data[i].status || (o[o.length] = e.data.data[i]);PF_INFO.serverList[n] = window.changeServerName(o), window.initPanel.showServerList(n);
  } else window.loginAlert("reqServerListCallBack " + e.state);
}, window.req_recommend_server_list = function (e) {
  sendApi(PF_INFO.apiurl, "Server.getRecommendServerList", { partner_id: PF_INFO.partnerId, uid: PF_INFO.account, version: PF_INFO.version }, reqServerRecommendCallBack, apiRetryAmount, onApiError);
}, window.reqServerRecommendCallBack = function (e) {
  if (PF_INFO.hasServerReq = !1, "success" === e.state && e.data) {
    for (var n = 0; n < e.data.length; n++) e.data[n].status = get_status(e.data[n]);PF_INFO.serverList[-2] = window.changeServerName(e.data), window.initPanel.showServerList(-2);
  } else alert("reqServerRecommendCallBack " + e.state);
}, window.changeServerName = function (n) {
  if (!n && n.length <= 0) return n;for (let e = 0; e < n.length; e++) n[e].is_recommend && 1 == n[e].is_recommend && (n[e].server_name += "(\u63a8\u8350)");return n;
}, window.req_server_notice = function (e, n) {
  e = e || PF_INFO.selectedServer.server_id, sendApi(PF_INFO.apiurl, "Common.get_anno", { type: "4", game_pkg: PF_INFO.pkgName, server_id: e }, n);
}, window.get_status = function (e) {
  return e ? 1 == e.status ? 1 == e.online_status ? 2 : 1 : 0 == e.status ? 0 : -1 : -1;
}, window.req_server_check_ban = function (e, n) {
  PF_INFO.last_check_ban = { step: e, server_id: n };wxShowLoading({ title: "\u6b63\u5728\u9a8c\u8bc1\u89d2\u8272" }), sendApi(PF_INFO.apiurl, "User.checkInfo", { partner_id: PF_INFO.partnerId, uid: PF_INFO.account, game_pkg: PF_INFO.pkgName, server_id: n, platform: PF_INFO.platform, platform_uid: PF_INFO.platform_uid, check_login_time: PF_INFO.php_signtime, check_login_sign: PF_INFO.php_sign, version_name: PF_INFO.version_name }, reqServerCheckBanCallBack, apiRetryAmount, onApiError, function (e) {
    return "success" == e.state || "time_err" == e.info || "sign_err" == e.info;
  });
}, window.reqServerCheckBanCallBack = function (e) {
  var n;"success" === e.state && e.data ? ((n = PF_INFO.selectedServer).channel_num = PF_INFO.channelNum, n.sign = String(e.data.login_sign), n.tick = parseInt(e.data.time), e.data.server_num ? n.server_num = parseInt(e.data.server_num) : n.server_num = parseInt(e.data.server_id), n.is_domain = 0, n.cdn = PF_INFO.base_cdn, n.resver = e.data.cdn_version, n.server_options = e.data.server_options, 1 == PF_INFO.newRegister && n.server_options && 1 == n.server_options.show_btn && (PF_INFO.showGetBtn = 1, window.ServerLoading.instance.setShowBtn()), checkBanSuccess()) : sendApi(PF_INFO.apiurl, "User.login", { platform: PF_INFO.sdk_name, partner_id: PF_INFO.partnerId, token: PF_INFO.sdk_token, game_pkg: PF_INFO.pkgName, deviceId: PF_INFO.device_id, scene: "WX_" + PF_INFO.from_scene }, function (e) {
    "failed" != e.state ? (PF_INFO.php_sign = String(e.sign), PF_INFO.php_signtime = String(e.time), setTimeout(function () {
      req_server_check_ban(PF_INFO.last_check_ban.step, PF_INFO.last_check_ban.server_id);
    }, 1500)) : window.loginAlert("User.login failed: " + e.state);
  }, apiRetryAmount, onApiError, function (e) {
    return "success" == e.state || "failed" == e.state;
  });
}, window.checkBanSuccess = function () {
  ServerLoading.instance.openLoading(PF_INFO.newRegister), window.isCheckBan = !0, window.enterToGame();
}, window.initMain = function () {
  var e;window.loadProbPkg && window.loadMainPkg && window.loadVersion && window.loadServer && (window.MainWX.instance || (console.log("Main \u521d\u59cb\u5316" + window.MainWX.instance), e = wx.getLaunchOptionsSync().scene || 0, e = { cdn: window.PF_INFO.cdn, spareCdn: window.PF_INFO.spareCdn, newRegister: window.PF_INFO.newRegister, wxPC: window.PF_INFO.wxPC, wxIOS: window.PF_INFO.wxIOS, wxAndroid: window.PF_INFO.wxAndroid, wxParam: { limitLoad: window.PF_INFO.wxLimitLoad, benchmarkLevel: window.PF_INFO.wxBenchmarkLevel, wxFrom: "txcps" == window.config.from ? 1 : 0, wxSDKVersion: window.SDKVersion }, configType: window.PF_INFO.configType, exposeType: window.PF_INFO.exposeType, scene: e }, new window.MainWX(e, window.PF_INFO.lastVersion, window.workerJsURL)));
}, window.enterToGame = function () {
  if (window.loadProbPkg && window.loadMainPkg && window.loadVersion && window.loadServer && window.isCheckBan && window.loadOption) {
    if (bEnterGame) wxHideLoading();else {
      bEnterGame = !0, window.MainWX.instance || window.initMain();var e = 0;var n = wx.getMenuButtonBoundingClientRect();n && (window.PF_INFO.wxPhone && (e = n.top), console.info("MenuButton  top:" + n.top + ",bottom:" + n.bottom + ",left:" + n.left + ",right:" + n.right + ",width:" + n.width + ",height:" + n.height));var o = {};for (const t in PF_INFO.selectedServer) o[t] = PF_INFO.selectedServer[t];var i = { channel: window.PF_INFO.channel, account: window.PF_INFO.account, userId: window.PF_INFO.userId, serverId: o.server_id, cdn: window.PF_INFO.cdn, data: window.PF_INFO.data, package: window.PF_INFO.package, newRegister: window.PF_INFO.newRegister, pkgName: window.PF_INFO.pkgName, partnerId: window.PF_INFO.partnerId, platform_uid: window.PF_INFO.platform_uid, deviceId: window.PF_INFO.device_id, selectedServer: o, configType: window.PF_INFO.configType, exposeType: window.PF_INFO.exposeType, debugUsers: window.PF_INFO.debugUsers, wxMenuTop: e, wxShield: window.PF_INFO.wxShield };if (window.pkgOptions) for (var r in window.pkgOptions) i[r] = window.pkgOptions[r];window.MainWX.instance.initPlatdata(i);
    }
  } else console.info("\u3010\u767b\u5f55\u3011loadProbPkg:" + window.loadProbPkg + ",loadMainPkg:" + window.loadMainPkg + ",loadVersion:" + window.loadVersion + ",loadServer:" + window.loadServer + ",isCheckBan:" + window.isCheckBan + ",loadOption:" + window.loadOption);
};