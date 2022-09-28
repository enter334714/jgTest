var G = wx.$E;
console[G[580000]](G[580001]), window[G[580002]], wx[G[580003]](function (hurq9a) {
    if (hurq9a) {
        if (hurq9a[G[580004]]) {
            var uwvqa = window[G[580005]][G[580006]][G[580007]](new RegExp(/\./, 'g'), '_'),
                arw8q = hurq9a[G[580004]],
                yox = arw8q[G[580008]](/(DD88DD88DD88DD88DD88\/DD882GDD88MEDD882.js:)[0-9]{1,60}(:)/g);
            if (yox) for (var rhqa9 = 0x0; rhqa9 < yox[G[580009]]; rhqa9++) {
                if (yox[rhqa9] && yox[rhqa9][G[580009]] > 0x0) {
                    var isd_1t = parseInt(yox[rhqa9][G[580007]](G[580010], '')[G[580007]](':', ''));
                    arw8q = arw8q[G[580007]](yox[rhqa9], yox[rhqa9][G[580007]](':' + isd_1t + ':', ':' + (isd_1t - 0x2) + ':'));
                }
            }
            arw8q = arw8q[G[580007]](new RegExp(G[580011], 'g'), G[580012] + uwvqa + G[580013]), arw8q = arw8q[G[580007]](new RegExp(G[580014], 'g'), G[580012] + uwvqa + G[580013]), hurq9a[G[580004]] = arw8q;
        }
        var pgh9ua = {
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
            'stack': hurq9a ? hurq9a[G[580004]] : ''
        },
            idjk56 = JSON[G[580026]](pgh9ua);
        console[G[580027]](G[580028] + idjk56), (!window[G[580002]] || window[G[580002]] != pgh9ua[G[580027]]) && (window[G[580002]] = pgh9ua[G[580027]], window[G[580029]](pgh9ua));
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
var Em$cbk = { 'E1CD_R6': !![] };
new window[G[580035]](Em$cbk), window[G[580035]][G[580036]][G[580037]]();
if (window[G[580038]]) clearInterval(window[G[580038]]);
window[G[580038]] = null, window[G[580039]] = function (frvwq, kc6$4) {
    if (!frvwq || !kc6$4) return 0x0;
    frvwq = frvwq[G[580040]]('.'), kc6$4 = kc6$4[G[580040]]('.');
    const fmv78w = Math[G[580041]](frvwq[G[580009]], kc6$4[G[580009]]);
    while (frvwq[G[580009]] < fmv78w) {
        frvwq[G[580042]]('0');
    }
    while (kc6$4[G[580009]] < fmv78w) {
        kc6$4[G[580042]]('0');
    }
    for (var lnyxgp = 0x0; lnyxgp < fmv78w; lnyxgp++) {
        const ts_i12 = parseInt(frvwq[lnyxgp]),
              $k456 = parseInt(kc6$4[lnyxgp]);
        if (ts_i12 > $k456) return 0x1;else {
            if (ts_i12 < $k456) return -0x1;
        }
    }
    return 0x0;
}, window[G[580043]] = wx[G[580044]]()[G[580043]], console[G[580045]](G[580046] + window[G[580043]]);
var Elxngp = wx[G[580047]]();
Elxngp[G[580048]](function (rvqua9) {
    console[G[580045]](G[580049] + rvqua9[G[580050]]);
}), Elxngp[G[580051]](function () {
    wx[G[580052]]({
        'title': G[580053],
        'content': G[580054],
        'showCancel': ![],
        'success': function (m847) {
            Elxngp[G[580055]]();
        }
    });
}), Elxngp[G[580056]](function () {
    console[G[580045]](G[580057]);
}), window[G[580058]] = function () {
    console[G[580045]](G[580059]);
    var id_1tj = wx[G[580060]]({
        'name': G[580061],
        'success': function (qavw8r) {
            console[G[580045]](G[580062]), console[G[580045]](qavw8r), qavw8r && qavw8r[G[580063]] == G[580064] ? (window[G[580065]] = !![], window[G[580066]](), window[G[580067]]()) : setTimeout(function () {
                window[G[580058]]();
            }, 0x1f4);
        },
        'fail': function (xnylo) {
            console[G[580045]](G[580068]), console[G[580045]](xnylo), setTimeout(function () {
                window[G[580058]]();
            }, 0x1f4);
        }
    });
    id_1tj && id_1tj[G[580069]](xpngyl => {});
}, window[G[580070]] = function () {
    console[G[580045]](G[580071]);
    var d1j5i6 = wx[G[580060]]({
        'name': G[580072],
        'success': function (f78bw) {
            console[G[580045]](G[580073]), console[G[580045]](f78bw), f78bw && f78bw[G[580063]] == G[580064] ? (window[G[580074]] = !![], window[G[580066]](), window[G[580067]]()) : setTimeout(function () {
                window[G[580070]]();
            }, 0x1f4);
        },
        'fail': function (hpgy) {
            console[G[580045]](G[580075]), console[G[580045]](hpgy), setTimeout(function () {
                window[G[580070]]();
            }, 0x1f4);
        }
    });
    d1j5i6 && d1j5i6[G[580069]](hquar9 => {});
}, window[G[580076]] = function () {
    window[G[580039]](window[G[580043]], G[580077]) >= 0x0 ? (console[G[580045]](G[580078] + window[G[580043]] + G[580079]), window[G[580080]](), window[G[580058]](), window[G[580070]]()) : (window[G[580081]](G[580082], window[G[580043]]), wx[G[580052]]({
        'title': G[580083],
        'content': G[580084]
    }));
}, window[G[580024]] = '', wx[G[580085]]({
    'success'(vw8mf) {
        window[G[580024]] = G[580086] + vw8mf[G[580087]] + G[580088] + vw8mf[G[580089]] + G[580090] + vw8mf[G[580091]] + G[580092] + vw8mf[G[580093]] + G[580094] + vw8mf[G[580095]] + G[580096] + vw8mf[G[580043]] + G[580097] + vw8mf[G[580098]], console[G[580045]](window[G[580024]]), console[G[580045]](G[580099] + vw8mf[G[580100]] + G[580101] + vw8mf[G[580102]] + G[580103] + vw8mf[G[580104]] + G[580105] + vw8mf[G[580106]] + G[580107] + vw8mf[G[580108]] + G[580109] + vw8mf[G[580110]] + G[580111] + (vw8mf[G[580112]] ? vw8mf[G[580112]][G[580113]] + ',' + vw8mf[G[580112]][G[580114]] + ',' + vw8mf[G[580112]][G[580115]] + ',' + vw8mf[G[580112]][G[580116]] : ''));
        var t3sz20 = vw8mf[G[580093]] ? vw8mf[G[580093]][G[580117]]() : '',
            ghaup = vw8mf[G[580089]] ? vw8mf[G[580089]][G[580117]]()[G[580007]]('\x20', '') : '';
        window[G[580015]][G[580118]] = t3sz20[G[580119]](G[580120]) != -0x1, window[G[580015]][G[580121]] = t3sz20[G[580119]](G[580122]) != -0x1, window[G[580015]][G[580123]] = t3sz20[G[580119]](G[580120]) != -0x1 || t3sz20[G[580119]](G[580122]) != -0x1, window[G[580015]][G[580124]] = t3sz20[G[580119]](G[580125]) != -0x1 || t3sz20[G[580119]](G[580126]) != -0x1, window[G[580015]][G[580127]] = vw8mf[G[580095]] ? vw8mf[G[580095]][G[580117]]() : '', window[G[580015]][G[580128]] = ![], window[G[580015]][G[580129]] = 0x2;
        if (t3sz20[G[580119]](G[580122]) != -0x1) {
            if (vw8mf[G[580098]] >= 0x18) window[G[580015]][G[580129]] = 0x3;else window[G[580015]][G[580129]] = 0x2;
        } else {
            if (t3sz20[G[580119]](G[580120]) != -0x1) {
                if (vw8mf[G[580098]] && vw8mf[G[580098]] >= 0x14) window[G[580015]][G[580129]] = 0x3;else {
                    if (ghaup[G[580119]](G[580130]) != -0x1 || ghaup[G[580119]](G[580131]) != -0x1 || ghaup[G[580119]](G[580132]) != -0x1 || ghaup[G[580119]](G[580133]) != -0x1 || ghaup[G[580119]](G[580134]) != -0x1) window[G[580015]][G[580129]] = 0x2;else window[G[580015]][G[580129]] = 0x3;
                }
            } else window[G[580015]][G[580129]] = 0x2;
        }
        console[G[580045]](G[580135] + window[G[580015]][G[580128]] + G[580136] + window[G[580015]][G[580129]]);
    }
}), wx[G[580137]]({
    'success': function (fbc74) {
        console[G[580045]](G[580138] + fbc74[G[580139]] + G[580140] + fbc74[G[580141]]);
    }
}), wx[G[580142]]({
    'success': function (_d1) {
        console[G[580045]](G[580143] + _d1[G[580144]]);
    }
}), wx[G[580145]]({ 'keepScreenOn': !![] }), wx[G[580146]](function (auh9qr) {
    console[G[580045]](G[580143] + auh9qr[G[580144]] + G[580147] + auh9qr[G[580148]]);
}), wx[G[580149]](function (uhq9ag) {
    window[G[580150]] = uhq9ag, window[G[580151]] && window[G[580150]] && (console[G[580000]](G[580152] + window[G[580150]][G[580153]]), window[G[580151]](window[G[580150]]), window[G[580150]] = null);
}), window[G[580154]] = 0x0, window[G[580155]] = null, wx[G[580156]](function () {
    window[G[580154]]++, wx[G[580157]]();
    if (window[G[580154]] >= 0x2) {
        window[G[580154]] = 0x0, console[G[580027]](G[580158]), wx[G[580159]]('0', 0x1);
        if (window[G[580015]] && window[G[580015]][G[580118]]) window[G[580081]](G[580160], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});