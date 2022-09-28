var u = wx.$x;
console[u[83]](u[405]), window[u[406]], wx[u[407]](function (peb0ha) {
    if (peb0ha) {
        if (peb0ha[u[408]]) {
            var pah_q = window[u[2]][u[3]][u[409]](new RegExp(/\./, 'g'), '_'),
                lf89c = peb0ha[u[408]],
                cunvdj = lf89c[u[410]](/(xxxxxxxxx\/xxGAMEx.js:)[0-9]{1,60}(:)/g);
            if (cunvdj) for (var xo4ms = 0x0; xo4ms < cunvdj[u[194]]; xo4ms++) {
                if (cunvdj[xo4ms] && cunvdj[xo4ms][u[194]] > 0x0) {
                    var $l87y = parseInt(cunvdj[xo4ms][u[409]](u[411], '')[u[409]](':', ''));
                    lf89c = lf89c[u[409]](cunvdj[xo4ms], cunvdj[xo4ms][u[409]](':' + $l87y + ':', ':' + ($l87y - 0x2) + ':'));
                }
            }
            lf89c = lf89c[u[409]](new RegExp(u[412], 'g'), u[413] + pah_q + u[414]), lf89c = lf89c[u[409]](new RegExp(u[415], 'g'), u[413] + pah_q + u[414]), peb0ha[u[408]] = lf89c;
        }
        var zx5mo = {
            'id': window[u[10]][u[94]],
            'role': window[u[10]][u[95]],
            'level': window[u[10]][u[96]],
            'user': window[u[10]][u[97]],
            'version': window[u[10]][u[45]],
            'cdn': window[u[10]][u[98]],
            'pkgName': window[u[10]][u[28]],
            'gamever': window[u[2]][u[3]],
            'serverid': window[u[10]][u[34]] ? window[u[10]][u[34]][u[99]] : 0x0,
            'systemInfo': window[u[100]],
            'error': u[416],
            'stack': peb0ha ? peb0ha[u[408]] : ''
        },
            t6w213 = JSON[u[102]](zx5mo);
        console[u[103]](u[417] + t6w213), (!window[u[406]] || window[u[406]] != zx5mo[u[103]]) && (window[u[406]] = zx5mo[u[103]], window['x1$6'](zx5mo));
    }
});
import 'xxfxx.js';
import 'xx11xx.js';
window[u[418]] = require(u[419]);
import 'xINDxx.js';
import 'xxIB1xx.js';
import 'xxMtadxx.js';
import 'xxINIxxx.js';
console[u[83]](u[420]), console[u[83]](u[421]), x1$6J9({ 'title': u[422] });
var xdu4g = { 'x1T$96J': !![] };
new window[u[78]](xdu4g), window[u[78]][u[79]]['x1TJ69$']();
if (window['x1T$69J']) clearInterval(window['x1T$69J']);
window['x1T$69J'] = null, window['x1TJ9$6'] = function (hraq_p, c8l97f) {
    if (!hraq_p || !c8l97f) return 0x0;
    hraq_p = hraq_p[u[242]]('.'), c8l97f = c8l97f[u[242]]('.');
    const t51326 = Math[u[423]](hraq_p[u[194]], c8l97f[u[194]]);
    while (hraq_p[u[194]] < t51326) {
        hraq_p[u[281]]('0');
    }
    while (c8l97f[u[194]] < t51326) {
        c8l97f[u[281]]('0');
    }
    for (var kbweh = 0x0; kbweh < t51326; kbweh++) {
        const vdunjg = parseInt(hraq_p[kbweh]),
              qap_rh = parseInt(c8l97f[kbweh]);
        if (vdunjg > qap_rh) return 0x1;else {
            if (vdunjg < qap_rh) return -0x1;
        }
    }
    return 0x0;
}, window[u[282]] = wx[u[424]]()[u[282]], console[u[62]](u[425] + window[u[282]]);
var xdgun4v = wx[u[426]]();
xdgun4v[u[427]](function (ucn9j) {
    console[u[62]](u[428] + ucn9j[u[429]]);
}), xdgun4v[u[430]](function () {
    wx[u[64]]({
        'title': u[431],
        'content': u[432],
        'showCancel': ![],
        'success': function (beph0) {
            xdgun4v[u[433]]();
        }
    });
}), xdgun4v[u[434]](function () {
    console[u[62]](u[435]);
}), window['x1TJ96$'] = function () {
    console[u[62]](u[436]);
    var ud4nvg = wx[u[437]]({
        'name': u[438],
        'success': function (jvudn) {
            console[u[62]](u[439]), console[u[62]](jvudn), jvudn && jvudn[u[158]] == u[440] ? (window[u[52]] = !![], window['x19J6$'](), window['x196$J']()) : setTimeout(function () {
                window['x1TJ96$']();
            }, 0x1f4);
        },
        'fail': function (h_qpar) {
            console[u[62]](u[441]), console[u[62]](h_qpar), setTimeout(function () {
                window['x1TJ96$']();
            }, 0x1f4);
        }
    });
    ud4nvg && ud4nvg[u[442]](uvdcjn => {});
}, window['x1T6$9J'] = function () {
    console[u[62]](u[443]);
    var kbe0hp = wx[u[437]]({
        'name': u[444],
        'success': function (ljn9f) {
            console[u[62]](u[445]), console[u[62]](ljn9f), ljn9f && ljn9f[u[158]] == u[440] ? (window[u[53]] = !![], window['x19J6$'](), window['x196$J']()) : setTimeout(function () {
                window['x1T6$9J']();
            }, 0x1f4);
        },
        'fail': function (z3t652) {
            console[u[62]](u[446]), console[u[62]](z3t652), setTimeout(function () {
                window['x1T6$9J']();
            }, 0x1f4);
        }
    });
    kbe0hp && kbe0hp[u[442]](phqea => {});
}, window[u[447]] = function () {
    window['x1TJ9$6'](window[u[282]], u[448]) >= 0x0 ? (console[u[62]](u[449] + window[u[282]] + u[450]), window['x16$'](), window['x1TJ96$'](), window['x1T6$9J']()) : (window['x169$'](u[451], window[u[282]]), wx[u[64]]({
        'title': u[65],
        'content': u[452]
    }));
}, window[u[100]] = '', wx[u[453]]({
    'success'(c7f) {
        window[u[100]] = u[454] + c7f[u[455]] + u[456] + c7f[u[457]] + u[458] + c7f[u[14]] + u[459] + c7f[u[460]] + u[461] + c7f[u[180]] + u[462] + c7f[u[282]] + u[463] + c7f[u[464]], console[u[62]](window[u[100]]), console[u[62]](u[465] + c7f[u[466]] + u[467] + c7f[u[468]] + u[469] + c7f[u[470]] + u[471] + c7f[u[472]] + u[473] + c7f[u[474]] + u[475] + c7f[u[476]] + u[477] + (c7f[u[478]] ? c7f[u[478]][u[383]] + ',' + c7f[u[478]][u[386]] + ',' + c7f[u[478]][u[388]] + ',' + c7f[u[478]][u[390]] : ''));
        var b0ewhk = c7f[u[460]] ? c7f[u[460]][u[479]]() : '',
            vjfnu = c7f[u[457]] ? c7f[u[457]][u[479]]()[u[409]]('\x20', '') : '';
        window[u[10]][u[47]] = b0ewhk[u[159]](u[480]) != -0x1, window[u[10]][u[48]] = b0ewhk[u[159]](u[481]) != -0x1, window[u[10]][u[382]] = b0ewhk[u[159]](u[480]) != -0x1 || b0ewhk[u[159]](u[481]) != -0x1, window[u[10]][u[49]] = b0ewhk[u[159]](u[482]) != -0x1 || b0ewhk[u[159]](u[16]) != -0x1, window[u[10]][u[112]] = c7f[u[180]] ? c7f[u[180]][u[479]]() : '', window[u[10]]['x1T$J96'] = ![], window[u[10]]['x1T$6J9'] = 0x2;
        if (b0ewhk[u[159]](u[481]) != -0x1) {
            if (c7f[u[464]] >= 0x18) window[u[10]]['x1T$6J9'] = 0x3;else window[u[10]]['x1T$6J9'] = 0x2;
        } else {
            if (b0ewhk[u[159]](u[480]) != -0x1) {
                if (c7f[u[464]] && c7f[u[464]] >= 0x14) window[u[10]]['x1T$6J9'] = 0x3;else {
                    if (vjfnu[u[159]](u[483]) != -0x1 || vjfnu[u[159]](u[484]) != -0x1 || vjfnu[u[159]](u[485]) != -0x1 || vjfnu[u[159]](u[486]) != -0x1 || vjfnu[u[159]](u[487]) != -0x1) window[u[10]]['x1T$6J9'] = 0x2;else window[u[10]]['x1T$6J9'] = 0x3;
                }
            } else window[u[10]]['x1T$6J9'] = 0x2;
        }
        console[u[62]](u[488] + window[u[10]]['x1T$J96'] + u[489] + window[u[10]]['x1T$6J9']);
    }
}), wx[u[301]]({
    'success': function (q0ae) {
        console[u[62]](u[490] + q0ae[u[303]] + u[491] + q0ae[u[305]]);
    }
}), wx[u[307]]({
    'success': function (ujgdv) {
        console[u[62]](u[492] + ujgdv[u[493]]);
    }
}), wx[u[494]]({ 'keepScreenOn': !![] }), wx[u[308]](function (idvu4) {
    console[u[62]](u[492] + idvu4[u[493]] + u[495] + idvu4[u[496]]);
}), wx[u[275]](function (sigmx4) {
    window['x1J$'] = sigmx4, window['x19$J'] && window['x1J$'] && (console[u[83]](u[276] + window['x1J$'][u[277]]), window['x19$J'](window['x1J$']), window['x1J$'] = null);
}), window[u[497]] = 0x0, window['x1T6J9$'] = 0x0, window[u[498]] = null, wx[u[499]](function () {
    window['x1T6J9$']++;
    var nfv = Date[u[40]]();
    (window[u[497]] == 0x0 || nfv - window[u[497]] > 0x1d4c0) && (console[u[110]](u[500]), wx[u[501]]());
    if (window['x1T6J9$'] >= 0x2) {
        window['x1T6J9$'] = 0x0, console[u[103]](u[502]), wx[u[503]]('0', 0x1);
        if (window[u[10]] && window[u[10]][u[47]]) window['x169$'](u[504], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});