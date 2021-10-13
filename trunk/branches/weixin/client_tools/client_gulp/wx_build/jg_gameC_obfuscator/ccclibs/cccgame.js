var p = wx.$h;
console[p[612]](p[613]), window[p[614]], wx[p[615]](function (vekox) {
  if (vekox) {
    if (vekox[p[163]]) {
      var clw = window[p[616]][p[617]][p[292]](new RegExp(/\./, 'g'), '_'),
          rhg68 = vekox[p[163]],
          y1m4p = rhg68[p[170]](/(cccccccc\/cccgame.js:)[0-9]{1,60}(:)/g);if (y1m4p) for (var zk5aib = 0x0; zk5aib < y1m4p[p[147]]; zk5aib++) {
        var wcq0l;y1m4p[zk5aib] && 0x0 < y1m4p[zk5aib][p[147]] && (wcq0l = parseInt(y1m4p[zk5aib][p[292]](p[618], '')[p[292]](':', '')), rhg68 = rhg68[p[292]](y1m4p[zk5aib], y1m4p[zk5aib][p[292]](':' + wcq0l + ':', ':' + (wcq0l - 0x2) + ':')));
      }rhg68 = (rhg68 = rhg68[p[292]](new RegExp(p[619], 'g'), p[620] + clw + p[621]))[p[292]](new RegExp(p[622], 'g'), p[620] + clw + p[621]), vekox[p[163]] = rhg68;
    }clw = { 'id': window['$a$D'][p[623]], 'role': window['$a$D'][p[624]], 'level': window['$a$D'][p[625]], 'user': window['$a$D'][p[626]], 'version': window['$a$D'][p[627]], 'gamever': window[p[616]][p[617]], 'cdn': window['$a$D'][p[628]], 'serverid': window['$a$D'][p[629]] ? window['$a$D'][p[629]][p[630]] : 0x0, 'systemInfo': window[p[631]], 'error': p[632], 'stack': vekox ? vekox[p[163]] : '' }, vekox = JSON[p[633]](clw), (console[p[325]](p[634] + vekox), window[p[614]] && window[p[614]] == clw[p[325]] || (window[p[614]] = clw[p[325]], window['$aI$'](clw)));
  }
});import 'cccmd5min.js';import 'ccczlibs.js';window[p[635]] = require(p[636]);import 'cccindex.js';import 'ccclibsmin.js';import 'cccwxmini.js';import 'cccinitmin.js';console[p[612]](p[637]), console[p[612]](p[638]), $aI$GD({ 'title': p[639] });var a_avoi5 = { '$aEGI$D': !0x0 };new window[p[640]](a_avoi5), window[p[640]][p[641]]['$aEGDI$'](), window['$aEIDG$'] && clearInterval(window['$aEIDG$']), window['$aEIDG$'] = null, window['$aEGD$I'] = function (mpy01, m71j$) {
  if (!mpy01 || !m71j$) return 0x0;mpy01 = mpy01[p[270]]('.'), m71j$ = m71j$[p[270]]('.');var t1j7_$ = Math[p[317]](mpy01[p[147]], m71j$[p[147]]);for (; mpy01[p[147]] < t1j7_$;) mpy01[p[169]]('0');for (; m71j$[p[147]] < t1j7_$;) m71j$[p[169]]('0');for (var qbwfz = 0x0; qbwfz < t1j7_$; qbwfz++) {
    var c03wql = parseInt(mpy01[qbwfz]),
        qlp3 = parseInt(m71j$[qbwfz]);if (qlp3 < c03wql) return 0x1;if (c03wql < qlp3) return -0x1;
  }return 0x0;
}, window[p[642]] = wx[p[643]]()[p[642]], console[p[282]](p[644] + window[p[642]]);var a_wqp3l = wx[p[645]]();a_wqp3l[p[646]](function (p14jm) {
  console[p[282]](p[647] + p14jm[p[648]]);
}), a_wqp3l[p[649]](function () {
  wx[p[650]]({ 'title': p[651], 'content': p[652], 'showCancel': !0x1, 'success': function (m7$j_1) {
      a_wqp3l[p[653]]();
    } });
}), a_wqp3l[p[654]](function () {
  console[p[282]](p[655]);
}), window['$aE$IGD'] = function () {
  console[p[282]](p[656]);var bzwfc = wx[p[657]]({ 'name': p[658], 'success': function (iok5v9) {
      console[p[282]](p[659]), console[p[282]](iok5v9), iok5v9 && p[660] == iok5v9[p[661]] ? (window['$aDG'] = !0x0, window['$aD$IG'](), window['$aD$GI']()) : setTimeout(function () {
        window['$aE$IGD']();
      }, 0x1f4);
    }, 'fail': function ($ntds) {
      console[p[282]](p[662]), console[p[282]]($ntds), setTimeout(function () {
        window['$aE$IGD']();
      }, 0x1f4);
    } });bzwfc && bzwfc[p[663]](i5fzba => {});
}, window['$aE$GID'] = function () {
  console[p[282]](p[664]);var j_ym41 = wx[p[657]]({ 'name': p[665], 'success': function (cf3wlq) {
      console[p[282]](p[666]), console[p[282]](cf3wlq), cf3wlq && p[660] == cf3wlq[p[661]] ? (window['$a$GD'] = !0x0, window['$aD$IG'](), window['$aD$GI']()) : setTimeout(function () {
        window['$aE$GID']();
      }, 0x1f4);
    }, 'fail': function (_m41yj) {
      console[p[282]](p[667]), console[p[282]](_m41yj), setTimeout(function () {
        window['$aE$GID']();
      }, 0x1f4);
    } });j_ym41 && j_ym41[p[663]](fcwl3 => {});
}, window[p[668]] = function () {
  0x0 <= window['$aEGD$I'](window[p[642]], p[669]) ? (console[p[282]](p[670] + window[p[642]] + p[671]), window['$a$I'](), window['$aE$IGD'](), window['$aE$GID']()) : (window['$a$DI'](p[672] + window[p[642]]), wx[p[650]]({ 'title': p[673], 'content': p[674] }));
}, window[p[631]] = '', wx[p[675]]({ 'success'(dtn7$) {
    window[p[631]] = p[676] + dtn7$[p[677]] + p[678] + dtn7$[p[679]] + p[680] + dtn7$[p[681]] + p[682] + dtn7$[p[683]] + p[684] + dtn7$[p[685]] + p[686] + dtn7$[p[642]] + p[687] + dtn7$[p[688]], console[p[282]](window[p[631]]), console[p[282]](p[689] + dtn7$[p[690]] + p[691] + dtn7$[p[692]] + p[693] + dtn7$[p[694]] + p[695] + dtn7$[p[696]] + p[697] + dtn7$[p[698]] + p[699] + dtn7$[p[700]] + p[701] + (dtn7$[p[702]] ? dtn7$[p[702]][p[703]] + ',' + dtn7$[p[702]][p[704]] + ',' + dtn7$[p[702]][p[705]] + ',' + dtn7$[p[702]][p[706]] : ''));var fbaz5 = dtn7$[p[683]] ? dtn7$[p[683]][p[193]]() : '',
        fclqzw = dtn7$[p[679]] ? dtn7$[p[679]][p[193]]()[p[292]]('\x20', '') : '';window['$a$D'][p[707]] = -0x1 != fbaz5[p[231]](p[708]), window['$a$D'][p[709]] = -0x1 != fbaz5[p[231]](p[45]), window['$a$D'][p[710]] = -0x1 != fbaz5[p[231]](p[708]) || -0x1 != fbaz5[p[231]](p[45]), window['$a$D'][p[711]] = -0x1 != fbaz5[p[231]](p[46]) || -0x1 != fbaz5[p[231]](p[712]), window['$a$D'][p[713]] = dtn7$[p[685]] ? dtn7$[p[685]][p[193]]() : '', window['$a$D']['$aEI$GD'] = !0x1, window['$a$D']['$aEI$DG'] = 0x2, -0x1 != fbaz5[p[231]](p[45]) ? 0x18 <= dtn7$[p[688]] ? window['$a$D']['$aEI$DG'] = 0x3 : window['$a$D']['$aEI$DG'] = 0x2 : -0x1 == fbaz5[p[231]](p[708]) || !(dtn7$[p[688]] && 0x14 <= dtn7$[p[688]] || -0x1 == fclqzw[p[231]](p[714]) && -0x1 == fclqzw[p[231]](p[715]) && -0x1 == fclqzw[p[231]](p[716]) && -0x1 == fclqzw[p[231]](p[717]) && -0x1 == fclqzw[p[231]](p[718])) ? window['$a$D']['$aEI$DG'] = 0x2 : window['$a$D']['$aEI$DG'] = 0x3, console[p[282]](p[719] + window['$a$D']['$aEI$GD'] + p[720] + window['$a$D']['$aEI$DG']);
  } }), wx[p[721]]({ 'success': function (mjpy14) {
    console[p[282]](p[722] + mjpy14[p[723]] + p[724] + mjpy14[p[725]]);
  } }), wx[p[726]]({ 'success': function (qp03lw) {
    console[p[282]](p[727] + qp03lw[p[728]]);
  } }), wx[p[729]]({ 'keepScreenOn': !0x0 }), wx[p[730]](function (w0qpl3) {
  console[p[282]](p[727] + w0qpl3[p[728]] + p[731] + w0qpl3[p[732]]);
}), wx[p[733]](function (fcq) {
  window['$aDIG'] = fcq, window['$aDGI'] && window['$aDIG'] && (console[p[612]](p[734] + window['$aDIG'][p[735]]), window['$aDGI'](window['$aDIG']), window['$aDIG'] = null);
}), window['$aE$DIG'] = 0x0, window[p[736]] = null, wx[p[737]](function () {
  window['$aE$DIG']++, wx[p[738]](), 0x2 <= window['$aE$DIG'] && (window['$aE$DIG'] = 0x0, console[p[325]](p[739]), wx[p[740]]('0', 0x1), window['$a$D'] && window['$a$D'][p[707]] && window['$a$DI'](p[741]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});