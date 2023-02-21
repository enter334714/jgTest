var b = wx.$e;
console[b[708]](b[1010]), window[b[1011]], wx[b[1012]](function (ayjgvf) {
    if (ayjgvf) {
        if (ayjgvf[b[438]]) {
            var lm_0$ = window[b[641]]['game_ver'][b[563]](new RegExp(/\./, 'g'), '_'),
                o8rx7u = ayjgvf[b[438]],
                k57fbt = o8rx7u[b[445]](/(z50asubPackage\/z50agame.js:)[0-9]{1,60}(:)/g);
            if (k57fbt) for (var xo7u = 0x0; xo7u < k57fbt[b[422]]; xo7u++) {
                if (k57fbt[xo7u] && k57fbt[xo7u][b[422]] > 0x0) {
                    var mi$4cl = parseInt(k57fbt[xo7u][b[563]](b[1013], '')[b[563]](':', ''));
                    o8rx7u = o8rx7u[b[563]](k57fbt[xo7u], k57fbt[xo7u][b[563]](':' + mi$4cl + ':', ':' + (mi$4cl - 0x2) + ':'));
                }
            }
            o8rx7u = o8rx7u[b[563]](new RegExp(b[1014], 'g'), b[1015] + lm_0$ + b[1016]), o8rx7u = o8rx7u[b[563]](new RegExp(b[1017], 'g'), b[1015] + lm_0$ + b[1016]), ayjgvf[b[438]] = o8rx7u;
        }
        var hswy26 = {
            'id': window['e1$J'][b[722]],
            'role': window['e1$J'][b[723]],
            'level': window['e1$J'][b[724]],
            'user': window['e1$J'][b[725]],
            'version': window['e1$J'][b[679]],
            'cdn': window['e1$J'][b[726]],
            'pkgName': window['e1$J'][b[662]],
            'gamever': window[b[641]]['game_ver'],
            'serverid': window['e1$J'][b[667]] ? window['e1$J'][b[667]][b[62]] : 0x0,
            'systemInfo': window[b[727]],
            'error': b[1018],
            'stack': ayjgvf ? ayjgvf[b[438]] : ''
        },
            lim4$ = JSON[b[729]](hswy26);
        console[b[596]](b[1019] + lim4$), (!window[b[1011]] || window[b[1011]] != hswy26[b[596]]) && (window[b[1011]] = hswy26[b[596]], window['e14$'](hswy26));
    }
});
import 'zl.js';
import 'a0h7a.js';
window[b[1020]] = require(b[1021]);
import 'a7nmn.js';
import 'a51w.js';
import 'f4av.js';
import 'zt.js';
console[b[708]](b[1022]), console[b[708]](b[1023]), e14$FJ({ 'title': b[1024] });
var egvtafb = { 'e1R4J$F': !![] };
new window[b[705]](egvtafb), window[b[705]][b[706]]['e1RF$J4']();
if (window['e1R4$JF']) clearInterval(window['e1R4$JF']);
window['e1R4$JF'] = null, window['e1RFJ4$'] = function (c$_l, $ilm4) {
    if (!c$_l || !$ilm4) return 0x0;
    c$_l = c$_l[b[542]]('.'), $ilm4 = $ilm4[b[542]]('.');
    const bt7k5f = Math[b[588]](c$_l[b[422]], $ilm4[b[422]]);
    while (c$_l[b[422]] < bt7k5f) {
        c$_l[b[444]]('0');
    }
    while ($ilm4[b[422]] < bt7k5f) {
        $ilm4[b[444]]('0');
    }
    for (var ci4m3$ = 0x0; ci4m3$ < bt7k5f; ci4m3$++) {
        const _9ld8 = parseInt(c$_l[ci4m3$]),
              xu8ro7 = parseInt($ilm4[ci4m3$]);
        if (_9ld8 > xu8ro7) return 0x1;else {
            if (_9ld8 < xu8ro7) return -0x1;
        }
    }
    return 0x0;
}, window[b[897]] = wx[b[1025]]()[b[897]], console[b[553]](b[1026] + window[b[897]]);
var e_9x8 = wx[b[1027]]();
e_9x8[b[1028]](function ($dl_m0) {
    console[b[553]](b[1029] + $dl_m0[b[1030]]);
}), e_9x8[b[1031]](function () {
    wx[b[691]]({
        'title': b[1032],
        'content': b[1033],
        'showCancel': ![],
        'success': function (dl0$_) {
            e_9x8[b[1034]]();
        }
    });
}), e_9x8[b[1035]](function () {
    console[b[553]](b[1036]);
}), window['e1RFJ$4'] = function () {
    console[b[553]](b[1037]);
    var uor57k = wx[b[1038]]({
        'name': b[1039],
        'success': function (ic$43) {
            console[b[553]](b[1040]), console[b[553]](ic$43), ic$43 && ic$43[b[777]] == b[1041] ? (window[b[685]] = !![], window['e1JF$4'](), window['e1J$4F']()) : setTimeout(function () {
                window['e1RFJ$4']();
            }, 0x1f4);
        },
        'fail': function (d98_l0) {
            console[b[553]](b[1042]), console[b[553]](d98_l0), setTimeout(function () {
                window['e1RFJ$4']();
            }, 0x1f4);
        }
    });
    uor57k && uor57k[b[1043]](ur89ox => {});
}, window['e1R$4JF'] = function () {
    console[b[553]](b[1044]);
    var agbfvt = wx[b[1038]]({
        'name': b[1045],
        'success': function (d08_) {
            console[b[553]](b[1046]), console[b[553]](d08_), d08_ && d08_[b[777]] == b[1041] ? (window['e1$FJ'] = !![], window['e1JF$4'](), window['e1J$4F']()) : setTimeout(function () {
                window['e1R$4JF']();
            }, 0x1f4);
        },
        'fail': function (oxur5) {
            console[b[553]](b[1047]), console[b[553]](oxur5), setTimeout(function () {
                window['e1R$4JF']();
            }, 0x1f4);
        }
    });
    agbfvt && agbfvt[b[1043]](gbafv => {});
}, window[b[1048]] = function () {
    window['e1RFJ4$'](window[b[897]], b[1049]) >= 0x0 ? (console[b[553]](b[1050] + window[b[897]] + b[1051]), window['e1$4'](), window['e1RFJ$4'](), window['e1R$4JF']()) : (window['e1$J4'](b[1052], window[b[897]]), wx[b[691]]({
        'title': b[692],
        'content': b[1053]
    }));
}, window[b[727]] = '', wx[b[1054]]({
    'success'(vgbfja) {
        window[b[727]] = b[1055] + vgbfja[b[1056]] + b[1057] + vgbfja[b[1058]] + b[1059] + vgbfja[b[648]] + b[1060] + vgbfja[b[1061]] + b[1062] + vgbfja[b[796]] + b[1063] + vgbfja[b[897]] + b[1064] + vgbfja[b[1065]], console[b[553]](window[b[727]]), console[b[553]](b[1066] + vgbfja[b[1067]] + b[1068] + vgbfja[b[1069]] + b[1070] + vgbfja[b[1071]] + b[1072] + vgbfja[b[1073]] + b[1074] + vgbfja[b[1075]] + b[1076] + vgbfja[b[1077]] + b[1078] + (vgbfja[b[1079]] ? vgbfja[b[1079]][b[988]] + ',' + vgbfja[b[1079]][b[991]] + ',' + vgbfja[b[1079]][b[993]] + ',' + vgbfja[b[1079]][b[995]] : ''));
        var d8l_09 = vgbfja[b[1061]] ? vgbfja[b[1061]][b[470]]() : '',
            avysj2 = vgbfja[b[1058]] ? vgbfja[b[1058]][b[470]]()[b[563]]('\x20', '') : '';
        window['e1$J'][b[681]] = d8l_09[b[502]](b[1080]) != -0x1, window['e1$J'][b[682]] = d8l_09[b[502]](b[69]) != -0x1, window['e1$J'][b[987]] = d8l_09[b[502]](b[1080]) != -0x1 || d8l_09[b[502]](b[69]) != -0x1, window['e1$J'][b[683]] = d8l_09[b[502]](b[1081]) != -0x1 || d8l_09[b[502]](b[650]) != -0x1, window['e1$J'][b[736]] = vgbfja[b[796]] ? vgbfja[b[796]][b[470]]() : '', window['e1$J']['e1R4FJ$'] = ![], window['e1$J']['e1R4$FJ'] = 0x2;
        if (d8l_09[b[502]](b[69]) != -0x1) {
            if (vgbfja[b[1065]] >= 0x18) window['e1$J']['e1R4$FJ'] = 0x3;else window['e1$J']['e1R4$FJ'] = 0x2;
        } else {
            if (d8l_09[b[502]](b[1080]) != -0x1) {
                if (vgbfja[b[1065]] && vgbfja[b[1065]] >= 0x14) window['e1$J']['e1R4$FJ'] = 0x3;else {
                    if (avysj2[b[502]](b[1082]) != -0x1 || avysj2[b[502]](b[1083]) != -0x1 || avysj2[b[502]](b[1084]) != -0x1 || avysj2[b[502]](b[1085]) != -0x1 || avysj2[b[502]](b[1086]) != -0x1) window['e1$J']['e1R4$FJ'] = 0x2;else window['e1$J']['e1R4$FJ'] = 0x3;
                }
            } else window['e1$J']['e1R4$FJ'] = 0x2;
        }
        console[b[553]](b[1087] + window['e1$J']['e1R4FJ$'] + b[1088] + window['e1$J']['e1R4$FJ']);
    }
}), wx[b[915]]({
    'success': function (d_l$09) {
        console[b[553]](b[1089] + d_l$09[b[917]] + b[1090] + d_l$09[b[919]]);
    }
}), wx[b[921]]({
    'success': function (wez1hn) {
        console[b[553]](b[1091] + wez1hn[b[1092]]);
    }
}), wx[b[1093]]({ 'keepScreenOn': !![] }), wx[b[922]](function (y2s6) {
    console[b[553]](b[1091] + y2s6[b[1092]] + b[1094] + y2s6[b[1095]]);
}), wx[b[888]](function (ys2jv) {
    window[b[890]] = ys2jv, window[b[889]] && window[b[890]] && (console[b[708]](b[891] + window[b[890]][b[892]]), window[b[889]](window[b[890]]), window[b[890]] = null);
}), window[b[1096]] = 0x0, window['e1R$FJ4'] = 0x0, window[b[1097]] = null, wx[b[1098]](function () {
    window['e1R$FJ4']++;
    var mi4c3q = Date[b[673]]();
    (window[b[1096]] == 0x0 || mi4c3q - window[b[1096]] > 0x1d4c0) && (console[b[609]](b[1099]), wx[b[1100]]());
    if (window['e1R$FJ4'] >= 0x2) {
        window['e1R$FJ4'] = 0x0, console[b[596]](b[1101]), wx[b[1102]]('0', 0x1);
        if (window['e1$J'] && window['e1$J'][b[681]]) window['e1$J4'](b[1103], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});