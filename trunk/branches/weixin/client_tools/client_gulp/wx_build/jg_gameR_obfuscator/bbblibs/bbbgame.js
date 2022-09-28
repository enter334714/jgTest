var _ = wx.y$;
console[_[78]](_[31748]), window[_[31749]], wx[_[31750]](function (u5i) {
    if (u5i) {
        if (u5i[_[4134]]) {
            var ie5jtu = window[_[563]][_[31751]][_[4372]](new RegExp(/\./, 'g'), '_'),
                fk3r$9 = u5i[_[4134]],
                n7gp2 = fk3r$9[_[12093]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);
            if (n7gp2) for (var ndgpl7 = 0x0; ndgpl7 < n7gp2[_[13]]; ndgpl7++) {
                if (n7gp2[ndgpl7] && n7gp2[ndgpl7][_[13]] > 0x0) {
                    var swdhq6 = parseInt(n7gp2[ndgpl7][_[4372]](_[31752], '')[_[4372]](':', ''));
                    fk3r$9 = fk3r$9[_[4372]](n7gp2[ndgpl7], n7gp2[ndgpl7][_[4372]](':' + swdhq6 + ':', ':' + (swdhq6 - 0x2) + ':'));
                }
            }
            fk3r$9 = fk3r$9[_[4372]](new RegExp(_[31753], 'g'), _[31754] + ie5jtu + _[26449]), fk3r$9 = fk3r$9[_[4372]](new RegExp(_[31755], 'g'), _[31754] + ie5jtu + _[26449]), u5i[_[4134]] = fk3r$9;
        }
        var ldws76 = {
            'id': window['p$R5'][_[31756]],
            'role': window['p$R5'][_[4256]],
            'level': window['p$R5'][_[31757]],
            'user': window['p$R5'][_[26349]],
            'version': window['p$R5'][_[101]],
            'cdn': window['p$R5'][_[4132]],
            'pkgName': window['p$R5'][_[26351]],
            'gamever': window[_[563]][_[31751]],
            'serverid': window['p$R5'][_[26345]] ? window['p$R5'][_[26345]][_[11363]] : 0x0,
            'systemInfo': window[_[31758]],
            'error': _[31759],
            'stack': u5i ? u5i[_[4134]] : ''
        },
            hzosq6 = JSON[_[4118]](ldws76);
        console[_[125]](_[31760] + hzosq6), (!window[_[31749]] || window[_[31749]] != ldws76[_[125]]) && (window[_[31749]] = ldws76[_[125]], window['p$_R'](ldws76));
    }
});
import 'bbbmd5min.js';
import 'bbbzlibs.js';
window[_[31761]] = require(_[31762]);
import 'bbbindex.js';
import 'bbblibsmin.js';
import 'bbbwxmini.js';
import 'bbbinitmin.js';
console[_[78]](_[31763]), console[_[78]](_[31764]), p$_RV5({ 'title': _[31765] });
var _dz6oq0 = { 'p$2_5RV': !![] };
new window[_[31766]](_dz6oq0), window[_[31766]][_[148]]['p$2VR5_']();
if (window['p$2_R5V']) clearInterval(window['p$2_R5V']);
window['p$2_R5V'] = null, window['p$2V5_R'] = function (f$r93k, et5ui) {
    if (!f$r93k || !et5ui) return 0x0;
    f$r93k = f$r93k[_[15]]('.'), et5ui = et5ui[_[15]]('.');
    const m_xvc = Math[_[895]](f$r93k[_[13]], et5ui[_[13]]);
    while (f$r93k[_[13]] < m_xvc) {
        f$r93k[_[29]]('0');
    }
    while (et5ui[_[13]] < m_xvc) {
        et5ui[_[29]]('0');
    }
    for (var hzq0ro = 0x0; hzq0ro < m_xvc; hzq0ro++) {
        const _mxacv = parseInt(f$r93k[hzq0ro]),
              gb2n4p = parseInt(et5ui[hzq0ro]);
        if (_mxacv > gb2n4p) return 0x1;else {
            if (_mxacv < gb2n4p) return -0x1;
        }
    }
    return 0x0;
}, window[_[31767]] = wx[_[31768]]()[_[31767]], console[_[488]](_[31769] + window[_[31767]]);
var _di5ute = wx[_[31770]]();
_di5ute[_[31771]](function (gn42) {
    console[_[488]](_[31772] + gn42[_[31773]]);
}), _di5ute[_[31774]](function () {
    wx[_[31775]]({
        'title': _[31776],
        'content': _[31777],
        'showCancel': ![],
        'success': function (acm_) {
            _di5ute[_[31778]]();
        }
    });
}), _di5ute[_[31779]](function () {
    console[_[488]](_[31780]);
}), window['p$2V5R_'] = function () {
    console[_[488]](_[31781]);
    var i2nb4y = wx[_[31782]]({
        'name': _[31783],
        'success': function (hq6d) {
            console[_[488]](_[31784]), console[_[488]](hq6d), hq6d && hq6d[_[26546]] == _[31785] ? (window['p$5V'] = !![], window['p$5VR_'](), window['p$5R_V']()) : setTimeout(function () {
                window['p$2V5R_']();
            }, 0x1f4);
        },
        'fail': function (zshwq) {
            console[_[488]](_[31786]), console[_[488]](zshwq), setTimeout(function () {
                window['p$2V5R_']();
            }, 0x1f4);
        }
    });
    i2nb4y && i2nb4y[_[31049]](amvk$ => {});
}, window['p$2R_5V'] = function () {
    console[_[488]](_[31787]);
    var ju5eit = wx[_[31782]]({
        'name': _[31788],
        'success': function (pwgdl) {
            console[_[488]](_[31789]), console[_[488]](pwgdl), pwgdl && pwgdl[_[26546]] == _[31785] ? (window['p$RV5'] = !![], window['p$5VR_'](), window['p$5R_V']()) : setTimeout(function () {
                window['p$2R_5V']();
            }, 0x1f4);
        },
        'fail': function ($r093) {
            console[_[488]](_[31790]), console[_[488]]($r093), setTimeout(function () {
                window['p$2R_5V']();
            }, 0x1f4);
        }
    });
    ju5eit && ju5eit[_[31049]]($9rf03 => {});
}, window[_[31791]] = function () {
    window['p$2V5_R'](window[_[31767]], _[31792]) >= 0x0 ? (console[_[488]](_[31793] + window[_[31767]] + _[31794]), window['p$R_'](), window['p$2V5R_'](), window['p$2R_5V']()) : (window['p$R5_'](_[31795], window[_[31767]]), wx[_[31775]]({
        'title': _[5669],
        'content': _[31796]
    }));
}, window[_[31758]] = '', wx[_[31797]]({
    'success'(wlp) {
        window[_[31758]] = _[31798] + wlp[_[31799]] + _[31800] + wlp[_[31801]] + _[31802] + wlp[_[4945]] + _[31803] + wlp[_[481]] + _[31804] + wlp[_[26312]] + _[31805] + wlp[_[31767]] + _[31806] + wlp[_[9053]], console[_[488]](window[_[31758]]), console[_[488]](_[31807] + wlp[_[31808]] + _[31809] + wlp[_[31810]] + _[31811] + wlp[_[31812]] + _[31813] + wlp[_[31814]] + _[31815] + wlp[_[31816]] + _[31817] + wlp[_[31818]] + _[31819] + (wlp[_[31820]] ? wlp[_[31820]][_[323]] + ',' + wlp[_[31820]][_[1277]] + ',' + wlp[_[31820]][_[1279]] + ',' + wlp[_[31820]][_[1278]] : ''));
        var n4b2gp = wlp[_[481]] ? wlp[_[481]][_[12403]]() : '',
            f9r$03 = wlp[_[31801]] ? wlp[_[31801]][_[12403]]()[_[4372]]('\x20', '') : '';
        window['p$R5'][_[1117]] = n4b2gp[_[115]](_[31821]) != -0x1, window['p$R5'][_[11187]] = n4b2gp[_[115]](_[31309]) != -0x1, window['p$R5'][_[31822]] = n4b2gp[_[115]](_[31821]) != -0x1 || n4b2gp[_[115]](_[31309]) != -0x1, window['p$R5'][_[26031]] = n4b2gp[_[115]](_[31823]) != -0x1 || n4b2gp[_[115]](_[31824]) != -0x1, window['p$R5'][_[31825]] = wlp[_[26312]] ? wlp[_[26312]][_[12403]]() : '', window['p$R5']['p$2_V5R'] = ![], window['p$R5']['p$2_RV5'] = 0x2;
        if (n4b2gp[_[115]](_[31309]) != -0x1) {
            if (wlp[_[9053]] >= 0x18) window['p$R5']['p$2_RV5'] = 0x3;else window['p$R5']['p$2_RV5'] = 0x2;
        } else {
            if (n4b2gp[_[115]](_[31821]) != -0x1) {
                if (wlp[_[9053]] && wlp[_[9053]] >= 0x14) window['p$R5']['p$2_RV5'] = 0x3;else {
                    if (f9r$03[_[115]](_[31826]) != -0x1 || f9r$03[_[115]](_[31827]) != -0x1 || f9r$03[_[115]](_[31828]) != -0x1 || f9r$03[_[115]](_[31829]) != -0x1 || f9r$03[_[115]](_[31830]) != -0x1) window['p$R5']['p$2_RV5'] = 0x2;else window['p$R5']['p$2_RV5'] = 0x3;
                }
            } else window['p$R5']['p$2_RV5'] = 0x2;
        }
        console[_[488]](_[31831] + window['p$R5']['p$2_V5R'] + _[31832] + window['p$R5']['p$2_RV5']);
    }
}), wx[_[31833]]({
    'success': function (uyi5j) {
        console[_[488]](_[31834] + uyi5j[_[4232]] + _[31835] + uyi5j[_[31836]]);
    }
}), wx[_[11744]]({
    'success': function (fv$k39) {
        console[_[488]](_[31837] + fv$k39[_[13314]]);
    }
}), wx[_[31838]]({ 'keepScreenOn': !![] }), wx[_[11746]](function (wldsq) {
    console[_[488]](_[31837] + wldsq[_[13314]] + _[31839] + wldsq[_[31840]]);
}), wx[_[10678]](function (xma_v) {
    window['p$V_'] = xma_v, window['p$5_V'] && window['p$V_'] && (console[_[78]](_[31841] + window['p$V_'][_[818]]), window['p$5_V'](window['p$V_']), window['p$V_'] = null);
}), window[_[31842]] = 0x0, window['p$2RV5_'] = 0x0, window[_[31843]] = null, wx[_[31844]](function () {
    window['p$2RV5_']++;
    var h3r0zo = Date[_[83]]();
    (window[_[31842]] == 0x0 || h3r0zo - window[_[31842]] > 0x1d4c0) && (console[_[96]](_[31845]), wx[_[11930]]());
    if (window['p$2RV5_'] >= 0x2) {
        window['p$2RV5_'] = 0x0, console[_[125]](_[31846]), wx[_[31847]]('0', 0x1);
        if (window['p$R5'] && window['p$R5'][_[1117]]) window['p$R5_'](_[31848], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});