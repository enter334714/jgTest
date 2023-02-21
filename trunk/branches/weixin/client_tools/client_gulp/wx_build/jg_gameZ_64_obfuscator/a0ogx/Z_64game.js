var f = wx.$B;
console[f[749]](f[1057]), window[f[1058]], wx[f[1059]](function (ys8qv2) {
    if (ys8qv2) {
        if (ys8qv2[f[1060]]) {
            var owigmx = window[f[541]][f[680]][f[451]](new RegExp(/\./, 'g'), '_'),
                jt94e = ys8qv2[f[1060]],
                dfrz_b = jt94e[f[641]](/(qlhdz\/Z_64game.js:)[0-9]{1,60}(:)/g);
            if (dfrz_b) for (var rbnf = 0x0; rbnf < dfrz_b[f[303]]; rbnf++) {
                if (dfrz_b[rbnf] && dfrz_b[rbnf][f[303]] > 0x0) {
                    var gxiwm = parseInt(dfrz_b[rbnf][f[451]](f[1061], '')[f[451]](':', ''));
                    jt94e = jt94e[f[451]](dfrz_b[rbnf], dfrz_b[rbnf][f[451]](':' + gxiwm + ':', ':' + (gxiwm - 0x2) + ':'));
                }
            }
            jt94e = jt94e[f[451]](new RegExp(f[1062], 'g'), f[1063] + owigmx + f[1064]), jt94e = jt94e[f[451]](new RegExp(f[1065], 'g'), f[1063] + owigmx + f[1064]), ys8qv2[f[1060]] = jt94e;
        }
        var pkgtm = {
            'id': window[f[272]][f[761]],
            'role': window[f[272]][f[762]],
            'level': window[f[272]][f[763]],
            'user': window[f[272]][f[764]],
            'version': window[f[272]][f[333]],
            'cdn': window[f[272]][f[455]],
            'pkgName': window[f[272]][f[415]],
            'gamever': window[f[541]][f[680]],
            'serverid': window[f[272]][f[273]] ? window[f[272]][f[273]][f[83]] : 0x0,
            'systemInfo': window[f[765]],
            'error': f[1066],
            'stack': ys8qv2 ? ys8qv2[f[1060]] : ''
        },
            ilw513 = JSON[f[612]](pkgtm);
        console[f[544]](f[1067] + ilw513), (!window[f[1058]] || window[f[1058]] != pkgtm[f[544]]) && (window[f[1058]] = pkgtm[f[544]], window[f[708]](pkgtm));
    }
});
import 'pe0bv.js';
import 'a7k.js';
window[f[1068]] = require(f[1069]);
import 'lt.js';
import 'dqh.js';
import 'xco.js';
import 'd9a.js';
console[f[749]](f[1070]), console[f[749]](f[1071]), t1ZLIO({ 'title': f[1072] });
var Sfr$zn = { 't1CZOLI': !![] };
new window[f[677]](Sfr$zn), window[f[677]][f[267]][f[576]]();
if (window[f[1073]]) clearInterval(window[f[1073]]);
window[f[1073]] = null, window[f[796]] = function (xw13l, w156) {
    if (!xw13l || !w156) return 0x0;
    xw13l = xw13l[f[552]]('.'), w156 = w156[f[552]]('.');
    const s35u = Math[f[1074]](xw13l[f[303]], w156[f[303]]);
    while (xw13l[f[303]] < s35u) {
        xw13l[f[472]]('0');
    }
    while (w156[f[303]] < s35u) {
        w156[f[472]]('0');
    }
    for (var yvq2s8 = 0x0; yvq2s8 < s35u; yvq2s8++) {
        const j74$9 = parseInt(xw13l[yvq2s8]),
              ox1iw = parseInt(w156[yvq2s8]);
        if (j74$9 > ox1iw) return 0x1;else {
            if (j74$9 < ox1iw) return -0x1;
        }
    }
    return 0x0;
}, window[f[937]] = wx[f[1075]]()[f[937]], console[f[424]](f[1076] + window[f[937]]);
var Skt9e4j = wx[f[1077]]();
Skt9e4j[f[1078]](function (ghxomp) {
    console[f[424]](f[1079] + ghxomp[f[1080]]);
}), Skt9e4j[f[1081]](function () {
    wx[f[731]]({
        'title': f[1082],
        'content': f[1083],
        'showCancel': ![],
        'success': function (phmte) {
            Skt9e4j[f[1084]]();
        }
    });
}), Skt9e4j[f[1085]](function () {
    console[f[424]](f[1086]);
}), window[f[1087]] = function () {
    console[f[424]](f[1088]);
    var $j9e7 = wx[f[1089]]({
        'name': f[1090],
        'success': function (ihgx) {
            console[f[424]](f[1091]), console[f[424]](ihgx), ihgx && ihgx[f[822]] == f[1092] ? (window[f[723]] = !![], window[f[582]](), window[f[583]]()) : setTimeout(function () {
                window[f[1087]]();
            }, 0x1f4);
        },
        'fail': function (kt4hep) {
            console[f[424]](f[1093]), console[f[424]](kt4hep), setTimeout(function () {
                window[f[1087]]();
            }, 0x1f4);
        }
    });
    $j9e7 && $j9e7[f[1094]](fbr_nz => {});
}, window[f[1095]] = function () {
    console[f[424]](f[1096]);
    var $7n_z = wx[f[1089]]({
        'name': f[1097],
        'success': function (u5a61) {
            console[f[424]](f[1098]), console[f[424]](u5a61), u5a61 && u5a61[f[822]] == f[1092] ? (window[f[724]] = !![], window[f[582]](), window[f[583]]()) : setTimeout(function () {
                window[f[1095]]();
            }, 0x1f4);
        },
        'fail': function (y2qv) {
            console[f[424]](f[1099]), console[f[424]](y2qv), setTimeout(function () {
                window[f[1095]]();
            }, 0x1f4);
        }
    });
    $7n_z && $7n_z[f[1094]](j$r_7n => {});
}, window[f[1100]] = function () {
    window[f[796]](window[f[937]], f[1101]) >= 0x0 ? (console[f[424]](f[1102] + window[f[937]] + f[1103]), window[f[741]](), window[f[1087]](), window[f[1095]]()) : (window[f[774]](f[1104], window[f[937]]), wx[f[731]]({
        'title': f[732],
        'content': f[1105]
    }));
}, window[f[765]] = '', wx[f[1106]]({
    'success'(br_dfz) {
        window[f[765]] = f[1107] + br_dfz[f[1108]] + f[1109] + br_dfz[f[1110]] + f[1111] + br_dfz[f[691]] + f[1112] + br_dfz[f[1113]] + f[1114] + br_dfz[f[841]] + f[1115] + br_dfz[f[937]] + f[1116] + br_dfz[f[1117]], console[f[424]](window[f[765]]), console[f[424]](f[1118] + br_dfz[f[1119]] + f[1120] + br_dfz[f[1121]] + f[1122] + br_dfz[f[1123]] + f[1124] + br_dfz[f[1125]] + f[1126] + br_dfz[f[1127]] + f[1128] + br_dfz[f[1129]] + f[1130] + (br_dfz[f[1131]] ? br_dfz[f[1131]][f[207]] + ',' + br_dfz[f[1131]][f[347]] + ',' + br_dfz[f[1131]][f[403]] + ',' + br_dfz[f[1131]][f[170]] : ''));
        var bfn_rz = br_dfz[f[1113]] ? br_dfz[f[1113]][f[1132]]() : '',
            _nfbr = br_dfz[f[1110]] ? br_dfz[f[1110]][f[1132]]()[f[451]]('\x20', '') : '';
        window[f[272]][f[718]] = bfn_rz[f[632]](f[1133]) != -0x1, window[f[272]][f[719]] = bfn_rz[f[632]](f[91]) != -0x1, window[f[272]][f[1041]] = bfn_rz[f[632]](f[1133]) != -0x1 || bfn_rz[f[632]](f[91]) != -0x1, window[f[272]][f[720]] = bfn_rz[f[632]](f[1134]) != -0x1 || bfn_rz[f[632]](f[692]) != -0x1, window[f[272]][f[776]] = br_dfz[f[841]] ? br_dfz[f[841]][f[1132]]() : '', window[f[272]][f[1037]] = ![], window[f[272]][f[1038]] = 0x2;
        if (bfn_rz[f[632]](f[91]) != -0x1) {
            if (br_dfz[f[1117]] >= 0x18) window[f[272]][f[1038]] = 0x3;else window[f[272]][f[1038]] = 0x2;
        } else {
            if (bfn_rz[f[632]](f[1133]) != -0x1) {
                if (br_dfz[f[1117]] && br_dfz[f[1117]] >= 0x14) window[f[272]][f[1038]] = 0x3;else {
                    if (_nfbr[f[632]](f[1135]) != -0x1 || _nfbr[f[632]](f[1136]) != -0x1 || _nfbr[f[632]](f[1137]) != -0x1 || _nfbr[f[632]](f[1138]) != -0x1 || _nfbr[f[632]](f[1139]) != -0x1) window[f[272]][f[1038]] = 0x2;else window[f[272]][f[1038]] = 0x3;
                }
            } else window[f[272]][f[1038]] = 0x2;
        }
        console[f[424]](f[1140] + window[f[272]][f[1037]] + f[1141] + window[f[272]][f[1038]]);
    }
}), wx[f[958]]({
    'success': function (lxoi1) {
        console[f[424]](f[1142] + lxoi1[f[960]] + f[1143] + lxoi1[f[962]]);
    }
}), wx[f[964]]({
    'success': function (rj7$9n) {
        console[f[424]](f[1144] + rj7$9n[f[1145]]);
    }
}), wx[f[1146]]({ 'keepScreenOn': !![] }), wx[f[965]](function (_bzdr) {
    console[f[424]](f[1144] + _bzdr[f[1145]] + f[1147] + _bzdr[f[1148]]);
}), wx[f[927]](function (tj49ke) {
    window[f[929]] = tj49ke, window[f[928]] && window[f[929]] && (console[f[749]](f[930] + window[f[929]][f[931]]), window[f[928]](window[f[929]]), window[f[929]] = null);
}), window[f[1149]] = 0x0, window[f[1150]] = 0x0, window[f[1151]] = null, wx[f[1152]](function () {
    window[f[1150]]++;
    var ul163 = Date[f[266]]();
    (window[f[1149]] == 0x0 || ul163 - window[f[1149]] > 0x1d4c0) && (console[f[630]](f[1153]), wx[f[1154]]());
    if (window[f[1150]] >= 0x2) {
        window[f[1150]] = 0x0, console[f[544]](f[1155]), wx[f[1156]]('0', 0x1);
        if (window[f[272]] && window[f[272]][f[718]]) window[f[774]](f[1157], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});