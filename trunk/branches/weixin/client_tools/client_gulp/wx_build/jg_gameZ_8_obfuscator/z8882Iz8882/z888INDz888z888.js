var G = wx.$G;
import a$er_s from '../z888z888basdz888/z8885sdkz888.js';window[G[620121]] = { 'wxVersion': window['config']['game_ver'] }, window[G[620122]] = ![], window['g80'] = 0x1, window[G[620123]] = 0x1, window['g608'] = !![], window[G[620124]] = !![], window['gGA608'] = '', window['g08'] = { 'base_cdn': G[620125], 'cdn': G[620125] }, g08[G[620126]] = {}, g08['package'] = '0', g08[G[620063]] = window[G[620121]][G[620127]], g08[G[620094]] = '', g08['os'] = '1', g08[G[620128]] = G[620129], g08[G[620130]] = G[620131], g08['logurl'] = 'https://log-tjqytest.shzbkj.com', g08[G[620132]] = G[620133], g08[G[620134]] = 'MQx0mYlUWO5XYKvgAIPKWgK1w722GKih', g08[G[620135]] = '1', g08['pkgName'] = '', g08[G[620136]] = '', g08[G[620137]] = 0x0, g08[G[620138]] = {}, g08[G[620139]] = parseInt(g08[G[620135]]), g08[G[620140]] = g08[G[620135]], g08[G[620018]] = {}, g08['gA0'] = 'https://jgcenter.sh9130.com/clientlog/', g08['showLogo'] = ![], g08['debugUsers'] = G[620141], g08[G[620142]] = Date[G[620115]](), g08['configType'] = G[620143], g08[G[620144]] = '_a', g08['loadingType'] = 0x2, g08[G[620016]] = 0x7c1, g08[G[620127]] = window[G[620121]][G[620127]], g08[G[620145]] = ![], g08[G[620086]] = ![], g08[G[620089]] = ![], g08[G[620092]] = ![], window['g680'] = 0x5, window['g68'] = ![], window['g86'] = ![], window['g068'] = ![], window[G[620146]] = ![], window['loadLoadingRes'] = ![], window['g086'] = ![], window['g60'] = ![], window['g06'] = ![], window['g860'] = ![], window[G[620147]] = function (ihj2c) {
  console['log'](G[620147], ihj2c), wx['hideLoading']({}), wx[G[620038]]({ 'title': G[620056], 'content': ihj2c, 'success'(c2jih) {
      if (c2jih[G[620148]]) console['log'](G[620149]);else c2jih[G[620150]] && console['log'](G[620151]);
    } });
}, window['gA608'] = function (nzib) {
  console['log']('loginAlert', nzib), gA086(), wx[G[620038]]({ 'title': G[620056], 'content': nzib, 'confirmText': G[620152], 'cancelText': G[620153], 'success'(mtnbsz) {
      if (mtnbsz[G[620148]]) window['g0A']();else mtnbsz[G[620150]] && (console['log'](G[620154]), wx['exitMiniProgram']({}));
    } });
}, window[G[620155]] = function (o45fd) {
  console['log'](G[620155], o45fd), wx[G[620038]]({ 'title': G[620056], 'content': o45fd, 'confirmText': G[620156], 'showCancel': ![], 'complete'(qe3$8_) {
      console['log'](G[620154]), wx['exitMiniProgram']({});
    } });
}, window['gA680'] = ![], window['gA068'] = function (zbsrn) {
  window['gA680'] = !![], wx['showLoading'](zbsrn);
}, window['gA086'] = function () {
  window['gA680'] && (window['gA680'] = ![], wx['hideLoading']({}));
}, window['gA860'] = function (nmtxz) {
  window['ServerLoading'][G[620028]]['gA860'](nmtxz);
}, window['msgCheck'] = function (nzms_r, e683) {
  a$er_s['msgCheck'](nzms_r, function (nyxb) {
    nyxb && nyxb[G[620157]] ? nyxb[G[620157]][G[620158]] == 0x1 ? e683(!![]) : (e683(![]), console[G[620001]](G[620159] + nyxb[G[620157]]['msg'])) : console['log']('msgCheck', nyxb);
  });
}, window['gA806'] = function (_rnmsz) {
  console['log']('getJsURL', _rnmsz);
}, window['gA08'] = function (ntyxib) {}, window['gA80'] = function (l86av7, nzrbs, xtih2) {}, window['gA8'] = function (o4fu5) {
  console['log'](G[620160], o4fu5), window['ServerLoading'][G[620028]][G[620161]](), window['ServerLoading'][G[620028]][G[620162]](), window['ServerLoading'][G[620028]]['closeLoading']();
}, window['g8A'] = function (afk7v) {
  window['gA608'](G[620163]);var sqe_r = { 'id': window['g08'][G[620012]], 'role': window['g08'][G[620013]], 'level': window['g08'][G[620014]], 'account': window['g08'][G[620015]], 'version': window['g08'][G[620016]], 'cdn': window['g08'][G[620017]], 'pkgName': window['g08']['pkgName'], 'gamever': window['config']['game_ver'], 'serverid': window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, 'systemInfo': window[G[620020]], 'error': G[620164], 'stack': afk7v ? afk7v : G[620163] },
      xbmzn = JSON['stringify'](sqe_r);console[G[620021]](G[620165] + xbmzn), window['gA0'](xbmzn);
}, window['g0A8'] = function (a5kvf7) {
  var _nzrm = JSON[G[620166]](a5kvf7);_nzrm['gamever'] = window['config']['game_ver'], _nzrm[G[620167]] = window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, _nzrm[G[620020]] = window[G[620020]];var do14uw = JSON['stringify'](_nzrm);console[G[620021]](G[620168] + do14uw), window['gA0'](do14uw);
}, window['g08A'] = function (k5a6v7, kavl6) {
  var mbtz = { 'id': window['g08'][G[620012]], 'role': window['g08'][G[620013]], 'level': window['g08'][G[620014]], 'account': window['g08'][G[620015]], 'version': window['g08'][G[620016]], 'cdn': window['g08'][G[620017]], 'pkgName': window['g08']['pkgName'], 'gamever': window['config']['game_ver'], 'serverid': window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, 'systemInfo': window[G[620020]], 'error': k5a6v7, 'stack': kavl6 },
      yxibh = JSON['stringify'](mbtz);console[G[620116]](G[620169] + yxibh), window['gA0'](yxibh);
}, window['gA0'] = function (_res$) {
  if (window['g08'][G[620095]] == G[620170]) return;var i2hxc = g08['gA0'] + G[620171] + g08[G[620015]];wx[G[620172]]({ 'url': i2hxc, 'method': G[620173], 'data': _res$, 'header': { 'content-type': G[620174], 'cache-control': G[620175] }, 'success': function (a7kl) {
      DEBUG && console['log']('clientlog:', i2hxc, _res$, a7kl);
    }, 'fail': function (w91up0) {
      DEBUG && console['log']('clientlog:', i2hxc, _res$, w91up0);
    }, 'complete': function () {} });
}, window['guild'] = function () {
  function tmnxb() {
    return ((0x1 + Math[G[620176]]()) * 0x10000 | 0x0)['toString'](0x10)['substring'](0x1);
  }return tmnxb() + tmnxb() + '-' + tmnxb() + '-' + tmnxb() + '-' + tmnxb() + '+' + tmnxb() + tmnxb() + tmnxb();
}, window['g0A'] = function () {
  console['log'](G[620177]);var dou54f = a$er_s['getConfig']();g08[G[620140]] = dou54f[G[620178]], g08[G[620139]] = dou54f[G[620178]], g08[G[620135]] = dou54f[G[620178]], g08['pkgName'] = dou54f['game_pkg'];var ibntx = { 'game_ver': g08[G[620063]] };g08[G[620136]] = this['guild'](), gA068({ 'title': G[620179] }), a$er_s[G[620180]](ibntx, this['g8A0'][G[620181]](this));
}, window['g8A0'] = function (_nrms) {
  var xbin = _nrms[G[620182]];console['log'](G[620183] + xbin + G[620184] + (xbin == 0x1) + G[620185] + _nrms['game_ver'] + G[620186] + window[G[620121]][G[620127]]);if (!_nrms['game_ver'] || window['gG68A0'](window[G[620121]][G[620127]], _nrms['game_ver']) < 0x0) console['log'](G[620187]), g08[G[620130]] = G[620188], g08['logurl'] = 'https://log-tjqy.shzbkj.com', g08[G[620132]] = G[620189], g08[G[620017]] = G[620190], g08[G[620191]] = G[620192], g08[G[620193]] = 'xc', g08[G[620145]] = ![];else window['gG68A0'](window[G[620121]][G[620127]], _nrms['game_ver']) == 0x0 ? (console['log'](G[620194]), g08[G[620130]] = G[620131], g08['logurl'] = 'https://log-tjqytest.shzbkj.com', g08[G[620132]] = G[620133], g08[G[620017]] = G[620195], g08[G[620191]] = G[620192], g08[G[620193]] = G[620196], g08[G[620145]] = !![]) : (console['log'](G[620197]), g08[G[620130]] = G[620131], g08['logurl'] = 'https://log-tjqytest.shzbkj.com', g08[G[620132]] = G[620133], g08[G[620017]] = G[620195], g08[G[620191]] = G[620192], g08[G[620193]] = G[620196], g08[G[620145]] = ![]);g08[G[620137]] = config[G[620198]] ? config[G[620198]] : 0x0, this['g60A8'](), this['g608A'](), window['sdkLoginRetry'] = 0x5, gA068({ 'title': G[620199] }), a$er_s['login'](this['g80A'][G[620181]](this));
}, window['sdkLoginRetry'] = 0x5, window['g80A'] = function (xhiyb, p0) {
  if (xhiyb == 0x0 && p0 && p0[G[620200]]) {
    g08[G[620201]] = p0[G[620200]];var xichy2 = this;gA068({ 'title': G[620202] }), sendApi(g08[G[620130]], 'User.login', { 'platform': g08[G[620128]], 'partner_id': g08[G[620135]], 'token': p0[G[620200]], 'game_pkg': g08['pkgName'], 'deviceId': g08[G[620136]], 'scene': G[620203] + g08[G[620137]] }, this['g6A08'][G[620181]](this), g680, g8A);
  } else p0 && p0['errMsg'] && window['sdkLoginRetry'] > 0x0 && (p0['errMsg'][G[620087]](G[620204]) != -0x1 || p0['errMsg'][G[620087]](G[620205]) != -0x1 || p0['errMsg'][G[620087]](G[620206]) != -0x1 || p0['errMsg'][G[620087]](G[620207]) != -0x1 || p0['errMsg'][G[620087]](G[620208]) != -0x1 || p0['errMsg'][G[620087]](G[620209]) != -0x1) ? (window['sdkLoginRetry']--, a$er_s['login'](this['g80A'][G[620181]](this))) : (window['g08A']('sdkOnLoginError', JSON['stringify']({ 'status': xhiyb, 'data': p0 })), window['gA608'](G[620210] + (p0 && p0['errMsg'] ? '，' + p0['errMsg'] : '')));
}, window['g6A08'] = function (f5k4) {
  if (!f5k4) {
    window['g08A']('userLoginError', G[620211]), window['gA608']('User.login failed');return;
  }if (f5k4[G[620158]] != G[620212]) {
    window['g08A']('userLoginError', JSON['stringify'](f5k4)), window['gA608']('User.login failed: ' + f5k4[G[620158]]);return;
  }g08[G[620213]] = String(f5k4[G[620015]]), g08[G[620015]] = String(f5k4[G[620015]]), g08[G[620067]] = String(f5k4[G[620067]]), g08[G[620140]] = String(f5k4[G[620067]]), g08[G[620214]] = String(f5k4[G[620214]]), g08['php_sign'] = String(f5k4['sign']), g08['php_signtime'] = String(f5k4[G[620215]]), g08['sign'] = '';var xybti = this;gA068({ 'title': G[620216] }), sendApi(g08[G[620130]], G[620217], { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, xybti['g6A80'][G[620181]](xybti), g680, g8A);
}, window['g6A80'] = function (wu10o) {
  if (!wu10o) {
    window['gA608'](G[620218]);return;
  }if (wu10o[G[620158]] != G[620212]) {
    window['gA608'](G[620219] + wu10o[G[620158]]);return;
  }if (!wu10o[G[620157]] || wu10o[G[620157]]['length'] == 0x0) {
    window['gA608'](G[620220]);return;
  }g08['newRegister'] = wu10o[G[620221]], g08[G[620018]] = { 'server_id': String(wu10o[G[620157]][0x0][G[620019]]), 'server_name': String(wu10o[G[620157]][0x0][G[620222]]), 'entry_ip': wu10o[G[620157]][0x0][G[620223]], 'entry_port': parseInt(wu10o[G[620157]][0x0][G[620224]]), 'status': g06A(wu10o[G[620157]][0x0]), 'start_time': wu10o[G[620157]][0x0][G[620225]], 'cdn': g08[G[620017]] }, this['g806A']();
}, window['g806A'] = function () {
  if (g08['newRegister'] == 0x1) {
    var fv5ak4 = g08[G[620018]][G[620226]];if (fv5ak4 === -0x1 || fv5ak4 === 0x0) {
      window['gA608'](fv5ak4 === -0x1 ? G[620227] : G[620228]);return;
    }g8A60(0x0, g08[G[620018]][G[620019]]), window['ServerLoading'][G[620028]]['openLoading'](g08['newRegister']);
  } else window['ServerLoading'][G[620028]][G[620229]](), gA086();window['g06'] = !![], window['g860A'](), window['g80A6']();
}, window['g60A8'] = function () {
  sendApi(g08[G[620130]], 'User.getCdnVersion', { 'game_pkg': g08['pkgName'], 'version_name': g08[G[620193]] }, this['reqVersionConfigCallBack'][G[620181]](this), g680, g8A);
}, window['reqVersionConfigCallBack'] = function (o5fk4) {
  if (!o5fk4) {
    window['gA608']('User.getCdnVersion failed');return;
  }if (o5fk4[G[620158]] != G[620212]) {
    window['gA608']('User.getCdnVersion failed: state=' + o5fk4[G[620158]]);return;
  }if (!o5fk4[G[620157]] || !o5fk4[G[620157]][G[620063]]) {
    window['gA608']('User.getCdnVersion failed: version=' + (o5fk4[G[620157]] && o5fk4[G[620157]][G[620063]]));return;
  }o5fk4[G[620157]][G[620230]] && o5fk4[G[620157]][G[620230]]['length'] > 0xa && (g08[G[620231]] = o5fk4[G[620157]][G[620230]], g08[G[620017]] = o5fk4[G[620157]][G[620230]]), o5fk4[G[620157]][G[620063]] && (g08[G[620016]] = o5fk4[G[620157]][G[620063]]), console[G[620001]](G[620232] + g08[G[620016]] + G[620233] + g08[G[620193]]), window['g086'] = !![], window['g860A'](), window['g80A6']();
}, window['pkgOptions'], window['g608A'] = function () {
  sendApi(g08[G[620130]], 'Common.get_option_pkg', { 'game_pkg': g08['pkgName'] }, this['g68A0'][G[620181]](this), g680, g8A);
}, window['g68A0'] = function (d5ka4f) {
  if (d5ka4f[G[620158]] === G[620212] && d5ka4f[G[620157]]) {
    window['pkgOptions'] = d5ka4f[G[620157]];for (var l63q in d5ka4f[G[620157]]) {
      g08[l63q] = d5ka4f[G[620157]][l63q];
    }
  } else console[G[620001]]('reqPkgOptionsCallBack ' + d5ka4f[G[620158]]);window['g60'] = !![], window['g80A6']();
}, window[G[620234]] = function (chyx, ihyt2x, r$3q_e, a56v7k, srq$, l83$qe, wpo10u, uof54d, ijy2h) {
  srq$ = String(srq$);var tyixh = wpo10u,
      xtyh2 = uof54d;g08[G[620126]][srq$] = { 'productid': srq$, 'productname': tyixh, 'productdesc': xtyh2, 'roleid': chyx, 'rolename': ihyt2x, 'rolelevel': r$3q_e, 'price': l83$qe, 'callback': ijy2h }, sendApi(g08[G[620132]], G[620235], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'server_name': g08[G[620018]][G[620222]], 'level': r$3q_e, 'uid': g08[G[620015]], 'role_id': chyx, 'role_name': ihyt2x, 'product_id': srq$, 'product_name': tyixh, 'product_desc': xtyh2, 'money': l83$qe, 'partner_id': g08[G[620135]] }, toPayCallBack, g680, g8A);
}, window[G[620236]] = function (qel$83) {
  if (qel$83) {
    if (qel$83[G[620237]] === 0xc8 || qel$83[G[620158]] == G[620212]) {
      var u4owd = g08[G[620126]][String(qel$83[G[620238]])];if (u4owd[G[620239]]) u4owd[G[620239]](qel$83[G[620238]], qel$83[G[620240]], -0x1);a$er_s[G[620241]]({ 'cpbill': qel$83[G[620240]], 'productid': qel$83[G[620238]], 'productname': u4owd[G[620242]], 'productdesc': u4owd[G[620243]], 'serverid': g08[G[620018]][G[620019]], 'servername': g08[G[620018]][G[620222]], 'roleid': u4owd[G[620244]], 'rolename': u4owd[G[620245]], 'rolelevel': u4owd[G[620246]], 'price': u4owd[G[620247]], 'extension': JSON['stringify']({ 'cp_order_id': qel$83[G[620240]] }) }, function (q8le$3, i2xhcy) {
        u4owd[G[620239]] && q8le$3 == 0x0 && u4owd[G[620239]](qel$83[G[620238]], qel$83[G[620240]], q8le$3);console[G[620001]](JSON['stringify']({ 'type': G[620248], 'status': q8le$3, 'data': qel$83, 'role_name': u4owd[G[620245]] }));if (q8le$3 === 0x0) {} else {
          if (q8le$3 === 0x1) {} else {
            if (q8le$3 === 0x2) {}
          }
        }
      });
    } else alert(qel$83[G[620001]]);
  }
}, window['g680A'] = function () {}, window['gA68'] = function ($ql3e8, fk54va, rnmb, mxtnb, hyixc2) {
  a$er_s['logCreateRole'](g08[G[620018]][G[620019]], g08[G[620018]][G[620222]] || g08[G[620018]][G[620019]], $ql3e8, fk54va, rnmb), sendApi(g08[G[620130]], G[620249], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'role_id': $ql3e8, 'uid': g08[G[620015]], 'role_name': fk54va, 'role_type': mxtnb, 'level': rnmb });
}, window['gA86'] = function (ko5df, xyitb, k5v7fa, _e8$q3, nrmbs, q3r_e$, e$3r_, $zsm_r, e_rs$q, ch2xi) {
  g08[G[620012]] = ko5df, g08[G[620013]] = xyitb, g08[G[620014]] = k5v7fa, a$er_s['logEnterGame'](g08[G[620018]][G[620019]], g08[G[620018]][G[620222]] || g08[G[620018]][G[620019]], ko5df, xyitb, k5v7fa), sendApi(g08[G[620130]], G[620250], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'role_id': ko5df, 'uid': g08[G[620015]], 'role_name': xyitb, 'role_type': _e8$q3, 'level': k5v7fa, 'evolution': nrmbs });
}, window['g6A8'] = function (bmsrz, ems$r_, k5f4v, gw19p0, uw190, r_zm, o01uw, bxtyn, nztmbs, e3q$8l) {
  g08[G[620012]] = bmsrz, g08[G[620013]] = ems$r_, g08[G[620014]] = k5f4v, a$er_s['logRoleUpLevel'](g08[G[620018]][G[620019]], g08[G[620018]][G[620222]] || g08[G[620018]][G[620019]], bmsrz, ems$r_, k5f4v), sendApi(g08[G[620130]], G[620250], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'role_id': bmsrz, 'uid': g08[G[620015]], 'role_name': ems$r_, 'role_type': gw19p0, 'level': k5f4v, 'evolution': uw190 });
}, window['g68A'] = function (bntixy) {}, window['gA6'] = function (rm$zs_) {
  a$er_s[G[620251]](G[620251], function (kfav54) {
    rm$zs_ && rm$zs_(kfav54);
  });
}, window[G[620252]] = function () {
  a$er_s[G[620252]]();
}, window[G[620253]] = function () {
  a$er_s[G[620254]]();
}, window[G[620255]] = function (pw1ou, zbrs, nsbmtz, u5fo4, a75vf, f5k4d, a57vfk, szm$r) {
  szm$r = szm$r || g08[G[620018]][G[620019]], sendApi(g08[G[620130]], 'User.get_code', { 'phone': pw1ou, 'role_id': zbrs, 'uid': g08[G[620015]], 'game_pkg': g08['pkgName'], 'partner_id': g08[G[620135]], 'server_id': szm$r }, a57vfk);
}, window[G[620111]] = function (bsrnz) {
  window['g8A6'] = bsrnz, window['g8A6'] && window['g6A'] && (console[G[620001]](G[620112] + window['g6A'][G[620113]]), window['g8A6'](window['g6A']), window['g6A'] = null);
}, window['g86A'] = function (f4kod, do1wu0, m_szr$, r_qe$3) {
  window[G[620256]]('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', { 'game_pkg': window['g08']['pkgName'], 'role_id': do1wu0, 'server_id': m_szr$ }, r_qe$3);
}, window['g0A68'] = function (hciy2, xih2cy) {
  function iyhtx2(_$qe3r) {
    var r$_eq = [],
        a6l8 = [],
        o5fk = window['config'][G[620257]];for (var sznmr_ in o5fk) {
      var du4w1 = Number(sznmr_);(!hciy2 || !hciy2['length'] || hciy2[G[620087]](du4w1) != -0x1) && (a6l8[G[620031]](o5fk[sznmr_]), r$_eq[G[620031]]([du4w1, 0x3]));
    }window['gG68A0'](window[G[620032]], G[620258]) >= 0x0 ? (console['log'](G[620259]), a$er_s['subscribeMessage'] && a$er_s['subscribeMessage'](a6l8, function (qe8$l) {
      console['log'](G[620260]), console['log'](qe8$l);if (qe8$l && qe8$l['errMsg'] == 'requestSubscribeMessage:ok') for (var xizbtn in o5fk) {
        if (qe8$l[o5fk[xizbtn]] == G[620261]) {
          var $83_ = Number(xizbtn);for (var kvfa75 = 0x0; kvfa75 < r$_eq['length']; kvfa75++) {
            if (r$_eq[kvfa75][0x0] == $83_) {
              r$_eq[kvfa75][0x1] = 0x1;break;
            }
          }
        }
      }window['gG68A0'](window[G[620032]], G[620262]) >= 0x0 ? wx['getSetting']({ 'withSubscriptions': !![], 'success': function (e_qr) {
          var af5kv4 = e_qr['subscriptionsSetting']['itemSettings'];if (af5kv4) {
            console['log'](G[620263]), console['log'](af5kv4);for (var rsz_m$ in o5fk) {
              if (af5kv4[o5fk[rsz_m$]] == G[620261]) {
                var xyhib = Number(rsz_m$);for (var kv5a = 0x0; kv5a < r$_eq['length']; kv5a++) {
                  if (r$_eq[kv5a][0x0] == xyhib) {
                    r$_eq[kv5a][0x1] = 0x2;break;
                  }
                }
              }
            }console['log'](r$_eq), xih2cy && xih2cy(r$_eq);
          } else console['log'](G[620264]), console['log'](e_qr), console['log'](r$_eq), xih2cy && xih2cy(r$_eq);
        }, 'fail': function () {
          console['log'](G[620265]), console['log'](r$_eq), xih2cy && xih2cy(r$_eq);
        } }) : (console['log'](G[620266] + window[G[620032]]), console['log'](r$_eq), xih2cy && xih2cy(r$_eq));
    })) : (console['log'](G[620267] + window[G[620032]]), console['log'](r$_eq), xih2cy && xih2cy(r$_eq)), wx[G[620268]](iyhtx2);
  }wx[G[620269]](iyhtx2);
}, window['g0A86'] = { 'isSuccess': ![], 'level': G[620270], 'isCharging': ![] }, window['g06A8'] = function (k7a6v) {
  wx['getBatteryInfo']({ 'success': function (_rse$) {
      var nzrmbs = window['g0A86'];nzrmbs[G[620271]] = !![], nzrmbs[G[620104]] = Number(_rse$[G[620104]])[G[620272]](0x0), nzrmbs['isCharging'] = _rse$['isCharging'], k7a6v && k7a6v(nzrmbs[G[620271]], nzrmbs[G[620104]], nzrmbs['isCharging']);
    }, 'fail': function (d4u5) {
      console['log'](G[620273], d4u5['errMsg']);var emr$s_ = window['g0A86'];k7a6v && k7a6v(emr$s_[G[620271]], emr$s_[G[620104]], emr$s_['isCharging']);
    } });
}, window[G[620256]] = function (ql8736, xibztn, hxyb, $le8q, znmsbr, v783l, k75a, a8vl7) {
  if ($le8q == undefined) $le8q = 0x1;wx[G[620172]]({ 'url': ql8736, 'method': k75a || G[620274], 'responseType': G[620275], 'data': xibztn, 'header': { 'content-type': a8vl7 || G[620174] }, 'success': function (e_$msr) {
      DEBUG && console['log'](G[620276], ql8736, info, e_$msr);if (e_$msr && e_$msr[G[620277]] == 0xc8) {
        var tsmzn = e_$msr[G[620157]];!v783l || v783l(tsmzn) ? hxyb && hxyb(tsmzn) : window[G[620278]](ql8736, xibztn, hxyb, $le8q, znmsbr, v783l, e_$msr);
      } else window[G[620278]](ql8736, xibztn, hxyb, $le8q, znmsbr, v783l, e_$msr);
    }, 'fail': function (zsbtmn) {
      DEBUG && console['log'](G[620279], ql8736, info, zsbtmn), window[G[620278]](ql8736, xibztn, hxyb, $le8q, znmsbr, v783l, zsbtmn);
    }, 'complete': function () {} });
}, window[G[620278]] = function (nyibtx, r3eq, $zrsm_, u4ow1d, iyc2xh, zmsntb, ofud54) {
  u4ow1d - 0x1 > 0x0 ? setTimeout(function () {
    window[G[620256]](nyibtx, r3eq, $zrsm_, u4ow1d - 0x1, iyc2xh, zmsntb);
  }, 0x3e8) : iyc2xh && iyc2xh(JSON['stringify']({ 'url': nyibtx, 'response': ofud54 }));
}, window[G[620280]] = function (r_qse$, o0ud1, ihybxt, ixbnty, srnmb, sznt, w4o1du) {
  !ihybxt && (ihybxt = {});var ty = Math[G[620281]](Date[G[620115]]() / 0x3e8);ihybxt[G[620215]] = ty, ihybxt[G[620282]] = o0ud1;var nmrz_ = Object[G[620283]](ihybxt)[G[620284]](),
      ixyht2 = '',
      znr_ = '';for (var nmzbst = 0x0; nmzbst < nmrz_['length']; nmzbst++) {
    ixyht2 = ixyht2 + (nmzbst == 0x0 ? '' : '&') + nmrz_[nmzbst] + ihybxt[nmrz_[nmzbst]], znr_ = znr_ + (nmzbst == 0x0 ? '' : '&') + nmrz_[nmzbst] + '=' + encodeURIComponent(ihybxt[nmrz_[nmzbst]]);
  }ixyht2 = ixyht2 + g08[G[620134]];var x2thy = 'sign=' + md5(ixyht2);send(r_qse$ + '?' + znr_ + (znr_ == '' ? '' : '&') + x2thy, null, ixbnty, srnmb, sznt, w4o1du || function (mnbstz) {
    return mnbstz[G[620158]] == G[620212];
  }, null, G[620285]);
}, window['g068A'] = function (opuw10, itbxhy) {
  var $zm = 0x0;g08[G[620018]] && ($zm = g08[G[620018]][G[620019]]), sendApi(g08['logurl'], 'UserLog.reportUidStep', { 'partnerId': g08[G[620135]], 'gamePkg': g08['pkgName'], 'logTime': Math[G[620281]](Date[G[620115]]() / 0x3e8), 'platformUid': g08[G[620214]], 'type': opuw10, 'serverId': $zm }, null, 0x2, null, function () {
    return !![];
  });
}, window['g08A6'] = function (u10odw) {
  sendApi(g08[G[620130]], 'Server.getServerGroup', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, g086A, g680, g8A);
}, window['g086A'] = function (mxtbzn) {
  if (mxtbzn[G[620158]] === G[620212] && mxtbzn[G[620157]]) {
    mxtbzn[G[620157]][G[620286]]({ 'id': -0x2, 'name': G[620287] }), mxtbzn[G[620157]][G[620286]]({ 'id': -0x1, 'name': G[620288] }), g08['groupList'] = mxtbzn[G[620157]];if (window[G[620289]]) window[G[620289]][G[620290]]();
  } else g08[G[620291]] = ![], window['gA608'](G[620292] + mxtbzn[G[620158]]);
}, window['gA60'] = function (hiytb) {
  sendApi(g08[G[620130]], 'Server.getServerByUid', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, gA06, g680, g8A);
}, window['gA06'] = function (lk76v) {
  g08[G[620293]] = ![];if (lk76v[G[620158]] === G[620212] && lk76v[G[620157]]) {
    for (var xihytb = 0x0; xihytb < lk76v[G[620157]]['length']; xihytb++) {
      lk76v[G[620157]][xihytb][G[620226]] = g06A(lk76v[G[620157]][xihytb]);
    }g08[G[620138]][-0x1] = window['changeServerName'](lk76v[G[620157]]), window[G[620289]][G[620294]](-0x1);
  } else window['gA608'](G[620295] + lk76v[G[620158]]);
}, window[G[620296]] = function (va56k7) {
  sendApi(g08[G[620130]], 'Server.getServerByUid', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, va56k7, g680, g8A);
}, window['g6A0'] = function (ibxtyn, jy2ci) {
  sendApi(g08[G[620130]], 'Server.getServerByGroup', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]], 'server_group_id': jy2ci }, g60A, g680, g8A);
}, window['g60A'] = function (tbzni) {
  g08[G[620293]] = ![];if (tbzni[G[620158]] === G[620212] && tbzni[G[620157]] && tbzni[G[620157]][G[620157]]) {
    var kafv4 = tbzni[G[620157]]['server_group_id'],
        d14o = [];for (var zntsmb = 0x0; zntsmb < tbzni[G[620157]][G[620157]]['length']; zntsmb++) {
      tbzni[G[620157]][G[620157]][zntsmb][G[620226]] = g06A(tbzni[G[620157]][G[620157]][zntsmb]), (d14o['length'] == 0x0 || tbzni[G[620157]][G[620157]][zntsmb][G[620226]] != 0x0) && (d14o[d14o['length']] = tbzni[G[620157]][G[620157]][zntsmb]);
    }g08[G[620138]][kafv4] = window['changeServerName'](d14o), window[G[620289]][G[620294]](kafv4);
  } else window['gA608'](G[620297] + tbzni[G[620158]]);
}, window['gG680'] = function (kval7) {
  sendApi(g08[G[620130]], 'Server.getRecommendServerList', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, reqServerRecommendCallBack, g680, g8A);
}, window[G[620298]] = function (v6al8) {
  g08[G[620293]] = ![];if (v6al8[G[620158]] === G[620212] && v6al8[G[620157]]) {
    for (var r_zsm$ = 0x0; r_zsm$ < v6al8[G[620157]]['length']; r_zsm$++) {
      v6al8[G[620157]][r_zsm$][G[620226]] = g06A(v6al8[G[620157]][r_zsm$]);
    }g08[G[620138]][-0x2] = window['changeServerName'](v6al8[G[620157]]), window[G[620289]][G[620294]](-0x2);
  } else alert(G[620299] + v6al8[G[620158]]);
}, window['changeServerName'] = function (u1p9w) {
  if (!u1p9w && u1p9w['length'] <= 0x0) return u1p9w;for (let xyi2 = 0x0; xyi2 < u1p9w['length']; xyi2++) {
    u1p9w[xyi2][G[620300]] && u1p9w[xyi2][G[620300]] == 0x1 && (u1p9w[xyi2][G[620222]] += G[620301]);
  }return u1p9w;
}, window['g0A6'] = function (lq38$, yixth) {
  lq38$ = lq38$ || g08[G[620018]][G[620019]], sendApi(g08[G[620130]], 'Common.get_anno', { 'type': '4', 'game_pkg': g08['pkgName'], 'server_id': lq38$ }, yixth);
}, window[G[620302]] = function (f45o, mz_rn, kv5a76, wo1du4) {
  kv5a76 = kv5a76 || g08[G[620018]][G[620019]], sendApi(g08[G[620130]], 'Common.get_new_anno', { 'type': f45o, 'game_pkg': mz_rn, 'server_id': kv5a76 }, wo1du4);
}, window['g06A'] = function (iht2) {
  if (iht2) {
    if (iht2[G[620226]] == 0x1) {
      if (iht2[G[620303]] == 0x1) return 0x2;else return 0x1;
    } else return iht2[G[620226]] == 0x0 ? 0x0 : -0x1;
  }return -0x1;
}, window['g8A60'] = function (e83l6q, tb) {
  g08[G[620304]] = { 'step': e83l6q, 'server_id': tb };var txin = this;gA068({ 'title': G[620305] }), sendApi(g08[G[620130]], G[620306], { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'game_pkg': g08['pkgName'], 'server_id': tb, 'platform': g08[G[620067]], 'platform_uid': g08[G[620214]], 'check_login_time': g08['php_signtime'], 'check_login_sign': g08['php_sign'], 'version_name': g08[G[620193]] }, g8A06, g680, g8A, function ($q83el) {
    return $q83el[G[620158]] == G[620212] || $q83el[G[620001]] == G[620307] || $q83el[G[620001]] == 'sign_err';
  });
}, window['g8A06'] = function (wopu1) {
  var mrnb = this;if (wopu1[G[620158]] === G[620212] && wopu1[G[620157]]) {
    var p0u1w = g08[G[620018]];p0u1w[G[620308]] = g08[G[620139]], p0u1w['sign'] = String(wopu1[G[620157]]['login_sign']), p0u1w[G[620142]] = parseInt(wopu1[G[620157]][G[620215]]);if (wopu1[G[620157]][G[620309]]) p0u1w[G[620309]] = parseInt(wopu1[G[620157]][G[620309]]);else p0u1w[G[620309]] = parseInt(wopu1[G[620157]][G[620019]]);p0u1w[G[620310]] = 0x0, p0u1w[G[620017]] = g08[G[620231]], p0u1w[G[620311]] = wopu1[G[620157]][G[620312]], p0u1w[G[620313]] = wopu1[G[620157]][G[620313]], console['log'](G[620314] + JSON['stringify'](p0u1w[G[620313]])), g08['newRegister'] == 0x1 && p0u1w[G[620313]] && p0u1w[G[620313]][G[620315]] == 0x1 && (g08[G[620316]] = 0x1, window['ServerLoading'][G[620028]]['gG80']()), g86A0();
  } else g08[G[620304]][G[620317]] >= 0x3 ? (g8A(JSON['stringify'](wopu1)), window['gA608'](G[620318] + wopu1[G[620158]])) : sendApi(g08[G[620130]], 'User.login', { 'platform': g08[G[620128]], 'partner_id': g08[G[620135]], 'token': g08[G[620201]], 'game_pkg': g08['pkgName'], 'deviceId': g08[G[620136]], 'scene': G[620203] + g08[G[620137]] }, function (mzsntb) {
    if (!mzsntb || mzsntb[G[620158]] != G[620212]) {
      window['gA608']('User.login failed: ' + mzsntb && mzsntb[G[620158]]);return;
    }g08['php_sign'] = String(mzsntb['sign']), g08['php_signtime'] = String(mzsntb[G[620215]]), setTimeout(function () {
      g8A60(g08[G[620304]][G[620317]] + 0x1, g08[G[620304]][G[620019]]);
    }, 0x5dc);
  }, g680, g8A, function (srmnz_) {
    return srmnz_[G[620158]] == G[620212] || srmnz_[G[620158]] == G[620319];
  });
}, window['g86A0'] = function () {
  ServerLoading[G[620028]]['openLoading'](g08['newRegister']), window['g68'] = !![], window['g80A6']();
}, window['g860A'] = function () {
  if (window['g86'] && window['g068'] && window[G[620146]] && window['loadLoadingRes'] && window['g086'] && window['g06']) {
    if (!window[G[620320]][G[620028]]) {
      console['log'](G[620321] + window[G[620320]][G[620028]]);var xbythi = wx['getLaunchOptionsSync'](),
          kla6v = xbythi[G[620113]] ? xbythi[G[620113]] : 0x0,
          akv5f7 = { 'cdn': window['g08'][G[620017]], 'spareCdn': window['g08'][G[620191]], 'newRegister': window['g08']['newRegister'], 'wxPC': window['g08'][G[620092]], 'wxIOS': window['g08'][G[620086]], 'wxAndroid': window['g08'][G[620089]], 'wxParam': { 'limitLoad': window['g08']['gGA680'], 'benchmarkLevel': window['g08']['gGA068'], 'wxFrom': window['config'][G[620198]] == G[620322] ? 0x1 : 0x0, 'wxSDKVersion': window[G[620032]] }, 'configType': window['g08']['configType'], 'exposeType': window['g08'][G[620144]], 'scene': kla6v };new window[G[620320]](akv5f7, window['g08'][G[620016]], window['gGA608']);
    }
  }
}, window['g80A6'] = function () {
  if (window['g86'] && window['g068'] && window[G[620146]] && window['loadLoadingRes'] && window['g086'] && window['g06'] && window['g68'] && window['g60']) {
    gA086();if (!g860) {
      g860 = !![];if (!window[G[620320]][G[620028]]) window['g860A']();var tihyxb = 0x0,
          q$rs = wx['getMenuButtonBoundingClientRect']();q$rs && (window['g08'][G[620091]] && (tihyxb = q$rs[G[620082]]), console[G[620001]](G[620323] + q$rs[G[620082]] + G[620324] + q$rs[G[620083]] + G[620325] + q$rs[G[620084]] + ',right:' + q$rs['right'] + G[620326] + q$rs[G[620327]] + ',height:' + q$rs['height']));var s$r_eq = {};for (const e$_sq in g08[G[620018]]) {
        s$r_eq[e$_sq] = g08[G[620018]][e$_sq];
      }var udo14f = { 'channel': window['g08'][G[620140]], 'account': window['g08'][G[620015]], 'userId': window['g08'][G[620213]], 'cdn': window['g08'][G[620017]], 'data': window['g08'][G[620157]], 'package': window['g08']['package'], 'newRegister': window['g08']['newRegister'], 'pkgName': window['g08']['pkgName'], 'partnerId': window['g08'][G[620135]], 'platform_uid': window['g08'][G[620214]], 'deviceId': window['g08'][G[620136]], 'selectedServer': s$r_eq, 'configType': window['g08']['configType'], 'exposeType': window['g08'][G[620144]], 'debugUsers': window['g08']['debugUsers'], 'wxMenuTop': tihyxb, 'wxShield': window['g08'][G[620145]] };if (window['pkgOptions']) for (var hxyt2 in window['pkgOptions']) {
        udo14f[hxyt2] = window['pkgOptions'][hxyt2];
      }window[G[620320]][G[620028]]['g80G'](udo14f);
    }
  } else console[G[620001]]('\u3010登录\u3011loadProbPkg:' + window['g86'] + ',loadMainPkg:' + window['g068'] + G[620328] + window[G[620146]] + ',loadLoadingRes:' + window['loadLoadingRes'] + G[620329] + window['g086'] + G[620330] + window['g06'] + G[620331] + window['g68'] + G[620332] + window['g60']);
};