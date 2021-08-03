var _ = wx.y$;
function _dyx0_z$() {}function _d_1y0z(vzuy, $302, cedfgh, vxyuzw, pnqmor) {
  function wsrvu(ghki) {
    var srpnq = ghki['slice'](0x1, -0x1);return srpnq in cedfgh ? cedfgh[srpnq] : '#' === srpnq['charAt'](0x0) ? 0xffff < (srpnq = parseInt(srpnq['substr'](0x1)['replace']('x', '0x'))) ? (srpnq -= 0x10000, String['fromCharCode'](0xd800 + (srpnq >> 0xa), 0xdc00 + (0x3ff & srpnq))) : String['fromCharCode'](srpnq) : (pnqmor['error']('entity not found:' + ghki), ghki);
  }function gklj(efchdg) {
    var x$y0_z;gkijlh < efchdg && (x$y0_z = vzuy['substring'](gkijlh, efchdg)['replace'](/&#?\w+;/g, wsrvu), $xzw_y && sqrtop(gkijlh), vxyuzw['characters'](x$y0_z, 0x0, efchdg - gkijlh), gkijlh = efchdg);
  }function sqrtop(dgfcb, cfae) {
    for (; opqlm <= dgfcb && (cfae = npmkol['exec'](vzuy));) wrust = cfae['index'], opqlm = wrust + cfae[0x0]['length'], $xzw_y['lineNumber']++;$xzw_y['columnNumber'] = dgfcb - wrust + 0x1;
  }for (var wrust = 0x0, opqlm = 0x0, npmkol = /.*(?:\r\n?|\n)|.*$/g, $xzw_y = vxyuzw['locator'], uwtsx = [{ 'currentNSMap': $302 }], uwvrt = {}, gkijlh = 0x0;;) {
    try {
      var edfhgc = vzuy['indexOf']('<', gkijlh),
          gjhfie,
          $1320_;if (edfhgc < 0x0) return void (vzuy['substr'](gkijlh)['match'](/^\s*$/) || ($1320_ = (gjhfie = vxyuzw['doc'])['createTextNode'](vzuy['substr'](gkijlh)), gjhfie['appendChild']($1320_), vxyuzw['currentElement'] = $1320_));switch (gkijlh < edfhgc && gklj(edfhgc), vzuy['charAt'](edfhgc + 0x1)) {case '/':
          var lnkij = vzuy['indexOf']('>', edfhgc + 0x3),
              svtqu = vzuy['substring'](edfhgc + 0x2, lnkij),
              hefdgc = uwtsx['pop']();lnkij < 0x0 ? (svtqu = vzuy['substring'](edfhgc + 0x2)['replace'](/[\s<].*/, ''), pnqmor['error']('end tag name: ' + svtqu + ' is not complete:' + hefdgc['tagName']), lnkij = edfhgc + 0x1 + svtqu['length']) : svtqu['match'](/\s</) && (svtqu = svtqu['replace'](/[\s<].*/, ''), pnqmor['error']('end tag name: ' + svtqu + ' maybe not complete'), lnkij = edfhgc + 0x1 + svtqu['length']);var hjilg = hefdgc['localNSMap'],
              posrq = hefdgc['tagName'] == svtqu;if (posrq || hefdgc['tagName'] && hefdgc['tagName']['toLowerCase']() == svtqu['toLowerCase']()) {
            if (vxyuzw['endElement'](hefdgc['uri'], hefdgc['localName'], svtqu), hjilg) {
              for (var niklj in hjilg) vxyuzw['endPrefixMapping'](niklj);
            }posrq || pnqmor['fatalError']('end tag name: ' + svtqu + ' is not match the current start tagName:' + hefdgc['tagName']);
          } else uwtsx['push'](hefdgc);lnkij++;break;case '?':
          $xzw_y && sqrtop(edfhgc), lnkij = _domnlj(vzuy, edfhgc, vxyuzw);break;case '!':
          $xzw_y && sqrtop(edfhgc), lnkij = _diklnjm(vzuy, edfhgc, vxyuzw, pnqmor);break;default:
          $xzw_y && sqrtop(edfhgc);var nqorp = new _dgiefdh(),
              rvsqut = uwtsx[uwtsx['length'] - 0x1]['currentNSMap'],
              lnkij = _dspnrq(vzuy, edfhgc, nqorp, rvsqut, wsrvu, pnqmor),
              urstvw = nqorp['length'];if (!nqorp['closed'] && _domprn(vzuy, lnkij, nqorp['tagName'], uwvrt) && (nqorp['closed'] = !0x0, cedfgh['nbsp'] || pnqmor['warning']('unclosed xml attribute')), $xzw_y && urstvw) {
            for (var z$y_x0 = _dabdce($xzw_y, {}), utv = 0x0; utv < urstvw; utv++) {
              var txywuv = nqorp[utv];sqrtop(txywuv['offset']), txywuv['locator'] = _dabdce($xzw_y, {});
            }vxyuzw['locator'] = z$y_x0, _dxyuzwv(nqorp, vxyuzw, rvsqut) && uwtsx['push'](nqorp), vxyuzw['locator'] = $xzw_y;
          } else _dxyuzwv(nqorp, vxyuzw, rvsqut) && uwtsx['push'](nqorp);'http://www.w3.org/1999/xhtml' !== nqorp['uri'] || nqorp['closed'] ? lnkij++ : lnkij = _dkgihl(vzuy, lnkij, nqorp['tagName'], wsrvu, vxyuzw);}
    } catch (fdhgec) {
      pnqmor['error']('element parse error: ' + fdhgec), lnkij = -0x1;
    }gkijlh < lnkij ? gkijlh = lnkij : gklj(Math['max'](edfhgc, gkijlh) + 0x1);
  }
}function _dabdce(twrus, $zxwyv) {
  return $zxwyv['lineNumber'] = twrus['lineNumber'], $zxwyv['columnNumber'] = twrus['columnNumber'], $zxwyv;
}function _dspnrq(stxvu, edgcfb, npq, ywuvzx, wzxuyv, utvxyw) {
  for (var mikhjl, vw$zx = ++edgcfb, cdbaf = _dy1$_;;) {
    var jhkilm = stxvu['charAt'](vw$zx);switch (jhkilm) {case '=':
        if (cdbaf === _ddhcgfe) mikhjl = stxvu['slice'](edgcfb, vw$zx), cdbaf = _dmlijkh;else {
          if (cdbaf !== _dqnormp) throw new Error('attribute equal must after attrName');cdbaf = _dmlijkh;
        }break;case '\x27':case '\x22':
        if (cdbaf === _dmlijkh || cdbaf === _ddhcgfe) {
          if (cdbaf === _ddhcgfe && (utvxyw['warning']('attribute value must after "="'), mikhjl = stxvu['slice'](edgcfb, vw$zx)), !(0x0 < (vw$zx = stxvu['indexOf'](jhkilm, edgcfb = vw$zx + 0x1)))) throw new Error('attribute value no end \'' + jhkilm + '\' match');zyxu = stxvu['slice'](edgcfb, vw$zx)['replace'](/&#?\w+;/g, wzxuyv), npq['add'](mikhjl, zyxu, edgcfb - 0x1), cdbaf = _drsqtuv;
        } else {
          if (cdbaf != _dlmnpko) throw new Error('attribute value must after "="');zyxu = stxvu['slice'](edgcfb, vw$zx)['replace'](/&#?\w+;/g, wzxuyv), npq['add'](mikhjl, zyxu, edgcfb), utvxyw['warning']('attribute "' + mikhjl + '" missed start quot(' + jhkilm + ')!!'), edgcfb = vw$zx + 0x1, cdbaf = _drsqtuv;
        }break;case '/':
        switch (cdbaf) {case _dy1$_:
            npq['setTagName'](stxvu['slice'](edgcfb, vw$zx));case _drsqtuv:case _dkpnmol:case _dgilhj:
            cdbaf = _dgilhj, npq['closed'] = !0x0;case _dlmnpko:case _ddhcgfe:case _dqnormp:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return utvxyw['error']('unexpected end of input'), cdbaf == _dy1$_ && npq['setTagName'](stxvu['slice'](edgcfb, vw$zx)), vw$zx;case '>':
        switch (cdbaf) {case _dy1$_:
            npq['setTagName'](stxvu['slice'](edgcfb, vw$zx));case _drsqtuv:case _dkpnmol:case _dgilhj:
            break;case _dlmnpko:case _ddhcgfe:
            '/' === (zyxu = stxvu['slice'](edgcfb, vw$zx))['slice'](-0x1) && (npq['closed'] = !0x0, zyxu = zyxu['slice'](0x0, -0x1));case _dqnormp:
            cdbaf === _dqnormp && (zyxu = mikhjl), cdbaf == _dlmnpko ? (utvxyw['warning']('attribute "' + zyxu + '" missed quot(")!!'), npq['add'](mikhjl, zyxu['replace'](/&#?\w+;/g, wzxuyv), edgcfb)) : ('http://www.w3.org/1999/xhtml' === ywuvzx[''] && zyxu['match'](/^(?:disabled|checked|selected)$/i) || utvxyw['warning']('attribute "' + zyxu + '" missed value!! "' + zyxu + '" instead!!'), npq['add'](zyxu, zyxu, edgcfb));break;case _dmlijkh:
            throw new Error('attribute value missed!!');}return vw$zx;case '\u0080':
        jhkilm = '\x20';default:
        if (jhkilm <= '\x20') switch (cdbaf) {case _dy1$_:
            npq['setTagName'](stxvu['slice'](edgcfb, vw$zx)), cdbaf = _dkpnmol;break;case _ddhcgfe:
            mikhjl = stxvu['slice'](edgcfb, vw$zx), cdbaf = _dqnormp;break;case _dlmnpko:
            var zyxu = stxvu['slice'](edgcfb, vw$zx)['replace'](/&#?\w+;/g, wzxuyv);utvxyw['warning']('attribute "' + zyxu + '" missed quot(")!!'), npq['add'](mikhjl, zyxu, edgcfb);case _drsqtuv:
            cdbaf = _dkpnmol;} else switch (cdbaf) {case _dqnormp:
            npq['tagName'], 'http://www.w3.org/1999/xhtml' === ywuvzx[''] && mikhjl['match'](/^(?:disabled|checked|selected)$/i) || utvxyw['warning']('attribute "' + mikhjl + '" missed value!! "' + mikhjl + '" instead2!!'), npq['add'](mikhjl, mikhjl, edgcfb), edgcfb = vw$zx, cdbaf = _ddhcgfe;break;case _drsqtuv:
            utvxyw['warning']('attribute space is required"' + mikhjl + '\x22!!');case _dkpnmol:
            cdbaf = _ddhcgfe, edgcfb = vw$zx;break;case _dmlijkh:
            cdbaf = _dlmnpko, edgcfb = vw$zx;break;case _dgilhj:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}vw$zx++;
  }
}function _dxyuzwv(kljmn, tqursv, sponr) {
  for (var pmrnoq = kljmn['tagName'], hlimj = null, prnqso = kljmn['length']; prnqso--;) {
    var gdhefi = kljmn[prnqso],
        gj = gdhefi['qName'],
        pnrqo = gdhefi['value'],
        mnil;gj = 0x0 < (qpsr = gj['indexOf'](':')) ? (fade = gdhefi['prefix'] = gj['slice'](0x0, qpsr), mnil = gj['slice'](qpsr + 0x1), 'xmlns' === fade && mnil) : (fade = null, 'xmlns' === (mnil = gj) && ''), gdhefi['localName'] = mnil, !0x1 !== gj && (null == hlimj && (hlimj = {}, _dsuwvtr(sponr, sponr = {})), sponr[gj] = hlimj[gj] = pnrqo, gdhefi['uri'] = 'http://www.w3.org/2000/xmlns/', tqursv['startPrefixMapping'](gj, pnrqo));
  }for (prnqso = kljmn['length']; prnqso--;) (fade = (gdhefi = kljmn[prnqso])['prefix']) && ('xml' === fade && (gdhefi['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== fade && (gdhefi['uri'] = sponr[fade || '']));var qpsr;mnil = 0x0 < (qpsr = pmrnoq['indexOf'](':')) ? (fade = kljmn['prefix'] = pmrnoq['slice'](0x0, qpsr), kljmn['localName'] = pmrnoq['slice'](qpsr + 0x1)) : (fade = null, kljmn['localName'] = pmrnoq);var kilmj = kljmn['uri'] = sponr[fade || ''];if (tqursv['startElement'](kilmj, mnil, pmrnoq, kljmn), !kljmn['closed']) return kljmn['currentNSMap'] = sponr, kljmn['localNSMap'] = hlimj, !0x0;if (tqursv['endElement'](kilmj, mnil, pmrnoq), hlimj) {
    for (var fade in hlimj) tqursv['endPrefixMapping'](fade);
  }
}function _dkgihl(trqspu, z_12, mklopn, fcegdh, jkgif) {
  if (/^(?:script|textarea)$/i['test'](mklopn)) {
    var z10 = trqspu['indexOf']('</' + mklopn + '>', z_12),
        trqspu = trqspu['substring'](z_12 + 0x1, z10);if (/[&<]/['test'](trqspu)) return (/^script$/i['test'](mklopn) || (trqspu = trqspu['replace'](/&#?\w+;/g, fcegdh)), jkgif['characters'](trqspu, 0x0, trqspu['length']), z10
    );
  }return z_12 + 0x1;
}function _domprn(noqrps, jklgh, $xzvwy, lmnjk) {
  var ljhim = lmnjk[$xzvwy];return null == ljhim && ((ljhim = noqrps['lastIndexOf']('</' + $xzvwy + '>')) < jklgh && (ljhim = noqrps['lastIndexOf']('</' + $xzvwy)), lmnjk[$xzvwy] = ljhim), ljhim < jklgh;
}function _dsuwvtr(gfhcd, porst) {
  for (var imkln in gfhcd) porst[imkln] = gfhcd[imkln];
}function _diklnjm(lkmij, fhgki, y0$z, hgcfed) {
  var igkfj = lkmij['charAt'](fhgki + 0x2);if ('-' === igkfj) return '-' !== lkmij['charAt'](fhgki + 0x3) ? -0x1 : fhgki < (lopm = lkmij['indexOf']('-->', fhgki + 0x4)) ? (y0$z['comment'](lkmij, fhgki + 0x4, lopm - fhgki - 0x4), lopm + 0x3) : (hgcfed['error']('Unclosed comment'), -0x1);if ('CDATA[' == lkmij['substr'](fhgki + 0x3, 0x6)) {
    var lopm = lkmij['indexOf'](']]>', fhgki + 0x9);return y0$z['startCDATA'](), y0$z['characters'](lkmij, fhgki + 0x9, lopm - fhgki - 0x9), y0$z['endCDATA'](), lopm + 0x3;
  }igkfj = _dvzy$w(lkmij, fhgki), hgcfed = igkfj['length'];if (0x1 < hgcfed && /!doctype/i['test'](igkfj[0x0][0x0])) return lopm = igkfj[0x1][0x0], lkmij = 0x3 < hgcfed && /^public$/i['test'](igkfj[0x2][0x0]) && igkfj[0x3][0x0], fhgki = 0x4 < hgcfed && igkfj[0x4][0x0], hgcfed = igkfj[hgcfed - 0x1], (y0$z['startDTD'](lopm, lkmij && lkmij['replace'](/^(['"])(.*?)\1$/, '$2'), fhgki && fhgki['replace'](/^(['"])(.*?)\1$/, '$2')), y0$z['endDTD'](), hgcfed['index'] + hgcfed[0x0]['length']);return -0x1;
}function _domnlj(bcad, ghfecd, degbcf) {
  var lhjigk = bcad['indexOf']('?>', ghfecd);if (lhjigk) return ghfecd = bcad['substring'](ghfecd, lhjigk)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), ghfecd ? (ghfecd[0x0]['length'], degbcf['processingInstruction'](ghfecd[0x1], ghfecd[0x2]), lhjigk + 0x2) : -0x1;return -0x1;
}function _dgiefdh() {}function _dwvsru(twyv, onpqrm) {
  return twyv['__proto__'] = onpqrm, twyv;
}function _dvzy$w(urpqt, hcgdef) {
  var $y1z_0,
      sqvur = [],
      utrswv = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (utrswv['lastIndex'] = hcgdef, utrswv['exec'](urpqt); $y1z_0 = utrswv['exec'](urpqt);) if (sqvur['push']($y1z_0), $y1z_0[0x1]) return sqvur;
}var _dfhgdc = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dmnjli = new RegExp('[\\-\\.0-9' + _dfhgdc['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _d_10z2$ = new RegExp('^' + _dfhgdc['source'] + _dmnjli['source'] + '*(?::' + _dfhgdc['source'] + _dmnjli['source'] + '*)?$'),
    _dy1$_ = 0x0,
    _ddhcgfe = 0x1,
    _dqnormp = 0x2,
    _dmlijkh = 0x3,
    _dlmnpko = 0x4,
    _drsqtuv = 0x5,
    _dkpnmol = 0x6,
    _dgilhj = 0x7;_dyx0_z$['prototype'] = { 'parse': function (bac, zuvx, jmnok) {
    var trq = this['domBuilder'];trq['startDocument'](), _dsuwvtr(zuvx, zuvx = {}), _d_1y0z(bac, zuvx, jmnok, trq, this['errorHandler']), trq['endDocument']();
  } }, _dgiefdh['prototype'] = { 'setTagName': function (adecf) {
    if (!_d_10z2$['test'](adecf)) throw new Error('invalid tagName:' + adecf);this['tagName'] = adecf;
  }, 'add': function (vrwsu, qrvsut, bfgcd) {
    if (!_d_10z2$['test'](vrwsu)) throw new Error('invalid attribute:' + vrwsu);this[this['length']++] = { 'qName': vrwsu, 'value': qrvsut, 'offset': bfgcd };
  }, 'length': 0x0, 'getLocalName': function (hkimlj) {
    return this[hkimlj]['localName'];
  }, 'getLocator': function (wytx) {
    return this[wytx]['locator'];
  }, 'getQName': function (hfjkg) {
    return this[hfjkg]['qName'];
  }, 'getURI': function (gcedfb) {
    return this[gcedfb]['uri'];
  }, 'getValue': function (vru) {
    return this[vru]['value'];
  } }, _dwvsru({}, _dwvsru['prototype']) instanceof _dwvsru || (_dwvsru = function (nrpoqs, knpom) {
  function z0_21() {}for (knpom in z0_21['prototype'] = knpom, z0_21 = new z0_21(), nrpoqs) z0_21[knpom] = nrpoqs[knpom];return z0_21;
}), exports['XMLReader'] = _dyx0_z$;