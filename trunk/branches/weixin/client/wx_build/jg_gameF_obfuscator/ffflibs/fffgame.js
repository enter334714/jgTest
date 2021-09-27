var k = wx.$f;
console[k[77]](k[25483]), window[k[25484]], wx[k[25485]](function (pqi4) {
  if (pqi4) {
    if (pqi4[k[4010]]) {
      var u_nx = window[k[530]][k[25486]][k[4174]](new RegExp(/\./, 'g'), '_'),
          qhf3ti = pqi4[k[4010]],
          by2zd5 = qhf3ti[k[10518]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (by2zd5) for (var wusnx = 0x0; wusnx < by2zd5[k[13]]; wusnx++) {
        var wux_ns;by2zd5[wusnx] && 0x0 < by2zd5[wusnx][k[13]] && (wux_ns = parseInt(by2zd5[wusnx][k[4174]](k[25487], '')[k[4174]](':', '')), qhf3ti = qhf3ti[k[4174]](by2zd5[wusnx], by2zd5[wusnx][k[4174]](':' + wux_ns + ':', ':' + (wux_ns - 0x2) + ':')));
      }qhf3ti = (qhf3ti = qhf3ti[k[4174]](new RegExp(k[25488], 'g'), k[25489] + u_nx + k[22760]))[k[4174]](new RegExp(k[25490], 'g'), k[25489] + u_nx + k[22760]), pqi4[k[4010]] = qhf3ti;
    }u_nx = { 'id': window['F$B3'][k[25491]], 'role': window['F$B3'][k[4117]], 'level': window['F$B3'][k[25492]], 'user': window['F$B3'][k[22664]], 'version': window['F$B3'][k[100]], 'gamever': window[k[530]][k[25486]], 'cdn': window['F$B3'][k[4009]], 'serverid': window['F$B3'][k[22659]] ? window['F$B3'][k[22659]][k[10168]] : 0x0, 'systemInfo': window[k[25493]], 'error': k[25494], 'stack': pqi4 ? pqi4[k[4010]] : '' }, pqi4 = JSON[k[3997]](u_nx), (console[k[124]](k[25495] + pqi4), window[k[25484]] && window[k[25484]] == u_nx[k[124]] || (window[k[25484]] = u_nx[k[124]], window['F$JB'](u_nx)));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[25496]] = require(k[25497]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[77]](k[25498]), console[k[77]](k[25499]), F$JBL3({ 'title': k[25500] });var fdz5by = { 'F$ALJB3': !0x0 };new window[k[25501]](fdz5by), window[k[25501]][k[144]]['F$AL3JB'](), window['F$AJ3LB'] && clearInterval(window['F$AJ3LB']), window['F$AJ3LB'] = null, window['F$AL3BJ'] = function (g6a80, f4h) {
  if (!g6a80 || !f4h) return 0x0;g6a80 = g6a80[k[15]]('.'), f4h = f4h[k[15]]('.');var y5bzm = Math[k[810]](g6a80[k[13]], f4h[k[13]]);for (; g6a80[k[13]] < y5bzm;) g6a80[k[29]]('0');for (; f4h[k[13]] < y5bzm;) f4h[k[29]]('0');for (var k9n = 0x0; k9n < y5bzm; k9n++) {
    var iqp3fh = parseInt(g6a80[k9n]),
        nj9s1 = parseInt(f4h[k9n]);if (nj9s1 < iqp3fh) return 0x1;if (iqp3fh < nj9s1) return -0x1;
  }return 0x0;
}, window[k[25502]] = wx[k[25503]]()[k[25502]], console[k[457]](k[25504] + window[k[25502]]);var f$r0at = wx[k[25505]]();f$r0at['onCheckForUpdate'](function (xuzdw) {
  console[k[457]](k[25506] + xuzdw[k[25507]]);
}), f$r0at[k[25508]](function () {
  wx[k[25509]]({ 'title': k[25510], 'content': k[25511], 'showCancel': !0x1, 'success': function (g608oa) {
      f$r0at[k[25512]]();
    } });
}), f$r0at['onUpdateFailed'](function () {
  console[k[457]](k[25513]);
}), window['F$ABJL3'] = function () {
  console[k[457]](k[25514]);var ag6o8 = wx[k[25515]]({ 'name': k[25516], 'success': function ($hr3t) {
      console[k[457]](k[25517]), console[k[457]]($hr3t), $hr3t && k[25518] == $hr3t[k[22827]] ? (window['F$3L'] = !0x0, window['F$3BJL'](), window['F$3BLJ']()) : setTimeout(function () {
        window['F$ABJL3']();
      }, 0x1f4);
    }, 'fail': function (o8g) {
      console[k[457]](k[25519]), console[k[457]](o8g), setTimeout(function () {
        window['F$ABJL3']();
      }, 0x1f4);
    } });ag6o8 && ag6o8[k[25520]](f4hip => {});
}, window['F$ABLJ3'] = function () {
  console[k[457]](k[25521]);var b5ymve = wx[k[25515]]({ 'name': k[25522], 'success': function (mecyv) {
      console[k[457]](k[25523]), console[k[457]](mecyv), mecyv && k[25518] == mecyv[k[22827]] ? (window['F$BL3'] = !0x0, window['F$3BJL'](), window['F$3BLJ']()) : setTimeout(function () {
        window['F$ABLJ3']();
      }, 0x1f4);
    }, 'fail': function (hrt6$) {
      console[k[457]](k[25524]), console[k[457]](hrt6$), setTimeout(function () {
        window['F$ABLJ3']();
      }, 0x1f4);
    } });b5ymve && b5ymve[k[25520]](xs_u => {});
}, window[k[25525]] = function () {
  0x0 <= window['F$AL3BJ'](window[k[25502]], k[25526]) ? (console[k[457]](k[25527] + window[k[25502]] + k[25528]), window['F$BJ'](), window['F$ABJL3'](), window['F$ABLJ3']()) : (window['F$B3J'](k[25529] + window[k[25502]]), wx[k[25509]]({ 'title': k[5710], 'content': k[25530] }));
}, window[k[25493]] = '', wx[k[25531]]({ 'success'(wbud2) {
    window[k[25493]] = k[25532] + wbud2[k[25533]] + k[25534] + wbud2[k[25535]] + k[25536] + wbud2[k[4187]] + k[25537] + wbud2[k[450]] + k[25538] + wbud2[k[22635]] + k[25539] + wbud2[k[25502]] + k[25540] + wbud2[k[8274]], console[k[457]](window[k[25493]]), console[k[457]](k[25541] + wbud2[k[25542]] + k[25543] + wbud2[k[25544]] + k[25545] + wbud2[k[25546]] + k[25547] + wbud2[k[25548]] + k[25549] + wbud2[k[25550]] + k[25551] + wbud2[k[25552]] + k[25553] + (wbud2[k[25554]] ? wbud2[k[25554]][k[313]] + ',' + wbud2[k[25554]][k[1121]] + ',' + wbud2[k[25554]][k[1124]] + ',' + wbud2[k[25554]][k[1123]] : ''));var h6rt3$ = wbud2[k[450]] ? wbud2[k[450]][k[10754]]() : '',
        z2b = wbud2[k[25535]] ? wbud2[k[25535]][k[10754]]()[k[4174]]('\x20', '') : '';window['F$B3'][k[486]] = -0x1 != h6rt3$[k[114]](k[25555]), window['F$B3'][k[10007]] = -0x1 != h6rt3$[k[114]](k[25556]), window['F$B3'][k[25557]] = -0x1 != h6rt3$[k[114]](k[25555]) || -0x1 != h6rt3$[k[114]](k[25556]), window['F$B3'][k[22303]] = -0x1 != h6rt3$[k[114]](k[25558]) || -0x1 != h6rt3$[k[114]](k[25559]), window['F$B3'][k[25560]] = wbud2[k[22635]] ? wbud2[k[22635]][k[10754]]() : '', window['F$B3']['F$AJBL3'] = !0x1, -(window['F$B3']['F$AJB3L'] = 0x1) != h6rt3$[k[114]](k[25556]) ? 0x18 <= wbud2[k[8274]] ? window['F$B3']['F$AJB3L'] = 0x2 : window['F$B3']['F$AJB3L'] = 0x1 : -0x1 == h6rt3$[k[114]](k[25555]) || !(wbud2[k[8274]] && 0x14 <= wbud2[k[8274]] || -0x1 == z2b[k[114]](k[25561]) && -0x1 == z2b[k[114]](k[25562]) && -0x1 == z2b[k[114]](k[25563]) && -0x1 == z2b[k[114]](k[25564]) && -0x1 == z2b[k[114]](k[25565])) ? window['F$B3']['F$AJB3L'] = 0x1 : window['F$B3']['F$AJB3L'] = 0x2, console[k[457]](k[25566] + window['F$B3']['F$AJBL3'] + k[25567] + window['F$B3']['F$AJB3L']);
  } }), wx[k[25568]]({ 'success': function (b5yd) {
    console[k[457]](k[25569] + b5yd[k[4093]] + k[25570] + b5yd[k[25571]]);
  } }), wx[k[25572]]({ 'success': function (phq3f) {
    console[k[457]](k[25573] + phq3f[k[25574]]);
  } }), wx[k[25575]]({ 'keepScreenOn': !0x0 }), wx[k[25576]](function (u_sw) {
  console[k[457]](k[25573] + u_sw[k[25574]] + k[25577] + u_sw[k[25578]]);
}), wx[k[25579]](function ($rg0) {
  window['F$3JL'] = $rg0, window['F$3LJ'] && window['F$3JL'] && (console[k[77]](k[25580] + window['F$3JL'][k[736]]), window['F$3LJ'](window['F$3JL']), window['F$3JL'] = null);
}), window['F$AB3JL'] = 0x0, window[k[25581]] = null, wx[k[25582]](function () {
  window['F$AB3JL']++, wx[k[10332]](), 0x2 <= window['F$AB3JL'] && (window['F$AB3JL'] = 0x0, console[k[124]](k[25583]), wx[k[25584]]('0', 0x1), window['F$B3'] && window['F$B3'][k[486]] && window['F$B3J'](k[25585]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});