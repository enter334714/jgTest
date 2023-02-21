var W = wx.$l;
import L9po0h4q from '../llllSDK/llllSDDK.js';
window[W[693]] = { 'wxVersion': window[W[436]][W[573]] }, window[W[694]] = ![], window['$LXU'] = 0x1, window[W[695]] = 0x1, window['$L7UX'] = !![], window[W[696]] = !![], window['$LMR7UX'] = '', window[W[697]] = ![], window['$LUX'] = {
    'base_cdn': W[698],
    'cdn': W[698]
}, $LUX[W[699]] = {}, $LUX[W[700]] = '0', $LUX[W[631]] = window[W[693]][W[231]], $LUX[W[661]] = '', $LUX['os'] = '1', $LUX[W[701]] = W[702], $LUX[W[703]] = W[704], $LUX[W[705]] = W[706], $LUX[W[707]] = W[708], $LUX[W[709]] = W[710], $LUX[W[711]] = '1', $LUX[W[311]] = '', $LUX[W[712]] = '', $LUX[W[713]] = 0x0, $LUX[W[358]] = {}, $LUX[W[714]] = parseInt($LUX[W[711]]), $LUX[W[715]] = $LUX[W[711]], $LUX[W[170]] = {}, $LUX['$LRU'] = W[716], $LUX[W[717]] = ![], $LUX[W[718]] = W[719], $LUX[W[720]] = Date[W[165]](), $LUX[W[721]] = W[722], $LUX[W[723]] = '_a', $LUX[W[724]] = '', $LUX[W[216]] = 0x2, $LUX[W[229]] = 0x7c1, $LUX[W[231]] = window[W[693]][W[231]], $LUX[W[318]] = ![], $LUX[W[654]] = ![], $LUX[W[656]] = ![], $LUX[W[659]] = ![], window['$L7XU'] = 0x5, window['$L7X'] = ![], window['$LX7'] = ![], window['$LU7X'] = ![], window[W[474]] = ![], window[W[485]] = ![], window['$LUX7'] = ![], window['$L7U'] = ![], window['$LU7'] = ![], window['$LX7U'] = ![], window[W[478]] = null, window[W[725]] = function (erjc7) {
    console[W[320]](W[725], erjc7), wx[W[726]]({}), wx[W[600]]({
        'title': W[623],
        'content': erjc7,
        'success'(bf8) {
            if (bf8[W[727]]) console[W[320]](W[728]);else bf8[W[729]] && console[W[320]](W[730]);
        }
    });
}, window['$LR7UX'] = function (pasx) {
    console[W[320]](W[731], pasx), $LRUX7(), wx[W[600]]({
        'title': W[623],
        'content': pasx,
        'confirmText': W[732],
        'cancelText': W[733],
        'success'(yvz3wk) {
            if (yvz3wk[W[727]]) window['$LUR']();else yvz3wk[W[729]] && (console[W[320]](W[734]), wx[W[322]]({}));
        }
    });
}, window[W[735]] = function (s4px5a) {
    console[W[320]](W[735], s4px5a), wx[W[600]]({
        'title': W[623],
        'content': s4px5a,
        'confirmText': W[736],
        'showCancel': ![],
        'complete'(a4x) {
            console[W[320]](W[734]), wx[W[322]]({});
        }
    });
}, window['$LR7XU'] = ![], window['$LRU7X'] = function (ykwzc3) {
    window['$LR7XU'] = !![], wx[W[737]](ykwzc3);
}, window['$LRUX7'] = function () {
    window['$LR7XU'] && (window['$LR7XU'] = ![], wx[W[726]]({}));
}, window['$LRX7U'] = function (a9xd5) {
    window[W[567]][W[166]]['$LRX7U'](a9xd5);
}, window[W[738]] = function (kyw37, qom$0) {
    L9po0h4q[W[738]](kyw37, function (cnerj) {
        cnerj && cnerj[W[364]] ? cnerj[W[364]][W[363]] == 0x1 ? qom$0(!![]) : (qom$0(![]), console[W[568]](W[739] + cnerj[W[364]][W[740]])) : console[W[320]](W[738], cnerj);
    });
}, window['$LRXU7'] = function (dubl9) {
    console[W[320]](W[741], dubl9);
}, window['$LRUX'] = function (d9xu5a) {}, window['$LRXU'] = function (j7nerc, m0hqo4, b8_1i6) {}, window['$LRX'] = function (wycn7e) {
    console[W[320]](W[742], wycn7e), window[W[567]][W[166]][W[220]](), window[W[567]][W[166]][W[221]](), window[W[567]][W[166]][W[235]](), window[W[743]]();
}, window['$LXR'] = function (s59adx) {
    window[W[744]](0xe, W[745] + s59adx), window['$LR7UX'](W[746]);
    var sa59xp = {
        'id': window['$LUX'][W[579]],
        'role': window['$LUX'][W[580]],
        'level': window['$LUX'][W[581]],
        'account': window['$LUX'][W[582]],
        'version': window['$LUX'][W[229]],
        'cdn': window['$LUX'][W[351]],
        'pkgName': window['$LUX'][W[311]],
        'gamever': window[W[436]][W[573]],
        'serverid': window['$LUX'][W[170]] ? window['$LUX'][W[170]][W[171]] : 0x0,
        'systemInfo': window[W[583]],
        'error': W[747],
        'stack': s59adx ? s59adx : W[746]
    },
        dux9l = JSON[W[502]](sa59xp);
    console[W[439]](W[748] + dux9l), window['$LRU'](dux9l);
}, window[W[744]] = function (renwc7, hpo04) {
    sendApi($LUX[W[705]], W[749], {
        'game_pkg': $LUX[W[311]],
        'partner_id': $LUX[W[711]],
        'server_id': $LUX[W[170]] && $LUX[W[170]][W[171]] > 0x0 ? $LUX[W[170]][W[171]] : 0x0,
        'uid': $LUX[W[582]] > 0x0 ? $LUX[W[582]] : 0x0,
        'type': renwc7,
        'info': hpo04
    });
}, window['$LURX'] = function (dsa95x) {
    var otm$h0 = JSON[W[750]](dsa95x);
    otm$h0[W[751]] = window[W[436]][W[573]], otm$h0[W[752]] = window['$LUX'][W[170]] ? window['$LUX'][W[170]][W[171]] : 0x0, otm$h0[W[583]] = window[W[583]];
    var u9xdlf = JSON[W[502]](otm$h0);
    console[W[439]](W[753] + u9xdlf), window['$LRU'](u9xdlf);
}, window['$LUXR'] = function (dlfux9, vw3zk) {
    var zk_3 = {
        'id': window['$LUX'][W[579]],
        'role': window['$LUX'][W[580]],
        'level': window['$LUX'][W[581]],
        'account': window['$LUX'][W[582]],
        'version': window['$LUX'][W[229]],
        'cdn': window['$LUX'][W[351]],
        'pkgName': window['$LUX'][W[311]],
        'gamever': window[W[436]][W[573]],
        'serverid': window['$LUX'][W[170]] ? window['$LUX'][W[170]][W[171]] : 0x0,
        'systemInfo': window[W[583]],
        'error': dlfux9,
        'stack': vw3zk
    },
        ohm0q4 = JSON[W[502]](zk_3);
    console[W[520]](W[754] + ohm0q4), window['$LRU'](ohm0q4);
}, window['$LRU'] = function (zwkyv3) {
    if (window['$LUX'][W[662]] == W[755]) return;
    var xud9af = $LUX['$LRU'] + W[756] + $LUX[W[582]];
    wx[W[757]]({
        'url': xud9af,
        'method': W[758],
        'data': zwkyv3,
        'header': {
            'content-type': W[759],
            'cache-control': W[760]
        },
        'success': function (qsho4) {
            DEBUG && console[W[320]](W[761], xud9af, zwkyv3, qsho4);
        },
        'fail': function (n7ecr) {
            DEBUG && console[W[320]](W[761], xud9af, zwkyv3, n7ecr);
        },
        'complete': function () {}
    });
}, window[W[762]] = function () {
    function wky7() {
        return ((0x1 + Math[W[223]]()) * 0x10000 | 0x0)[W[763]](0x10)[W[482]](0x1);
    }
    return wky7() + wky7() + '-' + wky7() + '-' + wky7() + '-' + wky7() + '+' + wky7() + wky7() + wky7();
}, window['$LUR'] = function () {
    console[W[320]](W[764]);
    var cynkw = L9po0h4q[W[765]]();
    $LUX[W[715]] = cynkw[W[766]], $LUX[W[714]] = cynkw[W[766]], $LUX[W[711]] = cynkw[W[766]], $LUX[W[311]] = cynkw[W[437]];
    var u9fax = { 'game_ver': $LUX[W[631]] };
    $LUX[W[712]] = this[W[762]](), $LRU7X({ 'title': W[767] }), L9po0h4q[W[406]](u9fax, this['$LXRU'][W[227]](this));
}, window['$LXRU'] = function (o0thm$) {
    var v632z = o0thm$[W[479]];
    sdkInitRes = o0thm$, console[W[320]](W[768] + v632z + W[769] + (v632z == 0x1) + W[770] + o0thm$[W[573]] + W[771] + window[W[693]][W[231]]);
    if (!o0thm$[W[573]] || window['$LM7XRU'](window[W[693]][W[231]], o0thm$[W[573]]) < 0x0) console[W[320]](W[772]), $LUX[W[703]] = W[773], $LUX[W[705]] = W[774], $LUX[W[707]] = W[775], $LUX[W[351]] = W[776], $LUX[W[777]] = W[778], $LUX[W[779]] = W[780], $LUX[W[318]] = ![];else window['$LM7XRU'](window[W[693]][W[231]], o0thm$[W[573]]) == 0x0 ? (console[W[320]](W[781]), $LUX[W[703]] = W[704], $LUX[W[705]] = W[706], $LUX[W[707]] = W[708], $LUX[W[351]] = W[782], $LUX[W[777]] = W[778], $LUX[W[779]] = W[783], $LUX[W[318]] = !![]) : (console[W[320]](W[784]), $LUX[W[703]] = W[704], $LUX[W[705]] = W[706], $LUX[W[707]] = W[708], $LUX[W[351]] = W[785], $LUX[W[777]] = W[778], $LUX[W[779]] = W[783], $LUX[W[318]] = ![]);
    $LUX[W[713]] = config[W[786]] ? config[W[786]] : 0x0, this['$L7URX'](), this['$L7UXR'](), window[W[787]] = 0x5, $LRU7X({ 'title': W[788] }), L9po0h4q[W[789]](this['$LXUR'][W[227]](this));
}, window[W[787]] = 0x5, window['$LXUR'] = function (v2y3z, v_162) {
    if (v2y3z == 0x0 && v_162 && v_162[W[790]]) {
        $LUX[W[791]] = v_162[W[790]], $LUX[W[792]] = v_162[W[792]], $LUX[W[793]] = v_162[W[793]], $LUX[W[794]] = v_162[W[794]], $LUX[W[795]] = v_162[W[795]];
        var otmg0 = this;
        $LRU7X({ 'title': W[796] }), sendApi($LUX[W[703]], W[797], {
            'platform': $LUX[W[701]],
            'partner_id': $LUX[W[711]],
            'token': v_162[W[790]],
            'game_pkg': $LUX[W[311]],
            'deviceId': $LUX[W[712]],
            'scene': W[798] + $LUX[W[713]]
        }, this['$L7RUX'][W[227]](this), $L7XU, $LXR);
    } else v_162 && v_162[W[610]] && window[W[787]] > 0x0 && (v_162[W[610]][W[522]](W[799]) != -0x1 || v_162[W[610]][W[522]](W[800]) != -0x1 || v_162[W[610]][W[522]](W[801]) != -0x1 || v_162[W[610]][W[522]](W[802]) != -0x1 || v_162[W[610]][W[522]](W[803]) != -0x1 || v_162[W[610]][W[522]](W[804]) != -0x1) ? (window[W[787]]--, L9po0h4q[W[789]](this['$LXUR'][W[227]](this))) : (window[W[744]](0x1, W[805] + v2y3z + W[806] + (v_162 ? v_162[W[610]] : '')), window['$LUXR'](W[807], JSON[W[502]]({
        'status': v2y3z,
        'data': v_162
    })), window['$LR7UX'](W[808] + (v_162 && v_162[W[610]] ? '，' + v_162[W[610]] : '')));
}, window['$L7RUX'] = function (ap4x5) {
    if (!ap4x5) {
        window[W[744]](0x2, W[809]), window['$LUXR'](W[810], W[811]), window['$LR7UX'](W[812]);
        return;
    }
    if (ap4x5[W[363]] != W[362]) {
        window[W[744]](0x2, W[813] + ap4x5[W[363]]), window['$LUXR'](W[810], JSON[W[502]](ap4x5)), window['$LR7UX'](W[814] + ap4x5[W[363]]);
        return;
    }
    if (ap4x5[W[815]] == 0x1) {
        window['$LR7UX'](W[816]);
        return;
    }
    $LUX[W[817]] = String(ap4x5[W[582]]), $LUX[W[582]] = String(ap4x5[W[582]]), $LUX[W[635]] = String(ap4x5[W[635]]), $LUX[W[715]] = String(ap4x5[W[635]]), $LUX[W[818]] = String(ap4x5[W[818]]), $LUX[W[819]] = String(ap4x5[W[820]]), $LUX[W[821]] = String(ap4x5[W[822]]), $LUX[W[820]] = '';
    var zv2 = this;
    $LRU7X({ 'title': W[823] });
    var pa54x = localStorage[W[316]](W[824] + $LUX[W[311]] + $LUX[W[582]]);
    if (pa54x && pa54x != '') {
        var wzv3yk = Number(pa54x);
        zv2[W[825]](wzv3yk);
    } else zv2[W[826]]();
}, window[W[826]] = function () {
    var $ho = this;
    sendApi($LUX[W[703]], W[827], {
        'partner_id': $LUX[W[711]],
        'uid': $LUX[W[582]],
        'version': $LUX[W[631]],
        'game_pkg': $LUX[W[311]],
        'device': $LUX[W[712]]
    }, $ho['$L7RXU'][W[227]]($ho), $L7XU, $LXR);
}, window['$L7RXU'] = function (k3_2z) {
    if (!k3_2z) {
        window[W[744]](0x3, W[828]), window['$LR7UX'](W[828]);
        return;
    }
    if (k3_2z[W[363]] != W[362]) {
        window[W[744]](0x3, W[829] + k3_2z[W[363]]), window['$LR7UX'](W[829] + k3_2z[W[363]]);
        return;
    }
    if (!k3_2z[W[364]] || k3_2z[W[364]][W[201]] == 0x0) {
        window[W[744]](0x3, W[830]), window['$LR7UX'](W[831]);
        return;
    }
    this[W[832]](k3_2z);
}, window[W[825]] = function (u8ld) {
    var a4s5q = this;
    sendApi($LUX[W[703]], W[833], {
        'server_id': u8ld,
        'time': Date[W[165]]() / 0x3e8
    }, a4s5q[W[834]][W[227]](a4s5q), $L7XU, $LXR);
}, window[W[834]] = function (xua) {
    if (!xua) {
        window[W[744]](0x4, W[835]), this[W[826]]();
        return;
    }
    if (xua[W[363]] != W[362]) {
        window[W[744]](0x4, W[836] + xua[W[363]]), this[W[826]]();
        return;
    }
    if (!xua[W[364]] || xua[W[364]][W[201]] == 0x0) {
        window[W[744]](0x4, W[837]), this[W[826]]();
        return;
    }
    this[W[832]](xua);
}, window[W[832]] = function (m0g$o) {
    $LUX[W[491]] = m0g$o[W[838]] != undefined ? m0g$o[W[838]] : 0x0, $LUX[W[170]] = {
        'server_id': String(m0g$o[W[364]][0x0][W[171]]),
        'server_name': String(m0g$o[W[364]][0x0][W[350]]),
        'entry_ip': m0g$o[W[364]][0x0][W[839]],
        'entry_port': parseInt(m0g$o[W[364]][0x0][W[840]]),
        'status': $LU7R(m0g$o[W[364]][0x0]),
        'start_time': m0g$o[W[364]][0x0][W[841]],
        'maintain_time': m0g$o[W[364]][0x0][W[258]] ? m0g$o[W[364]][0x0][W[258]] : '',
        'is_recommend': m0g$o[W[364]][0x0][W[253]],
        'cdn': $LUX[W[351]]
    }, this['$LXU7R'](), window[W[567]] && window[W[567]][W[166]][W[476]] && window[W[567]][W[166]][W[476]](sdkInitRes[W[842]], sdkInitRes[W[843]], sdkInitRes[W[844]], sdkInitRes[W[845]], sdkInitRes[W[846]]);
}, window['$LXU7R'] = function () {
    var a9xdfu = this;
    if ($LUX[W[491]] == 0x1) {
        var to0h$m = $LUX[W[170]][W[254]];
        if (to0h$m === -0x1 || to0h$m === 0x0) {
            window[W[744]](0xf, W[847] + $LUX[W[170]]['id'] + W[848] + $LUX[W[170]][W[254]]), window['$LR7UX'](to0h$m === -0x1 ? W[849] : W[850]);
            return;
        }
        $LXR7U(0x0, $LUX[W[170]][W[171]]), window[W[567]][W[166]][W[486]]($LUX[W[491]]);
    } else window[W[567]][W[166]][W[484]](), $LRUX7();
    window['$LU7'] = !![], window[W[851]](), window['$LX7UR'](), window['$LXUR7']();
}, window['$L7URX'] = function () {
    sendApi($LUX[W[703]], W[852], {
        'game_pkg': $LUX[W[311]],
        'version_name': $LUX[W[779]]
    }, this[W[853]][W[227]](this), $L7XU, $LXR);
}, window[W[853]] = function (v_6i1) {
    if (!v_6i1) {
        window[W[744]](0x5, W[854]), window['$LR7UX'](W[854]);
        return;
    }
    if (v_6i1[W[363]] != W[362]) {
        window[W[744]](0x5, W[855] + v_6i1[W[363]]), window['$LR7UX'](W[855] + v_6i1[W[363]]);
        return;
    }
    if (!v_6i1[W[364]] || !v_6i1[W[364]][W[631]]) {
        window[W[744]](0x5, W[856] + (v_6i1[W[364]] && v_6i1[W[364]][W[631]])), window['$LR7UX'](W[856] + (v_6i1[W[364]] && v_6i1[W[364]][W[631]]));
        return;
    }
    v_6i1[W[364]][W[857]] && v_6i1[W[364]][W[857]][W[201]] > 0xa && ($LUX[W[858]] = v_6i1[W[364]][W[857]], $LUX[W[351]] = v_6i1[W[364]][W[857]]), v_6i1[W[364]][W[631]] && ($LUX[W[229]] = v_6i1[W[364]][W[631]]), console[W[568]](W[859] + $LUX[W[229]] + W[860] + $LUX[W[779]]), window['$LUX7'] = !![], window['$LX7UR'](), window['$LXUR7']();
}, window[W[861]], window['$L7UXR'] = function () {
    sendApi($LUX[W[703]], W[862], { 'game_pkg': $LUX[W[311]] }, this['$L7XRU'][W[227]](this), $L7XU, $LXR);
}, window['$L7XRU'] = function (hq0mo4) {
    if (hq0mo4 && hq0mo4[W[363]] === W[362] && hq0mo4[W[364]]) {
        window[W[861]] = hq0mo4[W[364]];
        for (var kywv3 in hq0mo4[W[364]]) {
            $LUX[kywv3] = hq0mo4[W[364]][kywv3];
        }
    } else window[W[744]](0xb, W[863]), console[W[568]](W[864] + hq0mo4[W[363]]);
    window['$L7U'] = !![], window[W[851]](), window['$LXUR7']();
}, window[W[851]] = function () {
    if (!window['$LU7'] || !window['$L7U']) return;
    var dl9x = $LUX[W[491]] == 0x1,
        kw3yv = $LUX[W[318]],
        i1bl68 = $LUX[W[865]] && $LUX[W[865]] > 0x0;
    if (kw3yv || dl9x && i1bl68) {
        var dufxa9 = $LUX[W[866]],
            wvky = dufxa9 && dufxa9[W[201]] == 0x9;
        wvky && (window[W[867]] = dufxa9);
        var y23vz = $LUX[W[868]],
            vky2z3 = y23vz && y23vz[W[447]]('#')[W[201]] == 0x4;
        vky2z3 && (window[W[444]] = y23vz);
    }
}, window[W[743]] = function () {
    window[W[867]] = null, window[W[444]] = null;
}, window[W[869]] = function ($mo0th, vy2zk, s5a9d, b_861, _kzv2, i21v6, l6ib, lbdf8u, ps95x, nkc7yw) {
    _kzv2 = String(_kzv2);
    var v2i_61 = l6ib,
        zv632 = lbdf8u;
    $LUX[W[699]][_kzv2] = {
        'productid': _kzv2,
        'productname': v2i_61,
        'productdesc': zv632,
        'roleid': $mo0th,
        'rolename': vy2zk,
        'rolelevel': s5a9d,
        'price': i21v6,
        'callback': ps95x
    }, sendApi($LUX[W[707]], W[870], {
        'game_pkg': $LUX[W[311]],
        'server_id': $LUX[W[170]][W[171]],
        'server_name': $LUX[W[170]][W[350]],
        'level': s5a9d,
        'uid': $LUX[W[582]],
        'role_id': $mo0th,
        'role_name': vy2zk,
        'product_id': _kzv2,
        'product_name': v2i_61,
        'product_desc': zv632,
        'money': i21v6,
        'partner_id': $LUX[W[711]]
    }, toPayCallBack, $L7XU, $LXR);
}, window[W[871]] = function (f8u) {
    if (f8u && (f8u[W[872]] === 0xc8 || f8u[W[363]] == W[362])) {
        var fi8l1 = $LUX[W[699]][String(f8u[W[873]])];
        if (fi8l1[W[874]]) fi8l1[W[874]](f8u[W[873]], f8u[W[875]], -0x1);
        L9po0h4q[W[876]]({
            'cpbill': f8u[W[875]],
            'productid': f8u[W[873]],
            'productname': fi8l1[W[877]],
            'productdesc': fi8l1[W[878]],
            'serverid': $LUX[W[170]][W[171]],
            'servername': $LUX[W[170]][W[350]],
            'roleid': fi8l1[W[879]],
            'rolename': fi8l1[W[880]],
            'rolelevel': fi8l1[W[881]],
            'price': fi8l1[W[882]],
            'extension': JSON[W[502]]({ 'cp_order_id': f8u[W[875]] })
        }, function (_21vz6, w7yc3k) {
            fi8l1[W[874]] && _21vz6 == 0x0 && fi8l1[W[874]](f8u[W[873]], f8u[W[875]], _21vz6);
            console[W[568]](JSON[W[502]]({
                'type': W[883],
                'status': _21vz6,
                'data': f8u,
                'role_name': fi8l1[W[880]]
            }));
            if (_21vz6 === 0x0) {} else {
                if (_21vz6 === 0x1) {} else {
                    if (_21vz6 === 0x2) {}
                }
            }
        });
    } else {
        var ync7w = f8u ? W[884] + f8u[W[872]] + W[885] + f8u[W[363]] + W[886] + f8u[W[568]] : W[887];
        window[W[744]](0xd, W[888] + ync7w), alert(ync7w);
    }
}, window['$L7XUR'] = function () {}, window['$LR7X'] = function (f9lxdu, oh4q0, d9fxl, czw3, _6bi8) {
    L9po0h4q[W[889]]($LUX[W[170]][W[171]], $LUX[W[170]][W[350]] || $LUX[W[170]][W[171]], f9lxdu, oh4q0, d9fxl), sendApi($LUX[W[703]], W[890], {
        'game_pkg': $LUX[W[311]],
        'server_id': $LUX[W[170]][W[171]],
        'role_id': f9lxdu,
        'uid': $LUX[W[582]],
        'role_name': oh4q0,
        'role_type': czw3,
        'level': d9fxl
    });
}, window['$LRX7'] = function (c3wzy, v21z_, wne, $ohq, x9d, c7knw, v3zykw, mt$og, o4hq0m, wzyv) {
    $LUX[W[579]] = c3wzy, $LUX[W[580]] = v21z_, $LUX[W[581]] = wne, L9po0h4q[W[891]]($LUX[W[170]][W[171]], $LUX[W[170]][W[350]] || $LUX[W[170]][W[171]], c3wzy, v21z_, wne), sendApi($LUX[W[703]], W[892], {
        'game_pkg': $LUX[W[311]],
        'server_id': $LUX[W[170]][W[171]],
        'role_id': c3wzy,
        'uid': $LUX[W[582]],
        'role_name': v21z_,
        'role_type': $ohq,
        'level': wne,
        'evolution': x9d
    });
}, window['$L7RX'] = function (zkvwy3, a9x5ps, p59x, k37ywc, k_v23z, z1_6v2, ywvz, s5aq4p, i81lf, p4aqs) {
    $LUX[W[579]] = zkvwy3, $LUX[W[580]] = a9x5ps, $LUX[W[581]] = p59x, L9po0h4q[W[893]]($LUX[W[170]][W[171]], $LUX[W[170]][W[350]] || $LUX[W[170]][W[171]], zkvwy3, a9x5ps, p59x), sendApi($LUX[W[703]], W[892], {
        'game_pkg': $LUX[W[311]],
        'server_id': $LUX[W[170]][W[171]],
        'role_id': zkvwy3,
        'uid': $LUX[W[582]],
        'role_name': a9x5ps,
        'role_type': k37ywc,
        'level': p59x,
        'evolution': k_v23z
    });
}, window['$L7XR'] = function (_k23vz) {}, window['$LR7'] = function (crje7n, yec) {
    L9po0h4q[W[894]](W[894], { 'activity_id': yec }, function (kz32v_) {
        crje7n && crje7n(kz32v_);
    });
}, window[W[895]] = function () {
    L9po0h4q[W[895]]();
}, window[W[896]] = function () {
    L9po0h4q[W[897]]();
}, window[W[898]] = function (kn7ycw, _vk, wkcy3z, _v3zk, kz_2, as95d, u8blfi, i6_81b) {
    i6_81b = i6_81b || $LUX[W[170]][W[171]], sendApi($LUX[W[703]], W[899], {
        'phone': kn7ycw,
        'role_id': _vk,
        'uid': $LUX[W[582]],
        'game_pkg': $LUX[W[311]],
        'partner_id': $LUX[W[711]],
        'server_id': i6_81b
    }, u8blfi, 0x2, null, function () {
        return !![];
    });
}, window[W[682]] = function (d9x5ua) {
    window['$LXR7'] = d9x5ua, window['$LXR7'] && window['$L7R'] && (console[W[568]](W[683] + window['$L7R'][W[684]]), window['$LXR7'](window['$L7R']), window['$L7R'] = null);
}, window['$LX7R'] = function (yen7wc, nrcew7, h4qo0m, _1i82) {
    window[W[900]](W[901], {
        'game_pkg': window['$LUX'][W[311]],
        'role_id': nrcew7,
        'server_id': h4qo0m
    }, _1i82);
}, window['$LUR7X'] = function (r7wne, xauf, fud9ax) {
    function ifblu8(y3vk2z) {
        var _1zv2 = [],
            gom$ = [],
            l168ib = fud9ax || window[W[436]][W[902]];
        for (var c7k in l168ib) {
            var _z23 = Number(c7k);
            (!r7wne || !r7wne[W[201]] || r7wne[W[522]](_z23) != -0x1) && (gom$[W[368]](l168ib[c7k]), _1zv2[W[368]]([_z23, 0x3]));
        }
        window['$LM7XRU'](window[W[592]], W[903]) >= 0x0 ? (console[W[320]](W[904]), L9po0h4q[W[905]] && L9po0h4q[W[905]](gom$, function (phs4o) {
            console[W[320]](W[906]), console[W[320]](phs4o);
            if (phs4o && phs4o[W[610]] == W[907]) for (var $0hmo in l168ib) {
                if (phs4o[l168ib[$0hmo]] == W[908]) {
                    var d95u = Number($0hmo);
                    for (var apxs59 = 0x0; apxs59 < _1zv2[W[201]]; apxs59++) {
                        if (_1zv2[apxs59][0x0] == d95u) {
                            _1zv2[apxs59][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['$LM7XRU'](window[W[592]], W[909]) >= 0x0 ? wx[W[910]]({
                'withSubscriptions': !![],
                'success': function (t$omh) {
                    var lf18b = t$omh[W[911]][W[912]];
                    if (lf18b) {
                        console[W[320]](W[913]), console[W[320]](lf18b);
                        for (var y7nck in l168ib) {
                            if (lf18b[l168ib[y7nck]] == W[908]) {
                                var tm0o = Number(y7nck);
                                for (var hspo4q = 0x0; hspo4q < _1zv2[W[201]]; hspo4q++) {
                                    if (_1zv2[hspo4q][0x0] == tm0o) {
                                        _1zv2[hspo4q][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[W[320]](_1zv2), xauf && xauf(_1zv2);
                    } else console[W[320]](W[914]), console[W[320]](t$omh), console[W[320]](_1zv2), xauf && xauf(_1zv2);
                },
                'fail': function () {
                    console[W[320]](W[915]), console[W[320]](_1zv2), xauf && xauf(_1zv2);
                }
            }) : (console[W[320]](W[916] + window[W[592]]), console[W[320]](_1zv2), xauf && xauf(_1zv2));
        })) : (console[W[320]](W[917] + window[W[592]]), console[W[320]](_1zv2), xauf && xauf(_1zv2)), wx[W[918]](ifblu8);
    }
    wx[W[919]](ifblu8);
}, window['$LURX7'] = {
    'isSuccess': ![],
    'level': W[920],
    'isCharging': ![]
}, window['$LU7RX'] = function (newc7y) {
    wx[W[670]]({
        'success': function (uif8l) {
            var mo$t = window['$LURX7'];
            mo$t[W[921]] = !![], mo$t[W[672]] = Number(uif8l[W[672]])[W[922]](0x0), mo$t[W[674]] = uif8l[W[674]], newc7y && newc7y(mo$t[W[921]], mo$t[W[672]], mo$t[W[674]]);
        },
        'fail': function (ercnj7) {
            console[W[320]](W[923], ercnj7[W[610]]);
            var m0oh = window['$LURX7'];
            newc7y && newc7y(m0oh[W[921]], m0oh[W[672]], m0oh[W[674]]);
        }
    });
}, window[W[675]] = function (ne7ywc) {
    wx[W[675]]({
        'success': function (ycwk3) {
            ne7ywc && ne7ywc(!![], ycwk3);
        },
        'fail': function (g0to$) {
            ne7ywc && ne7ywc(![], g0to$);
        }
    });
}, window[W[679]] = function (aqp54s) {
    if (aqp54s) wx[W[679]](aqp54s);
}, window[W[924]] = function (p59as) {
    wx[W[924]](p59as);
}, window[W[900]] = function (i168lb, soqhp4, apx, lxfdu, b9lfd, mg, ky2z, udfx9) {
    if (lxfdu == undefined) lxfdu = 0x1;
    wx[W[757]]({
        'url': i168lb,
        'method': ky2z || W[925],
        'responseType': W[225],
        'data': soqhp4,
        'header': { 'content-type': udfx9 || W[759] },
        'success': function (d9bfu) {
            DEBUG && console[W[320]](W[926], i168lb, info, d9bfu);
            if (d9bfu && d9bfu[W[927]] == 0xc8) {
                var m$ho0 = d9bfu[W[364]];
                !mg || mg(m$ho0) ? apx && apx(m$ho0) : window[W[928]](i168lb, soqhp4, apx, lxfdu, b9lfd, mg, d9bfu);
            } else window[W[928]](i168lb, soqhp4, apx, lxfdu, b9lfd, mg, d9bfu);
        },
        'fail': function (r7jn) {
            DEBUG && console[W[320]](W[929], i168lb, info, r7jn), window[W[928]](i168lb, soqhp4, apx, lxfdu, b9lfd, mg, r7jn);
        },
        'complete': function () {}
    });
}, window[W[928]] = function (_62z3v, _i1862, i6lb1, sp9a, eyw7c, a5x9, b9ufld) {
    sp9a - 0x1 > 0x0 ? setTimeout(function () {
        window[W[900]](_62z3v, _i1862, i6lb1, sp9a - 0x1, eyw7c, a5x9);
    }, 0x3e8) : eyw7c && eyw7c(JSON[W[502]]({
        'url': _62z3v,
        'response': b9ufld
    }));
}, window[W[930]] = function (yk7ncw, fi81bl, xudl9, zyw3kc, y3wcz, o$h0t, q4oh0) {
    !xudl9 && (xudl9 = {});
    var tm$o0h = Math[W[438]](Date[W[165]]() / 0x3e8);
    xudl9[W[822]] = tm$o0h, xudl9[W[931]] = fi81bl;
    var qspoh4 = Object[W[932]](xudl9)[W[369]](),
        w7y = '',
        lf8u = '';
    for (var ph4so = 0x0; ph4so < qspoh4[W[201]]; ph4so++) {
        w7y = w7y + (ph4so == 0x0 ? '' : '&') + qspoh4[ph4so] + xudl9[qspoh4[ph4so]], lf8u = lf8u + (ph4so == 0x0 ? '' : '&') + qspoh4[ph4so] + '=' + encodeURIComponent(xudl9[qspoh4[ph4so]]);
    }
    w7y = w7y + $LUX[W[709]];
    var cerw7 = W[933] + md5(w7y);
    send(yk7ncw + '?' + lf8u + (lf8u == '' ? '' : '&') + cerw7, null, zyw3kc, y3wcz, o$h0t, q4oh0 || function (h04po) {
        return h04po[W[363]] == W[362];
    }, null, W[934]);
}, window['$LU7XR'] = function (f1bil8, hq40) {
    var p9axs5 = 0x0;
    $LUX[W[170]] && (p9axs5 = $LUX[W[170]][W[171]]), sendApi($LUX[W[705]], W[935], {
        'partnerId': $LUX[W[711]],
        'gamePkg': $LUX[W[311]],
        'logTime': Math[W[438]](Date[W[165]]() / 0x3e8),
        'platformUid': $LUX[W[818]],
        'type': f1bil8,
        'serverId': p9axs5
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['$LUXR7'] = function (cnj7e) {
    sendApi($LUX[W[703]], W[936], {
        'partner_id': $LUX[W[711]],
        'uid': $LUX[W[582]],
        'version': $LUX[W[631]],
        'game_pkg': $LUX[W[311]],
        'device': $LUX[W[712]]
    }, $LUX7R, $L7XU, $LXR);
}, window['$LUX7R'] = function (i6l8) {
    if (i6l8 && i6l8[W[363]] === W[362] && i6l8[W[364]]) {
        i6l8[W[364]][W[937]]({
            'id': -0x2,
            'name': W[938]
        }), i6l8[W[364]][W[937]]({
            'id': -0x1,
            'name': W[939]
        }), $LUX[W[310]] = i6l8[W[364]];
        if (window[W[300]]) window[W[300]][W[352]]();
    } else {
        $LUX[W[333]] = ![];
        var ewrcn7 = i6l8 ? i6l8[W[363]] : '';
        window[W[744]](0x7, W[940] + ewrcn7), window['$LR7UX'](W[941] + ewrcn7);
    }
}, window['$LR7U'] = function (bf9u) {
    sendApi($LUX[W[703]], W[942], {
        'partner_id': $LUX[W[711]],
        'uid': $LUX[W[582]],
        'version': $LUX[W[631]],
        'game_pkg': $LUX[W[311]],
        'device': $LUX[W[712]]
    }, $LRU7, $L7XU, $LXR);
}, window['$LRU7'] = function (hqp40o) {
    $LUX[W[360]] = ![];
    if (hqp40o && hqp40o[W[363]] === W[362] && hqp40o[W[364]]) {
        for (var il861 = 0x0; il861 < hqp40o[W[364]][W[201]]; il861++) {
            hqp40o[W[364]][il861][W[254]] = $LU7R(hqp40o[W[364]][il861]);
        }
        $LUX[W[358]][-0x1] = window[W[943]](hqp40o[W[364]]), window[W[300]][W[359]](-0x1);
    } else {
        var fudl9b = hqp40o ? hqp40o[W[363]] : '';
        window[W[744]](0x8, W[944] + fudl9b), window['$LR7UX'](W[945] + fudl9b);
    }
}, window[W[946]] = function (oq04h) {
    sendApi($LUX[W[703]], W[942], {
        'partner_id': $LUX[W[711]],
        'uid': $LUX[W[582]],
        'version': $LUX[W[631]],
        'game_pkg': $LUX[W[311]],
        'device': $LUX[W[712]]
    }, oq04h, $L7XU, $LXR);
}, window['$L7RU'] = function (f1b8l, n7ywe) {
    sendApi($LUX[W[703]], W[947], {
        'partner_id': $LUX[W[711]],
        'uid': $LUX[W[582]],
        'version': $LUX[W[631]],
        'game_pkg': $LUX[W[311]],
        'device': $LUX[W[712]],
        'server_group_id': n7ywe
    }, $L7UR, $L7XU, $LXR);
}, window['$L7UR'] = function (bfdlu8) {
    $LUX[W[360]] = ![];
    if (bfdlu8 && bfdlu8[W[363]] === W[362] && bfdlu8[W[364]] && bfdlu8[W[364]][W[364]]) {
        var bi618 = bfdlu8[W[364]][W[948]],
            tmgo = [];
        for (var hposq = 0x0; hposq < bfdlu8[W[364]][W[364]][W[201]]; hposq++) {
            bfdlu8[W[364]][W[364]][hposq][W[254]] = $LU7R(bfdlu8[W[364]][W[364]][hposq]), (tmgo[W[201]] == 0x0 || bfdlu8[W[364]][W[364]][hposq][W[254]] != 0x0) && (tmgo[tmgo[W[201]]] = bfdlu8[W[364]][W[364]][hposq]);
        }
        $LUX[W[358]][bi618] = window[W[943]](tmgo), window[W[300]][W[359]](bi618);
    } else {
        var bl68i = bfdlu8 ? bfdlu8[W[363]] : '';
        window[W[744]](0x9, W[949] + bl68i), window['$LR7UX'](W[950] + bl68i);
    }
}, window['$LM7XU'] = function (sd59ax) {
    sendApi($LUX[W[703]], W[951], {
        'partner_id': $LUX[W[711]],
        'uid': $LUX[W[582]],
        'version': $LUX[W[631]],
        'game_pkg': $LUX[W[311]],
        'device': $LUX[W[712]]
    }, reqServerRecommendCallBack, $L7XU, $LXR);
}, window[W[952]] = function (yc3wz) {
    $LUX[W[360]] = ![];
    if (yc3wz && yc3wz[W[363]] === W[362] && yc3wz[W[364]]) {
        for (var sdx5 = 0x0; sdx5 < yc3wz[W[364]][W[201]]; sdx5++) {
            yc3wz[W[364]][sdx5][W[254]] = $LU7R(yc3wz[W[364]][sdx5]);
        }
        $LUX[W[358]][-0x2] = window[W[943]](yc3wz[W[364]]), window[W[300]][W[359]](-0x2);
    } else {
        var y32v = yc3wz ? yc3wz[W[363]] : '';
        window[W[744]](0xa, W[953] + y32v), alert(W[954] + y32v);
    }
}, window[W[943]] = function (_vi612) {
    return _vi612;
}, window['$LUR7'] = function (o0thm, xp59as) {
    o0thm = o0thm || $LUX[W[170]][W[171]], sendApi($LUX[W[703]], W[955], {
        'type': '4',
        'game_pkg': $LUX[W[311]],
        'server_id': o0thm
    }, xp59as);
}, window[W[956]] = function (dfuxa, wyce, vz61_, if1lb) {
    vz61_ = vz61_ || $LUX[W[170]][W[171]], sendApi($LUX[W[703]], W[957], {
        'type': dfuxa,
        'game_pkg': wyce,
        'server_id': vz61_
    }, if1lb);
}, window[W[958]] = function (x9a5sd, p5q4) {
    sendApi($LUX[W[703]], W[959], { 'game_pkg': x9a5sd }, p5q4);
}, window['$LU7R'] = function (buf8dl) {
    if (buf8dl) {
        if (buf8dl[W[254]] == 0x1) {
            if (buf8dl[W[960]] == 0x3) return 0x3;else return buf8dl[W[960]] == 0x1 ? 0x2 : 0x1;
        } else return buf8dl[W[254]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['$LXR7U'] = function (ynwec7, xap95) {
    $LUX[W[961]] = {
        'step': ynwec7,
        'server_id': xap95
    }, $LRU7X({ 'title': W[962] }), sendApi($LUX[W[703]], W[963], {
        'partner_id': $LUX[W[711]],
        'uid': $LUX[W[582]],
        'game_pkg': $LUX[W[311]],
        'server_id': xap95,
        'platform': $LUX[W[635]],
        'platform_uid': $LUX[W[818]],
        'check_login_time': $LUX[W[821]],
        'check_login_sign': $LUX[W[819]],
        'version_name': $LUX[W[779]]
    }, $LXRU7, $L7XU, $LXR, function (ohspq) {
        return ohspq[W[363]] == W[362] || ohspq[W[568]] == W[964] || ohspq[W[568]] == W[965];
    });
}, window['$LXRU7'] = function (cyw7k) {
    var rc7j = this;
    if (cyw7k && cyw7k[W[363]] === W[362] && cyw7k[W[364]]) {
        var u9ldf = $LUX[W[170]];
        u9ldf[W[966]] = $LUX[W[714]], u9ldf[W[820]] = String(cyw7k[W[364]][W[967]]), u9ldf[W[720]] = parseInt(cyw7k[W[364]][W[822]]);
        if (cyw7k[W[364]][W[968]]) u9ldf[W[968]] = parseInt(cyw7k[W[364]][W[968]]);else u9ldf[W[968]] = parseInt(cyw7k[W[364]][W[171]]);
        u9ldf[W[969]] = 0x0, u9ldf[W[351]] = $LUX[W[858]], u9ldf[W[970]] = cyw7k[W[364]][W[971]], u9ldf[W[972]] = cyw7k[W[364]][W[972]];
        if (cyw7k[W[364]][W[973]]) u9ldf[W[973]] = parseInt(cyw7k[W[364]][W[973]]);
        console[W[320]](W[974] + JSON[W[502]](u9ldf[W[972]])), $LUX[W[491]] == 0x1 && u9ldf[W[972]] && u9ldf[W[972]][W[975]] == 0x1 && ($LUX[W[232]] = 0x1, window[W[567]][W[166]]['$LMXU']()), $LX7RU();
    } else {
        if ($LUX[W[961]][W[976]] >= 0x3) {
            var k_3v = cyw7k ? cyw7k[W[363]] : '';
            window[W[744]](0xc, W[977] + k_3v), $LXR(JSON[W[502]](cyw7k)), window['$LR7UX'](W[978] + k_3v);
        } else sendApi($LUX[W[703]], W[797], {
            'platform': $LUX[W[701]],
            'partner_id': $LUX[W[711]],
            'token': $LUX[W[791]],
            'game_pkg': $LUX[W[311]],
            'deviceId': $LUX[W[712]],
            'scene': W[798] + $LUX[W[713]]
        }, function (k_2zv) {
            if (!k_2zv || k_2zv[W[363]] != W[362]) {
                window['$LR7UX'](W[814] + k_2zv && k_2zv[W[363]]);
                return;
            }
            $LUX[W[819]] = String(k_2zv[W[820]]), $LUX[W[821]] = String(k_2zv[W[822]]), setTimeout(function () {
                $LXR7U($LUX[W[961]][W[976]] + 0x1, $LUX[W[961]][W[171]]);
            }, 0x5dc);
        }, $L7XU, $LXR, function (bl6i81) {
            return bl6i81[W[363]] == W[362] || bl6i81[W[363]] == W[979];
        });
    }
}, window['$LX7RU'] = function () {
    ServerLoading[W[166]][W[486]]($LUX[W[491]]), window['$L7X'] = !![], window['$LXUR7']();
}, window['$LX7UR'] = function () {
    if (window['$LX7'] && window['$LU7X'] && window[W[474]] && window[W[485]] && window['$LUX7'] && window['$LU7']) {
        if (!window[W[980]][W[166]]) {
            console[W[320]](W[981] + window[W[980]][W[166]]);
            var qoh4ps = wx[W[982]](),
                i_6821 = qoh4ps[W[684]] ? qoh4ps[W[684]] : 0x0,
                df8 = {
                'cdn': window['$LUX'][W[351]],
                'spareCdn': window['$LUX'][W[777]],
                'newRegister': window['$LUX'][W[491]],
                'wxPC': window['$LUX'][W[659]],
                'wxIOS': window['$LUX'][W[654]],
                'wxAndroid': window['$LUX'][W[656]],
                'wxParam': {
                    'limitLoad': window['$LUX']['$LMR7XU'],
                    'benchmarkLevel': window['$LUX']['$LMRU7X'],
                    'wxFrom': window[W[436]][W[786]] == W[983] ? 0x1 : 0x0,
                    'wxSDKVersion': window[W[592]],
                    'qudao': W[984]
                },
                'configType': window['$LUX'][W[721]],
                'exposeType': window['$LUX'][W[723]],
                'scene': i_6821,
                'video_type': window['$LUX'][W[793]],
                'ad_flag': window['$LUX'][W[795]]
            };
            if (window[W[861]]) for (var fi18lb in window[W[861]]) {
                if (!df8[fi18lb]) df8[fi18lb] = window[W[861]][fi18lb];
            }
            new window[W[980]](df8, window['$LUX'][W[229]], window['$LMR7UX']);
        }
    }
}, window['$LXUR7'] = function () {
    if (window['$LX7'] && window['$LU7X'] && window[W[474]] && window[W[485]] && window['$LUX7'] && window['$LU7'] && window['$L7X'] && window['$L7U']) {
        $LRUX7();
        if (!$LX7U) {
            $LX7U = !![];
            if (!window[W[980]][W[166]]) window['$LX7UR']();
            var fl1i8 = 0x0,
                fuxd = wx[W[985]]();
            fuxd && (window['$LUX'][W[658]] && (fl1i8 = fuxd[W[106]]), console[W[568]](W[986] + fuxd[W[106]] + W[987] + fuxd[W[243]] + W[988] + fuxd[W[299]] + W[989] + fuxd[W[69]] + W[990] + fuxd[W[193]] + W[991] + fuxd[W[195]]));
            var zy3c = {};
            for (const fliu8 in $LUX[W[170]]) {
                zy3c[fliu8] = $LUX[W[170]][fliu8];
            }
            var v621z_ = {
                'channel': window['$LUX'][W[715]],
                'account': window['$LUX'][W[582]],
                'userId': window['$LUX'][W[817]],
                'cdn': window['$LUX'][W[351]],
                'data': window['$LUX'][W[364]],
                'package': window['$LUX'][W[700]],
                'newRegister': window['$LUX'][W[491]],
                'pkgName': window['$LUX'][W[311]],
                'partnerId': window['$LUX'][W[711]],
                'platform_uid': window['$LUX'][W[818]],
                'deviceId': window['$LUX'][W[712]],
                'selectedServer': zy3c,
                'configType': window['$LUX'][W[721]],
                'exposeType': window['$LUX'][W[723]],
                'debugUsers': window['$LUX'][W[718]],
                'wxMenuTop': fl1i8,
                'wxShield': window['$LUX'][W[318]],
                'encryptParam': window['$LUX'][W[724]],
                'wx_channel': window['$LUX'][W[792]],
                'zsy_tp_state': window['$LUX'][W[794]]
            };
            if (window[W[861]]) for (var _216i8 in window[W[861]]) {
                v621z_[_216i8] = window[W[861]][_216i8];
            }
            window[W[980]][W[166]]['$LXUM'](v621z_);
            if ($LUX[W[170]] && $LUX[W[170]][W[171]]) localStorage[W[334]](W[824] + $LUX[W[311]] + $LUX[W[582]], $LUX[W[170]][W[171]]);
        }
    } else console[W[568]](W[992] + window['$LX7'] + W[993] + window['$LU7X'] + W[994] + window[W[474]] + W[995] + window[W[485]] + W[996] + window['$LUX7'] + W[997] + window['$LU7'] + W[998] + window['$L7X'] + W[999] + window['$L7U']);
};