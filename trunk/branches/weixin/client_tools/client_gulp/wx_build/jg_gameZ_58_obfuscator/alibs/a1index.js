var c = wx.$a;
import go$c0 from '../a3a4/eeesdk.js';
window[c[31309]] = { 'wxVersion': window[c[1160]][c[31193]] }, window[c[31310]] = ![], window[c[31311]] = 0x1, window[c[31312]] = 0x1, window[c[31313]] = !![], window[c[31314]] = !![], window[c[31315]] = '', window[c[31316]] = ![], window[c[31198]] = {
    'base_cdn': c[31317],
    'cdn': c[31317]
}, j1E[c[31318]] = {}, j1E[c[576]] = '0', j1E[c[5052]] = window[c[31309]][c[31319]], j1E[c[31279]] = '', j1E['os'] = '1', j1E[c[31320]] = c[31321], j1E[c[31322]] = c[31323], j1E[c[31324]] = c[31325], j1E[c[31326]] = c[31327], j1E[c[31328]] = c[31329], j1E[c[24955]] = '1', j1E[c[26876]] = '', j1E[c[26878]] = '', j1E[c[31330]] = 0x0, j1E[c[31331]] = {}, j1E[c[31332]] = parseInt(j1E[c[24955]]), j1E[c[26874]] = j1E[c[24955]], j1E[c[26870]] = {}, j1E[c[31204]] = c[31333], j1E[c[31334]] = ![], j1E[c[12985]] = c[31335], j1E[c[26840]] = Date[c[699]](), j1E[c[12581]] = c[31336], j1E[c[1351]] = '_a', j1E[c[31337]] = 0x2, j1E[c[716]] = 0x7c1, j1E[c[31319]] = window[c[31309]][c[31319]], j1E[c[1375]] = ![], j1E[c[1710]] = ![], j1E[c[11887]] = ![], j1E[c[26561]] = ![], window[c[31338]] = 0x5, window[c[31339]] = ![], window[c[31234]] = ![], window[c[31242]] = ![], window[c[31340]] = ![], window[c[31341]] = ![], window[c[31342]] = ![], window[c[31343]] = ![], window[c[31344]] = ![], window[c[31345]] = ![], window[c[31346]] = null, window[c[1251]] = function (uo_ew) {
    console[c[540]](c[1251], uo_ew), wx[c[5332]]({}), wx[c[31222]]({
        'title': c[6447],
        'content': uo_ew,
        'success'(fwu2) {
            if (fwu2[c[31347]]) console[c[540]](c[31348]);else fwu2[c[1156]] && console[c[540]](c[31349]);
        }
    });
}, window[c[31350]] = function (rp5i7) {
    console[c[540]](c[31351], rp5i7), jM1EB(), wx[c[31222]]({
        'title': c[6447],
        'content': rp5i7,
        'confirmText': c[31352],
        'cancelText': c[19588],
        'success'(vkznj) {
            if (vkznj[c[31347]]) window[c[31248]]();else vkznj[c[1156]] && (console[c[540]](c[31353]), wx[c[26558]]({}));
        }
    });
}, window[c[31354]] = function (u_2wg) {
    console[c[540]](c[31354], u_2wg), wx[c[31222]]({
        'title': c[6447],
        'content': u_2wg,
        'confirmText': c[27005],
        'showCancel': ![],
        'complete'(jx1sn) {
            console[c[540]](c[31353]), wx[c[26558]]({});
        }
    });
}, window[c[31355]] = ![], window[c[31356]] = function (xsgf) {
    window[c[31355]] = !![], wx[c[5331]](xsgf);
}, window[c[31357]] = function () {
    window[c[31355]] && (window[c[31355]] = ![], wx[c[5332]]({}));
}, window[c[31358]] = function (dq8r) {
    window[c[31210]][c[762]][c[31358]](dq8r);
}, window[c[86]] = function (sjvnf, trd8q5) {
    go$c0[c[86]](sjvnf, function (dq6tr) {
        dq6tr && dq6tr[c[585]] ? dq6tr[c[585]][c[1899]] == 0x1 ? trd8q5(!![]) : (trd8q5(![]), console[c[694]](c[31359] + dq6tr[c[585]][c[31360]])) : console[c[540]](c[86], dq6tr);
    });
}, window[c[31361]] = function (vnfxsj) {
    console[c[540]](c[31362], vnfxsj);
}, window[c[31363]] = function (e_ouw) {}, window[c[31364]] = function (zkdqh, nxjfsv, cbmy) {}, window[c[31365]] = function ($0ocyb) {
    console[c[540]](c[31366], $0ocyb), window[c[31210]][c[762]][c[31367]](), window[c[31210]][c[762]][c[31368]](), window[c[31210]][c[762]][c[31369]]();
}, window[c[31370]] = function (b0oc$y) {
    window[c[31371]](0xe, c[31372] + b0oc$y), window[c[31350]](c[31373]);
    var tr8dq6 = {
        'id': window[c[31198]][c[31199]],
        'role': window[c[31198]][c[4982]],
        'level': window[c[31198]][c[31200]],
        'account': window[c[31198]][c[26875]],
        'version': window[c[31198]][c[716]],
        'cdn': window[c[31198]][c[4862]],
        'pkgName': window[c[31198]][c[26876]],
        'gamever': window[c[1160]][c[31193]],
        'serverid': window[c[31198]][c[26870]] ? window[c[31198]][c[26870]][c[61]] : 0x0,
        'systemInfo': window[c[31201]],
        'error': c[31374],
        'stack': b0oc$y ? b0oc$y : c[31373]
    },
        jnsf1x = JSON[c[4848]](tr8dq6);
    console[c[583]](c[31375] + jnsf1x), window[c[31204]](jnsf1x);
}, window[c[31371]] = function (b$cy, w21u) {
    sendApi(j1E[c[31324]], c[31376], {
        'game_pkg': j1E[c[26876]],
        'partner_id': j1E[c[24955]],
        'server_id': j1E[c[26870]] && j1E[c[26870]][c[61]] > 0x0 ? j1E[c[26870]][c[61]] : 0x0,
        'uid': j1E[c[26875]] > 0x0 ? j1E[c[26875]] : 0x0,
        'type': b$cy,
        'info': w21u
    });
}, window[c[31377]] = function (jf21) {
    var vk6hn = JSON[c[539]](jf21);
    vk6hn[c[31378]] = window[c[1160]][c[31193]], vk6hn[c[31379]] = window[c[31198]][c[26870]] ? window[c[31198]][c[26870]][c[61]] : 0x0, vk6hn[c[31201]] = window[c[31201]];
    var i53p = JSON[c[4848]](vk6hn);
    console[c[583]](c[31380] + i53p), window[c[31204]](i53p);
}, window[c[31249]] = function (sjxvnh, k6zq) {
    var k6qdh = {
        'id': window[c[31198]][c[31199]],
        'role': window[c[31198]][c[4982]],
        'level': window[c[31198]][c[31200]],
        'account': window[c[31198]][c[26875]],
        'version': window[c[31198]][c[716]],
        'cdn': window[c[31198]][c[4862]],
        'pkgName': window[c[31198]][c[26876]],
        'gamever': window[c[1160]][c[31193]],
        'serverid': window[c[31198]][c[26870]] ? window[c[31198]][c[26870]][c[61]] : 0x0,
        'systemInfo': window[c[31201]],
        'error': sjxvnh,
        'stack': k6zq
    },
        cy_40 = JSON[c[4848]](k6qdh);
    console[c[597]](c[31381] + cy_40), window[c[31204]](cy_40);
}, window[c[31204]] = function (snvh) {
    if (window[c[31198]][c[31280]] == c[31382]) return;
    var al$bc = j1E[c[31204]] + c[31383] + j1E[c[26875]];
    wx[c[1084]]({
        'url': al$bc,
        'method': c[23],
        'data': snvh,
        'header': {
            'content-type': c[31384],
            'cache-control': c[31385]
        },
        'success': function (yo40e) {
            DEBUG && console[c[540]](c[31386], al$bc, snvh, yo40e);
        },
        'fail': function (guf21x) {
            DEBUG && console[c[540]](c[31386], al$bc, snvh, guf21x);
        },
        'complete': function () {}
    });
}, window[c[31387]] = function () {
    function u21x() {
        return ((0x1 + Math[c[731]]()) * 0x10000 | 0x0)[c[426]](0x10)[c[546]](0x1);
    }
    return u21x() + u21x() + '-' + u21x() + '-' + u21x() + '-' + u21x() + '+' + u21x() + u21x() + u21x();
}, window[c[31248]] = function () {
    console[c[540]](c[31388]);
    var _wu4eg = go$c0[c[31389]]();
    j1E[c[26874]] = _wu4eg[c[31390]], j1E[c[31332]] = _wu4eg[c[31390]], j1E[c[24955]] = _wu4eg[c[31390]], j1E[c[26876]] = _wu4eg[c[31391]];
    var q587t = { 'game_ver': j1E[c[5052]] };
    j1E[c[26878]] = this[c[31387]](), jM1BE({ 'title': c[31392] }), go$c0[c[81]](q587t, this[c[31393]][c[396]](this));
}, window[c[31393]] = function (dq8kt6) {
    var pr537 = dq8kt6[c[31394]];
    sdkInitRes = dq8kt6, console[c[540]](c[31395] + pr537 + c[31396] + (pr537 == 0x1) + c[31397] + dq8kt6[c[31193]] + c[31398] + window[c[31309]][c[31319]] + c[31399] + dq8kt6[c[31400]]);
    if (!dq8kt6[c[31193]] || window[c[31213]](window[c[31309]][c[31319]], dq8kt6[c[31193]]) < 0x0) console[c[540]](c[31401]), j1E[c[31322]] = c[31402], j1E[c[31324]] = c[31403], j1E[c[31326]] = c[31404], j1E[c[4862]] = c[31405], j1E[c[26559]] = c[31406], j1E[c[31400]] = dq8kt6[c[31400]], j1E[c[1375]] = ![];else window[c[31213]](window[c[31309]][c[31319]], dq8kt6[c[31193]]) == 0x0 ? (console[c[540]](c[31407]), j1E[c[31322]] = c[31323], j1E[c[31324]] = c[31325], j1E[c[31326]] = c[31327], j1E[c[4862]] = c[31317], j1E[c[26559]] = c[31406], j1E[c[31400]] = c[31408], j1E[c[1375]] = !![]) : (console[c[540]](c[31409]), j1E[c[31322]] = c[31323], j1E[c[31324]] = c[31325], j1E[c[31326]] = c[31327], j1E[c[4862]] = c[31317], j1E[c[26559]] = c[31406], j1E[c[31400]] = c[31408], j1E[c[1375]] = ![]);
    j1E[c[31330]] = config[c[421]] ? config[c[421]] : 0x0, this[c[31410]](), this[c[31411]](), window[c[31412]] = 0x5, jM1BE({ 'title': c[31413] }), go$c0[c[14]](this[c[31414]][c[396]](this));
}, window[c[31412]] = 0x5, window[c[31414]] = function ($cal, bc0yl) {
    if ($cal == 0x0 && bc0yl && bc0yl[c[571]]) {
        j1E[c[31415]] = bc0yl[c[571]], j1E[c[27015]] = bc0yl[c[27015]];
        var _e2g = this;
        jM1BE({ 'title': c[31416] }), sendApi(j1E[c[31322]], c[31417], {
            'platform': j1E[c[31320]],
            'partner_id': j1E[c[24955]],
            'token': bc0yl[c[571]],
            'game_pkg': j1E[c[26876]],
            'deviceId': j1E[c[26878]],
            'scene': c[31418] + j1E[c[31330]]
        }, this[c[31419]][c[396]](this), jBE1, jEM);
    } else bc0yl && bc0yl[c[27069]] && window[c[31412]] > 0x0 && (bc0yl[c[27069]][c[488]](c[31420]) != -0x1 || bc0yl[c[27069]][c[488]](c[31421]) != -0x1 || bc0yl[c[27069]][c[488]](c[31422]) != -0x1 || bc0yl[c[27069]][c[488]](c[31423]) != -0x1 || bc0yl[c[27069]][c[488]](c[31424]) != -0x1 || bc0yl[c[27069]][c[488]](c[31425]) != -0x1) ? (window[c[31412]]--, go$c0[c[14]](this[c[31414]][c[396]](this))) : (window[c[31371]](0x1, c[31426] + $cal + c[31427] + (bc0yl ? bc0yl[c[27069]] : '')), window[c[31249]](c[31428], JSON[c[4848]]({
        'status': $cal,
        'data': bc0yl
    })), window[c[31350]](c[31429] + (bc0yl && bc0yl[c[27069]] ? '，' + bc0yl[c[27069]] : '')));
}, window[c[31419]] = function (dzkqh6) {
    if (!dzkqh6) {
        window[c[31371]](0x2, c[31430]), window[c[31249]](c[31431], c[31432]), window[c[31350]](c[31433]);
        return;
    }
    if (dzkqh6[c[1899]] != c[10379]) {
        window[c[31371]](0x2, c[31434] + dzkqh6[c[1899]]), window[c[31249]](c[31431], JSON[c[4848]](dzkqh6)), window[c[31350]](c[31435] + dzkqh6[c[1899]]);
        return;
    }
    if (dzkqh6[c[31436]] == 0x1) {
        window[c[31350]](c[31437]);
        return;
    }
    j1E[c[19969]] = String(dzkqh6[c[26875]]), j1E[c[26875]] = String(dzkqh6[c[26875]]), j1E[c[26838]] = String(dzkqh6[c[26838]]), j1E[c[26874]] = String(dzkqh6[c[26838]]), j1E[c[26877]] = String(dzkqh6[c[26877]]), j1E[c[31438]] = String(dzkqh6[c[12046]]), j1E[c[31439]] = String(dzkqh6[c[1487]]), j1E[c[12046]] = '';
    var e_g4w = this;
    jM1BE({ 'title': c[31440] });
    var b$ycm = localStorage[c[1087]](c[31441] + j1E[c[26876]] + j1E[c[26875]]);
    if (b$ycm && b$ycm != '') {
        var co_y4 = Number(b$ycm);
        e_g4w[c[31442]](co_y4);
    } else e_g4w[c[31443]]();
}, window[c[31443]] = function () {
    var zhnk6v = this;
    sendApi(j1E[c[31322]], c[31444], {
        'partner_id': j1E[c[24955]],
        'uid': j1E[c[26875]],
        'version': j1E[c[5052]],
        'game_pkg': j1E[c[26876]],
        'device': j1E[c[26878]]
    }, zhnk6v[c[31445]][c[396]](zhnk6v), jBE1, jEM);
}, window[c[31445]] = function (nfsx1j) {
    if (!nfsx1j) {
        window[c[31371]](0x3, c[31446]), window[c[31350]](c[31446]);
        return;
    }
    if (nfsx1j[c[1899]] != c[10379]) {
        window[c[31371]](0x3, c[31447] + nfsx1j[c[1899]]), window[c[31350]](c[31447] + nfsx1j[c[1899]]);
        return;
    }
    if (!nfsx1j[c[585]] || nfsx1j[c[585]][c[407]] == 0x0) {
        window[c[31371]](0x3, c[31448]), window[c[31350]](c[31449]);
        return;
    }
    this[c[31450]](nfsx1j);
}, window[c[31442]] = function (z6nhkv) {
    var u21ew = this;
    sendApi(j1E[c[31322]], c[31451], {
        'server_id': z6nhkv,
        'time': Date[c[699]]() / 0x3e8
    }, u21ew[c[31452]][c[396]](u21ew), jBE1, jEM);
}, window[c[31452]] = function (d5r) {
    if (!d5r) {
        window[c[31371]](0x4, c[31453]), this[c[31443]]();
        return;
    }
    if (d5r[c[1899]] != c[10379]) {
        window[c[31371]](0x4, c[31454] + d5r[c[1899]]), this[c[31443]]();
        return;
    }
    if (!d5r[c[585]] || d5r[c[585]][c[407]] == 0x0) {
        window[c[31371]](0x4, c[31455]), this[c[31443]]();
        return;
    }
    this[c[31450]](d5r), window[c[31210]] && window[c[31210]][c[762]][c[31456]] && window[c[31210]][c[762]][c[31456]](sdkInitRes[c[31457]], sdkInitRes[c[31458]], sdkInitRes[c[31459]], sdkInitRes[c[31460]], sdkInitRes[c[31461]]);
}, window[c[31450]] = function (qr8t7) {
    j1E[c[1261]] = qr8t7[c[31462]] != undefined ? qr8t7[c[31462]] : 0x0, j1E[c[26870]] = {
        'server_id': String(qr8t7[c[585]][0x0][c[61]]),
        'server_name': String(qr8t7[c[585]][0x0][c[31463]]),
        'entry_ip': qr8t7[c[585]][0x0][c[26900]],
        'entry_port': parseInt(qr8t7[c[585]][0x0][c[26901]]),
        'status': j1BM(qr8t7[c[585]][0x0]),
        'start_time': qr8t7[c[585]][0x0][c[31464]],
        'maintain_time': qr8t7[c[585]][0x0][c[31465]] ? qr8t7[c[585]][0x0][c[31465]] : '',
        'cdn': j1E[c[4862]]
    }, this[c[31466]]();
}, window[c[31466]] = function () {
    if (j1E[c[1261]] == 0x1) {
        var lcbmy = j1E[c[26870]][c[721]];
        if (lcbmy === -0x1 || lcbmy === 0x0) {
            window[c[31371]](0xf, c[31467] + j1E[c[26870]]['id'] + c[31468] + j1E[c[26870]][c[721]]), window[c[31350]](lcbmy === -0x1 ? c[31469] : c[31470]);
            return;
        }
        jEMB1(0x0, j1E[c[26870]][c[61]]), window[c[31210]][c[762]][c[31471]](j1E[c[1261]]);
    } else window[c[31210]][c[762]][c[31472]](), jM1EB();
    window[c[31344]] = !![], window[c[31235]](), window[c[31236]]();
}, window[c[31410]] = function () {
    sendApi(j1E[c[31322]], c[31473], {
        'game_pkg': j1E[c[26876]],
        'version_name': j1E[c[31400]]
    }, this[c[31474]][c[396]](this), jBE1, jEM);
}, window[c[31474]] = function (ip73r5) {
    if (!ip73r5) {
        window[c[31371]](0x5, c[31475]), window[c[31350]](c[31475]);
        return;
    }
    if (ip73r5[c[1899]] != c[10379]) {
        window[c[31371]](0x5, c[31476] + ip73r5[c[1899]]), window[c[31350]](c[31476] + ip73r5[c[1899]]);
        return;
    }
    if (!ip73r5[c[585]] || !ip73r5[c[585]][c[5052]]) {
        window[c[31371]](0x5, c[31477] + (ip73r5[c[585]] && ip73r5[c[585]][c[5052]])), window[c[31350]](c[31477] + (ip73r5[c[585]] && ip73r5[c[585]][c[5052]]));
        return;
    }
    ip73r5[c[585]][c[31478]] && ip73r5[c[585]][c[31478]][c[407]] > 0xa && (j1E[c[31479]] = ip73r5[c[585]][c[31478]], j1E[c[4862]] = ip73r5[c[585]][c[31478]]), ip73r5[c[585]][c[5052]] && (j1E[c[716]] = ip73r5[c[585]][c[5052]]), console[c[694]](c[27012] + j1E[c[716]] + c[31480] + j1E[c[31400]]), window[c[31342]] = !![], window[c[31235]](), window[c[31236]]();
}, window[c[31481]], window[c[31411]] = function () {
    sendApi(j1E[c[31322]], c[31482], { 'game_pkg': j1E[c[26876]] }, this[c[31483]][c[396]](this), jBE1, jEM);
}, window[c[31483]] = function (sxjh) {
    if (sxjh && sxjh[c[1899]] === c[10379] && sxjh[c[585]]) {
        window[c[31481]] = sxjh[c[585]];
        for (var r7t3 in sxjh[c[585]]) {
            j1E[r7t3] = sxjh[c[585]][r7t3];
        }
    } else window[c[31371]](0xb, c[31484]), console[c[694]](c[31485] + sxjh[c[1899]]);
    window[c[31343]] = !![], window[c[31236]]();
}, window[c[31486]] = function (e_2guw, x1sg, pi57r, sxhv, f2gxu1, d6q8tk, t37p, d86t, xgfu1, kjh) {
    f2gxu1 = String(f2gxu1);
    var fj1xn = t37p,
        fwu21g = d86t;
    j1E[c[31318]][f2gxu1] = {
        'productid': f2gxu1,
        'productname': fj1xn,
        'productdesc': fwu21g,
        'roleid': e_2guw,
        'rolename': x1sg,
        'rolelevel': pi57r,
        'price': d6q8tk,
        'callback': xgfu1
    }, sendApi(j1E[c[31326]], c[31487], {
        'game_pkg': j1E[c[26876]],
        'server_id': j1E[c[26870]][c[61]],
        'server_name': j1E[c[26870]][c[31463]],
        'level': pi57r,
        'uid': j1E[c[26875]],
        'role_id': e_2guw,
        'role_name': x1sg,
        'product_id': f2gxu1,
        'product_name': fj1xn,
        'product_desc': fwu21g,
        'money': d6q8tk,
        'partner_id': j1E[c[24955]]
    }, toPayCallBack, jBE1, jEM);
}, window[c[31488]] = function (e_u4ow) {
    if (e_u4ow && (e_u4ow[c[31489]] === 0xc8 || e_u4ow[c[1899]] == c[10379])) {
        var vjxnfs = j1E[c[31318]][String(e_u4ow[c[31490]])];
        if (vjxnfs[c[940]]) vjxnfs[c[940]](e_u4ow[c[31490]], e_u4ow[c[31491]], -0x1);
        go$c0[c[50]]({
            'cpbill': e_u4ow[c[31491]],
            'productid': e_u4ow[c[31490]],
            'productname': vjxnfs[c[31492]],
            'productdesc': vjxnfs[c[31493]],
            'serverid': j1E[c[26870]][c[61]],
            'servername': j1E[c[26870]][c[31463]],
            'roleid': vjxnfs[c[31494]],
            'rolename': vjxnfs[c[31495]],
            'rolelevel': vjxnfs[c[31496]],
            'price': vjxnfs[c[28682]],
            'extension': JSON[c[4848]]({ 'cp_order_id': e_u4ow[c[31491]] })
        }, function (vnjsz, y4oe) {
            vjxnfs[c[940]] && vnjsz == 0x0 && vjxnfs[c[940]](e_u4ow[c[31490]], e_u4ow[c[31491]], vnjsz);
            console[c[694]](JSON[c[4848]]({
                'type': c[31497],
                'status': vnjsz,
                'data': e_u4ow,
                'role_name': vjxnfs[c[31495]]
            }));
            if (vnjsz === 0x0) {} else {
                if (vnjsz === 0x1) {} else {
                    if (vnjsz === 0x2) {}
                }
            }
        });
    } else {
        var i73r5p = e_u4ow ? c[31498] + e_u4ow[c[31489]] + c[31499] + e_u4ow[c[1899]] + c[31500] + e_u4ow[c[694]] : c[31501];
        window[c[31371]](0xd, c[31502] + i73r5p), alert(i73r5p);
    }
}, window[c[31503]] = function () {}, window[c[31504]] = function (xjsvnh, wuf12g, o4uwe, nvzhk6, y4eo_0) {
    go$c0[c[83]](j1E[c[26870]][c[61]], j1E[c[26870]][c[31463]] || j1E[c[26870]][c[61]], xjsvnh, wuf12g, o4uwe), sendApi(j1E[c[31322]], c[31505], {
        'game_pkg': j1E[c[26876]],
        'server_id': j1E[c[26870]][c[61]],
        'role_id': xjsvnh,
        'uid': j1E[c[26875]],
        'role_name': wuf12g,
        'role_type': nvzhk6,
        'level': o4uwe
    });
}, window[c[31506]] = function (m$bacl, $clmba, $mabcl, hjsx, $blyc0, p573r, am$l9b, ue4_gw, eoy_, qt587r) {
    j1E[c[31199]] = m$bacl, j1E[c[4982]] = $clmba, j1E[c[31200]] = $mabcl, go$c0[c[84]](j1E[c[26870]][c[61]], j1E[c[26870]][c[31463]] || j1E[c[26870]][c[61]], m$bacl, $clmba, $mabcl), sendApi(j1E[c[31322]], c[31507], {
        'game_pkg': j1E[c[26876]],
        'server_id': j1E[c[26870]][c[61]],
        'role_id': m$bacl,
        'uid': j1E[c[26875]],
        'role_name': $clmba,
        'role_type': hjsx,
        'level': $mabcl,
        'evolution': $blyc0
    });
}, window[c[31508]] = function (ew_u2g, td8q5, eo4_0, t6qd, y$c0o, fg21, _0yco, jhvnzk, fgx2u1, $by0c) {
    j1E[c[31199]] = ew_u2g, j1E[c[4982]] = td8q5, j1E[c[31200]] = eo4_0, go$c0[c[85]](j1E[c[26870]][c[61]], j1E[c[26870]][c[31463]] || j1E[c[26870]][c[61]], ew_u2g, td8q5, eo4_0), sendApi(j1E[c[31322]], c[31507], {
        'game_pkg': j1E[c[26876]],
        'server_id': j1E[c[26870]][c[61]],
        'role_id': ew_u2g,
        'uid': j1E[c[26875]],
        'role_name': td8q5,
        'role_type': t6qd,
        'level': eo4_0,
        'evolution': y$c0o
    });
}, window[c[31509]] = function (ouw4e) {}, window[c[31510]] = function (lbac) {
    go$c0[c[34]](c[34], function (y4_oe0) {
        lbac && lbac(y4_oe0);
    });
}, window[c[82]] = function () {
    go$c0[c[82]]();
}, window[c[31511]] = function () {
    go$c0[c[24833]] && go$c0[c[24833]]();
}, window[c[31512]] = function (nfxs1, wue_4o, jhnvxs, tq8d6k, nzsj, r7pi5, _o0we, q6kz) {
    q6kz = q6kz || j1E[c[26870]][c[61]], sendApi(j1E[c[31322]], c[31513], {
        'phone': nfxs1,
        'role_id': wue_4o,
        'uid': j1E[c[26875]],
        'game_pkg': j1E[c[26876]],
        'partner_id': j1E[c[24955]],
        'server_id': q6kz
    }, _o0we, 0x2, null, function () {
        return !![];
    });
}, window[c[11378]] = function (p73rt) {
    window[c[31299]] = p73rt, window[c[31299]] && window[c[31298]] && (console[c[694]](c[31300] + window[c[31298]][c[1413]]), window[c[31299]](window[c[31298]]), window[c[31298]] = null);
}, window[c[31514]] = function (dtr86q, wg_2ue, hzjnv, gf21sx) {
    window[c[644]](c[31515], {
        'game_pkg': window[c[31198]][c[26876]],
        'role_id': wg_2ue,
        'server_id': hzjnv
    }, gf21sx);
}, window[c[31516]] = function (byo$c0, hkn6zv, t8qd6) {
    function k6qt(cm$bly) {
        var snxfjv = [],
            oyc_0 = [],
            hqzk6d = t8qd6 || window[c[1160]][c[31517]];
        for (var jxf1s in hqzk6d) {
            var g1xfs = Number(jxf1s);
            (!byo$c0 || !byo$c0[c[407]] || byo$c0[c[488]](g1xfs) != -0x1) && (oyc_0[c[429]](hqzk6d[jxf1s]), snxfjv[c[429]]([g1xfs, 0x3]));
        }
        window[c[31213]](window[c[31214]], c[31518]) >= 0x0 ? (console[c[540]](c[31519]), go$c0[c[31520]] && go$c0[c[31520]](oyc_0, function (fg1wu) {
            console[c[540]](c[31521]), console[c[540]](fg1wu);
            if (fg1wu && fg1wu[c[27069]] == c[31522]) for (var $l9ma in hqzk6d) {
                if (fg1wu[hqzk6d[$l9ma]] == c[31523]) {
                    var qd6h = Number($l9ma);
                    for (var d6k8qz = 0x0; d6k8qz < snxfjv[c[407]]; d6k8qz++) {
                        if (snxfjv[d6k8qz][0x0] == qd6h) {
                            snxfjv[d6k8qz][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[c[31213]](window[c[31214]], c[31524]) >= 0x0 ? wx[c[31525]]({
                'withSubscriptions': !![],
                'success': function (zqd6k) {
                    var xvfsnj = zqd6k[c[31526]][c[31527]];
                    if (xvfsnj) {
                        console[c[540]](c[31528]), console[c[540]](xvfsnj);
                        for (var bm$la in hqzk6d) {
                            if (xvfsnj[hqzk6d[bm$la]] == c[31523]) {
                                var m$la9 = Number(bm$la);
                                for (var uew_4 = 0x0; uew_4 < snxfjv[c[407]]; uew_4++) {
                                    if (snxfjv[uew_4][0x0] == m$la9) {
                                        snxfjv[uew_4][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[c[540]](snxfjv), hkn6zv && hkn6zv(snxfjv);
                    } else console[c[540]](c[31529]), console[c[540]](zqd6k), console[c[540]](snxfjv), hkn6zv && hkn6zv(snxfjv);
                },
                'fail': function () {
                    console[c[540]](c[31530]), console[c[540]](snxfjv), hkn6zv && hkn6zv(snxfjv);
                }
            }) : (console[c[540]](c[31531] + window[c[31214]]), console[c[540]](snxfjv), hkn6zv && hkn6zv(snxfjv));
        })) : (console[c[540]](c[31532] + window[c[31214]]), console[c[540]](snxfjv), hkn6zv && hkn6zv(snxfjv)), wx[c[31533]](k6qt);
    }
    wx[c[31534]](k6qt);
}, window[c[31535]] = {
    'isSuccess': ![],
    'level': c[31536],
    'isCharging': ![]
}, window[c[13955]] = function (byc$ml) {
    wx[c[31290]]({
        'success': function (njzvh) {
            var g1uew = window[c[31535]];
            g1uew[c[31537]] = !![], g1uew[c[4959]] = Number(njzvh[c[4959]])[c[4581]](0x0), g1uew[c[31293]] = njzvh[c[31293]], byc$ml && byc$ml(g1uew[c[31537]], g1uew[c[4959]], g1uew[c[31293]]);
        },
        'fail': function (yc$bl) {
            console[c[540]](c[31538], yc$bl[c[27069]]);
            var ycbl0 = window[c[31535]];
            byc$ml && byc$ml(ycbl0[c[31537]], ycbl0[c[4959]], ycbl0[c[31293]]);
        }
    });
}, window[c[12443]] = function (zhjnk) {
    wx[c[12443]]({
        'success': function (e_4gwu) {
            zhjnk && zhjnk(!![], e_4gwu);
        },
        'fail': function (t7q5) {
            zhjnk && zhjnk(![], t7q5);
        }
    });
}, window[c[12445]] = function (wo04_e) {
    if (wo04_e) wx[c[12445]](wo04_e);
}, window[c[26554]] = function (fs1jnx) {
    wx[c[26554]](fs1jnx);
}, window[c[644]] = function (fx1snj, nfxj1, rtp5, g1ux2f, r5qt87, f1wug2, ge_2, jxvsn) {
    if (g1ux2f == undefined) g1ux2f = 0x1;
    wx[c[1084]]({
        'url': fx1snj,
        'method': ge_2 || c[26755],
        'responseType': c[4766],
        'data': nfxj1,
        'header': { 'content-type': jxvsn || c[31384] },
        'success': function (vznj) {
            DEBUG && console[c[540]](c[31539], fx1snj, info, vznj);
            if (vznj && vznj[c[27137]] == 0xc8) {
                var dhvk6 = vznj[c[585]];
                !f1wug2 || f1wug2(dhvk6) ? rtp5 && rtp5(dhvk6) : window[c[31540]](fx1snj, nfxj1, rtp5, g1ux2f, r5qt87, f1wug2, vznj);
            } else window[c[31540]](fx1snj, nfxj1, rtp5, g1ux2f, r5qt87, f1wug2, vznj);
        },
        'fail': function (ug2e_) {
            DEBUG && console[c[540]](c[31541], fx1snj, info, ug2e_), window[c[31540]](fx1snj, nfxj1, rtp5, g1ux2f, r5qt87, f1wug2, ug2e_);
        },
        'complete': function () {}
    });
}, window[c[31540]] = function (_eo4y0, _2eu, q7r58, labm$c, mcabl, wgeu12, sf2gx1) {
    labm$c - 0x1 > 0x0 ? setTimeout(function () {
        window[c[644]](_eo4y0, _2eu, q7r58, labm$c - 0x1, mcabl, wgeu12);
    }, 0x3e8) : mcabl && mcabl(JSON[c[4848]]({
        'url': _eo4y0,
        'response': sf2gx1
    }));
}, window[c[31542]] = function (r8d, fsx2j, _y40eo, bal9$, w4uge_, dhqk, gs1xf) {
    !_y40eo && (_y40eo = {});
    var b$mla = Math[c[434]](Date[c[699]]() / 0x3e8);
    _y40eo[c[1487]] = b$mla, _y40eo[c[31543]] = fsx2j;
    var lm9b$ = Object[c[406]](_y40eo)[c[596]](),
        qzdk86 = '',
        hd6v = '';
    for (var vxsnj = 0x0; vxsnj < lm9b$[c[407]]; vxsnj++) {
        qzdk86 = qzdk86 + (vxsnj == 0x0 ? '' : '&') + lm9b$[vxsnj] + _y40eo[lm9b$[vxsnj]], hd6v = hd6v + (vxsnj == 0x0 ? '' : '&') + lm9b$[vxsnj] + '=' + encodeURIComponent(_y40eo[lm9b$[vxsnj]]);
    }
    qzdk86 = qzdk86 + j1E[c[31328]];
    var jknzv = c[31544] + md5(qzdk86);
    send(r8d + '?' + hd6v + (hd6v == '' ? '' : '&') + jknzv, null, bal9$, w4uge_, dhqk, gs1xf || function (nzhkvj) {
        return nzhkvj[c[1899]] == c[10379];
    }, null, c[25]);
}, window[c[31545]] = function (_ow4ue, my$c) {
    var ou_w4e = 0x0;
    j1E[c[26870]] && (ou_w4e = j1E[c[26870]][c[61]]), sendApi(j1E[c[31324]], c[31546], {
        'partnerId': j1E[c[24955]],
        'gamePkg': j1E[c[26876]],
        'logTime': Math[c[434]](Date[c[699]]() / 0x3e8),
        'platformUid': j1E[c[26877]],
        'type': _ow4ue,
        'serverId': ou_w4e
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[c[31547]] = function (hz6dk) {
    sendApi(j1E[c[31322]], c[31548], {
        'partner_id': j1E[c[24955]],
        'uid': j1E[c[26875]],
        'version': j1E[c[5052]],
        'game_pkg': j1E[c[26876]],
        'device': j1E[c[26878]]
    }, j1EBM, jBE1, jEM);
}, window[c[31549]] = function (zhvjnk) {
    if (zhvjnk && zhvjnk[c[1899]] === c[10379] && zhvjnk[c[585]]) {
        zhvjnk[c[585]][c[511]]({
            'id': -0x2,
            'name': c[31550]
        }), zhvjnk[c[585]][c[511]]({
            'id': -0x1,
            'name': c[31551]
        }), j1E[c[31552]] = zhvjnk[c[585]];
        if (window[c[13032]]) window[c[13032]][c[31553]]();
    } else {
        j1E[c[31554]] = ![];
        var w_ug2 = zhvjnk ? zhvjnk[c[1899]] : '';
        window[c[31371]](0x7, c[31555] + w_ug2), window[c[31350]](c[31556] + w_ug2);
    }
}, window[c[31557]] = function (abc$l) {
    sendApi(j1E[c[31322]], c[31558], {
        'partner_id': j1E[c[24955]],
        'uid': j1E[c[26875]],
        'version': j1E[c[5052]],
        'game_pkg': j1E[c[26876]],
        'device': j1E[c[26878]]
    }, jM1B, jBE1, jEM);
}, window[c[31559]] = function (r85t) {
    j1E[c[31560]] = ![];
    if (r85t && r85t[c[1899]] === c[10379] && r85t[c[585]]) {
        for (var ewu21g = 0x0; ewu21g < r85t[c[585]][c[407]]; ewu21g++) {
            r85t[c[585]][ewu21g][c[721]] = j1BM(r85t[c[585]][ewu21g]);
        }
        j1E[c[31331]][-0x1] = window[c[31561]](r85t[c[585]]), window[c[13032]][c[31562]](-0x1);
    } else {
        var $mb9l = r85t ? r85t[c[1899]] : '';
        window[c[31371]](0x8, c[31563] + $mb9l), window[c[31350]](c[31564] + $mb9l);
    }
}, window[c[31565]] = function (ba$mcl) {
    sendApi(j1E[c[31322]], c[31558], {
        'partner_id': j1E[c[24955]],
        'uid': j1E[c[26875]],
        'version': j1E[c[5052]],
        'game_pkg': j1E[c[26876]],
        'device': j1E[c[26878]]
    }, ba$mcl, jBE1, jEM);
}, window[c[31566]] = function (eugw_, nsj1xf) {
    sendApi(j1E[c[31322]], c[31567], {
        'partner_id': j1E[c[24955]],
        'uid': j1E[c[26875]],
        'version': j1E[c[5052]],
        'game_pkg': j1E[c[26876]],
        'device': j1E[c[26878]],
        'server_group_id': nsj1xf
    }, jB1M, jBE1, jEM);
}, window[c[31568]] = function (yb40co) {
    j1E[c[31560]] = ![];
    if (yb40co && yb40co[c[1899]] === c[10379] && yb40co[c[585]] && yb40co[c[585]][c[585]]) {
        var we_4o0 = yb40co[c[585]][c[31569]],
            vnzsh = [];
        for (var znvk = 0x0; znvk < yb40co[c[585]][c[585]][c[407]]; znvk++) {
            yb40co[c[585]][c[585]][znvk][c[721]] = j1BM(yb40co[c[585]][c[585]][znvk]), (vnzsh[c[407]] == 0x0 || yb40co[c[585]][c[585]][znvk][c[721]] != 0x0) && (vnzsh[vnzsh[c[407]]] = yb40co[c[585]][c[585]][znvk]);
        }
        j1E[c[31331]][we_4o0] = window[c[31561]](vnzsh), window[c[13032]][c[31562]](we_4o0);
    } else {
        var nzhjvk = yb40co ? yb40co[c[1899]] : '';
        window[c[31371]](0x9, c[31570] + nzhjvk), window[c[31350]](c[31571] + nzhjvk);
    }
}, window[c[31572]] = function (cy_40o) {
    sendApi(j1E[c[31322]], c[31573], {
        'partner_id': j1E[c[24955]],
        'uid': j1E[c[26875]],
        'version': j1E[c[5052]],
        'game_pkg': j1E[c[26876]],
        'device': j1E[c[26878]]
    }, reqServerRecommendCallBack, jBE1, jEM);
}, window[c[31574]] = function (hqd6kz) {
    j1E[c[31560]] = ![];
    if (hqd6kz && hqd6kz[c[1899]] === c[10379] && hqd6kz[c[585]]) {
        for (var dhvz = 0x0; dhvz < hqd6kz[c[585]][c[407]]; dhvz++) {
            hqd6kz[c[585]][dhvz][c[721]] = j1BM(hqd6kz[c[585]][dhvz]);
        }
        j1E[c[31331]][-0x2] = window[c[31561]](hqd6kz[c[585]]), window[c[13032]][c[31562]](-0x2);
    } else {
        var fnxjv = hqd6kz ? hqd6kz[c[1899]] : '';
        window[c[31371]](0xa, c[31575] + fnxjv), alert(c[31576] + fnxjv);
    }
}, window[c[31561]] = function (sx1jnf) {
    return sx1jnf;
}, window[c[31577]] = function (o_4ey, boc$0y) {
    o_4ey = o_4ey || j1E[c[26870]][c[61]], sendApi(j1E[c[31322]], c[31578], {
        'type': '4',
        'game_pkg': j1E[c[26876]],
        'server_id': o_4ey
    }, boc$0y);
}, window[c[31579]] = function (hdz, nxfvsj, gu4ew_, ycml$) {
    gu4ew_ = gu4ew_ || j1E[c[26870]][c[61]], sendApi(j1E[c[31322]], c[31580], {
        'type': hdz,
        'game_pkg': nxfvsj,
        'server_id': gu4ew_
    }, ycml$);
}, window[c[31581]] = function (vnhsjx, e0y4o) {
    sendApi(j1E[c[31322]], c[31582], { 'game_pkg': vnhsjx }, e0y4o);
}, window[c[31583]] = function (dz8kq6) {
    if (dz8kq6) {
        if (dz8kq6[c[721]] == 0x1) {
            if (dz8kq6[c[31584]] == 0x1) return 0x2;else return 0x1;
        } else return dz8kq6[c[721]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[c[31585]] = function (_ewo40, sf2xj) {
    j1E[c[31586]] = {
        'step': _ewo40,
        'server_id': sf2xj
    };
    var zjkhn = this;
    jM1BE({ 'title': c[31587] }), sendApi(j1E[c[31322]], c[31588], {
        'partner_id': j1E[c[24955]],
        'uid': j1E[c[26875]],
        'game_pkg': j1E[c[26876]],
        'server_id': sf2xj,
        'platform': j1E[c[26838]],
        'platform_uid': j1E[c[26877]],
        'check_login_time': j1E[c[31439]],
        'check_login_sign': j1E[c[31438]],
        'version_name': j1E[c[31400]]
    }, jEM1B, jBE1, jEM, function (kt8d6) {
        return kt8d6[c[1899]] == c[10379] || kt8d6[c[694]] == c[31589] || kt8d6[c[694]] == c[31590];
    });
}, window[c[31591]] = function (sn1jxf) {
    var xfsvnj = this;
    if (sn1jxf && sn1jxf[c[1899]] === c[10379] && sn1jxf[c[585]]) {
        var sxgf12 = j1E[c[26870]];
        sxgf12[c[31592]] = j1E[c[31332]], sxgf12[c[12046]] = String(sn1jxf[c[585]][c[31593]]), sxgf12[c[26840]] = parseInt(sn1jxf[c[585]][c[1487]]);
        if (sn1jxf[c[585]][c[26839]]) sxgf12[c[26839]] = parseInt(sn1jxf[c[585]][c[26839]]);else sxgf12[c[26839]] = parseInt(sn1jxf[c[585]][c[61]]);
        sxgf12[c[31594]] = 0x0, sxgf12[c[4862]] = j1E[c[31479]], sxgf12[c[31595]] = sn1jxf[c[585]][c[31596]], sxgf12[c[31597]] = sn1jxf[c[585]][c[31597]];
        if (sn1jxf[c[585]][c[26843]]) sxgf12[c[26843]] = parseInt(sn1jxf[c[585]][c[26843]]);
        console[c[540]](c[31598] + JSON[c[4848]](sxgf12[c[31597]])), j1E[c[1261]] == 0x1 && sxgf12[c[31597]] && sxgf12[c[31597]][c[31599]] == 0x1 && (j1E[c[31600]] = 0x1, window[c[31210]][c[762]][c[31601]]()), jEBM1();
    } else {
        if (j1E[c[31586]][c[7523]] >= 0x3) {
            var euw12 = sn1jxf ? sn1jxf[c[1899]] : '';
            window[c[31371]](0xc, c[31602] + euw12), jEM(JSON[c[4848]](sn1jxf)), window[c[31350]](c[31603] + euw12);
        } else sendApi(j1E[c[31322]], c[31417], {
            'platform': j1E[c[31320]],
            'partner_id': j1E[c[24955]],
            'token': j1E[c[31415]],
            'game_pkg': j1E[c[26876]],
            'deviceId': j1E[c[26878]],
            'scene': c[31418] + j1E[c[31330]]
        }, function (jvsh) {
            if (!jvsh || jvsh[c[1899]] != c[10379]) {
                window[c[31350]](c[31435] + jvsh && jvsh[c[1899]]);
                return;
            }
            j1E[c[31438]] = String(jvsh[c[12046]]), j1E[c[31439]] = String(jvsh[c[1487]]), setTimeout(function () {
                jEMB1(j1E[c[31586]][c[7523]] + 0x1, j1E[c[31586]][c[61]]);
            }, 0x5dc);
        }, jBE1, jEM, function (r573pt) {
            return r573pt[c[1899]] == c[10379] || r573pt[c[1899]] == c[27214];
        });
    }
}, window[c[31604]] = function () {
    ServerLoading[c[762]][c[31471]](j1E[c[1261]]), window[c[31339]] = !![], window[c[31236]]();
}, window[c[31235]] = function () {
    if (window[c[31234]] && window[c[31242]] && window[c[31340]] && window[c[31341]] && window[c[31342]] && window[c[31344]]) {
        if (!window[c[31189]][c[762]]) {
            console[c[540]](c[31605] + window[c[31189]][c[762]]);
            var zkvj = wx[c[26540]](),
                xjf2 = zkvj[c[1413]] ? zkvj[c[1413]] : 0x0,
                d6qkt8 = {
                'cdn': window[c[31198]][c[4862]],
                'spareCdn': window[c[31198]][c[26559]],
                'newRegister': window[c[31198]][c[1261]],
                'wxPC': window[c[31198]][c[26561]],
                'wxIOS': window[c[31198]][c[1710]],
                'wxAndroid': window[c[31198]][c[11887]],
                'wxParam': {
                    'limitLoad': window[c[31198]][c[31281]],
                    'benchmarkLevel': window[c[31198]][c[31282]],
                    'wxFrom': window[c[1160]][c[421]] == c[31606] ? 0x1 : 0x0,
                    'wxSDKVersion': window[c[31214]]
                },
                'configType': window[c[31198]][c[12581]],
                'exposeType': window[c[31198]][c[1351]],
                'scene': xjf2
            };
            new window[c[31189]](d6qkt8, window[c[31198]][c[716]], window[c[31315]]);
        }
    }
}, window[c[31236]] = function () {
    if (window[c[31234]] && window[c[31242]] && window[c[31340]] && window[c[31341]] && window[c[31342]] && window[c[31344]] && window[c[31339]] && window[c[31343]]) {
        jM1EB();
        if (!jEB1) {
            jEB1 = !![];
            if (!window[c[31189]][c[762]]) window[c[31235]]();
            var bo4y = 0x0,
                xfjv = wx[c[31607]]();
            xfjv && (window[c[31198]][c[31277]] && (bo4y = xfjv[c[925]]), console[c[694]](c[31608] + xfjv[c[925]] + c[31609] + xfjv[c[1926]] + c[31610] + xfjv[c[1928]] + c[31611] + xfjv[c[1927]] + c[31612] + xfjv[c[791]] + c[31613] + xfjv[c[792]]));
            var dtr85q = {};
            for (const t85r7 in j1E[c[26870]]) {
                dtr85q[t85r7] = j1E[c[26870]][t85r7];
            }
            var nvxfs = {
                'channel': window[c[31198]][c[26874]],
                'account': window[c[31198]][c[26875]],
                'userId': window[c[31198]][c[19969]],
                'cdn': window[c[31198]][c[4862]],
                'data': window[c[31198]][c[585]],
                'package': window[c[31198]][c[576]],
                'newRegister': window[c[31198]][c[1261]],
                'pkgName': window[c[31198]][c[26876]],
                'partnerId': window[c[31198]][c[24955]],
                'platform_uid': window[c[31198]][c[26877]],
                'deviceId': window[c[31198]][c[26878]],
                'selectedServer': dtr85q,
                'configType': window[c[31198]][c[12581]],
                'exposeType': window[c[31198]][c[1351]],
                'debugUsers': window[c[31198]][c[12985]],
                'wxMenuTop': bo4y,
                'wxShield': window[c[31198]][c[1375]],
                'wx_channel': window[c[31198]][c[27015]]
            };
            if (window[c[31481]]) for (var bc0y$ in window[c[31481]]) {
                nvxfs[bc0y$] = window[c[31481]][bc0y$];
            }
            window[c[31189]][c[762]][c[26892]](nvxfs);
            if (j1E[c[26870]] && j1E[c[26870]][c[61]]) localStorage[c[1091]](c[31441] + j1E[c[26876]] + j1E[c[26875]], j1E[c[26870]][c[61]]);
        }
    } else console[c[694]](c[31614] + window[c[31234]] + c[31615] + window[c[31242]] + c[31616] + window[c[31340]] + c[31617] + window[c[31341]] + c[31618] + window[c[31342]] + c[31619] + window[c[31344]] + c[31620] + window[c[31339]] + c[31621] + window[c[31343]]);
};