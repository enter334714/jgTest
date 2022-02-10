var s = wx.$W;
console[s[0x45]](s[0x14f]), window[s[0x150]], wx[s[0x151]](function (ilsn) {
  if (ilsn) {
    if (ilsn[s[0x152]]) {
      var ts$fl = window[s[0x2]][s[0x3]][s[0x153]](new RegExp(/\./, 'g'), '_'),
          tlin$ = ilsn[s[0x152]],
          c1z83e = tlin$[s[0x154]](/(wwwwwwwww\/WWGAMEW.js:)[0-9]{1,60}(:)/g);if (c1z83e) for (var kja7_r = 0x0; kja7_r < c1z83e[s[0xa6]]; kja7_r++) {
        if (c1z83e[kja7_r] && c1z83e[kja7_r][s[0xa6]] > 0x0) {
          var hd6vo4 = parseInt(c1z83e[kja7_r][s[0x153]](s[0x155], '')[s[0x153]](':', ''));tlin$ = tlin$[s[0x153]](c1z83e[kja7_r], c1z83e[kja7_r][s[0x153]](':' + hd6vo4 + ':', ':' + (hd6vo4 - 0x2) + ':'));
        }
      }tlin$ = tlin$[s[0x153]](new RegExp(s[0x156], 'g'), s[0x157] + ts$fl + s[0x158]), tlin$ = tlin$[s[0x153]](new RegExp(s[0x159], 'g'), s[0x157] + ts$fl + s[0x158]), ilsn[s[0x152]] = tlin$;
    }var w5o6bd = { 'id': window['_wA1'][s[0x4e]], 'role': window['_wA1'][s[0x4f]], 'level': window['_wA1'][s[0x50]], 'user': window['_wA1'][s[0x51]], 'version': window['_wA1'][s[0x28]], 'cdn': window['_wA1'][s[0x52]], 'pkgName': window['_wA1'][s[0x18]], 'gamever': window[s[0x2]][s[0x3]], 'serverid': window['_wA1'][s[0x1e]] ? window['_wA1'][s[0x1e]][s[0x53]] : 0x0, 'systemInfo': window[s[0x54]], 'error': s[0x15a], 'stack': ilsn ? ilsn[s[0x152]] : '' },
        u5wob3 = JSON[s[0x56]](w5o6bd);console[s[0x57]](s[0x15b] + u5wob3), (!window[s[0x150]] || window[s[0x150]] != w5o6bd[s[0x57]]) && (window[s[0x150]] = w5o6bd[s[0x57]], window['_wIA'](w5o6bd));
  }
});import 'wwfww.js';import 'ww11ww.js';window[s[0x15c]] = require(s[0x15d]);import 'wINDww.js';import 'wwIB1ww.js';import 'wwMtadww.js';import 'wwINIwww.js';import 'utils/cxui.laya.js';console[s[0x45]](s[0x15e]), console[s[0x45]](s[0x15f]), _wIAY1({ 'title': s[0x160] });var wry9_ = { '_w$I1AY': !![] };new window[s[0x40]](wry9_), window[s[0x40]][s[0x41]]['_w$YA1I']();if (window['_w$IA1Y']) clearInterval(window['_w$IA1Y']);window['_w$IA1Y'] = null, window['_w$Y1IA'] = function (sf$l, ar7_j) {
  if (!sf$l || !ar7_j) return 0x0;sf$l = sf$l[s[0x161]]('.'), ar7_j = ar7_j[s[0x161]]('.');const h64x = Math[s[0x162]](sf$l[s[0xa6]], ar7_j[s[0xa6]]);while (sf$l[s[0xa6]] < h64x) {
    sf$l[s[0xdf]]('0');
  }while (ar7_j[s[0xa6]] < h64x) {
    ar7_j[s[0xdf]]('0');
  }for (var $ltnqs = 0x0; $ltnqs < h64x; $ltnqs++) {
    const w5oud = parseInt(sf$l[$ltnqs]),
          hvd6o4 = parseInt(ar7_j[$ltnqs]);if (w5oud > hvd6o4) return 0x1;else {
      if (w5oud < hvd6o4) return -0x1;
    }
  }return 0x0;
}, window[s[0xe0]] = wx[s[0x163]]()[s[0xe0]], console[s[0x30]](s[0x164] + window[s[0xe0]]);var wubwz5 = wx[s[0x165]]();wubwz5[s[0x166]](function (eb3z1u) {
  console[s[0x30]](s[0x167] + eb3z1u[s[0x168]]);
}), wubwz5[s[0x169]](function () {
  wx[s[0x32]]({ 'title': s[0x16a], 'content': s[0x16b], 'showCancel': ![], 'success': function (fs2$t) {
      wubwz5[s[0x16c]]();
    } });
}), wubwz5[s[0x16d]](function () {
  console[s[0x30]](s[0x16e]);
}), window['_w$Y1AI'] = function () {
  console[s[0x30]](s[0x16f]);var mh4 = wx[s[0x170]]({ 'name': s[0x171], 'success': function (kze81) {
      console[s[0x30]](s[0x172]), console[s[0x30]](kze81), kze81 && kze81[s[0x8c]] == s[0x173] ? (window['_w1Y'] = !![], window['_w1YAI'](), window['_w1AIY']()) : setTimeout(function () {
        window['_w$Y1AI']();
      }, 0x1f4);
    }, 'fail': function (cjak7r) {
      console[s[0x30]](s[0x174]), console[s[0x30]](cjak7r), setTimeout(function () {
        window['_w$Y1AI']();
      }, 0x1f4);
    } });mh4 && mh4[s[0x175]](ry7_9j => {});
}, window['_w$AI1Y'] = function () {
  console[s[0x30]](s[0x176]);var vw6d5o = wx[s[0x170]]({ 'name': s[0x177], 'success': function (k7ae8) {
      console[s[0x30]](s[0x178]), console[s[0x30]](k7ae8), k7ae8 && k7ae8[s[0x8c]] == s[0x173] ? (window['_wAY1'] = !![], window['_w1YAI'](), window['_w1AIY']()) : setTimeout(function () {
        window['_w$AI1Y']();
      }, 0x1f4);
    }, 'fail': function (yj79r_) {
      console[s[0x30]](s[0x179]), console[s[0x30]](yj79r_), setTimeout(function () {
        window['_w$AI1Y']();
      }, 0x1f4);
    } });vw6d5o && vw6d5o[s[0x175]](gx4vmh => {});
}, window[s[0x17a]] = function () {
  window['_w$Y1IA'](window[s[0xe0]], s[0x17b]) >= 0x0 ? (console[s[0x30]](s[0x17c] + window[s[0xe0]] + s[0x17d]), window['_wAI'](), window['_w$Y1AI'](), window['_w$AI1Y']()) : (window['_wA1I'](s[0x17e], window[s[0xe0]]), wx[s[0x32]]({ 'title': s[0x33], 'content': s[0x17f] }));
}, window[s[0x54]] = '', wx[s[0x180]]({ 'success'(woub53) {
    window[s[0x54]] = s[0x181] + woub53[s[0x182]] + s[0x183] + woub53[s[0x184]] + s[0x185] + woub53[s[0xa]] + s[0x186] + woub53[s[0x187]] + s[0x188] + woub53[s[0x9c]] + s[0x189] + woub53[s[0xe0]] + s[0x18a] + woub53[s[0x18b]], console[s[0x30]](window[s[0x54]]), console[s[0x30]](s[0x18c] + woub53[s[0x18d]] + s[0x18e] + woub53[s[0x18f]] + s[0x190] + woub53[s[0x191]] + s[0x192] + woub53[s[0x193]] + s[0x194] + woub53[s[0x195]] + s[0x196] + woub53[s[0x197]] + s[0x198] + (woub53[s[0x199]] ? woub53[s[0x199]][s[0x13a]] + ',' + woub53[s[0x199]][s[0x13d]] + ',' + woub53[s[0x199]][s[0x13f]] + ',' + woub53[s[0x199]][s[0x141]] : ''));var do5ubw = woub53[s[0x187]] ? woub53[s[0x187]][s[0x19a]]() : '',
        in9l = woub53[s[0x184]] ? woub53[s[0x184]][s[0x19a]]()[s[0x153]]('\x20', '') : '';window['_wA1'][s[0x2a]] = do5ubw[s[0x8d]](s[0x19b]) != -0x1, window['_wA1'][s[0x2b]] = do5ubw[s[0x8d]](s[0x19c]) != -0x1, window['_wA1'][s[0x139]] = do5ubw[s[0x8d]](s[0x19b]) != -0x1 || do5ubw[s[0x8d]](s[0x19c]) != -0x1, window['_wA1'][s[0x2c]] = do5ubw[s[0x8d]](s[0x19d]) != -0x1 || do5ubw[s[0x8d]](s[0xc]) != -0x1, window['_wA1'][s[0x5f]] = woub53[s[0x9c]] ? woub53[s[0x9c]][s[0x19a]]() : '', window['_wA1']['_w$IY1A'] = ![], window['_wA1']['_w$IAY1'] = 0x2;if (do5ubw[s[0x8d]](s[0x19c]) != -0x1) {
      if (woub53[s[0x18b]] >= 0x18) window['_wA1']['_w$IAY1'] = 0x3;else window['_wA1']['_w$IAY1'] = 0x2;
    } else {
      if (do5ubw[s[0x8d]](s[0x19b]) != -0x1) {
        if (woub53[s[0x18b]] && woub53[s[0x18b]] >= 0x14) window['_wA1']['_w$IAY1'] = 0x3;else {
          if (in9l[s[0x8d]](s[0x19e]) != -0x1 || in9l[s[0x8d]](s[0x19f]) != -0x1 || in9l[s[0x8d]](s[0x1a0]) != -0x1 || in9l[s[0x8d]](s[0x1a1]) != -0x1 || in9l[s[0x8d]](s[0x1a2]) != -0x1) window['_wA1']['_w$IAY1'] = 0x2;else window['_wA1']['_w$IAY1'] = 0x3;
        }
      } else window['_wA1']['_w$IAY1'] = 0x2;
    }console[s[0x30]](s[0x1a3] + window['_wA1']['_w$IY1A'] + s[0x1a4] + window['_wA1']['_w$IAY1']);
  } }), wx[s[0xf3]]({ 'success': function (hdo6v5) {
    console[s[0x30]](s[0x1a5] + hdo6v5[s[0xf5]] + s[0x1a6] + hdo6v5[s[0xf7]]);
  } }), wx[s[0x1a7]]({ 'success': function (n0$pl) {
    console[s[0x30]](s[0x1a8] + n0$pl[s[0x1a9]]);
  } }), wx[s[0x1aa]]({ 'keepScreenOn': !![] }), wx[s[0x1ab]](function (i_p0) {
  console[s[0x30]](s[0x1a8] + i_p0[s[0x1a9]] + s[0x1ac] + i_p0[s[0x1ad]]);
}), wx[s[0xd9]](function (eka7) {
  window['_wYI'] = eka7, window['_w1IY'] && window['_wYI'] && (console[s[0x45]](s[0xda] + window['_wYI'][s[0xdb]]), window['_w1IY'](window['_wYI']), window['_wYI'] = null);
}), window[s[0x1ae]] = 0x0, window['_w$AY1I'] = 0x0, window[s[0x1af]] = null, wx[s[0x1b0]](function () {
  window['_w$AY1I']++;var ni$ts = Date[s[0x24]]();(window[s[0x1ae]] == 0x0 || ni$ts - window[s[0x1ae]] > 0x1d4c0) && (console[s[0x5d]](s[0x1b1]), wx[s[0x1b2]]());if (window['_w$AY1I'] >= 0x2) {
    window['_w$AY1I'] = 0x0, console[s[0x57]](s[0x1b3]), wx[s[0x1b4]]('0', 0x1);if (window['_wA1'] && window['_wA1'][s[0x2a]]) window['_wA1I'](s[0x1b5], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});