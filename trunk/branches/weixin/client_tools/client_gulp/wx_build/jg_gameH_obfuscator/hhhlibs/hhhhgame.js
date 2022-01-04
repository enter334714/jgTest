var O = wx.$C;
console[O[100078]](O[128986]), window[O[128987]], wx[O[128988]](function (g4_vn) {
  if (g4_vn) {
    if (g4_vn[O[104525]]) {
      var wdqx0 = window[O[100555]][O[128989]][O[104703]](new RegExp(/\./, 'g'), '_'),
          f4_3gv = g4_vn[O[104525]],
          gfvs = f4_3gv[O[112048]](/(hhhhhhhh\/hhhhgame.js:)[0-9]{1,60}(:)/g);if (gfvs) for (var r98zu = 0x0; r98zu < gfvs[O[100013]]; r98zu++) {
        if (gfvs[r98zu] && gfvs[r98zu][O[100013]] > 0x0) {
          var $cl5pu = parseInt(gfvs[r98zu][O[104703]](O[128990], '')[O[104703]](':', ''));f4_3gv = f4_3gv[O[104703]](gfvs[r98zu], gfvs[r98zu][O[104703]](':' + $cl5pu + ':', ':' + ($cl5pu - 0x2) + ':'));
        }
      }f4_3gv = f4_3gv[O[104703]](new RegExp(O[128991], 'g'), O[128992] + wdqx0 + O[125315]), f4_3gv = f4_3gv[O[104703]](new RegExp(O[128993], 'g'), O[128992] + wdqx0 + O[125315]), g4_vn[O[104525]] = f4_3gv;
    }var g_nsf = { 'id': window['$h6R'][O[128994]], 'role': window['$h6R'][O[104645]], 'level': window['$h6R'][O[128995]], 'user': window['$h6R'][O[125215]], 'version': window['$h6R'][O[100101]], 'cdn': window['$h6R'][O[104524]], 'pkgName': window['$h6R'][O[125216]], 'gamever': window[O[100555]][O[128989]], 'serverid': window['$h6R'][O[125210]] ? window['$h6R'][O[125210]][O[111506]] : 0x0, 'systemInfo': window[O[128996]], 'error': O[128997], 'stack': g4_vn ? g4_vn[O[104525]] : '' },
        z9rhj = JSON[O[104510]](g_nsf);console[O[100125]](O[128998] + z9rhj), (!window[O[128987]] || window[O[128987]] != g_nsf[O[100125]]) && (window[O[128987]] = g_nsf[O[100125]], window['$hY6'](g_nsf));
  }
});import 'hhhmd5min.js';import 'hhhzlibs.js';window[O[128999]] = require(O[129000]);import 'hhhindex.js';import 'hhhlibsmin.js';import 'hhhwxmini.js';import 'hhhinitmin.js';console[O[100078]](O[129001]), console[O[100078]](O[129002]), $hY6UR({ 'title': O[129003] });var h_g3417f = { '$hXYR6U': !![] };new window[O[129004]](h_g3417f), window[O[129004]][O[100148]]['$hXU6RY']();if (window['$hXY6RU']) clearInterval(window['$hXY6RU']);window['$hXY6RU'] = null, window['$hXURY6'] = function (f7g41, r$j8) {
  if (!f7g41 || !r$j8) return 0x0;f7g41 = f7g41[O[100015]]('.'), r$j8 = r$j8[O[100015]]('.');const x3471q = Math[O[100851]](f7g41[O[100013]], r$j8[O[100013]]);while (f7g41[O[100013]] < x3471q) {
    f7g41[O[100029]]('0');
  }while (r$j8[O[100013]] < x3471q) {
    r$j8[O[100029]]('0');
  }for (var ul$p8 = 0x0; ul$p8 < x3471q; ul$p8++) {
    const $uz9r = parseInt(f7g41[ul$p8]),
          up8rc = parseInt(r$j8[ul$p8]);if ($uz9r > up8rc) return 0x1;else {
      if ($uz9r < up8rc) return -0x1;
    }
  }return 0x0;
}, window[O[129005]] = wx[O[129006]]()[O[129005]], console[O[100480]](O[129007] + window[O[129005]]);var h_sy_6an = wx[O[129008]]();h_sy_6an[O[129009]](function (plc$5u) {
  console[O[100480]](O[129010] + plc$5u[O[129011]]);
}), h_sy_6an[O[129012]](function () {
  wx[O[129013]]({ 'title': O[129014], 'content': O[129015], 'showCancel': ![], 'success': function (zp8u$r) {
      h_sy_6an[O[129016]]();
    } });
}), h_sy_6an[O[129017]](function () {
  console[O[100480]](O[129018]);
}), window['$hXUR6Y'] = function () {
  console[O[100480]](O[129019]);var x17q = wx[O[129020]]({ 'name': O[129021], 'success': function (zhdr9j) {
      console[O[100480]](O[129022]), console[O[100480]](zhdr9j), zhdr9j && zhdr9j[O[125401]] == O[129023] ? (window['$hRU'] = !![], window['$hRU6Y'](), window['$hR6YU']()) : setTimeout(function () {
        window['$hXUR6Y']();
      }, 0x1f4);
    }, 'fail': function (syan_6) {
      console[O[100480]](O[129024]), console[O[100480]](syan_6), setTimeout(function () {
        window['$hXUR6Y']();
      }, 0x1f4);
    } });x17q && x17q[O[129025]](hwj9 => {});
}, window['$hX6YRU'] = function () {
  console[O[100480]](O[129026]);var fg_ = wx[O[129020]]({ 'name': O[129027], 'success': function (s26ia) {
      console[O[100480]](O[129028]), console[O[100480]](s26ia), s26ia && s26ia[O[125401]] == O[129023] ? (window['$h6UR'] = !![], window['$hRU6Y'](), window['$hR6YU']()) : setTimeout(function () {
        window['$hX6YRU']();
      }, 0x1f4);
    }, 'fail': function (rj9d8) {
      console[O[100480]](O[129029]), console[O[100480]](rj9d8), setTimeout(function () {
        window['$hX6YRU']();
      }, 0x1f4);
    } });fg_ && fg_[O[129025]](nvygs => {});
}, window[O[129030]] = function () {
  window['$hXURY6'](window[O[129005]], O[129031]) >= 0x0 ? (console[O[100480]](O[129032] + window[O[129005]] + O[129033]), window['$h6Y'](), window['$hXUR6Y'](), window['$hX6YRU']()) : (window['$h6RY'](O[129034], window[O[129005]]), wx[O[129013]]({ 'title': O[106357], 'content': O[129035] }));
}, window[O[128996]] = '', wx[O[129036]]({ 'success'(z9r8d) {
    window[O[128996]] = O[129037] + z9r8d[O[129038]] + O[129039] + z9r8d[O[129040]] + O[129041] + z9r8d[O[104716]] + O[129042] + z9r8d[O[100473]] + O[129043] + z9r8d[O[125185]] + O[129044] + z9r8d[O[129005]] + O[129045] + z9r8d[O[109305]], console[O[100480]](window[O[128996]]), console[O[100480]](O[129046] + z9r8d[O[129047]] + O[129048] + z9r8d[O[129049]] + O[129050] + z9r8d[O[129051]] + O[129052] + z9r8d[O[129053]] + O[129054] + z9r8d[O[129055]] + O[129056] + z9r8d[O[129057]] + O[129058] + (z9r8d[O[129059]] ? z9r8d[O[129059]][O[100320]] + ',' + z9r8d[O[129059]][O[101213]] + ',' + z9r8d[O[129059]][O[101215]] + ',' + z9r8d[O[129059]][O[101214]] : ''));var cl5opt = z9r8d[O[100473]] ? z9r8d[O[100473]][O[112335]]() : '',
        ko5ltm = z9r8d[O[129040]] ? z9r8d[O[129040]][O[112335]]()[O[104703]]('\x20', '') : '';window['$h6R'][O[101072]] = cl5opt[O[100115]](O[129060]) != -0x1, window['$h6R'][O[111328]] = cl5opt[O[100115]](O[128847]) != -0x1, window['$h6R'][O[129061]] = cl5opt[O[100115]](O[129060]) != -0x1 || cl5opt[O[100115]](O[128847]) != -0x1, window['$h6R'][O[124904]] = cl5opt[O[100115]](O[129062]) != -0x1 || cl5opt[O[100115]](O[129063]) != -0x1, window['$h6R'][O[129064]] = z9r8d[O[125185]] ? z9r8d[O[125185]][O[112335]]() : '', window['$h6R']['$hXYUR6'] = ![], window['$h6R']['$hXY6UR'] = 0x2;if (cl5opt[O[100115]](O[128847]) != -0x1) {
      if (z9r8d[O[109305]] >= 0x18) window['$h6R']['$hXY6UR'] = 0x3;else window['$h6R']['$hXY6UR'] = 0x2;
    } else {
      if (cl5opt[O[100115]](O[129060]) != -0x1) {
        if (z9r8d[O[109305]] && z9r8d[O[109305]] >= 0x14) window['$h6R']['$hXY6UR'] = 0x3;else {
          if (ko5ltm[O[100115]](O[129065]) != -0x1 || ko5ltm[O[100115]](O[129066]) != -0x1 || ko5ltm[O[100115]](O[129067]) != -0x1 || ko5ltm[O[100115]](O[129068]) != -0x1 || ko5ltm[O[100115]](O[129069]) != -0x1) window['$h6R']['$hXY6UR'] = 0x2;else window['$h6R']['$hXY6UR'] = 0x3;
        }
      } else window['$h6R']['$hXY6UR'] = 0x2;
    }console[O[100480]](O[129070] + window['$h6R']['$hXYUR6'] + O[129071] + window['$h6R']['$hXY6UR']);
  } }), wx[O[129072]]({ 'success': function (aiy6) {
    console[O[100480]](O[129073] + aiy6[O[104621]] + O[129074] + aiy6[O[129075]]);
  } }), wx[O[129076]]({ 'success': function (i2as6y) {
    console[O[100480]](O[129077] + i2as6y[O[129078]]);
  } }), wx[O[129079]]({ 'keepScreenOn': !![] }), wx[O[129080]](function (wj0h) {
  console[O[100480]](O[129077] + wj0h[O[129078]] + O[129081] + wj0h[O[129082]]);
}), wx[O[110839]](function (g4f3v1) {
  window['$hUY'] = g4f3v1, window['$hRYU'] && window['$hUY'] && (console[O[100078]](O[129083] + window['$hUY'][O[100774]]), window['$hRYU'](window['$hUY']), window['$hUY'] = null);
}), window[O[129084]] = 0x0, window['$hX6URY'] = 0x0, window[O[129085]] = null, wx[O[129086]](function () {
  window['$hX6URY']++;var g_f4vn = Date[O[100083]]();(window[O[129084]] == 0x0 || g_f4vn - window[O[129084]] > 0x1d4c0) && (console[O[100096]](O[129087]), wx[O[111901]]());if (window['$hX6URY'] >= 0x2) {
    window['$hX6URY'] = 0x0, console[O[100125]](O[129088]), wx[O[129089]]('0', 0x1);if (window['$h6R'] && window['$h6R'][O[101072]]) window['$h6RY'](O[129090], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});