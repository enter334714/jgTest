var G = wx.$G;
console[G[620001]](G[620002]), window[G[620003]], wx[G[620004]](function (r$q_3) {
  if (r$q_3) {
    if (r$q_3['message']) {
      var rs = window['config']['game_ver'][G[620005]](new RegExp(/\./, 'g'), '_'),
          nmsr_z = r$q_3['message'],
          xtybni = nmsr_z[G[620006]](/(z888z888z888z888z888\/z8882Gz888MEz8882.js:)[0-9]{1,60}(:)/g);if (xtybni) for (var _se$m = 0x0; _se$m < xtybni['length']; _se$m++) {
        if (xtybni[_se$m] && xtybni[_se$m]['length'] > 0x0) {
          var r_m$s = parseInt(xtybni[_se$m][G[620005]](G[620007], '')[G[620005]](':', ''));nmsr_z = nmsr_z[G[620005]](xtybni[_se$m], xtybni[_se$m][G[620005]](':' + r_m$s + ':', ':' + (r_m$s - 0x2) + ':'));
        }
      }nmsr_z = nmsr_z[G[620005]](new RegExp(G[620008], 'g'), G[620009] + rs + G[620010]), nmsr_z = nmsr_z[G[620005]](new RegExp(G[620011], 'g'), G[620009] + rs + G[620010]), r$q_3['message'] = nmsr_z;
    }var wudo10 = { 'id': window['g08'][G[620012]], 'role': window['g08'][G[620013]], 'level': window['g08'][G[620014]], 'user': window['g08'][G[620015]], 'version': window['g08'][G[620016]], 'cdn': window['g08'][G[620017]], 'pkgName': window['g08']['pkgName'], 'gamever': window['config']['game_ver'], 'serverid': window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, 'systemInfo': window[G[620020]], 'error': 'MiniProgramError', 'stack': r$q_3 ? r$q_3['message'] : '' },
        jcyi2 = JSON['stringify'](wudo10);console[G[620021]](G[620022] + jcyi2), (!window[G[620003]] || window[G[620003]] != wudo10[G[620021]]) && (window[G[620003]] = wudo10[G[620021]], window['gA0'](wudo10));
  }
});import 'z888z888bfz888z888.js';import 'z888z88811z888z888.js';window[G[620023]] = require(G[620024]);import 'z888INDz888z888.js';import 'z888z888Iz8881z888z888.js';import 'z888z888Mtadz888z888.js';import 'z888z888INIz888az888.js';console[G[620001]](G[620025]), console[G[620001]](G[620026]), gA068({ 'title': G[620027] });var anixy = { 'gGA806': !![] };new window['ServerLoading'](anixy), window['ServerLoading'][G[620028]]['gG608A']();if (window['gGA086']) clearInterval(window['gGA086']);window['gGA086'] = null, window['gG68A0'] = function (mxzb, iyhj) {
  if (!mxzb || !iyhj) return 0x0;mxzb = mxzb[G[620029]]('.'), iyhj = iyhj[G[620029]]('.');const w4dou = Math[G[620030]](mxzb['length'], iyhj['length']);while (mxzb['length'] < w4dou) {
    mxzb[G[620031]]('0');
  }while (iyhj['length'] < w4dou) {
    iyhj[G[620031]]('0');
  }for (var gw109 = 0x0; gw109 < w4dou; gw109++) {
    const icjh = parseInt(mxzb[gw109]),
          a5kf4d = parseInt(iyhj[gw109]);if (icjh > a5kf4d) return 0x1;else {
      if (icjh < a5kf4d) return -0x1;
    }
  }return 0x0;
}, window[G[620032]] = wx['getSystemInfoSync']()[G[620032]], console['log'](G[620033] + window[G[620032]]);var ahiyj2 = wx['getUpdateManager']();ahiyj2[G[620034]](function (msbnrz) {
  console['log'](G[620035] + msbnrz[G[620036]]);
}), ahiyj2[G[620037]](function () {
  wx[G[620038]]({ 'title': G[620039], 'content': G[620040], 'showCancel': ![], 'success': function (iyhjc) {
      ahiyj2[G[620041]]();
    } });
}), ahiyj2[G[620042]](function () {
  console['log'](G[620043]);
}), window['gG680A'] = function () {
  console['log'](G[620044]);var l38e$q = wx['loadSubpackage']({ 'name': G[620045], 'success': function (zmn_s) {
      console['log'](G[620046]), console['log'](zmn_s), zmn_s && zmn_s['errMsg'] == 'loadSubpackage:ok' ? (window['g86'] = !![], window['g860A'](), window['g80A6']()) : setTimeout(function () {
        window['gG680A']();
      }, 0x1f4);
    }, 'fail': function (d5o4u) {
      console['log'](G[620047]), console['log'](d5o4u), setTimeout(function () {
        window['gG680A']();
      }, 0x1f4);
    } });l38e$q && l38e$q['onProgressUpdate'](zsr_$ => {});
}, window['gG0A86'] = function () {
  console['log'](G[620048]);var q63 = wx['loadSubpackage']({ 'name': G[620049], 'success': function (thy2xi) {
      console['log'](G[620050]), console['log'](thy2xi), thy2xi && thy2xi['errMsg'] == 'loadSubpackage:ok' ? (window['g068'] = !![], window['g860A'](), window['g80A6']()) : setTimeout(function () {
        window['gG0A86']();
      }, 0x1f4);
    }, 'fail': function (ztnbm) {
      console['log'](G[620051]), console['log'](ztnbm), setTimeout(function () {
        window['gG0A86']();
      }, 0x1f4);
    } });q63 && q63['onProgressUpdate']($_8e => {});
}, window['loadSubpackages'] = function () {
  window['gG68A0'](window[G[620032]], G[620052]) >= 0x0 ? (console['log'](G[620053] + window[G[620032]] + G[620054]), window['g0A'](), window['gG680A'](), window['gG0A86']()) : (window['g08A'](G[620055], window[G[620032]]), wx[G[620038]]({ 'title': G[620056], 'content': G[620057] }));
}, window[G[620020]] = '', wx['getSystemInfo']({ 'success'(puw019) {
    window[G[620020]] = G[620058] + puw019[G[620059]] + G[620060] + puw019[G[620061]] + G[620062] + puw019[G[620063]] + G[620064] + puw019[G[620065]] + G[620066] + puw019[G[620067]] + G[620068] + puw019[G[620032]] + G[620069] + puw019[G[620070]], console['log'](window[G[620020]]), console['log'](G[620071] + puw019[G[620072]] + G[620073] + puw019[G[620074]] + G[620075] + puw019['screenHeight'] + G[620076] + puw019[G[620077]] + G[620078] + puw019['windowHeight'] + G[620079] + puw019['statusBarHeight'] + G[620080] + (puw019[G[620081]] ? puw019[G[620081]][G[620082]] + ',' + puw019[G[620081]][G[620083]] + ',' + puw019[G[620081]][G[620084]] + ',' + puw019[G[620081]]['right'] : ''));var vk45 = puw019[G[620065]] ? puw019[G[620065]][G[620085]]() : '',
        ouwd10 = puw019[G[620061]] ? puw019[G[620061]][G[620085]]()[G[620005]]('\x20', '') : '';window['g08'][G[620086]] = vk45[G[620087]](G[620088]) != -0x1, window['g08'][G[620089]] = vk45[G[620087]](G[620090]) != -0x1, window['g08'][G[620091]] = vk45[G[620087]](G[620088]) != -0x1 || vk45[G[620087]](G[620090]) != -0x1, window['g08'][G[620092]] = vk45[G[620087]](G[620093]) != -0x1 || vk45[G[620087]](G[620094]) != -0x1, window['g08'][G[620095]] = puw019[G[620067]] ? puw019[G[620067]][G[620085]]() : '', window['g08']['gGA680'] = ![], window['g08']['gGA068'] = 0x2;if (vk45[G[620087]](G[620090]) != -0x1) {
      if (puw019[G[620070]] >= 0x18) window['g08']['gGA068'] = 0x3;else window['g08']['gGA068'] = 0x2;
    } else {
      if (vk45[G[620087]](G[620088]) != -0x1) {
        if (puw019[G[620070]] && puw019[G[620070]] >= 0x14) window['g08']['gGA068'] = 0x3;else {
          if (ouwd10[G[620087]](G[620096]) != -0x1 || ouwd10[G[620087]](G[620097]) != -0x1 || ouwd10[G[620087]](G[620098]) != -0x1 || ouwd10[G[620087]](G[620099]) != -0x1 || ouwd10[G[620087]](G[620100]) != -0x1) window['g08']['gGA068'] = 0x2;else window['g08']['gGA068'] = 0x3;
        }
      } else window['g08']['gGA068'] = 0x2;
    }console['log'](G[620101] + window['g08']['gGA680'] + G[620102] + window['g08']['gGA068']);
  } }), wx['getBatteryInfo']({ 'success': function (zsbrmn) {
    console['log'](G[620103] + zsbrmn[G[620104]] + G[620105] + zsbrmn['isCharging']);
  } }), wx['getNetworkType']({ 'success': function ($leq8) {
    console['log'](G[620106] + $leq8[G[620107]]);
  } }), wx[G[620108]]({ 'keepScreenOn': !![] }), wx['onNetworkStatusChange'](function (ak45df) {
  console['log'](G[620106] + ak45df[G[620107]] + G[620109] + ak45df[G[620110]]);
}), wx[G[620111]](function (ak75v6) {
  window['g6A'] = ak75v6, window['g8A6'] && window['g6A'] && (console[G[620001]](G[620112] + window['g6A'][G[620113]]), window['g8A6'](window['g6A']), window['g6A'] = null);
}), window[G[620114]] = 0x0, window['gG068A'] = 0x0, window['onMemoryWarningCallBack'] = null, wx['onMemoryWarning'](function () {
  window['gG068A']++;var ythb = Date[G[620115]]();(window[G[620114]] == 0x0 || ythb - window[G[620114]] > 0x1d4c0) && (console[G[620116]](G[620117]), wx['triggerGC']());if (window['gG068A'] >= 0x2) {
    window['gG068A'] = 0x0, console[G[620021]](G[620118]), wx[G[620119]]('0', 0x1);if (window['g08'] && window['g08'][G[620086]]) window['g08A'](G[620120], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});