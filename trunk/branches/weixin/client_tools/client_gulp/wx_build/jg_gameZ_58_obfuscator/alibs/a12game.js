var c = wx.$a;
console[c[694]](c[31190]), window[c[31191]], wx[c[31192]](function (sjhvzn) {
    if (sjhvzn) {
        if (sjhvzn[c[423]]) {
            var egu12 = window[c[1160]][c[31193]][c[550]](new RegExp(/\./, 'g'), '_'),
                z86dk = sjhvzn[c[423]],
                jzshv = z86dk[c[430]](/(a2a3a1\/a12game.js:)[0-9]{1,60}(:)/g);
            if (jzshv) for (var qdk = 0x0; qdk < jzshv[c[407]]; qdk++) {
                if (jzshv[qdk] && jzshv[qdk][c[407]] > 0x0) {
                    var trq578 = parseInt(jzshv[qdk][c[550]](c[31194], '')[c[550]](':', ''));
                    z86dk = z86dk[c[550]](jzshv[qdk], jzshv[qdk][c[550]](':' + trq578 + ':', ':' + (trq578 - 0x2) + ':'));
                }
            }
            z86dk = z86dk[c[550]](new RegExp(c[31195], 'g'), c[31196] + egu12 + c[26974]), z86dk = z86dk[c[550]](new RegExp(c[31197], 'g'), c[31196] + egu12 + c[26974]), sjhvzn[c[423]] = z86dk;
        }
        var y$blmc = {
            'id': window[c[31198]][c[31199]],
            'role': window[c[31198]][c[4982]],
            'level': window[c[31198]][c[31200]],
            'user': window[c[31198]][c[26875]],
            'version': window[c[31198]][c[716]],
            'cdn': window[c[31198]][c[4862]],
            'pkgName': window[c[31198]][c[26876]],
            'gamever': window[c[1160]][c[31193]],
            'serverid': window[c[31198]][c[26870]] ? window[c[31198]][c[26870]][c[61]] : 0x0,
            'systemInfo': window[c[31201]],
            'error': c[31202],
            'stack': sjhvzn ? sjhvzn[c[423]] : ''
        },
            l$ = JSON[c[4848]](y$blmc);
        console[c[583]](c[31203] + l$), (!window[c[31191]] || window[c[31191]] != y$blmc[c[583]]) && (window[c[31191]] = y$blmc[c[583]], window[c[31204]](y$blmc));
    }
});
import 'a1md5min.js';
import 'ea1zlibs.js';
window[c[31205]] = require(c[31206]);
import 'a1index.js';
import 'a1ibsmin.js';
import 'a1wxmini.js';
import 'a1initmin.js';
console[c[694]](c[31207]), console[c[694]](c[31208]), jM1BE({ 'title': c[31209] });
var gmb$a9 = { 'j6ME1B': !![] };
new window[c[31210]](gmb$a9), window[c[31210]][c[762]][c[31211]]();
if (window[c[31212]]) clearInterval(window[c[31212]]);
window[c[31212]] = null, window[c[31213]] = function (hzkq6, j12s) {
    if (!hzkq6 || !j12s) return 0x0;
    hzkq6 = hzkq6[c[528]]('.'), j12s = j12s[c[528]]('.');
    const hvz6kd = Math[c[575]](hzkq6[c[407]], j12s[c[407]]);
    while (hzkq6[c[407]] < hvz6kd) {
        hzkq6[c[429]]('0');
    }
    while (j12s[c[407]] < hvz6kd) {
        j12s[c[429]]('0');
    }
    for (var njvsxh = 0x0; njvsxh < hvz6kd; njvsxh++) {
        const qdk68z = parseInt(hzkq6[njvsxh]),
              wo0e_ = parseInt(j12s[njvsxh]);
        if (qdk68z > wo0e_) return 0x1;else {
            if (qdk68z < wo0e_) return -0x1;
        }
    }
    return 0x0;
}, window[c[31214]] = wx[c[31215]]()[c[31214]], console[c[540]](c[31216] + window[c[31214]]);
var gco$b0 = wx[c[31217]]();
gco$b0[c[31218]](function (snjfx) {
    console[c[540]](c[31219] + snjfx[c[31220]]);
}), gco$b0[c[31221]](function () {
    wx[c[31222]]({
        'title': c[31223],
        'content': c[31224],
        'showCancel': ![],
        'success': function (ns1x) {
            gco$b0[c[31225]]();
        }
    });
}), gco$b0[c[31226]](function () {
    console[c[540]](c[31227]);
}), window[c[31228]] = function () {
    console[c[540]](c[31229]);
    var r5i3p7 = wx[c[31230]]({
        'name': c[31231],
        'success': function (y0ocb$) {
            console[c[540]](c[31232]), console[c[540]](y0ocb$), y0ocb$ && y0ocb$[c[27069]] == c[31233] ? (window[c[31234]] = !![], window[c[31235]](), window[c[31236]]()) : setTimeout(function () {
                window[c[31228]]();
            }, 0x1f4);
        },
        'fail': function (_g4w) {
            console[c[540]](c[31237]), console[c[540]](_g4w), setTimeout(function () {
                window[c[31228]]();
            }, 0x1f4);
        }
    });
    r5i3p7 && r5i3p7[c[31025]](jnvzs => {});
}, window[c[31238]] = function () {
    console[c[540]](c[31239]);
    var vsfjn = wx[c[31230]]({
        'name': c[31240],
        'success': function (o40yb) {
            console[c[540]](c[31241]), console[c[540]](o40yb), o40yb && o40yb[c[27069]] == c[31233] ? (window[c[31242]] = !![], window[c[31235]](), window[c[31236]]()) : setTimeout(function () {
                window[c[31238]]();
            }, 0x1f4);
        },
        'fail': function (hkd6zq) {
            console[c[540]](c[31243]), console[c[540]](hkd6zq), setTimeout(function () {
                window[c[31238]]();
            }, 0x1f4);
        }
    });
    vsfjn && vsfjn[c[31025]](d68tqk => {});
}, window[c[31244]] = function () {
    window[c[31213]](window[c[31214]], c[31245]) >= 0x0 ? (console[c[540]](c[31246] + window[c[31214]] + c[31247]), window[c[31248]](), window[c[31228]](), window[c[31238]]()) : (window[c[31249]](c[31250], window[c[31214]]), wx[c[31222]]({
        'title': c[6447],
        'content': c[31251]
    }));
}, window[c[31201]] = '', wx[c[31252]]({
    'success'(xjsh) {
        window[c[31201]] = c[31253] + xjsh[c[31254]] + c[31255] + xjsh[c[31256]] + c[31257] + xjsh[c[5052]] + c[31258] + xjsh[c[1082]] + c[31259] + xjsh[c[26838]] + c[31260] + xjsh[c[31214]] + c[31261] + xjsh[c[9770]], console[c[540]](window[c[31201]]), console[c[540]](c[31262] + xjsh[c[31263]] + c[31264] + xjsh[c[31265]] + c[31266] + xjsh[c[31267]] + c[31268] + xjsh[c[31269]] + c[31270] + xjsh[c[31271]] + c[31272] + xjsh[c[31273]] + c[31274] + (xjsh[c[31275]] ? xjsh[c[31275]][c[925]] + ',' + xjsh[c[31275]][c[1926]] + ',' + xjsh[c[31275]][c[1928]] + ',' + xjsh[c[31275]][c[1927]] : ''));
        var w4eo = xjsh[c[1082]] ? xjsh[c[1082]][c[456]]() : '',
            vk6zh = xjsh[c[31256]] ? xjsh[c[31256]][c[456]]()[c[550]]('\x20', '') : '';
        window[c[31198]][c[1710]] = w4eo[c[488]](c[31276]) != -0x1, window[c[31198]][c[11887]] = w4eo[c[488]](c[74]) != -0x1, window[c[31198]][c[31277]] = w4eo[c[488]](c[31276]) != -0x1 || w4eo[c[488]](c[74]) != -0x1, window[c[31198]][c[26561]] = w4eo[c[488]](c[31278]) != -0x1 || w4eo[c[488]](c[31279]) != -0x1, window[c[31198]][c[31280]] = xjsh[c[26838]] ? xjsh[c[26838]][c[456]]() : '', window[c[31198]][c[31281]] = ![], window[c[31198]][c[31282]] = 0x2;
        if (w4eo[c[488]](c[74]) != -0x1) {
            if (xjsh[c[9770]] >= 0x18) window[c[31198]][c[31282]] = 0x3;else window[c[31198]][c[31282]] = 0x2;
        } else {
            if (w4eo[c[488]](c[31276]) != -0x1) {
                if (xjsh[c[9770]] && xjsh[c[9770]] >= 0x14) window[c[31198]][c[31282]] = 0x3;else {
                    if (vk6zh[c[488]](c[31283]) != -0x1 || vk6zh[c[488]](c[31284]) != -0x1 || vk6zh[c[488]](c[31285]) != -0x1 || vk6zh[c[488]](c[31286]) != -0x1 || vk6zh[c[488]](c[31287]) != -0x1) window[c[31198]][c[31282]] = 0x2;else window[c[31198]][c[31282]] = 0x3;
                }
            } else window[c[31198]][c[31282]] = 0x2;
        }
        console[c[540]](c[31288] + window[c[31198]][c[31281]] + c[31289] + window[c[31198]][c[31282]]);
    }
}), wx[c[31290]]({
    'success': function (by0o$c) {
        console[c[540]](c[31291] + by0o$c[c[4959]] + c[31292] + by0o$c[c[31293]]);
    }
}), wx[c[12443]]({
    'success': function (nsxjh) {
        console[c[540]](c[31294] + nsxjh[c[13945]]);
    }
}), wx[c[31295]]({ 'keepScreenOn': !![] }), wx[c[12445]](function (jxsnh) {
    console[c[540]](c[31294] + jxsnh[c[13945]] + c[31296] + jxsnh[c[31297]]);
}), wx[c[11378]](function (y4eo) {
    window[c[31298]] = y4eo, window[c[31299]] && window[c[31298]] && (console[c[694]](c[31300] + window[c[31298]][c[1413]]), window[c[31299]](window[c[31298]]), window[c[31298]] = null);
}), window[c[31301]] = 0x0, window[c[31302]] = 0x0, window[c[31303]] = null, wx[c[31304]](function () {
    window[c[31302]]++;
    var cby0 = Date[c[699]]();
    (window[c[31301]] == 0x0 || cby0 - window[c[31301]] > 0x1d4c0) && (console[c[597]](c[31305]), wx[c[12622]]());
    if (window[c[31302]] >= 0x2) {
        window[c[31302]] = 0x0, console[c[583]](c[31306]), wx[c[31307]]('0', 0x1);
        if (window[c[31198]] && window[c[31198]][c[1710]]) window[c[31249]](c[31308], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});