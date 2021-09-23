var m = wx.$g;
let hortor = require(m[0]);let hortorSdk = hortor.sdk;let wallSDK = hortorSdk.wallSDK;let partner_config = hortor.config;let wxapm = hortor.wxapm;import HortorVip from "../utils/HortorVipSdk/hortorVip";var config = { game_id: m[1], game_pkg: m[2], partner_label: m[3], partner_id: m[4], game_ver: m[5], partner_game_id: m[6], is_auth: !1 };window.config = config;var partner_user_data = {};var G$Y81E_ = G$Y1E8_();var HOST = m[7];var G$Y1_E8 = null;var G$Y1_8E = null;var system = wx.getSystemInfoSync();var device = m[8] == system.platform ? m[8] : m[9];var userInfoBtn = "";function G$Y1E8_() {
  var l = {};return { order_data: {}, init: function (e, r) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log(m[10]);var t = this;var n;n = (a = wx.getStorageSync(m[11])) ? 0 : (a = t.uuid(16, 32), wx.setStorageSync(m[11], a), 1), (i = wx.getStorageSync(m[12])) || (i = t.uuid(16, 32), wx.setStorageSync(m[12], i));var a = wx.getLaunchOptionsSync();var i = a.scene || "";n && a.query && a.query.ad_code && wx.setStorageSync(m[13], a.query.ad_code), t.log(m[14], { install: n, scene: i }), partner_config.gameVersion && (partner_config.gameVersion = e.game_ver), hortor.init(partner_config);e = a.query && a.query.invite ? a.query.invite : "";a = a.query && a.query.invite_type ? a.query.invite_type : "";e && (G$Y1_8E = { invite: e, invite_type: a, is_new: n, scene: i }), o && this.checkGameVersion(o, function (o) {
        hortorSdk.checkSwitches({ switches: [m[15], m[16], m[17], m[18]] }).then(e => {
          console.log(m[19], e), o.is_share = e.share ? 1 : 0, o.show_pay = e.iospay ? 1 : 0, o.is_vipds = e.vipds ? 1 : 0, o.is_gzgzh = e.gzgzh ? 1 : 0, o.is_skip_create_role = o.skip_create_role ? 1 : 0, r && r(o);
        }).catch(e => {
          console.log(`获取失败，errCode=${e.errCode} errMsg=${e.errMsg}`), r && r(o);
        });
      });
    }, login: function (e, o) {
      console.log(m[20]), console.log(m[21] + Date.now());var r = this;l.login = m[22] == typeof o ? o : null;var t = wx.getSystemInfoSync();o = t.screenWidth;t = t.screenHeight;var n = 2 * o / 4;var a = n / 4;var i = (o - n) / 2;var s = t / 2;config.is_auth ? wx.getSetting({ success: function (e) {
          if (e.authSetting[m[23]]) hortorSdk.login().then(e => {
            console.log(m[24] + JSON.stringify(e)), r.do_login(e);
          }).catch(e => {
            console.log(m[25], e);
          });else {
            const o = hortorSdk.createGetUserInfoBtn({ type: m[26], text: m[27], style: { left: i, top: s, width: n, height: a, lineHeight: a, backgroundColor: m[28], color: m[29], textAlign: m[30], fontSize: 16, borderRadius: 4 } });o && (o.show(), o.onTap(e => {
              e && e.userInfo ? (console.log(m[31]), hortorSdk.login().then(e => {
                console.log(m[24] + JSON.stringify(e)), r.do_login(e);
              }).catch(e => {
                console.log(m[25], e);
              }), o.hide()) : r.weak_login();
            }));
          }
        }, fail: function () {
          r.weak_login();
        } }) : r.weak_login();
    }, weak_login: function () {
      hortorSdk.weakLogin().then(e => {
        console.log(m[32], e), this.do_login(e);
      }).catch(e => {
        console.log(m[33], e), l.login && l.login(1, { errMsg: m[34] });
      });
    }, do_login: function (e) {
      var t = this;var o = t.getPublicData();if (o.userInfo = e.encryptUserInfo || e.userInfo, o.timestamp = e.timestamp, o.sign = e.sign, o.is_from_min = 1, G$Y1_8E && m[35] == typeof G$Y1_8E) for (var r in G$Y1_8E) o[r] = G$Y1_8E[r];wx.request({ url: m[36] + HOST + m[37], method: m[38], dataType: m[39], header: { "content-type": m[40] }, data: o, success: function (e) {
          if (console.log(m[41]), console.log(e), 200 === e.statusCode) {
            var o = e.data;if (o.state) {
              partner_user_data.uid = o.data.openid, partner_user_data.uniqueIdNew = o.data.ext.uniqueId;try {
                wx.setStorageSync(m[42], o.data.sdk_token), wx.setStorageSync(m[43], o.data.user_id), wx.setStorageSync(m[44], o.data.username), o.data.ext && wx.setStorageSync(m[45], o.data.ext);
              } catch (e) {}e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token, openid: o.data.ext.uniqueId, invite_uid: o.data.invite_uid || "", invite_nickname: o.data.invite_nickname || "", invite_head_img: o.data.invite_head_img || "", head_img: o.data.head_img || "", is_client: o.data.is_client || "0", ios_pay: o.data.ios_pay || "0" };l.login && l.login(0, e);
            } else l.login && l.login(1, { errMsg: o.msg });hortorSdk.setGameUserInfo(), t.getShareInfo(m[46], function (e) {
              console.log(m[47]);var o = m[48];var r = hortorSdk.getShareData({ shareType: o });console.log(m[49], JSON.stringify(r)), wx.onShareAppMessage(function () {
                return t.logStartShare(m[46]), hortorSdk.sharePointShow(o), { title: r.title, imageUrl: r.imageUrl, query: r.query + "&" + e.query };
              });
            });
          } else l.login && l.login(1, { errMsg: m[50] });
        } });
    }, share: function (e) {
      l.share = m[22] == typeof callback ? callback : null;var t = e.type || m[15];console.log(m[51] + t);var n = this;this.getShareInfo(t, function (e) {
        var o = m[52];var r = hortorSdk.getShareData({ shareType: o });console.log(m[53], r), n.logStartShare(t), hortorSdk.sharePointShow(o), wx.shareAppMessage({ title: r.title, imageUrl: r.imageUrl, query: r.query + "&" + e.query });
      });
    }, logStartShare: function (e) {
      var o = wx.getStorageSync(m[42]);wx.request({ url: m[36] + HOST + m[54], method: m[38], dataType: m[39], header: { "content-type": m[40] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, server_id: G$Y1_E8 ? G$Y1_E8.server_id : "", role_id: G$Y1_E8 ? G$Y1_E8.role_id : "", type: e }, success: function (e) {} });
    }, is_authorize: function (o) {
      console.log(m[55]), wx.getSetting({ success: function (e) {
          e.authSetting[m[23]] ? o(1) : o(0);
        } });
    }, go_authorize: function (e, o) {
      console.log(m[56]), (userInfoBtn = hortorSdk.createGetUserInfoBtn({ type: m[57], image: m[58], style: { left: e.left, top: e.top, width: e.width, height: e.height, lineHeight: e.height, textAlign: m[30], fontSize: 16, borderRadius: 4 } })) && (userInfoBtn.show(), userInfoBtn.onTap(e => {
        e && e.userInfo ? (console.log(m[31]), hortorSdk.updateUserInfo().then(e => {
          console.log(m[59], e), o(1);
        }).catch(e => {
          console.log(m[60], e), o(0);
        })) : (console.log(m[61]), o(0)), userInfoBtn.hide();
      }));
    }, hideUserInfoBtn: function () {
      userInfoBtn && userInfoBtn.hide();
    }, openService: function () {
      hortorSdk.customerService({ showMessageCard: !0, success: e => {
          console.log(m[62], e);
        }, fail: e => {
          console.log(m[63], e);
        } });
    }, goCustomer: function (e) {
      hortorSdk.goCustomer({ playerId: e.roleid, playerName: e.rolename }).then(e => {
        console.log(m[64]);
      }).catch(e => {
        console.log(m[65], e);
      });
    }, checkGameVersion: function (e, r) {
      console.log(m[66]);wx.getStorageSync(m[42]);wx.request({ url: m[36] + HOST + "/game/min/?ac=checkGameVersion", method: m[38], dataType: m[39], header: { "content-type": m[40] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var o;console.log(m[67]), console.log(e), 200 == e.statusCode && (o = e.data).state ? r && r(o.data) : r && r({ develop: 0 });
        } });
    }, getShareInfo: function (e, o) {
      console.log(m[68]);var r = wx.getStorageSync(m[42]);wx.request({ url: m[36] + HOST + m[69], method: m[38], dataType: m[39], header: { "content-type": m[40] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: G$Y1_E8 ? G$Y1_E8.server_id : "", role_id: G$Y1_E8 ? G$Y1_E8.role_id : "", no_log: 1 }, success: function (e) {
          console.log(m[70]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? o && o(e.data) : l.share && l.share(1, { errMsg: m[71] + e.msg }) : l.share && l.share(1, { errMsg: m[72] });
        } });
    }, updateShare: function (e, o, r, t, n, a) {
      console.log(m[73]);var i = wx.getStorageSync(m[42]);wx.request({ url: m[36] + HOST + m[74], method: m[38], dataType: m[39], header: { "content-type": m[40] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: o, is_new: r, role_id: t, sever_id: n, scene: a }, success: function (e) {
          console.log(m[75]), console.log(e);
        } });
    }, msgCheck: function (e, o) {
      console.log(m[76]);var r = wx.getStorageSync(m[42]);wx.request({ url: m[36] + HOST + m[77] + config.partner_id + "/" + config.game_pkg, method: m[38], dataType: m[39], header: { "content-type": m[40] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, content: e, uId: partner_user_data.uid }, success: function (e) {
          console.log(m[78]), console.log(e), o && o(e);
        } });
    }, isSubscribe: function (o) {
      console.log(m[79]);var e = wx.getStorageSync(m[45]);wx.request({ url: m[36] + HOST + m[80] + config.partner_id + "/" + config.game_pkg, method: m[38], dataType: m[39], header: { "content-type": m[40] }, data: { openid: e.uniqueId }, success: function (e) {
          console.log(m[81], e), 1 == e.data.state ? o({ status: 1 }) : o({ status: 0 });
        } });
    }, pay: function (e, o) {
      this.startPay(e, o);
    }, startPay: function (e, o) {
      console.log(m[82]), console.log(e);l.pay = m[22] == typeof o ? o : null;var r = wx.getStorageSync(m[42]);var t = wx.getStorageSync(m[45]);r || t ? (o = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, session_key: t, platform: o.platform }, this.order_data = t, (o = this.getPublicData()).order_data = JSON.stringify(t), o.is_from_min = 1, wx.request({ url: m[36] + HOST + m[83], method: m[38], dataType: m[39], header: { "content-type": m[40] }, data: o, success: function (e) {
          console.log(m[84]), console.log(e), 200 === e.statusCode ? (e = e.data).state && e.data.pay_data ? (console.log(m[85] + JSON.stringify(e.data.pay_data)), m[9] === device ? (console.log(m[86]), hortorSdk.jumpPay(e.data.pay_data).then(e => {
            console.log(m[64]);
          }).catch(e => {
            console.log(m[65], e), l.pay && l.pay(1, { errMsg: e.errMsg });
          })) : (console.log(m[87]), hortorSdk.midasPay(e.data.pay_data).then(e => {
            console.log(m[88]);
          }).catch(e => {
            console.log(m[89], e), l.pay && l.pay(1, { errMsg: e.errMsg });
          }))) : l.pay && l.pay(1, { errMsg: e.msg }) : l.login && l.login(1, { errMsg: m[50] });
        } })) : l.pay && l.pay(1, { errMsg: m[90] });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync(m[43]);var r = wx.getStorageSync(m[44]);var t = wx.getStorageSync(m[45]);var n = {};n.user_id = o, n.user_name = r, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (G$Y1_E8 = { role_id: e.roleid, server_id: e.serverid }), this.log(m[91], n);t = { roleId: e.roleid, roleName: e.rolename, serverId: e.serverid, level: e.rolelevel, roleCtime: Date.parse(new Date()), id: t.uniqueId };hortorSdk.setGameUserInfo(t), this.roleCreateReport(0);
    }, roleCreateReport: function (e = 1) {
      wx.request({ url: m[36] + HOST + m[92] + config.partner_id + "/" + config.game_pkg, method: m[38], dataType: m[39], header: { "content-type": m[40] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, uniqueId: partner_user_data.uid, is_valid: 1 === e ? 1 : 0 }, success: function (e) {
          console.log(m[93], e);
        } });
    }, logEnterGame: function (e, r) {
      var o = wx.getStorageSync(m[43]);var t = wx.getStorageSync(m[44]);var n = wx.getStorageSync(m[45]);var a = {};a.user_id = o, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (G$Y1_E8 = { role_id: e.roleid, server_id: e.serverid }), hortorSdk.checkSwitches({ switches: [m[94]] }).then(e => {
        console.log(m[95], e), e.antiaddicted && hortorSdk.checkRest(() => {
          console.log(m[96]);
        });
      }).catch(e => {
        console.log(`[SDK]检查防沉迷开关返回失败，errCode=${e.errCode} errMsg=${e.errMsg}`);
      }), this.log(m[97], a);n = { roleId: e.roleid, roleName: e.rolename, serverId: e.serverid, level: e.rolelevel, roleCtime: e.rolecreatetime ? 1e3 * e.rolecreatetime : 0, id: n.uniqueId };hortorSdk.setGameUserInfo(n), G$Y1_8E && this.updateShare(G$Y1_8E.invite, G$Y1_8E.invite_type, G$Y1_8E.is_new, e.roleid, e.serverid, G$Y1_8E.scene), hortorSdk.checkSwitches({ switches: [m[16]] }).then(e => {
        console.log(m[98], e);var o = 0;e.iospay && (o = 1), r && r({ show_pay: o });
      }).catch(e => {
        console.log(`[SDK]获取支付开关返回失败，errCode=${e.errCode} errMsg=${e.errMsg}`), r && r({ show_pay: 0 });
      });
    }, logRoleUpLevel: function (e, r) {
      var o = wx.getStorageSync(m[43]);var t = wx.getStorageSync(m[44]);var n = wx.getStorageSync(m[45]);var a = {};a.user_id = o, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (G$Y1_E8 = { role_id: e.roleid, server_id: e.serverid }), this.log(m[99], a);n = { roleId: e.roleid, roleName: e.rolename, serverId: e.serverid, level: e.rolelevel, roleCtime: e.rolecreatetime ? 1e3 * e.rolecreatetime : 0, id: n.uniqueId };hortorSdk.setGameUserInfo(n), 80 <= e.rolelevel && this.roleCreateReport(1), hortorSdk.checkSwitches({ switches: [m[16]] }).then(e => {
        console.log(m[98], e);var o = 0;e.iospay && (o = 1), r && r({ show_pay: o });
      }).catch(e => {
        console.log(`[SDK]获取支付开关返回失败，errCode=${e.errCode} errMsg=${e.errMsg}`), r && r({ show_pay: 0 });
      });
    }, showHortorVip: function () {
      let e = new HortorVip();e.init({ vipGameId: config.partner_game_id, gameVersion: m[100], env: m[101], userId: partner_user_data.uniqueIdNew, icon: { posX: -1, posY: -1 }, defShowIcon: !0, onLoad: (e, o) => {
          console.log(m[102], e, o);
        } });
    }, uuid: function (e, o) {
      var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var t,
          n = [];var a;if (e = e || r.length, o) for (t = 0; t < o; t++) n[t] = r[0 | Math.random() * e];else for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", t = 0; t < 36; t++) n[t] || (a = 0 | 16 * Math.random(), n[t] = r[19 == t ? 3 & a | 8 : a]);return n.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var o = wx.getStorageSync(m[11]);var r = wx.getStorageSync(m[12]);var t = wx.getStorageSync(m[13]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: t, uuid: o, idfv: r, dname: e.model, mac: m[103], net_type: 0 == e.wifiSignal ? "4G" : m[104], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: m[8] == e.platform ? 1 : 2 };
    }, log: function (e, o) {
      var r = this.getPublicData();for (var t in o) r[t] = o[t];console.log(m[105] + e), console.log(r), wx.request({ url: m[36] + HOST + m[106] + e + m[107] + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    } };
}function run(e, o, r) {
  e in G$Y81E_ && G$Y81E_[e](o, r);
}exports.init = function (e, o) {
  run(m[108], e, o);
}, exports.login = function (e) {
  run(m[109], "", e);
}, exports.pay = function (e, o) {
  run(m[110], e, o);
}, exports.openService = function () {
  run(m[111]);
}, exports.goCustomer = function (e, o, r, t, n, a) {
  run(m[112], { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n });
}, exports.logCreateRole = function (e, o, r, t, n) {
  run(m[113], { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n });
}, exports.logEnterGame = function (e, o, r, t, n, a, i) {
  run("logEnterGame", { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n, rolecreatetime: a, rolepower: i.rolepower }, i.callback);
}, exports.logRoleUpLevel = function (e, o, r, t, n, a, i) {
  run(m[114], { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n, rolecreatetime: a, rolepower: i.rolepower }, i.callback);
}, exports.share = function (e) {
  run(m[15], { type: e });
}, exports.msgCheck = function (e, o) {
  run(m[115], e, o);
}, exports.downloadClient = function () {
  run(m[116]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(m[117]);
}, exports.showHortorVip = function () {
  run(m[118]);
}, exports.roleCreateReport = function (e) {
  run(m[119], e);
}, exports.isSubscribe = function (e) {
  run(m[120], e);
}, exports.is_authorize = function (e) {
  run(m[121], e);
}, exports.go_authorize = function (e, o) {
  run(m[122], e, o);
}, exports.hideUserInfoBtn = function (e) {
  run(m[123], e);
};