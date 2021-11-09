var k = wx.$f;
console[k[60077]](k[86305]), window[k[86306]], wx[k[86307]](function (_o64k2) {
  if (_o64k2) {
    if (_o64k2[k[64054]]) {
      var ojc6d = window[k[60530]][k[86308]][k[64218]](new RegExp(/\./, 'g'), '_'),
          fvmubi = _o64k2[k[64054]],
          biv1mu = fvmubi[k[70700]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (biv1mu) for (var bvufim = 0x0; bvufim < biv1mu[k[60013]]; bvufim++) {
        if (biv1mu[bvufim] && biv1mu[bvufim][k[60013]] > 0x0) {
          var qk42_5 = parseInt(biv1mu[bvufim][k[64218]](k[86309], '')[k[64218]](':', ''));fvmubi = fvmubi[k[64218]](biv1mu[bvufim], biv1mu[bvufim][k[64218]](':' + qk42_5 + ':', ':' + (qk42_5 - 0x2) + ':'));
        }
      }fvmubi = fvmubi[k[64218]](new RegExp(k[86310], 'g'), k[86311] + ojc6d + k[83132]), fvmubi = fvmubi[k[64218]](new RegExp(k[86312], 'g'), k[86311] + ojc6d + k[83132]), _o64k2[k[64054]] = fvmubi;
    }var th0qk = { 'id': window['F$L6'][k[86313]], 'role': window['F$L6'][k[64161]], 'level': window['F$L6'][k[86314]], 'user': window['F$L6'][k[83036]], 'version': window['F$L6'][k[60100]], 'gamever': window[k[60530]][k[86308]], 'cdn': window['F$L6'][k[64053]], 'serverid': window['F$L6'][k[83031]] ? window['F$L6'][k[83031]][k[70288]] : 0x0, 'systemInfo': window[k[86315]], 'error': k[86316], 'stack': _o64k2 ? _o64k2[k[64054]] : '' },
        exwzn = JSON[k[64039]](th0qk);console[k[60124]](k[86317] + exwzn), (!window[k[86306]] || window[k[86306]] != th0qk[k[60124]]) && (window[k[86306]] = th0qk[k[60124]], window['F$0L'](th0qk));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[86318]] = require(k[86319]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[60077]](k[86320]), console[k[60077]](k[86321]), F$0L86({ 'title': k[86322] });var fo_4c26 = { 'F$I80L6': !![] };new window[k[86323]](fo_4c26), window[k[86323]][k[60144]]['F$I860L']();if (window['F$I068L']) clearInterval(window['F$I068L']);window['F$I068L'] = null, window['F$I86L0'] = function (fbmht, y78$3r) {
  if (!fbmht || !y78$3r) return 0x0;fbmht = fbmht[k[60015]]('.'), y78$3r = y78$3r[k[60015]]('.');const snwdx = Math[k[60813]](fbmht[k[60013]], y78$3r[k[60013]]);while (fbmht[k[60013]] < snwdx) {
    fbmht[k[60029]]('0');
  }while (y78$3r[k[60013]] < snwdx) {
    y78$3r[k[60029]]('0');
  }for (var doj26 = 0x0; doj26 < snwdx; doj26++) {
    const r$38y = parseInt(fbmht[doj26]),
          wdexsn = parseInt(y78$3r[doj26]);if (r$38y > wdexsn) return 0x1;else {
      if (r$38y < wdexsn) return -0x1;
    }
  }return 0x0;
}, window[k[86324]] = wx[k[86325]]()[k[86324]], console[k[60457]](k[86326] + window[k[86324]]);var fc4_o62 = wx[k[86327]]();fc4_o62['onCheckForUpdate'](function (a$73r) {
  console[k[60457]](k[86328] + a$73r[k[86329]]);
}), fc4_o62[k[86330]](function () {
  wx[k[86331]]({ 'title': k[86332], 'content': k[86333], 'showCancel': ![], 'success': function (d2c6jo) {
      fc4_o62[k[86334]]();
    } });
}), fc4_o62['onUpdateFailed'](function () {
  console[k[60457]](k[86335]);
}), window['F$IL086'] = function () {
  console[k[60457]](k[86336]);var iuv1bm = wx[k[86337]]({ 'name': k[86338], 'success': function (biu) {
      console[k[60457]](k[86339]), console[k[60457]](biu), biu && biu[k[83203]] == k[86340] ? (window['F$68'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    }, 'fail': function (jcnswd) {
      console[k[60457]](k[86341]), console[k[60457]](jcnswd), setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    } });iuv1bm && iuv1bm[k[86342]](jo4c6 => {});
}, window['F$IL806'] = function () {
  console[k[60457]](k[86343]);var owcjsd = wx[k[86337]]({ 'name': k[86344], 'success': function (o6c4_2) {
      console[k[60457]](k[86345]), console[k[60457]](o6c4_2), o6c4_2 && o6c4_2[k[83203]] == k[86340] ? (window['F$L86'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    }, 'fail': function (dcojs) {
      console[k[60457]](k[86346]), console[k[60457]](dcojs), setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    } });owcjsd && owcjsd[k[86342]](ubmivf => {});
}, window[k[86347]] = function () {
  window['F$I86L0'](window[k[86324]], k[86348]) >= 0x0 ? (console[k[60457]](k[86349] + window[k[86324]] + k[86350]), window['F$L0'](), window['F$IL086'](), window['F$IL806']()) : (window['F$L60'](k[86351], window[k[86324]]), wx[k[86331]]({ 'title': k[65795], 'content': k[86352] }));
}, window[k[86315]] = '', wx[k[86353]]({ 'success'(dsewn) {
    window[k[86315]] = k[86354] + dsewn[k[86355]] + k[86356] + dsewn[k[86357]] + k[86358] + dsewn[k[64231]] + k[86359] + dsewn[k[60450]] + k[86360] + dsewn[k[83007]] + k[86361] + dsewn[k[86324]] + k[86362] + dsewn[k[68371]], console[k[60457]](window[k[86315]]), console[k[60457]](k[86363] + dsewn[k[86364]] + k[86365] + dsewn[k[86366]] + k[86367] + dsewn[k[86368]] + k[86369] + dsewn[k[86370]] + k[86371] + dsewn[k[86372]] + k[86373] + dsewn[k[86374]] + k[86375] + (dsewn[k[86376]] ? dsewn[k[86376]][k[60313]] + ',' + dsewn[k[86376]][k[61124]] + ',' + dsewn[k[86376]][k[61126]] + ',' + dsewn[k[86376]][k[61125]] : ''));var cod2j = dsewn[k[60450]] ? dsewn[k[60450]][k[70936]]() : '',
        xnwze8 = dsewn[k[86357]] ? dsewn[k[86357]][k[70936]]()[k[64218]]('\x20', '') : '';window['F$L6'][k[60486]] = cod2j[k[60114]](k[86377]) != -0x1, window['F$L6'][k[70131]] = cod2j[k[60114]](k[86378]) != -0x1, window['F$L6'][k[86379]] = cod2j[k[60114]](k[86377]) != -0x1 || cod2j[k[60114]](k[86378]) != -0x1, window['F$L6'][k[82733]] = cod2j[k[60114]](k[86380]) != -0x1 || cod2j[k[60114]](k[86381]) != -0x1, window['F$L6'][k[86382]] = dsewn[k[83007]] ? dsewn[k[83007]][k[70936]]() : '', window['F$L6']['F$I0L86'] = ![], window['F$L6']['F$I0L68'] = 0x2;if (cod2j[k[60114]](k[86378]) != -0x1) {
      if (dsewn[k[68371]] >= 0x18) window['F$L6']['F$I0L68'] = 0x3;else window['F$L6']['F$I0L68'] = 0x2;
    } else {
      if (cod2j[k[60114]](k[86377]) != -0x1) {
        if (dsewn[k[68371]] && dsewn[k[68371]] >= 0x14) window['F$L6']['F$I0L68'] = 0x3;else {
          if (xnwze8[k[60114]](k[86383]) != -0x1 || xnwze8[k[60114]](k[86384]) != -0x1 || xnwze8[k[60114]](k[86385]) != -0x1 || xnwze8[k[60114]](k[86386]) != -0x1 || xnwze8[k[60114]](k[86387]) != -0x1) window['F$L6']['F$I0L68'] = 0x2;else window['F$L6']['F$I0L68'] = 0x3;
        }
      } else window['F$L6']['F$I0L68'] = 0x2;
    }console[k[60457]](k[86388] + window['F$L6']['F$I0L86'] + k[86389] + window['F$L6']['F$I0L68']);
  } }), wx[k[86390]]({ 'success': function (iu19b) {
    console[k[60457]](k[86391] + iu19b[k[64137]] + k[86392] + iu19b[k[86393]]);
  } }), wx[k[86394]]({ 'success': function (qth05) {
    console[k[60457]](k[86395] + qth05[k[86396]]);
  } }), wx[k[86397]]({ 'keepScreenOn': !![] }), wx[k[86398]](function (kq2_4) {
  console[k[60457]](k[86395] + kq2_4[k[86396]] + k[86399] + kq2_4[k[86400]]);
}), wx[k[86401]](function (jcd6o2) {
  window['F$608'] = jcd6o2, window['F$680'] && window['F$608'] && (console[k[60077]](k[86402] + window['F$608'][k[60739]]), window['F$680'](window['F$608']), window['F$608'] = null);
}), window['F$IL608'] = 0x0, window[k[86403]] = null, wx[k[86404]](function () {
  window['F$IL608']++, wx[k[70512]]();if (window['F$IL608'] >= 0x2) {
    window['F$IL608'] = 0x0, console[k[60124]](k[86405]), wx[k[86406]]('0', 0x1);if (window['F$L6'] && window['F$L6'][k[60486]]) window['F$L60'](k[86407], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});