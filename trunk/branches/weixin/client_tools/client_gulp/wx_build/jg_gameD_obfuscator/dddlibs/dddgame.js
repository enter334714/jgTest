var v = wx.$d;
console[v[0x4e]](v[0x77a6]), window[v[0x77a7]], wx[v[0x77a8]](function (emj6hd) {
  if (emj6hd) {
    if (emj6hd[v[0x1280]]) {
      var tuefid = window[v[0x22e]][v[0x77a9]][v[0x1334]](new RegExp(/\./, 'g'), '_'),
          _39n = emj6hd[v[0x1280]],
          o239c5 = _39n[v[0x309a]](/(ddddddddd\/dddgame.js:)[0-9]{1,60}(:)/g);if (o239c5) for (var dutfki = 0x0; dutfki < o239c5[v[0xd]]; dutfki++) {
        if (o239c5[dutfki] && o239c5[dutfki][v[0xd]] > 0x0) {
          var tiukdf = parseInt(o239c5[dutfki][v[0x1334]](v[0x77aa], '')[v[0x1334]](':', ''));_39n = _39n[v[0x1334]](o239c5[dutfki], o239c5[dutfki][v[0x1334]](':' + tiukdf + ':', ':' + (tiukdf - 0x2) + ':'));
        }
      }_39n = _39n[v[0x1334]](new RegExp(v[0x77ab], 'g'), v[0x77ac] + tuefid + v[0x661e]), _39n = _39n[v[0x1334]](new RegExp(v[0x77ad], 'g'), v[0x77ac] + tuefid + v[0x661e]), emj6hd[v[0x1280]] = _39n;
    }var idtef = { 'id': window['D$LZ'][v[0x77ae]], 'role': window['D$LZ'][v[0x12f9]], 'level': window['D$LZ'][v[0x77af]], 'user': window['D$LZ'][v[0x65bb]], 'version': window['D$LZ'][v[0x65]], 'cdn': window['D$LZ'][v[0x127e]], 'pkgName': window['D$LZ'][v[0x65bc]], 'gamever': window[v[0x22e]][v[0x77a9]], 'serverid': window['D$LZ'][v[0x65b6]] ? window['D$LZ'][v[0x65b6]][v[0x2e25]] : 0x0, 'systemInfo': window[v[0x77b0]], 'error': v[0x77b1], 'stack': emj6hd ? emj6hd[v[0x1280]] : '' },
        $p81w = JSON[v[0x1270]](idtef);console[v[0x7d]](v[0x77b2] + $p81w), (!window[v[0x77a7]] || window[v[0x77a7]] != idtef[v[0x7d]]) && (window[v[0x77a7]] = idtef[v[0x7d]], window['D$SL'](idtef));
  }
});import 'dddmd5min.js';import 'dddzlibs.js';window[v[0x77b3]] = require(v[0x77b4]);import 'dddindex.js';import 'dddlibsmin.js';import 'dddwxmini.js';import 'dddinitmin.js';console[v[0x4e]](v[0x77b5]), console[v[0x4e]](v[0x77b6]), D$SLAZ({ 'title': v[0x77b7] });var zb0qxaz = { 'D$YSZLA': !![] };new window[v[0x77b8]](zb0qxaz), window[v[0x77b8]][v[0x94]]['D$YALZS']();if (window['D$YSLZA']) clearInterval(window['D$YSLZA']);window['D$YSLZA'] = null, window['D$YAZSL'] = function (ejn6, gutkqf) {
  if (!ejn6 || !gutkqf) return 0x0;ejn6 = ejn6[v[0xf]]('.'), gutkqf = gutkqf[v[0xf]]('.');const dhiem = Math[v[0x36c]](ejn6[v[0xd]], gutkqf[v[0xd]]);while (ejn6[v[0xd]] < dhiem) {
    ejn6[v[0x1d]]('0');
  }while (gutkqf[v[0xd]] < dhiem) {
    gutkqf[v[0x1d]]('0');
  }for (var m4n6hj = 0x0; m4n6hj < dhiem; m4n6hj++) {
    const me6hi = parseInt(ejn6[m4n6hj]),
          _4o3c9 = parseInt(gutkqf[m4n6hj]);if (me6hi > _4o3c9) return 0x1;else {
      if (me6hi < _4o3c9) return -0x1;
    }
  }return 0x0;
}, window[v[0x77b9]] = wx[v[0x77ba]]()[v[0x77b9]], console[v[0x1e2]](v[0x77bb] + window[v[0x77b9]]);var zmeutdi = wx[v[0x77bc]]();zmeutdi[v[0x77bd]](function (qbx0) {
  console[v[0x1e2]](v[0x77be] + qbx0[v[0x77bf]]);
}), zmeutdi[v[0x77c0]](function () {
  wx[v[0x77c1]]({ 'title': v[0x77c2], 'content': v[0x77c3], 'showCancel': ![], 'success': function (j349n_) {
      zmeutdi[v[0x77c4]]();
    } });
}), zmeutdi[v[0x77c5]](function () {
  console[v[0x1e2]](v[0x77c6]);
}), window['D$YAZLS'] = function () {
  console[v[0x1e2]](v[0x77c7]);var i6dmh = wx[v[0x77c8]]({ 'name': v[0x77c9], 'success': function (hjed6) {
      console[v[0x1e2]](v[0x77ca]), console[v[0x1e2]](hjed6), hjed6 && hjed6[v[0x667d]] == v[0x77cb] ? (window['D$ZA'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    }, 'fail': function (qb0z) {
      console[v[0x1e2]](v[0x77cc]), console[v[0x1e2]](qb0z), setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    } });i6dmh && i6dmh[v[0x740c]](j6hm4n => {});
}, window['D$YLSZA'] = function () {
  console[v[0x1e2]](v[0x77cd]);var x18wr$ = wx[v[0x77c8]]({ 'name': v[0x77ce], 'success': function (xrw8b) {
      console[v[0x1e2]](v[0x77cf]), console[v[0x1e2]](xrw8b), xrw8b && xrw8b[v[0x667d]] == v[0x77cb] ? (window['D$LAZ'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    }, 'fail': function ($rp1wv) {
      console[v[0x1e2]](v[0x77d0]), console[v[0x1e2]]($rp1wv), setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    } });x18wr$ && x18wr$[v[0x740c]](bagz0q => {});
}, window[v[0x77d1]] = function () {
  window['D$YAZSL'](window[v[0x77b9]], v[0x77d2]) >= 0x0 ? (console[v[0x1e2]](v[0x77d3] + window[v[0x77b9]] + v[0x77d4]), window['D$LS'](), window['D$YAZLS'](), window['D$YLSZA']()) : (window['D$LZS'](v[0x77d5], window[v[0x77b9]]), wx[v[0x77c1]]({ 'title': v[0x19c7], 'content': v[0x77d6] }));
}, window[v[0x77b0]] = '', wx[v[0x77d7]]({ 'success'(v1$rw) {
    window[v[0x77b0]] = v[0x77d8] + v1$rw[v[0x77d9]] + v[0x77da] + v1$rw[v[0x77db]] + v[0x77dc] + v1$rw[v[0x1341]] + v[0x77dd] + v1$rw[v[0x1db]] + v[0x77de] + v1$rw[v[0x6598]] + v[0x77df] + v1$rw[v[0x77b9]] + v[0x77e0] + v1$rw[v[0x2566]], console[v[0x1e2]](window[v[0x77b0]]), console[v[0x1e2]](v[0x77e1] + v1$rw[v[0x77e2]] + v[0x77e3] + v1$rw[v[0x77e4]] + v[0x77e5] + v1$rw[v[0x77e6]] + v[0x77e7] + v1$rw[v[0x77e8]] + v[0x77e9] + v1$rw[v[0x77ea]] + v[0x77eb] + v1$rw[v[0x77ec]] + v[0x77ed] + (v1$rw[v[0x77ee]] ? v1$rw[v[0x77ee]][v[0x13e]] + ',' + v1$rw[v[0x77ee]][v[0x4e4]] + ',' + v1$rw[v[0x77ee]][v[0x4e6]] + ',' + v1$rw[v[0x77ee]][v[0x4e5]] : ''));var t0g = v1$rw[v[0x1db]] ? v1$rw[v[0x1db]][v[0x31cc]]() : '',
        x1bz = v1$rw[v[0x77db]] ? v1$rw[v[0x77db]][v[0x31cc]]()[v[0x1334]]('\x20', '') : '';window['D$LZ'][v[0x44a]] = t0g[v[0x73]](v[0x766e]) != -0x1, window['D$LZ'][v[0x2d73]] = t0g[v[0x73]](v[0x766d]) != -0x1, window['D$LZ'][v[0x77ef]] = t0g[v[0x73]](v[0x766e]) != -0x1 || t0g[v[0x73]](v[0x766d]) != -0x1, window['D$LZ'][v[0x648a]] = t0g[v[0x73]](v[0x77f0]) != -0x1 || t0g[v[0x73]](v[0x7673]) != -0x1, window['D$LZ'][v[0x77f1]] = v1$rw[v[0x6598]] ? v1$rw[v[0x6598]][v[0x31cc]]() : '', window['D$LZ']['D$YSAZL'] = ![], window['D$LZ']['D$YSLAZ'] = 0x2;if (t0g[v[0x73]](v[0x766d]) != -0x1) {
      if (v1$rw[v[0x2566]] >= 0x18) window['D$LZ']['D$YSLAZ'] = 0x3;else window['D$LZ']['D$YSLAZ'] = 0x2;
    } else {
      if (t0g[v[0x73]](v[0x766e]) != -0x1) {
        if (v1$rw[v[0x2566]] && v1$rw[v[0x2566]] >= 0x14) window['D$LZ']['D$YSLAZ'] = 0x3;else {
          if (x1bz[v[0x73]](v[0x77f2]) != -0x1 || x1bz[v[0x73]](v[0x77f3]) != -0x1 || x1bz[v[0x73]](v[0x77f4]) != -0x1 || x1bz[v[0x73]](v[0x77f5]) != -0x1 || x1bz[v[0x73]](v[0x77f6]) != -0x1) window['D$LZ']['D$YSLAZ'] = 0x2;else window['D$LZ']['D$YSLAZ'] = 0x3;
        }
      } else window['D$LZ']['D$YSLAZ'] = 0x2;
    }console[v[0x1e2]](v[0x77f7] + window['D$LZ']['D$YSAZL'] + v[0x77f8] + window['D$LZ']['D$YSLAZ']);
  } }), wx[v[0x77f9]]({ 'success': function (hi6dme) {
    console[v[0x1e2]](v[0x77fa] + hi6dme[v[0x12e1]] + v[0x77fb] + hi6dme[v[0x77fc]]);
  } }), wx[v[0x2fb7]]({ 'success': function (uetmid) {
    console[v[0x1e2]](v[0x77fd] + uetmid[v[0x34da]]);
  } }), wx[v[0x77fe]]({ 'keepScreenOn': !![] }), wx[v[0x2fb9]](function (j9nh_) {
  console[v[0x1e2]](v[0x77fd] + j9nh_[v[0x34da]] + v[0x77ff] + j9nh_[v[0x7800]]);
}), wx[v[0x2b85]](function (uifktg) {
  window['D$AS'] = uifktg, window['D$ZSA'] && window['D$AS'] && (console[v[0x4e]](v[0x7801] + window['D$AS'][v[0x31f]]), window['D$ZSA'](window['D$AS']), window['D$AS'] = null);
}), window[v[0x7802]] = 0x0, window['D$YLAZS'] = 0x0, window[v[0x7803]] = null, wx[v[0x7804]](function () {
  window['D$YLAZS']++;var $rvp1 = Date[v[0x53]]();(window[v[0x7802]] == 0x0 || $rvp1 - window[v[0x7802]] > 0x1d4c0) && (console[v[0x60]](v[0x7805]), wx[v[0x2ffe]]());if (window['D$YLAZS'] >= 0x2) {
    window['D$YLAZS'] = 0x0, console[v[0x7d]](v[0x7806]), wx[v[0x7807]]('0', 0x1);if (window['D$LZ'] && window['D$LZ'][v[0x44a]]) window['D$LZS'](v[0x7808], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});