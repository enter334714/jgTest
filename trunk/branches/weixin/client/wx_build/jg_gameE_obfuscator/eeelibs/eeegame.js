var b = wx.$e;
console[b[30011]](b[0xa9a9]), window['lastError'], wx['onError'](function (lrm82) {
  if (lrm82) {
    if (lrm82[b[44810]]) {
      var e3u6w = window[b[44097]][b[56420]][b[44891]](new RegExp(/\./, 'g'), '_'),
          s6uqew = lrm82[b[44810]],
          xitf = s6uqew[b[47693]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);if (xitf) for (var olr2m8 = 0x0; olr2m8 < xitf[b[38471]]; olr2m8++) {
        var k1jh9d;xitf[olr2m8] && 0x0 < xitf[olr2m8][b[38471]] && (k1jh9d = parseInt(xitf[olr2m8][b[44891]](b[0xa9aa], '')[b[44891]](':', '')), s6uqew = s6uqew[b[44891]](xitf[olr2m8], xitf[olr2m8][b[44891]](':' + k1jh9d + ':', ':' + (k1jh9d - 0x2) + ':')));
      }s6uqew = (s6uqew = s6uqew[b[44891]](new RegExp(b[0xa9ab], 'g'), b[0xa9ac] + e3u6w + b[0xa162]))[b[44891]](new RegExp(b[0xa9ad], 'g'), b[0xa9ac] + e3u6w + b[0xa162]), lrm82[b[44810]] = s6uqew;
    }e3u6w = { 'id': window['E$2A'][b[56421]], 'role': window['E$2A'][b[32686]], 'level': window['E$2A'][b[56422]], 'user': window['E$2A'][b[54829]], 'version': window['E$2A'][b[43800]], 'gamever': window[b[44097]][b[56420]], 'cdn': window['E$2A'][b[44809]], 'serverid': window['E$2A'][b[54827]] ? window['E$2A'][b[54827]][b[47551]] : 0x0, 'systemInfo': window[b[56423]], 'error': 'MiniProgramError', 'stack': lrm82 ? lrm82[b[44810]] : '' }, lrm82 = JSON[b[44800]](e3u6w), (console[b[30009]](b[0xa9ae] + lrm82), window['lastError'] && window['lastError'] == e3u6w[b[30009]] || (window['lastError'] = e3u6w[b[30009]], window['E$P2'](e3u6w)));
  }
});import 'eeemd5min.js';import 'eeezlibs.js';window[b[56424]] = require(b[0xa9af]);import 'eeeindex.js';import 'eeelibsmin.js';import 'eeewxmini.js';import 'eeeinitmin.js';console[b[30011]](b[0xa9b0]), console[b[30011]](b[0xa9b1]), E$P2JA({ 'title': b[0xa9b2] });var ewse6 = { 'E$3JP2A': !0x0 };new window[b[56425]](ewse6), window[b[56425]][b[30036]]['E$3JAP2'](), window['E$3PAJ2'] && clearInterval(window['E$3PAJ2']), window['E$3PAJ2'] = null, window['E$3JA2P'] = function (p284g, g4p82) {
  if (!p284g || !g4p82) return 0x0;p284g = p284g[b[43759]]('.'), g4p82 = g4p82[b[43759]]('.');var mro$n5 = Math[b[33896]](p284g[b[38471]], g4p82[b[38471]]);for (; p284g[b[38471]] < mro$n5;) p284g[b[43770]]('0');for (; g4p82[b[38471]] < mro$n5;) g4p82[b[43770]]('0');for (var nweusq = 0x0; nweusq < mro$n5; nweusq++) {
    var sqw5n = parseInt(p284g[nweusq]),
        gv9dp = parseInt(g4p82[nweusq]);if (gv9dp < sqw5n) return 0x1;if (sqw5n < gv9dp) return -0x1;
  }return 0x0;
}, window[b[56426]] = wx[b[56427]]()[b[56426]], console[b[44048]](b[0xa9b3] + window[b[56426]]);var er$m5l = wx[b[56428]]();er$m5l[b[56429]](function (uxf63) {
  console[b[44048]](b[0xa9b4] + uxf63[b[56430]]);
}), er$m5l[b[56431]](function () {
  wx[b[56432]]({ 'title': b[0xa9b5], 'content': b[0xa9b6], 'showCancel': !0x1, 'success': function (gl8o) {
      er$m5l[b[56433]]();
    } });
}), er$m5l[b[56434]](function () {
  console[b[44048]](b[0xa9b7]);
}), window['E$32PJA'] = function () {
  console[b[44048]](b[0xa9b8]);var $rmns = wx[b[56435]]({ 'name': b[0xa9b9], 'success': function (xif_) {
      console[b[44048]](b[0xa9ba]), console[b[44048]](xif_), xif_ && b[0xa9bb] == xif_[b[54883]] ? (window['E$AJ'] = !0x0, window['E$A2PJ'](), window['E$A2JP']()) : setTimeout(function () {
        window['E$32PJA']();
      }, 0x1f4);
    }, 'fail': function (zba_) {
      console[b[44048]](b[0xa9bc]), console[b[44048]](zba_), setTimeout(function () {
        window['E$32PJA']();
      }, 0x1f4);
    } });$rmns && $rmns[b[56436]](_aity => {});
}, window['E$32JPA'] = function () {
  console[b[44048]](b[0xa9bd]);var n$sq5e = wx[b[56435]]({ 'name': b[0xa9be], 'success': function (p1h94d) {
      console[b[44048]](b[0xa9bf]), console[b[44048]](p1h94d), p1h94d && b[0xa9bb] == p1h94d[b[54883]] ? (window['E$2JA'] = !0x0, window['E$A2PJ'](), window['E$A2JP']()) : setTimeout(function () {
        window['E$32JPA']();
      }, 0x1f4);
    }, 'fail': function (d41g) {
      console[b[44048]](b[0xa9c0]), console[b[44048]](d41g), setTimeout(function () {
        window['E$32JPA']();
      }, 0x1f4);
    } });n$sq5e && n$sq5e[b[56436]](dpg8 => {});
}, window[b[56437]] = function () {
  0x0 <= window['E$3JA2P'](window[b[56426]], b[0xa9c1]) ? (console[b[44048]](b[0xa9c2] + window[b[56426]] + b[0xa9c3]), window['E$2P'](), window['E$32PJA'](), window['E$32JPA']()) : (window['E$2AP'](b[0xa9c4] + window[b[56426]]), wx[b[56432]]({ 'title': b[0x827f], 'content': b[0xa9c5] }));
}, window[b[56423]] = '', wx[b[56438]]({ 'success'(omr82l) {
    window[b[56423]] = b[0xa9c6] + omr82l[b[56439]] + b[0xa9c7] + omr82l[b[56440]] + b[0xa9c8] + omr82l[b[41150]] + b[0xa9c9] + omr82l[b[44041]] + b[0xa9ca] + omr82l[b[54817]] + b[0xa9cb] + omr82l[b[56426]] + b[0xa9cc] + omr82l[b[46839]], console[b[44048]](window[b[56423]]), console[b[44048]](b[0xa9cd] + omr82l[b[56441]] + b[0xa9ce] + omr82l[b[56442]] + b[0xa9cf] + omr82l[b[56443]] + b[0xa9d0] + omr82l[b[56444]] + b[0xa9d1] + omr82l[b[56445]] + b[0xa9d2] + omr82l[b[56446]] + b[0xa9d3] + (omr82l[b[56447]] ? omr82l[b[56447]][b[30039]] + ',' + omr82l[b[56447]][b[41787]] + ',' + omr82l[b[56447]][b[35230]] + ',' + omr82l[b[56447]][b[33740]] : ''));var pg4 = omr82l[b[44041]] ? omr82l[b[44041]][b[47792]]() : '',
        _a0z = omr82l[b[56440]] ? omr82l[b[56440]][b[47792]]()[b[44891]]('\x20', '') : '';window['E$2A'][b[44064]] = -0x1 != pg4[b[43810]](b[0xa8c2]), window['E$2A'][b[47513]] = -0x1 != pg4[b[43810]](b[0xa8c1]), window['E$2A'][b[56448]] = -0x1 != pg4[b[43810]](b[0xa8c2]) || -0x1 != pg4[b[43810]](b[0xa8c1]), window['E$2A'][b[54711]] = -0x1 != pg4[b[43810]](b[0xa9d4]) || -0x1 != pg4[b[43810]](b[0xa9d5]), window['E$2A'][b[56449]] = omr82l[b[54817]] ? omr82l[b[54817]][b[47792]]() : '', window['E$2A']['E$3P2JA'] = !0x1, -(window['E$2A']['E$3P2AJ'] = 0x1) != pg4[b[43810]](b[0xa8c1]) ? 0x18 <= omr82l[b[46839]] ? window['E$2A']['E$3P2AJ'] = 0x2 : window['E$2A']['E$3P2AJ'] = 0x1 : -0x1 == pg4[b[43810]](b[0xa8c2]) || !(omr82l[b[46839]] && 0x14 <= omr82l[b[46839]] || -0x1 == _a0z[b[43810]](b[0xa9d6]) && -0x1 == _a0z[b[43810]](b[0xa9d7]) && -0x1 == _a0z[b[43810]](b[0xa9d8]) && -0x1 == _a0z[b[43810]](b[0xa9d9]) && -0x1 == _a0z[b[43810]](b[0xa9da])) ? window['E$2A']['E$3P2AJ'] = 0x1 : window['E$2A']['E$3P2AJ'] = 0x2, console[b[44048]](b[0xa9db] + window['E$2A']['E$3P2JA'] + b[0xa9dc] + window['E$2A']['E$3P2AJ']);
  } }), wx[b[56450]]({ 'success': function (v42p) {
    console[b[44048]](b[0xa9dd] + v42p[b[32675]] + b[0xa9de] + v42p[b[56451]]);
  } }), wx[b[56452]]({ 'success': function (yxf3) {
    console[b[44048]](b[0xa9df] + yxf3[b[56453]]);
  } }), wx[b[56454]]({ 'keepScreenOn': !0x0 }), wx[b[56455]](function (h91p4d) {
  console[b[44048]](b[0xa9df] + h91p4d[b[56453]] + b[0xa9e0] + h91p4d[b[56456]]);
}), wx[b[56457]](function (voml28) {
  window['E$APJ'] = voml28, window['E$AJP'] && window['E$APJ'] && (console[b[30011]](b[0xa9e1] + window['E$APJ'][b[30215]]), window['E$AJP'](window['E$APJ']), window['E$APJ'] = null);
}), window['E$32APJ'] = 0x0, window[b[56458]] = null, wx[b[56459]](function () {
  window['E$32APJ']++, wx[b[47604]](), 0x2 <= window['E$32APJ'] && (window['E$32APJ'] = 0x0, console[b[30009]](b[0xa9e2]), wx[b[56460]]('0', 0x1), window['E$2A'] && window['E$2A'][b[44064]] && window['E$2AP'](b[0xa9e3]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});