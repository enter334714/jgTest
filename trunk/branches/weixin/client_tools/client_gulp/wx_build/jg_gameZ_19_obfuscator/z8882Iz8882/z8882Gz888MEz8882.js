var u = wx.$x;
console[u[960]](u[961]), window[u[962]], wx[u[963]](function (va6k) {
    if (va6k) {
        if (va6k[u[56]]) {
            var snmzb = window[u[964]][u[965]][u[243]](new RegExp(/\./, 'g'), '_'),
                jhyc2 = va6k[u[56]],
                byht = jhyc2[u[67]](/(z888z888z888z888z888\/z8882Gz888MEz8882.js:)[0-9]{1,60}(:)/g);
            if (byht) for (var serq_ = 0x0; serq_ < byht[u[31]]; serq_++) {
                if (byht[serq_] && byht[serq_][u[31]] > 0x0) {
                    var mtnsbz = parseInt(byht[serq_][u[243]](u[966], '')[u[243]](':', ''));
                    jhyc2 = jhyc2[u[243]](byht[serq_], byht[serq_][u[243]](':' + mtnsbz + ':', ':' + (mtnsbz - 0x2) + ':'));
                }
            }
            jhyc2 = jhyc2[u[243]](new RegExp(u[967], 'g'), u[968] + snmzb + u[969]), jhyc2 = jhyc2[u[243]](new RegExp(u[970], 'g'), u[968] + snmzb + u[969]), va6k[u[56]] = jhyc2;
        }
        var re$q_3 = {
            'id': window[u[971]][u[972]],
            'role': window[u[971]][u[973]],
            'level': window[u[971]][u[974]],
            'user': window[u[971]][u[975]],
            'version': window[u[971]][u[976]],
            'cdn': window[u[971]][u[977]],
            'pkgName': window[u[971]][u[978]],
            'gamever': window[u[964]][u[965]],
            'serverid': window[u[971]][u[979]] ? window[u[971]][u[979]][u[980]] : 0x0,
            'systemInfo': window[u[981]],
            'error': u[982],
            'stack': va6k ? va6k[u[56]] : ''
        },
            dwuo0 = JSON[u[983]](re$q_3);
        console[u[333]](u[984] + dwuo0), (!window[u[962]] || window[u[962]] != re$q_3[u[333]]) && (window[u[962]] = re$q_3[u[333]], window[u[985]](re$q_3));
    }
});
import 'z888z888bfz888z888.js';
import 'z888z88811z888z888.js';
window[u[986]] = require(u[987]);
import 'z888INDz888z888.js';
import 'z888z888Iz8881z888z888.js';
import 'z888z888Mtadz888z888.js';
import 'z888z888INIz888az888.js';
console[u[960]](u[988]), console[u[960]](u[989]), x1A068({ 'title': u[990] });
var xbznxmt = { 'x1GA806': !![] };
new window[u[991]](xbznxmt), window[u[991]][u[992]][u[993]]();
if (window[u[994]]) clearInterval(window[u[994]]);
window[u[994]] = null, window[u[995]] = function (s_m$, d4w1o) {
    if (!s_m$ || !d4w1o) return 0x0;
    s_m$ = s_m$[u[201]]('.'), d4w1o = d4w1o[u[201]]('.');
    const pou10 = Math[u[301]](s_m$[u[31]], d4w1o[u[31]]);
    while (s_m$[u[31]] < pou10) {
        s_m$[u[66]]('0');
    }
    while (d4w1o[u[31]] < pou10) {
        d4w1o[u[66]]('0');
    }
    for (var xibzt = 0x0; xibzt < pou10; xibzt++) {
        const _rseq$ = parseInt(s_m$[xibzt]),
              w4d1u = parseInt(d4w1o[xibzt]);
        if (_rseq$ > w4d1u) return 0x1;else {
            if (_rseq$ < w4d1u) return -0x1;
        }
    }
    return 0x0;
}, window[u[996]] = wx[u[997]]()[u[996]], console[u[225]](u[998] + window[u[996]]);
var x_$sq = wx[u[999]]();
x_$sq[u[1000]](function (_mnr) {
    console[u[225]](u[1001] + _mnr[u[1002]]);
}), x_$sq[u[1003]](function () {
    wx[u[1004]]({
        'title': u[1005],
        'content': u[1006],
        'showCancel': ![],
        'success': function (bzsnmr) {
            x_$sq[u[1007]]();
        }
    });
}), x_$sq[u[1008]](function () {
    console[u[225]](u[1009]);
}), window[u[1010]] = function () {
    console[u[225]](u[1011]);
    var tizbx = wx[u[1012]]({
        'name': u[1013],
        'success': function ($r_mse) {
            console[u[225]](u[1014]), console[u[225]]($r_mse), $r_mse && $r_mse[u[1015]] == u[1016] ? (window[u[1017]] = !![], window[u[1018]](), window[u[1019]]()) : setTimeout(function () {
                window[u[1010]]();
            }, 0x1f4);
        },
        'fail': function (smzrn) {
            console[u[225]](u[1020]), console[u[225]](smzrn), setTimeout(function () {
                window[u[1010]]();
            }, 0x1f4);
        }
    });
    tizbx && tizbx[u[1021]](tyn => {});
}, window[u[1022]] = function () {
    console[u[225]](u[1023]);
    var rm_$e = wx[u[1012]]({
        'name': u[1024],
        'success': function (mse_$) {
            console[u[225]](u[1025]), console[u[225]](mse_$), mse_$ && mse_$[u[1015]] == u[1016] ? (window[u[1026]] = !![], window[u[1018]](), window[u[1019]]()) : setTimeout(function () {
                window[u[1022]]();
            }, 0x1f4);
        },
        'fail': function (l36v) {
            console[u[225]](u[1027]), console[u[225]](l36v), setTimeout(function () {
                window[u[1022]]();
            }, 0x1f4);
        }
    });
    rm_$e && rm_$e[u[1021]](fdko4 => {});
}, window[u[1028]] = function () {
    window[u[995]](window[u[996]], u[1029]) >= 0x0 ? (console[u[225]](u[1030] + window[u[996]] + u[1031]), window[u[1032]](), window[u[1010]](), window[u[1022]]()) : (window[u[1033]](u[1034], window[u[996]]), wx[u[1004]]({
        'title': u[1035],
        'content': u[1036]
    }));
}, window[u[981]] = '', wx[u[1037]]({
    'success'(bsnzt) {
        window[u[981]] = u[1038] + bsnzt[u[1039]] + u[1040] + bsnzt[u[1041]] + u[1042] + bsnzt[u[1043]] + u[1044] + bsnzt[u[1045]] + u[1046] + bsnzt[u[1047]] + u[1048] + bsnzt[u[996]] + u[1049] + bsnzt[u[1050]], console[u[225]](window[u[981]]), console[u[225]](u[1051] + bsnzt[u[1052]] + u[1053] + bsnzt[u[1054]] + u[1055] + bsnzt[u[1056]] + u[1057] + bsnzt[u[1058]] + u[1059] + bsnzt[u[1060]] + u[1061] + bsnzt[u[1062]] + u[1063] + (bsnzt[u[1064]] ? bsnzt[u[1064]][u[1065]] + ',' + bsnzt[u[1064]][u[1066]] + ',' + bsnzt[u[1064]][u[1067]] + ',' + bsnzt[u[1064]][u[1068]] : ''));
        var hbtxy = bsnzt[u[1045]] ? bsnzt[u[1045]][u[103]]() : '',
            lv8763 = bsnzt[u[1041]] ? bsnzt[u[1041]][u[103]]()[u[243]]('\x20', '') : '';
        window[u[971]][u[1069]] = hbtxy[u[146]](u[1070]) != -0x1, window[u[971]][u[1071]] = hbtxy[u[146]](u[1072]) != -0x1, window[u[971]][u[1073]] = hbtxy[u[146]](u[1070]) != -0x1 || hbtxy[u[146]](u[1072]) != -0x1, window[u[971]][u[1074]] = hbtxy[u[146]](u[1075]) != -0x1 || hbtxy[u[146]](u[1076]) != -0x1, window[u[971]][u[1077]] = bsnzt[u[1047]] ? bsnzt[u[1047]][u[103]]() : '', window[u[971]][u[1078]] = ![], window[u[971]][u[1079]] = 0x2;
        if (hbtxy[u[146]](u[1072]) != -0x1) {
            if (bsnzt[u[1050]] >= 0x18) window[u[971]][u[1079]] = 0x3;else window[u[971]][u[1079]] = 0x2;
        } else {
            if (hbtxy[u[146]](u[1070]) != -0x1) {
                if (bsnzt[u[1050]] && bsnzt[u[1050]] >= 0x14) window[u[971]][u[1079]] = 0x3;else {
                    if (lv8763[u[146]](u[1080]) != -0x1 || lv8763[u[146]](u[1081]) != -0x1 || lv8763[u[146]](u[1082]) != -0x1 || lv8763[u[146]](u[1083]) != -0x1 || lv8763[u[146]](u[1084]) != -0x1) window[u[971]][u[1079]] = 0x2;else window[u[971]][u[1079]] = 0x3;
                }
            } else window[u[971]][u[1079]] = 0x2;
        }
        console[u[225]](u[1085] + window[u[971]][u[1078]] + u[1086] + window[u[971]][u[1079]]);
    }
}), wx[u[1087]]({
    'success': function (du0wo1) {
        console[u[225]](u[1088] + du0wo1[u[1089]] + u[1090] + du0wo1[u[1091]]);
    }
}), wx[u[1092]]({
    'success': function (htxy2i) {
        console[u[225]](u[1093] + htxy2i[u[1094]]);
    }
}), wx[u[1095]]({ 'keepScreenOn': !![] }), wx[u[1096]](function (p190wg) {
    console[u[225]](u[1093] + p190wg[u[1094]] + u[1097] + p190wg[u[1098]]);
}), wx[u[1099]](function (bnzmrs) {
    window[u[1100]] = bnzmrs, window[u[1101]] && window[u[1100]] && (console[u[960]](u[1102] + window[u[1100]][u[1103]]), window[u[1101]](window[u[1100]]), window[u[1100]] = null);
}), window[u[1104]] = 0x0, window[u[1105]] = 0x0, window[u[1106]] = null, wx[u[1107]](function () {
    window[u[1105]]++;
    var nrm_s = Date[u[1108]]();
    (window[u[1104]] == 0x0 || nrm_s - window[u[1104]] > 0x1d4c0) && (console[u[383]](u[1109]), wx[u[1110]]());
    if (window[u[1105]] >= 0x2) {
        window[u[1105]] = 0x0, console[u[333]](u[1111]), wx[u[1112]]('0', 0x1);
        if (window[u[971]] && window[u[971]][u[1069]]) window[u[1033]](u[1113], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});