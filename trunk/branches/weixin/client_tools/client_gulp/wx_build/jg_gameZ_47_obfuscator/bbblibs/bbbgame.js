var _ = wx.y$;
console[_[78]](_[46138]), window[_[46139]], wx[_[46140]](function (wm4xg) {
    if (wm4xg) {
        if (wm4xg[_[4179]]) {
            var b4mu = window[_[562]][_[46141]][_[4358]](new RegExp(/\./, 'g'), '_'),
                tvycfr = wm4xg[_[4179]],
                xgwz4 = tvycfr[_[15452]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);
            if (xgwz4) for (var usb = 0x0; usb < xgwz4[_[13]]; usb++) {
                if (xgwz4[usb] && xgwz4[usb][_[13]] > 0x0) {
                    var ispub9 = parseInt(xgwz4[usb][_[4358]](_[46142], '')[_[4358]](':', ''));
                    tvycfr = tvycfr[_[4358]](xgwz4[usb], xgwz4[usb][_[4358]](':' + ispub9 + ':', ':' + (ispub9 - 0x2) + ':'));
                }
            }
            tvycfr = tvycfr[_[4358]](new RegExp(_[46143], 'g'), _[46144] + b4mu + _[38299]), tvycfr = tvycfr[_[4358]](new RegExp(_[46145], 'g'), _[46144] + b4mu + _[38299]), wm4xg[_[4179]] = tvycfr;
        }
        var jvk063 = {
            'id': window['p$ZA'][_[46146]],
            'role': window['p$ZA'][_[4300]],
            'level': window['p$ZA'][_[46147]],
            'user': window['p$ZA'][_[38192]],
            'version': window['p$ZA'][_[101]],
            'cdn': window['p$ZA'][_[4177]],
            'pkgName': window['p$ZA'][_[38193]],
            'gamever': window[_[562]][_[46141]],
            'serverid': window['p$ZA'][_[38186]] ? window['p$ZA'][_[38186]][_[14384]] : 0x0,
            'systemInfo': window[_[46148]],
            'error': _[46149],
            'stack': wm4xg ? wm4xg[_[4179]] : ''
        },
            ftry = JSON[_[4163]](jvk063);
        console[_[125]](_[46150] + ftry), (!window[_[46139]] || window[_[46139]] != jvk063[_[125]]) && (window[_[46139]] = jvk063[_[125]], window['p$OZ'](jvk063));
    }
});
import 'bbbmd5min.js';
import 'bbbzlibs.js';
window[_[46151]] = require(_[46152]);
import 'bbbindex.js';
import 'bbblibsmin.js';
import 'bbbwxmini.js';
import 'bbbinitmin.js';
console[_[78]](_[46153]), console[_[78]](_[46154]), p$OZRA({ 'title': _[46155] });
var _d_2pneh = { 'p$8OAZR': !![] };
new window[_[46156]](_d_2pneh), window[_[46156]][_[148]]['p$8RZAO']();
if (window['p$8OZAR']) clearInterval(window['p$8OZAR']);
window['p$8OZAR'] = null, window['p$8RAOZ'] = function (u9qisb, gm4xzq) {
    if (!u9qisb || !gm4xzq) return 0x0;
    u9qisb = u9qisb[_[15]]('.'), gm4xzq = gm4xzq[_[15]]('.');
    const ibuq = Math[_[894]](u9qisb[_[13]], gm4xzq[_[13]]);
    while (u9qisb[_[13]] < ibuq) {
        u9qisb[_[29]]('0');
    }
    while (gm4xzq[_[13]] < ibuq) {
        gm4xzq[_[29]]('0');
    }
    for (var xzw8 = 0x0; xzw8 < ibuq; xzw8++) {
        const yt7oca = parseInt(u9qisb[xzw8]),
              tyrfco = parseInt(gm4xzq[xzw8]);
        if (yt7oca > tyrfco) return 0x1;else {
            if (yt7oca < tyrfco) return -0x1;
        }
    }
    return 0x0;
}, window[_[46157]] = wx[_[46158]]()[_[46157]], console[_[487]](_[46159] + window[_[46157]]);
var _db_s9p = wx[_[46160]]();
_db_s9p[_[46161]](function (pe9i_n) {
    console[_[487]](_[46162] + pe9i_n[_[46163]]);
}), _db_s9p[_[46164]](function () {
    wx[_[46165]]({
        'title': _[46166],
        'content': _[46167],
        'showCancel': ![],
        'success': function (d3z8w) {
            _db_s9p[_[46168]]();
        }
    });
}), _db_s9p[_[46169]](function () {
    console[_[487]](_[46170]);
}), window['p$8RAZO'] = function () {
    console[_[487]](_[46171]);
    var biup9 = wx[_[46172]]({
        'name': _[46173],
        'success': function (in9pe) {
            console[_[487]](_[46174]), console[_[487]](in9pe), in9pe && in9pe[_[38535]] == _[46175] ? (window['p$AR'] = !![], window['p$ARZO'](), window['p$AZOR']()) : setTimeout(function () {
                window['p$8RAZO']();
            }, 0x1f4);
        },
        'fail': function (m4usg) {
            console[_[487]](_[46176]), console[_[487]](m4usg), setTimeout(function () {
                window['p$8RAZO']();
            }, 0x1f4);
        }
    });
    biup9 && biup9[_[44809]](mgs4qu => {});
}, window['p$8ZOAR'] = function () {
    console[_[487]](_[46177]);
    var xz3wd = wx[_[46172]]({
        'name': _[46178],
        'success': function (gq4usm) {
            console[_[487]](_[46179]), console[_[487]](gq4usm), gq4usm && gq4usm[_[38535]] == _[46175] ? (window['p$ZRA'] = !![], window['p$ARZO'](), window['p$AZOR']()) : setTimeout(function () {
                window['p$8ZOAR']();
            }, 0x1f4);
        },
        'fail': function (qubi9s) {
            console[_[487]](_[46180]), console[_[487]](qubi9s), setTimeout(function () {
                window['p$8ZOAR']();
            }, 0x1f4);
        }
    });
    xz3wd && xz3wd[_[44809]](xzmw4 => {});
}, window[_[46181]] = function () {
    window['p$8RAOZ'](window[_[46157]], _[46182]) >= 0x0 ? (console[_[487]](_[46183] + window[_[46157]] + _[46184]), window['p$ZO'](), window['p$8RAZO'](), window['p$8ZOAR']()) : (window['p$ZAO'](_[46185], window[_[46157]]), wx[_[46165]]({
        'title': _[5802],
        'content': _[46186]
    }));
}, window[_[46148]] = '', wx[_[46187]]({
    'success'(eph_n2) {
        window[_[46148]] = _[46188] + eph_n2[_[46189]] + _[46190] + eph_n2[_[46191]] + _[46192] + eph_n2[_[4371]] + _[46193] + eph_n2[_[480]] + _[46194] + eph_n2[_[38142]] + _[46195] + eph_n2[_[46157]] + _[46196] + eph_n2[_[11133]], console[_[487]](window[_[46148]]), console[_[487]](_[46197] + eph_n2[_[46198]] + _[46199] + eph_n2[_[46200]] + _[46201] + eph_n2[_[46202]] + _[46203] + eph_n2[_[46204]] + _[46205] + eph_n2[_[46206]] + _[46207] + eph_n2[_[46208]] + _[46209] + (eph_n2[_[46210]] ? eph_n2[_[46210]][_[322]] + ',' + eph_n2[_[46210]][_[1275]] + ',' + eph_n2[_[46210]][_[1277]] + ',' + eph_n2[_[46210]][_[1276]] : ''));
        var sbum = eph_n2[_[480]] ? eph_n2[_[480]][_[15917]]() : '',
            ub9ps = eph_n2[_[46191]] ? eph_n2[_[46191]][_[15917]]()[_[4358]]('\x20', '') : '';
        window['p$ZA'][_[1116]] = sbum[_[115]](_[46211]) != -0x1, window['p$ZA'][_[14149]] = sbum[_[115]](_[45117]) != -0x1, window['p$ZA'][_[46212]] = sbum[_[115]](_[46211]) != -0x1 || sbum[_[115]](_[45117]) != -0x1, window['p$ZA'][_[37777]] = sbum[_[115]](_[46213]) != -0x1 || sbum[_[115]](_[46214]) != -0x1, window['p$ZA'][_[46215]] = eph_n2[_[38142]] ? eph_n2[_[38142]][_[15917]]() : '', window['p$ZA']['p$8ORAZ'] = ![], window['p$ZA']['p$8OZRA'] = 0x2;
        if (sbum[_[115]](_[45117]) != -0x1) {
            if (eph_n2[_[11133]] >= 0x18) window['p$ZA']['p$8OZRA'] = 0x3;else window['p$ZA']['p$8OZRA'] = 0x2;
        } else {
            if (sbum[_[115]](_[46211]) != -0x1) {
                if (eph_n2[_[11133]] && eph_n2[_[11133]] >= 0x14) window['p$ZA']['p$8OZRA'] = 0x3;else {
                    if (ub9ps[_[115]](_[46216]) != -0x1 || ub9ps[_[115]](_[46217]) != -0x1 || ub9ps[_[115]](_[46218]) != -0x1 || ub9ps[_[115]](_[46219]) != -0x1 || ub9ps[_[115]](_[46220]) != -0x1) window['p$ZA']['p$8OZRA'] = 0x2;else window['p$ZA']['p$8OZRA'] = 0x3;
                }
            } else window['p$ZA']['p$8OZRA'] = 0x2;
        }
        console[_[487]](_[46221] + window['p$ZA']['p$8ORAZ'] + _[46222] + window['p$ZA']['p$8OZRA']);
    }
}), wx[_[46223]]({
    'success': function (v60j3) {
        console[_[487]](_[46224] + v60j3[_[4276]] + _[46225] + v60j3[_[46226]]);
    }
}), wx[_[14942]]({
    'success': function (xqmu4g) {
        console[_[487]](_[46227] + xqmu4g[_[17344]]);
    }
}), wx[_[46228]]({ 'keepScreenOn': !![] }), wx[_[14944]](function (zgx4w) {
    console[_[487]](_[46227] + zgx4w[_[17344]] + _[46229] + zgx4w[_[46230]]);
}), wx[_[13441]](function (z8wgdx) {
    window['p$RO'] = z8wgdx, window['p$AOR'] && window['p$RO'] && (console[_[78]](_[46231] + window['p$RO'][_[817]]), window['p$AOR'](window['p$RO']), window['p$RO'] = null);
}), window[_[46232]] = 0x0, window['p$8ZRAO'] = 0x0, window[_[46233]] = null, wx[_[46234]](function () {
    window['p$8ZRAO']++;
    var w8d3k = Date[_[83]]();
    (window[_[46232]] == 0x0 || w8d3k - window[_[46232]] > 0x1d4c0) && (console[_[96]](_[46235]), wx[_[15257]]());
    if (window['p$8ZRAO'] >= 0x2) {
        window['p$8ZRAO'] = 0x0, console[_[125]](_[46236]), wx[_[46237]]('0', 0x1);
        if (window['p$ZA'] && window['p$ZA'][_[1116]]) window['p$ZAO'](_[46238], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});