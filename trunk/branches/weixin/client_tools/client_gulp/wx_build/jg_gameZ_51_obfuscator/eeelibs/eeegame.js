var b = wx.$e;
console[b[80]](b[31854]), window[b[31855]], wx[b[31856]](function (b6sk09) {
    if (b6sk09) {
        if (b6sk09[b[4259]]) {
            var g3ixj = window[b[591]][b[31857]][b[4497]](new RegExp(/\./, 'g'), '_'),
                b80wd = b6sk09[b[4259]],
                ijuqn = b80wd[b[12220]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (ijuqn) for (var hx = 0x0; hx < ijuqn[b[14]]; hx++) {
                if (ijuqn[hx] && ijuqn[hx][b[14]] > 0x0) {
                    var mav_74 = parseInt(ijuqn[hx][b[4497]](b[31858], '')[b[4497]](':', ''));
                    b80wd = b80wd[b[4497]](ijuqn[hx], ijuqn[hx][b[4497]](':' + mav_74 + ':', ':' + (mav_74 - 0x2) + ':'));
                }
            }
            b80wd = b80wd[b[4497]](new RegExp(b[31859], 'g'), b[31860] + g3ixj + b[26579]), b80wd = b80wd[b[4497]](new RegExp(b[31861], 'g'), b[31860] + g3ixj + b[26579]), b6sk09[b[4259]] = b80wd;
        }
        var a7_m = {
            'id': window[b[31862]][b[31863]],
            'role': window[b[31862]][b[4381]],
            'level': window[b[31862]][b[31864]],
            'user': window[b[31862]][b[26477]],
            'version': window[b[31862]][b[107]],
            'cdn': window[b[31862]][b[4257]],
            'pkgName': window[b[31862]][b[26479]],
            'gamever': window[b[591]][b[31857]],
            'serverid': window[b[31862]][b[26473]] ? window[b[31862]][b[26473]][b[11489]] : 0x0,
            'systemInfo': window[b[31865]],
            'error': b[31866],
            'stack': b6sk09 ? b6sk09[b[4259]] : ''
        },
            emao = JSON[b[4243]](a7_m);
        console[b[141]](b[31867] + emao), (!window[b[31855]] || window[b[31855]] != a7_m[b[141]]) && (window[b[31855]] = a7_m[b[141]], window[b[31868]](a7_m));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[b[31869]] = require(b[31870]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[b[80]](b[31871]), console[b[80]](b[31872]), e11UG0({ 'title': b[31873] });
var eusn9q3 = { 'e1I10UG': !![] };
new window[b[31874]](eusn9q3), window[b[31874]][b[164]][b[31875]]();
if (window[b[31876]]) clearInterval(window[b[31876]]);
window[b[31876]] = null, window[b[31877]] = function (o_7m, lt$gxh) {
    if (!o_7m || !lt$gxh) return 0x0;
    o_7m = o_7m[b[16]]('.'), lt$gxh = lt$gxh[b[16]]('.');
    const cmoa7 = Math[b[924]](o_7m[b[14]], lt$gxh[b[14]]);
    while (o_7m[b[14]] < cmoa7) {
        o_7m[b[31]]('0');
    }
    while (lt$gxh[b[14]] < cmoa7) {
        lt$gxh[b[31]]('0');
    }
    for (var xlig$t = 0x0; xlig$t < cmoa7; xlig$t++) {
        const x3g$i = parseInt(o_7m[xlig$t]),
              yzrhlt = parseInt(lt$gxh[xlig$t]);
        if (x3g$i > yzrhlt) return 0x1;else {
            if (x3g$i < yzrhlt) return -0x1;
        }
    }
    return 0x0;
}, window[b[31878]] = wx[b[31879]]()[b[31878]], console[b[515]](b[31880] + window[b[31878]]);
var ejxiq3$ = wx[b[31881]]();
ejxiq3$[b[31882]](function (u9ks) {
    console[b[515]](b[31883] + u9ks[b[31884]]);
}), ejxiq3$[b[31885]](function () {
    wx[b[31886]]({
        'title': b[31887],
        'content': b[31888],
        'showCancel': ![],
        'success': function (i3qxj$) {
            ejxiq3$[b[31889]]();
        }
    });
}), ejxiq3$[b[31890]](function () {
    console[b[515]](b[31891]);
}), window[b[31892]] = function () {
    console[b[515]](b[31893]);
    var w21d5 = wx[b[31894]]({
        'name': b[31895],
        'success': function (aeoc) {
            console[b[515]](b[31896]), console[b[515]](aeoc), aeoc && aeoc[b[26677]] == b[31897] ? (window[b[31898]] = !![], window[b[31899]](), window[b[31900]]()) : setTimeout(function () {
                window[b[31892]]();
            }, 0x1f4);
        },
        'fail': function (r4y) {
            console[b[515]](b[31901]), console[b[515]](r4y), setTimeout(function () {
                window[b[31892]]();
            }, 0x1f4);
        }
    });
    w21d5 && w21d5[b[31180]](lfzrh => {});
}, window[b[31902]] = function () {
    console[b[515]](b[31903]);
    var jx$itg = wx[b[31894]]({
        'name': b[31904],
        'success': function (qunks) {
            console[b[515]](b[31905]), console[b[515]](qunks), qunks && qunks[b[26677]] == b[31897] ? (window[b[31906]] = !![], window[b[31899]](), window[b[31900]]()) : setTimeout(function () {
                window[b[31902]]();
            }, 0x1f4);
        },
        'fail': function (ns93q) {
            console[b[515]](b[31907]), console[b[515]](ns93q), setTimeout(function () {
                window[b[31902]]();
            }, 0x1f4);
        }
    });
    jx$itg && jx$itg[b[31180]](qnjui3 => {});
}, window[b[31908]] = function () {
    window[b[31877]](window[b[31878]], b[31909]) >= 0x0 ? (console[b[515]](b[31910] + window[b[31878]] + b[31911]), window[b[31912]](), window[b[31892]](), window[b[31902]]()) : (window[b[31913]](b[31914], window[b[31878]]), wx[b[31886]]({
        'title': b[5794],
        'content': b[31915]
    }));
}, window[b[31865]] = '', wx[b[31916]]({
    'success'(gijt) {
        window[b[31865]] = b[31917] + gijt[b[31918]] + b[31919] + gijt[b[31920]] + b[31921] + gijt[b[5070]] + b[31922] + gijt[b[508]] + b[31923] + gijt[b[26440]] + b[31924] + gijt[b[31878]] + b[31925] + gijt[b[9179]], console[b[515]](window[b[31865]]), console[b[515]](b[31926] + gijt[b[31927]] + b[31928] + gijt[b[31929]] + b[31930] + gijt[b[31931]] + b[31932] + gijt[b[31933]] + b[31934] + gijt[b[31935]] + b[31936] + gijt[b[31937]] + b[31938] + (gijt[b[31939]] ? gijt[b[31939]][b[345]] + ',' + gijt[b[31939]][b[1368]] + ',' + gijt[b[31939]][b[1370]] + ',' + gijt[b[31939]][b[1369]] : ''));
        var xltgh = gijt[b[508]] ? gijt[b[508]][b[12530]]() : '',
            k0b65 = gijt[b[31920]] ? gijt[b[31920]][b[12530]]()[b[4497]]('\x20', '') : '';
        window[b[31862]][b[1149]] = xltgh[b[122]](b[31940]) != -0x1, window[b[31862]][b[11313]] = xltgh[b[122]](b[31844]) != -0x1, window[b[31862]][b[31941]] = xltgh[b[122]](b[31940]) != -0x1 || xltgh[b[122]](b[31844]) != -0x1, window[b[31862]][b[26159]] = xltgh[b[122]](b[31942]) != -0x1 || xltgh[b[122]](b[31943]) != -0x1, window[b[31862]][b[31944]] = gijt[b[26440]] ? gijt[b[26440]][b[12530]]() : '', window[b[31862]][b[31945]] = ![], window[b[31862]][b[31946]] = 0x2;
        if (xltgh[b[122]](b[31844]) != -0x1) {
            if (gijt[b[9179]] >= 0x18) window[b[31862]][b[31946]] = 0x3;else window[b[31862]][b[31946]] = 0x2;
        } else {
            if (xltgh[b[122]](b[31940]) != -0x1) {
                if (gijt[b[9179]] && gijt[b[9179]] >= 0x14) window[b[31862]][b[31946]] = 0x3;else {
                    if (k0b65[b[122]](b[31947]) != -0x1 || k0b65[b[122]](b[31948]) != -0x1 || k0b65[b[122]](b[31949]) != -0x1 || k0b65[b[122]](b[31950]) != -0x1 || k0b65[b[122]](b[31951]) != -0x1) window[b[31862]][b[31946]] = 0x2;else window[b[31862]][b[31946]] = 0x3;
                }
            } else window[b[31862]][b[31946]] = 0x2;
        }
        console[b[515]](b[31952] + window[b[31862]][b[31945]] + b[31953] + window[b[31862]][b[31946]]);
    }
}), wx[b[31954]]({
    'success': function (kunsq9) {
        console[b[515]](b[31955] + kunsq9[b[4357]] + b[31956] + kunsq9[b[31957]]);
    }
}), wx[b[11870]]({
    'success': function ($3ijq) {
        console[b[515]](b[31958] + $3ijq[b[13441]]);
    }
}), wx[b[31959]]({ 'keepScreenOn': !![] }), wx[b[11872]](function (k6bu9s) {
    console[b[515]](b[31958] + k6bu9s[b[13441]] + b[31960] + k6bu9s[b[31961]]);
}), wx[b[10804]](function (v4_z) {
    window[b[31962]] = v4_z, window[b[31963]] && window[b[31962]] && (console[b[80]](b[31964] + window[b[31962]][b[847]]), window[b[31963]](window[b[31962]]), window[b[31962]] = null);
}), window[b[31965]] = 0x0, window[b[31966]] = 0x0, window[b[31967]] = null, wx[b[31968]](function () {
    window[b[31966]]++;
    var vf47y = Date[b[85]]();
    (window[b[31965]] == 0x0 || vf47y - window[b[31965]] > 0x1d4c0) && (console[b[100]](b[31969]), wx[b[12057]]());
    if (window[b[31966]] >= 0x2) {
        window[b[31966]] = 0x0, console[b[141]](b[31970]), wx[b[31971]]('0', 0x1);
        if (window[b[31862]] && window[b[31862]][b[1149]]) window[b[31913]](b[31972], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});