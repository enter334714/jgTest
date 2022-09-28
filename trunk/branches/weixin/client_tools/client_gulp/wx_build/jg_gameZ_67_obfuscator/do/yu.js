var J = wx.h$;
import gfgp from '../mw/yu.js';
window[J[31511]] = { 'wxVersion': window[J[590]][J[31512]] }, window[J[31513]] = ![], window[J[31514]] = 0x1, window[J[31515]] = 0x1, window[J[31516]] = !![], window[J[31517]] = !![], window[J[31518]] = '', window[J[31519]] = ![], window[J[31356]] = {
    'base_cdn': J[31520],
    'cdn': J[31520]
}, J15Q[J[31521]] = {}, J15Q[J[26029]] = '0', J15Q[J[5027]] = window[J[31511]][J[31385]], J15Q[J[31522]] = '', J15Q['os'] = '1', J15Q[J[31523]] = J[31524], J15Q[J[31525]] = J[31526], J15Q[J[31527]] = J[31528], J15Q[J[31529]] = J[31530], J15Q[J[31531]] = J[31532], J15Q[J[24411]] = '1', J15Q[J[26348]] = '', J15Q[J[26350]] = '', J15Q[J[31533]] = 0x0, J15Q[J[31441]] = {}, J15Q[J[31534]] = parseInt(J15Q[J[24411]]), J15Q[J[26346]] = J15Q[J[24411]], J15Q[J[26342]] = {}, J15Q[J[31535]] = J[31536], J15Q[J[31537]] = ![], J15Q[J[12376]] = J[31538], J15Q[J[26311]] = Date[J[85]](), J15Q[J[11968]] = J[31539], J15Q[J[784]] = '_a', J15Q[J[31376]] = 0x2, J15Q[J[107]] = 0x7c1, J15Q[J[31385]] = window[J[31511]][J[31385]], J15Q[J[808]] = ![], J15Q[J[1148]] = ![], J15Q[J[11266]] = ![], J15Q[J[26031]] = ![], window[J[31540]] = 0x5, window[J[31541]] = ![], window[J[31542]] = ![], window[J[31543]] = ![], window[J[31477]] = ![], window[J[31488]] = ![], window[J[31544]] = ![], window[J[31545]] = ![], window[J[31546]] = ![], window[J[31547]] = ![], window[J[31483]] = null, window[J[684]] = function (hszu3) {
    console[J[514]](J[684], hszu3), wx[J[4547]]({}), wx[J[31548]]({
        'title': J[5744],
        'content': hszu3,
        'success'(c_mekd) {
            if (c_mekd[J[31549]]) console[J[514]](J[31550]);else c_mekd[J[586]] && console[J[514]](J[31551]);
        }
    });
}, window[J[31552]] = function (emkdc_) {
    console[J[514]](J[31553], emkdc_), J1R5QP(), wx[J[31548]]({
        'title': J[5744],
        'content': emkdc_,
        'confirmText': J[31554],
        'cancelText': J[19017],
        'success'(mptd9) {
            if (mptd9[J[31549]]) window[J[31555]]();else mptd9[J[586]] && (console[J[514]](J[31556]), wx[J[26027]]({}));
        }
    });
}, window[J[31557]] = function (q21b) {
    console[J[514]](J[31557], q21b), wx[J[31548]]({
        'title': J[5744],
        'content': q21b,
        'confirmText': J[26479],
        'showCancel': ![],
        'complete'(shnu8) {
            console[J[514]](J[31556]), wx[J[26027]]({});
        }
    });
}, window[J[31558]] = ![], window[J[31559]] = function (wvi$4) {
    window[J[31558]] = !![], wx[J[4546]](wvi$4);
}, window[J[31560]] = function () {
    window[J[31558]] && (window[J[31558]] = ![], wx[J[4547]]({}));
}, window[J[31474]] = function (tyg56f) {
    window[J[31510]][J[164]][J[31474]](tyg56f);
}, window[J[12246]] = function (i$l, x37usz) {
    gfgp[J[12246]](i$l, function (glfy6t) {
        glfy6t && glfy6t[J[12]] ? glfy6t[J[12]][J[1339]] == 0x1 ? x37usz(!![]) : (x37usz(![]), console[J[80]](J[31561] + glfy6t[J[12]][J[31562]])) : console[J[514]](J[12246], glfy6t);
    });
}, window[J[31563]] = function (vji$w) {
    console[J[514]](J[31564], vji$w);
}, window[J[31380]] = function (mc9ep) {}, window[J[31381]] = function ($4jwiv, y46flj, abo) {}, window[J[31565]] = function (k_eaco) {
    console[J[514]](J[31566], k_eaco), window[J[31510]][J[164]][J[31378]](), window[J[31510]][J[164]][J[31379]](), window[J[31510]][J[164]][J[31388]]();
}, window[J[31567]] = function (_ckdoe) {
    window[J[31568]](0xe, J[31569] + _ckdoe), window[J[31552]](J[31570]);
    var epm9dc = {
        'id': window[J[31356]][J[31571]],
        'role': window[J[31356]][J[4338]],
        'level': window[J[31356]][J[31572]],
        'account': window[J[31356]][J[26347]],
        'version': window[J[31356]][J[107]],
        'cdn': window[J[31356]][J[4214]],
        'pkgName': window[J[31356]][J[26348]],
        'gamever': window[J[590]][J[31512]],
        'serverid': window[J[31356]][J[26342]] ? window[J[31356]][J[26342]][J[11442]] : 0x0,
        'systemInfo': window[J[31573]],
        'error': J[31574],
        'stack': _ckdoe ? _ckdoe : J[31570]
    },
        $4jwl = JSON[J[4200]](epm9dc);
    console[J[141]](J[31575] + $4jwl), window[J[31535]]($4jwl);
}, window[J[31568]] = function (gmp95, kaec_o) {
    sendApi(J15Q[J[31527]], J[31576], {
        'game_pkg': J15Q[J[26348]],
        'partner_id': J15Q[J[24411]],
        'server_id': J15Q[J[26342]] && J15Q[J[26342]][J[11442]] > 0x0 ? J15Q[J[26342]][J[11442]] : 0x0,
        'uid': J15Q[J[26347]] > 0x0 ? J15Q[J[26347]] : 0x0,
        'type': gmp95,
        'info': kaec_o
    });
}, window[J[31577]] = function (uh38ns) {
    var dkoec = JSON[J[558]](uh38ns);
    dkoec[J[31578]] = window[J[590]][J[31512]], dkoec[J[31579]] = window[J[31356]][J[26342]] ? window[J[31356]][J[26342]][J[11442]] : 0x0, dkoec[J[31573]] = window[J[31573]];
    var u3zxs = JSON[J[4200]](dkoec);
    console[J[141]](J[31580] + u3zxs), window[J[31535]](u3zxs);
}, window[J[31581]] = function (gf596t, q12br0) {
    var v$4jwi = {
        'id': window[J[31356]][J[31571]],
        'role': window[J[31356]][J[4338]],
        'level': window[J[31356]][J[31572]],
        'account': window[J[31356]][J[26347]],
        'version': window[J[31356]][J[107]],
        'cdn': window[J[31356]][J[4214]],
        'pkgName': window[J[31356]][J[26348]],
        'gamever': window[J[590]][J[31512]],
        'serverid': window[J[31356]][J[26342]] ? window[J[31356]][J[26342]][J[11442]] : 0x0,
        'systemInfo': window[J[31573]],
        'error': gf596t,
        'stack': q12br0
    },
        y6gt5 = JSON[J[4200]](v$4jwi);
    console[J[100]](J[31582] + y6gt5), window[J[31535]](y6gt5);
}, window[J[31535]] = function (pd59cm) {
    if (window[J[31356]][J[31583]] == J[31584]) return;
    var _pemc = J15Q[J[31535]] + J[31585] + J15Q[J[26347]];
    wx[J[509]]({
        'url': _pemc,
        'method': J[31586],
        'data': pd59cm,
        'header': {
            'content-type': J[31587],
            'cache-control': J[31588]
        },
        'success': function (aq0rb1) {
            DEBUG && console[J[514]](J[31589], _pemc, pd59cm, aq0rb1);
        },
        'fail': function (m_ekcd) {
            DEBUG && console[J[514]](J[31589], _pemc, pd59cm, m_ekcd);
        },
        'complete': function () {}
    });
}, window[J[31590]] = function () {
    function ywlj$4() {
        return ((0x1 + Math[J[128]]()) * 0x10000 | 0x0)[J[287]](0x10)[J[529]](0x1);
    }
    return ywlj$4() + ywlj$4() + '-' + ywlj$4() + '-' + ywlj$4() + '-' + ywlj$4() + '+' + ywlj$4() + ywlj$4() + ywlj$4();
}, window[J[31555]] = function () {
    console[J[514]](J[31591]);
    var c_depm = gfgp[J[31592]]();
    J15Q[J[26346]] = c_depm[J[31593]], J15Q[J[31534]] = c_depm[J[31593]], J15Q[J[24411]] = c_depm[J[31593]], J15Q[J[26348]] = c_depm[J[31594]];
    var dmkce = { 'game_ver': J15Q[J[5027]] };
    J15Q[J[26350]] = this[J[31590]](), J1R5PQ({ 'title': J[31595] }), gfgp[J[394]](dmkce, this[J[31596]][J[76]](this));
}, window[J[31596]] = function (hns3u) {
    var qkea_o = hns3u[J[31484]];
    sdkInitRes = hns3u, console[J[514]](J[31597] + qkea_o + J[31598] + (qkea_o == 0x1) + J[31599] + hns3u[J[31512]] + J[31600] + window[J[31511]][J[31385]] + J[31601] + hns3u[J[31602]]);
    if (!hns3u[J[31512]] || window[J[31603]](window[J[31511]][J[31385]], hns3u[J[31512]]) < 0x0) console[J[514]](J[31604]), J15Q[J[31525]] = J[31605], J15Q[J[31527]] = J[31606], J15Q[J[31529]] = J[31607], J15Q[J[4214]] = J[31608], J15Q[J[26028]] = J[31609], J15Q[J[31602]] = hns3u[J[31602]], J15Q[J[808]] = ![];else window[J[31603]](window[J[31511]][J[31385]], hns3u[J[31512]]) == 0x0 ? (console[J[514]](J[31610]), J15Q[J[31525]] = J[31526], J15Q[J[31527]] = J[31528], J15Q[J[31529]] = J[31530], J15Q[J[4214]] = J[31520], J15Q[J[26028]] = J[31609], J15Q[J[31602]] = J[31611], J15Q[J[808]] = !![]) : (console[J[514]](J[31612]), J15Q[J[31525]] = J[31526], J15Q[J[31527]] = J[31528], J15Q[J[31529]] = J[31530], J15Q[J[4214]] = J[31520], J15Q[J[26028]] = J[31609], J15Q[J[31602]] = J[31611], J15Q[J[808]] = ![]);
    J15Q[J[31533]] = config[J[31140]] ? config[J[31140]] : 0x0, this[J[31613]](), this[J[31614]](), window[J[31615]] = 0x5, J1R5PQ({ 'title': J[31616] }), gfgp[J[31617]](this[J[31618]][J[76]](this));
}, window[J[31615]] = 0x5, window[J[31618]] = function (qbr2, yg5t6) {
    if (qbr2 == 0x0 && yg5t6 && yg5t6[J[31232]]) {
        J15Q[J[31619]] = yg5t6[J[31232]], J15Q[J[26489]] = yg5t6[J[26489]];
        var _mpedc = this;
        J1R5PQ({ 'title': J[31620] }), sendApi(J15Q[J[31525]], J[31621], {
            'platform': J15Q[J[31523]],
            'partner_id': J15Q[J[24411]],
            'token': yg5t6[J[31232]],
            'game_pkg': J15Q[J[26348]],
            'deviceId': J15Q[J[26350]],
            'scene': J[31622] + J15Q[J[31533]]
        }, this[J[31623]][J[76]](this), J1PQ5, J1QR);
    } else yg5t6 && yg5t6[J[26546]] && window[J[31615]] > 0x0 && (yg5t6[J[26546]][J[122]](J[31624]) != -0x1 || yg5t6[J[26546]][J[122]](J[31625]) != -0x1 || yg5t6[J[26546]][J[122]](J[31626]) != -0x1 || yg5t6[J[26546]][J[122]](J[31627]) != -0x1 || yg5t6[J[26546]][J[122]](J[31628]) != -0x1 || yg5t6[J[26546]][J[122]](J[31629]) != -0x1) ? (window[J[31615]]--, gfgp[J[31617]](this[J[31618]][J[76]](this))) : (window[J[31568]](0x1, J[31630] + qbr2 + J[31631] + (yg5t6 ? yg5t6[J[26546]] : '')), window[J[31581]](J[31632], JSON[J[4200]]({
        'status': qbr2,
        'data': yg5t6
    })), window[J[31552]](J[31633] + (yg5t6 && yg5t6[J[26546]] ? '，' + yg5t6[J[26546]] : '')));
}, window[J[31623]] = function (o_kqea) {
    if (!o_kqea) {
        window[J[31568]](0x2, J[31634]), window[J[31581]](J[31635], J[31636]), window[J[31552]](J[31637]);
        return;
    }
    if (o_kqea[J[1339]] != J[9744]) {
        window[J[31568]](0x2, J[31638] + o_kqea[J[1339]]), window[J[31581]](J[31635], JSON[J[4200]](o_kqea)), window[J[31552]](J[31639] + o_kqea[J[1339]]);
        return;
    }
    if (o_kqea[J[31640]] == 0x1) {
        window[J[31552]](J[31641]);
        return;
    }
    J15Q[J[19399]] = String(o_kqea[J[26347]]), J15Q[J[26347]] = String(o_kqea[J[26347]]), J15Q[J[26309]] = String(o_kqea[J[26309]]), J15Q[J[26346]] = String(o_kqea[J[26309]]), J15Q[J[26349]] = String(o_kqea[J[26349]]), J15Q[J[31642]] = String(o_kqea[J[11425]]), J15Q[J[31643]] = String(o_kqea[J[921]]), J15Q[J[11425]] = '';
    var ed_ckm = this;
    J1R5PQ({ 'title': J[31644] });
    var _qke = localStorage[J[512]](J[31645] + J15Q[J[26348]] + J15Q[J[26347]]);
    if (_qke && _qke != '') {
        var yl46 = Number(_qke);
        ed_ckm[J[31646]](yl46);
    } else ed_ckm[J[31647]]();
}, window[J[31647]] = function () {
    var n20h = this;
    sendApi(J15Q[J[31525]], J[31648], {
        'partner_id': J15Q[J[24411]],
        'uid': J15Q[J[26347]],
        'version': J15Q[J[5027]],
        'game_pkg': J15Q[J[26348]],
        'device': J15Q[J[26350]]
    }, n20h[J[31649]][J[76]](n20h), J1PQ5, J1QR);
}, window[J[31649]] = function (vj$wi4) {
    if (!vj$wi4) {
        window[J[31568]](0x3, J[31650]), window[J[31552]](J[31650]);
        return;
    }
    if (vj$wi4[J[1339]] != J[9744]) {
        window[J[31568]](0x3, J[31651] + vj$wi4[J[1339]]), window[J[31552]](J[31651] + vj$wi4[J[1339]]);
        return;
    }
    if (!vj$wi4[J[12]] || vj$wi4[J[12]][J[14]] == 0x0) {
        window[J[31568]](0x3, J[31652]), window[J[31552]](J[31653]);
        return;
    }
    this[J[31654]](vj$wi4);
}, window[J[31646]] = function (h8230) {
    var kqo1_ = this;
    sendApi(J15Q[J[31525]], J[31655], {
        'server_id': h8230,
        'time': Date[J[85]]() / 0x3e8
    }, kqo1_[J[31656]][J[76]](kqo1_), J1PQ5, J1QR);
}, window[J[31656]] = function (y$46l) {
    if (!y$46l) {
        window[J[31568]](0x4, J[31657]), this[J[31647]]();
        return;
    }
    if (y$46l[J[1339]] != J[9744]) {
        window[J[31568]](0x4, J[31658] + y$46l[J[1339]]), this[J[31647]]();
        return;
    }
    if (!y$46l[J[12]] || y$46l[J[12]][J[14]] == 0x0) {
        window[J[31568]](0x4, J[31659]), this[J[31647]]();
        return;
    }
    this[J[31654]](y$46l), window[J[31510]] && window[J[31510]][J[164]][J[31481]] && window[J[31510]][J[164]][J[31481]](sdkInitRes[J[31660]], sdkInitRes[J[31661]], sdkInitRes[J[31662]], sdkInitRes[J[31663]], sdkInitRes[J[31664]]);
}, window[J[31654]] = function (s3n8) {
    J15Q[J[694]] = s3n8[J[31665]] != undefined ? s3n8[J[31665]] : 0x0, J15Q[J[26342]] = {
        'server_id': String(s3n8[J[12]][0x0][J[11442]]),
        'server_name': String(s3n8[J[12]][0x0][J[31439]]),
        'entry_ip': s3n8[J[12]][0x0][J[26372]],
        'entry_port': parseInt(s3n8[J[12]][0x0][J[26373]]),
        'status': J15PR(s3n8[J[12]][0x0]),
        'start_time': s3n8[J[12]][0x0][J[31666]],
        'maintain_time': s3n8[J[12]][0x0][J[31407]] ? s3n8[J[12]][0x0][J[31407]] : '',
        'is_recommend': s3n8[J[12]][0x0][J[31403]],
        'cdn': J15Q[J[4214]]
    }, this[J[31667]]();
}, window[J[31667]] = function () {
    if (J15Q[J[694]] == 0x1) {
        var yt6lfg = J15Q[J[26342]][J[113]];
        if (yt6lfg === -0x1 || yt6lfg === 0x0) {
            window[J[31568]](0xf, J[31668] + J15Q[J[26342]]['id'] + J[31669] + J15Q[J[26342]][J[113]]), window[J[31552]](yt6lfg === -0x1 ? J[31670] : J[31671]);
            return;
        }
        J1QRP5(0x0, J15Q[J[26342]][J[11442]]), window[J[31510]][J[164]][J[31489]](J15Q[J[694]]);
    } else window[J[31510]][J[164]][J[31487]](), J1R5QP();
    window[J[31546]] = !![], window[J[31478]](), window[J[31479]]();
}, window[J[31613]] = function () {
    sendApi(J15Q[J[31525]], J[31672], {
        'game_pkg': J15Q[J[26348]],
        'version_name': J15Q[J[31602]]
    }, this[J[31673]][J[76]](this), J1PQ5, J1QR);
}, window[J[31673]] = function (u7sx3z) {
    if (!u7sx3z) {
        window[J[31568]](0x5, J[31674]), window[J[31552]](J[31674]);
        return;
    }
    if (u7sx3z[J[1339]] != J[9744]) {
        window[J[31568]](0x5, J[31675] + u7sx3z[J[1339]]), window[J[31552]](J[31675] + u7sx3z[J[1339]]);
        return;
    }
    if (!u7sx3z[J[12]] || !u7sx3z[J[12]][J[5027]]) {
        window[J[31568]](0x5, J[31676] + (u7sx3z[J[12]] && u7sx3z[J[12]][J[5027]])), window[J[31552]](J[31676] + (u7sx3z[J[12]] && u7sx3z[J[12]][J[5027]]));
        return;
    }
    u7sx3z[J[12]][J[31677]] && u7sx3z[J[12]][J[31677]][J[14]] > 0xa && (J15Q[J[31678]] = u7sx3z[J[12]][J[31677]], J15Q[J[4214]] = u7sx3z[J[12]][J[31677]]), u7sx3z[J[12]][J[5027]] && (J15Q[J[107]] = u7sx3z[J[12]][J[5027]]), console[J[80]](J[26486] + J15Q[J[107]] + J[31679] + J15Q[J[31602]]), window[J[31544]] = !![], window[J[31478]](), window[J[31479]]();
}, window[J[31680]], window[J[31614]] = function () {
    sendApi(J15Q[J[31525]], J[31681], { 'game_pkg': J15Q[J[26348]] }, this[J[31682]][J[76]](this), J1PQ5, J1QR);
}, window[J[31682]] = function (q_o1ka) {
    if (q_o1ka && q_o1ka[J[1339]] === J[9744] && q_o1ka[J[12]]) {
        window[J[31680]] = q_o1ka[J[12]];
        for (var aoce_ in q_o1ka[J[12]]) {
            J15Q[aoce_] = q_o1ka[J[12]][aoce_];
        }
    } else window[J[31568]](0xb, J[31683]), console[J[80]](J[31684] + q_o1ka[J[1339]]);
    window[J[31545]] = !![], window[J[31479]]();
}, window[J[31685]] = function (q10ba, yf6t5, r2b108, co_d, sx7zu3, kce_ao, f6g59t, ljwy4$, _okcde, t5gmp) {
    sx7zu3 = String(sx7zu3);
    var ockd_ = f6g59t,
        n0hr28 = ljwy4$;
    J15Q[J[31521]][sx7zu3] = {
        'productid': sx7zu3,
        'productname': ockd_,
        'productdesc': n0hr28,
        'roleid': q10ba,
        'rolename': yf6t5,
        'rolelevel': r2b108,
        'price': kce_ao,
        'callback': _okcde
    }, sendApi(J15Q[J[31529]], J[31686], {
        'game_pkg': J15Q[J[26348]],
        'server_id': J15Q[J[26342]][J[11442]],
        'server_name': J15Q[J[26342]][J[31439]],
        'level': r2b108,
        'uid': J15Q[J[26347]],
        'role_id': q10ba,
        'role_name': yf6t5,
        'product_id': sx7zu3,
        'product_name': ockd_,
        'product_desc': n0hr28,
        'money': kce_ao,
        'partner_id': J15Q[J[24411]]
    }, toPayCallBack, J1PQ5, J1QR);
}, window[J[31687]] = function (m5gp9t) {
    if (m5gp9t && (m5gp9t[J[31688]] === 0xc8 || m5gp9t[J[1339]] == J[9744])) {
        var m_ed = J15Q[J[31521]][String(m5gp9t[J[31689]])];
        if (m_ed[J[360]]) m_ed[J[360]](m5gp9t[J[31689]], m5gp9t[J[31690]], -0x1);
        gfgp[J[31691]]({
            'cpbill': m5gp9t[J[31690]],
            'productid': m5gp9t[J[31689]],
            'productname': m_ed[J[31692]],
            'productdesc': m_ed[J[31693]],
            'serverid': J15Q[J[26342]][J[11442]],
            'servername': J15Q[J[26342]][J[31439]],
            'roleid': m_ed[J[31694]],
            'rolename': m_ed[J[31695]],
            'rolelevel': m_ed[J[31696]],
            'price': m_ed[J[28188]],
            'extension': JSON[J[4200]]({ 'cp_order_id': m5gp9t[J[31690]] })
        }, function (bao, mtp5d9) {
            m_ed[J[360]] && bao == 0x0 && m_ed[J[360]](m5gp9t[J[31689]], m5gp9t[J[31690]], bao);
            console[J[80]](JSON[J[4200]]({
                'type': J[31697],
                'status': bao,
                'data': m5gp9t,
                'role_name': m_ed[J[31695]]
            }));
            if (bao === 0x0) {} else {
                if (bao === 0x1) {} else {
                    if (bao === 0x2) {}
                }
            }
        });
    } else {
        var pm_cd = m5gp9t ? J[31698] + m5gp9t[J[31688]] + J[31699] + m5gp9t[J[1339]] + J[31700] + m5gp9t[J[80]] : J[31701];
        window[J[31568]](0xd, J[31702] + pm_cd), alert(pm_cd);
    }
}, window[J[31703]] = function () {}, window[J[31704]] = function (de_ok, o1qbar, jwi$l, $ly64j, jw$i4l) {
    gfgp[J[31705]](J15Q[J[26342]][J[11442]], J15Q[J[26342]][J[31439]] || J15Q[J[26342]][J[11442]], de_ok, o1qbar, jwi$l), sendApi(J15Q[J[31525]], J[31706], {
        'game_pkg': J15Q[J[26348]],
        'server_id': J15Q[J[26342]][J[11442]],
        'role_id': de_ok,
        'uid': J15Q[J[26347]],
        'role_name': o1qbar,
        'role_type': $ly64j,
        'level': jwi$l
    });
}, window[J[31707]] = function (dmpce, qako, gptm9, us3hn8, g9pt5, kdoce, y6f, e_dkco, ak_eqo, shn3zu) {
    J15Q[J[31571]] = dmpce, J15Q[J[4338]] = qako, J15Q[J[31572]] = gptm9, gfgp[J[31708]](J15Q[J[26342]][J[11442]], J15Q[J[26342]][J[31439]] || J15Q[J[26342]][J[11442]], dmpce, qako, gptm9), sendApi(J15Q[J[31525]], J[31709], {
        'game_pkg': J15Q[J[26348]],
        'server_id': J15Q[J[26342]][J[11442]],
        'role_id': dmpce,
        'uid': J15Q[J[26347]],
        'role_name': qako,
        'role_type': us3hn8,
        'level': gptm9,
        'evolution': g9pt5
    });
}, window[J[31710]] = function (o_kdc, $ijwv4, hs3nu8, raqo1b, qbk, dcme_k, oce_ka, _dpce, a_eok, cme_pd) {
    J15Q[J[31571]] = o_kdc, J15Q[J[4338]] = $ijwv4, J15Q[J[31572]] = hs3nu8, gfgp[J[31711]](J15Q[J[26342]][J[11442]], J15Q[J[26342]][J[31439]] || J15Q[J[26342]][J[11442]], o_kdc, $ijwv4, hs3nu8), sendApi(J15Q[J[31525]], J[31709], {
        'game_pkg': J15Q[J[26348]],
        'server_id': J15Q[J[26342]][J[11442]],
        'role_id': o_kdc,
        'uid': J15Q[J[26347]],
        'role_name': $ijwv4,
        'role_type': raqo1b,
        'level': hs3nu8,
        'evolution': qbk
    });
}, window[J[31712]] = function (q2r) {}, window[J[31713]] = function (yg4, tfgl6y) {
    gfgp[J[31714]](J[31714], { 'activity_id': tfgl6y }, function (tfy6l) {
        yg4 && yg4(tfy6l);
    });
}, window[J[24409]] = function () {
    gfgp[J[24409]]();
}, window[J[31715]] = function () {
    gfgp[J[24288]] && gfgp[J[24288]]();
}, window[J[31716]] = function (_kaoq, f4gyl, u37zh, n0832h, rb1o, t95fg6, decp_m, cme_p) {
    cme_p = cme_p || J15Q[J[26342]][J[11442]], sendApi(J15Q[J[31525]], J[31717], {
        'phone': _kaoq,
        'role_id': f4gyl,
        'uid': J15Q[J[26347]],
        'game_pkg': J15Q[J[26348]],
        'partner_id': J15Q[J[24411]],
        'server_id': cme_p
    }, decp_m, 0x2, null, function () {
        return !![];
    });
}, window[J[10757]] = function (ly46) {
    window[J[31718]] = ly46, window[J[31718]] && window[J[31719]] && (console[J[80]](J[31720] + window[J[31719]][J[846]]), window[J[31718]](window[J[31719]]), window[J[31719]] = null);
}, window[J[31721]] = function (f6tgly, ekdco_, oc_kde, akboq) {
    window[J[24]](J[31722], {
        'game_pkg': window[J[31356]][J[26348]],
        'role_id': ekdco_,
        'server_id': oc_kde
    }, akboq);
}, window[J[31723]] = function (shu38n, $w4jyl, qao_k) {
    function zsu3x(br1oqa) {
        var e9cm = [],
            f5tg9p = [],
            ytg56f = qao_k || window[J[590]][J[31724]];
        for (var uzns3 in ytg56f) {
            var gtfp5 = Number(uzns3);
            (!shu38n || !shu38n[J[14]] || shu38n[J[122]](gtfp5) != -0x1) && (f5tg9p[J[31]](ytg56f[uzns3]), e9cm[J[31]]([gtfp5, 0x3]));
        }
        window[J[31603]](window[J[31725]], J[31726]) >= 0x0 ? (console[J[514]](J[31727]), gfgp[J[31728]] && gfgp[J[31728]](f5tg9p, function (vji$w4) {
            console[J[514]](J[31729]), console[J[514]](vji$w4);
            if (vji$w4 && vji$w4[J[26546]] == J[31730]) for (var lg6y4f in ytg56f) {
                if (vji$w4[ytg56f[lg6y4f]] == J[31731]) {
                    var qeoak_ = Number(lg6y4f);
                    for (var ok1baq = 0x0; ok1baq < e9cm[J[14]]; ok1baq++) {
                        if (e9cm[ok1baq][0x0] == qeoak_) {
                            e9cm[ok1baq][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[J[31603]](window[J[31725]], J[31732]) >= 0x0 ? wx[J[31733]]({
                'withSubscriptions': !![],
                'success': function (_ecoka) {
                    var q1k = _ecoka[J[31734]][J[31735]];
                    if (q1k) {
                        console[J[514]](J[31736]), console[J[514]](q1k);
                        for (var c_pe in ytg56f) {
                            if (q1k[ytg56f[c_pe]] == J[31731]) {
                                var unsz3h = Number(c_pe);
                                for (var oq_kea = 0x0; oq_kea < e9cm[J[14]]; oq_kea++) {
                                    if (e9cm[oq_kea][0x0] == unsz3h) {
                                        e9cm[oq_kea][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[J[514]](e9cm), $w4jyl && $w4jyl(e9cm);
                    } else console[J[514]](J[31737]), console[J[514]](_ecoka), console[J[514]](e9cm), $w4jyl && $w4jyl(e9cm);
                },
                'fail': function () {
                    console[J[514]](J[31738]), console[J[514]](e9cm), $w4jyl && $w4jyl(e9cm);
                }
            }) : (console[J[514]](J[31739] + window[J[31725]]), console[J[514]](e9cm), $w4jyl && $w4jyl(e9cm));
        })) : (console[J[514]](J[31740] + window[J[31725]]), console[J[514]](e9cm), $w4jyl && $w4jyl(e9cm)), wx[J[31741]](zsu3x);
    }
    wx[J[31742]](zsu3x);
}, window[J[31743]] = {
    'isSuccess': ![],
    'level': J[31744],
    'isCharging': ![]
}, window[J[13368]] = function (bq1kao) {
    wx[J[31745]]({
        'success': function (w$jl4i) {
            var _oed = window[J[31743]];
            _oed[J[31746]] = !![], _oed[J[4314]] = Number(w$jl4i[J[4314]])[J[3932]](0x0), _oed[J[31747]] = w$jl4i[J[31747]], bq1kao && bq1kao(_oed[J[31746]], _oed[J[4314]], _oed[J[31747]]);
        },
        'fail': function (edcok) {
            console[J[514]](J[31748], edcok[J[26546]]);
            var nh8r02 = window[J[31743]];
            bq1kao && bq1kao(nh8r02[J[31746]], nh8r02[J[4314]], nh8r02[J[31747]]);
        }
    });
}, window[J[11823]] = function (uh3szn) {
    wx[J[11823]]({
        'success': function (jw$l4i) {
            uh3szn && uh3szn(!![], jw$l4i);
        },
        'fail': function (kdcem_) {
            uh3szn && uh3szn(![], kdcem_);
        }
    });
}, window[J[11825]] = function (m9edcp) {
    if (m9edcp) wx[J[11825]](m9edcp);
}, window[J[26023]] = function (ckmd_e) {
    wx[J[26023]](ckmd_e);
}, window[J[24]] = function (g9f5pt, qkob1, u83h, f6t, a1qko_, ijw$v, xzsu3, lfj4y6) {
    if (f6t == undefined) f6t = 0x1;
    wx[J[509]]({
        'url': g9f5pt,
        'method': xzsu3 || J[26225],
        'responseType': J[4117],
        'data': qkob1,
        'header': { 'content-type': lfj4y6 || J[31587] },
        'success': function (hu3n82) {
            DEBUG && console[J[514]](J[31749], g9f5pt, info, hu3n82);
            if (hu3n82 && hu3n82[J[26616]] == 0xc8) {
                var oqka_e = hu3n82[J[12]];
                !ijw$v || ijw$v(oqka_e) ? u83h && u83h(oqka_e) : window[J[31750]](g9f5pt, qkob1, u83h, f6t, a1qko_, ijw$v, hu3n82);
            } else window[J[31750]](g9f5pt, qkob1, u83h, f6t, a1qko_, ijw$v, hu3n82);
        },
        'fail': function (ra1) {
            DEBUG && console[J[514]](J[31751], g9f5pt, info, ra1), window[J[31750]](g9f5pt, qkob1, u83h, f6t, a1qko_, ijw$v, ra1);
        },
        'complete': function () {}
    });
}, window[J[31750]] = function (qoek, bq120, fly6tg, j$i4v, yt6lgf, pt5fg, mdt9p5) {
    j$i4v - 0x1 > 0x0 ? setTimeout(function () {
        window[J[24]](qoek, bq120, fly6tg, j$i4v - 0x1, yt6lgf, pt5fg);
    }, 0x3e8) : yt6lgf && yt6lgf(JSON[J[4200]]({
        'url': qoek,
        'response': mdt9p5
    }));
}, window[J[31752]] = function (q1baro, b2r081, arq10, gtp59f, j4w$, zsn3, h2) {
    !arq10 && (arq10 = {});
    var wlj$4 = Math[J[127]](Date[J[85]]() / 0x3e8);
    arq10[J[921]] = wlj$4, arq10[J[31753]] = b2r081;
    var aqo_1k = Object[J[278]](arq10)[J[1153]](),
        shnu = '',
        fy6lt = '';
    for (var h3suzn = 0x0; h3suzn < aqo_1k[J[14]]; h3suzn++) {
        shnu = shnu + (h3suzn == 0x0 ? '' : '&') + aqo_1k[h3suzn] + arq10[aqo_1k[h3suzn]], fy6lt = fy6lt + (h3suzn == 0x0 ? '' : '&') + aqo_1k[h3suzn] + '=' + encodeURIComponent(arq10[aqo_1k[h3suzn]]);
    }
    shnu = shnu + J15Q[J[31531]];
    var wly4j = J[31754] + md5(shnu);
    send(q1baro + '?' + fy6lt + (fy6lt == '' ? '' : '&') + wly4j, null, gtp59f, j4w$, zsn3, h2 || function (vw$j) {
        return vw$j[J[1339]] == J[9744];
    }, null, J[31755]);
}, window[J[31756]] = function (fpg9, oqba1) {
    var me9dp = 0x0;
    J15Q[J[26342]] && (me9dp = J15Q[J[26342]][J[11442]]), sendApi(J15Q[J[31527]], J[31757], {
        'partnerId': J15Q[J[24411]],
        'gamePkg': J15Q[J[26348]],
        'logTime': Math[J[127]](Date[J[85]]() / 0x3e8),
        'platformUid': J15Q[J[26349]],
        'type': fpg9,
        'serverId': me9dp
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[J[31758]] = function (zuhs73) {
    sendApi(J15Q[J[31525]], J[31759], {
        'partner_id': J15Q[J[24411]],
        'uid': J15Q[J[26347]],
        'version': J15Q[J[5027]],
        'game_pkg': J15Q[J[26348]],
        'device': J15Q[J[26350]]
    }, J15QPR, J1PQ5, J1QR);
}, window[J[31760]] = function (t5p9fg) {
    if (t5p9fg && t5p9fg[J[1339]] === J[9744] && t5p9fg[J[12]]) {
        t5p9fg[J[12]][J[5221]]({
            'id': -0x2,
            'name': J[31761]
        }), t5p9fg[J[12]][J[5221]]({
            'id': -0x1,
            'name': J[31762]
        }), J15Q[J[31430]] = t5p9fg[J[12]];
        if (window[J[12423]]) window[J[12423]][J[31440]]();
    } else {
        J15Q[J[31434]] = ![];
        var f9t6 = t5p9fg ? t5p9fg[J[1339]] : '';
        window[J[31568]](0x7, J[31763] + f9t6), window[J[31552]](J[31764] + f9t6);
    }
}, window[J[31765]] = function (qr1a0) {
    sendApi(J15Q[J[31525]], J[31766], {
        'partner_id': J15Q[J[24411]],
        'uid': J15Q[J[26347]],
        'version': J15Q[J[5027]],
        'game_pkg': J15Q[J[26348]],
        'device': J15Q[J[26350]]
    }, J1R5P, J1PQ5, J1QR);
}, window[J[31767]] = function (jl4fy) {
    J15Q[J[31443]] = ![];
    if (jl4fy && jl4fy[J[1339]] === J[9744] && jl4fy[J[12]]) {
        for (var fglty = 0x0; fglty < jl4fy[J[12]][J[14]]; fglty++) {
            jl4fy[J[12]][fglty][J[113]] = J15PR(jl4fy[J[12]][fglty]);
        }
        J15Q[J[31441]][-0x1] = window[J[31768]](jl4fy[J[12]]), window[J[12423]][J[31442]](-0x1);
    } else {
        var lfgy4 = jl4fy ? jl4fy[J[1339]] : '';
        window[J[31568]](0x8, J[31769] + lfgy4), window[J[31552]](J[31770] + lfgy4);
    }
}, window[J[31771]] = function (h2803) {
    sendApi(J15Q[J[31525]], J[31766], {
        'partner_id': J15Q[J[24411]],
        'uid': J15Q[J[26347]],
        'version': J15Q[J[5027]],
        'game_pkg': J15Q[J[26348]],
        'device': J15Q[J[26350]]
    }, h2803, J1PQ5, J1QR);
}, window[J[31772]] = function (b28r0n, hsu7) {
    sendApi(J15Q[J[31525]], J[31773], {
        'partner_id': J15Q[J[24411]],
        'uid': J15Q[J[26347]],
        'version': J15Q[J[5027]],
        'game_pkg': J15Q[J[26348]],
        'device': J15Q[J[26350]],
        'server_group_id': hsu7
    }, J1P5R, J1PQ5, J1QR);
}, window[J[31774]] = function (cepd_m) {
    J15Q[J[31443]] = ![];
    if (cepd_m && cepd_m[J[1339]] === J[9744] && cepd_m[J[12]] && cepd_m[J[12]][J[12]]) {
        var r08 = cepd_m[J[12]][J[31775]],
            pm5g9 = [];
        for (var fl6ytg = 0x0; fl6ytg < cepd_m[J[12]][J[12]][J[14]]; fl6ytg++) {
            cepd_m[J[12]][J[12]][fl6ytg][J[113]] = J15PR(cepd_m[J[12]][J[12]][fl6ytg]), (pm5g9[J[14]] == 0x0 || cepd_m[J[12]][J[12]][fl6ytg][J[113]] != 0x0) && (pm5g9[pm5g9[J[14]]] = cepd_m[J[12]][J[12]][fl6ytg]);
        }
        J15Q[J[31441]][r08] = window[J[31768]](pm5g9), window[J[12423]][J[31442]](r08);
    } else {
        var ptm9 = cepd_m ? cepd_m[J[1339]] : '';
        window[J[31568]](0x9, J[31776] + ptm9), window[J[31552]](J[31777] + ptm9);
    }
}, window[J[31778]] = function (q01r2b) {
    sendApi(J15Q[J[31525]], J[31779], {
        'partner_id': J15Q[J[24411]],
        'uid': J15Q[J[26347]],
        'version': J15Q[J[5027]],
        'game_pkg': J15Q[J[26348]],
        'device': J15Q[J[26350]]
    }, reqServerRecommendCallBack, J1PQ5, J1QR);
}, window[J[31780]] = function (h28r0) {
    J15Q[J[31443]] = ![];
    if (h28r0 && h28r0[J[1339]] === J[9744] && h28r0[J[12]]) {
        for (var i$wl = 0x0; i$wl < h28r0[J[12]][J[14]]; i$wl++) {
            h28r0[J[12]][i$wl][J[113]] = J15PR(h28r0[J[12]][i$wl]);
        }
        J15Q[J[31441]][-0x2] = window[J[31768]](h28r0[J[12]]), window[J[12423]][J[31442]](-0x2);
    } else {
        var gf6t5y = h28r0 ? h28r0[J[1339]] : '';
        window[J[31568]](0xa, J[31781] + gf6t5y), alert(J[31782] + gf6t5y);
    }
}, window[J[31768]] = function (mepcd9) {
    return mepcd9;
}, window[J[31783]] = function (o_ekc, hu2n38) {
    o_ekc = o_ekc || J15Q[J[26342]][J[11442]], sendApi(J15Q[J[31525]], J[31784], {
        'type': '4',
        'game_pkg': J15Q[J[26348]],
        'server_id': o_ekc
    }, hu2n38);
}, window[J[31785]] = function (tm9p5d, c_ka, f6gytl, qkea) {
    f6gytl = f6gytl || J15Q[J[26342]][J[11442]], sendApi(J15Q[J[31525]], J[31786], {
        'type': tm9p5d,
        'game_pkg': c_ka,
        'server_id': f6gytl
    }, qkea);
}, window[J[31787]] = function (mp5g, cae_ko) {
    sendApi(J15Q[J[31525]], J[31788], { 'game_pkg': mp5g }, cae_ko);
}, window[J[31789]] = function (hu283n) {
    if (hu283n) {
        if (hu283n[J[113]] == 0x1) {
            if (hu283n[J[31790]] == 0x3) return 0x3;else return hu283n[J[31790]] == 0x1 ? 0x2 : 0x1;
        } else return hu283n[J[113]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[J[31791]] = function (qb1a0r, ywj4) {
    J15Q[J[31792]] = {
        'step': qb1a0r,
        'server_id': ywj4
    };
    var flt = this;
    J1R5PQ({ 'title': J[31793] }), sendApi(J15Q[J[31525]], J[31794], {
        'partner_id': J15Q[J[24411]],
        'uid': J15Q[J[26347]],
        'game_pkg': J15Q[J[26348]],
        'server_id': ywj4,
        'platform': J15Q[J[26309]],
        'platform_uid': J15Q[J[26349]],
        'check_login_time': J15Q[J[31643]],
        'check_login_sign': J15Q[J[31642]],
        'version_name': J15Q[J[31602]]
    }, J1QR5P, J1PQ5, J1QR, function (shuz) {
        return shuz[J[1339]] == J[9744] || shuz[J[80]] == J[31795] || shuz[J[80]] == J[31796];
    });
}, window[J[31797]] = function (yljw4) {
    var kao1 = this;
    if (yljw4 && yljw4[J[1339]] === J[9744] && yljw4[J[12]]) {
        var qoak1_ = J15Q[J[26342]];
        qoak1_[J[31798]] = J15Q[J[31534]], qoak1_[J[11425]] = String(yljw4[J[12]][J[31799]]), qoak1_[J[26311]] = parseInt(yljw4[J[12]][J[921]]);
        if (yljw4[J[12]][J[26310]]) qoak1_[J[26310]] = parseInt(yljw4[J[12]][J[26310]]);else qoak1_[J[26310]] = parseInt(yljw4[J[12]][J[11442]]);
        qoak1_[J[31800]] = 0x0, qoak1_[J[4214]] = J15Q[J[31678]], qoak1_[J[31801]] = yljw4[J[12]][J[31802]], qoak1_[J[31803]] = yljw4[J[12]][J[31803]];
        if (yljw4[J[12]][J[26314]]) qoak1_[J[26314]] = parseInt(yljw4[J[12]][J[26314]]);
        console[J[514]](J[31804] + JSON[J[4200]](qoak1_[J[31803]])), J15Q[J[694]] == 0x1 && qoak1_[J[31803]] && qoak1_[J[31803]][J[31805]] == 0x1 && (J15Q[J[31386]] = 0x1, window[J[31510]][J[164]][J[31491]]()), J1QPR5();
    } else {
        if (J15Q[J[31792]][J[6818]] >= 0x3) {
            var ftg5y = yljw4 ? yljw4[J[1339]] : '';
            window[J[31568]](0xc, J[31806] + ftg5y), J1QR(JSON[J[4200]](yljw4)), window[J[31552]](J[31807] + ftg5y);
        } else sendApi(J15Q[J[31525]], J[31621], {
            'platform': J15Q[J[31523]],
            'partner_id': J15Q[J[24411]],
            'token': J15Q[J[31619]],
            'game_pkg': J15Q[J[26348]],
            'deviceId': J15Q[J[26350]],
            'scene': J[31622] + J15Q[J[31533]]
        }, function (aeok_q) {
            if (!aeok_q || aeok_q[J[1339]] != J[9744]) {
                window[J[31552]](J[31639] + aeok_q && aeok_q[J[1339]]);
                return;
            }
            J15Q[J[31642]] = String(aeok_q[J[11425]]), J15Q[J[31643]] = String(aeok_q[J[921]]), setTimeout(function () {
                J1QRP5(J15Q[J[31792]][J[6818]] + 0x1, J15Q[J[31792]][J[11442]]);
            }, 0x5dc);
        }, J1PQ5, J1QR, function (arb1q) {
            return arb1q[J[1339]] == J[9744] || arb1q[J[1339]] == J[26694];
        });
    }
}, window[J[31808]] = function () {
    ServerLoading[J[164]][J[31489]](J15Q[J[694]]), window[J[31541]] = !![], window[J[31479]]();
}, window[J[31478]] = function () {
    if (window[J[31542]] && window[J[31543]] && window[J[31477]] && window[J[31488]] && window[J[31544]] && window[J[31546]]) {
        if (!window[J[30824]][J[164]]) {
            console[J[514]](J[31809] + window[J[30824]][J[164]]);
            var cp9dm = wx[J[26009]](),
                _ep = cp9dm[J[846]] ? cp9dm[J[846]] : 0x0,
                i$4j = {
                'cdn': window[J[31356]][J[4214]],
                'spareCdn': window[J[31356]][J[26028]],
                'newRegister': window[J[31356]][J[694]],
                'wxPC': window[J[31356]][J[26031]],
                'wxIOS': window[J[31356]][J[1148]],
                'wxAndroid': window[J[31356]][J[11266]],
                'wxParam': {
                    'limitLoad': window[J[31356]][J[31810]],
                    'benchmarkLevel': window[J[31356]][J[31811]],
                    'wxFrom': window[J[590]][J[31140]] == J[31812] ? 0x1 : 0x0,
                    'wxSDKVersion': window[J[31725]]
                },
                'configType': window[J[31356]][J[11968]],
                'exposeType': window[J[31356]][J[784]],
                'scene': _ep
            };
            new window[J[30824]](i$4j, window[J[31356]][J[107]], window[J[31518]]);
        }
    }
}, window[J[31479]] = function () {
    if (window[J[31542]] && window[J[31543]] && window[J[31477]] && window[J[31488]] && window[J[31544]] && window[J[31546]] && window[J[31541]] && window[J[31545]]) {
        J1R5QP();
        if (!J1QP5) {
            J1QP5 = !![];
            if (!window[J[30824]][J[164]]) window[J[31478]]();
            var t5gf69 = 0x0,
                xs = wx[J[31813]]();
            xs && (window[J[31356]][J[31814]] && (t5gf69 = xs[J[344]]), console[J[80]](J[31815] + xs[J[344]] + J[31816] + xs[J[1366]] + J[31817] + xs[J[1368]] + J[31818] + xs[J[1367]] + J[31819] + xs[J[194]] + J[31820] + xs[J[195]]));
            var u823nh = {};
            for (const dko_ec in J15Q[J[26342]]) {
                u823nh[dko_ec] = J15Q[J[26342]][dko_ec];
            }
            var lyg6f4 = {
                'channel': window[J[31356]][J[26346]],
                'account': window[J[31356]][J[26347]],
                'userId': window[J[31356]][J[19399]],
                'cdn': window[J[31356]][J[4214]],
                'data': window[J[31356]][J[12]],
                'package': window[J[31356]][J[26029]],
                'newRegister': window[J[31356]][J[694]],
                'pkgName': window[J[31356]][J[26348]],
                'partnerId': window[J[31356]][J[24411]],
                'platform_uid': window[J[31356]][J[26349]],
                'deviceId': window[J[31356]][J[26350]],
                'selectedServer': u823nh,
                'configType': window[J[31356]][J[11968]],
                'exposeType': window[J[31356]][J[784]],
                'debugUsers': window[J[31356]][J[12376]],
                'wxMenuTop': t5gf69,
                'wxShield': window[J[31356]][J[808]],
                'wx_channel': window[J[31356]][J[26489]]
            };
            if (window[J[31680]]) for (var bn82r0 in window[J[31680]]) {
                lyg6f4[bn82r0] = window[J[31680]][bn82r0];
            }
            window[J[30824]][J[164]][J[26364]](lyg6f4);
            if (J15Q[J[26342]] && J15Q[J[26342]][J[11442]]) localStorage[J[517]](J[31645] + J15Q[J[26348]] + J15Q[J[26347]], J15Q[J[26342]][J[11442]]);
        }
    } else console[J[80]](J[31821] + window[J[31542]] + J[31822] + window[J[31543]] + J[31823] + window[J[31477]] + J[31824] + window[J[31488]] + J[31825] + window[J[31544]] + J[31826] + window[J[31546]] + J[31827] + window[J[31541]] + J[31828] + window[J[31545]]);
};