var _ = wx.y$;
import _dxyw_z from '../bbbk/bbbsdk.js';window[_[30553]] = { 'wxVersion': window[_[1032]][_[30456]] }, window[_[30554]] = ![], window['p$ED'] = 0x1, window[_[30555]] = 0x1, window['p$CDE'] = !![], window[_[30556]] = !![], window['p$ABCDE'] = '', window[_[30557]] = ![], window['p$DE'] = { 'base_cdn': _[30558], 'cdn': _[30558] }, p$DE[_[30559]] = {}, p$DE[_[192]] = '0', p$DE[_[5388]] = window[_[30553]][_[30560]], p$DE[_[30528]] = '', p$DE['os'] = '1', p$DE[_[30561]] = _[30562], p$DE[_[30563]] = _[30564], p$DE[_[30565]] = _[30566], p$DE[_[30567]] = _[30568], p$DE[_[30569]] = _[30570], p$DE[_[24779]] = '1', p$DE[_[26474]] = '', p$DE[_[26476]] = '', p$DE[_[30571]] = 0x0, p$DE[_[30572]] = {}, p$DE[_[30573]] = parseInt(p$DE[_[24779]]), p$DE[_[26472]] = p$DE[_[24779]], p$DE[_[26468]] = {}, p$DE['p$BD'] = _[30574], p$DE[_[30575]] = ![], p$DE[_[13092]] = _[30576], p$DE[_[26440]] = Date[_[599]](), p$DE[_[12692]] = _[30577], p$DE[_[1208]] = '_a', p$DE[_[30578]] = 0x1, p$DE[_[612]] = 0x7c1, p$DE[_[30560]] = window[_[30553]][_[30560]], p$DE[_[1232]] = ![], p$DE[_[1564]] = ![], p$DE[_[12082]] = ![], p$DE[_[26169]] = ![], window['p$CED'] = 0x5, window['p$CE'] = ![], window['p$EC'] = ![], window['p$DCE'] = ![], window[_[30579]] = ![], window[_[30580]] = ![], window['p$DEC'] = ![], window['p$CD'] = ![], window['p$DC'] = ![], window['p$ECD'] = ![], window[_[30581]] = null, window[_[1110]] = function (kihjgl) {
  console[_[156]](_[1110], kihjgl), wx[_[5668]]({}), wx[_[30480]]({ 'title': _[7049], 'content': kihjgl, 'success'(jigfhe) {
      if (jigfhe[_[30582]]) console[_[156]](_[30583]);else jigfhe[_[1028]] && console[_[156]](_[30584]);
    } });
}, window['p$BCDE'] = function (molkp) {
  console[_[156]](_[30585], molkp), p$BDEC(), wx[_[30480]]({ 'title': _[7049], 'content': molkp, 'confirmText': _[30586], 'cancelText': _[19561], 'success'(mpqlo) {
      if (mpqlo[_[30582]]) window['p$DB']();else mpqlo[_[1028]] && (console[_[156]](_[30587]), wx[_[26166]]({}));
    } });
}, window[_[30588]] = function (vuwyxt) {
  console[_[156]](_[30588], vuwyxt), wx[_[30480]]({ 'title': _[7049], 'content': vuwyxt, 'confirmText': _[26601], 'showCancel': ![], 'complete'(_z$0xy) {
      console[_[156]](_[30587]), wx[_[26166]]({});
    } });
}, window['p$BCED'] = ![], window['p$BDCE'] = function (vuxstw) {
  window['p$BCED'] = !![], wx[_[5667]](vuxstw);
}, window['p$BDEC'] = function () {
  window['p$BCED'] && (window['p$BCED'] = ![], wx[_[5668]]({}));
}, window['p$BECD'] = function (porqnm) {
  window[_[30471]][_[648]]['p$BECD'](porqnm);
}, window[_[12962]] = function (rtsuw, xvswu) {
  _dxyw_z[_[12962]](rtsuw, function (kpln) {
    kpln && kpln[_[201]] ? kpln[_[201]][_[1697]] == 0x1 ? xvswu(!![]) : (xvswu(![]), console[_[594]](_[30589] + kpln[_[201]][_[30590]])) : console[_[156]](_[12962], kpln);
  });
}, window['p$BEDC'] = function (_$103) {
  console[_[156]](_[30591], _$103);
}, window['p$BDE'] = function (rpqtsu) {}, window['p$BED'] = function (xyzw$_, ptrq, gfbdec) {}, window['p$BE'] = function (mnljok) {
  console[_[156]](_[30592], mnljok), window[_[30471]][_[648]][_[30593]](), window[_[30471]][_[648]][_[30594]](), window[_[30471]][_[648]][_[30595]]();
}, window['p$EB'] = function (nqpl) {
  window[_[30596]](0xe, _[30597] + nqpl), window['p$BCDE'](_[30598]);var z$wyv = { 'id': window['p$DE'][_[30461]], 'role': window['p$DE'][_[5317]], 'level': window['p$DE'][_[30462]], 'account': window['p$DE'][_[26473]], 'version': window['p$DE'][_[612]], 'cdn': window['p$DE'][_[5197]], 'pkgName': window['p$DE'][_[26474]], 'gamever': window[_[1032]][_[30456]], 'serverid': window['p$DE'][_[26468]] ? window['p$DE'][_[26468]][_[12260]] : 0x0, 'systemInfo': window[_[30463]], 'error': _[30599], 'stack': nqpl ? nqpl : _[30598] },
      zwvy = JSON[_[5183]](z$wyv);console[_[199]](_[30600] + zwvy), window['p$BD'](zwvy);
}, window[_[30596]] = function (eigfhd, kmp) {
  sendApi(p$DE[_[30565]], _[30601], { 'game_pkg': p$DE[_[26474]], 'partner_id': p$DE[_[24779]], 'server_id': p$DE[_[26468]] && p$DE[_[26468]][_[12260]] > 0x0 ? p$DE[_[26468]][_[12260]] : 0x0, 'uid': p$DE[_[26473]] > 0x0 ? p$DE[_[26473]] : 0x0, 'type': eigfhd, 'info': kmp });
}, window['p$DBE'] = function (dhieg) {
  var fhijk = JSON[_[155]](dhieg);fhijk[_[30602]] = window[_[1032]][_[30456]], fhijk[_[30603]] = window['p$DE'][_[26468]] ? window['p$DE'][_[26468]][_[12260]] : 0x0, fhijk[_[30463]] = window[_[30463]];var qv = JSON[_[5183]](fhijk);console[_[199]](_[30604] + qv), window['p$BD'](qv);
}, window['p$DEB'] = function (z$1y, uxwtv) {
  var soqp = { 'id': window['p$DE'][_[30461]], 'role': window['p$DE'][_[5317]], 'level': window['p$DE'][_[30462]], 'account': window['p$DE'][_[26473]], 'version': window['p$DE'][_[612]], 'cdn': window['p$DE'][_[5197]], 'pkgName': window['p$DE'][_[26474]], 'gamever': window[_[1032]][_[30456]], 'serverid': window['p$DE'][_[26468]] ? window['p$DE'][_[26468]][_[12260]] : 0x0, 'systemInfo': window[_[30463]], 'error': z$1y, 'stack': uxwtv },
      oplqnm = JSON[_[5183]](soqp);console[_[212]](_[30605] + oplqnm), window['p$BD'](oplqnm);
}, window['p$BD'] = function (nkop) {
  if (window['p$DE'][_[30529]] == _[30606]) return;var _21$30 = p$DE['p$BD'] + _[30607] + p$DE[_[26473]];wx[_[956]]({ 'url': _21$30, 'method': _[30310], 'data': nkop, 'header': { 'content-type': _[30608], 'cache-control': _[30609] }, 'success': function (z_12) {
      DEBUG && console[_[156]](_[30610], _21$30, nkop, z_12);
    }, 'fail': function (oqlmp) {
      DEBUG && console[_[156]](_[30610], _21$30, nkop, oqlmp);
    }, 'complete': function () {} });
}, window[_[30611]] = function () {
  function qon() {
    return ((0x1 + Math[_[624]]()) * 0x10000 | 0x0)[_[38]](0x10)[_[162]](0x1);
  }return qon() + qon() + '-' + qon() + '-' + qon() + '-' + qon() + '+' + qon() + qon() + qon();
}, window['p$DB'] = function () {
  console[_[156]](_[30612]);var efhdig = _dxyw_z[_[30613]]();p$DE[_[26472]] = efhdig[_[30614]], p$DE[_[30573]] = efhdig[_[30614]], p$DE[_[24779]] = efhdig[_[30614]], p$DE[_[26474]] = efhdig[_[30615]];var ifje = { 'game_ver': p$DE[_[5388]] };p$DE[_[26476]] = this[_[30611]](), p$BDCE({ 'title': _[30616] }), _dxyw_z[_[846]](ifje, this['p$EBD'][_[8]](this));
}, window['p$EBD'] = function (xy$wz_) {
  var mnpoqr = xy$wz_[_[30617]];sdkInitRes = xy$wz_, console[_[156]](_[30618] + mnpoqr + _[30619] + (mnpoqr == 0x1) + _[30620] + xy$wz_[_[30456]] + _[30621] + window[_[30553]][_[30560]]);if (!xy$wz_[_[30456]] || window['p$ACEBD'](window[_[30553]][_[30560]], xy$wz_[_[30456]]) < 0x0) console[_[156]](_[30622]), p$DE[_[30563]] = _[30623], p$DE[_[30565]] = _[30624], p$DE[_[30567]] = _[30625], p$DE[_[5197]] = _[30626], p$DE[_[26167]] = _[30627], p$DE[_[30628]] = _[30629], p$DE[_[1232]] = ![];else window['p$ACEBD'](window[_[30553]][_[30560]], xy$wz_[_[30456]]) == 0x0 ? (console[_[156]](_[30630]), p$DE[_[30563]] = _[30564], p$DE[_[30565]] = _[30566], p$DE[_[30567]] = _[30568], p$DE[_[5197]] = _[30558], p$DE[_[26167]] = _[30627], p$DE[_[30628]] = _[30629], p$DE[_[1232]] = !![]) : (console[_[156]](_[30631]), p$DE[_[30563]] = _[30564], p$DE[_[30565]] = _[30566], p$DE[_[30567]] = _[30568], p$DE[_[5197]] = _[30558], p$DE[_[26167]] = _[30627], p$DE[_[30628]] = _[30629], p$DE[_[1232]] = ![]);p$DE[_[30571]] = config[_[33]] ? config[_[33]] : 0x0, this['p$CDBE'](), this['p$CDEB'](), window[_[30632]] = 0x5, p$BDCE({ 'title': _[30633] }), _dxyw_z[_[30341]](this['p$EDB'][_[8]](this));
}, window[_[30632]] = 0x5, window['p$EDB'] = function (bcgfd, hjfeg) {
  if (bcgfd == 0x0 && hjfeg && hjfeg[_[187]]) {
    p$DE[_[30634]] = hjfeg[_[187]];var tuprsq = this;p$BDCE({ 'title': _[30635] }), sendApi(p$DE[_[30563]], _[30636], { 'platform': p$DE[_[30561]], 'partner_id': p$DE[_[24779]], 'token': hjfeg[_[187]], 'game_pkg': p$DE[_[26474]], 'deviceId': p$DE[_[26476]], 'scene': _[30637] + p$DE[_[30571]] }, this['p$CBDE'][_[8]](this), p$CED, p$EB);
  } else hjfeg && hjfeg[_[26668]] && window[_[30632]] > 0x0 && (hjfeg[_[26668]][_[102]](_[30638]) != -0x1 || hjfeg[_[26668]][_[102]](_[30639]) != -0x1 || hjfeg[_[26668]][_[102]](_[30640]) != -0x1 || hjfeg[_[26668]][_[102]](_[30641]) != -0x1 || hjfeg[_[26668]][_[102]](_[30642]) != -0x1 || hjfeg[_[26668]][_[102]](_[30643]) != -0x1) ? (window[_[30632]]--, _dxyw_z[_[30341]](this['p$EDB'][_[8]](this))) : (window[_[30596]](0x1, _[30644] + bcgfd + _[30645] + (hjfeg ? hjfeg[_[26668]] : '')), window['p$DEB'](_[30646], JSON[_[5183]]({ 'status': bcgfd, 'data': hjfeg })), window['p$BCDE'](_[30647] + (hjfeg && hjfeg[_[26668]] ? '，' + hjfeg[_[26668]] : '')));
}, window['p$CBDE'] = function (mrqonp) {
  if (!mrqonp) {
    window[_[30596]](0x2, _[30648]), window['p$DEB'](_[30649], _[30650]), window['p$BCDE'](_[30651]);return;
  }if (mrqonp[_[1697]] != _[10633]) {
    window[_[30596]](0x2, _[30652] + mrqonp[_[1697]]), window['p$DEB'](_[30649], JSON[_[5183]](mrqonp)), window['p$BCDE'](_[30653] + mrqonp[_[1697]]);return;
  }p$DE[_[19940]] = String(mrqonp[_[26473]]), p$DE[_[26473]] = String(mrqonp[_[26473]]), p$DE[_[26438]] = String(mrqonp[_[26438]]), p$DE[_[26472]] = String(mrqonp[_[26438]]), p$DE[_[26475]] = String(mrqonp[_[26475]]), p$DE[_[30654]] = String(mrqonp[_[12243]]), p$DE[_[30655]] = String(mrqonp[_[1344]]), p$DE[_[12243]] = '';var wy_xz$ = this;p$BDCE({ 'title': _[30656] });var hmi = localStorage[_[959]](_[30657] + p$DE[_[26474]] + p$DE[_[26473]]);if (hmi && hmi != '') {
    var fide = Number(hmi);wy_xz$[_[30658]](fide);
  } else wy_xz$[_[30659]]();
}, window[_[30659]] = function () {
  var utqsrp = this;sendApi(p$DE[_[30563]], _[30660], { 'partner_id': p$DE[_[24779]], 'uid': p$DE[_[26473]], 'version': p$DE[_[5388]], 'game_pkg': p$DE[_[26474]], 'device': p$DE[_[26476]] }, utqsrp['p$CBED'][_[8]](utqsrp), p$CED, p$EB);
}, window['p$CBED'] = function (uqst) {
  if (!uqst) {
    window[_[30596]](0x3, _[30661]), window['p$BCDE'](_[30661]);return;
  }if (uqst[_[1697]] != _[10633]) {
    window[_[30596]](0x3, _[30662] + uqst[_[1697]]), window['p$BCDE'](_[30662] + uqst[_[1697]]);return;
  }if (!uqst[_[201]] || uqst[_[201]][_[19]] == 0x0) {
    window[_[30596]](0x3, _[30663]), window['p$BCDE'](_[30664]);return;
  }this[_[30665]](uqst);
}, window[_[30658]] = function (hdgfe) {
  var gjihf = this;sendApi(p$DE[_[30563]], _[30666], { 'server_id': hdgfe, 'time': Date[_[599]]() / 0x3e8 }, gjihf[_[30667]][_[8]](gjihf), p$CED, p$EB);
}, window[_[30667]] = function (_yz$w) {
  if (!_yz$w) {
    window[_[30596]](0x4, _[30668]), this[_[30659]]();return;
  }if (_yz$w[_[1697]] != _[10633]) {
    window[_[30596]](0x4, _[30669] + _yz$w[_[1697]]), this[_[30659]]();return;
  }if (!_yz$w[_[201]] || _yz$w[_[201]][_[19]] == 0x0) {
    window[_[30596]](0x4, _[30670]), this[_[30659]]();return;
  }this[_[30665]](_yz$w), window[_[30471]] && window[_[30471]][_[648]][_[30671]] && window[_[30471]][_[648]][_[30671]](sdkInitRes[_[30672]], sdkInitRes[_[30673]], sdkInitRes[_[30674]], sdkInitRes[_[30675]], sdkInitRes[_[30676]]);
}, window[_[30665]] = function (dechf) {
  p$DE[_[1120]] = dechf[_[30677]] != undefined ? dechf[_[30677]] : 0x0, p$DE[_[26468]] = { 'server_id': String(dechf[_[201]][0x0][_[12260]]), 'server_name': String(dechf[_[201]][0x0][_[30678]]), 'entry_ip': dechf[_[201]][0x0][_[26496]], 'entry_port': parseInt(dechf[_[201]][0x0][_[26497]]), 'status': p$DCB(dechf[_[201]][0x0]), 'start_time': dechf[_[201]][0x0][_[30679]], 'cdn': p$DE[_[5197]] }, this['p$EDCB']();
}, window['p$EDCB'] = function () {
  if (p$DE[_[1120]] == 0x1) {
    var caedfb = p$DE[_[26468]][_[616]];if (caedfb === -0x1 || caedfb === 0x0) {
      window[_[30596]](0xf, _[30680] + p$DE[_[26468]]['id'] + _[30681] + p$DE[_[26468]][_[616]]), window['p$BCDE'](caedfb === -0x1 ? _[30682] : _[30683]);return;
    }p$EBCD(0x0, p$DE[_[26468]][_[12260]]), window[_[30471]][_[648]][_[30684]](p$DE[_[1120]]);
  } else wx[_[30685]](window[_[30451]]), window[_[30471]][_[648]][_[30686]](), p$BDEC();window['p$DC'] = !![], window['p$ECDB'](), window['p$EDBC']();
}, window['p$CDBE'] = function () {
  sendApi(p$DE[_[30563]], _[30687], { 'game_pkg': p$DE[_[26474]], 'version_name': p$DE[_[30628]] }, this[_[30688]][_[8]](this), p$CED, p$EB);
}, window[_[30688]] = function (edcbg) {
  if (!edcbg) {
    window[_[30596]](0x5, _[30689]), window['p$BCDE'](_[30689]);return;
  }if (edcbg[_[1697]] != _[10633]) {
    window[_[30596]](0x5, _[30690] + edcbg[_[1697]]), window['p$BCDE'](_[30690] + edcbg[_[1697]]);return;
  }if (!edcbg[_[201]] || !edcbg[_[201]][_[5388]]) {
    window[_[30596]](0x5, _[30691] + (edcbg[_[201]] && edcbg[_[201]][_[5388]])), window['p$BCDE'](_[30691] + (edcbg[_[201]] && edcbg[_[201]][_[5388]]));return;
  }edcbg[_[201]][_[30692]] && edcbg[_[201]][_[30692]][_[19]] > 0xa && (p$DE[_[30693]] = edcbg[_[201]][_[30692]], p$DE[_[5197]] = edcbg[_[201]][_[30692]]), edcbg[_[201]][_[5388]] && (p$DE[_[612]] = edcbg[_[201]][_[5388]]), console[_[594]](_[26607] + p$DE[_[612]] + _[30694] + p$DE[_[30628]]), window['p$DEC'] = !![], window['p$ECDB'](), window['p$EDBC']();
}, window[_[30695]], window['p$CDEB'] = function () {
  sendApi(p$DE[_[30563]], _[30696], { 'game_pkg': p$DE[_[26474]] }, this['p$CEBD'][_[8]](this), p$CED, p$EB);
}, window['p$CEBD'] = function (injm) {
  if (injm && injm[_[1697]] === _[10633] && injm[_[201]]) {
    window[_[30695]] = injm[_[201]];for (var x_yz in injm[_[201]]) {
      p$DE[x_yz] = injm[_[201]][x_yz];
    }
  } else window[_[30596]](0xb, _[30697]), console[_[594]](_[30698] + injm[_[1697]]);window['p$CD'] = !![], window['p$EDBC']();
}, window[_[30699]] = function (qpu, dcgbe, yvzux, xywutv, z$0_21, psrqon, _0$y1, pnoqr, vz$y, uvqr) {
  z$0_21 = String(z$0_21);var hfkji = _0$y1,
      njlok = pnoqr;p$DE[_[30559]][z$0_21] = { 'productid': z$0_21, 'productname': hfkji, 'productdesc': njlok, 'roleid': qpu, 'rolename': dcgbe, 'rolelevel': yvzux, 'price': psrqon, 'callback': vz$y }, sendApi(p$DE[_[30567]], _[30700], { 'game_pkg': p$DE[_[26474]], 'server_id': p$DE[_[26468]][_[12260]], 'server_name': p$DE[_[26468]][_[30678]], 'level': yvzux, 'uid': p$DE[_[26473]], 'role_id': qpu, 'role_name': dcgbe, 'product_id': z$0_21, 'product_name': hfkji, 'product_desc': njlok, 'money': psrqon, 'partner_id': p$DE[_[24779]] }, toPayCallBack, p$CED, p$EB);
}, window[_[30701]] = function (lhjigk) {
  if (lhjigk && (lhjigk[_[30702]] === 0xc8 || lhjigk[_[1697]] == _[10633])) {
    var ifehjg = p$DE[_[30559]][String(lhjigk[_[30703]])];if (ifehjg[_[813]]) ifehjg[_[813]](lhjigk[_[30703]], lhjigk[_[30704]], -0x1);_dxyw_z[_[30400]]({ 'cpbill': lhjigk[_[30704]], 'productid': lhjigk[_[30703]], 'productname': ifehjg[_[30705]], 'productdesc': ifehjg[_[30706]], 'serverid': p$DE[_[26468]][_[12260]], 'servername': p$DE[_[26468]][_[30678]], 'roleid': ifehjg[_[30707]], 'rolename': ifehjg[_[30708]], 'rolelevel': ifehjg[_[30709]], 'price': ifehjg[_[28253]], 'extension': JSON[_[5183]]({ 'cp_order_id': lhjigk[_[30704]] }) }, function (pqs, mojn) {
      ifehjg[_[813]] && pqs == 0x0 && ifehjg[_[813]](lhjigk[_[30703]], lhjigk[_[30704]], pqs);console[_[594]](JSON[_[5183]]({ 'type': _[30710], 'status': pqs, 'data': lhjigk, 'role_name': ifehjg[_[30708]] }));if (pqs === 0x0) {} else {
        if (pqs === 0x1) {} else {
          if (pqs === 0x2) {}
        }
      }
    });
  } else {
    var lkhmj = lhjigk ? _[30711] + lhjigk[_[30702]] + _[30712] + lhjigk[_[1697]] + _[30713] + lhjigk[_[594]] : _[30714];window[_[30596]](0xd, _[30715] + lkhmj), alert(lkhmj);
  }
}, window['p$CEDB'] = function () {}, window['p$BCE'] = function (ge, nkiljm, rpqonm, xz_w$, w$z_xy) {
  _dxyw_z[_[30446]](p$DE[_[26468]][_[12260]], p$DE[_[26468]][_[30678]] || p$DE[_[26468]][_[12260]], ge, nkiljm, rpqonm), sendApi(p$DE[_[30563]], _[30716], { 'game_pkg': p$DE[_[26474]], 'server_id': p$DE[_[26468]][_[12260]], 'role_id': ge, 'uid': p$DE[_[26473]], 'role_name': nkiljm, 'role_type': xz_w$, 'level': rpqonm });
}, window['p$BEC'] = function (hgifed, urq, hgfkji, jklnim, ihe, hdgf, gjfh, ronqp, wruvt, lpqmn) {
  p$DE[_[30461]] = hgifed, p$DE[_[5317]] = urq, p$DE[_[30462]] = hgfkji, _dxyw_z[_[30447]](p$DE[_[26468]][_[12260]], p$DE[_[26468]][_[30678]] || p$DE[_[26468]][_[12260]], hgifed, urq, hgfkji), sendApi(p$DE[_[30563]], _[30717], { 'game_pkg': p$DE[_[26474]], 'server_id': p$DE[_[26468]][_[12260]], 'role_id': hgifed, 'uid': p$DE[_[26473]], 'role_name': urq, 'role_type': jklnim, 'level': hgfkji, 'evolution': ihe });
}, window['p$CBE'] = function (_1z02$, ifegj, abdec, qonpr, _z$yxw, yvuzw, w$x_z, $_z10, kljigh, $3_2) {
  p$DE[_[30461]] = _1z02$, p$DE[_[5317]] = ifegj, p$DE[_[30462]] = abdec, _dxyw_z[_[30448]](p$DE[_[26468]][_[12260]], p$DE[_[26468]][_[30678]] || p$DE[_[26468]][_[12260]], _1z02$, ifegj, abdec), sendApi(p$DE[_[30563]], _[30717], { 'game_pkg': p$DE[_[26474]], 'server_id': p$DE[_[26468]][_[12260]], 'role_id': _1z02$, 'uid': p$DE[_[26473]], 'role_name': ifegj, 'role_type': qonpr, 'level': abdec, 'evolution': _z$yxw });
}, window['p$CEB'] = function ($vyx) {}, window['p$BC'] = function (uv) {
  _dxyw_z[_[30379]](_[30379], function (hjkiml) {
    uv && uv(hjkiml);
  });
}, window[_[24777]] = function () {
  _dxyw_z[_[24777]]();
}, window[_[30718]] = function () {
  _dxyw_z[_[24667]]();
}, window[_[30719]] = function (gijefh, utxy, higfj, zvywux, snpqor, xzvy, z$xy_0, ihjk) {
  ihjk = ihjk || p$DE[_[26468]][_[12260]], sendApi(p$DE[_[30563]], _[30720], { 'phone': gijefh, 'role_id': utxy, 'uid': p$DE[_[26473]], 'game_pkg': p$DE[_[26474]], 'partner_id': p$DE[_[24779]], 'server_id': ihjk }, z$xy_0, 0x2, null, function () {
    return !![];
  });
}, window[_[11588]] = function (qormnp) {
  window['p$EBC'] = qormnp, window['p$EBC'] && window['p$CB'] && (console[_[594]](_[30545] + window['p$CB'][_[1270]]), window['p$EBC'](window['p$CB']), window['p$CB'] = null);
}, window['p$ECB'] = function (srqpot, xvwu, xzv$yw, knlmp) {
  window[_[544]](_[30721], { 'game_pkg': window['p$DE'][_[26474]], 'role_id': xvwu, 'server_id': xzv$yw }, knlmp);
}, window['p$DBCE'] = function (rqom, xvstuw, zv$yw) {
  function mnkpo(vutxwy) {
    var ikfg = [],
        ruspqt = [],
        y_z01$ = zv$yw || window[_[1032]][_[30722]];for (var mkjihl in y_z01$) {
      var mopqrn = Number(mkjihl);(!rqom || !rqom[_[19]] || rqom[_[102]](mopqrn) != -0x1) && (ruspqt[_[41]](y_z01$[mkjihl]), ikfg[_[41]]([mopqrn, 0x3]));
    }window['p$ACEBD'](window[_[30472]], _[30723]) >= 0x0 ? (console[_[156]](_[30724]), _dxyw_z[_[30443]](ruspqt, function (xz0_$y) {
      console[_[156]](_[30725]), console[_[156]](xz0_$y);if (xz0_$y && xz0_$y[_[26668]] == _[30726]) for (var vqstur in y_z01$) {
        if (xz0_$y[y_z01$[vqstur]] == _[30727]) {
          var dfaecb = Number(vqstur);for (var uyxzvw = 0x0; uyxzvw < ikfg[_[19]]; uyxzvw++) {
            if (ikfg[uyxzvw][0x0] == dfaecb) {
              ikfg[uyxzvw][0x1] = 0x1;break;
            }
          }
        }
      }window['p$ACEBD'](window[_[30472]], _[30728]) >= 0x0 ? wx[_[30729]]({ 'withSubscriptions': !![], 'success': function (norqm) {
          var dfbgec = norqm[_[30452]][_[30730]];if (dfbgec) {
            console[_[156]](_[30731]), console[_[156]](dfbgec);for (var fdgec in y_z01$) {
              if (dfbgec[y_z01$[fdgec]] == _[30727]) {
                var pmlkon = Number(fdgec);for (var lkihm = 0x0; lkihm < ikfg[_[19]]; lkihm++) {
                  if (ikfg[lkihm][0x0] == pmlkon) {
                    ikfg[lkihm][0x1] = 0x2;break;
                  }
                }
              }
            }console[_[156]](ikfg), xvstuw && xvstuw(ikfg);
          } else console[_[156]](_[30732]), console[_[156]](norqm), console[_[156]](ikfg), xvstuw && xvstuw(ikfg);
        }, 'fail': function () {
          console[_[156]](_[30733]), console[_[156]](ikfg), xvstuw && xvstuw(ikfg);
        } }) : (console[_[156]](_[30734] + window[_[30472]]), console[_[156]](ikfg), xvstuw && xvstuw(ikfg));
    })) : (console[_[156]](_[30735] + window[_[30472]]), console[_[156]](ikfg), xvstuw && xvstuw(ikfg)), wx[_[30736]](mnkpo);
  }wx[_[30685]](mnkpo);
}, window['p$DBEC'] = { 'isSuccess': ![], 'level': _[30737], 'isCharging': ![] }, window['p$DCBE'] = function ($zx0_y) {
  wx[_[30537]]({ 'success': function (nomj) {
      var zw$_yx = window['p$DBEC'];zw$_yx[_[30738]] = !![], zw$_yx[_[5294]] = Number(nomj[_[5294]])[_[4917]](0x0), zw$_yx[_[30540]] = nomj[_[30540]], $zx0_y && $zx0_y(zw$_yx[_[30738]], zw$_yx[_[5294]], zw$_yx[_[30540]]);
    }, 'fail': function (efdab) {
      console[_[156]](_[30739], efdab[_[26668]]);var kfijgh = window['p$DBEC'];$zx0_y && $zx0_y(kfijgh[_[30738]], kfijgh[_[5294]], kfijgh[_[30540]]);
    } });
}, window[_[12662]] = function (twuyx) {
  wx[_[12662]]({ 'success': function (egbc) {
      twuyx && twuyx(!![], egbc);
    }, 'fail': function (rwtsvu) {
      twuyx && twuyx(![], rwtsvu);
    } });
}, window[_[12664]] = function (npsroq) {
  if (npsroq) wx[_[12664]](npsroq);
}, window[_[26162]] = function (acbfd) {
  wx[_[26162]](acbfd);
}, window[_[544]] = function (pqo, svtwru, hgikf, eifgj, stopqr, _4230, vswru, uwtxvs) {
  if (eifgj == undefined) eifgj = 0x1;wx[_[956]]({ 'url': pqo, 'method': vswru || _[26357], 'responseType': _[5101], 'data': svtwru, 'header': { 'content-type': uwtxvs || _[30608] }, 'success': function (gjihfk) {
      DEBUG && console[_[156]](_[30740], pqo, info, gjihfk);if (gjihfk && gjihfk[_[26737]] == 0xc8) {
        var bdaef = gjihfk[_[201]];!_4230 || _4230(bdaef) ? hgikf && hgikf(bdaef) : window[_[30741]](pqo, svtwru, hgikf, eifgj, stopqr, _4230, gjihfk);
      } else window[_[30741]](pqo, svtwru, hgikf, eifgj, stopqr, _4230, gjihfk);
    }, 'fail': function (lnqpm) {
      DEBUG && console[_[156]](_[30742], pqo, info, lnqpm), window[_[30741]](pqo, svtwru, hgikf, eifgj, stopqr, _4230, lnqpm);
    }, 'complete': function () {} });
}, window[_[30741]] = function (efcdgb, $1y_0z, pqos, rvtsq, qnmo, mnolkp, pomnkl) {
  rvtsq - 0x1 > 0x0 ? setTimeout(function () {
    window[_[544]](efcdgb, $1y_0z, pqos, rvtsq - 0x1, qnmo, mnolkp);
  }, 0x3e8) : qnmo && qnmo(JSON[_[5183]]({ 'url': efcdgb, 'response': pomnkl }));
}, window[_[30743]] = function (qronm, inmk, plqomn, mniljk, wuxvy, olpnk, mjkilh) {
  !plqomn && (plqomn = {});var mnkpl = Math[_[46]](Date[_[599]]() / 0x3e8);plqomn[_[1344]] = mnkpl, plqomn[_[30744]] = inmk;var fdgcbe = Object[_[18]](plqomn)[_[211]](),
      ilkhg = '',
      tqru = '';for (var nlki = 0x0; nlki < fdgcbe[_[19]]; nlki++) {
    ilkhg = ilkhg + (nlki == 0x0 ? '' : '&') + fdgcbe[nlki] + plqomn[fdgcbe[nlki]], tqru = tqru + (nlki == 0x0 ? '' : '&') + fdgcbe[nlki] + '=' + encodeURIComponent(plqomn[fdgcbe[nlki]]);
  }ilkhg = ilkhg + p$DE[_[30569]];var uytwvx = _[30745] + md5(ilkhg);send(qronm + '?' + tqru + (tqru == '' ? '' : '&') + uytwvx, null, mniljk, wuxvy, olpnk, mjkilh || function (ihlmkj) {
    return ihlmkj[_[1697]] == _[10633];
  }, null, _[30311]);
}, window['p$DCEB'] = function (qpsonr, iefdgh) {
  var tuy = 0x0;p$DE[_[26468]] && (tuy = p$DE[_[26468]][_[12260]]), sendApi(p$DE[_[30565]], _[30746], { 'partnerId': p$DE[_[24779]], 'gamePkg': p$DE[_[26474]], 'logTime': Math[_[46]](Date[_[599]]() / 0x3e8), 'platformUid': p$DE[_[26475]], 'type': qpsonr, 'serverId': tuy }, null, 0x2, null, function () {
    return !![];
  });
}, window['p$DEBC'] = function (jnkoml) {
  sendApi(p$DE[_[30563]], _[30747], { 'partner_id': p$DE[_[24779]], 'uid': p$DE[_[26473]], 'version': p$DE[_[5388]], 'game_pkg': p$DE[_[26474]], 'device': p$DE[_[26476]] }, p$DECB, p$CED, p$EB);
}, window['p$DECB'] = function (wzuyvx) {
  if (wzuyvx && wzuyvx[_[1697]] === _[10633] && wzuyvx[_[201]]) {
    wzuyvx[_[201]][_[125]]({ 'id': -0x2, 'name': _[30748] }), wzuyvx[_[201]][_[125]]({ 'id': -0x1, 'name': _[30749] }), p$DE[_[30750]] = wzuyvx[_[201]];if (window[_[13143]]) window[_[13143]][_[30751]]();
  } else {
    p$DE[_[30752]] = ![];var z$yx0_ = wzuyvx ? wzuyvx[_[1697]] : '';window[_[30596]](0x7, _[30753] + z$yx0_), window['p$BCDE'](_[30754] + z$yx0_);
  }
}, window['p$BCD'] = function (fdeacb) {
  sendApi(p$DE[_[30563]], _[30755], { 'partner_id': p$DE[_[24779]], 'uid': p$DE[_[26473]], 'version': p$DE[_[5388]], 'game_pkg': p$DE[_[26474]], 'device': p$DE[_[26476]] }, p$BDC, p$CED, p$EB);
}, window['p$BDC'] = function (iljh) {
  p$DE[_[30756]] = ![];if (iljh && iljh[_[1697]] === _[10633] && iljh[_[201]]) {
    for (var uxywv = 0x0; uxywv < iljh[_[201]][_[19]]; uxywv++) {
      iljh[_[201]][uxywv][_[616]] = p$DCB(iljh[_[201]][uxywv]);
    }p$DE[_[30572]][-0x1] = window[_[30757]](iljh[_[201]]), window[_[13143]][_[30758]](-0x1);
  } else {
    var hedcf = iljh ? iljh[_[1697]] : '';window[_[30596]](0x8, _[30759] + hedcf), window['p$BCDE'](_[30760] + hedcf);
  }
}, window[_[30761]] = function ($z_20) {
  sendApi(p$DE[_[30563]], _[30755], { 'partner_id': p$DE[_[24779]], 'uid': p$DE[_[26473]], 'version': p$DE[_[5388]], 'game_pkg': p$DE[_[26474]], 'device': p$DE[_[26476]] }, $z_20, p$CED, p$EB);
}, window['p$CBD'] = function (w$_zx, opkml) {
  sendApi(p$DE[_[30563]], _[30762], { 'partner_id': p$DE[_[24779]], 'uid': p$DE[_[26473]], 'version': p$DE[_[5388]], 'game_pkg': p$DE[_[26474]], 'device': p$DE[_[26476]], 'server_group_id': opkml }, p$CDB, p$CED, p$EB);
}, window['p$CDB'] = function (wyvz) {
  p$DE[_[30756]] = ![];if (wyvz && wyvz[_[1697]] === _[10633] && wyvz[_[201]] && wyvz[_[201]][_[201]]) {
    var yzwvx = wyvz[_[201]][_[30763]],
        ihjmk = [];for (var bface = 0x0; bface < wyvz[_[201]][_[201]][_[19]]; bface++) {
      wyvz[_[201]][_[201]][bface][_[616]] = p$DCB(wyvz[_[201]][_[201]][bface]), (ihjmk[_[19]] == 0x0 || wyvz[_[201]][_[201]][bface][_[616]] != 0x0) && (ihjmk[ihjmk[_[19]]] = wyvz[_[201]][_[201]][bface]);
    }p$DE[_[30572]][yzwvx] = window[_[30757]](ihjmk), window[_[13143]][_[30758]](yzwvx);
  } else {
    var vuyxt = wyvz ? wyvz[_[1697]] : '';window[_[30596]](0x9, _[30764] + vuyxt), window['p$BCDE'](_[30765] + vuyxt);
  }
}, window['p$ACED'] = function (klpomn) {
  sendApi(p$DE[_[30563]], _[30766], { 'partner_id': p$DE[_[24779]], 'uid': p$DE[_[26473]], 'version': p$DE[_[5388]], 'game_pkg': p$DE[_[26474]], 'device': p$DE[_[26476]] }, reqServerRecommendCallBack, p$CED, p$EB);
}, window[_[30767]] = function (dfgecb) {
  p$DE[_[30756]] = ![];if (dfgecb && dfgecb[_[1697]] === _[10633] && dfgecb[_[201]]) {
    for (var ruwvs = 0x0; ruwvs < dfgecb[_[201]][_[19]]; ruwvs++) {
      dfgecb[_[201]][ruwvs][_[616]] = p$DCB(dfgecb[_[201]][ruwvs]);
    }p$DE[_[30572]][-0x2] = window[_[30757]](dfgecb[_[201]]), window[_[13143]][_[30758]](-0x2);
  } else {
    var sv = dfgecb ? dfgecb[_[1697]] : '';window[_[30596]](0xa, _[30768] + sv), alert(_[30769] + sv);
  }
}, window[_[30757]] = function (dgehcf) {
  return dgehcf;
}, window['p$DBC'] = function (sqtup, jhigf) {
  sqtup = sqtup || p$DE[_[26468]][_[12260]], sendApi(p$DE[_[30563]], _[30770], { 'type': '4', 'game_pkg': p$DE[_[26474]], 'server_id': sqtup }, jhigf);
}, window[_[30771]] = function (gdcbef, uwyxv, xutsw, yzw_$x) {
  xutsw = xutsw || p$DE[_[26468]][_[12260]], sendApi(p$DE[_[30563]], _[30772], { 'type': gdcbef, 'game_pkg': uwyxv, 'server_id': xutsw }, yzw_$x);
}, window[_[30773]] = function (trsvuq, dgchfe) {
  sendApi(p$DE[_[30563]], _[30774], { 'game_pkg': trsvuq }, dgchfe);
}, window['p$DCB'] = function (wyu) {
  if (wyu) {
    if (wyu[_[616]] == 0x1) {
      if (wyu[_[30775]] == 0x1) return 0x2;else return 0x1;
    } else return wyu[_[616]] == 0x0 ? 0x0 : -0x1;
  }return -0x1;
}, window['p$EBCD'] = function (lomkj, beadcf) {
  p$DE[_[30776]] = { 'step': lomkj, 'server_id': beadcf };var vxtyw = this;p$BDCE({ 'title': _[30777] }), sendApi(p$DE[_[30563]], _[30778], { 'partner_id': p$DE[_[24779]], 'uid': p$DE[_[26473]], 'game_pkg': p$DE[_[26474]], 'server_id': beadcf, 'platform': p$DE[_[26438]], 'platform_uid': p$DE[_[26475]], 'check_login_time': p$DE[_[30655]], 'check_login_sign': p$DE[_[30654]], 'version_name': p$DE[_[30628]] }, p$EBDC, p$CED, p$EB, function (tvsruw) {
    return tvsruw[_[1697]] == _[10633] || tvsruw[_[594]] == _[30779] || tvsruw[_[594]] == _[30780];
  });
}, window['p$EBDC'] = function (trqvus) {
  var wuxtv = this;if (trqvus && trqvus[_[1697]] === _[10633] && trqvus[_[201]]) {
    var onjklm = p$DE[_[26468]];onjklm[_[30781]] = p$DE[_[30573]], onjklm[_[12243]] = String(trqvus[_[201]][_[30782]]), onjklm[_[26440]] = parseInt(trqvus[_[201]][_[1344]]);if (trqvus[_[201]][_[26439]]) onjklm[_[26439]] = parseInt(trqvus[_[201]][_[26439]]);else onjklm[_[26439]] = parseInt(trqvus[_[201]][_[12260]]);onjklm[_[30783]] = 0x0, onjklm[_[5197]] = p$DE[_[30693]], onjklm[_[30784]] = trqvus[_[201]][_[30785]], onjklm[_[30786]] = trqvus[_[201]][_[30786]];if (trqvus[_[201]][_[26443]]) onjklm[_[26443]] = parseInt(trqvus[_[201]][_[26443]]);console[_[156]](_[30787] + JSON[_[5183]](onjklm[_[30786]])), p$DE[_[1120]] == 0x1 && onjklm[_[30786]] && onjklm[_[30786]][_[30788]] == 0x1 && (p$DE[_[30789]] = 0x1, window[_[30471]][_[648]]['p$AED']()), p$ECBD();
  } else {
    if (p$DE[_[30776]][_[7833]] >= 0x3) {
      var nqmp = trqvus ? trqvus[_[1697]] : '';window[_[30596]](0xc, _[30790] + nqmp), p$EB(JSON[_[5183]](trqvus)), window['p$BCDE'](_[30791] + nqmp);
    } else sendApi(p$DE[_[30563]], _[30636], { 'platform': p$DE[_[30561]], 'partner_id': p$DE[_[24779]], 'token': p$DE[_[30634]], 'game_pkg': p$DE[_[26474]], 'deviceId': p$DE[_[26476]], 'scene': _[30637] + p$DE[_[30571]] }, function (xtvyuw) {
      if (!xtvyuw || xtvyuw[_[1697]] != _[10633]) {
        window['p$BCDE'](_[30653] + xtvyuw && xtvyuw[_[1697]]);return;
      }p$DE[_[30654]] = String(xtvyuw[_[12243]]), p$DE[_[30655]] = String(xtvyuw[_[1344]]), setTimeout(function () {
        p$EBCD(p$DE[_[30776]][_[7833]] + 0x1, p$DE[_[30776]][_[12260]]);
      }, 0x5dc);
    }, p$CED, p$EB, function (igfj) {
      return igfj[_[1697]] == _[10633] || igfj[_[1697]] == _[26814];
    });
  }
}, window['p$ECBD'] = function () {
  ServerLoading[_[648]][_[30684]](p$DE[_[1120]]), window['p$CE'] = !![], window['p$EDBC']();
}, window['p$ECDB'] = function () {
  if (window['p$EC'] && window['p$DCE'] && window[_[30579]] && window[_[30580]] && window['p$DEC'] && window['p$DC']) {
    if (window[_[30305]] && !window[_[30305]][_[648]]) {
      console[_[156]](_[30792] + window[_[30305]][_[648]]);var decab = wx[_[30793]](),
          igjehf = decab[_[1270]] ? decab[_[1270]] : 0x0,
          ilhgjk = { 'cdn': window['p$DE'][_[5197]], 'spareCdn': window['p$DE'][_[26167]], 'newRegister': window['p$DE'][_[1120]], 'wxPC': window['p$DE'][_[26169]], 'wxIOS': window['p$DE'][_[1564]], 'wxAndroid': window['p$DE'][_[12082]], 'wxParam': { 'limitLoad': window['p$DE']['p$ABCED'], 'benchmarkLevel': window['p$DE']['p$ABDCE'], 'wxFrom': window[_[1032]][_[33]] == _[30794] ? 0x1 : 0x0, 'wxSDKVersion': window[_[30472]] }, 'configType': window['p$DE'][_[12692]], 'exposeType': window['p$DE'][_[1208]], 'scene': igjehf };new window[_[30305]](ilhgjk, window['p$DE'][_[612]], window['p$ABCDE']);
    }
  }
}, window['p$EDBC'] = function () {
  if (window['p$EC'] && window['p$DCE'] && window[_[30579]] && window[_[30580]] && window['p$DEC'] && window['p$DC'] && window['p$CE'] && window['p$CD']) {
    p$BDEC();if (!p$ECD) {
      p$ECD = !![];if (!window[_[30305]][_[648]]) window['p$ECDB']();var iknjm = 0x0,
          yzux = wx[_[30795]]();yzux && (window['p$DE'][_[30527]] && (iknjm = yzux[_[802]]), console[_[594]](_[30796] + yzux[_[802]] + _[30797] + yzux[_[1717]] + _[30798] + yzux[_[1719]] + _[30799] + yzux[_[1718]] + _[30800] + yzux[_[677]] + _[30801] + yzux[_[678]]));var tusr = {};for (const jlmnok in p$DE[_[26468]]) {
        tusr[jlmnok] = p$DE[_[26468]][jlmnok];
      }var vqut = { 'channel': window['p$DE'][_[26472]], 'account': window['p$DE'][_[26473]], 'userId': window['p$DE'][_[19940]], 'cdn': window['p$DE'][_[5197]], 'data': window['p$DE'][_[201]], 'package': window['p$DE'][_[192]], 'newRegister': window['p$DE'][_[1120]], 'pkgName': window['p$DE'][_[26474]], 'partnerId': window['p$DE'][_[24779]], 'platform_uid': window['p$DE'][_[26475]], 'deviceId': window['p$DE'][_[26476]], 'selectedServer': tusr, 'configType': window['p$DE'][_[12692]], 'exposeType': window['p$DE'][_[1208]], 'debugUsers': window['p$DE'][_[13092]], 'wxMenuTop': iknjm, 'wxShield': window['p$DE'][_[1232]] };if (window[_[30695]]) for (var srtuvw in window[_[30695]]) {
        vqut[srtuvw] = window[_[30695]][srtuvw];
      }window[_[30305]][_[648]]['p$EDA'](vqut);if (p$DE[_[26468]] && p$DE[_[26468]][_[12260]]) localStorage[_[963]](_[30657] + p$DE[_[26474]] + p$DE[_[26473]], p$DE[_[26468]][_[12260]]);
    }
  } else console[_[594]](_[30802] + window['p$EC'] + _[30803] + window['p$DCE'] + _[30804] + window[_[30579]] + _[30805] + window[_[30580]] + _[30806] + window['p$DEC'] + _[30807] + window['p$DC'] + _[30808] + window['p$CE'] + _[30809] + window['p$CD']);
}, window[_[30451]] = function () {
  window['p$ACEBD'](window[_[30472]], _[30810]) >= 0x0 && _dxyw_z[_[30451]](null, oqpnrm => {
    console[_[156]](_[30811], oqpnrm);
  }), wx[_[30736]](window[_[30451]]);
};