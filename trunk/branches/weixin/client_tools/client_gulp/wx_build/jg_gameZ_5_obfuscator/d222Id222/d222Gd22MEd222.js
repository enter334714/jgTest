var F = wx.$D;
console[F[560000]](F[560001]), window[F[560002]], wx[F[560003]](function (jga6x) {
    if (jga6x) {
        if (jga6x[F[560004]]) {
            var vtkwq = window[F[560005]][F[560006]][F[560007]](new RegExp(/\./, 'g'), '_'),
                vkwtqs = jga6x[F[560004]],
                riz_2h = vkwtqs[F[560008]](/(d22d22d22d22d22\/d222Gd22MEd222.js:)[0-9]{1,60}(:)/g);
            if (riz_2h) for (var lmo5ag = 0x0; lmo5ag < riz_2h[F[560009]]; lmo5ag++) {
                if (riz_2h[lmo5ag] && riz_2h[lmo5ag][F[560009]] > 0x0) {
                    var e0stqv = parseInt(riz_2h[lmo5ag][F[560007]](F[560010], '')[F[560007]](':', ''));
                    vkwtqs = vkwtqs[F[560007]](riz_2h[lmo5ag], riz_2h[lmo5ag][F[560007]](':' + e0stqv + ':', ':' + (e0stqv - 0x2) + ':'));
                }
            }
            vkwtqs = vkwtqs[F[560007]](new RegExp(F[560011], 'g'), F[560012] + vtkwq + F[560013]), vkwtqs = vkwtqs[F[560007]](new RegExp(F[560014], 'g'), F[560012] + vtkwq + F[560013]), jga6x[F[560004]] = vkwtqs;
        }
        var zm_lio = {
            'id': window[F[560015]][F[560016]],
            'role': window[F[560015]][F[560017]],
            'level': window[F[560015]][F[560018]],
            'user': window[F[560015]][F[560019]],
            'version': window[F[560015]][F[560020]],
            'gamever': window[F[560005]][F[560006]],
            'cdn': window[F[560015]][F[560021]],
            'serverid': window[F[560015]][F[560022]] ? window[F[560015]][F[560022]][F[560023]] : 0x0,
            'systemInfo': window[F[560024]],
            'error': F[560025],
            'stack': jga6x ? jga6x[F[560004]] : ''
        },
            g5aom = JSON[F[560026]](zm_lio);
        console[F[560027]](F[560028] + g5aom), (!window[F[560002]] || window[F[560002]] != zm_lio[F[560027]]) && (window[F[560002]] = zm_lio[F[560027]], window[F[560029]](zm_lio));
    }
});
import 'd22d22bfd22d22.js';
import 'd22d2211d22d22.js';
window[F[560030]] = require(F[560031]);
import 'd22INDd22d22.js';
import 'd22d22Id221d22d22.js';
import 'd22d22Mtadd22d22.js';
import 'd22d22INId22ad22.js';
console[F[560000]](F[560032]), console[F[560000]](F[560033]), D1I2X4({ 'title': F[560034] });
var Dubpf3 = { 'D1WI42X': !![] };
new window[F[560035]](Dubpf3), window[F[560035]][F[560036]][F[560037]]();
if (window[F[560038]]) clearInterval(window[F[560038]]);
window[F[560038]] = null, window[F[560039]] = function (am5log, rzi2h) {
    if (!am5log || !rzi2h) return 0x0;
    am5log = am5log[F[560040]]('.'), rzi2h = rzi2h[F[560040]]('.');
    const qtsv0 = Math[F[560041]](am5log[F[560009]], rzi2h[F[560009]]);
    while (am5log[F[560009]] < qtsv0) {
        am5log[F[560042]]('0');
    }
    while (rzi2h[F[560009]] < qtsv0) {
        rzi2h[F[560042]]('0');
    }
    for (var irzh_2 = 0x0; irzh_2 < qtsv0; irzh_2++) {
        const irz = parseInt(am5log[irzh_2]),
              n1hz2 = parseInt(rzi2h[irzh_2]);
        if (irz > n1hz2) return 0x1;else {
            if (irz < n1hz2) return -0x1;
        }
    }
    return 0x0;
}, window[F[560043]] = wx[F[560044]]()[F[560043]], console[F[560045]](F[560046] + window[F[560043]]);
var Drz_i2l = wx[F[560047]]();
Drz_i2l[F[560048]](function (lioz) {
    console[F[560045]](F[560049] + lioz[F[560050]]);
}), Drz_i2l[F[560051]](function () {
    wx[F[560052]]({
        'title': F[560053],
        'content': F[560054],
        'showCancel': ![],
        'success': function (wq6xvk) {
            Drz_i2l[F[560055]]();
        }
    });
}), Drz_i2l[F[560056]](function () {
    console[F[560045]](F[560057]);
}), window[F[560058]] = function () {
    console[F[560045]](F[560059]);
    var ozmi_l = wx[F[560060]]({
        'name': F[560061],
        'success': function (ve0tc) {
            console[F[560045]](F[560062]), console[F[560045]](ve0tc), ve0tc && ve0tc[F[560063]] == F[560064] ? (window[F[560065]] = !![], window[F[560066]](), window[F[560067]]()) : setTimeout(function () {
                window[F[560058]]();
            }, 0x1f4);
        },
        'fail': function (m_lgo) {
            console[F[560045]](F[560068]), console[F[560045]](m_lgo), setTimeout(function () {
                window[F[560058]]();
            }, 0x1f4);
        }
    });
    ozmi_l && ozmi_l[F[560069]](mio => {});
}, window[F[560070]] = function () {
    console[F[560045]](F[560071]);
    var kvxw6q = wx[F[560060]]({
        'name': F[560072],
        'success': function (_irhz2) {
            console[F[560045]](F[560073]), console[F[560045]](_irhz2), _irhz2 && _irhz2[F[560063]] == F[560064] ? (window[F[560074]] = !![], window[F[560066]](), window[F[560067]]()) : setTimeout(function () {
                window[F[560070]]();
            }, 0x1f4);
        },
        'fail': function (oag5jm) {
            console[F[560045]](F[560075]), console[F[560045]](oag5jm), setTimeout(function () {
                window[F[560070]]();
            }, 0x1f4);
        }
    });
    kvxw6q && kvxw6q[F[560069]](r_zi2h => {});
}, window[F[560076]] = function () {
    window[F[560039]](window[F[560043]], F[560077]) >= 0x0 ? (console[F[560045]](F[560078] + window[F[560043]] + F[560079]), window[F[560080]](), window[F[560058]](), window[F[560070]]()) : (window[F[560081]](F[560082], window[F[560043]]), wx[F[560052]]({
        'title': F[560083],
        'content': F[560084]
    }));
}, window[F[560024]] = '', wx[F[560085]]({
    'success'(te0csv) {
        window[F[560024]] = F[560086] + te0csv[F[560087]] + F[560088] + te0csv[F[560089]] + F[560090] + te0csv[F[560091]] + F[560092] + te0csv[F[560093]] + F[560094] + te0csv[F[560095]] + F[560096] + te0csv[F[560043]] + F[560097] + te0csv[F[560098]], console[F[560045]](window[F[560024]]), console[F[560045]](F[560099] + te0csv[F[560100]] + F[560101] + te0csv[F[560102]] + F[560103] + te0csv[F[560104]] + F[560105] + te0csv[F[560106]] + F[560107] + te0csv[F[560108]] + F[560109] + te0csv[F[560110]] + F[560111] + (te0csv[F[560112]] ? te0csv[F[560112]][F[560113]] + ',' + te0csv[F[560112]][F[560114]] + ',' + te0csv[F[560112]][F[560115]] + ',' + te0csv[F[560112]][F[560116]] : ''));
        var j5ag6x = te0csv[F[560093]] ? te0csv[F[560093]][F[560117]]() : '',
            mgj5oa = te0csv[F[560089]] ? te0csv[F[560089]][F[560117]]()[F[560007]]('\x20', '') : '';
        window[F[560015]][F[560118]] = j5ag6x[F[560119]](F[560120]) != -0x1, window[F[560015]][F[560121]] = j5ag6x[F[560119]](F[560122]) != -0x1, window[F[560015]][F[560123]] = j5ag6x[F[560119]](F[560120]) != -0x1 || j5ag6x[F[560119]](F[560122]) != -0x1, window[F[560015]][F[560124]] = j5ag6x[F[560119]](F[560125]) != -0x1 || j5ag6x[F[560119]](F[560126]) != -0x1, window[F[560015]][F[560127]] = te0csv[F[560095]] ? te0csv[F[560095]][F[560117]]() : '', window[F[560015]][F[560128]] = ![], window[F[560015]][F[560129]] = 0x2;
        if (j5ag6x[F[560119]](F[560122]) != -0x1) {
            if (te0csv[F[560098]] >= 0x18) window[F[560015]][F[560129]] = 0x3;else window[F[560015]][F[560129]] = 0x2;
        } else {
            if (j5ag6x[F[560119]](F[560120]) != -0x1) {
                if (te0csv[F[560098]] && te0csv[F[560098]] >= 0x14) window[F[560015]][F[560129]] = 0x3;else {
                    if (mgj5oa[F[560119]](F[560130]) != -0x1 || mgj5oa[F[560119]](F[560131]) != -0x1 || mgj5oa[F[560119]](F[560132]) != -0x1 || mgj5oa[F[560119]](F[560133]) != -0x1 || mgj5oa[F[560119]](F[560134]) != -0x1) window[F[560015]][F[560129]] = 0x2;else window[F[560015]][F[560129]] = 0x3;
                }
            } else window[F[560015]][F[560129]] = 0x2;
        }
        console[F[560045]](F[560135] + window[F[560015]][F[560128]] + F[560136] + window[F[560015]][F[560129]]);
    }
}), wx[F[560137]]({
    'success': function (h8n1r2) {
        console[F[560045]](F[560138] + h8n1r2[F[560139]] + F[560140] + h8n1r2[F[560141]]);
    }
}), wx[F[560142]]({
    'success': function (vtqes) {
        console[F[560045]](F[560143] + vtqes[F[560144]]);
    }
}), wx[F[560145]]({ 'keepScreenOn': !![] }), wx[F[560146]](function (i_lz2) {
    console[F[560045]](F[560143] + i_lz2[F[560144]] + F[560147] + i_lz2[F[560148]]);
}), wx[F[560149]](function (ga5lmo) {
    window[F[560150]] = ga5lmo, window[F[560151]] && window[F[560150]] && (console[F[560000]](F[560152] + window[F[560150]][F[560153]]), window[F[560151]](window[F[560150]]), window[F[560150]] = null);
}), window[F[560154]] = 0x0, window[F[560155]] = null, wx[F[560156]](function () {
    window[F[560154]]++, wx[F[560157]]();
    if (window[F[560154]] >= 0x2) {
        window[F[560154]] = 0x0, console[F[560027]](F[560158]), wx[F[560159]]('0', 0x1);
        if (window[F[560015]] && window[F[560015]][F[560118]]) window[F[560081]](F[560160], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});