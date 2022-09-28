var G = wx.$E;
console[G[580000]](G[580001]), window[G[580002]], wx[G[580003]](function (hug9p) {
    if (hug9p) {
        if (hug9p[G[580004]]) {
            var z23t0s = window[G[580005]][G[580006]][G[580007]](new RegExp(/\./, 'g'), '_'),
                t1i_2 = hug9p[G[580004]],
                yh9upg = t1i_2[G[580008]](/(DD88DD88DD88DD88DD88\/DD882GDD88MEDD882.js:)[0-9]{1,60}(:)/g);
            if (yh9upg) for (var nyphg9 = 0x0; nyphg9 < yh9upg[G[580009]]; nyphg9++) {
                if (yh9upg[nyphg9] && yh9upg[nyphg9][G[580009]] > 0x0) {
                    var std1i = parseInt(yh9upg[nyphg9][G[580007]](G[580010], '')[G[580007]](':', ''));
                    t1i_2 = t1i_2[G[580007]](yh9upg[nyphg9], yh9upg[nyphg9][G[580007]](':' + std1i + ':', ':' + (std1i - 0x2) + ':'));
                }
            }
            t1i_2 = t1i_2[G[580007]](new RegExp(G[580011], 'g'), G[580012] + z23t0s + G[580013]), t1i_2 = t1i_2[G[580007]](new RegExp(G[580014], 'g'), G[580012] + z23t0s + G[580013]), hug9p[G[580004]] = t1i_2;
        }
        var i_5j1 = {
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
            'stack': hug9p ? hug9p[G[580004]] : ''
        },
            d65j1 = JSON[G[580026]](i_5j1);
        console[G[580027]](G[580028] + d65j1), (!window[G[580002]] || window[G[580002]] != i_5j1[G[580027]]) && (window[G[580002]] = i_5j1[G[580027]], window[G[580029]](i_5j1));
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
var Eb4$7c = { 'E1CD_R6': !![] };
new window[G[580035]](Eb4$7c), window[G[580035]][G[580036]][G[580037]]();
if (window[G[580038]]) clearInterval(window[G[580038]]);
window[G[580038]] = null, window[G[580039]] = function (fm487, qruwva) {
    if (!fm487 || !qruwva) return 0x0;
    fm487 = fm487[G[580040]]('.'), qruwva = qruwva[G[580040]]('.');
    const bc = Math[G[580041]](fm487[G[580009]], qruwva[G[580009]]);
    while (fm487[G[580009]] < bc) {
        fm487[G[580042]]('0');
    }
    while (qruwva[G[580009]] < bc) {
        qruwva[G[580042]]('0');
    }
    for (var jki5d = 0x0; jki5d < bc; jki5d++) {
        const agh9qu = parseInt(fm487[jki5d]),
              vqwf = parseInt(qruwva[jki5d]);
        if (agh9qu > vqwf) return 0x1;else {
            if (agh9qu < vqwf) return -0x1;
        }
    }
    return 0x0;
}, window[G[580043]] = wx[G[580044]]()[G[580043]], console[G[580045]](G[580046] + window[G[580043]]);
var Ebck = wx[G[580047]]();
Ebck[G[580048]](function (z2s0) {
    console[G[580045]](G[580049] + z2s0[G[580050]]);
}), Ebck[G[580051]](function () {
    wx[G[580052]]({
        'title': G[580053],
        'content': G[580054],
        'showCancel': ![],
        'success': function (uygh9p) {
            Ebck[G[580055]]();
        }
    });
}), Ebck[G[580056]](function () {
    console[G[580045]](G[580057]);
}), window[G[580058]] = function () {
    console[G[580045]](G[580059]);
    var $4b6 = wx[G[580060]]({
        'name': G[580061],
        'success': function (m8fb) {
            console[G[580045]](G[580062]), console[G[580045]](m8fb), m8fb && m8fb[G[580063]] == G[580064] ? (window[G[580065]] = !![], window[G[580066]](), window[G[580067]]()) : setTimeout(function () {
                window[G[580058]]();
            }, 0x1f4);
        },
        'fail': function (c5j6$k) {
            console[G[580045]](G[580068]), console[G[580045]](c5j6$k), setTimeout(function () {
                window[G[580058]]();
            }, 0x1f4);
        }
    });
    $4b6 && $4b6[G[580069]](rw78 => {});
}, window[G[580070]] = function () {
    console[G[580045]](G[580071]);
    var s203_t = wx[G[580060]]({
        'name': G[580072],
        'success': function (p9hng) {
            console[G[580045]](G[580073]), console[G[580045]](p9hng), p9hng && p9hng[G[580063]] == G[580064] ? (window[G[580074]] = !![], window[G[580066]](), window[G[580067]]()) : setTimeout(function () {
                window[G[580070]]();
            }, 0x1f4);
        },
        'fail': function (ahqug9) {
            console[G[580045]](G[580075]), console[G[580045]](ahqug9), setTimeout(function () {
                window[G[580070]]();
            }, 0x1f4);
        }
    });
    s203_t && s203_t[G[580069]](_s3t12 => {});
}, window[G[580076]] = function () {
    window[G[580039]](window[G[580043]], G[580077]) >= 0x0 ? (console[G[580045]](G[580078] + window[G[580043]] + G[580079]), window[G[580080]](), window[G[580058]](), window[G[580070]]()) : (window[G[580081]](G[580082], window[G[580043]]), wx[G[580052]]({
        'title': G[580083],
        'content': G[580084]
    }));
}, window[G[580024]] = '', wx[G[580085]]({
    'success'(nygh) {
        window[G[580024]] = G[580086] + nygh[G[580087]] + G[580088] + nygh[G[580089]] + G[580090] + nygh[G[580091]] + G[580092] + nygh[G[580093]] + G[580094] + nygh[G[580095]] + G[580096] + nygh[G[580043]] + G[580097] + nygh[G[580098]], console[G[580045]](window[G[580024]]), console[G[580045]](G[580099] + nygh[G[580100]] + G[580101] + nygh[G[580102]] + G[580103] + nygh[G[580104]] + G[580105] + nygh[G[580106]] + G[580107] + nygh[G[580108]] + G[580109] + nygh[G[580110]] + G[580111] + (nygh[G[580112]] ? nygh[G[580112]][G[580113]] + ',' + nygh[G[580112]][G[580114]] + ',' + nygh[G[580112]][G[580115]] + ',' + nygh[G[580112]][G[580116]] : ''));
        var ga9pu = nygh[G[580093]] ? nygh[G[580093]][G[580117]]() : '',
            ravwq = nygh[G[580089]] ? nygh[G[580089]][G[580117]]()[G[580007]]('\x20', '') : '';
        window[G[580015]][G[580118]] = ga9pu[G[580119]](G[580120]) != -0x1, window[G[580015]][G[580121]] = ga9pu[G[580119]](G[580122]) != -0x1, window[G[580015]][G[580123]] = ga9pu[G[580119]](G[580120]) != -0x1 || ga9pu[G[580119]](G[580122]) != -0x1, window[G[580015]][G[580124]] = ga9pu[G[580119]](G[580125]) != -0x1 || ga9pu[G[580119]](G[580126]) != -0x1, window[G[580015]][G[580127]] = nygh[G[580095]] ? nygh[G[580095]][G[580117]]() : '', window[G[580015]][G[580128]] = ![], window[G[580015]][G[580129]] = 0x2;
        if (ga9pu[G[580119]](G[580122]) != -0x1) {
            if (nygh[G[580098]] >= 0x18) window[G[580015]][G[580129]] = 0x3;else window[G[580015]][G[580129]] = 0x2;
        } else {
            if (ga9pu[G[580119]](G[580120]) != -0x1) {
                if (nygh[G[580098]] && nygh[G[580098]] >= 0x14) window[G[580015]][G[580129]] = 0x3;else {
                    if (ravwq[G[580119]](G[580130]) != -0x1 || ravwq[G[580119]](G[580131]) != -0x1 || ravwq[G[580119]](G[580132]) != -0x1 || ravwq[G[580119]](G[580133]) != -0x1 || ravwq[G[580119]](G[580134]) != -0x1) window[G[580015]][G[580129]] = 0x2;else window[G[580015]][G[580129]] = 0x3;
                }
            } else window[G[580015]][G[580129]] = 0x2;
        }
        console[G[580045]](G[580135] + window[G[580015]][G[580128]] + G[580136] + window[G[580015]][G[580129]]);
    }
}), wx[G[580137]]({
    'success': function (xplygn) {
        console[G[580045]](G[580138] + xplygn[G[580139]] + G[580140] + xplygn[G[580141]]);
    }
}), wx[G[580142]]({
    'success': function (d_s1i) {
        console[G[580045]](G[580143] + d_s1i[G[580144]]);
    }
}), wx[G[580145]]({ 'keepScreenOn': !![] }), wx[G[580146]](function (s_dt1i) {
    console[G[580045]](G[580143] + s_dt1i[G[580144]] + G[580147] + s_dt1i[G[580148]]);
}), wx[G[580149]](function (uh9ypg) {
    window[G[580150]] = uh9ypg, window[G[580151]] && window[G[580150]] && (console[G[580000]](G[580152] + window[G[580150]][G[580153]]), window[G[580151]](window[G[580150]]), window[G[580150]] = null);
}), window[G[580154]] = 0x0, window[G[580155]] = null, wx[G[580156]](function () {
    window[G[580154]]++, wx[G[580157]]();
    if (window[G[580154]] >= 0x2) {
        window[G[580154]] = 0x0, console[G[580027]](G[580158]), wx[G[580159]]('0', 0x1);
        if (window[G[580015]] && window[G[580015]][G[580118]]) window[G[580081]](G[580160], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});