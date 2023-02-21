var f1 = wx.f$;
console[f1[80]](f1[35119]), window[f1[35120]], wx[f1[35121]](function (drly$3) {
    if (drly$3) {
        if (drly$3[f1[4547]]) {
            var izojgv = window[f1[593]][f1[34538]][f1[4248]](new RegExp(/\./, 'g'), '_'),
                vjig7z = drly$3[f1[4547]],
                geioj = vjig7z[f1[12727]](/(a9y5l\/Z_66game.js:)[0-9]{1,60}(:)/g);
            if (geioj) for (var ecordy = 0x0; ecordy < geioj[f1[14]]; ecordy++) {
                if (geioj[ecordy] && geioj[ecordy][f1[14]] > 0x0) {
                    var pq4mw = parseInt(geioj[ecordy][f1[4248]](f1[35122], '')[f1[4248]](':', ''));
                    vjig7z = vjig7z[f1[4248]](geioj[ecordy], geioj[ecordy][f1[4248]](':' + pq4mw + ':', ':' + (pq4mw - 0x2) + ':'));
                }
            }
            vjig7z = vjig7z[f1[4248]](new RegExp(f1[35123], 'g'), f1[35124] + izojgv + f1[27645]), vjig7z = vjig7z[f1[4248]](new RegExp(f1[35125], 'g'), f1[35124] + izojgv + f1[27645]), drly$3[f1[4547]] = vjig7z;
        }
        var vgioe = {
            'id': window[f1[4545]][f1[34611]],
            'role': window[f1[4545]][f1[4676]],
            'level': window[f1[4545]][f1[34612]],
            'user': window[f1[4545]][f1[27534]],
            'version': window[f1[4545]][f1[107]],
            'cdn': window[f1[4545]][f1[4542]],
            'pkgName': window[f1[4545]][f1[27536]],
            'gamever': window[f1[593]][f1[34538]],
            'serverid': window[f1[4545]][f1[27530]] ? window[f1[4545]][f1[27530]][f1[11919]] : 0x0,
            'systemInfo': window[f1[34613]],
            'error': f1[35126],
            'stack': drly$3 ? drly$3[f1[4547]] : ''
        },
            z7 = JSON[f1[4528]](vgioe);
        console[f1[141]](f1[35127] + z7), (!window[f1[35120]] || window[f1[35120]] != vgioe[f1[141]]) && (window[f1[35120]] = vgioe[f1[141]], window[f1[34563]](vgioe));
    }
});
import 'a3q8n.js';
import 'go.js';
window[f1[35128]] = require(f1[35129]);
import 'a0dky.js';
import 'j6u9a.js';
import 'fxq.js';
import 'a1lsf.js';
console[f1[80]](f1[35130]), console[f1[80]](f1[35131]), _kP7ZA({ 'title': f1[35132] });
var _zoyjec = { '_k9PA7Z': !![] };
new window[f1[34594]](_zoyjec), window[f1[34594]][f1[164]][f1[35090]]();
if (window[f1[35133]]) clearInterval(window[f1[35133]]);
window[f1[35133]] = null, window[f1[34642]] = function (mhtswq, dyrc3) {
    if (!mhtswq || !dyrc3) return 0x0;
    mhtswq = mhtswq[f1[16]]('.'), dyrc3 = dyrc3[f1[16]]('.');
    const dreo = Math[f1[940]](mhtswq[f1[14]], dyrc3[f1[14]]);
    while (mhtswq[f1[14]] < dreo) {
        mhtswq[f1[31]]('0');
    }
    while (dyrc3[f1[14]] < dreo) {
        dyrc3[f1[31]]('0');
    }
    for (var tmqwh = 0x0; tmqwh < dreo; tmqwh++) {
        const twmsq = parseInt(mhtswq[tmqwh]),
              sqwtmh = parseInt(dyrc3[tmqwh]);
        if (twmsq > sqwtmh) return 0x1;else {
            if (twmsq < sqwtmh) return -0x1;
        }
    }
    return 0x0;
}, window[f1[34772]] = wx[f1[35134]]()[f1[34772]], console[f1[517]](f1[35135] + window[f1[34772]]);
var _zq4wpm = wx[f1[35136]]();
_zq4wpm[f1[35137]](function (a84p) {
    console[f1[517]](f1[35138] + a84p[f1[35139]]);
}), _zq4wpm[f1[35140]](function () {
    wx[f1[34580]]({
        'title': f1[35141],
        'content': f1[35142],
        'showCancel': ![],
        'success': function (dr_l3$) {
            _zq4wpm[f1[35143]]();
        }
    });
}), _zq4wpm[f1[35144]](function () {
    console[f1[517]](f1[35145]);
}), window[f1[35146]] = function () {
    console[f1[517]](f1[35147]);
    var zoigv = wx[f1[35148]]({
        'name': f1[35149],
        'success': function (coeyr) {
            console[f1[517]](f1[35150]), console[f1[517]](coeyr), coeyr && coeyr[f1[27747]] == f1[35151] ? (window[f1[34571]] = !![], window[f1[34718]](), window[f1[34719]]()) : setTimeout(function () {
                window[f1[35146]]();
            }, 0x1f4);
        },
        'fail': function (dcr3e) {
            console[f1[517]](f1[35152]), console[f1[517]](dcr3e), setTimeout(function () {
                window[f1[35146]]();
            }, 0x1f4);
        }
    });
    zoigv && zoigv[f1[34338]](rdlcy => {});
}, window[f1[35153]] = function () {
    console[f1[517]](f1[35154]);
    var m8wqp = wx[f1[35148]]({
        'name': f1[35155],
        'success': function (wt8mq) {
            console[f1[517]](f1[35156]), console[f1[517]](wt8mq), wt8mq && wt8mq[f1[27747]] == f1[35151] ? (window[f1[34572]] = !![], window[f1[34718]](), window[f1[34719]]()) : setTimeout(function () {
                window[f1[35153]]();
            }, 0x1f4);
        },
        'fail': function (jgiov) {
            console[f1[517]](f1[35157]), console[f1[517]](jgiov), setTimeout(function () {
                window[f1[35153]]();
            }, 0x1f4);
        }
    });
    m8wqp && m8wqp[f1[34338]](qs9t1 => {});
}, window[f1[35158]] = function () {
    window[f1[34642]](window[f1[34772]], f1[35159]) >= 0x0 ? (console[f1[517]](f1[35160] + window[f1[34772]] + f1[35161]), window[f1[34587]](), window[f1[35146]](), window[f1[35153]]()) : (window[f1[34621]](f1[35162], window[f1[34772]]), wx[f1[34580]]({
        'title': f1[6132],
        'content': f1[35163]
    }));
}, window[f1[34613]] = '', wx[f1[35164]]({
    'success'(qwtmhs) {
        window[f1[34613]] = f1[35165] + qwtmhs[f1[35166]] + f1[35167] + qwtmhs[f1[35168]] + f1[35169] + qwtmhs[f1[5374]] + f1[35170] + qwtmhs[f1[510]] + f1[35171] + qwtmhs[f1[27488]] + f1[35172] + qwtmhs[f1[34772]] + f1[35173] + qwtmhs[f1[9613]], console[f1[517]](window[f1[34613]]), console[f1[517]](f1[35174] + qwtmhs[f1[31104]] + f1[35175] + qwtmhs[f1[35176]] + f1[35177] + qwtmhs[f1[35178]] + f1[35179] + qwtmhs[f1[35180]] + f1[35181] + qwtmhs[f1[35182]] + f1[35183] + qwtmhs[f1[35184]] + f1[35185] + (qwtmhs[f1[35186]] ? qwtmhs[f1[35186]][f1[347]] + ',' + qwtmhs[f1[35186]][f1[1432]] + ',' + qwtmhs[f1[35186]][f1[1434]] + ',' + qwtmhs[f1[35186]][f1[1433]] : ''));
        var _r3d$l = qwtmhs[f1[510]] ? qwtmhs[f1[510]][f1[13050]]() : '',
            voizg = qwtmhs[f1[35168]] ? qwtmhs[f1[35168]][f1[13050]]()[f1[4248]]('\x20', '') : '';
        window[f1[4545]][f1[1165]] = _r3d$l[f1[122]](f1[35187]) != -0x1, window[f1[4545]][f1[11747]] = _r3d$l[f1[122]](f1[35188]) != -0x1, window[f1[4545]][f1[34867]] = _r3d$l[f1[122]](f1[35187]) != -0x1 || _r3d$l[f1[122]](f1[35188]) != -0x1, window[f1[4545]][f1[27180]] = _r3d$l[f1[122]](f1[35189]) != -0x1 || _r3d$l[f1[122]](f1[34549]) != -0x1, window[f1[4545]][f1[34623]] = qwtmhs[f1[27488]] ? qwtmhs[f1[27488]][f1[13050]]() : '', window[f1[4545]][f1[34863]] = ![], window[f1[4545]][f1[34864]] = 0x2;
        if (_r3d$l[f1[122]](f1[35188]) != -0x1) {
            if (qwtmhs[f1[9613]] >= 0x18) window[f1[4545]][f1[34864]] = 0x3;else window[f1[4545]][f1[34864]] = 0x2;
        } else {
            if (_r3d$l[f1[122]](f1[35187]) != -0x1) {
                if (qwtmhs[f1[9613]] && qwtmhs[f1[9613]] >= 0x14) window[f1[4545]][f1[34864]] = 0x3;else {
                    if (voizg[f1[122]](f1[35190]) != -0x1 || voizg[f1[122]](f1[35191]) != -0x1 || voizg[f1[122]](f1[35192]) != -0x1 || voizg[f1[122]](f1[35193]) != -0x1 || voizg[f1[122]](f1[35194]) != -0x1) window[f1[4545]][f1[34864]] = 0x2;else window[f1[4545]][f1[34864]] = 0x3;
                }
            } else window[f1[4545]][f1[34864]] = 0x2;
        }
        console[f1[517]](f1[35195] + window[f1[4545]][f1[34863]] + f1[35196] + window[f1[4545]][f1[34864]]);
    }
}), wx[f1[34791]]({
    'success': function (x1s9ht) {
        console[f1[517]](f1[35197] + x1s9ht[f1[4652]] + f1[35198] + x1s9ht[f1[34793]]);
    }
}), wx[f1[12300]]({
    'success': function (dycore) {
        console[f1[517]](f1[35199] + dycore[f1[14126]]);
    }
}), wx[f1[35200]]({ 'keepScreenOn': !![] }), wx[f1[12302]](function (mst8) {
    console[f1[517]](f1[35199] + mst8[f1[14126]] + f1[35201] + mst8[f1[35202]]);
}), wx[f1[11239]](function (qmths) {
    window[f1[34766]] = qmths, window[f1[34765]] && window[f1[34766]] && (console[f1[80]](f1[34767] + window[f1[34766]][f1[863]]), window[f1[34765]](window[f1[34766]]), window[f1[34766]] = null);
}), window[f1[35203]] = 0x0, window[f1[35204]] = 0x0, window[f1[35205]] = null, wx[f1[35206]](function () {
    window[f1[35204]]++;
    var bzvgi7 = Date[f1[85]]();
    (window[f1[35203]] == 0x0 || bzvgi7 - window[f1[35203]] > 0x1d4c0) && (console[f1[100]](f1[35207]), wx[f1[12564]]());
    if (window[f1[35204]] >= 0x2) {
        window[f1[35204]] = 0x0, console[f1[141]](f1[35208]), wx[f1[35209]]('0', 0x1);
        if (window[f1[4545]] && window[f1[4545]][f1[1165]]) window[f1[34621]](f1[35210], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});