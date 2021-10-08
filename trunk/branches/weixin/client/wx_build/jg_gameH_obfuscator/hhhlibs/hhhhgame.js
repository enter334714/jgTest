var O = wx.$C;
console[O[78]](O[27312]), window[O[27313]], wx[O[27314]](function (k9ul) {
  if (k9ul) {
    if (k9ul[O[4372]]) {
      var vfm8 = window[O[547]][O[27315]][O[4548]](new RegExp(/\./, 'g'), '_'),
          tj40o = k9ul[O[4372]],
          t0$ozj = tj40o[O[11374]](/(hhhhhhhh\/hhhhgame.js:)[0-9]{1,60}(:)/g);if (t0$ozj) for (var gr52 = 0x0; gr52 < t0$ozj[O[13]]; gr52++) {
        var rp5;t0$ozj[gr52] && 0x0 < t0$ozj[gr52][O[13]] && (rp5 = parseInt(t0$ozj[gr52][O[4548]](O[27316], '')[O[4548]](':', '')), tj40o = tj40o[O[4548]](t0$ozj[gr52], t0$ozj[gr52][O[4548]](':' + rp5 + ':', ':' + (rp5 - 0x2) + ':')));
      }tj40o = (tj40o = tj40o[O[4548]](new RegExp(O[27317], 'g'), O[27318] + vfm8 + O[23986]))[O[4548]](new RegExp(O[27319], 'g'), O[27318] + vfm8 + O[23986]), k9ul[O[4372]] = tj40o;
    }vfm8 = { 'id': window['$hGK'][O[27320]], 'role': window['$hGK'][O[4490]], 'level': window['$hGK'][O[27321]], 'user': window['$hGK'][O[23889]], 'version': window['$hGK'][O[101]], 'gamever': window[O[547]][O[27315]], 'cdn': window['$hGK'][O[4371]], 'serverid': window['$hGK'][O[23884]] ? window['$hGK'][O[23884]][O[10999]] : 0x0, 'systemInfo': window[O[27322]], 'error': O[27323], 'stack': k9ul ? k9ul[O[4372]] : '' }, k9ul = JSON[O[4359]](vfm8), (console[O[125]](O[27324] + k9ul), window[O[27313]] && window[O[27313]] == vfm8[O[125]] || (window[O[27313]] = vfm8[O[125]], window['$h1G'](vfm8)));
  }
});import 'hhhmd5min.js';import 'hhhzlibs.js';window[O[27325]] = require(O[27326]);import 'hhhindex.js';import 'hhhlibsmin.js';import 'hhhwxmini.js';import 'hhhinitmin.js';console[O[78]](O[27327]), console[O[78]](O[27328]), $h1GAK({ 'title': O[27329] });var h_i1tn = { '$h8A1GK': !0x0 };new window[O[27330]](h_i1tn), window[O[27330]][O[148]]['$h8AK1G'](), window['$h81KAG'] && clearInterval(window['$h81KAG']), window['$h81KAG'] = null, window['$h8AKG1'] = function ($zs0o, ubl9ch) {
  if (!$zs0o || !ubl9ch) return 0x0;$zs0o = $zs0o[O[15]]('.'), ubl9ch = ubl9ch[O[15]]('.');var ndi1 = Math[O[840]]($zs0o[O[13]], ubl9ch[O[13]]);for (; $zs0o[O[13]] < ndi1;) $zs0o[O[29]]('0');for (; ubl9ch[O[13]] < ndi1;) ubl9ch[O[29]]('0');for (var zj0o4t = 0x0; zj0o4t < ndi1; zj0o4t++) {
    var peukhl = parseInt($zs0o[zj0o4t]),
        otj40n = parseInt(ubl9ch[zj0o4t]);if (otj40n < peukhl) return 0x1;if (peukhl < otj40n) return -0x1;
  }return 0x0;
}, window[O[27331]] = wx[O[27332]]()[O[27331]], console[O[471]](O[27333] + window[O[27331]]);var h_gkr5ap = wx[O[27334]]();h_gkr5ap[O[27335]](function (e5gpak) {
  console[O[471]](O[27336] + e5gpak[O[27337]]);
}), h_gkr5ap[O[27338]](function () {
  wx[O[27339]]({ 'title': O[27340], 'content': O[27341], 'showCancel': !0x1, 'success': function (rpy5g) {
      h_gkr5ap[O[27342]]();
    } });
}), h_gkr5ap[O[27343]](function () {
  console[O[471]](O[27344]);
}), window['$h8G1AK'] = function () {
  console[O[471]](O[27345]);var lc9h = wx[O[27346]]({ 'name': O[27347], 'success': function (n0to) {
      console[O[471]](O[27348]), console[O[471]](n0to), n0to && O[27349] == n0to[O[24060]] ? (window['$hKA'] = !0x0, window['$hKG1A'](), window['$hKGA1']()) : setTimeout(function () {
        window['$h8G1AK']();
      }, 0x1f4);
    }, 'fail': function (j0ti4n) {
      console[O[471]](O[27350]), console[O[471]](j0ti4n), setTimeout(function () {
        window['$h8G1AK']();
      }, 0x1f4);
    } });lc9h && lc9h[O[27351]](lkeh => {});
}, window['$h8GA1K'] = function () {
  console[O[471]](O[27352]);var y2g5r = wx[O[27346]]({ 'name': O[27353], 'success': function (o$jtz0) {
      console[O[471]](O[27354]), console[O[471]](o$jtz0), o$jtz0 && O[27349] == o$jtz0[O[24060]] ? (window['$hGAK'] = !0x0, window['$hKG1A'](), window['$hKGA1']()) : setTimeout(function () {
        window['$h8GA1K']();
      }, 0x1f4);
    }, 'fail': function (zjo0$s) {
      console[O[471]](O[27355]), console[O[471]](zjo0$s), setTimeout(function () {
        window['$h8GA1K']();
      }, 0x1f4);
    } });y2g5r && y2g5r[O[27351]](i7d_1n => {});
}, window[O[27356]] = function () {
  0x0 <= window['$h8AKG1'](window[O[27331]], O[27357]) ? (console[O[471]](O[27358] + window[O[27331]] + O[27359]), window['$hG1'](), window['$h8G1AK'](), window['$h8GA1K']()) : (window['$hGK1'](O[27360] + window[O[27331]]), wx[O[27339]]({ 'title': O[6217], 'content': O[27361] }));
}, window[O[27322]] = '', wx[O[27362]]({ 'success'(ni04t) {
    window[O[27322]] = O[27363] + ni04t[O[27364]] + O[27365] + ni04t[O[27366]] + O[27367] + ni04t[O[4561]] + O[27368] + ni04t[O[464]] + O[27369] + ni04t[O[23860]] + O[27370] + ni04t[O[27331]] + O[27371] + ni04t[O[8933]], console[O[471]](window[O[27322]]), console[O[471]](O[27372] + ni04t[O[27373]] + O[27374] + ni04t[O[27375]] + O[27376] + ni04t[O[27377]] + O[27378] + ni04t[O[27379]] + O[27380] + ni04t[O[27381]] + O[27382] + ni04t[O[27383]] + O[27384] + (ni04t[O[27385]] ? ni04t[O[27385]][O[320]] + ',' + ni04t[O[27385]][O[1200]] + ',' + ni04t[O[27385]][O[1203]] + ',' + ni04t[O[27385]][O[1202]] : ''));var bd73_ = ni04t[O[464]] ? ni04t[O[464]][O[11626]]() : '',
        o0jzt = ni04t[O[27366]] ? ni04t[O[27366]][O[11626]]()[O[4548]]('\x20', '') : '';window['$hGK'][O[501]] = -0x1 != bd73_[O[115]](O[27386]), window['$hGK'][O[10825]] = -0x1 != bd73_[O[115]](O[27185]), window['$hGK'][O[27387]] = -0x1 != bd73_[O[115]](O[27386]) || -0x1 != bd73_[O[115]](O[27185]), window['$hGK'][O[23520]] = -0x1 != bd73_[O[115]](O[27388]) || -0x1 != bd73_[O[115]](O[27389]), window['$hGK'][O[27390]] = ni04t[O[23860]] ? ni04t[O[23860]][O[11626]]() : '', window['$hGK']['$h81GAK'] = !0x1, window['$hGK']['$h81GKA'] = 0x2, -0x1 != bd73_[O[115]](O[27185]) ? 0x18 <= ni04t[O[8933]] ? window['$hGK']['$h81GKA'] = 0x3 : window['$hGK']['$h81GKA'] = 0x2 : -0x1 == bd73_[O[115]](O[27386]) || !(ni04t[O[8933]] && 0x14 <= ni04t[O[8933]] || -0x1 == o0jzt[O[115]](O[27391]) && -0x1 == o0jzt[O[115]](O[27392]) && -0x1 == o0jzt[O[115]](O[27393]) && -0x1 == o0jzt[O[115]](O[27394]) && -0x1 == o0jzt[O[115]](O[27395])) ? window['$hGK']['$h81GKA'] = 0x2 : window['$hGK']['$h81GKA'] = 0x3, console[O[471]](O[27396] + window['$hGK']['$h81GAK'] + O[27397] + window['$hGK']['$h81GKA']);
  } }), wx[O[27398]]({ 'success': function (uhcl9e) {
    console[O[471]](O[27399] + uhcl9e[O[4466]] + O[27400] + uhcl9e[O[27401]]);
  } }), wx[O[27402]]({ 'success': function (hbcl) {
    console[O[471]](O[27403] + hbcl[O[27404]]);
  } }), wx[O[27405]]({ 'keepScreenOn': !0x0 }), wx[O[27406]](function (ms8w6$) {
  console[O[471]](O[27403] + ms8w6$[O[27404]] + O[27407] + ms8w6$[O[27408]]);
}), wx[O[27409]](function (nt40ij) {
  window['$hK1A'] = nt40ij, window['$hKA1'] && window['$hK1A'] && (console[O[78]](O[27410] + window['$hK1A'][O[763]]), window['$hKA1'](window['$hK1A']), window['$hK1A'] = null);
}), window['$h8GK1A'] = 0x0, window[O[27411]] = null, wx[O[27412]](function () {
  window['$h8GK1A']++, wx[O[11177]](), 0x2 <= window['$h8GK1A'] && (window['$h8GK1A'] = 0x0, console[O[125]](O[27413]), wx[O[27414]]('0', 0x1), window['$hGK'] && window['$hGK'][O[501]] && window['$hGK1'](O[27415]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});