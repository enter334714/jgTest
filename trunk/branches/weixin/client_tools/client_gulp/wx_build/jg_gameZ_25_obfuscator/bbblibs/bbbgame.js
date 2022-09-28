var _ = wx.y$;
console[_[78]](_[31667]), window[_[31668]], wx[_[31669]](function (x_$0y) {
    if (x_$0y) {
        if (x_$0y[_[4134]]) {
            var vyzw$ = window[_[563]][_[31670]][_[4372]](new RegExp(/\./, 'g'), '_'),
                bfaec = x_$0y[_[4134]],
                wvuzyx = bfaec[_[12093]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);
            if (wvuzyx) for (var _$z0y1 = 0x0; _$z0y1 < wvuzyx[_[13]]; _$z0y1++) {
                if (wvuzyx[_$z0y1] && wvuzyx[_$z0y1][_[13]] > 0x0) {
                    var jhigfk = parseInt(wvuzyx[_$z0y1][_[4372]](_[31671], '')[_[4372]](':', ''));
                    bfaec = bfaec[_[4372]](wvuzyx[_$z0y1], wvuzyx[_$z0y1][_[4372]](':' + jhigfk + ':', ':' + (jhigfk - 0x2) + ':'));
                }
            }
            bfaec = bfaec[_[4372]](new RegExp(_[31672], 'g'), _[31673] + vyzw$ + _[26449]), bfaec = bfaec[_[4372]](new RegExp(_[31674], 'g'), _[31673] + vyzw$ + _[26449]), x_$0y[_[4134]] = bfaec;
        }
        var lmop = {
            'id': window['p$DE'][_[31675]],
            'role': window['p$DE'][_[4256]],
            'level': window['p$DE'][_[31676]],
            'user': window['p$DE'][_[26349]],
            'version': window['p$DE'][_[101]],
            'cdn': window['p$DE'][_[4132]],
            'pkgName': window['p$DE'][_[26351]],
            'gamever': window[_[563]][_[31670]],
            'serverid': window['p$DE'][_[26345]] ? window['p$DE'][_[26345]][_[11363]] : 0x0,
            'systemInfo': window[_[31677]],
            'error': _[31678],
            'stack': x_$0y ? x_$0y[_[4134]] : ''
        },
            ihjg = JSON[_[4118]](lmop);
        console[_[125]](_[31679] + ihjg), (!window[_[31668]] || window[_[31668]] != lmop[_[125]]) && (window[_[31668]] = lmop[_[125]], window['p$BD'](lmop));
    }
});
import 'bbbmd5min.js';
import 'bbbzlibs.js';
window[_[31680]] = require(_[31681]);
import 'bbbindex.js';
import 'bbblibsmin.js';
import 'bbbwxmini.js';
import 'bbbinitmin.js';
console[_[78]](_[31682]), console[_[78]](_[31683]), p$BDCE({ 'title': _[31684] });
var _d$021 = { 'p$ABEDC': !![] };
new window[_[31685]](_d$021), window[_[31685]][_[148]]['p$ACDEB']();
if (window['p$ABDEC']) clearInterval(window['p$ABDEC']);
window['p$ABDEC'] = null, window['p$ACEBD'] = function (wzvxu, hfide) {
    if (!wzvxu || !hfide) return 0x0;
    wzvxu = wzvxu[_[15]]('.'), hfide = hfide[_[15]]('.');
    const jhklig = Math[_[895]](wzvxu[_[13]], hfide[_[13]]);
    while (wzvxu[_[13]] < jhklig) {
        wzvxu[_[29]]('0');
    }
    while (hfide[_[13]] < jhklig) {
        hfide[_[29]]('0');
    }
    for (var rtuwsv = 0x0; rtuwsv < jhklig; rtuwsv++) {
        const dabcfe = parseInt(wzvxu[rtuwsv]),
              qolpnm = parseInt(hfide[rtuwsv]);
        if (dabcfe > qolpnm) return 0x1;else {
            if (dabcfe < qolpnm) return -0x1;
        }
    }
    return 0x0;
}, window[_[31686]] = wx[_[31687]]()[_[31686]], console[_[488]](_[31688] + window[_[31686]]);
var _dsuvxt = wx[_[31689]]();
_dsuvxt[_[31690]](function (cedg) {
    console[_[488]](_[31691] + cedg[_[31692]]);
}), _dsuvxt[_[31693]](function () {
    wx[_[31694]]({
        'title': _[31695],
        'content': _[31696],
        'showCancel': ![],
        'success': function (feigjh) {
            _dsuvxt[_[31697]]();
        }
    });
}), _dsuvxt[_[31698]](function () {
    console[_[488]](_[31699]);
}), window['p$ACEDB'] = function () {
    console[_[488]](_[31700]);
    var omnql = wx[_[31701]]({
        'name': _[31702],
        'success': function (gikf) {
            console[_[488]](_[31703]), console[_[488]](gikf), gikf && gikf[_[26546]] == _[31704] ? (window['p$EC'] = !![], window['p$ECDB'](), window['p$EDBC']()) : setTimeout(function () {
                window['p$ACEDB']();
            }, 0x1f4);
        },
        'fail': function (xvuwyt) {
            console[_[488]](_[31705]), console[_[488]](xvuwyt), setTimeout(function () {
                window['p$ACEDB']();
            }, 0x1f4);
        }
    });
    omnql && omnql[_[31049]](ijmlkn => {});
}, window['p$ADBEC'] = function () {
    console[_[488]](_[31706]);
    var cgbdef = wx[_[31701]]({
        'name': _[31707],
        'success': function (chdgef) {
            console[_[488]](_[31708]), console[_[488]](chdgef), chdgef && chdgef[_[26546]] == _[31704] ? (window['p$DCE'] = !![], window['p$ECDB'](), window['p$EDBC']()) : setTimeout(function () {
                window['p$ADBEC']();
            }, 0x1f4);
        },
        'fail': function (gbfd) {
            console[_[488]](_[31709]), console[_[488]](gbfd), setTimeout(function () {
                window['p$ADBEC']();
            }, 0x1f4);
        }
    });
    cgbdef && cgbdef[_[31049]](cdefa => {});
}, window[_[31710]] = function () {
    window['p$ACEBD'](window[_[31686]], _[31711]) >= 0x0 ? (console[_[488]](_[31712] + window[_[31686]] + _[31713]), window['p$DB'](), window['p$ACEDB'](), window['p$ADBEC']()) : (window['p$DEB'](_[31714], window[_[31686]]), wx[_[31694]]({
        'title': _[5669],
        'content': _[31715]
    }));
}, window[_[31677]] = '', wx[_[31716]]({
    'success'(npoq) {
        window[_[31677]] = _[31717] + npoq[_[31718]] + _[31719] + npoq[_[31720]] + _[31721] + npoq[_[4945]] + _[31722] + npoq[_[481]] + _[31723] + npoq[_[26312]] + _[31724] + npoq[_[31686]] + _[31725] + npoq[_[9053]], console[_[488]](window[_[31677]]), console[_[488]](_[31726] + npoq[_[31727]] + _[31728] + npoq[_[31729]] + _[31730] + npoq[_[31731]] + _[31732] + npoq[_[31733]] + _[31734] + npoq[_[31735]] + _[31736] + npoq[_[31737]] + _[31738] + (npoq[_[31739]] ? npoq[_[31739]][_[323]] + ',' + npoq[_[31739]][_[1277]] + ',' + npoq[_[31739]][_[1279]] + ',' + npoq[_[31739]][_[1278]] : ''));
        var cdbfe = npoq[_[481]] ? npoq[_[481]][_[12403]]() : '',
            mpkn = npoq[_[31720]] ? npoq[_[31720]][_[12403]]()[_[4372]]('\x20', '') : '';
        window['p$DE'][_[1117]] = cdbfe[_[115]](_[31740]) != -0x1, window['p$DE'][_[11187]] = cdbfe[_[115]](_[31741]) != -0x1, window['p$DE'][_[31742]] = cdbfe[_[115]](_[31740]) != -0x1 || cdbfe[_[115]](_[31741]) != -0x1, window['p$DE'][_[26031]] = cdbfe[_[115]](_[31743]) != -0x1 || cdbfe[_[115]](_[31744]) != -0x1, window['p$DE'][_[31745]] = npoq[_[26312]] ? npoq[_[26312]][_[12403]]() : '', window['p$DE']['p$ABCED'] = ![], window['p$DE']['p$ABDCE'] = 0x2;
        if (cdbfe[_[115]](_[31741]) != -0x1) {
            if (npoq[_[9053]] >= 0x18) window['p$DE']['p$ABDCE'] = 0x3;else window['p$DE']['p$ABDCE'] = 0x2;
        } else {
            if (cdbfe[_[115]](_[31740]) != -0x1) {
                if (npoq[_[9053]] && npoq[_[9053]] >= 0x14) window['p$DE']['p$ABDCE'] = 0x3;else {
                    if (mpkn[_[115]](_[31746]) != -0x1 || mpkn[_[115]](_[31747]) != -0x1 || mpkn[_[115]](_[31748]) != -0x1 || mpkn[_[115]](_[31749]) != -0x1 || mpkn[_[115]](_[31750]) != -0x1) window['p$DE']['p$ABDCE'] = 0x2;else window['p$DE']['p$ABDCE'] = 0x3;
                }
            } else window['p$DE']['p$ABDCE'] = 0x2;
        }
        console[_[488]](_[31751] + window['p$DE']['p$ABCED'] + _[31752] + window['p$DE']['p$ABDCE']);
    }
}), wx[_[31753]]({
    'success': function (fbcdea) {
        console[_[488]](_[31754] + fbcdea[_[4232]] + _[31755] + fbcdea[_[31756]]);
    }
}), wx[_[11744]]({
    'success': function (tqospr) {
        console[_[488]](_[31757] + tqospr[_[13314]]);
    }
}), wx[_[31758]]({ 'keepScreenOn': !![] }), wx[_[11746]](function ($_xyw) {
    console[_[488]](_[31757] + $_xyw[_[13314]] + _[31759] + $_xyw[_[31760]]);
}), wx[_[10678]](function (jhgikf) {
    window['p$CB'] = jhgikf, window['p$EBC'] && window['p$CB'] && (console[_[78]](_[31761] + window['p$CB'][_[818]]), window['p$EBC'](window['p$CB']), window['p$CB'] = null);
}), window[_[31762]] = 0x0, window['p$ADCEB'] = 0x0, window[_[31763]] = null, wx[_[31764]](function () {
    window['p$ADCEB']++;
    var utqvrs = Date[_[83]]();
    (window[_[31762]] == 0x0 || utqvrs - window[_[31762]] > 0x1d4c0) && (console[_[96]](_[31765]), wx[_[11930]]());
    if (window['p$ADCEB'] >= 0x2) {
        window['p$ADCEB'] = 0x0, console[_[125]](_[31766]), wx[_[31767]]('0', 0x1);
        if (window['p$DE'] && window['p$DE'][_[1117]]) window['p$DEB'](_[31768], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});