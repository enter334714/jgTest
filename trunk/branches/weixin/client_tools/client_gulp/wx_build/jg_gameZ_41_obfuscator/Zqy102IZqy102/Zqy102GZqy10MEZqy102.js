var J = wx.h$;
console[J[0x1]](J[0x2]), window[J[0x3]], wx[J[0x4]](function (i1x74) {
    if (i1x74) {
        if (i1x74[J[0x5]]) {
            var b6g = window[J[0x6]][J[0x7]][J[0x8]](new RegExp(/\./, 'g'), '_'),
                chpe = i1x74[J[0x5]],
                zt6 = chpe[J[0x9]](/(Zqy10Zqy10Zqy10Zqy10Zqy10\/Zqy102GZqy10MEZqy102.js:)[0-9]{1,60}(:)/g);
            if (zt6) for (var kqb0d = 0x0; kqb0d < zt6[J[0xa]]; kqb0d++) {
                if (zt6[kqb0d] && zt6[kqb0d][J[0xa]] > 0x0) {
                    var d6c8tg = parseInt(zt6[kqb0d][J[0x8]](J[0xb], '')[J[0x8]](':', ''));
                    chpe = chpe[J[0x8]](zt6[kqb0d], zt6[kqb0d][J[0x8]](':' + d6c8tg + ':', ':' + (d6c8tg - 0x2) + ':'));
                }
            }
            chpe = chpe[J[0x8]](new RegExp(J[0xc], 'g'), J[0xd] + b6g + J[0xe]), chpe = chpe[J[0x8]](new RegExp(J[0xf], 'g'), J[0xd] + b6g + J[0xe]), i1x74[J[0x5]] = chpe;
        }
        var rjix = {
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
            'stack': i1x74 ? i1x74[J[0x5]] : ''
        },
            echz8 = JSON[J[0x1c]](rjix);
        console[J[0x1d]](J[0x1e] + echz8), (!window[J[0x3]] || window[J[0x3]] != rjix[J[0x1d]]) && (window[J[0x3]] = rjix[J[0x1d]], window[J[0x1f]](rjix));
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
var glu3a4m = { 'J1G54QJ': !![] };
new window[J[0x25]](glu3a4m), window[J[0x25]][J[0x26]][J[0x27]]();
if (window[J[0x28]]) clearInterval(window[J[0x28]]);
window[J[0x28]] = null, window[J[0x29]] = function (vry5, b5gk) {
    if (!vry5 || !b5gk) return 0x0;
    vry5 = vry5[J[0x2a]]('.'), b5gk = b5gk[J[0x2a]]('.');
    const q5kb0g = Math[J[0x2b]](vry5[J[0xa]], b5gk[J[0xa]]);
    while (vry5[J[0xa]] < q5kb0g) {
        vry5[J[0x2c]]('0');
    }
    while (b5gk[J[0xa]] < q5kb0g) {
        b5gk[J[0x2c]]('0');
    }
    for (var nxvj7i = 0x0; nxvj7i < q5kb0g; nxvj7i++) {
        const jrix = parseInt(vry5[nxvj7i]),
              jrx7i = parseInt(b5gk[nxvj7i]);
        if (jrix > jrx7i) return 0x1;else {
            if (jrix < jrx7i) return -0x1;
        }
    }
    return 0x0;
}, window[J[0x2d]] = wx[J[0x2e]]()[J[0x2d]], console[J[0x2f]](J[0x30] + window[J[0x2d]]);
var gxijn1 = wx[J[0x31]]();
gxijn1[J[0x32]](function (u34alm) {
    console[J[0x2f]](J[0x33] + u34alm[J[0x34]]);
}), gxijn1[J[0x35]](function () {
    wx[J[0x36]]({
        'title': J[0x37],
        'content': J[0x38],
        'showCancel': ![],
        'success': function (e2_wzp) {
            gxijn1[J[0x39]]();
        }
    });
}), gxijn1[J[0x3a]](function () {
    console[J[0x2f]](J[0x3b]);
}), window[J[0x3c]] = function () {
    console[J[0x2f]](J[0x3d]);
    var yojv5r = wx[J[0x3e]]({
        'name': J[0x3f],
        'success': function (te_hp) {
            console[J[0x2f]](J[0x40]), console[J[0x2f]](te_hp), te_hp && te_hp[J[0x41]] == J[0x42] ? (window[J[0x43]] = !![], window[J[0x44]](), window[J[0x45]]()) : setTimeout(function () {
                window[J[0x3c]]();
            }, 0x1f4);
        },
        'fail': function (g0d68k) {
            console[J[0x2f]](J[0x46]), console[J[0x2f]](g0d68k), setTimeout(function () {
                window[J[0x3c]]();
            }, 0x1f4);
        }
    });
    yojv5r && yojv5r[J[0x47]](jvix7r => {});
}, window[J[0x48]] = function () {
    console[J[0x2f]](J[0x49]);
    var e2wp_ = wx[J[0x3e]]({
        'name': J[0x4a],
        'success': function (ew_92p) {
            console[J[0x2f]](J[0x4b]), console[J[0x2f]](ew_92p), ew_92p && ew_92p[J[0x41]] == J[0x42] ? (window[J[0x4c]] = !![], window[J[0x44]](), window[J[0x45]]()) : setTimeout(function () {
                window[J[0x48]]();
            }, 0x1f4);
        },
        'fail': function (zec8h) {
            console[J[0x2f]](J[0x4d]), console[J[0x2f]](zec8h), setTimeout(function () {
                window[J[0x48]]();
            }, 0x1f4);
        }
    });
    e2wp_ && e2wp_[J[0x47]](jvxn => {});
}, window[J[0x4e]] = function () {
    window[J[0x29]](window[J[0x2d]], J[0x4f]) >= 0x0 ? (console[J[0x2f]](J[0x50] + window[J[0x2d]] + J[0x51]), window[J[0x52]](), window[J[0x3c]](), window[J[0x48]]()) : (window[J[0x53]](J[0x54], window[J[0x2d]]), wx[J[0x36]]({
        'title': J[0x55],
        'content': J[0x56]
    }));
}, window[J[0x1a]] = '', wx[J[0x57]]({
    'success'(p_2e9) {
        window[J[0x1a]] = J[0x58] + p_2e9[J[0x59]] + J[0x5a] + p_2e9[J[0x5b]] + J[0x5c] + p_2e9[J[0x5d]] + J[0x5e] + p_2e9[J[0x5f]] + J[0x60] + p_2e9[J[0x61]] + J[0x62] + p_2e9[J[0x2d]] + J[0x63] + p_2e9[J[0x64]], console[J[0x2f]](window[J[0x1a]]), console[J[0x2f]](J[0x65] + p_2e9[J[0x66]] + J[0x67] + p_2e9[J[0x68]] + J[0x69] + p_2e9[J[0x6a]] + J[0x6b] + p_2e9[J[0x6c]] + J[0x6d] + p_2e9[J[0x6e]] + J[0x6f] + p_2e9[J[0x70]] + J[0x71] + (p_2e9[J[0x72]] ? p_2e9[J[0x72]][J[0x73]] + ',' + p_2e9[J[0x72]][J[0x74]] + ',' + p_2e9[J[0x72]][J[0x75]] + ',' + p_2e9[J[0x72]][J[0x76]] : ''));
        var yoqb50 = p_2e9[J[0x5f]] ? p_2e9[J[0x5f]][J[0x77]]() : '',
            $swf9 = p_2e9[J[0x5b]] ? p_2e9[J[0x5b]][J[0x77]]()[J[0x8]]('\x20', '') : '';
        window[J[0x10]][J[0x78]] = yoqb50[J[0x79]](J[0x7a]) != -0x1, window[J[0x10]][J[0x7b]] = yoqb50[J[0x79]](J[0x7c]) != -0x1, window[J[0x10]][J[0x7d]] = yoqb50[J[0x79]](J[0x7a]) != -0x1 || yoqb50[J[0x79]](J[0x7c]) != -0x1, window[J[0x10]][J[0x7e]] = yoqb50[J[0x79]](J[0x7f]) != -0x1 || yoqb50[J[0x79]](J[0x80]) != -0x1, window[J[0x10]][J[0x81]] = p_2e9[J[0x61]] ? p_2e9[J[0x61]][J[0x77]]() : '', window[J[0x10]][J[0x82]] = ![], window[J[0x10]][J[0x83]] = 0x2;
        if (yoqb50[J[0x79]](J[0x7c]) != -0x1) {
            if (p_2e9[J[0x64]] >= 0x18) window[J[0x10]][J[0x83]] = 0x3;else window[J[0x10]][J[0x83]] = 0x2;
        } else {
            if (yoqb50[J[0x79]](J[0x7a]) != -0x1) {
                if (p_2e9[J[0x64]] && p_2e9[J[0x64]] >= 0x14) window[J[0x10]][J[0x83]] = 0x3;else {
                    if ($swf9[J[0x79]](J[0x84]) != -0x1 || $swf9[J[0x79]](J[0x85]) != -0x1 || $swf9[J[0x79]](J[0x86]) != -0x1 || $swf9[J[0x79]](J[0x87]) != -0x1 || $swf9[J[0x79]](J[0x88]) != -0x1) window[J[0x10]][J[0x83]] = 0x2;else window[J[0x10]][J[0x83]] = 0x3;
                }
            } else window[J[0x10]][J[0x83]] = 0x2;
        }
        console[J[0x2f]](J[0x89] + window[J[0x10]][J[0x82]] + J[0x8a] + window[J[0x10]][J[0x83]]);
    }
}), wx[J[0x8b]]({
    'success': function (gb0d6k) {
        console[J[0x2f]](J[0x8c] + gb0d6k[J[0x8d]] + J[0x8e] + gb0d6k[J[0x8f]]);
    }
}), wx[J[0x90]]({
    'success': function (gb60dk) {
        console[J[0x2f]](J[0x91] + gb60dk[J[0x92]]);
    }
}), wx[J[0x93]]({ 'keepScreenOn': !![] }), wx[J[0x94]](function (hz86ct) {
    console[J[0x2f]](J[0x91] + hz86ct[J[0x92]] + J[0x95] + hz86ct[J[0x96]]);
}), wx[J[0x97]](function (o5yv) {
    window[J[0x98]] = o5yv, window[J[0x99]] && window[J[0x98]] && (console[J[0x1]](J[0x9a] + window[J[0x98]][J[0x9b]]), window[J[0x99]](window[J[0x98]]), window[J[0x98]] = null);
}), window[J[0x9c]] = 0x0, window[J[0x9d]] = 0x0, window[J[0x9e]] = null, wx[J[0x9f]](function () {
    window[J[0x9d]]++;
    var dk68g0 = Date[J[0xa0]]();
    (window[J[0x9c]] == 0x0 || dk68g0 - window[J[0x9c]] > 0x1d4c0) && (console[J[0xa1]](J[0xa2]), wx[J[0xa3]]());
    if (window[J[0x9d]] >= 0x2) {
        window[J[0x9d]] = 0x0, console[J[0x1d]](J[0xa4]), wx[J[0xa5]]('0', 0x1);
        if (window[J[0x10]] && window[J[0x10]][J[0x78]]) window[J[0x53]](J[0xa6], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});