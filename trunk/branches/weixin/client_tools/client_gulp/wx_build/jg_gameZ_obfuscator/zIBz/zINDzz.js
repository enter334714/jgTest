var B = wx.$z;
import zpgh491 from '../zzabzzsdk/z7sdkz.js';
window[B[960]] = { 'wxVersion': window[B[961]][B[962]] }, window[B[963]] = ![], window[B[964]] = 0x1, window[B[965]] = 0x1, window[B[966]] = !![], window[B[967]] = !![], window[B[968]] = '', window[B[969]] = ![], window[B[970]] = {
    'base_cdn': B[971],
    'cdn': B[971]
}, z0JD[B[972]] = {}, z0JD[B[304]] = '0', z0JD[B[973]] = window[B[960]][B[974]], z0JD[B[975]] = '', z0JD['os'] = '1', z0JD[B[976]] = B[977], z0JD[B[978]] = B[979], z0JD[B[980]] = B[981], z0JD[B[982]] = B[983], z0JD[B[984]] = B[985], z0JD[B[986]] = '1', z0JD[B[987]] = '', z0JD[B[988]] = '', z0JD[B[989]] = 0x0, z0JD[B[990]] = {}, z0JD[B[991]] = parseInt(z0JD[B[986]]), z0JD[B[992]] = z0JD[B[986]], z0JD[B[993]] = {}, z0JD[B[994]] = B[995], z0JD[B[996]] = ![], z0JD[B[997]] = B[998], z0JD[B[999]] = Date[B[1000]](), z0JD[B[1001]] = B[1002], z0JD[B[1003]] = '_a', z0JD[B[1004]] = 0x2, z0JD[B[1005]] = 0x7c1, z0JD[B[974]] = window[B[960]][B[974]], z0JD[B[1006]] = ![], z0JD[B[1007]] = ![], z0JD[B[1008]] = ![], z0JD[B[1009]] = ![], window[B[1010]] = 0x5, window[B[1011]] = ![], window[B[1012]] = ![], window[B[1013]] = ![], window[B[1014]] = ![], window[B[1015]] = ![], window[B[1016]] = ![], window[B[1017]] = ![], window[B[1018]] = ![], window[B[1019]] = ![], window[B[1020]] = null, window[B[1021]] = function (ydkr8b) {
    console[B[225]](B[1021], ydkr8b), wx[B[1022]]({}), wx[B[1023]]({
        'title': B[1024],
        'content': ydkr8b,
        'success'(xse9a1) {
            if (xse9a1[B[1025]]) console[B[225]](B[1026]);else xse9a1[B[1027]] && console[B[225]](B[1028]);
        }
    });
}, window[B[1029]] = function (f67nlv) {
    console[B[225]](B[1030], f67nlv), z00JDY(), wx[B[1023]]({
        'title': B[1024],
        'content': f67nlv,
        'confirmText': B[1031],
        'cancelText': B[1032],
        'success'(_wu5) {
            if (_wu5[B[1025]]) window[B[1033]]();else _wu5[B[1027]] && (console[B[225]](B[1034]), wx[B[1035]]({}));
        }
    });
}, window[B[1036]] = function (dzoky) {
    console[B[225]](B[1036], dzoky), wx[B[1023]]({
        'title': B[1024],
        'content': dzoky,
        'confirmText': B[1037],
        'showCancel': ![],
        'complete'(lnv76f) {
            console[B[225]](B[1034]), wx[B[1035]]({});
        }
    });
}, window[B[1038]] = ![], window[B[1039]] = function (x1) {
    window[B[1038]] = !![], wx[B[1040]](x1);
}, window[B[1041]] = function () {
    window[B[1038]] && (window[B[1038]] = ![], wx[B[1022]]({}));
}, window[B[1042]] = function (ob8k) {
    window[B[1043]][B[1044]][B[1042]](ob8k);
}, window[B[1045]] = function (wu20_5, rk5) {
    zpgh491[B[1045]](wu20_5, function (i7n3m) {
        i7n3m && i7n3m[B[335]] ? i7n3m[B[335]][B[1046]] == 0x1 ? rk5(!![]) : (rk5(![]), console[B[1047]](B[1048] + i7n3m[B[335]][B[1049]])) : console[B[225]](B[1045], i7n3m);
    });
}, window[B[1050]] = function (oztda) {
    console[B[225]](B[1051], oztda);
}, window[B[1052]] = function (br8ydk) {}, window[B[1053]] = function (r_2wu, vpg6f, r_8bky) {}, window[B[1054]] = function (br_82) {
    console[B[225]](B[1055], br_82), window[B[1043]][B[1044]][B[1056]](), window[B[1043]][B[1044]][B[1057]](), window[B[1043]][B[1044]][B[1058]]();
}, window[B[1059]] = function (ykdrb) {
    window[B[1060]](0xe, B[1061] + ykdrb), window[B[1029]](B[1062]);
    var ezoy = {
        'id': window[B[970]][B[1063]],
        'role': window[B[970]][B[1064]],
        'level': window[B[970]][B[1065]],
        'account': window[B[970]][B[1066]],
        'version': window[B[970]][B[1005]],
        'cdn': window[B[970]][B[1067]],
        'pkgName': window[B[970]][B[987]],
        'gamever': window[B[961]][B[962]],
        'serverid': window[B[970]][B[993]] ? window[B[970]][B[993]][B[1068]] : 0x0,
        'systemInfo': window[B[1069]],
        'error': B[1070],
        'stack': ykdrb ? ykdrb : B[1062]
    },
        tzodky = JSON[B[1071]](ezoy);
    console[B[333]](B[1072] + tzodky), window[B[994]](tzodky);
}, window[B[1060]] = function (lgfv, nf4vl6) {
    sendApi(z0JD[B[980]], B[1073], {
        'game_pkg': z0JD[B[987]],
        'partner_id': z0JD[B[986]],
        'server_id': z0JD[B[993]] && z0JD[B[993]][B[1068]] > 0x0 ? z0JD[B[993]][B[1068]] : 0x0,
        'uid': z0JD[B[1066]] > 0x0 ? z0JD[B[1066]] : 0x0,
        'type': lgfv,
        'info': nf4vl6
    });
}, window[B[1074]] = function (a91shx) {
    var h1x9p = JSON[B[223]](a91shx);
    h1x9p[B[1075]] = window[B[961]][B[962]], h1x9p[B[1076]] = window[B[970]][B[993]] ? window[B[970]][B[993]][B[1068]] : 0x0, h1x9p[B[1069]] = window[B[1069]];
    var n67vfl = JSON[B[1071]](h1x9p);
    console[B[333]](B[1077] + n67vfl), window[B[994]](n67vfl);
}, window[B[1078]] = function (h41pg9, j3$qi) {
    var qi3mn = {
        'id': window[B[970]][B[1063]],
        'role': window[B[970]][B[1064]],
        'level': window[B[970]][B[1065]],
        'account': window[B[970]][B[1066]],
        'version': window[B[970]][B[1005]],
        'cdn': window[B[970]][B[1067]],
        'pkgName': window[B[970]][B[987]],
        'gamever': window[B[961]][B[962]],
        'serverid': window[B[970]][B[993]] ? window[B[970]][B[993]][B[1068]] : 0x0,
        'systemInfo': window[B[1069]],
        'error': h41pg9,
        'stack': j3$qi
    },
        ydze = JSON[B[1071]](qi3mn);
    console[B[383]](B[1079] + ydze), window[B[994]](ydze);
}, window[B[994]] = function (deaozt) {
    if (window[B[970]][B[1080]] == B[1081]) return;
    var hpf6g = z0JD[B[994]] + B[1082] + z0JD[B[1066]];
    wx[B[1083]]({
        'url': hpf6g,
        'method': B[1084],
        'data': deaozt,
        'header': {
            'content-type': B[1085],
            'cache-control': B[1086]
        },
        'success': function (r8kbd) {
            DEBUG && console[B[225]](B[1087], hpf6g, deaozt, r8kbd);
        },
        'fail': function (lvfn4) {
            DEBUG && console[B[225]](B[1087], hpf6g, deaozt, lvfn4);
        },
        'complete': function () {}
    });
}, window[B[1088]] = function () {
    function aedtzo() {
        return ((0x1 + Math[B[1089]]()) * 0x10000 | 0x0)[B[60]](0x10)[B[234]](0x1);
    }
    return aedtzo() + aedtzo() + '-' + aedtzo() + '-' + aedtzo() + '-' + aedtzo() + '+' + aedtzo() + aedtzo() + aedtzo();
}, window[B[1033]] = function () {
    console[B[225]](B[1090]);
    var m37inl = zpgh491[B[1091]]();
    z0JD[B[992]] = m37inl[B[1092]], z0JD[B[991]] = m37inl[B[1092]], z0JD[B[986]] = m37inl[B[1092]], z0JD[B[987]] = m37inl[B[1093]];
    var gx1p = { 'game_ver': z0JD[B[973]] };
    z0JD[B[988]] = this[B[1088]](), z00JYD({ 'title': B[1094] }), zpgh491[B[1095]](gx1p, this[B[1096]][B[17]](this));
}, window[B[1096]] = function (m7i3$) {
    var nv6f7l = m7i3$[B[1097]];
    sdkInitRes = m7i3$, console[B[225]](B[1098] + nv6f7l + B[1099] + (nv6f7l == 0x1) + B[1100] + m7i3$[B[962]] + B[1101] + window[B[960]][B[974]]);
    if (!m7i3$[B[962]] || window[B[1102]](window[B[960]][B[974]], m7i3$[B[962]]) < 0x0) console[B[225]](B[1103]), z0JD[B[978]] = B[1104], z0JD[B[980]] = B[1105], z0JD[B[982]] = B[1106], z0JD[B[1067]] = B[1107], z0JD[B[1108]] = B[1109], z0JD[B[1110]] = 'fj', z0JD[B[1006]] = ![];else window[B[1102]](window[B[960]][B[974]], m7i3$[B[962]]) == 0x0 ? (console[B[225]](B[1111]), z0JD[B[978]] = B[979], z0JD[B[980]] = B[981], z0JD[B[982]] = B[983], z0JD[B[1067]] = B[1112], z0JD[B[1108]] = B[1109], z0JD[B[1110]] = B[1113], z0JD[B[1006]] = !![]) : (console[B[225]](B[1114]), z0JD[B[978]] = B[979], z0JD[B[980]] = B[981], z0JD[B[982]] = B[983], z0JD[B[1067]] = B[1112], z0JD[B[1108]] = B[1109], z0JD[B[1110]] = B[1113], z0JD[B[1006]] = ![]);
    z0JD[B[989]] = config[B[51]] ? config[B[51]] : 0x0, this[B[1115]](), this[B[1116]](), window[B[1117]] = 0x5, z00JYD({ 'title': B[1118] }), zpgh491[B[1119]](this[B[1120]][B[17]](this));
}, window[B[1117]] = 0x5, window[B[1120]] = function (imn7, xs1h9p) {
    if (imn7 == 0x0 && xs1h9p && xs1h9p[B[285]]) {
        z0JD[B[1121]] = xs1h9p[B[285]], z0JD[B[1122]] = xs1h9p[B[1122]];
        var kztdyo = this;
        z00JYD({ 'title': B[1123] }), sendApi(z0JD[B[978]], B[1124], {
            'platform': z0JD[B[976]],
            'partner_id': z0JD[B[986]],
            'token': xs1h9p[B[285]],
            'game_pkg': z0JD[B[987]],
            'deviceId': z0JD[B[988]],
            'scene': B[1125] + z0JD[B[989]]
        }, this[B[1126]][B[17]](this), z0YDJ, z0D0);
    } else xs1h9p && xs1h9p[B[1127]] && window[B[1117]] > 0x0 && (xs1h9p[B[1127]][B[146]](B[1128]) != -0x1 || xs1h9p[B[1127]][B[146]](B[1129]) != -0x1 || xs1h9p[B[1127]][B[146]](B[1130]) != -0x1 || xs1h9p[B[1127]][B[146]](B[1131]) != -0x1 || xs1h9p[B[1127]][B[146]](B[1132]) != -0x1 || xs1h9p[B[1127]][B[146]](B[1133]) != -0x1) ? (window[B[1117]]--, zpgh491[B[1119]](this[B[1120]][B[17]](this))) : (window[B[1060]](0x1, B[1134] + imn7 + B[1135] + (xs1h9p ? xs1h9p[B[1127]] : '')), window[B[1078]](B[1136], JSON[B[1071]]({
        'status': imn7,
        'data': xs1h9p
    })), window[B[1029]](B[1137] + (xs1h9p && xs1h9p[B[1127]] ? '，' + xs1h9p[B[1127]] : '')));
}, window[B[1126]] = function (xetas) {
    if (!xetas) {
        window[B[1060]](0x2, B[1138]), window[B[1078]](B[1139], B[1140]), window[B[1029]](B[1141]);
        return;
    }
    if (xetas[B[1046]] != B[1142]) {
        window[B[1060]](0x2, B[1143] + xetas[B[1046]]), window[B[1078]](B[1139], JSON[B[1071]](xetas)), window[B[1029]](B[1144] + xetas[B[1046]]);
        return;
    }
    if (xetas[B[1145]] == 0x1) {
        window[B[1029]](B[1146]);
        return;
    }
    z0JD[B[1147]] = String(xetas[B[1066]]), z0JD[B[1066]] = String(xetas[B[1066]]), z0JD[B[1148]] = String(xetas[B[1148]]), z0JD[B[992]] = String(xetas[B[1148]]), z0JD[B[1149]] = String(xetas[B[1149]]), z0JD[B[1150]] = String(xetas[B[1151]]), z0JD[B[1152]] = String(xetas[B[1153]]), z0JD[B[1151]] = '';
    var h1p49 = this;
    z00JYD({ 'title': B[1154] });
    var edyot = localStorage[B[1155]](B[1156] + z0JD[B[987]] + z0JD[B[1066]]);
    if (edyot && edyot != '') {
        var zkdyot = Number(edyot);
        h1p49[B[1157]](zkdyot);
    } else h1p49[B[1158]]();
}, window[B[1158]] = function () {
    var esatxz = this;
    sendApi(z0JD[B[978]], B[1159], {
        'partner_id': z0JD[B[986]],
        'uid': z0JD[B[1066]],
        'version': z0JD[B[973]],
        'game_pkg': z0JD[B[987]],
        'device': z0JD[B[988]]
    }, esatxz[B[1160]][B[17]](esatxz), z0YDJ, z0D0);
}, window[B[1160]] = function (o8ydkb) {
    if (!o8ydkb) {
        window[B[1060]](0x3, B[1161]), window[B[1029]](B[1161]);
        return;
    }
    if (o8ydkb[B[1046]] != B[1142]) {
        window[B[1060]](0x3, B[1162] + o8ydkb[B[1046]]), window[B[1029]](B[1162] + o8ydkb[B[1046]]);
        return;
    }
    if (!o8ydkb[B[335]] || o8ydkb[B[335]][B[31]] == 0x0) {
        window[B[1060]](0x3, B[1163]), window[B[1029]](B[1164]);
        return;
    }
    this[B[1165]](o8ydkb);
}, window[B[1157]] = function (u25_w) {
    var yzoe = this;
    sendApi(z0JD[B[978]], B[1166], {
        'server_id': u25_w,
        'time': Date[B[1000]]() / 0x3e8
    }, yzoe[B[1167]][B[17]](yzoe), z0YDJ, z0D0);
}, window[B[1167]] = function (rkb8y_) {
    if (!rkb8y_) {
        window[B[1060]](0x4, B[1168]), this[B[1158]]();
        return;
    }
    if (rkb8y_[B[1046]] != B[1142]) {
        window[B[1060]](0x4, B[1169] + rkb8y_[B[1046]]), this[B[1158]]();
        return;
    }
    if (!rkb8y_[B[335]] || rkb8y_[B[335]][B[31]] == 0x0) {
        window[B[1060]](0x4, B[1170]), this[B[1158]]();
        return;
    }
    this[B[1165]](rkb8y_);
}, window[B[1165]] = function (dyot) {
    z0JD[B[1171]] = dyot[B[1172]] != undefined ? dyot[B[1172]] : 0x0, z0JD[B[993]] = {
        'server_id': String(dyot[B[335]][0x0][B[1068]]),
        'server_name': String(dyot[B[335]][0x0][B[1173]]),
        'entry_ip': dyot[B[335]][0x0][B[1174]],
        'entry_port': parseInt(dyot[B[335]][0x0][B[1175]]),
        'status': z0JY0(dyot[B[335]][0x0]),
        'start_time': dyot[B[335]][0x0][B[1176]],
        'maintain_time': dyot[B[335]][0x0][B[1177]] ? dyot[B[335]][0x0][B[1177]] : '',
        'is_recommend': dyot[B[335]][0x0][B[1178]],
        'cdn': z0JD[B[1067]]
    }, this[B[1179]](), window[B[1043]] && window[B[1043]][B[1044]][B[1180]] && window[B[1043]][B[1044]][B[1180]](sdkInitRes[B[1181]], sdkInitRes[B[1182]], sdkInitRes[B[1183]], sdkInitRes[B[1184]], sdkInitRes[B[1185]]);
}, window[B[1186]] = null, window[B[1179]] = function () {
    var rk_by8 = this;
    zpgh491[B[1187]](function (i7q3nm) {
        console[B[225]](B[1188] + JSON[B[1071]](i7q3nm)), youYiCofig = i7q3nm;
        window[B[1186]][B[1189]] == 0x1 && (z0JD[B[1171]] = 0x0);
        if (z0JD[B[1171]] == 0x1) {
            var q3i7mn = z0JD[B[993]][B[1190]];
            if (q3i7mn === -0x1 || q3i7mn === 0x0) {
                window[B[1060]](0xf, B[1191] + z0JD[B[993]]['id'] + B[1192] + z0JD[B[993]][B[1190]]), window[B[1029]](q3i7mn === -0x1 ? B[1193] : B[1194]);
                return;
            }
            z0D0YJ(0x0, z0JD[B[993]][B[1068]]), window[B[1043]][B[1044]][B[1195]](z0JD[B[1171]]);
        } else window[B[1043]][B[1044]][B[1196]](() => {
            var b_k8r5 = window[B[1186]][B[1197]],
                dztaoe = window[B[1186]][B[1189]] == 0x1;
            dztaoe && window[B[1043]][B[1044]][B[1198]](B[1199], b_k8r5, B[1200]);
        }, rk_by8), z00JDY();
        window[B[1018]] = !![], window[B[1201]](), window[B[1202]]();
    });
}, window[B[1203]] = function () {
    zpgh491[B[1204]](function (esozta) {
        console[B[225]](B[1205] + JSON[B[1071]](esozta));
    });
}, window[B[1115]] = function () {
    sendApi(z0JD[B[978]], B[1206], {
        'game_pkg': z0JD[B[987]],
        'version_name': z0JD[B[1110]]
    }, this[B[1207]][B[17]](this), z0YDJ, z0D0);
}, window[B[1207]] = function (todbyk) {
    if (!todbyk) {
        window[B[1060]](0x5, B[1208]), window[B[1029]](B[1208]);
        return;
    }
    if (todbyk[B[1046]] != B[1142]) {
        window[B[1060]](0x5, B[1209] + todbyk[B[1046]]), window[B[1029]](B[1209] + todbyk[B[1046]]);
        return;
    }
    if (!todbyk[B[335]] || !todbyk[B[335]][B[973]]) {
        window[B[1060]](0x5, B[1210] + (todbyk[B[335]] && todbyk[B[335]][B[973]])), window[B[1029]](B[1210] + (todbyk[B[335]] && todbyk[B[335]][B[973]]));
        return;
    }
    todbyk[B[335]][B[1211]] && todbyk[B[335]][B[1211]][B[31]] > 0xa && (z0JD[B[1212]] = todbyk[B[335]][B[1211]], z0JD[B[1067]] = todbyk[B[335]][B[1211]]), todbyk[B[335]][B[973]] && (z0JD[B[1005]] = todbyk[B[335]][B[973]]), console[B[1047]](B[1213] + z0JD[B[1005]] + B[1214] + z0JD[B[1110]]), window[B[1016]] = !![], window[B[1201]](), window[B[1202]]();
}, window[B[1215]], window[B[1116]] = function () {
    sendApi(z0JD[B[978]], B[1216], { 'game_pkg': z0JD[B[987]] }, this[B[1217]][B[17]](this), z0YDJ, z0D0);
}, window[B[1217]] = function (v6fg4) {
    if (v6fg4 && v6fg4[B[1046]] === B[1142] && v6fg4[B[335]]) {
        window[B[1215]] = v6fg4[B[335]];
        for (var r_k8b in v6fg4[B[335]]) {
            z0JD[r_k8b] = v6fg4[B[335]][r_k8b];
        }
        window[B[1218]]();
    } else window[B[1060]](0xb, B[1219]), console[B[1047]](B[1220] + v6fg4[B[1046]]);
    window[B[1017]] = !![], window[B[1202]]();
}, window[B[1218]] = function () {
    var vm7nil = z0JD[B[1006]] || z0JD[B[1221]] && z0JD[B[1221]] > 0x0;
    if (vm7nil) {
        var _wr5u = z0JD[B[1222]],
            yr_bk = _wr5u && _wr5u[B[31]] == 0x9;
        yr_bk && (window[B[1223]] = _wr5u);
        var iln7v = z0JD[B[1224]],
            tseax = iln7v && iln7v[B[201]]('#')[B[31]] == 0x4;
        tseax && (window[B[1225]] = iln7v);
    }
}, window[B[1226]] = function (xps91h, otbykd, xzsta, dyzotk, eaxtsz, finlv7, b8_kry, gvp46, fp6, jqim$) {
    eaxtsz = String(eaxtsz);
    var wu_502 = b8_kry,
        dozta = gvp46;
    z0JD[B[972]][eaxtsz] = {
        'productid': eaxtsz,
        'productname': wu_502,
        'productdesc': dozta,
        'roleid': xps91h,
        'rolename': otbykd,
        'rolelevel': xzsta,
        'price': finlv7,
        'callback': fp6
    }, sendApi(z0JD[B[982]], B[1227], {
        'game_pkg': z0JD[B[987]],
        'server_id': z0JD[B[993]][B[1068]],
        'server_name': z0JD[B[993]][B[1173]],
        'level': xzsta,
        'uid': z0JD[B[1066]],
        'role_id': xps91h,
        'role_name': otbykd,
        'product_id': eaxtsz,
        'product_name': wu_502,
        'product_desc': dozta,
        'money': finlv7,
        'partner_id': z0JD[B[986]]
    }, toPayCallBack, z0YDJ, z0D0);
}, window[B[1228]] = function (zsa9xe) {
    if (zsa9xe && (zsa9xe[B[1229]] === 0xc8 || zsa9xe[B[1046]] == B[1142])) {
        var ze9asx = z0JD[B[972]][String(zsa9xe[B[1230]])];
        if (ze9asx[B[1231]]) ze9asx[B[1231]](zsa9xe[B[1230]], zsa9xe[B[1232]], -0x1);
        zpgh491[B[1233]]({
            'cpbill': zsa9xe[B[1232]],
            'productid': zsa9xe[B[1230]],
            'productname': ze9asx[B[1234]],
            'productdesc': ze9asx[B[1235]],
            'serverid': z0JD[B[993]][B[1068]],
            'servername': z0JD[B[993]][B[1173]],
            'roleid': ze9asx[B[1236]],
            'rolename': ze9asx[B[1237]],
            'rolelevel': ze9asx[B[1238]],
            'price': ze9asx[B[1239]],
            'extension': JSON[B[1071]]({ 'cp_order_id': zsa9xe[B[1232]] })
        }, function (fpg4h, oatdze) {
            ze9asx[B[1231]] && fpg4h == 0x0 && ze9asx[B[1231]](zsa9xe[B[1230]], zsa9xe[B[1232]], fpg4h);
            console[B[1047]](JSON[B[1071]]({
                'type': B[1240],
                'status': fpg4h,
                'data': zsa9xe,
                'role_name': ze9asx[B[1237]]
            }));
            if (fpg4h === 0x0) {} else {
                if (fpg4h === 0x1) {} else {
                    if (fpg4h === 0x2) {}
                }
            }
        });
    } else {
        var $mj3q = zsa9xe ? B[1241] + zsa9xe[B[1229]] + B[1242] + zsa9xe[B[1046]] + B[1243] + zsa9xe[B[1047]] : B[1244];
        window[B[1060]](0xd, B[1245] + $mj3q), alert($mj3q);
    }
}, window[B[1246]] = function () {}, window[B[1247]] = function (hx1gp, fl6, brd8yk, dby8kr, k85_br) {
    zpgh491[B[1248]](z0JD[B[993]][B[1068]], z0JD[B[993]][B[1173]] || z0JD[B[993]][B[1068]], hx1gp, fl6, brd8yk), sendApi(z0JD[B[978]], B[1249], {
        'game_pkg': z0JD[B[987]],
        'server_id': z0JD[B[993]][B[1068]],
        'role_id': hx1gp,
        'uid': z0JD[B[1066]],
        'role_name': fl6,
        'role_type': dby8kr,
        'level': brd8yk
    });
}, window[B[1250]] = function (otyezd, aes9z, kobd8, hf6g, zesatx, hxsp1, zetos, h6gp4f, h9x1as, hp9x1) {
    z0JD[B[1063]] = otyezd, z0JD[B[1064]] = aes9z, z0JD[B[1065]] = kobd8, zpgh491[B[1251]](z0JD[B[993]][B[1068]], z0JD[B[993]][B[1173]] || z0JD[B[993]][B[1068]], otyezd, aes9z, kobd8), sendApi(z0JD[B[978]], B[1252], {
        'game_pkg': z0JD[B[987]],
        'server_id': z0JD[B[993]][B[1068]],
        'role_id': otyezd,
        'uid': z0JD[B[1066]],
        'role_name': aes9z,
        'role_type': hf6g,
        'level': kobd8,
        'evolution': zesatx
    });
}, window[B[1253]] = function (mni7l3, h4p19, oetzy, l6v4gf, u52w0, gh149, sx9hp, xa1hs9, phxg91, _r5b8) {
    z0JD[B[1063]] = mni7l3, z0JD[B[1064]] = h4p19, z0JD[B[1065]] = oetzy, zpgh491[B[1254]](z0JD[B[993]][B[1068]], z0JD[B[993]][B[1173]] || z0JD[B[993]][B[1068]], mni7l3, h4p19, oetzy), sendApi(z0JD[B[978]], B[1252], {
        'game_pkg': z0JD[B[987]],
        'server_id': z0JD[B[993]][B[1068]],
        'role_id': mni7l3,
        'uid': z0JD[B[1066]],
        'role_name': h4p19,
        'role_type': l6v4gf,
        'level': oetzy,
        'evolution': u52w0
    });
}, window[B[1255]] = function (vnlfi) {}, window[B[1256]] = function (adeotz, ifln7) {
    zpgh491[B[1257]](B[1257], { 'activity_id': ifln7 }, function (vf76) {
        adeotz && adeotz(vf76);
    });
}, window[B[1258]] = function () {
    zpgh491[B[1258]]();
}, window[B[1259]] = function () {
    zpgh491[B[1260]]();
}, window[B[1261]] = function (eszoa, mn73, x1p9hg, hg19p4, lfgv, xa91sh, n6f4vl, br_85k) {
    br_85k = br_85k || z0JD[B[993]][B[1068]], sendApi(z0JD[B[978]], B[1262], {
        'phone': eszoa,
        'role_id': mn73,
        'uid': z0JD[B[1066]],
        'game_pkg': z0JD[B[987]],
        'partner_id': z0JD[B[986]],
        'server_id': br_85k
    }, n6f4vl, 0x2, null, function () {
        return !![];
    });
}, window[B[1263]] = function (s19hp) {
    window[B[1264]] = s19hp, window[B[1264]] && window[B[1265]] && (console[B[1047]](B[1266] + window[B[1265]][B[1267]]), window[B[1264]](window[B[1265]]), window[B[1265]] = null);
}, window[B[1268]] = function (yztdk, w0_5u, im37nl, m3n7i) {
    window[B[1269]](B[1270], {
        'game_pkg': window[B[970]][B[987]],
        'role_id': w0_5u,
        'server_id': im37nl
    }, m3n7i);
}, window[B[1271]] = function (r2u, hfg46, l6v7n) {
    function by_k8(satoez) {
        var lvfg6 = [],
            fnvl76 = [],
            $ij3 = l6v7n || window[B[961]][B[1272]];
        for (var aozse in $ij3) {
            var teosaz = Number(aozse);
            (!r2u || !r2u[B[31]] || r2u[B[146]](teosaz) != -0x1) && (fnvl76[B[66]]($ij3[aozse]), lvfg6[B[66]]([teosaz, 0x3]));
        }
        window[B[1102]](window[B[1273]], B[1274]) >= 0x0 ? (console[B[225]](B[1275]), zpgh491[B[1276]] && zpgh491[B[1276]](fnvl76, function (etzoa) {
            console[B[225]](B[1277]), console[B[225]](etzoa);
            if (etzoa && etzoa[B[1127]] == B[1278]) for (var tydeoz in $ij3) {
                if (etzoa[$ij3[tydeoz]] == B[1279]) {
                    var xze9s = Number(tydeoz);
                    for (var saxe1 = 0x0; saxe1 < lvfg6[B[31]]; saxe1++) {
                        if (lvfg6[saxe1][0x0] == xze9s) {
                            lvfg6[saxe1][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[B[1102]](window[B[1273]], B[1280]) >= 0x0 ? wx[B[1281]]({
                'withSubscriptions': !![],
                'success': function (teozs) {
                    var tzoeas = teozs[B[1282]][B[1283]];
                    if (tzoeas) {
                        console[B[225]](B[1284]), console[B[225]](tzoeas);
                        for (var tye in $ij3) {
                            if (tzoeas[$ij3[tye]] == B[1279]) {
                                var n7lm3i = Number(tye);
                                for (var ryb_8k = 0x0; ryb_8k < lvfg6[B[31]]; ryb_8k++) {
                                    if (lvfg6[ryb_8k][0x0] == n7lm3i) {
                                        lvfg6[ryb_8k][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[B[225]](lvfg6), hfg46 && hfg46(lvfg6);
                    } else console[B[225]](B[1285]), console[B[225]](teozs), console[B[225]](lvfg6), hfg46 && hfg46(lvfg6);
                },
                'fail': function () {
                    console[B[225]](B[1286]), console[B[225]](lvfg6), hfg46 && hfg46(lvfg6);
                }
            }) : (console[B[225]](B[1287] + window[B[1273]]), console[B[225]](lvfg6), hfg46 && hfg46(lvfg6));
        })) : (console[B[225]](B[1288] + window[B[1273]]), console[B[225]](lvfg6), hfg46 && hfg46(lvfg6)), wx[B[1289]](by_k8);
    }
    wx[B[1290]](by_k8);
}, window[B[1291]] = {
    'isSuccess': ![],
    'level': B[1292],
    'isCharging': ![]
}, window[B[1293]] = function (ydzto) {
    wx[B[1294]]({
        'success': function (r_8u5) {
            var toas = window[B[1291]];
            toas[B[1295]] = !![], toas[B[1296]] = Number(r_8u5[B[1296]])[B[1297]](0x0), toas[B[1298]] = r_8u5[B[1298]], ydzto && ydzto(toas[B[1295]], toas[B[1296]], toas[B[1298]]);
        },
        'fail': function (n7l6) {
            console[B[225]](B[1299], n7l6[B[1127]]);
            var vni7lm = window[B[1291]];
            ydzto && ydzto(vni7lm[B[1295]], vni7lm[B[1296]], vni7lm[B[1298]]);
        }
    });
}, window[B[1300]] = function (dryb8k) {
    wx[B[1300]]({
        'success': function (kzdyot) {
            dryb8k && dryb8k(!![], kzdyot);
        },
        'fail': function (atdezo) {
            dryb8k && dryb8k(![], atdezo);
        }
    });
}, window[B[1301]] = function (tasxz) {
    if (tasxz) wx[B[1301]](tasxz);
}, window[B[1302]] = function (h6g4p) {
    wx[B[1302]](h6g4p);
}, window[B[1269]] = function (zs9, fg6pv, zatde, txs, b28r5, x9sph, eota, g64fhp) {
    if (txs == undefined) txs = 0x1;
    wx[B[1083]]({
        'url': zs9,
        'method': eota || B[1303],
        'responseType': B[1304],
        'data': fg6pv,
        'header': { 'content-type': g64fhp || B[1085] },
        'success': function (g4fh6) {
            DEBUG && console[B[225]](B[1305], zs9, info, g4fh6);
            if (g4fh6 && g4fh6[B[1306]] == 0xc8) {
                var n67fvl = g4fh6[B[335]];
                !x9sph || x9sph(n67fvl) ? zatde && zatde(n67fvl) : window[B[1307]](zs9, fg6pv, zatde, txs, b28r5, x9sph, g4fh6);
            } else window[B[1307]](zs9, fg6pv, zatde, txs, b28r5, x9sph, g4fh6);
        },
        'fail': function (mjq3$) {
            DEBUG && console[B[225]](B[1308], zs9, info, mjq3$), window[B[1307]](zs9, fg6pv, zatde, txs, b28r5, x9sph, mjq3$);
        },
        'complete': function () {}
    });
}, window[B[1307]] = function (dtyz, mivn7l, j$mi, hxg19, ztodea, sx19ae, ln3im) {
    hxg19 - 0x1 > 0x0 ? setTimeout(function () {
        window[B[1269]](dtyz, mivn7l, j$mi, hxg19 - 0x1, ztodea, sx19ae);
    }, 0x3e8) : ztodea && ztodea(JSON[B[1071]]({
        'url': dtyz,
        'response': ln3im
    }));
}, window[B[1309]] = function (yr_kb8, $3j, fg4pv6, ax9hs1, zesx, o8kybd, glvf6) {
    !fg4pv6 && (fg4pv6 = {});
    var mn73iq = Math[B[71]](Date[B[1000]]() / 0x3e8);
    fg4pv6[B[1153]] = mn73iq, fg4pv6[B[1310]] = $3j;
    var p4h1 = Object[B[30]](fg4pv6)[B[382]](),
        k_b85 = '',
        g64lfv = '';
    for (var eatxzs = 0x0; eatxzs < p4h1[B[31]]; eatxzs++) {
        k_b85 = k_b85 + (eatxzs == 0x0 ? '' : '&') + p4h1[eatxzs] + fg4pv6[p4h1[eatxzs]], g64lfv = g64lfv + (eatxzs == 0x0 ? '' : '&') + p4h1[eatxzs] + '=' + encodeURIComponent(fg4pv6[p4h1[eatxzs]]);
    }
    k_b85 = k_b85 + z0JD[B[984]];
    var l7fvn = B[1311] + md5(k_b85);
    send(yr_kb8 + '?' + g64lfv + (g64lfv == '' ? '' : '&') + l7fvn, null, ax9hs1, zesx, o8kybd, glvf6 || function (pfv46) {
        return pfv46[B[1046]] == B[1142];
    }, null, B[1312]);
}, window[B[1313]] = function (spxh, s19ahx) {
    var tesx = 0x0;
    z0JD[B[993]] && (tesx = z0JD[B[993]][B[1068]]), sendApi(z0JD[B[980]], B[1314], {
        'partnerId': z0JD[B[986]],
        'gamePkg': z0JD[B[987]],
        'logTime': Math[B[71]](Date[B[1000]]() / 0x3e8),
        'platformUid': z0JD[B[1149]],
        'type': spxh,
        'serverId': tesx
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[B[1315]] = function (aesztx) {
    sendApi(z0JD[B[978]], B[1316], {
        'partner_id': z0JD[B[986]],
        'uid': z0JD[B[1066]],
        'version': z0JD[B[973]],
        'game_pkg': z0JD[B[987]],
        'device': z0JD[B[988]]
    }, z0JDY0, z0YDJ, z0D0);
}, window[B[1317]] = function (_u8r25) {
    if (_u8r25 && _u8r25[B[1046]] === B[1142] && _u8r25[B[335]]) {
        _u8r25[B[335]][B[174]]({
            'id': -0x2,
            'name': B[1318]
        }), _u8r25[B[335]][B[174]]({
            'id': -0x1,
            'name': B[1319]
        }), z0JD[B[1320]] = _u8r25[B[335]];
        if (window[B[1321]]) window[B[1321]][B[1322]]();
    } else {
        z0JD[B[1323]] = ![];
        var zydot = _u8r25 ? _u8r25[B[1046]] : '';
        window[B[1060]](0x7, B[1324] + zydot), window[B[1029]](B[1325] + zydot);
    }
}, window[B[1326]] = function (n7i3q) {
    sendApi(z0JD[B[978]], B[1327], {
        'partner_id': z0JD[B[986]],
        'uid': z0JD[B[1066]],
        'version': z0JD[B[973]],
        'game_pkg': z0JD[B[987]],
        'device': z0JD[B[988]]
    }, z00JY, z0YDJ, z0D0);
}, window[B[1328]] = function (kyo8) {
    z0JD[B[1329]] = ![];
    if (kyo8 && kyo8[B[1046]] === B[1142] && kyo8[B[335]]) {
        for (var hf4pg6 = 0x0; hf4pg6 < kyo8[B[335]][B[31]]; hf4pg6++) {
            kyo8[B[335]][hf4pg6][B[1190]] = z0JY0(kyo8[B[335]][hf4pg6]);
        }
        z0JD[B[990]][-0x1] = window[B[1330]](kyo8[B[335]]), window[B[1321]][B[1331]](-0x1);
    } else {
        var obky8d = kyo8 ? kyo8[B[1046]] : '';
        window[B[1060]](0x8, B[1332] + obky8d), window[B[1029]](B[1333] + obky8d);
    }
}, window[B[1334]] = function (minq7) {
    sendApi(z0JD[B[978]], B[1327], {
        'partner_id': z0JD[B[986]],
        'uid': z0JD[B[1066]],
        'version': z0JD[B[973]],
        'game_pkg': z0JD[B[987]],
        'device': z0JD[B[988]]
    }, minq7, z0YDJ, z0D0);
}, window[B[1335]] = function (otydkb, _b8kyr) {
    sendApi(z0JD[B[978]], B[1336], {
        'partner_id': z0JD[B[986]],
        'uid': z0JD[B[1066]],
        'version': z0JD[B[973]],
        'game_pkg': z0JD[B[987]],
        'device': z0JD[B[988]],
        'server_group_id': _b8kyr
    }, z0YJ0, z0YDJ, z0D0);
}, window[B[1337]] = function (p6gv4f) {
    z0JD[B[1329]] = ![];
    if (p6gv4f && p6gv4f[B[1046]] === B[1142] && p6gv4f[B[335]] && p6gv4f[B[335]][B[335]]) {
        var dazeto = p6gv4f[B[335]][B[1338]],
            oz = [];
        for (var m$qj = 0x0; m$qj < p6gv4f[B[335]][B[335]][B[31]]; m$qj++) {
            p6gv4f[B[335]][B[335]][m$qj][B[1190]] = z0JY0(p6gv4f[B[335]][B[335]][m$qj]), (oz[B[31]] == 0x0 || p6gv4f[B[335]][B[335]][m$qj][B[1190]] != 0x0) && (oz[oz[B[31]]] = p6gv4f[B[335]][B[335]][m$qj]);
        }
        z0JD[B[990]][dazeto] = window[B[1330]](oz), window[B[1321]][B[1331]](dazeto);
    } else {
        var azset = p6gv4f ? p6gv4f[B[1046]] : '';
        window[B[1060]](0x9, B[1339] + azset), window[B[1029]](B[1340] + azset);
    }
}, window[B[1341]] = function (kdb8y) {
    sendApi(z0JD[B[978]], B[1342], {
        'partner_id': z0JD[B[986]],
        'uid': z0JD[B[1066]],
        'version': z0JD[B[973]],
        'game_pkg': z0JD[B[987]],
        'device': z0JD[B[988]]
    }, reqServerRecommendCallBack, z0YDJ, z0D0);
}, window[B[1343]] = function (odkyt) {
    z0JD[B[1329]] = ![];
    if (odkyt && odkyt[B[1046]] === B[1142] && odkyt[B[335]]) {
        for (var tzkdo = 0x0; tzkdo < odkyt[B[335]][B[31]]; tzkdo++) {
            odkyt[B[335]][tzkdo][B[1190]] = z0JY0(odkyt[B[335]][tzkdo]);
        }
        z0JD[B[990]][-0x2] = window[B[1330]](odkyt[B[335]]), window[B[1321]][B[1331]](-0x2);
    } else {
        var s1xa9e = odkyt ? odkyt[B[1046]] : '';
        window[B[1060]](0xa, B[1344] + s1xa9e), alert(B[1345] + s1xa9e);
    }
}, window[B[1330]] = function (y8drbk) {
    return y8drbk;
}, window[B[1346]] = function (l6nv7f, m7qn3i) {
    l6nv7f = l6nv7f || z0JD[B[993]][B[1068]], sendApi(z0JD[B[978]], B[1347], {
        'type': '4',
        'game_pkg': z0JD[B[987]],
        'server_id': l6nv7f
    }, m7qn3i);
}, window[B[1348]] = function (_5b, dktby, i7lnmv, zkyto) {
    i7lnmv = i7lnmv || z0JD[B[993]][B[1068]], sendApi(z0JD[B[978]], B[1349], {
        'type': _5b,
        'game_pkg': dktby,
        'server_id': i7lnmv
    }, zkyto);
}, window[B[1350]] = function (ztyde, w520u_) {
    sendApi(z0JD[B[978]], B[1351], { 'game_pkg': ztyde }, w520u_);
}, window[B[1352]] = function (r_58b2) {
    if (r_58b2) {
        if (r_58b2[B[1190]] == 0x1) {
            if (r_58b2[B[1353]] == 0x3) return 0x3;else return r_58b2[B[1353]] == 0x1 ? 0x2 : 0x1;
        } else return r_58b2[B[1190]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[B[1354]] = function (tezsx, hp91s) {
    var l7n6v = window[B[1186]][B[1189]] == 0x1;
    if (l7n6v) {
        var x1ha9 = window[B[1186]][B[1197]],
            l7n6v = window[B[1186]][B[1189]] == 0x1;
        window[B[1043]][B[1044]][B[1198]](B[1199], x1ha9, B[1200]);
        return;
    }
    z0JD[B[1355]] = {
        'step': tezsx,
        'server_id': hp91s
    };
    var vi7lmn = this;
    z00JYD({ 'title': B[1356] }), sendApi(z0JD[B[978]], B[1357], {
        'partner_id': z0JD[B[986]],
        'uid': z0JD[B[1066]],
        'game_pkg': z0JD[B[987]],
        'server_id': hp91s,
        'platform': z0JD[B[1148]],
        'platform_uid': z0JD[B[1149]],
        'check_login_time': z0JD[B[1152]],
        'check_login_sign': z0JD[B[1150]],
        'version_name': z0JD[B[1110]]
    }, z0D0JY, z0YDJ, z0D0, function (otyzk) {
        return otyzk[B[1046]] == B[1142] || otyzk[B[1047]] == B[1358] || otyzk[B[1047]] == B[1359];
    });
}, window[B[1360]] = function (r_5kb) {
    var pg1xh9 = this;
    if (r_5kb && r_5kb[B[1046]] === B[1142] && r_5kb[B[335]]) {
        var zyetod = z0JD[B[993]];
        zyetod[B[1361]] = z0JD[B[991]], zyetod[B[1151]] = String(r_5kb[B[335]][B[1362]]), zyetod[B[999]] = parseInt(r_5kb[B[335]][B[1153]]);
        if (r_5kb[B[335]][B[1363]]) zyetod[B[1363]] = parseInt(r_5kb[B[335]][B[1363]]);else zyetod[B[1363]] = parseInt(r_5kb[B[335]][B[1068]]);
        zyetod[B[1364]] = 0x0, zyetod[B[1067]] = z0JD[B[1212]], zyetod[B[1365]] = r_5kb[B[335]][B[1366]], zyetod[B[1367]] = r_5kb[B[335]][B[1367]];
        if (r_5kb[B[335]][B[1368]]) zyetod[B[1368]] = parseInt(r_5kb[B[335]][B[1368]]);
        console[B[225]](B[1369] + JSON[B[1071]](zyetod[B[1367]])), z0JD[B[1171]] == 0x1 && zyetod[B[1367]] && zyetod[B[1367]][B[1370]] == 0x1 && (z0JD[B[1371]] = 0x1, window[B[1043]][B[1044]][B[1372]]()), z0DY0J();
    } else {
        if (z0JD[B[1355]][B[1373]] >= 0x3) {
            var r8bk_ = r_5kb ? r_5kb[B[1046]] : '';
            window[B[1060]](0xc, B[1374] + r8bk_), z0D0(JSON[B[1071]](r_5kb)), window[B[1029]](B[1375] + r8bk_);
        } else sendApi(z0JD[B[978]], B[1124], {
            'platform': z0JD[B[976]],
            'partner_id': z0JD[B[986]],
            'token': z0JD[B[1121]],
            'game_pkg': z0JD[B[987]],
            'deviceId': z0JD[B[988]],
            'scene': B[1125] + z0JD[B[989]]
        }, function (r5_u28) {
            if (!r5_u28 || r5_u28[B[1046]] != B[1142]) {
                window[B[1029]](B[1144] + r5_u28 && r5_u28[B[1046]]);
                return;
            }
            z0JD[B[1150]] = String(r5_u28[B[1151]]), z0JD[B[1152]] = String(r5_u28[B[1153]]), setTimeout(function () {
                z0D0YJ(z0JD[B[1355]][B[1373]] + 0x1, z0JD[B[1355]][B[1068]]);
            }, 0x5dc);
        }, z0YDJ, z0D0, function (gp1x9) {
            return gp1x9[B[1046]] == B[1142] || gp1x9[B[1046]] == B[1376];
        });
    }
}, window[B[1377]] = function () {
    ServerLoading[B[1044]][B[1195]](z0JD[B[1171]]), window[B[1011]] = !![], window[B[1202]]();
}, window[B[1201]] = function () {
    if (window[B[1012]] && window[B[1013]] && window[B[1014]] && window[B[1015]] && window[B[1016]] && window[B[1018]]) {
        if (!window[B[1378]][B[1044]]) {
            console[B[225]](B[1379] + window[B[1378]][B[1044]]);
            var ztasxe = wx[B[1380]](),
                azetod = ztasxe[B[1267]] ? ztasxe[B[1267]] : 0x0,
                l6vfn4 = {
                'cdn': window[B[970]][B[1067]],
                'spareCdn': window[B[970]][B[1108]],
                'newRegister': window[B[970]][B[1171]],
                'wxPC': window[B[970]][B[1009]],
                'wxIOS': window[B[970]][B[1007]],
                'wxAndroid': window[B[970]][B[1008]],
                'wxParam': {
                    'limitLoad': window[B[970]][B[1381]],
                    'benchmarkLevel': window[B[970]][B[1382]],
                    'wxFrom': window[B[961]][B[51]] == B[1383] ? 0x1 : 0x0,
                    'wxSDKVersion': window[B[1273]]
                },
                'configType': window[B[970]][B[1001]],
                'exposeType': window[B[970]][B[1003]],
                'scene': azetod
            };
            new window[B[1378]](l6vfn4, window[B[970]][B[1005]], window[B[968]]);
        }
    }
}, window[B[1202]] = function () {
    if (window[B[1012]] && window[B[1013]] && window[B[1014]] && window[B[1015]] && window[B[1016]] && window[B[1018]] && window[B[1011]] && window[B[1017]]) {
        z00JDY();
        if (!z0DYJ) {
            z0DYJ = !![];
            if (!window[B[1378]][B[1044]]) window[B[1201]]();
            var niml3 = 0x0,
                ead = wx[B[1384]]();
            ead && (window[B[970]][B[1385]] && (niml3 = ead[B[1386]]), console[B[1047]](B[1387] + ead[B[1386]] + B[1388] + ead[B[1389]] + B[1390] + ead[B[1391]] + B[1392] + ead[B[1393]] + B[1394] + ead[B[1395]] + B[1396] + ead[B[1397]]));
            var psh9x = {};
            for (const v7ilf in z0JD[B[993]]) {
                psh9x[v7ilf] = z0JD[B[993]][v7ilf];
            }
            var kbdr8y = {
                'channel': window[B[970]][B[992]],
                'account': window[B[970]][B[1066]],
                'userId': window[B[970]][B[1147]],
                'cdn': window[B[970]][B[1067]],
                'data': window[B[970]][B[335]],
                'package': window[B[970]][B[304]],
                'newRegister': window[B[970]][B[1171]],
                'pkgName': window[B[970]][B[987]],
                'partnerId': window[B[970]][B[986]],
                'platform_uid': window[B[970]][B[1149]],
                'deviceId': window[B[970]][B[988]],
                'selectedServer': psh9x,
                'configType': window[B[970]][B[1001]],
                'exposeType': window[B[970]][B[1003]],
                'debugUsers': window[B[970]][B[997]],
                'wxMenuTop': niml3,
                'wxShield': window[B[970]][B[1006]],
                'wx_channel': window[B[970]][B[1122]]
            };
            if (window[B[1215]]) for (var vlgf6 in window[B[1215]]) {
                kbdr8y[vlgf6] = window[B[1215]][vlgf6];
            }
            window[B[1378]][B[1044]][B[1398]](kbdr8y);
            if (z0JD[B[993]] && z0JD[B[993]][B[1068]]) localStorage[B[1399]](B[1156] + z0JD[B[987]] + z0JD[B[1066]], z0JD[B[993]][B[1068]]);
        }
    } else console[B[1047]](B[1400] + window[B[1012]] + B[1401] + window[B[1013]] + B[1402] + window[B[1014]] + B[1403] + window[B[1015]] + B[1404] + window[B[1016]] + B[1405] + window[B[1018]] + B[1406] + window[B[1011]] + B[1407] + window[B[1017]]);
}, window[B[1408]] = function (ru_5w2) {
    if (!window[B[1409]]) {
        console[B[333]](B[1410]);
        return;
    }
    var a9xe1s = ru_5w2[B[1411]];
    a9xe1s == 0x1 ? window[B[1409]][B[1412]](0x2327, ru_5w2) : window[B[1409]][B[1413]](0x2327);
};