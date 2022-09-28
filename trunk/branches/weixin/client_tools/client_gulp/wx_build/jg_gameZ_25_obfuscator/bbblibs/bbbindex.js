var _ = wx.y$;
import _dsxwtu from '../bbbk/bbbsdk.js';
window[_[31769]] = { 'wxVersion': window[_[563]][_[31670]] }, window[_[31770]] = ![], window['p$ED'] = 0x1, window[_[31771]] = 0x1, window['p$CDE'] = !![], window[_[31772]] = !![], window['p$ABCDE'] = '', window[_[31773]] = ![], window['p$DE'] = {
    'base_cdn': _[31774],
    'cdn': _[31774]
}, p$DE[_[31775]] = {}, p$DE[_[26028]] = '0', p$DE[_[4945]] = window[_[31769]][_[31776]], p$DE[_[31744]] = '', p$DE['os'] = '1', p$DE[_[31777]] = _[31778], p$DE[_[31779]] = _[31780], p$DE[_[31781]] = _[31782], p$DE[_[31783]] = _[31784], p$DE[_[31785]] = _[31786], p$DE[_[12172]] = '1', p$DE[_[26351]] = '', p$DE[_[26353]] = '', p$DE[_[31787]] = 0x0, p$DE[_[31788]] = {}, p$DE[_[31789]] = parseInt(p$DE[_[12172]]), p$DE[_[12181]] = p$DE[_[12172]], p$DE[_[26345]] = {}, p$DE['p$BD'] = _[31790], p$DE[_[31791]] = ![], p$DE[_[12307]] = _[31792], p$DE[_[26314]] = Date[_[83]](), p$DE[_[11889]] = _[31793], p$DE[_[756]] = '_a', p$DE[_[31794]] = 0x2, p$DE[_[101]] = 0x7c1, p$DE[_[31776]] = window[_[31769]][_[31776]], p$DE[_[780]] = ![], p$DE[_[1117]] = ![], p$DE[_[11187]] = ![], p$DE[_[26031]] = ![], window['p$CED'] = 0x5, window['p$CE'] = ![], window['p$EC'] = ![], window['p$DCE'] = ![], window[_[31795]] = ![], window[_[31796]] = ![], window['p$DEC'] = ![], window['p$CD'] = ![], window['p$DC'] = ![], window['p$ECD'] = ![], window[_[31797]] = null, window[_[656]] = function (hcd) {
    console[_[488]](_[656], hcd), wx[_[4465]]({}), wx[_[31694]]({
        'title': _[5669],
        'content': hcd,
        'success'($1) {
            if ($1[_[31798]]) console[_[488]](_[31799]);else $1[_[559]] && console[_[488]](_[31800]);
        }
    });
}, window['p$BCDE'] = function (febgc) {
    console[_[488]](_[31801], febgc), p$BDEC(), wx[_[31694]]({
        'title': _[5669],
        'content': febgc,
        'confirmText': _[31802],
        'cancelText': _[18976],
        'success'(mqorpn) {
            if (mqorpn[_[31798]]) window['p$DB']();else mqorpn[_[559]] && (console[_[488]](_[31803]), wx[_[26026]]({}));
        }
    });
}, window[_[31804]] = function (efcdgh) {
    console[_[488]](_[31804], efcdgh), wx[_[31694]]({
        'title': _[5669],
        'content': efcdgh,
        'confirmText': _[26480],
        'showCancel': ![],
        'complete'(onrpqs) {
            console[_[488]](_[31803]), wx[_[26026]]({});
        }
    });
}, window['p$BCED'] = ![], window['p$BDCE'] = function (limkn) {
    window['p$BCED'] = !![], wx[_[4464]](limkn);
}, window['p$BDEC'] = function () {
    window['p$BCED'] && (window['p$BCED'] = ![], wx[_[4465]]({}));
}, window['p$BECD'] = function (y$zxw_) {
    window[_[31685]][_[148]]['p$BECD'](y$zxw_);
}, window[_[12182]] = function (lnqpom, kmijln) {
    _dsxwtu[_[12182]](lnqpom, function (kjnim) {
        kjnim && kjnim[_[11]] ? kjnim[_[11]][_[1257]] == 0x1 ? kmijln(!![]) : (kmijln(![]), console[_[78]](_[31805] + kjnim[_[11]][_[31806]])) : console[_[488]](_[12182], kjnim);
    });
}, window['p$BEDC'] = function (hejif) {
    console[_[488]](_[31807], hejif);
}, window['p$BDE'] = function (dbefg) {}, window['p$BED'] = function (prqst, $320_, z01y) {}, window['p$BE'] = function (lihjkm) {
    console[_[488]](_[31808], lihjkm), window[_[31685]][_[148]][_[31809]](), window[_[31685]][_[148]][_[31810]](), window[_[31685]][_[148]][_[31811]]();
}, window['p$EB'] = function (z$201) {
    window[_[31812]](0xe, _[31813] + z$201), window['p$BCDE'](_[31814]);
    var xtvuws = {
        'id': window['p$DE'][_[31675]],
        'role': window['p$DE'][_[4256]],
        'level': window['p$DE'][_[31676]],
        'account': window['p$DE'][_[26349]],
        'version': window['p$DE'][_[101]],
        'cdn': window['p$DE'][_[4132]],
        'pkgName': window['p$DE'][_[26351]],
        'gamever': window[_[563]][_[31670]],
        'serverid': window['p$DE'][_[26345]] ? window['p$DE'][_[26345]][_[11363]] : 0x0,
        'systemInfo': window[_[31677]],
        'error': _[31815],
        'stack': z$201 ? z$201 : _[31814]
    },
        opqrmn = JSON[_[4118]](xtvuws);
    console[_[125]](_[31816] + opqrmn), window['p$BD'](opqrmn);
}, window[_[31812]] = function (prmn, rnoq) {
    sendApi(p$DE[_[31781]], _[31817], {
        'game_pkg': p$DE[_[26351]],
        'partner_id': p$DE[_[12172]],
        'server_id': p$DE[_[26345]] && p$DE[_[26345]][_[11363]] > 0x0 ? p$DE[_[26345]][_[11363]] : 0x0,
        'uid': p$DE[_[26349]] > 0x0 ? p$DE[_[26349]] : 0x0,
        'type': prmn,
        'info': rnoq
    });
}, window['p$DBE'] = function (mljkih) {
    var pruqs = JSON[_[531]](mljkih);
    pruqs[_[31818]] = window[_[563]][_[31670]], pruqs[_[31819]] = window['p$DE'][_[26345]] ? window['p$DE'][_[26345]][_[11363]] : 0x0, pruqs[_[31677]] = window[_[31677]];
    var ons = JSON[_[4118]](pruqs);
    console[_[125]](_[31820] + ons), window['p$BD'](ons);
}, window['p$DEB'] = function (npqrmo, jonlmk) {
    var z$_0y = {
        'id': window['p$DE'][_[31675]],
        'role': window['p$DE'][_[4256]],
        'level': window['p$DE'][_[31676]],
        'account': window['p$DE'][_[26349]],
        'version': window['p$DE'][_[101]],
        'cdn': window['p$DE'][_[4132]],
        'pkgName': window['p$DE'][_[26351]],
        'gamever': window[_[563]][_[31670]],
        'serverid': window['p$DE'][_[26345]] ? window['p$DE'][_[26345]][_[11363]] : 0x0,
        'systemInfo': window[_[31677]],
        'error': npqrmo,
        'stack': jonlmk
    },
        eacbf = JSON[_[4118]](z$_0y);
    console[_[96]](_[31821] + eacbf), window['p$BD'](eacbf);
}, window['p$BD'] = function ($31_02) {
    if (window['p$DE'][_[31745]] == _[31822]) return;
    var urtwsv = p$DE['p$BD'] + _[31823] + p$DE[_[26349]];
    wx[_[483]]({
        'url': urtwsv,
        'method': _[31824],
        'data': $31_02,
        'header': {
            'content-type': _[31825],
            'cache-control': _[31826]
        },
        'success': function (pnrmqo) {
            DEBUG && console[_[488]](_[31827], urtwsv, $31_02, pnrmqo);
        },
        'fail': function (omjnlk) {
            DEBUG && console[_[488]](_[31827], urtwsv, $31_02, omjnlk);
        },
        'complete': function () {}
    });
}, window[_[31828]] = function () {
    function y_0z$1() {
        return ((0x1 + Math[_[119]]()) * 0x10000 | 0x0)[_[272]](0x10)[_[503]](0x1);
    }
    return y_0z$1() + y_0z$1() + '-' + y_0z$1() + '-' + y_0z$1() + '-' + y_0z$1() + '+' + y_0z$1() + y_0z$1() + y_0z$1();
}, window['p$DB'] = function () {
    console[_[488]](_[31829]);
    var qput = _dsxwtu[_[31830]]();
    p$DE[_[12181]] = qput[_[31831]], p$DE[_[31789]] = qput[_[31831]], p$DE[_[12172]] = qput[_[31831]], p$DE[_[26351]] = qput[_[31832]];
    var zyw$ = { 'game_ver': p$DE[_[4945]] };
    p$DE[_[26353]] = this[_[31828]](), p$BDCE({ 'title': _[31833] }), _dsxwtu[_[368]](zyw$, this['p$EBD'][_[74]](this));
};
var wx_develop = ![];
window['p$EBD'] = function (wsuvt) {
    var mojlkn = wsuvt[_[31834]];
    sdkInitRes = wsuvt, wx_develop = mojlkn == 0x1, console[_[488]](_[31835] + mojlkn + _[31836] + (mojlkn == 0x1) + _[31837] + wsuvt[_[31670]] + _[31838] + window[_[31769]][_[31776]]);
    if (!wsuvt[_[31670]] || window['p$ACEBD'](window[_[31769]][_[31776]], wsuvt[_[31670]]) < 0x0) console[_[488]](_[31839]), p$DE[_[31779]] = _[31840], p$DE[_[31781]] = _[31841], p$DE[_[31783]] = _[31842], p$DE[_[4132]] = _[31843], p$DE[_[26027]] = _[31844], p$DE[_[31845]] = 'll', p$DE[_[780]] = ![];else window['p$ACEBD'](window[_[31769]][_[31776]], wsuvt[_[31670]]) == 0x0 ? (console[_[488]](_[31846]), p$DE[_[31779]] = _[31780], p$DE[_[31781]] = _[31782], p$DE[_[31783]] = _[31784], p$DE[_[4132]] = _[31847], p$DE[_[26027]] = _[31844], p$DE[_[31845]] = _[31848], p$DE[_[780]] = !![]) : (console[_[488]](_[31849]), p$DE[_[31779]] = _[31780], p$DE[_[31781]] = _[31782], p$DE[_[31783]] = _[31784], p$DE[_[4132]] = _[31847], p$DE[_[26027]] = _[31844], p$DE[_[31845]] = _[31848], p$DE[_[780]] = ![]);
    p$DE[_[31787]] = config[_[31244]] ? config[_[31244]] : 0x0, this['p$CDBE'](), this['p$CDEB'](), window[_[31850]] = 0x5, p$BDCE({ 'title': _[31851] }), _dsxwtu[_[31852]](this['p$EDB'][_[74]](this));
}, window[_[31850]] = 0x5, window['p$EDB'] = function (pnmroq, gefhd) {
    if (pnmroq == 0x0 && gefhd && gefhd[_[31338]]) {
        p$DE[_[31853]] = gefhd[_[31338]], p$DE[_[26489]] = gefhd[_[26489]];
        var jihgef = this;
        p$BDCE({ 'title': _[31854] }), sendApi(p$DE[_[31779]], _[31855], {
            'platform': p$DE[_[31777]],
            'partner_id': p$DE[_[12172]],
            'token': gefhd[_[31338]],
            'game_pkg': p$DE[_[26351]],
            'deviceId': p$DE[_[26353]],
            'scene': _[31856] + p$DE[_[31787]]
        }, this['p$CBDE'][_[74]](this), p$CED, p$EB);
    } else gefhd && gefhd[_[26546]] && window[_[31850]] > 0x0 && (gefhd[_[26546]][_[115]](_[31857]) != -0x1 || gefhd[_[26546]][_[115]](_[31858]) != -0x1 || gefhd[_[26546]][_[115]](_[31859]) != -0x1 || gefhd[_[26546]][_[115]](_[31860]) != -0x1 || gefhd[_[26546]][_[115]](_[31861]) != -0x1 || gefhd[_[26546]][_[115]](_[31862]) != -0x1) ? (window[_[31850]]--, _dsxwtu[_[31852]](this['p$EDB'][_[74]](this))) : (window[_[31812]](0x1, _[31863] + pnmroq + _[31864] + (gefhd ? gefhd[_[26546]] : '')), window['p$DEB'](_[31865], JSON[_[4118]]({
        'status': pnmroq,
        'data': gefhd
    })), window['p$BCDE'](_[31866] + (gefhd && gefhd[_[26546]] ? '，' + gefhd[_[26546]] : '')));
}, window['p$CBDE'] = function (zwy$x_) {
    if (!zwy$x_) {
        window[_[31812]](0x2, _[31867]), window['p$DEB'](_[31868], _[31869]), window['p$BCDE'](_[31870]);
        return;
    }
    if (zwy$x_[_[1257]] != _[9665]) {
        window[_[31812]](0x2, _[31871] + zwy$x_[_[1257]]), window['p$DEB'](_[31868], JSON[_[4118]](zwy$x_)), window['p$BCDE'](_[31872] + zwy$x_[_[1257]]);
        return;
    }
    if (zwy$x_[_[31873]] == 0x1) {
        window['p$BCDE'](_[31874]);
        return;
    }
    p$DE[_[12170]] = String(zwy$x_[_[26349]]), p$DE[_[26349]] = String(zwy$x_[_[26349]]), p$DE[_[26312]] = String(zwy$x_[_[26312]]), p$DE[_[12181]] = String(zwy$x_[_[26312]]), p$DE[_[26352]] = String(zwy$x_[_[26352]]), p$DE[_[31875]] = String(zwy$x_[_[11346]]), p$DE[_[31876]] = String(zwy$x_[_[893]]), p$DE[_[11346]] = '';
    var cegb = this;
    p$BDCE({ 'title': _[31877] });
    var gfheij = localStorage[_[486]](_[31878] + p$DE[_[26351]] + p$DE[_[26349]]);
    if (gfheij && gfheij != '') {
        var $321_ = Number(gfheij);
        cegb[_[31879]]($321_);
    } else cegb[_[31880]]();
}, window[_[31880]] = function () {
    var gjhfik = this;
    sendApi(p$DE[_[31779]], _[31881], {
        'partner_id': p$DE[_[12172]],
        'uid': p$DE[_[26349]],
        'version': p$DE[_[4945]],
        'game_pkg': p$DE[_[26351]],
        'device': p$DE[_[26353]]
    }, gjhfik['p$CBED'][_[74]](gjhfik), p$CED, p$EB);
}, window['p$CBED'] = function (njikml) {
    if (!njikml) {
        window[_[31812]](0x3, _[31882]), window['p$BCDE'](_[31882]);
        return;
    }
    if (njikml[_[1257]] != _[9665]) {
        window[_[31812]](0x3, _[31883] + njikml[_[1257]]), window['p$BCDE'](_[31883] + njikml[_[1257]]);
        return;
    }
    if (!njikml[_[11]] || njikml[_[11]][_[13]] == 0x0) {
        window[_[31812]](0x3, _[31884]), window['p$BCDE'](_[31885]);
        return;
    }
    this[_[31886]](njikml);
}, window[_[31879]] = function (y0_z1) {
    var rqpson = this;
    sendApi(p$DE[_[31779]], _[31887], {
        'server_id': y0_z1,
        'time': Date[_[83]]() / 0x3e8
    }, rqpson[_[31888]][_[74]](rqpson), p$CED, p$EB);
}, window[_[31888]] = function (nomklj) {
    if (!nomklj) {
        window[_[31812]](0x4, _[31889]), this[_[31880]]();
        return;
    }
    if (nomklj[_[1257]] != _[9665]) {
        window[_[31812]](0x4, _[31890] + nomklj[_[1257]]), this[_[31880]]();
        return;
    }
    if (!nomklj[_[11]] || nomklj[_[11]][_[13]] == 0x0) {
        window[_[31812]](0x4, _[31891]), this[_[31880]]();
        return;
    }
    this[_[31886]](nomklj);
}, window[_[31886]] = function (qtsrup) {
    p$DE[_[666]] = qtsrup[_[31892]] != undefined ? qtsrup[_[31892]] : 0x0, p$DE[_[26345]] = {
        'server_id': String(qtsrup[_[11]][0x0][_[11363]]),
        'server_name': String(qtsrup[_[11]][0x0][_[26350]]),
        'entry_ip': qtsrup[_[11]][0x0][_[26373]],
        'entry_port': parseInt(qtsrup[_[11]][0x0][_[26374]]),
        'status': p$DCB(qtsrup[_[11]][0x0]),
        'start_time': qtsrup[_[11]][0x0][_[31893]],
        'maintain_time': qtsrup[_[11]][0x0][_[31894]] ? qtsrup[_[11]][0x0][_[31894]] : '',
        'is_recommend': qtsrup[_[11]][0x0][_[31895]],
        'cdn': p$DE[_[4132]]
    }, this['p$EDCB'](), window[_[31685]] && window[_[31685]][_[148]][_[31896]] && window[_[31685]][_[148]][_[31896]](sdkInitRes[_[31897]], sdkInitRes[_[31898]], sdkInitRes[_[31899]], sdkInitRes[_[31900]], sdkInitRes[_[31901]]);
}, window['p$EDCB'] = function () {
    if (p$DE[_[666]] == 0x1) {
        var fhjige = p$DE[_[26345]][_[106]];
        if (fhjige === -0x1 || fhjige === 0x0) {
            window[_[31812]](0xf, _[31902] + p$DE[_[26345]]['id'] + _[31903] + p$DE[_[26345]][_[106]]), window['p$BCDE'](fhjige === -0x1 ? _[31904] : _[31905]);
            return;
        }
        p$EBCD(0x0, p$DE[_[26345]][_[11363]]), window[_[31685]][_[148]][_[31906]](p$DE[_[666]]);
    } else window[_[31685]][_[148]][_[31907]](), p$BDEC();
    window['p$DC'] = !![], window['p$ECDB'](), window['p$EDBC']();
}, window['p$CDBE'] = function () {
    sendApi(p$DE[_[31779]], _[31908], {
        'game_pkg': p$DE[_[26351]],
        'version_name': p$DE[_[31845]]
    }, this[_[31909]][_[74]](this), p$CED, p$EB);
}, window[_[31909]] = function (ijhlgk) {
    if (!ijhlgk) {
        window[_[31812]](0x5, _[31910]), window['p$BCDE'](_[31910]);
        return;
    }
    if (ijhlgk[_[1257]] != _[9665]) {
        window[_[31812]](0x5, _[31911] + ijhlgk[_[1257]]), window['p$BCDE'](_[31911] + ijhlgk[_[1257]]);
        return;
    }
    if (!ijhlgk[_[11]] || !ijhlgk[_[11]][_[4945]]) {
        window[_[31812]](0x5, _[31912] + (ijhlgk[_[11]] && ijhlgk[_[11]][_[4945]])), window['p$BCDE'](_[31912] + (ijhlgk[_[11]] && ijhlgk[_[11]][_[4945]]));
        return;
    }
    ijhlgk[_[11]][_[31913]] && ijhlgk[_[11]][_[31913]][_[13]] > 0xa && (p$DE[_[31914]] = ijhlgk[_[11]][_[31913]], p$DE[_[4132]] = ijhlgk[_[11]][_[31913]]), ijhlgk[_[11]][_[4945]] && (p$DE[_[101]] = ijhlgk[_[11]][_[4945]]), console[_[78]](_[26486] + p$DE[_[101]] + _[31915] + p$DE[_[31845]]), window['p$DEC'] = !![], window['p$ECDB'](), window['p$EDBC']();
}, window[_[31916]], window['p$CDEB'] = function () {
    sendApi(p$DE[_[31779]], _[31917], { 'game_pkg': p$DE[_[26351]] }, this['p$CEBD'][_[74]](this), p$CED, p$EB);
}, window['p$CEBD'] = function ($1y0) {
    if ($1y0 && $1y0[_[1257]] === _[9665] && $1y0[_[11]]) {
        window[_[31916]] = $1y0[_[11]];
        for (var ijgkl in $1y0[_[11]]) {
            p$DE[ijgkl] = $1y0[_[11]][ijgkl];
        }
        window[_[31918]]();
    } else window[_[31812]](0xb, _[31919]), console[_[78]](_[31920] + $1y0[_[1257]]);
    window['p$CD'] = !![], window['p$EDBC']();
}, window[_[31918]] = function () {
    var ihgk = p$DE[_[780]] || p$DE[_[26241]] && p$DE[_[26241]] > 0x0;
    if (ihgk) {
        var uxyzvw = p$DE[_[26242]],
            aeb = uxyzvw && uxyzvw[_[13]] == 0x9;
        aeb && (window[_[28802]] = uxyzvw);
        var gfehc = p$DE[_[26243]],
            $yz_0x = gfehc && gfehc[_[15]]('#')[_[13]] == 0x4;
        $yz_0x && (window[_[11990]] = gfehc);
    }
}, window[_[31921]] = function (dbgfe, xvzw$, _13$02, xtsu, xvutw, rpsoqn, fghkij, nrqopm, lkgh, mik) {
    xvutw = String(xvutw);
    var nmlp = fghkij,
        jknli = nrqopm;
    p$DE[_[31775]][xvutw] = {
        'productid': xvutw,
        'productname': nmlp,
        'productdesc': jknli,
        'roleid': dbgfe,
        'rolename': xvzw$,
        'rolelevel': _13$02,
        'price': rpsoqn,
        'callback': lkgh
    }, sendApi(p$DE[_[31783]], _[31922], {
        'game_pkg': p$DE[_[26351]],
        'server_id': p$DE[_[26345]][_[11363]],
        'server_name': p$DE[_[26345]][_[26350]],
        'level': _13$02,
        'uid': p$DE[_[26349]],
        'role_id': dbgfe,
        'role_name': xvzw$,
        'product_id': xvutw,
        'product_name': nmlp,
        'product_desc': jknli,
        'money': rpsoqn,
        'partner_id': p$DE[_[12172]]
    }, toPayCallBack, p$CED, p$EB);
}, window[_[31923]] = function (npqmlo) {
    if (npqmlo && (npqmlo[_[31924]] === 0xc8 || npqmlo[_[1257]] == _[9665])) {
        var jmil = p$DE[_[31775]][String(npqmlo[_[31925]])];
        if (jmil[_[335]]) jmil[_[335]](npqmlo[_[31925]], npqmlo[_[31926]], -0x1);
        _dsxwtu[_[31927]]({
            'cpbill': npqmlo[_[31926]],
            'productid': npqmlo[_[31925]],
            'productname': jmil[_[31928]],
            'productdesc': jmil[_[31929]],
            'serverid': p$DE[_[26345]][_[11363]],
            'servername': p$DE[_[26345]][_[26350]],
            'roleid': jmil[_[12176]],
            'rolename': jmil[_[12177]],
            'rolelevel': jmil[_[31930]],
            'price': jmil[_[28193]],
            'extension': JSON[_[4118]]({ 'cp_order_id': npqmlo[_[31926]] })
        }, function (rqtvsu, ikjghl) {
            jmil[_[335]] && rqtvsu == 0x0 && jmil[_[335]](npqmlo[_[31925]], npqmlo[_[31926]], rqtvsu);
            console[_[78]](JSON[_[4118]]({
                'type': _[31931],
                'status': rqtvsu,
                'data': npqmlo,
                'role_name': jmil[_[12177]]
            }));
            if (rqtvsu === 0x0) {} else {
                if (rqtvsu === 0x1) {} else {
                    if (rqtvsu === 0x2) {}
                }
            }
        });
    } else {
        var fkjig = npqmlo ? _[31932] + npqmlo[_[31924]] + _[31933] + npqmlo[_[1257]] + _[31934] + npqmlo[_[78]] : _[31935];
        window[_[31812]](0xd, _[31936] + fkjig), alert(fkjig);
    }
}, window['p$CEDB'] = function () {}, window['p$BCE'] = function (kmlo, mqopr, jmhl, tsqopr, qrpots) {
    _dsxwtu[_[31937]](p$DE[_[26345]][_[11363]], p$DE[_[26345]][_[26350]] || p$DE[_[26345]][_[11363]], kmlo, mqopr, jmhl), sendApi(p$DE[_[31779]], _[31938], {
        'game_pkg': p$DE[_[26351]],
        'server_id': p$DE[_[26345]][_[11363]],
        'role_id': kmlo,
        'uid': p$DE[_[26349]],
        'role_name': mqopr,
        'role_type': tsqopr,
        'level': jmhl
    });
}, window['p$BEC'] = function (qpmnl, qsurp, cebdgf, xzy$_0, nqplm, kmpn, efighj, wuvxs, survw, jmknlo) {
    p$DE[_[31675]] = qpmnl, p$DE[_[4256]] = qsurp, p$DE[_[31676]] = cebdgf, _dsxwtu[_[31939]](p$DE[_[26345]][_[11363]], p$DE[_[26345]][_[26350]] || p$DE[_[26345]][_[11363]], qpmnl, qsurp, cebdgf), sendApi(p$DE[_[31779]], _[31940], {
        'game_pkg': p$DE[_[26351]],
        'server_id': p$DE[_[26345]][_[11363]],
        'role_id': qpmnl,
        'uid': p$DE[_[26349]],
        'role_name': qsurp,
        'role_type': xzy$_0,
        'level': cebdgf,
        'evolution': nqplm
    });
}, window['p$CBE'] = function (strvqu, zxuy, fdcgh, mqolpn, pklon, osr, vursqt, $0_12, ihmk, fabced) {
    p$DE[_[31675]] = strvqu, p$DE[_[4256]] = zxuy, p$DE[_[31676]] = fdcgh, _dsxwtu[_[31941]](p$DE[_[26345]][_[11363]], p$DE[_[26345]][_[26350]] || p$DE[_[26345]][_[11363]], strvqu, zxuy, fdcgh), sendApi(p$DE[_[31779]], _[31940], {
        'game_pkg': p$DE[_[26351]],
        'server_id': p$DE[_[26345]][_[11363]],
        'role_id': strvqu,
        'uid': p$DE[_[26349]],
        'role_name': zxuy,
        'role_type': mqolpn,
        'level': fdcgh,
        'evolution': pklon
    });
}, window['p$CEB'] = function (_w) {}, window['p$BC'] = function (eghcdf, mlokp) {
    _dsxwtu[_[31942]](_[31942], { 'activity_id': mlokp }, function (_z01) {
        eghcdf && eghcdf(_z01);
    });
}, window[_[24371]] = function () {
    _dsxwtu[_[24371]]();
}, window[_[31943]] = function () {
    _dsxwtu[_[24250]]();
}, window[_[31944]] = function (uyxvwz, efihg, wzxuv, mo, vurws, xtuyw, pqrto, oqln) {
    oqln = oqln || p$DE[_[26345]][_[11363]], sendApi(p$DE[_[31779]], _[31945], {
        'phone': uyxvwz,
        'role_id': efihg,
        'uid': p$DE[_[26349]],
        'game_pkg': p$DE[_[26351]],
        'partner_id': p$DE[_[12172]],
        'server_id': oqln
    }, pqrto, 0x2, null, function () {
        return !![];
    });
}, window[_[10678]] = function (uyz) {
    window['p$EBC'] = uyz, window['p$EBC'] && window['p$CB'] && (console[_[78]](_[31761] + window['p$CB'][_[818]]), window['p$EBC'](window['p$CB']), window['p$CB'] = null);
}, window['p$ECB'] = function (utsqp, kmonlp, _wzx$y, egbfd) {
    window[_[22]](_[31946], {
        'game_pkg': window['p$DE'][_[26351]],
        'role_id': kmonlp,
        'server_id': _wzx$y
    }, egbfd);
}, window['p$DBCE'] = function (lmknji, uvws, suqvr) {
    function jmoknl(zy$_1) {
        var glkh = [],
            uvrqs = [],
            vurqs = suqvr || window[_[563]][_[31947]];
        for (var yuwzvx in vurqs) {
            var cbdfeg = Number(yuwzvx);
            (!lmknji || !lmknji[_[13]] || lmknji[_[115]](cbdfeg) != -0x1) && (uvrqs[_[29]](vurqs[yuwzvx]), glkh[_[29]]([cbdfeg, 0x3]));
        }
        window['p$ACEBD'](window[_[31686]], _[31948]) >= 0x0 ? (console[_[488]](_[31949]), _dsxwtu[_[31950]] && _dsxwtu[_[31950]](uvrqs, function ($y_zx) {
            console[_[488]](_[31951]), console[_[488]]($y_zx);
            if ($y_zx && $y_zx[_[26546]] == _[31952]) for (var _140 in vurqs) {
                if ($y_zx[vurqs[_140]] == _[31953]) {
                    var xwsvtu = Number(_140);
                    for (var rqpmo = 0x0; rqpmo < glkh[_[13]]; rqpmo++) {
                        if (glkh[rqpmo][0x0] == xwsvtu) {
                            glkh[rqpmo][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['p$ACEBD'](window[_[31686]], _[31954]) >= 0x0 ? wx[_[31955]]({
                'withSubscriptions': !![],
                'success': function (nmlojk) {
                    var oqprs = nmlojk[_[31956]][_[31957]];
                    if (oqprs) {
                        console[_[488]](_[31958]), console[_[488]](oqprs);
                        for (var yxtuw in vurqs) {
                            if (oqprs[vurqs[yxtuw]] == _[31953]) {
                                var ijkgfh = Number(yxtuw);
                                for (var ig = 0x0; ig < glkh[_[13]]; ig++) {
                                    if (glkh[ig][0x0] == ijkgfh) {
                                        glkh[ig][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[_[488]](glkh), uvws && uvws(glkh);
                    } else console[_[488]](_[31959]), console[_[488]](nmlojk), console[_[488]](glkh), uvws && uvws(glkh);
                },
                'fail': function () {
                    console[_[488]](_[31960]), console[_[488]](glkh), uvws && uvws(glkh);
                }
            }) : (console[_[488]](_[31961] + window[_[31686]]), console[_[488]](glkh), uvws && uvws(glkh));
        })) : (console[_[488]](_[31962] + window[_[31686]]), console[_[488]](glkh), uvws && uvws(glkh)), wx[_[31963]](jmoknl);
    }
    wx[_[31964]](jmoknl);
}, window['p$DBEC'] = {
    'isSuccess': ![],
    'level': _[31965],
    'isCharging': ![]
}, window['p$DCBE'] = function (tyvxu) {
    wx[_[31753]]({
        'success': function (abed) {
            var gdhi = window['p$DBEC'];
            gdhi[_[31966]] = !![], gdhi[_[4232]] = Number(abed[_[4232]])[_[3849]](0x0), gdhi[_[31756]] = abed[_[31756]], tyvxu && tyvxu(gdhi[_[31966]], gdhi[_[4232]], gdhi[_[31756]]);
        },
        'fail': function (mkhil) {
            console[_[488]](_[31967], mkhil[_[26546]]);
            var $13_ = window['p$DBEC'];
            tyvxu && tyvxu($13_[_[31966]], $13_[_[4232]], $13_[_[31756]]);
        }
    });
}, window[_[11744]] = function (adbcfe) {
    wx[_[11744]]({
        'success': function (jikghl) {
            adbcfe && adbcfe(!![], jikghl);
        },
        'fail': function (lmkinj) {
            adbcfe && adbcfe(![], lmkinj);
        }
    });
}, window[_[11746]] = function (rqvtus) {
    if (rqvtus) wx[_[11746]](rqvtus);
}, window[_[26022]] = function (_0413) {
    wx[_[26022]](_0413);
}, window[_[22]] = function (egdhi, ompnlq, aebfd, _$xy0, mihjk, _0342, pnrqso, _y$0z1) {
    if (_$xy0 == undefined) _$xy0 = 0x1;
    wx[_[483]]({
        'url': egdhi,
        'method': pnrqso || _[26225],
        'responseType': _[4035],
        'data': ompnlq,
        'header': { 'content-type': _y$0z1 || _[31825] },
        'success': function (nqmrpo) {
            DEBUG && console[_[488]](_[31968], egdhi, info, nqmrpo);
            if (nqmrpo && nqmrpo[_[26616]] == 0xc8) {
                var lmnpq = nqmrpo[_[11]];
                !_0342 || _0342(lmnpq) ? aebfd && aebfd(lmnpq) : window[_[31969]](egdhi, ompnlq, aebfd, _$xy0, mihjk, _0342, nqmrpo);
            } else window[_[31969]](egdhi, ompnlq, aebfd, _$xy0, mihjk, _0342, nqmrpo);
        },
        'fail': function (fjkig) {
            DEBUG && console[_[488]](_[31970], egdhi, info, fjkig), window[_[31969]](egdhi, ompnlq, aebfd, _$xy0, mihjk, _0342, fjkig);
        },
        'complete': function () {}
    });
}, window[_[31969]] = function (mrqno, jmkno, vwsux, $01z, cdegf, ptso, eafbd) {
    $01z - 0x1 > 0x0 ? setTimeout(function () {
        window[_[22]](mrqno, jmkno, vwsux, $01z - 0x1, cdegf, ptso);
    }, 0x3e8) : cdegf && cdegf(JSON[_[4118]]({
        'url': mrqno,
        'response': eafbd
    }));
}, window[_[31971]] = function (poqnml, ifegdh, qnpsor, ejgifh, uxwtvs, _24130, mqrop) {
    !qnpsor && (qnpsor = {});
    var $_y1z = Math[_[118]](Date[_[83]]() / 0x3e8);
    qnpsor[_[893]] = $_y1z, qnpsor[_[31972]] = ifegdh;
    var utxv = Object[_[263]](qnpsor)[_[1121]](),
        ehg = '',
        cafed = '';
    for (var txw = 0x0; txw < utxv[_[13]]; txw++) {
        ehg = ehg + (txw == 0x0 ? '' : '&') + utxv[txw] + qnpsor[utxv[txw]], cafed = cafed + (txw == 0x0 ? '' : '&') + utxv[txw] + '=' + encodeURIComponent(qnpsor[utxv[txw]]);
    }
    ehg = ehg + p$DE[_[31785]];
    var ghide = _[31973] + md5(ehg);
    send(poqnml + '?' + cafed + (cafed == '' ? '' : '&') + ghide, null, ejgifh, uxwtvs, _24130, mqrop || function (kghil) {
        return kghil[_[1257]] == _[9665];
    }, null, _[31974]);
}, window['p$DCEB'] = function (hiljm, ljimhk) {
    var ljmnk = 0x0;
    p$DE[_[26345]] && (ljmnk = p$DE[_[26345]][_[11363]]), sendApi(p$DE[_[31781]], _[31975], {
        'partnerId': p$DE[_[12172]],
        'gamePkg': p$DE[_[26351]],
        'logTime': Math[_[118]](Date[_[83]]() / 0x3e8),
        'platformUid': p$DE[_[26352]],
        'type': hiljm,
        'serverId': ljmnk
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['p$DEBC'] = function (zvxu) {
    sendApi(p$DE[_[31779]], _[31976], {
        'partner_id': p$DE[_[12172]],
        'uid': p$DE[_[26349]],
        'version': p$DE[_[4945]],
        'game_pkg': p$DE[_[26351]],
        'device': p$DE[_[26353]]
    }, p$DECB, p$CED, p$EB);
}, window['p$DECB'] = function (qports) {
    if (qports && qports[_[1257]] === _[9665] && qports[_[11]]) {
        qports[_[11]][_[5145]]({
            'id': -0x2,
            'name': _[31977]
        }), qports[_[11]][_[5145]]({
            'id': -0x1,
            'name': _[31978]
        }), p$DE[_[31979]] = qports[_[11]];
        if (window[_[12354]]) window[_[12354]][_[31980]]();
    } else {
        p$DE[_[31981]] = ![];
        var tvusrq = qports ? qports[_[1257]] : '';
        window[_[31812]](0x7, _[31982] + tvusrq), window['p$BCDE'](_[31983] + tvusrq);
    }
}, window['p$BCD'] = function (squtrp) {
    sendApi(p$DE[_[31779]], _[31984], {
        'partner_id': p$DE[_[12172]],
        'uid': p$DE[_[26349]],
        'version': p$DE[_[4945]],
        'game_pkg': p$DE[_[26351]],
        'device': p$DE[_[26353]]
    }, p$BDC, p$CED, p$EB);
}, window['p$BDC'] = function (cedaf) {
    p$DE[_[31985]] = ![];
    if (cedaf && cedaf[_[1257]] === _[9665] && cedaf[_[11]]) {
        for (var ehdgfi = 0x0; ehdgfi < cedaf[_[11]][_[13]]; ehdgfi++) {
            cedaf[_[11]][ehdgfi][_[106]] = p$DCB(cedaf[_[11]][ehdgfi]);
        }
        p$DE[_[31788]][-0x1] = window[_[31986]](cedaf[_[11]]), window[_[12354]][_[31987]](-0x1);
    } else {
        var nlm = cedaf ? cedaf[_[1257]] : '';
        window[_[31812]](0x8, _[31988] + nlm), window['p$BCDE'](_[31989] + nlm);
    }
}, window[_[31990]] = function (efa) {
    sendApi(p$DE[_[31779]], _[31984], {
        'partner_id': p$DE[_[12172]],
        'uid': p$DE[_[26349]],
        'version': p$DE[_[4945]],
        'game_pkg': p$DE[_[26351]],
        'device': p$DE[_[26353]]
    }, efa, p$CED, p$EB);
}, window['p$CBD'] = function ($1z_2, pnomr) {
    sendApi(p$DE[_[31779]], _[31991], {
        'partner_id': p$DE[_[12172]],
        'uid': p$DE[_[26349]],
        'version': p$DE[_[4945]],
        'game_pkg': p$DE[_[26351]],
        'device': p$DE[_[26353]],
        'server_group_id': pnomr
    }, p$CDB, p$CED, p$EB);
}, window['p$CDB'] = function (molnpq) {
    p$DE[_[31985]] = ![];
    if (molnpq && molnpq[_[1257]] === _[9665] && molnpq[_[11]] && molnpq[_[11]][_[11]]) {
        var klgjhi = molnpq[_[11]][_[31992]],
            uyvwt = [];
        for (var hgjki = 0x0; hgjki < molnpq[_[11]][_[11]][_[13]]; hgjki++) {
            molnpq[_[11]][_[11]][hgjki][_[106]] = p$DCB(molnpq[_[11]][_[11]][hgjki]), (uyvwt[_[13]] == 0x0 || molnpq[_[11]][_[11]][hgjki][_[106]] != 0x0) && (uyvwt[uyvwt[_[13]]] = molnpq[_[11]][_[11]][hgjki]);
        }
        p$DE[_[31788]][klgjhi] = window[_[31986]](uyvwt), window[_[12354]][_[31987]](klgjhi);
    } else {
        var xvwust = molnpq ? molnpq[_[1257]] : '';
        window[_[31812]](0x9, _[31993] + xvwust), window['p$BCDE'](_[31994] + xvwust);
    }
}, window['p$ACED'] = function (lnomp) {
    sendApi(p$DE[_[31779]], _[31995], {
        'partner_id': p$DE[_[12172]],
        'uid': p$DE[_[26349]],
        'version': p$DE[_[4945]],
        'game_pkg': p$DE[_[26351]],
        'device': p$DE[_[26353]]
    }, reqServerRecommendCallBack, p$CED, p$EB);
}, window[_[31996]] = function (trqs) {
    p$DE[_[31985]] = ![];
    if (trqs && trqs[_[1257]] === _[9665] && trqs[_[11]]) {
        for (var fdegbc = 0x0; fdegbc < trqs[_[11]][_[13]]; fdegbc++) {
            trqs[_[11]][fdegbc][_[106]] = p$DCB(trqs[_[11]][fdegbc]);
        }
        p$DE[_[31788]][-0x2] = window[_[31986]](trqs[_[11]]), window[_[12354]][_[31987]](-0x2);
    } else {
        var dfhige = trqs ? trqs[_[1257]] : '';
        window[_[31812]](0xa, _[31997] + dfhige), alert(_[31998] + dfhige);
    }
}, window[_[31986]] = function ($_y01z) {
    return $_y01z;
}, window['p$DBC'] = function (ywvz$, pknmol) {
    ywvz$ = ywvz$ || p$DE[_[26345]][_[11363]], sendApi(p$DE[_[31779]], _[31999], {
        'type': '4',
        'game_pkg': p$DE[_[26351]],
        'server_id': ywvz$
    }, pknmol);
}, window[_[32000]] = function ($120, y_0$1, utsrp, fgechd) {
    utsrp = utsrp || p$DE[_[26345]][_[11363]], sendApi(p$DE[_[31779]], _[32001], {
        'type': $120,
        'game_pkg': y_0$1,
        'server_id': utsrp
    }, fgechd);
}, window[_[32002]] = function (xvywut, onqrm) {
    sendApi(p$DE[_[31779]], _[32003], { 'game_pkg': xvywut }, onqrm);
}, window['p$DCB'] = function (qnrp) {
    if (qnrp) {
        if (qnrp[_[106]] == 0x1) {
            if (qnrp[_[32004]] == 0x3) return 0x3;else return qnrp[_[32004]] == 0x1 ? 0x2 : 0x1;
        } else return qnrp[_[106]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['p$EBCD'] = function (dgei, jlimn) {
    p$DE[_[32005]] = {
        'step': dgei,
        'server_id': jlimn
    };
    var wvuxz = this;
    p$BDCE({ 'title': _[32006] }), sendApi(p$DE[_[31779]], _[32007], {
        'partner_id': p$DE[_[12172]],
        'uid': p$DE[_[26349]],
        'game_pkg': p$DE[_[26351]],
        'server_id': jlimn,
        'platform': p$DE[_[26312]],
        'platform_uid': p$DE[_[26352]],
        'check_login_time': p$DE[_[31876]],
        'check_login_sign': p$DE[_[31875]],
        'version_name': p$DE[_[31845]]
    }, p$EBDC, p$CED, p$EB, function (gfbce) {
        return gfbce[_[1257]] == _[9665] || gfbce[_[78]] == _[32008] || gfbce[_[78]] == _[32009];
    });
}, window['p$EBDC'] = function (wyxtvu) {
    var mkjnli = this;
    if (wyxtvu && wyxtvu[_[1257]] === _[9665] && wyxtvu[_[11]]) {
        var qro = p$DE[_[26345]];
        qro[_[32010]] = p$DE[_[31789]], qro[_[11346]] = String(wyxtvu[_[11]][_[32011]]), qro[_[26314]] = parseInt(wyxtvu[_[11]][_[893]]);
        if (wyxtvu[_[11]][_[26313]]) qro[_[26313]] = parseInt(wyxtvu[_[11]][_[26313]]);else qro[_[26313]] = parseInt(wyxtvu[_[11]][_[11363]]);
        qro[_[32012]] = 0x0, qro[_[4132]] = p$DE[_[31914]], qro[_[32013]] = wyxtvu[_[11]][_[32014]], qro[_[32015]] = wyxtvu[_[11]][_[32015]];
        if (wyxtvu[_[11]][_[26317]]) qro[_[26317]] = parseInt(wyxtvu[_[11]][_[26317]]);
        console[_[488]](_[32016] + JSON[_[4118]](qro[_[32015]])), p$DE[_[666]] == 0x1 && qro[_[32015]] && qro[_[32015]][_[32017]] == 0x1 && (p$DE[_[32018]] = 0x1, window[_[31685]][_[148]]['p$AED']()), p$ECBD();
    } else {
        if (p$DE[_[32005]][_[6739]] >= 0x3) {
            var trswvu = wyxtvu ? wyxtvu[_[1257]] : '';
            window[_[31812]](0xc, _[32019] + trswvu), p$EB(JSON[_[4118]](wyxtvu)), window['p$BCDE'](_[32020] + trswvu);
        } else sendApi(p$DE[_[31779]], _[31855], {
            'platform': p$DE[_[31777]],
            'partner_id': p$DE[_[12172]],
            'token': p$DE[_[31853]],
            'game_pkg': p$DE[_[26351]],
            'deviceId': p$DE[_[26353]],
            'scene': _[31856] + p$DE[_[31787]]
        }, function ($zxywv) {
            if (!$zxywv || $zxywv[_[1257]] != _[9665]) {
                window['p$BCDE'](_[31872] + $zxywv && $zxywv[_[1257]]);
                return;
            }
            p$DE[_[31875]] = String($zxywv[_[11346]]), p$DE[_[31876]] = String($zxywv[_[893]]), setTimeout(function () {
                p$EBCD(p$DE[_[32005]][_[6739]] + 0x1, p$DE[_[32005]][_[11363]]);
            }, 0x5dc);
        }, p$CED, p$EB, function (tswurv) {
            return tswurv[_[1257]] == _[9665] || tswurv[_[1257]] == _[26694];
        });
    }
}, window['p$ECBD'] = function () {
    ServerLoading[_[148]][_[31906]](p$DE[_[666]]), window['p$CE'] = !![], window['p$EDBC']();
}, window['p$ECDB'] = function () {
    if (window['p$EC'] && window['p$DCE'] && window[_[31795]] && window[_[31796]] && window['p$DEC'] && window['p$DC']) {
        if (!window[_[31223]][_[148]]) {
            console[_[488]](_[32021] + window[_[31223]][_[148]]);
            var jgikf = wx[_[26008]](),
                fgdeb = jgikf[_[818]] ? jgikf[_[818]] : 0x0,
                xtvusw = {
                'cdn': window['p$DE'][_[4132]],
                'spareCdn': window['p$DE'][_[26027]],
                'newRegister': window['p$DE'][_[666]],
                'wxPC': window['p$DE'][_[26031]],
                'wxIOS': window['p$DE'][_[1117]],
                'wxAndroid': window['p$DE'][_[11187]],
                'wxParam': {
                    'limitLoad': window['p$DE']['p$ABCED'],
                    'benchmarkLevel': window['p$DE']['p$ABDCE'],
                    'wxFrom': window[_[563]][_[31244]] == _[32022] ? 0x1 : 0x0,
                    'wxSDKVersion': window[_[31686]]
                },
                'configType': window['p$DE'][_[11889]],
                'exposeType': window['p$DE'][_[756]],
                'scene': fgdeb
            };
            new window[_[31223]](xtvusw, window['p$DE'][_[101]], window['p$ABCDE']);
        }
    }
}, window['p$EDBC'] = function () {
    if (window['p$EC'] && window['p$DCE'] && window[_[31795]] && window[_[31796]] && window['p$DEC'] && window['p$DC'] && window['p$CE'] && window['p$CD']) {
        p$BDEC();
        if (!p$ECD) {
            p$ECD = !![];
            if (!window[_[31223]][_[148]]) window['p$ECDB']();
            var defab = 0x0,
                vxyt = wx[_[32023]]();
            vxyt && (window['p$DE'][_[31742]] && (defab = vxyt[_[323]]), console[_[78]](_[32024] + vxyt[_[323]] + _[32025] + vxyt[_[1277]] + _[32026] + vxyt[_[1279]] + _[32027] + vxyt[_[1278]] + _[32028] + vxyt[_[179]] + _[32029] + vxyt[_[180]]));
            var stpru = {};
            for (const opsrtq in p$DE[_[26345]]) {
                stpru[opsrtq] = p$DE[_[26345]][opsrtq];
            }
            var tvyw = {
                'channel': window['p$DE'][_[12181]],
                'account': window['p$DE'][_[26349]],
                'userId': window['p$DE'][_[12170]],
                'cdn': window['p$DE'][_[4132]],
                'data': window['p$DE'][_[11]],
                'package': window['p$DE'][_[26028]],
                'newRegister': window['p$DE'][_[666]],
                'pkgName': window['p$DE'][_[26351]],
                'partnerId': window['p$DE'][_[12172]],
                'platform_uid': window['p$DE'][_[26352]],
                'deviceId': window['p$DE'][_[26353]],
                'selectedServer': stpru,
                'configType': window['p$DE'][_[11889]],
                'exposeType': window['p$DE'][_[756]],
                'debugUsers': window['p$DE'][_[12307]],
                'wxMenuTop': defab,
                'wxShield': window['p$DE'][_[780]],
                'wx_channel': window['p$DE'][_[26489]]
            };
            if (window[_[31916]]) for (var kfg in window[_[31916]]) {
                tvyw[kfg] = window[_[31916]][kfg];
            }
            window[_[31223]][_[148]]['p$EDA'](tvyw);
            if (p$DE[_[26345]] && p$DE[_[26345]][_[11363]]) localStorage[_[491]](_[31878] + p$DE[_[26351]] + p$DE[_[26349]], p$DE[_[26345]][_[11363]]);
        }
    } else console[_[78]](_[32030] + window['p$EC'] + _[32031] + window['p$DCE'] + _[32032] + window[_[31795]] + _[32033] + window[_[31796]] + _[32034] + window['p$DEC'] + _[32035] + window['p$DC'] + _[32036] + window['p$CE'] + _[32037] + window['p$CD']);
};