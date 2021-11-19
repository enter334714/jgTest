var m = wx.$g;
console[m[72]](m[26717]), window[m[26718]], wx[m[26719]](function (j$) {
  if (j$) {
    if (j$[m[4078]]) {
      var b5pax = window[m[530]][m[26720]][m[4254]](new RegExp(/\./, 'g'), '_'),
          zrjd26 = j$[m[4078]],
          sqvc7 = zrjd26[m[10862]](/(gggggggg\/gggggame.js:)[0-9]{1,60}(:)/g);if (sqvc7) for (var of3td4 = 0x0; of3td4 < sqvc7[m[13]]; of3td4++) {
        if (sqvc7[of3td4] && sqvc7[of3td4][m[13]] > 0x0) {
          var s9cl8 = parseInt(sqvc7[of3td4][m[4254]](m[26721], '')[m[4254]](':', ''));zrjd26 = zrjd26[m[4254]](sqvc7[of3td4], sqvc7[of3td4][m[4254]](':' + s9cl8 + ':', ':' + (s9cl8 - 0x2) + ':'));
        }
      }zrjd26 = zrjd26[m[4254]](new RegExp(m[26722], 'g'), m[26723] + b5pax + m[23432]), zrjd26 = zrjd26[m[4254]](new RegExp(m[26724], 'g'), m[26723] + b5pax + m[23432]), j$[m[4078]] = zrjd26;
    }var ev7 = { 'id': window['G$3J'][m[26725]], 'role': window['G$3J'][m[4198]], 'level': window['G$3J'][m[26726]], 'user': window['G$3J'][m[23338]], 'version': window['G$3J'][m[95]], 'gamever': window[m[530]][m[26720]], 'cdn': window['G$3J'][m[4077]], 'serverid': window['G$3J'][m[23333]] ? window['G$3J'][m[23333]][m[10493]] : 0x0, 'systemInfo': window[m[26727]], 'error': m[26728], 'stack': j$ ? j$[m[4078]] : '' },
        dt3fo = JSON[m[4063]](ev7);console[m[119]](m[26729] + dt3fo), (!window[m[26718]] || window[m[26718]] != ev7[m[119]]) && (window[m[26718]] = ev7[m[119]], window['G$23'](ev7));
  }
});import 'gggmd5min.js';import 'gggzlibs.js';window[m[26730]] = require(m[26731]);import 'gggindex.js';import 'ggglibsmin.js';import 'gggwxmini.js';import 'ggginitmin.js';import 'XingJuBox.js';console[m[72]](m[26732]), console[m[72]](m[26733]), G$230J({ 'title': m[26734] });var go34f_ = { 'G$V023J': !![] };new window[m[26735]](go34f_), window[m[26735]][m[141]]['G$V0J23']();if (window['G$V2J03']) clearInterval(window['G$V2J03']);window['G$V2J03'] = null, window['G$V0J32'] = function (p0_ft, o2zr6d) {
  if (!p0_ft || !o2zr6d) return 0x0;p0_ft = p0_ft[m[15]]('.'), o2zr6d = o2zr6d[m[15]]('.');const j$m6ru = Math[m[802]](p0_ft[m[13]], o2zr6d[m[13]]);while (p0_ft[m[13]] < j$m6ru) {
    p0_ft[m[29]]('0');
  }while (o2zr6d[m[13]] < j$m6ru) {
    o2zr6d[m[29]]('0');
  }for (var b0_5ip = 0x0; b0_5ip < j$m6ru; b0_5ip++) {
    const zj6dr = parseInt(p0_ft[b0_5ip]),
          pbi50 = parseInt(o2zr6d[b0_5ip]);if (zj6dr > pbi50) return 0x1;else {
      if (zj6dr < pbi50) return -0x1;
    }
  }return 0x0;
}, window[m[26736]] = wx[m[26737]]()[m[26736]], console[m[456]](m[26738] + window[m[26736]]);var gpb0tf_ = wx[m[26739]]();gpb0tf_[m[26740]](function (v7scgq) {
  console[m[456]](m[26741] + v7scgq[m[26742]]);
}), gpb0tf_[m[26743]](function () {
  wx[m[26744]]({ 'title': m[26745], 'content': m[26746], 'showCancel': ![], 'success': function (xh5iba) {
      gpb0tf_[m[26747]]();
    } });
}), gpb0tf_[m[26748]](function () {
  console[m[456]](m[26749]);
}), window['G$V320J'] = function () {
  console[m[456]](m[26750]);var _o3f4t = wx[m[26751]]({ 'name': m[26752], 'success': function (fo43_) {
      console[m[456]](m[26753]), console[m[456]](fo43_), fo43_ && fo43_[m[23517]] == m[26754] ? (window['G$J0'] = !![], window['G$J320'](), window['G$J302']()) : setTimeout(function () {
        window['G$V320J']();
      }, 0x1f4);
    }, 'fail': function (eqgv) {
      console[m[456]](m[26755]), console[m[456]](eqgv), setTimeout(function () {
        window['G$V320J']();
      }, 0x1f4);
    } });_o3f4t && _o3f4t[m[26756]](eh1ywk => {});
}, window['G$V302J'] = function () {
  console[m[456]](m[26757]);var z62do3 = wx[m[26751]]({ 'name': m[26758], 'success': function (m6ju$r) {
      console[m[456]](m[26759]), console[m[456]](m6ju$r), m6ju$r && m6ju$r[m[23517]] == m[26754] ? (window['G$30J'] = !![], window['G$J320'](), window['G$J302']()) : setTimeout(function () {
        window['G$V302J']();
      }, 0x1f4);
    }, 'fail': function (d34tz) {
      console[m[456]](m[26760]), console[m[456]](d34tz), setTimeout(function () {
        window['G$V302J']();
      }, 0x1f4);
    } });z62do3 && z62do3[m[26756]](tf0_4 => {});
}, window[m[26761]] = function () {
  window['G$V0J32'](window[m[26736]], m[26762]) >= 0x0 ? (console[m[456]](m[26763] + window[m[26736]] + m[26764]), window['G$32'](), window['G$V320J'](), window['G$V302J']()) : (window['G$3J2'](m[26765], window[m[26736]]), wx[m[26744]]({ 'title': m[5928], 'content': m[26766] }));
}, window[m[26727]] = '', wx[m[26767]]({ 'success'(xykhw1) {
    window[m[26727]] = m[26768] + xykhw1[m[26769]] + m[26770] + xykhw1[m[26771]] + m[26772] + xykhw1[m[4267]] + m[26773] + xykhw1[m[449]] + m[26774] + xykhw1[m[23309]] + m[26775] + xykhw1[m[26736]] + m[26776] + xykhw1[m[8522]], console[m[456]](window[m[26727]]), console[m[456]](m[26777] + xykhw1[m[26778]] + m[26779] + xykhw1[m[26780]] + m[26781] + xykhw1[m[26782]] + m[26783] + xykhw1[m[26784]] + m[26785] + xykhw1[m[26786]] + m[26787] + xykhw1[m[26788]] + m[26789] + (xykhw1[m[26790]] ? xykhw1[m[26790]][m[311]] + ',' + xykhw1[m[26790]][m[1113]] + ',' + xykhw1[m[26790]][m[1115]] + ',' + xykhw1[m[26790]][m[1114]] : ''));var ia1h5x = xykhw1[m[449]] ? xykhw1[m[449]][m[11103]]() : '',
        t4_pf0 = xykhw1[m[26771]] ? xykhw1[m[26771]][m[11103]]()[m[4254]]('\x20', '') : '';window['G$3J'][m[486]] = ia1h5x[m[109]](m[26791]) != -0x1, window['G$3J'][m[10330]] = ia1h5x[m[109]](m[26792]) != -0x1, window['G$3J'][m[26793]] = ia1h5x[m[109]](m[26791]) != -0x1 || ia1h5x[m[109]](m[26792]) != -0x1, window['G$3J'][m[23042]] = ia1h5x[m[109]](m[26794]) != -0x1 || ia1h5x[m[109]](m[26795]) != -0x1, window['G$3J'][m[26796]] = xykhw1[m[23309]] ? xykhw1[m[23309]][m[11103]]() : '', window['G$3J']['G$V230J'] = ![], window['G$3J']['G$V23J0'] = 0x2;if (ia1h5x[m[109]](m[26792]) != -0x1) {
      if (xykhw1[m[8522]] >= 0x18) window['G$3J']['G$V23J0'] = 0x3;else window['G$3J']['G$V23J0'] = 0x2;
    } else {
      if (ia1h5x[m[109]](m[26791]) != -0x1) {
        if (xykhw1[m[8522]] && xykhw1[m[8522]] >= 0x14) window['G$3J']['G$V23J0'] = 0x3;else {
          if (t4_pf0[m[109]](m[26797]) != -0x1 || t4_pf0[m[109]](m[26798]) != -0x1 || t4_pf0[m[109]](m[26799]) != -0x1 || t4_pf0[m[109]](m[26800]) != -0x1 || t4_pf0[m[109]](m[26801]) != -0x1) window['G$3J']['G$V23J0'] = 0x2;else window['G$3J']['G$V23J0'] = 0x3;
        }
      } else window['G$3J']['G$V23J0'] = 0x2;
    }console[m[456]](m[26802] + window['G$3J']['G$V230J'] + m[26803] + window['G$3J']['G$V23J0']);
  } }), wx[m[26804]]({ 'success': function (cq8g7) {
    console[m[456]](m[26805] + cq8g7[m[4174]] + m[26806] + cq8g7[m[26807]]);
  } }), wx[m[26808]]({ 'success': function (_o4tf3) {
    console[m[456]](m[26809] + _o4tf3[m[26810]]);
  } }), wx[m[26811]]({ 'keepScreenOn': !![] }), wx[m[26812]](function (f_50pb) {
  console[m[456]](m[26809] + f_50pb[m[26810]] + m[26813] + f_50pb[m[26814]]);
}), wx[m[26815]](function (yg7evq) {
  window['G$J20'] = yg7evq, window['G$J02'] && window['G$J20'] && (console[m[72]](m[26816] + window['G$J20'][m[731]]), window['G$J02'](window['G$J20']), window['G$J20'] = null);
}), window['G$V3J20'] = 0x0, window[m[26817]] = null, wx[m[26818]](function () {
  window['G$V3J20']++, wx['triggerGC']();if (window['G$V3J20'] >= 0x2) {
    window['G$V3J20'] = 0x0, console[m[119]](m[26819]), wx[m[26820]]('0', 0x1);if (window['G$3J'] && window['G$3J'][m[486]]) window['G$3J2'](m[26821], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});