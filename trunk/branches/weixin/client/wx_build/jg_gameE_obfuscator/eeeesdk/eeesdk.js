var b = wx.$e;
import SDKyyw from "./eeehelp";var config = { game_id: b[56040], game_pkg: b[56041], partner_id: b[56042], game_ver: b[56043], is_auth: !1, from: null, tmpId: {} };window.config = config;var partner_config = { app_id: 1000207, app_key: b[56044] };var E$VNDGM = E$VDGNM();var HOST = b[56045];var E$VDMGN = null;var E$VDMNG = null;var E$VDGMN = null;var partner_user_info = null;function E$VDGNM() {
  var n = {};return { order_data: {}, init: function (e, t) {
      var r = e && e.game_ver ? e.game_ver : 0;console.log(b[56046]);var a = this;var n;n = (o = wx.getStorageSync(b[56047])) ? 0 : (o = a.uuid(16, 32), wx.setStorageSync(b[56047], o), 1), (e = wx.getStorageSync(b[56048])) || (e = a.uuid(16, 32), wx.setStorageSync(b[56048], e));var o = wx.getLaunchOptionsSync();e = o.scene || "";n && o.query && o.query.ad_code && wx.setStorageSync(b[56049], o.query.ad_code), a.log(b[30267], { install: n, scene: e }), wx.showShareMenu();a = o.query && o.query.invite ? o.query.invite : "";o = o.query && o.query.invite_type ? o.query.invite_type : "";a && (E$VDMNG = { invite: a, invite_type: o, is_new: n, scene: e }), r && this.checkGameVersion(r, function (e) {
        t && t(e);
      });
    }, login: function (e, t) {
      console.log(b[56050]);var r = this;n.login = b[55784] == typeof t ? t : null, SDKyyw.initLoginCallback = e => {
        if (console.log(b[56051] + JSON.stringify(e)), 0 == e.status) return console.log(b[56052]), void t(1, { errMsg: b[56053] });partner_user_info = e.data, r.do_login(partner_user_info);
      }, SDKyyw.init(partner_config.app_id, partner_config.app_key);
    }, do_login: function (e) {
      var r = this;var t = r.getPublicData();if (t.nick_name = e ? e.nick_name : "", t.head_img = e ? e.head_img : "", E$VDMNG && b[30262] == typeof E$VDMNG) for (var a in E$VDMNG) t[a] = E$VDMNG[a];t.partner_uid = e.uid, wx.request({ url: b[56054] + HOST + b[56055], method: b[56056], dataType: b[35020], header: { "content-type": b[55980] }, data: t, success: function (e) {
          if (console.log(b[56057] + JSON.stringify(e)), 200 == e.statusCode) {
            var t = e.data;if (t.state) {
              e = { userid: t.data.user_id, account: t.data.nick_name, token: t.data.token, invite_uid: t.data.invite_uid || "", invite_nickname: t.data.invite_nickname || "", invite_head_img: t.data.invite_head_img || "", head_img: t.data.head_img || "", is_client: t.data.is_client || "0", ios_pay: t.data.ios_pay || "0" };try {
                wx.setStorageSync(b[56058], t.data.sdk_token), wx.setStorageSync(b[56059], t.data.user_id), wx.setStorageSync(b[56060], t.data.username), t.data.ext && wx.setStorageSync(b[56061], t.data.ext);
              } catch (e) {}n.login && n.login(0, e);
            } else n.login && n.login(1, { errMsg: t.msg });r.getShareInfo(b[56062], function (e) {
              console.log(b[56063]), wx.onShareAppMessage(function () {
                return r.logStartShare(b[56062]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else n.login && n.login(1, { errMsg: b[56064] });
        } });
    }, share: function (e) {
      n.share = b[55784] == typeof callback ? callback : null;var t = e.type || b[56030];console.log(b[56065] + t);var r = this;this.getShareInfo(t, function (e) {
        r.logStartShare(t), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var t = wx.getStorageSync(b[56058]);wx.request({ url: b[56054] + HOST + b[56066], method: b[56056], dataType: b[35020], header: { "content-type": b[55980] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, server_id: E$VDMGN ? E$VDMGN.server_id : "", role_id: E$VDMGN ? E$VDMGN.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, r) {
      console.log(b[56067]);wx.getStorageSync(b[56058]);wx.request({ url: b[56054] + HOST + b[56068], method: b[56056], dataType: b[35020], header: { "content-type": b[55980] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var t;console.log(b[56069]), console.log(e), 200 == e.statusCode && (t = e.data).state ? r && r(t.data) : r && r({ develop: 0 });
        } });
    }, getShareInfo: function (e, t) {
      console.log(b[56070]);var r = wx.getStorageSync(b[56058]);wx.request({ url: b[56054] + HOST + b[56071], method: b[56056], dataType: b[35020], header: { "content-type": b[55980] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: E$VDMGN ? E$VDMGN.server_id : "", role_id: E$VDMGN ? E$VDMGN.role_id : "", no_log: 1 }, success: function (e) {
          console.log(b[56072]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? t && t(e.data) : n.share && n.share(1, { errMsg: b[56073] + e.msg }) : n.share && n.share(1, { errMsg: b[56074] });
        } });
    }, updateShare: function (e, t, r, a, n, o) {
      console.log(b[56075]);var i = wx.getStorageSync(b[56058]);wx.request({ url: b[56054] + HOST + b[56076], method: b[56056], dataType: b[35020], header: { "content-type": b[55980] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: t, is_new: r, role_id: a, sever_id: n, scene: o }, success: function (e) {
          console.log(b[56077]), console.log(e);
        } });
    }, pay: function (e, t) {
      var r = this;wx.checkSession({ success: function () {
          r.startPay(e, t);
        }, fail: function () {
          console.log(b[56078]), r.login({}, function () {
            r.startPay(e, t);
          });
        } });
    }, startPay: function (e, t) {
      console.log(b[56079]), console.log(e);n.pay = b[55784] == typeof t ? t : null;var r = wx.getStorageSync(b[56058]);var a = wx.getStorageSync(b[56061]);r || a ? (t = wx.getSystemInfoSync(), a = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, session_key: a, platform: t.platform }, this.order_data = a, (t = this.getPublicData()).order_data = JSON.stringify(a), wx.request({ url: b[56054] + HOST + b[56080], method: b[56056], dataType: b[35020], header: { "content-type": b[55980] }, data: t, success: function (t) {
          if (console.log(b[56081] + JSON.stringify(t)), 200 == t.statusCode) {
            t = t.data;if (t.state) {
              SDKyyw.onPayCallback = e => {};let e = {};e.serverId = t.data.pay_data.serverId, e.serverName = t.data.pay_data.serverName, e.roleId = t.data.pay_data.roleId, e.roleName = t.data.pay_data.roleName, e.roleLevel = t.data.pay_data.roleLevel, e.gameOrderid = t.data.pay_data.orderId, e.pext = t.data.pay_data.orderId, e.money = t.data.pay_data.amount, e.productName = t.data.pay_data.productName, e.productId = t.data.pay_data.productId, console.log(b[56082] + JSON.stringify(e)), SDKyyw.pay(e);
            } else n.pay && n.pay(1, { errMsg: t.msg });
          } else n.login && n.login(1, { errMsg: b[56064] });
        } })) : n.pay && n.pay(1, { errMsg: b[56083] });
    }, logCreateRole: function (e) {
      var t = wx.getStorageSync(b[56059]);var r = wx.getStorageSync(b[56060]);var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (E$VDMGN = { role_id: e.roleid, server_id: e.serverid }), this.log(b[30006], a);let n = {};n.type = 2, n.roleId = e.roleid, n.roleName = e.rolename, SDKyyw.pushData(n);
    }, logEnterGame: function (e) {
      var t = wx.getStorageSync(b[56059]);var r = wx.getStorageSync(b[56060]);var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (E$VDMGN = { role_id: e.roleid, server_id: e.serverid }), this.log(b[34927], a), E$VDMNG && this.updateShare(E$VDMNG.invite, E$VDMNG.invite_type, E$VDMNG.is_new, e.roleid, e.serverid, E$VDMNG.scene);let n = {};n.type = 1, n.roleId = e.roleid, n.roleName = e.rolename, SDKyyw.pushData(n);let o = {};o.type = 5, o.roleId = e.roleid, o.roleName = e.rolename, SDKyyw.pushData(o);
    }, logRoleUpLevel: function (e) {
      var t = wx.getStorageSync(b[56059]);var r = wx.getStorageSync(b[56060]);var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (E$VDMGN = { role_id: e.roleid, server_id: e.serverid }), this.log(b[56084], a);
    }, uuid: function (e, t) {
      var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var a,
          n = [];var o;if (e = e || r.length, t) for (a = 0; a < t; a++) n[a] = r[0 | Math.random() * e];else for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", a = 0; a < 36; a++) n[a] || (o = 0 | 16 * Math.random(), n[a] = r[19 == a ? 3 & o | 8 : o]);return n.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var t = wx.getStorageSync(b[56047]);var r = wx.getStorageSync(b[56048]);var a = wx.getStorageSync(b[56049]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, is_from_min: 1, ad_code: a, uuid: t, idfv: r, dname: e.model, mac: b[56085], net_type: 0 == e.wifiSignal ? "4G" : b[56086], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: b[55874] == e.platform ? 1 : 2 };
    }, log: function (e, t) {
      var r = this.getPublicData();for (var a in t) r[a] = t[a];console.log(b[56087] + e), console.log(r), wx.request({ url: b[56054] + HOST + b[56088] + e + b[56089] + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, getLaunchOptionsSync: function (e) {
      var t = SDKyyw.getLaunchOptionsSync();e(t), console.log(b[56090] + JSON.stringify(t));
    }, msgCheck: function (e, r) {
      SDKyyw.msgSecCheck(e, function (e) {
        console.log(b[56091] + JSON.stringify(e));let t = { data: {} };0 == e.errcode ? (t.statusCode = 200, t.data.state = 1) : (t.statusCode = 0, t.data.state = 0), r && r(t);
      });
    } };
}function run(e, t, r) {
  e in E$VNDGM && E$VNDGM[e](t, r);
}exports.init = function (e, t) {
  run(b[30338], e, t);
}, exports.login = function (e) {
  run(b[55954], "", e);
}, exports.login = function (e) {
  run(b[55954], "", e);
}, exports.pay = function (e, t) {
  run(b[56092], e, t);
}, exports.openService = function () {
  run(b[52290]);
}, exports.logCreateRole = function (e, t, r, a, n) {
  run(b[56093], { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n });
}, exports.logEnterGame = function (e, t, r, a, n) {
  run("logEnterGame", { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n });
}, exports.logRoleUpLevel = function (e, t, r, a, n) {
  run(b[56094], { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n });
}, exports.share = function (e) {
  run(b[56030], { type: e });
}, exports.downloadClient = function () {
  run(b[56095]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getLaunchOptionsSync = function (e) {
  run(b[56096], e);
}, exports.msgCheck = function (e, t) {
  run(b[40500], e, t);
};