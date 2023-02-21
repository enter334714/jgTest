var J = wx.h$;
console[J[0x3cb]](J[0x3cc]), window[J[0x3cd]], wx[J[0x3ce]](function (f_p) {
    if (f_p) {
        if (f_p[J[0x38]]) {
            var tgd68 = window[J[0x3cf]][J[0x3d0]][J[0xf3]](new RegExp(/\./, 'g'), '_'),
                tpze_h = f_p[J[0x38]],
                d0bgk = tpze_h[J[0x43]](/(Zqy10Zqy10Zqy10Zqy10Zqy10\/Zqy102GZqy10MEZqy102.js:)[0-9]{1,60}(:)/g);
            if (d0bgk) for (var n71ijx = 0x0; n71ijx < d0bgk[J[0x1f]]; n71ijx++) {
                if (d0bgk[n71ijx] && d0bgk[n71ijx][J[0x1f]] > 0x0) {
                    var w9p2_e = parseInt(d0bgk[n71ijx][J[0xf3]](J[0x3d1], '')[J[0xf3]](':', ''));
                    tpze_h = tpze_h[J[0xf3]](d0bgk[n71ijx], d0bgk[n71ijx][J[0xf3]](':' + w9p2_e + ':', ':' + (w9p2_e - 0x2) + ':'));
                }
            }
            tpze_h = tpze_h[J[0xf3]](new RegExp(J[0x3d2], 'g'), J[0x3d3] + tgd68 + J[0x3d4]), tpze_h = tpze_h[J[0xf3]](new RegExp(J[0x3d5], 'g'), J[0x3d3] + tgd68 + J[0x3d4]), f_p[J[0x38]] = tpze_h;
        }
        var ua34n = {
            'id': window[J[0x3d6]][J[0x3d7]],
            'role': window[J[0x3d6]][J[0x3d8]],
            'level': window[J[0x3d6]][J[0x3d9]],
            'user': window[J[0x3d6]][J[0x3da]],
            'version': window[J[0x3d6]][J[0x3db]],
            'cdn': window[J[0x3d6]][J[0x3dc]],
            'pkgName': window[J[0x3d6]][J[0x3dd]],
            'gamever': window[J[0x3cf]][J[0x3d0]],
            'serverid': window[J[0x3d6]][J[0x3de]] ? window[J[0x3d6]][J[0x3de]][J[0x3df]] : 0x0,
            'systemInfo': window[J[0x3e0]],
            'error': J[0x3e1],
            'stack': f_p ? f_p[J[0x38]] : ''
        },
            pzw_e = JSON[J[0x3e2]](ua34n);
        console[J[0x14d]](J[0x3e3] + pzw_e), (!window[J[0x3cd]] || window[J[0x3cd]] != ua34n[J[0x14d]]) && (window[J[0x3cd]] = ua34n[J[0x14d]], window[J[0x3e4]](ua34n));
    }
});
import 'Zqy10Zqy10bfZqy10Zqy10.js';
import 'Zqy10Zqy1011Zqy10Zqy10.js';
window[J[0x3e5]] = require(J[0x3e6]);
import 'Zqy10INDZqy10Zqy10.js';
import 'Zqy10Zqy10IZqy101Zqy10Zqy10.js';
import 'Zqy10Zqy10MtadZqy10Zqy10.js';
import 'Zqy10Zqy10INIZqy10aZqy10.js';
console[J[0x3cb]](J[0x3e7]), console[J[0x3cb]](J[0x3e8]), J15QJ4({ 'title': J[0x3e9] });
var gvjyx7r = { 'J1G54QJ': !![] };
new window[J[0x3ea]](gvjyx7r), window[J[0x3ea]][J[0x3eb]][J[0x3ec]]();
if (window[J[0x3ed]]) clearInterval(window[J[0x3ed]]);
window[J[0x3ed]] = null, window[J[0x3ee]] = function (fp9_, _etzp) {
    if (!fp9_ || !_etzp) return 0x0;
    fp9_ = fp9_[J[0xc9]]('.'), _etzp = _etzp[J[0xc9]]('.');
    const t8z = Math[J[0x12d]](fp9_[J[0x1f]], _etzp[J[0x1f]]);
    while (fp9_[J[0x1f]] < t8z) {
        fp9_[J[0x42]]('0');
    }
    while (_etzp[J[0x1f]] < t8z) {
        _etzp[J[0x42]]('0');
    }
    for (var k0qg5 = 0x0; k0qg5 < t8z; k0qg5++) {
        const kgqd = parseInt(fp9_[k0qg5]),
              g86ctd = parseInt(_etzp[k0qg5]);
        if (kgqd > g86ctd) return 0x1;else {
            if (kgqd < g86ctd) return -0x1;
        }
    }
    return 0x0;
}, window[J[0x3ef]] = wx[J[0x3f0]]()[J[0x3ef]], console[J[0xe1]](J[0x3f1] + window[J[0x3ef]]);
var gxvr7i = wx[J[0x3f2]]();
gxvr7i[J[0x3f3]](function (p_2zw) {
    console[J[0xe1]](J[0x3f4] + p_2zw[J[0x3f5]]);
}), gxvr7i[J[0x3f6]](function () {
    wx[J[0x3f7]]({
        'title': J[0x3f8],
        'content': J[0x3f9],
        'showCancel': ![],
        'success': function (c6kdg) {
            gxvr7i[J[0x3fa]]();
        }
    });
}), gxvr7i[J[0x3fb]](function () {
    console[J[0xe1]](J[0x3fc]);
}), window[J[0x3fd]] = function () {
    console[J[0xe1]](J[0x3fe]);
    var wf$2_9 = wx[J[0x3ff]]({
        'name': J[0x400],
        'success': function (hd6ct) {
            console[J[0xe1]](J[0x401]), console[J[0xe1]](hd6ct), hd6ct && hd6ct[J[0x402]] == J[0x403] ? (window[J[0x404]] = !![], window[J[0x405]](), window[J[0x406]]()) : setTimeout(function () {
                window[J[0x3fd]]();
            }, 0x1f4);
        },
        'fail': function (ew_2) {
            console[J[0xe1]](J[0x407]), console[J[0xe1]](ew_2), setTimeout(function () {
                window[J[0x3fd]]();
            }, 0x1f4);
        }
    });
    wf$2_9 && wf$2_9[J[0x408]](qko5b0 => {});
}, window[J[0x409]] = function () {
    console[J[0xe1]](J[0x40a]);
    var yqob0 = wx[J[0x3ff]]({
        'name': J[0x40b],
        'success': function (e8cth) {
            console[J[0xe1]](J[0x40c]), console[J[0xe1]](e8cth), e8cth && e8cth[J[0x402]] == J[0x403] ? (window[J[0x40d]] = !![], window[J[0x405]](), window[J[0x406]]()) : setTimeout(function () {
                window[J[0x409]]();
            }, 0x1f4);
        },
        'fail': function (_ez2p) {
            console[J[0xe1]](J[0x40e]), console[J[0xe1]](_ez2p), setTimeout(function () {
                window[J[0x409]]();
            }, 0x1f4);
        }
    });
    yqob0 && yqob0[J[0x408]](i41n3 => {});
}, window[J[0x40f]] = function () {
    window[J[0x3ee]](window[J[0x3ef]], J[0x410]) >= 0x0 ? (console[J[0xe1]](J[0x411] + window[J[0x3ef]] + J[0x412]), window[J[0x413]](), window[J[0x3fd]](), window[J[0x409]]()) : (window[J[0x414]](J[0x415], window[J[0x3ef]]), wx[J[0x3f7]]({
        'title': J[0x416],
        'content': J[0x417]
    }));
}, window[J[0x3e0]] = '', wx[J[0x418]]({
    'success'(yvrjo7) {
        window[J[0x3e0]] = J[0x419] + yvrjo7[J[0x41a]] + J[0x41b] + yvrjo7[J[0x41c]] + J[0x41d] + yvrjo7[J[0x41e]] + J[0x41f] + yvrjo7[J[0x420]] + J[0x421] + yvrjo7[J[0x422]] + J[0x423] + yvrjo7[J[0x3ef]] + J[0x424] + yvrjo7[J[0x425]], console[J[0xe1]](window[J[0x3e0]]), console[J[0xe1]](J[0x426] + yvrjo7[J[0x427]] + J[0x428] + yvrjo7[J[0x429]] + J[0x42a] + yvrjo7[J[0x42b]] + J[0x42c] + yvrjo7[J[0x42d]] + J[0x42e] + yvrjo7[J[0x42f]] + J[0x430] + yvrjo7[J[0x431]] + J[0x432] + (yvrjo7[J[0x433]] ? yvrjo7[J[0x433]][J[0x434]] + ',' + yvrjo7[J[0x433]][J[0x435]] + ',' + yvrjo7[J[0x433]][J[0x436]] + ',' + yvrjo7[J[0x433]][J[0x437]] : ''));
        var mlu3a = yvrjo7[J[0x420]] ? yvrjo7[J[0x420]][J[0x67]]() : '',
            i1x3n4 = yvrjo7[J[0x41c]] ? yvrjo7[J[0x41c]][J[0x67]]()[J[0xf3]]('\x20', '') : '';
        window[J[0x3d6]][J[0x438]] = mlu3a[J[0x92]](J[0x439]) != -0x1, window[J[0x3d6]][J[0x43a]] = mlu3a[J[0x92]](J[0x43b]) != -0x1, window[J[0x3d6]][J[0x43c]] = mlu3a[J[0x92]](J[0x439]) != -0x1 || mlu3a[J[0x92]](J[0x43b]) != -0x1, window[J[0x3d6]][J[0x43d]] = mlu3a[J[0x92]](J[0x43e]) != -0x1 || mlu3a[J[0x92]](J[0x43f]) != -0x1, window[J[0x3d6]][J[0x440]] = yvrjo7[J[0x422]] ? yvrjo7[J[0x422]][J[0x67]]() : '', window[J[0x3d6]][J[0x441]] = ![], window[J[0x3d6]][J[0x442]] = 0x2;
        if (mlu3a[J[0x92]](J[0x43b]) != -0x1) {
            if (yvrjo7[J[0x425]] >= 0x18) window[J[0x3d6]][J[0x442]] = 0x3;else window[J[0x3d6]][J[0x442]] = 0x2;
        } else {
            if (mlu3a[J[0x92]](J[0x439]) != -0x1) {
                if (yvrjo7[J[0x425]] && yvrjo7[J[0x425]] >= 0x14) window[J[0x3d6]][J[0x442]] = 0x3;else {
                    if (i1x3n4[J[0x92]](J[0x443]) != -0x1 || i1x3n4[J[0x92]](J[0x444]) != -0x1 || i1x3n4[J[0x92]](J[0x445]) != -0x1 || i1x3n4[J[0x92]](J[0x446]) != -0x1 || i1x3n4[J[0x92]](J[0x447]) != -0x1) window[J[0x3d6]][J[0x442]] = 0x2;else window[J[0x3d6]][J[0x442]] = 0x3;
                }
            } else window[J[0x3d6]][J[0x442]] = 0x2;
        }
        console[J[0xe1]](J[0x448] + window[J[0x3d6]][J[0x441]] + J[0x449] + window[J[0x3d6]][J[0x442]]);
    }
}), wx[J[0x44a]]({
    'success': function (yjrv7x) {
        console[J[0xe1]](J[0x44b] + yjrv7x[J[0x44c]] + J[0x44d] + yjrv7x[J[0x44e]]);
    }
}), wx[J[0x44f]]({
    'success': function (k0b6d) {
        console[J[0xe1]](J[0x450] + k0b6d[J[0x451]]);
    }
}), wx[J[0x452]]({ 'keepScreenOn': !![] }), wx[J[0x453]](function (ob5y0) {
    console[J[0xe1]](J[0x450] + ob5y0[J[0x451]] + J[0x454] + ob5y0[J[0x455]]);
}), wx[J[0x456]](function (f9$w) {
    window[J[0x457]] = f9$w, window[J[0x458]] && window[J[0x457]] && (console[J[0x3cb]](J[0x459] + window[J[0x457]][J[0x45a]]), window[J[0x458]](window[J[0x457]]), window[J[0x457]] = null);
}), window[J[0x45b]] = 0x0, window[J[0x45c]] = 0x0, window[J[0x45d]] = null, wx[J[0x45e]](function () {
    window[J[0x45c]]++;
    var ch6tz = Date[J[0x45f]]();
    (window[J[0x45b]] == 0x0 || ch6tz - window[J[0x45b]] > 0x1d4c0) && (console[J[0x17f]](J[0x460]), wx[J[0x461]]());
    if (window[J[0x45c]] >= 0x2) {
        window[J[0x45c]] = 0x0, console[J[0x14d]](J[0x462]), wx[J[0x463]]('0', 0x1);
        if (window[J[0x3d6]] && window[J[0x3d6]][J[0x438]]) window[J[0x414]](J[0x464], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});