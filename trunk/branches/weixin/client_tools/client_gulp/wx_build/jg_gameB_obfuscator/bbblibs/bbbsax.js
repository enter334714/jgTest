var _ = wx.y$;
function _dnsrqp() {}function _dxw$zv(z_yw, ywvz, $zxwy_, kifgj, opnq) {
  function yvx$(ghdfc) {
    if (ghdfc > 0xffff) {
      ghdfc -= 0x10000;var bfd = 0xd800 + (ghdfc >> 0xa),
          rwvsu = 0xdc00 + (0x3ff & ghdfc);return String['fromCharCode'](bfd, rwvsu);
    }return String['fromCharCode'](ghdfc);
  }function xw$yz(edgf) {
    var kjf = edgf['slice'](0x1, -0x1);return kjf in $zxwy_ ? $zxwy_[kjf] : '#' === kjf['charAt'](0x0) ? yvx$(parseInt(kjf['substr'](0x1)['replace']('x', '0x'))) : (opnq['error']('entity not found:' + edgf), edgf);
  }function pklnmo(tusx) {
    if (tusx > fdeig) {
      var $_y0zx = z_yw['substring'](fdeig, tusx)['replace'](/&#?\w+;/g, xw$yz);usrwt && zwvu(fdeig), kifgj['characters']($_y0zx, 0x0, tusx - fdeig), fdeig = tusx;
    }
  }function zwvu(qlmno, pqmol) {
    for (; qlmno >= nmkijl && (pqmol = ghdfec['exec'](z_yw));) suq = pqmol['index'], nmkijl = suq + pqmol[0x0]['length'], usrwt['lineNumber']++;usrwt['columnNumber'] = qlmno - suq + 0x1;
  }for (var suq = 0x0, nmkijl = 0x0, ghdfec = /.*(?:\r\n?|\n)|.*$/g, usrwt = kifgj['locator'], efidhg = [{ 'currentNSMap': ywvz }], fdacb = {}, fdeig = 0x0;;) {
    try {
      var inklmj = z_yw['indexOf']('<', fdeig);if (0x0 > inklmj) {
        if (!z_yw['substr'](fdeig)['match'](/^\s*$/)) {
          var rsut = kifgj['doc'],
              uvwyxt = rsut['createTextNode'](z_yw['substr'](fdeig));rsut['appendChild'](uvwyxt), kifgj['currentElement'] = uvwyxt;
        }return;
      }switch (inklmj > fdeig && pklnmo(inklmj), z_yw['charAt'](inklmj + 0x1)) {case '/':
          var gfej = z_yw['indexOf']('>', inklmj + 0x3),
              gejfih = z_yw['substring'](inklmj + 0x2, gfej),
              vtyxwu = efidhg['pop']();0x0 > gfej ? (gejfih = z_yw['substring'](inklmj + 0x2)['replace'](/[\s<].*/, ''), opnq['error']('end tag name: ' + gejfih + ' is not complete:' + vtyxwu['tagName']), gfej = inklmj + 0x1 + gejfih['length']) : gejfih['match'](/\s</) && (gejfih = gejfih['replace'](/[\s<].*/, ''), opnq['error']('end tag name: ' + gejfih + ' maybe not complete'), gfej = inklmj + 0x1 + gejfih['length']);var pstro = vtyxwu['localNSMap'],
              moqnpr = vtyxwu['tagName'] == gejfih,
              cfbged = moqnpr || vtyxwu['tagName'] && vtyxwu['tagName']['toLowerCase']() == gejfih['toLowerCase']();if (cfbged) {
            if (kifgj['endElement'](vtyxwu['uri'], vtyxwu['localName'], gejfih), pstro) {
              for (var jhkfig in pstro) kifgj['endPrefixMapping'](jhkfig);
            }moqnpr || opnq['fatalError']('end tag name: ' + gejfih + ' is not match the current start tagName:' + vtyxwu['tagName']);
          } else efidhg['push'](vtyxwu);gfej++;break;case '?':
          usrwt && zwvu(inklmj), gfej = _dnmkplo(z_yw, inklmj, kifgj);break;case '!':
          usrwt && zwvu(inklmj), gfej = _dkjnli(z_yw, inklmj, kifgj, opnq);break;default:
          usrwt && zwvu(inklmj);var efab = new _doqnrps(),
              ebgdf = efidhg[efidhg['length'] - 0x1]['currentNSMap'],
              gfej = _dwyx$z_(z_yw, inklmj, efab, ebgdf, xw$yz, opnq),
              vuzxwy = efab['length'];if (!efab['closed'] && _dwyxzuv(z_yw, gfej, efab['tagName'], fdacb) && (efab['closed'] = !0x0, $zxwy_['nbsp'] || opnq['warning']('unclosed xml attribute')), usrwt && vuzxwy) {
            for (var qposnr = _dknmi(usrwt, {}), nqposr = 0x0; vuzxwy > nqposr; nqposr++) {
              var gjhef = efab[nqposr];zwvu(gjhef['offset']), gjhef['locator'] = _dknmi(usrwt, {});
            }kifgj['locator'] = qposnr, _drtosqp(efab, kifgj, ebgdf) && efidhg['push'](efab), kifgj['locator'] = usrwt;
          } else _drtosqp(efab, kifgj, ebgdf) && efidhg['push'](efab);'http://www.w3.org/1999/xhtml' !== efab['uri'] || efab['closed'] ? gfej++ : gfej = _dhgfijk(z_yw, gfej, efab['tagName'], xw$yz, kifgj);}
    } catch (inkmlj) {
      opnq['error']('element parse error: ' + inkmlj), gfej = -0x1;
    }gfej > fdeig ? fdeig = gfej : pklnmo(Math['max'](inklmj, fdeig) + 0x1);
  }
}function _dknmi(xz0_y, bfcge) {
  return bfcge['lineNumber'] = xz0_y['lineNumber'], bfcge['columnNumber'] = xz0_y['columnNumber'], bfcge;
}function _dwyx$z_(egfhi, urvwt, bcfdg, mlnjik, wrsvut, jmilh) {
  for (var y01z_$, kjgi, otq = ++urvwt, vxtsw = _dvxzuy;;) {
    var $0zy_ = egfhi['charAt'](otq);switch ($0zy_) {case '=':
        if (vxtsw === _d$y_1z) y01z_$ = egfhi['slice'](urvwt, otq), vxtsw = _dustwvx;else {
          if (vxtsw !== _dhejgfi) throw new Error('attribute equal must after attrName');vxtsw = _dustwvx;
        }break;case '\x27':case '\x22':
        if (vxtsw === _dustwvx || vxtsw === _d$y_1z) {
          if (vxtsw === _d$y_1z && (jmilh['warning']('attribute value must after "="'), y01z_$ = egfhi['slice'](urvwt, otq)), urvwt = otq + 0x1, otq = egfhi['indexOf']($0zy_, urvwt), !(otq > 0x0)) throw new Error('attribute value no end \'' + $0zy_ + '\' match');kjgi = egfhi['slice'](urvwt, otq)['replace'](/&#?\w+;/g, wrsvut), bcfdg['add'](y01z_$, kjgi, urvwt - 0x1), vxtsw = _dtuvsqr;
        } else {
          if (vxtsw != _dikhgf) throw new Error('attribute value must after "="');kjgi = egfhi['slice'](urvwt, otq)['replace'](/&#?\w+;/g, wrsvut), bcfdg['add'](y01z_$, kjgi, urvwt), jmilh['warning']('attribute "' + y01z_$ + '" missed start quot(' + $0zy_ + ')!!'), urvwt = otq + 0x1, vxtsw = _dtuvsqr;
        }break;case '/':
        switch (vxtsw) {case _dvxzuy:
            bcfdg['setTagName'](egfhi['slice'](urvwt, otq));case _dtuvsqr:case _dmjhlk:case _dtsxw:
            vxtsw = _dtsxw, bcfdg['closed'] = !0x0;case _dikhgf:case _d$y_1z:case _dhejgfi:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return jmilh['error']('unexpected end of input'), vxtsw == _dvxzuy && bcfdg['setTagName'](egfhi['slice'](urvwt, otq)), otq;case '>':
        switch (vxtsw) {case _dvxzuy:
            bcfdg['setTagName'](egfhi['slice'](urvwt, otq));case _dtuvsqr:case _dmjhlk:case _dtsxw:
            break;case _dikhgf:case _d$y_1z:
            kjgi = egfhi['slice'](urvwt, otq), '/' === kjgi['slice'](-0x1) && (bcfdg['closed'] = !0x0, kjgi = kjgi['slice'](0x0, -0x1));case _dhejgfi:
            vxtsw === _dhejgfi && (kjgi = y01z_$), vxtsw == _dikhgf ? (jmilh['warning']('attribute "' + kjgi + '" missed quot(")!!'), bcfdg['add'](y01z_$, kjgi['replace'](/&#?\w+;/g, wrsvut), urvwt)) : ('http://www.w3.org/1999/xhtml' === mlnjik[''] && kjgi['match'](/^(?:disabled|checked|selected)$/i) || jmilh['warning']('attribute "' + kjgi + '" missed value!! "' + kjgi + '" instead!!'), bcfdg['add'](kjgi, kjgi, urvwt));break;case _dustwvx:
            throw new Error('attribute value missed!!');}return otq;case '\u0080':
        $0zy_ = '\x20';default:
        if ('\x20' >= $0zy_) switch (vxtsw) {case _dvxzuy:
            bcfdg['setTagName'](egfhi['slice'](urvwt, otq)), vxtsw = _dmjhlk;break;case _d$y_1z:
            y01z_$ = egfhi['slice'](urvwt, otq), vxtsw = _dhejgfi;break;case _dikhgf:
            var kjgi = egfhi['slice'](urvwt, otq)['replace'](/&#?\w+;/g, wrsvut);jmilh['warning']('attribute "' + kjgi + '" missed quot(")!!'), bcfdg['add'](y01z_$, kjgi, urvwt);case _dtuvsqr:
            vxtsw = _dmjhlk;} else switch (vxtsw) {case _dhejgfi:
            {
              bcfdg['tagName'];
            }'http://www.w3.org/1999/xhtml' === mlnjik[''] && y01z_$['match'](/^(?:disabled|checked|selected)$/i) || jmilh['warning']('attribute "' + y01z_$ + '" missed value!! "' + y01z_$ + '" instead2!!'), bcfdg['add'](y01z_$, y01z_$, urvwt), urvwt = otq, vxtsw = _d$y_1z;break;case _dtuvsqr:
            jmilh['warning']('attribute space is required"' + y01z_$ + '\x22!!');case _dmjhlk:
            vxtsw = _d$y_1z, urvwt = otq;break;case _dustwvx:
            vxtsw = _dikhgf, urvwt = otq;break;case _dtsxw:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}otq++;
  }
}function _drtosqp(kmnlop, quvtr, uvxwst) {
  for (var xyz0_ = kmnlop['tagName'], txuvwy = null, yxzuwv = kmnlop['length']; yxzuwv--;) {
    var srut = kmnlop[yxzuwv],
        opqtrs = srut['qName'],
        uqtsv = srut['value'],
        hidfe = opqtrs['indexOf'](':');if (hidfe > 0x0) var $12z_0 = srut['prefix'] = opqtrs['slice'](0x0, hidfe),
        hk = opqtrs['slice'](hidfe + 0x1),
        qsnp = 'xmlns' === $12z_0 && hk;else hk = opqtrs, $12z_0 = null, qsnp = 'xmlns' === opqtrs && '';srut['localName'] = hk, qsnp !== !0x1 && (null == txuvwy && (txuvwy = {}, _dxuvtwy(uvxwst, uvxwst = {})), uvxwst[qsnp] = txuvwy[qsnp] = uqtsv, srut['uri'] = 'http://www.w3.org/2000/xmlns/', quvtr['startPrefixMapping'](qsnp, uqtsv));
  }for (var yxzuwv = kmnlop['length']; yxzuwv--;) {
    srut = kmnlop[yxzuwv];var $12z_0 = srut['prefix'];$12z_0 && ('xml' === $12z_0 && (srut['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $12z_0 && (srut['uri'] = uvxwst[$12z_0 || '']));
  }var hidfe = xyz0_['indexOf'](':');hidfe > 0x0 ? ($12z_0 = kmnlop['prefix'] = xyz0_['slice'](0x0, hidfe), hk = kmnlop['localName'] = xyz0_['slice'](hidfe + 0x1)) : ($12z_0 = null, hk = kmnlop['localName'] = xyz0_);var mkjn = kmnlop['uri'] = uvxwst[$12z_0 || ''];if (quvtr['startElement'](mkjn, hk, xyz0_, kmnlop), !kmnlop['closed']) return kmnlop['currentNSMap'] = uvxwst, kmnlop['localNSMap'] = txuvwy, !0x0;if (quvtr['endElement'](mkjn, hk, xyz0_), txuvwy) {
    for ($12z_0 in txuvwy) quvtr['endPrefixMapping']($12z_0);
  }
}function _dhgfijk(_12$3, gkhilj, tspur, rqpnm, adcfb) {
  if (/^(?:script|textarea)$/i['test'](tspur)) {
    var zwyx$v = _12$3['indexOf']('</' + tspur + '>', gkhilj),
        lnmo = _12$3['substring'](gkhilj + 0x1, zwyx$v);if (/[&<]/['test'](lnmo)) return (/^script$/i['test'](tspur) ? (adcfb['characters'](lnmo, 0x0, lnmo['length']), zwyx$v) : (lnmo = lnmo['replace'](/&#?\w+;/g, rqpnm), adcfb['characters'](lnmo, 0x0, lnmo['length']), zwyx$v)
    );
  }return gkhilj + 0x1;
}function _dwyxzuv(uvrqt, oqpmr, svq, uyxv) {
  var yx$vzw = uyxv[svq];return null == yx$vzw && (yx$vzw = uvrqt['lastIndexOf']('</' + svq + '>'), oqpmr > yx$vzw && (yx$vzw = uvrqt['lastIndexOf']('</' + svq)), uyxv[svq] = yx$vzw), oqpmr > yx$vzw;
}function _dxuvtwy(jkfgi, rostqp) {
  for (var befdca in jkfgi) rostqp[befdca] = jkfgi[befdca];
}function _dkjnli(ikhgfj, twsvu, qps, ijhlk) {
  var _10$z2 = ikhgfj['charAt'](twsvu + 0x2);switch (_10$z2) {case '-':
      if ('-' === ikhgfj['charAt'](twsvu + 0x3)) {
        var aedfbc = ikhgfj['indexOf']('-->', twsvu + 0x4);return aedfbc > twsvu ? (qps['comment'](ikhgfj, twsvu + 0x4, aedfbc - twsvu - 0x4), aedfbc + 0x3) : (ijhlk['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ikhgfj['substr'](twsvu + 0x3, 0x6)) {
        var aedfbc = ikhgfj['indexOf'](']]>', twsvu + 0x9);return qps['startCDATA'](), qps['characters'](ikhgfj, twsvu + 0x9, aedfbc - twsvu - 0x9), qps['endCDATA'](), aedfbc + 0x3;
      }var tpsu = _dhedgcf(ikhgfj, twsvu),
          tsoqpr = tpsu['length'];if (tsoqpr > 0x1 && /!doctype/i['test'](tpsu[0x0][0x0])) {
        var dehfi = tpsu[0x1][0x0],
            xzu = tsoqpr > 0x3 && /^public$/i['test'](tpsu[0x2][0x0]) && tpsu[0x3][0x0],
            bfdeg = tsoqpr > 0x4 && tpsu[0x4][0x0],
            geij = tpsu[tsoqpr - 0x1];return qps['startDTD'](dehfi, xzu && xzu['replace'](/^(['"])(.*?)\1$/, '$2'), bfdeg && bfdeg['replace'](/^(['"])(.*?)\1$/, '$2')), qps['endDTD'](), geij['index'] + geij[0x0]['length'];
      }}return -0x1;
}function _dnmkplo(ighfej, gihlj, rpsoqn) {
  var lojmk = ighfej['indexOf']('?>', gihlj);if (lojmk) {
    var fegbcd = ighfej['substring'](gihlj, lojmk)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (fegbcd) {
      {
        fegbcd[0x0]['length'];
      }return rpsoqn['processingInstruction'](fegbcd[0x1], fegbcd[0x2]), lojmk + 0x2;
    }return -0x1;
  }return -0x1;
}function _doqnrps() {}function _dsnpor(plomkn, otprqs) {
  return plomkn['__proto__'] = otprqs, plomkn;
}function _dhedgcf(dghe, orstp) {
  var pqrson,
      wvsurt = [],
      kjminl = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (kjminl['lastIndex'] = orstp, kjminl['exec'](dghe); pqrson = kjminl['exec'](dghe);) if (wvsurt['push'](pqrson), pqrson[0x1]) return wvsurt;
}var _dxw$_y = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _durvts = new RegExp('[\\-\\.0-9' + _dxw$_y['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dzvwuy = new RegExp('^' + _dxw$_y['source'] + _durvts['source'] + '*(?::' + _dxw$_y['source'] + _durvts['source'] + '*)?$'),
    _dvxzuy = 0x0,
    _d$y_1z = 0x1,
    _dhejgfi = 0x2,
    _dustwvx = 0x3,
    _dikhgf = 0x4,
    _dtuvsqr = 0x5,
    _dmjhlk = 0x6,
    _dtsxw = 0x7;_dnsrqp['prototype'] = { 'parse': function (opqnsr, xz_$, gjihf) {
    var z_wy = this['domBuilder'];z_wy['startDocument'](), _dxuvtwy(xz_$, xz_$ = {}), _dxw$zv(opqnsr, xz_$, gjihf, z_wy, this['errorHandler']), z_wy['endDocument']();
  } }, _doqnrps['prototype'] = { 'setTagName': function (_320$) {
    if (!_dzvwuy['test'](_320$)) throw new Error('invalid tagName:' + _320$);this['tagName'] = _320$;
  }, 'add': function (onmkl, hfgki, y_zx$) {
    if (!_dzvwuy['test'](onmkl)) throw new Error('invalid attribute:' + onmkl);this[this['length']++] = { 'qName': onmkl, 'value': hfgki, 'offset': y_zx$ };
  }, 'length': 0x0, 'getLocalName': function (eabdcf) {
    return this[eabdcf]['localName'];
  }, 'getLocator': function (kjfhig) {
    return this[kjfhig]['locator'];
  }, 'getQName': function (xzwvyu) {
    return this[xzwvyu]['qName'];
  }, 'getURI': function (z01$_) {
    return this[z01$_]['uri'];
  }, 'getValue': function (tuvsr) {
    return this[tuvsr]['value'];
  } }, _dsnpor({}, _dsnpor['prototype']) instanceof _dsnpor || (_dsnpor = function (_14230, eafb) {
  function $zw_x() {}$zw_x['prototype'] = eafb, $zw_x = new $zw_x();for (eafb in _14230) $zw_x[eafb] = _14230[eafb];return $zw_x;
}), exports['XMLReader'] = _dnsrqp;