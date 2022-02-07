var W = wx.$l;
console[W[78]](W[28990]), window[W[28991]], wx[W[28992]](function (a$d2bs) {
  if (a$d2bs) {
    if (a$d2bs[W[4547]]) {
      var $a2bkd = window[W[556]][W[28993]][W[4726]](new RegExp(/\./, 'g'), '_'),
          cr0xy = a$d2bs[W[4547]],
          c3x = cr0xy[W[12133]](/(LLLLLLLL\/LLLLGAME.js:)[0-9]{1,60}(:)/g);if (c3x) for (var v91f7 = 0x0; v91f7 < c3x[W[13]]; v91f7++) {
        if (c3x[v91f7] && c3x[v91f7][W[13]] > 0x0) {
          var jk2ha = parseInt(c3x[v91f7][W[4726]](W[28994], '')[W[4726]](':', ''));cr0xy = cr0xy[W[4726]](c3x[v91f7], c3x[v91f7][W[4726]](':' + jk2ha + ':', ':' + (jk2ha - 0x2) + ':'));
        }
      }cr0xy = cr0xy[W[4726]](new RegExp(W[28995], 'g'), W[28996] + $a2bkd + W[25549]), cr0xy = cr0xy[W[4726]](new RegExp(W[28997], 'g'), W[28996] + $a2bkd + W[25549]), a$d2bs[W[4547]] = cr0xy;
    }var s$48d = { 'id': window['$LHD'][W[28998]], 'role': window['$LHD'][W[4668]], 'level': window['$LHD'][W[28999]], 'user': window['$LHD'][W[25449]], 'version': window['$LHD'][W[101]], 'cdn': window['$LHD'][W[4545]], 'pkgName': window['$LHD'][W[25450]], 'gamever': window[W[556]][W[28993]], 'serverid': window['$LHD'][W[25444]] ? window['$LHD'][W[25444]][W[11547]] : 0x0, 'systemInfo': window[W[29000]], 'error': W[29001], 'stack': a$d2bs ? a$d2bs[W[4547]] : '' },
        ds8$b = JSON[W[4531]](s$48d);console[W[125]](W[29002] + ds8$b), (!window[W[28991]] || window[W[28991]] != s$48d[W[125]]) && (window[W[28991]] = s$48d[W[125]], window['$LTH'](s$48d));
  }
});import 'lllMDFIVEMIN.js';import 'lllZLIBS.js';window[W[29003]] = require(W[29004]);import 'LLLLINDEX.js';import 'llllLIBSMIN.js';import 'LLLLWXMINI.js';import 'LLLINITMIN.js';console[W[78]](W[29005]), console[W[78]](W[29006]), $LTH0D({ 'title': W[29007] });var L9$_4sd = { '$LBTDH0': !![] };new window[W[28989]](L9$_4sd), window[W[28989]][W[148]]['$LB0HDT']();if (window['$LBTHD0']) clearInterval(window['$LBTHD0']);window['$LBTHD0'] = null, window['$LB0DTH'] = function (qt5zh, xn_48y) {
  if (!qt5zh || !xn_48y) return 0x0;qt5zh = qt5zh[W[15]]('.'), xn_48y = xn_48y[W[15]]('.');const uv7e = Math[W[851]](qt5zh[W[13]], xn_48y[W[13]]);while (qt5zh[W[13]] < uv7e) {
    qt5zh[W[29]]('0');
  }while (xn_48y[W[13]] < uv7e) {
    xn_48y[W[29]]('0');
  }for (var y3rmc = 0x0; y3rmc < uv7e; y3rmc++) {
    const a2k$d = parseInt(qt5zh[y3rmc]),
          jbahk2 = parseInt(xn_48y[y3rmc]);if (a2k$d > jbahk2) return 0x1;else {
      if (a2k$d < jbahk2) return -0x1;
    }
  }return 0x0;
}, window[W[29008]] = wx[W[29009]]()[W[29008]], console[W[482]](W[29010] + window[W[29008]]);var L9z5fq = wx[W[29011]]();L9z5fq[W[29012]](function (ny0xr3) {
  console[W[482]](W[29013] + ny0xr3[W[29014]]);
}), L9z5fq[W[29015]](function () {
  wx[W[29016]]({ 'title': W[29017], 'content': W[29018], 'showCancel': ![], 'success': function (d84_$) {
      L9z5fq[W[29019]]();
    } });
}), L9z5fq[W[29020]](function () {
  console[W[482]](W[29021]);
}), window['$LB0DHT'] = function () {
  console[W[482]](W[29022]);var qt5fz = wx[W[29023]]({ 'name': W[29024], 'success': function (hzklj) {
      console[W[482]](W[29025]), console[W[482]](hzklj), hzklj && hzklj[W[25638]] == W[29026] ? (window['$LD0'] = !![], window['$LD0HT'](), window['$LDHT0']()) : setTimeout(function () {
        window['$LB0DHT']();
      }, 0x1f4);
    }, 'fail': function (bk2a$) {
      console[W[482]](W[29027]), console[W[482]](bk2a$), setTimeout(function () {
        window['$LB0DHT']();
      }, 0x1f4);
    } });qt5fz && qt5fz[W[29028]](ego71 => {});
}, window['$LBHTD0'] = function () {
  console[W[482]](W[29029]);var akbd2 = wx[W[29023]]({ 'name': W[29030], 'success': function (y3c0m) {
      console[W[482]](W[29031]), console[W[482]](y3c0m), y3c0m && y3c0m[W[25638]] == W[29026] ? (window['$LH0D'] = !![], window['$LD0HT'](), window['$LDHT0']()) : setTimeout(function () {
        window['$LBHTD0']();
      }, 0x1f4);
    }, 'fail': function (mwrci) {
      console[W[482]](W[29032]), console[W[482]](mwrci), setTimeout(function () {
        window['$LBHTD0']();
      }, 0x1f4);
    } });akbd2 && akbd2[W[29028]]($2akdb => {});
}, window[W[29033]] = function () {
  window['$LB0DTH'](window[W[29008]], W[29034]) >= 0x0 ? (console[W[482]](W[29035] + window[W[29008]] + W[29036]), window['$LHT'](), window['$LB0DHT'](), window['$LBHTD0']()) : (window['$LHDT'](W[29037], window[W[29008]]), wx[W[29016]]({ 'title': W[6393], 'content': W[29038] }));
}, window[W[29000]] = '', wx[W[29039]]({ 'success'(e9o) {
    window[W[29000]] = W[29040] + e9o[W[29041]] + W[29042] + e9o[W[29043]] + W[29044] + e9o[W[4739]] + W[29045] + e9o[W[475]] + W[29046] + e9o[W[25417]] + W[29047] + e9o[W[29008]] + W[29048] + e9o[W[9345]], console[W[482]](window[W[29000]]), console[W[482]](W[29049] + e9o[W[29050]] + W[29051] + e9o[W[29052]] + W[29053] + e9o[W[29054]] + W[29055] + e9o[W[29056]] + W[29057] + e9o[W[29058]] + W[29059] + e9o[W[29060]] + W[29061] + (e9o[W[29062]] ? e9o[W[29062]][W[323]] + ',' + e9o[W[29062]][W[1214]] + ',' + e9o[W[29062]][W[1216]] + ',' + e9o[W[29062]][W[1215]] : ''));var xr0yn3 = e9o[W[475]] ? e9o[W[475]][W[12431]]() : '',
        ad$b2k = e9o[W[29043]] ? e9o[W[29043]][W[12431]]()[W[4726]]('\x20', '') : '';window['$LHD'][W[1072]] = xr0yn3[W[115]](W[29063]) != -0x1, window['$LHD'][W[11369]] = xr0yn3[W[115]](W[29064]) != -0x1, window['$LHD'][W[29065]] = xr0yn3[W[115]](W[29063]) != -0x1 || xr0yn3[W[115]](W[29064]) != -0x1, window['$LHD'][W[25151]] = xr0yn3[W[115]](W[29066]) != -0x1 || xr0yn3[W[115]](W[29067]) != -0x1, window['$LHD'][W[29068]] = e9o[W[25417]] ? e9o[W[25417]][W[12431]]() : '', window['$LHD']['$LBT0DH'] = ![], window['$LHD']['$LBTH0D'] = 0x2;if (xr0yn3[W[115]](W[29064]) != -0x1) {
      if (e9o[W[9345]] >= 0x18) window['$LHD']['$LBTH0D'] = 0x3;else window['$LHD']['$LBTH0D'] = 0x2;
    } else {
      if (xr0yn3[W[115]](W[29063]) != -0x1) {
        if (e9o[W[9345]] && e9o[W[9345]] >= 0x14) window['$LHD']['$LBTH0D'] = 0x3;else {
          if (ad$b2k[W[115]](W[29069]) != -0x1 || ad$b2k[W[115]](W[29070]) != -0x1 || ad$b2k[W[115]](W[29071]) != -0x1 || ad$b2k[W[115]](W[29072]) != -0x1 || ad$b2k[W[115]](W[29073]) != -0x1) window['$LHD']['$LBTH0D'] = 0x2;else window['$LHD']['$LBTH0D'] = 0x3;
        }
      } else window['$LHD']['$LBTH0D'] = 0x2;
    }console[W[482]](W[29074] + window['$LHD']['$LBT0DH'] + W[29075] + window['$LHD']['$LBTH0D']);
  } }), wx[W[29076]]({ 'success': function (n_3yx) {
    console[W[482]](W[29077] + n_3yx[W[4644]] + W[29078] + n_3yx[W[29079]]);
  } }), wx[W[29080]]({ 'success': function (tqhjzl) {
    console[W[482]](W[29081] + tqhjzl[W[29082]]);
  } }), wx[W[29083]]({ 'keepScreenOn': !![] }), wx[W[29084]](function (qfz5l) {
  console[W[482]](W[29081] + qfz5l[W[29082]] + W[29085] + qfz5l[W[29086]]);
}), wx[W[10879]](function (e1gp6u) {
  window['$L0T'] = e1gp6u, window['$LDT0'] && window['$L0T'] && (console[W[78]](W[29087] + window['$L0T'][W[774]]), window['$LDT0'](window['$L0T']), window['$L0T'] = null);
}), window[W[29088]] = 0x0, window['$LBH0DT'] = 0x0, window[W[29089]] = null, wx[W[29090]](function () {
  window['$LBH0DT']++;var tlhqjz = Date[W[83]]();(window[W[29088]] == 0x0 || tlhqjz - window[W[29088]] > 0x1d4c0) && (console[W[96]](W[29091]), wx[W[11979]]());if (window['$LBH0DT'] >= 0x2) {
    window['$LBH0DT'] = 0x0, console[W[125]](W[29092]), wx[W[29093]]('0', 0x1);if (window['$LHD'] && window['$LHD'][W[1072]]) window['$LHDT'](W[29094], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});