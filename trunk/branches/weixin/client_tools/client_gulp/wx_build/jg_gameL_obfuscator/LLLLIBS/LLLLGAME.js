var W = wx.$l;
console[W[436]](W[437]), window[W[438]], wx[W[439]](function (qjhzlt) {
  if (qjhzlt) {
    if (qjhzlt[W[440]]) {
      var fo795 = window[W[441]][W[442]][W[286]](new RegExp(/\./, 'g'), '_'),
          e1vu7 = qjhzlt[W[440]],
          yn4_8x = e1vu7[W[443]](/(LLLLLLLL\/LLLLGAME.js:)[0-9]{1,60}(:)/g);if (yn4_8x) for (var s2b = 0x0; s2b < yn4_8x[W[178]]; s2b++) {
        if (yn4_8x[s2b] && yn4_8x[s2b][W[178]] > 0x0) {
          var d$k2ba = parseInt(yn4_8x[s2b][W[286]](W[444], '')[W[286]](':', ''));e1vu7 = e1vu7[W[286]](yn4_8x[s2b], yn4_8x[s2b][W[286]](':' + d$k2ba + ':', ':' + (d$k2ba - 0x2) + ':'));
        }
      }e1vu7 = e1vu7[W[286]](new RegExp(W[445], 'g'), W[446] + fo795 + W[447]), e1vu7 = e1vu7[W[286]](new RegExp(W[448], 'g'), W[446] + fo795 + W[447]), qjhzlt[W[440]] = e1vu7;
    }var gev7o1 = { 'id': window['$LHD'][W[449]], 'role': window['$LHD'][W[450]], 'level': window['$LHD'][W[451]], 'user': window['$LHD'][W[452]], 'version': window['$LHD'][W[206]], 'cdn': window['$LHD'][W[296]], 'pkgName': window['$LHD'][W[262]], 'gamever': window[W[441]][W[442]], 'serverid': window['$LHD'][W[149]] ? window['$LHD'][W[149]][W[150]] : 0x0, 'systemInfo': window[W[453]], 'error': W[454], 'stack': qjhzlt ? qjhzlt[W[440]] : '' },
        e1vo79 = JSON[W[402]](gev7o1);console[W[404]](W[455] + e1vo79), (!window[W[438]] || window[W[438]] != gev7o1[W[404]]) && (window[W[438]] = gev7o1[W[404]], window['$LTH'](gev7o1));
  }
});import 'lllMDFIVEMIN.js';import 'lllZLIBS.js';window[W[456]] = require(W[457]);import 'LLLLINDEX.js';import 'llllLIBSMIN.js';import 'LLLLWXMINI.js';import 'LLLINITMIN.js';console[W[436]](W[458]), console[W[436]](W[459]), $LTH0D({ 'title': W[460] });var L9otf57 = { '$LBTDH0': !![] };new window[W[435]](L9otf57), window[W[435]][W[145]]['$LB0HDT']();if (window['$LBTHD0']) clearInterval(window['$LBTHD0']);window['$LBTHD0'] = null, window['$LB0DTH'] = function (x0nyr3, l5t9fo) {
  if (!x0nyr3 || !l5t9fo) return 0x0;x0nyr3 = x0nyr3[W[461]]('.'), l5t9fo = l5t9fo[W[461]]('.');const ahkjbz = Math[W[462]](x0nyr3[W[178]], l5t9fo[W[178]]);while (x0nyr3[W[178]] < ahkjbz) {
    x0nyr3[W[318]]('0');
  }while (l5t9fo[W[178]] < ahkjbz) {
    l5t9fo[W[318]]('0');
  }for (var $b2kad = 0x0; $b2kad < ahkjbz; $b2kad++) {
    const x_4y0 = parseInt(x0nyr3[$b2kad]),
          kzlh = parseInt(l5t9fo[$b2kad]);if (x_4y0 > kzlh) return 0x1;else {
      if (x_4y0 < kzlh) return -0x1;
    }
  }return 0x0;
}, window[W[463]] = wx[W[464]]()[W[463]], console[W[310]](W[465] + window[W[463]]);var L9rm3iwc = wx[W[466]]();L9rm3iwc[W[467]](function (aqzhk) {
  console[W[310]](W[468] + aqzhk[W[469]]);
}), L9rm3iwc[W[470]](function () {
  wx[W[471]]({ 'title': W[472], 'content': W[473], 'showCancel': ![], 'success': function (d$bk2a) {
      L9rm3iwc[W[474]]();
    } });
}), L9rm3iwc[W[475]](function () {
  console[W[310]](W[476]);
}), window['$LB0DHT'] = function () {
  console[W[310]](W[477]);var htq5zl = wx[W[478]]({ 'name': W[479], 'success': function (f9t5o) {
      console[W[310]](W[480]), console[W[310]](f9t5o), f9t5o && f9t5o[W[481]] == W[482] ? (window['$LD0'] = !![], window['$LD0HT'](), window['$LDHT0']()) : setTimeout(function () {
        window['$LB0DHT']();
      }, 0x1f4);
    }, 'fail': function (oge7v1) {
      console[W[310]](W[483]), console[W[310]](oge7v1), setTimeout(function () {
        window['$LB0DHT']();
      }, 0x1f4);
    } });htq5zl && htq5zl[W[484]](zlh5 => {});
}, window['$LBHTD0'] = function () {
  console[W[310]](W[485]);var qlhkzj = wx[W[478]]({ 'name': W[486], 'success': function (ci0r3) {
      console[W[310]](W[487]), console[W[310]](ci0r3), ci0r3 && ci0r3[W[481]] == W[482] ? (window['$LH0D'] = !![], window['$LD0HT'](), window['$LDHT0']()) : setTimeout(function () {
        window['$LBHTD0']();
      }, 0x1f4);
    }, 'fail': function (zqkj) {
      console[W[310]](W[488]), console[W[310]](zqkj), setTimeout(function () {
        window['$LBHTD0']();
      }, 0x1f4);
    } });qlhkzj && qlhkzj[W[484]](ft97 => {});
}, window[W[489]] = function () {
  window['$LB0DTH'](window[W[463]], W[490]) >= 0x0 ? (console[W[310]](W[491] + window[W[463]] + W[492]), window['$LHT'](), window['$LB0DHT'](), window['$LBHTD0']()) : (window['$LHDT'](W[493], window[W[463]]), wx[W[471]]({ 'title': W[494], 'content': W[495] }));
}, window[W[453]] = '', wx[W[496]]({ 'success'(b2kd$) {
    window[W[453]] = W[497] + b2kd$[W[498]] + W[499] + b2kd$[W[500]] + W[501] + b2kd$[W[502]] + W[503] + b2kd$[W[504]] + W[505] + b2kd$[W[506]] + W[507] + b2kd$[W[463]] + W[508] + b2kd$[W[509]], console[W[310]](window[W[453]]), console[W[310]](W[510] + b2kd$[W[511]] + W[512] + b2kd$[W[513]] + W[514] + b2kd$[W[515]] + W[516] + b2kd$[W[517]] + W[518] + b2kd$[W[519]] + W[520] + b2kd$[W[521]] + W[522] + (b2kd$[W[523]] ? b2kd$[W[523]][W[108]] + ',' + b2kd$[W[523]][W[220]] + ',' + b2kd$[W[523]][W[524]] + ',' + b2kd$[W[523]][W[69]] : ''));var ahbzk = b2kd$[W[504]] ? b2kd$[W[504]][W[525]]() : '',
        m3criw = b2kd$[W[500]] ? b2kd$[W[500]][W[525]]()[W[286]]('\x20', '') : '';window['$LHD'][W[526]] = ahbzk[W[424]](W[527]) != -0x1, window['$LHD'][W[528]] = ahbzk[W[424]](W[529]) != -0x1, window['$LHD'][W[530]] = ahbzk[W[424]](W[527]) != -0x1 || ahbzk[W[424]](W[529]) != -0x1, window['$LHD'][W[531]] = ahbzk[W[424]](W[532]) != -0x1 || ahbzk[W[424]](W[533]) != -0x1, window['$LHD'][W[534]] = b2kd$[W[506]] ? b2kd$[W[506]][W[525]]() : '', window['$LHD']['$LBT0DH'] = ![], window['$LHD']['$LBTH0D'] = 0x2;if (ahbzk[W[424]](W[529]) != -0x1) {
      if (b2kd$[W[509]] >= 0x18) window['$LHD']['$LBTH0D'] = 0x3;else window['$LHD']['$LBTH0D'] = 0x2;
    } else {
      if (ahbzk[W[424]](W[527]) != -0x1) {
        if (b2kd$[W[509]] && b2kd$[W[509]] >= 0x14) window['$LHD']['$LBTH0D'] = 0x3;else {
          if (m3criw[W[424]](W[535]) != -0x1 || m3criw[W[424]](W[536]) != -0x1 || m3criw[W[424]](W[537]) != -0x1 || m3criw[W[424]](W[538]) != -0x1 || m3criw[W[424]](W[539]) != -0x1) window['$LHD']['$LBTH0D'] = 0x2;else window['$LHD']['$LBTH0D'] = 0x3;
        }
      } else window['$LHD']['$LBTH0D'] = 0x2;
    }console[W[310]](W[540] + window['$LHD']['$LBT0DH'] + W[541] + window['$LHD']['$LBTH0D']);
  } }), wx[W[542]]({ 'success': function (l9oft) {
    console[W[310]](W[543] + l9oft[W[544]] + W[545] + l9oft[W[546]]);
  } }), wx[W[547]]({ 'success': function (cmr) {
    console[W[310]](W[548] + cmr[W[549]]);
  } }), wx[W[550]]({ 'keepScreenOn': !![] }), wx[W[551]](function (pu1g6e) {
  console[W[310]](W[548] + pu1g6e[W[549]] + W[552] + pu1g6e[W[553]]);
}), wx[W[554]](function (h2jakb) {
  window['$L0T'] = h2jakb, window['$LDT0'] && window['$L0T'] && (console[W[436]](W[555] + window['$L0T'][W[556]]), window['$LDT0'](window['$L0T']), window['$L0T'] = null);
}), window[W[557]] = 0x0, window['$LBH0DT'] = 0x0, window[W[558]] = null, wx[W[559]](function () {
  window['$LBH0DT']++;var y_4n0x = Date[W[144]]();(window[W[557]] == 0x0 || y_4n0x - window[W[557]] > 0x1d4c0) && (console[W[421]](W[560]), wx[W[561]]());if (window['$LBH0DT'] >= 0x2) {
    window['$LBH0DT'] = 0x0, console[W[404]](W[562]), wx[W[563]]('0', 0x1);if (window['$LHD'] && window['$LHD'][W[526]]) window['$LHDT'](W[564], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});