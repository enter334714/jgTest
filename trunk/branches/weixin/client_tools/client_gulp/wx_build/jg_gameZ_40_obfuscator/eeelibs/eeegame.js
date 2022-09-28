var b = wx.$e;
console[b[80]](b[31874]), window[b[31875]], wx[b[31876]](function (glxi$t) {
    if (glxi$t) {
        if (glxi$t[b[4259]]) {
            var hltry = window[b[591]][b[31877]][b[4497]](new RegExp(/\./, 'g'), '_'),
                ni3q$j = glxi$t[b[4259]],
                b9sk60 = ni3q$j[b[12220]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (b9sk60) for (var rhfylz = 0x0; rhfylz < b9sk60[b[14]]; rhfylz++) {
                if (b9sk60[rhfylz] && b9sk60[rhfylz][b[14]] > 0x0) {
                    var hgxtl$ = parseInt(b9sk60[rhfylz][b[4497]](b[31878], '')[b[4497]](':', ''));
                    ni3q$j = ni3q$j[b[4497]](b9sk60[rhfylz], b9sk60[rhfylz][b[4497]](':' + hgxtl$ + ':', ':' + (hgxtl$ - 0x2) + ':'));
                }
            }
            ni3q$j = ni3q$j[b[4497]](new RegExp(b[31879], 'g'), b[31880] + hltry + b[26579]), ni3q$j = ni3q$j[b[4497]](new RegExp(b[31881], 'g'), b[31880] + hltry + b[26579]), glxi$t[b[4259]] = ni3q$j;
        }
        var _fv7 = {
            'id': window[b[31882]][b[31883]],
            'role': window[b[31882]][b[4381]],
            'level': window[b[31882]][b[31884]],
            'user': window[b[31882]][b[26477]],
            'version': window[b[31882]][b[107]],
            'cdn': window[b[31882]][b[4257]],
            'pkgName': window[b[31882]][b[26479]],
            'gamever': window[b[591]][b[31877]],
            'serverid': window[b[31882]][b[26473]] ? window[b[31882]][b[26473]][b[11489]] : 0x0,
            'systemInfo': window[b[31885]],
            'error': b[31886],
            'stack': glxi$t ? glxi$t[b[4259]] : ''
        },
            ns9ku6 = JSON[b[4243]](_fv7);
        console[b[141]](b[31887] + ns9ku6), (!window[b[31875]] || window[b[31875]] != _fv7[b[141]]) && (window[b[31875]] = _fv7[b[141]], window[b[31888]](_fv7));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[b[31889]] = require(b[31890]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[b[80]](b[31891]), console[b[80]](b[31892]), e11UG0({ 'title': b[31893] });
var esu9qn3 = { 'e1I10UG': !![] };
new window[b[31894]](esu9qn3), window[b[31894]][b[164]][b[31895]]();
if (window[b[31896]]) clearInterval(window[b[31896]]);
window[b[31896]] = null, window[b[31897]] = function (jgx3$, uq3ns) {
    if (!jgx3$ || !uq3ns) return 0x0;
    jgx3$ = jgx3$[b[16]]('.'), uq3ns = uq3ns[b[16]]('.');
    const nji3q = Math[b[924]](jgx3$[b[14]], uq3ns[b[14]]);
    while (jgx3$[b[14]] < nji3q) {
        jgx3$[b[31]]('0');
    }
    while (uq3ns[b[14]] < nji3q) {
        uq3ns[b[31]]('0');
    }
    for (var k96bd0 = 0x0; k96bd0 < nji3q; k96bd0++) {
        const ca74_ = parseInt(jgx3$[k96bd0]),
              wdb580 = parseInt(uq3ns[k96bd0]);
        if (ca74_ > wdb580) return 0x1;else {
            if (ca74_ < wdb580) return -0x1;
        }
    }
    return 0x0;
}, window[b[31898]] = wx[b[31899]]()[b[31898]], console[b[515]](b[31900] + window[b[31898]]);
var emcpoea = wx[b[31901]]();
emcpoea[b[31902]](function (cpmoa) {
    console[b[515]](b[31903] + cpmoa[b[31904]]);
}), emcpoea[b[31905]](function () {
    wx[b[31906]]({
        'title': b[31907],
        'content': b[31908],
        'showCancel': ![],
        'success': function (zf4_v) {
            emcpoea[b[31909]]();
        }
    });
}), emcpoea[b[31910]](function () {
    console[b[515]](b[31911]);
}), window[b[31912]] = function () {
    console[b[515]](b[31913]);
    var yrfhvz = wx[b[31914]]({
        'name': b[31915],
        'success': function (tzgrlh) {
            console[b[515]](b[31916]), console[b[515]](tzgrlh), tzgrlh && tzgrlh[b[26677]] == b[31917] ? (window[b[31918]] = !![], window[b[31919]](), window[b[31920]]()) : setTimeout(function () {
                window[b[31912]]();
            }, 0x1f4);
        },
        'fail': function (w812d) {
            console[b[515]](b[31921]), console[b[515]](w812d), setTimeout(function () {
                window[b[31912]]();
            }, 0x1f4);
        }
    });
    yrfhvz && yrfhvz[b[31180]](db0w85 => {});
}, window[b[31922]] = function () {
    console[b[515]](b[31923]);
    var qnjui3 = wx[b[31914]]({
        'name': b[31924],
        'success': function (cm4a7) {
            console[b[515]](b[31925]), console[b[515]](cm4a7), cm4a7 && cm4a7[b[26677]] == b[31917] ? (window[b[31926]] = !![], window[b[31919]](), window[b[31920]]()) : setTimeout(function () {
                window[b[31922]]();
            }, 0x1f4);
        },
        'fail': function (n$3j) {
            console[b[515]](b[31927]), console[b[515]](n$3j), setTimeout(function () {
                window[b[31922]]();
            }, 0x1f4);
        }
    });
    qnjui3 && qnjui3[b[31180]](y4_zfv => {});
}, window[b[31928]] = function () {
    window[b[31897]](window[b[31898]], b[31929]) >= 0x0 ? (console[b[515]](b[31930] + window[b[31898]] + b[31931]), window[b[31932]](), window[b[31912]](), window[b[31922]]()) : (window[b[31933]](b[31934], window[b[31898]]), wx[b[31906]]({
        'title': b[5794],
        'content': b[31935]
    }));
}, window[b[31885]] = '', wx[b[31936]]({
    'success'(b69ksu) {
        window[b[31885]] = b[31937] + b69ksu[b[31938]] + b[31939] + b69ksu[b[31940]] + b[31941] + b69ksu[b[5070]] + b[31942] + b69ksu[b[508]] + b[31943] + b69ksu[b[26440]] + b[31944] + b69ksu[b[31898]] + b[31945] + b69ksu[b[9179]], console[b[515]](window[b[31885]]), console[b[515]](b[31946] + b69ksu[b[31947]] + b[31948] + b69ksu[b[31949]] + b[31950] + b69ksu[b[31951]] + b[31952] + b69ksu[b[31953]] + b[31954] + b69ksu[b[31955]] + b[31956] + b69ksu[b[31957]] + b[31958] + (b69ksu[b[31959]] ? b69ksu[b[31959]][b[345]] + ',' + b69ksu[b[31959]][b[1368]] + ',' + b69ksu[b[31959]][b[1370]] + ',' + b69ksu[b[31959]][b[1369]] : ''));
        var x$ji3g = b69ksu[b[508]] ? b69ksu[b[508]][b[12530]]() : '',
            o_7cma = b69ksu[b[31940]] ? b69ksu[b[31940]][b[12530]]()[b[4497]]('\x20', '') : '';
        window[b[31882]][b[1149]] = x$ji3g[b[122]](b[31960]) != -0x1, window[b[31882]][b[11313]] = x$ji3g[b[122]](b[31852]) != -0x1, window[b[31882]][b[31961]] = x$ji3g[b[122]](b[31960]) != -0x1 || x$ji3g[b[122]](b[31852]) != -0x1, window[b[31882]][b[26159]] = x$ji3g[b[122]](b[31962]) != -0x1 || x$ji3g[b[122]](b[31963]) != -0x1, window[b[31882]][b[31964]] = b69ksu[b[26440]] ? b69ksu[b[26440]][b[12530]]() : '', window[b[31882]][b[31965]] = ![], window[b[31882]][b[31966]] = 0x2;
        if (x$ji3g[b[122]](b[31852]) != -0x1) {
            if (b69ksu[b[9179]] >= 0x18) window[b[31882]][b[31966]] = 0x3;else window[b[31882]][b[31966]] = 0x2;
        } else {
            if (x$ji3g[b[122]](b[31960]) != -0x1) {
                if (b69ksu[b[9179]] && b69ksu[b[9179]] >= 0x14) window[b[31882]][b[31966]] = 0x3;else {
                    if (o_7cma[b[122]](b[31967]) != -0x1 || o_7cma[b[122]](b[31968]) != -0x1 || o_7cma[b[122]](b[31969]) != -0x1 || o_7cma[b[122]](b[31970]) != -0x1 || o_7cma[b[122]](b[31971]) != -0x1) window[b[31882]][b[31966]] = 0x2;else window[b[31882]][b[31966]] = 0x3;
                }
            } else window[b[31882]][b[31966]] = 0x2;
        }
        console[b[515]](b[31972] + window[b[31882]][b[31965]] + b[31973] + window[b[31882]][b[31966]]);
    }
}), wx[b[31974]]({
    'success': function (q9snuk) {
        console[b[515]](b[31975] + q9snuk[b[4357]] + b[31976] + q9snuk[b[31977]]);
    }
}), wx[b[11870]]({
    'success': function (db650) {
        console[b[515]](b[31978] + db650[b[13441]]);
    }
}), wx[b[31979]]({ 'keepScreenOn': !![] }), wx[b[11872]](function (bd690) {
    console[b[515]](b[31978] + bd690[b[13441]] + b[31980] + bd690[b[31981]]);
}), wx[b[10804]](function (z_fvy4) {
    window[b[31982]] = z_fvy4, window[b[31983]] && window[b[31982]] && (console[b[80]](b[31984] + window[b[31982]][b[847]]), window[b[31983]](window[b[31982]]), window[b[31982]] = null);
}), window[b[31985]] = 0x0, window[b[31986]] = 0x0, window[b[31987]] = null, wx[b[31988]](function () {
    window[b[31986]]++;
    var c_ma = Date[b[85]]();
    (window[b[31985]] == 0x0 || c_ma - window[b[31985]] > 0x1d4c0) && (console[b[100]](b[31989]), wx[b[12057]]());
    if (window[b[31986]] >= 0x2) {
        window[b[31986]] = 0x0, console[b[141]](b[31990]), wx[b[31991]]('0', 0x1);
        if (window[b[31882]] && window[b[31882]][b[1149]]) window[b[31933]](b[31992], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});