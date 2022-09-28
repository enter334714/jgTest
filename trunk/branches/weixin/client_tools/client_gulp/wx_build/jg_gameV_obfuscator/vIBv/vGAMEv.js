var Q = wx.$v;
console[Q[1]](Q[2]), window[Q[3]], wx[Q[4]](function (qgx8) {
    if (qgx8) {
        if (qgx8[Q[5]]) {
            var kwv3rl = window[Q[6]][Q[7]][Q[8]](new RegExp(/\./, 'g'), '_'),
                $mc1 = qgx8[Q[5]],
                p29d6 = $mc1[Q[9]](/(vvvvvvv\/vGAMEv.js:)[0-9]{1,60}(:)/g);
            if (p29d6) for (var oz75_f = 0x0; oz75_f < p29d6[Q[10]]; oz75_f++) {
                if (p29d6[oz75_f] && p29d6[oz75_f][Q[10]] > 0x0) {
                    var z_f5o = parseInt(p29d6[oz75_f][Q[8]](Q[11], '')[Q[8]](':', ''));
                    $mc1 = $mc1[Q[8]](p29d6[oz75_f], p29d6[oz75_f][Q[8]](':' + z_f5o + ':', ':' + (z_f5o - 0x2) + ':'));
                }
            }
            $mc1 = $mc1[Q[8]](new RegExp(Q[12], 'g'), Q[13] + kwv3rl + Q[14]), $mc1 = $mc1[Q[8]](new RegExp(Q[15], 'g'), Q[13] + kwv3rl + Q[14]), qgx8[Q[5]] = $mc1;
        }
        var rtxqk = {
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
            'stack': qgx8 ? qgx8[Q[5]] : ''
        },
            yc1i$ = JSON[Q[27]](rtxqk);
        console[Q[28]](Q[29] + yc1i$), (!window[Q[3]] || window[Q[3]] != rtxqk[Q[28]]) && (window[Q[3]] = rtxqk[Q[28]], window[Q[30]](rtxqk));
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
var vzb9dp6 = { '_vUHJPV': !![] };
new window[Q[36]](vzb9dp6), window[Q[36]][Q[37]]['_vUVPJH']();
if (window['_vUHPJV']) clearInterval(window['_vUHPJV']);
window['_vUHPJV'] = null, window['_vUVJHP'] = function (pzbd69, xr8j) {
    if (!pzbd69 || !xr8j) return 0x0;
    pzbd69 = pzbd69[Q[38]]('.'), xr8j = xr8j[Q[38]]('.');
    const rxwktv = Math[Q[39]](pzbd69[Q[10]], xr8j[Q[10]]);
    while (pzbd69[Q[10]] < rxwktv) {
        pzbd69[Q[40]]('0');
    }
    while (xr8j[Q[10]] < rxwktv) {
        xr8j[Q[40]]('0');
    }
    for (var f75e_o = 0x0; f75e_o < rxwktv; f75e_o++) {
        const qxktw = parseInt(pzbd69[f75e_o]),
              o5ef_ = parseInt(xr8j[f75e_o]);
        if (qxktw > o5ef_) return 0x1;else {
            if (qxktw < o5ef_) return -0x1;
        }
    }
    return 0x0;
}, window['SDKVersion'] = wx[Q[41]]()['SDKVersion'], console[Q[42]](Q[43] + window['SDKVersion']);
var vrwqxkt = wx[Q[44]]();
vrwqxkt[Q[45]](function (oe7a) {
    console[Q[42]](Q[46] + oe7a[Q[47]]);
}), vrwqxkt[Q[48]](function () {
    wx[Q[49]]({
        'title': Q[50],
        'content': Q[51],
        'showCancel': ![],
        'success': function (xqtgj8) {
            vrwqxkt[Q[52]]();
        }
    });
}), vrwqxkt[Q[53]](function () {
    console[Q[42]](Q[54]);
}), window['_vUVJPH'] = function () {
    console[Q[42]](Q[55]);
    var wvrxk = wx[Q[56]]({
        'name': Q[57],
        'success': function ($u1nc) {
            console[Q[42]](Q[58]), console[Q[42]]($u1nc), $u1nc && $u1nc[Q[59]] == Q[60] ? (window['_vJV'] = !![], window['_vJVPH'](), window['_vJPHV']()) : setTimeout(function () {
                window['_vUVJPH']();
            }, 0x1f4);
        },
        'fail': function (n20pd9) {
            console[Q[42]](Q[61]), console[Q[42]](n20pd9), setTimeout(function () {
                window['_vUVJPH']();
            }, 0x1f4);
        }
    });
    wvrxk && wvrxk[Q[62]](y1i$uc => {});
}, window['_vUPHJV'] = function () {
    console[Q[42]](Q[63]);
    var faoe = wx[Q[56]]({
        'name': Q[64],
        'success': function (hymv3l) {
            console[Q[42]](Q[65]), console[Q[42]](hymv3l), hymv3l && hymv3l[Q[59]] == Q[60] ? (window['_vPVJ'] = !![], window['_vJVPH'](), window['_vJPHV']()) : setTimeout(function () {
                window['_vUPHJV']();
            }, 0x1f4);
        },
        'fail': function (pz9d6) {
            console[Q[42]](Q[66]), console[Q[42]](pz9d6), setTimeout(function () {
                window['_vUPHJV']();
            }, 0x1f4);
        }
    });
    faoe && faoe[Q[62]](pbz6_9 => {});
}, window[Q[67]] = function () {
    window['_vUVJHP'](window['SDKVersion'], Q[68]) >= 0x0 ? (console[Q[42]](Q[69] + window['SDKVersion'] + Q[70]), window[Q[71]](), window['_vUVJPH'](), window['_vUPHJV']()) : (window[Q[72]](Q[73], window['SDKVersion']), wx[Q[49]]({
        'title': Q[74],
        'content': Q[75]
    }));
}, window[Q[25]] = '', wx[Q[76]]({
    'success'(m3ylhv) {
        window[Q[25]] = Q[77] + m3ylhv[Q[78]] + Q[79] + m3ylhv[Q[80]] + Q[81] + m3ylhv[Q[82]] + Q[83] + m3ylhv[Q[84]] + Q[85] + m3ylhv[Q[86]] + Q[87] + m3ylhv['SDKVersion'] + Q[88] + m3ylhv[Q[89]], console[Q[42]](window[Q[25]]), console[Q[42]](Q[90] + m3ylhv[Q[91]] + Q[92] + m3ylhv[Q[93]] + Q[94] + m3ylhv[Q[95]] + Q[96] + m3ylhv[Q[97]] + Q[98] + m3ylhv[Q[99]] + Q[100] + m3ylhv[Q[101]] + Q[102] + (m3ylhv[Q[103]] ? m3ylhv[Q[103]][Q[104]] + ',' + m3ylhv[Q[103]][Q[105]] + ',' + m3ylhv[Q[103]][Q[106]] + ',' + m3ylhv[Q[103]][Q[107]] : ''));
        var udin20 = m3ylhv[Q[84]] ? m3ylhv[Q[84]][Q[108]]() : '',
            $ym1c = m3ylhv[Q[80]] ? m3ylhv[Q[80]][Q[108]]()[Q[8]]('\x20', '') : '';
        window[Q[16]][Q[109]] = udin20[Q[110]](Q[111]) != -0x1, window[Q[16]][Q[112]] = udin20[Q[110]](Q[113]) != -0x1, window[Q[16]][Q[114]] = udin20[Q[110]](Q[111]) != -0x1 || udin20[Q[110]](Q[113]) != -0x1, window[Q[16]][Q[115]] = udin20[Q[110]](Q[116]) != -0x1 || udin20[Q[110]](Q[117]) != -0x1, window[Q[16]][Q[118]] = m3ylhv[Q[86]] ? m3ylhv[Q[86]][Q[108]]() : '', window[Q[16]]['_vUHVJP'] = ![], window[Q[16]]['_vUHPVJ'] = 0x2;
        if (udin20[Q[110]](Q[113]) != -0x1) {
            if (m3ylhv[Q[89]] >= 0x18) window[Q[16]]['_vUHPVJ'] = 0x3;else window[Q[16]]['_vUHPVJ'] = 0x2;
        } else {
            if (udin20[Q[110]](Q[111]) != -0x1) {
                if (m3ylhv[Q[89]] && m3ylhv[Q[89]] >= 0x14) window[Q[16]]['_vUHPVJ'] = 0x3;else {
                    if ($ym1c[Q[110]](Q[119]) != -0x1 || $ym1c[Q[110]](Q[120]) != -0x1 || $ym1c[Q[110]](Q[121]) != -0x1 || $ym1c[Q[110]](Q[122]) != -0x1 || $ym1c[Q[110]](Q[123]) != -0x1) window[Q[16]]['_vUHPVJ'] = 0x2;else window[Q[16]]['_vUHPVJ'] = 0x3;
                }
            } else window[Q[16]]['_vUHPVJ'] = 0x2;
        }
        console[Q[42]](Q[124] + window[Q[16]]['_vUHVJP'] + Q[125] + window[Q[16]]['_vUHPVJ']);
    }
}), wx[Q[126]]({
    'success': function (i$n1uc) {
        console[Q[42]](Q[127] + i$n1uc[Q[128]] + Q[129] + i$n1uc[Q[130]]);
    }
}), wx[Q[131]]({
    'success': function (xtr8) {
        console[Q[42]](Q[132] + xtr8[Q[133]]);
    }
}), wx[Q[134]]({ 'keepScreenOn': !![] }), wx[Q[135]](function (o5f_7e) {
    console[Q[42]](Q[132] + o5f_7e[Q[133]] + Q[136] + o5f_7e[Q[137]]);
}), wx[Q[138]](function (p2ndu) {
    window['_vVH'] = p2ndu, window['_vJHV'] && window['_vVH'] && (console[Q[1]](Q[139] + window['_vVH'][Q[140]]), window['_vJHV'](window['_vVH']), window['_vVH'] = null);
}), window[Q[141]] = 0x0, window['_vUPVJH'] = 0x0, window[Q[142]] = null, wx[Q[143]](function () {
    window['_vUPVJH']++;
    var _9ob6z = Date[Q[144]]();
    (window[Q[141]] == 0x0 || _9ob6z - window[Q[141]] > 0x1d4c0) && (console[Q[145]](Q[146]), wx[Q[147]]());
    if (window['_vUPVJH'] >= 0x2) {
        window['_vUPVJH'] = 0x0, console[Q[28]](Q[148]), wx[Q[149]]('0', 0x1);
        if (window[Q[16]] && window[Q[16]][Q[109]]) window[Q[72]](Q[150], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});