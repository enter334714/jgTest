var m = wx.$g;
let hortor = require(m[26573]);let hortorSdk = hortor.sdk;let wallSDK = hortorSdk.wallSDK;let partner_config = hortor.config;let wxapm = hortor.wxapm;var config = { game_id: m[26574], game_pkg: m[26575], partner_label: m[26576], partner_id: m[26577], game_ver: m[26578], partner_game_id: m[26579], is_auth: !1 };window.config = config;var partner_user_data = {};var G$SNILA = G$SILNA();var HOST = m[26580];var G$SIALN = null;var G$SIANL = null;var system = wx.getSystemInfoSync();var device = m[26174] == system.platform ? m[26174] : m[26173];var userInfoBtn = "";function G$SILNA() {
  var l = {};return { order_data: {}, init: function (e, r) {
      var o = e && e.game_ver ? e.game_ver : 0;console.log(m[26581]);var t = this;var n;n = (a = wx.getStorageSync(m[26582])) ? 0 : (a = t.uuid(16, 32), wx.setStorageSync(m[26582], a), 1), (i = wx.getStorageSync(m[26583])) || (i = t.uuid(16, 32), wx.setStorageSync(m[26583], i));var a = wx.getLaunchOptionsSync();var i = a.scene || "";n && a.query && a.query.ad_code && wx.setStorageSync(m[26584], a.query.ad_code), t.log(m[273], { install: n, scene: i }), partner_config.gameVersion && (partner_config.gameVersion = e.game_ver), hortor.init(partner_config);e = a.query && a.query.invite ? a.query.invite : "";a = a.query && a.query.invite_type ? a.query.invite_type : "";e && (G$SIANL = { invite: e, invite_type: a, is_new: n, scene: i }), o && this.checkGameVersion(o, function (o) {
        hortorSdk.checkSwitches({ switches: [m[26326], m[26585], m[26586], m[26587]] }).then(e => {
          console.log(m[26588], e), o.is_share = e.share ? 1 : 0, o.show_pay = e.iospay ? 1 : 0, o.is_vipds = e.vipds ? 1 : 0, o.is_gzgzh = e.gzgzh ? 1 : 0, o.is_skip_create_role = o.skip_create_role ? 1 : 0, r && r(o);
        }).catch(e => {
          console.log(`获取失败，errCode=${e.errCode} errMsg=${e.errMsg}`), r && r(o);
        });
      });
    }, login: function (e, o) {
      console.log(m[26589]), console.log(m[26590] + Date.now());var r = this;l.login = m[26017] == typeof o ? o : null;var t = wx.getSystemInfoSync();o = t.screenWidth;t = t.screenHeight;var n = 2 * o / 4;var a = n / 4;var i = (o - n) / 2;var s = t / 2;config.is_auth ? wx.getSetting({ success: function (e) {
          if (e.authSetting[m[26591]]) hortorSdk.login().then(e => {
            console.log(m[26592] + JSON.stringify(e)), r.do_login(e);
          }).catch(e => {
            console.log(m[26593], e);
          });else {
            const o = hortorSdk.createGetUserInfoBtn({ type: m[3923], text: m[26594], style: { left: i, top: s, width: n, height: a, lineHeight: a, backgroundColor: m[26595], color: m[3945], textAlign: m[1451], fontSize: 16, borderRadius: 4 } });o && (o.show(), o.onTap(e => {
              e && e.userInfo ? (console.log(m[26596]), hortorSdk.login().then(e => {
                console.log(m[26592] + JSON.stringify(e)), r.do_login(e);
              }).catch(e => {
                console.log(m[26593], e);
              }), o.hide()) : r.weak_login();
            }));
          }
        }, fail: function () {
          r.weak_login();
        } }) : r.weak_login();
    }, weak_login: function () {
      hortorSdk.weakLogin().then(e => {
        console.log(m[26597], e), this.do_login(e);
      }).catch(e => {
        console.log(m[26598], e), l.login && l.login(1, { errMsg: m[26599] });
      });
    }, do_login: function (e) {
      var t = this;var o = t.getPublicData();if (o.userInfo = e.encryptUserInfo || e.userInfo, o.timestamp = e.timestamp, o.sign = e.sign, o.is_from_min = 1, G$SIANL && m[268] == typeof G$SIANL) for (var r in G$SIANL) o[r] = G$SIANL[r];wx.request({ url: m[26600] + HOST + m[26601], method: m[26251], dataType: m[5287], header: { "content-type": m[26355] }, data: o, success: function (e) {
          if (console.log(m[26602]), console.log(e), 200 === e.statusCode) {
            var o = e.data;if (o.state) {
              partner_user_data.uid = o.data.openid, partner_user_data.uniqueIdNew = o.data.ext.uniqueId;try {
                wx.setStorageSync(m[26603], o.data.sdk_token), wx.setStorageSync(m[26604], o.data.user_id), wx.setStorageSync(m[26605], o.data.username), o.data.ext && wx.setStorageSync(m[26606], o.data.ext);
              } catch (e) {}e = { userid: o.data.user_id, account: o.data.nick_name, token: o.data.token, openid: o.data.ext.uniqueId, invite_uid: o.data.invite_uid || "", invite_nickname: o.data.invite_nickname || "", invite_head_img: o.data.invite_head_img || "", head_img: o.data.head_img || "", is_client: o.data.is_client || "0", ios_pay: o.data.ios_pay || "0" };l.login && l.login(0, e);
            } else l.login && l.login(1, { errMsg: o.msg });hortorSdk.setGameUserInfo(), t.getShareInfo(m[26607], function (e) {
              console.log(m[26608]);var o = m[317];var r = hortorSdk.getShareData({ shareType: o });console.log(m[26609], JSON.stringify(r)), wx.onShareAppMessage(function () {
                return t.logStartShare(m[26607]), hortorSdk.sharePointShow(o), { title: r.title, imageUrl: r.imageUrl, query: r.query + "&" + e.query };
              });
            });
          } else l.login && l.login(1, { errMsg: m[26610] });
        } });
    }, share: function (e) {
      l.share = m[26017] == typeof callback ? callback : null;var t = e.type || m[26326];console.log(m[26611] + t);var n = this;this.getShareInfo(t, function (e) {
        var o = m[26612];var r = hortorSdk.getShareData({ shareType: o });console.log(m[26613], r), n.logStartShare(t), hortorSdk.sharePointShow(o), wx.shareAppMessage({ title: r.title, imageUrl: r.imageUrl, query: r.query + "&" + e.query });
      });
    }, logStartShare: function (e) {
      var o = wx.getStorageSync(m[26603]);wx.request({ url: m[26600] + HOST + m[26614], method: m[26251], dataType: m[5287], header: { "content-type": m[26355] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: o, server_id: G$SIALN ? G$SIALN.server_id : "", role_id: G$SIALN ? G$SIALN.role_id : "", type: e }, success: function (e) {} });
    }, is_authorize: function (o) {
      console.log(m[26615]), wx.getSetting({ success: function (e) {
          e.authSetting[m[26591]] ? o(1) : o(0);
        } });
    }, go_authorize: function (e, o) {
      console.log(m[26616]), (userInfoBtn = hortorSdk.createGetUserInfoBtn({ type: m[4182], image: m[26617], style: { left: e.left, top: e.top, width: e.width, height: e.height, lineHeight: e.height, textAlign: m[1451], fontSize: 16, borderRadius: 4 } })) && (userInfoBtn.show(), userInfoBtn.onTap(e => {
        e && e.userInfo ? (console.log(m[26596]), hortorSdk.updateUserInfo().then(e => {
          console.log(m[26618], e), o(1);
        }).catch(e => {
          console.log(m[26619], e), o(0);
        })) : (console.log(m[26620]), o(0)), userInfoBtn.hide();
      }));
    }, hideUserInfoBtn: function () {
      userInfoBtn && userInfoBtn.hide();
    }, openService: function () {
      hortorSdk.customerService({ showMessageCard: !0, success: e => {
          console.log(m[26621], e);
        }, fail: e => {
          console.log(m[26622], e);
        } });
    }, goCustomer: function (e) {
      hortorSdk.goCustomer({ playerId: e.roleid, playerName: e.rolename }).then(e => {
        console.log(m[26623]);
      }).catch(e => {
        console.log(m[26624], e);
      });
    }, checkGameVersion: function (e, r) {
      console.log(m[26625]);wx.getStorageSync(m[26603]);wx.request({ url: m[26600] + HOST + "/game/min/?ac=checkGameVersion", method: m[26251], dataType: m[5287], header: { "content-type": m[26355] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, game_ver: e }, success: function (e) {
          var o;console.log(m[26626]), console.log(e), 200 == e.statusCode && (o = e.data).state ? r && r(o.data) : r && r({ develop: 0 });
        } });
    }, getShareInfo: function (e, o) {
      console.log(m[26627]);var r = wx.getStorageSync(m[26603]);wx.request({ url: m[26600] + HOST + m[26628], method: m[26251], dataType: m[5287], header: { "content-type": m[26355] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, type: e, server_id: G$SIALN ? G$SIALN.server_id : "", role_id: G$SIALN ? G$SIALN.role_id : "", no_log: 1 }, success: function (e) {
          console.log(m[26629]), console.log(e), 200 == e.statusCode ? (e = e.data).state ? o && o(e.data) : l.share && l.share(1, { errMsg: m[26630] + e.msg }) : l.share && l.share(1, { errMsg: m[26631] });
        } });
    }, updateShare: function (e, o, r, t, n, a) {
      console.log(m[26632]);var i = wx.getStorageSync(m[26603]);wx.request({ url: m[26600] + HOST + m[26633], method: m[26251], dataType: m[5287], header: { "content-type": m[26355] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: i, invite: e, invite_type: o, is_new: r, role_id: t, sever_id: n, scene: a }, success: function (e) {
          console.log(m[26634]), console.log(e);
        } });
    }, msgCheck: function (e, o) {
      console.log(m[26635]);var r = wx.getStorageSync(m[26603]);wx.request({ url: m[26600] + HOST + m[26636] + config.partner_id + "/" + config.game_pkg, method: m[26251], dataType: m[5287], header: { "content-type": m[26355] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, sdk_token: r, content: e, uId: partner_user_data.uid }, success: function (e) {
          console.log(m[26637]), console.log(e), o && o(e);
        } });
    }, isSubscribe: function (o) {
      console.log(m[26638]);var e = wx.getStorageSync(m[26606]);wx.request({ url: m[26600] + HOST + m[26639] + config.partner_id + "/" + config.game_pkg, method: m[26251], dataType: m[5287], header: { "content-type": m[26355] }, data: { openid: e.uniqueId }, success: function (e) {
          console.log(m[26640], e), 1 == e.data.state ? o({ status: 1 }) : o({ status: 0 });
        } });
    }, pay: function (e, o) {
      this.startPay(e, o);
    }, startPay: function (e, o) {
      console.log(m[26641]), console.log(e);l.pay = m[26017] == typeof o ? o : null;var r = wx.getStorageSync(m[26603]);var t = wx.getStorageSync(m[26606]);r || t ? (o = wx.getSystemInfoSync(), t = { cpbill: e.cpbill, productid: e.productid, productname: e.productname, productdesc: e.productdesc, serverid: e.serverid, servername: e.servername, roleid: e.roleid, rolename: e.rolename, rolelevel: e.rolelevel, price: e.price, extension: e.extension, sdk_token: r, session_key: t, platform: o.platform }, this.order_data = t, (o = this.getPublicData()).order_data = JSON.stringify(t), o.is_from_min = 1, wx.request({ url: m[26600] + HOST + m[26642], method: m[26251], dataType: m[5287], header: { "content-type": m[26355] }, data: o, success: function (e) {
          console.log(m[26643]), console.log(e), 200 === e.statusCode ? (e = e.data).state && e.data.pay_data ? (console.log(m[26644] + JSON.stringify(e.data.pay_data)), m[26173] === device ? (console.log(m[26645]), hortorSdk.jumpPay(e.data.pay_data).then(e => {
            console.log(m[26623]);
          }).catch(e => {
            console.log(m[26624], e), l.pay && l.pay(1, { errMsg: e.errMsg });
          })) : (console.log(m[26646]), hortorSdk.midasPay(e.data.pay_data).then(e => {
            console.log(m[26647]);
          }).catch(e => {
            console.log(m[26648], e), l.pay && l.pay(1, { errMsg: e.errMsg });
          }))) : l.pay && l.pay(1, { errMsg: e.msg }) : l.login && l.login(1, { errMsg: m[26610] });
        } })) : l.pay && l.pay(1, { errMsg: m[26649] });
    }, logCreateRole: function (e) {
      var o = wx.getStorageSync(m[26604]);var r = wx.getStorageSync(m[26605]);var t = wx.getStorageSync(m[26606]);var n = {};n.user_id = o, n.user_name = r, n.role_id = e.roleid, n.role_lev = e.rolelevel, n.role_name = e.rolename, n.server_id = e.serverid, e.roleid && e.serverid && (G$SIALN = { role_id: e.roleid, server_id: e.serverid }), this.log(m[6], n);t = { roleId: e.roleid, roleName: e.rolename, serverId: e.serverid, level: e.rolelevel, roleCtime: Date.parse(new Date()), id: t.uniqueId };hortorSdk.setGameUserInfo(t), this.roleCreateReport(0);
    }, roleCreateReport: function (e = 1) {
      wx.request({ url: m[26600] + HOST + m[26650] + config.partner_id + "/" + config.game_pkg, method: m[26251], dataType: m[5287], header: { "content-type": m[26355] }, data: { game_pkg: config.game_pkg, partner_id: config.partner_id, uniqueId: partner_user_data.uid, is_valid: 1 === e ? 1 : 0 }, success: function (e) {
          console.log(m[26651], e);
        } });
    }, logEnterGame: function (e, r) {
      var o = wx.getStorageSync(m[26604]);var t = wx.getStorageSync(m[26605]);var n = wx.getStorageSync(m[26606]);var a = {};a.user_id = o, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (G$SIALN = { role_id: e.roleid, server_id: e.serverid }), hortorSdk.checkSwitches({ switches: [m[26652]] }).then(e => {
        console.log(m[26653], e), e.antiaddicted && hortorSdk.checkRest(() => {
          console.log(m[26654]);
        });
      }).catch(e => {
        console.log(`[SDK]检查防沉迷开关返回失败，errCode=${e.errCode} errMsg=${e.errMsg}`);
      }), this.log(m[5168], a);n = { roleId: e.roleid, roleName: e.rolename, serverId: e.serverid, level: e.rolelevel, roleCtime: e.rolecreatetime ? 1e3 * e.rolecreatetime : 0, id: n.uniqueId };hortorSdk.setGameUserInfo(n), G$SIANL && this.updateShare(G$SIANL.invite, G$SIANL.invite_type, G$SIANL.is_new, e.roleid, e.serverid, G$SIANL.scene), hortorSdk.checkSwitches({ switches: [m[26585]] }).then(e => {
        console.log(m[26655], e);var o = 0;e.iospay && (o = 1), r && r({ show_pay: o });
      }).catch(e => {
        console.log(`[SDK]获取支付开关返回失败，errCode=${e.errCode} errMsg=${e.errMsg}`), r && r({ show_pay: 0 });
      });
    }, logRoleUpLevel: function (e, r) {
      var o = wx.getStorageSync(m[26604]);var t = wx.getStorageSync(m[26605]);var n = wx.getStorageSync(m[26606]);var a = {};a.user_id = o, a.user_name = t, a.role_id = e.roleid, a.role_lev = e.rolelevel, a.role_name = e.rolename, a.server_id = e.serverid, e.roleid && e.serverid && (G$SIALN = { role_id: e.roleid, server_id: e.serverid }), this.log(m[26656], a);n = { roleId: e.roleid, roleName: e.rolename, serverId: e.serverid, level: e.rolelevel, roleCtime: e.rolecreatetime ? 1e3 * e.rolecreatetime : 0, id: n.uniqueId };hortorSdk.setGameUserInfo(n), 80 <= e.rolelevel && this.roleCreateReport(1), hortorSdk.checkSwitches({ switches: [m[26585]] }).then(e => {
        console.log(m[26655], e);var o = 0;e.iospay && (o = 1), r && r({ show_pay: o });
      }).catch(e => {
        console.log(`[SDK]获取支付开关返回失败，errCode=${e.errCode} errMsg=${e.errMsg}`), r && r({ show_pay: 0 });
      });
    }, uuid: function (e, o) {
      var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var t,
          n = [];var a;if (e = e || r.length, o) for (t = 0; t < o; t++) n[t] = r[0 | Math.random() * e];else for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", t = 0; t < 36; t++) n[t] || (a = 0 | 16 * Math.random(), n[t] = r[19 == t ? 3 & a | 8 : a]);return n.join("");
    }, getPublicData: function () {
      var e = wx.getSystemInfoSync();var o = wx.getStorageSync(m[26582]);var r = wx.getStorageSync(m[26583]);var t = wx.getStorageSync(m[26584]);return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id, partner_label: config.partner_label, ad_code: t, uuid: o, idfv: r, dname: e.model, mac: m[26657], net_type: 0 == e.wifiSignal ? "4G" : m[26658], os_ver: e.system, sdk_ver: e.version, game_ver: config.game_ver, device: m[26174] == e.platform ? 1 : 2 };
    }, log: function (e, o) {
      var r = this.getPublicData();for (var t in o) r[t] = o[t];console.log(m[26659] + e), console.log(r), wx.request({ url: m[26600] + HOST + m[26660] + e + m[26661] + encodeURIComponent(JSON.stringify(r)) });
    }, getDate: function () {
      var e = new Date();return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }, downloadClient: function () {
      wx.openCustomerServiceConversation();
    } };
}function run(e, o, r) {
  e in G$SNILA && G$SNILA[e](o, r);
}exports.init = function (e, o) {
  run(m[353], e, o);
}, exports.login = function (e) {
  run(m[26277], "", e);
}, exports.pay = function (e, o) {
  run(m[26316], e, o);
}, exports.openService = function () {
  run(m[22507]);
}, exports.goCustomer = function (e, o, r, t, n, a) {
  run(m[26327], { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n });
}, exports.logCreateRole = function (e, o, r, t, n) {
  run(m[26323], { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n });
}, exports.logEnterGame = function (e, o, r, t, n, a, i) {
  run("logEnterGame", { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n, rolecreatetime: a, rolepower: i.rolepower }, i.callback);
}, exports.logRoleUpLevel = function (e, o, r, t, n, a, i) {
  run(m[26662], { serverid: e, servername: o, roleid: r, rolename: t, rolelevel: n, rolecreatetime: a, rolepower: i.rolepower }, i.callback);
}, exports.share = function (e) {
  run(m[26326], { type: e });
}, exports.msgCheck = function (e, o) {
  run(m[10695], e, o);
}, exports.downloadClient = function () {
  run(m[26663]);
}, exports.getConfig = function () {
  return { game_id: config.game_id, game_pkg: config.game_pkg, partner_id: config.partner_id };
}, exports.getPublicData = function () {
  run(m[26664]);
}, exports.roleCreateReport = function (e) {
  run(m[26665], e);
}, exports.isSubscribe = function (e) {
  run(m[26666], e);
}, exports.is_authorize = function (e) {
  run(m[26667], e);
}, exports.go_authorize = function (e, o) {
  run(m[26668], e, o);
}, exports.hideUserInfoBtn = function (e) {
  run(m[26669], e);
};