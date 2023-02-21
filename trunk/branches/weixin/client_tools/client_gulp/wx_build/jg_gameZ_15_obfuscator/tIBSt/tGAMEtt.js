var P = wx.$y;
console[P[1]](P[2]), window[P[3]], wx[P[4]](function ($od2kf) {
    if ($od2kf) {
        if ($od2kf[P[5]]) {
            var wz = window[P[6]][P[7]][P[8]](new RegExp(/\./, 'g'), '_'),
                sgyq = $od2kf[P[5]],
                f2okd = sgyq[P[9]](/(ttttttt\/tGAMEtt.js:)[0-9]{1,60}(:)/g);
            if (f2okd) for (var x8qng = 0x0; x8qng < f2okd[P[10]]; x8qng++) {
                if (f2okd[x8qng] && f2okd[x8qng][P[10]] > 0x0) {
                    var syqlc_ = parseInt(f2okd[x8qng][P[8]](P[11], '')[P[8]](':', ''));
                    sgyq = sgyq[P[8]](f2okd[x8qng], f2okd[x8qng][P[8]](':' + syqlc_ + ':', ':' + (syqlc_ - 0x2) + ':'));
                }
            }
            sgyq = sgyq[P[8]](new RegExp(P[12], 'g'), P[13] + wz + P[14]), sgyq = sgyq[P[8]](new RegExp(P[15], 'g'), P[13] + wz + P[14]), $od2kf[P[5]] = sgyq;
        }
        var ewz = {
            'id': window[P[16]][P[17]],
            'role': window[P[16]][P[18]],
            'level': window[P[16]][P[19]],
            'user': window[P[16]][P[20]],
            'version': window[P[16]][P[21]],
            'cdn': window[P[16]][P[22]],
            'pkgName': window[P[16]][P[23]],
            'gamever': window[P[6]][P[7]],
            'serverid': window[P[16]][P[24]] ? window[P[16]][P[24]][P[25]] : 0x0,
            'systemInfo': window[P[26]],
            'error': P[27],
            'stack': $od2kf ? $od2kf[P[5]] : ''
        },
            rl_csm = JSON[P[28]](ewz);
        console[P[29]](P[30] + rl_csm), (!window[P[3]] || window[P[3]] != ewz[P[29]]) && (window[P[3]] = ewz[P[29]], window[P[31]](ewz));
    }
});
import 'ttfttt.js';
import 'tt112tt.js';
window[P[32]] = require(P[33]);
import 'tINDtt.js';
import 'ttLIB23tt.js';
import 'tWXMtadtt.js';
import 'ttINItt.js';
console[P[1]](P[34]), console[P[1]](P[35]), P_GUV9({ 'title': P[36] });
var Ts_crm = { 'P__G9UV': !![] };
new window[P[37]](Ts_crm), window[P[37]][P[38]][P[39]]();
if (window[P[40]]) clearInterval(window[P[40]]);
window[P[40]] = null, window[P[41]] = function (kdo$n, kpt2wf) {
    if (!kdo$n || !kpt2wf) return 0x0;
    kdo$n = kdo$n[P[42]]('.'), kpt2wf = kpt2wf[P[42]]('.');
    const gslq_ = Math[P[43]](kdo$n[P[10]], kpt2wf[P[10]]);
    while (kdo$n[P[10]] < gslq_) {
        kdo$n[P[44]]('0');
    }
    while (kpt2wf[P[10]] < gslq_) {
        kpt2wf[P[44]]('0');
    }
    for (var slyq_ = 0x0; slyq_ < gslq_; slyq_++) {
        const csrly_ = parseInt(kdo$n[slyq_]),
              d$fk8 = parseInt(kpt2wf[slyq_]);
        if (csrly_ > d$fk8) return 0x1;else {
            if (csrly_ < d$fk8) return -0x1;
        }
    }
    return 0x0;
}, window[P[45]] = wx[P[46]]()[P[45]], console[P[47]](P[48] + window[P[45]]);
var To$fdk8 = wx[P[49]]();
To$fdk8[P[50]](function (kw$2pf) {
    console[P[47]](P[51] + kw$2pf[P[52]]);
}), To$fdk8[P[53]](function () {
    wx[P[54]]({
        'title': P[55],
        'content': P[56],
        'showCancel': ![],
        'success': function (zfptw) {
            To$fdk8[P[57]]();
        }
    });
}), To$fdk8[P[58]](function () {
    console[P[47]](P[59]);
}), window[P[60]] = function () {
    console[P[47]](P[61]);
    var m4b7 = wx[P[62]]({
        'name': P[63],
        'success': function (yc_lsr) {
            console[P[47]](P[64]), console[P[47]](yc_lsr), yc_lsr && yc_lsr[P[65]] == P[66] ? (window[P[67]] = !![], window[P[68]](), window[P[69]]()) : setTimeout(function () {
                window[P[60]]();
            }, 0x1f4);
        },
        'fail': function (c7rml) {
            console[P[47]](P[70]), console[P[47]](c7rml), setTimeout(function () {
                window[P[60]]();
            }, 0x1f4);
        }
    });
    m4b7 && m4b7[P[71]](k2o$f => {});
}, window[P[72]] = function () {
    console[P[47]](P[73]);
    var kofd8$ = wx[P[62]]({
        'name': P[74],
        'success': function (ev109) {
            console[P[47]](P[75]), console[P[47]](ev109), ev109 && ev109[P[65]] == P[66] ? (window[P[76]] = !![], window[P[68]](), window[P[69]]()) : setTimeout(function () {
                window[P[72]]();
            }, 0x1f4);
        },
        'fail': function (cmbr7) {
            console[P[47]](P[77]), console[P[47]](cmbr7), setTimeout(function () {
                window[P[72]]();
            }, 0x1f4);
        }
    });
    kofd8$ && kofd8$[P[71]](p6tvze => {});
}, window[P[78]] = function () {
    window[P[41]](window[P[45]], P[79]) >= 0x0 ? (console[P[47]](P[80] + window[P[45]] + P[81]), window[P[82]](), window[P[60]](), window[P[72]]()) : (window[P[83]](P[84], window[P[45]]), wx[P[54]]({
        'title': P[85],
        'content': P[86]
    }));
}, window[P[26]] = '', wx[P[87]]({
    'success'(g_yn) {
        window[P[26]] = P[88] + g_yn[P[89]] + P[90] + g_yn[P[91]] + P[92] + g_yn[P[93]] + P[94] + g_yn[P[95]] + P[96] + g_yn[P[97]] + P[98] + g_yn[P[45]] + P[99] + g_yn[P[100]], console[P[47]](window[P[26]]), console[P[47]](P[101] + g_yn[P[102]] + P[103] + g_yn[P[104]] + P[105] + g_yn[P[106]] + P[107] + g_yn[P[108]] + P[109] + g_yn[P[110]] + P[111] + g_yn[P[112]] + P[113] + (g_yn[P[114]] ? g_yn[P[114]][P[115]] + ',' + g_yn[P[114]][P[116]] + ',' + g_yn[P[114]][P[117]] + ',' + g_yn[P[114]][P[118]] : ''));
        var wpkf$2 = g_yn[P[95]] ? g_yn[P[95]][P[119]]() : '',
            yrs_cl = g_yn[P[91]] ? g_yn[P[91]][P[119]]()[P[8]]('\x20', '') : '';
        window[P[16]][P[120]] = wpkf$2[P[121]](P[122]) != -0x1, window[P[16]][P[123]] = wpkf$2[P[121]](P[124]) != -0x1, window[P[16]][P[125]] = wpkf$2[P[121]](P[122]) != -0x1 || wpkf$2[P[121]](P[124]) != -0x1, window[P[16]][P[126]] = wpkf$2[P[121]](P[127]) != -0x1 || wpkf$2[P[121]](P[128]) != -0x1, window[P[16]][P[129]] = g_yn[P[97]] ? g_yn[P[97]][P[119]]() : '', window[P[16]][P[130]] = ![], window[P[16]][P[131]] = 0x2;
        if (wpkf$2[P[121]](P[124]) != -0x1) {
            if (g_yn[P[100]] >= 0x18) window[P[16]][P[131]] = 0x3;else window[P[16]][P[131]] = 0x2;
        } else {
            if (wpkf$2[P[121]](P[122]) != -0x1) {
                if (g_yn[P[100]] && g_yn[P[100]] >= 0x14) window[P[16]][P[131]] = 0x3;else {
                    if (yrs_cl[P[121]](P[132]) != -0x1 || yrs_cl[P[121]](P[133]) != -0x1 || yrs_cl[P[121]](P[134]) != -0x1 || yrs_cl[P[121]](P[135]) != -0x1 || yrs_cl[P[121]](P[136]) != -0x1) window[P[16]][P[131]] = 0x2;else window[P[16]][P[131]] = 0x3;
                }
            } else window[P[16]][P[131]] = 0x2;
        }
        console[P[47]](P[137] + window[P[16]][P[130]] + P[138] + window[P[16]][P[131]]);
    }
}), wx[P[139]]({
    'success': function (w6tepz) {
        console[P[47]](P[140] + w6tepz[P[141]] + P[142] + w6tepz[P[143]]);
    }
}), wx[P[144]]({
    'success': function (mr34) {
        console[P[47]](P[145] + mr34[P[146]]);
    }
}), wx[P[147]]({ 'keepScreenOn': !![] }), wx[P[148]](function (ox$nd) {
    console[P[47]](P[145] + ox$nd[P[146]] + P[149] + ox$nd[P[150]]);
}), wx[P[151]](function (smrlc_) {
    window[P[152]] = smrlc_, window[P[153]] && window[P[152]] && (console[P[1]](P[154] + window[P[152]][P[155]]), window[P[153]](window[P[152]]), window[P[152]] = null);
}), window[P[156]] = 0x0, window[P[157]] = 0x0, window[P[158]] = null, wx[P[159]](function () {
    window[P[157]]++;
    var xn8ygq = Date[P[160]]();
    (window[P[156]] == 0x0 || xn8ygq - window[P[156]] > 0x1d4c0) && (console[P[161]](P[162]), wx[P[163]]());
    if (window[P[157]] >= 0x2) {
        window[P[157]] = 0x0, console[P[29]](P[164]), wx[P[165]]('0', 0x1);
        if (window[P[16]] && window[P[16]][P[120]]) window[P[83]](P[166], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});