var k = wx.$f;
console[k[60077]](k[86440]), window[k[86441]], wx[k[86442]](function (jc6sd) {
  if (jc6sd) {
    if (jc6sd[k[64054]]) {
      var cswod = window[k[60530]][k[86443]][k[64218]](new RegExp(/\./, 'g'), '_'),
          sjdocw = jc6sd[k[64054]],
          q4k_52 = sjdocw[k[70697]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (q4k_52) for (var mvtib = 0x0; mvtib < q4k_52[k[60013]]; mvtib++) {
        if (q4k_52[mvtib] && q4k_52[mvtib][k[60013]] > 0x0) {
          var z8wn = parseInt(q4k_52[mvtib][k[64218]](k[86444], '')[k[64218]](':', ''));sjdocw = sjdocw[k[64218]](q4k_52[mvtib], q4k_52[mvtib][k[64218]](':' + z8wn + ':', ':' + (z8wn - 0x2) + ':'));
        }
      }sjdocw = sjdocw[k[64218]](new RegExp(k[86445], 'g'), k[86446] + cswod + k[83107]), sjdocw = sjdocw[k[64218]](new RegExp(k[86447], 'g'), k[86446] + cswod + k[83107]), jc6sd[k[64054]] = sjdocw;
    }var biuvm = { 'id': window['F$L6'][k[86448]], 'role': window['F$L6'][k[64161]], 'level': window['F$L6'][k[86449]], 'user': window['F$L6'][k[83011]], 'version': window['F$L6'][k[60100]], 'gamever': window[k[60530]][k[86443]], 'cdn': window['F$L6'][k[64053]], 'serverid': window['F$L6'][k[83006]] ? window['F$L6'][k[83006]][k[70285]] : 0x0, 'systemInfo': window[k[86450]], 'error': k[86451], 'stack': jc6sd ? jc6sd[k[64054]] : '' },
        bivt = JSON[k[64039]](biuvm);console[k[60124]](k[86452] + bivt), (!window[k[86441]] || window[k[86441]] != biuvm[k[60124]]) && (window[k[86441]] = biuvm[k[60124]], window['F$0L'](biuvm));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[86453]] = require(k[86454]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[60077]](k[86455]), console[k[60077]](k[86456]), F$0L86({ 'title': k[86457] });var fk0tq5 = { 'F$I80L6': !![] };new window[k[86458]](fk0tq5), window[k[86458]][k[60144]]['F$I860L']();if (window['F$I068L']) clearInterval(window['F$I068L']);window['F$I068L'] = null, window['F$I86L0'] = function (cdj6, r8zx) {
  if (!cdj6 || !r8zx) return 0x0;cdj6 = cdj6[k[60015]]('.'), r8zx = r8zx[k[60015]]('.');const o_26k = Math[k[60813]](cdj6[k[60013]], r8zx[k[60013]]);while (cdj6[k[60013]] < o_26k) {
    cdj6[k[60029]]('0');
  }while (r8zx[k[60013]] < o_26k) {
    r8zx[k[60029]]('0');
  }for (var bihfmt = 0x0; bihfmt < o_26k; bihfmt++) {
    const vu1gb9 = parseInt(cdj6[bihfmt]),
          vbmift = parseInt(r8zx[bihfmt]);if (vu1gb9 > vbmift) return 0x1;else {
      if (vu1gb9 < vbmift) return -0x1;
    }
  }return 0x0;
}, window[k[86459]] = wx[k[86460]]()[k[86459]], console[k[60457]](k[86461] + window[k[86459]]);var fco2d = wx[k[86462]]();fco2d['onCheckForUpdate'](function (swc) {
  console[k[60457]](k[86463] + swc[k[86464]]);
}), fco2d[k[86465]](function () {
  wx[k[86466]]({ 'title': k[86467], 'content': k[86468], 'showCancel': ![], 'success': function (dwosc) {
      fco2d[k[86469]]();
    } });
}), fco2d['onUpdateFailed'](function () {
  console[k[60457]](k[86470]);
}), window['F$IL086'] = function () {
  console[k[60457]](k[86471]);var wjnsdc = wx[k[86472]]({ 'name': k[86473], 'success': function (kth50q) {
      console[k[60457]](k[86474]), console[k[60457]](kth50q), kth50q && kth50q[k[83178]] == k[86475] ? (window['F$68'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    }, 'fail': function (uv9g1) {
      console[k[60457]](k[86476]), console[k[60457]](uv9g1), setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    } });wjnsdc && wjnsdc[k[86477]]($pa7y => {});
}, window['F$IL806'] = function () {
  console[k[60457]](k[86478]);var a$7r3 = wx[k[86472]]({ 'name': k[86479], 'success': function (zrn8xe) {
      console[k[60457]](k[86480]), console[k[60457]](zrn8xe), zrn8xe && zrn8xe[k[83178]] == k[86475] ? (window['F$L86'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    }, 'fail': function (kq05ht) {
      console[k[60457]](k[86481]), console[k[60457]](kq05ht), setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    } });a$7r3 && a$7r3[k[86477]](fihm0t => {});
}, window[k[86482]] = function () {
  window['F$I86L0'](window[k[86459]], k[86483]) >= 0x0 ? (console[k[60457]](k[86484] + window[k[86459]] + k[86485]), window['F$L0'](), window['F$IL086'](), window['F$IL806']()) : (window['F$L60'](k[86486], window[k[86459]]), wx[k[86466]]({ 'title': k[65793], 'content': k[86487] }));
}, window[k[86450]] = '', wx[k[86488]]({ 'success'(djsc) {
    window[k[86450]] = k[86489] + djsc[k[86490]] + k[86491] + djsc[k[86492]] + k[86493] + djsc[k[64231]] + k[86494] + djsc[k[60450]] + k[86495] + djsc[k[82982]] + k[86496] + djsc[k[86459]] + k[86497] + djsc[k[68369]], console[k[60457]](window[k[86450]]), console[k[60457]](k[86498] + djsc[k[86499]] + k[86500] + djsc[k[86501]] + k[86502] + djsc[k[86503]] + k[86504] + djsc[k[86505]] + k[86506] + djsc[k[86507]] + k[86508] + djsc[k[86509]] + k[86510] + (djsc[k[86511]] ? djsc[k[86511]][k[60313]] + ',' + djsc[k[86511]][k[61124]] + ',' + djsc[k[86511]][k[61126]] + ',' + djsc[k[86511]][k[61125]] : ''));var ftim0h = djsc[k[60450]] ? djsc[k[60450]][k[70933]]() : '',
        o2c64j = djsc[k[86492]] ? djsc[k[86492]][k[70933]]()[k[64218]]('\x20', '') : '';window['F$L6'][k[60486]] = ftim0h[k[60114]](k[86512]) != -0x1, window['F$L6'][k[70128]] = ftim0h[k[60114]](k[85959]) != -0x1, window['F$L6'][k[86513]] = ftim0h[k[60114]](k[86512]) != -0x1 || ftim0h[k[60114]](k[85959]) != -0x1, window['F$L6'][k[82708]] = ftim0h[k[60114]](k[86514]) != -0x1 || ftim0h[k[60114]](k[86515]) != -0x1, window['F$L6'][k[86516]] = djsc[k[82982]] ? djsc[k[82982]][k[70933]]() : '', window['F$L6']['F$I0L86'] = ![], window['F$L6']['F$I0L68'] = 0x2;if (ftim0h[k[60114]](k[85959]) != -0x1) {
      if (djsc[k[68369]] >= 0x18) window['F$L6']['F$I0L68'] = 0x3;else window['F$L6']['F$I0L68'] = 0x2;
    } else {
      if (ftim0h[k[60114]](k[86512]) != -0x1) {
        if (djsc[k[68369]] && djsc[k[68369]] >= 0x14) window['F$L6']['F$I0L68'] = 0x3;else {
          if (o2c64j[k[60114]](k[86517]) != -0x1 || o2c64j[k[60114]](k[86518]) != -0x1 || o2c64j[k[60114]](k[86519]) != -0x1 || o2c64j[k[60114]](k[86520]) != -0x1 || o2c64j[k[60114]](k[86521]) != -0x1) window['F$L6']['F$I0L68'] = 0x2;else window['F$L6']['F$I0L68'] = 0x3;
        }
      } else window['F$L6']['F$I0L68'] = 0x2;
    }console[k[60457]](k[86522] + window['F$L6']['F$I0L86'] + k[86523] + window['F$L6']['F$I0L68']);
  } }), wx[k[86524]]({ 'success': function (xre8zn) {
    console[k[60457]](k[86525] + xre8zn[k[64137]] + k[86526] + xre8zn[k[86527]]);
  } }), wx[k[86528]]({ 'success': function (enzxr8) {
    console[k[60457]](k[86529] + enzxr8[k[86530]]);
  } }), wx[k[86531]]({ 'keepScreenOn': !![] }), wx[k[86532]](function (_c6o) {
  console[k[60457]](k[86529] + _c6o[k[86530]] + k[86533] + _c6o[k[86534]]);
}), wx[k[86535]](function (mit) {
  window['F$608'] = mit, window['F$680'] && window['F$608'] && (console[k[60077]](k[86536] + window['F$608'][k[60739]]), window['F$680'](window['F$608']), window['F$608'] = null);
}), window['F$IL608'] = 0x0, window[k[86537]] = null, wx[k[86538]](function () {
  window['F$IL608']++, wx[k[70509]]();if (window['F$IL608'] >= 0x2) {
    window['F$IL608'] = 0x0, console[k[60124]](k[86539]), wx[k[86540]]('0', 0x1);if (window['F$L6'] && window['F$L6'][k[60486]]) window['F$L60'](k[86541], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});