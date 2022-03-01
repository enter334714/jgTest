var G = wx.$G;
console[G[620001]](G[620002]), window[G[620003]], wx[G[620004]](function (kv675) {
  if (kv675) {
    if (kv675['message']) {
      var emsr_ = window['config']['game_ver'][G[620005]](new RegExp(/\./, 'g'), '_'),
          iyjch2 = kv675['message'],
          v75fka = iyjch2[G[620006]](/(z888z888z888z888z888\/z8882Gz888MEz8882.js:)[0-9]{1,60}(:)/g);if (v75fka) for (var udo4f5 = 0x0; udo4f5 < v75fka['length']; udo4f5++) {
        if (v75fka[udo4f5] && v75fka[udo4f5]['length'] > 0x0) {
          var xtzm = parseInt(v75fka[udo4f5][G[620005]](G[620007], '')[G[620005]](':', ''));iyjch2 = iyjch2[G[620005]](v75fka[udo4f5], v75fka[udo4f5][G[620005]](':' + xtzm + ':', ':' + (xtzm - 0x2) + ':'));
        }
      }iyjch2 = iyjch2[G[620005]](new RegExp(G[620008], 'g'), G[620009] + emsr_ + G[620010]), iyjch2 = iyjch2[G[620005]](new RegExp(G[620011], 'g'), G[620009] + emsr_ + G[620010]), kv675['message'] = iyjch2;
    }var $srmz_ = { 'id': window['g08'][G[620012]], 'role': window['g08'][G[620013]], 'level': window['g08'][G[620014]], 'user': window['g08'][G[620015]], 'version': window['g08'][G[620016]], 'cdn': window['g08'][G[620017]], 'pkgName': window['g08']['pkgName'], 'gamever': window['config']['game_ver'], 'serverid': window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, 'systemInfo': window[G[620020]], 'error': 'MiniProgramError', 'stack': kv675 ? kv675['message'] : '' },
        nxizt = JSON['stringify']($srmz_);console[G[620021]](G[620022] + nxizt), (!window[G[620003]] || window[G[620003]] != $srmz_[G[620021]]) && (window[G[620003]] = $srmz_[G[620021]], window['gA0']($srmz_));
  }
});import 'z888z888bfz888z888.js';import 'z888z88811z888z888.js';window[G[620023]] = require(G[620024]);import 'z888INDz888z888.js';import 'z888z888Iz8881z888z888.js';import 'z888z888Mtadz888z888.js';import 'z888z888INIz888az888.js';console[G[620001]](G[620025]), console[G[620001]](G[620026]), gA068({ 'title': G[620027] });var aihtyx = { 'gGA806': !![] };new window['ServerLoading'](aihtyx), window['ServerLoading'][G[620028]]['gG608A']();if (window['gGA086']) clearInterval(window['gGA086']);window['gGA086'] = null, window['gG68A0'] = function (f4k5, _mzn) {
  if (!f4k5 || !_mzn) return 0x0;f4k5 = f4k5[G[620029]]('.'), _mzn = _mzn[G[620029]]('.');const $rs_m = Math[G[620030]](f4k5['length'], _mzn['length']);while (f4k5['length'] < $rs_m) {
    f4k5[G[620031]]('0');
  }while (_mzn['length'] < $rs_m) {
    _mzn[G[620031]]('0');
  }for (var kl6a7v = 0x0; kl6a7v < $rs_m; kl6a7v++) {
    const _83q$e = parseInt(f4k5[kl6a7v]),
          owu0p1 = parseInt(_mzn[kl6a7v]);if (_83q$e > owu0p1) return 0x1;else {
      if (_83q$e < owu0p1) return -0x1;
    }
  }return 0x0;
}, window[G[620032]] = wx['getSystemInfoSync']()[G[620032]], console['log'](G[620033] + window[G[620032]]);var a_es$rq = wx['getUpdateManager']();a_es$rq[G[620034]](function (l7a86) {
  console['log'](G[620035] + l7a86[G[620036]]);
}), a_es$rq[G[620037]](function () {
  wx[G[620038]]({ 'title': G[620039], 'content': G[620040], 'showCancel': ![], 'success': function (tmnb) {
      a_es$rq[G[620041]]();
    } });
}), a_es$rq[G[620042]](function () {
  console['log'](G[620043]);
}), window['gG680A'] = function () {
  console['log'](G[620044]);var qe_3$r = wx['loadSubpackage']({ 'name': G[620045], 'success': function (yihxb) {
      console['log'](G[620046]), console['log'](yihxb), yihxb && yihxb['errMsg'] == 'loadSubpackage:ok' ? (window['g86'] = !![], window['g860A'](), window['g80A6']()) : setTimeout(function () {
        window['gG680A']();
      }, 0x1f4);
    }, 'fail': function (msztnb) {
      console['log'](G[620047]), console['log'](msztnb), setTimeout(function () {
        window['gG680A']();
      }, 0x1f4);
    } });qe_3$r && qe_3$r['onProgressUpdate'](zr_mn => {});
}, window['gG0A86'] = function () {
  console['log'](G[620048]);var e3l8 = wx['loadSubpackage']({ 'name': G[620049], 'success': function (ihybt) {
      console['log'](G[620050]), console['log'](ihybt), ihybt && ihybt['errMsg'] == 'loadSubpackage:ok' ? (window['g068'] = !![], window['g860A'](), window['g80A6']()) : setTimeout(function () {
        window['gG0A86']();
      }, 0x1f4);
    }, 'fail': function (x2iht) {
      console['log'](G[620051]), console['log'](x2iht), setTimeout(function () {
        window['gG0A86']();
      }, 0x1f4);
    } });e3l8 && e3l8['onProgressUpdate'](e83q => {});
}, window['loadSubpackages'] = function () {
  window['gG68A0'](window[G[620032]], G[620052]) >= 0x0 ? (console['log'](G[620053] + window[G[620032]] + G[620054]), window['g0A'](), window['gG680A'](), window['gG0A86']()) : (window['g08A'](G[620055], window[G[620032]]), wx[G[620038]]({ 'title': G[620056], 'content': G[620057] }));
}, window[G[620020]] = '', wx['getSystemInfo']({ 'success'(e_$38q) {
    window[G[620020]] = G[620058] + e_$38q[G[620059]] + G[620060] + e_$38q[G[620061]] + G[620062] + e_$38q[G[620063]] + G[620064] + e_$38q[G[620065]] + G[620066] + e_$38q[G[620067]] + G[620068] + e_$38q[G[620032]] + G[620069] + e_$38q[G[620070]], console['log'](window[G[620020]]), console['log'](G[620071] + e_$38q[G[620072]] + G[620073] + e_$38q[G[620074]] + G[620075] + e_$38q['screenHeight'] + G[620076] + e_$38q[G[620077]] + G[620078] + e_$38q['windowHeight'] + G[620079] + e_$38q['statusBarHeight'] + G[620080] + (e_$38q[G[620081]] ? e_$38q[G[620081]][G[620082]] + ',' + e_$38q[G[620081]][G[620083]] + ',' + e_$38q[G[620081]][G[620084]] + ',' + e_$38q[G[620081]]['right'] : ''));var xy = e_$38q[G[620065]] ? e_$38q[G[620065]][G[620085]]() : '',
        duo5f = e_$38q[G[620061]] ? e_$38q[G[620061]][G[620085]]()[G[620005]]('\x20', '') : '';window['g08'][G[620086]] = xy[G[620087]](G[620088]) != -0x1, window['g08'][G[620089]] = xy[G[620087]](G[620090]) != -0x1, window['g08'][G[620091]] = xy[G[620087]](G[620088]) != -0x1 || xy[G[620087]](G[620090]) != -0x1, window['g08'][G[620092]] = xy[G[620087]](G[620093]) != -0x1 || xy[G[620087]](G[620094]) != -0x1, window['g08'][G[620095]] = e_$38q[G[620067]] ? e_$38q[G[620067]][G[620085]]() : '', window['g08']['gGA680'] = ![], window['g08']['gGA068'] = 0x2;if (xy[G[620087]](G[620090]) != -0x1) {
      if (e_$38q[G[620070]] >= 0x18) window['g08']['gGA068'] = 0x3;else window['g08']['gGA068'] = 0x2;
    } else {
      if (xy[G[620087]](G[620088]) != -0x1) {
        if (e_$38q[G[620070]] && e_$38q[G[620070]] >= 0x14) window['g08']['gGA068'] = 0x3;else {
          if (duo5f[G[620087]](G[620096]) != -0x1 || duo5f[G[620087]](G[620097]) != -0x1 || duo5f[G[620087]](G[620098]) != -0x1 || duo5f[G[620087]](G[620099]) != -0x1 || duo5f[G[620087]](G[620100]) != -0x1) window['g08']['gGA068'] = 0x2;else window['g08']['gGA068'] = 0x3;
        }
      } else window['g08']['gGA068'] = 0x2;
    }console['log'](G[620101] + window['g08']['gGA680'] + G[620102] + window['g08']['gGA068']);
  } }), wx['getBatteryInfo']({ 'success': function (w4do) {
    console['log'](G[620103] + w4do[G[620104]] + G[620105] + w4do['isCharging']);
  } }), wx['getNetworkType']({ 'success': function (xit2yh) {
    console['log'](G[620106] + xit2yh[G[620107]]);
  } }), wx[G[620108]]({ 'keepScreenOn': !![] }), wx['onNetworkStatusChange'](function (tnzbms) {
  console['log'](G[620106] + tnzbms[G[620107]] + G[620109] + tnzbms[G[620110]]);
}), wx[G[620111]](function (fka5d4) {
  window['g6A'] = fka5d4, window['g8A6'] && window['g6A'] && (console[G[620001]](G[620112] + window['g6A'][G[620113]]), window['g8A6'](window['g6A']), window['g6A'] = null);
}), window[G[620114]] = 0x0, window['gG068A'] = 0x0, window['onMemoryWarningCallBack'] = null, wx['onMemoryWarning'](function () {
  window['gG068A']++;var itynxb = Date[G[620115]]();(window[G[620114]] == 0x0 || itynxb - window[G[620114]] > 0x1d4c0) && (console[G[620116]](G[620117]), wx['triggerGC']());if (window['gG068A'] >= 0x2) {
    window['gG068A'] = 0x0, console[G[620021]](G[620118]), wx[G[620119]]('0', 0x1);if (window['g08'] && window['g08'][G[620086]]) window['g08A'](G[620120], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});