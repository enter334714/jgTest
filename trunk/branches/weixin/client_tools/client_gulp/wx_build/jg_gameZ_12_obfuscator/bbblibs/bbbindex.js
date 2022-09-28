var _ = wx.y$;
import _djhil from '../bbbk/bbbsdk.js';
window[_[31304]] = { 'wxVersion': window[_[562]][_[31206]] }, window[_[31305]] = ![], window['p$ED'] = 0x1, window[_[31306]] = 0x1, window['p$CDE'] = !![], window[_[31307]] = !![], window['p$ABCDE'] = '', window[_[31308]] = ![], window['p$DE'] = {
    'base_cdn': _[31309],
    'cdn': _[31309]
}, p$DE[_[31310]] = {}, p$DE[_[25901]] = '0', p$DE[_[4902]] = window[_[31304]][_[31311]], p$DE[_[31279]] = '', p$DE['os'] = '1', p$DE[_[31312]] = _[31313], p$DE[_[31314]] = _[31315], p$DE[_[31316]] = _[31317], p$DE[_[31318]] = _[31319], p$DE[_[31320]] = _[31321], p$DE[_[24283]] = '1', p$DE[_[26220]] = '', p$DE[_[26222]] = '', p$DE[_[31322]] = 0x0, p$DE[_[31323]] = {}, p$DE[_[31324]] = parseInt(p$DE[_[24283]]), p$DE[_[26218]] = p$DE[_[24283]], p$DE[_[26214]] = {}, p$DE['p$BD'] = _[31325], p$DE[_[31326]] = ![], p$DE[_[12249]] = _[31327], p$DE[_[26183]] = Date[_[83]](), p$DE[_[11842]] = _[31328], p$DE[_[755]] = '_a', p$DE[_[31329]] = 0x2, p$DE[_[101]] = 0x7c1, p$DE[_[31311]] = window[_[31304]][_[31311]], p$DE[_[779]] = ![], p$DE[_[1116]] = ![], p$DE[_[11140]] = ![], p$DE[_[25903]] = ![], window['p$CED'] = 0x5, window['p$CE'] = ![], window['p$EC'] = ![], window['p$DCE'] = ![], window[_[31330]] = ![], window[_[31331]] = ![], window['p$DEC'] = ![], window['p$CD'] = ![], window['p$DC'] = ![], window['p$ECD'] = ![], window[_[31332]] = null, window[_[655]] = function (zy$_xw) {
    console[_[487]](_[655], zy$_xw), wx[_[4422]]({}), wx[_[31230]]({
        'title': _[5619],
        'content': zy$_xw,
        'success'(x0y$) {
            if (x0y$[_[31333]]) console[_[487]](_[31334]);else x0y$[_[558]] && console[_[487]](_[31335]);
        }
    });
}, window['p$BCDE'] = function (cedhfg) {
    console[_[487]](_[31336], cedhfg), p$BDEC(), wx[_[31230]]({
        'title': _[5619],
        'content': cedhfg,
        'confirmText': _[31337],
        'cancelText': _[18889],
        'success'(potqs) {
            if (potqs[_[31333]]) window['p$DB']();else potqs[_[558]] && (console[_[487]](_[31338]), wx[_[25899]]({}));
        }
    });
}, window[_[31339]] = function (xsvut) {
    console[_[487]](_[31339], xsvut), wx[_[31230]]({
        'title': _[5619],
        'content': xsvut,
        'confirmText': _[26349],
        'showCancel': ![],
        'complete'(yvuwz) {
            console[_[487]](_[31338]), wx[_[25899]]({});
        }
    });
}, window['p$BCED'] = ![], window['p$BDCE'] = function (qtusp) {
    window['p$BCED'] = !![], wx[_[4421]](qtusp);
}, window['p$BDEC'] = function () {
    window['p$BCED'] && (window['p$BCED'] = ![], wx[_[4422]]({}));
}, window['p$BECD'] = function (adecbf) {
    window[_[31221]][_[148]]['p$BECD'](adecbf);
}, window[_[12119]] = function (pmkonl, gbdecf) {
    _djhil[_[12119]](pmkonl, function (moknj) {
        moknj && moknj[_[11]] ? moknj[_[11]][_[1255]] == 0x1 ? gbdecf(!![]) : (gbdecf(![]), console[_[78]](_[31340] + moknj[_[11]][_[31341]])) : console[_[487]](_[12119], moknj);
    });
}, window['p$BEDC'] = function (xtuvw) {
    console[_[487]](_[31342], xtuvw);
}, window['p$BDE'] = function (vxwuty) {}, window['p$BED'] = function (fijkg, hmj, svwtux) {}, window['p$BE'] = function (_$30) {
    console[_[487]](_[31343], _$30), window[_[31221]][_[148]][_[31344]](), window[_[31221]][_[148]][_[31345]](), window[_[31221]][_[148]][_[31346]]();
}, window['p$EB'] = function (xtuv) {
    window[_[31347]](0xe, _[31348] + xtuv), window['p$BCDE'](_[31349]);
    var $130_ = {
        'id': window['p$DE'][_[31211]],
        'role': window['p$DE'][_[4213]],
        'level': window['p$DE'][_[31212]],
        'account': window['p$DE'][_[26219]],
        'version': window['p$DE'][_[101]],
        'cdn': window['p$DE'][_[4089]],
        'pkgName': window['p$DE'][_[26220]],
        'gamever': window[_[562]][_[31206]],
        'serverid': window['p$DE'][_[26214]] ? window['p$DE'][_[26214]][_[11316]] : 0x0,
        'systemInfo': window[_[31213]],
        'error': _[31350],
        'stack': xtuv ? xtuv : _[31349]
    },
        hecf = JSON[_[4075]]($130_);
    console[_[125]](_[31351] + hecf), window['p$BD'](hecf);
}, window[_[31347]] = function (vurstw, prqno) {
    sendApi(p$DE[_[31316]], _[31352], {
        'game_pkg': p$DE[_[26220]],
        'partner_id': p$DE[_[24283]],
        'server_id': p$DE[_[26214]] && p$DE[_[26214]][_[11316]] > 0x0 ? p$DE[_[26214]][_[11316]] : 0x0,
        'uid': p$DE[_[26219]] > 0x0 ? p$DE[_[26219]] : 0x0,
        'type': vurstw,
        'info': prqno
    });
}, window['p$DBE'] = function (lhjk) {
    var dcaeb = JSON[_[530]](lhjk);
    dcaeb[_[31353]] = window[_[562]][_[31206]], dcaeb[_[31354]] = window['p$DE'][_[26214]] ? window['p$DE'][_[26214]][_[11316]] : 0x0, dcaeb[_[31213]] = window[_[31213]];
    var qmnpl = JSON[_[4075]](dcaeb);
    console[_[125]](_[31355] + qmnpl), window['p$BD'](qmnpl);
}, window['p$DEB'] = function (jmlonk, $2_0z1) {
    var qrsupt = {
        'id': window['p$DE'][_[31211]],
        'role': window['p$DE'][_[4213]],
        'level': window['p$DE'][_[31212]],
        'account': window['p$DE'][_[26219]],
        'version': window['p$DE'][_[101]],
        'cdn': window['p$DE'][_[4089]],
        'pkgName': window['p$DE'][_[26220]],
        'gamever': window[_[562]][_[31206]],
        'serverid': window['p$DE'][_[26214]] ? window['p$DE'][_[26214]][_[11316]] : 0x0,
        'systemInfo': window[_[31213]],
        'error': jmlonk,
        'stack': $2_0z1
    },
        dfceba = JSON[_[4075]](qrsupt);
    console[_[96]](_[31356] + dfceba), window['p$BD'](dfceba);
}, window['p$BD'] = function (ghce) {
    if (window['p$DE'][_[31280]] == _[31357]) return;
    var opmk = p$DE['p$BD'] + _[31358] + p$DE[_[26219]];
    wx[_[482]]({
        'url': opmk,
        'method': _[31145],
        'data': ghce,
        'header': {
            'content-type': _[31359],
            'cache-control': _[31360]
        },
        'success': function (onlmp) {
            DEBUG && console[_[487]](_[31361], opmk, ghce, onlmp);
        },
        'fail': function (ilhmj) {
            DEBUG && console[_[487]](_[31361], opmk, ghce, ilhmj);
        },
        'complete': function () {}
    });
}, window[_[31362]] = function () {
    function befg() {
        return ((0x1 + Math[_[119]]()) * 0x10000 | 0x0)[_[271]](0x10)[_[502]](0x1);
    }
    return befg() + befg() + '-' + befg() + '-' + befg() + '-' + befg() + '+' + befg() + befg() + befg();
}, window['p$DB'] = function () {
    console[_[487]](_[31363]);
    var v$ywz = _djhil[_[31364]]();
    p$DE[_[26218]] = v$ywz[_[31365]], p$DE[_[31324]] = v$ywz[_[31365]], p$DE[_[24283]] = v$ywz[_[31365]], p$DE[_[26220]] = v$ywz[_[31366]];
    var y0$_z1 = { 'game_ver': p$DE[_[4902]] };
    p$DE[_[26222]] = this[_[31362]](), p$BDCE({ 'title': _[31367] }), _djhil[_[367]](y0$_z1, this['p$EBD'][_[74]](this));
}, window['p$EBD'] = function (ihgjkf) {
    var ihklm = ihgjkf[_[31368]];
    sdkInitRes = ihgjkf, console[_[487]](_[31369] + ihklm + _[31370] + (ihklm == 0x1) + _[31371] + ihgjkf[_[31206]] + _[31372] + window[_[31304]][_[31311]]);
    if (!ihgjkf[_[31206]] || window['p$ACEBD'](window[_[31304]][_[31311]], ihgjkf[_[31206]]) < 0x0) console[_[487]](_[31373]), p$DE[_[31314]] = _[31374], p$DE[_[31316]] = _[31375], p$DE[_[31318]] = _[31376], p$DE[_[4089]] = _[31377], p$DE[_[25900]] = _[31378], p$DE[_[31379]] = _[31380], p$DE[_[779]] = ![];else window['p$ACEBD'](window[_[31304]][_[31311]], ihgjkf[_[31206]]) == 0x0 ? (console[_[487]](_[31381]), p$DE[_[31314]] = _[31315], p$DE[_[31316]] = _[31317], p$DE[_[31318]] = _[31319], p$DE[_[4089]] = _[31382], p$DE[_[25900]] = _[31378], p$DE[_[31379]] = _[31383], p$DE[_[779]] = !![]) : (console[_[487]](_[31384]), p$DE[_[31314]] = _[31315], p$DE[_[31316]] = _[31317], p$DE[_[31318]] = _[31319], p$DE[_[4089]] = _[31385], p$DE[_[25900]] = _[31378], p$DE[_[31379]] = _[31383], p$DE[_[779]] = ![]);
    p$DE[_[31322]] = config[_[30710]] ? config[_[30710]] : 0x0, this['p$CDBE'](), this['p$CDEB'](), window[_[31386]] = 0x5, p$BDCE({ 'title': _[31387] }), _djhil[_[31140]](this['p$EDB'][_[74]](this));
}, window[_[31386]] = 0x5, window['p$EDB'] = function (_wzyx$, omplq) {
    if (_wzyx$ == 0x0 && omplq && omplq[_[30802]]) {
        p$DE[_[31388]] = omplq[_[30802]], p$DE[_[26358]] = omplq[_[26358]];
        var eghifj = this;
        p$BDCE({ 'title': _[31389] }), sendApi(p$DE[_[31314]], _[31390], {
            'platform': p$DE[_[31312]],
            'partner_id': p$DE[_[24283]],
            'token': omplq[_[30802]],
            'game_pkg': p$DE[_[26220]],
            'deviceId': p$DE[_[26222]],
            'scene': _[31391] + p$DE[_[31322]]
        }, this['p$CBDE'][_[74]](this), p$CED, p$EB);
    } else omplq && omplq[_[26415]] && window[_[31386]] > 0x0 && (omplq[_[26415]][_[115]](_[31392]) != -0x1 || omplq[_[26415]][_[115]](_[31393]) != -0x1 || omplq[_[26415]][_[115]](_[31394]) != -0x1 || omplq[_[26415]][_[115]](_[31395]) != -0x1 || omplq[_[26415]][_[115]](_[31396]) != -0x1 || omplq[_[26415]][_[115]](_[31397]) != -0x1) ? (window[_[31386]]--, _djhil[_[31140]](this['p$EDB'][_[74]](this))) : (window[_[31347]](0x1, _[31398] + _wzyx$ + _[31399] + (omplq ? omplq[_[26415]] : '')), window['p$DEB'](_[31400], JSON[_[4075]]({
        'status': _wzyx$,
        'data': omplq
    })), window['p$BCDE'](_[31401] + (omplq && omplq[_[26415]] ? '，' + omplq[_[26415]] : '')));
}, window['p$CBDE'] = function (sxwv) {
    if (!sxwv) {
        window[_[31347]](0x2, _[31402]), window['p$DEB'](_[31403], _[31404]), window['p$BCDE'](_[31405]);
        return;
    }
    if (sxwv[_[1255]] != _[9618]) {
        window[_[31347]](0x2, _[31406] + sxwv[_[1255]]), window['p$DEB'](_[31403], JSON[_[4075]](sxwv)), window['p$BCDE'](_[31407] + sxwv[_[1255]]);
        return;
    }
    if (sxwv[_[31408]] == 0x1) {
        window['p$BCDE'](_[31409]);
        return;
    }
    p$DE[_[19271]] = String(sxwv[_[26219]]), p$DE[_[26219]] = String(sxwv[_[26219]]), p$DE[_[26181]] = String(sxwv[_[26181]]), p$DE[_[26218]] = String(sxwv[_[26181]]), p$DE[_[26221]] = String(sxwv[_[26221]]), p$DE[_[31410]] = String(sxwv[_[11299]]), p$DE[_[31411]] = String(sxwv[_[892]]), p$DE[_[11299]] = '';
    var mlqop = this;
    p$BDCE({ 'title': _[31412] });
    var mjko = localStorage[_[485]](_[31413] + p$DE[_[26220]] + p$DE[_[26219]]);
    if (mjko && mjko != '') {
        var x$z0y = Number(mjko);
        mlqop[_[31414]](x$z0y);
    } else mlqop[_[31415]]();
}, window[_[31415]] = function () {
    var iefgjh = this;
    sendApi(p$DE[_[31314]], _[31416], {
        'partner_id': p$DE[_[24283]],
        'uid': p$DE[_[26219]],
        'version': p$DE[_[4902]],
        'game_pkg': p$DE[_[26220]],
        'device': p$DE[_[26222]]
    }, iefgjh['p$CBED'][_[74]](iefgjh), p$CED, p$EB);
}, window['p$CBED'] = function (_21z) {
    if (!_21z) {
        window[_[31347]](0x3, _[31417]), window['p$BCDE'](_[31417]);
        return;
    }
    if (_21z[_[1255]] != _[9618]) {
        window[_[31347]](0x3, _[31418] + _21z[_[1255]]), window['p$BCDE'](_[31418] + _21z[_[1255]]);
        return;
    }
    if (!_21z[_[11]] || _21z[_[11]][_[13]] == 0x0) {
        window[_[31347]](0x3, _[31419]), window['p$BCDE'](_[31420]);
        return;
    }
    this[_[31421]](_21z);
}, window[_[31414]] = function (qolm) {
    var mkijh = this;
    sendApi(p$DE[_[31314]], _[31422], {
        'server_id': qolm,
        'time': Date[_[83]]() / 0x3e8
    }, mkijh[_[31423]][_[74]](mkijh), p$CED, p$EB);
}, window[_[31423]] = function (z10$2) {
    if (!z10$2) {
        window[_[31347]](0x4, _[31424]), this[_[31415]]();
        return;
    }
    if (z10$2[_[1255]] != _[9618]) {
        window[_[31347]](0x4, _[31425] + z10$2[_[1255]]), this[_[31415]]();
        return;
    }
    if (!z10$2[_[11]] || z10$2[_[11]][_[13]] == 0x0) {
        window[_[31347]](0x4, _[31426]), this[_[31415]]();
        return;
    }
    this[_[31421]](z10$2);
}, window[_[31421]] = function (uspqt) {
    p$DE[_[665]] = uspqt[_[31427]] != undefined ? uspqt[_[31427]] : 0x0, p$DE[_[26214]] = {
        'server_id': String(uspqt[_[11]][0x0][_[11316]]),
        'server_name': String(uspqt[_[11]][0x0][_[31428]]),
        'entry_ip': uspqt[_[11]][0x0][_[26242]],
        'entry_port': parseInt(uspqt[_[11]][0x0][_[26243]]),
        'status': p$DCB(uspqt[_[11]][0x0]),
        'start_time': uspqt[_[11]][0x0][_[31429]],
        'maintain_time': uspqt[_[11]][0x0][_[31430]] ? uspqt[_[11]][0x0][_[31430]] : '',
        'cdn': p$DE[_[4089]]
    }, this['p$EDCB']();
}, window['p$EDCB'] = function () {
    if (p$DE[_[665]] == 0x1) {
        var uwrv = p$DE[_[26214]][_[106]];
        if (uwrv === -0x1 || uwrv === 0x0) {
            window[_[31347]](0xf, _[31431] + p$DE[_[26214]]['id'] + _[31432] + p$DE[_[26214]][_[106]]), window['p$BCDE'](uwrv === -0x1 ? _[31433] : _[31434]);
            return;
        }
        p$EBCD(0x0, p$DE[_[26214]][_[11316]]), window[_[31221]][_[148]][_[31435]](p$DE[_[665]]);
    } else window[_[31221]][_[148]][_[31436]](), p$BDEC();
    window['p$DC'] = !![], window['p$ECDB'](), window['p$EDBC']();
}, window['p$CDBE'] = function () {
    sendApi(p$DE[_[31314]], _[31437], {
        'game_pkg': p$DE[_[26220]],
        'version_name': p$DE[_[31379]]
    }, this[_[31438]][_[74]](this), p$CED, p$EB);
}, window[_[31438]] = function (wtvxsu) {
    if (!wtvxsu) {
        window[_[31347]](0x5, _[31439]), window['p$BCDE'](_[31439]);
        return;
    }
    if (wtvxsu[_[1255]] != _[9618]) {
        window[_[31347]](0x5, _[31440] + wtvxsu[_[1255]]), window['p$BCDE'](_[31440] + wtvxsu[_[1255]]);
        return;
    }
    if (!wtvxsu[_[11]] || !wtvxsu[_[11]][_[4902]]) {
        window[_[31347]](0x5, _[31441] + (wtvxsu[_[11]] && wtvxsu[_[11]][_[4902]])), window['p$BCDE'](_[31441] + (wtvxsu[_[11]] && wtvxsu[_[11]][_[4902]]));
        return;
    }
    wtvxsu[_[11]][_[31442]] && wtvxsu[_[11]][_[31442]][_[13]] > 0xa && (p$DE[_[31443]] = wtvxsu[_[11]][_[31442]], p$DE[_[4089]] = wtvxsu[_[11]][_[31442]]), wtvxsu[_[11]][_[4902]] && (p$DE[_[101]] = wtvxsu[_[11]][_[4902]]), console[_[78]](_[26355] + p$DE[_[101]] + _[31444] + p$DE[_[31379]]), window['p$DEC'] = !![], window['p$ECDB'](), window['p$EDBC']();
}, window[_[31445]], window['p$CDEB'] = function () {
    sendApi(p$DE[_[31314]], _[31446], { 'game_pkg': p$DE[_[26220]] }, this['p$CEBD'][_[74]](this), p$CED, p$EB);
}, window['p$CEBD'] = function (y1z0) {
    if (y1z0 && y1z0[_[1255]] === _[9618] && y1z0[_[11]]) {
        window[_[31445]] = y1z0[_[11]];
        for (var yuwzx in y1z0[_[11]]) {
            p$DE[yuwzx] = y1z0[_[11]][yuwzx];
        }
    } else window[_[31347]](0xb, _[31447]), console[_[78]](_[31448] + y1z0[_[1255]]);
    window['p$CD'] = !![], window['p$EDBC']();
}, window[_[31449]] = function (befgd, xy$zvw, joklnm, bdfeg, dbcfea, lnopm, gfej, defba, onj, edfbac) {
    dbcfea = String(dbcfea);
    var qmnpr = gfej,
        okpnl = defba;
    p$DE[_[31310]][dbcfea] = {
        'productid': dbcfea,
        'productname': qmnpr,
        'productdesc': okpnl,
        'ApplePrdId': edfbac,
        'roleid': befgd,
        'rolename': xy$zvw,
        'rolelevel': joklnm,
        'price': lnopm,
        'callback': onj
    }, sendApi(p$DE[_[31318]], _[31450], {
        'game_pkg': p$DE[_[26220]],
        'server_id': p$DE[_[26214]][_[11316]],
        'server_name': p$DE[_[26214]][_[31428]],
        'level': joklnm,
        'uid': p$DE[_[26219]],
        'role_id': befgd,
        'role_name': xy$zvw,
        'product_id': dbcfea,
        'product_name': qmnpr,
        'product_desc': okpnl,
        'money': lnopm,
        'partner_id': p$DE[_[24283]]
    }, toPayCallBack, p$CED, p$EB);
}, window[_[31451]] = function (begcf) {
    if (begcf && (begcf[_[31452]] === 0xc8 || begcf[_[1255]] == _[9618])) {
        var hfie = p$DE[_[31310]][String(begcf[_[31453]])];
        if (hfie[_[334]]) hfie[_[334]](begcf[_[31453]], begcf[_[31454]], -0x1);
        _djhil[_[31173]]({
            'cpbill': begcf[_[31454]],
            'productid': begcf[_[31453]],
            'productname': hfie[_[31455]],
            'productdesc': hfie[_[31456]],
            'serverid': p$DE[_[26214]][_[11316]],
            'servername': p$DE[_[26214]][_[31428]],
            'roleid': hfie[_[31457]],
            'rolename': hfie[_[31458]],
            'rolelevel': hfie[_[31459]],
            'price': hfie[_[28057]],
            'ApplePrdId': hfie[_[31460]],
            'extension': JSON[_[4075]]({ 'cp_order_id': begcf[_[31454]] })
        }, function (ljkimn, ijlhg) {
            hfie[_[334]] && ljkimn == 0x0 && hfie[_[334]](begcf[_[31453]], begcf[_[31454]], ljkimn);
            console[_[78]](JSON[_[4075]]({
                'type': _[31461],
                'status': ljkimn,
                'data': begcf,
                'role_name': hfie[_[31458]]
            }));
            if (ljkimn === 0x0) {} else {
                if (ljkimn === 0x1) {} else {
                    if (ljkimn === 0x2) {}
                }
            }
        });
    } else {
        var lnkmij = begcf ? _[31462] + begcf[_[31452]] + _[31463] + begcf[_[1255]] + _[31464] + begcf[_[78]] : _[31465];
        window[_[31347]](0xd, _[31466] + lnkmij), alert(lnkmij);
    }
}, window['p$CEDB'] = function () {}, window['p$BCE'] = function (vqst, srqon, snqop, utvrs, wyvxu) {
    _djhil[_[31196]](p$DE[_[26214]][_[11316]], p$DE[_[26214]][_[31428]] || p$DE[_[26214]][_[11316]], vqst, srqon, snqop), sendApi(p$DE[_[31314]], _[31467], {
        'game_pkg': p$DE[_[26220]],
        'server_id': p$DE[_[26214]][_[11316]],
        'role_id': vqst,
        'uid': p$DE[_[26219]],
        'role_name': srqon,
        'role_type': utvrs,
        'level': snqop
    });
}, window['p$BEC'] = function (hikglj, befgdc, fihk, suvr, xuyvw, ilnjmk, onpmlk, z_$0y1, fiedh, bedfgc) {
    p$DE[_[31211]] = hikglj, p$DE[_[4213]] = befgdc, p$DE[_[31212]] = fihk, _djhil[_[31197]](p$DE[_[26214]][_[11316]], p$DE[_[26214]][_[31428]] || p$DE[_[26214]][_[11316]], hikglj, befgdc, fihk), sendApi(p$DE[_[31314]], _[31468], {
        'game_pkg': p$DE[_[26220]],
        'server_id': p$DE[_[26214]][_[11316]],
        'role_id': hikglj,
        'uid': p$DE[_[26219]],
        'role_name': befgdc,
        'role_type': suvr,
        'level': fihk,
        'evolution': xuyvw
    });
}, window['p$CBE'] = function (y$x0z_, yw$_z, wvxstu, mijnk, bfegd, hkijfg, qtrus, oqmpnr, qnpomr, ljknom) {
    p$DE[_[31211]] = y$x0z_, p$DE[_[4213]] = yw$_z, p$DE[_[31212]] = wvxstu, _djhil[_[31198]](p$DE[_[26214]][_[11316]], p$DE[_[26214]][_[31428]] || p$DE[_[26214]][_[11316]], y$x0z_, yw$_z, wvxstu), sendApi(p$DE[_[31314]], _[31468], {
        'game_pkg': p$DE[_[26220]],
        'server_id': p$DE[_[26214]][_[11316]],
        'role_id': y$x0z_,
        'uid': p$DE[_[26219]],
        'role_name': yw$_z,
        'role_type': mijnk,
        'level': wvxstu,
        'evolution': bfegd
    });
}, window['p$CEB'] = function (fje) {}, window['p$BC'] = function (mokp, tsupr) {
    _djhil[_[31155]](_[31155], { 'activity_id': tsupr }, function (lnokp) {
        mokp && mokp(lnokp);
    });
}, window[_[24281]] = function () {
    _djhil[_[24281]]();
}, window[_[31469]] = function () {
    _djhil[_[24160]]();
}, window[_[31470]] = function (qtvur, ghjifk, nmlp, $_102, okjnml, rstqo, x$_0y, mpr) {
    mpr = mpr || p$DE[_[26214]][_[11316]], sendApi(p$DE[_[31314]], _[31471], {
        'phone': qtvur,
        'role_id': ghjifk,
        'uid': p$DE[_[26219]],
        'game_pkg': p$DE[_[26220]],
        'partner_id': p$DE[_[24283]],
        'server_id': mpr
    }, x$_0y, 0x2, null, function () {
        return !![];
    });
}, window[_[10631]] = function (nklom) {
    window['p$EBC'] = nklom, window['p$EBC'] && window['p$CB'] && (console[_[78]](_[31296] + window['p$CB'][_[817]]), window['p$EBC'](window['p$CB']), window['p$CB'] = null);
}, window['p$ECB'] = function (xyz_w, ihgklj, beda, eifhjg) {
    window[_[22]](_[31472], {
        'game_pkg': window['p$DE'][_[26220]],
        'role_id': ihgklj,
        'server_id': beda
    }, eifhjg);
}, window['p$DBCE'] = function (zx$vyw, onlkmj, $012_) {
    function hdei(rsuvtq) {
        var _y0z1 = [],
            uytvw = [],
            gihdef = $012_ || window[_[562]][_[31473]];
        for (var gi in gihdef) {
            var qsrn = Number(gi);
            (!zx$vyw || !zx$vyw[_[13]] || zx$vyw[_[115]](qsrn) != -0x1) && (uytvw[_[29]](gihdef[gi]), _y0z1[_[29]]([qsrn, 0x3]));
        }
        window['p$ACEBD'](window[_[31222]], _[31474]) >= 0x0 ? (console[_[487]](_[31475]), _djhil[_[31476]] && _djhil[_[31476]](uytvw, function (ighfj) {
            console[_[487]](_[31477]), console[_[487]](ighfj);
            if (ighfj && ighfj[_[26415]] == _[31478]) for (var olpnqm in gihdef) {
                if (ighfj[gihdef[olpnqm]] == _[31479]) {
                    var yx_wz$ = Number(olpnqm);
                    for (var fheig = 0x0; fheig < _y0z1[_[13]]; fheig++) {
                        if (_y0z1[fheig][0x0] == yx_wz$) {
                            _y0z1[fheig][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['p$ACEBD'](window[_[31222]], _[31480]) >= 0x0 ? wx[_[31481]]({
                'withSubscriptions': !![],
                'success': function (omklnj) {
                    var stvruw = omklnj[_[31482]][_[31483]];
                    if (stvruw) {
                        console[_[487]](_[31484]), console[_[487]](stvruw);
                        for (var fhkgi in gihdef) {
                            if (stvruw[gihdef[fhkgi]] == _[31479]) {
                                var jgife = Number(fhkgi);
                                for (var _zy0x$ = 0x0; _zy0x$ < _y0z1[_[13]]; _zy0x$++) {
                                    if (_y0z1[_zy0x$][0x0] == jgife) {
                                        _y0z1[_zy0x$][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[_[487]](_y0z1), onlkmj && onlkmj(_y0z1);
                    } else console[_[487]](_[31485]), console[_[487]](omklnj), console[_[487]](_y0z1), onlkmj && onlkmj(_y0z1);
                },
                'fail': function () {
                    console[_[487]](_[31486]), console[_[487]](_y0z1), onlkmj && onlkmj(_y0z1);
                }
            }) : (console[_[487]](_[31487] + window[_[31222]]), console[_[487]](_y0z1), onlkmj && onlkmj(_y0z1));
        })) : (console[_[487]](_[31488] + window[_[31222]]), console[_[487]](_y0z1), onlkmj && onlkmj(_y0z1)), wx[_[31489]](hdei);
    }
    wx[_[31490]](hdei);
}, window['p$DBEC'] = {
    'isSuccess': ![],
    'level': _[31491],
    'isCharging': ![]
}, window['p$DCBE'] = function (onjklm) {
    wx[_[31288]]({
        'success': function (vwst) {
            var pmkln = window['p$DBEC'];
            pmkln[_[31492]] = !![], pmkln[_[4189]] = Number(vwst[_[4189]])[_[3807]](0x0), pmkln[_[31291]] = vwst[_[31291]], onjklm && onjklm(pmkln[_[31492]], pmkln[_[4189]], pmkln[_[31291]]);
        },
        'fail': function (utwsvx) {
            console[_[487]](_[31493], utwsvx[_[26415]]);
            var nrsq = window['p$DBEC'];
            onjklm && onjklm(nrsq[_[31492]], nrsq[_[4189]], nrsq[_[31291]]);
        }
    });
}, window[_[11697]] = function (suvxwt) {
    wx[_[11697]]({
        'success': function (gijh) {
            suvxwt && suvxwt(!![], gijh);
        },
        'fail': function (ecbfd) {
            suvxwt && suvxwt(![], ecbfd);
        }
    });
}, window[_[11699]] = function (mqpron) {
    if (mqpron) wx[_[11699]](mqpron);
}, window[_[25895]] = function (jmlkn) {
    wx[_[25895]](jmlkn);
}, window[_[22]] = function (kj, gfejih, vuqt, nlim, upqstr, qormp, uvts, qutrsp) {
    if (nlim == undefined) nlim = 0x1;
    wx[_[482]]({
        'url': kj,
        'method': uvts || _[26097],
        'responseType': _[3992],
        'data': gfejih,
        'header': { 'content-type': qutrsp || _[31359] },
        'success': function (wzuyxv) {
            DEBUG && console[_[487]](_[31494], kj, info, wzuyxv);
            if (wzuyxv && wzuyxv[_[26485]] == 0xc8) {
                var srpqo = wzuyxv[_[11]];
                !qormp || qormp(srpqo) ? vuqt && vuqt(srpqo) : window[_[31495]](kj, gfejih, vuqt, nlim, upqstr, qormp, wzuyxv);
            } else window[_[31495]](kj, gfejih, vuqt, nlim, upqstr, qormp, wzuyxv);
        },
        'fail': function (uqpr) {
            DEBUG && console[_[487]](_[31496], kj, info, uqpr), window[_[31495]](kj, gfejih, vuqt, nlim, upqstr, qormp, uqpr);
        },
        'complete': function () {}
    });
}, window[_[31495]] = function (gjef, rnso, ijmkhl, dfeh, w$y_xz, _y$x0z, kljigh) {
    dfeh - 0x1 > 0x0 ? setTimeout(function () {
        window[_[22]](gjef, rnso, ijmkhl, dfeh - 0x1, w$y_xz, _y$x0z);
    }, 0x3e8) : w$y_xz && w$y_xz(JSON[_[4075]]({
        'url': gjef,
        'response': kljigh
    }));
}, window[_[31497]] = function ($zvxw, _0z$1y, lmnop, sxt, kihfg, gkjil, lmknij) {
    !lmnop && (lmnop = {});
    var gihl = Math[_[118]](Date[_[83]]() / 0x3e8);
    lmnop[_[892]] = gihl, lmnop[_[31498]] = _0z$1y;
    var torpqs = Object[_[262]](lmnop)[_[1120]](),
        jfhikg = '',
        uvwrst = '';
    for (var sruwv = 0x0; sruwv < torpqs[_[13]]; sruwv++) {
        jfhikg = jfhikg + (sruwv == 0x0 ? '' : '&') + torpqs[sruwv] + lmnop[torpqs[sruwv]], uvwrst = uvwrst + (sruwv == 0x0 ? '' : '&') + torpqs[sruwv] + '=' + encodeURIComponent(lmnop[torpqs[sruwv]]);
    }
    jfhikg = jfhikg + p$DE[_[31320]];
    var khfg = _[31499] + md5(jfhikg);
    send($zvxw + '?' + uvwrst + (uvwrst == '' ? '' : '&') + khfg, null, sxt, kihfg, gkjil, lmknij || function (jo) {
        return jo[_[1255]] == _[9618];
    }, null, _[31146]);
}, window['p$DCEB'] = function ($_2103, jkmilh) {
    var oqprnm = 0x0;
    p$DE[_[26214]] && (oqprnm = p$DE[_[26214]][_[11316]]), sendApi(p$DE[_[31316]], _[31500], {
        'partnerId': p$DE[_[24283]],
        'gamePkg': p$DE[_[26220]],
        'logTime': Math[_[118]](Date[_[83]]() / 0x3e8),
        'platformUid': p$DE[_[26221]],
        'type': $_2103,
        'serverId': oqprnm
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['p$DEBC'] = function (y0$z1_) {
    sendApi(p$DE[_[31314]], _[31501], {
        'partner_id': p$DE[_[24283]],
        'uid': p$DE[_[26219]],
        'version': p$DE[_[4902]],
        'game_pkg': p$DE[_[26220]],
        'device': p$DE[_[26222]]
    }, p$DECB, p$CED, p$EB);
}, window['p$DECB'] = function (feghdc) {
    if (feghdc && feghdc[_[1255]] === _[9618] && feghdc[_[11]]) {
        feghdc[_[11]][_[5096]]({
            'id': -0x2,
            'name': _[31502]
        }), feghdc[_[11]][_[5096]]({
            'id': -0x1,
            'name': _[31503]
        }), p$DE[_[31504]] = feghdc[_[11]];
        if (window[_[12296]]) window[_[12296]][_[31505]]();
    } else {
        p$DE[_[31506]] = ![];
        var cgbd = feghdc ? feghdc[_[1255]] : '';
        window[_[31347]](0x7, _[31507] + cgbd), window['p$BCDE'](_[31508] + cgbd);
    }
}, window['p$BCD'] = function (vyzxuw) {
    sendApi(p$DE[_[31314]], _[31509], {
        'partner_id': p$DE[_[24283]],
        'uid': p$DE[_[26219]],
        'version': p$DE[_[4902]],
        'game_pkg': p$DE[_[26220]],
        'device': p$DE[_[26222]]
    }, p$BDC, p$CED, p$EB);
}, window['p$BDC'] = function (vusxw) {
    p$DE[_[31510]] = ![];
    if (vusxw && vusxw[_[1255]] === _[9618] && vusxw[_[11]]) {
        for (var nloj = 0x0; nloj < vusxw[_[11]][_[13]]; nloj++) {
            vusxw[_[11]][nloj][_[106]] = p$DCB(vusxw[_[11]][nloj]);
        }
        p$DE[_[31323]][-0x1] = window[_[31511]](vusxw[_[11]]), window[_[12296]][_[31512]](-0x1);
    } else {
        var mlnkpo = vusxw ? vusxw[_[1255]] : '';
        window[_[31347]](0x8, _[31513] + mlnkpo), window['p$BCDE'](_[31514] + mlnkpo);
    }
}, window[_[31515]] = function (yvzu) {
    sendApi(p$DE[_[31314]], _[31509], {
        'partner_id': p$DE[_[24283]],
        'uid': p$DE[_[26219]],
        'version': p$DE[_[4902]],
        'game_pkg': p$DE[_[26220]],
        'device': p$DE[_[26222]]
    }, yvzu, p$CED, p$EB);
}, window['p$CBD'] = function (ilgh, pqsrto) {
    sendApi(p$DE[_[31314]], _[31516], {
        'partner_id': p$DE[_[24283]],
        'uid': p$DE[_[26219]],
        'version': p$DE[_[4902]],
        'game_pkg': p$DE[_[26220]],
        'device': p$DE[_[26222]],
        'server_group_id': pqsrto
    }, p$CDB, p$CED, p$EB);
}, window['p$CDB'] = function (dfbcea) {
    p$DE[_[31510]] = ![];
    if (dfbcea && dfbcea[_[1255]] === _[9618] && dfbcea[_[11]] && dfbcea[_[11]][_[11]]) {
        var knmolp = dfbcea[_[11]][_[31517]],
            lmjnk = [];
        for (var geihdf = 0x0; geihdf < dfbcea[_[11]][_[11]][_[13]]; geihdf++) {
            dfbcea[_[11]][_[11]][geihdf][_[106]] = p$DCB(dfbcea[_[11]][_[11]][geihdf]), (lmjnk[_[13]] == 0x0 || dfbcea[_[11]][_[11]][geihdf][_[106]] != 0x0) && (lmjnk[lmjnk[_[13]]] = dfbcea[_[11]][_[11]][geihdf]);
        }
        p$DE[_[31323]][knmolp] = window[_[31511]](lmjnk), window[_[12296]][_[31512]](knmolp);
    } else {
        var fdeba = dfbcea ? dfbcea[_[1255]] : '';
        window[_[31347]](0x9, _[31518] + fdeba), window['p$BCDE'](_[31519] + fdeba);
    }
}, window['p$ACED'] = function (xvsut) {
    sendApi(p$DE[_[31314]], _[31520], {
        'partner_id': p$DE[_[24283]],
        'uid': p$DE[_[26219]],
        'version': p$DE[_[4902]],
        'game_pkg': p$DE[_[26220]],
        'device': p$DE[_[26222]]
    }, reqServerRecommendCallBack, p$CED, p$EB);
}, window[_[31521]] = function (tvuxs) {
    p$DE[_[31510]] = ![];
    if (tvuxs && tvuxs[_[1255]] === _[9618] && tvuxs[_[11]]) {
        for (var fgj = 0x0; fgj < tvuxs[_[11]][_[13]]; fgj++) {
            tvuxs[_[11]][fgj][_[106]] = p$DCB(tvuxs[_[11]][fgj]);
        }
        p$DE[_[31323]][-0x2] = window[_[31511]](tvuxs[_[11]]), window[_[12296]][_[31512]](-0x2);
    } else {
        var onkpm = tvuxs ? tvuxs[_[1255]] : '';
        window[_[31347]](0xa, _[31522] + onkpm), alert(_[31523] + onkpm);
    }
}, window[_[31511]] = function (ecab) {
    return ecab;
}, window['p$DBC'] = function (qostr, qorsp) {
    qostr = qostr || p$DE[_[26214]][_[11316]], sendApi(p$DE[_[31314]], _[31524], {
        'type': '4',
        'game_pkg': p$DE[_[26220]],
        'server_id': qostr
    }, qorsp);
}, window[_[31525]] = function (fgkhi, rqput, egih, zxy0_$) {
    egih = egih || p$DE[_[26214]][_[11316]], sendApi(p$DE[_[31314]], _[31526], {
        'type': fgkhi,
        'game_pkg': rqput,
        'server_id': egih
    }, zxy0_$);
}, window[_[31527]] = function (lhjgik, hglik) {
    sendApi(p$DE[_[31314]], _[31528], { 'game_pkg': lhjgik }, hglik);
}, window['p$DCB'] = function (otspqr) {
    if (otspqr) {
        if (otspqr[_[106]] == 0x1) {
            if (otspqr[_[31529]] == 0x1) return 0x2;else return 0x1;
        } else return otspqr[_[106]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['p$EBCD'] = function (hcdgf, nomjkl) {
    p$DE[_[31530]] = {
        'step': hcdgf,
        'server_id': nomjkl
    };
    var suwrt = this;
    p$BDCE({ 'title': _[31531] }), sendApi(p$DE[_[31314]], _[31532], {
        'partner_id': p$DE[_[24283]],
        'uid': p$DE[_[26219]],
        'game_pkg': p$DE[_[26220]],
        'server_id': nomjkl,
        'platform': p$DE[_[26181]],
        'platform_uid': p$DE[_[26221]],
        'check_login_time': p$DE[_[31411]],
        'check_login_sign': p$DE[_[31410]],
        'version_name': p$DE[_[31379]]
    }, p$EBDC, p$CED, p$EB, function (lonmjk) {
        return lonmjk[_[1255]] == _[9618] || lonmjk[_[78]] == _[31533] || lonmjk[_[78]] == _[31534];
    });
}, window['p$EBDC'] = function (wvx$yz) {
    var kjghif = this;
    if (wvx$yz && wvx$yz[_[1255]] === _[9618] && wvx$yz[_[11]]) {
        var $ywz = p$DE[_[26214]];
        $ywz[_[31535]] = p$DE[_[31324]], $ywz[_[11299]] = String(wvx$yz[_[11]][_[31536]]), $ywz[_[26183]] = parseInt(wvx$yz[_[11]][_[892]]);
        if (wvx$yz[_[11]][_[26182]]) $ywz[_[26182]] = parseInt(wvx$yz[_[11]][_[26182]]);else $ywz[_[26182]] = parseInt(wvx$yz[_[11]][_[11316]]);
        $ywz[_[31537]] = 0x0, $ywz[_[4089]] = p$DE[_[31443]], $ywz[_[31538]] = wvx$yz[_[11]][_[31539]], $ywz[_[31540]] = wvx$yz[_[11]][_[31540]];
        if (wvx$yz[_[11]][_[26186]]) $ywz[_[26186]] = parseInt(wvx$yz[_[11]][_[26186]]);
        console[_[487]](_[31541] + JSON[_[4075]]($ywz[_[31540]])), p$DE[_[665]] == 0x1 && $ywz[_[31540]] && $ywz[_[31540]][_[31542]] == 0x1 && (p$DE[_[31543]] = 0x1, window[_[31221]][_[148]]['p$AED']()), p$ECBD();
    } else {
        if (p$DE[_[31530]][_[6692]] >= 0x3) {
            var z_21$ = wvx$yz ? wvx$yz[_[1255]] : '';
            window[_[31347]](0xc, _[31544] + z_21$), p$EB(JSON[_[4075]](wvx$yz)), window['p$BCDE'](_[31545] + z_21$);
        } else sendApi(p$DE[_[31314]], _[31390], {
            'platform': p$DE[_[31312]],
            'partner_id': p$DE[_[24283]],
            'token': p$DE[_[31388]],
            'game_pkg': p$DE[_[26220]],
            'deviceId': p$DE[_[26222]],
            'scene': _[31391] + p$DE[_[31322]]
        }, function (ifhegj) {
            if (!ifhegj || ifhegj[_[1255]] != _[9618]) {
                window['p$BCDE'](_[31407] + ifhegj && ifhegj[_[1255]]);
                return;
            }
            p$DE[_[31410]] = String(ifhegj[_[11299]]), p$DE[_[31411]] = String(ifhegj[_[892]]), setTimeout(function () {
                p$EBCD(p$DE[_[31530]][_[6692]] + 0x1, p$DE[_[31530]][_[11316]]);
            }, 0x5dc);
        }, p$CED, p$EB, function (pqmor) {
            return pqmor[_[1255]] == _[9618] || pqmor[_[1255]] == _[26563];
        });
    }
}, window['p$ECBD'] = function () {
    ServerLoading[_[148]][_[31435]](p$DE[_[665]]), window['p$CE'] = !![], window['p$EDBC']();
}, window['p$ECDB'] = function () {
    if (window['p$EC'] && window['p$DCE'] && window[_[31330]] && window[_[31331]] && window['p$DEC'] && window['p$DC']) {
        if (!window[_[30693]][_[148]]) {
            console[_[487]](_[31546] + window[_[30693]][_[148]]);
            var $0xz_y = wx[_[25881]](),
                ighjl = $0xz_y[_[817]] ? $0xz_y[_[817]] : 0x0,
                uxv = {
                'cdn': window['p$DE'][_[4089]],
                'spareCdn': window['p$DE'][_[25900]],
                'newRegister': window['p$DE'][_[665]],
                'wxPC': window['p$DE'][_[25903]],
                'wxIOS': window['p$DE'][_[1116]],
                'wxAndroid': window['p$DE'][_[11140]],
                'wxParam': {
                    'limitLoad': window['p$DE']['p$ABCED'],
                    'benchmarkLevel': window['p$DE']['p$ABDCE'],
                    'wxFrom': window[_[562]][_[30710]] == _[31547] ? 0x1 : 0x0,
                    'wxSDKVersion': window[_[31222]]
                },
                'configType': window['p$DE'][_[11842]],
                'exposeType': window['p$DE'][_[755]],
                'scene': ighjl
            };
            new window[_[30693]](uxv, window['p$DE'][_[101]], window['p$ABCDE']);
        }
    }
}, window['p$EDBC'] = function () {
    if (window['p$EC'] && window['p$DCE'] && window[_[31330]] && window[_[31331]] && window['p$DEC'] && window['p$DC'] && window['p$CE'] && window['p$CD']) {
        p$BDEC();
        if (!p$ECD) {
            p$ECD = !![];
            if (!window[_[30693]][_[148]]) window['p$ECDB']();
            var fjighk = 0x0,
                wtrvsu = wx[_[31548]]();
            wtrvsu && (window['p$DE'][_[31277]] && (fjighk = wtrvsu[_[322]]), console[_[78]](_[31549] + wtrvsu[_[322]] + _[31550] + wtrvsu[_[1275]] + _[31551] + wtrvsu[_[1277]] + _[31552] + wtrvsu[_[1276]] + _[31553] + wtrvsu[_[178]] + _[31554] + wtrvsu[_[179]]));
            var wtxuvs = {};
            for (const dhgif in p$DE[_[26214]]) {
                wtxuvs[dhgif] = p$DE[_[26214]][dhgif];
            }
            var omjkln = {
                'channel': window['p$DE'][_[26218]],
                'account': window['p$DE'][_[26219]],
                'userId': window['p$DE'][_[19271]],
                'cdn': window['p$DE'][_[4089]],
                'data': window['p$DE'][_[11]],
                'package': window['p$DE'][_[25901]],
                'newRegister': window['p$DE'][_[665]],
                'pkgName': window['p$DE'][_[26220]],
                'partnerId': window['p$DE'][_[24283]],
                'platform_uid': window['p$DE'][_[26221]],
                'deviceId': window['p$DE'][_[26222]],
                'selectedServer': wtxuvs,
                'configType': window['p$DE'][_[11842]],
                'exposeType': window['p$DE'][_[755]],
                'debugUsers': window['p$DE'][_[12249]],
                'wxMenuTop': fjighk,
                'wxShield': window['p$DE'][_[779]],
                'wx_channel': window['p$DE'][_[26358]]
            };
            if (window[_[31445]]) for (var polnmq in window[_[31445]]) {
                omjkln[polnmq] = window[_[31445]][polnmq];
            }
            window[_[30693]][_[148]]['p$EDA'](omjkln);
            if (p$DE[_[26214]] && p$DE[_[26214]][_[11316]]) localStorage[_[490]](_[31413] + p$DE[_[26220]] + p$DE[_[26219]], p$DE[_[26214]][_[11316]]);
        }
    } else console[_[78]](_[31555] + window['p$EC'] + _[31556] + window['p$DCE'] + _[31557] + window[_[31330]] + _[31558] + window[_[31331]] + _[31559] + window['p$DEC'] + _[31560] + window['p$DC'] + _[31561] + window['p$CE'] + _[31562] + window['p$CD']);
};