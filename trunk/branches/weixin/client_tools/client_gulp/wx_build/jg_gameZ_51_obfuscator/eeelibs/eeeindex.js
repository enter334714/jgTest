var b = wx.$e;
import egl$xh from '../eeeesdk/eeesdk.js';
window[b[31973]] = { 'wxVersion': window[b[591]][b[31857]] }, window[b[31974]] = ![], window[b[31975]] = 0x1, window[b[31976]] = 0x1, window[b[31977]] = !![], window[b[31978]] = !![], window[b[31979]] = '', window[b[31980]] = ![], window[b[31862]] = {
    'base_cdn': b[31981],
    'cdn': b[31981]
}, e1U0[b[31982]] = {}, e1U0[b[26156]] = '0', e1U0[b[5070]] = window[b[31973]][b[31983]], e1U0[b[31943]] = '', e1U0['os'] = '1', e1U0[b[31984]] = b[31985], e1U0[b[31986]] = b[31987], e1U0[b[31988]] = b[31989], e1U0[b[31990]] = b[31991], e1U0[b[31992]] = b[31993], e1U0[b[12299]] = '1', e1U0[b[26479]] = '', e1U0[b[26481]] = '', e1U0[b[31994]] = 0x0, e1U0[b[31995]] = {}, e1U0[b[31996]] = parseInt(e1U0[b[12299]]), e1U0[b[12308]] = e1U0[b[12299]], e1U0[b[26473]] = {}, e1U0[b[31868]] = b[31997], e1U0[b[31998]] = ![], e1U0[b[12434]] = b[31999], e1U0[b[26442]] = Date[b[85]](), e1U0[b[12015]] = b[32000], e1U0[b[785]] = '_a', e1U0[b[32001]] = 0x2, e1U0[b[107]] = 0x7c1, e1U0[b[31983]] = window[b[31973]][b[31983]], e1U0[b[809]] = ![], e1U0[b[1149]] = ![], e1U0[b[11313]] = ![], e1U0[b[26159]] = ![], window[b[32002]] = 0x5, window[b[32003]] = ![], window[b[31898]] = ![], window[b[31906]] = ![], window[b[32004]] = ![], window[b[32005]] = ![], window[b[32006]] = ![], window[b[32007]] = ![], window[b[32008]] = ![], window[b[32009]] = ![], window[b[32010]] = null, window[b[685]] = function (uqsjn3) {
    console[b[515]](b[685], uqsjn3), wx[b[4590]]({}), wx[b[31886]]({
        'title': b[5794],
        'content': uqsjn3,
        'success'(a74_mv) {
            if (a74_mv[b[32011]]) console[b[515]](b[32012]);else a74_mv[b[587]] && console[b[515]](b[32013]);
        }
    });
}, window[b[32014]] = function (ca_om) {
    console[b[515]](b[32015], ca_om), e11U0G(), wx[b[31886]]({
        'title': b[5794],
        'content': ca_om,
        'confirmText': b[32016],
        'cancelText': b[19104],
        'success'(coemap) {
            if (coemap[b[32011]]) window[b[31912]]();else coemap[b[587]] && (console[b[515]](b[32017]), wx[b[26154]]({}));
        }
    });
}, window[b[32018]] = function (kn9usq) {
    console[b[515]](b[32018], kn9usq), wx[b[31886]]({
        'title': b[5794],
        'content': kn9usq,
        'confirmText': b[26610],
        'showCancel': ![],
        'complete'(x$3ijg) {
            console[b[515]](b[32017]), wx[b[26154]]({});
        }
    });
}, window[b[32019]] = ![], window[b[32020]] = function (i3jn$q) {
    window[b[32019]] = !![], wx[b[4589]](i3jn$q);
}, window[b[32021]] = function () {
    window[b[32019]] && (window[b[32019]] = ![], wx[b[4590]]({}));
}, window[b[32022]] = function (qsuk) {
    window[b[31874]][b[164]][b[32022]](qsuk);
}, window[b[12309]] = function (gitx$j, lztrg) {
    egl$xh[b[12309]](gitx$j, function (u3qji) {
        u3qji && u3qji[b[12]] ? u3qji[b[12]][b[1341]] == 0x1 ? lztrg(!![]) : (lztrg(![]), console[b[80]](b[32023] + u3qji[b[12]][b[32024]])) : console[b[515]](b[12309], u3qji);
    });
}, window[b[32025]] = function (yzthlr) {
    console[b[515]](b[32026], yzthlr);
}, window[b[32027]] = function (xgi3$) {}, window[b[32028]] = function (qxji, d5kb6, itglx$) {}, window[b[32029]] = function (d05k6b) {
    console[b[515]](b[32030], d05k6b), window[b[31874]][b[164]][b[32031]](), window[b[31874]][b[164]][b[32032]](), window[b[31874]][b[164]][b[32033]]();
}, window[b[32034]] = function (v_7fy4) {
    window[b[32035]](0xe, b[32036] + v_7fy4), window[b[32014]](b[32037]);
    var $itgxl = {
        'id': window[b[31862]][b[31863]],
        'role': window[b[31862]][b[4381]],
        'level': window[b[31862]][b[31864]],
        'account': window[b[31862]][b[26477]],
        'version': window[b[31862]][b[107]],
        'cdn': window[b[31862]][b[4257]],
        'pkgName': window[b[31862]][b[26479]],
        'gamever': window[b[591]][b[31857]],
        'serverid': window[b[31862]][b[26473]] ? window[b[31862]][b[26473]][b[11489]] : 0x0,
        'systemInfo': window[b[31865]],
        'error': b[32038],
        'stack': v_7fy4 ? v_7fy4 : b[32037]
    },
        u9skb6 = JSON[b[4243]]($itgxl);
    console[b[141]](b[32039] + u9skb6), window[b[31868]](u9skb6);
}, window[b[32035]] = function (gxthrl, mo7c_a) {
    sendApi(e1U0[b[31988]], b[32040], {
        'game_pkg': e1U0[b[26479]],
        'partner_id': e1U0[b[12299]],
        'server_id': e1U0[b[26473]] && e1U0[b[26473]][b[11489]] > 0x0 ? e1U0[b[26473]][b[11489]] : 0x0,
        'uid': e1U0[b[26477]] > 0x0 ? e1U0[b[26477]] : 0x0,
        'type': gxthrl,
        'info': mo7c_a
    });
}, window[b[32041]] = function (d85b06) {
    var yrzhf = JSON[b[559]](d85b06);
    yrzhf[b[32042]] = window[b[591]][b[31857]], yrzhf[b[32043]] = window[b[31862]][b[26473]] ? window[b[31862]][b[26473]][b[11489]] : 0x0, yrzhf[b[31865]] = window[b[31865]];
    var n69s = JSON[b[4243]](yrzhf);
    console[b[141]](b[32044] + n69s), window[b[31868]](n69s);
}, window[b[31913]] = function (a_m7v, dw250) {
    var b9su = {
        'id': window[b[31862]][b[31863]],
        'role': window[b[31862]][b[4381]],
        'level': window[b[31862]][b[31864]],
        'account': window[b[31862]][b[26477]],
        'version': window[b[31862]][b[107]],
        'cdn': window[b[31862]][b[4257]],
        'pkgName': window[b[31862]][b[26479]],
        'gamever': window[b[591]][b[31857]],
        'serverid': window[b[31862]][b[26473]] ? window[b[31862]][b[26473]][b[11489]] : 0x0,
        'systemInfo': window[b[31865]],
        'error': a_m7v,
        'stack': dw250
    },
        skb906 = JSON[b[4243]](b9su);
    console[b[100]](b[32045] + skb906), window[b[31868]](skb906);
}, window[b[31868]] = function (jitxg$) {
    if (window[b[31862]][b[31944]] == b[32046]) return;
    var apeocm = e1U0[b[31868]] + b[32047] + e1U0[b[26477]];
    wx[b[510]]({
        'url': apeocm,
        'method': b[31801],
        'data': jitxg$,
        'header': {
            'content-type': b[32048],
            'cache-control': b[32049]
        },
        'success': function (ujq) {
            DEBUG && console[b[515]](b[32050], apeocm, jitxg$, ujq);
        },
        'fail': function (eopa) {
            DEBUG && console[b[515]](b[32050], apeocm, jitxg$, eopa);
        },
        'complete': function () {}
    });
}, window[b[32051]] = function () {
    function _47va() {
        return ((0x1 + Math[b[128]]()) * 0x10000 | 0x0)[b[288]](0x10)[b[530]](0x1);
    }
    return _47va() + _47va() + '-' + _47va() + '-' + _47va() + '-' + _47va() + '+' + _47va() + _47va() + _47va();
}, window[b[31912]] = function () {
    console[b[515]](b[32052]);
    var qjnu = egl$xh[b[32053]]();
    e1U0[b[12308]] = qjnu[b[32054]], e1U0[b[31996]] = qjnu[b[32054]], e1U0[b[12299]] = qjnu[b[32054]], e1U0[b[26479]] = qjnu[b[32055]];
    var oapcm = { 'game_ver': e1U0[b[5070]] };
    e1U0[b[26481]] = this[b[32051]](), e11UG0({ 'title': b[32056] }), egl$xh[b[395]](oapcm, this[b[32057]][b[76]](this));
}, window[b[32057]] = function (grxt) {
    var igj$x = grxt[b[32058]];
    sdkInitRes = grxt, console[b[515]](b[32059] + igj$x + b[32060] + (igj$x == 0x1) + b[32061] + grxt[b[31857]] + b[32062] + window[b[31973]][b[31983]] + b[32063] + grxt[b[32064]]);
    if (!grxt[b[31857]] || window[b[31877]](window[b[31973]][b[31983]], grxt[b[31857]]) < 0x0) console[b[515]](b[32065]), e1U0[b[31986]] = b[32066], e1U0[b[31988]] = b[32067], e1U0[b[31990]] = b[32068], e1U0[b[4257]] = b[32069], e1U0[b[26155]] = b[32070], e1U0[b[32064]] = grxt[b[32064]], e1U0[b[809]] = ![];else window[b[31877]](window[b[31973]][b[31983]], grxt[b[31857]]) == 0x0 ? (console[b[515]](b[32071]), e1U0[b[31986]] = b[31987], e1U0[b[31988]] = b[31989], e1U0[b[31990]] = b[31991], e1U0[b[4257]] = b[32072], e1U0[b[26155]] = b[32070], e1U0[b[32064]] = b[32073], e1U0[b[809]] = !![]) : (console[b[515]](b[32074]), e1U0[b[31986]] = b[31987], e1U0[b[31988]] = b[31989], e1U0[b[31990]] = b[31991], e1U0[b[4257]] = b[32072], e1U0[b[26155]] = b[32070], e1U0[b[32064]] = b[32073], e1U0[b[809]] = ![]);
    e1U0[b[31994]] = config[b[31668]] ? config[b[31668]] : 0x0, this[b[32075]](), this[b[32076]](), window[b[32077]] = 0x5, e11UG0({ 'title': b[32078] }), egl$xh[b[31797]](this[b[32079]][b[76]](this));
}, window[b[32077]] = 0x5, window[b[32079]] = function (b8d60, vy_z4) {
    if (b8d60 == 0x0 && vy_z4 && vy_z4[b[31760]]) {
        e1U0[b[32080]] = vy_z4[b[31760]], e1U0[b[26620]] = vy_z4[b[26620]];
        var _v74am = this;
        e11UG0({ 'title': b[32081] }), sendApi(e1U0[b[31986]], b[32082], {
            'platform': e1U0[b[31984]],
            'partner_id': e1U0[b[12299]],
            'token': vy_z4[b[31760]],
            'game_pkg': e1U0[b[26479]],
            'deviceId': e1U0[b[26481]],
            'scene': b[32083] + e1U0[b[31994]]
        }, this[b[32084]][b[76]](this), e1G0U, e101);
    } else vy_z4 && vy_z4[b[26677]] && window[b[32077]] > 0x0 && (vy_z4[b[26677]][b[122]](b[32085]) != -0x1 || vy_z4[b[26677]][b[122]](b[32086]) != -0x1 || vy_z4[b[26677]][b[122]](b[32087]) != -0x1 || vy_z4[b[26677]][b[122]](b[32088]) != -0x1 || vy_z4[b[26677]][b[122]](b[32089]) != -0x1 || vy_z4[b[26677]][b[122]](b[32090]) != -0x1) ? (window[b[32077]]--, egl$xh[b[31797]](this[b[32079]][b[76]](this))) : (window[b[32035]](0x1, b[32091] + b8d60 + b[32092] + (vy_z4 ? vy_z4[b[26677]] : '')), window[b[31913]](b[32093], JSON[b[4243]]({
        'status': b8d60,
        'data': vy_z4
    })), window[b[32014]](b[32094] + (vy_z4 && vy_z4[b[26677]] ? '，' + vy_z4[b[26677]] : '')));
}, window[b[32084]] = function (m7_c4) {
    if (!m7_c4) {
        window[b[32035]](0x2, b[32095]), window[b[31913]](b[32096], b[32097]), window[b[32014]](b[32098]);
        return;
    }
    if (m7_c4[b[1341]] != b[9791]) {
        window[b[32035]](0x2, b[32099] + m7_c4[b[1341]]), window[b[31913]](b[32096], JSON[b[4243]](m7_c4)), window[b[32014]](b[32100] + m7_c4[b[1341]]);
        return;
    }
    if (m7_c4[b[32101]] == 0x1) {
        window[b[32014]](b[32102]);
        return;
    }
    e1U0[b[12297]] = String(m7_c4[b[26477]]), e1U0[b[26477]] = String(m7_c4[b[26477]]), e1U0[b[26440]] = String(m7_c4[b[26440]]), e1U0[b[12308]] = String(m7_c4[b[26440]]), e1U0[b[26480]] = String(m7_c4[b[26480]]), e1U0[b[32103]] = String(m7_c4[b[11472]]), e1U0[b[32104]] = String(m7_c4[b[922]]), e1U0[b[11472]] = '';
    var rylhz = this;
    e11UG0({ 'title': b[32105] });
    var apmo7 = localStorage[b[513]](b[32106] + e1U0[b[26479]] + e1U0[b[26477]]);
    if (apmo7 && apmo7 != '') {
        var y7f4_ = Number(apmo7);
        rylhz[b[32107]](y7f4_);
    } else rylhz[b[32108]]();
}, window[b[32108]] = function () {
    var c7opa = this;
    sendApi(e1U0[b[31986]], b[32109], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, c7opa[b[32110]][b[76]](c7opa), e1G0U, e101);
}, window[b[32110]] = function ($i3nj) {
    if (!$i3nj) {
        window[b[32035]](0x3, b[32111]), window[b[32014]](b[32111]);
        return;
    }
    if ($i3nj[b[1341]] != b[9791]) {
        window[b[32035]](0x3, b[32112] + $i3nj[b[1341]]), window[b[32014]](b[32112] + $i3nj[b[1341]]);
        return;
    }
    if (!$i3nj[b[12]] || $i3nj[b[12]][b[14]] == 0x0) {
        window[b[32035]](0x3, b[32113]), window[b[32014]](b[32114]);
        return;
    }
    this[b[32115]]($i3nj);
}, window[b[32107]] = function (b6dk0) {
    var $lx = this;
    sendApi(e1U0[b[31986]], b[32116], {
        'server_id': b6dk0,
        'time': Date[b[85]]() / 0x3e8
    }, $lx[b[32117]][b[76]]($lx), e1G0U, e101);
}, window[b[32117]] = function (xltrh) {
    if (!xltrh) {
        window[b[32035]](0x4, b[32118]), this[b[32108]]();
        return;
    }
    if (xltrh[b[1341]] != b[9791]) {
        window[b[32035]](0x4, b[32119] + xltrh[b[1341]]), this[b[32108]]();
        return;
    }
    if (!xltrh[b[12]] || xltrh[b[12]][b[14]] == 0x0) {
        window[b[32035]](0x4, b[32120]), this[b[32108]]();
        return;
    }
    this[b[32115]](xltrh);
}, window[b[32115]] = function (q3nui) {
    e1U0[b[695]] = q3nui[b[32121]] != undefined ? q3nui[b[32121]] : 0x0, e1U0[b[26473]] = {
        'server_id': String(q3nui[b[12]][0x0][b[11489]]),
        'server_name': String(q3nui[b[12]][0x0][b[26478]]),
        'entry_ip': q3nui[b[12]][0x0][b[26503]],
        'entry_port': parseInt(q3nui[b[12]][0x0][b[26504]]),
        'status': e1UG1(q3nui[b[12]][0x0]),
        'start_time': q3nui[b[12]][0x0][b[32122]],
        'maintain_time': q3nui[b[12]][0x0][b[32123]] ? q3nui[b[12]][0x0][b[32123]] : '',
        'is_recommend': q3nui[b[12]][0x0][b[32124]],
        'cdn': e1U0[b[4257]]
    }, this[b[32125]](), window[b[31874]] && window[b[31874]][b[164]][b[32126]] && window[b[31874]][b[164]][b[32126]](sdkInitRes[b[32127]], sdkInitRes[b[32128]], sdkInitRes[b[32129]], sdkInitRes[b[32130]], sdkInitRes[b[32131]]);
}, window[b[32125]] = function () {
    if (e1U0[b[695]] == 0x1) {
        var fvyr = e1U0[b[26473]][b[113]];
        if (fvyr === -0x1 || fvyr === 0x0) {
            window[b[32035]](0xf, b[32132] + e1U0[b[26473]]['id'] + b[32133] + e1U0[b[26473]][b[113]]), window[b[32014]](fvyr === -0x1 ? b[32134] : b[32135]);
            return;
        }
        e101GU(0x0, e1U0[b[26473]][b[11489]]), window[b[31874]][b[164]][b[32136]](e1U0[b[695]]);
    } else window[b[31874]][b[164]][b[32137]](), e11U0G();
    window[b[32008]] = !![], window[b[31899]](), window[b[31900]]();
}, window[b[32075]] = function () {
    sendApi(e1U0[b[31986]], b[32138], {
        'game_pkg': e1U0[b[26479]],
        'version_name': e1U0[b[32064]]
    }, this[b[32139]][b[76]](this), e1G0U, e101);
}, window[b[32139]] = function (q9nus3) {
    if (!q9nus3) {
        window[b[32035]](0x5, b[32140]), window[b[32014]](b[32140]);
        return;
    }
    if (q9nus3[b[1341]] != b[9791]) {
        window[b[32035]](0x5, b[32141] + q9nus3[b[1341]]), window[b[32014]](b[32141] + q9nus3[b[1341]]);
        return;
    }
    if (!q9nus3[b[12]] || !q9nus3[b[12]][b[5070]]) {
        window[b[32035]](0x5, b[32142] + (q9nus3[b[12]] && q9nus3[b[12]][b[5070]])), window[b[32014]](b[32142] + (q9nus3[b[12]] && q9nus3[b[12]][b[5070]]));
        return;
    }
    q9nus3[b[12]][b[32143]] && q9nus3[b[12]][b[32143]][b[14]] > 0xa && (e1U0[b[32144]] = q9nus3[b[12]][b[32143]], e1U0[b[4257]] = q9nus3[b[12]][b[32143]]), q9nus3[b[12]][b[5070]] && (e1U0[b[107]] = q9nus3[b[12]][b[5070]]), console[b[80]](b[26617] + e1U0[b[107]] + b[32145] + e1U0[b[32064]]), window[b[32006]] = !![], window[b[31899]](), window[b[31900]]();
}, window[b[32146]], window[b[32076]] = function () {
    sendApi(e1U0[b[31986]], b[32147], { 'game_pkg': e1U0[b[26479]] }, this[b[32148]][b[76]](this), e1G0U, e101);
}, window[b[32148]] = function (t$igjx) {
    if (t$igjx && t$igjx[b[1341]] === b[9791] && t$igjx[b[12]]) {
        window[b[32146]] = t$igjx[b[12]];
        for (var w15 in t$igjx[b[12]]) {
            e1U0[w15] = t$igjx[b[12]][w15];
        }
        window[b[32149]]();
    } else window[b[32035]](0xb, b[32150]), console[b[80]](b[32151] + t$igjx[b[1341]]);
    window[b[32007]] = !![], window[b[31900]]();
}, window[b[32149]] = function () {
    var v_af = e1U0[b[809]] || e1U0[b[26369]] && e1U0[b[26369]] > 0x0;
    if (v_af) {
        var lgtrhz = e1U0[b[26370]],
            w1d2 = lgtrhz && lgtrhz[b[14]] == 0x9;
        w1d2 && (window[b[28933]] = lgtrhz);
        var _c7m4 = e1U0[b[26371]],
            zyhr = _c7m4 && _c7m4[b[16]]('#')[b[14]] == 0x4;
        zyhr && (window[b[12117]] = _c7m4);
    }
}, window[b[32152]] = function ($xtj, a7_cmo, xtgl$, nk6s, yrhzfv, db0k, j3xgi, f4_zv, gtil$, m_ao) {
    yrhzfv = String(yrhzfv);
    var n9qku = j3xgi,
        wd512 = f4_zv;
    e1U0[b[31982]][yrhzfv] = {
        'productid': yrhzfv,
        'productname': n9qku,
        'productdesc': wd512,
        'roleid': $xtj,
        'rolename': a7_cmo,
        'rolelevel': xtgl$,
        'price': db0k,
        'callback': gtil$
    }, sendApi(e1U0[b[31990]], b[32153], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'server_name': e1U0[b[26473]][b[26478]],
        'level': xtgl$,
        'uid': e1U0[b[26477]],
        'role_id': $xtj,
        'role_name': a7_cmo,
        'product_id': yrhzfv,
        'product_name': n9qku,
        'product_desc': wd512,
        'money': db0k,
        'partner_id': e1U0[b[12299]]
    }, toPayCallBack, e1G0U, e101);
}, window[b[32154]] = function (rfhvzy) {
    if (rfhvzy && (rfhvzy[b[32155]] === 0xc8 || rfhvzy[b[1341]] == b[9791])) {
        var rgzhtl = e1U0[b[31982]][String(rfhvzy[b[32156]])];
        if (rgzhtl[b[361]]) rgzhtl[b[361]](rfhvzy[b[32156]], rfhvzy[b[32157]], -0x1);
        egl$xh[b[31829]]({
            'cpbill': rfhvzy[b[32157]],
            'productid': rfhvzy[b[32156]],
            'productname': rgzhtl[b[32158]],
            'productdesc': rgzhtl[b[32159]],
            'serverid': e1U0[b[26473]][b[11489]],
            'servername': e1U0[b[26473]][b[26478]],
            'roleid': rgzhtl[b[12303]],
            'rolename': rgzhtl[b[12304]],
            'rolelevel': rgzhtl[b[32160]],
            'price': rgzhtl[b[28324]],
            'extension': JSON[b[4243]]({ 'cp_order_id': rfhvzy[b[32157]] })
        }, function (j$qx3i, m7ao_c) {
            rgzhtl[b[361]] && j$qx3i == 0x0 && rgzhtl[b[361]](rfhvzy[b[32156]], rfhvzy[b[32157]], j$qx3i);
            console[b[80]](JSON[b[4243]]({
                'type': b[32161],
                'status': j$qx3i,
                'data': rfhvzy,
                'role_name': rgzhtl[b[12304]]
            }));
            if (j$qx3i === 0x0) {} else {
                if (j$qx3i === 0x1) {} else {
                    if (j$qx3i === 0x2) {}
                }
            }
        });
    } else {
        var vhrfz = rfhvzy ? b[32162] + rfhvzy[b[32155]] + b[32163] + rfhvzy[b[1341]] + b[32164] + rfhvzy[b[80]] : b[32165];
        window[b[32035]](0xd, b[32166] + vhrfz), alert(vhrfz);
    }
}, window[b[32167]] = function () {}, window[b[32168]] = function (d508w2, _74vfy, _a7vm4, xgj$t, trzyhl) {
    egl$xh[b[31848]](e1U0[b[26473]][b[11489]], e1U0[b[26473]][b[26478]] || e1U0[b[26473]][b[11489]], d508w2, _74vfy, _a7vm4), sendApi(e1U0[b[31986]], b[32169], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'role_id': d508w2,
        'uid': e1U0[b[26477]],
        'role_name': _74vfy,
        'role_type': xgj$t,
        'level': _a7vm4
    });
}, window[b[32170]] = function (m_74ac, tgil$, ksu69, v4_f, s9kb06, thzgr, _7yv4f, aocm7, _cam7, gitj$) {
    e1U0[b[31863]] = m_74ac, e1U0[b[4381]] = tgil$, e1U0[b[31864]] = ksu69, egl$xh[b[31849]](e1U0[b[26473]][b[11489]], e1U0[b[26473]][b[26478]] || e1U0[b[26473]][b[11489]], m_74ac, tgil$, ksu69), sendApi(e1U0[b[31986]], b[32171], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'role_id': m_74ac,
        'uid': e1U0[b[26477]],
        'role_name': tgil$,
        'role_type': v4_f,
        'level': ksu69,
        'evolution': s9kb06
    });
}, window[b[32172]] = function (o7am, _a7cm4, ns9u6k, b06kd9, pmca, db086, kunq9s, k90s, zgltrh, bk60d9) {
    e1U0[b[31863]] = o7am, e1U0[b[4381]] = _a7cm4, e1U0[b[31864]] = ns9u6k, egl$xh[b[31850]](e1U0[b[26473]][b[11489]], e1U0[b[26473]][b[26478]] || e1U0[b[26473]][b[11489]], o7am, _a7cm4, ns9u6k), sendApi(e1U0[b[31986]], b[32171], {
        'game_pkg': e1U0[b[26479]],
        'server_id': e1U0[b[26473]][b[11489]],
        'role_id': o7am,
        'uid': e1U0[b[26477]],
        'role_name': _a7cm4,
        'role_type': b06kd9,
        'level': ns9u6k,
        'evolution': pmca
    });
}, window[b[32173]] = function (bs9u6) {}, window[b[32174]] = function (nsju, nqsju3) {
    egl$xh[b[31811]](b[31811], { 'activity_id': nqsju3 }, function (a7mo) {
        nsju && nsju(a7mo);
    });
}, window[b[24499]] = function () {
    egl$xh[b[24499]]();
}, window[b[32175]] = function () {
    egl$xh[b[24378]]();
}, window[b[32176]] = function (m7ac_o, w8, n3sujq, ryhltz, w85bd0, b9s6u, lhgx$t, jxqi$3) {
    jxqi$3 = jxqi$3 || e1U0[b[26473]][b[11489]], sendApi(e1U0[b[31986]], b[32177], {
        'phone': m7ac_o,
        'role_id': w8,
        'uid': e1U0[b[26477]],
        'game_pkg': e1U0[b[26479]],
        'partner_id': e1U0[b[12299]],
        'server_id': jxqi$3
    }, lhgx$t, 0x2, null, function () {
        return !![];
    });
}, window[b[10804]] = function (c_4ma) {
    window[b[31963]] = c_4ma, window[b[31963]] && window[b[31962]] && (console[b[80]](b[31964] + window[b[31962]][b[847]]), window[b[31963]](window[b[31962]]), window[b[31962]] = null);
}, window[b[32178]] = function (_zvyf, avm7_4, rxltg, un3ji) {
    window[b[24]](b[32179], {
        'game_pkg': window[b[31862]][b[26479]],
        'role_id': avm7_4,
        'server_id': rxltg
    }, un3ji);
}, window[b[32180]] = function (hxglr, v7_fa, w8db) {
    function lhzfr(nk9qus) {
        var fy4_7v = [],
            usb9 = [],
            s6kb = w8db || window[b[591]][b[32181]];
        for (var lxt$gi in s6kb) {
            var w5d821 = Number(lxt$gi);
            (!hxglr || !hxglr[b[14]] || hxglr[b[122]](w5d821) != -0x1) && (usb9[b[31]](s6kb[lxt$gi]), fy4_7v[b[31]]([w5d821, 0x3]));
        }
        window[b[31877]](window[b[31878]], b[32182]) >= 0x0 ? (console[b[515]](b[32183]), egl$xh[b[32184]] && egl$xh[b[32184]](usb9, function (qiu3n) {
            console[b[515]](b[32185]), console[b[515]](qiu3n);
            if (qiu3n && qiu3n[b[26677]] == b[32186]) for (var lztg in s6kb) {
                if (qiu3n[s6kb[lztg]] == b[32187]) {
                    var ijx3g$ = Number(lztg);
                    for (var d9k6b0 = 0x0; d9k6b0 < fy4_7v[b[14]]; d9k6b0++) {
                        if (fy4_7v[d9k6b0][0x0] == ijx3g$) {
                            fy4_7v[d9k6b0][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[b[31877]](window[b[31878]], b[32188]) >= 0x0 ? wx[b[32189]]({
                'withSubscriptions': !![],
                'success': function (xgi$lt) {
                    var c4a_7m = xgi$lt[b[32190]][b[32191]];
                    if (c4a_7m) {
                        console[b[515]](b[32192]), console[b[515]](c4a_7m);
                        for (var coep in s6kb) {
                            if (c4a_7m[s6kb[coep]] == b[32187]) {
                                var jt$ix = Number(coep);
                                for (var hglx$t = 0x0; hglx$t < fy4_7v[b[14]]; hglx$t++) {
                                    if (fy4_7v[hglx$t][0x0] == jt$ix) {
                                        fy4_7v[hglx$t][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[b[515]](fy4_7v), v7_fa && v7_fa(fy4_7v);
                    } else console[b[515]](b[32193]), console[b[515]](xgi$lt), console[b[515]](fy4_7v), v7_fa && v7_fa(fy4_7v);
                },
                'fail': function () {
                    console[b[515]](b[32194]), console[b[515]](fy4_7v), v7_fa && v7_fa(fy4_7v);
                }
            }) : (console[b[515]](b[32195] + window[b[31878]]), console[b[515]](fy4_7v), v7_fa && v7_fa(fy4_7v));
        })) : (console[b[515]](b[32196] + window[b[31878]]), console[b[515]](fy4_7v), v7_fa && v7_fa(fy4_7v)), wx[b[32197]](lhzfr);
    }
    wx[b[32198]](lhzfr);
}, window[b[32199]] = {
    'isSuccess': ![],
    'level': b[32200],
    'isCharging': ![]
}, window[b[13451]] = function (iuqjn3) {
    wx[b[31954]]({
        'success': function (fzl) {
            var m7c4 = window[b[32199]];
            m7c4[b[32201]] = !![], m7c4[b[4357]] = Number(fzl[b[4357]])[b[3974]](0x0), m7c4[b[31957]] = fzl[b[31957]], iuqjn3 && iuqjn3(m7c4[b[32201]], m7c4[b[4357]], m7c4[b[31957]]);
        },
        'fail': function (n3iq) {
            console[b[515]](b[32202], n3iq[b[26677]]);
            var uks9n6 = window[b[32199]];
            iuqjn3 && iuqjn3(uks9n6[b[32201]], uks9n6[b[4357]], uks9n6[b[31957]]);
        }
    });
}, window[b[11870]] = function (mpace) {
    wx[b[11870]]({
        'success': function (hrgzlt) {
            mpace && mpace(!![], hrgzlt);
        },
        'fail': function (k5d06) {
            mpace && mpace(![], k5d06);
        }
    });
}, window[b[11872]] = function (tlzg) {
    if (tlzg) wx[b[11872]](tlzg);
}, window[b[26150]] = function (nq3ji) {
    wx[b[26150]](nq3ji);
}, window[b[24]] = function (hzltyr, q$jix, jqi$x3, pc, z4rfv, rfhlzy, iqunj3, qu39) {
    if (pc == undefined) pc = 0x1;
    wx[b[510]]({
        'url': hzltyr,
        'method': iqunj3 || b[26353],
        'responseType': b[4160],
        'data': q$jix,
        'header': { 'content-type': qu39 || b[32048] },
        'success': function (s069k) {
            DEBUG && console[b[515]](b[32203], hzltyr, info, s069k);
            if (s069k && s069k[b[26747]] == 0xc8) {
                var rhfyv = s069k[b[12]];
                !rfhlzy || rfhlzy(rhfyv) ? jqi$x3 && jqi$x3(rhfyv) : window[b[32204]](hzltyr, q$jix, jqi$x3, pc, z4rfv, rfhlzy, s069k);
            } else window[b[32204]](hzltyr, q$jix, jqi$x3, pc, z4rfv, rfhlzy, s069k);
        },
        'fail': function (ukqns9) {
            DEBUG && console[b[515]](b[32205], hzltyr, info, ukqns9), window[b[32204]](hzltyr, q$jix, jqi$x3, pc, z4rfv, rfhlzy, ukqns9);
        },
        'complete': function () {}
    });
}, window[b[32204]] = function ($xq3, jg$3, tlhzry, xig$tl, rfhlz, tglxh, j$q3xi) {
    xig$tl - 0x1 > 0x0 ? setTimeout(function () {
        window[b[24]]($xq3, jg$3, tlhzry, xig$tl - 0x1, rfhlz, tglxh);
    }, 0x3e8) : rfhlz && rfhlz(JSON[b[4243]]({
        'url': $xq3,
        'response': j$q3xi
    }));
}, window[b[32206]] = function (uij3, g3jx, jq3su, in3, kuns96, inj3$q, aocpem) {
    !jq3su && (jq3su = {});
    var fhzlr = Math[b[127]](Date[b[85]]() / 0x3e8);
    jq3su[b[922]] = fhzlr, jq3su[b[32207]] = g3jx;
    var zf_ = Object[b[279]](jq3su)[b[1154]](),
        nujqi = '',
        b058d = '';
    for (var qju = 0x0; qju < zf_[b[14]]; qju++) {
        nujqi = nujqi + (qju == 0x0 ? '' : '&') + zf_[qju] + jq3su[zf_[qju]], b058d = b058d + (qju == 0x0 ? '' : '&') + zf_[qju] + '=' + encodeURIComponent(jq3su[zf_[qju]]);
    }
    nujqi = nujqi + e1U0[b[31992]];
    var ixjt = b[32208] + md5(nujqi);
    send(uij3 + '?' + b058d + (b058d == '' ? '' : '&') + ixjt, null, in3, kuns96, inj3$q, aocpem || function (sq3un9) {
        return sq3un9[b[1341]] == b[9791];
    }, null, b[31802]);
}, window[b[32209]] = function ($qnij3, cm4_a7) {
    var lfz = 0x0;
    e1U0[b[26473]] && (lfz = e1U0[b[26473]][b[11489]]), sendApi(e1U0[b[31988]], b[32210], {
        'partnerId': e1U0[b[12299]],
        'gamePkg': e1U0[b[26479]],
        'logTime': Math[b[127]](Date[b[85]]() / 0x3e8),
        'platformUid': e1U0[b[26480]],
        'type': $qnij3,
        'serverId': lfz
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[b[32211]] = function (kn6s) {
    sendApi(e1U0[b[31986]], b[32212], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, e1U0G1, e1G0U, e101);
}, window[b[32213]] = function (nqsu9k) {
    if (nqsu9k && nqsu9k[b[1341]] === b[9791] && nqsu9k[b[12]]) {
        nqsu9k[b[12]][b[5270]]({
            'id': -0x2,
            'name': b[32214]
        }), nqsu9k[b[12]][b[5270]]({
            'id': -0x1,
            'name': b[32215]
        }), e1U0[b[32216]] = nqsu9k[b[12]];
        if (window[b[12481]]) window[b[12481]][b[32217]]();
    } else {
        e1U0[b[32218]] = ![];
        var qsjn = nqsu9k ? nqsu9k[b[1341]] : '';
        window[b[32035]](0x7, b[32219] + qsjn), window[b[32014]](b[32220] + qsjn);
    }
}, window[b[32221]] = function (c7_oa) {
    sendApi(e1U0[b[31986]], b[32222], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, e11UG, e1G0U, e101);
}, window[b[32223]] = function (rzfhy) {
    e1U0[b[32224]] = ![];
    if (rzfhy && rzfhy[b[1341]] === b[9791] && rzfhy[b[12]]) {
        for (var i$n = 0x0; i$n < rzfhy[b[12]][b[14]]; i$n++) {
            rzfhy[b[12]][i$n][b[113]] = e1UG1(rzfhy[b[12]][i$n]);
        }
        e1U0[b[31995]][-0x1] = window[b[32225]](rzfhy[b[12]]), window[b[12481]][b[32226]](-0x1);
    } else {
        var fzrlhy = rzfhy ? rzfhy[b[1341]] : '';
        window[b[32035]](0x8, b[32227] + fzrlhy), window[b[32014]](b[32228] + fzrlhy);
    }
}, window[b[32229]] = function (lyhfzr) {
    sendApi(e1U0[b[31986]], b[32222], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, lyhfzr, e1G0U, e101);
}, window[b[32230]] = function (uinjq3, kb6us) {
    sendApi(e1U0[b[31986]], b[32231], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]],
        'server_group_id': kb6us
    }, e1GU1, e1G0U, e101);
}, window[b[32232]] = function (_7ma4) {
    e1U0[b[32224]] = ![];
    if (_7ma4 && _7ma4[b[1341]] === b[9791] && _7ma4[b[12]] && _7ma4[b[12]][b[12]]) {
        var cmeapo = _7ma4[b[12]][b[32233]],
            am_o = [];
        for (var camo_7 = 0x0; camo_7 < _7ma4[b[12]][b[12]][b[14]]; camo_7++) {
            _7ma4[b[12]][b[12]][camo_7][b[113]] = e1UG1(_7ma4[b[12]][b[12]][camo_7]), (am_o[b[14]] == 0x0 || _7ma4[b[12]][b[12]][camo_7][b[113]] != 0x0) && (am_o[am_o[b[14]]] = _7ma4[b[12]][b[12]][camo_7]);
        }
        e1U0[b[31995]][cmeapo] = window[b[32225]](am_o), window[b[12481]][b[32226]](cmeapo);
    } else {
        var pamoec = _7ma4 ? _7ma4[b[1341]] : '';
        window[b[32035]](0x9, b[32234] + pamoec), window[b[32014]](b[32235] + pamoec);
    }
}, window[b[32236]] = function (ltzr) {
    sendApi(e1U0[b[31986]], b[32237], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'version': e1U0[b[5070]],
        'game_pkg': e1U0[b[26479]],
        'device': e1U0[b[26481]]
    }, reqServerRecommendCallBack, e1G0U, e101);
}, window[b[32238]] = function (n9uqs3) {
    e1U0[b[32224]] = ![];
    if (n9uqs3 && n9uqs3[b[1341]] === b[9791] && n9uqs3[b[12]]) {
        for (var hltyr = 0x0; hltyr < n9uqs3[b[12]][b[14]]; hltyr++) {
            n9uqs3[b[12]][hltyr][b[113]] = e1UG1(n9uqs3[b[12]][hltyr]);
        }
        e1U0[b[31995]][-0x2] = window[b[32225]](n9uqs3[b[12]]), window[b[12481]][b[32226]](-0x2);
    } else {
        var q3jx$ = n9uqs3 ? n9uqs3[b[1341]] : '';
        window[b[32035]](0xa, b[32239] + q3jx$), alert(b[32240] + q3jx$);
    }
}, window[b[32225]] = function ($xj3) {
    return $xj3;
}, window[b[32241]] = function ($jiq3x, _7m4va) {
    $jiq3x = $jiq3x || e1U0[b[26473]][b[11489]], sendApi(e1U0[b[31986]], b[32242], {
        'type': '4',
        'game_pkg': e1U0[b[26479]],
        'server_id': $jiq3x
    }, _7m4va);
}, window[b[32243]] = function (k09bd, tryz, ksun96, rzhylt) {
    ksun96 = ksun96 || e1U0[b[26473]][b[11489]], sendApi(e1U0[b[31986]], b[32244], {
        'type': k09bd,
        'game_pkg': tryz,
        'server_id': ksun96
    }, rzhylt);
}, window[b[32245]] = function (amcop, i$tgj) {
    sendApi(e1U0[b[31986]], b[32246], { 'game_pkg': amcop }, i$tgj);
}, window[b[32247]] = function (k9d06b) {
    if (k9d06b) {
        if (k9d06b[b[113]] == 0x1) {
            if (k9d06b[b[32248]] == 0x3) return 0x3;else return k9d06b[b[32248]] == 0x1 ? 0x2 : 0x1;
        } else return k9d06b[b[113]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[b[32249]] = function (_y4z, m4) {
    e1U0[b[32250]] = {
        'step': _y4z,
        'server_id': m4
    };
    var lhgzt = this;
    e11UG0({ 'title': b[32251] }), sendApi(e1U0[b[31986]], b[32252], {
        'partner_id': e1U0[b[12299]],
        'uid': e1U0[b[26477]],
        'game_pkg': e1U0[b[26479]],
        'server_id': m4,
        'platform': e1U0[b[26440]],
        'platform_uid': e1U0[b[26480]],
        'check_login_time': e1U0[b[32104]],
        'check_login_sign': e1U0[b[32103]],
        'version_name': e1U0[b[32064]]
    }, e101UG, e1G0U, e101, function ($hlg) {
        return $hlg[b[1341]] == b[9791] || $hlg[b[80]] == b[32253] || $hlg[b[80]] == b[32254];
    });
}, window[b[32255]] = function (xtl$h) {
    var usk9b6 = this;
    if (xtl$h && xtl$h[b[1341]] === b[9791] && xtl$h[b[12]]) {
        var zf_vy = e1U0[b[26473]];
        zf_vy[b[32256]] = e1U0[b[31996]], zf_vy[b[11472]] = String(xtl$h[b[12]][b[32257]]), zf_vy[b[26442]] = parseInt(xtl$h[b[12]][b[922]]);
        if (xtl$h[b[12]][b[26441]]) zf_vy[b[26441]] = parseInt(xtl$h[b[12]][b[26441]]);else zf_vy[b[26441]] = parseInt(xtl$h[b[12]][b[11489]]);
        zf_vy[b[32258]] = 0x0, zf_vy[b[4257]] = e1U0[b[32144]], zf_vy[b[32259]] = xtl$h[b[12]][b[32260]], zf_vy[b[32261]] = xtl$h[b[12]][b[32261]];
        if (xtl$h[b[12]][b[26445]]) zf_vy[b[26445]] = parseInt(xtl$h[b[12]][b[26445]]);
        console[b[515]](b[32262] + JSON[b[4243]](zf_vy[b[32261]])), e1U0[b[695]] == 0x1 && zf_vy[b[32261]] && zf_vy[b[32261]][b[32263]] == 0x1 && (e1U0[b[32264]] = 0x1, window[b[31874]][b[164]][b[32265]]()), e10G1U();
    } else {
        if (e1U0[b[32250]][b[6865]] >= 0x3) {
            var b8d5w0 = xtl$h ? xtl$h[b[1341]] : '';
            window[b[32035]](0xc, b[32266] + b8d5w0), e101(JSON[b[4243]](xtl$h)), window[b[32014]](b[32267] + b8d5w0);
        } else sendApi(e1U0[b[31986]], b[32082], {
            'platform': e1U0[b[31984]],
            'partner_id': e1U0[b[12299]],
            'token': e1U0[b[32080]],
            'game_pkg': e1U0[b[26479]],
            'deviceId': e1U0[b[26481]],
            'scene': b[32083] + e1U0[b[31994]]
        }, function (grzlt) {
            if (!grzlt || grzlt[b[1341]] != b[9791]) {
                window[b[32014]](b[32100] + grzlt && grzlt[b[1341]]);
                return;
            }
            e1U0[b[32103]] = String(grzlt[b[11472]]), e1U0[b[32104]] = String(grzlt[b[922]]), setTimeout(function () {
                e101GU(e1U0[b[32250]][b[6865]] + 0x1, e1U0[b[32250]][b[11489]]);
            }, 0x5dc);
        }, e1G0U, e101, function (jix3$q) {
            return jix3$q[b[1341]] == b[9791] || jix3$q[b[1341]] == b[26825];
        });
    }
}, window[b[32268]] = function () {
    ServerLoading[b[164]][b[32136]](e1U0[b[695]]), window[b[32003]] = !![], window[b[31900]]();
}, window[b[31899]] = function () {
    if (window[b[31898]] && window[b[31906]] && window[b[32004]] && window[b[32005]] && window[b[32006]] && window[b[32008]]) {
        if (!window[b[31354]][b[164]]) {
            console[b[515]](b[32269] + window[b[31354]][b[164]]);
            var tixl$g = wx[b[26136]](),
                ghztrl = tixl$g[b[847]] ? tixl$g[b[847]] : 0x0,
                iju3 = {
                'cdn': window[b[31862]][b[4257]],
                'spareCdn': window[b[31862]][b[26155]],
                'newRegister': window[b[31862]][b[695]],
                'wxPC': window[b[31862]][b[26159]],
                'wxIOS': window[b[31862]][b[1149]],
                'wxAndroid': window[b[31862]][b[11313]],
                'wxParam': {
                    'limitLoad': window[b[31862]][b[31945]],
                    'benchmarkLevel': window[b[31862]][b[31946]],
                    'wxFrom': window[b[591]][b[31668]] == b[32270] ? 0x1 : 0x0,
                    'wxSDKVersion': window[b[31878]]
                },
                'configType': window[b[31862]][b[12015]],
                'exposeType': window[b[31862]][b[785]],
                'scene': ghztrl
            };
            new window[b[31354]](iju3, window[b[31862]][b[107]], window[b[31979]]);
        }
    }
}, window[b[31900]] = function () {
    if (window[b[31898]] && window[b[31906]] && window[b[32004]] && window[b[32005]] && window[b[32006]] && window[b[32008]] && window[b[32003]] && window[b[32007]]) {
        e11U0G();
        if (!e10GU) {
            e10GU = !![];
            if (!window[b[31354]][b[164]]) window[b[31899]]();
            var bd06 = 0x0,
                lghtzr = wx[b[32271]]();
            lghtzr && (window[b[31862]][b[31941]] && (bd06 = lghtzr[b[345]]), console[b[80]](b[32272] + lghtzr[b[345]] + b[32273] + lghtzr[b[1368]] + b[32274] + lghtzr[b[1370]] + b[32275] + lghtzr[b[1369]] + b[32276] + lghtzr[b[195]] + b[32277] + lghtzr[b[196]]));
            var amc_74 = {};
            for (const t$xgl in e1U0[b[26473]]) {
                amc_74[t$xgl] = e1U0[b[26473]][t$xgl];
            }
            var b90s6k = {
                'channel': window[b[31862]][b[12308]],
                'account': window[b[31862]][b[26477]],
                'userId': window[b[31862]][b[12297]],
                'cdn': window[b[31862]][b[4257]],
                'data': window[b[31862]][b[12]],
                'package': window[b[31862]][b[26156]],
                'newRegister': window[b[31862]][b[695]],
                'pkgName': window[b[31862]][b[26479]],
                'partnerId': window[b[31862]][b[12299]],
                'platform_uid': window[b[31862]][b[26480]],
                'deviceId': window[b[31862]][b[26481]],
                'selectedServer': amc_74,
                'configType': window[b[31862]][b[12015]],
                'exposeType': window[b[31862]][b[785]],
                'debugUsers': window[b[31862]][b[12434]],
                'wxMenuTop': bd06,
                'wxShield': window[b[31862]][b[809]],
                'wx_channel': window[b[31862]][b[26620]]
            };
            if (window[b[32146]]) for (var gxhrt in window[b[32146]]) {
                b90s6k[gxhrt] = window[b[32146]][gxhrt];
            }
            window[b[31354]][b[164]][b[26495]](b90s6k);
            if (e1U0[b[26473]] && e1U0[b[26473]][b[11489]]) localStorage[b[518]](b[32106] + e1U0[b[26479]] + e1U0[b[26477]], e1U0[b[26473]][b[11489]]);
        }
    } else console[b[80]](b[32278] + window[b[31898]] + b[32279] + window[b[31906]] + b[32280] + window[b[32004]] + b[32281] + window[b[32005]] + b[32282] + window[b[32006]] + b[32283] + window[b[32008]] + b[32284] + window[b[32003]] + b[32285] + window[b[32007]]);
};