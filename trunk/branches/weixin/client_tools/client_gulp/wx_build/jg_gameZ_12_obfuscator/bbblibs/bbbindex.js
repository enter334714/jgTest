var _ = wx.y$;
import _dz2_01$ from '../bbbk/bbbsdk.js';window[_[30486]] = { 'wxVersion': window[_[558]][_[30388]] }, window[_[30487]] = ![], window['p$ED'] = 0x1, window[_[30488]] = 0x1, window['p$CDE'] = !![], window[_[30489]] = !![], window['p$ABCDE'] = '', window[_[30490]] = ![], window['p$DE'] = { 'base_cdn': _[30491], 'cdn': _[30491] }, p$DE[_[30492]] = {}, p$DE[_[25736]] = '0', p$DE[_[4929]] = window[_[30486]][_[30493]], p$DE[_[30461]] = '', p$DE['os'] = '1', p$DE[_[30494]] = _[30495], p$DE[_[30496]] = _[30497], p$DE[_[30498]] = _[30499], p$DE[_[30500]] = _[30501], p$DE[_[30502]] = _[30503], p$DE[_[24344]] = '1', p$DE[_[26044]] = '', p$DE[_[26046]] = '', p$DE[_[30504]] = 0x0, p$DE[_[30505]] = {}, p$DE[_[30506]] = parseInt(p$DE[_[24344]]), p$DE[_[26042]] = p$DE[_[24344]], p$DE[_[26038]] = {}, p$DE['p$BD'] = _[30507], p$DE[_[30508]] = ![], p$DE[_[12648]] = _[30509], p$DE[_[26010]] = Date[_[83]](), p$DE[_[12245]] = _[30510], p$DE[_[737]] = '_a', p$DE[_[30511]] = 0x2, p$DE[_[101]] = 0x7c1, p$DE[_[30493]] = window[_[30486]][_[30493]], p$DE[_[761]] = ![], p$DE[_[1098]] = ![], p$DE[_[11635]] = ![], p$DE[_[25738]] = ![], window['p$CED'] = 0x5, window['p$CE'] = ![], window['p$EC'] = ![], window['p$DCE'] = ![], window[_[30512]] = ![], window[_[30513]] = ![], window['p$DEC'] = ![], window['p$CD'] = ![], window['p$DC'] = ![], window['p$ECD'] = ![], window[_[30514]] = null, window[_[639]] = function (fheid) {
  console[_[482]](_[639], fheid), wx[_[5210]]({}), wx[_[30412]]({ 'title': _[6599], 'content': fheid, 'success'($01zy_) {
      if ($01zy_[_[30515]]) console[_[482]](_[30516]);else $01zy_[_[554]] && console[_[482]](_[30517]);
    } });
}, window['p$BCDE'] = function (xw$) {
  console[_[482]](_[30518], xw$), p$BDEC(), wx[_[30412]]({ 'title': _[6599], 'content': xw$, 'confirmText': _[30519], 'cancelText': _[19124], 'success'(rsqtuv) {
      if (rsqtuv[_[30515]]) window['p$DB']();else rsqtuv[_[554]] && (console[_[482]](_[30520]), wx[_[25734]]({}));
    } });
}, window[_[30521]] = function (iljkg) {
  console[_[482]](_[30521], iljkg), wx[_[30412]]({ 'title': _[6599], 'content': iljkg, 'confirmText': _[26173], 'showCancel': ![], 'complete'(z0_$1) {
      console[_[482]](_[30520]), wx[_[25734]]({});
    } });
}, window['p$BCED'] = ![], window['p$BDCE'] = function (eabfc) {
  window['p$BCED'] = !![], wx[_[5209]](eabfc);
}, window['p$BDEC'] = function () {
  window['p$BCED'] && (window['p$BCED'] = ![], wx[_[5210]]({}));
}, window['p$BECD'] = function (pmqlno) {
  window[_[30403]][_[148]]['p$BECD'](pmqlno);
}, window[_[12518]] = function (vxwut, gkijhl) {
  _dz2_01$[_[12518]](vxwut, function (cgfh) {
    cgfh && cgfh[_[11]] ? cgfh[_[11]][_[1232]] == 0x1 ? gkijhl(!![]) : (gkijhl(![]), console[_[78]](_[30522] + cgfh[_[11]][_[30523]])) : console[_[482]](_[12518], cgfh);
  });
}, window['p$BEDC'] = function (vrwtu) {
  console[_[482]](_[30524], vrwtu);
}, window['p$BDE'] = function (hjiml) {}, window['p$BED'] = function (qurpt, swvu, yxtuv) {}, window['p$BE'] = function (qprmno) {
  console[_[482]](_[30525], qprmno), window[_[30403]][_[148]][_[30526]](), window[_[30403]][_[148]][_[30527]](), window[_[30403]][_[148]][_[30528]]();
}, window['p$EB'] = function (mknloj) {
  window[_[30529]](0xe, _[30530] + mknloj), window['p$BCDE'](_[30531]);var zux = { 'id': window['p$DE'][_[30393]], 'role': window['p$DE'][_[4857]], 'level': window['p$DE'][_[30394]], 'account': window['p$DE'][_[26043]], 'version': window['p$DE'][_[101]], 'cdn': window['p$DE'][_[4734]], 'pkgName': window['p$DE'][_[26044]], 'gamever': window[_[558]][_[30388]], 'serverid': window['p$DE'][_[26038]] ? window['p$DE'][_[26038]][_[11813]] : 0x0, 'systemInfo': window[_[30395]], 'error': _[30532], 'stack': mknloj ? mknloj : _[30531] },
      tprosq = JSON[_[4720]](zux);console[_[125]](_[30533] + tprosq), window['p$BD'](tprosq);
}, window[_[30529]] = function (rvuwts, ljh) {
  sendApi(p$DE[_[30498]], _[30534], { 'game_pkg': p$DE[_[26044]], 'partner_id': p$DE[_[24344]], 'server_id': p$DE[_[26038]] && p$DE[_[26038]][_[11813]] > 0x0 ? p$DE[_[26038]][_[11813]] : 0x0, 'uid': p$DE[_[26043]] > 0x0 ? p$DE[_[26043]] : 0x0, 'type': rvuwts, 'info': ljh });
}, window['p$DBE'] = function (xy_z$w) {
  var ihdfe = JSON[_[526]](xy_z$w);ihdfe[_[30535]] = window[_[558]][_[30388]], ihdfe[_[30536]] = window['p$DE'][_[26038]] ? window['p$DE'][_[26038]][_[11813]] : 0x0, ihdfe[_[30395]] = window[_[30395]];var psurq = JSON[_[4720]](ihdfe);console[_[125]](_[30537] + psurq), window['p$BD'](psurq);
}, window['p$DEB'] = function (trqps, qtru) {
  var oqnlm = { 'id': window['p$DE'][_[30393]], 'role': window['p$DE'][_[4857]], 'level': window['p$DE'][_[30394]], 'account': window['p$DE'][_[26043]], 'version': window['p$DE'][_[101]], 'cdn': window['p$DE'][_[4734]], 'pkgName': window['p$DE'][_[26044]], 'gamever': window[_[558]][_[30388]], 'serverid': window['p$DE'][_[26038]] ? window['p$DE'][_[26038]][_[11813]] : 0x0, 'systemInfo': window[_[30395]], 'error': trqps, 'stack': qtru },
      psrtuq = JSON[_[4720]](oqnlm);console[_[96]](_[30538] + psrtuq), window['p$BD'](psrtuq);
}, window['p$BD'] = function ($yxzw_) {
  if (window['p$DE'][_[30462]] == _[30539]) return;var jlin = p$DE['p$BD'] + _[30540] + p$DE[_[26043]];wx[_[477]]({ 'url': jlin, 'method': _[30327], 'data': $yxzw_, 'header': { 'content-type': _[30541], 'cache-control': _[30542] }, 'success': function (faebcd) {
      DEBUG && console[_[482]](_[30543], jlin, $yxzw_, faebcd);
    }, 'fail': function (gkjf) {
      DEBUG && console[_[482]](_[30543], jlin, $yxzw_, gkjf);
    }, 'complete': function () {} });
}, window[_[30544]] = function () {
  function hfgei() {
    return ((0x1 + Math[_[119]]()) * 0x10000 | 0x0)[_[270]](0x10)[_[497]](0x1);
  }return hfgei() + hfgei() + '-' + hfgei() + '-' + hfgei() + '-' + hfgei() + '+' + hfgei() + hfgei() + hfgei();
}, window['p$DB'] = function () {
  console[_[482]](_[30545]);var nolkmp = _dz2_01$[_[30546]]();p$DE[_[26042]] = nolkmp[_[30547]], p$DE[_[30506]] = nolkmp[_[30547]], p$DE[_[24344]] = nolkmp[_[30547]], p$DE[_[26044]] = nolkmp[_[30548]];var _02341 = { 'game_ver': p$DE[_[4929]] };p$DE[_[26046]] = this[_[30544]](), p$BDCE({ 'title': _[30549] }), _dz2_01$[_[363]](_02341, this['p$EBD'][_[74]](this));
}, window['p$EBD'] = function (tuwsv) {
  var gfcdb = tuwsv[_[30550]];sdkInitRes = tuwsv, console[_[482]](_[30551] + gfcdb + _[30552] + (gfcdb == 0x1) + _[30553] + tuwsv[_[30388]] + _[30554] + window[_[30486]][_[30493]]);if (!tuwsv[_[30388]] || window['p$ACEBD'](window[_[30486]][_[30493]], tuwsv[_[30388]]) < 0x0) console[_[482]](_[30555]), p$DE[_[30496]] = _[30556], p$DE[_[30498]] = _[30557], p$DE[_[30500]] = _[30558], p$DE[_[4734]] = _[30559], p$DE[_[25735]] = _[30560], p$DE[_[30561]] = _[30562], p$DE[_[761]] = ![];else window['p$ACEBD'](window[_[30486]][_[30493]], tuwsv[_[30388]]) == 0x0 ? (console[_[482]](_[30563]), p$DE[_[30496]] = _[30497], p$DE[_[30498]] = _[30499], p$DE[_[30500]] = _[30501], p$DE[_[4734]] = _[30564], p$DE[_[25735]] = _[30560], p$DE[_[30561]] = _[30565], p$DE[_[761]] = !![]) : (console[_[482]](_[30566]), p$DE[_[30496]] = _[30497], p$DE[_[30498]] = _[30499], p$DE[_[30500]] = _[30501], p$DE[_[4734]] = _[30567], p$DE[_[25735]] = _[30560], p$DE[_[30561]] = _[30565], p$DE[_[761]] = ![]);p$DE[_[30504]] = config[_[29903]] ? config[_[29903]] : 0x0, this['p$CDBE'](), this['p$CDEB'](), window[_[30568]] = 0x5, p$BDCE({ 'title': _[30569] }), _dz2_01$[_[30322]](this['p$EDB'][_[74]](this));
}, window[_[30568]] = 0x5, window['p$EDB'] = function (fghc, xzwy_) {
  if (fghc == 0x0 && xzwy_ && xzwy_[_[29995]]) {
    p$DE[_[30570]] = xzwy_[_[29995]];var gedcfh = this;p$BDCE({ 'title': _[30571] }), sendApi(p$DE[_[30496]], _[30572], { 'platform': p$DE[_[30494]], 'partner_id': p$DE[_[24344]], 'token': xzwy_[_[29995]], 'game_pkg': p$DE[_[26044]], 'deviceId': p$DE[_[26046]], 'scene': _[30573] + p$DE[_[30504]] }, this['p$CBDE'][_[74]](this), p$CED, p$EB);
  } else xzwy_ && xzwy_[_[26237]] && window[_[30568]] > 0x0 && (xzwy_[_[26237]][_[115]](_[30574]) != -0x1 || xzwy_[_[26237]][_[115]](_[30575]) != -0x1 || xzwy_[_[26237]][_[115]](_[30576]) != -0x1 || xzwy_[_[26237]][_[115]](_[30577]) != -0x1 || xzwy_[_[26237]][_[115]](_[30578]) != -0x1 || xzwy_[_[26237]][_[115]](_[30579]) != -0x1) ? (window[_[30568]]--, _dz2_01$[_[30322]](this['p$EDB'][_[74]](this))) : (window[_[30529]](0x1, _[30580] + fghc + _[30581] + (xzwy_ ? xzwy_[_[26237]] : '')), window['p$DEB'](_[30582], JSON[_[4720]]({ 'status': fghc, 'data': xzwy_ })), window['p$BCDE'](_[30583] + (xzwy_ && xzwy_[_[26237]] ? '，' + xzwy_[_[26237]] : '')));
}, window['p$CBDE'] = function ($xyvw) {
  if (!$xyvw) {
    window[_[30529]](0x2, _[30584]), window['p$DEB'](_[30585], _[30586]), window['p$BCDE'](_[30587]);return;
  }if ($xyvw[_[1232]] != _[10186]) {
    window[_[30529]](0x2, _[30588] + $xyvw[_[1232]]), window['p$DEB'](_[30585], JSON[_[4720]]($xyvw)), window['p$BCDE'](_[30589] + $xyvw[_[1232]]);return;
  }p$DE[_[19503]] = String($xyvw[_[26043]]), p$DE[_[26043]] = String($xyvw[_[26043]]), p$DE[_[26008]] = String($xyvw[_[26008]]), p$DE[_[26042]] = String($xyvw[_[26008]]), p$DE[_[26045]] = String($xyvw[_[26045]]), p$DE[_[30590]] = String($xyvw[_[11796]]), p$DE[_[30591]] = String($xyvw[_[874]]), p$DE[_[11796]] = '';var aebcd = this;p$BDCE({ 'title': _[30592] });var gefcb = localStorage[_[480]](_[30593] + p$DE[_[26044]] + p$DE[_[26043]]);if (gefcb && gefcb != '') {
    var z2$01_ = Number(gefcb);aebcd[_[30594]](z2$01_);
  } else aebcd[_[30595]]();
}, window[_[30595]] = function () {
  var efghj = this;sendApi(p$DE[_[30496]], _[30596], { 'partner_id': p$DE[_[24344]], 'uid': p$DE[_[26043]], 'version': p$DE[_[4929]], 'game_pkg': p$DE[_[26044]], 'device': p$DE[_[26046]] }, efghj['p$CBED'][_[74]](efghj), p$CED, p$EB);
}, window['p$CBED'] = function (igkl) {
  if (!igkl) {
    window[_[30529]](0x3, _[30597]), window['p$BCDE'](_[30597]);return;
  }if (igkl[_[1232]] != _[10186]) {
    window[_[30529]](0x3, _[30598] + igkl[_[1232]]), window['p$BCDE'](_[30598] + igkl[_[1232]]);return;
  }if (!igkl[_[11]] || igkl[_[11]][_[13]] == 0x0) {
    window[_[30529]](0x3, _[30599]), window['p$BCDE'](_[30600]);return;
  }this[_[30601]](igkl);
}, window[_[30594]] = function (_02$1) {
  var $031_2 = this;sendApi(p$DE[_[30496]], _[30602], { 'server_id': _02$1, 'time': Date[_[83]]() / 0x3e8 }, $031_2[_[30603]][_[74]]($031_2), p$CED, p$EB);
}, window[_[30603]] = function (fbdce) {
  if (!fbdce) {
    window[_[30529]](0x4, _[30604]), this[_[30595]]();return;
  }if (fbdce[_[1232]] != _[10186]) {
    window[_[30529]](0x4, _[30605] + fbdce[_[1232]]), this[_[30595]]();return;
  }if (!fbdce[_[11]] || fbdce[_[11]][_[13]] == 0x0) {
    window[_[30529]](0x4, _[30606]), this[_[30595]]();return;
  }this[_[30601]](fbdce);
}, window[_[30601]] = function (pqorts) {
  p$DE[_[649]] = pqorts[_[30607]] != undefined ? pqorts[_[30607]] : 0x0, p$DE[_[26038]] = { 'server_id': String(pqorts[_[11]][0x0][_[11813]]), 'server_name': String(pqorts[_[11]][0x0][_[30608]]), 'entry_ip': pqorts[_[11]][0x0][_[26066]], 'entry_port': parseInt(pqorts[_[11]][0x0][_[26067]]), 'status': p$DCB(pqorts[_[11]][0x0]), 'start_time': pqorts[_[11]][0x0][_[30609]], 'cdn': p$DE[_[4734]] }, this['p$EDCB']();
}, window['p$EDCB'] = function () {
  if (p$DE[_[649]] == 0x1) {
    var _1403 = p$DE[_[26038]][_[106]];if (_1403 === -0x1 || _1403 === 0x0) {
      window[_[30529]](0xf, _[30610] + p$DE[_[26038]]['id'] + _[30611] + p$DE[_[26038]][_[106]]), window['p$BCDE'](_1403 === -0x1 ? _[30612] : _[30613]);return;
    }p$EBCD(0x0, p$DE[_[26038]][_[11813]]), window[_[30403]][_[148]][_[30614]](p$DE[_[649]]);
  } else window[_[30403]][_[148]][_[30615]](), p$BDEC();window['p$DC'] = !![], window['p$ECDB'](), window['p$EDBC']();
}, window['p$CDBE'] = function () {
  sendApi(p$DE[_[30496]], _[30616], { 'game_pkg': p$DE[_[26044]], 'version_name': p$DE[_[30561]] }, this[_[30617]][_[74]](this), p$CED, p$EB);
}, window[_[30617]] = function (rvqtu) {
  if (!rvqtu) {
    window[_[30529]](0x5, _[30618]), window['p$BCDE'](_[30618]);return;
  }if (rvqtu[_[1232]] != _[10186]) {
    window[_[30529]](0x5, _[30619] + rvqtu[_[1232]]), window['p$BCDE'](_[30619] + rvqtu[_[1232]]);return;
  }if (!rvqtu[_[11]] || !rvqtu[_[11]][_[4929]]) {
    window[_[30529]](0x5, _[30620] + (rvqtu[_[11]] && rvqtu[_[11]][_[4929]])), window['p$BCDE'](_[30620] + (rvqtu[_[11]] && rvqtu[_[11]][_[4929]]));return;
  }rvqtu[_[11]][_[30621]] && rvqtu[_[11]][_[30621]][_[13]] > 0xa && (p$DE[_[30622]] = rvqtu[_[11]][_[30621]], p$DE[_[4734]] = rvqtu[_[11]][_[30621]]), rvqtu[_[11]][_[4929]] && (p$DE[_[101]] = rvqtu[_[11]][_[4929]]), console[_[78]](_[26179] + p$DE[_[101]] + _[30623] + p$DE[_[30561]]), window['p$DEC'] = !![], window['p$ECDB'](), window['p$EDBC']();
}, window[_[30624]], window['p$CDEB'] = function () {
  sendApi(p$DE[_[30496]], _[30625], { 'game_pkg': p$DE[_[26044]] }, this['p$CEBD'][_[74]](this), p$CED, p$EB);
}, window['p$CEBD'] = function (olnpk) {
  if (olnpk && olnpk[_[1232]] === _[10186] && olnpk[_[11]]) {
    window[_[30624]] = olnpk[_[11]];for (var cghed in olnpk[_[11]]) {
      p$DE[cghed] = olnpk[_[11]][cghed];
    }
  } else window[_[30529]](0xb, _[30626]), console[_[78]](_[30627] + olnpk[_[1232]]);window['p$CD'] = !![], window['p$EDBC']();
}, window[_[30628]] = function (dfhgec, opmlk, fjgkih, ptrqus, lpnmk, xy_0z$, quvr, wz$x_y, sxvtw, y0z$1_) {
  lpnmk = String(lpnmk);var npqor = quvr,
      xzwuv = wz$x_y;p$DE[_[30492]][lpnmk] = { 'productid': lpnmk, 'productname': npqor, 'productdesc': xzwuv, 'ApplePrdId': y0z$1_, 'roleid': dfhgec, 'rolename': opmlk, 'rolelevel': fjgkih, 'price': xy_0z$, 'callback': sxvtw }, sendApi(p$DE[_[30500]], _[30629], { 'game_pkg': p$DE[_[26044]], 'server_id': p$DE[_[26038]][_[11813]], 'server_name': p$DE[_[26038]][_[30608]], 'level': fjgkih, 'uid': p$DE[_[26043]], 'role_id': dfhgec, 'role_name': opmlk, 'product_id': lpnmk, 'product_name': npqor, 'product_desc': xzwuv, 'money': xy_0z$, 'partner_id': p$DE[_[24344]] }, toPayCallBack, p$CED, p$EB);
}, window[_[30630]] = function (rtqspu) {
  if (rtqspu && (rtqspu[_[30631]] === 0xc8 || rtqspu[_[1232]] == _[10186])) {
    var poqmln = p$DE[_[30492]][String(rtqspu[_[30632]])];if (poqmln[_[330]]) poqmln[_[330]](rtqspu[_[30632]], rtqspu[_[30633]], -0x1);_dz2_01$[_[30355]]({ 'cpbill': rtqspu[_[30633]], 'productid': rtqspu[_[30632]], 'productname': poqmln[_[30634]], 'productdesc': poqmln[_[30635]], 'serverid': p$DE[_[26038]][_[11813]], 'servername': p$DE[_[26038]][_[30608]], 'roleid': poqmln[_[30636]], 'rolename': poqmln[_[30637]], 'rolelevel': poqmln[_[30638]], 'price': poqmln[_[27827]], 'ApplePrdId': poqmln[_[30639]], 'extension': JSON[_[4720]]({ 'cp_order_id': rtqspu[_[30633]] }) }, function (rsqo, hgl) {
      poqmln[_[330]] && rsqo == 0x0 && poqmln[_[330]](rtqspu[_[30632]], rtqspu[_[30633]], rsqo);console[_[78]](JSON[_[4720]]({ 'type': _[30640], 'status': rsqo, 'data': rtqspu, 'role_name': poqmln[_[30637]] }));if (rsqo === 0x0) {} else {
        if (rsqo === 0x1) {} else {
          if (rsqo === 0x2) {}
        }
      }
    });
  } else {
    var trpus = rtqspu ? _[30641] + rtqspu[_[30631]] + _[30642] + rtqspu[_[1232]] + _[30643] + rtqspu[_[78]] : _[30644];window[_[30529]](0xd, _[30645] + trpus), alert(trpus);
  }
}, window['p$CEDB'] = function () {}, window['p$BCE'] = function (x$zvy, hligk, lopqn, squvr, dgchfe) {
  _dz2_01$[_[30378]](p$DE[_[26038]][_[11813]], p$DE[_[26038]][_[30608]] || p$DE[_[26038]][_[11813]], x$zvy, hligk, lopqn), sendApi(p$DE[_[30496]], _[30646], { 'game_pkg': p$DE[_[26044]], 'server_id': p$DE[_[26038]][_[11813]], 'role_id': x$zvy, 'uid': p$DE[_[26043]], 'role_name': hligk, 'role_type': squvr, 'level': lopqn });
}, window['p$BEC'] = function (uxwz, jlnmk, wru, _$0zy, vwutr, svux, onmpkl, tuwyv, faebdc, rmpqno) {
  p$DE[_[30393]] = uxwz, p$DE[_[4857]] = jlnmk, p$DE[_[30394]] = wru, _dz2_01$[_[30379]](p$DE[_[26038]][_[11813]], p$DE[_[26038]][_[30608]] || p$DE[_[26038]][_[11813]], uxwz, jlnmk, wru), sendApi(p$DE[_[30496]], _[30647], { 'game_pkg': p$DE[_[26044]], 'server_id': p$DE[_[26038]][_[11813]], 'role_id': uxwz, 'uid': p$DE[_[26043]], 'role_name': jlnmk, 'role_type': _$0zy, 'level': wru, 'evolution': vwutr });
}, window['p$CBE'] = function (ilhm, vrsuw, dihgf, dechgf, ikhmjl, decaf, chefg, nopqml, lqno, twyuvx) {
  p$DE[_[30393]] = ilhm, p$DE[_[4857]] = vrsuw, p$DE[_[30394]] = dihgf, _dz2_01$[_[30380]](p$DE[_[26038]][_[11813]], p$DE[_[26038]][_[30608]] || p$DE[_[26038]][_[11813]], ilhm, vrsuw, dihgf), sendApi(p$DE[_[30496]], _[30647], { 'game_pkg': p$DE[_[26044]], 'server_id': p$DE[_[26038]][_[11813]], 'role_id': ilhm, 'uid': p$DE[_[26043]], 'role_name': vrsuw, 'role_type': dechgf, 'level': dihgf, 'evolution': ikhmjl });
}, window['p$CEB'] = function (pmonqr) {}, window['p$BC'] = function (nmkpl) {
  _dz2_01$[_[30337]](_[30337], function (gfihej) {
    nmkpl && nmkpl(gfihej);
  });
}, window[_[24342]] = function () {
  _dz2_01$[_[24342]]();
}, window[_[30648]] = function () {
  _dz2_01$[_[24232]]();
}, window[_[30649]] = function (sutrqp, $y0_z, svtrwu, nqmor, xy$zwv, cafdb, ifkgjh, snoqpr) {
  snoqpr = snoqpr || p$DE[_[26038]][_[11813]], sendApi(p$DE[_[30496]], _[30650], { 'phone': sutrqp, 'role_id': $y0_z, 'uid': p$DE[_[26043]], 'game_pkg': p$DE[_[26044]], 'partner_id': p$DE[_[24344]], 'server_id': snoqpr }, ifkgjh, 0x2, null, function () {
    return !![];
  });
}, window[_[11141]] = function (tsuq) {
  window['p$EBC'] = tsuq, window['p$EBC'] && window['p$CB'] && (console[_[78]](_[30478] + window['p$CB'][_[799]]), window['p$EBC'](window['p$CB']), window['p$CB'] = null);
}, window['p$ECB'] = function (stxvuw, xvwy, jmlkhi, ihkfjg) {
  window[_[22]](_[30651], { 'game_pkg': window['p$DE'][_[26044]], 'role_id': xvwy, 'server_id': jmlkhi }, ihkfjg);
}, window['p$DBCE'] = function (fighkj, rstw, urptqs) {
  function vtxwy(normq) {
    var jkghli = [],
        dfbac = [],
        dgceh = urptqs || window[_[558]][_[30652]];for (var xy$w in dgceh) {
      var iklmhj = Number(xy$w);(!fighkj || !fighkj[_[13]] || fighkj[_[115]](iklmhj) != -0x1) && (dfbac[_[29]](dgceh[xy$w]), jkghli[_[29]]([iklmhj, 0x3]));
    }window['p$ACEBD'](window[_[30404]], _[30653]) >= 0x0 ? (console[_[482]](_[30654]), _dz2_01$[_[30655]] && _dz2_01$[_[30655]](dfbac, function (yuxtwv) {
      console[_[482]](_[30656]), console[_[482]](yuxtwv);if (yuxtwv && yuxtwv[_[26237]] == _[30657]) for (var fkgj in dgceh) {
        if (yuxtwv[dgceh[fkgj]] == _[30658]) {
          var nmqop = Number(fkgj);for (var lhjigk = 0x0; lhjigk < jkghli[_[13]]; lhjigk++) {
            if (jkghli[lhjigk][0x0] == nmqop) {
              jkghli[lhjigk][0x1] = 0x1;break;
            }
          }
        }
      }window['p$ACEBD'](window[_[30404]], _[30659]) >= 0x0 ? wx[_[30660]]({ 'withSubscriptions': !![], 'success': function (klm) {
          var zw_$x = klm[_[30661]][_[30662]];if (zw_$x) {
            console[_[482]](_[30663]), console[_[482]](zw_$x);for (var mnqplo in dgceh) {
              if (zw_$x[dgceh[mnqplo]] == _[30658]) {
                var bfcead = Number(mnqplo);for (var hcg = 0x0; hcg < jkghli[_[13]]; hcg++) {
                  if (jkghli[hcg][0x0] == bfcead) {
                    jkghli[hcg][0x1] = 0x2;break;
                  }
                }
              }
            }console[_[482]](jkghli), rstw && rstw(jkghli);
          } else console[_[482]](_[30664]), console[_[482]](klm), console[_[482]](jkghli), rstw && rstw(jkghli);
        }, 'fail': function () {
          console[_[482]](_[30665]), console[_[482]](jkghli), rstw && rstw(jkghli);
        } }) : (console[_[482]](_[30666] + window[_[30404]]), console[_[482]](jkghli), rstw && rstw(jkghli));
    })) : (console[_[482]](_[30667] + window[_[30404]]), console[_[482]](jkghli), rstw && rstw(jkghli)), wx[_[30668]](vtxwy);
  }wx[_[30669]](vtxwy);
}, window['p$DBEC'] = { 'isSuccess': ![], 'level': _[30670], 'isCharging': ![] }, window['p$DCBE'] = function (vytwu) {
  wx[_[30470]]({ 'success': function (fide) {
      var jkglih = window['p$DBEC'];jkglih[_[30671]] = !![], jkglih[_[4833]] = Number(fide[_[4833]])[_[4454]](0x0), jkglih[_[30473]] = fide[_[30473]], vytwu && vytwu(jkglih[_[30671]], jkglih[_[4833]], jkglih[_[30473]]);
    }, 'fail': function (ijefgh) {
      console[_[482]](_[30672], ijefgh[_[26237]]);var kmlnp = window['p$DBEC'];vytwu && vytwu(kmlnp[_[30671]], kmlnp[_[4833]], kmlnp[_[30473]]);
    } });
}, window[_[12215]] = function (hdefig) {
  wx[_[12215]]({ 'success': function (klon) {
      hdefig && hdefig(!![], klon);
    }, 'fail': function (qustrv) {
      hdefig && hdefig(![], qustrv);
    } });
}, window[_[12217]] = function (xywz) {
  if (xywz) wx[_[12217]](xywz);
}, window[_[25730]] = function (z$w_) {
  wx[_[25730]](z$w_);
}, window[_[22]] = function (_xy$0, prqsto, fjheg, purqs, $23_, nospq, xuzwvy, mhlij) {
  if (purqs == undefined) purqs = 0x1;wx[_[477]]({ 'url': _xy$0, 'method': xuzwvy || _[25926], 'responseType': _[4638], 'data': prqsto, 'header': { 'content-type': mhlij || _[30541] }, 'success': function (hjgikl) {
      DEBUG && console[_[482]](_[30673], _xy$0, info, hjgikl);if (hjgikl && hjgikl[_[26307]] == 0xc8) {
        var gefchd = hjgikl[_[11]];!nospq || nospq(gefchd) ? fjheg && fjheg(gefchd) : window[_[30674]](_xy$0, prqsto, fjheg, purqs, $23_, nospq, hjgikl);
      } else window[_[30674]](_xy$0, prqsto, fjheg, purqs, $23_, nospq, hjgikl);
    }, 'fail': function ($xzyv) {
      DEBUG && console[_[482]](_[30675], _xy$0, info, $xzyv), window[_[30674]](_xy$0, prqsto, fjheg, purqs, $23_, nospq, $xzyv);
    }, 'complete': function () {} });
}, window[_[30674]] = function (edb, yxwtu, nrqspo, kolm, _$y1, qnmrpo, jlhgk) {
  kolm - 0x1 > 0x0 ? setTimeout(function () {
    window[_[22]](edb, yxwtu, nrqspo, kolm - 0x1, _$y1, qnmrpo);
  }, 0x3e8) : _$y1 && _$y1(JSON[_[4720]]({ 'url': edb, 'response': jlhgk }));
}, window[_[30676]] = function (ywtux, cdgefh, xw$zvy, nojmk, iklj, trps, $xzyw) {
  !xw$zvy && (xw$zvy = {});var jomln = Math[_[118]](Date[_[83]]() / 0x3e8);xw$zvy[_[874]] = jomln, xw$zvy[_[30677]] = cdgefh;var ijmhlk = Object[_[262]](xw$zvy)[_[1102]](),
      zxw$v = '',
      urvswt = '';for (var fhdgi = 0x0; fhdgi < ijmhlk[_[13]]; fhdgi++) {
    zxw$v = zxw$v + (fhdgi == 0x0 ? '' : '&') + ijmhlk[fhdgi] + xw$zvy[ijmhlk[fhdgi]], urvswt = urvswt + (fhdgi == 0x0 ? '' : '&') + ijmhlk[fhdgi] + '=' + encodeURIComponent(xw$zvy[ijmhlk[fhdgi]]);
  }zxw$v = zxw$v + p$DE[_[30502]];var afbde = _[30678] + md5(zxw$v);send(ywtux + '?' + urvswt + (urvswt == '' ? '' : '&') + afbde, null, nojmk, iklj, trps, $xzyw || function (lijg) {
    return lijg[_[1232]] == _[10186];
  }, null, _[30328]);
}, window['p$DCEB'] = function (tvqsr, ghkli) {
  var gbc = 0x0;p$DE[_[26038]] && (gbc = p$DE[_[26038]][_[11813]]), sendApi(p$DE[_[30498]], _[30679], { 'partnerId': p$DE[_[24344]], 'gamePkg': p$DE[_[26044]], 'logTime': Math[_[118]](Date[_[83]]() / 0x3e8), 'platformUid': p$DE[_[26045]], 'type': tvqsr, 'serverId': gbc }, null, 0x2, null, function () {
    return !![];
  });
}, window['p$DEBC'] = function (onqmpl) {
  sendApi(p$DE[_[30496]], _[30680], { 'partner_id': p$DE[_[24344]], 'uid': p$DE[_[26043]], 'version': p$DE[_[4929]], 'game_pkg': p$DE[_[26044]], 'device': p$DE[_[26046]] }, p$DECB, p$CED, p$EB);
}, window['p$DECB'] = function (jkolm) {
  if (jkolm && jkolm[_[1232]] === _[10186] && jkolm[_[11]]) {
    jkolm[_[11]][_[5815]]({ 'id': -0x2, 'name': _[30681] }), jkolm[_[11]][_[5815]]({ 'id': -0x1, 'name': _[30682] }), p$DE[_[30683]] = jkolm[_[11]];if (window[_[12699]]) window[_[12699]][_[30684]]();
  } else {
    p$DE[_[30685]] = ![];var jighkl = jkolm ? jkolm[_[1232]] : '';window[_[30529]](0x7, _[30686] + jighkl), window['p$BCDE'](_[30687] + jighkl);
  }
}, window['p$BCD'] = function (sroq) {
  sendApi(p$DE[_[30496]], _[30688], { 'partner_id': p$DE[_[24344]], 'uid': p$DE[_[26043]], 'version': p$DE[_[4929]], 'game_pkg': p$DE[_[26044]], 'device': p$DE[_[26046]] }, p$BDC, p$CED, p$EB);
}, window['p$BDC'] = function (stp) {
  p$DE[_[30689]] = ![];if (stp && stp[_[1232]] === _[10186] && stp[_[11]]) {
    for (var jkf = 0x0; jkf < stp[_[11]][_[13]]; jkf++) {
      stp[_[11]][jkf][_[106]] = p$DCB(stp[_[11]][jkf]);
    }p$DE[_[30505]][-0x1] = window[_[30690]](stp[_[11]]), window[_[12699]][_[30691]](-0x1);
  } else {
    var sqrtup = stp ? stp[_[1232]] : '';window[_[30529]](0x8, _[30692] + sqrtup), window['p$BCDE'](_[30693] + sqrtup);
  }
}, window[_[30694]] = function (defghi) {
  sendApi(p$DE[_[30496]], _[30688], { 'partner_id': p$DE[_[24344]], 'uid': p$DE[_[26043]], 'version': p$DE[_[4929]], 'game_pkg': p$DE[_[26044]], 'device': p$DE[_[26046]] }, defghi, p$CED, p$EB);
}, window['p$CBD'] = function (vwyuz, ijnlmk) {
  sendApi(p$DE[_[30496]], _[30695], { 'partner_id': p$DE[_[24344]], 'uid': p$DE[_[26043]], 'version': p$DE[_[4929]], 'game_pkg': p$DE[_[26044]], 'device': p$DE[_[26046]], 'server_group_id': ijnlmk }, p$CDB, p$CED, p$EB);
}, window['p$CDB'] = function (ecgbdf) {
  p$DE[_[30689]] = ![];if (ecgbdf && ecgbdf[_[1232]] === _[10186] && ecgbdf[_[11]] && ecgbdf[_[11]][_[11]]) {
    var hefgid = ecgbdf[_[11]][_[30696]],
        zwy$vx = [];for (var kmi = 0x0; kmi < ecgbdf[_[11]][_[11]][_[13]]; kmi++) {
      ecgbdf[_[11]][_[11]][kmi][_[106]] = p$DCB(ecgbdf[_[11]][_[11]][kmi]), (zwy$vx[_[13]] == 0x0 || ecgbdf[_[11]][_[11]][kmi][_[106]] != 0x0) && (zwy$vx[zwy$vx[_[13]]] = ecgbdf[_[11]][_[11]][kmi]);
    }p$DE[_[30505]][hefgid] = window[_[30690]](zwy$vx), window[_[12699]][_[30691]](hefgid);
  } else {
    var _12043 = ecgbdf ? ecgbdf[_[1232]] : '';window[_[30529]](0x9, _[30697] + _12043), window['p$BCDE'](_[30698] + _12043);
  }
}, window['p$ACED'] = function (fdhige) {
  sendApi(p$DE[_[30496]], _[30699], { 'partner_id': p$DE[_[24344]], 'uid': p$DE[_[26043]], 'version': p$DE[_[4929]], 'game_pkg': p$DE[_[26044]], 'device': p$DE[_[26046]] }, reqServerRecommendCallBack, p$CED, p$EB);
}, window[_[30700]] = function (orpts) {
  p$DE[_[30689]] = ![];if (orpts && orpts[_[1232]] === _[10186] && orpts[_[11]]) {
    for (var xwyvtu = 0x0; xwyvtu < orpts[_[11]][_[13]]; xwyvtu++) {
      orpts[_[11]][xwyvtu][_[106]] = p$DCB(orpts[_[11]][xwyvtu]);
    }p$DE[_[30505]][-0x2] = window[_[30690]](orpts[_[11]]), window[_[12699]][_[30691]](-0x2);
  } else {
    var ehgifj = orpts ? orpts[_[1232]] : '';window[_[30529]](0xa, _[30701] + ehgifj), alert(_[30702] + ehgifj);
  }
}, window[_[30690]] = function (tvruws) {
  return tvruws;
}, window['p$DBC'] = function (inkmlj, xvutyw) {
  inkmlj = inkmlj || p$DE[_[26038]][_[11813]], sendApi(p$DE[_[30496]], _[30703], { 'type': '4', 'game_pkg': p$DE[_[26044]], 'server_id': inkmlj }, xvutyw);
}, window[_[30704]] = function (uqprt, qnosp, cfebgd, qporm) {
  cfebgd = cfebgd || p$DE[_[26038]][_[11813]], sendApi(p$DE[_[30496]], _[30705], { 'type': uqprt, 'game_pkg': qnosp, 'server_id': cfebgd }, qporm);
}, window[_[30706]] = function (fbcge, egcbf) {
  sendApi(p$DE[_[30496]], _[30707], { 'game_pkg': fbcge }, egcbf);
}, window['p$DCB'] = function (pronsq) {
  if (pronsq) {
    if (pronsq[_[106]] == 0x1) {
      if (pronsq[_[30708]] == 0x1) return 0x2;else return 0x1;
    } else return pronsq[_[106]] == 0x0 ? 0x0 : -0x1;
  }return -0x1;
}, window['p$EBCD'] = function (jlihg, z0_$2) {
  p$DE[_[30709]] = { 'step': jlihg, 'server_id': z0_$2 };var sptq = this;p$BDCE({ 'title': _[30710] }), sendApi(p$DE[_[30496]], _[30711], { 'partner_id': p$DE[_[24344]], 'uid': p$DE[_[26043]], 'game_pkg': p$DE[_[26044]], 'server_id': z0_$2, 'platform': p$DE[_[26008]], 'platform_uid': p$DE[_[26045]], 'check_login_time': p$DE[_[30591]], 'check_login_sign': p$DE[_[30590]], 'version_name': p$DE[_[30561]] }, p$EBDC, p$CED, p$EB, function (xywtv) {
    return xywtv[_[1232]] == _[10186] || xywtv[_[78]] == _[30712] || xywtv[_[78]] == _[30713];
  });
}, window['p$EBDC'] = function (_0yz$) {
  var onmqr = this;if (_0yz$ && _0yz$[_[1232]] === _[10186] && _0yz$[_[11]]) {
    var rstupq = p$DE[_[26038]];rstupq[_[30714]] = p$DE[_[30506]], rstupq[_[11796]] = String(_0yz$[_[11]][_[30715]]), rstupq[_[26010]] = parseInt(_0yz$[_[11]][_[874]]);if (_0yz$[_[11]][_[26009]]) rstupq[_[26009]] = parseInt(_0yz$[_[11]][_[26009]]);else rstupq[_[26009]] = parseInt(_0yz$[_[11]][_[11813]]);rstupq[_[30716]] = 0x0, rstupq[_[4734]] = p$DE[_[30622]], rstupq[_[30717]] = _0yz$[_[11]][_[30718]], rstupq[_[30719]] = _0yz$[_[11]][_[30719]];if (_0yz$[_[11]][_[26013]]) rstupq[_[26013]] = parseInt(_0yz$[_[11]][_[26013]]);console[_[482]](_[30720] + JSON[_[4720]](rstupq[_[30719]])), p$DE[_[649]] == 0x1 && rstupq[_[30719]] && rstupq[_[30719]][_[30721]] == 0x1 && (p$DE[_[30722]] = 0x1, window[_[30403]][_[148]]['p$AED']()), p$ECBD();
  } else {
    if (p$DE[_[30709]][_[7384]] >= 0x3) {
      var $xwyz_ = _0yz$ ? _0yz$[_[1232]] : '';window[_[30529]](0xc, _[30723] + $xwyz_), p$EB(JSON[_[4720]](_0yz$)), window['p$BCDE'](_[30724] + $xwyz_);
    } else sendApi(p$DE[_[30496]], _[30572], { 'platform': p$DE[_[30494]], 'partner_id': p$DE[_[24344]], 'token': p$DE[_[30570]], 'game_pkg': p$DE[_[26044]], 'deviceId': p$DE[_[26046]], 'scene': _[30573] + p$DE[_[30504]] }, function (gfhk) {
      if (!gfhk || gfhk[_[1232]] != _[10186]) {
        window['p$BCDE'](_[30589] + gfhk && gfhk[_[1232]]);return;
      }p$DE[_[30590]] = String(gfhk[_[11796]]), p$DE[_[30591]] = String(gfhk[_[874]]), setTimeout(function () {
        p$EBCD(p$DE[_[30709]][_[7384]] + 0x1, p$DE[_[30709]][_[11813]]);
      }, 0x5dc);
    }, p$CED, p$EB, function (rstpoq) {
      return rstpoq[_[1232]] == _[10186] || rstpoq[_[1232]] == _[26385];
    });
  }
}, window['p$ECBD'] = function () {
  ServerLoading[_[148]][_[30614]](p$DE[_[649]]), window['p$CE'] = !![], window['p$EDBC']();
}, window['p$ECDB'] = function () {
  if (window['p$EC'] && window['p$DCE'] && window[_[30512]] && window[_[30513]] && window['p$DEC'] && window['p$DC']) {
    if (!window[_[29886]][_[148]]) {
      console[_[482]](_[30725] + window[_[29886]][_[148]]);var pkonl = wx[_[30726]](),
          lonjk = pkonl[_[799]] ? pkonl[_[799]] : 0x0,
          mpklno = { 'cdn': window['p$DE'][_[4734]], 'spareCdn': window['p$DE'][_[25735]], 'newRegister': window['p$DE'][_[649]], 'wxPC': window['p$DE'][_[25738]], 'wxIOS': window['p$DE'][_[1098]], 'wxAndroid': window['p$DE'][_[11635]], 'wxParam': { 'limitLoad': window['p$DE']['p$ABCED'], 'benchmarkLevel': window['p$DE']['p$ABDCE'], 'wxFrom': window[_[558]][_[29903]] == _[30727] ? 0x1 : 0x0, 'wxSDKVersion': window[_[30404]] }, 'configType': window['p$DE'][_[12245]], 'exposeType': window['p$DE'][_[737]], 'scene': lonjk };new window[_[29886]](mpklno, window['p$DE'][_[101]], window['p$ABCDE']);
    }
  }
}, window['p$EDBC'] = function () {
  if (window['p$EC'] && window['p$DCE'] && window[_[30512]] && window[_[30513]] && window['p$DEC'] && window['p$DC'] && window['p$CE'] && window['p$CD']) {
    p$BDEC();if (!p$ECD) {
      p$ECD = !![];if (!window[_[29886]][_[148]]) window['p$ECDB']();var jglhk = 0x0,
          txwyuv = wx[_[30728]]();txwyuv && (window['p$DE'][_[30459]] && (jglhk = txwyuv[_[318]]), console[_[78]](_[30729] + txwyuv[_[318]] + _[30730] + txwyuv[_[1252]] + _[30731] + txwyuv[_[1254]] + _[30732] + txwyuv[_[1253]] + _[30733] + txwyuv[_[178]] + _[30734] + txwyuv[_[179]]));var hecgfd = {};for (const mnklji in p$DE[_[26038]]) {
        hecgfd[mnklji] = p$DE[_[26038]][mnklji];
      }var giehfj = { 'channel': window['p$DE'][_[26042]], 'account': window['p$DE'][_[26043]], 'userId': window['p$DE'][_[19503]], 'cdn': window['p$DE'][_[4734]], 'data': window['p$DE'][_[11]], 'package': window['p$DE'][_[25736]], 'newRegister': window['p$DE'][_[649]], 'pkgName': window['p$DE'][_[26044]], 'partnerId': window['p$DE'][_[24344]], 'platform_uid': window['p$DE'][_[26045]], 'deviceId': window['p$DE'][_[26046]], 'selectedServer': hecgfd, 'configType': window['p$DE'][_[12245]], 'exposeType': window['p$DE'][_[737]], 'debugUsers': window['p$DE'][_[12648]], 'wxMenuTop': jglhk, 'wxShield': window['p$DE'][_[761]] };if (window[_[30624]]) for (var eidfgh in window[_[30624]]) {
        giehfj[eidfgh] = window[_[30624]][eidfgh];
      }window[_[29886]][_[148]]['p$EDA'](giehfj);if (p$DE[_[26038]] && p$DE[_[26038]][_[11813]]) localStorage[_[485]](_[30593] + p$DE[_[26044]] + p$DE[_[26043]], p$DE[_[26038]][_[11813]]);
    }
  } else console[_[78]](_[30735] + window['p$EC'] + _[30736] + window['p$DCE'] + _[30737] + window[_[30512]] + _[30738] + window[_[30513]] + _[30739] + window['p$DEC'] + _[30740] + window['p$DC'] + _[30741] + window['p$CE'] + _[30742] + window['p$CD']);
};