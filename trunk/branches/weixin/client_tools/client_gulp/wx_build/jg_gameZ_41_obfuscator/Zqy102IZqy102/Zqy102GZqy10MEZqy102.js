var J = wx.h$;
console[J[0x3cb]](J[0x3cc]), window[J[0x3cd]], wx[J[0x3ce]](function (x7nj1i) {
    if (x7nj1i) {
        if (x7nj1i[J[0x38]]) {
            var joy5 = window[J[0x3cf]][J[0x3d0]][J[0xf3]](new RegExp(/\./, 'g'), '_'),
                kgd8c6 = x7nj1i[J[0x38]],
                jn1ix7 = kgd8c6[J[0x43]](/(Zqy10Zqy10Zqy10Zqy10Zqy10\/Zqy102GZqy10MEZqy102.js:)[0-9]{1,60}(:)/g);
            if (jn1ix7) for (var u4n13a = 0x0; u4n13a < jn1ix7[J[0x1f]]; u4n13a++) {
                if (jn1ix7[u4n13a] && jn1ix7[u4n13a][J[0x1f]] > 0x0) {
                    var au4l1 = parseInt(jn1ix7[u4n13a][J[0xf3]](J[0x3d1], '')[J[0xf3]](':', ''));
                    kgd8c6 = kgd8c6[J[0xf3]](jn1ix7[u4n13a], jn1ix7[u4n13a][J[0xf3]](':' + au4l1 + ':', ':' + (au4l1 - 0x2) + ':'));
                }
            }
            kgd8c6 = kgd8c6[J[0xf3]](new RegExp(J[0x3d2], 'g'), J[0x3d3] + joy5 + J[0x3d4]), kgd8c6 = kgd8c6[J[0xf3]](new RegExp(J[0x3d5], 'g'), J[0x3d3] + joy5 + J[0x3d4]), x7nj1i[J[0x38]] = kgd8c6;
        }
        var bk6g0d = {
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
            'stack': x7nj1i ? x7nj1i[J[0x38]] : ''
        },
            rj7xyv = JSON[J[0x3e2]](bk6g0d);
        console[J[0x14d]](J[0x3e3] + rj7xyv), (!window[J[0x3cd]] || window[J[0x3cd]] != bk6g0d[J[0x14d]]) && (window[J[0x3cd]] = bk6g0d[J[0x14d]], window[J[0x3e4]](bk6g0d));
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
var gyvorj5 = { 'J1G54QJ': !![] };
new window[J[0x3ea]](gyvorj5), window[J[0x3ea]][J[0x3eb]][J[0x3ec]]();
if (window[J[0x3ed]]) clearInterval(window[J[0x3ed]]);
window[J[0x3ed]] = null, window[J[0x3ee]] = function (vxry7j, xvji7) {
    if (!vxry7j || !xvji7) return 0x0;
    vxry7j = vxry7j[J[0xc9]]('.'), xvji7 = xvji7[J[0xc9]]('.');
    const ula4m3 = Math[J[0x12d]](vxry7j[J[0x1f]], xvji7[J[0x1f]]);
    while (vxry7j[J[0x1f]] < ula4m3) {
        vxry7j[J[0x42]]('0');
    }
    while (xvji7[J[0x1f]] < ula4m3) {
        xvji7[J[0x42]]('0');
    }
    for (var zh_pe = 0x0; zh_pe < ula4m3; zh_pe++) {
        const we9_2p = parseInt(vxry7j[zh_pe]),
              vjx7ry = parseInt(xvji7[zh_pe]);
        if (we9_2p > vjx7ry) return 0x1;else {
            if (we9_2p < vjx7ry) return -0x1;
        }
    }
    return 0x0;
}, window[J[0x3ef]] = wx[J[0x3f0]]()[J[0x3ef]], console[J[0xe1]](J[0x3f1] + window[J[0x3ef]]);
var gw9_e2p = wx[J[0x3f2]]();
gw9_e2p[J[0x3f3]](function (c6h8t) {
    console[J[0xe1]](J[0x3f4] + c6h8t[J[0x3f5]]);
}), gw9_e2p[J[0x3f6]](function () {
    wx[J[0x3f7]]({
        'title': J[0x3f8],
        'content': J[0x3f9],
        'showCancel': ![],
        'success': function (gdc8t) {
            gw9_e2p[J[0x3fa]]();
        }
    });
}), gw9_e2p[J[0x3fb]](function () {
    console[J[0xe1]](J[0x3fc]);
}), window[J[0x3fd]] = function () {
    console[J[0xe1]](J[0x3fe]);
    var kbqg0 = wx[J[0x3ff]]({
        'name': J[0x400],
        'success': function (chz8) {
            console[J[0xe1]](J[0x401]), console[J[0xe1]](chz8), chz8 && chz8[J[0x402]] == J[0x403] ? (window[J[0x404]] = !![], window[J[0x405]](), window[J[0x406]]()) : setTimeout(function () {
                window[J[0x3fd]]();
            }, 0x1f4);
        },
        'fail': function (we_29p) {
            console[J[0xe1]](J[0x407]), console[J[0xe1]](we_29p), setTimeout(function () {
                window[J[0x3fd]]();
            }, 0x1f4);
        }
    });
    kbqg0 && kbqg0[J[0x408]](m3al => {});
}, window[J[0x409]] = function () {
    console[J[0xe1]](J[0x40a]);
    var v7jrxy = wx[J[0x3ff]]({
        'name': J[0x40b],
        'success': function (bd60k) {
            console[J[0xe1]](J[0x40c]), console[J[0xe1]](bd60k), bd60k && bd60k[J[0x402]] == J[0x403] ? (window[J[0x40d]] = !![], window[J[0x405]](), window[J[0x406]]()) : setTimeout(function () {
                window[J[0x409]]();
            }, 0x1f4);
        },
        'fail': function (yxvjr7) {
            console[J[0xe1]](J[0x40e]), console[J[0xe1]](yxvjr7), setTimeout(function () {
                window[J[0x409]]();
            }, 0x1f4);
        }
    });
    v7jrxy && v7jrxy[J[0x408]](y7vrx => {});
}, window[J[0x40f]] = function () {
    window[J[0x3ee]](window[J[0x3ef]], J[0x410]) >= 0x0 ? (console[J[0xe1]](J[0x411] + window[J[0x3ef]] + J[0x412]), window[J[0x413]](), window[J[0x3fd]](), window[J[0x409]]()) : (window[J[0x414]](J[0x415], window[J[0x3ef]]), wx[J[0x3f7]]({
        'title': J[0x416],
        'content': J[0x417]
    }));
}, window[J[0x3e0]] = '', wx[J[0x418]]({
    'success'(_2zwp) {
        window[J[0x3e0]] = J[0x419] + _2zwp[J[0x41a]] + J[0x41b] + _2zwp[J[0x41c]] + J[0x41d] + _2zwp[J[0x41e]] + J[0x41f] + _2zwp[J[0x420]] + J[0x421] + _2zwp[J[0x422]] + J[0x423] + _2zwp[J[0x3ef]] + J[0x424] + _2zwp[J[0x425]], console[J[0xe1]](window[J[0x3e0]]), console[J[0xe1]](J[0x426] + _2zwp[J[0x427]] + J[0x428] + _2zwp[J[0x429]] + J[0x42a] + _2zwp[J[0x42b]] + J[0x42c] + _2zwp[J[0x42d]] + J[0x42e] + _2zwp[J[0x42f]] + J[0x430] + _2zwp[J[0x431]] + J[0x432] + (_2zwp[J[0x433]] ? _2zwp[J[0x433]][J[0x434]] + ',' + _2zwp[J[0x433]][J[0x435]] + ',' + _2zwp[J[0x433]][J[0x436]] + ',' + _2zwp[J[0x433]][J[0x437]] : ''));
        var oq0kb5 = _2zwp[J[0x420]] ? _2zwp[J[0x420]][J[0x67]]() : '',
            x1n4i7 = _2zwp[J[0x41c]] ? _2zwp[J[0x41c]][J[0x67]]()[J[0xf3]]('\x20', '') : '';
        window[J[0x3d6]][J[0x438]] = oq0kb5[J[0x92]](J[0x439]) != -0x1, window[J[0x3d6]][J[0x43a]] = oq0kb5[J[0x92]](J[0x43b]) != -0x1, window[J[0x3d6]][J[0x43c]] = oq0kb5[J[0x92]](J[0x439]) != -0x1 || oq0kb5[J[0x92]](J[0x43b]) != -0x1, window[J[0x3d6]][J[0x43d]] = oq0kb5[J[0x92]](J[0x43e]) != -0x1 || oq0kb5[J[0x92]](J[0x43f]) != -0x1, window[J[0x3d6]][J[0x440]] = _2zwp[J[0x422]] ? _2zwp[J[0x422]][J[0x67]]() : '', window[J[0x3d6]][J[0x441]] = ![], window[J[0x3d6]][J[0x442]] = 0x2;
        if (oq0kb5[J[0x92]](J[0x43b]) != -0x1) {
            if (_2zwp[J[0x425]] >= 0x18) window[J[0x3d6]][J[0x442]] = 0x3;else window[J[0x3d6]][J[0x442]] = 0x2;
        } else {
            if (oq0kb5[J[0x92]](J[0x439]) != -0x1) {
                if (_2zwp[J[0x425]] && _2zwp[J[0x425]] >= 0x14) window[J[0x3d6]][J[0x442]] = 0x3;else {
                    if (x1n4i7[J[0x92]](J[0x443]) != -0x1 || x1n4i7[J[0x92]](J[0x444]) != -0x1 || x1n4i7[J[0x92]](J[0x445]) != -0x1 || x1n4i7[J[0x92]](J[0x446]) != -0x1 || x1n4i7[J[0x92]](J[0x447]) != -0x1) window[J[0x3d6]][J[0x442]] = 0x2;else window[J[0x3d6]][J[0x442]] = 0x3;
                }
            } else window[J[0x3d6]][J[0x442]] = 0x2;
        }
        console[J[0xe1]](J[0x448] + window[J[0x3d6]][J[0x441]] + J[0x449] + window[J[0x3d6]][J[0x442]]);
    }
}), wx[J[0x44a]]({
    'success': function (y7rjov) {
        console[J[0xe1]](J[0x44b] + y7rjov[J[0x44c]] + J[0x44d] + y7rjov[J[0x44e]]);
    }
}), wx[J[0x44f]]({
    'success': function (qb0dk) {
        console[J[0xe1]](J[0x450] + qb0dk[J[0x451]]);
    }
}), wx[J[0x452]]({ 'keepScreenOn': !![] }), wx[J[0x453]](function (yv5orj) {
    console[J[0xe1]](J[0x450] + yv5orj[J[0x451]] + J[0x454] + yv5orj[J[0x455]]);
}), wx[J[0x456]](function (r7jyvo) {
    window[J[0x457]] = r7jyvo, window[J[0x458]] && window[J[0x457]] && (console[J[0x3cb]](J[0x459] + window[J[0x457]][J[0x45a]]), window[J[0x458]](window[J[0x457]]), window[J[0x457]] = null);
}), window[J[0x45b]] = 0x0, window[J[0x45c]] = 0x0, window[J[0x45d]] = null, wx[J[0x45e]](function () {
    window[J[0x45c]]++;
    var b0g5k = Date[J[0x45f]]();
    (window[J[0x45b]] == 0x0 || b0g5k - window[J[0x45b]] > 0x1d4c0) && (console[J[0x17f]](J[0x460]), wx[J[0x461]]());
    if (window[J[0x45c]] >= 0x2) {
        window[J[0x45c]] = 0x0, console[J[0x14d]](J[0x462]), wx[J[0x463]]('0', 0x1);
        if (window[J[0x3d6]] && window[J[0x3d6]][J[0x438]]) window[J[0x414]](J[0x464], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});