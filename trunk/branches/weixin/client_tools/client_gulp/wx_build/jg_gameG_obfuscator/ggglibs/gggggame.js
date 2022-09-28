var m = wx.$g;
console[m[72]](m[30412]), window[m[30413]], wx[m[30414]](function (ky1xhw) {
    if (ky1xhw) {
        if (ky1xhw[m[3810]]) {
            var r$z = window[m[546]][m[30415]][m[4044]](new RegExp(/\./, 'g'), '_'),
                yvek1 = ky1xhw[m[3810]],
                hi1a5 = yvek1[m[11294]](/(gggggggg\/gggggame.js:)[0-9]{1,60}(:)/g);
            if (hi1a5) for (var tb0f_ = 0x0; tb0f_ < hi1a5[m[13]]; tb0f_++) {
                if (hi1a5[tb0f_] && hi1a5[tb0f_][m[13]] > 0x0) {
                    var ai1h5 = parseInt(hi1a5[tb0f_][m[4044]](m[30416], '')[m[4044]](':', ''));
                    yvek1 = yvek1[m[4044]](hi1a5[tb0f_], hi1a5[tb0f_][m[4044]](':' + ai1h5 + ':', ':' + (ai1h5 - 0x2) + ':'));
                }
            }
            yvek1 = yvek1[m[4044]](new RegExp(m[30417], 'g'), m[30418] + r$z + m[25343]), yvek1 = yvek1[m[4044]](new RegExp(m[30419], 'g'), m[30418] + r$z + m[25343]), ky1xhw[m[3810]] = yvek1;
        }
        var urj6 = {
            'id': window['G$3J'][m[30420]],
            'role': window['G$3J'][m[3932]],
            'level': window['G$3J'][m[30421]],
            'user': window['G$3J'][m[25247]],
            'version': window['G$3J'][m[95]],
            'cdn': window['G$3J'][m[3808]],
            'pkgName': window['G$3J'][m[25249]],
            'gamever': window[m[546]][m[30415]],
            'serverid': window['G$3J'][m[25243]] ? window['G$3J'][m[25243]][m[10641]] : 0x0,
            'systemInfo': window[m[30422]],
            'error': m[30423],
            'stack': ky1xhw ? ky1xhw[m[3810]] : ''
        },
            pi_b = JSON[m[3794]](urj6);
        console[m[119]](m[30424] + pi_b), (!window[m[30413]] || window[m[30413]] != urj6[m[119]]) && (window[m[30413]] = urj6[m[119]], window['G$23'](urj6));
    }
});
import 'gggmd5min.js';
import 'gggzlibs.js';
window[m[30425]] = require(m[30426]);
import 'gggindex.js';
import 'ggglibsmin.js';
import 'gggwxmini.js';
import 'ggginitmin.js';
import 'XingJuBox.js';
console[m[72]](m[30427]), console[m[72]](m[30428]), G$230J({ 'title': m[30429] });
var gsc78qg = { 'G$V2J30': !![] };
new window[m[30430]](gsc78qg), window[m[30430]][m[141]]['G$V03J2']();
if (window['G$V23J0']) clearInterval(window['G$V23J0']);
window['G$V23J0'] = null, window['G$V0J23'] = function (w1hykx, sg8lqc) {
    if (!w1hykx || !sg8lqc) return 0x0;
    w1hykx = w1hykx[m[15]]('.'), sg8lqc = sg8lqc[m[15]]('.');
    const z4o3dt = Math[m[855]](w1hykx[m[13]], sg8lqc[m[13]]);
    while (w1hykx[m[13]] < z4o3dt) {
        w1hykx[m[29]]('0');
    }
    while (sg8lqc[m[13]] < z4o3dt) {
        sg8lqc[m[29]]('0');
    }
    for (var vey = 0x0; vey < z4o3dt; vey++) {
        const ey1vkw = parseInt(w1hykx[vey]),
              bxa5h = parseInt(sg8lqc[vey]);
        if (ey1vkw > bxa5h) return 0x1;else {
            if (ey1vkw < bxa5h) return -0x1;
        }
    }
    return 0x0;
}, window[m[30431]] = wx[m[30432]]()[m[30431]], console[m[473]](m[30433] + window[m[30431]]);
var gwyv7eq = wx[m[30434]]();
gwyv7eq[m[30435]](function (qy7g) {
    console[m[473]](m[30436] + qy7g[m[30437]]);
}), gwyv7eq[m[30438]](function () {
    wx[m[30439]]({
        'title': m[30440],
        'content': m[30441],
        'showCancel': ![],
        'success': function (zr26od) {
            gwyv7eq[m[30442]]();
        }
    });
}), gwyv7eq[m[30443]](function () {
    console[m[473]](m[30444]);
}), window['G$V0J32'] = function () {
    console[m[473]](m[30445]);
    var kyw7v = wx[m[30446]]({
        'name': m[30447],
        'success': function (ky7vw) {
            console[m[473]](m[30448]), console[m[473]](ky7vw), ky7vw && ky7vw[m[25439]] == m[30449] ? (window['G$J0'] = !![], window['G$J032'](), window['G$J320']()) : setTimeout(function () {
                window['G$V0J32']();
            }, 0x1f4);
        },
        'fail': function (p_b5f) {
            console[m[473]](m[30450]), console[m[473]](p_b5f), setTimeout(function () {
                window['G$V0J32']();
            }, 0x1f4);
        }
    });
    kyw7v && kyw7v[m[29838]](tof3d => {});
}, window['G$V32J0'] = function () {
    console[m[473]](m[30451]);
    var _pi50 = wx[m[30446]]({
        'name': m[30452],
        'success': function (xh1aw) {
            console[m[473]](m[30453]), console[m[473]](xh1aw), xh1aw && xh1aw[m[25439]] == m[30449] ? (window['G$30J'] = !![], window['G$J032'](), window['G$J320']()) : setTimeout(function () {
                window['G$V32J0']();
            }, 0x1f4);
        },
        'fail': function (tof34_) {
            console[m[473]](m[30454]), console[m[473]](tof34_), setTimeout(function () {
                window['G$V32J0']();
            }, 0x1f4);
        }
    });
    _pi50 && _pi50[m[29838]](wvky1 => {});
}, window[m[30455]] = function () {
    window['G$V0J23'](window[m[30431]], m[30456]) >= 0x0 ? (console[m[473]](m[30457] + window[m[30431]] + m[30458]), window['G$32'](), window['G$V0J32'](), window['G$V32J0']()) : (window['G$3J2'](m[30459], window[m[30431]]), wx[m[30439]]({
        'title': m[5312],
        'content': m[30460]
    }));
}, window[m[30422]] = '', wx[m[30461]]({
    'success'(xaw1k) {
        window[m[30422]] = m[30462] + xaw1k[m[30463]] + m[30464] + xaw1k[m[30465]] + m[30466] + xaw1k[m[4595]] + m[30467] + xaw1k[m[466]] + m[30468] + xaw1k[m[25210]] + m[30469] + xaw1k[m[30431]] + m[30470] + xaw1k[m[8529]], console[m[473]](window[m[30422]]), console[m[473]](m[30471] + xaw1k[m[30472]] + m[30473] + xaw1k[m[30474]] + m[30475] + xaw1k[m[30476]] + m[30477] + xaw1k[m[30478]] + m[30479] + xaw1k[m[30480]] + m[30481] + xaw1k[m[30482]] + m[30483] + (xaw1k[m[30484]] ? xaw1k[m[30484]][m[314]] + ',' + xaw1k[m[30484]][m[1183]] + ',' + xaw1k[m[30484]][m[1185]] + ',' + xaw1k[m[30484]][m[1184]] : ''));
        var tf40_p = xaw1k[m[466]] ? xaw1k[m[466]][m[11592]]() : '',
            z24d3o = xaw1k[m[30465]] ? xaw1k[m[30465]][m[11592]]()[m[4044]]('\x20', '') : '';
        window['G$3J'][m[1032]] = tf40_p[m[109]](m[30485]) != -0x1, window['G$3J'][m[10472]] = tf40_p[m[109]](m[30486]) != -0x1, window['G$3J'][m[30487]] = tf40_p[m[109]](m[30485]) != -0x1 || tf40_p[m[109]](m[30486]) != -0x1, window['G$3J'][m[24946]] = tf40_p[m[109]](m[30488]) != -0x1 || tf40_p[m[109]](m[30489]) != -0x1, window['G$3J'][m[30490]] = xaw1k[m[25210]] ? xaw1k[m[25210]][m[11592]]() : '', window['G$3J']['G$V20J3'] = ![], window['G$3J']['G$V230J'] = 0x2;
        if (tf40_p[m[109]](m[30486]) != -0x1) {
            if (xaw1k[m[8529]] >= 0x18) window['G$3J']['G$V230J'] = 0x3;else window['G$3J']['G$V230J'] = 0x2;
        } else {
            if (tf40_p[m[109]](m[30485]) != -0x1) {
                if (xaw1k[m[8529]] && xaw1k[m[8529]] >= 0x14) window['G$3J']['G$V230J'] = 0x3;else {
                    if (z24d3o[m[109]](m[30491]) != -0x1 || z24d3o[m[109]](m[30492]) != -0x1 || z24d3o[m[109]](m[30493]) != -0x1 || z24d3o[m[109]](m[30494]) != -0x1 || z24d3o[m[109]](m[30495]) != -0x1) window['G$3J']['G$V230J'] = 0x2;else window['G$3J']['G$V230J'] = 0x3;
                }
            } else window['G$3J']['G$V230J'] = 0x2;
        }
        console[m[473]](m[30496] + window['G$3J']['G$V20J3'] + m[30497] + window['G$3J']['G$V230J']);
    }
}), wx[m[30498]]({
    'success': function (f0b_t) {
        console[m[473]](m[30499] + f0b_t[m[3908]] + m[30500] + f0b_t[m[30501]]);
    }
}), wx[m[10963]]({
    'success': function (bixah) {
        console[m[473]](m[30502] + bixah[m[12470]]);
    }
}), wx[m[30503]]({ 'keepScreenOn': !![] }), wx[m[10965]](function (y7vwqe) {
    console[m[473]](m[30502] + y7vwqe[m[12470]] + m[30504] + y7vwqe[m[30505]]);
}), wx[m[10012]](function (i1xak) {
    window['G$02'] = i1xak, window['G$J20'] && window['G$02'] && (console[m[72]](m[30506] + window['G$02'][m[784]]), window['G$J20'](window['G$02']), window['G$02'] = null);
}), window['memoryGCTime'] = 0x0, window['G$V30J2'] = 0x0, window[m[30507]] = null, wx[m[30508]](function () {
    window['G$V30J2']++;
    var rd62jz = Date[m[77]]();
    (window['memoryGCTime'] == 0x0 || rd62jz - window['memoryGCTime'] > 0x1d4c0) && (console[m[90]](m[30509]), wx['triggerGC']());
    if (window['G$V30J2'] >= 0x2) {
        window['G$V30J2'] = 0x0, console[m[119]](m[30510]), wx[m[30511]]('0', 0x1);
        if (window['G$3J'] && window['G$3J'][m[1032]]) window['G$3J2'](m[30512], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});