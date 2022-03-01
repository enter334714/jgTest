var G = wx.$G;
import al83q from '../z888z888basdz888/z8885sdkz888.js';window[G[620121]] = { 'wxVersion': window['config']['game_ver'] }, window[G[620122]] = ![], window['g80'] = 0x1, window[G[620123]] = 0x1, window['g608'] = !![], window[G[620124]] = !![], window['gGA608'] = '', window['g08'] = { 'base_cdn': G[620125], 'cdn': G[620125] }, g08[G[620126]] = {}, g08['package'] = '0', g08[G[620063]] = window[G[620121]][G[620127]], g08[G[620094]] = '', g08['os'] = '1', g08[G[620128]] = G[620129], g08[G[620130]] = G[620131], g08['logurl'] = 'https://log-tjqytest.shzbkj.com', g08[G[620132]] = G[620133], g08[G[620134]] = 'MQx0mYlUWO5XYKvgAIPKWgK1w722GKih', g08[G[620135]] = '1', g08['pkgName'] = '', g08[G[620136]] = '', g08[G[620137]] = 0x0, g08[G[620138]] = {}, g08[G[620139]] = parseInt(g08[G[620135]]), g08[G[620140]] = g08[G[620135]], g08[G[620018]] = {}, g08['gA0'] = 'https://jgcenter.sh9130.com/clientlog/', g08['showLogo'] = ![], g08['debugUsers'] = G[620141], g08[G[620142]] = Date[G[620115]](), g08['configType'] = G[620143], g08[G[620144]] = '_a', g08['loadingType'] = 0x2, g08[G[620016]] = 0x7c1, g08[G[620127]] = window[G[620121]][G[620127]], g08[G[620145]] = ![], g08[G[620086]] = ![], g08[G[620089]] = ![], g08[G[620092]] = ![], window['g680'] = 0x5, window['g68'] = ![], window['g86'] = ![], window['g068'] = ![], window[G[620146]] = ![], window['loadLoadingRes'] = ![], window['g086'] = ![], window['g60'] = ![], window['g06'] = ![], window['g860'] = ![], window[G[620147]] = function (l683v) {
  console['log'](G[620147], l683v), wx['hideLoading']({}), wx[G[620038]]({ 'title': G[620056], 'content': l683v, 'success'(mtnzbx) {
      if (mtnzbx[G[620148]]) console['log'](G[620149]);else mtnzbx[G[620150]] && console['log'](G[620151]);
    } });
}, window['gA608'] = function (w01uop) {
  console['log']('loginAlert', w01uop), gA086(), wx[G[620038]]({ 'title': G[620056], 'content': w01uop, 'confirmText': G[620152], 'cancelText': G[620153], 'success'(wo01p) {
      if (wo01p[G[620148]]) window['g0A']();else wo01p[G[620150]] && (console['log'](G[620154]), wx['exitMiniProgram']({}));
    } });
}, window[G[620155]] = function (esqr) {
  console['log'](G[620155], esqr), wx[G[620038]]({ 'title': G[620056], 'content': esqr, 'confirmText': G[620156], 'showCancel': ![], 'complete'(hc2yxi) {
      console['log'](G[620154]), wx['exitMiniProgram']({});
    } });
}, window['gA680'] = ![], window['gA068'] = function (df1o4u) {
  window['gA680'] = !![], wx['showLoading'](df1o4u);
}, window['gA086'] = function () {
  window['gA680'] && (window['gA680'] = ![], wx['hideLoading']({}));
}, window['gA860'] = function (up1w9) {
  window['ServerLoading'][G[620028]]['gA860'](up1w9);
}, window['msgCheck'] = function (zbt, rmzs_) {
  al83q['msgCheck'](zbt, function (dwo0u1) {
    dwo0u1 && dwo0u1[G[620157]] ? dwo0u1[G[620157]][G[620158]] == 0x1 ? rmzs_(!![]) : (rmzs_(![]), console[G[620001]](G[620159] + dwo0u1[G[620157]]['msg'])) : console['log']('msgCheck', dwo0u1);
  });
}, window['gA806'] = function (v678) {
  console['log']('getJsURL', v678);
}, window['gA08'] = function (f75vk) {}, window['gA80'] = function (wupo, r$sz_m, xyi2th) {}, window['gA8'] = function (lkav67) {
  console['log'](G[620160], lkav67), window['ServerLoading'][G[620028]][G[620161]](), window['ServerLoading'][G[620028]][G[620162]](), window['ServerLoading'][G[620028]]['closeLoading']();
}, window['g8A'] = function (k7fav5) {
  window['gA608'](G[620163]);var znxtmb = { 'id': window['g08'][G[620012]], 'role': window['g08'][G[620013]], 'level': window['g08'][G[620014]], 'account': window['g08'][G[620015]], 'version': window['g08'][G[620016]], 'cdn': window['g08'][G[620017]], 'pkgName': window['g08']['pkgName'], 'gamever': window['config']['game_ver'], 'serverid': window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, 'systemInfo': window[G[620020]], 'error': G[620164], 'stack': k7fav5 ? k7fav5 : G[620163] },
      f1du4o = JSON['stringify'](znxtmb);console[G[620021]](G[620165] + f1du4o), window['gA0'](f1du4o);
}, window['g0A8'] = function (biytnx) {
  var u1 = JSON[G[620166]](biytnx);u1['gamever'] = window['config']['game_ver'], u1[G[620167]] = window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, u1[G[620020]] = window[G[620020]];var u45ofd = JSON['stringify'](u1);console[G[620021]](G[620168] + u45ofd), window['gA0'](u45ofd);
}, window['g08A'] = function (nrszb, rzs_mn) {
  var vk4af = { 'id': window['g08'][G[620012]], 'role': window['g08'][G[620013]], 'level': window['g08'][G[620014]], 'account': window['g08'][G[620015]], 'version': window['g08'][G[620016]], 'cdn': window['g08'][G[620017]], 'pkgName': window['g08']['pkgName'], 'gamever': window['config']['game_ver'], 'serverid': window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, 'systemInfo': window[G[620020]], 'error': nrszb, 'stack': rzs_mn },
      k5af4d = JSON['stringify'](vk4af);console[G[620116]](G[620169] + k5af4d), window['gA0'](k5af4d);
}, window['gA0'] = function ($3el) {
  if (window['g08'][G[620095]] == G[620170]) return;var ihb = g08['gA0'] + G[620171] + g08[G[620015]];wx[G[620172]]({ 'url': ihb, 'method': G[620173], 'data': $3el, 'header': { 'content-type': G[620174], 'cache-control': G[620175] }, 'success': function (po0uw) {
      DEBUG && console['log']('clientlog:', ihb, $3el, po0uw);
    }, 'fail': function (j2ichy) {
      DEBUG && console['log']('clientlog:', ihb, $3el, j2ichy);
    }, 'complete': function () {} });
}, window['guild'] = function () {
  function v378() {
    return ((0x1 + Math[G[620176]]()) * 0x10000 | 0x0)['toString'](0x10)['substring'](0x1);
  }return v378() + v378() + '-' + v378() + '-' + v378() + '-' + v378() + '+' + v378() + v378() + v378();
}, window['g0A'] = function () {
  console['log'](G[620177]);var q863 = al83q['getConfig']();g08[G[620140]] = q863[G[620178]], g08[G[620139]] = q863[G[620178]], g08[G[620135]] = q863[G[620178]], g08['pkgName'] = q863['game_pkg'];var v6l8a = { 'game_ver': g08[G[620063]] };g08[G[620136]] = this['guild'](), gA068({ 'title': G[620179] }), al83q[G[620180]](v6l8a, this['g8A0'][G[620181]](this));
}, window['g8A0'] = function (_q$8) {
  var r_nmzs = _q$8[G[620182]];console['log'](G[620183] + r_nmzs + G[620184] + (r_nmzs == 0x1) + G[620185] + _q$8['game_ver'] + G[620186] + window[G[620121]][G[620127]]);if (!_q$8['game_ver'] || window['gG68A0'](window[G[620121]][G[620127]], _q$8['game_ver']) < 0x0) console['log'](G[620187]), g08[G[620130]] = G[620188], g08['logurl'] = 'https://log-tjqy.shzbkj.com', g08[G[620132]] = G[620189], g08[G[620017]] = G[620190], g08[G[620191]] = G[620192], g08[G[620193]] = 'xc', g08[G[620145]] = ![];else window['gG68A0'](window[G[620121]][G[620127]], _q$8['game_ver']) == 0x0 ? (console['log'](G[620194]), g08[G[620130]] = G[620131], g08['logurl'] = 'https://log-tjqytest.shzbkj.com', g08[G[620132]] = G[620133], g08[G[620017]] = G[620195], g08[G[620191]] = G[620192], g08[G[620193]] = G[620196], g08[G[620145]] = !![]) : (console['log'](G[620197]), g08[G[620130]] = G[620131], g08['logurl'] = 'https://log-tjqytest.shzbkj.com', g08[G[620132]] = G[620133], g08[G[620017]] = G[620195], g08[G[620191]] = G[620192], g08[G[620193]] = G[620196], g08[G[620145]] = ![]);g08[G[620137]] = config[G[620198]] ? config[G[620198]] : 0x0, this['g60A8'](), this['g608A'](), window['sdkLoginRetry'] = 0x5, gA068({ 'title': G[620199] }), al83q['login'](this['g80A'][G[620181]](this));
}, window['sdkLoginRetry'] = 0x5, window['g80A'] = function (ad54kf, a6v5) {
  if (ad54kf == 0x0 && a6v5 && a6v5[G[620200]]) {
    g08[G[620201]] = a6v5[G[620200]];var ql37 = this;gA068({ 'title': G[620202] }), sendApi(g08[G[620130]], 'User.login', { 'platform': g08[G[620128]], 'partner_id': g08[G[620135]], 'token': a6v5[G[620200]], 'game_pkg': g08['pkgName'], 'deviceId': g08[G[620136]], 'scene': G[620203] + g08[G[620137]] }, this['g6A08'][G[620181]](this), g680, g8A);
  } else a6v5 && a6v5['errMsg'] && window['sdkLoginRetry'] > 0x0 && (a6v5['errMsg'][G[620087]](G[620204]) != -0x1 || a6v5['errMsg'][G[620087]](G[620205]) != -0x1 || a6v5['errMsg'][G[620087]](G[620206]) != -0x1 || a6v5['errMsg'][G[620087]](G[620207]) != -0x1 || a6v5['errMsg'][G[620087]](G[620208]) != -0x1 || a6v5['errMsg'][G[620087]](G[620209]) != -0x1) ? (window['sdkLoginRetry']--, al83q['login'](this['g80A'][G[620181]](this))) : (window['g08A']('sdkOnLoginError', JSON['stringify']({ 'status': ad54kf, 'data': a6v5 })), window['gA608'](G[620210] + (a6v5 && a6v5['errMsg'] ? '，' + a6v5['errMsg'] : '')));
}, window['g6A08'] = function (yxbh) {
  if (!yxbh) {
    window['g08A']('userLoginError', G[620211]), window['gA608']('User.login failed');return;
  }if (yxbh[G[620158]] != G[620212]) {
    window['g08A']('userLoginError', JSON['stringify'](yxbh)), window['gA608']('User.login failed: ' + yxbh[G[620158]]);return;
  }g08[G[620213]] = String(yxbh[G[620015]]), g08[G[620015]] = String(yxbh[G[620015]]), g08[G[620067]] = String(yxbh[G[620067]]), g08[G[620140]] = String(yxbh[G[620067]]), g08[G[620214]] = String(yxbh[G[620214]]), g08['php_sign'] = String(yxbh['sign']), g08['php_signtime'] = String(yxbh[G[620215]]), g08['sign'] = '';var zsrmbn = this;gA068({ 'title': G[620216] }), sendApi(g08[G[620130]], G[620217], { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, zsrmbn['g6A80'][G[620181]](zsrmbn), g680, g8A);
}, window['g6A80'] = function (v76a5) {
  if (!v76a5) {
    window['gA608'](G[620218]);return;
  }if (v76a5[G[620158]] != G[620212]) {
    window['gA608'](G[620219] + v76a5[G[620158]]);return;
  }if (!v76a5[G[620157]] || v76a5[G[620157]]['length'] == 0x0) {
    window['gA608'](G[620220]);return;
  }g08['newRegister'] = v76a5[G[620221]], g08[G[620018]] = { 'server_id': String(v76a5[G[620157]][0x0][G[620019]]), 'server_name': String(v76a5[G[620157]][0x0][G[620222]]), 'entry_ip': v76a5[G[620157]][0x0][G[620223]], 'entry_port': parseInt(v76a5[G[620157]][0x0][G[620224]]), 'status': g06A(v76a5[G[620157]][0x0]), 'start_time': v76a5[G[620157]][0x0][G[620225]], 'cdn': g08[G[620017]] }, this['g806A']();
}, window['g806A'] = function () {
  if (g08['newRegister'] == 0x1) {
    var srm_$z = g08[G[620018]][G[620226]];if (srm_$z === -0x1 || srm_$z === 0x0) {
      window['gA608'](srm_$z === -0x1 ? G[620227] : G[620228]);return;
    }g8A60(0x0, g08[G[620018]][G[620019]]), window['ServerLoading'][G[620028]]['openLoading'](g08['newRegister']);
  } else window['ServerLoading'][G[620028]][G[620229]](), gA086();window['g06'] = !![], window['g860A'](), window['g80A6']();
}, window['g60A8'] = function () {
  sendApi(g08[G[620130]], 'User.getCdnVersion', { 'game_pkg': g08['pkgName'], 'version_name': g08[G[620193]] }, this['reqVersionConfigCallBack'][G[620181]](this), g680, g8A);
}, window['reqVersionConfigCallBack'] = function (nbmzxt) {
  if (!nbmzxt) {
    window['gA608']('User.getCdnVersion failed');return;
  }if (nbmzxt[G[620158]] != G[620212]) {
    window['gA608']('User.getCdnVersion failed: state=' + nbmzxt[G[620158]]);return;
  }if (!nbmzxt[G[620157]] || !nbmzxt[G[620157]][G[620063]]) {
    window['gA608']('User.getCdnVersion failed: version=' + (nbmzxt[G[620157]] && nbmzxt[G[620157]][G[620063]]));return;
  }nbmzxt[G[620157]][G[620230]] && nbmzxt[G[620157]][G[620230]]['length'] > 0xa && (g08[G[620231]] = nbmzxt[G[620157]][G[620230]], g08[G[620017]] = nbmzxt[G[620157]][G[620230]]), nbmzxt[G[620157]][G[620063]] && (g08[G[620016]] = nbmzxt[G[620157]][G[620063]]), console[G[620001]](G[620232] + g08[G[620016]] + G[620233] + g08[G[620193]]), window['g086'] = !![], window['g860A'](), window['g80A6']();
}, window['pkgOptions'], window['g608A'] = function () {
  sendApi(g08[G[620130]], 'Common.get_option_pkg', { 'game_pkg': g08['pkgName'] }, this['g68A0'][G[620181]](this), g680, g8A);
}, window['g68A0'] = function (sm_zr) {
  if (sm_zr[G[620158]] === G[620212] && sm_zr[G[620157]]) {
    window['pkgOptions'] = sm_zr[G[620157]];for (var fd4ak in sm_zr[G[620157]]) {
      g08[fd4ak] = sm_zr[G[620157]][fd4ak];
    }
  } else console[G[620001]]('reqPkgOptionsCallBack ' + sm_zr[G[620158]]);window['g60'] = !![], window['g80A6']();
}, window[G[620234]] = function (lk6av, vk5f4a, tbszmn, h2xiyt, a5fd, m_r$, cyhix2, g091, o1wu0d) {
  a5fd = String(a5fd);var v7l38 = cyhix2,
      bmtzn = g091;g08[G[620126]][a5fd] = { 'productid': a5fd, 'productname': v7l38, 'productdesc': bmtzn, 'roleid': lk6av, 'rolename': vk5f4a, 'rolelevel': tbszmn, 'price': m_r$, 'callback': o1wu0d }, sendApi(g08[G[620132]], G[620235], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'server_name': g08[G[620018]][G[620222]], 'level': tbszmn, 'uid': g08[G[620015]], 'role_id': lk6av, 'role_name': vk5f4a, 'product_id': a5fd, 'product_name': v7l38, 'product_desc': bmtzn, 'money': m_r$, 'partner_id': g08[G[620135]] }, toPayCallBack, g680, g8A);
}, window[G[620236]] = function (nmztb) {
  if (nmztb) {
    if (nmztb[G[620237]] === 0xc8 || nmztb[G[620158]] == G[620212]) {
      var yitnxb = g08[G[620126]][String(nmztb[G[620238]])];if (yitnxb[G[620239]]) yitnxb[G[620239]](nmztb[G[620238]], nmztb[G[620240]], -0x1);al83q[G[620241]]({ 'cpbill': nmztb[G[620240]], 'productid': nmztb[G[620238]], 'productname': yitnxb[G[620242]], 'productdesc': yitnxb[G[620243]], 'serverid': g08[G[620018]][G[620019]], 'servername': g08[G[620018]][G[620222]], 'roleid': yitnxb[G[620244]], 'rolename': yitnxb[G[620245]], 'rolelevel': yitnxb[G[620246]], 'price': yitnxb[G[620247]], 'extension': JSON['stringify']({ 'cp_order_id': nmztb[G[620240]] }) }, function (klva, $_mszr) {
        yitnxb[G[620239]] && klva == 0x0 && yitnxb[G[620239]](nmztb[G[620238]], nmztb[G[620240]], klva);console[G[620001]](JSON['stringify']({ 'type': G[620248], 'status': klva, 'data': nmztb, 'role_name': yitnxb[G[620245]] }));if (klva === 0x0) {} else {
          if (klva === 0x1) {} else {
            if (klva === 0x2) {}
          }
        }
      });
    } else alert(nmztb[G[620001]]);
  }
}, window['g680A'] = function () {}, window['gA68'] = function (_rzms, xtzmbn, s$r_mz, mtbxnz, cjhy) {
  al83q['logCreateRole'](g08[G[620018]][G[620019]], g08[G[620018]][G[620222]] || g08[G[620018]][G[620019]], _rzms, xtzmbn, s$r_mz), sendApi(g08[G[620130]], G[620249], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'role_id': _rzms, 'uid': g08[G[620015]], 'role_name': xtzmbn, 'role_type': mtbxnz, 'level': s$r_mz });
}, window['gA86'] = function (k4d5o, a7vkf5, wou10, qe_$rs, e368ql, icx2h, ythix2, k5f7va, u01o, eq83_) {
  g08[G[620012]] = k4d5o, g08[G[620013]] = a7vkf5, g08[G[620014]] = wou10, al83q['logEnterGame'](g08[G[620018]][G[620019]], g08[G[620018]][G[620222]] || g08[G[620018]][G[620019]], k4d5o, a7vkf5, wou10), sendApi(g08[G[620130]], G[620250], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'role_id': k4d5o, 'uid': g08[G[620015]], 'role_name': a7vkf5, 'role_type': qe_$rs, 'level': wou10, 'evolution': e368ql });
}, window['g6A8'] = function (htyix, kfda, p9wu01, a76v8, fd54, nr_smz, niztbx, tmbszn, bzxit, $_smzr) {
  g08[G[620012]] = htyix, g08[G[620013]] = kfda, g08[G[620014]] = p9wu01, al83q['logRoleUpLevel'](g08[G[620018]][G[620019]], g08[G[620018]][G[620222]] || g08[G[620018]][G[620019]], htyix, kfda, p9wu01), sendApi(g08[G[620130]], G[620250], { 'game_pkg': g08['pkgName'], 'server_id': g08[G[620018]][G[620019]], 'role_id': htyix, 'uid': g08[G[620015]], 'role_name': kfda, 'role_type': a76v8, 'level': p9wu01, 'evolution': fd54 });
}, window['g68A'] = function (_$8qe3) {}, window['gA6'] = function (ytixhb) {
  al83q[G[620251]](G[620251], function (rzn_ms) {
    ytixhb && ytixhb(rzn_ms);
  });
}, window[G[620252]] = function () {
  al83q[G[620252]]();
}, window[G[620253]] = function () {
  al83q[G[620254]]();
}, window[G[620255]] = function (wo0u1d, mnbrsz, d14ouw, kfva5, v5a, _mszr, l7ak6v, k6v5a7) {
  k6v5a7 = k6v5a7 || g08[G[620018]][G[620019]], sendApi(g08[G[620130]], 'User.get_code', { 'phone': wo0u1d, 'role_id': mnbrsz, 'uid': g08[G[620015]], 'game_pkg': g08['pkgName'], 'partner_id': g08[G[620135]], 'server_id': k6v5a7 }, l7ak6v);
}, window[G[620111]] = function (o1duw4) {
  window['g8A6'] = o1duw4, window['g8A6'] && window['g6A'] && (console[G[620001]](G[620112] + window['g6A'][G[620113]]), window['g8A6'](window['g6A']), window['g6A'] = null);
}, window['g86A'] = function (hcj2, q63e8l, nmt, rm$_se) {
  window[G[620256]]('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', { 'game_pkg': window['g08']['pkgName'], 'role_id': q63e8l, 'server_id': nmt }, rm$_se);
}, window['g0A68'] = function (u4of5d, wpg901) {
  function mzxbnt(fdo5) {
    var cy2ihj = [],
        v5k7f = [],
        zbmts = window['config'][G[620257]];for (var $m_rsz in zbmts) {
      var fak57 = Number($m_rsz);(!u4of5d || !u4of5d['length'] || u4of5d[G[620087]](fak57) != -0x1) && (v5k7f[G[620031]](zbmts[$m_rsz]), cy2ihj[G[620031]]([fak57, 0x3]));
    }window['gG68A0'](window[G[620032]], G[620258]) >= 0x0 ? (console['log'](G[620259]), al83q['subscribeMessage'] && al83q['subscribeMessage'](v5k7f, function (_$qe3r) {
      console['log'](G[620260]), console['log'](_$qe3r);if (_$qe3r && _$qe3r['errMsg'] == 'requestSubscribeMessage:ok') for (var e_3q in zbmts) {
        if (_$qe3r[zbmts[e_3q]] == G[620261]) {
          var hbityx = Number(e_3q);for (var k57fv = 0x0; k57fv < cy2ihj['length']; k57fv++) {
            if (cy2ihj[k57fv][0x0] == hbityx) {
              cy2ihj[k57fv][0x1] = 0x1;break;
            }
          }
        }
      }window['gG68A0'](window[G[620032]], G[620262]) >= 0x0 ? wx['getSetting']({ 'withSubscriptions': !![], 'success': function (zxtbm) {
          var i2chjy = zxtbm['subscriptionsSetting']['itemSettings'];if (i2chjy) {
            console['log'](G[620263]), console['log'](i2chjy);for (var xichy2 in zbmts) {
              if (i2chjy[zbmts[xichy2]] == G[620261]) {
                var $qs = Number(xichy2);for (var rszm_$ = 0x0; rszm_$ < cy2ihj['length']; rszm_$++) {
                  if (cy2ihj[rszm_$][0x0] == $qs) {
                    cy2ihj[rszm_$][0x1] = 0x2;break;
                  }
                }
              }
            }console['log'](cy2ihj), wpg901 && wpg901(cy2ihj);
          } else console['log'](G[620264]), console['log'](zxtbm), console['log'](cy2ihj), wpg901 && wpg901(cy2ihj);
        }, 'fail': function () {
          console['log'](G[620265]), console['log'](cy2ihj), wpg901 && wpg901(cy2ihj);
        } }) : (console['log'](G[620266] + window[G[620032]]), console['log'](cy2ihj), wpg901 && wpg901(cy2ihj));
    })) : (console['log'](G[620267] + window[G[620032]]), console['log'](cy2ihj), wpg901 && wpg901(cy2ihj)), wx[G[620268]](mzxbnt);
  }wx[G[620269]](mzxbnt);
}, window['g0A86'] = { 'isSuccess': ![], 'level': G[620270], 'isCharging': ![] }, window['g06A8'] = function (btmsz) {
  wx['getBatteryInfo']({ 'success': function (sbntz) {
      var a7v5f = window['g0A86'];a7v5f[G[620271]] = !![], a7v5f[G[620104]] = Number(sbntz[G[620104]])[G[620272]](0x0), a7v5f['isCharging'] = sbntz['isCharging'], btmsz && btmsz(a7v5f[G[620271]], a7v5f[G[620104]], a7v5f['isCharging']);
    }, 'fail': function ($_rzsm) {
      console['log'](G[620273], $_rzsm['errMsg']);var v8l7a6 = window['g0A86'];btmsz && btmsz(v8l7a6[G[620271]], v8l7a6[G[620104]], v8l7a6['isCharging']);
    } });
}, window[G[620256]] = function ($e3_q8, nbzsrm, sre_m, l7ak6, kfd4o5, rsbnm, sr$em, zrmnbs) {
  if (l7ak6 == undefined) l7ak6 = 0x1;wx[G[620172]]({ 'url': $e3_q8, 'method': sr$em || G[620274], 'responseType': G[620275], 'data': nbzsrm, 'header': { 'content-type': zrmnbs || G[620174] }, 'success': function (cij) {
      DEBUG && console['log'](G[620276], $e3_q8, info, cij);if (cij && cij[G[620277]] == 0xc8) {
        var wu01p9 = cij[G[620157]];!rsbnm || rsbnm(wu01p9) ? sre_m && sre_m(wu01p9) : window[G[620278]]($e3_q8, nbzsrm, sre_m, l7ak6, kfd4o5, rsbnm, cij);
      } else window[G[620278]]($e3_q8, nbzsrm, sre_m, l7ak6, kfd4o5, rsbnm, cij);
    }, 'fail': function (do4u) {
      DEBUG && console['log'](G[620279], $e3_q8, info, do4u), window[G[620278]]($e3_q8, nbzsrm, sre_m, l7ak6, kfd4o5, rsbnm, do4u);
    }, 'complete': function () {} });
}, window[G[620278]] = function (srzm_$, zmbrsn, l837, es$m_, z_msr$, nmtbsz, itbyxh) {
  es$m_ - 0x1 > 0x0 ? setTimeout(function () {
    window[G[620256]](srzm_$, zmbrsn, l837, es$m_ - 0x1, z_msr$, nmtbsz);
  }, 0x3e8) : z_msr$ && z_msr$(JSON['stringify']({ 'url': srzm_$, 'response': itbyxh }));
}, window[G[620280]] = function (bytni, r$s_qe, bzrsmn, uowd, nzsbmr, v368l7, er$_3) {
  !bzrsmn && (bzrsmn = {});var xbyhti = Math[G[620281]](Date[G[620115]]() / 0x3e8);bzrsmn[G[620215]] = xbyhti, bzrsmn[G[620282]] = r$s_qe;var o1dwu = Object[G[620283]](bzrsmn)[G[620284]](),
      u14do = '',
      zrn_s = '';for (var yxithb = 0x0; yxithb < o1dwu['length']; yxithb++) {
    u14do = u14do + (yxithb == 0x0 ? '' : '&') + o1dwu[yxithb] + bzrsmn[o1dwu[yxithb]], zrn_s = zrn_s + (yxithb == 0x0 ? '' : '&') + o1dwu[yxithb] + '=' + encodeURIComponent(bzrsmn[o1dwu[yxithb]]);
  }u14do = u14do + g08[G[620134]];var nmtzbx = 'sign=' + md5(u14do);send(bytni + '?' + zrn_s + (zrn_s == '' ? '' : '&') + nmtzbx, null, uowd, nzsbmr, v368l7, er$_3 || function (nstmb) {
    return nstmb[G[620158]] == G[620212];
  }, null, G[620285]);
}, window['g068A'] = function (du1o4w, zxnit) {
  var qe38_$ = 0x0;g08[G[620018]] && (qe38_$ = g08[G[620018]][G[620019]]), sendApi(g08['logurl'], 'UserLog.reportUidStep', { 'partnerId': g08[G[620135]], 'gamePkg': g08['pkgName'], 'logTime': Math[G[620281]](Date[G[620115]]() / 0x3e8), 'platformUid': g08[G[620214]], 'type': du1o4w, 'serverId': qe38_$ }, null, 0x2, null, function () {
    return !![];
  });
}, window['g08A6'] = function (dou41) {
  sendApi(g08[G[620130]], 'Server.getServerGroup', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, g086A, g680, g8A);
}, window['g086A'] = function (gp0w) {
  if (gp0w[G[620158]] === G[620212] && gp0w[G[620157]]) {
    gp0w[G[620157]][G[620286]]({ 'id': -0x2, 'name': G[620287] }), gp0w[G[620157]][G[620286]]({ 'id': -0x1, 'name': G[620288] }), g08['groupList'] = gp0w[G[620157]];if (window[G[620289]]) window[G[620289]][G[620290]]();
  } else g08[G[620291]] = ![], window['gA608'](G[620292] + gp0w[G[620158]]);
}, window['gA60'] = function (nxtyi) {
  sendApi(g08[G[620130]], 'Server.getServerByUid', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, gA06, g680, g8A);
}, window['gA06'] = function (zixnt) {
  g08[G[620293]] = ![];if (zixnt[G[620158]] === G[620212] && zixnt[G[620157]]) {
    for (var vk7 = 0x0; vk7 < zixnt[G[620157]]['length']; vk7++) {
      zixnt[G[620157]][vk7][G[620226]] = g06A(zixnt[G[620157]][vk7]);
    }g08[G[620138]][-0x1] = window['changeServerName'](zixnt[G[620157]]), window[G[620289]][G[620294]](-0x1);
  } else window['gA608'](G[620295] + zixnt[G[620158]]);
}, window[G[620296]] = function (mnbrzs) {
  sendApi(g08[G[620130]], 'Server.getServerByUid', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, mnbrzs, g680, g8A);
}, window['g6A0'] = function (znbtix, rs$z_) {
  sendApi(g08[G[620130]], 'Server.getServerByGroup', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]], 'server_group_id': rs$z_ }, g60A, g680, g8A);
}, window['g60A'] = function (okfd4) {
  g08[G[620293]] = ![];if (okfd4[G[620158]] === G[620212] && okfd4[G[620157]] && okfd4[G[620157]][G[620157]]) {
    var lkv7a = okfd4[G[620157]]['server_group_id'],
        fk5o = [];for (var ou4f1 = 0x0; ou4f1 < okfd4[G[620157]][G[620157]]['length']; ou4f1++) {
      okfd4[G[620157]][G[620157]][ou4f1][G[620226]] = g06A(okfd4[G[620157]][G[620157]][ou4f1]), (fk5o['length'] == 0x0 || okfd4[G[620157]][G[620157]][ou4f1][G[620226]] != 0x0) && (fk5o[fk5o['length']] = okfd4[G[620157]][G[620157]][ou4f1]);
    }g08[G[620138]][lkv7a] = window['changeServerName'](fk5o), window[G[620289]][G[620294]](lkv7a);
  } else window['gA608'](G[620297] + okfd4[G[620158]]);
}, window['gG680'] = function (tbnms) {
  sendApi(g08[G[620130]], 'Server.getRecommendServerList', { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'version': g08[G[620063]], 'game_pkg': g08['pkgName'], 'device': g08[G[620136]] }, reqServerRecommendCallBack, g680, g8A);
}, window[G[620298]] = function (k54fad) {
  g08[G[620293]] = ![];if (k54fad[G[620158]] === G[620212] && k54fad[G[620157]]) {
    for (var u1p0ow = 0x0; u1p0ow < k54fad[G[620157]]['length']; u1p0ow++) {
      k54fad[G[620157]][u1p0ow][G[620226]] = g06A(k54fad[G[620157]][u1p0ow]);
    }g08[G[620138]][-0x2] = window['changeServerName'](k54fad[G[620157]]), window[G[620289]][G[620294]](-0x2);
  } else alert(G[620299] + k54fad[G[620158]]);
}, window['changeServerName'] = function (vf4k) {
  if (!vf4k && vf4k['length'] <= 0x0) return vf4k;for (let ak5v67 = 0x0; ak5v67 < vf4k['length']; ak5v67++) {
    vf4k[ak5v67][G[620300]] && vf4k[ak5v67][G[620300]] == 0x1 && (vf4k[ak5v67][G[620222]] += G[620301]);
  }return vf4k;
}, window['g0A6'] = function (snbmzt, wu0p9) {
  snbmzt = snbmzt || g08[G[620018]][G[620019]], sendApi(g08[G[620130]], 'Common.get_anno', { 'type': '4', 'game_pkg': g08['pkgName'], 'server_id': snbmzt }, wu0p9);
}, window[G[620302]] = function (e$m_s, res_q, sztn, hyitbx) {
  sztn = sztn || g08[G[620018]][G[620019]], sendApi(g08[G[620130]], 'Common.get_new_anno', { 'type': e$m_s, 'game_pkg': res_q, 'server_id': sztn }, hyitbx);
}, window[G[620303]] = function (o1wu0, $re3_) {
  sendApi(g08[G[620130]], 'Common.get_option_pkg_detail', { 'game_pkg': o1wu0 }, $re3_);
}, window['g06A'] = function (v8l7a) {
  if (v8l7a) {
    if (v8l7a[G[620226]] == 0x1) {
      if (v8l7a[G[620304]] == 0x1) return 0x2;else return 0x1;
    } else return v8l7a[G[620226]] == 0x0 ? 0x0 : -0x1;
  }return -0x1;
}, window['g8A60'] = function (_qr3$e, xt2y) {
  g08[G[620305]] = { 'step': _qr3$e, 'server_id': xt2y };var hixtby = this;gA068({ 'title': G[620306] }), sendApi(g08[G[620130]], G[620307], { 'partner_id': g08[G[620135]], 'uid': g08[G[620015]], 'game_pkg': g08['pkgName'], 'server_id': xt2y, 'platform': g08[G[620067]], 'platform_uid': g08[G[620214]], 'check_login_time': g08['php_signtime'], 'check_login_sign': g08['php_sign'], 'version_name': g08[G[620193]] }, g8A06, g680, g8A, function (k4a) {
    return k4a[G[620158]] == G[620212] || k4a[G[620001]] == G[620308] || k4a[G[620001]] == 'sign_err';
  });
}, window['g8A06'] = function (v3l67) {
  var w01pg9 = this;if (v3l67[G[620158]] === G[620212] && v3l67[G[620157]]) {
    var nzrsm = g08[G[620018]];nzrsm[G[620309]] = g08[G[620139]], nzrsm['sign'] = String(v3l67[G[620157]]['login_sign']), nzrsm[G[620142]] = parseInt(v3l67[G[620157]][G[620215]]);if (v3l67[G[620157]][G[620310]]) nzrsm[G[620310]] = parseInt(v3l67[G[620157]][G[620310]]);else nzrsm[G[620310]] = parseInt(v3l67[G[620157]][G[620019]]);nzrsm[G[620311]] = 0x0, nzrsm[G[620017]] = g08[G[620231]], nzrsm[G[620312]] = v3l67[G[620157]][G[620313]], nzrsm[G[620314]] = v3l67[G[620157]][G[620314]];if (v3l67[G[620157]][G[620315]]) nzrsm[G[620315]] = parseInt(v3l67[G[620157]][G[620315]]);console['log'](G[620316] + JSON['stringify'](nzrsm[G[620314]])), g08['newRegister'] == 0x1 && nzrsm[G[620314]] && nzrsm[G[620314]][G[620317]] == 0x1 && (g08[G[620318]] = 0x1, window['ServerLoading'][G[620028]]['gG80']()), g86A0();
  } else g08[G[620305]][G[620319]] >= 0x3 ? (g8A(JSON['stringify'](v3l67)), window['gA608'](G[620320] + v3l67[G[620158]])) : sendApi(g08[G[620130]], 'User.login', { 'platform': g08[G[620128]], 'partner_id': g08[G[620135]], 'token': g08[G[620201]], 'game_pkg': g08['pkgName'], 'deviceId': g08[G[620136]], 'scene': G[620203] + g08[G[620137]] }, function (cyh) {
    if (!cyh || cyh[G[620158]] != G[620212]) {
      window['gA608']('User.login failed: ' + cyh && cyh[G[620158]]);return;
    }g08['php_sign'] = String(cyh['sign']), g08['php_signtime'] = String(cyh[G[620215]]), setTimeout(function () {
      g8A60(g08[G[620305]][G[620319]] + 0x1, g08[G[620305]][G[620019]]);
    }, 0x5dc);
  }, g680, g8A, function (w1) {
    return w1[G[620158]] == G[620212] || w1[G[620158]] == G[620321];
  });
}, window['g86A0'] = function () {
  ServerLoading[G[620028]]['openLoading'](g08['newRegister']), window['g68'] = !![], window['g80A6']();
}, window['g860A'] = function () {
  if (window['g86'] && window['g068'] && window[G[620146]] && window['loadLoadingRes'] && window['g086'] && window['g06']) {
    if (!window[G[620322]][G[620028]]) {
      console['log'](G[620323] + window[G[620322]][G[620028]]);var p1uo0w = wx['getLaunchOptionsSync'](),
          hcxy2 = p1uo0w[G[620113]] ? p1uo0w[G[620113]] : 0x0,
          v867al = { 'cdn': window['g08'][G[620017]], 'spareCdn': window['g08'][G[620191]], 'newRegister': window['g08']['newRegister'], 'wxPC': window['g08'][G[620092]], 'wxIOS': window['g08'][G[620086]], 'wxAndroid': window['g08'][G[620089]], 'wxParam': { 'limitLoad': window['g08']['gGA680'], 'benchmarkLevel': window['g08']['gGA068'], 'wxFrom': window['config'][G[620198]] == G[620324] ? 0x1 : 0x0, 'wxSDKVersion': window[G[620032]] }, 'configType': window['g08']['configType'], 'exposeType': window['g08'][G[620144]], 'scene': hcxy2 };new window[G[620322]](v867al, window['g08'][G[620016]], window['gGA608']);
    }
  }
}, window['g80A6'] = function () {
  if (window['g86'] && window['g068'] && window[G[620146]] && window['loadLoadingRes'] && window['g086'] && window['g06'] && window['g68'] && window['g60']) {
    gA086();if (!g860) {
      g860 = !![];if (!window[G[620322]][G[620028]]) window['g860A']();var yhtibx = 0x0,
          xntz = wx['getMenuButtonBoundingClientRect']();xntz && (window['g08'][G[620091]] && (yhtibx = xntz[G[620082]]), console[G[620001]](G[620325] + xntz[G[620082]] + G[620326] + xntz[G[620083]] + G[620327] + xntz[G[620084]] + ',right:' + xntz['right'] + G[620328] + xntz[G[620329]] + ',height:' + xntz['height']));var nzmrs_ = {};for (const bhxti in g08[G[620018]]) {
        nzmrs_[bhxti] = g08[G[620018]][bhxti];
      }var opu01w = { 'channel': window['g08'][G[620140]], 'account': window['g08'][G[620015]], 'userId': window['g08'][G[620213]], 'cdn': window['g08'][G[620017]], 'data': window['g08'][G[620157]], 'package': window['g08']['package'], 'newRegister': window['g08']['newRegister'], 'pkgName': window['g08']['pkgName'], 'partnerId': window['g08'][G[620135]], 'platform_uid': window['g08'][G[620214]], 'deviceId': window['g08'][G[620136]], 'selectedServer': nzmrs_, 'configType': window['g08']['configType'], 'exposeType': window['g08'][G[620144]], 'debugUsers': window['g08']['debugUsers'], 'wxMenuTop': yhtibx, 'wxShield': window['g08'][G[620145]] };if (window['pkgOptions']) for (var o1df4u in window['pkgOptions']) {
        opu01w[o1df4u] = window['pkgOptions'][o1df4u];
      }window[G[620322]][G[620028]]['g80G'](opu01w);
    }
  } else console[G[620001]]('\u3010登录\u3011loadProbPkg:' + window['g86'] + ',loadMainPkg:' + window['g068'] + G[620330] + window[G[620146]] + ',loadLoadingRes:' + window['loadLoadingRes'] + G[620331] + window['g086'] + G[620332] + window['g06'] + G[620333] + window['g68'] + G[620334] + window['g60']);
};