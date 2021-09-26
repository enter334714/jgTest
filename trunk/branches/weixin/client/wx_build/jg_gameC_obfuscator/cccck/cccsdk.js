var p = wx.$h;
import sdk from "./ccchelp.js";var config = { game_id: 256, game_pkg: p[87762], partner_label: p[87763], partner_id: p[87764], game_ver: p[87765], is_auth: !1, from: null, tmpId: {} };window.config = config;var $a41ODC = $a4OD1C();var HOST = p[87766];var $a4OCD1 = null;var $a4OC1D = null;var sysInfo = wx.getSystemInfoSync();var platform = sysInfo.platform;var timeHandler = null;function $a4OD1C() {
  var t = {};return { order_data: {}, init: function (e, r) {
      var n = e && e.game_ver ? e.game_ver : 0;console.log(p[87691]);var o = this;var t;t = (a = wx.getStorageSync(p[87767])) ? 0 : (a = o.uuid(16, 32), wx.setStorageSync(p[87767], a), 1), (e = wx.getStorageSync(p[87768])) || (e = o.uuid(16, 32), wx.setStorageSync(p[87768], e));var a = wx.getLaunchOptionsSync();e = a.scene || "";console.log(p[87694]), console.log(a), t && a.query && a.query.ad_code && wx.setStorageSync(p[87769], a.query.ad_code), o.log(p[60997], { install: t, scene: e });o = a.query && a.query.invite ? a.query.invite : "";a = a.query && a.query.invite_type ? a.query.invite_type : "";o && ($a4OC1D = { invite: o, invite_type: a, is_new: t, scene: e }), sdk.init({ game_ver: n }, function (e) {
        console.log(p[87770], JSON.stringify(e));
      }), n && this.checkGameVersion(n, function (e) {
        r && r(e);
      });
    }, login: function (e, r) {
      console.log(p[87697]), t.login = p[87368] == typeof r ? r : null;var n = this;sdk.login(function (e, r) {
        0 == e ? (n.do_login(r), console.log(p[87771] + JSON.stringify(r))) : (console.warn(p[87772]), t.login && t.login(1, { errMsg: p[87773] }));
      });
    }, do_login: function (e) {
      var n = this;var r = n.getPublicData();if (r.user_info = JSON.stringify(e), $a4OC1D && p[60992] == typeof $a4OC1D) for (var o in $a4OC1D) r[o] = $a4OC1D[o];wx.request({ url: p[87774] + HOST + p[87708], method: p[60216], dataType: p[66285], header: { "content-type": p[60356] }, data: r, success: function (e) {
          if (console.log(p[87709] + JSON.stringify(e)), 200 == e.statusCode) {
            var r = e.data;if (r.state) {
              try {
                wx.setStorageSync(p[87775], r.data.sdk_token), wx.setStorageSync(p[87776], r.data.user_id), wx.setStorageSync(p[87777], r.data.username), r.data.ext && wx.setStorageSync(p[87778], r.data.ext);
              } catch (e) {}e = { userid: r.data.user_id, account: r.data.nick_name, token: r.data.token, invite_uid: r.data.invite_uid || "", invite_nickname: r.data.invite_nickname || "", invite_head_img: r.data.invite_head_img || "", head_img: r.data.head_img || "", is_client: r.data.is_client || "0", ios_pay: r.data.ios_pay || "0" };t.login && t.login(0, e);
            } else t.login && t.login(1, { errMsg: r.msg });n.getShareInfo(p[87779], function (e) {
              console.log(p[87780]), wx.onShareAppMessage(function () {
                return n.logStartShare(p[87779]), { title: e.title, imageUrl: e.img, query: e.query };
              });
            });
          } else t.login && t.login(1, { errMsg: p[87781] });
        } });
    }, share: function (e) {
      t.share = p[87368] == typeof callback ? callback : null;var r = e.type || p[60312];console.log(p[87782] + r);var n = this;this.getShareInfo(r, function (e) {
        n.logStartShare(r), wx.shareAppMessage({ title: e.title, imageUrl: e.img, query: e.query });
      });
    }, logStartShare: function (e) {
      var r = wx.getStorageSync(p[87775]);wx.request({ url: p[87774] + HOST + p[87783], method: p[60216], dataType: p[66285], header: { "content-type": p[60356] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, server_id: $a4OCD1 ? $a4OCD1.server_id : "", role_id: $a4OCD1 ? $a4OCD1.role_id : "", type: e }, success: function (e) {} });
    }, openService: function () {
      wx.openCustomerServiceConversation();
    }, checkGameVersion: function (e, n) {
      console.log(p[87719]);wx.getStorageSync(p[87775]);wx.request({ url: p[87774] + HOST + p[87720], method: p[60216], dataType: p[66285], header: { "content-type": p[60356] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var r;console.log(p[87784]), console.log(e), timeHandler && clearTimeout(timeHandler), 200 == e.statusCode && (r = e.data).state ? n && n(r.data) : n && n({ develop: 0 });
        }, fail: function (e) {
          console.log(p[87785]), console.log(e), timeHandler && clearTimeout(timeHandler), n && n({ develop: 0 });
        } });timeHandler = setTimeout(function () {
        console.log(p[87786]), n && n({ develop: 0 });
      }, 1e4);
    }, getShareInfo: function (e, r) {
      console.log(p[87787]);var n = wx.getStorageSync(p[87775]);wx.request({ url: p[87774] + HOST + p[87788], method: p[60216], dataType: p[66285], header: { "content-type": p[60356] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: n, type: e, server_id: $a4OCD1 ? $a4OCD1.server_id : "", role_id: $a4OCD1 ? $a4OCD1.role_id : "", no_log: 1 }, success: function (e) {
          console.log(p[87789]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? r && r(e.data) : t.share && t.share(1, { errMsg: p[87790] + e.msg }) : t.share && t.share(1, { errMsg: p[87791] });
        } });
    }, updateShare: function (e, r, n, o, t, a) {
      console.log(p[87792]);var i = wx.getStorageSync(p[87775]);wx.request({ url: p[87774] + HOST + p[87793], method: p[60216], dataType: p[66285], header: { "content-type": p[60356] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: r, is_new: n, role_id: o, sever_id: t, scene: a }, success: function (e) {
          console.log(p[87794]), console.log(e);
        } });
    }, msgCheck: function (e, n) {
      console.log(p[87795] + e), sdk.checkMsg(e, function (e) {
        console.log(p[87796] + JSON.stringify(e));let r = { data: {} };0 == e ? (r.statusCode = 200, r.data.state = 1) : (r.statusCode = 0, r.data.state = 0), n && n(r);
      });
    }, pay: function (e, r) {
      this.startPay(e, r);
    }, startPay: function (e, r) {
      console.log(p[87723] + JSON.stringify(e));t.pay = p[87368] == typeof r ? r : null;var n = wx.getStorageSync(p[87775]);r = wx.getStorageSync(p[87778]);n ? (n = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: n, session_key: r, platform: platform }, this.order_data = n, (r = this.getPublicData()).order_data = JSON.stringify(n), wx.request({ url: p[87774] + HOST + p[87724], method: p[60216], dataType: p[66285], header: { "content-type": p[60356] }, data: r, success: function (e) {
          console.log(p[87725] + JSON.stringify(e)), 200 == e.statusCode ? (e = e.data).state ? sdk.pay(e.data.pay_data, function (e, r) {
            console.log(p[87797] + JSON.stringify(r));
          }) : t.pay && t.pay(1, { errMsg: e.msg }) : t.login && t.login(1, { errMsg: p[87781] });
        } })) : t.pay && t.pay(1, { errMsg: p[87730] });
    }, logCreateRole: function (e) {
      var r = wx.getStorageSync(p[87776]);var n = wx.getStorageSync(p[87777]);var o = {};o.user_id = r, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && ($a4OCD1 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[60428], o), sdk.logCreateRole({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, logEnterGame: function (e) {
      var r = wx.getStorageSync(p[87776]);var n = wx.getStorageSync(p[87777]);var o = {};o.user_id = r, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && ($a4OCD1 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[66166], o), $a4OC1D && this.updateShare($a4OC1D.invite, $a4OC1D.invite_type, $a4OC1D.is_new, e.roleid, e.serverid, $a4OC1D.scene), sdk.logEnterGame({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, logRoleUpLevel: function (e) {
      var r = wx.getStorageSync(p[87776]);var n = wx.getStorageSync(p[87777]);var o = {};o.user_id = r, o.user_name = n, o.role_id = e.roleid, o.role_lev = e.rolelevel, o.role_name = e.rolename, o.server_id = e.serverid, e.roleid && e.serverid && ($a4OCD1 = { role_id: e.roleid, server_id: e.serverid }), this.log(p[87748], o), sdk.logRoleUpLevel({ serverId: e.serverid, serverName: e.servername, roleId: e.roleid, roleName: e.rolename, roleLevel: e.rolelevel });
    }, uuid: function (e, r) {
      var n = p[87749].split("");var o,
          t = [];var a;if (e = e || n.length, r) for (o = 0; o < r; o++) t[o] = n[0 | Math.random() * e];else for (t[8] = t[13] = t[18] = t[23] = "-", t[14] = "4", o = 0; o < 36; o++) t[o] || (a = 0 | 16 * Math.random(), t[o] = n[19 == o ? 3 & a | 8 : a]);return t.join("");
    }, getPublicData: function () {
      var e = wx.getStorageSync(p[87767]);var r = wx.getStorageSync(p[87768]);var n = wx.getStorageSync(p[87769]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: n, uuid: e, idfv: r, mac: p[87750], is_from_min: 1, dname: sysInfo.model, net_type: 0 == sysInfo.wifiSignal ? "4G" : p[87751], os_ver: sysInfo.system, sdk_ver: sysInfo.version, game_ver: config.game_ver, device: p[60109] == sysInfo.platform ? 1 : 2 };
    }, log: function (e, r) {
      var n = this.getPublicData();for (var o in r) n[o] = r[o];console.log(p[87752] + e), console.log(n), wx.request({ url: p[87774] + HOST + p[87753] + e + p[87754] + encodeURIComponent(JSON.stringify(n)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    }, weiduanHelper: function () {} };
}function run(e, r, n) {
  e in $a41ODC && $a41ODC[e](r, n);
}exports.init = function (e, r) {
  run(p[60228], e, r);
}, exports.login = function (e) {
  run(p[60249], "", e);
}, exports.login = function (e) {
  run(p[60249], "", e);
}, exports.pay = function (e, r) {
  run(p[60300], e, r);
}, exports.openService = function () {
  run(p[60313]);
}, exports.logCreateRole = function (e, r, n, o, t) {
  run(p[60308], { serverid: e, servername: r, roleid: n, rolename: o, rolelevel: t });
}, exports.logEnterGame = function (e, r, n, o, t) {
  run(p[60310], { serverid: e, servername: r, roleid: n, rolename: o, rolelevel: t });
}, exports.logRoleUpLevel = function (e, r, n, o, t) {
  run(p[87758], { serverid: e, servername: r, roleid: n, rolename: o, rolelevel: t });
}, exports.share = function (e) {
  run(p[60312], { type: e });
}, exports.msgCheck = function (e, r) {
  run(p[60195], e, r);
}, exports.downloadClient = function () {
  run(p[87759]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(p[87760]);
}, exports.weiduanHelper = function () {
  run(p[60315]);
};