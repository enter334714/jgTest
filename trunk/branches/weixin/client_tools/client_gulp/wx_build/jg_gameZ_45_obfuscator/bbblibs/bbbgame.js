var _ = wx.y$;
console[_[78]](_[31065]), window[_[31066]], wx[_[31067]](function (am$j9) {
    if (am$j9) {
        if (am$j9[_[4179]]) {
            var b8vct1 = window[_[562]][_[31068]][_[4358]](new RegExp(/\./, 'g'), '_'),
                keyw4o = am$j9[_[4179]],
                $mx = keyw4o[_[12118]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);
            if ($mx) for (var u70z_ = 0x0; u70z_ < $mx[_[13]]; u70z_++) {
                if ($mx[u70z_] && $mx[u70z_][_[13]] > 0x0) {
                    var mqa9$ = parseInt($mx[u70z_][_[4358]](_[31069], '')[_[4358]](':', ''));
                    keyw4o = keyw4o[_[4358]]($mx[u70z_], $mx[u70z_][_[4358]](':' + mqa9$ + ':', ':' + (mqa9$ - 0x2) + ':'));
                }
            }
            keyw4o = keyw4o[_[4358]](new RegExp(_[31070], 'g'), _[31071] + b8vct1 + _[26321]), keyw4o = keyw4o[_[4358]](new RegExp(_[31072], 'g'), _[31071] + b8vct1 + _[26321]), am$j9[_[4179]] = keyw4o;
        }
        var _u70hz = {
            'id': window['p$0S'][_[31073]],
            'role': window['p$0S'][_[4300]],
            'level': window['p$0S'][_[31074]],
            'user': window['p$0S'][_[26222]],
            'version': window['p$0S'][_[101]],
            'cdn': window['p$0S'][_[4177]],
            'pkgName': window['p$0S'][_[26223]],
            'gamever': window[_[562]][_[31068]],
            'serverid': window['p$0S'][_[26217]] ? window['p$0S'][_[26217]][_[11395]] : 0x0,
            'systemInfo': window[_[31075]],
            'error': _[31076],
            'stack': am$j9 ? am$j9[_[4179]] : ''
        },
            hd_z = JSON[_[4163]](_u70hz);
        console[_[125]](_[31077] + hd_z), (!window[_[31066]] || window[_[31066]] != _u70hz[_[125]]) && (window[_[31066]] = _u70hz[_[125]], window['p$X0'](_u70hz));
    }
});
import 'bbbmd5min.js';
import 'bbbzlibs.js';
window[_[31078]] = require(_[31079]);
import 'bbbindex.js';
import 'bbblibsmin.js';
import 'bbbwxmini.js';
import 'bbbinitmin.js';
console[_[78]](_[31080]), console[_[78]](_[31081]), p$X0KS({ 'title': _[31082] });
var _di8nv1q = { 'p$PXS0K': !![] };
new window[_[31083]](_di8nv1q), window[_[31083]][_[148]]['p$PK0SX']();
if (window['p$PX0SK']) clearInterval(window['p$PX0SK']);
window['p$PX0SK'] = null, window['p$PKSX0'] = function (lcs62, uz$xd) {
    if (!lcs62 || !uz$xd) return 0x0;
    lcs62 = lcs62[_[15]]('.'), uz$xd = uz$xd[_[15]]('.');
    const o4wky = Math[_[894]](lcs62[_[13]], uz$xd[_[13]]);
    while (lcs62[_[13]] < o4wky) {
        lcs62[_[29]]('0');
    }
    while (uz$xd[_[13]] < o4wky) {
        uz$xd[_[29]]('0');
    }
    for (var bclts2 = 0x0; bclts2 < o4wky; bclts2++) {
        const _xd9$ = parseInt(lcs62[bclts2]),
              tbvn81 = parseInt(uz$xd[bclts2]);
        if (_xd9$ > tbvn81) return 0x1;else {
            if (_xd9$ < tbvn81) return -0x1;
        }
    }
    return 0x0;
}, window[_[31084]] = wx[_[31085]]()[_[31084]], console[_[487]](_[31086] + window[_[31084]]);
var _d_dxa$9 = wx[_[31087]]();
_d_dxa$9[_[31088]](function (xd9$ma) {
    console[_[487]](_[31089] + xd9$ma[_[31090]]);
}), _d_dxa$9[_[31091]](function () {
    wx[_[31092]]({
        'title': _[31093],
        'content': _[31094],
        'showCancel': ![],
        'success': function (njqv1) {
            _d_dxa$9[_[31095]]();
        }
    });
}), _d_dxa$9[_[31096]](function () {
    console[_[487]](_[31097]);
}), window['p$PKS0X'] = function () {
    console[_[487]](_[31098]);
    var a9ji = wx[_[31099]]({
        'name': _[31100],
        'success': function (t2bcs) {
            console[_[487]](_[31101]), console[_[487]](t2bcs), t2bcs && t2bcs[_[26417]] == _[31102] ? (window['p$SK'] = !![], window['p$SK0X'](), window['p$S0XK']()) : setTimeout(function () {
                window['p$PKS0X']();
            }, 0x1f4);
        },
        'fail': function (weykpo) {
            console[_[487]](_[31103]), console[_[487]](weykpo), setTimeout(function () {
                window['p$PKS0X']();
            }, 0x1f4);
        }
    });
    a9ji && a9ji[_[30380]](hu7p0 => {});
}, window['p$P0XSK'] = function () {
    console[_[487]](_[31104]);
    var v1ct = wx[_[31099]]({
        'name': _[31105],
        'success': function (vtb81) {
            console[_[487]](_[31106]), console[_[487]](vtb81), vtb81 && vtb81[_[26417]] == _[31102] ? (window['p$0KS'] = !![], window['p$SK0X'](), window['p$S0XK']()) : setTimeout(function () {
                window['p$P0XSK']();
            }, 0x1f4);
        },
        'fail': function (zp70hu) {
            console[_[487]](_[31107]), console[_[487]](zp70hu), setTimeout(function () {
                window['p$P0XSK']();
            }, 0x1f4);
        }
    });
    v1ct && v1ct[_[30380]](p7ko0y => {});
}, window[_[31108]] = function () {
    window['p$PKSX0'](window[_[31084]], _[31109]) >= 0x0 ? (console[_[487]](_[31110] + window[_[31084]] + _[31111]), window['p$0X'](), window['p$PKS0X'](), window['p$P0XSK']()) : (window['p$0SX'](_[31112], window[_[31084]]), wx[_[31092]]({
        'title': _[5775],
        'content': _[31113]
    }));
}, window[_[31075]] = '', wx[_[31114]]({
    'success'($9axj) {
        window[_[31075]] = _[31115] + $9axj[_[31116]] + _[31117] + $9axj[_[31118]] + _[31119] + $9axj[_[4371]] + _[31120] + $9axj[_[480]] + _[31121] + $9axj[_[26185]] + _[31122] + $9axj[_[31084]] + _[31123] + $9axj[_[9101]], console[_[487]](window[_[31075]]), console[_[487]](_[31124] + $9axj[_[31125]] + _[31126] + $9axj[_[31127]] + _[31128] + $9axj[_[31129]] + _[31130] + $9axj[_[31131]] + _[31132] + $9axj[_[31133]] + _[31134] + $9axj[_[31135]] + _[31136] + ($9axj[_[31137]] ? $9axj[_[31137]][_[322]] + ',' + $9axj[_[31137]][_[1275]] + ',' + $9axj[_[31137]][_[1277]] + ',' + $9axj[_[31137]][_[1276]] : ''));
        var $a9m = $9axj[_[480]] ? $9axj[_[480]][_[12418]]() : '',
            bnv1t = $9axj[_[31118]] ? $9axj[_[31118]][_[12418]]()[_[4358]]('\x20', '') : '';
        window['p$0S'][_[1116]] = $a9m[_[115]](_[31138]) != -0x1, window['p$0S'][_[11219]] = $a9m[_[115]](_[30615]) != -0x1, window['p$0S'][_[31139]] = $a9m[_[115]](_[31138]) != -0x1 || $a9m[_[115]](_[30615]) != -0x1, window['p$0S'][_[25907]] = $a9m[_[115]](_[31140]) != -0x1 || $a9m[_[115]](_[31141]) != -0x1, window['p$0S'][_[31142]] = $9axj[_[26185]] ? $9axj[_[26185]][_[12418]]() : '', window['p$0S']['p$PXKS0'] = ![], window['p$0S']['p$PX0KS'] = 0x2;
        if ($a9m[_[115]](_[30615]) != -0x1) {
            if ($9axj[_[9101]] >= 0x18) window['p$0S']['p$PX0KS'] = 0x3;else window['p$0S']['p$PX0KS'] = 0x2;
        } else {
            if ($a9m[_[115]](_[31138]) != -0x1) {
                if ($9axj[_[9101]] && $9axj[_[9101]] >= 0x14) window['p$0S']['p$PX0KS'] = 0x3;else {
                    if (bnv1t[_[115]](_[31143]) != -0x1 || bnv1t[_[115]](_[31144]) != -0x1 || bnv1t[_[115]](_[31145]) != -0x1 || bnv1t[_[115]](_[31146]) != -0x1 || bnv1t[_[115]](_[31147]) != -0x1) window['p$0S']['p$PX0KS'] = 0x2;else window['p$0S']['p$PX0KS'] = 0x3;
                }
            } else window['p$0S']['p$PX0KS'] = 0x2;
        }
        console[_[487]](_[31148] + window['p$0S']['p$PXKS0'] + _[31149] + window['p$0S']['p$PX0KS']);
    }
}), wx[_[31150]]({
    'success': function (q9j$ma) {
        console[_[487]](_[31151] + q9j$ma[_[4276]] + _[31152] + q9j$ma[_[31153]]);
    }
}), wx[_[11776]]({
    'success': function (d$9x) {
        console[_[487]](_[31154] + d$9x[_[13284]]);
    }
}), wx[_[31155]]({ 'keepScreenOn': !![] }), wx[_[11778]](function (eywkop) {
    console[_[487]](_[31154] + eywkop[_[13284]] + _[31156] + eywkop[_[31157]]);
}), wx[_[10710]](function (_$axd) {
    window['p$KX'] = _$axd, window['p$SXK'] && window['p$KX'] && (console[_[78]](_[31158] + window['p$KX'][_[817]]), window['p$SXK'](window['p$KX']), window['p$KX'] = null);
}), window[_[31159]] = 0x0, window['p$P0KSX'] = 0x0, window[_[31160]] = null, wx[_[31161]](function () {
    window['p$P0KSX']++;
    var ow3e = Date[_[83]]();
    (window[_[31159]] == 0x0 || ow3e - window[_[31159]] > 0x1d4c0) && (console[_[96]](_[31162]), wx[_[11955]]());
    if (window['p$P0KSX'] >= 0x2) {
        window['p$P0KSX'] = 0x0, console[_[125]](_[31163]), wx[_[31164]]('0', 0x1);
        if (window['p$0S'] && window['p$0S'][_[1116]]) window['p$0SX'](_[31165], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});