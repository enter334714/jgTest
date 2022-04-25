import AKSDK from "../eeeesdk/eeesdk.js";window.versions = { wxVersion: window.config.game_ver }, window.DEBUG = !1, window.PLATFORM = 1, window.ENV = 1, window.PACK = !0, window.WSS = !0, window.workerJsURL = "", window.isWaiFangWx = !1, window.PF_INFO = { base_cdn: "https://cdn-tjqy.shzbkj.com/weixin_0/", cdn: "https://cdn-tjqy.shzbkj.com/weixin_0/" }, PF_INFO.pay_infos = {}, PF_INFO.package = "0", PF_INFO.version = window.versions.wxVersion, PF_INFO.mac = "", PF_INFO.os = "1", PF_INFO.sdk_name = "9130", PF_INFO.apiurl = "https://api-tjqytest.shzbkj.com", PF_INFO.logurl = "https://log-tjqytest.shzbkj.com", PF_INFO.payurl = "https://pay-tjqytest.shzbkj.com", PF_INFO.apikey = "MQx0mYlUWO5XYKvgAIPKWgK1w722GKih", PF_INFO.partnerId = "1", PF_INFO.pkgName = "", PF_INFO.device_id = "", PF_INFO.from_scene = 0, PF_INFO.serverList = {}, PF_INFO.channelNum = parseInt(PF_INFO.partnerId), PF_INFO.channel = PF_INFO.partnerId, PF_INFO.selectedServer = {}, PF_INFO.clientlog = "https://jgcenter.sh9130.com/clientlog/", PF_INFO.showLogo = !1, PF_INFO.debugUsers = "39927500|58163716|74597555", PF_INFO.tick = Date.now(), PF_INFO.configType = "_weixin", PF_INFO.exposeType = "_a", PF_INFO.loadingType = 2, PF_INFO.lastVersion = 1985, PF_INFO.wxVersion = window.versions.wxVersion, PF_INFO.wxShield = !1, PF_INFO.wxIOS = !1, PF_INFO.wxAndroid = !1, PF_INFO.wxPC = !1, window.apiRetryAmount = 5, window.isCheckBan = !1, window.loadProbPkg = !1, window.loadMainPkg = !1, window.loadServerRes = !1, window.loadLoadingRes = !1, window.loadVersion = !1, window.loadOption = !1, window.loadServer = !1, window.bEnterGame = !1, window.sdkInitRes = null, window.alert = function (C$99e) {
  console.log("alert", C$99e), wx.hideLoading({}), wx.showModal({ title: "\u63d0\u793a", content: C$99e, success(C$99e) {
      C$99e.confirm ? console.log("\u7528\u6237\u70b9\u51fb\u786e\u5b9a") : C$99e.cancel && console.log("\u7528\u6237\u70b9\u51fb\u53d6\u6d88");
    } });
}, window.loginAlert = function (C$99e) {
  console.log("loginAlert", C$99e), wxHideLoading(), wx.showModal({ title: "\u63d0\u793a", content: C$99e, confirmText: "\u91cd\u8bd5", cancelText: "\u9000\u51fa", success(C$99e) {
      C$99e.confirm ? window.sdkInit() : C$99e.cancel && (console.log("\u9000\u51fa\u6e38\u620f"), wx.exitMiniProgram({}));
    } });
}, window.exitAlert = function (C$99e) {
  console.log("exitAlert", C$99e), wx.showModal({ title: "\u63d0\u793a", content: C$99e, confirmText: "\u91cd\u767b", showCancel: !1, complete(C$99e) {
      console.log("\u9000\u51fa\u6e38\u620f"), wx.exitMiniProgram({});
    } });
}, window.isShowLoading = !1, window.wxShowLoading = function (C$99e) {
  window.isShowLoading = !0, wx.showLoading(C$99e);
}, window.wxHideLoading = function () {
  window.isShowLoading && (window.isShowLoading = !1, wx.hideLoading({}));
}, window.changeServerLoading = function (C$99e) {
  window.ServerLoading.instance.changeServerLoading(C$99e);
}, window.msgCheck = function (C$99e, C$99n) {
  AKSDK.msgCheck(C$99e, function (C$99e) {
    C$99e && C$99e.data ? 1 == C$99e.data.state ? C$99n(!0) : (C$99n(!1), console.info("\u5b58\u5728\u654f\u611f\u8bcd\uff1a " + C$99e.data.msg)) : console.log("msgCheck", C$99e);
  });
}, window.getJsURL = function (C$99e) {
  console.log("getJsURL", C$99e);
}, window.toAllProgress = function (C$99e) {}, window.toProgress = function (C$99e, C$99n, C$99o) {}, window.toEnterGame = function (C$99e) {
  console.log("toEnterGame", C$99e), window.ServerLoading.instance.closeAuthor(), window.ServerLoading.instance.closeServer(), window.ServerLoading.instance.closeLoading();
}, window.onApiError = function (C$99e) {
  window.toErrorAlarm(14, "onApiError " + C$99e), window.loginAlert("on api error");C$99e = { id: window.PF_INFO.roleId, role: window.PF_INFO.roleName, level: window.PF_INFO.roleLevel, account: window.PF_INFO.account, version: window.PF_INFO.lastVersion, cdn: window.PF_INFO.cdn, pkgName: window.PF_INFO.pkgName, gamever: window.config.game_ver, serverid: window.PF_INFO.selectedServer ? window.PF_INFO.selectedServer.server_id : 0, systemInfo: window.systemInfo, error: "onApiError", stack: C$99e || "on api error" };C$99e = JSON.stringify(C$99e);console.error("API\u9519\u8bef\uff1a" + C$99e), window.clientlog(C$99e);
}, window.toErrorAlarm = function (C$99e, C$99n) {
  sendApi(PF_INFO.logurl, "log.client_error", { game_pkg: PF_INFO.pkgName, partner_id: PF_INFO.partnerId, server_id: PF_INFO.selectedServer && 0 < PF_INFO.selectedServer.server_id ? PF_INFO.selectedServer.server_id : 0, uid: 0 < PF_INFO.account ? PF_INFO.account : 0, type: C$99e, info: C$99n });
}, window.reqRecordError = function (C$99e) {
  C$99e = JSON.parse(C$99e);C$99e.gamever = window.config.game_ver, C$99e.serverid = window.PF_INFO.selectedServer ? window.PF_INFO.selectedServer.server_id : 0, C$99e.systemInfo = window.systemInfo;C$99e = JSON.stringify(C$99e);console.error("\u4e0a\u62a5\u9519\u8bef\uff1a" + C$99e), window.clientlog(C$99e);
}, window.reqRecordInfo = function (C$99e, C$99n) {
  C$99e = { id: window.PF_INFO.roleId, role: window.PF_INFO.roleName, level: window.PF_INFO.roleLevel, account: window.PF_INFO.account, version: window.PF_INFO.lastVersion, cdn: window.PF_INFO.cdn, pkgName: window.PF_INFO.pkgName, gamever: window.config.game_ver, serverid: window.PF_INFO.selectedServer ? window.PF_INFO.selectedServer.server_id : 0, systemInfo: window.systemInfo, error: C$99e, stack: C$99n };C$99n = JSON.stringify(C$99e);console.warn("\u4e0a\u62a5\u4fe1\u606f\uff1a" + C$99n), window.clientlog(C$99n);
}, window.clientlog = function (C$99e) {
  var C$99n;"devtools" != window.PF_INFO.wxPlatform && (C$99n = PF_INFO.clientlog + "?account=" + PF_INFO.account, wx.request({ url: C$99n, method: "POST", data: C$99e, header: { "content-type": "application/json", "cache-control": "no-cache" }, success: function (C$99e) {}, fail: function (C$99e) {}, complete: function () {} }));
}, window.guild = function () {
  function S4() {
    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
  }return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "+" + S4() + S4() + S4();
}, window.sdkInit = function () {
  console.log("#SDK \u521d\u59cb\u5316\uff1a");var C$99e = AKSDK.getConfig();PF_INFO.channel = C$99e.partner_id, PF_INFO.channelNum = C$99e.partner_id, PF_INFO.partnerId = C$99e.partner_id, PF_INFO.pkgName = C$99e.game_pkg;C$99e = { game_ver: PF_INFO.version };PF_INFO.device_id = this.guild(), wxShowLoading({ title: "\u6b63\u5728\u521d\u59cb\u5316" }), AKSDK.init(C$99e, this.sdkOnInited.bind(this));
}, window.sdkOnInited = function (C$99e) {
  var C$99n = C$99e.develop;sdkInitRes = C$99e, console.log("#\u521d\u59cb\u5316\u6210\u529f   \u63d0\u5ba1\u72b6\u6001:" + C$99n + "   \u662f\u5426\u63d0\u5ba1:" + (1 == C$99n) + "   \u63d0\u5ba1\u7248\u672c\u53f7:" + C$99e.game_ver + "   \u5f53\u524d\u7248\u672c\u53f7:" + window.versions.wxVersion), !C$99e.game_ver || window.compareVersion(window.versions.wxVersion, C$99e.game_ver) < 0 ? (console.log("#\u6b63\u5f0f\u7248============================="), PF_INFO.apiurl = "https://api-tjqy.shzbkj.com", PF_INFO.logurl = "https://log-tjqy.shzbkj.com", PF_INFO.payurl = "https://pay-tjqy.shzbkj.com", PF_INFO.cdn = "https://cdn-tjqy-fj.shzbkj.com/weixin_1/", PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/", PF_INFO.version_name = "fj", PF_INFO.wxShield = !1) : 0 == window.compareVersion(window.versions.wxVersion, C$99e.game_ver) ? (console.log("#\u5ba1\u6838\u7248============================="), PF_INFO.apiurl = "https://api-tjqytest.shzbkj.com", PF_INFO.logurl = "https://log-tjqytest.shzbkj.com", PF_INFO.payurl = "https://pay-tjqytest.shzbkj.com", PF_INFO.cdn = "https://cdn-tjqy-fj.shzbkj.com/weixin_0/", PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/", PF_INFO.version_name = "weixin", PF_INFO.wxShield = !0) : (console.log("#\u5f00\u53d1\u7248============================="), PF_INFO.apiurl = "https://api-tjqytest.shzbkj.com", PF_INFO.logurl = "https://log-tjqytest.shzbkj.com", PF_INFO.payurl = "https://pay-tjqytest.shzbkj.com", PF_INFO.cdn = "https://cdn-tjqy-fj.shzbkj.com/weixin_0/", PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/", PF_INFO.version_name = "weixin", PF_INFO.wxShield = !1), PF_INFO.from_scene = config.from || 0, this.loadVersionConfig(), this.reqPkgOptions(), window.sdkLoginRetry = 5, wxShowLoading({ title: "\u6b63\u5728\u767b\u5f55\u8d26\u53f7" }), AKSDK.login(this.sdkOnLogin.bind(this));
}, window.sdkLoginRetry = 5, window.sdkOnLogin = function (C$99e, C$99n) {
  0 == C$99e && C$99n && C$99n.token ? (PF_INFO.sdk_token = C$99n.token, wxShowLoading({ title: "\u6b63\u5728\u9a8c\u8bc1\u8d26\u53f7" }), sendApi(PF_INFO.apiurl, "User.login", { platform: PF_INFO.sdk_name, partner_id: PF_INFO.partnerId, token: C$99n.token, game_pkg: PF_INFO.pkgName, deviceId: PF_INFO.device_id, scene: "WX_" + PF_INFO.from_scene }, this.onUserLogin.bind(this), apiRetryAmount, onApiError)) : C$99n && C$99n.errMsg && 0 < window.sdkLoginRetry && (-1 != C$99n.errMsg.indexOf("fail interrupted") || -1 != C$99n.errMsg.indexOf("network api interrupted") || -1 != C$99n.errMsg.indexOf("Network Error") || -1 != C$99n.errMsg.indexOf("ERR_TIMED_OUT") || -1 != C$99n.errMsg.indexOf("ERR_CONNECTION_ABORTED") || -1 != C$99n.errMsg.indexOf("ERR_CONNECTION_RESET")) ? (window.sdkLoginRetry--, AKSDK.login(this.sdkOnLogin.bind(this))) : (window.toErrorAlarm(1, "AKSDK.login fail: status=" + C$99e + ",errMsg=" + (C$99n ? C$99n.errMsg : "")), window.reqRecordInfo("sdkOnLoginError", JSON.stringify({ status: C$99e, data: C$99n })), window.loginAlert("\u767b\u5f55/\u6ce8\u518c\u5931\u8d25" + (C$99n && C$99n.errMsg ? "\uff0c" + C$99n.errMsg : "")));
}, window.onUserLogin = function (C$99e) {
  if (!C$99e) return window.toErrorAlarm(2, "User.login fail: response is null"), window.reqRecordInfo("userLoginError", "response is null"), void window.loginAlert("User.login failed");if ("success" != C$99e.state) return window.toErrorAlarm(2, "User.login fail: state=" + C$99e.state), window.reqRecordInfo("userLoginError", JSON.stringify(C$99e)), void window.loginAlert("User.login failed: " + C$99e.state);PF_INFO.userId = String(C$99e.account), PF_INFO.account = String(C$99e.account), PF_INFO.platform = String(C$99e.platform), PF_INFO.channel = String(C$99e.platform), PF_INFO.platform_uid = String(C$99e.platform_uid), PF_INFO.php_sign = String(C$99e.sign), PF_INFO.php_signtime = String(C$99e.time), PF_INFO.sign = "";wxShowLoading({ title: "\u8bf7\u6c42\u670d\u52a1\u5668" });C$99e = localStorage.getItem("LastSer_" + PF_INFO.pkgName + PF_INFO.account);C$99e && "" != C$99e ? (C$99e = Number(C$99e), this.getCheckServers(C$99e)) : this.getDefaultServers();
}, window.getDefaultServers = function () {
  sendApi(PF_INFO.apiurl, "Server.defaultServer", { partner_id: PF_INFO.partnerId, uid: PF_INFO.account, version: PF_INFO.version, game_pkg: PF_INFO.pkgName, device: PF_INFO.device_id }, this.onUserLoginDefaultServers.bind(this), apiRetryAmount, onApiError);
}, window.onUserLoginDefaultServers = function (C$99e) {
  return C$99e ? "success" != C$99e.state ? (window.toErrorAlarm(3, "Server.defaultServer failed: " + C$99e.state), void window.loginAlert("Server.defaultServer failed: " + C$99e.state)) : C$99e.data && 0 != C$99e.data.length ? void this.updCurServer(C$99e) : (window.toErrorAlarm(3, "Server.defaultServer failed: data null"), void window.loginAlert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f")) : (window.toErrorAlarm(3, "Server.defaultServer failed"), void window.loginAlert("Server.defaultServer failed"));
}, window.getCheckServers = function (C$99e) {
  sendApi(PF_INFO.apiurl, "Server.check_server", { server_id: C$99e, time: Date.now() / 1e3 }, this.onUserLoginCheckServers.bind(this), apiRetryAmount, onApiError);
}, window.onUserLoginCheckServers = function (C$99e) {
  return C$99e ? "success" != C$99e.state ? (window.toErrorAlarm(4, "Server.check_server failed: " + C$99e.state), void this.getDefaultServers()) : C$99e.data && 0 != C$99e.data.length ? (this.updCurServer(C$99e), void (window.ServerLoading && window.ServerLoading.instance.openJumpTipsBtn && window.ServerLoading.instance.openJumpTipsBtn(sdkInitRes.isShowSdkAge, sdkInitRes.sdk_age_adaptation_icon, sdkInitRes.sdk_age_adaptation_content, sdkInitRes.coordinate_x, sdkInitRes.coordinate_y))) : (window.toErrorAlarm(4, "Server.check_server failed: data null"), void this.getDefaultServers()) : (window.toErrorAlarm(4, "Server.check_server failed"), void this.getDefaultServers());
}, window.updCurServer = function (C$99e) {
  PF_INFO.newRegister = null != C$99e.is_new ? C$99e.is_new : 0, PF_INFO.selectedServer = { server_id: String(C$99e.data[0].server_id), server_name: String(C$99e.data[0].server_name), entry_ip: C$99e.data[0].entry_ip, entry_port: parseInt(C$99e.data[0].entry_port), status: get_status(C$99e.data[0]), start_time: C$99e.data[0].start_time, cdn: PF_INFO.cdn }, this.initComplete();
}, window.youYiCofig = null, window.initComplete = function () {
  var C$99n = this;AKSDK.switchEnv(function (C$99e) {
    if (console.log("\u83b7\u53d6\u8df3\u8f6c\u914d\u7f6e" + JSON.stringify(C$99e)), youYiCofig = C$99e, 1 == window.youYiCofig.showSwitchOn && (PF_INFO.newRegister = 0), 1 == PF_INFO.newRegister) {
      C$99e = PF_INFO.selectedServer.status;if (-1 === C$99e || 0 === C$99e) return window.toErrorAlarm(15, "new register selectedServer status error: id=" + PF_INFO.selectedServer.id + ",status=" + PF_INFO.selectedServer.status), void window.loginAlert(-1 === C$99e ? "\u5f53\u524d\u670d\u52a1\u5668\u5728\u7ef4\u62a4\u4e2d" : "\u5f53\u524d\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85");req_server_check_ban(0, PF_INFO.selectedServer.server_id), window.ServerLoading.instance.openLoading(PF_INFO.newRegister);
    } else window.ServerLoading.instance.openServer(() => {
      var C$99e = window.youYiCofig.switchContent;1 == window.youYiCofig.showSwitchOn && window.ServerLoading.instance.openJumpView("\u516c\u544a", C$99e, "\u8df3\u8f6c");
    }, C$99n), wxHideLoading();window.loadServer = !0, window.initMain(), window.enterToGame();
  });
}, window.forceJumpMiniGame = function () {
  AKSDK.switchGame(function (C$99e) {
    console.log("\u8df3\u8f6c\u5c0f\u6e38\u620f" + JSON.stringify(C$99e));
  });
}, window.loadVersionConfig = function () {
  sendApi(PF_INFO.apiurl, "User.getCdnVersion", { game_pkg: PF_INFO.pkgName, version_name: PF_INFO.version_name }, this.reqVersionConfigCallBack.bind(this), apiRetryAmount, onApiError);
}, window.reqVersionConfigCallBack = function (C$99e) {
  return C$99e ? "success" != C$99e.state ? (window.toErrorAlarm(5, "User.getCdnVersion failed: state=" + C$99e.state), void window.loginAlert("User.getCdnVersion failed: state=" + C$99e.state)) : C$99e.data && C$99e.data.version ? (C$99e.data.cdn_url && 10 < C$99e.data.cdn_url.length && (PF_INFO.base_cdn = C$99e.data.cdn_url, PF_INFO.cdn = C$99e.data.cdn_url), C$99e.data.version && (PF_INFO.lastVersion = C$99e.data.version), console.info("lastVersion:" + PF_INFO.lastVersion + ", version_name:" + PF_INFO.version_name), window.loadVersion = !0, window.initMain(), void window.enterToGame()) : (window.toErrorAlarm(5, "User.getCdnVersion failed: version=" + (C$99e.data && C$99e.data.version)), void window.loginAlert("User.getCdnVersion failed: version=" + (C$99e.data && C$99e.data.version))) : (window.toErrorAlarm(5, "User.getCdnVersion failed"), void window.loginAlert("User.getCdnVersion failed"));
}, window.pkgOptions, window.reqPkgOptions = function () {
  sendApi(PF_INFO.apiurl, "Common.get_option_pkg", { game_pkg: PF_INFO.pkgName }, this.reqPkgOptionsCallBack.bind(this), apiRetryAmount, onApiError);
}, window.reqPkgOptionsCallBack = function (C$99e) {
  if (C$99e && "success" === C$99e.state && C$99e.data) for (var C$99n in window.pkgOptions = C$99e.data, C$99e.data) PF_INFO[C$99n] = C$99e.data[C$99n];else window.toErrorAlarm(11, "Common.get_option_pkg failed"), console.info("reqPkgOptionsCallBack " + C$99e.state);window.loadOption = !0, window.enterToGame();
}, window.toPay = function (C$99e, C$99n, C$99o, C$99r, C$99i, C$99t, C$99a, C$99d, C$99s, C$99w) {
  C$99i = String(C$99i);PF_INFO.pay_infos[C$99i] = { productid: C$99i, productname: C$99a, productdesc: C$99d, roleid: C$99e, rolename: C$99n, rolelevel: C$99o, price: C$99t, callback: C$99s }, sendApi(PF_INFO.payurl, "Order.order", { game_pkg: PF_INFO.pkgName, server_id: PF_INFO.selectedServer.server_id, server_name: PF_INFO.selectedServer.server_name, level: C$99o, uid: PF_INFO.account, role_id: C$99e, role_name: C$99n, product_id: C$99i, product_name: C$99a, product_desc: C$99d, money: C$99t, partner_id: PF_INFO.partnerId }, toPayCallBack, apiRetryAmount, onApiError);
}, window.toPayCallBack = function (C$99o) {
  var C$99e, C$99r;!C$99o || 200 !== C$99o.errCode && "success" != C$99o.state ? (C$99e = C$99o ? "errCode=" + C$99o.errCode + ",state=" + C$99o.state + ",info=" + C$99o.info : "\u83b7\u53d6\u8ba2\u5355\u5931\u8d25", window.toErrorAlarm(13, "Order.order fail: " + C$99e), alert(C$99e)) : ((C$99r = PF_INFO.pay_infos[String(C$99o.product_id)]).callback && C$99r.callback(C$99o.product_id, C$99o.cp_order_id, -1), AKSDK.pay({ cpbill: C$99o.cp_order_id, productid: C$99o.product_id, productname: C$99r.productname, productdesc: C$99r.productdesc, serverid: PF_INFO.selectedServer.server_id, servername: PF_INFO.selectedServer.server_name, roleid: C$99r.roleid, rolename: C$99r.rolename, rolelevel: C$99r.rolelevel, price: C$99r.price, extension: JSON.stringify({ cp_order_id: C$99o.cp_order_id }) }, function (C$99e, C$99n) {
    C$99r.callback && 0 == C$99e && C$99r.callback(C$99o.product_id, C$99o.cp_order_id, C$99e), console.info(JSON.stringify({ type: "paycallback", status: C$99e, data: C$99o, role_name: C$99r.rolename }));
  }));
}, window.loadCreateRole = function () {}, window.toCreate = function (C$99e, C$99n, C$99o, C$99r, C$99i) {
  AKSDK.logCreateRole(PF_INFO.selectedServer.server_id, PF_INFO.selectedServer.server_name || PF_INFO.selectedServer.server_id, C$99e, C$99n, C$99o), sendApi(PF_INFO.apiurl, "User.create_role", { game_pkg: PF_INFO.pkgName, server_id: PF_INFO.selectedServer.server_id, role_id: C$99e, uid: PF_INFO.account, role_name: C$99n, role_type: C$99r, level: C$99o });
}, window.toLogin = function (C$99e, C$99n, C$99o, C$99r, C$99i, C$99t, C$99a, C$99d, C$99s, C$99w) {
  PF_INFO.roleId = C$99e, PF_INFO.roleName = C$99n, PF_INFO.roleLevel = C$99o, AKSDK.logEnterGame(PF_INFO.selectedServer.server_id, PF_INFO.selectedServer.server_name || PF_INFO.selectedServer.server_id, C$99e, C$99n, C$99o), sendApi(PF_INFO.apiurl, "User.update_role", { game_pkg: PF_INFO.pkgName, server_id: PF_INFO.selectedServer.server_id, role_id: C$99e, uid: PF_INFO.account, role_name: C$99n, role_type: C$99r, level: C$99o, evolution: C$99i });
}, window.toLevelUp = function (C$99e, C$99n, C$99o, C$99r, C$99i, C$99t, C$99a, C$99d, C$99s, C$99w) {
  PF_INFO.roleId = C$99e, PF_INFO.roleName = C$99n, PF_INFO.roleLevel = C$99o, AKSDK.logRoleUpLevel(PF_INFO.selectedServer.server_id, PF_INFO.selectedServer.server_name || PF_INFO.selectedServer.server_id, C$99e, C$99n, C$99o), sendApi(PF_INFO.apiurl, "User.update_role", { game_pkg: PF_INFO.pkgName, server_id: PF_INFO.selectedServer.server_id, role_id: C$99e, uid: PF_INFO.account, role_name: C$99n, role_type: C$99r, level: C$99o, evolution: C$99i });
}, window.toRealName = function (C$99e) {}, window.openShare = function (C$99n) {
  AKSDK.share("share", function (C$99e) {
    C$99n && C$99n(C$99e);
  });
}, window.openService = function () {
  AKSDK.openService();
}, window.microPortGuide = function () {
  AKSDK.weiduanHelper();
}, window.reqSMSCode = function (C$99e, C$99n, C$99o, C$99r, C$99i, C$99t, C$99a, C$99d) {
  C$99d = C$99d || PF_INFO.selectedServer.server_id, sendApi(PF_INFO.apiurl, "User.get_code", { phone: C$99e, role_id: C$99n, uid: PF_INFO.account, game_pkg: PF_INFO.pkgName, partner_id: PF_INFO.partnerId, server_id: C$99d }, C$99a, 2, null, function () {
    return !0;
  });
}, window.onShow = function (C$99e) {
  window.onShowCallback = C$99e, window.onShowCallback && window.onShowData && (console.info("\u5c0f\u6e38\u620f\u5207\u524d\u53f0\u4e8b\u4ef6\uff0c\u573a\u666f\u503c\uff1a" + window.onShowData.scene), window.onShowCallback(window.onShowData), window.onShowData = null);
}, window.reqPlayerAskInfo = function (C$99e, C$99n, C$99o, C$99r) {
  window.send("https://sdk.sh9130.com/game/?ct=min&ac=getInviter", { game_pkg: window.PF_INFO.pkgName, role_id: C$99n, server_id: C$99o }, C$99r);
}, window.openSubscribeMsg = function (C$99i, C$99d, C$99s) {
  wx.onTouchEnd(function onTouchEnd(C$99e) {
    var C$99t = [];var C$99n = [];var C$99a = C$99s || window.config.tmpId;for (var C$99o in C$99a) {
      var C$99r = Number(C$99o);C$99i && C$99i.length && -1 == C$99i.indexOf(C$99r) || (C$99n.push(C$99a[C$99o]), C$99t.push([C$99r, 3]));
    }0 <= window.compareVersion(window.SDKVersion, "2.4.4") ? (console.log("\u8c03\u7528\u8ba2\u9605"), AKSDK.subscribeMessage && AKSDK.subscribeMessage(C$99n, function (C$99e) {
      if (console.log("\u8ba2\u9605\u56de\u8c03\uff1a"), console.log(C$99e), C$99e && "requestSubscribeMessage:ok" == C$99e.errMsg) for (var C$99n in C$99a) if ("accept" == C$99e[C$99a[C$99n]]) {
        var C$99o = Number(C$99n);for (var C$99r = 0; C$99r < C$99t.length; C$99r++) if (C$99t[C$99r][0] == C$99o) {
          C$99t[C$99r][1] = 1;break;
        }
      }0 <= window.compareVersion(window.SDKVersion, "2.10.1") ? wx.getSetting({ withSubscriptions: !0, success: function (C$99e) {
          var C$99n = C$99e.subscriptionsSetting.itemSettings;if (C$99n) {
            for (var C$99o in console.log("\u83b7\u5f97\u8ba2\u9605\u8bbe\u7f6e\uff1a"), console.log(C$99n), C$99a) if ("accept" == C$99n[C$99a[C$99o]]) {
              var C$99r = Number(C$99o);for (var C$99i = 0; C$99i < C$99t.length; C$99i++) if (C$99t[C$99i][0] == C$99r) {
                C$99t[C$99i][1] = 2;break;
              }
            }console.log(C$99t), C$99d && C$99d(C$99t);
          } else console.log("\u83b7\u5f97\u8ba2\u9605\u8bbe\u7f6e\uff1a\u6ca1\u6709\u957f\u671f\u8ba2\u9605\u6d88\u606f"), console.log(C$99e), console.log(C$99t), C$99d && C$99d(C$99t);
        }, fail: function () {
          console.log("\u83b7\u5f97\u8ba2\u9605\u8bbe\u7f6e\uff1a\u5931\u8d25"), console.log(C$99t), C$99d && C$99d(C$99t);
        } }) : (console.log("\u7248\u672c\u8fc7\u4f4e\uff0c\u83b7\u5f97\u8ba2\u9605\u8bbe\u7f6e\uff1a\u5931\u8d25 " + window.SDKVersion), console.log(C$99t), C$99d && C$99d(C$99t));
    })) : (console.log("\u7248\u672c\u8fc7\u4f4e\uff0c\u4e0d\u652f\u6301\u8ba2\u9605 " + window.SDKVersion), console.log(C$99t), C$99d && C$99d(C$99t)), wx.offTouchEnd(onTouchEnd);
  });
}, window.batteryInfo = { isSuccess: !1, level: "100", isCharging: !1 }, window.getBatteryInfo = function (C$99o) {
  wx.getBatteryInfo({ success: function (C$99e) {
      var C$99n = window.batteryInfo;C$99n.isSuccess = !0, C$99n.level = Number(C$99e.level).toFixed(0), C$99n.isCharging = C$99e.isCharging, C$99o && C$99o(C$99n.isSuccess, C$99n.level, C$99n.isCharging);
    }, fail: function (C$99e) {
      console.log("\u8c03\u7528\u83b7\u53d6\u7535\u6c60\u4fe1\u606f\u5931\u8d25", C$99e.errMsg);C$99e = window.batteryInfo;C$99o && C$99o(C$99e.isSuccess, C$99e.level, C$99e.isCharging);
    } });
}, window.getNetworkType = function (C$99n) {
  wx.getNetworkType({ success: function (C$99e) {
      C$99n && C$99n(!0, C$99e);
    }, fail: function (C$99e) {
      C$99n && C$99n(!1, C$99e);
    } });
}, window.onNetworkStatusChange = function (C$99e) {
  C$99e && wx.onNetworkStatusChange(C$99e);
}, window.offNetworkStatusChange = function (C$99e) {
  wx.offNetworkStatusChange(C$99e);
}, window.send = function (C$99o, C$99r, C$99i, C$99t, C$99a, C$99d, C$99e, C$99n) {
  null == C$99t && (C$99t = 1), wx.request({ url: C$99o, method: C$99e || "GET", responseType: "text", data: C$99r, header: { "content-type": C$99n || "application/json" }, success: function (C$99e) {
      var C$99n;C$99e && 200 == C$99e.statusCode ? (C$99n = C$99e.data, !C$99d || C$99d(C$99n) ? C$99i && C$99i(C$99n) : window.sendFail(C$99o, C$99r, C$99i, C$99t, C$99a, C$99d, C$99e)) : window.sendFail(C$99o, C$99r, C$99i, C$99t, C$99a, C$99d, C$99e);
    }, fail: function (C$99e) {
      window.sendFail(C$99o, C$99r, C$99i, C$99t, C$99a, C$99d, C$99e);
    }, complete: function () {} });
}, window.sendFail = function (C$99e, C$99n, C$99o, C$99r, C$99i, C$99t, C$99a) {
  0 < C$99r - 1 ? setTimeout(function () {
    window.send(C$99e, C$99n, C$99o, C$99r - 1, C$99i, C$99t);
  }, 1e3) : C$99i && C$99i(JSON.stringify({ url: C$99e, response: C$99a }));
}, window.sendApi = function (C$99e, C$99n, C$99o, C$99r, C$99i, C$99l, C$99c) {
  C$99o = C$99o || {};var C$99t = Math.floor(Date.now() / 1e3);C$99o.time = C$99t, C$99o.method = C$99n;var C$99a = Object.keys(C$99o).sort();var C$99d = "";var C$99s = "";for (var C$99w = 0; C$99w < C$99a.length; C$99w++) C$99d = C$99d + (0 == C$99w ? "" : "&") + C$99a[C$99w] + C$99o[C$99a[C$99w]], C$99s = C$99s + (0 == C$99w ? "" : "&") + C$99a[C$99w] + "=" + encodeURIComponent(C$99o[C$99a[C$99w]]);C$99d += PF_INFO.apikey;C$99t = "sign=" + md5(C$99d);send(C$99e + "?" + C$99s + ("" == C$99s ? "" : "&") + C$99t, null, C$99r, C$99i, C$99l, C$99c || function (C$99e) {
    return "success" == C$99e.state;
  }, null, "application/x-www-form-urlencoded");
}, window.onRoleRecordStep = function (C$99e, C$99n) {
  var C$99o = 0;PF_INFO.selectedServer && (C$99o = PF_INFO.selectedServer.server_id), sendApi(PF_INFO.logurl, "UserLog.reportUidStep", { partnerId: PF_INFO.partnerId, gamePkg: PF_INFO.pkgName, logTime: Math.floor(Date.now() / 1e3), platformUid: PF_INFO.platform_uid, type: C$99e, serverId: C$99o }, null, 2, null, function () {
    return !0;
  });
}, window.req_server_group = function (C$99e) {
  sendApi(PF_INFO.apiurl, "Server.getServerGroup", { partner_id: PF_INFO.partnerId, uid: PF_INFO.account, version: PF_INFO.version, game_pkg: PF_INFO.pkgName, device: PF_INFO.device_id }, reqServerGroupCallBack, apiRetryAmount, onApiError);
}, window.reqServerGroupCallBack = function (C$99e) {
  C$99e && "success" === C$99e.state && C$99e.data ? (C$99e.data.unshift({ id: -2, name: "\u6700\u65b0\u670d" }), C$99e.data.unshift({ id: -1, name: "\u5df2\u6709\u89d2\u8272" }), PF_INFO.groupList = C$99e.data, window.initPanel && window.initPanel.showGroupList()) : (PF_INFO.hasGroupReq = !1, C$99e = C$99e ? C$99e.state : "", window.toErrorAlarm(7, "Server.getServerGroup fail: " + C$99e), window.loginAlert("reqServerGroupCallBack " + C$99e));
}, window.req_server_owner = function (C$99e) {
  sendApi(PF_INFO.apiurl, "Server.getServerByUid", { partner_id: PF_INFO.partnerId, uid: PF_INFO.account, version: PF_INFO.version, game_pkg: PF_INFO.pkgName, device: PF_INFO.device_id }, reqServerOwnerCallBack, apiRetryAmount, onApiError);
}, window.reqServerOwnerCallBack = function (C$99e) {
  if (PF_INFO.hasServerReq = !1, C$99e && "success" === C$99e.state && C$99e.data) {
    for (var C$99n = 0; C$99n < C$99e.data.length; C$99n++) C$99e.data[C$99n].status = get_status(C$99e.data[C$99n]);PF_INFO.serverList[-1] = window.changeServerName(C$99e.data), window.initPanel.showServerList(-1);
  } else {
    var C$99o = C$99e ? C$99e.state : "";window.toErrorAlarm(8, "Server.getServerByUid fail: " + C$99o), window.loginAlert("reqServerOwnerCallBack " + C$99o);
  }
}, window.req_server_owner_status = function (C$99e) {
  sendApi(PF_INFO.apiurl, "Server.getServerByUid", { partner_id: PF_INFO.partnerId, uid: PF_INFO.account, version: PF_INFO.version, game_pkg: PF_INFO.pkgName, device: PF_INFO.device_id }, C$99e, apiRetryAmount, onApiError);
}, window.req_server_list = function (C$99e, C$99n) {
  sendApi(PF_INFO.apiurl, "Server.getServerByGroup", { partner_id: PF_INFO.partnerId, uid: PF_INFO.account, version: PF_INFO.version, game_pkg: PF_INFO.pkgName, device: PF_INFO.device_id, server_group_id: C$99n }, reqServerListCallBack, apiRetryAmount, onApiError);
}, window.reqServerListCallBack = function (C$99e) {
  if (PF_INFO.hasServerReq = !1, C$99e && "success" === C$99e.state && C$99e.data && C$99e.data.data) {
    var C$99n = C$99e.data.server_group_id;var C$99o = [];for (var C$99r = 0; C$99r < C$99e.data.data.length; C$99r++) C$99e.data.data[C$99r].status = get_status(C$99e.data.data[C$99r]), 0 != C$99o.length && 0 == C$99e.data.data[C$99r].status || (C$99o[C$99o.length] = C$99e.data.data[C$99r]);PF_INFO.serverList[C$99n] = window.changeServerName(C$99o), window.initPanel.showServerList(C$99n);
  } else {
    C$99n = C$99e ? C$99e.state : "";window.toErrorAlarm(9, "Server.getServerByGroup fail: " + C$99n), window.loginAlert("reqServerListCallBack " + C$99n);
  }
}, window.req_recommend_server_list = function (C$99e) {
  sendApi(PF_INFO.apiurl, "Server.getRecommendServerList", { partner_id: PF_INFO.partnerId, uid: PF_INFO.account, version: PF_INFO.version, game_pkg: PF_INFO.pkgName, device: PF_INFO.device_id }, reqServerRecommendCallBack, apiRetryAmount, onApiError);
}, window.reqServerRecommendCallBack = function (C$99e) {
  if (PF_INFO.hasServerReq = !1, C$99e && "success" === C$99e.state && C$99e.data) {
    for (var C$99n = 0; C$99n < C$99e.data.length; C$99n++) C$99e.data[C$99n].status = get_status(C$99e.data[C$99n]);PF_INFO.serverList[-2] = window.changeServerName(C$99e.data), window.initPanel.showServerList(-2);
  } else {
    var C$99o = C$99e ? C$99e.state : "";window.toErrorAlarm(10, "Server.getRecommendServerList fail: " + C$99o), alert("reqServerRecommendCallBack " + C$99o);
  }
}, window.changeServerName = function (C$99e) {
  return C$99e;
}, window.req_server_notice = function (C$99e, C$99n) {
  C$99e = C$99e || PF_INFO.selectedServer.server_id, sendApi(PF_INFO.apiurl, "Common.get_anno", { type: "4", game_pkg: PF_INFO.pkgName, server_id: C$99e }, C$99n);
}, window.req_multi_server_notice = function (C$99e, C$99n, C$99o, C$99r) {
  C$99o = C$99o || PF_INFO.selectedServer.server_id, sendApi(PF_INFO.apiurl, "Common.get_new_anno", { type: C$99e, game_pkg: C$99n, server_id: C$99o }, C$99r);
}, window.req_privacy = function (C$99e, C$99n) {
  sendApi(PF_INFO.apiurl, "Common.get_option_pkg_detail", { game_pkg: C$99e }, C$99n);
}, window.get_status = function (C$99e) {
  return C$99e ? 1 == C$99e.status ? 1 == C$99e.online_status ? 2 : 1 : 0 == C$99e.status ? 0 : -1 : -1;
}, window.req_server_check_ban = function (C$99e, C$99n) {
  var C$99o;if (1 == window.youYiCofig.showSwitchOn) return C$99o = window.youYiCofig.switchContent, window.youYiCofig.showSwitchOn, void window.ServerLoading.instance.openJumpView("\u516c\u544a", C$99o, "\u8df3\u8f6c");PF_INFO.last_check_ban = { step: C$99e, server_id: C$99n };wxShowLoading({ title: "\u6b63\u5728\u9a8c\u8bc1\u89d2\u8272" }), sendApi(PF_INFO.apiurl, "User.checkInfo", { partner_id: PF_INFO.partnerId, uid: PF_INFO.account, game_pkg: PF_INFO.pkgName, server_id: C$99n, platform: PF_INFO.platform, platform_uid: PF_INFO.platform_uid, check_login_time: PF_INFO.php_signtime, check_login_sign: PF_INFO.php_sign, version_name: PF_INFO.version_name }, reqServerCheckBanCallBack, apiRetryAmount, onApiError, function (C$99e) {
    return "success" == C$99e.state || "time_err" == C$99e.info || "sign_err" == C$99e.info;
  });
}, window.reqServerCheckBanCallBack = function (C$99e) {
  var C$99n;C$99e && "success" === C$99e.state && C$99e.data ? ((C$99n = PF_INFO.selectedServer).channel_num = PF_INFO.channelNum, C$99n.sign = String(C$99e.data.login_sign), C$99n.tick = parseInt(C$99e.data.time), C$99e.data.server_num ? C$99n.server_num = parseInt(C$99e.data.server_num) : C$99n.server_num = parseInt(C$99e.data.server_id), C$99n.is_domain = 0, C$99n.cdn = PF_INFO.base_cdn, C$99n.resver = C$99e.data.cdn_version, C$99n.server_options = C$99e.data.server_options, C$99e.data.max_create && (C$99n.max_create = parseInt(C$99e.data.max_create)), console.log("server_options\uff1a" + JSON.stringify(C$99n.server_options)), 1 == PF_INFO.newRegister && C$99n.server_options && 1 == C$99n.server_options.show_btn && (PF_INFO.showGetBtn = 1, window.ServerLoading.instance.setShowBtn()), checkBanSuccess()) : 3 <= PF_INFO.last_check_ban.step ? (C$99n = C$99e ? C$99e.state : "", window.toErrorAlarm(12, "User.checkInfo fail: " + C$99n), onApiError(JSON.stringify(C$99e)), window.loginAlert("User.checkInfo failed: " + C$99n)) : sendApi(PF_INFO.apiurl, "User.login", { platform: PF_INFO.sdk_name, partner_id: PF_INFO.partnerId, token: PF_INFO.sdk_token, game_pkg: PF_INFO.pkgName, deviceId: PF_INFO.device_id, scene: "WX_" + PF_INFO.from_scene }, function (C$99e) {
    C$99e && "success" == C$99e.state ? (PF_INFO.php_sign = String(C$99e.sign), PF_INFO.php_signtime = String(C$99e.time), setTimeout(function () {
      req_server_check_ban(PF_INFO.last_check_ban.step + 1, PF_INFO.last_check_ban.server_id);
    }, 1500)) : window.loginAlert("User.login failed: " + C$99e && C$99e.state);
  }, apiRetryAmount, onApiError, function (C$99e) {
    return "success" == C$99e.state || "failed" == C$99e.state;
  });
}, window.checkBanSuccess = function () {
  ServerLoading.instance.openLoading(PF_INFO.newRegister), window.isCheckBan = !0, window.enterToGame();
}, window.initMain = function () {
  var C$99e;window.loadProbPkg && window.loadMainPkg && window.loadServerRes && window.loadLoadingRes && window.loadVersion && window.loadServer && (window.MainWX.instance || (console.log("Main \u521d\u59cb\u5316" + window.MainWX.instance), C$99e = wx.getLaunchOptionsSync().scene || 0, C$99e = { cdn: window.PF_INFO.cdn, spareCdn: window.PF_INFO.spareCdn, newRegister: window.PF_INFO.newRegister, wxPC: window.PF_INFO.wxPC, wxIOS: window.PF_INFO.wxIOS, wxAndroid: window.PF_INFO.wxAndroid, wxParam: { limitLoad: window.PF_INFO.wxLimitLoad, benchmarkLevel: window.PF_INFO.wxBenchmarkLevel, wxFrom: "txcps" == window.config.from ? 1 : 0, wxSDKVersion: window.SDKVersion }, configType: window.PF_INFO.configType, exposeType: window.PF_INFO.exposeType, scene: C$99e }, new window.MainWX(C$99e, window.PF_INFO.lastVersion, window.workerJsURL)));
}, window.enterToGame = function () {
  if (window.loadProbPkg && window.loadMainPkg && window.loadServerRes && window.loadLoadingRes && window.loadVersion && window.loadServer && window.isCheckBan && window.loadOption) {
    if (wxHideLoading(), !bEnterGame) {
      bEnterGame = !0, window.MainWX.instance || window.initMain();var C$99e = 0;var C$99n = wx.getMenuButtonBoundingClientRect();C$99n && (window.PF_INFO.wxPhone && (C$99e = C$99n.top), console.info("MenuButton  top:" + C$99n.top + ",bottom:" + C$99n.bottom + ",left:" + C$99n.left + ",right:" + C$99n.right + ",width:" + C$99n.width + ",height:" + C$99n.height));var C$99o = {};for (const C$99t in PF_INFO.selectedServer) C$99o[C$99t] = PF_INFO.selectedServer[C$99t];var C$99r = { channel: window.PF_INFO.channel, account: window.PF_INFO.account, userId: window.PF_INFO.userId, cdn: window.PF_INFO.cdn, data: window.PF_INFO.data, package: window.PF_INFO.package, newRegister: window.PF_INFO.newRegister, pkgName: window.PF_INFO.pkgName, partnerId: window.PF_INFO.partnerId, platform_uid: window.PF_INFO.platform_uid, deviceId: window.PF_INFO.device_id, selectedServer: C$99o, configType: window.PF_INFO.configType, exposeType: window.PF_INFO.exposeType, debugUsers: window.PF_INFO.debugUsers, wxMenuTop: C$99e, wxShield: window.PF_INFO.wxShield };if (window.pkgOptions) for (var C$99i in window.pkgOptions) C$99r[C$99i] = window.pkgOptions[C$99i];window.MainWX.instance.initPlatdata(C$99r), PF_INFO.selectedServer && PF_INFO.selectedServer.server_id && localStorage.setItem("LastSer_" + PF_INFO.pkgName + PF_INFO.account, PF_INFO.selectedServer.server_id);
    }
  } else console.info("\u3010\u767b\u5f55\u3011loadProbPkg:" + window.loadProbPkg + ",loadMainPkg:" + window.loadMainPkg + ",loadServerRes:" + window.loadServerRes + ",loadLoadingRes:" + window.loadLoadingRes + ",loadVersion:" + window.loadVersion + ",loadServer:" + window.loadServer + ",isCheckBan:" + window.isCheckBan + ",loadOption:" + window.loadOption);
};