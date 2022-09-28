var _ = wx.y$;
console[_[78]](_[31203]), window[_[31204]], wx[_[31205]](function (z_$y01) {
    if (z_$y01) {
        if (z_$y01[_[4091]]) {
            var $z_y1 = window[_[562]][_[31206]][_[4329]](new RegExp(/\./, 'g'), '_'),
                dfecb = z_$y01[_[4091]],
                fbdac = dfecb[_[12045]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);
            if (fbdac) for (var spqtu = 0x0; spqtu < fbdac[_[13]]; spqtu++) {
                if (fbdac[spqtu] && fbdac[spqtu][_[13]] > 0x0) {
                    var dgceh = parseInt(fbdac[spqtu][_[4329]](_[31207], '')[_[4329]](':', ''));
                    dfecb = dfecb[_[4329]](fbdac[spqtu], fbdac[spqtu][_[4329]](':' + dgceh + ':', ':' + (dgceh - 0x2) + ':'));
                }
            }
            dfecb = dfecb[_[4329]](new RegExp(_[31208], 'g'), _[31209] + $z_y1 + _[26318]), dfecb = dfecb[_[4329]](new RegExp(_[31210], 'g'), _[31209] + $z_y1 + _[26318]), z_$y01[_[4091]] = dfecb;
        }
        var jihgfk = {
            'id': window['p$DE'][_[31211]],
            'role': window['p$DE'][_[4213]],
            'level': window['p$DE'][_[31212]],
            'user': window['p$DE'][_[26219]],
            'version': window['p$DE'][_[101]],
            'cdn': window['p$DE'][_[4089]],
            'pkgName': window['p$DE'][_[26220]],
            'gamever': window[_[562]][_[31206]],
            'serverid': window['p$DE'][_[26214]] ? window['p$DE'][_[26214]][_[11316]] : 0x0,
            'systemInfo': window[_[31213]],
            'error': _[31214],
            'stack': z_$y01 ? z_$y01[_[4091]] : ''
        },
            rvuqs = JSON[_[4075]](jihgfk);
        console[_[125]](_[31215] + rvuqs), (!window[_[31204]] || window[_[31204]] != jihgfk[_[125]]) && (window[_[31204]] = jihgfk[_[125]], window['p$BD'](jihgfk));
    }
});
import 'bbbmd5min.js';
import 'bbbzlibs.js';
window[_[31216]] = require(_[31217]);
import 'bbbindex.js';
import 'bbblibsmin.js';
import 'bbbwxmini.js';
import 'bbbinitmin.js';
console[_[78]](_[31218]), console[_[78]](_[31219]), p$BDCE({ 'title': _[31220] });
var _djfhigk = { 'p$ABEDC': !![] };
new window[_[31221]](_djfhigk), window[_[31221]][_[148]]['p$ACDEB']();
if (window['p$ABDEC']) clearInterval(window['p$ABDEC']);
window['p$ABDEC'] = null, window['p$ACEBD'] = function (bfdc, ihdge) {
    if (!bfdc || !ihdge) return 0x0;
    bfdc = bfdc[_[15]]('.'), ihdge = ihdge[_[15]]('.');
    const hljigk = Math[_[894]](bfdc[_[13]], ihdge[_[13]]);
    while (bfdc[_[13]] < hljigk) {
        bfdc[_[29]]('0');
    }
    while (ihdge[_[13]] < hljigk) {
        ihdge[_[29]]('0');
    }
    for (var orspn = 0x0; orspn < hljigk; orspn++) {
        const $yxw_z = parseInt(bfdc[orspn]),
              mrnopq = parseInt(ihdge[orspn]);
        if ($yxw_z > mrnopq) return 0x1;else {
            if ($yxw_z < mrnopq) return -0x1;
        }
    }
    return 0x0;
}, window[_[31222]] = wx[_[31223]]()[_[31222]], console[_[487]](_[31224] + window[_[31222]]);
var _dmonqlp = wx[_[31225]]();
_dmonqlp[_[31226]](function (fikjg) {
    console[_[487]](_[31227] + fikjg[_[31228]]);
}), _dmonqlp[_[31229]](function () {
    wx[_[31230]]({
        'title': _[31231],
        'content': _[31232],
        'showCancel': ![],
        'success': function (vqtu) {
            _dmonqlp[_[31233]]();
        }
    });
}), _dmonqlp[_[31234]](function () {
    console[_[487]](_[31235]);
}), window['p$ACEDB'] = function () {
    console[_[487]](_[31236]);
    var vutswr = wx[_[31237]]({
        'name': _[31238],
        'success': function ($ywzvx) {
            console[_[487]](_[31239]), console[_[487]]($ywzvx), $ywzvx && $ywzvx[_[26415]] == _[31240] ? (window['p$EC'] = !![], window['p$ECDB'](), window['p$EDBC']()) : setTimeout(function () {
                window['p$ACEDB']();
            }, 0x1f4);
        },
        'fail': function (njlkmo) {
            console[_[487]](_[31241]), console[_[487]](njlkmo), setTimeout(function () {
                window['p$ACEDB']();
            }, 0x1f4);
        }
    });
    vutswr && vutswr[_[30519]](y$vzxw => {});
}, window['p$ADBEC'] = function () {
    console[_[487]](_[31242]);
    var kmijh = wx[_[31237]]({
        'name': _[31243],
        'success': function (fgheid) {
            console[_[487]](_[31244]), console[_[487]](fgheid), fgheid && fgheid[_[26415]] == _[31240] ? (window['p$DCE'] = !![], window['p$ECDB'](), window['p$EDBC']()) : setTimeout(function () {
                window['p$ADBEC']();
            }, 0x1f4);
        },
        'fail': function (jiglh) {
            console[_[487]](_[31245]), console[_[487]](jiglh), setTimeout(function () {
                window['p$ADBEC']();
            }, 0x1f4);
        }
    });
    kmijh && kmijh[_[30519]](jgefh => {});
}, window[_[31246]] = function () {
    window['p$ACEBD'](window[_[31222]], _[31247]) >= 0x0 ? (console[_[487]](_[31248] + window[_[31222]] + _[31249]), window['p$DB'](), window['p$ACEDB'](), window['p$ADBEC']()) : (window['p$DEB'](_[31250], window[_[31222]]), wx[_[31230]]({
        'title': _[5619],
        'content': _[31251]
    }));
}, window[_[31213]] = '', wx[_[31252]]({
    'success'(ehifg) {
        window[_[31213]] = _[31253] + ehifg[_[31254]] + _[31255] + ehifg[_[31256]] + _[31257] + ehifg[_[4902]] + _[31258] + ehifg[_[480]] + _[31259] + ehifg[_[26181]] + _[31260] + ehifg[_[31222]] + _[31261] + ehifg[_[9006]], console[_[487]](window[_[31213]]), console[_[487]](_[31262] + ehifg[_[31263]] + _[31264] + ehifg[_[31265]] + _[31266] + ehifg[_[31267]] + _[31268] + ehifg[_[31269]] + _[31270] + ehifg[_[31271]] + _[31272] + ehifg[_[31273]] + _[31274] + (ehifg[_[31275]] ? ehifg[_[31275]][_[322]] + ',' + ehifg[_[31275]][_[1275]] + ',' + ehifg[_[31275]][_[1277]] + ',' + ehifg[_[31275]][_[1276]] : ''));
        var qpmnro = ehifg[_[480]] ? ehifg[_[480]][_[12345]]() : '',
            gifhej = ehifg[_[31256]] ? ehifg[_[31256]][_[12345]]()[_[4329]]('\x20', '') : '';
        window['p$DE'][_[1116]] = qpmnro[_[115]](_[31276]) != -0x1, window['p$DE'][_[11140]] = qpmnro[_[115]](_[31191]) != -0x1, window['p$DE'][_[31277]] = qpmnro[_[115]](_[31276]) != -0x1 || qpmnro[_[115]](_[31191]) != -0x1, window['p$DE'][_[25903]] = qpmnro[_[115]](_[31278]) != -0x1 || qpmnro[_[115]](_[31279]) != -0x1, window['p$DE'][_[31280]] = ehifg[_[26181]] ? ehifg[_[26181]][_[12345]]() : '', window['p$DE']['p$ABCED'] = ![], window['p$DE']['p$ABDCE'] = 0x2;
        if (qpmnro[_[115]](_[31191]) != -0x1) {
            if (ehifg[_[9006]] >= 0x18) window['p$DE']['p$ABDCE'] = 0x3;else window['p$DE']['p$ABDCE'] = 0x2;
        } else {
            if (qpmnro[_[115]](_[31276]) != -0x1) {
                if (ehifg[_[9006]] && ehifg[_[9006]] >= 0x14) window['p$DE']['p$ABDCE'] = 0x3;else {
                    if (gifhej[_[115]](_[31281]) != -0x1 || gifhej[_[115]](_[31282]) != -0x1 || gifhej[_[115]](_[31283]) != -0x1 || gifhej[_[115]](_[31284]) != -0x1 || gifhej[_[115]](_[31285]) != -0x1) window['p$DE']['p$ABDCE'] = 0x2;else window['p$DE']['p$ABDCE'] = 0x3;
                }
            } else window['p$DE']['p$ABDCE'] = 0x2;
        }
        console[_[487]](_[31286] + window['p$DE']['p$ABCED'] + _[31287] + window['p$DE']['p$ABDCE']);
    }
}), wx[_[31288]]({
    'success': function (nmrpoq) {
        console[_[487]](_[31289] + nmrpoq[_[4189]] + _[31290] + nmrpoq[_[31291]]);
    }
}), wx[_[11697]]({
    'success': function ($13_) {
        console[_[487]](_[31292] + $13_[_[13231]]);
    }
}), wx[_[31293]]({ 'keepScreenOn': !![] }), wx[_[11699]](function (bdfgec) {
    console[_[487]](_[31292] + bdfgec[_[13231]] + _[31294] + bdfgec[_[31295]]);
}), wx[_[10631]](function (okmpn) {
    window['p$CB'] = okmpn, window['p$EBC'] && window['p$CB'] && (console[_[78]](_[31296] + window['p$CB'][_[817]]), window['p$EBC'](window['p$CB']), window['p$CB'] = null);
}), window[_[31297]] = 0x0, window['p$ADCEB'] = 0x0, window[_[31298]] = null, wx[_[31299]](function () {
    window['p$ADCEB']++;
    var gkhijf = Date[_[83]]();
    (window[_[31297]] == 0x0 || gkhijf - window[_[31297]] > 0x1d4c0) && (console[_[96]](_[31300]), wx[_[11883]]());
    if (window['p$ADCEB'] >= 0x2) {
        window['p$ADCEB'] = 0x0, console[_[125]](_[31301]), wx[_[31302]]('0', 0x1);
        if (window['p$DE'] && window['p$DE'][_[1116]]) window['p$DEB'](_[31303], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});