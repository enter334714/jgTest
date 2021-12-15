var k = wx.$f;
console[k[60077]](k[87170]), window[k[87171]], wx[k[87172]](function (ocd26) {
  if (ocd26) {
    if (ocd26[k[64100]]) {
      var sc6o = window[k[60533]][k[87173]][k[64266]](new RegExp(/\./, 'g'), '_'),
          k_4o62 = ocd26[k[64100]],
          exr8zn = k_4o62[k[70932]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (exr8zn) for (var jxwds = 0x0; jxwds < exr8zn[k[60013]]; jxwds++) {
        if (exr8zn[jxwds] && exr8zn[jxwds][k[60013]] > 0x0) {
          var y7ap$ = parseInt(exr8zn[jxwds][k[64266]](k[87174], '')[k[64266]](':', ''));k_4o62 = k_4o62[k[64266]](exr8zn[jxwds], exr8zn[jxwds][k[64266]](':' + y7ap$ + ':', ':' + (y7ap$ - 0x2) + ':'));
        }
      }k_4o62 = k_4o62[k[64266]](new RegExp(k[87175], 'g'), k[87176] + sc6o + k[83626]), k_4o62 = k_4o62[k[64266]](new RegExp(k[87177], 'g'), k[87176] + sc6o + k[83626]), ocd26[k[64100]] = k_4o62;
    }var ubv1i = { 'id': window['F$L6'][k[87178]], 'role': window['F$L6'][k[64209]], 'level': window['F$L6'][k[87179]], 'user': window['F$L6'][k[83529]], 'version': window['F$L6'][k[60100]], 'gamever': window[k[60533]][k[87173]], 'cdn': window['F$L6'][k[64099]], 'serverid': window['F$L6'][k[83524]] ? window['F$L6'][k[83524]][k[70460]] : 0x0, 'systemInfo': window[k[87180]], 'error': k[87181], 'stack': ocd26 ? ocd26[k[64100]] : '' },
        ary3$7 = JSON[k[64085]](ubv1i);console[k[60124]](k[87182] + ary3$7), (!window[k[87171]] || window[k[87171]] != ubv1i[k[60124]]) && (window[k[87171]] = ubv1i[k[60124]], window['F$0L'](ubv1i));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[87183]] = require(k[87184]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[60077]](k[87185]), console[k[60077]](k[87186]), F$0L86({ 'title': k[87187] });var f_2k = { 'F$I06L8': !![] };new window[k[87188]](f_2k), window[k[87188]][k[60144]]['F$I8L60']();if (window['F$I0L68']) clearInterval(window['F$I0L68']);window['F$I0L68'] = null, window['F$I860L'] = function (sncdw, exnz8r) {
  if (!sncdw || !exnz8r) return 0x0;sncdw = sncdw[k[60015]]('.'), exnz8r = exnz8r[k[60015]]('.');const q5kt = Math[k[60817]](sncdw[k[60013]], exnz8r[k[60013]]);while (sncdw[k[60013]] < q5kt) {
    sncdw[k[60029]]('0');
  }while (exnz8r[k[60013]] < q5kt) {
    exnz8r[k[60029]]('0');
  }for (var g9b1vu = 0x0; g9b1vu < q5kt; g9b1vu++) {
    const th0fq5 = parseInt(sncdw[g9b1vu]),
          ayr$73 = parseInt(exnz8r[g9b1vu]);if (th0fq5 > ayr$73) return 0x1;else {
      if (th0fq5 < ayr$73) return -0x1;
    }
  }return 0x0;
}, window[k[87189]] = wx[k[87190]]()[k[87189]], console[k[60461]](k[87191] + window[k[87189]]);var fnxes = wx[k[87192]]();fnxes['onCheckForUpdate'](function (szxe) {
  console[k[60461]](k[87193] + szxe[k[87194]]);
}), fnxes[k[87195]](function () {
  wx[k[87196]]({ 'title': k[87197], 'content': k[87198], 'showCancel': ![], 'success': function (jo2c46) {
      fnxes[k[87199]]();
    } });
}), fnxes['onUpdateFailed'](function () {
  console[k[60461]](k[87200]);
}), window['F$I86L0'] = function () {
  console[k[60461]](k[87201]);var c26o_4 = wx[k[87202]]({ 'name': k[87203], 'success': function (h0qt5f) {
      console[k[60461]](k[87204]), console[k[60461]](h0qt5f), h0qt5f && h0qt5f[k[83702]] == k[87205] ? (window['F$68'] = !![], window['F$68L0'](), window['F$6L08']()) : setTimeout(function () {
        window['F$I86L0']();
      }, 0x1f4);
    }, 'fail': function (nezr8x) {
      console[k[60461]](k[87206]), console[k[60461]](nezr8x), setTimeout(function () {
        window['F$I86L0']();
      }, 0x1f4);
    } });c26o_4 && c26o_4[k[87207]](gb1v => {});
}, window['F$IL068'] = function () {
  console[k[60461]](k[87208]);var mfibht = wx[k[87202]]({ 'name': k[87209], 'success': function ($p37) {
      console[k[60461]](k[87210]), console[k[60461]]($p37), $p37 && $p37[k[83702]] == k[87205] ? (window['F$L86'] = !![], window['F$68L0'](), window['F$6L08']()) : setTimeout(function () {
        window['F$IL068']();
      }, 0x1f4);
    }, 'fail': function (dcwjos) {
      console[k[60461]](k[87211]), console[k[60461]](dcwjos), setTimeout(function () {
        window['F$IL068']();
      }, 0x1f4);
    } });mfibht && mfibht[k[87207]](sdjoc => {});
}, window[k[87212]] = function () {
  window['F$I860L'](window[k[87189]], k[87213]) >= 0x0 ? (console[k[60461]](k[87214] + window[k[87189]] + k[87215]), window['F$L0'](), window['F$I86L0'](), window['F$IL068']()) : (window['F$L60'](k[87216], window[k[87189]]), wx[k[87196]]({ 'title': k[65784], 'content': k[87217] }));
}, window[k[87180]] = '', wx[k[87218]]({ 'success'(z837$) {
    window[k[87180]] = k[87219] + z837$[k[87220]] + k[87221] + z837$[k[87222]] + k[87223] + z837$[k[64279]] + k[87224] + z837$[k[60454]] + k[87225] + z837$[k[83500]] + k[87226] + z837$[k[87189]] + k[87227] + z837$[k[68437]], console[k[60461]](window[k[87180]]), console[k[60461]](k[87228] + z837$[k[87229]] + k[87230] + z837$[k[87231]] + k[87232] + z837$[k[87233]] + k[87234] + z837$[k[87235]] + k[87236] + z837$[k[87237]] + k[87238] + z837$[k[87239]] + k[87240] + (z837$[k[87241]] ? z837$[k[87241]][k[60313]] + ',' + z837$[k[87241]][k[61129]] + ',' + z837$[k[87241]][k[61131]] + ',' + z837$[k[87241]][k[61130]] : ''));var ifubv = z837$[k[60454]] ? z837$[k[60454]][k[71200]]() : '',
        cwdns = z837$[k[87222]] ? z837$[k[87222]][k[71200]]()[k[64266]]('\x20', '') : '';window['F$L6'][k[61000]] = ifubv[k[60114]](k[87242]) != -0x1, window['F$L6'][k[70295]] = ifubv[k[60114]](k[87037]) != -0x1, window['F$L6'][k[87243]] = ifubv[k[60114]](k[87242]) != -0x1 || ifubv[k[60114]](k[87037]) != -0x1, window['F$L6'][k[83225]] = ifubv[k[60114]](k[87244]) != -0x1 || ifubv[k[60114]](k[87245]) != -0x1, window['F$L6'][k[87246]] = z837$[k[83500]] ? z837$[k[83500]][k[71200]]() : '', window['F$L6']['F$I086L'] = ![], window['F$L6']['F$I0L86'] = 0x2;if (ifubv[k[60114]](k[87037]) != -0x1) {
      if (z837$[k[68437]] >= 0x18) window['F$L6']['F$I0L86'] = 0x3;else window['F$L6']['F$I0L86'] = 0x2;
    } else {
      if (ifubv[k[60114]](k[87242]) != -0x1) {
        if (z837$[k[68437]] && z837$[k[68437]] >= 0x14) window['F$L6']['F$I0L86'] = 0x3;else {
          if (cwdns[k[60114]](k[87247]) != -0x1 || cwdns[k[60114]](k[87248]) != -0x1 || cwdns[k[60114]](k[87249]) != -0x1 || cwdns[k[60114]](k[87250]) != -0x1 || cwdns[k[60114]](k[87251]) != -0x1) window['F$L6']['F$I0L86'] = 0x2;else window['F$L6']['F$I0L86'] = 0x3;
        }
      } else window['F$L6']['F$I0L86'] = 0x2;
    }console[k[60461]](k[87252] + window['F$L6']['F$I086L'] + k[87253] + window['F$L6']['F$I0L86']);
  } }), wx[k[87254]]({ 'success': function (c6sjd) {
    console[k[60461]](k[87255] + c6sjd[k[64185]] + k[87256] + c6sjd[k[87257]]);
  } }), wx[k[87258]]({ 'success': function (_540q) {
    console[k[60461]](k[87259] + _540q[k[87260]]);
  } }), wx[k[87261]]({ 'keepScreenOn': !![] }), wx[k[87262]](function (ihftm0) {
  console[k[60461]](k[87259] + ihftm0[k[87260]] + k[87263] + ihftm0[k[87264]]);
}), wx[k[69862]](function ($p3y) {
  window['F$80'] = $p3y, window['F$608'] && window['F$80'] && (console[k[60077]](k[87265] + window['F$80'][k[60743]]), window['F$608'](window['F$80']), window['F$80'] = null);
}), window['F$IL860'] = 0x0, window[k[87266]] = null, wx[k[87267]](function () {
  window['F$IL860']++, wx[k[70797]]();if (window['F$IL860'] >= 0x2) {
    window['F$IL860'] = 0x0, console[k[60124]](k[87268]), wx[k[87269]]('0', 0x1);if (window['F$L6'] && window['F$L6'][k[61000]]) window['F$L60'](k[87270], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});