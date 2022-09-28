var f = wx.$B;
console[f[608]](f[32358]), window[f[32359]], wx[f[32360]](function (ou0yn5) {
    if (ou0yn5) {
        if (ou0yn5[f[40]]) {
            var g6hai = window[f[1077]][f[32042]][f[169]](new RegExp(/\./, 'g'), '_'),
                yn0uo5 = ou0yn5[f[40]],
                jkr0y = yn0uo5[f[47]](/(knj\/Z_71game.js:)[0-9]{1,60}(:)/g);
            if (jkr0y) for (var u8ltx = 0x0; u8ltx < jkr0y[f[24]]; u8ltx++) {
                if (jkr0y[u8ltx] && jkr0y[u8ltx][f[24]] > 0x0) {
                    var y5tnou = parseInt(jkr0y[u8ltx][f[169]](f[32361], '')[f[169]](':', ''));
                    yn0uo5 = yn0uo5[f[169]](jkr0y[u8ltx], jkr0y[u8ltx][f[169]](':' + y5tnou + ':', ':' + (y5tnou - 0x2) + ':'));
                }
            }
            yn0uo5 = yn0uo5[f[169]](new RegExp(f[32362], 'g'), f[32363] + g6hai + f[27025]), yn0uo5 = yn0uo5[f[169]](new RegExp(f[32364], 'g'), f[32363] + g6hai + f[27025]), ou0yn5[f[40]] = yn0uo5;
        }
        var v$s6 = {
            'id': window[f[31883]][f[32101]],
            'role': window[f[31883]][f[4853]],
            'level': window[f[31883]][f[32102]],
            'user': window[f[31883]][f[26925]],
            'version': window[f[31883]][f[630]],
            'cdn': window[f[31883]][f[4732]],
            'pkgName': window[f[31883]][f[26927]],
            'gamever': window[f[1077]][f[32042]],
            'serverid': window[f[31883]][f[26921]] ? window[f[31883]][f[26921]][f[11948]] : 0x0,
            'systemInfo': window[f[32103]],
            'error': f[32365],
            'stack': ou0yn5 ? ou0yn5[f[40]] : ''
        },
            b3z72 = JSON[f[4718]](v$s6);
        console[f[202]](f[32366] + b3z72), (!window[f[32359]] || window[f[32359]] != v$s6[f[202]]) && (window[f[32359]] = v$s6[f[202]], window[f[32065]](v$s6));
    }
});
import 'a2t9a.js';
import 'a80f.js';
window[f[32367]] = require(f[32368]);
import 'j4y8a.js';
import 'a9d.js';
import 'c2a.js';
import 'dwec5a.js';
console[f[608]](f[32369]), console[f[608]](f[32370]), t1SU1F({ 'title': f[32371] });
var Shw$6s = { 't1ZSFU1': !![] };
new window[f[32039]](Shw$6s), window[f[32039]][f[676]][f[32003]]();
if (window[f[32372]]) clearInterval(window[f[32372]]);
window[f[32372]] = null, window[f[32133]] = function (svwh6, bswm2) {
    if (!svwh6 || !bswm2) return 0x0;
    svwh6 = svwh6[f[148]]('.'), bswm2 = bswm2[f[148]]('.');
    const yo5 = Math[f[194]](svwh6[f[24]], bswm2[f[24]]);
    while (svwh6[f[24]] < yo5) {
        svwh6[f[46]]('0');
    }
    while (bswm2[f[24]] < yo5) {
        bswm2[f[46]]('0');
    }
    for (var qdkfj = 0x0; qdkfj < yo5; qdkfj++) {
        const ghi18a = parseInt(svwh6[qdkfj]),
              m23bep = parseInt(bswm2[qdkfj]);
        if (ghi18a > m23bep) return 0x1;else {
            if (ghi18a < m23bep) return -0x1;
        }
    }
    return 0x0;
}, window[f[32254]] = wx[f[32373]]()[f[32254]], console[f[159]](f[32374] + window[f[32254]]);
var Sms6$w = wx[f[32375]]();
Sms6$w[f[32376]](function (bswe) {
    console[f[159]](f[32377] + bswe[f[32378]]);
}), Sms6$w[f[32379]](function () {
    wx[f[32078]]({
        'title': f[32380],
        'content': f[32381],
        'showCancel': ![],
        'success': function ($i6g) {
            Sms6$w[f[32382]]();
        }
    });
}), Sms6$w[f[32383]](function () {
    console[f[159]](f[32384]);
}), window[f[32385]] = function () {
    console[f[159]](f[32386]);
    var p273zb = wx[f[32387]]({
        'name': 'nw',
        'success': function (xg1i8a) {
            console[f[159]](f[32388]), console[f[159]](xg1i8a), xg1i8a && xg1i8a[f[27121]] == f[32389] ? (window[f[32072]] = !![], window[f[32006]](), window[f[32007]]()) : setTimeout(function () {
                window[f[32385]]();
            }, 0x1f4);
        },
        'fail': function (dr90kj) {
            console[f[159]](f[32390]), console[f[159]](dr90kj), setTimeout(function () {
                window[f[32385]]();
            }, 0x1f4);
        }
    });
    p273zb && p273zb[f[31617]](n50ou => {});
}, window[f[32391]] = function () {
    console[f[159]](f[32392]);
    var kyr9j = wx[f[32387]]({
        'name': f[32393],
        'success': function (b2pew) {
            console[f[159]](f[32394]), console[f[159]](b2pew), b2pew && b2pew[f[27121]] == f[32389] ? (window[f[32073]] = !![], window[f[32006]](), window[f[32007]]()) : setTimeout(function () {
                window[f[32391]]();
            }, 0x1f4);
        },
        'fail': function (ynu50) {
            console[f[159]](f[32395]), console[f[159]](ynu50), setTimeout(function () {
                window[f[32391]]();
            }, 0x1f4);
        }
    });
    kyr9j && kyr9j[f[31617]]($sw6hv => {});
}, window[f[32396]] = function () {
    window[f[32133]](window[f[32254]], f[32397]) >= 0x0 ? (console[f[159]](f[32398] + window[f[32254]] + f[32399]), window[f[32085]](), window[f[32385]](), window[f[32391]]()) : (window[f[32111]](f[32400], window[f[32254]]), wx[f[32078]]({
        'title': f[6257],
        'content': f[32401]
    }));
}, window[f[32103]] = '', wx[f[32402]]({
    'success'(r90k) {
        window[f[32103]] = f[32403] + r90k[f[32404]] + f[32405] + r90k[f[32406]] + f[32407] + r90k[f[5541]] + f[32408] + r90k[f[999]] + f[32409] + r90k[f[26888]] + f[32410] + r90k[f[32254]] + f[32411] + r90k[f[9638]], console[f[159]](window[f[32103]]), console[f[159]](f[32412] + r90k[f[32413]] + f[32414] + r90k[f[32415]] + f[32416] + r90k[f[32417]] + f[32418] + r90k[f[32419]] + f[32420] + r90k[f[32421]] + f[32422] + r90k[f[32423]] + f[32424] + (r90k[f[32425]] ? r90k[f[32425]][f[841]] + ',' + r90k[f[32425]][f[1844]] + ',' + r90k[f[32425]][f[1846]] + ',' + r90k[f[32425]][f[1845]] : ''));
        var sw2 = r90k[f[999]] ? r90k[f[999]][f[72]]() : '',
            p23b7z = r90k[f[32406]] ? r90k[f[32406]][f[72]]()[f[169]]('\x20', '') : '';
        window[f[31883]][f[1627]] = sw2[f[106]](f[32426]) != -0x1, window[f[31883]][f[11772]] = sw2[f[106]](f[32427]) != -0x1, window[f[31883]][f[32343]] = sw2[f[106]](f[32426]) != -0x1 || sw2[f[106]](f[32427]) != -0x1, window[f[31883]][f[26608]] = sw2[f[106]](f[32428]) != -0x1 || sw2[f[106]](f[32052]) != -0x1, window[f[31883]][f[32113]] = r90k[f[26888]] ? r90k[f[26888]][f[72]]() : '', window[f[31883]][f[32339]] = ![], window[f[31883]][f[32340]] = 0x2;
        if (sw2[f[106]](f[32427]) != -0x1) {
            if (r90k[f[9638]] >= 0x18) window[f[31883]][f[32340]] = 0x3;else window[f[31883]][f[32340]] = 0x2;
        } else {
            if (sw2[f[106]](f[32426]) != -0x1) {
                if (r90k[f[9638]] && r90k[f[9638]] >= 0x14) window[f[31883]][f[32340]] = 0x3;else {
                    if (p23b7z[f[106]](f[32429]) != -0x1 || p23b7z[f[106]](f[32430]) != -0x1 || p23b7z[f[106]](f[32431]) != -0x1 || p23b7z[f[106]](f[32432]) != -0x1 || p23b7z[f[106]](f[32433]) != -0x1) window[f[31883]][f[32340]] = 0x2;else window[f[31883]][f[32340]] = 0x3;
                }
            } else window[f[31883]][f[32340]] = 0x2;
        }
        console[f[159]](f[32434] + window[f[31883]][f[32339]] + f[32435] + window[f[31883]][f[32340]]);
    }
}), wx[f[32274]]({
    'success': function (g1a8) {
        console[f[159]](f[32436] + g1a8[f[4830]] + f[32437] + g1a8[f[32276]]);
    }
}), wx[f[12329]]({
    'success': function (wvhs$) {
        console[f[159]](f[32438] + wvhs$[f[13895]]);
    }
}), wx[f[32439]]({ 'keepScreenOn': !![] }), wx[f[12331]](function (v$16h) {
    console[f[159]](f[32438] + v$16h[f[13895]] + f[32440] + v$16h[f[32441]]);
}), wx[f[11263]](function (xotlu5) {
    window[f[32248]] = xotlu5, window[f[32247]] && window[f[32248]] && (console[f[608]](f[32249] + window[f[32248]][f[1330]]), window[f[32247]](window[f[32248]]), window[f[32248]] = null);
}), window[f[32442]] = 0x0, window[f[32443]] = 0x0, window[f[32444]] = null, wx[f[32445]](function () {
    window[f[32443]]++;
    var hvs16 = Date[f[613]]();
    (window[f[32442]] == 0x0 || hvs16 - window[f[32442]] > 0x1d4c0) && (console[f[215]](f[32446]), wx[f[12516]]());
    if (window[f[32443]] >= 0x2) {
        window[f[32443]] = 0x0, console[f[202]](f[32447]), wx[f[32448]]('0', 0x1);
        if (window[f[31883]] && window[f[31883]][f[1627]]) window[f[32111]](f[32449], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});