var O = wx.$C;
console[O[100078]](O[128537]), window[O[128538]], wx[O[128539]](function (as6yn) {
  if (as6yn) {
    if (as6yn[O[104486]]) {
      var j09hd = window[O[100550]][O[128540]][O[104664]](new RegExp(/\./, 'g'), '_'),
          _fvs = as6yn[O[104486]],
          ltmco = _fvs[O[111833]](/(hhhhhhhh\/hhhhgame.js:)[0-9]{1,60}(:)/g);if (ltmco) for (var yas_ = 0x0; yas_ < ltmco[O[100013]]; yas_++) {
        if (ltmco[yas_] && ltmco[yas_][O[100013]] > 0x0) {
          var dj9zr = parseInt(ltmco[yas_][O[104664]](O[128541], '')[O[104664]](':', ''));_fvs = _fvs[O[104664]](ltmco[yas_], ltmco[yas_][O[104664]](':' + dj9zr + ':', ':' + (dj9zr - 0x2) + ':'));
        }
      }_fvs = _fvs[O[104664]](new RegExp(O[128542], 'g'), O[128543] + j09hd + O[124879]), _fvs = _fvs[O[104664]](new RegExp(O[128544], 'g'), O[128543] + j09hd + O[124879]), as6yn[O[104486]] = _fvs;
    }var nfv4g = { 'id': window['$h6R'][O[128545]], 'role': window['$h6R'][O[104606]], 'level': window['$h6R'][O[128546]], 'user': window['$h6R'][O[124781]], 'version': window['$h6R'][O[100101]], 'gamever': window[O[100550]][O[128540]], 'cdn': window['$h6R'][O[104485]], 'serverid': window['$h6R'][O[124776]] ? window['$h6R'][O[124776]][O[111325]] : 0x0, 'systemInfo': window[O[128547]], 'error': O[128548], 'stack': as6yn ? as6yn[O[104486]] : '' },
        eaib62 = JSON[O[104471]](nfv4g);console[O[100125]](O[128549] + eaib62), (!window[O[128538]] || window[O[128538]] != nfv4g[O[100125]]) && (window[O[128538]] = nfv4g[O[100125]], window['$hY6'](nfv4g));
  }
});import 'hhhmd5min.js';import 'hhhzlibs.js';window[O[128550]] = require(O[128551]);import 'hhhindex.js';import 'hhhlibsmin.js';import 'hhhwxmini.js';import 'hhhinitmin.js';console[O[100078]](O[128552]), console[O[100078]](O[128553]), $hY6UR({ 'title': O[128554] });var h_u98zr = { '$hXYR6U': !![] };new window[O[128555]](h_u98zr), window[O[128555]][O[100148]]['$hXU6RY']();if (window['$hXY6RU']) clearInterval(window['$hXY6RU']);window['$hXY6RU'] = null, window['$hXURY6'] = function (ab6i, ns_f) {
  if (!ab6i || !ns_f) return 0x0;ab6i = ab6i[O[100015]]('.'), ns_f = ns_f[O[100015]]('.');const ei62ab = Math[O[100846]](ab6i[O[100013]], ns_f[O[100013]]);while (ab6i[O[100013]] < ei62ab) {
    ab6i[O[100029]]('0');
  }while (ns_f[O[100013]] < ei62ab) {
    ns_f[O[100029]]('0');
  }for (var culop = 0x0; culop < ei62ab; culop++) {
    const pcu$r = parseInt(ab6i[culop]),
          $ruc8p = parseInt(ns_f[culop]);if (pcu$r > $ruc8p) return 0x1;else {
      if (pcu$r < $ruc8p) return -0x1;
    }
  }return 0x0;
}, window[O[128556]] = wx[O[128557]]()[O[128556]], console[O[100475]](O[128558] + window[O[128556]]);var h_zr9jh = wx[O[128559]]();h_zr9jh[O[128560]](function (mclo5t) {
  console[O[100475]](O[128561] + mclo5t[O[128562]]);
}), h_zr9jh[O[128563]](function () {
  wx[O[128564]]({ 'title': O[128565], 'content': O[128566], 'showCancel': ![], 'success': function (h09wd) {
      h_zr9jh[O[128567]]();
    } });
}), h_zr9jh[O[128568]](function () {
  console[O[100475]](O[128569]);
}), window['$hXUR6Y'] = function () {
  console[O[100475]](O[128570]);var l8cup = wx[O[128571]]({ 'name': O[128572], 'success': function (upocl5) {
      console[O[100475]](O[128573]), console[O[100475]](upocl5), upocl5 && upocl5[O[124962]] == O[128574] ? (window['$hRU'] = !![], window['$hRU6Y'](), window['$hR6YU']()) : setTimeout(function () {
        window['$hXUR6Y']();
      }, 0x1f4);
    }, 'fail': function (p$ul8) {
      console[O[100475]](O[128575]), console[O[100475]](p$ul8), setTimeout(function () {
        window['$hXUR6Y']();
      }, 0x1f4);
    } });l8cup && l8cup[O[128576]](gv_y => {});
}, window['$hX6YRU'] = function () {
  console[O[100475]](O[128577]);var ygvs_n = wx[O[128571]]({ 'name': O[128578], 'success': function (n6as2) {
      console[O[100475]](O[128579]), console[O[100475]](n6as2), n6as2 && n6as2[O[124962]] == O[128574] ? (window['$h6UR'] = !![], window['$hRU6Y'](), window['$hR6YU']()) : setTimeout(function () {
        window['$hX6YRU']();
      }, 0x1f4);
    }, 'fail': function (w7hx) {
      console[O[100475]](O[128580]), console[O[100475]](w7hx), setTimeout(function () {
        window['$hX6YRU']();
      }, 0x1f4);
    } });ygvs_n && ygvs_n[O[128576]](c5ulo => {});
}, window[O[128581]] = function () {
  window['$hXURY6'](window[O[128556]], O[128582]) >= 0x0 ? (console[O[100475]](O[128583] + window[O[128556]] + O[128584]), window['$h6Y'](), window['$hXUR6Y'](), window['$hX6YRU']()) : (window['$h6RY'](O[128585], window[O[128556]]), wx[O[128564]]({ 'title': O[106317], 'content': O[128586] }));
}, window[O[128547]] = '', wx[O[128587]]({ 'success'(jd9zhw) {
    window[O[128547]] = O[128588] + jd9zhw[O[128589]] + O[128590] + jd9zhw[O[128591]] + O[128592] + jd9zhw[O[104677]] + O[128593] + jd9zhw[O[100468]] + O[128594] + jd9zhw[O[124752]] + O[128595] + jd9zhw[O[128556]] + O[128596] + jd9zhw[O[109126]], console[O[100475]](window[O[128547]]), console[O[100475]](O[128597] + jd9zhw[O[128598]] + O[128599] + jd9zhw[O[128600]] + O[128601] + jd9zhw[O[128602]] + O[128603] + jd9zhw[O[128604]] + O[128605] + jd9zhw[O[128606]] + O[128607] + jd9zhw[O[128608]] + O[128609] + (jd9zhw[O[128610]] ? jd9zhw[O[128610]][O[100320]] + ',' + jd9zhw[O[128610]][O[101209]] + ',' + jd9zhw[O[128610]][O[101211]] + ',' + jd9zhw[O[128610]][O[101210]] : ''));var x0q7h = jd9zhw[O[100468]] ? jd9zhw[O[100468]][O[112118]]() : '',
        omlt5k = jd9zhw[O[128591]] ? jd9zhw[O[128591]][O[112118]]()[O[104664]]('\x20', '') : '';window['$h6R'][O[101069]] = x0q7h[O[100115]](O[128611]) != -0x1, window['$h6R'][O[111147]] = x0q7h[O[100115]](O[128398]) != -0x1, window['$h6R'][O[128612]] = x0q7h[O[100115]](O[128611]) != -0x1 || x0q7h[O[100115]](O[128398]) != -0x1, window['$h6R'][O[124469]] = x0q7h[O[100115]](O[128613]) != -0x1 || x0q7h[O[100115]](O[128614]) != -0x1, window['$h6R'][O[128615]] = jd9zhw[O[124752]] ? jd9zhw[O[124752]][O[112118]]() : '', window['$h6R']['$hXYUR6'] = ![], window['$h6R']['$hXY6UR'] = 0x2;if (x0q7h[O[100115]](O[128398]) != -0x1) {
      if (jd9zhw[O[109126]] >= 0x18) window['$h6R']['$hXY6UR'] = 0x3;else window['$h6R']['$hXY6UR'] = 0x2;
    } else {
      if (x0q7h[O[100115]](O[128611]) != -0x1) {
        if (jd9zhw[O[109126]] && jd9zhw[O[109126]] >= 0x14) window['$h6R']['$hXY6UR'] = 0x3;else {
          if (omlt5k[O[100115]](O[128616]) != -0x1 || omlt5k[O[100115]](O[128617]) != -0x1 || omlt5k[O[100115]](O[128618]) != -0x1 || omlt5k[O[100115]](O[128619]) != -0x1 || omlt5k[O[100115]](O[128620]) != -0x1) window['$h6R']['$hXY6UR'] = 0x2;else window['$h6R']['$hXY6UR'] = 0x3;
        }
      } else window['$h6R']['$hXY6UR'] = 0x2;
    }console[O[100475]](O[128621] + window['$h6R']['$hXYUR6'] + O[128622] + window['$h6R']['$hXY6UR']);
  } }), wx[O[128623]]({ 'success': function (eb6a2) {
    console[O[100475]](O[128624] + eb6a2[O[104582]] + O[128625] + eb6a2[O[128626]]);
  } }), wx[O[128627]]({ 'success': function (wq71x) {
    console[O[100475]](O[128628] + wq71x[O[128629]]);
  } }), wx[O[128630]]({ 'keepScreenOn': !![] }), wx[O[128631]](function (z$jr8) {
  console[O[100475]](O[128628] + z$jr8[O[128629]] + O[128632] + z$jr8[O[128633]]);
}), wx[O[110659]](function (x0173q) {
  window['$hUY'] = x0173q, window['$hRYU'] && window['$hUY'] && (console[O[100078]](O[128634] + window['$hUY'][O[100769]]), window['$hRYU'](window['$hUY']), window['$hUY'] = null);
}), window['$hX6URY'] = 0x0, window[O[128635]] = null, wx[O[128636]](function () {
  window['$hX6URY']++, wx[O[111690]]();if (window['$hX6URY'] >= 0x2) {
    window['$hX6URY'] = 0x0, console[O[100125]](O[128637]), wx[O[128638]]('0', 0x1);if (window['$h6R'] && window['$h6R'][O[101069]]) window['$h6RY'](O[128639], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});