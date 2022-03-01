var J = wx.h$;
console[J[0x1]](J[0x2]), window[J[0x3]], wx[J[0x4]](function (vxni7j) {
  if (vxni7j) {
    if (vxni7j[J[0x5]]) {
      var u4n3a = window[J[0x6]][J[0x7]][J[0x8]](new RegExp(/\./, 'g'), '_'),
          dgk86c = vxni7j[J[0x5]],
          t86dh = dgk86c[J[0x9]](/(Zqy10Zqy10Zqy10Zqy10Zqy10\/Zqy102GZqy10MEZqy102.js:)[0-9]{1,60}(:)/g);if (t86dh) for (var s9$f2w = 0x0; s9$f2w < t86dh[J[0xa]]; s9$f2w++) {
        if (t86dh[s9$f2w] && t86dh[s9$f2w][J[0xa]] > 0x0) {
          var q0y5b = parseInt(t86dh[s9$f2w][J[0x8]](J[0xb], '')[J[0x8]](':', ''));dgk86c = dgk86c[J[0x8]](t86dh[s9$f2w], t86dh[s9$f2w][J[0x8]](':' + q0y5b + ':', ':' + (q0y5b - 0x2) + ':'));
        }
      }dgk86c = dgk86c[J[0x8]](new RegExp(J[0xc], 'g'), J[0xd] + u4n3a + J[0xe]), dgk86c = dgk86c[J[0x8]](new RegExp(J[0xf], 'g'), J[0xd] + u4n3a + J[0xe]), vxni7j[J[0x5]] = dgk86c;
    }var y5b0oq = { 'id': window['J1Q4'][J[0x10]], 'role': window['J1Q4'][J[0x11]], 'level': window['J1Q4'][J[0x12]], 'user': window['J1Q4'][J[0x13]], 'version': window['J1Q4'][J[0x14]], 'cdn': window['J1Q4'][J[0x15]], 'pkgName': window['J1Q4'][J[0x16]], 'gamever': window[J[0x6]][J[0x7]], 'serverid': window['J1Q4'][J[0x17]] ? window['J1Q4'][J[0x17]][J[0x18]] : 0x0, 'systemInfo': window[J[0x19]], 'error': J[0x1a], 'stack': vxni7j ? vxni7j[J[0x5]] : '' },
        ectp = JSON[J[0x1b]](y5b0oq);console[J[0x1c]](J[0x1d] + ectp), (!window[J[0x3]] || window[J[0x3]] != y5b0oq[J[0x1c]]) && (window[J[0x3]] = y5b0oq[J[0x1c]], window['J15Q'](y5b0oq));
  }
});import 'Zqy10Zqy10bfZqy10Zqy10.js';import 'Zqy10Zqy1011Zqy10Zqy10.js';window[J[0x1e]] = require(J[0x1f]);import 'Zqy10INDZqy10Zqy10.js';import 'Zqy10Zqy10IZqy101Zqy10Zqy10.js';import 'Zqy10Zqy10MtadZqy10Zqy10.js';import 'Zqy10Zqy10INIZqy10aZqy10.js';console[J[0x1]](J[0x20]), console[J[0x1]](J[0x21]), J15QJ4({ 'title': J[0x22] });var gy5qorv = { 'J1G54QJ': !![] };new window[J[0x23]](gy5qorv), window[J[0x23]][J[0x24]]['J1GJQ45']();if (window['J1G5Q4J']) clearInterval(window['J1G5Q4J']);window['J1G5Q4J'] = null, window['J1GJ45Q'] = function (we2z, oy5rv) {
  if (!we2z || !oy5rv) return 0x0;we2z = we2z[J[0x25]]('.'), oy5rv = oy5rv[J[0x25]]('.');const k60gd = Math[J[0x26]](we2z[J[0xa]], oy5rv[J[0xa]]);while (we2z[J[0xa]] < k60gd) {
    we2z[J[0x27]]('0');
  }while (oy5rv[J[0xa]] < k60gd) {
    oy5rv[J[0x27]]('0');
  }for (var cth68z = 0x0; cth68z < k60gd; cth68z++) {
    const jri7xv = parseInt(we2z[cth68z]),
          dg08 = parseInt(oy5rv[cth68z]);if (jri7xv > dg08) return 0x1;else {
      if (jri7xv < dg08) return -0x1;
    }
  }return 0x0;
}, window[J[0x28]] = wx[J[0x29]]()[J[0x28]], console[J[0x2a]](J[0x2b] + window[J[0x28]]);var gpfw29 = wx[J[0x2c]]();gpfw29[J[0x2d]](function (cptzhe) {
  console[J[0x2a]](J[0x2e] + cptzhe[J[0x2f]]);
}), gpfw29[J[0x30]](function () {
  wx[J[0x31]]({ 'title': J[0x32], 'content': J[0x33], 'showCancel': ![], 'success': function (_ztphe) {
      gpfw29[J[0x34]]();
    } });
}), gpfw29[J[0x35]](function () {
  console[J[0x2a]](J[0x36]);
}), window['J1GJ4Q5'] = function () {
  console[J[0x2a]](J[0x37]);var h2_pez = wx[J[0x38]]({ 'name': J[0x39], 'success': function (bdqk0) {
      console[J[0x2a]](J[0x3a]), console[J[0x2a]](bdqk0), bdqk0 && bdqk0[J[0x3b]] == J[0x3c] ? (window['J14J'] = !![], window['J14JQ5'](), window['J14Q5J']()) : setTimeout(function () {
        window['J1GJ4Q5']();
      }, 0x1f4);
    }, 'fail': function (u41na) {
      console[J[0x2a]](J[0x3d]), console[J[0x2a]](u41na), setTimeout(function () {
        window['J1GJ4Q5']();
      }, 0x1f4);
    } });h2_pez && h2_pez[J[0x3e]](r7ojyv => {});
}, window['J1GQ54J'] = function () {
  console[J[0x2a]](J[0x3f]);var gk6db0 = wx[J[0x38]]({ 'name': J[0x40], 'success': function (q0obk) {
      console[J[0x2a]](J[0x41]), console[J[0x2a]](q0obk), q0obk && q0obk[J[0x3b]] == J[0x3c] ? (window['J1QJ4'] = !![], window['J14JQ5'](), window['J14Q5J']()) : setTimeout(function () {
        window['J1GQ54J']();
      }, 0x1f4);
    }, 'fail': function (cg6dk) {
      console[J[0x2a]](J[0x42]), console[J[0x2a]](cg6dk), setTimeout(function () {
        window['J1GQ54J']();
      }, 0x1f4);
    } });gk6db0 && gk6db0[J[0x3e]](nu1i34 => {});
}, window[J[0x43]] = function () {
  window['J1GJ45Q'](window[J[0x28]], J[0x44]) >= 0x0 ? (console[J[0x2a]](J[0x45] + window[J[0x28]] + J[0x46]), window['J1Q5'](), window['J1GJ4Q5'](), window['J1GQ54J']()) : (window['J1Q45'](J[0x47], window[J[0x28]]), wx[J[0x31]]({ 'title': J[0x48], 'content': J[0x49] }));
}, window[J[0x19]] = '', wx[J[0x4a]]({ 'success'(ryqo5b) {
    window[J[0x19]] = J[0x4b] + ryqo5b[J[0x4c]] + J[0x4d] + ryqo5b[J[0x4e]] + J[0x4f] + ryqo5b[J[0x50]] + J[0x51] + ryqo5b[J[0x52]] + J[0x53] + ryqo5b[J[0x54]] + J[0x55] + ryqo5b[J[0x28]] + J[0x56] + ryqo5b[J[0x57]], console[J[0x2a]](window[J[0x19]]), console[J[0x2a]](J[0x58] + ryqo5b[J[0x59]] + J[0x5a] + ryqo5b[J[0x5b]] + J[0x5c] + ryqo5b[J[0x5d]] + J[0x5e] + ryqo5b[J[0x5f]] + J[0x60] + ryqo5b[J[0x61]] + J[0x62] + ryqo5b[J[0x63]] + J[0x64] + (ryqo5b[J[0x65]] ? ryqo5b[J[0x65]][J[0x66]] + ',' + ryqo5b[J[0x65]][J[0x67]] + ',' + ryqo5b[J[0x65]][J[0x68]] + ',' + ryqo5b[J[0x65]][J[0x69]] : ''));var td6h8c = ryqo5b[J[0x52]] ? ryqo5b[J[0x52]][J[0x6a]]() : '',
        hpt_ez = ryqo5b[J[0x4e]] ? ryqo5b[J[0x4e]][J[0x6a]]()[J[0x8]]('\x20', '') : '';window['J1Q4'][J[0x6b]] = td6h8c[J[0x6c]](J[0x6d]) != -0x1, window['J1Q4'][J[0x6e]] = td6h8c[J[0x6c]](J[0x6f]) != -0x1, window['J1Q4'][J[0x70]] = td6h8c[J[0x6c]](J[0x6d]) != -0x1 || td6h8c[J[0x6c]](J[0x6f]) != -0x1, window['J1Q4'][J[0x71]] = td6h8c[J[0x6c]](J[0x72]) != -0x1 || td6h8c[J[0x6c]](J[0x73]) != -0x1, window['J1Q4'][J[0x74]] = ryqo5b[J[0x54]] ? ryqo5b[J[0x54]][J[0x6a]]() : '', window['J1Q4']['J1G5J4Q'] = ![], window['J1Q4']['J1G5QJ4'] = 0x2;if (td6h8c[J[0x6c]](J[0x6f]) != -0x1) {
      if (ryqo5b[J[0x57]] >= 0x18) window['J1Q4']['J1G5QJ4'] = 0x3;else window['J1Q4']['J1G5QJ4'] = 0x2;
    } else {
      if (td6h8c[J[0x6c]](J[0x6d]) != -0x1) {
        if (ryqo5b[J[0x57]] && ryqo5b[J[0x57]] >= 0x14) window['J1Q4']['J1G5QJ4'] = 0x3;else {
          if (hpt_ez[J[0x6c]](J[0x75]) != -0x1 || hpt_ez[J[0x6c]](J[0x76]) != -0x1 || hpt_ez[J[0x6c]](J[0x77]) != -0x1 || hpt_ez[J[0x6c]](J[0x78]) != -0x1 || hpt_ez[J[0x6c]](J[0x79]) != -0x1) window['J1Q4']['J1G5QJ4'] = 0x2;else window['J1Q4']['J1G5QJ4'] = 0x3;
        }
      } else window['J1Q4']['J1G5QJ4'] = 0x2;
    }console[J[0x2a]](J[0x7a] + window['J1Q4']['J1G5J4Q'] + J[0x7b] + window['J1Q4']['J1G5QJ4']);
  } }), wx[J[0x7c]]({ 'success': function (oby5q0) {
    console[J[0x2a]](J[0x7d] + oby5q0[J[0x7e]] + J[0x7f] + oby5q0[J[0x80]]);
  } }), wx[J[0x81]]({ 'success': function (r5qybo) {
    console[J[0x2a]](J[0x82] + r5qybo[J[0x83]]);
  } }), wx[J[0x84]]({ 'keepScreenOn': !![] }), wx[J[0x85]](function (yv5rj) {
  console[J[0x2a]](J[0x82] + yv5rj[J[0x83]] + J[0x86] + yv5rj[J[0x87]]);
}), wx[J[0x88]](function (c8tg6d) {
  window['J1J5'] = c8tg6d, window['J145J'] && window['J1J5'] && (console[J[0x1]](J[0x89] + window['J1J5'][J[0x8a]]), window['J145J'](window['J1J5']), window['J1J5'] = null);
}), window[J[0x8b]] = 0x0, window['J1GQJ45'] = 0x0, window[J[0x8c]] = null, wx[J[0x8d]](function () {
  window['J1GQJ45']++;var rq5yob = Date[J[0x8e]]();(window[J[0x8b]] == 0x0 || rq5yob - window[J[0x8b]] > 0x1d4c0) && (console[J[0x8f]](J[0x90]), wx[J[0x91]]());if (window['J1GQJ45'] >= 0x2) {
    window['J1GQJ45'] = 0x0, console[J[0x1c]](J[0x92]), wx[J[0x93]]('0', 0x1);if (window['J1Q4'] && window['J1Q4'][J[0x6b]]) window['J1Q45'](J[0x94], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});