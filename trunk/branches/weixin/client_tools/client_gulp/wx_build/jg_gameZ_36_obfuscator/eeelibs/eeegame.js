var b = wx.$e;
console[b[80]](b[31874]), window[b[31875]], wx[b[31876]](function (fav47_) {
    if (fav47_) {
        if (fav47_[b[4259]]) {
            var yrvz = window[b[591]][b[31877]][b[4497]](new RegExp(/\./, 'g'), '_'),
                vy74 = fav47_[b[4259]],
                w05d8 = vy74[b[12220]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (w05d8) for (var rhyfz = 0x0; rhyfz < w05d8[b[14]]; rhyfz++) {
                if (w05d8[rhyfz] && w05d8[rhyfz][b[14]] > 0x0) {
                    var fz4ry = parseInt(w05d8[rhyfz][b[4497]](b[31878], '')[b[4497]](':', ''));
                    vy74 = vy74[b[4497]](w05d8[rhyfz], w05d8[rhyfz][b[4497]](':' + fz4ry + ':', ':' + (fz4ry - 0x2) + ':'));
                }
            }
            vy74 = vy74[b[4497]](new RegExp(b[31879], 'g'), b[31880] + yrvz + b[26579]), vy74 = vy74[b[4497]](new RegExp(b[31881], 'g'), b[31880] + yrvz + b[26579]), fav47_[b[4259]] = vy74;
        }
        var zhryl = {
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
            'stack': fav47_ ? fav47_[b[4259]] : ''
        },
            rhlgtz = JSON[b[4243]](zhryl);
        console[b[141]](b[31887] + rhlgtz), (!window[b[31875]] || window[b[31875]] != zhryl[b[141]]) && (window[b[31875]] = zhryl[b[141]], window[b[31888]](zhryl));
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
var eylzrh = { 'e1I10UG': !![] };
new window[b[31894]](eylzrh), window[b[31894]][b[164]][b[31895]]();
if (window[b[31896]]) clearInterval(window[b[31896]]);
window[b[31896]] = null, window[b[31897]] = function (i3njuq, nq$i3) {
    if (!i3njuq || !nq$i3) return 0x0;
    i3njuq = i3njuq[b[16]]('.'), nq$i3 = nq$i3[b[16]]('.');
    const _47afv = Math[b[924]](i3njuq[b[14]], nq$i3[b[14]]);
    while (i3njuq[b[14]] < _47afv) {
        i3njuq[b[31]]('0');
    }
    while (nq$i3[b[14]] < _47afv) {
        nq$i3[b[31]]('0');
    }
    for (var moeap = 0x0; moeap < _47afv; moeap++) {
        const wdb08 = parseInt(i3njuq[moeap]),
              in$q3j = parseInt(nq$i3[moeap]);
        if (wdb08 > in$q3j) return 0x1;else {
            if (wdb08 < in$q3j) return -0x1;
        }
    }
    return 0x0;
}, window[b[31898]] = wx[b[31899]]()[b[31898]], console[b[515]](b[31900] + window[b[31898]]);
var ejx3$q = wx[b[31901]]();
ejx3$q[b[31902]](function (d0658) {
    console[b[515]](b[31903] + d0658[b[31904]]);
}), ejx3$q[b[31905]](function () {
    wx[b[31906]]({
        'title': b[31907],
        'content': b[31908],
        'showCancel': ![],
        'success': function (b85d0w) {
            ejx3$q[b[31909]]();
        }
    });
}), ejx3$q[b[31910]](function () {
    console[b[515]](b[31911]);
}), window[b[31912]] = function () {
    console[b[515]](b[31913]);
    var peaoc = wx[b[31914]]({
        'name': b[31915],
        'success': function (b069d) {
            console[b[515]](b[31916]), console[b[515]](b069d), b069d && b069d[b[26677]] == b[31917] ? (window[b[31918]] = !![], window[b[31919]](), window[b[31920]]()) : setTimeout(function () {
                window[b[31912]]();
            }, 0x1f4);
        },
        'fail': function (ztlhg) {
            console[b[515]](b[31921]), console[b[515]](ztlhg), setTimeout(function () {
                window[b[31912]]();
            }, 0x1f4);
        }
    });
    peaoc && peaoc[b[31180]](d560k => {});
}, window[b[31922]] = function () {
    console[b[515]](b[31923]);
    var jnqi3u = wx[b[31914]]({
        'name': b[31924],
        'success': function (d0bw58) {
            console[b[515]](b[31925]), console[b[515]](d0bw58), d0bw58 && d0bw58[b[26677]] == b[31917] ? (window[b[31926]] = !![], window[b[31919]](), window[b[31920]]()) : setTimeout(function () {
                window[b[31922]]();
            }, 0x1f4);
        },
        'fail': function (zhgtrl) {
            console[b[515]](b[31927]), console[b[515]](zhgtrl), setTimeout(function () {
                window[b[31922]]();
            }, 0x1f4);
        }
    });
    jnqi3u && jnqi3u[b[31180]](bd508w => {});
}, window[b[31928]] = function () {
    window[b[31897]](window[b[31898]], b[31929]) >= 0x0 ? (console[b[515]](b[31930] + window[b[31898]] + b[31931]), window[b[31932]](), window[b[31912]](), window[b[31922]]()) : (window[b[31933]](b[31934], window[b[31898]]), wx[b[31906]]({
        'title': b[5794],
        'content': b[31935]
    }));
}, window[b[31885]] = '', wx[b[31936]]({
    'success'(zvy4f_) {
        window[b[31885]] = b[31937] + zvy4f_[b[31938]] + b[31939] + zvy4f_[b[31940]] + b[31941] + zvy4f_[b[5070]] + b[31942] + zvy4f_[b[508]] + b[31943] + zvy4f_[b[26440]] + b[31944] + zvy4f_[b[31898]] + b[31945] + zvy4f_[b[9179]], console[b[515]](window[b[31885]]), console[b[515]](b[31946] + zvy4f_[b[31947]] + b[31948] + zvy4f_[b[31949]] + b[31950] + zvy4f_[b[31951]] + b[31952] + zvy4f_[b[31953]] + b[31954] + zvy4f_[b[31955]] + b[31956] + zvy4f_[b[31957]] + b[31958] + (zvy4f_[b[31959]] ? zvy4f_[b[31959]][b[345]] + ',' + zvy4f_[b[31959]][b[1368]] + ',' + zvy4f_[b[31959]][b[1370]] + ',' + zvy4f_[b[31959]][b[1369]] : ''));
        var vfa74_ = zvy4f_[b[508]] ? zvy4f_[b[508]][b[12530]]() : '',
            i3nqju = zvy4f_[b[31940]] ? zvy4f_[b[31940]][b[12530]]()[b[4497]]('\x20', '') : '';
        window[b[31882]][b[1149]] = vfa74_[b[122]](b[31960]) != -0x1, window[b[31882]][b[11313]] = vfa74_[b[122]](b[31852]) != -0x1, window[b[31882]][b[31961]] = vfa74_[b[122]](b[31960]) != -0x1 || vfa74_[b[122]](b[31852]) != -0x1, window[b[31882]][b[26159]] = vfa74_[b[122]](b[31962]) != -0x1 || vfa74_[b[122]](b[31963]) != -0x1, window[b[31882]][b[31964]] = zvy4f_[b[26440]] ? zvy4f_[b[26440]][b[12530]]() : '', window[b[31882]][b[31965]] = ![], window[b[31882]][b[31966]] = 0x2;
        if (vfa74_[b[122]](b[31852]) != -0x1) {
            if (zvy4f_[b[9179]] >= 0x18) window[b[31882]][b[31966]] = 0x3;else window[b[31882]][b[31966]] = 0x2;
        } else {
            if (vfa74_[b[122]](b[31960]) != -0x1) {
                if (zvy4f_[b[9179]] && zvy4f_[b[9179]] >= 0x14) window[b[31882]][b[31966]] = 0x3;else {
                    if (i3nqju[b[122]](b[31967]) != -0x1 || i3nqju[b[122]](b[31968]) != -0x1 || i3nqju[b[122]](b[31969]) != -0x1 || i3nqju[b[122]](b[31970]) != -0x1 || i3nqju[b[122]](b[31971]) != -0x1) window[b[31882]][b[31966]] = 0x2;else window[b[31882]][b[31966]] = 0x3;
                }
            } else window[b[31882]][b[31966]] = 0x2;
        }
        console[b[515]](b[31972] + window[b[31882]][b[31965]] + b[31973] + window[b[31882]][b[31966]]);
    }
}), wx[b[31974]]({
    'success': function (ilgtx) {
        console[b[515]](b[31975] + ilgtx[b[4357]] + b[31976] + ilgtx[b[31977]]);
    }
}), wx[b[11870]]({
    'success': function (n69kus) {
        console[b[515]](b[31978] + n69kus[b[13441]]);
    }
}), wx[b[31979]]({ 'keepScreenOn': !![] }), wx[b[11872]](function (sk96ub) {
    console[b[515]](b[31978] + sk96ub[b[13441]] + b[31980] + sk96ub[b[31981]]);
}), wx[b[10804]](function (usq3n) {
    window[b[31982]] = usq3n, window[b[31983]] && window[b[31982]] && (console[b[80]](b[31984] + window[b[31982]][b[847]]), window[b[31983]](window[b[31982]]), window[b[31982]] = null);
}), window[b[31985]] = 0x0, window[b[31986]] = 0x0, window[b[31987]] = null, wx[b[31988]](function () {
    window[b[31986]]++;
    var xq$ = Date[b[85]]();
    (window[b[31985]] == 0x0 || xq$ - window[b[31985]] > 0x1d4c0) && (console[b[100]](b[31989]), wx[b[12057]]());
    if (window[b[31986]] >= 0x2) {
        window[b[31986]] = 0x0, console[b[141]](b[31990]), wx[b[31991]]('0', 0x1);
        if (window[b[31882]] && window[b[31882]][b[1149]]) window[b[31933]](b[31992], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});