var D = wx.$b;
console[D[500994]](D[500995]), window[D[500996]], wx[D[500997]](function (wu$ay7) {
  if (wu$ay7) {
    if (wu$ay7[D[500051]]) {
      var cmis = window[D[500998]][D[500999]][D[500240]](new RegExp(/\./, 'g'), '_'),
          l2teo = wu$ay7[D[500051]],
          q5olj = l2teo[D[500062]](/(BBBBB\/B2GBMEB2.js:)[0-9]{1,60}(:)/g);if (q5olj) for (var fd4_07 = 0x0; fd4_07 < q5olj[D[500026]]; fd4_07++) {
        if (q5olj[fd4_07] && q5olj[fd4_07][D[500026]] > 0x0) {
          var eot = parseInt(q5olj[fd4_07][D[500240]](D[501000], '')[D[500240]](':', ''));l2teo = l2teo[D[500240]](q5olj[fd4_07], q5olj[fd4_07][D[500240]](':' + eot + ':', ':' + (eot - 0x2) + ':'));
        }
      }l2teo = l2teo[D[500240]](new RegExp(D[501001], 'g'), D[501002] + cmis + D[501003]), l2teo = l2teo[D[500240]](new RegExp(D[501004], 'g'), D[501002] + cmis + D[501003]), wu$ay7[D[500051]] = l2teo;
    }var m4 = { 'id': window['b1V$'][D[501005]], 'role': window['b1V$'][D[501006]], 'level': window['b1V$'][D[501007]], 'user': window['b1V$'][D[501008]], 'version': window['b1V$'][D[501009]], 'gamever': window[D[500998]][D[500999]], 'cdn': window['b1V$'][D[501010]], 'serverid': window['b1V$'][D[501011]] ? window['b1V$'][D[501011]][D[500969]] : 0x0, 'systemInfo': window[D[501012]], 'error': D[501013], 'stack': wu$ay7 ? wu$ay7[D[500051]] : '' },
        f4md_ = JSON[D[501014]](m4);console[D[500330]](D[501015] + f4md_), (!window[D[500996]] || window[D[500996]] != m4[D[500330]]) && (window[D[500996]] = m4[D[500330]], window['b1OV'](m4));
  }
});import 'BBbfBB.js';import 'BB11BB.js';window[D[501016]] = require(D[501017]);import 'BINDBB.js';import 'BBIB1BB.js';import 'BBMtadBB.js';import 'BBINIBaB.js';console[D[500994]](D[501018]), console[D[500994]](D[501019]), b1OV1$({ 'title': D[501020] });var bs1h2c = { 'b1FO$V1': !![] };new window[D[501021]](bs1h2c), window[D[501021]][D[501022]]['b1F1V$O']();if (window['b1FOV$1']) clearInterval(window['b1FOV$1']);window['b1FOV$1'] = null, window['b1F1$OV'] = function (f_ms40, eht2lo) {
  if (!f_ms40 || !eht2lo) return 0x0;f_ms40 = f_ms40[D[500197]]('.'), eht2lo = eht2lo[D[500197]]('.');const fim1c = Math[D[500298]](f_ms40[D[500026]], eht2lo[D[500026]]);while (f_ms40[D[500026]] < fim1c) {
    f_ms40[D[500061]]('0');
  }while (eht2lo[D[500026]] < fim1c) {
    eht2lo[D[500061]]('0');
  }for (var $38zau = 0x0; $38zau < fim1c; $38zau++) {
    const i2ot = parseInt(f_ms40[$38zau]),
          q6jl59 = parseInt(eht2lo[$38zau]);if (i2ot > q6jl59) return 0x1;else {
      if (i2ot < q6jl59) return -0x1;
    }
  }return 0x0;
}, window[D[501023]] = wx[D[501024]]()[D[501023]], console[D[500222]](D[501025] + window[D[501023]]);var brgkvp = wx[D[501026]]();brgkvp[D[501027]](function (f1msc) {
  console[D[500222]](D[501028] + f1msc[D[501029]]);
}), brgkvp[D[501030]](function () {
  wx[D[501031]]({ 'title': D[501032], 'content': D[501033], 'showCancel': ![], 'success': function (dwuy7) {
      brgkvp[D[501034]]();
    } });
}), brgkvp[D[501035]](function () {
  console[D[500222]](D[501036]);
}), window['b1F1$VO'] = function () {
  console[D[500222]](D[501037]);var thoie2 = wx[D[501038]]({ 'name': D[501039], 'success': function (tolej) {
      console[D[500222]](D[501040]), console[D[500222]](tolej), tolej && tolej[D[501041]] == D[501042] ? (window['b1$1'] = !![], window['b1$1VO'](), window['b1$VO1']()) : setTimeout(function () {
        window['b1F1$VO']();
      }, 0x1f4);
    }, 'fail': function (df04_7) {
      console[D[500222]](D[501043]), console[D[500222]](df04_7), setTimeout(function () {
        window['b1F1$VO']();
      }, 0x1f4);
    } });thoie2 && thoie2[D[501044]](vgk5 => {});
}, window['b1FVO$1'] = function () {
  console[D[500222]](D[501045]);var i1th2 = wx[D[501038]]({ 'name': D[501046], 'success': function (ojtl2) {
      console[D[500222]](D[501047]), console[D[500222]](ojtl2), ojtl2 && ojtl2[D[501041]] == D[501042] ? (window['b1V1$'] = !![], window['b1$1VO'](), window['b1$VO1']()) : setTimeout(function () {
        window['b1FVO$1']();
      }, 0x1f4);
    }, 'fail': function (k56gr) {
      console[D[500222]](D[501048]), console[D[500222]](k56gr), setTimeout(function () {
        window['b1FVO$1']();
      }, 0x1f4);
    } });i1th2 && i1th2[D[501044]](dwu => {});
}, window[D[501049]] = function () {
  window['b1F1$OV'](window[D[501023]], D[501050]) >= 0x0 ? (console[D[500222]](D[501051] + window[D[501023]] + D[501052]), window['b1VO'](), window['b1F1$VO'](), window['b1FVO$1']()) : (window['b1V$O'](D[501053], window[D[501023]]), wx[D[501031]]({ 'title': D[501054], 'content': D[501055] }));
}, window[D[501012]] = '', wx[D[501056]]({ 'success'(fm0s4_) {
    window[D[501012]] = D[501057] + fm0s4_[D[501058]] + D[501059] + fm0s4_[D[501060]] + D[501061] + fm0s4_[D[501062]] + D[501063] + fm0s4_[D[501064]] + D[501065] + fm0s4_[D[501066]] + D[501067] + fm0s4_[D[501023]] + D[501068] + fm0s4_[D[501069]], console[D[500222]](window[D[501012]]), console[D[500222]](D[501070] + fm0s4_[D[501071]] + D[501072] + fm0s4_[D[501073]] + D[501074] + fm0s4_[D[501075]] + D[501076] + fm0s4_[D[501077]] + D[501078] + fm0s4_[D[501079]] + D[501080] + fm0s4_[D[501081]] + D[501082] + (fm0s4_[D[501083]] ? fm0s4_[D[501083]][D[501084]] + ',' + fm0s4_[D[501083]][D[501085]] + ',' + fm0s4_[D[501083]][D[501086]] + ',' + fm0s4_[D[501083]][D[501087]] : ''));var wa4y = fm0s4_[D[501064]] ? fm0s4_[D[501064]][D[500099]]() : '',
        rkv6p = fm0s4_[D[501060]] ? fm0s4_[D[501060]][D[500099]]()[D[500240]]('\x20', '') : '';window['b1V$'][D[501088]] = wa4y[D[500142]](D[501089]) != -0x1, window['b1V$'][D[501090]] = wa4y[D[500142]](D[500982]) != -0x1, window['b1V$'][D[501091]] = wa4y[D[500142]](D[501089]) != -0x1 || wa4y[D[500142]](D[500982]) != -0x1, window['b1V$'][D[501092]] = wa4y[D[500142]](D[501093]) != -0x1 || wa4y[D[500142]](D[501094]) != -0x1, window['b1V$'][D[501095]] = fm0s4_[D[501066]] ? fm0s4_[D[501066]][D[500099]]() : '', window['b1V$']['b1FO1$V'] = ![], window['b1V$']['b1FOV1$'] = 0x2;if (wa4y[D[500142]](D[500982]) != -0x1) {
      if (fm0s4_[D[501069]] >= 0x18) window['b1V$']['b1FOV1$'] = 0x3;else window['b1V$']['b1FOV1$'] = 0x2;
    } else {
      if (wa4y[D[500142]](D[501089]) != -0x1) {
        if (fm0s4_[D[501069]] && fm0s4_[D[501069]] >= 0x14) window['b1V$']['b1FOV1$'] = 0x3;else {
          if (rkv6p[D[500142]](D[501096]) != -0x1 || rkv6p[D[500142]](D[501097]) != -0x1 || rkv6p[D[500142]](D[501098]) != -0x1 || rkv6p[D[500142]](D[501099]) != -0x1 || rkv6p[D[500142]](D[501100]) != -0x1) window['b1V$']['b1FOV1$'] = 0x2;else window['b1V$']['b1FOV1$'] = 0x3;
        }
      } else window['b1V$']['b1FOV1$'] = 0x2;
    }console[D[500222]](D[501101] + window['b1V$']['b1FO1$V'] + D[501102] + window['b1V$']['b1FOV1$']);
  } }), wx[D[501103]]({ 'success': function (et2ohi) {
    console[D[500222]](D[501104] + et2ohi[D[501105]] + D[501106] + et2ohi[D[501107]]);
  } }), wx[D[501108]]({ 'success': function (leto2h) {
    console[D[500222]](D[501109] + leto2h[D[501110]]);
  } }), wx[D[501111]]({ 'keepScreenOn': !![] }), wx[D[501112]](function (gpvrk) {
  console[D[500222]](D[501109] + gpvrk[D[501110]] + D[501113] + gpvrk[D[501114]]);
}), wx[D[501115]](function (lj96q5) {
  window['b11O'] = lj96q5, window['b1$O1'] && window['b11O'] && (console[D[500994]](D[501116] + window['b11O'][D[501117]]), window['b1$O1'](window['b11O']), window['b11O'] = null);
}), window['b1FV1$O'] = 0x0, window[D[501118]] = null, wx[D[501119]](function () {
  window['b1FV1$O']++, wx[D[501120]]();if (window['b1FV1$O'] >= 0x2) {
    window['b1FV1$O'] = 0x0, console[D[500330]](D[501121]), wx[D[501122]]('0', 0x1);if (window['b1V$'] && window['b1V$'][D[501088]]) window['b1V$O'](D[501123], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});