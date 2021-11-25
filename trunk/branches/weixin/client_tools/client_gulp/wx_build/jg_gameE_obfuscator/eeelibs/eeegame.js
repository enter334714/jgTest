var b = wx.$e;
console[b[40078]](b[68000]), window[b[68001]], wx[b[68002]](function (_4f) {
  if (_4f) {
    if (_4f[b[44415]]) {
      var f7_a4 = window[b[40553]][b[68003]][b[44592]](new RegExp(/\./, 'g'), '_'),
          i$lx = _4f[b[44415]],
          xgt = i$lx[b[51604]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);if (xgt) for (var capo7 = 0x0; capo7 < xgt[b[40013]]; capo7++) {
        if (xgt[capo7] && xgt[capo7][b[40013]] > 0x0) {
          var cmpae = parseInt(xgt[capo7][b[44592]](b[68004], '')[b[44592]](':', ''));i$lx = i$lx[b[44592]](xgt[capo7], xgt[capo7][b[44592]](':' + cmpae + ':', ':' + (cmpae - 0x2) + ':'));
        }
      }i$lx = i$lx[b[44592]](new RegExp(b[68005], 'g'), b[68006] + f7_a4 + b[64367]), i$lx = i$lx[b[44592]](new RegExp(b[68007], 'g'), b[68006] + f7_a4 + b[64367]), _4f[b[44415]] = i$lx;
    }var nq93us = { 'id': window['e1U0'][b[68008]], 'role': window['e1U0'][b[44534]], 'level': window['e1U0'][b[68009]], 'user': window['e1U0'][b[64269]], 'version': window['e1U0'][b[40101]], 'gamever': window[b[40553]][b[68003]], 'cdn': window['e1U0'][b[44414]], 'serverid': window['e1U0'][b[64264]] ? window['e1U0'][b[64264]][b[51198]] : 0x0, 'systemInfo': window[b[68010]], 'error': b[68011], 'stack': _4f ? _4f[b[44415]] : '' },
        ry4fv = JSON[b[44400]](nq93us);console[b[40125]](b[68012] + ry4fv), (!window[b[68001]] || window[b[68001]] != nq93us[b[40125]]) && (window[b[68001]] = nq93us[b[40125]], window['e11U'](nq93us));
  }
});import 'eeemd5min.js';import 'eeezlibs.js';window[b[68013]] = require(b[68014]);import 'eeeindex.js';import 'eeelibsmin.js';import 'eeewxmini.js';import 'eeeinitmin.js';console[b[40078]](b[68015]), console[b[40078]](b[68016]), e11UG0({ 'title': b[68017] });var eyflzrh = { 'e1IG1U0': !![] };new window[b[68018]](eyflzrh), window[b[68018]][b[40148]]['e1IG01U']();if (window['e1I10GU']) clearInterval(window['e1I10GU']);window['e1I10GU'] = null, window['e1IG0U1'] = function (xitlg, d8wb5) {
  if (!xitlg || !d8wb5) return 0x0;xitlg = xitlg[b[40015]]('.'), d8wb5 = d8wb5[b[40015]]('.');const iqn$j3 = Math[b[40848]](xitlg[b[40013]], d8wb5[b[40013]]);while (xitlg[b[40013]] < iqn$j3) {
    xitlg[b[40029]]('0');
  }while (d8wb5[b[40013]] < iqn$j3) {
    d8wb5[b[40029]]('0');
  }for (var b6u9k = 0x0; b6u9k < iqn$j3; b6u9k++) {
    const t$xigj = parseInt(xitlg[b6u9k]),
          uqjn3s = parseInt(d8wb5[b6u9k]);if (t$xigj > uqjn3s) return 0x1;else {
      if (t$xigj < uqjn3s) return -0x1;
    }
  }return 0x0;
}, window[b[68019]] = wx[b[68020]]()[b[68019]], console[b[40478]](b[68021] + window[b[68019]]);var eusqn3j = wx[b[68022]]();eusqn3j[b[68023]](function (v4zyfr) {
  console[b[40478]](b[68024] + v4zyfr[b[68025]]);
}), eusqn3j[b[68026]](function () {
  wx[b[68027]]({ 'title': b[68028], 'content': b[68029], 'showCancel': ![], 'success': function (n93u) {
      eusqn3j[b[68030]]();
    } });
}), eusqn3j[b[68031]](function () {
  console[b[40478]](b[68032]);
}), window['e1IU1G0'] = function () {
  console[b[40478]](b[68033]);var gtxl$ = wx[b[68034]]({ 'name': b[68035], 'success': function ($i3jqn) {
      console[b[40478]](b[68036]), console[b[40478]]($i3jqn), $i3jqn && $i3jqn[b[64448]] == b[68037] ? (window['e10G'] = !![], window['e10U1G'](), window['e10UG1']()) : setTimeout(function () {
        window['e1IU1G0']();
      }, 0x1f4);
    }, 'fail': function (zth) {
      console[b[40478]](b[68038]), console[b[40478]](zth), setTimeout(function () {
        window['e1IU1G0']();
      }, 0x1f4);
    } });gtxl$ && gtxl$[b[68039]](xjg$t => {});
}, window['e1IUG10'] = function () {
  console[b[40478]](b[68040]);var lhtx = wx[b[68034]]({ 'name': b[68041], 'success': function (vf4ryz) {
      console[b[40478]](b[68042]), console[b[40478]](vf4ryz), vf4ryz && vf4ryz[b[64448]] == b[68037] ? (window['e1UG0'] = !![], window['e10U1G'](), window['e10UG1']()) : setTimeout(function () {
        window['e1IUG10']();
      }, 0x1f4);
    }, 'fail': function (tzglh) {
      console[b[40478]](b[68043]), console[b[40478]](tzglh), setTimeout(function () {
        window['e1IUG10']();
      }, 0x1f4);
    } });lhtx && lhtx[b[68039]](fhzyl => {});
}, window[b[68044]] = function () {
  window['e1IG0U1'](window[b[68019]], b[68045]) >= 0x0 ? (console[b[40478]](b[68046] + window[b[68019]] + b[68047]), window['e1U1'](), window['e1IU1G0'](), window['e1IUG10']()) : (window['e1U01'](b[68048], window[b[68019]]), wx[b[68027]]({ 'title': b[46309], 'content': b[68049] }));
}, window[b[68010]] = '', wx[b[68050]]({ 'success'(rfyzvh) {
    window[b[68010]] = b[68051] + rfyzvh[b[68052]] + b[68053] + rfyzvh[b[68054]] + b[68055] + rfyzvh[b[44605]] + b[68056] + rfyzvh[b[40464]] + b[68057] + rfyzvh[b[64240]] + b[68058] + rfyzvh[b[68019]] + b[68059] + rfyzvh[b[49046]], console[b[40478]](window[b[68010]]), console[b[40478]](b[68060] + rfyzvh[b[68061]] + b[68062] + rfyzvh[b[68063]] + b[68064] + rfyzvh[b[68065]] + b[68066] + rfyzvh[b[68067]] + b[68068] + rfyzvh[b[68069]] + b[68070] + rfyzvh[b[68071]] + b[68072] + (rfyzvh[b[68073]] ? rfyzvh[b[68073]][b[40320]] + ',' + rfyzvh[b[68073]][b[41211]] + ',' + rfyzvh[b[68073]][b[41213]] + ',' + rfyzvh[b[68073]][b[41212]] : ''));var zrfvh = rfyzvh[b[40464]] ? rfyzvh[b[40464]][b[51857]]() : '',
        vy4fr = rfyzvh[b[68054]] ? rfyzvh[b[68054]][b[51857]]()[b[44592]]('\x20', '') : '';window['e1U0'][b[40507]] = zrfvh[b[40115]](b[67706]) != -0x1, window['e1U0'][b[51028]] = zrfvh[b[40115]](b[67705]) != -0x1, window['e1U0'][b[68074]] = zrfvh[b[40115]](b[67706]) != -0x1 || zrfvh[b[40115]](b[67705]) != -0x1, window['e1U0'][b[63957]] = zrfvh[b[40115]](b[68075]) != -0x1 || zrfvh[b[40115]](b[67711]) != -0x1, window['e1U0'][b[68076]] = rfyzvh[b[64240]] ? rfyzvh[b[64240]][b[51857]]() : '', window['e1U0']['e1I1UG0'] = ![], window['e1U0']['e1I1U0G'] = 0x2;if (zrfvh[b[40115]](b[67705]) != -0x1) {
      if (rfyzvh[b[49046]] >= 0x18) window['e1U0']['e1I1U0G'] = 0x3;else window['e1U0']['e1I1U0G'] = 0x2;
    } else {
      if (zrfvh[b[40115]](b[67706]) != -0x1) {
        if (rfyzvh[b[49046]] && rfyzvh[b[49046]] >= 0x14) window['e1U0']['e1I1U0G'] = 0x3;else {
          if (vy4fr[b[40115]](b[68077]) != -0x1 || vy4fr[b[40115]](b[68078]) != -0x1 || vy4fr[b[40115]](b[68079]) != -0x1 || vy4fr[b[40115]](b[68080]) != -0x1 || vy4fr[b[40115]](b[68081]) != -0x1) window['e1U0']['e1I1U0G'] = 0x2;else window['e1U0']['e1I1U0G'] = 0x3;
        }
      } else window['e1U0']['e1I1U0G'] = 0x2;
    }console[b[40478]](b[68082] + window['e1U0']['e1I1UG0'] + b[68083] + window['e1U0']['e1I1U0G']);
  } }), wx[b[68084]]({ 'success': function (acp7om) {
    console[b[40478]](b[68085] + acp7om[b[44510]] + b[68086] + acp7om[b[68087]]);
  } }), wx[b[68088]]({ 'success': function (yfrv4z) {
    console[b[40478]](b[68089] + yfrv4z[b[68090]]);
  } }), wx[b[68091]]({ 'keepScreenOn': !![] }), wx[b[68092]](function (z_y4vf) {
  console[b[40478]](b[68089] + z_y4vf[b[68090]] + b[68093] + z_y4vf[b[68094]]);
}), wx[b[68095]](function (yfzv4) {
  window['e101G'] = yfzv4, window['e10G1'] && window['e101G'] && (console[b[40078]](b[68096] + window['e101G'][b[40771]]), window['e10G1'](window['e101G']), window['e101G'] = null);
}), window['e1IU01G'] = 0x0, window[b[68097]] = null, wx[b[68098]](function () {
  window['e1IU01G']++, wx[b[51460]]();if (window['e1IU01G'] >= 0x2) {
    window['e1IU01G'] = 0x0, console[b[40125]](b[68099]), wx[b[68100]]('0', 0x1);if (window['e1U0'] && window['e1U0'][b[40507]]) window['e1U01'](b[68101], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});