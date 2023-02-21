var W = wx.$l;
console[W[568]](W[569]), window[W[570]], wx[W[571]](function (kncy7) {
    if (kncy7) {
        if (kncy7[W[572]]) {
            var nrcw = window[W[436]][W[573]][W[347]](new RegExp(/\./, 'g'), '_'),
                fluxd9 = kncy7[W[572]],
                wz3yck = fluxd9[W[531]](/(LLLLLLLL\/LLLLGAME.js:)[0-9]{1,60}(:)/g);
            if (wz3yck) for (var luif8 = 0x0; luif8 < wz3yck[W[201]]; luif8++) {
                if (wz3yck[luif8] && wz3yck[luif8][W[201]] > 0x0) {
                    var b16 = parseInt(wz3yck[luif8][W[347]](W[574], '')[W[347]](':', ''));
                    fluxd9 = fluxd9[W[347]](wz3yck[luif8], wz3yck[luif8][W[347]](':' + b16 + ':', ':' + (b16 - 0x2) + ':'));
                }
            }
            fluxd9 = fluxd9[W[347]](new RegExp(W[575], 'g'), W[576] + nrcw + W[577]), fluxd9 = fluxd9[W[347]](new RegExp(W[578], 'g'), W[576] + nrcw + W[577]), kncy7[W[572]] = fluxd9;
        }
        var f8ubdl = {
            'id': window['$LUX'][W[579]],
            'role': window['$LUX'][W[580]],
            'level': window['$LUX'][W[581]],
            'user': window['$LUX'][W[582]],
            'version': window['$LUX'][W[229]],
            'cdn': window['$LUX'][W[351]],
            'pkgName': window['$LUX'][W[311]],
            'gamever': window[W[436]][W[573]],
            'serverid': window['$LUX'][W[170]] ? window['$LUX'][W[170]][W[171]] : 0x0,
            'systemInfo': window[W[583]],
            'error': W[584],
            'stack': kncy7 ? kncy7[W[572]] : ''
        },
            $0hqo = JSON[W[502]](f8ubdl);
        console[W[439]](W[585] + $0hqo), (!window[W[570]] || window[W[570]] != f8ubdl[W[439]]) && (window[W[570]] = f8ubdl[W[439]], window['$LRU'](f8ubdl));
    }
});
import 'lllMDFIVEMIN.js';
import 'lllZLIBS.js';
window[W[586]] = require(W[587]);
import 'LLLLINDEX.js';
import 'llllLIBSMIN.js';
import 'LLLLWXMINI.js';
import 'LLLINITMIN.js';
console[W[568]](W[588]), console[W[568]](W[589]), $LRU7X({ 'title': W[590] });
var L9$tg0m = { '$LMRXU7': !![] };
new window[W[567]](L9$tg0m), window[W[567]][W[166]]['$LM7UXR']();
if (window['$LMRUX7']) clearInterval(window['$LMRUX7']);
window['$LMRUX7'] = null, window['$LM7XRU'] = function (_k23v, lbfu) {
    if (!_k23v || !lbfu) return 0x0;
    _k23v = _k23v[W[447]]('.'), lbfu = lbfu[W[447]]('.');
    const das95 = Math[W[591]](_k23v[W[201]], lbfu[W[201]]);
    while (_k23v[W[201]] < das95) {
        _k23v[W[368]]('0');
    }
    while (lbfu[W[201]] < das95) {
        lbfu[W[368]]('0');
    }
    for (var sqp5a4 = 0x0; sqp5a4 < das95; sqp5a4++) {
        const hp4sq5 = parseInt(_k23v[sqp5a4]),
              ifl81b = parseInt(lbfu[sqp5a4]);
        if (hp4sq5 > ifl81b) return 0x1;else {
            if (hp4sq5 < ifl81b) return -0x1;
        }
    }
    return 0x0;
}, window[W[592]] = wx[W[593]]()[W[592]], console[W[320]](W[594] + window[W[592]]);
var L9i_28 = wx[W[595]]();
L9i_28[W[596]](function (v3_z6) {
    console[W[320]](W[597] + v3_z6[W[598]]);
}), L9i_28[W[599]](function () {
    wx[W[600]]({
        'title': W[601],
        'content': W[602],
        'showCancel': ![],
        'success': function (ufb9d) {
            L9i_28[W[603]]();
        }
    });
}), L9i_28[W[604]](function () {
    console[W[320]](W[605]);
}), window['$LM7XUR'] = function () {
    console[W[320]](W[606]);
    var rj7ec = wx[W[607]]({
        'name': W[608],
        'success': function (x5s9ap) {
            console[W[320]](W[609]), console[W[320]](x5s9ap), x5s9ap && x5s9ap[W[610]] == W[611] ? (window['$LX7'] = !![], window['$LX7UR'](), window['$LXUR7']()) : setTimeout(function () {
                window['$LM7XUR']();
            }, 0x1f4);
        },
        'fail': function (wc3) {
            console[W[320]](W[612]), console[W[320]](wc3), setTimeout(function () {
                window['$LM7XUR']();
            }, 0x1f4);
        }
    });
    rj7ec && rj7ec[W[613]](er7jc => {});
}, window['$LMURX7'] = function () {
    console[W[320]](W[614]);
    var tgm$0o = wx[W[607]]({
        'name': W[615],
        'success': function (k23v) {
            console[W[320]](W[616]), console[W[320]](k23v), k23v && k23v[W[610]] == W[611] ? (window['$LU7X'] = !![], window['$LX7UR'](), window['$LXUR7']()) : setTimeout(function () {
                window['$LMURX7']();
            }, 0x1f4);
        },
        'fail': function (lud9bf) {
            console[W[320]](W[617]), console[W[320]](lud9bf), setTimeout(function () {
                window['$LMURX7']();
            }, 0x1f4);
        }
    });
    tgm$0o && tgm$0o[W[613]](u9fbld => {});
}, window[W[618]] = function () {
    window['$LM7XRU'](window[W[592]], W[619]) >= 0x0 ? (console[W[320]](W[620] + window[W[592]] + W[621]), window['$LUR'](), window['$LM7XUR'](), window['$LMURX7']()) : (window['$LUXR'](W[622], window[W[592]]), wx[W[600]]({
        'title': W[623],
        'content': W[624]
    }));
}, window[W[583]] = '', wx[W[625]]({
    'success'(lfi1b) {
        window[W[583]] = W[626] + lfi1b[W[627]] + W[628] + lfi1b[W[629]] + W[630] + lfi1b[W[631]] + W[632] + lfi1b[W[633]] + W[634] + lfi1b[W[635]] + W[636] + lfi1b[W[592]] + W[637] + lfi1b[W[638]], console[W[320]](window[W[583]]), console[W[320]](W[639] + lfi1b[W[640]] + W[641] + lfi1b[W[642]] + W[643] + lfi1b[W[644]] + W[645] + lfi1b[W[646]] + W[647] + lfi1b[W[648]] + W[649] + lfi1b[W[650]] + W[651] + (lfi1b[W[652]] ? lfi1b[W[652]][W[106]] + ',' + lfi1b[W[652]][W[243]] + ',' + lfi1b[W[652]][W[299]] + ',' + lfi1b[W[652]][W[69]] : ''));
        var ul8b = lfi1b[W[633]] ? lfi1b[W[633]][W[653]]() : '',
            nc7re = lfi1b[W[629]] ? lfi1b[W[629]][W[653]]()[W[347]]('\x20', '') : '';
        window['$LUX'][W[654]] = ul8b[W[522]](W[655]) != -0x1, window['$LUX'][W[656]] = ul8b[W[522]](W[657]) != -0x1, window['$LUX'][W[658]] = ul8b[W[522]](W[655]) != -0x1 || ul8b[W[522]](W[657]) != -0x1, window['$LUX'][W[659]] = ul8b[W[522]](W[660]) != -0x1 || ul8b[W[522]](W[661]) != -0x1, window['$LUX'][W[662]] = lfi1b[W[635]] ? lfi1b[W[635]][W[653]]() : '', window['$LUX']['$LMR7XU'] = ![], window['$LUX']['$LMRU7X'] = 0x2;
        if (ul8b[W[522]](W[657]) != -0x1) {
            if (lfi1b[W[638]] >= 0x18) window['$LUX']['$LMRU7X'] = 0x3;else window['$LUX']['$LMRU7X'] = 0x2;
        } else {
            if (ul8b[W[522]](W[655]) != -0x1) {
                if (lfi1b[W[638]] && lfi1b[W[638]] >= 0x14) window['$LUX']['$LMRU7X'] = 0x3;else {
                    if (nc7re[W[522]](W[663]) != -0x1 || nc7re[W[522]](W[664]) != -0x1 || nc7re[W[522]](W[665]) != -0x1 || nc7re[W[522]](W[666]) != -0x1 || nc7re[W[522]](W[667]) != -0x1) window['$LUX']['$LMRU7X'] = 0x2;else window['$LUX']['$LMRU7X'] = 0x3;
                }
            } else window['$LUX']['$LMRU7X'] = 0x2;
        }
        console[W[320]](W[668] + window['$LUX']['$LMR7XU'] + W[669] + window['$LUX']['$LMRU7X']);
    }
}), wx[W[670]]({
    'success': function (gt0$om) {
        console[W[320]](W[671] + gt0$om[W[672]] + W[673] + gt0$om[W[674]]);
    }
}), wx[W[675]]({
    'success': function (dlbu8f) {
        console[W[320]](W[676] + dlbu8f[W[677]]);
    }
}), wx[W[678]]({ 'keepScreenOn': !![] }), wx[W[679]](function (fad9xu) {
    console[W[320]](W[676] + fad9xu[W[677]] + W[680] + fad9xu[W[681]]);
}), wx[W[682]](function (ilfbu) {
    window['$L7R'] = ilfbu, window['$LXR7'] && window['$L7R'] && (console[W[568]](W[683] + window['$L7R'][W[684]]), window['$LXR7'](window['$L7R']), window['$L7R'] = null);
}), window[W[685]] = 0x0, window['$LMU7XR'] = 0x0, window[W[686]] = null, wx[W[687]](function () {
    window['$LMU7XR']++;
    var xdas95 = Date[W[165]]();
    (window[W[685]] == 0x0 || xdas95 - window[W[685]] > 0x1d4c0) && (console[W[520]](W[688]), wx[W[689]]());
    if (window['$LMU7XR'] >= 0x2) {
        window['$LMU7XR'] = 0x0, console[W[439]](W[690]), wx[W[691]]('0', 0x1);
        if (window['$LUX'] && window['$LUX'][W[654]]) window['$LUXR'](W[692], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});