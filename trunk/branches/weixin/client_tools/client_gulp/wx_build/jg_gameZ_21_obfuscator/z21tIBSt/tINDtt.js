var v = wx.$d;
import zkzcw from '../ttkttt/t6ktgt.js';window[v[106]] = { 'wxVersion': window[v[107]][v[108]] }, window[v[109]] = ![], window['D$XU'] = 0x1, window[v[110]] = 0x1, window['D$7UX'] = !![], window[v[111]] = !![], window['D$MR7UX'] = '', window[v[112]] = ![], window['D$UX'] = { 'base_cdn': v[113], 'cdn': v[113] }, D$UX[v[114]] = {}, D$UX[v[115]] = '0', D$UX[v[116]] = window[v[106]][v[117]], D$UX[v[118]] = '', D$UX['os'] = '1', D$UX[v[119]] = v[120], D$UX[v[121]] = v[122], D$UX[v[123]] = v[124], D$UX[v[125]] = v[126], D$UX[v[127]] = v[128], D$UX[v[129]] = '1', D$UX[v[130]] = '', D$UX[v[131]] = '', D$UX[v[132]] = 0x0, D$UX[v[133]] = {}, D$UX[v[134]] = parseInt(D$UX[v[129]]), D$UX[v[135]] = D$UX[v[129]], D$UX[v[136]] = {}, D$UX['D$RU'] = v[137], D$UX[v[138]] = ![], D$UX[v[139]] = v[140], D$UX[v[141]] = Date[v[142]](), D$UX[v[143]] = v[144], D$UX[v[145]] = '_a', D$UX[v[146]] = 0x2, D$UX[v[147]] = 0x7c1, D$UX[v[117]] = window[v[106]][v[117]], D$UX[v[148]] = ![], D$UX[v[149]] = ![], D$UX[v[150]] = ![], D$UX[v[151]] = ![], window['D$7XU'] = 0x5, window['D$7X'] = ![], window['D$X7'] = ![], window['D$U7X'] = ![], window[v[152]] = ![], window[v[153]] = ![], window['D$UX7'] = ![], window['D$7U'] = ![], window['D$U7'] = ![], window['D$X7U'] = ![], window[v[154]] = null, window[v[155]] = function (xud95a) {
  console[v[156]](v[155], xud95a), wx[v[157]]({}), wx[v[158]]({ 'title': v[159], 'content': xud95a, 'success'(p4a59x) {
      if (p4a59x[v[160]]) console[v[156]](v[161]);else p4a59x[v[162]] && console[v[156]](v[163]);
    } });
}, window['D$R7UX'] = function (zk23) {
  console[v[156]](v[164], zk23), D$RUX7(), wx[v[158]]({ 'title': v[159], 'content': zk23, 'confirmText': v[165], 'cancelText': v[166], 'success'(z_162v) {
      if (z_162v[v[160]]) window['D$UR']();else z_162v[v[162]] && (console[v[156]](v[167]), wx[v[168]]({}));
    } });
}, window[v[169]] = function (k_v2z) {
  console[v[156]](v[169], k_v2z), wx[v[158]]({ 'title': v[159], 'content': k_v2z, 'confirmText': v[170], 'showCancel': ![], 'complete'(n7ckyw) {
      console[v[156]](v[167]), wx[v[168]]({});
    } });
}, window['D$R7XU'] = ![], window['D$RU7X'] = function (i6v) {
  window['D$R7XU'] = !![], wx[v[171]](i6v);
}, window['D$RUX7'] = function () {
  window['D$R7XU'] && (window['D$R7XU'] = ![], wx[v[157]]({}));
}, window['D$RX7U'] = function (df9) {
  window[v[172]][v[173]]['D$RX7U'](df9);
}, window[v[95]] = function (i2_8, d9xf) {
  zkzcw[v[95]](i2_8, function (x9ad5p) {
    x9ad5p && x9ad5p[v[174]] ? x9ad5p[v[174]][v[175]] == 0x1 ? d9xf(!![]) : (d9xf(![]), console[v[176]](v[177] + x9ad5p[v[174]][v[178]])) : console[v[156]](v[95], x9ad5p);
  });
}, window['D$RXU7'] = function (ey7cnw) {
  console[v[156]](v[179], ey7cnw);
}, window['D$RUX'] = function (b8lufi) {}, window['D$RXU'] = function (nrw, ecjnr7, o4mh0) {}, window['D$RX'] = function (g0$tmo) {
  console[v[156]](v[180], g0$tmo), window[v[172]][v[173]][v[181]](), window[v[172]][v[173]][v[182]](), window[v[172]][v[173]][v[183]]();
}, window['D$XR'] = function (lbfud) {
  window[v[184]](0xe, v[185] + lbfud), window['D$R7UX'](v[186]);var dlf8 = { 'id': window['D$UX'][v[187]], 'role': window['D$UX'][v[188]], 'level': window['D$UX'][v[189]], 'account': window['D$UX'][v[190]], 'version': window['D$UX'][v[147]], 'cdn': window['D$UX'][v[191]], 'pkgName': window['D$UX'][v[130]], 'gamever': window[v[107]][v[108]], 'serverid': window['D$UX'][v[136]] ? window['D$UX'][v[136]][v[66]] : 0x0, 'systemInfo': window[v[192]], 'error': v[193], 'stack': lbfud ? lbfud : v[186] },
      nye = JSON[v[194]](dlf8);console[v[195]](v[196] + nye), window['D$RU'](nye);
}, window[v[184]] = function ($o0mt, njer) {
  sendApi(D$UX[v[123]], v[197], { 'game_pkg': D$UX[v[130]], 'partner_id': D$UX[v[129]], 'server_id': D$UX[v[136]] && D$UX[v[136]][v[66]] > 0x0 ? D$UX[v[136]][v[66]] : 0x0, 'uid': D$UX[v[190]] > 0x0 ? D$UX[v[190]] : 0x0, 'type': $o0mt, 'info': njer });
}, window['D$URX'] = function (b61_i8) {
  var k7c3yw = JSON[v[198]](b61_i8);k7c3yw[v[199]] = window[v[107]][v[108]], k7c3yw[v[200]] = window['D$UX'][v[136]] ? window['D$UX'][v[136]][v[66]] : 0x0, k7c3yw[v[192]] = window[v[192]];var fx9lu = JSON[v[194]](k7c3yw);console[v[195]](v[201] + fx9lu), window['D$RU'](fx9lu);
}, window['D$UXR'] = function (bdlf8u, qp4h0o) {
  var pqxa4 = { 'id': window['D$UX'][v[187]], 'role': window['D$UX'][v[188]], 'level': window['D$UX'][v[189]], 'account': window['D$UX'][v[190]], 'version': window['D$UX'][v[147]], 'cdn': window['D$UX'][v[191]], 'pkgName': window['D$UX'][v[130]], 'gamever': window[v[107]][v[108]], 'serverid': window['D$UX'][v[136]] ? window['D$UX'][v[136]][v[66]] : 0x0, 'systemInfo': window[v[192]], 'error': bdlf8u, 'stack': qp4h0o },
      auxf9d = JSON[v[194]](pqxa4);console[v[202]](v[203] + auxf9d), window['D$RU'](auxf9d);
}, window['D$RU'] = function (b8dlfu) {
  if (window['D$UX'][v[204]] == v[205]) return;var lb1i6 = D$UX['D$RU'] + v[206] + D$UX[v[190]];wx[v[207]]({ 'url': lb1i6, 'method': v[26], 'data': b8dlfu, 'header': { 'content-type': v[208], 'cache-control': v[209] }, 'success': function (wzky) {
      DEBUG && console[v[156]](v[210], lb1i6, b8dlfu, wzky);
    }, 'fail': function (yw7) {
      DEBUG && console[v[156]](v[210], lb1i6, b8dlfu, yw7);
    }, 'complete': function () {} });
}, window[v[211]] = function () {
  function f8ibl1() {
    return ((0x1 + Math[v[212]]()) * 0x10000 | 0x0)[v[213]](0x10)[v[214]](0x1);
  }return f8ibl1() + f8ibl1() + '-' + f8ibl1() + '-' + f8ibl1() + '-' + f8ibl1() + '+' + f8ibl1() + f8ibl1() + f8ibl1();
}, window['D$UR'] = function () {
  console[v[156]](v[215]);var cn7ywe = zkzcw[v[216]]();D$UX[v[135]] = cn7ywe[v[217]], D$UX[v[134]] = cn7ywe[v[217]], D$UX[v[129]] = cn7ywe[v[217]], D$UX[v[130]] = cn7ywe[v[218]];var xd95ua = { 'game_ver': D$UX[v[116]] };D$UX[v[131]] = this[v[211]](), D$RU7X({ 'title': v[219] }), zkzcw[v[90]](xd95ua, this['D$XRU'][v[220]](this));
}, window['D$XRU'] = function (om0t$g) {
  var flbud = om0t$g[v[221]];sdkInitRes = om0t$g, console[v[156]](v[222] + flbud + v[223] + (flbud == 0x1) + v[224] + om0t$g[v[108]] + v[225] + window[v[106]][v[117]]);if (!om0t$g[v[108]] || window['D$M7XRU'](window[v[106]][v[117]], om0t$g[v[108]]) < 0x0) console[v[156]](v[226]), D$UX[v[121]] = v[227], D$UX[v[123]] = v[228], D$UX[v[125]] = v[229], D$UX[v[191]] = v[230], D$UX[v[231]] = v[232], D$UX[v[233]] = 'sm', D$UX[v[148]] = ![];else window['D$M7XRU'](window[v[106]][v[117]], om0t$g[v[108]]) == 0x0 ? (console[v[156]](v[234]), D$UX[v[121]] = v[122], D$UX[v[123]] = v[124], D$UX[v[125]] = v[126], D$UX[v[191]] = v[235], D$UX[v[231]] = v[232], D$UX[v[233]] = v[236], D$UX[v[148]] = !![]) : (console[v[156]](v[237]), D$UX[v[121]] = v[122], D$UX[v[123]] = v[124], D$UX[v[125]] = v[126], D$UX[v[191]] = v[238], D$UX[v[231]] = v[232], D$UX[v[233]] = v[236], D$UX[v[148]] = ![]);D$UX[v[132]] = config[v[239]] ? config[v[239]] : 0x0, this['D$7URX'](), this['D$7UXR'](), window[v[240]] = 0x5, D$RU7X({ 'title': v[241] }), zkzcw[v[16]](this['D$XUR'][v[220]](this));
}, window[v[240]] = 0x5, window['D$XUR'] = function (_18ib6, n7cey) {
  if (_18ib6 == 0x0 && n7cey && n7cey[v[242]]) {
    D$UX[v[243]] = n7cey[v[242]];var xdlf9u = this;D$RU7X({ 'title': v[244] }), sendApi(D$UX[v[121]], v[245], { 'platform': D$UX[v[119]], 'partner_id': D$UX[v[129]], 'token': n7cey[v[242]], 'game_pkg': D$UX[v[130]], 'deviceId': D$UX[v[131]], 'scene': v[246] + D$UX[v[132]] }, this['D$7RUX'][v[220]](this), D$7XU, D$XR);
  } else n7cey && n7cey[v[247]] && window[v[240]] > 0x0 && (n7cey[v[247]][v[248]](v[249]) != -0x1 || n7cey[v[247]][v[248]](v[250]) != -0x1 || n7cey[v[247]][v[248]](v[251]) != -0x1 || n7cey[v[247]][v[248]](v[252]) != -0x1 || n7cey[v[247]][v[248]](v[253]) != -0x1 || n7cey[v[247]][v[248]](v[254]) != -0x1) ? (window[v[240]]--, zkzcw[v[16]](this['D$XUR'][v[220]](this))) : (window[v[184]](0x1, v[255] + _18ib6 + v[256] + (n7cey ? n7cey[v[247]] : '')), window['D$UXR'](v[257], JSON[v[194]]({ 'status': _18ib6, 'data': n7cey })), window['D$R7UX'](v[258] + (n7cey && n7cey[v[247]] ? '，' + n7cey[v[247]] : '')));
}, window['D$7RUX'] = function (v162_i) {
  if (!v162_i) {
    window[v[184]](0x2, v[259]), window['D$UXR'](v[260], v[261]), window['D$R7UX'](v[262]);return;
  }if (v162_i[v[175]] != v[263]) {
    window[v[184]](0x2, v[264] + v162_i[v[175]]), window['D$UXR'](v[260], JSON[v[194]](v162_i)), window['D$R7UX'](v[265] + v162_i[v[175]]);return;
  }D$UX[v[266]] = String(v162_i[v[190]]), D$UX[v[190]] = String(v162_i[v[190]]), D$UX[v[267]] = String(v162_i[v[267]]), D$UX[v[135]] = String(v162_i[v[267]]), D$UX[v[268]] = String(v162_i[v[268]]), D$UX[v[269]] = String(v162_i[v[270]]), D$UX[v[271]] = String(v162_i[v[272]]), D$UX[v[270]] = '';var v6_1i2 = this;D$RU7X({ 'title': v[273] });var l8ifu = localStorage[v[274]](v[275] + D$UX[v[130]] + D$UX[v[190]]);if (l8ifu && l8ifu != '') {
    var jecnr7 = Number(l8ifu);v6_1i2[v[276]](jecnr7);
  } else v6_1i2[v[277]]();
}, window[v[277]] = function () {
  var x45pq = this;sendApi(D$UX[v[121]], v[278], { 'partner_id': D$UX[v[129]], 'uid': D$UX[v[190]], 'version': D$UX[v[116]], 'game_pkg': D$UX[v[130]], 'device': D$UX[v[131]] }, x45pq['D$7RXU'][v[220]](x45pq), D$7XU, D$XR);
}, window['D$7RXU'] = function (f1li8) {
  if (!f1li8) {
    window[v[184]](0x3, v[279]), window['D$R7UX'](v[279]);return;
  }if (f1li8[v[175]] != v[263]) {
    window[v[184]](0x3, v[280] + f1li8[v[175]]), window['D$R7UX'](v[280] + f1li8[v[175]]);return;
  }if (!f1li8[v[174]] || f1li8[v[174]][v[281]] == 0x0) {
    window[v[184]](0x3, v[282]), window['D$R7UX'](v[283]);return;
  }this[v[284]](f1li8);
}, window[v[276]] = function ($mg0ot) {
  var v2z1_ = this;sendApi(D$UX[v[121]], v[285], { 'server_id': $mg0ot, 'time': Date[v[142]]() / 0x3e8 }, v2z1_[v[286]][v[220]](v2z1_), D$7XU, D$XR);
}, window[v[286]] = function (qhp5o) {
  if (!qhp5o) {
    window[v[184]](0x4, v[287]), this[v[277]]();return;
  }if (qhp5o[v[175]] != v[263]) {
    window[v[184]](0x4, v[288] + qhp5o[v[175]]), this[v[277]]();return;
  }if (!qhp5o[v[174]] || qhp5o[v[174]][v[281]] == 0x0) {
    window[v[184]](0x4, v[289]), this[v[277]]();return;
  }this[v[284]](qhp5o), window[v[172]] && window[v[172]][v[173]][v[290]] && window[v[172]][v[173]][v[290]](sdkInitRes[v[291]], sdkInitRes[v[292]], sdkInitRes[v[293]], sdkInitRes[v[294]], sdkInitRes[v[295]]);
}, window[v[284]] = function (fbl9) {
  D$UX[v[296]] = fbl9[v[297]] != undefined ? fbl9[v[297]] : 0x0, D$UX[v[136]] = { 'server_id': String(fbl9[v[174]][0x0][v[66]]), 'server_name': String(fbl9[v[174]][0x0][v[298]]), 'entry_ip': fbl9[v[174]][0x0][v[299]], 'entry_port': parseInt(fbl9[v[174]][0x0][v[300]]), 'status': D$U7R(fbl9[v[174]][0x0]), 'start_time': fbl9[v[174]][0x0][v[301]], 'cdn': D$UX[v[191]] }, this['D$XU7R']();
}, window['D$XU7R'] = function () {
  var ho0$ = this;if (D$UX[v[296]] == 0x1) {
    var bi_816 = D$UX[v[136]][v[302]];if (bi_816 === -0x1 || bi_816 === 0x0) {
      window[v[184]](0xf, v[303] + D$UX[v[136]]['id'] + v[304] + D$UX[v[136]][v[302]]), window['D$R7UX'](bi_816 === -0x1 ? v[305] : v[306]);return;
    }D$XR7U(0x0, D$UX[v[136]][v[66]]), window[v[172]][v[173]][v[307]](D$UX[v[296]]);
  } else window[v[172]][v[173]][v[308]](), D$RUX7();window['D$U7'] = !![], window['D$X7UR'](), window['D$XUR7']();
}, window['D$7URX'] = function () {
  sendApi(D$UX[v[121]], v[309], { 'game_pkg': D$UX[v[130]], 'version_name': D$UX[v[233]] }, this[v[310]][v[220]](this), D$7XU, D$XR);
}, window[v[310]] = function (o4qhm) {
  if (!o4qhm) {
    window[v[184]](0x5, v[311]), window['D$R7UX'](v[311]);return;
  }if (o4qhm[v[175]] != v[263]) {
    window[v[184]](0x5, v[312] + o4qhm[v[175]]), window['D$R7UX'](v[312] + o4qhm[v[175]]);return;
  }if (!o4qhm[v[174]] || !o4qhm[v[174]][v[116]]) {
    window[v[184]](0x5, v[313] + (o4qhm[v[174]] && o4qhm[v[174]][v[116]])), window['D$R7UX'](v[313] + (o4qhm[v[174]] && o4qhm[v[174]][v[116]]));return;
  }o4qhm[v[174]][v[314]] && o4qhm[v[174]][v[314]][v[281]] > 0xa && (D$UX[v[315]] = o4qhm[v[174]][v[314]], D$UX[v[191]] = o4qhm[v[174]][v[314]]), o4qhm[v[174]][v[116]] && (D$UX[v[147]] = o4qhm[v[174]][v[116]]), console[v[176]](v[316] + D$UX[v[147]] + v[317] + D$UX[v[233]]), window['D$UX7'] = !![], window['D$X7UR'](), window['D$XUR7']();
}, window[v[318]], window['D$7UXR'] = function () {
  sendApi(D$UX[v[121]], v[319], { 'game_pkg': D$UX[v[130]] }, this['D$7XRU'][v[220]](this), D$7XU, D$XR);
}, window['D$7XRU'] = function (otm0g$) {
  if (otm0g$ && otm0g$[v[175]] === v[263] && otm0g$[v[174]]) {
    window[v[318]] = otm0g$[v[174]];for (var xa4pq5 in otm0g$[v[174]]) {
      D$UX[xa4pq5] = otm0g$[v[174]][xa4pq5];
    }
  } else window[v[184]](0xb, v[320]), console[v[176]](v[321] + otm0g$[v[175]]);window['D$7U'] = !![], window['D$XUR7']();
}, window[v[322]] = function (kcyw3, cejn, $qo0h, d9lbuf, zcw3, _32kzv, i821, dxfa9, wk7nc, bi16_) {
  zcw3 = String(zcw3);var fxd9ul = i821,
      _32z6 = dxfa9;D$UX[v[114]][zcw3] = { 'productid': zcw3, 'productname': fxd9ul, 'productdesc': _32z6, 'roleid': kcyw3, 'rolename': cejn, 'rolelevel': $qo0h, 'price': _32kzv, 'callback': wk7nc }, sendApi(D$UX[v[125]], v[323], { 'game_pkg': D$UX[v[130]], 'server_id': D$UX[v[136]][v[66]], 'server_name': D$UX[v[136]][v[298]], 'level': $qo0h, 'uid': D$UX[v[190]], 'role_id': kcyw3, 'role_name': cejn, 'product_id': zcw3, 'product_name': fxd9ul, 'product_desc': _32z6, 'money': _32kzv, 'partner_id': D$UX[v[129]] }, toPayCallBack, D$7XU, D$XR);
}, window[v[324]] = function (vkw3) {
  if (vkw3 && (vkw3[v[325]] === 0xc8 || vkw3[v[175]] == v[263])) {
    var mhoq0 = D$UX[v[114]][String(vkw3[v[326]])];if (mhoq0[v[327]]) mhoq0[v[327]](vkw3[v[326]], vkw3[v[328]], -0x1);zkzcw[v[56]]({ 'cpbill': vkw3[v[328]], 'productid': vkw3[v[326]], 'productname': mhoq0[v[329]], 'productdesc': mhoq0[v[330]], 'serverid': D$UX[v[136]][v[66]], 'servername': D$UX[v[136]][v[298]], 'roleid': mhoq0[v[331]], 'rolename': mhoq0[v[332]], 'rolelevel': mhoq0[v[333]], 'price': mhoq0[v[334]], 'extension': JSON[v[194]]({ 'cp_order_id': vkw3[v[328]] }) }, function (ecr7n, cy7wne) {
      mhoq0[v[327]] && ecr7n == 0x0 && mhoq0[v[327]](vkw3[v[326]], vkw3[v[328]], ecr7n);console[v[176]](JSON[v[194]]({ 'type': v[335], 'status': ecr7n, 'data': vkw3, 'role_name': mhoq0[v[332]] }));if (ecr7n === 0x0) {} else {
        if (ecr7n === 0x1) {} else {
          if (ecr7n === 0x2) {}
        }
      }
    });
  } else {
    var op04qh = vkw3 ? v[336] + vkw3[v[325]] + v[337] + vkw3[v[175]] + v[338] + vkw3[v[176]] : v[339];window[v[184]](0xd, v[340] + op04qh), alert(op04qh);
  }
}, window['D$7XUR'] = function () {}, window['D$R7X'] = function (ywk7cn, xa9pd, ykcwn, q$h0om, _iv61) {
  zkzcw[v[92]](D$UX[v[136]][v[66]], D$UX[v[136]][v[298]] || D$UX[v[136]][v[66]], ywk7cn, xa9pd, ykcwn), sendApi(D$UX[v[121]], v[341], { 'game_pkg': D$UX[v[130]], 'server_id': D$UX[v[136]][v[66]], 'role_id': ywk7cn, 'uid': D$UX[v[190]], 'role_name': xa9pd, 'role_type': q$h0om, 'level': ykcwn });
}, window['D$RX7'] = function (uxdf9a, _2i1v6, k3z2yv, ha54qp, ncr, b9ud, wenr7c, iv6_21, i8b16, k7wync) {
  D$UX[v[187]] = uxdf9a, D$UX[v[188]] = _2i1v6, D$UX[v[189]] = k3z2yv, zkzcw[v[93]](D$UX[v[136]][v[66]], D$UX[v[136]][v[298]] || D$UX[v[136]][v[66]], uxdf9a, _2i1v6, k3z2yv), sendApi(D$UX[v[121]], v[342], { 'game_pkg': D$UX[v[130]], 'server_id': D$UX[v[136]][v[66]], 'role_id': uxdf9a, 'uid': D$UX[v[190]], 'role_name': _2i1v6, 'role_type': ha54qp, 'level': k3z2yv, 'evolution': ncr });
}, window['D$7RX'] = function ($moq0, uflx9, q4ho, otgm$0, q4mo, gt$0, o0qmh4, i621v_, ohmq$0, uaxf9) {
  D$UX[v[187]] = $moq0, D$UX[v[188]] = uflx9, D$UX[v[189]] = q4ho, zkzcw[v[94]](D$UX[v[136]][v[66]], D$UX[v[136]][v[298]] || D$UX[v[136]][v[66]], $moq0, uflx9, q4ho), sendApi(D$UX[v[121]], v[342], { 'game_pkg': D$UX[v[130]], 'server_id': D$UX[v[136]][v[66]], 'role_id': $moq0, 'uid': D$UX[v[190]], 'role_name': uflx9, 'role_type': otgm$0, 'level': q4ho, 'evolution': q4mo });
}, window['D$7XR'] = function (qhmo04) {}, window['D$R7'] = function (ycn7k) {
  zkzcw[v[37]](v[37], function (bldf8) {
    ycn7k && ycn7k(bldf8);
  });
}, window[v[91]] = function () {
  zkzcw[v[91]]();
}, window[v[343]] = function () {
  zkzcw[v[102]]();
}, window[v[344]] = function (c7ywn, i1_b68, lub9fd, r7cn, y3wzkc, hq4m0, ld9bu, o$mh) {
  o$mh = o$mh || D$UX[v[136]][v[66]], sendApi(D$UX[v[121]], v[345], { 'phone': c7ywn, 'role_id': i1_b68, 'uid': D$UX[v[190]], 'game_pkg': D$UX[v[130]], 'partner_id': D$UX[v[129]], 'server_id': o$mh }, ld9bu, 0x2, null, function () {
    return !![];
  });
}, window[v[346]] = function (fubd8) {
  window['D$XR7'] = fubd8, window['D$XR7'] && window['D$7R'] && (console[v[176]](v[347] + window['D$7R'][v[348]]), window['D$XR7'](window['D$7R']), window['D$7R'] = null);
}, window['D$X7R'] = function (lf9bud, y3kw, du5ax9, _zk3v) {
  window[v[349]](v[350], { 'game_pkg': window['D$UX'][v[130]], 'role_id': y3kw, 'server_id': du5ax9 }, _zk3v);
}, window['D$UR7X'] = function (w3czk, j7erc, c37yw) {
  function zk3y2v(cer7nj) {
    var ecy7nw = [],
        hqom0 = [],
        fblu8 = c37yw || window[v[107]][v[351]];for (var i6b_81 in fblu8) {
      var w7kyn = Number(i6b_81);(!w3czk || !w3czk[v[281]] || w3czk[v[248]](w7kyn) != -0x1) && (hqom0[v[352]](fblu8[i6b_81]), ecy7nw[v[352]]([w7kyn, 0x3]));
    }window['D$M7XRU'](window[v[353]], v[354]) >= 0x0 ? (console[v[156]](v[355]), zkzcw[v[356]] && zkzcw[v[356]](hqom0, function (i68_21) {
      console[v[156]](v[357]), console[v[156]](i68_21);if (i68_21 && i68_21[v[247]] == v[358]) for (var rjce7 in fblu8) {
        if (i68_21[fblu8[rjce7]] == v[359]) {
          var ufx9ld = Number(rjce7);for (var db8ulf = 0x0; db8ulf < ecy7nw[v[281]]; db8ulf++) {
            if (ecy7nw[db8ulf][0x0] == ufx9ld) {
              ecy7nw[db8ulf][0x1] = 0x1;break;
            }
          }
        }
      }window['D$M7XRU'](window[v[353]], v[360]) >= 0x0 ? wx[v[361]]({ 'withSubscriptions': !![], 'success': function (hqo0m$) {
          var uxfad = hqo0m$[v[362]][v[363]];if (uxfad) {
            console[v[156]](v[364]), console[v[156]](uxfad);for (var z6v_2 in fblu8) {
              if (uxfad[fblu8[z6v_2]] == v[359]) {
                var hoq45p = Number(z6v_2);for (var ubld8f = 0x0; ubld8f < ecy7nw[v[281]]; ubld8f++) {
                  if (ecy7nw[ubld8f][0x0] == hoq45p) {
                    ecy7nw[ubld8f][0x1] = 0x2;break;
                  }
                }
              }
            }console[v[156]](ecy7nw), j7erc && j7erc(ecy7nw);
          } else console[v[156]](v[365]), console[v[156]](hqo0m$), console[v[156]](ecy7nw), j7erc && j7erc(ecy7nw);
        }, 'fail': function () {
          console[v[156]](v[366]), console[v[156]](ecy7nw), j7erc && j7erc(ecy7nw);
        } }) : (console[v[156]](v[367] + window[v[353]]), console[v[156]](ecy7nw), j7erc && j7erc(ecy7nw));
    })) : (console[v[156]](v[368] + window[v[353]]), console[v[156]](ecy7nw), j7erc && j7erc(ecy7nw)), wx[v[369]](zk3y2v);
  }wx[v[370]](zk3y2v);
}, window['D$URX7'] = { 'isSuccess': ![], 'level': v[371], 'isCharging': ![] }, window['D$U7RX'] = function (we7cn) {
  wx[v[372]]({ 'success': function (kyzv23) {
      var ecw7yn = window['D$URX7'];ecw7yn[v[373]] = !![], ecw7yn[v[374]] = Number(kyzv23[v[374]])[v[375]](0x0), ecw7yn[v[376]] = kyzv23[v[376]], we7cn && we7cn(ecw7yn[v[373]], ecw7yn[v[374]], ecw7yn[v[376]]);
    }, 'fail': function (bf8ilu) {
      console[v[156]](v[377], bf8ilu[v[247]]);var z_k32v = window['D$URX7'];we7cn && we7cn(z_k32v[v[373]], z_k32v[v[374]], z_k32v[v[376]]);
    } });
}, window[v[378]] = function (i61b) {
  wx[v[378]]({ 'success': function (y7cw3k) {
      i61b && i61b(!![], y7cw3k);
    }, 'fail': function (rwnce7) {
      i61b && i61b(![], rwnce7);
    } });
}, window[v[379]] = function (rn7cje) {
  if (rn7cje) wx[v[379]](rn7cje);
}, window[v[380]] = function (cr7) {
  wx[v[380]](cr7);
}, window[v[349]] = function (fdxl9, kwc73y, bfu9ld, rcne7, u9bdfl, ercj7, px5ad, fxu9l) {
  if (rcne7 == undefined) rcne7 = 0x1;wx[v[207]]({ 'url': fdxl9, 'method': px5ad || v[381], 'responseType': v[382], 'data': kwc73y, 'header': { 'content-type': fxu9l || v[208] }, 'success': function (enwy7) {
      DEBUG && console[v[156]](v[383], fdxl9, info, enwy7);if (enwy7 && enwy7[v[384]] == 0xc8) {
        var z2y3k = enwy7[v[174]];!ercj7 || ercj7(z2y3k) ? bfu9ld && bfu9ld(z2y3k) : window[v[385]](fdxl9, kwc73y, bfu9ld, rcne7, u9bdfl, ercj7, enwy7);
      } else window[v[385]](fdxl9, kwc73y, bfu9ld, rcne7, u9bdfl, ercj7, enwy7);
    }, 'fail': function (wc7ynk) {
      DEBUG && console[v[156]](v[386], fdxl9, info, wc7ynk), window[v[385]](fdxl9, kwc73y, bfu9ld, rcne7, u9bdfl, ercj7, wc7ynk);
    }, 'complete': function () {} });
}, window[v[385]] = function (ldu8, i6lb81, du9a5, mt$ho0, y3wkzv, yn7kw, bi816l) {
  mt$ho0 - 0x1 > 0x0 ? setTimeout(function () {
    window[v[349]](ldu8, i6lb81, du9a5, mt$ho0 - 0x1, y3wkzv, yn7kw);
  }, 0x3e8) : y3wkzv && y3wkzv(JSON[v[194]]({ 'url': ldu8, 'response': bi816l }));
}, window[v[387]] = function (f9xuad, fd9ul, renw, xfud, u9d5x, vzy2k3, uxa59d) {
  !renw && (renw = {});var qo0ph = Math[v[388]](Date[v[142]]() / 0x3e8);renw[v[272]] = qo0ph, renw[v[389]] = fd9ul;var eycwn = Object[v[390]](renw)[v[391]](),
      dxuf9a = '',
      fdu9 = '';for (var $moht = 0x0; $moht < eycwn[v[281]]; $moht++) {
    dxuf9a = dxuf9a + ($moht == 0x0 ? '' : '&') + eycwn[$moht] + renw[eycwn[$moht]], fdu9 = fdu9 + ($moht == 0x0 ? '' : '&') + eycwn[$moht] + '=' + encodeURIComponent(renw[eycwn[$moht]]);
  }dxuf9a = dxuf9a + D$UX[v[127]];var p95xa = v[392] + md5(dxuf9a);send(f9xuad + '?' + fdu9 + (fdu9 == '' ? '' : '&') + p95xa, null, xfud, u9d5x, vzy2k3, uxa59d || function (uld9xf) {
    return uld9xf[v[175]] == v[263];
  }, null, v[28]);
}, window['D$U7XR'] = function (x9a5, njcr7e) {
  var d9x5p = 0x0;D$UX[v[136]] && (d9x5p = D$UX[v[136]][v[66]]), sendApi(D$UX[v[123]], v[393], { 'partnerId': D$UX[v[129]], 'gamePkg': D$UX[v[130]], 'logTime': Math[v[388]](Date[v[142]]() / 0x3e8), 'platformUid': D$UX[v[268]], 'type': x9a5, 'serverId': d9x5p }, null, 0x2, null, function () {
    return !![];
  });
}, window['D$UXR7'] = function (yn7ckw) {
  sendApi(D$UX[v[121]], v[394], { 'partner_id': D$UX[v[129]], 'uid': D$UX[v[190]], 'version': D$UX[v[116]], 'game_pkg': D$UX[v[130]], 'device': D$UX[v[131]] }, D$UX7R, D$7XU, D$XR);
}, window['D$UX7R'] = function (xlf9d) {
  if (xlf9d && xlf9d[v[175]] === v[263] && xlf9d[v[174]]) {
    xlf9d[v[174]][v[395]]({ 'id': -0x2, 'name': v[396] }), xlf9d[v[174]][v[395]]({ 'id': -0x1, 'name': v[397] }), D$UX[v[398]] = xlf9d[v[174]];if (window[v[399]]) window[v[399]][v[400]]();
  } else {
    D$UX[v[401]] = ![];var wcney7 = xlf9d ? xlf9d[v[175]] : '';window[v[184]](0x7, v[402] + wcney7), window['D$R7UX'](v[403] + wcney7);
  }
}, window['D$R7U'] = function (ewcy) {
  sendApi(D$UX[v[121]], v[404], { 'partner_id': D$UX[v[129]], 'uid': D$UX[v[190]], 'version': D$UX[v[116]], 'game_pkg': D$UX[v[130]], 'device': D$UX[v[131]] }, D$RU7, D$7XU, D$XR);
}, window['D$RU7'] = function (hqop40) {
  D$UX[v[405]] = ![];if (hqop40 && hqop40[v[175]] === v[263] && hqop40[v[174]]) {
    for (var a4x5qp = 0x0; a4x5qp < hqop40[v[174]][v[281]]; a4x5qp++) {
      hqop40[v[174]][a4x5qp][v[302]] = D$U7R(hqop40[v[174]][a4x5qp]);
    }D$UX[v[133]][-0x1] = window[v[406]](hqop40[v[174]]), window[v[399]][v[407]](-0x1);
  } else {
    var vk2_z = hqop40 ? hqop40[v[175]] : '';window[v[184]](0x8, v[408] + vk2_z), window['D$R7UX'](v[409] + vk2_z);
  }
}, window[v[410]] = function (u8ilbf) {
  sendApi(D$UX[v[121]], v[404], { 'partner_id': D$UX[v[129]], 'uid': D$UX[v[190]], 'version': D$UX[v[116]], 'game_pkg': D$UX[v[130]], 'device': D$UX[v[131]] }, u8ilbf, D$7XU, D$XR);
}, window['D$7RU'] = function (hm0o$t, xda5) {
  sendApi(D$UX[v[121]], v[411], { 'partner_id': D$UX[v[129]], 'uid': D$UX[v[190]], 'version': D$UX[v[116]], 'game_pkg': D$UX[v[130]], 'device': D$UX[v[131]], 'server_group_id': xda5 }, D$7UR, D$7XU, D$XR);
}, window['D$7UR'] = function (hp4qo) {
  D$UX[v[405]] = ![];if (hp4qo && hp4qo[v[175]] === v[263] && hp4qo[v[174]] && hp4qo[v[174]][v[174]]) {
    var o5hq4p = hp4qo[v[174]][v[412]],
        v2z63_ = [];for (var ny7ewc = 0x0; ny7ewc < hp4qo[v[174]][v[174]][v[281]]; ny7ewc++) {
      hp4qo[v[174]][v[174]][ny7ewc][v[302]] = D$U7R(hp4qo[v[174]][v[174]][ny7ewc]), (v2z63_[v[281]] == 0x0 || hp4qo[v[174]][v[174]][ny7ewc][v[302]] != 0x0) && (v2z63_[v2z63_[v[281]]] = hp4qo[v[174]][v[174]][ny7ewc]);
    }D$UX[v[133]][o5hq4p] = window[v[406]](v2z63_), window[v[399]][v[407]](o5hq4p);
  } else {
    var fdul8 = hp4qo ? hp4qo[v[175]] : '';window[v[184]](0x9, v[413] + fdul8), window['D$R7UX'](v[414] + fdul8);
  }
}, window['D$M7XU'] = function (y7knwc) {
  sendApi(D$UX[v[121]], v[415], { 'partner_id': D$UX[v[129]], 'uid': D$UX[v[190]], 'version': D$UX[v[116]], 'game_pkg': D$UX[v[130]], 'device': D$UX[v[131]] }, reqServerRecommendCallBack, D$7XU, D$XR);
}, window[v[416]] = function ($q0mo) {
  D$UX[v[405]] = ![];if ($q0mo && $q0mo[v[175]] === v[263] && $q0mo[v[174]]) {
    for (var ibl1f8 = 0x0; ibl1f8 < $q0mo[v[174]][v[281]]; ibl1f8++) {
      $q0mo[v[174]][ibl1f8][v[302]] = D$U7R($q0mo[v[174]][ibl1f8]);
    }D$UX[v[133]][-0x2] = window[v[406]]($q0mo[v[174]]), window[v[399]][v[407]](-0x2);
  } else {
    var o5qp4h = $q0mo ? $q0mo[v[175]] : '';window[v[184]](0xa, v[417] + o5qp4h), alert(v[418] + o5qp4h);
  }
}, window[v[406]] = function (k3zcyw) {
  return k3zcyw;
}, window['D$UR7'] = function (g$tm0o, lfdub8) {
  g$tm0o = g$tm0o || D$UX[v[136]][v[66]], sendApi(D$UX[v[121]], v[419], { 'type': '4', 'game_pkg': D$UX[v[130]], 'server_id': g$tm0o }, lfdub8);
}, window[v[420]] = function (budf9, d5aux, u8, mho40q) {
  u8 = u8 || D$UX[v[136]][v[66]], sendApi(D$UX[v[121]], v[421], { 'type': budf9, 'game_pkg': d5aux, 'server_id': u8 }, mho40q);
}, window[v[422]] = function (ludfb, vz3k_) {
  sendApi(D$UX[v[121]], v[423], { 'game_pkg': ludfb }, vz3k_);
}, window['D$U7R'] = function (c3yk) {
  if (c3yk) {
    if (c3yk[v[302]] == 0x1) {
      if (c3yk[v[424]] == 0x1) return 0x2;else return 0x1;
    } else return c3yk[v[302]] == 0x0 ? 0x0 : -0x1;
  }return -0x1;
}, window['D$XR7U'] = function (fdxa9, p54) {
  D$UX[v[425]] = { 'step': fdxa9, 'server_id': p54 }, D$RU7X({ 'title': v[426] }), sendApi(D$UX[v[121]], v[427], { 'partner_id': D$UX[v[129]], 'uid': D$UX[v[190]], 'game_pkg': D$UX[v[130]], 'server_id': p54, 'platform': D$UX[v[267]], 'platform_uid': D$UX[v[268]], 'check_login_time': D$UX[v[271]], 'check_login_sign': D$UX[v[269]], 'version_name': D$UX[v[233]] }, D$XRU7, D$7XU, D$XR, function (wc7k3y) {
    return wc7k3y[v[175]] == v[263] || wc7k3y[v[176]] == v[428] || wc7k3y[v[176]] == v[429];
  });
}, window['D$XRU7'] = function (oh0mt) {
  var gom0$ = this;if (oh0mt && oh0mt[v[175]] === v[263] && oh0mt[v[174]]) {
    var $0mot = D$UX[v[136]];$0mot[v[430]] = D$UX[v[134]], $0mot[v[270]] = String(oh0mt[v[174]][v[431]]), $0mot[v[141]] = parseInt(oh0mt[v[174]][v[272]]);if (oh0mt[v[174]][v[432]]) $0mot[v[432]] = parseInt(oh0mt[v[174]][v[432]]);else $0mot[v[432]] = parseInt(oh0mt[v[174]][v[66]]);$0mot[v[433]] = 0x0, $0mot[v[191]] = D$UX[v[315]], $0mot[v[434]] = oh0mt[v[174]][v[435]], $0mot[v[436]] = oh0mt[v[174]][v[436]];if (oh0mt[v[174]][v[437]]) $0mot[v[437]] = parseInt(oh0mt[v[174]][v[437]]);console[v[156]](v[438] + JSON[v[194]]($0mot[v[436]])), D$UX[v[296]] == 0x1 && $0mot[v[436]] && $0mot[v[436]][v[439]] == 0x1 && (D$UX[v[440]] = 0x1, window[v[172]][v[173]]['D$MXU']()), D$X7RU();
  } else {
    if (D$UX[v[425]][v[441]] >= 0x3) {
      var axpq4 = oh0mt ? oh0mt[v[175]] : '';window[v[184]](0xc, v[442] + axpq4), D$XR(JSON[v[194]](oh0mt)), window['D$R7UX'](v[443] + axpq4);
    } else sendApi(D$UX[v[121]], v[245], { 'platform': D$UX[v[119]], 'partner_id': D$UX[v[129]], 'token': D$UX[v[243]], 'game_pkg': D$UX[v[130]], 'deviceId': D$UX[v[131]], 'scene': v[246] + D$UX[v[132]] }, function (p54x9a) {
      if (!p54x9a || p54x9a[v[175]] != v[263]) {
        window['D$R7UX'](v[265] + p54x9a && p54x9a[v[175]]);return;
      }D$UX[v[269]] = String(p54x9a[v[270]]), D$UX[v[271]] = String(p54x9a[v[272]]), setTimeout(function () {
        D$XR7U(D$UX[v[425]][v[441]] + 0x1, D$UX[v[425]][v[66]]);
      }, 0x5dc);
    }, D$7XU, D$XR, function (a59x4) {
      return a59x4[v[175]] == v[263] || a59x4[v[175]] == v[444];
    });
  }
}, window['D$X7RU'] = function () {
  ServerLoading[v[173]][v[307]](D$UX[v[296]]), window['D$7X'] = !![], window['D$XUR7']();
}, window['D$X7UR'] = function () {
  if (window['D$X7'] && window['D$U7X'] && window[v[152]] && window[v[153]] && window['D$UX7'] && window['D$U7']) {
    if (!window[v[445]][v[173]]) {
      console[v[156]](v[446] + window[v[445]][v[173]]);var apxq = wx[v[447]](),
          ywk3zv = apxq[v[348]] ? apxq[v[348]] : 0x0,
          _b8i16 = { 'cdn': window['D$UX'][v[191]], 'spareCdn': window['D$UX'][v[231]], 'newRegister': window['D$UX'][v[296]], 'wxPC': window['D$UX'][v[151]], 'wxIOS': window['D$UX'][v[149]], 'wxAndroid': window['D$UX'][v[150]], 'wxParam': { 'limitLoad': window['D$UX']['D$MR7XU'], 'benchmarkLevel': window['D$UX']['D$MRU7X'], 'wxFrom': window[v[107]][v[239]] == v[448] ? 0x1 : 0x0, 'wxSDKVersion': window[v[353]] }, 'configType': window['D$UX'][v[143]], 'exposeType': window['D$UX'][v[145]], 'scene': ywk3zv };new window[v[445]](_b8i16, window['D$UX'][v[147]], window['D$MR7UX']);
    }
  }
}, window['D$XUR7'] = function () {
  if (window['D$X7'] && window['D$U7X'] && window[v[152]] && window[v[153]] && window['D$UX7'] && window['D$U7'] && window['D$7X'] && window['D$7U']) {
    D$RUX7();if (!D$X7U) {
      D$X7U = !![];if (!window[v[445]][v[173]]) window['D$X7UR']();var uadx9 = 0x0,
          _b681 = wx[v[449]]();_b681 && (window['D$UX'][v[450]] && (uadx9 = _b681[v[451]]), console[v[176]](v[452] + _b681[v[451]] + v[453] + _b681[v[454]] + v[455] + _b681[v[456]] + v[457] + _b681[v[458]] + v[459] + _b681[v[460]] + v[461] + _b681[v[462]]));var ux9d5 = {};for (const mt0go in D$UX[v[136]]) {
        ux9d5[mt0go] = D$UX[v[136]][mt0go];
      }var ho$mt = { 'channel': window['D$UX'][v[135]], 'account': window['D$UX'][v[190]], 'userId': window['D$UX'][v[266]], 'cdn': window['D$UX'][v[191]], 'data': window['D$UX'][v[174]], 'package': window['D$UX'][v[115]], 'newRegister': window['D$UX'][v[296]], 'pkgName': window['D$UX'][v[130]], 'partnerId': window['D$UX'][v[129]], 'platform_uid': window['D$UX'][v[268]], 'deviceId': window['D$UX'][v[131]], 'selectedServer': ux9d5, 'configType': window['D$UX'][v[143]], 'exposeType': window['D$UX'][v[145]], 'debugUsers': window['D$UX'][v[139]], 'wxMenuTop': uadx9, 'wxShield': window['D$UX'][v[148]] };if (window[v[318]]) for (var ap94x5 in window[v[318]]) {
        ho$mt[ap94x5] = window[v[318]][ap94x5];
      }window[v[445]][v[173]]['D$XUM'](ho$mt);if (D$UX[v[136]] && D$UX[v[136]][v[66]]) localStorage[v[463]](v[275] + D$UX[v[130]] + D$UX[v[190]], D$UX[v[136]][v[66]]);
    }
  } else console[v[176]](v[464] + window['D$X7'] + v[465] + window['D$U7X'] + v[466] + window[v[152]] + v[467] + window[v[153]] + v[468] + window['D$UX7'] + v[469] + window['D$U7'] + v[470] + window['D$7X'] + v[471] + window['D$7U']);
};