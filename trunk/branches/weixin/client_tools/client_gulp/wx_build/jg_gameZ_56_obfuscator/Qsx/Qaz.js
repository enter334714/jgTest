var u = wx.$x;
console[u[0xbc]](u[0x8a94]), window[u[0x8a95]], wx[u[0x8a96]](function (ru2_f) {
    if (ru2_f) {
        if (ru2_f[u[0x1229]]) {
            var r_f2 = window[u[0x2ba]][u[0x8a97]][u[0x1100]](new RegExp(/\./, 'g'), '_'),
                wdvy7 = ru2_f[u[0x1229]],
                $ywp7 = wdvy7[u[0x3218]](/(Qfv\/Qaz.js:)[0-9]{1,60}(:)/g);
            if ($ywp7) for (var f_o8u2 = 0x0; f_o8u2 < $ywp7[u[0x7a]]; f_o8u2++) {
                if ($ywp7[f_o8u2] && $ywp7[f_o8u2][u[0x7a]] > 0x0) {
                    var kzrf = parseInt($ywp7[f_o8u2][u[0x1100]](u[0x8a98], '')[u[0x1100]](':', ''));
                    wdvy7 = wdvy7[u[0x1100]]($ywp7[f_o8u2], $ywp7[f_o8u2][u[0x1100]](':' + kzrf + ':', ':' + (kzrf - 0x2) + ':'));
                }
            }
            wdvy7 = wdvy7[u[0x1100]](new RegExp(u[0x8a99], 'g'), u[0x8a9a] + r_f2 + u[0x6c5b]), wdvy7 = wdvy7[u[0x1100]](new RegExp(u[0x8a9b], 'g'), u[0x8a9a] + r_f2 + u[0x6c5b]), ru2_f[u[0x1229]] = wdvy7;
        }
        var aevdy = {
            'id': window[u[0x1227]][u[0x8a9c]],
            'role': window[u[0x1227]][u[0x12aa]],
            'level': window[u[0x1227]][u[0x8a9d]],
            'user': window[u[0x1227]][u[0x6bec]],
            'version': window[u[0x1227]][u[0xd7]],
            'cdn': window[u[0x1227]][u[0x1224]],
            'pkgName': window[u[0x1227]][u[0x6bee]],
            'gamever': window[u[0x2ba]][u[0x8a97]],
            'serverid': window[u[0x1227]][u[0x6be8]] ? window[u[0x1227]][u[0x6be8]][u[0x4e]] : 0x0,
            'systemInfo': window[u[0x8a9e]],
            'error': u[0x8a9f],
            'stack': ru2_f ? ru2_f[u[0x1229]] : ''
        },
            kz3xcg = JSON[u[0x1216]](aevdy);
        console[u[0xf9]](u[0x8aa0] + kz3xcg), (!window[u[0x8a95]] || window[u[0x8a95]] != aevdy[u[0xf9]]) && (window[u[0x8a95]] = aevdy[u[0xf9]], window[u[0x8aa1]](aevdy));
    }
});
import 'Qwei.js';
import 'Qasd.js';
window[u[0x8aa2]] = require(u[0x8aa3]);
import 'Qhn.js';
import 'Qweu.js';
import 'Qwey.js';
import 'Qjm.js';
console[u[0xbc]](u[0x8aa4]), console[u[0xbc]](u[0x8aa5]), x1402Q({ 'title': u[0x8aa6] });
var x_8bqol = { 'x1O4Q02': !![] };
new window[u[0x8aa7]](x_8bqol), window[u[0x8aa7]][u[0x110]][u[0x8aa8]]();
if (window[u[0x8aa9]]) clearInterval(window[u[0x8aa9]]);
window[u[0x8aa9]] = null, window[u[0x8aaa]] = function (b_qo8, fr_8u2) {
    if (!b_qo8 || !fr_8u2) return 0x0;
    b_qo8 = b_qo8[u[0x7c]]('.'), fr_8u2 = fr_8u2[u[0x7c]]('.');
    const i4he1a = Math[u[0x415]](b_qo8[u[0x7a]], fr_8u2[u[0x7a]]);
    while (b_qo8[u[0x7a]] < i4he1a) {
        b_qo8[u[0x8b]]('0');
    }
    while (fr_8u2[u[0x7a]] < i4he1a) {
        fr_8u2[u[0x8b]]('0');
    }
    for (var cz53gx = 0x0; cz53gx < i4he1a; cz53gx++) {
        const tx5mg = parseInt(b_qo8[cz53gx]),
              zrf = parseInt(fr_8u2[cz53gx]);
        if (tx5mg > zrf) return 0x1;else {
            if (tx5mg < zrf) return -0x1;
        }
    }
    return 0x0;
}, window[u[0x8aab]] = wx[u[0x8aac]]()[u[0x8aab]], console[u[0x26e]](u[0x8aad] + window[u[0x8aab]]);
var xt6$m50 = wx[u[0x8aae]]();
xt6$m50[u[0x8aaf]](function (xcgz35) {
    console[u[0x26e]](u[0x8ab0] + xcgz35[u[0x8ab1]]);
}), xt6$m50[u[0x8ab2]](function () {
    wx[u[0x8ab3]]({
        'title': u[0x8ab4],
        'content': u[0x8ab5],
        'showCancel': ![],
        'success': function (f8o2_u) {
            xt6$m50[u[0x8ab6]]();
        }
    });
}), xt6$m50[u[0x8ab7]](function () {
    console[u[0x26e]](u[0x8ab8]);
}), window[u[0x8ab9]] = function () {
    console[u[0x26e]](u[0x8aba]);
    var u8of2 = wx[u[0x8abb]]({
        'name': u[0x8abc],
        'success': function (cm56tg) {
            console[u[0x26e]](u[0x8abd]), console[u[0x26e]](cm56tg), cm56tg && cm56tg[u[0x6cc1]] == u[0x8abe] ? (window[u[0x8abf]] = !![], window[u[0x8ac0]](), window[u[0x8ac1]]()) : setTimeout(function () {
                window[u[0x8ab9]]();
            }, 0x1f4);
        },
        'fail': function (ku_f2r) {
            console[u[0x26e]](u[0x8ac2]), console[u[0x26e]](ku_f2r), setTimeout(function () {
                window[u[0x8ab9]]();
            }, 0x1f4);
        }
    });
    u8of2 && u8of2[u[0x867f]](mcxg5 => {});
}, window[u[0x8ac3]] = function () {
    console[u[0x26e]](u[0x8ac4]);
    var pv7yw = wx[u[0x8abb]]({
        'name': u[0x8ac5],
        'success': function (pw7$s) {
            console[u[0x26e]](u[0x8ac6]), console[u[0x26e]](pw7$s), pw7$s && pw7$s[u[0x6cc1]] == u[0x8abe] ? (window[u[0x8ac7]] = !![], window[u[0x8ac0]](), window[u[0x8ac1]]()) : setTimeout(function () {
                window[u[0x8ac3]]();
            }, 0x1f4);
        },
        'fail': function (r3zxk) {
            console[u[0x26e]](u[0x8ac8]), console[u[0x26e]](r3zxk), setTimeout(function () {
                window[u[0x8ac3]]();
            }, 0x1f4);
        }
    });
    pv7yw && pv7yw[u[0x867f]](gkz => {});
}, window[u[0x8ac9]] = function () {
    window[u[0x8aaa]](window[u[0x8aab]], u[0x8aca]) >= 0x0 ? (console[u[0x26e]](u[0x8acb] + window[u[0x8aab]] + u[0x8acc]), window[u[0x8acd]](), window[u[0x8ab9]](), window[u[0x8ac3]]()) : (window[u[0x8ace]](u[0x8acf], window[u[0x8aab]]), wx[u[0x8ab3]]({
        'title': u[0x1858],
        'content': u[0x8ad0]
    }));
}, window[u[0x8a9e]] = '', wx[u[0x8ad1]]({
    'success'($7w) {
        window[u[0x8a9e]] = u[0x8ad2] + $7w[u[0x8ad3]] + u[0x8ad4] + $7w[u[0x8ad5]] + u[0x8ad6] + $7w[u[0x1564]] + u[0x8ad7] + $7w[u[0x267]] + u[0x8ad8] + $7w[u[0x6bbe]] + u[0x8ad9] + $7w[u[0x8aab]] + u[0x8ada] + $7w[u[0x25f1]], console[u[0x26e]](window[u[0x8a9e]]), console[u[0x26e]](u[0x8adb] + $7w[u[0x79dd]] + u[0x8adc] + $7w[u[0x8add]] + u[0x8ade] + $7w[u[0x8adf]] + u[0x8ae0] + $7w[u[0x8ae1]] + u[0x8ae2] + $7w[u[0x8ae3]] + u[0x8ae4] + $7w[u[0x8ae5]] + u[0x8ae6] + ($7w[u[0x8ae7]] ? $7w[u[0x8ae7]][u[0x1c5]] + ',' + $7w[u[0x8ae7]][u[0x601]] + ',' + $7w[u[0x8ae7]][u[0x603]] + ',' + $7w[u[0x8ae7]][u[0x602]] : ''));
        var vws7dy = $7w[u[0x267]] ? $7w[u[0x267]][u[0x335a]]() : '',
            a71ydv = $7w[u[0x8ad5]] ? $7w[u[0x8ad5]][u[0x335a]]()[u[0x1100]]('\x20', '') : '';
        window[u[0x1227]][u[0x4f6]] = vws7dy[u[0xe6]](u[0x8ae8]) != -0x1, window[u[0x1227]][u[0x2e46]] = vws7dy[u[0xe6]](u[0x58]) != -0x1, window[u[0x1227]][u[0x8ae9]] = vws7dy[u[0xe6]](u[0x8ae8]) != -0x1 || vws7dy[u[0xe6]](u[0x58]) != -0x1, window[u[0x1227]][u[0x6a8a]] = vws7dy[u[0xe6]](u[0x8aea]) != -0x1 || vws7dy[u[0xe6]](u[0x8aeb]) != -0x1, window[u[0x1227]][u[0x8aec]] = $7w[u[0x6bbe]] ? $7w[u[0x6bbe]][u[0x335a]]() : '', window[u[0x1227]][u[0x8aed]] = ![], window[u[0x1227]][u[0x8aee]] = 0x2;
        if (vws7dy[u[0xe6]](u[0x58]) != -0x1) {
            if ($7w[u[0x25f1]] >= 0x18) window[u[0x1227]][u[0x8aee]] = 0x3;else window[u[0x1227]][u[0x8aee]] = 0x2;
        } else {
            if (vws7dy[u[0xe6]](u[0x8ae8]) != -0x1) {
                if ($7w[u[0x25f1]] && $7w[u[0x25f1]] >= 0x14) window[u[0x1227]][u[0x8aee]] = 0x3;else {
                    if (a71ydv[u[0xe6]](u[0x8aef]) != -0x1 || a71ydv[u[0xe6]](u[0x8af0]) != -0x1 || a71ydv[u[0xe6]](u[0x8af1]) != -0x1 || a71ydv[u[0xe6]](u[0x8af2]) != -0x1 || a71ydv[u[0xe6]](u[0x8af3]) != -0x1) window[u[0x1227]][u[0x8aee]] = 0x2;else window[u[0x1227]][u[0x8aee]] = 0x3;
                }
            } else window[u[0x1227]][u[0x8aee]] = 0x2;
        }
        console[u[0x26e]](u[0x8af4] + window[u[0x1227]][u[0x8aed]] + u[0x8af5] + window[u[0x1227]][u[0x8aee]]);
    }
}), wx[u[0x8af6]]({
    'success': function (zrf3) {
        console[u[0x26e]](u[0x8af7] + zrf3[u[0x1292]] + u[0x8af8] + zrf3[u[0x8af9]]);
    }
}), wx[u[0x306d]]({
    'success': function (gx3rz) {
        console[u[0x26e]](u[0x8afa] + gx3rz[u[0x378e]]);
    }
}), wx[u[0x8afb]]({ 'keepScreenOn': !![] }), wx[u[0x306f]](function (i4h91) {
    console[u[0x26e]](u[0x8afa] + i4h91[u[0x378e]] + u[0x8afc] + i4h91[u[0x8afd]]);
}), wx[u[0x2c4a]](function (oblq_8) {
    window[u[0x8afe]] = oblq_8, window[u[0x8aff]] && window[u[0x8afe]] && (console[u[0xbc]](u[0x8b00] + window[u[0x8afe]][u[0x3c8]]), window[u[0x8aff]](window[u[0x8afe]]), window[u[0x8afe]] = null);
}), window[u[0x8b01]] = 0x0, window[u[0x8b02]] = 0x0, window[u[0x8b03]] = null, wx[u[0x8b04]](function () {
    window[u[0x8b02]]++;
    var eah1 = Date[u[0xc1]]();
    (window[u[0x8b01]] == 0x0 || eah1 - window[u[0x8b01]] > 0x1d4c0) && (console[u[0xd0]](u[0x8b05]), wx[u[0x3175]]());
    if (window[u[0x8b02]] >= 0x2) {
        window[u[0x8b02]] = 0x0, console[u[0xf9]](u[0x8b06]), wx[u[0x8b07]]('0', 0x1);
        if (window[u[0x1227]] && window[u[0x1227]][u[0x4f6]]) window[u[0x8ace]](u[0x8b08], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});