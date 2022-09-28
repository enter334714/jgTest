var b = wx.$e;
import ezb7d6c from '../nq5p/g8v55a.js';
window[b[582]] = { 'wxVersion': window[b[583]][b[584]] }, window[b[585]] = ![], window[b[586]] = 0x1, window[b[587]] = 0x1, window[b[588]] = !![], window[b[589]] = !![], window[b[590]] = '', window[b[591]] = ![], window[b[255]] = {
    'base_cdn': b[592],
    'cdn': b[592]
}, e1IZ[b[593]] = {}, e1IZ[b[594]] = '0', e1IZ[b[595]] = window[b[582]][b[316]], e1IZ[b[596]] = '', e1IZ['os'] = '1', e1IZ[b[597]] = b[598], e1IZ[b[599]] = b[600], e1IZ[b[601]] = b[602], e1IZ[b[603]] = b[604], e1IZ[b[605]] = b[606], e1IZ[b[607]] = '1', e1IZ[b[371]] = '', e1IZ[b[608]] = '', e1IZ[b[609]] = 0x0, e1IZ[b[412]] = {}, e1IZ[b[610]] = parseInt(e1IZ[b[607]]), e1IZ[b[611]] = e1IZ[b[607]], e1IZ[b[256]] = {}, e1IZ[b[612]] = b[613], e1IZ[b[614]] = ![], e1IZ[b[615]] = b[616], e1IZ[b[617]] = Date[b[249]](), e1IZ[b[618]] = b[619], e1IZ[b[620]] = '_a', e1IZ[b[299]] = 0x2, e1IZ[b[314]] = 0x7c1, e1IZ[b[316]] = window[b[582]][b[316]], e1IZ[b[621]] = ![], e1IZ[b[622]] = ![], e1IZ[b[623]] = ![], e1IZ[b[624]] = ![], window[b[625]] = 0x5, window[b[626]] = ![], window[b[627]] = ![], window[b[628]] = ![], window[b[511]] = ![], window[b[522]] = ![], window[b[629]] = ![], window[b[630]] = ![], window[b[631]] = ![], window[b[632]] = ![], window[b[517]] = null, window[b[633]] = function ($ew8) {
    console[b[425]](b[633], $ew8), wx[b[634]]({}), wx[b[635]]({
        'title': b[636],
        'content': $ew8,
        'success'(tev4w8) {
            if (tev4w8[b[637]]) console[b[425]](b[638]);else tev4w8[b[639]] && console[b[425]](b[640]);
        }
    });
}, window[b[641]] = function (nsjq2) {
    console[b[425]](b[642], nsjq2), e1NIZD(), wx[b[635]]({
        'title': b[636],
        'content': nsjq2,
        'confirmText': b[643],
        'cancelText': b[644],
        'success'(b76c) {
            if (b76c[b[637]]) window[b[645]]();else b76c[b[639]] && (console[b[425]](b[646]), wx[b[647]]({}));
        }
    });
}, window[b[648]] = function (rw4vd8) {
    console[b[425]](b[648], rw4vd8), wx[b[635]]({
        'title': b[636],
        'content': rw4vd8,
        'confirmText': b[649],
        'showCancel': ![],
        'complete'(jx1s3) {
            console[b[425]](b[646]), wx[b[647]]({});
        }
    });
}, window[b[650]] = ![], window[b[651]] = function ($vw8et) {
    window[b[650]] = !![], wx[b[652]]($vw8et);
}, window[b[653]] = function () {
    window[b[650]] && (window[b[650]] = ![], wx[b[634]]({}));
}, window[b[505]] = function (x1o3sj) {
    window[b[581]][b[250]][b[505]](x1o3sj);
}, window[b[93]] = function (awtv$, f9_i) {
    ezb7d6c[b[93]](awtv$, function (dczb76) {
        dczb76 && dczb76[b[429]] ? dczb76[b[429]][b[428]] == 0x1 ? f9_i(!![]) : (f9_i(![]), console[b[654]](b[655] + dczb76[b[429]][b[656]])) : console[b[425]](b[93], dczb76);
    });
}, window[b[657]] = function (s25jqn) {
    console[b[425]](b[658], s25jqn);
}, window[b[305]] = function (at$eik) {}, window[b[310]] = function (zc6, zbrd47, r8w4d) {}, window[b[659]] = function (v8$e) {
    console[b[425]](b[660], v8$e), window[b[581]][b[250]][b[303]](), window[b[581]][b[250]][b[304]](), window[b[581]][b[250]][b[320]]();
}, window[b[661]] = function (zdvr4) {
    window[b[662]](0xe, b[663] + zdvr4), window[b[641]](b[664]);
    var a$ktei = {
        'id': window[b[255]][b[665]],
        'role': window[b[255]][b[666]],
        'level': window[b[255]][b[667]],
        'account': window[b[255]][b[668]],
        'version': window[b[255]][b[314]],
        'cdn': window[b[255]][b[405]],
        'pkgName': window[b[255]][b[371]],
        'gamever': window[b[583]][b[584]],
        'serverid': window[b[255]][b[256]] ? window[b[255]][b[256]][b[76]] : 0x0,
        'systemInfo': window[b[669]],
        'error': b[670],
        'stack': zdvr4 ? zdvr4 : b[664]
    },
        f_90k = JSON[b[540]](a$ktei);
    console[b[542]](b[671] + f_90k), window[b[612]](f_90k);
}, window[b[662]] = function (k0mf_, $eiaw) {
    sendApi(e1IZ[b[601]], b[672], {
        'game_pkg': e1IZ[b[371]],
        'partner_id': e1IZ[b[607]],
        'server_id': e1IZ[b[256]] && e1IZ[b[256]][b[76]] > 0x0 ? e1IZ[b[256]][b[76]] : 0x0,
        'uid': e1IZ[b[668]] > 0x0 ? e1IZ[b[668]] : 0x0,
        'type': k0mf_,
        'info': $eiaw
    });
}, window[b[673]] = function (x3sjo1) {
    var n52uh = JSON[b[674]](x3sjo1);
    n52uh[b[675]] = window[b[583]][b[584]], n52uh[b[676]] = window[b[255]][b[256]] ? window[b[255]][b[256]][b[76]] : 0x0, n52uh[b[669]] = window[b[669]];
    var uly2n = JSON[b[540]](n52uh);
    console[b[542]](b[677] + uly2n), window[b[612]](uly2n);
}, window[b[678]] = function ($katei, sq2nu5) {
    var aiew$t = {
        'id': window[b[255]][b[665]],
        'role': window[b[255]][b[666]],
        'level': window[b[255]][b[667]],
        'account': window[b[255]][b[668]],
        'version': window[b[255]][b[314]],
        'cdn': window[b[255]][b[405]],
        'pkgName': window[b[255]][b[371]],
        'gamever': window[b[583]][b[584]],
        'serverid': window[b[255]][b[256]] ? window[b[255]][b[256]][b[76]] : 0x0,
        'systemInfo': window[b[669]],
        'error': $katei,
        'stack': sq2nu5
    },
        km_f9 = JSON[b[540]](aiew$t);
    console[b[559]](b[679] + km_f9), window[b[612]](km_f9);
}, window[b[612]] = function (twe8) {
    if (window[b[255]][b[680]] == b[681]) return;
    var xm1go9 = e1IZ[b[612]] + b[682] + e1IZ[b[668]];
    wx[b[683]]({
        'url': xm1go9,
        'method': b[33],
        'data': twe8,
        'header': {
            'content-type': b[684],
            'cache-control': b[685]
        },
        'success': function (rv8dw) {
            DEBUG && console[b[425]](b[686], xm1go9, twe8, rv8dw);
        },
        'fail': function ($teaiw) {
            DEBUG && console[b[425]](b[686], xm1go9, twe8, $teaiw);
        },
        'complete': function () {}
    });
}, window[b[687]] = function () {
    function e_k$i() {
        return ((0x1 + Math[b[307]]()) * 0x10000 | 0x0)[b[688]](0x10)[b[689]](0x1);
    }
    return e_k$i() + e_k$i() + '-' + e_k$i() + '-' + e_k$i() + '-' + e_k$i() + '+' + e_k$i() + e_k$i() + e_k$i();
}, window[b[645]] = function () {
    console[b[425]](b[690]);
    var wt$ei = ezb7d6c[b[691]]();
    e1IZ[b[611]] = wt$ei[b[692]], e1IZ[b[610]] = wt$ei[b[692]], e1IZ[b[607]] = wt$ei[b[692]], e1IZ[b[371]] = wt$ei[b[693]];
    var bdr7z4 = { 'game_ver': e1IZ[b[595]] };
    e1IZ[b[608]] = this[b[687]](), e1NIDZ({ 'title': b[694] }), ezb7d6c[b[88]](bdr7z4, this[b[695]][b[312]](this));
}, window[b[695]] = function (vwe$8) {
    var rvdw4 = vwe$8[b[518]];
    sdkInitRes = vwe$8, console[b[425]](b[696] + rvdw4 + b[697] + (rvdw4 == 0x1) + b[698] + vwe$8[b[584]] + b[699] + window[b[582]][b[316]] + b[700] + vwe$8[b[701]]);
    if (!vwe$8[b[584]] || window[b[702]](window[b[582]][b[316]], vwe$8[b[584]]) < 0x0) console[b[425]](b[703]), e1IZ[b[599]] = b[704], e1IZ[b[601]] = b[705], e1IZ[b[603]] = b[706], e1IZ[b[405]] = b[707], e1IZ[b[708]] = b[709], e1IZ[b[701]] = vwe$8[b[701]], e1IZ[b[621]] = ![];else window[b[702]](window[b[582]][b[316]], vwe$8[b[584]]) == 0x0 ? (console[b[425]](b[710]), e1IZ[b[599]] = b[600], e1IZ[b[601]] = b[602], e1IZ[b[603]] = b[604], e1IZ[b[405]] = b[592], e1IZ[b[708]] = b[709], e1IZ[b[701]] = b[711], e1IZ[b[621]] = !![]) : (console[b[425]](b[712]), e1IZ[b[599]] = b[600], e1IZ[b[601]] = b[602], e1IZ[b[603]] = b[604], e1IZ[b[405]] = b[592], e1IZ[b[708]] = b[709], e1IZ[b[701]] = b[711], e1IZ[b[621]] = ![]);
    e1IZ[b[609]] = config[b[713]] ? config[b[713]] : 0x0, this[b[714]](), this[b[715]](), window[b[716]] = 0x5, e1NIDZ({ 'title': b[717] }), ezb7d6c[b[16]](this[b[718]][b[312]](this));
}, window[b[716]] = 0x5, window[b[718]] = function (z48r, r4vw8d) {
    if (z48r == 0x0 && r4vw8d && r4vw8d[b[719]]) {
        e1IZ[b[720]] = r4vw8d[b[719]], e1IZ[b[721]] = r4vw8d[b[721]];
        var o9x1m = this;
        e1NIDZ({ 'title': b[722] }), sendApi(e1IZ[b[599]], b[723], {
            'platform': e1IZ[b[597]],
            'partner_id': e1IZ[b[607]],
            'token': r4vw8d[b[719]],
            'game_pkg': e1IZ[b[371]],
            'deviceId': e1IZ[b[608]],
            'scene': b[724] + e1IZ[b[609]]
        }, this[b[725]][b[312]](this), e1DZI, e1ZN);
    } else r4vw8d && r4vw8d[b[726]] && window[b[716]] > 0x0 && (r4vw8d[b[726]][b[562]](b[727]) != -0x1 || r4vw8d[b[726]][b[562]](b[728]) != -0x1 || r4vw8d[b[726]][b[562]](b[729]) != -0x1 || r4vw8d[b[726]][b[562]](b[730]) != -0x1 || r4vw8d[b[726]][b[562]](b[731]) != -0x1 || r4vw8d[b[726]][b[562]](b[732]) != -0x1) ? (window[b[716]]--, ezb7d6c[b[16]](this[b[718]][b[312]](this))) : (window[b[662]](0x1, b[733] + z48r + b[734] + (r4vw8d ? r4vw8d[b[726]] : '')), window[b[678]](b[735], JSON[b[540]]({
        'status': z48r,
        'data': r4vw8d
    })), window[b[641]](b[736] + (r4vw8d && r4vw8d[b[726]] ? '，' + r4vw8d[b[726]] : '')));
}, window[b[725]] = function (quhn52) {
    if (!quhn52) {
        window[b[662]](0x2, b[737]), window[b[678]](b[738], b[739]), window[b[641]](b[740]);
        return;
    }
    if (quhn52[b[428]] != b[427]) {
        window[b[662]](0x2, b[741] + quhn52[b[428]]), window[b[678]](b[738], JSON[b[540]](quhn52)), window[b[641]](b[742] + quhn52[b[428]]);
        return;
    }
    if (quhn52[b[743]] == 0x1) {
        window[b[641]](b[744]);
        return;
    }
    e1IZ[b[745]] = String(quhn52[b[668]]), e1IZ[b[668]] = String(quhn52[b[668]]), e1IZ[b[746]] = String(quhn52[b[746]]), e1IZ[b[611]] = String(quhn52[b[746]]), e1IZ[b[747]] = String(quhn52[b[747]]), e1IZ[b[748]] = String(quhn52[b[749]]), e1IZ[b[750]] = String(quhn52[b[751]]), e1IZ[b[749]] = '';
    var _0$i = this;
    e1NIDZ({ 'title': b[752] });
    var o1mxg = localStorage[b[376]](b[753] + e1IZ[b[371]] + e1IZ[b[668]]);
    if (o1mxg && o1mxg != '') {
        var mgofx9 = Number(o1mxg);
        _0$i[b[754]](mgofx9);
    } else _0$i[b[755]]();
}, window[b[755]] = function () {
    var unhy = this;
    sendApi(e1IZ[b[599]], b[756], {
        'partner_id': e1IZ[b[607]],
        'uid': e1IZ[b[668]],
        'version': e1IZ[b[595]],
        'game_pkg': e1IZ[b[371]],
        'device': e1IZ[b[608]]
    }, unhy[b[757]][b[312]](unhy), e1DZI, e1ZN);
}, window[b[757]] = function (_iek) {
    if (!_iek) {
        window[b[662]](0x3, b[758]), window[b[641]](b[758]);
        return;
    }
    if (_iek[b[428]] != b[427]) {
        window[b[662]](0x3, b[759] + _iek[b[428]]), window[b[641]](b[759] + _iek[b[428]]);
        return;
    }
    if (!_iek[b[429]] || _iek[b[429]][b[284]] == 0x0) {
        window[b[662]](0x3, b[760]), window[b[641]](b[761]);
        return;
    }
    this[b[762]](_iek);
}, window[b[754]] = function (jsx3o) {
    var q5h2 = this;
    sendApi(e1IZ[b[599]], b[763], {
        'server_id': jsx3o,
        'time': Date[b[249]]() / 0x3e8
    }, q5h2[b[764]][b[312]](q5h2), e1DZI, e1ZN);
}, window[b[764]] = function (ak0_i) {
    if (!ak0_i) {
        window[b[662]](0x4, b[765]), this[b[755]]();
        return;
    }
    if (ak0_i[b[428]] != b[427]) {
        window[b[662]](0x4, b[766] + ak0_i[b[428]]), this[b[755]]();
        return;
    }
    if (!ak0_i[b[429]] || ak0_i[b[429]][b[284]] == 0x0) {
        window[b[662]](0x4, b[767]), this[b[755]]();
        return;
    }
    this[b[762]](ak0_i), window[b[581]] && window[b[581]][b[250]][b[515]] && window[b[581]][b[250]][b[515]](sdkInitRes[b[768]], sdkInitRes[b[769]], sdkInitRes[b[770]], sdkInitRes[b[771]], sdkInitRes[b[772]]);
}, window[b[762]] = function (bzp7) {
    e1IZ[b[529]] = bzp7[b[773]] != undefined ? bzp7[b[773]] : 0x0, e1IZ[b[256]] = {
        'server_id': String(bzp7[b[429]][0x0][b[76]]),
        'server_name': String(bzp7[b[429]][0x0][b[401]]),
        'entry_ip': bzp7[b[429]][0x0][b[774]],
        'entry_port': parseInt(bzp7[b[429]][0x0][b[775]]),
        'status': e1IDN(bzp7[b[429]][0x0]),
        'start_time': bzp7[b[429]][0x0][b[776]],
        'maintain_time': bzp7[b[429]][0x0][b[417]] ? bzp7[b[429]][0x0][b[417]] : '',
        'cdn': e1IZ[b[405]]
    }, this[b[777]]();
}, window[b[777]] = function () {
    if (e1IZ[b[529]] == 0x1) {
        var m9k = e1IZ[b[256]][b[402]];
        if (m9k === -0x1 || m9k === 0x0) {
            window[b[662]](0xf, b[778] + e1IZ[b[256]]['id'] + b[779] + e1IZ[b[256]][b[402]]), window[b[641]](m9k === -0x1 ? b[780] : b[781]);
            return;
        }
        e1ZNDI(0x0, e1IZ[b[256]][b[76]]), window[b[581]][b[250]][b[523]](e1IZ[b[529]]);
    } else window[b[581]][b[250]][b[521]](), e1NIZD();
    window[b[631]] = !![], window[b[512]](), window[b[513]]();
}, window[b[714]] = function () {
    sendApi(e1IZ[b[599]], b[782], {
        'game_pkg': e1IZ[b[371]],
        'version_name': e1IZ[b[701]]
    }, this[b[783]][b[312]](this), e1DZI, e1ZN);
}, window[b[783]] = function (mfg09) {
    if (!mfg09) {
        window[b[662]](0x5, b[784]), window[b[641]](b[784]);
        return;
    }
    if (mfg09[b[428]] != b[427]) {
        window[b[662]](0x5, b[785] + mfg09[b[428]]), window[b[641]](b[785] + mfg09[b[428]]);
        return;
    }
    if (!mfg09[b[429]] || !mfg09[b[429]][b[595]]) {
        window[b[662]](0x5, b[786] + (mfg09[b[429]] && mfg09[b[429]][b[595]])), window[b[641]](b[786] + (mfg09[b[429]] && mfg09[b[429]][b[595]]));
        return;
    }
    mfg09[b[429]][b[787]] && mfg09[b[429]][b[787]][b[284]] > 0xa && (e1IZ[b[788]] = mfg09[b[429]][b[787]], e1IZ[b[405]] = mfg09[b[429]][b[787]]), mfg09[b[429]][b[595]] && (e1IZ[b[314]] = mfg09[b[429]][b[595]]), console[b[654]](b[789] + e1IZ[b[314]] + b[790] + e1IZ[b[701]]), window[b[629]] = !![], window[b[512]](), window[b[513]]();
}, window[b[791]], window[b[715]] = function () {
    sendApi(e1IZ[b[599]], b[792], { 'game_pkg': e1IZ[b[371]] }, this[b[793]][b[312]](this), e1DZI, e1ZN);
}, window[b[793]] = function (a0i_fk) {
    if (a0i_fk && a0i_fk[b[428]] === b[427] && a0i_fk[b[429]]) {
        window[b[791]] = a0i_fk[b[429]];
        for (var g1x9 in a0i_fk[b[429]]) {
            e1IZ[g1x9] = a0i_fk[b[429]][g1x9];
        }
    } else window[b[662]](0xb, b[794]), console[b[654]](b[795] + a0i_fk[b[428]]);
    window[b[630]] = !![], window[b[513]]();
}, window[b[796]] = function (moxg19, $atike, x5s31, ia_0f, r7d48, km0f_9, gmo9f0, suq52n, etvwa, ulhy) {
    r7d48 = String(r7d48);
    var zb6cp7 = gmo9f0,
        rvzd = suq52n;
    e1IZ[b[593]][r7d48] = {
        'productid': r7d48,
        'productname': zb6cp7,
        'productdesc': rvzd,
        'roleid': moxg19,
        'rolename': $atike,
        'rolelevel': x5s31,
        'price': km0f_9,
        'callback': etvwa
    }, sendApi(e1IZ[b[603]], b[797], {
        'game_pkg': e1IZ[b[371]],
        'server_id': e1IZ[b[256]][b[76]],
        'server_name': e1IZ[b[256]][b[401]],
        'level': x5s31,
        'uid': e1IZ[b[668]],
        'role_id': moxg19,
        'role_name': $atike,
        'product_id': r7d48,
        'product_name': zb6cp7,
        'product_desc': rvzd,
        'money': km0f_9,
        'partner_id': e1IZ[b[607]]
    }, toPayCallBack, e1DZI, e1ZN);
}, window[b[798]] = function (m9og1) {
    if (m9og1 && (m9og1[b[799]] === 0xc8 || m9og1[b[428]] == b[427])) {
        var jq3 = e1IZ[b[593]][String(m9og1[b[800]])];
        if (jq3[b[801]]) jq3[b[801]](m9og1[b[800]], m9og1[b[802]], -0x1);
        ezb7d6c[b[62]]({
            'cpbill': m9og1[b[802]],
            'productid': m9og1[b[800]],
            'productname': jq3[b[803]],
            'productdesc': jq3[b[804]],
            'serverid': e1IZ[b[256]][b[76]],
            'servername': e1IZ[b[256]][b[401]],
            'roleid': jq3[b[805]],
            'rolename': jq3[b[806]],
            'rolelevel': jq3[b[807]],
            'price': jq3[b[808]],
            'extension': JSON[b[540]]({ 'cp_order_id': m9og1[b[802]] })
        }, function (m13g, cbp76) {
            jq3[b[801]] && m13g == 0x0 && jq3[b[801]](m9og1[b[800]], m9og1[b[802]], m13g);
            console[b[654]](JSON[b[540]]({
                'type': b[809],
                'status': m13g,
                'data': m9og1,
                'role_name': jq3[b[806]]
            }));
            if (m13g === 0x0) {} else {
                if (m13g === 0x1) {} else {
                    if (m13g === 0x2) {}
                }
            }
        });
    } else {
        var $teiwa = m9og1 ? b[810] + m9og1[b[799]] + b[811] + m9og1[b[428]] + b[812] + m9og1[b[654]] : b[813];
        window[b[662]](0xd, b[814] + $teiwa), alert($teiwa);
    }
}, window[b[815]] = function () {}, window[b[816]] = function (i_akf, x31osj, uqs25n, z76bp, bzr47) {
    ezb7d6c[b[90]](e1IZ[b[256]][b[76]], e1IZ[b[256]][b[401]] || e1IZ[b[256]][b[76]], i_akf, x31osj, uqs25n), sendApi(e1IZ[b[599]], b[817], {
        'game_pkg': e1IZ[b[371]],
        'server_id': e1IZ[b[256]][b[76]],
        'role_id': i_akf,
        'uid': e1IZ[b[668]],
        'role_name': x31osj,
        'role_type': z76bp,
        'level': uqs25n
    });
}, window[b[818]] = function (d7rb, rdv8z4, h2q5un, ulhy2n, ulyhn, x3gj1, $taiew, oxj3g1, s5jn, gm19xo) {
    e1IZ[b[665]] = d7rb, e1IZ[b[666]] = rdv8z4, e1IZ[b[667]] = h2q5un, ezb7d6c[b[91]](e1IZ[b[256]][b[76]], e1IZ[b[256]][b[401]] || e1IZ[b[256]][b[76]], d7rb, rdv8z4, h2q5un), sendApi(e1IZ[b[599]], b[819], {
        'game_pkg': e1IZ[b[371]],
        'server_id': e1IZ[b[256]][b[76]],
        'role_id': d7rb,
        'uid': e1IZ[b[668]],
        'role_name': rdv8z4,
        'role_type': ulhy2n,
        'level': h2q5un,
        'evolution': ulyhn
    });
}, window[b[820]] = function (s1xoj, _0kfm9, qjn25s, fo0mg, r4bz, go31m, we$tai, sjqn5, og, pbc76z) {
    e1IZ[b[665]] = s1xoj, e1IZ[b[666]] = _0kfm9, e1IZ[b[667]] = qjn25s, ezb7d6c[b[92]](e1IZ[b[256]][b[76]], e1IZ[b[256]][b[401]] || e1IZ[b[256]][b[76]], s1xoj, _0kfm9, qjn25s), sendApi(e1IZ[b[599]], b[819], {
        'game_pkg': e1IZ[b[371]],
        'server_id': e1IZ[b[256]][b[76]],
        'role_id': s1xoj,
        'uid': e1IZ[b[668]],
        'role_name': _0kfm9,
        'role_type': fo0mg,
        'level': qjn25s,
        'evolution': r4bz
    });
}, window[b[821]] = function (i$ewt) {}, window[b[822]] = function (vwa$te) {
    ezb7d6c[b[44]](b[44], function (r7d8z4) {
        vwa$te && vwa$te(r7d8z4);
    });
}, window[b[89]] = function () {
    ezb7d6c[b[89]]();
}, window[b[823]] = function () {
    ezb7d6c[b[96]] && ezb7d6c[b[96]]();
}, window[b[824]] = function (jq23s, jsqn2, k0if9, e$vta, ia$ek, eak$i_, ki_ea$, qul) {
    qul = qul || e1IZ[b[256]][b[76]], sendApi(e1IZ[b[599]], b[825], {
        'phone': jq23s,
        'role_id': jsqn2,
        'uid': e1IZ[b[668]],
        'game_pkg': e1IZ[b[371]],
        'partner_id': e1IZ[b[607]],
        'server_id': qul
    }, ki_ea$, 0x2, null, function () {
        return !![];
    });
}, window[b[826]] = function (ia$ewt) {
    window[b[827]] = ia$ewt, window[b[827]] && window[b[828]] && (console[b[654]](b[829] + window[b[828]][b[830]]), window[b[827]](window[b[828]]), window[b[828]] = null);
}, window[b[831]] = function (a_kf0i, rwv48t, mxgo31, i_af) {
    window[b[832]](b[833], {
        'game_pkg': window[b[255]][b[371]],
        'role_id': rwv48t,
        'server_id': mxgo31
    }, i_af);
}, window[b[834]] = function (evtw, i9f0_, qj51s) {
    function xgm3(rz7b4) {
        var om0f = [],
            lynh2 = [],
            j1osx = qj51s || window[b[583]][b[835]];
        for (var xo3jg in j1osx) {
            var _k$0 = Number(xo3jg);
            (!evtw || !evtw[b[284]] || evtw[b[562]](_k$0) != -0x1) && (lynh2[b[433]](j1osx[xo3jg]), om0f[b[433]]([_k$0, 0x3]));
        }
        window[b[702]](window[b[836]], b[837]) >= 0x0 ? (console[b[425]](b[838]), ezb7d6c[b[25]] && ezb7d6c[b[25]](lynh2, function (t4rwv) {
            console[b[425]](b[839]), console[b[425]](t4rwv);
            if (t4rwv && t4rwv[b[726]] == b[840]) for (var j513xs in j1osx) {
                if (t4rwv[j1osx[j513xs]] == b[841]) {
                    var kf0m9 = Number(j513xs);
                    for (var akfi = 0x0; akfi < om0f[b[284]]; akfi++) {
                        if (om0f[akfi][0x0] == kf0m9) {
                            om0f[akfi][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[b[702]](window[b[836]], b[842]) >= 0x0 ? wx[b[843]]({
                'withSubscriptions': !![],
                'success': function (fmo0g9) {
                    var gxo9fm = fmo0g9[b[844]][b[845]];
                    if (gxo9fm) {
                        console[b[425]](b[846]), console[b[425]](gxo9fm);
                        for (var tew$va in j1osx) {
                            if (gxo9fm[j1osx[tew$va]] == b[841]) {
                                var m9o1gx = Number(tew$va);
                                for (var ika$et = 0x0; ika$et < om0f[b[284]]; ika$et++) {
                                    if (om0f[ika$et][0x0] == m9o1gx) {
                                        om0f[ika$et][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[b[425]](om0f), i9f0_ && i9f0_(om0f);
                    } else console[b[425]](b[847]), console[b[425]](fmo0g9), console[b[425]](om0f), i9f0_ && i9f0_(om0f);
                },
                'fail': function () {
                    console[b[425]](b[848]), console[b[425]](om0f), i9f0_ && i9f0_(om0f);
                }
            }) : (console[b[425]](b[849] + window[b[836]]), console[b[425]](om0f), i9f0_ && i9f0_(om0f));
        })) : (console[b[425]](b[850] + window[b[836]]), console[b[425]](om0f), i9f0_ && i9f0_(om0f)), wx[b[851]](xgm3);
    }
    wx[b[852]](xgm3);
}, window[b[853]] = {
    'isSuccess': ![],
    'level': b[854],
    'isCharging': ![]
}, window[b[855]] = function (j2s5q) {
    wx[b[856]]({
        'success': function (m9_fg) {
            var aiek_ = window[b[853]];
            aiek_[b[857]] = !![], aiek_[b[858]] = Number(m9_fg[b[858]])[b[859]](0x0), aiek_[b[860]] = m9_fg[b[860]], j2s5q && j2s5q(aiek_[b[857]], aiek_[b[858]], aiek_[b[860]]);
        },
        'fail': function (c6bz7) {
            console[b[425]](b[861], c6bz7[b[726]]);
            var ika$_0 = window[b[853]];
            j2s5q && j2s5q(ika$_0[b[857]], ika$_0[b[858]], ika$_0[b[860]]);
        }
    });
}, window[b[862]] = function (m_g9f) {
    wx[b[862]]({
        'success': function (k$_0i) {
            m_g9f && m_g9f(!![], k$_0i);
        },
        'fail': function (w48vet) {
            m_g9f && m_g9f(![], w48vet);
        }
    });
}, window[b[863]] = function (mo0f9g) {
    if (mo0f9g) wx[b[863]](mo0f9g);
}, window[b[864]] = function (cbzdr) {
    wx[b[864]](cbzdr);
}, window[b[832]] = function (jqs153, z67cbp, m9ogf, h5nuq, xj1s53, fik_0a, m0o9g, sq5j23) {
    if (h5nuq == undefined) h5nuq = 0x1;
    wx[b[683]]({
        'url': jqs153,
        'method': m0o9g || b[865],
        'responseType': b[309],
        'data': z67cbp,
        'header': { 'content-type': sq5j23 || b[684] },
        'success': function (ek_$ia) {
            DEBUG && console[b[425]](b[866], jqs153, info, ek_$ia);
            if (ek_$ia && ek_$ia[b[867]] == 0xc8) {
                var ns5jq2 = ek_$ia[b[429]];
                !fik_0a || fik_0a(ns5jq2) ? m9ogf && m9ogf(ns5jq2) : window[b[868]](jqs153, z67cbp, m9ogf, h5nuq, xj1s53, fik_0a, ek_$ia);
            } else window[b[868]](jqs153, z67cbp, m9ogf, h5nuq, xj1s53, fik_0a, ek_$ia);
        },
        'fail': function (j13ogx) {
            DEBUG && console[b[425]](b[869], jqs153, info, j13ogx), window[b[868]](jqs153, z67cbp, m9ogf, h5nuq, xj1s53, fik_0a, j13ogx);
        },
        'complete': function () {}
    });
}, window[b[868]] = function (hunq2l, nul2qh, rz7d4, _k$i0a, zdrb4, ti$, drb74z) {
    _k$i0a - 0x1 > 0x0 ? setTimeout(function () {
        window[b[832]](hunq2l, nul2qh, rz7d4, _k$i0a - 0x1, zdrb4, ti$);
    }, 0x3e8) : zdrb4 && zdrb4(JSON[b[540]]({
        'url': hunq2l,
        'response': drb74z
    }));
}, window[b[870]] = function (weit$a, uqnhl, g1x, xjs31, kfm0, fg9_m0, atiw$) {
    !g1x && (g1x = {});
    var mgf9ox = Math[b[543]](Date[b[249]]() / 0x3e8);
    g1x[b[751]] = mgf9ox, g1x[b[871]] = uqnhl;
    var e$itka = Object[b[872]](g1x)[b[434]](),
        _9f0i = '',
        zvr84 = '';
    for (var fxgm9o = 0x0; fxgm9o < e$itka[b[284]]; fxgm9o++) {
        _9f0i = _9f0i + (fxgm9o == 0x0 ? '' : '&') + e$itka[fxgm9o] + g1x[e$itka[fxgm9o]], zvr84 = zvr84 + (fxgm9o == 0x0 ? '' : '&') + e$itka[fxgm9o] + '=' + encodeURIComponent(g1x[e$itka[fxgm9o]]);
    }
    _9f0i = _9f0i + e1IZ[b[605]];
    var rcd7bz = b[873] + md5(_9f0i);
    send(weit$a + '?' + zvr84 + (zvr84 == '' ? '' : '&') + rcd7bz, null, xjs31, kfm0, fg9_m0, atiw$ || function (evt$a) {
        return evt$a[b[428]] == b[427];
    }, null, b[35]);
}, window[b[874]] = function (omg1, sjq352) {
    var oxm9f = 0x0;
    e1IZ[b[256]] && (oxm9f = e1IZ[b[256]][b[76]]), sendApi(e1IZ[b[601]], b[875], {
        'partnerId': e1IZ[b[607]],
        'gamePkg': e1IZ[b[371]],
        'logTime': Math[b[543]](Date[b[249]]() / 0x3e8),
        'platformUid': e1IZ[b[747]],
        'type': omg1,
        'serverId': oxm9f
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[b[876]] = function (d74zb) {
    sendApi(e1IZ[b[599]], b[877], {
        'partner_id': e1IZ[b[607]],
        'uid': e1IZ[b[668]],
        'version': e1IZ[b[595]],
        'game_pkg': e1IZ[b[371]],
        'device': e1IZ[b[608]]
    }, e1IZDN, e1DZI, e1ZN);
}, window[b[878]] = function (ev$tw8) {
    if (ev$tw8 && ev$tw8[b[428]] === b[427] && ev$tw8[b[429]]) {
        ev$tw8[b[429]][b[879]]({
            'id': -0x2,
            'name': b[880]
        }), ev$tw8[b[429]][b[879]]({
            'id': -0x1,
            'name': b[881]
        }), e1IZ[b[370]] = ev$tw8[b[429]];
        if (window[b[361]]) window[b[361]][b[406]]();
    } else {
        e1IZ[b[381]] = ![];
        var x3jg = ev$tw8 ? ev$tw8[b[428]] : '';
        window[b[662]](0x7, b[882] + x3jg), window[b[641]](b[883] + x3jg);
    }
}, window[b[884]] = function (jn25q) {
    sendApi(e1IZ[b[599]], b[885], {
        'partner_id': e1IZ[b[607]],
        'uid': e1IZ[b[668]],
        'version': e1IZ[b[595]],
        'game_pkg': e1IZ[b[371]],
        'device': e1IZ[b[608]]
    }, e1NID, e1DZI, e1ZN);
}, window[b[886]] = function (xoj1g3) {
    e1IZ[b[414]] = ![];
    if (xoj1g3 && xoj1g3[b[428]] === b[427] && xoj1g3[b[429]]) {
        for (var t8e4wv = 0x0; t8e4wv < xoj1g3[b[429]][b[284]]; t8e4wv++) {
            xoj1g3[b[429]][t8e4wv][b[402]] = e1IDN(xoj1g3[b[429]][t8e4wv]);
        }
        e1IZ[b[412]][-0x1] = window[b[887]](xoj1g3[b[429]]), window[b[361]][b[413]](-0x1);
    } else {
        var wt8ve = xoj1g3 ? xoj1g3[b[428]] : '';
        window[b[662]](0x8, b[888] + wt8ve), window[b[641]](b[889] + wt8ve);
    }
}, window[b[890]] = function (o3gmx) {
    sendApi(e1IZ[b[599]], b[885], {
        'partner_id': e1IZ[b[607]],
        'uid': e1IZ[b[668]],
        'version': e1IZ[b[595]],
        'game_pkg': e1IZ[b[371]],
        'device': e1IZ[b[608]]
    }, o3gmx, e1DZI, e1ZN);
}, window[b[891]] = function (x1g3o, $vwae) {
    sendApi(e1IZ[b[599]], b[892], {
        'partner_id': e1IZ[b[607]],
        'uid': e1IZ[b[668]],
        'version': e1IZ[b[595]],
        'game_pkg': e1IZ[b[371]],
        'device': e1IZ[b[608]],
        'server_group_id': $vwae
    }, e1DIN, e1DZI, e1ZN);
}, window[b[893]] = function (j3xos) {
    e1IZ[b[414]] = ![];
    if (j3xos && j3xos[b[428]] === b[427] && j3xos[b[429]] && j3xos[b[429]][b[429]]) {
        var x1mg3 = j3xos[b[429]][b[894]],
            og9mx1 = [];
        for (var ae$vwt = 0x0; ae$vwt < j3xos[b[429]][b[429]][b[284]]; ae$vwt++) {
            j3xos[b[429]][b[429]][ae$vwt][b[402]] = e1IDN(j3xos[b[429]][b[429]][ae$vwt]), (og9mx1[b[284]] == 0x0 || j3xos[b[429]][b[429]][ae$vwt][b[402]] != 0x0) && (og9mx1[og9mx1[b[284]]] = j3xos[b[429]][b[429]][ae$vwt]);
        }
        e1IZ[b[412]][x1mg3] = window[b[887]](og9mx1), window[b[361]][b[413]](x1mg3);
    } else {
        var f0om9g = j3xos ? j3xos[b[428]] : '';
        window[b[662]](0x9, b[895] + f0om9g), window[b[641]](b[896] + f0om9g);
    }
}, window[b[897]] = function (d48rz) {
    sendApi(e1IZ[b[599]], b[898], {
        'partner_id': e1IZ[b[607]],
        'uid': e1IZ[b[668]],
        'version': e1IZ[b[595]],
        'game_pkg': e1IZ[b[371]],
        'device': e1IZ[b[608]]
    }, reqServerRecommendCallBack, e1DZI, e1ZN);
}, window[b[899]] = function (qh25n) {
    e1IZ[b[414]] = ![];
    if (qh25n && qh25n[b[428]] === b[427] && qh25n[b[429]]) {
        for (var nhylu2 = 0x0; nhylu2 < qh25n[b[429]][b[284]]; nhylu2++) {
            qh25n[b[429]][nhylu2][b[402]] = e1IDN(qh25n[b[429]][nhylu2]);
        }
        e1IZ[b[412]][-0x2] = window[b[887]](qh25n[b[429]]), window[b[361]][b[413]](-0x2);
    } else {
        var o1j3s = qh25n ? qh25n[b[428]] : '';
        window[b[662]](0xa, b[900] + o1j3s), alert(b[901] + o1j3s);
    }
}, window[b[887]] = function (rtwv48) {
    return rtwv48;
}, window[b[902]] = function (xm9go1, dv8z4r) {
    xm9go1 = xm9go1 || e1IZ[b[256]][b[76]], sendApi(e1IZ[b[599]], b[903], {
        'type': '4',
        'game_pkg': e1IZ[b[371]],
        'server_id': xm9go1
    }, dv8z4r);
}, window[b[904]] = function (osxj13, mf9ox, fk9_i0, uqhn25) {
    fk9_i0 = fk9_i0 || e1IZ[b[256]][b[76]], sendApi(e1IZ[b[599]], b[905], {
        'type': osxj13,
        'game_pkg': mf9ox,
        'server_id': fk9_i0
    }, uqhn25);
}, window[b[906]] = function (yhu2nl, s523j) {
    sendApi(e1IZ[b[599]], b[907], { 'game_pkg': yhu2nl }, s523j);
}, window[b[908]] = function (sn52) {
    if (sn52) {
        if (sn52[b[402]] == 0x1) {
            if (sn52[b[909]] == 0x1) return 0x2;else return 0x1;
        } else return sn52[b[402]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[b[910]] = function (ve8w$, x19g) {
    e1IZ[b[911]] = {
        'step': ve8w$,
        'server_id': x19g
    };
    var c7db6 = this;
    e1NIDZ({ 'title': b[912] }), sendApi(e1IZ[b[599]], b[913], {
        'partner_id': e1IZ[b[607]],
        'uid': e1IZ[b[668]],
        'game_pkg': e1IZ[b[371]],
        'server_id': x19g,
        'platform': e1IZ[b[746]],
        'platform_uid': e1IZ[b[747]],
        'check_login_time': e1IZ[b[750]],
        'check_login_sign': e1IZ[b[748]],
        'version_name': e1IZ[b[701]]
    }, e1ZNID, e1DZI, e1ZN, function (vwe) {
        return vwe[b[428]] == b[427] || vwe[b[654]] == b[914] || vwe[b[654]] == b[915];
    });
}, window[b[916]] = function (x5sj3) {
    var _9fmg = this;
    if (x5sj3 && x5sj3[b[428]] === b[427] && x5sj3[b[429]]) {
        var $eakti = e1IZ[b[256]];
        $eakti[b[917]] = e1IZ[b[610]], $eakti[b[749]] = String(x5sj3[b[429]][b[918]]), $eakti[b[617]] = parseInt(x5sj3[b[429]][b[751]]);
        if (x5sj3[b[429]][b[919]]) $eakti[b[919]] = parseInt(x5sj3[b[429]][b[919]]);else $eakti[b[919]] = parseInt(x5sj3[b[429]][b[76]]);
        $eakti[b[920]] = 0x0, $eakti[b[405]] = e1IZ[b[788]], $eakti[b[921]] = x5sj3[b[429]][b[922]], $eakti[b[923]] = x5sj3[b[429]][b[923]];
        if (x5sj3[b[429]][b[924]]) $eakti[b[924]] = parseInt(x5sj3[b[429]][b[924]]);
        console[b[425]](b[925] + JSON[b[540]]($eakti[b[923]])), e1IZ[b[529]] == 0x1 && $eakti[b[923]] && $eakti[b[923]][b[926]] == 0x1 && (e1IZ[b[317]] = 0x1, window[b[581]][b[250]][b[527]]()), e1ZDNI();
    } else {
        if (e1IZ[b[911]][b[927]] >= 0x3) {
            var ekt$ = x5sj3 ? x5sj3[b[428]] : '';
            window[b[662]](0xc, b[928] + ekt$), e1ZN(JSON[b[540]](x5sj3)), window[b[641]](b[929] + ekt$);
        } else sendApi(e1IZ[b[599]], b[723], {
            'platform': e1IZ[b[597]],
            'partner_id': e1IZ[b[607]],
            'token': e1IZ[b[720]],
            'game_pkg': e1IZ[b[371]],
            'deviceId': e1IZ[b[608]],
            'scene': b[724] + e1IZ[b[609]]
        }, function (jxgo31) {
            if (!jxgo31 || jxgo31[b[428]] != b[427]) {
                window[b[641]](b[742] + jxgo31 && jxgo31[b[428]]);
                return;
            }
            e1IZ[b[748]] = String(jxgo31[b[749]]), e1IZ[b[750]] = String(jxgo31[b[751]]), setTimeout(function () {
                e1ZNDI(e1IZ[b[911]][b[927]] + 0x1, e1IZ[b[911]][b[76]]);
            }, 0x5dc);
        }, e1DZI, e1ZN, function (zc76p) {
            return zc76p[b[428]] == b[427] || zc76p[b[428]] == b[930];
        });
    }
}, window[b[931]] = function () {
    ServerLoading[b[250]][b[523]](e1IZ[b[529]]), window[b[626]] = !![], window[b[513]]();
}, window[b[512]] = function () {
    if (window[b[627]] && window[b[628]] && window[b[511]] && window[b[522]] && window[b[629]] && window[b[631]]) {
        if (!window[b[932]][b[250]]) {
            console[b[425]](b[933] + window[b[932]][b[250]]);
            var js153x = wx[b[934]](),
                awi$ = js153x[b[830]] ? js153x[b[830]] : 0x0,
                ojs13x = {
                'cdn': window[b[255]][b[405]],
                'spareCdn': window[b[255]][b[708]],
                'newRegister': window[b[255]][b[529]],
                'wxPC': window[b[255]][b[624]],
                'wxIOS': window[b[255]][b[622]],
                'wxAndroid': window[b[255]][b[623]],
                'wxParam': {
                    'limitLoad': window[b[255]][b[935]],
                    'benchmarkLevel': window[b[255]][b[936]],
                    'wxFrom': window[b[583]][b[713]] == b[937] ? 0x1 : 0x0,
                    'wxSDKVersion': window[b[836]]
                },
                'configType': window[b[255]][b[618]],
                'exposeType': window[b[255]][b[620]],
                'scene': awi$
            };
            new window[b[932]](ojs13x, window[b[255]][b[314]], window[b[590]]);
        }
    }
}, window[b[513]] = function () {
    if (window[b[627]] && window[b[628]] && window[b[511]] && window[b[522]] && window[b[629]] && window[b[631]] && window[b[626]] && window[b[630]]) {
        e1NIZD();
        if (!e1ZDI) {
            e1ZDI = !![];
            if (!window[b[932]][b[250]]) window[b[512]]();
            var ew48t = 0x0,
                un2hql = wx[b[938]]();
            un2hql && (window[b[255]][b[939]] && (ew48t = un2hql[b[206]]), console[b[654]](b[940] + un2hql[b[206]] + b[941] + un2hql[b[328]] + b[942] + un2hql[b[943]] + b[944] + un2hql[b[166]] + b[945] + un2hql[b[276]] + b[946] + un2hql[b[278]]));
            var nqj5s2 = {};
            for (const u2hnq in e1IZ[b[256]]) {
                nqj5s2[u2hnq] = e1IZ[b[256]][u2hnq];
            }
            var qj5 = {
                'channel': window[b[255]][b[611]],
                'account': window[b[255]][b[668]],
                'userId': window[b[255]][b[745]],
                'cdn': window[b[255]][b[405]],
                'data': window[b[255]][b[429]],
                'package': window[b[255]][b[594]],
                'newRegister': window[b[255]][b[529]],
                'pkgName': window[b[255]][b[371]],
                'partnerId': window[b[255]][b[607]],
                'platform_uid': window[b[255]][b[747]],
                'deviceId': window[b[255]][b[608]],
                'selectedServer': nqj5s2,
                'configType': window[b[255]][b[618]],
                'exposeType': window[b[255]][b[620]],
                'debugUsers': window[b[255]][b[615]],
                'wxMenuTop': ew48t,
                'wxShield': window[b[255]][b[621]],
                'wx_channel': window[b[255]][b[721]]
            };
            if (window[b[791]]) for (var m9xgo in window[b[791]]) {
                qj5[m9xgo] = window[b[791]][m9xgo];
            }
            window[b[932]][b[250]][b[947]](qj5);
            if (e1IZ[b[256]] && e1IZ[b[256]][b[76]]) localStorage[b[382]](b[753] + e1IZ[b[371]] + e1IZ[b[668]], e1IZ[b[256]][b[76]]);
        }
    } else console[b[654]](b[948] + window[b[627]] + b[949] + window[b[628]] + b[950] + window[b[511]] + b[951] + window[b[522]] + b[952] + window[b[629]] + b[953] + window[b[631]] + b[954] + window[b[626]] + b[955] + window[b[630]]);
};