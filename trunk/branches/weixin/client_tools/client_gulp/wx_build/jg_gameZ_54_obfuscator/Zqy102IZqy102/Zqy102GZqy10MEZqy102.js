var J = wx.h$;
console[J[960]](J[961]), window[J[962]], wx[J[963]](function (lm3a4u) {
    if (lm3a4u) {
        if (lm3a4u[J[56]]) {
            var i7jnxv = window[J[964]][J[965]][J[243]](new RegExp(/\./, 'g'), '_'),
                cd6kg = lm3a4u[J[56]],
                ryjv = cd6kg[J[67]](/(Zqy10Zqy10Zqy10Zqy10Zqy10\/Zqy102GZqy10MEZqy102.js:)[0-9]{1,60}(:)/g);
            if (ryjv) for (var z6hct8 = 0x0; z6hct8 < ryjv[J[31]]; z6hct8++) {
                if (ryjv[z6hct8] && ryjv[z6hct8][J[31]] > 0x0) {
                    var _wf92 = parseInt(ryjv[z6hct8][J[243]](J[966], '')[J[243]](':', ''));
                    cd6kg = cd6kg[J[243]](ryjv[z6hct8], ryjv[z6hct8][J[243]](':' + _wf92 + ':', ':' + (_wf92 - 0x2) + ':'));
                }
            }
            cd6kg = cd6kg[J[243]](new RegExp(J[967], 'g'), J[968] + i7jnxv + J[969]), cd6kg = cd6kg[J[243]](new RegExp(J[970], 'g'), J[968] + i7jnxv + J[969]), lm3a4u[J[56]] = cd6kg;
        }
        var a4lu1 = {
            'id': window[J[971]][J[972]],
            'role': window[J[971]][J[973]],
            'level': window[J[971]][J[974]],
            'user': window[J[971]][J[975]],
            'version': window[J[971]][J[976]],
            'cdn': window[J[971]][J[977]],
            'pkgName': window[J[971]][J[978]],
            'gamever': window[J[964]][J[965]],
            'serverid': window[J[971]][J[979]] ? window[J[971]][J[979]][J[980]] : 0x0,
            'systemInfo': window[J[981]],
            'error': J[982],
            'stack': lm3a4u ? lm3a4u[J[56]] : ''
        },
            czh8t = JSON[J[983]](a4lu1);
        console[J[333]](J[984] + czh8t), (!window[J[962]] || window[J[962]] != a4lu1[J[333]]) && (window[J[962]] = a4lu1[J[333]], window[J[985]](a4lu1));
    }
});
import 'Zqy10Zqy10bfZqy10Zqy10.js';
import 'Zqy10Zqy1011Zqy10Zqy10.js';
window[J[986]] = require(J[987]);
import 'Zqy10INDZqy10Zqy10.js';
import 'Zqy10Zqy10IZqy101Zqy10Zqy10.js';
import 'Zqy10Zqy10MtadZqy10Zqy10.js';
import 'Zqy10Zqy10INIZqy10aZqy10.js';
console[J[960]](J[988]), console[J[960]](J[989]), J15QJ4({ 'title': J[990] });
var gw9_f2p = { 'J1G54QJ': !![] };
new window[J[991]](gw9_f2p), window[J[991]][J[992]][J[993]]();
if (window[J[994]]) clearInterval(window[J[994]]);
window[J[994]] = null, window[J[995]] = function (q05bkg, w9_2e) {
    if (!q05bkg || !w9_2e) return 0x0;
    q05bkg = q05bkg[J[201]]('.'), w9_2e = w9_2e[J[201]]('.');
    const _pth = Math[J[301]](q05bkg[J[31]], w9_2e[J[31]]);
    while (q05bkg[J[31]] < _pth) {
        q05bkg[J[66]]('0');
    }
    while (w9_2e[J[31]] < _pth) {
        w9_2e[J[66]]('0');
    }
    for (var cz8hte = 0x0; cz8hte < _pth; cz8hte++) {
        const _z2ew = parseInt(q05bkg[cz8hte]),
              oy7rvj = parseInt(w9_2e[cz8hte]);
        if (_z2ew > oy7rvj) return 0x1;else {
            if (_z2ew < oy7rvj) return -0x1;
        }
    }
    return 0x0;
}, window[J[996]] = wx[J[997]]()[J[996]], console[J[225]](J[998] + window[J[996]]);
var g_ehpz = wx[J[999]]();
g_ehpz[J[1000]](function (he_ptz) {
    console[J[225]](J[1001] + he_ptz[J[1002]]);
}), g_ehpz[J[1003]](function () {
    wx[J[1004]]({
        'title': J[1005],
        'content': J[1006],
        'showCancel': ![],
        'success': function (xvnji7) {
            g_ehpz[J[1007]]();
        }
    });
}), g_ehpz[J[1008]](function () {
    console[J[225]](J[1009]);
}), window[J[1010]] = function () {
    console[J[225]](J[1011]);
    var $2_9 = wx[J[1012]]({
        'name': J[1013],
        'success': function (nix7j) {
            console[J[225]](J[1014]), console[J[225]](nix7j), nix7j && nix7j[J[1015]] == J[1016] ? (window[J[1017]] = !![], window[J[1018]](), window[J[1019]]()) : setTimeout(function () {
                window[J[1010]]();
            }, 0x1f4);
        },
        'fail': function (iv7n) {
            console[J[225]](J[1020]), console[J[225]](iv7n), setTimeout(function () {
                window[J[1010]]();
            }, 0x1f4);
        }
    });
    $2_9 && $2_9[J[1021]](kqgb => {});
}, window[J[1022]] = function () {
    console[J[225]](J[1023]);
    var eczph = wx[J[1012]]({
        'name': J[1024],
        'success': function (oj7rv) {
            console[J[225]](J[1025]), console[J[225]](oj7rv), oj7rv && oj7rv[J[1015]] == J[1016] ? (window[J[1026]] = !![], window[J[1018]](), window[J[1019]]()) : setTimeout(function () {
                window[J[1022]]();
            }, 0x1f4);
        },
        'fail': function (f9p2) {
            console[J[225]](J[1027]), console[J[225]](f9p2), setTimeout(function () {
                window[J[1022]]();
            }, 0x1f4);
        }
    });
    eczph && eczph[J[1021]](i3 => {});
}, window[J[1028]] = function () {
    window[J[995]](window[J[996]], J[1029]) >= 0x0 ? (console[J[225]](J[1030] + window[J[996]] + J[1031]), window[J[1032]](), window[J[1010]](), window[J[1022]]()) : (window[J[1033]](J[1034], window[J[996]]), wx[J[1004]]({
        'title': J[1035],
        'content': J[1036]
    }));
}, window[J[981]] = '', wx[J[1037]]({
    'success'(w9$sf2) {
        window[J[981]] = J[1038] + w9$sf2[J[1039]] + J[1040] + w9$sf2[J[1041]] + J[1042] + w9$sf2[J[1043]] + J[1044] + w9$sf2[J[1045]] + J[1046] + w9$sf2[J[1047]] + J[1048] + w9$sf2[J[996]] + J[1049] + w9$sf2[J[1050]], console[J[225]](window[J[981]]), console[J[225]](J[1051] + w9$sf2[J[1052]] + J[1053] + w9$sf2[J[1054]] + J[1055] + w9$sf2[J[1056]] + J[1057] + w9$sf2[J[1058]] + J[1059] + w9$sf2[J[1060]] + J[1061] + w9$sf2[J[1062]] + J[1063] + (w9$sf2[J[1064]] ? w9$sf2[J[1064]][J[1065]] + ',' + w9$sf2[J[1064]][J[1066]] + ',' + w9$sf2[J[1064]][J[1067]] + ',' + w9$sf2[J[1064]][J[1068]] : ''));
        var oqy5rv = w9$sf2[J[1045]] ? w9$sf2[J[1045]][J[103]]() : '',
            qdkg0 = w9$sf2[J[1041]] ? w9$sf2[J[1041]][J[103]]()[J[243]]('\x20', '') : '';
        window[J[971]][J[1069]] = oqy5rv[J[146]](J[1070]) != -0x1, window[J[971]][J[1071]] = oqy5rv[J[146]](J[1072]) != -0x1, window[J[971]][J[1073]] = oqy5rv[J[146]](J[1070]) != -0x1 || oqy5rv[J[146]](J[1072]) != -0x1, window[J[971]][J[1074]] = oqy5rv[J[146]](J[1075]) != -0x1 || oqy5rv[J[146]](J[1076]) != -0x1, window[J[971]][J[1077]] = w9$sf2[J[1047]] ? w9$sf2[J[1047]][J[103]]() : '', window[J[971]][J[1078]] = ![], window[J[971]][J[1079]] = 0x2;
        if (oqy5rv[J[146]](J[1072]) != -0x1) {
            if (w9$sf2[J[1050]] >= 0x18) window[J[971]][J[1079]] = 0x3;else window[J[971]][J[1079]] = 0x2;
        } else {
            if (oqy5rv[J[146]](J[1070]) != -0x1) {
                if (w9$sf2[J[1050]] && w9$sf2[J[1050]] >= 0x14) window[J[971]][J[1079]] = 0x3;else {
                    if (qdkg0[J[146]](J[1080]) != -0x1 || qdkg0[J[146]](J[1081]) != -0x1 || qdkg0[J[146]](J[1082]) != -0x1 || qdkg0[J[146]](J[1083]) != -0x1 || qdkg0[J[146]](J[1084]) != -0x1) window[J[971]][J[1079]] = 0x2;else window[J[971]][J[1079]] = 0x3;
                }
            } else window[J[971]][J[1079]] = 0x2;
        }
        console[J[225]](J[1085] + window[J[971]][J[1078]] + J[1086] + window[J[971]][J[1079]]);
    }
}), wx[J[1087]]({
    'success': function (una431) {
        console[J[225]](J[1088] + una431[J[1089]] + J[1090] + una431[J[1091]]);
    }
}), wx[J[1092]]({
    'success': function (x17i4n) {
        console[J[225]](J[1093] + x17i4n[J[1094]]);
    }
}), wx[J[1095]]({ 'keepScreenOn': !![] }), wx[J[1096]](function (p2ew9_) {
    console[J[225]](J[1093] + p2ew9_[J[1094]] + J[1097] + p2ew9_[J[1098]]);
}), wx[J[1099]](function (_e2zpw) {
    window[J[1100]] = _e2zpw, window[J[1101]] && window[J[1100]] && (console[J[960]](J[1102] + window[J[1100]][J[1103]]), window[J[1101]](window[J[1100]]), window[J[1100]] = null);
}), window[J[1104]] = 0x0, window[J[1105]] = 0x0, window[J[1106]] = null, wx[J[1107]](function () {
    window[J[1105]]++;
    var f9$2ws = Date[J[1108]]();
    (window[J[1104]] == 0x0 || f9$2ws - window[J[1104]] > 0x1d4c0) && (console[J[383]](J[1109]), wx[J[1110]]());
    if (window[J[1105]] >= 0x2) {
        window[J[1105]] = 0x0, console[J[333]](J[1111]), wx[J[1112]]('0', 0x1);
        if (window[J[971]] && window[J[971]][J[1069]]) window[J[1033]](J[1113], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});