var G = wx.$G;
import ar$q from '../z888z888basdz888/z8885sdkz888.js';window[G[620121]] = { 'wxVersion': window['config']['game_ver'] }, window[G[620122]] = ![], window['g80'] = 0x1, window[G[620123]] = 0x1, window['g608'] = !![], window[G[620124]] = !![], window['gGA608'] = '', window['isWaiFangWx'] = ![], window['g08'] = { 'base_cdn': G[620125], 'cdn': G[620125] }, g08[G[620126]] = {}, g08['package'] = '0', g08[G[620063]] = window[G[620121]][G[620127]], g08[G[620094]] = '', g08['os'] = '1', g08[G[620128]] = G[620129], g08[G[620130]] = G[620131], g08['logurl'] = 'https://log-tjqytest.shzbkj.com', g08[G[620132]] = G[620133], g08[G[620134]] = 'MQx0mYlUWO5XYKvgAIPKWgK1w722GKih', g08[G[620135]] = '1', g08['pkgName'] = '', g08[G[620136]] = '', g08[G[620137]] = 0x0, g08[G[620138]] = {}, g08[G[620139]] = parseInt(g08[G[620135]]), g08[G[620140]] = g08[G[620135]], g08[G[620018]] = {}, g08['gA0'] = 'https://jgcenter.sh9130.com/clientlog/', g08['showLogo'] = ![], g08['debugUsers'] = G[620141], g08[G[620142]] = Date[G[620115]](), g08['configType'] = G[620143], g08[G[620144]] = '_a', g08['loadingType'] = 0x2, g08[G[620016]] = 0x7c1, g08[G[620127]] = window[G[620121]][G[620127]], g08[G[620145]] = ![], g08[G[620086]] = ![], g08[G[620089]] = ![], g08[G[620092]] = ![], window['g680'] = 0x5, window['g68'] = ![], window['g86'] = ![], window['g068'] = ![], window[G[620146]] = ![], window['loadLoadingRes'] = ![], window['g086'] = ![], window['g60'] = ![], window['g06'] = ![], window['g860'] = ![], window[G[620147]] = null, window[G[620148]] = function (rnmz) {
  console['log'](G[620148], rnmz), wx['hideLoading']({}), wx[G[620038]]({ 'title': G[620056], 'content': rnmz, 'success'(l8q6) {
      if (l8q6[G[620149]]) console['log'](G[620150]);else l8q6[G[620151]] && console['log'](G[620152]);
    } });
}, window['gA608'] = function (tnyxbi) {
  console['log']('loginAlert', tnyxbi), gA086(), wx[G[620038]]({ 'title': G[620056], 'content': tnyxbi, 'confirmText': G[620153], 'cancelText': G[620154], 'success'(ztnmbs) {
      if (ztnmbs[G[620149]]) window['g0A']();else ztnmbs[G[620151]] && (console['log'](G[620155]), wx['exitMiniProgram']({}));
    } });
}, window[G[620156]] = function (d1o4) {
  console['log'](G[620156], d1o4), wx[G[620038]]({ 'title': G[620056], 'content': d1o4, 'confirmText': G[620157], 'showCancel': ![], 'complete'(du54of) {
      console['log'](G[620155]), wx['exitMiniProgram']({});
    } });
}, window['gA680'] = ![], window['gA068'] = function (sz_rn) {
  window['gA680'] = !![], wx['showLoading'](sz_rn);
}, window['gA086'] = function () {
  window['gA680'] && (window['gA680'] = ![], wx['hideLoading']({}));
}, window['gA860'] = function (inxy) {
  window['ServerLoading'][G[620028]]['gA860'](inxy);
}, window['msgCheck'] = function (wu4o1d, fva75k) {
  ar$q['msgCheck'](wu4o1d, function (eqs$r) {
    eqs$r && eqs$r[G[620158]] ? eqs$r[G[620158]][G[620159]] == 0x1 ? fva75k(!![]) : (fva75k(![]), console[G[620001]](G[620160] + eqs$r[G[620158]]['msg'])) : console['log']('msgCheck', eqs$r);
  });
}, window['gA806'] = function (mnzb) {
  console['log']('getJsURL', mnzb);
}, window['gA08'] = function (el68q3) {}, window['gA80'] = function (nixbtz, du4o1w, fdk5o4) {}, window['gA8'] = function (hiybxt) {
  console['log'](G[620161], hiybxt), window['ServerLoading'][G[620028]][G[620162]](), window['ServerLoading'][G[620028]][G[620163]](), window['ServerLoading'][G[620028]]['closeLoading']();
}, window['g8A'] = function (e83q$l) {
  window[G[620164]](0xe, G[620165] + e83q$l), window['gA608'](G[620166]);var bnxzit = { 'id': window['g08'][G[620012]], 'role': window['g08'][G[620013]], 'level': window['g08'][G[620014]], 'account': window['g08'][G[620015]], 'version': window['g08'][G[620016]], 'cdn': window['g08'][G[620017]], 'pkgName': window['g08']['pkgName'], 'gamever': window['config']['game_ver'], 'serverid': window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, 'systemInfo': window[G[620020]], 'error': G[620167], 'stack': e83q$l ? e83q$l : G[620166] },
      c2yhj = JSON['stringify'](bnxzit);console[G[620021]](G[620168] + c2yhj), window['gA0'](c2yhj);
}, window[G[620164]] = function (odu0, f5k7v) {
  sendApi(g08['logurl'], 'log.client_error', { 'game_pkg': g08['pkgName'], 'partner_id': g08[G[620135]], 'server_id': g08[G[620018]] && g08[G[620018]][G[620019]] > 0x0 ? g08[G[620018]][G[620019]] : 0x0, 'uid': g08[G[620015]] > 0x0 ? g08[G[620015]] : 0x0, 'type': odu0, 'info': f5k7v });
}, window['g0A8'] = function (jy2chi) {
  var la867 = JSON[G[620169]](jy2chi);la867['gamever'] = window['config']['game_ver'], la867[G[620170]] = window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, la867[G[620020]] = window[G[620020]];var f5av7 = JSON['stringify'](la867);console[G[620021]](G[620171] + f5av7), window['gA0'](f5av7);
}, window['g08A'] = function (er_3q$, me_$s) {
  var sm$z_ = { 'id': window['g08'][G[620012]], 'role': window['g08'][G[620013]], 'level': window['g08'][G[620014]], 'account': window['g08'][G[620015]], 'version': window['g08'][G[620016]], 'cdn': window['g08'][G[620017]], 'pkgName': window['g08']['pkgName'], 'gamever': window['config']['game_ver'], 'serverid': window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, 'systemInfo': window[G[620020]], 'error': er_3q$, 'stack': me_$s },
      xythb = JSON['stringify'](sm$z_);console[G[620116]](G[620172] + xythb), window['gA0'](xythb);
}, window['gA0'] = function (szmnbt) {
  if (window['g08'][G[620095]] == G[620173]) return;var xyhic2 = g08['gA0'] + G[620174] + g08[G[620015]];wx[G[620175]]({ 'url': xyhic2, 'method': G[620176], 'data': szmnbt, 'header': { 'content-type': G[620177], 'cache-control': G[620178] }, 'success': function (uof4d5) {
      DEBUG && console['log']('clientlog:', xyhic2, szmnbt, uof4d5);
    }, 'fail': function (s$mre_) {
      DEBUG && console['log']('clientlog:', xyhic2, szmnbt, s$mre_);
    }, 'complete': function () {} });
}, window['guild'] = function () {
  function wp1u90() {
    return ((0x1 + Math[G[620179]]()) * 0x10000 | 0x0)['toString'](0x10)['substring'](0x1);
  }return wp1u90() + wp1u90() + '-' + wp1u90() + '-' + wp1u90() + '-' + wp1u90() + '+' + wp1u90() + wp1u90() + wp1u90();
}, window['g0A'] = function () {
  console['log'](G[620180]);var q3_e$r = ar$q['getConfig']();g08[G[620140]] = q3_e$r[G[620181]], g08[G[620139]] = q3_e$r[G[620181]], g08[G[620135]] = q3_e$r[G[620181]], g08['pkgName'] = q3_e$r['game_pkg'];var e8_$q = { 'game_ver': g08[G[620063]] };g08[G[620136]] = this['guild'](), gA068({ 'title': G[620182] }), ar$q[G[620183]](e8_$q, this['g8A0'][G[620184]](this));
}, window['g8A0'] = function (rmszn) {
  var ybtnx = rmszn[G[620185]];sdkInitRes = rmszn, console['log'](G[620186] + ybtnx + G[620187] + (ybtnx == 0x1) + G[620188] + rmszn['game_ver'] + G[620189] + window[G[620121]][G[620127]]);if (!rmszn['game_ver'] || window['gG68A0'](window[G[620121]][G[620127]], rmszn['game_ver']) < 0x0) console['log'](G[620190]), g08[G[620130]] = G[620191], g08['logurl'] = 'https://log-tjqy.shzbkj.com', g08[G[620132]] = G[620192], g08[G[620017]] = G[620193], g08[G[620194]] = G[620195], g08[G[620196]] = 'xc', g08[G[620145]] = ![];else window['gG68A0'](window[G[620121]][G[620127]], rmszn['game_ver']) == 0x0 ? (console['log'](G[620197]), g08[G[620130]] = G[620131], g08['logurl'] = 'https://log-tjqytest.shzbkj.com', g08[G[620132]] = G[620133], g08[G[620017]] = G[620198], g08[G[620194]] = G[620195], g08[G[620196]] = G[620199], g08[G[620145]] = !![]) : (console['log'](G[620200]), g08[G[620130]] = G[620131], g08['logurl'] = 'https://log-tjqytest.shzbkj.com', g08[G[620132]] = G[620133], g08[G[620017]] = G[620198], g08[G[620194]] = G[620195], g08[G[620196]] = G[620199], g08[G[620145]] = ![]);g08[G[620137]] = config[G[620201]] ? config[G[620201]] : 0x0, this['g60A8'](), this['g608A'](), window['sdkLoginRetry'] = 0x5, gA068({ 'title': G[620202] }), ar$q['login'](this['g80A'][G[620184]](this));
}, window['sdkLoginRetry'] = 0x5, window['g80A'] = function (wuod, tbxhiy) {
  if (wuod == 0x0 && tbxhiy && tbxhiy[G[620203]]) {
    g08[G[620204]] = tbxhiy[G[620203]];var wup1o0 = this;gA068({ 'title': G[620205] }), sendApi(g08[G[620130]], 'User.login', { 'platform': g08[G[620128]], 'partner_id': g08[G[620135]], 'token': tbxhiy[G[620203]], 'game_pkg': g08['pkgName'], 'deviceId': g08[G[620136]], 'scene': G[620206] + g08[G[620137]] }, this['g6A08'][G[620184]](this), g680, g8A);
  } else tbxhiy && tbxhiy['errMsg'] && window['sdkLoginRetry'] > 0x0 && (tbxhiy['errMsg'][G[620087]](G[620207]) != -0x1 || tbxhiy['errMsg'][G[620087]](G[620208]) != -0x1 || tbxhiy['errMsg'][G[620087]](G[620209]) != -0x1 || tbxhiy['errMsg'][G[620087]](G[620210]) != -0x1 || tbxhiy['errMsg'][G[620087]](G[620211]) != -0x1 || tbxhiy['errMsg'][G[620087]](G[620212]) != -0x1) ? (window['sdkLoginRetry']--, ar$q['login'](this['g80A'][G[620184]](this))) : (window[G[620164]](0x1, 'AKSDK.login fail: status=' + wuod + ',errMsg=' + (tbxhiy ? tbxhiy['errMsg'] : '')), window['g08A']('sdkOnLoginError', JSON['stringify']({ 'status': wuod, 'data': tbxhiy })), window['gA608'](G[620213] + (tbxhiy && tbxhiy['errMsg'] ? '，' + tbxhiy['errMsg'] : '')));
}, window['g6A08'] = function (k54dfa) {
  if (!k54dfa) {
    window[G[620164]](0x2, 'User.login fail: response is null'), window['g08A']('userLoginError', G[620214]), window['gA608']('User.login failed');return;
  }if (k54dfa[G[620159]] != G[620215]) {
    window[G[620164]](0x2, 'User.login fail: state=' + k54dfa[G[620159]]), window['g08A']('userLoginError', JSON['stringify'](k54dfa)), window['gA608']('User.login failed: ' + k54dfa[G[620159]]);return;
  }g08[G[620216]] = String(k54dfa[G[620015]]), g08[G[620015]] = String(k54dfa[G[620015]]), g08[G[620067]] = String(k54dfa[G[620067]]), g08[G[620140]] = String(k54dfa[G[620067]]), g08[G[620217]] = String(k54dfa[G[620217]]), g08['php_sign'] = String(k54dfa['sign']), g08['php_signtime'] = String(k54dfa[G[620218]]), g08['sign'] = '';var l$83eq = this;gA068({ 'title': G[620219] });var tnzibx = localStorage['getItem'](G[620220] + g08['pkgName'] + g08[G[620015]]);if (tnzibx && tnzibx != '') {
    var hxy = Number(tnzibx);l$83eq['getCheckServers'](hxy);
  } else l$83eq['getDefaultServers']();
}, window['getDefaultServers'] = function () {
  var snzm_r = this;sendApi(g08[G[620130]], G[620221], { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, snzm_r['g6A80'][G[620184]](snzm_r), g680, g8A);
}, window['g6A80'] = function (rnzbm) {
  if (!rnzbm) {
    window[G[620164]](0x3, G[620222]), window['gA608'](G[620222]);return;
  }if (rnzbm[G[620159]] != G[620215]) {
    window[G[620164]](0x3, G[620223] + rnzbm[G[620159]]), window['gA608'](G[620223] + rnzbm[G[620159]]);return;
  }if (!rnzbm[G[620158]] || rnzbm[G[620158]]['length'] == 0x0) {
    window[G[620164]](0x3, G[620224]), window['gA608'](G[620225]);return;
  }this[G[620226]](rnzbm);
}, window['getCheckServers'] = function (va4kf5) {
  var du0w1 = this;sendApi(g08[G[620130]], G[620227], { 'server_id': va4kf5, 'time': Date[G[620115]]() / 0x3e8 }, du0w1['onUserLoginCheckServers'][G[620184]](du0w1), g680, g8A);
}, window['onUserLoginCheckServers'] = function (_rsm) {
  if (!_rsm) {
    window[G[620164]](0x4, G[620228]), this['getDefaultServers']();return;
  }if (_rsm[G[620159]] != G[620215]) {
    window[G[620164]](0x4, G[620229] + _rsm[G[620159]]), this['getDefaultServers']();return;
  }if (!_rsm[G[620158]] || _rsm[G[620158]]['length'] == 0x0) {
    window[G[620164]](0x4, G[620230]), this['getDefaultServers']();return;
  }this[G[620226]](_rsm), window['ServerLoading'] && window['ServerLoading'][G[620028]][G[620231]] && window['ServerLoading'][G[620028]][G[620231]](sdkInitRes['isShowSdkAge'], sdkInitRes['sdk_age_adaptation_icon'], sdkInitRes['sdk_age_adaptation_content'], sdkInitRes[G[620232]], sdkInitRes[G[620233]]);
}, window[G[620226]] = function (kl6va7) {
  g08['newRegister'] = kl6va7[G[620234]] != undefined ? kl6va7[G[620234]] : 0x0, g08[G[620018]] = { 'server_id': String(kl6va7[G[620158]][0x0][G[620019]]), 'server_name': String(kl6va7[G[620158]][0x0][G[620235]]), 'entry_ip': kl6va7[G[620158]][0x0][G[620236]], 'entry_port': parseInt(kl6va7[G[620158]][0x0][G[620237]]), 'status': g06A(kl6va7[G[620158]][0x0]), 'start_time': kl6va7[G[620158]][0x0][G[620238]], 'cdn': g08[G[620017]] }, this['g806A']();
}, window['g806A'] = function () {
  if (g08['newRegister'] == 0x1) {
    var pwou01 = g08[G[620018]][G[620239]];if (pwou01 === -0x1 || pwou01 === 0x0) {
      window[G[620164]](0xf, 'new register selectedServer status error: id=' + g08[G[620018]]['id'] + G[620240] + g08[G[620018]][G[620239]]), window['gA608'](pwou01 === -0x1 ? G[620241] : G[620242]);return;
    }g8A60(0x0, g08[G[620018]][G[620019]]), window['ServerLoading'][G[620028]]['openLoading'](g08['newRegister']);
  } else window['ServerLoading'][G[620028]][G[620243]](), gA086();window['g06'] = !![], window['g860A'](), window['g80A6']();
}, window['g60A8'] = function () {
  sendApi(g08[G[620130]], 'User.getCdnVersion', { 'game_pkg': g08['pkgName'], 'version_name': g08[G[620196]] }, this['reqVersionConfigCallBack'][G[620184]](this), g680, g8A);
}, window['reqVersionConfigCallBack'] = function (duof54) {
  if (!duof54) {
    window[G[620164]](0x5, 'User.getCdnVersion failed'), window['gA608']('User.getCdnVersion failed');return;
  }if (duof54[G[620159]] != G[620215]) {
    window[G[620164]](0x5, 'User.getCdnVersion failed: state=' + duof54[G[620159]]), window['gA608']('User.getCdnVersion failed: state=' + duof54[G[620159]]);return;
  }if (!duof54[G[620158]] || !duof54[G[620158]][G[620063]]) {
    window[G[620164]](0x5, 'User.getCdnVersion failed: version=' + (duof54[G[620158]] && duof54[G[620158]][G[620063]])), window['gA608']('User.getCdnVersion failed: version=' + (duof54[G[620158]] && duof54[G[620158]][G[620063]]));return;
  }duof54[G[620158]][G[620244]] && duof54[G[620158]][G[620244]]['length'] > 0xa && (g08[G[620245]] = duof54[G[620158]][G[620244]], g08[G[620017]] = duof54[G[620158]][G[620244]]), duof54[G[620158]][G[620063]] && (g08[G[620016]] = duof54[G[620158]][G[620063]]), console[G[620001]](G[620246] + g08[G[620016]] + G[620247] + g08[G[620196]]), window['g086'] = !![], window['g860A'](), window['g80A6']();
}, window['pkgOptions'], window['g608A'] = function () {
  sendApi(g08[G[620130]], 'Common.get_option_pkg', { 'game_pkg': g08['pkgName'] }, this['g68A0'][G[620184]](this), g680, g8A);
}, window['g68A0'] = function (bxiznt) {
  if (bxiznt && bxiznt[G[620159]] === G[620215] && bxiznt[G[620158]]) {
    window['pkgOptions'] = bxiznt[G[620158]];for (var o1dfu in bxiznt[G[620158]]) {
      g08[o1dfu] = bxiznt[G[620158]][o1dfu];
    }
  } else window[G[620164]](0xb, 'Common.get_option_pkg failed'), console[G[620001]]('reqPkgOptionsCallBack ' + bxiznt[G[620159]]);window['g60'] = !![], window['g80A6']();
}, window[G[620248]] = function (v6ak, zibx, j2cih, bithyx, hbiytx, vl6a78, q_esr$, q_r3, smrz_$, bxtiz) {
  hbiytx = String(hbiytx);var opw = q_esr$,
      eq38$ = q_r3;g08[G[620126]][hbiytx] = { 'productid': hbiytx, 'productname': opw, 'productdesc': eq38$, 'roleid': v6ak, 'rolename': zibx, 'rolelevel': j2cih, 'price': vl6a78, 'callback': smrz_$ }, sendApi(g08[G[620132]], G[620249], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'server_name': g08[G[620018]][G[620235]], 'level': j2cih, 'uid': g08[G[620015]], 'role_id': v6ak, 'role_name': zibx, 'product_id': hbiytx, 'product_name': opw, 'product_desc': eq38$, 'money': vl6a78, 'partner_id': g08[G[620135]] }, toPayCallBack, g680, g8A);
}, window[G[620250]] = function (txyhb) {
  if (txyhb && (txyhb[G[620251]] === 0xc8 || txyhb[G[620159]] == G[620215])) {
    var do45u = g08[G[620126]][String(txyhb[G[620252]])];if (do45u[G[620253]]) do45u[G[620253]](txyhb[G[620252]], txyhb[G[620254]], -0x1);ar$q[G[620255]]({ 'cpbill': txyhb[G[620254]], 'productid': txyhb[G[620252]], 'productname': do45u[G[620256]], 'productdesc': do45u[G[620257]], 'serverid': g08[G[620018]][G[620019]], 'servername': g08[G[620018]][G[620235]], 'roleid': do45u[G[620258]], 'rolename': do45u[G[620259]], 'rolelevel': do45u[G[620260]], 'price': do45u[G[620261]], 'extension': JSON['stringify']({ 'cp_order_id': txyhb[G[620254]] }) }, function (w0g19, me_$rs) {
      do45u[G[620253]] && w0g19 == 0x0 && do45u[G[620253]](txyhb[G[620252]], txyhb[G[620254]], w0g19);console[G[620001]](JSON['stringify']({ 'type': G[620262], 'status': w0g19, 'data': txyhb, 'role_name': do45u[G[620259]] }));if (w0g19 === 0x0) {} else {
        if (w0g19 === 0x1) {} else {
          if (w0g19 === 0x2) {}
        }
      }
    });
  } else {
    var mnzrs_ = txyhb ? G[620263] + txyhb[G[620251]] + G[620264] + txyhb[G[620159]] + G[620265] + txyhb[G[620001]] : G[620266];window[G[620164]](0xd, G[620267] + mnzrs_), alert(mnzrs_);
  }
}, window['g680A'] = function () {}, window['gA68'] = function (xbmt, bsrmnz, eql8, xynib, _$3e) {
  ar$q['logCreateRole'](g08[G[620018]][G[620019]], g08[G[620018]][G[620235]] || g08[G[620018]][G[620019]], xbmt, bsrmnz, eql8), sendApi(g08[G[620130]], G[620268], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'role_id': xbmt, 'uid': g08[G[620015]], 'role_name': bsrmnz, 'role_type': xynib, 'level': eql8 });
}, window['gA86'] = function (bmnxz, ibtyxh, xht, ixty2, zr_ms, s_nzmr, ybntx, $sr_e, emr$, tmnb) {
  g08[G[620012]] = bmnxz, g08[G[620013]] = ibtyxh, g08[G[620014]] = xht, ar$q['logEnterGame'](g08[G[620018]][G[620019]], g08[G[620018]][G[620235]] || g08[G[620018]][G[620019]], bmnxz, ibtyxh, xht), sendApi(g08[G[620130]], G[620269], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'role_id': bmnxz, 'uid': g08[G[620015]], 'role_name': ibtyxh, 'role_type': ixty2, 'level': xht, 'evolution': zr_ms });
}, window['g6A8'] = function (m$rz_, uf45, tnsz, srb, a76v8, msbrz, kvf75a, pu0wo, hxiybt, nitxbz) {
  g08[G[620012]] = m$rz_, g08[G[620013]] = uf45, g08[G[620014]] = tnsz, ar$q['logRoleUpLevel'](g08[G[620018]][G[620019]], g08[G[620018]][G[620235]] || g08[G[620018]][G[620019]], m$rz_, uf45, tnsz), sendApi(g08[G[620130]], G[620269], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'role_id': m$rz_, 'uid': g08[G[620015]], 'role_name': uf45, 'role_type': srb, 'level': tnsz, 'evolution': a76v8 });
}, window['g68A'] = function (okfd45) {}, window['gA6'] = function (xbithy) {
  ar$q[G[620270]](G[620270], function (a786v) {
    xbithy && xbithy(a786v);
  });
}, window[G[620271]] = function () {
  ar$q[G[620271]]();
}, window[G[620272]] = function () {
  ar$q[G[620273]]();
}, window[G[620274]] = function (ufd14o, qres$_, msr, o1wpu0, a4f5vk, hx2ty, xnmbt, xiz) {
  xiz = xiz || g08[G[620018]][G[620019]], sendApi(g08[G[620130]], 'User.get_code', { 'phone': ufd14o, 'role_id': qres$_, 'uid': g08[G[620015]], 'game_pkg': g08['pkgName'], 'partner_id': g08[G[620135]], 'server_id': xiz }, xnmbt, 0x2, null, function () {
    return !![];
  });
}, window[G[620111]] = function (tiynxb) {
  window['g8A6'] = tiynxb, window['g8A6'] && window['g6A'] && (console[G[620001]](G[620112] + window['g6A'][G[620113]]), window['g8A6'](window['g6A']), window['g6A'] = null);
}, window['g86A'] = function (eq_$3r, tnzbi, hc2jyi, mbxznt) {
  window[G[620275]]('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', { 'game_pkg': window['g08']['pkgName'], 'role_id': tnzbi, 'server_id': hc2jyi }, mbxznt);
}, window['g0A68'] = function (df1, e$_3q8) {
  function i2yxht(k57af) {
    var do1w = [],
        iyhb = [],
        hxci2 = window['config'][G[620276]];for (var tixzbn in hxci2) {
      var lka67v = Number(tixzbn);(!df1 || !df1['length'] || df1[G[620087]](lka67v) != -0x1) && (iyhb[G[620031]](hxci2[tixzbn]), do1w[G[620031]]([lka67v, 0x3]));
    }window['gG68A0'](window[G[620032]], G[620277]) >= 0x0 ? (console['log'](G[620278]), ar$q['subscribeMessage'] && ar$q['subscribeMessage'](iyhb, function (of41) {
      console['log'](G[620279]), console['log'](of41);if (of41 && of41['errMsg'] == 'requestSubscribeMessage:ok') for (var od5fk4 in hxci2) {
        if (of41[hxci2[od5fk4]] == G[620280]) {
          var a75fk = Number(od5fk4);for (var ihcj = 0x0; ihcj < do1w['length']; ihcj++) {
            if (do1w[ihcj][0x0] == a75fk) {
              do1w[ihcj][0x1] = 0x1;break;
            }
          }
        }
      }window['gG68A0'](window[G[620032]], G[620281]) >= 0x0 ? wx['getSetting']({ 'withSubscriptions': !![], 'success': function (_ems) {
          var afk4d5 = _ems['subscriptionsSetting']['itemSettings'];if (afk4d5) {
            console['log'](G[620282]), console['log'](afk4d5);for (var u91wp0 in hxci2) {
              if (afk4d5[hxci2[u91wp0]] == G[620280]) {
                var _8q = Number(u91wp0);for (var ms$r = 0x0; ms$r < do1w['length']; ms$r++) {
                  if (do1w[ms$r][0x0] == _8q) {
                    do1w[ms$r][0x1] = 0x2;break;
                  }
                }
              }
            }console['log'](do1w), e$_3q8 && e$_3q8(do1w);
          } else console['log'](G[620283]), console['log'](_ems), console['log'](do1w), e$_3q8 && e$_3q8(do1w);
        }, 'fail': function () {
          console['log'](G[620284]), console['log'](do1w), e$_3q8 && e$_3q8(do1w);
        } }) : (console['log'](G[620285] + window[G[620032]]), console['log'](do1w), e$_3q8 && e$_3q8(do1w));
    })) : (console['log'](G[620286] + window[G[620032]]), console['log'](do1w), e$_3q8 && e$_3q8(do1w)), wx[G[620287]](i2yxht);
  }wx[G[620288]](i2yxht);
}, window['g0A86'] = { 'isSuccess': ![], 'level': G[620289], 'isCharging': ![] }, window['g06A8'] = function (mre$_s) {
  wx['getBatteryInfo']({ 'success': function (nbtyi) {
      var $_emrs = window['g0A86'];$_emrs[G[620290]] = !![], $_emrs[G[620104]] = Number(nbtyi[G[620104]])[G[620291]](0x0), $_emrs['isCharging'] = nbtyi['isCharging'], mre$_s && mre$_s($_emrs[G[620290]], $_emrs[G[620104]], $_emrs['isCharging']);
    }, 'fail': function (ithx2) {
      console['log'](G[620292], ithx2['errMsg']);var lk7v6a = window['g0A86'];mre$_s && mre$_s(lk7v6a[G[620290]], lk7v6a[G[620104]], lk7v6a['isCharging']);
    } });
}, window['getNetworkType'] = function (wg9p) {
  wx['getNetworkType']({ 'success': function (_3r$qe) {
      wg9p && wg9p(!![], _3r$qe);
    }, 'fail': function (xiyhbt) {
      wg9p && wg9p(![], xiyhbt);
    } });
}, window['onNetworkStatusChange'] = function (avl86) {
  if (avl86) wx['onNetworkStatusChange'](avl86);
}, window['offNetworkStatusChange'] = function (kv765) {
  wx['offNetworkStatusChange'](kv765);
}, window[G[620275]] = function (_re$ms, p910gw, df4u5o, ntbsz, tmznbx, u41wd, ixchy2, z_s$mr) {
  if (ntbsz == undefined) ntbsz = 0x1;wx[G[620175]]({ 'url': _re$ms, 'method': ixchy2 || G[620293], 'responseType': G[620294], 'data': p910gw, 'header': { 'content-type': z_s$mr || G[620177] }, 'success': function ($r_) {
      DEBUG && console['log'](G[620295], _re$ms, info, $r_);if ($r_ && $r_[G[620296]] == 0xc8) {
        var sn_mr = $r_[G[620158]];!u41wd || u41wd(sn_mr) ? df4u5o && df4u5o(sn_mr) : window[G[620297]](_re$ms, p910gw, df4u5o, ntbsz, tmznbx, u41wd, $r_);
      } else window[G[620297]](_re$ms, p910gw, df4u5o, ntbsz, tmznbx, u41wd, $r_);
    }, 'fail': function (mr_szn) {
      DEBUG && console['log'](G[620298], _re$ms, info, mr_szn), window[G[620297]](_re$ms, p910gw, df4u5o, ntbsz, tmznbx, u41wd, mr_szn);
    }, 'complete': function () {} });
}, window[G[620297]] = function (o45uf, d4uo5, la687v, nmbs, tbxiny, e$r3_, $sm_zr) {
  nmbs - 0x1 > 0x0 ? setTimeout(function () {
    window[G[620275]](o45uf, d4uo5, la687v, nmbs - 0x1, tbxiny, e$r3_);
  }, 0x3e8) : tbxiny && tbxiny(JSON['stringify']({ 'url': o45uf, 'response': $sm_zr }));
}, window[G[620299]] = function (lk6a7, a54fk, rsmnz_, tyxin, h2xyic, e$ql83, zr_snm) {
  !rsmnz_ && (rsmnz_ = {});var qsre_$ = Math[G[620300]](Date[G[620115]]() / 0x3e8);rsmnz_[G[620218]] = qsre_$, rsmnz_[G[620301]] = a54fk;var eq3_ = Object[G[620302]](rsmnz_)[G[620303]](),
      yhix = '',
      zmsnt = '';for (var mtsz = 0x0; mtsz < eq3_['length']; mtsz++) {
    yhix = yhix + (mtsz == 0x0 ? '' : '&') + eq3_[mtsz] + rsmnz_[eq3_[mtsz]], zmsnt = zmsnt + (mtsz == 0x0 ? '' : '&') + eq3_[mtsz] + '=' + encodeURIComponent(rsmnz_[eq3_[mtsz]]);
  }yhix = yhix + g08[G[620134]];var tbih = 'sign=' + md5(yhix);send(lk6a7 + '?' + zmsnt + (zmsnt == '' ? '' : '&') + tbih, null, tyxin, h2xyic, e$ql83, zr_snm || function (kav54f) {
    return kav54f[G[620159]] == G[620215];
  }, null, G[620304]);
}, window['g068A'] = function (hyxt2, fva4k) {
  var ad4f = 0x0;g08[G[620018]] && (ad4f = g08[G[620018]][G[620019]]), sendApi(g08['logurl'], 'UserLog.reportUidStep', { 'partnerId': g08[G[620135]], 'gamePkg': g08['pkgName'], 'logTime': Math[G[620300]](Date[G[620115]]() / 0x3e8), 'platformUid': g08[G[620217]], 'type': hyxt2, 'serverId': ad4f }, null, 0x2, null, function () {
    return !![];
  });
}, window['g08A6'] = function (a5dk4) {
  sendApi(g08[G[620130]], 'Server.getServerGroup', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, g086A, g680, g8A);
}, window['g086A'] = function (hj2c) {
  if (hj2c && hj2c[G[620159]] === G[620215] && hj2c[G[620158]]) {
    hj2c[G[620158]][G[620305]]({ 'id': -0x2, 'name': G[620306] }), hj2c[G[620158]][G[620305]]({ 'id': -0x1, 'name': G[620307] }), g08['groupList'] = hj2c[G[620158]];if (window[G[620308]]) window[G[620308]][G[620309]]();
  } else {
    g08[G[620310]] = ![];var z_rnm = hj2c ? hj2c[G[620159]] : '';window[G[620164]](0x7, 'Server.getServerGroup fail: ' + z_rnm), window['gA608'](G[620311] + z_rnm);
  }
}, window['gA60'] = function (oud10) {
  sendApi(g08[G[620130]], 'Server.getServerByUid', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, gA06, g680, g8A);
}, window['gA06'] = function (yixt2) {
  g08[G[620312]] = ![];if (yixt2 && yixt2[G[620159]] === G[620215] && yixt2[G[620158]]) {
    for (var o4wdu = 0x0; o4wdu < yixt2[G[620158]]['length']; o4wdu++) {
      yixt2[G[620158]][o4wdu][G[620239]] = g06A(yixt2[G[620158]][o4wdu]);
    }g08[G[620138]][-0x1] = window['changeServerName'](yixt2[G[620158]]), window[G[620308]][G[620313]](-0x1);
  } else {
    var _znsmr = yixt2 ? yixt2[G[620159]] : '';window[G[620164]](0x8, 'Server.getServerByUid fail: ' + _znsmr), window['gA608'](G[620314] + _znsmr);
  }
}, window[G[620315]] = function (l386q) {
  sendApi(g08[G[620130]], 'Server.getServerByUid', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, l386q, g680, g8A);
}, window['g6A0'] = function (ka57vf, srm_n) {
  sendApi(g08[G[620130]], 'Server.getServerByGroup', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]], 'server_group_id': srm_n }, g60A, g680, g8A);
}, window['g60A'] = function ($mz_s) {
  g08[G[620312]] = ![];if ($mz_s && $mz_s[G[620159]] === G[620215] && $mz_s[G[620158]] && $mz_s[G[620158]][G[620158]]) {
    var xcih = $mz_s[G[620158]]['server_group_id'],
        do54u = [];for (var u4w1d = 0x0; u4w1d < $mz_s[G[620158]][G[620158]]['length']; u4w1d++) {
      $mz_s[G[620158]][G[620158]][u4w1d][G[620239]] = g06A($mz_s[G[620158]][G[620158]][u4w1d]), (do54u['length'] == 0x0 || $mz_s[G[620158]][G[620158]][u4w1d][G[620239]] != 0x0) && (do54u[do54u['length']] = $mz_s[G[620158]][G[620158]][u4w1d]);
    }g08[G[620138]][xcih] = window['changeServerName'](do54u), window[G[620308]][G[620313]](xcih);
  } else {
    var hti2y = $mz_s ? $mz_s[G[620159]] : '';window[G[620164]](0x9, 'Server.getServerByGroup fail: ' + hti2y), window['gA608'](G[620316] + hti2y);
  }
}, window['gG680'] = function (k54od) {
  sendApi(g08[G[620130]], 'Server.getRecommendServerList', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, reqServerRecommendCallBack, g680, g8A);
}, window[G[620317]] = function (_qe$8) {
  g08[G[620312]] = ![];if (_qe$8 && _qe$8[G[620159]] === G[620215] && _qe$8[G[620158]]) {
    for (var tnsmzb = 0x0; tnsmzb < _qe$8[G[620158]]['length']; tnsmzb++) {
      _qe$8[G[620158]][tnsmzb][G[620239]] = g06A(_qe$8[G[620158]][tnsmzb]);
    }g08[G[620138]][-0x2] = window['changeServerName'](_qe$8[G[620158]]), window[G[620308]][G[620313]](-0x2);
  } else {
    var nsmzrb = _qe$8 ? _qe$8[G[620159]] : '';window[G[620164]](0xa, 'Server.getRecommendServerList fail: ' + nsmzrb), alert(G[620318] + nsmzrb);
  }
}, window['changeServerName'] = function (fo41d) {
  return fo41d;
}, window['g0A6'] = function (esqr, res_) {
  esqr = esqr || g08[G[620018]][G[620019]], sendApi(g08[G[620130]], 'Common.get_anno', { 'type': '4', 'game_pkg': g08['pkgName'], 'server_id': esqr }, res_);
}, window[G[620319]] = function (txnz, u5fod, sbtzn, e8lq$) {
  sbtzn = sbtzn || g08[G[620018]][G[620019]], sendApi(g08[G[620130]], 'Common.get_new_anno', { 'type': txnz, 'game_pkg': u5fod, 'server_id': sbtzn }, e8lq$);
}, window[G[620320]] = function (od4u1, w41uo) {
  sendApi(g08[G[620130]], 'Common.get_option_pkg_detail', { 'game_pkg': od4u1 }, w41uo);
}, window['g06A'] = function (ntmszb) {
  if (ntmszb) {
    if (ntmszb[G[620239]] == 0x1) {
      if (ntmszb[G[620321]] == 0x1) return 0x2;else return 0x1;
    } else return ntmszb[G[620239]] == 0x0 ? 0x0 : -0x1;
  }return -0x1;
}, window['g8A60'] = function (q638e, rsmzn_) {
  g08[G[620322]] = { 'step': q638e, 'server_id': rsmzn_ };var va57fk = this;gA068({ 'title': G[620323] }), sendApi(g08[G[620130]], G[620324], { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'game_pkg': g08['pkgName'], 'server_id': rsmzn_, 'platform': g08[G[620067]], 'platform_uid': g08[G[620217]], 'check_login_time': g08['php_signtime'], 'check_login_sign': g08['php_sign'], 'version_name': g08[G[620196]] }, g8A06, g680, g8A, function (_sqr) {
    return _sqr[G[620159]] == G[620215] || _sqr[G[620001]] == G[620325] || _sqr[G[620001]] == 'sign_err';
  });
}, window['g8A06'] = function (byhxt) {
  var $req = this;if (byhxt && byhxt[G[620159]] === G[620215] && byhxt[G[620158]]) {
    var va5k7 = g08[G[620018]];va5k7[G[620326]] = g08[G[620139]], va5k7['sign'] = String(byhxt[G[620158]]['login_sign']), va5k7[G[620142]] = parseInt(byhxt[G[620158]][G[620218]]);if (byhxt[G[620158]][G[620327]]) va5k7[G[620327]] = parseInt(byhxt[G[620158]][G[620327]]);else va5k7[G[620327]] = parseInt(byhxt[G[620158]][G[620019]]);va5k7[G[620328]] = 0x0, va5k7[G[620017]] = g08[G[620245]], va5k7[G[620329]] = byhxt[G[620158]][G[620330]], va5k7[G[620331]] = byhxt[G[620158]][G[620331]];if (byhxt[G[620158]][G[620332]]) va5k7[G[620332]] = parseInt(byhxt[G[620158]][G[620332]]);console['log'](G[620333] + JSON['stringify'](va5k7[G[620331]])), g08['newRegister'] == 0x1 && va5k7[G[620331]] && va5k7[G[620331]][G[620334]] == 0x1 && (g08[G[620335]] = 0x1, window['ServerLoading'][G[620028]]['gG80']()), g86A0();
  } else {
    if (g08[G[620322]][G[620336]] >= 0x3) {
      var i2xhc = byhxt ? byhxt[G[620159]] : '';window[G[620164]](0xc, G[620337] + i2xhc), g8A(JSON['stringify'](byhxt)), window['gA608'](G[620338] + i2xhc);
    } else sendApi(g08[G[620130]], 'User.login', { 'platform': g08[G[620128]], 'partner_id': g08[G[620135]], 'token': g08[G[620204]], 'game_pkg': g08['pkgName'], 'deviceId': g08[G[620136]], 'scene': G[620206] + g08[G[620137]] }, function ($_mrs) {
      if (!$_mrs || $_mrs[G[620159]] != G[620215]) {
        window['gA608']('User.login failed: ' + $_mrs && $_mrs[G[620159]]);return;
      }g08['php_sign'] = String($_mrs['sign']), g08['php_signtime'] = String($_mrs[G[620218]]), setTimeout(function () {
        g8A60(g08[G[620322]][G[620336]] + 0x1, g08[G[620322]][G[620019]]);
      }, 0x5dc);
    }, g680, g8A, function (_rmz) {
      return _rmz[G[620159]] == G[620215] || _rmz[G[620159]] == G[620339];
    });
  }
}, window['g86A0'] = function () {
  ServerLoading[G[620028]]['openLoading'](g08['newRegister']), window['g68'] = !![], window['g80A6']();
}, window['g860A'] = function () {
  if (window['g86'] && window['g068'] && window[G[620146]] && window['loadLoadingRes'] && window['g086'] && window['g06']) {
    if (!window[G[620340]][G[620028]]) {
      console['log'](G[620341] + window[G[620340]][G[620028]]);var zmrbns = wx['getLaunchOptionsSync'](),
          f1du = zmrbns[G[620113]] ? zmrbns[G[620113]] : 0x0,
          f45kda = { 'cdn': window['g08'][G[620017]], 'spareCdn': window['g08'][G[620194]], 'newRegister': window['g08']['newRegister'], 'wxPC': window['g08'][G[620092]], 'wxIOS': window['g08'][G[620086]], 'wxAndroid': window['g08'][G[620089]], 'wxParam': { 'limitLoad': window['g08']['gGA680'], 'benchmarkLevel': window['g08']['gGA068'], 'wxFrom': window['config'][G[620201]] == G[620342] ? 0x1 : 0x0, 'wxSDKVersion': window[G[620032]] }, 'configType': window['g08']['configType'], 'exposeType': window['g08'][G[620144]], 'scene': f1du };new window[G[620340]](f45kda, window['g08'][G[620016]], window['gGA608']);
    }
  }
}, window['g80A6'] = function () {
  if (window['g86'] && window['g068'] && window[G[620146]] && window['loadLoadingRes'] && window['g086'] && window['g06'] && window['g68'] && window['g60']) {
    gA086();if (!g860) {
      g860 = !![];if (!window[G[620340]][G[620028]]) window['g860A']();var btzxin = 0x0,
          zxtbi = wx['getMenuButtonBoundingClientRect']();zxtbi && (window['g08'][G[620091]] && (btzxin = zxtbi[G[620082]]), console[G[620001]](G[620343] + zxtbi[G[620082]] + G[620344] + zxtbi[G[620083]] + G[620345] + zxtbi[G[620084]] + ',right:' + zxtbi['right'] + G[620346] + zxtbi[G[620347]] + ',height:' + zxtbi['height']));var ib = {};for (const q68e in g08[G[620018]]) {
        ib[q68e] = g08[G[620018]][q68e];
      }var j2hyi = { 'channel': window['g08'][G[620140]], 'account': window['g08'][G[620015]], 'userId': window['g08'][G[620216]], 'cdn': window['g08'][G[620017]], 'data': window['g08'][G[620158]], 'package': window['g08']['package'], 'newRegister': window['g08']['newRegister'], 'pkgName': window['g08']['pkgName'], 'partnerId': window['g08'][G[620135]], 'platform_uid': window['g08'][G[620217]], 'deviceId': window['g08'][G[620136]], 'selectedServer': ib, 'configType': window['g08']['configType'], 'exposeType': window['g08'][G[620144]], 'debugUsers': window['g08']['debugUsers'], 'wxMenuTop': btzxin, 'wxShield': window['g08'][G[620145]] };if (window['pkgOptions']) for (var ser_q$ in window['pkgOptions']) {
        j2hyi[ser_q$] = window['pkgOptions'][ser_q$];
      }window[G[620340]][G[620028]]['g80G'](j2hyi);if (g08[G[620018]] && g08[G[620018]][G[620019]]) localStorage[G[620348]](G[620220] + g08['pkgName'] + g08[G[620015]], g08[G[620018]][G[620019]]);
    }
  } else console[G[620001]]('\u3010登录\u3011loadProbPkg:' + window['g86'] + ',loadMainPkg:' + window['g068'] + G[620349] + window[G[620146]] + ',loadLoadingRes:' + window['loadLoadingRes'] + G[620350] + window['g086'] + G[620351] + window['g06'] + G[620352] + window['g68'] + G[620353] + window['g60']);
};