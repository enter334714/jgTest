var v = wx.$d;
console[v[0x4e]](v[0x7644]), window[v[0x7645]], wx[v[0x7646]](function (qbza0) {
  if (qbza0) {
    if (qbza0[v[0x1234]]) {
      var pv7w$r = window[v[0x22e]][v[0x7647]][v[0x12e6]](new RegExp(/\./, 'g'), '_'),
          nj6me = qbza0[v[0x1234]],
          n6m4j = nj6me[v[0x3037]](/(ddddddddd\/dddgame.js:)[0-9]{1,60}(:)/g);if (n6m4j) for (var ihd6m = 0x0; ihd6m < n6m4j[v[0xd]]; ihd6m++) {
        if (n6m4j[ihd6m] && n6m4j[ihd6m][v[0xd]] > 0x0) {
          var brw = parseInt(n6m4j[ihd6m][v[0x12e6]](v[0x7648], '')[v[0x12e6]](':', ''));nj6me = nj6me[v[0x12e6]](n6m4j[ihd6m], n6m4j[ihd6m][v[0x12e6]](':' + brw + ':', ':' + (brw - 0x2) + ':'));
        }
      }nj6me = nj6me[v[0x12e6]](new RegExp(v[0x7649], 'g'), v[0x764a] + pv7w$r + v[0x6578]), nj6me = nj6me[v[0x12e6]](new RegExp(v[0x764b], 'g'), v[0x764a] + pv7w$r + v[0x6578]), qbza0[v[0x1234]] = nj6me;
    }var rp8w1$ = { 'id': window['D$LZ'][v[0x764c]], 'role': window['D$LZ'][v[0x12ad]], 'level': window['D$LZ'][v[0x764d]], 'user': window['D$LZ'][v[0x6515]], 'version': window['D$LZ'][v[0x65]], 'cdn': window['D$LZ'][v[0x1232]], 'pkgName': window['D$LZ'][v[0x6516]], 'gamever': window[v[0x22e]][v[0x7647]], 'serverid': window['D$LZ'][v[0x6510]] ? window['D$LZ'][v[0x6510]][v[0x2dcf]] : 0x0, 'systemInfo': window[v[0x764e]], 'error': v[0x764f], 'stack': qbza0 ? qbza0[v[0x1234]] : '' },
        id6um = JSON[v[0x1224]](rp8w1$);console[v[0x7d]](v[0x7650] + id6um), (!window[v[0x7645]] || window[v[0x7645]] != rp8w1$[v[0x7d]]) && (window[v[0x7645]] = rp8w1$[v[0x7d]], window['D$SL'](rp8w1$));
  }
});import 'dddmd5min.js';import 'dddzlibs.js';window[v[0x7651]] = require(v[0x7652]);import 'dddindex.js';import 'dddlibsmin.js';import 'dddwxmini.js';import 'dddinitmin.js';console[v[0x4e]](v[0x7653]), console[v[0x4e]](v[0x7654]), D$SLAZ({ 'title': v[0x7655] });var zhmn6e = { 'D$YSZLA': !![] };new window[v[0x7656]](zhmn6e), window[v[0x7656]][v[0x94]]['D$YALZS']();if (window['D$YSLZA']) clearInterval(window['D$YSLZA']);window['D$YSLZA'] = null, window['D$YAZSL'] = function (wvr7$, $lypv) {
  if (!wvr7$ || !$lypv) return 0x0;wvr7$ = wvr7$[v[0xf]]('.'), $lypv = $lypv[v[0xf]]('.');const e6mhjd = Math[v[0x35c]](wvr7$[v[0xd]], $lypv[v[0xd]]);while (wvr7$[v[0xd]] < e6mhjd) {
    wvr7$[v[0x1d]]('0');
  }while ($lypv[v[0xd]] < e6mhjd) {
    $lypv[v[0x1d]]('0');
  }for (var mnj4h = 0x0; mnj4h < e6mhjd; mnj4h++) {
    const ietdum = parseInt(wvr7$[mnj4h]),
          edjhm6 = parseInt($lypv[mnj4h]);if (ietdum > edjhm6) return 0x1;else {
      if (ietdum < edjhm6) return -0x1;
    }
  }return 0x0;
}, window[v[0x7657]] = wx[v[0x7658]]()[v[0x7657]], console[v[0x1e2]](v[0x7659] + window[v[0x7657]]);var zb0gaqz = wx[v[0x765a]]();zb0gaqz[v[0x765b]](function (_c935) {
  console[v[0x1e2]](v[0x765c] + _c935[v[0x765d]]);
}), zb0gaqz[v[0x765e]](function () {
  wx[v[0x765f]]({ 'title': v[0x7660], 'content': v[0x7661], 'showCancel': ![], 'success': function (zaq0g) {
      zb0gaqz[v[0x7662]]();
    } });
}), zb0gaqz[v[0x7663]](function () {
  console[v[0x1e2]](v[0x7664]);
}), window['D$YAZLS'] = function () {
  console[v[0x1e2]](v[0x7665]);var zqg0ba = wx[v[0x7666]]({ 'name': v[0x7667], 'success': function (r8p) {
      console[v[0x1e2]](v[0x7668]), console[v[0x1e2]](r8p), r8p && r8p[v[0x65d7]] == v[0x7669] ? (window['D$ZA'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    }, 'fail': function (m4hj) {
      console[v[0x1e2]](v[0x766a]), console[v[0x1e2]](m4hj), setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    } });zqg0ba && zqg0ba[v[0x72d6]](oc43_9 => {});
}, window['D$YLSZA'] = function () {
  console[v[0x1e2]](v[0x766b]);var jn64_h = wx[v[0x7666]]({ 'name': v[0x766c], 'success': function (h6ejn) {
      console[v[0x1e2]](v[0x766d]), console[v[0x1e2]](h6ejn), h6ejn && h6ejn[v[0x65d7]] == v[0x7669] ? (window['D$LAZ'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    }, 'fail': function (d6uemi) {
      console[v[0x1e2]](v[0x766e]), console[v[0x1e2]](d6uemi), setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    } });jn64_h && jn64_h[v[0x72d6]](vw7p$r => {});
}, window[v[0x766f]] = function () {
  window['D$YAZSL'](window[v[0x7657]], v[0x7670]) >= 0x0 ? (console[v[0x1e2]](v[0x7671] + window[v[0x7657]] + v[0x7672]), window['D$LS'](), window['D$YAZLS'](), window['D$YLSZA']()) : (window['D$LZS'](v[0x7673], window[v[0x7657]]), wx[v[0x765f]]({ 'title': v[0x1979], 'content': v[0x7674] }));
}, window[v[0x764e]] = '', wx[v[0x7675]]({ 'success'(fqtk0g) {
    window[v[0x764e]] = v[0x7676] + fqtk0g[v[0x7677]] + v[0x7678] + fqtk0g[v[0x7679]] + v[0x767a] + fqtk0g[v[0x12f3]] + v[0x767b] + fqtk0g[v[0x1db]] + v[0x767c] + fqtk0g[v[0x64f2]] + v[0x767d] + fqtk0g[v[0x7657]] + v[0x767e] + fqtk0g[v[0x2520]], console[v[0x1e2]](window[v[0x764e]]), console[v[0x1e2]](v[0x767f] + fqtk0g[v[0x7680]] + v[0x7681] + fqtk0g[v[0x7682]] + v[0x7683] + fqtk0g[v[0x7684]] + v[0x7685] + fqtk0g[v[0x7686]] + v[0x7687] + fqtk0g[v[0x7688]] + v[0x7689] + fqtk0g[v[0x768a]] + v[0x768b] + (fqtk0g[v[0x768c]] ? fqtk0g[v[0x768c]][v[0x13e]] + ',' + fqtk0g[v[0x768c]][v[0x4d2]] + ',' + fqtk0g[v[0x768c]][v[0x4d4]] + ',' + fqtk0g[v[0x768c]][v[0x4d3]] : ''));var emu6 = fqtk0g[v[0x1db]] ? fqtk0g[v[0x1db]][v[0x3164]]() : '',
        mhde6 = fqtk0g[v[0x7679]] ? fqtk0g[v[0x7679]][v[0x3164]]()[v[0x12e6]]('\x20', '') : '';window['D$LZ'][v[0x43a]] = emu6[v[0x73]](v[0x7519]) != -0x1, window['D$LZ'][v[0x2d1d]] = emu6[v[0x73]](v[0x7518]) != -0x1, window['D$LZ'][v[0x768d]] = emu6[v[0x73]](v[0x7519]) != -0x1 || emu6[v[0x73]](v[0x7518]) != -0x1, window['D$LZ'][v[0x63e4]] = emu6[v[0x73]](v[0x768e]) != -0x1 || emu6[v[0x73]](v[0x751e]) != -0x1, window['D$LZ'][v[0x768f]] = fqtk0g[v[0x64f2]] ? fqtk0g[v[0x64f2]][v[0x3164]]() : '', window['D$LZ']['D$YSAZL'] = ![], window['D$LZ']['D$YSLAZ'] = 0x2;if (emu6[v[0x73]](v[0x7518]) != -0x1) {
      if (fqtk0g[v[0x2520]] >= 0x18) window['D$LZ']['D$YSLAZ'] = 0x3;else window['D$LZ']['D$YSLAZ'] = 0x2;
    } else {
      if (emu6[v[0x73]](v[0x7519]) != -0x1) {
        if (fqtk0g[v[0x2520]] && fqtk0g[v[0x2520]] >= 0x14) window['D$LZ']['D$YSLAZ'] = 0x3;else {
          if (mhde6[v[0x73]](v[0x7690]) != -0x1 || mhde6[v[0x73]](v[0x7691]) != -0x1 || mhde6[v[0x73]](v[0x7692]) != -0x1 || mhde6[v[0x73]](v[0x7693]) != -0x1 || mhde6[v[0x73]](v[0x7694]) != -0x1) window['D$LZ']['D$YSLAZ'] = 0x2;else window['D$LZ']['D$YSLAZ'] = 0x3;
        }
      } else window['D$LZ']['D$YSLAZ'] = 0x2;
    }console[v[0x1e2]](v[0x7695] + window['D$LZ']['D$YSAZL'] + v[0x7696] + window['D$LZ']['D$YSLAZ']);
  } }), wx[v[0x7697]]({ 'success': function (a81brx) {
    console[v[0x1e2]](v[0x7698] + a81brx[v[0x1295]] + v[0x7699] + a81brx[v[0x769a]]);
  } }), wx[v[0x2f61]]({ 'success': function (etfiud) {
    console[v[0x1e2]](v[0x769b] + etfiud[v[0x3458]]);
  } }), wx[v[0x769c]]({ 'keepScreenOn': !![] }), wx[v[0x2f63]](function (zba18x) {
  console[v[0x1e2]](v[0x769b] + zba18x[v[0x3458]] + v[0x769d] + zba18x[v[0x769e]]);
}), wx[v[0x2b31]](function (x8r1) {
  window['D$AS'] = x8r1, window['D$ZSA'] && window['D$AS'] && (console[v[0x4e]](v[0x769f] + window['D$AS'][v[0x30f]]), window['D$ZSA'](window['D$AS']), window['D$AS'] = null);
}), window[v[0x76a0]] = 0x0, window['D$YLAZS'] = 0x0, window[v[0x76a1]] = null, wx[v[0x76a2]](function () {
  window['D$YLAZS']++;var tui = Date[v[0x53]]();(window[v[0x76a0]] == 0x0 || tui - window[v[0x76a0]] > 0x1d4c0) && (console[v[0x60]](v[0x76a3]), wx[v[0x2f97]]());if (window['D$YLAZS'] >= 0x2) {
    window['D$YLAZS'] = 0x0, console[v[0x7d]](v[0x76a4]), wx[v[0x76a5]]('0', 0x1);if (window['D$LZ'] && window['D$LZ'][v[0x43a]]) window['D$LZS'](v[0x76a6], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});