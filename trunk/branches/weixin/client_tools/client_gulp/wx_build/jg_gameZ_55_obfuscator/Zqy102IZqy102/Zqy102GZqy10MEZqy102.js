var J = wx.h$;
console[J[0x1]](J[0x2]), window[J[0x3]], wx[J[0x4]](function (rw27ma) {
    if (rw27ma) {
        if (rw27ma[J[0x5]]) {
            var nokcv = window[J[0x6]][J[0x7]][J[0x8]](new RegExp(/\./, 'g'), '_'),
                e45bdu = rw27ma[J[0x5]],
                y1q = e45bdu[J[0x9]](/(Zqy10Zqy10Zqy10Zqy10Zqy10\/Zqy102GZqy10MEZqy102.js:)[0-9]{1,60}(:)/g);
            if (y1q) for (var g1q9ly = 0x0; g1q9ly < y1q[J[0xa]]; g1q9ly++) {
                if (y1q[g1q9ly] && y1q[g1q9ly][J[0xa]] > 0x0) {
                    var in0ov = parseInt(y1q[g1q9ly][J[0x8]](J[0xb], '')[J[0x8]](':', ''));
                    e45bdu = e45bdu[J[0x8]](y1q[g1q9ly], y1q[g1q9ly][J[0x8]](':' + in0ov + ':', ':' + (in0ov - 0x2) + ':'));
                }
            }
            e45bdu = e45bdu[J[0x8]](new RegExp(J[0xc], 'g'), J[0xd] + nokcv + J[0xe]), e45bdu = e45bdu[J[0x8]](new RegExp(J[0xf], 'g'), J[0xd] + nokcv + J[0xe]), rw27ma[J[0x5]] = e45bdu;
        }
        var hf8_ed = {
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
            'stack': rw27ma ? rw27ma[J[0x5]] : ''
        },
            ueh4d = JSON[J[0x1c]](hf8_ed);
        console[J[0x1d]](J[0x1e] + ueh4d), (!window[J[0x3]] || window[J[0x3]] != hf8_ed[J[0x1d]]) && (window[J[0x3]] = hf8_ed[J[0x1d]], window[J[0x1f]](hf8_ed));
    }
});
import 'Zqy10Zqy10bfZqy10Zqy10.js';
import 'Zqy10Zqy1011Zqy10Zqy10.js';
window[J[0x20]] = require(J[0x21]);
import 'Zqy10INDZqy10Zqy10.js';
import 'Zqy10Zqy10IZqy101Zqy10Zqy10.js';
import 'Zqy10Zqy10MtadZqy10Zqy10.js';
import 'Zqy10Zqy10INIZqy10aZqy10.js';
console[J[0x1]](J[0x22]), console[J[0x1]](J[0x23]), J1YC7E({ 'title': J[0x24] });
var gd_f8 = { 'J1HYEC7': !![] };
new window[J[0x25]](gd_f8), window[J[0x25]][J[0x26]][J[0x27]]();
if (window[J[0x28]]) clearInterval(window[J[0x28]]);
window[J[0x28]] = null, window[J[0x29]] = function (zp1y96, r_8sf3) {
    if (!zp1y96 || !r_8sf3) return 0x0;
    zp1y96 = zp1y96[J[0x2a]]('.'), r_8sf3 = r_8sf3[J[0x2a]]('.');
    const deuh = Math[J[0x2b]](zp1y96[J[0xa]], r_8sf3[J[0xa]]);
    while (zp1y96[J[0xa]] < deuh) {
        zp1y96[J[0x2c]]('0');
    }
    while (r_8sf3[J[0xa]] < deuh) {
        r_8sf3[J[0x2c]]('0');
    }
    for (var $qkg = 0x0; $qkg < deuh; $qkg++) {
        const asw23 = parseInt(zp1y96[$qkg]),
              t9pz1 = parseInt(r_8sf3[$qkg]);
        if (asw23 > t9pz1) return 0x1;else {
            if (asw23 < t9pz1) return -0x1;
        }
    }
    return 0x0;
}, window[J[0x2d]] = wx[J[0x2e]]()[J[0x2d]], console[J[0x2f]](J[0x30] + window[J[0x2d]]);
var gfsh_e = wx[J[0x31]]();
gfsh_e[J[0x32]](function (w238) {
    console[J[0x2f]](J[0x33] + w238[J[0x34]]);
}), gfsh_e[J[0x35]](function () {
    wx[J[0x36]]({
        'title': J[0x37],
        'content': J[0x38],
        'showCancel': ![],
        'success': function (l$9yqg) {
            gfsh_e[J[0x39]]();
        }
    });
}), gfsh_e[J[0x3a]](function () {
    console[J[0x2f]](J[0x3b]);
}), window[J[0x3c]] = function () {
    console[J[0x2f]](J[0x3d]);
    var wras = wx[J[0x3e]]({
        'name': J[0x3f],
        'success': function (x0kqg$) {
            console[J[0x2f]](J[0x40]), console[J[0x2f]](x0kqg$), x0kqg$ && x0kqg$[J[0x41]] == J[0x42] ? (window[J[0x43]] = !![], window[J[0x44]](), window[J[0x45]]()) : setTimeout(function () {
                window[J[0x3c]]();
            }, 0x1f4);
        },
        'fail': function (yq19lg) {
            console[J[0x2f]](J[0x46]), console[J[0x2f]](yq19lg), setTimeout(function () {
                window[J[0x3c]]();
            }, 0x1f4);
        }
    });
    wras && wras[J[0x47]](icnvo => {});
}, window[J[0x48]] = function () {
    console[J[0x2f]](J[0x49]);
    var r2s8w3 = wx[J[0x3e]]({
        'name': J[0x4a],
        'success': function (ygl19q) {
            console[J[0x2f]](J[0x4b]), console[J[0x2f]](ygl19q), ygl19q && ygl19q[J[0x41]] == J[0x42] ? (window[J[0x4c]] = !![], window[J[0x44]](), window[J[0x45]]()) : setTimeout(function () {
                window[J[0x48]]();
            }, 0x1f4);
        },
        'fail': function (f4_eh) {
            console[J[0x2f]](J[0x4d]), console[J[0x2f]](f4_eh), setTimeout(function () {
                window[J[0x48]]();
            }, 0x1f4);
        }
    });
    r2s8w3 && r2s8w3[J[0x47]](invkoc => {});
}, window[J[0x4e]] = function () {
    window[J[0x29]](window[J[0x2d]], J[0x4f]) >= 0x0 ? (console[J[0x2f]](J[0x50] + window[J[0x2d]] + J[0x51]), window[J[0x52]](), window[J[0x3c]](), window[J[0x48]]()) : (window[J[0x53]](J[0x54], window[J[0x2d]]), wx[J[0x36]]({
        'title': J[0x55],
        'content': J[0x56]
    }));
}, window[J[0x1a]] = '', wx[J[0x57]]({
    'success'(ehu4) {
        window[J[0x1a]] = J[0x58] + ehu4[J[0x59]] + J[0x5a] + ehu4[J[0x5b]] + J[0x5c] + ehu4[J[0x5d]] + J[0x5e] + ehu4[J[0x5f]] + J[0x60] + ehu4[J[0x61]] + J[0x62] + ehu4[J[0x2d]] + J[0x63] + ehu4[J[0x64]], console[J[0x2f]](window[J[0x1a]]), console[J[0x2f]](J[0x65] + ehu4[J[0x66]] + J[0x67] + ehu4[J[0x68]] + J[0x69] + ehu4[J[0x6a]] + J[0x6b] + ehu4[J[0x6c]] + J[0x6d] + ehu4[J[0x6e]] + J[0x6f] + ehu4[J[0x70]] + J[0x71] + (ehu4[J[0x72]] ? ehu4[J[0x72]][J[0x73]] + ',' + ehu4[J[0x72]][J[0x74]] + ',' + ehu4[J[0x72]][J[0x75]] + ',' + ehu4[J[0x72]][J[0x76]] : ''));
        var ars = ehu4[J[0x5f]] ? ehu4[J[0x5f]][J[0x77]]() : '',
            eudhf4 = ehu4[J[0x5b]] ? ehu4[J[0x5b]][J[0x77]]()[J[0x8]]('\x20', '') : '';
        window[J[0x10]][J[0x78]] = ars[J[0x79]](J[0x7a]) != -0x1, window[J[0x10]][J[0x7b]] = ars[J[0x79]](J[0x7c]) != -0x1, window[J[0x10]][J[0x7d]] = ars[J[0x79]](J[0x7a]) != -0x1 || ars[J[0x79]](J[0x7c]) != -0x1, window[J[0x10]][J[0x7e]] = ars[J[0x79]](J[0x7f]) != -0x1 || ars[J[0x79]](J[0x80]) != -0x1, window[J[0x10]][J[0x81]] = ehu4[J[0x61]] ? ehu4[J[0x61]][J[0x77]]() : '', window[J[0x10]][J[0x82]] = ![], window[J[0x10]][J[0x83]] = 0x2;
        if (ars[J[0x79]](J[0x7c]) != -0x1) {
            if (ehu4[J[0x64]] >= 0x18) window[J[0x10]][J[0x83]] = 0x3;else window[J[0x10]][J[0x83]] = 0x2;
        } else {
            if (ars[J[0x79]](J[0x7a]) != -0x1) {
                if (ehu4[J[0x64]] && ehu4[J[0x64]] >= 0x14) window[J[0x10]][J[0x83]] = 0x3;else {
                    if (eudhf4[J[0x79]](J[0x84]) != -0x1 || eudhf4[J[0x79]](J[0x85]) != -0x1 || eudhf4[J[0x79]](J[0x86]) != -0x1 || eudhf4[J[0x79]](J[0x87]) != -0x1 || eudhf4[J[0x79]](J[0x88]) != -0x1) window[J[0x10]][J[0x83]] = 0x2;else window[J[0x10]][J[0x83]] = 0x3;
                }
            } else window[J[0x10]][J[0x83]] = 0x2;
        }
        console[J[0x2f]](J[0x89] + window[J[0x10]][J[0x82]] + J[0x8a] + window[J[0x10]][J[0x83]]);
    }
}), wx[J[0x8b]]({
    'success': function (se_f) {
        console[J[0x2f]](J[0x8c] + se_f[J[0x8d]] + J[0x8e] + se_f[J[0x8f]]);
    }
}), wx[J[0x90]]({
    'success': function (noi0k) {
        console[J[0x2f]](J[0x91] + noi0k[J[0x92]]);
    }
}), wx[J[0x93]]({ 'keepScreenOn': !![] }), wx[J[0x94]](function (d4he5u) {
    console[J[0x2f]](J[0x91] + d4he5u[J[0x92]] + J[0x95] + d4he5u[J[0x96]]);
}), wx[J[0x97]](function (hue4df) {
    window[J[0x98]] = hue4df, window[J[0x99]] && window[J[0x98]] && (console[J[0x1]](J[0x9a] + window[J[0x98]][J[0x9b]]), window[J[0x99]](window[J[0x98]]), window[J[0x98]] = null);
}), window[J[0x9c]] = 0x0, window[J[0x9d]] = 0x0, window[J[0x9e]] = null, wx[J[0x9f]](function () {
    window[J[0x9d]]++;
    var gq$9yl = Date[J[0xa0]]();
    (window[J[0x9c]] == 0x0 || gq$9yl - window[J[0x9c]] > 0x1d4c0) && (console[J[0xa1]](J[0xa2]), wx[J[0xa3]]());
    if (window[J[0x9d]] >= 0x2) {
        window[J[0x9d]] = 0x0, console[J[0x1d]](J[0xa4]), wx[J[0xa5]]('0', 0x1);
        if (window[J[0x10]] && window[J[0x10]][J[0x78]]) window[J[0x53]](J[0xa6], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});