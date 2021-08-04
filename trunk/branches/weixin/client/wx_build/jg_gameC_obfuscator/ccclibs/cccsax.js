var p = wx.$h;
function a_rtpo() {}function a_mlknjo(linm, z1y, jefgh, igljkh, ehgc) {
  function himkjl(pnrm) {
    var xyzw = pnrm['slice'](0x1, -0x1);return xyzw in jefgh ? jefgh[xyzw] : '#' === xyzw['charAt'](0x0) ? 0xffff < (xyzw = parseInt(xyzw['substr'](0x1)['replace']('x', '0x'))) ? (xyzw -= 0x10000, String['fromCharCode'](0xd800 + (xyzw >> 0xa), 0xdc00 + (0x3ff & xyzw))) : String['fromCharCode'](xyzw) : (ehgc['error']('entity not found:' + pnrm), pnrm);
  }function gefji(tzxyvw) {
    var $20_z;qpnmlo < tzxyvw && ($20_z = linm['substring'](qpnmlo, tzxyvw)['replace'](/&#?\w+;/g, himkjl), yx$_wz && lq(qpnmlo), igljkh['characters']($20_z, 0x0, tzxyvw - qpnmlo), qpnmlo = tzxyvw);
  }function lq(z012$, mrnpoq) {
    for (; hfcg <= z012$ && (mrnpoq = iljmk['exec'](linm));) w$x_ = mrnpoq['index'], hfcg = w$x_ + mrnpoq[0x0]['length'], yx$_wz['lineNumber']++;yx$_wz['columnNumber'] = z012$ - w$x_ + 0x1;
  }for (var w$x_ = 0x0, hfcg = 0x0, iljmk = /.*(?:\r\n?|\n)|.*$/g, yx$_wz = igljkh['locator'], jgkli = [{ 'currentNSMap': z1y }], lmnq = {}, qpnmlo = 0x0;;) {
    try {
      var dfehig = linm['indexOf']('<', qpnmlo),
          rmnoqp,
          jghife;if (dfehig < 0x0) return void (linm['substr'](qpnmlo)['match'](/^\s*$/) || (jghife = (rmnoqp = igljkh['doc'])['createTextNode'](linm['substr'](qpnmlo)), rmnoqp['appendChild'](jghife), igljkh['currentElement'] = jghife));switch (qpnmlo < dfehig && gefji(dfehig), linm['charAt'](dfehig + 0x1)) {case '/':
          var tqors = linm['indexOf']('>', dfehig + 0x3),
              sqrpn = linm['substring'](dfehig + 0x2, tqors),
              z$102_ = jgkli['pop']();tqors < 0x0 ? (sqrpn = linm['substring'](dfehig + 0x2)['replace'](/[\s<].*/, ''), ehgc['error']('end tag name: ' + sqrpn + ' is not complete:' + z$102_['tagName']), tqors = dfehig + 0x1 + sqrpn['length']) : sqrpn['match'](/\s</) && (sqrpn = sqrpn['replace'](/[\s<].*/, ''), ehgc['error']('end tag name: ' + sqrpn + ' maybe not complete'), tqors = dfehig + 0x1 + sqrpn['length']);var nlmp = z$102_['localNSMap'],
              y1$0_ = z$102_['tagName'] == sqrpn;if (y1$0_ || z$102_['tagName'] && z$102_['tagName']['toLowerCase']() == sqrpn['toLowerCase']()) {
            if (igljkh['endElement'](z$102_['uri'], z$102_['localName'], sqrpn), nlmp) {
              for (var $_132 in nlmp) igljkh['endPrefixMapping']($_132);
            }y1$0_ || ehgc['fatalError']('end tag name: ' + sqrpn + ' is not match the current start tagName:' + z$102_['tagName']);
          } else jgkli['push'](z$102_);tqors++;break;case '?':
          yx$_wz && lq(dfehig), tqors = a_nqrm(linm, dfehig, igljkh);break;case '!':
          yx$_wz && lq(dfehig), tqors = a_$_y01z(linm, dfehig, igljkh, ehgc);break;default:
          yx$_wz && lq(dfehig);var mijlkh = new a_onspq(),
              gcde = jgkli[jgkli['length'] - 0x1]['currentNSMap'],
              tqors = a_mponrq(linm, dfehig, mijlkh, gcde, himkjl, ehgc),
              nporm = mijlkh['length'];if (!mijlkh['closed'] && a_vrsx(linm, tqors, mijlkh['tagName'], lmnq) && (mijlkh['closed'] = !0x0, jefgh['nbsp'] || ehgc['warning']('unclosed xml attribute')), yx$_wz && nporm) {
            for (var opmqnl = a_qnmol(yx$_wz, {}), gjheif = 0x0; gjheif < nporm; gjheif++) {
              var iefd = mijlkh[gjheif];lq(iefd['offset']), iefd['locator'] = a_qnmol(yx$_wz, {});
            }igljkh['locator'] = opmqnl, a_geif(mijlkh, igljkh, gcde) && jgkli['push'](mijlkh), igljkh['locator'] = yx$_wz;
          } else a_geif(mijlkh, igljkh, gcde) && jgkli['push'](mijlkh);'http://www.w3.org/1999/xhtml' !== mijlkh['uri'] || mijlkh['closed'] ? tqors++ : tqors = a_adc(linm, tqors, mijlkh['tagName'], himkjl, igljkh);}
    } catch (zvxtyw) {
      ehgc['error']('element parse error: ' + zvxtyw), tqors = -0x1;
    }qpnmlo < tqors ? qpnmlo = tqors : gefji(Math['max'](dfehig, qpnmlo) + 0x1);
  }
}function a_qnmol(_01$z2, swtxy) {
  return swtxy['lineNumber'] = _01$z2['lineNumber'], swtxy['columnNumber'] = _01$z2['columnNumber'], swtxy;
}function a_mponrq(wtrvq, zy$0_1, $zywvx, pmkol, w_zyx, acdeb) {
  for (var lmnkpo, fdgbc = ++zy$0_1, ptoqs = a_lmoj;;) {
    var pstvq = wtrvq['charAt'](fdgbc);switch (pstvq) {case '=':
        if (ptoqs === a_z$w_x) lmnkpo = wtrvq['slice'](zy$0_1, fdgbc), ptoqs = a_yztxwv;else {
          if (ptoqs !== a_kmlonj) throw new Error('attribute equal must after attrName');ptoqs = a_yztxwv;
        }break;case '\x27':case '\x22':
        if (ptoqs === a_yztxwv || ptoqs === a_z$w_x) {
          if (ptoqs === a_z$w_x && (acdeb['warning']('attribute value must after "="'), lmnkpo = wtrvq['slice'](zy$0_1, fdgbc)), !(0x0 < (fdgbc = wtrvq['indexOf'](pstvq, zy$0_1 = fdgbc + 0x1)))) throw new Error('attribute value no end \'' + pstvq + '\' match');x$z0_ = wtrvq['slice'](zy$0_1, fdgbc)['replace'](/&#?\w+;/g, w_zyx), $zywvx['add'](lmnkpo, x$z0_, zy$0_1 - 0x1), ptoqs = a_ehf;
        } else {
          if (ptoqs != a_xrtvws) throw new Error('attribute value must after "="');x$z0_ = wtrvq['slice'](zy$0_1, fdgbc)['replace'](/&#?\w+;/g, w_zyx), $zywvx['add'](lmnkpo, x$z0_, zy$0_1), acdeb['warning']('attribute "' + lmnkpo + '" missed start quot(' + pstvq + ')!!'), zy$0_1 = fdgbc + 0x1, ptoqs = a_ehf;
        }break;case '/':
        switch (ptoqs) {case a_lmoj:
            $zywvx['setTagName'](wtrvq['slice'](zy$0_1, fdgbc));case a_ehf:case a__$0123:case a_bcae:
            ptoqs = a_bcae, $zywvx['closed'] = !0x0;case a_xrtvws:case a_z$w_x:case a_kmlonj:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return acdeb['error']('unexpected end of input'), ptoqs == a_lmoj && $zywvx['setTagName'](wtrvq['slice'](zy$0_1, fdgbc)), fdgbc;case '>':
        switch (ptoqs) {case a_lmoj:
            $zywvx['setTagName'](wtrvq['slice'](zy$0_1, fdgbc));case a_ehf:case a__$0123:case a_bcae:
            break;case a_xrtvws:case a_z$w_x:
            '/' === (x$z0_ = wtrvq['slice'](zy$0_1, fdgbc))['slice'](-0x1) && ($zywvx['closed'] = !0x0, x$z0_ = x$z0_['slice'](0x0, -0x1));case a_kmlonj:
            ptoqs === a_kmlonj && (x$z0_ = lmnkpo), ptoqs == a_xrtvws ? (acdeb['warning']('attribute "' + x$z0_ + '" missed quot(")!!'), $zywvx['add'](lmnkpo, x$z0_['replace'](/&#?\w+;/g, w_zyx), zy$0_1)) : ('http://www.w3.org/1999/xhtml' === pmkol[''] && x$z0_['match'](/^(?:disabled|checked|selected)$/i) || acdeb['warning']('attribute "' + x$z0_ + '" missed value!! "' + x$z0_ + '" instead!!'), $zywvx['add'](x$z0_, x$z0_, zy$0_1));break;case a_yztxwv:
            throw new Error('attribute value missed!!');}return fdgbc;case '\u0080':
        pstvq = '\x20';default:
        if (pstvq <= '\x20') switch (ptoqs) {case a_lmoj:
            $zywvx['setTagName'](wtrvq['slice'](zy$0_1, fdgbc)), ptoqs = a__$0123;break;case a_z$w_x:
            lmnkpo = wtrvq['slice'](zy$0_1, fdgbc), ptoqs = a_kmlonj;break;case a_xrtvws:
            var x$z0_ = wtrvq['slice'](zy$0_1, fdgbc)['replace'](/&#?\w+;/g, w_zyx);acdeb['warning']('attribute "' + x$z0_ + '" missed quot(")!!'), $zywvx['add'](lmnkpo, x$z0_, zy$0_1);case a_ehf:
            ptoqs = a__$0123;} else switch (ptoqs) {case a_kmlonj:
            $zywvx['tagName'], 'http://www.w3.org/1999/xhtml' === pmkol[''] && lmnkpo['match'](/^(?:disabled|checked|selected)$/i) || acdeb['warning']('attribute "' + lmnkpo + '" missed value!! "' + lmnkpo + '" instead2!!'), $zywvx['add'](lmnkpo, lmnkpo, zy$0_1), zy$0_1 = fdgbc, ptoqs = a_z$w_x;break;case a_ehf:
            acdeb['warning']('attribute space is required"' + lmnkpo + '\x22!!');case a__$0123:
            ptoqs = a_z$w_x, zy$0_1 = fdgbc;break;case a_yztxwv:
            ptoqs = a_xrtvws, zy$0_1 = fdgbc;break;case a_bcae:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}fdgbc++;
  }
}function a_geif(stwqr, orpsq, _y0z) {
  for (var y1_0z = stwqr['tagName'], tvxzwy = null, qopmrn = stwqr['length']; qopmrn--;) {
    var rpqon = stwqr[qopmrn],
        $xy_ = rpqon['qName'],
        svrpt = rpqon['value'],
        fhgde;$xy_ = 0x0 < (z0$y1 = $xy_['indexOf'](':')) ? (wzy_ = rpqon['prefix'] = $xy_['slice'](0x0, z0$y1), fhgde = $xy_['slice'](z0$y1 + 0x1), 'xmlns' === wzy_ && fhgde) : (wzy_ = null, 'xmlns' === (fhgde = $xy_) && ''), rpqon['localName'] = fhgde, !0x1 !== $xy_ && (null == tvxzwy && (tvxzwy = {}, a_ljonk(_y0z, _y0z = {})), _y0z[$xy_] = tvxzwy[$xy_] = svrpt, rpqon['uri'] = 'http://www.w3.org/2000/xmlns/', orpsq['startPrefixMapping']($xy_, svrpt));
  }for (qopmrn = stwqr['length']; qopmrn--;) (wzy_ = (rpqon = stwqr[qopmrn])['prefix']) && ('xml' === wzy_ && (rpqon['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== wzy_ && (rpqon['uri'] = _y0z[wzy_ || '']));var z0$y1;fhgde = 0x0 < (z0$y1 = y1_0z['indexOf'](':')) ? (wzy_ = stwqr['prefix'] = y1_0z['slice'](0x0, z0$y1), stwqr['localName'] = y1_0z['slice'](z0$y1 + 0x1)) : (wzy_ = null, stwqr['localName'] = y1_0z);var vtzyw = stwqr['uri'] = _y0z[wzy_ || ''];if (orpsq['startElement'](vtzyw, fhgde, y1_0z, stwqr), !stwqr['closed']) return stwqr['currentNSMap'] = _y0z, stwqr['localNSMap'] = tvxzwy, !0x0;if (orpsq['endElement'](vtzyw, fhgde, y1_0z), tvxzwy) {
    for (var wzy_ in tvxzwy) orpsq['endPrefixMapping'](wzy_);
  }
}function a_adc($xywvz, psrtqv, giejh, soqprt, sqtprv) {
  if (/^(?:script|textarea)$/i['test'](giejh)) {
    var qpstrv = $xywvz['indexOf']('</' + giejh + '>', psrtqv),
        $xywvz = $xywvz['substring'](psrtqv + 0x1, qpstrv);if (/[&<]/['test']($xywvz)) return (/^script$/i['test'](giejh) || ($xywvz = $xywvz['replace'](/&#?\w+;/g, soqprt)), sqtprv['characters']($xywvz, 0x0, $xywvz['length']), qpstrv
    );
  }return psrtqv + 0x1;
}function a_vrsx(ifk, _0yz1, $20_, $3_102) {
  var kmlij = $3_102[$20_];return null == kmlij && ((kmlij = ifk['lastIndexOf']('</' + $20_ + '>')) < _0yz1 && (kmlij = ifk['lastIndexOf']('</' + $20_)), $3_102[$20_] = kmlij), kmlij < _0yz1;
}function a_ljonk(wrv, ln) {
  for (var zy0$_x in wrv) ln[zy0$_x] = wrv[zy0$_x];
}function a_$_y01z(yxzw$, xwtvy, optqsr, rtpqs) {
  var tvwqr = yxzw$['charAt'](xwtvy + 0x2);if ('-' === tvwqr) return '-' !== yxzw$['charAt'](xwtvy + 0x3) ? -0x1 : xwtvy < (bdfce = yxzw$['indexOf']('-->', xwtvy + 0x4)) ? (optqsr['comment'](yxzw$, xwtvy + 0x4, bdfce - xwtvy - 0x4), bdfce + 0x3) : (rtpqs['error']('Unclosed comment'), -0x1);if ('CDATA[' == yxzw$['substr'](xwtvy + 0x3, 0x6)) {
    var bdfce = yxzw$['indexOf'](']]>', xwtvy + 0x9);return optqsr['startCDATA'](), optqsr['characters'](yxzw$, xwtvy + 0x9, bdfce - xwtvy - 0x9), optqsr['endCDATA'](), bdfce + 0x3;
  }tvwqr = a_sroqnp(yxzw$, xwtvy), rtpqs = tvwqr['length'];if (0x1 < rtpqs && /!doctype/i['test'](tvwqr[0x0][0x0])) return bdfce = tvwqr[0x1][0x0], yxzw$ = 0x3 < rtpqs && /^public$/i['test'](tvwqr[0x2][0x0]) && tvwqr[0x3][0x0], xwtvy = 0x4 < rtpqs && tvwqr[0x4][0x0], rtpqs = tvwqr[rtpqs - 0x1], (optqsr['startDTD'](bdfce, yxzw$ && yxzw$['replace'](/^(['"])(.*?)\1$/, '$2'), xwtvy && xwtvy['replace'](/^(['"])(.*?)\1$/, '$2')), optqsr['endDTD'](), rtpqs['index'] + rtpqs[0x0]['length']);return -0x1;
}function a_nqrm(qwvtsr, fcae, kljhig) {
  var y$zv = qwvtsr['indexOf']('?>', fcae);if (y$zv) return fcae = qwvtsr['substring'](fcae, y$zv)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), fcae ? (fcae[0x0]['length'], kljhig['processingInstruction'](fcae[0x1], fcae[0x2]), y$zv + 0x2) : -0x1;return -0x1;
}function a_onspq() {}function a_torps(klonmp, $_1023) {
  return klonmp['__proto__'] = $_1023, klonmp;
}function a_sroqnp(onmkjl, hgie) {
  var vtrsx,
      vxw$z = [],
      hcdfeg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (hcdfeg['lastIndex'] = hgie, hcdfeg['exec'](onmkjl); vtrsx = hcdfeg['exec'](onmkjl);) if (vxw$z['push'](vtrsx), vtrsx[0x1]) return vxw$z;
}var a_pvsqt = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_yvxwzt = new RegExp('[\\-\\.0-9' + a_pvsqt['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_eifghj = new RegExp('^' + a_pvsqt['source'] + a_yvxwzt['source'] + '*(?::' + a_pvsqt['source'] + a_yvxwzt['source'] + '*)?$'),
    a_lmoj = 0x0,
    a_z$w_x = 0x1,
    a_kmlonj = 0x2,
    a_yztxwv = 0x3,
    a_xrtvws = 0x4,
    a_ehf = 0x5,
    a__$0123 = 0x6,
    a_bcae = 0x7;a_rtpo['prototype'] = { 'parse': function (qwvs, z021$_, $y0x) {
    var wvx$ = this['domBuilder'];wvx$['startDocument'](), a_ljonk(z021$_, z021$_ = {}), a_mlknjo(qwvs, z021$_, $y0x, wvx$, this['errorHandler']), wvx$['endDocument']();
  } }, a_onspq['prototype'] = { 'setTagName': function (xwvrst) {
    if (!a_eifghj['test'](xwvrst)) throw new Error('invalid tagName:' + xwvrst);this['tagName'] = xwvrst;
  }, 'add': function (klpm, w$zx_y, dfabc) {
    if (!a_eifghj['test'](klpm)) throw new Error('invalid attribute:' + klpm);this[this['length']++] = { 'qName': klpm, 'value': w$zx_y, 'offset': dfabc };
  }, 'length': 0x0, 'getLocalName': function (jkni) {
    return this[jkni]['localName'];
  }, 'getLocator': function (qnomr) {
    return this[qnomr]['locator'];
  }, 'getQName': function (pnmok) {
    return this[pnmok]['qName'];
  }, 'getURI': function (gdfec) {
    return this[gdfec]['uri'];
  }, 'getValue': function (dhgfie) {
    return this[dhgfie]['value'];
  } }, a_torps({}, a_torps['prototype']) instanceof a_torps || (a_torps = function (rqso, vrsqp) {
  function _1420() {}for (vrsqp in _1420['prototype'] = vrsqp, _1420 = new _1420(), rqso) _1420[vrsqp] = rqso[vrsqp];return _1420;
}), exports['XMLReader'] = a_rtpo;