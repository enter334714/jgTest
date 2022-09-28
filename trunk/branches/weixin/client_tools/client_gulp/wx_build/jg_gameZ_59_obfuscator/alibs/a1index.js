var c = wx.$a;
import gymlc$b from '../a3a4/eeesdk.js';
window[c[31315]] = { 'wxVersion': window[c[590]][c[31199]] }, window[c[31316]] = ![], window[c[31317]] = 0x1, window[c[31318]] = 0x1, window[c[31319]] = !![], window[c[31320]] = !![], window[c[31321]] = '', window[c[31322]] = ![], window[c[31204]] = {
    'base_cdn': c[31323],
    'cdn': c[31323]
}, j1E[c[31324]] = {}, j1E[c[26033]] = '0', j1E[c[4496]] = window[c[31315]][c[31325]], j1E[c[31285]] = '', j1E['os'] = '1', j1E[c[31326]] = c[31327], j1E[c[31328]] = c[31329], j1E[c[31330]] = c[31331], j1E[c[31332]] = c[31333], j1E[c[31334]] = c[31335], j1E[c[24428]] = '1', j1E[c[26351]] = '', j1E[c[26353]] = '', j1E[c[31336]] = 0x0, j1E[c[31337]] = {}, j1E[c[31338]] = parseInt(j1E[c[24428]]), j1E[c[26349]] = j1E[c[24428]], j1E[c[26345]] = {}, j1E[c[31210]] = c[31339], j1E[c[31340]] = ![], j1E[c[12449]] = c[31341], j1E[c[26315]] = Date[c[85]](), j1E[c[12040]] = c[31342], j1E[c[784]] = '_a', j1E[c[31343]] = 0x2, j1E[c[107]] = 0x7c1, j1E[c[31325]] = window[c[31315]][c[31325]], j1E[c[808]] = ![], j1E[c[1148]] = ![], j1E[c[11345]] = ![], j1E[c[26035]] = ![], window[c[31344]] = 0x5, window[c[31345]] = ![], window[c[31240]] = ![], window[c[31248]] = ![], window[c[31346]] = ![], window[c[31347]] = ![], window[c[31348]] = ![], window[c[31349]] = ![], window[c[31350]] = ![], window[c[31351]] = ![], window[c[31352]] = null, window[c[684]] = function (vjhsz) {
    console[c[514]](c[684], vjhsz), wx[c[4777]]({}), wx[c[31228]]({
        'title': c[5900],
        'content': vjhsz,
        'success'(oe) {
            if (oe[c[31353]]) console[c[514]](c[31354]);else oe[c[586]] && console[c[514]](c[31355]);
        }
    });
}, window[c[31356]] = function (xnjfsv) {
    console[c[514]](c[31357], xnjfsv), jM1EB(), wx[c[31228]]({
        'title': c[5900],
        'content': xnjfsv,
        'confirmText': c[31358],
        'cancelText': c[19059],
        'success'(o4ye_0) {
            if (o4ye_0[c[31353]]) window[c[31254]]();else o4ye_0[c[586]] && (console[c[514]](c[31359]), wx[c[26031]]({}));
        }
    });
}, window[c[31360]] = function (k8dtq) {
    console[c[514]](c[31360], k8dtq), wx[c[31228]]({
        'title': c[5900],
        'content': k8dtq,
        'confirmText': c[26482],
        'showCancel': ![],
        'complete'(gu2fx) {
            console[c[514]](c[31359]), wx[c[26031]]({});
        }
    });
}, window[c[31361]] = ![], window[c[31362]] = function (kdt68q) {
    window[c[31361]] = !![], wx[c[4776]](kdt68q);
}, window[c[31363]] = function () {
    window[c[31361]] && (window[c[31361]] = ![], wx[c[4777]]({}));
}, window[c[31364]] = function (oe0y4) {
    window[c[31216]][c[164]][c[31364]](oe0y4);
}, window[c[12319]] = function (khjz, qt6r8) {
    gymlc$b[c[12319]](khjz, function (qz6k8d) {
        qz6k8d && qz6k8d[c[12]] ? qz6k8d[c[12]][c[1339]] == 0x1 ? qt6r8(!![]) : (qt6r8(![]), console[c[80]](c[31365] + qz6k8d[c[12]][c[31366]])) : console[c[514]](c[12319], qz6k8d);
    });
}, window[c[31367]] = function (dzq8k6) {
    console[c[514]](c[31368], dzq8k6);
}, window[c[31369]] = function (gf21ux) {}, window[c[31370]] = function (byc$ml, yo_e04, zjvnhs) {}, window[c[31371]] = function (zkhd6v) {
    console[c[514]](c[31372], zkhd6v), window[c[31216]][c[164]][c[31373]](), window[c[31216]][c[164]][c[31374]](), window[c[31216]][c[164]][c[31375]]();
}, window[c[31376]] = function (xjs1fn) {
    window[c[31377]](0xe, c[31378] + xjs1fn), window[c[31356]](c[31379]);
    var yc0$lb = {
        'id': window[c[31204]][c[31205]],
        'role': window[c[31204]][c[4425]],
        'level': window[c[31204]][c[31206]],
        'account': window[c[31204]][c[26350]],
        'version': window[c[31204]][c[107]],
        'cdn': window[c[31204]][c[4302]],
        'pkgName': window[c[31204]][c[26351]],
        'gamever': window[c[590]][c[31199]],
        'serverid': window[c[31204]][c[26345]] ? window[c[31204]][c[26345]][c[11521]] : 0x0,
        'systemInfo': window[c[31207]],
        'error': c[31380],
        'stack': xjs1fn ? xjs1fn : c[31379]
    },
        eu1gw2 = JSON[c[4288]](yc0$lb);
    console[c[141]](c[31381] + eu1gw2), window[c[31210]](eu1gw2);
}, window[c[31377]] = function (gfwu21, trd68q) {
    sendApi(j1E[c[31330]], c[31382], {
        'game_pkg': j1E[c[26351]],
        'partner_id': j1E[c[24428]],
        'server_id': j1E[c[26345]] && j1E[c[26345]][c[11521]] > 0x0 ? j1E[c[26345]][c[11521]] : 0x0,
        'uid': j1E[c[26350]] > 0x0 ? j1E[c[26350]] : 0x0,
        'type': gfwu21,
        'info': trd68q
    });
}, window[c[31383]] = function (uwg12e) {
    var jxnsv = JSON[c[558]](uwg12e);
    jxnsv[c[31384]] = window[c[590]][c[31199]], jxnsv[c[31385]] = window[c[31204]][c[26345]] ? window[c[31204]][c[26345]][c[11521]] : 0x0, jxnsv[c[31207]] = window[c[31207]];
    var qdr6t8 = JSON[c[4288]](jxnsv);
    console[c[141]](c[31386] + qdr6t8), window[c[31210]](qdr6t8);
}, window[c[31255]] = function (ugw1, xvnsj) {
    var labc$ = {
        'id': window[c[31204]][c[31205]],
        'role': window[c[31204]][c[4425]],
        'level': window[c[31204]][c[31206]],
        'account': window[c[31204]][c[26350]],
        'version': window[c[31204]][c[107]],
        'cdn': window[c[31204]][c[4302]],
        'pkgName': window[c[31204]][c[26351]],
        'gamever': window[c[590]][c[31199]],
        'serverid': window[c[31204]][c[26345]] ? window[c[31204]][c[26345]][c[11521]] : 0x0,
        'systemInfo': window[c[31207]],
        'error': ugw1,
        'stack': xvnsj
    },
        clb$ym = JSON[c[4288]](labc$);
    console[c[100]](c[31387] + clb$ym), window[c[31210]](clb$ym);
}, window[c[31210]] = function (weou4) {
    if (window[c[31204]][c[31286]] == c[31388]) return;
    var hjvxsn = j1E[c[31210]] + c[31389] + j1E[c[26350]];
    wx[c[509]]({
        'url': hjvxsn,
        'method': c[31131],
        'data': weou4,
        'header': {
            'content-type': c[31390],
            'cache-control': c[31391]
        },
        'success': function (y0bc$) {
            DEBUG && console[c[514]](c[31392], hjvxsn, weou4, y0bc$);
        },
        'fail': function (xvnfs) {
            DEBUG && console[c[514]](c[31392], hjvxsn, weou4, xvnfs);
        },
        'complete': function () {}
    });
}, window[c[31393]] = function () {
    function bc0l() {
        return ((0x1 + Math[c[128]]()) * 0x10000 | 0x0)[c[287]](0x10)[c[529]](0x1);
    }
    return bc0l() + bc0l() + '-' + bc0l() + '-' + bc0l() + '-' + bc0l() + '+' + bc0l() + bc0l() + bc0l();
}, window[c[31254]] = function () {
    console[c[514]](c[31394]);
    var cbl$ym = gymlc$b[c[31395]]();
    j1E[c[26349]] = cbl$ym[c[31396]], j1E[c[31338]] = cbl$ym[c[31396]], j1E[c[24428]] = cbl$ym[c[31396]], j1E[c[26351]] = cbl$ym[c[31397]];
    var c4_oy = { 'game_ver': j1E[c[4496]] };
    j1E[c[26353]] = this[c[31393]](), jM1BE({ 'title': c[31398] }), gymlc$b[c[394]](c4_oy, this[c[31399]][c[76]](this));
}, window[c[31399]] = function (tr8q7) {
    var kvjzh = tr8q7[c[31400]];
    sdkInitRes = tr8q7, console[c[514]](c[31401] + kvjzh + c[31402] + (kvjzh == 0x1) + c[31403] + tr8q7[c[31199]] + c[31404] + window[c[31315]][c[31325]] + c[31405] + tr8q7[c[31406]]);
    if (!tr8q7[c[31199]] || window[c[31219]](window[c[31315]][c[31325]], tr8q7[c[31199]]) < 0x0) console[c[514]](c[31407]), j1E[c[31328]] = c[31408], j1E[c[31330]] = c[31409], j1E[c[31332]] = c[31410], j1E[c[4302]] = c[31411], j1E[c[26032]] = c[31412], j1E[c[31406]] = tr8q7[c[31406]], j1E[c[808]] = ![];else window[c[31219]](window[c[31315]][c[31325]], tr8q7[c[31199]]) == 0x0 ? (console[c[514]](c[31413]), j1E[c[31328]] = c[31329], j1E[c[31330]] = c[31331], j1E[c[31332]] = c[31333], j1E[c[4302]] = c[31414], j1E[c[26032]] = c[31412], j1E[c[31406]] = c[31415], j1E[c[808]] = !![]) : (console[c[514]](c[31416]), j1E[c[31328]] = c[31329], j1E[c[31330]] = c[31331], j1E[c[31332]] = c[31333], j1E[c[4302]] = c[31414], j1E[c[26032]] = c[31412], j1E[c[31406]] = c[31415], j1E[c[808]] = ![]);
    j1E[c[31336]] = config[c[30995]] ? config[c[30995]] : 0x0, this[c[31417]](), this[c[31418]](), window[c[31419]] = 0x5, jM1BE({ 'title': c[31420] }), gymlc$b[c[31126]](this[c[31421]][c[76]](this));
}, window[c[31419]] = 0x5, window[c[31421]] = function (g2u1fw, trq578) {
    if (g2u1fw == 0x0 && trq578 && trq578[c[31087]]) {
        j1E[c[31422]] = trq578[c[31087]], j1E[c[26492]] = trq578[c[26492]];
        var sxjnfv = this;
        jM1BE({ 'title': c[31423] }), sendApi(j1E[c[31328]], c[31424], {
            'platform': j1E[c[31326]],
            'partner_id': j1E[c[24428]],
            'token': trq578[c[31087]],
            'game_pkg': j1E[c[26351]],
            'deviceId': j1E[c[26353]],
            'scene': c[31425] + j1E[c[31336]]
        }, this[c[31426]][c[76]](this), jBE1, jEM);
    } else trq578 && trq578[c[26548]] && window[c[31419]] > 0x0 && (trq578[c[26548]][c[122]](c[31427]) != -0x1 || trq578[c[26548]][c[122]](c[31428]) != -0x1 || trq578[c[26548]][c[122]](c[31429]) != -0x1 || trq578[c[26548]][c[122]](c[31430]) != -0x1 || trq578[c[26548]][c[122]](c[31431]) != -0x1 || trq578[c[26548]][c[122]](c[31432]) != -0x1) ? (window[c[31419]]--, gymlc$b[c[31126]](this[c[31421]][c[76]](this))) : (window[c[31377]](0x1, c[31433] + g2u1fw + c[31434] + (trq578 ? trq578[c[26548]] : '')), window[c[31255]](c[31435], JSON[c[4288]]({
        'status': g2u1fw,
        'data': trq578
    })), window[c[31356]](c[31436] + (trq578 && trq578[c[26548]] ? '，' + trq578[c[26548]] : '')));
}, window[c[31426]] = function (f2jxs1) {
    if (!f2jxs1) {
        window[c[31377]](0x2, c[31437]), window[c[31255]](c[31438], c[31439]), window[c[31356]](c[31440]);
        return;
    }
    if (f2jxs1[c[1339]] != c[9836]) {
        window[c[31377]](0x2, c[31441] + f2jxs1[c[1339]]), window[c[31255]](c[31438], JSON[c[4288]](f2jxs1)), window[c[31356]](c[31442] + f2jxs1[c[1339]]);
        return;
    }
    if (f2jxs1[c[31443]] == 0x1) {
        window[c[31356]](c[31444]);
        return;
    }
    j1E[c[19440]] = String(f2jxs1[c[26350]]), j1E[c[26350]] = String(f2jxs1[c[26350]]), j1E[c[26313]] = String(f2jxs1[c[26313]]), j1E[c[26349]] = String(f2jxs1[c[26313]]), j1E[c[26352]] = String(f2jxs1[c[26352]]), j1E[c[31445]] = String(f2jxs1[c[11504]]), j1E[c[31446]] = String(f2jxs1[c[921]]), j1E[c[11504]] = '';
    var dtk6q8 = this;
    jM1BE({ 'title': c[31447] });
    var e12g = localStorage[c[512]](c[31448] + j1E[c[26351]] + j1E[c[26350]]);
    if (e12g && e12g != '') {
        var gwu12 = Number(e12g);
        dtk6q8[c[31449]](gwu12);
    } else dtk6q8[c[31450]]();
}, window[c[31450]] = function () {
    var _ugew = this;
    sendApi(j1E[c[31328]], c[31451], {
        'partner_id': j1E[c[24428]],
        'uid': j1E[c[26350]],
        'version': j1E[c[4496]],
        'game_pkg': j1E[c[26351]],
        'device': j1E[c[26353]]
    }, _ugew[c[31452]][c[76]](_ugew), jBE1, jEM);
}, window[c[31452]] = function (dqtr85) {
    if (!dqtr85) {
        window[c[31377]](0x3, c[31453]), window[c[31356]](c[31453]);
        return;
    }
    if (dqtr85[c[1339]] != c[9836]) {
        window[c[31377]](0x3, c[31454] + dqtr85[c[1339]]), window[c[31356]](c[31454] + dqtr85[c[1339]]);
        return;
    }
    if (!dqtr85[c[12]] || dqtr85[c[12]][c[14]] == 0x0) {
        window[c[31377]](0x3, c[31455]), window[c[31356]](c[31456]);
        return;
    }
    this[c[31457]](dqtr85);
}, window[c[31449]] = function (y04eo) {
    var ir35 = this;
    sendApi(j1E[c[31328]], c[31458], {
        'server_id': y04eo,
        'time': Date[c[85]]() / 0x3e8
    }, ir35[c[31459]][c[76]](ir35), jBE1, jEM);
}, window[c[31459]] = function (snx) {
    if (!snx) {
        window[c[31377]](0x4, c[31460]), this[c[31450]]();
        return;
    }
    if (snx[c[1339]] != c[9836]) {
        window[c[31377]](0x4, c[31461] + snx[c[1339]]), this[c[31450]]();
        return;
    }
    if (!snx[c[12]] || snx[c[12]][c[14]] == 0x0) {
        window[c[31377]](0x4, c[31462]), this[c[31450]]();
        return;
    }
    this[c[31457]](snx), window[c[31216]] && window[c[31216]][c[164]][c[31463]] && window[c[31216]][c[164]][c[31463]](sdkInitRes[c[31464]], sdkInitRes[c[31465]], sdkInitRes[c[31466]], sdkInitRes[c[31467]], sdkInitRes[c[31468]]);
}, window[c[31457]] = function (hkznj) {
    j1E[c[694]] = hkznj[c[31469]] != undefined ? hkznj[c[31469]] : 0x0, j1E[c[26345]] = {
        'server_id': String(hkznj[c[12]][0x0][c[11521]]),
        'server_name': String(hkznj[c[12]][0x0][c[31470]]),
        'entry_ip': hkznj[c[12]][0x0][c[26375]],
        'entry_port': parseInt(hkznj[c[12]][0x0][c[26376]]),
        'status': j1BM(hkznj[c[12]][0x0]),
        'start_time': hkznj[c[12]][0x0][c[31471]],
        'maintain_time': hkznj[c[12]][0x0][c[31472]] ? hkznj[c[12]][0x0][c[31472]] : '',
        'cdn': j1E[c[4302]]
    }, this[c[31473]]();
}, window[c[31473]] = function () {
    var zk6vn = this;
    if (j1E[c[694]] == 0x1) {
        var f12g = j1E[c[26345]][c[113]];
        if (f12g === -0x1 || f12g === 0x0) {
            window[c[31377]](0xf, c[31474] + j1E[c[26345]]['id'] + c[31475] + j1E[c[26345]][c[113]]), window[c[31356]](f12g === -0x1 ? c[31476] : c[31477]);
            return;
        }
        jEMB1(0x0, j1E[c[26345]][c[11521]]), window[c[31216]][c[164]][c[31478]](j1E[c[694]]);
    } else window[c[31216]][c[164]][c[31479]](), jM1EB();
    window[c[31350]] = !![], window[c[31241]](), window[c[31242]]();
}, window[c[31417]] = function () {
    sendApi(j1E[c[31328]], c[31480], {
        'game_pkg': j1E[c[26351]],
        'version_name': j1E[c[31406]]
    }, this[c[31481]][c[76]](this), jBE1, jEM);
}, window[c[31481]] = function (al9$) {
    if (!al9$) {
        window[c[31377]](0x5, c[31482]), window[c[31356]](c[31482]);
        return;
    }
    if (al9$[c[1339]] != c[9836]) {
        window[c[31377]](0x5, c[31483] + al9$[c[1339]]), window[c[31356]](c[31483] + al9$[c[1339]]);
        return;
    }
    if (!al9$[c[12]] || !al9$[c[12]][c[4496]]) {
        window[c[31377]](0x5, c[31484] + (al9$[c[12]] && al9$[c[12]][c[4496]])), window[c[31356]](c[31484] + (al9$[c[12]] && al9$[c[12]][c[4496]]));
        return;
    }
    al9$[c[12]][c[31485]] && al9$[c[12]][c[31485]][c[14]] > 0xa && (j1E[c[31486]] = al9$[c[12]][c[31485]], j1E[c[4302]] = al9$[c[12]][c[31485]]), al9$[c[12]][c[4496]] && (j1E[c[107]] = al9$[c[12]][c[4496]]), console[c[80]](c[26489] + j1E[c[107]] + c[31487] + j1E[c[31406]]), window[c[31348]] = !![], window[c[31241]](), window[c[31242]]();
}, window[c[31488]], window[c[31418]] = function () {
    sendApi(j1E[c[31328]], c[31489], { 'game_pkg': j1E[c[26351]] }, this[c[31490]][c[76]](this), jBE1, jEM);
}, window[c[31490]] = function (coy$0b) {
    if (coy$0b && coy$0b[c[1339]] === c[9836] && coy$0b[c[12]]) {
        window[c[31488]] = coy$0b[c[12]];
        for (var uwg2e1 in coy$0b[c[12]]) {
            j1E[uwg2e1] = coy$0b[c[12]][uwg2e1];
        }
    } else window[c[31377]](0xb, c[31491]), console[c[80]](c[31492] + coy$0b[c[1339]]);
    window[c[31349]] = !![], window[c[31242]]();
}, window[c[31493]] = function (oc$yb0, fg1x2u, nhv6zk, oe40w_, d6q8t, dqt8r, fwgu, eu2_g, o4_0ye, rqd58) {
    d6q8t = String(d6q8t);
    var w12eg = fwgu,
        fj2x1s = eu2_g;
    j1E[c[31324]][d6q8t] = {
        'productid': d6q8t,
        'productname': w12eg,
        'productdesc': fj2x1s,
        'roleid': oc$yb0,
        'rolename': fg1x2u,
        'rolelevel': nhv6zk,
        'price': dqt8r,
        'callback': o4_0ye
    }, sendApi(j1E[c[31332]], c[31494], {
        'game_pkg': j1E[c[26351]],
        'server_id': j1E[c[26345]][c[11521]],
        'server_name': j1E[c[26345]][c[31470]],
        'level': nhv6zk,
        'uid': j1E[c[26350]],
        'role_id': oc$yb0,
        'role_name': fg1x2u,
        'product_id': d6q8t,
        'product_name': w12eg,
        'product_desc': fj2x1s,
        'money': dqt8r,
        'partner_id': j1E[c[24428]]
    }, toPayCallBack, jBE1, jEM);
}, window[c[31495]] = function (vkzn6) {
    if (vkzn6 && (vkzn6[c[31496]] === 0xc8 || vkzn6[c[1339]] == c[9836])) {
        var qkd6h = j1E[c[31324]][String(vkzn6[c[31497]])];
        if (qkd6h[c[360]]) qkd6h[c[360]](vkzn6[c[31497]], vkzn6[c[31498]], -0x1);
        gymlc$b[c[31161]]({
            'cpbill': vkzn6[c[31498]],
            'productid': vkzn6[c[31497]],
            'productname': qkd6h[c[31499]],
            'productdesc': qkd6h[c[31500]],
            'serverid': j1E[c[26345]][c[11521]],
            'servername': j1E[c[26345]][c[31470]],
            'roleid': qkd6h[c[31501]],
            'rolename': qkd6h[c[31502]],
            'rolelevel': qkd6h[c[31503]],
            'price': qkd6h[c[28167]],
            'extension': JSON[c[4288]]({ 'cp_order_id': vkzn6[c[31498]] })
        }, function (geu2, jnxfvs) {
            qkd6h[c[360]] && geu2 == 0x0 && qkd6h[c[360]](vkzn6[c[31497]], vkzn6[c[31498]], geu2);
            console[c[80]](JSON[c[4288]]({
                'type': c[31504],
                'status': geu2,
                'data': vkzn6,
                'role_name': qkd6h[c[31502]]
            }));
            if (geu2 === 0x0) {} else {
                if (geu2 === 0x1) {} else {
                    if (geu2 === 0x2) {}
                }
            }
        });
    } else {
        var qz6khd = vkzn6 ? c[31505] + vkzn6[c[31496]] + c[31506] + vkzn6[c[1339]] + c[31507] + vkzn6[c[80]] : c[31508];
        window[c[31377]](0xd, c[31509] + qz6khd), alert(qz6khd);
    }
}, window[c[31510]] = function () {}, window[c[31511]] = function (o_4ey, vkhn6, dq6kt8, mab$l9, c0$lyb) {
    gymlc$b[c[31187]](j1E[c[26345]][c[11521]], j1E[c[26345]][c[31470]] || j1E[c[26345]][c[11521]], o_4ey, vkhn6, dq6kt8), sendApi(j1E[c[31328]], c[31512], {
        'game_pkg': j1E[c[26351]],
        'server_id': j1E[c[26345]][c[11521]],
        'role_id': o_4ey,
        'uid': j1E[c[26350]],
        'role_name': vkhn6,
        'role_type': mab$l9,
        'level': dq6kt8
    });
}, window[c[31513]] = function (qd68kz, zkh6n, mca$, dr6q8t, hkzjvn, weuo_, p573tr, e_uo, jnsxf, xsfjn) {
    j1E[c[31205]] = qd68kz, j1E[c[4425]] = zkh6n, j1E[c[31206]] = mca$, gymlc$b[c[31188]](j1E[c[26345]][c[11521]], j1E[c[26345]][c[31470]] || j1E[c[26345]][c[11521]], qd68kz, zkh6n, mca$), sendApi(j1E[c[31328]], c[31514], {
        'game_pkg': j1E[c[26351]],
        'server_id': j1E[c[26345]][c[11521]],
        'role_id': qd68kz,
        'uid': j1E[c[26350]],
        'role_name': zkh6n,
        'role_type': dr6q8t,
        'level': mca$,
        'evolution': hkzjvn
    });
}, window[c[31515]] = function (jknvz, oc, _ouew, vfnxjs, zh6kd, khnvzj, k6nvz, gew4u_, kjzhnv, drt8q6) {
    j1E[c[31205]] = jknvz, j1E[c[4425]] = oc, j1E[c[31206]] = _ouew, gymlc$b[c[31189]](j1E[c[26345]][c[11521]], j1E[c[26345]][c[31470]] || j1E[c[26345]][c[11521]], jknvz, oc, _ouew), sendApi(j1E[c[31328]], c[31514], {
        'game_pkg': j1E[c[26351]],
        'server_id': j1E[c[26345]][c[11521]],
        'role_id': jknvz,
        'uid': j1E[c[26350]],
        'role_name': oc,
        'role_type': vfnxjs,
        'level': _ouew,
        'evolution': zh6kd
    });
}, window[c[31516]] = function (tq8kd6) {}, window[c[31517]] = function (o$0ycb) {
    gymlc$b[c[31145]](c[31145], function (vzkhjn) {
        o$0ycb && o$0ycb(vzkhjn);
    });
}, window[c[24426]] = function () {
    gymlc$b[c[24426]]();
}, window[c[31518]] = function () {
    gymlc$b[c[24305]]();
}, window[c[31519]] = function (sf2j, nzjhvk, clm$, cmbl$a, yb$o, shzjvn, ue_4gw, fgwu2) {
    fgwu2 = fgwu2 || j1E[c[26345]][c[11521]], sendApi(j1E[c[31328]], c[31520], {
        'phone': sf2j,
        'role_id': nzjhvk,
        'uid': j1E[c[26350]],
        'game_pkg': j1E[c[26351]],
        'partner_id': j1E[c[24428]],
        'server_id': fgwu2
    }, ue_4gw, 0x2, null, function () {
        return !![];
    });
}, window[c[10836]] = function (wu4oe) {
    window[c[31305]] = wu4oe, window[c[31305]] && window[c[31304]] && (console[c[80]](c[31306] + window[c[31304]][c[846]]), window[c[31305]](window[c[31304]]), window[c[31304]] = null);
}, window[c[31521]] = function (ylbcm, bmlca, o4_we0, q86drt) {
    window[c[24]](c[31522], {
        'game_pkg': window[c[31204]][c[26351]],
        'role_id': bmlca,
        'server_id': o4_we0
    }, q86drt);
}, window[c[31523]] = function (o0by4c, $ylbcm, t853r) {
    function zqk6h(wg2e) {
        var hjvnsx = [],
            yeo4_ = [],
            xg2f1 = t853r || window[c[590]][c[31524]];
        for (var vhjkzn in xg2f1) {
            var b$cyml = Number(vhjkzn);
            (!o0by4c || !o0by4c[c[14]] || o0by4c[c[122]](b$cyml) != -0x1) && (yeo4_[c[31]](xg2f1[vhjkzn]), hjvnsx[c[31]]([b$cyml, 0x3]));
        }
        window[c[31219]](window[c[31220]], c[31525]) >= 0x0 ? (console[c[514]](c[31526]), gymlc$b[c[31184]] && gymlc$b[c[31184]](yeo4_, function (f2wg1u) {
            console[c[514]](c[31527]), console[c[514]](f2wg1u);
            if (f2wg1u && f2wg1u[c[26548]] == c[31528]) for (var bal$c in xg2f1) {
                if (f2wg1u[xg2f1[bal$c]] == c[31529]) {
                    var lmb9a$ = Number(bal$c);
                    for (var ug1wf2 = 0x0; ug1wf2 < hjvnsx[c[14]]; ug1wf2++) {
                        if (hjvnsx[ug1wf2][0x0] == lmb9a$) {
                            hjvnsx[ug1wf2][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[c[31219]](window[c[31220]], c[31530]) >= 0x0 ? wx[c[31531]]({
                'withSubscriptions': !![],
                'success': function (njxvf) {
                    var alm$9b = njxvf[c[31532]][c[31533]];
                    if (alm$9b) {
                        console[c[514]](c[31534]), console[c[514]](alm$9b);
                        for (var geuw_ in xg2f1) {
                            if (alm$9b[xg2f1[geuw_]] == c[31529]) {
                                var $0cby = Number(geuw_);
                                for (var c_y = 0x0; c_y < hjvnsx[c[14]]; c_y++) {
                                    if (hjvnsx[c_y][0x0] == $0cby) {
                                        hjvnsx[c_y][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[c[514]](hjvnsx), $ylbcm && $ylbcm(hjvnsx);
                    } else console[c[514]](c[31535]), console[c[514]](njxvf), console[c[514]](hjvnsx), $ylbcm && $ylbcm(hjvnsx);
                },
                'fail': function () {
                    console[c[514]](c[31536]), console[c[514]](hjvnsx), $ylbcm && $ylbcm(hjvnsx);
                }
            }) : (console[c[514]](c[31537] + window[c[31220]]), console[c[514]](hjvnsx), $ylbcm && $ylbcm(hjvnsx));
        })) : (console[c[514]](c[31538] + window[c[31220]]), console[c[514]](hjvnsx), $ylbcm && $ylbcm(hjvnsx)), wx[c[31539]](zqk6h);
    }
    wx[c[31540]](zqk6h);
}, window[c[31541]] = {
    'isSuccess': ![],
    'level': c[31542],
    'isCharging': ![]
}, window[c[13421]] = function (t358) {
    wx[c[31296]]({
        'success': function (xg1f2s) {
            var hvjzsn = window[c[31541]];
            hvjzsn[c[31543]] = !![], hvjzsn[c[4401]] = Number(xg1f2s[c[4401]])[c[4021]](0x0), hvjzsn[c[31299]] = xg1f2s[c[31299]], t358 && t358(hvjzsn[c[31543]], hvjzsn[c[4401]], hvjzsn[c[31299]]);
        },
        'fail': function (eow40_) {
            console[c[514]](c[31544], eow40_[c[26548]]);
            var cb$0ly = window[c[31541]];
            t358 && t358(cb$0ly[c[31543]], cb$0ly[c[4401]], cb$0ly[c[31299]]);
        }
    });
}, window[c[11902]] = function (zkvh6d) {
    wx[c[11902]]({
        'success': function (nhvjz) {
            zkvh6d && zkvh6d(!![], nhvjz);
        },
        'fail': function (f1s2jx) {
            zkvh6d && zkvh6d(![], f1s2jx);
        }
    });
}, window[c[11904]] = function (nxjvs) {
    if (nxjvs) wx[c[11904]](nxjvs);
}, window[c[26027]] = function (l9ba) {
    wx[c[26027]](l9ba);
}, window[c[24]] = function (y4_eo0, e0o4y, amcb, zvkdh, z6kd, vzjhs, fjxn1s, oy0_e) {
    if (zvkdh == undefined) zvkdh = 0x1;
    wx[c[509]]({
        'url': y4_eo0,
        'method': fjxn1s || c[26229],
        'responseType': c[4206],
        'data': e0o4y,
        'header': { 'content-type': oy0_e || c[31390] },
        'success': function (tqdk) {
            DEBUG && console[c[514]](c[31545], y4_eo0, info, tqdk);
            if (tqdk && tqdk[c[26618]] == 0xc8) {
                var s1f2j = tqdk[c[12]];
                !vzjhs || vzjhs(s1f2j) ? amcb && amcb(s1f2j) : window[c[31546]](y4_eo0, e0o4y, amcb, zvkdh, z6kd, vzjhs, tqdk);
            } else window[c[31546]](y4_eo0, e0o4y, amcb, zvkdh, z6kd, vzjhs, tqdk);
        },
        'fail': function (ab$) {
            DEBUG && console[c[514]](c[31547], y4_eo0, info, ab$), window[c[31546]](y4_eo0, e0o4y, amcb, zvkdh, z6kd, vzjhs, ab$);
        },
        'complete': function () {}
    });
}, window[c[31546]] = function (bl0c$y, b$0yl, $lybmc, snfx1j, l$mba9, eug_w, lcab) {
    snfx1j - 0x1 > 0x0 ? setTimeout(function () {
        window[c[24]](bl0c$y, b$0yl, $lybmc, snfx1j - 0x1, l$mba9, eug_w);
    }, 0x3e8) : l$mba9 && l$mba9(JSON[c[4288]]({
        'url': bl0c$y,
        'response': lcab
    }));
}, window[c[31548]] = function (svnfjx, eou4, sf2jx, _guew2, $cymlb, t87r35, gewu2) {
    !sf2jx && (sf2jx = {});
    var sx2g1 = Math[c[127]](Date[c[85]]() / 0x3e8);
    sf2jx[c[921]] = sx2g1, sf2jx[c[31549]] = eou4;
    var y$ob0c = Object[c[278]](sf2jx)[c[1153]](),
        d6kzv = '',
        x2f1u = '';
    for (var hqzd = 0x0; hqzd < y$ob0c[c[14]]; hqzd++) {
        d6kzv = d6kzv + (hqzd == 0x0 ? '' : '&') + y$ob0c[hqzd] + sf2jx[y$ob0c[hqzd]], x2f1u = x2f1u + (hqzd == 0x0 ? '' : '&') + y$ob0c[hqzd] + '=' + encodeURIComponent(sf2jx[y$ob0c[hqzd]]);
    }
    d6kzv = d6kzv + j1E[c[31334]];
    var t5r7 = c[31550] + md5(d6kzv);
    send(svnfjx + '?' + x2f1u + (x2f1u == '' ? '' : '&') + t5r7, null, _guew2, $cymlb, t87r35, gewu2 || function (_e4oy) {
        return _e4oy[c[1339]] == c[9836];
    }, null, c[31132]);
}, window[c[31551]] = function (snfvxj, nsfxjv) {
    var geu4w = 0x0;
    j1E[c[26345]] && (geu4w = j1E[c[26345]][c[11521]]), sendApi(j1E[c[31330]], c[31552], {
        'partnerId': j1E[c[24428]],
        'gamePkg': j1E[c[26351]],
        'logTime': Math[c[127]](Date[c[85]]() / 0x3e8),
        'platformUid': j1E[c[26352]],
        'type': snfvxj,
        'serverId': geu4w
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[c[31553]] = function (_0coy4) {
    sendApi(j1E[c[31328]], c[31554], {
        'partner_id': j1E[c[24428]],
        'uid': j1E[c[26350]],
        'version': j1E[c[4496]],
        'game_pkg': j1E[c[26351]],
        'device': j1E[c[26353]]
    }, j1EBM, jBE1, jEM);
}, window[c[31555]] = function (lbac) {
    if (lbac && lbac[c[1339]] === c[9836] && lbac[c[12]]) {
        lbac[c[12]][c[5382]]({
            'id': -0x2,
            'name': c[31556]
        }), lbac[c[12]][c[5382]]({
            'id': -0x1,
            'name': c[31557]
        }), j1E[c[31558]] = lbac[c[12]];
        if (window[c[12496]]) window[c[12496]][c[31559]]();
    } else {
        j1E[c[31560]] = ![];
        var zdkv6h = lbac ? lbac[c[1339]] : '';
        window[c[31377]](0x7, c[31561] + zdkv6h), window[c[31356]](c[31562] + zdkv6h);
    }
}, window[c[31563]] = function (z6k8) {
    sendApi(j1E[c[31328]], c[31564], {
        'partner_id': j1E[c[24428]],
        'uid': j1E[c[26350]],
        'version': j1E[c[4496]],
        'game_pkg': j1E[c[26351]],
        'device': j1E[c[26353]]
    }, jM1B, jBE1, jEM);
}, window[c[31565]] = function (a9b$ml) {
    j1E[c[31566]] = ![];
    if (a9b$ml && a9b$ml[c[1339]] === c[9836] && a9b$ml[c[12]]) {
        for (var yc0o = 0x0; yc0o < a9b$ml[c[12]][c[14]]; yc0o++) {
            a9b$ml[c[12]][yc0o][c[113]] = j1BM(a9b$ml[c[12]][yc0o]);
        }
        j1E[c[31337]][-0x1] = window[c[31567]](a9b$ml[c[12]]), window[c[12496]][c[31568]](-0x1);
    } else {
        var a$bm9 = a9b$ml ? a9b$ml[c[1339]] : '';
        window[c[31377]](0x8, c[31569] + a$bm9), window[c[31356]](c[31570] + a$bm9);
    }
}, window[c[31571]] = function (vsjhxn) {
    sendApi(j1E[c[31328]], c[31564], {
        'partner_id': j1E[c[24428]],
        'uid': j1E[c[26350]],
        'version': j1E[c[4496]],
        'game_pkg': j1E[c[26351]],
        'device': j1E[c[26353]]
    }, vsjhxn, jBE1, jEM);
}, window[c[31572]] = function (jhnvs, g2fx1u) {
    sendApi(j1E[c[31328]], c[31573], {
        'partner_id': j1E[c[24428]],
        'uid': j1E[c[26350]],
        'version': j1E[c[4496]],
        'game_pkg': j1E[c[26351]],
        'device': j1E[c[26353]],
        'server_group_id': g2fx1u
    }, jB1M, jBE1, jEM);
}, window[c[31574]] = function (lymbc) {
    j1E[c[31566]] = ![];
    if (lymbc && lymbc[c[1339]] === c[9836] && lymbc[c[12]] && lymbc[c[12]][c[12]]) {
        var j1xsfn = lymbc[c[12]][c[31575]],
            j2xs1f = [];
        for (var trp53 = 0x0; trp53 < lymbc[c[12]][c[12]][c[14]]; trp53++) {
            lymbc[c[12]][c[12]][trp53][c[113]] = j1BM(lymbc[c[12]][c[12]][trp53]), (j2xs1f[c[14]] == 0x0 || lymbc[c[12]][c[12]][trp53][c[113]] != 0x0) && (j2xs1f[j2xs1f[c[14]]] = lymbc[c[12]][c[12]][trp53]);
        }
        j1E[c[31337]][j1xsfn] = window[c[31567]](j2xs1f), window[c[12496]][c[31568]](j1xsfn);
    } else {
        var jfvns = lymbc ? lymbc[c[1339]] : '';
        window[c[31377]](0x9, c[31576] + jfvns), window[c[31356]](c[31577] + jfvns);
    }
}, window[c[31578]] = function (pr7i53) {
    sendApi(j1E[c[31328]], c[31579], {
        'partner_id': j1E[c[24428]],
        'uid': j1E[c[26350]],
        'version': j1E[c[4496]],
        'game_pkg': j1E[c[26351]],
        'device': j1E[c[26353]]
    }, reqServerRecommendCallBack, jBE1, jEM);
}, window[c[31580]] = function (wegu_4) {
    j1E[c[31566]] = ![];
    if (wegu_4 && wegu_4[c[1339]] === c[9836] && wegu_4[c[12]]) {
        for (var o0_ye4 = 0x0; o0_ye4 < wegu_4[c[12]][c[14]]; o0_ye4++) {
            wegu_4[c[12]][o0_ye4][c[113]] = j1BM(wegu_4[c[12]][o0_ye4]);
        }
        j1E[c[31337]][-0x2] = window[c[31567]](wegu_4[c[12]]), window[c[12496]][c[31568]](-0x2);
    } else {
        var cm$al = wegu_4 ? wegu_4[c[1339]] : '';
        window[c[31377]](0xa, c[31581] + cm$al), alert(c[31582] + cm$al);
    }
}, window[c[31567]] = function ($clb0) {
    return $clb0;
}, window[c[31583]] = function (e4gw_, kzd6q8) {
    e4gw_ = e4gw_ || j1E[c[26345]][c[11521]], sendApi(j1E[c[31328]], c[31584], {
        'type': '4',
        'game_pkg': j1E[c[26351]],
        'server_id': e4gw_
    }, kzd6q8);
}, window[c[31585]] = function ($b0lc, m9ba, y04, d5qr8) {
    y04 = y04 || j1E[c[26345]][c[11521]], sendApi(j1E[c[31328]], c[31586], {
        'type': $b0lc,
        'game_pkg': m9ba,
        'server_id': y04
    }, d5qr8);
}, window[c[31587]] = function (yo$0bc, ge_w2) {
    sendApi(j1E[c[31328]], c[31588], { 'game_pkg': yo$0bc }, ge_w2);
}, window[c[31589]] = function (r785t) {
    if (r785t) {
        if (r785t[c[113]] == 0x1) {
            if (r785t[c[31590]] == 0x1) return 0x2;else return 0x1;
        } else return r785t[c[113]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[c[31591]] = function (ip57r3, kdq68z) {
    j1E[c[31592]] = {
        'step': ip57r3,
        'server_id': kdq68z
    };
    var wo_e40 = this;
    jM1BE({ 'title': c[31593] }), sendApi(j1E[c[31328]], c[31594], {
        'partner_id': j1E[c[24428]],
        'uid': j1E[c[26350]],
        'game_pkg': j1E[c[26351]],
        'server_id': kdq68z,
        'platform': j1E[c[26313]],
        'platform_uid': j1E[c[26352]],
        'check_login_time': j1E[c[31446]],
        'check_login_sign': j1E[c[31445]],
        'version_name': j1E[c[31406]]
    }, jEM1B, jBE1, jEM, function (xfu21g) {
        return xfu21g[c[1339]] == c[9836] || xfu21g[c[80]] == c[31595] || xfu21g[c[80]] == c[31596];
    });
}, window[c[31597]] = function (e4) {
    var z6kn = this;
    if (e4 && e4[c[1339]] === c[9836] && e4[c[12]]) {
        var lc$ = j1E[c[26345]];
        lc$[c[31598]] = j1E[c[31338]], lc$[c[11504]] = String(e4[c[12]][c[31599]]), lc$[c[26315]] = parseInt(e4[c[12]][c[921]]);
        if (e4[c[12]][c[26314]]) lc$[c[26314]] = parseInt(e4[c[12]][c[26314]]);else lc$[c[26314]] = parseInt(e4[c[12]][c[11521]]);
        lc$[c[31600]] = 0x0, lc$[c[4302]] = j1E[c[31486]], lc$[c[31601]] = e4[c[12]][c[31602]], lc$[c[31603]] = e4[c[12]][c[31603]];
        if (e4[c[12]][c[26318]]) lc$[c[26318]] = parseInt(e4[c[12]][c[26318]]);
        console[c[514]](c[31604] + JSON[c[4288]](lc$[c[31603]])), j1E[c[694]] == 0x1 && lc$[c[31603]] && lc$[c[31603]][c[31605]] == 0x1 && (j1E[c[31606]] = 0x1, window[c[31216]][c[164]][c[31607]]()), jEBM1();
    } else {
        if (j1E[c[31592]][c[6978]] >= 0x3) {
            var $b0yc = e4 ? e4[c[1339]] : '';
            window[c[31377]](0xc, c[31608] + $b0yc), jEM(JSON[c[4288]](e4)), window[c[31356]](c[31609] + $b0yc);
        } else sendApi(j1E[c[31328]], c[31424], {
            'platform': j1E[c[31326]],
            'partner_id': j1E[c[24428]],
            'token': j1E[c[31422]],
            'game_pkg': j1E[c[26351]],
            'deviceId': j1E[c[26353]],
            'scene': c[31425] + j1E[c[31336]]
        }, function (mblyc$) {
            if (!mblyc$ || mblyc$[c[1339]] != c[9836]) {
                window[c[31356]](c[31442] + mblyc$ && mblyc$[c[1339]]);
                return;
            }
            j1E[c[31445]] = String(mblyc$[c[11504]]), j1E[c[31446]] = String(mblyc$[c[921]]), setTimeout(function () {
                jEMB1(j1E[c[31592]][c[6978]] + 0x1, j1E[c[31592]][c[11521]]);
            }, 0x5dc);
        }, jBE1, jEM, function (ma9lb$) {
            return ma9lb$[c[1339]] == c[9836] || ma9lb$[c[1339]] == c[26696];
        });
    }
}, window[c[31610]] = function () {
    ServerLoading[c[164]][c[31478]](j1E[c[694]]), window[c[31345]] = !![], window[c[31242]]();
}, window[c[31241]] = function () {
    if (window[c[31240]] && window[c[31248]] && window[c[31346]] && window[c[31347]] && window[c[31348]] && window[c[31350]]) {
        if (!window[c[30681]][c[164]]) {
            console[c[514]](c[31611] + window[c[30681]][c[164]]);
            var ue_w4 = wx[c[26013]](),
                qrd6t8 = ue_w4[c[846]] ? ue_w4[c[846]] : 0x0,
                uw_2eg = {
                'cdn': window[c[31204]][c[4302]],
                'spareCdn': window[c[31204]][c[26032]],
                'newRegister': window[c[31204]][c[694]],
                'wxPC': window[c[31204]][c[26035]],
                'wxIOS': window[c[31204]][c[1148]],
                'wxAndroid': window[c[31204]][c[11345]],
                'wxParam': {
                    'limitLoad': window[c[31204]][c[31287]],
                    'benchmarkLevel': window[c[31204]][c[31288]],
                    'wxFrom': window[c[590]][c[30995]] == c[31612] ? 0x1 : 0x0,
                    'wxSDKVersion': window[c[31220]]
                },
                'configType': window[c[31204]][c[12040]],
                'exposeType': window[c[31204]][c[784]],
                'scene': qrd6t8
            };
            new window[c[30681]](uw_2eg, window[c[31204]][c[107]], window[c[31321]]);
        }
    }
}, window[c[31242]] = function () {
    if (window[c[31240]] && window[c[31248]] && window[c[31346]] && window[c[31347]] && window[c[31348]] && window[c[31350]] && window[c[31345]] && window[c[31349]]) {
        jM1EB();
        if (!jEB1) {
            jEB1 = !![];
            if (!window[c[30681]][c[164]]) window[c[31241]]();
            var kdh6vz = 0x0,
                uw4e_ = wx[c[31613]]();
            uw4e_ && (window[c[31204]][c[31283]] && (kdh6vz = uw4e_[c[344]]), console[c[80]](c[31614] + uw4e_[c[344]] + c[31615] + uw4e_[c[1366]] + c[31616] + uw4e_[c[1368]] + c[31617] + uw4e_[c[1367]] + c[31618] + uw4e_[c[194]] + c[31619] + uw4e_[c[195]]));
            var ptr573 = {};
            for (const j1xns in j1E[c[26345]]) {
                ptr573[j1xns] = j1E[c[26345]][j1xns];
            }
            var jznvhk = {
                'channel': window[c[31204]][c[26349]],
                'account': window[c[31204]][c[26350]],
                'userId': window[c[31204]][c[19440]],
                'cdn': window[c[31204]][c[4302]],
                'data': window[c[31204]][c[12]],
                'package': window[c[31204]][c[26033]],
                'newRegister': window[c[31204]][c[694]],
                'pkgName': window[c[31204]][c[26351]],
                'partnerId': window[c[31204]][c[24428]],
                'platform_uid': window[c[31204]][c[26352]],
                'deviceId': window[c[31204]][c[26353]],
                'selectedServer': ptr573,
                'configType': window[c[31204]][c[12040]],
                'exposeType': window[c[31204]][c[784]],
                'debugUsers': window[c[31204]][c[12449]],
                'wxMenuTop': kdh6vz,
                'wxShield': window[c[31204]][c[808]],
                'wx_channel': window[c[31204]][c[26492]]
            };
            if (window[c[31488]]) for (var bm in window[c[31488]]) {
                jznvhk[bm] = window[c[31488]][bm];
            }
            window[c[30681]][c[164]][c[26367]](jznvhk);
            if (j1E[c[26345]] && j1E[c[26345]][c[11521]]) localStorage[c[517]](c[31448] + j1E[c[26351]] + j1E[c[26350]], j1E[c[26345]][c[11521]]);
        }
    } else console[c[80]](c[31620] + window[c[31240]] + c[31621] + window[c[31248]] + c[31622] + window[c[31346]] + c[31623] + window[c[31347]] + c[31624] + window[c[31348]] + c[31625] + window[c[31350]] + c[31626] + window[c[31345]] + c[31627] + window[c[31349]]);
};