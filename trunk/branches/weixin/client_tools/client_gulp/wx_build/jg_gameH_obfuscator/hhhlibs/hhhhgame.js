var O = wx.$C;
console[O[100078]](O[129004]), window[O[129005]], wx[O[129006]](function (gsv_nf) {
  if (gsv_nf) {
    if (gsv_nf[O[104524]]) {
      var ngf4_ = window[O[100555]][O[129007]][O[104702]](new RegExp(/\./, 'g'), '_'),
          n_sygv = gsv_nf[O[104524]],
          s2a6iy = n_sygv[O[112047]](/(hhhhhhhh\/hhhhgame.js:)[0-9]{1,60}(:)/g);if (s2a6iy) for (var s6ai = 0x0; s6ai < s2a6iy[O[100013]]; s6ai++) {
        if (s2a6iy[s6ai] && s2a6iy[s6ai][O[100013]] > 0x0) {
          var cu$lp8 = parseInt(s2a6iy[s6ai][O[104702]](O[129008], '')[O[104702]](':', ''));n_sygv = n_sygv[O[104702]](s2a6iy[s6ai], s2a6iy[s6ai][O[104702]](':' + cu$lp8 + ':', ':' + (cu$lp8 - 0x2) + ':'));
        }
      }n_sygv = n_sygv[O[104702]](new RegExp(O[129009], 'g'), O[129010] + ngf4_ + O[125335]), n_sygv = n_sygv[O[104702]](new RegExp(O[129011], 'g'), O[129010] + ngf4_ + O[125335]), gsv_nf[O[104524]] = n_sygv;
    }var a_ns = { 'id': window['$h6R'][O[129012]], 'role': window['$h6R'][O[104644]], 'level': window['$h6R'][O[129013]], 'user': window['$h6R'][O[125235]], 'version': window['$h6R'][O[100101]], 'cdn': window['$h6R'][O[104523]], 'pkgName': window['$h6R'][O[125236]], 'gamever': window[O[100555]][O[129007]], 'serverid': window['$h6R'][O[125230]] ? window['$h6R'][O[125230]][O[111506]] : 0x0, 'systemInfo': window[O[129014]], 'error': O[129015], 'stack': gsv_nf ? gsv_nf[O[104524]] : '' },
        y6a_n = JSON[O[104509]](a_ns);console[O[100125]](O[129016] + y6a_n), (!window[O[129005]] || window[O[129005]] != a_ns[O[100125]]) && (window[O[129005]] = a_ns[O[100125]], window['$hY6'](a_ns));
  }
});import 'hhhmd5min.js';import 'hhhzlibs.js';window[O[129017]] = require(O[129018]);import 'hhhindex.js';import 'hhhlibsmin.js';import 'hhhwxmini.js';import 'hhhinitmin.js';console[O[100078]](O[129019]), console[O[100078]](O[129020]), $hY6UR({ 'title': O[129021] });var h_pc8lu = { '$hXYR6U': !![] };new window[O[129022]](h_pc8lu), window[O[129022]][O[100148]]['$hXU6RY']();if (window['$hXY6RU']) clearInterval(window['$hXY6RU']);window['$hXY6RU'] = null, window['$hXURY6'] = function (ns_yvg, cp8l$u) {
  if (!ns_yvg || !cp8l$u) return 0x0;ns_yvg = ns_yvg[O[100015]]('.'), cp8l$u = cp8l$u[O[100015]]('.');const vgnsy_ = Math[O[100851]](ns_yvg[O[100013]], cp8l$u[O[100013]]);while (ns_yvg[O[100013]] < vgnsy_) {
    ns_yvg[O[100029]]('0');
  }while (cp8l$u[O[100013]] < vgnsy_) {
    cp8l$u[O[100029]]('0');
  }for (var d9hzrj = 0x0; d9hzrj < vgnsy_; d9hzrj++) {
    const ml5ok = parseInt(ns_yvg[d9hzrj]),
          c5optl = parseInt(cp8l$u[d9hzrj]);if (ml5ok > c5optl) return 0x1;else {
      if (ml5ok < c5optl) return -0x1;
    }
  }return 0x0;
}, window[O[129023]] = wx[O[129024]]()[O[129023]], console[O[100480]](O[129025] + window[O[129023]]);var h_u$c5pl = wx[O[129026]]();h_u$c5pl[O[129027]](function (y_ngv) {
  console[O[100480]](O[129028] + y_ngv[O[129029]]);
}), h_u$c5pl[O[129030]](function () {
  wx[O[129031]]({ 'title': O[129032], 'content': O[129033], 'showCancel': ![], 'success': function (sy6a) {
      h_u$c5pl[O[129034]]();
    } });
}), h_u$c5pl[O[129035]](function () {
  console[O[100480]](O[129036]);
}), window['$hXUR6Y'] = function () {
  console[O[100480]](O[129037]);var _6nsy = wx[O[129038]]({ 'name': O[129039], 'success': function (r8pcu$) {
      console[O[100480]](O[129040]), console[O[100480]](r8pcu$), r8pcu$ && r8pcu$[O[125419]] == O[129041] ? (window['$hRU'] = !![], window['$hRU6Y'](), window['$hR6YU']()) : setTimeout(function () {
        window['$hXUR6Y']();
      }, 0x1f4);
    }, 'fail': function (s6a2) {
      console[O[100480]](O[129042]), console[O[100480]](s6a2), setTimeout(function () {
        window['$hXUR6Y']();
      }, 0x1f4);
    } });_6nsy && _6nsy[O[129043]](hd0xw => {});
}, window['$hX6YRU'] = function () {
  console[O[100480]](O[129044]);var a62by = wx[O[129038]]({ 'name': O[129045], 'success': function (wq071x) {
      console[O[100480]](O[129046]), console[O[100480]](wq071x), wq071x && wq071x[O[125419]] == O[129041] ? (window['$h6UR'] = !![], window['$hRU6Y'](), window['$hR6YU']()) : setTimeout(function () {
        window['$hX6YRU']();
      }, 0x1f4);
    }, 'fail': function (zpr$) {
      console[O[100480]](O[129047]), console[O[100480]](zpr$), setTimeout(function () {
        window['$hX6YRU']();
      }, 0x1f4);
    } });a62by && a62by[O[129043]](dh9rj => {});
}, window[O[129048]] = function () {
  window['$hXURY6'](window[O[129023]], O[129049]) >= 0x0 ? (console[O[100480]](O[129050] + window[O[129023]] + O[129051]), window['$h6Y'](), window['$hXUR6Y'](), window['$hX6YRU']()) : (window['$h6RY'](O[129052], window[O[129023]]), wx[O[129031]]({ 'title': O[106356], 'content': O[129053] }));
}, window[O[129014]] = '', wx[O[129054]]({ 'success'(a6s_ny) {
    window[O[129014]] = O[129055] + a6s_ny[O[129056]] + O[129057] + a6s_ny[O[129058]] + O[129059] + a6s_ny[O[104715]] + O[129060] + a6s_ny[O[100473]] + O[129061] + a6s_ny[O[125207]] + O[129062] + a6s_ny[O[129023]] + O[129063] + a6s_ny[O[109304]], console[O[100480]](window[O[129014]]), console[O[100480]](O[129064] + a6s_ny[O[129065]] + O[129066] + a6s_ny[O[129067]] + O[129068] + a6s_ny[O[129069]] + O[129070] + a6s_ny[O[129071]] + O[129072] + a6s_ny[O[129073]] + O[129074] + a6s_ny[O[129075]] + O[129076] + (a6s_ny[O[129077]] ? a6s_ny[O[129077]][O[100320]] + ',' + a6s_ny[O[129077]][O[101213]] + ',' + a6s_ny[O[129077]][O[101215]] + ',' + a6s_ny[O[129077]][O[101214]] : ''));var ny2sa = a6s_ny[O[100473]] ? a6s_ny[O[100473]][O[112334]]() : '',
        lpo5 = a6s_ny[O[129058]] ? a6s_ny[O[129058]][O[112334]]()[O[104702]]('\x20', '') : '';window['$h6R'][O[101072]] = ny2sa[O[100115]](O[129078]) != -0x1, window['$h6R'][O[111328]] = ny2sa[O[100115]](O[128865]) != -0x1, window['$h6R'][O[129079]] = ny2sa[O[100115]](O[129078]) != -0x1 || ny2sa[O[100115]](O[128865]) != -0x1, window['$h6R'][O[124912]] = ny2sa[O[100115]](O[129080]) != -0x1 || ny2sa[O[100115]](O[129081]) != -0x1, window['$h6R'][O[129082]] = a6s_ny[O[125207]] ? a6s_ny[O[125207]][O[112334]]() : '', window['$h6R']['$hXYUR6'] = ![], window['$h6R']['$hXY6UR'] = 0x2;if (ny2sa[O[100115]](O[128865]) != -0x1) {
      if (a6s_ny[O[109304]] >= 0x18) window['$h6R']['$hXY6UR'] = 0x3;else window['$h6R']['$hXY6UR'] = 0x2;
    } else {
      if (ny2sa[O[100115]](O[129078]) != -0x1) {
        if (a6s_ny[O[109304]] && a6s_ny[O[109304]] >= 0x14) window['$h6R']['$hXY6UR'] = 0x3;else {
          if (lpo5[O[100115]](O[129083]) != -0x1 || lpo5[O[100115]](O[129084]) != -0x1 || lpo5[O[100115]](O[129085]) != -0x1 || lpo5[O[100115]](O[129086]) != -0x1 || lpo5[O[100115]](O[129087]) != -0x1) window['$h6R']['$hXY6UR'] = 0x2;else window['$h6R']['$hXY6UR'] = 0x3;
        }
      } else window['$h6R']['$hXY6UR'] = 0x2;
    }console[O[100480]](O[129088] + window['$h6R']['$hXYUR6'] + O[129089] + window['$h6R']['$hXY6UR']);
  } }), wx[O[129090]]({ 'success': function ($j98) {
    console[O[100480]](O[129091] + $j98[O[104620]] + O[129092] + $j98[O[129093]]);
  } }), wx[O[129094]]({ 'success': function (ocml5t) {
    console[O[100480]](O[129095] + ocml5t[O[129096]]);
  } }), wx[O[129097]]({ 'keepScreenOn': !![] }), wx[O[129098]](function (vgsn_f) {
  console[O[100480]](O[129095] + vgsn_f[O[129096]] + O[129099] + vgsn_f[O[129100]]);
}), wx[O[110838]](function (ba26yi) {
  window['$hUY'] = ba26yi, window['$hRYU'] && window['$hUY'] && (console[O[100078]](O[129101] + window['$hUY'][O[100774]]), window['$hRYU'](window['$hUY']), window['$hUY'] = null);
}), window[O[129102]] = 0x0, window['$hX6URY'] = 0x0, window[O[129103]] = null, wx[O[129104]](function () {
  window['$hX6URY']++;var fgnv4 = Date[O[100083]]();(window[O[129102]] == 0x0 || fgnv4 - window[O[129102]] > 0x1d4c0) && (console[O[100096]](O[129105]), wx[O[111900]]());if (window['$hX6URY'] >= 0x2) {
    window['$hX6URY'] = 0x0, console[O[100125]](O[129106]), wx[O[129107]]('0', 0x1);if (window['$h6R'] && window['$h6R'][O[101072]]) window['$h6RY'](O[129108], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});