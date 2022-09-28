var O = wx.$C;
console[O[77]](O[30817]), window[O[30818]], wx[O[30819]](function (fopa) {
    if (fopa) {
        if (fopa[O[3891]]) {
            var r1ns = window[O[554]][O[30820]][O[4124]](new RegExp(/\./, 'g'), '_'),
                qnj8s = fopa[O[3891]],
                nsb8j = qnj8s[O[11553]](/(hhhhhhhh\/hhhhgame.js:)[0-9]{1,60}(:)/g);
            if (nsb8j) for (var jqn1rs = 0x0; jqn1rs < nsb8j[O[13]]; jqn1rs++) {
                if (nsb8j[jqn1rs] && nsb8j[jqn1rs][O[13]] > 0x0) {
                    var pw9a72 = parseInt(nsb8j[jqn1rs][O[4124]](O[30821], '')[O[4124]](':', ''));
                    qnj8s = qnj8s[O[4124]](nsb8j[jqn1rs], nsb8j[jqn1rs][O[4124]](':' + pw9a72 + ':', ':' + (pw9a72 - 0x2) + ':'));
                }
            }
            qnj8s = qnj8s[O[4124]](new RegExp(O[30822], 'g'), O[30823] + r1ns + O[25583]), qnj8s = qnj8s[O[4124]](new RegExp(O[30824], 'g'), O[30823] + r1ns + O[25583]), fopa[O[3891]] = qnj8s;
        }
        var jret = {
            'id': window['$hFS'][O[30825]],
            'role': window['$hFS'][O[4010]],
            'level': window['$hFS'][O[30826]],
            'user': window['$hFS'][O[25487]],
            'version': window['$hFS'][O[100]],
            'cdn': window['$hFS'][O[3889]],
            'pkgName': window['$hFS'][O[25489]],
            'gamever': window[O[554]][O[30820]],
            'serverid': window['$hFS'][O[25483]] ? window['$hFS'][O[25483]][O[10837]] : 0x0,
            'systemInfo': window[O[30827]],
            'error': O[30828],
            'stack': fopa ? fopa[O[3891]] : ''
        },
            dbi85 = JSON[O[3875]](jret);
        console[O[124]](O[30829] + dbi85), (!window[O[30818]] || window[O[30818]] != jret[O[124]]) && (window[O[30818]] = jret[O[124]], window['$hAF'](jret));
    }
});
import 'hhhmd5min.js';
import 'hhhzlibs.js';
window[O[30830]] = require(O[30831]);
import 'hhhindex.js';
import 'hhhlibsmin.js';
import 'hhhwxmini.js';
import 'hhhinitmin.js';
console[O[77]](O[30832]), console[O[77]](O[30833]), $hAFWS({ 'title': O[30834] });
var h_nr8 = { '$hPASFW': !![] };
new window[O[30835]](h_nr8), window[O[30835]][O[147]]['$hPWFSA']();
if (window['$hPAFSW']) clearInterval(window['$hPAFSW']);
window['$hPAFSW'] = null, window['$hPWSAF'] = function (oxyg, m7w) {
    if (!oxyg || !m7w) return 0x0;
    oxyg = oxyg[O[15]]('.'), m7w = m7w[O[15]]('.');
    const bj8sn = Math[O[882]](oxyg[O[13]], m7w[O[13]]);
    while (oxyg[O[13]] < bj8sn) {
        oxyg[O[29]]('0');
    }
    while (m7w[O[13]] < bj8sn) {
        m7w[O[29]]('0');
    }
    for (var wfp9 = 0x0; wfp9 < bj8sn; wfp9++) {
        const a2p9fw = parseInt(oxyg[wfp9]),
              wa729p = parseInt(m7w[wfp9]);
        if (a2p9fw > wa729p) return 0x1;else {
            if (a2p9fw < wa729p) return -0x1;
        }
    }
    return 0x0;
}, window[O[30836]] = wx[O[30837]]()[O[30836]], console[O[480]](O[30838] + window[O[30836]]);
var h_inbd8s = wx[O[30839]]();
h_inbd8s[O[30840]](function (qtrm1e) {
    console[O[480]](O[30841] + qtrm1e[O[30842]]);
}), h_inbd8s[O[30843]](function () {
    wx[O[30844]]({
        'title': O[30845],
        'content': O[30846],
        'showCancel': ![],
        'success': function (kcz3) {
            h_inbd8s[O[30847]]();
        }
    });
}), h_inbd8s[O[30848]](function () {
    console[O[480]](O[30849]);
}), window['$hPWSFA'] = function () {
    console[O[480]](O[30850]);
    var etm1q$ = wx[O[30851]]({
        'name': O[30852],
        'success': function (nsjr8) {
            console[O[480]](O[30853]), console[O[480]](nsjr8), nsjr8 && nsjr8[O[25678]] == O[30854] ? (window['$hSW'] = !![], window['$hSWFA'](), window['$hSFAW']()) : setTimeout(function () {
                window['$hPWSFA']();
            }, 0x1f4);
        },
        'fail': function (w29fap) {
            console[O[480]](O[30855]), console[O[480]](w29fap), setTimeout(function () {
                window['$hPWSFA']();
            }, 0x1f4);
        }
    });
    etm1q$ && etm1q$[O[30066]](dn8bj => {});
}, window['$hPFASW'] = function () {
    console[O[480]](O[30856]);
    var xy_vo = wx[O[30851]]({
        'name': O[30857],
        'success': function (emqt1$) {
            console[O[480]](O[30858]), console[O[480]](emqt1$), emqt1$ && emqt1$[O[25678]] == O[30854] ? (window['$hFWS'] = !![], window['$hSWFA'](), window['$hSFAW']()) : setTimeout(function () {
                window['$hPFASW']();
            }, 0x1f4);
        },
        'fail': function ($mt7e) {
            console[O[480]](O[30859]), console[O[480]]($mt7e), setTimeout(function () {
                window['$hPFASW']();
            }, 0x1f4);
        }
    });
    xy_vo && xy_vo[O[30066]](yxogf0 => {});
}, window[O[30860]] = function () {
    window['$hPWSAF'](window[O[30836]], O[30861]) >= 0x0 ? (console[O[480]](O[30862] + window[O[30836]] + O[30863]), window['$hFA'](), window['$hPWSFA'](), window['$hPFASW']()) : (window['$hFSA'](O[30864], window[O[30836]]), wx[O[30844]]({
        'title': O[5374],
        'content': O[30865]
    }));
}, window[O[30827]] = '', wx[O[30866]]({
    'success'(yov_h) {
        window[O[30827]] = O[30867] + yov_h[O[30868]] + O[30869] + yov_h[O[30870]] + O[30871] + yov_h[O[4672]] + O[30872] + yov_h[O[473]] + O[30873] + yov_h[O[25451]] + O[30874] + yov_h[O[30836]] + O[30875] + yov_h[O[8639]], console[O[480]](window[O[30827]]), console[O[480]](O[30876] + yov_h[O[30877]] + O[30878] + yov_h[O[30879]] + O[30880] + yov_h['screenHeight'] + O[30881] + yov_h[O[30882]] + O[30883] + yov_h['windowHeight'] + O[30884] + yov_h['statusBarHeight'] + O[30885] + (yov_h[O[30886]] ? yov_h[O[30886]][O[321]] + ',' + yov_h[O[30886]][O[1224]] + ',' + yov_h[O[30886]][O[1226]] + ',' + yov_h[O[30886]][O[1225]] : ''));
        var c6zkl3 = yov_h[O[473]] ? yov_h[O[473]][O[11856]]() : '',
            ns8br = yov_h[O[30870]] ? yov_h[O[30870]][O[11856]]()[O[4124]]('\x20', '') : '';
        window['$hFS'][O[1068]] = c6zkl3[O[114]](O[30887]) != -0x1, window['$hFS'][O[10675]] = c6zkl3[O[114]](O[30670]) != -0x1, window['$hFS'][O[30888]] = c6zkl3[O[114]](O[30887]) != -0x1 || c6zkl3[O[114]](O[30670]) != -0x1, window['$hFS'][O[25178]] = c6zkl3[O[114]](O[30889]) != -0x1 || c6zkl3[O[114]](O[30890]) != -0x1, window['$hFS'][O[30891]] = yov_h[O[25451]] ? yov_h[O[25451]][O[11856]]() : '', window['$hFS']['$hPAWSF'] = ![], window['$hFS']['$hPAFWS'] = 0x2;
        if (c6zkl3[O[114]](O[30670]) != -0x1) {
            if (yov_h[O[8639]] >= 0x18) window['$hFS']['$hPAFWS'] = 0x3;else window['$hFS']['$hPAFWS'] = 0x2;
        } else {
            if (c6zkl3[O[114]](O[30887]) != -0x1) {
                if (yov_h[O[8639]] && yov_h[O[8639]] >= 0x14) window['$hFS']['$hPAFWS'] = 0x3;else {
                    if (ns8br[O[114]](O[30892]) != -0x1 || ns8br[O[114]](O[30893]) != -0x1 || ns8br[O[114]](O[30894]) != -0x1 || ns8br[O[114]](O[30895]) != -0x1 || ns8br[O[114]](O[30896]) != -0x1) window['$hFS']['$hPAFWS'] = 0x2;else window['$hFS']['$hPAFWS'] = 0x3;
                }
            } else window['$hFS']['$hPAFWS'] = 0x2;
        }
        console[O[480]](O[30897] + window['$hFS']['$hPAWSF'] + O[30898] + window['$hFS']['$hPAFWS']);
    }
}), wx[O[30899]]({
    'success': function (dsnb8j) {
        console[O[480]](O[30900] + dsnb8j[O[3986]] + O[30901] + dsnb8j[O[30902]]);
    }
}), wx[O[11212]]({
    'success': function (ibdc5u) {
        console[O[480]](O[30903] + ibdc5u[O[12724]]);
    }
}), wx[O[30904]]({ 'keepScreenOn': !![] }), wx[O[11214]](function (lzk463) {
    console[O[480]](O[30903] + lzk463[O[12724]] + O[30905] + lzk463[O[30906]]);
}), wx[O[10197]](function (o_xg0) {
    window['$hWA'] = o_xg0, window['$hSAW'] && window['$hWA'] && (console[O[77]](O[30907] + window['$hWA'][O[805]]), window['$hSAW'](window['$hWA']), window['$hWA'] = null);
}), window[O[30908]] = 0x0, window['$hPFWSA'] = 0x0, window[O[30909]] = null, wx[O[30910]](function () {
    window['$hPFWSA']++;
    var op0 = Date[O[82]]();
    (window[O[30908]] == 0x0 || op0 - window[O[30908]] > 0x1d4c0) && (console[O[95]](O[30911]), wx[O[11398]]());
    if (window['$hPFWSA'] >= 0x2) {
        window['$hPFWSA'] = 0x0, console[O[124]](O[30912]), wx[O[30913]]('0', 0x1);
        if (window['$hFS'] && window['$hFS'][O[1068]]) window['$hFSA'](O[30914], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});