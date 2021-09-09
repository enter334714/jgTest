var p = wx.$h;
function a_sptqv() {}function a_lmpnok(hdigef, z$0x, qmonpl, fdgbe, hijkgl) {
  function _z012(jkln) {
    var w$y_z = jkln['slice'](0x1, -0x1);return w$y_z in qmonpl ? qmonpl[w$y_z] : '#' === w$y_z['charAt'](0x0) ? 0xffff < (w$y_z = parseInt(w$y_z['substr'](0x1)['replace']('x', '0x'))) ? (w$y_z -= 0x10000, String['fromCharCode'](0xd800 + (w$y_z >> 0xa), 0xdc00 + (0x3ff & w$y_z))) : String['fromCharCode'](w$y_z) : (hijkgl['error']('entity not found:' + jkln), jkln);
  }function xvtys(higefj) {
    var nrops;qornp < higefj && (nrops = hdigef['substring'](qornp, higefj)['replace'](/&#?\w+;/g, _z012), _0$zy1 && prqmon(qornp), fdgbe['characters'](nrops, 0x0, higefj - qornp), qornp = higefj);
  }function prqmon(ytvwz, xwtyzv) {
    for (; dghfie <= ytvwz && (xwtyzv = _01y['exec'](hdigef));) orqtp = xwtyzv['index'], dghfie = orqtp + xwtyzv[0x0]['length'], _0$zy1['lineNumber']++;_0$zy1['columnNumber'] = ytvwz - orqtp + 0x1;
  }for (var orqtp = 0x0, dghfie = 0x0, _01y = /.*(?:\r\n?|\n)|.*$/g, _0$zy1 = fdgbe['locator'], jmknol = [{ 'currentNSMap': z$0x }], xvtr = {}, qornp = 0x0;;) {
    try {
      var tqrvws = hdigef['indexOf']('<', qornp),
          twysvx,
          ilhgjk;if (tqrvws < 0x0) return void (hdigef['substr'](qornp)['match'](/^\s*$/) || (ilhgjk = (twysvx = fdgbe['doc'])['createTextNode'](hdigef['substr'](qornp)), twysvx['appendChild'](ilhgjk), fdgbe['currentElement'] = ilhgjk));switch (qornp < tqrvws && xvtys(tqrvws), hdigef['charAt'](tqrvws + 0x1)) {case '/':
          var nmjilk = hdigef['indexOf']('>', tqrvws + 0x3),
              ropnmq = hdigef['substring'](tqrvws + 0x2, nmjilk),
              ptrvqs = jmknol['pop']();nmjilk < 0x0 ? (ropnmq = hdigef['substring'](tqrvws + 0x2)['replace'](/[\s<].*/, ''), hijkgl['error']('end tag name: ' + ropnmq + ' is not complete:' + ptrvqs['tagName']), nmjilk = tqrvws + 0x1 + ropnmq['length']) : ropnmq['match'](/\s</) && (ropnmq = ropnmq['replace'](/[\s<].*/, ''), hijkgl['error']('end tag name: ' + ropnmq + ' maybe not complete'), nmjilk = tqrvws + 0x1 + ropnmq['length']);var sqptro = ptrvqs['localNSMap'],
              prqom = ptrvqs['tagName'] == ropnmq;if (prqom || ptrvqs['tagName'] && ptrvqs['tagName']['toLowerCase']() == ropnmq['toLowerCase']()) {
            if (fdgbe['endElement'](ptrvqs['uri'], ptrvqs['localName'], ropnmq), sqptro) {
              for (var hglikj in sqptro) fdgbe['endPrefixMapping'](hglikj);
            }prqom || hijkgl['fatalError']('end tag name: ' + ropnmq + ' is not match the current start tagName:' + ptrvqs['tagName']);
          } else jmknol['push'](ptrvqs);nmjilk++;break;case '?':
          _0$zy1 && prqmon(tqrvws), nmjilk = a_nmolkp(hdigef, tqrvws, fdgbe);break;case '!':
          _0$zy1 && prqmon(tqrvws), nmjilk = a_rwvqts(hdigef, tqrvws, fdgbe, hijkgl);break;default:
          _0$zy1 && prqmon(tqrvws);var nkmjlo = new a_ropsn(),
              potsr = jmknol[jmknol['length'] - 0x1]['currentNSMap'],
              nmjilk = a__zx0(hdigef, tqrvws, nkmjlo, potsr, _z012, hijkgl),
              qpstro = nkmjlo['length'];if (!nkmjlo['closed'] && a_vwz$xy(hdigef, nmjilk, nkmjlo['tagName'], xvtr) && (nkmjlo['closed'] = !0x0, qmonpl['nbsp'] || hijkgl['warning']('unclosed xml attribute')), _0$zy1 && qpstro) {
            for (var yxwzvt = a_zwyv$x(_0$zy1, {}), xvyztw = 0x0; xvyztw < qpstro; xvyztw++) {
              var kilhg = nkmjlo[xvyztw];prqmon(kilhg['offset']), kilhg['locator'] = a_zwyv$x(_0$zy1, {});
            }fdgbe['locator'] = yxwzvt, a_$_wzx(nkmjlo, fdgbe, potsr) && jmknol['push'](nkmjlo), fdgbe['locator'] = _0$zy1;
          } else a_$_wzx(nkmjlo, fdgbe, potsr) && jmknol['push'](nkmjlo);'http://www.w3.org/1999/xhtml' !== nkmjlo['uri'] || nkmjlo['closed'] ? nmjilk++ : nmjilk = a_eacbfd(hdigef, nmjilk, nkmjlo['tagName'], _z012, fdgbe);}
    } catch (nkjmli) {
      hijkgl['error']('element parse error: ' + nkjmli), nmjilk = -0x1;
    }qornp < nmjilk ? qornp = nmjilk : xvtys(Math['max'](tqrvws, qornp) + 0x1);
  }
}function a_zwyv$x(qmnrpo, $z0) {
  return $z0['lineNumber'] = qmnrpo['lineNumber'], $z0['columnNumber'] = qmnrpo['columnNumber'], $z0;
}function a__zx0(v$xyw, $3_02, cbedf, ijmlkn, lnjk, _01) {
  for (var hjilmk, orqnpm = ++$3_02, kifhj = a_rtxws;;) {
    var xvtrs = v$xyw['charAt'](orqnpm);switch (xvtrs) {case '=':
        if (kifhj === a_qsronp) hjilmk = v$xyw['slice']($3_02, orqnpm), kifhj = a_psqt;else {
          if (kifhj !== a_kjhigl) throw new Error('attribute equal must after attrName');kifhj = a_psqt;
        }break;case '\x27':case '\x22':
        if (kifhj === a_psqt || kifhj === a_qsronp) {
          if (kifhj === a_qsronp && (_01['warning']('attribute value must after "="'), hjilmk = v$xyw['slice']($3_02, orqnpm)), !(0x0 < (orqnpm = v$xyw['indexOf'](xvtrs, $3_02 = orqnpm + 0x1)))) throw new Error('attribute value no end \'' + xvtrs + '\' match');tvwsx = v$xyw['slice']($3_02, orqnpm)['replace'](/&#?\w+;/g, lnjk), cbedf['add'](hjilmk, tvwsx, $3_02 - 0x1), kifhj = a_inlkjm;
        } else {
          if (kifhj != a_moljk) throw new Error('attribute value must after "="');tvwsx = v$xyw['slice']($3_02, orqnpm)['replace'](/&#?\w+;/g, lnjk), cbedf['add'](hjilmk, tvwsx, $3_02), _01['warning']('attribute "' + hjilmk + '" missed start quot(' + xvtrs + ')!!'), $3_02 = orqnpm + 0x1, kifhj = a_inlkjm;
        }break;case '/':
        switch (kifhj) {case a_rtxws:
            cbedf['setTagName'](v$xyw['slice']($3_02, orqnpm));case a_inlkjm:case a_jef:case a__z0y$1:
            kifhj = a__z0y$1, cbedf['closed'] = !0x0;case a_moljk:case a_qsronp:case a_kjhigl:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _01['error']('unexpected end of input'), kifhj == a_rtxws && cbedf['setTagName'](v$xyw['slice']($3_02, orqnpm)), orqnpm;case '>':
        switch (kifhj) {case a_rtxws:
            cbedf['setTagName'](v$xyw['slice']($3_02, orqnpm));case a_inlkjm:case a_jef:case a__z0y$1:
            break;case a_moljk:case a_qsronp:
            '/' === (tvwsx = v$xyw['slice']($3_02, orqnpm))['slice'](-0x1) && (cbedf['closed'] = !0x0, tvwsx = tvwsx['slice'](0x0, -0x1));case a_kjhigl:
            kifhj === a_kjhigl && (tvwsx = hjilmk), kifhj == a_moljk ? (_01['warning']('attribute "' + tvwsx + '" missed quot(")!!'), cbedf['add'](hjilmk, tvwsx['replace'](/&#?\w+;/g, lnjk), $3_02)) : ('http://www.w3.org/1999/xhtml' === ijmlkn[''] && tvwsx['match'](/^(?:disabled|checked|selected)$/i) || _01['warning']('attribute "' + tvwsx + '" missed value!! "' + tvwsx + '" instead!!'), cbedf['add'](tvwsx, tvwsx, $3_02));break;case a_psqt:
            throw new Error('attribute value missed!!');}return orqnpm;case '\u0080':
        xvtrs = '\x20';default:
        if (xvtrs <= '\x20') switch (kifhj) {case a_rtxws:
            cbedf['setTagName'](v$xyw['slice']($3_02, orqnpm)), kifhj = a_jef;break;case a_qsronp:
            hjilmk = v$xyw['slice']($3_02, orqnpm), kifhj = a_kjhigl;break;case a_moljk:
            var tvwsx = v$xyw['slice']($3_02, orqnpm)['replace'](/&#?\w+;/g, lnjk);_01['warning']('attribute "' + tvwsx + '" missed quot(")!!'), cbedf['add'](hjilmk, tvwsx, $3_02);case a_inlkjm:
            kifhj = a_jef;} else switch (kifhj) {case a_kjhigl:
            cbedf['tagName'], 'http://www.w3.org/1999/xhtml' === ijmlkn[''] && hjilmk['match'](/^(?:disabled|checked|selected)$/i) || _01['warning']('attribute "' + hjilmk + '" missed value!! "' + hjilmk + '" instead2!!'), cbedf['add'](hjilmk, hjilmk, $3_02), $3_02 = orqnpm, kifhj = a_qsronp;break;case a_inlkjm:
            _01['warning']('attribute space is required"' + hjilmk + '\x22!!');case a_jef:
            kifhj = a_qsronp, $3_02 = orqnpm;break;case a_psqt:
            kifhj = a_moljk, $3_02 = orqnpm;break;case a__z0y$1:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}orqnpm++;
  }
}function a_$_wzx(txvwz, _23, fgjihk) {
  for (var swtrvx = txvwz['tagName'], _10z$ = null, hfkgi = txvwz['length']; hfkgi--;) {
    var begfd = txvwz[hfkgi],
        twvqrs = begfd['qName'],
        xz0$y_ = begfd['value'],
        fdghie;twvqrs = 0x0 < (xwtrsv = twvqrs['indexOf'](':')) ? (xtzvyw = begfd['prefix'] = twvqrs['slice'](0x0, xwtrsv), fdghie = twvqrs['slice'](xwtrsv + 0x1), 'xmlns' === xtzvyw && fdghie) : (xtzvyw = null, 'xmlns' === (fdghie = twvqrs) && ''), begfd['localName'] = fdghie, !0x1 !== twvqrs && (null == _10z$ && (_10z$ = {}, a_onqmpr(fgjihk, fgjihk = {})), fgjihk[twvqrs] = _10z$[twvqrs] = xz0$y_, begfd['uri'] = 'http://www.w3.org/2000/xmlns/', _23['startPrefixMapping'](twvqrs, xz0$y_));
  }for (hfkgi = txvwz['length']; hfkgi--;) (xtzvyw = (begfd = txvwz[hfkgi])['prefix']) && ('xml' === xtzvyw && (begfd['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== xtzvyw && (begfd['uri'] = fgjihk[xtzvyw || '']));var xwtrsv;fdghie = 0x0 < (xwtrsv = swtrvx['indexOf'](':')) ? (xtzvyw = txvwz['prefix'] = swtrvx['slice'](0x0, xwtrsv), txvwz['localName'] = swtrvx['slice'](xwtrsv + 0x1)) : (xtzvyw = null, txvwz['localName'] = swtrvx);var fhcg = txvwz['uri'] = fgjihk[xtzvyw || ''];if (_23['startElement'](fhcg, fdghie, swtrvx, txvwz), !txvwz['closed']) return txvwz['currentNSMap'] = fgjihk, txvwz['localNSMap'] = _10z$, !0x0;if (_23['endElement'](fhcg, fdghie, swtrvx), _10z$) {
    for (var xtzvyw in _10z$) _23['endPrefixMapping'](xtzvyw);
  }
}function a_eacbfd(gkfhij, ifdhge, rnsqo, pmoqn, higjfe) {
  if (/^(?:script|textarea)$/i['test'](rnsqo)) {
    var trsvp = gkfhij['indexOf']('</' + rnsqo + '>', ifdhge),
        gkfhij = gkfhij['substring'](ifdhge + 0x1, trsvp);if (/[&<]/['test'](gkfhij)) return (/^script$/i['test'](rnsqo) || (gkfhij = gkfhij['replace'](/&#?\w+;/g, pmoqn)), higjfe['characters'](gkfhij, 0x0, gkfhij['length']), trsvp
    );
  }return ifdhge + 0x1;
}function a_vwz$xy(zx$y_w, nomrqp, spnqr, cfbead) {
  var vtyxzw = cfbead[spnqr];return null == vtyxzw && ((vtyxzw = zx$y_w['lastIndexOf']('</' + spnqr + '>')) < nomrqp && (vtyxzw = zx$y_w['lastIndexOf']('</' + spnqr)), cfbead[spnqr] = vtyxzw), vtyxzw < nomrqp;
}function a_onqmpr(khmil, onmlq) {
  for (var vstyw in khmil) onmlq[vstyw] = khmil[vstyw];
}function a_rwvqts(wy$, ikfjg, nlojmk, rvwts) {
  var mlkpn = wy$['charAt'](ikfjg + 0x2);if ('-' === mlkpn) return '-' !== wy$['charAt'](ikfjg + 0x3) ? -0x1 : ikfjg < (rpvq = wy$['indexOf']('-->', ikfjg + 0x4)) ? (nlojmk['comment'](wy$, ikfjg + 0x4, rpvq - ikfjg - 0x4), rpvq + 0x3) : (rvwts['error']('Unclosed comment'), -0x1);if ('CDATA[' == wy$['substr'](ikfjg + 0x3, 0x6)) {
    var rpvq = wy$['indexOf'](']]>', ikfjg + 0x9);return nlojmk['startCDATA'](), nlojmk['characters'](wy$, ikfjg + 0x9, rpvq - ikfjg - 0x9), nlojmk['endCDATA'](), rpvq + 0x3;
  }mlkpn = a_ihgjk(wy$, ikfjg), rvwts = mlkpn['length'];if (0x1 < rvwts && /!doctype/i['test'](mlkpn[0x0][0x0])) return rpvq = mlkpn[0x1][0x0], wy$ = 0x3 < rvwts && /^public$/i['test'](mlkpn[0x2][0x0]) && mlkpn[0x3][0x0], ikfjg = 0x4 < rvwts && mlkpn[0x4][0x0], rvwts = mlkpn[rvwts - 0x1], (nlojmk['startDTD'](rpvq, wy$ && wy$['replace'](/^(['"])(.*?)\1$/, '$2'), ikfjg && ikfjg['replace'](/^(['"])(.*?)\1$/, '$2')), nlojmk['endDTD'](), rvwts['index'] + rvwts[0x0]['length']);return -0x1;
}function a_nmolkp(xy0$_z, klmhji, ehdif) {
  var $yx_z0 = xy0$_z['indexOf']('?>', klmhji);if ($yx_z0) return klmhji = xy0$_z['substring'](klmhji, $yx_z0)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), klmhji ? (klmhji[0x0]['length'], ehdif['processingInstruction'](klmhji[0x1], klmhji[0x2]), $yx_z0 + 0x2) : -0x1;return -0x1;
}function a_ropsn() {}function a_nqprso(lkjonm, poqrmn) {
  return lkjonm['__proto__'] = poqrmn, lkjonm;
}function a_ihgjk(plkmno, torqsp) {
  var _2z01$,
      jfeh = [],
      vx$wzy = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (vx$wzy['lastIndex'] = torqsp, vx$wzy['exec'](plkmno); _2z01$ = vx$wzy['exec'](plkmno);) if (jfeh['push'](_2z01$), _2z01$[0x1]) return jfeh;
}var a_vxtyz = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_efhgdi = new RegExp('[\\-\\.0-9' + a_vxtyz['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_wtxyzv = new RegExp('^' + a_vxtyz['source'] + a_efhgdi['source'] + '*(?::' + a_vxtyz['source'] + a_efhgdi['source'] + '*)?$'),
    a_rtxws = 0x0,
    a_qsronp = 0x1,
    a_kjhigl = 0x2,
    a_psqt = 0x3,
    a_moljk = 0x4,
    a_inlkjm = 0x5,
    a_jef = 0x6,
    a__z0y$1 = 0x7;a_sptqv['prototype'] = { 'parse': function (jkmlih, xy_$0, hdcgef) {
    var ty = this['domBuilder'];ty['startDocument'](), a_onqmpr(xy_$0, xy_$0 = {}), a_lmpnok(jkmlih, xy_$0, hdcgef, ty, this['errorHandler']), ty['endDocument']();
  } }, a_ropsn['prototype'] = { 'setTagName': function (fbgecd) {
    if (!a_wtxyzv['test'](fbgecd)) throw new Error('invalid tagName:' + fbgecd);this['tagName'] = fbgecd;
  }, 'add': function (dbcefa, gfdch, jmkol) {
    if (!a_wtxyzv['test'](dbcefa)) throw new Error('invalid attribute:' + dbcefa);this[this['length']++] = { 'qName': dbcefa, 'value': gfdch, 'offset': jmkol };
  }, 'length': 0x0, 'getLocalName': function (prqsto) {
    return this[prqsto]['localName'];
  }, 'getLocator': function (xswvtr) {
    return this[xswvtr]['locator'];
  }, 'getQName': function (nmprqo) {
    return this[nmprqo]['qName'];
  }, 'getURI': function (lnoqmp) {
    return this[lnoqmp]['uri'];
  }, 'getValue': function ($z_210) {
    return this[$z_210]['value'];
  } }, a_nqprso({}, a_nqprso['prototype']) instanceof a_nqprso || (a_nqprso = function (tpvsrq, mpokln) {
  function z12$0_() {}for (mpokln in z12$0_['prototype'] = mpokln, z12$0_ = new z12$0_(), tpvsrq) z12$0_[mpokln] = tpvsrq[mpokln];return z12$0_;
}), exports['XMLReader'] = a_sptqv;