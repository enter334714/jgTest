var b = wx.$e;
console[b[40078]](b[68567]), window[b[68568]], wx[b[68569]](function (v4zrf) {
  if (v4zrf) {
    if (v4zrf[b[44453]]) {
      var zhflyr = window[b[40550]][b[68570]][b[44630]](new RegExp(/\./, 'g'), '_'),
          vaf_74 = v4zrf[b[44453]],
          gxji$ = vaf_74[b[51801]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);if (gxji$) for (var hlx = 0x0; hlx < gxji$[b[40013]]; hlx++) {
        if (gxji$[hlx] && gxji$[hlx][b[40013]] > 0x0) {
          var jitx$ = parseInt(gxji$[hlx][b[44630]](b[68571], '')[b[44630]](':', ''));vaf_74 = vaf_74[b[44630]](gxji$[hlx], gxji$[hlx][b[44630]](':' + jitx$ + ':', ':' + (jitx$ - 0x2) + ':'));
        }
      }vaf_74 = vaf_74[b[44630]](new RegExp(b[68572], 'g'), b[68573] + zhflyr + b[64764]), vaf_74 = vaf_74[b[44630]](new RegExp(b[68574], 'g'), b[68573] + zhflyr + b[64764]), v4zrf[b[44453]] = vaf_74;
    }var ghrt = { 'id': window['e1U0'][b[68575]], 'role': window['e1U0'][b[44572]], 'level': window['e1U0'][b[68576]], 'user': window['e1U0'][b[64666]], 'version': window['e1U0'][b[40101]], 'gamever': window[b[40550]][b[68570]], 'cdn': window['e1U0'][b[44452]], 'serverid': window['e1U0'][b[64661]] ? window['e1U0'][b[64661]][b[51294]] : 0x0, 'systemInfo': window[b[68577]], 'error': b[68578], 'stack': v4zrf ? v4zrf[b[44453]] : '' },
        hgx$t = JSON[b[44438]](ghrt);console[b[40125]](b[68579] + hgx$t), (!window[b[68568]] || window[b[68568]] != ghrt[b[40125]]) && (window[b[68568]] = ghrt[b[40125]], window['e11U'](ghrt));
  }
});import 'eeemd5min.js';import 'eeezlibs.js';window[b[68580]] = require(b[68581]);import 'eeeindex.js';import 'eeelibsmin.js';import 'eeewxmini.js';import 'eeeinitmin.js';console[b[40078]](b[68582]), console[b[40078]](b[68583]), e11UG0({ 'title': b[68584] });var ejx3qi = { 'e1I10UG': !![] };new window[b[68585]](ejx3qi), window[b[68585]][b[40148]]['e1IGU01']();if (window['e1I1U0G']) clearInterval(window['e1I1U0G']);window['e1I1U0G'] = null, window['e1IG01U'] = function (rhzvyf, jn$iq3) {
  if (!rhzvyf || !jn$iq3) return 0x0;rhzvyf = rhzvyf[b[40015]]('.'), jn$iq3 = jn$iq3[b[40015]]('.');const bd0k6 = Math[b[40846]](rhzvyf[b[40013]], jn$iq3[b[40013]]);while (rhzvyf[b[40013]] < bd0k6) {
    rhzvyf[b[40029]]('0');
  }while (jn$iq3[b[40013]] < bd0k6) {
    jn$iq3[b[40029]]('0');
  }for (var tgxrhl = 0x0; tgxrhl < bd0k6; tgxrhl++) {
    const xigj$t = parseInt(rhzvyf[tgxrhl]),
          jnq$ = parseInt(jn$iq3[tgxrhl]);if (xigj$t > jnq$) return 0x1;else {
      if (xigj$t < jnq$) return -0x1;
    }
  }return 0x0;
}, window[b[68586]] = wx[b[68587]]()[b[68586]], console[b[40475]](b[68588] + window[b[68586]]);var efzhv = wx[b[68589]]();efzhv[b[68590]](function (bd50k6) {
  console[b[40475]](b[68591] + bd50k6[b[68592]]);
}), efzhv[b[68593]](function () {
  wx[b[68594]]({ 'title': b[68595], 'content': b[68596], 'showCancel': ![], 'success': function (i3q$jx) {
      efzhv[b[68597]]();
    } });
}), efzhv[b[68598]](function () {
  console[b[40475]](b[68599]);
}), window['e1IG0U1'] = function () {
  console[b[40475]](b[68600]);var hlztr = wx[b[68601]]({ 'name': b[68602], 'success': function (qsn3uj) {
      console[b[40475]](b[68603]), console[b[40475]](qsn3uj), qsn3uj && qsn3uj[b[64847]] == b[68604] ? (window['e10G'] = !![], window['e10GU1'](), window['e10U1G']()) : setTimeout(function () {
        window['e1IG0U1']();
      }, 0x1f4);
    }, 'fail': function (jtgi) {
      console[b[40475]](b[68605]), console[b[40475]](jtgi), setTimeout(function () {
        window['e1IG0U1']();
      }, 0x1f4);
    } });hlztr && hlztr[b[68606]](b80d => {});
}, window['e1IU10G'] = function () {
  console[b[40475]](b[68607]);var xg$tli = wx[b[68601]]({ 'name': b[68608], 'success': function (sun6k) {
      console[b[40475]](b[68609]), console[b[40475]](sun6k), sun6k && sun6k[b[64847]] == b[68604] ? (window['e1UG0'] = !![], window['e10GU1'](), window['e10U1G']()) : setTimeout(function () {
        window['e1IU10G']();
      }, 0x1f4);
    }, 'fail': function (_4y) {
      console[b[40475]](b[68610]), console[b[40475]](_4y), setTimeout(function () {
        window['e1IU10G']();
      }, 0x1f4);
    } });xg$tli && xg$tli[b[68606]](k9n => {});
}, window[b[68611]] = function () {
  window['e1IG01U'](window[b[68586]], b[68612]) >= 0x0 ? (console[b[40475]](b[68613] + window[b[68586]] + b[68614]), window['e1U1'](), window['e1IG0U1'](), window['e1IU10G']()) : (window['e1U01'](b[68615], window[b[68586]]), wx[b[68594]]({ 'title': b[46286], 'content': b[68616] }));
}, window[b[68577]] = '', wx[b[68617]]({ 'success'(glxt$) {
    window[b[68577]] = b[68618] + glxt$[b[68619]] + b[68620] + glxt$[b[68621]] + b[68622] + glxt$[b[44643]] + b[68623] + glxt$[b[40468]] + b[68624] + glxt$[b[64637]] + b[68625] + glxt$[b[68586]] + b[68626] + glxt$[b[49095]], console[b[40475]](window[b[68577]]), console[b[40475]](b[68627] + glxt$[b[68628]] + b[68629] + glxt$[b[68630]] + b[68631] + glxt$[b[68632]] + b[68633] + glxt$[b[68634]] + b[68635] + glxt$[b[68636]] + b[68637] + glxt$[b[68638]] + b[68639] + (glxt$[b[68640]] ? glxt$[b[68640]][b[40320]] + ',' + glxt$[b[68640]][b[41209]] + ',' + glxt$[b[68640]][b[41211]] + ',' + glxt$[b[68640]][b[41210]] : ''));var tlgrhz = glxt$[b[40468]] ? glxt$[b[40468]][b[52086]]() : '',
        _yv74 = glxt$[b[68621]] ? glxt$[b[68621]][b[52086]]()[b[44630]]('\x20', '') : '';window['e1U0'][b[41069]] = tlgrhz[b[40115]](b[68271]) != -0x1, window['e1U0'][b[51116]] = tlgrhz[b[40115]](b[68270]) != -0x1, window['e1U0'][b[68641]] = tlgrhz[b[40115]](b[68271]) != -0x1 || tlgrhz[b[40115]](b[68270]) != -0x1, window['e1U0'][b[64354]] = tlgrhz[b[40115]](b[68642]) != -0x1 || tlgrhz[b[40115]](b[68276]) != -0x1, window['e1U0'][b[68643]] = glxt$[b[64637]] ? glxt$[b[64637]][b[52086]]() : '', window['e1U0']['e1I1G0U'] = ![], window['e1U0']['e1I1UG0'] = 0x2;if (tlgrhz[b[40115]](b[68270]) != -0x1) {
      if (glxt$[b[49095]] >= 0x18) window['e1U0']['e1I1UG0'] = 0x3;else window['e1U0']['e1I1UG0'] = 0x2;
    } else {
      if (tlgrhz[b[40115]](b[68271]) != -0x1) {
        if (glxt$[b[49095]] && glxt$[b[49095]] >= 0x14) window['e1U0']['e1I1UG0'] = 0x3;else {
          if (_yv74[b[40115]](b[68644]) != -0x1 || _yv74[b[40115]](b[68645]) != -0x1 || _yv74[b[40115]](b[68646]) != -0x1 || _yv74[b[40115]](b[68647]) != -0x1 || _yv74[b[40115]](b[68648]) != -0x1) window['e1U0']['e1I1UG0'] = 0x2;else window['e1U0']['e1I1UG0'] = 0x3;
        }
      } else window['e1U0']['e1I1UG0'] = 0x2;
    }console[b[40475]](b[68649] + window['e1U0']['e1I1G0U'] + b[68650] + window['e1U0']['e1I1UG0']);
  } }), wx[b[68651]]({ 'success': function (_ca7mo) {
    console[b[40475]](b[68652] + _ca7mo[b[44548]] + b[68653] + _ca7mo[b[68654]]);
  } }), wx[b[68655]]({ 'success': function (_f4y7) {
    console[b[40475]](b[68656] + _f4y7[b[68657]]);
  } }), wx[b[68658]]({ 'keepScreenOn': !![] }), wx[b[68659]](function (b9usk) {
  console[b[40475]](b[68656] + b9usk[b[68657]] + b[68660] + b9usk[b[68661]]);
}), wx[b[50628]](function (tlzhr) {
  window['e1G1'] = tlzhr, window['e101G'] && window['e1G1'] && (console[b[40078]](b[68662] + window['e1G1'][b[40769]]), window['e101G'](window['e1G1']), window['e1G1'] = null);
}), window['e1IUG01'] = 0x0, window[b[68663]] = null, wx[b[68664]](function () {
  window['e1IUG01']++, wx[b[51658]]();if (window['e1IUG01'] >= 0x2) {
    window['e1IUG01'] = 0x0, console[b[40125]](b[68665]), wx[b[68666]]('0', 0x1);if (window['e1U0'] && window['e1U0'][b[41069]]) window['e1U01'](b[68667], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});