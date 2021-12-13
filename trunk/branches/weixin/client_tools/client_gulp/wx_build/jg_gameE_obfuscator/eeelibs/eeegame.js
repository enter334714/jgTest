var b = wx.$e;
console[b[40078]](b[68567]), window[b[68568]], wx[b[68569]](function (yfvrhz) {
  if (yfvrhz) {
    if (yfvrhz[b[44453]]) {
      var x3jiq = window[b[40550]][b[68570]][b[44630]](new RegExp(/\./, 'g'), '_'),
          a4mc7 = yfvrhz[b[44453]],
          b658d = a4mc7[b[51802]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);if (b658d) for (var bk0d5 = 0x0; bk0d5 < b658d[b[40013]]; bk0d5++) {
        if (b658d[bk0d5] && b658d[bk0d5][b[40013]] > 0x0) {
          var hfzrv = parseInt(b658d[bk0d5][b[44630]](b[68571], '')[b[44630]](':', ''));a4mc7 = a4mc7[b[44630]](b658d[bk0d5], b658d[bk0d5][b[44630]](':' + hfzrv + ':', ':' + (hfzrv - 0x2) + ':'));
        }
      }a4mc7 = a4mc7[b[44630]](new RegExp(b[68572], 'g'), b[68573] + x3jiq + b[64765]), a4mc7 = a4mc7[b[44630]](new RegExp(b[68574], 'g'), b[68573] + x3jiq + b[64765]), yfvrhz[b[44453]] = a4mc7;
    }var vm74 = { 'id': window['e1U0'][b[68575]], 'role': window['e1U0'][b[44572]], 'level': window['e1U0'][b[68576]], 'user': window['e1U0'][b[64667]], 'version': window['e1U0'][b[40101]], 'gamever': window[b[40550]][b[68570]], 'cdn': window['e1U0'][b[44452]], 'serverid': window['e1U0'][b[64662]] ? window['e1U0'][b[64662]][b[51294]] : 0x0, 'systemInfo': window[b[68577]], 'error': b[68578], 'stack': yfvrhz ? yfvrhz[b[44453]] : '' },
        gtrl = JSON[b[44438]](vm74);console[b[40125]](b[68579] + gtrl), (!window[b[68568]] || window[b[68568]] != vm74[b[40125]]) && (window[b[68568]] = vm74[b[40125]], window['e11U'](vm74));
  }
});import 'eeemd5min.js';import 'eeezlibs.js';window[b[68580]] = require(b[68581]);import 'eeeindex.js';import 'eeelibsmin.js';import 'eeewxmini.js';import 'eeeinitmin.js';console[b[40078]](b[68582]), console[b[40078]](b[68583]), e11UG0({ 'title': b[68584] });var ek9usn = { 'e1I10UG': !![] };new window[b[68585]](ek9usn), window[b[68585]][b[40148]]['e1IGU01']();if (window['e1I1U0G']) clearInterval(window['e1I1U0G']);window['e1I1U0G'] = null, window['e1IG01U'] = function (xhrgtl, j3ns) {
  if (!xhrgtl || !j3ns) return 0x0;xhrgtl = xhrgtl[b[40015]]('.'), j3ns = j3ns[b[40015]]('.');const glx$th = Math[b[40846]](xhrgtl[b[40013]], j3ns[b[40013]]);while (xhrgtl[b[40013]] < glx$th) {
    xhrgtl[b[40029]]('0');
  }while (j3ns[b[40013]] < glx$th) {
    j3ns[b[40029]]('0');
  }for (var lghtzr = 0x0; lghtzr < glx$th; lghtzr++) {
    const u9n6s = parseInt(xhrgtl[lghtzr]),
          lgxhrt = parseInt(j3ns[lghtzr]);if (u9n6s > lgxhrt) return 0x1;else {
      if (u9n6s < lgxhrt) return -0x1;
    }
  }return 0x0;
}, window[b[68586]] = wx[b[68587]]()[b[68586]], console[b[40475]](b[68588] + window[b[68586]]);var eylrfz = wx[b[68589]]();eylrfz[b[68590]](function (f_a4v) {
  console[b[40475]](b[68591] + f_a4v[b[68592]]);
}), eylrfz[b[68593]](function () {
  wx[b[68594]]({ 'title': b[68595], 'content': b[68596], 'showCancel': ![], 'success': function (zghrt) {
      eylrfz[b[68597]]();
    } });
}), eylrfz[b[68598]](function () {
  console[b[40475]](b[68599]);
}), window['e1IG0U1'] = function () {
  console[b[40475]](b[68600]);var rhfly = wx[b[68601]]({ 'name': b[68602], 'success': function (r4zy) {
      console[b[40475]](b[68603]), console[b[40475]](r4zy), r4zy && r4zy[b[64848]] == b[68604] ? (window['e10G'] = !![], window['e10GU1'](), window['e10U1G']()) : setTimeout(function () {
        window['e1IG0U1']();
      }, 0x1f4);
    }, 'fail': function (c_7moa) {
      console[b[40475]](b[68605]), console[b[40475]](c_7moa), setTimeout(function () {
        window['e1IG0U1']();
      }, 0x1f4);
    } });rhfly && rhfly[b[68606]](jn3sq => {});
}, window['e1IU10G'] = function () {
  console[b[40475]](b[68607]);var qnj = wx[b[68601]]({ 'name': b[68608], 'success': function (tgji$x) {
      console[b[40475]](b[68609]), console[b[40475]](tgji$x), tgji$x && tgji$x[b[64848]] == b[68604] ? (window['e1UG0'] = !![], window['e10GU1'](), window['e10U1G']()) : setTimeout(function () {
        window['e1IU10G']();
      }, 0x1f4);
    }, 'fail': function (cmao7_) {
      console[b[40475]](b[68610]), console[b[40475]](cmao7_), setTimeout(function () {
        window['e1IU10G']();
      }, 0x1f4);
    } });qnj && qnj[b[68606]](lx$i => {});
}, window[b[68611]] = function () {
  window['e1IG01U'](window[b[68586]], b[68612]) >= 0x0 ? (console[b[40475]](b[68613] + window[b[68586]] + b[68614]), window['e1U1'](), window['e1IG0U1'](), window['e1IU10G']()) : (window['e1U01'](b[68615], window[b[68586]]), wx[b[68594]]({ 'title': b[46286], 'content': b[68616] }));
}, window[b[68577]] = '', wx[b[68617]]({ 'success'(hlgtz) {
    window[b[68577]] = b[68618] + hlgtz[b[68619]] + b[68620] + hlgtz[b[68621]] + b[68622] + hlgtz[b[44643]] + b[68623] + hlgtz[b[40468]] + b[68624] + hlgtz[b[64638]] + b[68625] + hlgtz[b[68586]] + b[68626] + hlgtz[b[49095]], console[b[40475]](window[b[68577]]), console[b[40475]](b[68627] + hlgtz[b[68628]] + b[68629] + hlgtz[b[68630]] + b[68631] + hlgtz[b[68632]] + b[68633] + hlgtz[b[68634]] + b[68635] + hlgtz[b[68636]] + b[68637] + hlgtz[b[68638]] + b[68639] + (hlgtz[b[68640]] ? hlgtz[b[68640]][b[40320]] + ',' + hlgtz[b[68640]][b[41209]] + ',' + hlgtz[b[68640]][b[41211]] + ',' + hlgtz[b[68640]][b[41210]] : ''));var jnqi3$ = hlgtz[b[40468]] ? hlgtz[b[40468]][b[52087]]() : '',
        db0w85 = hlgtz[b[68621]] ? hlgtz[b[68621]][b[52087]]()[b[44630]]('\x20', '') : '';window['e1U0'][b[41069]] = jnqi3$[b[40115]](b[67880]) != -0x1, window['e1U0'][b[51116]] = jnqi3$[b[40115]](b[67879]) != -0x1, window['e1U0'][b[68641]] = jnqi3$[b[40115]](b[67880]) != -0x1 || jnqi3$[b[40115]](b[67879]) != -0x1, window['e1U0'][b[64355]] = jnqi3$[b[40115]](b[68642]) != -0x1 || jnqi3$[b[40115]](b[67885]) != -0x1, window['e1U0'][b[68643]] = hlgtz[b[64638]] ? hlgtz[b[64638]][b[52087]]() : '', window['e1U0']['e1I1G0U'] = ![], window['e1U0']['e1I1UG0'] = 0x2;if (jnqi3$[b[40115]](b[67879]) != -0x1) {
      if (hlgtz[b[49095]] >= 0x18) window['e1U0']['e1I1UG0'] = 0x3;else window['e1U0']['e1I1UG0'] = 0x2;
    } else {
      if (jnqi3$[b[40115]](b[67880]) != -0x1) {
        if (hlgtz[b[49095]] && hlgtz[b[49095]] >= 0x14) window['e1U0']['e1I1UG0'] = 0x3;else {
          if (db0w85[b[40115]](b[68644]) != -0x1 || db0w85[b[40115]](b[68645]) != -0x1 || db0w85[b[40115]](b[68646]) != -0x1 || db0w85[b[40115]](b[68647]) != -0x1 || db0w85[b[40115]](b[68648]) != -0x1) window['e1U0']['e1I1UG0'] = 0x2;else window['e1U0']['e1I1UG0'] = 0x3;
        }
      } else window['e1U0']['e1I1UG0'] = 0x2;
    }console[b[40475]](b[68649] + window['e1U0']['e1I1G0U'] + b[68650] + window['e1U0']['e1I1UG0']);
  } }), wx[b[68651]]({ 'success': function (sn3ujq) {
    console[b[40475]](b[68652] + sn3ujq[b[44548]] + b[68653] + sn3ujq[b[68654]]);
  } }), wx[b[68655]]({ 'success': function (w05d8) {
    console[b[40475]](b[68656] + w05d8[b[68657]]);
  } }), wx[b[68658]]({ 'keepScreenOn': !![] }), wx[b[68659]](function (m47_c) {
  console[b[40475]](b[68656] + m47_c[b[68657]] + b[68660] + m47_c[b[68661]]);
}), wx[b[50628]](function (kus69n) {
  window['e1G1'] = kus69n, window['e101G'] && window['e1G1'] && (console[b[40078]](b[68662] + window['e1G1'][b[40769]]), window['e101G'](window['e1G1']), window['e1G1'] = null);
}), window['e1IUG01'] = 0x0, window[b[68663]] = null, wx[b[68664]](function () {
  window['e1IUG01']++, wx[b[51659]]();if (window['e1IUG01'] >= 0x2) {
    window['e1IUG01'] = 0x0, console[b[40125]](b[68665]), wx[b[68666]]('0', 0x1);if (window['e1U0'] && window['e1U0'][b[41069]]) window['e1U01'](b[68667], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});