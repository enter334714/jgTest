var K = wx.$S;
import serou4 from '../sskss/ss6ksg.js';window['versions'] = { 'wxVersion': window[K[300003]][K[300004]] }, window[K[300101]] = ![], window['s$4X'] = 0x1, window[K[300102]] = 0x1, window['s$PX4'] = !![], window[K[300103]] = !![], window['s$MTP4X'] = '', window['s$X4'] = { 'base_cdn': 'https://cdn-tjqy.shzbkj.com/weixin_0/', 'cdn': 'https://cdn-tjqy.shzbkj.com/weixin_0/' }, s$X4['pay_infos'] = {}, s$X4[K[300104]] = '0', s$X4['version'] = window['versions']['wxVersion'], s$X4[K[300077]] = '', s$X4['os'] = '1', s$X4['sdk_name'] = K[300105], s$X4[K[300106]] = 'https://api-tjqytest.shzbkj.com', s$X4[K[300107]] = 'https://log-tjqytest.shzbkj.com', s$X4[K[300108]] = 'https://pay-tjqytest.shzbkj.com', s$X4[K[300109]] = K[300110], s$X4[K[300111]] = '1', s$X4[K[300112]] = '', s$X4[K[300113]] = '', s$X4['from_scene'] = 0x0, s$X4['serverList'] = {}, s$X4[K[300114]] = parseInt(s$X4[K[300111]]), s$X4[K[300115]] = s$X4[K[300111]], s$X4['selectedServer'] = {}, s$X4['s$TX'] = 'https://jgcenter.sh9130.com/clientlog/', s$X4['showLogo'] = ![], s$X4['debugUsers'] = K[300116], s$X4[K[300117]] = Date[K[300118]](), s$X4[K[300119]] = K[300120], s$X4['exposeType'] = '_a', s$X4[K[300121]] = 0x2, s$X4['lastVersion'] = 0x7c1, s$X4['wxVersion'] = window['versions']['wxVersion'], s$X4[K[300122]] = ![], s$X4[K[300071]] = ![], s$X4[K[300073]] = ![], s$X4[K[300076]] = ![], window['s$P4X'] = 0x5, window['s$P4'] = ![], window['s$4P'] = ![], window['s$XP4'] = ![], window['loadServerRes'] = ![], window['loadLoadingRes'] = ![], window['s$X4P'] = ![], window['s$PX'] = ![], window['s$XP'] = ![], window['s$4PX'] = ![], window[K[300123]] = function (gj1qsp) {
  console[K[300021]](K[300123], gj1qsp), wx[K[300124]]({}), wx['showModal']({ 'title': K[300044], 'content': gj1qsp, 'success'(pgqy) {
      if (pgqy[K[300125]]) console[K[300021]](K[300126]);else pgqy[K[300127]] && console[K[300021]](K[300128]);
    } });
}, window['s$TPX4'] = function (jbgq1) {
  console[K[300021]](K[300129], jbgq1), s$TX4P(), wx['showModal']({ 'title': K[300044], 'content': jbgq1, 'confirmText': K[300130], 'cancelText': K[300131], 'success'(kv0z9w) {
      if (kv0z9w[K[300125]]) window['s$XT']();else kv0z9w[K[300127]] && (console[K[300021]](K[300132]), wx[K[300133]]({}));
    } });
}, window['s$4MX'] = function (psdy5) {
  console[K[300021]](K[300134], psdy5), wx['showModal']({ 'title': K[300044], 'content': psdy5, 'confirmText': K[300135], 'showCancel': ![], 'complete'(xm2_i) {
      console[K[300021]](K[300132]), wx[K[300133]]({});
    } });
}, window['s$TP4X'] = ![], window['s$TXP4'] = function (p8qg) {
  window['s$TP4X'] = !![], wx['showLoading'](p8qg);
}, window['s$TX4P'] = function () {
  window['s$TP4X'] && (window['s$TP4X'] = ![], wx[K[300124]]({}));
}, window['s$T4PX'] = function (yqgjps) {
  window[K[300019]]['instance']['s$T4PX'](yqgjps);
}, window['msgCheck'] = function (pyjgsq, e5a4$) {
  serou4['msgCheck'](pyjgsq, function (_nxmi2) {
    _nxmi2 && _nxmi2[K[300136]] ? _nxmi2[K[300136]]['state'] == 0x1 ? e5a4$(!![]) : (e5a4$(![]), console[K[300000]](K[300137] + _nxmi2[K[300136]]['msg'])) : console[K[300021]]('msgCheck', _nxmi2);
  });
}, window['s$T4XP'] = function (n7m2t) {
  console[K[300021]]('getJsURL', n7m2t);
}, window['s$TX4'] = function (uare4$) {}, window['s$T4X'] = function ($eua4d, w_ic, dhay5$) {}, window['s$T4'] = function (shqgyp) {
  console[K[300021]](K[300138], shqgyp), window[K[300019]]['instance']['closeAuthor'](), window[K[300019]]['instance']['closeServer'](), window[K[300019]]['instance']['closeLoading']();
}, window['s$4T'] = function (jq1p8) {
  window['s$TPX4'](K[300139]);var k0wzc9 = { 'id': window['s$X4'][K[300008]], 'role': window['s$X4'][K[300009]], 'level': window['s$X4'][K[300010]], 'account': window['s$X4'][K[300011]], 'version': window['s$X4']['lastVersion'], 'cdn': window['s$X4'][K[300012]], 'pkgName': window['s$X4'][K[300112]], 'gamever': window[K[300003]][K[300004]], 'serverid': window['s$X4']['selectedServer'] ? window['s$X4']['selectedServer']['server_id'] : 0x0, 'systemInfo': window['systemInfo'], 'error': K[300140], 'stack': jq1p8 ? jq1p8 : K[300139] },
      zkor3v = JSON['stringify'](k0wzc9);console[K[300014]](K[300141] + zkor3v), window['s$TX'](zkor3v);
}, window['s$XT4'] = function (qs5y) {
  var r3uvoe = JSON['parse'](qs5y);r3uvoe[K[300142]] = window[K[300003]][K[300004]], r3uvoe['serverid'] = window['s$X4']['selectedServer'] ? window['s$X4']['selectedServer']['server_id'] : 0x0, r3uvoe['systemInfo'] = window['systemInfo'];var gqhyps = JSON['stringify'](r3uvoe);console[K[300014]](K[300143] + gqhyps), window['s$TX'](gqhyps);
}, window['s$X4T'] = function (a4u$e, $udea) {
  var i_x0wc = { 'id': window['s$X4'][K[300008]], 'role': window['s$X4'][K[300009]], 'level': window['s$X4'][K[300010]], 'account': window['s$X4'][K[300011]], 'version': window['s$X4']['lastVersion'], 'cdn': window['s$X4'][K[300012]], 'pkgName': window['s$X4'][K[300112]], 'gamever': window[K[300003]][K[300004]], 'serverid': window['s$X4']['selectedServer'] ? window['s$X4']['selectedServer']['server_id'] : 0x0, 'systemInfo': window['systemInfo'], 'error': a4u$e, 'stack': $udea },
      w0_k9c = JSON['stringify'](i_x0wc);console[K[300144]](K[300145] + w0_k9c), window['s$TX'](w0_k9c);
}, window['s$TX'] = function (uzor3) {
  if (window['s$X4'][K[300078]] == 'devtools') return;var o3zuvr = s$X4['s$TX'] + K[300146] + s$X4[K[300011]];wx['request']({ 'url': o3zuvr, 'method': K[300147], 'data': uzor3, 'header': { 'content-type': 'application/json', 'cache-control': K[300148] }, 'success': function (vzowk) {
      DEBUG && console[K[300021]](K[300149], o3zuvr, uzor3, vzowk);
    }, 'fail': function (v3uo) {
      DEBUG && console[K[300021]](K[300149], o3zuvr, uzor3, v3uo);
    }, 'complete': function () {} });
}, window[K[300150]] = function () {
  function sqp5h() {
    return ((0x1 + Math[K[300151]]()) * 0x10000 | 0x0)[K[300152]](0x10)['substring'](0x1);
  }return sqp5h() + sqp5h() + '-' + sqp5h() + '-' + sqp5h() + '-' + sqp5h() + '+' + sqp5h() + sqp5h() + sqp5h();
}, window['s$XT'] = function () {
  console[K[300021]](K[300153]);var r3ovzu = serou4[K[300154]]();s$X4[K[300115]] = r3ovzu[K[300155]], s$X4[K[300114]] = r3ovzu[K[300155]], s$X4[K[300111]] = r3ovzu[K[300155]], s$X4[K[300112]] = r3ovzu[K[300156]];var hya$5 = { 'game_ver': s$X4['version'] };s$X4[K[300113]] = this[K[300150]](), s$TXP4({ 'title': K[300157] }), serou4[K[300158]](hya$5, this['s$4TX'][K[300159]](this));
};var wx_develop = ![];window['s$4TX'] = function (_2icmx) {
  var vor3ue = _2icmx[K[300160]];wx_develop = vor3ue == 0x1, console[K[300021]](K[300161] + vor3ue + K[300162] + (vor3ue == 0x1) + K[300163] + _2icmx[K[300004]] + K[300164] + window['versions']['wxVersion']);if (!_2icmx[K[300004]] || window['s$MP4XT'](window['versions']['wxVersion'], _2icmx[K[300004]]) < 0x0) console[K[300021]](K[300165]), s$X4[K[300106]] = 'https://api-tjqy.shzbkj.com', s$X4[K[300107]] = 'https://log-tjqy.shzbkj.com', s$X4[K[300108]] = 'https://pay-tjqy.shzbkj.com', s$X4[K[300012]] = 'https://cdn-tjqy-fx.shzbkj.com/weixin_1/', s$X4['spareCdn'] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', s$X4['version_name'] = K[300166], s$X4[K[300122]] = ![];else window['s$MP4XT'](window['versions']['wxVersion'], _2icmx[K[300004]]) == 0x0 ? (console[K[300021]](K[300167]), s$X4[K[300106]] = 'https://api-tjqytest.shzbkj.com', s$X4[K[300107]] = 'https://log-tjqytest.shzbkj.com', s$X4[K[300108]] = 'https://pay-tjqytest.shzbkj.com', s$X4[K[300012]] = 'https://cdn-tjqy-fx.shzbkj.com/weixin_0/', s$X4['spareCdn'] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', s$X4['version_name'] = K[300168], s$X4[K[300122]] = !![]) : (console[K[300021]](K[300169]), s$X4[K[300106]] = 'https://api-tjqytest.shzbkj.com', s$X4[K[300107]] = 'https://log-tjqytest.shzbkj.com', s$X4[K[300108]] = 'https://pay-tjqytest.shzbkj.com', s$X4[K[300012]] = 'https://cdn-tjqy-fx.shzbkj.com/weixin_0/', s$X4['spareCdn'] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', s$X4['version_name'] = K[300168], s$X4[K[300122]] = ![]);s$X4['from_scene'] = config[K[300170]] ? config[K[300170]] : 0x0, this['s$PXT4'](), this['s$PX4T'](), window['sdkLoginRetry'] = 0x5, s$TXP4({ 'title': K[300171] }), serou4[K[300172]](this['s$4XT'][K[300159]](this));
}, window['sdkLoginRetry'] = 0x5, window['s$4XT'] = function (_ixc0w, rueov) {
  if (_ixc0w == 0x0 && rueov && rueov[K[300173]]) {
    s$X4['sdk_token'] = rueov[K[300173]];var t7nx2 = this;s$TXP4({ 'title': K[300174] }), sendApi(s$X4[K[300106]], 'User.login', { 'platform': s$X4['sdk_name'], 'partner_id': s$X4[K[300111]], 'token': rueov[K[300173]], 'game_pkg': s$X4[K[300112]], 'deviceId': s$X4[K[300113]], 'scene': K[300175] + s$X4['from_scene'] }, this['s$PTX4'][K[300159]](this), s$P4X, s$4T);
  } else rueov && rueov['errMsg'] && window['sdkLoginRetry'] > 0x0 && (rueov['errMsg'][K[300072]](K[300176]) != -0x1 || rueov['errMsg'][K[300072]](K[300177]) != -0x1 || rueov['errMsg'][K[300072]](K[300178]) != -0x1 || rueov['errMsg'][K[300072]](K[300179]) != -0x1 || rueov['errMsg'][K[300072]](K[300180]) != -0x1 || rueov['errMsg'][K[300072]](K[300181]) != -0x1) ? (window['sdkLoginRetry']--, serou4[K[300172]](this['s$4XT'][K[300159]](this))) : (window['s$X4T']('sdkOnLoginError', JSON['stringify']({ 'status': _ixc0w, 'data': rueov })), window['s$TPX4'](K[300182] + (rueov && rueov['errMsg'] ? '，' + rueov['errMsg'] : '')));
}, window['s$PTX4'] = function (o3vu) {
  if (!o3vu) {
    window['s$TPX4']('User.login failed');return;
  }if (o3vu['state'] != 'success') {
    window['s$TPX4']('User.login failed: ' + o3vu['state']);return;
  }s$X4['userId'] = String(o3vu[K[300011]]), s$X4[K[300011]] = String(o3vu[K[300011]]), s$X4[K[300053]] = String(o3vu[K[300053]]), s$X4[K[300115]] = String(o3vu[K[300053]]), s$X4[K[300183]] = String(o3vu[K[300183]]), s$X4['php_sign'] = String(o3vu['sign']), s$X4['php_signtime'] = String(o3vu[K[300184]]), s$X4['sign'] = '';var g1sqp = this;s$TXP4({ 'title': K[300185] }), sendApi(s$X4[K[300106]], K[300186], { 'partner_id': s$X4[K[300111]], 'uid': s$X4[K[300011]], 'version': s$X4['version'], 'game_pkg': s$X4[K[300112]], 'device': s$X4[K[300113]] }, g1sqp['s$PT4X'][K[300159]](g1sqp), s$P4X, s$4T);
}, window['s$PT4X'] = function (m27xtn) {
  if (!m27xtn) {
    window['s$TPX4'](K[300187]);return;
  }if (m27xtn['state'] != 'success') {
    window['s$TPX4'](K[300188] + m27xtn['state']);return;
  }if (!m27xtn[K[300136]] || m27xtn[K[300136]][K[300007]] == 0x0) {
    window['s$TPX4'](K[300189]);return;
  }s$X4['newRegister'] = m27xtn['is_new'], s$X4['selectedServer'] = { 'server_id': String(m27xtn[K[300136]][0x0]['server_id']), 'server_name': String(m27xtn[K[300136]][0x0]['server_name']), 'entry_ip': m27xtn[K[300136]][0x0][K[300190]], 'entry_port': parseInt(m27xtn[K[300136]][0x0][K[300191]]), 'status': s$4TPX(m27xtn[K[300136]][0x0]), 'start_time': m27xtn[K[300136]][0x0]['start_time'], 'cdn': s$X4[K[300012]] }, this['s$MTPX4']();
}, window['s$MTPX4'] = function () {
  if (s$X4['newRegister'] == 0x1) {
    var w0_xic = s$X4['selectedServer']['status'];if (w0_xic === -0x1 || w0_xic === 0x0) {
      window['s$TPX4'](w0_xic === -0x1 ? K[300192] : K[300193]);return;
    }s$4TXP(0x0, s$X4['selectedServer']['server_id']), window[K[300019]]['instance'][K[300194]](s$X4['newRegister']);
  } else window[K[300019]]['instance'][K[300195]](), s$TX4P();window['s$XP'] = !![], window['s$4XTP'](), window['s$4XPT']();
}, window['s$PXT4'] = function () {
  var orzuv = this;sendApi(s$X4[K[300106]], 'User.getCdnVersion', { 'game_pkg': s$X4[K[300112]], 'version_name': s$X4['version_name'] }, function (eu4ar$) {
    if (!eu4ar$) {
      window['s$TPX4']('User.getCdnVersion failed');return;
    }if (eu4ar$['state'] != 'success') {
      window['s$TPX4']('User.getCdnVersion failed: state=' + eu4ar$['state']);return;
    }if (!eu4ar$[K[300136]] || !eu4ar$[K[300136]]['version']) {
      window['s$TPX4']('User.getCdnVersion failed: version=' + (eu4ar$[K[300136]] && eu4ar$[K[300136]]['version']));return;
    }eu4ar$[K[300136]][K[300196]] && eu4ar$[K[300136]][K[300196]][K[300007]] > 0xa && (s$X4['base_cdn'] = eu4ar$[K[300136]][K[300196]], s$X4[K[300012]] = eu4ar$[K[300136]][K[300196]]), eu4ar$[K[300136]]['version'] && (s$X4['lastVersion'] = eu4ar$[K[300136]]['version']), console[K[300000]]('lastVersion:' + s$X4['lastVersion'] + ', version_name:' + s$X4['version_name']), window['s$X4P'] = !![], window['s$4XTP'](), window['s$4XPT']();
  });
}, window['pkgOptions'], window['s$PX4T'] = function () {
  sendApi(s$X4[K[300106]], K[300197], { 'game_pkg': s$X4[K[300112]] }, s$P4TX);
}, window['s$P4TX'] = function (r3voe) {
  if (r3voe['state'] === 'success' && r3voe[K[300136]]) {
    window['pkgOptions'] = r3voe[K[300136]];for (var gj8b6 in r3voe[K[300136]]) {
      s$X4[gj8b6] = r3voe[K[300136]][gj8b6];
    }
  } else console[K[300000]]('reqPkgOptionsCallBack ' + r3voe['state']);window['s$PX'] = !![], window['s$4XPT']();
}, window[K[300198]] = function (m2_in, cixw0_, yp5hqs, vkwo, b6j1l8, b16fl, jg18bq, m7xnt, spyd5h) {
  b6j1l8 = String(b6j1l8);var o3vru = jg18bq,
      wkv9 = m7xnt;s$X4['pay_infos'][b6j1l8] = { 'productid': b6j1l8, 'productname': o3vru, 'productdesc': wkv9, 'roleid': m2_in, 'rolename': cixw0_, 'rolelevel': yp5hqs, 'price': b16fl, 'callback': spyd5h }, sendApi(s$X4[K[300108]], K[300199], { 'game_pkg': s$X4[K[300112]], 'server_id': s$X4['selectedServer']['server_id'], 'server_name': s$X4['selectedServer']['server_name'], 'level': yp5hqs, 'uid': s$X4[K[300011]], 'role_id': m2_in, 'role_name': cixw0_, 'product_id': b6j1l8, 'product_name': o3vru, 'product_desc': wkv9, 'money': b16fl, 'partner_id': s$X4[K[300111]] }, toPayCallBack, s$P4X, s$4T);
}, window[K[300200]] = function (jb86g) {
  if (jb86g) {
    if (jb86g[K[300201]] === 0xc8 || jb86g['state'] == 'success') {
      var w9z0ck = s$X4['pay_infos'][String(jb86g[K[300202]])];if (w9z0ck[K[300203]]) w9z0ck[K[300203]](jb86g[K[300202]], jb86g[K[300204]], -0x1);serou4[K[300205]]({ 'cpbill': jb86g[K[300204]], 'productid': jb86g[K[300202]], 'productname': w9z0ck[K[300206]], 'productdesc': w9z0ck['productdesc'], 'serverid': s$X4['selectedServer']['server_id'], 'servername': s$X4['selectedServer']['server_name'], 'roleid': w9z0ck[K[300207]], 'rolename': w9z0ck[K[300208]], 'rolelevel': w9z0ck[K[300209]], 'price': w9z0ck[K[300210]], 'extension': JSON['stringify']({ 'cp_order_id': jb86g[K[300204]] }) }, function (gqbj, h4d$5) {
        w9z0ck[K[300203]] && gqbj == 0x0 && w9z0ck[K[300203]](jb86g[K[300202]], jb86g[K[300204]], gqbj);console[K[300000]](JSON['stringify']({ 'type': K[300211], 'status': gqbj, 'data': jb86g, 'role_name': w9z0ck[K[300208]] }));if (gqbj === 0x0) {} else {
          if (gqbj === 0x1) {} else {
            if (gqbj === 0x2) {}
          }
        }
      });
    } else alert(jb86g[K[300000]]);
  }
}, window['s$P4XT'] = function () {}, window['s$TP4'] = function (qpg1j, nm2xi, xnt7m, z39vok, hs5ypd) {
  serou4[K[300212]](s$X4['selectedServer']['server_id'], s$X4['selectedServer']['server_name'] || s$X4['selectedServer']['server_id'], qpg1j, nm2xi, xnt7m), sendApi(s$X4[K[300106]], 'User.create_role', { 'game_pkg': s$X4[K[300112]], 'server_id': s$X4['selectedServer']['server_id'], 'role_id': qpg1j, 'uid': s$X4[K[300011]], 'role_name': nm2xi, 'role_type': z39vok, 'level': xnt7m });
}, window['s$T4P'] = function (jb81g, xmtni, hygs, mn2_, zkwc9, h$day, k09zvw, yqhsg, u$34e, e$a) {
  s$X4[K[300008]] = jb81g, s$X4[K[300009]] = xmtni, s$X4[K[300010]] = hygs, serou4[K[300213]](s$X4['selectedServer']['server_id'], s$X4['selectedServer']['server_name'] || s$X4['selectedServer']['server_id'], jb81g, xmtni, hygs), sendApi(s$X4[K[300106]], 'User.update_role', { 'game_pkg': s$X4[K[300112]], 'server_id': s$X4['selectedServer']['server_id'], 'role_id': jb81g, 'uid': s$X4[K[300011]], 'role_name': xmtni, 'role_type': mn2_, 'level': hygs, 'evolution': zkwc9 });
}, window['s$PT4'] = function (uar$e, kv3o, kc9w_, w_c0k, hads5y, qygh, h5sya, jp1q8, k3zov9, jb6g18) {
  s$X4[K[300008]] = uar$e, s$X4[K[300009]] = kv3o, s$X4[K[300010]] = kc9w_, serou4[K[300214]](s$X4['selectedServer']['server_id'], s$X4['selectedServer']['server_name'] || s$X4['selectedServer']['server_id'], uar$e, kv3o, kc9w_), sendApi(s$X4[K[300106]], 'User.update_role', { 'game_pkg': s$X4[K[300112]], 'server_id': s$X4['selectedServer']['server_id'], 'role_id': uar$e, 'uid': s$X4[K[300011]], 'role_name': kv3o, 'role_type': w_c0k, 'level': kc9w_, 'evolution': hads5y });
}, window['s$P4T'] = function (zv3ok9) {}, window['s$TP'] = function (qgpjy) {
  serou4['share']('share', function (aue$4d) {
    qgpjy && qgpjy(aue$4d);
  });
}, window[K[300215]] = function () {
  serou4[K[300215]]();
}, window[K[300216]] = function () {
  serou4[K[300217]]();
}, window['s$PT'] = function (qb1) {
  window['s$4PT'] = qb1, window['s$4PT'] && window['s$4TP'] && (console[K[300000]](K[300094] + window['s$4TP']['scene']), window['s$4PT'](window['s$4TP']), window['s$4TP'] = null);
}, window['s$XTP4'] = function (tx2m7n, e4d$a, ci90w, zwck) {
  window['send']('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', { 'game_pkg': window['s$X4'][K[300112]], 'role_id': e4d$a, 'server_id': ci90w }, zwck);
}, window['s$XT4P'] = function (sghqy, ver3u) {
  function qgspyj(hy5sp) {
    var g1spj = [],
        orue3v = [],
        _nim2 = window[K[300003]][K[300218]];for (var _k09w in _nim2) {
      var qjp8g1 = Number(_k09w);(!sghqy || !sghqy[K[300007]] || sghqy[K[300072]](qjp8g1) != -0x1) && (orue3v['push'](_nim2[_k09w]), g1spj['push']([qjp8g1, 0x3]));
    }window['s$MP4XT'](window['SDKVersion'], K[300219]) >= 0x0 ? (console[K[300021]](K[300220]), serou4['subscribeMessage'] && serou4['subscribeMessage'](orue3v, function ($eaud4) {
      console[K[300021]](K[300221]), console[K[300021]]($eaud4);if ($eaud4 && $eaud4['errMsg'] == 'requestSubscribeMessage:ok') for (var r4$u in _nim2) {
        if ($eaud4[_nim2[r4$u]] == K[300222]) {
          var u3e4o = Number(r4$u);for (var ph5ys = 0x0; ph5ys < g1spj[K[300007]]; ph5ys++) {
            if (g1spj[ph5ys][0x0] == u3e4o) {
              g1spj[ph5ys][0x1] = 0x1;break;
            }
          }
        }
      }window['s$MP4XT'](window['SDKVersion'], K[300223]) >= 0x0 ? wx[K[300224]]({ 'withSubscriptions': !![], 'success': function (vkw9o) {
          var j6bl18 = vkw9o['subscriptionsSetting']['itemSettings'];if (j6bl18) {
            console[K[300021]](K[300225]), console[K[300021]](j6bl18);for (var g81qpj in _nim2) {
              if (j6bl18[_nim2[g81qpj]] == K[300222]) {
                var xc0mi = Number(g81qpj);for (var i2xn = 0x0; i2xn < g1spj[K[300007]]; i2xn++) {
                  if (g1spj[i2xn][0x0] == xc0mi) {
                    g1spj[i2xn][0x1] = 0x2;break;
                  }
                }
              }
            }console[K[300021]](g1spj), ver3u && ver3u(g1spj);
          } else console[K[300021]](K[300226]), console[K[300021]](vkw9o), console[K[300021]](g1spj), ver3u && ver3u(g1spj);
        }, 'fail': function () {
          console[K[300021]](K[300227]), console[K[300021]](g1spj), ver3u && ver3u(g1spj);
        } }) : (console[K[300021]](K[300228] + window['SDKVersion']), console[K[300021]](g1spj), ver3u && ver3u(g1spj));
    })) : (console[K[300021]](K[300229] + window['SDKVersion']), console[K[300021]](g1spj), ver3u && ver3u(g1spj)), wx[K[300230]](qgspyj);
  }wx[K[300231]](qgspyj);
}, window['s$XPT4'] = { 'isSuccess': ![], 'level': K[300232], 'isCharging': ![] }, window['s$XP4T'] = function (ci09) {
  wx[K[300085]]({ 'success': function ($deua4) {
      var phds5 = window['s$XPT4'];phds5['isSuccess'] = !![], phds5[K[300087]] = Number($deua4[K[300087]])[K[300233]](0x0), phds5['isCharging'] = $deua4['isCharging'], ci09 && ci09(phds5['isSuccess'], phds5[K[300087]], phds5['isCharging']);
    }, 'fail': function (mx7tn2) {
      console[K[300021]](K[300234], mx7tn2['errMsg']);var vore3 = window['s$XPT4'];ci09 && ci09(vore3['isSuccess'], vore3[K[300087]], vore3['isCharging']);
    } });
}, window['send'] = function (lf6b18, xc2i_, u4re, x0_wc, k3ovzr, tmxni2, k9wvz0, yjsgp) {
  x0_wc == undefined && (x0_wc = 0x1);var qjg8b1 = new XMLHttpRequest();qjg8b1['onreadystatechange'] = function () {
    if (qjg8b1[K[300235]] == 0x4) {
      if (qjg8b1['status'] == 0xc8 || qjg8b1['status'] == 0x12d) {
        var da$eu4 = qjg8b1['response'];da$eu4 = JSON['parse'](qjg8b1['response']);if (!tmxni2 || tmxni2(da$eu4, qjg8b1, lf6b18)) {
          u4re && u4re(da$eu4);return;
        } else console[K[300000]](lf6b18), console[K[300014]](da$eu4);
      }x0_wc - 0x1 > 0x0 ? setTimeout(function () {
        send(lf6b18, xc2i_, u4re, x0_wc - 0x1, k3ovzr, tmxni2);
      }, 0x3e8) : k3ovzr && k3ovzr(JSON['stringify']({ 'url': lf6b18, 'status': qjg8b1['status'], 'response': qjg8b1['response'], 'responseType': qjg8b1['responseType'] }));
    }
  }, qjg8b1[K[300236]](k9wvz0 || K[300237], lf6b18), qjg8b1['responseType'] = K[300238], qjg8b1['setRequestHeader'](K[300239], yjsgp || 'application/json'), qjg8b1['send'](xc2i_);
}, window['sendApi'] = function (shpq5y, hy5ads, pysd5h, dh$ay, w0kc9z, sdy5ah, h$y5a) {
  !pysd5h && (pysd5h = {});var jb816l = Math[K[300240]](Date[K[300118]]() / 0x3e8);pysd5h[K[300184]] = jb816l, pysd5h[K[300241]] = hy5ads;var wk0z9v = Object['keys'](pysd5h)['sort'](),
      hsqg = '',
      tni2m = '';for (var korz3v = 0x0; korz3v < wk0z9v[K[300007]]; korz3v++) {
    hsqg = hsqg + (korz3v == 0x0 ? '' : '&') + wk0z9v[korz3v] + pysd5h[wk0z9v[korz3v]], tni2m = tni2m + (korz3v == 0x0 ? '' : '&') + wk0z9v[korz3v] + '=' + encodeURIComponent(pysd5h[wk0z9v[korz3v]]);
  }hsqg = hsqg + s$X4[K[300109]];var g6b18 = 'sign=' + md5(hsqg);send(shpq5y + '?' + tni2m + (tni2m == '' ? '' : '&') + g6b18, null, dh$ay, w0kc9z, sdy5ah, h$y5a || function (a54$d) {
    return a54$d['state'] == 'success';
  }, null, K[300242]);
}, window['s$X4TP'] = function (o3ervu, roue) {
  var auer$4 = 0x0;s$X4['selectedServer'] && (auer$4 = s$X4['selectedServer']['server_id']), sendApi(s$X4[K[300107]], 'UserLog.reportUidStep', { 'partnerId': s$X4[K[300111]], 'gamePkg': s$X4[K[300112]], 'logTime': Math[K[300240]](Date[K[300118]]() / 0x3e8), 'platformUid': s$X4[K[300183]], 'type': o3ervu, 'serverId': auer$4 }, null, 0x2, null, function () {
    return !![];
  });
}, window['s$X4PT'] = function (e5$ad4) {
  sendApi(s$X4[K[300106]], K[300243], { 'partner_id': s$X4[K[300111]], 'uid': s$X4[K[300011]], 'version': s$X4['version'], 'game_pkg': s$X4[K[300112]], 'device': s$X4[K[300113]] }, s$TPX, s$P4X, s$4T);
}, window['s$TPX'] = function (z3okv9) {
  if (z3okv9['state'] === 'success' && z3okv9[K[300136]]) {
    z3okv9[K[300136]]['unshift']({ 'id': -0x2, 'name': K[300244] }), z3okv9[K[300136]]['unshift']({ 'id': -0x1, 'name': K[300245] }), s$X4['groupList'] = z3okv9[K[300136]];if (window[K[300246]]) window[K[300246]]['showGroupList']();
  } else s$X4['hasGroupReq'] = ![], window['s$TPX4'](K[300247] + z3okv9['state']);
}, window['s$TXP'] = function (yqhs) {
  sendApi(s$X4[K[300106]], K[300248], { 'partner_id': s$X4[K[300111]], 'uid': s$X4[K[300011]], 'version': s$X4['version'], 'game_pkg': s$X4[K[300112]], 'device': s$X4[K[300113]] }, s$PTX, s$P4X, s$4T);
}, window['s$PTX'] = function (wix_c0) {
  s$X4['hasServerReq'] = ![];if (wix_c0['state'] === 'success' && wix_c0[K[300136]]) {
    for (var cxmi = 0x0; cxmi < wix_c0[K[300136]][K[300007]]; cxmi++) {
      wix_c0[K[300136]][cxmi]['status'] = s$4TPX(wix_c0[K[300136]][cxmi]);
    }s$X4['serverList'][-0x1] = window[K[300249]](wix_c0[K[300136]]), window[K[300246]]['showServerList'](-0x1);
  } else window['s$TPX4'](K[300250] + wix_c0['state']);
}, window['req_server_owner_status'] = function (zv93o) {
  sendApi(s$X4[K[300106]], K[300248], { 'partner_id': s$X4[K[300111]], 'uid': s$X4[K[300011]], 'version': s$X4['version'], 'game_pkg': s$X4[K[300112]], 'device': s$X4[K[300113]] }, zv93o, s$P4X, s$4T);
}, window['s$PXT'] = function (gpqjs1, jg1p8) {
  sendApi(s$X4[K[300106]], K[300251], { 'partner_id': s$X4[K[300111]], 'uid': s$X4[K[300011]], 'version': s$X4['version'], 'game_pkg': s$X4[K[300112]], 'device': s$X4[K[300113]], 'server_group_id': jg1p8 }, s$XTP, s$P4X, s$4T);
}, window['s$XTP'] = function (xin2_m) {
  s$X4['hasServerReq'] = ![];if (xin2_m['state'] === 'success' && xin2_m[K[300136]] && xin2_m[K[300136]][K[300136]]) {
    var nimtx2 = xin2_m[K[300136]]['server_group_id'],
        itnxm2 = [];for (var lj86b = 0x0; lj86b < xin2_m[K[300136]][K[300136]][K[300007]]; lj86b++) {
      xin2_m[K[300136]][K[300136]][lj86b]['status'] = s$4TPX(xin2_m[K[300136]][K[300136]][lj86b]), (itnxm2[K[300007]] == 0x0 || xin2_m[K[300136]][K[300136]][lj86b]['status'] != 0x0) && (itnxm2[itnxm2[K[300007]]] = xin2_m[K[300136]][K[300136]][lj86b]);
    }s$X4['serverList'][nimtx2] = window[K[300249]](itnxm2), window[K[300246]]['showServerList'](nimtx2);
  } else window['s$TPX4']('reqServerListCallBack ' + xin2_m['state']);
}, window['s$MXP4'] = function (j1spq) {
  sendApi(s$X4[K[300106]], 'Server.getRecommendServerList', { 'partner_id': s$X4[K[300111]], 'uid': s$X4[K[300011]], 'version': s$X4['version'], 'game_pkg': s$X4[K[300112]], 'device': s$X4[K[300113]] }, reqServerRecommendCallBack, s$P4X, s$4T);
}, window[K[300252]] = function (kv9z0w) {
  s$X4['hasServerReq'] = ![];if (kv9z0w['state'] === 'success' && kv9z0w[K[300136]]) {
    for (var o3kvr = 0x0; o3kvr < kv9z0w[K[300136]][K[300007]]; o3kvr++) {
      kv9z0w[K[300136]][o3kvr]['status'] = s$4TPX(kv9z0w[K[300136]][o3kvr]);
    }s$X4['serverList'][-0x2] = window[K[300249]](kv9z0w[K[300136]]), window[K[300246]]['showServerList'](-0x2);
  } else alert(K[300253] + kv9z0w['state']);
}, window[K[300249]] = function (jyqsp) {
  if (!jyqsp && jyqsp[K[300007]] <= 0x0) return jyqsp;for (let jqgp18 = 0x0; jqgp18 < jyqsp[K[300007]]; jqgp18++) {
    jyqsp[jqgp18]['is_recommend'] && jyqsp[jqgp18]['is_recommend'] == 0x1 && (jyqsp[jqgp18]['server_name'] += K[300254]);
  }return jyqsp;
}, window['s$XPT'] = function (ovurz3, k9vz3) {
  ovurz3 = ovurz3 || s$X4['selectedServer']['server_id'], sendApi(s$X4[K[300106]], K[300255], { 'type': '4', 'game_pkg': s$X4[K[300112]], 'server_id': ovurz3 }, k9vz3);
}, window['req_multi_server_notice'] = function (zkv, r$eu4a, u4ro3e, nxmti) {
  u4ro3e = u4ro3e || s$X4['selectedServer']['server_id'], sendApi(s$X4[K[300106]], K[300256], { 'type': zkv, 'game_pkg': r$eu4a, 'server_id': u4ro3e }, nxmti);
}, window['s$4TPX'] = function (v9wk0z) {
  if (v9wk0z) {
    if (v9wk0z['status'] == 0x1) {
      if (v9wk0z['online_status'] == 0x1) return 0x2;else return 0x1;
    } else return v9wk0z['status'] == 0x0 ? 0x0 : -0x1;
  }return -0x1;
}, window['s$4TXP'] = function (js1qp, hpsy5d) {
  s$X4['last_check_ban'] = { 'step': js1qp, 'server_id': hpsy5d };var ix0w = this;s$TXP4({ 'title': K[300257] }), sendApi(s$X4[K[300106]], 'User.checkInfo', { 'partner_id': s$X4[K[300111]], 'uid': s$X4[K[300011]], 'game_pkg': s$X4[K[300112]], 'server_id': hpsy5d, 'platform': s$X4[K[300053]], 'platform_uid': s$X4[K[300183]], 'check_login_time': s$X4['php_signtime'], 'check_login_sign': s$X4['php_sign'], 'version_name': s$X4['version_name'] }, s$4PTX, s$P4X, s$4T, function (_ci90) {
    return _ci90['state'] == 'success' || _ci90[K[300000]] == K[300258] || _ci90[K[300000]] == 'sign_err';
  });
}, window['s$4PTX'] = function (o3vzrk) {
  var qsjg1 = this;if (o3vzrk['state'] === 'success' && o3vzrk[K[300136]]) {
    var a5hy$ = s$X4['selectedServer'];a5hy$[K[300259]] = s$X4[K[300114]], a5hy$['sign'] = String(o3vzrk[K[300136]]['login_sign']), a5hy$[K[300117]] = parseInt(o3vzrk[K[300136]][K[300184]]);if (o3vzrk[K[300136]]['server_num']) a5hy$['server_num'] = parseInt(o3vzrk[K[300136]]['server_num']);else a5hy$['server_num'] = parseInt(o3vzrk[K[300136]]['server_id']);a5hy$['is_domain'] = 0x0, a5hy$[K[300012]] = s$X4['base_cdn'], a5hy$['resver'] = o3vzrk[K[300136]]['cdn_version'], a5hy$['server_options'] = o3vzrk[K[300136]]['server_options'], console[K[300021]]('server_options\uFF1A' + JSON['stringify'](a5hy$['server_options'])), s$X4['newRegister'] == 0x1 && a5hy$['server_options'] && a5hy$['server_options']['show_btn'] == 0x1 && (s$X4['showGetBtn'] = 0x1, window[K[300019]]['instance']['s$M4']()), s$4PXT();
  } else sendApi(s$X4[K[300106]], 'User.login', { 'platform': s$X4['sdk_name'], 'partner_id': s$X4[K[300111]], 'token': s$X4['sdk_token'], 'game_pkg': s$X4[K[300112]], 'deviceId': s$X4[K[300113]], 'scene': K[300175] + s$X4['from_scene'] }, function (gpj8q1) {
    if (gpj8q1['state'] == K[300260]) {
      window['s$TPX4']('User.login failed: ' + gpj8q1['state']);return;
    }s$X4['php_sign'] = String(gpj8q1['sign']), s$X4['php_signtime'] = String(gpj8q1[K[300184]]), setTimeout(function () {
      s$4TXP(s$X4['last_check_ban']['step'], s$X4['last_check_ban']['server_id']);
    }, 0x5dc);
  }, s$P4X, s$4T, function (uo3e4) {
    return uo3e4['state'] == 'success' || uo3e4['state'] == K[300260];
  });
}, window['s$4PXT'] = function () {
  ServerLoading['instance'][K[300194]](s$X4['newRegister']), window['s$P4'] = !![], window['s$4XPT']();
}, window['s$4XTP'] = function () {
  if (window['s$4P'] && window['s$XP4'] && window['loadServerRes'] && window['loadLoadingRes'] && window['s$X4P'] && window['s$XP']) {
    if (!window[K[300261]]['instance']) {
      console[K[300021]](K[300262] + window[K[300261]]['instance']);var ixc0m_ = wx['getLaunchOptionsSync'](),
          zvwo = ixc0m_['scene'] ? ixc0m_['scene'] : 0x0,
          eoru34 = { 'cdn': window['s$X4'][K[300012]], 'spareCdn': window['s$X4']['spareCdn'], 'newRegister': window['s$X4']['newRegister'], 'wxPC': window['s$X4'][K[300076]], 'wxIOS': window['s$X4'][K[300071]], 'wxAndroid': window['s$X4'][K[300073]], 'wxParam': { 'limitLoad': window['s$X4']['s$MTXP4'], 'benchmarkLevel': window['s$X4']['s$MTX4P'], 'wxFrom': window[K[300003]][K[300170]] == 'txcps' ? 0x1 : 0x0, 'wxSDKVersion': window['SDKVersion'] }, 'configType': window['s$X4'][K[300119]], 'exposeType': window['s$X4']['exposeType'], 'scene': zvwo };new window[K[300261]](eoru34, window['s$X4']['lastVersion'], window['s$MTP4X']);
    }
  }
}, window['s$4XPT'] = function () {
  if (window['s$4P'] && window['s$XP4'] && window['loadServerRes'] && window['loadLoadingRes'] && window['s$X4P'] && window['s$XP'] && window['s$P4'] && window['s$PX']) {
    s$TX4P();if (!s$4PX) {
      s$4PX = !![];if (!window[K[300261]]['instance']) window['s$4XTP']();var $54ade = 0x0,
          mtxi2 = wx[K[300263]]();mtxi2 && (window['s$X4'][K[300075]] && ($54ade = mtxi2[K[300067]]), console[K[300000]](K[300264] + mtxi2[K[300067]] + K[300265] + mtxi2[K[300068]] + K[300266] + mtxi2[K[300069]] + K[300267] + mtxi2[K[300070]] + K[300268] + mtxi2[K[300269]] + K[300270] + mtxi2[K[300271]]));var jgpyqs = {};for (const i9_w0 in s$X4['selectedServer']) {
        jgpyqs[i9_w0] = s$X4['selectedServer'][i9_w0];
      }var v9woz = { 'channel': window['s$X4'][K[300115]], 'account': window['s$X4'][K[300011]], 'userId': window['s$X4']['userId'], 'cdn': window['s$X4'][K[300012]], 'data': window['s$X4'][K[300136]], 'package': window['s$X4'][K[300104]], 'newRegister': window['s$X4']['newRegister'], 'pkgName': window['s$X4'][K[300112]], 'partnerId': window['s$X4'][K[300111]], 'platform_uid': window['s$X4'][K[300183]], 'deviceId': window['s$X4'][K[300113]], 'selectedServer': jgpyqs, 'configType': window['s$X4'][K[300119]], 'exposeType': window['s$X4']['exposeType'], 'debugUsers': window['s$X4']['debugUsers'], 'wxMenuTop': $54ade, 'wxShield': window['s$X4'][K[300122]] };if (window['pkgOptions']) for (var rvo3uz in window['pkgOptions']) {
        v9woz[rvo3uz] = window['pkgOptions'][rvo3uz];
      }window[K[300261]]['instance']['s$PM4X'](v9woz), setTimeout(() => {
        !wx_develop && new minitool();
      }, 0x2710);
    }
  } else console[K[300000]](K[300272] + window['s$4P'] + K[300273] + window['s$XP4'] + ',loadServerRes:' + window['loadServerRes'] + ',loadLoadingRes:' + window['loadLoadingRes'] + ',loadVersion:' + window['s$X4P'] + K[300274] + window['s$XP'] + ',isCheckBan:' + window['s$P4'] + K[300275] + window['s$PX']);
};