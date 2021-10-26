var m = wx.$g;
console[m[72]](m[26376]), window[m[26377]], wx[m[26378]](function (bkt8rp) {
  if (bkt8rp) {
    if (bkt8rp[m[4029]]) {
      var s5qg3c = window[m[528]][m[26379]][m[4203]](new RegExp(/\./, 'g'), '_'),
          l6$f = bkt8rp[m[4029]],
          sx2c54 = l6$f[m[10753]](/(gggggggg\/gggggame.js:)[0-9]{1,60}(:)/g);if (sx2c54) for (var t8pr1 = 0x0; t8pr1 < sx2c54[m[13]]; t8pr1++) {
        if (sx2c54[t8pr1] && sx2c54[t8pr1][m[13]] > 0x0) {
          var leog$q = parseInt(sx2c54[t8pr1][m[4203]](m[26380], '')[m[4203]](':', ''));l6$f = l6$f[m[4203]](sx2c54[t8pr1], sx2c54[t8pr1][m[4203]](':' + leog$q + ':', ':' + (leog$q - 0x2) + ':'));
        }
      }l6$f = l6$f[m[4203]](new RegExp(m[26381], 'g'), m[26382] + s5qg3c + m[23200]), l6$f = l6$f[m[4203]](new RegExp(m[26383], 'g'), m[26382] + s5qg3c + m[23200]), bkt8rp[m[4029]] = l6$f;
    }var glq3o = { 'id': window['G$S2'][m[26384]], 'role': window['G$S2'][m[4147]], 'level': window['G$S2'][m[26385]], 'user': window['G$S2'][m[23107]], 'version': window['G$S2'][m[95]], 'gamever': window[m[528]][m[26379]], 'cdn': window['G$S2'][m[4028]], 'serverid': window['G$S2'][m[23102]] ? window['G$S2'][m[23102]][m[10357]] : 0x0, 'systemInfo': window[m[26386]], 'error': m[26387], 'stack': bkt8rp ? bkt8rp[m[4029]] : '' },
        d98_ = JSON[m[4014]](glq3o);console[m[119]](m[26388] + d98_), (!window[m[26377]] || window[m[26377]] != glq3o[m[119]]) && (window[m[26377]] = glq3o[m[119]], window['G$CS'](glq3o));
  }
});import 'gggmd5min.js';import 'gggzlibs.js';window[m[26389]] = require(m[26390]);import 'gggindex.js';import 'ggglibsmin.js';import 'gggwxmini.js';import 'ggginitmin.js';import 'XingJuBox.js';console[m[72]](m[26391]), console[m[72]](m[26392]), G$CSZ2({ 'title': m[26393] });var g$feoh = { 'G$YZCS2': !![] };new window[m[26394]](g$feoh), window[m[26394]][m[139]]['G$YZ2CS']();if (window['G$YC2ZS']) clearInterval(window['G$YC2ZS']);window['G$YC2ZS'] = null, window['G$YZ2SC'] = function (ktbpr8, c453s) {
  if (!ktbpr8 || !c453s) return 0x0;ktbpr8 = ktbpr8[m[15]]('.'), c453s = c453s[m[15]]('.');const cgsq = Math[m[800]](ktbpr8[m[13]], c453s[m[13]]);while (ktbpr8[m[13]] < cgsq) {
    ktbpr8[m[29]]('0');
  }while (c453s[m[13]] < cgsq) {
    c453s[m[29]]('0');
  }for (var ivapb = 0x0; ivapb < cgsq; ivapb++) {
    const x024sc = parseInt(ktbpr8[ivapb]),
          x240sc = parseInt(c453s[ivapb]);if (x024sc > x240sc) return 0x1;else {
      if (x024sc < x240sc) return -0x1;
    }
  }return 0x0;
}, window[m[26395]] = wx[m[26396]]()[m[26395]], console[m[454]](m[26397] + window[m[26395]]);var gk8t_ = wx[m[26398]]();gk8t_[m[26399]](function (yd7j0) {
  console[m[454]](m[26400] + yd7j0[m[26401]]);
}), gk8t_[m[26402]](function () {
  wx[m[26403]]({ 'title': m[26404], 'content': m[26405], 'showCancel': ![], 'success': function ($eohf) {
      gk8t_[m[26406]]();
    } });
}), gk8t_[m[26407]](function () {
  console[m[454]](m[26408]);
}), window['G$YSCZ2'] = function () {
  console[m[454]](m[26409]);var tk8pbr = wx[m[26410]]({ 'name': m[26411], 'success': function (rk7) {
      console[m[454]](m[26412]), console[m[454]](rk7), rk7 && rk7[m[23272]] == m[26413] ? (window['G$2Z'] = !![], window['G$2SCZ'](), window['G$2SZC']()) : setTimeout(function () {
        window['G$YSCZ2']();
      }, 0x1f4);
    }, 'fail': function (oeql$g) {
      console[m[454]](m[26414]), console[m[454]](oeql$g), setTimeout(function () {
        window['G$YSCZ2']();
      }, 0x1f4);
    } });tk8pbr && tk8pbr[m[26415]](bipa1 => {});
}, window['G$YSZC2'] = function () {
  console[m[454]](m[26416]);var qcs53 = wx[m[26410]]({ 'name': m[26417], 'success': function (kd_9j) {
      console[m[454]](m[26418]), console[m[454]](kd_9j), kd_9j && kd_9j[m[23272]] == m[26413] ? (window['G$SZ2'] = !![], window['G$2SCZ'](), window['G$2SZC']()) : setTimeout(function () {
        window['G$YSZC2']();
      }, 0x1f4);
    }, 'fail': function (a1pbv) {
      console[m[454]](m[26419]), console[m[454]](a1pbv), setTimeout(function () {
        window['G$YSZC2']();
      }, 0x1f4);
    } });qcs53 && qcs53[m[26415]](wf$hl6 => {});
}, window[m[26420]] = function () {
  window['G$YZ2SC'](window[m[26395]], m[26421]) >= 0x0 ? (console[m[454]](m[26422] + window[m[26395]] + m[26423]), window['G$SC'](), window['G$YSCZ2'](), window['G$YSZC2']()) : (window['G$S2C'](m[26424], window[m[26395]]), wx[m[26403]]({ 'title': m[5870], 'content': m[26425] }));
}, window[m[26386]] = '', wx[m[26426]]({ 'success'(lhoe) {
    window[m[26386]] = m[26427] + lhoe[m[26428]] + m[26429] + lhoe[m[26430]] + m[26431] + lhoe[m[4216]] + m[26432] + lhoe[m[447]] + m[26433] + lhoe[m[23080]] + m[26434] + lhoe[m[26395]] + m[26435] + lhoe[m[8448]], console[m[454]](window[m[26386]]), console[m[454]](m[26436] + lhoe[m[26437]] + m[26438] + lhoe[m[26439]] + m[26440] + lhoe[m[26441]] + m[26442] + lhoe[m[26443]] + m[26444] + lhoe[m[26445]] + m[26446] + lhoe[m[26447]] + m[26448] + (lhoe[m[26449]] ? lhoe[m[26449]][m[309]] + ',' + lhoe[m[26449]][m[1110]] + ',' + lhoe[m[26449]][m[1112]] + ',' + lhoe[m[26449]][m[1111]] : ''));var _j79y = lhoe[m[447]] ? lhoe[m[447]][m[10994]]() : '',
        lfoe$h = lhoe[m[26430]] ? lhoe[m[26430]][m[10994]]()[m[4203]]('\x20', '') : '';window['G$S2'][m[484]] = _j79y[m[109]](m[26450]) != -0x1, window['G$S2'][m[10194]] = _j79y[m[109]](m[26451]) != -0x1, window['G$S2'][m[26452]] = _j79y[m[109]](m[26450]) != -0x1 || _j79y[m[109]](m[26451]) != -0x1, window['G$S2'][m[22814]] = _j79y[m[109]](m[26453]) != -0x1 || _j79y[m[109]](m[26454]) != -0x1, window['G$S2'][m[26455]] = lhoe[m[23080]] ? lhoe[m[23080]][m[10994]]() : '', window['G$S2']['G$YCSZ2'] = ![], window['G$S2']['G$YCS2Z'] = 0x2;if (_j79y[m[109]](m[26451]) != -0x1) {
      if (lhoe[m[8448]] >= 0x18) window['G$S2']['G$YCS2Z'] = 0x3;else window['G$S2']['G$YCS2Z'] = 0x2;
    } else {
      if (_j79y[m[109]](m[26450]) != -0x1) {
        if (lhoe[m[8448]] && lhoe[m[8448]] >= 0x14) window['G$S2']['G$YCS2Z'] = 0x3;else {
          if (lfoe$h[m[109]](m[26456]) != -0x1 || lfoe$h[m[109]](m[26457]) != -0x1 || lfoe$h[m[109]](m[26458]) != -0x1 || lfoe$h[m[109]](m[26459]) != -0x1 || lfoe$h[m[109]](m[26460]) != -0x1) window['G$S2']['G$YCS2Z'] = 0x2;else window['G$S2']['G$YCS2Z'] = 0x3;
        }
      } else window['G$S2']['G$YCS2Z'] = 0x2;
    }console[m[454]](m[26461] + window['G$S2']['G$YCSZ2'] + m[26462] + window['G$S2']['G$YCS2Z']);
  } }), wx[m[26463]]({ 'success': function (vbr1p) {
    console[m[454]](m[26464] + vbr1p[m[4123]] + m[26465] + vbr1p[m[26466]]);
  } }), wx[m[26467]]({ 'success': function (x2y0j) {
    console[m[454]](m[26468] + x2y0j[m[26469]]);
  } }), wx[m[26470]]({ 'keepScreenOn': !![] }), wx[m[26471]](function (sc34x5) {
  console[m[454]](m[26468] + sc34x5[m[26469]] + m[26472] + sc34x5[m[26473]]);
}), wx[m[26474]](function (c4s02) {
  window['G$2CZ'] = c4s02, window['G$2ZC'] && window['G$2CZ'] && (console[m[72]](m[26475] + window['G$2CZ'][m[729]]), window['G$2ZC'](window['G$2CZ']), window['G$2CZ'] = null);
}), window['G$YS2CZ'] = 0x0, window[m[26476]] = null, wx[m[26477]](function () {
  window['G$YS2CZ']++, wx['triggerGC']();if (window['G$YS2CZ'] >= 0x2) {
    window['G$YS2CZ'] = 0x0, console[m[119]](m[26478]), wx[m[26479]]('0', 0x1);if (window['G$S2'] && window['G$S2'][m[484]]) window['G$S2C'](m[26480], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});