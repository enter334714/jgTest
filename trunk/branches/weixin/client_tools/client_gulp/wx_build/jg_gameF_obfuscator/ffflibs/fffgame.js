var k = wx.$f;
console[k[60077]](k[86305]), window[k[86306]], wx[k[86307]](function (_qk25) {
  if (_qk25) {
    if (_qk25[k[64054]]) {
      var bu1v9g = window[k[60530]][k[86308]][k[64218]](new RegExp(/\./, 'g'), '_'),
          j6ocd2 = _qk25[k[64054]],
          q0k_h5 = j6ocd2[k[70700]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (q0k_h5) for (var tvfbim = 0x0; tvfbim < q0k_h5[k[60013]]; tvfbim++) {
        if (q0k_h5[tvfbim] && q0k_h5[tvfbim][k[60013]] > 0x0) {
          var ub1v9g = parseInt(q0k_h5[tvfbim][k[64218]](k[86309], '')[k[64218]](':', ''));j6ocd2 = j6ocd2[k[64218]](q0k_h5[tvfbim], q0k_h5[tvfbim][k[64218]](':' + ub1v9g + ':', ':' + (ub1v9g - 0x2) + ':'));
        }
      }j6ocd2 = j6ocd2[k[64218]](new RegExp(k[86310], 'g'), k[86311] + bu1v9g + k[83132]), j6ocd2 = j6ocd2[k[64218]](new RegExp(k[86312], 'g'), k[86311] + bu1v9g + k[83132]), _qk25[k[64054]] = j6ocd2;
    }var wnez8x = { 'id': window['F$L6'][k[86313]], 'role': window['F$L6'][k[64161]], 'level': window['F$L6'][k[86314]], 'user': window['F$L6'][k[83036]], 'version': window['F$L6'][k[60100]], 'gamever': window[k[60530]][k[86308]], 'cdn': window['F$L6'][k[64053]], 'serverid': window['F$L6'][k[83031]] ? window['F$L6'][k[83031]][k[70288]] : 0x0, 'systemInfo': window[k[86315]], 'error': k[86316], 'stack': _qk25 ? _qk25[k[64054]] : '' },
        $873ry = JSON[k[64039]](wnez8x);console[k[60124]](k[86317] + $873ry), (!window[k[86306]] || window[k[86306]] != wnez8x[k[60124]]) && (window[k[86306]] = wnez8x[k[60124]], window['F$0L'](wnez8x));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[86318]] = require(k[86319]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[60077]](k[86320]), console[k[60077]](k[86321]), F$0L86({ 'title': k[86322] });var fdcj2o = { 'F$I80L6': !![] };new window[k[86323]](fdcj2o), window[k[86323]][k[60144]]['F$I860L']();if (window['F$I068L']) clearInterval(window['F$I068L']);window['F$I068L'] = null, window['F$I86L0'] = function (odc6sj, fmtih) {
  if (!odc6sj || !fmtih) return 0x0;odc6sj = odc6sj[k[60015]]('.'), fmtih = fmtih[k[60015]]('.');const b1ug = Math[k[60813]](odc6sj[k[60013]], fmtih[k[60013]]);while (odc6sj[k[60013]] < b1ug) {
    odc6sj[k[60029]]('0');
  }while (fmtih[k[60013]] < b1ug) {
    fmtih[k[60029]]('0');
  }for (var o62c_4 = 0x0; o62c_4 < b1ug; o62c_4++) {
    const bfmuiv = parseInt(odc6sj[o62c_4]),
          k64_2o = parseInt(fmtih[o62c_4]);if (bfmuiv > k64_2o) return 0x1;else {
      if (bfmuiv < k64_2o) return -0x1;
    }
  }return 0x0;
}, window[k[86324]] = wx[k[86325]]()[k[86324]], console[k[60457]](k[86326] + window[k[86324]]);var fqht0mf = wx[k[86327]]();fqht0mf['onCheckForUpdate'](function (tihmf) {
  console[k[60457]](k[86328] + tihmf[k[86329]]);
}), fqht0mf[k[86330]](function () {
  wx[k[86331]]({ 'title': k[86332], 'content': k[86333], 'showCancel': ![], 'success': function (e8nzr) {
      fqht0mf[k[86334]]();
    } });
}), fqht0mf['onUpdateFailed'](function () {
  console[k[60457]](k[86335]);
}), window['F$IL086'] = function () {
  console[k[60457]](k[86336]);var cjo6sd = wx[k[86337]]({ 'name': k[86338], 'success': function (_q5) {
      console[k[60457]](k[86339]), console[k[60457]](_q5), _q5 && _q5[k[83203]] == k[86340] ? (window['F$68'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    }, 'fail': function (tfbhim) {
      console[k[60457]](k[86341]), console[k[60457]](tfbhim), setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    } });cjo6sd && cjo6sd[k[86342]](wcjdo => {});
}, window['F$IL806'] = function () {
  console[k[60457]](k[86343]);var q42k = wx[k[86337]]({ 'name': k[86344], 'success': function (o_62c) {
      console[k[60457]](k[86345]), console[k[60457]](o_62c), o_62c && o_62c[k[83203]] == k[86340] ? (window['F$L86'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    }, 'fail': function (nzx8ew) {
      console[k[60457]](k[86346]), console[k[60457]](nzx8ew), setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    } });q42k && q42k[k[86342]](coj2d6 => {});
}, window[k[86347]] = function () {
  window['F$I86L0'](window[k[86324]], k[86348]) >= 0x0 ? (console[k[60457]](k[86349] + window[k[86324]] + k[86350]), window['F$L0'](), window['F$IL086'](), window['F$IL806']()) : (window['F$L60'](k[86351], window[k[86324]]), wx[k[86331]]({ 'title': k[65795], 'content': k[86352] }));
}, window[k[86315]] = '', wx[k[86353]]({ 'success'(ra$y37) {
    window[k[86315]] = k[86354] + ra$y37[k[86355]] + k[86356] + ra$y37[k[86357]] + k[86358] + ra$y37[k[64231]] + k[86359] + ra$y37[k[60450]] + k[86360] + ra$y37[k[83007]] + k[86361] + ra$y37[k[86324]] + k[86362] + ra$y37[k[68371]], console[k[60457]](window[k[86315]]), console[k[60457]](k[86363] + ra$y37[k[86364]] + k[86365] + ra$y37[k[86366]] + k[86367] + ra$y37[k[86368]] + k[86369] + ra$y37[k[86370]] + k[86371] + ra$y37[k[86372]] + k[86373] + ra$y37[k[86374]] + k[86375] + (ra$y37[k[86376]] ? ra$y37[k[86376]][k[60313]] + ',' + ra$y37[k[86376]][k[61124]] + ',' + ra$y37[k[86376]][k[61126]] + ',' + ra$y37[k[86376]][k[61125]] : ''));var t50k = ra$y37[k[60450]] ? ra$y37[k[60450]][k[70936]]() : '',
        ry3a$7 = ra$y37[k[86357]] ? ra$y37[k[86357]][k[70936]]()[k[64218]]('\x20', '') : '';window['F$L6'][k[60486]] = t50k[k[60114]](k[86377]) != -0x1, window['F$L6'][k[70131]] = t50k[k[60114]](k[86378]) != -0x1, window['F$L6'][k[86379]] = t50k[k[60114]](k[86377]) != -0x1 || t50k[k[60114]](k[86378]) != -0x1, window['F$L6'][k[82733]] = t50k[k[60114]](k[86380]) != -0x1 || t50k[k[60114]](k[86381]) != -0x1, window['F$L6'][k[86382]] = ra$y37[k[83007]] ? ra$y37[k[83007]][k[70936]]() : '', window['F$L6']['F$I0L86'] = ![], window['F$L6']['F$I0L68'] = 0x2;if (t50k[k[60114]](k[86378]) != -0x1) {
      if (ra$y37[k[68371]] >= 0x18) window['F$L6']['F$I0L68'] = 0x3;else window['F$L6']['F$I0L68'] = 0x2;
    } else {
      if (t50k[k[60114]](k[86377]) != -0x1) {
        if (ra$y37[k[68371]] && ra$y37[k[68371]] >= 0x14) window['F$L6']['F$I0L68'] = 0x3;else {
          if (ry3a$7[k[60114]](k[86383]) != -0x1 || ry3a$7[k[60114]](k[86384]) != -0x1 || ry3a$7[k[60114]](k[86385]) != -0x1 || ry3a$7[k[60114]](k[86386]) != -0x1 || ry3a$7[k[60114]](k[86387]) != -0x1) window['F$L6']['F$I0L68'] = 0x2;else window['F$L6']['F$I0L68'] = 0x3;
        }
      } else window['F$L6']['F$I0L68'] = 0x2;
    }console[k[60457]](k[86388] + window['F$L6']['F$I0L86'] + k[86389] + window['F$L6']['F$I0L68']);
  } }), wx[k[86390]]({ 'success': function (ndwsex) {
    console[k[60457]](k[86391] + ndwsex[k[64137]] + k[86392] + ndwsex[k[86393]]);
  } }), wx[k[86394]]({ 'success': function (htbmif) {
    console[k[60457]](k[86395] + htbmif[k[86396]]);
  } }), wx[k[86397]]({ 'keepScreenOn': !![] }), wx[k[86398]](function (ojcwd) {
  console[k[60457]](k[86395] + ojcwd[k[86396]] + k[86399] + ojcwd[k[86400]]);
}), wx[k[86401]](function (fbmth) {
  window['F$608'] = fbmth, window['F$680'] && window['F$608'] && (console[k[60077]](k[86402] + window['F$608'][k[60739]]), window['F$680'](window['F$608']), window['F$608'] = null);
}), window['F$IL608'] = 0x0, window[k[86403]] = null, wx[k[86404]](function () {
  window['F$IL608']++, wx[k[70512]]();if (window['F$IL608'] >= 0x2) {
    window['F$IL608'] = 0x0, console[k[60124]](k[86405]), wx[k[86406]]('0', 0x1);if (window['F$L6'] && window['F$L6'][k[60486]]) window['F$L60'](k[86407], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});