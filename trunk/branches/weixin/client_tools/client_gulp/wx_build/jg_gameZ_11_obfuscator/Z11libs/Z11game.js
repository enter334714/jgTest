var B = wx.$z;
console[B[0x6c]](B[0x6d]), window[B[0x6e]], wx[B[0x6f]](function (fdz96) {
    if (fdz96) {
        if (fdz96[B[0x70]]) {
            var yib27 = window[B[0x71]][B[0x72]][B[0x73]](new RegExp(/\./, 'g'), '_'),
                ujrogs = fdz96[B[0x70]],
                hnwz = ujrogs[B[0x74]](/(Z11Z11Z11\/Z11game.js:)[0-9]{1,60}(:)/g);
            if (hnwz) for (var ejgsor = 0x0; ejgsor < hnwz[B[0x75]]; ejgsor++) {
                if (hnwz[ejgsor] && hnwz[ejgsor][B[0x75]] > 0x0) {
                    var f69zd3 = parseInt(hnwz[ejgsor][B[0x73]](B[0x76], '')[B[0x73]](':', ''));
                    ujrogs = ujrogs[B[0x73]](hnwz[ejgsor], hnwz[ejgsor][B[0x73]](':' + f69zd3 + ':', ':' + (f69zd3 - 0x2) + ':'));
                }
            }
            ujrogs = ujrogs[B[0x73]](new RegExp(B[0x77], 'g'), B[0x78] + yib27 + B[0x79]), ujrogs = ujrogs[B[0x73]](new RegExp(B[0x7a], 'g'), B[0x78] + yib27 + B[0x79]), fdz96[B[0x70]] = ujrogs;
        }
        var sui7 = {
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
            'stack': fdz96 ? fdz96[B[0x70]] : ''
        },
            x8p46 = JSON[B[0x86]](sui7);
        console[B[0x87]](B[0x88] + x8p46), (!window[B[0x6e]] || window[B[0x6e]] != sui7[B[0x87]]) && (window[B[0x6e]] = sui7[B[0x87]], window[B[0x89]](sui7));
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
var zmfwzd9 = { 'z04YL7G': !![] };
new window[B[0x8f]](zmfwzd9), window[B[0x8f]][B[0x90]][B[0x91]]();
if (window[B[0x92]]) clearInterval(window[B[0x92]]);
window[B[0x92]] = null, window[B[0x93]] = function ($b, qan0mh) {
    if (!$b || !qan0mh) return 0x0;
    $b = $b[B[0x94]]('.'), qan0mh = qan0mh[B[0x94]]('.');
    const d96813 = Math[B[0x95]]($b[B[0x75]], qan0mh[B[0x75]]);
    while ($b[B[0x75]] < d96813) {
        $b[B[0x96]]('0');
    }
    while (qan0mh[B[0x75]] < d96813) {
        qan0mh[B[0x96]]('0');
    }
    for (var neag_ = 0x0; neag_ < d96813; neag_++) {
        const byt7 = parseInt($b[neag_]),
              e_agrj = parseInt(qan0mh[neag_]);
        if (byt7 > e_agrj) return 0x1;else {
            if (byt7 < e_agrj) return -0x1;
        }
    }
    return 0x0;
}, window[B[0x97]] = wx[B[0x98]]()[B[0x97]], console[B[0x99]](B[0x9a] + window[B[0x97]]);
var zzwfm9 = wx[B[0x9b]]();
zzwfm9[B[0x9c]](function (o7ris) {
    console[B[0x99]](B[0x9d] + o7ris[B[0x9e]]);
}), zzwfm9[B[0x9f]](function () {
    wx[B[0xa0]]({
        'title': B[0xa1],
        'content': B[0xa2],
        'showCancel': ![],
        'success': function (q0_a) {
            zzwfm9[B[0xa3]]();
        }
    });
}), zzwfm9[B[0xa4]](function () {
    console[B[0x99]](B[0xa5]);
}), window[B[0xa6]] = function () {
    console[B[0x99]](B[0xa7]);
    var nqha = wx[B[0xa8]]({
        'name': B[0xa9],
        'success': function ($tl2y) {
            console[B[0x99]](B[0xaa]), console[B[0x99]]($tl2y), $tl2y && $tl2y[B[0xab]] == B[0xac] ? (window[B[0xad]] = !![], window[B[0xae]](), window[B[0xaf]]()) : setTimeout(function () {
                window[B[0xa6]]();
            }, 0x1f4);
        },
        'fail': function (_hqan0) {
            console[B[0x99]](B[0xb0]), console[B[0x99]](_hqan0), setTimeout(function () {
                window[B[0xa6]]();
            }, 0x1f4);
        }
    });
    nqha && nqha[B[0xb1]](sroiuj => {});
}, window[B[0xb2]] = function () {
    console[B[0x99]](B[0xb3]);
    var jeqg_a = wx[B[0xa8]]({
        'name': B[0xb4],
        'success': function (q0nhma) {
            console[B[0x99]](B[0xb5]), console[B[0x99]](q0nhma), q0nhma && q0nhma[B[0xab]] == B[0xac] ? (window[B[0xb6]] = !![], window[B[0xae]](), window[B[0xaf]]()) : setTimeout(function () {
                window[B[0xb2]]();
            }, 0x1f4);
        },
        'fail': function (p4618) {
            console[B[0x99]](B[0xb7]), console[B[0x99]](p4618), setTimeout(function () {
                window[B[0xb2]]();
            }, 0x1f4);
        }
    });
    jeqg_a && jeqg_a[B[0xb1]](d18x36 => {});
}, window[B[0xb8]] = function () {
    window[B[0x93]](window[B[0x97]], B[0xb9]) >= 0x0 ? (console[B[0x99]](B[0xba] + window[B[0x97]] + B[0xbb]), window[B[0xbc]](), window[B[0xa6]](), window[B[0xb2]]()) : (window[B[0xbd]](B[0xbe], window[B[0x97]]), wx[B[0xa0]]({
        'title': B[0xbf],
        'content': B[0xc0]
    }));
}, window[B[0x84]] = '', wx[B[0xc1]]({
    'success'(wfdz39) {
        window[B[0x84]] = B[0xc2] + wfdz39[B[0xc3]] + B[0xc4] + wfdz39[B[0xc5]] + B[0xc6] + wfdz39[B[0xc7]] + B[0xc8] + wfdz39[B[0xc9]] + B[0xca] + wfdz39[B[0xcb]] + B[0xcc] + wfdz39[B[0x97]] + B[0xcd] + wfdz39[B[0xce]], console[B[0x99]](window[B[0x84]]), console[B[0x99]](B[0xcf] + wfdz39[B[0xd0]] + B[0xd1] + wfdz39[B[0xd2]] + B[0xd3] + wfdz39[B[0xd4]] + B[0xd5] + wfdz39[B[0xd6]] + B[0xd7] + wfdz39[B[0xd8]] + B[0xd9] + wfdz39[B[0xda]] + B[0xdb] + (wfdz39[B[0xdc]] ? wfdz39[B[0xdc]][B[0xdd]] + ',' + wfdz39[B[0xdc]][B[0xde]] + ',' + wfdz39[B[0xdc]][B[0xdf]] + ',' + wfdz39[B[0xdc]][B[0xe0]] : ''));
        var dz9fwm = wfdz39[B[0xc9]] ? wfdz39[B[0xc9]][B[0xe1]]() : '',
            jgo_re = wfdz39[B[0xc5]] ? wfdz39[B[0xc5]][B[0xe1]]()[B[0x73]]('\x20', '') : '';
        window[B[0x7b]][B[0xe2]] = dz9fwm[B[0xe3]](B[0xe4]) != -0x1, window[B[0x7b]][B[0xe5]] = dz9fwm[B[0xe3]](B[0x50]) != -0x1, window[B[0x7b]][B[0xe6]] = dz9fwm[B[0xe3]](B[0xe4]) != -0x1 || dz9fwm[B[0xe3]](B[0x50]) != -0x1, window[B[0x7b]][B[0xe7]] = dz9fwm[B[0xe3]](B[0xe8]) != -0x1 || dz9fwm[B[0xe3]](B[0xe9]) != -0x1, window[B[0x7b]][B[0xea]] = wfdz39[B[0xcb]] ? wfdz39[B[0xcb]][B[0xe1]]() : '', window[B[0x7b]][B[0xeb]] = ![], window[B[0x7b]][B[0xec]] = 0x2;
        if (dz9fwm[B[0xe3]](B[0x50]) != -0x1) {
            if (wfdz39[B[0xce]] >= 0x18) window[B[0x7b]][B[0xec]] = 0x3;else window[B[0x7b]][B[0xec]] = 0x2;
        } else {
            if (dz9fwm[B[0xe3]](B[0xe4]) != -0x1) {
                if (wfdz39[B[0xce]] && wfdz39[B[0xce]] >= 0x14) window[B[0x7b]][B[0xec]] = 0x3;else {
                    if (jgo_re[B[0xe3]](B[0xed]) != -0x1 || jgo_re[B[0xe3]](B[0xee]) != -0x1 || jgo_re[B[0xe3]](B[0xef]) != -0x1 || jgo_re[B[0xe3]](B[0xf0]) != -0x1 || jgo_re[B[0xe3]](B[0xf1]) != -0x1) window[B[0x7b]][B[0xec]] = 0x2;else window[B[0x7b]][B[0xec]] = 0x3;
                }
            } else window[B[0x7b]][B[0xec]] = 0x2;
        }
        console[B[0x99]](B[0xf2] + window[B[0x7b]][B[0xeb]] + B[0xf3] + window[B[0x7b]][B[0xec]]);
    }
}), wx[B[0xf4]]({
    'success': function (yb2t$5) {
        console[B[0x99]](B[0xf5] + yb2t$5[B[0xf6]] + B[0xf7] + yb2t$5[B[0xf8]]);
    }
}), wx[B[0xf9]]({
    'success': function (iu75) {
        console[B[0x99]](B[0xfa] + iu75[B[0xfb]]);
    }
}), wx[B[0xfc]]({ 'keepScreenOn': !![] }), wx[B[0xfd]](function (ousj) {
    console[B[0x99]](B[0xfa] + ousj[B[0xfb]] + B[0xfe] + ousj[B[0xff]]);
}), wx[B[0x100]](function (x41k8p) {
    window[B[0x101]] = x41k8p, window[B[0x102]] && window[B[0x101]] && (console[B[0x6c]](B[0x103] + window[B[0x101]][B[0x104]]), window[B[0x102]](window[B[0x101]]), window[B[0x101]] = null);
}), window[B[0x105]] = 0x0, window[B[0x106]] = 0x0, window[B[0x107]] = null, wx[B[0x108]](function () {
    window[B[0x106]]++;
    var t5yl = Date[B[0x109]]();
    (window[B[0x105]] == 0x0 || t5yl - window[B[0x105]] > 0x1d4c0) && (console[B[0x10a]](B[0x10b]), wx[B[0x10c]]());
    if (window[B[0x106]] >= 0x2) {
        window[B[0x106]] = 0x0, console[B[0x87]](B[0x10d]), wx[B[0x10e]]('0', 0x1);
        if (window[B[0x7b]] && window[B[0x7b]][B[0xe2]]) window[B[0xbd]](B[0x10f], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});