var k = wx.$f;
console[k[60077]](k[86649]), window[k[86650]], wx[k[86651]](function (x8enrz) {
  if (x8enrz) {
    if (x8enrz[k[64083]]) {
      var bifvum = window[k[60536]][k[86652]][k[64249]](new RegExp(/\./, 'g'), '_'),
          r$z873 = x8enrz[k[64083]],
          j62ocd = r$z873[k[70767]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (j62ocd) for (var k26o4_ = 0x0; k26o4_ < j62ocd[k[60013]]; k26o4_++) {
        if (j62ocd[k26o4_] && j62ocd[k26o4_][k[60013]] > 0x0) {
          var zx78 = parseInt(j62ocd[k26o4_][k[64249]](k[86653], '')[k[64249]](':', ''));r$z873 = r$z873[k[64249]](j62ocd[k26o4_], j62ocd[k26o4_][k[64249]](':' + zx78 + ':', ':' + (zx78 - 0x2) + ':'));
        }
      }r$z873 = r$z873[k[64249]](new RegExp(k[86654], 'g'), k[86655] + bifvum + k[83264]), r$z873 = r$z873[k[64249]](new RegExp(k[86656], 'g'), k[86655] + bifvum + k[83264]), x8enrz[k[64083]] = r$z873;
    }var sxjwd = { 'id': window['F$L6'][k[86657]], 'role': window['F$L6'][k[64192]], 'level': window['F$L6'][k[86658]], 'user': window['F$L6'][k[83167]], 'version': window['F$L6'][k[60100]], 'gamever': window[k[60536]][k[86652]], 'cdn': window['F$L6'][k[64082]], 'serverid': window['F$L6'][k[83162]] ? window['F$L6'][k[83162]][k[70388]] : 0x0, 'systemInfo': window[k[86659]], 'error': k[86660], 'stack': x8enrz ? x8enrz[k[64083]] : '' },
        fmtbih = JSON[k[64068]](sxjwd);console[k[60124]](k[86661] + fmtbih), (!window[k[86650]] || window[k[86650]] != sxjwd[k[60124]]) && (window[k[86650]] = sxjwd[k[60124]], window['F$0L'](sxjwd));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[86662]] = require(k[86663]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[60077]](k[86664]), console[k[60077]](k[86665]), F$0L86({ 'title': k[86666] });var fsjcnd = { 'F$I80L6': !![] };new window[k[86667]](fsjcnd), window[k[86667]][k[60144]]['F$I860L']();if (window['F$I068L']) clearInterval(window['F$I068L']);window['F$I068L'] = null, window['F$I86L0'] = function (tf0mih, h5tfq0) {
  if (!tf0mih || !h5tfq0) return 0x0;tf0mih = tf0mih[k[60015]]('.'), h5tfq0 = h5tfq0[k[60015]]('.');const p3a$ = Math[k[60819]](tf0mih[k[60013]], h5tfq0[k[60013]]);while (tf0mih[k[60013]] < p3a$) {
    tf0mih[k[60029]]('0');
  }while (h5tfq0[k[60013]] < p3a$) {
    h5tfq0[k[60029]]('0');
  }for (var ya3p$7 = 0x0; ya3p$7 < p3a$; ya3p$7++) {
    const zr8x7 = parseInt(tf0mih[ya3p$7]),
          hbimt = parseInt(h5tfq0[ya3p$7]);if (zr8x7 > hbimt) return 0x1;else {
      if (zr8x7 < hbimt) return -0x1;
    }
  }return 0x0;
}, window[k[86668]] = wx[k[86669]]()[k[86668]], console[k[60464]](k[86670] + window[k[86668]]);var fdowcs = wx[k[86671]]();fdowcs['onCheckForUpdate'](function (ft0mqh) {
  console[k[60464]](k[86672] + ft0mqh[k[86673]]);
}), fdowcs[k[86674]](function () {
  wx[k[86675]]({ 'title': k[86676], 'content': k[86677], 'showCancel': ![], 'success': function (tfvib) {
      fdowcs[k[86678]]();
    } });
}), fdowcs['onUpdateFailed'](function () {
  console[k[60464]](k[86679]);
}), window['F$IL086'] = function () {
  console[k[60464]](k[86680]);var u19bvi = wx[k[86681]]({ 'name': k[86682], 'success': function (_q5k4) {
      console[k[60464]](k[86683]), console[k[60464]](_q5k4), _q5k4 && _q5k4[k[83343]] == k[86684] ? (window['F$68'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    }, 'fail': function (c6jo) {
      console[k[60464]](k[86685]), console[k[60464]](c6jo), setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    } });u19bvi && u19bvi[k[86686]](z$8r => {});
}, window['F$IL806'] = function () {
  console[k[60464]](k[86687]);var q5kh_ = wx[k[86681]]({ 'name': k[86688], 'success': function (bfmti) {
      console[k[60464]](k[86689]), console[k[60464]](bfmti), bfmti && bfmti[k[83343]] == k[86684] ? (window['F$L86'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    }, 'fail': function (tqh50) {
      console[k[60464]](k[86690]), console[k[60464]](tqh50), setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    } });q5kh_ && q5kh_[k[86686]](b9vu1g => {});
}, window[k[86691]] = function () {
  window['F$I86L0'](window[k[86668]], k[86692]) >= 0x0 ? (console[k[60464]](k[86693] + window[k[86668]] + k[86694]), window['F$L0'](), window['F$IL086'](), window['F$IL806']()) : (window['F$L60'](k[86695], window[k[86668]]), wx[k[86675]]({ 'title': k[65827], 'content': k[86696] }));
}, window[k[86659]] = '', wx[k[86697]]({ 'success'(nxzre) {
    window[k[86659]] = k[86698] + nxzre[k[86699]] + k[86700] + nxzre[k[86701]] + k[86702] + nxzre[k[64262]] + k[86703] + nxzre[k[60450]] + k[86704] + nxzre[k[83138]] + k[86705] + nxzre[k[86668]] + k[86706] + nxzre[k[68409]], console[k[60464]](window[k[86659]]), console[k[60464]](k[86707] + nxzre[k[86708]] + k[86709] + nxzre[k[86710]] + k[86711] + nxzre[k[86712]] + k[86713] + nxzre[k[86714]] + k[86715] + nxzre[k[86716]] + k[86717] + nxzre[k[86718]] + k[86719] + (nxzre[k[86720]] ? nxzre[k[86720]][k[60313]] + ',' + nxzre[k[86720]][k[61131]] + ',' + nxzre[k[86720]][k[61133]] + ',' + nxzre[k[86720]][k[61132]] : ''));var snwcd = nxzre[k[60450]] ? nxzre[k[60450]][k[71004]]() : '',
        k4_62 = nxzre[k[86701]] ? nxzre[k[86701]][k[71004]]()[k[64249]]('\x20', '') : '';window['F$L6'][k[60492]] = snwcd[k[60114]](k[86721]) != -0x1, window['F$L6'][k[70231]] = snwcd[k[60114]](k[86517]) != -0x1, window['F$L6'][k[86722]] = snwcd[k[60114]](k[86721]) != -0x1 || snwcd[k[60114]](k[86517]) != -0x1, window['F$L6'][k[82863]] = snwcd[k[60114]](k[86723]) != -0x1 || snwcd[k[60114]](k[86724]) != -0x1, window['F$L6'][k[86725]] = nxzre[k[83138]] ? nxzre[k[83138]][k[71004]]() : '', window['F$L6']['F$I0L86'] = ![], window['F$L6']['F$I0L68'] = 0x2;if (snwcd[k[60114]](k[86517]) != -0x1) {
      if (nxzre[k[68409]] >= 0x18) window['F$L6']['F$I0L68'] = 0x3;else window['F$L6']['F$I0L68'] = 0x2;
    } else {
      if (snwcd[k[60114]](k[86721]) != -0x1) {
        if (nxzre[k[68409]] && nxzre[k[68409]] >= 0x14) window['F$L6']['F$I0L68'] = 0x3;else {
          if (k4_62[k[60114]](k[86726]) != -0x1 || k4_62[k[60114]](k[86727]) != -0x1 || k4_62[k[60114]](k[86728]) != -0x1 || k4_62[k[60114]](k[86729]) != -0x1 || k4_62[k[60114]](k[86730]) != -0x1) window['F$L6']['F$I0L68'] = 0x2;else window['F$L6']['F$I0L68'] = 0x3;
        }
      } else window['F$L6']['F$I0L68'] = 0x2;
    }console[k[60464]](k[86731] + window['F$L6']['F$I0L86'] + k[86732] + window['F$L6']['F$I0L68']);
  } }), wx[k[86733]]({ 'success': function (thf0m) {
    console[k[60464]](k[86734] + thf0m[k[64168]] + k[86735] + thf0m[k[86736]]);
  } }), wx[k[86737]]({ 'success': function (r873z) {
    console[k[60464]](k[86738] + r873z[k[86739]]);
  } }), wx[k[86740]]({ 'keepScreenOn': !![] }), wx[k[86741]](function (btimvf) {
  console[k[60464]](k[86738] + btimvf[k[86739]] + k[86742] + btimvf[k[86743]]);
}), wx[k[86744]](function (e8znxr) {
  window['F$608'] = e8znxr, window['F$680'] && window['F$608'] && (console[k[60077]](k[86745] + window['F$608'][k[60745]]), window['F$680'](window['F$608']), window['F$608'] = null);
}), window['F$IL608'] = 0x0, window[k[86746]] = null, wx[k[86747]](function () {
  window['F$IL608']++, wx[k[70633]]();if (window['F$IL608'] >= 0x2) {
    window['F$IL608'] = 0x0, console[k[60124]](k[86748]), wx[k[86749]]('0', 0x1);if (window['F$L6'] && window['F$L6'][k[60492]]) window['F$L60'](k[86750], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});