var G = wx.$E;
console[G[580000]](G[580001]), window[G[580002]], wx[G[580003]](function (p9hga) {
    if (p9hga) {
        if (p9hga[G[580004]]) {
            var auqvr = window[G[580005]][G[580006]][G[580007]](new RegExp(/\./, 'g'), '_'),
                ahq9 = p9hga[G[580004]],
                b7m8wf = ahq9[G[580008]](/(DD88DD88DD88DD88DD88\/DD882GDD88MEDD882.js:)[0-9]{1,60}(:)/g);
            if (b7m8wf) for (var h9auqg = 0x0; h9auqg < b7m8wf[G[580009]]; h9auqg++) {
                if (b7m8wf[h9auqg] && b7m8wf[h9auqg][G[580009]] > 0x0) {
                    var t21_s = parseInt(b7m8wf[h9auqg][G[580007]](G[580010], '')[G[580007]](':', ''));
                    ahq9 = ahq9[G[580007]](b7m8wf[h9auqg], b7m8wf[h9auqg][G[580007]](':' + t21_s + ':', ':' + (t21_s - 0x2) + ':'));
                }
            }
            ahq9 = ahq9[G[580007]](new RegExp(G[580011], 'g'), G[580012] + auqvr + G[580013]), ahq9 = ahq9[G[580007]](new RegExp(G[580014], 'g'), G[580012] + auqvr + G[580013]), p9hga[G[580004]] = ahq9;
        }
        var i16dj = {
            'id': window[G[580015]][G[580016]],
            'role': window[G[580015]][G[580017]],
            'level': window[G[580015]][G[580018]],
            'user': window[G[580015]][G[580019]],
            'version': window[G[580015]][G[580020]],
            'gamever': window[G[580005]][G[580006]],
            'cdn': window[G[580015]][G[580021]],
            'serverid': window[G[580015]][G[580022]] ? window[G[580015]][G[580022]][G[580023]] : 0x0,
            'systemInfo': window[G[580024]],
            'error': G[580025],
            'stack': p9hga ? p9hga[G[580004]] : ''
        },
            cmb7$ = JSON[G[580026]](i16dj);
        console[G[580027]](G[580028] + cmb7$), (!window[G[580002]] || window[G[580002]] != i16dj[G[580027]]) && (window[G[580002]] = i16dj[G[580027]], window[G[580029]](i16dj));
    }
});
import 'DD88DD88bfDD88DD88.js';
import 'DD88DD8811DD88DD88.js';
window[G[580030]] = require(G[580031]);
import 'DD88INDDD88DD88.js';
import 'DD88DD88IDD881DD88DD88.js';
import 'DD88DD88MtadDD88DD88.js';
import 'DD88DD88INIDD88aDD88.js';
console[G[580000]](G[580032]), console[G[580000]](G[580033]), E1DR6_({ 'title': G[580034] });
var Ef8m7w = { 'E1CD_R6': !![] };
new window[G[580035]](Ef8m7w), window[G[580035]][G[580036]][G[580037]]();
if (window[G[580038]]) clearInterval(window[G[580038]]);
window[G[580038]] = null, window[G[580039]] = function (_tdj1, pyhg9n) {
    if (!_tdj1 || !pyhg9n) return 0x0;
    _tdj1 = _tdj1[G[580040]]('.'), pyhg9n = pyhg9n[G[580040]]('.');
    const lyxngp = Math[G[580041]](_tdj1[G[580009]], pyhg9n[G[580009]]);
    while (_tdj1[G[580009]] < lyxngp) {
        _tdj1[G[580042]]('0');
    }
    while (pyhg9n[G[580009]] < lyxngp) {
        pyhg9n[G[580042]]('0');
    }
    for (var kc56$4 = 0x0; kc56$4 < lyxngp; kc56$4++) {
        const vqrf = parseInt(_tdj1[kc56$4]),
              xnlpy = parseInt(pyhg9n[kc56$4]);
        if (vqrf > xnlpy) return 0x1;else {
            if (vqrf < xnlpy) return -0x1;
        }
    }
    return 0x0;
}, window[G[580043]] = wx[G[580044]]()[G[580043]], console[G[580045]](G[580046] + window[G[580043]]);
var E$b4cm = wx[G[580047]]();
E$b4cm[G[580048]](function (s3_t) {
    console[G[580045]](G[580049] + s3_t[G[580050]]);
}), E$b4cm[G[580051]](function () {
    wx[G[580052]]({
        'title': G[580053],
        'content': G[580054],
        'showCancel': ![],
        'success': function (hgy9pn) {
            E$b4cm[G[580055]]();
        }
    });
}), E$b4cm[G[580056]](function () {
    console[G[580045]](G[580057]);
}), window[G[580058]] = function () {
    console[G[580045]](G[580059]);
    var g9ypnh = wx[G[580060]]({
        'name': G[580061],
        'success': function (ah9uqr) {
            console[G[580045]](G[580062]), console[G[580045]](ah9uqr), ah9uqr && ah9uqr[G[580063]] == G[580064] ? (window[G[580065]] = !![], window[G[580066]](), window[G[580067]]()) : setTimeout(function () {
                window[G[580058]]();
            }, 0x1f4);
        },
        'fail': function (gnxyl) {
            console[G[580045]](G[580068]), console[G[580045]](gnxyl), setTimeout(function () {
                window[G[580058]]();
            }, 0x1f4);
        }
    });
    g9ypnh && g9ypnh[G[580069]](p9hn => {});
}, window[G[580070]] = function () {
    console[G[580045]](G[580071]);
    var yxgl = wx[G[580060]]({
        'name': G[580072],
        'success': function (jck) {
            console[G[580045]](G[580073]), console[G[580045]](jck), jck && jck[G[580063]] == G[580064] ? (window[G[580074]] = !![], window[G[580066]](), window[G[580067]]()) : setTimeout(function () {
                window[G[580070]]();
            }, 0x1f4);
        },
        'fail': function (k5d6$) {
            console[G[580045]](G[580075]), console[G[580045]](k5d6$), setTimeout(function () {
                window[G[580070]]();
            }, 0x1f4);
        }
    });
    yxgl && yxgl[G[580069]](c47m$b => {});
}, window[G[580076]] = function () {
    window[G[580039]](window[G[580043]], G[580077]) >= 0x0 ? (console[G[580045]](G[580078] + window[G[580043]] + G[580079]), window[G[580080]](), window[G[580058]](), window[G[580070]]()) : (window[G[580081]](G[580082], window[G[580043]]), wx[G[580052]]({
        'title': G[580083],
        'content': G[580084]
    }));
}, window[G[580024]] = '', wx[G[580085]]({
    'success'(w8fm7v) {
        window[G[580024]] = G[580086] + w8fm7v[G[580087]] + G[580088] + w8fm7v[G[580089]] + G[580090] + w8fm7v[G[580091]] + G[580092] + w8fm7v[G[580093]] + G[580094] + w8fm7v[G[580095]] + G[580096] + w8fm7v[G[580043]] + G[580097] + w8fm7v[G[580098]], console[G[580045]](window[G[580024]]), console[G[580045]](G[580099] + w8fm7v[G[580100]] + G[580101] + w8fm7v[G[580102]] + G[580103] + w8fm7v[G[580104]] + G[580105] + w8fm7v[G[580106]] + G[580107] + w8fm7v[G[580108]] + G[580109] + w8fm7v[G[580110]] + G[580111] + (w8fm7v[G[580112]] ? w8fm7v[G[580112]][G[580113]] + ',' + w8fm7v[G[580112]][G[580114]] + ',' + w8fm7v[G[580112]][G[580115]] + ',' + w8fm7v[G[580112]][G[580116]] : ''));
        var gny9hp = w8fm7v[G[580093]] ? w8fm7v[G[580093]][G[580117]]() : '',
            j_1i5 = w8fm7v[G[580089]] ? w8fm7v[G[580089]][G[580117]]()[G[580007]]('\x20', '') : '';
        window[G[580015]][G[580118]] = gny9hp[G[580119]](G[580120]) != -0x1, window[G[580015]][G[580121]] = gny9hp[G[580119]](G[580122]) != -0x1, window[G[580015]][G[580123]] = gny9hp[G[580119]](G[580120]) != -0x1 || gny9hp[G[580119]](G[580122]) != -0x1, window[G[580015]][G[580124]] = gny9hp[G[580119]](G[580125]) != -0x1 || gny9hp[G[580119]](G[580126]) != -0x1, window[G[580015]][G[580127]] = w8fm7v[G[580095]] ? w8fm7v[G[580095]][G[580117]]() : '', window[G[580015]][G[580128]] = ![], window[G[580015]][G[580129]] = 0x2;
        if (gny9hp[G[580119]](G[580122]) != -0x1) {
            if (w8fm7v[G[580098]] >= 0x18) window[G[580015]][G[580129]] = 0x3;else window[G[580015]][G[580129]] = 0x2;
        } else {
            if (gny9hp[G[580119]](G[580120]) != -0x1) {
                if (w8fm7v[G[580098]] && w8fm7v[G[580098]] >= 0x14) window[G[580015]][G[580129]] = 0x3;else {
                    if (j_1i5[G[580119]](G[580130]) != -0x1 || j_1i5[G[580119]](G[580131]) != -0x1 || j_1i5[G[580119]](G[580132]) != -0x1 || j_1i5[G[580119]](G[580133]) != -0x1 || j_1i5[G[580119]](G[580134]) != -0x1) window[G[580015]][G[580129]] = 0x2;else window[G[580015]][G[580129]] = 0x3;
                }
            } else window[G[580015]][G[580129]] = 0x2;
        }
        console[G[580045]](G[580135] + window[G[580015]][G[580128]] + G[580136] + window[G[580015]][G[580129]]);
    }
}), wx[G[580137]]({
    'success': function (i651dj) {
        console[G[580045]](G[580138] + i651dj[G[580139]] + G[580140] + i651dj[G[580141]]);
    }
}), wx[G[580142]]({
    'success': function (_ditj1) {
        console[G[580045]](G[580143] + _ditj1[G[580144]]);
    }
}), wx[G[580145]]({ 'keepScreenOn': !![] }), wx[G[580146]](function (phnlg) {
    console[G[580045]](G[580143] + phnlg[G[580144]] + G[580147] + phnlg[G[580148]]);
}), wx[G[580149]](function (d5i6) {
    window[G[580150]] = d5i6, window[G[580151]] && window[G[580150]] && (console[G[580000]](G[580152] + window[G[580150]][G[580153]]), window[G[580151]](window[G[580150]]), window[G[580150]] = null);
}), window[G[580154]] = 0x0, window[G[580155]] = null, wx[G[580156]](function () {
    window[G[580154]]++, wx[G[580157]]();
    if (window[G[580154]] >= 0x2) {
        window[G[580154]] = 0x0, console[G[580027]](G[580158]), wx[G[580159]]('0', 0x1);
        if (window[G[580015]] && window[G[580015]][G[580118]]) window[G[580081]](G[580160], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});