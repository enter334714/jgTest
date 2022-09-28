var _ = wx.y$;
console[_[78]](_[46138]), window[_[46139]], wx[_[46140]](function (rvf6k0) {
    if (rvf6k0) {
        if (rvf6k0[_[4179]]) {
            var frv6y0 = window[_[562]][_[46141]][_[4358]](new RegExp(/\./, 'g'), '_'),
                vftryc = rvf6k0[_[4179]],
                mqsb4u = vftryc[_[15452]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);
            if (mqsb4u) for (var n_ep2i = 0x0; n_ep2i < mqsb4u[_[13]]; n_ep2i++) {
                if (mqsb4u[n_ep2i] && mqsb4u[n_ep2i][_[13]] > 0x0) {
                    var l125eh = parseInt(mqsb4u[n_ep2i][_[4358]](_[46142], '')[_[4358]](':', ''));
                    vftryc = vftryc[_[4358]](mqsb4u[n_ep2i], mqsb4u[n_ep2i][_[4358]](':' + l125eh + ':', ':' + (l125eh - 0x2) + ':'));
                }
            }
            vftryc = vftryc[_[4358]](new RegExp(_[46143], 'g'), _[46144] + frv6y0 + _[38299]), vftryc = vftryc[_[4358]](new RegExp(_[46145], 'g'), _[46144] + frv6y0 + _[38299]), rvf6k0[_[4179]] = vftryc;
        }
        var gmzdx = {
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
            'stack': rvf6k0 ? rvf6k0[_[4179]] : ''
        },
            r6fvk = JSON[_[4163]](gmzdx);
        console[_[125]](_[46150] + r6fvk), (!window[_[46139]] || window[_[46139]] != gmzdx[_[125]]) && (window[_[46139]] = gmzdx[_[125]], window['p$OZ'](gmzdx));
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
var _dhel215 = { 'p$8OAZR': !![] };
new window[_[46156]](_dhel215), window[_[46156]][_[148]]['p$8RZAO']();
if (window['p$8OZAR']) clearInterval(window['p$8OZAR']);
window['p$8OZAR'] = null, window['p$8RAOZ'] = function (v6jkf0, bup9is) {
    if (!v6jkf0 || !bup9is) return 0x0;
    v6jkf0 = v6jkf0[_[15]]('.'), bup9is = bup9is[_[15]]('.');
    const he2_ln = Math[_[894]](v6jkf0[_[13]], bup9is[_[13]]);
    while (v6jkf0[_[13]] < he2_ln) {
        v6jkf0[_[29]]('0');
    }
    while (bup9is[_[13]] < he2_ln) {
        bup9is[_[29]]('0');
    }
    for (var e2_nl = 0x0; e2_nl < he2_ln; e2_nl++) {
        const zdw8x = parseInt(v6jkf0[e2_nl]),
              artoyc = parseInt(bup9is[e2_nl]);
        if (zdw8x > artoyc) return 0x1;else {
            if (zdw8x < artoyc) return -0x1;
        }
    }
    return 0x0;
}, window[_[46157]] = wx[_[46158]]()[_[46157]], console[_[487]](_[46159] + window[_[46157]]);
var _dfr0v6 = wx[_[46160]]();
_dfr0v6[_[46161]](function (kj3d08) {
    console[_[487]](_[46162] + kj3d08[_[46163]]);
}), _dfr0v6[_[46164]](function () {
    wx[_[46165]]({
        'title': _[46166],
        'content': _[46167],
        'showCancel': ![],
        'success': function (mgq4u) {
            _dfr0v6[_[46168]]();
        }
    });
}), _dfr0v6[_[46169]](function () {
    console[_[487]](_[46170]);
}), window['p$8RAZO'] = function () {
    console[_[487]](_[46171]);
    var l12enh = wx[_[46172]]({
        'name': _[46173],
        'success': function (g4mqzx) {
            console[_[487]](_[46174]), console[_[487]](g4mqzx), g4mqzx && g4mqzx[_[38535]] == _[46175] ? (window['p$AR'] = !![], window['p$ARZO'](), window['p$AZOR']()) : setTimeout(function () {
                window['p$8RAZO']();
            }, 0x1f4);
        },
        'fail': function (ph) {
            console[_[487]](_[46176]), console[_[487]](ph), setTimeout(function () {
                window['p$8RAZO']();
            }, 0x1f4);
        }
    });
    l12enh && l12enh[_[44809]](k36j => {});
}, window['p$8ZOAR'] = function () {
    console[_[487]](_[46177]);
    var qsib9u = wx[_[46172]]({
        'name': _[46178],
        'success': function (fv60yr) {
            console[_[487]](_[46179]), console[_[487]](fv60yr), fv60yr && fv60yr[_[38535]] == _[46175] ? (window['p$ZRA'] = !![], window['p$ARZO'](), window['p$AZOR']()) : setTimeout(function () {
                window['p$8ZOAR']();
            }, 0x1f4);
        },
        'fail': function (trcoyf) {
            console[_[487]](_[46180]), console[_[487]](trcoyf), setTimeout(function () {
                window['p$8ZOAR']();
            }, 0x1f4);
        }
    });
    qsib9u && qsib9u[_[44809]](ryf60v => {});
}, window[_[46181]] = function () {
    window['p$8RAOZ'](window[_[46157]], _[46182]) >= 0x0 ? (console[_[487]](_[46183] + window[_[46157]] + _[46184]), window['p$ZO'](), window['p$8RAZO'](), window['p$8ZOAR']()) : (window['p$ZAO'](_[46185], window[_[46157]]), wx[_[46165]]({
        'title': _[5802],
        'content': _[46186]
    }));
}, window[_[46148]] = '', wx[_[46187]]({
    'success'(l12$h5) {
        window[_[46148]] = _[46188] + l12$h5[_[46189]] + _[46190] + l12$h5[_[46191]] + _[46192] + l12$h5[_[4371]] + _[46193] + l12$h5[_[480]] + _[46194] + l12$h5[_[38142]] + _[46195] + l12$h5[_[46157]] + _[46196] + l12$h5[_[11133]], console[_[487]](window[_[46148]]), console[_[487]](_[46197] + l12$h5[_[46198]] + _[46199] + l12$h5[_[46200]] + _[46201] + l12$h5[_[46202]] + _[46203] + l12$h5[_[46204]] + _[46205] + l12$h5[_[46206]] + _[46207] + l12$h5[_[46208]] + _[46209] + (l12$h5[_[46210]] ? l12$h5[_[46210]][_[322]] + ',' + l12$h5[_[46210]][_[1275]] + ',' + l12$h5[_[46210]][_[1277]] + ',' + l12$h5[_[46210]][_[1276]] : ''));
        var _pnie2 = l12$h5[_[480]] ? l12$h5[_[480]][_[15917]]() : '',
            dmzxwg = l12$h5[_[46191]] ? l12$h5[_[46191]][_[15917]]()[_[4358]]('\x20', '') : '';
        window['p$ZA'][_[1116]] = _pnie2[_[115]](_[46211]) != -0x1, window['p$ZA'][_[14149]] = _pnie2[_[115]](_[45962]) != -0x1, window['p$ZA'][_[46212]] = _pnie2[_[115]](_[46211]) != -0x1 || _pnie2[_[115]](_[45962]) != -0x1, window['p$ZA'][_[37777]] = _pnie2[_[115]](_[46213]) != -0x1 || _pnie2[_[115]](_[46214]) != -0x1, window['p$ZA'][_[46215]] = l12$h5[_[38142]] ? l12$h5[_[38142]][_[15917]]() : '', window['p$ZA']['p$8ORAZ'] = ![], window['p$ZA']['p$8OZRA'] = 0x2;
        if (_pnie2[_[115]](_[45962]) != -0x1) {
            if (l12$h5[_[11133]] >= 0x18) window['p$ZA']['p$8OZRA'] = 0x3;else window['p$ZA']['p$8OZRA'] = 0x2;
        } else {
            if (_pnie2[_[115]](_[46211]) != -0x1) {
                if (l12$h5[_[11133]] && l12$h5[_[11133]] >= 0x14) window['p$ZA']['p$8OZRA'] = 0x3;else {
                    if (dmzxwg[_[115]](_[46216]) != -0x1 || dmzxwg[_[115]](_[46217]) != -0x1 || dmzxwg[_[115]](_[46218]) != -0x1 || dmzxwg[_[115]](_[46219]) != -0x1 || dmzxwg[_[115]](_[46220]) != -0x1) window['p$ZA']['p$8OZRA'] = 0x2;else window['p$ZA']['p$8OZRA'] = 0x3;
                }
            } else window['p$ZA']['p$8OZRA'] = 0x2;
        }
        console[_[487]](_[46221] + window['p$ZA']['p$8ORAZ'] + _[46222] + window['p$ZA']['p$8OZRA']);
    }
}), wx[_[46223]]({
    'success': function (ay7o) {
        console[_[487]](_[46224] + ay7o[_[4276]] + _[46225] + ay7o[_[46226]]);
    }
}), wx[_[14942]]({
    'success': function (rfcyot) {
        console[_[487]](_[46227] + rfcyot[_[17344]]);
    }
}), wx[_[46228]]({ 'keepScreenOn': !![] }), wx[_[14944]](function (gwz4m) {
    console[_[487]](_[46227] + gwz4m[_[17344]] + _[46229] + gwz4m[_[46230]]);
}), wx[_[13441]](function (n2elh_) {
    window['p$RO'] = n2elh_, window['p$AOR'] && window['p$RO'] && (console[_[78]](_[46231] + window['p$RO'][_[817]]), window['p$AOR'](window['p$RO']), window['p$RO'] = null);
}), window[_[46232]] = 0x0, window['p$8ZRAO'] = 0x0, window[_[46233]] = null, wx[_[46234]](function () {
    window['p$8ZRAO']++;
    var ayort = Date[_[83]]();
    (window[_[46232]] == 0x0 || ayort - window[_[46232]] > 0x1d4c0) && (console[_[96]](_[46235]), wx[_[15257]]());
    if (window['p$8ZRAO'] >= 0x2) {
        window['p$8ZRAO'] = 0x0, console[_[125]](_[46236]), wx[_[46237]]('0', 0x1);
        if (window['p$ZA'] && window['p$ZA'][_[1116]]) window['p$ZAO'](_[46238], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});