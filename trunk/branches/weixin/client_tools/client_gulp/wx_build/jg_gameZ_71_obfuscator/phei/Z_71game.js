var f = wx.$B;
console[f[80]](f[35556]), window[f[35557]], wx[f[35558]](function (nulto) {
    if (nulto) {
        if (nulto[f[4547]]) {
            var mpwbe = window[f[593]][f[35243]][f[4248]](new RegExp(/\./, 'g'), '_'),
                mesw = nulto[f[4547]],
                wpb2 = mesw[f[12736]](/(knj\/Z_71game.js:)[0-9]{1,60}(:)/g);
            if (wpb2) for (var y0un5 = 0x0; y0un5 < wpb2[f[14]]; y0un5++) {
                if (wpb2[y0un5] && wpb2[y0un5][f[14]] > 0x0) {
                    var a8gx = parseInt(wpb2[y0un5][f[4248]](f[35559], '')[f[4248]](':', ''));
                    mesw = mesw[f[4248]](wpb2[y0un5], wpb2[y0un5][f[4248]](':' + a8gx + ':', ':' + (a8gx - 0x2) + ':'));
                }
            }
            mesw = mesw[f[4248]](new RegExp(f[35560], 'g'), f[35561] + mpwbe + f[27655]), mesw = mesw[f[4248]](new RegExp(f[35562], 'g'), f[35561] + mpwbe + f[27655]), nulto[f[4547]] = mesw;
        }
        var hi8g = {
            'id': window[f[4545]][f[35303]],
            'role': window[f[4545]][f[4676]],
            'level': window[f[4545]][f[35304]],
            'user': window[f[4545]][f[27544]],
            'version': window[f[4545]][f[107]],
            'cdn': window[f[4545]][f[4542]],
            'pkgName': window[f[4545]][f[27546]],
            'gamever': window[f[593]][f[35243]],
            'serverid': window[f[4545]][f[27540]] ? window[f[4545]][f[27540]][f[11928]] : 0x0,
            'systemInfo': window[f[35305]],
            'error': f[35563],
            'stack': nulto ? nulto[f[4547]] : ''
        },
            v61s = JSON[f[4528]](hi8g);
        console[f[141]](f[35564] + v61s), (!window[f[35557]] || window[f[35557]] != hi8g[f[141]]) && (window[f[35557]] = hi8g[f[141]], window[f[35266]](hi8g));
    }
});
import 'a2t9a.js';
import 'a80f.js';
window[f[35565]] = require(f[35566]);
import 'j4y8a.js';
import 'a9d.js';
import 'c2a.js';
import 'dwec5a.js';
console[f[80]](f[35567]), console[f[80]](f[35568]), t1SU1F({ 'title': f[35569] });
var Sihg8a1 = { 't1ZSFU1': !![] };
new window[f[35241]](Sihg8a1), window[f[35241]][f[164]][f[35203]]();
if (window[f[35570]]) clearInterval(window[f[35570]]);
window[f[35570]] = null, window[f[35332]] = function (g8at, agih1) {
    if (!g8at || !agih1) return 0x0;
    g8at = g8at[f[16]]('.'), agih1 = agih1[f[16]]('.');
    const ia16g = Math[f[940]](g8at[f[14]], agih1[f[14]]);
    while (g8at[f[14]] < ia16g) {
        g8at[f[31]]('0');
    }
    while (agih1[f[14]] < ia16g) {
        agih1[f[31]]('0');
    }
    for (var ag1i8h = 0x0; ag1i8h < ia16g; ag1i8h++) {
        const mp23 = parseInt(g8at[ag1i8h]),
              p_32z7 = parseInt(agih1[ag1i8h]);
        if (mp23 > p_32z7) return 0x1;else {
            if (mp23 < p_32z7) return -0x1;
        }
    }
    return 0x0;
}, window[f[35453]] = wx[f[35571]]()[f[35453]], console[f[517]](f[35572] + window[f[35453]]);
var Su5olxt = wx[f[35573]]();
Su5olxt[f[35574]](function (b723pz) {
    console[f[517]](f[35575] + b723pz[f[35576]]);
}), Su5olxt[f[35577]](function () {
    wx[f[35279]]({
        'title': f[35578],
        'content': f[35579],
        'showCancel': ![],
        'success': function (lagxt8) {
            Su5olxt[f[35580]]();
        }
    });
}), Su5olxt[f[35581]](function () {
    console[f[517]](f[35582]);
}), window[f[35583]] = function () {
    console[f[517]](f[35584]);
    var rj90ny = wx[f[35585]]({
        'name': 'nw',
        'success': function (wmvbe) {
            console[f[517]](f[35586]), console[f[517]](wmvbe), wmvbe && wmvbe[f[27757]] == f[35587] ? (window[f[35273]] = !![], window[f[35206]](), window[f[35207]]()) : setTimeout(function () {
                window[f[35583]]();
            }, 0x1f4);
        },
        'fail': function (oa8lx) {
            console[f[517]](f[35588]), console[f[517]](oa8lx), setTimeout(function () {
                window[f[35583]]();
            }, 0x1f4);
        }
    });
    rj90ny && rj90ny[f[34348]](p_374 => {});
}, window[f[35589]] = function () {
    console[f[517]](f[35590]);
    var dqrj9k = wx[f[35585]]({
        'name': f[35591],
        'success': function (toxlu8) {
            console[f[517]](f[35592]), console[f[517]](toxlu8), toxlu8 && toxlu8[f[27757]] == f[35587] ? (window[f[35274]] = !![], window[f[35206]](), window[f[35207]]()) : setTimeout(function () {
                window[f[35589]]();
            }, 0x1f4);
        },
        'fail': function (ry5) {
            console[f[517]](f[35593]), console[f[517]](ry5), setTimeout(function () {
                window[f[35589]]();
            }, 0x1f4);
        }
    });
    dqrj9k && dqrj9k[f[34348]](uo5y0 => {});
}, window[f[35594]] = function () {
    window[f[35332]](window[f[35453]], f[35595]) >= 0x0 ? (console[f[517]](f[35596] + window[f[35453]] + f[35597]), window[f[35286]](), window[f[35583]](), window[f[35589]]()) : (window[f[35313]](f[35598], window[f[35453]]), wx[f[35279]]({
        'title': f[6132],
        'content': f[35599]
    }));
}, window[f[35305]] = '', wx[f[35600]]({
    'success'(bp327z) {
        window[f[35305]] = f[35601] + bp327z[f[35602]] + f[35603] + bp327z[f[35604]] + f[35605] + bp327z[f[5374]] + f[35606] + bp327z[f[510]] + f[35607] + bp327z[f[27498]] + f[35608] + bp327z[f[35453]] + f[35609] + bp327z[f[9613]], console[f[517]](window[f[35305]]), console[f[517]](f[35610] + bp327z[f[31114]] + f[35611] + bp327z[f[35612]] + f[35613] + bp327z[f[35614]] + f[35615] + bp327z[f[35616]] + f[35617] + bp327z[f[35618]] + f[35619] + bp327z[f[35620]] + f[35621] + (bp327z[f[35622]] ? bp327z[f[35622]][f[347]] + ',' + bp327z[f[35622]][f[1432]] + ',' + bp327z[f[35622]][f[1434]] + ',' + bp327z[f[35622]][f[1433]] : ''));
        var dj9r0k = bp327z[f[510]] ? bp327z[f[510]][f[13059]]() : '',
            _pz43 = bp327z[f[35604]] ? bp327z[f[35604]][f[13059]]()[f[4248]]('\x20', '') : '';
        window[f[4545]][f[1165]] = dj9r0k[f[122]](f[35623]) != -0x1, window[f[4545]][f[11756]] = dj9r0k[f[122]](f[35624]) != -0x1, window[f[4545]][f[35541]] = dj9r0k[f[122]](f[35623]) != -0x1 || dj9r0k[f[122]](f[35624]) != -0x1, window[f[4545]][f[27189]] = dj9r0k[f[122]](f[35625]) != -0x1 || dj9r0k[f[122]](f[35253]) != -0x1, window[f[4545]][f[35315]] = bp327z[f[27498]] ? bp327z[f[27498]][f[13059]]() : '', window[f[4545]][f[35537]] = ![], window[f[4545]][f[35538]] = 0x2;
        if (dj9r0k[f[122]](f[35624]) != -0x1) {
            if (bp327z[f[9613]] >= 0x18) window[f[4545]][f[35538]] = 0x3;else window[f[4545]][f[35538]] = 0x2;
        } else {
            if (dj9r0k[f[122]](f[35623]) != -0x1) {
                if (bp327z[f[9613]] && bp327z[f[9613]] >= 0x14) window[f[4545]][f[35538]] = 0x3;else {
                    if (_pz43[f[122]](f[35626]) != -0x1 || _pz43[f[122]](f[35627]) != -0x1 || _pz43[f[122]](f[35628]) != -0x1 || _pz43[f[122]](f[35629]) != -0x1 || _pz43[f[122]](f[35630]) != -0x1) window[f[4545]][f[35538]] = 0x2;else window[f[4545]][f[35538]] = 0x3;
                }
            } else window[f[4545]][f[35538]] = 0x2;
        }
        console[f[517]](f[35631] + window[f[4545]][f[35537]] + f[35632] + window[f[4545]][f[35538]]);
    }
}), wx[f[35472]]({
    'success': function (jqr9dk) {
        console[f[517]](f[35633] + jqr9dk[f[4652]] + f[35634] + jqr9dk[f[35474]]);
    }
}), wx[f[12309]]({
    'success': function (ig18h) {
        console[f[517]](f[35635] + ig18h[f[14135]]);
    }
}), wx[f[35636]]({ 'keepScreenOn': !![] }), wx[f[12311]](function (ax1) {
    console[f[517]](f[35635] + ax1[f[14135]] + f[35637] + ax1[f[35638]]);
}), wx[f[11248]](function (higa18) {
    window[f[35447]] = higa18, window[f[35446]] && window[f[35447]] && (console[f[80]](f[35448] + window[f[35447]][f[863]]), window[f[35446]](window[f[35447]]), window[f[35447]] = null);
}), window[f[35639]] = 0x0, window[f[35640]] = 0x0, window[f[35641]] = null, wx[f[35642]](function () {
    window[f[35640]]++;
    var ultno = Date[f[85]]();
    (window[f[35639]] == 0x0 || ultno - window[f[35639]] > 0x1d4c0) && (console[f[100]](f[35643]), wx[f[12573]]());
    if (window[f[35640]] >= 0x2) {
        window[f[35640]] = 0x0, console[f[141]](f[35644]), wx[f[35645]]('0', 0x1);
        if (window[f[4545]] && window[f[4545]][f[1165]]) window[f[35313]](f[35646], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});