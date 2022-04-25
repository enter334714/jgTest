var v = wx.$d;
console[v[0x4e]](v[0x77a2]), window[v[0x77a3]], wx[v[0x77a4]](function (bagqz) {
  if (bagqz) {
    if (bagqz[v[0x1280]]) {
      var axb8z1 = window[v[0x22e]][v[0x77a5]][v[0x1334]](new RegExp(/\./, 'g'), '_'),
          p$vyw7 = bagqz[v[0x1280]],
          rx8wb = p$vyw7[v[0x309a]](/(ddddddddd\/dddgame.js:)[0-9]{1,60}(:)/g);if (rx8wb) for (var mteui = 0x0; mteui < rx8wb[v[0xd]]; mteui++) {
        if (rx8wb[mteui] && rx8wb[mteui][v[0xd]] > 0x0) {
          var c395o2 = parseInt(rx8wb[mteui][v[0x1334]](v[0x77a6], '')[v[0x1334]](':', ''));p$vyw7 = p$vyw7[v[0x1334]](rx8wb[mteui], rx8wb[mteui][v[0x1334]](':' + c395o2 + ':', ':' + (c395o2 - 0x2) + ':'));
        }
      }p$vyw7 = p$vyw7[v[0x1334]](new RegExp(v[0x77a7], 'g'), v[0x77a8] + axb8z1 + v[0x661e]), p$vyw7 = p$vyw7[v[0x1334]](new RegExp(v[0x77a9], 'g'), v[0x77a8] + axb8z1 + v[0x661e]), bagqz[v[0x1280]] = p$vyw7;
    }var l$7vpy = { 'id': window['D$LZ'][v[0x77aa]], 'role': window['D$LZ'][v[0x12f9]], 'level': window['D$LZ'][v[0x77ab]], 'user': window['D$LZ'][v[0x65bb]], 'version': window['D$LZ'][v[0x65]], 'cdn': window['D$LZ'][v[0x127e]], 'pkgName': window['D$LZ'][v[0x65bc]], 'gamever': window[v[0x22e]][v[0x77a5]], 'serverid': window['D$LZ'][v[0x65b6]] ? window['D$LZ'][v[0x65b6]][v[0x2e25]] : 0x0, 'systemInfo': window[v[0x77ac]], 'error': v[0x77ad], 'stack': bagqz ? bagqz[v[0x1280]] : '' },
        hide = JSON[v[0x1270]](l$7vpy);console[v[0x7d]](v[0x77ae] + hide), (!window[v[0x77a3]] || window[v[0x77a3]] != l$7vpy[v[0x7d]]) && (window[v[0x77a3]] = l$7vpy[v[0x7d]], window['D$SL'](l$7vpy));
  }
});import 'dddmd5min.js';import 'dddzlibs.js';window[v[0x77af]] = require(v[0x77b0]);import 'dddindex.js';import 'dddlibsmin.js';import 'dddwxmini.js';import 'dddinitmin.js';console[v[0x4e]](v[0x77b1]), console[v[0x4e]](v[0x77b2]), D$SLAZ({ 'title': v[0x77b3] });var zxbaz0q = { 'D$YSZLA': !![] };new window[v[0x77b4]](zxbaz0q), window[v[0x77b4]][v[0x94]]['D$YALZS']();if (window['D$YSLZA']) clearInterval(window['D$YSLZA']);window['D$YSLZA'] = null, window['D$YAZSL'] = function (bz1x8, wv7rp$) {
  if (!bz1x8 || !wv7rp$) return 0x0;bz1x8 = bz1x8[v[0xf]]('.'), wv7rp$ = wv7rp$[v[0xf]]('.');const z1b8x = Math[v[0x36c]](bz1x8[v[0xd]], wv7rp$[v[0xd]]);while (bz1x8[v[0xd]] < z1b8x) {
    bz1x8[v[0x1d]]('0');
  }while (wv7rp$[v[0xd]] < z1b8x) {
    wv7rp$[v[0x1d]]('0');
  }for (var _9c5o3 = 0x0; _9c5o3 < z1b8x; _9c5o3++) {
    const fgk0z = parseInt(bz1x8[_9c5o3]),
          emn6j = parseInt(wv7rp$[_9c5o3]);if (fgk0z > emn6j) return 0x1;else {
      if (fgk0z < emn6j) return -0x1;
    }
  }return 0x0;
}, window[v[0x77b5]] = wx[v[0x77b6]]()[v[0x77b5]], console[v[0x1e2]](v[0x77b7] + window[v[0x77b5]]);var zgkqu = wx[v[0x77b8]]();zgkqu[v[0x77b9]](function (tufgkq) {
  console[v[0x1e2]](v[0x77ba] + tufgkq[v[0x77bb]]);
}), zgkqu[v[0x77bc]](function () {
  wx[v[0x77bd]]({ 'title': v[0x77be], 'content': v[0x77bf], 'showCancel': ![], 'success': function (vwpr1) {
      zgkqu[v[0x77c0]]();
    } });
}), zgkqu[v[0x77c1]](function () {
  console[v[0x1e2]](v[0x77c2]);
}), window['D$YAZLS'] = function () {
  console[v[0x1e2]](v[0x77c3]);var tiuem = wx[v[0x77c4]]({ 'name': v[0x77c5], 'success': function (ab8z0x) {
      console[v[0x1e2]](v[0x77c6]), console[v[0x1e2]](ab8z0x), ab8z0x && ab8z0x[v[0x667d]] == v[0x77c7] ? (window['D$ZA'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    }, 'fail': function (_9o3c5) {
      console[v[0x1e2]](v[0x77c8]), console[v[0x1e2]](_9o3c5), setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    } });tiuem && tiuem[v[0x740c]](edmh6i => {});
}, window['D$YLSZA'] = function () {
  console[v[0x1e2]](v[0x77c9]);var hm64jn = wx[v[0x77c4]]({ 'name': v[0x77ca], 'success': function (x08abz) {
      console[v[0x1e2]](v[0x77cb]), console[v[0x1e2]](x08abz), x08abz && x08abz[v[0x667d]] == v[0x77c7] ? (window['D$LAZ'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    }, 'fail': function (qgtu) {
      console[v[0x1e2]](v[0x77cc]), console[v[0x1e2]](qgtu), setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    } });hm64jn && hm64jn[v[0x740c]](b8xz0a => {});
}, window[v[0x77cd]] = function () {
  window['D$YAZSL'](window[v[0x77b5]], v[0x77ce]) >= 0x0 ? (console[v[0x1e2]](v[0x77cf] + window[v[0x77b5]] + v[0x77d0]), window['D$LS'](), window['D$YAZLS'](), window['D$YLSZA']()) : (window['D$LZS'](v[0x77d1], window[v[0x77b5]]), wx[v[0x77bd]]({ 'title': v[0x19c7], 'content': v[0x77d2] }));
}, window[v[0x77ac]] = '', wx[v[0x77d3]]({ 'success'(mjdhe6) {
    window[v[0x77ac]] = v[0x77d4] + mjdhe6[v[0x77d5]] + v[0x77d6] + mjdhe6[v[0x77d7]] + v[0x77d8] + mjdhe6[v[0x1341]] + v[0x77d9] + mjdhe6[v[0x1db]] + v[0x77da] + mjdhe6[v[0x6598]] + v[0x77db] + mjdhe6[v[0x77b5]] + v[0x77dc] + mjdhe6[v[0x2566]], console[v[0x1e2]](window[v[0x77ac]]), console[v[0x1e2]](v[0x77dd] + mjdhe6[v[0x77de]] + v[0x77df] + mjdhe6[v[0x77e0]] + v[0x77e1] + mjdhe6[v[0x77e2]] + v[0x77e3] + mjdhe6[v[0x77e4]] + v[0x77e5] + mjdhe6[v[0x77e6]] + v[0x77e7] + mjdhe6[v[0x77e8]] + v[0x77e9] + (mjdhe6[v[0x77ea]] ? mjdhe6[v[0x77ea]][v[0x13e]] + ',' + mjdhe6[v[0x77ea]][v[0x4e4]] + ',' + mjdhe6[v[0x77ea]][v[0x4e6]] + ',' + mjdhe6[v[0x77ea]][v[0x4e5]] : ''));var j43_9n = mjdhe6[v[0x1db]] ? mjdhe6[v[0x1db]][v[0x31cc]]() : '',
        plv7y = mjdhe6[v[0x77d7]] ? mjdhe6[v[0x77d7]][v[0x31cc]]()[v[0x1334]]('\x20', '') : '';window['D$LZ'][v[0x44a]] = j43_9n[v[0x73]](v[0x766e]) != -0x1, window['D$LZ'][v[0x2d73]] = j43_9n[v[0x73]](v[0x766d]) != -0x1, window['D$LZ'][v[0x77eb]] = j43_9n[v[0x73]](v[0x766e]) != -0x1 || j43_9n[v[0x73]](v[0x766d]) != -0x1, window['D$LZ'][v[0x648a]] = j43_9n[v[0x73]](v[0x77ec]) != -0x1 || j43_9n[v[0x73]](v[0x7673]) != -0x1, window['D$LZ'][v[0x77ed]] = mjdhe6[v[0x6598]] ? mjdhe6[v[0x6598]][v[0x31cc]]() : '', window['D$LZ']['D$YSAZL'] = ![], window['D$LZ']['D$YSLAZ'] = 0x2;if (j43_9n[v[0x73]](v[0x766d]) != -0x1) {
      if (mjdhe6[v[0x2566]] >= 0x18) window['D$LZ']['D$YSLAZ'] = 0x3;else window['D$LZ']['D$YSLAZ'] = 0x2;
    } else {
      if (j43_9n[v[0x73]](v[0x766e]) != -0x1) {
        if (mjdhe6[v[0x2566]] && mjdhe6[v[0x2566]] >= 0x14) window['D$LZ']['D$YSLAZ'] = 0x3;else {
          if (plv7y[v[0x73]](v[0x77ee]) != -0x1 || plv7y[v[0x73]](v[0x77ef]) != -0x1 || plv7y[v[0x73]](v[0x77f0]) != -0x1 || plv7y[v[0x73]](v[0x77f1]) != -0x1 || plv7y[v[0x73]](v[0x77f2]) != -0x1) window['D$LZ']['D$YSLAZ'] = 0x2;else window['D$LZ']['D$YSLAZ'] = 0x3;
        }
      } else window['D$LZ']['D$YSLAZ'] = 0x2;
    }console[v[0x1e2]](v[0x77f3] + window['D$LZ']['D$YSAZL'] + v[0x77f4] + window['D$LZ']['D$YSLAZ']);
  } }), wx[v[0x77f5]]({ 'success': function (co953) {
    console[v[0x1e2]](v[0x77f6] + co953[v[0x12e1]] + v[0x77f7] + co953[v[0x77f8]]);
  } }), wx[v[0x2fb7]]({ 'success': function (tuid) {
    console[v[0x1e2]](v[0x77f9] + tuid[v[0x34da]]);
  } }), wx[v[0x77fa]]({ 'keepScreenOn': !![] }), wx[v[0x2fb9]](function (ufgk) {
  console[v[0x1e2]](v[0x77f9] + ufgk[v[0x34da]] + v[0x77fb] + ufgk[v[0x77fc]]);
}), wx[v[0x2b85]](function (r$1pw) {
  window['D$AS'] = r$1pw, window['D$ZSA'] && window['D$AS'] && (console[v[0x4e]](v[0x77fd] + window['D$AS'][v[0x31f]]), window['D$ZSA'](window['D$AS']), window['D$AS'] = null);
}), window[v[0x77fe]] = 0x0, window['D$YLAZS'] = 0x0, window[v[0x77ff]] = null, wx[v[0x7800]](function () {
  window['D$YLAZS']++;var agbzq0 = Date[v[0x53]]();(window[v[0x77fe]] == 0x0 || agbzq0 - window[v[0x77fe]] > 0x1d4c0) && (console[v[0x60]](v[0x7801]), wx[v[0x2ffe]]());if (window['D$YLAZS'] >= 0x2) {
    window['D$YLAZS'] = 0x0, console[v[0x7d]](v[0x7802]), wx[v[0x7803]]('0', 0x1);if (window['D$LZ'] && window['D$LZ'][v[0x44a]]) window['D$LZS'](v[0x7804], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});