var c = wx.$a;
console[c[608]](c[31198]), window[c[31199]], wx[c[31200]](function (l$cbym) {
    if (l$cbym) {
        if (l$cbym[c[335]]) {
            var q85rtd = window[c[1076]][c[31201]][c[463]](new RegExp(/\./, 'g'), '_'),
                vnjsh = l$cbym[c[335]],
                $l9bm = vnjsh[c[342]](/(a2a3a1\/a12game.js:)[0-9]{1,60}(:)/g);
            if ($l9bm) for (var hkvdz6 = 0x0; hkvdz6 < $l9bm[c[319]]; hkvdz6++) {
                if ($l9bm[hkvdz6] && $l9bm[hkvdz6][c[319]] > 0x0) {
                    var z6qhd = parseInt($l9bm[hkvdz6][c[463]](c[31202], '')[c[463]](':', ''));
                    vnjsh = vnjsh[c[463]]($l9bm[hkvdz6], $l9bm[hkvdz6][c[463]](':' + z6qhd + ':', ':' + (z6qhd - 0x2) + ':'));
                }
            }
            vnjsh = vnjsh[c[463]](new RegExp(c[31203], 'g'), c[31204] + q85rtd + c[26897]), vnjsh = vnjsh[c[463]](new RegExp(c[31205], 'g'), c[31204] + q85rtd + c[26897]), l$cbym[c[335]] = vnjsh;
        }
        var t537rp = {
            'id': window[c[31206]][c[31207]],
            'role': window[c[31206]][c[4898]],
            'level': window[c[31206]][c[31208]],
            'user': window[c[31206]][c[26798]],
            'version': window[c[31206]][c[630]],
            'cdn': window[c[31206]][c[4778]],
            'pkgName': window[c[31206]][c[26799]],
            'gamever': window[c[1076]][c[31201]],
            'serverid': window[c[31206]][c[26793]] ? window[c[31206]][c[26793]][c[11981]] : 0x0,
            'systemInfo': window[c[31209]],
            'error': c[31210],
            'stack': l$cbym ? l$cbym[c[335]] : ''
        },
            $mcybl = JSON[c[4764]](t537rp);
        console[c[496]](c[31211] + $mcybl), (!window[c[31199]] || window[c[31199]] != t537rp[c[496]]) && (window[c[31199]] = t537rp[c[496]], window[c[31212]](t537rp));
    }
});
import 'a1md5min.js';
import 'ea1zlibs.js';
window[c[31213]] = require(c[31214]);
import 'a1index.js';
import 'a1ibsmin.js';
import 'a1wxmini.js';
import 'a1initmin.js';
console[c[608]](c[31215]), console[c[608]](c[31216]), jM1BE({ 'title': c[31217] });
var gnzvhjs = { 'j6ME1B': !![] };
new window[c[31218]](gnzvhjs), window[c[31218]][c[676]][c[31219]]();
if (window[c[31220]]) clearInterval(window[c[31220]]);
window[c[31220]] = null, window[c[31221]] = function (u_4eo, l$ma9b) {
    if (!u_4eo || !l$ma9b) return 0x0;
    u_4eo = u_4eo[c[441]]('.'), l$ma9b = l$ma9b[c[441]]('.');
    const $mcb = Math[c[488]](u_4eo[c[319]], l$ma9b[c[319]]);
    while (u_4eo[c[319]] < $mcb) {
        u_4eo[c[341]]('0');
    }
    while (l$ma9b[c[319]] < $mcb) {
        l$ma9b[c[341]]('0');
    }
    for (var b$yco0 = 0x0; b$yco0 < $mcb; b$yco0++) {
        const r8tq = parseInt(u_4eo[b$yco0]),
              zs = parseInt(l$ma9b[b$yco0]);
        if (r8tq > zs) return 0x1;else {
            if (r8tq < zs) return -0x1;
        }
    }
    return 0x0;
}, window[c[31222]] = wx[c[31223]]()[c[31222]], console[c[453]](c[31224] + window[c[31222]]);
var gq58rt = wx[c[31225]]();
gq58rt[c[31226]](function (dzhv) {
    console[c[453]](c[31227] + dzhv[c[31228]]);
}), gq58rt[c[31229]](function () {
    wx[c[31230]]({
        'title': c[31231],
        'content': c[31232],
        'showCancel': ![],
        'success': function (qzk6d8) {
            gq58rt[c[31233]]();
        }
    });
}), gq58rt[c[31234]](function () {
    console[c[453]](c[31235]);
}), window[c[31236]] = function () {
    console[c[453]](c[31237]);
    var $lc = wx[c[31238]]({
        'name': c[31239],
        'success': function (y$mcl) {
            console[c[453]](c[31240]), console[c[453]](y$mcl), y$mcl && y$mcl[c[26992]] == c[31241] ? (window[c[31242]] = !![], window[c[31243]](), window[c[31244]]()) : setTimeout(function () {
                window[c[31236]]();
            }, 0x1f4);
        },
        'fail': function (k8t6qd) {
            console[c[453]](c[31245]), console[c[453]](k8t6qd), setTimeout(function () {
                window[c[31236]]();
            }, 0x1f4);
        }
    });
    $lc && $lc[c[30949]](b9l => {});
}, window[c[31246]] = function () {
    console[c[453]](c[31247]);
    var l0y$cb = wx[c[31238]]({
        'name': c[31248],
        'success': function (k8qzd6) {
            console[c[453]](c[31249]), console[c[453]](k8qzd6), k8qzd6 && k8qzd6[c[26992]] == c[31241] ? (window[c[31250]] = !![], window[c[31243]](), window[c[31244]]()) : setTimeout(function () {
                window[c[31246]]();
            }, 0x1f4);
        },
        'fail': function (p375ri) {
            console[c[453]](c[31251]), console[c[453]](p375ri), setTimeout(function () {
                window[c[31246]]();
            }, 0x1f4);
        }
    });
    l0y$cb && l0y$cb[c[30949]](bl0$y => {});
}, window[c[31252]] = function () {
    window[c[31221]](window[c[31222]], c[31253]) >= 0x0 ? (console[c[453]](c[31254] + window[c[31222]] + c[31255]), window[c[31256]](), window[c[31236]](), window[c[31246]]()) : (window[c[31257]](c[31258], window[c[31222]]), wx[c[31230]]({
        'title': c[6364],
        'content': c[31259]
    }));
}, window[c[31209]] = '', wx[c[31260]]({
    'success'(qdkz8) {
        window[c[31209]] = c[31261] + qdkz8[c[31262]] + c[31263] + qdkz8[c[31264]] + c[31265] + qdkz8[c[4968]] + c[31266] + qdkz8[c[998]] + c[31267] + qdkz8[c[26761]] + c[31268] + qdkz8[c[31222]] + c[31269] + qdkz8[c[9687]], console[c[453]](window[c[31209]]), console[c[453]](c[31270] + qdkz8[c[31271]] + c[31272] + qdkz8[c[31273]] + c[31274] + qdkz8[c[31275]] + c[31276] + qdkz8[c[31277]] + c[31278] + qdkz8[c[31279]] + c[31280] + qdkz8[c[31281]] + c[31282] + (qdkz8[c[31283]] ? qdkz8[c[31283]][c[840]] + ',' + qdkz8[c[31283]][c[1842]] + ',' + qdkz8[c[31283]][c[1844]] + ',' + qdkz8[c[31283]][c[1843]] : ''));
        var ew4o0 = qdkz8[c[998]] ? qdkz8[c[998]][c[368]]() : '',
            o0$byc = qdkz8[c[31264]] ? qdkz8[c[31264]][c[368]]()[c[463]]('\x20', '') : '';
        window[c[31206]][c[1626]] = ew4o0[c[401]](c[31284]) != -0x1, window[c[31206]][c[11805]] = ew4o0[c[401]](c[31181]) != -0x1, window[c[31206]][c[31285]] = ew4o0[c[401]](c[31284]) != -0x1 || ew4o0[c[401]](c[31181]) != -0x1, window[c[31206]][c[26484]] = ew4o0[c[401]](c[31286]) != -0x1 || ew4o0[c[401]](c[31287]) != -0x1, window[c[31206]][c[31288]] = qdkz8[c[26761]] ? qdkz8[c[26761]][c[368]]() : '', window[c[31206]][c[31289]] = ![], window[c[31206]][c[31290]] = 0x2;
        if (ew4o0[c[401]](c[31181]) != -0x1) {
            if (qdkz8[c[9687]] >= 0x18) window[c[31206]][c[31290]] = 0x3;else window[c[31206]][c[31290]] = 0x2;
        } else {
            if (ew4o0[c[401]](c[31284]) != -0x1) {
                if (qdkz8[c[9687]] && qdkz8[c[9687]] >= 0x14) window[c[31206]][c[31290]] = 0x3;else {
                    if (o0$byc[c[401]](c[31291]) != -0x1 || o0$byc[c[401]](c[31292]) != -0x1 || o0$byc[c[401]](c[31293]) != -0x1 || o0$byc[c[401]](c[31294]) != -0x1 || o0$byc[c[401]](c[31295]) != -0x1) window[c[31206]][c[31290]] = 0x2;else window[c[31206]][c[31290]] = 0x3;
                }
            } else window[c[31206]][c[31290]] = 0x2;
        }
        console[c[453]](c[31296] + window[c[31206]][c[31289]] + c[31297] + window[c[31206]][c[31290]]);
    }
}), wx[c[31298]]({
    'success': function (snj) {
        console[c[453]](c[31299] + snj[c[4875]] + c[31300] + snj[c[31301]]);
    }
}), wx[c[12362]]({
    'success': function (xjhvn) {
        console[c[453]](c[31302] + xjhvn[c[13866]]);
    }
}), wx[c[31303]]({ 'keepScreenOn': !![] }), wx[c[12364]](function (k6qz8) {
    console[c[453]](c[31302] + k6qz8[c[13866]] + c[31304] + k6qz8[c[31305]]);
}), wx[c[11296]](function (ip735r) {
    window[c[31306]] = ip735r, window[c[31307]] && window[c[31306]] && (console[c[608]](c[31308] + window[c[31306]][c[1329]]), window[c[31307]](window[c[31306]]), window[c[31306]] = null);
}), window[c[31309]] = 0x0, window[c[31310]] = 0x0, window[c[31311]] = null, wx[c[31312]](function () {
    window[c[31310]]++;
    var kzhnv6 = Date[c[613]]();
    (window[c[31309]] == 0x0 || kzhnv6 - window[c[31309]] > 0x1d4c0) && (console[c[510]](c[31313]), wx[c[12542]]());
    if (window[c[31310]] >= 0x2) {
        window[c[31310]] = 0x0, console[c[496]](c[31314]), wx[c[31315]]('0', 0x1);
        if (window[c[31206]] && window[c[31206]][c[1626]]) window[c[31257]](c[31316], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});