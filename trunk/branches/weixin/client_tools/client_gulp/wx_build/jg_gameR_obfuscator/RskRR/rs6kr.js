var I = wx.$R;
require(I[309809]);var config = { game_id: I[309810], game_pkg: I[309811], partner_label: I[309812], partner_id: I[309813], game_ver: I[309814], platId: 1e3, gameId: 289, channelVer: I[309815], mode: 2, is_auth: !0 };window.config = config;var _rUYESF = _rUEFSY();var HOST = I[309816];var _rUYEFS = null;var _rUESFY = null;var partner_data = {};function _rUEFSY() {
  var s = {};return { order_data: {}, init: function (e, a) {
      e = e && e.game_ver ? e.game_ver : 0;console.log(I[309817]);var r = this;var t;t = wx.getStorageSync(I[309818]) ? 0 : (t = r.uuid(16, 32), wx.setStorageSync(I[309818], t), 1), wx.getStorageSync(I[309819]) || (o = r.uuid(16, 32), wx.setStorageSync(I[309819], o));var o = wx.getLaunchOptionsSync();var n = o.scene || "";t && o.query && o.query.ad_code && wx.setStorageSync(I[309820], o.query.ad_code), r.log(I[280285], { install: t, scene: n });ddtSDKPlat.init({ platId: config.platId, gameId: config.gameId, channelVer: config.channelVer, mode: config.mode }, function (e, a) {
        switch (e) {case I[309821]:
            console.log(I[309822], e, a);break;case I[309823]:
            console.log(I[309824], e, a);break;case I[309825]:
            console.log(I[309826], e, a), r.do_login(a);break;case I[309827]:
            console.log(I[309828], e, a), s.login && s.login(1, { errMsg: a.msg });break;case I[309829]:
            console.log(I[309830], e, a);break;case I[309831]:
            console.log(I[309832], e, a), s.pay && s.pay(1, { errMsg: a.errMsg });}
      }, !0), wx.showShareMenu({ withShareTicket: !0 }), console.log(I[309833] + ddtSDKPlat.version);var i = o.query && o.query.invite ? o.query.invite : "";o = o.query && o.query.invite_type ? o.query.invite_type : "";i && (_rUESFY = { invite: i, invite_type: o, is_new: t, scene: n }), e && this.checkGameVersion(e, function (e) {
        a && a(e);
      });
    }, login: function (e, a) {
      console.log(I[309834]), s.login = I[309093] == typeof a ? a : null;
    }, do_login: function (e) {
      var r = this;partner_data = { uid: e.uid, gameToken: e.gameToken, time: e.time, sign: e.sign };var a = r.getPublicData();if (a.is_from_min = 1, a.partner_data = JSON.stringify(partner_data), _rUESFY && I[280280] == typeof _rUESFY) for (var t in _rUESFY) a[t] = _rUESFY[t];wx.request({ url: I[305502] + HOST + I[309835], method: I[308626], dataType: I[285856], header: { "content-type": I[308750] }, data: a, success: function (e) {
          if (console.log(I[309836]), console.log(e), 200 === e.statusCode) {
            e = e.data;if (e.state) {
              try {
                wx.setStorageSync(I[309837], e.data.sdk_token), wx.setStorageSync(I[309838], e.data.user_id), wx.setStorageSync(I[309839], e.data.username), e.data.ext && wx.setStorageSync(I[309840], e.data.ext);
              } catch (e) {}var a = { userid: e.data.user_id, account: e.data.nick_name, token: e.data.token, invite_uid: e.data.invite_uid || "", invite_nickname: e.data.invite_nickname || "", invite_head_img: e.data.invite_head_img || "", head_img: e.data.head_img || "", is_client: e.data.is_client || "0", ios_pay: e.data.ios_pay || "0" };s.login && s.login(0, a);
            } else s.login && s.login(1, { errMsg: e.msg });r.getShareInfo(I[309841], function (e) {
              console.log(I[309842]), wx.onShareAppMessage(function () {
                return r.logStartShare(I[309841]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else s.login && s.login(1, { errMsg: I[309843] });
        } });
    }, share: function (e) {
      s.share = I[309093] == typeof callback ? callback : null;var a = e.type || I[308719];console.log(I[309844] + a);var r = this;this.getShareInfo(a, function (e) {
        r.logStartShare(a), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var a = wx.getStorageSync(I[309837]);wx.request({ url: I[305502] + HOST + I[309845], method: I[308626], dataType: I[285856], header: { "content-type": I[308750] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: a, server_id: _rUYEFS ? _rUYEFS.server_id : "", role_id: _rUYEFS ? _rUYEFS.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, r) {
      console.log(I[309846]);wx.getStorageSync(I[309837]);wx.request({ url: I[305502] + HOST + I[309847], method: I[308626], dataType: I[285856], header: { "content-type": I[308750] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var a;console.log(I[309848]), console.log(e), 200 == e.statusCode && (a = e.data).state ? r && r(a.data) : r && r({ develop: 0 });
        } });
    }, getShareInfo: function (e, a) {
      console.log(I[309849]);var r = wx.getStorageSync(I[309837]);wx.request({ url: I[305502] + HOST + I[309850], method: I[308626], dataType: I[285856], header: { "content-type": I[308750] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: _rUYEFS ? _rUYEFS.server_id : "", role_id: _rUYEFS ? _rUYEFS.role_id : "", no_log: 1 }, success: function (e) {
          console.log(I[309851]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? a && a(e.data) : s.share && s.share(1, { errMsg: I[309852] + e.msg }) : s.share && s.share(1, { errMsg: I[309853] });
        } });
    }, updateShare: function (e, a, r, t, o, n) {
      console.log(I[309854]);var i = wx.getStorageSync(I[309837]);wx.request({ url: I[305502] + HOST + I[309855], method: I[308626], dataType: I[285856], header: { "content-type": I[308750] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: a, is_new: r, role_id: t, sever_id: o, scene: n }, success: function (e) {
          console.log(I[309856]), console.log(e);
        } });
    }, msgCheck: function (e, a) {
      console.log(I[309857]);var r = wx.getStorageSync(I[309837]);wx.request({ url: I[305502] + HOST + I[309858] + config.partner_id + "/" + config.game_pkg, method: I[308626], dataType: I[285856], header: { "content-type": I[308750] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, content: e, gameToken: partner_data.gameToken, uid: partner_data.uid, channelVer: config.channelVer, gameId: config.gameId, platId: config.platId }, success: function (e) {
          console.log(I[309859]), console.log(e), a && a(e);
        } });
    }, pay: function (e, a) {
      this.startPay(e, a);
    }, startPay: function (e, a) {
      console.log(I[309860]), console.log(e);var r = this;s.pay = I[309093] == typeof a ? a : null;a = wx.getStorageSync(I[309837]);var t = wx.getStorageSync(I[309840]);var o;a || t ? (o = wx.getSystemInfoSync(), e = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: a, session_key: t, platform: o.platform }, r.order_data = e, (a = r.getPublicData()).order_data = JSON.stringify(e), a.is_from_min = 1, wx.request({ url: I[305502] + HOST + I[309861], method: I[308626], dataType: I[285856], header: { "content-type": I[308750] }, data: a, success: function (e) {
          var a;console.log(I[309862]), console.log(e), 200 == e.statusCode ? "" == (e = e.data).data.ext ? e.state && e.data.pay_data && "" == e.data.ext ? (console.log(I[309863] + JSON.stringify(e.data.pay_data)), a = { billNo: e.data.pay_data.billNo, amount: e.data.pay_data.amount, serverId: e.data.pay_data.serverId, roleId: e.data.pay_data.roleId, roleName: e.data.pay_data.roleName, roleLevel: e.data.pay_data.roleLevel, subject: e.data.pay_data.subject, productDesc: e.data.pay_data.productDesc, extraInfo: e.data.pay_data.extraInfo }, ddtSDKPlat.pay(a)) : r.extDo({ ext1: e.data.ext, ext2: e.data.pay_data }) : s.pay && s.pay(1, { errMsg: e.errMsg }) : s.login && s.login(1, { errMsg: I[309843] });
        } })) : s.pay && s.pay(1, { errMsg: I[309864] });
    }, extDo: function (e) {
      wx.navigateToMiniProgram({ appId: e.ext1, path: I[309865] + e.ext2.extraInfo + I[309866] + e.ext2.amount, extraData: {}, envVersion: I[309867], success(e) {} });
    }, logCreateRole: function (e) {
      var a = wx.getStorageSync(I[309838]);var r = wx.getStorageSync(I[309839]);var t = {};t.user_id = a, t.user_name = r, t.role_id = e.roleid, t.role_lev = e.rolelevel, t.role_name = e.rolename, t.server_id = e.serverid, e.roleid && e.serverid && (_rUYEFS = { role_id: e.roleid, server_id: e.serverid }), this.log(I[280006], t);a = { roleLevel: e.rolelevel + "", roleId: e.roleid + "", roleName: e.rolename, serverName: e.servername, serverId: e.serverid + "" };ddtSDKPlat.submitData(I[287854], a);
    }, logEnterGame: function (e, a) {
      var r = wx.getStorageSync(I[309838]);var t = wx.getStorageSync(I[309839]);var o = {};o.user_id = r, o.user_name = t, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && (_rUYEFS = { role_id: e.roleid, server_id: e.serverid }), this.log(I[285738], o);r = { roleLevel: e.rolelevel, roleId: e.roleid, roleName: e.rolename, serverName: e.servername, serverId: e.serverid };ddtSDKPlat.submitData(I[291948], r), _rUESFY && this.updateShare(_rUESFY.invite, _rUESFY.invite_type, _rUESFY.is_new, e.roleid, e.serverid, _rUESFY.scene);
    }, logRoleUpLevel: function (e, a) {
      var r = wx.getStorageSync(I[309838]);var t = wx.getStorageSync(I[309839]);this.log(I[309868], e);var o = {};o.user_id = r, o.user_name = t, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && (_rUYEFS = { role_id: e.roleid, server_id: e.serverid, role_level: e.rolelevel, role_createtime: e.rolecreatetime });r = { roleLevel: e.rolelevel, roleId: e.roleid, roleName: e.rolename, serverName: e.servername, serverId: e.serverid, rolecreatetime: e.rolecreatetime, vipLevel: "", power: "", roleSex: "", partyId: "", partyName: "" };ddtSDKPlat.submitData(I[309869], r);
    }, subscribeMessage: function (e, a) {
      console.log(I[309870] + e), s.subscribeMessage = I[309093] == typeof a ? a : null, wx.requestSubscribeMessage({ tmplIds: e, success(e) {
          console.log(I[309871]), console.log(e), s.subscribeMessage && s.subscribeMessage(e);
        }, fail(e) {
          console.log(I[309872]), console.log(e), s.subscribeMessage && s.subscribeMessage(e);
        } });
    }, weiduanHelper: function () {
      console.log(I[309873]), ddtSDKPlat.jump();
    }, uuid: function (e, a) {
      var r = I[309874].split("");var t,
          o = [];var n;if (e = e || r.length, a) for (t = 0; t < a; t++) o[t] = r[0 | Math.random() * e];else for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", t = 0; t < 36; t++) o[t] || (n = 0 | 16 * Math.random(), o[t] = r[19 == t ? 3 & n | 8 : n]);return o.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var a = wx.getStorageSync(I[309818]);var r = wx.getStorageSync(I[309819]);var t = wx.getStorageSync(I[309820]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: t, uuid: a, idfv: r, dname: e.model, mac: I[309875], net_type: 0 == e.wifiSignal ? "4G" : I[309876], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: I[308545] == e.platform ? 1 : 2 };
    }, log: function (e, a) {
      var r = this.getPublicData();for (var t in a) r[t] = a[t];console.log(I[309877] + e), console.log(r), wx.request({ url: I[305502] + HOST + I[309878] + e + I[309879] + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    } };
}function run(e, a, r) {
  e in _rUYESF && _rUYESF[e](a, r);
}exports.init = function (e, a) {
  run(I[280366], e, a);
}, exports.login = function (e) {
  run(I[308654], "", e);
}, exports.pay = function (e, a) {
  run(I[308709], e, a);
}, exports.openService = function () {
  run(I[304956]);
}, exports.logCreateRole = function (e, a, r, t, o) {
  run(I[308716], { serverid: e, servername: a, roleid: r, rolename: t, rolelevel: o });
}, exports.logEnterGame = function (e, a, r, t, o, n, i) {
  run(I[308717], { serverid: e, servername: a, roleid: r, rolename: t, rolelevel: o, rolecreatetime: n }, i);
}, exports.logRoleUpLevel = function (e, a, r, t, o, n, i) {
  run(I[308718], { serverid: e, servername: a, roleid: r, rolename: t, rolelevel: o, rolecreatetime: n }, i);
}, exports.share = function (e) {
  run(I[308719], { type: e });
}, exports.subscribeMessage = function (e, a) {
  run(I[308728], e, a);
}, exports.msgCheck = function (e, a) {
  run(I[292184], e, a);
}, exports.downloadClient = function () {
  run(I[309880]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(I[309881]);
}, exports.weiduanHelper = function () {
  run(I[303567]);
};