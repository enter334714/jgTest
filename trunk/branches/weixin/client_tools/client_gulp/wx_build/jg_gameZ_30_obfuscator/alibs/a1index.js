var c = wx.$a;
import grt3587 from '../a3a4/eeesdk.js';
window[c[31315]] = { 'wxVersion': window[c[1076]][c[31199]] }, window[c[31316]] = ![], window[c[31317]] = 0x1, window[c[31318]] = 0x1, window[c[31319]] = !![], window[c[31320]] = !![], window[c[31321]] = '', window[c[31322]] = ![], window[c[31204]] = {
    'base_cdn': c[31323],
    'cdn': c[31323]
}, j1E[c[31324]] = {}, j1E[c[489]] = '0', j1E[c[4968]] = window[c[31315]][c[31325]], j1E[c[31285]] = '', j1E['os'] = '1', j1E[c[31326]] = c[31327], j1E[c[31328]] = c[31329], j1E[c[31330]] = c[31331], j1E[c[31332]] = c[31333], j1E[c[31334]] = c[31335], j1E[c[24878]] = '1', j1E[c[26799]] = '', j1E[c[26801]] = '', j1E[c[31336]] = 0x0, j1E[c[31337]] = {}, j1E[c[31338]] = parseInt(j1E[c[24878]]), j1E[c[26797]] = j1E[c[24878]], j1E[c[26793]] = {}, j1E[c[31210]] = c[31339], j1E[c[31340]] = ![], j1E[c[12906]] = c[31341], j1E[c[26763]] = Date[c[613]](), j1E[c[12500]] = c[31342], j1E[c[1267]] = '_a', j1E[c[31343]] = 0x2, j1E[c[630]] = 0x7c1, j1E[c[31325]] = window[c[31315]][c[31325]], j1E[c[1291]] = ![], j1E[c[1626]] = ![], j1E[c[11805]] = ![], j1E[c[26484]] = ![], window[c[31344]] = 0x5, window[c[31345]] = ![], window[c[31240]] = ![], window[c[31248]] = ![], window[c[31346]] = ![], window[c[31347]] = ![], window[c[31348]] = ![], window[c[31349]] = ![], window[c[31350]] = ![], window[c[31351]] = ![], window[c[31352]] = null, window[c[1167]] = function (jf2) {
    console[c[453]](c[1167], jf2), wx[c[5248]]({}), wx[c[31228]]({
        'title': c[6364],
        'content': jf2,
        'success'(bo0yc$) {
            if (bo0yc$[c[31353]]) console[c[453]](c[31354]);else bo0yc$[c[1072]] && console[c[453]](c[31355]);
        }
    });
}, window[c[31356]] = function (r8375) {
    console[c[453]](c[31357], r8375), jM1EB(), wx[c[31228]]({
        'title': c[6364],
        'content': r8375,
        'confirmText': c[31358],
        'cancelText': c[19510],
        'success'(xfs2) {
            if (xfs2[c[31353]]) window[c[31254]]();else xfs2[c[1072]] && (console[c[453]](c[31359]), wx[c[26481]]({}));
        }
    });
}, window[c[31360]] = function (h6zdv) {
    console[c[453]](c[31360], h6zdv), wx[c[31228]]({
        'title': c[6364],
        'content': h6zdv,
        'confirmText': c[26928],
        'showCancel': ![],
        'complete'(eu21w) {
            console[c[453]](c[31359]), wx[c[26481]]({});
        }
    });
}, window[c[31361]] = ![], window[c[31362]] = function (xfjnvs) {
    window[c[31361]] = !![], wx[c[5247]](xfjnvs);
}, window[c[31363]] = function () {
    window[c[31361]] && (window[c[31361]] = ![], wx[c[5248]]({}));
}, window[c[31364]] = function (t375) {
    window[c[31216]][c[676]][c[31364]](t375);
}, window[c[12776]] = function (jhzkn, wf2u1) {
    grt3587[c[12776]](jhzkn, function (gweu1) {
        gweu1 && gweu1[c[498]] ? gweu1[c[498]][c[1815]] == 0x1 ? wf2u1(!![]) : (wf2u1(![]), console[c[608]](c[31365] + gweu1[c[498]][c[31366]])) : console[c[453]](c[12776], gweu1);
    });
}, window[c[31367]] = function (o4eu) {
    console[c[453]](c[31368], o4eu);
}, window[c[31369]] = function (yo0cb4) {}, window[c[31370]] = function (rtq, rp5i73, dt8q6) {}, window[c[31371]] = function (hqzkd) {
    console[c[453]](c[31372], hqzkd), window[c[31216]][c[676]][c[31373]](), window[c[31216]][c[676]][c[31374]](), window[c[31216]][c[676]][c[31375]]();
}, window[c[31376]] = function (dk6v) {
    window[c[31377]](0xe, c[31378] + dk6v), window[c[31356]](c[31379]);
    var b$almc = {
        'id': window[c[31204]][c[31205]],
        'role': window[c[31204]][c[4898]],
        'level': window[c[31204]][c[31206]],
        'account': window[c[31204]][c[26798]],
        'version': window[c[31204]][c[630]],
        'cdn': window[c[31204]][c[4778]],
        'pkgName': window[c[31204]][c[26799]],
        'gamever': window[c[1076]][c[31199]],
        'serverid': window[c[31204]][c[26793]] ? window[c[31204]][c[26793]][c[11981]] : 0x0,
        'systemInfo': window[c[31207]],
        'error': c[31380],
        'stack': dk6v ? dk6v : c[31379]
    },
        hsnzvj = JSON[c[4764]](b$almc);
    console[c[496]](c[31381] + hsnzvj), window[c[31210]](hsnzvj);
}, window[c[31377]] = function (jxf, jf1xns) {
    sendApi(j1E[c[31330]], c[31382], {
        'game_pkg': j1E[c[26799]],
        'partner_id': j1E[c[24878]],
        'server_id': j1E[c[26793]] && j1E[c[26793]][c[11981]] > 0x0 ? j1E[c[26793]][c[11981]] : 0x0,
        'uid': j1E[c[26798]] > 0x0 ? j1E[c[26798]] : 0x0,
        'type': jxf,
        'info': jf1xns
    });
}, window[c[31383]] = function (vjnx) {
    var qt57r = JSON[c[452]](vjnx);
    qt57r[c[31384]] = window[c[1076]][c[31199]], qt57r[c[31385]] = window[c[31204]][c[26793]] ? window[c[31204]][c[26793]][c[11981]] : 0x0, qt57r[c[31207]] = window[c[31207]];
    var fxgs1 = JSON[c[4764]](qt57r);
    console[c[496]](c[31386] + fxgs1), window[c[31210]](fxgs1);
}, window[c[31255]] = function (hjknv, bcy) {
    var rt3p = {
        'id': window[c[31204]][c[31205]],
        'role': window[c[31204]][c[4898]],
        'level': window[c[31204]][c[31206]],
        'account': window[c[31204]][c[26798]],
        'version': window[c[31204]][c[630]],
        'cdn': window[c[31204]][c[4778]],
        'pkgName': window[c[31204]][c[26799]],
        'gamever': window[c[1076]][c[31199]],
        'serverid': window[c[31204]][c[26793]] ? window[c[31204]][c[26793]][c[11981]] : 0x0,
        'systemInfo': window[c[31207]],
        'error': hjknv,
        'stack': bcy
    },
        _0ey4o = JSON[c[4764]](rt3p);
    console[c[510]](c[31387] + _0ey4o), window[c[31210]](_0ey4o);
}, window[c[31210]] = function (ymb$) {
    if (window[c[31204]][c[31286]] == c[31388]) return;
    var oy0e4 = j1E[c[31210]] + c[31389] + j1E[c[26798]];
    wx[c[1000]]({
        'url': oy0e4,
        'method': c[31131],
        'data': ymb$,
        'header': {
            'content-type': c[31390],
            'cache-control': c[31391]
        },
        'success': function (svnjxh) {
            DEBUG && console[c[453]](c[31392], oy0e4, ymb$, svnjxh);
        },
        'fail': function (rt853) {
            DEBUG && console[c[453]](c[31392], oy0e4, ymb$, rt853);
        },
        'complete': function () {}
    });
}, window[c[31393]] = function () {
    function u4_we() {
        return ((0x1 + Math[c[645]]()) * 0x10000 | 0x0)[c[338]](0x10)[c[459]](0x1);
    }
    return u4_we() + u4_we() + '-' + u4_we() + '-' + u4_we() + '-' + u4_we() + '+' + u4_we() + u4_we() + u4_we();
}, window[c[31254]] = function () {
    console[c[453]](c[31394]);
    var fux1g2 = grt3587[c[31395]]();
    j1E[c[26797]] = fux1g2[c[31396]], j1E[c[31338]] = fux1g2[c[31396]], j1E[c[24878]] = fux1g2[c[31396]], j1E[c[26799]] = fux1g2[c[31397]];
    var y4c_0o = { 'game_ver': j1E[c[4968]] };
    j1E[c[26801]] = this[c[31393]](), jM1BE({ 'title': c[31398] }), grt3587[c[889]](y4c_0o, this[c[31399]][c[308]](this));
}, window[c[31399]] = function (s1fg2) {
    var zkd8q6 = s1fg2[c[31400]];
    sdkInitRes = s1fg2, console[c[453]](c[31401] + zkd8q6 + c[31402] + (zkd8q6 == 0x1) + c[31403] + s1fg2[c[31199]] + c[31404] + window[c[31315]][c[31325]]);
    if (!s1fg2[c[31199]] || window[c[31219]](window[c[31315]][c[31325]], s1fg2[c[31199]]) < 0x0) console[c[453]](c[31405]), j1E[c[31328]] = c[31406], j1E[c[31330]] = c[31407], j1E[c[31332]] = c[31408], j1E[c[4778]] = c[31409], j1E[c[26482]] = c[31410], j1E[c[31411]] = c[31412], j1E[c[1291]] = ![];else window[c[31219]](window[c[31315]][c[31325]], s1fg2[c[31199]]) == 0x0 ? (console[c[453]](c[31413]), j1E[c[31328]] = c[31329], j1E[c[31330]] = c[31331], j1E[c[31332]] = c[31333], j1E[c[4778]] = c[31414], j1E[c[26482]] = c[31410], j1E[c[31411]] = c[31415], j1E[c[1291]] = !![]) : (console[c[453]](c[31416]), j1E[c[31328]] = c[31329], j1E[c[31330]] = c[31331], j1E[c[31332]] = c[31333], j1E[c[4778]] = c[31414], j1E[c[26482]] = c[31410], j1E[c[31411]] = c[31415], j1E[c[1291]] = ![]);
    j1E[c[31336]] = config[c[333]] ? config[c[333]] : 0x0, this[c[31417]](), this[c[31418]](), window[c[31419]] = 0x5, jM1BE({ 'title': c[31420] }), grt3587[c[31126]](this[c[31421]][c[308]](this));
}, window[c[31419]] = 0x5, window[c[31421]] = function (xsnhjv, wueo4) {
    if (xsnhjv == 0x0 && wueo4 && wueo4[c[484]]) {
        j1E[c[31422]] = wueo4[c[484]], j1E[c[26938]] = wueo4[c[26938]];
        var jhvnkz = this;
        jM1BE({ 'title': c[31423] }), sendApi(j1E[c[31328]], c[31424], {
            'platform': j1E[c[31326]],
            'partner_id': j1E[c[24878]],
            'token': wueo4[c[484]],
            'game_pkg': j1E[c[26799]],
            'deviceId': j1E[c[26801]],
            'scene': c[31425] + j1E[c[31336]]
        }, this[c[31426]][c[308]](this), jBE1, jEM);
    } else wueo4 && wueo4[c[26992]] && window[c[31419]] > 0x0 && (wueo4[c[26992]][c[401]](c[31427]) != -0x1 || wueo4[c[26992]][c[401]](c[31428]) != -0x1 || wueo4[c[26992]][c[401]](c[31429]) != -0x1 || wueo4[c[26992]][c[401]](c[31430]) != -0x1 || wueo4[c[26992]][c[401]](c[31431]) != -0x1 || wueo4[c[26992]][c[401]](c[31432]) != -0x1) ? (window[c[31419]]--, grt3587[c[31126]](this[c[31421]][c[308]](this))) : (window[c[31377]](0x1, c[31433] + xsnhjv + c[31434] + (wueo4 ? wueo4[c[26992]] : '')), window[c[31255]](c[31435], JSON[c[4764]]({
        'status': xsnhjv,
        'data': wueo4
    })), window[c[31356]](c[31436] + (wueo4 && wueo4[c[26992]] ? '，' + wueo4[c[26992]] : '')));
}, window[c[31426]] = function (wo_e4u) {
    if (!wo_e4u) {
        window[c[31377]](0x2, c[31437]), window[c[31255]](c[31438], c[31439]), window[c[31356]](c[31440]);
        return;
    }
    if (wo_e4u[c[1815]] != c[10296]) {
        window[c[31377]](0x2, c[31441] + wo_e4u[c[1815]]), window[c[31255]](c[31438], JSON[c[4764]](wo_e4u)), window[c[31356]](c[31442] + wo_e4u[c[1815]]);
        return;
    }
    if (wo_e4u[c[31443]] == 0x1) {
        window[c[31356]](c[31444]);
        return;
    }
    j1E[c[19891]] = String(wo_e4u[c[26798]]), j1E[c[26798]] = String(wo_e4u[c[26798]]), j1E[c[26761]] = String(wo_e4u[c[26761]]), j1E[c[26797]] = String(wo_e4u[c[26761]]), j1E[c[26800]] = String(wo_e4u[c[26800]]), j1E[c[31445]] = String(wo_e4u[c[11964]]), j1E[c[31446]] = String(wo_e4u[c[1403]]), j1E[c[11964]] = '';
    var nfs1j = this;
    jM1BE({ 'title': c[31447] });
    var l$9 = localStorage[c[1003]](c[31448] + j1E[c[26799]] + j1E[c[26798]]);
    if (l$9 && l$9 != '') {
        var fjxsv = Number(l$9);
        nfs1j[c[31449]](fjxsv);
    } else nfs1j[c[31450]]();
}, window[c[31450]] = function () {
    var x12g = this;
    sendApi(j1E[c[31328]], c[31451], {
        'partner_id': j1E[c[24878]],
        'uid': j1E[c[26798]],
        'version': j1E[c[4968]],
        'game_pkg': j1E[c[26799]],
        'device': j1E[c[26801]]
    }, x12g[c[31452]][c[308]](x12g), jBE1, jEM);
}, window[c[31452]] = function (dq85t) {
    if (!dq85t) {
        window[c[31377]](0x3, c[31453]), window[c[31356]](c[31453]);
        return;
    }
    if (dq85t[c[1815]] != c[10296]) {
        window[c[31377]](0x3, c[31454] + dq85t[c[1815]]), window[c[31356]](c[31454] + dq85t[c[1815]]);
        return;
    }
    if (!dq85t[c[498]] || dq85t[c[498]][c[319]] == 0x0) {
        window[c[31377]](0x3, c[31455]), window[c[31356]](c[31456]);
        return;
    }
    this[c[31457]](dq85t);
}, window[c[31449]] = function (vxjfs) {
    var fjnsv = this;
    sendApi(j1E[c[31328]], c[31458], {
        'server_id': vxjfs,
        'time': Date[c[613]]() / 0x3e8
    }, fjnsv[c[31459]][c[308]](fjnsv), jBE1, jEM);
}, window[c[31459]] = function (xnjs1) {
    if (!xnjs1) {
        window[c[31377]](0x4, c[31460]), this[c[31450]]();
        return;
    }
    if (xnjs1[c[1815]] != c[10296]) {
        window[c[31377]](0x4, c[31461] + xnjs1[c[1815]]), this[c[31450]]();
        return;
    }
    if (!xnjs1[c[498]] || xnjs1[c[498]][c[319]] == 0x0) {
        window[c[31377]](0x4, c[31462]), this[c[31450]]();
        return;
    }
    this[c[31457]](xnjs1), window[c[31216]] && window[c[31216]][c[676]][c[31463]] && window[c[31216]][c[676]][c[31463]](sdkInitRes[c[31464]], sdkInitRes[c[31465]], sdkInitRes[c[31466]], sdkInitRes[c[31467]], sdkInitRes[c[31468]]);
}, window[c[31457]] = function (ug1xf) {
    j1E[c[1177]] = ug1xf[c[31469]] != undefined ? ug1xf[c[31469]] : 0x0, j1E[c[26793]] = {
        'server_id': String(ug1xf[c[498]][0x0][c[11981]]),
        'server_name': String(ug1xf[c[498]][0x0][c[31470]]),
        'entry_ip': ug1xf[c[498]][0x0][c[26823]],
        'entry_port': parseInt(ug1xf[c[498]][0x0][c[26824]]),
        'status': j1BM(ug1xf[c[498]][0x0]),
        'start_time': ug1xf[c[498]][0x0][c[31471]],
        'maintain_time': ug1xf[c[498]][0x0][c[31472]] ? ug1xf[c[498]][0x0][c[31472]] : '',
        'cdn': j1E[c[4778]]
    }, this[c[31473]]();
}, window[c[31473]] = function () {
    var wug4 = this;
    if (j1E[c[1177]] == 0x1) {
        var $mca = j1E[c[26793]][c[635]];
        if ($mca === -0x1 || $mca === 0x0) {
            window[c[31377]](0xf, c[31474] + j1E[c[26793]]['id'] + c[31475] + j1E[c[26793]][c[635]]), window[c[31356]]($mca === -0x1 ? c[31476] : c[31477]);
            return;
        }
        jEMB1(0x0, j1E[c[26793]][c[11981]]), window[c[31216]][c[676]][c[31478]](j1E[c[1177]]);
    } else window[c[31216]][c[676]][c[31479]](), jM1EB();
    window[c[31350]] = !![], window[c[31241]](), window[c[31242]]();
}, window[c[31417]] = function () {
    sendApi(j1E[c[31328]], c[31480], {
        'game_pkg': j1E[c[26799]],
        'version_name': j1E[c[31411]]
    }, this[c[31481]][c[308]](this), jBE1, jEM);
}, window[c[31481]] = function (rqdt6) {
    if (!rqdt6) {
        window[c[31377]](0x5, c[31482]), window[c[31356]](c[31482]);
        return;
    }
    if (rqdt6[c[1815]] != c[10296]) {
        window[c[31377]](0x5, c[31483] + rqdt6[c[1815]]), window[c[31356]](c[31483] + rqdt6[c[1815]]);
        return;
    }
    if (!rqdt6[c[498]] || !rqdt6[c[498]][c[4968]]) {
        window[c[31377]](0x5, c[31484] + (rqdt6[c[498]] && rqdt6[c[498]][c[4968]])), window[c[31356]](c[31484] + (rqdt6[c[498]] && rqdt6[c[498]][c[4968]]));
        return;
    }
    rqdt6[c[498]][c[31485]] && rqdt6[c[498]][c[31485]][c[319]] > 0xa && (j1E[c[31486]] = rqdt6[c[498]][c[31485]], j1E[c[4778]] = rqdt6[c[498]][c[31485]]), rqdt6[c[498]][c[4968]] && (j1E[c[630]] = rqdt6[c[498]][c[4968]]), console[c[608]](c[26935] + j1E[c[630]] + c[31487] + j1E[c[31411]]), window[c[31348]] = !![], window[c[31241]](), window[c[31242]]();
}, window[c[31488]], window[c[31418]] = function () {
    sendApi(j1E[c[31328]], c[31489], { 'game_pkg': j1E[c[26799]] }, this[c[31490]][c[308]](this), jBE1, jEM);
}, window[c[31490]] = function (z68kqd) {
    if (z68kqd && z68kqd[c[1815]] === c[10296] && z68kqd[c[498]]) {
        window[c[31488]] = z68kqd[c[498]];
        for (var dtqk86 in z68kqd[c[498]]) {
            j1E[dtqk86] = z68kqd[c[498]][dtqk86];
        }
    } else window[c[31377]](0xb, c[31491]), console[c[608]](c[31492] + z68kqd[c[1815]]);
    window[c[31349]] = !![], window[c[31242]]();
}, window[c[31493]] = function (jkzn, l$mca, $c0byl, jhknz, vkzd6, zvjnk, wu21eg, tr853, mbac$l, kzhq) {
    vkzd6 = String(vkzd6);
    var jvhnx = wu21eg,
        k6h = tr853;
    j1E[c[31324]][vkzd6] = {
        'productid': vkzd6,
        'productname': jvhnx,
        'productdesc': k6h,
        'roleid': jkzn,
        'rolename': l$mca,
        'rolelevel': $c0byl,
        'price': zvjnk,
        'callback': mbac$l
    }, sendApi(j1E[c[31332]], c[31494], {
        'game_pkg': j1E[c[26799]],
        'server_id': j1E[c[26793]][c[11981]],
        'server_name': j1E[c[26793]][c[31470]],
        'level': $c0byl,
        'uid': j1E[c[26798]],
        'role_id': jkzn,
        'role_name': l$mca,
        'product_id': vkzd6,
        'product_name': jvhnx,
        'product_desc': k6h,
        'money': zvjnk,
        'partner_id': j1E[c[24878]]
    }, toPayCallBack, jBE1, jEM);
}, window[c[31495]] = function (jzkhv) {
    if (jzkhv && (jzkhv[c[31496]] === 0xc8 || jzkhv[c[1815]] == c[10296])) {
        var o0_4y = j1E[c[31324]][String(jzkhv[c[31497]])];
        if (o0_4y[c[855]]) o0_4y[c[855]](jzkhv[c[31497]], jzkhv[c[31498]], -0x1);
        grt3587[c[31161]]({
            'cpbill': jzkhv[c[31498]],
            'productid': jzkhv[c[31497]],
            'productname': o0_4y[c[31499]],
            'productdesc': o0_4y[c[31500]],
            'serverid': j1E[c[26793]][c[11981]],
            'servername': j1E[c[26793]][c[31470]],
            'roleid': o0_4y[c[31501]],
            'rolename': o0_4y[c[31502]],
            'rolelevel': o0_4y[c[31503]],
            'price': o0_4y[c[28606]],
            'extension': JSON[c[4764]]({ 'cp_order_id': jzkhv[c[31498]] })
        }, function (jxsnvf, qz68dk) {
            o0_4y[c[855]] && jxsnvf == 0x0 && o0_4y[c[855]](jzkhv[c[31497]], jzkhv[c[31498]], jxsnvf);
            console[c[608]](JSON[c[4764]]({
                'type': c[31504],
                'status': jxsnvf,
                'data': jzkhv,
                'role_name': o0_4y[c[31502]]
            }));
            if (jxsnvf === 0x0) {} else {
                if (jxsnvf === 0x1) {} else {
                    if (jxsnvf === 0x2) {}
                }
            }
        });
    } else {
        var q75 = jzkhv ? c[31505] + jzkhv[c[31496]] + c[31506] + jzkhv[c[1815]] + c[31507] + jzkhv[c[608]] : c[31508];
        window[c[31377]](0xd, c[31509] + q75), alert(q75);
    }
}, window[c[31510]] = function () {}, window[c[31511]] = function (lacbm, jvnxs, njzhk, we_4ou, cbyl0$) {
    grt3587[c[31187]](j1E[c[26793]][c[11981]], j1E[c[26793]][c[31470]] || j1E[c[26793]][c[11981]], lacbm, jvnxs, njzhk), sendApi(j1E[c[31328]], c[31512], {
        'game_pkg': j1E[c[26799]],
        'server_id': j1E[c[26793]][c[11981]],
        'role_id': lacbm,
        'uid': j1E[c[26798]],
        'role_name': jvnxs,
        'role_type': we_4ou,
        'level': njzhk
    });
}, window[c[31513]] = function (g1uwe2, zv6hn, calbm$, sf1x2g, zdq68, kn, r6q8, kvzdh, hdk6, gw2fu1) {
    j1E[c[31205]] = g1uwe2, j1E[c[4898]] = zv6hn, j1E[c[31206]] = calbm$, grt3587[c[31188]](j1E[c[26793]][c[11981]], j1E[c[26793]][c[31470]] || j1E[c[26793]][c[11981]], g1uwe2, zv6hn, calbm$), sendApi(j1E[c[31328]], c[31514], {
        'game_pkg': j1E[c[26799]],
        'server_id': j1E[c[26793]][c[11981]],
        'role_id': g1uwe2,
        'uid': j1E[c[26798]],
        'role_name': zv6hn,
        'role_type': sf1x2g,
        'level': calbm$,
        'evolution': zdq68
    });
}, window[c[31515]] = function (blacm$, hv6knz, vnhjsz, r78, w04o_, u1g2ew, $abmcl, _e0y4o, pt37r5, jhnx) {
    j1E[c[31205]] = blacm$, j1E[c[4898]] = hv6knz, j1E[c[31206]] = vnhjsz, grt3587[c[31189]](j1E[c[26793]][c[11981]], j1E[c[26793]][c[31470]] || j1E[c[26793]][c[11981]], blacm$, hv6knz, vnhjsz), sendApi(j1E[c[31328]], c[31514], {
        'game_pkg': j1E[c[26799]],
        'server_id': j1E[c[26793]][c[11981]],
        'role_id': blacm$,
        'uid': j1E[c[26798]],
        'role_name': hv6knz,
        'role_type': r78,
        'level': vnhjsz,
        'evolution': w04o_
    });
}, window[c[31516]] = function (ue_4gw) {}, window[c[31517]] = function (l0cb$y) {
    grt3587[c[31145]](c[31145], function (r75p3) {
        l0cb$y && l0cb$y(r75p3);
    });
}, window[c[24876]] = function () {
    grt3587[c[24876]]();
}, window[c[31518]] = function () {
    grt3587[c[24755]]();
}, window[c[31519]] = function (oc$y0b, boyc4, byc, z6qkdh, sxnvfj, _o40y, _o40ey, z6kdv) {
    z6kdv = z6kdv || j1E[c[26793]][c[11981]], sendApi(j1E[c[31328]], c[31520], {
        'phone': oc$y0b,
        'role_id': boyc4,
        'uid': j1E[c[26798]],
        'game_pkg': j1E[c[26799]],
        'partner_id': j1E[c[24878]],
        'server_id': z6kdv
    }, _o40ey, 0x2, null, function () {
        return !![];
    });
}, window[c[11296]] = function (fxjsnv) {
    window[c[31305]] = fxjsnv, window[c[31305]] && window[c[31304]] && (console[c[608]](c[31306] + window[c[31304]][c[1329]]), window[c[31305]](window[c[31304]]), window[c[31304]] = null);
}, window[c[31521]] = function (lac$b, $9b, d8tq, t73rp5) {
    window[c[558]](c[31522], {
        'game_pkg': window[c[31204]][c[26799]],
        'role_id': $9b,
        'server_id': d8tq
    }, t73rp5);
}, window[c[31523]] = function (xvjnsh, kzhvnj, xj2sf) {
    function g_eu4w(znjsvh) {
        var vhzkn = [],
            cb0$ = [],
            g2wue = xj2sf || window[c[1076]][c[31524]];
        for (var $clmby in g2wue) {
            var tr53p7 = Number($clmby);
            (!xvjnsh || !xvjnsh[c[319]] || xvjnsh[c[401]](tr53p7) != -0x1) && (cb0$[c[341]](g2wue[$clmby]), vhzkn[c[341]]([tr53p7, 0x3]));
        }
        window[c[31219]](window[c[31220]], c[31525]) >= 0x0 ? (console[c[453]](c[31526]), grt3587[c[31184]] && grt3587[c[31184]](cb0$, function (sjhznv) {
            console[c[453]](c[31527]), console[c[453]](sjhznv);
            if (sjhznv && sjhznv[c[26992]] == c[31528]) for (var fsx21 in g2wue) {
                if (sjhznv[g2wue[fsx21]] == c[31529]) {
                    var ewo40 = Number(fsx21);
                    for (var eyo4_ = 0x0; eyo4_ < vhzkn[c[319]]; eyo4_++) {
                        if (vhzkn[eyo4_][0x0] == ewo40) {
                            vhzkn[eyo4_][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[c[31219]](window[c[31220]], c[31530]) >= 0x0 ? wx[c[31531]]({
                'withSubscriptions': !![],
                'success': function (q85dt) {
                    var $yb = q85dt[c[31532]][c[31533]];
                    if ($yb) {
                        console[c[453]](c[31534]), console[c[453]]($yb);
                        for (var sxjfn1 in g2wue) {
                            if ($yb[g2wue[sxjfn1]] == c[31529]) {
                                var u_wg4e = Number(sxjfn1);
                                for (var h6k = 0x0; h6k < vhzkn[c[319]]; h6k++) {
                                    if (vhzkn[h6k][0x0] == u_wg4e) {
                                        vhzkn[h6k][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[c[453]](vhzkn), kzhvnj && kzhvnj(vhzkn);
                    } else console[c[453]](c[31535]), console[c[453]](q85dt), console[c[453]](vhzkn), kzhvnj && kzhvnj(vhzkn);
                },
                'fail': function () {
                    console[c[453]](c[31536]), console[c[453]](vhzkn), kzhvnj && kzhvnj(vhzkn);
                }
            }) : (console[c[453]](c[31537] + window[c[31220]]), console[c[453]](vhzkn), kzhvnj && kzhvnj(vhzkn));
        })) : (console[c[453]](c[31538] + window[c[31220]]), console[c[453]](vhzkn), kzhvnj && kzhvnj(vhzkn)), wx[c[31539]](g_eu4w);
    }
    wx[c[31540]](g_eu4w);
}, window[c[31541]] = {
    'isSuccess': ![],
    'level': c[31542],
    'isCharging': ![]
}, window[c[13876]] = function (r58qt) {
    wx[c[31296]]({
        'success': function (w21uge) {
            var oc04y = window[c[31541]];
            oc04y[c[31543]] = !![], oc04y[c[4875]] = Number(w21uge[c[4875]])[c[4497]](0x0), oc04y[c[31299]] = w21uge[c[31299]], r58qt && r58qt(oc04y[c[31543]], oc04y[c[4875]], oc04y[c[31299]]);
        },
        'fail': function (cmylb$) {
            console[c[453]](c[31544], cmylb$[c[26992]]);
            var sfx12 = window[c[31541]];
            r58qt && r58qt(sfx12[c[31543]], sfx12[c[4875]], sfx12[c[31299]]);
        }
    });
}, window[c[12362]] = function (fvsnj) {
    wx[c[12362]]({
        'success': function (hkzjn) {
            fvsnj && fvsnj(!![], hkzjn);
        },
        'fail': function (vn6h) {
            fvsnj && fvsnj(![], vn6h);
        }
    });
}, window[c[12364]] = function (gw4_ue) {
    if (gw4_ue) wx[c[12364]](gw4_ue);
}, window[c[26477]] = function (tr85d) {
    wx[c[26477]](tr85d);
}, window[c[558]] = function (ktdq86, _yeo04, xjshvn, drt68, vnsx, w0_4, y$cbml, yo40e) {
    if (drt68 == undefined) drt68 = 0x1;
    wx[c[1000]]({
        'url': ktdq86,
        'method': y$cbml || c[26678],
        'responseType': c[4682],
        'data': _yeo04,
        'header': { 'content-type': yo40e || c[31390] },
        'success': function (nk6vhz) {
            DEBUG && console[c[453]](c[31545], ktdq86, info, nk6vhz);
            if (nk6vhz && nk6vhz[c[27061]] == 0xc8) {
                var jfn1 = nk6vhz[c[498]];
                !w0_4 || w0_4(jfn1) ? xjshvn && xjshvn(jfn1) : window[c[31546]](ktdq86, _yeo04, xjshvn, drt68, vnsx, w0_4, nk6vhz);
            } else window[c[31546]](ktdq86, _yeo04, xjshvn, drt68, vnsx, w0_4, nk6vhz);
        },
        'fail': function (cboy4) {
            DEBUG && console[c[453]](c[31547], ktdq86, info, cboy4), window[c[31546]](ktdq86, _yeo04, xjshvn, drt68, vnsx, w0_4, cboy4);
        },
        'complete': function () {}
    });
}, window[c[31546]] = function (bc0$, wuge, _4eowu, _wueo4, y0co, $mabcl, d86z) {
    _wueo4 - 0x1 > 0x0 ? setTimeout(function () {
        window[c[558]](bc0$, wuge, _4eowu, _wueo4 - 0x1, y0co, $mabcl);
    }, 0x3e8) : y0co && y0co(JSON[c[4764]]({
        'url': bc0$,
        'response': d86z
    }));
}, window[c[31548]] = function (woue4, uw_e4g, x2uf1g, kd6t8q, nxjs1f, $0ycl, dhv6z) {
    !x2uf1g && (x2uf1g = {});
    var kdz86 = Math[c[346]](Date[c[613]]() / 0x3e8);
    x2uf1g[c[1403]] = kdz86, x2uf1g[c[31549]] = uw_e4g;
    var ylbc$m = Object[c[318]](x2uf1g)[c[509]](),
        uf1wg = '',
        n6kvz = '';
    for (var u2fgx1 = 0x0; u2fgx1 < ylbc$m[c[319]]; u2fgx1++) {
        uf1wg = uf1wg + (u2fgx1 == 0x0 ? '' : '&') + ylbc$m[u2fgx1] + x2uf1g[ylbc$m[u2fgx1]], n6kvz = n6kvz + (u2fgx1 == 0x0 ? '' : '&') + ylbc$m[u2fgx1] + '=' + encodeURIComponent(x2uf1g[ylbc$m[u2fgx1]]);
    }
    uf1wg = uf1wg + j1E[c[31334]];
    var kq68 = c[31550] + md5(uf1wg);
    send(woue4 + '?' + n6kvz + (n6kvz == '' ? '' : '&') + kq68, null, kd6t8q, nxjs1f, $0ycl, dhv6z || function (zvnkhj) {
        return zvnkhj[c[1815]] == c[10296];
    }, null, c[31132]);
}, window[c[31551]] = function (rt7385, njhz) {
    var sxvnjh = 0x0;
    j1E[c[26793]] && (sxvnjh = j1E[c[26793]][c[11981]]), sendApi(j1E[c[31330]], c[31552], {
        'partnerId': j1E[c[24878]],
        'gamePkg': j1E[c[26799]],
        'logTime': Math[c[346]](Date[c[613]]() / 0x3e8),
        'platformUid': j1E[c[26800]],
        'type': rt7385,
        'serverId': sxvnjh
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[c[31553]] = function (mb9l$a) {
    sendApi(j1E[c[31328]], c[31554], {
        'partner_id': j1E[c[24878]],
        'uid': j1E[c[26798]],
        'version': j1E[c[4968]],
        'game_pkg': j1E[c[26799]],
        'device': j1E[c[26801]]
    }, j1EBM, jBE1, jEM);
}, window[c[31555]] = function (njfs) {
    if (njfs && njfs[c[1815]] === c[10296] && njfs[c[498]]) {
        njfs[c[498]][c[424]]({
            'id': -0x2,
            'name': c[31556]
        }), njfs[c[498]][c[424]]({
            'id': -0x1,
            'name': c[31557]
        }), j1E[c[31558]] = njfs[c[498]];
        if (window[c[12953]]) window[c[12953]][c[31559]]();
    } else {
        j1E[c[31560]] = ![];
        var k6nz = njfs ? njfs[c[1815]] : '';
        window[c[31377]](0x7, c[31561] + k6nz), window[c[31356]](c[31562] + k6nz);
    }
}, window[c[31563]] = function (vsxnh) {
    sendApi(j1E[c[31328]], c[31564], {
        'partner_id': j1E[c[24878]],
        'uid': j1E[c[26798]],
        'version': j1E[c[4968]],
        'game_pkg': j1E[c[26799]],
        'device': j1E[c[26801]]
    }, jM1B, jBE1, jEM);
}, window[c[31565]] = function (jvhknz) {
    j1E[c[31566]] = ![];
    if (jvhknz && jvhknz[c[1815]] === c[10296] && jvhknz[c[498]]) {
        for (var p7i3r = 0x0; p7i3r < jvhknz[c[498]][c[319]]; p7i3r++) {
            jvhknz[c[498]][p7i3r][c[635]] = j1BM(jvhknz[c[498]][p7i3r]);
        }
        j1E[c[31337]][-0x1] = window[c[31567]](jvhknz[c[498]]), window[c[12953]][c[31568]](-0x1);
    } else {
        var bcl = jvhknz ? jvhknz[c[1815]] : '';
        window[c[31377]](0x8, c[31569] + bcl), window[c[31356]](c[31570] + bcl);
    }
}, window[c[31571]] = function (p7ri3) {
    sendApi(j1E[c[31328]], c[31564], {
        'partner_id': j1E[c[24878]],
        'uid': j1E[c[26798]],
        'version': j1E[c[4968]],
        'game_pkg': j1E[c[26799]],
        'device': j1E[c[26801]]
    }, p7ri3, jBE1, jEM);
}, window[c[31572]] = function (r5q8t, rq8td6) {
    sendApi(j1E[c[31328]], c[31573], {
        'partner_id': j1E[c[24878]],
        'uid': j1E[c[26798]],
        'version': j1E[c[4968]],
        'game_pkg': j1E[c[26799]],
        'device': j1E[c[26801]],
        'server_group_id': rq8td6
    }, jB1M, jBE1, jEM);
}, window[c[31574]] = function (_o40ye) {
    j1E[c[31566]] = ![];
    if (_o40ye && _o40ye[c[1815]] === c[10296] && _o40ye[c[498]] && _o40ye[c[498]][c[498]]) {
        var q58tdr = _o40ye[c[498]][c[31575]],
            jsxnfv = [];
        for (var g2fwu1 = 0x0; g2fwu1 < _o40ye[c[498]][c[498]][c[319]]; g2fwu1++) {
            _o40ye[c[498]][c[498]][g2fwu1][c[635]] = j1BM(_o40ye[c[498]][c[498]][g2fwu1]), (jsxnfv[c[319]] == 0x0 || _o40ye[c[498]][c[498]][g2fwu1][c[635]] != 0x0) && (jsxnfv[jsxnfv[c[319]]] = _o40ye[c[498]][c[498]][g2fwu1]);
        }
        j1E[c[31337]][q58tdr] = window[c[31567]](jsxnfv), window[c[12953]][c[31568]](q58tdr);
    } else {
        var zvjknh = _o40ye ? _o40ye[c[1815]] : '';
        window[c[31377]](0x9, c[31576] + zvjknh), window[c[31356]](c[31577] + zvjknh);
    }
}, window[c[31578]] = function (kzhvd6) {
    sendApi(j1E[c[31328]], c[31579], {
        'partner_id': j1E[c[24878]],
        'uid': j1E[c[26798]],
        'version': j1E[c[4968]],
        'game_pkg': j1E[c[26799]],
        'device': j1E[c[26801]]
    }, reqServerRecommendCallBack, jBE1, jEM);
}, window[c[31580]] = function (nhvkzj) {
    j1E[c[31566]] = ![];
    if (nhvkzj && nhvkzj[c[1815]] === c[10296] && nhvkzj[c[498]]) {
        for (var vnhjzs = 0x0; vnhjzs < nhvkzj[c[498]][c[319]]; vnhjzs++) {
            nhvkzj[c[498]][vnhjzs][c[635]] = j1BM(nhvkzj[c[498]][vnhjzs]);
        }
        j1E[c[31337]][-0x2] = window[c[31567]](nhvkzj[c[498]]), window[c[12953]][c[31568]](-0x2);
    } else {
        var _g2ue = nhvkzj ? nhvkzj[c[1815]] : '';
        window[c[31377]](0xa, c[31581] + _g2ue), alert(c[31582] + _g2ue);
    }
}, window[c[31567]] = function (o_u4e) {
    return o_u4e;
}, window[c[31583]] = function (f2wgu1, ir7p53) {
    f2wgu1 = f2wgu1 || j1E[c[26793]][c[11981]], sendApi(j1E[c[31328]], c[31584], {
        'type': '4',
        'game_pkg': j1E[c[26799]],
        'server_id': f2wgu1
    }, ir7p53);
}, window[c[31585]] = function (bly, vxjnhs, eu2w_, qk68dz) {
    eu2w_ = eu2w_ || j1E[c[26793]][c[11981]], sendApi(j1E[c[31328]], c[31586], {
        'type': bly,
        'game_pkg': vxjnhs,
        'server_id': eu2w_
    }, qk68dz);
}, window[c[31587]] = function (m9$al, zvhnk) {
    sendApi(j1E[c[31328]], c[31588], { 'game_pkg': m9$al }, zvhnk);
}, window[c[31589]] = function (_woe40) {
    if (_woe40) {
        if (_woe40[c[635]] == 0x1) {
            if (_woe40[c[31590]] == 0x1) return 0x2;else return 0x1;
        } else return _woe40[c[635]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[c[31591]] = function (g1ufw, njszh) {
    j1E[c[31592]] = {
        'step': g1ufw,
        'server_id': njszh
    };
    var nhjx = this;
    jM1BE({ 'title': c[31593] }), sendApi(j1E[c[31328]], c[31594], {
        'partner_id': j1E[c[24878]],
        'uid': j1E[c[26798]],
        'game_pkg': j1E[c[26799]],
        'server_id': njszh,
        'platform': j1E[c[26761]],
        'platform_uid': j1E[c[26800]],
        'check_login_time': j1E[c[31446]],
        'check_login_sign': j1E[c[31445]],
        'version_name': j1E[c[31411]]
    }, jEM1B, jBE1, jEM, function (oyc0b) {
        return oyc0b[c[1815]] == c[10296] || oyc0b[c[608]] == c[31595] || oyc0b[c[608]] == c[31596];
    });
}, window[c[31597]] = function (gfu21x) {
    var j2fxs = this;
    if (gfu21x && gfu21x[c[1815]] === c[10296] && gfu21x[c[498]]) {
        var n6vhzk = j1E[c[26793]];
        n6vhzk[c[31598]] = j1E[c[31338]], n6vhzk[c[11964]] = String(gfu21x[c[498]][c[31599]]), n6vhzk[c[26763]] = parseInt(gfu21x[c[498]][c[1403]]);
        if (gfu21x[c[498]][c[26762]]) n6vhzk[c[26762]] = parseInt(gfu21x[c[498]][c[26762]]);else n6vhzk[c[26762]] = parseInt(gfu21x[c[498]][c[11981]]);
        n6vhzk[c[31600]] = 0x0, n6vhzk[c[4778]] = j1E[c[31486]], n6vhzk[c[31601]] = gfu21x[c[498]][c[31602]], n6vhzk[c[31603]] = gfu21x[c[498]][c[31603]];
        if (gfu21x[c[498]][c[26766]]) n6vhzk[c[26766]] = parseInt(gfu21x[c[498]][c[26766]]);
        console[c[453]](c[31604] + JSON[c[4764]](n6vhzk[c[31603]])), j1E[c[1177]] == 0x1 && n6vhzk[c[31603]] && n6vhzk[c[31603]][c[31605]] == 0x1 && (j1E[c[31606]] = 0x1, window[c[31216]][c[676]][c[31607]]()), jEBM1();
    } else {
        if (j1E[c[31592]][c[7440]] >= 0x3) {
            var u_ge4w = gfu21x ? gfu21x[c[1815]] : '';
            window[c[31377]](0xc, c[31608] + u_ge4w), jEM(JSON[c[4764]](gfu21x)), window[c[31356]](c[31609] + u_ge4w);
        } else sendApi(j1E[c[31328]], c[31424], {
            'platform': j1E[c[31326]],
            'partner_id': j1E[c[24878]],
            'token': j1E[c[31422]],
            'game_pkg': j1E[c[26799]],
            'deviceId': j1E[c[26801]],
            'scene': c[31425] + j1E[c[31336]]
        }, function (al$mb9) {
            if (!al$mb9 || al$mb9[c[1815]] != c[10296]) {
                window[c[31356]](c[31442] + al$mb9 && al$mb9[c[1815]]);
                return;
            }
            j1E[c[31445]] = String(al$mb9[c[11964]]), j1E[c[31446]] = String(al$mb9[c[1403]]), setTimeout(function () {
                jEMB1(j1E[c[31592]][c[7440]] + 0x1, j1E[c[31592]][c[11981]]);
            }, 0x5dc);
        }, jBE1, jEM, function (u4o) {
            return u4o[c[1815]] == c[10296] || u4o[c[1815]] == c[27138];
        });
    }
}, window[c[31610]] = function () {
    ServerLoading[c[676]][c[31478]](j1E[c[1177]]), window[c[31345]] = !![], window[c[31242]]();
}, window[c[31241]] = function () {
    if (window[c[31240]] && window[c[31248]] && window[c[31346]] && window[c[31347]] && window[c[31348]] && window[c[31350]]) {
        if (!window[c[31113]][c[676]]) {
            console[c[453]](c[31611] + window[c[31113]][c[676]]);
            var _04co = wx[c[26463]](),
                _0e4w = _04co[c[1329]] ? _04co[c[1329]] : 0x0,
                p35r7t = {
                'cdn': window[c[31204]][c[4778]],
                'spareCdn': window[c[31204]][c[26482]],
                'newRegister': window[c[31204]][c[1177]],
                'wxPC': window[c[31204]][c[26484]],
                'wxIOS': window[c[31204]][c[1626]],
                'wxAndroid': window[c[31204]][c[11805]],
                'wxParam': {
                    'limitLoad': window[c[31204]][c[31287]],
                    'benchmarkLevel': window[c[31204]][c[31288]],
                    'wxFrom': window[c[1076]][c[333]] == c[31612] ? 0x1 : 0x0,
                    'wxSDKVersion': window[c[31220]]
                },
                'configType': window[c[31204]][c[12500]],
                'exposeType': window[c[31204]][c[1267]],
                'scene': _0e4w
            };
            new window[c[31113]](p35r7t, window[c[31204]][c[630]], window[c[31321]]);
        }
    }
}, window[c[31242]] = function () {
    if (window[c[31240]] && window[c[31248]] && window[c[31346]] && window[c[31347]] && window[c[31348]] && window[c[31350]] && window[c[31345]] && window[c[31349]]) {
        jM1EB();
        if (!jEB1) {
            jEB1 = !![];
            if (!window[c[31113]][c[676]]) window[c[31241]]();
            var b0c4 = 0x0,
                tp5r73 = wx[c[31613]]();
            tp5r73 && (window[c[31204]][c[31283]] && (b0c4 = tp5r73[c[840]]), console[c[608]](c[31614] + tp5r73[c[840]] + c[31615] + tp5r73[c[1842]] + c[31616] + tp5r73[c[1844]] + c[31617] + tp5r73[c[1843]] + c[31618] + tp5r73[c[705]] + c[31619] + tp5r73[c[706]]));
            var nsjvhx = {};
            for (const nkzvh6 in j1E[c[26793]]) {
                nsjvhx[nkzvh6] = j1E[c[26793]][nkzvh6];
            }
            var u4ewg = {
                'channel': window[c[31204]][c[26797]],
                'account': window[c[31204]][c[26798]],
                'userId': window[c[31204]][c[19891]],
                'cdn': window[c[31204]][c[4778]],
                'data': window[c[31204]][c[498]],
                'package': window[c[31204]][c[489]],
                'newRegister': window[c[31204]][c[1177]],
                'pkgName': window[c[31204]][c[26799]],
                'partnerId': window[c[31204]][c[24878]],
                'platform_uid': window[c[31204]][c[26800]],
                'deviceId': window[c[31204]][c[26801]],
                'selectedServer': nsjvhx,
                'configType': window[c[31204]][c[12500]],
                'exposeType': window[c[31204]][c[1267]],
                'debugUsers': window[c[31204]][c[12906]],
                'wxMenuTop': b0c4,
                'wxShield': window[c[31204]][c[1291]],
                'wx_channel': window[c[31204]][c[26938]]
            };
            if (window[c[31488]]) for (var fnxvsj in window[c[31488]]) {
                u4ewg[fnxvsj] = window[c[31488]][fnxvsj];
            }
            window[c[31113]][c[676]][c[26815]](u4ewg);
            if (j1E[c[26793]] && j1E[c[26793]][c[11981]]) localStorage[c[1007]](c[31448] + j1E[c[26799]] + j1E[c[26798]], j1E[c[26793]][c[11981]]);
        }
    } else console[c[608]](c[31620] + window[c[31240]] + c[31621] + window[c[31248]] + c[31622] + window[c[31346]] + c[31623] + window[c[31347]] + c[31624] + window[c[31348]] + c[31625] + window[c[31350]] + c[31626] + window[c[31345]] + c[31627] + window[c[31349]]);
};