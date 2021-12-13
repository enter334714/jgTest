var p = wx.$h;
console[p[20078]](p[48540]), window[p[48541]], wx[p[48542]](function (s15dcm) {
  if (s15dcm) {
    if (s15dcm[p[24486]]) {
      var i6k8 = window[p[20550]][p[48543]][p[24664]](new RegExp(/\./, 'g'), '_'),
          f3j7a4 = s15dcm[p[24486]],
          _hg0v = f3j7a4[p[31837]](/(cccccccc\/cccgame.js:)[0-9]{1,60}(:)/g);if (_hg0v) for (var s5ml = 0x0; s5ml < _hg0v[p[20013]]; s5ml++) {
        if (_hg0v[s5ml] && _hg0v[s5ml][p[20013]] > 0x0) {
          var h_k08g = parseInt(_hg0v[s5ml][p[24664]](p[48544], '')[p[24664]](':', ''));f3j7a4 = f3j7a4[p[24664]](_hg0v[s5ml], _hg0v[s5ml][p[24664]](':' + h_k08g + ':', ':' + (h_k08g - 0x2) + ':'));
        }
      }f3j7a4 = f3j7a4[p[24664]](new RegExp(p[48545], 'g'), p[48546] + i6k8 + p[44883]), f3j7a4 = f3j7a4[p[24664]](new RegExp(p[48547], 'g'), p[48546] + i6k8 + p[44883]), s15dcm[p[24486]] = f3j7a4;
    }var wrxpn = { 'id': window['$aQV'][p[48548]], 'role': window['$aQV'][p[24606]], 'level': window['$aQV'][p[48549]], 'user': window['$aQV'][p[44785]], 'version': window['$aQV'][p[20101]], 'gamever': window[p[20550]][p[48543]], 'cdn': window['$aQV'][p[24485]], 'serverid': window['$aQV'][p[44780]] ? window['$aQV'][p[44780]][p[31329]] : 0x0, 'systemInfo': window[p[48550]], 'error': p[48551], 'stack': s15dcm ? s15dcm[p[24486]] : '' },
        jstf = JSON[p[24471]](wrxpn);console[p[20125]](p[48552] + jstf), (!window[p[48541]] || window[p[48541]] != wrxpn[p[20125]]) && (window[p[48541]] = wrxpn[p[20125]], window['$a5Q'](wrxpn));
  }
});import 'cccmd5min.js';import 'ccczlibs.js';window[p[48553]] = require(p[48554]);import 'cccindex.js';import 'ccclibsmin.js';import 'cccwxmini.js';import 'cccinitmin.js';console[p[20078]](p[48555]), console[p[20078]](p[48556]), $a5Q3V({ 'title': p[48557] });var a_nw4pr = { '$aH5VQ3': !![] };new window[p[48558]](a_nw4pr), window[p[48558]][p[20148]]['$aH3QV5']();if (window['$aH5QV3']) clearInterval(window['$aH5QV3']);window['$aH5QV3'] = null, window['$aH3V5Q'] = function (jts3f, e9iy) {
  if (!jts3f || !e9iy) return 0x0;jts3f = jts3f[p[20015]]('.'), e9iy = e9iy[p[20015]]('.');const j1s3ft = Math[p[20846]](jts3f[p[20013]], e9iy[p[20013]]);while (jts3f[p[20013]] < j1s3ft) {
    jts3f[p[20029]]('0');
  }while (e9iy[p[20013]] < j1s3ft) {
    e9iy[p[20029]]('0');
  }for (var b6ie = 0x0; b6ie < j1s3ft; b6ie++) {
    const vxr = parseInt(jts3f[b6ie]),
          jt731 = parseInt(e9iy[b6ie]);if (vxr > jt731) return 0x1;else {
      if (vxr < jt731) return -0x1;
    }
  }return 0x0;
}, window[p[48559]] = wx[p[48560]]()[p[48559]], console[p[20475]](p[48561] + window[p[48559]]);var a_rv_nx = wx[p[48562]]();a_rv_nx[p[48563]](function (xg2_vn) {
  console[p[20475]](p[48564] + xg2_vn[p[48565]]);
}), a_rv_nx[p[48566]](function () {
  wx[p[48567]]({ 'title': p[48568], 'content': p[48569], 'showCancel': ![], 'success': function (hk8g0) {
      a_rv_nx[p[48570]]();
    } });
}), a_rv_nx[p[48571]](function () {
  console[p[20475]](p[48572]);
}), window['$aH3VQ5'] = function () {
  console[p[20475]](p[48573]);var vg0_2 = wx[p[48574]]({ 'name': p[48575], 'success': function (x2wr) {
      console[p[20475]](p[48576]), console[p[20475]](x2wr), x2wr && x2wr[p[44966]] == p[48577] ? (window['$aV3'] = !![], window['$aV3Q5'](), window['$aVQ53']()) : setTimeout(function () {
        window['$aH3VQ5']();
      }, 0x1f4);
    }, 'fail': function (tds) {
      console[p[20475]](p[48578]), console[p[20475]](tds), setTimeout(function () {
        window['$aH3VQ5']();
      }, 0x1f4);
    } });vg0_2 && vg0_2[p[48579]](_gkh8 => {});
}, window['$aHQ5V3'] = function () {
  console[p[20475]](p[48580]);var h80gv = wx[p[48574]]({ 'name': p[48581], 'success': function (cdmsl) {
      console[p[20475]](p[48582]), console[p[20475]](cdmsl), cdmsl && cdmsl[p[44966]] == p[48577] ? (window['$aQ3V'] = !![], window['$aV3Q5'](), window['$aVQ53']()) : setTimeout(function () {
        window['$aHQ5V3']();
      }, 0x1f4);
    }, 'fail': function (cds5m1) {
      console[p[20475]](p[48583]), console[p[20475]](cds5m1), setTimeout(function () {
        window['$aHQ5V3']();
      }, 0x1f4);
    } });h80gv && h80gv[p[48579]](v_8h => {});
}, window[p[48584]] = function () {
  window['$aH3V5Q'](window[p[48559]], p[48585]) >= 0x0 ? (console[p[20475]](p[48586] + window[p[48559]] + p[48587]), window['$aQ5'](), window['$aH3VQ5'](), window['$aHQ5V3']()) : (window['$aQV5'](p[48588], window[p[48559]]), wx[p[48567]]({ 'title': p[26321], 'content': p[48589] }));
}, window[p[48550]] = '', wx[p[48590]]({ 'success'(h8$e6k) {
    window[p[48550]] = p[48591] + h8$e6k[p[48592]] + p[48593] + h8$e6k[p[48594]] + p[48595] + h8$e6k[p[24677]] + p[48596] + h8$e6k[p[20468]] + p[48597] + h8$e6k[p[44756]] + p[48598] + h8$e6k[p[48559]] + p[48599] + h8$e6k[p[29130]], console[p[20475]](window[p[48550]]), console[p[20475]](p[48600] + h8$e6k[p[48601]] + p[48602] + h8$e6k[p[48603]] + p[48604] + h8$e6k[p[48605]] + p[48606] + h8$e6k[p[48607]] + p[48608] + h8$e6k[p[48609]] + p[48610] + h8$e6k[p[48611]] + p[48612] + (h8$e6k[p[48613]] ? h8$e6k[p[48613]][p[20320]] + ',' + h8$e6k[p[48613]][p[21209]] + ',' + h8$e6k[p[48613]][p[21211]] + ',' + h8$e6k[p[48613]][p[21210]] : ''));var fa4j3 = h8$e6k[p[20468]] ? h8$e6k[p[20468]][p[32122]]() : '',
        fjstc1 = h8$e6k[p[48594]] ? h8$e6k[p[48594]][p[32122]]()[p[24664]]('\x20', '') : '';window['$aQV'][p[21069]] = fa4j3[p[20115]](p[48614]) != -0x1, window['$aQV'][p[31151]] = fa4j3[p[20115]](p[48439]) != -0x1, window['$aQV'][p[48615]] = fa4j3[p[20115]](p[48614]) != -0x1 || fa4j3[p[20115]](p[48439]) != -0x1, window['$aQV'][p[44473]] = fa4j3[p[20115]](p[48440]) != -0x1 || fa4j3[p[20115]](p[48616]) != -0x1, window['$aQV'][p[48617]] = h8$e6k[p[44756]] ? h8$e6k[p[44756]][p[32122]]() : '', window['$aQV']['$aH53VQ'] = ![], window['$aQV']['$aH5Q3V'] = 0x2;if (fa4j3[p[20115]](p[48439]) != -0x1) {
      if (h8$e6k[p[29130]] >= 0x18) window['$aQV']['$aH5Q3V'] = 0x3;else window['$aQV']['$aH5Q3V'] = 0x2;
    } else {
      if (fa4j3[p[20115]](p[48614]) != -0x1) {
        if (h8$e6k[p[29130]] && h8$e6k[p[29130]] >= 0x14) window['$aQV']['$aH5Q3V'] = 0x3;else {
          if (fjstc1[p[20115]](p[48618]) != -0x1 || fjstc1[p[20115]](p[48619]) != -0x1 || fjstc1[p[20115]](p[48620]) != -0x1 || fjstc1[p[20115]](p[48621]) != -0x1 || fjstc1[p[20115]](p[48622]) != -0x1) window['$aQV']['$aH5Q3V'] = 0x2;else window['$aQV']['$aH5Q3V'] = 0x3;
        }
      } else window['$aQV']['$aH5Q3V'] = 0x2;
    }console[p[20475]](p[48623] + window['$aQV']['$aH53VQ'] + p[48624] + window['$aQV']['$aH5Q3V']);
  } }), wx[p[48625]]({ 'success': function (j37f4a) {
    console[p[20475]](p[48626] + j37f4a[p[24582]] + p[48627] + j37f4a[p[48628]]);
  } }), wx[p[48629]]({ 'success': function (yzoi9) {
    console[p[20475]](p[48630] + yzoi9[p[48631]]);
  } }), wx[p[48632]]({ 'keepScreenOn': !![] }), wx[p[48633]](function (cst1fj) {
  console[p[20475]](p[48630] + cst1fj[p[48631]] + p[48634] + cst1fj[p[48635]]);
}), wx[p[30663]](function (y$6k) {
  window['$a35'] = y$6k, window['$aV53'] && window['$a35'] && (console[p[20078]](p[48636] + window['$a35'][p[20769]]), window['$aV53'](window['$a35']), window['$a35'] = null);
}), window['$aHQ3V5'] = 0x0, window[p[48637]] = null, wx[p[48638]](function () {
  window['$aHQ3V5']++, wx[p[31694]]();if (window['$aHQ3V5'] >= 0x2) {
    window['$aHQ3V5'] = 0x0, console[p[20125]](p[48639]), wx[p[48640]]('0', 0x1);if (window['$aQV'] && window['$aQV'][p[21069]]) window['$aQV5'](p[48641], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});