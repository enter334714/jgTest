var s1 = wx.l$;
console[s1[637]](s1[969]), window[s1[970]], wx[s1[971]](function (g431h) {
    if (g431h) {
        if (g431h[s1[972]]) {
            var c_akrq = window[s1[425]][s1[566]][s1[331]](new RegExp(/\./, 'g'), '_'),
                yxe65 = g431h[s1[972]],
                jnw9kv = yxe65[s1[527]](/(he814a\/Z_78game.js:)[0-9]{1,60}(:)/g);
            if (jnw9kv) for (var $wtjv = 0x0; $wtjv < jnw9kv[s1[192]]; $wtjv++) {
                if (jnw9kv[$wtjv] && jnw9kv[$wtjv][s1[192]] > 0x0) {
                    var rmo = parseInt(jnw9kv[$wtjv][s1[331]](s1[973], '')[s1[331]](':', ''));
                    yxe65 = yxe65[s1[331]](jnw9kv[$wtjv], jnw9kv[$wtjv][s1[331]](':' + rmo + ':', ':' + (rmo - 0x2) + ':'));
                }
            }
            yxe65 = yxe65[s1[331]](new RegExp(s1[974], 'g'), s1[975] + c_akrq + s1[976]), yxe65 = yxe65[s1[331]](new RegExp(s1[977], 'g'), s1[975] + c_akrq + s1[976]), g431h[s1[972]] = yxe65;
        }
        var cnvkj9 = {
            'id': window[s1[160]][s1[657]],
            'role': window[s1[160]][s1[658]],
            'level': window[s1[160]][s1[659]],
            'user': window[s1[160]][s1[660]],
            'version': window[s1[160]][s1[222]],
            'cdn': window[s1[160]][s1[335]],
            'pkgName': window[s1[160]][s1[304]],
            'gamever': window[s1[425]][s1[566]],
            'serverid': window[s1[160]][s1[161]] ? window[s1[160]][s1[161]][s1[162]] : 0x0,
            'systemInfo': window[s1[661]],
            'error': s1[978],
            'stack': g431h ? g431h[s1[972]] : ''
        },
            muqroa = JSON[s1[497]](cnvkj9);
        console[s1[428]](s1[979] + muqroa), (!window[s1[970]] || window[s1[970]] != cnvkj9[s1[428]]) && (window[s1[970]] = cnvkj9[s1[428]], window[s1[594]](cnvkj9));
    }
});
import 'mk.js';
import 'a8m9a.js';
window[s1[980]] = require(s1[981]);
import 'pqe.js';
import 'uf.js';
import 'a5k.js';
import 'gf.js';
console[s1[637]](s1[982]), console[s1[637]](s1[983]), _sNYWI({ 'title': s1[984] });
var _xt8$ = { '_sTNIYW': !![] };
new window[s1[564]](_xt8$), window[s1[564]][s1[155]][s1[460]]();
if (window[s1[985]]) clearInterval(window[s1[985]]);
window[s1[985]] = null, window[s1[691]] = function (ac_r, kacrq) {
    if (!ac_r || !kacrq) return 0x0;
    ac_r = ac_r[s1[436]]('.'), kacrq = kacrq[s1[436]]('.');
    const sy56ex = Math[s1[986]](ac_r[s1[192]], kacrq[s1[192]]);
    while (ac_r[s1[192]] < sy56ex) {
        ac_r[s1[353]]('0');
    }
    while (kacrq[s1[192]] < sy56ex) {
        kacrq[s1[353]]('0');
    }
    for (var e5lf6 = 0x0; e5lf6 < sy56ex; e5lf6++) {
        const h4g31 = parseInt(ac_r[e5lf6]),
              _9nckr = parseInt(kacrq[e5lf6]);
        if (h4g31 > _9nckr) return 0x1;else {
            if (h4g31 < _9nckr) return -0x1;
        }
    }
    return 0x0;
}, window[s1[847]] = wx[s1[987]]()[s1[847]], console[s1[311]](s1[988] + window[s1[847]]);
var _xeixyg6 = wx[s1[989]]();
_xeixyg6[s1[990]](function (m7auo) {
    console[s1[311]](s1[991] + m7auo[s1[992]]);
}), _xeixyg6[s1[993]](function () {
    wx[s1[617]]({
        'title': s1[994],
        'content': s1[995],
        'showCancel': ![],
        'success': function (vnjw9) {
            _xeixyg6[s1[996]]();
        }
    });
}), _xeixyg6[s1[997]](function () {
    console[s1[311]](s1[998]);
}), window[s1[999]] = function () {
    console[s1[311]](s1[1000]);
    var xiy65 = wx[s1[1001]]({
        'name': s1[1002],
        'success': function (uoqm) {
            console[s1[311]](s1[1003]), console[s1[311]](uoqm), uoqm && uoqm[s1[719]] == s1[1004] ? (window[s1[609]] = !![], window[s1[466]](), window[s1[467]]()) : setTimeout(function () {
                window[s1[999]]();
            }, 0x1f4);
        },
        'fail': function (kc_r9n) {
            console[s1[311]](s1[1005]), console[s1[311]](kc_r9n), setTimeout(function () {
                window[s1[999]]();
            }, 0x1f4);
        }
    });
    xiy65 && xiy65[s1[1006]](kr_qn => {});
}, window[s1[1007]] = function () {
    console[s1[311]](s1[1008]);
    var k9rc_n = wx[s1[1001]]({
        'name': s1[1009],
        'success': function (pz7um) {
            console[s1[311]](s1[1010]), console[s1[311]](pz7um), pz7um && pz7um[s1[719]] == s1[1004] ? (window[s1[610]] = !![], window[s1[466]](), window[s1[467]]()) : setTimeout(function () {
                window[s1[1007]]();
            }, 0x1f4);
        },
        'fail': function (t0b$8) {
            console[s1[311]](s1[1011]), console[s1[311]](t0b$8), setTimeout(function () {
                window[s1[1007]]();
            }, 0x1f4);
        }
    });
    k9rc_n && k9rc_n[s1[1006]](_nkqrc => {});
}, window[s1[1012]] = function () {
    window[s1[691]](window[s1[847]], s1[1013]) >= 0x0 ? (console[s1[311]](s1[1014] + window[s1[847]] + s1[1015]), window[s1[627]](), window[s1[999]](), window[s1[1007]]()) : (window[s1[670]](s1[1016], window[s1[847]]), wx[s1[617]]({
        'title': s1[618],
        'content': s1[1017]
    }));
}, window[s1[661]] = '', wx[s1[1018]]({
    'success'(tdb08) {
        window[s1[661]] = s1[1019] + tdb08[s1[1020]] + s1[1021] + tdb08[s1[1022]] + s1[1023] + tdb08[s1[577]] + s1[1024] + tdb08[s1[1025]] + s1[1026] + tdb08[s1[739]] + s1[1027] + tdb08[s1[847]] + s1[1028] + tdb08[s1[1029]], console[s1[311]](window[s1[661]]), console[s1[311]](s1[1030] + tdb08[s1[1031]] + s1[1032] + tdb08[s1[1033]] + s1[1034] + tdb08[s1[1035]] + s1[1036] + tdb08[s1[1037]] + s1[1038] + tdb08[s1[1039]] + s1[1040] + tdb08[s1[1041]] + s1[1042] + (tdb08[s1[1043]] ? tdb08[s1[1043]][s1[106]] + ',' + tdb08[s1[1043]][s1[236]] + ',' + tdb08[s1[1043]][s1[366]] + ',' + tdb08[s1[1043]][s1[69]] : ''));
        var es6f = tdb08[s1[1025]] ? tdb08[s1[1025]][s1[1044]]() : '',
            uaro = tdb08[s1[1022]] ? tdb08[s1[1022]][s1[1044]]()[s1[331]]('\x20', '') : '';
        window[s1[160]][s1[604]] = es6f[s1[517]](s1[1045]) != -0x1, window[s1[160]][s1[605]] = es6f[s1[517]](s1[1046]) != -0x1, window[s1[160]][s1[953]] = es6f[s1[517]](s1[1045]) != -0x1 || es6f[s1[517]](s1[1046]) != -0x1, window[s1[160]][s1[606]] = es6f[s1[517]](s1[1047]) != -0x1 || es6f[s1[517]](s1[578]) != -0x1, window[s1[160]][s1[672]] = tdb08[s1[739]] ? tdb08[s1[739]][s1[1044]]() : '', window[s1[160]][s1[948]] = ![], window[s1[160]][s1[949]] = 0x2;
        if (es6f[s1[517]](s1[1046]) != -0x1) {
            if (tdb08[s1[1029]] >= 0x18) window[s1[160]][s1[949]] = 0x3;else window[s1[160]][s1[949]] = 0x2;
        } else {
            if (es6f[s1[517]](s1[1045]) != -0x1) {
                if (tdb08[s1[1029]] && tdb08[s1[1029]] >= 0x14) window[s1[160]][s1[949]] = 0x3;else {
                    if (uaro[s1[517]](s1[1048]) != -0x1 || uaro[s1[517]](s1[1049]) != -0x1 || uaro[s1[517]](s1[1050]) != -0x1 || uaro[s1[517]](s1[1051]) != -0x1 || uaro[s1[517]](s1[1052]) != -0x1) window[s1[160]][s1[949]] = 0x2;else window[s1[160]][s1[949]] = 0x3;
                }
            } else window[s1[160]][s1[949]] = 0x2;
        }
        console[s1[311]](s1[1053] + window[s1[160]][s1[948]] + s1[1054] + window[s1[160]][s1[949]]);
    }
}), wx[s1[868]]({
    'success': function (r_kqa) {
        console[s1[311]](s1[1055] + r_kqa[s1[870]] + s1[1056] + r_kqa[s1[872]]);
    }
}), wx[s1[874]]({
    'success': function (zl7ufp) {
        console[s1[311]](s1[1057] + zl7ufp[s1[1058]]);
    }
}), wx[s1[1059]]({ 'keepScreenOn': !![] }), wx[s1[875]](function (lsp5zf) {
    console[s1[311]](s1[1057] + lsp5zf[s1[1058]] + s1[1060] + lsp5zf[s1[1061]]);
}), wx[s1[837]](function (sp7lf) {
    window[s1[839]] = sp7lf, window[s1[838]] && window[s1[839]] && (console[s1[637]](s1[840] + window[s1[839]][s1[841]]), window[s1[838]](window[s1[839]]), window[s1[839]] = null);
}), window[s1[1062]] = 0x0, window[s1[1063]] = 0x0, window[s1[1064]] = null, wx[s1[1065]](function () {
    window[s1[1063]]++;
    var v9j$wt = Date[s1[154]]();
    (window[s1[1062]] == 0x0 || v9j$wt - window[s1[1062]] > 0x1d4c0) && (console[s1[515]](s1[1066]), wx[s1[1067]]());
    if (window[s1[1063]] >= 0x2) {
        window[s1[1063]] = 0x0, console[s1[428]](s1[1068]), wx[s1[1069]]('0', 0x1);
        if (window[s1[160]] && window[s1[160]][s1[604]]) window[s1[670]](s1[1070], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});