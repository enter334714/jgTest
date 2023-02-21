var Q = wx.$v;
import ve4fa from '../vvavvv/v7tvv.js';
window[Q[151]] = { 'wxVersion': window[Q[6]][Q[7]] }, window[Q[152]] = ![], window[Q[153]] = 0x1, window['ENV'] = 0x1, window['_vVPJ'] = !![], window[Q[154]] = !![], window['_vUHVPJ'] = '', window[Q[155]] = ![], window[Q[16]] = {
    'base_cdn': Q[156],
    'cdn': Q[156]
}, _vPJ[Q[157]] = {}, _vPJ[Q[158]] = '0', _vPJ[Q[82]] = window[Q[151]]['wxVersion'], _vPJ[Q[117]] = '', _vPJ['os'] = '1', _vPJ[Q[159]] = Q[160], _vPJ[Q[161]] = Q[162], _vPJ[Q[163]] = Q[164], _vPJ[Q[165]] = Q[166], _vPJ[Q[167]] = Q[168], _vPJ[Q[169]] = '1', _vPJ[Q[22]] = '', _vPJ[Q[170]] = '', _vPJ[Q[171]] = 0x0, _vPJ[Q[172]] = {}, _vPJ[Q[173]] = parseInt(_vPJ[Q[169]]), _vPJ[Q[174]] = _vPJ[Q[169]], _vPJ[Q[23]] = {}, _vPJ[Q[30]] = Q[175], _vPJ[Q[176]] = ![], _vPJ[Q[177]] = Q[178], _vPJ[Q[179]] = Date[Q[144]](), _vPJ[Q[180]] = Q[181], _vPJ[Q[182]] = '_a', _vPJ[Q[183]] = '', _vPJ[Q[184]] = 0x2, _vPJ['lastVersion'] = 0x7c1, _vPJ['wxVersion'] = window[Q[151]]['wxVersion'], _vPJ[Q[185]] = ![], _vPJ[Q[109]] = ![], _vPJ[Q[112]] = ![], _vPJ[Q[115]] = ![], window['_vVJP'] = 0x5, window['_vVJ'] = ![], window['_vJV'] = ![], window['_vPVJ'] = ![], window[Q[186]] = ![], window[Q[187]] = ![], window['_vPJV'] = ![], window['_vVP'] = ![], window['_vPV'] = ![], window['_vJVP'] = ![], window[Q[188]] = null, window[Q[189]] = function (_57zof) {
    console[Q[42]](Q[189], _57zof), wx[Q[190]]({}), wx[Q[49]]({
        'title': Q[74],
        'content': _57zof,
        'success'(c$i1y) {
            if (c$i1y[Q[191]]) console[Q[42]](Q[192]);else c$i1y[Q[193]] && console[Q[42]](Q[194]);
        }
    });
}, window['_vHVPJ'] = function (cm$i1y) {
    console[Q[42]](Q[195], cm$i1y), _vHPJV(), wx[Q[49]]({
        'title': Q[74],
        'content': cm$i1y,
        'confirmText': Q[196],
        'cancelText': Q[197],
        'success'(y1mch) {
            if (y1mch[Q[191]]) window[Q[71]]();else y1mch[Q[193]] && (console[Q[42]](Q[198]), wx[Q[199]]({}));
        }
    });
}, window[Q[200]] = function (cu1n$) {
    console[Q[42]](Q[200], cu1n$), wx[Q[49]]({
        'title': Q[74],
        'content': cu1n$,
        'confirmText': Q[201],
        'showCancel': ![],
        'complete'(f7o5ae) {
            console[Q[42]](Q[198]), wx[Q[199]]({});
        }
    });
}, window['_vHVJP'] = ![], window['_vHPVJ'] = function (a5efo) {
    window['_vHVJP'] = !![], wx[Q[202]](a5efo);
}, window['_vHPJV'] = function () {
    window['_vHVJP'] && (window['_vHVJP'] = ![], wx[Q[190]]({}));
}, window['_vHJVP'] = function (h$yc1m) {
    window[Q[36]][Q[37]]['_vHJVP'](h$yc1m);
}, window[Q[203]] = function (ycu$1i, pbdz) {
    ve4fa[Q[203]](ycu$1i, function (rwtx) {
        rwtx && rwtx[Q[204]] ? rwtx[Q[204]][Q[205]] == 0x1 ? pbdz(!![]) : (pbdz(![]), console[Q[1]](Q[206] + rwtx[Q[204]][Q[207]])) : console[Q[42]](Q[203], rwtx);
    });
}, window['_vHJPV'] = function (mlh3wv) {
    console[Q[42]](Q[208], mlh3wv);
}, window[Q[209]] = function (r3wtk) {}, window[Q[210]] = function (rwv3, sg, a5feo) {}, window[Q[211]] = function (n92p0) {
    console[Q[42]](Q[212], n92p0), window[Q[36]][Q[37]][Q[213]](), window[Q[36]][Q[37]][Q[214]](), window[Q[36]][Q[37]][Q[215]](), window[Q[216]]();
}, window[Q[217]] = function (p29d06) {
    window[Q[218]](0xe, Q[219] + p29d06), window['_vHVPJ'](Q[220]);
    var o57fa = {
        'id': window[Q[16]][Q[17]],
        'role': window[Q[16]][Q[18]],
        'level': window[Q[16]][Q[19]],
        'account': window[Q[16]][Q[20]],
        'version': window[Q[16]]['lastVersion'],
        'cdn': window[Q[16]][Q[21]],
        'pkgName': window[Q[16]][Q[22]],
        'gamever': window[Q[6]][Q[7]],
        'serverid': window[Q[16]][Q[23]] ? window[Q[16]][Q[23]][Q[24]] : 0x0,
        'systemInfo': window[Q[25]],
        'error': Q[221],
        'stack': p29d06 ? p29d06 : Q[220]
    },
        cmyi = JSON[Q[27]](o57fa);
    console[Q[28]](Q[222] + cmyi), window[Q[30]](cmyi);
}, window[Q[218]] = function (zb5_6, $h3lym) {
    sendApi(_vPJ[Q[163]], Q[223], {
        'game_pkg': _vPJ[Q[22]],
        'partner_id': _vPJ[Q[169]],
        'server_id': _vPJ[Q[23]] && _vPJ[Q[23]][Q[24]] > 0x0 ? _vPJ[Q[23]][Q[24]] : 0x0,
        'uid': _vPJ[Q[20]] > 0x0 ? _vPJ[Q[20]] : 0x0,
        'type': zb5_6,
        'info': $h3lym
    });
}, window[Q[224]] = function (sgxj) {
    var $mhlc = JSON[Q[225]](sgxj);
    $mhlc[Q[226]] = window[Q[6]][Q[7]], $mhlc[Q[227]] = window[Q[16]][Q[23]] ? window[Q[16]][Q[23]][Q[24]] : 0x0, $mhlc[Q[25]] = window[Q[25]];
    var txjq8g = JSON[Q[27]]($mhlc);
    console[Q[28]](Q[228] + txjq8g), window[Q[30]](txjq8g);
}, window[Q[72]] = function (a5of7e, a75o) {
    var pnd2u = {
        'id': window[Q[16]][Q[17]],
        'role': window[Q[16]][Q[18]],
        'level': window[Q[16]][Q[19]],
        'account': window[Q[16]][Q[20]],
        'version': window[Q[16]]['lastVersion'],
        'cdn': window[Q[16]][Q[21]],
        'pkgName': window[Q[16]][Q[22]],
        'gamever': window[Q[6]][Q[7]],
        'serverid': window[Q[16]][Q[23]] ? window[Q[16]][Q[23]][Q[24]] : 0x0,
        'systemInfo': window[Q[25]],
        'error': a5of7e,
        'stack': a75o
    },
        $y1h = JSON[Q[27]](pnd2u);
    console[Q[145]](Q[229] + $y1h), window[Q[30]]($y1h);
}, window[Q[30]] = function (rqxk) {
    if (window[Q[16]][Q[118]] == Q[230]) return;
    var p2d0un = _vPJ[Q[30]] + Q[231] + _vPJ[Q[20]];
    wx[Q[232]]({
        'url': p2d0un,
        'method': Q[233],
        'data': rqxk,
        'header': {
            'content-type': Q[234],
            'cache-control': Q[235]
        },
        'success': function (p920d6) {
            DEBUG && console[Q[42]](Q[236], p2d0un, rqxk, p920d6);
        },
        'fail': function (bo6z9) {
            DEBUG && console[Q[42]](Q[236], p2d0un, rqxk, bo6z9);
        },
        'complete': function () {}
    });
}, window[Q[237]] = function () {
    function e7ao5() {
        return ((0x1 + Math[Q[238]]()) * 0x10000 | 0x0)[Q[239]](0x10)[Q[240]](0x1);
    }
    return e7ao5() + e7ao5() + '-' + e7ao5() + '-' + e7ao5() + '-' + e7ao5() + '+' + e7ao5() + e7ao5() + e7ao5();
}, window[Q[71]] = function () {
    console[Q[42]](Q[241]);
    var s8jqgx = ve4fa[Q[242]]();
    _vPJ[Q[174]] = s8jqgx[Q[243]], _vPJ[Q[173]] = s8jqgx[Q[243]], _vPJ[Q[169]] = s8jqgx[Q[243]], _vPJ[Q[22]] = s8jqgx[Q[244]];
    var u1nci = { 'game_ver': _vPJ[Q[82]] };
    _vPJ[Q[170]] = this[Q[237]](), _vHPVJ({ 'title': Q[245] }), ve4fa[Q[246]](u1nci, this[Q[247]][Q[248]](this));
}, window[Q[247]] = function (zd69b) {
    var bo6_5z = zd69b[Q[249]];
    sdkInitRes = zd69b, console[Q[42]](Q[250] + bo6_5z + Q[251] + (bo6_5z == 0x1) + Q[252] + zd69b[Q[7]] + Q[253] + window[Q[151]]['wxVersion']);
    if (!zd69b[Q[7]] || window['_vUVJHP'](window[Q[151]]['wxVersion'], zd69b[Q[7]]) < 0x0) console[Q[42]](Q[254]), _vPJ[Q[161]] = Q[255], _vPJ[Q[163]] = Q[256], _vPJ[Q[165]] = Q[257], _vPJ[Q[21]] = Q[258], _vPJ[Q[259]] = Q[260], _vPJ[Q[261]] = 'qy', _vPJ[Q[185]] = ![];else window['_vUVJHP'](window[Q[151]]['wxVersion'], zd69b[Q[7]]) == 0x0 ? (console[Q[42]](Q[262]), _vPJ[Q[161]] = Q[162], _vPJ[Q[163]] = Q[164], _vPJ[Q[165]] = Q[166], _vPJ[Q[21]] = Q[263], _vPJ[Q[259]] = Q[260], _vPJ[Q[261]] = Q[264], _vPJ[Q[185]] = !![]) : (console[Q[42]](Q[265]), _vPJ[Q[161]] = Q[162], _vPJ[Q[163]] = Q[164], _vPJ[Q[165]] = Q[166], _vPJ[Q[21]] = Q[263], _vPJ[Q[259]] = Q[260], _vPJ[Q[261]] = Q[264], _vPJ[Q[185]] = ![]);
    _vPJ[Q[171]] = config[Q[266]] ? config[Q[266]] : 0x0, this['_vVPHJ'](), this['_vVPJH'](), window[Q[267]] = 0x5, _vHPVJ({ 'title': Q[268] }), ve4fa[Q[269]](this[Q[270]][Q[248]](this));
}, window[Q[267]] = 0x5, window[Q[270]] = function (qgsj8x, pdu02) {
    if (qgsj8x == 0x0 && pdu02 && pdu02[Q[271]]) {
        _vPJ[Q[272]] = pdu02[Q[271]], _vPJ[Q[273]] = pdu02[Q[273]], _vPJ[Q[274]] = pdu02[Q[274]], _vPJ[Q[275]] = pdu02[Q[275]], _vPJ[Q[276]] = pdu02[Q[276]];
        var y$lhc = this;
        _vHPVJ({ 'title': Q[277] }), sendApi(_vPJ[Q[161]], Q[278], {
            'platform': _vPJ[Q[159]],
            'partner_id': _vPJ[Q[169]],
            'token': pdu02[Q[271]],
            'game_pkg': _vPJ[Q[22]],
            'deviceId': _vPJ[Q[170]],
            'scene': Q[279] + _vPJ[Q[171]]
        }, this['_vVHPJ'][Q[248]](this), _vVJP, _vJH);
    } else pdu02 && pdu02[Q[59]] && window[Q[267]] > 0x0 && (pdu02[Q[59]][Q[110]](Q[280]) != -0x1 || pdu02[Q[59]][Q[110]](Q[281]) != -0x1 || pdu02[Q[59]][Q[110]](Q[282]) != -0x1 || pdu02[Q[59]][Q[110]](Q[283]) != -0x1 || pdu02[Q[59]][Q[110]](Q[284]) != -0x1 || pdu02[Q[59]][Q[110]](Q[285]) != -0x1) ? (window[Q[267]]--, ve4fa[Q[269]](this[Q[270]][Q[248]](this))) : (window[Q[218]](0x1, Q[286] + qgsj8x + Q[287] + (pdu02 ? pdu02[Q[59]] : '')), window[Q[72]](Q[288], JSON[Q[27]]({
        'status': qgsj8x,
        'data': pdu02
    })), window['_vHVPJ'](Q[289] + (pdu02 && pdu02[Q[59]] ? '，' + pdu02[Q[59]] : '')));
}, window['_vVHPJ'] = function (uic$y1) {
    if (!uic$y1) {
        window[Q[218]](0x2, Q[290]), window[Q[72]](Q[291], Q[292]), window['_vHVPJ'](Q[293]);
        return;
    }
    if (uic$y1[Q[205]] != Q[294]) {
        window[Q[218]](0x2, Q[295] + uic$y1[Q[205]]), window[Q[72]](Q[291], JSON[Q[27]](uic$y1)), window['_vHVPJ'](Q[296] + uic$y1[Q[205]]);
        return;
    }
    if (uic$y1[Q[297]] == 0x1) {
        window['_vHVPJ'](Q[298]);
        return;
    }
    _vPJ[Q[299]] = String(uic$y1[Q[20]]), _vPJ[Q[20]] = String(uic$y1[Q[20]]), _vPJ[Q[86]] = String(uic$y1[Q[86]]), _vPJ[Q[174]] = String(uic$y1[Q[86]]), _vPJ[Q[300]] = String(uic$y1[Q[300]]), _vPJ[Q[301]] = String(uic$y1[Q[302]]), _vPJ[Q[303]] = String(uic$y1[Q[304]]), _vPJ[Q[302]] = '';
    var a45f7e = this;
    _vHPVJ({ 'title': Q[305] });
    var h$mc = localStorage[Q[306]](Q[307] + _vPJ[Q[22]] + _vPJ[Q[20]]);
    if (h$mc && h$mc != '') {
        var lh$cmy = Number(h$mc);
        a45f7e[Q[308]](lh$cmy);
    } else a45f7e[Q[309]]();
}, window[Q[309]] = function () {
    var ycm1i$ = this;
    sendApi(_vPJ[Q[161]], Q[310], {
        'partner_id': _vPJ[Q[169]],
        'uid': _vPJ[Q[20]],
        'version': _vPJ[Q[82]],
        'game_pkg': _vPJ[Q[22]],
        'device': _vPJ[Q[170]]
    }, ycm1i$['_vVHJP'][Q[248]](ycm1i$), _vVJP, _vJH);
}, window['_vVHJP'] = function (d962pb) {
    if (!d962pb) {
        window[Q[218]](0x3, Q[311]), window['_vHVPJ'](Q[311]);
        return;
    }
    if (d962pb[Q[205]] != Q[294]) {
        window[Q[218]](0x3, Q[312] + d962pb[Q[205]]), window['_vHVPJ'](Q[312] + d962pb[Q[205]]);
        return;
    }
    if (!d962pb[Q[204]] || d962pb[Q[204]][Q[10]] == 0x0) {
        window[Q[218]](0x3, Q[313]), window['_vHVPJ'](Q[314]);
        return;
    }
    this[Q[315]](d962pb);
}, window[Q[308]] = function (mhyv3) {
    var hwmvl3 = this;
    sendApi(_vPJ[Q[161]], Q[316], {
        'server_id': mhyv3,
        'time': Date[Q[144]]() / 0x3e8
    }, hwmvl3[Q[317]][Q[248]](hwmvl3), _vVJP, _vJH);
}, window[Q[317]] = function ($mycl) {
    if (!$mycl) {
        window[Q[218]](0x4, Q[318]), this[Q[309]]();
        return;
    }
    if ($mycl[Q[205]] != Q[294]) {
        window[Q[218]](0x4, Q[319] + $mycl[Q[205]]), this[Q[309]]();
        return;
    }
    if (!$mycl[Q[204]] || $mycl[Q[204]][Q[10]] == 0x0) {
        window[Q[218]](0x4, Q[320]), this[Q[309]]();
        return;
    }
    this[Q[315]]($mycl);
}, window[Q[315]] = function (rkxwtv) {
    _vPJ[Q[321]] = rkxwtv[Q[322]] != undefined ? rkxwtv[Q[322]] : 0x0, _vPJ[Q[23]] = {
        'server_id': String(rkxwtv[Q[204]][0x0][Q[24]]),
        'server_name': String(rkxwtv[Q[204]][0x0][Q[323]]),
        'entry_ip': rkxwtv[Q[204]][0x0][Q[324]],
        'entry_port': parseInt(rkxwtv[Q[204]][0x0][Q[325]]),
        'status': _vPVH(rkxwtv[Q[204]][0x0]),
        'start_time': rkxwtv[Q[204]][0x0][Q[326]],
        'maintain_time': rkxwtv[Q[204]][0x0][Q[327]] ? rkxwtv[Q[204]][0x0][Q[327]] : '',
        'is_recommend': rkxwtv[Q[204]][0x0][Q[328]],
        'cdn': _vPJ[Q[21]]
    }, this['_vJPVH'](), window[Q[36]] && window[Q[36]][Q[37]][Q[329]] && window[Q[36]][Q[37]][Q[329]](sdkInitRes[Q[330]], sdkInitRes[Q[331]], sdkInitRes[Q[332]], sdkInitRes[Q[333]], sdkInitRes[Q[334]]);
}, window['_vJPVH'] = function () {
    if (_vPJ[Q[321]] == 0x1) {
        var rwtxqk = _vPJ[Q[23]][Q[335]];
        if (rwtxqk === -0x1 || rwtxqk === 0x0) {
            window[Q[218]](0xf, Q[336] + _vPJ[Q[23]]['id'] + Q[337] + _vPJ[Q[23]][Q[335]]), window['_vHVPJ'](rwtxqk === -0x1 ? Q[338] : Q[339]);
            return;
        }
        _vJHVP(0x0, _vPJ[Q[23]][Q[24]]), window[Q[36]][Q[37]][Q[340]](_vPJ[Q[321]]);
    } else window[Q[36]][Q[37]][Q[341]](), _vHPJV();
    window['_vPV'] = !![], window[Q[342]](), window['_vJVPH'](), window['_vJPHV']();
}, window['_vVPHJ'] = function () {
    sendApi(_vPJ[Q[161]], 'User.getCdnVersion', {
        'game_pkg': _vPJ[Q[22]],
        'version_name': _vPJ[Q[261]]
    }, this['reqVersionConfigCallBack'][Q[248]](this), _vVJP, _vJH);
}, window['reqVersionConfigCallBack'] = function (hmvwl3) {
    if (!hmvwl3) {
        window[Q[218]](0x5, 'User.getCdnVersion failed'), window['_vHVPJ']('User.getCdnVersion failed');
        return;
    }
    if (hmvwl3[Q[205]] != Q[294]) {
        window[Q[218]](0x5, 'User.getCdnVersion failed: state=' + hmvwl3[Q[205]]), window['_vHVPJ']('User.getCdnVersion failed: state=' + hmvwl3[Q[205]]);
        return;
    }
    if (!hmvwl3[Q[204]] || !hmvwl3[Q[204]][Q[82]]) {
        window[Q[218]](0x5, 'User.getCdnVersion failed: version=' + (hmvwl3[Q[204]] && hmvwl3[Q[204]][Q[82]])), window['_vHVPJ']('User.getCdnVersion failed: version=' + (hmvwl3[Q[204]] && hmvwl3[Q[204]][Q[82]]));
        return;
    }
    hmvwl3[Q[204]][Q[343]] && hmvwl3[Q[204]][Q[343]][Q[10]] > 0xa && (_vPJ[Q[344]] = hmvwl3[Q[204]][Q[343]], _vPJ[Q[21]] = hmvwl3[Q[204]][Q[343]]), hmvwl3[Q[204]][Q[82]] && (_vPJ['lastVersion'] = hmvwl3[Q[204]][Q[82]]), console[Q[1]]('lastVersion:' + _vPJ['lastVersion'] + Q[345] + _vPJ[Q[261]]), window['_vPJV'] = !![], window['_vJVPH'](), window['_vJPHV']();
}, window[Q[346]], window['_vVPJH'] = function () {
    sendApi(_vPJ[Q[161]], Q[347], { 'game_pkg': _vPJ[Q[22]] }, this['_vVJHP'][Q[248]](this), _vVJP, _vJH);
}, window['_vVJHP'] = function (y$mic) {
    if (y$mic && y$mic[Q[205]] === Q[294] && y$mic[Q[204]]) {
        window[Q[346]] = y$mic[Q[204]];
        for (var udn02p in y$mic[Q[204]]) {
            _vPJ[udn02p] = y$mic[Q[204]][udn02p];
        }
    } else window[Q[218]](0xb, Q[348]), console[Q[1]](Q[349] + y$mic[Q[205]]);
    window['_vVP'] = !![], window[Q[342]](), window['_vJPHV']();
}, window[Q[342]] = function () {
    if (!window['_vPV'] || !window['_vVP']) return;
    var xtwrvk = _vPJ[Q[321]] == 0x1,
        tvwk3r = _vPJ[Q[185]],
        qxtjrk = _vPJ[Q[350]] && _vPJ[Q[350]] > 0x0;
    if (tvwk3r || xtwrvk && qxtjrk) {
        var e4af = _vPJ[Q[351]],
            i12 = e4af && e4af[Q[10]] == 0x9;
        i12 && (window[Q[352]] = e4af);
        var v3lwm = _vPJ[Q[353]],
            zfbo5_ = v3lwm && v3lwm[Q[38]]('#')[Q[10]] == 0x4;
        zfbo5_ && (window[Q[354]] = v3lwm);
    }
}, window[Q[216]] = function () {
    window[Q[352]] = null, window[Q[354]] = null;
}, window[Q[355]] = function (rqtx8, rqtjx8, w3klv, ea745f, l3yh$m, diun2, f7o5a, vw3khl, uyic1, gsq8x) {
    l3yh$m = String(l3yh$m);
    var dp02n9 = f7o5a,
        rtx8 = vw3khl;
    _vPJ[Q[157]][l3yh$m] = {
        'productid': l3yh$m,
        'productname': dp02n9,
        'productdesc': rtx8,
        'roleid': rqtx8,
        'rolename': rqtjx8,
        'rolelevel': w3klv,
        'price': diun2,
        'callback': uyic1
    }, sendApi(_vPJ[Q[165]], Q[356], {
        'game_pkg': _vPJ[Q[22]],
        'server_id': _vPJ[Q[23]][Q[24]],
        'server_name': _vPJ[Q[23]][Q[323]],
        'level': w3klv,
        'uid': _vPJ[Q[20]],
        'role_id': rqtx8,
        'role_name': rqtjx8,
        'product_id': l3yh$m,
        'product_name': dp02n9,
        'product_desc': rtx8,
        'money': diun2,
        'partner_id': _vPJ[Q[169]]
    }, toPayCallBack, _vVJP, _vJH);
}, window[Q[357]] = function (yl$3hm) {
    if (yl$3hm && (yl$3hm[Q[358]] === 0xc8 || yl$3hm[Q[205]] == Q[294])) {
        var n0cui1 = _vPJ[Q[157]][String(yl$3hm[Q[359]])];
        if (n0cui1[Q[360]]) n0cui1[Q[360]](yl$3hm[Q[359]], yl$3hm[Q[361]], -0x1);
        ve4fa[Q[362]]({
            'cpbill': yl$3hm[Q[361]],
            'productid': yl$3hm[Q[359]],
            'productname': n0cui1[Q[363]],
            'productdesc': n0cui1[Q[364]],
            'serverid': _vPJ[Q[23]][Q[24]],
            'servername': _vPJ[Q[23]][Q[323]],
            'roleid': n0cui1[Q[365]],
            'rolename': n0cui1[Q[366]],
            'rolelevel': n0cui1[Q[367]],
            'price': n0cui1[Q[368]],
            'extension': JSON[Q[27]]({ 'cp_order_id': yl$3hm[Q[361]] })
        }, function (ni$uc1, d2nu0i) {
            n0cui1[Q[360]] && ni$uc1 == 0x0 && n0cui1[Q[360]](yl$3hm[Q[359]], yl$3hm[Q[361]], ni$uc1);
            console[Q[1]](JSON[Q[27]]({
                'type': Q[369],
                'status': ni$uc1,
                'data': yl$3hm,
                'role_name': n0cui1[Q[366]]
            }));
            if (ni$uc1 === 0x0) {} else {
                if (ni$uc1 === 0x1) {} else {
                    if (ni$uc1 === 0x2) {}
                }
            }
        });
    } else {
        var xkjqtr = yl$3hm ? Q[370] + yl$3hm[Q[358]] + Q[371] + yl$3hm[Q[205]] + Q[372] + yl$3hm[Q[1]] : Q[373];
        window[Q[218]](0xd, Q[374] + xkjqtr), alert(xkjqtr);
    }
}, window['_vVJPH'] = function () {}, window['_vHVJ'] = function (klw3rv, gqt8x, w3hvlm, wkxvr, udn20p) {
    ve4fa[Q[375]](_vPJ[Q[23]][Q[24]], _vPJ[Q[23]][Q[323]] || _vPJ[Q[23]][Q[24]], klw3rv, gqt8x, w3hvlm), sendApi(_vPJ[Q[161]], Q[376], {
        'game_pkg': _vPJ[Q[22]],
        'server_id': _vPJ[Q[23]][Q[24]],
        'role_id': klw3rv,
        'uid': _vPJ[Q[20]],
        'role_name': gqt8x,
        'role_type': wkxvr,
        'level': w3hvlm
    });
}, window['_vHJV'] = function (yl$h3, myv3l, aef457, kw3vl, n1c, y3lvm, t8xjgq, z_56o, hwv3kl, in12u0) {
    _vPJ[Q[17]] = yl$h3, _vPJ[Q[18]] = myv3l, _vPJ[Q[19]] = aef457, ve4fa[Q[377]](_vPJ[Q[23]][Q[24]], _vPJ[Q[23]][Q[323]] || _vPJ[Q[23]][Q[24]], yl$h3, myv3l, aef457), sendApi(_vPJ[Q[161]], Q[378], {
        'game_pkg': _vPJ[Q[22]],
        'server_id': _vPJ[Q[23]][Q[24]],
        'role_id': yl$h3,
        'uid': _vPJ[Q[20]],
        'role_name': myv3l,
        'role_type': kw3vl,
        'level': aef457,
        'evolution': n1c
    });
}, window['_vVHJ'] = function (f75_oz, n21, n01u2, wlvm, hclym, xqjrkt, b_zo, yi$m, z96d, fo5_e7) {
    _vPJ[Q[17]] = f75_oz, _vPJ[Q[18]] = n21, _vPJ[Q[19]] = n01u2, ve4fa[Q[379]](_vPJ[Q[23]][Q[24]], _vPJ[Q[23]][Q[323]] || _vPJ[Q[23]][Q[24]], f75_oz, n21, n01u2), sendApi(_vPJ[Q[161]], Q[378], {
        'game_pkg': _vPJ[Q[22]],
        'server_id': _vPJ[Q[23]][Q[24]],
        'role_id': f75_oz,
        'uid': _vPJ[Q[20]],
        'role_name': n21,
        'role_type': wlvm,
        'level': n01u2,
        'evolution': hclym
    });
}, window['_vVJH'] = function (jrq8tx) {}, window['_vHV'] = function ($mlcyh, inu021) {
    ve4fa[Q[380]](Q[380], { 'activity_id': inu021 }, function (hlvkw3) {
        $mlcyh && $mlcyh(hlvkw3);
    });
}, window[Q[381]] = function () {
    ve4fa[Q[381]]();
}, window[Q[382]] = function () {
    ve4fa[Q[383]]();
}, window[Q[384]] = function (z_bf, rjtq8x, jtqr8, p02ud, u20npd, $lhmy, z9_o, bfz5o_) {
    bfz5o_ = bfz5o_ || _vPJ[Q[23]][Q[24]], sendApi(_vPJ[Q[161]], Q[385], {
        'phone': z_bf,
        'role_id': rjtq8x,
        'uid': _vPJ[Q[20]],
        'game_pkg': _vPJ[Q[22]],
        'partner_id': _vPJ[Q[169]],
        'server_id': bfz5o_
    }, z9_o, 0x2, null, function () {
        return !![];
    });
}, window[Q[138]] = function (kwqxt) {
    window['_vJHV'] = kwqxt, window['_vJHV'] && window['_vVH'] && (console[Q[1]](Q[139] + window['_vVH'][Q[140]]), window['_vJHV'](window['_vVH']), window['_vVH'] = null);
}, window['_vJVH'] = function (z_o6b, c1yim, iym$1, whl3mv) {
    window[Q[386]](Q[387], {
        'game_pkg': window[Q[16]][Q[22]],
        'role_id': c1yim,
        'server_id': iym$1
    }, whl3mv);
}, window['_vPHVJ'] = function (e7oaf, hmwvl, mi1$cy) {
    function p6d20(jtqx8r) {
        var $1unci = [],
            $l3m = [],
            i2ndu0 = mi1$cy || window[Q[6]][Q[388]];
        for (var pzb_69 in i2ndu0) {
            var kjrtx = Number(pzb_69);
            (!e7oaf || !e7oaf[Q[10]] || e7oaf[Q[110]](kjrtx) != -0x1) && ($l3m[Q[40]](i2ndu0[pzb_69]), $1unci[Q[40]]([kjrtx, 0x3]));
        }
        window['_vUVJHP'](window['SDKVersion'], Q[389]) >= 0x0 ? (console[Q[42]](Q[390]), ve4fa[Q[391]] && ve4fa[Q[391]]($l3m, function (iuc1$) {
            console[Q[42]](Q[392]), console[Q[42]](iuc1$);
            if (iuc1$ && iuc1$[Q[59]] == Q[393]) for (var y$1icm in i2ndu0) {
                if (iuc1$[i2ndu0[y$1icm]] == Q[394]) {
                    var d0p26 = Number(y$1icm);
                    for (var u120in = 0x0; u120in < $1unci[Q[10]]; u120in++) {
                        if ($1unci[u120in][0x0] == d0p26) {
                            $1unci[u120in][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['_vUVJHP'](window['SDKVersion'], Q[395]) >= 0x0 ? wx[Q[396]]({
                'withSubscriptions': !![],
                'success': function (rvwt) {
                    var oe57af = rvwt[Q[397]][Q[398]];
                    if (oe57af) {
                        console[Q[42]](Q[399]), console[Q[42]](oe57af);
                        for (var i2d0u in i2ndu0) {
                            if (oe57af[i2ndu0[i2d0u]] == Q[394]) {
                                var uic1n = Number(i2d0u);
                                for (var whklv3 = 0x0; whklv3 < $1unci[Q[10]]; whklv3++) {
                                    if ($1unci[whklv3][0x0] == uic1n) {
                                        $1unci[whklv3][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[Q[42]]($1unci), hmwvl && hmwvl($1unci);
                    } else console[Q[42]](Q[400]), console[Q[42]](rvwt), console[Q[42]]($1unci), hmwvl && hmwvl($1unci);
                },
                'fail': function () {
                    console[Q[42]](Q[401]), console[Q[42]]($1unci), hmwvl && hmwvl($1unci);
                }
            }) : (console[Q[42]](Q[402] + window['SDKVersion']), console[Q[42]]($1unci), hmwvl && hmwvl($1unci));
        })) : (console[Q[42]](Q[403] + window['SDKVersion']), console[Q[42]]($1unci), hmwvl && hmwvl($1unci)), wx[Q[404]](p6d20);
    }
    wx[Q[405]](p6d20);
}, window['_vPHJV'] = {
    'isSuccess': ![],
    'level': Q[406],
    'isCharging': ![]
}, window['_vPVHJ'] = function (k3lwhv) {
    wx[Q[126]]({
        'success': function (_9bz6p) {
            var e4a57 = window['_vPHJV'];
            e4a57[Q[407]] = !![], e4a57[Q[128]] = Number(_9bz6p[Q[128]])[Q[408]](0x0), e4a57[Q[130]] = _9bz6p[Q[130]], k3lwhv && k3lwhv(e4a57[Q[407]], e4a57[Q[128]], e4a57[Q[130]]);
        },
        'fail': function (dnp) {
            console[Q[42]](Q[409], dnp[Q[59]]);
            var e75fa4 = window['_vPHJV'];
            k3lwhv && k3lwhv(e75fa4[Q[407]], e75fa4[Q[128]], e75fa4[Q[130]]);
        }
    });
}, window[Q[131]] = function (lh$m3) {
    wx[Q[131]]({
        'success': function (mw3h) {
            lh$m3 && lh$m3(!![], mw3h);
        },
        'fail': function (zb96dp) {
            lh$m3 && lh$m3(![], zb96dp);
        }
    });
}, window[Q[135]] = function (pdn92) {
    if (pdn92) wx[Q[135]](pdn92);
}, window[Q[410]] = function (z9_p6b) {
    wx[Q[410]](z9_p6b);
}, window[Q[386]] = function (dn, xsq8j, zfo75, gtx8j, hm3vy, c$1h, ao75e, i2nud0) {
    if (gtx8j == undefined) gtx8j = 0x1;
    wx[Q[232]]({
        'url': dn,
        'method': ao75e || Q[411],
        'responseType': Q[412],
        'data': xsq8j,
        'header': { 'content-type': i2nud0 || Q[234] },
        'success': function (b6pd9) {
            DEBUG && console[Q[42]](Q[413], dn, info, b6pd9);
            if (b6pd9 && b6pd9[Q[414]] == 0xc8) {
                var rq8tjx = b6pd9[Q[204]];
                !c$1h || c$1h(rq8tjx) ? zfo75 && zfo75(rq8tjx) : window[Q[415]](dn, xsq8j, zfo75, gtx8j, hm3vy, c$1h, b6pd9);
            } else window[Q[415]](dn, xsq8j, zfo75, gtx8j, hm3vy, c$1h, b6pd9);
        },
        'fail': function (gqjt8) {
            DEBUG && console[Q[42]](Q[416], dn, info, gqjt8), window[Q[415]](dn, xsq8j, zfo75, gtx8j, hm3vy, c$1h, gqjt8);
        },
        'complete': function () {}
    });
}, window[Q[415]] = function (dn90p, ozf, tqrwk, f7eoa, wvhlm3, trq8j, hvlk3w) {
    f7eoa - 0x1 > 0x0 ? setTimeout(function () {
        window[Q[386]](dn90p, ozf, tqrwk, f7eoa - 0x1, wvhlm3, trq8j);
    }, 0x3e8) : wvhlm3 && wvhlm3(JSON[Q[27]]({
        'url': dn90p,
        'response': hvlk3w
    }));
}, window[Q[417]] = function (bo_f, j8qgx, y1ci$m, fa5o7, $cyi1m, p9n20d, hvw3ml) {
    !y1ci$m && (y1ci$m = {});
    var qrt8j = Math[Q[418]](Date[Q[144]]() / 0x3e8);
    y1ci$m[Q[304]] = qrt8j, y1ci$m[Q[419]] = j8qgx;
    var d9026p = Object[Q[420]](y1ci$m)[Q[421]](),
        vmhyl = '',
        qrxtj8 = '';
    for (var dbz6p9 = 0x0; dbz6p9 < d9026p[Q[10]]; dbz6p9++) {
        vmhyl = vmhyl + (dbz6p9 == 0x0 ? '' : '&') + d9026p[dbz6p9] + y1ci$m[d9026p[dbz6p9]], qrxtj8 = qrxtj8 + (dbz6p9 == 0x0 ? '' : '&') + d9026p[dbz6p9] + '=' + encodeURIComponent(y1ci$m[d9026p[dbz6p9]]);
    }
    vmhyl = vmhyl + _vPJ[Q[167]];
    var o9bz6_ = Q[422] + md5(vmhyl);
    send(bo_f + '?' + qrxtj8 + (qrxtj8 == '' ? '' : '&') + o9bz6_, null, fa5o7, $cyi1m, p9n20d, hvw3ml || function (p0n92d) {
        return p0n92d[Q[205]] == Q[294];
    }, null, Q[423]);
}, window['_vPVJH'] = function (p0n9d2, _o6bz5) {
    var y$3 = 0x0;
    _vPJ[Q[23]] && (y$3 = _vPJ[Q[23]][Q[24]]), sendApi(_vPJ[Q[163]], Q[424], {
        'partnerId': _vPJ[Q[169]],
        'gamePkg': _vPJ[Q[22]],
        'logTime': Math[Q[418]](Date[Q[144]]() / 0x3e8),
        'platformUid': _vPJ[Q[300]],
        'type': p0n9d2,
        'serverId': y$3
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['_vPJHV'] = function (z9_6pb) {
    sendApi(_vPJ[Q[161]], Q[425], {
        'partner_id': _vPJ[Q[169]],
        'uid': _vPJ[Q[20]],
        'version': _vPJ[Q[82]],
        'game_pkg': _vPJ[Q[22]],
        'device': _vPJ[Q[170]]
    }, _vPJVH, _vVJP, _vJH);
}, window['_vPJVH'] = function (uci$y1) {
    if (uci$y1 && uci$y1[Q[205]] === Q[294] && uci$y1[Q[204]]) {
        uci$y1[Q[204]][Q[426]]({
            'id': -0x2,
            'name': Q[427]
        }), uci$y1[Q[204]][Q[426]]({
            'id': -0x1,
            'name': Q[428]
        }), _vPJ[Q[429]] = uci$y1[Q[204]];
        if (window[Q[430]]) window[Q[430]][Q[431]]();
    } else {
        _vPJ[Q[432]] = ![];
        var xtvw = uci$y1 ? uci$y1[Q[205]] : '';
        window[Q[218]](0x7, Q[433] + xtvw), window['_vHVPJ'](Q[434] + xtvw);
    }
}, window['_vHVP'] = function (f57oea) {
    sendApi(_vPJ[Q[161]], Q[435], {
        'partner_id': _vPJ[Q[169]],
        'uid': _vPJ[Q[20]],
        'version': _vPJ[Q[82]],
        'game_pkg': _vPJ[Q[22]],
        'device': _vPJ[Q[170]]
    }, _vHPV, _vVJP, _vJH);
}, window['_vHPV'] = function (pdbz) {
    _vPJ[Q[436]] = ![];
    if (pdbz && pdbz[Q[205]] === Q[294] && pdbz[Q[204]]) {
        for (var ui21n = 0x0; ui21n < pdbz[Q[204]][Q[10]]; ui21n++) {
            pdbz[Q[204]][ui21n][Q[335]] = _vPVH(pdbz[Q[204]][ui21n]);
        }
        _vPJ[Q[172]][-0x1] = window[Q[437]](pdbz[Q[204]]), window[Q[430]][Q[438]](-0x1);
    } else {
        var o9_zb = pdbz ? pdbz[Q[205]] : '';
        window[Q[218]](0x8, Q[439] + o9_zb), window['_vHVPJ'](Q[440] + o9_zb);
    }
}, window[Q[441]] = function (n$iu1) {
    sendApi(_vPJ[Q[161]], Q[435], {
        'partner_id': _vPJ[Q[169]],
        'uid': _vPJ[Q[20]],
        'version': _vPJ[Q[82]],
        'game_pkg': _vPJ[Q[22]],
        'device': _vPJ[Q[170]]
    }, n$iu1, _vVJP, _vJH);
}, window['_vVHP'] = function (o6bz_9, $hymcl) {
    sendApi(_vPJ[Q[161]], Q[442], {
        'partner_id': _vPJ[Q[169]],
        'uid': _vPJ[Q[20]],
        'version': _vPJ[Q[82]],
        'game_pkg': _vPJ[Q[22]],
        'device': _vPJ[Q[170]],
        'server_group_id': $hymcl
    }, _vVPH, _vVJP, _vJH);
}, window['_vVPH'] = function (ic$un) {
    _vPJ[Q[436]] = ![];
    if (ic$un && ic$un[Q[205]] === Q[294] && ic$un[Q[204]] && ic$un[Q[204]][Q[204]]) {
        var wkxvrt = ic$un[Q[204]][Q[443]],
            p26d = [];
        for (var d926 = 0x0; d926 < ic$un[Q[204]][Q[204]][Q[10]]; d926++) {
            ic$un[Q[204]][Q[204]][d926][Q[335]] = _vPVH(ic$un[Q[204]][Q[204]][d926]), (p26d[Q[10]] == 0x0 || ic$un[Q[204]][Q[204]][d926][Q[335]] != 0x0) && (p26d[p26d[Q[10]]] = ic$un[Q[204]][Q[204]][d926]);
        }
        _vPJ[Q[172]][wkxvrt] = window[Q[437]](p26d), window[Q[430]][Q[438]](wkxvrt);
    } else {
        var clhym$ = ic$un ? ic$un[Q[205]] : '';
        window[Q[218]](0x9, Q[444] + clhym$), window['_vHVPJ'](Q[445] + clhym$);
    }
}, window['_vUVJP'] = function (ymh$cl) {
    sendApi(_vPJ[Q[161]], Q[446], {
        'partner_id': _vPJ[Q[169]],
        'uid': _vPJ[Q[20]],
        'version': _vPJ[Q[82]],
        'game_pkg': _vPJ[Q[22]],
        'device': _vPJ[Q[170]]
    }, reqServerRecommendCallBack, _vVJP, _vJH);
}, window[Q[447]] = function (c$yu1) {
    _vPJ[Q[436]] = ![];
    if (c$yu1 && c$yu1[Q[205]] === Q[294] && c$yu1[Q[204]]) {
        for (var oefa = 0x0; oefa < c$yu1[Q[204]][Q[10]]; oefa++) {
            c$yu1[Q[204]][oefa][Q[335]] = _vPVH(c$yu1[Q[204]][oefa]);
        }
        _vPJ[Q[172]][-0x2] = window[Q[437]](c$yu1[Q[204]]), window[Q[430]][Q[438]](-0x2);
    } else {
        var f4a5 = c$yu1 ? c$yu1[Q[205]] : '';
        window[Q[218]](0xa, Q[448] + f4a5), alert(Q[449] + f4a5);
    }
}, window[Q[437]] = function (qrjxtk) {
    return qrjxtk;
}, window['_vPHV'] = function (wr3t, j8gxt) {
    wr3t = wr3t || _vPJ[Q[23]][Q[24]], sendApi(_vPJ[Q[161]], Q[450], {
        'type': '4',
        'game_pkg': _vPJ[Q[22]],
        'server_id': wr3t
    }, j8gxt);
}, window[Q[451]] = function ($1c, jx8r, rxqtjk, ci0n1u) {
    rxqtjk = rxqtjk || _vPJ[Q[23]][Q[24]], sendApi(_vPJ[Q[161]], Q[452], {
        'type': $1c,
        'game_pkg': jx8r,
        'server_id': rxqtjk
    }, ci0n1u);
}, window[Q[453]] = function (uiy$c1, p0ud) {
    sendApi(_vPJ[Q[161]], Q[454], { 'game_pkg': uiy$c1 }, p0ud);
}, window['_vPVH'] = function (pz9b) {
    if (pz9b) {
        if (pz9b[Q[335]] == 0x1) {
            if (pz9b[Q[455]] == 0x3) return 0x3;else return pz9b[Q[455]] == 0x1 ? 0x2 : 0x1;
        } else return pz9b[Q[335]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['_vJHVP'] = function (_6bp9, pzb9d) {
    _vPJ[Q[456]] = {
        'step': _6bp9,
        'server_id': pzb9d
    };
    var lwr3k = this;
    _vHPVJ({ 'title': Q[457] }), sendApi(_vPJ[Q[161]], Q[458], {
        'partner_id': _vPJ[Q[169]],
        'uid': _vPJ[Q[20]],
        'game_pkg': _vPJ[Q[22]],
        'server_id': pzb9d,
        'platform': _vPJ[Q[86]],
        'platform_uid': _vPJ[Q[300]],
        'check_login_time': _vPJ[Q[303]],
        'check_login_sign': _vPJ[Q[301]],
        'version_name': _vPJ[Q[261]]
    }, _vJHPV, _vVJP, _vJH, function (a74e5f) {
        return a74e5f[Q[205]] == Q[294] || a74e5f[Q[1]] == Q[459] || a74e5f[Q[1]] == Q[460];
    });
}, window['_vJHPV'] = function (n1iu) {
    var af5 = this;
    if (n1iu && n1iu[Q[205]] === Q[294] && n1iu[Q[204]]) {
        var vyh3l = _vPJ[Q[23]];
        vyh3l[Q[461]] = _vPJ[Q[173]], vyh3l[Q[302]] = String(n1iu[Q[204]][Q[462]]), vyh3l[Q[179]] = parseInt(n1iu[Q[204]][Q[304]]);
        if (n1iu[Q[204]][Q[463]]) vyh3l[Q[463]] = parseInt(n1iu[Q[204]][Q[463]]);else vyh3l[Q[463]] = parseInt(n1iu[Q[204]][Q[24]]);
        vyh3l[Q[464]] = 0x0, vyh3l[Q[21]] = _vPJ[Q[344]], vyh3l[Q[465]] = n1iu[Q[204]][Q[466]], vyh3l[Q[467]] = n1iu[Q[204]][Q[467]];
        if (n1iu[Q[204]][Q[468]]) vyh3l[Q[468]] = parseInt(n1iu[Q[204]][Q[468]]);
        console[Q[42]](Q[469] + JSON[Q[27]](vyh3l[Q[467]])), _vPJ[Q[321]] == 0x1 && vyh3l[Q[467]] && vyh3l[Q[467]][Q[470]] == 0x1 && (_vPJ[Q[471]] = 0x1, window[Q[36]][Q[37]][Q[472]]()), _vJVHP();
    } else {
        if (_vPJ[Q[456]][Q[473]] >= 0x3) {
            var _6zbo = n1iu ? n1iu[Q[205]] : '';
            window[Q[218]](0xc, Q[474] + _6zbo), _vJH(JSON[Q[27]](n1iu)), window['_vHVPJ'](Q[475] + _6zbo);
        } else sendApi(_vPJ[Q[161]], Q[278], {
            'platform': _vPJ[Q[159]],
            'partner_id': _vPJ[Q[169]],
            'token': _vPJ[Q[272]],
            'game_pkg': _vPJ[Q[22]],
            'deviceId': _vPJ[Q[170]],
            'scene': Q[279] + _vPJ[Q[171]]
        }, function (l3mhy) {
            if (!l3mhy || l3mhy[Q[205]] != Q[294]) {
                window['_vHVPJ'](Q[296] + l3mhy && l3mhy[Q[205]]);
                return;
            }
            _vPJ[Q[301]] = String(l3mhy[Q[302]]), _vPJ[Q[303]] = String(l3mhy[Q[304]]), setTimeout(function () {
                _vJHVP(_vPJ[Q[456]][Q[473]] + 0x1, _vPJ[Q[456]][Q[24]]);
            }, 0x5dc);
        }, _vVJP, _vJH, function (qj8sx) {
            return qj8sx[Q[205]] == Q[294] || qj8sx[Q[205]] == Q[476];
        });
    }
}, window['_vJVHP'] = function () {
    ServerLoading[Q[37]][Q[340]](_vPJ[Q[321]]), window['_vVJ'] = !![], window['_vJPHV']();
}, window['_vJVPH'] = function () {
    if (window['_vJV'] && window['_vPVJ'] && window[Q[186]] && window[Q[187]] && window['_vPJV'] && window['_vPV']) {
        if (!window[Q[477]][Q[37]]) {
            console[Q[42]](Q[478] + window[Q[477]][Q[37]]);
            var ciy$1u = wx[Q[479]](),
                w3klhv = ciy$1u[Q[140]] ? ciy$1u[Q[140]] : 0x0,
                n02p9d = {
                'cdn': window[Q[16]][Q[21]],
                'spareCdn': window[Q[16]][Q[259]],
                'newRegister': window[Q[16]][Q[321]],
                'wxPC': window[Q[16]][Q[115]],
                'wxIOS': window[Q[16]][Q[109]],
                'wxAndroid': window[Q[16]][Q[112]],
                'wxParam': {
                    'limitLoad': window[Q[16]]['_vUHVJP'],
                    'benchmarkLevel': window[Q[16]]['_vUHPVJ'],
                    'wxFrom': window[Q[6]][Q[266]] == Q[480] ? 0x1 : 0x0,
                    'wxSDKVersion': window['SDKVersion']
                },
                'configType': window[Q[16]][Q[180]],
                'exposeType': window[Q[16]][Q[182]],
                'scene': w3klhv,
                'video_type': window[Q[16]][Q[274]],
                'ad_flag': window[Q[16]][Q[276]]
            };
            if (window[Q[346]]) for (var _p6b9z in window[Q[346]]) {
                if (!n02p9d[_p6b9z]) n02p9d[_p6b9z] = window[Q[346]][_p6b9z];
            }
            new window[Q[477]](n02p9d, window[Q[16]]['lastVersion'], window['_vUHVPJ']);
        }
    }
}, window['_vJPHV'] = function () {
    if (window['_vJV'] && window['_vPVJ'] && window[Q[186]] && window[Q[187]] && window['_vPJV'] && window['_vPV'] && window['_vVJ'] && window['_vVP']) {
        _vHPJV();
        if (!_vJVP) {
            _vJVP = !![];
            if (!window[Q[477]][Q[37]]) window['_vJVPH']();
            var hcmyl$ = 0x0,
                u012n = wx[Q[481]]();
            u012n && (window[Q[16]][Q[114]] && (hcmyl$ = u012n[Q[104]]), console[Q[1]](Q[482] + u012n[Q[104]] + Q[483] + u012n[Q[105]] + Q[484] + u012n[Q[106]] + Q[485] + u012n[Q[107]] + Q[486] + u012n[Q[487]] + Q[488] + u012n[Q[489]]));
            var iu$y1c = {};
            for (const zf57 in _vPJ[Q[23]]) {
                iu$y1c[zf57] = _vPJ[Q[23]][zf57];
            }
            var bpz_69 = {
                'channel': window[Q[16]][Q[174]],
                'account': window[Q[16]][Q[20]],
                'userId': window[Q[16]][Q[299]],
                'cdn': window[Q[16]][Q[21]],
                'data': window[Q[16]][Q[204]],
                'package': window[Q[16]][Q[158]],
                'newRegister': window[Q[16]][Q[321]],
                'pkgName': window[Q[16]][Q[22]],
                'partnerId': window[Q[16]][Q[169]],
                'platform_uid': window[Q[16]][Q[300]],
                'deviceId': window[Q[16]][Q[170]],
                'selectedServer': iu$y1c,
                'configType': window[Q[16]][Q[180]],
                'exposeType': window[Q[16]][Q[182]],
                'debugUsers': window[Q[16]][Q[177]],
                'wxMenuTop': hcmyl$,
                'wxShield': window[Q[16]][Q[185]],
                'encryptParam': window[Q[16]][Q[183]],
                'wx_channel': window[Q[16]][Q[273]],
                'zsy_tp_state': window[Q[16]][Q[275]]
            };
            if (window[Q[346]]) for (var hlv3m in window[Q[346]]) {
                bpz_69[hlv3m] = window[Q[346]][hlv3m];
            }
            window[Q[477]][Q[37]][Q[490]](bpz_69);
            if (_vPJ[Q[23]] && _vPJ[Q[23]][Q[24]]) localStorage[Q[491]](Q[307] + _vPJ[Q[22]] + _vPJ[Q[20]], _vPJ[Q[23]][Q[24]]);
        }
    } else console[Q[1]](Q[492] + window['_vJV'] + Q[493] + window['_vPVJ'] + Q[494] + window[Q[186]] + Q[495] + window[Q[187]] + ',loadVersion:' + window['_vPJV'] + Q[496] + window['_vPV'] + Q[497] + window['_vVJ'] + Q[498] + window['_vVP']);
};