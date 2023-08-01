var f = wx.$B;
import Sepnqy from '../a9r/a3q5y.js';
window[f[647]] = { 'wxVersion': window[f[648]][f[649]] }, window[f[650]] = ![], window[f[651]] = 0x1, window[f[652]] = 0x1, window[f[653]] = !![], window[f[654]] = !![], window[f[655]] = '', window[f[656]] = !![], window[f[657]] = {
    'base_cdn': f[658],
    'cdn': f[658]
}, t11Q[f[659]] = {}, t11Q[f[195]] = '0', t11Q[f[660]] = window[f[647]][f[661]], t11Q[f[662]] = '', t11Q['os'] = '1', t11Q[f[663]] = f[664], t11Q[f[665]] = f[666], t11Q[f[667]] = f[668], t11Q[f[669]] = f[670], t11Q[f[671]] = f[672], t11Q[f[673]] = '1', t11Q[f[674]] = '', t11Q[f[675]] = '', t11Q[f[676]] = 0x0, t11Q[f[677]] = {}, t11Q[f[678]] = parseInt(t11Q[f[673]]), t11Q[f[679]] = t11Q[f[673]], t11Q[f[680]] = {}, t11Q[f[681]] = f[682], t11Q[f[683]] = ![], t11Q[f[684]] = f[685], t11Q[f[686]] = Date[f[687]](), t11Q[f[688]] = f[689], t11Q[f[690]] = '_a', t11Q[f[691]] = '', t11Q[f[692]] = 0x2, t11Q[f[693]] = 0x7c1, t11Q[f[661]] = window[f[647]][f[661]], t11Q[f[694]] = ![], t11Q[f[695]] = ![], t11Q[f[696]] = ![], t11Q[f[697]] = ![], window[f[698]] = 0x5, window[f[699]] = ![], window[f[700]] = ![], window[f[701]] = ![], window[f[702]] = ![], window[f[703]] = ![], window[f[704]] = ![], window[f[705]] = ![], window[f[706]] = ![], window[f[707]] = ![], window[f[708]] = null, window[f[709]] = function (lojm1) {
    console[f[159]](f[709], lojm1), wx[f[710]]({}), wx[f[711]]({
        'title': f[712],
        'content': lojm1,
        'success'(ub6fhd) {
            if (ub6fhd[f[713]]) console[f[159]](f[714]);else ub6fhd[f[715]] && console[f[159]](f[716]);
        }
    });
}, window[f[717]] = function ($pm1) {
    console[f[159]](f[718], $pm1), t191QE(), wx[f[711]]({
        'title': f[712],
        'content': $pm1,
        'confirmText': f[719],
        'cancelText': f[720],
        'success'(eu6fh) {
            if (eu6fh[f[713]]) window[f[721]]();else eu6fh[f[715]] && (console[f[159]](f[722]), wx[f[723]]({}));
        }
    });
}, window[f[724]] = function (t0x_k5) {
    console[f[159]](f[724], t0x_k5), wx[f[711]]({
        'title': f[712],
        'content': t0x_k5,
        'confirmText': f[725],
        'showCancel': ![],
        'complete'(daskb9) {
            console[f[159]](f[722]), wx[f[723]]({});
        }
    });
}, window[f[726]] = ![], window[f[727]] = function (l2ogv3) {
    window[f[726]] = !![], wx[f[728]](l2ogv3);
}, window[f[729]] = function () {
    window[f[726]] && (window[f[726]] = ![], wx[f[710]]({}));
}, window[f[730]] = function (qzuy) {
    window[f[731]][f[732]][f[730]](qzuy);
}, window[f[638]] = function (u6qyeh, _09x) {
    Sepnqy[f[638]](u6qyeh, function (t5kx_) {
        t5kx_ && t5kx_[f[204]] ? t5kx_[f[204]][f[733]] == 0x1 ? _09x(!![]) : (_09x(![]), console[f[734]](f[735] + t5kx_[f[204]][f[736]])) : console[f[159]](f[638], t5kx_);
    });
}, window[f[737]] = function (znpyjm) {
    console[f[159]](f[738], znpyjm);
}, window[f[739]] = function (wr05) {}, window[f[740]] = function (eyuzq, a90x, zyjnp) {}, window[f[741]] = function (r405xt) {
    console[f[159]](f[742], r405xt), window[f[731]][f[732]][f[743]](), window[f[731]][f[732]][f[744]](), window[f[731]][f[732]][f[745]](), window[f[746]]();
}, window[f[747]] = function (sfbad) {
    window[f[748]](0xe, f[749] + sfbad), window[f[717]](f[750]);
    var $123lo = {
        'id': window[f[657]][f[751]],
        'role': window[f[657]][f[752]],
        'level': window[f[657]][f[753]],
        'account': window[f[657]][f[754]],
        'version': window[f[657]][f[693]],
        'cdn': window[f[657]][f[755]],
        'pkgName': window[f[657]][f[674]],
        'gamever': window[f[648]][f[649]],
        'serverid': window[f[657]][f[680]] ? window[f[657]][f[680]][f[618]] : 0x0,
        'systemInfo': window[f[756]],
        'error': f[757],
        'stack': sfbad ? sfbad : f[750]
    },
        l$2o13 = JSON[f[758]]($123lo);
    console[f[202]](f[759] + l$2o13), window[f[681]](l$2o13);
}, window[f[748]] = function (ehqyu, m$1ljo) {
    sendApi(t11Q[f[667]], f[760], {
        'game_pkg': t11Q[f[674]],
        'partner_id': t11Q[f[673]],
        'server_id': t11Q[f[680]] && t11Q[f[680]][f[618]] > 0x0 ? t11Q[f[680]][f[618]] : 0x0,
        'uid': t11Q[f[754]] > 0x0 ? t11Q[f[754]] : 0x0,
        'type': ehqyu,
        'info': m$1ljo
    });
}, window[f[761]] = function (xt0r54) {
    var fdsa6 = JSON[f[158]](xt0r54);
    fdsa6[f[762]] = window[f[648]][f[649]], fdsa6[f[763]] = window[f[657]][f[680]] ? window[f[657]][f[680]][f[618]] : 0x0, fdsa6[f[756]] = window[f[756]];
    var pmyzqn = JSON[f[758]](fdsa6);
    console[f[202]](f[764] + pmyzqn), window[f[681]](pmyzqn);
}, window[f[765]] = function (kxt90_, qnzpmy) {
    var $231l = {
        'id': window[f[657]][f[751]],
        'role': window[f[657]][f[752]],
        'level': window[f[657]][f[753]],
        'account': window[f[657]][f[754]],
        'version': window[f[657]][f[693]],
        'cdn': window[f[657]][f[755]],
        'pkgName': window[f[657]][f[674]],
        'gamever': window[f[648]][f[649]],
        'serverid': window[f[657]][f[680]] ? window[f[657]][f[680]][f[618]] : 0x0,
        'systemInfo': window[f[756]],
        'error': kxt90_,
        'stack': qnzpmy
    },
        x09_k = JSON[f[758]]($231l);
    console[f[215]](f[766] + x09_k), window[f[681]](x09_k);
}, window[f[681]] = function (asx_9k) {
    if (window[f[657]][f[767]] == f[768]) return;
    var ds9fa = t11Q[f[681]] + f[769] + t11Q[f[754]];
    wx[f[770]]({
        'url': ds9fa,
        'method': f[573],
        'data': asx_9k,
        'header': {
            'content-type': f[771],
            'cache-control': f[772]
        },
        'success': function (x_9sak) {
            DEBUG && console[f[159]](f[773], ds9fa, asx_9k, x_9sak);
        },
        'fail': function (bksad) {
            DEBUG && console[f[159]](f[773], ds9fa, asx_9k, bksad);
        },
        'complete': function () {}
    });
}, window[f[774]] = function () {
    function l3g$2o() {
        return ((0x1 + Math[f[775]]()) * 0x10000 | 0x0)[f[43]](0x10)[f[165]](0x1);
    }
    return l3g$2o() + l3g$2o() + '-' + l3g$2o() + '-' + l3g$2o() + '-' + l3g$2o() + '+' + l3g$2o() + l3g$2o() + l3g$2o();
}, window[f[721]] = function () {
    console[f[159]](f[776]);
    var t0k_x9 = Sepnqy[f[777]]();
    t11Q[f[679]] = t0k_x9[f[778]], t11Q[f[678]] = t0k_x9[f[778]], t11Q[f[673]] = t0k_x9[f[778]], t11Q[f[674]] = t0k_x9[f[779]];
    var s9bd = { 'game_ver': t11Q[f[660]] };
    t11Q[f[675]] = this[f[774]](), t191EQ({ 'title': f[780] }), Sepnqy[f[633]](s9bd, this[f[781]][f[14]](this));
}, window[f[781]] = function ($1oj) {
    var t0wr45 = $1oj[f[782]];
    sdkInitRes = $1oj, console[f[159]](f[783] + t0wr45 + f[784] + (t0wr45 == 0x1) + f[785] + $1oj[f[649]] + f[786] + window[f[647]][f[661]] + f[787] + $1oj[f[788]]);
    if (!$1oj[f[649]] || window[f[789]](window[f[647]][f[661]], $1oj[f[649]]) < 0x0) console[f[159]](f[790]), t11Q[f[665]] = f[791], t11Q[f[667]] = f[792], t11Q[f[669]] = f[793], t11Q[f[755]] = f[794], t11Q[f[795]] = f[796], t11Q[f[788]] = $1oj[f[788]], t11Q[f[694]] = ![];else window[f[789]](window[f[647]][f[661]], $1oj[f[649]]) == 0x0 ? (console[f[159]](f[797]), t11Q[f[665]] = f[666], t11Q[f[667]] = f[668], t11Q[f[669]] = f[670], t11Q[f[755]] = f[658], t11Q[f[795]] = f[796], t11Q[f[788]] = f[798], t11Q[f[694]] = !![]) : (console[f[159]](f[799]), t11Q[f[665]] = f[666], t11Q[f[667]] = f[668], t11Q[f[669]] = f[670], t11Q[f[755]] = f[658], t11Q[f[795]] = f[796], t11Q[f[788]] = f[798], t11Q[f[694]] = ![]);
    t11Q[f[676]] = config[f[38]] ? config[f[38]] : 0x0, this[f[800]](), this[f[801]](), window[f[802]] = 0x5, t191EQ({ 'title': f[803] }), Sepnqy[f[565]](this[f[804]][f[14]](this));
}, window[f[802]] = 0x5, window[f[804]] = function (_0t5x, s9d_ka) {
    if (_0t5x == 0x0 && s9d_ka && s9d_ka[f[190]]) {
        t11Q[f[805]] = s9d_ka[f[190]], t11Q[f[806]] = s9d_ka[f[806]], t11Q[f[807]] = s9d_ka[f[807]], t11Q[f[808]] = s9d_ka[f[808]], t11Q[f[809]] = s9d_ka[f[809]];
        var pqyhz = this;
        t191EQ({ 'title': f[810] }), sendApi(t11Q[f[665]], f[811], {
            'platform': t11Q[f[663]],
            'partner_id': t11Q[f[673]],
            'token': s9d_ka[f[190]],
            'game_pkg': t11Q[f[674]],
            'deviceId': t11Q[f[675]],
            'scene': f[812] + t11Q[f[676]]
        }, this[f[813]][f[14]](this), t1EQ1, t1Q9);
    } else s9d_ka && s9d_ka[f[814]] && window[f[802]] > 0x0 && (s9d_ka[f[814]][f[106]](f[815]) != -0x1 || s9d_ka[f[814]][f[106]](f[816]) != -0x1 || s9d_ka[f[814]][f[106]](f[817]) != -0x1 || s9d_ka[f[814]][f[106]](f[818]) != -0x1 || s9d_ka[f[814]][f[106]](f[819]) != -0x1 || s9d_ka[f[814]][f[106]](f[820]) != -0x1) ? (window[f[802]]--, Sepnqy[f[565]](this[f[804]][f[14]](this))) : (window[f[748]](0x1, f[821] + _0t5x + f[822] + (s9d_ka ? s9d_ka[f[814]] : '')), window[f[765]](f[823], JSON[f[758]]({
        'status': _0t5x,
        'data': s9d_ka
    })), window[f[717]](f[824] + (s9d_ka && s9d_ka[f[814]] ? '，' + s9d_ka[f[814]] : '')));
}, window[f[813]] = function (lj1$o) {
    if (!lj1$o) {
        window[f[748]](0x2, f[825]), window[f[765]](f[826], f[827]), window[f[717]](f[828]);
        return;
    }
    if (lj1$o[f[733]] != f[829]) {
        window[f[748]](0x2, f[830] + lj1$o[f[733]]), window[f[765]](f[826], JSON[f[758]](lj1$o)), window[f[717]](f[831] + lj1$o[f[733]]);
        return;
    }
    if (lj1$o[f[832]] == 0x1) {
        window[f[717]](f[833]);
        return;
    }
    t11Q[f[568]] = String(lj1$o[f[754]]), t11Q[f[754]] = String(lj1$o[f[754]]), t11Q[f[834]] = String(lj1$o[f[834]]), t11Q[f[679]] = String(lj1$o[f[834]]), t11Q[f[835]] = String(lj1$o[f[835]]), t11Q[f[836]] = String(lj1$o[f[837]]), t11Q[f[838]] = String(lj1$o[f[839]]), t11Q[f[837]] = '';
    var mnyjz = this;
    t191EQ({ 'title': f[840] });
    var skd9_a = localStorage[f[841]](f[842] + t11Q[f[674]] + t11Q[f[754]]);
    if (skd9_a && skd9_a != '') {
        var h6febu = Number(skd9_a);
        mnyjz[f[843]](h6febu);
    } else mnyjz[f[844]]();
}, window[f[844]] = function () {
    var yhu6q = this;
    sendApi(t11Q[f[665]], f[845], {
        'partner_id': t11Q[f[673]],
        'uid': t11Q[f[754]],
        'version': t11Q[f[660]],
        'game_pkg': t11Q[f[674]],
        'device': t11Q[f[675]]
    }, yhu6q[f[846]][f[14]](yhu6q), t1EQ1, t1Q9);
}, window[f[846]] = function (a09x) {
    if (!a09x) {
        window[f[748]](0x3, f[847]), window[f[717]](f[847]);
        return;
    }
    if (a09x[f[733]] != f[829]) {
        window[f[748]](0x3, f[848] + a09x[f[733]]), window[f[717]](f[848] + a09x[f[733]]);
        return;
    }
    if (!a09x[f[204]] || a09x[f[204]][f[24]] == 0x0) {
        window[f[748]](0x3, f[849]), window[f[717]](f[850]);
        return;
    }
    this[f[851]](a09x);
}, window[f[843]] = function (ypqnez) {
    var nyzpq = this;
    sendApi(t11Q[f[665]], f[852], {
        'server_id': ypqnez,
        'time': Date[f[687]]() / 0x3e8
    }, nyzpq[f[853]][f[14]](nyzpq), t1EQ1, t1Q9);
}, window[f[853]] = function (bu6dhf) {
    if (!bu6dhf) {
        window[f[748]](0x4, f[854]), this[f[844]]();
        return;
    }
    if (bu6dhf[f[733]] != f[829]) {
        window[f[748]](0x4, f[855] + bu6dhf[f[733]]), this[f[844]]();
        return;
    }
    if (!bu6dhf[f[204]] || bu6dhf[f[204]][f[24]] == 0x0) {
        window[f[748]](0x4, f[856]), this[f[844]]();
        return;
    }
    this[f[851]](bu6dhf);
}, window[f[851]] = function (a9_kd) {
    t11Q[f[857]] = a9_kd[f[858]] != undefined ? a9_kd[f[858]] : 0x0, t11Q[f[680]] = {
        'server_id': String(a9_kd[f[204]][0x0][f[618]]),
        'server_name': String(a9_kd[f[204]][0x0][f[859]]),
        'entry_ip': a9_kd[f[204]][0x0][f[860]],
        'entry_port': parseInt(a9_kd[f[204]][0x0][f[861]]),
        'status': t11E9(a9_kd[f[204]][0x0]),
        'start_time': a9_kd[f[204]][0x0][f[862]],
        'maintain_time': a9_kd[f[204]][0x0][f[863]] ? a9_kd[f[204]][0x0][f[863]] : '',
        'cdn': t11Q[f[755]]
    }, this[f[864]](), window[f[731]] && window[f[731]][f[732]][f[865]] && window[f[731]][f[732]][f[865]](sdkInitRes[f[866]], sdkInitRes[f[867]], sdkInitRes[f[868]], sdkInitRes[f[869]], sdkInitRes[f[870]]);
}, window[f[864]] = function () {
    window[f[706]] = !![], window[f[871]]();
}, window[f[871]] = function () {
    if (window[f[706]] && window[f[705]]) {
        var xa_k0 = t11Q[f[872]] != undefined ? t11Q[f[872]] : 0x0,
            fh6qu = t11Q[f[809]] == undefined ? 0x0 : t11Q[f[809]],
            x_sak9 = xa_k0 == 0x1 && fh6qu == 0x1 || xa_k0 == 0x2 && fh6qu != 0x1 || xa_k0 == 0x3;
        console[f[734]](f[873] + t11Q[f[857]] + f[874] + x_sak9 + f[875] + t11Q[f[809]] + f[876] + t11Q[f[872]]);
        if (!x_sak9 && t11Q[f[857]] == 0x1) {
            var penqz = t11Q[f[680]][f[580]];
            if (penqz === -0x1 || penqz === 0x0) {
                window[f[748]](0xf, f[877] + t11Q[f[680]]['id'] + f[878] + t11Q[f[680]][f[580]]), window[f[717]](penqz === -0x1 ? f[879] : f[880]);
                return;
            }
            t1Q9E1(0x0, t11Q[f[680]][f[618]]), window[f[731]][f[732]][f[881]](t11Q[f[857]]);
        } else window[f[731]][f[732]][f[882]]({
            'show': sdkInitRes[f[866]],
            'skinUrl': sdkInitRes[f[867]],
            'content': sdkInitRes[f[868]],
            'x': sdkInitRes[f[869]],
            'y': sdkInitRes[f[870]]
        }), t191QE();
        window[f[883]](), window[f[884]](), window[f[885]]();
    }
}, window[f[800]] = function () {
    sendApi(t11Q[f[665]], f[886], {
        'game_pkg': t11Q[f[674]],
        'version_name': t11Q[f[788]]
    }, this[f[887]][f[14]](this), t1EQ1, t1Q9);
}, window[f[887]] = function (qpnezy) {
    if (!qpnezy) {
        window[f[748]](0x5, f[888]), window[f[717]](f[888]);
        return;
    }
    if (qpnezy[f[733]] != f[829]) {
        window[f[748]](0x5, f[889] + qpnezy[f[733]]), window[f[717]](f[889] + qpnezy[f[733]]);
        return;
    }
    if (!qpnezy[f[204]] || !qpnezy[f[204]][f[660]]) {
        window[f[748]](0x5, f[890] + (qpnezy[f[204]] && qpnezy[f[204]][f[660]])), window[f[717]](f[890] + (qpnezy[f[204]] && qpnezy[f[204]][f[660]]));
        return;
    }
    qpnezy[f[204]][f[891]] && qpnezy[f[204]][f[891]][f[24]] > 0xa && (t11Q[f[892]] = qpnezy[f[204]][f[891]], t11Q[f[755]] = qpnezy[f[204]][f[891]]), qpnezy[f[204]][f[660]] && (t11Q[f[693]] = qpnezy[f[204]][f[660]]), console[f[734]](f[893] + t11Q[f[693]] + f[894] + t11Q[f[788]]), window[f[704]] = !![], window[f[884]](), window[f[885]]();
}, window[f[895]], window[f[801]] = function () {
    sendApi(t11Q[f[665]], f[896], { 'game_pkg': t11Q[f[674]] }, this[f[897]][f[14]](this), t1EQ1, t1Q9);
}, window[f[897]] = function (tw04r) {
    if (tw04r && tw04r[f[733]] === f[829] && tw04r[f[204]]) {
        window[f[895]] = tw04r[f[204]];
        for (var ypzqmn in tw04r[f[204]]) {
            t11Q[ypzqmn] = tw04r[f[204]][ypzqmn];
        }
    } else window[f[748]](0xb, f[898]), console[f[734]](f[899] + tw04r[f[733]]);
    window[f[705]] = !![], window[f[871]]();
}, window[f[883]] = function () {
    if (!window[f[706]] || !window[f[705]]) return;
    var zpye = t11Q[f[857]] == 0x1,
        mnj$1o = t11Q[f[694]],
        _sxk9 = t11Q[f[900]] && t11Q[f[900]] > 0x0;
    if (mnj$1o || zpye && _sxk9) {
        var bd9fsa = t11Q[f[901]],
            xr504t = bd9fsa && bd9fsa[f[24]] == 0x9;
        xr504t && (window[f[902]] = bd9fsa);
        var fdb6hu = t11Q[f[903]],
            onmj = fdb6hu && fdb6hu[f[148]]('#')[f[24]] == 0x4;
        onmj && (window[f[904]] = fdb6hu);
    }
}, window[f[746]] = function () {
    window[f[902]] = null, window[f[904]] = null;
}, window[f[905]] = function (xkt5_0, m1pj, hbu6df, usdb, og2$l, ljo12, o$lj1m, gli32, _xt90k, euqhyz) {
    og2$l = String(og2$l);
    var safdb9 = o$lj1m,
        hbduf6 = gli32;
    t11Q[f[659]][og2$l] = {
        'productid': og2$l,
        'productname': safdb9,
        'productdesc': hbduf6,
        'roleid': xkt5_0,
        'rolename': m1pj,
        'rolelevel': hbu6df,
        'price': ljo12,
        'callback': _xt90k
    }, sendApi(t11Q[f[669]], f[906], {
        'game_pkg': t11Q[f[674]],
        'server_id': t11Q[f[680]][f[618]],
        'server_name': t11Q[f[680]][f[859]],
        'level': hbu6df,
        'uid': t11Q[f[754]],
        'role_id': xkt5_0,
        'role_name': m1pj,
        'product_id': og2$l,
        'product_name': safdb9,
        'product_desc': hbduf6,
        'money': ljo12,
        'partner_id': t11Q[f[673]]
    }, toPayCallBack, t1EQ1, t1Q9);
}, window[f[907]] = function (sk9ad) {
    if (sk9ad && (sk9ad[f[908]] === 0xc8 || sk9ad[f[733]] == f[829])) {
        var olm$ = t11Q[f[659]][String(sk9ad[f[909]])];
        if (olm$[f[910]]) olm$[f[910]](sk9ad[f[909]], sk9ad[f[911]], -0x1);
        Sepnqy[f[603]]({
            'cpbill': sk9ad[f[911]],
            'productid': sk9ad[f[909]],
            'productname': olm$[f[912]],
            'productdesc': olm$[f[913]],
            'serverid': t11Q[f[680]][f[618]],
            'servername': t11Q[f[680]][f[859]],
            'roleid': olm$[f[914]],
            'rolename': olm$[f[915]],
            'rolelevel': olm$[f[916]],
            'price': olm$[f[917]],
            'extension': JSON[f[758]]({ 'cp_order_id': sk9ad[f[911]] })
        }, function (xtr4, ubfh6e) {
            olm$[f[910]] && xtr4 == 0x0 && olm$[f[910]](sk9ad[f[909]], sk9ad[f[911]], xtr4);
            console[f[734]](JSON[f[758]]({
                'type': f[918],
                'status': xtr4,
                'data': sk9ad,
                'role_name': olm$[f[915]]
            }));
            if (xtr4 === 0x0) {} else {
                if (xtr4 === 0x1) {} else {
                    if (xtr4 === 0x2) {}
                }
            }
        });
    } else {
        var zjp1nm = sk9ad ? f[919] + sk9ad[f[908]] + f[920] + sk9ad[f[733]] + f[921] + sk9ad[f[734]] : f[922];
        window[f[748]](0xd, f[923] + zjp1nm), alert(zjp1nm);
    }
}, window[f[924]] = function () {}, window[f[925]] = function (u6hy, asfd9, l$j21o, d6asb, $l2o3) {
    Sepnqy[f[635]](t11Q[f[680]][f[618]], t11Q[f[680]][f[859]] || t11Q[f[680]][f[618]], u6hy, asfd9, l$j21o), sendApi(t11Q[f[665]], f[926], {
        'game_pkg': t11Q[f[674]],
        'server_id': t11Q[f[680]][f[618]],
        'role_id': u6hy,
        'uid': t11Q[f[754]],
        'role_name': asfd9,
        'role_type': d6asb,
        'level': l$j21o
    });
}, window[f[927]] = function (axk9s_, kx9_0, k9tx0, yh6qe, o23$g, uebf6h, jzpm1, ksa9_x, hezyqp, as9k_) {
    t11Q[f[751]] = axk9s_, t11Q[f[752]] = kx9_0, t11Q[f[753]] = k9tx0, Sepnqy[f[636]](t11Q[f[680]][f[618]], t11Q[f[680]][f[859]] || t11Q[f[680]][f[618]], axk9s_, kx9_0, k9tx0), sendApi(t11Q[f[665]], f[928], {
        'game_pkg': t11Q[f[674]],
        'server_id': t11Q[f[680]][f[618]],
        'role_id': axk9s_,
        'uid': t11Q[f[754]],
        'role_name': kx9_0,
        'role_type': yh6qe,
        'level': k9tx0,
        'evolution': o23$g
    });
}, window[f[929]] = function (wr0, qh6y, k0tx_, ub6df, _4xt05, l1jm$o, jomn, nypmjz, lg2vi, b6dhfu) {
    t11Q[f[751]] = wr0, t11Q[f[752]] = qh6y, t11Q[f[753]] = k0tx_, Sepnqy[f[637]](t11Q[f[680]][f[618]], t11Q[f[680]][f[859]] || t11Q[f[680]][f[618]], wr0, qh6y, k0tx_), sendApi(t11Q[f[665]], f[928], {
        'game_pkg': t11Q[f[674]],
        'server_id': t11Q[f[680]][f[618]],
        'role_id': wr0,
        'uid': t11Q[f[754]],
        'role_name': qh6y,
        'role_type': ub6df,
        'level': k0tx_,
        'evolution': _4xt05
    });
}, window[f[930]] = function (n$pmj) {}, window[f[931]] = function (om$jl1) {
    Sepnqy[f[584]](f[584], function (h6dfb) {
        om$jl1 && om$jl1(h6dfb);
    });
}, window[f[634]] = function () {
    Sepnqy[f[634]]();
}, window[f[932]] = function () {
    Sepnqy[f[641]] && Sepnqy[f[641]]();
}, window[f[933]] = function (omnj1, ehyqzp, x0ka_, fdus, qnzyep, as9bk, jl1$mo, k9d) {
    k9d = k9d || t11Q[f[680]][f[618]], sendApi(t11Q[f[665]], f[934], {
        'phone': omnj1,
        'role_id': ehyqzp,
        'uid': t11Q[f[754]],
        'game_pkg': t11Q[f[674]],
        'partner_id': t11Q[f[673]],
        'server_id': k9d
    }, jl1$mo, 0x2, null, function () {
        return !![];
    });
}, window[f[935]] = function (f9sdb) {
    window[f[936]] = f9sdb, window[f[936]] && window[f[937]] && (console[f[734]](f[938] + window[f[937]][f[939]]), window[f[936]](window[f[937]]), window[f[937]] = null);
}, window[f[940]] = function (yzeph, dbaf9, wr7854, asdb6) {
    window[f[941]](f[942], {
        'game_pkg': window[f[657]][f[674]],
        'role_id': dbaf9,
        'server_id': wr7854
    }, asdb6);
}, window[f[943]] = function (r4578w, zpqeh, l$13) {
    function huq6ye(w54t8) {
        var t90x_ = [],
            l2igv = [],
            bduf6 = l$13 || window[f[648]][f[944]];
        for (var a6bd in bduf6) {
            var n$moj = Number(a6bd);
            (!r4578w || !r4578w[f[24]] || r4578w[f[106]](n$moj) != -0x1) && (l2igv[f[46]](bduf6[a6bd]), t90x_[f[46]]([n$moj, 0x3]));
        }
        window[f[789]](window[f[945]], f[946]) >= 0x0 ? (console[f[159]](f[947]), Sepnqy[f[630]] && Sepnqy[f[630]](l2igv, function (nmjzy) {
            console[f[159]](f[948]), console[f[159]](nmjzy);
            if (nmjzy && nmjzy[f[814]] == f[949]) for (var yephzq in bduf6) {
                if (nmjzy[bduf6[yephzq]] == f[950]) {
                    var yzpeqh = Number(yephzq);
                    for (var g3vol2 = 0x0; g3vol2 < t90x_[f[24]]; g3vol2++) {
                        if (t90x_[g3vol2][0x0] == yzpeqh) {
                            t90x_[g3vol2][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[f[789]](window[f[945]], f[951]) >= 0x0 ? wx[f[952]]({
                'withSubscriptions': !![],
                'success': function (njpym) {
                    var hqy6u = njpym[f[953]][f[954]];
                    if (hqy6u) {
                        console[f[159]](f[955]), console[f[159]](hqy6u);
                        for (var j1znm in bduf6) {
                            if (hqy6u[bduf6[j1znm]] == f[950]) {
                                var tx05k_ = Number(j1znm);
                                for (var yehq = 0x0; yehq < t90x_[f[24]]; yehq++) {
                                    if (t90x_[yehq][0x0] == tx05k_) {
                                        t90x_[yehq][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[f[159]](t90x_), zpqeh && zpqeh(t90x_);
                    } else console[f[159]](f[956]), console[f[159]](njpym), console[f[159]](t90x_), zpqeh && zpqeh(t90x_);
                },
                'fail': function () {
                    console[f[159]](f[957]), console[f[159]](t90x_), zpqeh && zpqeh(t90x_);
                }
            }) : (console[f[159]](f[958] + window[f[945]]), console[f[159]](t90x_), zpqeh && zpqeh(t90x_));
        })) : (console[f[159]](f[959] + window[f[945]]), console[f[159]](t90x_), zpqeh && zpqeh(t90x_)), wx[f[960]](huq6ye);
    }
    wx[f[961]](huq6ye);
}, window[f[962]] = {
    'isSuccess': ![],
    'level': f[963],
    'isCharging': ![]
}, window[f[964]] = function (t05xr4) {
    wx[f[965]]({
        'success': function (ezpyhq) {
            var h6fdb = window[f[962]];
            h6fdb[f[966]] = !![], h6fdb[f[967]] = Number(ezpyhq[f[967]])[f[968]](0x0), h6fdb[f[969]] = ezpyhq[f[969]], t05xr4 && t05xr4(h6fdb[f[966]], h6fdb[f[967]], h6fdb[f[969]]);
        },
        'fail': function (x45rt) {
            console[f[159]](f[970], x45rt[f[814]]);
            var dbs6a = window[f[962]];
            t05xr4 && t05xr4(dbs6a[f[966]], dbs6a[f[967]], dbs6a[f[969]]);
        }
    });
}, window[f[971]] = function (og2l3) {
    wx[f[971]]({
        'success': function (r540t) {
            og2l3 && og2l3(!![], r540t);
        },
        'fail': function (zypneq) {
            og2l3 && og2l3(![], zypneq);
        }
    });
}, window[f[972]] = function (bfsdu) {
    if (bfsdu) wx[f[972]](bfsdu);
}, window[f[973]] = function (vlg32i) {
    wx[f[973]](vlg32i);
}, window[f[941]] = function (lvgo23, g2il3, tw84, t_x9, lo231, trw5, qeyhz, _x54t0) {
    if (t_x9 == undefined) t_x9 = 0x1;
    wx[f[770]]({
        'url': lvgo23,
        'method': qeyhz || f[974],
        'responseType': f[975],
        'data': g2il3,
        'header': { 'content-type': _x54t0 || f[771] },
        'success': function (vl2go3) {
            DEBUG && console[f[159]](f[976], lvgo23, info, vl2go3);
            if (vl2go3 && vl2go3[f[977]] == 0xc8) {
                var o$nmj = vl2go3[f[204]];
                !trw5 || trw5(o$nmj) ? tw84 && tw84(o$nmj) : window[f[978]](lvgo23, g2il3, tw84, t_x9, lo231, trw5, vl2go3);
            } else window[f[978]](lvgo23, g2il3, tw84, t_x9, lo231, trw5, vl2go3);
        },
        'fail': function (mjon$1) {
            DEBUG && console[f[159]](f[979], lvgo23, info, mjon$1), window[f[978]](lvgo23, g2il3, tw84, t_x9, lo231, trw5, mjon$1);
        },
        'complete': function () {}
    });
}, window[f[978]] = function (qneypz, lmo, basf, j$21lo, quy6, $o13, _sad) {
    j$21lo - 0x1 > 0x0 ? setTimeout(function () {
        window[f[941]](qneypz, lmo, basf, j$21lo - 0x1, quy6, $o13);
    }, 0x3e8) : quy6 && quy6(JSON[f[758]]({
        'url': qneypz,
        'response': _sad
    }));
}, window[f[980]] = function (ax0_, zmnyq, iv32gl, yq6hue, gi3lv, ak9db, mqnzp) {
    !iv32gl && (iv32gl = {});
    var $132lo = Math[f[51]](Date[f[687]]() / 0x3e8);
    iv32gl[f[839]] = $132lo, iv32gl[f[981]] = zmnyq;
    var $nj1p = Object[f[23]](iv32gl)[f[214]](),
        xrt45 = '',
        l2vg3o = '';
    for (var np$ = 0x0; np$ < $nj1p[f[24]]; np$++) {
        xrt45 = xrt45 + (np$ == 0x0 ? '' : '&') + $nj1p[np$] + iv32gl[$nj1p[np$]], l2vg3o = l2vg3o + (np$ == 0x0 ? '' : '&') + $nj1p[np$] + '=' + encodeURIComponent(iv32gl[$nj1p[np$]]);
    }
    xrt45 = xrt45 + t11Q[f[671]];
    var dsfu6 = f[982] + md5(xrt45);
    send(ax0_ + '?' + l2vg3o + (l2vg3o == '' ? '' : '&') + dsfu6, null, yq6hue, gi3lv, ak9db, mqnzp || function (jlom1) {
        return jlom1[f[733]] == f[829];
    }, null, f[574]);
}, window[f[983]] = function (eyqzh, fhbd6u) {
    var ynqe = 0x0;
    t11Q[f[680]] && (ynqe = t11Q[f[680]][f[618]]), sendApi(t11Q[f[667]], f[984], {
        'partnerId': t11Q[f[673]],
        'gamePkg': t11Q[f[674]],
        'logTime': Math[f[51]](Date[f[687]]() / 0x3e8),
        'platformUid': t11Q[f[835]],
        'type': eyqzh,
        'serverId': ynqe
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[f[985]] = function (eufb6h) {
    sendApi(t11Q[f[665]], f[986], {
        'partner_id': t11Q[f[673]],
        'uid': t11Q[f[754]],
        'version': t11Q[f[660]],
        'game_pkg': t11Q[f[674]],
        'device': t11Q[f[675]]
    }, t11QE9, t1EQ1, t1Q9);
}, window[f[987]] = function (eyzqn) {
    if (eyzqn && eyzqn[f[733]] === f[829] && eyzqn[f[204]]) {
        eyzqn[f[204]][f[129]]({
            'id': -0x2,
            'name': f[988]
        }), eyzqn[f[204]][f[129]]({
            'id': -0x1,
            'name': f[989]
        }), t11Q[f[990]] = eyzqn[f[204]];
        if (window[f[991]]) window[f[991]][f[992]]();
    } else {
        t11Q[f[993]] = ![];
        var yehqu = eyzqn ? eyzqn[f[733]] : '';
        window[f[748]](0x7, f[994] + yehqu), window[f[717]](f[995] + yehqu);
    }
}, window[f[996]] = function (eq6huy) {
    sendApi(t11Q[f[665]], f[997], {
        'partner_id': t11Q[f[673]],
        'uid': t11Q[f[754]],
        'version': t11Q[f[660]],
        'game_pkg': t11Q[f[674]],
        'device': t11Q[f[675]]
    }, t191E, t1EQ1, t1Q9);
}, window[f[998]] = function (zjymn) {
    t11Q[f[999]] = ![];
    if (zjymn && zjymn[f[733]] === f[829] && zjymn[f[204]]) {
        for (var abfds6 = 0x0; abfds6 < zjymn[f[204]][f[24]]; abfds6++) {
            zjymn[f[204]][abfds6][f[580]] = t11E9(zjymn[f[204]][abfds6]);
        }
        t11Q[f[677]][-0x1] = window[f[1000]](zjymn[f[204]]), window[f[991]][f[1001]](-0x1);
    } else {
        var r85tw = zjymn ? zjymn[f[733]] : '';
        window[f[748]](0x8, f[1002] + r85tw), window[f[717]](f[1003] + r85tw);
    }
}, window[f[1004]] = function (jnymp) {
    sendApi(t11Q[f[665]], f[997], {
        'partner_id': t11Q[f[673]],
        'uid': t11Q[f[754]],
        'version': t11Q[f[660]],
        'game_pkg': t11Q[f[674]],
        'device': t11Q[f[675]]
    }, jnymp, t1EQ1, t1Q9);
}, window[f[1005]] = function (r8wt, sa6d) {
    sendApi(t11Q[f[665]], f[1006], {
        'partner_id': t11Q[f[673]],
        'uid': t11Q[f[754]],
        'version': t11Q[f[660]],
        'game_pkg': t11Q[f[674]],
        'device': t11Q[f[675]],
        'server_group_id': sa6d
    }, t1E19, t1EQ1, t1Q9);
}, window[f[1007]] = function (hqyez) {
    t11Q[f[999]] = ![];
    if (hqyez && hqyez[f[733]] === f[829] && hqyez[f[204]] && hqyez[f[204]][f[204]]) {
        var tr0x54 = hqyez[f[204]][f[1008]],
            ds9af = [];
        for (var ebu6f = 0x0; ebu6f < hqyez[f[204]][f[204]][f[24]]; ebu6f++) {
            hqyez[f[204]][f[204]][ebu6f][f[580]] = t11E9(hqyez[f[204]][f[204]][ebu6f]), (ds9af[f[24]] == 0x0 || hqyez[f[204]][f[204]][ebu6f][f[580]] != 0x0) && (ds9af[ds9af[f[24]]] = hqyez[f[204]][f[204]][ebu6f]);
        }
        t11Q[f[677]][tr0x54] = window[f[1000]](ds9af), window[f[991]][f[1001]](tr0x54);
    } else {
        var qheyzu = hqyez ? hqyez[f[733]] : '';
        window[f[748]](0x9, f[1009] + qheyzu), window[f[717]](f[1010] + qheyzu);
    }
}, window[f[1011]] = function (o21l3) {
    sendApi(t11Q[f[665]], f[1012], {
        'partner_id': t11Q[f[673]],
        'uid': t11Q[f[754]],
        'version': t11Q[f[660]],
        'game_pkg': t11Q[f[674]],
        'device': t11Q[f[675]]
    }, reqServerRecommendCallBack, t1EQ1, t1Q9);
}, window[f[1013]] = function (k_9tx0) {
    t11Q[f[999]] = ![];
    if (k_9tx0 && k_9tx0[f[733]] === f[829] && k_9tx0[f[204]]) {
        for (var r5w0t4 = 0x0; r5w0t4 < k_9tx0[f[204]][f[24]]; r5w0t4++) {
            k_9tx0[f[204]][r5w0t4][f[580]] = t11E9(k_9tx0[f[204]][r5w0t4]);
        }
        t11Q[f[677]][-0x2] = window[f[1000]](k_9tx0[f[204]]), window[f[991]][f[1001]](-0x2);
    } else {
        var npmj$ = k_9tx0 ? k_9tx0[f[733]] : '';
        window[f[748]](0xa, f[1014] + npmj$), alert(f[1015] + npmj$);
    }
}, window[f[1000]] = function (n$1jm) {
    return n$1jm;
}, window[f[1016]] = function ($1o3l, jl$2o1) {
    $1o3l = $1o3l || t11Q[f[680]][f[618]], sendApi(t11Q[f[665]], f[1017], {
        'type': '4',
        'game_pkg': t11Q[f[674]],
        'server_id': $1o3l
    }, jl$2o1);
}, window[f[1018]] = function (pnjymz, fbad6, t845rw, bs6fd) {
    t845rw = t845rw || t11Q[f[680]][f[618]], sendApi(t11Q[f[665]], f[1019], {
        'type': pnjymz,
        'game_pkg': fbad6,
        'server_id': t845rw
    }, bs6fd);
}, window[f[1020]] = function (wr4t50, zqpye) {
    sendApi(t11Q[f[665]], f[1021], { 'game_pkg': wr4t50 }, zqpye);
}, window[f[1022]] = function (zuyqeh) {
    if (zuyqeh) {
        if (zuyqeh[f[580]] == 0x1) {
            if (zuyqeh[f[1023]] == 0x1) return 0x2;else return 0x1;
        } else return zuyqeh[f[580]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[f[1024]] = function (pj1$mn, kds9a_) {
    t11Q[f[1025]] = {
        'step': pj1$mn,
        'server_id': kds9a_
    };
    var rt504w = this;
    t191EQ({ 'title': f[1026] }), sendApi(t11Q[f[665]], f[1027], {
        'partner_id': t11Q[f[673]],
        'uid': t11Q[f[754]],
        'game_pkg': t11Q[f[674]],
        'server_id': kds9a_,
        'platform': t11Q[f[834]],
        'platform_uid': t11Q[f[835]],
        'check_login_time': t11Q[f[838]],
        'check_login_sign': t11Q[f[836]],
        'version_name': t11Q[f[788]]
    }, t1Q91E, t1EQ1, t1Q9, function (adks_) {
        return adks_[f[733]] == f[829] || adks_[f[734]] == f[1028] || adks_[f[734]] == f[1029];
    });
}, window[f[1030]] = function (vgl23) {
    var phzye = this;
    if (vgl23 && vgl23[f[733]] === f[829] && vgl23[f[204]]) {
        var n1om$ = t11Q[f[680]];
        n1om$[f[1031]] = t11Q[f[678]], n1om$[f[837]] = String(vgl23[f[204]][f[1032]]), n1om$[f[686]] = parseInt(vgl23[f[204]][f[839]]);
        if (vgl23[f[204]][f[1033]]) n1om$[f[1033]] = parseInt(vgl23[f[204]][f[1033]]);else n1om$[f[1033]] = parseInt(vgl23[f[204]][f[618]]);
        n1om$[f[1034]] = 0x0, n1om$[f[755]] = t11Q[f[892]], n1om$[f[1035]] = vgl23[f[204]][f[1036]], n1om$[f[1037]] = vgl23[f[204]][f[1037]];
        if (vgl23[f[204]][f[1038]]) n1om$[f[1038]] = parseInt(vgl23[f[204]][f[1038]]);
        console[f[159]](f[1039] + JSON[f[758]](n1om$[f[1037]])), t11Q[f[857]] == 0x1 && n1om$[f[1037]] && n1om$[f[1037]][f[1040]] == 0x1 && (t11Q[f[1041]] = 0x1, window[f[731]][f[732]][f[1042]]()), t1QE91();
    } else {
        if (t11Q[f[1025]][f[1043]] >= 0x3) {
            var t0r = vgl23 ? vgl23[f[733]] : '';
            window[f[748]](0xc, f[1044] + t0r), t1Q9(JSON[f[758]](vgl23)), window[f[717]](f[1045] + t0r);
        } else sendApi(t11Q[f[665]], f[811], {
            'platform': t11Q[f[663]],
            'partner_id': t11Q[f[673]],
            'token': t11Q[f[805]],
            'game_pkg': t11Q[f[674]],
            'deviceId': t11Q[f[675]],
            'scene': f[812] + t11Q[f[676]]
        }, function (fdas9) {
            if (!fdas9 || fdas9[f[733]] != f[829]) {
                window[f[717]](f[831] + fdas9 && fdas9[f[733]]);
                return;
            }
            t11Q[f[836]] = String(fdas9[f[837]]), t11Q[f[838]] = String(fdas9[f[839]]), setTimeout(function () {
                t1Q9E1(t11Q[f[1025]][f[1043]] + 0x1, t11Q[f[1025]][f[618]]);
            }, 0x5dc);
        }, t1EQ1, t1Q9, function (kax_09) {
            return kax_09[f[733]] == f[829] || kax_09[f[733]] == f[1046];
        });
    }
}, window[f[1047]] = function () {
    ServerLoading[f[732]][f[881]](t11Q[f[857]]), window[f[699]] = !![], window[f[885]]();
}, window[f[884]] = function () {
    if (window[f[700]] && window[f[701]] && window[f[702]] && window[f[703]] && window[f[704]] && window[f[706]]) {
        if (!window[f[1048]][f[732]]) {
            console[f[159]](f[1049] + window[f[1048]][f[732]]);
            var eh6fb = wx[f[1050]](),
                e6yu = eh6fb[f[939]] ? eh6fb[f[939]] : 0x0,
                q6yu = {
                'cdn': window[f[657]][f[755]],
                'spareCdn': window[f[657]][f[795]],
                'newRegister': window[f[657]][f[857]],
                'wxPC': window[f[657]][f[697]],
                'wxIOS': window[f[657]][f[695]],
                'wxAndroid': window[f[657]][f[696]],
                'wxParam': {
                    'limitLoad': window[f[657]][f[1051]],
                    'benchmarkLevel': window[f[657]][f[1052]],
                    'wxFrom': window[f[648]][f[38]] == f[1053] ? 0x1 : 0x0,
                    'wxSDKVersion': window[f[945]],
                    'qudao': f[1054]
                },
                'configType': window[f[657]][f[688]],
                'exposeType': window[f[657]][f[690]],
                'scene': e6yu,
                'video_type': window[f[657]][f[807]],
                'ad_flag': window[f[657]][f[809]]
            };
            if (window[f[895]]) for (var que6y in window[f[895]]) {
                if (!q6yu[que6y]) q6yu[que6y] = window[f[895]][que6y];
            }
            new window[f[1048]](q6yu, window[f[657]][f[693]], window[f[655]]);
        }
    }
}, window[f[885]] = function () {
    if (window[f[700]] && window[f[701]] && window[f[702]] && window[f[703]] && window[f[704]] && window[f[706]] && window[f[699]] && window[f[705]]) {
        t191QE();
        if (!t1QE1) {
            t1QE1 = !![];
            if (!window[f[1048]][f[732]]) window[f[884]]();
            var ks = 0x0,
                ol3$g2 = wx[f[1055]]();
            ol3$g2 && (window[f[657]][f[1056]] && (ks = ol3$g2[f[1057]]), console[f[734]](f[1058] + ol3$g2[f[1057]] + f[1059] + ol3$g2[f[1060]] + f[1061] + ol3$g2[f[1062]] + f[1063] + ol3$g2[f[1064]] + f[1065] + ol3$g2[f[1066]] + f[1067] + ol3$g2[f[1068]]));
            var o2$jl = {};
            for (const l$jmo in t11Q[f[680]]) {
                o2$jl[l$jmo] = t11Q[f[680]][l$jmo];
            }
            var n$m1 = {
                'channel': window[f[657]][f[679]],
                'account': window[f[657]][f[754]],
                'userId': window[f[657]][f[568]],
                'cdn': window[f[657]][f[755]],
                'data': window[f[657]][f[204]],
                'package': window[f[657]][f[195]],
                'newRegister': window[f[657]][f[857]],
                'pkgName': window[f[657]][f[674]],
                'partnerId': window[f[657]][f[673]],
                'platform_uid': window[f[657]][f[835]],
                'deviceId': window[f[657]][f[675]],
                'selectedServer': o2$jl,
                'configType': window[f[657]][f[688]],
                'exposeType': window[f[657]][f[690]],
                'debugUsers': window[f[657]][f[684]],
                'wxMenuTop': ks,
                'wxShield': window[f[657]][f[694]],
                'encryptParam': window[f[657]][f[691]],
                'wx_channel': window[f[657]][f[806]],
                'zsy_tp_state': window[f[657]][f[808]]
            };
            if (window[f[895]]) for (var qh6u in window[f[895]]) {
                n$m1[qh6u] = window[f[895]][qh6u];
            }
            window[f[1048]][f[732]][f[1069]](n$m1);
            if (t11Q[f[680]] && t11Q[f[680]][f[618]]) localStorage[f[1070]](f[842] + t11Q[f[674]] + t11Q[f[754]], t11Q[f[680]][f[618]]);
        }
    } else console[f[734]](f[1071] + window[f[700]] + f[1072] + window[f[701]] + f[1073] + window[f[702]] + f[1074] + window[f[703]] + f[1075] + window[f[704]] + f[1076] + window[f[706]] + f[1077] + window[f[699]] + f[1078] + window[f[705]]);
}, window[f[1079]] = function (ubdh6f) {
    if (!window[f[1080]]) {
        console[f[202]](f[1081]);
        return;
    }
    var rw748 = ubdh6f[f[1082]];
    rw748 == 0x1 ? window[f[1080]][f[1083]](0x2327, ubdh6f) : window[f[1080]][f[1084]](0x2327);
};