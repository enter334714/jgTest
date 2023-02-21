var b = wx.$e;
import enqus9k from '../eeeesdk/eeesdk.js';
window[b[27145]] = { 'wxVersion': window[b[593]][b[35058]] }, window[b[35172]] = ![], window[b[35173]] = 0x1, window[b[35174]] = 0x1, window[b[35175]] = !![], window[b[35176]] = !![], window[b[35177]] = '', window[b[35178]] = ![], window[b[4545]] = {
    'base_cdn': b[35179],
    'cdn': b[35179]
}, e1U0[b[35180]] = {}, e1U0[b[27178]] = '0', e1U0[b[5374]] = window[b[27145]][b[35181]], e1U0[b[35142]] = '', e1U0['os'] = '1', e1U0[b[35182]] = b[35183], e1U0[b[35184]] = b[35185], e1U0[b[35186]] = b[35187], e1U0[b[35188]] = b[35189], e1U0[b[35190]] = b[35191], e1U0[b[12806]] = '1', e1U0[b[27536]] = '', e1U0[b[27538]] = '', e1U0[b[35192]] = 0x0, e1U0[b[35193]] = {}, e1U0[b[35194]] = parseInt(e1U0[b[12806]]), e1U0[b[12815]] = e1U0[b[12806]], e1U0[b[27530]] = {}, e1U0[b[35068]] = b[35195], e1U0[b[35196]] = ![], e1U0[b[12953]] = b[35197], e1U0[b[27490]] = Date[b[85]](), e1U0[b[4544]] = b[35198], e1U0[b[785]] = '_a', e1U0[b[27690]] = '', e1U0[b[35199]] = 0x2, e1U0[b[107]] = 0x7c1, e1U0[b[35181]] = window[b[27145]][b[35181]], e1U0[b[807]] = ![], e1U0[b[1165]] = ![], e1U0[b[11747]] = ![], e1U0[b[27180]] = ![], window[b[35200]] = 0x5, window[b[35201]] = ![], window[b[35098]] = ![], window[b[35106]] = ![], window[b[35202]] = ![], window[b[35203]] = ![], window[b[35204]] = ![], window[b[35205]] = ![], window[b[35206]] = ![], window[b[35207]] = ![], window[b[35208]] = null, window[b[688]] = function (oaec) {
    console[b[517]](b[688], oaec), wx[b[4887]]({}), wx[b[35086]]({
        'title': b[6132],
        'content': oaec,
        'success'(lhgrxt) {
            if (lhgrxt[b[35209]]) console[b[517]](b[35210]);else lhgrxt[b[589]] && console[b[517]](b[35211]);
        }
    });
}, window[b[35212]] = function (ltxg) {
    console[b[517]](b[35213], ltxg), e11U0G(), wx[b[35086]]({
        'title': b[6132],
        'content': ltxg,
        'confirmText': b[35214],
        'cancelText': b[19857],
        'success'(jsqu) {
            if (jsqu[b[35209]]) window[b[35112]]();else jsqu[b[589]] && (console[b[517]](b[35215]), wx[b[27176]]({}));
        }
    });
}, window[b[35216]] = function (y_f4) {
    console[b[517]](b[35216], y_f4), wx[b[35086]]({
        'title': b[6132],
        'content': y_f4,
        'confirmText': b[27674],
        'showCancel': ![],
        'complete'(j3xi$) {
            console[b[517]](b[35215]), wx[b[27176]]({});
        }
    });
}, window[b[35217]] = ![], window[b[35218]] = function (xigjt) {
    window[b[35217]] = !![], wx[b[4886]](xigjt);
}, window[b[35219]] = function () {
    window[b[35217]] && (window[b[35217]] = ![], wx[b[4887]]({}));
}, window[b[35220]] = function (d0b69k) {
    window[b[35074]][b[164]][b[35220]](d0b69k);
}, window[b[12822]] = function (k9u6sb, cap) {
    enqus9k[b[12822]](k9u6sb, function (pcoeam) {
        pcoeam && pcoeam[b[12]] ? pcoeam[b[12]][b[1406]] == 0x1 ? cap(!![]) : (cap(![]), console[b[80]](b[35221] + pcoeam[b[12]][b[35222]])) : console[b[517]](b[12822], pcoeam);
    });
}, window[b[35223]] = function (y4frvz) {
    console[b[517]](b[35224], y4frvz);
}, window[b[35225]] = function (ij3$xg) {}, window[b[35226]] = function (w80b5, k96ub, fzhlyr) {}, window[b[35227]] = function (u93sn) {
    console[b[517]](b[35228], u93sn), window[b[35074]][b[164]][b[35229]](), window[b[35074]][b[164]][b[35230]](), window[b[35074]][b[164]][b[35231]](), window[b[35232]]();
}, window[b[35233]] = function (a7cmpo) {
    window[b[35234]](0xe, b[35235] + a7cmpo), window[b[35212]](b[35236]);
    var yht = {
        'id': window[b[4545]][b[35063]],
        'role': window[b[4545]][b[4676]],
        'level': window[b[4545]][b[35064]],
        'account': window[b[4545]][b[27534]],
        'version': window[b[4545]][b[107]],
        'cdn': window[b[4545]][b[4542]],
        'pkgName': window[b[4545]][b[27536]],
        'gamever': window[b[593]][b[35058]],
        'serverid': window[b[4545]][b[27530]] ? window[b[4545]][b[27530]][b[11919]] : 0x0,
        'systemInfo': window[b[35065]],
        'error': b[35237],
        'stack': a7cmpo ? a7cmpo : b[35236]
    },
        i3j = JSON[b[4528]](yht);
    console[b[141]](b[35238] + i3j), window[b[35068]](i3j);
}, window[b[35234]] = function (qkns, fv_z4y) {
    sendApi(e1U0[b[35186]], b[35239], {
        'game_pkg': e1U0[b[27536]],
        'partner_id': e1U0[b[12806]],
        'server_id': e1U0[b[27530]] && e1U0[b[27530]][b[11919]] > 0x0 ? e1U0[b[27530]][b[11919]] : 0x0,
        'uid': e1U0[b[27534]] > 0x0 ? e1U0[b[27534]] : 0x0,
        'type': qkns,
        'info': fv_z4y
    });
}, window[b[35240]] = function ($igtj) {
    var vhrzfy = JSON[b[561]]($igtj);
    vhrzfy[b[35241]] = window[b[593]][b[35058]], vhrzfy[b[35242]] = window[b[4545]][b[27530]] ? window[b[4545]][b[27530]][b[11919]] : 0x0, vhrzfy[b[35065]] = window[b[35065]];
    var pmo7ca = JSON[b[4528]](vhrzfy);
    console[b[141]](b[35243] + pmo7ca), window[b[35068]](pmo7ca);
}, window[b[35113]] = function (mpca7, til$x) {
    var k9bs6u = {
        'id': window[b[4545]][b[35063]],
        'role': window[b[4545]][b[4676]],
        'level': window[b[4545]][b[35064]],
        'account': window[b[4545]][b[27534]],
        'version': window[b[4545]][b[107]],
        'cdn': window[b[4545]][b[4542]],
        'pkgName': window[b[4545]][b[27536]],
        'gamever': window[b[593]][b[35058]],
        'serverid': window[b[4545]][b[27530]] ? window[b[4545]][b[27530]][b[11919]] : 0x0,
        'systemInfo': window[b[35065]],
        'error': mpca7,
        'stack': til$x
    },
        fzr = JSON[b[4528]](k9bs6u);
    console[b[100]](b[35244] + fzr), window[b[35068]](fzr);
}, window[b[35068]] = function (yzflrh) {
    if (window[b[4545]][b[35143]] == b[35245]) return;
    var fv_7y4 = e1U0[b[35068]] + b[35246] + e1U0[b[27534]];
    wx[b[512]]({
        'url': fv_7y4,
        'method': b[34559],
        'data': yzflrh,
        'header': {
            'content-type': b[35247],
            'cache-control': b[35248]
        },
        'success': function (zrvfy4) {
            DEBUG && console[b[517]](b[35249], fv_7y4, yzflrh, zrvfy4);
        },
        'fail': function (qunsj) {
            DEBUG && console[b[517]](b[35249], fv_7y4, yzflrh, qunsj);
        },
        'complete': function () {}
    });
}, window[b[35250]] = function () {
    function d6kb5() {
        return ((0x1 + Math[b[128]]()) * 0x10000 | 0x0)[b[290]](0x10)[b[532]](0x1);
    }
    return d6kb5() + d6kb5() + '-' + d6kb5() + '-' + d6kb5() + '-' + d6kb5() + '+' + d6kb5() + d6kb5() + d6kb5();
}, window[b[35112]] = function () {
    console[b[517]](b[35251]);
    var jqu3 = enqus9k[b[33061]]();
    e1U0[b[12815]] = jqu3[b[35252]], e1U0[b[35194]] = jqu3[b[35252]], e1U0[b[12806]] = jqu3[b[35252]], e1U0[b[27536]] = jqu3[b[35253]];
    var hrlty = { 'game_ver': e1U0[b[5374]] };
    e1U0[b[27538]] = this[b[35250]](), e11UG0({ 'title': b[35254] }), enqus9k[b[398]](hrlty, this[b[35255]][b[76]](this));
}, window[b[35255]] = function (yrhlz) {
    var jx$i = yrhlz[b[35256]];
    sdkInitRes = yrhlz, console[b[517]](b[35257] + jx$i + b[35258] + (jx$i == 0x1) + b[35259] + yrhlz[b[35058]] + b[35260] + window[b[27145]][b[35181]] + b[35261] + yrhlz[b[4546]]);
    if (!yrhlz[b[35058]] || window[b[35077]](window[b[27145]][b[35181]], yrhlz[b[35058]]) < 0x0) console[b[517]](b[35262]), e1U0[b[35184]] = b[35263], e1U0[b[35186]] = b[35264], e1U0[b[35188]] = b[35265], e1U0[b[4542]] = b[35266], e1U0[b[27177]] = b[35267], e1U0[b[4546]] = yrhlz[b[4546]], e1U0[b[807]] = ![];else window[b[35077]](window[b[27145]][b[35181]], yrhlz[b[35058]]) == 0x0 ? (console[b[517]](b[35268]), e1U0[b[35184]] = b[35185], e1U0[b[35186]] = b[35187], e1U0[b[35188]] = b[35189], e1U0[b[4542]] = b[35269], e1U0[b[27177]] = b[35267], e1U0[b[4546]] = b[35270], e1U0[b[807]] = !![]) : (console[b[517]](b[35271]), e1U0[b[35184]] = b[35185], e1U0[b[35186]] = b[35187], e1U0[b[35188]] = b[35189], e1U0[b[4542]] = b[35269], e1U0[b[27177]] = b[35267], e1U0[b[4546]] = b[35270], e1U0[b[807]] = ![]);
    e1U0[b[35192]] = config[b[31199]] ? config[b[31199]] : 0x0, this[b[35272]](), this[b[35273]](), window[b[35274]] = 0x5, e11UG0({ 'title': b[35275] }), enqus9k[b[34550]](this[b[35276]][b[76]](this));
}, window[b[35274]] = 0x5, window[b[35276]] = function (amo7, $itgl) {
    if (amo7 == 0x0 && $itgl && $itgl[b[35031]]) {
        e1U0[b[35277]] = $itgl[b[35031]], e1U0[b[27688]] = $itgl[b[27688]], e1U0[b[27683]] = $itgl[b[27683]], e1U0[b[27689]] = $itgl[b[27689]], e1U0[b[27682]] = $itgl[b[27682]];
        var d5w802 = this;
        e11UG0({ 'title': b[35278] }), sendApi(e1U0[b[35184]], b[35279], {
            'platform': e1U0[b[35182]],
            'partner_id': e1U0[b[12806]],
            'token': $itgl[b[35031]],
            'game_pkg': e1U0[b[27536]],
            'deviceId': e1U0[b[27538]],
            'scene': b[35280] + e1U0[b[35192]]
        }, this[b[35281]][b[76]](this), e1G0U, e101);
    } else $itgl && $itgl[b[27747]] && window[b[35274]] > 0x0 && ($itgl[b[27747]][b[122]](b[35282]) != -0x1 || $itgl[b[27747]][b[122]](b[35283]) != -0x1 || $itgl[b[27747]][b[122]](b[35284]) != -0x1 || $itgl[b[27747]][b[122]](b[35285]) != -0x1 || $itgl[b[27747]][b[122]](b[35286]) != -0x1 || $itgl[b[27747]][b[122]](b[35287]) != -0x1) ? (window[b[35274]]--, enqus9k[b[34550]](this[b[35276]][b[76]](this))) : (window[b[35234]](0x1, b[35288] + amo7 + b[35289] + ($itgl ? $itgl[b[27747]] : '')), window[b[35113]](b[35290], JSON[b[4528]]({
        'status': amo7,
        'data': $itgl
    })), window[b[35212]](b[35291] + ($itgl && $itgl[b[27747]] ? '，' + $itgl[b[27747]] : '')));
}, window[b[35281]] = function (ks906) {
    if (!ks906) {
        window[b[35234]](0x2, b[35292]), window[b[35113]](b[35293], b[35294]), window[b[35212]](b[35295]);
        return;
    }
    if (ks906[b[1406]] != b[10230]) {
        window[b[35234]](0x2, b[35296] + ks906[b[1406]]), window[b[35113]](b[35293], JSON[b[4528]](ks906)), window[b[35212]](b[35297] + ks906[b[1406]]);
        return;
    }
    if (ks906[b[35298]] == 0x1) {
        window[b[35212]](b[35299]);
        return;
    }
    e1U0[b[12804]] = String(ks906[b[27534]]), e1U0[b[27534]] = String(ks906[b[27534]]), e1U0[b[27488]] = String(ks906[b[27488]]), e1U0[b[12815]] = String(ks906[b[27488]]), e1U0[b[27537]] = String(ks906[b[27537]]), e1U0[b[35300]] = String(ks906[b[11902]]), e1U0[b[35301]] = String(ks906[b[938]]), e1U0[b[11902]] = '';
    var su6b9 = this;
    e11UG0({ 'title': b[35302] });
    var lixg = localStorage[b[515]](b[35303] + e1U0[b[27536]] + e1U0[b[27534]]);
    if (lixg && lixg != '') {
        var xjtg = Number(lixg);
        su6b9[b[35304]](xjtg);
    } else su6b9[b[35305]]();
}, window[b[35305]] = function () {
    var yzfv4_ = this;
    sendApi(e1U0[b[35184]], b[35306], {
        'partner_id': e1U0[b[12806]],
        'uid': e1U0[b[27534]],
        'version': e1U0[b[5374]],
        'game_pkg': e1U0[b[27536]],
        'device': e1U0[b[27538]]
    }, yzfv4_[b[35307]][b[76]](yzfv4_), e1G0U, e101);
}, window[b[35307]] = function (a_f7v) {
    if (!a_f7v) {
        window[b[35234]](0x3, b[35308]), window[b[35212]](b[35308]);
        return;
    }
    if (a_f7v[b[1406]] != b[10230]) {
        window[b[35234]](0x3, b[35309] + a_f7v[b[1406]]), window[b[35212]](b[35309] + a_f7v[b[1406]]);
        return;
    }
    if (!a_f7v[b[12]] || a_f7v[b[12]][b[14]] == 0x0) {
        window[b[35234]](0x3, b[35310]), window[b[35212]](b[35311]);
        return;
    }
    this[b[35312]](a_f7v);
}, window[b[35304]] = function (pocam) {
    var sb906k = this;
    sendApi(e1U0[b[35184]], b[35313], {
        'server_id': pocam,
        'time': Date[b[85]]() / 0x3e8
    }, sb906k[b[35314]][b[76]](sb906k), e1G0U, e101);
}, window[b[35314]] = function (d0w285) {
    if (!d0w285) {
        window[b[35234]](0x4, b[35315]), this[b[35305]]();
        return;
    }
    if (d0w285[b[1406]] != b[10230]) {
        window[b[35234]](0x4, b[35316] + d0w285[b[1406]]), this[b[35305]]();
        return;
    }
    if (!d0w285[b[12]] || d0w285[b[12]][b[14]] == 0x0) {
        window[b[35234]](0x4, b[35317]), this[b[35305]]();
        return;
    }
    this[b[35312]](d0w285);
}, window[b[35312]] = function (acmeo) {
    e1U0[b[699]] = acmeo[b[35318]] != undefined ? acmeo[b[35318]] : 0x0, e1U0[b[27530]] = {
        'server_id': String(acmeo[b[12]][0x0][b[11919]]),
        'server_name': String(acmeo[b[12]][0x0][b[27535]]),
        'entry_ip': acmeo[b[12]][0x0][b[27560]],
        'entry_port': parseInt(acmeo[b[12]][0x0][b[27561]]),
        'status': e1UG1(acmeo[b[12]][0x0]),
        'start_time': acmeo[b[12]][0x0][b[35319]],
        'maintain_time': acmeo[b[12]][0x0][b[35320]] ? acmeo[b[12]][0x0][b[35320]] : '',
        'is_recommend': acmeo[b[12]][0x0][b[35321]],
        'cdn': e1U0[b[4542]]
    }, this[b[35322]](), window[b[35074]] && window[b[35074]][b[164]][b[35323]] && window[b[35074]][b[164]][b[35323]](sdkInitRes[b[35324]], sdkInitRes[b[35325]], sdkInitRes[b[35326]], sdkInitRes[b[35327]], sdkInitRes[b[35328]]);
}, window[b[35329]] = null, window[b[35322]] = function () {
    var $3gijx = this;
    enqus9k[b[34624]](function (li$) {
        console[b[517]](b[35330] + JSON[b[4528]](li$)), youYiCofig = li$;
        window[b[35329]][b[35331]] == 0x1 && (e1U0[b[699]] = 0x0);
        if (e1U0[b[699]] == 0x1) {
            var frhyz = e1U0[b[27530]][b[113]];
            if (frhyz === -0x1 || frhyz === 0x0) {
                window[b[35234]](0xf, b[35332] + e1U0[b[27530]]['id'] + b[35333] + e1U0[b[27530]][b[113]]), window[b[35212]](frhyz === -0x1 ? b[35334] : b[35335]);
                return;
            }
            e101GU(0x0, e1U0[b[27530]][b[11919]]), window[b[35074]][b[164]][b[35336]](e1U0[b[699]]);
        } else window[b[35074]][b[164]][b[35337]](() => {
            var hxrtg = window[b[35329]][b[35338]],
                n9kqus = window[b[35329]][b[35331]] == 0x1;
            n9kqus && window[b[35074]][b[164]][b[35339]](b[35340], hxrtg, b[34569]);
        }, $3gijx), e11U0G();
        window[b[35206]] = !![], window[b[35341]](), window[b[35099]](), window[b[35100]]();
    });
}, window[b[35342]] = function () {
    enqus9k[b[34625]](function (d802w) {
        console[b[517]](b[35343] + JSON[b[4528]](d802w));
    });
}, window[b[35272]] = function () {
    sendApi(e1U0[b[35184]], b[35344], {
        'game_pkg': e1U0[b[27536]],
        'version_name': e1U0[b[4546]]
    }, this[b[35345]][b[76]](this), e1G0U, e101);
}, window[b[35345]] = function (jxtig) {
    if (!jxtig) {
        window[b[35234]](0x5, b[35346]), window[b[35212]](b[35346]);
        return;
    }
    if (jxtig[b[1406]] != b[10230]) {
        window[b[35234]](0x5, b[35347] + jxtig[b[1406]]), window[b[35212]](b[35347] + jxtig[b[1406]]);
        return;
    }
    if (!jxtig[b[12]] || !jxtig[b[12]][b[5374]]) {
        window[b[35234]](0x5, b[35348] + (jxtig[b[12]] && jxtig[b[12]][b[5374]])), window[b[35212]](b[35348] + (jxtig[b[12]] && jxtig[b[12]][b[5374]]));
        return;
    }
    jxtig[b[12]][b[35349]] && jxtig[b[12]][b[35349]][b[14]] > 0xa && (e1U0[b[35350]] = jxtig[b[12]][b[35349]], e1U0[b[4542]] = jxtig[b[12]][b[35349]]), jxtig[b[12]][b[5374]] && (e1U0[b[107]] = jxtig[b[12]][b[5374]]), console[b[80]](b[27685] + e1U0[b[107]] + b[35351] + e1U0[b[4546]]), window[b[35204]] = !![], window[b[35099]](), window[b[35100]]();
}, window[b[35352]], window[b[35273]] = function () {
    sendApi(e1U0[b[35184]], b[35353], { 'game_pkg': e1U0[b[27536]] }, this[b[35354]][b[76]](this), e1G0U, e101);
}, window[b[35354]] = function (xlgthr) {
    if (xlgthr && xlgthr[b[1406]] === b[10230] && xlgthr[b[12]]) {
        window[b[35352]] = xlgthr[b[12]];
        for (var tg$hxl in xlgthr[b[12]]) {
            e1U0[tg$hxl] = xlgthr[b[12]][tg$hxl];
        }
    } else window[b[35234]](0xb, b[35355]), console[b[80]](b[35356] + xlgthr[b[1406]]);
    window[b[35205]] = !![], window[b[35341]](), window[b[35100]]();
}, window[b[35341]] = function () {
    if (!window[b[35206]] || !window[b[35205]]) return;
    var snk9qu = e1U0[b[699]] == 0x1,
        hfzyv = e1U0[b[807]],
        a4m7c = e1U0[b[27414]] && e1U0[b[27414]] > 0x0;
    if (hfzyv || snk9qu && a4m7c) {
        var xtj$i = e1U0[b[27415]],
            kb065 = xtj$i && xtj$i[b[14]] == 0x9;
        kb065 && (window[b[30118]] = xtj$i);
        var qj3$in = e1U0[b[27416]],
            jx3i = qj3$in && qj3$in[b[16]]('#')[b[14]] == 0x4;
        jx3i && (window[b[30119]] = qj3$in);
    }
}, window[b[35232]] = function () {
    window[b[30118]] = null, window[b[30119]] = null;
}, window[b[35357]] = function (iq3ujn, _yz4f, hrfyzl, squnj, $hlxtg, g$ht, tgrlx, zlthry, f4z_yv, d65b0k) {
    $hlxtg = String($hlxtg);
    var _74fva = tgrlx,
        v4fa7_ = zlthry;
    e1U0[b[35180]][$hlxtg] = {
        'productid': $hlxtg,
        'productname': _74fva,
        'productdesc': v4fa7_,
        'roleid': iq3ujn,
        'rolename': _yz4f,
        'rolelevel': hrfyzl,
        'price': g$ht,
        'callback': f4z_yv
    }, sendApi(e1U0[b[35188]], b[35358], {
        'game_pkg': e1U0[b[27536]],
        'server_id': e1U0[b[27530]][b[11919]],
        'server_name': e1U0[b[27530]][b[27535]],
        'level': hrfyzl,
        'uid': e1U0[b[27534]],
        'role_id': iq3ujn,
        'role_name': _yz4f,
        'product_id': $hlxtg,
        'product_name': _74fva,
        'product_desc': v4fa7_,
        'money': g$ht,
        'partner_id': e1U0[b[12806]]
    }, toPayCallBack, e1G0U, e101);
}, window[b[35359]] = function (k5b) {
    if (k5b && (k5b[b[35360]] === 0xc8 || k5b[b[1406]] == b[10230])) {
        var kbd690 = e1U0[b[35180]][String(k5b[b[35361]])];
        if (kbd690[b[363]]) kbd690[b[363]](k5b[b[35361]], k5b[b[35362]], -0x1);
        enqus9k[b[34588]]({
            'cpbill': k5b[b[35362]],
            'productid': k5b[b[35361]],
            'productname': kbd690[b[35363]],
            'productdesc': kbd690[b[35364]],
            'serverid': e1U0[b[27530]][b[11919]],
            'servername': e1U0[b[27530]][b[27535]],
            'roleid': kbd690[b[12810]],
            'rolename': kbd690[b[12811]],
            'rolelevel': kbd690[b[35365]],
            'price': kbd690[b[29517]],
            'extension': JSON[b[4528]]({ 'cp_order_id': k5b[b[35362]] })
        }, function (w1d82, k9bsu) {
            kbd690[b[363]] && w1d82 == 0x0 && kbd690[b[363]](k5b[b[35361]], k5b[b[35362]], w1d82);
            console[b[80]](JSON[b[4528]]({
                'type': b[35366],
                'status': w1d82,
                'data': k5b,
                'role_name': kbd690[b[12811]]
            }));
            if (w1d82 === 0x0) {} else {
                if (w1d82 === 0x1) {} else {
                    if (w1d82 === 0x2) {}
                }
            }
        });
    } else {
        var rzy4fv = k5b ? b[35367] + k5b[b[35360]] + b[35368] + k5b[b[1406]] + b[35369] + k5b[b[80]] : b[35370];
        window[b[35234]](0xd, b[35371] + rzy4fv), alert(rzy4fv);
    }
}, window[b[35372]] = function () {}, window[b[35373]] = function (qj3nus, qiuj3n, $3xjgi, itlgx, xrlthg) {
    enqus9k[b[34620]](e1U0[b[27530]][b[11919]], e1U0[b[27530]][b[27535]] || e1U0[b[27530]][b[11919]], qj3nus, qiuj3n, $3xjgi), sendApi(e1U0[b[35184]], b[35374], {
        'game_pkg': e1U0[b[27536]],
        'server_id': e1U0[b[27530]][b[11919]],
        'role_id': qj3nus,
        'uid': e1U0[b[27534]],
        'role_name': qiuj3n,
        'role_type': itlgx,
        'level': $3xjgi
    });
}, window[b[35375]] = function (nsuq3, vy4fz_, ca7o_m, $gixjt, yv4fz, hltgrx, lyfr, nui3q, co_m7, b5wd08) {
    e1U0[b[35063]] = nsuq3, e1U0[b[4676]] = vy4fz_, e1U0[b[35064]] = ca7o_m, enqus9k[b[34621]](e1U0[b[27530]][b[11919]], e1U0[b[27530]][b[27535]] || e1U0[b[27530]][b[11919]], nsuq3, vy4fz_, ca7o_m), sendApi(e1U0[b[35184]], b[35376], {
        'game_pkg': e1U0[b[27536]],
        'server_id': e1U0[b[27530]][b[11919]],
        'role_id': nsuq3,
        'uid': e1U0[b[27534]],
        'role_name': vy4fz_,
        'role_type': $gixjt,
        'level': ca7o_m,
        'evolution': yv4fz
    });
}, window[b[35377]] = function (g3xj, qijn3, vyz4_f, rz4vyf, c7ma_o, xhrtlg, lhrfyz, uk6sb, $xigt, $xtigj) {
    e1U0[b[35063]] = g3xj, e1U0[b[4676]] = qijn3, e1U0[b[35064]] = vyz4_f, enqus9k[b[34622]](e1U0[b[27530]][b[11919]], e1U0[b[27530]][b[27535]] || e1U0[b[27530]][b[11919]], g3xj, qijn3, vyz4_f), sendApi(e1U0[b[35184]], b[35376], {
        'game_pkg': e1U0[b[27536]],
        'server_id': e1U0[b[27530]][b[11919]],
        'role_id': g3xj,
        'uid': e1U0[b[27534]],
        'role_name': qijn3,
        'role_type': rz4vyf,
        'level': vyz4_f,
        'evolution': c7ma_o
    });
}, window[b[35378]] = function (c4a_7) {}, window[b[35379]] = function (jq3ix, lxtgrh) {
    enqus9k[b[34571]](b[34571], { 'activity_id': lxtgrh }, function (yf47_) {
        jq3ix && jq3ix(yf47_);
    });
}, window[b[25337]] = function () {
    enqus9k[b[25337]]();
}, window[b[35380]] = function () {
    enqus9k[b[25213]]();
}, window[b[35381]] = function ($tjg, _fzvy, _fa, glt$x, jqun, fva_4, aomcep, rhxt) {
    rhxt = rhxt || e1U0[b[27530]][b[11919]], sendApi(e1U0[b[35184]], b[35382], {
        'phone': $tjg,
        'role_id': _fzvy,
        'uid': e1U0[b[27534]],
        'game_pkg': e1U0[b[27536]],
        'partner_id': e1U0[b[12806]],
        'server_id': rhxt
    }, aomcep, 0x2, null, function () {
        return !![];
    });
}, window[b[11239]] = function (f_4zyv) {
    window[b[35162]] = f_4zyv, window[b[35162]] && window[b[35161]] && (console[b[80]](b[35163] + window[b[35161]][b[863]]), window[b[35162]](window[b[35161]]), window[b[35161]] = null);
}, window[b[35383]] = function (sbuk, q$3, lfrhyz, i3j$qn) {
    window[b[24]](b[35384], {
        'game_pkg': window[b[4545]][b[27536]],
        'role_id': q$3,
        'server_id': lfrhyz
    }, i3j$qn);
}, window[b[35385]] = function (suq39, nsqu9, k69d) {
    function ks6nu(kb5d6) {
        var $3niqj = [],
            gtxji = [],
            zrfhly = k69d || window[b[593]][b[35386]];
        for (var yhlz in zrfhly) {
            var yrlzh = Number(yhlz);
            (!suq39 || !suq39[b[14]] || suq39[b[122]](yrlzh) != -0x1) && (gtxji[b[31]](zrfhly[yhlz]), $3niqj[b[31]]([yrlzh, 0x3]));
        }
        window[b[35077]](window[b[35078]], b[35387]) >= 0x0 ? (console[b[517]](b[35388]), enqus9k[b[34617]] && enqus9k[b[34617]](gtxji, function (u3nq9) {
            console[b[517]](b[35389]), console[b[517]](u3nq9);
            if (u3nq9 && u3nq9[b[27747]] == b[35390]) for (var coapm in zrfhly) {
                if (u3nq9[zrfhly[coapm]] == b[35391]) {
                    var u96skn = Number(coapm);
                    for (var bu96k = 0x0; bu96k < $3niqj[b[14]]; bu96k++) {
                        if ($3niqj[bu96k][0x0] == u96skn) {
                            $3niqj[bu96k][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[b[35077]](window[b[35078]], b[35392]) >= 0x0 ? wx[b[35393]]({
                'withSubscriptions': !![],
                'success': function (ghztrl) {
                    var n3iuqj = ghztrl[b[35394]][b[35395]];
                    if (n3iuqj) {
                        console[b[517]](b[35396]), console[b[517]](n3iuqj);
                        for (var lthrgx in zrfhly) {
                            if (n3iuqj[zrfhly[lthrgx]] == b[35391]) {
                                var jnqus = Number(lthrgx);
                                for (var cm_ao = 0x0; cm_ao < $3niqj[b[14]]; cm_ao++) {
                                    if ($3niqj[cm_ao][0x0] == jnqus) {
                                        $3niqj[cm_ao][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[b[517]]($3niqj), nsqu9 && nsqu9($3niqj);
                    } else console[b[517]](b[35397]), console[b[517]](ghztrl), console[b[517]]($3niqj), nsqu9 && nsqu9($3niqj);
                },
                'fail': function () {
                    console[b[517]](b[35398]), console[b[517]]($3niqj), nsqu9 && nsqu9($3niqj);
                }
            }) : (console[b[517]](b[35399] + window[b[35078]]), console[b[517]]($3niqj), nsqu9 && nsqu9($3niqj));
        })) : (console[b[517]](b[35400] + window[b[35078]]), console[b[517]]($3niqj), nsqu9 && nsqu9($3niqj)), wx[b[35401]](ks6nu);
    }
    wx[b[35402]](ks6nu);
}, window[b[35403]] = {
    'isSuccess': ![],
    'level': b[31209],
    'isCharging': ![]
}, window[b[14136]] = function (yv47_) {
    wx[b[35153]]({
        'success': function (_coam) {
            var vy_7f4 = window[b[35403]];
            vy_7f4[b[35404]] = !![], vy_7f4[b[4652]] = Number(_coam[b[4652]])[b[4233]](0x0), vy_7f4[b[35156]] = _coam[b[35156]], yv47_ && yv47_(vy_7f4[b[35404]], vy_7f4[b[4652]], vy_7f4[b[35156]]);
        },
        'fail': function (zyf) {
            console[b[517]](b[35405], zyf[b[27747]]);
            var zhyf = window[b[35403]];
            yv47_ && yv47_(zhyf[b[35404]], zhyf[b[4652]], zhyf[b[35156]]);
        }
    });
}, window[b[12300]] = function (qs3u9n) {
    wx[b[12300]]({
        'success': function (n3jusq) {
            qs3u9n && qs3u9n(!![], n3jusq);
        },
        'fail': function (xj$igt) {
            qs3u9n && qs3u9n(![], xj$igt);
        }
    });
}, window[b[12302]] = function (m7c_ao) {
    if (m7c_ao) wx[b[12302]](m7c_ao);
}, window[b[27172]] = function (iq$x) {
    wx[b[27172]](iq$x);
}, window[b[24]] = function (paocm, o7cm_, usb6k9, epomc, a7f4_, fv4ry, p7maco, ryhl) {
    if (epomc == undefined) epomc = 0x1;
    wx[b[512]]({
        'url': paocm,
        'method': p7maco || b[27398],
        'responseType': b[4437],
        'data': o7cm_,
        'header': { 'content-type': ryhl || b[35247] },
        'success': function (unsj3q) {
            DEBUG && console[b[517]](b[35406], paocm, info, unsj3q);
            if (unsj3q && unsj3q[b[27816]] == 0xc8) {
                var b60kd5 = unsj3q[b[12]];
                !fv4ry || fv4ry(b60kd5) ? usb6k9 && usb6k9(b60kd5) : window[b[35407]](paocm, o7cm_, usb6k9, epomc, a7f4_, fv4ry, unsj3q);
            } else window[b[35407]](paocm, o7cm_, usb6k9, epomc, a7f4_, fv4ry, unsj3q);
        },
        'fail': function (m7_ao) {
            DEBUG && console[b[517]](b[35408], paocm, info, m7_ao), window[b[35407]](paocm, o7cm_, usb6k9, epomc, a7f4_, fv4ry, m7_ao);
        },
        'complete': function () {}
    });
}, window[b[35407]] = function (xiq, n6ks9, hzyltr, rhztlg, a_cmo7, itjg, k0d9) {
    rhztlg - 0x1 > 0x0 ? setTimeout(function () {
        window[b[24]](xiq, n6ks9, hzyltr, rhztlg - 0x1, a_cmo7, itjg);
    }, 0x3e8) : a_cmo7 && a_cmo7(JSON[b[4528]]({
        'url': xiq,
        'response': k0d9
    }));
}, window[b[35409]] = function (ijq3, yzvrf4, y7_fv4, gltxr, v4yf7, gxi3j$, qu39s) {
    !y7_fv4 && (y7_fv4 = {});
    var qn9u = Math[b[127]](Date[b[85]]() / 0x3e8);
    y7_fv4[b[938]] = qn9u, y7_fv4[b[35410]] = yzvrf4;
    var _74avm = Object[b[281]](y7_fv4)[b[1170]](),
        i$jtgx = '',
        oacp7m = '';
    for (var niujq = 0x0; niujq < _74avm[b[14]]; niujq++) {
        i$jtgx = i$jtgx + (niujq == 0x0 ? '' : '&') + _74avm[niujq] + y7_fv4[_74avm[niujq]], oacp7m = oacp7m + (niujq == 0x0 ? '' : '&') + _74avm[niujq] + '=' + encodeURIComponent(y7_fv4[_74avm[niujq]]);
    }
    i$jtgx = i$jtgx + e1U0[b[35190]];
    var $in3q = b[35411] + md5(i$jtgx);
    send(ijq3 + '?' + oacp7m + (oacp7m == '' ? '' : '&') + $in3q, null, gltxr, v4yf7, gxi3j$, qu39s || function (meoac) {
        return meoac[b[1406]] == b[10230];
    }, null, b[34560]);
}, window[b[35412]] = function (itlx, txlrh) {
    var $lixgt = 0x0;
    e1U0[b[27530]] && ($lixgt = e1U0[b[27530]][b[11919]]), sendApi(e1U0[b[35186]], b[35413], {
        'partnerId': e1U0[b[12806]],
        'gamePkg': e1U0[b[27536]],
        'logTime': Math[b[127]](Date[b[85]]() / 0x3e8),
        'platformUid': e1U0[b[27537]],
        'type': itlx,
        'serverId': $lixgt
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[b[35414]] = function (htlrzy) {
    sendApi(e1U0[b[35184]], b[35415], {
        'partner_id': e1U0[b[12806]],
        'uid': e1U0[b[27534]],
        'version': e1U0[b[5374]],
        'game_pkg': e1U0[b[27536]],
        'device': e1U0[b[27538]]
    }, e1U0G1, e1G0U, e101);
}, window[b[35416]] = function (_zf4v) {
    if (_zf4v && _zf4v[b[1406]] === b[10230] && _zf4v[b[12]]) {
        _zf4v[b[12]][b[5565]]({
            'id': -0x2,
            'name': b[35417]
        }), _zf4v[b[12]][b[5565]]({
            'id': -0x1,
            'name': b[35418]
        }), e1U0[b[35419]] = _zf4v[b[12]];
        if (window[b[13000]]) window[b[13000]][b[35420]]();
    } else {
        e1U0[b[35421]] = ![];
        var xi$lt = _zf4v ? _zf4v[b[1406]] : '';
        window[b[35234]](0x7, b[35422] + xi$lt), window[b[35212]](b[35423] + xi$lt);
    }
}, window[b[35424]] = function (vrzhyf) {
    sendApi(e1U0[b[35184]], b[35425], {
        'partner_id': e1U0[b[12806]],
        'uid': e1U0[b[27534]],
        'version': e1U0[b[5374]],
        'game_pkg': e1U0[b[27536]],
        'device': e1U0[b[27538]]
    }, e11UG, e1G0U, e101);
}, window[b[35426]] = function (rtlghz) {
    e1U0[b[35427]] = ![];
    if (rtlghz && rtlghz[b[1406]] === b[10230] && rtlghz[b[12]]) {
        for (var skun6 = 0x0; skun6 < rtlghz[b[12]][b[14]]; skun6++) {
            rtlghz[b[12]][skun6][b[113]] = e1UG1(rtlghz[b[12]][skun6]);
        }
        e1U0[b[35193]][-0x1] = window[b[35428]](rtlghz[b[12]]), window[b[13000]][b[35429]](-0x1);
    } else {
        var rgztlh = rtlghz ? rtlghz[b[1406]] : '';
        window[b[35234]](0x8, b[35430] + rgztlh), window[b[35212]](b[35431] + rgztlh);
    }
}, window[b[35432]] = function (tyrhzl) {
    sendApi(e1U0[b[35184]], b[35425], {
        'partner_id': e1U0[b[12806]],
        'uid': e1U0[b[27534]],
        'version': e1U0[b[5374]],
        'game_pkg': e1U0[b[27536]],
        'device': e1U0[b[27538]]
    }, tyrhzl, e1G0U, e101);
}, window[b[35433]] = function (d0k5b, zr4yvf) {
    sendApi(e1U0[b[35184]], b[35434], {
        'partner_id': e1U0[b[12806]],
        'uid': e1U0[b[27534]],
        'version': e1U0[b[5374]],
        'game_pkg': e1U0[b[27536]],
        'device': e1U0[b[27538]],
        'server_group_id': zr4yvf
    }, e1GU1, e1G0U, e101);
}, window[b[35435]] = function (x3ij$) {
    e1U0[b[35427]] = ![];
    if (x3ij$ && x3ij$[b[1406]] === b[10230] && x3ij$[b[12]] && x3ij$[b[12]][b[12]]) {
        var k5d6b0 = x3ij$[b[12]][b[35436]],
            lhx$g = [];
        for (var ixgt$j = 0x0; ixgt$j < x3ij$[b[12]][b[12]][b[14]]; ixgt$j++) {
            x3ij$[b[12]][b[12]][ixgt$j][b[113]] = e1UG1(x3ij$[b[12]][b[12]][ixgt$j]), (lhx$g[b[14]] == 0x0 || x3ij$[b[12]][b[12]][ixgt$j][b[113]] != 0x0) && (lhx$g[lhx$g[b[14]]] = x3ij$[b[12]][b[12]][ixgt$j]);
        }
        e1U0[b[35193]][k5d6b0] = window[b[35428]](lhx$g), window[b[13000]][b[35429]](k5d6b0);
    } else {
        var q$xi3j = x3ij$ ? x3ij$[b[1406]] : '';
        window[b[35234]](0x9, b[35437] + q$xi3j), window[b[35212]](b[35438] + q$xi3j);
    }
}, window[b[35439]] = function (zgrhtl) {
    sendApi(e1U0[b[35184]], b[35440], {
        'partner_id': e1U0[b[12806]],
        'uid': e1U0[b[27534]],
        'version': e1U0[b[5374]],
        'game_pkg': e1U0[b[27536]],
        'device': e1U0[b[27538]]
    }, reqServerRecommendCallBack, e1G0U, e101);
}, window[b[35441]] = function (q9kns) {
    e1U0[b[35427]] = ![];
    if (q9kns && q9kns[b[1406]] === b[10230] && q9kns[b[12]]) {
        for (var rlgxth = 0x0; rlgxth < q9kns[b[12]][b[14]]; rlgxth++) {
            q9kns[b[12]][rlgxth][b[113]] = e1UG1(q9kns[b[12]][rlgxth]);
        }
        e1U0[b[35193]][-0x2] = window[b[35428]](q9kns[b[12]]), window[b[13000]][b[35429]](-0x2);
    } else {
        var rlz = q9kns ? q9kns[b[1406]] : '';
        window[b[35234]](0xa, b[35442] + rlz), alert(b[35443] + rlz);
    }
}, window[b[35428]] = function (nsq9ku) {
    return nsq9ku;
}, window[b[35444]] = function (rhtlgz, gxtr) {
    rhtlgz = rhtlgz || e1U0[b[27530]][b[11919]], sendApi(e1U0[b[35184]], b[35445], {
        'type': '4',
        'game_pkg': e1U0[b[27536]],
        'server_id': rhtlgz
    }, gxtr);
}, window[b[35446]] = function (injq, i$gx3j, fyhvz, hlyrf) {
    fyhvz = fyhvz || e1U0[b[27530]][b[11919]], sendApi(e1U0[b[35184]], b[35447], {
        'type': injq,
        'game_pkg': i$gx3j,
        'server_id': fyhvz
    }, hlyrf);
}, window[b[35448]] = function (ylrfzh, thrlzy) {
    sendApi(e1U0[b[35184]], b[35449], { 'game_pkg': ylrfzh }, thrlzy);
}, window[b[35450]] = function (s3u9n) {
    if (s3u9n) {
        if (s3u9n[b[113]] == 0x1) {
            if (s3u9n[b[35451]] == 0x3) return 0x3;else return s3u9n[b[35451]] == 0x1 ? 0x2 : 0x1;
        } else return s3u9n[b[113]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[b[35452]] = function (vf4z_, hfylr) {
    var nj3 = window[b[35329]][b[35331]] == 0x1;
    if (nj3) {
        var u39 = window[b[35329]][b[35338]],
            nj3 = window[b[35329]][b[35331]] == 0x1;
        window[b[35074]][b[164]][b[35339]](b[35340], u39, b[34569]);
        return;
    }
    e1U0[b[35453]] = {
        'step': vf4z_,
        'server_id': hfylr
    };
    var rvz4fy = this;
    e11UG0({ 'title': b[35454] }), sendApi(e1U0[b[35184]], b[35455], {
        'partner_id': e1U0[b[12806]],
        'uid': e1U0[b[27534]],
        'game_pkg': e1U0[b[27536]],
        'server_id': hfylr,
        'platform': e1U0[b[27488]],
        'platform_uid': e1U0[b[27537]],
        'check_login_time': e1U0[b[35301]],
        'check_login_sign': e1U0[b[35300]],
        'version_name': e1U0[b[4546]]
    }, e101UG, e1G0U, e101, function (b69sku) {
        return b69sku[b[1406]] == b[10230] || b69sku[b[80]] == b[35456] || b69sku[b[80]] == b[35457];
    });
}, window[b[35458]] = function (op7m) {
    var apemo = this;
    if (op7m && op7m[b[1406]] === b[10230] && op7m[b[12]]) {
        var nusk6 = e1U0[b[27530]];
        nusk6[b[35459]] = e1U0[b[35194]], nusk6[b[11902]] = String(op7m[b[12]][b[35460]]), nusk6[b[27490]] = parseInt(op7m[b[12]][b[938]]);
        if (op7m[b[12]][b[27489]]) nusk6[b[27489]] = parseInt(op7m[b[12]][b[27489]]);else nusk6[b[27489]] = parseInt(op7m[b[12]][b[11919]]);
        nusk6[b[35461]] = 0x0, nusk6[b[4542]] = e1U0[b[35350]], nusk6[b[35462]] = op7m[b[12]][b[35463]], nusk6[b[35464]] = op7m[b[12]][b[35464]];
        if (op7m[b[12]][b[27494]]) nusk6[b[27494]] = parseInt(op7m[b[12]][b[27494]]);
        console[b[517]](b[35465] + JSON[b[4528]](nusk6[b[35464]])), e1U0[b[699]] == 0x1 && nusk6[b[35464]] && nusk6[b[35464]][b[35466]] == 0x1 && (e1U0[b[35467]] = 0x1, window[b[35074]][b[164]][b[35468]]()), e10G1U();
    } else {
        if (e1U0[b[35453]][b[7181]] >= 0x3) {
            var qs39u = op7m ? op7m[b[1406]] : '';
            window[b[35234]](0xc, b[35469] + qs39u), e101(JSON[b[4528]](op7m)), window[b[35212]](b[35470] + qs39u);
        } else sendApi(e1U0[b[35184]], b[35279], {
            'platform': e1U0[b[35182]],
            'partner_id': e1U0[b[12806]],
            'token': e1U0[b[35277]],
            'game_pkg': e1U0[b[27536]],
            'deviceId': e1U0[b[27538]],
            'scene': b[35280] + e1U0[b[35192]]
        }, function (knu6s9) {
            if (!knu6s9 || knu6s9[b[1406]] != b[10230]) {
                window[b[35212]](b[35297] + knu6s9 && knu6s9[b[1406]]);
                return;
            }
            e1U0[b[35300]] = String(knu6s9[b[11902]]), e1U0[b[35301]] = String(knu6s9[b[938]]), setTimeout(function () {
                e101GU(e1U0[b[35453]][b[7181]] + 0x1, e1U0[b[35453]][b[11919]]);
            }, 0x5dc);
        }, e1G0U, e101, function (trlx) {
            return trlx[b[1406]] == b[10230] || trlx[b[1406]] == b[27893];
        });
    }
}, window[b[35471]] = function () {
    ServerLoading[b[164]][b[35336]](e1U0[b[699]]), window[b[35201]] = !![], window[b[35100]]();
}, window[b[35099]] = function () {
    if (window[b[35098]] && window[b[35106]] && window[b[35202]] && window[b[35203]] && window[b[35204]] && window[b[35206]]) {
        if (!window[b[34537]][b[164]]) {
            console[b[517]](b[35472] + window[b[34537]][b[164]]);
            var k90d = wx[b[27155]](),
                kb69us = k90d[b[863]] ? k90d[b[863]] : 0x0,
                iuqnj = {
                'cdn': window[b[4545]][b[4542]],
                'spareCdn': window[b[4545]][b[27177]],
                'newRegister': window[b[4545]][b[699]],
                'wxPC': window[b[4545]][b[27180]],
                'wxIOS': window[b[4545]][b[1165]],
                'wxAndroid': window[b[4545]][b[11747]],
                'wxParam': {
                    'limitLoad': window[b[4545]][b[35144]],
                    'benchmarkLevel': window[b[4545]][b[35145]],
                    'wxFrom': window[b[593]][b[31199]] == b[35473] ? 0x1 : 0x0,
                    'wxSDKVersion': window[b[35078]],
                    'qudao': b[35474]
                },
                'configType': window[b[4545]][b[4544]],
                'exposeType': window[b[4545]][b[785]],
                'scene': kb69us,
                'video_type': window[b[4545]][b[27683]],
                'ad_flag': window[b[4545]][b[27682]]
            };
            if (window[b[35352]]) for (var kub96s in window[b[35352]]) {
                if (!iuqnj[kub96s]) iuqnj[kub96s] = window[b[35352]][kub96s];
            }
            new window[b[34537]](iuqnj, window[b[4545]][b[107]], window[b[35177]]);
        }
    }
}, window[b[35100]] = function () {
    if (window[b[35098]] && window[b[35106]] && window[b[35202]] && window[b[35203]] && window[b[35204]] && window[b[35206]] && window[b[35201]] && window[b[35205]]) {
        e11U0G();
        if (!e10GU) {
            e10GU = !![];
            if (!window[b[34537]][b[164]]) window[b[35099]]();
            var ujsn3 = 0x0,
                zyvr4 = wx[b[35475]]();
            zyvr4 && (window[b[4545]][b[35140]] && (ujsn3 = zyvr4[b[347]]), console[b[80]](b[35476] + zyvr4[b[347]] + b[35477] + zyvr4[b[1432]] + b[35478] + zyvr4[b[1434]] + b[35479] + zyvr4[b[1433]] + b[35480] + zyvr4[b[195]] + b[35481] + zyvr4[b[196]]));
            var kns96 = {};
            for (const xlg$i in e1U0[b[27530]]) {
                kns96[xlg$i] = e1U0[b[27530]][xlg$i];
            }
            var hlyfr = {
                'channel': window[b[4545]][b[12815]],
                'account': window[b[4545]][b[27534]],
                'userId': window[b[4545]][b[12804]],
                'cdn': window[b[4545]][b[4542]],
                'data': window[b[4545]][b[12]],
                'package': window[b[4545]][b[27178]],
                'newRegister': window[b[4545]][b[699]],
                'pkgName': window[b[4545]][b[27536]],
                'partnerId': window[b[4545]][b[12806]],
                'platform_uid': window[b[4545]][b[27537]],
                'deviceId': window[b[4545]][b[27538]],
                'selectedServer': kns96,
                'configType': window[b[4545]][b[4544]],
                'exposeType': window[b[4545]][b[785]],
                'debugUsers': window[b[4545]][b[12953]],
                'wxMenuTop': ujsn3,
                'wxShield': window[b[4545]][b[807]],
                'encryptParam': window[b[4545]][b[27690]],
                'wx_channel': window[b[4545]][b[27688]],
                'zsy_tp_state': window[b[4545]][b[27689]]
            };
            if (window[b[35352]]) for (var rfhzl in window[b[35352]]) {
                hlyfr[rfhzl] = window[b[35352]][rfhzl];
            }
            window[b[34537]][b[164]][b[27552]](hlyfr);
            if (e1U0[b[27530]] && e1U0[b[27530]][b[11919]]) localStorage[b[520]](b[35303] + e1U0[b[27536]] + e1U0[b[27534]], e1U0[b[27530]][b[11919]]);
        }
    } else console[b[80]](b[35482] + window[b[35098]] + b[35483] + window[b[35106]] + b[35484] + window[b[35202]] + b[35485] + window[b[35203]] + b[35486] + window[b[35204]] + b[35487] + window[b[35206]] + b[35488] + window[b[35201]] + b[35489] + window[b[35205]]);
}, window[b[35490]] = function (b50d6k) {
    if (!window[b[12653]]) {
        console[b[141]](b[35491]);
        return;
    }
    var vfy4z_ = b50d6k[b[374]];
    vfy4z_ == 0x1 ? window[b[12653]][b[67]](0x2327, b50d6k) : window[b[12653]][b[83]](0x2327);
};