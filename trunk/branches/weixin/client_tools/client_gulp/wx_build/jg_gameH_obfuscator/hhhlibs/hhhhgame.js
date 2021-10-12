var O = wx.$C;
console[O[701]](O[27533]), window[O[27534]], wx[O[27535]](function (kfbx) {
  if (kfbx) {
    if (kfbx[O[41]]) {
      var ytvgp = window[O[1127]][O[27536]][O[169]](new RegExp(/\./, 'g'), '_'),
          dw5u_v = kfbx[O[41]],
          kq1c9s = dw5u_v[O[48]](/(hhhhhhhh\/hhhhgame.js:)[0-9]{1,60}(:)/g);if (kq1c9s) for (var c9znh = 0x0; c9znh < kq1c9s[O[25]]; c9znh++) {
        var gmdvyu;kq1c9s[c9znh] && 0x0 < kq1c9s[c9znh][O[25]] && (gmdvyu = parseInt(kq1c9s[c9znh][O[169]](O[27537], '')[O[169]](':', '')), dw5u_v = dw5u_v[O[169]](kq1c9s[c9znh], kq1c9s[c9znh][O[169]](':' + gmdvyu + ':', ':' + (gmdvyu - 0x2) + ':')));
      }dw5u_v = (dw5u_v = dw5u_v[O[169]](new RegExp(O[27538], 'g'), O[27539] + ytvgp + O[24684]))[O[169]](new RegExp(O[27540], 'g'), O[27539] + ytvgp + O[24684]), kfbx[O[41]] = dw5u_v;
    }ytvgp = { 'id': window['$hP5'][O[27541]], 'role': window['$hP5'][O[5062]], 'level': window['$hP5'][O[27542]], 'user': window['$hP5'][O[24589]], 'version': window['$hP5'][O[719]], 'gamever': window[O[1127]][O[27536]], 'cdn': window['$hP5'][O[4946]], 'serverid': window['$hP5'][O[24584]] ? window['$hP5'][O[24584]][O[11591]] : 0x0, 'systemInfo': window[O[27543]], 'error': O[27544], 'stack': kfbx ? kfbx[O[41]] : '' }, kfbx = JSON[O[4934]](ytvgp), (console[O[202]](O[27545] + kfbx), window[O[27534]] && window[O[27534]] == ytvgp[O[202]] || (window[O[27534]] = ytvgp[O[202]], window['$h6P'](ytvgp)));
  }
});import 'hhhmd5min.js';import 'hhhzlibs.js';window[O[27546]] = require(O[27547]);import 'hhhindex.js';import 'hhhlibsmin.js';import 'hhhwxmini.js';import 'hhhinitmin.js';console[O[701]](O[27548]), console[O[701]](O[27549]), $h6PO5({ 'title': O[27550] });var h_uwd5_4 = { '$h0O6P5': !0x0 };new window[O[27551]](h_uwd5_4), window[O[27551]][O[755]]['$h0O56P'](), window['$h065OP'] && clearInterval(window['$h065OP']), window['$h065OP'] = null, window['$h0O5P6'] = function (ojr_4, j3r47o) {
  if (!ojr_4 || !j3r47o) return 0x0;ojr_4 = ojr_4[O[148]]('.'), j3r47o = j3r47o[O[148]]('.');var k1fsbq = Math[O[194]](ojr_4[O[25]], j3r47o[O[25]]);for (; ojr_4[O[25]] < k1fsbq;) ojr_4[O[47]]('0');for (; j3r47o[O[25]] < k1fsbq;) j3r47o[O[47]]('0');for (var yvdug5 = 0x0; yvdug5 < k1fsbq; yvdug5++) {
    var sb1q9 = parseInt(ojr_4[yvdug5]),
        p6nh = parseInt(j3r47o[yvdug5]);if (p6nh < sb1q9) return 0x1;if (sb1q9 < p6nh) return -0x1;
  }return 0x0;
}, window[O[27552]] = wx[O[27553]]()[O[27552]], console[O[159]](O[27554] + window[O[27552]]);var h_wu_v5d = wx[O[27555]]();h_wu_v5d[O[27556]](function (d_7w4) {
  console[O[159]](O[27557] + d_7w4[O[27558]]);
}), h_wu_v5d[O[27559]](function () {
  wx[O[27560]]({ 'title': O[27561], 'content': O[27562], 'showCancel': !0x1, 'success': function (zch) {
      h_wu_v5d[O[27563]]();
    } });
}), h_wu_v5d[O[27564]](function () {
  console[O[159]](O[27565]);
}), window['$h0P6O5'] = function () {
  console[O[159]](O[27566]);var ib0x2 = wx[O[27567]]({ 'name': O[27568], 'success': function (hpt6z) {
      console[O[159]](O[27569]), console[O[159]](hpt6z), hpt6z && O[27570] == hpt6z[O[24751]] ? (window['$h5O'] = !0x0, window['$h5P6O'](), window['$h5PO6']()) : setTimeout(function () {
        window['$h0P6O5']();
      }, 0x1f4);
    }, 'fail': function (ynp) {
      console[O[159]](O[27571]), console[O[159]](ynp), setTimeout(function () {
        window['$h0P6O5']();
      }, 0x1f4);
    } });ib0x2 && ib0x2[O[27572]](hp6tz => {});
}, window['$h0PO65'] = function () {
  console[O[159]](O[27573]);var u5d_ = wx[O[27567]]({ 'name': O[27574], 'success': function (duvg) {
      console[O[159]](O[27575]), console[O[159]](duvg), duvg && O[27570] == duvg[O[24751]] ? (window['$hPO5'] = !0x0, window['$h5P6O'](), window['$h5PO6']()) : setTimeout(function () {
        window['$h0PO65']();
      }, 0x1f4);
    }, 'fail': function (tmvugy) {
      console[O[159]](O[27576]), console[O[159]](tmvugy), setTimeout(function () {
        window['$h0PO65']();
      }, 0x1f4);
    } });u5d_ && u5d_[O[27572]](mgptv => {});
}, window[O[27577]] = function () {
  0x0 <= window['$h0O5P6'](window[O[27552]], O[27578]) ? (console[O[159]](O[27579] + window[O[27552]] + O[27580]), window['$hP6'](), window['$h0P6O5'](), window['$h0PO65']()) : (window['$hP56'](O[27581] + window[O[27552]]), wx[O[27560]]({ 'title': O[6782], 'content': O[27582] }));
}, window[O[27543]] = '', wx[O[27583]]({ 'success'(uywv5) {
    window[O[27543]] = O[27584] + uywv5[O[27585]] + O[27586] + uywv5[O[27587]] + O[27588] + uywv5[O[5131]] + O[27589] + uywv5[O[1049]] + O[27590] + uywv5[O[24562]] + O[27591] + uywv5[O[27552]] + O[27592] + uywv5[O[9506]], console[O[159]](window[O[27543]]), console[O[159]](O[27593] + uywv5[O[27594]] + O[27595] + uywv5[O[27596]] + O[27597] + uywv5[O[27598]] + O[27599] + uywv5[O[27600]] + O[27601] + uywv5[O[27602]] + O[27603] + uywv5[O[27604]] + O[27605] + (uywv5[O[27606]] ? uywv5[O[27606]][O[909]] + ',' + uywv5[O[27606]][O[1773]] + ',' + uywv5[O[27606]][O[1775]] + ',' + uywv5[O[27606]][O[1774]] : ''));var uvwy = uywv5[O[1049]] ? uywv5[O[1049]][O[70]]() : '',
        r7l3jo = uywv5[O[27587]] ? uywv5[O[27587]][O[70]]()[O[169]]('\x20', '') : '';window['$hP5'][O[1082]] = -0x1 != uvwy[O[109]](O[27607]), window['$hP5'][O[11420]] = -0x1 != uvwy[O[109]](O[498]), window['$hP5'][O[27608]] = -0x1 != uvwy[O[109]](O[27607]) || -0x1 != uvwy[O[109]](O[498]), window['$hP5'][O[24227]] = -0x1 != uvwy[O[109]](O[27609]) || -0x1 != uvwy[O[109]](O[27610]), window['$hP5'][O[27611]] = uywv5[O[24562]] ? uywv5[O[24562]][O[70]]() : '', window['$hP5']['$h06PO5'] = !0x1, window['$hP5']['$h06P5O'] = 0x2, -0x1 != uvwy[O[109]](O[498]) ? 0x18 <= uywv5[O[9506]] ? window['$hP5']['$h06P5O'] = 0x3 : window['$hP5']['$h06P5O'] = 0x2 : -0x1 == uvwy[O[109]](O[27607]) || !(uywv5[O[9506]] && 0x14 <= uywv5[O[9506]] || -0x1 == r7l3jo[O[109]](O[27612]) && -0x1 == r7l3jo[O[109]](O[27613]) && -0x1 == r7l3jo[O[109]](O[27614]) && -0x1 == r7l3jo[O[109]](O[27615]) && -0x1 == r7l3jo[O[109]](O[27616])) ? window['$hP5']['$h06P5O'] = 0x2 : window['$hP5']['$h06P5O'] = 0x3, console[O[159]](O[27617] + window['$hP5']['$h06PO5'] + O[27618] + window['$hP5']['$h06P5O']);
  } }), wx[O[27619]]({ 'success': function (fbq0) {
    console[O[159]](O[27620] + fbq0[O[5039]] + O[27621] + fbq0[O[27622]]);
  } }), wx[O[27623]]({ 'success': function (b9ks1) {
    console[O[159]](O[27624] + b9ks1[O[27625]]);
  } }), wx[O[27626]]({ 'keepScreenOn': !0x0 }), wx[O[27627]](function (gm6npt) {
  console[O[159]](O[27624] + gm6npt[O[27625]] + O[27628] + gm6npt[O[27629]]);
}), wx[O[27630]](function (w45d_) {
  window['$h56O'] = w45d_, window['$h5O6'] && window['$h56O'] && (console[O[701]](O[27631] + window['$h56O'][O[1341]]), window['$h5O6'](window['$h56O']), window['$h56O'] = null);
}), window['$h0P56O'] = 0x0, window[O[27632]] = null, wx[O[27633]](function () {
  window['$h0P56O']++, wx[O[11805]](), 0x2 <= window['$h0P56O'] && (window['$h0P56O'] = 0x0, console[O[202]](O[27634]), wx[O[27635]]('0', 0x1), window['$hP5'] && window['$hP5'][O[1082]] && window['$hP56'](O[27636]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});