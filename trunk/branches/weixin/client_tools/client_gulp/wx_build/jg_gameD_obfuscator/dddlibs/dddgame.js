var v = wx.$d;
console[v[0x4e]](v[0x71ce]), window[v[0x71cf]], wx[v[0x71d0]](function (bgazq0) {
  if (bgazq0) {
    if (bgazq0[v[0x11ad]]) {
      var uid = window[v[0x22b]][v[0x71d1]][v[0x125f]](new RegExp(/\./, 'g'), '_'),
          r8p$1w = bgazq0[v[0x11ad]],
          k0gzfq = r8p$1w[v[0x2f16]](/(ddddddddd\/dddgame.js:)[0-9]{1,60}(:)/g);if (k0gzfq) for (var jdh = 0x0; jdh < k0gzfq[v[0xd]]; jdh++) {
        if (k0gzfq[jdh] && k0gzfq[jdh][v[0xd]] > 0x0) {
          var pwy = parseInt(k0gzfq[jdh][v[0x125f]](v[0x71d2], '')[v[0x125f]](':', ''));r8p$1w = r8p$1w[v[0x125f]](k0gzfq[jdh], k0gzfq[jdh][v[0x125f]](':' + pwy + ':', ':' + (pwy - 0x2) + ':'));
        }
      }r8p$1w = r8p$1w[v[0x125f]](new RegExp(v[0x71d3], 'g'), v[0x71d4] + uid + v[0x62e7]), r8p$1w = r8p$1w[v[0x125f]](new RegExp(v[0x71d5], 'g'), v[0x71d4] + uid + v[0x62e7]), bgazq0[v[0x11ad]] = r8p$1w;
    }var $wprv1 = { 'id': window['D$LZ'][v[0x71d6]], 'role': window['D$LZ'][v[0x1225]], 'level': window['D$LZ'][v[0x71d7]], 'user': window['D$LZ'][v[0x6283]], 'version': window['D$LZ'][v[0x65]], 'gamever': window[v[0x22b]][v[0x71d1]], 'cdn': window['D$LZ'][v[0x11ac]], 'serverid': window['D$LZ'][v[0x627e]] ? window['D$LZ'][v[0x627e]][v[0x2cf6]] : 0x0, 'systemInfo': window[v[0x71d8]], 'error': v[0x71d9], 'stack': bgazq0 ? bgazq0[v[0x11ad]] : '' },
        w$1x8r = JSON[v[0x119e]]($wprv1);console[v[0x7d]](v[0x71da] + w$1x8r), (!window[v[0x71cf]] || window[v[0x71cf]] != $wprv1[v[0x7d]]) && (window[v[0x71cf]] = $wprv1[v[0x7d]], window['D$SL']($wprv1));
  }
});import 'dddmd5min.js';import 'dddzlibs.js';window[v[0x71db]] = require(v[0x71dc]);import 'dddindex.js';import 'dddlibsmin.js';import 'dddwxmini.js';import 'dddinitmin.js';console[v[0x4e]](v[0x71dd]), console[v[0x4e]](v[0x71de]), D$SLAZ({ 'title': v[0x71df] });var zpwvr$1 = { 'D$YSZLA': !![] };new window[v[0x71e0]](zpwvr$1), window[v[0x71e0]][v[0x94]]['D$YALZS']();if (window['D$YSLZA']) clearInterval(window['D$YSLZA']);window['D$YSLZA'] = null, window['D$YAZSL'] = function (b8rx, c_43o) {
  if (!b8rx || !c_43o) return 0x0;b8rx = b8rx[v[0xf]]('.'), c_43o = c_43o[v[0xf]]('.');const jn4hm = Math[v[0x353]](b8rx[v[0xd]], c_43o[v[0xd]]);while (b8rx[v[0xd]] < jn4hm) {
    b8rx[v[0x1d]]('0');
  }while (c_43o[v[0xd]] < jn4hm) {
    c_43o[v[0x1d]]('0');
  }for (var enh6 = 0x0; enh6 < jn4hm; enh6++) {
    const hmedi6 = parseInt(b8rx[enh6]),
          ejmh = parseInt(c_43o[enh6]);if (hmedi6 > ejmh) return 0x1;else {
      if (hmedi6 < ejmh) return -0x1;
    }
  }return 0x0;
}, window[v[0x71e1]] = wx[v[0x71e2]]()[v[0x71e1]], console[v[0x1e0]](v[0x71e3] + window[v[0x71e1]]);var z_3oc5 = wx[v[0x71e4]]();z_3oc5[v[0x71e5]](function (wvy$p7) {
  console[v[0x1e0]](v[0x71e6] + wvy$p7[v[0x71e7]]);
}), z_3oc5[v[0x71e8]](function () {
  wx[v[0x71e9]]({ 'title': v[0x71ea], 'content': v[0x71eb], 'showCancel': ![], 'success': function (rab18x) {
      z_3oc5[v[0x71ec]]();
    } });
}), z_3oc5[v[0x71ed]](function () {
  console[v[0x1e0]](v[0x71ee]);
}), window['D$YAZLS'] = function () {
  console[v[0x1e0]](v[0x71ef]);var fuq = wx[v[0x71f0]]({ 'name': v[0x71f1], 'success': function (ietfdu) {
      console[v[0x1e0]](v[0x71f2]), console[v[0x1e0]](ietfdu), ietfdu && ietfdu[v[0x633d]] == v[0x71f3] ? (window['D$ZA'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    }, 'fail': function (c_o34) {
      console[v[0x1e0]](v[0x71f4]), console[v[0x1e0]](c_o34), setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    } });fuq && fuq[v[0x71f5]](ejhd6m => {});
}, window['D$YLSZA'] = function () {
  console[v[0x1e0]](v[0x71f6]);var c_493o = wx[v[0x71f0]]({ 'name': v[0x71f7], 'success': function (azx8b0) {
      console[v[0x1e0]](v[0x71f8]), console[v[0x1e0]](azx8b0), azx8b0 && azx8b0[v[0x633d]] == v[0x71f3] ? (window['D$LAZ'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    }, 'fail': function (oc359_) {
      console[v[0x1e0]](v[0x71f9]), console[v[0x1e0]](oc359_), setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    } });c_493o && c_493o[v[0x71f5]](mn4j => {});
}, window[v[0x71fa]] = function () {
  window['D$YAZSL'](window[v[0x71e1]], v[0x71fb]) >= 0x0 ? (console[v[0x1e0]](v[0x71fc] + window[v[0x71e1]] + v[0x71fd]), window['D$LS'](), window['D$YAZLS'](), window['D$YLSZA']()) : (window['D$LZS'](v[0x71fe], window[v[0x71e1]]), wx[v[0x71e9]]({ 'title': v[0x18d9], 'content': v[0x71ff] }));
}, window[v[0x71d8]] = '', wx[v[0x7200]]({ 'success'(n6jmeh) {
    window[v[0x71d8]] = v[0x7201] + n6jmeh[v[0x7202]] + v[0x7203] + n6jmeh[v[0x7204]] + v[0x7205] + n6jmeh[v[0x126c]] + v[0x7206] + n6jmeh[v[0x1d9]] + v[0x7207] + n6jmeh[v[0x6265]] + v[0x7208] + n6jmeh[v[0x71e1]] + v[0x7209] + n6jmeh[v[0x245d]], console[v[0x1e0]](window[v[0x71d8]]), console[v[0x1e0]](v[0x720a] + n6jmeh[v[0x720b]] + v[0x720c] + n6jmeh[v[0x720d]] + v[0x720e] + n6jmeh[v[0x720f]] + v[0x7210] + n6jmeh[v[0x7211]] + v[0x7212] + n6jmeh[v[0x7213]] + v[0x7214] + n6jmeh[v[0x7215]] + v[0x7216] + (n6jmeh[v[0x7217]] ? n6jmeh[v[0x7217]][v[0x140]] + ',' + n6jmeh[v[0x7217]][v[0x4bd]] + ',' + n6jmeh[v[0x7217]][v[0x4bf]] + ',' + n6jmeh[v[0x7217]][v[0x4be]] : ''));var c_953 = n6jmeh[v[0x1d9]] ? n6jmeh[v[0x1d9]][v[0x3033]]() : '',
        iukftd = n6jmeh[v[0x7204]] ? n6jmeh[v[0x7204]][v[0x3033]]()[v[0x125f]]('\x20', '') : '';window['D$LZ'][v[0x430]] = c_953[v[0x73]](v[0x70b1]) != -0x1, window['D$LZ'][v[0x2c44]] = c_953[v[0x73]](v[0x70b0]) != -0x1, window['D$LZ'][v[0x7218]] = c_953[v[0x73]](v[0x70b1]) != -0x1 || c_953[v[0x73]](v[0x70b0]) != -0x1, window['D$LZ'][v[0x614c]] = c_953[v[0x73]](v[0x7219]) != -0x1 || c_953[v[0x73]](v[0x70b6]) != -0x1, window['D$LZ'][v[0x721a]] = n6jmeh[v[0x6265]] ? n6jmeh[v[0x6265]][v[0x3033]]() : '', window['D$LZ']['D$YSAZL'] = ![], window['D$LZ']['D$YSLAZ'] = 0x2;if (c_953[v[0x73]](v[0x70b0]) != -0x1) {
      if (n6jmeh[v[0x245d]] >= 0x18) window['D$LZ']['D$YSLAZ'] = 0x3;else window['D$LZ']['D$YSLAZ'] = 0x2;
    } else {
      if (c_953[v[0x73]](v[0x70b1]) != -0x1) {
        if (n6jmeh[v[0x245d]] && n6jmeh[v[0x245d]] >= 0x14) window['D$LZ']['D$YSLAZ'] = 0x3;else {
          if (iukftd[v[0x73]](v[0x721b]) != -0x1 || iukftd[v[0x73]](v[0x721c]) != -0x1 || iukftd[v[0x73]](v[0x721d]) != -0x1 || iukftd[v[0x73]](v[0x721e]) != -0x1 || iukftd[v[0x73]](v[0x721f]) != -0x1) window['D$LZ']['D$YSLAZ'] = 0x2;else window['D$LZ']['D$YSLAZ'] = 0x3;
        }
      } else window['D$LZ']['D$YSLAZ'] = 0x2;
    }console[v[0x1e0]](v[0x7220] + window['D$LZ']['D$YSAZL'] + v[0x7221] + window['D$LZ']['D$YSLAZ']);
  } }), wx[v[0x7222]]({ 'success': function (eutfd) {
    console[v[0x1e0]](v[0x7223] + eutfd[v[0x120d]] + v[0x7224] + eutfd[v[0x7225]]);
  } }), wx[v[0x7226]]({ 'success': function (a8r1) {
    console[v[0x1e0]](v[0x7227] + a8r1[v[0x7228]]);
  } }), wx[v[0x7229]]({ 'keepScreenOn': !![] }), wx[v[0x722a]](function (c493n) {
  console[v[0x1e0]](v[0x7227] + c493n[v[0x7228]] + v[0x722b] + c493n[v[0x722c]]);
}), wx[v[0x2a5b]](function (kz0qfg) {
  window['D$AS'] = kz0qfg, window['D$ZSA'] && window['D$AS'] && (console[v[0x4e]](v[0x722d] + window['D$AS'][v[0x306]]), window['D$ZSA'](window['D$AS']), window['D$AS'] = null);
}), window['D$YLAZS'] = 0x0, window[v[0x722e]] = null, wx[v[0x722f]](function () {
  window['D$YLAZS']++, wx[v[0x2e84]]();if (window['D$YLAZS'] >= 0x2) {
    window['D$YLAZS'] = 0x0, console[v[0x7d]](v[0x7230]), wx[v[0x7231]]('0', 0x1);if (window['D$LZ'] && window['D$LZ'][v[0x430]]) window['D$LZS'](v[0x7232], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});