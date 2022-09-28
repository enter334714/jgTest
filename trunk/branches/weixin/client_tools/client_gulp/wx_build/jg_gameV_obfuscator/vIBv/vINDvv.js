var Q = wx.$v;
import vmhy$1 from '../vvavvv/v7tvv.js';
window[Q[151]] = { 'wxVersion': window[Q[6]][Q[7]] }, window[Q[152]] = ![], window[Q[153]] = 0x1, window['ENV'] = 0x1, window['_vVPJ'] = !![], window[Q[154]] = !![], window['_vUHVPJ'] = '', window[Q[155]] = ![], window[Q[16]] = {
    'base_cdn': Q[156],
    'cdn': Q[156]
}, _vPJ[Q[157]] = {}, _vPJ[Q[158]] = '0', _vPJ[Q[82]] = window[Q[151]]['wxVersion'], _vPJ[Q[117]] = '', _vPJ['os'] = '1', _vPJ[Q[159]] = Q[160], _vPJ[Q[161]] = Q[162], _vPJ[Q[163]] = Q[164], _vPJ[Q[165]] = Q[166], _vPJ[Q[167]] = Q[168], _vPJ[Q[169]] = '1', _vPJ[Q[22]] = '', _vPJ[Q[170]] = '', _vPJ[Q[171]] = 0x0, _vPJ[Q[172]] = {}, _vPJ[Q[173]] = parseInt(_vPJ[Q[169]]), _vPJ[Q[174]] = _vPJ[Q[169]], _vPJ[Q[23]] = {}, _vPJ[Q[30]] = Q[175], _vPJ[Q[176]] = ![], _vPJ[Q[177]] = Q[178], _vPJ[Q[179]] = Date[Q[144]](), _vPJ[Q[180]] = Q[181], _vPJ[Q[182]] = '_a', _vPJ[Q[183]] = 0x2, _vPJ['lastVersion'] = 0x7c1, _vPJ['wxVersion'] = window[Q[151]]['wxVersion'], _vPJ[Q[184]] = ![], _vPJ[Q[109]] = ![], _vPJ[Q[112]] = ![], _vPJ[Q[115]] = ![], window['_vVJP'] = 0x5, window['_vVJ'] = ![], window['_vJV'] = ![], window['_vPVJ'] = ![], window[Q[185]] = ![], window[Q[186]] = ![], window['_vPJV'] = ![], window['_vVP'] = ![], window['_vPV'] = ![], window['_vJVP'] = ![], window[Q[187]] = null, window[Q[188]] = function (c$uyi1) {
    console[Q[42]](Q[188], c$uyi1), wx[Q[189]]({}), wx[Q[49]]({
        'title': Q[74],
        'content': c$uyi1,
        'success'(iy1m) {
            if (iy1m[Q[190]]) console[Q[42]](Q[191]);else iy1m[Q[192]] && console[Q[42]](Q[193]);
        }
    });
}, window['_vHVPJ'] = function (_6zpb9) {
    console[Q[42]](Q[194], _6zpb9), _vHPJV(), wx[Q[49]]({
        'title': Q[74],
        'content': _6zpb9,
        'confirmText': Q[195],
        'cancelText': Q[196],
        'success'(b2d6p) {
            if (b2d6p[Q[190]]) window[Q[71]]();else b2d6p[Q[192]] && (console[Q[42]](Q[197]), wx[Q[198]]({}));
        }
    });
}, window[Q[199]] = function (wlm3) {
    console[Q[42]](Q[199], wlm3), wx[Q[49]]({
        'title': Q[74],
        'content': wlm3,
        'confirmText': Q[200],
        'showCancel': ![],
        'complete'($icn1u) {
            console[Q[42]](Q[197]), wx[Q[198]]({});
        }
    });
}, window['_vHVJP'] = ![], window['_vHPVJ'] = function (fboz5_) {
    window['_vHVJP'] = !![], wx[Q[201]](fboz5_);
}, window['_vHPJV'] = function () {
    window['_vHVJP'] && (window['_vHVJP'] = ![], wx[Q[189]]({}));
}, window['_vHJVP'] = function (d9zb6) {
    window[Q[36]][Q[37]]['_vHJVP'](d9zb6);
}, window[Q[202]] = function (ciy$1m, m$1) {
    vmhy$1[Q[202]](ciy$1m, function (gt) {
        gt && gt[Q[203]] ? gt[Q[203]][Q[204]] == 0x1 ? m$1(!![]) : (m$1(![]), console[Q[1]](Q[205] + gt[Q[203]][Q[206]])) : console[Q[42]](Q[202], gt);
    });
}, window['_vHJPV'] = function (qgsx8j) {
    console[Q[42]](Q[207], qgsx8j);
}, window[Q[208]] = function (jxq8s) {}, window[Q[209]] = function (xjtqrk, vrtwk, trkxqw) {}, window[Q[210]] = function (zfo7) {
    console[Q[42]](Q[211], zfo7), window[Q[36]][Q[37]][Q[212]](), window[Q[36]][Q[37]][Q[213]](), window[Q[36]][Q[37]][Q[214]]();
}, window[Q[215]] = function (ch1m$) {
    window[Q[216]](0xe, Q[217] + ch1m$), window['_vHVPJ'](Q[218]);
    var _5ozf = {
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
        'error': Q[219],
        'stack': ch1m$ ? ch1m$ : Q[218]
    },
        wk = JSON[Q[27]](_5ozf);
    console[Q[28]](Q[220] + wk), window[Q[30]](wk);
}, window[Q[216]] = function (ofae57, i$1cuy) {
    sendApi(_vPJ[Q[163]], Q[221], {
        'game_pkg': _vPJ[Q[22]],
        'partner_id': _vPJ[Q[169]],
        'server_id': _vPJ[Q[23]] && _vPJ[Q[23]][Q[24]] > 0x0 ? _vPJ[Q[23]][Q[24]] : 0x0,
        'uid': _vPJ[Q[20]] > 0x0 ? _vPJ[Q[20]] : 0x0,
        'type': ofae57,
        'info': i$1cuy
    });
}, window[Q[222]] = function (lmyc$) {
    var _9p6zb = JSON[Q[223]](lmyc$);
    _9p6zb[Q[224]] = window[Q[6]][Q[7]], _9p6zb[Q[225]] = window[Q[16]][Q[23]] ? window[Q[16]][Q[23]][Q[24]] : 0x0, _9p6zb[Q[25]] = window[Q[25]];
    var xwkt = JSON[Q[27]](_9p6zb);
    console[Q[28]](Q[226] + xwkt), window[Q[30]](xwkt);
}, window[Q[72]] = function (n1i2, wrktq) {
    var lwmv = {
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
        'error': n1i2,
        'stack': wrktq
    },
        r3lvk = JSON[Q[27]](lwmv);
    console[Q[145]](Q[227] + r3lvk), window[Q[30]](r3lvk);
}, window[Q[30]] = function (d62p0) {
    if (window[Q[16]][Q[118]] == Q[228]) return;
    var kvh3wl = _vPJ[Q[30]] + Q[229] + _vPJ[Q[20]];
    wx[Q[230]]({
        'url': kvh3wl,
        'method': Q[231],
        'data': d62p0,
        'header': {
            'content-type': Q[232],
            'cache-control': Q[233]
        },
        'success': function (zf7) {
            DEBUG && console[Q[42]](Q[234], kvh3wl, d62p0, zf7);
        },
        'fail': function (rk3lw) {
            DEBUG && console[Q[42]](Q[234], kvh3wl, d62p0, rk3lw);
        },
        'complete': function () {}
    });
}, window[Q[235]] = function () {
    function z9b6p_() {
        return ((0x1 + Math[Q[236]]()) * 0x10000 | 0x0)[Q[237]](0x10)[Q[238]](0x1);
    }
    return z9b6p_() + z9b6p_() + '-' + z9b6p_() + '-' + z9b6p_() + '-' + z9b6p_() + '+' + z9b6p_() + z9b6p_() + z9b6p_();
}, window[Q[71]] = function () {
    console[Q[42]](Q[239]);
    var vkrl = vmhy$1[Q[240]]();
    _vPJ[Q[174]] = vkrl[Q[241]], _vPJ[Q[173]] = vkrl[Q[241]], _vPJ[Q[169]] = vkrl[Q[241]], _vPJ[Q[22]] = vkrl[Q[242]];
    var vl3wkh = { 'game_ver': _vPJ[Q[82]] };
    _vPJ[Q[170]] = this[Q[235]](), _vHPVJ({ 'title': Q[243] }), vmhy$1[Q[244]](vl3wkh, this[Q[245]][Q[246]](this));
}, window[Q[245]] = function (qkw) {
    var i102nu = qkw[Q[247]];
    sdkInitRes = qkw, console[Q[42]](Q[248] + i102nu + Q[249] + (i102nu == 0x1) + Q[250] + qkw[Q[7]] + Q[251] + window[Q[151]]['wxVersion']);
    if (!qkw[Q[7]] || window['_vUVJHP'](window[Q[151]]['wxVersion'], qkw[Q[7]]) < 0x0) console[Q[42]](Q[252]), _vPJ[Q[161]] = Q[253], _vPJ[Q[163]] = Q[254], _vPJ[Q[165]] = Q[255], _vPJ[Q[21]] = Q[256], _vPJ[Q[257]] = Q[258], _vPJ[Q[259]] = 'qy', _vPJ[Q[184]] = ![];else window['_vUVJHP'](window[Q[151]]['wxVersion'], qkw[Q[7]]) == 0x0 ? (console[Q[42]](Q[260]), _vPJ[Q[161]] = Q[162], _vPJ[Q[163]] = Q[164], _vPJ[Q[165]] = Q[166], _vPJ[Q[21]] = Q[261], _vPJ[Q[257]] = Q[258], _vPJ[Q[259]] = Q[262], _vPJ[Q[184]] = !![]) : (console[Q[42]](Q[263]), _vPJ[Q[161]] = Q[162], _vPJ[Q[163]] = Q[164], _vPJ[Q[165]] = Q[166], _vPJ[Q[21]] = Q[261], _vPJ[Q[257]] = Q[258], _vPJ[Q[259]] = Q[262], _vPJ[Q[184]] = ![]);
    _vPJ[Q[171]] = config[Q[264]] ? config[Q[264]] : 0x0, this['_vVPHJ'](), this['_vVPJH'](), window[Q[265]] = 0x5, _vHPVJ({ 'title': Q[266] }), vmhy$1[Q[267]](this[Q[268]][Q[246]](this));
}, window[Q[265]] = 0x5, window[Q[268]] = function (wktrvx, udn02i) {
    if (wktrvx == 0x0 && udn02i && udn02i[Q[269]]) {
        _vPJ[Q[270]] = udn02i[Q[269]], _vPJ[Q[271]] = udn02i[Q[271]];
        var cm$i1y = this;
        _vHPVJ({ 'title': Q[272] }), sendApi(_vPJ[Q[161]], Q[273], {
            'platform': _vPJ[Q[159]],
            'partner_id': _vPJ[Q[169]],
            'token': udn02i[Q[269]],
            'game_pkg': _vPJ[Q[22]],
            'deviceId': _vPJ[Q[170]],
            'scene': Q[274] + _vPJ[Q[171]]
        }, this['_vVHPJ'][Q[246]](this), _vVJP, _vJH);
    } else udn02i && udn02i[Q[59]] && window[Q[265]] > 0x0 && (udn02i[Q[59]][Q[110]](Q[275]) != -0x1 || udn02i[Q[59]][Q[110]](Q[276]) != -0x1 || udn02i[Q[59]][Q[110]](Q[277]) != -0x1 || udn02i[Q[59]][Q[110]](Q[278]) != -0x1 || udn02i[Q[59]][Q[110]](Q[279]) != -0x1 || udn02i[Q[59]][Q[110]](Q[280]) != -0x1) ? (window[Q[265]]--, vmhy$1[Q[267]](this[Q[268]][Q[246]](this))) : (window[Q[216]](0x1, Q[281] + wktrvx + Q[282] + (udn02i ? udn02i[Q[59]] : '')), window[Q[72]](Q[283], JSON[Q[27]]({
        'status': wktrvx,
        'data': udn02i
    })), window['_vHVPJ'](Q[284] + (udn02i && udn02i[Q[59]] ? '，' + udn02i[Q[59]] : '')));
}, window['_vVHPJ'] = function (xwrktq) {
    if (!xwrktq) {
        window[Q[216]](0x2, Q[285]), window[Q[72]](Q[286], Q[287]), window['_vHVPJ'](Q[288]);
        return;
    }
    if (xwrktq[Q[204]] != Q[289]) {
        window[Q[216]](0x2, Q[290] + xwrktq[Q[204]]), window[Q[72]](Q[286], JSON[Q[27]](xwrktq)), window['_vHVPJ'](Q[291] + xwrktq[Q[204]]);
        return;
    }
    if (xwrktq[Q[292]] == 0x1) {
        window['_vHVPJ'](Q[293]);
        return;
    }
    _vPJ[Q[294]] = String(xwrktq[Q[20]]), _vPJ[Q[20]] = String(xwrktq[Q[20]]), _vPJ[Q[86]] = String(xwrktq[Q[86]]), _vPJ[Q[174]] = String(xwrktq[Q[86]]), _vPJ[Q[295]] = String(xwrktq[Q[295]]), _vPJ[Q[296]] = String(xwrktq[Q[297]]), _vPJ[Q[298]] = String(xwrktq[Q[299]]), _vPJ[Q[297]] = '';
    var _7zf5 = this;
    _vHPVJ({ 'title': Q[300] });
    var jxrkt = localStorage[Q[301]](Q[302] + _vPJ[Q[22]] + _vPJ[Q[20]]);
    if (jxrkt && jxrkt != '') {
        var jgqxs8 = Number(jxrkt);
        _7zf5[Q[303]](jgqxs8);
    } else _7zf5[Q[304]]();
}, window[Q[304]] = function () {
    var wvtkr = this;
    sendApi(_vPJ[Q[161]], Q[305], {
        'partner_id': _vPJ[Q[169]],
        'uid': _vPJ[Q[20]],
        'version': _vPJ[Q[82]],
        'game_pkg': _vPJ[Q[22]],
        'device': _vPJ[Q[170]]
    }, wvtkr['_vVHJP'][Q[246]](wvtkr), _vVJP, _vJH);
}, window['_vVHJP'] = function (dp6z9b) {
    if (!dp6z9b) {
        window[Q[216]](0x3, Q[306]), window['_vHVPJ'](Q[306]);
        return;
    }
    if (dp6z9b[Q[204]] != Q[289]) {
        window[Q[216]](0x3, Q[307] + dp6z9b[Q[204]]), window['_vHVPJ'](Q[307] + dp6z9b[Q[204]]);
        return;
    }
    if (!dp6z9b[Q[203]] || dp6z9b[Q[203]][Q[10]] == 0x0) {
        window[Q[216]](0x3, Q[308]), window['_vHVPJ'](Q[309]);
        return;
    }
    this[Q[310]](dp6z9b);
}, window[Q[303]] = function (i$cnu1) {
    var b9z6o = this;
    sendApi(_vPJ[Q[161]], Q[311], {
        'server_id': i$cnu1,
        'time': Date[Q[144]]() / 0x3e8
    }, b9z6o[Q[312]][Q[246]](b9z6o), _vVJP, _vJH);
}, window[Q[312]] = function (h3vlk) {
    if (!h3vlk) {
        window[Q[216]](0x4, Q[313]), this[Q[304]]();
        return;
    }
    if (h3vlk[Q[204]] != Q[289]) {
        window[Q[216]](0x4, Q[314] + h3vlk[Q[204]]), this[Q[304]]();
        return;
    }
    if (!h3vlk[Q[203]] || h3vlk[Q[203]][Q[10]] == 0x0) {
        window[Q[216]](0x4, Q[315]), this[Q[304]]();
        return;
    }
    this[Q[310]](h3vlk);
}, window[Q[310]] = function ($lyh) {
    _vPJ[Q[316]] = $lyh[Q[317]] != undefined ? $lyh[Q[317]] : 0x0, _vPJ[Q[23]] = {
        'server_id': String($lyh[Q[203]][0x0][Q[24]]),
        'server_name': String($lyh[Q[203]][0x0][Q[318]]),
        'entry_ip': $lyh[Q[203]][0x0][Q[319]],
        'entry_port': parseInt($lyh[Q[203]][0x0][Q[320]]),
        'status': _vPVH($lyh[Q[203]][0x0]),
        'start_time': $lyh[Q[203]][0x0][Q[321]],
        'maintain_time': $lyh[Q[203]][0x0][Q[322]] ? $lyh[Q[203]][0x0][Q[322]] : '',
        'is_recommend': $lyh[Q[203]][0x0][Q[323]],
        'cdn': _vPJ[Q[21]]
    }, this['_vJPVH'](), window[Q[36]] && window[Q[36]][Q[37]][Q[324]] && window[Q[36]][Q[37]][Q[324]](sdkInitRes[Q[325]], sdkInitRes[Q[326]], sdkInitRes[Q[327]], sdkInitRes[Q[328]], sdkInitRes[Q[329]]);
}, window['_vJPVH'] = function () {
    if (_vPJ[Q[316]] == 0x1) {
        var $3ylh = _vPJ[Q[23]][Q[330]];
        if ($3ylh === -0x1 || $3ylh === 0x0) {
            window[Q[216]](0xf, Q[331] + _vPJ[Q[23]]['id'] + Q[332] + _vPJ[Q[23]][Q[330]]), window['_vHVPJ']($3ylh === -0x1 ? Q[333] : Q[334]);
            return;
        }
        _vJHVP(0x0, _vPJ[Q[23]][Q[24]]), window[Q[36]][Q[37]][Q[335]](_vPJ[Q[316]]);
    } else window[Q[36]][Q[37]][Q[336]](), _vHPJV();
    window['_vPV'] = !![], window['_vJVPH'](), window['_vJPHV']();
}, window['_vVPHJ'] = function () {
    sendApi(_vPJ[Q[161]], 'User.getCdnVersion', {
        'game_pkg': _vPJ[Q[22]],
        'version_name': _vPJ[Q[259]]
    }, this['reqVersionConfigCallBack'][Q[246]](this), _vVJP, _vJH);
}, window['reqVersionConfigCallBack'] = function (_6oz9) {
    if (!_6oz9) {
        window[Q[216]](0x5, 'User.getCdnVersion failed'), window['_vHVPJ']('User.getCdnVersion failed');
        return;
    }
    if (_6oz9[Q[204]] != Q[289]) {
        window[Q[216]](0x5, 'User.getCdnVersion failed: state=' + _6oz9[Q[204]]), window['_vHVPJ']('User.getCdnVersion failed: state=' + _6oz9[Q[204]]);
        return;
    }
    if (!_6oz9[Q[203]] || !_6oz9[Q[203]][Q[82]]) {
        window[Q[216]](0x5, 'User.getCdnVersion failed: version=' + (_6oz9[Q[203]] && _6oz9[Q[203]][Q[82]])), window['_vHVPJ']('User.getCdnVersion failed: version=' + (_6oz9[Q[203]] && _6oz9[Q[203]][Q[82]]));
        return;
    }
    _6oz9[Q[203]][Q[337]] && _6oz9[Q[203]][Q[337]][Q[10]] > 0xa && (_vPJ[Q[338]] = _6oz9[Q[203]][Q[337]], _vPJ[Q[21]] = _6oz9[Q[203]][Q[337]]), _6oz9[Q[203]][Q[82]] && (_vPJ['lastVersion'] = _6oz9[Q[203]][Q[82]]), console[Q[1]]('lastVersion:' + _vPJ['lastVersion'] + Q[339] + _vPJ[Q[259]]), window['_vPJV'] = !![], window['_vJVPH'](), window['_vJPHV']();
}, window[Q[340]], window['_vVPJH'] = function () {
    sendApi(_vPJ[Q[161]], Q[341], { 'game_pkg': _vPJ[Q[22]] }, this['_vVJHP'][Q[246]](this), _vVJP, _vJH);
}, window['_vVJHP'] = function (kxwtr) {
    if (kxwtr && kxwtr[Q[204]] === Q[289] && kxwtr[Q[203]]) {
        window[Q[340]] = kxwtr[Q[203]];
        for (var b9_z6o in kxwtr[Q[203]]) {
            _vPJ[b9_z6o] = kxwtr[Q[203]][b9_z6o];
        }
        window[Q[342]]();
    } else window[Q[216]](0xb, Q[343]), console[Q[1]](Q[344] + kxwtr[Q[204]]);
    window['_vVP'] = !![], window['_vJPHV']();
}, window[Q[342]] = function () {
    var xkvrw = _vPJ[Q[184]] || _vPJ[Q[345]] && _vPJ[Q[345]] > 0x0;
    if (xkvrw) {
        var np2d9 = _vPJ[Q[346]],
            icy$u1 = np2d9 && np2d9[Q[10]] == 0x9;
        icy$u1 && (window[Q[347]] = np2d9);
        var uy$i = _vPJ[Q[348]],
            ud0in = uy$i && uy$i[Q[38]]('#')[Q[10]] == 0x4;
        ud0in && (window[Q[349]] = uy$i);
    }
}, window[Q[350]] = function (xqrkjt, hmlc$, b96o_z, ni$c1, mc1h$y, zbf5o, dp, l3m$hy, kqrxwt, i1u20n) {
    mc1h$y = String(mc1h$y);
    var xgtqj8 = dp,
        wk3r = l3m$hy;
    _vPJ[Q[157]][mc1h$y] = {
        'productid': mc1h$y,
        'productname': xgtqj8,
        'productdesc': wk3r,
        'roleid': xqrkjt,
        'rolename': hmlc$,
        'rolelevel': b96o_z,
        'price': zbf5o,
        'callback': kqrxwt
    }, sendApi(_vPJ[Q[165]], Q[351], {
        'game_pkg': _vPJ[Q[22]],
        'server_id': _vPJ[Q[23]][Q[24]],
        'server_name': _vPJ[Q[23]][Q[318]],
        'level': b96o_z,
        'uid': _vPJ[Q[20]],
        'role_id': xqrkjt,
        'role_name': hmlc$,
        'product_id': mc1h$y,
        'product_name': xgtqj8,
        'product_desc': wk3r,
        'money': zbf5o,
        'partner_id': _vPJ[Q[169]]
    }, toPayCallBack, _vVJP, _vJH);
}, window[Q[352]] = function (w3klh) {
    if (w3klh && (w3klh[Q[353]] === 0xc8 || w3klh[Q[204]] == Q[289])) {
        var zp9db = _vPJ[Q[157]][String(w3klh[Q[354]])];
        if (zp9db[Q[355]]) zp9db[Q[355]](w3klh[Q[354]], w3klh[Q[356]], -0x1);
        vmhy$1[Q[357]]({
            'cpbill': w3klh[Q[356]],
            'productid': w3klh[Q[354]],
            'productname': zp9db[Q[358]],
            'productdesc': zp9db[Q[359]],
            'serverid': _vPJ[Q[23]][Q[24]],
            'servername': _vPJ[Q[23]][Q[318]],
            'roleid': zp9db[Q[360]],
            'rolename': zp9db[Q[361]],
            'rolelevel': zp9db[Q[362]],
            'price': zp9db[Q[363]],
            'extension': JSON[Q[27]]({ 'cp_order_id': w3klh[Q[356]] })
        }, function (ozbf5, xrwtqk) {
            zp9db[Q[355]] && ozbf5 == 0x0 && zp9db[Q[355]](w3klh[Q[354]], w3klh[Q[356]], ozbf5);
            console[Q[1]](JSON[Q[27]]({
                'type': Q[364],
                'status': ozbf5,
                'data': w3klh,
                'role_name': zp9db[Q[361]]
            }));
            if (ozbf5 === 0x0) {} else {
                if (ozbf5 === 0x1) {} else {
                    if (ozbf5 === 0x2) {}
                }
            }
        });
    } else {
        var fa45 = w3klh ? Q[365] + w3klh[Q[353]] + Q[366] + w3klh[Q[204]] + Q[367] + w3klh[Q[1]] : Q[368];
        window[Q[216]](0xd, Q[369] + fa45), alert(fa45);
    }
}, window['_vVJPH'] = function () {}, window['_vHVJ'] = function (gqjs8x, qxr8t, y1ui$, i0n1, ao57f) {
    vmhy$1[Q[370]](_vPJ[Q[23]][Q[24]], _vPJ[Q[23]][Q[318]] || _vPJ[Q[23]][Q[24]], gqjs8x, qxr8t, y1ui$), sendApi(_vPJ[Q[161]], Q[371], {
        'game_pkg': _vPJ[Q[22]],
        'server_id': _vPJ[Q[23]][Q[24]],
        'role_id': gqjs8x,
        'uid': _vPJ[Q[20]],
        'role_name': qxr8t,
        'role_type': i0n1,
        'level': y1ui$
    });
}, window['_vHJV'] = function (qwrx, lc$y, tqjxrk, fe5_7, ob_zf5, o75ae, $h1yc, my1ci, n0p9, q8xs) {
    _vPJ[Q[17]] = qwrx, _vPJ[Q[18]] = lc$y, _vPJ[Q[19]] = tqjxrk, vmhy$1[Q[372]](_vPJ[Q[23]][Q[24]], _vPJ[Q[23]][Q[318]] || _vPJ[Q[23]][Q[24]], qwrx, lc$y, tqjxrk), sendApi(_vPJ[Q[161]], Q[373], {
        'game_pkg': _vPJ[Q[22]],
        'server_id': _vPJ[Q[23]][Q[24]],
        'role_id': qwrx,
        'uid': _vPJ[Q[20]],
        'role_name': lc$y,
        'role_type': fe5_7,
        'level': tqjxrk,
        'evolution': ob_zf5
    });
}, window['_vVHJ'] = function (yu$ic, rvkwl3, b_6p9, a7oe5, boz6, jqgx8, o_56bz, bzp6d, $ic1un, b96pz) {
    _vPJ[Q[17]] = yu$ic, _vPJ[Q[18]] = rvkwl3, _vPJ[Q[19]] = b_6p9, vmhy$1[Q[374]](_vPJ[Q[23]][Q[24]], _vPJ[Q[23]][Q[318]] || _vPJ[Q[23]][Q[24]], yu$ic, rvkwl3, b_6p9), sendApi(_vPJ[Q[161]], Q[373], {
        'game_pkg': _vPJ[Q[22]],
        'server_id': _vPJ[Q[23]][Q[24]],
        'role_id': yu$ic,
        'uid': _vPJ[Q[20]],
        'role_name': rvkwl3,
        'role_type': a7oe5,
        'level': b_6p9,
        'evolution': boz6
    });
}, window['_vVJH'] = function (jqxg8t) {}, window['_vHV'] = function (v3lmhy, vk3wrl) {
    vmhy$1[Q[375]](Q[375], { 'activity_id': vk3wrl }, function (hc) {
        v3lmhy && v3lmhy(hc);
    });
}, window[Q[376]] = function () {
    vmhy$1[Q[376]]();
}, window[Q[377]] = function () {
    vmhy$1[Q[378]]();
}, window[Q[379]] = function (lhym$3, wtvrx, bz6_5o, lm3yhv, imc1, ml$3, o5f7_z, fae75) {
    fae75 = fae75 || _vPJ[Q[23]][Q[24]], sendApi(_vPJ[Q[161]], Q[380], {
        'phone': lhym$3,
        'role_id': wtvrx,
        'uid': _vPJ[Q[20]],
        'game_pkg': _vPJ[Q[22]],
        'partner_id': _vPJ[Q[169]],
        'server_id': fae75
    }, o5f7_z, 0x2, null, function () {
        return !![];
    });
}, window[Q[138]] = function (pd6zb) {
    window['_vJHV'] = pd6zb, window['_vJHV'] && window['_vVH'] && (console[Q[1]](Q[139] + window['_vVH'][Q[140]]), window['_vJHV'](window['_vVH']), window['_vVH'] = null);
}, window['_vJVH'] = function (s8qxg, ymhc, rvxkt, cm1y$h) {
    window[Q[381]](Q[382], {
        'game_pkg': window[Q[16]][Q[22]],
        'role_id': ymhc,
        'server_id': rvxkt
    }, cm1y$h);
}, window['_vPHVJ'] = function (u1nc$, ncui1$, tv3) {
    function krxvwt(m1c$i) {
        var $lyh3m = [],
            hy3v = [],
            $imy1c = tv3 || window[Q[6]][Q[383]];
        for (var wrlv in $imy1c) {
            var niu1c$ = Number(wrlv);
            (!u1nc$ || !u1nc$[Q[10]] || u1nc$[Q[110]](niu1c$) != -0x1) && (hy3v[Q[40]]($imy1c[wrlv]), $lyh3m[Q[40]]([niu1c$, 0x3]));
        }
        window['_vUVJHP'](window['SDKVersion'], Q[384]) >= 0x0 ? (console[Q[42]](Q[385]), vmhy$1[Q[386]] && vmhy$1[Q[386]](hy3v, function (ymcl) {
            console[Q[42]](Q[387]), console[Q[42]](ymcl);
            if (ymcl && ymcl[Q[59]] == Q[388]) for (var eao5f in $imy1c) {
                if (ymcl[$imy1c[eao5f]] == Q[389]) {
                    var n2ui0 = Number(eao5f);
                    for (var yim1c$ = 0x0; yim1c$ < $lyh3m[Q[10]]; yim1c$++) {
                        if ($lyh3m[yim1c$][0x0] == n2ui0) {
                            $lyh3m[yim1c$][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['_vUVJHP'](window['SDKVersion'], Q[390]) >= 0x0 ? wx[Q[391]]({
                'withSubscriptions': !![],
                'success': function (lv3kw) {
                    var xjqr = lv3kw[Q[392]][Q[393]];
                    if (xjqr) {
                        console[Q[42]](Q[394]), console[Q[42]](xjqr);
                        for (var kjxt in $imy1c) {
                            if (xjqr[$imy1c[kjxt]] == Q[389]) {
                                var c$ni1 = Number(kjxt);
                                for (var fae547 = 0x0; fae547 < $lyh3m[Q[10]]; fae547++) {
                                    if ($lyh3m[fae547][0x0] == c$ni1) {
                                        $lyh3m[fae547][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[Q[42]]($lyh3m), ncui1$ && ncui1$($lyh3m);
                    } else console[Q[42]](Q[395]), console[Q[42]](lv3kw), console[Q[42]]($lyh3m), ncui1$ && ncui1$($lyh3m);
                },
                'fail': function () {
                    console[Q[42]](Q[396]), console[Q[42]]($lyh3m), ncui1$ && ncui1$($lyh3m);
                }
            }) : (console[Q[42]](Q[397] + window['SDKVersion']), console[Q[42]]($lyh3m), ncui1$ && ncui1$($lyh3m));
        })) : (console[Q[42]](Q[398] + window['SDKVersion']), console[Q[42]]($lyh3m), ncui1$ && ncui1$($lyh3m)), wx[Q[399]](krxvwt);
    }
    wx[Q[400]](krxvwt);
}, window['_vPHJV'] = {
    'isSuccess': ![],
    'level': Q[401],
    'isCharging': ![]
}, window['_vPVHJ'] = function (hymv3l) {
    wx[Q[126]]({
        'success': function (xrjq) {
            var ycl$h = window['_vPHJV'];
            ycl$h[Q[402]] = !![], ycl$h[Q[128]] = Number(xrjq[Q[128]])[Q[403]](0x0), ycl$h[Q[130]] = xrjq[Q[130]], hymv3l && hymv3l(ycl$h[Q[402]], ycl$h[Q[128]], ycl$h[Q[130]]);
        },
        'fail': function (bd2p) {
            console[Q[42]](Q[404], bd2p[Q[59]]);
            var qtj8rx = window['_vPHJV'];
            hymv3l && hymv3l(qtj8rx[Q[402]], qtj8rx[Q[128]], qtj8rx[Q[130]]);
        }
    });
}, window[Q[131]] = function (f75eo) {
    wx[Q[131]]({
        'success': function (hym$3) {
            f75eo && f75eo(!![], hym$3);
        },
        'fail': function (xrktwq) {
            f75eo && f75eo(![], xrktwq);
        }
    });
}, window[Q[135]] = function (d6b2) {
    if (d6b2) wx[Q[135]](d6b2);
}, window[Q[405]] = function (_zf5bo) {
    wx[Q[405]](_zf5bo);
}, window[Q[381]] = function (yh3mlv, mvh3wl, p_b6z, _zb9o6, bp62d, f4a57e, ofz75_, p92d0) {
    if (_zb9o6 == undefined) _zb9o6 = 0x1;
    wx[Q[230]]({
        'url': yh3mlv,
        'method': ofz75_ || Q[406],
        'responseType': Q[407],
        'data': mvh3wl,
        'header': { 'content-type': p92d0 || Q[232] },
        'success': function (xwkvr) {
            DEBUG && console[Q[42]](Q[408], yh3mlv, info, xwkvr);
            if (xwkvr && xwkvr[Q[409]] == 0xc8) {
                var yh$lm3 = xwkvr[Q[203]];
                !f4a57e || f4a57e(yh$lm3) ? p_b6z && p_b6z(yh$lm3) : window[Q[410]](yh3mlv, mvh3wl, p_b6z, _zb9o6, bp62d, f4a57e, xwkvr);
            } else window[Q[410]](yh3mlv, mvh3wl, p_b6z, _zb9o6, bp62d, f4a57e, xwkvr);
        },
        'fail': function (_b5zo) {
            DEBUG && console[Q[42]](Q[411], yh3mlv, info, _b5zo), window[Q[410]](yh3mlv, mvh3wl, p_b6z, _zb9o6, bp62d, f4a57e, _b5zo);
        },
        'complete': function () {}
    });
}, window[Q[410]] = function (tr3k, h$l3ym, p20n, b5o_6z, h$3lym, m3vlw, inu10) {
    b5o_6z - 0x1 > 0x0 ? setTimeout(function () {
        window[Q[381]](tr3k, h$l3ym, p20n, b5o_6z - 0x1, h$3lym, m3vlw);
    }, 0x3e8) : h$3lym && h$3lym(JSON[Q[27]]({
        'url': tr3k,
        'response': inu10
    }));
}, window[Q[412]] = function (jg8tx, a45e7, klvw, wvrlk3, hk3lw, qtg8j, vwrxtk) {
    !klvw && (klvw = {});
    var eo5af = Math[Q[413]](Date[Q[144]]() / 0x3e8);
    klvw[Q[299]] = eo5af, klvw[Q[414]] = a45e7;
    var npd0u2 = Object[Q[415]](klvw)[Q[416]](),
        i0nu2d = '',
        _b69oz = '';
    for (var ui1$y = 0x0; ui1$y < npd0u2[Q[10]]; ui1$y++) {
        i0nu2d = i0nu2d + (ui1$y == 0x0 ? '' : '&') + npd0u2[ui1$y] + klvw[npd0u2[ui1$y]], _b69oz = _b69oz + (ui1$y == 0x0 ? '' : '&') + npd0u2[ui1$y] + '=' + encodeURIComponent(klvw[npd0u2[ui1$y]]);
    }
    i0nu2d = i0nu2d + _vPJ[Q[167]];
    var _56b = Q[417] + md5(i0nu2d);
    send(jg8tx + '?' + _b69oz + (_b69oz == '' ? '' : '&') + _56b, null, wvrlk3, hk3lw, qtg8j, vwrxtk || function (vrk3wl) {
        return vrk3wl[Q[204]] == Q[289];
    }, null, Q[418]);
}, window['_vPVJH'] = function (jrqkxt, idu0n2) {
    var m1i$yc = 0x0;
    _vPJ[Q[23]] && (m1i$yc = _vPJ[Q[23]][Q[24]]), sendApi(_vPJ[Q[163]], Q[419], {
        'partnerId': _vPJ[Q[169]],
        'gamePkg': _vPJ[Q[22]],
        'logTime': Math[Q[413]](Date[Q[144]]() / 0x3e8),
        'platformUid': _vPJ[Q[295]],
        'type': jrqkxt,
        'serverId': m1i$yc
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['_vPJHV'] = function (pndu20) {
    sendApi(_vPJ[Q[161]], Q[420], {
        'partner_id': _vPJ[Q[169]],
        'uid': _vPJ[Q[20]],
        'version': _vPJ[Q[82]],
        'game_pkg': _vPJ[Q[22]],
        'device': _vPJ[Q[170]]
    }, _vPJVH, _vVJP, _vJH);
}, window['_vPJVH'] = function (ui20dn) {
    if (ui20dn && ui20dn[Q[204]] === Q[289] && ui20dn[Q[203]]) {
        ui20dn[Q[203]][Q[421]]({
            'id': -0x2,
            'name': Q[422]
        }), ui20dn[Q[203]][Q[421]]({
            'id': -0x1,
            'name': Q[423]
        }), _vPJ[Q[424]] = ui20dn[Q[203]];
        if (window[Q[425]]) window[Q[425]][Q[426]]();
    } else {
        _vPJ[Q[427]] = ![];
        var pd6092 = ui20dn ? ui20dn[Q[204]] : '';
        window[Q[216]](0x7, Q[428] + pd6092), window['_vHVPJ'](Q[429] + pd6092);
    }
}, window['_vHVP'] = function (x8qgtj) {
    sendApi(_vPJ[Q[161]], Q[430], {
        'partner_id': _vPJ[Q[169]],
        'uid': _vPJ[Q[20]],
        'version': _vPJ[Q[82]],
        'game_pkg': _vPJ[Q[22]],
        'device': _vPJ[Q[170]]
    }, _vHPV, _vVJP, _vJH);
}, window['_vHPV'] = function ($1yuic) {
    _vPJ[Q[431]] = ![];
    if ($1yuic && $1yuic[Q[204]] === Q[289] && $1yuic[Q[203]]) {
        for (var hcmy1 = 0x0; hcmy1 < $1yuic[Q[203]][Q[10]]; hcmy1++) {
            $1yuic[Q[203]][hcmy1][Q[330]] = _vPVH($1yuic[Q[203]][hcmy1]);
        }
        _vPJ[Q[172]][-0x1] = window[Q[432]]($1yuic[Q[203]]), window[Q[425]][Q[433]](-0x1);
    } else {
        var upn20d = $1yuic ? $1yuic[Q[204]] : '';
        window[Q[216]](0x8, Q[434] + upn20d), window['_vHVPJ'](Q[435] + upn20d);
    }
}, window[Q[436]] = function (efo_75) {
    sendApi(_vPJ[Q[161]], Q[430], {
        'partner_id': _vPJ[Q[169]],
        'uid': _vPJ[Q[20]],
        'version': _vPJ[Q[82]],
        'game_pkg': _vPJ[Q[22]],
        'device': _vPJ[Q[170]]
    }, efo_75, _vVJP, _vJH);
}, window['_vVHP'] = function (ae475, hlmvw3) {
    sendApi(_vPJ[Q[161]], Q[437], {
        'partner_id': _vPJ[Q[169]],
        'uid': _vPJ[Q[20]],
        'version': _vPJ[Q[82]],
        'game_pkg': _vPJ[Q[22]],
        'device': _vPJ[Q[170]],
        'server_group_id': hlmvw3
    }, _vVPH, _vVJP, _vJH);
}, window['_vVPH'] = function (wtrkqx) {
    _vPJ[Q[431]] = ![];
    if (wtrkqx && wtrkqx[Q[204]] === Q[289] && wtrkqx[Q[203]] && wtrkqx[Q[203]][Q[203]]) {
        var u2np = wtrkqx[Q[203]][Q[438]],
            dp69bz = [];
        for (var wkxtrq = 0x0; wkxtrq < wtrkqx[Q[203]][Q[203]][Q[10]]; wkxtrq++) {
            wtrkqx[Q[203]][Q[203]][wkxtrq][Q[330]] = _vPVH(wtrkqx[Q[203]][Q[203]][wkxtrq]), (dp69bz[Q[10]] == 0x0 || wtrkqx[Q[203]][Q[203]][wkxtrq][Q[330]] != 0x0) && (dp69bz[dp69bz[Q[10]]] = wtrkqx[Q[203]][Q[203]][wkxtrq]);
        }
        _vPJ[Q[172]][u2np] = window[Q[432]](dp69bz), window[Q[425]][Q[433]](u2np);
    } else {
        var xwrvkt = wtrkqx ? wtrkqx[Q[204]] : '';
        window[Q[216]](0x9, Q[439] + xwrvkt), window['_vHVPJ'](Q[440] + xwrvkt);
    }
}, window['_vUVJP'] = function (zb6_9) {
    sendApi(_vPJ[Q[161]], Q[441], {
        'partner_id': _vPJ[Q[169]],
        'uid': _vPJ[Q[20]],
        'version': _vPJ[Q[82]],
        'game_pkg': _vPJ[Q[22]],
        'device': _vPJ[Q[170]]
    }, reqServerRecommendCallBack, _vVJP, _vJH);
}, window[Q[442]] = function (hvyl) {
    _vPJ[Q[431]] = ![];
    if (hvyl && hvyl[Q[204]] === Q[289] && hvyl[Q[203]]) {
        for (var fa = 0x0; fa < hvyl[Q[203]][Q[10]]; fa++) {
            hvyl[Q[203]][fa][Q[330]] = _vPVH(hvyl[Q[203]][fa]);
        }
        _vPJ[Q[172]][-0x2] = window[Q[432]](hvyl[Q[203]]), window[Q[425]][Q[433]](-0x2);
    } else {
        var cnui01 = hvyl ? hvyl[Q[204]] : '';
        window[Q[216]](0xa, Q[443] + cnui01), alert(Q[444] + cnui01);
    }
}, window[Q[432]] = function (yhmcl$) {
    return yhmcl$;
}, window['_vPHV'] = function (y3m$h, b_p9z6) {
    y3m$h = y3m$h || _vPJ[Q[23]][Q[24]], sendApi(_vPJ[Q[161]], Q[445], {
        'type': '4',
        'game_pkg': _vPJ[Q[22]],
        'server_id': y3m$h
    }, b_p9z6);
}, window[Q[446]] = function (npud, $yi1m, rkq, cm$ly) {
    rkq = rkq || _vPJ[Q[23]][Q[24]], sendApi(_vPJ[Q[161]], Q[447], {
        'type': npud,
        'game_pkg': $yi1m,
        'server_id': rkq
    }, cm$ly);
}, window[Q[448]] = function (h3wlmv, _6zp9b) {
    sendApi(_vPJ[Q[161]], Q[449], { 'game_pkg': h3wlmv }, _6zp9b);
}, window['_vPVH'] = function (l3vk) {
    if (l3vk) {
        if (l3vk[Q[330]] == 0x1) {
            if (l3vk[Q[450]] == 0x3) return 0x3;else return l3vk[Q[450]] == 0x1 ? 0x2 : 0x1;
        } else return l3vk[Q[330]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['_vJHVP'] = function (cni1u$, p9dn02) {
    _vPJ[Q[451]] = {
        'step': cni1u$,
        'server_id': p9dn02
    };
    var p9bz_6 = this;
    _vHPVJ({ 'title': Q[452] }), sendApi(_vPJ[Q[161]], Q[453], {
        'partner_id': _vPJ[Q[169]],
        'uid': _vPJ[Q[20]],
        'game_pkg': _vPJ[Q[22]],
        'server_id': p9dn02,
        'platform': _vPJ[Q[86]],
        'platform_uid': _vPJ[Q[295]],
        'check_login_time': _vPJ[Q[298]],
        'check_login_sign': _vPJ[Q[296]],
        'version_name': _vPJ[Q[259]]
    }, _vJHPV, _vVJP, _vJH, function (o65_z) {
        return o65_z[Q[204]] == Q[289] || o65_z[Q[1]] == Q[454] || o65_z[Q[1]] == Q[455];
    });
}, window['_vJHPV'] = function (kxtrqw) {
    var y$m3l = this;
    if (kxtrqw && kxtrqw[Q[204]] === Q[289] && kxtrqw[Q[203]]) {
        var rxtvw = _vPJ[Q[23]];
        rxtvw[Q[456]] = _vPJ[Q[173]], rxtvw[Q[297]] = String(kxtrqw[Q[203]][Q[457]]), rxtvw[Q[179]] = parseInt(kxtrqw[Q[203]][Q[299]]);
        if (kxtrqw[Q[203]][Q[458]]) rxtvw[Q[458]] = parseInt(kxtrqw[Q[203]][Q[458]]);else rxtvw[Q[458]] = parseInt(kxtrqw[Q[203]][Q[24]]);
        rxtvw[Q[459]] = 0x0, rxtvw[Q[21]] = _vPJ[Q[338]], rxtvw[Q[460]] = kxtrqw[Q[203]][Q[461]], rxtvw[Q[462]] = kxtrqw[Q[203]][Q[462]];
        if (kxtrqw[Q[203]][Q[463]]) rxtvw[Q[463]] = parseInt(kxtrqw[Q[203]][Q[463]]);
        console[Q[42]](Q[464] + JSON[Q[27]](rxtvw[Q[462]])), _vPJ[Q[316]] == 0x1 && rxtvw[Q[462]] && rxtvw[Q[462]][Q[465]] == 0x1 && (_vPJ[Q[466]] = 0x1, window[Q[36]][Q[37]][Q[467]]()), _vJVHP();
    } else {
        if (_vPJ[Q[451]][Q[468]] >= 0x3) {
            var kxvrtw = kxtrqw ? kxtrqw[Q[204]] : '';
            window[Q[216]](0xc, Q[469] + kxvrtw), _vJH(JSON[Q[27]](kxtrqw)), window['_vHVPJ'](Q[470] + kxvrtw);
        } else sendApi(_vPJ[Q[161]], Q[273], {
            'platform': _vPJ[Q[159]],
            'partner_id': _vPJ[Q[169]],
            'token': _vPJ[Q[270]],
            'game_pkg': _vPJ[Q[22]],
            'deviceId': _vPJ[Q[170]],
            'scene': Q[274] + _vPJ[Q[171]]
        }, function (y1h$) {
            if (!y1h$ || y1h$[Q[204]] != Q[289]) {
                window['_vHVPJ'](Q[291] + y1h$ && y1h$[Q[204]]);
                return;
            }
            _vPJ[Q[296]] = String(y1h$[Q[297]]), _vPJ[Q[298]] = String(y1h$[Q[299]]), setTimeout(function () {
                _vJHVP(_vPJ[Q[451]][Q[468]] + 0x1, _vPJ[Q[451]][Q[24]]);
            }, 0x5dc);
        }, _vVJP, _vJH, function (ymchl) {
            return ymchl[Q[204]] == Q[289] || ymchl[Q[204]] == Q[471];
        });
    }
}, window['_vJVHP'] = function () {
    ServerLoading[Q[37]][Q[335]](_vPJ[Q[316]]), window['_vVJ'] = !![], window['_vJPHV']();
}, window['_vJVPH'] = function () {
    if (window['_vJV'] && window['_vPVJ'] && window[Q[185]] && window[Q[186]] && window['_vPJV'] && window['_vPV']) {
        if (!window[Q[472]][Q[37]]) {
            console[Q[42]](Q[473] + window[Q[472]][Q[37]]);
            var tkrqxj = wx[Q[474]](),
                u0i21n = tkrqxj[Q[140]] ? tkrqxj[Q[140]] : 0x0,
                m$3 = {
                'cdn': window[Q[16]][Q[21]],
                'spareCdn': window[Q[16]][Q[257]],
                'newRegister': window[Q[16]][Q[316]],
                'wxPC': window[Q[16]][Q[115]],
                'wxIOS': window[Q[16]][Q[109]],
                'wxAndroid': window[Q[16]][Q[112]],
                'wxParam': {
                    'limitLoad': window[Q[16]]['_vUHVJP'],
                    'benchmarkLevel': window[Q[16]]['_vUHPVJ'],
                    'wxFrom': window[Q[6]][Q[264]] == Q[475] ? 0x1 : 0x0,
                    'wxSDKVersion': window['SDKVersion']
                },
                'configType': window[Q[16]][Q[180]],
                'exposeType': window[Q[16]][Q[182]],
                'scene': u0i21n
            };
            new window[Q[472]](m$3, window[Q[16]]['lastVersion'], window['_vUHVPJ']);
        }
    }
}, window['_vJPHV'] = function () {
    if (window['_vJV'] && window['_vPVJ'] && window[Q[185]] && window[Q[186]] && window['_vPJV'] && window['_vPV'] && window['_vVJ'] && window['_vVP']) {
        _vHPJV();
        if (!_vJVP) {
            _vJVP = !![];
            if (!window[Q[472]][Q[37]]) window['_vJVPH']();
            var p09d62 = 0x0,
                o7_z5f = wx[Q[476]]();
            o7_z5f && (window[Q[16]][Q[114]] && (p09d62 = o7_z5f[Q[104]]), console[Q[1]](Q[477] + o7_z5f[Q[104]] + Q[478] + o7_z5f[Q[105]] + Q[479] + o7_z5f[Q[106]] + Q[480] + o7_z5f[Q[107]] + Q[481] + o7_z5f[Q[482]] + Q[483] + o7_z5f[Q[484]]));
            var n0du2p = {};
            for (const b9pd6 in _vPJ[Q[23]]) {
                n0du2p[b9pd6] = _vPJ[Q[23]][b9pd6];
            }
            var nuc1i0 = {
                'channel': window[Q[16]][Q[174]],
                'account': window[Q[16]][Q[20]],
                'userId': window[Q[16]][Q[294]],
                'cdn': window[Q[16]][Q[21]],
                'data': window[Q[16]][Q[203]],
                'package': window[Q[16]][Q[158]],
                'newRegister': window[Q[16]][Q[316]],
                'pkgName': window[Q[16]][Q[22]],
                'partnerId': window[Q[16]][Q[169]],
                'platform_uid': window[Q[16]][Q[295]],
                'deviceId': window[Q[16]][Q[170]],
                'selectedServer': n0du2p,
                'configType': window[Q[16]][Q[180]],
                'exposeType': window[Q[16]][Q[182]],
                'debugUsers': window[Q[16]][Q[177]],
                'wxMenuTop': p09d62,
                'wxShield': window[Q[16]][Q[184]],
                'wx_channel': window[Q[16]][Q[271]]
            };
            if (window[Q[340]]) for (var hwlkv in window[Q[340]]) {
                nuc1i0[hwlkv] = window[Q[340]][hwlkv];
            }
            window[Q[472]][Q[37]][Q[485]](nuc1i0);
            if (_vPJ[Q[23]] && _vPJ[Q[23]][Q[24]]) localStorage[Q[486]](Q[302] + _vPJ[Q[22]] + _vPJ[Q[20]], _vPJ[Q[23]][Q[24]]);
        }
    } else console[Q[1]](Q[487] + window['_vJV'] + Q[488] + window['_vPVJ'] + Q[489] + window[Q[185]] + Q[490] + window[Q[186]] + ',loadVersion:' + window['_vPJV'] + Q[491] + window['_vPV'] + Q[492] + window['_vVJ'] + Q[493] + window['_vVP']);
};