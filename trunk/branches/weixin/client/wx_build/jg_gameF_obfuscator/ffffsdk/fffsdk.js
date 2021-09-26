var k = wx.$f;
import Sygame from "./fffhelp";window.Sygame = Sygame;var config = { game_id: "88", game_pkg: "tjqy_tjqygjhol_FW", partner_label: k[26094], partner_id: k[26095], game_ver: k[26096], is_auth: !1 };window.config = config;var F$UB21L = F$U21BL();var HOST = k[26097];var F$U2L1B = null;var F$U2LB1 = null;var partner_user_data = {};var user_invite_by_activity = null;function F$U21BL() {
  var n = {};return { order_data: {}, init: function (e, t) {
      var r = e && e.game_ver ? e.game_ver : 0;console.log(k[26098]);var a = this;var n;n = (i = wx.getStorageSync(k[26099])) ? 0 : (i = a.uuid(16, 32), wx.setStorageSync(k[26099], i), 1), (s = wx.getStorageSync(k[26100])) || (s = a.uuid(16, 32), wx.setStorageSync(k[26100], s));var o = wx.getLaunchOptionsSync();e = o.scene || "";n && o.query && o.query.ad_code && wx.setStorageSync(k[26101], o.query.ad_code), a.log(k[277], { install: n, scene: e }), Sygame.init(o);var i = o.query && o.query.invite ? o.query.invite : "";var s = o.query && o.query.invite_type ? o.query.invite_type : "";a = o.query && o.query.cp_activity_id ? o.query.cp_activity_id : "";a || (s = (a = o.query && o.query.shareMessageToFriendScene ? o.query.shareMessageToFriendScene : "") ? k[26102] : ""), a && (user_invite_by_activity = { invite: i, invite_type: s, is_new: n, scene: e, cp_activity_id: a }), i && (F$U2LB1 = { invite: i, invite_type: s, is_new: n, scene: e }), r && this.checkGameVersion(r, function (e) {
        t && t(e);
      });
    }, login: function (e, t) {
      var r = this;console.log(k[26103]), n.login = k[25936] == typeof t ? t : null, Sygame.syLogin().then(e => {
        console.log(k[26104], e), 1001 === e.code ? (partner_user_data = e, r.do_login(partner_user_data)) : n.login && n.login(1, { errMsg: e.message });
      });
    }, do_login: function (e) {
      var r = this;var t = r.getPublicData();if (t.partner_user_info = JSON.stringify(e), F$U2LB1 && k[272] == typeof F$U2LB1) for (var a in F$U2LB1) t[a] = F$U2LB1[a];wx.request({ url: k[26105] + HOST + k[26106], method: k[26041], dataType: k[5190], header: { "content-type": k[26107] }, data: t, success: function (e) {
          if (console.log(k[26108], e), 200 === e.statusCode) {
            var t = e.data;if (t.state) {
              partner_user_data.openid = t.data.ext;try {
                wx.setStorageSync(k[26109], t.data.sdk_token), wx.setStorageSync(k[26110], t.data.user_id), wx.setStorageSync(k[26111], t.data.username), t.data.ext && wx.setStorageSync(k[26112], t.data.ext);
              } catch (e) {}e = { userid: t.data.user_id, account: t.data.nick_name, token: t.data.token, invite_uid: t.data.invite_uid || "", invite_nickname: t.data.invite_nickname || "", invite_head_img: t.data.invite_head_img || "", head_img: t.data.head_img || "", is_client: t.data.is_client || "0", ios_pay: t.data.ios_pay || "0" };n.login && n.login(0, e);
            } else n.login && n.login(1, { errMsg: t.msg });r.getShareInfo(k[26113], function (e) {
              console.log(k[26114]), wx.onShareAppMessage(function () {
                return r.logStartShare(k[26113]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else n.login && n.login(1, { errMsg: k[26115] });
        } });
    }, share: function (e) {
      n.share = k[25936] == typeof callback ? callback : null;var t = e.type || k[26116];var r = e.cp_activity_id || "";console.log(k[26117] + t);var a = this;this.getShareInfo(t, function (e) {
        "" != r && "" != e.query && (e.query = e.query + k[26118] + r), a.logStartShare(t), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var t = wx.getStorageSync(k[26109]);wx.request({ url: k[26105] + HOST + k[26119], method: k[26041], dataType: k[5190], header: { "content-type": k[26107] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: t, server_id: F$U2L1B ? F$U2L1B.server_id : "", role_id: F$U2L1B ? F$U2L1B.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, r) {
      console.log(k[26120]);wx.getStorageSync(k[26109]);wx.request({ url: k[26105] + HOST + k[26121], method: k[26041], dataType: k[5190], header: { "content-type": k[26107] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var t;console.log(k[26122]), console.log(e), 200 == e.statusCode && (t = e.data).state ? r && r(t.data) : r && r({ develop: 0 });
        } });
    }, getShareInfo: function (e, t) {
      console.log(k[26123]);var r = wx.getStorageSync(k[26109]);wx.request({ url: k[26105] + HOST + k[26124], method: k[26041], dataType: k[5190], header: { "content-type": k[26107] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: F$U2L1B ? F$U2L1B.server_id : "", role_id: F$U2L1B ? F$U2L1B.role_id : "", no_log: 1 }, success: function (e) {
          console.log(k[26125]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? t && t(e.data) : n.share && n.share(1, { errMsg: k[26126] + e.msg }) : n.share && n.share(1, { errMsg: k[26127] });
        } });
    }, updateShare: function (e, t, r, a, n, o) {
      console.log(k[26128]);var i = wx.getStorageSync(k[26109]);wx.request({ url: k[26105] + HOST + k[26129], method: k[26041], dataType: k[5190], header: { "content-type": k[26107] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: t, is_new: r, role_id: a, sever_id: n, scene: o }, success: function (e) {
          console.log(k[26130]), console.log(e);
        } });
    }, msgCheck: function (e, t) {
      console.log(k[26131]);var r = wx.getStorageSync(k[26109]);wx.request({ url: k[26105] + HOST + k[26132] + config.partner_id + "/" + config.game_pkg, method: k[26041], dataType: k[5190], header: { "content-type": k[26107] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, content: e }, success: function (e) {
          console.log(k[26133]), console.log(e), t && t(e);
        } });
    }, pay: function (e, t) {
      this.startPay(e, t);
    }, startPay: function (e, t) {
      console.log(k[26134], e);n.pay = k[25936] == typeof t ? t : null;var r = wx.getStorageSync(k[26109]);var a = wx.getStorageSync(k[26112]);r || a ? (t = wx.getSystemInfoSync(), a = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, session_key: a, platform: t.platform }, this.order_data = a, (t = this.getPublicData()).order_data = JSON.stringify(a), wx.request({ url: k[26105] + HOST + k[26135], method: k[26041], dataType: k[5190], header: { "content-type": k[26107] }, data: t, success: function (e) {
          var t;console.log(k[26136], e), 200 === e.statusCode ? (t = e.data).state && t.data.pay_data ? (console.log(k[26137] + JSON.stringify(t.data.pay_data)), e = { product_name: t.data.pay_data.productName, product_id: t.data.pay_data.productId, order_id: t.data.pay_data.orderId, product_price: t.data.pay_data.amount, extends_param1: t.data.pay_data.orderId, extends_param2: t.data.pay_data.orderId, role_id: t.data.pay_data.roleId, role_name: t.data.pay_data.roleName, role_level: t.data.pay_data.roleLevel, server_id: t.data.pay_data.serverId, server_name: t.data.pay_data.serverName, role_vip: 0 }, Sygame.syPay(e).then(e => {
            console.log(k[26138], e);
          })) : n.pay && n.pay(1, { errMsg: t.errMsg }) : n.login && n.login(1, { errMsg: k[26115] });
        } })) : n.pay && n.pay(1, { errMsg: k[26139] });
    }, logCreateRole: function (e) {
      var t = wx.getStorageSync(k[26110]);var r = wx.getStorageSync(k[26111]);var a = {};var n, o, i;a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (F$U2L1B = { role_id: e.roleid, server_id: e.serverid }), this.log(k[6], a), user_invite_by_activity && (n = user_invite_by_activity.scene, o = user_invite_by_activity.is_new, i = user_invite_by_activity.invite, r = user_invite_by_activity && user_invite_by_activity.invite_type ? user_invite_by_activity.invite_type : "", a = user_invite_by_activity.cp_activity_id, a = { uid: t, role_id: e.roleid, role_name: e.rolename, server_id: e.serverid, server_name: e.servername, game_id: config.game_id, partner_id: config.partner_id, game_pkg: config.game_pkg, scene: n, is_new: o, invite_code: i, invite_type: r, cp_activity_id: a }, wx.request({ url: k[26105] + HOST + k[26140], method: k[26041], dataType: k[5190], header: { "content-type": k[26107] }, data: a, success: function (e) {
          console.log(k[26141] + JSON.stringify(e));
        } })), this.upRoleInfo(k[26142], e);
    }, logEnterGame: function (e) {
      var t = wx.getStorageSync(k[26110]);var r = wx.getStorageSync(k[26111]);var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (F$U2L1B = { role_id: e.roleid, server_id: e.serverid }), this.log(k[5087], a), this.upRoleInfo(k[26143], e), F$U2LB1 && this.updateShare(F$U2LB1.invite, F$U2LB1.invite_type, F$U2LB1.is_new, e.roleid, e.serverid, F$U2LB1.scene);
    }, logRoleUpLevel: function (e) {
      var t = wx.getStorageSync(k[26110]);var r = wx.getStorageSync(k[26111]);var a = {};a.user_id = t, a.user_name = r, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (F$U2L1B = { role_id: e.roleid, server_id: e.serverid }), this.log(k[26144], a);
    }, upRoleInfo: function (e, t) {
      t = { report_type: e, role_id: t.roleid, role_name: t.rolename, role_level: t.rolelevel, server_id: t.serverid, server_name: t.servername, role_power: t.rolepower || 0, role_vip: 0 };Sygame.syReportRoleInfo(t).then(e => {
        console.log(k[26145], e);
      });
    }, shareConfig: function (e) {
      e && e({ code: 1, msg: k[23283], data: { is_push: !0 } });
    }, shareRecommend: function (n) {
      Sygame.syGetBoxList({ page: 0, count: 15 }).then(e => {
        let t = {};if (1001 == e.data.status) {
          t.code = 1, t.msg = e.data.info;var r = Array();var a = e.data.data;if (t.data = {}, 0 < a.length) {
            for (let e = 0; e < a.length; ++e) r[e] = Object(), r[e].jump_path = a[e].jump_path, r[e].panel = e + 1, r[e].pic = a[e].icon, r[e].to_appid = a[e].jump_appid, r[e].to_game_name = a[e].title, r[e].jump_type = a[e].jump_type, r[e].preview_img = a[e].preview_img, r[e].game_id = a[e].game_id, r[e].tunnel_id = a[e].tunnel_id;t.data = r;
          }
        } else t.code = e.data.status, t.msg = e.data.info, t.data = e.data.data || {};console.log(k[26146] + JSON.stringify(t)), n && n(t);
      });
    }, openBox: function (t) {
      Sygame.syClickOpenBox().then(e => {
        console.log(k[26147], e), t && t(e);
      });
    }, clickBoxGame: function (e) {
      e = { game_id: e.game_id, tunnel_id: e.tunnel_id, jump_appid: e.jump_appid, jump_path: e.jump_path };Sygame.syClickBox(e).then(e => {
        console.log(k[26148], e);
      });
    }, uuid: function (e, t) {
      var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var a,
          n = [];var o;if (e = e || r.length, t) for (a = 0; a < t; a++) n[a] = r[0 | Math.random() * e];else for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", a = 0; a < 36; a++) n[a] || (o = 0 | 16 * Math.random(), n[a] = r[19 == a ? 3 & o | 8 : o]);return n.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var t = wx.getStorageSync(k[26099]);var r = wx.getStorageSync(k[26100]);var a = wx.getStorageSync(k[26101]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: a, is_from_min: 1, uuid: t, idfv: r, dname: e.model, mac: k[26149], net_type: 0 == e.wifiSignal ? "4G" : "WIFI", os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: k[26074] == e.platform ? 1 : 2 };
    }, log: function (e, t) {
      var r = this.getPublicData();for (var a in t) r[a] = t[a];console.log(k[26150] + e), console.log(r), wx.request({ url: k[26105] + HOST + k[26151] + e + k[26152] + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, setMessageToFriendQuery: function (e, t) {
      e = e.activity_id;e = wx.setMessageToFriendQuery({ shareMessageToFriendScene: e });t && t(e);
    }, getFriendShareInfo: function (t) {
      this.getShareInfo(k[26102], function (e) {
        t && t({ title: e.title, img: e.img });
      });
    } };
}function run(e, t, r) {
  e in F$UB21L && F$UB21L[e](t, r);
}exports.init = function (e, t) {
  run(k[356], e, t);
}, exports.login = function (e) {
  run(k[26153], "", e);
}, exports.pay = function (e, t) {
  run(k[26154], e, t);
}, exports.openService = function () {
  run(k[22283]);
}, exports.logCreateRole = function (e, t, r, a, n) {
  run(k[26155], { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n });
}, exports.logEnterGame = function (e, t, r, a, n, o, i) {
  run(k[26156], { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n, rolecreatetime: o, rolepower: i && i.rolepower ? i.rolepower : 0 });
}, exports.logRoleUpLevel = function (e, t, r, a, n, o, i) {
  run(k[26157], { serverid: e, servername: t, roleid: r, rolename: a, rolelevel: n, rolecreatetime: o, rolepower: i && i.rolepower ? i.rolepower : 0 });
}, exports.share = function (e, t) {
  run(k[26116], { type: e, cp_activity_id: t && t.activity_id ? t.activity_id : "" });
}, exports.msgCheck = function (e, t) {
  run(k[10578], e, t);
}, exports.shareConfig = function (e) {
  run(k[26158], e);
}, exports.shareRecommend = function (e) {
  run(k[26159], e);
}, exports.openBox = function (e) {
  run(k[4593], e);
}, exports.clickBoxGame = function (e) {
  run(k[26160], e);
}, exports.downloadClient = function () {
  run(k[26161]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(k[26162]);
}, exports.setMessageToFriendQuery = function (e, t) {
  run("setMessageToFriendQuery", e, t);
}, exports.getFriendShareInfo = function (e) {
  run("getFriendShareInfo", e);
};