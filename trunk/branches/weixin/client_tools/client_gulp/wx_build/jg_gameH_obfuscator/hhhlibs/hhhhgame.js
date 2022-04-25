var O = wx.$C;
console[O[0x4e]](O[0x76f5]), window[O[0x76f6]], wx[O[0x76f7]](function (hwdq0) {
  if (hwdq0) {
    if (hwdq0[O[0x1280]]) {
      var ayi6b = window[O[0x22e]][O[0x76f8]][O[0x1334]](new RegExp(/\./, 'g'), '_'),
          rz$98 = hwdq0[O[0x1280]],
          otmc = rz$98[O[0x3096]](/(hhhhhhhh\/hhhhgame.js:)[0-9]{1,60}(:)/g);if (otmc) for (var h9jzw = 0x0; h9jzw < otmc[O[0xd]]; h9jzw++) {
        if (otmc[h9jzw] && otmc[h9jzw][O[0xd]] > 0x0) {
          var x731q0 = parseInt(otmc[h9jzw][O[0x1334]](O[0x76f9], '')[O[0x1334]](':', ''));rz$98 = rz$98[O[0x1334]](otmc[h9jzw], otmc[h9jzw][O[0x1334]](':' + x731q0 + ':', ':' + (x731q0 - 0x2) + ':'));
        }
      }rz$98 = rz$98[O[0x1334]](new RegExp(O[0x76fa], 'g'), O[0x76fb] + ayi6b + O[0x661a]), rz$98 = rz$98[O[0x1334]](new RegExp(O[0x76fc], 'g'), O[0x76fb] + ayi6b + O[0x661a]), hwdq0[O[0x1280]] = rz$98;
    }var tplco5 = { 'id': window['$h6R'][O[0x76fd]], 'role': window['$h6R'][O[0x12f9]], 'level': window['$h6R'][O[0x76fe]], 'user': window['$h6R'][O[0x65b7]], 'version': window['$h6R'][O[0x65]], 'cdn': window['$h6R'][O[0x127e]], 'pkgName': window['$h6R'][O[0x65b8]], 'gamever': window[O[0x22e]][O[0x76f8]], 'serverid': window['$h6R'][O[0x65b2]] ? window['$h6R'][O[0x65b2]][O[0x2e21]] : 0x0, 'systemInfo': window[O[0x76ff]], 'error': O[0x7700], 'stack': hwdq0 ? hwdq0[O[0x1280]] : '' },
        c5pl$ = JSON[O[0x1270]](tplco5);console[O[0x7d]](O[0x7701] + c5pl$), (!window[O[0x76f6]] || window[O[0x76f6]] != tplco5[O[0x7d]]) && (window[O[0x76f6]] = tplco5[O[0x7d]], window['$hY6'](tplco5));
  }
});import 'hhhmd5min.js';import 'hhhzlibs.js';window[O[0x7702]] = require(O[0x7703]);import 'hhhindex.js';import 'hhhlibsmin.js';import 'hhhwxmini.js';import 'hhhinitmin.js';console[O[0x4e]](O[0x7704]), console[O[0x4e]](O[0x7705]), $hY6UR({ 'title': O[0x7706] });var h__3fvg = { '$hXYR6U': !![] };new window[O[0x7707]](h__3fvg), window[O[0x7707]][O[0x94]]['$hXU6RY']();if (window['$hXY6RU']) clearInterval(window['$hXY6RU']);window['$hXY6RU'] = null, window['$hXURY6'] = function (z8dj9, u$8lcp) {
  if (!z8dj9 || !u$8lcp) return 0x0;z8dj9 = z8dj9[O[0xf]]('.'), u$8lcp = u$8lcp[O[0xf]]('.');const h09dw = Math[O[0x36c]](z8dj9[O[0xd]], u$8lcp[O[0xd]]);while (z8dj9[O[0xd]] < h09dw) {
    z8dj9[O[0x1d]]('0');
  }while (u$8lcp[O[0xd]] < h09dw) {
    u$8lcp[O[0x1d]]('0');
  }for (var w0x7 = 0x0; w0x7 < h09dw; w0x7++) {
    const _yasv = parseInt(z8dj9[w0x7]),
          vy_na = parseInt(u$8lcp[w0x7]);if (_yasv > vy_na) return 0x1;else {
      if (_yasv < vy_na) return -0x1;
    }
  }return 0x0;
}, window[O[0x7708]] = wx[O[0x7709]]()[O[0x7708]], console[O[0x1e2]](O[0x770a] + window[O[0x7708]]);var h__gsfn = wx[O[0x770b]]();h__gsfn[O[0x770c]](function (pocul5) {
  console[O[0x1e2]](O[0x770d] + pocul5[O[0x770e]]);
}), h__gsfn[O[0x770f]](function () {
  wx[O[0x7710]]({ 'title': O[0x7711], 'content': O[0x7712], 'showCancel': ![], 'success': function (vnysg) {
      h__gsfn[O[0x7713]]();
    } });
}), h__gsfn[O[0x7714]](function () {
  console[O[0x1e2]](O[0x7715]);
}), window['$hXUR6Y'] = function () {
  console[O[0x1e2]](O[0x7716]);var dzj9r = wx[O[0x7717]]({ 'name': O[0x7718], 'success': function (o5tlcm) {
      console[O[0x1e2]](O[0x7719]), console[O[0x1e2]](o5tlcm), o5tlcm && o5tlcm[O[0x6679]] == O[0x771a] ? (window['$hRU'] = !![], window['$hRU6Y'](), window['$hR6YU']()) : setTimeout(function () {
        window['$hXUR6Y']();
      }, 0x1f4);
    }, 'fail': function (sy_a6n) {
      console[O[0x1e2]](O[0x771b]), console[O[0x1e2]](sy_a6n), setTimeout(function () {
        window['$hXUR6Y']();
      }, 0x1f4);
    } });dzj9r && dzj9r[O[0x7408]](clp8$u => {});
}, window['$hX6YRU'] = function () {
  console[O[0x1e2]](O[0x771c]);var sygn = wx[O[0x7717]]({ 'name': O[0x771d], 'success': function (gs_fv) {
      console[O[0x1e2]](O[0x771e]), console[O[0x1e2]](gs_fv), gs_fv && gs_fv[O[0x6679]] == O[0x771a] ? (window['$h6UR'] = !![], window['$hRU6Y'](), window['$hR6YU']()) : setTimeout(function () {
        window['$hX6YRU']();
      }, 0x1f4);
    }, 'fail': function (h0wdqx) {
      console[O[0x1e2]](O[0x771f]), console[O[0x1e2]](h0wdqx), setTimeout(function () {
        window['$hX6YRU']();
      }, 0x1f4);
    } });sygn && sygn[O[0x7408]](gy_sn => {});
}, window[O[0x7720]] = function () {
  window['$hXURY6'](window[O[0x7708]], O[0x7721]) >= 0x0 ? (console[O[0x1e2]](O[0x7722] + window[O[0x7708]] + O[0x7723]), window['$h6Y'](), window['$hXUR6Y'](), window['$hX6YRU']()) : (window['$h6RY'](O[0x7724], window[O[0x7708]]), wx[O[0x7710]]({ 'title': O[0x19c3], 'content': O[0x7725] }));
}, window[O[0x76ff]] = '', wx[O[0x7726]]({ 'success'(yi6ba2) {
    window[O[0x76ff]] = O[0x7727] + yi6ba2[O[0x7728]] + O[0x7729] + yi6ba2[O[0x772a]] + O[0x772b] + yi6ba2[O[0x1341]] + O[0x772c] + yi6ba2[O[0x1db]] + O[0x772d] + yi6ba2[O[0x6594]] + O[0x772e] + yi6ba2[O[0x7708]] + O[0x772f] + yi6ba2[O[0x2562]], console[O[0x1e2]](window[O[0x76ff]]), console[O[0x1e2]](O[0x7730] + yi6ba2[O[0x7731]] + O[0x7732] + yi6ba2[O[0x7733]] + O[0x7734] + yi6ba2[O[0x7735]] + O[0x7736] + yi6ba2[O[0x7737]] + O[0x7738] + yi6ba2[O[0x7739]] + O[0x773a] + yi6ba2[O[0x773b]] + O[0x773c] + (yi6ba2[O[0x773d]] ? yi6ba2[O[0x773d]][O[0x13e]] + ',' + yi6ba2[O[0x773d]][O[0x4e4]] + ',' + yi6ba2[O[0x773d]][O[0x4e6]] + ',' + yi6ba2[O[0x773d]][O[0x4e5]] : ''));var ay_nsv = yi6ba2[O[0x1db]] ? yi6ba2[O[0x1db]][O[0x31c8]]() : '',
        snay26 = yi6ba2[O[0x772a]] ? yi6ba2[O[0x772a]][O[0x31c8]]()[O[0x1334]]('\x20', '') : '';window['$h6R'][O[0x44a]] = ay_nsv[O[0x73]](O[0x773e]) != -0x1, window['$h6R'][O[0x2d6f]] = ay_nsv[O[0x73]](O[0x766a]) != -0x1, window['$h6R'][O[0x773f]] = ay_nsv[O[0x73]](O[0x773e]) != -0x1 || ay_nsv[O[0x73]](O[0x766a]) != -0x1, window['$h6R'][O[0x6486]] = ay_nsv[O[0x73]](O[0x7740]) != -0x1 || ay_nsv[O[0x73]](O[0x7741]) != -0x1, window['$h6R'][O[0x7742]] = yi6ba2[O[0x6594]] ? yi6ba2[O[0x6594]][O[0x31c8]]() : '', window['$h6R']['$hXYUR6'] = ![], window['$h6R']['$hXY6UR'] = 0x2;if (ay_nsv[O[0x73]](O[0x766a]) != -0x1) {
      if (yi6ba2[O[0x2562]] >= 0x18) window['$h6R']['$hXY6UR'] = 0x3;else window['$h6R']['$hXY6UR'] = 0x2;
    } else {
      if (ay_nsv[O[0x73]](O[0x773e]) != -0x1) {
        if (yi6ba2[O[0x2562]] && yi6ba2[O[0x2562]] >= 0x14) window['$h6R']['$hXY6UR'] = 0x3;else {
          if (snay26[O[0x73]](O[0x7743]) != -0x1 || snay26[O[0x73]](O[0x7744]) != -0x1 || snay26[O[0x73]](O[0x7745]) != -0x1 || snay26[O[0x73]](O[0x7746]) != -0x1 || snay26[O[0x73]](O[0x7747]) != -0x1) window['$h6R']['$hXY6UR'] = 0x2;else window['$h6R']['$hXY6UR'] = 0x3;
        }
      } else window['$h6R']['$hXY6UR'] = 0x2;
    }console[O[0x1e2]](O[0x7748] + window['$h6R']['$hXYUR6'] + O[0x7749] + window['$h6R']['$hXY6UR']);
  } }), wx[O[0x774a]]({ 'success': function (zr98j) {
    console[O[0x1e2]](O[0x774b] + zr98j[O[0x12e1]] + O[0x774c] + zr98j[O[0x774d]]);
  } }), wx[O[0x2fb3]]({ 'success': function (cp5olu) {
    console[O[0x1e2]](O[0x774e] + cp5olu[O[0x34d6]]);
  } }), wx[O[0x774f]]({ 'keepScreenOn': !![] }), wx[O[0x2fb5]](function (gns_y) {
  console[O[0x1e2]](O[0x774e] + gns_y[O[0x34d6]] + O[0x7750] + gns_y[O[0x7751]]);
}), wx[O[0x2b81]](function (clmto) {
  window['$hUY'] = clmto, window['$hRYU'] && window['$hUY'] && (console[O[0x4e]](O[0x7752] + window['$hUY'][O[0x31f]]), window['$hRYU'](window['$hUY']), window['$hUY'] = null);
}), window[O[0x7753]] = 0x0, window['$hX6URY'] = 0x0, window[O[0x7754]] = null, wx[O[0x7755]](function () {
  window['$hX6URY']++;var svgny = Date[O[0x53]]();(window[O[0x7753]] == 0x0 || svgny - window[O[0x7753]] > 0x1d4c0) && (console[O[0x60]](O[0x7756]), wx[O[0x2ffa]]());if (window['$hX6URY'] >= 0x2) {
    window['$hX6URY'] = 0x0, console[O[0x7d]](O[0x7757]), wx[O[0x7758]]('0', 0x1);if (window['$h6R'] && window['$h6R'][O[0x44a]]) window['$h6RY'](O[0x7759], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});