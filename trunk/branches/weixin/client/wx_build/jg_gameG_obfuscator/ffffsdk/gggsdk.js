var m = wx.$g;
let hortor = require(m[69]);let hortorSdk = hortor.sdk;let wallSDK = hortorSdk.wallSDK;let partner_config = hortor.config;let wxapm = hortor.wxapm;var config = { game_id: m[70], game_pkg: m[71], partner_label: m[72], partner_id: m[73], game_ver: "7.0.2", partner_game_id: m[75], is_auth: !1 };window.config = config;var partner_user_data = {};var G$AB7E0 = G$A7EB0();var HOST = m[76];var G$A70EB = null;var G$A70BE = null;var system = wx.getSystemInfoSync();var device = m[48] == system.platform ? m[48] : m[77];var userInfoBtn = "";function G$A7EB0() {
  var l = {};return { order_data: {}, init: function (e, r) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log(m[78]);var t = this;var n;n = (a = wx.getStorageSync(m[79])) ? 0 : (a = t.uuid(16, 32), wx.setStorageSync(m[79], a), 1), (i = wx.getStorageSync(m[80])) || (i = t.uuid(16, 32), wx.setStorageSync(m[80], i));var a = wx.getLaunchOptionsSync();var i = a.scene || "";n && a.query && a.query.ad_code && wx.setStorageSync(m[81], a.query.ad_code), t.log(m[82], { install: n, scene: i }), partner_config.gameVersion && (partner_config.gameVersion = e.game_ver), hortor.init(partner_config);e = a.query && a.query.invite ? a.query.invite : "";a = a.query && a.query.invite_type ? a.query.invite_type : "";e && (G$A70BE = { invite: e, invite_type: a, is_new: n, scene: i }), o && this.checkGameVersion(o, function (o) {
        hortorSdk.checkSwitches({ switches: [m[83], m[84], m[85], m[86]] }).then(e => {
          console.log(m[87], e), o.is_share = e.share ? 1 : 0, o.show_pay = e.iospay ? 1 : 0, o.is_vipds = e.vipds ? 1 : 0, o.is_gzgzh = e.gzgzh ? 1 : 0, o.is_skip_create_role = o.skip_create_role ? 1 : 0, r && r(o);
        }).catch(e => {
          console.log(`获取失败，errCode=${e.errCode} errMsg=${e.errMsg}`), r && r(o);
        });
      });
    }, login: function (e, o) {
      console.log(m[88]), console.log(m[89] + Date.now());var r = this;l.login = m[90] == typeof o ? o : null;var t = wx.getSystemInfoSync();o = t.screenWidth;t = t.screenHeight;var n = 2 * o / 4;var a = n / 4;var i = (o - n) / 2;var s = t / 2;config.is_auth ? wx.getSetting({ success: function (e) {
          if (e.authSetting[m[91]]) hortorSdk.login().then(e => {
            console.log(m[92] + JSON.stringify(e)), r.do_login(e);
          }).catch(e => {
            console.log(m[93], e);
          });else {
            const o = hortorSdk.createGetUserInfoBtn({ type: m[94], text: m[95], style: { left: i, top: s, width: n, height: a, lineHeight: a, backgroundColor: m[96], color: m[97], textAlign: m[98], fontSize: 16, borderRadius: 4 } });o && (o.show(), o.onTap(e => {
              e && e.userInfo ? (console.log(m[99]), hortorSdk.login().then(e => {
                console.log(m[92] + JSON.stringify(e)), r.do_login(e);
              }).catch(e => {
                console.log(m[93], e);
              }), o.hide()) : r.weak_login();
            }));
          }
        }, fail: function () {
          r.weak_login();
        } }) : r.weak_login();
    }, weak_login: function () {
      hortorSdk.weakLogin().then(e => {
        console.log(m[100], e), this.do_login(e);
      }).catch(e => {
        console.log(m[101], e), l.login && l.login(1, { errMsg: m[102] });
      });
    }, do_login: function (e) {
      var t = this;var o = t.getPublicData();if (o.userInfo = e.encryptUserInfo || e.userInfo, o.timestamp = e.timestamp, o.sign = e.sign, o.is_from_min = 1, G$A70BE && m[31] == typeof G$A70BE) for (var r in G$A70BE) o[r] = G$A70BE[r];wx.request({ url: m[103] + HOST + m[104], method: m[9], dataType: m[42], header: { "content-type": m[105] }, data: o, success: function (e) {
          if (console.log(m[106]), console.log(e), 200 === e.statusCode) {
            var o = e.data;if (o.state) {
              partner_user_data.uid = o.data.openid, partner_user_data.uniqueIdNew = o.data.ext.uniqueId;try {
                wx.setStorageSync(m[107], o.data.sdk_token), wx.setStorageSync(m[108], o.data.user_id), wx.setStorageSync(m[109], o.data.username), o.data.ext && wx.setStorageSync(m[110], o.data.ext);
              } catch (e) {}e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token, openid: o.data.ext.uniqueId, invite_uid: o.data.invite_uid || "", invite_nickname: o.data.invite_nickname || "", invite_head_img: o.data.invite_head_img || "", head_img: o.data.head_img || "", is_client: o.data.is_client || "0", ios_pay: o.data.ios_pay || "0" };l.login && l.login(0, e);
            } else l.login && l.login(1, { errMsg: o.msg });hortorSdk.setGameUserInfo(), t.getShareInfo(m[111], function (e) {
              console.log(m[112]);var o = m[113];var r = hortorSdk.getShareData({ shareType: o });console.log(m[114], JSON.stringify(r)), wx.onShareAppMessage(function () {
                return t.logStartShare(m[111]), hortorSdk.sharePointShow(o), { title: r.title, imageUrl: r.imageUrl, query: r.query + "&" + e.query };
              });
            });
          } else l.login && l.login(1, { errMsg: m[115] });
        } });
    }, share: function (e) {
      l.share = m[90] == typeof callback ? callback : null;var t = e.type || m[83];console.log(m[116] + t);var n = this;this.getShareInfo(t, function (e) {
        var o = m[117];var r = hortorSdk.getShareData({ shareType: o });console.log(m[118], r), n.logStartShare(t), hortorSdk.sharePointShow(o), wx.shareAppMessage({ title: r.title, imageUrl: r.imageUrl, query: r.query + "&" + e.query });
      });
    }, logStartShare: function (e) {
      var o = wx.getStorageSync(m[107]);wx.request({ url: m[103] + HOST + m[119], method: m[9], dataType: m[42], header: { "content-type": m[105] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, server_id: G$A70EB ? G$A70EB.server_id : "", role_id: G$A70EB ? G$A70EB.role_id : "", type: e }, success: function (e) {} });
    }, is_authorize: function (o) {
      console.log(m[120]), wx.getSetting({ success: function (e) {
          e.authSetting[m[91]] ? o(1) : o(0);
        } });
    }, go_authorize: function (e, o) {
      console.log(m[121]), (userInfoBtn = hortorSdk.createGetUserInfoBtn({ type: m[122], image: m[123], style: { left: e.left, top: e.top, width: e.width, height: e.height, lineHeight: e.height, textAlign: m[98], fontSize: 16, borderRadius: 4 } })) && (userInfoBtn.show(), userInfoBtn.onTap(e => {
        e && e.userInfo ? (console.log(m[99]), hortorSdk.updateUserInfo().then(e => {
          console.log(m[124], e), o(1);
        }).catch(e => {
          console.log(m[125], e), o(0);
        })) : (console.log(m[126]), o(0)), userInfoBtn.hide();
      }));
    }, hideUserInfoBtn: function () {
      userInfoBtn && userInfoBtn.hide();
    }, openService: function () {
      hortorSdk.customerService({ showMessageCard: !0, success: e => {
          console.log(m[127], e);
        }, fail: e => {
          console.log(m[128], e);
        } });
    }, goCustomer: function (e) {
      hortorSdk.goCustomer({ playerId: e.roleid, playerName: e.rolename }).then(e => {
        console.log(m[129]);
      }).catch(e => {
        console.log(m[130], e);
      });
    }, checkGameVersion: function (e, r) {
      console.log(m[131]);wx.getStorageSync(m[107]);wx.request({ url: m[103] + HOST + "/game/min/?ac=checkGameVersion", method: m[9], dataType: m[42], header: { "content-type": m[105] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var o;console.log(m[132]), console.log(e), 200 == e.statusCode && (o = e.data).state ? r && r(o.data) : r && r({ develop: 0 });
        } });
    }, getShareInfo: function (e, o) {
      console.log(m[133]);var r = wx.getStorageSync(m[107]);wx.request({ url: m[103] + HOST + m[134], method: m[9], dataType: m[42], header: { "content-type": m[105] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: G$A70EB ? G$A70EB.server_id : "", role_id: G$A70EB ? G$A70EB.role_id : "", no_log: 1 }, success: function (e) {
          console.log(m[135]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? o && o(e.data) : l.share && l.share(1, { errMsg: m[136] + e.msg }) : l.share && l.share(1, { errMsg: m[137] });
        } });
    }, updateShare: function (e, o, r, t, n, a) {
      console.log(m[138]);var i = wx.getStorageSync(m[107]);wx.request({ url: m[103] + HOST + m[139], method: m[9], dataType: m[42], header: { "content-type": m[105] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: o, is_new: r, role_id: t, sever_id: n, scene: a }, success: function (e) {
          console.log(m[140]), console.log(e);
        } });
    }, msgCheck: function (e, o) {
      console.log(m[141]);var r = wx.getStorageSync(m[107]);wx.request({ url: m[103] + HOST + m[142] + config.partner_id + "/" + config.game_pkg, method: m[9], dataType: m[42], header: { "content-type": m[105] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, content: e, uId: partner_user_data.uid }, success: function (e) {
          console.log(m[143]), console.log(e), o && o(e);
        } });
    }, isSubscribe: function (o) {
      console.log(m[144]);var e = wx.getStorageSync(m[110]);wx.request({ url: m[103] + HOST + m[145] + config.partner_id + "/" + config.game_pkg, method: m[9], dataType: m[42], header: { "content-type": m[105] }, data: { openid: e.uniqueId }, success: function (e) {
          console.log(m[146], e), 1 == e.data.state ? o({ status: 1 }) : o({ status: 0 });
        } });
    }, pay: function (e, o) {
      this.startPay(e, o);
    }, startPay: function (e, o) {
      console.log(m[147]), console.log(e);l.pay = m[90] == typeof o ? o : null;var r = wx.getStorageSync(m[107]);var t = wx.getStorageSync(m[110]);r || t ? (o = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, session_key: t, platform: o.platform }, this.order_data = t, (o = this.getPublicData()).order_data = JSON.stringify(t), o.is_from_min = 1, wx.request({ url: m[103] + HOST + m[148], method: m[9], dataType: m[42], header: { "content-type": m[105] }, data: o, success: function (e) {
          console.log(m[149]), console.log(e), 200 === e.statusCode ? (e = e.data).state && e.data.pay_data ? (console.log(m[150] + JSON.stringify(e.data.pay_data)), m[77] === device ? (console.log(m[151]), hortorSdk.jumpPay(e.data.pay_data).then(e => {
            console.log(m[129]);
          }).catch(e => {
            console.log(m[130], e), l.pay && l.pay(1, { errMsg: e.errMsg });
          })) : (console.log(m[152]), hortorSdk.midasPay(e.data.pay_data).then(e => {
            console.log(m[153]);
          }).catch(e => {
            console.log(m[154], e), l.pay && l.pay(1, { errMsg: e.errMsg });
          }))) : l.pay && l.pay(1, { errMsg: e.msg }) : l.login && l.login(1, { errMsg: m[115] });
        } })) : l.pay && l.pay(1, { errMsg: m[155] });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync(m[108]);var r = wx.getStorageSync(m[109]);var t = wx.getStorageSync(m[110]);var n = {};n.user_id = o, n.user_name = r, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (G$A70EB = { role_id: e.roleid, server_id: e.serverid }), this.log(m[156], n);t = { roleId: e.roleid, roleName: e.rolename, serverId: e.serverid, level: e.rolelevel, roleCtime: Date.parse(new Date()), id: t.uniqueId };hortorSdk.setGameUserInfo(t), this.roleCreateReport(0);
    }, roleCreateReport: function (e = 1) {
      wx.request({ url: m[103] + HOST + m[157] + config.partner_id + "/" + config.game_pkg, method: m[9], dataType: m[42], header: { "content-type": m[105] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, uniqueId: partner_user_data.uid, is_valid: 1 === e ? 1 : 0 }, success: function (e) {
          console.log(m[158], e);
        } });
    }, logEnterGame: function (e, r) {
      var o = wx.getStorageSync(m[108]);var t = wx.getStorageSync(m[109]);var n = wx.getStorageSync(m[110]);var a = {};a.user_id = o, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (G$A70EB = { role_id: e.roleid, server_id: e.serverid }), hortorSdk.checkSwitches({ switches: [m[159]] }).then(e => {
        console.log(m[160], e), e.antiaddicted && hortorSdk.checkRest(() => {
          console.log(m[161]);
        });
      }).catch(e => {
        console.log(`[SDK]检查防沉迷开关返回失败，errCode=${e.errCode} errMsg=${e.errMsg}`);
      }), this.log(m[162], a);n = { roleId: e.roleid, roleName: e.rolename, serverId: e.serverid, level: e.rolelevel, roleCtime: e.rolecreatetime ? 1e3 * e.rolecreatetime : 0, id: n.uniqueId };hortorSdk.setGameUserInfo(n), G$A70BE && this.updateShare(G$A70BE.invite, G$A70BE.invite_type, G$A70BE.is_new, e.roleid, e.serverid, G$A70BE.scene), hortorSdk.checkSwitches({ switches: [m[84]] }).then(e => {
        console.log(m[163], e);var o = 0;e.iospay && (o = 1), r && r({ show_pay: o });
      }).catch(e => {
        console.log(`[SDK]获取支付开关返回失败，errCode=${e.errCode} errMsg=${e.errMsg}`), r && r({ show_pay: 0 });
      });
    }, logRoleUpLevel: function (e, r) {
      var o = wx.getStorageSync(m[108]);var t = wx.getStorageSync(m[109]);var n = wx.getStorageSync(m[110]);var a = {};a.user_id = o, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (G$A70EB = { role_id: e.roleid, server_id: e.serverid }), this.log(m[164], a);n = { roleId: e.roleid, roleName: e.rolename, serverId: e.serverid, level: e.rolelevel, roleCtime: e.rolecreatetime ? 1e3 * e.rolecreatetime : 0, id: n.uniqueId };hortorSdk.setGameUserInfo(n), 80 <= e.rolelevel && this.roleCreateReport(1), hortorSdk.checkSwitches({ switches: [m[84]] }).then(e => {
        console.log(m[163], e);var o = 0;e.iospay && (o = 1), r && r({ show_pay: o });
      }).catch(e => {
        console.log(`[SDK]获取支付开关返回失败，errCode=${e.errCode} errMsg=${e.errMsg}`), r && r({ show_pay: 0 });
      });
    }, uuid: function (e, o) {
      var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var t,
          n = [];var a;if (e = e || r.length, o) for (t = 0; t < o; t++) n[t] = r[0 | Math.random() * e];else for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", t = 0; t < 36; t++) n[t] || (a = 0 | 16 * Math.random(), n[t] = r[19 == t ? 3 & a | 8 : a]);return n.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var o = wx.getStorageSync(m[79]);var r = wx.getStorageSync(m[80]);var t = wx.getStorageSync(m[81]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: t, uuid: o, idfv: r, dname: e.model, mac: m[165], net_type: 0 == e.wifiSignal ? "4G" : m[166], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: m[48] == e.platform ? 1 : 2 };
    }, log: function (e, o) {
      var r = this.getPublicData();for (var t in o) r[t] = o[t];console.log(m[167] + e), console.log(r), wx.request({ url: m[103] + HOST + m[168] + e + m[169] + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    } };
}function run(e, o, r) {
  e in G$AB7E0 && G$AB7E0[e](o, r);
}exports.init = function (e, o) {
  run(m[170], e, o);
}, exports.login = function (e) {
  run(m[171], "", e);
}, exports.pay = function (e, o) {
  run(m[172], e, o);
}, exports.openService = function () {
  run(m[173]);
}, exports.goCustomer = function (e, o, r, t, n, a) {
  run(m[174], { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n });
}, exports.logCreateRole = function (e, o, r, t, n) {
  run(m[175], { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n });
}, exports.logEnterGame = function (e, o, r, t, n, a, i) {
  run("logEnterGame", { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n, rolecreatetime: a, rolepower: i.rolepower }, i.callback);
}, exports.logRoleUpLevel = function (e, o, r, t, n, a, i) {
  run(m[176], { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n, rolecreatetime: a, rolepower: i.rolepower }, i.callback);
}, exports.share = function (e) {
  run(m[83], { type: e });
}, exports.msgCheck = function (e, o) {
  run(m[177], e, o);
}, exports.downloadClient = function () {
  run(m[178]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(m[179]);
}, exports.roleCreateReport = function (e) {
  run(m[180], e);
}, exports.isSubscribe = function (e) {
  run(m[181], e);
}, exports.is_authorize = function (e) {
  run(m[182], e);
}, exports.go_authorize = function (e, o) {
  run(m[183], e, o);
}, exports.hideUserInfoBtn = function (e) {
  run(m[184], e);
};