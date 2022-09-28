var b = wx.$e;
console[b[721]](b[1054]), window[b[1055]], wx[b[1056]](function (wdyf) {
    if (wdyf) {
        if (wdyf[b[435]]) {
            var g8tp5 = window[b[638]]['game_ver'][b[560]](new RegExp(/\./, 'g'), '_'),
                zq73cb = wdyf[b[435]],
                uvb = zq73cb[b[442]](/(z50asubPackage\/z50agame.js:)[0-9]{1,60}(:)/g);
            if (uvb) for (var k3qzb = 0x0; k3qzb < uvb[b[419]]; k3qzb++) {
                if (uvb[k3qzb] && uvb[k3qzb][b[419]] > 0x0) {
                    var qzc = parseInt(uvb[k3qzb][b[560]](b[1057], '')[b[560]](':', ''));
                    zq73cb = zq73cb[b[560]](uvb[k3qzb], uvb[k3qzb][b[560]](':' + qzc + ':', ':' + (qzc - 0x2) + ':'));
                }
            }
            zq73cb = zq73cb[b[560]](new RegExp(b[1058], 'g'), b[1059] + g8tp5 + b[1060]), zq73cb = zq73cb[b[560]](new RegExp(b[1061], 'g'), b[1059] + g8tp5 + b[1060]), wdyf[b[435]] = zq73cb;
        }
        var m$0x_ = {
            'id': window[b[646]][b[737]],
            'role': window[b[646]][b[738]],
            'level': window[b[646]][b[739]],
            'user': window[b[646]][b[740]],
            'version': window[b[646]][b[680]],
            'cdn': window[b[646]][b[741]],
            'pkgName': window[b[646]][b[663]],
            'gamever': window[b[638]]['game_ver'],
            'serverid': window[b[646]][b[668]] ? window[b[646]][b[668]][b[62]] : 0x0,
            'systemInfo': window[b[742]],
            'error': b[1062],
            'stack': wdyf ? wdyf[b[435]] : ''
        },
            gh84nl = JSON[b[744]](m$0x_);
        console[b[593]](b[1063] + gh84nl), (!window[b[1055]] || window[b[1055]] != m$0x_[b[593]]) && (window[b[1055]] = m$0x_[b[593]], window[b[669]](m$0x_));
    }
});
import 'zl.js';
import 'a0h7a.js';
window[b[1064]] = require(b[1065]);
import 'a7nmn.js';
import 'a51w.js';
import 'f4av.js';
import 'zt.js';
console[b[721]](b[1066]), console[b[721]](b[1067]), e1HE7F({ 'title': b[1068] });
var e$xj_ma = { 'e1THFE7': !![] };
new window[b[718]](e$xj_ma), window[b[718]][b[719]][b[1069]]();
if (window[b[1070]]) clearInterval(window[b[1070]]);
window[b[1070]] = null, window[b[774]] = function (f1wd, cbu72v) {
    if (!f1wd || !cbu72v) return 0x0;
    f1wd = f1wd[b[539]]('.'), cbu72v = cbu72v[b[539]]('.');
    const _06m$ = Math[b[585]](f1wd[b[419]], cbu72v[b[419]]);
    while (f1wd[b[419]] < _06m$) {
        f1wd[b[441]]('0');
    }
    while (cbu72v[b[419]] < _06m$) {
        cbu72v[b[441]]('0');
    }
    for (var zqwk1 = 0x0; zqwk1 < _06m$; zqwk1++) {
        const q7kw3 = parseInt(f1wd[zqwk1]),
              i5ptg4 = parseInt(cbu72v[zqwk1]);
        if (q7kw3 > i5ptg4) return 0x1;else {
            if (q7kw3 < i5ptg4) return -0x1;
        }
    }
    return 0x0;
}, window[b[923]] = wx[b[1071]]()[b[923]], console[b[550]](b[1072] + window[b[923]]);
var ebz7 = wx[b[1073]]();
ebz7[b[1074]](function (h8nl9) {
    console[b[550]](b[1075] + h8nl9[b[1076]]);
}), ebz7[b[1077]](function () {
    wx[b[698]]({
        'title': b[1078],
        'content': b[1079],
        'showCancel': ![],
        'success': function ($jiaxm) {
            ebz7[b[1080]]();
        }
    });
}), ebz7[b[1081]](function () {
    console[b[550]](b[1082]);
}), window[b[1083]] = function () {
    console[b[550]](b[1084]);
    var mx_j0 = wx[b[1085]]({
        'name': b[1086],
        'success': function (hln4) {
            console[b[550]](b[1087]), console[b[550]](hln4), hln4 && hln4[b[796]] == b[1088] ? (window[b[687]] = !![], window[b[862]](), window[b[863]]()) : setTimeout(function () {
                window[b[1083]]();
            }, 0x1f4);
        },
        'fail': function (qw3zk) {
            console[b[550]](b[1089]), console[b[550]](qw3zk), setTimeout(function () {
                window[b[1083]]();
            }, 0x1f4);
        }
    });
    mx_j0 && mx_j0[b[1090]](nucv9 => {});
}, window[b[1091]] = function () {
    console[b[550]](b[1092]);
    var xja = wx[b[1085]]({
        'name': b[1093],
        'success': function (cuv9) {
            console[b[550]](b[1094]), console[b[550]](cuv9), cuv9 && cuv9[b[796]] == b[1088] ? (window[b[688]] = !![], window[b[862]](), window[b[863]]()) : setTimeout(function () {
                window[b[1091]]();
            }, 0x1f4);
        },
        'fail': function (_rm$) {
            console[b[550]](b[1095]), console[b[550]](_rm$), setTimeout(function () {
                window[b[1091]]();
            }, 0x1f4);
        }
    });
    xja && xja[b[1090]](r$6s_0 => {});
}, window[b[1096]] = function () {
    window[b[774]](window[b[923]], b[1097]) >= 0x0 ? (console[b[550]](b[1098] + window[b[923]] + b[1099]), window[b[708]](), window[b[1083]](), window[b[1091]]()) : (window[b[751]](b[1100], window[b[923]]), wx[b[698]]({
        'title': b[699],
        'content': b[1101]
    }));
}, window[b[742]] = '', wx[b[1102]]({
    'success'(m0$_r6) {
        window[b[742]] = b[1103] + m0$_r6[b[1104]] + b[1105] + m0$_r6[b[1106]] + b[1107] + m0$_r6[b[649]] + b[1108] + m0$_r6[b[1109]] + b[1110] + m0$_r6[b[815]] + b[1111] + m0$_r6[b[923]] + b[1112] + m0$_r6[b[1113]], console[b[550]](window[b[742]]), console[b[550]](b[1114] + m0$_r6[b[1115]] + b[1116] + m0$_r6[b[1117]] + b[1118] + m0$_r6[b[1119]] + b[1120] + m0$_r6[b[1121]] + b[1122] + m0$_r6[b[1123]] + b[1124] + m0$_r6[b[1125]] + b[1126] + (m0$_r6[b[1127]] ? m0$_r6[b[1127]][b[1031]] + ',' + m0$_r6[b[1127]][b[1034]] + ',' + m0$_r6[b[1127]][b[1036]] + ',' + m0$_r6[b[1127]][b[1038]] : ''));
        var t5gi4 = m0$_r6[b[1109]] ? m0$_r6[b[1109]][b[467]]() : '',
            v9u2nc = m0$_r6[b[1106]] ? m0$_r6[b[1106]][b[467]]()[b[560]]('\x20', '') : '';
        window[b[646]][b[682]] = t5gi4[b[499]](b[1128]) != -0x1, window[b[646]][b[683]] = t5gi4[b[499]](b[69]) != -0x1, window[b[646]][b[1030]] = t5gi4[b[499]](b[1128]) != -0x1 || t5gi4[b[499]](b[69]) != -0x1, window[b[646]][b[684]] = t5gi4[b[499]](b[1129]) != -0x1 || t5gi4[b[499]](b[651]) != -0x1, window[b[646]][b[753]] = m0$_r6[b[815]] ? m0$_r6[b[815]][b[467]]() : '', window[b[646]][b[1026]] = ![], window[b[646]][b[1027]] = 0x2;
        if (t5gi4[b[499]](b[69]) != -0x1) {
            if (m0$_r6[b[1113]] >= 0x18) window[b[646]][b[1027]] = 0x3;else window[b[646]][b[1027]] = 0x2;
        } else {
            if (t5gi4[b[499]](b[1128]) != -0x1) {
                if (m0$_r6[b[1113]] && m0$_r6[b[1113]] >= 0x14) window[b[646]][b[1027]] = 0x3;else {
                    if (v9u2nc[b[499]](b[1130]) != -0x1 || v9u2nc[b[499]](b[1131]) != -0x1 || v9u2nc[b[499]](b[1132]) != -0x1 || v9u2nc[b[499]](b[1133]) != -0x1 || v9u2nc[b[499]](b[1134]) != -0x1) window[b[646]][b[1027]] = 0x2;else window[b[646]][b[1027]] = 0x3;
                }
            } else window[b[646]][b[1027]] = 0x2;
        }
        console[b[550]](b[1135] + window[b[646]][b[1026]] + b[1136] + window[b[646]][b[1027]]);
    }
}), wx[b[943]]({
    'success': function (n9hvu2) {
        console[b[550]](b[1137] + n9hvu2[b[945]] + b[1138] + n9hvu2[b[947]]);
    }
}), wx[b[949]]({
    'success': function (h2vu9) {
        console[b[550]](b[1139] + h2vu9[b[1140]]);
    }
}), wx[b[1141]]({ 'keepScreenOn': !![] }), wx[b[950]](function ($_xm) {
    console[b[550]](b[1139] + $_xm[b[1140]] + b[1142] + $_xm[b[1143]]);
}), wx[b[913]](function (vbuc29) {
    window[b[915]] = vbuc29, window[b[914]] && window[b[915]] && (console[b[721]](b[916] + window[b[915]][b[917]]), window[b[914]](window[b[915]]), window[b[915]] = null);
}), window[b[1144]] = 0x0, window[b[1145]] = 0x0, window[b[1146]] = null, wx[b[1147]](function () {
    window[b[1145]]++;
    var r_$m60 = Date[b[675]]();
    (window[b[1144]] == 0x0 || r_$m60 - window[b[1144]] > 0x1d4c0) && (console[b[606]](b[1148]), wx[b[1149]]());
    if (window[b[1145]] >= 0x2) {
        window[b[1145]] = 0x0, console[b[593]](b[1150]), wx[b[1151]]('0', 0x1);
        if (window[b[646]] && window[b[646]][b[682]]) window[b[751]](b[1152], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});