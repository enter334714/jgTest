var s1 = wx.l$;
console[s1[567]](s1[887]), window[s1[888]], wx[s1[889]](function (fpzu) {
    if (fpzu) {
        if (fpzu[s1[890]]) {
            var flp5z = window[s1[495]][s1[496]][s1[326]](new RegExp(/\./, 'g'), '_'),
                egiy6x = fpzu[s1[890]],
                _kjc9 = egiy6x[s1[485]](/(he814a\/Z_78game.js:)[0-9]{1,60}(:)/g);
            if (_kjc9) for (var wjk = 0x0; wjk < _kjc9[s1[190]]; wjk++) {
                if (_kjc9[wjk] && _kjc9[wjk][s1[190]] > 0x0) {
                    var wtd$b0 = parseInt(_kjc9[wjk][s1[326]](s1[891], '')[s1[326]](':', ''));
                    egiy6x = egiy6x[s1[326]](_kjc9[wjk], _kjc9[wjk][s1[326]](':' + wtd$b0 + ':', ':' + (wtd$b0 - 0x2) + ':'));
                }
            }
            egiy6x = egiy6x[s1[326]](new RegExp(s1[892], 'g'), s1[893] + flp5z + s1[894]), egiy6x = egiy6x[s1[326]](new RegExp(s1[895], 'g'), s1[893] + flp5z + s1[894]), fpzu[s1[890]] = egiy6x;
        }
        var v0wjt = {
            'id': window[s1[158]][s1[585]],
            'role': window[s1[158]][s1[586]],
            'level': window[s1[158]][s1[587]],
            'user': window[s1[158]][s1[588]],
            'version': window[s1[158]][s1[220]],
            'cdn': window[s1[158]][s1[330]],
            'pkgName': window[s1[158]][s1[299]],
            'gamever': window[s1[495]][s1[496]],
            'serverid': window[s1[158]][s1[159]] ? window[s1[158]][s1[159]][s1[160]] : 0x0,
            'systemInfo': window[s1[589]],
            'error': s1[896],
            'stack': fpzu ? fpzu[s1[890]] : ''
        },
            rkq_a = JSON[s1[456]](v0wjt);
        console[s1[458]](s1[897] + rkq_a), (!window[s1[888]] || window[s1[888]] != v0wjt[s1[458]]) && (window[s1[888]] = v0wjt[s1[458]], window[s1[524]](v0wjt));
    }
});
import 'mk.js';
import 'a8m9a.js';
window[s1[898]] = require(s1[899]);
import 'pqe.js';
import 'uf.js';
import 'a5k.js';
import 'gf.js';
console[s1[567]](s1[900]), console[s1[567]](s1[901]), _sNYWI({ 'title': s1[902] });
var _xzlpu = { '_sTNIYW': !![] };
new window[s1[493]](_xzlpu), window[s1[493]][s1[153]][s1[422]]();
if (window[s1[903]]) clearInterval(window[s1[903]]);
window[s1[903]] = null, window[s1[621]] = function (wv0tj$, bdtw$0) {
    if (!wv0tj$ || !bdtw$0) return 0x0;
    wv0tj$ = wv0tj$[s1[904]]('.'), bdtw$0 = bdtw$0[s1[904]]('.');
    const rqouma = Math[s1[905]](wv0tj$[s1[190]], bdtw$0[s1[190]]);
    while (wv0tj$[s1[190]] < rqouma) {
        wv0tj$[s1[348]]('0');
    }
    while (bdtw$0[s1[190]] < rqouma) {
        bdtw$0[s1[348]]('0');
    }
    for (var zpfs5l = 0x0; zpfs5l < rqouma; zpfs5l++) {
        const x5f6se = parseInt(wv0tj$[zpfs5l]),
              c_kqr = parseInt(bdtw$0[zpfs5l]);
        if (x5f6se > c_kqr) return 0x1;else {
            if (x5f6se < c_kqr) return -0x1;
        }
    }
    return 0x0;
}, window[s1[765]] = wx[s1[906]]()[s1[765]], console[s1[340]](s1[907] + window[s1[765]]);
var _xpzom = wx[s1[908]]();
_xpzom[s1[909]](function (ump7lz) {
    console[s1[340]](s1[910] + ump7lz[s1[911]]);
}), _xpzom[s1[912]](function () {
    wx[s1[547]]({
        'title': s1[913],
        'content': s1[914],
        'showCancel': ![],
        'success': function ($n9vwj) {
            _xpzom[s1[915]]();
        }
    });
}), _xpzom[s1[916]](function () {
    console[s1[340]](s1[917]);
}), window[s1[918]] = function () {
    console[s1[340]](s1[919]);
    var _9cnr = wx[s1[920]]({
        'name': s1[921],
        'success': function (maro_) {
            console[s1[340]](s1[922]), console[s1[340]](maro_), maro_ && maro_[s1[648]] == s1[923] ? (window[s1[539]] = !![], window[s1[428]](), window[s1[429]]()) : setTimeout(function () {
                window[s1[918]]();
            }, 0x1f4);
        },
        'fail': function (oua7z) {
            console[s1[340]](s1[924]), console[s1[340]](oua7z), setTimeout(function () {
                window[s1[918]]();
            }, 0x1f4);
        }
    });
    _9cnr && _9cnr[s1[925]](uaq7m => {});
}, window[s1[926]] = function () {
    console[s1[340]](s1[927]);
    var m_oqa = wx[s1[920]]({
        'name': s1[928],
        'success': function (exg6y) {
            console[s1[340]](s1[929]), console[s1[340]](exg6y), exg6y && exg6y[s1[648]] == s1[923] ? (window[s1[540]] = !![], window[s1[428]](), window[s1[429]]()) : setTimeout(function () {
                window[s1[926]]();
            }, 0x1f4);
        },
        'fail': function (m7qa) {
            console[s1[340]](s1[930]), console[s1[340]](m7qa), setTimeout(function () {
                window[s1[926]]();
            }, 0x1f4);
        }
    });
    m_oqa && m_oqa[s1[925]](pu7fl => {});
}, window[s1[931]] = function () {
    window[s1[621]](window[s1[765]], s1[932]) >= 0x0 ? (console[s1[340]](s1[933] + window[s1[765]] + s1[934]), window[s1[557]](), window[s1[918]](), window[s1[926]]()) : (window[s1[598]](s1[935], window[s1[765]]), wx[s1[547]]({
        'title': s1[548],
        'content': s1[936]
    }));
}, window[s1[589]] = '', wx[s1[937]]({
    'success'(j$9vwn) {
        window[s1[589]] = s1[938] + j$9vwn[s1[939]] + s1[940] + j$9vwn[s1[941]] + s1[942] + j$9vwn[s1[507]] + s1[943] + j$9vwn[s1[944]] + s1[945] + j$9vwn[s1[668]] + s1[946] + j$9vwn[s1[765]] + s1[947] + j$9vwn[s1[948]], console[s1[340]](window[s1[589]]), console[s1[340]](s1[949] + j$9vwn[s1[950]] + s1[951] + j$9vwn[s1[952]] + s1[953] + j$9vwn[s1[954]] + s1[955] + j$9vwn[s1[956]] + s1[957] + j$9vwn[s1[958]] + s1[959] + j$9vwn[s1[960]] + s1[961] + (j$9vwn[s1[962]] ? j$9vwn[s1[962]][s1[109]] + ',' + j$9vwn[s1[962]][s1[234]] + ',' + j$9vwn[s1[962]][s1[874]] + ',' + j$9vwn[s1[962]][s1[69]] : ''));
        var lf56ps = j$9vwn[s1[944]] ? j$9vwn[s1[944]][s1[963]]() : '',
            ul7pf = j$9vwn[s1[941]] ? j$9vwn[s1[941]][s1[963]]()[s1[326]]('\x20', '') : '';
        window[s1[158]][s1[534]] = lf56ps[s1[478]](s1[964]) != -0x1, window[s1[158]][s1[535]] = lf56ps[s1[478]](s1[965]) != -0x1, window[s1[158]][s1[870]] = lf56ps[s1[478]](s1[964]) != -0x1 || lf56ps[s1[478]](s1[965]) != -0x1, window[s1[158]][s1[536]] = lf56ps[s1[478]](s1[966]) != -0x1 || lf56ps[s1[478]](s1[508]) != -0x1, window[s1[158]][s1[600]] = j$9vwn[s1[668]] ? j$9vwn[s1[668]][s1[963]]() : '', window[s1[158]][s1[866]] = ![], window[s1[158]][s1[867]] = 0x2;
        if (lf56ps[s1[478]](s1[965]) != -0x1) {
            if (j$9vwn[s1[948]] >= 0x18) window[s1[158]][s1[867]] = 0x3;else window[s1[158]][s1[867]] = 0x2;
        } else {
            if (lf56ps[s1[478]](s1[964]) != -0x1) {
                if (j$9vwn[s1[948]] && j$9vwn[s1[948]] >= 0x14) window[s1[158]][s1[867]] = 0x3;else {
                    if (ul7pf[s1[478]](s1[967]) != -0x1 || ul7pf[s1[478]](s1[968]) != -0x1 || ul7pf[s1[478]](s1[969]) != -0x1 || ul7pf[s1[478]](s1[970]) != -0x1 || ul7pf[s1[478]](s1[971]) != -0x1) window[s1[158]][s1[867]] = 0x2;else window[s1[158]][s1[867]] = 0x3;
                }
            } else window[s1[158]][s1[867]] = 0x2;
        }
        console[s1[340]](s1[972] + window[s1[158]][s1[866]] + s1[973] + window[s1[158]][s1[867]]);
    }
}), wx[s1[786]]({
    'success': function (tb0$wd) {
        console[s1[340]](s1[974] + tb0$wd[s1[788]] + s1[975] + tb0$wd[s1[790]]);
    }
}), wx[s1[792]]({
    'success': function (sl5fzp) {
        console[s1[340]](s1[976] + sl5fzp[s1[977]]);
    }
}), wx[s1[978]]({ 'keepScreenOn': !![] }), wx[s1[793]](function (d08$t) {
    console[s1[340]](s1[976] + d08$t[s1[977]] + s1[979] + d08$t[s1[980]]);
}), wx[s1[755]](function (f7zpu) {
    window[s1[757]] = f7zpu, window[s1[756]] && window[s1[757]] && (console[s1[567]](s1[758] + window[s1[757]][s1[759]]), window[s1[756]](window[s1[757]]), window[s1[757]] = null);
}), window[s1[981]] = 0x0, window[s1[982]] = 0x0, window[s1[983]] = null, wx[s1[984]](function () {
    window[s1[982]]++;
    var qomra_ = Date[s1[152]]();
    (window[s1[981]] == 0x0 || qomra_ - window[s1[981]] > 0x1d4c0) && (console[s1[475]](s1[985]), wx[s1[986]]());
    if (window[s1[982]] >= 0x2) {
        window[s1[982]] = 0x0, console[s1[458]](s1[987]), wx[s1[988]]('0', 0x1);
        if (window[s1[158]] && window[s1[158]][s1[534]]) window[s1[598]](s1[989], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});