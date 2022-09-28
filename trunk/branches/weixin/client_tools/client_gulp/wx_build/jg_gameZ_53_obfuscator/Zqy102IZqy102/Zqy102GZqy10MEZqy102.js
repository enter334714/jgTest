var J = wx.h$;
console[J[1]](J[2]), window[J[3]], wx[J[4]](function (hczept) {
    if (hczept) {
        if (hczept[J[5]]) {
            var h8ecz = window[J[6]][J[7]][J[8]](new RegExp(/\./, 'g'), '_'),
                _zeph2 = hczept[J[5]],
                oj7ry = _zeph2[J[9]](/(Zqy10Zqy10Zqy10Zqy10Zqy10\/Zqy102GZqy10MEZqy102.js:)[0-9]{1,60}(:)/g);
            if (oj7ry) for (var g0qb5 = 0x0; g0qb5 < oj7ry[J[10]]; g0qb5++) {
                if (oj7ry[g0qb5] && oj7ry[g0qb5][J[10]] > 0x0) {
                    var dgb0kq = parseInt(oj7ry[g0qb5][J[8]](J[11], '')[J[8]](':', ''));
                    _zeph2 = _zeph2[J[8]](oj7ry[g0qb5], oj7ry[g0qb5][J[8]](':' + dgb0kq + ':', ':' + (dgb0kq - 0x2) + ':'));
                }
            }
            _zeph2 = _zeph2[J[8]](new RegExp(J[12], 'g'), J[13] + h8ecz + J[14]), _zeph2 = _zeph2[J[8]](new RegExp(J[15], 'g'), J[13] + h8ecz + J[14]), hczept[J[5]] = _zeph2;
        }
        var phzetc = {
            'id': window[J[16]][J[17]],
            'role': window[J[16]][J[18]],
            'level': window[J[16]][J[19]],
            'user': window[J[16]][J[20]],
            'version': window[J[16]][J[21]],
            'cdn': window[J[16]][J[22]],
            'pkgName': window[J[16]][J[23]],
            'gamever': window[J[6]][J[7]],
            'serverid': window[J[16]][J[24]] ? window[J[16]][J[24]][J[25]] : 0x0,
            'systemInfo': window[J[26]],
            'error': J[27],
            'stack': hczept ? hczept[J[5]] : ''
        },
            obkq05 = JSON[J[28]](phzetc);
        console[J[29]](J[30] + obkq05), (!window[J[3]] || window[J[3]] != phzetc[J[29]]) && (window[J[3]] = phzetc[J[29]], window[J[31]](phzetc));
    }
});
import 'Zqy10Zqy10bfZqy10Zqy10.js';
import 'Zqy10Zqy1011Zqy10Zqy10.js';
window[J[32]] = require(J[33]);
import 'Zqy10INDZqy10Zqy10.js';
import 'Zqy10Zqy10IZqy101Zqy10Zqy10.js';
import 'Zqy10Zqy10MtadZqy10Zqy10.js';
import 'Zqy10Zqy10INIZqy10aZqy10.js';
console[J[1]](J[34]), console[J[1]](J[35]), J15QJ4({ 'title': J[36] });
var gf9_2$w = { 'J1G54QJ': !![] };
new window[J[37]](gf9_2$w), window[J[37]][J[38]][J[39]]();
if (window[J[40]]) clearInterval(window[J[40]]);
window[J[40]] = null, window[J[41]] = function (ryj5vo, njvx7i) {
    if (!ryj5vo || !njvx7i) return 0x0;
    ryj5vo = ryj5vo[J[42]]('.'), njvx7i = njvx7i[J[42]]('.');
    const ep_hz2 = Math[J[43]](ryj5vo[J[10]], njvx7i[J[10]]);
    while (ryj5vo[J[10]] < ep_hz2) {
        ryj5vo[J[44]]('0');
    }
    while (njvx7i[J[10]] < ep_hz2) {
        njvx7i[J[44]]('0');
    }
    for (var g6c = 0x0; g6c < ep_hz2; g6c++) {
        const _92wf = parseInt(ryj5vo[g6c]),
              p92we_ = parseInt(njvx7i[g6c]);
        if (_92wf > p92we_) return 0x1;else {
            if (_92wf < p92we_) return -0x1;
        }
    }
    return 0x0;
}, window[J[45]] = wx[J[46]]()[J[45]], console[J[47]](J[48] + window[J[45]]);
var gkc68g = wx[J[49]]();
gkc68g[J[50]](function (e2z_pw) {
    console[J[47]](J[51] + e2z_pw[J[52]]);
}), gkc68g[J[53]](function () {
    wx[J[54]]({
        'title': J[55],
        'content': J[56],
        'showCancel': ![],
        'success': function (ixn74) {
            gkc68g[J[57]]();
        }
    });
}), gkc68g[J[58]](function () {
    console[J[47]](J[59]);
}), window[J[60]] = function () {
    console[J[47]](J[61]);
    var v7xn = wx[J[62]]({
        'name': J[63],
        'success': function (zeh_) {
            console[J[47]](J[64]), console[J[47]](zeh_), zeh_ && zeh_[J[65]] == J[66] ? (window[J[67]] = !![], window[J[68]](), window[J[69]]()) : setTimeout(function () {
                window[J[60]]();
            }, 0x1f4);
        },
        'fail': function (la4m) {
            console[J[47]](J[70]), console[J[47]](la4m), setTimeout(function () {
                window[J[60]]();
            }, 0x1f4);
        }
    });
    v7xn && v7xn[J[71]](gq50bk => {});
}, window[J[72]] = function () {
    console[J[47]](J[73]);
    var ectphz = wx[J[62]]({
        'name': J[74],
        'success': function (yv7o) {
            console[J[47]](J[75]), console[J[47]](yv7o), yv7o && yv7o[J[65]] == J[66] ? (window[J[76]] = !![], window[J[68]](), window[J[69]]()) : setTimeout(function () {
                window[J[72]]();
            }, 0x1f4);
        },
        'fail': function (w_2p) {
            console[J[47]](J[77]), console[J[47]](w_2p), setTimeout(function () {
                window[J[72]]();
            }, 0x1f4);
        }
    });
    ectphz && ectphz[J[71]](ep29w_ => {});
}, window[J[78]] = function () {
    window[J[41]](window[J[45]], J[79]) >= 0x0 ? (console[J[47]](J[80] + window[J[45]] + J[81]), window[J[82]](), window[J[60]](), window[J[72]]()) : (window[J[83]](J[84], window[J[45]]), wx[J[54]]({
        'title': J[85],
        'content': J[86]
    }));
}, window[J[26]] = '', wx[J[87]]({
    'success'(ry5ovq) {
        window[J[26]] = J[88] + ry5ovq[J[89]] + J[90] + ry5ovq[J[91]] + J[92] + ry5ovq[J[93]] + J[94] + ry5ovq[J[95]] + J[96] + ry5ovq[J[97]] + J[98] + ry5ovq[J[45]] + J[99] + ry5ovq[J[100]], console[J[47]](window[J[26]]), console[J[47]](J[101] + ry5ovq[J[102]] + J[103] + ry5ovq[J[104]] + J[105] + ry5ovq[J[106]] + J[107] + ry5ovq[J[108]] + J[109] + ry5ovq[J[110]] + J[111] + ry5ovq[J[112]] + J[113] + (ry5ovq[J[114]] ? ry5ovq[J[114]][J[115]] + ',' + ry5ovq[J[114]][J[116]] + ',' + ry5ovq[J[114]][J[117]] + ',' + ry5ovq[J[114]][J[118]] : ''));
        var x1i7n4 = ry5ovq[J[95]] ? ry5ovq[J[95]][J[119]]() : '',
            oq5yvr = ry5ovq[J[91]] ? ry5ovq[J[91]][J[119]]()[J[8]]('\x20', '') : '';
        window[J[16]][J[120]] = x1i7n4[J[121]](J[122]) != -0x1, window[J[16]][J[123]] = x1i7n4[J[121]](J[124]) != -0x1, window[J[16]][J[125]] = x1i7n4[J[121]](J[122]) != -0x1 || x1i7n4[J[121]](J[124]) != -0x1, window[J[16]][J[126]] = x1i7n4[J[121]](J[127]) != -0x1 || x1i7n4[J[121]](J[128]) != -0x1, window[J[16]][J[129]] = ry5ovq[J[97]] ? ry5ovq[J[97]][J[119]]() : '', window[J[16]][J[130]] = ![], window[J[16]][J[131]] = 0x2;
        if (x1i7n4[J[121]](J[124]) != -0x1) {
            if (ry5ovq[J[100]] >= 0x18) window[J[16]][J[131]] = 0x3;else window[J[16]][J[131]] = 0x2;
        } else {
            if (x1i7n4[J[121]](J[122]) != -0x1) {
                if (ry5ovq[J[100]] && ry5ovq[J[100]] >= 0x14) window[J[16]][J[131]] = 0x3;else {
                    if (oq5yvr[J[121]](J[132]) != -0x1 || oq5yvr[J[121]](J[133]) != -0x1 || oq5yvr[J[121]](J[134]) != -0x1 || oq5yvr[J[121]](J[135]) != -0x1 || oq5yvr[J[121]](J[136]) != -0x1) window[J[16]][J[131]] = 0x2;else window[J[16]][J[131]] = 0x3;
                }
            } else window[J[16]][J[131]] = 0x2;
        }
        console[J[47]](J[137] + window[J[16]][J[130]] + J[138] + window[J[16]][J[131]]);
    }
}), wx[J[139]]({
    'success': function (vryo5q) {
        console[J[47]](J[140] + vryo5q[J[141]] + J[142] + vryo5q[J[143]]);
    }
}), wx[J[144]]({
    'success': function (ze2h) {
        console[J[47]](J[145] + ze2h[J[146]]);
    }
}), wx[J[147]]({ 'keepScreenOn': !![] }), wx[J[148]](function (f$2w) {
    console[J[47]](J[145] + f$2w[J[146]] + J[149] + f$2w[J[150]]);
}), wx[J[151]](function (cgtd) {
    window[J[152]] = cgtd, window[J[153]] && window[J[152]] && (console[J[1]](J[154] + window[J[152]][J[155]]), window[J[153]](window[J[152]]), window[J[152]] = null);
}), window[J[156]] = 0x0, window[J[157]] = 0x0, window[J[158]] = null, wx[J[159]](function () {
    window[J[157]]++;
    var yb50o = Date[J[160]]();
    (window[J[156]] == 0x0 || yb50o - window[J[156]] > 0x1d4c0) && (console[J[161]](J[162]), wx[J[163]]());
    if (window[J[157]] >= 0x2) {
        window[J[157]] = 0x0, console[J[29]](J[164]), wx[J[165]]('0', 0x1);
        if (window[J[16]] && window[J[16]][J[120]]) window[J[83]](J[166], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});