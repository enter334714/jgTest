var a = wx.$y;
console[a[626]](a[35093]), window[a[35094]], wx[a[35095]](function (n1j) {
    if (n1j) {
        if (n1j[a[342]]) {
            var b$oyc = window[a[1097]][a[35096]][a[472]](new RegExp(/\./, 'g'), '_'),
                jnfvx = n1j[a[342]],
                oy4cb = jnfvx[a[350]](/(a2a3a1\/a12game.js:)[0-9]{1,60}(:)/g);
            if (oy4cb) for (var dk8q = 0x0; dk8q < oy4cb[a[326]]; dk8q++) {
                if (oy4cb[dk8q] && oy4cb[dk8q][a[326]] > 0x0) {
                    var g_ewu4 = parseInt(oy4cb[dk8q][a[472]](a[35097], '')[a[472]](':', ''));
                    jnfvx = jnfvx[a[472]](oy4cb[dk8q], oy4cb[dk8q][a[472]](':' + g_ewu4 + ':', ':' + (g_ewu4 - 0x2) + ':'));
                }
            }
            jnfvx = jnfvx[a[472]](new RegExp(a[35098], 'g'), a[35099] + b$oyc + a[28118]), jnfvx = jnfvx[a[472]](new RegExp(a[35100], 'g'), a[35099] + b$oyc + a[28118]), n1j[a[342]] = jnfvx;
        }
        var b04yo = {
            'id': window[a[5036]][a[35101]],
            'role': window[a[5036]][a[5165]],
            'level': window[a[5036]][a[35102]],
            'user': window[a[5036]][a[28009]],
            'version': window[a[5036]][a[648]],
            'cdn': window[a[5036]][a[5033]],
            'pkgName': window[a[5036]][a[28011]],
            'gamever': window[a[1097]][a[35096]],
            'serverid': window[a[5036]][a[28005]] ? window[a[5036]][a[28005]][a[12403]] : 0x0,
            'systemInfo': window[a[35103]],
            'error': a[35104],
            'stack': n1j ? n1j[a[342]] : ''
        },
            dhkz6q = JSON[a[5019]](b04yo);
        console[a[510]](a[35105] + dhkz6q), (!window[a[35094]] || window[a[35094]] != b04yo[a[510]]) && (window[a[35094]] = b04yo[a[510]], window[a[35106]](b04yo));
    }
});
import 'a1md5min.js';
import 'ea1zlibs.js';
window[a[35107]] = require(a[35108]);
import 'a1index.js';
import 'a1ibsmin.js';
import 'a1wxmini.js';
import 'a1initmin.js';
console[a[626]](a[35109]), console[a[626]](a[35110]), jM1BE({ 'title': a[35111] });
var gu2e_w = { 'j6ME1B': !![] };
new window[a[35112]](gu2e_w), window[a[35112]][a[694]][a[35113]]();
if (window[a[35114]]) clearInterval(window[a[35114]]);
window[a[35114]] = null, window[a[35115]] = function (nzkh, rt7583) {
    if (!nzkh || !rt7583) return 0x0;
    nzkh = nzkh[a[449]]('.'), rt7583 = rt7583[a[449]]('.');
    const gweu2_ = Math[a[501]](nzkh[a[326]], rt7583[a[326]]);
    while (nzkh[a[326]] < gweu2_) {
        nzkh[a[349]]('0');
    }
    while (rt7583[a[326]] < gweu2_) {
        rt7583[a[349]]('0');
    }
    for (var kdh6zv = 0x0; kdh6zv < gweu2_; kdh6zv++) {
        const z8q6k = parseInt(nzkh[kdh6zv]),
              uew4 = parseInt(rt7583[kdh6zv]);
        if (z8q6k > uew4) return 0x1;else {
            if (z8q6k < uew4) return -0x1;
        }
    }
    return 0x0;
}, window[a[35116]] = wx[a[35117]]()[a[35116]], console[a[462]](a[35118] + window[a[35116]]);
var gycbo4 = wx[a[35119]]();
gycbo4[a[35120]](function (x2jsf) {
    console[a[462]](a[35121] + x2jsf[a[35122]]);
}), gycbo4[a[35123]](function () {
    wx[a[35124]]({
        'title': a[35125],
        'content': a[35126],
        'showCancel': ![],
        'success': function (e4ou_) {
            gycbo4[a[35127]]();
        }
    });
}), gycbo4[a[35128]](function () {
    console[a[462]](a[35129]);
}), window[a[35130]] = function () {
    console[a[462]](a[35131]);
    var zsvhn = wx[a[35132]]({
        'name': a[35133],
        'success': function (jfnvs) {
            console[a[462]](a[35134]), console[a[462]](jfnvs), jfnvs && jfnvs[a[28218]] == a[35135] ? (window[a[35136]] = !![], window[a[35137]](), window[a[35138]]()) : setTimeout(function () {
                window[a[35130]]();
            }, 0x1f4);
        },
        'fail': function (ow40e_) {
            console[a[462]](a[35139]), console[a[462]](ow40e_), setTimeout(function () {
                window[a[35130]]();
            }, 0x1f4);
        }
    });
    zsvhn && zsvhn[a[34795]](r37tp => {});
}, window[a[35140]] = function () {
    console[a[462]](a[35141]);
    var g2w1fu = wx[a[35132]]({
        'name': a[35142],
        'success': function (yc$0o) {
            console[a[462]](a[35143]), console[a[462]](yc$0o), yc$0o && yc$0o[a[28218]] == a[35135] ? (window[a[35144]] = !![], window[a[35137]](), window[a[35138]]()) : setTimeout(function () {
                window[a[35140]]();
            }, 0x1f4);
        },
        'fail': function (w4_e0o) {
            console[a[462]](a[35145]), console[a[462]](w4_e0o), setTimeout(function () {
                window[a[35140]]();
            }, 0x1f4);
        }
    });
    g2w1fu && g2w1fu[a[34795]](ybmc0$ => {});
}, window[a[35146]] = function () {
    window[a[35115]](window[a[35116]], a[35147]) >= 0x0 ? (console[a[462]](a[35148] + window[a[35116]] + a[35149]), window[a[35150]](), window[a[35130]](), window[a[35140]]()) : (window[a[35151]](a[35152], window[a[35116]]), wx[a[35124]]({
        'title': a[6614],
        'content': a[35153]
    }));
}, window[a[35103]] = '', wx[a[35154]]({
    'success'(s21fjx) {
        window[a[35103]] = a[35155] + s21fjx[a[35156]] + a[35157] + s21fjx[a[35158]] + a[35159] + s21fjx[a[5863]] + a[35160] + s21fjx[a[1019]] + a[35161] + s21fjx[a[27963]] + a[35162] + s21fjx[a[35116]] + a[35163] + s21fjx[a[10088]], console[a[462]](window[a[35103]]), console[a[462]](a[35164] + s21fjx[a[31567]] + a[35165] + s21fjx[a[35166]] + a[35167] + s21fjx[a[35168]] + a[35169] + s21fjx[a[35170]] + a[35171] + s21fjx[a[35172]] + a[35173] + s21fjx[a[35174]] + a[35175] + (s21fjx[a[35176]] ? s21fjx[a[35176]][a[861]] + ',' + s21fjx[a[35176]][a[1926]] + ',' + s21fjx[a[35176]][a[1928]] + ',' + s21fjx[a[35176]][a[1927]] : ''));
        var ab$mc = s21fjx[a[1019]] ? s21fjx[a[1019]][a[376]]() : '',
            ktd86 = s21fjx[a[35158]] ? s21fjx[a[35158]][a[376]]()[a[472]]('\x20', '') : '';
        window[a[5036]][a[1661]] = ab$mc[a[409]](a[35177]) != -0x1, window[a[5036]][a[12231]] = ab$mc[a[409]](a[35067]) != -0x1, window[a[5036]][a[35178]] = ab$mc[a[409]](a[35177]) != -0x1 || ab$mc[a[409]](a[35067]) != -0x1, window[a[5036]][a[27655]] = ab$mc[a[409]](a[35179]) != -0x1 || ab$mc[a[409]](a[35180]) != -0x1, window[a[5036]][a[35181]] = s21fjx[a[27963]] ? s21fjx[a[27963]][a[376]]() : '', window[a[5036]][a[35182]] = ![], window[a[5036]][a[35183]] = 0x2;
        if (ab$mc[a[409]](a[35067]) != -0x1) {
            if (s21fjx[a[10088]] >= 0x18) window[a[5036]][a[35183]] = 0x3;else window[a[5036]][a[35183]] = 0x2;
        } else {
            if (ab$mc[a[409]](a[35177]) != -0x1) {
                if (s21fjx[a[10088]] && s21fjx[a[10088]] >= 0x14) window[a[5036]][a[35183]] = 0x3;else {
                    if (ktd86[a[409]](a[35184]) != -0x1 || ktd86[a[409]](a[35185]) != -0x1 || ktd86[a[409]](a[35186]) != -0x1 || ktd86[a[409]](a[35187]) != -0x1 || ktd86[a[409]](a[35188]) != -0x1) window[a[5036]][a[35183]] = 0x2;else window[a[5036]][a[35183]] = 0x3;
                }
            } else window[a[5036]][a[35183]] = 0x2;
        }
        console[a[462]](a[35189] + window[a[5036]][a[35182]] + a[35190] + window[a[5036]][a[35183]]);
    }
}), wx[a[35191]]({
    'success': function (uwf) {
        console[a[462]](a[35192] + uwf[a[5141]] + a[35193] + uwf[a[35194]]);
    }
}), wx[a[12784]]({
    'success': function (o0ycb$) {
        console[a[462]](a[35195] + o0ycb$[a[14605]]);
    }
}), wx[a[35196]]({ 'keepScreenOn': !![] }), wx[a[12786]](function (vjkzhn) {
    console[a[462]](a[35195] + vjkzhn[a[14605]] + a[35197] + vjkzhn[a[35198]]);
}), wx[a[11723]](function (co0b$) {
    window[a[35199]] = co0b$, window[a[35200]] && window[a[35199]] && (console[a[626]](a[35201] + window[a[35199]][a[1364]]), window[a[35200]](window[a[35199]]), window[a[35199]] = null);
}), window[a[35202]] = 0x0, window[a[35203]] = 0x0, window[a[35204]] = null, wx[a[35205]](function () {
    window[a[35203]]++;
    var we12ug = Date[a[631]]();
    (window[a[35202]] == 0x0 || we12ug - window[a[35202]] > 0x1d4c0) && (console[a[526]](a[35206]), wx[a[13048]]());
    if (window[a[35203]] >= 0x2) {
        window[a[35203]] = 0x0, console[a[510]](a[35207]), wx[a[35208]]('0', 0x1);
        if (window[a[5036]] && window[a[5036]][a[1661]]) window[a[35151]](a[35209], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});