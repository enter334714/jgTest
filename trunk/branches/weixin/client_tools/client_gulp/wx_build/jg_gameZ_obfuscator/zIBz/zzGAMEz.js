var B = wx.$z;
console[B[92]](B[480]), window[B[481]], wx[B[482]](function (aedt) {
    if (aedt) {
        if (aedt[B[483]]) {
            var eoazd = window[B[2]][B[3]][B[484]](new RegExp(/\./, 'g'), '_'),
                oaszet = aedt[B[483]],
                odytze = oaszet[B[485]](/(zzzzz\/zzGAMEz.js:)[0-9]{1,60}(:)/g);
            if (odytze) for (var qi3m$ = 0x0; qi3m$ < odytze[B[221]]; qi3m$++) {
                if (odytze[qi3m$] && odytze[qi3m$][B[221]] > 0x0) {
                    var xteza = parseInt(odytze[qi3m$][B[484]](B[486], '')[B[484]](':', ''));
                    oaszet = oaszet[B[484]](odytze[qi3m$], odytze[qi3m$][B[484]](':' + xteza + ':', ':' + (xteza - 0x2) + ':'));
                }
            }
            oaszet = oaszet[B[484]](new RegExp(B[487], 'g'), B[488] + eoazd + B[489]), oaszet = oaszet[B[484]](new RegExp(B[490], 'g'), B[488] + eoazd + B[489]), aedt[B[483]] = oaszet;
        }
        var gph914 = {
            'id': window[B[11]][B[109]],
            'role': window[B[11]][B[110]],
            'level': window[B[11]][B[111]],
            'user': window[B[11]][B[112]],
            'version': window[B[11]][B[48]],
            'cdn': window[B[11]][B[113]],
            'pkgName': window[B[11]][B[29]],
            'gamever': window[B[2]][B[3]],
            'serverid': window[B[11]][B[35]] ? window[B[11]][B[35]][B[114]] : 0x0,
            'systemInfo': window[B[115]],
            'error': B[491],
            'stack': aedt ? aedt[B[483]] : ''
        },
            e1asx9 = JSON[B[117]](gph914);
        console[B[118]](B[492] + e1asx9), (!window[B[481]] || window[B[481]] != gph914[B[118]]) && (window[B[481]] = gph914[B[118]], window[B[36]](gph914));
    }
});
import 'zzbfzz.js';
import 'zz11zz.js';
window[B[493]] = require(B[494]);
import 'zINDzz.js';
import 'zzIB1zz.js';
import 'zzMtadzz.js';
import 'zzINIzz.js';
console[B[92]](B[495]), console[B[92]](B[496]), z00JYD({ 'title': B[497] });
var zxz9sea = { 'z0R0DJY': !![] };
new window[B[87]](zxz9sea), window[B[87]][B[88]][B[498]]();
if (window[B[499]]) clearInterval(window[B[499]]);
window[B[499]] = null, window[B[154]] = function (aexstz, xp91h) {
    if (!aexstz || !xp91h) return 0x0;
    aexstz = aexstz[B[284]]('.'), xp91h = xp91h[B[284]]('.');
    const ur28 = Math[B[500]](aexstz[B[221]], xp91h[B[221]]);
    while (aexstz[B[221]] < ur28) {
        aexstz[B[333]]('0');
    }
    while (xp91h[B[221]] < ur28) {
        xp91h[B[333]]('0');
    }
    for (var tea = 0x0; tea < ur28; tea++) {
        const q3 = parseInt(aexstz[tea]),
              im$3q = parseInt(xp91h[tea]);
        if (q3 > im$3q) return 0x1;else {
            if (q3 < im$3q) return -0x1;
        }
    }
    return 0x0;
}, window[B[334]] = wx[B[501]]()[B[334]], console[B[65]](B[502] + window[B[334]]);
var zoyztde = wx[B[503]]();
zoyztde[B[504]](function (ztaesx) {
    console[B[65]](B[505] + ztaesx[B[506]]);
}), zoyztde[B[507]](function () {
    wx[B[67]]({
        'title': B[508],
        'content': B[509],
        'showCancel': ![],
        'success': function (b8ko) {
            zoyztde[B[510]]();
        }
    });
}), zoyztde[B[511]](function () {
    console[B[65]](B[512]);
}), window[B[513]] = function () {
    console[B[65]](B[514]);
    var tkdz = wx[B[515]]({
        'name': B[516],
        'success': function ($imq) {
            console[B[65]](B[517]), console[B[65]]($imq), $imq && $imq[B[184]] == B[518] ? (window[B[55]] = !![], window[B[261]](), window[B[262]]()) : setTimeout(function () {
                window[B[513]]();
            }, 0x1f4);
        },
        'fail': function (_u2r85) {
            console[B[65]](B[519]), console[B[65]](_u2r85), setTimeout(function () {
                window[B[513]]();
            }, 0x1f4);
        }
    });
    tkdz && tkdz[B[520]](nv64fl => {});
}, window[B[521]] = function () {
    console[B[65]](B[522]);
    var ytozde = wx[B[515]]({
        'name': B[523],
        'success': function (i$jmq) {
            console[B[65]](B[524]), console[B[65]](i$jmq), i$jmq && i$jmq[B[184]] == B[518] ? (window[B[56]] = !![], window[B[261]](), window[B[262]]()) : setTimeout(function () {
                window[B[521]]();
            }, 0x1f4);
        },
        'fail': function (finl7v) {
            console[B[65]](B[525]), console[B[65]](finl7v), setTimeout(function () {
                window[B[521]]();
            }, 0x1f4);
        }
    });
    ytozde && ytozde[B[520]](g41p9h => {});
}, window[B[526]] = function () {
    window[B[154]](window[B[334]], B[527]) >= 0x0 ? (console[B[65]](B[528] + window[B[334]] + B[529]), window[B[77]](), window[B[513]](), window[B[521]]()) : (window[B[126]](B[530], window[B[334]]), wx[B[67]]({
        'title': B[68],
        'content': B[531]
    }));
}, window[B[115]] = '', wx[B[532]]({
    'success'(ur2_58) {
        window[B[115]] = B[533] + ur2_58[B[534]] + B[535] + ur2_58[B[536]] + B[537] + ur2_58[B[15]] + B[538] + ur2_58[B[539]] + B[540] + ur2_58[B[206]] + B[541] + ur2_58[B[334]] + B[542] + ur2_58[B[543]], console[B[65]](window[B[115]]), console[B[65]](B[544] + ur2_58[B[545]] + B[546] + ur2_58[B[547]] + B[548] + ur2_58[B[549]] + B[550] + ur2_58[B[551]] + B[552] + ur2_58[B[553]] + B[554] + ur2_58[B[555]] + B[556] + (ur2_58[B[557]] ? ur2_58[B[557]][B[452]] + ',' + ur2_58[B[557]][B[455]] + ',' + ur2_58[B[557]][B[457]] + ',' + ur2_58[B[557]][B[459]] : ''));
        var xe9as = ur2_58[B[539]] ? ur2_58[B[539]][B[558]]() : '',
            b_25 = ur2_58[B[536]] ? ur2_58[B[536]][B[558]]()[B[484]]('\x20', '') : '';
        window[B[11]][B[50]] = xe9as[B[185]](B[559]) != -0x1, window[B[11]][B[51]] = xe9as[B[185]](B[560]) != -0x1, window[B[11]][B[451]] = xe9as[B[185]](B[559]) != -0x1 || xe9as[B[185]](B[560]) != -0x1, window[B[11]][B[52]] = xe9as[B[185]](B[561]) != -0x1 || xe9as[B[185]](B[17]) != -0x1, window[B[11]][B[129]] = ur2_58[B[206]] ? ur2_58[B[206]][B[558]]() : '', window[B[11]][B[446]] = ![], window[B[11]][B[447]] = 0x2;
        if (xe9as[B[185]](B[560]) != -0x1) {
            if (ur2_58[B[543]] >= 0x18) window[B[11]][B[447]] = 0x3;else window[B[11]][B[447]] = 0x2;
        } else {
            if (xe9as[B[185]](B[559]) != -0x1) {
                if (ur2_58[B[543]] && ur2_58[B[543]] >= 0x14) window[B[11]][B[447]] = 0x3;else {
                    if (b_25[B[185]](B[562]) != -0x1 || b_25[B[185]](B[563]) != -0x1 || b_25[B[185]](B[564]) != -0x1 || b_25[B[185]](B[565]) != -0x1 || b_25[B[185]](B[566]) != -0x1) window[B[11]][B[447]] = 0x2;else window[B[11]][B[447]] = 0x3;
                }
            } else window[B[11]][B[447]] = 0x2;
        }
        console[B[65]](B[567] + window[B[11]][B[446]] + B[568] + window[B[11]][B[447]]);
    }
}), wx[B[355]]({
    'success': function (ktz) {
        console[B[65]](B[569] + ktz[B[357]] + B[570] + ktz[B[359]]);
    }
}), wx[B[361]]({
    'success': function (vfgl) {
        console[B[65]](B[571] + vfgl[B[572]]);
    }
}), wx[B[573]]({ 'keepScreenOn': !![] }), wx[B[362]](function (etodaz) {
    console[B[65]](B[571] + etodaz[B[572]] + B[574] + etodaz[B[575]]);
}), wx[B[323]](function (dazet) {
    window[B[325]] = dazet, window[B[324]] && window[B[325]] && (console[B[92]](B[326] + window[B[325]][B[327]]), window[B[324]](window[B[325]]), window[B[325]] = null);
}), window[B[576]] = 0x0, window[B[577]] = 0x0, window[B[578]] = null, wx[B[579]](function () {
    window[B[577]]++;
    var gfl4v = Date[B[42]]();
    (window[B[576]] == 0x0 || gfl4v - window[B[576]] > 0x1d4c0) && (console[B[127]](B[580]), wx[B[581]]());
    if (window[B[577]] >= 0x2) {
        window[B[577]] = 0x0, console[B[118]](B[582]), wx[B[583]]('0', 0x1);
        if (window[B[11]] && window[B[11]][B[50]]) window[B[126]](B[584], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});