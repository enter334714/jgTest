var Z = wx.$L;
console[Z[476]](Z[477]), window[Z[478]], wx[Z[479]](function (zwfu) {
    if (zwfu) {
        if (zwfu[Z[480]]) {
            var l$7k = window[Z[481]][Z[482]][Z[298]](new RegExp(/\./, 'g'), '_'),
                oj_y = zwfu[Z[480]],
                gqsvn5 = oj_y[Z[463]](/(LLLLLLLL\/LLLLGAME.js:)[0-9]{1,60}(:)/g);
            if (gqsvn5) for (var ns5q4 = 0x0; ns5q4 < gqsvn5[Z[186]]; ns5q4++) {
                if (gqsvn5[ns5q4] && gqsvn5[ns5q4][Z[186]] > 0x0) {
                    var pm1b = parseInt(gqsvn5[ns5q4][Z[298]](Z[483], '')[Z[298]](':', ''));
                    oj_y = oj_y[Z[298]](gqsvn5[ns5q4], gqsvn5[ns5q4][Z[298]](':' + pm1b + ':', ':' + (pm1b - 0x2) + ':'));
                }
            }
            oj_y = oj_y[Z[298]](new RegExp(Z[484], 'g'), Z[485] + l$7k + Z[486]), oj_y = oj_y[Z[298]](new RegExp(Z[487], 'g'), Z[485] + l$7k + Z[486]), zwfu[Z[480]] = oj_y;
        }
        var r6tx = {
            'id': window['$lNM'][Z[488]],
            'role': window['$lNM'][Z[489]],
            'level': window['$lNM'][Z[490]],
            'user': window['$lNM'][Z[491]],
            'version': window['$lNM'][Z[214]],
            'cdn': window['$lNM'][Z[305]],
            'pkgName': window['$lNM'][Z[271]],
            'gamever': window[Z[481]][Z[482]],
            'serverid': window['$lNM'][Z[157]] ? window['$lNM'][Z[157]][Z[158]] : 0x0,
            'systemInfo': window[Z[492]],
            'error': Z[493],
            'stack': zwfu ? zwfu[Z[480]] : ''
        },
            o2h_ = JSON[Z[434]](r6tx);
        console[Z[436]](Z[494] + o2h_), (!window[Z[478]] || window[Z[478]] != r6tx[Z[436]]) && (window[Z[478]] = r6tx[Z[436]], window['$lZN'](r6tx));
    }
});
import 'lllMDFIVEMIN.js';
import 'lllZLIBS.js';
window[Z[495]] = require(Z[496]);
import 'LLLLINDEX.js';
import 'llllLIBSMIN.js';
import 'LLLLWXMINI.js';
import 'LLLINITMIN.js';
console[Z[476]](Z[497]), console[Z[476]](Z[498]), $lZNOM({ 'title': Z[499] });
var l1m1bi_ = { '$lTZMNO': !![] };
new window[Z[475]](l1m1bi_), window[Z[475]][Z[153]]['$lTONMZ']();
if (window['$lTZNMO']) clearInterval(window['$lTZNMO']);
window['$lTZNMO'] = null, window['$lTOMZN'] = function (rip9m0, v5q4sn) {
    if (!rip9m0 || !v5q4sn) return 0x0;
    rip9m0 = rip9m0[Z[500]]('.'), v5q4sn = v5q4sn[Z[500]]('.');
    const $7gla = Math[Z[501]](rip9m0[Z[186]], v5q4sn[Z[186]]);
    while (rip9m0[Z[186]] < $7gla) {
        rip9m0[Z[333]]('0');
    }
    while (v5q4sn[Z[186]] < $7gla) {
        v5q4sn[Z[333]]('0');
    }
    for (var h2dc = 0x0; h2dc < $7gla; h2dc++) {
        const p1bmi = parseInt(rip9m0[h2dc]),
              ho2jy8 = parseInt(v5q4sn[h2dc]);
        if (p1bmi > ho2jy8) return 0x1;else {
            if (p1bmi < ho2jy8) return -0x1;
        }
    }
    return 0x0;
}, window[Z[502]] = wx[Z[503]]()[Z[502]], console[Z[325]](Z[504] + window[Z[502]]);
var l1ztw3u = wx[Z[505]]();
l1ztw3u[Z[506]](function (cdk) {
    console[Z[325]](Z[507] + cdk[Z[508]]);
}), l1ztw3u[Z[509]](function () {
    wx[Z[510]]({
        'title': Z[511],
        'content': Z[512],
        'showCancel': ![],
        'success': function (p6i0) {
            l1ztw3u[Z[513]]();
        }
    });
}), l1ztw3u[Z[514]](function () {
    console[Z[325]](Z[515]);
}), window['$lTOMNZ'] = function () {
    console[Z[325]](Z[516]);
    var ag5s$q = wx[Z[517]]({
        'name': Z[518],
        'success': function (boj21) {
            console[Z[325]](Z[519]), console[Z[325]](boj21), boj21 && boj21[Z[520]] == Z[521] ? (window['$lMO'] = !![], window['$lMONZ'](), window['$lMNZO']()) : setTimeout(function () {
                window['$lTOMNZ']();
            }, 0x1f4);
        },
        'fail': function (b9mp0i) {
            console[Z[325]](Z[522]), console[Z[325]](b9mp0i), setTimeout(function () {
                window['$lTOMNZ']();
            }, 0x1f4);
        }
    });
    ag5s$q && ag5s$q[Z[523]](v4n5sq => {});
}, window['$lTNZMO'] = function () {
    console[Z[325]](Z[524]);
    var y_o1 = wx[Z[517]]({
        'name': Z[525],
        'success': function (yj2ho) {
            console[Z[325]](Z[526]), console[Z[325]](yj2ho), yj2ho && yj2ho[Z[520]] == Z[521] ? (window['$lNOM'] = !![], window['$lMONZ'](), window['$lMNZO']()) : setTimeout(function () {
                window['$lTNZMO']();
            }, 0x1f4);
        },
        'fail': function (uztfx) {
            console[Z[325]](Z[527]), console[Z[325]](uztfx), setTimeout(function () {
                window['$lTNZMO']();
            }, 0x1f4);
        }
    });
    y_o1 && y_o1[Z[523]](fzut3w => {});
}, window[Z[528]] = function () {
    window['$lTOMZN'](window[Z[502]], Z[529]) >= 0x0 ? (console[Z[325]](Z[530] + window[Z[502]] + Z[531]), window['$lNZ'](), window['$lTOMNZ'](), window['$lTNZMO']()) : (window['$lNMZ'](Z[532], window[Z[502]]), wx[Z[510]]({
        'title': Z[533],
        'content': Z[534]
    }));
}, window[Z[492]] = '', wx[Z[535]]({
    'success'(rpi60) {
        window[Z[492]] = Z[536] + rpi60[Z[537]] + Z[538] + rpi60[Z[539]] + Z[540] + rpi60[Z[541]] + Z[542] + rpi60[Z[543]] + Z[544] + rpi60[Z[545]] + Z[546] + rpi60[Z[502]] + Z[547] + rpi60[Z[548]], console[Z[325]](window[Z[492]]), console[Z[325]](Z[549] + rpi60[Z[550]] + Z[551] + rpi60[Z[552]] + Z[553] + rpi60[Z[554]] + Z[555] + rpi60[Z[556]] + Z[557] + rpi60[Z[558]] + Z[559] + rpi60[Z[560]] + Z[561] + (rpi60[Z[562]] ? rpi60[Z[562]][Z[109]] + ',' + rpi60[Z[562]][Z[228]] + ',' + rpi60[Z[562]][Z[563]] + ',' + rpi60[Z[562]][Z[69]] : ''));
        var ga$5sq = rpi60[Z[543]] ? rpi60[Z[543]][Z[564]]() : '',
            vsq5n = rpi60[Z[539]] ? rpi60[Z[539]][Z[564]]()[Z[298]]('\x20', '') : '';
        window['$lNM'][Z[565]] = ga$5sq[Z[456]](Z[566]) != -0x1, window['$lNM'][Z[567]] = ga$5sq[Z[456]](Z[568]) != -0x1, window['$lNM'][Z[569]] = ga$5sq[Z[456]](Z[566]) != -0x1 || ga$5sq[Z[456]](Z[568]) != -0x1, window['$lNM'][Z[570]] = ga$5sq[Z[456]](Z[571]) != -0x1 || ga$5sq[Z[456]](Z[572]) != -0x1, window['$lNM'][Z[573]] = rpi60[Z[545]] ? rpi60[Z[545]][Z[564]]() : '', window['$lNM']['$lTZOMN'] = ![], window['$lNM']['$lTZNOM'] = 0x2;
        if (ga$5sq[Z[456]](Z[568]) != -0x1) {
            if (rpi60[Z[548]] >= 0x18) window['$lNM']['$lTZNOM'] = 0x3;else window['$lNM']['$lTZNOM'] = 0x2;
        } else {
            if (ga$5sq[Z[456]](Z[566]) != -0x1) {
                if (rpi60[Z[548]] && rpi60[Z[548]] >= 0x14) window['$lNM']['$lTZNOM'] = 0x3;else {
                    if (vsq5n[Z[456]](Z[574]) != -0x1 || vsq5n[Z[456]](Z[575]) != -0x1 || vsq5n[Z[456]](Z[576]) != -0x1 || vsq5n[Z[456]](Z[577]) != -0x1 || vsq5n[Z[456]](Z[578]) != -0x1) window['$lNM']['$lTZNOM'] = 0x2;else window['$lNM']['$lTZNOM'] = 0x3;
                }
            } else window['$lNM']['$lTZNOM'] = 0x2;
        }
        console[Z[325]](Z[579] + window['$lNM']['$lTZOMN'] + Z[580] + window['$lNM']['$lTZNOM']);
    }
}), wx[Z[581]]({
    'success': function (yc2jh8) {
        console[Z[325]](Z[582] + yc2jh8[Z[583]] + Z[584] + yc2jh8[Z[585]]);
    }
}), wx[Z[586]]({
    'success': function (oj28y) {
        console[Z[325]](Z[587] + oj28y[Z[588]]);
    }
}), wx[Z[589]]({ 'keepScreenOn': !![] }), wx[Z[590]](function (yhcde) {
    console[Z[325]](Z[587] + yhcde[Z[588]] + Z[591] + yhcde[Z[592]]);
}), wx[Z[593]](function (jy8c2) {
    window['$lOZ'] = jy8c2, window['$lMZO'] && window['$lOZ'] && (console[Z[476]](Z[594] + window['$lOZ'][Z[595]]), window['$lMZO'](window['$lOZ']), window['$lOZ'] = null);
}), window[Z[596]] = 0x0, window['$lTNOMZ'] = 0x0, window[Z[597]] = null, wx[Z[598]](function () {
    window['$lTNOMZ']++;
    var oh2 = Date[Z[152]]();
    (window[Z[596]] == 0x0 || oh2 - window[Z[596]] > 0x1d4c0) && (console[Z[453]](Z[599]), wx[Z[600]]());
    if (window['$lTNOMZ'] >= 0x2) {
        window['$lTNOMZ'] = 0x0, console[Z[436]](Z[601]), wx[Z[602]]('0', 0x1);
        if (window['$lNM'] && window['$lNM'][Z[565]]) window['$lNMZ'](Z[603], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});