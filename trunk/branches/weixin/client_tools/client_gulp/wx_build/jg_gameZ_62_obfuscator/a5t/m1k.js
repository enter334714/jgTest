var f = wx.$B;
import Sivzts from '../yun7a/gl1z.js';
window[f[482]] = { 'wxVersion': window[f[483]][f[484]] }, window[f[485]] = ![], window[f[486]] = 0x1, window[f[487]] = 0x1, window[f[488]] = !![], window[f[489]] = !![], window['t1$RSJW'] = '', window[f[490]] = ![], window[f[156]] = {
    'base_cdn': f[491],
    'cdn': f[491]
}, t1JW[f[492]] = {}, t1JW[f[493]] = '0', t1JW[f[494]] = window[f[482]][f[218]], t1JW[f[495]] = '', t1JW['os'] = '1', t1JW[f[496]] = f[497], t1JW[f[498]] = f[499], t1JW[f[500]] = f[501], t1JW[f[502]] = f[503], t1JW[f[504]] = f[505], t1JW[f[506]] = '1', t1JW[f[273]] = '', t1JW[f[507]] = '', t1JW[f[508]] = 0x0, t1JW[f[314]] = {}, t1JW[f[509]] = parseInt(t1JW[f[506]]), t1JW[f[510]] = t1JW[f[506]], t1JW[f[157]] = {}, t1JW[f[511]] = f[512], t1JW[f[513]] = ![], t1JW[f[514]] = f[515], t1JW[f[516]] = Date[f[151]](), t1JW[f[517]] = f[518], t1JW[f[519]] = '_a', t1JW[f[201]] = 0x2, t1JW[f[216]] = 0x7c1, t1JW[f[218]] = window[f[482]][f[218]], t1JW[f[520]] = ![], t1JW[f[521]] = ![], t1JW[f[522]] = ![], t1JW[f[523]] = ![], window[f[524]] = 0x5, window[f[525]] = ![], window[f[526]] = ![], window[f[527]] = ![], window[f[411]] = ![], window[f[422]] = ![], window[f[528]] = ![], window[f[529]] = ![], window[f[530]] = ![], window[f[531]] = ![], window[f[417]] = null, window[f[532]] = function (a379f) {
    console[f[327]](f[532], a379f), wx[f[533]]({}), wx[f[534]]({
        'title': f[535],
        'content': a379f,
        'success'(nhum) {
            if (nhum[f[536]]) console[f[327]](f[537]);else nhum[f[538]] && console[f[327]](f[539]);
        }
    });
}, window[f[540]] = function (z7ie3) {
    console[f[327]](f[541], z7ie3), t1RJWS(), wx[f[534]]({
        'title': f[535],
        'content': z7ie3,
        'confirmText': f[542],
        'cancelText': f[543],
        'success'(h92f$n) {
            if (h92f$n[f[536]]) window[f[544]]();else h92f$n[f[538]] && (console[f[327]](f[545]), wx[f[546]]({}));
        }
    });
}, window[f[547]] = function (n$hu2f) {
    console[f[327]](f[547], n$hu2f), wx[f[534]]({
        'title': f[535],
        'content': n$hu2f,
        'confirmText': f[548],
        'showCancel': ![],
        'complete'(v5t14o) {
            console[f[327]](f[545]), wx[f[546]]({});
        }
    });
}, window[f[549]] = ![], window[f[550]] = function (zvtsa) {
    window[f[549]] = !![], wx[f[551]](zvtsa);
}, window[f[552]] = function () {
    window[f[549]] && (window[f[549]] = ![], wx[f[533]]({}));
}, window[f[406]] = function (f29$) {
    window[f[480]][f[152]][f[406]](f29$);
}, window[f[553]] = function (x8rpy0, _6o415) {
    Sivzts[f[553]](x8rpy0, function (o1vs) {
        o1vs && o1vs[f[331]] ? o1vs[f[331]][f[330]] == 0x1 ? _6o415(!![]) : (_6o415(![]), console[f[554]](f[555] + o1vs[f[331]][f[556]])) : console[f[327]](f[553], o1vs);
    });
}, window[f[557]] = function (lb6kgw) {
    console[f[327]](f[558], lb6kgw);
}, window[f[207]] = function (py0) {}, window[f[212]] = function (e3a97, vtizas, iztsv) {}, window[f[559]] = function (r0ypx8) {
    console[f[327]](f[560], r0ypx8), window[f[480]][f[152]][f[205]](), window[f[480]][f[152]][f[206]](), window[f[480]][f[152]][f[222]]();
}, window[f[561]] = function (qwbl) {
    window[f[562]](0xe, f[563] + qwbl), window[f[540]](f[564]);
    var t4iv = {
        'id': window[f[156]][f[565]],
        'role': window[f[156]][f[566]],
        'level': window[f[156]][f[567]],
        'account': window[f[156]][f[568]],
        'version': window[f[156]][f[216]],
        'cdn': window[f[156]][f[307]],
        'pkgName': window[f[156]][f[273]],
        'gamever': window[f[483]][f[484]],
        'serverid': window[f[156]][f[157]] ? window[f[156]][f[157]][f[158]] : 0x0,
        'systemInfo': window[f[569]],
        'error': f[570],
        'stack': qwbl ? qwbl : f[564]
    },
        rx0pq8 = JSON[f[439]](t4iv);
    console[f[441]](f[571] + rx0pq8), window[f[511]](rx0pq8);
}, window[f[562]] = function (z3ies, tvszia) {
    sendApi(t1JW[f[500]], f[572], {
        'game_pkg': t1JW[f[273]],
        'partner_id': t1JW[f[506]],
        'server_id': t1JW[f[157]] && t1JW[f[157]][f[158]] > 0x0 ? t1JW[f[157]][f[158]] : 0x0,
        'uid': t1JW[f[568]] > 0x0 ? t1JW[f[568]] : 0x0,
        'type': z3ies,
        'info': tvszia
    });
}, window[f[573]] = function (zi7a3) {
    var $7h9 = JSON[f[574]](zi7a3);
    $7h9[f[575]] = window[f[483]][f[484]], $7h9[f[576]] = window[f[156]][f[157]] ? window[f[156]][f[157]][f[158]] : 0x0, $7h9[f[569]] = window[f[569]];
    var p0xrq8 = JSON[f[439]]($7h9);
    console[f[441]](f[577] + p0xrq8), window[f[511]](p0xrq8);
}, window[f[578]] = function (xbk8qr, i3ez7a) {
    var $mun2h = {
        'id': window[f[156]][f[565]],
        'role': window[f[156]][f[566]],
        'level': window[f[156]][f[567]],
        'account': window[f[156]][f[568]],
        'version': window[f[156]][f[216]],
        'cdn': window[f[156]][f[307]],
        'pkgName': window[f[156]][f[273]],
        'gamever': window[f[483]][f[484]],
        'serverid': window[f[156]][f[157]] ? window[f[156]][f[157]][f[158]] : 0x0,
        'systemInfo': window[f[569]],
        'error': xbk8qr,
        'stack': i3ez7a
    },
        o5t4v = JSON[f[439]]($mun2h);
    console[f[458]](f[579] + o5t4v), window[f[511]](o5t4v);
}, window[f[511]] = function (qbgxr) {
    if (window[f[156]][f[580]] == f[581]) return;
    var izv = t1JW[f[511]] + f[582] + t1JW[f[568]];
    wx[f[583]]({
        'url': izv,
        'method': f[584],
        'data': qbgxr,
        'header': {
            'content-type': f[585],
            'cache-control': f[586]
        },
        'success': function (qlgkwb) {
            DEBUG && console[f[327]](f[587], izv, qbgxr, qlgkwb);
        },
        'fail': function (aitsze) {
            DEBUG && console[f[327]](f[587], izv, qbgxr, aitsze);
        },
        'complete': function () {}
    });
}, window[f[588]] = function () {
    function lrbg() {
        return ((0x1 + Math[f[209]]()) * 0x10000 | 0x0)[f[589]](0x10)[f[590]](0x1);
    }
    return lrbg() + lrbg() + '-' + lrbg() + '-' + lrbg() + '-' + lrbg() + '+' + lrbg() + lrbg() + lrbg();
}, window[f[544]] = function () {
    console[f[327]](f[591]);
    var v4sot = Sivzts[f[592]]();
    t1JW[f[510]] = v4sot[f[593]], t1JW[f[509]] = v4sot[f[593]], t1JW[f[506]] = v4sot[f[593]], t1JW[f[273]] = v4sot[f[594]];
    var asezt = { 'game_ver': t1JW[f[494]] };
    t1JW[f[507]] = this[f[588]](), t1RJSW({ 'title': f[595] }), Sivzts[f[375]](asezt, this[f[596]][f[214]](this));
}, window[f[596]] = function (_15) {
    var z739ae = _15[f[418]];
    sdkInitRes = _15, console[f[327]](f[597] + z739ae + f[598] + (z739ae == 0x1) + f[599] + _15[f[484]] + f[600] + window[f[482]][f[218]] + f[601] + _15[f[602]]);
    if (!_15[f[484]] || window['t1$SWRJ'](window[f[482]][f[218]], _15[f[484]]) < 0x0) console[f[327]](f[603]), t1JW[f[498]] = f[604], t1JW[f[500]] = f[605], t1JW[f[502]] = f[606], t1JW[f[307]] = f[607], t1JW[f[608]] = f[609], t1JW[f[602]] = _15[f[602]], t1JW[f[520]] = ![];else window['t1$SWRJ'](window[f[482]][f[218]], _15[f[484]]) == 0x0 ? (console[f[327]](f[610]), t1JW[f[498]] = f[499], t1JW[f[500]] = f[501], t1JW[f[502]] = f[503], t1JW[f[307]] = f[611], t1JW[f[608]] = f[609], t1JW[f[602]] = f[612], t1JW[f[520]] = !![]) : (console[f[327]](f[613]), t1JW[f[498]] = f[499], t1JW[f[500]] = f[501], t1JW[f[502]] = f[503], t1JW[f[307]] = f[611], t1JW[f[608]] = f[609], t1JW[f[602]] = f[612], t1JW[f[520]] = ![]);
    t1JW[f[508]] = config[f[614]] ? config[f[614]] : 0x0, this[f[615]](), this[f[616]](), window[f[617]] = 0x5, t1RJSW({ 'title': f[618] }), Sivzts[f[619]](this[f[620]][f[214]](this));
}, window[f[617]] = 0x5, window[f[620]] = function (vot1, zae3si) {
    if (vot1 == 0x0 && zae3si && zae3si[f[621]]) {
        t1JW[f[622]] = zae3si[f[621]], t1JW[f[623]] = zae3si[f[623]];
        var m$2un = this;
        t1RJSW({ 'title': f[624] }), sendApi(t1JW[f[498]], f[625], {
            'platform': t1JW[f[496]],
            'partner_id': t1JW[f[506]],
            'token': zae3si[f[621]],
            'game_pkg': t1JW[f[273]],
            'deviceId': t1JW[f[507]],
            'scene': f[626] + t1JW[f[508]]
        }, this[f[627]][f[214]](this), t1SWJ, t1WR);
    } else zae3si && zae3si[f[628]] && window[f[617]] > 0x0 && (zae3si[f[628]][f[461]](f[629]) != -0x1 || zae3si[f[628]][f[461]](f[630]) != -0x1 || zae3si[f[628]][f[461]](f[631]) != -0x1 || zae3si[f[628]][f[461]](f[632]) != -0x1 || zae3si[f[628]][f[461]](f[633]) != -0x1 || zae3si[f[628]][f[461]](f[634]) != -0x1) ? (window[f[617]]--, Sivzts[f[619]](this[f[620]][f[214]](this))) : (window[f[562]](0x1, f[635] + vot1 + f[636] + (zae3si ? zae3si[f[628]] : '')), window[f[578]](f[637], JSON[f[439]]({
        'status': vot1,
        'data': zae3si
    })), window[f[540]](f[638] + (zae3si && zae3si[f[628]] ? '，' + zae3si[f[628]] : '')));
}, window[f[627]] = function (ypj) {
    if (!ypj) {
        window[f[562]](0x2, f[639]), window[f[578]](f[640], f[641]), window[f[540]](f[642]);
        return;
    }
    if (ypj[f[330]] != f[329]) {
        window[f[562]](0x2, f[643] + ypj[f[330]]), window[f[578]](f[640], JSON[f[439]](ypj)), window[f[540]](f[644] + ypj[f[330]]);
        return;
    }
    if (ypj[f[645]] == 0x1) {
        window[f[540]](f[646]);
        return;
    }
    t1JW[f[647]] = String(ypj[f[568]]), t1JW[f[568]] = String(ypj[f[568]]), t1JW[f[648]] = String(ypj[f[648]]), t1JW[f[510]] = String(ypj[f[648]]), t1JW[f[649]] = String(ypj[f[649]]), t1JW[f[650]] = String(ypj[f[651]]), t1JW[f[652]] = String(ypj[f[653]]), t1JW[f[651]] = '';
    var pkq8r = this;
    t1RJSW({ 'title': f[654] });
    var $2f397 = localStorage[f[278]](f[655] + t1JW[f[273]] + t1JW[f[568]]);
    if ($2f397 && $2f397 != '') {
        var t4zsvi = Number($2f397);
        pkq8r[f[656]](t4zsvi);
    } else pkq8r[f[657]]();
}, window[f[657]] = function () {
    var qwbklg = this;
    sendApi(t1JW[f[498]], f[658], {
        'partner_id': t1JW[f[506]],
        'uid': t1JW[f[568]],
        'version': t1JW[f[494]],
        'game_pkg': t1JW[f[273]],
        'device': t1JW[f[507]]
    }, qwbklg[f[659]][f[214]](qwbklg), t1SWJ, t1WR);
}, window[f[659]] = function (lqbr) {
    if (!lqbr) {
        window[f[562]](0x3, f[660]), window[f[540]](f[660]);
        return;
    }
    if (lqbr[f[330]] != f[329]) {
        window[f[562]](0x3, f[661] + lqbr[f[330]]), window[f[540]](f[661] + lqbr[f[330]]);
        return;
    }
    if (!lqbr[f[331]] || lqbr[f[331]][f[186]] == 0x0) {
        window[f[562]](0x3, f[662]), window[f[540]](f[663]);
        return;
    }
    this[f[664]](lqbr);
}, window[f[656]] = function (bgwqkl) {
    var e3za = this;
    sendApi(t1JW[f[498]], f[665], {
        'server_id': bgwqkl,
        'time': Date[f[151]]() / 0x3e8
    }, e3za[f[666]][f[214]](e3za), t1SWJ, t1WR);
}, window[f[666]] = function (rx8k) {
    if (!rx8k) {
        window[f[562]](0x4, f[667]), this[f[657]]();
        return;
    }
    if (rx8k[f[330]] != f[329]) {
        window[f[562]](0x4, f[668] + rx8k[f[330]]), this[f[657]]();
        return;
    }
    if (!rx8k[f[331]] || rx8k[f[331]][f[186]] == 0x0) {
        window[f[562]](0x4, f[669]), this[f[657]]();
        return;
    }
    this[f[664]](rx8k), window[f[480]] && window[f[480]][f[152]][f[415]] && window[f[480]][f[152]][f[415]](sdkInitRes[f[670]], sdkInitRes[f[671]], sdkInitRes[f[672]], sdkInitRes[f[673]], sdkInitRes[f[674]]);
}, window[f[664]] = function (_v514o) {
    t1JW[f[428]] = _v514o[f[675]] != undefined ? _v514o[f[675]] : 0x0, t1JW[f[157]] = {
        'server_id': String(_v514o[f[331]][0x0][f[158]]),
        'server_name': String(_v514o[f[331]][0x0][f[303]]),
        'entry_ip': _v514o[f[331]][0x0][f[676]],
        'entry_port': parseInt(_v514o[f[331]][0x0][f[677]]),
        'status': t1JSR(_v514o[f[331]][0x0]),
        'start_time': _v514o[f[331]][0x0][f[678]],
        'maintain_time': _v514o[f[331]][0x0][f[319]] ? _v514o[f[331]][0x0][f[319]] : '',
        'cdn': t1JW[f[307]]
    }, this[f[679]]();
}, window[f[679]] = function () {
    if (t1JW[f[428]] == 0x1) {
        var $hn = t1JW[f[157]][f[304]];
        if ($hn === -0x1 || $hn === 0x0) {
            window[f[562]](0xf, f[680] + t1JW[f[157]]['id'] + f[681] + t1JW[f[157]][f[304]]), window[f[540]]($hn === -0x1 ? f[682] : f[683]);
            return;
        }
        t1WRSJ(0x0, t1JW[f[157]][f[158]]), window[f[480]][f[152]][f[423]](t1JW[f[428]]);
    } else window[f[480]][f[152]][f[421]](), t1RJWS();
    window[f[530]] = !![], window[f[412]](), window[f[413]]();
}, window[f[615]] = function () {
    sendApi(t1JW[f[498]], f[684], {
        'game_pkg': t1JW[f[273]],
        'version_name': t1JW[f[602]]
    }, this[f[685]][f[214]](this), t1SWJ, t1WR);
}, window[f[685]] = function (rgblq) {
    if (!rgblq) {
        window[f[562]](0x5, f[686]), window[f[540]](f[686]);
        return;
    }
    if (rgblq[f[330]] != f[329]) {
        window[f[562]](0x5, f[687] + rgblq[f[330]]), window[f[540]](f[687] + rgblq[f[330]]);
        return;
    }
    if (!rgblq[f[331]] || !rgblq[f[331]][f[494]]) {
        window[f[562]](0x5, f[688] + (rgblq[f[331]] && rgblq[f[331]][f[494]])), window[f[540]](f[688] + (rgblq[f[331]] && rgblq[f[331]][f[494]]));
        return;
    }
    rgblq[f[331]][f[689]] && rgblq[f[331]][f[689]][f[186]] > 0xa && (t1JW[f[690]] = rgblq[f[331]][f[689]], t1JW[f[307]] = rgblq[f[331]][f[689]]), rgblq[f[331]][f[494]] && (t1JW[f[216]] = rgblq[f[331]][f[494]]), console[f[554]](f[691] + t1JW[f[216]] + f[692] + t1JW[f[602]]), window[f[528]] = !![], window[f[412]](), window[f[413]]();
}, window[f[693]], window[f[616]] = function () {
    sendApi(t1JW[f[498]], f[694], { 'game_pkg': t1JW[f[273]] }, this[f[695]][f[214]](this), t1SWJ, t1WR);
}, window[f[695]] = function (w5g6l_) {
    if (w5g6l_ && w5g6l_[f[330]] === f[329] && w5g6l_[f[331]]) {
        window[f[693]] = w5g6l_[f[331]];
        for (var az3e97 in w5g6l_[f[331]]) {
            t1JW[az3e97] = w5g6l_[f[331]][az3e97];
        }
    } else window[f[562]](0xb, f[696]), console[f[554]](f[697] + w5g6l_[f[330]]);
    window[f[529]] = !![], window[f[413]]();
}, window[f[698]] = function (kgwb6, ziv4st, unm2h$, esaiz, f9$37, lw6bgk, bkql, tvo4is, eiz3a7, k8bqr) {
    f9$37 = String(f9$37);
    var ae79z3 = bkql,
        $hf2n9 = tvo4is;
    t1JW[f[492]][f9$37] = {
        'productid': f9$37,
        'productname': ae79z3,
        'productdesc': $hf2n9,
        'roleid': kgwb6,
        'rolename': ziv4st,
        'rolelevel': unm2h$,
        'price': lw6bgk,
        'callback': eiz3a7
    }, sendApi(t1JW[f[502]], f[699], {
        'game_pkg': t1JW[f[273]],
        'server_id': t1JW[f[157]][f[158]],
        'server_name': t1JW[f[157]][f[303]],
        'level': unm2h$,
        'uid': t1JW[f[568]],
        'role_id': kgwb6,
        'role_name': ziv4st,
        'product_id': f9$37,
        'product_name': ae79z3,
        'product_desc': $hf2n9,
        'money': lw6bgk,
        'partner_id': t1JW[f[506]]
    }, toPayCallBack, t1SWJ, t1WR);
}, window[f[700]] = function (xrqk8b) {
    if (xrqk8b && (xrqk8b[f[701]] === 0xc8 || xrqk8b[f[330]] == f[329])) {
        var sai3 = t1JW[f[492]][String(xrqk8b[f[702]])];
        if (sai3[f[703]]) sai3[f[703]](xrqk8b[f[702]], xrqk8b[f[704]], -0x1);
        Sivzts[f[705]]({
            'cpbill': xrqk8b[f[704]],
            'productid': xrqk8b[f[702]],
            'productname': sai3[f[706]],
            'productdesc': sai3[f[707]],
            'serverid': t1JW[f[157]][f[158]],
            'servername': t1JW[f[157]][f[303]],
            'roleid': sai3[f[708]],
            'rolename': sai3[f[709]],
            'rolelevel': sai3[f[710]],
            'price': sai3[f[711]],
            'extension': JSON[f[439]]({ 'cp_order_id': xrqk8b[f[704]] })
        }, function (ezsti, zitsv) {
            sai3[f[703]] && ezsti == 0x0 && sai3[f[703]](xrqk8b[f[702]], xrqk8b[f[704]], ezsti);
            console[f[554]](JSON[f[439]]({
                'type': f[712],
                'status': ezsti,
                'data': xrqk8b,
                'role_name': sai3[f[709]]
            }));
            if (ezsti === 0x0) {} else {
                if (ezsti === 0x1) {} else {
                    if (ezsti === 0x2) {}
                }
            }
        });
    } else {
        var j80dyp = xrqk8b ? f[713] + xrqk8b[f[701]] + f[714] + xrqk8b[f[330]] + f[715] + xrqk8b[f[554]] : f[716];
        window[f[562]](0xd, f[717] + j80dyp), alert(j80dyp);
    }
}, window[f[718]] = function () {}, window[f[719]] = function (l6b_g, wqklgb, b6gk, sotv, brkgxq) {
    Sivzts[f[720]](t1JW[f[157]][f[158]], t1JW[f[157]][f[303]] || t1JW[f[157]][f[158]], l6b_g, wqklgb, b6gk), sendApi(t1JW[f[498]], f[721], {
        'game_pkg': t1JW[f[273]],
        'server_id': t1JW[f[157]][f[158]],
        'role_id': l6b_g,
        'uid': t1JW[f[568]],
        'role_name': wqklgb,
        'role_type': sotv,
        'level': b6gk
    });
}, window[f[722]] = function (pr8q0x, x0ypr8, nh9f2$, vsizt, _4165o, xrbq, klgrb, etasiz, qlrgk, asezi) {
    t1JW[f[565]] = pr8q0x, t1JW[f[566]] = x0ypr8, t1JW[f[567]] = nh9f2$, Sivzts[f[723]](t1JW[f[157]][f[158]], t1JW[f[157]][f[303]] || t1JW[f[157]][f[158]], pr8q0x, x0ypr8, nh9f2$), sendApi(t1JW[f[498]], f[724], {
        'game_pkg': t1JW[f[273]],
        'server_id': t1JW[f[157]][f[158]],
        'role_id': pr8q0x,
        'uid': t1JW[f[568]],
        'role_name': x0ypr8,
        'role_type': vsizt,
        'level': nh9f2$,
        'evolution': _4165o
    });
}, window[f[725]] = function (f7h9, qx80rp, t1o5v, sazvt, itsae, eitazs, ivzs4t, bl6kgw, qrgbx, xq8pkr) {
    t1JW[f[565]] = f7h9, t1JW[f[566]] = qx80rp, t1JW[f[567]] = t1o5v, Sivzts[f[726]](t1JW[f[157]][f[158]], t1JW[f[157]][f[303]] || t1JW[f[157]][f[158]], f7h9, qx80rp, t1o5v), sendApi(t1JW[f[498]], f[724], {
        'game_pkg': t1JW[f[273]],
        'server_id': t1JW[f[157]][f[158]],
        'role_id': f7h9,
        'uid': t1JW[f[568]],
        'role_name': qx80rp,
        'role_type': sazvt,
        'level': t1o5v,
        'evolution': itsae
    });
}, window[f[727]] = function (pr0q8x) {}, window[f[728]] = function (d0) {
    Sivzts[f[729]](f[729], function (eizat) {
        d0 && d0(eizat);
    });
}, window[f[730]] = function () {
    Sivzts[f[730]]();
}, window[f[731]] = function () {
    Sivzts[f[732]]();
}, window[f[733]] = function (hm$2un, _6g5wl, l65g, isatze, _6lw1, w5l6g_, fe9a37, rp8x0y) {
    rp8x0y = rp8x0y || t1JW[f[157]][f[158]], sendApi(t1JW[f[498]], f[734], {
        'phone': hm$2un,
        'role_id': _6g5wl,
        'uid': t1JW[f[568]],
        'game_pkg': t1JW[f[273]],
        'partner_id': t1JW[f[506]],
        'server_id': rp8x0y
    }, fe9a37, 0x2, null, function () {
        return !![];
    });
}, window[f[735]] = function (a379e) {
    window[f[736]] = a379e, window[f[736]] && window[f[737]] && (console[f[554]](f[738] + window[f[737]][f[739]]), window[f[736]](window[f[737]]), window[f[737]] = null);
}, window[f[740]] = function (gw_5, zsi, tv1o45, tiva) {
    window[f[741]](f[742], {
        'game_pkg': window[f[156]][f[273]],
        'role_id': zsi,
        'server_id': tv1o45
    }, tiva);
}, window[f[743]] = function (aez7i3, qrgkx, nf2$) {
    function lgbrqk(o1t4v5) {
        var x8prqk = [],
            a7ei3 = [],
            $9h2f7 = nf2$ || window[f[483]][f[744]];
        for (var g_6wlb in $9h2f7) {
            var bgqkwl = Number(g_6wlb);
            (!aez7i3 || !aez7i3[f[186]] || aez7i3[f[461]](bgqkwl) != -0x1) && (a7ei3[f[335]]($9h2f7[g_6wlb]), x8prqk[f[335]]([bgqkwl, 0x3]));
        }
        window['t1$SWRJ'](window[f[745]], f[746]) >= 0x0 ? (console[f[327]](f[747]), Sivzts[f[748]] && Sivzts[f[748]](a7ei3, function (ia3sez) {
            console[f[327]](f[749]), console[f[327]](ia3sez);
            if (ia3sez && ia3sez[f[628]] == f[750]) for (var fhnu2$ in $9h2f7) {
                if (ia3sez[$9h2f7[fhnu2$]] == f[751]) {
                    var l65wg_ = Number(fhnu2$);
                    for (var f$3297 = 0x0; f$3297 < x8prqk[f[186]]; f$3297++) {
                        if (x8prqk[f$3297][0x0] == l65wg_) {
                            x8prqk[f$3297][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['t1$SWRJ'](window[f[745]], f[752]) >= 0x0 ? wx[f[753]]({
                'withSubscriptions': !![],
                'success': function (ziea7) {
                    var ia3zs = ziea7[f[754]][f[755]];
                    if (ia3zs) {
                        console[f[327]](f[756]), console[f[327]](ia3zs);
                        for (var lwbgk in $9h2f7) {
                            if (ia3zs[$9h2f7[lwbgk]] == f[751]) {
                                var eiza37 = Number(lwbgk);
                                for (var k6bwlg = 0x0; k6bwlg < x8prqk[f[186]]; k6bwlg++) {
                                    if (x8prqk[k6bwlg][0x0] == eiza37) {
                                        x8prqk[k6bwlg][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[f[327]](x8prqk), qrgkx && qrgkx(x8prqk);
                    } else console[f[327]](f[757]), console[f[327]](ziea7), console[f[327]](x8prqk), qrgkx && qrgkx(x8prqk);
                },
                'fail': function () {
                    console[f[327]](f[758]), console[f[327]](x8prqk), qrgkx && qrgkx(x8prqk);
                }
            }) : (console[f[327]](f[759] + window[f[745]]), console[f[327]](x8prqk), qrgkx && qrgkx(x8prqk));
        })) : (console[f[327]](f[760] + window[f[745]]), console[f[327]](x8prqk), qrgkx && qrgkx(x8prqk)), wx[f[761]](lgbrqk);
    }
    wx[f[762]](lgbrqk);
}, window[f[763]] = {
    'isSuccess': ![],
    'level': f[764],
    'isCharging': ![]
}, window[f[765]] = function (si4z) {
    wx[f[766]]({
        'success': function (kprqx8) {
            var tsz4iv = window[f[763]];
            tsz4iv[f[767]] = !![], tsz4iv[f[768]] = Number(kprqx8[f[768]])[f[769]](0x0), tsz4iv[f[770]] = kprqx8[f[770]], si4z && si4z(tsz4iv[f[767]], tsz4iv[f[768]], tsz4iv[f[770]]);
        },
        'fail': function (tz4sv) {
            console[f[327]](f[771], tz4sv[f[628]]);
            var xdpy8 = window[f[763]];
            si4z && si4z(xdpy8[f[767]], xdpy8[f[768]], xdpy8[f[770]]);
        }
    });
}, window[f[772]] = function ($2h7f9) {
    wx[f[772]]({
        'success': function (f9ae7) {
            $2h7f9 && $2h7f9(!![], f9ae7);
        },
        'fail': function (wlbkg) {
            $2h7f9 && $2h7f9(![], wlbkg);
        }
    });
}, window[f[773]] = function (l5gw6) {
    if (l5gw6) wx[f[773]](l5gw6);
}, window[f[774]] = function (x0ry) {
    wx[f[774]](x0ry);
}, window[f[741]] = function (ietasz, x0p8ry, ztsva, szea3, qk8bx, _v5o1, rbxgqk, q8krxp) {
    if (szea3 == undefined) szea3 = 0x1;
    wx[f[583]]({
        'url': ietasz,
        'method': rbxgqk || f[775],
        'responseType': f[211],
        'data': x0p8ry,
        'header': { 'content-type': q8krxp || f[585] },
        'success': function ($279fh) {
            DEBUG && console[f[327]](f[776], ietasz, info, $279fh);
            if ($279fh && $279fh[f[777]] == 0xc8) {
                var z937a = $279fh[f[331]];
                !_v5o1 || _v5o1(z937a) ? ztsva && ztsva(z937a) : window[f[778]](ietasz, x0p8ry, ztsva, szea3, qk8bx, _v5o1, $279fh);
            } else window[f[778]](ietasz, x0p8ry, ztsva, szea3, qk8bx, _v5o1, $279fh);
        },
        'fail': function (zitvas) {
            DEBUG && console[f[327]](f[779], ietasz, info, zitvas), window[f[778]](ietasz, x0p8ry, ztsva, szea3, qk8bx, _v5o1, zitvas);
        },
        'complete': function () {}
    });
}, window[f[778]] = function (wbql, _wg6l5, ia3z7, iov, a3sz, fnhu, q0p8r) {
    iov - 0x1 > 0x0 ? setTimeout(function () {
        window[f[741]](wbql, _wg6l5, ia3z7, iov - 0x1, a3sz, fnhu);
    }, 0x3e8) : a3sz && a3sz(JSON[f[439]]({
        'url': wbql,
        'response': q0p8r
    }));
}, window[f[780]] = function (_6l5gw, $79f23, xqr80, t51ov, izvts4, unfh2, brq8kx) {
    !xqr80 && (xqr80 = {});
    var v1so = Math[f[442]](Date[f[151]]() / 0x3e8);
    xqr80[f[653]] = v1so, xqr80[f[781]] = $79f23;
    var e7f9 = Object[f[782]](xqr80)[f[336]](),
        r8xpkq = '',
        rq8p0 = '';
    for (var gqxkbr = 0x0; gqxkbr < e7f9[f[186]]; gqxkbr++) {
        r8xpkq = r8xpkq + (gqxkbr == 0x0 ? '' : '&') + e7f9[gqxkbr] + xqr80[e7f9[gqxkbr]], rq8p0 = rq8p0 + (gqxkbr == 0x0 ? '' : '&') + e7f9[gqxkbr] + '=' + encodeURIComponent(xqr80[e7f9[gqxkbr]]);
    }
    r8xpkq = r8xpkq + t1JW[f[504]];
    var bwkqgl = f[783] + md5(r8xpkq);
    send(_6l5gw + '?' + rq8p0 + (rq8p0 == '' ? '' : '&') + bwkqgl, null, t51ov, izvts4, unfh2, brq8kx || function (sz3iea) {
        return sz3iea[f[330]] == f[329];
    }, null, f[784]);
}, window[f[785]] = function (ypx08, gblwqk) {
    var tvzs4i = 0x0;
    t1JW[f[157]] && (tvzs4i = t1JW[f[157]][f[158]]), sendApi(t1JW[f[500]], f[786], {
        'partnerId': t1JW[f[506]],
        'gamePkg': t1JW[f[273]],
        'logTime': Math[f[442]](Date[f[151]]() / 0x3e8),
        'platformUid': t1JW[f[649]],
        'type': ypx08,
        'serverId': tvzs4i
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[f[787]] = function (kr8bx) {
    sendApi(t1JW[f[498]], f[788], {
        'partner_id': t1JW[f[506]],
        'uid': t1JW[f[568]],
        'version': t1JW[f[494]],
        'game_pkg': t1JW[f[273]],
        'device': t1JW[f[507]]
    }, t1JWSR, t1SWJ, t1WR);
}, window[f[789]] = function (bl6wgk) {
    if (bl6wgk && bl6wgk[f[330]] === f[329] && bl6wgk[f[331]]) {
        bl6wgk[f[331]][f[790]]({
            'id': -0x2,
            'name': f[791]
        }), bl6wgk[f[331]][f[790]]({
            'id': -0x1,
            'name': f[792]
        }), t1JW[f[272]] = bl6wgk[f[331]];
        if (window[f[263]]) window[f[263]][f[308]]();
    } else {
        t1JW[f[283]] = ![];
        var b8xqk = bl6wgk ? bl6wgk[f[330]] : '';
        window[f[562]](0x7, f[793] + b8xqk), window[f[540]](f[794] + b8xqk);
    }
}, window[f[795]] = function (fnh$92) {
    sendApi(t1JW[f[498]], f[796], {
        'partner_id': t1JW[f[506]],
        'uid': t1JW[f[568]],
        'version': t1JW[f[494]],
        'game_pkg': t1JW[f[273]],
        'device': t1JW[f[507]]
    }, t1RJS, t1SWJ, t1WR);
}, window[f[797]] = function (a73ef9) {
    t1JW[f[316]] = ![];
    if (a73ef9 && a73ef9[f[330]] === f[329] && a73ef9[f[331]]) {
        for (var jpd80y = 0x0; jpd80y < a73ef9[f[331]][f[186]]; jpd80y++) {
            a73ef9[f[331]][jpd80y][f[304]] = t1JSR(a73ef9[f[331]][jpd80y]);
        }
        t1JW[f[314]][-0x1] = window[f[798]](a73ef9[f[331]]), window[f[263]][f[315]](-0x1);
    } else {
        var taesiz = a73ef9 ? a73ef9[f[330]] : '';
        window[f[562]](0x8, f[799] + taesiz), window[f[540]](f[800] + taesiz);
    }
}, window[f[801]] = function (o415_6) {
    sendApi(t1JW[f[498]], f[796], {
        'partner_id': t1JW[f[506]],
        'uid': t1JW[f[568]],
        'version': t1JW[f[494]],
        'game_pkg': t1JW[f[273]],
        'device': t1JW[f[507]]
    }, o415_6, t1SWJ, t1WR);
}, window[f[802]] = function (z3esi, n2f$9) {
    sendApi(t1JW[f[498]], f[803], {
        'partner_id': t1JW[f[506]],
        'uid': t1JW[f[568]],
        'version': t1JW[f[494]],
        'game_pkg': t1JW[f[273]],
        'device': t1JW[f[507]],
        'server_group_id': n2f$9
    }, t1SJR, t1SWJ, t1WR);
}, window[f[804]] = function (_wlgb6) {
    t1JW[f[316]] = ![];
    if (_wlgb6 && _wlgb6[f[330]] === f[329] && _wlgb6[f[331]] && _wlgb6[f[331]][f[331]]) {
        var yj8d = _wlgb6[f[331]][f[805]],
            n2h9f$ = [];
        for (var etsa = 0x0; etsa < _wlgb6[f[331]][f[331]][f[186]]; etsa++) {
            _wlgb6[f[331]][f[331]][etsa][f[304]] = t1JSR(_wlgb6[f[331]][f[331]][etsa]), (n2h9f$[f[186]] == 0x0 || _wlgb6[f[331]][f[331]][etsa][f[304]] != 0x0) && (n2h9f$[n2h9f$[f[186]]] = _wlgb6[f[331]][f[331]][etsa]);
        }
        t1JW[f[314]][yj8d] = window[f[798]](n2h9f$), window[f[263]][f[315]](yj8d);
    } else {
        var ietas = _wlgb6 ? _wlgb6[f[330]] : '';
        window[f[562]](0x9, f[806] + ietas), window[f[540]](f[807] + ietas);
    }
}, window['t1$SWJ'] = function (k8rbx) {
    sendApi(t1JW[f[498]], f[808], {
        'partner_id': t1JW[f[506]],
        'uid': t1JW[f[568]],
        'version': t1JW[f[494]],
        'game_pkg': t1JW[f[273]],
        'device': t1JW[f[507]]
    }, reqServerRecommendCallBack, t1SWJ, t1WR);
}, window[f[809]] = function (f7239e) {
    t1JW[f[316]] = ![];
    if (f7239e && f7239e[f[330]] === f[329] && f7239e[f[331]]) {
        for (var rp0y8x = 0x0; rp0y8x < f7239e[f[331]][f[186]]; rp0y8x++) {
            f7239e[f[331]][rp0y8x][f[304]] = t1JSR(f7239e[f[331]][rp0y8x]);
        }
        t1JW[f[314]][-0x2] = window[f[798]](f7239e[f[331]]), window[f[263]][f[315]](-0x2);
    } else {
        var hn2$u = f7239e ? f7239e[f[330]] : '';
        window[f[562]](0xa, f[810] + hn2$u), alert(f[811] + hn2$u);
    }
}, window[f[798]] = function (pxy80d) {
    return pxy80d;
}, window[f[812]] = function (g65lw, iz4vst) {
    g65lw = g65lw || t1JW[f[157]][f[158]], sendApi(t1JW[f[498]], f[813], {
        'type': '4',
        'game_pkg': t1JW[f[273]],
        'server_id': g65lw
    }, iz4vst);
}, window[f[814]] = function (pxqk, v1t4o, i37ae, dj80) {
    i37ae = i37ae || t1JW[f[157]][f[158]], sendApi(t1JW[f[498]], f[815], {
        'type': pxqk,
        'game_pkg': v1t4o,
        'server_id': i37ae
    }, dj80);
}, window[f[816]] = function ($hnu, e3a9z7) {
    sendApi(t1JW[f[498]], f[817], { 'game_pkg': $hnu }, e3a9z7);
}, window[f[818]] = function (l_6g) {
    if (l_6g) {
        if (l_6g[f[304]] == 0x1) {
            if (l_6g[f[819]] == 0x1) return 0x2;else return 0x1;
        } else return l_6g[f[304]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[f[820]] = function (l5_16, tzsiea) {
    t1JW[f[821]] = {
        'step': l5_16,
        'server_id': tzsiea
    };
    var w6l5g = this;
    t1RJSW({ 'title': f[822] }), sendApi(t1JW[f[498]], f[823], {
        'partner_id': t1JW[f[506]],
        'uid': t1JW[f[568]],
        'game_pkg': t1JW[f[273]],
        'server_id': tzsiea,
        'platform': t1JW[f[648]],
        'platform_uid': t1JW[f[649]],
        'check_login_time': t1JW[f[652]],
        'check_login_sign': t1JW[f[650]],
        'version_name': t1JW[f[602]]
    }, t1WRJS, t1SWJ, t1WR, function (svzai) {
        return svzai[f[330]] == f[329] || svzai[f[554]] == f[824] || svzai[f[554]] == f[825];
    });
}, window[f[826]] = function (rx08py) {
    var bxgqk = this;
    if (rx08py && rx08py[f[330]] === f[329] && rx08py[f[331]]) {
        var bgqlwk = t1JW[f[157]];
        bgqlwk[f[827]] = t1JW[f[509]], bgqlwk[f[651]] = String(rx08py[f[331]][f[828]]), bgqlwk[f[516]] = parseInt(rx08py[f[331]][f[653]]);
        if (rx08py[f[331]][f[829]]) bgqlwk[f[829]] = parseInt(rx08py[f[331]][f[829]]);else bgqlwk[f[829]] = parseInt(rx08py[f[331]][f[158]]);
        bgqlwk[f[830]] = 0x0, bgqlwk[f[307]] = t1JW[f[690]], bgqlwk[f[831]] = rx08py[f[331]][f[832]], bgqlwk[f[833]] = rx08py[f[331]][f[833]];
        if (rx08py[f[331]][f[834]]) bgqlwk[f[834]] = parseInt(rx08py[f[331]][f[834]]);
        console[f[327]](f[835] + JSON[f[439]](bgqlwk[f[833]])), t1JW[f[428]] == 0x1 && bgqlwk[f[833]] && bgqlwk[f[833]][f[836]] == 0x1 && (t1JW[f[219]] = 0x1, window[f[480]][f[152]]['t1$WJ']()), t1WSRJ();
    } else {
        if (t1JW[f[821]][f[837]] >= 0x3) {
            var krg = rx08py ? rx08py[f[330]] : '';
            window[f[562]](0xc, f[838] + krg), t1WR(JSON[f[439]](rx08py)), window[f[540]](f[839] + krg);
        } else sendApi(t1JW[f[498]], f[625], {
            'platform': t1JW[f[496]],
            'partner_id': t1JW[f[506]],
            'token': t1JW[f[622]],
            'game_pkg': t1JW[f[273]],
            'deviceId': t1JW[f[507]],
            'scene': f[626] + t1JW[f[508]]
        }, function ($327f) {
            if (!$327f || $327f[f[330]] != f[329]) {
                window[f[540]](f[644] + $327f && $327f[f[330]]);
                return;
            }
            t1JW[f[650]] = String($327f[f[651]]), t1JW[f[652]] = String($327f[f[653]]), setTimeout(function () {
                t1WRSJ(t1JW[f[821]][f[837]] + 0x1, t1JW[f[821]][f[158]]);
            }, 0x5dc);
        }, t1SWJ, t1WR, function (vzt4) {
            return vzt4[f[330]] == f[329] || vzt4[f[330]] == f[840];
        });
    }
}, window[f[841]] = function () {
    ServerLoading[f[152]][f[423]](t1JW[f[428]]), window[f[525]] = !![], window[f[413]]();
}, window[f[412]] = function () {
    if (window[f[526]] && window[f[527]] && window[f[411]] && window[f[422]] && window[f[528]] && window[f[530]]) {
        if (!window[f[842]][f[152]]) {
            console[f[327]](f[843] + window[f[842]][f[152]]);
            var ypjd = wx[f[844]](),
                pqk8r = ypjd[f[739]] ? ypjd[f[739]] : 0x0,
                _gwlb6 = {
                'cdn': window[f[156]][f[307]],
                'spareCdn': window[f[156]][f[608]],
                'newRegister': window[f[156]][f[428]],
                'wxPC': window[f[156]][f[523]],
                'wxIOS': window[f[156]][f[521]],
                'wxAndroid': window[f[156]][f[522]],
                'wxParam': {
                    'limitLoad': window[f[156]]['t1$RSWJ'],
                    'benchmarkLevel': window[f[156]]['t1$RJSW'],
                    'wxFrom': window[f[483]][f[614]] == f[845] ? 0x1 : 0x0,
                    'wxSDKVersion': window[f[745]]
                },
                'configType': window[f[156]][f[517]],
                'exposeType': window[f[156]][f[519]],
                'scene': pqk8r
            };
            new window[f[842]](_gwlb6, window[f[156]][f[216]], window['t1$RSJW']);
        }
    }
}, window[f[413]] = function () {
    if (window[f[526]] && window[f[527]] && window[f[411]] && window[f[422]] && window[f[528]] && window[f[530]] && window[f[525]] && window[f[529]]) {
        t1RJWS();
        if (!t1WSJ) {
            t1WSJ = !![];
            if (!window[f[842]][f[152]]) window[f[412]]();
            var a3i7ze = 0x0,
                qgbkwl = wx[f[846]]();
            qgbkwl && (window[f[156]][f[847]] && (a3i7ze = qgbkwl[f[108]]), console[f[554]](f[848] + qgbkwl[f[108]] + f[849] + qgbkwl[f[230]] + f[850] + qgbkwl[f[851]] + f[852] + qgbkwl[f[68]] + f[853] + qgbkwl[f[178]] + f[854] + qgbkwl[f[180]]));
            var z73aei = {};
            for (const wbkgl6 in t1JW[f[157]]) {
                z73aei[wbkgl6] = t1JW[f[157]][wbkgl6];
            }
            var r8y0xp = {
                'channel': window[f[156]][f[510]],
                'account': window[f[156]][f[568]],
                'userId': window[f[156]][f[647]],
                'cdn': window[f[156]][f[307]],
                'data': window[f[156]][f[331]],
                'package': window[f[156]][f[493]],
                'newRegister': window[f[156]][f[428]],
                'pkgName': window[f[156]][f[273]],
                'partnerId': window[f[156]][f[506]],
                'platform_uid': window[f[156]][f[649]],
                'deviceId': window[f[156]][f[507]],
                'selectedServer': z73aei,
                'configType': window[f[156]][f[517]],
                'exposeType': window[f[156]][f[519]],
                'debugUsers': window[f[156]][f[514]],
                'wxMenuTop': a3i7ze,
                'wxShield': window[f[156]][f[520]],
                'wx_channel': window[f[156]][f[623]]
            };
            if (window[f[693]]) for (var wo_6 in window[f[693]]) {
                r8y0xp[wo_6] = window[f[693]][wo_6];
            }
            window[f[842]][f[152]]['t1WJ$'](r8y0xp);
            if (t1JW[f[157]] && t1JW[f[157]][f[158]]) localStorage[f[284]](f[655] + t1JW[f[273]] + t1JW[f[568]], t1JW[f[157]][f[158]]);
        }
    } else console[f[554]](f[855] + window[f[526]] + f[856] + window[f[527]] + f[857] + window[f[411]] + f[858] + window[f[422]] + f[859] + window[f[528]] + f[860] + window[f[530]] + f[861] + window[f[525]] + f[862] + window[f[529]]);
};