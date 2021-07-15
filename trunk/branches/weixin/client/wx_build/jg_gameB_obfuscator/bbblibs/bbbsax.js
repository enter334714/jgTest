var _ = wx.y$;
function _dponqr() {}function _dkhjilg(utpsq, lhkji, txvwus, likjhg, sxutw) {
  function gkjhi($z20) {
    var molpk = $z20['slice'](0x1, -0x1);return molpk in txvwus ? txvwus[molpk] : '#' === molpk['charAt'](0x0) ? 0xffff < (molpk = parseInt(molpk['substr'](0x1)['replace']('x', '0x'))) ? (molpk -= 0x10000, String['fromCharCode'](0xd800 + (molpk >> 0xa), 0xdc00 + (0x3ff & molpk))) : String['fromCharCode'](molpk) : (sxutw['error']('entity not found:' + $z20), $z20);
  }function jmikn(rptoqs) {
    var sqpnor;zy$xwv < rptoqs && (sqpnor = utpsq['substring'](zy$xwv, rptoqs)['replace'](/&#?\w+;/g, gkjhi), xtuyv && hgdif(zy$xwv), likjhg['characters'](sqpnor, 0x0, rptoqs - zy$xwv), zy$xwv = rptoqs);
  }function hgdif(wy$zx_, noqlp) {
    for (; jilm <= wy$zx_ && (noqlp = rvsqtu['exec'](utpsq));) fgjhe = noqlp['index'], jilm = fgjhe + noqlp[0x0]['length'], xtuyv['lineNumber']++;xtuyv['columnNumber'] = wy$zx_ - fgjhe + 0x1;
  }for (var fgjhe = 0x0, jilm = 0x0, rvsqtu = /.*(?:\r\n?|\n)|.*$/g, xtuyv = likjhg['locator'], yvxz$ = [{ 'currentNSMap': lhkji }], zvwyxu = {}, zy$xwv = 0x0;;) {
    try {
      var _xzyw = utpsq['indexOf']('<', zy$xwv),
          wsutr,
          ifdegh;if (_xzyw < 0x0) return void (utpsq['substr'](zy$xwv)['match'](/^\s*$/) || (ifdegh = (wsutr = likjhg['doc'])['createTextNode'](utpsq['substr'](zy$xwv)), wsutr['appendChild'](ifdegh), likjhg['currentElement'] = ifdegh));switch (zy$xwv < _xzyw && jmikn(_xzyw), utpsq['charAt'](_xzyw + 0x1)) {case '/':
          var jmlhi = utpsq['indexOf']('>', _xzyw + 0x3),
              gjhife = utpsq['substring'](_xzyw + 0x2, jmlhi),
              nljmik = yvxz$['pop']();jmlhi < 0x0 ? (gjhife = utpsq['substring'](_xzyw + 0x2)['replace'](/[\s<].*/, ''), sxutw['error']('end tag name: ' + gjhife + ' is not complete:' + nljmik['tagName']), jmlhi = _xzyw + 0x1 + gjhife['length']) : gjhife['match'](/\s</) && (gjhife = gjhife['replace'](/[\s<].*/, ''), sxutw['error']('end tag name: ' + gjhife + ' maybe not complete'), jmlhi = _xzyw + 0x1 + gjhife['length']);var otsqpr = nljmik['localNSMap'],
              kolnj = nljmik['tagName'] == gjhife;if (kolnj || nljmik['tagName'] && nljmik['tagName']['toLowerCase']() == gjhife['toLowerCase']()) {
            if (likjhg['endElement'](nljmik['uri'], nljmik['localName'], gjhife), otsqpr) {
              for (var x0z$ in otsqpr) likjhg['endPrefixMapping'](x0z$);
            }kolnj || sxutw['fatalError']('end tag name: ' + gjhife + ' is not match the current start tagName:' + nljmik['tagName']);
          } else yvxz$['push'](nljmik);jmlhi++;break;case '?':
          xtuyv && hgdif(_xzyw), jmlhi = _dvxw$z(utpsq, _xzyw, likjhg);break;case '!':
          xtuyv && hgdif(_xzyw), jmlhi = _dsotqr(utpsq, _xzyw, likjhg, sxutw);break;default:
          xtuyv && hgdif(_xzyw);var klgh = new _dy1z0(),
              hijfeg = yvxz$[yvxz$['length'] - 0x1]['currentNSMap'],
              jmlhi = _dzwyuvx(utpsq, _xzyw, klgh, hijfeg, gkjhi, sxutw),
              klomnj = klgh['length'];if (!klgh['closed'] && _djkmni(utpsq, jmlhi, klgh['tagName'], zvwyxu) && (klgh['closed'] = !0x0, txvwus['nbsp'] || sxutw['warning']('unclosed xml attribute')), xtuyv && klomnj) {
            for (var gcfdbe = _dosrp(xtuyv, {}), nmiklj = 0x0; nmiklj < klomnj; nmiklj++) {
              var fjige = klgh[nmiklj];hgdif(fjige['offset']), fjige['locator'] = _dosrp(xtuyv, {});
            }likjhg['locator'] = gcfdbe, _decbd(klgh, likjhg, hijfeg) && yvxz$['push'](klgh), likjhg['locator'] = xtuyv;
          } else _decbd(klgh, likjhg, hijfeg) && yvxz$['push'](klgh);'http://www.w3.org/1999/xhtml' !== klgh['uri'] || klgh['closed'] ? jmlhi++ : jmlhi = _d_zxy$w(utpsq, jmlhi, klgh['tagName'], gkjhi, likjhg);}
    } catch (xvwyu) {
      sxutw['error']('element parse error: ' + xvwyu), jmlhi = -0x1;
    }zy$xwv < jmlhi ? zy$xwv = jmlhi : jmikn(Math['max'](_xzyw, zy$xwv) + 0x1);
  }
}function _dosrp(lihkjg, lonm) {
  return lonm['lineNumber'] = lihkjg['lineNumber'], lonm['columnNumber'] = lihkjg['columnNumber'], lonm;
}function _dzwyuvx(nmjlo, npl, ejfhig, mpoqrn, igejhf, kmiljn) {
  for (var _0z21, struq = ++npl, npqlo = _dv$ywz;;) {
    var loqpm = nmjlo['charAt'](struq);switch (loqpm) {case '=':
        if (npqlo === _dtquvrs) _0z21 = nmjlo['slice'](npl, struq), npqlo = _decgfhd;else {
          if (npqlo !== _dgifh) throw new Error('attribute equal must after attrName');npqlo = _decgfhd;
        }break;case '\x27':case '\x22':
        if (npqlo === _decgfhd || npqlo === _dtquvrs) {
          if (npqlo === _dtquvrs && (kmiljn['warning']('attribute value must after "="'), _0z21 = nmjlo['slice'](npl, struq)), !(0x0 < (struq = nmjlo['indexOf'](loqpm, npl = struq + 0x1)))) throw new Error('attribute value no end \'' + loqpm + '\' match');kijmlh = nmjlo['slice'](npl, struq)['replace'](/&#?\w+;/g, igejhf), ejfhig['add'](_0z21, kijmlh, npl - 0x1), npqlo = _dprom;
        } else {
          if (npqlo != _doqmlpn) throw new Error('attribute value must after "="');kijmlh = nmjlo['slice'](npl, struq)['replace'](/&#?\w+;/g, igejhf), ejfhig['add'](_0z21, kijmlh, npl), kmiljn['warning']('attribute "' + _0z21 + '" missed start quot(' + loqpm + ')!!'), npl = struq + 0x1, npqlo = _dprom;
        }break;case '/':
        switch (npqlo) {case _dv$ywz:
            ejfhig['setTagName'](nmjlo['slice'](npl, struq));case _dprom:case _dacfbde:case _domnpqr:
            npqlo = _domnpqr, ejfhig['closed'] = !0x0;case _doqmlpn:case _dtquvrs:case _dgifh:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return kmiljn['error']('unexpected end of input'), npqlo == _dv$ywz && ejfhig['setTagName'](nmjlo['slice'](npl, struq)), struq;case '>':
        switch (npqlo) {case _dv$ywz:
            ejfhig['setTagName'](nmjlo['slice'](npl, struq));case _dprom:case _dacfbde:case _domnpqr:
            break;case _doqmlpn:case _dtquvrs:
            '/' === (kijmlh = nmjlo['slice'](npl, struq))['slice'](-0x1) && (ejfhig['closed'] = !0x0, kijmlh = kijmlh['slice'](0x0, -0x1));case _dgifh:
            npqlo === _dgifh && (kijmlh = _0z21), npqlo == _doqmlpn ? (kmiljn['warning']('attribute "' + kijmlh + '" missed quot(")!!'), ejfhig['add'](_0z21, kijmlh['replace'](/&#?\w+;/g, igejhf), npl)) : ('http://www.w3.org/1999/xhtml' === mpoqrn[''] && kijmlh['match'](/^(?:disabled|checked|selected)$/i) || kmiljn['warning']('attribute "' + kijmlh + '" missed value!! "' + kijmlh + '" instead!!'), ejfhig['add'](kijmlh, kijmlh, npl));break;case _decgfhd:
            throw new Error('attribute value missed!!');}return struq;case '\u0080':
        loqpm = '\x20';default:
        if (loqpm <= '\x20') switch (npqlo) {case _dv$ywz:
            ejfhig['setTagName'](nmjlo['slice'](npl, struq)), npqlo = _dacfbde;break;case _dtquvrs:
            _0z21 = nmjlo['slice'](npl, struq), npqlo = _dgifh;break;case _doqmlpn:
            var kijmlh = nmjlo['slice'](npl, struq)['replace'](/&#?\w+;/g, igejhf);kmiljn['warning']('attribute "' + kijmlh + '" missed quot(")!!'), ejfhig['add'](_0z21, kijmlh, npl);case _dprom:
            npqlo = _dacfbde;} else switch (npqlo) {case _dgifh:
            ejfhig['tagName'], 'http://www.w3.org/1999/xhtml' === mpoqrn[''] && _0z21['match'](/^(?:disabled|checked|selected)$/i) || kmiljn['warning']('attribute "' + _0z21 + '" missed value!! "' + _0z21 + '" instead2!!'), ejfhig['add'](_0z21, _0z21, npl), npl = struq, npqlo = _dtquvrs;break;case _dprom:
            kmiljn['warning']('attribute space is required"' + _0z21 + '\x22!!');case _dacfbde:
            npqlo = _dtquvrs, npl = struq;break;case _decgfhd:
            npqlo = _doqmlpn, npl = struq;break;case _domnpqr:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}struq++;
  }
}function _decbd(ikn, z$0y1_, kpolmn) {
  for (var dbefgc = ikn['tagName'], xz$w_ = null, fdeig = ikn['length']; fdeig--;) {
    var torqsp = ikn[fdeig],
        lkgj = torqsp['qName'],
        mljko = torqsp['value'],
        gjfikh;lkgj = 0x0 < (fbcae = lkgj['indexOf'](':')) ? (hjkfi = torqsp['prefix'] = lkgj['slice'](0x0, fbcae), gjfikh = lkgj['slice'](fbcae + 0x1), 'xmlns' === hjkfi && gjfikh) : (hjkfi = null, 'xmlns' === (gjfikh = lkgj) && ''), torqsp['localName'] = gjfikh, !0x1 !== lkgj && (null == xz$w_ && (xz$w_ = {}, _dpu(kpolmn, kpolmn = {})), kpolmn[lkgj] = xz$w_[lkgj] = mljko, torqsp['uri'] = 'http://www.w3.org/2000/xmlns/', z$0y1_['startPrefixMapping'](lkgj, mljko));
  }for (fdeig = ikn['length']; fdeig--;) (hjkfi = (torqsp = ikn[fdeig])['prefix']) && ('xml' === hjkfi && (torqsp['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hjkfi && (torqsp['uri'] = kpolmn[hjkfi || '']));var fbcae;gjfikh = 0x0 < (fbcae = dbefgc['indexOf'](':')) ? (hjkfi = ikn['prefix'] = dbefgc['slice'](0x0, fbcae), ikn['localName'] = dbefgc['slice'](fbcae + 0x1)) : (hjkfi = null, ikn['localName'] = dbefgc);var mnqpro = ikn['uri'] = kpolmn[hjkfi || ''];if (z$0y1_['startElement'](mnqpro, gjfikh, dbefgc, ikn), !ikn['closed']) return ikn['currentNSMap'] = kpolmn, ikn['localNSMap'] = xz$w_, !0x0;if (z$0y1_['endElement'](mnqpro, gjfikh, dbefgc), xz$w_) {
    for (var hjkfi in xz$w_) z$0y1_['endPrefixMapping'](hjkfi);
  }
}function _d_zxy$w(jegfhi, yutxw, xywvtu, vtsrqu, _0y1z) {
  if (/^(?:script|textarea)$/i['test'](xywvtu)) {
    var fdceab = jegfhi['indexOf']('</' + xywvtu + '>', yutxw),
        jegfhi = jegfhi['substring'](yutxw + 0x1, fdceab);if (/[&<]/['test'](jegfhi)) return (/^script$/i['test'](xywvtu) || (jegfhi = jegfhi['replace'](/&#?\w+;/g, vtsrqu)), _0y1z['characters'](jegfhi, 0x0, jegfhi['length']), fdceab
    );
  }return yutxw + 0x1;
}function _djkmni(jhkigf, jilgkh, hkglji, sruqp) {
  var xvty = sruqp[hkglji];return null == xvty && ((xvty = jhkigf['lastIndexOf']('</' + hkglji + '>')) < jilgkh && (xvty = jhkigf['lastIndexOf']('</' + hkglji)), sruqp[hkglji] = xvty), xvty < jilgkh;
}function _dpu(x_z0$, kjlim) {
  for (var kmnil in x_z0$) kjlim[kmnil] = x_z0$[kmnil];
}function _dsotqr(vzxw$y, sptqor, urwvst, omklj) {
  var kpoln = vzxw$y['charAt'](sptqor + 0x2);if ('-' === kpoln) return '-' !== vzxw$y['charAt'](sptqor + 0x3) ? -0x1 : sptqor < (trpuqs = vzxw$y['indexOf']('-->', sptqor + 0x4)) ? (urwvst['comment'](vzxw$y, sptqor + 0x4, trpuqs - sptqor - 0x4), trpuqs + 0x3) : (omklj['error']('Unclosed comment'), -0x1);if ('CDATA[' == vzxw$y['substr'](sptqor + 0x3, 0x6)) {
    var trpuqs = vzxw$y['indexOf'](']]>', sptqor + 0x9);return urwvst['startCDATA'](), urwvst['characters'](vzxw$y, sptqor + 0x9, trpuqs - sptqor - 0x9), urwvst['endCDATA'](), trpuqs + 0x3;
  }kpoln = _dornp(vzxw$y, sptqor), omklj = kpoln['length'];if (0x1 < omklj && /!doctype/i['test'](kpoln[0x0][0x0])) return trpuqs = kpoln[0x1][0x0], vzxw$y = 0x3 < omklj && /^public$/i['test'](kpoln[0x2][0x0]) && kpoln[0x3][0x0], sptqor = 0x4 < omklj && kpoln[0x4][0x0], omklj = kpoln[omklj - 0x1], (urwvst['startDTD'](trpuqs, vzxw$y && vzxw$y['replace'](/^(['"])(.*?)\1$/, '$2'), sptqor && sptqor['replace'](/^(['"])(.*?)\1$/, '$2')), urwvst['endDTD'](), omklj['index'] + omklj[0x0]['length']);return -0x1;
}function _dvxw$z(cdfbg, mlhk, _102) {
  var qvsut = cdfbg['indexOf']('?>', mlhk);if (qvsut) return mlhk = cdfbg['substring'](mlhk, qvsut)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), mlhk ? (mlhk[0x0]['length'], _102['processingInstruction'](mlhk[0x1], mlhk[0x2]), qvsut + 0x2) : -0x1;return -0x1;
}function _dy1z0() {}function _dcefhdg(pstqur, dcfbae) {
  return pstqur['__proto__'] = dcfbae, pstqur;
}function _dornp(ikmjlh, srqto) {
  var oqrstp,
      yuzvx = [],
      rusqt = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (rusqt['lastIndex'] = srqto, rusqt['exec'](ikmjlh); oqrstp = rusqt['exec'](ikmjlh);) if (yuzvx['push'](oqrstp), oqrstp[0x1]) return yuzvx;
}var _dptrs = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dtwvsx = new RegExp('[\\-\\.0-9' + _dptrs['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dqonmpr = new RegExp('^' + _dptrs['source'] + _dtwvsx['source'] + '*(?::' + _dptrs['source'] + _dtwvsx['source'] + '*)?$'),
    _dv$ywz = 0x0,
    _dtquvrs = 0x1,
    _dgifh = 0x2,
    _decgfhd = 0x3,
    _doqmlpn = 0x4,
    _dprom = 0x5,
    _dacfbde = 0x6,
    _domnpqr = 0x7;_dponqr['prototype'] = { 'parse': function (oqlnp, xuvs, khifj) {
    var pornqs = this['domBuilder'];pornqs['startDocument'](), _dpu(xuvs, xuvs = {}), _dkhjilg(oqlnp, xuvs, khifj, pornqs, this['errorHandler']), pornqs['endDocument']();
  } }, _dy1z0['prototype'] = { 'setTagName': function (yzvxu) {
    if (!_dqonmpr['test'](yzvxu)) throw new Error('invalid tagName:' + yzvxu);this['tagName'] = yzvxu;
  }, 'add': function (squrv, stxvu, gfbe) {
    if (!_dqonmpr['test'](squrv)) throw new Error('invalid attribute:' + squrv);this[this['length']++] = { 'qName': squrv, 'value': stxvu, 'offset': gfbe };
  }, 'length': 0x0, 'getLocalName': function (ustv) {
    return this[ustv]['localName'];
  }, 'getLocator': function (dhfie) {
    return this[dhfie]['locator'];
  }, 'getQName': function (gejfih) {
    return this[gejfih]['qName'];
  }, 'getURI': function (nlmk) {
    return this[nlmk]['uri'];
  }, 'getValue': function (twvux) {
    return this[twvux]['value'];
  } }, _dcefhdg({}, _dcefhdg['prototype']) instanceof _dcefhdg || (_dcefhdg = function (z_yx$0, fgkji) {
  function suxtvw() {}for (fgkji in suxtvw['prototype'] = fgkji, suxtvw = new suxtvw(), z_yx$0) suxtvw[fgkji] = z_yx$0[fgkji];return suxtvw;
}), exports['XMLReader'] = _dponqr;