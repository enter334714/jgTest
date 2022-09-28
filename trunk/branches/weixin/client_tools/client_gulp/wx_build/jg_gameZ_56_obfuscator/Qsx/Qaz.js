var u = wx.$x;
console[u[0x429]](u[0x42a]), window[u[0x42b]], wx[u[0x42c]](function (iae14) {
    if (iae14) {
        if (iae14[u[0xa3]]) {
            var obqjl = window[u[0x42d]][u[0x42e]][u[0x15d]](new RegExp(/\./, 'g'), '_'),
                en4ih = iae14[u[0xa3]],
                o_blq8 = en4ih[u[0xae]](/(Qfv\/Qaz.js:)[0-9]{1,60}(:)/g);
            if (o_blq8) for (var _r8u = 0x0; _r8u < o_blq8[u[0x8a]]; _r8u++) {
                if (o_blq8[_r8u] && o_blq8[_r8u][u[0x8a]] > 0x0) {
                    var mct5g = parseInt(o_blq8[_r8u][u[0x15d]](u[0x42f], '')[u[0x15d]](':', ''));
                    en4ih = en4ih[u[0x15d]](o_blq8[_r8u], o_blq8[_r8u][u[0x15d]](':' + mct5g + ':', ':' + (mct5g - 0x2) + ':'));
                }
            }
            en4ih = en4ih[u[0x15d]](new RegExp(u[0x430], 'g'), u[0x431] + obqjl + u[0x432]), en4ih = en4ih[u[0x15d]](new RegExp(u[0x433], 'g'), u[0x431] + obqjl + u[0x432]), iae14[u[0xa3]] = en4ih;
        }
        var w$7sp0 = {
            'id': window[u[0x434]][u[0x435]],
            'role': window[u[0x434]][u[0x436]],
            'level': window[u[0x434]][u[0x437]],
            'user': window[u[0x434]][u[0x438]],
            'version': window[u[0x434]][u[0x439]],
            'cdn': window[u[0x434]][u[0x43a]],
            'pkgName': window[u[0x434]][u[0x43b]],
            'gamever': window[u[0x42d]][u[0x42e]],
            'serverid': window[u[0x434]][u[0x43c]] ? window[u[0x434]][u[0x43c]][u[0x4e]] : 0x0,
            'systemInfo': window[u[0x43d]],
            'error': u[0x43e],
            'stack': iae14 ? iae14[u[0xa3]] : ''
        },
            lbo = JSON[u[0x43f]](w$7sp0);
        console[u[0x1b7]](u[0x440] + lbo), (!window[u[0x42b]] || window[u[0x42b]] != w$7sp0[u[0x1b7]]) && (window[u[0x42b]] = w$7sp0[u[0x1b7]], window[u[0x441]](w$7sp0));
    }
});
import 'Qwei.js';
import 'Qasd.js';
window[u[0x442]] = require(u[0x443]);
import 'Qhn.js';
import 'Qweu.js';
import 'Qwey.js';
import 'Qjm.js';
console[u[0x429]](u[0x444]), console[u[0x429]](u[0x445]), x1402Q({ 'title': u[0x446] });
var xih9e = { 'x1O4Q02': !![] };
new window[u[0x447]](xih9e), window[u[0x447]][u[0x448]][u[0x449]]();
if (window[u[0x44a]]) clearInterval(window[u[0x44a]]);
window[u[0x44a]] = null, window[u[0x44b]] = function (p60$m, rxzgk) {
    if (!p60$m || !rxzgk) return 0x0;
    p60$m = p60$m[u[0x133]]('.'), rxzgk = rxzgk[u[0x133]]('.');
    const yv1 = Math[u[0x197]](p60$m[u[0x8a]], rxzgk[u[0x8a]]);
    while (p60$m[u[0x8a]] < yv1) {
        p60$m[u[0xad]]('0');
    }
    while (rxzgk[u[0x8a]] < yv1) {
        rxzgk[u[0xad]]('0');
    }
    for (var hie19 = 0x0; hie19 < yv1; hie19++) {
        const dev1ay = parseInt(p60$m[hie19]),
              fz3kru = parseInt(rxzgk[hie19]);
        if (dev1ay > fz3kru) return 0x1;else {
            if (dev1ay < fz3kru) return -0x1;
        }
    }
    return 0x0;
}, window[u[0x44c]] = wx[u[0x44d]]()[u[0x44c]], console[u[0x14b]](u[0x44e] + window[u[0x44c]]);
var xsywd7 = wx[u[0x44f]]();
xsywd7[u[0x450]](function (e9h1i4) {
    console[u[0x14b]](u[0x451] + e9h1i4[u[0x452]]);
}), xsywd7[u[0x453]](function () {
    wx[u[0x454]]({
        'title': u[0x455],
        'content': u[0x456],
        'showCancel': ![],
        'success': function (cx5z3) {
            xsywd7[u[0x457]]();
        }
    });
}), xsywd7[u[0x458]](function () {
    console[u[0x14b]](u[0x459]);
}), window[u[0x45a]] = function () {
    console[u[0x14b]](u[0x45b]);
    var tc6m5g = wx[u[0x45c]]({
        'name': u[0x45d],
        'success': function (ady1v7) {
            console[u[0x14b]](u[0x45e]), console[u[0x14b]](ady1v7), ady1v7 && ady1v7[u[0x45f]] == u[0x460] ? (window[u[0x461]] = !![], window[u[0x462]](), window[u[0x463]]()) : setTimeout(function () {
                window[u[0x45a]]();
            }, 0x1f4);
        },
        'fail': function (pws6$0) {
            console[u[0x14b]](u[0x464]), console[u[0x14b]](pws6$0), setTimeout(function () {
                window[u[0x45a]]();
            }, 0x1f4);
        }
    });
    tc6m5g && tc6m5g[u[0x465]](f_8ru2 => {});
}, window[u[0x466]] = function () {
    console[u[0x14b]](u[0x467]);
    var xc35gz = wx[u[0x45c]]({
        'name': u[0x468],
        'success': function (eavd1) {
            console[u[0x14b]](u[0x469]), console[u[0x14b]](eavd1), eavd1 && eavd1[u[0x45f]] == u[0x460] ? (window[u[0x46a]] = !![], window[u[0x462]](), window[u[0x463]]()) : setTimeout(function () {
                window[u[0x466]]();
            }, 0x1f4);
        },
        'fail': function (yw7da) {
            console[u[0x14b]](u[0x46b]), console[u[0x14b]](yw7da), setTimeout(function () {
                window[u[0x466]]();
            }, 0x1f4);
        }
    });
    xc35gz && xc35gz[u[0x465]](kzxf => {});
}, window[u[0x46c]] = function () {
    window[u[0x44b]](window[u[0x44c]], u[0x46d]) >= 0x0 ? (console[u[0x14b]](u[0x46e] + window[u[0x44c]] + u[0x46f]), window[u[0x470]](), window[u[0x45a]](), window[u[0x466]]()) : (window[u[0x471]](u[0x472], window[u[0x44c]]), wx[u[0x454]]({
        'title': u[0x473],
        'content': u[0x474]
    }));
}, window[u[0x43d]] = '', wx[u[0x475]]({
    'success'(qob8jl) {
        window[u[0x43d]] = u[0x476] + qob8jl[u[0x477]] + u[0x478] + qob8jl[u[0x479]] + u[0x47a] + qob8jl[u[0x47b]] + u[0x47c] + qob8jl[u[0x47d]] + u[0x47e] + qob8jl[u[0x47f]] + u[0x480] + qob8jl[u[0x44c]] + u[0x481] + qob8jl[u[0x482]], console[u[0x14b]](window[u[0x43d]]), console[u[0x14b]](u[0x483] + qob8jl[u[0x484]] + u[0x485] + qob8jl[u[0x486]] + u[0x487] + qob8jl[u[0x488]] + u[0x489] + qob8jl[u[0x48a]] + u[0x48b] + qob8jl[u[0x48c]] + u[0x48d] + qob8jl[u[0x48e]] + u[0x48f] + (qob8jl[u[0x490]] ? qob8jl[u[0x490]][u[0x491]] + ',' + qob8jl[u[0x490]][u[0x492]] + ',' + qob8jl[u[0x490]][u[0x493]] + ',' + qob8jl[u[0x490]][u[0x494]] : ''));
        var xk3zrf = qob8jl[u[0x47d]] ? qob8jl[u[0x47d]][u[0xd2]]() : '',
            czg3xk = qob8jl[u[0x479]] ? qob8jl[u[0x479]][u[0xd2]]()[u[0x15d]]('\x20', '') : '';
        window[u[0x434]][u[0x495]] = xk3zrf[u[0xfc]](u[0x496]) != -0x1, window[u[0x434]][u[0x497]] = xk3zrf[u[0xfc]](u[0x58]) != -0x1, window[u[0x434]][u[0x498]] = xk3zrf[u[0xfc]](u[0x496]) != -0x1 || xk3zrf[u[0xfc]](u[0x58]) != -0x1, window[u[0x434]][u[0x499]] = xk3zrf[u[0xfc]](u[0x49a]) != -0x1 || xk3zrf[u[0xfc]](u[0x49b]) != -0x1, window[u[0x434]][u[0x49c]] = qob8jl[u[0x47f]] ? qob8jl[u[0x47f]][u[0xd2]]() : '', window[u[0x434]][u[0x49d]] = ![], window[u[0x434]][u[0x49e]] = 0x2;
        if (xk3zrf[u[0xfc]](u[0x58]) != -0x1) {
            if (qob8jl[u[0x482]] >= 0x18) window[u[0x434]][u[0x49e]] = 0x3;else window[u[0x434]][u[0x49e]] = 0x2;
        } else {
            if (xk3zrf[u[0xfc]](u[0x496]) != -0x1) {
                if (qob8jl[u[0x482]] && qob8jl[u[0x482]] >= 0x14) window[u[0x434]][u[0x49e]] = 0x3;else {
                    if (czg3xk[u[0xfc]](u[0x49f]) != -0x1 || czg3xk[u[0xfc]](u[0x4a0]) != -0x1 || czg3xk[u[0xfc]](u[0x4a1]) != -0x1 || czg3xk[u[0xfc]](u[0x4a2]) != -0x1 || czg3xk[u[0xfc]](u[0x4a3]) != -0x1) window[u[0x434]][u[0x49e]] = 0x2;else window[u[0x434]][u[0x49e]] = 0x3;
                }
            } else window[u[0x434]][u[0x49e]] = 0x2;
        }
        console[u[0x14b]](u[0x4a4] + window[u[0x434]][u[0x49d]] + u[0x4a5] + window[u[0x434]][u[0x49e]]);
    }
}), wx[u[0x4a6]]({
    'success': function (ayw7d) {
        console[u[0x14b]](u[0x4a7] + ayw7d[u[0x4a8]] + u[0x4a9] + ayw7d[u[0x4aa]]);
    }
}), wx[u[0x4ab]]({
    'success': function (zg) {
        console[u[0x14b]](u[0x4ac] + zg[u[0x4ad]]);
    }
}), wx[u[0x4ae]]({ 'keepScreenOn': !![] }), wx[u[0x4af]](function (h19ie4) {
    console[u[0x14b]](u[0x4ac] + h19ie4[u[0x4ad]] + u[0x4b0] + h19ie4[u[0x4b1]]);
}), wx[u[0x4b2]](function (s0pw7) {
    window[u[0x4b3]] = s0pw7, window[u[0x4b4]] && window[u[0x4b3]] && (console[u[0x429]](u[0x4b5] + window[u[0x4b3]][u[0x4b6]]), window[u[0x4b4]](window[u[0x4b3]]), window[u[0x4b3]] = null);
}), window[u[0x4b7]] = 0x0, window[u[0x4b8]] = 0x0, window[u[0x4b9]] = null, wx[u[0x4ba]](function () {
    window[u[0x4b8]]++;
    var z3krg = Date[u[0x4bb]]();
    (window[u[0x4b7]] == 0x0 || z3krg - window[u[0x4b7]] > 0x1d4c0) && (console[u[0x1e9]](u[0x4bc]), wx[u[0x4bd]]());
    if (window[u[0x4b8]] >= 0x2) {
        window[u[0x4b8]] = 0x0, console[u[0x1b7]](u[0x4be]), wx[u[0x4bf]]('0', 0x1);
        if (window[u[0x434]] && window[u[0x434]][u[0x495]]) window[u[0x471]](u[0x4c0], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});