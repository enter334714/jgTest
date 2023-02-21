var u = wx.$x;
import xzo2 from '../xxaxxx/x7xx.js';
window[u[971]] = { 'wxVersion': window[u[972]][u[973]] }, window[u[974]] = ![], window[u[975]] = 0x1, window[u[976]] = 0x1, window[u[977]] = !![], window[u[978]] = !![], window['x1T$J69'] = '', window[u[979]] = ![], window[u[980]] = {
    'base_cdn': u[981],
    'cdn': u[981]
}, x169[u[982]] = {}, x169[u[304]] = '0', x169[u[983]] = window[u[971]][u[984]], x169[u[985]] = '', x169['os'] = '1', x169[u[986]] = u[987], x169[u[988]] = u[989], x169[u[990]] = u[991], x169[u[992]] = u[993], x169[u[994]] = u[995], x169[u[996]] = '1', x169[u[997]] = '', x169[u[998]] = '', x169[u[999]] = 0x0, x169[u[1000]] = {}, x169[u[1001]] = parseInt(x169[u[996]]), x169[u[1002]] = x169[u[996]], x169[u[1003]] = {}, x169['x1$6'] = u[1004], x169[u[1005]] = ![], x169[u[1006]] = u[1007], x169[u[1008]] = Date[u[1009]](), x169[u[1010]] = u[1011], x169[u[1012]] = '_a', x169[u[1013]] = '', x169[u[1014]] = 0x2, x169[u[1015]] = 0x7c1, x169[u[984]] = window[u[971]][u[984]], x169[u[1016]] = ![], x169[u[1017]] = ![], x169[u[1018]] = ![], x169[u[1019]] = ![], window[u[1020]] = 0x5, window[u[1021]] = ![], window[u[1022]] = ![], window[u[1023]] = ![], window[u[1024]] = ![], window[u[1025]] = ![], window[u[1026]] = ![], window[u[1027]] = ![], window[u[1028]] = ![], window[u[1029]] = ![], window[u[1030]] = null, window[u[1031]] = function (hkpbe) {
    console[u[225]](u[1031], hkpbe), wx[u[1032]]({}), wx[u[1033]]({
        'title': u[1034],
        'content': hkpbe,
        'success'(a_pe) {
            if (a_pe[u[1035]]) console[u[225]](u[1036]);else a_pe[u[1037]] && console[u[225]](u[1038]);
        }
    });
}, window['x1$J69'] = function (bkw30) {
    console[u[225]](u[1039], bkw30), x1$69J(), wx[u[1033]]({
        'title': u[1034],
        'content': bkw30,
        'confirmText': u[1040],
        'cancelText': u[1041],
        'success'(bea0hp) {
            if (bea0hp[u[1035]]) window['x16$']();else bea0hp[u[1037]] && (console[u[225]](u[1042]), wx[u[1043]]({}));
        }
    });
}, window[u[1044]] = function (aq_hep) {
    console[u[225]](u[1044], aq_hep), wx[u[1033]]({
        'title': u[1034],
        'content': aq_hep,
        'confirmText': u[1045],
        'showCancel': ![],
        'complete'(k0hwe) {
            console[u[225]](u[1042]), wx[u[1043]]({});
        }
    });
}, window['x1$J96'] = ![], window['x1$6J9'] = function (cnfj9u) {
    window['x1$J96'] = !![], wx[u[1046]](cnfj9u);
}, window['x1$69J'] = function () {
    window['x1$J96'] && (window['x1$J96'] = ![], wx[u[1032]]({}));
}, window['x1$9J6'] = function (z6m5o) {
    window[u[1047]][u[1048]]['x1$9J6'](z6m5o);
}, window[u[1049]] = function (sg4di, zmxsi) {
    xzo2[u[1049]](sg4di, function (b0pek) {
        b0pek && b0pek[u[335]] ? b0pek[u[335]][u[1050]] == 0x1 ? zmxsi(!![]) : (zmxsi(![]), console[u[1051]](u[1052] + b0pek[u[335]][u[1053]])) : console[u[225]](u[1049], b0pek);
    });
}, window['x1$96J'] = function (vnucjf) {
    console[u[225]](u[1054], vnucjf);
}, window['x1$69'] = function (zs2o5m) {}, window['x1$96'] = function (_hepqa, ahpq, imoszx) {}, window['x1$9'] = function (div4) {
    console[u[225]](u[1055], div4), window[u[1047]][u[1048]][u[1056]](), window[u[1047]][u[1048]][u[1057]](), window[u[1047]][u[1048]][u[1058]](), window[u[1059]]();
}, window['x19$'] = function (z652o) {
    window[u[1060]](0xe, u[1061] + z652o), window['x1$J69'](u[1062]);
    var jlc79 = {
        'id': window[u[980]][u[1063]],
        'role': window[u[980]][u[1064]],
        'level': window[u[980]][u[1065]],
        'account': window[u[980]][u[1066]],
        'version': window[u[980]][u[1015]],
        'cdn': window[u[980]][u[1067]],
        'pkgName': window[u[980]][u[997]],
        'gamever': window[u[972]][u[973]],
        'serverid': window[u[980]][u[1003]] ? window[u[980]][u[1003]][u[1068]] : 0x0,
        'systemInfo': window[u[1069]],
        'error': u[1070],
        'stack': z652o ? z652o : u[1062]
    },
        ugjnv = JSON[u[1071]](jlc79);
    console[u[333]](u[1072] + ugjnv), window['x1$6'](ugjnv);
}, window[u[1060]] = function (kpb0he, f798) {
    sendApi(x169[u[990]], u[1073], {
        'game_pkg': x169[u[997]],
        'partner_id': x169[u[996]],
        'server_id': x169[u[1003]] && x169[u[1003]][u[1068]] > 0x0 ? x169[u[1003]][u[1068]] : 0x0,
        'uid': x169[u[1066]] > 0x0 ? x169[u[1066]] : 0x0,
        'type': kpb0he,
        'info': f798
    });
}, window['x16$9'] = function (z5omx) {
    var k31wt6 = JSON[u[223]](z5omx);
    k31wt6[u[1074]] = window[u[972]][u[973]], k31wt6[u[1075]] = window[u[980]][u[1003]] ? window[u[980]][u[1003]][u[1068]] : 0x0, k31wt6[u[1069]] = window[u[1069]];
    var hkw0eb = JSON[u[1071]](k31wt6);
    console[u[333]](u[1076] + hkw0eb), window['x1$6'](hkw0eb);
}, window['x169$'] = function (szo52m, pe0ab) {
    var tb13w = {
        'id': window[u[980]][u[1063]],
        'role': window[u[980]][u[1064]],
        'level': window[u[980]][u[1065]],
        'account': window[u[980]][u[1066]],
        'version': window[u[980]][u[1015]],
        'cdn': window[u[980]][u[1067]],
        'pkgName': window[u[980]][u[997]],
        'gamever': window[u[972]][u[973]],
        'serverid': window[u[980]][u[1003]] ? window[u[980]][u[1003]][u[1068]] : 0x0,
        'systemInfo': window[u[1069]],
        'error': szo52m,
        'stack': pe0ab
    },
        cl98f7 = JSON[u[1071]](tb13w);
    console[u[383]](u[1077] + cl98f7), window['x1$6'](cl98f7);
}, window['x1$6'] = function (y9$l7) {
    if (window[u[980]][u[1078]] == u[1079]) return;
    var sigdx4 = x169['x1$6'] + u[1080] + x169[u[1066]];
    wx[u[1081]]({
        'url': sigdx4,
        'method': u[1082],
        'data': y9$l7,
        'header': {
            'content-type': u[1083],
            'cache-control': u[1084]
        },
        'success': function (hekp0) {
            DEBUG && console[u[225]](u[1085], sigdx4, y9$l7, hekp0);
        },
        'fail': function (k6t1w) {
            DEBUG && console[u[225]](u[1085], sigdx4, y9$l7, k6t1w);
        },
        'complete': function () {}
    });
}, window[u[1086]] = function () {
    function uvjnd() {
        return ((0x1 + Math[u[1087]]()) * 0x10000 | 0x0)[u[60]](0x10)[u[234]](0x1);
    }
    return uvjnd() + uvjnd() + '-' + uvjnd() + '-' + uvjnd() + '-' + uvjnd() + '+' + uvjnd() + uvjnd() + uvjnd();
}, window['x16$'] = function () {
    console[u[225]](u[1088]);
    var hb0wek = xzo2[u[1089]]();
    x169[u[1002]] = hb0wek[u[1090]], x169[u[1001]] = hb0wek[u[1090]], x169[u[996]] = hb0wek[u[1090]], x169[u[997]] = hb0wek[u[1091]];
    var z2o65t = { 'game_ver': x169[u[983]] };
    x169[u[998]] = this[u[1086]](), x1$6J9({ 'title': u[1092] }), xzo2[u[1093]](z2o65t, this['x19$6'][u[17]](this));
}, window['x19$6'] = function (jvung) {
    var s2o5zm = jvung[u[1094]];
    sdkInitRes = jvung, console[u[225]](u[1095] + s2o5zm + u[1096] + (s2o5zm == 0x1) + u[1097] + jvung[u[973]] + u[1098] + window[u[971]][u[984]]);
    if (!jvung[u[973]] || window['x1TJ9$6'](window[u[971]][u[984]], jvung[u[973]]) < 0x0) console[u[225]](u[1099]), x169[u[988]] = u[1100], x169[u[990]] = u[1101], x169[u[992]] = u[1102], x169[u[1067]] = u[1103], x169[u[1104]] = u[1105], x169[u[1106]] = 'xc', x169[u[1016]] = ![];else window['x1TJ9$6'](window[u[971]][u[984]], jvung[u[973]]) == 0x0 ? (console[u[225]](u[1107]), x169[u[988]] = u[989], x169[u[990]] = u[991], x169[u[992]] = u[993], x169[u[1067]] = u[1108], x169[u[1104]] = u[1105], x169[u[1106]] = u[1109], x169[u[1016]] = !![]) : (console[u[225]](u[1110]), x169[u[988]] = u[989], x169[u[990]] = u[991], x169[u[992]] = u[993], x169[u[1067]] = u[1108], x169[u[1104]] = u[1105], x169[u[1106]] = u[1109], x169[u[1016]] = ![]);
    x169[u[999]] = config[u[51]] ? config[u[51]] : 0x0, this['x1J6$9'](), this['x1J69$'](), window[u[1111]] = 0x5, x1$6J9({ 'title': u[1112] }), xzo2[u[1113]](this['x196$'][u[17]](this));
}, window[u[1111]] = 0x5, window['x196$'] = function (zo5sx, abp0he) {
    if (zo5sx == 0x0 && abp0he && abp0he[u[285]]) {
        x169[u[1114]] = abp0he[u[285]], x169[u[1115]] = abp0he[u[1115]], x169[u[1116]] = abp0he[u[1116]], x169[u[1117]] = abp0he[u[1117]], x169[u[1118]] = abp0he[u[1118]];
        var nfc9lj = this;
        x1$6J9({ 'title': u[1119] }), sendApi(x169[u[988]], u[1120], {
            'platform': x169[u[986]],
            'partner_id': x169[u[996]],
            'token': abp0he[u[285]],
            'game_pkg': x169[u[997]],
            'deviceId': x169[u[998]],
            'scene': u[1121] + x169[u[999]]
        }, this['x1J$69'][u[17]](this), x1J96, x19$);
    } else abp0he && abp0he[u[1122]] && window[u[1111]] > 0x0 && (abp0he[u[1122]][u[146]](u[1123]) != -0x1 || abp0he[u[1122]][u[146]](u[1124]) != -0x1 || abp0he[u[1122]][u[146]](u[1125]) != -0x1 || abp0he[u[1122]][u[146]](u[1126]) != -0x1 || abp0he[u[1122]][u[146]](u[1127]) != -0x1 || abp0he[u[1122]][u[146]](u[1128]) != -0x1) ? (window[u[1111]]--, xzo2[u[1113]](this['x196$'][u[17]](this))) : (window[u[1060]](0x1, u[1129] + zo5sx + u[1130] + (abp0he ? abp0he[u[1122]] : '')), window['x169$'](u[1131], JSON[u[1071]]({
        'status': zo5sx,
        'data': abp0he
    })), window['x1$J69'](u[1132] + (abp0he && abp0he[u[1122]] ? '，' + abp0he[u[1122]] : '')));
}, window['x1J$69'] = function (gi4uvd) {
    if (!gi4uvd) {
        window[u[1060]](0x2, u[1133]), window['x169$'](u[1134], u[1135]), window['x1$J69'](u[1136]);
        return;
    }
    if (gi4uvd[u[1050]] != u[1137]) {
        window[u[1060]](0x2, u[1138] + gi4uvd[u[1050]]), window['x169$'](u[1134], JSON[u[1071]](gi4uvd)), window['x1$J69'](u[1139] + gi4uvd[u[1050]]);
        return;
    }
    if (gi4uvd[u[1140]] == 0x1) {
        window['x1$J69'](u[1141]);
        return;
    }
    x169[u[1142]] = String(gi4uvd[u[1066]]), x169[u[1066]] = String(gi4uvd[u[1066]]), x169[u[1143]] = String(gi4uvd[u[1143]]), x169[u[1002]] = String(gi4uvd[u[1143]]), x169[u[1144]] = String(gi4uvd[u[1144]]), x169[u[1145]] = String(gi4uvd[u[1146]]), x169[u[1147]] = String(gi4uvd[u[1148]]), x169[u[1146]] = '';
    var ae0hpb = this;
    x1$6J9({ 'title': u[1149] });
    var cl9 = localStorage[u[1150]](u[1151] + x169[u[997]] + x169[u[1066]]);
    if (cl9 && cl9 != '') {
        var b0ph = Number(cl9);
        ae0hpb[u[1152]](b0ph);
    } else ae0hpb[u[1153]]();
}, window[u[1153]] = function () {
    var isox = this;
    sendApi(x169[u[988]], u[1154], {
        'partner_id': x169[u[996]],
        'uid': x169[u[1066]],
        'version': x169[u[983]],
        'game_pkg': x169[u[997]],
        'device': x169[u[998]]
    }, isox['x1J$96'][u[17]](isox), x1J96, x19$);
}, window['x1J$96'] = function (t1kbw) {
    if (!t1kbw) {
        window[u[1060]](0x3, u[1155]), window['x1$J69'](u[1155]);
        return;
    }
    if (t1kbw[u[1050]] != u[1137]) {
        window[u[1060]](0x3, u[1156] + t1kbw[u[1050]]), window['x1$J69'](u[1156] + t1kbw[u[1050]]);
        return;
    }
    if (!t1kbw[u[335]] || t1kbw[u[335]][u[31]] == 0x0) {
        window[u[1060]](0x3, u[1157]), window['x1$J69'](u[1158]);
        return;
    }
    this[u[1159]](t1kbw);
}, window[u[1152]] = function (ujnvdc) {
    var djvu = this;
    sendApi(x169[u[988]], u[1160], {
        'server_id': ujnvdc,
        'time': Date[u[1009]]() / 0x3e8
    }, djvu[u[1161]][u[17]](djvu), x1J96, x19$);
}, window[u[1161]] = function (cl9f78) {
    if (!cl9f78) {
        window[u[1060]](0x4, u[1162]), this[u[1153]]();
        return;
    }
    if (cl9f78[u[1050]] != u[1137]) {
        window[u[1060]](0x4, u[1163] + cl9f78[u[1050]]), this[u[1153]]();
        return;
    }
    if (!cl9f78[u[335]] || cl9f78[u[335]][u[31]] == 0x0) {
        window[u[1060]](0x4, u[1164]), this[u[1153]]();
        return;
    }
    this[u[1159]](cl9f78);
}, window[u[1159]] = function (mgix4s) {
    x169[u[1165]] = mgix4s[u[1166]] != undefined ? mgix4s[u[1166]] : 0x0, x169[u[1003]] = {
        'server_id': String(mgix4s[u[335]][0x0][u[1068]]),
        'server_name': String(mgix4s[u[335]][0x0][u[1167]]),
        'entry_ip': mgix4s[u[335]][0x0][u[1168]],
        'entry_port': parseInt(mgix4s[u[335]][0x0][u[1169]]),
        'status': x16J$(mgix4s[u[335]][0x0]),
        'start_time': mgix4s[u[335]][0x0][u[1170]],
        'maintain_time': mgix4s[u[335]][0x0][u[1171]] ? mgix4s[u[335]][0x0][u[1171]] : '',
        'is_recommend': mgix4s[u[335]][0x0][u[1172]],
        'cdn': x169[u[1067]]
    }, this['x196J$'](), window[u[1047]] && window[u[1047]][u[1048]][u[1173]] && window[u[1047]][u[1048]][u[1173]](sdkInitRes[u[1174]], sdkInitRes[u[1175]], sdkInitRes[u[1176]], sdkInitRes[u[1177]], sdkInitRes[u[1178]]);
}, window['x196J$'] = function () {
    if (x169[u[1165]] == 0x1) {
        var j7c9fl = x169[u[1003]][u[1179]];
        if (j7c9fl === -0x1 || j7c9fl === 0x0) {
            window[u[1060]](0xf, u[1180] + x169[u[1003]]['id'] + u[1181] + x169[u[1003]][u[1179]]), window['x1$J69'](j7c9fl === -0x1 ? u[1182] : u[1183]);
            return;
        }
        x19$J6(0x0, x169[u[1003]][u[1068]]), window[u[1047]][u[1048]][u[1184]](x169[u[1165]]);
    } else window[u[1047]][u[1048]][u[1185]](), x1$69J();
    window[u[1028]] = !![], window[u[1186]](), window['x19J6$'](), window['x196$J']();
}, window['x1J6$9'] = function () {
    sendApi(x169[u[988]], u[1187], {
        'game_pkg': x169[u[997]],
        'version_name': x169[u[1106]]
    }, this[u[1188]][u[17]](this), x1J96, x19$);
}, window[u[1188]] = function (ktw613) {
    if (!ktw613) {
        window[u[1060]](0x5, u[1189]), window['x1$J69'](u[1189]);
        return;
    }
    if (ktw613[u[1050]] != u[1137]) {
        window[u[1060]](0x5, u[1190] + ktw613[u[1050]]), window['x1$J69'](u[1190] + ktw613[u[1050]]);
        return;
    }
    if (!ktw613[u[335]] || !ktw613[u[335]][u[983]]) {
        window[u[1060]](0x5, u[1191] + (ktw613[u[335]] && ktw613[u[335]][u[983]])), window['x1$J69'](u[1191] + (ktw613[u[335]] && ktw613[u[335]][u[983]]));
        return;
    }
    ktw613[u[335]][u[1192]] && ktw613[u[335]][u[1192]][u[31]] > 0xa && (x169[u[1193]] = ktw613[u[335]][u[1192]], x169[u[1067]] = ktw613[u[335]][u[1192]]), ktw613[u[335]][u[983]] && (x169[u[1015]] = ktw613[u[335]][u[983]]), console[u[1051]](u[1194] + x169[u[1015]] + u[1195] + x169[u[1106]]), window[u[1026]] = !![], window['x19J6$'](), window['x196$J']();
}, window[u[1196]], window['x1J69$'] = function () {
    sendApi(x169[u[988]], u[1197], { 'game_pkg': x169[u[997]] }, this['x1J9$6'][u[17]](this), x1J96, x19$);
}, window['x1J9$6'] = function (xm5z) {
    if (xm5z && xm5z[u[1050]] === u[1137] && xm5z[u[335]]) {
        window[u[1196]] = xm5z[u[335]];
        for (var c9f7jl in xm5z[u[335]]) {
            x169[c9f7jl] = xm5z[u[335]][c9f7jl];
        }
    } else window[u[1060]](0xb, u[1198]), console[u[1051]](u[1199] + xm5z[u[1050]]);
    window[u[1027]] = !![], window[u[1186]](), window['x196$J']();
}, window[u[1186]] = function () {
    if (!window[u[1028]] || !window[u[1027]]) return;
    var e0aphb = x169[u[1165]] == 0x1,
        ugnvjd = x169[u[1016]],
        wbek = x169[u[1200]] && x169[u[1200]] > 0x0;
    if (ugnvjd || e0aphb && wbek) {
        var wk3b = x169[u[1201]],
            ixs4g = wk3b && wk3b[u[31]] == 0x9;
        ixs4g && (window[u[1202]] = wk3b);
        var a0 = x169[u[1203]],
            o4sim = a0 && a0[u[201]]('#')[u[31]] == 0x4;
        o4sim && (window[u[1204]] = a0);
    }
}, window[u[1059]] = function () {
    window[u[1202]] = null, window[u[1204]] = null;
}, window[u[1205]] = function (xs5om, _pehaq, b1w30k, xzsmio, vgu4i, vfncuj, nlj9fc, jf7l9, y8l9f7, msziox) {
    vgu4i = String(vgu4i);
    var pehb0 = nlj9fc,
        unf = jf7l9;
    x169[u[982]][vgu4i] = {
        'productid': vgu4i,
        'productname': pehb0,
        'productdesc': unf,
        'roleid': xs5om,
        'rolename': _pehaq,
        'rolelevel': b1w30k,
        'price': vfncuj,
        'callback': y8l9f7
    }, sendApi(x169[u[992]], u[1206], {
        'game_pkg': x169[u[997]],
        'server_id': x169[u[1003]][u[1068]],
        'server_name': x169[u[1003]][u[1167]],
        'level': b1w30k,
        'uid': x169[u[1066]],
        'role_id': xs5om,
        'role_name': _pehaq,
        'product_id': vgu4i,
        'product_name': pehb0,
        'product_desc': unf,
        'money': vfncuj,
        'partner_id': x169[u[996]]
    }, toPayCallBack, x1J96, x19$);
}, window[u[1207]] = function (b3kwt) {
    if (b3kwt && (b3kwt[u[1208]] === 0xc8 || b3kwt[u[1050]] == u[1137])) {
        var khebw = x169[u[982]][String(b3kwt[u[1209]])];
        if (khebw[u[1210]]) khebw[u[1210]](b3kwt[u[1209]], b3kwt[u[1211]], -0x1);
        xzo2[u[1212]]({
            'cpbill': b3kwt[u[1211]],
            'productid': b3kwt[u[1209]],
            'productname': khebw[u[1213]],
            'productdesc': khebw[u[1214]],
            'serverid': x169[u[1003]][u[1068]],
            'servername': x169[u[1003]][u[1167]],
            'roleid': khebw[u[1215]],
            'rolename': khebw[u[1216]],
            'rolelevel': khebw[u[1217]],
            'price': khebw[u[1218]],
            'extension': JSON[u[1071]]({ 'cp_order_id': b3kwt[u[1211]] })
        }, function (g4xsim, y9l$7) {
            khebw[u[1210]] && g4xsim == 0x0 && khebw[u[1210]](b3kwt[u[1209]], b3kwt[u[1211]], g4xsim);
            console[u[1051]](JSON[u[1071]]({
                'type': u[1219],
                'status': g4xsim,
                'data': b3kwt,
                'role_name': khebw[u[1216]]
            }));
            if (g4xsim === 0x0) {} else {
                if (g4xsim === 0x1) {} else {
                    if (g4xsim === 0x2) {}
                }
            }
        });
    } else {
        var ujvfn = b3kwt ? u[1220] + b3kwt[u[1208]] + u[1221] + b3kwt[u[1050]] + u[1222] + b3kwt[u[1051]] : u[1223];
        window[u[1060]](0xd, u[1224] + ujvfn), alert(ujvfn);
    }
}, window['x1J96$'] = function () {}, window['x1$J9'] = function (iv4gx, mo5x, ndju, w3k01b, l9njf) {
    xzo2[u[1225]](x169[u[1003]][u[1068]], x169[u[1003]][u[1167]] || x169[u[1003]][u[1068]], iv4gx, mo5x, ndju), sendApi(x169[u[988]], u[1226], {
        'game_pkg': x169[u[997]],
        'server_id': x169[u[1003]][u[1068]],
        'role_id': iv4gx,
        'uid': x169[u[1066]],
        'role_name': mo5x,
        'role_type': w3k01b,
        'level': ndju
    });
}, window['x1$9J'] = function (gs4xdi, h0eqpa, vg4ud, njdgu, c7f8l9, nuj9c, vu4dg, cnu9jf, oisx4, rp_ah) {
    x169[u[1063]] = gs4xdi, x169[u[1064]] = h0eqpa, x169[u[1065]] = vg4ud, xzo2[u[1227]](x169[u[1003]][u[1068]], x169[u[1003]][u[1167]] || x169[u[1003]][u[1068]], gs4xdi, h0eqpa, vg4ud), sendApi(x169[u[988]], u[1228], {
        'game_pkg': x169[u[997]],
        'server_id': x169[u[1003]][u[1068]],
        'role_id': gs4xdi,
        'uid': x169[u[1066]],
        'role_name': h0eqpa,
        'role_type': njdgu,
        'level': vg4ud,
        'evolution': c7f8l9
    });
}, window['x1J$9'] = function (f7yl98, _prhq, xgsd4i, guvjnd, t3kbw, lfnc9, ids4xg, x5mzso, fcjln9, f8) {
    x169[u[1063]] = f7yl98, x169[u[1064]] = _prhq, x169[u[1065]] = xgsd4i, xzo2[u[1229]](x169[u[1003]][u[1068]], x169[u[1003]][u[1167]] || x169[u[1003]][u[1068]], f7yl98, _prhq, xgsd4i), sendApi(x169[u[988]], u[1228], {
        'game_pkg': x169[u[997]],
        'server_id': x169[u[1003]][u[1068]],
        'role_id': f7yl98,
        'uid': x169[u[1066]],
        'role_name': _prhq,
        'role_type': guvjnd,
        'level': xgsd4i,
        'evolution': t3kbw
    });
}, window['x1J9$'] = function (w0kb) {}, window['x1$J'] = function (njfu, mx4gi) {
    xzo2[u[1230]](u[1230], { 'activity_id': mx4gi }, function (omzxs5) {
        njfu && njfu(omzxs5);
    });
}, window[u[1231]] = function () {
    xzo2[u[1231]]();
}, window[u[1232]] = function () {
    xzo2[u[1233]]();
}, window[u[1234]] = function (rpaq_, x4gims, pqah, cl7j, p_qhar, l9, mz25o, vudg4) {
    vudg4 = vudg4 || x169[u[1003]][u[1068]], sendApi(x169[u[988]], u[1235], {
        'phone': rpaq_,
        'role_id': x4gims,
        'uid': x169[u[1066]],
        'game_pkg': x169[u[997]],
        'partner_id': x169[u[996]],
        'server_id': vudg4
    }, mz25o, 0x2, null, function () {
        return !![];
    });
}, window[u[1236]] = function (y7l8f9) {
    window['x19$J'] = y7l8f9, window['x19$J'] && window['x1J$'] && (console[u[1051]](u[1237] + window['x1J$'][u[1238]]), window['x19$J'](window['x1J$']), window['x1J$'] = null);
}, window['x19J$'] = function (mi4gsx, gmxs4, pqhra_, bkwt31) {
    window[u[1239]](u[1240], {
        'game_pkg': window[u[980]][u[997]],
        'role_id': gmxs4,
        'server_id': pqhra_
    }, bkwt31);
}, window['x16$J9'] = function (gdiv, pehaq, p0ek) {
    function f9y87(pbk0h) {
        var y9l87f = [],
            xzmso = [],
            qa0pe = p0ek || window[u[972]][u[1241]];
        for (var uvndg in qa0pe) {
            var t31bkw = Number(uvndg);
            (!gdiv || !gdiv[u[31]] || gdiv[u[146]](t31bkw) != -0x1) && (xzmso[u[66]](qa0pe[uvndg]), y9l87f[u[66]]([t31bkw, 0x3]));
        }
        window['x1TJ9$6'](window[u[1242]], u[1243]) >= 0x0 ? (console[u[225]](u[1244]), xzo2[u[1245]] && xzo2[u[1245]](xzmso, function (hb0ew) {
            console[u[225]](u[1246]), console[u[225]](hb0ew);
            if (hb0ew && hb0ew[u[1122]] == u[1247]) for (var a_ in qa0pe) {
                if (hb0ew[qa0pe[a_]] == u[1248]) {
                    var cn9ufj = Number(a_);
                    for (var rph_q = 0x0; rph_q < y9l87f[u[31]]; rph_q++) {
                        if (y9l87f[rph_q][0x0] == cn9ufj) {
                            y9l87f[rph_q][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['x1TJ9$6'](window[u[1242]], u[1249]) >= 0x0 ? wx[u[1250]]({
                'withSubscriptions': !![],
                'success': function (t6oz25) {
                    var ujfvn = t6oz25[u[1251]][u[1252]];
                    if (ujfvn) {
                        console[u[225]](u[1253]), console[u[225]](ujfvn);
                        for (var pha0b in qa0pe) {
                            if (ujfvn[qa0pe[pha0b]] == u[1248]) {
                                var mx4s = Number(pha0b);
                                for (var x4ig = 0x0; x4ig < y9l87f[u[31]]; x4ig++) {
                                    if (y9l87f[x4ig][0x0] == mx4s) {
                                        y9l87f[x4ig][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[u[225]](y9l87f), pehaq && pehaq(y9l87f);
                    } else console[u[225]](u[1254]), console[u[225]](t6oz25), console[u[225]](y9l87f), pehaq && pehaq(y9l87f);
                },
                'fail': function () {
                    console[u[225]](u[1255]), console[u[225]](y9l87f), pehaq && pehaq(y9l87f);
                }
            }) : (console[u[225]](u[1256] + window[u[1242]]), console[u[225]](y9l87f), pehaq && pehaq(y9l87f));
        })) : (console[u[225]](u[1257] + window[u[1242]]), console[u[225]](y9l87f), pehaq && pehaq(y9l87f)), wx[u[1258]](f9y87);
    }
    wx[u[1259]](f9y87);
}, window['x16$9J'] = {
    'isSuccess': ![],
    'level': u[1260],
    'isCharging': ![]
}, window['x16J$9'] = function (oimxs) {
    wx[u[1261]]({
        'success': function (dvigx4) {
            var ha0pqe = window['x16$9J'];
            ha0pqe[u[1262]] = !![], ha0pqe[u[1263]] = Number(dvigx4[u[1263]])[u[1264]](0x0), ha0pqe[u[1265]] = dvigx4[u[1265]], oimxs && oimxs(ha0pqe[u[1262]], ha0pqe[u[1263]], ha0pqe[u[1265]]);
        },
        'fail': function (gidx4s) {
            console[u[225]](u[1266], gidx4s[u[1122]]);
            var c9l7 = window['x16$9J'];
            oimxs && oimxs(c9l7[u[1262]], c9l7[u[1263]], c9l7[u[1265]]);
        }
    });
}, window[u[1267]] = function (f9c7) {
    wx[u[1267]]({
        'success': function (fj9lc7) {
            f9c7 && f9c7(!![], fj9lc7);
        },
        'fail': function (osm4xi) {
            f9c7 && f9c7(![], osm4xi);
        }
    });
}, window[u[1268]] = function (ucf9) {
    if (ucf9) wx[u[1268]](ucf9);
}, window[u[1269]] = function (mzosx5) {
    wx[u[1269]](mzosx5);
}, window[u[1239]] = function (a0pehb, un4gv, oximz, sm5xo, lc78, sxgm4i, h0pbke, vidug4) {
    if (sm5xo == undefined) sm5xo = 0x1;
    wx[u[1081]]({
        'url': a0pehb,
        'method': h0pbke || u[1270],
        'responseType': u[1271],
        'data': un4gv,
        'header': { 'content-type': vidug4 || u[1083] },
        'success': function (peha_q) {
            DEBUG && console[u[225]](u[1272], a0pehb, info, peha_q);
            if (peha_q && peha_q[u[1273]] == 0xc8) {
                var nf9lc = peha_q[u[335]];
                !sxgm4i || sxgm4i(nf9lc) ? oximz && oximz(nf9lc) : window[u[1274]](a0pehb, un4gv, oximz, sm5xo, lc78, sxgm4i, peha_q);
            } else window[u[1274]](a0pehb, un4gv, oximz, sm5xo, lc78, sxgm4i, peha_q);
        },
        'fail': function (bwe1k) {
            DEBUG && console[u[225]](u[1275], a0pehb, info, bwe1k), window[u[1274]](a0pehb, un4gv, oximz, sm5xo, lc78, sxgm4i, bwe1k);
        },
        'complete': function () {}
    });
}, window[u[1274]] = function (cjunv, isx4dg, sm52o, p0hq, dxi4gv, uvcjnd, n9ujfc) {
    p0hq - 0x1 > 0x0 ? setTimeout(function () {
        window[u[1239]](cjunv, isx4dg, sm52o, p0hq - 0x1, dxi4gv, uvcjnd);
    }, 0x3e8) : dxi4gv && dxi4gv(JSON[u[1071]]({
        'url': cjunv,
        'response': n9ujfc
    }));
}, window[u[1276]] = function (njlfc9, hkebw0, xigm4s, o562, ahprq_, heqpa, wbeh) {
    !xigm4s && (xigm4s = {});
    var nujvc = Math[u[71]](Date[u[1009]]() / 0x3e8);
    xigm4s[u[1148]] = nujvc, xigm4s[u[1277]] = hkebw0;
    var hpqae = Object[u[30]](xigm4s)[u[382]](),
        lc79fj = '',
        y8l97$ = '';
    for (var $8y9l7 = 0x0; $8y9l7 < hpqae[u[31]]; $8y9l7++) {
        lc79fj = lc79fj + ($8y9l7 == 0x0 ? '' : '&') + hpqae[$8y9l7] + xigm4s[hpqae[$8y9l7]], y8l97$ = y8l97$ + ($8y9l7 == 0x0 ? '' : '&') + hpqae[$8y9l7] + '=' + encodeURIComponent(xigm4s[hpqae[$8y9l7]]);
    }
    lc79fj = lc79fj + x169[u[994]];
    var vfncju = u[1278] + md5(lc79fj);
    send(njlfc9 + '?' + y8l97$ + (y8l97$ == '' ? '' : '&') + vfncju, null, o562, ahprq_, heqpa, wbeh || function (w13tk) {
        return w13tk[u[1050]] == u[1137];
    }, null, u[1279]);
}, window['x16J9$'] = function (_qphra, jndcv) {
    var ujndc = 0x0;
    x169[u[1003]] && (ujndc = x169[u[1003]][u[1068]]), sendApi(x169[u[990]], u[1280], {
        'partnerId': x169[u[996]],
        'gamePkg': x169[u[997]],
        'logTime': Math[u[71]](Date[u[1009]]() / 0x3e8),
        'platformUid': x169[u[1144]],
        'type': _qphra,
        'serverId': ujndc
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['x169$J'] = function (smzixo) {
    sendApi(x169[u[988]], u[1281], {
        'partner_id': x169[u[996]],
        'uid': x169[u[1066]],
        'version': x169[u[983]],
        'game_pkg': x169[u[997]],
        'device': x169[u[998]]
    }, x169J$, x1J96, x19$);
}, window['x169J$'] = function (f78yl9) {
    if (f78yl9 && f78yl9[u[1050]] === u[1137] && f78yl9[u[335]]) {
        f78yl9[u[335]][u[174]]({
            'id': -0x2,
            'name': u[1282]
        }), f78yl9[u[335]][u[174]]({
            'id': -0x1,
            'name': u[1283]
        }), x169[u[1284]] = f78yl9[u[335]];
        if (window[u[1285]]) window[u[1285]][u[1286]]();
    } else {
        x169[u[1287]] = ![];
        var aeh_qp = f78yl9 ? f78yl9[u[1050]] : '';
        window[u[1060]](0x7, u[1288] + aeh_qp), window['x1$J69'](u[1289] + aeh_qp);
    }
}, window['x1$J6'] = function (w0b1) {
    sendApi(x169[u[988]], u[1290], {
        'partner_id': x169[u[996]],
        'uid': x169[u[1066]],
        'version': x169[u[983]],
        'game_pkg': x169[u[997]],
        'device': x169[u[998]]
    }, x1$6J, x1J96, x19$);
}, window['x1$6J'] = function (wt16) {
    x169[u[1291]] = ![];
    if (wt16 && wt16[u[1050]] === u[1137] && wt16[u[335]]) {
        for (var nclj9f = 0x0; nclj9f < wt16[u[335]][u[31]]; nclj9f++) {
            wt16[u[335]][nclj9f][u[1179]] = x16J$(wt16[u[335]][nclj9f]);
        }
        x169[u[1000]][-0x1] = window[u[1292]](wt16[u[335]]), window[u[1285]][u[1293]](-0x1);
    } else {
        var n9lfjc = wt16 ? wt16[u[1050]] : '';
        window[u[1060]](0x8, u[1294] + n9lfjc), window['x1$J69'](u[1295] + n9lfjc);
    }
}, window[u[1296]] = function (t3562z) {
    sendApi(x169[u[988]], u[1290], {
        'partner_id': x169[u[996]],
        'uid': x169[u[1066]],
        'version': x169[u[983]],
        'game_pkg': x169[u[997]],
        'device': x169[u[998]]
    }, t3562z, x1J96, x19$);
}, window['x1J$6'] = function (moz265, u4ngv) {
    sendApi(x169[u[988]], u[1297], {
        'partner_id': x169[u[996]],
        'uid': x169[u[1066]],
        'version': x169[u[983]],
        'game_pkg': x169[u[997]],
        'device': x169[u[998]],
        'server_group_id': u4ngv
    }, x1J6$, x1J96, x19$);
}, window['x1J6$'] = function (c9l8f) {
    x169[u[1291]] = ![];
    if (c9l8f && c9l8f[u[1050]] === u[1137] && c9l8f[u[335]] && c9l8f[u[335]][u[335]]) {
        var zt5o6 = c9l8f[u[335]][u[1298]],
            mx4oi = [];
        for (var izxmos = 0x0; izxmos < c9l8f[u[335]][u[335]][u[31]]; izxmos++) {
            c9l8f[u[335]][u[335]][izxmos][u[1179]] = x16J$(c9l8f[u[335]][u[335]][izxmos]), (mx4oi[u[31]] == 0x0 || c9l8f[u[335]][u[335]][izxmos][u[1179]] != 0x0) && (mx4oi[mx4oi[u[31]]] = c9l8f[u[335]][u[335]][izxmos]);
        }
        x169[u[1000]][zt5o6] = window[u[1292]](mx4oi), window[u[1285]][u[1293]](zt5o6);
    } else {
        var he_qap = c9l8f ? c9l8f[u[1050]] : '';
        window[u[1060]](0x9, u[1299] + he_qap), window['x1$J69'](u[1300] + he_qap);
    }
}, window[u[1301]] = function (ig4v) {
    sendApi(x169[u[988]], u[1302], {
        'partner_id': x169[u[996]],
        'uid': x169[u[1066]],
        'version': x169[u[983]],
        'game_pkg': x169[u[997]],
        'device': x169[u[998]]
    }, reqServerRecommendCallBack, x1J96, x19$);
}, window[u[1303]] = function (tk63) {
    x169[u[1291]] = ![];
    if (tk63 && tk63[u[1050]] === u[1137] && tk63[u[335]]) {
        for (var h0q = 0x0; h0q < tk63[u[335]][u[31]]; h0q++) {
            tk63[u[335]][h0q][u[1179]] = x16J$(tk63[u[335]][h0q]);
        }
        x169[u[1000]][-0x2] = window[u[1292]](tk63[u[335]]), window[u[1285]][u[1293]](-0x2);
    } else {
        var mxgis = tk63 ? tk63[u[1050]] : '';
        window[u[1060]](0xa, u[1304] + mxgis), alert(u[1305] + mxgis);
    }
}, window[u[1292]] = function (s4mxio) {
    return s4mxio;
}, window['x16$J'] = function (xm5szo, heap0q) {
    xm5szo = xm5szo || x169[u[1003]][u[1068]], sendApi(x169[u[988]], u[1306], {
        'type': '4',
        'game_pkg': x169[u[997]],
        'server_id': xm5szo
    }, heap0q);
}, window[u[1307]] = function (pbahe, m2s5o, ixsgm4, ehqa0) {
    ixsgm4 = ixsgm4 || x169[u[1003]][u[1068]], sendApi(x169[u[988]], u[1308], {
        'type': pbahe,
        'game_pkg': m2s5o,
        'server_id': ixsgm4
    }, ehqa0);
}, window[u[1309]] = function (clf78, bkw0h) {
    sendApi(x169[u[988]], u[1310], { 'game_pkg': clf78 }, bkw0h);
}, window['x16J$'] = function (qh_rp) {
    if (qh_rp) {
        if (qh_rp[u[1179]] == 0x1) {
            if (qh_rp[u[1311]] == 0x3) return 0x3;else return qh_rp[u[1311]] == 0x1 ? 0x2 : 0x1;
        } else return qh_rp[u[1179]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['x19$J6'] = function (ke0hwb, divgu) {
    x169[u[1312]] = {
        'step': ke0hwb,
        'server_id': divgu
    };
    var we1k = this;
    x1$6J9({ 'title': u[1313] }), sendApi(x169[u[988]], u[1314], {
        'partner_id': x169[u[996]],
        'uid': x169[u[1066]],
        'game_pkg': x169[u[997]],
        'server_id': divgu,
        'platform': x169[u[1143]],
        'platform_uid': x169[u[1144]],
        'check_login_time': x169[u[1147]],
        'check_login_sign': x169[u[1145]],
        'version_name': x169[u[1106]]
    }, x19$6J, x1J96, x19$, function (sizxom) {
        return sizxom[u[1050]] == u[1137] || sizxom[u[1051]] == u[1315] || sizxom[u[1051]] == u[1316];
    });
}, window['x19$6J'] = function (jdngvu) {
    var hr_qp = this;
    if (jdngvu && jdngvu[u[1050]] === u[1137] && jdngvu[u[335]]) {
        var eap_hq = x169[u[1003]];
        eap_hq[u[1317]] = x169[u[1001]], eap_hq[u[1146]] = String(jdngvu[u[335]][u[1318]]), eap_hq[u[1008]] = parseInt(jdngvu[u[335]][u[1148]]);
        if (jdngvu[u[335]][u[1319]]) eap_hq[u[1319]] = parseInt(jdngvu[u[335]][u[1319]]);else eap_hq[u[1319]] = parseInt(jdngvu[u[335]][u[1068]]);
        eap_hq[u[1320]] = 0x0, eap_hq[u[1067]] = x169[u[1193]], eap_hq[u[1321]] = jdngvu[u[335]][u[1322]], eap_hq[u[1323]] = jdngvu[u[335]][u[1323]];
        if (jdngvu[u[335]][u[1324]]) eap_hq[u[1324]] = parseInt(jdngvu[u[335]][u[1324]]);
        console[u[225]](u[1325] + JSON[u[1071]](eap_hq[u[1323]])), x169[u[1165]] == 0x1 && eap_hq[u[1323]] && eap_hq[u[1323]][u[1326]] == 0x1 && (x169[u[1327]] = 0x1, window[u[1047]][u[1048]][u[1328]]()), x19J$6();
    } else {
        if (x169[u[1312]][u[1329]] >= 0x3) {
            var t5z62 = jdngvu ? jdngvu[u[1050]] : '';
            window[u[1060]](0xc, u[1330] + t5z62), x19$(JSON[u[1071]](jdngvu)), window['x1$J69'](u[1331] + t5z62);
        } else sendApi(x169[u[988]], u[1120], {
            'platform': x169[u[986]],
            'partner_id': x169[u[996]],
            'token': x169[u[1114]],
            'game_pkg': x169[u[997]],
            'deviceId': x169[u[998]],
            'scene': u[1121] + x169[u[999]]
        }, function (d4gsix) {
            if (!d4gsix || d4gsix[u[1050]] != u[1137]) {
                window['x1$J69'](u[1139] + d4gsix && d4gsix[u[1050]]);
                return;
            }
            x169[u[1145]] = String(d4gsix[u[1146]]), x169[u[1147]] = String(d4gsix[u[1148]]), setTimeout(function () {
                x19$J6(x169[u[1312]][u[1329]] + 0x1, x169[u[1312]][u[1068]]);
            }, 0x5dc);
        }, x1J96, x19$, function (fuc) {
            return fuc[u[1050]] == u[1137] || fuc[u[1050]] == u[1332];
        });
    }
}, window['x19J$6'] = function () {
    ServerLoading[u[1048]][u[1184]](x169[u[1165]]), window[u[1021]] = !![], window['x196$J']();
}, window['x19J6$'] = function () {
    if (window[u[1022]] && window[u[1023]] && window[u[1024]] && window[u[1025]] && window[u[1026]] && window[u[1028]]) {
        if (!window[u[1333]][u[1048]]) {
            console[u[225]](u[1334] + window[u[1333]][u[1048]]);
            var c98lf7 = wx[u[1335]](),
                qap0eh = c98lf7[u[1238]] ? c98lf7[u[1238]] : 0x0,
                osxz5m = {
                'cdn': window[u[980]][u[1067]],
                'spareCdn': window[u[980]][u[1104]],
                'newRegister': window[u[980]][u[1165]],
                'wxPC': window[u[980]][u[1019]],
                'wxIOS': window[u[980]][u[1017]],
                'wxAndroid': window[u[980]][u[1018]],
                'wxParam': {
                    'limitLoad': window[u[980]]['x1T$J96'],
                    'benchmarkLevel': window[u[980]]['x1T$6J9'],
                    'wxFrom': window[u[972]][u[51]] == u[1336] ? 0x1 : 0x0,
                    'wxSDKVersion': window[u[1242]]
                },
                'configType': window[u[980]][u[1010]],
                'exposeType': window[u[980]][u[1012]],
                'scene': qap0eh,
                'video_type': window[u[980]][u[1116]],
                'ad_flag': window[u[980]][u[1118]]
            };
            if (window[u[1196]]) for (var zom6 in window[u[1196]]) {
                if (!osxz5m[zom6]) osxz5m[zom6] = window[u[1196]][zom6];
            }
            new window[u[1333]](osxz5m, window[u[980]][u[1015]], window['x1T$J69']);
        }
    }
}, window['x196$J'] = function () {
    if (window[u[1022]] && window[u[1023]] && window[u[1024]] && window[u[1025]] && window[u[1026]] && window[u[1028]] && window[u[1021]] && window[u[1027]]) {
        x1$69J();
        if (!x19J6) {
            x19J6 = !![];
            if (!window[u[1333]][u[1048]]) window['x19J6$']();
            var vjncf = 0x0,
                uvjfnc = wx[u[1337]]();
            uvjfnc && (window[u[980]][u[1338]] && (vjncf = uvjfnc[u[1339]]), console[u[1051]](u[1340] + uvjfnc[u[1339]] + u[1341] + uvjfnc[u[1342]] + u[1343] + uvjfnc[u[1344]] + u[1345] + uvjfnc[u[1346]] + u[1347] + uvjfnc[u[1348]] + u[1349] + uvjfnc[u[1350]]));
            var tk16w = {};
            for (const ungj in x169[u[1003]]) {
                tk16w[ungj] = x169[u[1003]][ungj];
            }
            var x4ids = {
                'channel': window[u[980]][u[1002]],
                'account': window[u[980]][u[1066]],
                'userId': window[u[980]][u[1142]],
                'cdn': window[u[980]][u[1067]],
                'data': window[u[980]][u[335]],
                'package': window[u[980]][u[304]],
                'newRegister': window[u[980]][u[1165]],
                'pkgName': window[u[980]][u[997]],
                'partnerId': window[u[980]][u[996]],
                'platform_uid': window[u[980]][u[1144]],
                'deviceId': window[u[980]][u[998]],
                'selectedServer': tk16w,
                'configType': window[u[980]][u[1010]],
                'exposeType': window[u[980]][u[1012]],
                'debugUsers': window[u[980]][u[1006]],
                'wxMenuTop': vjncf,
                'wxShield': window[u[980]][u[1016]],
                'encryptParam': window[u[980]][u[1013]],
                'wx_channel': window[u[980]][u[1115]],
                'zsy_tp_state': window[u[980]][u[1117]]
            };
            if (window[u[1196]]) for (var unjdgv in window[u[1196]]) {
                x4ids[unjdgv] = window[u[1196]][unjdgv];
            }
            window[u[1333]][u[1048]][u[1351]](x4ids);
            if (x169[u[1003]] && x169[u[1003]][u[1068]]) localStorage[u[1352]](u[1151] + x169[u[997]] + x169[u[1066]], x169[u[1003]][u[1068]]);
        }
    } else console[u[1051]](u[1353] + window[u[1022]] + u[1354] + window[u[1023]] + u[1355] + window[u[1024]] + u[1356] + window[u[1025]] + u[1357] + window[u[1026]] + u[1358] + window[u[1028]] + u[1359] + window[u[1021]] + u[1360] + window[u[1027]]);
};