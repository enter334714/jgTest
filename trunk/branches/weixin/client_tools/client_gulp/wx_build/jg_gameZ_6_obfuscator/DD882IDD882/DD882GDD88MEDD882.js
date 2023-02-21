var G = wx.$E;
console[G[580000]](G[580001]), window[G[580002]], wx[G[580003]](function (gquh9a) {
    if (gquh9a) {
        if (gquh9a[G[580004]]) {
            var ypxlon = window[G[580005]][G[580006]][G[580007]](new RegExp(/\./, 'g'), '_'),
                fm8v7 = gquh9a[G[580004]],
                $65k4c = fm8v7[G[580008]](/(DD88DD88DD88DD88DD88\/DD882GDD88MEDD882.js:)[0-9]{1,60}(:)/g);
            if ($65k4c) for (var r8v = 0x0; r8v < $65k4c[G[580009]]; r8v++) {
                if ($65k4c[r8v] && $65k4c[r8v][G[580009]] > 0x0) {
                    var urqv9a = parseInt($65k4c[r8v][G[580007]](G[580010], '')[G[580007]](':', ''));
                    fm8v7 = fm8v7[G[580007]]($65k4c[r8v], $65k4c[r8v][G[580007]](':' + urqv9a + ':', ':' + (urqv9a - 0x2) + ':'));
                }
            }
            fm8v7 = fm8v7[G[580007]](new RegExp(G[580011], 'g'), G[580012] + ypxlon + G[580013]), fm8v7 = fm8v7[G[580007]](new RegExp(G[580014], 'g'), G[580012] + ypxlon + G[580013]), gquh9a[G[580004]] = fm8v7;
        }
        var dt1_ji = {
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
            'stack': gquh9a ? gquh9a[G[580004]] : ''
        },
            b4$6 = JSON[G[580026]](dt1_ji);
        console[G[580027]](G[580028] + b4$6), (!window[G[580002]] || window[G[580002]] != dt1_ji[G[580027]]) && (window[G[580002]] = dt1_ji[G[580027]], window[G[580029]](dt1_ji));
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
var E$5kd6j = { 'E1CD_R6': !![] };
new window[G[580035]](E$5kd6j), window[G[580035]][G[580036]][G[580037]]();
if (window[G[580038]]) clearInterval(window[G[580038]]);
window[G[580038]] = null, window[G[580039]] = function (nplgy, plgnh) {
    if (!nplgy || !plgnh) return 0x0;
    nplgy = nplgy[G[580040]]('.'), plgnh = plgnh[G[580040]]('.');
    const mbcf4 = Math[G[580041]](nplgy[G[580009]], plgnh[G[580009]]);
    while (nplgy[G[580009]] < mbcf4) {
        nplgy[G[580042]]('0');
    }
    while (plgnh[G[580009]] < mbcf4) {
        plgnh[G[580042]]('0');
    }
    for (var d_si = 0x0; d_si < mbcf4; d_si++) {
        const cmfb7 = parseInt(nplgy[d_si]),
              rq8v = parseInt(plgnh[d_si]);
        if (cmfb7 > rq8v) return 0x1;else {
            if (cmfb7 < rq8v) return -0x1;
        }
    }
    return 0x0;
}, window[G[580043]] = wx[G[580044]]()[G[580043]], console[G[580045]](G[580046] + window[G[580043]]);
var Ekdi65j = wx[G[580047]]();
Ekdi65j[G[580048]](function (ny9pg) {
    console[G[580045]](G[580049] + ny9pg[G[580050]]);
}), Ekdi65j[G[580051]](function () {
    wx[G[580052]]({
        'title': G[580053],
        'content': G[580054],
        'showCancel': ![],
        'success': function (pxnoly) {
            Ekdi65j[G[580055]]();
        }
    });
}), Ekdi65j[G[580056]](function () {
    console[G[580045]](G[580057]);
}), window[G[580058]] = function () {
    console[G[580045]](G[580059]);
    var dk6j$5 = wx[G[580060]]({
        'name': G[580061],
        'success': function (ckb46$) {
            console[G[580045]](G[580062]), console[G[580045]](ckb46$), ckb46$ && ckb46$[G[580063]] == G[580064] ? (window[G[580065]] = !![], window[G[580066]](), window[G[580067]]()) : setTimeout(function () {
                window[G[580058]]();
            }, 0x1f4);
        },
        'fail': function (fr78v) {
            console[G[580045]](G[580068]), console[G[580045]](fr78v), setTimeout(function () {
                window[G[580058]]();
            }, 0x1f4);
        }
    });
    dk6j$5 && dk6j$5[G[580069]](_t1sd => {});
}, window[G[580070]] = function () {
    console[G[580045]](G[580071]);
    var kbm4c$ = wx[G[580060]]({
        'name': G[580072],
        'success': function (it1_jd) {
            console[G[580045]](G[580073]), console[G[580045]](it1_jd), it1_jd && it1_jd[G[580063]] == G[580064] ? (window[G[580074]] = !![], window[G[580066]](), window[G[580067]]()) : setTimeout(function () {
                window[G[580070]]();
            }, 0x1f4);
        },
        'fail': function (aqv9ur) {
            console[G[580045]](G[580075]), console[G[580045]](aqv9ur), setTimeout(function () {
                window[G[580070]]();
            }, 0x1f4);
        }
    });
    kbm4c$ && kbm4c$[G[580069]](wfq8r => {});
}, window[G[580076]] = function () {
    window[G[580039]](window[G[580043]], G[580077]) >= 0x0 ? (console[G[580045]](G[580078] + window[G[580043]] + G[580079]), window[G[580080]](), window[G[580058]](), window[G[580070]]()) : (window[G[580081]](G[580082], window[G[580043]]), wx[G[580052]]({
        'title': G[580083],
        'content': G[580084]
    }));
}, window[G[580024]] = '', wx[G[580085]]({
    'success'(i_1sdt) {
        window[G[580024]] = G[580086] + i_1sdt[G[580087]] + G[580088] + i_1sdt[G[580089]] + G[580090] + i_1sdt[G[580091]] + G[580092] + i_1sdt[G[580093]] + G[580094] + i_1sdt[G[580095]] + G[580096] + i_1sdt[G[580043]] + G[580097] + i_1sdt[G[580098]], console[G[580045]](window[G[580024]]), console[G[580045]](G[580099] + i_1sdt[G[580100]] + G[580101] + i_1sdt[G[580102]] + G[580103] + i_1sdt[G[580104]] + G[580105] + i_1sdt[G[580106]] + G[580107] + i_1sdt[G[580108]] + G[580109] + i_1sdt[G[580110]] + G[580111] + (i_1sdt[G[580112]] ? i_1sdt[G[580112]][G[580113]] + ',' + i_1sdt[G[580112]][G[580114]] + ',' + i_1sdt[G[580112]][G[580115]] + ',' + i_1sdt[G[580112]][G[580116]] : ''));
        var rf7 = i_1sdt[G[580093]] ? i_1sdt[G[580093]][G[580117]]() : '',
            opxynl = i_1sdt[G[580089]] ? i_1sdt[G[580089]][G[580117]]()[G[580007]]('\x20', '') : '';
        window[G[580015]][G[580118]] = rf7[G[580119]](G[580120]) != -0x1, window[G[580015]][G[580121]] = rf7[G[580119]](G[580122]) != -0x1, window[G[580015]][G[580123]] = rf7[G[580119]](G[580120]) != -0x1 || rf7[G[580119]](G[580122]) != -0x1, window[G[580015]][G[580124]] = rf7[G[580119]](G[580125]) != -0x1 || rf7[G[580119]](G[580126]) != -0x1, window[G[580015]][G[580127]] = i_1sdt[G[580095]] ? i_1sdt[G[580095]][G[580117]]() : '', window[G[580015]][G[580128]] = ![], window[G[580015]][G[580129]] = 0x2;
        if (rf7[G[580119]](G[580122]) != -0x1) {
            if (i_1sdt[G[580098]] >= 0x18) window[G[580015]][G[580129]] = 0x3;else window[G[580015]][G[580129]] = 0x2;
        } else {
            if (rf7[G[580119]](G[580120]) != -0x1) {
                if (i_1sdt[G[580098]] && i_1sdt[G[580098]] >= 0x14) window[G[580015]][G[580129]] = 0x3;else {
                    if (opxynl[G[580119]](G[580130]) != -0x1 || opxynl[G[580119]](G[580131]) != -0x1 || opxynl[G[580119]](G[580132]) != -0x1 || opxynl[G[580119]](G[580133]) != -0x1 || opxynl[G[580119]](G[580134]) != -0x1) window[G[580015]][G[580129]] = 0x2;else window[G[580015]][G[580129]] = 0x3;
                }
            } else window[G[580015]][G[580129]] = 0x2;
        }
        console[G[580045]](G[580135] + window[G[580015]][G[580128]] + G[580136] + window[G[580015]][G[580129]]);
    }
}), wx[G[580137]]({
    'success': function (i1s_) {
        console[G[580045]](G[580138] + i1s_[G[580139]] + G[580140] + i1s_[G[580141]]);
    }
}), wx[G[580142]]({
    'success': function (k6cj) {
        console[G[580045]](G[580143] + k6cj[G[580144]]);
    }
}), wx[G[580145]]({ 'keepScreenOn': !![] }), wx[G[580146]](function (vaw8) {
    console[G[580045]](G[580143] + vaw8[G[580144]] + G[580147] + vaw8[G[580148]]);
}), wx[G[580149]](function (lpgx) {
    window[G[580150]] = lpgx, window[G[580151]] && window[G[580150]] && (console[G[580000]](G[580152] + window[G[580150]][G[580153]]), window[G[580151]](window[G[580150]]), window[G[580150]] = null);
}), window[G[580154]] = 0x0, window[G[580155]] = null, wx[G[580156]](function () {
    window[G[580154]]++, wx[G[580157]]();
    if (window[G[580154]] >= 0x2) {
        window[G[580154]] = 0x0, console[G[580027]](G[580158]), wx[G[580159]]('0', 0x1);
        if (window[G[580015]] && window[G[580015]][G[580118]]) window[G[580081]](G[580160], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});