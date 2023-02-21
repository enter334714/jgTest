var c = wx.$a;
import gfnjxv from '../a3a4/eeesdk.js';
window[c[27608]] = { 'wxVersion': window[c[1082]][c[35062]] }, window[c[35176]] = ![], window[c[35177]] = 0x1, window[c[35178]] = 0x1, window[c[35179]] = !![], window[c[35180]] = !![], window[c[35181]] = '', window[c[35182]] = ![], window[c[5021]] = {
    'base_cdn': c[35183],
    'cdn': c[35183]
}, j1E[c[35184]] = {}, j1E[c[492]] = '0', j1E[c[5848]] = window[c[27608]][c[35185]], j1E[c[35146]] = '', j1E['os'] = '1', j1E[c[35186]] = c[35187], j1E[c[35188]] = c[35189], j1E[c[35190]] = c[35191], j1E[c[35192]] = c[35193], j1E[c[35194]] = c[35195], j1E[c[13274]] = '1', j1E[c[27998]] = '', j1E[c[28000]] = '', j1E[c[35196]] = 0x0, j1E[c[35197]] = {}, j1E[c[35198]] = parseInt(j1E[c[13274]]), j1E[c[13283]] = j1E[c[13274]], j1E[c[27992]] = {}, j1E[c[35072]] = c[35199], j1E[c[35200]] = ![], j1E[c[13421]] = c[35201], j1E[c[27952]] = Date[c[616]](), j1E[c[5020]] = c[35202], j1E[c[1271]] = '_a', j1E[c[28150]] = '', j1E[c[35203]] = 0x2, j1E[c[633]] = 0x7c1, j1E[c[35185]] = window[c[27608]][c[35185]], j1E[c[1293]] = ![], j1E[c[1646]] = ![], j1E[c[12218]] = ![], j1E[c[27642]] = ![], window[c[35204]] = 0x5, window[c[35205]] = ![], window[c[35102]] = ![], window[c[35110]] = ![], window[c[35206]] = ![], window[c[35207]] = ![], window[c[35208]] = ![], window[c[35209]] = ![], window[c[35210]] = ![], window[c[35211]] = ![], window[c[35212]] = null, window[c[1174]] = function (q8t) {
    console[c[456]](c[1174], q8t), wx[c[5361]]({}), wx[c[35090]]({
        'title': c[6599],
        'content': q8t,
        'success'(o0bc4y) {
            if (o0bc4y[c[35213]]) console[c[456]](c[35214]);else o0bc4y[c[1078]] && console[c[456]](c[35215]);
        }
    });
}, window[c[35216]] = function (w0_o) {
    console[c[456]](c[35217], w0_o), jM1EB(), wx[c[35090]]({
        'title': c[6599],
        'content': w0_o,
        'confirmText': c[35218],
        'cancelText': c[20321],
        'success'(u_eg2w) {
            if (u_eg2w[c[35213]]) window[c[35116]]();else u_eg2w[c[1078]] && (console[c[456]](c[35219]), wx[c[27639]]({}));
        }
    });
}, window[c[35220]] = function (rqt87) {
    console[c[456]](c[35220], rqt87), wx[c[35090]]({
        'title': c[6599],
        'content': rqt87,
        'confirmText': c[28134],
        'showCancel': ![],
        'complete'(u1eg2) {
            console[c[456]](c[35219]), wx[c[27639]]({});
        }
    });
}, window[c[35221]] = ![], window[c[35222]] = function (mlyc) {
    window[c[35221]] = !![], wx[c[5360]](mlyc);
}, window[c[35223]] = function () {
    window[c[35221]] && (window[c[35221]] = ![], wx[c[5361]]({}));
}, window[c[35224]] = function (_4oewu) {
    window[c[35078]][c[679]][c[35224]](_4oewu);
}, window[c[13290]] = function (vznj, qdr85) {
    gfnjxv[c[13290]](vznj, function (cylm$b) {
        cylm$b && cylm$b[c[501]] ? cylm$b[c[501]][c[1885]] == 0x1 ? qdr85(!![]) : (qdr85(![]), console[c[611]](c[35225] + cylm$b[c[501]][c[35226]])) : console[c[456]](c[13290], cylm$b);
    });
}, window[c[35227]] = function (khdv) {
    console[c[456]](c[35228], khdv);
}, window[c[35229]] = function (uo4_e) {}, window[c[35230]] = function (ge4u_, vjhzsn, lymc) {}, window[c[35231]] = function (vsxfn) {
    console[c[456]](c[35232], vsxfn), window[c[35078]][c[679]][c[35233]](), window[c[35078]][c[679]][c[35234]](), window[c[35078]][c[679]][c[35235]](), window[c[35236]]();
}, window[c[35237]] = function (zhvjk) {
    window[c[35238]](0xe, c[35239] + zhvjk), window[c[35216]](c[35240]);
    var nfsxv = {
        'id': window[c[5021]][c[35067]],
        'role': window[c[5021]][c[5150]],
        'level': window[c[5021]][c[35068]],
        'account': window[c[5021]][c[27996]],
        'version': window[c[5021]][c[633]],
        'cdn': window[c[5021]][c[5018]],
        'pkgName': window[c[5021]][c[27998]],
        'gamever': window[c[1082]][c[35062]],
        'serverid': window[c[5021]][c[27992]] ? window[c[5021]][c[27992]][c[12390]] : 0x0,
        'systemInfo': window[c[35069]],
        'error': c[35241],
        'stack': zhvjk ? zhvjk : c[35240]
    },
        nvjkz = JSON[c[5004]](nfsxv);
    console[c[499]](c[35242] + nvjkz), window[c[35072]](nvjkz);
}, window[c[35238]] = function (vsnjh, sjf1n) {
    sendApi(j1E[c[35190]], c[35243], {
        'game_pkg': j1E[c[27998]],
        'partner_id': j1E[c[13274]],
        'server_id': j1E[c[27992]] && j1E[c[27992]][c[12390]] > 0x0 ? j1E[c[27992]][c[12390]] : 0x0,
        'uid': j1E[c[27996]] > 0x0 ? j1E[c[27996]] : 0x0,
        'type': vsnjh,
        'info': sjf1n
    });
}, window[c[35244]] = function (mla$cb) {
    var r7538t = JSON[c[455]](mla$cb);
    r7538t[c[35245]] = window[c[1082]][c[35062]], r7538t[c[35246]] = window[c[5021]][c[27992]] ? window[c[5021]][c[27992]][c[12390]] : 0x0, r7538t[c[35069]] = window[c[35069]];
    var nzshj = JSON[c[5004]](r7538t);
    console[c[499]](c[35247] + nzshj), window[c[35072]](nzshj);
}, window[c[35117]] = function (euw2_g, u1gf) {
    var u12gwe = {
        'id': window[c[5021]][c[35067]],
        'role': window[c[5021]][c[5150]],
        'level': window[c[5021]][c[35068]],
        'account': window[c[5021]][c[27996]],
        'version': window[c[5021]][c[633]],
        'cdn': window[c[5021]][c[5018]],
        'pkgName': window[c[5021]][c[27998]],
        'gamever': window[c[1082]][c[35062]],
        'serverid': window[c[5021]][c[27992]] ? window[c[5021]][c[27992]][c[12390]] : 0x0,
        'systemInfo': window[c[35069]],
        'error': euw2_g,
        'stack': u1gf
    },
        rt735 = JSON[c[5004]](u12gwe);
    console[c[513]](c[35248] + rt735), window[c[35072]](rt735);
}, window[c[35072]] = function (dtqr86) {
    if (window[c[5021]][c[35147]] == c[35249]) return;
    var _2wgu = j1E[c[35072]] + c[35250] + j1E[c[27996]];
    wx[c[1006]]({
        'url': _2wgu,
        'method': c[34994],
        'data': dtqr86,
        'header': {
            'content-type': c[35251],
            'cache-control': c[35252]
        },
        'success': function (drq) {
            DEBUG && console[c[456]](c[35253], _2wgu, dtqr86, drq);
        },
        'fail': function (u1we) {
            DEBUG && console[c[456]](c[35253], _2wgu, dtqr86, u1we);
        },
        'complete': function () {}
    });
}, window[c[35254]] = function () {
    function wo_0e4() {
        return ((0x1 + Math[c[648]]()) * 0x10000 | 0x0)[c[341]](0x10)[c[462]](0x1);
    }
    return wo_0e4() + wo_0e4() + '-' + wo_0e4() + '-' + wo_0e4() + '-' + wo_0e4() + '+' + wo_0e4() + wo_0e4() + wo_0e4();
}, window[c[35116]] = function () {
    console[c[456]](c[35255]);
    var zh6d = gfnjxv[c[33508]]();
    j1E[c[13283]] = zh6d[c[35256]], j1E[c[35198]] = zh6d[c[35256]], j1E[c[13274]] = zh6d[c[35256]], j1E[c[27998]] = zh6d[c[35257]];
    var g1xs2f = { 'game_ver': j1E[c[5848]] };
    j1E[c[28000]] = this[c[35254]](), jM1BE({ 'title': c[35258] }), gfnjxv[c[896]](g1xs2f, this[c[35259]][c[311]](this));
}, window[c[35259]] = function (xsg2) {
    var zd86qk = xsg2[c[35260]];
    sdkInitRes = xsg2, console[c[456]](c[35261] + zd86qk + c[35262] + (zd86qk == 0x1) + c[35263] + xsg2[c[35062]] + c[35264] + window[c[27608]][c[35185]]);
    if (!xsg2[c[35062]] || window[c[35081]](window[c[27608]][c[35185]], xsg2[c[35062]]) < 0x0) console[c[456]](c[35265]), j1E[c[35188]] = c[35266], j1E[c[35190]] = c[35267], j1E[c[35192]] = c[35268], j1E[c[5018]] = c[35269], j1E[c[27640]] = c[35270], j1E[c[5022]] = c[35271], j1E[c[1293]] = ![];else window[c[35081]](window[c[27608]][c[35185]], xsg2[c[35062]]) == 0x0 ? (console[c[456]](c[35272]), j1E[c[35188]] = c[35189], j1E[c[35190]] = c[35191], j1E[c[35192]] = c[35193], j1E[c[5018]] = c[35273], j1E[c[27640]] = c[35270], j1E[c[5022]] = c[35274], j1E[c[1293]] = !![]) : (console[c[456]](c[35275]), j1E[c[35188]] = c[35189], j1E[c[35190]] = c[35191], j1E[c[35192]] = c[35193], j1E[c[5018]] = c[35273], j1E[c[27640]] = c[35270], j1E[c[5022]] = c[35274], j1E[c[1293]] = ![]);
    j1E[c[35196]] = config[c[336]] ? config[c[336]] : 0x0, this[c[35276]](), this[c[35277]](), window[c[35278]] = 0x5, jM1BE({ 'title': c[35279] }), gfnjxv[c[34989]](this[c[35280]][c[311]](this));
}, window[c[35278]] = 0x5, window[c[35280]] = function (o4_e, vsnfxj) {
    if (o4_e == 0x0 && vsnfxj && vsnfxj[c[487]]) {
        j1E[c[35281]] = vsnfxj[c[487]], j1E[c[28148]] = vsnfxj[c[28148]], j1E[c[28143]] = vsnfxj[c[28143]], j1E[c[28149]] = vsnfxj[c[28149]], j1E[c[28142]] = vsnfxj[c[28142]];
        var nz6vhk = this;
        jM1BE({ 'title': c[35282] }), sendApi(j1E[c[35188]], c[35283], {
            'platform': j1E[c[35186]],
            'partner_id': j1E[c[13274]],
            'token': vsnfxj[c[487]],
            'game_pkg': j1E[c[27998]],
            'deviceId': j1E[c[28000]],
            'scene': c[35284] + j1E[c[35196]]
        }, this[c[35285]][c[311]](this), jBE1, jEM);
    } else vsnfxj && vsnfxj[c[28205]] && window[c[35278]] > 0x0 && (vsnfxj[c[28205]][c[404]](c[35286]) != -0x1 || vsnfxj[c[28205]][c[404]](c[35287]) != -0x1 || vsnfxj[c[28205]][c[404]](c[35288]) != -0x1 || vsnfxj[c[28205]][c[404]](c[35289]) != -0x1 || vsnfxj[c[28205]][c[404]](c[35290]) != -0x1 || vsnfxj[c[28205]][c[404]](c[35291]) != -0x1) ? (window[c[35278]]--, gfnjxv[c[34989]](this[c[35280]][c[311]](this))) : (window[c[35238]](0x1, c[35292] + o4_e + c[35293] + (vsnfxj ? vsnfxj[c[28205]] : '')), window[c[35117]](c[35294], JSON[c[5004]]({
        'status': o4_e,
        'data': vsnfxj
    })), window[c[35216]](c[35295] + (vsnfxj && vsnfxj[c[28205]] ? '，' + vsnfxj[c[28205]] : '')));
}, window[c[35285]] = function (_oy04) {
    if (!_oy04) {
        window[c[35238]](0x2, c[35296]), window[c[35117]](c[35297], c[35298]), window[c[35216]](c[35299]);
        return;
    }
    if (_oy04[c[1885]] != c[10692]) {
        window[c[35238]](0x2, c[35300] + _oy04[c[1885]]), window[c[35117]](c[35297], JSON[c[5004]](_oy04)), window[c[35216]](c[35301] + _oy04[c[1885]]);
        return;
    }
    if (_oy04[c[35302]] == 0x1) {
        window[c[35216]](c[35303]);
        return;
    }
    j1E[c[13272]] = String(_oy04[c[27996]]), j1E[c[27996]] = String(_oy04[c[27996]]), j1E[c[27950]] = String(_oy04[c[27950]]), j1E[c[13283]] = String(_oy04[c[27950]]), j1E[c[27999]] = String(_oy04[c[27999]]), j1E[c[35304]] = String(_oy04[c[12373]]), j1E[c[35305]] = String(_oy04[c[1423]]), j1E[c[12373]] = '';
    var ueo4w_ = this;
    jM1BE({ 'title': c[35306] });
    var fg1xs = localStorage[c[1009]](c[35307] + j1E[c[27998]] + j1E[c[27996]]);
    if (fg1xs && fg1xs != '') {
        var jnkhz = Number(fg1xs);
        ueo4w_[c[35308]](jnkhz);
    } else ueo4w_[c[35309]]();
}, window[c[35309]] = function () {
    var e40w = this;
    sendApi(j1E[c[35188]], c[35310], {
        'partner_id': j1E[c[13274]],
        'uid': j1E[c[27996]],
        'version': j1E[c[5848]],
        'game_pkg': j1E[c[27998]],
        'device': j1E[c[28000]]
    }, e40w[c[35311]][c[311]](e40w), jBE1, jEM);
}, window[c[35311]] = function (lma$) {
    if (!lma$) {
        window[c[35238]](0x3, c[35312]), window[c[35216]](c[35312]);
        return;
    }
    if (lma$[c[1885]] != c[10692]) {
        window[c[35238]](0x3, c[35313] + lma$[c[1885]]), window[c[35216]](c[35313] + lma$[c[1885]]);
        return;
    }
    if (!lma$[c[501]] || lma$[c[501]][c[322]] == 0x0) {
        window[c[35238]](0x3, c[35314]), window[c[35216]](c[35315]);
        return;
    }
    this[c[35316]](lma$);
}, window[c[35308]] = function (y4o_e0) {
    var ma9l = this;
    sendApi(j1E[c[35188]], c[35317], {
        'server_id': y4o_e0,
        'time': Date[c[616]]() / 0x3e8
    }, ma9l[c[35318]][c[311]](ma9l), jBE1, jEM);
}, window[c[35318]] = function (y$bmc) {
    if (!y$bmc) {
        window[c[35238]](0x4, c[35319]), this[c[35309]]();
        return;
    }
    if (y$bmc[c[1885]] != c[10692]) {
        window[c[35238]](0x4, c[35320] + y$bmc[c[1885]]), this[c[35309]]();
        return;
    }
    if (!y$bmc[c[501]] || y$bmc[c[501]][c[322]] == 0x0) {
        window[c[35238]](0x4, c[35321]), this[c[35309]]();
        return;
    }
    this[c[35316]](y$bmc);
}, window[c[35316]] = function (ri73p) {
    j1E[c[1185]] = ri73p[c[35322]] != undefined ? ri73p[c[35322]] : 0x0, j1E[c[27992]] = {
        'server_id': String(ri73p[c[501]][0x0][c[12390]]),
        'server_name': String(ri73p[c[501]][0x0][c[27997]]),
        'entry_ip': ri73p[c[501]][0x0][c[28022]],
        'entry_port': parseInt(ri73p[c[501]][0x0][c[28023]]),
        'status': j1BM(ri73p[c[501]][0x0]),
        'start_time': ri73p[c[501]][0x0][c[35323]],
        'maintain_time': ri73p[c[501]][0x0][c[35324]] ? ri73p[c[501]][0x0][c[35324]] : '',
        'is_recommend': ri73p[c[501]][0x0][c[35325]],
        'cdn': j1E[c[5018]]
    }, this[c[35326]](), window[c[35078]] && window[c[35078]][c[679]][c[35327]] && window[c[35078]][c[679]][c[35327]](sdkInitRes[c[35328]], sdkInitRes[c[35329]], sdkInitRes[c[35330]], sdkInitRes[c[35331]], sdkInitRes[c[35332]]);
}, window[c[35326]] = function () {
    var gu2_w = this;
    if (j1E[c[1185]] == 0x1) {
        var j1xfs2 = j1E[c[27992]][c[638]];
        if (j1xfs2 === -0x1 || j1xfs2 === 0x0) {
            window[c[35238]](0xf, c[35333] + j1E[c[27992]]['id'] + c[35334] + j1E[c[27992]][c[638]]), window[c[35216]](j1xfs2 === -0x1 ? c[35335] : c[35336]);
            return;
        }
        jEMB1(0x0, j1E[c[27992]][c[12390]]), window[c[35078]][c[679]][c[35337]](j1E[c[1185]]);
    } else window[c[35078]][c[679]][c[35338]](), jM1EB();
    window[c[35210]] = !![], window[c[35339]](), window[c[35103]](), window[c[35104]]();
}, window[c[35276]] = function () {
    sendApi(j1E[c[35188]], c[35340], {
        'game_pkg': j1E[c[27998]],
        'version_name': j1E[c[5022]]
    }, this[c[35341]][c[311]](this), jBE1, jEM);
}, window[c[35341]] = function (gwuf21) {
    if (!gwuf21) {
        window[c[35238]](0x5, c[35342]), window[c[35216]](c[35342]);
        return;
    }
    if (gwuf21[c[1885]] != c[10692]) {
        window[c[35238]](0x5, c[35343] + gwuf21[c[1885]]), window[c[35216]](c[35343] + gwuf21[c[1885]]);
        return;
    }
    if (!gwuf21[c[501]] || !gwuf21[c[501]][c[5848]]) {
        window[c[35238]](0x5, c[35344] + (gwuf21[c[501]] && gwuf21[c[501]][c[5848]])), window[c[35216]](c[35344] + (gwuf21[c[501]] && gwuf21[c[501]][c[5848]]));
        return;
    }
    gwuf21[c[501]][c[35345]] && gwuf21[c[501]][c[35345]][c[322]] > 0xa && (j1E[c[35346]] = gwuf21[c[501]][c[35345]], j1E[c[5018]] = gwuf21[c[501]][c[35345]]), gwuf21[c[501]][c[5848]] && (j1E[c[633]] = gwuf21[c[501]][c[5848]]), console[c[611]](c[28145] + j1E[c[633]] + c[35347] + j1E[c[5022]]), window[c[35208]] = !![], window[c[35103]](), window[c[35104]]();
}, window[c[35348]], window[c[35277]] = function () {
    sendApi(j1E[c[35188]], c[35349], { 'game_pkg': j1E[c[27998]] }, this[c[35350]][c[311]](this), jBE1, jEM);
}, window[c[35350]] = function (vhnzsj) {
    if (vhnzsj && vhnzsj[c[1885]] === c[10692] && vhnzsj[c[501]]) {
        window[c[35348]] = vhnzsj[c[501]];
        for (var vsnjf in vhnzsj[c[501]]) {
            j1E[vsnjf] = vhnzsj[c[501]][vsnjf];
        }
    } else window[c[35238]](0xb, c[35351]), console[c[611]](c[35352] + vhnzsj[c[1885]]);
    window[c[35209]] = !![], window[c[35339]](), window[c[35104]]();
}, window[c[35339]] = function () {
    if (!window[c[35210]] || !window[c[35209]]) return;
    var h6z = j1E[c[1185]] == 0x1,
        m$lbcy = j1E[c[1293]],
        xnfsj1 = j1E[c[27877]] && j1E[c[27877]] > 0x0;
    if (m$lbcy || h6z && xnfsj1) {
        var r53pt = j1E[c[27878]],
            c40boy = r53pt && r53pt[c[322]] == 0x9;
        c40boy && (window[c[30570]] = r53pt);
        var xs12jf = j1E[c[27879]],
            vnfj = xs12jf && xs12jf[c[444]]('#')[c[322]] == 0x4;
        vnfj && (window[c[30571]] = xs12jf);
    }
}, window[c[35236]] = function () {
    window[c[30570]] = null, window[c[30571]] = null;
}, window[c[35353]] = function (pi7, s1fjn, uew_, vjhzns, c0_o4, qd5r8, wu_2, qz8k6, sjzvn, rp3t7) {
    c0_o4 = String(c0_o4);
    var i3rp75 = wu_2,
        d6trq = qz8k6;
    j1E[c[35184]][c0_o4] = {
        'productid': c0_o4,
        'productname': i3rp75,
        'productdesc': d6trq,
        'roleid': pi7,
        'rolename': s1fjn,
        'rolelevel': uew_,
        'price': qd5r8,
        'callback': sjzvn
    }, sendApi(j1E[c[35192]], c[35354], {
        'game_pkg': j1E[c[27998]],
        'server_id': j1E[c[27992]][c[12390]],
        'server_name': j1E[c[27992]][c[27997]],
        'level': uew_,
        'uid': j1E[c[27996]],
        'role_id': pi7,
        'role_name': s1fjn,
        'product_id': c0_o4,
        'product_name': i3rp75,
        'product_desc': d6trq,
        'money': qd5r8,
        'partner_id': j1E[c[13274]]
    }, toPayCallBack, jBE1, jEM);
}, window[c[35355]] = function (sfx1nj) {
    if (sfx1nj && (sfx1nj[c[35356]] === 0xc8 || sfx1nj[c[1885]] == c[10692])) {
        var _ue4ow = j1E[c[35184]][String(sfx1nj[c[35357]])];
        if (_ue4ow[c[861]]) _ue4ow[c[861]](sfx1nj[c[35357]], sfx1nj[c[35358]], -0x1);
        gfnjxv[c[35024]]({
            'cpbill': sfx1nj[c[35358]],
            'productid': sfx1nj[c[35357]],
            'productname': _ue4ow[c[35359]],
            'productdesc': _ue4ow[c[35360]],
            'serverid': j1E[c[27992]][c[12390]],
            'servername': j1E[c[27992]][c[27997]],
            'roleid': _ue4ow[c[13278]],
            'rolename': _ue4ow[c[13279]],
            'rolelevel': _ue4ow[c[35361]],
            'price': _ue4ow[c[29969]],
            'extension': JSON[c[5004]]({ 'cp_order_id': sfx1nj[c[35358]] })
        }, function ($mbcly, sjvzn) {
            _ue4ow[c[861]] && $mbcly == 0x0 && _ue4ow[c[861]](sfx1nj[c[35357]], sfx1nj[c[35358]], $mbcly);
            console[c[611]](JSON[c[5004]]({
                'type': c[35362],
                'status': $mbcly,
                'data': sfx1nj,
                'role_name': _ue4ow[c[13279]]
            }));
            if ($mbcly === 0x0) {} else {
                if ($mbcly === 0x1) {} else {
                    if ($mbcly === 0x2) {}
                }
            }
        });
    } else {
        var _40eoy = sfx1nj ? c[35363] + sfx1nj[c[35356]] + c[35364] + sfx1nj[c[1885]] + c[35365] + sfx1nj[c[611]] : c[35366];
        window[c[35238]](0xd, c[35367] + _40eoy), alert(_40eoy);
    }
}, window[c[35368]] = function () {}, window[c[35369]] = function (ew04, h6kq, eg2w1, o_ew4u, by$cl0) {
    gfnjxv[c[35050]](j1E[c[27992]][c[12390]], j1E[c[27992]][c[27997]] || j1E[c[27992]][c[12390]], ew04, h6kq, eg2w1), sendApi(j1E[c[35188]], c[35370], {
        'game_pkg': j1E[c[27998]],
        'server_id': j1E[c[27992]][c[12390]],
        'role_id': ew04,
        'uid': j1E[c[27996]],
        'role_name': h6kq,
        'role_type': o_ew4u,
        'level': eg2w1
    });
}, window[c[35371]] = function (rt86qd, ew2_u, ns1fjx, zdkh6v, t8rqd, ybmc, u_owe4, yb0c4o, r7p5i, xfns) {
    j1E[c[35067]] = rt86qd, j1E[c[5150]] = ew2_u, j1E[c[35068]] = ns1fjx, gfnjxv[c[35051]](j1E[c[27992]][c[12390]], j1E[c[27992]][c[27997]] || j1E[c[27992]][c[12390]], rt86qd, ew2_u, ns1fjx), sendApi(j1E[c[35188]], c[35372], {
        'game_pkg': j1E[c[27998]],
        'server_id': j1E[c[27992]][c[12390]],
        'role_id': rt86qd,
        'uid': j1E[c[27996]],
        'role_name': ew2_u,
        'role_type': zdkh6v,
        'level': ns1fjx,
        'evolution': t8rqd
    });
}, window[c[35373]] = function (hznk6, kd8qt6, c$lam, g2s1, hxnjsv, xnjs, wou4_, nsjx1, bcy4o, xf1jn) {
    j1E[c[35067]] = hznk6, j1E[c[5150]] = kd8qt6, j1E[c[35068]] = c$lam, gfnjxv[c[35052]](j1E[c[27992]][c[12390]], j1E[c[27992]][c[27997]] || j1E[c[27992]][c[12390]], hznk6, kd8qt6, c$lam), sendApi(j1E[c[35188]], c[35372], {
        'game_pkg': j1E[c[27998]],
        'server_id': j1E[c[27992]][c[12390]],
        'role_id': hznk6,
        'uid': j1E[c[27996]],
        'role_name': kd8qt6,
        'role_type': g2s1,
        'level': c$lam,
        'evolution': hxnjsv
    });
}, window[c[35374]] = function (t5d8) {}, window[c[35375]] = function (b9alm, r5378) {
    gfnjxv[c[35008]](c[35008], { 'activity_id': r5378 }, function (eugw2) {
        b9alm && b9alm(eugw2);
    });
}, window[c[25800]] = function () {
    gfnjxv[c[25800]]();
}, window[c[35376]] = function () {
    gfnjxv[c[25676]]();
}, window[c[35377]] = function (d6q8tr, j1xs2, $9abml, c$y0, ba9$l, y$bml, mab$cl, y$lbc) {
    y$lbc = y$lbc || j1E[c[27992]][c[12390]], sendApi(j1E[c[35188]], c[35378], {
        'phone': d6q8tr,
        'role_id': j1xs2,
        'uid': j1E[c[27996]],
        'game_pkg': j1E[c[27998]],
        'partner_id': j1E[c[13274]],
        'server_id': y$lbc
    }, mab$cl, 0x2, null, function () {
        return !![];
    });
}, window[c[11710]] = function (njvzk) {
    window[c[35166]] = njvzk, window[c[35166]] && window[c[35165]] && (console[c[611]](c[35167] + window[c[35165]][c[1349]]), window[c[35166]](window[c[35165]]), window[c[35165]] = null);
}, window[c[35379]] = function (gu_2ew, $9a, tqdr86, gw_2) {
    window[c[561]](c[35380], {
        'game_pkg': window[c[5021]][c[27998]],
        'role_id': $9a,
        'server_id': tqdr86
    }, gw_2);
}, window[c[35381]] = function (hkzq6, w_e4o0, jhvn) {
    function jvsx(y0o_) {
        var $a9 = [],
            tq6d8 = [],
            geuw12 = jhvn || window[c[1082]][c[35382]];
        for (var cblm$y in geuw12) {
            var wg4_ = Number(cblm$y);
            (!hkzq6 || !hkzq6[c[322]] || hkzq6[c[404]](wg4_) != -0x1) && (tq6d8[c[344]](geuw12[cblm$y]), $a9[c[344]]([wg4_, 0x3]));
        }
        window[c[35081]](window[c[35082]], c[35383]) >= 0x0 ? (console[c[456]](c[35384]), gfnjxv[c[35047]] && gfnjxv[c[35047]](tq6d8, function (q86zk) {
            console[c[456]](c[35385]), console[c[456]](q86zk);
            if (q86zk && q86zk[c[28205]] == c[35386]) for (var bmcly in geuw12) {
                if (q86zk[geuw12[bmcly]] == c[35387]) {
                    var vhsznj = Number(bmcly);
                    for (var khzvd6 = 0x0; khzvd6 < $a9[c[322]]; khzvd6++) {
                        if ($a9[khzvd6][0x0] == vhsznj) {
                            $a9[khzvd6][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[c[35081]](window[c[35082]], c[35388]) >= 0x0 ? wx[c[35389]]({
                'withSubscriptions': !![],
                'success': function (q78r5) {
                    var o_4c0y = q78r5[c[35390]][c[35391]];
                    if (o_4c0y) {
                        console[c[456]](c[35392]), console[c[456]](o_4c0y);
                        for (var r37p5t in geuw12) {
                            if (o_4c0y[geuw12[r37p5t]] == c[35387]) {
                                var bla$mc = Number(r37p5t);
                                for (var jfn1 = 0x0; jfn1 < $a9[c[322]]; jfn1++) {
                                    if ($a9[jfn1][0x0] == bla$mc) {
                                        $a9[jfn1][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[c[456]]($a9), w_e4o0 && w_e4o0($a9);
                    } else console[c[456]](c[35393]), console[c[456]](q78r5), console[c[456]]($a9), w_e4o0 && w_e4o0($a9);
                },
                'fail': function () {
                    console[c[456]](c[35394]), console[c[456]]($a9), w_e4o0 && w_e4o0($a9);
                }
            }) : (console[c[456]](c[35395] + window[c[35082]]), console[c[456]]($a9), w_e4o0 && w_e4o0($a9));
        })) : (console[c[456]](c[35396] + window[c[35082]]), console[c[456]]($a9), w_e4o0 && w_e4o0($a9)), wx[c[35397]](jvsx);
    }
    wx[c[35398]](jvsx);
}, window[c[35399]] = {
    'isSuccess': ![],
    'level': c[31659],
    'isCharging': ![]
}, window[c[14602]] = function (jznvs) {
    wx[c[35157]]({
        'success': function (alb$c) {
            var hvjsnz = window[c[35399]];
            hvjsnz[c[35400]] = !![], hvjsnz[c[5126]] = Number(alb$c[c[5126]])[c[4711]](0x0), hvjsnz[c[35160]] = alb$c[c[35160]], jznvs && jznvs(hvjsnz[c[35400]], hvjsnz[c[5126]], hvjsnz[c[35160]]);
        },
        'fail': function (t5r873) {
            console[c[456]](c[35401], t5r873[c[28205]]);
            var e2ug1w = window[c[35399]];
            jznvs && jznvs(e2ug1w[c[35400]], e2ug1w[c[5126]], e2ug1w[c[35160]]);
        }
    });
}, window[c[12771]] = function (wue1g2) {
    wx[c[12771]]({
        'success': function (q6t8dr) {
            wue1g2 && wue1g2(!![], q6t8dr);
        },
        'fail': function (gf21sx) {
            wue1g2 && wue1g2(![], gf21sx);
        }
    });
}, window[c[12773]] = function ($lmcb) {
    if ($lmcb) wx[c[12773]]($lmcb);
}, window[c[27635]] = function (xgu12) {
    wx[c[27635]](xgu12);
}, window[c[561]] = function (lab, svhxj, zkdq68, _2wu, kzvj, cbmyl, pt573r, eoy_4) {
    if (_2wu == undefined) _2wu = 0x1;
    wx[c[1006]]({
        'url': lab,
        'method': pt573r || c[27861],
        'responseType': c[4914],
        'data': svhxj,
        'header': { 'content-type': eoy_4 || c[35251] },
        'success': function (jshnvz) {
            DEBUG && console[c[456]](c[35402], lab, info, jshnvz);
            if (jshnvz && jshnvz[c[28273]] == 0xc8) {
                var e_w4ug = jshnvz[c[501]];
                !cbmyl || cbmyl(e_w4ug) ? zkdq68 && zkdq68(e_w4ug) : window[c[35403]](lab, svhxj, zkdq68, _2wu, kzvj, cbmyl, jshnvz);
            } else window[c[35403]](lab, svhxj, zkdq68, _2wu, kzvj, cbmyl, jshnvz);
        },
        'fail': function (oe4w_u) {
            DEBUG && console[c[456]](c[35404], lab, info, oe4w_u), window[c[35403]](lab, svhxj, zkdq68, _2wu, kzvj, cbmyl, oe4w_u);
        },
        'complete': function () {}
    });
}, window[c[35403]] = function (nhkvz, xvfjns, t83r5, cb$y0l, u2ew_, w0o4e, c0b$yl) {
    cb$y0l - 0x1 > 0x0 ? setTimeout(function () {
        window[c[561]](nhkvz, xvfjns, t83r5, cb$y0l - 0x1, u2ew_, w0o4e);
    }, 0x3e8) : u2ew_ && u2ew_(JSON[c[5004]]({
        'url': nhkvz,
        'response': c0b$yl
    }));
}, window[c[35405]] = function (d6zqh, njxsh, xsjvhn, nvjzhk, we2u_g, fj1xns, woeu4_) {
    !xsjvhn && (xsjvhn = {});
    var q6dk8z = Math[c[349]](Date[c[616]]() / 0x3e8);
    xsjvhn[c[1423]] = q6dk8z, xsjvhn[c[35406]] = njxsh;
    var w_4ue = Object[c[321]](xsjvhn)[c[512]](),
        dq8kz6 = '',
        $lbyc0 = '';
    for (var l$mab = 0x0; l$mab < w_4ue[c[322]]; l$mab++) {
        dq8kz6 = dq8kz6 + (l$mab == 0x0 ? '' : '&') + w_4ue[l$mab] + xsjvhn[w_4ue[l$mab]], $lbyc0 = $lbyc0 + (l$mab == 0x0 ? '' : '&') + w_4ue[l$mab] + '=' + encodeURIComponent(xsjvhn[w_4ue[l$mab]]);
    }
    dq8kz6 = dq8kz6 + j1E[c[35194]];
    var w0_4oe = c[35407] + md5(dq8kz6);
    send(d6zqh + '?' + $lbyc0 + ($lbyc0 == '' ? '' : '&') + w0_4oe, null, nvjzhk, we2u_g, fj1xns, woeu4_ || function (wu1fg) {
        return wu1fg[c[1885]] == c[10692];
    }, null, c[34995]);
}, window[c[35408]] = function (jvxs, ir7) {
    var vxsf = 0x0;
    j1E[c[27992]] && (vxsf = j1E[c[27992]][c[12390]]), sendApi(j1E[c[35190]], c[35409], {
        'partnerId': j1E[c[13274]],
        'gamePkg': j1E[c[27998]],
        'logTime': Math[c[349]](Date[c[616]]() / 0x3e8),
        'platformUid': j1E[c[27999]],
        'type': jvxs,
        'serverId': vxsf
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[c[35410]] = function (rt3578) {
    sendApi(j1E[c[35188]], c[35411], {
        'partner_id': j1E[c[13274]],
        'uid': j1E[c[27996]],
        'version': j1E[c[5848]],
        'game_pkg': j1E[c[27998]],
        'device': j1E[c[28000]]
    }, j1EBM, jBE1, jEM);
}, window[c[35412]] = function (vshnz) {
    if (vshnz && vshnz[c[1885]] === c[10692] && vshnz[c[501]]) {
        vshnz[c[501]][c[427]]({
            'id': -0x2,
            'name': c[35413]
        }), vshnz[c[501]][c[427]]({
            'id': -0x1,
            'name': c[35414]
        }), j1E[c[35415]] = vshnz[c[501]];
        if (window[c[13468]]) window[c[13468]][c[35416]]();
    } else {
        j1E[c[35417]] = ![];
        var fjs21 = vshnz ? vshnz[c[1885]] : '';
        window[c[35238]](0x7, c[35418] + fjs21), window[c[35216]](c[35419] + fjs21);
    }
}, window[c[35420]] = function (szjhvn) {
    sendApi(j1E[c[35188]], c[35421], {
        'partner_id': j1E[c[13274]],
        'uid': j1E[c[27996]],
        'version': j1E[c[5848]],
        'game_pkg': j1E[c[27998]],
        'device': j1E[c[28000]]
    }, jM1B, jBE1, jEM);
}, window[c[35422]] = function (owe0) {
    j1E[c[35423]] = ![];
    if (owe0 && owe0[c[1885]] === c[10692] && owe0[c[501]]) {
        for (var snhjz = 0x0; snhjz < owe0[c[501]][c[322]]; snhjz++) {
            owe0[c[501]][snhjz][c[638]] = j1BM(owe0[c[501]][snhjz]);
        }
        j1E[c[35197]][-0x1] = window[c[35424]](owe0[c[501]]), window[c[13468]][c[35425]](-0x1);
    } else {
        var svjxh = owe0 ? owe0[c[1885]] : '';
        window[c[35238]](0x8, c[35426] + svjxh), window[c[35216]](c[35427] + svjxh);
    }
}, window[c[35428]] = function (fsxg2) {
    sendApi(j1E[c[35188]], c[35421], {
        'partner_id': j1E[c[13274]],
        'uid': j1E[c[27996]],
        'version': j1E[c[5848]],
        'game_pkg': j1E[c[27998]],
        'device': j1E[c[28000]]
    }, fsxg2, jBE1, jEM);
}, window[c[35429]] = function (f12j, t8r6q) {
    sendApi(j1E[c[35188]], c[35430], {
        'partner_id': j1E[c[13274]],
        'uid': j1E[c[27996]],
        'version': j1E[c[5848]],
        'game_pkg': j1E[c[27998]],
        'device': j1E[c[28000]],
        'server_group_id': t8r6q
    }, jB1M, jBE1, jEM);
}, window[c[35431]] = function (g21f) {
    j1E[c[35423]] = ![];
    if (g21f && g21f[c[1885]] === c[10692] && g21f[c[501]] && g21f[c[501]][c[501]]) {
        var _ewg2 = g21f[c[501]][c[35432]],
            f2uw1g = [];
        for (var eu4w_ = 0x0; eu4w_ < g21f[c[501]][c[501]][c[322]]; eu4w_++) {
            g21f[c[501]][c[501]][eu4w_][c[638]] = j1BM(g21f[c[501]][c[501]][eu4w_]), (f2uw1g[c[322]] == 0x0 || g21f[c[501]][c[501]][eu4w_][c[638]] != 0x0) && (f2uw1g[f2uw1g[c[322]]] = g21f[c[501]][c[501]][eu4w_]);
        }
        j1E[c[35197]][_ewg2] = window[c[35424]](f2uw1g), window[c[13468]][c[35425]](_ewg2);
    } else {
        var e4gwu = g21f ? g21f[c[1885]] : '';
        window[c[35238]](0x9, c[35433] + e4gwu), window[c[35216]](c[35434] + e4gwu);
    }
}, window[c[35435]] = function (we04o) {
    sendApi(j1E[c[35188]], c[35436], {
        'partner_id': j1E[c[13274]],
        'uid': j1E[c[27996]],
        'version': j1E[c[5848]],
        'game_pkg': j1E[c[27998]],
        'device': j1E[c[28000]]
    }, reqServerRecommendCallBack, jBE1, jEM);
}, window[c[35437]] = function (ri3p) {
    j1E[c[35423]] = ![];
    if (ri3p && ri3p[c[1885]] === c[10692] && ri3p[c[501]]) {
        for (var jsvfn = 0x0; jsvfn < ri3p[c[501]][c[322]]; jsvfn++) {
            ri3p[c[501]][jsvfn][c[638]] = j1BM(ri3p[c[501]][jsvfn]);
        }
        j1E[c[35197]][-0x2] = window[c[35424]](ri3p[c[501]]), window[c[13468]][c[35425]](-0x2);
    } else {
        var t8dq5r = ri3p ? ri3p[c[1885]] : '';
        window[c[35238]](0xa, c[35438] + t8dq5r), alert(c[35439] + t8dq5r);
    }
}, window[c[35424]] = function (fsx) {
    return fsx;
}, window[c[35440]] = function (xfj2, vxsnhj) {
    xfj2 = xfj2 || j1E[c[27992]][c[12390]], sendApi(j1E[c[35188]], c[35441], {
        'type': '4',
        'game_pkg': j1E[c[27998]],
        'server_id': xfj2
    }, vxsnhj);
}, window[c[35442]] = function (kzhn6v, d6r8tq, sjvfx, q8dr5t) {
    sjvfx = sjvfx || j1E[c[27992]][c[12390]], sendApi(j1E[c[35188]], c[35443], {
        'type': kzhn6v,
        'game_pkg': d6r8tq,
        'server_id': sjvfx
    }, q8dr5t);
}, window[c[35444]] = function (jnsxvh, rtq857) {
    sendApi(j1E[c[35188]], c[35445], { 'game_pkg': jnsxvh }, rtq857);
}, window[c[35446]] = function (pi357) {
    if (pi357) {
        if (pi357[c[638]] == 0x1) {
            if (pi357[c[35447]] == 0x3) return 0x3;else return pi357[c[35447]] == 0x1 ? 0x2 : 0x1;
        } else return pi357[c[638]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[c[35448]] = function (kvhz6n, lb$0yc) {
    j1E[c[35449]] = {
        'step': kvhz6n,
        'server_id': lb$0yc
    };
    var e2u_w = this;
    jM1BE({ 'title': c[35450] }), sendApi(j1E[c[35188]], c[35451], {
        'partner_id': j1E[c[13274]],
        'uid': j1E[c[27996]],
        'game_pkg': j1E[c[27998]],
        'server_id': lb$0yc,
        'platform': j1E[c[27950]],
        'platform_uid': j1E[c[27999]],
        'check_login_time': j1E[c[35305]],
        'check_login_sign': j1E[c[35304]],
        'version_name': j1E[c[5022]]
    }, jEM1B, jBE1, jEM, function (fw12u) {
        return fw12u[c[1885]] == c[10692] || fw12u[c[611]] == c[35452] || fw12u[c[611]] == c[35453];
    });
}, window[c[35454]] = function ($bmyc) {
    var b0c$oy = this;
    if ($bmyc && $bmyc[c[1885]] === c[10692] && $bmyc[c[501]]) {
        var fx21gs = j1E[c[27992]];
        fx21gs[c[35455]] = j1E[c[35198]], fx21gs[c[12373]] = String($bmyc[c[501]][c[35456]]), fx21gs[c[27952]] = parseInt($bmyc[c[501]][c[1423]]);
        if ($bmyc[c[501]][c[27951]]) fx21gs[c[27951]] = parseInt($bmyc[c[501]][c[27951]]);else fx21gs[c[27951]] = parseInt($bmyc[c[501]][c[12390]]);
        fx21gs[c[35457]] = 0x0, fx21gs[c[5018]] = j1E[c[35346]], fx21gs[c[35458]] = $bmyc[c[501]][c[35459]], fx21gs[c[35460]] = $bmyc[c[501]][c[35460]];
        if ($bmyc[c[501]][c[27956]]) fx21gs[c[27956]] = parseInt($bmyc[c[501]][c[27956]]);
        console[c[456]](c[35461] + JSON[c[5004]](fx21gs[c[35460]])), j1E[c[1185]] == 0x1 && fx21gs[c[35460]] && fx21gs[c[35460]][c[35462]] == 0x1 && (j1E[c[35463]] = 0x1, window[c[35078]][c[679]][c[35464]]()), jEBM1();
    } else {
        if (j1E[c[35449]][c[7646]] >= 0x3) {
            var sxnj1f = $bmyc ? $bmyc[c[1885]] : '';
            window[c[35238]](0xc, c[35465] + sxnj1f), jEM(JSON[c[5004]]($bmyc)), window[c[35216]](c[35466] + sxnj1f);
        } else sendApi(j1E[c[35188]], c[35283], {
            'platform': j1E[c[35186]],
            'partner_id': j1E[c[13274]],
            'token': j1E[c[35281]],
            'game_pkg': j1E[c[27998]],
            'deviceId': j1E[c[28000]],
            'scene': c[35284] + j1E[c[35196]]
        }, function (t5q87) {
            if (!t5q87 || t5q87[c[1885]] != c[10692]) {
                window[c[35216]](c[35301] + t5q87 && t5q87[c[1885]]);
                return;
            }
            j1E[c[35304]] = String(t5q87[c[12373]]), j1E[c[35305]] = String(t5q87[c[1423]]), setTimeout(function () {
                jEMB1(j1E[c[35449]][c[7646]] + 0x1, j1E[c[35449]][c[12390]]);
            }, 0x5dc);
        }, jBE1, jEM, function (kvdzh6) {
            return kvdzh6[c[1885]] == c[10692] || kvdzh6[c[1885]] == c[28349];
        });
    }
}, window[c[35467]] = function () {
    ServerLoading[c[679]][c[35337]](j1E[c[1185]]), window[c[35205]] = !![], window[c[35104]]();
}, window[c[35103]] = function () {
    if (window[c[35102]] && window[c[35110]] && window[c[35206]] && window[c[35207]] && window[c[35208]] && window[c[35210]]) {
        if (!window[c[34976]][c[679]]) {
            console[c[456]](c[35468] + window[c[34976]][c[679]]);
            var vsjxnf = wx[c[27618]](),
                _owue4 = vsjxnf[c[1349]] ? vsjxnf[c[1349]] : 0x0,
                vkdzh = {
                'cdn': window[c[5021]][c[5018]],
                'spareCdn': window[c[5021]][c[27640]],
                'newRegister': window[c[5021]][c[1185]],
                'wxPC': window[c[5021]][c[27642]],
                'wxIOS': window[c[5021]][c[1646]],
                'wxAndroid': window[c[5021]][c[12218]],
                'wxParam': {
                    'limitLoad': window[c[5021]][c[35148]],
                    'benchmarkLevel': window[c[5021]][c[35149]],
                    'wxFrom': window[c[1082]][c[336]] == c[35469] ? 0x1 : 0x0,
                    'wxSDKVersion': window[c[35082]]
                },
                'configType': window[c[5021]][c[5020]],
                'exposeType': window[c[5021]][c[1271]],
                'scene': _owue4,
                'video_type': window[c[5021]][c[28143]],
                'ad_flag': window[c[5021]][c[28142]]
            };
            if (window[c[35348]]) for (var trq785 in window[c[35348]]) {
                if (!vkdzh[trq785]) vkdzh[trq785] = window[c[35348]][trq785];
            }
            new window[c[34976]](vkdzh, window[c[5021]][c[633]], window[c[35181]]);
        }
    }
}, window[c[35104]] = function () {
    if (window[c[35102]] && window[c[35110]] && window[c[35206]] && window[c[35207]] && window[c[35208]] && window[c[35210]] && window[c[35205]] && window[c[35209]]) {
        jM1EB();
        if (!jEB1) {
            jEB1 = !![];
            if (!window[c[34976]][c[679]]) window[c[35103]]();
            var oby$ = 0x0,
                hvsnz = wx[c[35470]]();
            hvsnz && (window[c[5021]][c[35144]] && (oby$ = hvsnz[c[846]]), console[c[611]](c[35471] + hvsnz[c[846]] + c[35472] + hvsnz[c[1911]] + c[35473] + hvsnz[c[1913]] + c[35474] + hvsnz[c[1912]] + c[35475] + hvsnz[c[709]] + c[35476] + hvsnz[c[710]]));
            var vzhkj = {};
            for (const dqkh in j1E[c[27992]]) {
                vzhkj[dqkh] = j1E[c[27992]][dqkh];
            }
            var _weg2 = {
                'channel': window[c[5021]][c[13283]],
                'account': window[c[5021]][c[27996]],
                'userId': window[c[5021]][c[13272]],
                'cdn': window[c[5021]][c[5018]],
                'data': window[c[5021]][c[501]],
                'package': window[c[5021]][c[492]],
                'newRegister': window[c[5021]][c[1185]],
                'pkgName': window[c[5021]][c[27998]],
                'partnerId': window[c[5021]][c[13274]],
                'platform_uid': window[c[5021]][c[27999]],
                'deviceId': window[c[5021]][c[28000]],
                'selectedServer': vzhkj,
                'configType': window[c[5021]][c[5020]],
                'exposeType': window[c[5021]][c[1271]],
                'debugUsers': window[c[5021]][c[13421]],
                'wxMenuTop': oby$,
                'wxShield': window[c[5021]][c[1293]],
                'encryptParam': window[c[5021]][c[28150]],
                'wx_channel': window[c[5021]][c[28148]],
                'zsy_tp_state': window[c[5021]][c[28149]]
            };
            if (window[c[35348]]) for (var hdz6qk in window[c[35348]]) {
                _weg2[hdz6qk] = window[c[35348]][hdz6qk];
            }
            window[c[34976]][c[679]][c[28014]](_weg2);
            if (j1E[c[27992]] && j1E[c[27992]][c[12390]]) localStorage[c[1013]](c[35307] + j1E[c[27998]] + j1E[c[27996]], j1E[c[27992]][c[12390]]);
        }
    } else console[c[611]](c[35477] + window[c[35102]] + c[35478] + window[c[35110]] + c[35479] + window[c[35206]] + c[35480] + window[c[35207]] + c[35481] + window[c[35208]] + c[35482] + window[c[35210]] + c[35483] + window[c[35205]] + c[35484] + window[c[35209]]);
};