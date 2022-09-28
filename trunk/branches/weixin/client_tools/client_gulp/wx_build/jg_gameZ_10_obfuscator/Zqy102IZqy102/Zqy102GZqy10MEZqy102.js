var J = wx.h$;
console[J[0x3c0]](J[0x3c1]), window[J[0x3c2]], wx[J[0x3c3]](function (yxj7) {
    if (yxj7) {
        if (yxj7[J[0x38]]) {
            var pzht_ = window[J[0x3c4]][J[0x3c5]][J[0xf3]](new RegExp(/\./, 'g'), '_'),
                u143ni = yxj7[J[0x38]],
                oqr5yv = u143ni[J[0x43]](/(Zqy10Zqy10Zqy10Zqy10Zqy10\/Zqy102GZqy10MEZqy102.js:)[0-9]{1,60}(:)/g);
            if (oqr5yv) for (var qdbgk = 0x0; qdbgk < oqr5yv[J[0x1f]]; qdbgk++) {
                if (oqr5yv[qdbgk] && oqr5yv[qdbgk][J[0x1f]] > 0x0) {
                    var g8cdk6 = parseInt(oqr5yv[qdbgk][J[0xf3]](J[0x3c6], '')[J[0xf3]](':', ''));
                    u143ni = u143ni[J[0xf3]](oqr5yv[qdbgk], oqr5yv[qdbgk][J[0xf3]](':' + g8cdk6 + ':', ':' + (g8cdk6 - 0x2) + ':'));
                }
            }
            u143ni = u143ni[J[0xf3]](new RegExp(J[0x3c7], 'g'), J[0x3c8] + pzht_ + J[0x3c9]), u143ni = u143ni[J[0xf3]](new RegExp(J[0x3ca], 'g'), J[0x3c8] + pzht_ + J[0x3c9]), yxj7[J[0x38]] = u143ni;
        }
        var niv7xj = {
            'id': window[J[0x3cb]][J[0x3cc]],
            'role': window[J[0x3cb]][J[0x3cd]],
            'level': window[J[0x3cb]][J[0x3ce]],
            'user': window[J[0x3cb]][J[0x3cf]],
            'version': window[J[0x3cb]][J[0x3d0]],
            'cdn': window[J[0x3cb]][J[0x3d1]],
            'pkgName': window[J[0x3cb]][J[0x3d2]],
            'gamever': window[J[0x3c4]][J[0x3c5]],
            'serverid': window[J[0x3cb]][J[0x3d3]] ? window[J[0x3cb]][J[0x3d3]][J[0x3d4]] : 0x0,
            'systemInfo': window[J[0x3d5]],
            'error': J[0x3d6],
            'stack': yxj7 ? yxj7[J[0x38]] : ''
        },
            k6d80 = JSON[J[0x3d7]](niv7xj);
        console[J[0x14d]](J[0x3d8] + k6d80), (!window[J[0x3c2]] || window[J[0x3c2]] != niv7xj[J[0x14d]]) && (window[J[0x3c2]] = niv7xj[J[0x14d]], window[J[0x3d9]](niv7xj));
    }
});
import 'Zqy10Zqy10bfZqy10Zqy10.js';
import 'Zqy10Zqy1011Zqy10Zqy10.js';
window[J[0x3da]] = require(J[0x3db]);
import 'Zqy10INDZqy10Zqy10.js';
import 'Zqy10Zqy10IZqy101Zqy10Zqy10.js';
import 'Zqy10Zqy10MtadZqy10Zqy10.js';
import 'Zqy10Zqy10INIZqy10aZqy10.js';
console[J[0x3c0]](J[0x3dc]), console[J[0x3c0]](J[0x3dd]), J15QJ4({ 'title': J[0x3de] });
var gpehz2 = { 'J1G54QJ': !![] };
new window[J[0x3df]](gpehz2), window[J[0x3df]][J[0x3e0]][J[0x3e1]]();
if (window[J[0x3e2]]) clearInterval(window[J[0x3e2]]);
window[J[0x3e2]] = null, window[J[0x3e3]] = function (a4lm3, r5vjoy) {
    if (!a4lm3 || !r5vjoy) return 0x0;
    a4lm3 = a4lm3[J[0xc9]]('.'), r5vjoy = r5vjoy[J[0xc9]]('.');
    const c6zth = Math[J[0x12d]](a4lm3[J[0x1f]], r5vjoy[J[0x1f]]);
    while (a4lm3[J[0x1f]] < c6zth) {
        a4lm3[J[0x42]]('0');
    }
    while (r5vjoy[J[0x1f]] < c6zth) {
        r5vjoy[J[0x42]]('0');
    }
    for (var g0qbk = 0x0; g0qbk < c6zth; g0qbk++) {
        const _w2f$9 = parseInt(a4lm3[g0qbk]),
              b0kgq5 = parseInt(r5vjoy[g0qbk]);
        if (_w2f$9 > b0kgq5) return 0x1;else {
            if (_w2f$9 < b0kgq5) return -0x1;
        }
    }
    return 0x0;
}, window[J[0x3e4]] = wx[J[0x3e5]]()[J[0x3e4]], console[J[0xe1]](J[0x3e6] + window[J[0x3e4]]);
var goy5bqr = wx[J[0x3e7]]();
goy5bqr[J[0x3e8]](function (a4u3lm) {
    console[J[0xe1]](J[0x3e9] + a4u3lm[J[0x3ea]]);
}), goy5bqr[J[0x3eb]](function () {
    wx[J[0x3ec]]({
        'title': J[0x3ed],
        'content': J[0x3ee],
        'showCancel': ![],
        'success': function (jvo5r) {
            goy5bqr[J[0x3ef]]();
        }
    });
}), goy5bqr[J[0x3f0]](function () {
    console[J[0xe1]](J[0x3f1]);
}), window[J[0x3f2]] = function () {
    console[J[0xe1]](J[0x3f3]);
    var f9$s = wx[J[0x3f4]]({
        'name': J[0x3f5],
        'success': function (hc86zt) {
            console[J[0xe1]](J[0x3f6]), console[J[0xe1]](hc86zt), hc86zt && hc86zt[J[0x3f7]] == J[0x3f8] ? (window[J[0x3f9]] = !![], window[J[0x3fa]](), window[J[0x3fb]]()) : setTimeout(function () {
                window[J[0x3f2]]();
            }, 0x1f4);
        },
        'fail': function (cth86d) {
            console[J[0xe1]](J[0x3fc]), console[J[0xe1]](cth86d), setTimeout(function () {
                window[J[0x3f2]]();
            }, 0x1f4);
        }
    });
    f9$s && f9$s[J[0x3fd]](d6cg => {});
}, window[J[0x3fe]] = function () {
    console[J[0xe1]](J[0x3ff]);
    var i314x = wx[J[0x3f4]]({
        'name': J[0x400],
        'success': function (w2_$) {
            console[J[0xe1]](J[0x401]), console[J[0xe1]](w2_$), w2_$ && w2_$[J[0x3f7]] == J[0x3f8] ? (window[J[0x402]] = !![], window[J[0x3fa]](), window[J[0x3fb]]()) : setTimeout(function () {
                window[J[0x3fe]]();
            }, 0x1f4);
        },
        'fail': function (vxyj) {
            console[J[0xe1]](J[0x403]), console[J[0xe1]](vxyj), setTimeout(function () {
                window[J[0x3fe]]();
            }, 0x1f4);
        }
    });
    i314x && i314x[J[0x3fd]](p2e9w_ => {});
}, window[J[0x404]] = function () {
    window[J[0x3e3]](window[J[0x3e4]], J[0x405]) >= 0x0 ? (console[J[0xe1]](J[0x406] + window[J[0x3e4]] + J[0x407]), window[J[0x408]](), window[J[0x3f2]](), window[J[0x3fe]]()) : (window[J[0x409]](J[0x40a], window[J[0x3e4]]), wx[J[0x3ec]]({
        'title': J[0x40b],
        'content': J[0x40c]
    }));
}, window[J[0x3d5]] = '', wx[J[0x40d]]({
    'success'(rv7yj) {
        window[J[0x3d5]] = J[0x40e] + rv7yj[J[0x40f]] + J[0x410] + rv7yj[J[0x411]] + J[0x412] + rv7yj[J[0x413]] + J[0x414] + rv7yj[J[0x415]] + J[0x416] + rv7yj[J[0x417]] + J[0x418] + rv7yj[J[0x3e4]] + J[0x419] + rv7yj[J[0x41a]], console[J[0xe1]](window[J[0x3d5]]), console[J[0xe1]](J[0x41b] + rv7yj[J[0x41c]] + J[0x41d] + rv7yj[J[0x41e]] + J[0x41f] + rv7yj[J[0x420]] + J[0x421] + rv7yj[J[0x422]] + J[0x423] + rv7yj[J[0x424]] + J[0x425] + rv7yj[J[0x426]] + J[0x427] + (rv7yj[J[0x428]] ? rv7yj[J[0x428]][J[0x429]] + ',' + rv7yj[J[0x428]][J[0x42a]] + ',' + rv7yj[J[0x428]][J[0x42b]] + ',' + rv7yj[J[0x428]][J[0x42c]] : ''));
        var or7yv = rv7yj[J[0x415]] ? rv7yj[J[0x415]][J[0x67]]() : '',
            l4u3m = rv7yj[J[0x411]] ? rv7yj[J[0x411]][J[0x67]]()[J[0xf3]]('\x20', '') : '';
        window[J[0x3cb]][J[0x42d]] = or7yv[J[0x92]](J[0x42e]) != -0x1, window[J[0x3cb]][J[0x42f]] = or7yv[J[0x92]](J[0x430]) != -0x1, window[J[0x3cb]][J[0x431]] = or7yv[J[0x92]](J[0x42e]) != -0x1 || or7yv[J[0x92]](J[0x430]) != -0x1, window[J[0x3cb]][J[0x432]] = or7yv[J[0x92]](J[0x433]) != -0x1 || or7yv[J[0x92]](J[0x434]) != -0x1, window[J[0x3cb]][J[0x435]] = rv7yj[J[0x417]] ? rv7yj[J[0x417]][J[0x67]]() : '', window[J[0x3cb]][J[0x436]] = ![], window[J[0x3cb]][J[0x437]] = 0x2;
        if (or7yv[J[0x92]](J[0x430]) != -0x1) {
            if (rv7yj[J[0x41a]] >= 0x18) window[J[0x3cb]][J[0x437]] = 0x3;else window[J[0x3cb]][J[0x437]] = 0x2;
        } else {
            if (or7yv[J[0x92]](J[0x42e]) != -0x1) {
                if (rv7yj[J[0x41a]] && rv7yj[J[0x41a]] >= 0x14) window[J[0x3cb]][J[0x437]] = 0x3;else {
                    if (l4u3m[J[0x92]](J[0x438]) != -0x1 || l4u3m[J[0x92]](J[0x439]) != -0x1 || l4u3m[J[0x92]](J[0x43a]) != -0x1 || l4u3m[J[0x92]](J[0x43b]) != -0x1 || l4u3m[J[0x92]](J[0x43c]) != -0x1) window[J[0x3cb]][J[0x437]] = 0x2;else window[J[0x3cb]][J[0x437]] = 0x3;
                }
            } else window[J[0x3cb]][J[0x437]] = 0x2;
        }
        console[J[0xe1]](J[0x43d] + window[J[0x3cb]][J[0x436]] + J[0x43e] + window[J[0x3cb]][J[0x437]]);
    }
}), wx[J[0x43f]]({
    'success': function (xvi7jn) {
        console[J[0xe1]](J[0x440] + xvi7jn[J[0x441]] + J[0x442] + xvi7jn[J[0x443]]);
    }
}), wx[J[0x444]]({
    'success': function (jv5r) {
        console[J[0xe1]](J[0x445] + jv5r[J[0x446]]);
    }
}), wx[J[0x447]]({ 'keepScreenOn': !![] }), wx[J[0x448]](function (wep92_) {
    console[J[0xe1]](J[0x445] + wep92_[J[0x446]] + J[0x449] + wep92_[J[0x44a]]);
}), wx[J[0x44b]](function (qy50b) {
    window[J[0x44c]] = qy50b, window[J[0x44d]] && window[J[0x44c]] && (console[J[0x3c0]](J[0x44e] + window[J[0x44c]][J[0x44f]]), window[J[0x44d]](window[J[0x44c]]), window[J[0x44c]] = null);
}), window[J[0x450]] = 0x0, window[J[0x451]] = 0x0, window[J[0x452]] = null, wx[J[0x453]](function () {
    window[J[0x451]]++;
    var e8hczt = Date[J[0x454]]();
    (window[J[0x450]] == 0x0 || e8hczt - window[J[0x450]] > 0x1d4c0) && (console[J[0x17f]](J[0x455]), wx[J[0x456]]());
    if (window[J[0x451]] >= 0x2) {
        window[J[0x451]] = 0x0, console[J[0x14d]](J[0x457]), wx[J[0x458]]('0', 0x1);
        if (window[J[0x3cb]] && window[J[0x3cb]][J[0x42d]]) window[J[0x409]](J[0x459], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});