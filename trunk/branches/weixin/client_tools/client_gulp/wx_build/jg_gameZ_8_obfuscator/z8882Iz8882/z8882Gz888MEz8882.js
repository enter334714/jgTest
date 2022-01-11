var G = wx.$G;
console[G[620001]](G[620002]), window[G[620003]], wx[G[620004]](function (mbnxzt) {
  if (mbnxzt) {
    if (mbnxzt['message']) {
      var i2hytx = window['config']['game_ver'][G[620005]](new RegExp(/\./, 'g'), '_'),
          ak5v6 = mbnxzt['message'],
          mrs$z_ = ak5v6[G[620006]](/(z888z888z888z888z888\/z8882Gz888MEz8882.js:)[0-9]{1,60}(:)/g);if (mrs$z_) for (var vfk4a5 = 0x0; vfk4a5 < mrs$z_['length']; vfk4a5++) {
        if (mrs$z_[vfk4a5] && mrs$z_[vfk4a5]['length'] > 0x0) {
          var mzr_ = parseInt(mrs$z_[vfk4a5][G[620005]](G[620007], '')[G[620005]](':', ''));ak5v6 = ak5v6[G[620005]](mrs$z_[vfk4a5], mrs$z_[vfk4a5][G[620005]](':' + mzr_ + ':', ':' + (mzr_ - 0x2) + ':'));
        }
      }ak5v6 = ak5v6[G[620005]](new RegExp(G[620008], 'g'), G[620009] + i2hytx + G[620010]), ak5v6 = ak5v6[G[620005]](new RegExp(G[620011], 'g'), G[620009] + i2hytx + G[620010]), mbnxzt['message'] = ak5v6;
    }var d4wo1u = { 'id': window['g08'][G[620012]], 'role': window['g08'][G[620013]], 'level': window['g08'][G[620014]], 'user': window['g08'][G[620015]], 'version': window['g08'][G[620016]], 'cdn': window['g08'][G[620017]], 'pkgName': window['g08']['pkgName'], 'gamever': window['config']['game_ver'], 'serverid': window['g08'][G[620018]] ? window['g08'][G[620018]][G[620019]] : 0x0, 'systemInfo': window[G[620020]], 'error': 'MiniProgramError', 'stack': mbnxzt ? mbnxzt['message'] : '' },
        $_qre3 = JSON['stringify'](d4wo1u);console[G[620021]](G[620022] + $_qre3), (!window[G[620003]] || window[G[620003]] != d4wo1u[G[620021]]) && (window[G[620003]] = d4wo1u[G[620021]], window['gA0'](d4wo1u));
  }
});import 'z888z888bfz888z888.js';import 'z888z88811z888z888.js';window[G[620023]] = require(G[620024]);import 'z888INDz888z888.js';import 'z888z888Iz8881z888z888.js';import 'z888z888Mtadz888z888.js';import 'z888z888INIz888az888.js';console[G[620001]](G[620025]), console[G[620001]](G[620026]), gA068({ 'title': G[620027] });var alv87a6 = { 'gGA806': !![] };new window['ServerLoading'](alv87a6), window['ServerLoading'][G[620028]]['gG608A']();if (window['gGA086']) clearInterval(window['gGA086']);window['gGA086'] = null, window['gG68A0'] = function (xtih, _r$s) {
  if (!xtih || !_r$s) return 0x0;xtih = xtih[G[620029]]('.'), _r$s = _r$s[G[620029]]('.');const fk54ad = Math[G[620030]](xtih['length'], _r$s['length']);while (xtih['length'] < fk54ad) {
    xtih[G[620031]]('0');
  }while (_r$s['length'] < fk54ad) {
    _r$s[G[620031]]('0');
  }for (var vlk6 = 0x0; vlk6 < fk54ad; vlk6++) {
    const u1po0w = parseInt(xtih[vlk6]),
          znxibt = parseInt(_r$s[vlk6]);if (u1po0w > znxibt) return 0x1;else {
      if (u1po0w < znxibt) return -0x1;
    }
  }return 0x0;
}, window[G[620032]] = wx['getSystemInfoSync']()[G[620032]], console['log'](G[620033] + window[G[620032]]);var adafk54 = wx['getUpdateManager']();adafk54[G[620034]](function (wpg0) {
  console['log'](G[620035] + wpg0[G[620036]]);
}), adafk54[G[620037]](function () {
  wx[G[620038]]({ 'title': G[620039], 'content': G[620040], 'showCancel': ![], 'success': function (vfa54k) {
      adafk54[G[620041]]();
    } });
}), adafk54[G[620042]](function () {
  console['log'](G[620043]);
}), window['gG680A'] = function () {
  console['log'](G[620044]);var hc2ij = wx['loadSubpackage']({ 'name': G[620045], 'success': function (mzxbtn) {
      console['log'](G[620046]), console['log'](mzxbtn), mzxbtn && mzxbtn['errMsg'] == 'loadSubpackage:ok' ? (window['g86'] = !![], window['g860A'](), window['g80A6']()) : setTimeout(function () {
        window['gG680A']();
      }, 0x1f4);
    }, 'fail': function (qs$_e) {
      console['log'](G[620047]), console['log'](qs$_e), setTimeout(function () {
        window['gG680A']();
      }, 0x1f4);
    } });hc2ij && hc2ij['onProgressUpdate'](dkfa5 => {});
}, window['gG0A86'] = function () {
  console['log'](G[620048]);var yixn = wx['loadSubpackage']({ 'name': G[620049], 'success': function (sqe_$) {
      console['log'](G[620050]), console['log'](sqe_$), sqe_$ && sqe_$['errMsg'] == 'loadSubpackage:ok' ? (window['g068'] = !![], window['g860A'](), window['g80A6']()) : setTimeout(function () {
        window['gG0A86']();
      }, 0x1f4);
    }, 'fail': function (va5k6) {
      console['log'](G[620051]), console['log'](va5k6), setTimeout(function () {
        window['gG0A86']();
      }, 0x1f4);
    } });yixn && yixn['onProgressUpdate'](bxmztn => {});
}, window['loadSubpackages'] = function () {
  window['gG68A0'](window[G[620032]], G[620052]) >= 0x0 ? (console['log'](G[620053] + window[G[620032]] + G[620054]), window['g0A'](), window['gG680A'](), window['gG0A86']()) : (window['g08A'](G[620055], window[G[620032]]), wx[G[620038]]({ 'title': G[620056], 'content': G[620057] }));
}, window[G[620020]] = '', wx['getSystemInfo']({ 'success'(_e8q$) {
    window[G[620020]] = G[620058] + _e8q$[G[620059]] + G[620060] + _e8q$[G[620061]] + G[620062] + _e8q$[G[620063]] + G[620064] + _e8q$[G[620065]] + G[620066] + _e8q$[G[620067]] + G[620068] + _e8q$[G[620032]] + G[620069] + _e8q$[G[620070]], console['log'](window[G[620020]]), console['log'](G[620071] + _e8q$[G[620072]] + G[620073] + _e8q$[G[620074]] + G[620075] + _e8q$['screenHeight'] + G[620076] + _e8q$[G[620077]] + G[620078] + _e8q$['windowHeight'] + G[620079] + _e8q$['statusBarHeight'] + G[620080] + (_e8q$[G[620081]] ? _e8q$[G[620081]][G[620082]] + ',' + _e8q$[G[620081]][G[620083]] + ',' + _e8q$[G[620081]][G[620084]] + ',' + _e8q$[G[620081]]['right'] : ''));var sq_ = _e8q$[G[620065]] ? _e8q$[G[620065]][G[620085]]() : '',
        d5ko4 = _e8q$[G[620061]] ? _e8q$[G[620061]][G[620085]]()[G[620005]]('\x20', '') : '';window['g08'][G[620086]] = sq_[G[620087]](G[620088]) != -0x1, window['g08'][G[620089]] = sq_[G[620087]](G[620090]) != -0x1, window['g08'][G[620091]] = sq_[G[620087]](G[620088]) != -0x1 || sq_[G[620087]](G[620090]) != -0x1, window['g08'][G[620092]] = sq_[G[620087]](G[620093]) != -0x1 || sq_[G[620087]](G[620094]) != -0x1, window['g08'][G[620095]] = _e8q$[G[620067]] ? _e8q$[G[620067]][G[620085]]() : '', window['g08']['gGA680'] = ![], window['g08']['gGA068'] = 0x2;if (sq_[G[620087]](G[620090]) != -0x1) {
      if (_e8q$[G[620070]] >= 0x18) window['g08']['gGA068'] = 0x3;else window['g08']['gGA068'] = 0x2;
    } else {
      if (sq_[G[620087]](G[620088]) != -0x1) {
        if (_e8q$[G[620070]] && _e8q$[G[620070]] >= 0x14) window['g08']['gGA068'] = 0x3;else {
          if (d5ko4[G[620087]](G[620096]) != -0x1 || d5ko4[G[620087]](G[620097]) != -0x1 || d5ko4[G[620087]](G[620098]) != -0x1 || d5ko4[G[620087]](G[620099]) != -0x1 || d5ko4[G[620087]](G[620100]) != -0x1) window['g08']['gGA068'] = 0x2;else window['g08']['gGA068'] = 0x3;
        }
      } else window['g08']['gGA068'] = 0x2;
    }console['log'](G[620101] + window['g08']['gGA680'] + G[620102] + window['g08']['gGA068']);
  } }), wx['getBatteryInfo']({ 'success': function (gp0w) {
    console['log'](G[620103] + gp0w[G[620104]] + G[620105] + gp0w['isCharging']);
  } }), wx['getNetworkType']({ 'success': function (snbr) {
    console['log'](G[620106] + snbr[G[620107]]);
  } }), wx[G[620108]]({ 'keepScreenOn': !![] }), wx['onNetworkStatusChange'](function (tzmbs) {
  console['log'](G[620106] + tzmbs[G[620107]] + G[620109] + tzmbs[G[620110]]);
}), wx[G[620111]](function (w4ou1) {
  window['g6A'] = w4ou1, window['g8A6'] && window['g6A'] && (console[G[620001]](G[620112] + window['g6A'][G[620113]]), window['g8A6'](window['g6A']), window['g6A'] = null);
}), window[G[620114]] = 0x0, window['gG068A'] = 0x0, window['onMemoryWarningCallBack'] = null, wx['onMemoryWarning'](function () {
  window['gG068A']++;var zs_nr = Date[G[620115]]();(window[G[620114]] == 0x0 || zs_nr - window[G[620114]] > 0x1d4c0) && (console[G[620116]](G[620117]), wx['triggerGC']());if (window['gG068A'] >= 0x2) {
    window['gG068A'] = 0x0, console[G[620021]](G[620118]), wx[G[620119]]('0', 0x1);if (window['g08'] && window['g08'][G[620086]]) window['g08A'](G[620120], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});