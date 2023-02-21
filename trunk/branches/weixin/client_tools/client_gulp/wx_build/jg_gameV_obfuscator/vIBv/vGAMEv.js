var Q = wx.$v;
console[Q[1]](Q[2]), window[Q[3]], wx[Q[4]](function (l$ym) {
    if (l$ym) {
        if (l$ym[Q[5]]) {
            var gj8sq = window[Q[6]][Q[7]][Q[8]](new RegExp(/\./, 'g'), '_'),
                qwkxr = l$ym[Q[5]],
                f5_7eo = qwkxr[Q[9]](/(vvvvvvv\/vGAMEv.js:)[0-9]{1,60}(:)/g);
            if (f5_7eo) for (var zo9_b = 0x0; zo9_b < f5_7eo[Q[10]]; zo9_b++) {
                if (f5_7eo[zo9_b] && f5_7eo[zo9_b][Q[10]] > 0x0) {
                    var pd9206 = parseInt(f5_7eo[zo9_b][Q[8]](Q[11], '')[Q[8]](':', ''));
                    qwkxr = qwkxr[Q[8]](f5_7eo[zo9_b], f5_7eo[zo9_b][Q[8]](':' + pd9206 + ':', ':' + (pd9206 - 0x2) + ':'));
                }
            }
            qwkxr = qwkxr[Q[8]](new RegExp(Q[12], 'g'), Q[13] + gj8sq + Q[14]), qwkxr = qwkxr[Q[8]](new RegExp(Q[15], 'g'), Q[13] + gj8sq + Q[14]), l$ym[Q[5]] = qwkxr;
        }
        var vhyml = {
            'id': window[Q[16]][Q[17]],
            'role': window[Q[16]][Q[18]],
            'level': window[Q[16]][Q[19]],
            'user': window[Q[16]][Q[20]],
            'version': window[Q[16]]['lastVersion'],
            'cdn': window[Q[16]][Q[21]],
            'pkgName': window[Q[16]][Q[22]],
            'gamever': window[Q[6]][Q[7]],
            'serverid': window[Q[16]][Q[23]] ? window[Q[16]][Q[23]][Q[24]] : 0x0,
            'systemInfo': window[Q[25]],
            'error': Q[26],
            'stack': l$ym ? l$ym[Q[5]] : ''
        },
            t8rq = JSON[Q[27]](vhyml);
        console[Q[28]](Q[29] + t8rq), (!window[Q[3]] || window[Q[3]] != vhyml[Q[28]]) && (window[Q[3]] = vhyml[Q[28]], window[Q[30]](vhyml));
    }
});
import 'vvfvv.js';
import 'vv11vv.js';
window[Q[31]] = require(Q[32]);
import 'vINDvv.js';
import 'vvIB1vv.js';
import 'vvMtadvv.js';
import 'vvINIvv.js';
console[Q[1]](Q[33]), console[Q[1]](Q[34]), _vHPVJ({ 'title': Q[35] });
var vz_9b6 = { '_vUHJPV': !![] };
new window[Q[36]](vz_9b6), window[Q[36]][Q[37]]['_vUVPJH']();
if (window['_vUHPJV']) clearInterval(window['_vUHPJV']);
window['_vUHPJV'] = null, window['_vUVJHP'] = function (n20p9, xtq8jg) {
    if (!n20p9 || !xtq8jg) return 0x0;
    n20p9 = n20p9[Q[38]]('.'), xtq8jg = xtq8jg[Q[38]]('.');
    const cy$ui = Math[Q[39]](n20p9[Q[10]], xtq8jg[Q[10]]);
    while (n20p9[Q[10]] < cy$ui) {
        n20p9[Q[40]]('0');
    }
    while (xtq8jg[Q[10]] < cy$ui) {
        xtq8jg[Q[40]]('0');
    }
    for (var txqg8j = 0x0; txqg8j < cy$ui; txqg8j++) {
        const w3m = parseInt(n20p9[txqg8j]),
              i0nu12 = parseInt(xtq8jg[txqg8j]);
        if (w3m > i0nu12) return 0x1;else {
            if (w3m < i0nu12) return -0x1;
        }
    }
    return 0x0;
}, window['SDKVersion'] = wx[Q[41]]()['SDKVersion'], console[Q[42]](Q[43] + window['SDKVersion']);
var vqt8gj = wx[Q[44]]();
vqt8gj[Q[45]](function (d20pu) {
    console[Q[42]](Q[46] + d20pu[Q[47]]);
}), vqt8gj[Q[48]](function () {
    wx[Q[49]]({
        'title': Q[50],
        'content': Q[51],
        'showCancel': ![],
        'success': function (p6bd92) {
            vqt8gj[Q[52]]();
        }
    });
}), vqt8gj[Q[53]](function () {
    console[Q[42]](Q[54]);
}), window['_vUVJPH'] = function () {
    console[Q[42]](Q[55]);
    var _b69 = wx[Q[56]]({
        'name': Q[57],
        'success': function (vkt3rw) {
            console[Q[42]](Q[58]), console[Q[42]](vkt3rw), vkt3rw && vkt3rw[Q[59]] == Q[60] ? (window['_vJV'] = !![], window['_vJVPH'](), window['_vJPHV']()) : setTimeout(function () {
                window['_vUVJPH']();
            }, 0x1f4);
        },
        'fail': function (n10icu) {
            console[Q[42]](Q[61]), console[Q[42]](n10icu), setTimeout(function () {
                window['_vUVJPH']();
            }, 0x1f4);
        }
    });
    _b69 && _b69[Q[62]](z75o => {});
}, window['_vUPHJV'] = function () {
    console[Q[42]](Q[63]);
    var p_b6 = wx[Q[56]]({
        'name': Q[64],
        'success': function (ea7f4) {
            console[Q[42]](Q[65]), console[Q[42]](ea7f4), ea7f4 && ea7f4[Q[59]] == Q[60] ? (window['_vPVJ'] = !![], window['_vJVPH'](), window['_vJPHV']()) : setTimeout(function () {
                window['_vUPHJV']();
            }, 0x1f4);
        },
        'fail': function (w3mlh) {
            console[Q[42]](Q[66]), console[Q[42]](w3mlh), setTimeout(function () {
                window['_vUPHJV']();
            }, 0x1f4);
        }
    });
    p_b6 && p_b6[Q[62]](ym1 => {});
}, window[Q[67]] = function () {
    window['_vUVJHP'](window['SDKVersion'], Q[68]) >= 0x0 ? (console[Q[42]](Q[69] + window['SDKVersion'] + Q[70]), window[Q[71]](), window['_vUVJPH'](), window['_vUPHJV']()) : (window[Q[72]](Q[73], window['SDKVersion']), wx[Q[49]]({
        'title': Q[74],
        'content': Q[75]
    }));
}, window[Q[25]] = '', wx[Q[76]]({
    'success'(wtxqr) {
        window[Q[25]] = Q[77] + wtxqr[Q[78]] + Q[79] + wtxqr[Q[80]] + Q[81] + wtxqr[Q[82]] + Q[83] + wtxqr[Q[84]] + Q[85] + wtxqr[Q[86]] + Q[87] + wtxqr['SDKVersion'] + Q[88] + wtxqr[Q[89]], console[Q[42]](window[Q[25]]), console[Q[42]](Q[90] + wtxqr[Q[91]] + Q[92] + wtxqr[Q[93]] + Q[94] + wtxqr[Q[95]] + Q[96] + wtxqr[Q[97]] + Q[98] + wtxqr[Q[99]] + Q[100] + wtxqr[Q[101]] + Q[102] + (wtxqr[Q[103]] ? wtxqr[Q[103]][Q[104]] + ',' + wtxqr[Q[103]][Q[105]] + ',' + wtxqr[Q[103]][Q[106]] + ',' + wtxqr[Q[103]][Q[107]] : ''));
        var wmhv3 = wtxqr[Q[84]] ? wtxqr[Q[84]][Q[108]]() : '',
            nd290 = wtxqr[Q[80]] ? wtxqr[Q[80]][Q[108]]()[Q[8]]('\x20', '') : '';
        window[Q[16]][Q[109]] = wmhv3[Q[110]](Q[111]) != -0x1, window[Q[16]][Q[112]] = wmhv3[Q[110]](Q[113]) != -0x1, window[Q[16]][Q[114]] = wmhv3[Q[110]](Q[111]) != -0x1 || wmhv3[Q[110]](Q[113]) != -0x1, window[Q[16]][Q[115]] = wmhv3[Q[110]](Q[116]) != -0x1 || wmhv3[Q[110]](Q[117]) != -0x1, window[Q[16]][Q[118]] = wtxqr[Q[86]] ? wtxqr[Q[86]][Q[108]]() : '', window[Q[16]]['_vUHVJP'] = ![], window[Q[16]]['_vUHPVJ'] = 0x2;
        if (wmhv3[Q[110]](Q[113]) != -0x1) {
            if (wtxqr[Q[89]] >= 0x18) window[Q[16]]['_vUHPVJ'] = 0x3;else window[Q[16]]['_vUHPVJ'] = 0x2;
        } else {
            if (wmhv3[Q[110]](Q[111]) != -0x1) {
                if (wtxqr[Q[89]] && wtxqr[Q[89]] >= 0x14) window[Q[16]]['_vUHPVJ'] = 0x3;else {
                    if (nd290[Q[110]](Q[119]) != -0x1 || nd290[Q[110]](Q[120]) != -0x1 || nd290[Q[110]](Q[121]) != -0x1 || nd290[Q[110]](Q[122]) != -0x1 || nd290[Q[110]](Q[123]) != -0x1) window[Q[16]]['_vUHPVJ'] = 0x2;else window[Q[16]]['_vUHPVJ'] = 0x3;
                }
            } else window[Q[16]]['_vUHPVJ'] = 0x2;
        }
        console[Q[42]](Q[124] + window[Q[16]]['_vUHVJP'] + Q[125] + window[Q[16]]['_vUHPVJ']);
    }
}), wx[Q[126]]({
    'success': function (jxt8rq) {
        console[Q[42]](Q[127] + jxt8rq[Q[128]] + Q[129] + jxt8rq[Q[130]]);
    }
}), wx[Q[131]]({
    'success': function (gjxs8) {
        console[Q[42]](Q[132] + gjxs8[Q[133]]);
    }
}), wx[Q[134]]({ 'keepScreenOn': !![] }), wx[Q[135]](function (qtjxkr) {
    console[Q[42]](Q[132] + qtjxkr[Q[133]] + Q[136] + qtjxkr[Q[137]]);
}), wx[Q[138]](function (zp96b_) {
    window['_vVH'] = zp96b_, window['_vJHV'] && window['_vVH'] && (console[Q[1]](Q[139] + window['_vVH'][Q[140]]), window['_vJHV'](window['_vVH']), window['_vVH'] = null);
}), window[Q[141]] = 0x0, window['_vUPVJH'] = 0x0, window[Q[142]] = null, wx[Q[143]](function () {
    window['_vUPVJH']++;
    var $uni1 = Date[Q[144]]();
    (window[Q[141]] == 0x0 || $uni1 - window[Q[141]] > 0x1d4c0) && (console[Q[145]](Q[146]), wx[Q[147]]());
    if (window['_vUPVJH'] >= 0x2) {
        window['_vUPVJH'] = 0x0, console[Q[28]](Q[148]), wx[Q[149]]('0', 0x1);
        if (window[Q[16]] && window[Q[16]][Q[109]]) window[Q[72]](Q[150], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});