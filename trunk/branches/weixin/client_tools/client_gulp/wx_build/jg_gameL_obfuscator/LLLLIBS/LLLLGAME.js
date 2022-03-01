var W = wx.$l;
console[W[440]](W[441]), window[W[442]], wx[W[443]](function (n0r3x) {
  if (n0r3x) {
    if (n0r3x[W[444]]) {
      var u1gp6e = window[W[445]][W[446]][W[288]](new RegExp(/\./, 'g'), '_'),
          a2khj = n0r3x[W[444]],
          u1e7g = a2khj[W[447]](/(LLLLLLLL\/LLLLGAME.js:)[0-9]{1,60}(:)/g);if (u1e7g) for (var d8_s$ = 0x0; d8_s$ < u1e7g[W[178]]; d8_s$++) {
        var s_x84n;u1e7g[d8_s$] && 0x0 < u1e7g[d8_s$][W[178]] && (s_x84n = parseInt(u1e7g[d8_s$][W[288]](W[448], '')[W[288]](':', '')), a2khj = a2khj[W[288]](u1e7g[d8_s$], u1e7g[d8_s$][W[288]](':' + s_x84n + ':', ':' + (s_x84n - 0x2) + ':')));
      }a2khj = (a2khj = a2khj[W[288]](new RegExp(W[449], 'g'), W[450] + u1gp6e + W[451]))[W[288]](new RegExp(W[452], 'g'), W[450] + u1gp6e + W[451]), n0r3x[W[444]] = a2khj;
    }u1gp6e = { 'id': window['$LHD'][W[453]], 'role': window['$LHD'][W[454]], 'level': window['$LHD'][W[455]], 'user': window['$LHD'][W[456]], 'version': window['$LHD'][W[206]], 'cdn': window['$LHD'][W[298]], 'pkgName': window['$LHD'][W[262]], 'gamever': window[W[445]][W[446]], 'serverid': window['$LHD'][W[149]] ? window['$LHD'][W[149]][W[150]] : 0x0, 'systemInfo': window[W[457]], 'error': W[458], 'stack': n0r3x ? n0r3x[W[444]] : '' }, n0r3x = JSON[W[406]](u1gp6e), (console[W[408]](W[459] + n0r3x), window[W[442]] && window[W[442]] == u1gp6e[W[408]] || (window[W[442]] = u1gp6e[W[408]], window['$LTH'](u1gp6e)));
  }
});import 'lllMDFIVEMIN.js';import 'lllZLIBS.js';window[W[460]] = require(W[461]);import 'LLLLINDEX.js';import 'llllLIBSMIN.js';import 'LLLLWXMINI.js';import 'LLLINITMIN.js';console[W[440]](W[462]), console[W[440]](W[463]), $LTH0D({ 'title': W[464] });var L9jkazb = { '$LBTDH0': !0x0 };new window[W[439]](L9jkazb), window[W[439]][W[145]]['$LB0HDT'](), window['$LBTHD0'] && clearInterval(window['$LBTHD0']), window['$LBTHD0'] = null, window['$LB0DTH'] = function (zltfq, bhjk2a) {
  if (!zltfq || !bhjk2a) return 0x0;zltfq = zltfq[W[465]]('.'), bhjk2a = bhjk2a[W[465]]('.');var ljztqh = Math[W[466]](zltfq[W[178]], bhjk2a[W[178]]);for (; zltfq[W[178]] < ljztqh;) zltfq[W[320]]('0');for (; bhjk2a[W[178]] < ljztqh;) bhjk2a[W[320]]('0');for (var adj2kb = 0x0; adj2kb < ljztqh; adj2kb++) {
    var a$s2bd = parseInt(zltfq[adj2kb]),
        lzht5 = parseInt(bhjk2a[adj2kb]);if (lzht5 < a$s2bd) return 0x1;if (a$s2bd < lzht5) return -0x1;
  }return 0x0;
}, window[W[467]] = wx[W[468]]()[W[467]], console[W[312]](W[469] + window[W[467]]);var L9jqlhtz = wx[W[470]]();L9jqlhtz[W[471]](function (m3iwrc) {
  console[W[312]](W[472] + m3iwrc[W[473]]);
}), L9jqlhtz[W[474]](function () {
  wx[W[475]]({ 'title': W[476], 'content': W[477], 'showCancel': !0x1, 'success': function (y04_) {
      L9jqlhtz[W[478]]();
    } });
}), L9jqlhtz[W[479]](function () {
  console[W[312]](W[480]);
}), window['$LB0DHT'] = function () {
  console[W[312]](W[481]);var y0nxr3 = wx[W[482]]({ 'name': W[483], 'success': function (c3xr0y) {
      console[W[312]](W[484]), console[W[312]](c3xr0y), c3xr0y && W[485] == c3xr0y[W[486]] ? (window['$LD0'] = !0x0, window['$LD0HT'](), window['$LDHT0']()) : setTimeout(function () {
        window['$LB0DHT']();
      }, 0x1f4);
    }, 'fail': function (qh5z) {
      console[W[312]](W[487]), console[W[312]](qh5z), setTimeout(function () {
        window['$LB0DHT']();
      }, 0x1f4);
    } });y0nxr3 && y0nxr3[W[488]](ve17u => {});
}, window['$LBHTD0'] = function () {
  console[W[312]](W[489]);var hkzj = wx[W[482]]({ 'name': W[490], 'success': function (khjqza) {
      console[W[312]](W[491]), console[W[312]](khjqza), khjqza && W[485] == khjqza[W[486]] ? (window['$LH0D'] = !0x0, window['$LD0HT'](), window['$LDHT0']()) : setTimeout(function () {
        window['$LBHTD0']();
      }, 0x1f4);
    }, 'fail': function (lt5zfq) {
      console[W[312]](W[492]), console[W[312]](lt5zfq), setTimeout(function () {
        window['$LBHTD0']();
      }, 0x1f4);
    } });hkzj && hkzj[W[488]](da$2s => {});
}, window[W[493]] = function () {
  0x0 <= window['$LB0DTH'](window[W[467]], W[494]) ? (console[W[312]](W[495] + window[W[467]] + W[496]), window['$LHT'](), window['$LB0DHT'](), window['$LBHTD0']()) : (window['$LHDT'](W[497], window[W[467]]), wx[W[475]]({ 'title': W[498], 'content': W[499] }));
}, window[W[457]] = '', wx[W[500]]({ 'success'(jqklhz) {
    window[W[457]] = W[501] + jqklhz[W[502]] + W[503] + jqklhz[W[504]] + W[505] + jqklhz[W[506]] + W[507] + jqklhz[W[508]] + W[509] + jqklhz[W[510]] + W[511] + jqklhz[W[467]] + W[512] + jqklhz[W[513]], console[W[312]](window[W[457]]), console[W[312]](W[514] + jqklhz[W[515]] + W[516] + jqklhz[W[517]] + W[518] + jqklhz[W[519]] + W[520] + jqklhz[W[521]] + W[522] + jqklhz[W[523]] + W[524] + jqklhz[W[525]] + W[526] + (jqklhz[W[527]] ? jqklhz[W[527]][W[108]] + ',' + jqklhz[W[527]][W[220]] + ',' + jqklhz[W[527]][W[528]] + ',' + jqklhz[W[527]][W[69]] : ''));var zhqlt5 = jqklhz[W[508]] ? jqklhz[W[508]][W[529]]() : '',
        m3y0 = jqklhz[W[504]] ? jqklhz[W[504]][W[529]]()[W[288]]('\x20', '') : '';window['$LHD'][W[530]] = -0x1 != zhqlt5[W[428]](W[531]), window['$LHD'][W[532]] = -0x1 != zhqlt5[W[428]](W[533]), window['$LHD'][W[534]] = -0x1 != zhqlt5[W[428]](W[531]) || -0x1 != zhqlt5[W[428]](W[533]), window['$LHD'][W[535]] = -0x1 != zhqlt5[W[428]](W[536]) || -0x1 != zhqlt5[W[428]](W[537]), window['$LHD'][W[538]] = jqklhz[W[510]] ? jqklhz[W[510]][W[529]]() : '', window['$LHD']['$LBT0DH'] = !0x1, window['$LHD']['$LBTH0D'] = 0x2, -0x1 != zhqlt5[W[428]](W[533]) ? 0x18 <= jqklhz[W[513]] ? window['$LHD']['$LBTH0D'] = 0x3 : window['$LHD']['$LBTH0D'] = 0x2 : -0x1 == zhqlt5[W[428]](W[531]) || !(jqklhz[W[513]] && 0x14 <= jqklhz[W[513]] || -0x1 == m3y0[W[428]](W[539]) && -0x1 == m3y0[W[428]](W[540]) && -0x1 == m3y0[W[428]](W[541]) && -0x1 == m3y0[W[428]](W[542]) && -0x1 == m3y0[W[428]](W[543])) ? window['$LHD']['$LBTH0D'] = 0x2 : window['$LHD']['$LBTH0D'] = 0x3, console[W[312]](W[544] + window['$LHD']['$LBT0DH'] + W[545] + window['$LHD']['$LBTH0D']);
  } }), wx[W[546]]({ 'success': function (d4$8s) {
    console[W[312]](W[547] + d4$8s[W[548]] + W[549] + d4$8s[W[550]]);
  } }), wx[W[551]]({ 'success': function (ric3m0) {
    console[W[312]](W[552] + ric3m0[W[553]]);
  } }), wx[W[554]]({ 'keepScreenOn': !0x0 }), wx[W[555]](function (khqjzl) {
  console[W[312]](W[552] + khqjzl[W[553]] + W[556] + khqjzl[W[557]]);
}), wx[W[558]](function (y3x0_n) {
  window['$L0T'] = y3x0_n, window['$LDT0'] && window['$L0T'] && (console[W[440]](W[559] + window['$L0T'][W[560]]), window['$LDT0'](window['$L0T']), window['$L0T'] = null);
}), window[W[561]] = 0x0, window['$LBH0DT'] = 0x0, window[W[562]] = null, wx[W[563]](function () {
  window['$LBH0DT']++;var o95fv7 = Date[W[144]]();(0x0 == window[W[561]] || 0x1d4c0 < o95fv7 - window[W[561]]) && (console[W[425]](W[564]), wx[W[565]]()), 0x2 <= window['$LBH0DT'] && (window['$LBH0DT'] = 0x0, console[W[408]](W[566]), wx[W[567]]('0', 0x1), window['$LHD'] && window['$LHD'][W[530]] && window['$LHDT'](W[568], ''), onMemoryWarningCallBack && onMemoryWarningCallBack());
});