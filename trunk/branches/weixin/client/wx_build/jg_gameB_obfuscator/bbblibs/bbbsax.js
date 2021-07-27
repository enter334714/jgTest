var _ = wx.y$;
function _digfed() {}function _djkgi(jkfgi, xwuz, jlgh, efacbd, xv$yz) {
  function zw$x_(utrspq) {
    var fhkjgi = utrspq['slice'](0x1, -0x1);return fhkjgi in jlgh ? jlgh[fhkjgi] : '#' === fhkjgi['charAt'](0x0) ? 0xffff < (fhkjgi = parseInt(fhkjgi['substr'](0x1)['replace']('x', '0x'))) ? (fhkjgi -= 0x10000, String['fromCharCode'](0xd800 + (fhkjgi >> 0xa), 0xdc00 + (0x3ff & fhkjgi))) : String['fromCharCode'](fhkjgi) : (xv$yz['error']('entity not found:' + utrspq), utrspq);
  }function zwy_$(hkjfig) {
    var twsrvu;wvst < hkjfig && (twsrvu = jkfgi['substring'](wvst, hkjfig)['replace'](/&#?\w+;/g, zw$x_), qmln && rtuvqs(wvst), efacbd['characters'](twsrvu, 0x0, hkjfig - wvst), wvst = hkjfig);
  }function rtuvqs(nrq, hdgce) {
    for (; egfbc <= nrq && (hdgce = onjm['exec'](jkfgi));) rqonsp = hdgce['index'], egfbc = rqonsp + hdgce[0x0]['length'], qmln['lineNumber']++;qmln['columnNumber'] = nrq - rqonsp + 0x1;
  }for (var rqonsp = 0x0, egfbc = 0x0, onjm = /.*(?:\r\n?|\n)|.*$/g, qmln = efacbd['locator'], jmnolk = [{ 'currentNSMap': xwuz }], nlkp = {}, wvst = 0x0;;) {
    try {
      var lnjkom = jkfgi['indexOf']('<', wvst),
          nqpol,
          $3_01;if (lnjkom < 0x0) return void (jkfgi['substr'](wvst)['match'](/^\s*$/) || ($3_01 = (nqpol = efacbd['doc'])['createTextNode'](jkfgi['substr'](wvst)), nqpol['appendChild']($3_01), efacbd['currentElement'] = $3_01));switch (wvst < lnjkom && zwy_$(lnjkom), jkfgi['charAt'](lnjkom + 0x1)) {case '/':
          var qlmon = jkfgi['indexOf']('>', lnjkom + 0x3),
              rwuv = jkfgi['substring'](lnjkom + 0x2, qlmon),
              jhfgi = jmnolk['pop']();qlmon < 0x0 ? (rwuv = jkfgi['substring'](lnjkom + 0x2)['replace'](/[\s<].*/, ''), xv$yz['error']('end tag name: ' + rwuv + ' is not complete:' + jhfgi['tagName']), qlmon = lnjkom + 0x1 + rwuv['length']) : rwuv['match'](/\s</) && (rwuv = rwuv['replace'](/[\s<].*/, ''), xv$yz['error']('end tag name: ' + rwuv + ' maybe not complete'), qlmon = lnjkom + 0x1 + rwuv['length']);var oljmn = jhfgi['localNSMap'],
              jfigkh = jhfgi['tagName'] == rwuv;if (jfigkh || jhfgi['tagName'] && jhfgi['tagName']['toLowerCase']() == rwuv['toLowerCase']()) {
            if (efacbd['endElement'](jhfgi['uri'], jhfgi['localName'], rwuv), oljmn) {
              for (var befadc in oljmn) efacbd['endPrefixMapping'](befadc);
            }jfigkh || xv$yz['fatalError']('end tag name: ' + rwuv + ' is not match the current start tagName:' + jhfgi['tagName']);
          } else jmnolk['push'](jhfgi);qlmon++;break;case '?':
          qmln && rtuvqs(lnjkom), qlmon = _dnmoqp(jkfgi, lnjkom, efacbd);break;case '!':
          qmln && rtuvqs(lnjkom), qlmon = _dsrqt(jkfgi, lnjkom, efacbd, xv$yz);break;default:
          qmln && rtuvqs(lnjkom);var toqpr = new _d_z$x0y(),
              bgedf = jmnolk[jmnolk['length'] - 0x1]['currentNSMap'],
              qlmon = _drsutqv(jkfgi, lnjkom, toqpr, bgedf, zw$x_, xv$yz),
              mjilkh = toqpr['length'];if (!toqpr['closed'] && _doqtrps(jkfgi, qlmon, toqpr['tagName'], nlkp) && (toqpr['closed'] = !0x0, jlgh['nbsp'] || xv$yz['warning']('unclosed xml attribute')), qmln && mjilkh) {
            for (var vwuzx = _dlhgk(qmln, {}), srponq = 0x0; srponq < mjilkh; srponq++) {
              var linj = toqpr[srponq];rtuvqs(linj['offset']), linj['locator'] = _dlhgk(qmln, {});
            }efacbd['locator'] = vwuzx, _drnmop(toqpr, efacbd, bgedf) && jmnolk['push'](toqpr), efacbd['locator'] = qmln;
          } else _drnmop(toqpr, efacbd, bgedf) && jmnolk['push'](toqpr);'http://www.w3.org/1999/xhtml' !== toqpr['uri'] || toqpr['closed'] ? qlmon++ : qlmon = _dsqport(jkfgi, qlmon, toqpr['tagName'], zw$x_, efacbd);}
    } catch (qptur) {
      xv$yz['error']('element parse error: ' + qptur), qlmon = -0x1;
    }wvst < qlmon ? wvst = qlmon : zwy_$(Math['max'](lnjkom, wvst) + 0x1);
  }
}function _dlhgk(wzyx$_, _01y$) {
  return _01y$['lineNumber'] = wzyx$_['lineNumber'], _01y$['columnNumber'] = wzyx$_['columnNumber'], _01y$;
}function _drsutqv(acefdb, osqtrp, hecg, nojkm, nomqp, sutx) {
  for (var wz$yvx, molknp = ++osqtrp, gfehcd = _dfegcdh;;) {
    var ljhkm = acefdb['charAt'](molknp);switch (ljhkm) {case '=':
        if (gfehcd === _dostqr) wz$yvx = acefdb['slice'](osqtrp, molknp), gfehcd = _dqnsopr;else {
          if (gfehcd !== _dgihej) throw new Error('attribute equal must after attrName');gfehcd = _dqnsopr;
        }break;case '\x27':case '\x22':
        if (gfehcd === _dqnsopr || gfehcd === _dostqr) {
          if (gfehcd === _dostqr && (sutx['warning']('attribute value must after "="'), wz$yvx = acefdb['slice'](osqtrp, molknp)), !(0x0 < (molknp = acefdb['indexOf'](ljhkm, osqtrp = molknp + 0x1)))) throw new Error('attribute value no end \'' + ljhkm + '\' match');yuwzxv = acefdb['slice'](osqtrp, molknp)['replace'](/&#?\w+;/g, nomqp), hecg['add'](wz$yvx, yuwzxv, osqtrp - 0x1), gfehcd = _dz201_$;
        } else {
          if (gfehcd != _d_0z) throw new Error('attribute value must after "="');yuwzxv = acefdb['slice'](osqtrp, molknp)['replace'](/&#?\w+;/g, nomqp), hecg['add'](wz$yvx, yuwzxv, osqtrp), sutx['warning']('attribute "' + wz$yvx + '" missed start quot(' + ljhkm + ')!!'), osqtrp = molknp + 0x1, gfehcd = _dz201_$;
        }break;case '/':
        switch (gfehcd) {case _dfegcdh:
            hecg['setTagName'](acefdb['slice'](osqtrp, molknp));case _dz201_$:case _dcfde:case _deghjif:
            gfehcd = _deghjif, hecg['closed'] = !0x0;case _d_0z:case _dostqr:case _dgihej:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return sutx['error']('unexpected end of input'), gfehcd == _dfegcdh && hecg['setTagName'](acefdb['slice'](osqtrp, molknp)), molknp;case '>':
        switch (gfehcd) {case _dfegcdh:
            hecg['setTagName'](acefdb['slice'](osqtrp, molknp));case _dz201_$:case _dcfde:case _deghjif:
            break;case _d_0z:case _dostqr:
            '/' === (yuwzxv = acefdb['slice'](osqtrp, molknp))['slice'](-0x1) && (hecg['closed'] = !0x0, yuwzxv = yuwzxv['slice'](0x0, -0x1));case _dgihej:
            gfehcd === _dgihej && (yuwzxv = wz$yvx), gfehcd == _d_0z ? (sutx['warning']('attribute "' + yuwzxv + '" missed quot(")!!'), hecg['add'](wz$yvx, yuwzxv['replace'](/&#?\w+;/g, nomqp), osqtrp)) : ('http://www.w3.org/1999/xhtml' === nojkm[''] && yuwzxv['match'](/^(?:disabled|checked|selected)$/i) || sutx['warning']('attribute "' + yuwzxv + '" missed value!! "' + yuwzxv + '" instead!!'), hecg['add'](yuwzxv, yuwzxv, osqtrp));break;case _dqnsopr:
            throw new Error('attribute value missed!!');}return molknp;case '\u0080':
        ljhkm = '\x20';default:
        if (ljhkm <= '\x20') switch (gfehcd) {case _dfegcdh:
            hecg['setTagName'](acefdb['slice'](osqtrp, molknp)), gfehcd = _dcfde;break;case _dostqr:
            wz$yvx = acefdb['slice'](osqtrp, molknp), gfehcd = _dgihej;break;case _d_0z:
            var yuwzxv = acefdb['slice'](osqtrp, molknp)['replace'](/&#?\w+;/g, nomqp);sutx['warning']('attribute "' + yuwzxv + '" missed quot(")!!'), hecg['add'](wz$yvx, yuwzxv, osqtrp);case _dz201_$:
            gfehcd = _dcfde;} else switch (gfehcd) {case _dgihej:
            hecg['tagName'], 'http://www.w3.org/1999/xhtml' === nojkm[''] && wz$yvx['match'](/^(?:disabled|checked|selected)$/i) || sutx['warning']('attribute "' + wz$yvx + '" missed value!! "' + wz$yvx + '" instead2!!'), hecg['add'](wz$yvx, wz$yvx, osqtrp), osqtrp = molknp, gfehcd = _dostqr;break;case _dz201_$:
            sutx['warning']('attribute space is required"' + wz$yvx + '\x22!!');case _dcfde:
            gfehcd = _dostqr, osqtrp = molknp;break;case _dqnsopr:
            gfehcd = _d_0z, osqtrp = molknp;break;case _deghjif:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}molknp++;
  }
}function _drnmop(fdeacb, lhkgji, tvurws) {
  for (var nmloqp = fdeacb['tagName'], begcf = null, egf = fdeacb['length']; egf--;) {
    var ghjkif = fdeacb[egf],
        $wvyx = ghjkif['qName'],
        _1024 = ghjkif['value'],
        hejgfi;$wvyx = 0x0 < (fdhei = $wvyx['indexOf'](':')) ? (mokln = ghjkif['prefix'] = $wvyx['slice'](0x0, fdhei), hejgfi = $wvyx['slice'](fdhei + 0x1), 'xmlns' === mokln && hejgfi) : (mokln = null, 'xmlns' === (hejgfi = $wvyx) && ''), ghjkif['localName'] = hejgfi, !0x1 !== $wvyx && (null == begcf && (begcf = {}, _dsvrwu(tvurws, tvurws = {})), tvurws[$wvyx] = begcf[$wvyx] = _1024, ghjkif['uri'] = 'http://www.w3.org/2000/xmlns/', lhkgji['startPrefixMapping']($wvyx, _1024));
  }for (egf = fdeacb['length']; egf--;) (mokln = (ghjkif = fdeacb[egf])['prefix']) && ('xml' === mokln && (ghjkif['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== mokln && (ghjkif['uri'] = tvurws[mokln || '']));var fdhei;hejgfi = 0x0 < (fdhei = nmloqp['indexOf'](':')) ? (mokln = fdeacb['prefix'] = nmloqp['slice'](0x0, fdhei), fdeacb['localName'] = nmloqp['slice'](fdhei + 0x1)) : (mokln = null, fdeacb['localName'] = nmloqp);var _xzw = fdeacb['uri'] = tvurws[mokln || ''];if (lhkgji['startElement'](_xzw, hejgfi, nmloqp, fdeacb), !fdeacb['closed']) return fdeacb['currentNSMap'] = tvurws, fdeacb['localNSMap'] = begcf, !0x0;if (lhkgji['endElement'](_xzw, hejgfi, nmloqp), begcf) {
    for (var mokln in begcf) lhkgji['endPrefixMapping'](mokln);
  }
}function _dsqport(ejhi, xvwz$y, yvwzx, hgljik, iknjlm) {
  if (/^(?:script|textarea)$/i['test'](yvwzx)) {
    var kjomn = ejhi['indexOf']('</' + yvwzx + '>', xvwz$y),
        ejhi = ejhi['substring'](xvwz$y + 0x1, kjomn);if (/[&<]/['test'](ejhi)) return (/^script$/i['test'](yvwzx) || (ejhi = ejhi['replace'](/&#?\w+;/g, hgljik)), iknjlm['characters'](ejhi, 0x0, ejhi['length']), kjomn
    );
  }return xvwz$y + 0x1;
}function _doqtrps(xuyvzw, cabfde, uqtvs, ghejf) {
  var nmjki = ghejf[uqtvs];return null == nmjki && ((nmjki = xuyvzw['lastIndexOf']('</' + uqtvs + '>')) < cabfde && (nmjki = xuyvzw['lastIndexOf']('</' + uqtvs)), ghejf[uqtvs] = nmjki), nmjki < cabfde;
}function _dsvrwu(lnmjko, monpkl) {
  for (var z_0y1 in lnmjko) monpkl[z_0y1] = lnmjko[z_0y1];
}function _dsrqt(hfejgi, rqpt, uptqrs, fdhgc) {
  var _xy0$z = hfejgi['charAt'](rqpt + 0x2);if ('-' === _xy0$z) return '-' !== hfejgi['charAt'](rqpt + 0x3) ? -0x1 : rqpt < (mpqro = hfejgi['indexOf']('-->', rqpt + 0x4)) ? (uptqrs['comment'](hfejgi, rqpt + 0x4, mpqro - rqpt - 0x4), mpqro + 0x3) : (fdhgc['error']('Unclosed comment'), -0x1);if ('CDATA[' == hfejgi['substr'](rqpt + 0x3, 0x6)) {
    var mpqro = hfejgi['indexOf'](']]>', rqpt + 0x9);return uptqrs['startCDATA'](), uptqrs['characters'](hfejgi, rqpt + 0x9, mpqro - rqpt - 0x9), uptqrs['endCDATA'](), mpqro + 0x3;
  }_xy0$z = _dsuwvtx(hfejgi, rqpt), fdhgc = _xy0$z['length'];if (0x1 < fdhgc && /!doctype/i['test'](_xy0$z[0x0][0x0])) return mpqro = _xy0$z[0x1][0x0], hfejgi = 0x3 < fdhgc && /^public$/i['test'](_xy0$z[0x2][0x0]) && _xy0$z[0x3][0x0], rqpt = 0x4 < fdhgc && _xy0$z[0x4][0x0], fdhgc = _xy0$z[fdhgc - 0x1], (uptqrs['startDTD'](mpqro, hfejgi && hfejgi['replace'](/^(['"])(.*?)\1$/, '$2'), rqpt && rqpt['replace'](/^(['"])(.*?)\1$/, '$2')), uptqrs['endDTD'](), fdhgc['index'] + fdhgc[0x0]['length']);return -0x1;
}function _dnmoqp(xzwy_$, $zxw_, dfbegc) {
  var mlqpno = xzwy_$['indexOf']('?>', $zxw_);if (mlqpno) return $zxw_ = xzwy_$['substring']($zxw_, mlqpno)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), $zxw_ ? ($zxw_[0x0]['length'], dfbegc['processingInstruction']($zxw_[0x1], $zxw_[0x2]), mlqpno + 0x2) : -0x1;return -0x1;
}function _d_z$x0y() {}function _dqnropm(pqrons, adfc) {
  return pqrons['__proto__'] = adfc, pqrons;
}function _dsuwvtx(nojlk, _4230) {
  var yuwt,
      oqsnrp = [],
      urtvws = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (urtvws['lastIndex'] = _4230, urtvws['exec'](nojlk); yuwt = urtvws['exec'](nojlk);) if (oqsnrp['push'](yuwt), yuwt[0x1]) return oqsnrp;
}var _d_0zy$x = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dtqrsup = new RegExp('[\\-\\.0-9' + _d_0zy$x['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dlpkom = new RegExp('^' + _d_0zy$x['source'] + _dtqrsup['source'] + '*(?::' + _d_0zy$x['source'] + _dtqrsup['source'] + '*)?$'),
    _dfegcdh = 0x0,
    _dostqr = 0x1,
    _dgihej = 0x2,
    _dqnsopr = 0x3,
    _d_0z = 0x4,
    _dz201_$ = 0x5,
    _dcfde = 0x6,
    _deghjif = 0x7;_digfed['prototype'] = { 'parse': function (nlp, hkgjl, tsqurv) {
    var qrpsut = this['domBuilder'];qrpsut['startDocument'](), _dsvrwu(hkgjl, hkgjl = {}), _djkgi(nlp, hkgjl, tsqurv, qrpsut, this['errorHandler']), qrpsut['endDocument']();
  } }, _d_z$x0y['prototype'] = { 'setTagName': function (kljhgi) {
    if (!_dlpkom['test'](kljhgi)) throw new Error('invalid tagName:' + kljhgi);this['tagName'] = kljhgi;
  }, 'add': function (njlk, pqlm, qmpro) {
    if (!_dlpkom['test'](njlk)) throw new Error('invalid attribute:' + njlk);this[this['length']++] = { 'qName': njlk, 'value': pqlm, 'offset': qmpro };
  }, 'length': 0x0, 'getLocalName': function (srqnp) {
    return this[srqnp]['localName'];
  }, 'getLocator': function (spto) {
    return this[spto]['locator'];
  }, 'getQName': function ($_1203) {
    return this[$_1203]['qName'];
  }, 'getURI': function ($z_01) {
    return this[$z_01]['uri'];
  }, 'getValue': function (yzuv) {
    return this[yzuv]['value'];
  } }, _dqnropm({}, _dqnropm['prototype']) instanceof _dqnropm || (_dqnropm = function (ecfbda, lomnq) {
  function edghfc() {}for (lomnq in edghfc['prototype'] = lomnq, edghfc = new edghfc(), ecfbda) edghfc[lomnq] = ecfbda[lomnq];return edghfc;
}), exports['XMLReader'] = _digfed;