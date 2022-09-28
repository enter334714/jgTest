var b = wx.e$;
console[b[78]](b[31758]), window[b[31759]], wx[b[31760]](function (tq7) {
    if (tq7) {
        if (tq7[b[4091]]) {
            var hpx$bo = window[b[562]][b[31213]][b[4329]](new RegExp(/\./, 'g'), '_'),
                h$xpbo = tq7[b[4091]],
                q14a = h$xpbo[b[12045]](/(a4rd7i\/Z_79game.js:)[0-9]{1,60}(:)/g);
            if (q14a) for (var f9$eb = 0x0; f9$eb < q14a[b[13]]; f9$eb++) {
                if (q14a[f9$eb] && q14a[f9$eb][b[13]] > 0x0) {
                    var p$ohb = parseInt(q14a[f9$eb][b[4329]](b[31761], '')[b[4329]](':', ''));
                    h$xpbo = h$xpbo[b[4329]](q14a[f9$eb], q14a[f9$eb][b[4329]](':' + p$ohb + ':', ':' + (p$ohb - 0x2) + ':'));
                }
            }
            h$xpbo = h$xpbo[b[4329]](new RegExp(b[31762], 'g'), b[31763] + hpx$bo + b[26319]), h$xpbo = h$xpbo[b[4329]](new RegExp(b[31764], 'g'), b[31763] + hpx$bo + b[26319]), tq7[b[4091]] = h$xpbo;
        }
        var p$hxe = {
            'id': window[b[31220]][b[31285]],
            'role': window[b[31220]][b[4213]],
            'level': window[b[31220]][b[31286]],
            'user': window[b[31220]][b[26220]],
            'version': window[b[31220]][b[101]],
            'cdn': window[b[31220]][b[4089]],
            'pkgName': window[b[31220]][b[26221]],
            'gamever': window[b[562]][b[31213]],
            'serverid': window[b[31220]][b[26215]] ? window[b[31220]][b[26215]][b[11316]] : 0x0,
            'systemInfo': window[b[31287]],
            'error': b[31765],
            'stack': tq7 ? tq7[b[4091]] : ''
        },
            $bxph = JSON[b[4075]](p$hxe);
        console[b[125]](b[31766] + $bxph), (!window[b[31759]] || window[b[31759]] != p$hxe[b[125]]) && (window[b[31759]] = p$hxe[b[125]], window[b[31238]](p$hxe));
    }
});
import 'csh.js';
import 'mw1c.js';
window[b[31767]] = require(b[31768]);
import 'a21a.js';
import 'l4g.js';
import 'ga.js';
import 'a6ugbs.js';
console[b[78]](b[31769]), console[b[78]](b[31770]), e1F6VE({ 'title': b[31771] });
var ek4tq7 = { 'e1$FE6V': !![] };
new window[b[31269]](ek4tq7), window[b[31269]][b[148]]['e1$V6EF']();
if (window['e1$F6EV']) clearInterval(window['e1$F6EV']);
window['e1$F6EV'] = null, window['e1$VEF6'] = function (ep9bx, q4j1a) {
    if (!ep9bx || !q4j1a) return 0x0;
    ep9bx = ep9bx[b[15]]('.'), q4j1a = q4j1a[b[15]]('.');
    const is0wdg = Math[b[894]](ep9bx[b[13]], q4j1a[b[13]]);
    while (ep9bx[b[13]] < is0wdg) {
        ep9bx[b[29]]('0');
    }
    while (q4j1a[b[13]] < is0wdg) {
        q4j1a[b[29]]('0');
    }
    for (var uz8vy2 = 0x0; uz8vy2 < is0wdg; uz8vy2++) {
        const b$xonh = parseInt(ep9bx[uz8vy2]),
              a4k_q1 = parseInt(q4j1a[uz8vy2]);
        if (b$xonh > a4k_q1) return 0x1;else {
            if (b$xonh < a4k_q1) return -0x1;
        }
    }
    return 0x0;
}, window[b[31439]] = wx[b[31772]]()[b[31439]], console[b[487]](b[31773] + window[b[31439]]);
var eosnhw = wx[b[31774]]();
eosnhw[b[31775]](function (o$bxhp) {
    console[b[487]](b[31776] + o$bxhp[b[31777]]);
}), eosnhw[b[31778]](function () {
    wx[b[31255]]({
        'title': b[31779],
        'content': b[31780],
        'showCancel': ![],
        'success': function (jqt7k) {
            eosnhw[b[31781]]();
        }
    });
}), eosnhw[b[31782]](function () {
    console[b[487]](b[31783]);
}), window['e1$VE6F'] = function () {
    console[b[487]](b[31784]);
    var lyvr = wx[b[31785]]({
        'name': b[31786],
        'success': function (wnio0s) {
            console[b[487]](b[31787]), console[b[487]](wnio0s), wnio0s && wnio0s[b[26416]] == b[31788] ? (window[b[31246]] = !![], window[b[31389]](), window[b[31390]]()) : setTimeout(function () {
                window['e1$VE6F']();
            }, 0x1f4);
        },
        'fail': function (nisd0w) {
            console[b[487]](b[31789]), console[b[487]](nisd0w), setTimeout(function () {
                window['e1$VE6F']();
            }, 0x1f4);
        }
    });
    lyvr && lyvr[b[30520]](q14_ka => {});
}, window['e1$6FEV'] = function () {
    console[b[487]](b[31790]);
    var $epbf = wx[b[31785]]({
        'name': b[31791],
        'success': function (bhonw) {
            console[b[487]](b[31792]), console[b[487]](bhonw), bhonw && bhonw[b[26416]] == b[31788] ? (window[b[31247]] = !![], window[b[31389]](), window[b[31390]]()) : setTimeout(function () {
                window['e1$6FEV']();
            }, 0x1f4);
        },
        'fail': function (vl8ur3) {
            console[b[487]](b[31793]), console[b[487]](vl8ur3), setTimeout(function () {
                window['e1$6FEV']();
            }, 0x1f4);
        }
    });
    $epbf && $epbf[b[30520]](tqjk6 => {});
}, window[b[31794]] = function () {
    window['e1$VEF6'](window[b[31439]], b[31795]) >= 0x0 ? (console[b[487]](b[31796] + window[b[31439]] + b[31797]), window[b[31262]](), window['e1$VE6F'](), window['e1$6FEV']()) : (window[b[31295]](b[31798], window[b[31439]]), wx[b[31255]]({
        'title': b[5619],
        'content': b[31799]
    }));
}, window[b[31287]] = '', wx[b[31800]]({
    'success'(pbox$h) {
        window[b[31287]] = b[31801] + pbox$h[b[31802]] + b[31803] + pbox$h[b[31804]] + b[31805] + pbox$h[b[4902]] + b[31806] + pbox$h[b[480]] + b[31807] + pbox$h[b[26182]] + b[31808] + pbox$h[b[31439]] + b[31809] + pbox$h[b[9006]], console[b[487]](window[b[31287]]), console[b[487]](b[31810] + pbox$h[b[31811]] + b[31812] + pbox$h[b[31813]] + b[31814] + pbox$h[b[31815]] + b[31816] + pbox$h[b[31817]] + b[31818] + pbox$h[b[31819]] + b[31820] + pbox$h[b[31821]] + b[31822] + (pbox$h[b[31823]] ? pbox$h[b[31823]][b[322]] + ',' + pbox$h[b[31823]][b[1275]] + ',' + pbox$h[b[31823]][b[1277]] + ',' + pbox$h[b[31823]][b[1276]] : ''));
        var aq_k1 = pbox$h[b[480]] ? pbox$h[b[480]][b[12345]]() : '',
            onwsh = pbox$h[b[31804]] ? pbox$h[b[31804]][b[12345]]()[b[4329]]('\x20', '') : '';
        window[b[31220]][b[1116]] = aq_k1[b[115]](b[31824]) != -0x1, window[b[31220]][b[11140]] = aq_k1[b[115]](b[30759]) != -0x1, window[b[31220]][b[31529]] = aq_k1[b[115]](b[31824]) != -0x1 || aq_k1[b[115]](b[30759]) != -0x1, window[b[31220]][b[25904]] = aq_k1[b[115]](b[31825]) != -0x1 || aq_k1[b[115]](b[31224]) != -0x1, window[b[31220]][b[31297]] = pbox$h[b[26182]] ? pbox$h[b[26182]][b[12345]]() : '', window[b[31220]]['e1$FVE6'] = ![], window[b[31220]]['e1$F6VE'] = 0x2;
        if (aq_k1[b[115]](b[30759]) != -0x1) {
            if (pbox$h[b[9006]] >= 0x18) window[b[31220]]['e1$F6VE'] = 0x3;else window[b[31220]]['e1$F6VE'] = 0x2;
        } else {
            if (aq_k1[b[115]](b[31824]) != -0x1) {
                if (pbox$h[b[9006]] && pbox$h[b[9006]] >= 0x14) window[b[31220]]['e1$F6VE'] = 0x3;else {
                    if (onwsh[b[115]](b[31826]) != -0x1 || onwsh[b[115]](b[31827]) != -0x1 || onwsh[b[115]](b[31828]) != -0x1 || onwsh[b[115]](b[31829]) != -0x1 || onwsh[b[115]](b[31830]) != -0x1) window[b[31220]]['e1$F6VE'] = 0x2;else window[b[31220]]['e1$F6VE'] = 0x3;
                }
            } else window[b[31220]]['e1$F6VE'] = 0x2;
        }
        console[b[487]](b[31831] + window[b[31220]]['e1$FVE6'] + b[31832] + window[b[31220]]['e1$F6VE']);
    }
}), wx[b[31458]]({
    'success': function (pxbhe) {
        console[b[487]](b[31833] + pxbhe[b[4189]] + b[31834] + pxbhe[b[31460]]);
    }
}), wx[b[11697]]({
    'success': function (yczv) {
        console[b[487]](b[31835] + yczv[b[13231]]);
    }
}), wx[b[31836]]({ 'keepScreenOn': !![] }), wx[b[11699]](function (bxep) {
    console[b[487]](b[31835] + bxep[b[13231]] + b[31837] + bxep[b[31838]]);
}), wx[b[10631]](function (bhp$ex) {
    window[b[31433]] = bhp$ex, window[b[31432]] && window[b[31433]] && (console[b[78]](b[31434] + window[b[31433]][b[817]]), window[b[31432]](window[b[31433]]), window[b[31433]] = null);
}), window[b[31839]] = 0x0, window['e1$6VEF'] = 0x0, window[b[31840]] = null, wx[b[31841]](function () {
    window['e1$6VEF']++;
    var bx$pe = Date[b[83]]();
    (window[b[31839]] == 0x0 || bx$pe - window[b[31839]] > 0x1d4c0) && (console[b[96]](b[31842]), wx[b[11883]]());
    if (window['e1$6VEF'] >= 0x2) {
        window['e1$6VEF'] = 0x0, console[b[125]](b[31843]), wx[b[31844]]('0', 0x1);
        if (window[b[31220]] && window[b[31220]][b[1116]]) window[b[31295]](b[31845], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});