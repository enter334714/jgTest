var v = wx.$d;
console[v[0x4e]](v[0x7649]), window[v[0x764a]], wx[v[0x764b]](function (fz0q) {
  if (fz0q) {
    if (fz0q[v[0x1234]]) {
      var fkqu = window[v[0x22e]][v[0x764c]][v[0x12e6]](new RegExp(/\./, 'g'), '_'),
          xbr1w8 = fz0q[v[0x1234]],
          q0ak = xbr1w8[v[0x3039]](/(ddddddddd\/dddgame.js:)[0-9]{1,60}(:)/g);if (q0ak) for (var etmdui = 0x0; etmdui < q0ak[v[0xd]]; etmdui++) {
        if (q0ak[etmdui] && q0ak[etmdui][v[0xd]] > 0x0) {
          var nhm6e = parseInt(q0ak[etmdui][v[0x12e6]](v[0x764d], '')[v[0x12e6]](':', ''));xbr1w8 = xbr1w8[v[0x12e6]](q0ak[etmdui], q0ak[etmdui][v[0x12e6]](':' + nhm6e + ':', ':' + (nhm6e - 0x2) + ':'));
        }
      }xbr1w8 = xbr1w8[v[0x12e6]](new RegExp(v[0x764e], 'g'), v[0x764f] + fkqu + v[0x657a]), xbr1w8 = xbr1w8[v[0x12e6]](new RegExp(v[0x7650], 'g'), v[0x764f] + fkqu + v[0x657a]), fz0q[v[0x1234]] = xbr1w8;
    }var fktgu = { 'id': window['D$LZ'][v[0x7651]], 'role': window['D$LZ'][v[0x12ad]], 'level': window['D$LZ'][v[0x7652]], 'user': window['D$LZ'][v[0x6517]], 'version': window['D$LZ'][v[0x65]], 'cdn': window['D$LZ'][v[0x1232]], 'pkgName': window['D$LZ'][v[0x6518]], 'gamever': window[v[0x22e]][v[0x764c]], 'serverid': window['D$LZ'][v[0x6512]] ? window['D$LZ'][v[0x6512]][v[0x2dd1]] : 0x0, 'systemInfo': window[v[0x7653]], 'error': v[0x7654], 'stack': fz0q ? fz0q[v[0x1234]] : '' },
        j9_hn = JSON[v[0x1224]](fktgu);console[v[0x7d]](v[0x7655] + j9_hn), (!window[v[0x764a]] || window[v[0x764a]] != fktgu[v[0x7d]]) && (window[v[0x764a]] = fktgu[v[0x7d]], window['D$SL'](fktgu));
  }
});import 'dddmd5min.js';import 'dddzlibs.js';window[v[0x7656]] = require(v[0x7657]);import 'dddindex.js';import 'dddlibsmin.js';import 'dddwxmini.js';import 'dddinitmin.js';console[v[0x4e]](v[0x7658]), console[v[0x4e]](v[0x7659]), D$SLAZ({ 'title': v[0x765a] });var zmedtui = { 'D$YSZLA': !![] };new window[v[0x765b]](zmedtui), window[v[0x765b]][v[0x94]]['D$YALZS']();if (window['D$YSLZA']) clearInterval(window['D$YSLZA']);window['D$YSLZA'] = null, window['D$YAZSL'] = function (idu6em, vp7r$w) {
  if (!idu6em || !vp7r$w) return 0x0;idu6em = idu6em[v[0xf]]('.'), vp7r$w = vp7r$w[v[0xf]]('.');const e6jm = Math[v[0x35c]](idu6em[v[0xd]], vp7r$w[v[0xd]]);while (idu6em[v[0xd]] < e6jm) {
    idu6em[v[0x1d]]('0');
  }while (vp7r$w[v[0xd]] < e6jm) {
    vp7r$w[v[0x1d]]('0');
  }for (var ehnmj6 = 0x0; ehnmj6 < e6jm; ehnmj6++) {
    const uiemd6 = parseInt(idu6em[ehnmj6]),
          yl7$p = parseInt(vp7r$w[ehnmj6]);if (uiemd6 > yl7$p) return 0x1;else {
      if (uiemd6 < yl7$p) return -0x1;
    }
  }return 0x0;
}, window[v[0x765c]] = wx[v[0x765d]]()[v[0x765c]], console[v[0x1e2]](v[0x765e] + window[v[0x765c]]);var ztkguif = wx[v[0x765f]]();ztkguif[v[0x7660]](function (zabg0) {
  console[v[0x1e2]](v[0x7661] + zabg0[v[0x7662]]);
}), ztkguif[v[0x7663]](function () {
  wx[v[0x7664]]({ 'title': v[0x7665], 'content': v[0x7666], 'showCancel': ![], 'success': function (j9h_n4) {
      ztkguif[v[0x7667]]();
    } });
}), ztkguif[v[0x7668]](function () {
  console[v[0x1e2]](v[0x7669]);
}), window['D$YAZLS'] = function () {
  console[v[0x1e2]](v[0x766a]);var teudf = wx[v[0x766b]]({ 'name': v[0x766c], 'success': function ($wp7vr) {
      console[v[0x1e2]](v[0x766d]), console[v[0x1e2]]($wp7vr), $wp7vr && $wp7vr[v[0x65d9]] == v[0x766e] ? (window['D$ZA'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    }, 'fail': function (bar8x1) {
      console[v[0x1e2]](v[0x766f]), console[v[0x1e2]](bar8x1), setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    } });teudf && teudf[v[0x72d8]](gkaq0z => {});
}, window['D$YLSZA'] = function () {
  console[v[0x1e2]](v[0x7670]);var vr = wx[v[0x766b]]({ 'name': v[0x7671], 'success': function (r1x$8) {
      console[v[0x1e2]](v[0x7672]), console[v[0x1e2]](r1x$8), r1x$8 && r1x$8[v[0x65d9]] == v[0x766e] ? (window['D$LAZ'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    }, 'fail': function (_nj94) {
      console[v[0x1e2]](v[0x7673]), console[v[0x1e2]](_nj94), setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    } });vr && vr[v[0x72d8]](n_4c39 => {});
}, window[v[0x7674]] = function () {
  window['D$YAZSL'](window[v[0x765c]], v[0x7675]) >= 0x0 ? (console[v[0x1e2]](v[0x7676] + window[v[0x765c]] + v[0x7677]), window['D$LS'](), window['D$YAZLS'](), window['D$YLSZA']()) : (window['D$LZS'](v[0x7678], window[v[0x765c]]), wx[v[0x7664]]({ 'title': v[0x1979], 'content': v[0x7679] }));
}, window[v[0x7653]] = '', wx[v[0x767a]]({ 'success'(o3c9_5) {
    window[v[0x7653]] = v[0x767b] + o3c9_5[v[0x767c]] + v[0x767d] + o3c9_5[v[0x767e]] + v[0x767f] + o3c9_5[v[0x12f3]] + v[0x7680] + o3c9_5[v[0x1db]] + v[0x7681] + o3c9_5[v[0x64f4]] + v[0x7682] + o3c9_5[v[0x765c]] + v[0x7683] + o3c9_5[v[0x2520]], console[v[0x1e2]](window[v[0x7653]]), console[v[0x1e2]](v[0x7684] + o3c9_5[v[0x7685]] + v[0x7686] + o3c9_5[v[0x7687]] + v[0x7688] + o3c9_5[v[0x7689]] + v[0x768a] + o3c9_5[v[0x768b]] + v[0x768c] + o3c9_5[v[0x768d]] + v[0x768e] + o3c9_5[v[0x768f]] + v[0x7690] + (o3c9_5[v[0x7691]] ? o3c9_5[v[0x7691]][v[0x13e]] + ',' + o3c9_5[v[0x7691]][v[0x4d2]] + ',' + o3c9_5[v[0x7691]][v[0x4d4]] + ',' + o3c9_5[v[0x7691]][v[0x4d3]] : ''));var c9o23 = o3c9_5[v[0x1db]] ? o3c9_5[v[0x1db]][v[0x3166]]() : '',
        f0qtk = o3c9_5[v[0x767e]] ? o3c9_5[v[0x767e]][v[0x3166]]()[v[0x12e6]]('\x20', '') : '';window['D$LZ'][v[0x43a]] = c9o23[v[0x73]](v[0x751b]) != -0x1, window['D$LZ'][v[0x2d1f]] = c9o23[v[0x73]](v[0x751a]) != -0x1, window['D$LZ'][v[0x7692]] = c9o23[v[0x73]](v[0x751b]) != -0x1 || c9o23[v[0x73]](v[0x751a]) != -0x1, window['D$LZ'][v[0x63e6]] = c9o23[v[0x73]](v[0x7693]) != -0x1 || c9o23[v[0x73]](v[0x7520]) != -0x1, window['D$LZ'][v[0x7694]] = o3c9_5[v[0x64f4]] ? o3c9_5[v[0x64f4]][v[0x3166]]() : '', window['D$LZ']['D$YSAZL'] = ![], window['D$LZ']['D$YSLAZ'] = 0x2;if (c9o23[v[0x73]](v[0x751a]) != -0x1) {
      if (o3c9_5[v[0x2520]] >= 0x18) window['D$LZ']['D$YSLAZ'] = 0x3;else window['D$LZ']['D$YSLAZ'] = 0x2;
    } else {
      if (c9o23[v[0x73]](v[0x751b]) != -0x1) {
        if (o3c9_5[v[0x2520]] && o3c9_5[v[0x2520]] >= 0x14) window['D$LZ']['D$YSLAZ'] = 0x3;else {
          if (f0qtk[v[0x73]](v[0x7695]) != -0x1 || f0qtk[v[0x73]](v[0x7696]) != -0x1 || f0qtk[v[0x73]](v[0x7697]) != -0x1 || f0qtk[v[0x73]](v[0x7698]) != -0x1 || f0qtk[v[0x73]](v[0x7699]) != -0x1) window['D$LZ']['D$YSLAZ'] = 0x2;else window['D$LZ']['D$YSLAZ'] = 0x3;
        }
      } else window['D$LZ']['D$YSLAZ'] = 0x2;
    }console[v[0x1e2]](v[0x769a] + window['D$LZ']['D$YSAZL'] + v[0x769b] + window['D$LZ']['D$YSLAZ']);
  } }), wx[v[0x769c]]({ 'success': function (r7vp) {
    console[v[0x1e2]](v[0x769d] + r7vp[v[0x1295]] + v[0x769e] + r7vp[v[0x769f]]);
  } }), wx[v[0x2f63]]({ 'success': function (tiduem) {
    console[v[0x1e2]](v[0x76a0] + tiduem[v[0x345a]]);
  } }), wx[v[0x76a1]]({ 'keepScreenOn': !![] }), wx[v[0x2f65]](function (diut) {
  console[v[0x1e2]](v[0x76a0] + diut[v[0x345a]] + v[0x76a2] + diut[v[0x76a3]]);
}), wx[v[0x2b31]](function (rw8$) {
  window['D$AS'] = rw8$, window['D$ZSA'] && window['D$AS'] && (console[v[0x4e]](v[0x76a4] + window['D$AS'][v[0x30f]]), window['D$ZSA'](window['D$AS']), window['D$AS'] = null);
}), window[v[0x76a5]] = 0x0, window['D$YLAZS'] = 0x0, window[v[0x76a6]] = null, wx[v[0x76a7]](function () {
  window['D$YLAZS']++;var $7pyv = Date[v[0x53]]();(window[v[0x76a5]] == 0x0 || $7pyv - window[v[0x76a5]] > 0x1d4c0) && (console[v[0x60]](v[0x76a8]), wx[v[0x2f99]]());if (window['D$YLAZS'] >= 0x2) {
    window['D$YLAZS'] = 0x0, console[v[0x7d]](v[0x76a9]), wx[v[0x76aa]]('0', 0x1);if (window['D$LZ'] && window['D$LZ'][v[0x43a]]) window['D$LZS'](v[0x76ab], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});