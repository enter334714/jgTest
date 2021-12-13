var k = wx.$f;
console[k[60077]](k[87169]), window[k[87170]], wx[k[87171]](function (itmh) {
  if (itmh) {
    if (itmh[k[64100]]) {
      var r$e7 = window[k[60533]][k[87172]][k[64266]](new RegExp(/\./, 'g'), '_'),
          wjsndx = itmh[k[64100]],
          qf0htm = wjsndx[k[70933]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (qf0htm) for (var ihfbtm = 0x0; ihfbtm < qf0htm[k[60013]]; ihfbtm++) {
        if (qf0htm[ihfbtm] && qf0htm[ihfbtm][k[60013]] > 0x0) {
          var bugv1 = parseInt(qf0htm[ihfbtm][k[64266]](k[87173], '')[k[64266]](':', ''));wjsndx = wjsndx[k[64266]](qf0htm[ihfbtm], qf0htm[ihfbtm][k[64266]](':' + bugv1 + ':', ':' + (bugv1 - 0x2) + ':'));
        }
      }wjsndx = wjsndx[k[64266]](new RegExp(k[87174], 'g'), k[87175] + r$e7 + k[83627]), wjsndx = wjsndx[k[64266]](new RegExp(k[87176], 'g'), k[87175] + r$e7 + k[83627]), itmh[k[64100]] = wjsndx;
    }var hqk50t = { 'id': window['F$L6'][k[87177]], 'role': window['F$L6'][k[64209]], 'level': window['F$L6'][k[87178]], 'user': window['F$L6'][k[83530]], 'version': window['F$L6'][k[60100]], 'gamever': window[k[60533]][k[87172]], 'cdn': window['F$L6'][k[64099]], 'serverid': window['F$L6'][k[83525]] ? window['F$L6'][k[83525]][k[70460]] : 0x0, 'systemInfo': window[k[87179]], 'error': k[87180], 'stack': itmh ? itmh[k[64100]] : '' },
        oj246c = JSON[k[64085]](hqk50t);console[k[60124]](k[87181] + oj246c), (!window[k[87170]] || window[k[87170]] != hqk50t[k[60124]]) && (window[k[87170]] = hqk50t[k[60124]], window['F$0L'](hqk50t));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[87182]] = require(k[87183]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[60077]](k[87184]), console[k[60077]](k[87185]), F$0L86({ 'title': k[87186] });var fbumv = { 'F$I06L8': !![] };new window[k[87187]](fbumv), window[k[87187]][k[60144]]['F$I8L60']();if (window['F$I0L68']) clearInterval(window['F$I0L68']);window['F$I0L68'] = null, window['F$I860L'] = function (o2_6k4, q5f) {
  if (!o2_6k4 || !q5f) return 0x0;o2_6k4 = o2_6k4[k[60015]]('.'), q5f = q5f[k[60015]]('.');const uibmfv = Math[k[60817]](o2_6k4[k[60013]], q5f[k[60013]]);while (o2_6k4[k[60013]] < uibmfv) {
    o2_6k4[k[60029]]('0');
  }while (q5f[k[60013]] < uibmfv) {
    q5f[k[60029]]('0');
  }for (var o62jc = 0x0; o62jc < uibmfv; o62jc++) {
    const sjwnxd = parseInt(o2_6k4[o62jc]),
          vbgu19 = parseInt(q5f[o62jc]);if (sjwnxd > vbgu19) return 0x1;else {
      if (sjwnxd < vbgu19) return -0x1;
    }
  }return 0x0;
}, window[k[87188]] = wx[k[87189]]()[k[87188]], console[k[60461]](k[87190] + window[k[87188]]);var ftk50q = wx[k[87191]]();ftk50q['onCheckForUpdate'](function (jwnc) {
  console[k[60461]](k[87192] + jwnc[k[87193]]);
}), ftk50q[k[87194]](function () {
  wx[k[87195]]({ 'title': k[87196], 'content': k[87197], 'showCancel': ![], 'success': function (thq5f0) {
      ftk50q[k[87198]]();
    } });
}), ftk50q['onUpdateFailed'](function () {
  console[k[60461]](k[87199]);
}), window['F$I86L0'] = function () {
  console[k[60461]](k[87200]);var jswcnd = wx[k[87201]]({ 'name': k[87202], 'success': function (cwsjn) {
      console[k[60461]](k[87203]), console[k[60461]](cwsjn), cwsjn && cwsjn[k[83703]] == k[87204] ? (window['F$68'] = !![], window['F$68L0'](), window['F$6L08']()) : setTimeout(function () {
        window['F$I86L0']();
      }, 0x1f4);
    }, 'fail': function (k0tqh5) {
      console[k[60461]](k[87205]), console[k[60461]](k0tqh5), setTimeout(function () {
        window['F$I86L0']();
      }, 0x1f4);
    } });jswcnd && jswcnd[k[87206]](_52qk4 => {});
}, window['F$IL068'] = function () {
  console[k[60461]](k[87207]);var cjswn = wx[k[87201]]({ 'name': k[87208], 'success': function (wjdo) {
      console[k[60461]](k[87209]), console[k[60461]](wjdo), wjdo && wjdo[k[83703]] == k[87204] ? (window['F$L86'] = !![], window['F$68L0'](), window['F$6L08']()) : setTimeout(function () {
        window['F$IL068']();
      }, 0x1f4);
    }, 'fail': function (qhk5t0) {
      console[k[60461]](k[87210]), console[k[60461]](qhk5t0), setTimeout(function () {
        window['F$IL068']();
      }, 0x1f4);
    } });cjswn && cjswn[k[87206]](o2j46c => {});
}, window[k[87211]] = function () {
  window['F$I860L'](window[k[87188]], k[87212]) >= 0x0 ? (console[k[60461]](k[87213] + window[k[87188]] + k[87214]), window['F$L0'](), window['F$I86L0'](), window['F$IL068']()) : (window['F$L60'](k[87215], window[k[87188]]), wx[k[87195]]({ 'title': k[65784], 'content': k[87216] }));
}, window[k[87179]] = '', wx[k[87217]]({ 'success'(_q4k2) {
    window[k[87179]] = k[87218] + _q4k2[k[87219]] + k[87220] + _q4k2[k[87221]] + k[87222] + _q4k2[k[64279]] + k[87223] + _q4k2[k[60454]] + k[87224] + _q4k2[k[83501]] + k[87225] + _q4k2[k[87188]] + k[87226] + _q4k2[k[68437]], console[k[60461]](window[k[87179]]), console[k[60461]](k[87227] + _q4k2[k[87228]] + k[87229] + _q4k2[k[87230]] + k[87231] + _q4k2[k[87232]] + k[87233] + _q4k2[k[87234]] + k[87235] + _q4k2[k[87236]] + k[87237] + _q4k2[k[87238]] + k[87239] + (_q4k2[k[87240]] ? _q4k2[k[87240]][k[60313]] + ',' + _q4k2[k[87240]][k[61129]] + ',' + _q4k2[k[87240]][k[61131]] + ',' + _q4k2[k[87240]][k[61130]] : ''));var o_c6 = _q4k2[k[60454]] ? _q4k2[k[60454]][k[71201]]() : '',
        iu1vm = _q4k2[k[87221]] ? _q4k2[k[87221]][k[71201]]()[k[64266]]('\x20', '') : '';window['F$L6'][k[61000]] = o_c6[k[60114]](k[87241]) != -0x1, window['F$L6'][k[70295]] = o_c6[k[60114]](k[87037]) != -0x1, window['F$L6'][k[87242]] = o_c6[k[60114]](k[87241]) != -0x1 || o_c6[k[60114]](k[87037]) != -0x1, window['F$L6'][k[83226]] = o_c6[k[60114]](k[87243]) != -0x1 || o_c6[k[60114]](k[87244]) != -0x1, window['F$L6'][k[87245]] = _q4k2[k[83501]] ? _q4k2[k[83501]][k[71201]]() : '', window['F$L6']['F$I086L'] = ![], window['F$L6']['F$I0L86'] = 0x2;if (o_c6[k[60114]](k[87037]) != -0x1) {
      if (_q4k2[k[68437]] >= 0x18) window['F$L6']['F$I0L86'] = 0x3;else window['F$L6']['F$I0L86'] = 0x2;
    } else {
      if (o_c6[k[60114]](k[87241]) != -0x1) {
        if (_q4k2[k[68437]] && _q4k2[k[68437]] >= 0x14) window['F$L6']['F$I0L86'] = 0x3;else {
          if (iu1vm[k[60114]](k[87246]) != -0x1 || iu1vm[k[60114]](k[87247]) != -0x1 || iu1vm[k[60114]](k[87248]) != -0x1 || iu1vm[k[60114]](k[87249]) != -0x1 || iu1vm[k[60114]](k[87250]) != -0x1) window['F$L6']['F$I0L86'] = 0x2;else window['F$L6']['F$I0L86'] = 0x3;
        }
      } else window['F$L6']['F$I0L86'] = 0x2;
    }console[k[60461]](k[87251] + window['F$L6']['F$I086L'] + k[87252] + window['F$L6']['F$I0L86']);
  } }), wx[k[87253]]({ 'success': function ($pa) {
    console[k[60461]](k[87254] + $pa[k[64185]] + k[87255] + $pa[k[87256]]);
  } }), wx[k[87257]]({ 'success': function (x8zner) {
    console[k[60461]](k[87258] + x8zner[k[87259]]);
  } }), wx[k[87260]]({ 'keepScreenOn': !![] }), wx[k[87261]](function (_kq450) {
  console[k[60461]](k[87258] + _kq450[k[87259]] + k[87262] + _kq450[k[87263]]);
}), wx[k[69862]](function (_256k) {
  window['F$80'] = _256k, window['F$608'] && window['F$80'] && (console[k[60077]](k[87264] + window['F$80'][k[60743]]), window['F$608'](window['F$80']), window['F$80'] = null);
}), window['F$IL860'] = 0x0, window[k[87265]] = null, wx[k[87266]](function () {
  window['F$IL860']++, wx[k[70798]]();if (window['F$IL860'] >= 0x2) {
    window['F$IL860'] = 0x0, console[k[60124]](k[87267]), wx[k[87268]]('0', 0x1);if (window['F$L6'] && window['F$L6'][k[61000]]) window['F$L60'](k[87269], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});