var b = wx.$e;
console[b[40078]](b[68003]), window[b[68004]], wx[b[68005]](function (i$xqj3) {
  if (i$xqj3) {
    if (i$xqj3[b[44415]]) {
      var amoc_7 = window[b[40553]][b[68006]][b[44592]](new RegExp(/\./, 'g'), '_'),
          f_7a = i$xqj3[b[44415]],
          rfyzhl = f_7a[b[51604]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);if (rfyzhl) for (var k0d65 = 0x0; k0d65 < rfyzhl[b[40013]]; k0d65++) {
        if (rfyzhl[k0d65] && rfyzhl[k0d65][b[40013]] > 0x0) {
          var bw0d8 = parseInt(rfyzhl[k0d65][b[44592]](b[68007], '')[b[44592]](':', ''));f_7a = f_7a[b[44592]](rfyzhl[k0d65], rfyzhl[k0d65][b[44592]](':' + bw0d8 + ':', ':' + (bw0d8 - 0x2) + ':'));
        }
      }f_7a = f_7a[b[44592]](new RegExp(b[68008], 'g'), b[68009] + amoc_7 + b[64367]), f_7a = f_7a[b[44592]](new RegExp(b[68010], 'g'), b[68009] + amoc_7 + b[64367]), i$xqj3[b[44415]] = f_7a;
    }var ksqn9 = { 'id': window['e1U0'][b[68011]], 'role': window['e1U0'][b[44534]], 'level': window['e1U0'][b[68012]], 'user': window['e1U0'][b[64269]], 'version': window['e1U0'][b[40101]], 'gamever': window[b[40553]][b[68006]], 'cdn': window['e1U0'][b[44414]], 'serverid': window['e1U0'][b[64264]] ? window['e1U0'][b[64264]][b[51198]] : 0x0, 'systemInfo': window[b[68013]], 'error': b[68014], 'stack': i$xqj3 ? i$xqj3[b[44415]] : '' },
        htrlz = JSON[b[44400]](ksqn9);console[b[40125]](b[68015] + htrlz), (!window[b[68004]] || window[b[68004]] != ksqn9[b[40125]]) && (window[b[68004]] = ksqn9[b[40125]], window['e11U'](ksqn9));
  }
});import 'eeemd5min.js';import 'eeezlibs.js';window[b[68016]] = require(b[68017]);import 'eeeindex.js';import 'eeelibsmin.js';import 'eeewxmini.js';import 'eeeinitmin.js';console[b[40078]](b[68018]), console[b[40078]](b[68019]), e11UG0({ 'title': b[68020] });var eyfv_ = { 'e1IG1U0': !![] };new window[b[68021]](eyfv_), window[b[68021]][b[40148]]['e1IG01U']();if (window['e1I10GU']) clearInterval(window['e1I10GU']);window['e1I10GU'] = null, window['e1IG0U1'] = function (jin3$, trlyzh) {
  if (!jin3$ || !trlyzh) return 0x0;jin3$ = jin3$[b[40015]]('.'), trlyzh = trlyzh[b[40015]]('.');const zhyrfl = Math[b[40848]](jin3$[b[40013]], trlyzh[b[40013]]);while (jin3$[b[40013]] < zhyrfl) {
    jin3$[b[40029]]('0');
  }while (trlyzh[b[40013]] < zhyrfl) {
    trlyzh[b[40029]]('0');
  }for (var ylhzrf = 0x0; ylhzrf < zhyrfl; ylhzrf++) {
    const w802d5 = parseInt(jin3$[ylhzrf]),
          qj3$ = parseInt(trlyzh[ylhzrf]);if (w802d5 > qj3$) return 0x1;else {
      if (w802d5 < qj3$) return -0x1;
    }
  }return 0x0;
}, window[b[68022]] = wx[b[68023]]()[b[68022]], console[b[40478]](b[68024] + window[b[68022]]);var ev4y = wx[b[68025]]();ev4y[b[68026]](function (nqj3s) {
  console[b[40478]](b[68027] + nqj3s[b[68028]]);
}), ev4y[b[68029]](function () {
  wx[b[68030]]({ 'title': b[68031], 'content': b[68032], 'showCancel': ![], 'success': function (d52w8) {
      ev4y[b[68033]]();
    } });
}), ev4y[b[68034]](function () {
  console[b[40478]](b[68035]);
}), window['e1IU1G0'] = function () {
  console[b[40478]](b[68036]);var j3nsu = wx[b[68037]]({ 'name': b[68038], 'success': function (b6s09k) {
      console[b[40478]](b[68039]), console[b[40478]](b6s09k), b6s09k && b6s09k[b[64448]] == b[68040] ? (window['e10G'] = !![], window['e10U1G'](), window['e10UG1']()) : setTimeout(function () {
        window['e1IU1G0']();
      }, 0x1f4);
    }, 'fail': function (aepcm) {
      console[b[40478]](b[68041]), console[b[40478]](aepcm), setTimeout(function () {
        window['e1IU1G0']();
      }, 0x1f4);
    } });j3nsu && j3nsu[b[68042]](b6k9d0 => {});
}, window['e1IUG10'] = function () {
  console[b[40478]](b[68043]);var d05k = wx[b[68037]]({ 'name': b[68044], 'success': function (zv_yf4) {
      console[b[40478]](b[68045]), console[b[40478]](zv_yf4), zv_yf4 && zv_yf4[b[64448]] == b[68040] ? (window['e1UG0'] = !![], window['e10U1G'](), window['e10UG1']()) : setTimeout(function () {
        window['e1IUG10']();
      }, 0x1f4);
    }, 'fail': function (n96k) {
      console[b[40478]](b[68046]), console[b[40478]](n96k), setTimeout(function () {
        window['e1IUG10']();
      }, 0x1f4);
    } });d05k && d05k[b[68042]](hlytz => {});
}, window[b[68047]] = function () {
  window['e1IG0U1'](window[b[68022]], b[68048]) >= 0x0 ? (console[b[40478]](b[68049] + window[b[68022]] + b[68050]), window['e1U1'](), window['e1IU1G0'](), window['e1IUG10']()) : (window['e1U01'](b[68051], window[b[68022]]), wx[b[68030]]({ 'title': b[46309], 'content': b[68052] }));
}, window[b[68013]] = '', wx[b[68053]]({ 'success'(z_vf4y) {
    window[b[68013]] = b[68054] + z_vf4y[b[68055]] + b[68056] + z_vf4y[b[68057]] + b[68058] + z_vf4y[b[44605]] + b[68059] + z_vf4y[b[40464]] + b[68060] + z_vf4y[b[64240]] + b[68061] + z_vf4y[b[68022]] + b[68062] + z_vf4y[b[49046]], console[b[40478]](window[b[68013]]), console[b[40478]](b[68063] + z_vf4y[b[68064]] + b[68065] + z_vf4y[b[68066]] + b[68067] + z_vf4y[b[68068]] + b[68069] + z_vf4y[b[68070]] + b[68071] + z_vf4y[b[68072]] + b[68073] + z_vf4y[b[68074]] + b[68075] + (z_vf4y[b[68076]] ? z_vf4y[b[68076]][b[40320]] + ',' + z_vf4y[b[68076]][b[41211]] + ',' + z_vf4y[b[68076]][b[41213]] + ',' + z_vf4y[b[68076]][b[41212]] : ''));var _fa47 = z_vf4y[b[40464]] ? z_vf4y[b[40464]][b[51857]]() : '',
        zyv4_f = z_vf4y[b[68057]] ? z_vf4y[b[68057]][b[51857]]()[b[44592]]('\x20', '') : '';window['e1U0'][b[40507]] = _fa47[b[40115]](b[67706]) != -0x1, window['e1U0'][b[51028]] = _fa47[b[40115]](b[67705]) != -0x1, window['e1U0'][b[68077]] = _fa47[b[40115]](b[67706]) != -0x1 || _fa47[b[40115]](b[67705]) != -0x1, window['e1U0'][b[63957]] = _fa47[b[40115]](b[68078]) != -0x1 || _fa47[b[40115]](b[67711]) != -0x1, window['e1U0'][b[68079]] = z_vf4y[b[64240]] ? z_vf4y[b[64240]][b[51857]]() : '', window['e1U0']['e1I1UG0'] = ![], window['e1U0']['e1I1U0G'] = 0x2;if (_fa47[b[40115]](b[67705]) != -0x1) {
      if (z_vf4y[b[49046]] >= 0x18) window['e1U0']['e1I1U0G'] = 0x3;else window['e1U0']['e1I1U0G'] = 0x2;
    } else {
      if (_fa47[b[40115]](b[67706]) != -0x1) {
        if (z_vf4y[b[49046]] && z_vf4y[b[49046]] >= 0x14) window['e1U0']['e1I1U0G'] = 0x3;else {
          if (zyv4_f[b[40115]](b[68080]) != -0x1 || zyv4_f[b[40115]](b[68081]) != -0x1 || zyv4_f[b[40115]](b[68082]) != -0x1 || zyv4_f[b[40115]](b[68083]) != -0x1 || zyv4_f[b[40115]](b[68084]) != -0x1) window['e1U0']['e1I1U0G'] = 0x2;else window['e1U0']['e1I1U0G'] = 0x3;
        }
      } else window['e1U0']['e1I1U0G'] = 0x2;
    }console[b[40478]](b[68085] + window['e1U0']['e1I1UG0'] + b[68086] + window['e1U0']['e1I1U0G']);
  } }), wx[b[68087]]({ 'success': function (wd8205) {
    console[b[40478]](b[68088] + wd8205[b[44510]] + b[68089] + wd8205[b[68090]]);
  } }), wx[b[68091]]({ 'success': function (qijx3$) {
    console[b[40478]](b[68092] + qijx3$[b[68093]]);
  } }), wx[b[68094]]({ 'keepScreenOn': !![] }), wx[b[68095]](function ($htgxl) {
  console[b[40478]](b[68092] + $htgxl[b[68093]] + b[68096] + $htgxl[b[68097]]);
}), wx[b[68098]](function (acmpo7) {
  window['e101G'] = acmpo7, window['e10G1'] && window['e101G'] && (console[b[40078]](b[68099] + window['e101G'][b[40771]]), window['e10G1'](window['e101G']), window['e101G'] = null);
}), window['e1IU01G'] = 0x0, window[b[68100]] = null, wx[b[68101]](function () {
  window['e1IU01G']++, wx[b[51460]]();if (window['e1IU01G'] >= 0x2) {
    window['e1IU01G'] = 0x0, console[b[40125]](b[68102]), wx[b[68103]]('0', 0x1);if (window['e1U0'] && window['e1U0'][b[40507]]) window['e1U01'](b[68104], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});