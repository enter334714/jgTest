var _ = wx.y$;
import _duwyz from '../bbbk/bbbsdk.js';window[_[31446]] = { 'wxVersion': window[_[562]][_[31347]] }, window[_[31447]] = ![], window['p$ED'] = 0x1, window[_[31448]] = 0x1, window['p$CDE'] = !![], window[_[31449]] = !![], window['p$ABCDE'] = '', window[_[31450]] = ![], window['p$DE'] = { 'base_cdn': _[31451], 'cdn': _[31451] }, p$DE[_[31452]] = {}, p$DE[_[26325]] = '0', p$DE[_[5014]] = window[_[31446]][_[31453]], p$DE[_[31421]] = '', p$DE['os'] = '1', p$DE[_[31454]] = _[31455], p$DE[_[31456]] = _[31457], p$DE[_[31458]] = _[31459], p$DE[_[31460]] = _[31461], p$DE[_[31462]] = _[31463], p$DE[_[24735]] = '1', p$DE[_[26637]] = '', p$DE[_[26639]] = '', p$DE[_[31464]] = 0x0, p$DE[_[31465]] = {}, p$DE[_[31466]] = parseInt(p$DE[_[24735]]), p$DE[_[26635]] = p$DE[_[24735]], p$DE[_[26631]] = {}, p$DE['p$BD'] = _[31467], p$DE[_[31468]] = ![], p$DE[_[12922]] = _[31469], p$DE[_[26603]] = Date[_[83]](), p$DE[_[12514]] = _[31470], p$DE[_[752]] = '_a', p$DE[_[31471]] = 0x2, p$DE[_[101]] = 0x7c1, p$DE[_[31453]] = window[_[31446]][_[31453]], p$DE[_[776]] = ![], p$DE[_[1113]] = ![], p$DE[_[11837]] = ![], p$DE[_[26327]] = ![], window['p$CED'] = 0x5, window['p$CE'] = ![], window['p$EC'] = ![], window['p$DCE'] = ![], window[_[31472]] = ![], window[_[31473]] = ![], window['p$DEC'] = ![], window['p$CD'] = ![], window['p$DC'] = ![], window['p$ECD'] = ![], window[_[31474]] = null, window[_[654]] = function (nqmpl) {
  console[_[487]](_[654], nqmpl), wx[_[5295]]({}), wx[_[31371]]({ 'title': _[6418], 'content': nqmpl, 'success'(qnlomp) {
      if (qnlomp[_[31475]]) console[_[487]](_[31476]);else qnlomp[_[558]] && console[_[487]](_[31477]);
    } });
}, window['p$BCDE'] = function (trpqs) {
  console[_[487]](_[31478], trpqs), p$BDEC(), wx[_[31371]]({ 'title': _[6418], 'content': trpqs, 'confirmText': _[31479], 'cancelText': _[19473], 'success'(rwvuts) {
      if (rwvuts[_[31475]]) window['p$DB']();else rwvuts[_[558]] && (console[_[487]](_[31480]), wx[_[26323]]({}));
    } });
}, window[_[31481]] = function ($01yz) {
  console[_[487]](_[31481], $01yz), wx[_[31371]]({ 'title': _[6418], 'content': $01yz, 'confirmText': _[26766], 'showCancel': ![], 'complete'(hkgilj) {
      console[_[487]](_[31480]), wx[_[26323]]({});
    } });
}, window['p$BCED'] = ![], window['p$BDCE'] = function (qnrmo) {
  window['p$BCED'] = !![], wx[_[5294]](qnrmo);
}, window['p$BDEC'] = function () {
  window['p$BCED'] && (window['p$BCED'] = ![], wx[_[5295]]({}));
}, window['p$BECD'] = function (rwust) {
  window[_[31362]][_[148]]['p$BECD'](rwust);
}, window[_[12792]] = function (fkigjh, _0y1) {
  _duwyz[_[12792]](fkigjh, function (qput) {
    qput && qput[_[11]] ? qput[_[11]][_[1245]] == 0x1 ? _0y1(!![]) : (_0y1(![]), console[_[78]](_[31482] + qput[_[11]][_[31483]])) : console[_[487]](_[12792], qput);
  });
}, window['p$BEDC'] = function (yxz$w_) {
  console[_[487]](_[31484], yxz$w_);
}, window['p$BDE'] = function (twvxyu) {}, window['p$BED'] = function (z2_1$, uxvty, jhkg) {}, window['p$BE'] = function (efgbc) {
  console[_[487]](_[31485], efgbc), window[_[31362]][_[148]][_[31486]](), window[_[31362]][_[148]][_[31487]](), window[_[31362]][_[148]][_[31488]]();
}, window['p$EB'] = function (yx_zw) {
  window[_[31489]](0xe, _[31490] + yx_zw), window['p$BCDE'](_[31491]);var osptrq = { 'id': window['p$DE'][_[31352]], 'role': window['p$DE'][_[4943]], 'level': window['p$DE'][_[31353]], 'account': window['p$DE'][_[26636]], 'version': window['p$DE'][_[101]], 'cdn': window['p$DE'][_[4819]], 'pkgName': window['p$DE'][_[26637]], 'gamever': window[_[562]][_[31347]], 'serverid': window['p$DE'][_[26631]] ? window['p$DE'][_[26631]][_[12013]] : 0x0, 'systemInfo': window[_[31354]], 'error': _[31492], 'stack': yx_zw ? yx_zw : _[31491] },
      lokj = JSON[_[4805]](osptrq);console[_[125]](_[31493] + lokj), window['p$BD'](lokj);
}, window[_[31489]] = function (kjhiml, $w) {
  sendApi(p$DE[_[31458]], _[31494], { 'game_pkg': p$DE[_[26637]], 'partner_id': p$DE[_[24735]], 'server_id': p$DE[_[26631]] && p$DE[_[26631]][_[12013]] > 0x0 ? p$DE[_[26631]][_[12013]] : 0x0, 'uid': p$DE[_[26636]] > 0x0 ? p$DE[_[26636]] : 0x0, 'type': kjhiml, 'info': $w });
}, window['p$DBE'] = function (fghei) {
  var wtxuvy = JSON[_[530]](fghei);wtxuvy[_[31495]] = window[_[562]][_[31347]], wtxuvy[_[31496]] = window['p$DE'][_[26631]] ? window['p$DE'][_[26631]][_[12013]] : 0x0, wtxuvy[_[31354]] = window[_[31354]];var zx$w = JSON[_[4805]](wtxuvy);console[_[125]](_[31497] + zx$w), window['p$BD'](zx$w);
}, window['p$DEB'] = function (_0z21, lqpnmo) {
  var dhce = { 'id': window['p$DE'][_[31352]], 'role': window['p$DE'][_[4943]], 'level': window['p$DE'][_[31353]], 'account': window['p$DE'][_[26636]], 'version': window['p$DE'][_[101]], 'cdn': window['p$DE'][_[4819]], 'pkgName': window['p$DE'][_[26637]], 'gamever': window[_[562]][_[31347]], 'serverid': window['p$DE'][_[26631]] ? window['p$DE'][_[26631]][_[12013]] : 0x0, 'systemInfo': window[_[31354]], 'error': _0z21, 'stack': lqpnmo },
      abfdce = JSON[_[4805]](dhce);console[_[96]](_[31498] + abfdce), window['p$BD'](abfdce);
}, window['p$BD'] = function (topsr) {
  if (window['p$DE'][_[31422]] == _[31499]) return;var kjhg = p$DE['p$BD'] + _[31500] + p$DE[_[26636]];wx[_[482]]({ 'url': kjhg, 'method': _[31501], 'data': topsr, 'header': { 'content-type': _[31502], 'cache-control': _[31503] }, 'success': function (jhgikl) {
      DEBUG && console[_[487]](_[31504], kjhg, topsr, jhgikl);
    }, 'fail': function (mnplqo) {
      DEBUG && console[_[487]](_[31504], kjhg, topsr, mnplqo);
    }, 'complete': function () {} });
}, window[_[31505]] = function () {
  function jgfhi() {
    return ((0x1 + Math[_[119]]()) * 0x10000 | 0x0)[_[271]](0x10)[_[502]](0x1);
  }return jgfhi() + jgfhi() + '-' + jgfhi() + '-' + jgfhi() + '-' + jgfhi() + '+' + jgfhi() + jgfhi() + jgfhi();
}, window['p$DB'] = function () {
  console[_[487]](_[31506]);var _102 = _duwyz[_[31507]]();p$DE[_[26635]] = _102[_[31508]], p$DE[_[31466]] = _102[_[31508]], p$DE[_[24735]] = _102[_[31508]], p$DE[_[26637]] = _102[_[31509]];var uwrv = { 'game_ver': p$DE[_[5014]] };p$DE[_[26639]] = this[_[31505]](), p$BDCE({ 'title': _[31510] }), _duwyz[_[367]](uwrv, this['p$EBD'][_[74]](this));
};var wx_develop = ![];window['p$EBD'] = function (_0$213) {
  var dhfgi = _0$213[_[31511]];sdkInitRes = _0$213, wx_develop = dhfgi == 0x1, console[_[487]](_[31512] + dhfgi + _[31513] + (dhfgi == 0x1) + _[31514] + _0$213[_[31347]] + _[31515] + window[_[31446]][_[31453]] + _[31516] + _0$213[_[31517]]);if (!_0$213[_[31347]] || window['p$ACEBD'](window[_[31446]][_[31453]], _0$213[_[31347]]) < 0x0) console[_[487]](_[31518]), p$DE[_[31456]] = _[31519], p$DE[_[31458]] = _[31520], p$DE[_[31460]] = _[31521], p$DE[_[4819]] = _[31522], p$DE[_[26324]] = _[31523], p$DE[_[31517]] = _0$213[_[31517]], p$DE[_[776]] = ![];else window['p$ACEBD'](window[_[31446]][_[31453]], _0$213[_[31347]]) == 0x0 ? (console[_[487]](_[31524]), p$DE[_[31456]] = _[31457], p$DE[_[31458]] = _[31459], p$DE[_[31460]] = _[31461], p$DE[_[4819]] = _[31525], p$DE[_[26324]] = _[31523], p$DE[_[31517]] = _[31526], p$DE[_[776]] = !![]) : (console[_[487]](_[31527]), p$DE[_[31456]] = _[31457], p$DE[_[31458]] = _[31459], p$DE[_[31460]] = _[31461], p$DE[_[4819]] = _[31525], p$DE[_[26324]] = _[31523], p$DE[_[31517]] = _[31526], p$DE[_[776]] = ![]);p$DE[_[31464]] = config[_[30773]] ? config[_[30773]] : 0x0, this['p$CDBE'](), this['p$CDEB'](), window[_[31528]] = 0x5, p$BDCE({ 'title': _[31529] }), _duwyz[_[31530]](this['p$EDB'][_[74]](this));
}, window[_[31528]] = 0x5, window['p$EDB'] = function (utvx, vwzxy) {
  if (utvx == 0x0 && vwzxy && vwzxy[_[30866]]) {
    p$DE[_[31531]] = vwzxy[_[30866]];var $zxwyv = this;p$BDCE({ 'title': _[31532] }), sendApi(p$DE[_[31456]], _[31533], { 'platform': p$DE[_[31454]], 'partner_id': p$DE[_[24735]], 'token': vwzxy[_[30866]], 'game_pkg': p$DE[_[26637]], 'deviceId': p$DE[_[26639]], 'scene': _[31534] + p$DE[_[31464]] }, this['p$CBDE'][_[74]](this), p$CED, p$EB);
  } else vwzxy && vwzxy[_[26830]] && window[_[31528]] > 0x0 && (vwzxy[_[26830]][_[115]](_[31535]) != -0x1 || vwzxy[_[26830]][_[115]](_[31536]) != -0x1 || vwzxy[_[26830]][_[115]](_[31537]) != -0x1 || vwzxy[_[26830]][_[115]](_[31538]) != -0x1 || vwzxy[_[26830]][_[115]](_[31539]) != -0x1 || vwzxy[_[26830]][_[115]](_[31540]) != -0x1) ? (window[_[31528]]--, _duwyz[_[31530]](this['p$EDB'][_[74]](this))) : (window[_[31489]](0x1, _[31541] + utvx + _[31542] + (vwzxy ? vwzxy[_[26830]] : '')), window['p$DEB'](_[31543], JSON[_[4805]]({ 'status': utvx, 'data': vwzxy })), window['p$BCDE'](_[31544] + (vwzxy && vwzxy[_[26830]] ? '，' + vwzxy[_[26830]] : '')));
}, window['p$CBDE'] = function (mnkojl) {
  if (!mnkojl) {
    window[_[31489]](0x2, _[31545]), window['p$DEB'](_[31546], _[31547]), window['p$BCDE'](_[31548]);return;
  }if (mnkojl[_[1245]] != _[10348]) {
    window[_[31489]](0x2, _[31549] + mnkojl[_[1245]]), window['p$DEB'](_[31546], JSON[_[4805]](mnkojl)), window['p$BCDE'](_[31550] + mnkojl[_[1245]]);return;
  }p$DE[_[19851]] = String(mnkojl[_[26636]]), p$DE[_[26636]] = String(mnkojl[_[26636]]), p$DE[_[26601]] = String(mnkojl[_[26601]]), p$DE[_[26635]] = String(mnkojl[_[26601]]), p$DE[_[26638]] = String(mnkojl[_[26638]]), p$DE[_[31551]] = String(mnkojl[_[11996]]), p$DE[_[31552]] = String(mnkojl[_[889]]), p$DE[_[11996]] = '';var z_01y$ = this;p$BDCE({ 'title': _[31553] });var sonqr = localStorage[_[485]](_[31554] + p$DE[_[26637]] + p$DE[_[26636]]);if (sonqr && sonqr != '') {
    var mkolnp = Number(sonqr);z_01y$[_[31555]](mkolnp);
  } else z_01y$[_[31556]]();
}, window[_[31556]] = function () {
  var dgfbec = this;sendApi(p$DE[_[31456]], _[31557], { 'partner_id': p$DE[_[24735]], 'uid': p$DE[_[26636]], 'version': p$DE[_[5014]], 'game_pkg': p$DE[_[26637]], 'device': p$DE[_[26639]] }, dgfbec['p$CBED'][_[74]](dgfbec), p$CED, p$EB);
}, window['p$CBED'] = function (nljok) {
  if (!nljok) {
    window[_[31489]](0x3, _[31558]), window['p$BCDE'](_[31558]);return;
  }if (nljok[_[1245]] != _[10348]) {
    window[_[31489]](0x3, _[31559] + nljok[_[1245]]), window['p$BCDE'](_[31559] + nljok[_[1245]]);return;
  }if (!nljok[_[11]] || nljok[_[11]][_[13]] == 0x0) {
    window[_[31489]](0x3, _[31560]), window['p$BCDE'](_[31561]);return;
  }this[_[31562]](nljok);
}, window[_[31555]] = function (kglhji) {
  var vyzx$ = this;sendApi(p$DE[_[31456]], _[31563], { 'server_id': kglhji, 'time': Date[_[83]]() / 0x3e8 }, vyzx$[_[31564]][_[74]](vyzx$), p$CED, p$EB);
}, window[_[31564]] = function (xwsut) {
  if (!xwsut) {
    window[_[31489]](0x4, _[31565]), this[_[31556]]();return;
  }if (xwsut[_[1245]] != _[10348]) {
    window[_[31489]](0x4, _[31566] + xwsut[_[1245]]), this[_[31556]]();return;
  }if (!xwsut[_[11]] || xwsut[_[11]][_[13]] == 0x0) {
    window[_[31489]](0x4, _[31567]), this[_[31556]]();return;
  }this[_[31562]](xwsut), window[_[31362]] && window[_[31362]][_[148]][_[31568]] && window[_[31362]][_[148]][_[31568]](sdkInitRes[_[31569]], sdkInitRes[_[31570]], sdkInitRes[_[31571]], sdkInitRes[_[31572]], sdkInitRes[_[31573]]);
}, window[_[31562]] = function (truv) {
  p$DE[_[664]] = truv[_[31574]] != undefined ? truv[_[31574]] : 0x0, p$DE[_[26631]] = { 'server_id': String(truv[_[11]][0x0][_[12013]]), 'server_name': String(truv[_[11]][0x0][_[31575]]), 'entry_ip': truv[_[11]][0x0][_[26659]], 'entry_port': parseInt(truv[_[11]][0x0][_[26660]]), 'status': p$DCB(truv[_[11]][0x0]), 'start_time': truv[_[11]][0x0][_[31576]], 'maintain_time': truv[_[11]][0x0][_[31577]] ? truv[_[11]][0x0][_[31577]] : '', 'cdn': p$DE[_[4819]] }, this['p$EDCB']();
}, window['p$EDCB'] = function () {
  if (p$DE[_[664]] == 0x1) {
    var xvuytw = p$DE[_[26631]][_[106]];if (xvuytw === -0x1 || xvuytw === 0x0) {
      window[_[31489]](0xf, _[31578] + p$DE[_[26631]]['id'] + _[31579] + p$DE[_[26631]][_[106]]), window['p$BCDE'](xvuytw === -0x1 ? _[31580] : _[31581]);return;
    }p$EBCD(0x0, p$DE[_[26631]][_[12013]]), window[_[31362]][_[148]][_[31582]](p$DE[_[664]]);
  } else window[_[31362]][_[148]][_[31583]](), p$BDEC();window['p$DC'] = !![], window['p$ECDB'](), window['p$EDBC']();
}, window['p$CDBE'] = function () {
  sendApi(p$DE[_[31456]], _[31584], { 'game_pkg': p$DE[_[26637]], 'version_name': p$DE[_[31517]] }, this[_[31585]][_[74]](this), p$CED, p$EB);
}, window[_[31585]] = function (lmhijk) {
  if (!lmhijk) {
    window[_[31489]](0x5, _[31586]), window['p$BCDE'](_[31586]);return;
  }if (lmhijk[_[1245]] != _[10348]) {
    window[_[31489]](0x5, _[31587] + lmhijk[_[1245]]), window['p$BCDE'](_[31587] + lmhijk[_[1245]]);return;
  }if (!lmhijk[_[11]] || !lmhijk[_[11]][_[5014]]) {
    window[_[31489]](0x5, _[31588] + (lmhijk[_[11]] && lmhijk[_[11]][_[5014]])), window['p$BCDE'](_[31588] + (lmhijk[_[11]] && lmhijk[_[11]][_[5014]]));return;
  }lmhijk[_[11]][_[31589]] && lmhijk[_[11]][_[31589]][_[13]] > 0xa && (p$DE[_[31590]] = lmhijk[_[11]][_[31589]], p$DE[_[4819]] = lmhijk[_[11]][_[31589]]), lmhijk[_[11]][_[5014]] && (p$DE[_[101]] = lmhijk[_[11]][_[5014]]), console[_[78]](_[26772] + p$DE[_[101]] + _[31591] + p$DE[_[31517]]), window['p$DEC'] = !![], window['p$ECDB'](), window['p$EDBC']();
}, window[_[31592]], window['p$CDEB'] = function () {
  sendApi(p$DE[_[31456]], _[31593], { 'game_pkg': p$DE[_[26637]] }, this['p$CEBD'][_[74]](this), p$CED, p$EB);
}, window['p$CEBD'] = function (edhf) {
  if (edhf && edhf[_[1245]] === _[10348] && edhf[_[11]]) {
    window[_[31592]] = edhf[_[11]];for (var rqns in edhf[_[11]]) {
      p$DE[rqns] = edhf[_[11]][rqns];
    }
  } else window[_[31489]](0xb, _[31594]), console[_[78]](_[31595] + edhf[_[1245]]);window['p$CD'] = !![], window['p$EDBC']();
}, window[_[31596]] = function (wvxzy, txuyw, zx_w, _023$, monjl, xuvytw, vtuxyw, vrsuqt, hijm, quvsrt) {
  monjl = String(monjl);var fgehi = vtuxyw,
      vuxzwy = vrsuqt;p$DE[_[31452]][monjl] = { 'productid': monjl, 'productname': fgehi, 'productdesc': vuxzwy, 'roleid': wvxzy, 'rolename': txuyw, 'rolelevel': zx_w, 'price': xuvytw, 'callback': hijm }, sendApi(p$DE[_[31460]], _[31597], { 'game_pkg': p$DE[_[26637]], 'server_id': p$DE[_[26631]][_[12013]], 'server_name': p$DE[_[26631]][_[31575]], 'level': zx_w, 'uid': p$DE[_[26636]], 'role_id': wvxzy, 'role_name': txuyw, 'product_id': monjl, 'product_name': fgehi, 'product_desc': vuxzwy, 'money': xuvytw, 'partner_id': p$DE[_[24735]] }, toPayCallBack, p$CED, p$EB);
}, window[_[31598]] = function ($zywvx) {
  if ($zywvx && ($zywvx[_[31599]] === 0xc8 || $zywvx[_[1245]] == _[10348])) {
    var sruqvt = p$DE[_[31452]][String($zywvx[_[31600]])];if (sruqvt[_[334]]) sruqvt[_[334]]($zywvx[_[31600]], $zywvx[_[31601]], -0x1);_duwyz[_[31602]]({ 'cpbill': $zywvx[_[31601]], 'productid': $zywvx[_[31600]], 'productname': sruqvt[_[31603]], 'productdesc': sruqvt[_[31604]], 'serverid': p$DE[_[26631]][_[12013]], 'servername': p$DE[_[26631]][_[31575]], 'roleid': sruqvt[_[31605]], 'rolename': sruqvt[_[31606]], 'rolelevel': sruqvt[_[31607]], 'price': sruqvt[_[28432]], 'extension': JSON[_[4805]]({ 'cp_order_id': $zywvx[_[31601]] }) }, function (tuvr, glhikj) {
      sruqvt[_[334]] && tuvr == 0x0 && sruqvt[_[334]]($zywvx[_[31600]], $zywvx[_[31601]], tuvr);console[_[78]](JSON[_[4805]]({ 'type': _[31608], 'status': tuvr, 'data': $zywvx, 'role_name': sruqvt[_[31606]] }));if (tuvr === 0x0) {} else {
        if (tuvr === 0x1) {} else {
          if (tuvr === 0x2) {}
        }
      }
    });
  } else {
    var w$xvy = $zywvx ? _[31609] + $zywvx[_[31599]] + _[31610] + $zywvx[_[1245]] + _[31611] + $zywvx[_[78]] : _[31612];window[_[31489]](0xd, _[31613] + w$xvy), alert(w$xvy);
  }
}, window['p$CEDB'] = function () {}, window['p$BCE'] = function (gjhie, lqo, rpoq, lmjhik, x_z0) {
  _duwyz[_[31614]](p$DE[_[26631]][_[12013]], p$DE[_[26631]][_[31575]] || p$DE[_[26631]][_[12013]], gjhie, lqo, rpoq), sendApi(p$DE[_[31456]], _[31615], { 'game_pkg': p$DE[_[26637]], 'server_id': p$DE[_[26631]][_[12013]], 'role_id': gjhie, 'uid': p$DE[_[26636]], 'role_name': lqo, 'role_type': lmjhik, 'level': rpoq });
}, window['p$BEC'] = function (mnlqp, giefh, yv$zxw, nmojkl, cgedhf, hgfei, nkojml, wtyvu, $yx_z, srqp) {
  p$DE[_[31352]] = mnlqp, p$DE[_[4943]] = giefh, p$DE[_[31353]] = yv$zxw, _duwyz[_[31616]](p$DE[_[26631]][_[12013]], p$DE[_[26631]][_[31575]] || p$DE[_[26631]][_[12013]], mnlqp, giefh, yv$zxw), sendApi(p$DE[_[31456]], _[31617], { 'game_pkg': p$DE[_[26637]], 'server_id': p$DE[_[26631]][_[12013]], 'role_id': mnlqp, 'uid': p$DE[_[26636]], 'role_name': giefh, 'role_type': nmojkl, 'level': yv$zxw, 'evolution': cgedhf });
}, window['p$CBE'] = function (kilmjn, z$_xwy, onlkj, tyvw, xwts, _$zw, olpnq, khjml, svwu, _yzx$w) {
  p$DE[_[31352]] = kilmjn, p$DE[_[4943]] = z$_xwy, p$DE[_[31353]] = onlkj, _duwyz[_[31618]](p$DE[_[26631]][_[12013]], p$DE[_[26631]][_[31575]] || p$DE[_[26631]][_[12013]], kilmjn, z$_xwy, onlkj), sendApi(p$DE[_[31456]], _[31617], { 'game_pkg': p$DE[_[26637]], 'server_id': p$DE[_[26631]][_[12013]], 'role_id': kilmjn, 'uid': p$DE[_[26636]], 'role_name': z$_xwy, 'role_type': tyvw, 'level': onlkj, 'evolution': xwts });
}, window['p$CEB'] = function (_xy$z) {}, window['p$BC'] = function (molpq) {
  _duwyz[_[31619]](_[31619], function (jfgehi) {
    molpq && molpq(jfgehi);
  });
}, window[_[24733]] = function () {
  _duwyz[_[24733]]();
}, window[_[31620]] = function () {
  _duwyz[_[24623]]();
}, window[_[31621]] = function (urstw, ehgcd, z_xy$0, lpom, lkjmih, bdfgec, bgef, gbdef) {
  gbdef = gbdef || p$DE[_[26631]][_[12013]], sendApi(p$DE[_[31456]], _[31622], { 'phone': urstw, 'role_id': ehgcd, 'uid': p$DE[_[26636]], 'game_pkg': p$DE[_[26637]], 'partner_id': p$DE[_[24735]], 'server_id': gbdef }, bgef, 0x2, null, function () {
    return !![];
  });
}, window[_[11340]] = function (ihefg) {
  window['p$EBC'] = ihefg, window['p$EBC'] && window['p$CB'] && (console[_[78]](_[31438] + window['p$CB'][_[814]]), window['p$EBC'](window['p$CB']), window['p$CB'] = null);
}, window['p$ECB'] = function (qsrput, xz$0, uvtrsq, rpmn) {
  window[_[22]](_[31623], { 'game_pkg': window['p$DE'][_[26637]], 'role_id': xz$0, 'server_id': uvtrsq }, rpmn);
}, window['p$DBCE'] = function (yxz_$, moplnk, fihge) {
  function hgdif(dfcabe) {
    var nokpm = [],
        xvsw = [],
        kilnm = fihge || window[_[562]][_[31624]];for (var onsrp in kilnm) {
      var hkfgi = Number(onsrp);(!yxz_$ || !yxz_$[_[13]] || yxz_$[_[115]](hkfgi) != -0x1) && (xvsw[_[29]](kilnm[onsrp]), nokpm[_[29]]([hkfgi, 0x3]));
    }window['p$ACEBD'](window[_[31363]], _[31625]) >= 0x0 ? (console[_[487]](_[31626]), _duwyz[_[31627]] && _duwyz[_[31627]](xvsw, function (daefc) {
      console[_[487]](_[31628]), console[_[487]](daefc);if (daefc && daefc[_[26830]] == _[31629]) for (var hgfde in kilnm) {
        if (daefc[kilnm[hgfde]] == _[31630]) {
          var onmkpl = Number(hgfde);for (var qpmon = 0x0; qpmon < nokpm[_[13]]; qpmon++) {
            if (nokpm[qpmon][0x0] == onmkpl) {
              nokpm[qpmon][0x1] = 0x1;break;
            }
          }
        }
      }window['p$ACEBD'](window[_[31363]], _[31631]) >= 0x0 ? wx[_[31632]]({ 'withSubscriptions': !![], 'success': function (psotrq) {
          var adecfb = psotrq[_[31633]][_[31634]];if (adecfb) {
            console[_[487]](_[31635]), console[_[487]](adecfb);for (var $0x_ in kilnm) {
              if (adecfb[kilnm[$0x_]] == _[31630]) {
                var vsruqt = Number($0x_);for (var $xzyv = 0x0; $xzyv < nokpm[_[13]]; $xzyv++) {
                  if (nokpm[$xzyv][0x0] == vsruqt) {
                    nokpm[$xzyv][0x1] = 0x2;break;
                  }
                }
              }
            }console[_[487]](nokpm), moplnk && moplnk(nokpm);
          } else console[_[487]](_[31636]), console[_[487]](psotrq), console[_[487]](nokpm), moplnk && moplnk(nokpm);
        }, 'fail': function () {
          console[_[487]](_[31637]), console[_[487]](nokpm), moplnk && moplnk(nokpm);
        } }) : (console[_[487]](_[31638] + window[_[31363]]), console[_[487]](nokpm), moplnk && moplnk(nokpm));
    })) : (console[_[487]](_[31639] + window[_[31363]]), console[_[487]](nokpm), moplnk && moplnk(nokpm)), wx[_[31640]](hgdif);
  }wx[_[31641]](hgdif);
}, window['p$DBEC'] = { 'isSuccess': ![], 'level': _[31642], 'isCharging': ![] }, window['p$DCBE'] = function ($_xz0y) {
  wx[_[31430]]({ 'success': function (edcba) {
      var stuvw = window['p$DBEC'];stuvw[_[31643]] = !![], stuvw[_[4918]] = Number(edcba[_[4918]])[_[4538]](0x0), stuvw[_[31433]] = edcba[_[31433]], $_xz0y && $_xz0y(stuvw[_[31643]], stuvw[_[4918]], stuvw[_[31433]]);
    }, 'fail': function (rtsvw) {
      console[_[487]](_[31644], rtsvw[_[26830]]);var edghfc = window['p$DBEC'];$_xz0y && $_xz0y(edghfc[_[31643]], edghfc[_[4918]], edghfc[_[31433]]);
    } });
}, window[_[12395]] = function (lnmikj) {
  wx[_[12395]]({ 'success': function (mploqn) {
      lnmikj && lnmikj(!![], mploqn);
    }, 'fail': function (ptqosr) {
      lnmikj && lnmikj(![], ptqosr);
    } });
}, window[_[12397]] = function (upsqtr) {
  if (upsqtr) wx[_[12397]](upsqtr);
}, window[_[26319]] = function (pmnql) {
  wx[_[26319]](pmnql);
}, window[_[22]] = function (jihgfk, jghef, lhg, eighjf, rspqn, $2_1, acfbed, befdc) {
  if (eighjf == undefined) eighjf = 0x1;wx[_[482]]({ 'url': jihgfk, 'method': acfbed || _[26517], 'responseType': _[4722], 'data': jghef, 'header': { 'content-type': befdc || _[31502] }, 'success': function (adefb) {
      DEBUG && console[_[487]](_[31645], jihgfk, info, adefb);if (adefb && adefb[_[26900]] == 0xc8) {
        var cabfe = adefb[_[11]];!$2_1 || $2_1(cabfe) ? lhg && lhg(cabfe) : window[_[31646]](jihgfk, jghef, lhg, eighjf, rspqn, $2_1, adefb);
      } else window[_[31646]](jihgfk, jghef, lhg, eighjf, rspqn, $2_1, adefb);
    }, 'fail': function (toprqs) {
      DEBUG && console[_[487]](_[31647], jihgfk, info, toprqs), window[_[31646]](jihgfk, jghef, lhg, eighjf, rspqn, $2_1, toprqs);
    }, 'complete': function () {} });
}, window[_[31646]] = function (oknlpm, fijghk, kjihf, hcdfe, tyuvw, supqr, x$z_0) {
  hcdfe - 0x1 > 0x0 ? setTimeout(function () {
    window[_[22]](oknlpm, fijghk, kjihf, hcdfe - 0x1, tyuvw, supqr);
  }, 0x3e8) : tyuvw && tyuvw(JSON[_[4805]]({ 'url': oknlpm, 'response': x$z_0 }));
}, window[_[31648]] = function (ihjkfg, yzw_, jfghk, moqpnl, hdegf, lkh, igjlhk) {
  !jfghk && (jfghk = {});var dbcf = Math[_[118]](Date[_[83]]() / 0x3e8);jfghk[_[889]] = dbcf, jfghk[_[31649]] = yzw_;var quprst = Object[_[262]](jfghk)[_[1117]](),
      ijfhkg = '',
      z1_2$ = '';for (var uvzwy = 0x0; uvzwy < quprst[_[13]]; uvzwy++) {
    ijfhkg = ijfhkg + (uvzwy == 0x0 ? '' : '&') + quprst[uvzwy] + jfghk[quprst[uvzwy]], z1_2$ = z1_2$ + (uvzwy == 0x0 ? '' : '&') + quprst[uvzwy] + '=' + encodeURIComponent(jfghk[quprst[uvzwy]]);
  }ijfhkg = ijfhkg + p$DE[_[31462]];var trvuws = _[31650] + md5(ijfhkg);send(ihjkfg + '?' + z1_2$ + (z1_2$ == '' ? '' : '&') + trvuws, null, moqpnl, hdegf, lkh, igjlhk || function (nlmo) {
    return nlmo[_[1245]] == _[10348];
  }, null, _[31651]);
}, window['p$DCEB'] = function (ifjhe, vsrtuq) {
  var vwty = 0x0;p$DE[_[26631]] && (vwty = p$DE[_[26631]][_[12013]]), sendApi(p$DE[_[31458]], _[31652], { 'partnerId': p$DE[_[24735]], 'gamePkg': p$DE[_[26637]], 'logTime': Math[_[118]](Date[_[83]]() / 0x3e8), 'platformUid': p$DE[_[26638]], 'type': ifjhe, 'serverId': vwty }, null, 0x2, null, function () {
    return !![];
  });
}, window['p$DEBC'] = function (ghik) {
  sendApi(p$DE[_[31456]], _[31653], { 'partner_id': p$DE[_[24735]], 'uid': p$DE[_[26636]], 'version': p$DE[_[5014]], 'game_pkg': p$DE[_[26637]], 'device': p$DE[_[26639]] }, p$DECB, p$CED, p$EB);
}, window['p$DECB'] = function (z$01_) {
  if (z$01_ && z$01_[_[1245]] === _[10348] && z$01_[_[11]]) {
    z$01_[_[11]][_[5900]]({ 'id': -0x2, 'name': _[31654] }), z$01_[_[11]][_[5900]]({ 'id': -0x1, 'name': _[31655] }), p$DE[_[31656]] = z$01_[_[11]];if (window[_[12969]]) window[_[12969]][_[31657]]();
  } else {
    p$DE[_[31658]] = ![];var urqpt = z$01_ ? z$01_[_[1245]] : '';window[_[31489]](0x7, _[31659] + urqpt), window['p$BCDE'](_[31660] + urqpt);
  }
}, window['p$BCD'] = function (utrsv) {
  sendApi(p$DE[_[31456]], _[31661], { 'partner_id': p$DE[_[24735]], 'uid': p$DE[_[26636]], 'version': p$DE[_[5014]], 'game_pkg': p$DE[_[26637]], 'device': p$DE[_[26639]] }, p$BDC, p$CED, p$EB);
}, window['p$BDC'] = function (rmn) {
  p$DE[_[31662]] = ![];if (rmn && rmn[_[1245]] === _[10348] && rmn[_[11]]) {
    for (var $y0_z1 = 0x0; $y0_z1 < rmn[_[11]][_[13]]; $y0_z1++) {
      rmn[_[11]][$y0_z1][_[106]] = p$DCB(rmn[_[11]][$y0_z1]);
    }p$DE[_[31465]][-0x1] = window[_[31663]](rmn[_[11]]), window[_[12969]][_[31664]](-0x1);
  } else {
    var strw = rmn ? rmn[_[1245]] : '';window[_[31489]](0x8, _[31665] + strw), window['p$BCDE'](_[31666] + strw);
  }
}, window[_[31667]] = function (vxuwts) {
  sendApi(p$DE[_[31456]], _[31661], { 'partner_id': p$DE[_[24735]], 'uid': p$DE[_[26636]], 'version': p$DE[_[5014]], 'game_pkg': p$DE[_[26637]], 'device': p$DE[_[26639]] }, vxuwts, p$CED, p$EB);
}, window['p$CBD'] = function (dfhig, gkihlj) {
  sendApi(p$DE[_[31456]], _[31668], { 'partner_id': p$DE[_[24735]], 'uid': p$DE[_[26636]], 'version': p$DE[_[5014]], 'game_pkg': p$DE[_[26637]], 'device': p$DE[_[26639]], 'server_group_id': gkihlj }, p$CDB, p$CED, p$EB);
}, window['p$CDB'] = function (hgiefj) {
  p$DE[_[31662]] = ![];if (hgiefj && hgiefj[_[1245]] === _[10348] && hgiefj[_[11]] && hgiefj[_[11]][_[11]]) {
    var egfj = hgiefj[_[11]][_[31669]],
        gihl = [];for (var _1042 = 0x0; _1042 < hgiefj[_[11]][_[11]][_[13]]; _1042++) {
      hgiefj[_[11]][_[11]][_1042][_[106]] = p$DCB(hgiefj[_[11]][_[11]][_1042]), (gihl[_[13]] == 0x0 || hgiefj[_[11]][_[11]][_1042][_[106]] != 0x0) && (gihl[gihl[_[13]]] = hgiefj[_[11]][_[11]][_1042]);
    }p$DE[_[31465]][egfj] = window[_[31663]](gihl), window[_[12969]][_[31664]](egfj);
  } else {
    var fbc = hgiefj ? hgiefj[_[1245]] : '';window[_[31489]](0x9, _[31670] + fbc), window['p$BCDE'](_[31671] + fbc);
  }
}, window['p$ACED'] = function (mlpnk) {
  sendApi(p$DE[_[31456]], _[31672], { 'partner_id': p$DE[_[24735]], 'uid': p$DE[_[26636]], 'version': p$DE[_[5014]], 'game_pkg': p$DE[_[26637]], 'device': p$DE[_[26639]] }, reqServerRecommendCallBack, p$CED, p$EB);
}, window[_[31673]] = function (pnm) {
  p$DE[_[31662]] = ![];if (pnm && pnm[_[1245]] === _[10348] && pnm[_[11]]) {
    for (var vxuwyz = 0x0; vxuwyz < pnm[_[11]][_[13]]; vxuwyz++) {
      pnm[_[11]][vxuwyz][_[106]] = p$DCB(pnm[_[11]][vxuwyz]);
    }p$DE[_[31465]][-0x2] = window[_[31663]](pnm[_[11]]), window[_[12969]][_[31664]](-0x2);
  } else {
    var klnmp = pnm ? pnm[_[1245]] : '';window[_[31489]](0xa, _[31674] + klnmp), alert(_[31675] + klnmp);
  }
}, window[_[31663]] = function (trps) {
  return trps;
}, window['p$DBC'] = function (fgjihk, bfdaec) {
  fgjihk = fgjihk || p$DE[_[26631]][_[12013]], sendApi(p$DE[_[31456]], _[31676], { 'type': '4', 'game_pkg': p$DE[_[26637]], 'server_id': fgjihk }, bfdaec);
}, window[_[31677]] = function (jfheig, mlopnq, pknmol, uvzxyw) {
  pknmol = pknmol || p$DE[_[26631]][_[12013]], sendApi(p$DE[_[31456]], _[31678], { 'type': jfheig, 'game_pkg': mlopnq, 'server_id': pknmol }, uvzxyw);
}, window[_[31679]] = function (aebfc, nlmkjo) {
  sendApi(p$DE[_[31456]], _[31680], { 'game_pkg': aebfc }, nlmkjo);
}, window['p$DCB'] = function (qpst) {
  if (qpst) {
    if (qpst[_[106]] == 0x1) {
      if (qpst[_[31681]] == 0x1) return 0x2;else return 0x1;
    } else return qpst[_[106]] == 0x0 ? 0x0 : -0x1;
  }return -0x1;
}, window['p$EBCD'] = function (yzw_x, vsqu) {
  p$DE[_[31682]] = { 'step': yzw_x, 'server_id': vsqu };var xy_w$z = this;p$BDCE({ 'title': _[31683] }), sendApi(p$DE[_[31456]], _[31684], { 'partner_id': p$DE[_[24735]], 'uid': p$DE[_[26636]], 'game_pkg': p$DE[_[26637]], 'server_id': vsqu, 'platform': p$DE[_[26601]], 'platform_uid': p$DE[_[26638]], 'check_login_time': p$DE[_[31552]], 'check_login_sign': p$DE[_[31551]], 'version_name': p$DE[_[31517]] }, p$EBDC, p$CED, p$EB, function (nokjl) {
    return nokjl[_[1245]] == _[10348] || nokjl[_[78]] == _[31685] || nokjl[_[78]] == _[31686];
  });
}, window['p$EBDC'] = function ($z1_0) {
  var vxzw$y = this;if ($z1_0 && $z1_0[_[1245]] === _[10348] && $z1_0[_[11]]) {
    var efadb = p$DE[_[26631]];efadb[_[31687]] = p$DE[_[31466]], efadb[_[11996]] = String($z1_0[_[11]][_[31688]]), efadb[_[26603]] = parseInt($z1_0[_[11]][_[889]]);if ($z1_0[_[11]][_[26602]]) efadb[_[26602]] = parseInt($z1_0[_[11]][_[26602]]);else efadb[_[26602]] = parseInt($z1_0[_[11]][_[12013]]);efadb[_[31689]] = 0x0, efadb[_[4819]] = p$DE[_[31590]], efadb[_[31690]] = $z1_0[_[11]][_[31691]], efadb[_[31692]] = $z1_0[_[11]][_[31692]];if ($z1_0[_[11]][_[26606]]) efadb[_[26606]] = parseInt($z1_0[_[11]][_[26606]]);console[_[487]](_[31693] + JSON[_[4805]](efadb[_[31692]])), p$DE[_[664]] == 0x1 && efadb[_[31692]] && efadb[_[31692]][_[31694]] == 0x1 && (p$DE[_[31695]] = 0x1, window[_[31362]][_[148]]['p$AED']()), p$ECBD();
  } else {
    if (p$DE[_[31682]][_[7504]] >= 0x3) {
      var gfhie = $z1_0 ? $z1_0[_[1245]] : '';window[_[31489]](0xc, _[31696] + gfhie), p$EB(JSON[_[4805]]($z1_0)), window['p$BCDE'](_[31697] + gfhie);
    } else sendApi(p$DE[_[31456]], _[31533], { 'platform': p$DE[_[31454]], 'partner_id': p$DE[_[24735]], 'token': p$DE[_[31531]], 'game_pkg': p$DE[_[26637]], 'deviceId': p$DE[_[26639]], 'scene': _[31534] + p$DE[_[31464]] }, function (ifgjhk) {
      if (!ifgjhk || ifgjhk[_[1245]] != _[10348]) {
        window['p$BCDE'](_[31550] + ifgjhk && ifgjhk[_[1245]]);return;
      }p$DE[_[31551]] = String(ifgjhk[_[11996]]), p$DE[_[31552]] = String(ifgjhk[_[889]]), setTimeout(function () {
        p$EBCD(p$DE[_[31682]][_[7504]] + 0x1, p$DE[_[31682]][_[12013]]);
      }, 0x5dc);
    }, p$CED, p$EB, function ($102_z) {
      return $102_z[_[1245]] == _[10348] || $102_z[_[1245]] == _[26978];
    });
  }
}, window['p$ECBD'] = function () {
  ServerLoading[_[148]][_[31582]](p$DE[_[664]]), window['p$CE'] = !![], window['p$EDBC']();
}, window['p$ECDB'] = function () {
  if (window['p$EC'] && window['p$DCE'] && window[_[31472]] && window[_[31473]] && window['p$DEC'] && window['p$DC']) {
    if (!window[_[30754]][_[148]]) {
      console[_[487]](_[31698] + window[_[30754]][_[148]]);var xyw$_ = wx[_[31699]](),
          hiklj = xyw$_[_[814]] ? xyw$_[_[814]] : 0x0,
          rtpsq = { 'cdn': window['p$DE'][_[4819]], 'spareCdn': window['p$DE'][_[26324]], 'newRegister': window['p$DE'][_[664]], 'wxPC': window['p$DE'][_[26327]], 'wxIOS': window['p$DE'][_[1113]], 'wxAndroid': window['p$DE'][_[11837]], 'wxParam': { 'limitLoad': window['p$DE']['p$ABCED'], 'benchmarkLevel': window['p$DE']['p$ABDCE'], 'wxFrom': window[_[562]][_[30773]] == _[31700] ? 0x1 : 0x0, 'wxSDKVersion': window[_[31363]] }, 'configType': window['p$DE'][_[12514]], 'exposeType': window['p$DE'][_[752]], 'scene': hiklj };new window[_[30754]](rtpsq, window['p$DE'][_[101]], window['p$ABCDE']);
    }
  }
}, window['p$EDBC'] = function () {
  if (window['p$EC'] && window['p$DCE'] && window[_[31472]] && window[_[31473]] && window['p$DEC'] && window['p$DC'] && window['p$CE'] && window['p$CD']) {
    p$BDEC();if (!p$ECD) {
      p$ECD = !![];if (!window[_[30754]][_[148]]) window['p$ECDB']();var wuvst = 0x0,
          ywv$z = wx[_[31701]]();ywv$z && (window['p$DE'][_[31419]] && (wuvst = ywv$z[_[322]]), console[_[78]](_[31702] + ywv$z[_[322]] + _[31703] + ywv$z[_[1265]] + _[31704] + ywv$z[_[1267]] + _[31705] + ywv$z[_[1266]] + _[31706] + ywv$z[_[178]] + _[31707] + ywv$z[_[179]]));var suvq = {};for (const klmh in p$DE[_[26631]]) {
        suvq[klmh] = p$DE[_[26631]][klmh];
      }var nqmlpo = { 'channel': window['p$DE'][_[26635]], 'account': window['p$DE'][_[26636]], 'userId': window['p$DE'][_[19851]], 'cdn': window['p$DE'][_[4819]], 'data': window['p$DE'][_[11]], 'package': window['p$DE'][_[26325]], 'newRegister': window['p$DE'][_[664]], 'pkgName': window['p$DE'][_[26637]], 'partnerId': window['p$DE'][_[24735]], 'platform_uid': window['p$DE'][_[26638]], 'deviceId': window['p$DE'][_[26639]], 'selectedServer': suvq, 'configType': window['p$DE'][_[12514]], 'exposeType': window['p$DE'][_[752]], 'debugUsers': window['p$DE'][_[12922]], 'wxMenuTop': wuvst, 'wxShield': window['p$DE'][_[776]] };if (window[_[31592]]) for (var lknmij in window[_[31592]]) {
        nqmlpo[lknmij] = window[_[31592]][lknmij];
      }window[_[30754]][_[148]]['p$EDA'](nqmlpo);if (p$DE[_[26631]] && p$DE[_[26631]][_[12013]]) localStorage[_[490]](_[31554] + p$DE[_[26637]] + p$DE[_[26636]], p$DE[_[26631]][_[12013]]);
    }
  } else console[_[78]](_[31708] + window['p$EC'] + _[31709] + window['p$DCE'] + _[31710] + window[_[31472]] + _[31711] + window[_[31473]] + _[31712] + window['p$DEC'] + _[31713] + window['p$DC'] + _[31714] + window['p$CE'] + _[31715] + window['p$CD']);
};