var k = wx.$f;
console[k[60077]](k[86425]), window[k[86426]], wx[k[86427]](function ($387zr) {
  if ($387zr) {
    if ($387zr[k[64054]]) {
      var h50ftq = window[k[60530]][k[86428]][k[64218]](new RegExp(/\./, 'g'), '_'),
          mvibt = $387zr[k[64054]],
          z37 = mvibt[k[70697]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (z37) for (var mq0ht = 0x0; mq0ht < z37[k[60013]]; mq0ht++) {
        if (z37[mq0ht] && z37[mq0ht][k[60013]] > 0x0) {
          var exwszn = parseInt(z37[mq0ht][k[64218]](k[86429], '')[k[64218]](':', ''));mvibt = mvibt[k[64218]](z37[mq0ht], z37[mq0ht][k[64218]](':' + exwszn + ':', ':' + (exwszn - 0x2) + ':'));
        }
      }mvibt = mvibt[k[64218]](new RegExp(k[86430], 'g'), k[86431] + h50ftq + k[83107]), mvibt = mvibt[k[64218]](new RegExp(k[86432], 'g'), k[86431] + h50ftq + k[83107]), $387zr[k[64054]] = mvibt;
    }var imbfv = { 'id': window['F$L6'][k[86433]], 'role': window['F$L6'][k[64161]], 'level': window['F$L6'][k[86434]], 'user': window['F$L6'][k[83011]], 'version': window['F$L6'][k[60100]], 'gamever': window[k[60530]][k[86428]], 'cdn': window['F$L6'][k[64053]], 'serverid': window['F$L6'][k[83006]] ? window['F$L6'][k[83006]][k[70285]] : 0x0, 'systemInfo': window[k[86435]], 'error': k[86436], 'stack': $387zr ? $387zr[k[64054]] : '' },
        sdw = JSON[k[64039]](imbfv);console[k[60124]](k[86437] + sdw), (!window[k[86426]] || window[k[86426]] != imbfv[k[60124]]) && (window[k[86426]] = imbfv[k[60124]], window['F$0L'](imbfv));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[86438]] = require(k[86439]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[60077]](k[86440]), console[k[60077]](k[86441]), F$0L86({ 'title': k[86442] });var f_6ok4 = { 'F$I80L6': !![] };new window[k[86443]](f_6ok4), window[k[86443]][k[60144]]['F$I860L']();if (window['F$I068L']) clearInterval(window['F$I068L']);window['F$I068L'] = null, window['F$I86L0'] = function (cdnjsw, fmhtib) {
  if (!cdnjsw || !fmhtib) return 0x0;cdnjsw = cdnjsw[k[60015]]('.'), fmhtib = fmhtib[k[60015]]('.');const r7$ez = Math[k[60813]](cdnjsw[k[60013]], fmhtib[k[60013]]);while (cdnjsw[k[60013]] < r7$ez) {
    cdnjsw[k[60029]]('0');
  }while (fmhtib[k[60013]] < r7$ez) {
    fmhtib[k[60029]]('0');
  }for (var ndsxwe = 0x0; ndsxwe < r7$ez; ndsxwe++) {
    const wcdso = parseInt(cdnjsw[ndsxwe]),
          x8ezr7 = parseInt(fmhtib[ndsxwe]);if (wcdso > x8ezr7) return 0x1;else {
      if (wcdso < x8ezr7) return -0x1;
    }
  }return 0x0;
}, window[k[86444]] = wx[k[86445]]()[k[86444]], console[k[60457]](k[86446] + window[k[86444]]);var fwjdosc = wx[k[86447]]();fwjdosc['onCheckForUpdate'](function (mifth0) {
  console[k[60457]](k[86448] + mifth0[k[86449]]);
}), fwjdosc[k[86450]](function () {
  wx[k[86451]]({ 'title': k[86452], 'content': k[86453], 'showCancel': ![], 'success': function (ndjwcs) {
      fwjdosc[k[86454]]();
    } });
}), fwjdosc['onUpdateFailed'](function () {
  console[k[60457]](k[86455]);
}), window['F$IL086'] = function () {
  console[k[60457]](k[86456]);var zswne = wx[k[86457]]({ 'name': k[86458], 'success': function (xndsw) {
      console[k[60457]](k[86459]), console[k[60457]](xndsw), xndsw && xndsw[k[83178]] == k[86460] ? (window['F$68'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    }, 'fail': function (_q05k) {
      console[k[60457]](k[86461]), console[k[60457]](_q05k), setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    } });zswne && zswne[k[86462]](_624oc => {});
}, window['F$IL806'] = function () {
  console[k[60457]](k[86463]);var q5_k04 = wx[k[86457]]({ 'name': k[86464], 'success': function ($yar7) {
      console[k[60457]](k[86465]), console[k[60457]]($yar7), $yar7 && $yar7[k[83178]] == k[86460] ? (window['F$L86'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    }, 'fail': function (w8nzxe) {
      console[k[60457]](k[86466]), console[k[60457]](w8nzxe), setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    } });q5_k04 && q5_k04[k[86462]](r8ze7 => {});
}, window[k[86467]] = function () {
  window['F$I86L0'](window[k[86444]], k[86468]) >= 0x0 ? (console[k[60457]](k[86469] + window[k[86444]] + k[86470]), window['F$L0'](), window['F$IL086'](), window['F$IL806']()) : (window['F$L60'](k[86471], window[k[86444]]), wx[k[86451]]({ 'title': k[65793], 'content': k[86472] }));
}, window[k[86435]] = '', wx[k[86473]]({ 'success'(dojs6c) {
    window[k[86435]] = k[86474] + dojs6c[k[86475]] + k[86476] + dojs6c[k[86477]] + k[86478] + dojs6c[k[64231]] + k[86479] + dojs6c[k[60450]] + k[86480] + dojs6c[k[82982]] + k[86481] + dojs6c[k[86444]] + k[86482] + dojs6c[k[68369]], console[k[60457]](window[k[86435]]), console[k[60457]](k[86483] + dojs6c[k[86484]] + k[86485] + dojs6c[k[86486]] + k[86487] + dojs6c[k[86488]] + k[86489] + dojs6c[k[86490]] + k[86491] + dojs6c[k[86492]] + k[86493] + dojs6c[k[86494]] + k[86495] + (dojs6c[k[86496]] ? dojs6c[k[86496]][k[60313]] + ',' + dojs6c[k[86496]][k[61124]] + ',' + dojs6c[k[86496]][k[61126]] + ',' + dojs6c[k[86496]][k[61125]] : ''));var kq5t0 = dojs6c[k[60450]] ? dojs6c[k[60450]][k[70933]]() : '',
        joc264 = dojs6c[k[86477]] ? dojs6c[k[86477]][k[70933]]()[k[64218]]('\x20', '') : '';window['F$L6'][k[60486]] = kq5t0[k[60114]](k[86497]) != -0x1, window['F$L6'][k[70128]] = kq5t0[k[60114]](k[86312]) != -0x1, window['F$L6'][k[86498]] = kq5t0[k[60114]](k[86497]) != -0x1 || kq5t0[k[60114]](k[86312]) != -0x1, window['F$L6'][k[82708]] = kq5t0[k[60114]](k[86499]) != -0x1 || kq5t0[k[60114]](k[86500]) != -0x1, window['F$L6'][k[86501]] = dojs6c[k[82982]] ? dojs6c[k[82982]][k[70933]]() : '', window['F$L6']['F$I0L86'] = ![], window['F$L6']['F$I0L68'] = 0x2;if (kq5t0[k[60114]](k[86312]) != -0x1) {
      if (dojs6c[k[68369]] >= 0x18) window['F$L6']['F$I0L68'] = 0x3;else window['F$L6']['F$I0L68'] = 0x2;
    } else {
      if (kq5t0[k[60114]](k[86497]) != -0x1) {
        if (dojs6c[k[68369]] && dojs6c[k[68369]] >= 0x14) window['F$L6']['F$I0L68'] = 0x3;else {
          if (joc264[k[60114]](k[86502]) != -0x1 || joc264[k[60114]](k[86503]) != -0x1 || joc264[k[60114]](k[86504]) != -0x1 || joc264[k[60114]](k[86505]) != -0x1 || joc264[k[60114]](k[86506]) != -0x1) window['F$L6']['F$I0L68'] = 0x2;else window['F$L6']['F$I0L68'] = 0x3;
        }
      } else window['F$L6']['F$I0L68'] = 0x2;
    }console[k[60457]](k[86507] + window['F$L6']['F$I0L86'] + k[86508] + window['F$L6']['F$I0L68']);
  } }), wx[k[86509]]({ 'success': function (imt0f) {
    console[k[60457]](k[86510] + imt0f[k[64137]] + k[86511] + imt0f[k[86512]]);
  } }), wx[k[86513]]({ 'success': function (sjcnwd) {
    console[k[60457]](k[86514] + sjcnwd[k[86515]]);
  } }), wx[k[86516]]({ 'keepScreenOn': !![] }), wx[k[86517]](function (ay73) {
  console[k[60457]](k[86514] + ay73[k[86515]] + k[86518] + ay73[k[86519]]);
}), wx[k[86520]](function (fmtiv) {
  window['F$608'] = fmtiv, window['F$680'] && window['F$608'] && (console[k[60077]](k[86521] + window['F$608'][k[60739]]), window['F$680'](window['F$608']), window['F$608'] = null);
}), window['F$IL608'] = 0x0, window[k[86522]] = null, wx[k[86523]](function () {
  window['F$IL608']++, wx[k[70509]]();if (window['F$IL608'] >= 0x2) {
    window['F$IL608'] = 0x0, console[k[60124]](k[86524]), wx[k[86525]]('0', 0x1);if (window['F$L6'] && window['F$L6'][k[60486]]) window['F$L60'](k[86526], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});