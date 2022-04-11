var s = wx.$W;
console[s[0x46]](s[0x17c]), window[s[0x17d]], wx[s[0x17e]](function (ze183c) {
  if (ze183c) {
    if (ze183c[s[0x17f]]) {
      var l0ip$ = window[s[0x2]][s[0x3]][s[0x180]](new RegExp(/\./, 'g'), '_'),
          st$ni = ze183c[s[0x17f]],
          kc7ra = st$ni[s[0x181]](/(wwwwwwwww\/WWGAMEW.js:)[0-9]{1,60}(:)/g);if (kc7ra) for (var jc78a = 0x0; jc78a < kc7ra[s[0xb2]]; jc78a++) {
        if (kc7ra[jc78a] && kc7ra[jc78a][s[0xb2]] > 0x0) {
          var _jp9yr = parseInt(kc7ra[jc78a][s[0x180]](s[0x182], '')[s[0x180]](':', ''));st$ni = st$ni[s[0x180]](kc7ra[jc78a], kc7ra[jc78a][s[0x180]](':' + _jp9yr + ':', ':' + (_jp9yr - 0x2) + ':'));
        }
      }st$ni = st$ni[s[0x180]](new RegExp(s[0x183], 'g'), s[0x184] + l0ip$ + s[0x185]), st$ni = st$ni[s[0x180]](new RegExp(s[0x186], 'g'), s[0x184] + l0ip$ + s[0x185]), ze183c[s[0x17f]] = st$ni;
    }var _jr79 = { 'id': window['_wA1'][s[0x51]], 'role': window['_wA1'][s[0x52]], 'level': window['_wA1'][s[0x53]], 'user': window['_wA1'][s[0x54]], 'version': window['_wA1'][s[0x28]], 'cdn': window['_wA1'][s[0x55]], 'pkgName': window['_wA1'][s[0x18]], 'gamever': window[s[0x2]][s[0x3]], 'serverid': window['_wA1'][s[0x1e]] ? window['_wA1'][s[0x1e]][s[0x56]] : 0x0, 'systemInfo': window[s[0x57]], 'error': s[0x187], 'stack': ze183c ? ze183c[s[0x17f]] : '' },
        t2$fq = JSON[s[0x59]](_jr79);console[s[0x5a]](s[0x188] + t2$fq), (!window[s[0x17d]] || window[s[0x17d]] != _jr79[s[0x5a]]) && (window[s[0x17d]] = _jr79[s[0x5a]], window['_wIA'](_jr79));
  }
});import 'wwfww.js';import 'ww11ww.js';window[s[0x189]] = require(s[0x18a]);import 'wINDww.js';import 'wwIB1ww.js';import 'wwMtadww.js';import 'wwINIwww.js';import 'utils/cxui.laya.js';console[s[0x46]](s[0x18b]), console[s[0x46]](s[0x18c]), _wIAY1({ 'title': s[0x18d] });var wtin0l$ = { '_w$I1AY': !![] };new window[s[0x41]](wtin0l$), window[s[0x41]][s[0x42]]['_w$YA1I']();if (window['_w$IA1Y']) clearInterval(window['_w$IA1Y']);window['_w$IA1Y'] = null, window['_w$Y1IA'] = function (c381ez, h6ov5) {
  if (!c381ez || !h6ov5) return 0x0;c381ez = c381ez[s[0x18e]]('.'), h6ov5 = h6ov5[s[0x18e]]('.');const lp9in0 = Math[s[0x18f]](c381ez[s[0xb2]], h6ov5[s[0xb2]]);while (c381ez[s[0xb2]] < lp9in0) {
    c381ez[s[0x100]]('0');
  }while (h6ov5[s[0xb2]] < lp9in0) {
    h6ov5[s[0x100]]('0');
  }for (var m4ghx = 0x0; m4ghx < lp9in0; m4ghx++) {
    const buz3w1 = parseInt(c381ez[m4ghx]),
          mxvg = parseInt(h6ov5[m4ghx]);if (buz3w1 > mxvg) return 0x1;else {
      if (buz3w1 < mxvg) return -0x1;
    }
  }return 0x0;
}, window[s[0x101]] = wx[s[0x190]]()[s[0x101]], console[s[0x31]](s[0x191] + window[s[0x101]]);var ws$lft = wx[s[0x192]]();ws$lft[s[0x193]](function (z3w5b) {
  console[s[0x31]](s[0x194] + z3w5b[s[0x195]]);
}), ws$lft[s[0x196]](function () {
  wx[s[0x33]]({ 'title': s[0x197], 'content': s[0x198], 'showCancel': ![], 'success': function (udb5w) {
      ws$lft[s[0x199]]();
    } });
}), ws$lft[s[0x19a]](function () {
  console[s[0x31]](s[0x19b]);
}), window['_w$Y1AI'] = function () {
  console[s[0x31]](s[0x19c]);var y0n9 = wx[s[0x19d]]({ 'name': s[0x19e], 'success': function (sfltq) {
      console[s[0x31]](s[0x19f]), console[s[0x31]](sfltq), sfltq && sfltq[s[0x90]] == s[0x1a0] ? (window['_w1Y'] = !![], window['_w1YAI'](), window['_w1AIY']()) : setTimeout(function () {
        window['_w$Y1AI']();
      }, 0x1f4);
    }, 'fail': function (np0i$l) {
      console[s[0x31]](s[0x1a1]), console[s[0x31]](np0i$l), setTimeout(function () {
        window['_w$Y1AI']();
      }, 0x1f4);
    } });y0n9 && y0n9[s[0x1a2]](j7a_rk => {});
}, window['_w$AI1Y'] = function () {
  console[s[0x31]](s[0x1a3]);var a1ce8k = wx[s[0x19d]]({ 'name': s[0x1a4], 'success': function (tln$is) {
      console[s[0x31]](s[0x1a5]), console[s[0x31]](tln$is), tln$is && tln$is[s[0x90]] == s[0x1a0] ? (window['_wAY1'] = !![], window['_w1YAI'](), window['_w1AIY']()) : setTimeout(function () {
        window['_w$AI1Y']();
      }, 0x1f4);
    }, 'fail': function (cez831) {
      console[s[0x31]](s[0x1a6]), console[s[0x31]](cez831), setTimeout(function () {
        window['_w$AI1Y']();
      }, 0x1f4);
    } });a1ce8k && a1ce8k[s[0x1a2]](_ry9 => {});
}, window[s[0x1a7]] = function () {
  window['_w$Y1IA'](window[s[0x101]], s[0x1a8]) >= 0x0 ? (console[s[0x31]](s[0x1a9] + window[s[0x101]] + s[0x1aa]), window['_wAI'](), window['_w$Y1AI'](), window['_w$AI1Y']()) : (window['_wA1I'](s[0x1ab], window[s[0x101]]), wx[s[0x33]]({ 'title': s[0x34], 'content': s[0x1ac] }));
}, window[s[0x57]] = '', wx[s[0x1ad]]({ 'success'(_9r0p) {
    window[s[0x57]] = s[0x1ae] + _9r0p[s[0x1af]] + s[0x1b0] + _9r0p[s[0x1b1]] + s[0x1b2] + _9r0p[s[0xa]] + s[0x1b3] + _9r0p[s[0x1b4]] + s[0x1b5] + _9r0p[s[0xa4]] + s[0x1b6] + _9r0p[s[0x101]] + s[0x1b7] + _9r0p[s[0x1b8]], console[s[0x31]](window[s[0x57]]), console[s[0x31]](s[0x1b9] + _9r0p[s[0x1ba]] + s[0x1bb] + _9r0p[s[0x1bc]] + s[0x1bd] + _9r0p[s[0x1be]] + s[0x1bf] + _9r0p[s[0x1c0]] + s[0x1c1] + _9r0p[s[0x1c2]] + s[0x1c3] + _9r0p[s[0x1c4]] + s[0x1c5] + (_9r0p[s[0x1c6]] ? _9r0p[s[0x1c6]][s[0x166]] + ',' + _9r0p[s[0x1c6]][s[0x169]] + ',' + _9r0p[s[0x1c6]][s[0x16b]] + ',' + _9r0p[s[0x1c6]][s[0x16d]] : ''));var carkj7 = _9r0p[s[0x1b4]] ? _9r0p[s[0x1b4]][s[0x1c7]]() : '',
        xmh4vg = _9r0p[s[0x1b1]] ? _9r0p[s[0x1b1]][s[0x1c7]]()[s[0x180]]('\x20', '') : '';window['_wA1'][s[0x2a]] = carkj7[s[0x91]](s[0x1c8]) != -0x1, window['_wA1'][s[0x2b]] = carkj7[s[0x91]](s[0x1c9]) != -0x1, window['_wA1'][s[0x165]] = carkj7[s[0x91]](s[0x1c8]) != -0x1 || carkj7[s[0x91]](s[0x1c9]) != -0x1, window['_wA1'][s[0x2c]] = carkj7[s[0x91]](s[0x1ca]) != -0x1 || carkj7[s[0x91]](s[0xc]) != -0x1, window['_wA1'][s[0x63]] = _9r0p[s[0xa4]] ? _9r0p[s[0xa4]][s[0x1c7]]() : '', window['_wA1']['_w$IY1A'] = ![], window['_wA1']['_w$IAY1'] = 0x2;if (carkj7[s[0x91]](s[0x1c9]) != -0x1) {
      if (_9r0p[s[0x1b8]] >= 0x18) window['_wA1']['_w$IAY1'] = 0x3;else window['_wA1']['_w$IAY1'] = 0x2;
    } else {
      if (carkj7[s[0x91]](s[0x1c8]) != -0x1) {
        if (_9r0p[s[0x1b8]] && _9r0p[s[0x1b8]] >= 0x14) window['_wA1']['_w$IAY1'] = 0x3;else {
          if (xmh4vg[s[0x91]](s[0x1cb]) != -0x1 || xmh4vg[s[0x91]](s[0x1cc]) != -0x1 || xmh4vg[s[0x91]](s[0x1cd]) != -0x1 || xmh4vg[s[0x91]](s[0x1ce]) != -0x1 || xmh4vg[s[0x91]](s[0x1cf]) != -0x1) window['_wA1']['_w$IAY1'] = 0x2;else window['_wA1']['_w$IAY1'] = 0x3;
        }
      } else window['_wA1']['_w$IAY1'] = 0x2;
    }console[s[0x31]](s[0x1d0] + window['_wA1']['_w$IY1A'] + s[0x1d1] + window['_wA1']['_w$IAY1']);
  } }), wx[s[0x114]]({ 'success': function (w5d6b) {
    console[s[0x31]](s[0x1d2] + w5d6b[s[0x116]] + s[0x1d3] + w5d6b[s[0x118]]);
  } }), wx[s[0x11a]]({ 'success': function (_0yp9) {
    console[s[0x31]](s[0x1d4] + _0yp9[s[0x1d5]]);
  } }), wx[s[0x1d6]]({ 'keepScreenOn': !![] }), wx[s[0x11b]](function (r_9jyp) {
  console[s[0x31]](s[0x1d4] + r_9jyp[s[0x1d5]] + s[0x1d7] + r_9jyp[s[0x1d8]]);
}), wx[s[0xfa]](function (wu5bz3) {
  window['_wYI'] = wu5bz3, window['_w1IY'] && window['_wYI'] && (console[s[0x46]](s[0xfb] + window['_wYI'][s[0xfc]]), window['_w1IY'](window['_wYI']), window['_wYI'] = null);
}), window[s[0x1d9]] = 0x0, window['_w$AY1I'] = 0x0, window[s[0x1da]] = null, wx[s[0x1db]](function () {
  window['_w$AY1I']++;var lip0n9 = Date[s[0x24]]();(window[s[0x1d9]] == 0x0 || lip0n9 - window[s[0x1d9]] > 0x1d4c0) && (console[s[0x61]](s[0x1dc]), wx[s[0x1dd]]());if (window['_w$AY1I'] >= 0x2) {
    window['_w$AY1I'] = 0x0, console[s[0x5a]](s[0x1de]), wx[s[0x1df]]('0', 0x1);if (window['_wA1'] && window['_wA1'][s[0x2a]]) window['_wA1I'](s[0x1e0], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});