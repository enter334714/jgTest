var u = wx.$x;
import xyx2hc from '../z888z888basdz888/z8885sdkz888.js';
window[u[1114]] = { 'wxVersion': window[u[964]][u[965]] }, window[u[1115]] = ![], window[u[1116]] = 0x1, window[u[1117]] = 0x1, window[u[1118]] = !![], window[u[1119]] = !![], window[u[1120]] = '', window[u[1121]] = ![], window[u[971]] = {
    'base_cdn': u[1122],
    'cdn': u[1122]
}, x108[u[1123]] = {}, x108[u[304]] = '0', x108[u[1043]] = window[u[1114]][u[1124]], x108[u[1076]] = '', x108['os'] = '1', x108[u[1125]] = u[1126], x108[u[1127]] = u[1128], x108[u[1129]] = u[1130], x108[u[1131]] = u[1132], x108[u[1133]] = u[1134], x108[u[1135]] = '1', x108[u[978]] = '', x108[u[1136]] = '', x108[u[1137]] = 0x0, x108[u[1138]] = {}, x108[u[1139]] = parseInt(x108[u[1135]]), x108[u[1140]] = x108[u[1135]], x108[u[979]] = {}, x108[u[985]] = u[1141], x108[u[1142]] = ![], x108[u[1143]] = u[1144], x108[u[1145]] = Date[u[1108]](), x108[u[1146]] = u[1147], x108[u[1148]] = '_a', x108[u[1149]] = 0x2, x108[u[976]] = 0x7c1, x108[u[1124]] = window[u[1114]][u[1124]], x108[u[1150]] = ![], x108[u[1069]] = ![], x108[u[1071]] = ![], x108[u[1074]] = ![], window[u[1151]] = 0x5, window[u[1152]] = ![], window[u[1017]] = ![], window[u[1026]] = ![], window[u[1153]] = ![], window[u[1154]] = ![], window[u[1155]] = ![], window[u[1156]] = ![], window[u[1157]] = ![], window[u[1158]] = ![], window[u[1159]] = null, window[u[1160]] = function (d4u1fo) {
    console[u[225]](u[1160], d4u1fo), wx[u[1161]]({}), wx[u[1004]]({
        'title': u[1035],
        'content': d4u1fo,
        'success'(zm_$r) {
            if (zm_$r[u[1162]]) console[u[225]](u[1163]);else zm_$r[u[1164]] && console[u[225]](u[1165]);
        }
    });
}, window[u[1166]] = function (e$38lq) {
    console[u[225]](u[1167], e$38lq), x1A086(), wx[u[1004]]({
        'title': u[1035],
        'content': e$38lq,
        'confirmText': u[1168],
        'cancelText': u[1169],
        'success'(dfa45k) {
            if (dfa45k[u[1162]]) window[u[1032]]();else dfa45k[u[1164]] && (console[u[225]](u[1170]), wx[u[1171]]({}));
        }
    });
}, window[u[1172]] = function (tixybn) {
    console[u[225]](u[1172], tixybn), wx[u[1004]]({
        'title': u[1035],
        'content': tixybn,
        'confirmText': u[1173],
        'showCancel': ![],
        'complete'(ij2hy) {
            console[u[225]](u[1170]), wx[u[1171]]({});
        }
    });
}, window[u[1174]] = ![], window[u[1175]] = function (l38$eq) {
    window[u[1174]] = !![], wx[u[1176]](l38$eq);
}, window[u[1177]] = function () {
    window[u[1174]] && (window[u[1174]] = ![], wx[u[1161]]({}));
}, window[u[1178]] = function (fu4od1) {
    window[u[991]][u[992]][u[1178]](fu4od1);
}, window[u[1179]] = function ($qe83l, f4a5k) {
    xyx2hc[u[1179]]($qe83l, function (sr$e) {
        sr$e && sr$e[u[335]] ? sr$e[u[335]][u[1180]] == 0x1 ? f4a5k(!![]) : (f4a5k(![]), console[u[960]](u[1181] + sr$e[u[335]][u[1182]])) : console[u[225]](u[1179], sr$e);
    });
}, window[u[1183]] = function ($3e8ql) {
    console[u[225]](u[1184], $3e8ql);
}, window[u[1185]] = function (e8lq$) {}, window[u[1186]] = function ($ms_er, mer_, a7lv6) {}, window[u[1187]] = function (q6e3) {
    console[u[225]](u[1188], q6e3), window[u[991]][u[992]][u[1189]](), window[u[991]][u[992]][u[1190]](), window[u[991]][u[992]][u[1191]]();
}, window[u[1192]] = function (tnxyib) {
    window[u[1193]](0xe, u[1194] + tnxyib), window[u[1166]](u[1195]);
    var rnzmbs = {
        'id': window[u[971]][u[972]],
        'role': window[u[971]][u[973]],
        'level': window[u[971]][u[974]],
        'account': window[u[971]][u[975]],
        'version': window[u[971]][u[976]],
        'cdn': window[u[971]][u[977]],
        'pkgName': window[u[971]][u[978]],
        'gamever': window[u[964]][u[965]],
        'serverid': window[u[971]][u[979]] ? window[u[971]][u[979]][u[980]] : 0x0,
        'systemInfo': window[u[981]],
        'error': u[1196],
        'stack': tnxyib ? tnxyib : u[1195]
    },
        rsq$e_ = JSON[u[983]](rnzmbs);
    console[u[333]](u[1197] + rsq$e_), window[u[985]](rsq$e_);
}, window[u[1193]] = function (bxtzn, ud1w) {
    sendApi(x108[u[1129]], u[1198], {
        'game_pkg': x108[u[978]],
        'partner_id': x108[u[1135]],
        'server_id': x108[u[979]] && x108[u[979]][u[980]] > 0x0 ? x108[u[979]][u[980]] : 0x0,
        'uid': x108[u[975]] > 0x0 ? x108[u[975]] : 0x0,
        'type': bxtzn,
        'info': ud1w
    });
}, window[u[1199]] = function (nbtmxz) {
    var tzbns = JSON[u[223]](nbtmxz);
    tzbns[u[1200]] = window[u[964]][u[965]], tzbns[u[1201]] = window[u[971]][u[979]] ? window[u[971]][u[979]][u[980]] : 0x0, tzbns[u[981]] = window[u[981]];
    var w1od = JSON[u[983]](tzbns);
    console[u[333]](u[1202] + w1od), window[u[985]](w1od);
}, window[u[1033]] = function (wo14d, nxtby) {
    var h2ijyc = {
        'id': window[u[971]][u[972]],
        'role': window[u[971]][u[973]],
        'level': window[u[971]][u[974]],
        'account': window[u[971]][u[975]],
        'version': window[u[971]][u[976]],
        'cdn': window[u[971]][u[977]],
        'pkgName': window[u[971]][u[978]],
        'gamever': window[u[964]][u[965]],
        'serverid': window[u[971]][u[979]] ? window[u[971]][u[979]][u[980]] : 0x0,
        'systemInfo': window[u[981]],
        'error': wo14d,
        'stack': nxtby
    },
        ko4d5f = JSON[u[983]](h2ijyc);
    console[u[383]](u[1203] + ko4d5f), window[u[985]](ko4d5f);
}, window[u[985]] = function (hbxy) {
    if (window[u[971]][u[1077]] == u[1204]) return;
    var hyic2 = x108[u[985]] + u[1205] + x108[u[975]];
    wx[u[1206]]({
        'url': hyic2,
        'method': u[1207],
        'data': hbxy,
        'header': {
            'content-type': u[1208],
            'cache-control': u[1209]
        },
        'success': function (ixth) {
            DEBUG && console[u[225]](u[1210], hyic2, hbxy, ixth);
        },
        'fail': function (ch2ixy) {
            DEBUG && console[u[225]](u[1210], hyic2, hbxy, ch2ixy);
        },
        'complete': function () {}
    });
}, window[u[1211]] = function () {
    function tznixb() {
        return ((0x1 + Math[u[1212]]()) * 0x10000 | 0x0)[u[60]](0x10)[u[234]](0x1);
    }
    return tznixb() + tznixb() + '-' + tznixb() + '-' + tznixb() + '-' + tznixb() + '+' + tznixb() + tznixb() + tznixb();
}, window[u[1032]] = function () {
    console[u[225]](u[1213]);
    var q_r3$e = xyx2hc[u[1214]]();
    x108[u[1140]] = q_r3$e[u[1215]], x108[u[1139]] = q_r3$e[u[1215]], x108[u[1135]] = q_r3$e[u[1215]], x108[u[978]] = q_r3$e[u[1216]];
    var $zrs_m = { 'game_ver': x108[u[1043]] };
    x108[u[1136]] = this[u[1211]](), x1A068({ 'title': u[1217] }), xyx2hc[u[1218]]($zrs_m, this[u[1219]][u[17]](this));
}, window[u[1219]] = function (fdk54a) {
    var $r3q_ = fdk54a[u[1220]];
    sdkInitRes = fdk54a, console[u[225]](u[1221] + $r3q_ + u[1222] + ($r3q_ == 0x1) + u[1223] + fdk54a[u[965]] + u[1224] + window[u[1114]][u[1124]]);
    if (!fdk54a[u[965]] || window[u[995]](window[u[1114]][u[1124]], fdk54a[u[965]]) < 0x0) console[u[225]](u[1225]), x108[u[1127]] = u[1226], x108[u[1129]] = u[1227], x108[u[1131]] = u[1228], x108[u[977]] = u[1229], x108[u[1230]] = u[1231], x108[u[1232]] = u[1233], x108[u[1150]] = ![];else window[u[995]](window[u[1114]][u[1124]], fdk54a[u[965]]) == 0x0 ? (console[u[225]](u[1234]), x108[u[1127]] = u[1128], x108[u[1129]] = u[1130], x108[u[1131]] = u[1132], x108[u[977]] = u[1235], x108[u[1230]] = u[1231], x108[u[1232]] = u[1236], x108[u[1150]] = !![]) : (console[u[225]](u[1237]), x108[u[1127]] = u[1128], x108[u[1129]] = u[1130], x108[u[1131]] = u[1132], x108[u[977]] = u[1235], x108[u[1230]] = u[1231], x108[u[1232]] = u[1236], x108[u[1150]] = ![]);
    x108[u[1137]] = config[u[51]] ? config[u[51]] : 0x0, this[u[1238]](), this[u[1239]](), window[u[1240]] = 0x5, x1A068({ 'title': u[1241] }), xyx2hc[u[1242]](this[u[1243]][u[17]](this));
}, window[u[1240]] = 0x5, window[u[1243]] = function (_$seq, sr_mn) {
    if (_$seq == 0x0 && sr_mn && sr_mn[u[285]]) {
        x108[u[1244]] = sr_mn[u[285]], x108[u[1245]] = sr_mn[u[1245]];
        var dfuo4 = this;
        x1A068({ 'title': u[1246] }), sendApi(x108[u[1127]], u[1247], {
            'platform': x108[u[1125]],
            'partner_id': x108[u[1135]],
            'token': sr_mn[u[285]],
            'game_pkg': x108[u[978]],
            'deviceId': x108[u[1136]],
            'scene': u[1248] + x108[u[1137]]
        }, this[u[1249]][u[17]](this), x1680, x18A);
    } else sr_mn && sr_mn[u[1015]] && window[u[1240]] > 0x0 && (sr_mn[u[1015]][u[146]](u[1250]) != -0x1 || sr_mn[u[1015]][u[146]](u[1251]) != -0x1 || sr_mn[u[1015]][u[146]](u[1252]) != -0x1 || sr_mn[u[1015]][u[146]](u[1253]) != -0x1 || sr_mn[u[1015]][u[146]](u[1254]) != -0x1 || sr_mn[u[1015]][u[146]](u[1255]) != -0x1) ? (window[u[1240]]--, xyx2hc[u[1242]](this[u[1243]][u[17]](this))) : (window[u[1193]](0x1, u[1256] + _$seq + u[1257] + (sr_mn ? sr_mn[u[1015]] : '')), window[u[1033]](u[1258], JSON[u[983]]({
        'status': _$seq,
        'data': sr_mn
    })), window[u[1166]](u[1259] + (sr_mn && sr_mn[u[1015]] ? '，' + sr_mn[u[1015]] : '')));
}, window[u[1249]] = function (w01) {
    if (!w01) {
        window[u[1193]](0x2, u[1260]), window[u[1033]](u[1261], u[1262]), window[u[1166]](u[1263]);
        return;
    }
    if (w01[u[1180]] != u[1264]) {
        window[u[1193]](0x2, u[1265] + w01[u[1180]]), window[u[1033]](u[1261], JSON[u[983]](w01)), window[u[1166]](u[1266] + w01[u[1180]]);
        return;
    }
    if (w01[u[1267]] == 0x1) {
        window[u[1166]](u[1268]);
        return;
    }
    x108[u[1269]] = String(w01[u[975]]), x108[u[975]] = String(w01[u[975]]), x108[u[1047]] = String(w01[u[1047]]), x108[u[1140]] = String(w01[u[1047]]), x108[u[1270]] = String(w01[u[1270]]), x108[u[1271]] = String(w01[u[1272]]), x108[u[1273]] = String(w01[u[1274]]), x108[u[1272]] = '';
    var yixt2h = this;
    x1A068({ 'title': u[1275] });
    var uw41o = localStorage[u[1276]](u[1277] + x108[u[978]] + x108[u[975]]);
    if (uw41o && uw41o != '') {
        var ihtxby = Number(uw41o);
        yixt2h[u[1278]](ihtxby);
    } else yixt2h[u[1279]]();
}, window[u[1279]] = function () {
    var xt2iyh = this;
    sendApi(x108[u[1127]], u[1280], {
        'partner_id': x108[u[1135]],
        'uid': x108[u[975]],
        'version': x108[u[1043]],
        'game_pkg': x108[u[978]],
        'device': x108[u[1136]]
    }, xt2iyh[u[1281]][u[17]](xt2iyh), x1680, x18A);
}, window[u[1281]] = function (p091wg) {
    if (!p091wg) {
        window[u[1193]](0x3, u[1282]), window[u[1166]](u[1282]);
        return;
    }
    if (p091wg[u[1180]] != u[1264]) {
        window[u[1193]](0x3, u[1283] + p091wg[u[1180]]), window[u[1166]](u[1283] + p091wg[u[1180]]);
        return;
    }
    if (!p091wg[u[335]] || p091wg[u[335]][u[31]] == 0x0) {
        window[u[1193]](0x3, u[1284]), window[u[1166]](u[1285]);
        return;
    }
    this[u[1286]](p091wg);
}, window[u[1278]] = function (q_$er) {
    var tnxi = this;
    sendApi(x108[u[1127]], u[1287], {
        'server_id': q_$er,
        'time': Date[u[1108]]() / 0x3e8
    }, tnxi[u[1288]][u[17]](tnxi), x1680, x18A);
}, window[u[1288]] = function (_zrm$s) {
    if (!_zrm$s) {
        window[u[1193]](0x4, u[1289]), this[u[1279]]();
        return;
    }
    if (_zrm$s[u[1180]] != u[1264]) {
        window[u[1193]](0x4, u[1290] + _zrm$s[u[1180]]), this[u[1279]]();
        return;
    }
    if (!_zrm$s[u[335]] || _zrm$s[u[335]][u[31]] == 0x0) {
        window[u[1193]](0x4, u[1291]), this[u[1279]]();
        return;
    }
    this[u[1286]](_zrm$s), window[u[991]] && window[u[991]][u[992]][u[1292]] && window[u[991]][u[992]][u[1292]](sdkInitRes[u[1293]], sdkInitRes[u[1294]], sdkInitRes[u[1295]], sdkInitRes[u[1296]], sdkInitRes[u[1297]]);
}, window[u[1286]] = function (la7k) {
    x108[u[1298]] = la7k[u[1299]] != undefined ? la7k[u[1299]] : 0x0, x108[u[979]] = {
        'server_id': String(la7k[u[335]][0x0][u[980]]),
        'server_name': String(la7k[u[335]][0x0][u[1300]]),
        'entry_ip': la7k[u[335]][0x0][u[1301]],
        'entry_port': parseInt(la7k[u[335]][0x0][u[1302]]),
        'status': x106A(la7k[u[335]][0x0]),
        'start_time': la7k[u[335]][0x0][u[1303]],
        'maintain_time': la7k[u[335]][0x0][u[1304]] ? la7k[u[335]][0x0][u[1304]] : '',
        'cdn': x108[u[977]]
    }, this[u[1305]]();
}, window[u[1305]] = function () {
    if (x108[u[1298]] == 0x1) {
        var x2ihty = x108[u[979]][u[1306]];
        if (x2ihty === -0x1 || x2ihty === 0x0) {
            window[u[1193]](0xf, u[1307] + x108[u[979]]['id'] + u[1308] + x108[u[979]][u[1306]]), window[u[1166]](x2ihty === -0x1 ? u[1309] : u[1310]);
            return;
        }
        x18A60(0x0, x108[u[979]][u[980]]), window[u[991]][u[992]][u[1311]](x108[u[1298]]);
    } else window[u[991]][u[992]][u[1312]](), x1A086();
    window[u[1157]] = !![], window[u[1018]](), window[u[1019]]();
}, window[u[1238]] = function () {
    sendApi(x108[u[1127]], u[1313], {
        'game_pkg': x108[u[978]],
        'version_name': x108[u[1232]]
    }, this[u[1314]][u[17]](this), x1680, x18A);
}, window[u[1314]] = function (q7l86) {
    if (!q7l86) {
        window[u[1193]](0x5, u[1315]), window[u[1166]](u[1315]);
        return;
    }
    if (q7l86[u[1180]] != u[1264]) {
        window[u[1193]](0x5, u[1316] + q7l86[u[1180]]), window[u[1166]](u[1316] + q7l86[u[1180]]);
        return;
    }
    if (!q7l86[u[335]] || !q7l86[u[335]][u[1043]]) {
        window[u[1193]](0x5, u[1317] + (q7l86[u[335]] && q7l86[u[335]][u[1043]])), window[u[1166]](u[1317] + (q7l86[u[335]] && q7l86[u[335]][u[1043]]));
        return;
    }
    q7l86[u[335]][u[1318]] && q7l86[u[335]][u[1318]][u[31]] > 0xa && (x108[u[1319]] = q7l86[u[335]][u[1318]], x108[u[977]] = q7l86[u[335]][u[1318]]), q7l86[u[335]][u[1043]] && (x108[u[976]] = q7l86[u[335]][u[1043]]), console[u[960]](u[1320] + x108[u[976]] + u[1321] + x108[u[1232]]), window[u[1155]] = !![], window[u[1018]](), window[u[1019]]();
}, window[u[1322]], window[u[1239]] = function () {
    sendApi(x108[u[1127]], u[1323], { 'game_pkg': x108[u[978]] }, this[u[1324]][u[17]](this), x1680, x18A);
}, window[u[1324]] = function (d54fak) {
    if (d54fak && d54fak[u[1180]] === u[1264] && d54fak[u[335]]) {
        window[u[1322]] = d54fak[u[335]];
        for (var rs_me in d54fak[u[335]]) {
            x108[rs_me] = d54fak[u[335]][rs_me];
        }
    } else window[u[1193]](0xb, u[1325]), console[u[960]](u[1326] + d54fak[u[1180]]);
    window[u[1156]] = !![], window[u[1019]]();
}, window[u[1327]] = function ($eq8_, btnizx, lq387, w1uo0d, hti2yx, zmbtsn, _nrzms, tsbzm, q38el$, e$_q8) {
    hti2yx = String(hti2yx);
    var tyhxbi = _nrzms,
        mztn = tsbzm;
    x108[u[1123]][hti2yx] = {
        'productid': hti2yx,
        'productname': tyhxbi,
        'productdesc': mztn,
        'roleid': $eq8_,
        'rolename': btnizx,
        'rolelevel': lq387,
        'price': zmbtsn,
        'callback': q38el$
    }, sendApi(x108[u[1131]], u[1328], {
        'game_pkg': x108[u[978]],
        'server_id': x108[u[979]][u[980]],
        'server_name': x108[u[979]][u[1300]],
        'level': lq387,
        'uid': x108[u[975]],
        'role_id': $eq8_,
        'role_name': btnizx,
        'product_id': hti2yx,
        'product_name': tyhxbi,
        'product_desc': mztn,
        'money': zmbtsn,
        'partner_id': x108[u[1135]]
    }, toPayCallBack, x1680, x18A);
}, window[u[1329]] = function (ztmnb) {
    if (ztmnb && (ztmnb[u[1330]] === 0xc8 || ztmnb[u[1180]] == u[1264])) {
        var xtnzbi = x108[u[1123]][String(ztmnb[u[1331]])];
        if (xtnzbi[u[1332]]) xtnzbi[u[1332]](ztmnb[u[1331]], ztmnb[u[1333]], -0x1);
        xyx2hc[u[1334]]({
            'cpbill': ztmnb[u[1333]],
            'productid': ztmnb[u[1331]],
            'productname': xtnzbi[u[1335]],
            'productdesc': xtnzbi[u[1336]],
            'serverid': x108[u[979]][u[980]],
            'servername': x108[u[979]][u[1300]],
            'roleid': xtnzbi[u[1337]],
            'rolename': xtnzbi[u[1338]],
            'rolelevel': xtnzbi[u[1339]],
            'price': xtnzbi[u[1340]],
            'extension': JSON[u[983]]({ 'cp_order_id': ztmnb[u[1333]] })
        }, function (l8eq6, _sz$rm) {
            xtnzbi[u[1332]] && l8eq6 == 0x0 && xtnzbi[u[1332]](ztmnb[u[1331]], ztmnb[u[1333]], l8eq6);
            console[u[960]](JSON[u[983]]({
                'type': u[1341],
                'status': l8eq6,
                'data': ztmnb,
                'role_name': xtnzbi[u[1338]]
            }));
            if (l8eq6 === 0x0) {} else {
                if (l8eq6 === 0x1) {} else {
                    if (l8eq6 === 0x2) {}
                }
            }
        });
    } else {
        var zrs$ = ztmnb ? u[1342] + ztmnb[u[1330]] + u[1343] + ztmnb[u[1180]] + u[1344] + ztmnb[u[960]] : u[1345];
        window[u[1193]](0xd, u[1346] + zrs$), alert(zrs$);
    }
}, window[u[1347]] = function () {}, window[u[1348]] = function (tzmbsn, $eqsr_, snm_r, nzmxbt, xbthyi) {
    xyx2hc[u[1349]](x108[u[979]][u[980]], x108[u[979]][u[1300]] || x108[u[979]][u[980]], tzmbsn, $eqsr_, snm_r), sendApi(x108[u[1127]], u[1350], {
        'game_pkg': x108[u[978]],
        'server_id': x108[u[979]][u[980]],
        'role_id': tzmbsn,
        'uid': x108[u[975]],
        'role_name': $eqsr_,
        'role_type': nzmxbt,
        'level': snm_r
    });
}, window[u[1351]] = function (srq_, d5fou4, $mzr_s, hytx2i, zmrn, cy2hxi, _msr$, s$q_er, tbmsz, xtyibh) {
    x108[u[972]] = srq_, x108[u[973]] = d5fou4, x108[u[974]] = $mzr_s, xyx2hc[u[1352]](x108[u[979]][u[980]], x108[u[979]][u[1300]] || x108[u[979]][u[980]], srq_, d5fou4, $mzr_s), sendApi(x108[u[1127]], u[1353], {
        'game_pkg': x108[u[978]],
        'server_id': x108[u[979]][u[980]],
        'role_id': srq_,
        'uid': x108[u[975]],
        'role_name': d5fou4,
        'role_type': hytx2i,
        'level': $mzr_s,
        'evolution': zmrn
    });
}, window[u[1354]] = function (v4fak5, ihxty2, i2jh, es$r_q, xyhtbi, sr$_zm, zn_sr, fa5d, itzx, ixy2c) {
    x108[u[972]] = v4fak5, x108[u[973]] = ihxty2, x108[u[974]] = i2jh, xyx2hc[u[1355]](x108[u[979]][u[980]], x108[u[979]][u[1300]] || x108[u[979]][u[980]], v4fak5, ihxty2, i2jh), sendApi(x108[u[1127]], u[1353], {
        'game_pkg': x108[u[978]],
        'server_id': x108[u[979]][u[980]],
        'role_id': v4fak5,
        'uid': x108[u[975]],
        'role_name': ihxty2,
        'role_type': es$r_q,
        'level': i2jh,
        'evolution': xyhtbi
    });
}, window[u[1356]] = function ($83lqe) {}, window[u[1357]] = function (l78q6) {
    xyx2hc[u[1358]](u[1358], function (e68lq) {
        l78q6 && l78q6(e68lq);
    });
}, window[u[1359]] = function () {
    xyx2hc[u[1359]]();
}, window[u[1360]] = function () {
    xyx2hc[u[1361]]();
}, window[u[1362]] = function (nizbxt, mznxt, ers$q, mtnxzb, nxiyt, ybi, o1wd4, f7kva5) {
    f7kva5 = f7kva5 || x108[u[979]][u[980]], sendApi(x108[u[1127]], u[1363], {
        'phone': nizbxt,
        'role_id': mznxt,
        'uid': x108[u[975]],
        'game_pkg': x108[u[978]],
        'partner_id': x108[u[1135]],
        'server_id': f7kva5
    }, o1wd4, 0x2, null, function () {
        return !![];
    });
}, window[u[1099]] = function (m_$se) {
    window[u[1101]] = m_$se, window[u[1101]] && window[u[1100]] && (console[u[960]](u[1102] + window[u[1100]][u[1103]]), window[u[1101]](window[u[1100]]), window[u[1100]] = null);
}, window[u[1364]] = function (puwo01, zxm, $srzm, mstbn) {
    window[u[1365]](u[1366], {
        'game_pkg': window[u[971]][u[978]],
        'role_id': zxm,
        'server_id': $srzm
    }, mstbn);
}, window[u[1367]] = function (a67l8v, i2chx, f75vka) {
    function va67l(ouw01p) {
        var m_zrns = [],
            vl78a6 = [],
            msbnr = f75vka || window[u[964]][u[1368]];
        for (var l836q in msbnr) {
            var tbzxin = Number(l836q);
            (!a67l8v || !a67l8v[u[31]] || a67l8v[u[146]](tbzxin) != -0x1) && (vl78a6[u[66]](msbnr[l836q]), m_zrns[u[66]]([tbzxin, 0x3]));
        }
        window[u[995]](window[u[996]], u[1369]) >= 0x0 ? (console[u[225]](u[1370]), xyx2hc[u[1371]] && xyx2hc[u[1371]](vl78a6, function (htyx) {
            console[u[225]](u[1372]), console[u[225]](htyx);
            if (htyx && htyx[u[1015]] == u[1373]) for (var vl67a in msbnr) {
                if (htyx[msbnr[vl67a]] == u[1374]) {
                    var htx2i = Number(vl67a);
                    for (var c2xi = 0x0; c2xi < m_zrns[u[31]]; c2xi++) {
                        if (m_zrns[c2xi][0x0] == htx2i) {
                            m_zrns[c2xi][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[u[995]](window[u[996]], u[1375]) >= 0x0 ? wx[u[1376]]({
                'withSubscriptions': !![],
                'success': function (mxnbz) {
                    var vka567 = mxnbz[u[1377]][u[1378]];
                    if (vka567) {
                        console[u[225]](u[1379]), console[u[225]](vka567);
                        for (var ou41d in msbnr) {
                            if (vka567[msbnr[ou41d]] == u[1374]) {
                                var ud14f = Number(ou41d);
                                for (var tbyihx = 0x0; tbyihx < m_zrns[u[31]]; tbyihx++) {
                                    if (m_zrns[tbyihx][0x0] == ud14f) {
                                        m_zrns[tbyihx][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[u[225]](m_zrns), i2chx && i2chx(m_zrns);
                    } else console[u[225]](u[1380]), console[u[225]](mxnbz), console[u[225]](m_zrns), i2chx && i2chx(m_zrns);
                },
                'fail': function () {
                    console[u[225]](u[1381]), console[u[225]](m_zrns), i2chx && i2chx(m_zrns);
                }
            }) : (console[u[225]](u[1382] + window[u[996]]), console[u[225]](m_zrns), i2chx && i2chx(m_zrns));
        })) : (console[u[225]](u[1383] + window[u[996]]), console[u[225]](m_zrns), i2chx && i2chx(m_zrns)), wx[u[1384]](va67l);
    }
    wx[u[1385]](va67l);
}, window[u[1386]] = {
    'isSuccess': ![],
    'level': u[1387],
    'isCharging': ![]
}, window[u[1388]] = function (f5da4) {
    wx[u[1087]]({
        'success': function (w1p09g) {
            var u910 = window[u[1386]];
            u910[u[1389]] = !![], u910[u[1089]] = Number(w1p09g[u[1089]])[u[1390]](0x0), u910[u[1091]] = w1p09g[u[1091]], f5da4 && f5da4(u910[u[1389]], u910[u[1089]], u910[u[1091]]);
        },
        'fail': function (mtzsn) {
            console[u[225]](u[1391], mtzsn[u[1015]]);
            var bihxt = window[u[1386]];
            f5da4 && f5da4(bihxt[u[1389]], bihxt[u[1089]], bihxt[u[1091]]);
        }
    });
}, window[u[1092]] = function (r_zs$m) {
    wx[u[1092]]({
        'success': function (gw1) {
            r_zs$m && r_zs$m(!![], gw1);
        },
        'fail': function (_qe$r) {
            r_zs$m && r_zs$m(![], _qe$r);
        }
    });
}, window[u[1096]] = function (nbtzmx) {
    if (nbtzmx) wx[u[1096]](nbtzmx);
}, window[u[1392]] = function (kv567) {
    wx[u[1392]](kv567);
}, window[u[1365]] = function (du1o, ybtixn, q38l67, ud41ow, hixtyb, qe$r_3, $8e3, uofd1) {
    if (ud41ow == undefined) ud41ow = 0x1;
    wx[u[1206]]({
        'url': du1o,
        'method': $8e3 || u[1393],
        'responseType': u[1394],
        'data': ybtixn,
        'header': { 'content-type': uofd1 || u[1208] },
        'success': function (nxmtzb) {
            DEBUG && console[u[225]](u[1395], du1o, info, nxmtzb);
            if (nxmtzb && nxmtzb[u[1396]] == 0xc8) {
                var ms_$zr = nxmtzb[u[335]];
                !qe$r_3 || qe$r_3(ms_$zr) ? q38l67 && q38l67(ms_$zr) : window[u[1397]](du1o, ybtixn, q38l67, ud41ow, hixtyb, qe$r_3, nxmtzb);
            } else window[u[1397]](du1o, ybtixn, q38l67, ud41ow, hixtyb, qe$r_3, nxmtzb);
        },
        'fail': function (re$sq_) {
            DEBUG && console[u[225]](u[1398], du1o, info, re$sq_), window[u[1397]](du1o, ybtixn, q38l67, ud41ow, hixtyb, qe$r_3, re$sq_);
        },
        'complete': function () {}
    });
}, window[u[1397]] = function (f4do5k, d54ak, q_re$3, po1u0, v5k67, owu10d, m$es_r) {
    po1u0 - 0x1 > 0x0 ? setTimeout(function () {
        window[u[1365]](f4do5k, d54ak, q_re$3, po1u0 - 0x1, v5k67, owu10d);
    }, 0x3e8) : v5k67 && v5k67(JSON[u[983]]({
        'url': f4do5k,
        'response': m$es_r
    }));
}, window[u[1399]] = function (nzb, iy2hxt, tbzmx, vkaf, i2jc, vk76, hitbx) {
    !tbzmx && (tbzmx = {});
    var a67vl8 = Math[u[71]](Date[u[1108]]() / 0x3e8);
    tbzmx[u[1274]] = a67vl8, tbzmx[u[1400]] = iy2hxt;
    var nzbmx = Object[u[30]](tbzmx)[u[382]](),
        _ser = '',
        sm$zr = '';
    for (var a57vfk = 0x0; a57vfk < nzbmx[u[31]]; a57vfk++) {
        _ser = _ser + (a57vfk == 0x0 ? '' : '&') + nzbmx[a57vfk] + tbzmx[nzbmx[a57vfk]], sm$zr = sm$zr + (a57vfk == 0x0 ? '' : '&') + nzbmx[a57vfk] + '=' + encodeURIComponent(tbzmx[nzbmx[a57vfk]]);
    }
    _ser = _ser + x108[u[1133]];
    var kal7v = u[1401] + md5(_ser);
    send(nzb + '?' + sm$zr + (sm$zr == '' ? '' : '&') + kal7v, null, vkaf, i2jc, vk76, hitbx || function (rms_$) {
        return rms_$[u[1180]] == u[1264];
    }, null, u[1402]);
}, window[u[1403]] = function (zs_mrn, mrzs_n) {
    var ithyx = 0x0;
    x108[u[979]] && (ithyx = x108[u[979]][u[980]]), sendApi(x108[u[1129]], u[1404], {
        'partnerId': x108[u[1135]],
        'gamePkg': x108[u[978]],
        'logTime': Math[u[71]](Date[u[1108]]() / 0x3e8),
        'platformUid': x108[u[1270]],
        'type': zs_mrn,
        'serverId': ithyx
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[u[1405]] = function (fudo5) {
    sendApi(x108[u[1127]], u[1406], {
        'partner_id': x108[u[1135]],
        'uid': x108[u[975]],
        'version': x108[u[1043]],
        'game_pkg': x108[u[978]],
        'device': x108[u[1136]]
    }, x1086A, x1680, x18A);
}, window[u[1407]] = function (qes$_) {
    if (qes$_ && qes$_[u[1180]] === u[1264] && qes$_[u[335]]) {
        qes$_[u[335]][u[174]]({
            'id': -0x2,
            'name': u[1408]
        }), qes$_[u[335]][u[174]]({
            'id': -0x1,
            'name': u[1409]
        }), x108[u[1410]] = qes$_[u[335]];
        if (window[u[1411]]) window[u[1411]][u[1412]]();
    } else {
        x108[u[1413]] = ![];
        var btxmz = qes$_ ? qes$_[u[1180]] : '';
        window[u[1193]](0x7, u[1414] + btxmz), window[u[1166]](u[1415] + btxmz);
    }
}, window[u[1416]] = function (a7kf5v) {
    sendApi(x108[u[1127]], u[1417], {
        'partner_id': x108[u[1135]],
        'uid': x108[u[975]],
        'version': x108[u[1043]],
        'game_pkg': x108[u[978]],
        'device': x108[u[1136]]
    }, x1A06, x1680, x18A);
}, window[u[1418]] = function (_3$eqr) {
    x108[u[1419]] = ![];
    if (_3$eqr && _3$eqr[u[1180]] === u[1264] && _3$eqr[u[335]]) {
        for (var q67l = 0x0; q67l < _3$eqr[u[335]][u[31]]; q67l++) {
            _3$eqr[u[335]][q67l][u[1306]] = x106A(_3$eqr[u[335]][q67l]);
        }
        x108[u[1138]][-0x1] = window[u[1420]](_3$eqr[u[335]]), window[u[1411]][u[1421]](-0x1);
    } else {
        var xiztnb = _3$eqr ? _3$eqr[u[1180]] : '';
        window[u[1193]](0x8, u[1422] + xiztnb), window[u[1166]](u[1423] + xiztnb);
    }
}, window[u[1424]] = function (ityxbh) {
    sendApi(x108[u[1127]], u[1417], {
        'partner_id': x108[u[1135]],
        'uid': x108[u[975]],
        'version': x108[u[1043]],
        'game_pkg': x108[u[978]],
        'device': x108[u[1136]]
    }, ityxbh, x1680, x18A);
}, window[u[1425]] = function (itbzn, cxyih) {
    sendApi(x108[u[1127]], u[1426], {
        'partner_id': x108[u[1135]],
        'uid': x108[u[975]],
        'version': x108[u[1043]],
        'game_pkg': x108[u[978]],
        'device': x108[u[1136]],
        'server_group_id': cxyih
    }, x160A, x1680, x18A);
}, window[u[1427]] = function (q_rs$) {
    x108[u[1419]] = ![];
    if (q_rs$ && q_rs$[u[1180]] === u[1264] && q_rs$[u[335]] && q_rs$[u[335]][u[335]]) {
        var zsm$r = q_rs$[u[335]][u[1428]],
            k45v = [];
        for (var xbtiyh = 0x0; xbtiyh < q_rs$[u[335]][u[335]][u[31]]; xbtiyh++) {
            q_rs$[u[335]][u[335]][xbtiyh][u[1306]] = x106A(q_rs$[u[335]][u[335]][xbtiyh]), (k45v[u[31]] == 0x0 || q_rs$[u[335]][u[335]][xbtiyh][u[1306]] != 0x0) && (k45v[k45v[u[31]]] = q_rs$[u[335]][u[335]][xbtiyh]);
        }
        x108[u[1138]][zsm$r] = window[u[1420]](k45v), window[u[1411]][u[1421]](zsm$r);
    } else {
        var fk5a4 = q_rs$ ? q_rs$[u[1180]] : '';
        window[u[1193]](0x9, u[1429] + fk5a4), window[u[1166]](u[1430] + fk5a4);
    }
}, window[u[1431]] = function (k7f) {
    sendApi(x108[u[1127]], u[1432], {
        'partner_id': x108[u[1135]],
        'uid': x108[u[975]],
        'version': x108[u[1043]],
        'game_pkg': x108[u[978]],
        'device': x108[u[1136]]
    }, reqServerRecommendCallBack, x1680, x18A);
}, window[u[1433]] = function (_smn) {
    x108[u[1419]] = ![];
    if (_smn && _smn[u[1180]] === u[1264] && _smn[u[335]]) {
        for (var hij2yc = 0x0; hij2yc < _smn[u[335]][u[31]]; hij2yc++) {
            _smn[u[335]][hij2yc][u[1306]] = x106A(_smn[u[335]][hij2yc]);
        }
        x108[u[1138]][-0x2] = window[u[1420]](_smn[u[335]]), window[u[1411]][u[1421]](-0x2);
    } else {
        var q_e$8 = _smn ? _smn[u[1180]] : '';
        window[u[1193]](0xa, u[1434] + q_e$8), alert(u[1435] + q_e$8);
    }
}, window[u[1420]] = function (jchi2y) {
    return jchi2y;
}, window[u[1436]] = function (kfa5v7, va7k5) {
    kfa5v7 = kfa5v7 || x108[u[979]][u[980]], sendApi(x108[u[1127]], u[1437], {
        'type': '4',
        'game_pkg': x108[u[978]],
        'server_id': kfa5v7
    }, va7k5);
}, window[u[1438]] = function (k7fv5a, w90p, zitnx, _3$qr) {
    zitnx = zitnx || x108[u[979]][u[980]], sendApi(x108[u[1127]], u[1439], {
        'type': k7fv5a,
        'game_pkg': w90p,
        'server_id': zitnx
    }, _3$qr);
}, window[u[1440]] = function (szmnt, fko45d) {
    sendApi(x108[u[1127]], u[1441], { 'game_pkg': szmnt }, fko45d);
}, window[u[1442]] = function (qes_$r) {
    if (qes_$r) {
        if (qes_$r[u[1306]] == 0x1) {
            if (qes_$r[u[1443]] == 0x1) return 0x2;else return 0x1;
        } else return qes_$r[u[1306]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[u[1444]] = function (r$3e_q, k567) {
    x108[u[1445]] = {
        'step': r$3e_q,
        'server_id': k567
    };
    var htxyi2 = this;
    x1A068({ 'title': u[1446] }), sendApi(x108[u[1127]], u[1447], {
        'partner_id': x108[u[1135]],
        'uid': x108[u[975]],
        'game_pkg': x108[u[978]],
        'server_id': k567,
        'platform': x108[u[1047]],
        'platform_uid': x108[u[1270]],
        'check_login_time': x108[u[1273]],
        'check_login_sign': x108[u[1271]],
        'version_name': x108[u[1232]]
    }, x18A06, x1680, x18A, function ($3elq) {
        return $3elq[u[1180]] == u[1264] || $3elq[u[960]] == u[1448] || $3elq[u[960]] == u[1449];
    });
}, window[u[1450]] = function (nzrsm) {
    var _srme = this;
    if (nzrsm && nzrsm[u[1180]] === u[1264] && nzrsm[u[335]]) {
        var o1ud0w = x108[u[979]];
        o1ud0w[u[1451]] = x108[u[1139]], o1ud0w[u[1272]] = String(nzrsm[u[335]][u[1452]]), o1ud0w[u[1145]] = parseInt(nzrsm[u[335]][u[1274]]);
        if (nzrsm[u[335]][u[1453]]) o1ud0w[u[1453]] = parseInt(nzrsm[u[335]][u[1453]]);else o1ud0w[u[1453]] = parseInt(nzrsm[u[335]][u[980]]);
        o1ud0w[u[1454]] = 0x0, o1ud0w[u[977]] = x108[u[1319]], o1ud0w[u[1455]] = nzrsm[u[335]][u[1456]], o1ud0w[u[1457]] = nzrsm[u[335]][u[1457]];
        if (nzrsm[u[335]][u[1458]]) o1ud0w[u[1458]] = parseInt(nzrsm[u[335]][u[1458]]);
        console[u[225]](u[1459] + JSON[u[983]](o1ud0w[u[1457]])), x108[u[1298]] == 0x1 && o1ud0w[u[1457]] && o1ud0w[u[1457]][u[1460]] == 0x1 && (x108[u[1461]] = 0x1, window[u[991]][u[992]][u[1462]]()), x186A0();
    } else {
        if (x108[u[1445]][u[1463]] >= 0x3) {
            var p90g = nzrsm ? nzrsm[u[1180]] : '';
            window[u[1193]](0xc, u[1464] + p90g), x18A(JSON[u[983]](nzrsm)), window[u[1166]](u[1465] + p90g);
        } else sendApi(x108[u[1127]], u[1247], {
            'platform': x108[u[1125]],
            'partner_id': x108[u[1135]],
            'token': x108[u[1244]],
            'game_pkg': x108[u[978]],
            'deviceId': x108[u[1136]],
            'scene': u[1248] + x108[u[1137]]
        }, function (d4fk5a) {
            if (!d4fk5a || d4fk5a[u[1180]] != u[1264]) {
                window[u[1166]](u[1266] + d4fk5a && d4fk5a[u[1180]]);
                return;
            }
            x108[u[1271]] = String(d4fk5a[u[1272]]), x108[u[1273]] = String(d4fk5a[u[1274]]), setTimeout(function () {
                x18A60(x108[u[1445]][u[1463]] + 0x1, x108[u[1445]][u[980]]);
            }, 0x5dc);
        }, x1680, x18A, function (_se$m) {
            return _se$m[u[1180]] == u[1264] || _se$m[u[1180]] == u[1466];
        });
    }
}, window[u[1467]] = function () {
    ServerLoading[u[992]][u[1311]](x108[u[1298]]), window[u[1152]] = !![], window[u[1019]]();
}, window[u[1018]] = function () {
    if (window[u[1017]] && window[u[1026]] && window[u[1153]] && window[u[1154]] && window[u[1155]] && window[u[1157]]) {
        if (!window[u[1468]][u[992]]) {
            console[u[225]](u[1469] + window[u[1468]][u[992]]);
            var nxiby = wx[u[1470]](),
                e68lq3 = nxiby[u[1103]] ? nxiby[u[1103]] : 0x0,
                sm_er = {
                'cdn': window[u[971]][u[977]],
                'spareCdn': window[u[971]][u[1230]],
                'newRegister': window[u[971]][u[1298]],
                'wxPC': window[u[971]][u[1074]],
                'wxIOS': window[u[971]][u[1069]],
                'wxAndroid': window[u[971]][u[1071]],
                'wxParam': {
                    'limitLoad': window[u[971]][u[1078]],
                    'benchmarkLevel': window[u[971]][u[1079]],
                    'wxFrom': window[u[964]][u[51]] == u[1471] ? 0x1 : 0x0,
                    'wxSDKVersion': window[u[996]]
                },
                'configType': window[u[971]][u[1146]],
                'exposeType': window[u[971]][u[1148]],
                'scene': e68lq3
            };
            new window[u[1468]](sm_er, window[u[971]][u[976]], window[u[1120]]);
        }
    }
}, window[u[1019]] = function () {
    if (window[u[1017]] && window[u[1026]] && window[u[1153]] && window[u[1154]] && window[u[1155]] && window[u[1157]] && window[u[1152]] && window[u[1156]]) {
        x1A086();
        if (!x1860) {
            x1860 = !![];
            if (!window[u[1468]][u[992]]) window[u[1018]]();
            var uwd01 = 0x0,
                o4d5uf = wx[u[1472]]();
            o4d5uf && (window[u[971]][u[1073]] && (uwd01 = o4d5uf[u[1065]]), console[u[960]](u[1473] + o4d5uf[u[1065]] + u[1474] + o4d5uf[u[1066]] + u[1475] + o4d5uf[u[1067]] + u[1476] + o4d5uf[u[1068]] + u[1477] + o4d5uf[u[1478]] + u[1479] + o4d5uf[u[1480]]));
            var hbytix = {};
            for (const odwu41 in x108[u[979]]) {
                hbytix[odwu41] = x108[u[979]][odwu41];
            }
            var fk45do = {
                'channel': window[u[971]][u[1140]],
                'account': window[u[971]][u[975]],
                'userId': window[u[971]][u[1269]],
                'cdn': window[u[971]][u[977]],
                'data': window[u[971]][u[335]],
                'package': window[u[971]][u[304]],
                'newRegister': window[u[971]][u[1298]],
                'pkgName': window[u[971]][u[978]],
                'partnerId': window[u[971]][u[1135]],
                'platform_uid': window[u[971]][u[1270]],
                'deviceId': window[u[971]][u[1136]],
                'selectedServer': hbytix,
                'configType': window[u[971]][u[1146]],
                'exposeType': window[u[971]][u[1148]],
                'debugUsers': window[u[971]][u[1143]],
                'wxMenuTop': uwd01,
                'wxShield': window[u[971]][u[1150]],
                'wx_channel': window[u[971]][u[1245]]
            };
            if (window[u[1322]]) for (var y2jch in window[u[1322]]) {
                fk45do[y2jch] = window[u[1322]][y2jch];
            }
            window[u[1468]][u[992]][u[1481]](fk45do);
            if (x108[u[979]] && x108[u[979]][u[980]]) localStorage[u[1482]](u[1277] + x108[u[978]] + x108[u[975]], x108[u[979]][u[980]]);
        }
    } else console[u[960]](u[1483] + window[u[1017]] + u[1484] + window[u[1026]] + u[1485] + window[u[1153]] + u[1486] + window[u[1154]] + u[1487] + window[u[1155]] + u[1488] + window[u[1157]] + u[1489] + window[u[1152]] + u[1490] + window[u[1156]]);
};