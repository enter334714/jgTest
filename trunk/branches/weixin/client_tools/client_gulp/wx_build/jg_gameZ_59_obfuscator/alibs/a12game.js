var c = wx.$a;
console[c[611]](c[35059]), window[c[35060]], wx[c[35061]](function (bo0$y) {
    if (bo0$y) {
        if (bo0$y[c[338]]) {
            var bcoy = window[c[1082]][c[35062]][c[466]](new RegExp(/\./, 'g'), '_'),
                mlb$ = bo0$y[c[338]],
                d86qtk = mlb$[c[345]](/(a2a3a1\/a12game.js:)[0-9]{1,60}(:)/g);
            if (d86qtk) for (var xjvfs = 0x0; xjvfs < d86qtk[c[322]]; xjvfs++) {
                if (d86qtk[xjvfs] && d86qtk[xjvfs][c[322]] > 0x0) {
                    var i573r = parseInt(d86qtk[xjvfs][c[466]](c[35063], '')[c[466]](':', ''));
                    mlb$ = mlb$[c[466]](d86qtk[xjvfs], d86qtk[xjvfs][c[466]](':' + i573r + ':', ':' + (i573r - 0x2) + ':'));
                }
            }
            mlb$ = mlb$[c[466]](new RegExp(c[35064], 'g'), c[35065] + bcoy + c[28105]), mlb$ = mlb$[c[466]](new RegExp(c[35066], 'g'), c[35065] + bcoy + c[28105]), bo0$y[c[338]] = mlb$;
        }
        var _o0ew4 = {
            'id': window[c[5021]][c[35067]],
            'role': window[c[5021]][c[5150]],
            'level': window[c[5021]][c[35068]],
            'user': window[c[5021]][c[27996]],
            'version': window[c[5021]][c[633]],
            'cdn': window[c[5021]][c[5018]],
            'pkgName': window[c[5021]][c[27998]],
            'gamever': window[c[1082]][c[35062]],
            'serverid': window[c[5021]][c[27992]] ? window[c[5021]][c[27992]][c[12390]] : 0x0,
            'systemInfo': window[c[35069]],
            'error': c[35070],
            'stack': bo0$y ? bo0$y[c[338]] : ''
        },
            p53tr7 = JSON[c[5004]](_o0ew4);
        console[c[499]](c[35071] + p53tr7), (!window[c[35060]] || window[c[35060]] != _o0ew4[c[499]]) && (window[c[35060]] = _o0ew4[c[499]], window[c[35072]](_o0ew4));
    }
});
import 'a1md5min.js';
import 'ea1zlibs.js';
window[c[35073]] = require(c[35074]);
import 'a1index.js';
import 'a1ibsmin.js';
import 'a1wxmini.js';
import 'a1initmin.js';
console[c[611]](c[35075]), console[c[611]](c[35076]), jM1BE({ 'title': c[35077] });
var gjhvs = { 'j6ME1B': !![] };
new window[c[35078]](gjhvs), window[c[35078]][c[679]][c[35079]]();
if (window[c[35080]]) clearInterval(window[c[35080]]);
window[c[35080]] = null, window[c[35081]] = function (oe0w, $acblm) {
    if (!oe0w || !$acblm) return 0x0;
    oe0w = oe0w[c[444]]('.'), $acblm = $acblm[c[444]]('.');
    const r8t5 = Math[c[491]](oe0w[c[322]], $acblm[c[322]]);
    while (oe0w[c[322]] < r8t5) {
        oe0w[c[344]]('0');
    }
    while ($acblm[c[322]] < r8t5) {
        $acblm[c[344]]('0');
    }
    for (var u_w4g = 0x0; u_w4g < r8t5; u_w4g++) {
        const o_ye0 = parseInt(oe0w[u_w4g]),
              _y4o = parseInt($acblm[u_w4g]);
        if (o_ye0 > _y4o) return 0x1;else {
            if (o_ye0 < _y4o) return -0x1;
        }
    }
    return 0x0;
}, window[c[35082]] = wx[c[35083]]()[c[35082]], console[c[456]](c[35084] + window[c[35082]]);
var gux = wx[c[35085]]();
gux[c[35086]](function (mbl$a9) {
    console[c[456]](c[35087] + mbl$a9[c[35088]]);
}), gux[c[35089]](function () {
    wx[c[35090]]({
        'title': c[35091],
        'content': c[35092],
        'showCancel': ![],
        'success': function (a$lcmb) {
            gux[c[35093]]();
        }
    });
}), gux[c[35094]](function () {
    console[c[456]](c[35095]);
}), window[c[35096]] = function () {
    console[c[456]](c[35097]);
    var x1g2f = wx[c[35098]]({
        'name': c[35099],
        'success': function (c0_o4) {
            console[c[456]](c[35100]), console[c[456]](c0_o4), c0_o4 && c0_o4[c[28205]] == c[35101] ? (window[c[35102]] = !![], window[c[35103]](), window[c[35104]]()) : setTimeout(function () {
                window[c[35096]]();
            }, 0x1f4);
        },
        'fail': function (qr857) {
            console[c[456]](c[35105]), console[c[456]](qr857), setTimeout(function () {
                window[c[35096]]();
            }, 0x1f4);
        }
    });
    x1g2f && x1g2f[c[34783]](dhvkz => {});
}, window[c[35106]] = function () {
    console[c[456]](c[35107]);
    var _we40 = wx[c[35098]]({
        'name': c[35108],
        'success': function ($am) {
            console[c[456]](c[35109]), console[c[456]]($am), $am && $am[c[28205]] == c[35101] ? (window[c[35110]] = !![], window[c[35103]](), window[c[35104]]()) : setTimeout(function () {
                window[c[35106]]();
            }, 0x1f4);
        },
        'fail': function (gw2uf) {
            console[c[456]](c[35111]), console[c[456]](gw2uf), setTimeout(function () {
                window[c[35106]]();
            }, 0x1f4);
        }
    });
    _we40 && _we40[c[34783]](v6nzhk => {});
}, window[c[35112]] = function () {
    window[c[35081]](window[c[35082]], c[35113]) >= 0x0 ? (console[c[456]](c[35114] + window[c[35082]] + c[35115]), window[c[35116]](), window[c[35096]](), window[c[35106]]()) : (window[c[35117]](c[35118], window[c[35082]]), wx[c[35090]]({
        'title': c[6599],
        'content': c[35119]
    }));
}, window[c[35069]] = '', wx[c[35120]]({
    'success'(snfxj1) {
        window[c[35069]] = c[35121] + snfxj1[c[35122]] + c[35123] + snfxj1[c[35124]] + c[35125] + snfxj1[c[5848]] + c[35126] + snfxj1[c[1004]] + c[35127] + snfxj1[c[27950]] + c[35128] + snfxj1[c[35082]] + c[35129] + snfxj1[c[10075]], console[c[456]](window[c[35069]]), console[c[456]](c[35130] + snfxj1[c[31555]] + c[35131] + snfxj1[c[35132]] + c[35133] + snfxj1[c[35134]] + c[35135] + snfxj1[c[35136]] + c[35137] + snfxj1[c[35138]] + c[35139] + snfxj1[c[35140]] + c[35141] + (snfxj1[c[35142]] ? snfxj1[c[35142]][c[846]] + ',' + snfxj1[c[35142]][c[1911]] + ',' + snfxj1[c[35142]][c[1913]] + ',' + snfxj1[c[35142]][c[1912]] : ''));
        var q5tr8 = snfxj1[c[1004]] ? snfxj1[c[1004]][c[371]]() : '',
            u2egw = snfxj1[c[35124]] ? snfxj1[c[35124]][c[371]]()[c[466]]('\x20', '') : '';
        window[c[5021]][c[1646]] = q5tr8[c[404]](c[35143]) != -0x1, window[c[5021]][c[12218]] = q5tr8[c[404]](c[35040]) != -0x1, window[c[5021]][c[35144]] = q5tr8[c[404]](c[35143]) != -0x1 || q5tr8[c[404]](c[35040]) != -0x1, window[c[5021]][c[27642]] = q5tr8[c[404]](c[35145]) != -0x1 || q5tr8[c[404]](c[35146]) != -0x1, window[c[5021]][c[35147]] = snfxj1[c[27950]] ? snfxj1[c[27950]][c[371]]() : '', window[c[5021]][c[35148]] = ![], window[c[5021]][c[35149]] = 0x2;
        if (q5tr8[c[404]](c[35040]) != -0x1) {
            if (snfxj1[c[10075]] >= 0x18) window[c[5021]][c[35149]] = 0x3;else window[c[5021]][c[35149]] = 0x2;
        } else {
            if (q5tr8[c[404]](c[35143]) != -0x1) {
                if (snfxj1[c[10075]] && snfxj1[c[10075]] >= 0x14) window[c[5021]][c[35149]] = 0x3;else {
                    if (u2egw[c[404]](c[35150]) != -0x1 || u2egw[c[404]](c[35151]) != -0x1 || u2egw[c[404]](c[35152]) != -0x1 || u2egw[c[404]](c[35153]) != -0x1 || u2egw[c[404]](c[35154]) != -0x1) window[c[5021]][c[35149]] = 0x2;else window[c[5021]][c[35149]] = 0x3;
                }
            } else window[c[5021]][c[35149]] = 0x2;
        }
        console[c[456]](c[35155] + window[c[5021]][c[35148]] + c[35156] + window[c[5021]][c[35149]]);
    }
}), wx[c[35157]]({
    'success': function (r38t5) {
        console[c[456]](c[35158] + r38t5[c[5126]] + c[35159] + r38t5[c[35160]]);
    }
}), wx[c[12771]]({
    'success': function (njsx1f) {
        console[c[456]](c[35161] + njsx1f[c[14592]]);
    }
}), wx[c[35162]]({ 'keepScreenOn': !![] }), wx[c[12773]](function (tk68qd) {
    console[c[456]](c[35161] + tk68qd[c[14592]] + c[35163] + tk68qd[c[35164]]);
}), wx[c[11710]](function (kdh6) {
    window[c[35165]] = kdh6, window[c[35166]] && window[c[35165]] && (console[c[611]](c[35167] + window[c[35165]][c[1349]]), window[c[35166]](window[c[35165]]), window[c[35165]] = null);
}), window[c[35168]] = 0x0, window[c[35169]] = 0x0, window[c[35170]] = null, wx[c[35171]](function () {
    window[c[35169]]++;
    var o4u_we = Date[c[616]]();
    (window[c[35168]] == 0x0 || o4u_we - window[c[35168]] > 0x1d4c0) && (console[c[513]](c[35172]), wx[c[13035]]());
    if (window[c[35169]] >= 0x2) {
        window[c[35169]] = 0x0, console[c[499]](c[35173]), wx[c[35174]]('0', 0x1);
        if (window[c[5021]] && window[c[5021]][c[1646]]) window[c[35117]](c[35175], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});