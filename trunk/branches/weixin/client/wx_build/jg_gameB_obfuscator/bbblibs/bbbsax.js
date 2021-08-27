var _ = wx.y$;
function _dotsq() {}function _dw_(dfabce, degcfh, pnrmoq, dgfhec, mpn) {
  function gfijkh(vtu) {
    var ghef = vtu['slice'](0x1, -0x1);return ghef in pnrmoq ? pnrmoq[ghef] : '#' === ghef['charAt'](0x0) ? 0xffff < (ghef = parseInt(ghef['substr'](0x1)['replace']('x', '0x'))) ? (ghef -= 0x10000, String['fromCharCode'](0xd800 + (ghef >> 0xa), 0xdc00 + (0x3ff & ghef))) : String['fromCharCode'](ghef) : (mpn['error']('entity not found:' + vtu), vtu);
  }function jlon(x0$_) {
    var rtpoqs;kjghli < x0$_ && (rtpoqs = dfabce['substring'](kjghli, x0$_)['replace'](/&#?\w+;/g, gfijkh), poqsn && ponrm(kjghli), dgfhec['characters'](rtpoqs, 0x0, x0$_ - kjghli), kjghli = x0$_);
  }function ponrm(mjko, uvrs) {
    for (; omkj <= mjko && (uvrs = y0$z1['exec'](dfabce));) jkmnl = uvrs['index'], omkj = jkmnl + uvrs[0x0]['length'], poqsn['lineNumber']++;poqsn['columnNumber'] = mjko - jkmnl + 0x1;
  }for (var jkmnl = 0x0, omkj = 0x0, y0$z1 = /.*(?:\r\n?|\n)|.*$/g, poqsn = dgfhec['locator'], nqmr = [{ 'currentNSMap': degcfh }], snopr = {}, kjghli = 0x0;;) {
    try {
      var oljn = dfabce['indexOf']('<', kjghli),
          snopq,
          ikjnl;if (oljn < 0x0) return void (dfabce['substr'](kjghli)['match'](/^\s*$/) || (ikjnl = (snopq = dgfhec['doc'])['createTextNode'](dfabce['substr'](kjghli)), snopq['appendChild'](ikjnl), dgfhec['currentElement'] = ikjnl));switch (kjghli < oljn && jlon(oljn), dfabce['charAt'](oljn + 0x1)) {case '/':
          var vrtwsu = dfabce['indexOf']('>', oljn + 0x3),
              _zy0x$ = dfabce['substring'](oljn + 0x2, vrtwsu),
              tv = nqmr['pop']();vrtwsu < 0x0 ? (_zy0x$ = dfabce['substring'](oljn + 0x2)['replace'](/[\s<].*/, ''), mpn['error']('end tag name: ' + _zy0x$ + ' is not complete:' + tv['tagName']), vrtwsu = oljn + 0x1 + _zy0x$['length']) : _zy0x$['match'](/\s</) && (_zy0x$ = _zy0x$['replace'](/[\s<].*/, ''), mpn['error']('end tag name: ' + _zy0x$ + ' maybe not complete'), vrtwsu = oljn + 0x1 + _zy0x$['length']);var rqvut = tv['localNSMap'],
              _34120 = tv['tagName'] == _zy0x$;if (_34120 || tv['tagName'] && tv['tagName']['toLowerCase']() == _zy0x$['toLowerCase']()) {
            if (dgfhec['endElement'](tv['uri'], tv['localName'], _zy0x$), rqvut) {
              for (var optsrq in rqvut) dgfhec['endPrefixMapping'](optsrq);
            }_34120 || mpn['fatalError']('end tag name: ' + _zy0x$ + ' is not match the current start tagName:' + tv['tagName']);
          } else nqmr['push'](tv);vrtwsu++;break;case '?':
          poqsn && ponrm(oljn), vrtwsu = _degfjih(dfabce, oljn, dgfhec);break;case '!':
          poqsn && ponrm(oljn), vrtwsu = _dkmnjl(dfabce, oljn, dgfhec, mpn);break;default:
          poqsn && ponrm(oljn);var ptu = new _dkplnm(),
              lnpqom = nqmr[nqmr['length'] - 0x1]['currentNSMap'],
              vrtwsu = _dz0xy_$(dfabce, oljn, ptu, lnpqom, gfijkh, mpn),
              urswtv = ptu['length'];if (!ptu['closed'] && _doqmnpl(dfabce, vrtwsu, ptu['tagName'], snopr) && (ptu['closed'] = !0x0, pnrmoq['nbsp'] || mpn['warning']('unclosed xml attribute')), poqsn && urswtv) {
            for (var kjnmli = _dlkmni(poqsn, {}), ikjlh = 0x0; ikjlh < urswtv; ikjlh++) {
              var nmoqlp = ptu[ikjlh];ponrm(nmoqlp['offset']), nmoqlp['locator'] = _dlkmni(poqsn, {});
            }dgfhec['locator'] = kjnmli, _dvxwust(ptu, dgfhec, lnpqom) && nqmr['push'](ptu), dgfhec['locator'] = poqsn;
          } else _dvxwust(ptu, dgfhec, lnpqom) && nqmr['push'](ptu);'http://www.w3.org/1999/xhtml' !== ptu['uri'] || ptu['closed'] ? vrtwsu++ : vrtwsu = _dzvwyx(dfabce, vrtwsu, ptu['tagName'], gfijkh, dgfhec);}
    } catch (gcedb) {
      mpn['error']('element parse error: ' + gcedb), vrtwsu = -0x1;
    }kjghli < vrtwsu ? kjghli = vrtwsu : jlon(Math['max'](oljn, kjghli) + 0x1);
  }
}function _dlkmni(vurqs, pnsr) {
  return pnsr['lineNumber'] = vurqs['lineNumber'], pnsr['columnNumber'] = vurqs['columnNumber'], pnsr;
}function _dz0xy_$(sonqrp, jgeifh, wtsvru, nlmojk, xwuvz, kmlpon) {
  for (var opt, uptqsr = ++jgeifh, ilnk = _dkijf;;) {
    var pnqol = sonqrp['charAt'](uptqsr);switch (pnqol) {case '=':
        if (ilnk === _dtopqs) opt = sonqrp['slice'](jgeifh, uptqsr), ilnk = _dbecfad;else {
          if (ilnk !== _djmkhil) throw new Error('attribute equal must after attrName');ilnk = _dbecfad;
        }break;case '\x27':case '\x22':
        if (ilnk === _dbecfad || ilnk === _dtopqs) {
          if (ilnk === _dtopqs && (kmlpon['warning']('attribute value must after "="'), opt = sonqrp['slice'](jgeifh, uptqsr)), !(0x0 < (uptqsr = sonqrp['indexOf'](pnqol, jgeifh = uptqsr + 0x1)))) throw new Error('attribute value no end \'' + pnqol + '\' match');z2$1_ = sonqrp['slice'](jgeifh, uptqsr)['replace'](/&#?\w+;/g, xwuvz), wtsvru['add'](opt, z2$1_, jgeifh - 0x1), ilnk = _d$0_2;
        } else {
          if (ilnk != _ddbcfa) throw new Error('attribute value must after "="');z2$1_ = sonqrp['slice'](jgeifh, uptqsr)['replace'](/&#?\w+;/g, xwuvz), wtsvru['add'](opt, z2$1_, jgeifh), kmlpon['warning']('attribute "' + opt + '" missed start quot(' + pnqol + ')!!'), jgeifh = uptqsr + 0x1, ilnk = _d$0_2;
        }break;case '/':
        switch (ilnk) {case _dkijf:
            wtsvru['setTagName'](sonqrp['slice'](jgeifh, uptqsr));case _d$0_2:case _d$zy_x0:case _d$_xwy:
            ilnk = _d$_xwy, wtsvru['closed'] = !0x0;case _ddbcfa:case _dtopqs:case _djmkhil:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return kmlpon['error']('unexpected end of input'), ilnk == _dkijf && wtsvru['setTagName'](sonqrp['slice'](jgeifh, uptqsr)), uptqsr;case '>':
        switch (ilnk) {case _dkijf:
            wtsvru['setTagName'](sonqrp['slice'](jgeifh, uptqsr));case _d$0_2:case _d$zy_x0:case _d$_xwy:
            break;case _ddbcfa:case _dtopqs:
            '/' === (z2$1_ = sonqrp['slice'](jgeifh, uptqsr))['slice'](-0x1) && (wtsvru['closed'] = !0x0, z2$1_ = z2$1_['slice'](0x0, -0x1));case _djmkhil:
            ilnk === _djmkhil && (z2$1_ = opt), ilnk == _ddbcfa ? (kmlpon['warning']('attribute "' + z2$1_ + '" missed quot(")!!'), wtsvru['add'](opt, z2$1_['replace'](/&#?\w+;/g, xwuvz), jgeifh)) : ('http://www.w3.org/1999/xhtml' === nlmojk[''] && z2$1_['match'](/^(?:disabled|checked|selected)$/i) || kmlpon['warning']('attribute "' + z2$1_ + '" missed value!! "' + z2$1_ + '" instead!!'), wtsvru['add'](z2$1_, z2$1_, jgeifh));break;case _dbecfad:
            throw new Error('attribute value missed!!');}return uptqsr;case '\u0080':
        pnqol = '\x20';default:
        if (pnqol <= '\x20') switch (ilnk) {case _dkijf:
            wtsvru['setTagName'](sonqrp['slice'](jgeifh, uptqsr)), ilnk = _d$zy_x0;break;case _dtopqs:
            opt = sonqrp['slice'](jgeifh, uptqsr), ilnk = _djmkhil;break;case _ddbcfa:
            var z2$1_ = sonqrp['slice'](jgeifh, uptqsr)['replace'](/&#?\w+;/g, xwuvz);kmlpon['warning']('attribute "' + z2$1_ + '" missed quot(")!!'), wtsvru['add'](opt, z2$1_, jgeifh);case _d$0_2:
            ilnk = _d$zy_x0;} else switch (ilnk) {case _djmkhil:
            wtsvru['tagName'], 'http://www.w3.org/1999/xhtml' === nlmojk[''] && opt['match'](/^(?:disabled|checked|selected)$/i) || kmlpon['warning']('attribute "' + opt + '" missed value!! "' + opt + '" instead2!!'), wtsvru['add'](opt, opt, jgeifh), jgeifh = uptqsr, ilnk = _dtopqs;break;case _d$0_2:
            kmlpon['warning']('attribute space is required"' + opt + '\x22!!');case _d$zy_x0:
            ilnk = _dtopqs, jgeifh = uptqsr;break;case _dbecfad:
            ilnk = _ddbcfa, jgeifh = uptqsr;break;case _d$_xwy:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}uptqsr++;
  }
}function _dvxwust(fgech, gbcdf, dfeb) {
  for (var $xz = fgech['tagName'], ijlkg = null, gfkhi = fgech['length']; gfkhi--;) {
    var xwvsu = fgech[gfkhi],
        xzyw$ = xwvsu['qName'],
        usptq = xwvsu['value'],
        lnkoj;xzyw$ = 0x0 < (_203$1 = xzyw$['indexOf'](':')) ? (omnk = xwvsu['prefix'] = xzyw$['slice'](0x0, _203$1), lnkoj = xzyw$['slice'](_203$1 + 0x1), 'xmlns' === omnk && lnkoj) : (omnk = null, 'xmlns' === (lnkoj = xzyw$) && ''), xwvsu['localName'] = lnkoj, !0x1 !== xzyw$ && (null == ijlkg && (ijlkg = {}, _dfgdhe(dfeb, dfeb = {})), dfeb[xzyw$] = ijlkg[xzyw$] = usptq, xwvsu['uri'] = 'http://www.w3.org/2000/xmlns/', gbcdf['startPrefixMapping'](xzyw$, usptq));
  }for (gfkhi = fgech['length']; gfkhi--;) (omnk = (xwvsu = fgech[gfkhi])['prefix']) && ('xml' === omnk && (xwvsu['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== omnk && (xwvsu['uri'] = dfeb[omnk || '']));var _203$1;lnkoj = 0x0 < (_203$1 = $xz['indexOf'](':')) ? (omnk = fgech['prefix'] = $xz['slice'](0x0, _203$1), fgech['localName'] = $xz['slice'](_203$1 + 0x1)) : (omnk = null, fgech['localName'] = $xz);var ormqn = fgech['uri'] = dfeb[omnk || ''];if (gbcdf['startElement'](ormqn, lnkoj, $xz, fgech), !fgech['closed']) return fgech['currentNSMap'] = dfeb, fgech['localNSMap'] = ijlkg, !0x0;if (gbcdf['endElement'](ormqn, lnkoj, $xz), ijlkg) {
    for (var omnk in ijlkg) gbcdf['endPrefixMapping'](omnk);
  }
}function _dzvwyx(efjhg, nkjmi, ojnlmk, nmrpoq, eghijf) {
  if (/^(?:script|textarea)$/i['test'](ojnlmk)) {
    var khfgji = efjhg['indexOf']('</' + ojnlmk + '>', nkjmi),
        efjhg = efjhg['substring'](nkjmi + 0x1, khfgji);if (/[&<]/['test'](efjhg)) return (/^script$/i['test'](ojnlmk) || (efjhg = efjhg['replace'](/&#?\w+;/g, nmrpoq)), eghijf['characters'](efjhg, 0x0, efjhg['length']), khfgji
    );
  }return nkjmi + 0x1;
}function _doqmnpl(hjikgf, srqptu, jnlom, fejgh) {
  var $zy10 = fejgh[jnlom];return null == $zy10 && (($zy10 = hjikgf['lastIndexOf']('</' + jnlom + '>')) < srqptu && ($zy10 = hjikgf['lastIndexOf']('</' + jnlom)), fejgh[jnlom] = $zy10), $zy10 < srqptu;
}function _dfgdhe(z1$y_, nkji) {
  for (var jifhgk in z1$y_) nkji[jifhgk] = z1$y_[jifhgk];
}function _dkmnjl(rpmnqo, gbdcef, _zx, mklonj) {
  var khgfj = rpmnqo['charAt'](gbdcef + 0x2);if ('-' === khgfj) return '-' !== rpmnqo['charAt'](gbdcef + 0x3) ? -0x1 : gbdcef < (nsop = rpmnqo['indexOf']('-->', gbdcef + 0x4)) ? (_zx['comment'](rpmnqo, gbdcef + 0x4, nsop - gbdcef - 0x4), nsop + 0x3) : (mklonj['error']('Unclosed comment'), -0x1);if ('CDATA[' == rpmnqo['substr'](gbdcef + 0x3, 0x6)) {
    var nsop = rpmnqo['indexOf'](']]>', gbdcef + 0x9);return _zx['startCDATA'](), _zx['characters'](rpmnqo, gbdcef + 0x9, nsop - gbdcef - 0x9), _zx['endCDATA'](), nsop + 0x3;
  }khgfj = _dilgj(rpmnqo, gbdcef), mklonj = khgfj['length'];if (0x1 < mklonj && /!doctype/i['test'](khgfj[0x0][0x0])) return nsop = khgfj[0x1][0x0], rpmnqo = 0x3 < mklonj && /^public$/i['test'](khgfj[0x2][0x0]) && khgfj[0x3][0x0], gbdcef = 0x4 < mklonj && khgfj[0x4][0x0], mklonj = khgfj[mklonj - 0x1], (_zx['startDTD'](nsop, rpmnqo && rpmnqo['replace'](/^(['"])(.*?)\1$/, '$2'), gbdcef && gbdcef['replace'](/^(['"])(.*?)\1$/, '$2')), _zx['endDTD'](), mklonj['index'] + mklonj[0x0]['length']);return -0x1;
}function _degfjih(pkol, $013_, gfjkih) {
  var pkonlm = pkol['indexOf']('?>', $013_);if (pkonlm) return $013_ = pkol['substring']($013_, pkonlm)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), $013_ ? ($013_[0x0]['length'], gfjkih['processingInstruction']($013_[0x1], $013_[0x2]), pkonlm + 0x2) : -0x1;return -0x1;
}function _dkplnm() {}function _deigfhd(edcgfh, ikhglj) {
  return edcgfh['__proto__'] = ikhglj, edcgfh;
}function _dilgj(hecdg, hlg) {
  var vwyutx,
      rtsqp = [],
      pnqsor = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (pnqsor['lastIndex'] = hlg, pnqsor['exec'](hecdg); vwyutx = pnqsor['exec'](hecdg);) if (rtsqp['push'](vwyutx), vwyutx[0x1]) return rtsqp;
}var _dbdgfec = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dvwzyx$ = new RegExp('[\\-\\.0-9' + _dbdgfec['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dcdeafb = new RegExp('^' + _dbdgfec['source'] + _dvwzyx$['source'] + '*(?::' + _dbdgfec['source'] + _dvwzyx$['source'] + '*)?$'),
    _dkijf = 0x0,
    _dtopqs = 0x1,
    _djmkhil = 0x2,
    _dbecfad = 0x3,
    _ddbcfa = 0x4,
    _d$0_2 = 0x5,
    _d$zy_x0 = 0x6,
    _d$_xwy = 0x7;_dotsq['prototype'] = { 'parse': function (urvq, wuxstv, y$0x) {
    var prmnqo = this['domBuilder'];prmnqo['startDocument'](), _dfgdhe(wuxstv, wuxstv = {}), _dw_(urvq, wuxstv, y$0x, prmnqo, this['errorHandler']), prmnqo['endDocument']();
  } }, _dkplnm['prototype'] = { 'setTagName': function (lompn) {
    if (!_dcdeafb['test'](lompn)) throw new Error('invalid tagName:' + lompn);this['tagName'] = lompn;
  }, 'add': function (rw, opln, ptor) {
    if (!_dcdeafb['test'](rw)) throw new Error('invalid attribute:' + rw);this[this['length']++] = { 'qName': rw, 'value': opln, 'offset': ptor };
  }, 'length': 0x0, 'getLocalName': function (efigh) {
    return this[efigh]['localName'];
  }, 'getLocator': function (vyuzw) {
    return this[vyuzw]['locator'];
  }, 'getQName': function (cge) {
    return this[cge]['qName'];
  }, 'getURI': function (vstqur) {
    return this[vstqur]['uri'];
  }, 'getValue': function (hgfde) {
    return this[hgfde]['value'];
  } }, _deigfhd({}, _deigfhd['prototype']) instanceof _deigfhd || (_deigfhd = function (afedbc, qvtsru) {
  function nmlpk() {}for (qvtsru in nmlpk['prototype'] = qvtsru, nmlpk = new nmlpk(), afedbc) nmlpk[qvtsru] = afedbc[qvtsru];return nmlpk;
}), exports['XMLReader'] = _dotsq;