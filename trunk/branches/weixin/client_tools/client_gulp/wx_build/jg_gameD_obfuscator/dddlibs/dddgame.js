var v = wx.$d;
console[v[0x4e]](v[0x7ba7]), window[v[0x7ba8]], wx[v[0x7ba9]](function (pw18) {
    if (pw18) {
        if (pw18[v[0x1026]]) {
            var g0tkfq = window[v[0x233]][v[0x7baa]][v[0x1114]](new RegExp(/\./, 'g'), '_'),
                fgq0z = pw18[v[0x1026]],
                x1baz8 = fgq0z[v[0x2f3d]](/(ddddddddd\/dddgame.js:)[0-9]{1,60}(:)/g);
            if (x1baz8) for (var tufq = 0x0; tufq < x1baz8[v[0xd]]; tufq++) {
                if (x1baz8[tufq] && x1baz8[tufq][v[0xd]] > 0x0) {
                    var qzgkf0 = parseInt(x1baz8[tufq][v[0x1114]](v[0x7bab], '')[v[0x1114]](':', ''));
                    fgq0z = fgq0z[v[0x1114]](x1baz8[tufq], x1baz8[tufq][v[0x1114]](':' + qzgkf0 + ':', ':' + (qzgkf0 - 0x2) + ':'));
                }
            }
            fgq0z = fgq0z[v[0x1114]](new RegExp(v[0x7bac], 'g'), v[0x7bad] + g0tkfq + v[0x6751]), fgq0z = fgq0z[v[0x1114]](new RegExp(v[0x7bae], 'g'), v[0x7bad] + g0tkfq + v[0x6751]), pw18[v[0x1026]] = fgq0z;
        }
        var fue = {
            'id': window['D$LZ'][v[0x7baf]],
            'role': window['D$LZ'][v[0x10a0]],
            'level': window['D$LZ'][v[0x7bb0]],
            'user': window['D$LZ'][v[0x66ed]],
            'version': window['D$LZ'][v[0x65]],
            'cdn': window['D$LZ'][v[0x1024]],
            'pkgName': window['D$LZ'][v[0x66ef]],
            'gamever': window[v[0x233]][v[0x7baa]],
            'serverid': window['D$LZ'][v[0x66e9]] ? window['D$LZ'][v[0x66e9]][v[0x2c63]] : 0x0,
            'systemInfo': window[v[0x7bb1]],
            'error': v[0x7bb2],
            'stack': pw18 ? pw18[v[0x1026]] : ''
        },
            iudfk = JSON[v[0x1016]](fue);
        console[v[0x7d]](v[0x7bb3] + iudfk), (!window[v[0x7ba8]] || window[v[0x7ba8]] != fue[v[0x7d]]) && (window[v[0x7ba8]] = fue[v[0x7d]], window['D$SL'](fue));
    }
});
import 'dddmd5min.js';
import 'dddzlibs.js';
window[v[0x7bb4]] = require(v[0x7bb5]);
import 'dddindex.js';
import 'dddlibsmin.js';
import 'dddwxmini.js';
import 'dddinitmin.js';
console[v[0x4e]](v[0x7bb6]), console[v[0x4e]](v[0x7bb7]), D$SLAZ({ 'title': v[0x7bb8] });
var zxr1bw8 = { 'D$YSZLA': !![] };
new window[v[0x7bb9]](zxr1bw8), window[v[0x7bb9]][v[0x94]]['D$YALZS']();
if (window['D$YSLZA']) clearInterval(window['D$YSLZA']);
window['D$YSLZA'] = null, window['D$YAZSL'] = function (v$7r, a0kgzq) {
    if (!v$7r || !a0kgzq) return 0x0;
    v$7r = v$7r[v[0xf]]('.'), a0kgzq = a0kgzq[v[0xf]]('.');
    const tkfu = Math[v[0x37f]](v$7r[v[0xd]], a0kgzq[v[0xd]]);
    while (v$7r[v[0xd]] < tkfu) {
        v$7r[v[0x1d]]('0');
    }
    while (a0kgzq[v[0xd]] < tkfu) {
        a0kgzq[v[0x1d]]('0');
    }
    for (var $r1vw = 0x0; $r1vw < tkfu; $r1vw++) {
        const gtiufk = parseInt(v$7r[$r1vw]),
              n94hj = parseInt(a0kgzq[$r1vw]);
        if (gtiufk > n94hj) return 0x1;else {
            if (gtiufk < n94hj) return -0x1;
        }
    }
    return 0x0;
}, window[v[0x7bba]] = wx[v[0x7bbb]]()[v[0x7bba]], console[v[0x1e8]](v[0x7bbc] + window[v[0x7bba]]);
var zitkufd = wx[v[0x7bbd]]();
zitkufd[v[0x7bbe]](function (hmde) {
    console[v[0x1e8]](v[0x7bbf] + hmde[v[0x7bc0]]);
}), zitkufd[v[0x7bc1]](function () {
    wx[v[0x7bc2]]({
        'title': v[0x7bc3],
        'content': v[0x7bc4],
        'showCancel': ![],
        'success': function (xwbr8) {
            zitkufd[v[0x7bc5]]();
        }
    });
}), zitkufd[v[0x7bc6]](function () {
    console[v[0x1e8]](v[0x7bc7]);
}), window['D$YAZLS'] = function () {
    console[v[0x1e8]](v[0x7bc8]);
    var pr$7vw = wx[v[0x7bc9]]({
        'name': v[0x7bca],
        'success': function (kqzg0a) {
            console[v[0x1e8]](v[0x7bcb]), console[v[0x1e8]](kqzg0a), kqzg0a && kqzg0a[v[0x67b2]] == v[0x7bcc] ? (window['D$ZA'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
                window['D$YAZLS']();
            }, 0x1f4);
        },
        'fail': function (ktiufg) {
            console[v[0x1e8]](v[0x7bcd]), console[v[0x1e8]](ktiufg), setTimeout(function () {
                window['D$YAZLS']();
            }, 0x1f4);
        }
    });
    pr$7vw && pr$7vw[v[0x7949]](_nhj49 => {});
}, window['D$YLSZA'] = function () {
    console[v[0x1e8]](v[0x7bce]);
    var eu6imd = wx[v[0x7bc9]]({
        'name': v[0x7bcf],
        'success': function (_h46jn) {
            console[v[0x1e8]](v[0x7bd0]), console[v[0x1e8]](_h46jn), _h46jn && _h46jn[v[0x67b2]] == v[0x7bcc] ? (window['D$LAZ'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
                window['D$YLSZA']();
            }, 0x1f4);
        },
        'fail': function (_3o9c4) {
            console[v[0x1e8]](v[0x7bd1]), console[v[0x1e8]](_3o9c4), setTimeout(function () {
                window['D$YLSZA']();
            }, 0x1f4);
        }
    });
    eu6imd && eu6imd[v[0x7949]](a1zxb8 => {});
}, window[v[0x7bd2]] = function () {
    window['D$YAZSL'](window[v[0x7bba]], v[0x7bd3]) >= 0x0 ? (console[v[0x1e8]](v[0x7bd4] + window[v[0x7bba]] + v[0x7bd5]), window['D$LS'](), window['D$YAZLS'](), window['D$YLSZA']()) : (window['D$LZS'](v[0x7bd6], window[v[0x7bba]]), wx[v[0x7bc2]]({
        'title': v[0x1625],
        'content': v[0x7bd7]
    }));
}, window[v[0x7bb1]] = '', wx[v[0x7bd8]]({
    'success'(ak0gzq) {
        window[v[0x7bb1]] = v[0x7bd9] + ak0gzq[v[0x7bda]] + v[0x7bdb] + ak0gzq[v[0x7bdc]] + v[0x7bdd] + ak0gzq[v[0x1351]] + v[0x7bde] + ak0gzq[v[0x1e1]] + v[0x7bdf] + ak0gzq[v[0x66c8]] + v[0x7be0] + ak0gzq[v[0x7bba]] + v[0x7be1] + ak0gzq[v[0x235d]], console[v[0x1e8]](window[v[0x7bb1]]), console[v[0x1e8]](v[0x7be2] + ak0gzq[v[0x7be3]] + v[0x7be4] + ak0gzq[v[0x7be5]] + v[0x7be6] + ak0gzq[v[0x7be7]] + v[0x7be8] + ak0gzq[v[0x7be9]] + v[0x7bea] + ak0gzq[v[0x7beb]] + v[0x7bec] + ak0gzq[v[0x7bed]] + v[0x7bee] + (ak0gzq[v[0x7bef]] ? ak0gzq[v[0x7bef]][v[0x143]] + ',' + ak0gzq[v[0x7bef]][v[0x4fd]] + ',' + ak0gzq[v[0x7bef]][v[0x4ff]] + ',' + ak0gzq[v[0x7bef]][v[0x4fe]] : ''));
        var r18bw = ak0gzq[v[0x1e1]] ? ak0gzq[v[0x1e1]][v[0x3073]]() : '',
            wrx8 = ak0gzq[v[0x7bdc]] ? ak0gzq[v[0x7bdc]][v[0x3073]]()[v[0x1114]]('\x20', '') : '';
        window['D$LZ'][v[0x45d]] = r18bw[v[0x73]](v[0x7bf0]) != -0x1, window['D$LZ'][v[0x2bb3]] = r18bw[v[0x73]](v[0x7bf1]) != -0x1, window['D$LZ'][v[0x7bf2]] = r18bw[v[0x73]](v[0x7bf0]) != -0x1 || r18bw[v[0x73]](v[0x7bf1]) != -0x1, window['D$LZ'][v[0x65af]] = r18bw[v[0x73]](v[0x7bf3]) != -0x1 || r18bw[v[0x73]](v[0x7bf4]) != -0x1, window['D$LZ'][v[0x7bf5]] = ak0gzq[v[0x66c8]] ? ak0gzq[v[0x66c8]][v[0x3073]]() : '', window['D$LZ']['D$YSAZL'] = ![], window['D$LZ']['D$YSLAZ'] = 0x2;
        if (r18bw[v[0x73]](v[0x7bf1]) != -0x1) {
            if (ak0gzq[v[0x235d]] >= 0x18) window['D$LZ']['D$YSLAZ'] = 0x3;else window['D$LZ']['D$YSLAZ'] = 0x2;
        } else {
            if (r18bw[v[0x73]](v[0x7bf0]) != -0x1) {
                if (ak0gzq[v[0x235d]] && ak0gzq[v[0x235d]] >= 0x14) window['D$LZ']['D$YSLAZ'] = 0x3;else {
                    if (wrx8[v[0x73]](v[0x7bf6]) != -0x1 || wrx8[v[0x73]](v[0x7bf7]) != -0x1 || wrx8[v[0x73]](v[0x7bf8]) != -0x1 || wrx8[v[0x73]](v[0x7bf9]) != -0x1 || wrx8[v[0x73]](v[0x7bfa]) != -0x1) window['D$LZ']['D$YSLAZ'] = 0x2;else window['D$LZ']['D$YSLAZ'] = 0x3;
                }
            } else window['D$LZ']['D$YSLAZ'] = 0x2;
        }
        console[v[0x1e8]](v[0x7bfb] + window['D$LZ']['D$YSAZL'] + v[0x7bfc] + window['D$LZ']['D$YSLAZ']);
    }
}), wx[v[0x7bfd]]({
    'success': function (lv$7p) {
        console[v[0x1e8]](v[0x7bfe] + lv$7p[v[0x1088]] + v[0x7bff] + lv$7p[v[0x7c00]]);
    }
}), wx[v[0x2de0]]({
    'success': function (m6h4n) {
        console[v[0x1e8]](v[0x7c01] + m6h4n[v[0x3402]]);
    }
}), wx[v[0x7c02]]({ 'keepScreenOn': !![] }), wx[v[0x2de2]](function (kuqfg) {
    console[v[0x1e8]](v[0x7c01] + kuqfg[v[0x3402]] + v[0x7c03] + kuqfg[v[0x7c04]]);
}), wx[v[0x29b6]](function (c93o52) {
    window['D$AS'] = c93o52, window['D$ZSA'] && window['D$AS'] && (console[v[0x4e]](v[0x7c05] + window['D$AS'][v[0x332]]), window['D$ZSA'](window['D$AS']), window['D$AS'] = null);
}), window[v[0x7c06]] = 0x0, window['D$YLAZS'] = 0x0, window[v[0x7c07]] = null, wx[v[0x7c08]](function () {
    window['D$YLAZS']++;
    var gt0fkq = Date[v[0x53]]();
    (window[v[0x7c06]] == 0x0 || gt0fkq - window[v[0x7c06]] > 0x1d4c0) && (console[v[0x60]](v[0x7c09]), wx[v[0x2e9a]]());
    if (window['D$YLAZS'] >= 0x2) {
        window['D$YLAZS'] = 0x0, console[v[0x7d]](v[0x7c0a]), wx[v[0x7c0b]]('0', 0x1);
        if (window['D$LZ'] && window['D$LZ'][v[0x45d]]) window['D$LZS'](v[0x7c0c], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});