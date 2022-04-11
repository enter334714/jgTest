var G = wx.$G;
console[G[620001]](G[620002]), window[G[620003]], wx[G[620004]](function (wdu41) {
  if (wdu41) {
    if (wdu41['message']) {
      var d5k4fa = window['config']['game_ver'][G[620005]](new RegExp(/\./, 'g'), '_'),
          q_r$se = wdu41['message'],
          g1p = q_r$se[G[620006]](/(z888z888z888z888z888\/z8882Gz888MEz8882.js:)[0-9]{1,60}(:)/g);if (g1p) for (var l37 = 0x0; l37 < g1p['length']; l37++) {
        if (g1p[l37] && g1p[l37]['length'] > 0x0) {
          var $z_sm = parseInt(g1p[l37][G[620005]](G[620007], '')[G[620005]](':', ''));q_r$se = q_r$se[G[620005]](g1p[l37], g1p[l37][G[620005]](':' + $z_sm + ':', ':' + ($z_sm - 0x2) + ':'));
        }
      }q_r$se = q_r$se[G[620005]](new RegExp(G[620008], 'g'), G[620009] + d5k4fa + G[620010]), q_r$se = q_r$se[G[620005]](new RegExp(G[620011], 'g'), G[620009] + d5k4fa + G[620010]), wdu41['message'] = q_r$se;
    }var $qle3 = { 'id': window['g08'][G[620012]], 'role': window['g08'][G[620013]], 'level': window['g08'][G[620014]], 'user': window['g08'][G[620015]], 'version': window['g08'][G[620016]], 'cdn': window['g08'][G[620017]], 'pkgName': window['g08']['pkgName'], 'gamever': window['config']['game_ver'], 'serverid': window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, 'systemInfo': window[G[620020]], 'error': 'MiniProgramError', 'stack': wdu41 ? wdu41['message'] : '' },
        s_$eq = JSON['stringify']($qle3);console[G[620021]](G[620022] + s_$eq), (!window[G[620003]] || window[G[620003]] != $qle3[G[620021]]) && (window[G[620003]] = $qle3[G[620021]], window['gA0']($qle3));
  }
});import 'z888z888bfz888z888.js';import 'z888z88811z888z888.js';window[G[620023]] = require(G[620024]);import 'z888INDz888z888.js';import 'z888z888Iz8881z888z888.js';import 'z888z888Mtadz888z888.js';import 'z888z888INIz888az888.js';console[G[620001]](G[620025]), console[G[620001]](G[620026]), gA068({ 'title': G[620027] });var auwo1p0 = { 'gGA806': !![] };new window['ServerLoading'](auwo1p0), window['ServerLoading'][G[620028]]['gG608A']();if (window['gGA086']) clearInterval(window['gGA086']);window['gGA086'] = null, window['gG68A0'] = function (vak54f, _znsr) {
  if (!vak54f || !_znsr) return 0x0;vak54f = vak54f[G[620029]]('.'), _znsr = _znsr[G[620029]]('.');const icy2hj = Math[G[620030]](vak54f['length'], _znsr['length']);while (vak54f['length'] < icy2hj) {
    vak54f[G[620031]]('0');
  }while (_znsr['length'] < icy2hj) {
    _znsr[G[620031]]('0');
  }for (var ybtn = 0x0; ybtn < icy2hj; ybtn++) {
    const rq_e$3 = parseInt(vak54f[ybtn]),
          $rsem = parseInt(_znsr[ybtn]);if (rq_e$3 > $rsem) return 0x1;else {
      if (rq_e$3 < $rsem) return -0x1;
    }
  }return 0x0;
}, window[G[620032]] = wx['getSystemInfoSync']()[G[620032]], console['log'](G[620033] + window[G[620032]]);var axbyih = wx['getUpdateManager']();axbyih[G[620034]](function (u0dw1o) {
  console['log'](G[620035] + u0dw1o[G[620036]]);
}), axbyih[G[620037]](function () {
  wx[G[620038]]({ 'title': G[620039], 'content': G[620040], 'showCancel': ![], 'success': function (tmznbx) {
      axbyih[G[620041]]();
    } });
}), axbyih[G[620042]](function () {
  console['log'](G[620043]);
}), window['gG680A'] = function () {
  console['log'](G[620044]);var do4fu5 = wx['loadSubpackage']({ 'name': G[620045], 'success': function (sreq) {
      console['log'](G[620046]), console['log'](sreq), sreq && sreq['errMsg'] == 'loadSubpackage:ok' ? (window['g86'] = !![], window['g860A'](), window['g80A6']()) : setTimeout(function () {
        window['gG680A']();
      }, 0x1f4);
    }, 'fail': function (xtmbnz) {
      console['log'](G[620047]), console['log'](xtmbnz), setTimeout(function () {
        window['gG680A']();
      }, 0x1f4);
    } });do4fu5 && do4fu5['onProgressUpdate'](c2yj => {});
}, window['gG0A86'] = function () {
  console['log'](G[620048]);var v63l87 = wx['loadSubpackage']({ 'name': G[620049], 'success': function (g10p9) {
      console['log'](G[620050]), console['log'](g10p9), g10p9 && g10p9['errMsg'] == 'loadSubpackage:ok' ? (window['g068'] = !![], window['g860A'](), window['g80A6']()) : setTimeout(function () {
        window['gG0A86']();
      }, 0x1f4);
    }, 'fail': function (v54k) {
      console['log'](G[620051]), console['log'](v54k), setTimeout(function () {
        window['gG0A86']();
      }, 0x1f4);
    } });v63l87 && v63l87['onProgressUpdate'](yinx => {});
}, window['loadSubpackages'] = function () {
  window['gG68A0'](window[G[620032]], G[620052]) >= 0x0 ? (console['log'](G[620053] + window[G[620032]] + G[620054]), window['g0A'](), window['gG680A'](), window['gG0A86']()) : (window['g08A'](G[620055], window[G[620032]]), wx[G[620038]]({ 'title': G[620056], 'content': G[620057] }));
}, window[G[620020]] = '', wx['getSystemInfo']({ 'success'(zibt) {
    window[G[620020]] = G[620058] + zibt[G[620059]] + G[620060] + zibt[G[620061]] + G[620062] + zibt[G[620063]] + G[620064] + zibt[G[620065]] + G[620066] + zibt[G[620067]] + G[620068] + zibt[G[620032]] + G[620069] + zibt[G[620070]], console['log'](window[G[620020]]), console['log'](G[620071] + zibt[G[620072]] + G[620073] + zibt[G[620074]] + G[620075] + zibt['screenHeight'] + G[620076] + zibt[G[620077]] + G[620078] + zibt['windowHeight'] + G[620079] + zibt['statusBarHeight'] + G[620080] + (zibt[G[620081]] ? zibt[G[620081]][G[620082]] + ',' + zibt[G[620081]][G[620083]] + ',' + zibt[G[620081]][G[620084]] + ',' + zibt[G[620081]]['right'] : ''));var q_e3$8 = zibt[G[620065]] ? zibt[G[620065]][G[620085]]() : '',
        _$mzrs = zibt[G[620061]] ? zibt[G[620061]][G[620085]]()[G[620005]]('\x20', '') : '';window['g08'][G[620086]] = q_e3$8[G[620087]](G[620088]) != -0x1, window['g08'][G[620089]] = q_e3$8[G[620087]](G[620090]) != -0x1, window['g08'][G[620091]] = q_e3$8[G[620087]](G[620088]) != -0x1 || q_e3$8[G[620087]](G[620090]) != -0x1, window['g08'][G[620092]] = q_e3$8[G[620087]](G[620093]) != -0x1 || q_e3$8[G[620087]](G[620094]) != -0x1, window['g08'][G[620095]] = zibt[G[620067]] ? zibt[G[620067]][G[620085]]() : '', window['g08']['gGA680'] = ![], window['g08']['gGA068'] = 0x2;if (q_e3$8[G[620087]](G[620090]) != -0x1) {
      if (zibt[G[620070]] >= 0x18) window['g08']['gGA068'] = 0x3;else window['g08']['gGA068'] = 0x2;
    } else {
      if (q_e3$8[G[620087]](G[620088]) != -0x1) {
        if (zibt[G[620070]] && zibt[G[620070]] >= 0x14) window['g08']['gGA068'] = 0x3;else {
          if (_$mzrs[G[620087]](G[620096]) != -0x1 || _$mzrs[G[620087]](G[620097]) != -0x1 || _$mzrs[G[620087]](G[620098]) != -0x1 || _$mzrs[G[620087]](G[620099]) != -0x1 || _$mzrs[G[620087]](G[620100]) != -0x1) window['g08']['gGA068'] = 0x2;else window['g08']['gGA068'] = 0x3;
        }
      } else window['g08']['gGA068'] = 0x2;
    }console['log'](G[620101] + window['g08']['gGA680'] + G[620102] + window['g08']['gGA068']);
  } }), wx['getBatteryInfo']({ 'success': function (sbmtn) {
    console['log'](G[620103] + sbmtn[G[620104]] + G[620105] + sbmtn['isCharging']);
  } }), wx['getNetworkType']({ 'success': function (ty2ixh) {
    console['log'](G[620106] + ty2ixh[G[620107]]);
  } }), wx[G[620108]]({ 'keepScreenOn': !![] }), wx['onNetworkStatusChange'](function (q673) {
  console['log'](G[620106] + q673[G[620107]] + G[620109] + q673[G[620110]]);
}), wx[G[620111]](function (df4a5) {
  window['g6A'] = df4a5, window['g8A6'] && window['g6A'] && (console[G[620001]](G[620112] + window['g6A'][G[620113]]), window['g8A6'](window['g6A']), window['g6A'] = null);
}), window[G[620114]] = 0x0, window['gG068A'] = 0x0, window['onMemoryWarningCallBack'] = null, wx['onMemoryWarning'](function () {
  window['gG068A']++;var e86q3l = Date[G[620115]]();(window[G[620114]] == 0x0 || e86q3l - window[G[620114]] > 0x1d4c0) && (console[G[620116]](G[620117]), wx['triggerGC']());if (window['gG068A'] >= 0x2) {
    window['gG068A'] = 0x0, console[G[620021]](G[620118]), wx[G[620119]]('0', 0x1);if (window['g08'] && window['g08'][G[620086]]) window['g08A'](G[620120], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});