var _ = wx.y$;
function _dtroqs() {}function _dhigjk(wz$xvy, oqrpsn, wzvxy$, uwvst, ifehj) {
  function zx$yw($zw_y) {
    var uvtsq = $zw_y['slice'](0x1, -0x1);return uvtsq in wzvxy$ ? wzvxy$[uvtsq] : '#' === uvtsq['charAt'](0x0) ? 0xffff < (uvtsq = parseInt(uvtsq['substr'](0x1)['replace']('x', '0x'))) ? (uvtsq -= 0x10000, String['fromCharCode'](0xd800 + (uvtsq >> 0xa), 0xdc00 + (0x3ff & uvtsq))) : String['fromCharCode'](uvtsq) : (ifehj['error']('entity not found:' + $zw_y), $zw_y);
  }function xutyw(jhgfki) {
    var sqpotr;abecf < jhgfki && (sqpotr = wz$xvy['substring'](abecf, jhgfki)['replace'](/&#?\w+;/g, zx$yw), rsuqvt && nrqspo(abecf), uwvst['characters'](sqpotr, 0x0, jhgfki - abecf), abecf = jhgfki);
  }function nrqspo(bafce, sport) {
    for (; egdfi <= bafce && (sport = xuywtv['exec'](wz$xvy));) rpo = sport['index'], egdfi = rpo + sport[0x0]['length'], rsuqvt['lineNumber']++;rsuqvt['columnNumber'] = bafce - rpo + 0x1;
  }for (var rpo = 0x0, egdfi = 0x0, xuywtv = /.*(?:\r\n?|\n)|.*$/g, rsuqvt = uwvst['locator'], hfgik = [{ 'currentNSMap': oqrpsn }], y$z10 = {}, abecf = 0x0;;) {
    try {
      var pomnrq = wz$xvy['indexOf']('<', abecf),
          mnokj,
          wuxtvs;if (pomnrq < 0x0) return void (wz$xvy['substr'](abecf)['match'](/^\s*$/) || (wuxtvs = (mnokj = uwvst['doc'])['createTextNode'](wz$xvy['substr'](abecf)), mnokj['appendChild'](wuxtvs), uwvst['currentElement'] = wuxtvs));switch (abecf < pomnrq && xutyw(pomnrq), wz$xvy['charAt'](pomnrq + 0x1)) {case '/':
          var $y0_xz = wz$xvy['indexOf']('>', pomnrq + 0x3),
              xz_y0 = wz$xvy['substring'](pomnrq + 0x2, $y0_xz),
              dhifeg = hfgik['pop']();$y0_xz < 0x0 ? (xz_y0 = wz$xvy['substring'](pomnrq + 0x2)['replace'](/[\s<].*/, ''), ifehj['error']('end tag name: ' + xz_y0 + ' is not complete:' + dhifeg['tagName']), $y0_xz = pomnrq + 0x1 + xz_y0['length']) : xz_y0['match'](/\s</) && (xz_y0 = xz_y0['replace'](/[\s<].*/, ''), ifehj['error']('end tag name: ' + xz_y0 + ' maybe not complete'), $y0_xz = pomnrq + 0x1 + xz_y0['length']);var rvutw = dhifeg['localNSMap'],
              qnmolp = dhifeg['tagName'] == xz_y0;if (qnmolp || dhifeg['tagName'] && dhifeg['tagName']['toLowerCase']() == xz_y0['toLowerCase']()) {
            if (uwvst['endElement'](dhifeg['uri'], dhifeg['localName'], xz_y0), rvutw) {
              for (var okmnlj in rvutw) uwvst['endPrefixMapping'](okmnlj);
            }qnmolp || ifehj['fatalError']('end tag name: ' + xz_y0 + ' is not match the current start tagName:' + dhifeg['tagName']);
          } else hfgik['push'](dhifeg);$y0_xz++;break;case '?':
          rsuqvt && nrqspo(pomnrq), $y0_xz = _drst(wz$xvy, pomnrq, uwvst);break;case '!':
          rsuqvt && nrqspo(pomnrq), $y0_xz = _dy$wv(wz$xvy, pomnrq, uwvst, ifehj);break;default:
          rsuqvt && nrqspo(pomnrq);var z0_x$y = new _dy$_x0(),
              dbgef = hfgik[hfgik['length'] - 0x1]['currentNSMap'],
              $y0_xz = _djhikgl(wz$xvy, pomnrq, z0_x$y, dbgef, zx$yw, ifehj),
              cfhd = z0_x$y['length'];if (!z0_x$y['closed'] && _dyz$vw(wz$xvy, $y0_xz, z0_x$y['tagName'], y$z10) && (z0_x$y['closed'] = !0x0, wzvxy$['nbsp'] || ifehj['warning']('unclosed xml attribute')), rsuqvt && cfhd) {
            for (var hmjik = _ddbef(rsuqvt, {}), hkfijg = 0x0; hkfijg < cfhd; hkfijg++) {
              var hiejfg = z0_x$y[hkfijg];nrqspo(hiejfg['offset']), hiejfg['locator'] = _ddbef(rsuqvt, {});
            }uwvst['locator'] = hmjik, _dpknlm(z0_x$y, uwvst, dbgef) && hfgik['push'](z0_x$y), uwvst['locator'] = rsuqvt;
          } else _dpknlm(z0_x$y, uwvst, dbgef) && hfgik['push'](z0_x$y);'http://www.w3.org/1999/xhtml' !== z0_x$y['uri'] || z0_x$y['closed'] ? $y0_xz++ : $y0_xz = _dfikjgh(wz$xvy, $y0_xz, z0_x$y['tagName'], zx$yw, uwvst);}
    } catch (okmjn) {
      ifehj['error']('element parse error: ' + okmjn), $y0_xz = -0x1;
    }abecf < $y0_xz ? abecf = $y0_xz : xutyw(Math['max'](pomnrq, abecf) + 0x1);
  }
}function _ddbef(dafbc, nlmj) {
  return nlmj['lineNumber'] = dafbc['lineNumber'], nlmj['columnNumber'] = dafbc['columnNumber'], nlmj;
}function _djhikgl(xtuwsv, vwy$z, $xz_wy, plonkm, svux, jfgihe) {
  for (var rnqs, $20 = ++vwy$z, wvsxu = _dmlok;;) {
    var hfeij = xtuwsv['charAt']($20);switch (hfeij) {case '=':
        if (wvsxu === _dpqosrt) rnqs = xtuwsv['slice'](vwy$z, $20), wvsxu = _duvrqst;else {
          if (wvsxu !== _dvuxzy) throw new Error('attribute equal must after attrName');wvsxu = _duvrqst;
        }break;case '\x27':case '\x22':
        if (wvsxu === _duvrqst || wvsxu === _dpqosrt) {
          if (wvsxu === _dpqosrt && (jfgihe['warning']('attribute value must after "="'), rnqs = xtuwsv['slice'](vwy$z, $20)), !(0x0 < ($20 = xtuwsv['indexOf'](hfeij, vwy$z = $20 + 0x1)))) throw new Error('attribute value no end \'' + hfeij + '\' match');pqrtso = xtuwsv['slice'](vwy$z, $20)['replace'](/&#?\w+;/g, svux), $xz_wy['add'](rnqs, pqrtso, vwy$z - 0x1), wvsxu = _dbcedfg;
        } else {
          if (wvsxu != _dkjmni) throw new Error('attribute value must after "="');pqrtso = xtuwsv['slice'](vwy$z, $20)['replace'](/&#?\w+;/g, svux), $xz_wy['add'](rnqs, pqrtso, vwy$z), jfgihe['warning']('attribute "' + rnqs + '" missed start quot(' + hfeij + ')!!'), vwy$z = $20 + 0x1, wvsxu = _dbcedfg;
        }break;case '/':
        switch (wvsxu) {case _dmlok:
            $xz_wy['setTagName'](xtuwsv['slice'](vwy$z, $20));case _dbcedfg:case _dnplqo:case _dxvu:
            wvsxu = _dxvu, $xz_wy['closed'] = !0x0;case _dkjmni:case _dpqosrt:case _dvuxzy:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return jfgihe['error']('unexpected end of input'), wvsxu == _dmlok && $xz_wy['setTagName'](xtuwsv['slice'](vwy$z, $20)), $20;case '>':
        switch (wvsxu) {case _dmlok:
            $xz_wy['setTagName'](xtuwsv['slice'](vwy$z, $20));case _dbcedfg:case _dnplqo:case _dxvu:
            break;case _dkjmni:case _dpqosrt:
            '/' === (pqrtso = xtuwsv['slice'](vwy$z, $20))['slice'](-0x1) && ($xz_wy['closed'] = !0x0, pqrtso = pqrtso['slice'](0x0, -0x1));case _dvuxzy:
            wvsxu === _dvuxzy && (pqrtso = rnqs), wvsxu == _dkjmni ? (jfgihe['warning']('attribute "' + pqrtso + '" missed quot(")!!'), $xz_wy['add'](rnqs, pqrtso['replace'](/&#?\w+;/g, svux), vwy$z)) : ('http://www.w3.org/1999/xhtml' === plonkm[''] && pqrtso['match'](/^(?:disabled|checked|selected)$/i) || jfgihe['warning']('attribute "' + pqrtso + '" missed value!! "' + pqrtso + '" instead!!'), $xz_wy['add'](pqrtso, pqrtso, vwy$z));break;case _duvrqst:
            throw new Error('attribute value missed!!');}return $20;case '\u0080':
        hfeij = '\x20';default:
        if (hfeij <= '\x20') switch (wvsxu) {case _dmlok:
            $xz_wy['setTagName'](xtuwsv['slice'](vwy$z, $20)), wvsxu = _dnplqo;break;case _dpqosrt:
            rnqs = xtuwsv['slice'](vwy$z, $20), wvsxu = _dvuxzy;break;case _dkjmni:
            var pqrtso = xtuwsv['slice'](vwy$z, $20)['replace'](/&#?\w+;/g, svux);jfgihe['warning']('attribute "' + pqrtso + '" missed quot(")!!'), $xz_wy['add'](rnqs, pqrtso, vwy$z);case _dbcedfg:
            wvsxu = _dnplqo;} else switch (wvsxu) {case _dvuxzy:
            $xz_wy['tagName'], 'http://www.w3.org/1999/xhtml' === plonkm[''] && rnqs['match'](/^(?:disabled|checked|selected)$/i) || jfgihe['warning']('attribute "' + rnqs + '" missed value!! "' + rnqs + '" instead2!!'), $xz_wy['add'](rnqs, rnqs, vwy$z), vwy$z = $20, wvsxu = _dpqosrt;break;case _dbcedfg:
            jfgihe['warning']('attribute space is required"' + rnqs + '\x22!!');case _dnplqo:
            wvsxu = _dpqosrt, vwy$z = $20;break;case _duvrqst:
            wvsxu = _dkjmni, vwy$z = $20;break;case _dxvu:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$20++;
  }
}function _dpknlm(lmki, vstrq, jigh) {
  for (var hjkil = lmki['tagName'], lkghji = null, cbdgf = lmki['length']; cbdgf--;) {
    var ytv = lmki[cbdgf],
        hedgf = ytv['qName'],
        tyuwvx = ytv['value'],
        gecfb;hedgf = 0x0 < (ruptqs = hedgf['indexOf'](':')) ? (mkhl = ytv['prefix'] = hedgf['slice'](0x0, ruptqs), gecfb = hedgf['slice'](ruptqs + 0x1), 'xmlns' === mkhl && gecfb) : (mkhl = null, 'xmlns' === (gecfb = hedgf) && ''), ytv['localName'] = gecfb, !0x1 !== hedgf && (null == lkghji && (lkghji = {}, _d_03142(jigh, jigh = {})), jigh[hedgf] = lkghji[hedgf] = tyuwvx, ytv['uri'] = 'http://www.w3.org/2000/xmlns/', vstrq['startPrefixMapping'](hedgf, tyuwvx));
  }for (cbdgf = lmki['length']; cbdgf--;) (mkhl = (ytv = lmki[cbdgf])['prefix']) && ('xml' === mkhl && (ytv['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== mkhl && (ytv['uri'] = jigh[mkhl || '']));var ruptqs;gecfb = 0x0 < (ruptqs = hjkil['indexOf'](':')) ? (mkhl = lmki['prefix'] = hjkil['slice'](0x0, ruptqs), lmki['localName'] = hjkil['slice'](ruptqs + 0x1)) : (mkhl = null, lmki['localName'] = hjkil);var jkhl = lmki['uri'] = jigh[mkhl || ''];if (vstrq['startElement'](jkhl, gecfb, hjkil, lmki), !lmki['closed']) return lmki['currentNSMap'] = jigh, lmki['localNSMap'] = lkghji, !0x0;if (vstrq['endElement'](jkhl, gecfb, hjkil), lkghji) {
    for (var mkhl in lkghji) vstrq['endPrefixMapping'](mkhl);
  }
}function _dfikjgh(gidhef, z0$_1y, acefb, z$01y, lpomq) {
  if (/^(?:script|textarea)$/i['test'](acefb)) {
    var $xz0y_ = gidhef['indexOf']('</' + acefb + '>', z0$_1y),
        gidhef = gidhef['substring'](z0$_1y + 0x1, $xz0y_);if (/[&<]/['test'](gidhef)) return (/^script$/i['test'](acefb) || (gidhef = gidhef['replace'](/&#?\w+;/g, z$01y)), lpomq['characters'](gidhef, 0x0, gidhef['length']), $xz0y_
    );
  }return z0$_1y + 0x1;
}function _dyz$vw(nojlkm, twyv, $zwv, xtvsuw) {
  var nsoqp = xtvsuw[$zwv];return null == nsoqp && ((nsoqp = nojlkm['lastIndexOf']('</' + $zwv + '>')) < twyv && (nsoqp = nojlkm['lastIndexOf']('</' + $zwv)), xtvsuw[$zwv] = nsoqp), nsoqp < twyv;
}function _d_03142(olqnp, knjlmo) {
  for (var gjkhi in olqnp) knjlmo[gjkhi] = olqnp[gjkhi];
}function _dy$wv(z_$xy, $xvwy, ijnm, rutqv) {
  var oprqnm = z_$xy['charAt']($xvwy + 0x2);if ('-' === oprqnm) return '-' !== z_$xy['charAt']($xvwy + 0x3) ? -0x1 : $xvwy < (lonpq = z_$xy['indexOf']('-->', $xvwy + 0x4)) ? (ijnm['comment'](z_$xy, $xvwy + 0x4, lonpq - $xvwy - 0x4), lonpq + 0x3) : (rutqv['error']('Unclosed comment'), -0x1);if ('CDATA[' == z_$xy['substr']($xvwy + 0x3, 0x6)) {
    var lonpq = z_$xy['indexOf'](']]>', $xvwy + 0x9);return ijnm['startCDATA'](), ijnm['characters'](z_$xy, $xvwy + 0x9, lonpq - $xvwy - 0x9), ijnm['endCDATA'](), lonpq + 0x3;
  }oprqnm = _dz0$_y1(z_$xy, $xvwy), rutqv = oprqnm['length'];if (0x1 < rutqv && /!doctype/i['test'](oprqnm[0x0][0x0])) return lonpq = oprqnm[0x1][0x0], z_$xy = 0x3 < rutqv && /^public$/i['test'](oprqnm[0x2][0x0]) && oprqnm[0x3][0x0], $xvwy = 0x4 < rutqv && oprqnm[0x4][0x0], rutqv = oprqnm[rutqv - 0x1], (ijnm['startDTD'](lonpq, z_$xy && z_$xy['replace'](/^(['"])(.*?)\1$/, '$2'), $xvwy && $xvwy['replace'](/^(['"])(.*?)\1$/, '$2')), ijnm['endDTD'](), rutqv['index'] + rutqv[0x0]['length']);return -0x1;
}function _drst(nsoqrp, txv, kglji) {
  var bgcde = nsoqrp['indexOf']('?>', txv);if (bgcde) return txv = nsoqrp['substring'](txv, bgcde)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), txv ? (txv[0x0]['length'], kglji['processingInstruction'](txv[0x1], txv[0x2]), bgcde + 0x2) : -0x1;return -0x1;
}function _dy$_x0() {}function _dz$xy_w(wvuty, qvst) {
  return wvuty['__proto__'] = qvst, wvuty;
}function _dz0$_y1(qlnopm, wzxvy$) {
  var qspnr,
      rnmqpo = [],
      hfgeid = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (hfgeid['lastIndex'] = wzxvy$, hfgeid['exec'](qlnopm); qspnr = hfgeid['exec'](qlnopm);) if (rnmqpo['push'](qspnr), qspnr[0x1]) return rnmqpo;
}var _dfcdbae = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dgehifj = new RegExp('[\\-\\.0-9' + _dfcdbae['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _djlimnk = new RegExp('^' + _dfcdbae['source'] + _dgehifj['source'] + '*(?::' + _dfcdbae['source'] + _dgehifj['source'] + '*)?$'),
    _dmlok = 0x0,
    _dpqosrt = 0x1,
    _dvuxzy = 0x2,
    _duvrqst = 0x3,
    _dkjmni = 0x4,
    _dbcedfg = 0x5,
    _dnplqo = 0x6,
    _dxvu = 0x7;_dtroqs['prototype'] = { 'parse': function (limkh, jfgie, kinjm) {
    var ijklg = this['domBuilder'];ijklg['startDocument'](), _d_03142(jfgie, jfgie = {}), _dhigjk(limkh, jfgie, kinjm, ijklg, this['errorHandler']), ijklg['endDocument']();
  } }, _dy$_x0['prototype'] = { 'setTagName': function (fcaedb) {
    if (!_djlimnk['test'](fcaedb)) throw new Error('invalid tagName:' + fcaedb);this['tagName'] = fcaedb;
  }, 'add': function (jegfhi, fgedc, fkij) {
    if (!_djlimnk['test'](jegfhi)) throw new Error('invalid attribute:' + jegfhi);this[this['length']++] = { 'qName': jegfhi, 'value': fgedc, 'offset': fkij };
  }, 'length': 0x0, 'getLocalName': function (ljmnok) {
    return this[ljmnok]['localName'];
  }, 'getLocator': function (pmoqr) {
    return this[pmoqr]['locator'];
  }, 'getQName': function (wuyx) {
    return this[wuyx]['qName'];
  }, 'getURI': function (xyz$) {
    return this[xyz$]['uri'];
  }, 'getValue': function (mnorqp) {
    return this[mnorqp]['value'];
  } }, _dz$xy_w({}, _dz$xy_w['prototype']) instanceof _dz$xy_w || (_dz$xy_w = function (lpqnm, fieg) {
  function tpqsru() {}for (fieg in tpqsru['prototype'] = fieg, tpqsru = new tpqsru(), lpqnm) tpqsru[fieg] = lpqnm[fieg];return tpqsru;
}), exports['XMLReader'] = _dtroqs;