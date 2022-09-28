var b = wx.$e;
import ed218 from '../eeeesdk/eeesdk.js';
window[b[31501]] = { 'wxVersion': window[b[1071]][b[31385]] }, window[b[31502]] = ![], window[b[31503]] = 0x1, window[b[31504]] = 0x1, window[b[31505]] = !![], window[b[31506]] = !![], window[b[31507]] = '', window[b[31508]] = ![], window[b[31390]] = {
    'base_cdn': b[31509],
    'cdn': b[31509]
}, e1U0[b[31510]] = {}, e1U0[b[485]] = '0', e1U0[b[5606]] = window[b[31501]][b[31511]], e1U0[b[31471]] = '', e1U0['os'] = '1', e1U0[b[31512]] = b[31513], e1U0[b[31514]] = b[31515], e1U0[b[31516]] = b[31517], e1U0[b[31518]] = b[31519], e1U0[b[31520]] = b[31521], e1U0[b[25309]] = '1', e1U0[b[27209]] = '', e1U0[b[27211]] = '', e1U0[b[31522]] = 0x0, e1U0[b[31523]] = {}, e1U0[b[31524]] = parseInt(e1U0[b[25309]]), e1U0[b[27207]] = e1U0[b[25309]], e1U0[b[27203]] = {}, e1U0[b[31396]] = b[31525], e1U0[b[31526]] = ![], e1U0[b[13501]] = b[31527], e1U0[b[27175]] = Date[b[608]](), e1U0[b[13095]] = b[31528], e1U0[b[1259]] = '_a', e1U0[b[31529]] = 0x2, e1U0[b[625]] = 0x7c1, e1U0[b[31511]] = window[b[31501]][b[31511]], e1U0[b[1283]] = ![], e1U0[b[1618]] = ![], e1U0[b[12418]] = ![], e1U0[b[26900]] = ![], window[b[31530]] = 0x5, window[b[31531]] = ![], window[b[31426]] = ![], window[b[31434]] = ![], window[b[31532]] = ![], window[b[31533]] = ![], window[b[31534]] = ![], window[b[31535]] = ![], window[b[31536]] = ![], window[b[31537]] = ![], window[b[31538]] = null, window[b[1161]] = function (zyhfl) {
    console[b[449]](b[1161], zyhfl), wx[b[5886]]({}), wx[b[31414]]({
        'title': b[7002],
        'content': zyhfl,
        'success'(gzhlt) {
            if (gzhlt[b[31539]]) console[b[449]](b[31540]);else gzhlt[b[1067]] && console[b[449]](b[31541]);
        }
    });
}, window[b[31542]] = function (ytlh) {
    console[b[449]](b[31543], ytlh), e11U0G(), wx[b[31414]]({
        'title': b[7002],
        'content': ytlh,
        'confirmText': b[31544],
        'cancelText': b[20048],
        'success'(jxtig$) {
            if (jxtig$[b[31539]]) window[b[31440]]();else jxtig$[b[1067]] && (console[b[449]](b[31545]), wx[b[26897]]({}));
        }
    });
}, window[b[31546]] = function (txl$gh) {
    console[b[449]](b[31546], txl$gh), wx[b[31414]]({
        'title': b[7002],
        'content': txl$gh,
        'confirmText': b[27338],
        'showCancel': ![],
        'complete'(bs9ku6) {
            console[b[449]](b[31545]), wx[b[26897]]({});
        }
    });
}, window[b[31547]] = ![], window[b[31548]] = function (knqu9s) {
    window[b[31547]] = !![], wx[b[5885]](knqu9s);
}, window[b[31549]] = function () {
    window[b[31547]] && (window[b[31547]] = ![], wx[b[5886]]({}));
}, window[b[31550]] = function (pamoec) {
    window[b[31402]][b[671]][b[31550]](pamoec);
}, window[b[13371]] = function ($txgji, jni$3q) {
    ed218[b[13371]]($txgji, function (su9qk) {
        su9qk && su9qk[b[494]] ? su9qk[b[494]][b[1801]] == 0x1 ? jni$3q(!![]) : (jni$3q(![]), console[b[603]](b[31551] + su9qk[b[494]][b[31552]])) : console[b[449]](b[13371], su9qk);
    });
}, window[b[31553]] = function (pcoame) {
    console[b[449]](b[31554], pcoame);
}, window[b[31555]] = function (s09b6k) {}, window[b[31556]] = function (wb850, s3qn9u, yrfvhz) {}, window[b[31557]] = function (d5208) {
    console[b[449]](b[31558], d5208), window[b[31402]][b[671]][b[31559]](), window[b[31402]][b[671]][b[31560]](), window[b[31402]][b[671]][b[31561]]();
}, window[b[31562]] = function (jn3i) {
    window[b[31563]](0xe, b[31564] + jn3i), window[b[31542]](b[31565]);
    var w058b = {
        'id': window[b[31390]][b[31391]],
        'role': window[b[31390]][b[5536]],
        'level': window[b[31390]][b[31392]],
        'account': window[b[31390]][b[27208]],
        'version': window[b[31390]][b[625]],
        'cdn': window[b[31390]][b[5415]],
        'pkgName': window[b[31390]][b[27209]],
        'gamever': window[b[1071]][b[31385]],
        'serverid': window[b[31390]][b[27203]] ? window[b[31390]][b[27203]][b[12594]] : 0x0,
        'systemInfo': window[b[31393]],
        'error': b[31566],
        'stack': jn3i ? jn3i : b[31565]
    },
        zr4fyv = JSON[b[5401]](w058b);
    console[b[492]](b[31567] + zr4fyv), window[b[31396]](zr4fyv);
}, window[b[31563]] = function (vy_7f, a_fv7) {
    sendApi(e1U0[b[31516]], b[31568], {
        'game_pkg': e1U0[b[27209]],
        'partner_id': e1U0[b[25309]],
        'server_id': e1U0[b[27203]] && e1U0[b[27203]][b[12594]] > 0x0 ? e1U0[b[27203]][b[12594]] : 0x0,
        'uid': e1U0[b[27208]] > 0x0 ? e1U0[b[27208]] : 0x0,
        'type': vy_7f,
        'info': a_fv7
    });
}, window[b[31569]] = function (ksu9b) {
    var lhtrxg = JSON[b[448]](ksu9b);
    lhtrxg[b[31570]] = window[b[1071]][b[31385]], lhtrxg[b[31571]] = window[b[31390]][b[27203]] ? window[b[31390]][b[27203]][b[12594]] : 0x0, lhtrxg[b[31393]] = window[b[31393]];
    var sq3unj = JSON[b[5401]](lhtrxg);
    console[b[492]](b[31572] + sq3unj), window[b[31396]](sq3unj);
}, window[b[31441]] = function (po7ca, _f4yz) {
    var fyv47 = {
        'id': window[b[31390]][b[31391]],
        'role': window[b[31390]][b[5536]],
        'level': window[b[31390]][b[31392]],
        'account': window[b[31390]][b[27208]],
        'version': window[b[31390]][b[625]],
        'cdn': window[b[31390]][b[5415]],
        'pkgName': window[b[31390]][b[27209]],
        'gamever': window[b[1071]][b[31385]],
        'serverid': window[b[31390]][b[27203]] ? window[b[31390]][b[27203]][b[12594]] : 0x0,
        'systemInfo': window[b[31393]],
        'error': po7ca,
        'stack': _f4yz
    },
        lgtrx = JSON[b[5401]](fyv47);
    console[b[506]](b[31573] + lgtrx), window[b[31396]](lgtrx);
}, window[b[31396]] = function (bk690d) {
    if (window[b[31390]][b[31472]] == b[31574]) return;
    var hl$tx = e1U0[b[31396]] + b[31575] + e1U0[b[27208]];
    wx[b[995]]({
        'url': hl$tx,
        'method': b[31329],
        'data': bk690d,
        'header': {
            'content-type': b[31576],
            'cache-control': b[31577]
        },
        'success': function (s3uqn) {
            DEBUG && console[b[449]](b[31578], hl$tx, bk690d, s3uqn);
        },
        'fail': function (paeo) {
            DEBUG && console[b[449]](b[31578], hl$tx, bk690d, paeo);
        },
        'complete': function () {}
    });
}, window[b[31579]] = function () {
    function a4v_m() {
        return ((0x1 + Math[b[640]]()) * 0x10000 | 0x0)[b[334]](0x10)[b[455]](0x1);
    }
    return a4v_m() + a4v_m() + '-' + a4v_m() + '-' + a4v_m() + '-' + a4v_m() + '+' + a4v_m() + a4v_m() + a4v_m();
}, window[b[31440]] = function () {
    console[b[449]](b[31580]);
    var coapme = ed218[b[31581]]();
    e1U0[b[27207]] = coapme[b[31582]], e1U0[b[31524]] = coapme[b[31582]], e1U0[b[25309]] = coapme[b[31582]], e1U0[b[27209]] = coapme[b[31583]];
    var am7o_ = { 'game_ver': e1U0[b[5606]] };
    e1U0[b[27211]] = this[b[31579]](), e11UG0({ 'title': b[31584] }), ed218[b[884]](am7o_, this[b[31585]][b[304]](this));
}, window[b[31585]] = function (f_4zyv) {
    var xi$tjg = f_4zyv[b[31586]];
    sdkInitRes = f_4zyv, console[b[449]](b[31587] + xi$tjg + b[31588] + (xi$tjg == 0x1) + b[31589] + f_4zyv[b[31385]] + b[31590] + window[b[31501]][b[31511]] + b[31591] + f_4zyv[b[31592]]);
    if (!f_4zyv[b[31385]] || window[b[31405]](window[b[31501]][b[31511]], f_4zyv[b[31385]]) < 0x0) console[b[449]](b[31593]), e1U0[b[31514]] = b[31594], e1U0[b[31516]] = b[31595], e1U0[b[31518]] = b[31596], e1U0[b[5415]] = b[31597], e1U0[b[26898]] = b[31598], e1U0[b[31592]] = f_4zyv[b[31592]], e1U0[b[1283]] = ![];else window[b[31405]](window[b[31501]][b[31511]], f_4zyv[b[31385]]) == 0x0 ? (console[b[449]](b[31599]), e1U0[b[31514]] = b[31515], e1U0[b[31516]] = b[31517], e1U0[b[31518]] = b[31519], e1U0[b[5415]] = b[31600], e1U0[b[26898]] = b[31598], e1U0[b[31592]] = b[31601], e1U0[b[1283]] = !![]) : (console[b[449]](b[31602]), e1U0[b[31514]] = b[31515], e1U0[b[31516]] = b[31517], e1U0[b[31518]] = b[31519], e1U0[b[5415]] = b[31600], e1U0[b[26898]] = b[31598], e1U0[b[31592]] = b[31601], e1U0[b[1283]] = ![]);
    e1U0[b[31522]] = config[b[329]] ? config[b[329]] : 0x0, this[b[31603]](), this[b[31604]](), window[b[31605]] = 0x5, e11UG0({ 'title': b[31606] }), ed218[b[31325]](this[b[31607]][b[304]](this));
}, window[b[31605]] = 0x5, window[b[31607]] = function (z_yvf, hrlyt) {
    if (z_yvf == 0x0 && hrlyt && hrlyt[b[480]]) {
        e1U0[b[31608]] = hrlyt[b[480]], e1U0[b[31609]] = hrlyt[b[31609]];
        var vfyz_ = this;
        e11UG0({ 'title': b[31610] }), sendApi(e1U0[b[31514]], b[31611], {
            'platform': e1U0[b[31512]],
            'partner_id': e1U0[b[25309]],
            'token': hrlyt[b[480]],
            'game_pkg': e1U0[b[27209]],
            'deviceId': e1U0[b[27211]],
            'scene': b[31612] + e1U0[b[31522]]
        }, this[b[31613]][b[304]](this), e1G0U, e101);
    } else hrlyt && hrlyt[b[27401]] && window[b[31605]] > 0x0 && (hrlyt[b[27401]][b[397]](b[31614]) != -0x1 || hrlyt[b[27401]][b[397]](b[31615]) != -0x1 || hrlyt[b[27401]][b[397]](b[31616]) != -0x1 || hrlyt[b[27401]][b[397]](b[31617]) != -0x1 || hrlyt[b[27401]][b[397]](b[31618]) != -0x1 || hrlyt[b[27401]][b[397]](b[31619]) != -0x1) ? (window[b[31605]]--, ed218[b[31325]](this[b[31607]][b[304]](this))) : (window[b[31563]](0x1, b[31620] + z_yvf + b[31621] + (hrlyt ? hrlyt[b[27401]] : '')), window[b[31441]](b[31622], JSON[b[5401]]({
        'status': z_yvf,
        'data': hrlyt
    })), window[b[31542]](b[31623] + (hrlyt && hrlyt[b[27401]] ? '，' + hrlyt[b[27401]] : '')));
}, window[b[31613]] = function (rhzfy) {
    if (!rhzfy) {
        window[b[31563]](0x2, b[31624]), window[b[31441]](b[31625], b[31626]), window[b[31542]](b[31627]);
        return;
    }
    if (rhzfy[b[1801]] != b[10929]) {
        window[b[31563]](0x2, b[31628] + rhzfy[b[1801]]), window[b[31441]](b[31625], JSON[b[5401]](rhzfy)), window[b[31542]](b[31629] + rhzfy[b[1801]]);
        return;
    }
    if (rhzfy[b[31630]] == 0x1) {
        window[b[31542]](b[31631]);
        return;
    }
    e1U0[b[20426]] = String(rhzfy[b[27208]]), e1U0[b[27208]] = String(rhzfy[b[27208]]), e1U0[b[27173]] = String(rhzfy[b[27173]]), e1U0[b[27207]] = String(rhzfy[b[27173]]), e1U0[b[27210]] = String(rhzfy[b[27210]]), e1U0[b[31632]] = String(rhzfy[b[12577]]), e1U0[b[31633]] = String(rhzfy[b[1395]]), e1U0[b[12577]] = '';
    var vyrf = this;
    e11UG0({ 'title': b[31634] });
    var _4zvy = localStorage[b[998]](b[31635] + e1U0[b[27209]] + e1U0[b[27208]]);
    if (_4zvy && _4zvy != '') {
        var u3qnj = Number(_4zvy);
        vyrf[b[31636]](u3qnj);
    } else vyrf[b[31637]]();
}, window[b[31637]] = function () {
    var yzrthl = this;
    sendApi(e1U0[b[31514]], b[31638], {
        'partner_id': e1U0[b[25309]],
        'uid': e1U0[b[27208]],
        'version': e1U0[b[5606]],
        'game_pkg': e1U0[b[27209]],
        'device': e1U0[b[27211]]
    }, yzrthl[b[31639]][b[304]](yzrthl), e1G0U, e101);
}, window[b[31639]] = function (g$xjti) {
    if (!g$xjti) {
        window[b[31563]](0x3, b[31640]), window[b[31542]](b[31640]);
        return;
    }
    if (g$xjti[b[1801]] != b[10929]) {
        window[b[31563]](0x3, b[31641] + g$xjti[b[1801]]), window[b[31542]](b[31641] + g$xjti[b[1801]]);
        return;
    }
    if (!g$xjti[b[494]] || g$xjti[b[494]][b[315]] == 0x0) {
        window[b[31563]](0x3, b[31642]), window[b[31542]](b[31643]);
        return;
    }
    this[b[31644]](g$xjti);
}, window[b[31636]] = function (acmp7) {
    var mcaoep = this;
    sendApi(e1U0[b[31514]], b[31645], {
        'server_id': acmp7,
        'time': Date[b[608]]() / 0x3e8
    }, mcaoep[b[31646]][b[304]](mcaoep), e1G0U, e101);
}, window[b[31646]] = function (htryz) {
    if (!htryz) {
        window[b[31563]](0x4, b[31647]), this[b[31637]]();
        return;
    }
    if (htryz[b[1801]] != b[10929]) {
        window[b[31563]](0x4, b[31648] + htryz[b[1801]]), this[b[31637]]();
        return;
    }
    if (!htryz[b[494]] || htryz[b[494]][b[315]] == 0x0) {
        window[b[31563]](0x4, b[31649]), this[b[31637]]();
        return;
    }
    this[b[31644]](htryz), window[b[31402]] && window[b[31402]][b[671]][b[31650]] && window[b[31402]][b[671]][b[31650]](sdkInitRes[b[31651]], sdkInitRes[b[31652]], sdkInitRes[b[31653]], sdkInitRes[b[31654]], sdkInitRes[b[31655]]);
}, window[b[31644]] = function (gtrlz) {
    e1U0[b[1171]] = gtrlz[b[31656]] != undefined ? gtrlz[b[31656]] : 0x0, e1U0[b[27203]] = {
        'server_id': String(gtrlz[b[494]][0x0][b[12594]]),
        'server_name': String(gtrlz[b[494]][0x0][b[31657]]),
        'entry_ip': gtrlz[b[494]][0x0][b[27233]],
        'entry_port': parseInt(gtrlz[b[494]][0x0][b[27234]]),
        'status': e1UG1(gtrlz[b[494]][0x0]),
        'start_time': gtrlz[b[494]][0x0][b[31658]],
        'maintain_time': gtrlz[b[494]][0x0][b[31659]] ? gtrlz[b[494]][0x0][b[31659]] : '',
        'cdn': e1U0[b[5415]]
    }, this[b[31660]]();
}, window[b[31660]] = function () {
    if (e1U0[b[1171]] == 0x1) {
        var k09sb6 = e1U0[b[27203]][b[630]];
        if (k09sb6 === -0x1 || k09sb6 === 0x0) {
            window[b[31563]](0xf, b[31661] + e1U0[b[27203]]['id'] + b[31662] + e1U0[b[27203]][b[630]]), window[b[31542]](k09sb6 === -0x1 ? b[31663] : b[31664]);
            return;
        }
        e101GU(0x0, e1U0[b[27203]][b[12594]]), window[b[31402]][b[671]][b[31665]](e1U0[b[1171]]);
    } else window[b[31402]][b[671]][b[31666]](), e11U0G();
    window[b[31536]] = !![], window[b[31427]](), window[b[31428]]();
}, window[b[31603]] = function () {
    sendApi(e1U0[b[31514]], b[31667], {
        'game_pkg': e1U0[b[27209]],
        'version_name': e1U0[b[31592]]
    }, this[b[31668]][b[304]](this), e1G0U, e101);
}, window[b[31668]] = function (v4rz) {
    if (!v4rz) {
        window[b[31563]](0x5, b[31669]), window[b[31542]](b[31669]);
        return;
    }
    if (v4rz[b[1801]] != b[10929]) {
        window[b[31563]](0x5, b[31670] + v4rz[b[1801]]), window[b[31542]](b[31670] + v4rz[b[1801]]);
        return;
    }
    if (!v4rz[b[494]] || !v4rz[b[494]][b[5606]]) {
        window[b[31563]](0x5, b[31671] + (v4rz[b[494]] && v4rz[b[494]][b[5606]])), window[b[31542]](b[31671] + (v4rz[b[494]] && v4rz[b[494]][b[5606]]));
        return;
    }
    v4rz[b[494]][b[31672]] && v4rz[b[494]][b[31672]][b[315]] > 0xa && (e1U0[b[31673]] = v4rz[b[494]][b[31672]], e1U0[b[5415]] = v4rz[b[494]][b[31672]]), v4rz[b[494]][b[5606]] && (e1U0[b[625]] = v4rz[b[494]][b[5606]]), console[b[603]](b[27345] + e1U0[b[625]] + b[31674] + e1U0[b[31592]]), window[b[31534]] = !![], window[b[31427]](), window[b[31428]]();
}, window[b[31675]], window[b[31604]] = function () {
    sendApi(e1U0[b[31514]], b[31676], { 'game_pkg': e1U0[b[27209]] }, this[b[31677]][b[304]](this), e1G0U, e101);
}, window[b[31677]] = function (b9u6ks) {
    if (b9u6ks && b9u6ks[b[1801]] === b[10929] && b9u6ks[b[494]]) {
        window[b[31675]] = b9u6ks[b[494]];
        for (var qks9u in b9u6ks[b[494]]) {
            e1U0[qks9u] = b9u6ks[b[494]][qks9u];
        }
    } else window[b[31563]](0xb, b[31678]), console[b[603]](b[31679] + b9u6ks[b[1801]]);
    window[b[31535]] = !![], window[b[31428]]();
}, window[b[31680]] = function (x3ig, fzyhv, fy4_7, eopcma, hlt$x, xit$g, ksn9u6, d518w2, ryhtz, hxgtrl) {
    hlt$x = String(hlt$x);
    var va47 = ksn9u6,
        qjxi = d518w2;
    e1U0[b[31510]][hlt$x] = {
        'productid': hlt$x,
        'productname': va47,
        'productdesc': qjxi,
        'roleid': x3ig,
        'rolename': fzyhv,
        'rolelevel': fy4_7,
        'price': xit$g,
        'callback': ryhtz
    }, sendApi(e1U0[b[31518]], b[31681], {
        'game_pkg': e1U0[b[27209]],
        'server_id': e1U0[b[27203]][b[12594]],
        'server_name': e1U0[b[27203]][b[31657]],
        'level': fy4_7,
        'uid': e1U0[b[27208]],
        'role_id': x3ig,
        'role_name': fzyhv,
        'product_id': hlt$x,
        'product_name': va47,
        'product_desc': qjxi,
        'money': xit$g,
        'partner_id': e1U0[b[25309]]
    }, toPayCallBack, e1G0U, e101);
}, window[b[31682]] = function (d86b0) {
    if (d86b0 && (d86b0[b[31683]] === 0xc8 || d86b0[b[1801]] == b[10929])) {
        var sjqn = e1U0[b[31510]][String(d86b0[b[31684]])];
        if (sjqn[b[850]]) sjqn[b[850]](d86b0[b[31684]], d86b0[b[31685]], -0x1);
        ed218[b[31357]]({
            'cpbill': d86b0[b[31685]],
            'productid': d86b0[b[31684]],
            'productname': sjqn[b[31686]],
            'productdesc': sjqn[b[31687]],
            'serverid': e1U0[b[27203]][b[12594]],
            'servername': e1U0[b[27203]][b[31657]],
            'roleid': sjqn[b[31688]],
            'rolename': sjqn[b[31689]],
            'rolelevel': sjqn[b[31690]],
            'price': sjqn[b[28998]],
            'extension': JSON[b[5401]]({ 'cp_order_id': d86b0[b[31685]] })
        }, function (qinj, jquns) {
            sjqn[b[850]] && qinj == 0x0 && sjqn[b[850]](d86b0[b[31684]], d86b0[b[31685]], qinj);
            console[b[603]](JSON[b[5401]]({
                'type': b[31691],
                'status': qinj,
                'data': d86b0,
                'role_name': sjqn[b[31689]]
            }));
            if (qinj === 0x0) {} else {
                if (qinj === 0x1) {} else {
                    if (qinj === 0x2) {}
                }
            }
        });
    } else {
        var iquj3n = d86b0 ? b[31692] + d86b0[b[31683]] + b[31693] + d86b0[b[1801]] + b[31694] + d86b0[b[603]] : b[31695];
        window[b[31563]](0xd, b[31696] + iquj3n), alert(iquj3n);
    }
}, window[b[31697]] = function () {}, window[b[31698]] = function (lhzrf, dw0b58, su69kb, b0k6d5, th$xgl) {
    ed218[b[31376]](e1U0[b[27203]][b[12594]], e1U0[b[27203]][b[31657]] || e1U0[b[27203]][b[12594]], lhzrf, dw0b58, su69kb), sendApi(e1U0[b[31514]], b[31699], {
        'game_pkg': e1U0[b[27209]],
        'server_id': e1U0[b[27203]][b[12594]],
        'role_id': lhzrf,
        'uid': e1U0[b[27208]],
        'role_name': dw0b58,
        'role_type': b0k6d5,
        'level': su69kb
    });
}, window[b[31700]] = function (y7vf_, m7c_ao, squj3, acmp, kq9sun, x$q3j, itjx$g, d20w58, pa, vf4rzy) {
    e1U0[b[31391]] = y7vf_, e1U0[b[5536]] = m7c_ao, e1U0[b[31392]] = squj3, ed218[b[31377]](e1U0[b[27203]][b[12594]], e1U0[b[27203]][b[31657]] || e1U0[b[27203]][b[12594]], y7vf_, m7c_ao, squj3), sendApi(e1U0[b[31514]], b[31701], {
        'game_pkg': e1U0[b[27209]],
        'server_id': e1U0[b[27203]][b[12594]],
        'role_id': y7vf_,
        'uid': e1U0[b[27208]],
        'role_name': m7c_ao,
        'role_type': acmp,
        'level': squj3,
        'evolution': kq9sun
    });
}, window[b[31702]] = function (oeacmp, $git, gtxil, yf7v_, kqnu9s, $3qin, ilg$tx, tyh, hrlz, rgthxl) {
    e1U0[b[31391]] = oeacmp, e1U0[b[5536]] = $git, e1U0[b[31392]] = gtxil, ed218[b[31378]](e1U0[b[27203]][b[12594]], e1U0[b[27203]][b[31657]] || e1U0[b[27203]][b[12594]], oeacmp, $git, gtxil), sendApi(e1U0[b[31514]], b[31701], {
        'game_pkg': e1U0[b[27209]],
        'server_id': e1U0[b[27203]][b[12594]],
        'role_id': oeacmp,
        'uid': e1U0[b[27208]],
        'role_name': $git,
        'role_type': yf7v_,
        'level': gtxil,
        'evolution': kqnu9s
    });
}, window[b[31703]] = function ($i) {}, window[b[31704]] = function (til$gx) {
    ed218[b[31339]](b[31339], function (lfzry) {
        til$gx && til$gx(lfzry);
    });
}, window[b[25307]] = function () {
    ed218[b[25307]]();
}, window[b[31705]] = function () {
    ed218[b[25197]]();
}, window[b[31706]] = function (w8250, su9nk, hvzf, xgj3, rhzyl, yhvrz, vy_f74, ji3unq) {
    ji3unq = ji3unq || e1U0[b[27203]][b[12594]], sendApi(e1U0[b[31514]], b[31707], {
        'phone': w8250,
        'role_id': su9nk,
        'uid': e1U0[b[27208]],
        'game_pkg': e1U0[b[27209]],
        'partner_id': e1U0[b[25309]],
        'server_id': ji3unq
    }, vy_f74, 0x2, null, function () {
        return !![];
    });
}, window[b[11921]] = function (f_y4v) {
    window[b[31491]] = f_y4v, window[b[31491]] && window[b[31490]] && (console[b[603]](b[31492] + window[b[31490]][b[1321]]), window[b[31491]](window[b[31490]]), window[b[31490]] = null);
}, window[b[31708]] = function (tgxh$l, nj3qs, w2518, yrtz) {
    window[b[553]](b[31709], {
        'game_pkg': window[b[31390]][b[27209]],
        'role_id': nj3qs,
        'server_id': w2518
    }, yrtz);
}, window[b[31710]] = function (skb6, b96dk, zfhrvy) {
    function nu9sq(trlzh) {
        var fz4yr = [],
            c7a_m = [],
            acopem = zfhrvy || window[b[1071]][b[31711]];
        for (var jix3q in acopem) {
            var nu3iq = Number(jix3q);
            (!skb6 || !skb6[b[315]] || skb6[b[397]](nu3iq) != -0x1) && (c7a_m[b[337]](acopem[jix3q]), fz4yr[b[337]]([nu3iq, 0x3]));
        }
        window[b[31405]](window[b[31406]], b[31712]) >= 0x0 ? (console[b[449]](b[31713]), ed218[b[31714]] && ed218[b[31714]](c7a_m, function (aocep) {
            console[b[449]](b[31715]), console[b[449]](aocep);
            if (aocep && aocep[b[27401]] == b[31716]) for (var copeam in acopem) {
                if (aocep[acopem[copeam]] == b[31717]) {
                    var i3nuqj = Number(copeam);
                    for (var oecp = 0x0; oecp < fz4yr[b[315]]; oecp++) {
                        if (fz4yr[oecp][0x0] == i3nuqj) {
                            fz4yr[oecp][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[b[31405]](window[b[31406]], b[31718]) >= 0x0 ? wx[b[31719]]({
                'withSubscriptions': !![],
                'success': function (usbk96) {
                    var yvf_ = usbk96[b[31720]][b[31721]];
                    if (yvf_) {
                        console[b[449]](b[31722]), console[b[449]](yvf_);
                        for (var sb9u in acopem) {
                            if (yvf_[acopem[sb9u]] == b[31717]) {
                                var inj3q = Number(sb9u);
                                for (var hzvfr = 0x0; hzvfr < fz4yr[b[315]]; hzvfr++) {
                                    if (fz4yr[hzvfr][0x0] == inj3q) {
                                        fz4yr[hzvfr][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[b[449]](fz4yr), b96dk && b96dk(fz4yr);
                    } else console[b[449]](b[31723]), console[b[449]](usbk96), console[b[449]](fz4yr), b96dk && b96dk(fz4yr);
                },
                'fail': function () {
                    console[b[449]](b[31724]), console[b[449]](fz4yr), b96dk && b96dk(fz4yr);
                }
            }) : (console[b[449]](b[31725] + window[b[31406]]), console[b[449]](fz4yr), b96dk && b96dk(fz4yr));
        })) : (console[b[449]](b[31726] + window[b[31406]]), console[b[449]](fz4yr), b96dk && b96dk(fz4yr)), wx[b[31727]](nu9sq);
    }
    wx[b[31728]](nu9sq);
}, window[b[31729]] = {
    'isSuccess': ![],
    'level': b[31730],
    'isCharging': ![]
}, window[b[14423]] = function (t$glh) {
    wx[b[31482]]({
        'success': function (qjns3) {
            var m4a7_ = window[b[31729]];
            m4a7_[b[31731]] = !![], m4a7_[b[5512]] = Number(qjns3[b[5512]])[b[5134]](0x0), m4a7_[b[31485]] = qjns3[b[31485]], t$glh && t$glh(m4a7_[b[31731]], m4a7_[b[5512]], m4a7_[b[31485]]);
        },
        'fail': function (_mc7o) {
            console[b[449]](b[31732], _mc7o[b[27401]]);
            var _vfz = window[b[31729]];
            t$glh && t$glh(_vfz[b[31731]], _vfz[b[5512]], _vfz[b[31485]]);
        }
    });
}, window[b[12976]] = function (apem) {
    wx[b[12976]]({
        'success': function (rfhyv) {
            apem && apem(!![], rfhyv);
        },
        'fail': function (m74va) {
            apem && apem(![], m74va);
        }
    });
}, window[b[12978]] = function (hytl) {
    if (hytl) wx[b[12978]](hytl);
}, window[b[26893]] = function (vf4y7) {
    wx[b[26893]](vf4y7);
}, window[b[553]] = function (hxlgt$, x3q$i, ma_c7o, b90kd, zfyrlh, iu3qjn, lzr, zhlrgt) {
    if (b90kd == undefined) b90kd = 0x1;
    wx[b[995]]({
        'url': hxlgt$,
        'method': lzr || b[27090],
        'responseType': b[5318],
        'data': x3q$i,
        'header': { 'content-type': zhlrgt || b[31576] },
        'success': function (kns6u9) {
            DEBUG && console[b[449]](b[31733], hxlgt$, info, kns6u9);
            if (kns6u9 && kns6u9[b[27470]] == 0xc8) {
                var ilx$t = kns6u9[b[494]];
                !iu3qjn || iu3qjn(ilx$t) ? ma_c7o && ma_c7o(ilx$t) : window[b[31734]](hxlgt$, x3q$i, ma_c7o, b90kd, zfyrlh, iu3qjn, kns6u9);
            } else window[b[31734]](hxlgt$, x3q$i, ma_c7o, b90kd, zfyrlh, iu3qjn, kns6u9);
        },
        'fail': function (xti$) {
            DEBUG && console[b[449]](b[31735], hxlgt$, info, xti$), window[b[31734]](hxlgt$, x3q$i, ma_c7o, b90kd, zfyrlh, iu3qjn, xti$);
        },
        'complete': function () {}
    });
}, window[b[31734]] = function (oc_7, w51, m4_c7, sk9ub, rhgtz, zlhtg, ceoamp) {
    sk9ub - 0x1 > 0x0 ? setTimeout(function () {
        window[b[553]](oc_7, w51, m4_c7, sk9ub - 0x1, rhgtz, zlhtg);
    }, 0x3e8) : rhgtz && rhgtz(JSON[b[5401]]({
        'url': oc_7,
        'response': ceoamp
    }));
}, window[b[31736]] = function (zltgh, hrfzly, $qin, $i3xqj, d68b05, $jixtg, $xtgli) {
    !$qin && ($qin = {});
    var $xjq = Math[b[342]](Date[b[608]]() / 0x3e8);
    $qin[b[1395]] = $xjq, $qin[b[31737]] = hrfzly;
    var ocpea = Object[b[314]]($qin)[b[505]](),
        cop = '',
        hyfzl = '';
    for (var f_4va7 = 0x0; f_4va7 < ocpea[b[315]]; f_4va7++) {
        cop = cop + (f_4va7 == 0x0 ? '' : '&') + ocpea[f_4va7] + $qin[ocpea[f_4va7]], hyfzl = hyfzl + (f_4va7 == 0x0 ? '' : '&') + ocpea[f_4va7] + '=' + encodeURIComponent($qin[ocpea[f_4va7]]);
    }
    cop = cop + e1U0[b[31520]];
    var c74ma_ = b[31738] + md5(cop);
    send(zltgh + '?' + hyfzl + (hyfzl == '' ? '' : '&') + c74ma_, null, $i3xqj, d68b05, $jixtg, $xtgli || function (xlgthr) {
        return xlgthr[b[1801]] == b[10929];
    }, null, b[31330]);
}, window[b[31739]] = function (j$x3qi, ecap) {
    var usn9k6 = 0x0;
    e1U0[b[27203]] && (usn9k6 = e1U0[b[27203]][b[12594]]), sendApi(e1U0[b[31516]], b[31740], {
        'partnerId': e1U0[b[25309]],
        'gamePkg': e1U0[b[27209]],
        'logTime': Math[b[342]](Date[b[608]]() / 0x3e8),
        'platformUid': e1U0[b[27210]],
        'type': j$x3qi,
        'serverId': usn9k6
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[b[31741]] = function (hrxtl) {
    sendApi(e1U0[b[31514]], b[31742], {
        'partner_id': e1U0[b[25309]],
        'uid': e1U0[b[27208]],
        'version': e1U0[b[5606]],
        'game_pkg': e1U0[b[27209]],
        'device': e1U0[b[27211]]
    }, e1U0G1, e1G0U, e101);
}, window[b[31743]] = function (jiqx$) {
    if (jiqx$ && jiqx$[b[1801]] === b[10929] && jiqx$[b[494]]) {
        jiqx$[b[494]][b[420]]({
            'id': -0x2,
            'name': b[31744]
        }), jiqx$[b[494]][b[420]]({
            'id': -0x1,
            'name': b[31745]
        }), e1U0[b[31746]] = jiqx$[b[494]];
        if (window[b[13548]]) window[b[13548]][b[31747]]();
    } else {
        e1U0[b[31748]] = ![];
        var fhzyv = jiqx$ ? jiqx$[b[1801]] : '';
        window[b[31563]](0x7, b[31749] + fhzyv), window[b[31542]](b[31750] + fhzyv);
    }
}, window[b[31751]] = function (yzrvh) {
    sendApi(e1U0[b[31514]], b[31752], {
        'partner_id': e1U0[b[25309]],
        'uid': e1U0[b[27208]],
        'version': e1U0[b[5606]],
        'game_pkg': e1U0[b[27209]],
        'device': e1U0[b[27211]]
    }, e11UG, e1G0U, e101);
}, window[b[31753]] = function (bk906d) {
    e1U0[b[31754]] = ![];
    if (bk906d && bk906d[b[1801]] === b[10929] && bk906d[b[494]]) {
        for (var j3snuq = 0x0; j3snuq < bk906d[b[494]][b[315]]; j3snuq++) {
            bk906d[b[494]][j3snuq][b[630]] = e1UG1(bk906d[b[494]][j3snuq]);
        }
        e1U0[b[31523]][-0x1] = window[b[31755]](bk906d[b[494]]), window[b[13548]][b[31756]](-0x1);
    } else {
        var yhzflr = bk906d ? bk906d[b[1801]] : '';
        window[b[31563]](0x8, b[31757] + yhzflr), window[b[31542]](b[31758] + yhzflr);
    }
}, window[b[31759]] = function (hg$xl) {
    sendApi(e1U0[b[31514]], b[31752], {
        'partner_id': e1U0[b[25309]],
        'uid': e1U0[b[27208]],
        'version': e1U0[b[5606]],
        'game_pkg': e1U0[b[27209]],
        'device': e1U0[b[27211]]
    }, hg$xl, e1G0U, e101);
}, window[b[31760]] = function (zthlyr, ecoamp) {
    sendApi(e1U0[b[31514]], b[31761], {
        'partner_id': e1U0[b[25309]],
        'uid': e1U0[b[27208]],
        'version': e1U0[b[5606]],
        'game_pkg': e1U0[b[27209]],
        'device': e1U0[b[27211]],
        'server_group_id': ecoamp
    }, e1GU1, e1G0U, e101);
}, window[b[31762]] = function (unji3) {
    e1U0[b[31754]] = ![];
    if (unji3 && unji3[b[1801]] === b[10929] && unji3[b[494]] && unji3[b[494]][b[494]]) {
        var g3$jix = unji3[b[494]][b[31763]],
            i$xlt = [];
        for (var copm = 0x0; copm < unji3[b[494]][b[494]][b[315]]; copm++) {
            unji3[b[494]][b[494]][copm][b[630]] = e1UG1(unji3[b[494]][b[494]][copm]), (i$xlt[b[315]] == 0x0 || unji3[b[494]][b[494]][copm][b[630]] != 0x0) && (i$xlt[i$xlt[b[315]]] = unji3[b[494]][b[494]][copm]);
        }
        e1U0[b[31523]][g3$jix] = window[b[31755]](i$xlt), window[b[13548]][b[31756]](g3$jix);
    } else {
        var xq$ij3 = unji3 ? unji3[b[1801]] : '';
        window[b[31563]](0x9, b[31764] + xq$ij3), window[b[31542]](b[31765] + xq$ij3);
    }
}, window[b[31766]] = function (ix$qj3) {
    sendApi(e1U0[b[31514]], b[31767], {
        'partner_id': e1U0[b[25309]],
        'uid': e1U0[b[27208]],
        'version': e1U0[b[5606]],
        'game_pkg': e1U0[b[27209]],
        'device': e1U0[b[27211]]
    }, reqServerRecommendCallBack, e1G0U, e101);
}, window[b[31768]] = function (db5w08) {
    e1U0[b[31754]] = ![];
    if (db5w08 && db5w08[b[1801]] === b[10929] && db5w08[b[494]]) {
        for (var q3j$n = 0x0; q3j$n < db5w08[b[494]][b[315]]; q3j$n++) {
            db5w08[b[494]][q3j$n][b[630]] = e1UG1(db5w08[b[494]][q3j$n]);
        }
        e1U0[b[31523]][-0x2] = window[b[31755]](db5w08[b[494]]), window[b[13548]][b[31756]](-0x2);
    } else {
        var aocmp = db5w08 ? db5w08[b[1801]] : '';
        window[b[31563]](0xa, b[31769] + aocmp), alert(b[31770] + aocmp);
    }
}, window[b[31755]] = function (apoecm) {
    return apoecm;
}, window[b[31771]] = function (itx, qs9ku) {
    itx = itx || e1U0[b[27203]][b[12594]], sendApi(e1U0[b[31514]], b[31772], {
        'type': '4',
        'game_pkg': e1U0[b[27209]],
        'server_id': itx
    }, qs9ku);
}, window[b[31773]] = function (mepcao, zvy4f_, zf_y4, _a4cm) {
    zf_y4 = zf_y4 || e1U0[b[27203]][b[12594]], sendApi(e1U0[b[31514]], b[31774], {
        'type': mepcao,
        'game_pkg': zvy4f_,
        'server_id': zf_y4
    }, _a4cm);
}, window[b[31775]] = function (mo_ac, cm4a7) {
    sendApi(e1U0[b[31514]], b[31776], { 'game_pkg': mo_ac }, cm4a7);
}, window[b[31777]] = function (fv7y4) {
    if (fv7y4) {
        if (fv7y4[b[630]] == 0x1) {
            if (fv7y4[b[31778]] == 0x1) return 0x2;else return 0x1;
        } else return fv7y4[b[630]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[b[31779]] = function (k6s9bu, amcoep) {
    e1U0[b[31780]] = {
        'step': k6s9bu,
        'server_id': amcoep
    };
    var m_oa7 = this;
    e11UG0({ 'title': b[31781] }), sendApi(e1U0[b[31514]], b[31782], {
        'partner_id': e1U0[b[25309]],
        'uid': e1U0[b[27208]],
        'game_pkg': e1U0[b[27209]],
        'server_id': amcoep,
        'platform': e1U0[b[27173]],
        'platform_uid': e1U0[b[27210]],
        'check_login_time': e1U0[b[31633]],
        'check_login_sign': e1U0[b[31632]],
        'version_name': e1U0[b[31592]]
    }, e101UG, e1G0U, e101, function (vf_a) {
        return vf_a[b[1801]] == b[10929] || vf_a[b[603]] == b[31783] || vf_a[b[603]] == b[31784];
    });
}, window[b[31785]] = function (_4avf) {
    var f4va_7 = this;
    if (_4avf && _4avf[b[1801]] === b[10929] && _4avf[b[494]]) {
        var itlg$ = e1U0[b[27203]];
        itlg$[b[31786]] = e1U0[b[31524]], itlg$[b[12577]] = String(_4avf[b[494]][b[31787]]), itlg$[b[27175]] = parseInt(_4avf[b[494]][b[1395]]);
        if (_4avf[b[494]][b[27174]]) itlg$[b[27174]] = parseInt(_4avf[b[494]][b[27174]]);else itlg$[b[27174]] = parseInt(_4avf[b[494]][b[12594]]);
        itlg$[b[31788]] = 0x0, itlg$[b[5415]] = e1U0[b[31673]], itlg$[b[31789]] = _4avf[b[494]][b[31790]], itlg$[b[31791]] = _4avf[b[494]][b[31791]];
        if (_4avf[b[494]][b[27178]]) itlg$[b[27178]] = parseInt(_4avf[b[494]][b[27178]]);
        console[b[449]](b[31792] + JSON[b[5401]](itlg$[b[31791]])), e1U0[b[1171]] == 0x1 && itlg$[b[31791]] && itlg$[b[31791]][b[31793]] == 0x1 && (e1U0[b[31794]] = 0x1, window[b[31402]][b[671]][b[31795]]()), e10G1U();
    } else {
        if (e1U0[b[31780]][b[8087]] >= 0x3) {
            var xjgit$ = _4avf ? _4avf[b[1801]] : '';
            window[b[31563]](0xc, b[31796] + xjgit$), e101(JSON[b[5401]](_4avf)), window[b[31542]](b[31797] + xjgit$);
        } else sendApi(e1U0[b[31514]], b[31611], {
            'platform': e1U0[b[31512]],
            'partner_id': e1U0[b[25309]],
            'token': e1U0[b[31608]],
            'game_pkg': e1U0[b[27209]],
            'deviceId': e1U0[b[27211]],
            'scene': b[31612] + e1U0[b[31522]]
        }, function (a74_fv) {
            if (!a74_fv || a74_fv[b[1801]] != b[10929]) {
                window[b[31542]](b[31629] + a74_fv && a74_fv[b[1801]]);
                return;
            }
            e1U0[b[31632]] = String(a74_fv[b[12577]]), e1U0[b[31633]] = String(a74_fv[b[1395]]), setTimeout(function () {
                e101GU(e1U0[b[31780]][b[8087]] + 0x1, e1U0[b[31780]][b[12594]]);
            }, 0x5dc);
        }, e1G0U, e101, function (_4ac) {
            return _4ac[b[1801]] == b[10929] || _4ac[b[1801]] == b[27547];
        });
    }
}, window[b[31798]] = function () {
    ServerLoading[b[671]][b[31665]](e1U0[b[1171]]), window[b[31531]] = !![], window[b[31428]]();
}, window[b[31427]] = function () {
    if (window[b[31426]] && window[b[31434]] && window[b[31532]] && window[b[31533]] && window[b[31534]] && window[b[31536]]) {
        if (!window[b[31313]][b[671]]) {
            console[b[449]](b[31799] + window[b[31313]][b[671]]);
            var ltzhy = wx[b[31800]](),
                pmc = ltzhy[b[1321]] ? ltzhy[b[1321]] : 0x0,
                nkusq = {
                'cdn': window[b[31390]][b[5415]],
                'spareCdn': window[b[31390]][b[26898]],
                'newRegister': window[b[31390]][b[1171]],
                'wxPC': window[b[31390]][b[26900]],
                'wxIOS': window[b[31390]][b[1618]],
                'wxAndroid': window[b[31390]][b[12418]],
                'wxParam': {
                    'limitLoad': window[b[31390]][b[31473]],
                    'benchmarkLevel': window[b[31390]][b[31474]],
                    'wxFrom': window[b[1071]][b[329]] == b[31801] ? 0x1 : 0x0,
                    'wxSDKVersion': window[b[31406]]
                },
                'configType': window[b[31390]][b[13095]],
                'exposeType': window[b[31390]][b[1259]],
                'scene': pmc
            };
            new window[b[31313]](nkusq, window[b[31390]][b[625]], window[b[31507]]);
        }
    }
}, window[b[31428]] = function () {
    if (window[b[31426]] && window[b[31434]] && window[b[31532]] && window[b[31533]] && window[b[31534]] && window[b[31536]] && window[b[31531]] && window[b[31535]]) {
        e11U0G();
        if (!e10GU) {
            e10GU = !![];
            if (!window[b[31313]][b[671]]) window[b[31427]]();
            var j$iq = 0x0,
                xq$i = wx[b[31802]]();
            xq$i && (window[b[31390]][b[31469]] && (j$iq = xq$i[b[835]]), console[b[603]](b[31803] + xq$i[b[835]] + b[31804] + xq$i[b[1828]] + b[31805] + xq$i[b[1830]] + b[31806] + xq$i[b[1829]] + b[31807] + xq$i[b[700]] + b[31808] + xq$i[b[701]]));
            var a_m7oc = {};
            for (const p7coma in e1U0[b[27203]]) {
                a_m7oc[p7coma] = e1U0[b[27203]][p7coma];
            }
            var wd = {
                'channel': window[b[31390]][b[27207]],
                'account': window[b[31390]][b[27208]],
                'userId': window[b[31390]][b[20426]],
                'cdn': window[b[31390]][b[5415]],
                'data': window[b[31390]][b[494]],
                'package': window[b[31390]][b[485]],
                'newRegister': window[b[31390]][b[1171]],
                'pkgName': window[b[31390]][b[27209]],
                'partnerId': window[b[31390]][b[25309]],
                'platform_uid': window[b[31390]][b[27210]],
                'deviceId': window[b[31390]][b[27211]],
                'selectedServer': a_m7oc,
                'configType': window[b[31390]][b[13095]],
                'exposeType': window[b[31390]][b[1259]],
                'debugUsers': window[b[31390]][b[13501]],
                'wxMenuTop': j$iq,
                'wxShield': window[b[31390]][b[1283]],
                'wx_channel': window[b[31390]][b[31609]]
            };
            if (window[b[31675]]) for (var fhzyrl in window[b[31675]]) {
                wd[fhzyrl] = window[b[31675]][fhzyrl];
            }
            window[b[31313]][b[671]][b[27225]](wd);
            if (e1U0[b[27203]] && e1U0[b[27203]][b[12594]]) localStorage[b[1002]](b[31635] + e1U0[b[27209]] + e1U0[b[27208]], e1U0[b[27203]][b[12594]]);
        }
    } else console[b[603]](b[31809] + window[b[31426]] + b[31810] + window[b[31434]] + b[31811] + window[b[31532]] + b[31812] + window[b[31533]] + b[31813] + window[b[31534]] + b[31814] + window[b[31536]] + b[31815] + window[b[31531]] + b[31816] + window[b[31535]]);
};