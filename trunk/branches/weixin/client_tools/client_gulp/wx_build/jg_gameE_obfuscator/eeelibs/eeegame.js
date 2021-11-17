var b = wx.$e;
console[b[40078]](b[67976]), window[b[67977]], wx[b[67978]](function (_c4am) {
  if (_c4am) {
    if (_c4am[b[44407]]) {
      var ji3g = window[b[40547]][b[67979]][b[44582]](new RegExp(/\./, 'g'), '_'),
          lrhzty = _c4am[b[44407]],
          zyrv4 = lrhzty[b[51592]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);if (zyrv4) for (var amo7p = 0x0; amo7p < zyrv4[b[40013]]; amo7p++) {
        if (zyrv4[amo7p] && zyrv4[amo7p][b[40013]] > 0x0) {
          var ztyhl = parseInt(zyrv4[amo7p][b[44582]](b[67980], '')[b[44582]](':', ''));lrhzty = lrhzty[b[44582]](zyrv4[amo7p], zyrv4[amo7p][b[44582]](':' + ztyhl + ':', ':' + (ztyhl - 0x2) + ':'));
        }
      }lrhzty = lrhzty[b[44582]](new RegExp(b[67981], 'g'), b[67982] + ji3g + b[64353]), lrhzty = lrhzty[b[44582]](new RegExp(b[67983], 'g'), b[67982] + ji3g + b[64353]), _c4am[b[44407]] = lrhzty;
    }var coma_ = { 'id': window['e1U0'][b[67984]], 'role': window['e1U0'][b[44524]], 'level': window['e1U0'][b[67985]], 'user': window['e1U0'][b[64255]], 'version': window['e1U0'][b[40101]], 'gamever': window[b[40547]][b[67979]], 'cdn': window['e1U0'][b[44406]], 'serverid': window['e1U0'][b[64250]] ? window['e1U0'][b[64250]][b[51188]] : 0x0, 'systemInfo': window[b[67986]], 'error': b[67987], 'stack': _c4am ? _c4am[b[44407]] : '' },
        xigt$l = JSON[b[44392]](coma_);console[b[40125]](b[67988] + xigt$l), (!window[b[67977]] || window[b[67977]] != coma_[b[40125]]) && (window[b[67977]] = coma_[b[40125]], window['e11U'](coma_));
  }
});import 'eeemd5min.js';import 'eeezlibs.js';window[b[67989]] = require(b[67990]);import 'eeeindex.js';import 'eeelibsmin.js';import 'eeewxmini.js';import 'eeeinitmin.js';console[b[40078]](b[67991]), console[b[40078]](b[67992]), e11UG0({ 'title': b[67993] });var elgxth = { 'e1IG1U0': !![] };new window[b[67994]](elgxth), window[b[67994]][b[40148]]['e1IG01U']();if (window['e1I10GU']) clearInterval(window['e1I10GU']);window['e1I10GU'] = null, window['e1IG0U1'] = function (n9ksq, gxtl) {
  if (!n9ksq || !gxtl) return 0x0;n9ksq = n9ksq[b[40015]]('.'), gxtl = gxtl[b[40015]]('.');const aomepc = Math[b[40842]](n9ksq[b[40013]], gxtl[b[40013]]);while (n9ksq[b[40013]] < aomepc) {
    n9ksq[b[40029]]('0');
  }while (gxtl[b[40013]] < aomepc) {
    gxtl[b[40029]]('0');
  }for (var x$qji = 0x0; x$qji < aomepc; x$qji++) {
    const yzt = parseInt(n9ksq[x$qji]),
          $q3ij = parseInt(gxtl[x$qji]);if (yzt > $q3ij) return 0x1;else {
      if (yzt < $q3ij) return -0x1;
    }
  }return 0x0;
}, window[b[67995]] = wx[b[67996]]()[b[67995]], console[b[40471]](b[67997] + window[b[67995]]);var ehztlg = wx[b[67998]]();ehztlg[b[67999]](function (yfrl) {
  console[b[40471]](b[68000] + yfrl[b[68001]]);
}), ehztlg[b[68002]](function () {
  wx[b[68003]]({ 'title': b[68004], 'content': b[68005], 'showCancel': ![], 'success': function (a74c) {
      ehztlg[b[68006]]();
    } });
}), ehztlg[b[68007]](function () {
  console[b[40471]](b[68008]);
}), window['e1IU1G0'] = function () {
  console[b[40471]](b[68009]);var bsk069 = wx[b[68010]]({ 'name': b[68011], 'success': function (j$g3x) {
      console[b[40471]](b[68012]), console[b[40471]](j$g3x), j$g3x && j$g3x[b[64434]] == b[68013] ? (window['e10G'] = !![], window['e10U1G'](), window['e10UG1']()) : setTimeout(function () {
        window['e1IU1G0']();
      }, 0x1f4);
    }, 'fail': function (zhyvfr) {
      console[b[40471]](b[68014]), console[b[40471]](zhyvfr), setTimeout(function () {
        window['e1IU1G0']();
      }, 0x1f4);
    } });bsk069 && bsk069[b[68015]](zy4vr => {});
}, window['e1IUG10'] = function () {
  console[b[40471]](b[68016]);var fa_74 = wx[b[68010]]({ 'name': b[68017], 'success': function (opcaem) {
      console[b[40471]](b[68018]), console[b[40471]](opcaem), opcaem && opcaem[b[64434]] == b[68013] ? (window['e1UG0'] = !![], window['e10U1G'](), window['e10UG1']()) : setTimeout(function () {
        window['e1IUG10']();
      }, 0x1f4);
    }, 'fail': function (_vam) {
      console[b[40471]](b[68019]), console[b[40471]](_vam), setTimeout(function () {
        window['e1IUG10']();
      }, 0x1f4);
    } });fa_74 && fa_74[b[68015]](d690k => {});
}, window[b[68020]] = function () {
  window['e1IG0U1'](window[b[67995]], b[68021]) >= 0x0 ? (console[b[40471]](b[68022] + window[b[67995]] + b[68023]), window['e1U1'](), window['e1IU1G0'](), window['e1IUG10']()) : (window['e1U01'](b[68024], window[b[67995]]), wx[b[68003]]({ 'title': b[46299], 'content': b[68025] }));
}, window[b[67986]] = '', wx[b[68026]]({ 'success'(d8wb5) {
    window[b[67986]] = b[68027] + d8wb5[b[68028]] + b[68029] + d8wb5[b[68030]] + b[68031] + d8wb5[b[44595]] + b[68032] + d8wb5[b[40464]] + b[68033] + d8wb5[b[64226]] + b[68034] + d8wb5[b[67995]] + b[68035] + d8wb5[b[49036]], console[b[40471]](window[b[67986]]), console[b[40471]](b[68036] + d8wb5[b[68037]] + b[68038] + d8wb5[b[68039]] + b[68040] + d8wb5[b[68041]] + b[68042] + d8wb5[b[68043]] + b[68044] + d8wb5[b[68045]] + b[68046] + d8wb5[b[68047]] + b[68048] + (d8wb5[b[68049]] ? d8wb5[b[68049]][b[40320]] + ',' + d8wb5[b[68049]][b[41205]] + ',' + d8wb5[b[68049]][b[41207]] + ',' + d8wb5[b[68049]][b[41206]] : ''));var zylfh = d8wb5[b[40464]] ? d8wb5[b[40464]][b[51845]]() : '',
        opmc7 = d8wb5[b[68030]] ? d8wb5[b[68030]][b[51845]]()[b[44582]]('\x20', '') : '';window['e1U0'][b[40501]] = zylfh[b[40115]](b[67690]) != -0x1, window['e1U0'][b[51018]] = zylfh[b[40115]](b[67689]) != -0x1, window['e1U0'][b[68050]] = zylfh[b[40115]](b[67690]) != -0x1 || zylfh[b[40115]](b[67689]) != -0x1, window['e1U0'][b[63943]] = zylfh[b[40115]](b[68051]) != -0x1 || zylfh[b[40115]](b[67695]) != -0x1, window['e1U0'][b[68052]] = d8wb5[b[64226]] ? d8wb5[b[64226]][b[51845]]() : '', window['e1U0']['e1I1UG0'] = ![], window['e1U0']['e1I1U0G'] = 0x2;if (zylfh[b[40115]](b[67689]) != -0x1) {
      if (d8wb5[b[49036]] >= 0x18) window['e1U0']['e1I1U0G'] = 0x3;else window['e1U0']['e1I1U0G'] = 0x2;
    } else {
      if (zylfh[b[40115]](b[67690]) != -0x1) {
        if (d8wb5[b[49036]] && d8wb5[b[49036]] >= 0x14) window['e1U0']['e1I1U0G'] = 0x3;else {
          if (opmc7[b[40115]](b[68053]) != -0x1 || opmc7[b[40115]](b[68054]) != -0x1 || opmc7[b[40115]](b[68055]) != -0x1 || opmc7[b[40115]](b[68056]) != -0x1 || opmc7[b[40115]](b[68057]) != -0x1) window['e1U0']['e1I1U0G'] = 0x2;else window['e1U0']['e1I1U0G'] = 0x3;
        }
      } else window['e1U0']['e1I1U0G'] = 0x2;
    }console[b[40471]](b[68058] + window['e1U0']['e1I1UG0'] + b[68059] + window['e1U0']['e1I1U0G']);
  } }), wx[b[68060]]({ 'success': function (xj$i3) {
    console[b[40471]](b[68061] + xj$i3[b[44500]] + b[68062] + xj$i3[b[68063]]);
  } }), wx[b[68064]]({ 'success': function (tjxi$) {
    console[b[40471]](b[68065] + tjxi$[b[68066]]);
  } }), wx[b[68067]]({ 'keepScreenOn': !![] }), wx[b[68068]](function (y4vzf_) {
  console[b[40471]](b[68065] + y4vzf_[b[68066]] + b[68069] + y4vzf_[b[68070]]);
}), wx[b[68071]](function (i$qjx3) {
  window['e101G'] = i$qjx3, window['e10G1'] && window['e101G'] && (console[b[40078]](b[68072] + window['e101G'][b[40765]]), window['e10G1'](window['e101G']), window['e101G'] = null);
}), window['e1IU01G'] = 0x0, window[b[68073]] = null, wx[b[68074]](function () {
  window['e1IU01G']++, wx[b[51450]]();if (window['e1IU01G'] >= 0x2) {
    window['e1IU01G'] = 0x0, console[b[40125]](b[68075]), wx[b[68076]]('0', 0x1);if (window['e1U0'] && window['e1U0'][b[40501]]) window['e1U01'](b[68077], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});