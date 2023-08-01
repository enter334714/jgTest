var b = wx.$e;
console[b[620]](b[37879]), window[b[37880]], wx[b[37881]](function (rg6hq) {
    if (rg6hq) {
        if (rg6hq[b[35]]) {
            var pk5vd = window[b[1088]][b[37606]][b[166]](new RegExp(/\./, 'g'), '_'),
                x2tdb5 = rg6hq[b[35]],
                w_$lt = x2tdb5[b[42]](/(tsd\/Z_110game.js:)[0-9]{1,60}(:)/g);
            if (w_$lt) for (var j3o80f = 0x0; j3o80f < w_$lt[b[19]]; j3o80f++) {
                if (w_$lt[j3o80f] && w_$lt[j3o80f][b[19]] > 0x0) {
                    var jzyna1 = parseInt(w_$lt[j3o80f][b[166]](b[37882], '')[b[166]](':', ''));
                    x2tdb5 = x2tdb5[b[166]](w_$lt[j3o80f], w_$lt[j3o80f][b[166]](':' + jzyna1 + ':', ':' + (jzyna1 - 0x2) + ':'));
                }
            }
            x2tdb5 = x2tdb5[b[166]](new RegExp(b[37883], 'g'), b[37884] + pk5vd + b[28949]), x2tdb5 = x2tdb5[b[166]](new RegExp(b[37885], 'g'), b[37884] + pk5vd + b[28949]), rg6hq[b[35]] = x2tdb5;
        }
        var y9u7zm = {
            'id': window[b[5155]][b[37651]],
            'role': window[b[5155]][b[5286]],
            'level': window[b[5155]][b[37652]],
            'user': window[b[5155]][b[28845]],
            'version': window[b[5155]][b[640]],
            'cdn': window[b[5155]][b[5152]],
            'pkgName': window[b[5155]][b[28847]],
            'gamever': window[b[1088]][b[37606]],
            'serverid': window[b[5155]][b[28841]] ? window[b[5155]][b[28841]][b[12618]] : 0x0,
            'systemInfo': window[b[37653]],
            'error': b[37886],
            'stack': rg6hq ? rg6hq[b[35]] : ''
        },
            s6irhq = JSON[b[5138]](y9u7zm);
        console[b[199]](b[37887] + s6irhq), (!window[b[37880]] || window[b[37880]] != y9u7zm[b[199]]) && (window[b[37880]] = y9u7zm[b[199]], window[b[37627]](y9u7zm));
    }
});
import 'a2vm.js';
import 'ccmv6a.js';
window[b[37888]] = require(b[37889]);
import 'le.js';
import 'a8b3a.js';
import 'v1a6a.js';
import 'kk0a.js';
console[b[620]](b[37890]), console[b[620]](b[37891]), e1KV$J({ 'title': b[37892] });
var efynaj = { 'e1PKJV$': !![] };
new window[b[37605]](efynaj), window[b[37605]][b[676]]['e1P$VJK']();
if (window['e1PKVJ$']) clearInterval(window['e1PKVJ$']);
window['e1PKVJ$'] = null, window['e1P$JKV'] = function (hgsqr, qsi6rh) {
    if (!hgsqr || !qsi6rh) return 0x0;
    hgsqr = hgsqr[b[144]]('.'), qsi6rh = qsi6rh[b[144]]('.');
    const aj3f01 = Math[b[191]](hgsqr[b[19]], qsi6rh[b[19]]);
    while (hgsqr[b[19]] < aj3f01) {
        hgsqr[b[41]]('0');
    }
    while (qsi6rh[b[19]] < aj3f01) {
        qsi6rh[b[41]]('0');
    }
    for (var dvxk = 0x0; dvxk < aj3f01; dvxk++) {
        const x2k5pd = parseInt(hgsqr[dvxk]),
              fi380o = parseInt(qsi6rh[dvxk]);
        if (x2k5pd > fi380o) return 0x1;else {
            if (x2k5pd < fi380o) return -0x1;
        }
    }
    return 0x0;
}, window[b[37789]] = wx[b[37893]]()[b[37789]], console[b[156]](b[37894] + window[b[37789]]);
var eq8ih6 = wx[b[37895]]();
eq8ih6[b[37896]](function (l$bc) {
    console[b[156]](b[37897] + l$bc[b[37898]]);
}), eq8ih6[b[37899]](function () {
    wx[b[37632]]({
        'title': b[37900],
        'content': b[37901],
        'showCancel': ![],
        'success': function (ghs6) {
            eq8ih6[b[37902]]();
        }
    });
}), eq8ih6[b[37903]](function () {
    console[b[156]](b[37904]);
}), window['e1P$JVK'] = function () {
    console[b[156]](b[37905]);
    var sr6ge = wx[b[37906]]({
        'name': b[37907],
        'success': function (z97my) {
            console[b[156]](b[37908]), console[b[156]](z97my), z97my && z97my[b[28462]] == b[37909] ? (window['e1J$'] = !![], window['e1J$VK'](), window['e1JVK$']()) : setTimeout(function () {
                window['e1P$JVK']();
            }, 0x1f4);
        },
        'fail': function (mz9y) {
            console[b[156]](b[37910]), console[b[156]](mz9y), setTimeout(function () {
                window['e1P$JVK']();
            }, 0x1f4);
        }
    });
    sr6ge && sr6ge[b[37144]](y719z => {});
}, window['e1PVKJ$'] = function () {
    console[b[156]](b[37911]);
    var $bc2t5 = wx[b[37906]]({
        'name': b[37912],
        'success': function (oj308) {
            console[b[156]](b[37913]), console[b[156]](oj308), oj308 && oj308[b[28462]] == b[37909] ? (window['e1V$J'] = !![], window['e1J$VK'](), window['e1JVK$']()) : setTimeout(function () {
                window['e1PVKJ$']();
            }, 0x1f4);
        },
        'fail': function (xk) {
            console[b[156]](b[37914]), console[b[156]](xk), setTimeout(function () {
                window['e1PVKJ$']();
            }, 0x1f4);
        }
    });
    $bc2t5 && $bc2t5[b[37144]](n7zy9 => {});
}, window[b[37915]] = function () {
    window['e1P$JKV'](window[b[37789]], b[37916]) >= 0x0 ? (console[b[156]](b[37917] + window[b[37789]] + b[37918]), window[b[37638]](), window['e1P$JVK'](), window['e1PVKJ$']()) : (window[b[37661]](b[37919], window[b[37789]]), wx[b[37632]]({
        'title': b[6739],
        'content': b[37920]
    }));
}, window[b[37653]] = '', wx[b[37921]]({
    'success'(zn7ya) {
        window[b[37653]] = b[37922] + zn7ya[b[37923]] + b[37924] + zn7ya[b[37925]] + b[37926] + zn7ya[b[5987]] + b[37927] + zn7ya[b[1011]] + b[37928] + zn7ya[b[28799]] + b[37929] + zn7ya[b[37789]] + b[37930] + zn7ya[b[10265]], console[b[156]](window[b[37653]]), console[b[156]](b[37931] + zn7ya[b[32969]] + b[37932] + zn7ya[b[37933]] + b[37934] + zn7ya[b[37935]] + b[37936] + zn7ya[b[37937]] + b[37938] + zn7ya[b[37939]] + b[37940] + zn7ya[b[37941]] + b[37942] + (zn7ya[b[37943]] ? zn7ya[b[37943]][b[858]] + ',' + zn7ya[b[37943]][b[1898]] + ',' + zn7ya[b[37943]][b[1900]] + ',' + zn7ya[b[37943]][b[1899]] : ''));
        var sr6hqi = zn7ya[b[1011]] ? zn7ya[b[1011]][b[68]]() : '',
            $tclw = zn7ya[b[37925]] ? zn7ya[b[37925]][b[68]]()[b[166]]('\x20', '') : '';
        window[b[5155]][b[1649]] = sr6hqi[b[102]](b[37944]) != -0x1, window[b[5155]][b[12442]] = sr6hqi[b[102]](b[37945]) != -0x1, window[b[5155]][b[37862]] = sr6hqi[b[102]](b[37944]) != -0x1 || sr6hqi[b[102]](b[37945]) != -0x1, window[b[5155]][b[28473]] = sr6hqi[b[102]](b[37946]) != -0x1 || sr6hqi[b[102]](b[37614]) != -0x1, window[b[5155]][b[37663]] = zn7ya[b[28799]] ? zn7ya[b[28799]][b[68]]() : '', window[b[5155]]['e1PK$JV'] = ![], window[b[5155]]['e1PKV$J'] = 0x2;
        if (sr6hqi[b[102]](b[37945]) != -0x1) {
            if (zn7ya[b[10265]] >= 0x18) window[b[5155]]['e1PKV$J'] = 0x3;else window[b[5155]]['e1PKV$J'] = 0x2;
        } else {
            if (sr6hqi[b[102]](b[37944]) != -0x1) {
                if (zn7ya[b[10265]] && zn7ya[b[10265]] >= 0x14) window[b[5155]]['e1PKV$J'] = 0x3;else {
                    if ($tclw[b[102]](b[37947]) != -0x1 || $tclw[b[102]](b[37948]) != -0x1 || $tclw[b[102]](b[37949]) != -0x1 || $tclw[b[102]](b[37950]) != -0x1 || $tclw[b[102]](b[37951]) != -0x1) window[b[5155]]['e1PKV$J'] = 0x2;else window[b[5155]]['e1PKV$J'] = 0x3;
                }
            } else window[b[5155]]['e1PKV$J'] = 0x2;
        }
        console[b[156]](b[37952] + window[b[5155]]['e1PK$JV'] + b[37953] + window[b[5155]]['e1PKV$J']);
    }
}), wx[b[37807]]({
    'success': function (m9vkpu) {
        console[b[156]](b[37954] + m9vkpu[b[5262]] + b[37955] + m9vkpu[b[37809]]);
    }
}), wx[b[13003]]({
    'success': function (_$cwl) {
        console[b[156]](b[37956] + _$cwl[b[15051]]);
    }
}), wx[b[37957]]({ 'keepScreenOn': !![] }), wx[b[13005]](function (oh86iq) {
    console[b[156]](b[37956] + oh86iq[b[15051]] + b[37958] + oh86iq[b[37959]]);
}), wx[b[11931]](function ($ltbcw) {
    window['e1$K'] = $ltbcw, window['e1JK$'] && window['e1$K'] && (console[b[620]](b[37786] + window['e1$K'][b[1353]]), window['e1JK$'](window['e1$K']), window['e1$K'] = null);
}), window[b[37960]] = 0x0, window['e1PV$JK'] = 0x0, window[b[37961]] = null, wx[b[37962]](function () {
    window['e1PV$JK']++;
    var lwc_ = Date[b[625]]();
    (window[b[37960]] == 0x0 || lwc_ - window[b[37960]] > 0x1d4c0) && (console[b[213]](b[37963]), wx[b[13397]]());
    if (window['e1PV$JK'] >= 0x2) {
        window['e1PV$JK'] = 0x0, console[b[199]](b[37964]), wx[b[37965]]('0', 0x1);
        if (window[b[5155]] && window[b[5155]][b[1649]]) window[b[37661]](b[37966], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});