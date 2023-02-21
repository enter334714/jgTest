var _ = wx.y$;
import _dmlnj from '../bbbk/bbbsdk.js';
window[_[27025]] = { 'wxVersion': window[_[565]][_[35086]] }, window[_[35183]] = ![], window['p$ED'] = 0x1, window[_[35184]] = 0x1, window['p$CDE'] = !![], window[_[35185]] = !![], window['p$ABCDE'] = '', window[_[35186]] = ![], window['p$DE'] = {
    'base_cdn': _[35187],
    'cdn': _[35187]
}, p$DE[_[35188]] = {}, p$DE[_[27058]] = '0', p$DE[_[5248]] = window[_[27025]][_[35189]], p$DE[_[35158]] = '', p$DE['os'] = '1', p$DE[_[35190]] = _[35191], p$DE[_[35192]] = _[35193], p$DE[_[35194]] = _[35195], p$DE[_[35196]] = _[35197], p$DE[_[35198]] = _[35199], p$DE[_[12687]] = '1', p$DE[_[27417]] = '', p$DE[_[27419]] = '', p$DE[_[35200]] = 0x0, p$DE[_[35201]] = {}, p$DE[_[35202]] = parseInt(p$DE[_[12687]]), p$DE[_[12696]] = p$DE[_[12687]], p$DE[_[27411]] = {}, p$DE['p$BD'] = _[35203], p$DE[_[35204]] = ![], p$DE[_[12834]] = _[35205], p$DE[_[27371]] = Date[_[83]](), p$DE[_[4419]] = _[35206], p$DE[_[756]] = '_a', p$DE[_[27568]] = '', p$DE[_[35207]] = 0x2, p$DE[_[101]] = 0x7c1, p$DE[_[35189]] = window[_[27025]][_[35189]], p$DE[_[778]] = ![], p$DE[_[1133]] = ![], p$DE[_[11629]] = ![], p$DE[_[27060]] = ![], window['p$CED'] = 0x5, window['p$CE'] = ![], window['p$EC'] = ![], window['p$DCE'] = ![], window[_[35208]] = ![], window[_[35209]] = ![], window['p$DEC'] = ![], window['p$CD'] = ![], window['p$DC'] = ![], window['p$ECD'] = ![], window[_[35210]] = null, window[_[659]] = function (jknmlo) {
    console[_[490]](_[659], jknmlo), wx[_[4761]]({}), wx[_[35110]]({
        'title': _[6006],
        'content': jknmlo,
        'success'(nqm) {
            if (nqm[_[35211]]) console[_[490]](_[35212]);else nqm[_[561]] && console[_[490]](_[35213]);
        }
    });
}, window['p$BCDE'] = function (z1_02) {
    console[_[490]](_[35214], z1_02), p$BDEC(), wx[_[35110]]({
        'title': _[6006],
        'content': z1_02,
        'confirmText': _[35215],
        'cancelText': _[19737],
        'success'(qosnpr) {
            if (qosnpr[_[35211]]) window['p$DB']();else qosnpr[_[561]] && (console[_[490]](_[35216]), wx[_[27056]]({}));
        }
    });
}, window[_[35217]] = function (tqvrs) {
    console[_[490]](_[35217], tqvrs), wx[_[35110]]({
        'title': _[6006],
        'content': tqvrs,
        'confirmText': _[27553],
        'showCancel': ![],
        'complete'(wzuv) {
            console[_[490]](_[35216]), wx[_[27056]]({});
        }
    });
}, window['p$BCED'] = ![], window['p$BDCE'] = function (orsqt) {
    window['p$BCED'] = !![], wx[_[4760]](orsqt);
}, window['p$BDEC'] = function () {
    window['p$BCED'] && (window['p$BCED'] = ![], wx[_[4761]]({}));
}, window['p$BECD'] = function (_xy$w) {
    window[_[35101]][_[148]]['p$BECD'](_xy$w);
}, window[_[12703]] = function (z_yw$, uqvt) {
    _dmlnj[_[12703]](z_yw$, function (tusxvw) {
        tusxvw && tusxvw[_[11]] ? tusxvw[_[11]][_[1321]] == 0x1 ? uqvt(!![]) : (uqvt(![]), console[_[78]](_[35218] + tusxvw[_[11]][_[35219]])) : console[_[490]](_[12703], tusxvw);
    });
}, window['p$BEDC'] = function (nqpmor) {
    console[_[490]](_[35220], nqpmor);
}, window['p$BDE'] = function (dgbcfe) {}, window['p$BED'] = function (lqmp, lhjkim, vxwzy$) {}, window['p$BE'] = function (ilmnj) {
    console[_[490]](_[35221], ilmnj), window[_[35101]][_[148]][_[35222]](), window[_[35101]][_[148]][_[35223]](), window[_[35101]][_[148]][_[35224]](), window[_[35225]]();
}, window['p$EB'] = function (qnpo) {
    window[_[35226]](0xe, _[35227] + qnpo), window['p$BCDE'](_[35228]);
    var molknp = {
        'id': window['p$DE'][_[35091]],
        'role': window['p$DE'][_[4550]],
        'level': window['p$DE'][_[35092]],
        'account': window['p$DE'][_[27415]],
        'version': window['p$DE'][_[101]],
        'cdn': window['p$DE'][_[4417]],
        'pkgName': window['p$DE'][_[27417]],
        'gamever': window[_[565]][_[35086]],
        'serverid': window['p$DE'][_[27411]] ? window['p$DE'][_[27411]][_[11801]] : 0x0,
        'systemInfo': window[_[35093]],
        'error': _[35229],
        'stack': qnpo ? qnpo : _[35228]
    },
        ojlmnk = JSON[_[4403]](molknp);
    console[_[125]](_[35230] + ojlmnk), window['p$BD'](ojlmnk);
}, window[_[35226]] = function (wsutrv, olmknj) {
    sendApi(p$DE[_[35194]], _[35231], {
        'game_pkg': p$DE[_[27417]],
        'partner_id': p$DE[_[12687]],
        'server_id': p$DE[_[27411]] && p$DE[_[27411]][_[11801]] > 0x0 ? p$DE[_[27411]][_[11801]] : 0x0,
        'uid': p$DE[_[27415]] > 0x0 ? p$DE[_[27415]] : 0x0,
        'type': wsutrv,
        'info': olmknj
    });
}, window['p$DBE'] = function (ghdeif) {
    var w$xvz = JSON[_[533]](ghdeif);
    w$xvz[_[35232]] = window[_[565]][_[35086]], w$xvz[_[35233]] = window['p$DE'][_[27411]] ? window['p$DE'][_[27411]][_[11801]] : 0x0, w$xvz[_[35093]] = window[_[35093]];
    var fdecb = JSON[_[4403]](w$xvz);
    console[_[125]](_[35234] + fdecb), window['p$BD'](fdecb);
}, window['p$DEB'] = function (hgife, zuxvwy) {
    var $_z20 = {
        'id': window['p$DE'][_[35091]],
        'role': window['p$DE'][_[4550]],
        'level': window['p$DE'][_[35092]],
        'account': window['p$DE'][_[27415]],
        'version': window['p$DE'][_[101]],
        'cdn': window['p$DE'][_[4417]],
        'pkgName': window['p$DE'][_[27417]],
        'gamever': window[_[565]][_[35086]],
        'serverid': window['p$DE'][_[27411]] ? window['p$DE'][_[27411]][_[11801]] : 0x0,
        'systemInfo': window[_[35093]],
        'error': hgife,
        'stack': zuxvwy
    },
        stqvu = JSON[_[4403]]($_z20);
    console[_[96]](_[35235] + stqvu), window['p$BD'](stqvu);
}, window['p$BD'] = function (ikfj) {
    if (window['p$DE'][_[35159]] == _[35236]) return;
    var snpr = p$DE['p$BD'] + _[35237] + p$DE[_[27415]];
    wx[_[485]]({
        'url': snpr,
        'method': _[34429],
        'data': ikfj,
        'header': {
            'content-type': _[35238],
            'cache-control': _[35239]
        },
        'success': function (khgjf) {
            DEBUG && console[_[490]](_[35240], snpr, ikfj, khgjf);
        },
        'fail': function (gedcf) {
            DEBUG && console[_[490]](_[35240], snpr, ikfj, gedcf);
        },
        'complete': function () {}
    });
}, window[_[35241]] = function () {
    function lmin() {
        return ((0x1 + Math[_[119]]()) * 0x10000 | 0x0)[_[274]](0x10)[_[505]](0x1);
    }
    return lmin() + lmin() + '-' + lmin() + '-' + lmin() + '-' + lmin() + '+' + lmin() + lmin() + lmin();
}, window['p$DB'] = function () {
    console[_[490]](_[35242]);
    var vusqt = _dmlnj[_[32939]]();
    p$DE[_[12696]] = vusqt[_[35243]], p$DE[_[35202]] = vusqt[_[35243]], p$DE[_[12687]] = vusqt[_[35243]], p$DE[_[27417]] = vusqt[_[35244]];
    var ec = { 'game_ver': p$DE[_[5248]] };
    p$DE[_[27419]] = this[_[35241]](), p$BDCE({ 'title': _[35245] }), _dmlnj[_[371]](ec, this['p$EBD'][_[74]](this));
};
var wx_develop = ![];
window['p$EBD'] = function (qmpnl) {
    var mhlj = qmpnl[_[35246]];
    sdkInitRes = qmpnl, wx_develop = mhlj == 0x1, console[_[490]](_[35247] + mhlj + _[35248] + (mhlj == 0x1) + _[35249] + qmpnl[_[35086]] + _[35250] + window[_[27025]][_[35189]] + _[35251] + qmpnl[_[4420]]);
    if (!qmpnl[_[35086]] || window['p$ACEBD'](window[_[27025]][_[35189]], qmpnl[_[35086]]) < 0x0) console[_[490]](_[35252]), p$DE[_[35192]] = _[35253], p$DE[_[35194]] = _[35254], p$DE[_[35196]] = _[35255], p$DE[_[4417]] = _[35256], p$DE[_[27057]] = _[35257], p$DE[_[4420]] = qmpnl[_[4420]], p$DE[_[778]] = ![];else window['p$ACEBD'](window[_[27025]][_[35189]], qmpnl[_[35086]]) == 0x0 ? (console[_[490]](_[35258]), p$DE[_[35192]] = _[35193], p$DE[_[35194]] = _[35195], p$DE[_[35196]] = _[35197], p$DE[_[4417]] = _[35259], p$DE[_[27057]] = _[35257], p$DE[_[4420]] = _[35260], p$DE[_[778]] = !![]) : (console[_[490]](_[35261]), p$DE[_[35192]] = _[35193], p$DE[_[35194]] = _[35195], p$DE[_[35196]] = _[35197], p$DE[_[4417]] = _[35259], p$DE[_[27057]] = _[35257], p$DE[_[4420]] = _[35260], p$DE[_[778]] = ![]);
    p$DE[_[35200]] = config[_[31077]] ? config[_[31077]] : 0x0, this['p$CDBE'](), this['p$CDEB'](), window[_[35262]] = 0x5, p$BDCE({ 'title': _[35263] }), _dmlnj[_[34423]](this['p$EDB'][_[74]](this));
}, window[_[35262]] = 0x5, window['p$EDB'] = function (cgf, ijkmh) {
    if (cgf == 0x0 && ijkmh && ijkmh[_[34603]]) {
        p$DE[_[35264]] = ijkmh[_[34603]], p$DE[_[27566]] = ijkmh[_[27566]], p$DE[_[27561]] = ijkmh[_[27561]], p$DE[_[27567]] = ijkmh[_[27567]], p$DE[_[27560]] = ijkmh[_[27560]];
        var kjghli = this;
        p$BDCE({ 'title': _[35265] }), sendApi(p$DE[_[35192]], _[35266], {
            'platform': p$DE[_[35190]],
            'partner_id': p$DE[_[12687]],
            'token': ijkmh[_[34603]],
            'game_pkg': p$DE[_[27417]],
            'deviceId': p$DE[_[27419]],
            'scene': _[35267] + p$DE[_[35200]]
        }, this['p$CBDE'][_[74]](this), p$CED, p$EB);
    } else ijkmh && ijkmh[_[27625]] && window[_[35262]] > 0x0 && (ijkmh[_[27625]][_[115]](_[35268]) != -0x1 || ijkmh[_[27625]][_[115]](_[35269]) != -0x1 || ijkmh[_[27625]][_[115]](_[35270]) != -0x1 || ijkmh[_[27625]][_[115]](_[35271]) != -0x1 || ijkmh[_[27625]][_[115]](_[35272]) != -0x1 || ijkmh[_[27625]][_[115]](_[35273]) != -0x1) ? (window[_[35262]]--, _dmlnj[_[34423]](this['p$EDB'][_[74]](this))) : (window[_[35226]](0x1, _[35274] + cgf + _[35275] + (ijkmh ? ijkmh[_[27625]] : '')), window['p$DEB'](_[35276], JSON[_[4403]]({
        'status': cgf,
        'data': ijkmh
    })), window['p$BCDE'](_[35277] + (ijkmh && ijkmh[_[27625]] ? '，' + ijkmh[_[27625]] : '')));
}, window['p$CBDE'] = function (ijlhgk) {
    if (!ijlhgk) {
        window[_[35226]](0x2, _[35278]), window['p$DEB'](_[35279], _[35280]), window['p$BCDE'](_[35281]);
        return;
    }
    if (ijlhgk[_[1321]] != _[10103]) {
        window[_[35226]](0x2, _[35282] + ijlhgk[_[1321]]), window['p$DEB'](_[35279], JSON[_[4403]](ijlhgk)), window['p$BCDE'](_[35283] + ijlhgk[_[1321]]);
        return;
    }
    p$DE[_[12685]] = String(ijlhgk[_[27415]]), p$DE[_[27415]] = String(ijlhgk[_[27415]]), p$DE[_[27369]] = String(ijlhgk[_[27369]]), p$DE[_[12696]] = String(ijlhgk[_[27369]]), p$DE[_[27418]] = String(ijlhgk[_[27418]]), p$DE[_[35284]] = String(ijlhgk[_[11784]]), p$DE[_[35285]] = String(ijlhgk[_[909]]), p$DE[_[11784]] = '';
    var swvtr = this;
    p$BDCE({ 'title': _[35286] });
    var wz$xv = localStorage[_[488]](_[35287] + p$DE[_[27417]] + p$DE[_[27415]]);
    if (wz$xv && wz$xv != '') {
        var wvutxy = Number(wz$xv);
        swvtr[_[35288]](wvutxy);
    } else swvtr[_[35289]]();
}, window[_[35289]] = function () {
    var opsq = this;
    sendApi(p$DE[_[35192]], _[35290], {
        'partner_id': p$DE[_[12687]],
        'uid': p$DE[_[27415]],
        'version': p$DE[_[5248]],
        'game_pkg': p$DE[_[27417]],
        'device': p$DE[_[27419]]
    }, opsq['p$CBED'][_[74]](opsq), p$CED, p$EB);
}, window['p$CBED'] = function (qvt) {
    if (!qvt) {
        window[_[35226]](0x3, _[35291]), window['p$BCDE'](_[35291]);
        return;
    }
    if (qvt[_[1321]] != _[10103]) {
        window[_[35226]](0x3, _[35292] + qvt[_[1321]]), window['p$BCDE'](_[35292] + qvt[_[1321]]);
        return;
    }
    if (!qvt[_[11]] || qvt[_[11]][_[13]] == 0x0) {
        window[_[35226]](0x3, _[35293]), window['p$BCDE'](_[35294]);
        return;
    }
    this[_[35295]](qvt);
}, window[_[35288]] = function (ywvzu) {
    var x_$wyz = this;
    sendApi(p$DE[_[35192]], _[35296], {
        'server_id': ywvzu,
        'time': Date[_[83]]() / 0x3e8
    }, x_$wyz[_[35297]][_[74]](x_$wyz), p$CED, p$EB);
}, window[_[35297]] = function (rpsoq) {
    if (!rpsoq) {
        window[_[35226]](0x4, _[35298]), this[_[35289]]();
        return;
    }
    if (rpsoq[_[1321]] != _[10103]) {
        window[_[35226]](0x4, _[35299] + rpsoq[_[1321]]), this[_[35289]]();
        return;
    }
    if (!rpsoq[_[11]] || rpsoq[_[11]][_[13]] == 0x0) {
        window[_[35226]](0x4, _[35300]), this[_[35289]]();
        return;
    }
    this[_[35295]](rpsoq);
}, window[_[35295]] = function (gehc) {
    p$DE[_[670]] = gehc[_[35301]] != undefined ? gehc[_[35301]] : 0x0, p$DE[_[27411]] = {
        'server_id': String(gehc[_[11]][0x0][_[11801]]),
        'server_name': String(gehc[_[11]][0x0][_[27416]]),
        'entry_ip': gehc[_[11]][0x0][_[27439]],
        'entry_port': parseInt(gehc[_[11]][0x0][_[27440]]),
        'status': p$DCB(gehc[_[11]][0x0]),
        'start_time': gehc[_[11]][0x0][_[35302]],
        'maintain_time': gehc[_[11]][0x0][_[35303]] ? gehc[_[11]][0x0][_[35303]] : '',
        'is_recommend': gehc[_[11]][0x0][_[35304]],
        'cdn': p$DE[_[4417]]
    }, this['p$EDCB'](), window[_[35101]] && window[_[35101]][_[148]][_[35305]] && window[_[35101]][_[148]][_[35305]](sdkInitRes[_[35306]], sdkInitRes[_[35307]], sdkInitRes[_[35308]], sdkInitRes[_[35309]], sdkInitRes[_[35310]]);
}, window['p$EDCB'] = function () {
    if (p$DE[_[670]] == 0x1) {
        var ej = p$DE[_[27411]][_[106]];
        if (ej === -0x1 || ej === 0x0) {
            window[_[35226]](0xf, _[35311] + p$DE[_[27411]]['id'] + _[35312] + p$DE[_[27411]][_[106]]), window['p$BCDE'](ej === -0x1 ? _[35313] : _[35314]);
            return;
        }
        p$EBCD(0x0, p$DE[_[27411]][_[11801]]), window[_[35101]][_[148]][_[35315]](p$DE[_[670]]);
    } else window[_[35101]][_[148]][_[35316]](), p$BDEC();
    window['p$DC'] = !![], window[_[35317]](), window['p$ECDB'](), window['p$EDBC']();
}, window['p$CDBE'] = function () {
    sendApi(p$DE[_[35192]], _[35318], {
        'game_pkg': p$DE[_[27417]],
        'version_name': p$DE[_[4420]]
    }, this[_[35319]][_[74]](this), p$CED, p$EB);
}, window[_[35319]] = function (tyxw) {
    if (!tyxw) {
        window[_[35226]](0x5, _[35320]), window['p$BCDE'](_[35320]);
        return;
    }
    if (tyxw[_[1321]] != _[10103]) {
        window[_[35226]](0x5, _[35321] + tyxw[_[1321]]), window['p$BCDE'](_[35321] + tyxw[_[1321]]);
        return;
    }
    if (!tyxw[_[11]] || !tyxw[_[11]][_[5248]]) {
        window[_[35226]](0x5, _[35322] + (tyxw[_[11]] && tyxw[_[11]][_[5248]])), window['p$BCDE'](_[35322] + (tyxw[_[11]] && tyxw[_[11]][_[5248]]));
        return;
    }
    tyxw[_[11]][_[35323]] && tyxw[_[11]][_[35323]][_[13]] > 0xa && (p$DE[_[35324]] = tyxw[_[11]][_[35323]], p$DE[_[4417]] = tyxw[_[11]][_[35323]]), tyxw[_[11]][_[5248]] && (p$DE[_[101]] = tyxw[_[11]][_[5248]]), console[_[78]](_[27563] + p$DE[_[101]] + _[35325] + p$DE[_[4420]]), window['p$DEC'] = !![], window['p$ECDB'](), window['p$EDBC']();
}, window[_[35326]], window['p$CDEB'] = function () {
    sendApi(p$DE[_[35192]], _[35327], { 'game_pkg': p$DE[_[27417]] }, this['p$CEBD'][_[74]](this), p$CED, p$EB);
}, window['p$CEBD'] = function (egjif) {
    if (egjif && egjif[_[1321]] === _[10103] && egjif[_[11]]) {
        window[_[35326]] = egjif[_[11]];
        for (var _zy$1 in egjif[_[11]]) {
            p$DE[_zy$1] = egjif[_[11]][_zy$1];
        }
    } else window[_[35226]](0xb, _[35328]), console[_[78]](_[35329] + egjif[_[1321]]);
    window['p$CD'] = !![], window[_[35317]](), window['p$EDBC']();
}, window[_[35330]] = function (yz$0x_, egfdhi, dfbae, z0x_y$, nmpok, hgcfde, bcegd, lkmijh, wuytv, prqto) {
    nmpok = String(nmpok);
    var tywvu = bcegd,
        lomnkj = lkmijh;
    p$DE[_[35188]][nmpok] = {
        'productid': nmpok,
        'productname': tywvu,
        'productdesc': lomnkj,
        'roleid': yz$0x_,
        'rolename': egfdhi,
        'rolelevel': dfbae,
        'price': hgcfde,
        'callback': wuytv
    }, sendApi(p$DE[_[35196]], _[35331], {
        'game_pkg': p$DE[_[27417]],
        'server_id': p$DE[_[27411]][_[11801]],
        'server_name': p$DE[_[27411]][_[27416]],
        'level': dfbae,
        'uid': p$DE[_[27415]],
        'role_id': yz$0x_,
        'role_name': egfdhi,
        'product_id': nmpok,
        'product_name': tywvu,
        'product_desc': lomnkj,
        'money': hgcfde,
        'partner_id': p$DE[_[12687]]
    }, toPayCallBack, p$CED, p$EB);
}, window[_[35332]] = function (jiknm) {
    if (jiknm && (jiknm[_[35333]] === 0xc8 || jiknm[_[1321]] == _[10103])) {
        var jmnikl = p$DE[_[35188]][String(jiknm[_[35334]])];
        if (jmnikl[_[337]]) jmnikl[_[337]](jiknm[_[35334]], jiknm[_[35335]], -0x1);
        _dmlnj[_[34455]]({
            'cpbill': jiknm[_[35335]],
            'productid': jiknm[_[35334]],
            'productname': jmnikl[_[35336]],
            'productdesc': jmnikl[_[35337]],
            'serverid': p$DE[_[27411]][_[11801]],
            'servername': p$DE[_[27411]][_[27416]],
            'roleid': jmnikl[_[12691]],
            'rolename': jmnikl[_[12692]],
            'rolelevel': jmnikl[_[35338]],
            'price': jmnikl[_[29395]],
            'extension': JSON[_[4403]]({ 'cp_order_id': jiknm[_[35335]] })
        }, function (iljmh, _z01) {
            jmnikl[_[337]] && iljmh == 0x0 && jmnikl[_[337]](jiknm[_[35334]], jiknm[_[35335]], iljmh);
            console[_[78]](JSON[_[4403]]({
                'type': _[35339],
                'status': iljmh,
                'data': jiknm,
                'role_name': jmnikl[_[12692]]
            }));
            if (iljmh === 0x0) {} else {
                if (iljmh === 0x1) {} else {
                    if (iljmh === 0x2) {}
                }
            }
        });
    } else {
        var zyw$_ = jiknm ? _[35340] + jiknm[_[35333]] + _[35341] + jiknm[_[1321]] + _[35342] + jiknm[_[78]] : _[35343];
        window[_[35226]](0xd, _[35344] + zyw$_), alert(zyw$_);
    }
}, window['p$CEDB'] = function () {}, window['p$BCE'] = function (z_wy, uwtvs, mjh, rpstqu, njok) {
    _dmlnj[_[34483]](p$DE[_[27411]][_[11801]], p$DE[_[27411]][_[27416]] || p$DE[_[27411]][_[11801]], z_wy, uwtvs, mjh), sendApi(p$DE[_[35192]], _[35345], {
        'game_pkg': p$DE[_[27417]],
        'server_id': p$DE[_[27411]][_[11801]],
        'role_id': z_wy,
        'uid': p$DE[_[27415]],
        'role_name': uwtvs,
        'role_type': rpstqu,
        'level': mjh
    });
}, window['p$BEC'] = function (tvuxyw, fdbca, xtuy, ywzvxu, fhgk, bfecgd, utxwv, efihj, lmojkn, dcabef) {
    p$DE[_[35091]] = tvuxyw, p$DE[_[4550]] = fdbca, p$DE[_[35092]] = xtuy, _dmlnj[_[34484]](p$DE[_[27411]][_[11801]], p$DE[_[27411]][_[27416]] || p$DE[_[27411]][_[11801]], tvuxyw, fdbca, xtuy), sendApi(p$DE[_[35192]], _[35346], {
        'game_pkg': p$DE[_[27417]],
        'server_id': p$DE[_[27411]][_[11801]],
        'role_id': tvuxyw,
        'uid': p$DE[_[27415]],
        'role_name': fdbca,
        'role_type': ywzvxu,
        'level': xtuy,
        'evolution': fhgk
    });
}, window['p$CBE'] = function (abdf, $1_zy, pomqnr, gcdef, omqlp, z201, swtrvu, rnqop, $yvxwz, hiljkm) {
    p$DE[_[35091]] = abdf, p$DE[_[4550]] = $1_zy, p$DE[_[35092]] = pomqnr, _dmlnj[_[34485]](p$DE[_[27411]][_[11801]], p$DE[_[27411]][_[27416]] || p$DE[_[27411]][_[11801]], abdf, $1_zy, pomqnr), sendApi(p$DE[_[35192]], _[35346], {
        'game_pkg': p$DE[_[27417]],
        'server_id': p$DE[_[27411]][_[11801]],
        'role_id': abdf,
        'uid': p$DE[_[27415]],
        'role_name': $1_zy,
        'role_type': gcdef,
        'level': pomqnr,
        'evolution': omqlp
    });
}, window['p$CEB'] = function (urtqps) {}, window['p$BC'] = function (xvuywz, begd) {
    _dmlnj[_[34439]](_[34439], { 'activity_id': begd }, function (svxwt) {
        xvuywz && xvuywz(svxwt);
    });
}, window[_[25217]] = function () {
    _dmlnj[_[25217]]();
}, window[_[35347]] = function () {
    _dmlnj[_[25093]]();
}, window[_[35348]] = function (uxvyzw, $2_13, dheg, lknmo, hgjkl, $wvyzx, xtuyw, z20$1_) {
    z20$1_ = z20$1_ || p$DE[_[27411]][_[11801]], sendApi(p$DE[_[35192]], _[35349], {
        'phone': uxvyzw,
        'role_id': $2_13,
        'uid': p$DE[_[27415]],
        'game_pkg': p$DE[_[27417]],
        'partner_id': p$DE[_[12687]],
        'server_id': z20$1_
    }, xtuyw, 0x2, null, function () {
        return !![];
    });
}, window[_[11121]] = function (yxz$w) {
    window['p$EBC'] = yxz$w, window['p$EBC'] && window['p$CB'] && (console[_[78]](_[35175] + window['p$CB'][_[834]]), window['p$EBC'](window['p$CB']), window['p$CB'] = null);
}, window['p$ECB'] = function (vytwux, ropqt, vusqrt, wuyvxt) {
    window[_[22]](_[35350], {
        'game_pkg': window['p$DE'][_[27417]],
        'role_id': ropqt,
        'server_id': vusqrt
    }, wuyvxt);
}, window['p$DBCE'] = function (x$wzvy, hgkf, qspur) {
    function nqporm(hife) {
        var otpqrs = [],
            rspuq = [],
            w$yvx = qspur || window[_[565]][_[35351]];
        for (var pkoln in w$yvx) {
            var ruwt = Number(pkoln);
            (!x$wzvy || !x$wzvy[_[13]] || x$wzvy[_[115]](ruwt) != -0x1) && (rspuq[_[29]](w$yvx[pkoln]), otpqrs[_[29]]([ruwt, 0x3]));
        }
        window['p$ACEBD'](window[_[35102]], _[35352]) >= 0x0 ? (console[_[490]](_[35353]), _dmlnj[_[34480]] && _dmlnj[_[34480]](rspuq, function ($xyzwv) {
            console[_[490]](_[35354]), console[_[490]]($xyzwv);
            if ($xyzwv && $xyzwv[_[27625]] == _[35355]) for (var $vzxy in w$yvx) {
                if ($xyzwv[w$yvx[$vzxy]] == _[35356]) {
                    var tsrvq = Number($vzxy);
                    for (var fghid = 0x0; fghid < otpqrs[_[13]]; fghid++) {
                        if (otpqrs[fghid][0x0] == tsrvq) {
                            otpqrs[fghid][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['p$ACEBD'](window[_[35102]], _[35357]) >= 0x0 ? wx[_[35358]]({
                'withSubscriptions': !![],
                'success': function (monlqp) {
                    var $yxz = monlqp[_[35359]][_[35360]];
                    if ($yxz) {
                        console[_[490]](_[35361]), console[_[490]]($yxz);
                        for (var kjnoml in w$yvx) {
                            if ($yxz[w$yvx[kjnoml]] == _[35356]) {
                                var y$_0 = Number(kjnoml);
                                for (var nlqop = 0x0; nlqop < otpqrs[_[13]]; nlqop++) {
                                    if (otpqrs[nlqop][0x0] == y$_0) {
                                        otpqrs[nlqop][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[_[490]](otpqrs), hgkf && hgkf(otpqrs);
                    } else console[_[490]](_[35362]), console[_[490]](monlqp), console[_[490]](otpqrs), hgkf && hgkf(otpqrs);
                },
                'fail': function () {
                    console[_[490]](_[35363]), console[_[490]](otpqrs), hgkf && hgkf(otpqrs);
                }
            }) : (console[_[490]](_[35364] + window[_[35102]]), console[_[490]](otpqrs), hgkf && hgkf(otpqrs));
        })) : (console[_[490]](_[35365] + window[_[35102]]), console[_[490]](otpqrs), hgkf && hgkf(otpqrs)), wx[_[35366]](nqporm);
    }
    wx[_[35367]](nqporm);
}, window['p$DBEC'] = {
    'isSuccess': ![],
    'level': _[31087],
    'isCharging': ![]
}, window['p$DCBE'] = function (bge) {
    wx[_[35167]]({
        'success': function (_1$z2) {
            var wyvtux = window['p$DBEC'];
            wyvtux[_[35368]] = !![], wyvtux[_[4526]] = Number(_1$z2[_[4526]])[_[4108]](0x0), wyvtux[_[35170]] = _1$z2[_[35170]], bge && bge(wyvtux[_[35368]], wyvtux[_[4526]], wyvtux[_[35170]]);
        },
        'fail': function (z1$20) {
            console[_[490]](_[35369], z1$20[_[27625]]);
            var ilkmj = window['p$DBEC'];
            bge && bge(ilkmj[_[35368]], ilkmj[_[4526]], ilkmj[_[35170]]);
        }
    });
}, window[_[12182]] = function ($_2z) {
    wx[_[12182]]({
        'success': function (srqtop) {
            $_2z && $_2z(!![], srqtop);
        },
        'fail': function (fhcge) {
            $_2z && $_2z(![], fhcge);
        }
    });
}, window[_[12184]] = function (nrmqpo) {
    if (nrmqpo) wx[_[12184]](nrmqpo);
}, window[_[27052]] = function (_123) {
    wx[_[27052]](_123);
}, window[_[22]] = function (khimj, x$zw, kfgi, zx_wy$, uyxtv, qnosrp, ihlgj, mnjki) {
    if (zx_wy$ == undefined) zx_wy$ = 0x1;
    wx[_[485]]({
        'url': khimj,
        'method': ihlgj || _[27279],
        'responseType': _[4312],
        'data': x$zw,
        'header': { 'content-type': mnjki || _[35238] },
        'success': function (afed) {
            DEBUG && console[_[490]](_[35370], khimj, info, afed);
            if (afed && afed[_[27694]] == 0xc8) {
                var cbefg = afed[_[11]];
                !qnosrp || qnosrp(cbefg) ? kfgi && kfgi(cbefg) : window[_[35371]](khimj, x$zw, kfgi, zx_wy$, uyxtv, qnosrp, afed);
            } else window[_[35371]](khimj, x$zw, kfgi, zx_wy$, uyxtv, qnosrp, afed);
        },
        'fail': function (hgifj) {
            DEBUG && console[_[490]](_[35372], khimj, info, hgifj), window[_[35371]](khimj, x$zw, kfgi, zx_wy$, uyxtv, qnosrp, hgifj);
        },
        'complete': function () {}
    });
}, window[_[35371]] = function (dhgfi, gfched, iehfd, suqp, xtuvsw, opnrm, cdehf) {
    suqp - 0x1 > 0x0 ? setTimeout(function () {
        window[_[22]](dhgfi, gfched, iehfd, suqp - 0x1, xtuvsw, opnrm);
    }, 0x3e8) : xtuvsw && xtuvsw(JSON[_[4403]]({
        'url': dhgfi,
        'response': cdehf
    }));
}, window[_[35373]] = function (cfde, swtvru, jlkni, $zwy_, hecgd, fgehji, uwrtsv) {
    !jlkni && (jlkni = {});
    var fbdeg = Math[_[118]](Date[_[83]]() / 0x3e8);
    jlkni[_[909]] = fbdeg, jlkni[_[35374]] = swtvru;
    var aecbf = Object[_[265]](jlkni)[_[1137]](),
        pqso = '',
        jklimh = '';
    for (var wvuxst = 0x0; wvuxst < aecbf[_[13]]; wvuxst++) {
        pqso = pqso + (wvuxst == 0x0 ? '' : '&') + aecbf[wvuxst] + jlkni[aecbf[wvuxst]], jklimh = jklimh + (wvuxst == 0x0 ? '' : '&') + aecbf[wvuxst] + '=' + encodeURIComponent(jlkni[aecbf[wvuxst]]);
    }
    pqso = pqso + p$DE[_[35198]];
    var z$_0y = _[35375] + md5(pqso);
    send(cfde + '?' + jklimh + (jklimh == '' ? '' : '&') + z$_0y, null, $zwy_, hecgd, fgehji, uwrtsv || function (y$wvxz) {
        return y$wvxz[_[1321]] == _[10103];
    }, null, _[34430]);
}, window['p$DCEB'] = function (giehf, efbdgc) {
    var ywtu = 0x0;
    p$DE[_[27411]] && (ywtu = p$DE[_[27411]][_[11801]]), sendApi(p$DE[_[35194]], _[35376], {
        'partnerId': p$DE[_[12687]],
        'gamePkg': p$DE[_[27417]],
        'logTime': Math[_[118]](Date[_[83]]() / 0x3e8),
        'platformUid': p$DE[_[27418]],
        'type': giehf,
        'serverId': ywtu
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['p$DEBC'] = function (utsprq) {
    sendApi(p$DE[_[35192]], _[35377], {
        'partner_id': p$DE[_[12687]],
        'uid': p$DE[_[27415]],
        'version': p$DE[_[5248]],
        'game_pkg': p$DE[_[27417]],
        'device': p$DE[_[27419]]
    }, p$DECB, p$CED, p$EB);
}, window['p$DECB'] = function (vxwus) {
    if (vxwus && vxwus[_[1321]] === _[10103] && vxwus[_[11]]) {
        vxwus[_[11]][_[5439]]({
            'id': -0x2,
            'name': _[35378]
        }), vxwus[_[11]][_[5439]]({
            'id': -0x1,
            'name': _[35379]
        }), p$DE[_[35380]] = vxwus[_[11]];
        if (window[_[12881]]) window[_[12881]][_[35381]]();
    } else {
        p$DE[_[35382]] = ![];
        var dafbce = vxwus ? vxwus[_[1321]] : '';
        window[_[35226]](0x7, _[35383] + dafbce), window['p$BCDE'](_[35384] + dafbce);
    }
}, window['p$BCD'] = function (jmkln) {
    sendApi(p$DE[_[35192]], _[35385], {
        'partner_id': p$DE[_[12687]],
        'uid': p$DE[_[27415]],
        'version': p$DE[_[5248]],
        'game_pkg': p$DE[_[27417]],
        'device': p$DE[_[27419]]
    }, p$BDC, p$CED, p$EB);
}, window['p$BDC'] = function (trusv) {
    p$DE[_[35386]] = ![];
    if (trusv && trusv[_[1321]] === _[10103] && trusv[_[11]]) {
        for (var gfdeb = 0x0; gfdeb < trusv[_[11]][_[13]]; gfdeb++) {
            trusv[_[11]][gfdeb][_[106]] = p$DCB(trusv[_[11]][gfdeb]);
        }
        p$DE[_[35201]][-0x1] = window[_[35387]](trusv[_[11]]), window[_[12881]][_[35388]](-0x1);
    } else {
        var xwuyvt = trusv ? trusv[_[1321]] : '';
        window[_[35226]](0x8, _[35389] + xwuyvt), window['p$BCDE'](_[35390] + xwuyvt);
    }
}, window[_[35391]] = function (jmiln) {
    sendApi(p$DE[_[35192]], _[35385], {
        'partner_id': p$DE[_[12687]],
        'uid': p$DE[_[27415]],
        'version': p$DE[_[5248]],
        'game_pkg': p$DE[_[27417]],
        'device': p$DE[_[27419]]
    }, jmiln, p$CED, p$EB);
}, window['p$CBD'] = function (_013, ijhl) {
    sendApi(p$DE[_[35192]], _[35392], {
        'partner_id': p$DE[_[12687]],
        'uid': p$DE[_[27415]],
        'version': p$DE[_[5248]],
        'game_pkg': p$DE[_[27417]],
        'device': p$DE[_[27419]],
        'server_group_id': ijhl
    }, p$CDB, p$CED, p$EB);
}, window['p$CDB'] = function (fadce) {
    p$DE[_[35386]] = ![];
    if (fadce && fadce[_[1321]] === _[10103] && fadce[_[11]] && fadce[_[11]][_[11]]) {
        var qoprst = fadce[_[11]][_[35393]],
            soptrq = [];
        for (var higedf = 0x0; higedf < fadce[_[11]][_[11]][_[13]]; higedf++) {
            fadce[_[11]][_[11]][higedf][_[106]] = p$DCB(fadce[_[11]][_[11]][higedf]), (soptrq[_[13]] == 0x0 || fadce[_[11]][_[11]][higedf][_[106]] != 0x0) && (soptrq[soptrq[_[13]]] = fadce[_[11]][_[11]][higedf]);
        }
        p$DE[_[35201]][qoprst] = window[_[35387]](soptrq), window[_[12881]][_[35388]](qoprst);
    } else {
        var oqlnmp = fadce ? fadce[_[1321]] : '';
        window[_[35226]](0x9, _[35394] + oqlnmp), window['p$BCDE'](_[35395] + oqlnmp);
    }
}, window['p$ACED'] = function (urswt) {
    sendApi(p$DE[_[35192]], _[35396], {
        'partner_id': p$DE[_[12687]],
        'uid': p$DE[_[27415]],
        'version': p$DE[_[5248]],
        'game_pkg': p$DE[_[27417]],
        'device': p$DE[_[27419]]
    }, reqServerRecommendCallBack, p$CED, p$EB);
}, window[_[35397]] = function ($x0yz) {
    p$DE[_[35386]] = ![];
    if ($x0yz && $x0yz[_[1321]] === _[10103] && $x0yz[_[11]]) {
        for (var opl = 0x0; opl < $x0yz[_[11]][_[13]]; opl++) {
            $x0yz[_[11]][opl][_[106]] = p$DCB($x0yz[_[11]][opl]);
        }
        p$DE[_[35201]][-0x2] = window[_[35387]]($x0yz[_[11]]), window[_[12881]][_[35388]](-0x2);
    } else {
        var tosqp = $x0yz ? $x0yz[_[1321]] : '';
        window[_[35226]](0xa, _[35398] + tosqp), alert(_[35399] + tosqp);
    }
}, window[_[35387]] = function (ihkjml) {
    return ihkjml;
}, window['p$DBC'] = function (zwvyu, $_1z20) {
    zwvyu = zwvyu || p$DE[_[27411]][_[11801]], sendApi(p$DE[_[35192]], _[35400], {
        'type': '4',
        'game_pkg': p$DE[_[27417]],
        'server_id': zwvyu
    }, $_1z20);
}, window[_[35401]] = function (kim, qpt, xtvswu, lnpokm) {
    xtvswu = xtvswu || p$DE[_[27411]][_[11801]], sendApi(p$DE[_[35192]], _[35402], {
        'type': kim,
        'game_pkg': qpt,
        'server_id': xtvswu
    }, lnpokm);
}, window[_[35403]] = function (mjnlik, mrqpo) {
    sendApi(p$DE[_[35192]], _[35404], { 'game_pkg': mjnlik }, mrqpo);
}, window['p$DCB'] = function (zw_$y) {
    if (zw_$y) {
        if (zw_$y[_[106]] == 0x1) {
            if (zw_$y[_[35405]] == 0x3) return 0x3;else return zw_$y[_[35405]] == 0x1 ? 0x2 : 0x1;
        } else return zw_$y[_[106]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['p$EBCD'] = function (_23401, vwyx$z) {
    p$DE[_[35406]] = {
        'step': _23401,
        'server_id': vwyx$z
    };
    var mqnpl = this;
    p$BDCE({ 'title': _[35407] }), sendApi(p$DE[_[35192]], _[35408], {
        'partner_id': p$DE[_[12687]],
        'uid': p$DE[_[27415]],
        'game_pkg': p$DE[_[27417]],
        'server_id': vwyx$z,
        'platform': p$DE[_[27369]],
        'platform_uid': p$DE[_[27418]],
        'check_login_time': p$DE[_[35285]],
        'check_login_sign': p$DE[_[35284]],
        'version_name': p$DE[_[4420]]
    }, p$EBDC, p$CED, p$EB, function (plnko) {
        return plnko[_[1321]] == _[10103] || plnko[_[78]] == _[35409] || plnko[_[78]] == _[35410];
    });
}, window['p$EBDC'] = function (jigkl) {
    var mjkl = this;
    if (jigkl && jigkl[_[1321]] === _[10103] && jigkl[_[11]]) {
        var porqts = p$DE[_[27411]];
        porqts[_[35411]] = p$DE[_[35202]], porqts[_[11784]] = String(jigkl[_[11]][_[35412]]), porqts[_[27371]] = parseInt(jigkl[_[11]][_[909]]);
        if (jigkl[_[11]][_[27370]]) porqts[_[27370]] = parseInt(jigkl[_[11]][_[27370]]);else porqts[_[27370]] = parseInt(jigkl[_[11]][_[11801]]);
        porqts[_[35413]] = 0x0, porqts[_[4417]] = p$DE[_[35324]], porqts[_[35414]] = jigkl[_[11]][_[35415]], porqts[_[35416]] = jigkl[_[11]][_[35416]];
        if (jigkl[_[11]][_[27375]]) porqts[_[27375]] = parseInt(jigkl[_[11]][_[27375]]);
        console[_[490]](_[35417] + JSON[_[4403]](porqts[_[35416]])), p$DE[_[670]] == 0x1 && porqts[_[35416]] && porqts[_[35416]][_[35418]] == 0x1 && (p$DE[_[35419]] = 0x1, window[_[35101]][_[148]]['p$AED']()), p$ECBD();
    } else {
        if (p$DE[_[35406]][_[7054]] >= 0x3) {
            var zy_xw$ = jigkl ? jigkl[_[1321]] : '';
            window[_[35226]](0xc, _[35420] + zy_xw$), p$EB(JSON[_[4403]](jigkl)), window['p$BCDE'](_[35421] + zy_xw$);
        } else sendApi(p$DE[_[35192]], _[35266], {
            'platform': p$DE[_[35190]],
            'partner_id': p$DE[_[12687]],
            'token': p$DE[_[35264]],
            'game_pkg': p$DE[_[27417]],
            'deviceId': p$DE[_[27419]],
            'scene': _[35267] + p$DE[_[35200]]
        }, function (gehidf) {
            if (!gehidf || gehidf[_[1321]] != _[10103]) {
                window['p$BCDE'](_[35283] + gehidf && gehidf[_[1321]]);
                return;
            }
            p$DE[_[35284]] = String(gehidf[_[11784]]), p$DE[_[35285]] = String(gehidf[_[909]]), setTimeout(function () {
                p$EBCD(p$DE[_[35406]][_[7054]] + 0x1, p$DE[_[35406]][_[11801]]);
            }, 0x5dc);
        }, p$CED, p$EB, function (vwsutx) {
            return vwsutx[_[1321]] == _[10103] || vwsutx[_[1321]] == _[27771];
        });
    }
}, window['p$ECBD'] = function () {
    ServerLoading[_[148]][_[35315]](p$DE[_[670]]), window['p$CE'] = !![], window['p$EDBC']();
}, window['p$ECDB'] = function () {
    if (window['p$EC'] && window['p$DCE'] && window[_[35208]] && window[_[35209]] && window['p$DEC'] && window['p$DC']) {
        if (!window[_[34415]][_[148]]) {
            console[_[490]](_[35422] + window[_[34415]][_[148]]);
            var ifkjgh = wx[_[27035]](),
                y_x0 = ifkjgh[_[834]] ? ifkjgh[_[834]] : 0x0,
                omqnlp = {
                'cdn': window['p$DE'][_[4417]],
                'spareCdn': window['p$DE'][_[27057]],
                'newRegister': window['p$DE'][_[670]],
                'wxPC': window['p$DE'][_[27060]],
                'wxIOS': window['p$DE'][_[1133]],
                'wxAndroid': window['p$DE'][_[11629]],
                'wxParam': {
                    'limitLoad': window['p$DE']['p$ABCED'],
                    'benchmarkLevel': window['p$DE']['p$ABDCE'],
                    'wxFrom': window[_[565]][_[31077]] == _[35423] ? 0x1 : 0x0,
                    'wxSDKVersion': window[_[35102]]
                },
                'configType': window['p$DE'][_[4419]],
                'exposeType': window['p$DE'][_[756]],
                'scene': y_x0,
                'video_type': window['p$DE'][_[27561]],
                'ad_flag': window['p$DE'][_[27560]]
            };
            if (window[_[35326]]) for (var ghedif in window[_[35326]]) {
                if (!omqnlp[ghedif]) omqnlp[ghedif] = window[_[35326]][ghedif];
            }
            new window[_[34415]](omqnlp, window['p$DE'][_[101]], window['p$ABCDE']);
        }
    }
}, window['p$EDBC'] = function () {
    if (window['p$EC'] && window['p$DCE'] && window[_[35208]] && window[_[35209]] && window['p$DEC'] && window['p$DC'] && window['p$CE'] && window['p$CD']) {
        p$BDEC();
        if (!p$ECD) {
            p$ECD = !![];
            if (!window[_[34415]][_[148]]) window['p$ECDB']();
            var vrtusq = 0x0,
                wtsv = wx[_[35424]]();
            wtsv && (window['p$DE'][_[35156]] && (vrtusq = wtsv[_[325]]), console[_[78]](_[35425] + wtsv[_[325]] + _[35426] + wtsv[_[1341]] + _[35427] + wtsv[_[1343]] + _[35428] + wtsv[_[1342]] + _[35429] + wtsv[_[179]] + _[35430] + wtsv[_[180]]));
            var fdcb = {};
            for (const y0$1z in p$DE[_[27411]]) {
                fdcb[y0$1z] = p$DE[_[27411]][y0$1z];
            }
            var ywvxz = {
                'channel': window['p$DE'][_[12696]],
                'account': window['p$DE'][_[27415]],
                'userId': window['p$DE'][_[12685]],
                'cdn': window['p$DE'][_[4417]],
                'data': window['p$DE'][_[11]],
                'package': window['p$DE'][_[27058]],
                'newRegister': window['p$DE'][_[670]],
                'pkgName': window['p$DE'][_[27417]],
                'partnerId': window['p$DE'][_[12687]],
                'platform_uid': window['p$DE'][_[27418]],
                'deviceId': window['p$DE'][_[27419]],
                'selectedServer': fdcb,
                'configType': window['p$DE'][_[4419]],
                'exposeType': window['p$DE'][_[756]],
                'debugUsers': window['p$DE'][_[12834]],
                'wxMenuTop': vrtusq,
                'wxShield': window['p$DE'][_[778]],
                'encryptParam': window['p$DE'][_[27568]],
                'wx_channel': window['p$DE'][_[27566]],
                'zsy_tp_state': window['p$DE'][_[27567]]
            };
            if (window[_[35326]]) for (var decab in window[_[35326]]) {
                ywvxz[decab] = window[_[35326]][decab];
            }
            window[_[34415]][_[148]]['p$EDA'](ywvxz);
            if (p$DE[_[27411]] && p$DE[_[27411]][_[11801]]) localStorage[_[493]](_[35287] + p$DE[_[27417]] + p$DE[_[27415]], p$DE[_[27411]][_[11801]]);
        }
    } else console[_[78]](_[35431] + window['p$EC'] + _[35432] + window['p$DCE'] + _[35433] + window[_[35208]] + _[35434] + window[_[35209]] + _[35435] + window['p$DEC'] + _[35436] + window['p$DC'] + _[35437] + window['p$CE'] + _[35438] + window['p$CD']);
}, window[_[35317]] = function () {
    if (!window['p$DC'] || !window['p$CD']) return;
    var trqv = p$DE[_[670]] == 0x1,
        onmprq = p$DE[_[778]],
        qpornm = p$DE[_[27295]] && p$DE[_[27295]] > 0x0;
    if (onmprq || trqv && qpornm) {
        var okjn = p$DE[_[27296]],
            _$zxy0 = okjn && okjn[_[13]] == 0x9;
        _$zxy0 && (window[_[29996]] = okjn);
        var lqopn = p$DE[_[27297]],
            _$zxyw = lqopn && lqopn[_[15]]('#')[_[13]] == 0x4;
        _$zxyw && (window[_[29997]] = lqopn);
    }
}, window[_[35225]] = function () {
    window[_[29996]] = null, window[_[29997]] = null;
};