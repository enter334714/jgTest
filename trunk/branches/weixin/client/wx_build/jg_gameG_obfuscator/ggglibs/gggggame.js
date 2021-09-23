var m = wx.$g;
console[m[629]](m[26230]), window[m[26231]], wx[m[26232]](function (y850d2) {
  if (y850d2) {
    if (y850d2[m[375]]) {
      var $qfix = window[m[1042]][m[26233]][m[499]](new RegExp(/\./, 'g'), '_'),
          at4l9 = y850d2[m[375]],
          l94ta = at4l9[m[382]](/(gggggggg\/gggggame.js:)[0-9]{1,60}(:)/g);if (l94ta) for (var _gurk7 = 0x0; _gurk7 < l94ta[m[359]]; _gurk7++) {
        var s508;l94ta[_gurk7] && 0x0 < l94ta[_gurk7][m[359]] && (s508 = parseInt(l94ta[_gurk7][m[499]](m[26234], '')[m[499]](':', '')), at4l9 = at4l9[m[499]](l94ta[_gurk7], l94ta[_gurk7][m[499]](':' + s508 + ':', ':' + (s508 - 0x2) + ':')));
      }at4l9 = (at4l9 = at4l9[m[499]](new RegExp(m[26235], 'g'), m[26236] + $qfix + m[23437]))[m[499]](new RegExp(m[26237], 'g'), m[26236] + $qfix + m[23437]), y850d2[m[375]] = at4l9;
    }$qfix = { 'id': window['G$81'][m[26238]], 'role': window['G$81'][m[4624]], 'level': window['G$81'][m[26239]], 'user': window['G$81'][m[23346]], 'version': window['G$81'][m[647]], 'gamever': window[m[1042]][m[26233]], 'cdn': window['G$81'][m[4508]], 'serverid': window['G$81'][m[23341]] ? window['G$81'][m[23341]][m[10760]] : 0x0, 'systemInfo': window[m[26240]], 'error': m[26241], 'stack': y850d2 ? y850d2[m[375]] : '' }, y850d2 = JSON[m[4496]]($qfix), (console[m[532]](m[26242] + y850d2), window[m[26231]] && window[m[26231]] == $qfix[m[532]] || (window[m[26231]] = $qfix[m[532]], window['G$_8']($qfix)));
  }
});import 'gggmd5min.js';import 'gggzlibs.js';window[m[26243]] = require(m[26244]);import 'gggindex.js';import 'ggglibsmin.js';import 'gggwxmini.js';import 'ggginitmin.js';console[m[629]](m[26245]), console[m[629]](m[26246]), G$_8E1({ 'title': m[26247] });var gpb91 = { 'G$YE_81': !0x0 };new window[m[26248]](gpb91), window[m[26248]][m[680]]['G$YE1_8'](), window['G$Y_1E8'] && clearInterval(window['G$Y_1E8']), window['G$Y_1E8'] = null, window['G$YE18_'] = function (j$qzw, kjf$x) {
  if (!j$qzw || !kjf$x) return 0x0;j$qzw = j$qzw[m[478]]('.'), kjf$x = kjf$x[m[478]]('.');var fi$qj = Math[m[524]](j$qzw[m[359]], kjf$x[m[359]]);for (; j$qzw[m[359]] < fi$qj;) j$qzw[m[381]]('0');for (; kjf$x[m[359]] < fi$qj;) kjf$x[m[381]]('0');for (var ru7kf = 0x0; ru7kf < fi$qj; ru7kf++) {
    var xkfij$ = parseInt(j$qzw[ru7kf]),
        igfkx = parseInt(kjf$x[ru7kf]);if (igfkx < xkfij$) return 0x1;if (xkfij$ < igfkx) return -0x1;
  }return 0x0;
}, window[m[26249]] = wx[m[26250]]()[m[26249]], console[m[489]](m[26251] + window[m[26249]]);var gy2ed0 = wx[m[26252]]();gy2ed0[m[26253]](function (dy250) {
  console[m[489]](m[26254] + dy250[m[26255]]);
}), gy2ed0[m[26256]](function () {
  wx[m[26257]]({ 'title': m[26258], 'content': m[26259], 'showCancel': !0x1, 'success': function (l4oacm) {
      gy2ed0[m[26260]]();
    } });
}), gy2ed0[m[26261]](function () {
  console[m[489]](m[26262]);
}), window['G$Y8_E1'] = function () {
  console[m[489]](m[26263]);var r_u7gk = wx[m[26264]]({ 'name': m[26265], 'success': function (f$qxj) {
      console[m[489]](m[26266]), console[m[489]](f$qxj), f$qxj && m[26267] == f$qxj[m[23504]] ? (window['G$1E'] = !0x0, window['G$18_E'](), window['G$18E_']()) : setTimeout(function () {
        window['G$Y8_E1']();
      }, 0x1f4);
    }, 'fail': function (w5zsj) {
      console[m[489]](m[26268]), console[m[489]](w5zsj), setTimeout(function () {
        window['G$Y8_E1']();
      }, 0x1f4);
    } });r_u7gk && r_u7gk[m[26269]](omcv => {});
}, window['G$Y8E_1'] = function () {
  console[m[489]](m[26270]);var p469t = wx[m[26264]]({ 'name': m[26271], 'success': function (ws528) {
      console[m[489]](m[26272]), console[m[489]](ws528), ws528 && m[26267] == ws528[m[23504]] ? (window['G$8E1'] = !0x0, window['G$18_E'](), window['G$18E_']()) : setTimeout(function () {
        window['G$Y8E_1']();
      }, 0x1f4);
    }, 'fail': function (pb9h6) {
      console[m[489]](m[26273]), console[m[489]](pb9h6), setTimeout(function () {
        window['G$Y8E_1']();
      }, 0x1f4);
    } });p469t && p469t[m[26269]](yd0e83 => {});
}, window[m[26274]] = function () {
  0x0 <= window['G$YE18_'](window[m[26249]], m[26275]) ? (console[m[489]](m[26276] + window[m[26249]] + m[26277]), window['G$8_'](), window['G$Y8_E1'](), window['G$Y8E_1']()) : (window['G$81_'](m[26278] + window[m[26249]]), wx[m[26257]]({ 'title': m[6295], 'content': m[26279] }));
}, window[m[26240]] = '', wx[m[26280]]({ 'success'(j$wsz) {
    window[m[26240]] = m[26281] + j$wsz[m[26282]] + m[26283] + j$wsz[m[26284]] + m[26285] + j$wsz[m[4691]] + m[26286] + j$wsz[m[966]] + m[26287] + j$wsz[m[23317]] + m[26288] + j$wsz[m[26249]] + m[26289] + j$wsz[m[8869]], console[m[489]](window[m[26240]]), console[m[489]](m[26290] + j$wsz[m[26291]] + m[26292] + j$wsz[m[26293]] + m[26294] + j$wsz[m[26295]] + m[26296] + j$wsz[m[26297]] + m[26298] + j$wsz[m[26299]] + m[26300] + j$wsz[m[26301]] + m[26302] + (j$wsz[m[26303]] ? j$wsz[m[26303]][m[832]] + ',' + j$wsz[m[26303]][m[1615]] + ',' + j$wsz[m[26303]][m[1618]] + ',' + j$wsz[m[26303]][m[1617]] : ''));var lmat4o = j$wsz[m[966]] ? j$wsz[m[966]][m[404]]() : '',
        p9ta6 = j$wsz[m[26284]] ? j$wsz[m[26284]][m[404]]()[m[499]]('\x20', '') : '';window['G$81'][m[999]] = -0x1 != lmat4o[m[441]](m[9]), window['G$81'][m[10593]] = -0x1 != lmat4o[m[441]](m[8]), window['G$81'][m[26304]] = -0x1 != lmat4o[m[441]](m[9]) || -0x1 != lmat4o[m[441]](m[8]), window['G$81'][m[22989]] = -0x1 != lmat4o[m[441]](m[26305]) || -0x1 != lmat4o[m[441]](m[26306]), window['G$81'][m[26307]] = j$wsz[m[23317]] ? j$wsz[m[23317]][m[404]]() : '', window['G$81']['G$Y_8E1'] = !0x1, -(window['G$81']['G$Y_81E'] = 0x1) != lmat4o[m[441]](m[8]) ? 0x18 <= j$wsz[m[8869]] ? window['G$81']['G$Y_81E'] = 0x2 : window['G$81']['G$Y_81E'] = 0x1 : -0x1 == lmat4o[m[441]](m[9]) || !(j$wsz[m[8869]] && 0x14 <= j$wsz[m[8869]] || -0x1 == p9ta6[m[441]](m[26308]) && -0x1 == p9ta6[m[441]](m[26309]) && -0x1 == p9ta6[m[441]](m[26310]) && -0x1 == p9ta6[m[441]](m[26311]) && -0x1 == p9ta6[m[441]](m[26312])) ? window['G$81']['G$Y_81E'] = 0x1 : window['G$81']['G$Y_81E'] = 0x2, console[m[489]](m[26313] + window['G$81']['G$Y_8E1'] + m[26314] + window['G$81']['G$Y_81E']);
  } }), wx[m[26315]]({ 'success': function (xfigk$) {
    console[m[489]](m[26316] + xfigk$[m[4601]] + m[26317] + xfigk$[m[26318]]);
  } }), wx[m[26319]]({ 'success': function (xikf) {
    console[m[489]](m[26320] + xikf[m[26321]]);
  } }), wx[m[26322]]({ 'keepScreenOn': !0x0 }), wx[m[26323]](function (oma4c) {
  console[m[489]](m[26320] + oma4c[m[26321]] + m[26324] + oma4c[m[26325]]);
}), wx[m[26326]](function (wszj) {
  window['G$1_E'] = wszj, window['G$1E_'] && window['G$1_E'] && (console[m[629]](m[26327] + window['G$1_E'][m[1238]]), window['G$1E_'](window['G$1_E']), window['G$1_E'] = null);
}), window['G$Y81_E'] = 0x0, window[m[26328]] = null, wx[m[26329]](function () {
  window['G$Y81_E']++, wx['triggerGC'](), 0x2 <= window['G$Y81_E'] && (window['G$Y81_E'] = 0x0, console[m[532]](m[26330]), wx[m[26331]]('0', 0x1), window['G$81'] && window['G$81'][m[999]] && window['G$81_'](m[26332]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});