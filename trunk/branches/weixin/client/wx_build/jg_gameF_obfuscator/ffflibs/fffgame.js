var k = wx.$f;
console[k[77]](k[26163]), window[k[26164]], wx[k[26165]](function (s5yotp) {
  if (s5yotp) {
    if (s5yotp[k[4009]]) {
      var s5dp2y = window[k[530]][k[26166]][k[4173]](new RegExp(/\./, 'g'), '_'),
          gb7uf = s5yotp[k[4009]],
          sdy25p = gb7uf[k[10519]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (sdy25p) for (var av$j3z = 0x0; av$j3z < sdy25p[k[13]]; av$j3z++) {
        var fgmb7u;sdy25p[av$j3z] && 0x0 < sdy25p[av$j3z][k[13]] && (fgmb7u = parseInt(sdy25p[av$j3z][k[4173]](k[26167], '')[k[4173]](':', '')), gb7uf = gb7uf[k[4173]](sdy25p[av$j3z], sdy25p[av$j3z][k[4173]](':' + fgmb7u + ':', ':' + (fgmb7u - 0x2) + ':')));
      }gb7uf = (gb7uf = gb7uf[k[4173]](new RegExp(k[26168], 'g'), k[26169] + s5dp2y + k[22764]))[k[4173]](new RegExp(k[26170], 'g'), k[26169] + s5dp2y + k[22764]), s5yotp[k[4009]] = gb7uf;
    }s5dp2y = { 'id': window['F$B2'][k[26171]], 'role': window['F$B2'][k[4116]], 'level': window['F$B2'][k[26172]], 'user': window['F$B2'][k[22668]], 'version': window['F$B2'][k[100]], 'gamever': window[k[530]][k[26166]], 'cdn': window['F$B2'][k[4008]], 'serverid': window['F$B2'][k[22663]] ? window['F$B2'][k[22663]][k[10169]] : 0x0, 'systemInfo': window[k[26173]], 'error': k[26174], 'stack': s5yotp ? s5yotp[k[4009]] : '' }, s5yotp = JSON[k[3996]](s5dp2y), (console[k[124]](k[26175] + s5yotp), window[k[26164]] && window[k[26164]] == s5dp2y[k[124]] || (window[k[26164]] = s5dp2y[k[124]], window['F$LB'](s5dp2y)));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[26176]] = require(k[26177]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[77]](k[26178]), console[k[77]](k[26179]), F$LB12({ 'title': k[26180] });var fo109t = { 'F$U1LB2': !0x0 };new window[k[26181]](fo109t), window[k[26181]][k[144]]['F$U12LB'](), window['F$UL21B'] && clearInterval(window['F$UL21B']), window['F$UL21B'] = null, window['F$U12BL'] = function (uif7, ajr$) {
  if (!uif7 || !ajr$) return 0x0;uif7 = uif7[k[15]]('.'), ajr$ = ajr$[k[15]]('.');var q901xk = Math[k[810]](uif7[k[13]], ajr$[k[13]]);for (; uif7[k[13]] < q901xk;) uif7[k[29]]('0');for (; ajr$[k[13]] < q901xk;) ajr$[k[29]]('0');for (var fwb7 = 0x0; fwb7 < q901xk; fwb7++) {
    var tsxo0 = parseInt(uif7[fwb7]),
        kvce64 = parseInt(ajr$[fwb7]);if (kvce64 < tsxo0) return 0x1;if (tsxo0 < kvce64) return -0x1;
  }return 0x0;
}, window[k[26182]] = wx[k[26183]]()[k[26182]], console[k[457]](k[26184] + window[k[26182]]);var fjbgmr_ = wx[k[26185]]();fjbgmr_['onCheckForUpdate'](function (oyx1) {
  console[k[457]](k[26186] + oyx1[k[26187]]);
}), fjbgmr_[k[26188]](function () {
  wx[k[26189]]({ 'title': k[26190], 'content': k[26191], 'showCancel': !0x1, 'success': function (odsp5) {
      fjbgmr_[k[26192]]();
    } });
}), fjbgmr_['onUpdateFailed'](function () {
  console[k[457]](k[26193]);
}), window['F$UBL12'] = function () {
  console[k[457]](k[26194]);var f7inw = wx[k[26195]]({ 'name': k[26196], 'success': function (fmui7) {
      console[k[457]](k[26197]), console[k[457]](fmui7), fmui7 && k[26198] == fmui7[k[22828]] ? (window['F$21'] = !0x0, window['F$2BL1'](), window['F$2B1L']()) : setTimeout(function () {
        window['F$UBL12']();
      }, 0x1f4);
    }, 'fail': function (zcv34e) {
      console[k[457]](k[26199]), console[k[457]](zcv34e), setTimeout(function () {
        window['F$UBL12']();
      }, 0x1f4);
    } });f7inw && f7inw[k[26200]](mra_ => {});
}, window['F$UB1L2'] = function () {
  console[k[457]](k[26201]);var _jz$a3 = wx[k[26195]]({ 'name': k[26202], 'success': function (uifbw) {
      console[k[457]](k[26203]), console[k[457]](uifbw), uifbw && k[26198] == uifbw[k[22828]] ? (window['F$B12'] = !0x0, window['F$2BL1'](), window['F$2B1L']()) : setTimeout(function () {
        window['F$UB1L2']();
      }, 0x1f4);
    }, 'fail': function (qc6) {
      console[k[457]](k[26204]), console[k[457]](qc6), setTimeout(function () {
        window['F$UB1L2']();
      }, 0x1f4);
    } });_jz$a3 && _jz$a3[k[26200]](azc$ => {});
}, window[k[26205]] = function () {
  0x0 <= window['F$U12BL'](window[k[26182]], k[26206]) ? (console[k[457]](k[26207] + window[k[26182]] + k[26208]), window['F$BL'](), window['F$UBL12'](), window['F$UB1L2']()) : (window['F$B2L'](k[26209] + window[k[26182]]), wx[k[26189]]({ 'title': k[5709], 'content': k[26210] }));
}, window[k[26173]] = '', wx[k[26211]]({ 'success'(s52yd) {
    window[k[26173]] = k[26212] + s52yd[k[26213]] + k[26214] + s52yd[k[26215]] + k[26216] + s52yd[k[4186]] + k[26217] + s52yd[k[450]] + k[26218] + s52yd[k[22639]] + k[26219] + s52yd[k[26182]] + k[26220] + s52yd[k[8274]], console[k[457]](window[k[26173]]), console[k[457]](k[26221] + s52yd[k[26222]] + k[26223] + s52yd[k[26224]] + k[26225] + s52yd[k[26226]] + k[26227] + s52yd[k[26228]] + k[26229] + s52yd[k[26230]] + k[26231] + s52yd[k[26232]] + k[26233] + (s52yd[k[26234]] ? s52yd[k[26234]][k[313]] + ',' + s52yd[k[26234]][k[1121]] + ',' + s52yd[k[26234]][k[1124]] + ',' + s52yd[k[26234]][k[1123]] : ''));var ra_jg$ = s52yd[k[450]] ? s52yd[k[450]][k[10753]]() : '',
        m_gaj = s52yd[k[26215]] ? s52yd[k[26215]][k[10753]]()[k[4173]]('\x20', '') : '';window['F$B2'][k[486]] = -0x1 != ra_jg$[k[114]](k[26235]), window['F$B2'][k[10008]] = -0x1 != ra_jg$[k[114]](k[26074]), window['F$B2'][k[26236]] = -0x1 != ra_jg$[k[114]](k[26235]) || -0x1 != ra_jg$[k[114]](k[26074]), window['F$B2'][k[22300]] = -0x1 != ra_jg$[k[114]](k[26237]) || -0x1 != ra_jg$[k[114]](k[26238]), window['F$B2'][k[26239]] = s52yd[k[22639]] ? s52yd[k[22639]][k[10753]]() : '', window['F$B2']['F$ULB12'] = !0x1, -(window['F$B2']['F$ULB21'] = 0x1) != ra_jg$[k[114]](k[26074]) ? 0x18 <= s52yd[k[8274]] ? window['F$B2']['F$ULB21'] = 0x2 : window['F$B2']['F$ULB21'] = 0x1 : -0x1 == ra_jg$[k[114]](k[26235]) || !(s52yd[k[8274]] && 0x14 <= s52yd[k[8274]] || -0x1 == m_gaj[k[114]](k[26240]) && -0x1 == m_gaj[k[114]](k[26241]) && -0x1 == m_gaj[k[114]](k[26242]) && -0x1 == m_gaj[k[114]](k[26243]) && -0x1 == m_gaj[k[114]](k[26244])) ? window['F$B2']['F$ULB21'] = 0x1 : window['F$B2']['F$ULB21'] = 0x2, console[k[457]](k[26245] + window['F$B2']['F$ULB12'] + k[26246] + window['F$B2']['F$ULB21']);
  } }), wx[k[26247]]({ 'success': function (tpoy5) {
    console[k[457]](k[26248] + tpoy5[k[4092]] + k[26249] + tpoy5[k[26250]]);
  } }), wx[k[26251]]({ 'success': function (am) {
    console[k[457]](k[26252] + am[k[26253]]);
  } }), wx[k[26254]]({ 'keepScreenOn': !0x0 }), wx[k[26255]](function (rmg7u) {
  console[k[457]](k[26252] + rmg7u[k[26253]] + k[26256] + rmg7u[k[26257]]);
}), wx[k[26258]](function (_jar3) {
  window['F$2L1'] = _jar3, window['F$21L'] && window['F$2L1'] && (console[k[77]](k[26259] + window['F$2L1'][k[736]]), window['F$21L'](window['F$2L1']), window['F$2L1'] = null);
}), window['F$UB2L1'] = 0x0, window[k[26260]] = null, wx[k[26261]](function () {
  window['F$UB2L1']++, wx[k[10333]](), 0x2 <= window['F$UB2L1'] && (window['F$UB2L1'] = 0x0, console[k[124]](k[26262]), wx[k[26263]]('0', 0x1), window['F$B2'] && window['F$B2'][k[486]] && window['F$B2L'](k[26264]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});