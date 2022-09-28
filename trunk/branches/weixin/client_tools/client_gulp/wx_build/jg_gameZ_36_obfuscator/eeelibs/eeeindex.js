var b = wx.$e;
import ehyrl from '../eeeesdk/eeesdk.js';
window[b[31993]] = { 'wxVersion': window[b[591]][b[31877]] }, window[b[31994]] = ![], window[b[31995]] = 0x1, window[b[31996]] = 0x1, window[b[31997]] = !![], window[b[31998]] = !![], window[b[31999]] = '', window[b[32000]] = ![], window[b[31882]] = {
    'base_cdn': b[32001],
    'cdn': b[32001]
}, e1U0[b[32002]] = {}, e1U0[b[26156]] = '0', e1U0[b[5070]] = window[b[31993]][b[32003]], e1U0[b[31963]] = '', e1U0['os'] = '1', e1U0[b[32004]] = b[32005], e1U0[b[32006]] = b[32007], e1U0[b[32008]] = b[32009], e1U0[b[32010]] = b[32011], e1U0[b[32012]] = b[32013], e1U0[b[12299]] = '1', e1U0[b[26479]] = '', e1U0[b[26481]] = '', e1U0[b[32014]] = 0x0, e1U0[b[32015]] = {}, e1U0[b[32016]] = parseInt(e1U0[b[12299]]), e1U0[b[12308]] = e1U0[b[12299]], e1U0[b[26473]] = {}, e1U0[b[31888]] = b[32017], e1U0[b[32018]] = ![], e1U0[b[12434]] = b[32019], e1U0[b[26442]] = Date[b[85]](), e1U0[b[12015]] = b[32020], e1U0[b[785]] = '_a', e1U0[b[32021]] = 0x2, e1U0[b[107]] = 0x7c1, e1U0[b[32003]] = window[b[31993]][b[32003]], e1U0[b[809]] = ![], e1U0[b[1149]] = ![], e1U0[b[11313]] = ![], e1U0[b[26159]] = ![], window[b[32022]] = 0x5, window[b[32023]] = ![], window[b[31918]] = ![], window[b[31926]] = ![], window[b[32024]] = ![], window[b[32025]] = ![], window[b[32026]] = ![], window[b[32027]] = ![], window[b[32028]] = ![], window[b[32029]] = ![], window[b[32030]] = null, window[b[685]] = function (kd60b) {
    console[b[515]](b[685], kd60b), wx[b[4590]]({}), wx[b[31906]]({
        'title': b[5794],
        'content': kd60b,
        'success'(rzhylt) {
            if (rzhylt[b[32031]]) console[b[515]](b[32032]);else rzhylt[b[587]] && console[b[515]](b[32033]);
        }
    });
}, window[b[32034]] = function (jnsu3) {
    console[b[515]](b[32035], jnsu3), e11U0G(), wx[b[31906]]({
        'title': b[5794],
        'content': jnsu3,
        'confirmText': b[32036],
        'cancelText': b[19104],
        'success'(ecmapo) {
            if (ecmapo[b[32031]]) window[b[31932]]();else ecmapo[b[587]] && (console[b[515]](b[32037]), wx[b[26154]]({}));
        }
    });
}, window[b[32038]] = function ($xg3i) {
    console[b[515]](b[32038], $xg3i), wx[b[31906]]({
        'title': b[5794],
        'content': $xg3i,
        'confirmText': b[26610],
        'showCancel': ![],
        'complete'(zth) {
            console[b[515]](b[32037]), wx[b[26154]]({});
        }
    });
}, window[b[32039]] = ![], window[b[32040]] = function (w8bd0) {
    window[b[32039]] = !![], wx[b[4589]](w8bd0);
}, window[b[32041]] = function () {
    window[b[32039]] && (window[b[32039]] = ![], wx[b[4590]]({}));
}, window[b[32042]] = function (gxlit) {
    window[b[31894]][b[164]][b[32042]](gxlit);
}, window[b[12309]] = function (dk609, xtgi) {
    ehyrl[b[12309]](dk609, function (moaecp) {
        moaecp && moaecp[b[12]] ? moaecp[b[12]][b[1341]] == 0x1 ? xtgi(!![]) : (xtgi(![]), console[b[80]](b[32043] + moaecp[b[12]][b[32044]])) : console[b[515]](b[12309], moaecp);
    });
}, window[b[32045]] = function (kb0d96) {
    console[b[515]](b[32046], kb0d96);
}, window[b[32047]] = function (jgi3x) {}, window[b[32048]] = function (vy_f, bsu69, mc7_a) {}, window[b[32049]] = function (us9n6) {
    console[b[515]](b[32050], us9n6), window[b[31894]][b[164]][b[32051]](), window[b[31894]][b[164]][b[32052]](), window[b[31894]][b[164]][b[32053]]();
}, window[b[32054]] = function (k69sb0) {
    window[b[32055]](0xe, b[32056] + k69sb0), window[b[32034]](b[32057]);
    var k6b9 = {
        'id': window[b[31882]][b[31883]],
        'role': window[b[31882]][b[4381]],
        'level': window[b[31882]][b[31884]],
        'account': window[b[31882]][b[26477]],
        'version': window[b[31882]][b[107]],
        'cdn': window[b[31882]][b[4257]],
        'pkgName': window[b[31882]][b[26479]],
        'gamever': window[b[591]][b[31877]],
        'serverid': window[b[31882]][b[26473]] ? window[b[31882]][b[26473]][b[11489]] : 0x0,
        'systemInfo': window[b[31885]],
        'error': b[32058],
        'stack': k69sb0 ? k69sb0 : b[32057]
    },
        $itlg = JSON[b[4243]](k6b9);
    console[b[141]](b[32059] + $itlg), window[b[31888]]($itlg);
}, window[b[32055]] = function (lit$, om7pca) {
    sendApi(e1U0[b[32008]], b[32060], {
        'game_pkg': e1U0[b[26479]],
        'partner_id': e1U0[b[12299]],
        'server_id': e1U0[b[26473]] && e1U0[b[26473]][b[11489]] > 0x0 ? e1U0[b[26473]][b[11489]] : 0x0,
        'uid': e1U0[b[26477]] > 0x0 ? e1U0[b[26477]] : 0x0,
        'type': lit$,
        'info': om7pca
    });
}, window[b[32061]] = function (s069kb) {
    var cepma = JSON[b[559]](s069kb);
    cepma[b[32062]] = window[b[591]][b[31877]], cepma[b[32063]] = window[b[31882]][b[26473]] ? window[b[31882]][b[26473]][b[11489]] : 0x0, cepma[b[31885]] = window[b[31885]];
    var pce = JSON[b[4243]](cepma);
    console[b[141]](b[32064] + pce), window[b[31888]](pce);
}, window[b[31933]] = function (sunjq, w258) {
    var y7_f4v = {
        'id': window[b[31882]][b[31883]],
        'role': window[b[31882]][b[4381]],
        'level': window[b[31882]][b[31884]],
        'account': window[b[31882]][b[26477]],
        'version': window[b[31882]][b[107]],
        'cdn': window[b[31882]][b[4257]],
        'pkgName': window[b[31882]][b[26479]],
        'gamever': window[b[591]][b[31877]],
        'serverid': window[b[31882]][b[26473]] ? window[b[31882]][b[26473]][b[11489]] : 0x0,
        'systemInfo': window[b[31885]],
        'error': sunjq,
        'stack': w258
    },
        vrhyf = JSON[b[4243]](y7_f4v);
    console[b[100]](b[32065] + vrhyf), window[b[31888]](vrhyf);
}, window[b[31888]] = function ($tigj) {
    if (window[b[31882]][b[31964]] == b[32066]) return;
    var b96s0k = e1U0[b[31888]] + b[32067] + e1U0[b[26477]];
    wx[b[510]]({
        'url': b96s0k,
        'method': b[31806],
        'data': $tigj,
        'header': {
            'content-type': b[32068],
            'cache-control': b[32069]
        },
        'success': function (itgx$l) {
            DEBUG && console[b[515]](b[32070], b96s0k, $tigj, itgx$l);
        },
        'fail': function (jiq$n) {
            DEBUG && console[b[515]](b[32070], b96s0k, $tigj, jiq$n);
        },
        'complete': function () {}
    });
}, window[b[32071]] = function () {
    function g$ixj() {
        return ((0x1 + Math[b[128]]()) * 0x10000 | 0x0)[b[288]](0x10)[b[530]](0x1);
    }
    return g$ixj() + g$ixj() + '-' + g$ixj() + '-' + g$ixj() + '-' + g$ixj() + '+' + g$ixj() + g$ixj() + g$ixj();
}, window[b[31932]] = function () {
    console[b[515]](b[32072]);
    var x3$gji = ehyrl[b[32073]]();
    e1U0[b[12308]] = x3$gji[b[32074]], e1U0[b[32016]] = x3$gji[b[32074]], e1U0[b[12299]] = x3$gji[b[32074]], e1U0[b[26479]] = x3$gji[b[32075]];
    var qj$3i = { 'game_ver': e1U0[b[5070]] };
    e1U0[b[26481]] = this[b[32071]](), e11UG0({ 'title': b[32076] }), ehyrl[b[395]](qj$3i, this[b[32077]][b[76]](this));
}, window[b[32077]] = function (hylrtz) {
    var oc7mp = hylrtz[b[32078]];
    sdkInitRes = hylrtz, console[b[515]](b[32079] + oc7mp + b[32080] + (oc7mp == 0x1) + b[32081] + hylrtz[b[31877]] + b[32082] + window[b[31993]][b[32003]] + b[32083] + hylrtz[b[32084]]);
    if (!hylrtz[b[31877]] || window[b[31897]](window[b[31993]][b[32003]], hylrtz[b[31877]]) < 0x0) console[b[515]](b[32085]), e1U0[b[32006]] = b[32086], e1U0[b[32008]] = b[32087], e1U0[b[32010]] = b[32088], e1U0[b[4257]] = b[32089], e1U0[b[26155]] = b[32090], e1U0[b[32084]] = hylrtz[b[32084]], e1U0[b[809]] = ![];else window[b[31897]](window[b[31993]][b[32003]], hylrtz[b[31877]]) == 0x0 ? (console[b[515]](b[32091]), e1U0[b[32006]] = b[32007], e1U0[b[32008]] = b[32009], e1U0[b[32010]] = b[32011], e1U0[b[4257]] = b[32092], e1U0[b[26155]] = b[32090], e1U0[b[32084]] = b[32093], e1U0[b[809]] = !![]) : (console[b[515]](b[32094]), e1U0[b[32006]] = b[32007], e1U0[b[32008]] = b[32009], e1U0[b[32010]] = b[32011], e1U0[b[4257]] = b[32092], e1U0[b[26155]] = b[32090], e1U0[b[32084]] = b[32093], e1U0[b[809]] = ![]);
    e1U0[b[32014]] = config[b[31668]] ? config[b[31668]] : 0x0, this[b[32095]](), this[b[32096]](), window[b[32097]] = 0x5, e11UG0({ 'title': b[32098] }), ehyrl[b[31798]](this[b[32099]][b[76]](this));
}, window[b[32097]] = 0x5, window[b[32099]] = function (wd85b, ns9q3u) {
    if (wd85b == 0x0 && ns9q3u && ns9q3u[b[31760]]) {
        e1U0[b[32100]] = ns9q3u[b[31760]], e1U0[b[26620]] = ns9q3u[b[26620]];
        var v7a_f4 = this;
        e11UG0({ 'title': b[32101] }), sendApi(e1U0[b[32006]], b[32102], {
            'platform': e1U0[b[32004]],
            'partner_id': e1U0[b[12299]],
            'token': ns9q3u[b[31760]],
            'game_pkg': e1U0[b[26479]],
            'deviceId': e1U0[b[26481]],
            'scene': b[32103] + e1U0[b[32014]]
        }, this[b[32104]][b[76]](this), e1G0U, e101);
    } else ns9q3u && ns9q3u[b[26677]] && window[b[32097]] > 0x0 && (ns9q3u[b[26677]][b[122]](b[32105]) != -0x1 || ns9q3u[b[26677]][b[122]](b[32106]) != -0x1 || ns9q3u[b[26677]][b[122]](b[32107]) != -0x1 || ns9q3u[b[26677]][b[122]](b[32108]) != -0x1 || ns9q3u[b[26677]][b[122]](b[32109]) != -0x1 || ns9q3u[b[26677]][b[122]](b[32110]) != -0x1) ? (window[b[32097]]--, ehyrl[b[31798]](this[b[32099]][b[76]](this))) : (window[b[32055]](0x1, b[32111] + wd85b + b[32112] + (ns9q3u ? ns9q3u[b[26677]] : '')), window[b[31933]](b[32113], JSON[b[4243]]({
        'status': wd85b,
        'data': ns9q3u
    })), window[b[32034]](b[32114] + (ns9q3u && ns9q3u[b[26677]] ? '，' + ns9q3u[b[26677]] : '')));
}, window[b[32104]] = function (kus9) {
    if (!kus9) {
        window[b[32055]](0x2, b[32115]), window[b[31933]](b[32116], b[32117]), window[b[32034]](b[32118]);
        return;
    }
    if (kus9[b[1341]] != b[9791]) {
        window[b[32055]](0x2, b[32119] + kus9[b[1341]]), window[b[31933]](b[32116], JSON[b[4243]](kus9)), window[b[32034]](b[32120] + kus9[b[1341]]);
        return;
    }
    if (kus9[b[32121]] == 0x1) {
        window[b[32034]](b[32122]);
        return;
    }
    e1U0[b[12297]] = String(kus9[b[26477]]), e1U0[b[26477]] = String(kus9[b[26477]]), e1U0[b[26440]] = String(kus9[b[26440]]), e1U0[b[12308]] = String(kus9[b[26440]]), e1U0[b[26480]] = String(kus9[b[26480]]), e1U0[b[32123]] = String(kus9[b[11472]]), e1U0[b[32124]] = String(kus9[b[922]]), e1U0[b[11472]] = '';
    var a7_v4m = this;
    e11UG0({ 'title': b[32125] });
    var y4_f7 = localStorage[b[513]](b[32126] + e1U0[b[26479]] + e1U0[b[26477]]);
    if (y4_f7 && y4_f7 != '') {
        var $ltxig = Number(y4_f7);
        a7_v4m[b[32127]]($ltxig);
    } else a7_v4m[b[32128]]();
}, window[b[32128]] = function () {
    var usb96k = this;
    sendApi(e1U0[b[32006]], b[32129], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, usb96k[b[32130]][b[76]](usb96k), e1G0U, e101);
}, window[b[32130]] = function (hrtlg) {
    if (!hrtlg) {
        window[b[32055]](0x3, b[32131]), window[b[32034]](b[32131]);
        return;
    }
    if (hrtlg[b[1341]] != b[9791]) {
        window[b[32055]](0x3, b[32132] + hrtlg[b[1341]]), window[b[32034]](b[32132] + hrtlg[b[1341]]);
        return;
    }
    if (!hrtlg[b[12]] || hrtlg[b[12]][b[14]] == 0x0) {
        window[b[32055]](0x3, b[32133]), window[b[32034]](b[32134]);
        return;
    }
    this[b[32135]](hrtlg);
}, window[b[32127]] = function (rtzlyh) {
    var bdk056 = this;
    sendApi(e1U0[b[32006]], b[32136], {
        'server_id': rtzlyh,
        'time': Date[b[85]]() / 0x3e8
    }, bdk056[b[32137]][b[76]](bdk056), e1G0U, e101);
}, window[b[32137]] = function (grztl) {
    if (!grztl) {
        window[b[32055]](0x4, b[32138]), this[b[32128]]();
        return;
    }
    if (grztl[b[1341]] != b[9791]) {
        window[b[32055]](0x4, b[32139] + grztl[b[1341]]), this[b[32128]]();
        return;
    }
    if (!grztl[b[12]] || grztl[b[12]][b[14]] == 0x0) {
        window[b[32055]](0x4, b[32140]), this[b[32128]]();
        return;
    }
    this[b[32135]](grztl);
}, window[b[32135]] = function (d0k5b) {
    e1U0[b[695]] = d0k5b[b[32141]] != undefined ? d0k5b[b[32141]] : 0x0, e1U0[b[26473]] = {
        'server_id': String(d0k5b[b[12]][0x0][b[11489]]),
        'server_name': String(d0k5b[b[12]][0x0][b[26478]]),
        'entry_ip': d0k5b[b[12]][0x0][b[26503]],
        'entry_port': parseInt(d0k5b[b[12]][0x0][b[26504]]),
        'status': e1UG1(d0k5b[b[12]][0x0]),
        'start_time': d0k5b[b[12]][0x0][b[32142]],
        'maintain_time': d0k5b[b[12]][0x0][b[32143]] ? d0k5b[b[12]][0x0][b[32143]] : '',
        'is_recommend': d0k5b[b[12]][0x0][b[32144]],
        'cdn': e1U0[b[4257]]
    }, this[b[32145]](), window[b[31894]] && window[b[31894]][b[164]][b[32146]] && window[b[31894]][b[164]][b[32146]](sdkInitRes[b[32147]], sdkInitRes[b[32148]], sdkInitRes[b[32149]], sdkInitRes[b[32150]], sdkInitRes[b[32151]]);
}, window[b[32152]] = null, window[b[32145]] = function () {
    var ku9b = this;
    ehyrl[b[31871]](function (zhtyl) {
        console[b[515]](b[32153] + JSON[b[4243]](zhtyl)), youYiCofig = zhtyl;
        window[b[32152]][b[32154]] == 0x1 && (e1U0[b[695]] = 0x0);
        if (e1U0[b[695]] == 0x1) {
            var u69ns = e1U0[b[26473]][b[113]];
            if (u69ns === -0x1 || u69ns === 0x0) {
                window[b[32055]](0xf, b[32155] + e1U0[b[26473]]['id'] + b[32156] + e1U0[b[26473]][b[113]]), window[b[32034]](u69ns === -0x1 ? b[32157] : b[32158]);
                return;
            }
            e101GU(0x0, e1U0[b[26473]][b[11489]]), window[b[31894]][b[164]][b[32159]](e1U0[b[695]]);
        } else window[b[31894]][b[164]][b[32160]](() => {
            var wd2 = window[b[32152]][b[32161]],
                fyzvhr = window[b[32152]][b[32154]] == 0x1;
            fyzvhr && window[b[31894]][b[164]][b[32162]](b[32163], wd2, b[31816]);
        }, ku9b), e11U0G();
        window[b[32028]] = !![], window[b[31919]](), window[b[31920]]();
    });
}, window[b[32164]] = function () {
    ehyrl[b[31872]](function (hglrxt) {
        console[b[515]](b[32165] + JSON[b[4243]](hglrxt));
    });
}, window[b[32095]] = function () {
    sendApi(e1U0[b[32006]], b[32166], {
        'game_pkg': e1U0[b[26479]],
        'version_name': e1U0[b[32084]]
    }, this[b[32167]][b[76]](this), e1G0U, e101);
}, window[b[32167]] = function (sn9u6) {
    if (!sn9u6) {
        window[b[32055]](0x5, b[32168]), window[b[32034]](b[32168]);
        return;
    }
    if (sn9u6[b[1341]] != b[9791]) {
        window[b[32055]](0x5, b[32169] + sn9u6[b[1341]]), window[b[32034]](b[32169] + sn9u6[b[1341]]);
        return;
    }
    if (!sn9u6[b[12]] || !sn9u6[b[12]][b[5070]]) {
        window[b[32055]](0x5, b[32170] + (sn9u6[b[12]] && sn9u6[b[12]][b[5070]])), window[b[32034]](b[32170] + (sn9u6[b[12]] && sn9u6[b[12]][b[5070]]));
        return;
    }
    sn9u6[b[12]][b[32171]] && sn9u6[b[12]][b[32171]][b[14]] > 0xa && (e1U0[b[32172]] = sn9u6[b[12]][b[32171]], e1U0[b[4257]] = sn9u6[b[12]][b[32171]]), sn9u6[b[12]][b[5070]] && (e1U0[b[107]] = sn9u6[b[12]][b[5070]]), console[b[80]](b[26617] + e1U0[b[107]] + b[32173] + e1U0[b[32084]]), window[b[32026]] = !![], window[b[31919]](), window[b[31920]]();
}, window[b[32174]], window[b[32096]] = function () {
    sendApi(e1U0[b[32006]], b[32175], { 'game_pkg': e1U0[b[26479]] }, this[b[32176]][b[76]](this), e1G0U, e101);
}, window[b[32176]] = function (oc_7) {
    if (oc_7 && oc_7[b[1341]] === b[9791] && oc_7[b[12]]) {
        window[b[32174]] = oc_7[b[12]];
        for (var cmo_7 in oc_7[b[12]]) {
            e1U0[cmo_7] = oc_7[b[12]][cmo_7];
        }
        window[b[32177]]();
    } else window[b[32055]](0xb, b[32178]), console[b[80]](b[32179] + oc_7[b[1341]]);
    window[b[32027]] = !![], window[b[31920]]();
}, window[b[32177]] = function () {
    var i$gj3 = e1U0[b[809]] || e1U0[b[26369]] && e1U0[b[26369]] > 0x0;
    if (i$gj3) {
        var a4_7v = e1U0[b[26370]],
            inq3j = a4_7v && a4_7v[b[14]] == 0x9;
        inq3j && (window[b[28933]] = a4_7v);
        var hx$lg = e1U0[b[26371]],
            fv47_ = hx$lg && hx$lg[b[16]]('#')[b[14]] == 0x4;
        fv47_ && (window[b[12117]] = hx$lg);
    }
}, window[b[32180]] = function (g$jx3, ghtrlz, jnus3, v_f4z, xt$, suqnj3, zytrlh, p7oamc, hxrtl, v_y7f) {
    xt$ = String(xt$);
    var squk9 = zytrlh,
        _af7 = p7oamc;
    e1U0[b[32002]][xt$] = {
        'productid': xt$,
        'productname': squk9,
        'productdesc': _af7,
        'roleid': g$jx3,
        'rolename': ghtrlz,
        'rolelevel': jnus3,
        'price': suqnj3,
        'callback': hxrtl
    }, sendApi(e1U0[b[32010]], b[32181], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'server_name': e1U0[b[26473]][b[26478]],
        'level': jnus3,
        'uid': e1U0[b[26477]],
        'role_id': g$jx3,
        'role_name': ghtrlz,
        'product_id': xt$,
        'product_name': squk9,
        'product_desc': _af7,
        'money': suqnj3,
        'partner_id': e1U0[b[12299]]
    }, toPayCallBack, e1G0U, e101);
}, window[b[32182]] = function (hlztrg) {
    if (hlztrg && (hlztrg[b[32183]] === 0xc8 || hlztrg[b[1341]] == b[9791])) {
        var lgtxi = e1U0[b[32002]][String(hlztrg[b[32184]])];
        if (lgtxi[b[361]]) lgtxi[b[361]](hlztrg[b[32184]], hlztrg[b[32185]], -0x1);
        ehyrl[b[31835]]({
            'cpbill': hlztrg[b[32185]],
            'productid': hlztrg[b[32184]],
            'productname': lgtxi[b[32186]],
            'productdesc': lgtxi[b[32187]],
            'serverid': e1U0[b[26473]][b[11489]],
            'servername': e1U0[b[26473]][b[26478]],
            'roleid': lgtxi[b[12303]],
            'rolename': lgtxi[b[12304]],
            'rolelevel': lgtxi[b[32188]],
            'price': lgtxi[b[28324]],
            'extension': JSON[b[4243]]({ 'cp_order_id': hlztrg[b[32185]] })
        }, function (zv4_fy, qj$x) {
            lgtxi[b[361]] && zv4_fy == 0x0 && lgtxi[b[361]](hlztrg[b[32184]], hlztrg[b[32185]], zv4_fy);
            console[b[80]](JSON[b[4243]]({
                'type': b[32189],
                'status': zv4_fy,
                'data': hlztrg,
                'role_name': lgtxi[b[12304]]
            }));
            if (zv4_fy === 0x0) {} else {
                if (zv4_fy === 0x1) {} else {
                    if (zv4_fy === 0x2) {}
                }
            }
        });
    } else {
        var a47vf_ = hlztrg ? b[32190] + hlztrg[b[32183]] + b[32191] + hlztrg[b[1341]] + b[32192] + hlztrg[b[80]] : b[32193];
        window[b[32055]](0xd, b[32194] + a47vf_), alert(a47vf_);
    }
}, window[b[32195]] = function () {}, window[b[32196]] = function (dw51, jq3, glx$ht, fv4_7, sjnu3) {
    ehyrl[b[31867]](e1U0[b[26473]][b[11489]], e1U0[b[26473]][b[26478]] || e1U0[b[26473]][b[11489]], dw51, jq3, glx$ht), sendApi(e1U0[b[32006]], b[32197], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'role_id': dw51,
        'uid': e1U0[b[26477]],
        'role_name': jq3,
        'role_type': fv4_7,
        'level': glx$ht
    });
}, window[b[32198]] = function (_4fyz, vfy7, _7va4f, wd8b5, d860b, i$, n9suq, zvryfh, x$gi3, tzlg) {
    e1U0[b[31883]] = _4fyz, e1U0[b[4381]] = vfy7, e1U0[b[31884]] = _7va4f, ehyrl[b[31868]](e1U0[b[26473]][b[11489]], e1U0[b[26473]][b[26478]] || e1U0[b[26473]][b[11489]], _4fyz, vfy7, _7va4f), sendApi(e1U0[b[32006]], b[32199], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'role_id': _4fyz,
        'uid': e1U0[b[26477]],
        'role_name': vfy7,
        'role_type': wd8b5,
        'level': _7va4f,
        'evolution': d860b
    });
}, window[b[32200]] = function (vyrzf4, p7cmoa, i3jg$, ryzvfh, q$xj3i, glixt, sb609k, thz, lti, qsj3un) {
    e1U0[b[31883]] = vyrzf4, e1U0[b[4381]] = p7cmoa, e1U0[b[31884]] = i3jg$, ehyrl[b[31869]](e1U0[b[26473]][b[11489]], e1U0[b[26473]][b[26478]] || e1U0[b[26473]][b[11489]], vyrzf4, p7cmoa, i3jg$), sendApi(e1U0[b[32006]], b[32199], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'role_id': vyrzf4,
        'uid': e1U0[b[26477]],
        'role_name': p7cmoa,
        'role_type': ryzvfh,
        'level': i3jg$,
        'evolution': q$xj3i
    });
}, window[b[32201]] = function (a7mc_4) {}, window[b[32202]] = function ($3iq, suk9nq) {
    ehyrl[b[31818]](b[31818], { 'activity_id': suk9nq }, function (y4v7f) {
        $3iq && $3iq(y4v7f);
    });
}, window[b[24499]] = function () {
    ehyrl[b[24499]]();
}, window[b[32203]] = function () {
    ehyrl[b[24378]]();
}, window[b[32204]] = function (tligx$, vf_a7, nk9, grtlx, d9k, qnij$3, k9b6d, s9qunk) {
    s9qunk = s9qunk || e1U0[b[26473]][b[11489]], sendApi(e1U0[b[32006]], b[32205], {
        'phone': tligx$,
        'role_id': vf_a7,
        'uid': e1U0[b[26477]],
        'game_pkg': e1U0[b[26479]],
        'partner_id': e1U0[b[12299]],
        'server_id': s9qunk
    }, k9b6d, 0x2, null, function () {
        return !![];
    });
}, window[b[10804]] = function (k50d) {
    window[b[31983]] = k50d, window[b[31983]] && window[b[31982]] && (console[b[80]](b[31984] + window[b[31982]][b[847]]), window[b[31983]](window[b[31982]]), window[b[31982]] = null);
}, window[b[32206]] = function (db08, unsqk9, ksnq9u, $ixgj) {
    window[b[24]](b[32207], {
        'game_pkg': window[b[31882]][b[26479]],
        'role_id': unsqk9,
        'server_id': ksnq9u
    }, $ixgj);
}, window[b[32208]] = function (j3ig$x, ju3qni, cm47) {
    function yzhr(junsq3) {
        var d152w = [],
            vyhfrz = [],
            _vyf4 = cm47 || window[b[591]][b[32209]];
        for (var fy_74 in _vyf4) {
            var ksqnu9 = Number(fy_74);
            (!j3ig$x || !j3ig$x[b[14]] || j3ig$x[b[122]](ksqnu9) != -0x1) && (vyhfrz[b[31]](_vyf4[fy_74]), d152w[b[31]]([ksqnu9, 0x3]));
        }
        window[b[31897]](window[b[31898]], b[32210]) >= 0x0 ? (console[b[515]](b[32211]), ehyrl[b[31864]] && ehyrl[b[31864]](vyhfrz, function (_fav4) {
            console[b[515]](b[32212]), console[b[515]](_fav4);
            if (_fav4 && _fav4[b[26677]] == b[32213]) for (var opaemc in _vyf4) {
                if (_fav4[_vyf4[opaemc]] == b[32214]) {
                    var zrlthy = Number(opaemc);
                    for (var i$q3jx = 0x0; i$q3jx < d152w[b[14]]; i$q3jx++) {
                        if (d152w[i$q3jx][0x0] == zrlthy) {
                            d152w[i$q3jx][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[b[31897]](window[b[31898]], b[32215]) >= 0x0 ? wx[b[32216]]({
                'withSubscriptions': !![],
                'success': function (q9usn) {
                    var kd5b6 = q9usn[b[32217]][b[32218]];
                    if (kd5b6) {
                        console[b[515]](b[32219]), console[b[515]](kd5b6);
                        for (var yzr4vf in _vyf4) {
                            if (kd5b6[_vyf4[yzr4vf]] == b[32214]) {
                                var u3qjns = Number(yzr4vf);
                                for (var $i3gjx = 0x0; $i3gjx < d152w[b[14]]; $i3gjx++) {
                                    if (d152w[$i3gjx][0x0] == u3qjns) {
                                        d152w[$i3gjx][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[b[515]](d152w), ju3qni && ju3qni(d152w);
                    } else console[b[515]](b[32220]), console[b[515]](q9usn), console[b[515]](d152w), ju3qni && ju3qni(d152w);
                },
                'fail': function () {
                    console[b[515]](b[32221]), console[b[515]](d152w), ju3qni && ju3qni(d152w);
                }
            }) : (console[b[515]](b[32222] + window[b[31898]]), console[b[515]](d152w), ju3qni && ju3qni(d152w));
        })) : (console[b[515]](b[32223] + window[b[31898]]), console[b[515]](d152w), ju3qni && ju3qni(d152w)), wx[b[32224]](yzhr);
    }
    wx[b[32225]](yzhr);
}, window[b[32226]] = {
    'isSuccess': ![],
    'level': b[32227],
    'isCharging': ![]
}, window[b[13451]] = function (b96) {
    wx[b[31974]]({
        'success': function (i$tgj) {
            var j$gxit = window[b[32226]];
            j$gxit[b[32228]] = !![], j$gxit[b[4357]] = Number(i$tgj[b[4357]])[b[3974]](0x0), j$gxit[b[31977]] = i$tgj[b[31977]], b96 && b96(j$gxit[b[32228]], j$gxit[b[4357]], j$gxit[b[31977]]);
        },
        'fail': function (hxlgt$) {
            console[b[515]](b[32229], hxlgt$[b[26677]]);
            var v4y_ = window[b[32226]];
            b96 && b96(v4y_[b[32228]], v4y_[b[4357]], v4y_[b[31977]]);
        }
    });
}, window[b[11870]] = function (zyf4v_) {
    wx[b[11870]]({
        'success': function (hlrfzy) {
            zyf4v_ && zyf4v_(!![], hlrfzy);
        },
        'fail': function (w812) {
            zyf4v_ && zyf4v_(![], w812);
        }
    });
}, window[b[11872]] = function (ecopm) {
    if (ecopm) wx[b[11872]](ecopm);
}, window[b[26150]] = function (_v4fa) {
    wx[b[26150]](_v4fa);
}, window[b[24]] = function ($ni3q, paocme, lth$gx, qun3ij, v4m, v4yfz_, cmpeao, htgxl) {
    if (qun3ij == undefined) qun3ij = 0x1;
    wx[b[510]]({
        'url': $ni3q,
        'method': cmpeao || b[26353],
        'responseType': b[4160],
        'data': paocme,
        'header': { 'content-type': htgxl || b[32068] },
        'success': function (yrthzl) {
            DEBUG && console[b[515]](b[32230], $ni3q, info, yrthzl);
            if (yrthzl && yrthzl[b[26747]] == 0xc8) {
                var afv7 = yrthzl[b[12]];
                !v4yfz_ || v4yfz_(afv7) ? lth$gx && lth$gx(afv7) : window[b[32231]]($ni3q, paocme, lth$gx, qun3ij, v4m, v4yfz_, yrthzl);
            } else window[b[32231]]($ni3q, paocme, lth$gx, qun3ij, v4m, v4yfz_, yrthzl);
        },
        'fail': function (wd580b) {
            DEBUG && console[b[515]](b[32232], $ni3q, info, wd580b), window[b[32231]]($ni3q, paocme, lth$gx, qun3ij, v4m, v4yfz_, wd580b);
        },
        'complete': function () {}
    });
}, window[b[32231]] = function (vyrzhf, aoc7m, gjt$xi, tyrzhl, hgxl$t, cm4, zlrth) {
    tyrzhl - 0x1 > 0x0 ? setTimeout(function () {
        window[b[24]](vyrzhf, aoc7m, gjt$xi, tyrzhl - 0x1, hgxl$t, cm4);
    }, 0x3e8) : hgxl$t && hgxl$t(JSON[b[4243]]({
        'url': vyrzhf,
        'response': zlrth
    }));
}, window[b[32233]] = function (gj$i3x, xthglr, su69kn, c_4am, knus, jgxi$3, w285d0) {
    !su69kn && (su69kn = {});
    var _4vfzy = Math[b[127]](Date[b[85]]() / 0x3e8);
    su69kn[b[922]] = _4vfzy, su69kn[b[32234]] = xthglr;
    var gijxt = Object[b[279]](su69kn)[b[1154]](),
        bu9 = '',
        f74_ = '';
    for (var tlzh = 0x0; tlzh < gijxt[b[14]]; tlzh++) {
        bu9 = bu9 + (tlzh == 0x0 ? '' : '&') + gijxt[tlzh] + su69kn[gijxt[tlzh]], f74_ = f74_ + (tlzh == 0x0 ? '' : '&') + gijxt[tlzh] + '=' + encodeURIComponent(su69kn[gijxt[tlzh]]);
    }
    bu9 = bu9 + e1U0[b[32012]];
    var k0b9d = b[32235] + md5(bu9);
    send(gj$i3x + '?' + f74_ + (f74_ == '' ? '' : '&') + k0b9d, null, c_4am, knus, jgxi$3, w285d0 || function (sq9un) {
        return sq9un[b[1341]] == b[9791];
    }, null, b[31807]);
}, window[b[32236]] = function (hlgrzt, nsu9q) {
    var x$tgli = 0x0;
    e1U0[b[26473]] && (x$tgli = e1U0[b[26473]][b[11489]]), sendApi(e1U0[b[32008]], b[32237], {
        'partnerId': e1U0[b[12299]],
        'gamePkg': e1U0[b[26479]],
        'logTime': Math[b[127]](Date[b[85]]() / 0x3e8),
        'platformUid': e1U0[b[26480]],
        'type': hlgrzt,
        'serverId': x$tgli
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[b[32238]] = function (zhfl) {
    sendApi(e1U0[b[32006]], b[32239], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, e1U0G1, e1G0U, e101);
}, window[b[32240]] = function (t$jigx) {
    if (t$jigx && t$jigx[b[1341]] === b[9791] && t$jigx[b[12]]) {
        t$jigx[b[12]][b[5270]]({
            'id': -0x2,
            'name': b[32241]
        }), t$jigx[b[12]][b[5270]]({
            'id': -0x1,
            'name': b[32242]
        }), e1U0[b[32243]] = t$jigx[b[12]];
        if (window[b[12481]]) window[b[12481]][b[32244]]();
    } else {
        e1U0[b[32245]] = ![];
        var u9kb = t$jigx ? t$jigx[b[1341]] : '';
        window[b[32055]](0x7, b[32246] + u9kb), window[b[32034]](b[32247] + u9kb);
    }
}, window[b[32248]] = function (c7mp) {
    sendApi(e1U0[b[32006]], b[32249], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, e11UG, e1G0U, e101);
}, window[b[32250]] = function (w8520) {
    e1U0[b[32251]] = ![];
    if (w8520 && w8520[b[1341]] === b[9791] && w8520[b[12]]) {
        for (var t$gix = 0x0; t$gix < w8520[b[12]][b[14]]; t$gix++) {
            w8520[b[12]][t$gix][b[113]] = e1UG1(w8520[b[12]][t$gix]);
        }
        e1U0[b[32015]][-0x1] = window[b[32252]](w8520[b[12]]), window[b[12481]][b[32253]](-0x1);
    } else {
        var $lxtgi = w8520 ? w8520[b[1341]] : '';
        window[b[32055]](0x8, b[32254] + $lxtgi), window[b[32034]](b[32255] + $lxtgi);
    }
}, window[b[32256]] = function (cm74a) {
    sendApi(e1U0[b[32006]], b[32249], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, cm74a, e1G0U, e101);
}, window[b[32257]] = function (kqusn, xiltg$) {
    sendApi(e1U0[b[32006]], b[32258], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]],
        'server_group_id': xiltg$
    }, e1GU1, e1G0U, e101);
}, window[b[32259]] = function (hgtxr) {
    e1U0[b[32251]] = ![];
    if (hgtxr && hgtxr[b[1341]] === b[9791] && hgtxr[b[12]] && hgtxr[b[12]][b[12]]) {
        var pm7co = hgtxr[b[12]][b[32260]],
            f_vy47 = [];
        for (var $j3ixq = 0x0; $j3ixq < hgtxr[b[12]][b[12]][b[14]]; $j3ixq++) {
            hgtxr[b[12]][b[12]][$j3ixq][b[113]] = e1UG1(hgtxr[b[12]][b[12]][$j3ixq]), (f_vy47[b[14]] == 0x0 || hgtxr[b[12]][b[12]][$j3ixq][b[113]] != 0x0) && (f_vy47[f_vy47[b[14]]] = hgtxr[b[12]][b[12]][$j3ixq]);
        }
        e1U0[b[32015]][pm7co] = window[b[32252]](f_vy47), window[b[12481]][b[32253]](pm7co);
    } else {
        var d568 = hgtxr ? hgtxr[b[1341]] : '';
        window[b[32055]](0x9, b[32261] + d568), window[b[32034]](b[32262] + d568);
    }
}, window[b[32263]] = function ($ixj3q) {
    sendApi(e1U0[b[32006]], b[32264], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, reqServerRecommendCallBack, e1G0U, e101);
}, window[b[32265]] = function (ti$gxj) {
    e1U0[b[32251]] = ![];
    if (ti$gxj && ti$gxj[b[1341]] === b[9791] && ti$gxj[b[12]]) {
        for (var gtl = 0x0; gtl < ti$gxj[b[12]][b[14]]; gtl++) {
            ti$gxj[b[12]][gtl][b[113]] = e1UG1(ti$gxj[b[12]][gtl]);
        }
        e1U0[b[32015]][-0x2] = window[b[32252]](ti$gxj[b[12]]), window[b[12481]][b[32253]](-0x2);
    } else {
        var hzlr = ti$gxj ? ti$gxj[b[1341]] : '';
        window[b[32055]](0xa, b[32266] + hzlr), alert(b[32267] + hzlr);
    }
}, window[b[32252]] = function (ligt) {
    return ligt;
}, window[b[32268]] = function ($iltx, g$itj) {
    $iltx = $iltx || e1U0[b[26473]][b[11489]], sendApi(e1U0[b[32006]], b[32269], {
        'type': '4',
        'game_pkg': e1U0[b[26479]],
        'server_id': $iltx
    }, g$itj);
}, window[b[32270]] = function (x$g3ji, u3jsq, db085w, m_4c) {
    db085w = db085w || e1U0[b[26473]][b[11489]], sendApi(e1U0[b[32006]], b[32271], {
        'type': x$g3ji,
        'game_pkg': u3jsq,
        'server_id': db085w
    }, m_4c);
}, window[b[32272]] = function (acm7_, nkq9s) {
    sendApi(e1U0[b[32006]], b[32273], { 'game_pkg': acm7_ }, nkq9s);
}, window[b[32274]] = function (x3i$jg) {
    if (x3i$jg) {
        if (x3i$jg[b[113]] == 0x1) {
            if (x3i$jg[b[32275]] == 0x3) return 0x3;else return x3i$jg[b[32275]] == 0x1 ? 0x2 : 0x1;
        } else return x3i$jg[b[113]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[b[32276]] = function (lhtry, rzvyf) {
    var zvfrh = window[b[32152]][b[32154]] == 0x1;
    if (zvfrh) {
        var yvfrz4 = window[b[32152]][b[32161]],
            zvfrh = window[b[32152]][b[32154]] == 0x1;
        window[b[31894]][b[164]][b[32162]](b[32163], yvfrz4, b[31816]);
        return;
    }
    e1U0[b[32277]] = {
        'step': lhtry,
        'server_id': rzvyf
    };
    var skuq9n = this;
    e11UG0({ 'title': b[32278] }), sendApi(e1U0[b[32006]], b[32279], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'game_pkg': e1U0[b[26479]],
        'server_id': rzvyf,
        'platform': e1U0[b[26440]],
        'platform_uid': e1U0[b[26480]],
        'check_login_time': e1U0[b[32124]],
        'check_login_sign': e1U0[b[32123]],
        'version_name': e1U0[b[32084]]
    }, e101UG, e1G0U, e101, function ($qjn3i) {
        return $qjn3i[b[1341]] == b[9791] || $qjn3i[b[80]] == b[32280] || $qjn3i[b[80]] == b[32281];
    });
}, window[b[32282]] = function (uqjns) {
    var u3sn9 = this;
    if (uqjns && uqjns[b[1341]] === b[9791] && uqjns[b[12]]) {
        var hlzrfy = e1U0[b[26473]];
        hlzrfy[b[32283]] = e1U0[b[32016]], hlzrfy[b[11472]] = String(uqjns[b[12]][b[32284]]), hlzrfy[b[26442]] = parseInt(uqjns[b[12]][b[922]]);
        if (uqjns[b[12]][b[26441]]) hlzrfy[b[26441]] = parseInt(uqjns[b[12]][b[26441]]);else hlzrfy[b[26441]] = parseInt(uqjns[b[12]][b[11489]]);
        hlzrfy[b[32285]] = 0x0, hlzrfy[b[4257]] = e1U0[b[32172]], hlzrfy[b[32286]] = uqjns[b[12]][b[32287]], hlzrfy[b[32288]] = uqjns[b[12]][b[32288]];
        if (uqjns[b[12]][b[26445]]) hlzrfy[b[26445]] = parseInt(uqjns[b[12]][b[26445]]);
        console[b[515]](b[32289] + JSON[b[4243]](hlzrfy[b[32288]])), e1U0[b[695]] == 0x1 && hlzrfy[b[32288]] && hlzrfy[b[32288]][b[32290]] == 0x1 && (e1U0[b[32291]] = 0x1, window[b[31894]][b[164]][b[32292]]()), e10G1U();
    } else {
        if (e1U0[b[32277]][b[6865]] >= 0x3) {
            var u6n9s = uqjns ? uqjns[b[1341]] : '';
            window[b[32055]](0xc, b[32293] + u6n9s), e101(JSON[b[4243]](uqjns)), window[b[32034]](b[32294] + u6n9s);
        } else sendApi(e1U0[b[32006]], b[32102], {
            'platform': e1U0[b[32004]],
            'partner_id': e1U0[b[12299]],
            'token': e1U0[b[32100]],
            'game_pkg': e1U0[b[26479]],
            'deviceId': e1U0[b[26481]],
            'scene': b[32103] + e1U0[b[32014]]
        }, function (pmoe) {
            if (!pmoe || pmoe[b[1341]] != b[9791]) {
                window[b[32034]](b[32120] + pmoe && pmoe[b[1341]]);
                return;
            }
            e1U0[b[32123]] = String(pmoe[b[11472]]), e1U0[b[32124]] = String(pmoe[b[922]]), setTimeout(function () {
                e101GU(e1U0[b[32277]][b[6865]] + 0x1, e1U0[b[32277]][b[11489]]);
            }, 0x5dc);
        }, e1G0U, e101, function (hfzvy) {
            return hfzvy[b[1341]] == b[9791] || hfzvy[b[1341]] == b[26825];
        });
    }
}, window[b[32295]] = function () {
    ServerLoading[b[164]][b[32159]](e1U0[b[695]]), window[b[32023]] = !![], window[b[31920]]();
}, window[b[31919]] = function () {
    if (window[b[31918]] && window[b[31926]] && window[b[32024]] && window[b[32025]] && window[b[32026]] && window[b[32028]]) {
        if (!window[b[31354]][b[164]]) {
            console[b[515]](b[32296] + window[b[31354]][b[164]]);
            var unjqi = wx[b[26136]](),
                aemoc = unjqi[b[847]] ? unjqi[b[847]] : 0x0,
                v_74am = {
                'cdn': window[b[31882]][b[4257]],
                'spareCdn': window[b[31882]][b[26155]],
                'newRegister': window[b[31882]][b[695]],
                'wxPC': window[b[31882]][b[26159]],
                'wxIOS': window[b[31882]][b[1149]],
                'wxAndroid': window[b[31882]][b[11313]],
                'wxParam': {
                    'limitLoad': window[b[31882]][b[31965]],
                    'benchmarkLevel': window[b[31882]][b[31966]],
                    'wxFrom': window[b[591]][b[31668]] == b[32297] ? 0x1 : 0x0,
                    'wxSDKVersion': window[b[31898]]
                },
                'configType': window[b[31882]][b[12015]],
                'exposeType': window[b[31882]][b[785]],
                'scene': aemoc
            };
            new window[b[31354]](v_74am, window[b[31882]][b[107]], window[b[31999]]);
        }
    }
}, window[b[31920]] = function () {
    if (window[b[31918]] && window[b[31926]] && window[b[32024]] && window[b[32025]] && window[b[32026]] && window[b[32028]] && window[b[32023]] && window[b[32027]]) {
        e11U0G();
        if (!e10GU) {
            e10GU = !![];
            if (!window[b[31354]][b[164]]) window[b[31919]]();
            var ghxlr = 0x0,
                nq$i = wx[b[32298]]();
            nq$i && (window[b[31882]][b[31961]] && (ghxlr = nq$i[b[345]]), console[b[80]](b[32299] + nq$i[b[345]] + b[32300] + nq$i[b[1368]] + b[32301] + nq$i[b[1370]] + b[32302] + nq$i[b[1369]] + b[32303] + nq$i[b[195]] + b[32304] + nq$i[b[196]]));
            var pmo = {};
            for (const am_7c4 in e1U0[b[26473]]) {
                pmo[am_7c4] = e1U0[b[26473]][am_7c4];
            }
            var c7mpo = {
                'channel': window[b[31882]][b[12308]],
                'account': window[b[31882]][b[26477]],
                'userId': window[b[31882]][b[12297]],
                'cdn': window[b[31882]][b[4257]],
                'data': window[b[31882]][b[12]],
                'package': window[b[31882]][b[26156]],
                'newRegister': window[b[31882]][b[695]],
                'pkgName': window[b[31882]][b[26479]],
                'partnerId': window[b[31882]][b[12299]],
                'platform_uid': window[b[31882]][b[26480]],
                'deviceId': window[b[31882]][b[26481]],
                'selectedServer': pmo,
                'configType': window[b[31882]][b[12015]],
                'exposeType': window[b[31882]][b[785]],
                'debugUsers': window[b[31882]][b[12434]],
                'wxMenuTop': ghxlr,
                'wxShield': window[b[31882]][b[809]],
                'wx_channel': window[b[31882]][b[26620]]
            };
            if (window[b[32174]]) for (var w8db5 in window[b[32174]]) {
                c7mpo[w8db5] = window[b[32174]][w8db5];
            }
            window[b[31354]][b[164]][b[26495]](c7mpo);
            if (e1U0[b[26473]] && e1U0[b[26473]][b[11489]]) localStorage[b[518]](b[32126] + e1U0[b[26479]] + e1U0[b[26477]], e1U0[b[26473]][b[11489]]);
        }
    } else console[b[80]](b[32305] + window[b[31918]] + b[32306] + window[b[31926]] + b[32307] + window[b[32024]] + b[32308] + window[b[32025]] + b[32309] + window[b[32026]] + b[32310] + window[b[32028]] + b[32311] + window[b[32023]] + b[32312] + window[b[32027]]);
}, window[b[32313]] = function (a4m7_v) {
    if (!window[b[12148]]) {
        console[b[141]](b[32314]);
        return;
    }
    var n9uqk = a4m7_v[b[372]];
    n9uqk == 0x1 ? window[b[12148]][b[67]](0x2327, a4m7_v) : window[b[12148]][b[83]](0x2327);
};