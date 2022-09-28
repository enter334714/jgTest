var f = wx.$B;
import Sqs86 from '../a0cc/ru6f.js';
window[f[586]] = { 'wxVersion': window[f[587]][f[588]] }, window[f[589]] = ![], window[f[590]] = 0x1, window[f[591]] = 0x1, window[f[592]] = !![], window[f[593]] = !![], window[f[594]] = '', window[f[595]] = ![], window[f[259]] = {
    'base_cdn': f[596],
    'cdn': f[596]
}, t1LO[f[597]] = {}, t1LO[f[598]] = '0', t1LO[f[599]] = window[f[586]][f[320]], t1LO[f[600]] = '', t1LO['os'] = '1', t1LO[f[601]] = f[602], t1LO[f[603]] = f[604], t1LO[f[605]] = f[606], t1LO[f[607]] = f[608], t1LO[f[609]] = f[610], t1LO[f[611]] = '1', t1LO[f[374]] = '', t1LO[f[612]] = '', t1LO[f[613]] = 0x0, t1LO[f[415]] = {}, t1LO[f[614]] = parseInt(t1LO[f[611]]), t1LO[f[615]] = t1LO[f[611]], t1LO[f[260]] = {}, t1LO[f[616]] = f[617], t1LO[f[618]] = ![], t1LO[f[619]] = f[620], t1LO[f[621]] = Date[f[253]](), t1LO[f[622]] = f[623], t1LO[f[624]] = '_a', t1LO[f[303]] = 0x2, t1LO[f[318]] = 0x7c1, t1LO[f[320]] = window[f[586]][f[320]], t1LO[f[625]] = ![], t1LO[f[626]] = ![], t1LO[f[627]] = ![], t1LO[f[628]] = ![], window[f[629]] = 0x5, window[f[630]] = ![], window[f[631]] = ![], window[f[632]] = ![], window[f[514]] = ![], window[f[525]] = ![], window[f[633]] = ![], window[f[634]] = ![], window[f[635]] = ![], window[f[636]] = ![], window[f[520]] = null, window[f[637]] = function (epkmt) {
    console[f[428]](f[637], epkmt), wx[f[638]]({}), wx[f[639]]({
        'title': f[640],
        'content': epkmt,
        'success'(nr_7j) {
            if (nr_7j[f[641]]) console[f[428]](f[642]);else nr_7j[f[643]] && console[f[428]](f[644]);
        }
    });
}, window[f[645]] = function (fzbrd) {
    console[f[428]](f[646], fzbrd), t1ZLOI(), wx[f[639]]({
        'title': f[640],
        'content': fzbrd,
        'confirmText': f[647],
        'cancelText': f[648],
        'success'(khtp4e) {
            if (khtp4e[f[641]]) window[f[649]]();else khtp4e[f[643]] && (console[f[428]](f[650]), wx[f[651]]({}));
        }
    });
}, window[f[652]] = function (i53) {
    console[f[428]](f[652], i53), wx[f[639]]({
        'title': f[640],
        'content': i53,
        'confirmText': f[653],
        'showCancel': ![],
        'complete'(qaus86) {
            console[f[428]](f[650]), wx[f[651]]({});
        }
    });
}, window[f[654]] = ![], window[f[655]] = function (l16u5) {
    window[f[654]] = !![], wx[f[656]](l16u5);
}, window[f[657]] = function () {
    window[f[654]] && (window[f[654]] = ![], wx[f[638]]({}));
}, window[f[508]] = function (j9$e47) {
    window[f[584]][f[254]][f[508]](j9$e47);
}, window[f[100]] = function (ghpmx, ktp4h) {
    Sqs86[f[100]](ghpmx, function (aus36) {
        aus36 && aus36[f[432]] ? aus36[f[432]][f[431]] == 0x1 ? ktp4h(!![]) : (ktp4h(![]), console[f[658]](f[659] + aus36[f[432]][f[660]])) : console[f[428]](f[100], aus36);
    });
}, window[f[661]] = function (vs8qa2) {
    console[f[428]](f[662], vs8qa2);
}, window[f[309]] = function (kgtmph) {}, window[f[314]] = function (ua8q2, oxhimg, t4kph) {}, window[f[663]] = function (z7$r) {
    console[f[428]](f[664], z7$r), window[f[584]][f[254]][f[307]](), window[f[584]][f[254]][f[308]](), window[f[584]][f[254]][f[324]]();
}, window[f[665]] = function (mxhoi) {
    window[f[666]](0xe, f[667] + mxhoi), window[f[645]](f[668]);
    var pethm = {
        'id': window[f[259]][f[669]],
        'role': window[f[259]][f[670]],
        'level': window[f[259]][f[671]],
        'account': window[f[259]][f[672]],
        'version': window[f[259]][f[318]],
        'cdn': window[f[259]][f[408]],
        'pkgName': window[f[259]][f[374]],
        'gamever': window[f[587]][f[588]],
        'serverid': window[f[259]][f[260]] ? window[f[259]][f[260]][f[83]] : 0x0,
        'systemInfo': window[f[673]],
        'error': f[674],
        'stack': mxhoi ? mxhoi : f[668]
    },
        pghot = JSON[f[543]](pethm);
    console[f[545]](f[675] + pghot), window[f[616]](pghot);
}, window[f[666]] = function (goth, ghotpm) {
    sendApi(t1LO[f[605]], f[676], {
        'game_pkg': t1LO[f[374]],
        'partner_id': t1LO[f[611]],
        'server_id': t1LO[f[260]] && t1LO[f[260]][f[83]] > 0x0 ? t1LO[f[260]][f[83]] : 0x0,
        'uid': t1LO[f[672]] > 0x0 ? t1LO[f[672]] : 0x0,
        'type': goth,
        'info': ghotpm
    });
}, window[f[677]] = function (jrn7) {
    var mkpe = JSON[f[678]](jrn7);
    mkpe[f[679]] = window[f[587]][f[588]], mkpe[f[680]] = window[f[259]][f[260]] ? window[f[259]][f[260]][f[83]] : 0x0, mkpe[f[673]] = window[f[673]];
    var ox1il = JSON[f[543]](mkpe);
    console[f[545]](f[681] + ox1il), window[f[616]](ox1il);
}, window[f[682]] = function (_bfdrz, xhoigm) {
    var l53u6 = {
        'id': window[f[259]][f[669]],
        'role': window[f[259]][f[670]],
        'level': window[f[259]][f[671]],
        'account': window[f[259]][f[672]],
        'version': window[f[259]][f[318]],
        'cdn': window[f[259]][f[408]],
        'pkgName': window[f[259]][f[374]],
        'gamever': window[f[587]][f[588]],
        'serverid': window[f[259]][f[260]] ? window[f[259]][f[260]][f[83]] : 0x0,
        'systemInfo': window[f[673]],
        'error': _bfdrz,
        'stack': xhoigm
    },
        lu6315 = JSON[f[543]](l53u6);
    console[f[562]](f[683] + lu6315), window[f[616]](lu6315);
}, window[f[616]] = function (u6s35) {
    if (window[f[259]][f[684]] == f[685]) return;
    var pghtm = t1LO[f[616]] + f[686] + t1LO[f[672]];
    wx[f[687]]({
        'url': pghtm,
        'method': f[35],
        'data': u6s35,
        'header': {
            'content-type': f[688],
            'cache-control': f[689]
        },
        'success': function (xwi3l1) {
            DEBUG && console[f[428]](f[690], pghtm, u6s35, xwi3l1);
        },
        'fail': function (n$z7r) {
            DEBUG && console[f[428]](f[690], pghtm, u6s35, n$z7r);
        },
        'complete': function () {}
    });
}, window[f[691]] = function () {
    function lgixwo() {
        return ((0x1 + Math[f[311]]()) * 0x10000 | 0x0)[f[692]](0x10)[f[693]](0x1);
    }
    return lgixwo() + lgixwo() + '-' + lgixwo() + '-' + lgixwo() + '-' + lgixwo() + '+' + lgixwo() + lgixwo() + lgixwo();
}, window[f[649]] = function () {
    console[f[428]](f[694]);
    var vq2y08 = Sqs86[f[695]]();
    t1LO[f[615]] = vq2y08[f[696]], t1LO[f[614]] = vq2y08[f[696]], t1LO[f[611]] = vq2y08[f[696]], t1LO[f[374]] = vq2y08[f[697]];
    var mhiogx = { 'game_ver': t1LO[f[599]] };
    t1LO[f[612]] = this[f[691]](), t1ZLIO({ 'title': f[698] }), Sqs86[f[95]](mhiogx, this[f[699]][f[316]](this));
}, window[f[699]] = function (z$rn) {
    var $49j7e = z$rn[f[521]];
    sdkInitRes = z$rn, console[f[428]](f[700] + $49j7e + f[701] + ($49j7e == 0x1) + f[702] + z$rn[f[588]] + f[703] + window[f[586]][f[320]] + f[704] + z$rn[f[705]]);
    if (!z$rn[f[588]] || window[f[706]](window[f[586]][f[320]], z$rn[f[588]]) < 0x0) console[f[428]](f[707]), t1LO[f[603]] = f[708], t1LO[f[605]] = f[709], t1LO[f[607]] = f[710], t1LO[f[408]] = f[711], t1LO[f[712]] = f[713], t1LO[f[705]] = z$rn[f[705]], t1LO[f[625]] = ![];else window[f[706]](window[f[586]][f[320]], z$rn[f[588]]) == 0x0 ? (console[f[428]](f[714]), t1LO[f[603]] = f[604], t1LO[f[605]] = f[606], t1LO[f[607]] = f[608], t1LO[f[408]] = f[596], t1LO[f[712]] = f[713], t1LO[f[705]] = f[715], t1LO[f[625]] = !![]) : (console[f[428]](f[716]), t1LO[f[603]] = f[604], t1LO[f[605]] = f[606], t1LO[f[607]] = f[608], t1LO[f[408]] = f[596], t1LO[f[712]] = f[713], t1LO[f[705]] = f[715], t1LO[f[625]] = ![]);
    t1LO[f[613]] = config[f[717]] ? config[f[717]] : 0x0, this[f[718]](), this[f[719]](), window[f[720]] = 0x5, t1ZLIO({ 'title': f[721] }), Sqs86[f[19]](this[f[722]][f[316]](this));
}, window[f[720]] = 0x5, window[f[722]] = function (xl1io, ixmgo) {
    if (xl1io == 0x0 && ixmgo && ixmgo[f[29]]) {
        t1LO[f[723]] = ixmgo[f[29]], t1LO[f[724]] = ixmgo[f[724]];
        var he4t = this;
        t1ZLIO({ 'title': f[725] }), sendApi(t1LO[f[603]], f[726], {
            'platform': t1LO[f[601]],
            'partner_id': t1LO[f[611]],
            'token': ixmgo[f[29]],
            'game_pkg': t1LO[f[374]],
            'deviceId': t1LO[f[612]],
            'scene': f[727] + t1LO[f[613]]
        }, this[f[728]][f[316]](this), t1IOL, t1OZ);
    } else ixmgo && ixmgo[f[729]] && window[f[720]] > 0x0 && (ixmgo[f[729]][f[565]](f[730]) != -0x1 || ixmgo[f[729]][f[565]](f[731]) != -0x1 || ixmgo[f[729]][f[565]](f[732]) != -0x1 || ixmgo[f[729]][f[565]](f[733]) != -0x1 || ixmgo[f[729]][f[565]](f[734]) != -0x1 || ixmgo[f[729]][f[565]](f[735]) != -0x1) ? (window[f[720]]--, Sqs86[f[19]](this[f[722]][f[316]](this))) : (window[f[666]](0x1, f[736] + xl1io + f[737] + (ixmgo ? ixmgo[f[729]] : '')), window[f[682]](f[738], JSON[f[543]]({
        'status': xl1io,
        'data': ixmgo
    })), window[f[645]](f[739] + (ixmgo && ixmgo[f[729]] ? '，' + ixmgo[f[729]] : '')));
}, window[f[728]] = function (goxhmp) {
    if (!goxhmp) {
        window[f[666]](0x2, f[740]), window[f[682]](f[741], f[742]), window[f[645]](f[743]);
        return;
    }
    if (goxhmp[f[431]] != f[430]) {
        window[f[666]](0x2, f[744] + goxhmp[f[431]]), window[f[682]](f[741], JSON[f[543]](goxhmp)), window[f[645]](f[745] + goxhmp[f[431]]);
        return;
    }
    if (goxhmp[f[746]] == 0x1) {
        window[f[645]](f[747]);
        return;
    }
    t1LO[f[28]] = String(goxhmp[f[672]]), t1LO[f[672]] = String(goxhmp[f[672]]), t1LO[f[748]] = String(goxhmp[f[748]]), t1LO[f[615]] = String(goxhmp[f[748]]), t1LO[f[749]] = String(goxhmp[f[749]]), t1LO[f[750]] = String(goxhmp[f[751]]), t1LO[f[752]] = String(goxhmp[f[753]]), t1LO[f[751]] = '';
    var pthkg = this;
    t1ZLIO({ 'title': f[754] });
    var mkthg = localStorage[f[379]](f[755] + t1LO[f[374]] + t1LO[f[672]]);
    if (mkthg && mkthg != '') {
        var ilw531 = Number(mkthg);
        pthkg[f[756]](ilw531);
    } else pthkg[f[757]]();
}, window[f[757]] = function () {
    var u36a51 = this;
    sendApi(t1LO[f[603]], f[758], {
        'partner_id': t1LO[f[611]],
        'uid': t1LO[f[672]],
        'version': t1LO[f[599]],
        'game_pkg': t1LO[f[374]],
        'device': t1LO[f[612]]
    }, u36a51[f[759]][f[316]](u36a51), t1IOL, t1OZ);
}, window[f[759]] = function (bz_n) {
    if (!bz_n) {
        window[f[666]](0x3, f[760]), window[f[645]](f[760]);
        return;
    }
    if (bz_n[f[431]] != f[430]) {
        window[f[666]](0x3, f[761] + bz_n[f[431]]), window[f[645]](f[761] + bz_n[f[431]]);
        return;
    }
    if (!bz_n[f[432]] || bz_n[f[432]][f[288]] == 0x0) {
        window[f[666]](0x3, f[762]), window[f[645]](f[763]);
        return;
    }
    this[f[764]](bz_n);
}, window[f[756]] = function (wolx1) {
    var omwgix = this;
    sendApi(t1LO[f[603]], f[765], {
        'server_id': wolx1,
        'time': Date[f[253]]() / 0x3e8
    }, omwgix[f[766]][f[316]](omwgix), t1IOL, t1OZ);
}, window[f[766]] = function (n_r) {
    if (!n_r) {
        window[f[666]](0x4, f[767]), this[f[757]]();
        return;
    }
    if (n_r[f[431]] != f[430]) {
        window[f[666]](0x4, f[768] + n_r[f[431]]), this[f[757]]();
        return;
    }
    if (!n_r[f[432]] || n_r[f[432]][f[288]] == 0x0) {
        window[f[666]](0x4, f[769]), this[f[757]]();
        return;
    }
    this[f[764]](n_r), window[f[584]] && window[f[584]][f[254]][f[518]] && window[f[584]][f[254]][f[518]](sdkInitRes[f[770]], sdkInitRes[f[771]], sdkInitRes[f[772]], sdkInitRes[f[773]], sdkInitRes[f[774]]);
}, window[f[764]] = function (woilgx) {
    t1LO[f[532]] = woilgx[f[775]] != undefined ? woilgx[f[775]] : 0x0, t1LO[f[260]] = {
        'server_id': String(woilgx[f[432]][0x0][f[83]]),
        'server_name': String(woilgx[f[432]][0x0][f[404]]),
        'entry_ip': woilgx[f[432]][0x0][f[776]],
        'entry_port': parseInt(woilgx[f[432]][0x0][f[777]]),
        'status': t1LIZ(woilgx[f[432]][0x0]),
        'start_time': woilgx[f[432]][0x0][f[778]],
        'maintain_time': woilgx[f[432]][0x0][f[420]] ? woilgx[f[432]][0x0][f[420]] : '',
        'cdn': t1LO[f[408]]
    }, this[f[779]]();
}, window[f[779]] = function () {
    if (t1LO[f[532]] == 0x1) {
        var l3156u = t1LO[f[260]][f[405]];
        if (l3156u === -0x1 || l3156u === 0x0) {
            window[f[666]](0xf, f[780] + t1LO[f[260]]['id'] + f[781] + t1LO[f[260]][f[405]]), window[f[645]](l3156u === -0x1 ? f[782] : f[783]);
            return;
        }
        t1OZIL(0x0, t1LO[f[260]][f[83]]), window[f[584]][f[254]][f[526]](t1LO[f[532]]);
    } else window[f[584]][f[254]][f[524]](), t1ZLOI();
    window[f[635]] = !![], window[f[515]](), window[f[516]]();
}, window[f[718]] = function () {
    sendApi(t1LO[f[603]], f[784], {
        'game_pkg': t1LO[f[374]],
        'version_name': t1LO[f[705]]
    }, this[f[785]][f[316]](this), t1IOL, t1OZ);
}, window[f[785]] = function (nj79) {
    if (!nj79) {
        window[f[666]](0x5, f[786]), window[f[645]](f[786]);
        return;
    }
    if (nj79[f[431]] != f[430]) {
        window[f[666]](0x5, f[787] + nj79[f[431]]), window[f[645]](f[787] + nj79[f[431]]);
        return;
    }
    if (!nj79[f[432]] || !nj79[f[432]][f[599]]) {
        window[f[666]](0x5, f[788] + (nj79[f[432]] && nj79[f[432]][f[599]])), window[f[645]](f[788] + (nj79[f[432]] && nj79[f[432]][f[599]]));
        return;
    }
    nj79[f[432]][f[789]] && nj79[f[432]][f[789]][f[288]] > 0xa && (t1LO[f[790]] = nj79[f[432]][f[789]], t1LO[f[408]] = nj79[f[432]][f[789]]), nj79[f[432]][f[599]] && (t1LO[f[318]] = nj79[f[432]][f[599]]), console[f[658]](f[791] + t1LO[f[318]] + f[792] + t1LO[f[705]]), window[f[633]] = !![], window[f[515]](), window[f[516]]();
}, window[f[793]], window[f[719]] = function () {
    sendApi(t1LO[f[603]], f[794], { 'game_pkg': t1LO[f[374]] }, this[f[795]][f[316]](this), t1IOL, t1OZ);
}, window[f[795]] = function (e97$4j) {
    if (e97$4j && e97$4j[f[431]] === f[430] && e97$4j[f[432]]) {
        window[f[793]] = e97$4j[f[432]];
        for (var _z$7nr in e97$4j[f[432]]) {
            t1LO[_z$7nr] = e97$4j[f[432]][_z$7nr];
        }
    } else window[f[666]](0xb, f[796]), console[f[658]](f[797] + e97$4j[f[431]]);
    window[f[634]] = !![], window[f[516]]();
}, window[f[798]] = function (_rn7j, ua8s, q2s8yv, k9tep4, tep9, tejk49, n7_r$j, mioxwg, hpkmt, mhpkt) {
    tep9 = String(tep9);
    var mwioxg = n7_r$j,
        e$47 = mioxwg;
    t1LO[f[597]][tep9] = {
        'productid': tep9,
        'productname': mwioxg,
        'productdesc': e$47,
        'roleid': _rn7j,
        'rolename': ua8s,
        'rolelevel': q2s8yv,
        'price': tejk49,
        'callback': hpkmt
    }, sendApi(t1LO[f[607]], f[799], {
        'game_pkg': t1LO[f[374]],
        'server_id': t1LO[f[260]][f[83]],
        'server_name': t1LO[f[260]][f[404]],
        'level': q2s8yv,
        'uid': t1LO[f[672]],
        'role_id': _rn7j,
        'role_name': ua8s,
        'product_id': tep9,
        'product_name': mwioxg,
        'product_desc': e$47,
        'money': tejk49,
        'partner_id': t1LO[f[611]]
    }, toPayCallBack, t1IOL, t1OZ);
}, window[f[800]] = function (hptk4) {
    if (hptk4 && (hptk4[f[801]] === 0xc8 || hptk4[f[431]] == f[430])) {
        var jk9et = t1LO[f[597]][String(hptk4[f[802]])];
        if (jk9et[f[803]]) jk9et[f[803]](hptk4[f[802]], hptk4[f[804]], -0x1);
        Sqs86[f[65]]({
            'cpbill': hptk4[f[804]],
            'productid': hptk4[f[802]],
            'productname': jk9et[f[805]],
            'productdesc': jk9et[f[806]],
            'serverid': t1LO[f[260]][f[83]],
            'servername': t1LO[f[260]][f[404]],
            'roleid': jk9et[f[807]],
            'rolename': jk9et[f[808]],
            'rolelevel': jk9et[f[809]],
            'price': jk9et[f[810]],
            'extension': JSON[f[543]]({ 'cp_order_id': hptk4[f[804]] })
        }, function (pxhg, ioxw1) {
            jk9et[f[803]] && pxhg == 0x0 && jk9et[f[803]](hptk4[f[802]], hptk4[f[804]], pxhg);
            console[f[658]](JSON[f[543]]({
                'type': f[811],
                'status': pxhg,
                'data': hptk4,
                'role_name': jk9et[f[808]]
            }));
            if (pxhg === 0x0) {} else {
                if (pxhg === 0x1) {} else {
                    if (pxhg === 0x2) {}
                }
            }
        });
    } else {
        var y28vsq = hptk4 ? f[812] + hptk4[f[801]] + f[813] + hptk4[f[431]] + f[814] + hptk4[f[658]] : f[815];
        window[f[666]](0xd, f[816] + y28vsq), alert(y28vsq);
    }
}, window[f[817]] = function () {}, window[f[818]] = function (y28v0q, j4n$97, fr$_, je97$4, lw13i5) {
    Sqs86[f[97]](t1LO[f[260]][f[83]], t1LO[f[260]][f[404]] || t1LO[f[260]][f[83]], y28v0q, j4n$97, fr$_), sendApi(t1LO[f[603]], f[819], {
        'game_pkg': t1LO[f[374]],
        'server_id': t1LO[f[260]][f[83]],
        'role_id': y28v0q,
        'uid': t1LO[f[672]],
        'role_name': j4n$97,
        'role_type': je97$4,
        'level': fr$_
    });
}, window[f[820]] = function (_nj$, otgh, hxomg, vqa8s, q8usa2, e47k, n4$, pk4h, a5s36, _dbrfz) {
    t1LO[f[669]] = _nj$, t1LO[f[670]] = otgh, t1LO[f[671]] = hxomg, Sqs86[f[98]](t1LO[f[260]][f[83]], t1LO[f[260]][f[404]] || t1LO[f[260]][f[83]], _nj$, otgh, hxomg), sendApi(t1LO[f[603]], f[821], {
        'game_pkg': t1LO[f[374]],
        'server_id': t1LO[f[260]][f[83]],
        'role_id': _nj$,
        'uid': t1LO[f[672]],
        'role_name': otgh,
        'role_type': vqa8s,
        'level': hxomg,
        'evolution': q8usa2
    });
}, window[f[822]] = function (oxl1i, nf_, ke974, wogxmi, tmkep, wimxgo, bz_nr, r_zdb, l3w615, pe4) {
    t1LO[f[669]] = oxl1i, t1LO[f[670]] = nf_, t1LO[f[671]] = ke974, Sqs86[f[99]](t1LO[f[260]][f[83]], t1LO[f[260]][f[404]] || t1LO[f[260]][f[83]], oxl1i, nf_, ke974), sendApi(t1LO[f[603]], f[821], {
        'game_pkg': t1LO[f[374]],
        'server_id': t1LO[f[260]][f[83]],
        'role_id': oxl1i,
        'uid': t1LO[f[672]],
        'role_name': nf_,
        'role_type': wogxmi,
        'level': ke974,
        'evolution': tmkep
    });
}, window[f[823]] = function (pt94ke) {}, window[f[824]] = function (bdz_f) {
    Sqs86[f[46]](f[46], function (gixm) {
        bdz_f && bdz_f(gixm);
    });
}, window[f[96]] = function () {
    Sqs86[f[96]]();
}, window[f[825]] = function () {
    Sqs86[f[826]] && Sqs86[f[826]]();
}, window[f[827]] = function (wgol, mgthk, us6qa, ej79$, etkhp, otgp, tgpho, ep4ht) {
    ep4ht = ep4ht || t1LO[f[260]][f[83]], sendApi(t1LO[f[603]], f[828], {
        'phone': wgol,
        'role_id': mgthk,
        'uid': t1LO[f[672]],
        'game_pkg': t1LO[f[374]],
        'partner_id': t1LO[f[611]],
        'server_id': ep4ht
    }, tgpho, 0x2, null, function () {
        return !![];
    });
}, window[f[829]] = function (a5361) {
    window[f[830]] = a5361, window[f[830]] && window[f[831]] && (console[f[658]](f[832] + window[f[831]][f[833]]), window[f[830]](window[f[831]]), window[f[831]] = null);
}, window[f[834]] = function (wi, r9n$7j, il51w3, db_rz) {
    window[f[835]](f[836], {
        'game_pkg': window[f[259]][f[374]],
        'role_id': r9n$7j,
        'server_id': il51w3
    }, db_rz);
}, window[f[837]] = function (hxgiom, e74jk, f_brzn) {
    function pmxg(hmoxg) {
        var pmogxh = [],
            oilx1 = [],
            $fz_nr = f_brzn || window[f[587]][f[838]];
        for (var $n7_zr in $fz_nr) {
            var $j749n = Number($n7_zr);
            (!hxgiom || !hxgiom[f[288]] || hxgiom[f[565]]($j749n) != -0x1) && (oilx1[f[436]]($fz_nr[$n7_zr]), pmogxh[f[436]]([$j749n, 0x3]));
        }
        window[f[706]](window[f[839]], f[840]) >= 0x0 ? (console[f[428]](f[841]), Sqs86[f[842]] && Sqs86[f[842]](oilx1, function (r7) {
            console[f[428]](f[843]), console[f[428]](r7);
            if (r7 && r7[f[729]] == f[844]) for (var khgmpt in $fz_nr) {
                if (r7[$fz_nr[khgmpt]] == f[845]) {
                    var v0y8q2 = Number(khgmpt);
                    for (var qsvy28 = 0x0; qsvy28 < pmogxh[f[288]]; qsvy28++) {
                        if (pmogxh[qsvy28][0x0] == v0y8q2) {
                            pmogxh[qsvy28][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[f[706]](window[f[839]], f[846]) >= 0x0 ? wx[f[847]]({
                'withSubscriptions': !![],
                'success': function (xgwio) {
                    var omxhgi = xgwio[f[848]][f[849]];
                    if (omxhgi) {
                        console[f[428]](f[850]), console[f[428]](omxhgi);
                        for (var rj$_ in $fz_nr) {
                            if (omxhgi[$fz_nr[rj$_]] == f[845]) {
                                var xwmg = Number(rj$_);
                                for (var tmhk = 0x0; tmhk < pmogxh[f[288]]; tmhk++) {
                                    if (pmogxh[tmhk][0x0] == xwmg) {
                                        pmogxh[tmhk][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[f[428]](pmogxh), e74jk && e74jk(pmogxh);
                    } else console[f[428]](f[851]), console[f[428]](xgwio), console[f[428]](pmogxh), e74jk && e74jk(pmogxh);
                },
                'fail': function () {
                    console[f[428]](f[852]), console[f[428]](pmogxh), e74jk && e74jk(pmogxh);
                }
            }) : (console[f[428]](f[853] + window[f[839]]), console[f[428]](pmogxh), e74jk && e74jk(pmogxh));
        })) : (console[f[428]](f[854] + window[f[839]]), console[f[428]](pmogxh), e74jk && e74jk(pmogxh)), wx[f[855]](pmxg);
    }
    wx[f[856]](pmxg);
}, window[f[857]] = {
    'isSuccess': ![],
    'level': f[858],
    'isCharging': ![]
}, window[f[859]] = function (ausq82) {
    wx[f[860]]({
        'success': function (j74ek) {
            var htpe4k = window[f[857]];
            htpe4k[f[861]] = !![], htpe4k[f[862]] = Number(j74ek[f[862]])[f[863]](0x0), htpe4k[f[864]] = j74ek[f[864]], ausq82 && ausq82(htpe4k[f[861]], htpe4k[f[862]], htpe4k[f[864]]);
        },
        'fail': function (s3ua) {
            console[f[428]](f[865], s3ua[f[729]]);
            var mgoxp = window[f[857]];
            ausq82 && ausq82(mgoxp[f[861]], mgoxp[f[862]], mgoxp[f[864]]);
        }
    });
}, window[f[866]] = function (j9k) {
    wx[f[866]]({
        'success': function (oiw1x) {
            j9k && j9k(!![], oiw1x);
        },
        'fail': function (hep4k) {
            j9k && j9k(![], hep4k);
        }
    });
}, window[f[867]] = function (xoil) {
    if (xoil) wx[f[867]](xoil);
}, window[f[868]] = function (xlgwoi) {
    wx[f[868]](xlgwoi);
}, window[f[835]] = function (ua85s6, te94pk, jekt94, mpkhg, t4k, qy20v, ehmpk, nbzf) {
    if (mpkhg == undefined) mpkhg = 0x1;
    wx[f[687]]({
        'url': ua85s6,
        'method': ehmpk || f[869],
        'responseType': f[313],
        'data': te94pk,
        'header': { 'content-type': nbzf || f[688] },
        'success': function (n_zrf) {
            DEBUG && console[f[428]](f[870], ua85s6, info, n_zrf);
            if (n_zrf && n_zrf[f[871]] == 0xc8) {
                var xwgoil = n_zrf[f[432]];
                !qy20v || qy20v(xwgoil) ? jekt94 && jekt94(xwgoil) : window[f[872]](ua85s6, te94pk, jekt94, mpkhg, t4k, qy20v, n_zrf);
            } else window[f[872]](ua85s6, te94pk, jekt94, mpkhg, t4k, qy20v, n_zrf);
        },
        'fail': function (a6135u) {
            DEBUG && console[f[428]](f[873], ua85s6, info, a6135u), window[f[872]](ua85s6, te94pk, jekt94, mpkhg, t4k, qy20v, a6135u);
        },
        'complete': function () {}
    });
}, window[f[872]] = function (u53a, zbr_d, qs8a2u, pe4tkh, q28usa, w31l5, y0vq28) {
    pe4tkh - 0x1 > 0x0 ? setTimeout(function () {
        window[f[835]](u53a, zbr_d, qs8a2u, pe4tkh - 0x1, q28usa, w31l5);
    }, 0x3e8) : q28usa && q28usa(JSON[f[543]]({
        'url': u53a,
        'response': y0vq28
    }));
}, window[f[874]] = function (u365l, z_bd, nrj$, n_$rj, au58s, tphem, $9je74) {
    !nrj$ && (nrj$ = {});
    var u28aqs = Math[f[546]](Date[f[253]]() / 0x3e8);
    nrj$[f[753]] = u28aqs, nrj$[f[875]] = z_bd;
    var xowm = Object[f[876]](nrj$)[f[437]](),
        yq80v = '',
        dfbr_z = '';
    for (var $7_rz = 0x0; $7_rz < xowm[f[288]]; $7_rz++) {
        yq80v = yq80v + ($7_rz == 0x0 ? '' : '&') + xowm[$7_rz] + nrj$[xowm[$7_rz]], dfbr_z = dfbr_z + ($7_rz == 0x0 ? '' : '&') + xowm[$7_rz] + '=' + encodeURIComponent(nrj$[xowm[$7_rz]]);
    }
    yq80v = yq80v + t1LO[f[609]];
    var qy2v8s = f[877] + md5(yq80v);
    send(u365l + '?' + dfbr_z + (dfbr_z == '' ? '' : '&') + qy2v8s, null, n_$rj, au58s, tphem, $9je74 || function (q28y0v) {
        return q28y0v[f[431]] == f[430];
    }, null, f[37]);
}, window[f[878]] = function (aq28v, pkmeth) {
    var sv8qa = 0x0;
    t1LO[f[260]] && (sv8qa = t1LO[f[260]][f[83]]), sendApi(t1LO[f[605]], f[879], {
        'partnerId': t1LO[f[611]],
        'gamePkg': t1LO[f[374]],
        'logTime': Math[f[546]](Date[f[253]]() / 0x3e8),
        'platformUid': t1LO[f[749]],
        'type': aq28v,
        'serverId': sv8qa
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[f[880]] = function (sqa68u) {
    sendApi(t1LO[f[603]], f[881], {
        'partner_id': t1LO[f[611]],
        'uid': t1LO[f[672]],
        'version': t1LO[f[599]],
        'game_pkg': t1LO[f[374]],
        'device': t1LO[f[612]]
    }, t1LOIZ, t1IOL, t1OZ);
}, window[f[882]] = function (tmgkh) {
    if (tmgkh && tmgkh[f[431]] === f[430] && tmgkh[f[432]]) {
        tmgkh[f[432]][f[883]]({
            'id': -0x2,
            'name': f[884]
        }), tmgkh[f[432]][f[883]]({
            'id': -0x1,
            'name': f[885]
        }), t1LO[f[373]] = tmgkh[f[432]];
        if (window[f[364]]) window[f[364]][f[409]]();
    } else {
        t1LO[f[384]] = ![];
        var as8u2 = tmgkh ? tmgkh[f[431]] : '';
        window[f[666]](0x7, f[886] + as8u2), window[f[645]](f[887] + as8u2);
    }
}, window[f[888]] = function (lwoi) {
    sendApi(t1LO[f[603]], f[889], {
        'partner_id': t1LO[f[611]],
        'uid': t1LO[f[672]],
        'version': t1LO[f[599]],
        'game_pkg': t1LO[f[374]],
        'device': t1LO[f[612]]
    }, t1ZLI, t1IOL, t1OZ);
}, window[f[890]] = function (w15i) {
    t1LO[f[417]] = ![];
    if (w15i && w15i[f[431]] === f[430] && w15i[f[432]]) {
        for (var mohgx = 0x0; mohgx < w15i[f[432]][f[288]]; mohgx++) {
            w15i[f[432]][mohgx][f[405]] = t1LIZ(w15i[f[432]][mohgx]);
        }
        t1LO[f[415]][-0x1] = window[f[891]](w15i[f[432]]), window[f[364]][f[416]](-0x1);
    } else {
        var mhgxio = w15i ? w15i[f[431]] : '';
        window[f[666]](0x8, f[892] + mhgxio), window[f[645]](f[893] + mhgxio);
    }
}, window[f[894]] = function (omxpgh) {
    sendApi(t1LO[f[603]], f[889], {
        'partner_id': t1LO[f[611]],
        'uid': t1LO[f[672]],
        'version': t1LO[f[599]],
        'game_pkg': t1LO[f[374]],
        'device': t1LO[f[612]]
    }, omxpgh, t1IOL, t1OZ);
}, window[f[895]] = function (w1i5, xhpgom) {
    sendApi(t1LO[f[603]], f[896], {
        'partner_id': t1LO[f[611]],
        'uid': t1LO[f[672]],
        'version': t1LO[f[599]],
        'game_pkg': t1LO[f[374]],
        'device': t1LO[f[612]],
        'server_group_id': xhpgom
    }, t1ILZ, t1IOL, t1OZ);
}, window[f[897]] = function (zbfn) {
    t1LO[f[417]] = ![];
    if (zbfn && zbfn[f[431]] === f[430] && zbfn[f[432]] && zbfn[f[432]][f[432]]) {
        var q8asu = zbfn[f[432]][f[898]],
            gmpkht = [];
        for (var $79nj4 = 0x0; $79nj4 < zbfn[f[432]][f[432]][f[288]]; $79nj4++) {
            zbfn[f[432]][f[432]][$79nj4][f[405]] = t1LIZ(zbfn[f[432]][f[432]][$79nj4]), (gmpkht[f[288]] == 0x0 || zbfn[f[432]][f[432]][$79nj4][f[405]] != 0x0) && (gmpkht[gmpkht[f[288]]] = zbfn[f[432]][f[432]][$79nj4]);
        }
        t1LO[f[415]][q8asu] = window[f[891]](gmpkht), window[f[364]][f[416]](q8asu);
    } else {
        var iomxw = zbfn ? zbfn[f[431]] : '';
        window[f[666]](0x9, f[899] + iomxw), window[f[645]](f[900] + iomxw);
    }
}, window[f[901]] = function (s2u8q) {
    sendApi(t1LO[f[603]], f[902], {
        'partner_id': t1LO[f[611]],
        'uid': t1LO[f[672]],
        'version': t1LO[f[599]],
        'game_pkg': t1LO[f[374]],
        'device': t1LO[f[612]]
    }, reqServerRecommendCallBack, t1IOL, t1OZ);
}, window[f[903]] = function (tkj94e) {
    t1LO[f[417]] = ![];
    if (tkj94e && tkj94e[f[431]] === f[430] && tkj94e[f[432]]) {
        for (var aqv2s8 = 0x0; aqv2s8 < tkj94e[f[432]][f[288]]; aqv2s8++) {
            tkj94e[f[432]][aqv2s8][f[405]] = t1LIZ(tkj94e[f[432]][aqv2s8]);
        }
        t1LO[f[415]][-0x2] = window[f[891]](tkj94e[f[432]]), window[f[364]][f[416]](-0x2);
    } else {
        var dfrz_ = tkj94e ? tkj94e[f[431]] : '';
        window[f[666]](0xa, f[904] + dfrz_), alert(f[905] + dfrz_);
    }
}, window[f[891]] = function ($_fn) {
    return $_fn;
}, window[f[906]] = function (i1woxl, w1l5) {
    i1woxl = i1woxl || t1LO[f[260]][f[83]], sendApi(t1LO[f[603]], f[907], {
        'type': '4',
        'game_pkg': t1LO[f[374]],
        'server_id': i1woxl
    }, w1l5);
}, window[f[908]] = function (j4k9te, rnf, sv2q8y, oxpmhg) {
    sv2q8y = sv2q8y || t1LO[f[260]][f[83]], sendApi(t1LO[f[603]], f[909], {
        'type': j4k9te,
        'game_pkg': rnf,
        'server_id': sv2q8y
    }, oxpmhg);
}, window[f[910]] = function (q6us8a, mpkh) {
    sendApi(t1LO[f[603]], f[911], { 'game_pkg': q6us8a }, mpkh);
}, window[f[912]] = function (_nf$rz) {
    if (_nf$rz) {
        if (_nf$rz[f[405]] == 0x1) {
            if (_nf$rz[f[913]] == 0x1) return 0x2;else return 0x1;
        } else return _nf$rz[f[405]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[f[914]] = function (ohxi, xolwg) {
    t1LO[f[915]] = {
        'step': ohxi,
        'server_id': xolwg
    };
    var a1563u = this;
    t1ZLIO({ 'title': f[916] }), sendApi(t1LO[f[603]], f[917], {
        'partner_id': t1LO[f[611]],
        'uid': t1LO[f[672]],
        'game_pkg': t1LO[f[374]],
        'server_id': xolwg,
        'platform': t1LO[f[748]],
        'platform_uid': t1LO[f[749]],
        'check_login_time': t1LO[f[752]],
        'check_login_sign': t1LO[f[750]],
        'version_name': t1LO[f[705]]
    }, t1OZLI, t1IOL, t1OZ, function (opmgxh) {
        return opmgxh[f[431]] == f[430] || opmgxh[f[658]] == f[918] || opmgxh[f[658]] == f[919];
    });
}, window[f[920]] = function (uq8as6) {
    var lw3x1i = this;
    if (uq8as6 && uq8as6[f[431]] === f[430] && uq8as6[f[432]]) {
        var u8asq6 = t1LO[f[260]];
        u8asq6[f[921]] = t1LO[f[614]], u8asq6[f[751]] = String(uq8as6[f[432]][f[922]]), u8asq6[f[621]] = parseInt(uq8as6[f[432]][f[753]]);
        if (uq8as6[f[432]][f[923]]) u8asq6[f[923]] = parseInt(uq8as6[f[432]][f[923]]);else u8asq6[f[923]] = parseInt(uq8as6[f[432]][f[83]]);
        u8asq6[f[924]] = 0x0, u8asq6[f[408]] = t1LO[f[790]], u8asq6[f[925]] = uq8as6[f[432]][f[926]], u8asq6[f[927]] = uq8as6[f[432]][f[927]];
        if (uq8as6[f[432]][f[928]]) u8asq6[f[928]] = parseInt(uq8as6[f[432]][f[928]]);
        console[f[428]](f[929] + JSON[f[543]](u8asq6[f[927]])), t1LO[f[532]] == 0x1 && u8asq6[f[927]] && u8asq6[f[927]][f[930]] == 0x1 && (t1LO[f[321]] = 0x1, window[f[584]][f[254]][f[530]]()), t1OIZL();
    } else {
        if (t1LO[f[915]][f[931]] >= 0x3) {
            var omhx = uq8as6 ? uq8as6[f[431]] : '';
            window[f[666]](0xc, f[932] + omhx), t1OZ(JSON[f[543]](uq8as6)), window[f[645]](f[933] + omhx);
        } else sendApi(t1LO[f[603]], f[726], {
            'platform': t1LO[f[601]],
            'partner_id': t1LO[f[611]],
            'token': t1LO[f[723]],
            'game_pkg': t1LO[f[374]],
            'deviceId': t1LO[f[612]],
            'scene': f[727] + t1LO[f[613]]
        }, function (rj$7) {
            if (!rj$7 || rj$7[f[431]] != f[430]) {
                window[f[645]](f[745] + rj$7 && rj$7[f[431]]);
                return;
            }
            t1LO[f[750]] = String(rj$7[f[751]]), t1LO[f[752]] = String(rj$7[f[753]]), setTimeout(function () {
                t1OZIL(t1LO[f[915]][f[931]] + 0x1, t1LO[f[915]][f[83]]);
            }, 0x5dc);
        }, t1IOL, t1OZ, function (n9j47$) {
            return n9j47$[f[431]] == f[430] || n9j47$[f[431]] == f[934];
        });
    }
}, window[f[935]] = function () {
    ServerLoading[f[254]][f[526]](t1LO[f[532]]), window[f[630]] = !![], window[f[516]]();
}, window[f[515]] = function () {
    if (window[f[631]] && window[f[632]] && window[f[514]] && window[f[525]] && window[f[633]] && window[f[635]]) {
        if (!window[f[936]][f[254]]) {
            console[f[428]](f[937] + window[f[936]][f[254]]);
            var zb_n = wx[f[938]](),
                frznb_ = zb_n[f[833]] ? zb_n[f[833]] : 0x0,
                u68aqs = {
                'cdn': window[f[259]][f[408]],
                'spareCdn': window[f[259]][f[712]],
                'newRegister': window[f[259]][f[532]],
                'wxPC': window[f[259]][f[628]],
                'wxIOS': window[f[259]][f[626]],
                'wxAndroid': window[f[259]][f[627]],
                'wxParam': {
                    'limitLoad': window[f[259]][f[939]],
                    'benchmarkLevel': window[f[259]][f[940]],
                    'wxFrom': window[f[587]][f[717]] == f[941] ? 0x1 : 0x0,
                    'wxSDKVersion': window[f[839]]
                },
                'configType': window[f[259]][f[622]],
                'exposeType': window[f[259]][f[624]],
                'scene': frznb_
            };
            new window[f[936]](u68aqs, window[f[259]][f[318]], window[f[594]]);
        }
    }
}, window[f[516]] = function () {
    if (window[f[631]] && window[f[632]] && window[f[514]] && window[f[525]] && window[f[633]] && window[f[635]] && window[f[630]] && window[f[634]]) {
        t1ZLOI();
        if (!t1OIL) {
            t1OIL = !![];
            if (!window[f[936]][f[254]]) window[f[515]]();
            var j9$n47 = 0x0,
                iogwlx = wx[f[942]]();
            iogwlx && (window[f[259]][f[943]] && (j9$n47 = iogwlx[f[210]]), console[f[658]](f[944] + iogwlx[f[210]] + f[945] + iogwlx[f[332]] + f[946] + iogwlx[f[947]] + f[948] + iogwlx[f[170]] + f[949] + iogwlx[f[280]] + f[950] + iogwlx[f[282]]));
            var znrf_b = {};
            for (const oixgwl in t1LO[f[260]]) {
                znrf_b[oixgwl] = t1LO[f[260]][oixgwl];
            }
            var ul5163 = {
                'channel': window[f[259]][f[615]],
                'account': window[f[259]][f[672]],
                'userId': window[f[259]][f[28]],
                'cdn': window[f[259]][f[408]],
                'data': window[f[259]][f[432]],
                'package': window[f[259]][f[598]],
                'newRegister': window[f[259]][f[532]],
                'pkgName': window[f[259]][f[374]],
                'partnerId': window[f[259]][f[611]],
                'platform_uid': window[f[259]][f[749]],
                'deviceId': window[f[259]][f[612]],
                'selectedServer': znrf_b,
                'configType': window[f[259]][f[622]],
                'exposeType': window[f[259]][f[624]],
                'debugUsers': window[f[259]][f[619]],
                'wxMenuTop': j9$n47,
                'wxShield': window[f[259]][f[625]],
                'wx_channel': window[f[259]][f[724]]
            };
            if (window[f[793]]) for (var qvs2y in window[f[793]]) {
                ul5163[qvs2y] = window[f[793]][qvs2y];
            }
            window[f[936]][f[254]][f[951]](ul5163);
            if (t1LO[f[260]] && t1LO[f[260]][f[83]]) localStorage[f[385]](f[755] + t1LO[f[374]] + t1LO[f[672]], t1LO[f[260]][f[83]]);
        }
    } else console[f[658]](f[952] + window[f[631]] + f[953] + window[f[632]] + f[954] + window[f[514]] + f[955] + window[f[525]] + f[956] + window[f[633]] + f[957] + window[f[635]] + f[958] + window[f[630]] + f[959] + window[f[634]]);
};