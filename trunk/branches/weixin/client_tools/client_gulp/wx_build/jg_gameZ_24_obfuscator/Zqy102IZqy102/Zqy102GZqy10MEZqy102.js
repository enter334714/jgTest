var J = wx.h$;
console[J[0x1]](J[0x2]), window[J[0x3]], wx[J[0x4]](function (l3ua) {
    if (l3ua) {
        if (l3ua[J[0x5]]) {
            var _zhpte = window[J[0x6]][J[0x7]][J[0x8]](new RegExp(/\./, 'g'), '_'),
                ri7v = l3ua[J[0x5]],
                q5by0 = ri7v[J[0x9]](/(Zqy10Zqy10Zqy10Zqy10Zqy10\/Zqy102GZqy10MEZqy102.js:)[0-9]{1,60}(:)/g);
            if (q5by0) for (var u34al1 = 0x0; u34al1 < q5by0[J[0xa]]; u34al1++) {
                if (q5by0[u34al1] && q5by0[u34al1][J[0xa]] > 0x0) {
                    var a3ul14 = parseInt(q5by0[u34al1][J[0x8]](J[0xb], '')[J[0x8]](':', ''));
                    ri7v = ri7v[J[0x8]](q5by0[u34al1], q5by0[u34al1][J[0x8]](':' + a3ul14 + ':', ':' + (a3ul14 - 0x2) + ':'));
                }
            }
            ri7v = ri7v[J[0x8]](new RegExp(J[0xc], 'g'), J[0xd] + _zhpte + J[0xe]), ri7v = ri7v[J[0x8]](new RegExp(J[0xf], 'g'), J[0xd] + _zhpte + J[0xe]), l3ua[J[0x5]] = ri7v;
        }
        var q0by5 = {
            'id': window[J[0x10]][J[0x11]],
            'role': window[J[0x10]][J[0x12]],
            'level': window[J[0x10]][J[0x13]],
            'user': window[J[0x10]][J[0x14]],
            'version': window[J[0x10]][J[0x15]],
            'cdn': window[J[0x10]][J[0x16]],
            'pkgName': window[J[0x10]][J[0x17]],
            'gamever': window[J[0x6]][J[0x7]],
            'serverid': window[J[0x10]][J[0x18]] ? window[J[0x10]][J[0x18]][J[0x19]] : 0x0,
            'systemInfo': window[J[0x1a]],
            'error': J[0x1b],
            'stack': l3ua ? l3ua[J[0x5]] : ''
        },
            het8zc = JSON[J[0x1c]](q0by5);
        console[J[0x1d]](J[0x1e] + het8zc), (!window[J[0x3]] || window[J[0x3]] != q0by5[J[0x1d]]) && (window[J[0x3]] = q0by5[J[0x1d]], window[J[0x1f]](q0by5));
    }
});
import 'Zqy10Zqy10bfZqy10Zqy10.js';
import 'Zqy10Zqy1011Zqy10Zqy10.js';
window[J[0x20]] = require(J[0x21]);
import 'Zqy10INDZqy10Zqy10.js';
import 'Zqy10Zqy10IZqy101Zqy10Zqy10.js';
import 'Zqy10Zqy10MtadZqy10Zqy10.js';
import 'Zqy10Zqy10INIZqy10aZqy10.js';
console[J[0x1]](J[0x22]), console[J[0x1]](J[0x23]), J15QJ4({ 'title': J[0x24] });
var ge_29p = { 'J1G54QJ': !![] };
new window[J[0x25]](ge_29p), window[J[0x25]][J[0x26]][J[0x27]]();
if (window[J[0x28]]) clearInterval(window[J[0x28]]);
window[J[0x28]] = null, window[J[0x29]] = function (p2_zew, ht6c) {
    if (!p2_zew || !ht6c) return 0x0;
    p2_zew = p2_zew[J[0x2a]]('.'), ht6c = ht6c[J[0x2a]]('.');
    const i741n = Math[J[0x2b]](p2_zew[J[0xa]], ht6c[J[0xa]]);
    while (p2_zew[J[0xa]] < i741n) {
        p2_zew[J[0x2c]]('0');
    }
    while (ht6c[J[0xa]] < i741n) {
        ht6c[J[0x2c]]('0');
    }
    for (var p2 = 0x0; p2 < i741n; p2++) {
        const jxvi7r = parseInt(p2_zew[p2]),
              in7vjx = parseInt(ht6c[p2]);
        if (jxvi7r > in7vjx) return 0x1;else {
            if (jxvi7r < in7vjx) return -0x1;
        }
    }
    return 0x0;
}, window[J[0x2d]] = wx[J[0x2e]]()[J[0x2d]], console[J[0x2f]](J[0x30] + window[J[0x2d]]);
var g_92pfw = wx[J[0x31]]();
g_92pfw[J[0x32]](function (d8ch6t) {
    console[J[0x2f]](J[0x33] + d8ch6t[J[0x34]]);
}), g_92pfw[J[0x35]](function () {
    wx[J[0x36]]({
        'title': J[0x37],
        'content': J[0x38],
        'showCancel': ![],
        'success': function (we_p92) {
            g_92pfw[J[0x39]]();
        }
    });
}), g_92pfw[J[0x3a]](function () {
    console[J[0x2f]](J[0x3b]);
}), window[J[0x3c]] = function () {
    console[J[0x2f]](J[0x3d]);
    var r7xvj = wx[J[0x3e]]({
        'name': J[0x3f],
        'success': function (ni7xvj) {
            console[J[0x2f]](J[0x40]), console[J[0x2f]](ni7xvj), ni7xvj && ni7xvj[J[0x41]] == J[0x42] ? (window[J[0x43]] = !![], window[J[0x44]](), window[J[0x45]]()) : setTimeout(function () {
                window[J[0x3c]]();
            }, 0x1f4);
        },
        'fail': function (htz8e) {
            console[J[0x2f]](J[0x46]), console[J[0x2f]](htz8e), setTimeout(function () {
                window[J[0x3c]]();
            }, 0x1f4);
        }
    });
    r7xvj && r7xvj[J[0x47]](gkqb => {});
}, window[J[0x48]] = function () {
    console[J[0x2f]](J[0x49]);
    var d8cgk6 = wx[J[0x3e]]({
        'name': J[0x4a],
        'success': function (ko0q) {
            console[J[0x2f]](J[0x4b]), console[J[0x2f]](ko0q), ko0q && ko0q[J[0x41]] == J[0x42] ? (window[J[0x4c]] = !![], window[J[0x44]](), window[J[0x45]]()) : setTimeout(function () {
                window[J[0x48]]();
            }, 0x1f4);
        },
        'fail': function (yqb50o) {
            console[J[0x2f]](J[0x4d]), console[J[0x2f]](yqb50o), setTimeout(function () {
                window[J[0x48]]();
            }, 0x1f4);
        }
    });
    d8cgk6 && d8cgk6[J[0x47]](tce => {});
}, window[J[0x4e]] = function () {
    window[J[0x29]](window[J[0x2d]], J[0x4f]) >= 0x0 ? (console[J[0x2f]](J[0x50] + window[J[0x2d]] + J[0x51]), window[J[0x52]](), window[J[0x3c]](), window[J[0x48]]()) : (window[J[0x53]](J[0x54], window[J[0x2d]]), wx[J[0x36]]({
        'title': J[0x55],
        'content': J[0x56]
    }));
}, window[J[0x1a]] = '', wx[J[0x57]]({
    'success'(kg0b5q) {
        window[J[0x1a]] = J[0x58] + kg0b5q[J[0x59]] + J[0x5a] + kg0b5q[J[0x5b]] + J[0x5c] + kg0b5q[J[0x5d]] + J[0x5e] + kg0b5q[J[0x5f]] + J[0x60] + kg0b5q[J[0x61]] + J[0x62] + kg0b5q[J[0x2d]] + J[0x63] + kg0b5q[J[0x64]], console[J[0x2f]](window[J[0x1a]]), console[J[0x2f]](J[0x65] + kg0b5q[J[0x66]] + J[0x67] + kg0b5q[J[0x68]] + J[0x69] + kg0b5q[J[0x6a]] + J[0x6b] + kg0b5q[J[0x6c]] + J[0x6d] + kg0b5q[J[0x6e]] + J[0x6f] + kg0b5q[J[0x70]] + J[0x71] + (kg0b5q[J[0x72]] ? kg0b5q[J[0x72]][J[0x73]] + ',' + kg0b5q[J[0x72]][J[0x74]] + ',' + kg0b5q[J[0x72]][J[0x75]] + ',' + kg0b5q[J[0x72]][J[0x76]] : ''));
        var pethzc = kg0b5q[J[0x5f]] ? kg0b5q[J[0x5f]][J[0x77]]() : '',
            k6dgc8 = kg0b5q[J[0x5b]] ? kg0b5q[J[0x5b]][J[0x77]]()[J[0x8]]('\x20', '') : '';
        window[J[0x10]][J[0x78]] = pethzc[J[0x79]](J[0x7a]) != -0x1, window[J[0x10]][J[0x7b]] = pethzc[J[0x79]](J[0x7c]) != -0x1, window[J[0x10]][J[0x7d]] = pethzc[J[0x79]](J[0x7a]) != -0x1 || pethzc[J[0x79]](J[0x7c]) != -0x1, window[J[0x10]][J[0x7e]] = pethzc[J[0x79]](J[0x7f]) != -0x1 || pethzc[J[0x79]](J[0x80]) != -0x1, window[J[0x10]][J[0x81]] = kg0b5q[J[0x61]] ? kg0b5q[J[0x61]][J[0x77]]() : '', window[J[0x10]][J[0x82]] = ![], window[J[0x10]][J[0x83]] = 0x2;
        if (pethzc[J[0x79]](J[0x7c]) != -0x1) {
            if (kg0b5q[J[0x64]] >= 0x18) window[J[0x10]][J[0x83]] = 0x3;else window[J[0x10]][J[0x83]] = 0x2;
        } else {
            if (pethzc[J[0x79]](J[0x7a]) != -0x1) {
                if (kg0b5q[J[0x64]] && kg0b5q[J[0x64]] >= 0x14) window[J[0x10]][J[0x83]] = 0x3;else {
                    if (k6dgc8[J[0x79]](J[0x84]) != -0x1 || k6dgc8[J[0x79]](J[0x85]) != -0x1 || k6dgc8[J[0x79]](J[0x86]) != -0x1 || k6dgc8[J[0x79]](J[0x87]) != -0x1 || k6dgc8[J[0x79]](J[0x88]) != -0x1) window[J[0x10]][J[0x83]] = 0x2;else window[J[0x10]][J[0x83]] = 0x3;
                }
            } else window[J[0x10]][J[0x83]] = 0x2;
        }
        console[J[0x2f]](J[0x89] + window[J[0x10]][J[0x82]] + J[0x8a] + window[J[0x10]][J[0x83]]);
    }
}), wx[J[0x8b]]({
    'success': function (xj1ni) {
        console[J[0x2f]](J[0x8c] + xj1ni[J[0x8d]] + J[0x8e] + xj1ni[J[0x8f]]);
    }
}), wx[J[0x90]]({
    'success': function (zp2e_w) {
        console[J[0x2f]](J[0x91] + zp2e_w[J[0x92]]);
    }
}), wx[J[0x93]]({ 'keepScreenOn': !![] }), wx[J[0x94]](function (b05o) {
    console[J[0x2f]](J[0x91] + b05o[J[0x92]] + J[0x95] + b05o[J[0x96]]);
}), wx[J[0x97]](function (n7ix41) {
    window[J[0x98]] = n7ix41, window[J[0x99]] && window[J[0x98]] && (console[J[0x1]](J[0x9a] + window[J[0x98]][J[0x9b]]), window[J[0x99]](window[J[0x98]]), window[J[0x98]] = null);
}), window[J[0x9c]] = 0x0, window[J[0x9d]] = 0x0, window[J[0x9e]] = null, wx[J[0x9f]](function () {
    window[J[0x9d]]++;
    var zwp2e_ = Date[J[0xa0]]();
    (window[J[0x9c]] == 0x0 || zwp2e_ - window[J[0x9c]] > 0x1d4c0) && (console[J[0xa1]](J[0xa2]), wx[J[0xa3]]());
    if (window[J[0x9d]] >= 0x2) {
        window[J[0x9d]] = 0x0, console[J[0x1d]](J[0xa4]), wx[J[0xa5]]('0', 0x1);
        if (window[J[0x10]] && window[J[0x10]][J[0x78]]) window[J[0x53]](J[0xa6], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});