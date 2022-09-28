var b = wx.$e;
import ec32z from '../a55a/fv8a.js';
window[b[637]] = { 'wxVersion': window[b[638]]['game_ver'] }, window[b[639]] = ![], window[b[640]] = 0x1, window[b[641]] = 0x1, window[b[642]] = !![], window[b[643]] = !![], window[b[644]] = '', window[b[645]] = ![], window[b[646]] = {
    'base_cdn': b[647],
    'cdn': b[647]
}, e1EF[b[648]] = {}, e1EF[b[586]] = '0', e1EF[b[649]] = window[b[637]][b[650]], e1EF[b[651]] = '', e1EF['os'] = '1', e1EF[b[652]] = b[653], e1EF[b[654]] = b[655], e1EF[b[656]] = b[657], e1EF[b[658]] = b[659], e1EF[b[660]] = b[661], e1EF[b[662]] = '1', e1EF[b[663]] = '', e1EF['device_id'] = '', e1EF[b[664]] = 0x0, e1EF[b[665]] = {}, e1EF[b[666]] = parseInt(e1EF[b[662]]), e1EF[b[667]] = e1EF[b[662]], e1EF[b[668]] = {}, e1EF[b[669]] = b[670], e1EF[b[671]] = ![], e1EF[b[672]] = b[673], e1EF[b[674]] = Date[b[675]](), e1EF[b[676]] = b[677], e1EF[b[678]] = '_a', e1EF[b[679]] = 0x2, e1EF[b[680]] = 0x7c1, e1EF[b[650]] = window[b[637]][b[650]], e1EF[b[681]] = ![], e1EF[b[682]] = ![], e1EF[b[683]] = ![], e1EF[b[684]] = ![], window[b[685]] = 0x5, window[b[686]] = ![], window[b[687]] = ![], window[b[688]] = ![], window[b[689]] = ![], window[b[690]] = ![], window[b[691]] = ![], window[b[692]] = ![], window[b[693]] = ![], window[b[694]] = ![], window[b[695]] = null, window[b[696]] = function (zc27b3) {
    console[b[550]](b[696], zc27b3), wx[b[697]]({}), wx[b[698]]({
        'title': b[699],
        'content': zc27b3,
        'success'(p5tx) {
            if (p5tx[b[700]]) console[b[550]](b[701]);else p5tx[b[702]] && console[b[550]](b[703]);
        }
    });
}, window[b[704]] = function (t854g) {
    console[b[550]](b[705], t854g), e1HEF7(), wx[b[698]]({
        'title': b[699],
        'content': t854g,
        'confirmText': b[706],
        'cancelText': b[707],
        'success'(gt48p) {
            if (gt48p[b[700]]) window[b[708]]();else gt48p[b[702]] && (console[b[550]](b[709]), wx[b[710]]({}));
        }
    });
}, window[b[711]] = function (qoywk1) {
    console[b[550]](b[711], qoywk1), wx[b[698]]({
        'title': b[699],
        'content': qoywk1,
        'confirmText': b[712],
        'showCancel': ![],
        'complete'(bz3k7q) {
            console[b[550]](b[709]), wx[b[710]]({});
        }
    });
}, window[b[713]] = ![], window[b[714]] = function (ji) {
    window[b[713]] = !![], wx[b[715]](ji);
}, window[b[716]] = function () {
    window[b[713]] && (window[b[713]] = ![], wx[b[697]]({}));
}, window[b[717]] = function (mxajpi) {
    window[b[718]][b[719]][b[717]](mxajpi);
}, window[b[91]] = function (imjx$a, pij5a) {
    ec32z[b[91]](imjx$a, function (mr_0$) {
        mr_0$ && mr_0$[b[595]] ? mr_0$[b[595]][b[720]] == 0x1 ? pij5a(!![]) : (pij5a(![]), console[b[721]](b[722] + mr_0$[b[595]][b[723]])) : console[b[550]](b[91], mr_0$);
    });
}, window[b[724]] = function (majixp) {
    console[b[550]](b[725], majixp);
}, window[b[726]] = function (pmaji) {}, window[b[727]] = function (h92vn, qzbc, qk3b7z) {}, window[b[728]] = function (tl5g8) {
    console[b[550]](b[729], tl5g8), window[b[718]][b[719]][b[730]](), window[b[718]][b[719]][b[731]](), window[b[718]][b[719]][b[732]]();
}, window[b[733]] = function (ul8n9h) {
    window[b[734]](0xe, b[735] + ul8n9h), window[b[704]](b[736]);
    var tax5p = {
        'id': window[b[646]][b[737]],
        'role': window[b[646]][b[738]],
        'level': window[b[646]][b[739]],
        'account': window[b[646]][b[740]],
        'version': window[b[646]][b[680]],
        'cdn': window[b[646]][b[741]],
        'pkgName': window[b[646]][b[663]],
        'gamever': window[b[638]]['game_ver'],
        'serverid': window[b[646]][b[668]] ? window[b[646]][b[668]][b[62]] : 0x0,
        'systemInfo': window[b[742]],
        'error': b[743],
        'stack': ul8n9h ? ul8n9h : b[736]
    },
        g8p45t = JSON[b[744]](tax5p);
    console[b[593]](b[745] + g8p45t), window[b[669]](g8p45t);
}, window[b[734]] = function (j_$am, $0rs6) {
    sendApi(e1EF[b[656]], b[746], {
        'game_pkg': e1EF[b[663]],
        'partner_id': e1EF[b[662]],
        'server_id': e1EF[b[668]] && e1EF[b[668]][b[62]] > 0x0 ? e1EF[b[668]][b[62]] : 0x0,
        'uid': e1EF[b[740]] > 0x0 ? e1EF[b[740]] : 0x0,
        'type': j_$am,
        'info': $0rs6
    });
}, window[b[747]] = function (r$m_) {
    var gtp45i = JSON[b[549]](r$m_);
    gtp45i[b[748]] = window[b[638]]['game_ver'], gtp45i[b[749]] = window[b[646]][b[668]] ? window[b[646]][b[668]][b[62]] : 0x0, gtp45i[b[742]] = window[b[742]];
    var nlhu9 = JSON[b[744]](gtp45i);
    console[b[593]](b[750] + nlhu9), window[b[669]](nlhu9);
}, window[b[751]] = function (z2v, odkwy) {
    var wof1y = {
        'id': window[b[646]][b[737]],
        'role': window[b[646]][b[738]],
        'level': window[b[646]][b[739]],
        'account': window[b[646]][b[740]],
        'version': window[b[646]][b[680]],
        'cdn': window[b[646]][b[741]],
        'pkgName': window[b[646]][b[663]],
        'gamever': window[b[638]]['game_ver'],
        'serverid': window[b[646]][b[668]] ? window[b[646]][b[668]][b[62]] : 0x0,
        'systemInfo': window[b[742]],
        'error': z2v,
        'stack': odkwy
    },
        w3qkz = JSON[b[744]](wof1y);
    console[b[606]](b[752] + w3qkz), window[b[669]](w3qkz);
}, window[b[669]] = function (q37czb) {
    if (window[b[646]][b[753]] == b[754]) return;
    var tg5i4 = e1EF[b[669]] + b[755] + e1EF[b[740]];
    wx[b[756]]({
        'url': tg5i4,
        'method': b[24],
        'data': q37czb,
        'header': {
            'content-type': b[757],
            'cache-control': b[758]
        },
        'success': function (v92bcu) {
            DEBUG && console[b[550]](b[759], tg5i4, q37czb, v92bcu);
        },
        'fail': function (ptia5) {
            DEBUG && console[b[550]](b[759], tg5i4, q37czb, ptia5);
        },
        'complete': function () {}
    });
}, window[b[760]] = function () {
    function rj0_() {
        return ((0x1 + Math[b[761]]()) * 0x10000 | 0x0)[b[438]](0x10)[b[556]](0x1);
    }
    return rj0_() + rj0_() + '-' + rj0_() + '-' + rj0_() + '-' + rj0_() + '+' + rj0_() + rj0_() + rj0_();
}, window[b[708]] = function () {
    console[b[550]](b[762]);
    var odyw = ec32z[b[763]]();
    e1EF[b[667]] = odyw[b[764]], e1EF[b[666]] = odyw[b[764]], e1EF[b[662]] = odyw[b[764]], e1EF[b[663]] = odyw['game_pkg'];
    var qokwy = { 'game_ver': e1EF[b[649]] };
    e1EF['device_id'] = this[b[760]](), e1HE7F({ 'title': b[765] }), ec32z[b[84]](qokwy, this[b[766]][b[409]](this));
}, window[b[766]] = function (l89h) {
    var k1yoq = l89h[b[767]];
    sdkInitRes = l89h, console[b[550]](b[768] + k1yoq + b[769] + (k1yoq == 0x1) + b[770] + l89h['game_ver'] + b[771] + window[b[637]][b[650]] + b[772] + l89h[b[773]]);
    if (!l89h['game_ver'] || window[b[774]](window[b[637]][b[650]], l89h['game_ver']) < 0x0) console[b[550]](b[775]), e1EF[b[654]] = b[776], e1EF[b[656]] = b[777], e1EF[b[658]] = b[778], e1EF[b[741]] = b[779], e1EF[b[780]] = b[781], e1EF[b[773]] = l89h[b[773]], e1EF[b[681]] = ![];else window[b[774]](window[b[637]][b[650]], l89h['game_ver']) == 0x0 ? (console[b[550]](b[782]), e1EF[b[654]] = b[655], e1EF[b[656]] = b[657], e1EF[b[658]] = b[659], e1EF[b[741]] = b[783], e1EF[b[780]] = b[781], e1EF[b[773]] = b[784], e1EF[b[681]] = !![]) : (console[b[550]](b[785]), e1EF[b[654]] = b[655], e1EF[b[656]] = b[657], e1EF[b[658]] = b[659], e1EF[b[741]] = b[783], e1EF[b[780]] = b[781], e1EF[b[773]] = b[784], e1EF[b[681]] = ![]);
    e1EF[b[664]] = config[b[433]] ? config[b[433]] : 0x0, this[b[786]](), this[b[787]](), window[b[788]] = 0x5, e1HE7F({ 'title': b[789] }), ec32z[b[13]](this[b[790]][b[409]](this));
}, window[b[788]] = 0x5, window[b[790]] = function (nuh89l, qokyw1) {
    if (nuh89l == 0x0 && qokyw1 && qokyw1[b[581]]) {
        e1EF[b[791]] = qokyw1[b[581]];
        var owqy1 = this;
        e1HE7F({ 'title': b[792] }), sendApi(e1EF[b[654]], b[793], {
            'platform': e1EF[b[652]],
            'partner_id': e1EF[b[662]],
            'token': qokyw1[b[581]],
            'game_pkg': e1EF[b[663]],
            'deviceId': e1EF['device_id'],
            'scene': b[794] + e1EF[b[664]]
        }, this[b[795]][b[409]](this), e17FE, e1FH);
    } else qokyw1 && qokyw1[b[796]] && window[b[788]] > 0x0 && (qokyw1[b[796]][b[499]](b[797]) != -0x1 || qokyw1[b[796]][b[499]](b[798]) != -0x1 || qokyw1[b[796]][b[499]](b[799]) != -0x1 || qokyw1[b[796]][b[499]](b[800]) != -0x1 || qokyw1[b[796]][b[499]](b[801]) != -0x1 || qokyw1[b[796]][b[499]](b[802]) != -0x1) ? (window[b[788]]--, ec32z[b[13]](this[b[790]][b[409]](this))) : (window[b[734]](0x1, b[803] + nuh89l + b[804] + (qokyw1 ? qokyw1[b[796]] : '')), window[b[751]](b[805], JSON[b[744]]({
        'status': nuh89l,
        'data': qokyw1
    })), window[b[704]](b[806] + (qokyw1 && qokyw1[b[796]] ? '，' + qokyw1[b[796]] : '')));
}, window[b[795]] = function (tiax5p) {
    if (!tiax5p) {
        window[b[734]](0x2, b[807]), window[b[751]](b[808], b[809]), window[b[704]](b[810]);
        return;
    }
    if (tiax5p[b[720]] != b[811]) {
        window[b[734]](0x2, b[812] + tiax5p[b[720]]), window[b[751]](b[808], JSON[b[744]](tiax5p)), window[b[704]](b[813] + tiax5p[b[720]]);
        return;
    }
    e1EF[b[814]] = String(tiax5p[b[740]]), e1EF[b[740]] = String(tiax5p[b[740]]), e1EF[b[815]] = String(tiax5p[b[815]]), e1EF[b[667]] = String(tiax5p[b[815]]), e1EF[b[816]] = String(tiax5p[b[816]]), e1EF[b[817]] = String(tiax5p[b[818]]), e1EF[b[819]] = String(tiax5p[b[820]]), e1EF[b[818]] = '';
    var oydwk1 = this;
    e1HE7F({ 'title': b[821] });
    var agtp5 = localStorage[b[822]](b[823] + e1EF[b[663]] + e1EF[b[740]]);
    if (agtp5 && agtp5 != '') {
        var q3kzw = Number(agtp5);
        oydwk1[b[824]](q3kzw);
    } else oydwk1[b[825]]();
}, window[b[825]] = function () {
    var yfdow1 = this;
    sendApi(e1EF[b[654]], b[826], {
        'partner_id': e1EF[b[662]],
        'uid': e1EF[b[740]],
        'version': e1EF[b[649]],
        'game_pkg': e1EF[b[663]],
        'device': e1EF['device_id']
    }, yfdow1[b[827]][b[409]](yfdow1), e17FE, e1FH);
}, window[b[827]] = function (_0xmj$) {
    if (!_0xmj$) {
        window[b[734]](0x3, b[828]), window[b[704]](b[828]);
        return;
    }
    if (_0xmj$[b[720]] != b[811]) {
        window[b[734]](0x3, b[829] + _0xmj$[b[720]]), window[b[704]](b[829] + _0xmj$[b[720]]);
        return;
    }
    if (!_0xmj$[b[595]] || _0xmj$[b[595]][b[419]] == 0x0) {
        window[b[734]](0x3, b[830]), window[b[704]](b[831]);
        return;
    }
    this[b[832]](_0xmj$);
}, window[b[824]] = function ($m_x0) {
    var t548 = this;
    sendApi(e1EF[b[654]], b[833], {
        'server_id': $m_x0,
        'time': Date[b[675]]() / 0x3e8
    }, t548[b[834]][b[409]](t548), e17FE, e1FH);
}, window[b[834]] = function (tipg5a) {
    if (!tipg5a) {
        window[b[734]](0x4, b[835]), this[b[825]]();
        return;
    }
    if (tipg5a[b[720]] != b[811]) {
        window[b[734]](0x4, b[836] + tipg5a[b[720]]), this[b[825]]();
        return;
    }
    if (!tipg5a[b[595]] || tipg5a[b[595]][b[419]] == 0x0) {
        window[b[734]](0x4, b[837]), this[b[825]]();
        return;
    }
    this[b[832]](tipg5a);
}, window[b[832]] = function (yodfe) {
    e1EF[b[838]] = yodfe[b[839]] != undefined ? yodfe[b[839]] : 0x0, e1EF[b[668]] = {
        'server_id': String(yodfe[b[595]][0x0][b[62]]),
        'server_name': String(yodfe[b[595]][0x0][b[840]]),
        'entry_ip': yodfe[b[595]][0x0][b[841]],
        'entry_port': parseInt(yodfe[b[595]][0x0][b[842]]),
        'status': e1E7H(yodfe[b[595]][0x0]),
        'start_time': yodfe[b[595]][0x0][b[843]],
        'maintain_time': yodfe[b[595]][0x0][b[844]] ? yodfe[b[595]][0x0][b[844]] : '',
        'is_recommend': yodfe[b[595]][0x0][b[845]],
        'cdn': e1EF[b[741]]
    }, this[b[846]](), window[b[718]] && window[b[718]][b[719]][b[847]] && window[b[718]][b[719]][b[847]](sdkInitRes[b[848]], sdkInitRes['sdk_age_adaptation_icon'], sdkInitRes['sdk_age_adaptation_content'], sdkInitRes['coordinate_x'], sdkInitRes['coordinate_y']);
}, window[b[849]] = null, window[b[846]] = function () {
    var mjx$ia = this;
    ec32z[b[92]](function (wdy1) {
        console[b[550]](b[850] + JSON[b[744]](wdy1)), youYiCofig = wdy1;
        window[b[849]][b[851]] == 0x1 && (e1EF[b[838]] = 0x0);
        if (e1EF[b[838]] == 0x1) {
            var woq3k = e1EF[b[668]][b[852]];
            if (woq3k === -0x1 || woq3k === 0x0) {
                window[b[734]](0xf, b[853] + e1EF[b[668]]['id'] + b[854] + e1EF[b[668]][b[852]]), window[b[704]](woq3k === -0x1 ? b[855] : b[856]);
                return;
            }
            e1FH7E(0x0, e1EF[b[668]][b[62]]), window[b[718]][b[719]][b[857]](e1EF[b[838]]);
        } else window[b[718]][b[719]][b[858]](() => {
            var h8ln9 = window[b[849]][b[859]],
                ky1qwo = window[b[849]][b[851]] == 0x1;
            ky1qwo && window[b[718]][b[719]][b[860]](b[861], h8ln9, b[35]);
        }, mjx$ia), e1HEF7();
        window[b[693]] = !![], window[b[862]](), window[b[863]]();
    });
}, window[b[864]] = function () {
    ec32z[b[93]](function (wkoq31) {
        console[b[550]](b[865] + JSON[b[744]](wkoq31));
    });
}, window[b[786]] = function () {
    sendApi(e1EF[b[654]], b[866], {
        'game_pkg': e1EF[b[663]],
        'version_name': e1EF[b[773]]
    }, this[b[867]][b[409]](this), e17FE, e1FH);
}, window[b[867]] = function (vn2uh) {
    if (!vn2uh) {
        window[b[734]](0x5, b[868]), window[b[704]](b[868]);
        return;
    }
    if (vn2uh[b[720]] != b[811]) {
        window[b[734]](0x5, b[869] + vn2uh[b[720]]), window[b[704]](b[869] + vn2uh[b[720]]);
        return;
    }
    if (!vn2uh[b[595]] || !vn2uh[b[595]][b[649]]) {
        window[b[734]](0x5, b[870] + (vn2uh[b[595]] && vn2uh[b[595]][b[649]])), window[b[704]](b[870] + (vn2uh[b[595]] && vn2uh[b[595]][b[649]]));
        return;
    }
    vn2uh[b[595]][b[871]] && vn2uh[b[595]][b[871]][b[419]] > 0xa && (e1EF['base_cdn'] = vn2uh[b[595]][b[871]], e1EF[b[741]] = vn2uh[b[595]][b[871]]), vn2uh[b[595]][b[649]] && (e1EF[b[680]] = vn2uh[b[595]][b[649]]), console[b[721]](b[872] + e1EF[b[680]] + b[873] + e1EF[b[773]]), window[b[691]] = !![], window[b[862]](), window[b[863]]();
}, window[b[874]], window[b[787]] = function () {
    sendApi(e1EF[b[654]], b[875], { 'game_pkg': e1EF[b[663]] }, this[b[876]][b[409]](this), e17FE, e1FH);
}, window[b[876]] = function (qkw7z3) {
    if (qkw7z3 && qkw7z3[b[720]] === b[811] && qkw7z3[b[595]]) {
        window[b[874]] = qkw7z3[b[595]];
        for (var dowy in qkw7z3[b[595]]) {
            e1EF[dowy] = qkw7z3[b[595]][dowy];
        }
        window[b[877]]();
    } else window[b[734]](0xb, b[878]), console[b[721]](b[879] + qkw7z3[b[720]]);
    window[b[692]] = !![], window[b[863]]();
}, window[b[877]] = function () {
    var v27b = e1EF[b[681]] || e1EF[b[880]] && e1EF[b[880]] > 0x0;
    if (v27b) {
        var rjm$0 = e1EF[b[881]],
            ok3w = rjm$0 && rjm$0[b[419]] == 0x9;
        ok3w && (window[b[882]] = rjm$0);
        var ykw1oq = e1EF[b[883]],
            glhn84 = ykw1oq && ykw1oq[b[539]]('#')[b[419]] == 0x4;
        glhn84 && (window[b[884]] = ykw1oq);
    }
}, window[b[885]] = function (h8lu9, v2cu9b, jixa$, jipma, kwo1, edof1y, glht48, paij, l4gh8t, t8g4hl) {
    kwo1 = String(kwo1);
    var bv7cz = glht48,
        m_$0j = paij;
    e1EF[b[648]][kwo1] = {
        'productid': kwo1,
        'productname': bv7cz,
        'productdesc': m_$0j,
        'roleid': h8lu9,
        'rolename': v2cu9b,
        'rolelevel': jixa$,
        'price': edof1y,
        'callback': l4gh8t
    }, sendApi(e1EF[b[658]], b[886], {
        'game_pkg': e1EF[b[663]],
        'server_id': e1EF[b[668]][b[62]],
        'server_name': e1EF[b[668]][b[840]],
        'level': jixa$,
        'uid': e1EF[b[740]],
        'role_id': h8lu9,
        'role_name': v2cu9b,
        'product_id': kwo1,
        'product_name': bv7cz,
        'product_desc': m_$0j,
        'money': edof1y,
        'partner_id': e1EF[b[662]]
    }, toPayCallBack, e17FE, e1FH);
}, window[b[887]] = function (ub92) {
    if (ub92 && (ub92[b[888]] === 0xc8 || ub92[b[720]] == b[811])) {
        var fy1ode = e1EF[b[648]][String(ub92[b[889]])];
        if (fy1ode[b[890]]) fy1ode[b[890]](ub92[b[889]], ub92[b[891]], -0x1);
        ec32z[b[54]]({
            'cpbill': ub92[b[891]],
            'productid': ub92[b[889]],
            'productname': fy1ode[b[892]],
            'productdesc': fy1ode[b[893]],
            'serverid': e1EF[b[668]][b[62]],
            'servername': e1EF[b[668]][b[840]],
            'roleid': fy1ode[b[894]],
            'rolename': fy1ode[b[895]],
            'rolelevel': fy1ode[b[896]],
            'price': fy1ode[b[897]],
            'extension': JSON[b[744]]({ 'cp_order_id': ub92[b[891]] })
        }, function (n8ul9h, $m06) {
            fy1ode[b[890]] && n8ul9h == 0x0 && fy1ode[b[890]](ub92[b[889]], ub92[b[891]], n8ul9h);
            console[b[721]](JSON[b[744]]({
                'type': b[898],
                'status': n8ul9h,
                'data': ub92,
                'role_name': fy1ode[b[895]]
            }));
            if (n8ul9h === 0x0) {} else {
                if (n8ul9h === 0x1) {} else {
                    if (n8ul9h === 0x2) {}
                }
            }
        });
    } else {
        var wkz3 = ub92 ? b[899] + ub92[b[888]] + b[900] + ub92[b[720]] + b[901] + ub92[b[721]] : b[902];
        window[b[734]](0xd, b[903] + wkz3), alert(wkz3);
    }
}, window[b[904]] = function () {}, window[b[905]] = function (hlt48, japix, jmxipa, h8n4lg, $06_r) {
    ec32z[b[86]](e1EF[b[668]][b[62]], e1EF[b[668]][b[840]] || e1EF[b[668]][b[62]], hlt48, japix, jmxipa), sendApi(e1EF[b[654]], 'User.create_role', {
        'game_pkg': e1EF[b[663]],
        'server_id': e1EF[b[668]][b[62]],
        'role_id': hlt48,
        'uid': e1EF[b[740]],
        'role_name': japix,
        'role_type': h8n4lg,
        'level': jmxipa
    });
}, window[b[906]] = function (kyo1w, l8tg, nv9uh, wo1yd, uvn2c, uv9cn2, cv2u7b, hl894, xm$, qok1yw) {
    e1EF[b[737]] = kyo1w, e1EF[b[738]] = l8tg, e1EF[b[739]] = nv9uh, ec32z[b[87]](e1EF[b[668]][b[62]], e1EF[b[668]][b[840]] || e1EF[b[668]][b[62]], kyo1w, l8tg, nv9uh), sendApi(e1EF[b[654]], 'User.update_role', {
        'game_pkg': e1EF[b[663]],
        'server_id': e1EF[b[668]][b[62]],
        'role_id': kyo1w,
        'uid': e1EF[b[740]],
        'role_name': l8tg,
        'role_type': wo1yd,
        'level': nv9uh,
        'evolution': uvn2c
    });
}, window[b[907]] = function (fdwyo, h9uv, t58gp4, ma$xji, wz3qk, ub27cv, atxp5i, x$j0m, w1fdy, l48hgt) {
    e1EF[b[737]] = fdwyo, e1EF[b[738]] = h9uv, e1EF[b[739]] = t58gp4, ec32z[b[88]](e1EF[b[668]][b[62]], e1EF[b[668]][b[840]] || e1EF[b[668]][b[62]], fdwyo, h9uv, t58gp4), sendApi(e1EF[b[654]], 'User.update_role', {
        'game_pkg': e1EF[b[663]],
        'server_id': e1EF[b[668]][b[62]],
        'role_id': fdwyo,
        'uid': e1EF[b[740]],
        'role_name': h9uv,
        'role_type': ma$xji,
        'level': t58gp4,
        'evolution': wz3qk
    });
}, window[b[908]] = function (xm0j$_) {}, window[b[909]] = function (qbzc, pia5t) {
    ec32z[b[37]](b[37], { 'activity_id': pia5t }, function (iamjx) {
        qbzc && qbzc(iamjx);
    });
}, window[b[85]] = function () {
    ec32z[b[85]]();
}, window[b[910]] = function () {
    ec32z[b[96]]();
}, window[b[911]] = function (qo1kwy, mj$r_0, m0xj, a5tp, vu2, qb3c7, qkzw, k7qzb) {
    k7qzb = k7qzb || e1EF[b[668]][b[62]], sendApi(e1EF[b[654]], b[912], {
        'phone': qo1kwy,
        'role_id': mj$r_0,
        'uid': e1EF[b[740]],
        'game_pkg': e1EF[b[663]],
        'partner_id': e1EF[b[662]],
        'server_id': k7qzb
    }, qkzw, 0x2, null, function () {
        return !![];
    });
}, window[b[913]] = function (vu9b2) {
    window[b[914]] = vu9b2, window[b[914]] && window[b[915]] && (console[b[721]](b[916] + window[b[915]][b[917]]), window[b[914]](window[b[915]]), window[b[915]] = null);
}, window[b[918]] = function (zqbc, v72cu, odf1yw, doe1y) {
    window[b[919]](b[920], {
        'game_pkg': window[b[646]][b[663]],
        'role_id': v72cu,
        'server_id': odf1yw
    }, doe1y);
}, window[b[921]] = function (lhg8, hlu9, t5gl84) {
    function ed1fyo(wf1doy) {
        var g5tip4 = [],
            fdo1wy = [],
            l8ht = t5gl84 || window[b[638]][b[922]];
        for (var tp45gi in l8ht) {
            var x_m0$ = Number(tp45gi);
            (!lhg8 || !lhg8[b[419]] || lhg8[b[499]](x_m0$) != -0x1) && (fdo1wy[b[441]](l8ht[tp45gi]), g5tip4[b[441]]([x_m0$, 0x3]));
        }
        window[b[774]](window[b[923]], b[924]) >= 0x0 ? (console[b[550]](b[925]), ec32z[b[81]] && ec32z[b[81]](fdo1wy, function (bkq3z7) {
            console[b[550]](b[926]), console[b[550]](bkq3z7);
            if (bkq3z7 && bkq3z7[b[796]] == b[927]) for (var w3zqk in l8ht) {
                if (bkq3z7[l8ht[w3zqk]] == b[928]) {
                    var pat5g = Number(w3zqk);
                    for (var z3wqk1 = 0x0; z3wqk1 < g5tip4[b[419]]; z3wqk1++) {
                        if (g5tip4[z3wqk1][0x0] == pat5g) {
                            g5tip4[z3wqk1][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[b[774]](window[b[923]], b[929]) >= 0x0 ? wx[b[930]]({
                'withSubscriptions': !![],
                'success': function (ok1wd) {
                    var ul9 = ok1wd[b[931]][b[932]];
                    if (ul9) {
                        console[b[550]](b[933]), console[b[550]](ul9);
                        for (var yod1e in l8ht) {
                            if (ul9[l8ht[yod1e]] == b[928]) {
                                var thl4g = Number(yod1e);
                                for (var $mr_60 = 0x0; $mr_60 < g5tip4[b[419]]; $mr_60++) {
                                    if (g5tip4[$mr_60][0x0] == thl4g) {
                                        g5tip4[$mr_60][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[b[550]](g5tip4), hlu9 && hlu9(g5tip4);
                    } else console[b[550]](b[934]), console[b[550]](ok1wd), console[b[550]](g5tip4), hlu9 && hlu9(g5tip4);
                },
                'fail': function () {
                    console[b[550]](b[935]), console[b[550]](g5tip4), hlu9 && hlu9(g5tip4);
                }
            }) : (console[b[550]](b[936] + window[b[923]]), console[b[550]](g5tip4), hlu9 && hlu9(g5tip4));
        })) : (console[b[550]](b[937] + window[b[923]]), console[b[550]](g5tip4), hlu9 && hlu9(g5tip4)), wx[b[938]](ed1fyo);
    }
    wx[b[939]](ed1fyo);
}, window[b[940]] = {
    'isSuccess': ![],
    'level': b[941],
    'isCharging': ![]
}, window[b[942]] = function (ma_j$) {
    wx[b[943]]({
        'success': function (bcvz72) {
            var japmxi = window[b[940]];
            japmxi[b[944]] = !![], japmxi[b[945]] = Number(bcvz72[b[945]])[b[946]](0x0), japmxi[b[947]] = bcvz72[b[947]], ma_j$ && ma_j$(japmxi[b[944]], japmxi[b[945]], japmxi[b[947]]);
        },
        'fail': function (z3kb7q) {
            console[b[550]](b[948], z3kb7q[b[796]]);
            var zq37b = window[b[940]];
            ma_j$ && ma_j$(zq37b[b[944]], zq37b[b[945]], zq37b[b[947]]);
        }
    });
}, window[b[949]] = function (qbk) {
    wx[b[949]]({
        'success': function (hnuv) {
            qbk && qbk(!![], hnuv);
        },
        'fail': function (of1yw) {
            qbk && qbk(![], of1yw);
        }
    });
}, window[b[950]] = function (miajx) {
    if (miajx) wx[b[950]](miajx);
}, window[b[951]] = function (lhnv9) {
    wx[b[951]](lhnv9);
}, window[b[919]] = function (c27bz, lu, kzb7q, cu2, m$_jx0, bkq7z3, b37kqz, itg45) {
    if (cu2 == undefined) cu2 = 0x1;
    wx[b[756]]({
        'url': c27bz,
        'method': b37kqz || b[952],
        'responseType': b[953],
        'data': lu,
        'header': { 'content-type': itg45 || b[757] },
        'success': function (b32cz7) {
            DEBUG && console[b[550]](b[954], c27bz, info, b32cz7);
            if (b32cz7 && b32cz7[b[955]] == 0xc8) {
                var unl8h9 = b32cz7[b[595]];
                !bkq7z3 || bkq7z3(unl8h9) ? kzb7q && kzb7q(unl8h9) : window[b[956]](c27bz, lu, kzb7q, cu2, m$_jx0, bkq7z3, b32cz7);
            } else window[b[956]](c27bz, lu, kzb7q, cu2, m$_jx0, bkq7z3, b32cz7);
        },
        'fail': function ($j_mr) {
            DEBUG && console[b[550]](b[957], c27bz, info, $j_mr), window[b[956]](c27bz, lu, kzb7q, cu2, m$_jx0, bkq7z3, $j_mr);
        },
        'complete': function () {}
    });
}, window[b[956]] = function (kq7w3z, k1qywo, $mjr_, _0rs6, gp5ti, ht4g8, zk37w) {
    _0rs6 - 0x1 > 0x0 ? setTimeout(function () {
        window[b[919]](kq7w3z, k1qywo, $mjr_, _0rs6 - 0x1, gp5ti, ht4g8);
    }, 0x3e8) : gp5ti && gp5ti(JSON[b[744]]({
        'url': kq7w3z,
        'response': zk37w
    }));
}, window[b[958]] = function (wz3q7, vbu2c9, paimxj, u8hn9l, jxpi5, zb7c23, wkq37z) {
    !paimxj && (paimxj = {});
    var ami$x = Math[b[446]](Date[b[675]]() / 0x3e8);
    paimxj[b[820]] = ami$x, paimxj[b[959]] = vbu2c9;
    var $rm0j_ = Object[b[418]](paimxj)[b[605]](),
        qcb7z3 = '',
        ptagi = '';
    for (var tgai = 0x0; tgai < $rm0j_[b[419]]; tgai++) {
        qcb7z3 = qcb7z3 + (tgai == 0x0 ? '' : '&') + $rm0j_[tgai] + paimxj[$rm0j_[tgai]], ptagi = ptagi + (tgai == 0x0 ? '' : '&') + $rm0j_[tgai] + '=' + encodeURIComponent(paimxj[$rm0j_[tgai]]);
    }
    qcb7z3 = qcb7z3 + e1EF[b[660]];
    var buc29 = b[960] + md5(qcb7z3);
    send(wz3q7 + '?' + ptagi + (ptagi == '' ? '' : '&') + buc29, null, u8hn9l, jxpi5, zb7c23, wkq37z || function (kb) {
        return kb[b[720]] == b[811];
    }, null, b[26]);
}, window[b[961]] = function (p4it5g, j0xm$_) {
    var qz1 = 0x0;
    e1EF[b[668]] && (qz1 = e1EF[b[668]][b[62]]), sendApi(e1EF[b[656]], b[962], {
        'partnerId': e1EF[b[662]],
        'gamePkg': e1EF[b[663]],
        'logTime': Math[b[446]](Date[b[675]]() / 0x3e8),
        'platformUid': e1EF[b[816]],
        'type': p4it5g,
        'serverId': qz1
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[b[963]] = function (lun9) {
    sendApi(e1EF[b[654]], b[964], {
        'partner_id': e1EF[b[662]],
        'uid': e1EF[b[740]],
        'version': e1EF[b[649]],
        'game_pkg': e1EF[b[663]],
        'device': e1EF['device_id']
    }, e1EF7H, e17FE, e1FH);
}, window[b[965]] = function (rs60) {
    if (rs60 && rs60[b[720]] === b[811] && rs60[b[595]]) {
        rs60[b[595]][b[522]]({
            'id': -0x2,
            'name': b[966]
        }), rs60[b[595]][b[522]]({
            'id': -0x1,
            'name': b[967]
        }), e1EF[b[968]] = rs60[b[595]];
        if (window[b[969]]) window[b[969]][b[970]]();
    } else {
        e1EF[b[971]] = ![];
        var r$60_m = rs60 ? rs60[b[720]] : '';
        window[b[734]](0x7, b[972] + r$60_m), window[b[704]](b[973] + r$60_m);
    }
}, window[b[974]] = function (ow1yqk) {
    sendApi(e1EF[b[654]], b[975], {
        'partner_id': e1EF[b[662]],
        'uid': e1EF[b[740]],
        'version': e1EF[b[649]],
        'game_pkg': e1EF[b[663]],
        'device': e1EF['device_id']
    }, e1HE7, e17FE, e1FH);
}, window[b[976]] = function (c92vu) {
    e1EF[b[977]] = ![];
    if (c92vu && c92vu[b[720]] === b[811] && c92vu[b[595]]) {
        for (var w3qkz7 = 0x0; w3qkz7 < c92vu[b[595]][b[419]]; w3qkz7++) {
            c92vu[b[595]][w3qkz7][b[852]] = e1E7H(c92vu[b[595]][w3qkz7]);
        }
        e1EF[b[665]][-0x1] = window[b[978]](c92vu[b[595]]), window[b[969]][b[979]](-0x1);
    } else {
        var uv92cn = c92vu ? c92vu[b[720]] : '';
        window[b[734]](0x8, b[980] + uv92cn), window[b[704]](b[981] + uv92cn);
    }
}, window[b[982]] = function (wfd1yo) {
    sendApi(e1EF[b[654]], b[975], {
        'partner_id': e1EF[b[662]],
        'uid': e1EF[b[740]],
        'version': e1EF[b[649]],
        'game_pkg': e1EF[b[663]],
        'device': e1EF['device_id']
    }, wfd1yo, e17FE, e1FH);
}, window[b[983]] = function (wk3zq, q3bz7c) {
    sendApi(e1EF[b[654]], b[984], {
        'partner_id': e1EF[b[662]],
        'uid': e1EF[b[740]],
        'version': e1EF[b[649]],
        'game_pkg': e1EF[b[663]],
        'device': e1EF['device_id'],
        'server_group_id': q3bz7c
    }, e17EH, e17FE, e1FH);
}, window[b[985]] = function (m_$xja) {
    e1EF[b[977]] = ![];
    if (m_$xja && m_$xja[b[720]] === b[811] && m_$xja[b[595]] && m_$xja[b[595]][b[595]]) {
        var _rs60 = m_$xja[b[595]][b[986]],
            cv7u2 = [];
        for (var vbc2z7 = 0x0; vbc2z7 < m_$xja[b[595]][b[595]][b[419]]; vbc2z7++) {
            m_$xja[b[595]][b[595]][vbc2z7][b[852]] = e1E7H(m_$xja[b[595]][b[595]][vbc2z7]), (cv7u2[b[419]] == 0x0 || m_$xja[b[595]][b[595]][vbc2z7][b[852]] != 0x0) && (cv7u2[cv7u2[b[419]]] = m_$xja[b[595]][b[595]][vbc2z7]);
        }
        e1EF[b[665]][_rs60] = window[b[978]](cv7u2), window[b[969]][b[979]](_rs60);
    } else {
        var v2u9nc = m_$xja ? m_$xja[b[720]] : '';
        window[b[734]](0x9, b[987] + v2u9nc), window[b[704]](b[988] + v2u9nc);
    }
}, window[b[989]] = function (yfe1o) {
    sendApi(e1EF[b[654]], b[990], {
        'partner_id': e1EF[b[662]],
        'uid': e1EF[b[740]],
        'version': e1EF[b[649]],
        'game_pkg': e1EF[b[663]],
        'device': e1EF['device_id']
    }, reqServerRecommendCallBack, e17FE, e1FH);
}, window[b[991]] = function (iap5jx) {
    e1EF[b[977]] = ![];
    if (iap5jx && iap5jx[b[720]] === b[811] && iap5jx[b[595]]) {
        for (var ij5ap = 0x0; ij5ap < iap5jx[b[595]][b[419]]; ij5ap++) {
            iap5jx[b[595]][ij5ap][b[852]] = e1E7H(iap5jx[b[595]][ij5ap]);
        }
        e1EF[b[665]][-0x2] = window[b[978]](iap5jx[b[595]]), window[b[969]][b[979]](-0x2);
    } else {
        var t5g = iap5jx ? iap5jx[b[720]] : '';
        window[b[734]](0xa, b[992] + t5g), alert(b[993] + t5g);
    }
}, window[b[978]] = function (kb7zq3) {
    return kb7zq3;
}, window[b[994]] = function (lvh9n, nu2hv) {
    lvh9n = lvh9n || e1EF[b[668]][b[62]], sendApi(e1EF[b[654]], b[995], {
        'type': '4',
        'game_pkg': e1EF[b[663]],
        'server_id': lvh9n
    }, nu2hv);
}, window[b[996]] = function (gip5at, gl4th, c27vbz, pji5x) {
    c27vbz = c27vbz || e1EF[b[668]][b[62]], sendApi(e1EF[b[654]], b[997], {
        'type': gip5at,
        'game_pkg': gl4th,
        'server_id': c27vbz
    }, pji5x);
}, window[b[998]] = function (xja_m, t4gl85) {
    sendApi(e1EF[b[654]], b[999], { 'game_pkg': xja_m }, t4gl85);
}, window[b[1000]] = function (cv2u9n) {
    if (cv2u9n) {
        if (cv2u9n[b[852]] == 0x1) {
            if (cv2u9n['online_status'] == 0x3) return 0x3;else return cv2u9n['online_status'] == 0x1 ? 0x2 : 0x1;
        } else return cv2u9n[b[852]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[b[1001]] = function (un9hv2, xpamji) {
    var gt458p = window[b[849]][b[851]] == 0x1;
    if (gt458p) {
        var _$06mr = window[b[849]][b[859]],
            gt458p = window[b[849]][b[851]] == 0x1;
        window[b[718]][b[719]][b[860]](b[861], _$06mr, b[35]);
        return;
    }
    e1EF[b[1002]] = {
        'step': un9hv2,
        'server_id': xpamji
    };
    var qw3z7 = this;
    e1HE7F({ 'title': b[1003] }), sendApi(e1EF[b[654]], b[1004], {
        'partner_id': e1EF[b[662]],
        'uid': e1EF[b[740]],
        'game_pkg': e1EF[b[663]],
        'server_id': xpamji,
        'platform': e1EF[b[815]],
        'platform_uid': e1EF[b[816]],
        'check_login_time': e1EF[b[819]],
        'check_login_sign': e1EF[b[817]],
        'version_name': e1EF[b[773]]
    }, e1FHE7, e17FE, e1FH, function (z3wq7) {
        return z3wq7[b[720]] == b[811] || z3wq7[b[721]] == 'time_err' || z3wq7[b[721]] == b[1005];
    });
}, window[b[1006]] = function (ip4) {
    var h2nuv9 = this;
    if (ip4 && ip4[b[720]] === b[811] && ip4[b[595]]) {
        var n9lhv = e1EF[b[668]];
        n9lhv[b[1007]] = e1EF[b[666]], n9lhv[b[818]] = String(ip4[b[595]][b[1008]]), n9lhv[b[674]] = parseInt(ip4[b[595]][b[820]]);
        if (ip4[b[595]][b[1009]]) n9lhv[b[1009]] = parseInt(ip4[b[595]][b[1009]]);else n9lhv[b[1009]] = parseInt(ip4[b[595]][b[62]]);
        n9lhv[b[1010]] = 0x0, n9lhv[b[741]] = e1EF['base_cdn'], n9lhv[b[1011]] = ip4[b[595]][b[1012]], n9lhv[b[1013]] = ip4[b[595]][b[1013]];
        if (ip4[b[595]][b[1014]]) n9lhv[b[1014]] = parseInt(ip4[b[595]][b[1014]]);
        console[b[550]](b[1015] + JSON[b[744]](n9lhv[b[1013]])), e1EF[b[838]] == 0x1 && n9lhv[b[1013]] && n9lhv[b[1013]][b[1016]] == 0x1 && (e1EF[b[1017]] = 0x1, window[b[718]][b[719]][b[1018]]()), e1F7HE();
    } else {
        if (e1EF[b[1002]][b[1019]] >= 0x3) {
            var k7qbz = ip4 ? ip4[b[720]] : '';
            window[b[734]](0xc, b[1020] + k7qbz), e1FH(JSON[b[744]](ip4)), window[b[704]](b[1021] + k7qbz);
        } else sendApi(e1EF[b[654]], b[793], {
            'platform': e1EF[b[652]],
            'partner_id': e1EF[b[662]],
            'token': e1EF[b[791]],
            'game_pkg': e1EF[b[663]],
            'deviceId': e1EF['device_id'],
            'scene': b[794] + e1EF[b[664]]
        }, function (ipa5x) {
            if (!ipa5x || ipa5x[b[720]] != b[811]) {
                window[b[704]](b[813] + ipa5x && ipa5x[b[720]]);
                return;
            }
            e1EF[b[817]] = String(ipa5x[b[818]]), e1EF[b[819]] = String(ipa5x[b[820]]), setTimeout(function () {
                e1FH7E(e1EF[b[1002]][b[1019]] + 0x1, e1EF[b[1002]][b[62]]);
            }, 0x5dc);
        }, e17FE, e1FH, function (lg4th8) {
            return lg4th8[b[720]] == b[811] || lg4th8[b[720]] == b[1022];
        });
    }
}, window[b[1023]] = function () {
    ServerLoading[b[719]][b[857]](e1EF[b[838]]), window[b[686]] = !![], window[b[863]]();
}, window[b[862]] = function () {
    if (window[b[687]] && window[b[688]] && window[b[689]] && window[b[690]] && window[b[691]] && window[b[693]]) {
        if (!window[b[1024]][b[719]]) {
            console[b[550]](b[1025] + window[b[1024]][b[719]]);
            var vc9ub = wx[b[90]](),
                pg5i = vc9ub[b[917]] ? vc9ub[b[917]] : 0x0,
                lvhu = {
                'cdn': window[b[646]][b[741]],
                'spareCdn': window[b[646]][b[780]],
                'newRegister': window[b[646]][b[838]],
                'wxPC': window[b[646]][b[684]],
                'wxIOS': window[b[646]][b[682]],
                'wxAndroid': window[b[646]][b[683]],
                'wxParam': {
                    'limitLoad': window[b[646]][b[1026]],
                    'benchmarkLevel': window[b[646]][b[1027]],
                    'wxFrom': window[b[638]][b[433]] == b[1028] ? 0x1 : 0x0,
                    'wxSDKVersion': window[b[923]]
                },
                'configType': window[b[646]][b[676]],
                'exposeType': window[b[646]][b[678]],
                'scene': pg5i
            };
            new window[b[1024]](lvhu, window[b[646]][b[680]], window[b[644]]);
        }
    }
}, window[b[863]] = function () {
    if (window[b[687]] && window[b[688]] && window[b[689]] && window[b[690]] && window[b[691]] && window[b[693]] && window[b[686]] && window[b[692]]) {
        e1HEF7();
        if (!e1F7E) {
            e1F7E = !![];
            if (!window[b[1024]][b[719]]) window[b[862]]();
            var kwz7q = 0x0,
                l8g4t = wx[b[1029]]();
            l8g4t && (window[b[646]][b[1030]] && (kwz7q = l8g4t[b[1031]]), console[b[721]](b[1032] + l8g4t[b[1031]] + b[1033] + l8g4t[b[1034]] + b[1035] + l8g4t[b[1036]] + b[1037] + l8g4t[b[1038]] + b[1039] + l8g4t[b[1040]] + b[1041] + l8g4t[b[1042]]));
            var n4h89l = {};
            for (const ltg845 in e1EF[b[668]]) {
                n4h89l[ltg845] = e1EF[b[668]][ltg845];
            }
            var c2v7u = {
                'channel': window[b[646]][b[667]],
                'account': window[b[646]][b[740]],
                'userId': window[b[646]][b[814]],
                'cdn': window[b[646]][b[741]],
                'data': window[b[646]][b[595]],
                'package': window[b[646]][b[586]],
                'newRegister': window[b[646]][b[838]],
                'pkgName': window[b[646]][b[663]],
                'partnerId': window[b[646]][b[662]],
                'platform_uid': window[b[646]][b[816]],
                'deviceId': window[b[646]]['device_id'],
                'selectedServer': n4h89l,
                'configType': window[b[646]][b[676]],
                'exposeType': window[b[646]][b[678]],
                'debugUsers': window[b[646]][b[672]],
                'wxMenuTop': kwz7q,
                'wxShield': window[b[646]][b[681]]
            };
            if (window[b[874]]) for (var b72cvu in window[b[874]]) {
                c2v7u[b72cvu] = window[b[874]][b72cvu];
            }
            window[b[1024]][b[719]][b[1043]](c2v7u);
            if (e1EF[b[668]] && e1EF[b[668]][b[62]]) localStorage[b[1044]](b[823] + e1EF[b[663]] + e1EF[b[740]], e1EF[b[668]][b[62]]);
        }
    } else console[b[721]](b[1045] + window[b[687]] + b[1046] + window[b[688]] + b[1047] + window[b[689]] + b[1048] + window[b[690]] + b[1049] + window[b[691]] + b[1050] + window[b[693]] + b[1051] + window[b[686]] + b[1052] + window[b[692]]);
};