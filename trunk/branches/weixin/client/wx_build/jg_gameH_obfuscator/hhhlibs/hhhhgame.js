var O = wx.$c;
console[O[77]](O[26227]), window[O[26228]], wx[O[26229]](function (j3$t_g) {
  if (j3$t_g) {
    if (j3$t_g[O[3924]]) {
      var vryh8a = window[O[538]][O[26230]][O[4095]](new RegExp(/\./, 'g'), '_'),
          _jw3$ = j3$t_g[O[3924]],
          lv9c8 = _jw3$[O[10648]](/(hhhhhhhh\/hhhhgame.js:)[0-9]{1,60}(:)/g);if (lv9c8) for (var akrbhy = 0x0; akrbhy < lv9c8[O[13]]; akrbhy++) {
        var hkryab;lv9c8[akrbhy] && 0x0 < lv9c8[akrbhy][O[13]] && (hkryab = parseInt(lv9c8[akrbhy][O[4095]](O[26231], '')[O[4095]](':', '')), _jw3$ = _jw3$[O[4095]](lv9c8[akrbhy], lv9c8[akrbhy][O[4095]](':' + hkryab + ':', ':' + (hkryab - 0x2) + ':')));
      }_jw3$ = (_jw3$ = _jw3$[O[4095]](new RegExp(O[26232], 'g'), O[26233] + vryh8a + O[22985]))[O[4095]](new RegExp(O[26234], 'g'), O[26233] + vryh8a + O[22985]), j3$t_g[O[3924]] = _jw3$;
    }vryh8a = { 'id': window['h$6A'][O[26235]], 'role': window['h$6A'][O[4039]], 'level': window['h$6A'][O[26236]], 'user': window['h$6A'][O[22892]], 'version': window['h$6A'][O[100]], 'gamever': window[O[538]][O[26230]], 'cdn': window['h$6A'][O[3923]], 'serverid': window['h$6A'][O[22887]] ? window['h$6A'][O[22887]][O[10290]] : 0x0, 'systemInfo': window[O[26237]], 'error': O[26238], 'stack': j3$t_g ? j3$t_g[O[3924]] : '' }, j3$t_g = JSON[O[3911]](vryh8a), (console[O[124]](O[26239] + j3$t_g), window[O[26228]] && window[O[26228]] == vryh8a[O[124]] || (window[O[26228]] = vryh8a[O[124]], window['h$86'](vryh8a)));
  }
});import 'hhhmd5min.js';import 'hhhzlibs.js';window[O[26240]] = require(O[26241]);import 'hhhindex.js';import 'hhhlibsmin.js';import 'hhhwxmini.js';import 'hhhinitmin.js';console[O[77]](O[26242]), console[O[77]](O[26243]), h$862A({ 'title': O[26244] });var hl9mecn = { 'h$V286A': !0x0 };new window[O[26245]](hl9mecn), window[O[26245]][O[147]]['h$V2A86'](), window['h$V8A26'] && clearInterval(window['h$V8A26']), window['h$V8A26'] = null, window['h$V2A68'] = function (nv8r9, v9cl) {
  if (!nv8r9 || !v9cl) return 0x0;nv8r9 = nv8r9[O[15]]('.'), v9cl = v9cl[O[15]]('.');var i_032 = Math[O[827]](nv8r9[O[13]], v9cl[O[13]]);for (; nv8r9[O[13]] < i_032;) nv8r9[O[29]]('0');for (; v9cl[O[13]] < i_032;) v9cl[O[29]]('0');for (var nvl8c = 0x0; nvl8c < i_032; nvl8c++) {
    var zgj3 = parseInt(nv8r9[nvl8c]),
        zj7g$t = parseInt(v9cl[nvl8c]);if (zj7g$t < zgj3) return 0x1;if (zgj3 < zj7g$t) return -0x1;
  }return 0x0;
}, window[O[26246]] = wx[O[26247]]()[O[26246]], console[O[463]](O[26248] + window[O[26246]]);var hz1gq$ = wx[O[26249]]();hz1gq$[O[26250]](function (qs761) {
  console[O[463]](O[26251] + qs761[O[26252]]);
}), hz1gq$[O[26253]](function () {
  wx[O[26254]]({ 'title': O[26255], 'content': O[26256], 'showCancel': !0x1, 'success': function (qx671s) {
      hz1gq$[O[26257]]();
    } });
}), hz1gq$[O[26258]](function () {
  console[O[463]](O[26259]);
}), window['h$V682A'] = function () {
  console[O[463]](O[26260]);var q1z = wx[O[26261]]({ 'name': O[26262], 'success': function (sbf6d) {
      console[O[463]](O[26263]), console[O[463]](sbf6d), sbf6d && O[26264] == sbf6d[O[23057]] ? (window['h$A2'] = !0x0, window['h$A682'](), window['h$A628']()) : setTimeout(function () {
        window['h$V682A']();
      }, 0x1f4);
    }, 'fail': function (iuw) {
      console[O[463]](O[26265]), console[O[463]](iuw), setTimeout(function () {
        window['h$V682A']();
      }, 0x1f4);
    } });q1z && q1z[O[26266]](cnvle => {});
}, window['h$V628A'] = function () {
  console[O[463]](O[26267]);var n98cv = wx[O[26261]]({ 'name': O[26268], 'success': function (yabr) {
      console[O[463]](O[26269]), console[O[463]](yabr), yabr && O[26264] == yabr[O[23057]] ? (window['h$62A'] = !0x0, window['h$A682'](), window['h$A628']()) : setTimeout(function () {
        window['h$V628A']();
      }, 0x1f4);
    }, 'fail': function (r89lv) {
      console[O[463]](O[26270]), console[O[463]](r89lv), setTimeout(function () {
        window['h$V628A']();
      }, 0x1f4);
    } });n98cv && n98cv[O[26266]](io2u0 => {});
}, window[O[26271]] = function () {
  0x0 <= window['h$V2A68'](window[O[26246]], O[26272]) ? (console[O[463]](O[26273] + window[O[26246]] + O[26274]), window['h$68'](), window['h$V682A'](), window['h$V628A']()) : (window['h$6A8'](O[26275] + window[O[26246]]), wx[O[26254]]({ 'title': O[5715], 'content': O[26276] }));
}, window[O[26237]] = '', wx[O[26277]]({ 'success'(i_2t3w) {
    window[O[26237]] = O[26278] + i_2t3w[O[26279]] + O[26280] + i_2t3w[O[26281]] + O[26282] + i_2t3w[O[4108]] + O[26283] + i_2t3w[O[456]] + O[26284] + i_2t3w[O[22863]] + O[26285] + i_2t3w[O[26246]] + O[26286] + i_2t3w[O[8331]], console[O[463]](window[O[26237]]), console[O[463]](O[26287] + i_2t3w[O[26288]] + O[26289] + i_2t3w[O[26290]] + O[26291] + i_2t3w['screenHeight'] + O[26292] + i_2t3w[O[26293]] + O[26294] + i_2t3w['windowHeight'] + O[26295] + i_2t3w['statusBarHeight'] + O[26296] + (i_2t3w[O[26297]] ? i_2t3w[O[26297]][O[318]] + ',' + i_2t3w[O[26297]][O[1149]] + ',' + i_2t3w[O[26297]][O[1152]] + ',' + i_2t3w[O[26297]][O[1151]] : ''));var u0542 = i_2t3w[O[456]] ? i_2t3w[O[456]][O[10893]]() : '',
        $3ztgj = i_2t3w[O[26281]] ? i_2t3w[O[26281]][O[10893]]()[O[4095]]('\x20', '') : '';window['h$6A'][O[493]] = -0x1 != u0542[O[114]](O[26298]), window['h$6A'][O[10130]] = -0x1 != u0542[O[114]](O[25736]), window['h$6A'][O[26299]] = -0x1 != u0542[O[114]](O[26298]) || -0x1 != u0542[O[114]](O[25736]), window['h$6A'][O[22535]] = -0x1 != u0542[O[114]](O[26300]) || -0x1 != u0542[O[114]](O[26301]), window['h$6A'][O[26302]] = i_2t3w[O[22863]] ? i_2t3w[O[22863]][O[10893]]() : '', window['h$6A']['h$V862A'] = !0x1, -(window['h$6A']['h$V86A2'] = 0x1) != u0542[O[114]](O[25736]) ? 0x18 <= i_2t3w[O[8331]] ? window['h$6A']['h$V86A2'] = 0x2 : window['h$6A']['h$V86A2'] = 0x1 : -0x1 == u0542[O[114]](O[26298]) || !(i_2t3w[O[8331]] && 0x14 <= i_2t3w[O[8331]] || -0x1 == $3ztgj[O[114]](O[26303]) && -0x1 == $3ztgj[O[114]](O[26304]) && -0x1 == $3ztgj[O[114]](O[26305]) && -0x1 == $3ztgj[O[114]](O[26306]) && -0x1 == $3ztgj[O[114]](O[26307])) ? window['h$6A']['h$V86A2'] = 0x1 : window['h$6A']['h$V86A2'] = 0x2, console[O[463]](O[26308] + window['h$6A']['h$V862A'] + O[26309] + window['h$6A']['h$V86A2']);
  } }), wx[O[26310]]({ 'success': function (w2ti) {
    console[O[463]](O[26311] + w2ti[O[4015]] + O[26312] + w2ti[O[26313]]);
  } }), wx[O[26314]]({ 'success': function (dksbyf) {
    console[O[463]](O[26315] + dksbyf[O[26316]]);
  } }), wx[O[26317]]({ 'keepScreenOn': !0x0 }), wx[O[26318]](function (enl9c) {
  console[O[463]](O[26315] + enl9c[O[26316]] + O[26319] + enl9c[O[26320]]);
}), wx[O[26321]](function (w3_0i) {
  window['h$A82'] = w3_0i, window['h$A28'] && window['h$A82'] && (console[O[77]](O[26322] + window['h$A82'][O[750]]), window['h$A28'](window['h$A82']), window['h$A82'] = null);
}), window['h$V6A82'] = 0x0, window[O[26323]] = null, wx[O[26324]](function () {
  window['h$V6A82']++, wx[O[10464]](), 0x2 <= window['h$V6A82'] && (window['h$V6A82'] = 0x0, console[O[124]](O[26325]), wx[O[26326]]('0', 0x1), window['h$6A'] && window['h$6A'][O[493]] && window['h$6A8'](O[26327]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});