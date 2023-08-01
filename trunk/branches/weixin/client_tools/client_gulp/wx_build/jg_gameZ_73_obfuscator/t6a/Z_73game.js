var z1 = wx.Z$;
console[z1[82]](z1[38122]), window[z1[38123]], wx[z1[38124]](function (ghnf) {
    if (ghnf) {
        if (ghnf[z1[4759]]) {
            var ebj8q = window[z1[620]][z1[37811]][z1[4459]](new RegExp(/\./, 'g'), '_'),
                poaiv4 = ghnf[z1[4759]],
                bqjue8 = poaiv4[z1[13181]](/(gbnm\/Z_73game.js:)[0-9]{1,60}(:)/g);
            if (bqjue8) for (var ai_t = 0x0; ai_t < bqjue8[z1[13]]; ai_t++) {
                if (bqjue8[ai_t] && bqjue8[ai_t][z1[13]] > 0x0) {
                    var vpoi = parseInt(bqjue8[ai_t][z1[4459]](z1[38125], '')[z1[4459]](':', ''));
                    poaiv4 = poaiv4[z1[4459]](bqjue8[ai_t], bqjue8[ai_t][z1[4459]](':' + vpoi + ':', ':' + (vpoi - 0x2) + ':'));
                }
            }
            poaiv4 = poaiv4[z1[4459]](new RegExp(z1[38126], 'g'), z1[38127] + ebj8q + z1[28580]), poaiv4 = poaiv4[z1[4459]](new RegExp(z1[38128], 'g'), z1[38127] + ebj8q + z1[28580]), ghnf[z1[4759]] = poaiv4;
        }
        var jeq8s = {
            'id': window[z1[4757]][z1[37871]],
            'role': window[z1[4757]][z1[4890]],
            'level': window[z1[4757]][z1[37872]],
            'user': window[z1[4757]][z1[28474]],
            'version': window[z1[4757]][z1[110]],
            'cdn': window[z1[4757]][z1[4754]],
            'pkgName': window[z1[4757]][z1[28476]],
            'gamever': window[z1[620]][z1[37811]],
            'serverid': window[z1[4757]][z1[28470]] ? window[z1[4757]][z1[28470]][z1[12235]] : 0x0,
            'systemInfo': window[z1[37873]],
            'error': z1[38129],
            'stack': ghnf ? ghnf[z1[4759]] : ''
        },
            jq8se = JSON[z1[4740]](jeq8s);
        console[z1[144]](z1[38130] + jq8se), (!window[z1[38123]] || window[z1[38123]] != jeq8s[z1[144]]) && (window[z1[38123]] = jeq8s[z1[144]], window[z1[37834]](jeq8s));
    }
});
import 'oo14a.js';
import 'izo.js';
window[z1[38131]] = require(z1[38132]);
import 'gn.js';
import 'sbr69a.js';
import 'wouqv.js';
import 'fkf0a.js';
console[z1[82]](z1[38133]), console[z1[82]](z1[38134]), _sW5QO({ 'title': z1[38135] });
var _yy8s = { '_sDWO5Q': !![] };
new window[z1[37809]](_yy8s), window[z1[37809]][z1[167]][z1[37771]]();
if (window[z1[38136]]) clearInterval(window[z1[38136]]);
window[z1[38136]] = null, window[z1[37898]] = function (gmflt_, lmgt_f) {
    if (!gmflt_ || !lmgt_f) return 0x0;
    gmflt_ = gmflt_[z1[15]]('.'), lmgt_f = lmgt_f[z1[15]]('.');
    const ysdje6 = Math[z1[188]](gmflt_[z1[13]], lmgt_f[z1[13]]);
    while (gmflt_[z1[13]] < ysdje6) {
        gmflt_[z1[30]]('0');
    }
    while (lmgt_f[z1[13]] < ysdje6) {
        lmgt_f[z1[30]]('0');
    }
    for (var w90nz3 = 0x0; w90nz3 < ysdje6; w90nz3++) {
        const ydx712 = parseInt(gmflt_[w90nz3]),
              oa_ci = parseInt(lmgt_f[w90nz3]);
        if (ydx712 > oa_ci) return 0x1;else {
            if (ydx712 < oa_ci) return -0x1;
        }
    }
    return 0x0;
}, window[z1[38019]] = wx[z1[38137]]()[z1[38019]], console[z1[544]](z1[38138] + window[z1[38019]]);
var _ymkhglf = wx[z1[38139]]();
_ymkhglf[z1[38140]](function (qse8) {
    console[z1[544]](z1[38141] + qse8[z1[38142]]);
}), _ymkhglf[z1[38143]](function () {
    wx[z1[37847]]({
        'title': z1[38144],
        'content': z1[38145],
        'showCancel': ![],
        'success': function (cptai_) {
            _ymkhglf[z1[38146]]();
        }
    });
}), _ymkhglf[z1[38147]](function () {
    console[z1[544]](z1[38148]);
}), window[z1[38149]] = function () {
    console[z1[544]](z1[38150]);
    var zwr$0 = wx[z1[38151]]({
        'name': z1[38152],
        'success': function (xy71) {
            console[z1[544]](z1[38153]), console[z1[544]](xy71), xy71 && xy71[z1[28089]] == z1[38154] ? (window[z1[37841]] = !![], window[z1[37774]](), window[z1[37775]]()) : setTimeout(function () {
                window[z1[38149]]();
            }, 0x1f4);
        },
        'fail': function (n09z3) {
            console[z1[544]](z1[38155]), console[z1[544]](n09z3), setTimeout(function () {
                window[z1[38149]]();
            }, 0x1f4);
        }
    });
    zwr$0 && zwr$0[z1[36791]](a4ip => {});
}, window[z1[38156]] = function () {
    console[z1[544]](z1[38157]);
    var xyds1 = wx[z1[38151]]({
        'name': z1[38158],
        'success': function (qe8j6b) {
            console[z1[544]](z1[38159]), console[z1[544]](qe8j6b), qe8j6b && qe8j6b[z1[28089]] == z1[38154] ? (window[z1[37842]] = !![], window[z1[37774]](), window[z1[37775]]()) : setTimeout(function () {
                window[z1[38156]]();
            }, 0x1f4);
        },
        'fail': function (z5k9n3) {
            console[z1[544]](z1[38160]), console[z1[544]](z5k9n3), setTimeout(function () {
                window[z1[38156]]();
            }, 0x1f4);
        }
    });
    xyds1 && xyds1[z1[36791]](mlt_gf => {});
}, window[z1[38161]] = function () {
    window[z1[37898]](window[z1[38019]], z1[38162]) >= 0x0 ? (console[z1[544]](z1[38163] + window[z1[38019]] + z1[38164]), window[z1[37854]](), window[z1[38149]](), window[z1[38156]]()) : (window[z1[37881]](z1[38165], window[z1[38019]]), wx[z1[37847]]({
        'title': z1[6350],
        'content': z1[38166]
    }));
}, window[z1[37873]] = '', wx[z1[38167]]({
    'success'(r0$1w) {
        window[z1[37873]] = z1[38168] + r0$1w[z1[38169]] + z1[38170] + r0$1w[z1[38171]] + z1[38172] + r0$1w[z1[5591]] + z1[38173] + r0$1w[z1[537]] + z1[38174] + r0$1w[z1[28428]] + z1[38175] + r0$1w[z1[38019]] + z1[38176] + r0$1w[z1[9882]], console[z1[544]](window[z1[37873]]), console[z1[544]](z1[38177] + r0$1w[z1[32610]] + z1[38178] + r0$1w[z1[38179]] + z1[38180] + r0$1w[z1[38181]] + z1[38182] + r0$1w[z1[38183]] + z1[38184] + r0$1w[z1[38185]] + z1[38186] + r0$1w[z1[38187]] + z1[38188] + (r0$1w[z1[38189]] ? r0$1w[z1[38189]][z1[374]] + ',' + r0$1w[z1[38189]][z1[1465]] + ',' + r0$1w[z1[38189]][z1[1467]] + ',' + r0$1w[z1[38189]][z1[1466]] : ''));
        var nkg95 = r0$1w[z1[537]] ? r0$1w[z1[537]][z1[13504]]() : '',
            x27d1y = r0$1w[z1[38171]] ? r0$1w[z1[38171]][z1[13504]]()[z1[4459]]('\x20', '') : '';
        window[z1[4757]][z1[1190]] = nkg95[z1[125]](z1[38190]) != -0x1, window[z1[4757]][z1[12059]] = nkg95[z1[125]](z1[37485]) != -0x1, window[z1[4757]][z1[38107]] = nkg95[z1[125]](z1[38190]) != -0x1 || nkg95[z1[125]](z1[37485]) != -0x1, window[z1[4757]][z1[28101]] = nkg95[z1[125]](z1[37486]) != -0x1 || nkg95[z1[125]](z1[37821]) != -0x1, window[z1[4757]][z1[37883]] = r0$1w[z1[28428]] ? r0$1w[z1[28428]][z1[13504]]() : '', window[z1[4757]][z1[38102]] = ![], window[z1[4757]][z1[38103]] = 0x2;
        if (nkg95[z1[125]](z1[37485]) != -0x1) {
            if (r0$1w[z1[9882]] >= 0x18) window[z1[4757]][z1[38103]] = 0x3;else window[z1[4757]][z1[38103]] = 0x2;
        } else {
            if (nkg95[z1[125]](z1[38190]) != -0x1) {
                if (r0$1w[z1[9882]] && r0$1w[z1[9882]] >= 0x14) window[z1[4757]][z1[38103]] = 0x3;else {
                    if (x27d1y[z1[125]](z1[38191]) != -0x1 || x27d1y[z1[125]](z1[38192]) != -0x1 || x27d1y[z1[125]](z1[38193]) != -0x1 || x27d1y[z1[125]](z1[38194]) != -0x1 || x27d1y[z1[125]](z1[38195]) != -0x1) window[z1[4757]][z1[38103]] = 0x2;else window[z1[4757]][z1[38103]] = 0x3;
                }
            } else window[z1[4757]][z1[38103]] = 0x2;
        }
        console[z1[544]](z1[38196] + window[z1[4757]][z1[38102]] + z1[38197] + window[z1[4757]][z1[38103]]);
    }
}), wx[z1[38038]]({
    'success': function (coai) {
        console[z1[544]](z1[38198] + coai[z1[4866]] + z1[38199] + coai[z1[38040]]);
    }
}), wx[z1[12620]]({
    'success': function (hkf5ng) {
        console[z1[544]](z1[38200] + hkf5ng[z1[14673]]);
    }
}), wx[z1[38201]]({ 'keepScreenOn': !![] }), wx[z1[12622]](function (r$x) {
    console[z1[544]](z1[38200] + r$x[z1[14673]] + z1[38202] + r$x[z1[38203]]);
}), wx[z1[11548]](function (vi4a) {
    window[z1[38013]] = vi4a, window[z1[38012]] && window[z1[38013]] && (console[z1[82]](z1[38014] + window[z1[38013]][z1[888]]), window[z1[38012]](window[z1[38013]]), window[z1[38013]] = null);
}), window[z1[38204]] = 0x0, window[z1[38205]] = 0x0, window[z1[38206]] = null, wx[z1[38207]](function () {
    window[z1[38205]]++;
    var p4oaic = Date[z1[87]]();
    (window[z1[38204]] == 0x0 || p4oaic - window[z1[38204]] > 0x1d4c0) && (console[z1[103]](z1[38208]), wx[z1[13014]]());
    if (window[z1[38205]] >= 0x2) {
        window[z1[38205]] = 0x0, console[z1[144]](z1[38209]), wx[z1[38210]]('0', 0x1);
        if (window[z1[4757]] && window[z1[4757]][z1[1190]]) window[z1[37881]](z1[38211], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});