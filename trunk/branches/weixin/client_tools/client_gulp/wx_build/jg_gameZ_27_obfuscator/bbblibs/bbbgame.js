var _ = wx.y$;
console[_[0x265]](_[0x88bc]), window[_[0x88bd]], wx[_[0x88be]](function (yxuzw) {
    if (yxuzw) {
        if (yxuzw[_[0x25]]) {
            var $zvyx = window[_[0x422]][_[0x88bf]][_[0xa9]](new RegExp(/\./, 'g'), '_'),
                z$0xy_ = yxuzw[_[0x25]],
                supr = z$0xy_[_[0x2c]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);
            if (supr) for (var wsvxu = 0x0; wsvxu < supr[_[0x15]]; wsvxu++) {
                if (supr[wsvxu] && supr[wsvxu][_[0x15]] > 0x0) {
                    var xvtuwy = parseInt(supr[wsvxu][_[0xa9]](_[0x88c0], '')[_[0xa9]](':', ''));
                    z$0xy_ = z$0xy_[_[0xa9]](supr[wsvxu], supr[wsvxu][_[0xa9]](':' + xvtuwy + ':', ':' + (xvtuwy - 0x2) + ':'));
                }
            }
            z$0xy_ = z$0xy_[_[0xa9]](new RegExp(_[0x88c1], 'g'), _[0x88c2] + $zvyx + _[0x6d4a]), z$0xy_ = z$0xy_[_[0xa9]](new RegExp(_[0x88c3], 'g'), _[0x88c2] + $zvyx + _[0x6d4a]), yxuzw[_[0x25]] = z$0xy_;
        }
        var z_y$x = {
            'id': window['p$DE'][_[0x88c4]],
            'role': window['p$DE'][_[0x13a4]],
            'level': window['p$DE'][_[0x88c5]],
            'user': window['p$DE'][_[0x6cdf]],
            'version': window['p$DE'][_[0x277]],
            'cdn': window['p$DE'][_[0x1321]],
            'pkgName': window['p$DE'][_[0x6ce1]],
            'gamever': window[_[0x422]][_[0x88bf]],
            'serverid': window['p$DE'][_[0x6cdb]] ? window['p$DE'][_[0x6cdb]][_[0x2feb]] : 0x0,
            'systemInfo': window[_[0x88c6]],
            'error': _[0x88c7],
            'stack': yxuzw ? yxuzw[_[0x25]] : ''
        },
            mnpoq = JSON[_[0x1313]](z_y$x);
        console[_[0xcb]](_[0x88c8] + mnpoq), (!window[_[0x88bd]] || window[_[0x88bd]] != z_y$x[_[0xcb]]) && (window[_[0x88bd]] = z_y$x[_[0xcb]], window['p$BD'](z_y$x));
    }
});
import 'bbbmd5min.js';
import 'bbbzlibs.js';
window[_[0x88c9]] = require(_[0x88ca]);
import 'bbbindex.js';
import 'bbblibsmin.js';
import 'bbbwxmini.js';
import 'bbbinitmin.js';
console[_[0x265]](_[0x88cb]), console[_[0x265]](_[0x88cc]), p$BDCE({ 'title': _[0x88cd] });
var _dy_0z$ = { 'p$ABEDC': !![] };
new window[_[0x88ce]](_dy_0z$), window[_[0x88ce]][_[0x29b]]['p$ACDEB']();
if (window['p$ABDEC']) clearInterval(window['p$ABDEC']);
window['p$ABDEC'] = null, window['p$ACEBD'] = function (hmjl, _z$y) {
    if (!hmjl || !_z$y) return 0x0;
    hmjl = hmjl[_[0x92]]('.'), _z$y = _z$y[_[0x92]]('.');
    const hkijgl = Math[_[0xc3]](hmjl[_[0x15]], _z$y[_[0x15]]);
    while (hmjl[_[0x15]] < hkijgl) {
        hmjl[_[0x2b]]('0');
    }
    while (_z$y[_[0x15]] < hkijgl) {
        _z$y[_[0x2b]]('0');
    }
    for (var z_xwy$ = 0x0; z_xwy$ < hkijgl; z_xwy$++) {
        const vrwt = parseInt(hmjl[z_xwy$]),
              w$x_z = parseInt(_z$y[z_xwy$]);
        if (vrwt > w$x_z) return 0x1;else {
            if (vrwt < w$x_z) return -0x1;
        }
    }
    return 0x0;
}, window[_[0x88cf]] = wx[_[0x88d0]]()[_[0x88cf]], console[_[0x9f]](_[0x88d1] + window[_[0x88cf]]);
var _drpoqt = wx[_[0x88d2]]();
_drpoqt[_[0x88d3]](function (ihgfje) {
    console[_[0x9f]](_[0x88d4] + ihgfje[_[0x88d5]]);
}), _drpoqt[_[0x88d6]](function () {
    wx[_[0x88d7]]({
        'title': _[0x88d8],
        'content': _[0x88d9],
        'showCancel': ![],
        'success': function (olmq) {
            _drpoqt[_[0x88da]]();
        }
    });
}), _drpoqt[_[0x88db]](function () {
    console[_[0x9f]](_[0x88dc]);
}), window['p$ACEDB'] = function () {
    console[_[0x9f]](_[0x88dd]);
    var febg = wx[_[0x88de]]({
        'name': _[0x88df],
        'success': function (_wzx$y) {
            console[_[0x9f]](_[0x88e0]), console[_[0x9f]](_wzx$y), _wzx$y && _wzx$y[_[0x6dad]] == _[0x88e1] ? (window['p$EC'] = !![], window['p$ECDB'](), window['p$EDBC']()) : setTimeout(function () {
                window['p$ACEDB']();
            }, 0x1f4);
        },
        'fail': function (gfkj) {
            console[_[0x9f]](_[0x88e2]), console[_[0x9f]](gfkj), setTimeout(function () {
                window['p$ACEDB']();
            }, 0x1f4);
        }
    });
    febg && febg[_[0x875e]](vsqrt => {});
}, window['p$ADBEC'] = function () {
    console[_[0x9f]](_[0x88e3]);
    var vuxswt = wx[_[0x88de]]({
        'name': _[0x88e4],
        'success': function (uqrtvs) {
            console[_[0x9f]](_[0x88e5]), console[_[0x9f]](uqrtvs), uqrtvs && uqrtvs[_[0x6dad]] == _[0x88e1] ? (window['p$DCE'] = !![], window['p$ECDB'](), window['p$EDBC']()) : setTimeout(function () {
                window['p$ADBEC']();
            }, 0x1f4);
        },
        'fail': function ($_0yz1) {
            console[_[0x9f]](_[0x88e6]), console[_[0x9f]]($_0yz1), setTimeout(function () {
                window['p$ADBEC']();
            }, 0x1f4);
        }
    });
    vuxswt && vuxswt[_[0x875e]](vzyuxw => {});
}, window[_[0x88e7]] = function () {
    window['p$ACEBD'](window[_[0x88cf]], _[0x88e8]) >= 0x0 ? (console[_[0x9f]](_[0x88e9] + window[_[0x88cf]] + _[0x88ea]), window['p$DB'](), window['p$ACEDB'](), window['p$ADBEC']()) : (window['p$DEB'](_[0x88eb], window[_[0x88cf]]), wx[_[0x88d7]]({
        'title': _[0x194d],
        'content': _[0x88ec]
    }));
}, window[_[0x88c6]] = '', wx[_[0x88ed]]({
    'success'(lmnp) {
        window[_[0x88c6]] = _[0x88ee] + lmnp[_[0x88ef]] + _[0x88f0] + lmnp[_[0x88f1]] + _[0x88f2] + lmnp[_[0x165e]] + _[0x88f3] + lmnp[_[0x3d5]] + _[0x88f4] + lmnp[_[0x6cb1]] + _[0x88f5] + lmnp[_[0x88cf]] + _[0x88f6] + lmnp[_[0x26e0]], console[_[0x9f]](window[_[0x88c6]]), console[_[0x9f]](_[0x88f7] + lmnp[_[0x7ac2]] + _[0x88f8] + lmnp[_[0x88f9]] + _[0x88fa] + lmnp[_[0x88fb]] + _[0x88fc] + lmnp[_[0x88fd]] + _[0x88fe] + lmnp[_[0x88ff]] + _[0x8900] + lmnp[_[0x8901]] + _[0x8902] + (lmnp[_[0x8903]] ? lmnp[_[0x8903]][_[0x33c]] + ',' + lmnp[_[0x8903]][_[0x720]] + ',' + lmnp[_[0x8903]][_[0x722]] + ',' + lmnp[_[0x8903]][_[0x721]] : ''));
        var $zyx0 = lmnp[_[0x3d5]] ? lmnp[_[0x3d5]][_[0x46]]() : '',
            nkopm = lmnp[_[0x88f1]] ? lmnp[_[0x88f1]][_[0x46]]()[_[0xa9]]('\x20', '') : '';
        window['p$DE'][_[0x652]] = $zyx0[_[0x68]](_[0x8904]) != -0x1, window['p$DE'][_[0x2f3f]] = $zyx0[_[0x68]](_[0x8905]) != -0x1, window['p$DE'][_[0x8906]] = $zyx0[_[0x68]](_[0x8904]) != -0x1 || $zyx0[_[0x68]](_[0x8905]) != -0x1, window['p$DE'][_[0x6b7d]] = $zyx0[_[0x68]](_[0x8907]) != -0x1 || $zyx0[_[0x68]](_[0x8908]) != -0x1, window['p$DE'][_[0x8909]] = lmnp[_[0x6cb1]] ? lmnp[_[0x6cb1]][_[0x46]]() : '', window['p$DE']['p$ABCED'] = ![], window['p$DE']['p$ABDCE'] = 0x2;
        if ($zyx0[_[0x68]](_[0x8905]) != -0x1) {
            if (lmnp[_[0x26e0]] >= 0x18) window['p$DE']['p$ABDCE'] = 0x3;else window['p$DE']['p$ABDCE'] = 0x2;
        } else {
            if ($zyx0[_[0x68]](_[0x8904]) != -0x1) {
                if (lmnp[_[0x26e0]] && lmnp[_[0x26e0]] >= 0x14) window['p$DE']['p$ABDCE'] = 0x3;else {
                    if (nkopm[_[0x68]](_[0x890a]) != -0x1 || nkopm[_[0x68]](_[0x890b]) != -0x1 || nkopm[_[0x68]](_[0x890c]) != -0x1 || nkopm[_[0x68]](_[0x890d]) != -0x1 || nkopm[_[0x68]](_[0x890e]) != -0x1) window['p$DE']['p$ABDCE'] = 0x2;else window['p$DE']['p$ABDCE'] = 0x3;
                }
            } else window['p$DE']['p$ABDCE'] = 0x2;
        }
        console[_[0x9f]](_[0x890f] + window['p$DE']['p$ABCED'] + _[0x8910] + window['p$DE']['p$ABDCE']);
    }
}), wx[_[0x8911]]({
    'success': function (ieghjf) {
        console[_[0x9f]](_[0x8912] + ieghjf[_[0x138c]] + _[0x8913] + ieghjf[_[0x8914]]);
    }
}), wx[_[0x3168]]({
    'success': function (poqmn) {
        console[_[0x9f]](_[0x8915] + poqmn[_[0x3884]]);
    }
}), wx[_[0x8916]]({ 'keepScreenOn': !![] }), wx[_[0x316a]](function (qturps) {
    console[_[0x9f]](_[0x8915] + qturps[_[0x3884]] + _[0x8917] + qturps[_[0x8918]]);
}), wx[_[0x2d43]](function (dhefig) {
    window['p$CB'] = dhefig, window['p$EBC'] && window['p$CB'] && (console[_[0x265]](_[0x8919] + window['p$CB'][_[0x52c]]), window['p$EBC'](window['p$CB']), window['p$CB'] = null);
}), window[_[0x891a]] = 0x0, window['p$ADCEB'] = 0x0, window[_[0x891b]] = null, wx[_[0x891c]](function () {
    window['p$ADCEB']++;
    var ploqnm = Date[_[0x26a]]();
    (window[_[0x891a]] == 0x0 || ploqnm - window[_[0x891a]] > 0x1d4c0) && (console[_[0xd9]](_[0x891d]), wx[_[0x326f]]());
    if (window['p$ADCEB'] >= 0x2) {
        window['p$ADCEB'] = 0x0, console[_[0xcb]](_[0x891e]), wx[_[0x891f]]('0', 0x1);
        if (window['p$DE'] && window['p$DE'][_[0x652]]) window['p$DEB'](_[0x8920], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});