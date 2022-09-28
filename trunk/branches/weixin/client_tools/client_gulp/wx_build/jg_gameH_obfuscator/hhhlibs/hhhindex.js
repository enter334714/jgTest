var O = wx.$C;
import h_$27et from '../hhhhsdk/hhhsdk.js';
window[O[30915]] = { 'wxVersion': window[O[554]][O[30820]] }, window[O[30916]] = ![], window['$hSF'] = 0x1, window[O[30917]] = 0x1, window['$hWFS'] = !![], window[O[30918]] = !![], window['$hPAWFS'] = '', window[O[30919]] = ![], window['$hFS'] = {
    'base_cdn': O[30920],
    'cdn': O[30920]
}, $hFS[O[30921]] = {}, $hFS[O[25175]] = '0', $hFS[O[4672]] = window[O[30915]][O[30922]], $hFS[O[30890]] = '', $hFS['os'] = '1', $hFS[O[30923]] = O[30924], $hFS[O[30925]] = O[30926], $hFS[O[30927]] = O[30928], $hFS[O[30929]] = O[30930], $hFS[O[30931]] = O[30932], $hFS[O[11631]] = '1', $hFS[O[25489]] = '', $hFS[O[25491]] = '', $hFS[O[30933]] = 0x0, $hFS[O[30934]] = {}, $hFS[O[30935]] = parseInt($hFS[O[11631]]), $hFS[O[11640]] = $hFS[O[11631]], $hFS[O[25483]] = {}, $hFS['$hAF'] = O[30936], $hFS[O[30937]] = ![], $hFS[O[11763]] = O[30938], $hFS[O[25453]] = Date[O[82]](), $hFS[O[11357]] = O[30939], $hFS[O[745]] = '_a', $hFS[O[30940]] = 0x2, $hFS[O[100]] = 0x7c1, $hFS[O[30922]] = window[O[30915]][O[30922]], $hFS[O[769]] = ![], $hFS[O[1068]] = ![], $hFS[O[10675]] = ![], $hFS[O[25178]] = ![], window['$hWSF'] = 0x5, window['$hWS'] = ![], window['$hSW'] = ![], window['$hFWS'] = ![], window[O[30941]] = ![], window[O[30942]] = ![], window['$hFSW'] = ![], window['$hWF'] = ![], window['$hFW'] = ![], window['$hSWF'] = ![], window[O[30943]] = null, window[O[646]] = function (jrsbn) {
    console[O[480]](O[646], jrsbn), wx[O[4216]]({}), wx[O[30844]]({
        'title': O[5374],
        'content': jrsbn,
        'success'(uzdci5) {
            if (uzdci5[O[30944]]) console[O[480]](O[30945]);else uzdci5[O[550]] && console[O[480]](O[30946]);
        }
    });
}, window['$hAWFS'] = function (s8njbr) {
    console[O[480]](O[30947], s8njbr), $hAFSW(), wx[O[30844]]({
        'title': O[5374],
        'content': s8njbr,
        'confirmText': O[30948],
        'cancelText': O[18282],
        'success'(es1qjr) {
            if (es1qjr[O[30944]]) window['$hFA']();else es1qjr[O[550]] && (console[O[480]](O[30949]), wx[O[25173]]({}));
        }
    });
}, window[O[30950]] = function (din8b) {
    console[O[480]](O[30950], din8b), wx[O[30844]]({
        'title': O[5374],
        'content': din8b,
        'confirmText': O[25614],
        'showCancel': ![],
        'complete'(jtr1e) {
            console[O[480]](O[30949]), wx[O[25173]]({});
        }
    });
}, window['$hAWSF'] = ![], window['$hAFWS'] = function (kz36) {
    window['$hAWSF'] = !![], wx[O[4215]](kz36);
}, window['$hAFSW'] = function () {
    window['$hAWSF'] && (window['$hAWSF'] = ![], wx[O[4216]]({}));
}, window['$hASWF'] = function (_xy0og) {
    window[O[30835]][O[147]]['$hASWF'](_xy0og);
}, window[O[11641]] = function (nb8dis, ui5bdc) {
    h_$27et[O[11641]](nb8dis, function (c3k5zu) {
        c3k5zu && c3k5zu[O[11]] ? c3k5zu[O[11]][O[1205]] == 0x1 ? ui5bdc(!![]) : (ui5bdc(![]), console[O[77]](O[30951] + c3k5zu[O[11]][O[30952]])) : console[O[480]](O[11641], c3k5zu);
    });
}, window['$hASFW'] = function (vox_h) {
    console[O[480]](O[30953], vox_h);
}, window['$hAFS'] = function (fpogy0) {}, window['$hASF'] = function (opg0af, qj1srn, jsr8qn) {}, window['$hAS'] = function (s1rjeq) {
    console[O[480]](O[30954], s1rjeq), window[O[30835]][O[147]][O[30955]](), window[O[30835]][O[147]][O[30956]](), window[O[30835]][O[147]][O[30957]]();
}, window['$hSA'] = function (z6cl3) {
    window[O[30958]](0xe, O[30959] + z6cl3), window['$hAWFS'](O[30960]);
    var k34zl = {
        'id': window['$hFS'][O[30825]],
        'role': window['$hFS'][O[4010]],
        'level': window['$hFS'][O[30826]],
        'account': window['$hFS'][O[25487]],
        'version': window['$hFS'][O[100]],
        'cdn': window['$hFS'][O[3889]],
        'pkgName': window['$hFS'][O[25489]],
        'gamever': window[O[554]][O[30820]],
        'serverid': window['$hFS'][O[25483]] ? window['$hFS'][O[25483]][O[10837]] : 0x0,
        'systemInfo': window[O[30827]],
        'error': O[30961],
        'stack': z6cl3 ? z6cl3 : O[30960]
    },
        jqs8n = JSON[O[3875]](k34zl);
    console[O[124]](O[30962] + jqs8n), window['$hAF'](jqs8n);
}, window[O[30958]] = function (u3zc, tmw72$) {
    sendApi($hFS[O[30927]], O[30963], {
        'game_pkg': $hFS[O[25489]],
        'partner_id': $hFS[O[11631]],
        'server_id': $hFS[O[25483]] && $hFS[O[25483]][O[10837]] > 0x0 ? $hFS[O[25483]][O[10837]] : 0x0,
        'uid': $hFS[O[25487]] > 0x0 ? $hFS[O[25487]] : 0x0,
        'type': u3zc,
        'info': tmw72$
    });
}, window['$hFAS'] = function (og_yx) {
    var dn8sbi = JSON[O[522]](og_yx);
    dn8sbi[O[30964]] = window[O[554]][O[30820]], dn8sbi[O[30965]] = window['$hFS'][O[25483]] ? window['$hFS'][O[25483]][O[10837]] : 0x0, dn8sbi[O[30827]] = window[O[30827]];
    var bin85 = JSON[O[3875]](dn8sbi);
    console[O[124]](O[30966] + bin85), window['$hAF'](bin85);
}, window['$hFSA'] = function (lcz6, klz3c6) {
    var dczu = {
        'id': window['$hFS'][O[30825]],
        'role': window['$hFS'][O[4010]],
        'level': window['$hFS'][O[30826]],
        'account': window['$hFS'][O[25487]],
        'version': window['$hFS'][O[100]],
        'cdn': window['$hFS'][O[3889]],
        'pkgName': window['$hFS'][O[25489]],
        'gamever': window[O[554]][O[30820]],
        'serverid': window['$hFS'][O[25483]] ? window['$hFS'][O[25483]][O[10837]] : 0x0,
        'systemInfo': window[O[30827]],
        'error': lcz6,
        'stack': klz3c6
    },
        gyxof0 = JSON[O[3875]](dczu);
    console[O[95]](O[30967] + gyxof0), window['$hAF'](gyxof0);
}, window['$hAF'] = function (pfwa) {
    if (window['$hFS'][O[30891]] == O[30669]) return;
    var mt27$w = $hFS['$hAF'] + O[30968] + $hFS[O[25487]];
    wx[O[475]]({
        'url': mt27$w,
        'method': O[30675],
        'data': pfwa,
        'header': {
            'content-type': O[30969],
            'cache-control': O[30970]
        },
        'success': function (_gyo0x) {
            DEBUG && console[O[480]](O[30971], mt27$w, pfwa, _gyo0x);
        },
        'fail': function (opygf) {
            DEBUG && console[O[480]](O[30971], mt27$w, pfwa, opygf);
        },
        'complete': function () {}
    });
}, window[O[30972]] = function () {
    function gyf() {
        return ((0x1 + Math[O[118]]()) * 0x10000 | 0x0)[O[270]](0x10)[O[495]](0x1);
    }
    return gyf() + gyf() + '-' + gyf() + '-' + gyf() + '-' + gyf() + '+' + gyf() + gyf() + gyf();
}, window['$hFA'] = function () {
    console[O[480]](O[30973]);
    var r1ejqt = h_$27et[O[30974]]();
    $hFS[O[11640]] = r1ejqt[O[30975]], $hFS[O[30935]] = r1ejqt[O[30975]], $hFS[O[11631]] = r1ejqt[O[30975]], $hFS[O[25489]] = r1ejqt[O[30976]];
    var a0fgpo = { 'game_ver': $hFS[O[4672]] };
    $hFS[O[25491]] = this[O[30972]](), $hAFWS({ 'title': O[30977] }), h_$27et[O[366]](a0fgpo, this['$hSAF'][O[73]](this));
}, window['$hSAF'] = function (op0fyg) {
    var r8jnq = op0fyg[O[30978]];
    sdkInitRes = op0fyg, console[O[480]](O[30979] + r8jnq + O[30980] + (r8jnq == 0x1) + O[30981] + op0fyg[O[30820]] + O[30982] + window[O[30915]][O[30922]]);
    if (!op0fyg[O[30820]] || window['$hPWSAF'](window[O[30915]][O[30922]], op0fyg[O[30820]]) < 0x0) console[O[480]](O[30983]), $hFS[O[30925]] = O[30984], $hFS[O[30927]] = O[30985], $hFS[O[30929]] = O[30986], $hFS[O[3889]] = O[30987], $hFS[O[25174]] = O[30988], $hFS[O[30989]] = 'wd', $hFS[O[769]] = ![];else window['$hPWSAF'](window[O[30915]][O[30922]], op0fyg[O[30820]]) == 0x0 ? (console[O[480]](O[30990]), $hFS[O[30925]] = O[30926], $hFS[O[30927]] = O[30928], $hFS[O[30929]] = O[30930], $hFS[O[3889]] = O[30991], $hFS[O[25174]] = O[30988], $hFS[O[30989]] = O[30992], $hFS[O[769]] = !![]) : (console[O[480]](O[30993]), $hFS[O[30925]] = O[30926], $hFS[O[30927]] = O[30928], $hFS[O[30929]] = O[30930], $hFS[O[3889]] = O[30991], $hFS[O[25174]] = O[30988], $hFS[O[30989]] = O[30992], $hFS[O[769]] = ![]);
    $hFS[O[30933]] = config[O[30256]] ? config[O[30256]] : 0x0, this['$hWFAS'](), this['$hWFSA'](), window[O[30994]] = 0x5, $hAFWS({ 'title': O[30995] }), h_$27et[O[30755]](this['$hSFA'][O[73]](this));
}, window[O[30994]] = 0x5, window['$hSFA'] = function (ofg0p, fxgoy0) {
    if (ofg0p == 0x0 && fxgoy0 && fxgoy0[O[30348]]) {
        $hFS[O[30996]] = fxgoy0[O[30348]], $hFS[O[25622]] = fxgoy0[O[25622]];
        var c5bid = this;
        $hAFWS({ 'title': O[30997] }), sendApi($hFS[O[30925]], O[30998], {
            'platform': $hFS[O[30923]],
            'partner_id': $hFS[O[11631]],
            'token': fxgoy0[O[30348]],
            'game_pkg': $hFS[O[25489]],
            'deviceId': $hFS[O[25491]],
            'scene': O[30999] + $hFS[O[30933]]
        }, this['$hWAFS'][O[73]](this), $hWSF, $hSA);
    } else fxgoy0 && fxgoy0[O[25678]] && window[O[30994]] > 0x0 && (fxgoy0[O[25678]][O[114]](O[31000]) != -0x1 || fxgoy0[O[25678]][O[114]](O[31001]) != -0x1 || fxgoy0[O[25678]][O[114]](O[31002]) != -0x1 || fxgoy0[O[25678]][O[114]](O[31003]) != -0x1 || fxgoy0[O[25678]][O[114]](O[31004]) != -0x1 || fxgoy0[O[25678]][O[114]](O[31005]) != -0x1) ? (window[O[30994]]--, h_$27et[O[30755]](this['$hSFA'][O[73]](this))) : (window[O[30958]](0x1, O[31006] + ofg0p + O[31007] + (fxgoy0 ? fxgoy0[O[25678]] : '')), window['$hFSA'](O[31008], JSON[O[3875]]({
        'status': ofg0p,
        'data': fxgoy0
    })), window['$hAWFS'](O[31009] + (fxgoy0 && fxgoy0[O[25678]] ? '，' + fxgoy0[O[25678]] : '')));
}, window['$hWAFS'] = function (t$e7m1) {
    if (!t$e7m1) {
        window[O[30958]](0x2, O[31010]), window['$hFSA'](O[31011], O[31012]), window['$hAWFS'](O[31013]);
        return;
    }
    if (t$e7m1[O[1205]] != O[9239]) {
        window[O[30958]](0x2, O[31014] + t$e7m1[O[1205]]), window['$hFSA'](O[31011], JSON[O[3875]](t$e7m1)), window['$hAWFS'](O[31015] + t$e7m1[O[1205]]);
        return;
    }
    if (t$e7m1[O[31016]] == 0x1) {
        window['$hAWFS'](O[31017]);
        return;
    }
    $hFS[O[11629]] = String(t$e7m1[O[25487]]), $hFS[O[25487]] = String(t$e7m1[O[25487]]), $hFS[O[25451]] = String(t$e7m1[O[25451]]), $hFS[O[11640]] = String(t$e7m1[O[25451]]), $hFS[O[25490]] = String(t$e7m1[O[25490]]), $hFS[O[31018]] = String(t$e7m1[O[10820]]), $hFS[O[31019]] = String(t$e7m1[O[880]]), $hFS[O[10820]] = '';
    var $29wa = this;
    $hAFWS({ 'title': O[31020] });
    var yog_x = localStorage[O[478]](O[31021] + $hFS[O[25489]] + $hFS[O[25487]]);
    if (yog_x && yog_x != '') {
        var bn5d = Number(yog_x);
        $29wa[O[31022]](bn5d);
    } else $29wa[O[31023]]();
}, window[O[31023]] = function () {
    var qrejs = this;
    sendApi($hFS[O[30925]], O[31024], {
        'partner_id': $hFS[O[11631]],
        'uid': $hFS[O[25487]],
        'version': $hFS[O[4672]],
        'game_pkg': $hFS[O[25489]],
        'device': $hFS[O[25491]]
    }, qrejs['$hWASF'][O[73]](qrejs), $hWSF, $hSA);
}, window['$hWASF'] = function (p09gaf) {
    if (!p09gaf) {
        window[O[30958]](0x3, O[31025]), window['$hAWFS'](O[31025]);
        return;
    }
    if (p09gaf[O[1205]] != O[9239]) {
        window[O[30958]](0x3, O[31026] + p09gaf[O[1205]]), window['$hAWFS'](O[31026] + p09gaf[O[1205]]);
        return;
    }
    if (!p09gaf[O[11]] || p09gaf[O[11]][O[13]] == 0x0) {
        window[O[30958]](0x3, O[31027]), window['$hAWFS'](O[31028]);
        return;
    }
    this[O[31029]](p09gaf);
}, window[O[31022]] = function (kl6z3) {
    var et17$m = this;
    sendApi($hFS[O[30925]], O[31030], {
        'server_id': kl6z3,
        'time': Date[O[82]]() / 0x3e8
    }, et17$m[O[31031]][O[73]](et17$m), $hWSF, $hSA);
}, window[O[31031]] = function (mrtq) {
    if (!mrtq) {
        window[O[30958]](0x4, O[31032]), this[O[31023]]();
        return;
    }
    if (mrtq[O[1205]] != O[9239]) {
        window[O[30958]](0x4, O[31033] + mrtq[O[1205]]), this[O[31023]]();
        return;
    }
    if (!mrtq[O[11]] || mrtq[O[11]][O[13]] == 0x0) {
        window[O[30958]](0x4, O[31034]), this[O[31023]]();
        return;
    }
    this[O[31029]](mrtq);
}, window[O[31029]] = function (o0pgf) {
    $hFS[O[656]] = o0pgf[O[31035]] != undefined ? o0pgf[O[31035]] : 0x0, $hFS[O[25483]] = {
        'server_id': String(o0pgf[O[11]][0x0][O[10837]]),
        'server_name': String(o0pgf[O[11]][0x0][O[25488]]),
        'entry_ip': o0pgf[O[11]][0x0][O[25510]],
        'entry_port': parseInt(o0pgf[O[11]][0x0][O[25511]]),
        'status': $hFWA(o0pgf[O[11]][0x0]),
        'start_time': o0pgf[O[11]][0x0][O[31036]],
        'maintain_time': o0pgf[O[11]][0x0][O[31037]] ? o0pgf[O[11]][0x0][O[31037]] : '',
        'is_recommend': o0pgf[O[11]][0x0][O[31038]],
        'cdn': $hFS[O[3889]]
    }, this['$hSFWA'](), window[O[30835]] && window[O[30835]][O[147]][O[31039]] && window[O[30835]][O[147]][O[31039]](sdkInitRes[O[31040]], sdkInitRes[O[31041]], sdkInitRes[O[31042]], sdkInitRes[O[31043]], sdkInitRes[O[31044]]);
}, window['$hSFWA'] = function () {
    if ($hFS[O[656]] == 0x1) {
        var diz5c = $hFS[O[25483]][O[105]];
        if (diz5c === -0x1 || diz5c === 0x0) {
            window[O[30958]](0xf, O[31045] + $hFS[O[25483]]['id'] + O[31046] + $hFS[O[25483]][O[105]]), window['$hAWFS'](diz5c === -0x1 ? O[31047] : O[31048]);
            return;
        }
        $hSAWF(0x0, $hFS[O[25483]][O[10837]]), window[O[30835]][O[147]][O[31049]]($hFS[O[656]]);
    } else window[O[30835]][O[147]][O[31050]](), $hAFSW();
    window['$hFW'] = !![], window['$hSWFA'](), window['$hSFAW']();
}, window['$hWFAS'] = function () {
    sendApi($hFS[O[30925]], O[31051], {
        'game_pkg': $hFS[O[25489]],
        'version_name': $hFS[O[30989]]
    }, this[O[31052]][O[73]](this), $hWSF, $hSA);
}, window[O[31052]] = function (oyfg) {
    if (!oyfg) {
        window[O[30958]](0x5, O[31053]), window['$hAWFS'](O[31053]);
        return;
    }
    if (oyfg[O[1205]] != O[9239]) {
        window[O[30958]](0x5, O[31054] + oyfg[O[1205]]), window['$hAWFS'](O[31054] + oyfg[O[1205]]);
        return;
    }
    if (!oyfg[O[11]] || !oyfg[O[11]][O[4672]]) {
        window[O[30958]](0x5, O[31055] + (oyfg[O[11]] && oyfg[O[11]][O[4672]])), window['$hAWFS'](O[31055] + (oyfg[O[11]] && oyfg[O[11]][O[4672]]));
        return;
    }
    oyfg[O[11]][O[31056]] && oyfg[O[11]][O[31056]][O[13]] > 0xa && ($hFS[O[31057]] = oyfg[O[11]][O[31056]], $hFS[O[3889]] = oyfg[O[11]][O[31056]]), oyfg[O[11]][O[4672]] && ($hFS[O[100]] = oyfg[O[11]][O[4672]]), console[O[77]](O[25619] + $hFS[O[100]] + O[31058] + $hFS[O[30989]]), window['$hFSW'] = !![], window['$hSWFA'](), window['$hSFAW']();
}, window[O[31059]], window['$hWFSA'] = function () {
    sendApi($hFS[O[30925]], O[31060], { 'game_pkg': $hFS[O[25489]] }, this['$hWSAF'][O[73]](this), $hWSF, $hSA);
}, window['$hWSAF'] = function (w92a) {
    if (w92a && w92a[O[1205]] === O[9239] && w92a[O[11]]) {
        window[O[31059]] = w92a[O[11]];
        for (var mt72e$ in w92a[O[11]]) {
            $hFS[mt72e$] = w92a[O[11]][mt72e$];
        }
        window[O[31061]]();
    } else window[O[30958]](0xb, O[31062]), console[O[77]](O[31063] + w92a[O[1205]]);
    window['$hWF'] = !![], window['$hSFAW']();
}, window[O[31061]] = function () {
    var c63u = $hFS[O[769]] || $hFS[O[25384]] && $hFS[O[25384]] > 0x0;
    if (c63u) {
        var mw9$27 = $hFS[O[25385]],
            w79m$2 = mw9$27 && mw9$27[O[13]] == 0x9;
        w79m$2 && (window[O[27878]] = mw9$27);
        var tm1 = $hFS[O[25386]],
            qetrm = tm1 && tm1[O[15]]('#')[O[13]] == 0x4;
        qetrm && (window[O[11456]] = tm1);
    }
}, window[O[31064]] = function (pa972w, cdi, oyx_v, fw29, f9pw, ns1rjq, yopg, w2af9p, ku3zc6, cz3u6k) {
    f9pw = String(f9pw);
    var oyp0gf = yopg,
        rjqs8 = w2af9p;
    $hFS[O[30921]][f9pw] = {
        'productid': f9pw,
        'productname': oyp0gf,
        'productdesc': rjqs8,
        'roleid': pa972w,
        'rolename': cdi,
        'rolelevel': oyx_v,
        'price': ns1rjq,
        'callback': ku3zc6
    }, sendApi($hFS[O[30929]], O[31065], {
        'game_pkg': $hFS[O[25489]],
        'server_id': $hFS[O[25483]][O[10837]],
        'server_name': $hFS[O[25483]][O[25488]],
        'level': oyx_v,
        'uid': $hFS[O[25487]],
        'role_id': pa972w,
        'role_name': cdi,
        'product_id': f9pw,
        'product_name': oyp0gf,
        'product_desc': rjqs8,
        'money': ns1rjq,
        'partner_id': $hFS[O[11631]]
    }, toPayCallBack, $hWSF, $hSA);
}, window[O[31066]] = function (sni8db) {
    if (sni8db && (sni8db[O[31067]] === 0xc8 || sni8db[O[1205]] == O[9239])) {
        var ckz35u = $hFS[O[30921]][String(sni8db[O[31068]])];
        if (ckz35u[O[333]]) ckz35u[O[333]](sni8db[O[31068]], sni8db[O[31069]], -0x1);
        h_$27et[O[30793]]({
            'cpbill': sni8db[O[31069]],
            'productid': sni8db[O[31068]],
            'productname': ckz35u[O[31070]],
            'productdesc': ckz35u[O[31071]],
            'serverid': $hFS[O[25483]][O[10837]],
            'servername': $hFS[O[25483]][O[25488]],
            'roleid': ckz35u[O[11635]],
            'rolename': ckz35u[O[11636]],
            'rolelevel': ckz35u[O[31072]],
            'price': ckz35u[O[27287]],
            'extension': JSON[O[3875]]({ 'cp_order_id': sni8db[O[31069]] })
        }, function (sr1e, gxho_y) {
            ckz35u[O[333]] && sr1e == 0x0 && ckz35u[O[333]](sni8db[O[31068]], sni8db[O[31069]], sr1e);
            console[O[77]](JSON[O[3875]]({
                'type': O[31073],
                'status': sr1e,
                'data': sni8db,
                'role_name': ckz35u[O[11636]]
            }));
            if (sr1e === 0x0) {} else {
                if (sr1e === 0x1) {} else {
                    if (sr1e === 0x2) {}
                }
            }
        });
    } else {
        var emt27 = sni8db ? O[31074] + sni8db[O[31067]] + O[31075] + sni8db[O[1205]] + O[31076] + sni8db[O[77]] : O[31077];
        window[O[30958]](0xd, O[31078] + emt27), alert(emt27);
    }
}, window['$hWSFA'] = function () {}, window['$hAWS'] = function (u5icz, $wm7, fpoag, q1$met, y_xovh) {
    h_$27et[O[30810]]($hFS[O[25483]][O[10837]], $hFS[O[25483]][O[25488]] || $hFS[O[25483]][O[10837]], u5icz, $wm7, fpoag), sendApi($hFS[O[30925]], O[31079], {
        'game_pkg': $hFS[O[25489]],
        'server_id': $hFS[O[25483]][O[10837]],
        'role_id': u5icz,
        'uid': $hFS[O[25487]],
        'role_name': $wm7,
        'role_type': q1$met,
        'level': fpoag
    });
}, window['$hASW'] = function (mt1e$, sbjr8, sbnr8, dnsb8j, jbrs, d5ib8, q8r, iu5cdb, pga90, l6czk3) {
    $hFS[O[30825]] = mt1e$, $hFS[O[4010]] = sbjr8, $hFS[O[30826]] = sbnr8, h_$27et[O[30811]]($hFS[O[25483]][O[10837]], $hFS[O[25483]][O[25488]] || $hFS[O[25483]][O[10837]], mt1e$, sbjr8, sbnr8), sendApi($hFS[O[30925]], O[31080], {
        'game_pkg': $hFS[O[25489]],
        'server_id': $hFS[O[25483]][O[10837]],
        'role_id': mt1e$,
        'uid': $hFS[O[25487]],
        'role_name': sbjr8,
        'role_type': dnsb8j,
        'level': sbnr8,
        'evolution': jbrs
    });
}, window['$hWAS'] = function (yh_go, m29$7w, yofx0g, p9aw, njd, m$29w7, in5b8d, isnb, b8djsn, snjq8) {
    $hFS[O[30825]] = yh_go, $hFS[O[4010]] = m29$7w, $hFS[O[30826]] = yofx0g, h_$27et[O[30812]]($hFS[O[25483]][O[10837]], $hFS[O[25483]][O[25488]] || $hFS[O[25483]][O[10837]], yh_go, m29$7w, yofx0g), sendApi($hFS[O[30925]], O[31080], {
        'game_pkg': $hFS[O[25489]],
        'server_id': $hFS[O[25483]][O[10837]],
        'role_id': yh_go,
        'uid': $hFS[O[25487]],
        'role_name': m29$7w,
        'role_type': p9aw,
        'level': yofx0g,
        'evolution': njd
    });
}, window['$hWSA'] = function (n8rs) {}, window['$hAW'] = function (e1jqs, _y0xg) {
    h_$27et[O[30773]](O[30773], { 'activity_id': _y0xg }, function (kl463) {
        e1jqs && e1jqs(kl463);
    });
}, window[O[23550]] = function () {
    h_$27et[O[23550]]();
}, window[O[31081]] = function () {
    h_$27et['weiduanHelper']();
}, window[O[31082]] = function (_gxy0o, hoyv_x, yo_vx, ej1trq, t1qme, x_gy, jq8s, zkic5) {
    zkic5 = zkic5 || $hFS[O[25483]][O[10837]], sendApi($hFS[O[30925]], O[31083], {
        'phone': _gxy0o,
        'role_id': hoyv_x,
        'uid': $hFS[O[25487]],
        'game_pkg': $hFS[O[25489]],
        'partner_id': $hFS[O[11631]],
        'server_id': zkic5
    }, jq8s, 0x2, null, function () {
        return !![];
    });
}, window[O[10197]] = function (qj1t) {
    window['$hSAW'] = qj1t, window['$hSAW'] && window['$hWA'] && (console[O[77]](O[30907] + window['$hWA'][O[805]]), window['$hSAW'](window['$hWA']), window['$hWA'] = null);
}, window['$hSWA'] = function (q8jsnr, a0w9p, w9m2$, mr1qt) {
    window[O[22]](O[31084], {
        'game_pkg': window['$hFS'][O[25489]],
        'role_id': a0w9p,
        'server_id': w9m2$
    }, mr1qt);
}, window['$hFAWS'] = function (_ohxyg, qjsr1n, bi5cdu) {
    function g_0xo(oyhxv_) {
        var w09 = [],
            e$qt = [],
            nbsdj8 = bi5cdu || window[O[554]][O[31085]];
        for (var xogy_0 in nbsdj8) {
            var a72w$ = Number(xogy_0);
            (!_ohxyg || !_ohxyg[O[13]] || _ohxyg[O[114]](a72w$) != -0x1) && (e$qt[O[29]](nbsdj8[xogy_0]), w09[O[29]]([a72w$, 0x3]));
        }
        window['$hPWSAF'](window[O[30836]], O[31086]) >= 0x0 ? (console[O[480]](O[31087]), h_$27et[O[31088]] && h_$27et[O[31088]](e$qt, function ($e7m) {
            console[O[480]](O[31089]), console[O[480]]($e7m);
            if ($e7m && $e7m[O[25678]] == O[31090]) for (var xg_o0 in nbsdj8) {
                if ($e7m[nbsdj8[xg_o0]] == O[31091]) {
                    var zdcui5 = Number(xg_o0);
                    for (var x0yg = 0x0; x0yg < w09[O[13]]; x0yg++) {
                        if (w09[x0yg][0x0] == zdcui5) {
                            w09[x0yg][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['$hPWSAF'](window[O[30836]], O[31092]) >= 0x0 ? wx[O[31093]]({
                'withSubscriptions': !![],
                'success': function (oxyg0) {
                    var m71te = oxyg0[O[31094]][O[31095]];
                    if (m71te) {
                        console[O[480]](O[31096]), console[O[480]](m71te);
                        for (var voyhx_ in nbsdj8) {
                            if (m71te[nbsdj8[voyhx_]] == O[31091]) {
                                var i5cb = Number(voyhx_);
                                for (var opgf0 = 0x0; opgf0 < w09[O[13]]; opgf0++) {
                                    if (w09[opgf0][0x0] == i5cb) {
                                        w09[opgf0][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[O[480]](w09), qjsr1n && qjsr1n(w09);
                    } else console[O[480]](O[31097]), console[O[480]](oxyg0), console[O[480]](w09), qjsr1n && qjsr1n(w09);
                },
                'fail': function () {
                    console[O[480]](O[31098]), console[O[480]](w09), qjsr1n && qjsr1n(w09);
                }
            }) : (console[O[480]](O[31099] + window[O[30836]]), console[O[480]](w09), qjsr1n && qjsr1n(w09));
        })) : (console[O[480]](O[31100] + window[O[30836]]), console[O[480]](w09), qjsr1n && qjsr1n(w09)), wx[O[31101]](g_0xo);
    }
    wx[O[31102]](g_0xo);
}, window['$hFASW'] = {
    'isSuccess': ![],
    'level': O[31103],
    'isCharging': ![]
}, window['$hFWAS'] = function (nqj1sr) {
    wx[O[30899]]({
        'success': function (yg0ox_) {
            var m2tw7$ = window['$hFASW'];
            m2tw7$[O[31104]] = !![], m2tw7$[O[3986]] = Number(yg0ox_[O[3986]])[O[3614]](0x0), m2tw7$[O[30902]] = yg0ox_[O[30902]], nqj1sr && nqj1sr(m2tw7$[O[31104]], m2tw7$[O[3986]], m2tw7$[O[30902]]);
        },
        'fail': function (u63czk) {
            console[O[480]](O[31105], u63czk[O[25678]]);
            var fxgo0y = window['$hFASW'];
            nqj1sr && nqj1sr(fxgo0y[O[31104]], fxgo0y[O[3986]], fxgo0y[O[30902]]);
        }
    });
}, window[O[11212]] = function (m$tq1) {
    wx[O[11212]]({
        'success': function (si8dbn) {
            m$tq1 && m$tq1(!![], si8dbn);
        },
        'fail': function (q8jsn) {
            m$tq1 && m$tq1(![], q8jsn);
        }
    });
}, window[O[11214]] = function (w7a2p9) {
    if (w7a2p9) wx[O[11214]](w7a2p9);
}, window[O[25169]] = function (nj8sr) {
    wx[O[25169]](nj8sr);
}, window[O[22]] = function (njbrs, t$2m, j8rbns, qe1srj, snb8dj, a0wpf, qrs1ej, qr1etm) {
    if (qe1srj == undefined) qe1srj = 0x1;
    wx[O[475]]({
        'url': njbrs,
        'method': qrs1ej || O[25371],
        'responseType': O[3793],
        'data': t$2m,
        'header': { 'content-type': qr1etm || O[30969] },
        'success': function (a29w) {
            DEBUG && console[O[480]](O[31106], njbrs, info, a29w);
            if (a29w && a29w[O[25748]] == 0xc8) {
                var idubc5 = a29w[O[11]];
                !a0wpf || a0wpf(idubc5) ? j8rbns && j8rbns(idubc5) : window[O[31107]](njbrs, t$2m, j8rbns, qe1srj, snb8dj, a0wpf, a29w);
            } else window[O[31107]](njbrs, t$2m, j8rbns, qe1srj, snb8dj, a0wpf, a29w);
        },
        'fail': function (w90ap) {
            DEBUG && console[O[480]](O[31108], njbrs, info, w90ap), window[O[31107]](njbrs, t$2m, j8rbns, qe1srj, snb8dj, a0wpf, w90ap);
        },
        'complete': function () {}
    });
}, window[O[31107]] = function (pa29, e1trj, oagfp0, pg09a, h_vxo, mw297$, k3clz6) {
    pg09a - 0x1 > 0x0 ? setTimeout(function () {
        window[O[22]](pa29, e1trj, oagfp0, pg09a - 0x1, h_vxo, mw297$);
    }, 0x3e8) : h_vxo && h_vxo(JSON[O[3875]]({
        'url': pa29,
        'response': k3clz6
    }));
}, window[O[31109]] = function (qjt1e, g_o, jrsb, $9a, jbds8n, $a, gyfop0) {
    !jrsb && (jrsb = {});
    var ib85d = Math[O[117]](Date[O[82]]() / 0x3e8);
    jrsb[O[880]] = ib85d, jrsb[O[31110]] = g_o;
    var ovy_h = Object[O[261]](jrsb)[O[1072]](),
        w9f2 = '',
        iuz5kc = '';
    for (var nsbdi8 = 0x0; nsbdi8 < ovy_h[O[13]]; nsbdi8++) {
        w9f2 = w9f2 + (nsbdi8 == 0x0 ? '' : '&') + ovy_h[nsbdi8] + jrsb[ovy_h[nsbdi8]], iuz5kc = iuz5kc + (nsbdi8 == 0x0 ? '' : '&') + ovy_h[nsbdi8] + '=' + encodeURIComponent(jrsb[ovy_h[nsbdi8]]);
    }
    w9f2 = w9f2 + $hFS[O[30931]];
    var faop = O[31111] + md5(w9f2);
    send(qjt1e + '?' + iuz5kc + (iuz5kc == '' ? '' : '&') + faop, null, $9a, jbds8n, $a, gyfop0 || function (zuci5d) {
        return zuci5d[O[1205]] == O[9239];
    }, null, O[30676]);
}, window['$hFWSA'] = function (duc5z, gxyho_) {
    var fo0gyx = 0x0;
    $hFS[O[25483]] && (fo0gyx = $hFS[O[25483]][O[10837]]), sendApi($hFS[O[30927]], O[31112], {
        'partnerId': $hFS[O[11631]],
        'gamePkg': $hFS[O[25489]],
        'logTime': Math[O[117]](Date[O[82]]() / 0x3e8),
        'platformUid': $hFS[O[25490]],
        'type': duc5z,
        'serverId': fo0gyx
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['$hFSAW'] = function (nj8bs) {
    sendApi($hFS[O[30925]], O[31113], {
        'partner_id': $hFS[O[11631]],
        'uid': $hFS[O[25487]],
        'version': $hFS[O[4672]],
        'game_pkg': $hFS[O[25489]],
        'device': $hFS[O[25491]]
    }, $hFSWA, $hWSF, $hSA);
}, window['$hFSWA'] = function (ubi5dc) {
    if (ubi5dc && ubi5dc[O[1205]] === O[9239] && ubi5dc[O[11]]) {
        ubi5dc[O[11]][O[4867]]({
            'id': -0x2,
            'name': O[31114]
        }), ubi5dc[O[11]][O[4867]]({
            'id': -0x1,
            'name': O[31115]
        }), $hFS[O[31116]] = ubi5dc[O[11]];
        if (window[O[11808]]) window[O[11808]][O[31117]]();
    } else {
        $hFS[O[31118]] = ![];
        var zkc36l = ubi5dc ? ubi5dc[O[1205]] : '';
        window[O[30958]](0x7, O[31119] + zkc36l), window['$hAWFS'](O[31120] + zkc36l);
    }
}, window['$hAWF'] = function (z5c3u) {
    sendApi($hFS[O[30925]], O[31121], {
        'partner_id': $hFS[O[11631]],
        'uid': $hFS[O[25487]],
        'version': $hFS[O[4672]],
        'game_pkg': $hFS[O[25489]],
        'device': $hFS[O[25491]]
    }, $hAFW, $hWSF, $hSA);
}, window['$hAFW'] = function (gfoy0p) {
    $hFS[O[31122]] = ![];
    if (gfoy0p && gfoy0p[O[1205]] === O[9239] && gfoy0p[O[11]]) {
        for (var i5kuzc = 0x0; i5kuzc < gfoy0p[O[11]][O[13]]; i5kuzc++) {
            gfoy0p[O[11]][i5kuzc][O[105]] = $hFWA(gfoy0p[O[11]][i5kuzc]);
        }
        $hFS[O[30934]][-0x1] = window[O[31123]](gfoy0p[O[11]]), window[O[11808]][O[31124]](-0x1);
    } else {
        var pafo = gfoy0p ? gfoy0p[O[1205]] : '';
        window[O[30958]](0x8, O[31125] + pafo), window['$hAWFS'](O[31126] + pafo);
    }
}, window[O[31127]] = function (rq8sjn) {
    sendApi($hFS[O[30925]], O[31121], {
        'partner_id': $hFS[O[11631]],
        'uid': $hFS[O[25487]],
        'version': $hFS[O[4672]],
        'game_pkg': $hFS[O[25489]],
        'device': $hFS[O[25491]]
    }, rq8sjn, $hWSF, $hSA);
}, window['$hWAF'] = function (rsqj1n, e1qr) {
    sendApi($hFS[O[30925]], O[31128], {
        'partner_id': $hFS[O[11631]],
        'uid': $hFS[O[25487]],
        'version': $hFS[O[4672]],
        'game_pkg': $hFS[O[25489]],
        'device': $hFS[O[25491]],
        'server_group_id': e1qr
    }, $hWFA, $hWSF, $hSA);
}, window['$hWFA'] = function (teqm) {
    $hFS[O[31122]] = ![];
    if (teqm && teqm[O[1205]] === O[9239] && teqm[O[11]] && teqm[O[11]][O[11]]) {
        var te$1m = teqm[O[11]][O[31129]],
            xogfy0 = [];
        for (var tem1$7 = 0x0; tem1$7 < teqm[O[11]][O[11]][O[13]]; tem1$7++) {
            teqm[O[11]][O[11]][tem1$7][O[105]] = $hFWA(teqm[O[11]][O[11]][tem1$7]), (xogfy0[O[13]] == 0x0 || teqm[O[11]][O[11]][tem1$7][O[105]] != 0x0) && (xogfy0[xogfy0[O[13]]] = teqm[O[11]][O[11]][tem1$7]);
        }
        $hFS[O[30934]][te$1m] = window[O[31123]](xogfy0), window[O[11808]][O[31124]](te$1m);
    } else {
        var pawf0 = teqm ? teqm[O[1205]] : '';
        window[O[30958]](0x9, O[31130] + pawf0), window['$hAWFS'](O[31131] + pawf0);
    }
}, window['$hPWSF'] = function (pyfo0) {
    sendApi($hFS[O[30925]], O[31132], {
        'partner_id': $hFS[O[11631]],
        'uid': $hFS[O[25487]],
        'version': $hFS[O[4672]],
        'game_pkg': $hFS[O[25489]],
        'device': $hFS[O[25491]]
    }, reqServerRecommendCallBack, $hWSF, $hSA);
}, window[O[31133]] = function (d8bu5i) {
    $hFS[O[31122]] = ![];
    if (d8bu5i && d8bu5i[O[1205]] === O[9239] && d8bu5i[O[11]]) {
        for (var e7tm2 = 0x0; e7tm2 < d8bu5i[O[11]][O[13]]; e7tm2++) {
            d8bu5i[O[11]][e7tm2][O[105]] = $hFWA(d8bu5i[O[11]][e7tm2]);
        }
        $hFS[O[30934]][-0x2] = window[O[31123]](d8bu5i[O[11]]), window[O[11808]][O[31124]](-0x2);
    } else {
        var a9w0p = d8bu5i ? d8bu5i[O[1205]] : '';
        window[O[30958]](0xa, O[31134] + a9w0p), alert(O[31135] + a9w0p);
    }
}, window[O[31123]] = function (q$met1) {
    return q$met1;
}, window['$hFAW'] = function (r8qnjs, ck63z) {
    r8qnjs = r8qnjs || $hFS[O[25483]][O[10837]], sendApi($hFS[O[30925]], O[31136], {
        'type': '4',
        'game_pkg': $hFS[O[25489]],
        'server_id': r8qnjs
    }, ck63z);
}, window[O[31137]] = function (oapf, dbsj8, zciud, o0g_yx) {
    zciud = zciud || $hFS[O[25483]][O[10837]], sendApi($hFS[O[30925]], O[31138], {
        'type': oapf,
        'game_pkg': dbsj8,
        'server_id': zciud
    }, o0g_yx);
}, window[O[31139]] = function (nqs1j, go0yp) {
    sendApi($hFS[O[30925]], O[31140], { 'game_pkg': nqs1j }, go0yp);
}, window['$hFWA'] = function (cz63) {
    if (cz63) {
        if (cz63[O[105]] == 0x1) {
            if (cz63[O[31141]] == 0x3) return 0x3;else return cz63[O[31141]] == 0x1 ? 0x2 : 0x1;
        } else return cz63[O[105]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['$hSAWF'] = function (c3l6kz, ogx_y) {
    $hFS[O[31142]] = {
        'step': c3l6kz,
        'server_id': ogx_y
    };
    var foa0pg = this;
    $hAFWS({ 'title': O[31143] }), sendApi($hFS[O[30925]], O[31144], {
        'partner_id': $hFS[O[11631]],
        'uid': $hFS[O[25487]],
        'game_pkg': $hFS[O[25489]],
        'server_id': ogx_y,
        'platform': $hFS[O[25451]],
        'platform_uid': $hFS[O[25490]],
        'check_login_time': $hFS[O[31019]],
        'check_login_sign': $hFS[O[31018]],
        'version_name': $hFS[O[30989]]
    }, $hSAFW, $hWSF, $hSA, function (y_xvoh) {
        return y_xvoh[O[1205]] == O[9239] || y_xvoh[O[77]] == O[31145] || y_xvoh[O[77]] == O[31146];
    });
}, window['$hSAFW'] = function (apw792) {
    var tm$7 = this;
    if (apw792 && apw792[O[1205]] === O[9239] && apw792[O[11]]) {
        var nb8sjr = $hFS[O[25483]];
        nb8sjr[O[31147]] = $hFS[O[30935]], nb8sjr[O[10820]] = String(apw792[O[11]][O[31148]]), nb8sjr[O[25453]] = parseInt(apw792[O[11]][O[880]]);
        if (apw792[O[11]][O[25452]]) nb8sjr[O[25452]] = parseInt(apw792[O[11]][O[25452]]);else nb8sjr[O[25452]] = parseInt(apw792[O[11]][O[10837]]);
        nb8sjr[O[31149]] = 0x0, nb8sjr[O[3889]] = $hFS[O[31057]], nb8sjr[O[31150]] = apw792[O[11]][O[31151]], nb8sjr[O[31152]] = apw792[O[11]][O[31152]];
        if (apw792[O[11]][O[25456]]) nb8sjr[O[25456]] = parseInt(apw792[O[11]][O[25456]]);
        console[O[480]](O[31153] + JSON[O[3875]](nb8sjr[O[31152]])), $hFS[O[656]] == 0x1 && nb8sjr[O[31152]] && nb8sjr[O[31152]][O[31154]] == 0x1 && ($hFS[O[31155]] = 0x1, window[O[30835]][O[147]]['$hPSF']()), $hSWAF();
    } else {
        if ($hFS[O[31142]][O[6420]] >= 0x3) {
            var oxfyg = apw792 ? apw792[O[1205]] : '';
            window[O[30958]](0xc, O[31156] + oxfyg), $hSA(JSON[O[3875]](apw792)), window['$hAWFS'](O[31157] + oxfyg);
        } else sendApi($hFS[O[30925]], O[30998], {
            'platform': $hFS[O[30923]],
            'partner_id': $hFS[O[11631]],
            'token': $hFS[O[30996]],
            'game_pkg': $hFS[O[25489]],
            'deviceId': $hFS[O[25491]],
            'scene': O[30999] + $hFS[O[30933]]
        }, function (gapfo) {
            if (!gapfo || gapfo[O[1205]] != O[9239]) {
                window['$hAWFS'](O[31015] + gapfo && gapfo[O[1205]]);
                return;
            }
            $hFS[O[31018]] = String(gapfo[O[10820]]), $hFS[O[31019]] = String(gapfo[O[880]]), setTimeout(function () {
                $hSAWF($hFS[O[31142]][O[6420]] + 0x1, $hFS[O[31142]][O[10837]]);
            }, 0x5dc);
        }, $hWSF, $hSA, function (ogfa0p) {
            return ogfa0p[O[1205]] == O[9239] || ogfa0p[O[1205]] == O[25826];
        });
    }
}, window['$hSWAF'] = function () {
    ServerLoading[O[147]][O[31049]]($hFS[O[656]]), window['$hWS'] = !![], window['$hSFAW']();
}, window['$hSWFA'] = function () {
    if (window['$hSW'] && window['$hFWS'] && window[O[30941]] && window[O[30942]] && window['$hFSW'] && window['$hFW']) {
        if (!window[O[30235]][O[147]]) {
            console[O[480]](O[31158] + window[O[30235]][O[147]]);
            var e$t7m = wx[O[25155]](),
                gpof0y = e$t7m[O[805]] ? e$t7m[O[805]] : 0x0,
                fxygo = {
                'cdn': window['$hFS'][O[3889]],
                'spareCdn': window['$hFS'][O[25174]],
                'newRegister': window['$hFS'][O[656]],
                'wxPC': window['$hFS'][O[25178]],
                'wxIOS': window['$hFS'][O[1068]],
                'wxAndroid': window['$hFS'][O[10675]],
                'wxParam': {
                    'limitLoad': window['$hFS']['$hPAWSF'],
                    'benchmarkLevel': window['$hFS']['$hPAFWS'],
                    'wxFrom': window[O[554]][O[30256]] == O[31159] ? 0x1 : 0x0,
                    'wxSDKVersion': window[O[30836]]
                },
                'configType': window['$hFS'][O[11357]],
                'exposeType': window['$hFS'][O[745]],
                'scene': gpof0y
            };
            new window[O[30235]](fxygo, window['$hFS'][O[100]], window['$hPAWFS']);
        }
    }
}, window['$hSFAW'] = function () {
    if (window['$hSW'] && window['$hFWS'] && window[O[30941]] && window[O[30942]] && window['$hFSW'] && window['$hFW'] && window['$hWS'] && window['$hWF']) {
        $hAFSW();
        if (!$hSWF) {
            $hSWF = !![];
            if (!window[O[30235]][O[147]]) window['$hSWFA']();
            var rjs8 = 0x0,
                t$2e7m = wx[O[31160]]();
            t$2e7m && (window['$hFS'][O[30888]] && (rjs8 = t$2e7m[O[321]]), console[O[77]](O[31161] + t$2e7m[O[321]] + O[31162] + t$2e7m[O[1224]] + O[31163] + t$2e7m[O[1226]] + O[31164] + t$2e7m[O[1225]] + O[31165] + t$2e7m[O[178]] + O[31166] + t$2e7m[O[179]]));
            var d8b5i = {};
            for (const fa2w in $hFS[O[25483]]) {
                d8b5i[fa2w] = $hFS[O[25483]][fa2w];
            }
            var bdjn8 = {
                'channel': window['$hFS'][O[11640]],
                'account': window['$hFS'][O[25487]],
                'userId': window['$hFS'][O[11629]],
                'cdn': window['$hFS'][O[3889]],
                'data': window['$hFS'][O[11]],
                'package': window['$hFS'][O[25175]],
                'newRegister': window['$hFS'][O[656]],
                'pkgName': window['$hFS'][O[25489]],
                'partnerId': window['$hFS'][O[11631]],
                'platform_uid': window['$hFS'][O[25490]],
                'deviceId': window['$hFS'][O[25491]],
                'selectedServer': d8b5i,
                'configType': window['$hFS'][O[11357]],
                'exposeType': window['$hFS'][O[745]],
                'debugUsers': window['$hFS'][O[11763]],
                'wxMenuTop': rjs8,
                'wxShield': window['$hFS'][O[769]],
                'wx_channel': window['$hFS'][O[25622]]
            };
            if (window[O[31059]]) for (var mw$97 in window[O[31059]]) {
                bdjn8[mw$97] = window[O[31059]][mw$97];
            }
            window[O[30235]][O[147]]['$hSFP'](bdjn8);
            if ($hFS[O[25483]] && $hFS[O[25483]][O[10837]]) localStorage[O[483]](O[31021] + $hFS[O[25489]] + $hFS[O[25487]], $hFS[O[25483]][O[10837]]);
        }
    } else console[O[77]](O[31167] + window['$hSW'] + O[31168] + window['$hFWS'] + O[31169] + window[O[30941]] + O[31170] + window[O[30942]] + O[31171] + window['$hFSW'] + O[31172] + window['$hFW'] + O[31173] + window['$hWS'] + O[31174] + window['$hWF']);
};