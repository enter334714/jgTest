var k = wx.$f;
console[k[11]](k[0x3476]), window[k[26321]], wx[k[26322]](function (ivac) {
  if (ivac) {
    if (ivac[k[14917]]) {
      var w025e = window[k[14128]][k[26323]][k[15000]](new RegExp(/\./, 'g'), '_'),
          vqemp = ivac[k[14917]],
          epw52h = vqemp[k[17681]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (epw52h) for (var atvmyi = 0x0; atvmyi < epw52h[k[8566]]; atvmyi++) {
        var wunh50;epw52h[atvmyi] && 0x0 < epw52h[atvmyi][k[8566]] && (wunh50 = parseInt(epw52h[atvmyi][k[15000]](k[0x3477], '')[k[15000]](':', '')), vqemp = vqemp[k[15000]](epw52h[atvmyi], epw52h[atvmyi][k[15000]](':' + wunh50 + ':', ':' + (wunh50 - 0x2) + ':')));
      }vqemp = (vqemp = vqemp[k[15000]](new RegExp(k[0x3478], 'g'), k[0x3479] + w025e + k[0x2c8b]))[k[15000]](new RegExp(k[0x347a], 'g'), k[0x3479] + w025e + k[0x2c8b]), ivac[k[14917]] = vqemp;
    }w025e = { 'id': window['F$O3'][k[26324]], 'role': window['F$O3'][k[2764]], 'level': window['F$O3'][k[26325]], 'user': window['F$O3'][k[24756]], 'version': window['F$O3'][k[13805]], 'gamever': window[k[14128]][k[26323]], 'cdn': window['F$O3'][k[14916]], 'serverid': window['F$O3'][k[24754]] ? window['F$O3'][k[24754]][k[17545]] : 0x0, 'systemInfo': window[k[26326]], 'error': k[0x347b], 'stack': ivac ? ivac[k[14917]] : '' }, ivac = JSON[k[14907]](w025e), (console[k[9]](k[0x347c] + ivac), window[k[26321]] && window[k[26321]] == w025e[k[9]] || (window[k[26321]] = w025e[k[9]], window['F$$O'](w025e)));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[26327]] = require(k[0x347d]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';console[k[11]](k[0x347e]), console[k[11]](k[0x347f]), F$$OK3({ 'title': k[0x3480] });var ff8b769 = { 'F$0K$O3': !0x0 };new window[k[26328]](ff8b769), window[k[26328]][k[35]]['F$0K3$O'](), window['F$0$3KO'] && clearInterval(window['F$0$3KO']), window['F$0$3KO'] = null, window['F$0K3O$'] = function (tmpvaq, wq2ept) {
  if (!tmpvaq || !wq2ept) return 0x0;tmpvaq = tmpvaq[k[13761]]('.'), wq2ept = wq2ept[k[13761]]('.');var ivam = Math[k[4000]](tmpvaq[k[8566]], wq2ept[k[8566]]);for (; tmpvaq[k[8566]] < ivam;) tmpvaq[k[13771]]('0');for (; wq2ept[k[8566]] < ivam;) wq2ept[k[13771]]('0');for (var p5qew = 0x0; p5qew < ivam; p5qew++) {
    var w2nh = parseInt(tmpvaq[p5qew]),
        f67b8 = parseInt(wq2ept[p5qew]);if (f67b8 < w2nh) return 0x1;if (w2nh < f67b8) return -0x1;
  }return 0x0;
}, window[k[26329]] = wx[k[26330]]()[k[26329]], console[k[14081]](k[0x3481] + window[k[26329]]);var fdsr4k$ = wx[k[26331]]();fdsr4k$['onCheckForUpdate'](function (kdsnu) {
  console[k[14081]](k[0x3482] + kdsnu[k[26332]]);
}), fdsr4k$[k[26333]](function () {
  wx[k[26334]]({ 'title': k[0x3483], 'content': k[0x3484], 'showCancel': !0x1, 'success': function (sd_u0) {
      fdsr4k$[k[26335]]();
    } });
}), fdsr4k$['onUpdateFailed'](function () {
  console[k[14081]](k[0x3485]);
}), window['F$0O$K3'] = function () {
  console[k[14081]](k[0x3486]);var b8o9 = wx[k[26336]]({ 'name': k[0x3487], 'success': function (y1ico) {
      console[k[14081]](k[0x3488]), console[k[14081]](y1ico), y1ico && k[0x3489] == y1ico[k[24816]] ? (window['F$3K'] = !0x0, window['F$3O$K'](), window['F$3OK$']()) : setTimeout(function () {
        window['F$0O$K3']();
      }, 0x1f4);
    }, 'fail': function (hu0_d) {
      console[k[14081]](k[0x348a]), console[k[14081]](hu0_d), setTimeout(function () {
        window['F$0O$K3']();
      }, 0x1f4);
    } });b8o9 && b8o9[k[26337]](e25hw0 => {});
}, window['F$0OK$3'] = function () {
  console[k[14081]](k[0x348b]);var ud_n0 = wx[k[26336]]({ 'name': k[0x348c], 'success': function (b81oc6) {
      console[k[14081]](k[0x348d]), console[k[14081]](b81oc6), b81oc6 && k[0x3489] == b81oc6[k[24816]] ? (window['F$OK3'] = !0x0, window['F$3O$K'](), window['F$3OK$']()) : setTimeout(function () {
        window['F$0OK$3']();
      }, 0x1f4);
    }, 'fail': function (atmyi) {
      console[k[14081]](k[0x348e]), console[k[14081]](atmyi), setTimeout(function () {
        window['F$0OK$3']();
      }, 0x1f4);
    } });ud_n0 && ud_n0[k[26337]](dk4$r => {});
}, window[k[26338]] = function () {
  0x0 <= window['F$0K3O$'](window[k[26329]], k[0x348f]) ? (console[k[14081]](k[0x3490] + window[k[26329]] + k[0x3491]), window['F$O$'](), window['F$0O$K3'](), window['F$0OK$3']()) : (window['F$O3$'](k[0x3492] + window[k[26329]]), wx[k[26334]]({ 'title': k[0xdb5], 'content': k[0x3493] }));
}, window[k[26326]] = '', wx[k[26339]]({ 'success'(vyai) {
    window[k[26326]] = k[0x3494] + vyai[k[26340]] + k[0x3495] + vyai[k[26341]] + k[0x3496] + vyai[k[11239]] + k[0x3497] + vyai[k[14074]] + k[0x3498] + vyai[k[24744]] + k[0x3499] + vyai[k[26329]] + k[0x349a] + vyai[k[16849]], console[k[14081]](window[k[26326]]), console[k[14081]](k[0x349b] + vyai[k[26342]] + k[0x349c] + vyai[k[26343]] + k[0x349d] + vyai[k[26344]] + k[0x349e] + vyai[k[26345]] + k[0x349f] + vyai[k[26346]] + k[0x34a0] + vyai[k[26347]] + k[0x34a1] + (vyai[k[26348]] ? vyai[k[26348]][k[38]] + ',' + vyai[k[26348]][k[11876]] + ',' + vyai[k[26348]][k[5377]] + ',' + vyai[k[26348]][k[3840]] : ''));var ymaiv = vyai[k[14074]] ? vyai[k[14074]][k[17774]]() : '',
        _s0 = vyai[k[26341]] ? vyai[k[26341]][k[17774]]()[k[15000]]('\x20', '') : '';window['F$O3'][k[14097]] = -0x1 != ymaiv[k[13815]](k[0x34a2]), window['F$O3'][k[17483]] = -0x1 != ymaiv[k[13815]](k[0x33e7]), window['F$O3'][k[26349]] = -0x1 != ymaiv[k[13815]](k[0x34a2]) || -0x1 != ymaiv[k[13815]](k[0x33e7]), window['F$O3'][k[24628]] = -0x1 != ymaiv[k[13815]](k[0x34a3]) || -0x1 != ymaiv[k[13815]](k[0x34a4]), window['F$O3'][k[26350]] = vyai[k[24744]] ? vyai[k[24744]][k[17774]]() : '', window['F$O3']['F$0$OK3'] = !0x1, -(window['F$O3']['F$0$O3K'] = 0x1) != ymaiv[k[13815]](k[0x33e7]) ? 0x18 <= vyai[k[16849]] ? window['F$O3']['F$0$O3K'] = 0x2 : window['F$O3']['F$0$O3K'] = 0x1 : -0x1 == ymaiv[k[13815]](k[0x34a2]) || !(vyai[k[16849]] && 0x14 <= vyai[k[16849]] || -0x1 == _s0[k[13815]](k[0x34a5]) && -0x1 == _s0[k[13815]](k[0x34a6]) && -0x1 == _s0[k[13815]](k[0x34a7]) && -0x1 == _s0[k[13815]](k[0x34a8]) && -0x1 == _s0[k[13815]](k[0x34a9])) ? window['F$O3']['F$0$O3K'] = 0x1 : window['F$O3']['F$0$O3K'] = 0x2, console[k[14081]](k[0x34aa] + window['F$O3']['F$0$OK3'] + k[0x34ab] + window['F$O3']['F$0$O3K']);
  } }), wx[k[26351]]({ 'success': function ($4rkds) {
    console[k[14081]](k[0x34ac] + $4rkds[k[2753]] + k[0x34ad] + $4rkds[k[26352]]);
  } }), wx[k[26353]]({ 'success': function (pwq2e) {
    console[k[14081]](k[0x34ae] + pwq2e[k[26354]]);
  } }), wx[k[26355]]({ 'keepScreenOn': !0x0 }), wx[k[26356]](function (c1ay) {
  console[k[14081]](k[0x34ae] + c1ay[k[26354]] + k[0x34af] + c1ay[k[26357]]);
}), wx[k[26358]](function (su_n) {
  window['F$3$K'] = su_n, window['F$3K$'] && window['F$3$K'] && (console[k[11]](k[0x34b0] + window['F$3$K'][k[218]]), window['F$3K$'](window['F$3$K']), window['F$3$K'] = null);
}), window['F$0O3$K'] = 0x0, window[k[26359]] = null, wx[k[26360]](function () {
  window['F$0O3$K']++, wx[k[17593]](), 0x2 <= window['F$0O3$K'] && (window['F$0O3$K'] = 0x0, console[k[9]](k[0x34b1]), wx[k[26361]]('0', 0x1), window['F$O3'] && window['F$O3'][k[14097]] && window['F$O3$'](k[0x34b2]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});