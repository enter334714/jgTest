var _ = wx.y$;
console[_[78]](_[34845]), window[_[34846]], wx[_[34847]](function (mfoht$) {
    if (mfoht$) {
        if (mfoht$[_[4421]]) {
            var z9abr = window[_[565]][_[34848]][_[4123]](new RegExp(/\./, 'g'), '_'),
                mtf$h = mfoht$[_[4421]],
                pfh7om = mtf$h[_[12608]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (pfh7om) for (var a0zds = 0x0; a0zds < pfh7om[_[13]]; a0zds++) {
                if (pfh7om[a0zds] && pfh7om[a0zds][_[13]] > 0x0) {
                    var w1gl = parseInt(pfh7om[a0zds][_[4123]](_[34849], '')[_[4123]](':', ''));
                    mtf$h = mtf$h[_[4123]](pfh7om[a0zds], pfh7om[a0zds][_[4123]](':' + w1gl + ':', ':' + (w1gl - 0x2) + ':'));
                }
            }
            mtf$h = mtf$h[_[4123]](new RegExp(_[34850], 'g'), _[34851] + z9abr + _[27524]), mtf$h = mtf$h[_[4123]](new RegExp(_[34852], 'g'), _[34851] + z9abr + _[27524]), mfoht$[_[4421]] = mtf$h;
        }
        var qkjcy2 = {
            'id': window['p$NJ'][_[34853]],
            'role': window['p$NJ'][_[4550]],
            'level': window['p$NJ'][_[34854]],
            'user': window['p$NJ'][_[27415]],
            'version': window['p$NJ'][_[101]],
            'cdn': window['p$NJ'][_[4417]],
            'pkgName': window['p$NJ'][_[27417]],
            'gamever': window[_[565]][_[34848]],
            'serverid': window['p$NJ'][_[27411]] ? window['p$NJ'][_[27411]][_[11801]] : 0x0,
            'systemInfo': window[_[34855]],
            'error': _[34856],
            'stack': mfoht$ ? mfoht$[_[4421]] : ''
        },
            drba9z = JSON[_[4403]](qkjcy2);
        console[_[125]](_[34857] + drba9z), (!window[_[34846]] || window[_[34846]] != qkjcy2[_[125]]) && (window[_[34846]] = qkjcy2[_[125]], window['p$5N'](qkjcy2));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[_[34858]] = require(_[34859]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[_[78]](_[34860]), console[_[78]](_[34861]), p$5NOJ({ 'title': _[34862] });
var _dm$foht = { 'p$D5JNO': !![] };
new window[_[34863]](_dm$foht), window[_[34863]][_[148]]['p$DONJ5']();
if (window['p$D5NJO']) clearInterval(window['p$D5NJO']);
window['p$D5NJO'] = null, window['p$DOJ5N'] = function (z936ra, o5ft) {
    if (!z936ra || !o5ft) return 0x0;
    z936ra = z936ra[_[15]]('.'), o5ft = o5ft[_[15]]('.');
    const jucyk2 = Math[_[911]](z936ra[_[13]], o5ft[_[13]]);
    while (z936ra[_[13]] < jucyk2) {
        z936ra[_[29]]('0');
    }
    while (o5ft[_[13]] < jucyk2) {
        o5ft[_[29]]('0');
    }
    for (var mcphu = 0x0; mcphu < jucyk2; mcphu++) {
        const ie_18v = parseInt(z936ra[mcphu]),
              e_8iqv = parseInt(o5ft[mcphu]);
        if (ie_18v > e_8iqv) return 0x1;else {
            if (ie_18v < e_8iqv) return -0x1;
        }
    }
    return 0x0;
}, window[_[34864]] = wx[_[34865]]()[_[34864]], console[_[490]](_[34866] + window[_[34864]]);
var _dbzads = wx[_[34867]]();
_dbzads[_[34868]](function (_jkiv) {
    console[_[490]](_[34869] + _jkiv[_[34870]]);
}), _dbzads[_[34871]](function () {
    wx[_[34872]]({
        'title': _[34873],
        'content': _[34874],
        'showCancel': ![],
        'success': function (qyjk2_) {
            _dbzads[_[34875]]();
        }
    });
}), _dbzads[_[34876]](function () {
    console[_[490]](_[34877]);
}), window['p$DOJN5'] = function () {
    console[_[490]](_[34878]);
    var rdaz9 = wx[_[34879]]({
        'name': _[34880],
        'success': function (qji_8) {
            console[_[490]](_[34881]), console[_[490]](qji_8), qji_8 && qji_8[_[27625]] == _[34882] ? (window['p$JO'] = !![], window['p$JON5'](), window['p$JN5O']()) : setTimeout(function () {
                window['p$DOJN5']();
            }, 0x1f4);
        },
        'fail': function (b045sd) {
            console[_[490]](_[34883]), console[_[490]](b045sd), setTimeout(function () {
                window['p$DOJN5']();
            }, 0x1f4);
        }
    });
    rdaz9 && rdaz9[_[34216]](mpu7h => {});
}, window['p$DN5JO'] = function () {
    console[_[490]](_[34884]);
    var $fhomt = wx[_[34879]]({
        'name': _[34885],
        'success': function (arzb9d) {
            console[_[490]](_[34886]), console[_[490]](arzb9d), arzb9d && arzb9d[_[27625]] == _[34882] ? (window['p$NOJ'] = !![], window['p$JON5'](), window['p$JN5O']()) : setTimeout(function () {
                window['p$DN5JO']();
            }, 0x1f4);
        },
        'fail': function (abzd9) {
            console[_[490]](_[34887]), console[_[490]](abzd9), setTimeout(function () {
                window['p$DN5JO']();
            }, 0x1f4);
        }
    });
    $fhomt && $fhomt[_[34216]](ds9zb => {});
}, window[_[34888]] = function () {
    window['p$DOJ5N'](window[_[34864]], _[34889]) >= 0x0 ? (console[_[490]](_[34890] + window[_[34864]] + _[34891]), window['p$N5'](), window['p$DOJN5'](), window['p$DN5JO']()) : (window['p$NJ5'](_[34892], window[_[34864]]), wx[_[34872]]({
        'title': _[6006],
        'content': _[34893]
    }));
}, window[_[34855]] = '', wx[_[34894]]({
    'success'(ivq8e) {
        window[_[34855]] = _[34895] + ivq8e[_[34896]] + _[34897] + ivq8e[_[34898]] + _[34899] + ivq8e[_[5248]] + _[34900] + ivq8e[_[483]] + _[34901] + ivq8e[_[27369]] + _[34902] + ivq8e[_[34864]] + _[34903] + ivq8e[_[9486]], console[_[490]](window[_[34855]]), console[_[490]](_[34904] + ivq8e[_[30982]] + _[34905] + ivq8e[_[34906]] + _[34907] + ivq8e[_[34908]] + _[34909] + ivq8e[_[34910]] + _[34911] + ivq8e[_[34912]] + _[34913] + ivq8e[_[34914]] + _[34915] + (ivq8e[_[34916]] ? ivq8e[_[34916]][_[325]] + ',' + ivq8e[_[34916]][_[1341]] + ',' + ivq8e[_[34916]][_[1343]] + ',' + ivq8e[_[34916]][_[1342]] : ''));
        var g18eiv = ivq8e[_[483]] ? ivq8e[_[483]][_[12931]]() : '',
            s05b4d = ivq8e[_[34898]] ? ivq8e[_[34898]][_[12931]]()[_[4123]]('\x20', '') : '';
        window['p$NJ'][_[1133]] = g18eiv[_[115]](_[34917]) != -0x1, window['p$NJ'][_[11629]] = g18eiv[_[115]](_[34918]) != -0x1, window['p$NJ'][_[34919]] = g18eiv[_[115]](_[34917]) != -0x1 || g18eiv[_[115]](_[34918]) != -0x1, window['p$NJ'][_[27060]] = g18eiv[_[115]](_[34920]) != -0x1 || g18eiv[_[115]](_[34921]) != -0x1, window['p$NJ'][_[34922]] = ivq8e[_[27369]] ? ivq8e[_[27369]][_[12931]]() : '', window['p$NJ']['p$D5OJN'] = ![], window['p$NJ']['p$D5NOJ'] = 0x2;
        if (g18eiv[_[115]](_[34918]) != -0x1) {
            if (ivq8e[_[9486]] >= 0x18) window['p$NJ']['p$D5NOJ'] = 0x3;else window['p$NJ']['p$D5NOJ'] = 0x2;
        } else {
            if (g18eiv[_[115]](_[34917]) != -0x1) {
                if (ivq8e[_[9486]] && ivq8e[_[9486]] >= 0x14) window['p$NJ']['p$D5NOJ'] = 0x3;else {
                    if (s05b4d[_[115]](_[34923]) != -0x1 || s05b4d[_[115]](_[34924]) != -0x1 || s05b4d[_[115]](_[34925]) != -0x1 || s05b4d[_[115]](_[34926]) != -0x1 || s05b4d[_[115]](_[34927]) != -0x1) window['p$NJ']['p$D5NOJ'] = 0x2;else window['p$NJ']['p$D5NOJ'] = 0x3;
                }
            } else window['p$NJ']['p$D5NOJ'] = 0x2;
        }
        console[_[490]](_[34928] + window['p$NJ']['p$D5OJN'] + _[34929] + window['p$NJ']['p$D5NOJ']);
    }
}), wx[_[34930]]({
    'success': function (q_8i) {
        console[_[490]](_[34931] + q_8i[_[4526]] + _[34932] + q_8i[_[34933]]);
    }
}), wx[_[12182]]({
    'success': function (j2ykq) {
        console[_[490]](_[34934] + j2ykq[_[14007]]);
    }
}), wx[_[34935]]({ 'keepScreenOn': !![] }), wx[_[12184]](function (z369xr) {
    console[_[490]](_[34934] + z369xr[_[14007]] + _[34936] + z369xr[_[34937]]);
}), wx[_[11121]](function (uykcj) {
    window['p$O5'] = uykcj, window['p$J5O'] && window['p$O5'] && (console[_[78]](_[34938] + window['p$O5'][_[834]]), window['p$J5O'](window['p$O5']), window['p$O5'] = null);
}), window[_[34939]] = 0x0, window['p$DNOJ5'] = 0x0, window[_[34940]] = null, wx[_[34941]](function () {
    window['p$DNOJ5']++;
    var ts05$4 = Date[_[83]]();
    (window[_[34939]] == 0x0 || ts05$4 - window[_[34939]] > 0x1d4c0) && (console[_[96]](_[34942]), wx[_[12445]]());
    if (window['p$DNOJ5'] >= 0x2) {
        window['p$DNOJ5'] = 0x0, console[_[125]](_[34943]), wx[_[34944]]('0', 0x1);
        if (window['p$NJ'] && window['p$NJ'][_[1133]]) window['p$NJ5'](_[34945], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});