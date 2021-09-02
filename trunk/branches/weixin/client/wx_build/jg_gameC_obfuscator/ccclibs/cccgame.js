var p = wx.$h;
console[p[0xea6b]](p[0x1200b]), window[p[0x15551]], wx[p[0x15552]](function (hmr9d01) {
  if (hmr9d01) {
    if (hmr9d01[p[0x12630]]) {
      var b5zpgx = window[p[0x122c9]][p[0x15553]][p[0x1268a]](new RegExp(/\./, 'g'), '_'),
          hm0d9 = hmr9d01[p[0x12630]],
          _md20y = hm0d9[p[0x13246]](/(subPackage\/cccgame.js:)[0-9]{1,60}(:)/g);if (_md20y) for (var c4aw6fi = 0x0; c4aw6fi < _md20y[p[0x10d3f]]; c4aw6fi++) {
        var o3et1;_md20y[c4aw6fi] && 0x0 < _md20y[c4aw6fi][p[0x10d3f]] && (o3et1 = parseInt(_md20y[c4aw6fi][p[0x1268a]](p[0x1200c], '')[p[0x1268a]](':', '')), hm0d9 = hm0d9[p[0x1268a]](_md20y[c4aw6fi], _md20y[c4aw6fi][p[0x1268a]](':' + o3et1 + ':', ':' + (o3et1 - 0x2) + ':')));
      }hm0d9 = (hm0d9 = hm0d9[p[0x1268a]](new RegExp(p[0x1200d], 'g'), p[0x1200e] + b5zpgx + p[0x1183c]))[p[0x1268a]](new RegExp(p[0x1200f], 'g'), p[0x1200e] + b5zpgx + p[0x1183c]), hmr9d01[p[0x12630]] = hm0d9;
    }b5zpgx = { 'id': window['$aCE'][p[0x15554]], 'role': window['$aCE'][p[0xf60f]], 'level': window['$aCE'][p[0x15555]], 'user': window['$aCE'][p[0x14ef0]], 'version': window['$aCE'][p[0x12175]], 'gamever': window[p[0x122c9]][p[0x15553]], 'cdn': window['$aCE'][p[0x1262f]], 'serverid': window['$aCE'][p[0x14eee]] ? window['$aCE'][p[0x14eee]][p[0x131b6]] : 0x0, 'systemInfo': window[p[0x15556]], 'error': p[0x12010], 'stack': hmr9d01 ? hmr9d01[p[0x12630]] : '' }, hmr9d01 = JSON[p[0x12626]](b5zpgx), (console[p[0xea69]](p[0x12011] + hmr9d01), window[p[0x15551]] && window[p[0x15551]] == b5zpgx[p[0xea69]] || (window[p[0x15551]] = b5zpgx[p[0xea69]], window['$aAC'](b5zpgx)));
  }
});import 'cccmd5min.js';import 'ccczlibs.js';window[p[0x15557]] = require(p[0x12012]);import 'cccindex.js';import 'ccclibsmin.js';import 'cccwxmini.js';import 'cccinitmin.js';console[p[0xea6b]](p[0x12013]), console[p[0xea6b]](p[0x12014]), $aACSE({ 'title': p[0x12015] });var a_n_02v7y = { '$a1SACE': !0x0 };new window[p[0x15558]](a_n_02v7y), window[p[0x15558]][p[0xea84]]['$a1SEAC'](), window['$a1AESC'] && clearInterval(window['$a1AESC']), window['$a1AESC'] = null, window['$a1SECA'] = function (hlt9o1d, fwc68a7) {
  if (!hlt9o1d || !fwc68a7) return 0x0;hlt9o1d = hlt9o1d[p[0x12148]]('.'), fwc68a7 = fwc68a7[p[0x12148]]('.');var y_r2v0 = Math[p[0xfaf6]](hlt9o1d[p[0x10d3f]], fwc68a7[p[0x10d3f]]);for (; hlt9o1d[p[0x10d3f]] < y_r2v0;) hlt9o1d[p[0x12153]]('0');for (; fwc68a7[p[0x10d3f]] < y_r2v0;) fwc68a7[p[0x12153]]('0');for (var dy90r_m = 0x0; dy90r_m < y_r2v0; dy90r_m++) {
    var d02rm_ = parseInt(hlt9o1d[dy90r_m]),
        e3jogs = parseInt(fwc68a7[dy90r_m]);if (e3jogs < d02rm_) return 0x1;if (d02rm_ < e3jogs) return -0x1;
  }return 0x0;
}, window[p[0x15559]] = wx[p[0x1555a]]()[p[0x15559]], console[p[0x12296]](p[0x12016] + window[p[0x15559]]);var a_fnv827 = wx[p[0x1555b]]();a_fnv827[p[0x1555c]](function (v7f8cw) {
  console[p[0x12296]](p[0x12017] + v7f8cw[p[0x1555d]]);
}), a_fnv827[p[0x1555e]](function () {
  wx[p[0x1555f]]({ 'title': p[0x12018], 'content': p[0x12019], 'showCancel': !0x1, 'success': function (_y0rdm9) {
      a_fnv827[p[0x15560]]();
    } });
}), a_fnv827[p[0x15561]](function () {
  console[p[0x12296]](p[0x1201a]);
}), window['$a1CASE'] = function () {
  console[p[0x12296]](p[0x1201b]);var zbpx5 = wx[p[0x15562]]({ 'name': p[0x1201c], 'success': function (ejo3z) {
      console[p[0x12296]](p[0x1201d]), console[p[0x12296]](ejo3z), ejo3z && p[0x1201e] == ejo3z[p[0x14f2d]] ? (window['$aES'] = !0x0, window['$aECAS'](), window['$aECSA']()) : setTimeout(function () {
        window['$a1CASE']();
      }, 0x1f4);
    }, 'fail': function (acf8w6) {
      console[p[0x12296]](p[0x1201f]), console[p[0x12296]](acf8w6), setTimeout(function () {
        window['$a1CASE']();
      }, 0x1f4);
    } });zbpx5 && zbpx5[p[0x15563]](fa6c87w => {});
}, window['$a1CSAE'] = function () {
  console[p[0x12296]](p[0x12020]);var m2_dy0 = wx[p[0x15562]]({ 'name': p[0x12021], 'success': function (md_0y) {
      console[p[0x12296]](p[0x12022]), console[p[0x12296]](md_0y), md_0y && p[0x1201e] == md_0y[p[0x14f2d]] ? (window['$aCSE'] = !0x0, window['$aECAS'](), window['$aECSA']()) : setTimeout(function () {
        window['$a1CSAE']();
      }, 0x1f4);
    }, 'fail': function (wa64qif) {
      console[p[0x12296]](p[0x12023]), console[p[0x12296]](wa64qif), setTimeout(function () {
        window['$a1CSAE']();
      }, 0x1f4);
    } });m2_dy0 && m2_dy0[p[0x15563]](t9hlo31 => {});
}, window[p[0x15564]] = function () {
  0x0 <= window['$a1SECA'](window[p[0x15559]], p[0x12024]) ? (console[p[0x12296]](p[0x12025] + window[p[0x15559]] + p[0x12026]), window['$aCA'](), window['$a1CASE'](), window['$a1CSAE']()) : (window['$aCEA'](p[0x12027] + window[p[0x15559]]), wx[p[0x1555f]]({ 'title': p[0xf900], 'content': p[0x12028] }));
}, window[p[0x15556]] = '', wx[p[0x15565]]({ 'success'(teoh31l) {
    window[p[0x15556]] = p[0x12029] + teoh31l[p[0x15566]] + p[0x1202a] + teoh31l[p[0x15567]] + p[0x1202b] + teoh31l[p[0x11798]] + p[0x1202c] + teoh31l[p[0x1228f]] + p[0x1202d] + teoh31l[p[0x14ee4]] + p[0x1202e] + teoh31l[p[0x15559]] + p[0x1202f] + teoh31l[p[0x12e9c]], console[p[0x12296]](window[p[0x15556]]), console[p[0x12296]](p[0x12030] + teoh31l[p[0x15568]] + p[0x12031] + teoh31l[p[0x15569]] + p[0x12032] + teoh31l[p[0x1556a]] + p[0x12033] + teoh31l[p[0x1556b]] + p[0x12034] + teoh31l[p[0x1556c]] + p[0x12035] + teoh31l[p[0x1556d]] + p[0x12036] + (teoh31l[p[0x1556e]] ? teoh31l[p[0x1556e]][p[0xea87]] + ',' + teoh31l[p[0x1556e]][p[0x11a1c]] + ',' + teoh31l[p[0x1556e]][p[0x10071]] + ',' + teoh31l[p[0x1556e]][p[0xfa53]] : ''));var w4afi6q = teoh31l[p[0x1228f]] ? teoh31l[p[0x1228f]][p[0x132ad]]() : '',
        _y9md0 = teoh31l[p[0x15567]] ? teoh31l[p[0x15567]][p[0x132ad]]()[p[0x1268a]]('\x20', '') : '';window['$aCE'][p[0x122a7]] = -0x1 != w4afi6q[p[0x1217f]](p[0x12037]), window['$aCE'][p[0x13177]] = -0x1 != w4afi6q[p[0x1217f]](p[0x11fbd]), window['$aCE'][p[0x1556f]] = -0x1 != w4afi6q[p[0x1217f]](p[0x12037]) || -0x1 != w4afi6q[p[0x1217f]](p[0x11fbd]), window['$aCE'][p[0x14e65]] = -0x1 != w4afi6q[p[0x1217f]](p[0x11fbe]) || -0x1 != w4afi6q[p[0x1217f]](p[0x12038]), window['$aCE'][p[0x15570]] = teoh31l[p[0x14ee4]] ? teoh31l[p[0x14ee4]][p[0x132ad]]() : '', window['$aCE']['$a1ACSE'] = !0x1, -(window['$aCE']['$a1ACES'] = 0x1) != w4afi6q[p[0x1217f]](p[0x11fbd]) ? 0x18 <= teoh31l[p[0x12e9c]] ? window['$aCE']['$a1ACES'] = 0x2 : window['$aCE']['$a1ACES'] = 0x1 : -0x1 == w4afi6q[p[0x1217f]](p[0x12037]) || !(teoh31l[p[0x12e9c]] && 0x14 <= teoh31l[p[0x12e9c]] || -0x1 == _y9md0[p[0x1217f]](p[0x12039]) && -0x1 == _y9md0[p[0x1217f]](p[0x1203a]) && -0x1 == _y9md0[p[0x1217f]](p[0x1203b]) && -0x1 == _y9md0[p[0x1217f]](p[0x1203c]) && -0x1 == _y9md0[p[0x1217f]](p[0x1203d])) ? window['$aCE']['$a1ACES'] = 0x1 : window['$aCE']['$a1ACES'] = 0x2, console[p[0x12296]](p[0x1203e] + window['$aCE']['$a1ACSE'] + p[0x1203f] + window['$aCE']['$a1ACES']);
  } }), wx[p[0x15571]]({ 'success': function (rnv2_0y) {
    console[p[0x12296]](p[0x12040] + rnv2_0y[p[0xf604]] + p[0x12041] + rnv2_0y[p[0x15572]]);
  } }), wx[p[0x15573]]({ 'success': function (mh10) {
    console[p[0x12296]](p[0x12042] + mh10[p[0x15574]]);
  } }), wx[p[0x15575]]({ 'keepScreenOn': !0x0 }), wx[p[0x15576]](function (i6f8aw) {
  console[p[0x12296]](p[0x12042] + i6f8aw[p[0x15574]] + p[0x12043] + i6f8aw[p[0x15577]]);
}), wx[p[0x15578]](function (ry9_dm) {
  window['$aEAS'] = ry9_dm, window['$aESA'] && window['$aEAS'] && (console[p[0xea6b]](p[0x12044] + window['$aEAS'][p[0xeb3c]]), window['$aESA'](window['$aEAS']), window['$aEAS'] = null);
}), window['$a1CEAS'] = 0x0, window[p[0x15579]] = null, wx[p[0x1557a]](function () {
  window['$a1CEAS']++, wx[p[0x131e6]](), 0x2 <= window['$a1CEAS'] && (window['$a1CEAS'] = 0x0, console[p[0xea69]](p[0x12045]), wx[p[0x1557b]]('0', 0x1), window['$aCE'] && window['$aCE'][p[0x122a7]] && window['$aCEA'](p[0x12046]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});