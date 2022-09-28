var B = wx.$z;
console[B[0x6c]](B[0x6d]), window[B[0x6e]], wx[B[0x6f]](function (_nh0aq) {
    if (_nh0aq) {
        if (_nh0aq[B[0x70]]) {
            var _aer = window[B[0x71]][B[0x72]][B[0x73]](new RegExp(/\./, 'g'), '_'),
                d19f3 = _nh0aq[B[0x70]],
                yt5l$2 = d19f3[B[0x74]](/(Z11Z11Z11\/Z11game.js:)[0-9]{1,60}(:)/g);
            if (yt5l$2) for (var ub75s = 0x0; ub75s < yt5l$2[B[0x75]]; ub75s++) {
                if (yt5l$2[ub75s] && yt5l$2[ub75s][B[0x75]] > 0x0) {
                    var jreg_a = parseInt(yt5l$2[ub75s][B[0x73]](B[0x76], '')[B[0x73]](':', ''));
                    d19f3 = d19f3[B[0x73]](yt5l$2[ub75s], yt5l$2[ub75s][B[0x73]](':' + jreg_a + ':', ':' + (jreg_a - 0x2) + ':'));
                }
            }
            d19f3 = d19f3[B[0x73]](new RegExp(B[0x77], 'g'), B[0x78] + _aer + B[0x79]), d19f3 = d19f3[B[0x73]](new RegExp(B[0x7a], 'g'), B[0x78] + _aer + B[0x79]), _nh0aq[B[0x70]] = d19f3;
        }
        var bi527 = {
            'id': window[B[0x7b]][B[0x7c]],
            'role': window[B[0x7b]][B[0x7d]],
            'level': window[B[0x7b]][B[0x7e]],
            'user': window[B[0x7b]][B[0x7f]],
            'version': window[B[0x7b]][B[0x80]],
            'cdn': window[B[0x7b]][B[0x81]],
            'pkgName': window[B[0x7b]][B[0x82]],
            'gamever': window[B[0x71]][B[0x72]],
            'serverid': window[B[0x7b]][B[0x83]] ? window[B[0x7b]][B[0x83]][B[0x49]] : 0x0,
            'systemInfo': window[B[0x84]],
            'error': B[0x85],
            'stack': _nh0aq ? _nh0aq[B[0x70]] : ''
        },
            tb$2 = JSON[B[0x86]](bi527);
        console[B[0x87]](B[0x88] + tb$2), (!window[B[0x6e]] || window[B[0x6e]] != bi527[B[0x87]]) && (window[B[0x6e]] = bi527[B[0x87]], window[B[0x89]](bi527));
    }
});
import 'Z11md5min.js';
import 'Z11zlibs.js';
window[B[0x8a]] = require(B[0x8b]);
import 'Z11index.js';
import 'Z11libsmin.js';
import 'Z11wxmini.js';
import 'Z11initmin.js';
console[B[0x6c]](B[0x8c]), console[B[0x6c]](B[0x8d]), z0Y7GL({ 'title': B[0x8e] });
var zarg_ej = { 'z04YL7G': !![] };
new window[B[0x8f]](zarg_ej), window[B[0x8f]][B[0x90]][B[0x91]]();
if (window[B[0x92]]) clearInterval(window[B[0x92]]);
window[B[0x92]] = null, window[B[0x93]] = function (oijus, zw3) {
    if (!oijus || !zw3) return 0x0;
    oijus = oijus[B[0x94]]('.'), zw3 = zw3[B[0x94]]('.');
    const tvl2y$ = Math[B[0x95]](oijus[B[0x75]], zw3[B[0x75]]);
    while (oijus[B[0x75]] < tvl2y$) {
        oijus[B[0x96]]('0');
    }
    while (zw3[B[0x75]] < tvl2y$) {
        zw3[B[0x96]]('0');
    }
    for (var f6z9d = 0x0; f6z9d < tvl2y$; f6z9d++) {
        const w0z9fm = parseInt(oijus[f6z9d]),
              nae_g = parseInt(zw3[f6z9d]);
        if (w0z9fm > nae_g) return 0x1;else {
            if (w0z9fm < nae_g) return -0x1;
        }
    }
    return 0x0;
}, window[B[0x97]] = wx[B[0x98]]()[B[0x97]], console[B[0x99]](B[0x9a] + window[B[0x97]]);
var z$y5b2 = wx[B[0x9b]]();
z$y5b2[B[0x9c]](function (mnzw0h) {
    console[B[0x99]](B[0x9d] + mnzw0h[B[0x9e]]);
}), z$y5b2[B[0x9f]](function () {
    wx[B[0xa0]]({
        'title': B[0xa1],
        'content': B[0xa2],
        'showCancel': ![],
        'success': function (yv2t$) {
            z$y5b2[B[0xa3]]();
        }
    });
}), z$y5b2[B[0xa4]](function () {
    console[B[0x99]](B[0xa5]);
}), window[B[0xa6]] = function () {
    console[B[0x99]](B[0xa7]);
    var jr_ag = wx[B[0xa8]]({
        'name': B[0xa9],
        'success': function (uri7o) {
            console[B[0x99]](B[0xaa]), console[B[0x99]](uri7o), uri7o && uri7o[B[0xab]] == B[0xac] ? (window[B[0xad]] = !![], window[B[0xae]](), window[B[0xaf]]()) : setTimeout(function () {
                window[B[0xa6]]();
            }, 0x1f4);
        },
        'fail': function (b$5ty2) {
            console[B[0x99]](B[0xb0]), console[B[0x99]](b$5ty2), setTimeout(function () {
                window[B[0xa6]]();
            }, 0x1f4);
        }
    });
    jr_ag && jr_ag[B[0xb1]](y7i25 => {});
}, window[B[0xb2]] = function () {
    console[B[0x99]](B[0xb3]);
    var ourgs = wx[B[0xa8]]({
        'name': B[0xb4],
        'success': function (x1p683) {
            console[B[0x99]](B[0xb5]), console[B[0x99]](x1p683), x1p683 && x1p683[B[0xab]] == B[0xac] ? (window[B[0xb6]] = !![], window[B[0xae]](), window[B[0xaf]]()) : setTimeout(function () {
                window[B[0xb2]]();
            }, 0x1f4);
        },
        'fail': function (iby7) {
            console[B[0x99]](B[0xb7]), console[B[0x99]](iby7), setTimeout(function () {
                window[B[0xb2]]();
            }, 0x1f4);
        }
    });
    ourgs && ourgs[B[0xb1]](w0nhmz => {});
}, window[B[0xb8]] = function () {
    window[B[0x93]](window[B[0x97]], B[0xb9]) >= 0x0 ? (console[B[0x99]](B[0xba] + window[B[0x97]] + B[0xbb]), window[B[0xbc]](), window[B[0xa6]](), window[B[0xb2]]()) : (window[B[0xbd]](B[0xbe], window[B[0x97]]), wx[B[0xa0]]({
        'title': B[0xbf],
        'content': B[0xc0]
    }));
}, window[B[0x84]] = '', wx[B[0xc1]]({
    'success'(iy72b) {
        window[B[0x84]] = B[0xc2] + iy72b[B[0xc3]] + B[0xc4] + iy72b[B[0xc5]] + B[0xc6] + iy72b[B[0xc7]] + B[0xc8] + iy72b[B[0xc9]] + B[0xca] + iy72b[B[0xcb]] + B[0xcc] + iy72b[B[0x97]] + B[0xcd] + iy72b[B[0xce]], console[B[0x99]](window[B[0x84]]), console[B[0x99]](B[0xcf] + iy72b[B[0xd0]] + B[0xd1] + iy72b[B[0xd2]] + B[0xd3] + iy72b[B[0xd4]] + B[0xd5] + iy72b[B[0xd6]] + B[0xd7] + iy72b[B[0xd8]] + B[0xd9] + iy72b[B[0xda]] + B[0xdb] + (iy72b[B[0xdc]] ? iy72b[B[0xdc]][B[0xdd]] + ',' + iy72b[B[0xdc]][B[0xde]] + ',' + iy72b[B[0xdc]][B[0xdf]] + ',' + iy72b[B[0xdc]][B[0xe0]] : ''));
        var dz39 = iy72b[B[0xc9]] ? iy72b[B[0xc9]][B[0xe1]]() : '',
            g_naqe = iy72b[B[0xc5]] ? iy72b[B[0xc5]][B[0xe1]]()[B[0x73]]('\x20', '') : '';
        window[B[0x7b]][B[0xe2]] = dz39[B[0xe3]](B[0xe4]) != -0x1, window[B[0x7b]][B[0xe5]] = dz39[B[0xe3]](B[0x50]) != -0x1, window[B[0x7b]][B[0xe6]] = dz39[B[0xe3]](B[0xe4]) != -0x1 || dz39[B[0xe3]](B[0x50]) != -0x1, window[B[0x7b]][B[0xe7]] = dz39[B[0xe3]](B[0xe8]) != -0x1 || dz39[B[0xe3]](B[0xe9]) != -0x1, window[B[0x7b]][B[0xea]] = iy72b[B[0xcb]] ? iy72b[B[0xcb]][B[0xe1]]() : '', window[B[0x7b]][B[0xeb]] = ![], window[B[0x7b]][B[0xec]] = 0x2;
        if (dz39[B[0xe3]](B[0x50]) != -0x1) {
            if (iy72b[B[0xce]] >= 0x18) window[B[0x7b]][B[0xec]] = 0x3;else window[B[0x7b]][B[0xec]] = 0x2;
        } else {
            if (dz39[B[0xe3]](B[0xe4]) != -0x1) {
                if (iy72b[B[0xce]] && iy72b[B[0xce]] >= 0x14) window[B[0x7b]][B[0xec]] = 0x3;else {
                    if (g_naqe[B[0xe3]](B[0xed]) != -0x1 || g_naqe[B[0xe3]](B[0xee]) != -0x1 || g_naqe[B[0xe3]](B[0xef]) != -0x1 || g_naqe[B[0xe3]](B[0xf0]) != -0x1 || g_naqe[B[0xe3]](B[0xf1]) != -0x1) window[B[0x7b]][B[0xec]] = 0x2;else window[B[0x7b]][B[0xec]] = 0x3;
                }
            } else window[B[0x7b]][B[0xec]] = 0x2;
        }
        console[B[0x99]](B[0xf2] + window[B[0x7b]][B[0xeb]] + B[0xf3] + window[B[0x7b]][B[0xec]]);
    }
}), wx[B[0xf4]]({
    'success': function (j_oeg) {
        console[B[0x99]](B[0xf5] + j_oeg[B[0xf6]] + B[0xf7] + j_oeg[B[0xf8]]);
    }
}), wx[B[0xf9]]({
    'success': function (fdw) {
        console[B[0x99]](B[0xfa] + fdw[B[0xfb]]);
    }
}), wx[B[0xfc]]({ 'keepScreenOn': !![] }), wx[B[0xfd]](function (fw9dz) {
    console[B[0x99]](B[0xfa] + fw9dz[B[0xfb]] + B[0xfe] + fw9dz[B[0xff]]);
}), wx[B[0x100]](function (gj_ero) {
    window[B[0x101]] = gj_ero, window[B[0x102]] && window[B[0x101]] && (console[B[0x6c]](B[0x103] + window[B[0x101]][B[0x104]]), window[B[0x102]](window[B[0x101]]), window[B[0x101]] = null);
}), window[B[0x105]] = 0x0, window[B[0x106]] = 0x0, window[B[0x107]] = null, wx[B[0x108]](function () {
    window[B[0x106]]++;
    var sb7ui = Date[B[0x109]]();
    (window[B[0x105]] == 0x0 || sb7ui - window[B[0x105]] > 0x1d4c0) && (console[B[0x10a]](B[0x10b]), wx[B[0x10c]]());
    if (window[B[0x106]] >= 0x2) {
        window[B[0x106]] = 0x0, console[B[0x87]](B[0x10d]), wx[B[0x10e]]('0', 0x1);
        if (window[B[0x7b]] && window[B[0x7b]][B[0xe2]]) window[B[0xbd]](B[0x10f], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});