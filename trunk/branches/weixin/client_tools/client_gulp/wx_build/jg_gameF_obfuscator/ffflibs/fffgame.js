var k = wx.$f;
console[k[60077]](k[87620]), window[k[87621]], wx[k[87622]](function (thimfb) {
  if (thimfb) {
    if (thimfb[k[64138]]) {
      var h0k_q5 = window[k[60538]][k[87623]][k[64304]](new RegExp(/\./, 'g'), '_'),
          r7xz8 = thimfb[k[64138]],
          sjcdnw = r7xz8[k[71138]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (sjcdnw) for (var snxe = 0x0; snxe < sjcdnw[k[60013]]; snxe++) {
        if (sjcdnw[snxe] && sjcdnw[snxe][k[60013]] > 0x0) {
          var vftbm = parseInt(sjcdnw[snxe][k[64304]](k[87624], '')[k[64304]](':', ''));r7xz8 = r7xz8[k[64304]](sjcdnw[snxe], sjcdnw[snxe][k[64304]](':' + vftbm + ':', ':' + (vftbm - 0x2) + ':'));
        }
      }r7xz8 = r7xz8[k[64304]](new RegExp(k[87625], 'g'), k[87626] + h0k_q5 + k[84064]), r7xz8 = r7xz8[k[64304]](new RegExp(k[87627], 'g'), k[87626] + h0k_q5 + k[84064]), thimfb[k[64138]] = r7xz8;
    }var nzw8x = { 'id': window['F$L6'][k[87628]], 'role': window['F$L6'][k[64247]], 'level': window['F$L6'][k[87629]], 'user': window['F$L6'][k[83966]], 'version': window['F$L6'][k[60100]], 'cdn': window['F$L6'][k[64137]], 'pkgName': window['F$L6'][k[83967]], 'gamever': window[k[60538]][k[87623]], 'serverid': window['F$L6'][k[83961]] ? window['F$L6'][k[83961]][k[70632]] : 0x0, 'systemInfo': window[k[87630]], 'error': k[87631], 'stack': thimfb ? thimfb[k[64138]] : '' },
        ojcs6 = JSON[k[64123]](nzw8x);console[k[60124]](k[87632] + ojcs6), (!window[k[87621]] || window[k[87621]] != nzw8x[k[60124]]) && (window[k[87621]] = nzw8x[k[60124]], window['F$0L'](nzw8x));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[87633]] = require(k[87634]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[60077]](k[87635]), console[k[60077]](k[87636]), F$0L86({ 'title': k[87637] });var fv1mbiu = { 'F$I06L8': !![] };new window[k[87638]](fv1mbiu), window[k[87638]][k[60144]]['F$I8L60']();if (window['F$I0L68']) clearInterval(window['F$I0L68']);window['F$I0L68'] = null, window['F$I860L'] = function (tifb, mth0f) {
  if (!tifb || !mth0f) return 0x0;tifb = tifb[k[60015]]('.'), mth0f = mth0f[k[60015]]('.');const $8r7z = Math[k[60822]](tifb[k[60013]], mth0f[k[60013]]);while (tifb[k[60013]] < $8r7z) {
    tifb[k[60029]]('0');
  }while (mth0f[k[60013]] < $8r7z) {
    mth0f[k[60029]]('0');
  }for (var jnwsdx = 0x0; jnwsdx < $8r7z; jnwsdx++) {
    const zxn8ew = parseInt(tifb[jnwsdx]),
          v1bu = parseInt(mth0f[jnwsdx]);if (zxn8ew > v1bu) return 0x1;else {
      if (zxn8ew < v1bu) return -0x1;
    }
  }return 0x0;
}, window[k[87639]] = wx[k[87640]]()[k[87639]], console[k[60466]](k[87641] + window[k[87639]]);var fry73 = wx[k[87642]]();fry73['onCheckForUpdate'](function (y3$a) {
  console[k[60466]](k[87643] + y3$a[k[87644]]);
}), fry73[k[87645]](function () {
  wx[k[87646]]({ 'title': k[87647], 'content': k[87648], 'showCancel': ![], 'success': function (mtbfhi) {
      fry73[k[87649]]();
    } });
}), fry73['onUpdateFailed'](function () {
  console[k[60466]](k[87650]);
}), window['F$I86L0'] = function () {
  console[k[60466]](k[87651]);var ojc2 = wx[k[87652]]({ 'name': k[87653], 'success': function (znwe8) {
      console[k[60466]](k[87654]), console[k[60466]](znwe8), znwe8 && znwe8[k[84140]] == k[87655] ? (window['F$68'] = !![], window['F$68L0'](), window['F$6L08']()) : setTimeout(function () {
        window['F$I86L0']();
      }, 0x1f4);
    }, 'fail': function (fiuvmb) {
      console[k[60466]](k[87656]), console[k[60466]](fiuvmb), setTimeout(function () {
        window['F$I86L0']();
      }, 0x1f4);
    } });ojc2 && ojc2[k[87657]](jo26c4 => {});
}, window['F$IL068'] = function () {
  console[k[60466]](k[87658]);var mivufb = wx[k[87652]]({ 'name': k[87659], 'success': function (k5_246) {
      console[k[60466]](k[87660]), console[k[60466]](k5_246), k5_246 && k5_246[k[84140]] == k[87655] ? (window['F$L86'] = !![], window['F$68L0'](), window['F$6L08']()) : setTimeout(function () {
        window['F$IL068']();
      }, 0x1f4);
    }, 'fail': function (rxen8) {
      console[k[60466]](k[87661]), console[k[60466]](rxen8), setTimeout(function () {
        window['F$IL068']();
      }, 0x1f4);
    } });mivufb && mivufb[k[87657]](wojsc => {});
}, window[k[87662]] = function () {
  window['F$I860L'](window[k[87639]], k[87663]) >= 0x0 ? (console[k[60466]](k[87664] + window[k[87639]] + k[87665]), window['F$L0'](), window['F$I86L0'](), window['F$IL068']()) : (window['F$L60'](k[87666], window[k[87639]]), wx[k[87646]]({ 'title': k[65823], 'content': k[87667] }));
}, window[k[87630]] = '', wx[k[87668]]({ 'success'(vgu1) {
    window[k[87630]] = k[87669] + vgu1[k[87670]] + k[87671] + vgu1[k[87672]] + k[87673] + vgu1[k[64317]] + k[87674] + vgu1[k[60459]] + k[87675] + vgu1[k[83938]] + k[87676] + vgu1[k[87639]] + k[87677] + vgu1[k[68606]], console[k[60466]](window[k[87630]]), console[k[60466]](k[87678] + vgu1[k[87679]] + k[87680] + vgu1[k[87681]] + k[87682] + vgu1[k[87683]] + k[87684] + vgu1[k[87685]] + k[87686] + vgu1[k[87687]] + k[87688] + vgu1[k[87689]] + k[87690] + (vgu1[k[87691]] ? vgu1[k[87691]][k[60313]] + ',' + vgu1[k[87691]][k[61133]] + ',' + vgu1[k[87691]][k[61135]] + ',' + vgu1[k[87691]][k[61134]] : ''));var wcj = vgu1[k[60459]] ? vgu1[k[60459]][k[71408]]() : '',
        fmvu = vgu1[k[87672]] ? vgu1[k[87672]][k[71408]]()[k[64304]]('\x20', '') : '';window['F$L6'][k[61003]] = wcj[k[60114]](k[87692]) != -0x1, window['F$L6'][k[70467]] = wcj[k[60114]](k[87486]) != -0x1, window['F$L6'][k[87693]] = wcj[k[60114]](k[87692]) != -0x1 || wcj[k[60114]](k[87486]) != -0x1, window['F$L6'][k[83651]] = wcj[k[60114]](k[87694]) != -0x1 || wcj[k[60114]](k[87695]) != -0x1, window['F$L6'][k[87696]] = vgu1[k[83938]] ? vgu1[k[83938]][k[71408]]() : '', window['F$L6']['F$I086L'] = ![], window['F$L6']['F$I0L86'] = 0x2;if (wcj[k[60114]](k[87486]) != -0x1) {
      if (vgu1[k[68606]] >= 0x18) window['F$L6']['F$I0L86'] = 0x3;else window['F$L6']['F$I0L86'] = 0x2;
    } else {
      if (wcj[k[60114]](k[87692]) != -0x1) {
        if (vgu1[k[68606]] && vgu1[k[68606]] >= 0x14) window['F$L6']['F$I0L86'] = 0x3;else {
          if (fmvu[k[60114]](k[87697]) != -0x1 || fmvu[k[60114]](k[87698]) != -0x1 || fmvu[k[60114]](k[87699]) != -0x1 || fmvu[k[60114]](k[87700]) != -0x1 || fmvu[k[60114]](k[87701]) != -0x1) window['F$L6']['F$I0L86'] = 0x2;else window['F$L6']['F$I0L86'] = 0x3;
        }
      } else window['F$L6']['F$I0L86'] = 0x2;
    }console[k[60466]](k[87702] + window['F$L6']['F$I086L'] + k[87703] + window['F$L6']['F$I0L86']);
  } }), wx[k[87704]]({ 'success': function (nedws) {
    console[k[60466]](k[87705] + nedws[k[64223]] + k[87706] + nedws[k[87707]]);
  } }), wx[k[87708]]({ 'success': function (ndcj) {
    console[k[60466]](k[87709] + ndcj[k[87710]]);
  } }), wx[k[87711]]({ 'keepScreenOn': !![] }), wx[k[87712]](function (zr$e78) {
  console[k[60466]](k[87709] + zr$e78[k[87710]] + k[87713] + zr$e78[k[87714]]);
}), wx[k[70032]](function (o2_6c4) {
  window['F$80'] = o2_6c4, window['F$608'] && window['F$80'] && (console[k[60077]](k[87715] + window['F$80'][k[60748]]), window['F$608'](window['F$80']), window['F$80'] = null);
}), window[k[87716]] = 0x0, window['F$IL860'] = 0x0, window[k[87717]] = null, wx[k[87718]](function () {
  window['F$IL860']++;var k62 = Date[k[60082]]();(window[k[87716]] == 0x0 || k62 - window[k[87716]] > 0x1d4c0) && (console[k[60095]](k[87719]), wx[k[70999]]());if (window['F$IL860'] >= 0x2) {
    window['F$IL860'] = 0x0, console[k[60124]](k[87720]), wx[k[87721]]('0', 0x1);if (window['F$L6'] && window['F$L6'][k[61003]]) window['F$L60'](k[87722], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});