var a = wx.$y;
console[a[621]](a[31228]), window[a[31229]], wx[a[31230]](function (zkn6) {
    if (zkn6) {
        if (zkn6[a[338]]) {
            var mca9 = window[a[1089]][a[31231]][a[468]](new RegExp(/\./, 'g'), '_'),
                uf1xg2 = zkn6[a[338]],
                hnjvx = uf1xg2[a[346]](/(a2a3a1\/a12game.js:)[0-9]{1,60}(:)/g);
            if (hnjvx) for (var f2ux1 = 0x0; f2ux1 < hnjvx[a[322]]; f2ux1++) {
                if (hnjvx[f2ux1] && hnjvx[f2ux1][a[322]] > 0x0) {
                    var o0y4_ = parseInt(hnjvx[f2ux1][a[468]](a[31232], '')[a[468]](':', ''));
                    uf1xg2 = uf1xg2[a[468]](hnjvx[f2ux1], hnjvx[f2ux1][a[468]](':' + o0y4_ + ':', ':' + (o0y4_ - 0x2) + ':'));
                }
            }
            uf1xg2 = uf1xg2[a[468]](new RegExp(a[31233], 'g'), a[31234] + mca9 + a[26908]), uf1xg2 = uf1xg2[a[468]](new RegExp(a[31235], 'g'), a[31234] + mca9 + a[26908]), zkn6[a[338]] = uf1xg2;
        }
        var _guw2e = {
            'id': window[a[31236]][a[31237]],
            'role': window[a[31236]][a[4911]],
            'level': window[a[31236]][a[31238]],
            'user': window[a[31236]][a[26809]],
            'version': window[a[31236]][a[643]],
            'cdn': window[a[31236]][a[4791]],
            'pkgName': window[a[31236]][a[26810]],
            'gamever': window[a[1089]][a[31231]],
            'serverid': window[a[31236]][a[26804]] ? window[a[31236]][a[26804]][a[11992]] : 0x0,
            'systemInfo': window[a[31239]],
            'error': a[31240],
            'stack': zkn6 ? zkn6[a[338]] : ''
        },
            jnvkz = JSON[a[4777]](_guw2e);
        console[a[506]](a[31241] + jnvkz), (!window[a[31229]] || window[a[31229]] != _guw2e[a[506]]) && (window[a[31229]] = _guw2e[a[506]], window[a[31242]](_guw2e));
    }
});
import 'a1md5min.js';
import 'ea1zlibs.js';
window[a[31243]] = require(a[31244]);
import 'a1index.js';
import 'a1ibsmin.js';
import 'a1wxmini.js';
import 'a1initmin.js';
console[a[621]](a[31245]), console[a[621]](a[31246]), jM1BE({ 'title': a[31247] });
var gr8q57 = { 'j6ME1B': !![] };
new window[a[31248]](gr8q57), window[a[31248]][a[689]][a[31249]]();
if (window[a[31250]]) clearInterval(window[a[31250]]);
window[a[31250]] = null, window[a[31251]] = function (khn6zv, hv6zkd) {
    if (!khn6zv || !hv6zkd) return 0x0;
    khn6zv = khn6zv[a[445]]('.'), hv6zkd = hv6zkd[a[445]]('.');
    const td68 = Math[a[497]](khn6zv[a[322]], hv6zkd[a[322]]);
    while (khn6zv[a[322]] < td68) {
        khn6zv[a[345]]('0');
    }
    while (hv6zkd[a[322]] < td68) {
        hv6zkd[a[345]]('0');
    }
    for (var $b0cyo = 0x0; $b0cyo < td68; $b0cyo++) {
        const hsvnzj = parseInt(khn6zv[$b0cyo]),
              jhxsnv = parseInt(hv6zkd[$b0cyo]);
        if (hsvnzj > jhxsnv) return 0x1;else {
            if (hsvnzj < jhxsnv) return -0x1;
        }
    }
    return 0x0;
}, window[a[31252]] = wx[a[31253]]()[a[31252]], console[a[458]](a[31254] + window[a[31252]]);
var gt6qrd = wx[a[31255]]();
gt6qrd[a[31256]](function (xf12sg) {
    console[a[458]](a[31257] + xf12sg[a[31258]]);
}), gt6qrd[a[31259]](function () {
    wx[a[31260]]({
        'title': a[31261],
        'content': a[31262],
        'showCancel': ![],
        'success': function (fg21sx) {
            gt6qrd[a[31263]]();
        }
    });
}), gt6qrd[a[31264]](function () {
    console[a[458]](a[31265]);
}), window[a[31266]] = function () {
    console[a[458]](a[31267]);
    var sjf2x = wx[a[31268]]({
        'name': a[31269],
        'success': function (nkzhv) {
            console[a[458]](a[31270]), console[a[458]](nkzhv), nkzhv && nkzhv[a[27003]] == a[31271] ? (window[a[31272]] = !![], window[a[31273]](), window[a[31274]]()) : setTimeout(function () {
                window[a[31266]]();
            }, 0x1f4);
        },
        'fail': function (e2gwu1) {
            console[a[458]](a[31275]), console[a[458]](e2gwu1), setTimeout(function () {
                window[a[31266]]();
            }, 0x1f4);
        }
    });
    sjf2x && sjf2x[a[30959]](nvjhz => {});
}, window[a[31276]] = function () {
    console[a[458]](a[31277]);
    var xhsnvj = wx[a[31268]]({
        'name': a[31278],
        'success': function (fw21g) {
            console[a[458]](a[31279]), console[a[458]](fw21g), fw21g && fw21g[a[27003]] == a[31271] ? (window[a[31280]] = !![], window[a[31273]](), window[a[31274]]()) : setTimeout(function () {
                window[a[31276]]();
            }, 0x1f4);
        },
        'fail': function (dhzq6) {
            console[a[458]](a[31281]), console[a[458]](dhzq6), setTimeout(function () {
                window[a[31276]]();
            }, 0x1f4);
        }
    });
    xhsnvj && xhsnvj[a[30959]](q8dt5 => {});
}, window[a[31282]] = function () {
    window[a[31251]](window[a[31252]], a[31283]) >= 0x0 ? (console[a[458]](a[31284] + window[a[31252]] + a[31285]), window[a[31286]](), window[a[31266]](), window[a[31276]]()) : (window[a[31287]](a[31288], window[a[31252]]), wx[a[31260]]({
        'title': a[6377],
        'content': a[31289]
    }));
}, window[a[31239]] = '', wx[a[31290]]({
    'success'(vkdhz6) {
        window[a[31239]] = a[31291] + vkdhz6[a[31292]] + a[31293] + vkdhz6[a[31294]] + a[31295] + vkdhz6[a[4981]] + a[31296] + vkdhz6[a[1011]] + a[31297] + vkdhz6[a[26772]] + a[31298] + vkdhz6[a[31252]] + a[31299] + vkdhz6[a[9698]], console[a[458]](window[a[31239]]), console[a[458]](a[31300] + vkdhz6[a[31301]] + a[31302] + vkdhz6[a[31303]] + a[31304] + vkdhz6[a[31305]] + a[31306] + vkdhz6[a[31307]] + a[31308] + vkdhz6[a[31309]] + a[31310] + vkdhz6[a[31311]] + a[31312] + (vkdhz6[a[31313]] ? vkdhz6[a[31313]][a[853]] + ',' + vkdhz6[a[31313]][a[1855]] + ',' + vkdhz6[a[31313]][a[1857]] + ',' + vkdhz6[a[31313]][a[1856]] : ''));
        var _0yoe = vkdhz6[a[1011]] ? vkdhz6[a[1011]][a[372]]() : '',
            _4gweu = vkdhz6[a[31294]] ? vkdhz6[a[31294]][a[372]]()[a[468]]('\x20', '') : '';
        window[a[31236]][a[1639]] = _0yoe[a[405]](a[31314]) != -0x1, window[a[31236]][a[11816]] = _0yoe[a[405]](a[31207]) != -0x1, window[a[31236]][a[31315]] = _0yoe[a[405]](a[31314]) != -0x1 || _0yoe[a[405]](a[31207]) != -0x1, window[a[31236]][a[26495]] = _0yoe[a[405]](a[31316]) != -0x1 || _0yoe[a[405]](a[31317]) != -0x1, window[a[31236]][a[31318]] = vkdhz6[a[26772]] ? vkdhz6[a[26772]][a[372]]() : '', window[a[31236]][a[31319]] = ![], window[a[31236]][a[31320]] = 0x2;
        if (_0yoe[a[405]](a[31207]) != -0x1) {
            if (vkdhz6[a[9698]] >= 0x18) window[a[31236]][a[31320]] = 0x3;else window[a[31236]][a[31320]] = 0x2;
        } else {
            if (_0yoe[a[405]](a[31314]) != -0x1) {
                if (vkdhz6[a[9698]] && vkdhz6[a[9698]] >= 0x14) window[a[31236]][a[31320]] = 0x3;else {
                    if (_4gweu[a[405]](a[31321]) != -0x1 || _4gweu[a[405]](a[31322]) != -0x1 || _4gweu[a[405]](a[31323]) != -0x1 || _4gweu[a[405]](a[31324]) != -0x1 || _4gweu[a[405]](a[31325]) != -0x1) window[a[31236]][a[31320]] = 0x2;else window[a[31236]][a[31320]] = 0x3;
                }
            } else window[a[31236]][a[31320]] = 0x2;
        }
        console[a[458]](a[31326] + window[a[31236]][a[31319]] + a[31327] + window[a[31236]][a[31320]]);
    }
}), wx[a[31328]]({
    'success': function (k8d6tq) {
        console[a[458]](a[31329] + k8d6tq[a[4888]] + a[31330] + k8d6tq[a[31331]]);
    }
}), wx[a[12373]]({
    'success': function (bc$ay) {
        console[a[458]](a[31332] + bc$ay[a[13877]]);
    }
}), wx[a[31333]]({ 'keepScreenOn': !![] }), wx[a[12375]](function (qd8t6k) {
    console[a[458]](a[31332] + qd8t6k[a[13877]] + a[31334] + qd8t6k[a[31335]]);
}), wx[a[11307]](function (cb9$ma) {
    window[a[31336]] = cb9$ma, window[a[31337]] && window[a[31336]] && (console[a[621]](a[31338] + window[a[31336]][a[1342]]), window[a[31337]](window[a[31336]]), window[a[31336]] = null);
}), window[a[31339]] = 0x0, window[a[31340]] = 0x0, window[a[31341]] = null, wx[a[31342]](function () {
    window[a[31340]]++;
    var o40ye = Date[a[626]]();
    (window[a[31339]] == 0x0 || o40ye - window[a[31339]] > 0x1d4c0) && (console[a[521]](a[31343]), wx[a[12553]]());
    if (window[a[31340]] >= 0x2) {
        window[a[31340]] = 0x0, console[a[506]](a[31344]), wx[a[31345]]('0', 0x1);
        if (window[a[31236]] && window[a[31236]][a[1639]]) window[a[31287]](a[31346], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});