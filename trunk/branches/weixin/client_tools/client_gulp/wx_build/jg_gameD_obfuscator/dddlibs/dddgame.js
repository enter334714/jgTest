var v = wx.$d;
console[v[0x4e]](v[0x71e0]), window[v[0x71e1]], wx[v[0x71e2]](function (oc_395) {
  if (oc_395) {
    if (oc_395[v[0x11ac]]) {
      var _4j6 = window[v[0x22b]][v[0x71e3]][v[0x125e]](new RegExp(/\./, 'g'), '_'),
          h9j_4 = oc_395[v[0x11ac]],
          fkitgu = h9j_4[v[0x2f13]](/(ddddddddd\/dddgame.js:)[0-9]{1,60}(:)/g);if (fkitgu) for (var p1rw8$ = 0x0; p1rw8$ < fkitgu[v[0xd]]; p1rw8$++) {
        if (fkitgu[p1rw8$] && fkitgu[p1rw8$][v[0xd]] > 0x0) {
          var pw$y7 = parseInt(fkitgu[p1rw8$][v[0x125e]](v[0x71e4], '')[v[0x125e]](':', ''));h9j_4 = h9j_4[v[0x125e]](fkitgu[p1rw8$], fkitgu[p1rw8$][v[0x125e]](':' + pw$y7 + ':', ':' + (pw$y7 - 0x2) + ':'));
        }
      }h9j_4 = h9j_4[v[0x125e]](new RegExp(v[0x71e5], 'g'), v[0x71e6] + _4j6 + v[0x62fb]), h9j_4 = h9j_4[v[0x125e]](new RegExp(v[0x71e7], 'g'), v[0x71e6] + _4j6 + v[0x62fb]), oc_395[v[0x11ac]] = h9j_4;
    }var n6me = { 'id': window['D$LZ'][v[0x71e8]], 'role': window['D$LZ'][v[0x1224]], 'level': window['D$LZ'][v[0x71e9]], 'user': window['D$LZ'][v[0x6297]], 'version': window['D$LZ'][v[0x65]], 'cdn': window['D$LZ'][v[0x11ab]], 'pkgName': window['D$LZ'][v[0x6298]], 'gamever': window[v[0x22b]][v[0x71e3]], 'serverid': window['D$LZ'][v[0x6292]] ? window['D$LZ'][v[0x6292]][v[0x2cf6]] : 0x0, 'systemInfo': window[v[0x71ea]], 'error': v[0x71eb], 'stack': oc_395 ? oc_395[v[0x11ac]] : '' },
        o4c3_ = JSON[v[0x119d]](n6me);console[v[0x7d]](v[0x71ec] + o4c3_), (!window[v[0x71e1]] || window[v[0x71e1]] != n6me[v[0x7d]]) && (window[v[0x71e1]] = n6me[v[0x7d]], window['D$SL'](n6me));
  }
});import 'dddmd5min.js';import 'dddzlibs.js';window[v[0x71ed]] = require(v[0x71ee]);import 'dddindex.js';import 'dddlibsmin.js';import 'dddwxmini.js';import 'dddinitmin.js';console[v[0x4e]](v[0x71ef]), console[v[0x4e]](v[0x71f0]), D$SLAZ({ 'title': v[0x71f1] });var zzqk0fg = { 'D$YSZLA': !![] };new window[v[0x71f2]](zzqk0fg), window[v[0x71f2]][v[0x94]]['D$YALZS']();if (window['D$YSLZA']) clearInterval(window['D$YSLZA']);window['D$YSLZA'] = null, window['D$YAZSL'] = function (zx0a8b, ej6nhm) {
  if (!zx0a8b || !ej6nhm) return 0x0;zx0a8b = zx0a8b[v[0xf]]('.'), ej6nhm = ej6nhm[v[0xf]]('.');const fiktg = Math[v[0x353]](zx0a8b[v[0xd]], ej6nhm[v[0xd]]);while (zx0a8b[v[0xd]] < fiktg) {
    zx0a8b[v[0x1d]]('0');
  }while (ej6nhm[v[0xd]] < fiktg) {
    ej6nhm[v[0x1d]]('0');
  }for (var eumid6 = 0x0; eumid6 < fiktg; eumid6++) {
    const r8xa = parseInt(zx0a8b[eumid6]),
          uftk = parseInt(ej6nhm[eumid6]);if (r8xa > uftk) return 0x1;else {
      if (r8xa < uftk) return -0x1;
    }
  }return 0x0;
}, window[v[0x71f3]] = wx[v[0x71f4]]()[v[0x71f3]], console[v[0x1e0]](v[0x71f5] + window[v[0x71f3]]);var zhdime = wx[v[0x71f6]]();zhdime[v[0x71f7]](function (_jn439) {
  console[v[0x1e0]](v[0x71f8] + _jn439[v[0x71f9]]);
}), zhdime[v[0x71fa]](function () {
  wx[v[0x71fb]]({ 'title': v[0x71fc], 'content': v[0x71fd], 'showCancel': ![], 'success': function (pyw$7) {
      zhdime[v[0x71fe]]();
    } });
}), zhdime[v[0x71ff]](function () {
  console[v[0x1e0]](v[0x7200]);
}), window['D$YAZLS'] = function () {
  console[v[0x1e0]](v[0x7201]);var wp7r$ = wx[v[0x7202]]({ 'name': v[0x7203], 'success': function (pw$r1) {
      console[v[0x1e0]](v[0x7204]), console[v[0x1e0]](pw$r1), pw$r1 && pw$r1[v[0x634f]] == v[0x7205] ? (window['D$ZA'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    }, 'fail': function (r$p) {
      console[v[0x1e0]](v[0x7206]), console[v[0x1e0]](r$p), setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    } });wp7r$ && wp7r$[v[0x7207]](kgqu => {});
}, window['D$YLSZA'] = function () {
  console[v[0x1e0]](v[0x7208]);var _4j9hn = wx[v[0x7202]]({ 'name': v[0x7209], 'success': function (akz0gq) {
      console[v[0x1e0]](v[0x720a]), console[v[0x1e0]](akz0gq), akz0gq && akz0gq[v[0x634f]] == v[0x7205] ? (window['D$LAZ'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    }, 'fail': function (h6mn4j) {
      console[v[0x1e0]](v[0x720b]), console[v[0x1e0]](h6mn4j), setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    } });_4j9hn && _4j9hn[v[0x7207]](hejm6d => {});
}, window[v[0x720c]] = function () {
  window['D$YAZSL'](window[v[0x71f3]], v[0x720d]) >= 0x0 ? (console[v[0x1e0]](v[0x720e] + window[v[0x71f3]] + v[0x720f]), window['D$LS'](), window['D$YAZLS'](), window['D$YLSZA']()) : (window['D$LZS'](v[0x7210], window[v[0x71f3]]), wx[v[0x71fb]]({ 'title': v[0x18d8], 'content': v[0x7211] }));
}, window[v[0x71ea]] = '', wx[v[0x7212]]({ 'success'(n6jemh) {
    window[v[0x71ea]] = v[0x7213] + n6jemh[v[0x7214]] + v[0x7215] + n6jemh[v[0x7216]] + v[0x7217] + n6jemh[v[0x126b]] + v[0x7218] + n6jemh[v[0x1d9]] + v[0x7219] + n6jemh[v[0x627b]] + v[0x721a] + n6jemh[v[0x71f3]] + v[0x721b] + n6jemh[v[0x245c]], console[v[0x1e0]](window[v[0x71ea]]), console[v[0x1e0]](v[0x721c] + n6jemh[v[0x721d]] + v[0x721e] + n6jemh[v[0x721f]] + v[0x7220] + n6jemh[v[0x7221]] + v[0x7222] + n6jemh[v[0x7223]] + v[0x7224] + n6jemh[v[0x7225]] + v[0x7226] + n6jemh[v[0x7227]] + v[0x7228] + (n6jemh[v[0x7229]] ? n6jemh[v[0x7229]][v[0x140]] + ',' + n6jemh[v[0x7229]][v[0x4bd]] + ',' + n6jemh[v[0x7229]][v[0x4bf]] + ',' + n6jemh[v[0x7229]][v[0x4be]] : ''));var zbq0x = n6jemh[v[0x1d9]] ? n6jemh[v[0x1d9]][v[0x3032]]() : '',
        ikduf = n6jemh[v[0x7216]] ? n6jemh[v[0x7216]][v[0x3032]]()[v[0x125e]]('\x20', '') : '';window['D$LZ'][v[0x430]] = zbq0x[v[0x73]](v[0x70c3]) != -0x1, window['D$LZ'][v[0x2c44]] = zbq0x[v[0x73]](v[0x70c2]) != -0x1, window['D$LZ'][v[0x722a]] = zbq0x[v[0x73]](v[0x70c3]) != -0x1 || zbq0x[v[0x73]](v[0x70c2]) != -0x1, window['D$LZ'][v[0x6154]] = zbq0x[v[0x73]](v[0x722b]) != -0x1 || zbq0x[v[0x73]](v[0x70c8]) != -0x1, window['D$LZ'][v[0x722c]] = n6jemh[v[0x627b]] ? n6jemh[v[0x627b]][v[0x3032]]() : '', window['D$LZ']['D$YSAZL'] = ![], window['D$LZ']['D$YSLAZ'] = 0x2;if (zbq0x[v[0x73]](v[0x70c2]) != -0x1) {
      if (n6jemh[v[0x245c]] >= 0x18) window['D$LZ']['D$YSLAZ'] = 0x3;else window['D$LZ']['D$YSLAZ'] = 0x2;
    } else {
      if (zbq0x[v[0x73]](v[0x70c3]) != -0x1) {
        if (n6jemh[v[0x245c]] && n6jemh[v[0x245c]] >= 0x14) window['D$LZ']['D$YSLAZ'] = 0x3;else {
          if (ikduf[v[0x73]](v[0x722d]) != -0x1 || ikduf[v[0x73]](v[0x722e]) != -0x1 || ikduf[v[0x73]](v[0x722f]) != -0x1 || ikduf[v[0x73]](v[0x7230]) != -0x1 || ikduf[v[0x73]](v[0x7231]) != -0x1) window['D$LZ']['D$YSLAZ'] = 0x2;else window['D$LZ']['D$YSLAZ'] = 0x3;
        }
      } else window['D$LZ']['D$YSLAZ'] = 0x2;
    }console[v[0x1e0]](v[0x7232] + window['D$LZ']['D$YSAZL'] + v[0x7233] + window['D$LZ']['D$YSLAZ']);
  } }), wx[v[0x7234]]({ 'success': function (tuikd) {
    console[v[0x1e0]](v[0x7235] + tuikd[v[0x120c]] + v[0x7236] + tuikd[v[0x7237]]);
  } }), wx[v[0x7238]]({ 'success': function (b8zax1) {
    console[v[0x1e0]](v[0x7239] + b8zax1[v[0x723a]]);
  } }), wx[v[0x723b]]({ 'keepScreenOn': !![] }), wx[v[0x723c]](function (b1xza) {
  console[v[0x1e0]](v[0x7239] + b1xza[v[0x723a]] + v[0x723d] + b1xza[v[0x723e]]);
}), wx[v[0x2a5a]](function (w$xr) {
  window['D$AS'] = w$xr, window['D$ZSA'] && window['D$AS'] && (console[v[0x4e]](v[0x723f] + window['D$AS'][v[0x306]]), window['D$ZSA'](window['D$AS']), window['D$AS'] = null);
}), window[v[0x7240]] = 0x0, window['D$YLAZS'] = 0x0, window[v[0x7241]] = null, wx[v[0x7242]](function () {
  window['D$YLAZS']++;var vrw$p7 = Date[v[0x53]]();(window[v[0x7240]] == 0x0 || vrw$p7 - window[v[0x7240]] > 0x1d4c0) && (console[v[0x60]](v[0x7243]), wx[v[0x2e80]]());if (window['D$YLAZS'] >= 0x2) {
    window['D$YLAZS'] = 0x0, console[v[0x7d]](v[0x7244]), wx[v[0x7245]]('0', 0x1);if (window['D$LZ'] && window['D$LZ'][v[0x430]]) window['D$LZS'](v[0x7246], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});