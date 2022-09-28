var J = wx.h$;
console[J[0x1]](J[0x2]), window[J[0x3]], wx[J[0x4]](function (v7ji) {
    if (v7ji) {
        if (v7ji[J[0x5]]) {
            var f2_9p = window[J[0x6]][J[0x7]][J[0x8]](new RegExp(/\./, 'g'), '_'),
                d0kgb6 = v7ji[J[0x5]],
                w_2$ = d0kgb6[J[0x9]](/(Zqy10Zqy10Zqy10Zqy10Zqy10\/Zqy102GZqy10MEZqy102.js:)[0-9]{1,60}(:)/g);
            if (w_2$) for (var e_hpt = 0x0; e_hpt < w_2$[J[0xa]]; e_hpt++) {
                if (w_2$[e_hpt] && w_2$[e_hpt][J[0xa]] > 0x0) {
                    var w_9p2e = parseInt(w_2$[e_hpt][J[0x8]](J[0xb], '')[J[0x8]](':', ''));
                    d0kgb6 = d0kgb6[J[0x8]](w_2$[e_hpt], w_2$[e_hpt][J[0x8]](':' + w_9p2e + ':', ':' + (w_9p2e - 0x2) + ':'));
                }
            }
            d0kgb6 = d0kgb6[J[0x8]](new RegExp(J[0xc], 'g'), J[0xd] + f2_9p + J[0xe]), d0kgb6 = d0kgb6[J[0x8]](new RegExp(J[0xf], 'g'), J[0xd] + f2_9p + J[0xe]), v7ji[J[0x5]] = d0kgb6;
        }
        var nix341 = {
            'id': window[J[0x10]][J[0x11]],
            'role': window[J[0x10]][J[0x12]],
            'level': window[J[0x10]][J[0x13]],
            'user': window[J[0x10]][J[0x14]],
            'version': window[J[0x10]][J[0x15]],
            'cdn': window[J[0x10]][J[0x16]],
            'pkgName': window[J[0x10]][J[0x17]],
            'gamever': window[J[0x6]][J[0x7]],
            'serverid': window[J[0x10]][J[0x18]] ? window[J[0x10]][J[0x18]][J[0x19]] : 0x0,
            'systemInfo': window[J[0x1a]],
            'error': J[0x1b],
            'stack': v7ji ? v7ji[J[0x5]] : ''
        },
            vr7o = JSON[J[0x1c]](nix341);
        console[J[0x1d]](J[0x1e] + vr7o), (!window[J[0x3]] || window[J[0x3]] != nix341[J[0x1d]]) && (window[J[0x3]] = nix341[J[0x1d]], window[J[0x1f]](nix341));
    }
});
import 'Zqy10Zqy10bfZqy10Zqy10.js';
import 'Zqy10Zqy1011Zqy10Zqy10.js';
window[J[0x20]] = require(J[0x21]);
import 'Zqy10INDZqy10Zqy10.js';
import 'Zqy10Zqy10IZqy101Zqy10Zqy10.js';
import 'Zqy10Zqy10MtadZqy10Zqy10.js';
import 'Zqy10Zqy10INIZqy10aZqy10.js';
console[J[0x1]](J[0x22]), console[J[0x1]](J[0x23]), J15QJ4({ 'title': J[0x24] });
var gwsf$2 = { 'J1G54QJ': !![] };
new window[J[0x25]](gwsf$2), window[J[0x25]][J[0x26]][J[0x27]]();
if (window[J[0x28]]) clearInterval(window[J[0x28]]);
window[J[0x28]] = null, window[J[0x29]] = function (h6d8ct, u4a13l) {
    if (!h6d8ct || !u4a13l) return 0x0;
    h6d8ct = h6d8ct[J[0x2a]]('.'), u4a13l = u4a13l[J[0x2a]]('.');
    const e2p9_ = Math[J[0x2b]](h6d8ct[J[0xa]], u4a13l[J[0xa]]);
    while (h6d8ct[J[0xa]] < e2p9_) {
        h6d8ct[J[0x2c]]('0');
    }
    while (u4a13l[J[0xa]] < e2p9_) {
        u4a13l[J[0x2c]]('0');
    }
    for (var rx7vy = 0x0; rx7vy < e2p9_; rx7vy++) {
        const orqyv = parseInt(h6d8ct[rx7vy]),
              $ws9f2 = parseInt(u4a13l[rx7vy]);
        if (orqyv > $ws9f2) return 0x1;else {
            if (orqyv < $ws9f2) return -0x1;
        }
    }
    return 0x0;
}, window[J[0x2d]] = wx[J[0x2e]]()[J[0x2d]], console[J[0x2f]](J[0x30] + window[J[0x2d]]);
var gv7yjxr = wx[J[0x31]]();
gv7yjxr[J[0x32]](function (s9fw$2) {
    console[J[0x2f]](J[0x33] + s9fw$2[J[0x34]]);
}), gv7yjxr[J[0x35]](function () {
    wx[J[0x36]]({
        'title': J[0x37],
        'content': J[0x38],
        'showCancel': ![],
        'success': function (cetpzh) {
            gv7yjxr[J[0x39]]();
        }
    });
}), gv7yjxr[J[0x3a]](function () {
    console[J[0x2f]](J[0x3b]);
}), window[J[0x3c]] = function () {
    console[J[0x2f]](J[0x3d]);
    var c8tdh6 = wx[J[0x3e]]({
        'name': J[0x3f],
        'success': function (wf29$s) {
            console[J[0x2f]](J[0x40]), console[J[0x2f]](wf29$s), wf29$s && wf29$s[J[0x41]] == J[0x42] ? (window[J[0x43]] = !![], window[J[0x44]](), window[J[0x45]]()) : setTimeout(function () {
                window[J[0x3c]]();
            }, 0x1f4);
        },
        'fail': function (g5qk0b) {
            console[J[0x2f]](J[0x46]), console[J[0x2f]](g5qk0b), setTimeout(function () {
                window[J[0x3c]]();
            }, 0x1f4);
        }
    });
    c8tdh6 && c8tdh6[J[0x47]](ryvj7o => {});
}, window[J[0x48]] = function () {
    console[J[0x2f]](J[0x49]);
    var x7ryvj = wx[J[0x3e]]({
        'name': J[0x4a],
        'success': function (gd8ck6) {
            console[J[0x2f]](J[0x4b]), console[J[0x2f]](gd8ck6), gd8ck6 && gd8ck6[J[0x41]] == J[0x42] ? (window[J[0x4c]] = !![], window[J[0x44]](), window[J[0x45]]()) : setTimeout(function () {
                window[J[0x48]]();
            }, 0x1f4);
        },
        'fail': function (o0q5by) {
            console[J[0x2f]](J[0x4d]), console[J[0x2f]](o0q5by), setTimeout(function () {
                window[J[0x48]]();
            }, 0x1f4);
        }
    });
    x7ryvj && x7ryvj[J[0x47]](pthz_ => {});
}, window[J[0x4e]] = function () {
    window[J[0x29]](window[J[0x2d]], J[0x4f]) >= 0x0 ? (console[J[0x2f]](J[0x50] + window[J[0x2d]] + J[0x51]), window[J[0x52]](), window[J[0x3c]](), window[J[0x48]]()) : (window[J[0x53]](J[0x54], window[J[0x2d]]), wx[J[0x36]]({
        'title': J[0x55],
        'content': J[0x56]
    }));
}, window[J[0x1a]] = '', wx[J[0x57]]({
    'success'(fp2w_) {
        window[J[0x1a]] = J[0x58] + fp2w_[J[0x59]] + J[0x5a] + fp2w_[J[0x5b]] + J[0x5c] + fp2w_[J[0x5d]] + J[0x5e] + fp2w_[J[0x5f]] + J[0x60] + fp2w_[J[0x61]] + J[0x62] + fp2w_[J[0x2d]] + J[0x63] + fp2w_[J[0x64]], console[J[0x2f]](window[J[0x1a]]), console[J[0x2f]](J[0x65] + fp2w_[J[0x66]] + J[0x67] + fp2w_[J[0x68]] + J[0x69] + fp2w_[J[0x6a]] + J[0x6b] + fp2w_[J[0x6c]] + J[0x6d] + fp2w_[J[0x6e]] + J[0x6f] + fp2w_[J[0x70]] + J[0x71] + (fp2w_[J[0x72]] ? fp2w_[J[0x72]][J[0x73]] + ',' + fp2w_[J[0x72]][J[0x74]] + ',' + fp2w_[J[0x72]][J[0x75]] + ',' + fp2w_[J[0x72]][J[0x76]] : ''));
        var n3a41u = fp2w_[J[0x5f]] ? fp2w_[J[0x5f]][J[0x77]]() : '',
            p9_e = fp2w_[J[0x5b]] ? fp2w_[J[0x5b]][J[0x77]]()[J[0x8]]('\x20', '') : '';
        window[J[0x10]][J[0x78]] = n3a41u[J[0x79]](J[0x7a]) != -0x1, window[J[0x10]][J[0x7b]] = n3a41u[J[0x79]](J[0x7c]) != -0x1, window[J[0x10]][J[0x7d]] = n3a41u[J[0x79]](J[0x7a]) != -0x1 || n3a41u[J[0x79]](J[0x7c]) != -0x1, window[J[0x10]][J[0x7e]] = n3a41u[J[0x79]](J[0x7f]) != -0x1 || n3a41u[J[0x79]](J[0x80]) != -0x1, window[J[0x10]][J[0x81]] = fp2w_[J[0x61]] ? fp2w_[J[0x61]][J[0x77]]() : '', window[J[0x10]][J[0x82]] = ![], window[J[0x10]][J[0x83]] = 0x2;
        if (n3a41u[J[0x79]](J[0x7c]) != -0x1) {
            if (fp2w_[J[0x64]] >= 0x18) window[J[0x10]][J[0x83]] = 0x3;else window[J[0x10]][J[0x83]] = 0x2;
        } else {
            if (n3a41u[J[0x79]](J[0x7a]) != -0x1) {
                if (fp2w_[J[0x64]] && fp2w_[J[0x64]] >= 0x14) window[J[0x10]][J[0x83]] = 0x3;else {
                    if (p9_e[J[0x79]](J[0x84]) != -0x1 || p9_e[J[0x79]](J[0x85]) != -0x1 || p9_e[J[0x79]](J[0x86]) != -0x1 || p9_e[J[0x79]](J[0x87]) != -0x1 || p9_e[J[0x79]](J[0x88]) != -0x1) window[J[0x10]][J[0x83]] = 0x2;else window[J[0x10]][J[0x83]] = 0x3;
                }
            } else window[J[0x10]][J[0x83]] = 0x2;
        }
        console[J[0x2f]](J[0x89] + window[J[0x10]][J[0x82]] + J[0x8a] + window[J[0x10]][J[0x83]]);
    }
}), wx[J[0x8b]]({
    'success': function (kdqgb) {
        console[J[0x2f]](J[0x8c] + kdqgb[J[0x8d]] + J[0x8e] + kdqgb[J[0x8f]]);
    }
}), wx[J[0x90]]({
    'success': function (ehcpt) {
        console[J[0x2f]](J[0x91] + ehcpt[J[0x92]]);
    }
}), wx[J[0x93]]({ 'keepScreenOn': !![] }), wx[J[0x94]](function (k6dc8) {
    console[J[0x2f]](J[0x91] + k6dc8[J[0x92]] + J[0x95] + k6dc8[J[0x96]]);
}), wx[J[0x97]](function (ul4a) {
    window[J[0x98]] = ul4a, window[J[0x99]] && window[J[0x98]] && (console[J[0x1]](J[0x9a] + window[J[0x98]][J[0x9b]]), window[J[0x99]](window[J[0x98]]), window[J[0x98]] = null);
}), window[J[0x9c]] = 0x0, window[J[0x9d]] = 0x0, window[J[0x9e]] = null, wx[J[0x9f]](function () {
    window[J[0x9d]]++;
    var j1x7in = Date[J[0xa0]]();
    (window[J[0x9c]] == 0x0 || j1x7in - window[J[0x9c]] > 0x1d4c0) && (console[J[0xa1]](J[0xa2]), wx[J[0xa3]]());
    if (window[J[0x9d]] >= 0x2) {
        window[J[0x9d]] = 0x0, console[J[0x1d]](J[0xa4]), wx[J[0xa5]]('0', 0x1);
        if (window[J[0x10]] && window[J[0x10]][J[0x78]]) window[J[0x53]](J[0xa6], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});