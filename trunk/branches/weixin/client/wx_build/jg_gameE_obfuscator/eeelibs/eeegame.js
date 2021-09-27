var b = wx.$e;
console[b[30075]](b[56097]), window['lastError'], wx['onError'](function (fd6on5) {
  if (fd6on5) {
    if (fd6on5[b[33824]]) {
      var y89k = window[b[30497]][b[56098]][b[33988]](new RegExp(/\./, 'g'), '_'),
          r02avg = fd6on5[b[33824]],
          y17w9k = r02avg[b[40431]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);if (y17w9k) for (var kwy91 = 0x0; kwy91 < y17w9k[b[30012]]; kwy91++) {
        var x$3i;y17w9k[kwy91] && 0x0 < y17w9k[kwy91][b[30012]] && (x$3i = parseInt(y17w9k[kwy91][b[33988]](b[56099], '')[b[33988]](':', '')), r02avg = r02avg[b[33988]](y17w9k[kwy91], y17w9k[kwy91][b[33988]](':' + x$3i + ':', ':' + (x$3i - 0x2) + ':')));
      }r02avg = (r02avg = r02avg[b[33988]](new RegExp(b[56100], 'g'), b[56101] + y89k + b[52739]))[b[33988]](new RegExp(b[56102], 'g'), b[56101] + y89k + b[52739]), fd6on5[b[33824]] = r02avg;
    }y89k = { 'id': window['E$ND'][b[56103]], 'role': window['E$ND'][b[33934]], 'level': window['E$ND'][b[56104]], 'user': window['E$ND'][b[52650]], 'version': window['E$ND'][b[30097]], 'gamever': window[b[30497]][b[56098]], 'cdn': window['E$ND'][b[33823]], 'serverid': window['E$ND'][b[52645]] ? window['E$ND'][b[52645]][b[40069]] : 0x0, 'systemInfo': window[b[56105]], 'error': 'MiniProgramError', 'stack': fd6on5 ? fd6on5[b[33824]] : '' }, fd6on5 = JSON[b[33811]](y89k), (console[b[30121]](b[56106] + fd6on5), window['lastError'] && window['lastError'] == y89k[b[30121]] || (window['lastError'] = y89k[b[30121]], window['E$MN'](y89k)));
  }
});import 'eeemd5min.js';import 'eeezlibs.js';window[b[56107]] = require(b[56108]);import 'eeeindex.js';import 'eeelibsmin.js';import 'eeewxmini.js';import 'eeeinitmin.js';console[b[30075]](b[56109]), console[b[30075]](b[56110]), E$MNGD({ 'title': b[56111] });var er2a0v = { 'E$VGMND': !0x0 };new window[b[56112]](er2a0v), window[b[56112]][b[30144]]['E$VGDMN'](), window['E$VMDGN'] && clearInterval(window['E$VMDGN']), window['E$VMDGN'] = null, window['E$VGDNM'] = function (ger, wreb) {
  if (!ger || !wreb) return 0x0;ger = ger[b[30014]]('.'), wreb = wreb[b[30014]]('.');var jimzg0 = Math[b[30771]](ger[b[30012]], wreb[b[30012]]);for (; ger[b[30012]] < jimzg0;) ger[b[30028]]('0');for (; wreb[b[30012]] < jimzg0;) wreb[b[30028]]('0');for (var grvea2 = 0x0; grvea2 < jimzg0; grvea2++) {
    var hx3u = parseInt(ger[grvea2]),
        rbsw = parseInt(wreb[grvea2]);if (rbsw < hx3u) return 0x1;if (hx3u < rbsw) return -0x1;
  }return 0x0;
}, window[b[56113]] = wx[b[56114]]()[b[56113]], console[b[30422]](b[56115] + window[b[56113]]);var ek817_9 = wx[b[56116]]();ek817_9[b[56117]](function (z$0mji) {
  console[b[30422]](b[56118] + z$0mji[b[56119]]);
}), ek817_9[b[56120]](function () {
  wx[b[56121]]({ 'title': b[56122], 'content': b[56123], 'showCancel': !0x1, 'success': function (ps2rb) {
      ek817_9[b[56124]]();
    } });
}), ek817_9[b[56125]](function () {
  console[b[30422]](b[56126]);
}), window['E$VNMGD'] = function () {
  console[b[30422]](b[56127]);var qx3 = wx[b[56128]]({ 'name': b[56129], 'success': function (g0zji) {
      console[b[30422]](b[56130]), console[b[30422]](g0zji), g0zji && b[56131] == g0zji[b[52809]] ? (window['E$DG'] = !0x0, window['E$DNMG'](), window['E$DNGM']()) : setTimeout(function () {
        window['E$VNMGD']();
      }, 0x1f4);
    }, 'fail': function (jix3t) {
      console[b[30422]](b[56132]), console[b[30422]](jix3t), setTimeout(function () {
        window['E$VNMGD']();
      }, 0x1f4);
    } });qx3 && qx3[b[56133]](eras2v => {});
}, window['E$VNGMD'] = function () {
  console[b[30422]](b[56134]);var mi0gv = wx[b[56128]]({ 'name': b[56135], 'success': function (ijxt3$) {
      console[b[30422]](b[56136]), console[b[30422]](ijxt3$), ijxt3$ && b[56131] == ijxt3$[b[52809]] ? (window['E$NGD'] = !0x0, window['E$DNMG'](), window['E$DNGM']()) : setTimeout(function () {
        window['E$VNGMD']();
      }, 0x1f4);
    }, 'fail': function (izj$x3) {
      console[b[30422]](b[56137]), console[b[30422]](izj$x3), setTimeout(function () {
        window['E$VNGMD']();
      }, 0x1f4);
    } });mi0gv && mi0gv[b[56133]](res2bp => {});
}, window[b[56138]] = function () {
  0x0 <= window['E$VGDNM'](window[b[56113]], b[56139]) ? (console[b[30422]](b[56140] + window[b[56113]] + b[56141]), window['E$NM'](), window['E$VNMGD'](), window['E$VNGMD']()) : (window['E$NDM'](b[56142] + window[b[56113]]), wx[b[56121]]({ 'title': b[35546], 'content': b[56143] }));
}, window[b[56105]] = '', wx[b[56144]]({ 'success'(n48d_) {
    window[b[56105]] = b[56145] + n48d_[b[56146]] + b[56147] + n48d_[b[56148]] + b[56149] + n48d_[b[34001]] + b[56150] + n48d_[b[30415]] + b[56151] + n48d_[b[52621]] + b[56152] + n48d_[b[56113]] + b[56153] + n48d_[b[38135]], console[b[30422]](window[b[56105]]), console[b[30422]](b[56154] + n48d_[b[56155]] + b[56156] + n48d_[b[56157]] + b[56158] + n48d_[b[56159]] + b[56160] + n48d_[b[56161]] + b[56162] + n48d_[b[56163]] + b[56164] + n48d_[b[56165]] + b[56166] + (n48d_[b[56167]] ? n48d_[b[56167]][b[30301]] + ',' + n48d_[b[56167]][b[31037]] + ',' + n48d_[b[56167]][b[31040]] + ',' + n48d_[b[56167]][b[31039]] : ''));var psebw = n48d_[b[30415]] ? n48d_[b[30415]][b[40680]]() : '',
        s2aerv = n48d_[b[56148]] ? n48d_[b[56148]][b[40680]]()[b[33988]]('\x20', '') : '';window['E$ND'][b[30452]] = -0x1 != psebw[b[30111]](b[55875]), window['E$ND'][b[39920]] = -0x1 != psebw[b[30111]](b[55874]), window['E$ND'][b[56168]] = -0x1 != psebw[b[30111]](b[55875]) || -0x1 != psebw[b[30111]](b[55874]), window['E$ND'][b[52308]] = -0x1 != psebw[b[30111]](b[56169]) || -0x1 != psebw[b[30111]](b[56170]), window['E$ND'][b[56171]] = n48d_[b[52621]] ? n48d_[b[52621]][b[40680]]() : '', window['E$ND']['E$VMNGD'] = !0x1, -(window['E$ND']['E$VMNDG'] = 0x1) != psebw[b[30111]](b[55874]) ? 0x18 <= n48d_[b[38135]] ? window['E$ND']['E$VMNDG'] = 0x2 : window['E$ND']['E$VMNDG'] = 0x1 : -0x1 == psebw[b[30111]](b[55875]) || !(n48d_[b[38135]] && 0x14 <= n48d_[b[38135]] || -0x1 == s2aerv[b[30111]](b[56172]) && -0x1 == s2aerv[b[30111]](b[56173]) && -0x1 == s2aerv[b[30111]](b[56174]) && -0x1 == s2aerv[b[30111]](b[56175]) && -0x1 == s2aerv[b[30111]](b[56176])) ? window['E$ND']['E$VMNDG'] = 0x1 : window['E$ND']['E$VMNDG'] = 0x2, console[b[30422]](b[56177] + window['E$ND']['E$VMNGD'] + b[56178] + window['E$ND']['E$VMNDG']);
  } }), wx[b[56179]]({ 'success': function (zav) {
    console[b[30422]](b[56180] + zav[b[33913]] + b[56181] + zav[b[56182]]);
  } }), wx[b[56183]]({ 'success': function (j3zx$i) {
    console[b[30422]](b[56184] + j3zx$i[b[56185]]);
  } }), wx[b[56186]]({ 'keepScreenOn': !0x0 }), wx[b[56187]](function (j3zx$) {
  console[b[30422]](b[56184] + j3zx$[b[56185]] + b[56188] + j3zx$[b[56189]]);
}), wx[b[56190]](function (r2eap) {
  window['E$DMG'] = r2eap, window['E$DGM'] && window['E$DMG'] && (console[b[30075]](b[56191] + window['E$DMG'][b[30694]]), window['E$DGM'](window['E$DMG']), window['E$DMG'] = null);
}), window['E$VNDMG'] = 0x0, window[b[56192]] = null, wx[b[56193]](function () {
  window['E$VNDMG']++, wx[b[40244]](), 0x2 <= window['E$VNDMG'] && (window['E$VNDMG'] = 0x0, console[b[30121]](b[56194]), wx[b[56195]]('0', 0x1), window['E$ND'] && window['E$ND'][b[30452]] && window['E$NDM'](b[56196]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});