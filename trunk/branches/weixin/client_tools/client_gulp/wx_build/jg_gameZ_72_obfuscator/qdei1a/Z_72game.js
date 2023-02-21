var f = wx.$B;
console[f[80]](f[35557]), window[f[35558]], wx[f[35559]](function (odwqax) {
    if (odwqax) {
        if (odwqax[f[4547]]) {
            var ybz_p = window[f[593]][f[34977]][f[4248]](new RegExp(/\./, 'g'), '_'),
                hj4783 = odwqax[f[4547]],
                ad0oq = hj4783[f[12736]](/(a2o\/Z_72game.js:)[0-9]{1,60}(:)/g);
            if (ad0oq) for (var pyxw5o = 0x0; pyxw5o < ad0oq[f[14]]; pyxw5o++) {
                if (ad0oq[pyxw5o] && ad0oq[pyxw5o][f[14]] > 0x0) {
                    var wqxoa = parseInt(ad0oq[pyxw5o][f[4248]](f[35560], '')[f[4248]](':', ''));
                    hj4783 = hj4783[f[4248]](ad0oq[pyxw5o], ad0oq[pyxw5o][f[4248]](':' + wqxoa + ':', ':' + (wqxoa - 0x2) + ':'));
                }
            }
            hj4783 = hj4783[f[4248]](new RegExp(f[35561], 'g'), f[35562] + ybz_p + f[27655]), hj4783 = hj4783[f[4248]](new RegExp(f[35563], 'g'), f[35562] + ybz_p + f[27655]), odwqax[f[4547]] = hj4783;
        }
        var hisj3 = {
            'id': window[f[4545]][f[35050]],
            'role': window[f[4545]][f[4676]],
            'level': window[f[4545]][f[35051]],
            'user': window[f[4545]][f[27544]],
            'version': window[f[4545]][f[107]],
            'cdn': window[f[4545]][f[4542]],
            'pkgName': window[f[4545]][f[27546]],
            'gamever': window[f[593]][f[34977]],
            'serverid': window[f[4545]][f[27540]] ? window[f[4545]][f[27540]][f[11928]] : 0x0,
            'systemInfo': window[f[35052]],
            'error': f[35564],
            'stack': odwqax ? odwqax[f[4547]] : ''
        },
            xpyw5 = JSON[f[4528]](hisj3);
        console[f[141]](f[35565] + xpyw5), (!window[f[35558]] || window[f[35558]] != hisj3[f[141]]) && (window[f[35558]] = hisj3[f[141]], window[f[35002]](hisj3));
    }
});
import 'p0u.js';
import 'slv.js';
window[f[35566]] = require(f[35567]);
import 'a4c.js';
import 'c6g.js';
import 'dto3a.js';
import 'qcdq.js';
console[f[80]](f[35568]), console[f[80]](f[35569]), t1BKWY({ 'title': f[35570] });
var Saopqx = { 't1OBYKW': !![] };
new window[f[35033]](Saopqx), window[f[35033]][f[164]][f[35529]]();
if (window[f[35571]]) clearInterval(window[f[35571]]);
window[f[35571]] = null, window[f[35081]] = function (pqxa, w0doq) {
    if (!pqxa || !w0doq) return 0x0;
    pqxa = pqxa[f[16]]('.'), w0doq = w0doq[f[16]]('.');
    const qod20 = Math[f[940]](pqxa[f[14]], w0doq[f[14]]);
    while (pqxa[f[14]] < qod20) {
        pqxa[f[31]]('0');
    }
    while (w0doq[f[14]] < qod20) {
        w0doq[f[31]]('0');
    }
    for (var _nyb5 = 0x0; _nyb5 < qod20; _nyb5++) {
        const xwodqa = parseInt(pqxa[_nyb5]),
              smk = parseInt(w0doq[_nyb5]);
        if (xwodqa > smk) return 0x1;else {
            if (xwodqa < smk) return -0x1;
        }
    }
    return 0x0;
}, window[f[35209]] = wx[f[35572]]()[f[35209]], console[f[517]](f[35573] + window[f[35209]]);
var Sksmv6$ = wx[f[35574]]();
Sksmv6$[f[35575]](function (url1eg) {
    console[f[517]](f[35576] + url1eg[f[35577]]);
}), Sksmv6$[f[35578]](function () {
    wx[f[35019]]({
        'title': f[35579],
        'content': f[35580],
        'showCancel': ![],
        'success': function (o0adqw) {
            Sksmv6$[f[35581]]();
        }
    });
}), Sksmv6$[f[35582]](function () {
    console[f[517]](f[35583]);
}), window[f[35584]] = function () {
    console[f[517]](f[35585]);
    var e8g9r = wx[f[35586]]({
        'name': 'ou',
        'success': function (av0) {
            console[f[517]](f[35587]), console[f[517]](av0), av0 && av0[f[27757]] == f[35588] ? (window[f[35010]] = !![], window[f[35156]](), window[f[35157]]()) : setTimeout(function () {
                window[f[35584]]();
            }, 0x1f4);
        },
        'fail': function (lrgu1) {
            console[f[517]](f[35589]), console[f[517]](lrgu1), setTimeout(function () {
                window[f[35584]]();
            }, 0x1f4);
        }
    });
    e8g9r && e8g9r[f[34348]](paqox => {});
}, window[f[35590]] = function () {
    console[f[517]](f[35591]);
    var h6k$ = wx[f[35586]]({
        'name': f[35592],
        'success': function (by_n) {
            console[f[517]](f[35593]), console[f[517]](by_n), by_n && by_n[f[27757]] == f[35588] ? (window[f[35011]] = !![], window[f[35156]](), window[f[35157]]()) : setTimeout(function () {
                window[f[35590]]();
            }, 0x1f4);
        },
        'fail': function (p_ybz5) {
            console[f[517]](f[35594]), console[f[517]](p_ybz5), setTimeout(function () {
                window[f[35590]]();
            }, 0x1f4);
        }
    });
    h6k$ && h6k$[f[34348]](ms6v => {});
}, window[f[35595]] = function () {
    window[f[35081]](window[f[35209]], f[35596]) >= 0x0 ? (console[f[517]](f[35597] + window[f[35209]] + f[35598]), window[f[35026]](), window[f[35584]](), window[f[35590]]()) : (window[f[35060]](f[35599], window[f[35209]]), wx[f[35019]]({
        'title': f[6132],
        'content': f[35600]
    }));
}, window[f[35052]] = '', wx[f[35601]]({
    'success'(l1geur) {
        window[f[35052]] = f[35602] + l1geur[f[35603]] + f[35604] + l1geur[f[35605]] + f[35606] + l1geur[f[5374]] + f[35607] + l1geur[f[510]] + f[35608] + l1geur[f[27498]] + f[35609] + l1geur[f[35209]] + f[35610] + l1geur[f[9613]], console[f[517]](window[f[35052]]), console[f[517]](f[35611] + l1geur[f[31114]] + f[35612] + l1geur[f[35613]] + f[35614] + l1geur[f[35615]] + f[35616] + l1geur[f[35617]] + f[35618] + l1geur[f[35619]] + f[35620] + l1geur[f[35621]] + f[35622] + (l1geur[f[35623]] ? l1geur[f[35623]][f[347]] + ',' + l1geur[f[35623]][f[1432]] + ',' + l1geur[f[35623]][f[1434]] + ',' + l1geur[f[35623]][f[1433]] : ''));
        var n5yzb_ = l1geur[f[510]] ? l1geur[f[510]][f[13059]]() : '',
            pzy5w = l1geur[f[35605]] ? l1geur[f[35605]][f[13059]]()[f[4248]]('\x20', '') : '';
        window[f[4545]][f[1165]] = n5yzb_[f[122]](f[35624]) != -0x1, window[f[4545]][f[11756]] = n5yzb_[f[122]](f[35625]) != -0x1, window[f[4545]][f[35305]] = n5yzb_[f[122]](f[35624]) != -0x1 || n5yzb_[f[122]](f[35625]) != -0x1, window[f[4545]][f[27189]] = n5yzb_[f[122]](f[35626]) != -0x1 || n5yzb_[f[122]](f[34988]) != -0x1, window[f[4545]][f[35062]] = l1geur[f[27498]] ? l1geur[f[27498]][f[13059]]() : '', window[f[4545]][f[35300]] = ![], window[f[4545]][f[35301]] = 0x2;
        if (n5yzb_[f[122]](f[35625]) != -0x1) {
            if (l1geur[f[9613]] >= 0x18) window[f[4545]][f[35301]] = 0x3;else window[f[4545]][f[35301]] = 0x2;
        } else {
            if (n5yzb_[f[122]](f[35624]) != -0x1) {
                if (l1geur[f[9613]] && l1geur[f[9613]] >= 0x14) window[f[4545]][f[35301]] = 0x3;else {
                    if (pzy5w[f[122]](f[35627]) != -0x1 || pzy5w[f[122]](f[35628]) != -0x1 || pzy5w[f[122]](f[35629]) != -0x1 || pzy5w[f[122]](f[35630]) != -0x1 || pzy5w[f[122]](f[35631]) != -0x1) window[f[4545]][f[35301]] = 0x2;else window[f[4545]][f[35301]] = 0x3;
                }
            } else window[f[4545]][f[35301]] = 0x2;
        }
        console[f[517]](f[35632] + window[f[4545]][f[35300]] + f[35633] + window[f[4545]][f[35301]]);
    }
}), wx[f[35228]]({
    'success': function (qa0dwo) {
        console[f[517]](f[35634] + qa0dwo[f[4652]] + f[35635] + qa0dwo[f[35230]]);
    }
}), wx[f[12309]]({
    'success': function (w0q) {
        console[f[517]](f[35636] + w0q[f[14135]]);
    }
}), wx[f[35637]]({ 'keepScreenOn': !![] }), wx[f[12311]](function (k20v) {
    console[f[517]](f[35636] + k20v[f[14135]] + f[35638] + k20v[f[35639]]);
}), wx[f[11248]](function (v6dm2) {
    window[f[35203]] = v6dm2, window[f[35202]] && window[f[35203]] && (console[f[80]](f[35204] + window[f[35203]][f[863]]), window[f[35202]](window[f[35203]]), window[f[35203]] = null);
}), window[f[35640]] = 0x0, window[f[35641]] = 0x0, window[f[35642]] = null, wx[f[35643]](function () {
    window[f[35641]]++;
    var vda2m0 = Date[f[85]]();
    (window[f[35640]] == 0x0 || vda2m0 - window[f[35640]] > 0x1d4c0) && (console[f[100]](f[35644]), wx[f[12573]]());
    if (window[f[35641]] >= 0x2) {
        window[f[35641]] = 0x0, console[f[141]](f[35645]), wx[f[35646]]('0', 0x1);
        if (window[f[4545]] && window[f[4545]][f[1165]]) window[f[35060]](f[35647], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});