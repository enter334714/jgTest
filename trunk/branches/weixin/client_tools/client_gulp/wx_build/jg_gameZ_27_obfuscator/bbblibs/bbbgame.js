var _ = wx.y$;
console[_[0x50]](_[0x925a]), window[_[0x925b]], wx[_[0x925c]](function (mknijl) {
    if (mknijl) {
        if (mknijl[_[0x1219]]) {
            var mkpl = window[_[0x250]][_[0x925d]][_[0x10ee]](new RegExp(/\./, 'g'), '_'),
                facdb = mknijl[_[0x1219]],
                jikglh = facdb[_[0x32fd]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);
            if (jikglh) for (var xvuzy = 0x0; xvuzy < jikglh[_[0xc]]; xvuzy++) {
                if (jikglh[xvuzy] && jikglh[xvuzy][_[0xc]] > 0x0) {
                    var z$0x_ = parseInt(jikglh[xvuzy][_[0x10ee]](_[0x925e], '')[_[0x10ee]](':', ''));
                    facdb = facdb[_[0x10ee]](jikglh[xvuzy], jikglh[xvuzy][_[0x10ee]](':' + z$0x_ + ':', ':' + (z$0x_ - 0x2) + ':'));
                }
            }
            facdb = facdb[_[0x10ee]](new RegExp(_[0x925f], 'g'), _[0x9260] + mkpl + _[0x6f21]), facdb = facdb[_[0x10ee]](new RegExp(_[0x9261], 'g'), _[0x9260] + mkpl + _[0x6f21]), mknijl[_[0x1219]] = facdb;
        }
        var lgjikh = {
            'id': window['p$DE'][_[0x9262]],
            'role': window['p$DE'][_[0x129c]],
            'level': window['p$DE'][_[0x9263]],
            'user': window['p$DE'][_[0x6eb9]],
            'version': window['p$DE'][_[0x68]],
            'cdn': window['p$DE'][_[0x1215]],
            'pkgName': window['p$DE'][_[0x6ebb]],
            'gamever': window[_[0x250]][_[0x925d]],
            'serverid': window['p$DE'][_[0x6eb5]] ? window['p$DE'][_[0x6eb5]][_[0x2f4c]] : 0x0,
            'systemInfo': window[_[0x9264]],
            'error': _[0x9265],
            'stack': mknijl ? mknijl[_[0x1219]] : ''
        },
            wusvx = JSON[_[0x1207]](lgjikh);
        console[_[0x80]](_[0x9266] + wusvx), (!window[_[0x925b]] || window[_[0x925b]] != lgjikh[_[0x80]]) && (window[_[0x925b]] = lgjikh[_[0x80]], window['p$BD'](lgjikh));
    }
});
import 'bbbmd5min.js';
import 'bbbzlibs.js';
window[_[0x9267]] = require(_[0x9268]);
import 'bbbindex.js';
import 'bbblibsmin.js';
import 'bbbwxmini.js';
import 'bbbinitmin.js';
console[_[0x50]](_[0x9269]), console[_[0x50]](_[0x926a]), p$BDCE({ 'title': _[0x926b] });
var _dihgfd = { 'p$ABEDC': !![] };
new window[_[0x926c]](_dihgfd), window[_[0x926c]][_[0x97]]['p$ACDEB']();
if (window['p$ABDEC']) clearInterval(window['p$ABDEC']);
window['p$ABDEC'] = null, window['p$ACEBD'] = function (becgfd, qnmolp) {
    if (!becgfd || !qnmolp) return 0x0;
    becgfd = becgfd[_[0xe]]('.'), qnmolp = qnmolp[_[0xe]]('.');
    const qrnop = Math[_[0xac]](becgfd[_[0xc]], qnmolp[_[0xc]]);
    while (becgfd[_[0xc]] < qrnop) {
        becgfd[_[0x1c]]('0');
    }
    while (qnmolp[_[0xc]] < qrnop) {
        qnmolp[_[0x1c]]('0');
    }
    for (var rustp = 0x0; rustp < qrnop; rustp++) {
        const ptosrq = parseInt(becgfd[rustp]),
              xzwy = parseInt(qnmolp[rustp]);
        if (ptosrq > xzwy) return 0x1;else {
            if (ptosrq < xzwy) return -0x1;
        }
    }
    return 0x0;
}, window[_[0x926d]] = wx[_[0x926e]]()[_[0x926d]], console[_[0x205]](_[0x926f] + window[_[0x926d]]);
var _dspnorq = wx[_[0x9270]]();
_dspnorq[_[0x9271]](function (lkonm) {
    console[_[0x205]](_[0x9272] + lkonm[_[0x9273]]);
}), _dspnorq[_[0x9274]](function () {
    wx[_[0x9275]]({
        'title': _[0x9276],
        'content': _[0x9277],
        'showCancel': ![],
        'success': function (y_10$z) {
            _dspnorq[_[0x9278]]();
        }
    });
}), _dspnorq[_[0x9279]](function () {
    console[_[0x205]](_[0x927a]);
}), window['p$ACEDB'] = function () {
    console[_[0x205]](_[0x927b]);
    var z$10 = wx[_[0x927c]]({
        'name': _[0x927d],
        'success': function (sqnop) {
            console[_[0x205]](_[0x927e]), console[_[0x205]](sqnop), sqnop && sqnop[_[0x6d38]] == _[0x927f] ? (window['p$EC'] = !![], window['p$ECDB'](), window['p$EDBC']()) : setTimeout(function () {
                window['p$ACEDB']();
            }, 0x1f4);
        },
        'fail': function (_0yxz) {
            console[_[0x205]](_[0x9280]), console[_[0x205]](_0yxz), setTimeout(function () {
                window['p$ACEDB']();
            }, 0x1f4);
        }
    });
    z$10 && z$10[_[0x8f33]](ruqstp => {});
}, window['p$ADBEC'] = function () {
    console[_[0x205]](_[0x9281]);
    var wusv = wx[_[0x927c]]({
        'name': _[0x9282],
        'success': function (jhkfig) {
            console[_[0x205]](_[0x9283]), console[_[0x205]](jhkfig), jhkfig && jhkfig[_[0x6d38]] == _[0x927f] ? (window['p$DCE'] = !![], window['p$ECDB'](), window['p$EDBC']()) : setTimeout(function () {
                window['p$ADBEC']();
            }, 0x1f4);
        },
        'fail': function (uvtrsw) {
            console[_[0x205]](_[0x9284]), console[_[0x205]](uvtrsw), setTimeout(function () {
                window['p$ADBEC']();
            }, 0x1f4);
        }
    });
    wusv && wusv[_[0x8f33]](fgkj => {});
}, window[_[0x9285]] = function () {
    window['p$ACEBD'](window[_[0x926d]], _[0x9286]) >= 0x0 ? (console[_[0x205]](_[0x9287] + window[_[0x926d]] + _[0x9288]), window['p$DB'](), window['p$ACEDB'](), window['p$ADBEC']()) : (window['p$DEB'](_[0x9289], window[_[0x926d]]), wx[_[0x9275]]({
        'title': _[0x1850],
        'content': _[0x928a]
    }));
}, window[_[0x9264]] = '', wx[_[0x928b]]({
    'success'(vtxu) {
        window[_[0x9264]] = _[0x928c] + vtxu[_[0x928d]] + _[0x928e] + vtxu[_[0x928f]] + _[0x9290] + vtxu[_[0x1559]] + _[0x9291] + vtxu[_[0x1fe]] + _[0x9292] + vtxu[_[0x6e8b]] + _[0x9293] + vtxu[_[0x926d]] + _[0x9294] + vtxu[_[0x261b]], console[_[0x205]](window[_[0x9264]]), console[_[0x205]](_[0x9295] + vtxu[_[0x7ede]] + _[0x9296] + vtxu[_[0x9297]] + _[0x9298] + vtxu[_[0x9299]] + _[0x929a] + vtxu[_[0x929b]] + _[0x929c] + vtxu[_[0x929d]] + _[0x929e] + vtxu[_[0x929f]] + _[0x92a0] + (vtxu[_[0x92a1]] ? vtxu[_[0x92a1]][_[0x160]] + ',' + vtxu[_[0x92a1]][_[0x55e]] + ',' + vtxu[_[0x92a1]][_[0x560]] + ',' + vtxu[_[0x92a1]][_[0x55f]] : ''));
        var fhecgd = vtxu[_[0x1fe]] ? vtxu[_[0x1fe]][_[0x3440]]() : '',
            nomrpq = vtxu[_[0x928f]] ? vtxu[_[0x928f]][_[0x3440]]()[_[0x10ee]]('\x20', '') : '';
        window['p$DE'][_[0x486]] = fhecgd[_[0x76]](_[0x92a2]) != -0x1, window['p$DE'][_[0x2e9c]] = fhecgd[_[0x76]](_[0x92a3]) != -0x1, window['p$DE'][_[0x92a4]] = fhecgd[_[0x76]](_[0x92a2]) != -0x1 || fhecgd[_[0x76]](_[0x92a3]) != -0x1, window['p$DE'][_[0x6d44]] = fhecgd[_[0x76]](_[0x92a5]) != -0x1 || fhecgd[_[0x76]](_[0x92a6]) != -0x1, window['p$DE'][_[0x92a7]] = vtxu[_[0x6e8b]] ? vtxu[_[0x6e8b]][_[0x3440]]() : '', window['p$DE']['p$ABCED'] = ![], window['p$DE']['p$ABDCE'] = 0x2;
        if (fhecgd[_[0x76]](_[0x92a3]) != -0x1) {
            if (vtxu[_[0x261b]] >= 0x18) window['p$DE']['p$ABDCE'] = 0x3;else window['p$DE']['p$ABDCE'] = 0x2;
        } else {
            if (fhecgd[_[0x76]](_[0x92a2]) != -0x1) {
                if (vtxu[_[0x261b]] && vtxu[_[0x261b]] >= 0x14) window['p$DE']['p$ABDCE'] = 0x3;else {
                    if (nomrpq[_[0x76]](_[0x92a8]) != -0x1 || nomrpq[_[0x76]](_[0x92a9]) != -0x1 || nomrpq[_[0x76]](_[0x92aa]) != -0x1 || nomrpq[_[0x76]](_[0x92ab]) != -0x1 || nomrpq[_[0x76]](_[0x92ac]) != -0x1) window['p$DE']['p$ABDCE'] = 0x2;else window['p$DE']['p$ABDCE'] = 0x3;
                }
            } else window['p$DE']['p$ABDCE'] = 0x2;
        }
        console[_[0x205]](_[0x92ad] + window['p$DE']['p$ABCED'] + _[0x92ae] + window['p$DE']['p$ABDCE']);
    }
}), wx[_[0x92af]]({
    'success': function (ompqr) {
        console[_[0x205]](_[0x92b0] + ompqr[_[0x1284]] + _[0x92b1] + ompqr[_[0x92b2]]);
    }
}), wx[_[0x30cd]]({
    'success': function (vwuyzx) {
        console[_[0x205]](_[0x92b3] + vwuyzx[_[0x38d1]]);
    }
}), wx[_[0x92b4]]({ 'keepScreenOn': !![] }), wx[_[0x30cf]](function (_01) {
    console[_[0x205]](_[0x92b3] + _01[_[0x38d1]] + _[0x92b5] + _01[_[0x92b6]]);
}), wx[_[0x2c9d]](function (hgkfi) {
    window['p$CB'] = hgkfi, window['p$EBC'] && window['p$CB'] && (console[_[0x50]](_[0x92b7] + window['p$CB'][_[0x35b]]), window['p$EBC'](window['p$CB']), window['p$CB'] = null);
}), window[_[0x92b8]] = 0x0, window['p$ADCEB'] = 0x0, window[_[0x92b9]] = null, wx[_[0x92ba]](function () {
    window['p$ADCEB']++;
    var _301$2 = Date[_[0x55]]();
    (window[_[0x92b8]] == 0x0 || _301$2 - window[_[0x92b8]] > 0x1d4c0) && (console[_[0x63]](_[0x92bb]), wx[_[0x3256]]());
    if (window['p$ADCEB'] >= 0x2) {
        window['p$ADCEB'] = 0x0, console[_[0x80]](_[0x92bc]), wx[_[0x92bd]]('0', 0x1);
        if (window['p$DE'] && window['p$DE'][_[0x486]]) window['p$DEB'](_[0x92be], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});