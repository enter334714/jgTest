var f = wx.$B;
console[f[80]](f[31250]), window[f[31251]], wx[f[31252]](function (a47) {
    if (a47) {
        if (a47[f[4304]]) {
            var wg3h_ = window[f[590]][f[30683]][f[4483]](new RegExp(/\./, 'g'), '_'),
                l9zhv5 = a47[f[4304]],
                a746 = l9zhv5[f[12245]](/(a0uhnz\/Z_61game.js:)[0-9]{1,60}(:)/g);
            if (a746) for (var xnqo7 = 0x0; xnqo7 < a746[f[14]]; xnqo7++) {
                if (a746[xnqo7] && a746[xnqo7][f[14]] > 0x0) {
                    var vh5b93 = parseInt(a746[xnqo7][f[4483]](f[31253], '')[f[4483]](':', ''));
                    l9zhv5 = l9zhv5[f[4483]](a746[xnqo7], a746[xnqo7][f[4483]](':' + vh5b93 + ':', ':' + (vh5b93 - 0x2) + ':'));
                }
            }
            l9zhv5 = l9zhv5[f[4483]](new RegExp(f[31254], 'g'), f[31255] + wg3h_ + f[26451]), l9zhv5 = l9zhv5[f[4483]](new RegExp(f[31256], 'g'), f[31255] + wg3h_ + f[26451]), a47[f[4304]] = l9zhv5;
        }
        var g_3ywb = {
            'id': window[f[30691]][f[30756]],
            'role': window[f[30691]][f[4425]],
            'level': window[f[30691]][f[30757]],
            'user': window[f[30691]][f[26350]],
            'version': window[f[30691]][f[107]],
            'gamever': window[f[590]][f[30683]],
            'cdn': window[f[30691]][f[4302]],
            'serverid': window[f[30691]][f[26345]] ? window[f[30691]][f[26345]][f[11521]] : 0x0,
            'systemInfo': window[f[30758]],
            'error': f[31257],
            'stack': a47 ? a47[f[4304]] : ''
        },
            n7xoq = JSON[f[4288]](g_3ywb);
        console[f[141]](f[31258] + n7xoq), (!window[f[31251]] || window[f[31251]] != g_3ywb[f[141]]) && (window[f[31251]] = g_3ywb[f[141]], window[f[30709]](g_3ywb));
    }
});
import 'f93a.js';
import 'lxe.js';
window[f[31259]] = require(f[31260]);
import 'a8wr.js';
import 'mh4b1a.js';
import 'a87y.js';
import 'g6j.js';
console[f[80]](f[31261]), console[f[80]](f[31262]), t13C75({ 'title': f[31263] });
var Sb_gh = { 't1G35C7': !![] };
new window[f[30740]](Sb_gh), window[f[30740]][f[164]][f[31220]]();
if (window[f[31264]]) clearInterval(window[f[31264]]);
window[f[31264]] = null, window[f[30787]] = function (d$21mj, noxq) {
    if (!d$21mj || !noxq) return 0x0;
    d$21mj = d$21mj[f[16]]('.'), noxq = noxq[f[16]]('.');
    const tkisp = Math[f[923]](d$21mj[f[14]], noxq[f[14]]);
    while (d$21mj[f[14]] < tkisp) {
        d$21mj[f[31]]('0');
    }
    while (noxq[f[14]] < tkisp) {
        noxq[f[31]]('0');
    }
    for (var pstkf8 = 0x0; pstkf8 < tkisp; pstkf8++) {
        const gb35vh = parseInt(d$21mj[pstkf8]),
              vg53bh = parseInt(noxq[pstkf8]);
        if (gb35vh > vg53bh) return 0x1;else {
            if (gb35vh < vg53bh) return -0x1;
        }
    }
    return 0x0;
}, window[f[30920]] = wx[f[31265]]()[f[30920]], console[f[514]](f[31266] + window[f[30920]]);
var Sz1jm2 = wx[f[31267]]();
Sz1jm2[f[31268]](function (kdt$) {
    console[f[514]](f[31269] + kdt$[f[31270]]);
}), Sz1jm2[f[31271]](function () {
    wx[f[30726]]({
        'title': f[31272],
        'content': f[31273],
        'showCancel': ![],
        'success': function (zjl129) {
            Sz1jm2[f[31274]]();
        }
    });
}), Sz1jm2[f[31275]](function () {
    console[f[514]](f[31276]);
}), window[f[31277]] = function () {
    console[f[514]](f[31278]);
    var d$jm = wx[f[31279]]({
        'name': 'ge',
        'success': function (zdmj) {
            console[f[514]](f[31280]), console[f[514]](zdmj), zdmj && zdmj[f[26548]] == f[31281] ? (window[f[30717]] = !![], window[f[30865]](), window[f[30866]]()) : setTimeout(function () {
                window[f[31277]]();
            }, 0x1f4);
        },
        'fail': function (w_34gy) {
            console[f[514]](f[31282]), console[f[514]](w_34gy), setTimeout(function () {
                window[f[31277]]();
            }, 0x1f4);
        }
    });
    d$jm && d$jm[f[30511]](b_h3gw => {});
}, window[f[31283]] = function () {
    console[f[514]](f[31284]);
    var gvbh = wx[f[31279]]({
        'name': f[31285],
        'success': function (no7xe) {
            console[f[514]](f[31286]), console[f[514]](no7xe), no7xe && no7xe[f[26548]] == f[31281] ? (window[f[30718]] = !![], window[f[30865]](), window[f[30866]]()) : setTimeout(function () {
                window[f[31283]]();
            }, 0x1f4);
        },
        'fail': function (fdk8) {
            console[f[514]](f[31287]), console[f[514]](fdk8), setTimeout(function () {
                window[f[31283]]();
            }, 0x1f4);
        }
    });
    gvbh && gvbh[f[30511]](jtd$8 => {});
}, window[f[31288]] = function () {
    window[f[30787]](window[f[30920]], f[31289]) >= 0x0 ? (console[f[514]](f[31290] + window[f[30920]] + f[31291]), window[f[30733]](), window[f[31277]](), window[f[31283]]()) : (window[f[30766]](f[31292], window[f[30920]]), wx[f[30726]]({
        'title': f[5900],
        'content': f[31293]
    }));
}, window[f[30758]] = '', wx[f[31294]]({
    'success'(p8$ktf) {
        window[f[30758]] = f[31295] + p8$ktf[f[31296]] + f[31297] + p8$ktf[f[31298]] + f[31299] + p8$ktf[f[4496]] + f[31300] + p8$ktf[f[507]] + f[31301] + p8$ktf[f[26313]] + f[31302] + p8$ktf[f[30920]] + f[31303] + p8$ktf[f[9227]], console[f[514]](window[f[30758]]), console[f[514]](f[31304] + p8$ktf[f[31305]] + f[31306] + p8$ktf[f[31307]] + f[31308] + p8$ktf[f[31309]] + f[31310] + p8$ktf[f[31311]] + f[31312] + p8$ktf[f[31313]] + f[31314] + p8$ktf[f[31315]] + f[31316] + (p8$ktf[f[31317]] ? p8$ktf[f[31317]][f[344]] + ',' + p8$ktf[f[31317]][f[1366]] + ',' + p8$ktf[f[31317]][f[1368]] + ',' + p8$ktf[f[31317]][f[1367]] : ''));
        var _3yw4g = p8$ktf[f[507]] ? p8$ktf[f[507]][f[12545]]() : '',
            y64g_ = p8$ktf[f[31298]] ? p8$ktf[f[31298]][f[12545]]()[f[4483]]('\x20', '') : '';
        window[f[30691]][f[1148]] = _3yw4g[f[122]](f[31318]) != -0x1, window[f[30691]][f[11345]] = _3yw4g[f[122]](f[31319]) != -0x1, window[f[30691]][f[31016]] = _3yw4g[f[122]](f[31318]) != -0x1 || _3yw4g[f[122]](f[31319]) != -0x1, window[f[30691]][f[26035]] = _3yw4g[f[122]](f[31320]) != -0x1 || _3yw4g[f[122]](f[30695]) != -0x1, window[f[30691]][f[30768]] = p8$ktf[f[26313]] ? p8$ktf[f[26313]][f[12545]]() : '', window[f[30691]][f[31012]] = ![], window[f[30691]][f[31013]] = 0x2;
        if (_3yw4g[f[122]](f[31319]) != -0x1) {
            if (p8$ktf[f[9227]] >= 0x18) window[f[30691]][f[31013]] = 0x3;else window[f[30691]][f[31013]] = 0x2;
        } else {
            if (_3yw4g[f[122]](f[31318]) != -0x1) {
                if (p8$ktf[f[9227]] && p8$ktf[f[9227]] >= 0x14) window[f[30691]][f[31013]] = 0x3;else {
                    if (y64g_[f[122]](f[31321]) != -0x1 || y64g_[f[122]](f[31322]) != -0x1 || y64g_[f[122]](f[31323]) != -0x1 || y64g_[f[122]](f[31324]) != -0x1 || y64g_[f[122]](f[31325]) != -0x1) window[f[30691]][f[31013]] = 0x2;else window[f[30691]][f[31013]] = 0x3;
                }
            } else window[f[30691]][f[31013]] = 0x2;
        }
        console[f[514]](f[31326] + window[f[30691]][f[31012]] + f[31327] + window[f[30691]][f[31013]]);
    }
}), wx[f[30940]]({
    'success': function (ay6_u) {
        console[f[514]](f[31328] + ay6_u[f[4401]] + f[31329] + ay6_u[f[30942]]);
    }
}), wx[f[11902]]({
    'success': function (on67au) {
        console[f[514]](f[31330] + on67au[f[13411]]);
    }
}), wx[f[31331]]({ 'keepScreenOn': !![] }), wx[f[11904]](function (k8$tfd) {
    console[f[514]](f[31330] + k8$tfd[f[13411]] + f[31332] + k8$tfd[f[31333]]);
}), wx[f[10836]](function (n0eqxo) {
    window[f[30914]] = n0eqxo, window[f[30913]] && window[f[30914]] && (console[f[80]](f[30915] + window[f[30914]][f[846]]), window[f[30913]](window[f[30914]]), window[f[30914]] = null);
}), window[f[31334]] = 0x0, window[f[31335]] = null, wx[f[31336]](function () {
    window[f[31334]]++, wx[f[12082]]();
    if (window[f[31334]] >= 0x2) {
        window[f[31334]] = 0x0, console[f[141]](f[31337]), wx[f[31338]]('0', 0x1);
        if (window[f[30691]] && window[f[30691]][f[1148]]) window[f[30766]](f[31339], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});