var G = wx.$G;
import azxnbm from '../z888z888basdz888/z8885sdkz888.js';window[G[620121]] = { 'wxVersion': window['config']['game_ver'] }, window[G[620122]] = ![], window['g80'] = 0x1, window[G[620123]] = 0x1, window['g608'] = !![], window[G[620124]] = !![], window['gGA608'] = '', window['g08'] = { 'base_cdn': G[620125], 'cdn': G[620125] }, g08[G[620126]] = {}, g08['package'] = '0', g08[G[620063]] = window[G[620121]][G[620127]], g08[G[620094]] = '', g08['os'] = '1', g08[G[620128]] = G[620129], g08[G[620130]] = G[620131], g08['logurl'] = 'https://log-tjqytest.shzbkj.com', g08[G[620132]] = G[620133], g08[G[620134]] = 'MQx0mYlUWO5XYKvgAIPKWgK1w722GKih', g08[G[620135]] = '1', g08['pkgName'] = '', g08[G[620136]] = '', g08[G[620137]] = 0x0, g08[G[620138]] = {}, g08[G[620139]] = parseInt(g08[G[620135]]), g08[G[620140]] = g08[G[620135]], g08[G[620018]] = {}, g08['gA0'] = 'https://jgcenter.sh9130.com/clientlog/', g08['showLogo'] = ![], g08['debugUsers'] = G[620141], g08[G[620142]] = Date[G[620115]](), g08['configType'] = G[620143], g08[G[620144]] = '_a', g08['loadingType'] = 0x2, g08[G[620016]] = 0x7c1, g08[G[620127]] = window[G[620121]][G[620127]], g08[G[620145]] = ![], g08[G[620086]] = ![], g08[G[620089]] = ![], g08[G[620092]] = ![], window['g680'] = 0x5, window['g68'] = ![], window['g86'] = ![], window['g068'] = ![], window[G[620146]] = ![], window['loadLoadingRes'] = ![], window['g086'] = ![], window['g60'] = ![], window['g06'] = ![], window['g860'] = ![], window[G[620147]] = function (_r$3) {
  console['log'](G[620147], _r$3), wx['hideLoading']({}), wx[G[620038]]({ 'title': G[620056], 'content': _r$3, 'success'(sbzmt) {
      if (sbzmt[G[620148]]) console['log'](G[620149]);else sbzmt[G[620150]] && console['log'](G[620151]);
    } });
}, window['gA608'] = function (zxmnb) {
  console['log']('loginAlert', zxmnb), gA086(), wx[G[620038]]({ 'title': G[620056], 'content': zxmnb, 'confirmText': G[620152], 'cancelText': G[620153], 'success'(intxby) {
      if (intxby[G[620148]]) window['g0A']();else intxby[G[620150]] && (console['log'](G[620154]), wx['exitMiniProgram']({}));
    } });
}, window[G[620155]] = function (a8lv76) {
  console['log'](G[620155], a8lv76), wx[G[620038]]({ 'title': G[620056], 'content': a8lv76, 'confirmText': G[620156], 'showCancel': ![], 'complete'(k7v6a) {
      console['log'](G[620154]), wx['exitMiniProgram']({});
    } });
}, window['gA680'] = ![], window['gA068'] = function (v657a) {
  window['gA680'] = !![], wx['showLoading'](v657a);
}, window['gA086'] = function () {
  window['gA680'] && (window['gA680'] = ![], wx['hideLoading']({}));
}, window['gA860'] = function (y2hcj) {
  window['ServerLoading'][G[620028]]['gA860'](y2hcj);
}, window['msgCheck'] = function (nxztb, avl6) {
  azxnbm['msgCheck'](nxztb, function (q8e6l3) {
    q8e6l3 && q8e6l3[G[620157]] ? q8e6l3[G[620157]][G[620158]] == 0x1 ? avl6(!![]) : (avl6(![]), console[G[620001]](G[620159] + q8e6l3[G[620157]]['msg'])) : console['log']('msgCheck', q8e6l3);
  });
}, window['gA806'] = function (tmsn) {
  console['log']('getJsURL', tmsn);
}, window['gA08'] = function (nbxtiz) {}, window['gA80'] = function (vkf54a, tmbz, srzm) {}, window['gA8'] = function (kfo54d) {
  console['log'](G[620160], kfo54d), window['ServerLoading'][G[620028]][G[620161]](), window['ServerLoading'][G[620028]][G[620162]](), window['ServerLoading'][G[620028]]['closeLoading']();
}, window['g8A'] = function (xybtn) {
  window['gA608'](G[620163]);var n_zs = { 'id': window['g08'][G[620012]], 'role': window['g08'][G[620013]], 'level': window['g08'][G[620014]], 'account': window['g08'][G[620015]], 'version': window['g08'][G[620016]], 'cdn': window['g08'][G[620017]], 'pkgName': window['g08']['pkgName'], 'gamever': window['config']['game_ver'], 'serverid': window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, 'systemInfo': window[G[620020]], 'error': G[620164], 'stack': xybtn ? xybtn : G[620163] },
      h2x = JSON['stringify'](n_zs);console[G[620021]](G[620165] + h2x), window['gA0'](h2x);
}, window['g0A8'] = function (msz$r) {
  var u4wd = JSON[G[620166]](msz$r);u4wd['gamever'] = window['config']['game_ver'], u4wd[G[620167]] = window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, u4wd[G[620020]] = window[G[620020]];var p09uw1 = JSON['stringify'](u4wd);console[G[620021]](G[620168] + p09uw1), window['gA0'](p09uw1);
}, window['g08A'] = function ($_srz, e$3l) {
  var d5u4f = { 'id': window['g08'][G[620012]], 'role': window['g08'][G[620013]], 'level': window['g08'][G[620014]], 'account': window['g08'][G[620015]], 'version': window['g08'][G[620016]], 'cdn': window['g08'][G[620017]], 'pkgName': window['g08']['pkgName'], 'gamever': window['config']['game_ver'], 'serverid': window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, 'systemInfo': window[G[620020]], 'error': $_srz, 'stack': e$3l },
      yxbtn = JSON['stringify'](d5u4f);console[G[620116]](G[620169] + yxbtn), window['gA0'](yxbtn);
}, window['gA0'] = function (ak4v5f) {
  if (window['g08'][G[620095]] == G[620170]) return;var pw1g = g08['gA0'] + G[620171] + g08[G[620015]];wx[G[620172]]({ 'url': pw1g, 'method': G[620173], 'data': ak4v5f, 'header': { 'content-type': G[620174], 'cache-control': G[620175] }, 'success': function (xm) {
      DEBUG && console['log']('clientlog:', pw1g, ak4v5f, xm);
    }, 'fail': function (ij2) {
      DEBUG && console['log']('clientlog:', pw1g, ak4v5f, ij2);
    }, 'complete': function () {} });
}, window['guild'] = function () {
  function k5fv7a() {
    return ((0x1 + Math[G[620176]]()) * 0x10000 | 0x0)['toString'](0x10)['substring'](0x1);
  }return k5fv7a() + k5fv7a() + '-' + k5fv7a() + '-' + k5fv7a() + '-' + k5fv7a() + '+' + k5fv7a() + k5fv7a() + k5fv7a();
}, window['g0A'] = function () {
  console['log'](G[620177]);var xhy2it = azxnbm['getConfig']();g08[G[620140]] = xhy2it[G[620178]], g08[G[620139]] = xhy2it[G[620178]], g08[G[620135]] = xhy2it[G[620178]], g08['pkgName'] = xhy2it['game_pkg'];var qe$83_ = { 'game_ver': g08[G[620063]] };g08[G[620136]] = this['guild'](), gA068({ 'title': G[620179] }), azxnbm[G[620180]](qe$83_, this['g8A0'][G[620181]](this));
}, window['g8A0'] = function (p10g9) {
  var r_$zms = p10g9[G[620182]];console['log'](G[620183] + r_$zms + G[620184] + (r_$zms == 0x1) + G[620185] + p10g9['game_ver'] + G[620186] + window[G[620121]][G[620127]]);if (!p10g9['game_ver'] || window['gG68A0'](window[G[620121]][G[620127]], p10g9['game_ver']) < 0x0) console['log'](G[620187]), g08[G[620130]] = G[620188], g08['logurl'] = 'https://log-tjqy.shzbkj.com', g08[G[620132]] = G[620189], g08[G[620017]] = G[620190], g08[G[620191]] = G[620192], g08[G[620193]] = 'xc', g08[G[620145]] = ![];else window['gG68A0'](window[G[620121]][G[620127]], p10g9['game_ver']) == 0x0 ? (console['log'](G[620194]), g08[G[620130]] = G[620131], g08['logurl'] = 'https://log-tjqytest.shzbkj.com', g08[G[620132]] = G[620133], g08[G[620017]] = G[620195], g08[G[620191]] = G[620192], g08[G[620193]] = G[620196], g08[G[620145]] = !![]) : (console['log'](G[620197]), g08[G[620130]] = G[620131], g08['logurl'] = 'https://log-tjqytest.shzbkj.com', g08[G[620132]] = G[620133], g08[G[620017]] = G[620195], g08[G[620191]] = G[620192], g08[G[620193]] = G[620196], g08[G[620145]] = ![]);g08[G[620137]] = config[G[620198]] ? config[G[620198]] : 0x0, this['g60A8'](), this['g608A'](), window['sdkLoginRetry'] = 0x5, gA068({ 'title': G[620199] }), azxnbm['login'](this['g80A'][G[620181]](this));
}, window['sdkLoginRetry'] = 0x5, window['g80A'] = function (hi2xy, ka4df) {
  if (hi2xy == 0x0 && ka4df && ka4df[G[620200]]) {
    g08[G[620201]] = ka4df[G[620200]];var v5k6a = this;gA068({ 'title': G[620202] }), sendApi(g08[G[620130]], 'User.login', { 'platform': g08[G[620128]], 'partner_id': g08[G[620135]], 'token': ka4df[G[620200]], 'game_pkg': g08['pkgName'], 'deviceId': g08[G[620136]], 'scene': G[620203] + g08[G[620137]] }, this['g6A08'][G[620181]](this), g680, g8A);
  } else ka4df && ka4df['errMsg'] && window['sdkLoginRetry'] > 0x0 && (ka4df['errMsg'][G[620087]](G[620204]) != -0x1 || ka4df['errMsg'][G[620087]](G[620205]) != -0x1 || ka4df['errMsg'][G[620087]](G[620206]) != -0x1 || ka4df['errMsg'][G[620087]](G[620207]) != -0x1 || ka4df['errMsg'][G[620087]](G[620208]) != -0x1 || ka4df['errMsg'][G[620087]](G[620209]) != -0x1) ? (window['sdkLoginRetry']--, azxnbm['login'](this['g80A'][G[620181]](this))) : (window['g08A']('sdkOnLoginError', JSON['stringify']({ 'status': hi2xy, 'data': ka4df })), window['gA608'](G[620210] + (ka4df && ka4df['errMsg'] ? '，' + ka4df['errMsg'] : '')));
}, window['g6A08'] = function (i2cyh) {
  if (!i2cyh) {
    window['g08A']('userLoginError', G[620211]), window['gA608']('User.login failed');return;
  }if (i2cyh[G[620158]] != G[620212]) {
    window['g08A']('userLoginError', JSON['stringify'](i2cyh)), window['gA608']('User.login failed: ' + i2cyh[G[620158]]);return;
  }g08[G[620213]] = String(i2cyh[G[620015]]), g08[G[620015]] = String(i2cyh[G[620015]]), g08[G[620067]] = String(i2cyh[G[620067]]), g08[G[620140]] = String(i2cyh[G[620067]]), g08[G[620214]] = String(i2cyh[G[620214]]), g08['php_sign'] = String(i2cyh['sign']), g08['php_signtime'] = String(i2cyh[G[620215]]), g08['sign'] = '';var u0wo1 = this;gA068({ 'title': G[620216] }), sendApi(g08[G[620130]], G[620217], { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, u0wo1['g6A80'][G[620181]](u0wo1), g680, g8A);
}, window['g6A80'] = function (m_znrs) {
  if (!m_znrs) {
    window['gA608'](G[620218]);return;
  }if (m_znrs[G[620158]] != G[620212]) {
    window['gA608'](G[620219] + m_znrs[G[620158]]);return;
  }if (!m_znrs[G[620157]] || m_znrs[G[620157]]['length'] == 0x0) {
    window['gA608'](G[620220]);return;
  }g08['newRegister'] = m_znrs[G[620221]], g08[G[620018]] = { 'server_id': String(m_znrs[G[620157]][0x0][G[620019]]), 'server_name': String(m_znrs[G[620157]][0x0][G[620222]]), 'entry_ip': m_znrs[G[620157]][0x0][G[620223]], 'entry_port': parseInt(m_znrs[G[620157]][0x0][G[620224]]), 'status': g06A(m_znrs[G[620157]][0x0]), 'start_time': m_znrs[G[620157]][0x0][G[620225]], 'cdn': g08[G[620017]] }, this['g806A']();
}, window['g806A'] = function () {
  if (g08['newRegister'] == 0x1) {
    var $_e38q = g08[G[620018]][G[620226]];if ($_e38q === -0x1 || $_e38q === 0x0) {
      window['gA608']($_e38q === -0x1 ? G[620227] : G[620228]);return;
    }g8A60(0x0, g08[G[620018]][G[620019]]), window['ServerLoading'][G[620028]]['openLoading'](g08['newRegister']);
  } else window['ServerLoading'][G[620028]][G[620229]](), gA086();window['g06'] = !![], window['g860A'](), window['g80A6']();
}, window['g60A8'] = function () {
  sendApi(g08[G[620130]], 'User.getCdnVersion', { 'game_pkg': g08['pkgName'], 'version_name': g08[G[620193]] }, this['reqVersionConfigCallBack'][G[620181]](this), g680, g8A);
}, window['reqVersionConfigCallBack'] = function (o1udw) {
  if (!o1udw) {
    window['gA608']('User.getCdnVersion failed');return;
  }if (o1udw[G[620158]] != G[620212]) {
    window['gA608']('User.getCdnVersion failed: state=' + o1udw[G[620158]]);return;
  }if (!o1udw[G[620157]] || !o1udw[G[620157]][G[620063]]) {
    window['gA608']('User.getCdnVersion failed: version=' + (o1udw[G[620157]] && o1udw[G[620157]][G[620063]]));return;
  }o1udw[G[620157]][G[620230]] && o1udw[G[620157]][G[620230]]['length'] > 0xa && (g08[G[620231]] = o1udw[G[620157]][G[620230]], g08[G[620017]] = o1udw[G[620157]][G[620230]]), o1udw[G[620157]][G[620063]] && (g08[G[620016]] = o1udw[G[620157]][G[620063]]), console[G[620001]](G[620232] + g08[G[620016]] + G[620233] + g08[G[620193]]), window['g086'] = !![], window['g860A'](), window['g80A6']();
}, window['pkgOptions'], window['g608A'] = function () {
  sendApi(g08[G[620130]], 'Common.get_option_pkg', { 'game_pkg': g08['pkgName'] }, this['g68A0'][G[620181]](this), g680, g8A);
}, window['g68A0'] = function (bsmtnz) {
  if (bsmtnz[G[620158]] === G[620212] && bsmtnz[G[620157]]) {
    window['pkgOptions'] = bsmtnz[G[620157]];for (var $ql8e in bsmtnz[G[620157]]) {
      g08[$ql8e] = bsmtnz[G[620157]][$ql8e];
    }
  } else console[G[620001]]('reqPkgOptionsCallBack ' + bsmtnz[G[620158]]);window['g60'] = !![], window['g80A6']();
}, window[G[620234]] = function (bixnyt, htiy, xyht, $mesr_, yjh2, la68v7, r_se$q, m_sr$, dw0o) {
  yjh2 = String(yjh2);var bnixt = r_se$q,
      btmzsn = m_sr$;g08[G[620126]][yjh2] = { 'productid': yjh2, 'productname': bnixt, 'productdesc': btmzsn, 'roleid': bixnyt, 'rolename': htiy, 'rolelevel': xyht, 'price': la68v7, 'callback': dw0o }, sendApi(g08[G[620132]], G[620235], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'server_name': g08[G[620018]][G[620222]], 'level': xyht, 'uid': g08[G[620015]], 'role_id': bixnyt, 'role_name': htiy, 'product_id': yjh2, 'product_name': bnixt, 'product_desc': btmzsn, 'money': la68v7, 'partner_id': g08[G[620135]] }, toPayCallBack, g680, g8A);
}, window[G[620236]] = function (d4fk5a) {
  if (d4fk5a) {
    if (d4fk5a[G[620237]] === 0xc8 || d4fk5a[G[620158]] == G[620212]) {
      var binty = g08[G[620126]][String(d4fk5a[G[620238]])];if (binty[G[620239]]) binty[G[620239]](d4fk5a[G[620238]], d4fk5a[G[620240]], -0x1);azxnbm[G[620241]]({ 'cpbill': d4fk5a[G[620240]], 'productid': d4fk5a[G[620238]], 'productname': binty[G[620242]], 'productdesc': binty[G[620243]], 'serverid': g08[G[620018]][G[620019]], 'servername': g08[G[620018]][G[620222]], 'roleid': binty[G[620244]], 'rolename': binty[G[620245]], 'rolelevel': binty[G[620246]], 'price': binty[G[620247]], 'extension': JSON['stringify']({ 'cp_order_id': d4fk5a[G[620240]] }) }, function (u1o4w, ztsmbn) {
        binty[G[620239]] && u1o4w == 0x0 && binty[G[620239]](d4fk5a[G[620238]], d4fk5a[G[620240]], u1o4w);console[G[620001]](JSON['stringify']({ 'type': G[620248], 'status': u1o4w, 'data': d4fk5a, 'role_name': binty[G[620245]] }));if (u1o4w === 0x0) {} else {
          if (u1o4w === 0x1) {} else {
            if (u1o4w === 0x2) {}
          }
        }
      });
    } else alert(d4fk5a[G[620001]]);
  }
}, window['g680A'] = function () {}, window['gA68'] = function (nzmbr, tiynb, eq_r3$, l37, kav67) {
  azxnbm['logCreateRole'](g08[G[620018]][G[620019]], g08[G[620018]][G[620222]] || g08[G[620018]][G[620019]], nzmbr, tiynb, eq_r3$), sendApi(g08[G[620130]], G[620249], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'role_id': nzmbr, 'uid': g08[G[620015]], 'role_name': tiynb, 'role_type': l37, 'level': eq_r3$ });
}, window['gA86'] = function (p19g0w, mxznb, mrzbsn, rms$_z, i2txy, d1wo4u, l738q, r$msz_, e_3$rq, nzbixt) {
  g08[G[620012]] = p19g0w, g08[G[620013]] = mxznb, g08[G[620014]] = mrzbsn, azxnbm['logEnterGame'](g08[G[620018]][G[620019]], g08[G[620018]][G[620222]] || g08[G[620018]][G[620019]], p19g0w, mxznb, mrzbsn), sendApi(g08[G[620130]], G[620250], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'role_id': p19g0w, 'uid': g08[G[620015]], 'role_name': mxznb, 'role_type': rms$_z, 'level': mrzbsn, 'evolution': i2txy });
}, window['g6A8'] = function (rznmb, rmnbs, alk7v6, oup1, p09, tyxi2, fakv54, $s_rm, ixbny, _3qer) {
  g08[G[620012]] = rznmb, g08[G[620013]] = rmnbs, g08[G[620014]] = alk7v6, azxnbm['logRoleUpLevel'](g08[G[620018]][G[620019]], g08[G[620018]][G[620222]] || g08[G[620018]][G[620019]], rznmb, rmnbs, alk7v6), sendApi(g08[G[620130]], G[620250], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'role_id': rznmb, 'uid': g08[G[620015]], 'role_name': rmnbs, 'role_type': oup1, 'level': alk7v6, 'evolution': p09 });
}, window['g68A'] = function (ka45f) {}, window['gA6'] = function (ser_q$) {
  azxnbm[G[620251]](G[620251], function (v8al7) {
    ser_q$ && ser_q$(v8al7);
  });
}, window[G[620252]] = function () {
  azxnbm[G[620252]]();
}, window[G[620253]] = function () {
  azxnbm[G[620254]]();
}, window[G[620111]] = function (u90) {
  window['g8A6'] = u90, window['g8A6'] && window['g6A'] && (console[G[620001]](G[620112] + window['g6A'][G[620113]]), window['g8A6'](window['g6A']), window['g6A'] = null);
}, window['g86A'] = function (o4u1fd, rszb, bhxity, du4o5f) {
  window[G[620255]]('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', { 'game_pkg': window['g08']['pkgName'], 'role_id': rszb, 'server_id': bhxity }, du4o5f);
}, window['g0A68'] = function (_re$sq, i2hyx) {
  function l38$(msnr_) {
    var p09g1w = [],
        u4fo = [],
        r$3qe = window['config'][G[620256]];for (var smrz_n in r$3qe) {
      var q38el = Number(smrz_n);(!_re$sq || !_re$sq['length'] || _re$sq[G[620087]](q38el) != -0x1) && (u4fo[G[620031]](r$3qe[smrz_n]), p09g1w[G[620031]]([q38el, 0x3]));
    }window['gG68A0'](window[G[620032]], G[620257]) >= 0x0 ? (console['log'](G[620258]), azxnbm['subscribeMessage'] && azxnbm['subscribeMessage'](u4fo, function (a7l6v8) {
      console['log'](G[620259]), console['log'](a7l6v8);if (a7l6v8 && a7l6v8['errMsg'] == 'requestSubscribeMessage:ok') for (var rs$_z in r$3qe) {
        if (a7l6v8[r$3qe[rs$_z]] == G[620260]) {
          var udo5f4 = Number(rs$_z);for (var m$rzs_ = 0x0; m$rzs_ < p09g1w['length']; m$rzs_++) {
            if (p09g1w[m$rzs_][0x0] == udo5f4) {
              p09g1w[m$rzs_][0x1] = 0x1;break;
            }
          }
        }
      }window['gG68A0'](window[G[620032]], G[620261]) >= 0x0 ? wx['getSetting']({ 'withSubscriptions': !![], 'success': function (q38e$l) {
          var hxciy = q38e$l['subscriptionsSetting']['itemSettings'];if (hxciy) {
            console['log'](G[620262]), console['log'](hxciy);for (var _e3q$r in r$3qe) {
              if (hxciy[r$3qe[_e3q$r]] == G[620260]) {
                var _$rzms = Number(_e3q$r);for (var qe38$l = 0x0; qe38$l < p09g1w['length']; qe38$l++) {
                  if (p09g1w[qe38$l][0x0] == _$rzms) {
                    p09g1w[qe38$l][0x1] = 0x2;break;
                  }
                }
              }
            }console['log'](p09g1w), i2hyx && i2hyx(p09g1w);
          } else console['log'](G[620263]), console['log'](q38e$l), console['log'](p09g1w), i2hyx && i2hyx(p09g1w);
        }, 'fail': function () {
          console['log'](G[620264]), console['log'](p09g1w), i2hyx && i2hyx(p09g1w);
        } }) : (console['log'](G[620265] + window[G[620032]]), console['log'](p09g1w), i2hyx && i2hyx(p09g1w));
    })) : (console['log'](G[620266] + window[G[620032]]), console['log'](p09g1w), i2hyx && i2hyx(p09g1w)), wx[G[620267]](l38$);
  }wx[G[620268]](l38$);
}, window['g0A86'] = { 'isSuccess': ![], 'level': G[620269], 'isCharging': ![] }, window['g06A8'] = function (sme_$r) {
  wx['getBatteryInfo']({ 'success': function ($83eq_) {
      var d4ow1 = window['g0A86'];d4ow1[G[620270]] = !![], d4ow1[G[620104]] = Number($83eq_[G[620104]])[G[620271]](0x0), d4ow1['isCharging'] = $83eq_['isCharging'], sme_$r && sme_$r(d4ow1[G[620270]], d4ow1[G[620104]], d4ow1['isCharging']);
    }, 'fail': function (du1w0) {
      console['log'](G[620272], du1w0['errMsg']);var w01pg9 = window['g0A86'];sme_$r && sme_$r(w01pg9[G[620270]], w01pg9[G[620104]], w01pg9['isCharging']);
    } });
}, window[G[620255]] = function (a756kv, $leq, bnztmx, xbht, kofd54, q_$38, v6l387, iyt2) {
  if (xbht == undefined) xbht = 0x1;wx[G[620172]]({ 'url': a756kv, 'method': v6l387 || G[620273], 'responseType': G[620274], 'data': $leq, 'header': { 'content-type': iyt2 || G[620174] }, 'success': function (_sz$m) {
      DEBUG && console['log'](G[620275], a756kv, info, _sz$m);if (_sz$m && _sz$m[G[620276]] == 0xc8) {
        var al687 = _sz$m[G[620157]];!q_$38 || q_$38(al687) ? bnztmx && bnztmx(al687) : window[G[620277]](a756kv, $leq, bnztmx, xbht, kofd54, q_$38, _sz$m);
      } else window[G[620277]](a756kv, $leq, bnztmx, xbht, kofd54, q_$38, _sz$m);
    }, 'fail': function (q$s_re) {
      DEBUG && console['log'](G[620278], a756kv, info, q$s_re), window[G[620277]](a756kv, $leq, bnztmx, xbht, kofd54, q_$38, q$s_re);
    }, 'complete': function () {} });
}, window[G[620277]] = function (q6l87, f45kad, g01pw, pow, u1wo0p, oufd41, tzxn) {
  pow - 0x1 > 0x0 ? setTimeout(function () {
    window[G[620255]](q6l87, f45kad, g01pw, pow - 0x1, u1wo0p, oufd41);
  }, 0x3e8) : u1wo0p && u1wo0p(JSON['stringify']({ 'url': q6l87, 'response': tzxn }));
}, window[G[620279]] = function ($smr_z, la6vk7, h2cyj, _$qsre, es_q$r, r_ns, dfu45o) {
  !h2cyj && (h2cyj = {});var cy2j = Math[G[620280]](Date[G[620115]]() / 0x3e8);h2cyj[G[620215]] = cy2j, h2cyj[G[620281]] = la6vk7;var xntzi = Object[G[620282]](h2cyj)[G[620283]](),
      _$3q = '',
      sbmzn = '';for (var fda54 = 0x0; fda54 < xntzi['length']; fda54++) {
    _$3q = _$3q + (fda54 == 0x0 ? '' : '&') + xntzi[fda54] + h2cyj[xntzi[fda54]], sbmzn = sbmzn + (fda54 == 0x0 ? '' : '&') + xntzi[fda54] + '=' + encodeURIComponent(h2cyj[xntzi[fda54]]);
  }_$3q = _$3q + g08[G[620134]];var uo14f = 'sign=' + md5(_$3q);send($smr_z + '?' + sbmzn + (sbmzn == '' ? '' : '&') + uo14f, null, _$qsre, es_q$r, r_ns, dfu45o || function (mzbrn) {
    return mzbrn[G[620158]] == G[620212];
  }, null, G[620284]);
}, window['g068A'] = function (m_nr, q63e8) {
  var rs$em = 0x0;g08[G[620018]] && (rs$em = g08[G[620018]][G[620019]]), sendApi(g08['logurl'], 'UserLog.reportUidStep', { 'partnerId': g08[G[620135]], 'gamePkg': g08['pkgName'], 'logTime': Math[G[620280]](Date[G[620115]]() / 0x3e8), 'platformUid': g08[G[620214]], 'type': m_nr, 'serverId': rs$em }, null, 0x2, null, function () {
    return !![];
  });
}, window['g08A6'] = function (lavk76) {
  sendApi(g08[G[620130]], 'Server.getServerGroup', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, g086A, g680, g8A);
}, window['g086A'] = function (rnmzs) {
  if (rnmzs[G[620158]] === G[620212] && rnmzs[G[620157]]) {
    rnmzs[G[620157]][G[620285]]({ 'id': -0x2, 'name': G[620286] }), rnmzs[G[620157]][G[620285]]({ 'id': -0x1, 'name': G[620287] }), g08['groupList'] = rnmzs[G[620157]];if (window[G[620288]]) window[G[620288]][G[620289]]();
  } else g08[G[620290]] = ![], window['gA608'](G[620291] + rnmzs[G[620158]]);
}, window['gA60'] = function (dou54f) {
  sendApi(g08[G[620130]], 'Server.getServerByUid', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, gA06, g680, g8A);
}, window['gA06'] = function (oud01w) {
  g08[G[620292]] = ![];if (oud01w[G[620158]] === G[620212] && oud01w[G[620157]]) {
    for (var o0u1dw = 0x0; o0u1dw < oud01w[G[620157]]['length']; o0u1dw++) {
      oud01w[G[620157]][o0u1dw][G[620226]] = g06A(oud01w[G[620157]][o0u1dw]);
    }g08[G[620138]][-0x1] = window['changeServerName'](oud01w[G[620157]]), window[G[620288]][G[620293]](-0x1);
  } else window['gA608'](G[620294] + oud01w[G[620158]]);
}, window[G[620295]] = function (l67a8v) {
  sendApi(g08[G[620130]], 'Server.getServerByUid', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, l67a8v, g680, g8A);
}, window['g6A0'] = function (kfd4a5, l8e) {
  sendApi(g08[G[620130]], 'Server.getServerByGroup', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]], 'server_group_id': l8e }, g60A, g680, g8A);
}, window['g60A'] = function (rz) {
  g08[G[620292]] = ![];if (rz[G[620158]] === G[620212] && rz[G[620157]] && rz[G[620157]][G[620157]]) {
    var ihy2xc = rz[G[620157]]['server_group_id'],
        bxtyni = [];for (var o4wd1 = 0x0; o4wd1 < rz[G[620157]][G[620157]]['length']; o4wd1++) {
      rz[G[620157]][G[620157]][o4wd1][G[620226]] = g06A(rz[G[620157]][G[620157]][o4wd1]), (bxtyni['length'] == 0x0 || rz[G[620157]][G[620157]][o4wd1][G[620226]] != 0x0) && (bxtyni[bxtyni['length']] = rz[G[620157]][G[620157]][o4wd1]);
    }g08[G[620138]][ihy2xc] = window['changeServerName'](bxtyni), window[G[620288]][G[620293]](ihy2xc);
  } else window['gA608'](G[620296] + rz[G[620158]]);
}, window['gG680'] = function (e3$_q8) {
  sendApi(g08[G[620130]], 'Server.getRecommendServerList', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, reqServerRecommendCallBack, g680, g8A);
}, window[G[620297]] = function (eql) {
  g08[G[620292]] = ![];if (eql[G[620158]] === G[620212] && eql[G[620157]]) {
    for (var xniy = 0x0; xniy < eql[G[620157]]['length']; xniy++) {
      eql[G[620157]][xniy][G[620226]] = g06A(eql[G[620157]][xniy]);
    }g08[G[620138]][-0x2] = window['changeServerName'](eql[G[620157]]), window[G[620288]][G[620293]](-0x2);
  } else alert(G[620298] + eql[G[620158]]);
}, window['changeServerName'] = function (v8376l) {
  if (!v8376l && v8376l['length'] <= 0x0) return v8376l;for (let ofu5d4 = 0x0; ofu5d4 < v8376l['length']; ofu5d4++) {
    v8376l[ofu5d4][G[620299]] && v8376l[ofu5d4][G[620299]] == 0x1 && (v8376l[ofu5d4][G[620222]] += G[620300]);
  }return v8376l;
}, window['g0A6'] = function (vf45, xcyih) {
  vf45 = vf45 || g08[G[620018]][G[620019]], sendApi(g08[G[620130]], 'Common.get_anno', { 'type': '4', 'game_pkg': g08['pkgName'], 'server_id': vf45 }, xcyih);
}, window[G[620301]] = function ($req_, hixc2, lqe386, e_q) {
  lqe386 = lqe386 || g08[G[620018]][G[620019]], sendApi(g08[G[620130]], 'Common.get_new_anno', { 'type': $req_, 'game_pkg': hixc2, 'server_id': lqe386 }, e_q);
}, window['g06A'] = function (n_rzsm) {
  if (n_rzsm) {
    if (n_rzsm[G[620226]] == 0x1) {
      if (n_rzsm[G[620302]] == 0x1) return 0x2;else return 0x1;
    } else return n_rzsm[G[620226]] == 0x0 ? 0x0 : -0x1;
  }return -0x1;
}, window['g8A60'] = function ($r_mse, e3l8q6) {
  g08[G[620303]] = { 'step': $r_mse, 'server_id': e3l8q6 };var _$qe3 = this;gA068({ 'title': G[620304] }), sendApi(g08[G[620130]], G[620305], { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'game_pkg': g08['pkgName'], 'server_id': e3l8q6, 'platform': g08[G[620067]], 'platform_uid': g08[G[620214]], 'check_login_time': g08['php_signtime'], 'check_login_sign': g08['php_sign'], 'version_name': g08[G[620193]] }, g8A06, g680, g8A, function (xtybni) {
    return xtybni[G[620158]] == G[620212] || xtybni[G[620001]] == G[620306] || xtybni[G[620001]] == 'sign_err';
  });
}, window['g8A06'] = function (nbztsm) {
  var mtbns = this;if (nbztsm[G[620158]] === G[620212] && nbztsm[G[620157]]) {
    var ibtyx = g08[G[620018]];ibtyx[G[620307]] = g08[G[620139]], ibtyx['sign'] = String(nbztsm[G[620157]]['login_sign']), ibtyx[G[620142]] = parseInt(nbztsm[G[620157]][G[620215]]);if (nbztsm[G[620157]][G[620308]]) ibtyx[G[620308]] = parseInt(nbztsm[G[620157]][G[620308]]);else ibtyx[G[620308]] = parseInt(nbztsm[G[620157]][G[620019]]);ibtyx[G[620309]] = 0x0, ibtyx[G[620017]] = g08[G[620231]], ibtyx[G[620310]] = nbztsm[G[620157]][G[620311]], ibtyx[G[620312]] = nbztsm[G[620157]][G[620312]], console['log'](G[620313] + JSON['stringify'](ibtyx[G[620312]])), g08['newRegister'] == 0x1 && ibtyx[G[620312]] && ibtyx[G[620312]][G[620314]] == 0x1 && (g08[G[620315]] = 0x1, window['ServerLoading'][G[620028]]['gG80']()), g86A0();
  } else g08[G[620303]][G[620316]] >= 0x3 ? (g8A(JSON['stringify'](nbztsm)), window['gA608'](G[620317] + nbztsm[G[620158]])) : sendApi(g08[G[620130]], 'User.login', { 'platform': g08[G[620128]], 'partner_id': g08[G[620135]], 'token': g08[G[620201]], 'game_pkg': g08['pkgName'], 'deviceId': g08[G[620136]], 'scene': G[620203] + g08[G[620137]] }, function (ibtxyh) {
    if (!ibtxyh || ibtxyh[G[620158]] != G[620212]) {
      window['gA608']('User.login failed: ' + ibtxyh && ibtxyh[G[620158]]);return;
    }g08['php_sign'] = String(ibtxyh['sign']), g08['php_signtime'] = String(ibtxyh[G[620215]]), setTimeout(function () {
      g8A60(g08[G[620303]][G[620316]] + 0x1, g08[G[620303]][G[620019]]);
    }, 0x5dc);
  }, g680, g8A, function (q_e$8) {
    return q_e$8[G[620158]] == G[620212] || q_e$8[G[620158]] == G[620318];
  });
}, window['g86A0'] = function () {
  ServerLoading[G[620028]]['openLoading'](g08['newRegister']), window['g68'] = !![], window['g80A6']();
}, window['g860A'] = function () {
  if (window['g86'] && window['g068'] && window[G[620146]] && window['loadLoadingRes'] && window['g086'] && window['g06']) {
    if (!window[G[620319]][G[620028]]) {
      console['log'](G[620320] + window[G[620319]][G[620028]]);var lq7863 = wx['getLaunchOptionsSync'](),
          ka657v = lq7863[G[620113]] ? lq7863[G[620113]] : 0x0,
          l3q6e8 = { 'cdn': window['g08'][G[620017]], 'spareCdn': window['g08'][G[620191]], 'newRegister': window['g08']['newRegister'], 'wxPC': window['g08'][G[620092]], 'wxIOS': window['g08'][G[620086]], 'wxAndroid': window['g08'][G[620089]], 'wxParam': { 'limitLoad': window['g08']['gGA680'], 'benchmarkLevel': window['g08']['gGA068'], 'wxFrom': window['config'][G[620198]] == G[620321] ? 0x1 : 0x0, 'wxSDKVersion': window[G[620032]] }, 'configType': window['g08']['configType'], 'exposeType': window['g08'][G[620144]], 'scene': ka657v };new window[G[620319]](l3q6e8, window['g08'][G[620016]], window['gGA608']);
    }
  }
}, window['g80A6'] = function () {
  if (window['g86'] && window['g068'] && window[G[620146]] && window['loadLoadingRes'] && window['g086'] && window['g06'] && window['g68'] && window['g60']) {
    gA086();if (!g860) {
      g860 = !![];if (!window[G[620319]][G[620028]]) window['g860A']();var mbznx = 0x0,
          v6k57 = wx['getMenuButtonBoundingClientRect']();v6k57 && (window['g08'][G[620091]] && (mbznx = v6k57[G[620082]]), console[G[620001]](G[620322] + v6k57[G[620082]] + G[620323] + v6k57[G[620083]] + G[620324] + v6k57[G[620084]] + ',right:' + v6k57['right'] + G[620325] + v6k57[G[620326]] + ',height:' + v6k57['height']));var $q8e3 = {};for (const _sznm in g08[G[620018]]) {
        $q8e3[_sznm] = g08[G[620018]][_sznm];
      }var ak7f = { 'channel': window['g08'][G[620140]], 'account': window['g08'][G[620015]], 'userId': window['g08'][G[620213]], 'cdn': window['g08'][G[620017]], 'data': window['g08'][G[620157]], 'package': window['g08']['package'], 'newRegister': window['g08']['newRegister'], 'pkgName': window['g08']['pkgName'], 'partnerId': window['g08'][G[620135]], 'platform_uid': window['g08'][G[620214]], 'deviceId': window['g08'][G[620136]], 'selectedServer': $q8e3, 'configType': window['g08']['configType'], 'exposeType': window['g08'][G[620144]], 'debugUsers': window['g08']['debugUsers'], 'wxMenuTop': mbznx, 'wxShield': window['g08'][G[620145]] };if (window['pkgOptions']) for (var mre$_ in window['pkgOptions']) {
        ak7f[mre$_] = window['pkgOptions'][mre$_];
      }window[G[620319]][G[620028]]['g80G'](ak7f);
    }
  } else console[G[620001]]('\u3010登录\u3011loadProbPkg:' + window['g86'] + ',loadMainPkg:' + window['g068'] + G[620327] + window[G[620146]] + ',loadLoadingRes:' + window['loadLoadingRes'] + G[620328] + window['g086'] + G[620329] + window['g06'] + G[620330] + window['g68'] + G[620331] + window['g60']);
};