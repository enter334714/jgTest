var c = wx.$a;
console[c[611]](c[35059]), window[c[35060]], wx[c[35061]](function (hkz6v) {
    if (hkz6v) {
        if (hkz6v[c[338]]) {
            var abmcl = window[c[1082]][c[35062]][c[466]](new RegExp(/\./, 'g'), '_'),
                uo4_ = hkz6v[c[338]],
                o_4y = uo4_[c[345]](/(a2a3a1\/a12game.js:)[0-9]{1,60}(:)/g);
            if (o_4y) for (var w0_e = 0x0; w0_e < o_4y[c[322]]; w0_e++) {
                if (o_4y[w0_e] && o_4y[w0_e][c[322]] > 0x0) {
                    var t8qd = parseInt(o_4y[w0_e][c[466]](c[35063], '')[c[466]](':', ''));
                    uo4_ = uo4_[c[466]](o_4y[w0_e], o_4y[w0_e][c[466]](':' + t8qd + ':', ':' + (t8qd - 0x2) + ':'));
                }
            }
            uo4_ = uo4_[c[466]](new RegExp(c[35064], 'g'), c[35065] + abmcl + c[28105]), uo4_ = uo4_[c[466]](new RegExp(c[35066], 'g'), c[35065] + abmcl + c[28105]), hkz6v[c[338]] = uo4_;
        }
        var vnkhzj = {
            'id': window[c[5021]][c[35067]],
            'role': window[c[5021]][c[5150]],
            'level': window[c[5021]][c[35068]],
            'user': window[c[5021]][c[27996]],
            'version': window[c[5021]][c[633]],
            'cdn': window[c[5021]][c[5018]],
            'pkgName': window[c[5021]][c[27998]],
            'gamever': window[c[1082]][c[35062]],
            'serverid': window[c[5021]][c[27992]] ? window[c[5021]][c[27992]][c[12390]] : 0x0,
            'systemInfo': window[c[35069]],
            'error': c[35070],
            'stack': hkz6v ? hkz6v[c[338]] : ''
        },
            x21jf = JSON[c[5004]](vnkhzj);
        console[c[499]](c[35071] + x21jf), (!window[c[35060]] || window[c[35060]] != vnkhzj[c[499]]) && (window[c[35060]] = vnkhzj[c[499]], window[c[35072]](vnkhzj));
    }
});
import 'a1md5min.js';
import 'ea1zlibs.js';
window[c[35073]] = require(c[35074]);
import 'a1index.js';
import 'a1ibsmin.js';
import 'a1wxmini.js';
import 'a1initmin.js';
console[c[611]](c[35075]), console[c[611]](c[35076]), jM1BE({ 'title': c[35077] });
var gnvjfsx = { 'j6ME1B': !![] };
new window[c[35078]](gnvjfsx), window[c[35078]][c[679]][c[35079]]();
if (window[c[35080]]) clearInterval(window[c[35080]]);
window[c[35080]] = null, window[c[35081]] = function (al$cm, _wg4u) {
    if (!al$cm || !_wg4u) return 0x0;
    al$cm = al$cm[c[444]]('.'), _wg4u = _wg4u[c[444]]('.');
    const f2sg1x = Math[c[491]](al$cm[c[322]], _wg4u[c[322]]);
    while (al$cm[c[322]] < f2sg1x) {
        al$cm[c[344]]('0');
    }
    while (_wg4u[c[322]] < f2sg1x) {
        _wg4u[c[344]]('0');
    }
    for (var _4wgu = 0x0; _4wgu < f2sg1x; _4wgu++) {
        const o40_e = parseInt(al$cm[_4wgu]),
              ycblm = parseInt(_wg4u[_4wgu]);
        if (o40_e > ycblm) return 0x1;else {
            if (o40_e < ycblm) return -0x1;
        }
    }
    return 0x0;
}, window[c[35082]] = wx[c[35083]]()[c[35082]], console[c[456]](c[35084] + window[c[35082]]);
var goy_40 = wx[c[35085]]();
goy_40[c[35086]](function (hjxsv) {
    console[c[456]](c[35087] + hjxsv[c[35088]]);
}), goy_40[c[35089]](function () {
    wx[c[35090]]({
        'title': c[35091],
        'content': c[35092],
        'showCancel': ![],
        'success': function (bl$0) {
            goy_40[c[35093]]();
        }
    });
}), goy_40[c[35094]](function () {
    console[c[456]](c[35095]);
}), window[c[35096]] = function () {
    console[c[456]](c[35097]);
    var _0yoe4 = wx[c[35098]]({
        'name': c[35099],
        'success': function (oc4y0) {
            console[c[456]](c[35100]), console[c[456]](oc4y0), oc4y0 && oc4y0[c[28205]] == c[35101] ? (window[c[35102]] = !![], window[c[35103]](), window[c[35104]]()) : setTimeout(function () {
                window[c[35096]]();
            }, 0x1f4);
        },
        'fail': function (fvxs) {
            console[c[456]](c[35105]), console[c[456]](fvxs), setTimeout(function () {
                window[c[35096]]();
            }, 0x1f4);
        }
    });
    _0yoe4 && _0yoe4[c[34783]](d68r => {});
}, window[c[35106]] = function () {
    console[c[456]](c[35107]);
    var vzkhj = wx[c[35098]]({
        'name': c[35108],
        'success': function (blc$a) {
            console[c[456]](c[35109]), console[c[456]](blc$a), blc$a && blc$a[c[28205]] == c[35101] ? (window[c[35110]] = !![], window[c[35103]](), window[c[35104]]()) : setTimeout(function () {
                window[c[35106]]();
            }, 0x1f4);
        },
        'fail': function (nvkzh6) {
            console[c[456]](c[35111]), console[c[456]](nvkzh6), setTimeout(function () {
                window[c[35106]]();
            }, 0x1f4);
        }
    });
    vzkhj && vzkhj[c[34783]](gxfu21 => {});
}, window[c[35112]] = function () {
    window[c[35081]](window[c[35082]], c[35113]) >= 0x0 ? (console[c[456]](c[35114] + window[c[35082]] + c[35115]), window[c[35116]](), window[c[35096]](), window[c[35106]]()) : (window[c[35117]](c[35118], window[c[35082]]), wx[c[35090]]({
        'title': c[6599],
        'content': c[35119]
    }));
}, window[c[35069]] = '', wx[c[35120]]({
    'success'(q8rd5t) {
        window[c[35069]] = c[35121] + q8rd5t[c[35122]] + c[35123] + q8rd5t[c[35124]] + c[35125] + q8rd5t[c[5848]] + c[35126] + q8rd5t[c[1004]] + c[35127] + q8rd5t[c[27950]] + c[35128] + q8rd5t[c[35082]] + c[35129] + q8rd5t[c[10075]], console[c[456]](window[c[35069]]), console[c[456]](c[35130] + q8rd5t[c[31555]] + c[35131] + q8rd5t[c[35132]] + c[35133] + q8rd5t[c[35134]] + c[35135] + q8rd5t[c[35136]] + c[35137] + q8rd5t[c[35138]] + c[35139] + q8rd5t[c[35140]] + c[35141] + (q8rd5t[c[35142]] ? q8rd5t[c[35142]][c[846]] + ',' + q8rd5t[c[35142]][c[1911]] + ',' + q8rd5t[c[35142]][c[1913]] + ',' + q8rd5t[c[35142]][c[1912]] : ''));
        var $9blm = q8rd5t[c[1004]] ? q8rd5t[c[1004]][c[371]]() : '',
            fwu2g = q8rd5t[c[35124]] ? q8rd5t[c[35124]][c[371]]()[c[466]]('\x20', '') : '';
        window[c[5021]][c[1646]] = $9blm[c[404]](c[35143]) != -0x1, window[c[5021]][c[12218]] = $9blm[c[404]](c[35040]) != -0x1, window[c[5021]][c[35144]] = $9blm[c[404]](c[35143]) != -0x1 || $9blm[c[404]](c[35040]) != -0x1, window[c[5021]][c[27642]] = $9blm[c[404]](c[35145]) != -0x1 || $9blm[c[404]](c[35146]) != -0x1, window[c[5021]][c[35147]] = q8rd5t[c[27950]] ? q8rd5t[c[27950]][c[371]]() : '', window[c[5021]][c[35148]] = ![], window[c[5021]][c[35149]] = 0x2;
        if ($9blm[c[404]](c[35040]) != -0x1) {
            if (q8rd5t[c[10075]] >= 0x18) window[c[5021]][c[35149]] = 0x3;else window[c[5021]][c[35149]] = 0x2;
        } else {
            if ($9blm[c[404]](c[35143]) != -0x1) {
                if (q8rd5t[c[10075]] && q8rd5t[c[10075]] >= 0x14) window[c[5021]][c[35149]] = 0x3;else {
                    if (fwu2g[c[404]](c[35150]) != -0x1 || fwu2g[c[404]](c[35151]) != -0x1 || fwu2g[c[404]](c[35152]) != -0x1 || fwu2g[c[404]](c[35153]) != -0x1 || fwu2g[c[404]](c[35154]) != -0x1) window[c[5021]][c[35149]] = 0x2;else window[c[5021]][c[35149]] = 0x3;
                }
            } else window[c[5021]][c[35149]] = 0x2;
        }
        console[c[456]](c[35155] + window[c[5021]][c[35148]] + c[35156] + window[c[5021]][c[35149]]);
    }
}), wx[c[35157]]({
    'success': function (bla$cm) {
        console[c[456]](c[35158] + bla$cm[c[5126]] + c[35159] + bla$cm[c[35160]]);
    }
}), wx[c[12771]]({
    'success': function (owe40) {
        console[c[456]](c[35161] + owe40[c[14592]]);
    }
}), wx[c[35162]]({ 'keepScreenOn': !![] }), wx[c[12773]](function (k68tqd) {
    console[c[456]](c[35161] + k68tqd[c[14592]] + c[35163] + k68tqd[c[35164]]);
}), wx[c[11710]](function (hqzkd6) {
    window[c[35165]] = hqzkd6, window[c[35166]] && window[c[35165]] && (console[c[611]](c[35167] + window[c[35165]][c[1349]]), window[c[35166]](window[c[35165]]), window[c[35165]] = null);
}), window[c[35168]] = 0x0, window[c[35169]] = 0x0, window[c[35170]] = null, wx[c[35171]](function () {
    window[c[35169]]++;
    var vkzhd6 = Date[c[616]]();
    (window[c[35168]] == 0x0 || vkzhd6 - window[c[35168]] > 0x1d4c0) && (console[c[513]](c[35172]), wx[c[13035]]());
    if (window[c[35169]] >= 0x2) {
        window[c[35169]] = 0x0, console[c[499]](c[35173]), wx[c[35174]]('0', 0x1);
        if (window[c[5021]] && window[c[5021]][c[1646]]) window[c[35117]](c[35175], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});