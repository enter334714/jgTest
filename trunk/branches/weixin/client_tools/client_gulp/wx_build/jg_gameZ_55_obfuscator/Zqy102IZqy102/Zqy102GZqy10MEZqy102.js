var J = wx.h$;
console[J[0x1]](J[0x2]), window[J[0x3]], wx[J[0x4]](function (ampt6) {
    if (ampt6) {
        if (ampt6[J[0x5]]) {
            var $qk0xg = window[J[0x6]][J[0x7]][J[0x8]](new RegExp(/\./, 'g'), '_'),
                pyz1l = ampt6[J[0x5]],
                kgv0x = pyz1l[J[0x9]](/(Zqy10Zqy10Zqy10Zqy10Zqy10\/Zqy102GZqy10MEZqy102.js:)[0-9]{1,60}(:)/g);
            if (kgv0x) for (var qlyg91 = 0x0; qlyg91 < kgv0x[J[0xa]]; qlyg91++) {
                if (kgv0x[qlyg91] && kgv0x[qlyg91][J[0xa]] > 0x0) {
                    var cnvik = parseInt(kgv0x[qlyg91][J[0x8]](J[0xb], '')[J[0x8]](':', ''));
                    pyz1l = pyz1l[J[0x8]](kgv0x[qlyg91], kgv0x[qlyg91][J[0x8]](':' + cnvik + ':', ':' + (cnvik - 0x2) + ':'));
                }
            }
            pyz1l = pyz1l[J[0x8]](new RegExp(J[0xc], 'g'), J[0xd] + $qk0xg + J[0xe]), pyz1l = pyz1l[J[0x8]](new RegExp(J[0xf], 'g'), J[0xd] + $qk0xg + J[0xe]), ampt6[J[0x5]] = pyz1l;
        }
        var xlqyg$ = {
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
            'stack': ampt6 ? ampt6[J[0x5]] : ''
        },
            pm1t6 = JSON[J[0x1c]](xlqyg$);
        console[J[0x1d]](J[0x1e] + pm1t6), (!window[J[0x3]] || window[J[0x3]] != xlqyg$[J[0x1d]]) && (window[J[0x3]] = xlqyg$[J[0x1d]], window[J[0x1f]](xlqyg$));
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
var geh4fd = { 'J1HYEC7': !![] };
new window[J[0x25]](geh4fd), window[J[0x25]][J[0x26]][J[0x27]]();
if (window[J[0x28]]) clearInterval(window[J[0x28]]);
window[J[0x28]] = null, window[J[0x29]] = function (_83fr, lx$0q) {
    if (!_83fr || !lx$0q) return 0x0;
    _83fr = _83fr[J[0x2a]]('.'), lx$0q = lx$0q[J[0x2a]]('.');
    const vino0k = Math[J[0x2b]](_83fr[J[0xa]], lx$0q[J[0xa]]);
    while (_83fr[J[0xa]] < vino0k) {
        _83fr[J[0x2c]]('0');
    }
    while (lx$0q[J[0xa]] < vino0k) {
        lx$0q[J[0x2c]]('0');
    }
    for (var ta7mp6 = 0x0; ta7mp6 < vino0k; ta7mp6++) {
        const gly9 = parseInt(_83fr[ta7mp6]),
              xgl$0q = parseInt(lx$0q[ta7mp6]);
        if (gly9 > xgl$0q) return 0x1;else {
            if (gly9 < xgl$0q) return -0x1;
        }
    }
    return 0x0;
}, window[J[0x2d]] = wx[J[0x2e]]()[J[0x2d]], console[J[0x2f]](J[0x30] + window[J[0x2d]]);
var gxg0l$ = wx[J[0x31]]();
gxg0l$[J[0x32]](function (s_h8f) {
    console[J[0x2f]](J[0x33] + s_h8f[J[0x34]]);
}), gxg0l$[J[0x35]](function () {
    wx[J[0x36]]({
        'title': J[0x37],
        'content': J[0x38],
        'showCancel': ![],
        'success': function (df8_e) {
            gxg0l$[J[0x39]]();
        }
    });
}), gxg0l$[J[0x3a]](function () {
    console[J[0x2f]](J[0x3b]);
}), window[J[0x3c]] = function () {
    console[J[0x2f]](J[0x3d]);
    var xg0ql$ = wx[J[0x3e]]({
        'name': J[0x3f],
        'success': function (pl9zy) {
            console[J[0x2f]](J[0x40]), console[J[0x2f]](pl9zy), pl9zy && pl9zy[J[0x41]] == J[0x42] ? (window[J[0x43]] = !![], window[J[0x44]](), window[J[0x45]]()) : setTimeout(function () {
                window[J[0x3c]]();
            }, 0x1f4);
        },
        'fail': function (sw23ar) {
            console[J[0x2f]](J[0x46]), console[J[0x2f]](sw23ar), setTimeout(function () {
                window[J[0x3c]]();
            }, 0x1f4);
        }
    });
    xg0ql$ && xg0ql$[J[0x47]]($k0vi => {});
}, window[J[0x48]] = function () {
    console[J[0x2f]](J[0x49]);
    var q0lg$ = wx[J[0x3e]]({
        'name': J[0x4a],
        'success': function ($vxik) {
            console[J[0x2f]](J[0x4b]), console[J[0x2f]]($vxik), $vxik && $vxik[J[0x41]] == J[0x42] ? (window[J[0x4c]] = !![], window[J[0x44]](), window[J[0x45]]()) : setTimeout(function () {
                window[J[0x48]]();
            }, 0x1f4);
        },
        'fail': function (ly$q9g) {
            console[J[0x2f]](J[0x4d]), console[J[0x2f]](ly$q9g), setTimeout(function () {
                window[J[0x48]]();
            }, 0x1f4);
        }
    });
    q0lg$ && q0lg$[J[0x47]](h4e_fd => {});
}, window[J[0x4e]] = function () {
    window[J[0x29]](window[J[0x2d]], J[0x4f]) >= 0x0 ? (console[J[0x2f]](J[0x50] + window[J[0x2d]] + J[0x51]), window[J[0x52]](), window[J[0x3c]](), window[J[0x48]]()) : (window[J[0x53]](J[0x54], window[J[0x2d]]), wx[J[0x36]]({
        'title': J[0x55],
        'content': J[0x56]
    }));
}, window[J[0x1a]] = '', wx[J[0x57]]({
    'success'(f8_sr3) {
        window[J[0x1a]] = J[0x58] + f8_sr3[J[0x59]] + J[0x5a] + f8_sr3[J[0x5b]] + J[0x5c] + f8_sr3[J[0x5d]] + J[0x5e] + f8_sr3[J[0x5f]] + J[0x60] + f8_sr3[J[0x61]] + J[0x62] + f8_sr3[J[0x2d]] + J[0x63] + f8_sr3[J[0x64]], console[J[0x2f]](window[J[0x1a]]), console[J[0x2f]](J[0x65] + f8_sr3[J[0x66]] + J[0x67] + f8_sr3[J[0x68]] + J[0x69] + f8_sr3[J[0x6a]] + J[0x6b] + f8_sr3[J[0x6c]] + J[0x6d] + f8_sr3[J[0x6e]] + J[0x6f] + f8_sr3[J[0x70]] + J[0x71] + (f8_sr3[J[0x72]] ? f8_sr3[J[0x72]][J[0x73]] + ',' + f8_sr3[J[0x72]][J[0x74]] + ',' + f8_sr3[J[0x72]][J[0x75]] + ',' + f8_sr3[J[0x72]][J[0x76]] : ''));
        var lzyp1 = f8_sr3[J[0x5f]] ? f8_sr3[J[0x5f]][J[0x77]]() : '',
            qx0$k = f8_sr3[J[0x5b]] ? f8_sr3[J[0x5b]][J[0x77]]()[J[0x8]]('\x20', '') : '';
        window[J[0x10]][J[0x78]] = lzyp1[J[0x79]](J[0x7a]) != -0x1, window[J[0x10]][J[0x7b]] = lzyp1[J[0x79]](J[0x7c]) != -0x1, window[J[0x10]][J[0x7d]] = lzyp1[J[0x79]](J[0x7a]) != -0x1 || lzyp1[J[0x79]](J[0x7c]) != -0x1, window[J[0x10]][J[0x7e]] = lzyp1[J[0x79]](J[0x7f]) != -0x1 || lzyp1[J[0x79]](J[0x80]) != -0x1, window[J[0x10]][J[0x81]] = f8_sr3[J[0x61]] ? f8_sr3[J[0x61]][J[0x77]]() : '', window[J[0x10]][J[0x82]] = ![], window[J[0x10]][J[0x83]] = 0x2;
        if (lzyp1[J[0x79]](J[0x7c]) != -0x1) {
            if (f8_sr3[J[0x64]] >= 0x18) window[J[0x10]][J[0x83]] = 0x3;else window[J[0x10]][J[0x83]] = 0x2;
        } else {
            if (lzyp1[J[0x79]](J[0x7a]) != -0x1) {
                if (f8_sr3[J[0x64]] && f8_sr3[J[0x64]] >= 0x14) window[J[0x10]][J[0x83]] = 0x3;else {
                    if (qx0$k[J[0x79]](J[0x84]) != -0x1 || qx0$k[J[0x79]](J[0x85]) != -0x1 || qx0$k[J[0x79]](J[0x86]) != -0x1 || qx0$k[J[0x79]](J[0x87]) != -0x1 || qx0$k[J[0x79]](J[0x88]) != -0x1) window[J[0x10]][J[0x83]] = 0x2;else window[J[0x10]][J[0x83]] = 0x3;
                }
            } else window[J[0x10]][J[0x83]] = 0x2;
        }
        console[J[0x2f]](J[0x89] + window[J[0x10]][J[0x82]] + J[0x8a] + window[J[0x10]][J[0x83]]);
    }
}), wx[J[0x8b]]({
    'success': function (zp1y69) {
        console[J[0x2f]](J[0x8c] + zp1y69[J[0x8d]] + J[0x8e] + zp1y69[J[0x8f]]);
    }
}), wx[J[0x90]]({
    'success': function (pm6z7t) {
        console[J[0x2f]](J[0x91] + pm6z7t[J[0x92]]);
    }
}), wx[J[0x93]]({ 'keepScreenOn': !![] }), wx[J[0x94]](function (s_ef8) {
    console[J[0x2f]](J[0x91] + s_ef8[J[0x92]] + J[0x95] + s_ef8[J[0x96]]);
}), wx[J[0x97]](function (rwma) {
    window[J[0x98]] = rwma, window[J[0x99]] && window[J[0x98]] && (console[J[0x1]](J[0x9a] + window[J[0x98]][J[0x9b]]), window[J[0x99]](window[J[0x98]]), window[J[0x98]] = null);
}), window[J[0x9c]] = 0x0, window[J[0x9d]] = 0x0, window[J[0x9e]] = null, wx[J[0x9f]](function () {
    window[J[0x9d]]++;
    var a67pm = Date[J[0xa0]]();
    (window[J[0x9c]] == 0x0 || a67pm - window[J[0x9c]] > 0x1d4c0) && (console[J[0xa1]](J[0xa2]), wx[J[0xa3]]());
    if (window[J[0x9d]] >= 0x2) {
        window[J[0x9d]] = 0x0, console[J[0x1d]](J[0xa4]), wx[J[0xa5]]('0', 0x1);
        if (window[J[0x10]] && window[J[0x10]][J[0x78]]) window[J[0x53]](J[0xa6], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});