var _ = wx.y$;
function _dfbcdea() {}function _dmonkjl(xtuywv, hkmil, fjkih, wsuvrt, _$1z20) {
  function rqsop(hlkij) {
    if (hlkij > 0xffff) {
      hlkij -= 0x10000;var wtxy = 0xd800 + (hlkij >> 0xa),
          hkgi = 0xdc00 + (0x3ff & hlkij);return String['fromCharCode'](wtxy, hkgi);
    }return String['fromCharCode'](hlkij);
  }function wrsvut(nkljo) {
    var pqrsno = nkljo['slice'](0x1, -0x1);return pqrsno in fjkih ? fjkih[pqrsno] : '#' === pqrsno['charAt'](0x0) ? rqsop(parseInt(pqrsno['substr'](0x1)['replace']('x', '0x'))) : (_$1z20['error']('entity not found:' + nkljo), nkljo);
  }function osqrt(suptq) {
    if (suptq > prsqu) {
      var uswt = xtuywv['substring'](prsqu, suptq)['replace'](/&#?\w+;/g, wrsvut);omqnrp && hfiedg(prsqu), wsuvrt['characters'](uswt, 0x0, suptq - prsqu), prsqu = suptq;
    }
  }function hfiedg(ornpmq, _0z1$y) {
    for (; ornpmq >= nmlpok && (_0z1$y = nolmjk['exec'](xtuywv));) uvxwyz = _0z1$y['index'], nmlpok = uvxwyz + _0z1$y[0x0]['length'], omqnrp['lineNumber']++;omqnrp['columnNumber'] = ornpmq - uvxwyz + 0x1;
  }for (var uvxwyz = 0x0, nmlpok = 0x0, nolmjk = /.*(?:\r\n?|\n)|.*$/g, omqnrp = wsuvrt['locator'], ijhml = [{ 'currentNSMap': hkmil }], eghfdi = {}, prsqu = 0x0;;) {
    try {
      var vty = xtuywv['indexOf']('<', prsqu);if (0x0 > vty) {
        if (!xtuywv['substr'](prsqu)['match'](/^\s*$/)) {
          var lmnqo = wsuvrt['doc'],
              quptsr = lmnqo['createTextNode'](xtuywv['substr'](prsqu));lmnqo['appendChild'](quptsr), wsuvrt['currentElement'] = quptsr;
        }return;
      }switch (vty > prsqu && osqrt(vty), xtuywv['charAt'](vty + 0x1)) {case '/':
          var y$z10_ = xtuywv['indexOf']('>', vty + 0x3),
              gljk = xtuywv['substring'](vty + 0x2, y$z10_),
              vsuqr = ijhml['pop']();0x0 > y$z10_ ? (gljk = xtuywv['substring'](vty + 0x2)['replace'](/[\s<].*/, ''), _$1z20['error']('end tag name: ' + gljk + ' is not complete:' + vsuqr['tagName']), y$z10_ = vty + 0x1 + gljk['length']) : gljk['match'](/\s</) && (gljk = gljk['replace'](/[\s<].*/, ''), _$1z20['error']('end tag name: ' + gljk + ' maybe not complete'), y$z10_ = vty + 0x1 + gljk['length']);var $zx_ = vsuqr['localNSMap'],
              bdfge = vsuqr['tagName'] == gljk,
              wvsutx = bdfge || vsuqr['tagName'] && vsuqr['tagName']['toLowerCase']() == gljk['toLowerCase']();if (wvsutx) {
            if (wsuvrt['endElement'](vsuqr['uri'], vsuqr['localName'], gljk), $zx_) {
              for (var qnsr in $zx_) wsuvrt['endPrefixMapping'](qnsr);
            }bdfge || _$1z20['fatalError']('end tag name: ' + gljk + ' is not match the current start tagName:' + vsuqr['tagName']);
          } else ijhml['push'](vsuqr);y$z10_++;break;case '?':
          omqnrp && hfiedg(vty), y$z10_ = _dfgdb(xtuywv, vty, wsuvrt);break;case '!':
          omqnrp && hfiedg(vty), y$z10_ = _dwuvyx(xtuywv, vty, wsuvrt, _$1z20);break;default:
          omqnrp && hfiedg(vty);var mkhl = new _dlikgj(),
              gfjei = ijhml[ijhml['length'] - 0x1]['currentNSMap'],
              y$z10_ = _dtqsrop(xtuywv, vty, mkhl, gfjei, wrsvut, _$1z20),
              moqnpr = mkhl['length'];if (!mkhl['closed'] && _dmronp(xtuywv, y$z10_, mkhl['tagName'], eghfdi) && (mkhl['closed'] = !0x0, fjkih['nbsp'] || _$1z20['warning']('unclosed xml attribute')), omqnrp && moqnpr) {
            for (var zx_0$y = _dkmolj(omqnrp, {}), lnikj = 0x0; moqnpr > lnikj; lnikj++) {
              var poqsnr = mkhl[lnikj];hfiedg(poqsnr['offset']), poqsnr['locator'] = _dkmolj(omqnrp, {});
            }wsuvrt['locator'] = zx_0$y, _dqtus(mkhl, wsuvrt, gfjei) && ijhml['push'](mkhl), wsuvrt['locator'] = omqnrp;
          } else _dqtus(mkhl, wsuvrt, gfjei) && ijhml['push'](mkhl);'http://www.w3.org/1999/xhtml' !== mkhl['uri'] || mkhl['closed'] ? y$z10_++ : y$z10_ = _dlomqn(xtuywv, y$z10_, mkhl['tagName'], wrsvut, wsuvrt);}
    } catch ($ywvxz) {
      _$1z20['error']('element parse error: ' + $ywvxz), y$z10_ = -0x1;
    }y$z10_ > prsqu ? prsqu = y$z10_ : osqrt(Math['max'](vty, prsqu) + 0x1);
  }
}function _dkmolj(edgfch, onpmq) {
  return onpmq['lineNumber'] = edgfch['lineNumber'], onpmq['columnNumber'] = edgfch['columnNumber'], onpmq;
}function _dtqsrop(ghefdi, wuvsxt, yz$1_0, mklnoj, hklg, feacb) {
  for (var sqpurt, strqop, tsop = ++wuvsxt, polmnk = _defcgb;;) {
    var nlm = ghefdi['charAt'](tsop);switch (nlm) {case '=':
        if (polmnk === _d$203_1) sqpurt = ghefdi['slice'](wuvsxt, tsop), polmnk = _dedfba;else {
          if (polmnk !== _dz_wy$x) throw new Error('attribute equal must after attrName');polmnk = _dedfba;
        }break;case '\x27':case '\x22':
        if (polmnk === _dedfba || polmnk === _d$203_1) {
          if (polmnk === _d$203_1 && (feacb['warning']('attribute value must after "="'), sqpurt = ghefdi['slice'](wuvsxt, tsop)), wuvsxt = tsop + 0x1, tsop = ghefdi['indexOf'](nlm, wuvsxt), !(tsop > 0x0)) throw new Error('attribute value no end \'' + nlm + '\' match');strqop = ghefdi['slice'](wuvsxt, tsop)['replace'](/&#?\w+;/g, hklg), yz$1_0['add'](sqpurt, strqop, wuvsxt - 0x1), polmnk = _drstvwu;
        } else {
          if (polmnk != _dstwr) throw new Error('attribute value must after "="');strqop = ghefdi['slice'](wuvsxt, tsop)['replace'](/&#?\w+;/g, hklg), yz$1_0['add'](sqpurt, strqop, wuvsxt), feacb['warning']('attribute "' + sqpurt + '" missed start quot(' + nlm + ')!!'), wuvsxt = tsop + 0x1, polmnk = _drstvwu;
        }break;case '/':
        switch (polmnk) {case _defcgb:
            yz$1_0['setTagName'](ghefdi['slice'](wuvsxt, tsop));case _drstvwu:case _domlnkj:case _dsnopr:
            polmnk = _dsnopr, yz$1_0['closed'] = !0x0;case _dstwr:case _d$203_1:case _dz_wy$x:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return feacb['error']('unexpected end of input'), polmnk == _defcgb && yz$1_0['setTagName'](ghefdi['slice'](wuvsxt, tsop)), tsop;case '>':
        switch (polmnk) {case _defcgb:
            yz$1_0['setTagName'](ghefdi['slice'](wuvsxt, tsop));case _drstvwu:case _domlnkj:case _dsnopr:
            break;case _dstwr:case _d$203_1:
            strqop = ghefdi['slice'](wuvsxt, tsop), '/' === strqop['slice'](-0x1) && (yz$1_0['closed'] = !0x0, strqop = strqop['slice'](0x0, -0x1));case _dz_wy$x:
            polmnk === _dz_wy$x && (strqop = sqpurt), polmnk == _dstwr ? (feacb['warning']('attribute "' + strqop + '" missed quot(")!!'), yz$1_0['add'](sqpurt, strqop['replace'](/&#?\w+;/g, hklg), wuvsxt)) : ('http://www.w3.org/1999/xhtml' === mklnoj[''] && strqop['match'](/^(?:disabled|checked|selected)$/i) || feacb['warning']('attribute "' + strqop + '" missed value!! "' + strqop + '" instead!!'), yz$1_0['add'](strqop, strqop, wuvsxt));break;case _dedfba:
            throw new Error('attribute value missed!!');}return tsop;case '\u0080':
        nlm = '\x20';default:
        if ('\x20' >= nlm) switch (polmnk) {case _defcgb:
            yz$1_0['setTagName'](ghefdi['slice'](wuvsxt, tsop)), polmnk = _domlnkj;break;case _d$203_1:
            sqpurt = ghefdi['slice'](wuvsxt, tsop), polmnk = _dz_wy$x;break;case _dstwr:
            var strqop = ghefdi['slice'](wuvsxt, tsop)['replace'](/&#?\w+;/g, hklg);feacb['warning']('attribute "' + strqop + '" missed quot(")!!'), yz$1_0['add'](sqpurt, strqop, wuvsxt);case _drstvwu:
            polmnk = _domlnkj;} else switch (polmnk) {case _dz_wy$x:
            {
              yz$1_0['tagName'];
            }'http://www.w3.org/1999/xhtml' === mklnoj[''] && sqpurt['match'](/^(?:disabled|checked|selected)$/i) || feacb['warning']('attribute "' + sqpurt + '" missed value!! "' + sqpurt + '" instead2!!'), yz$1_0['add'](sqpurt, sqpurt, wuvsxt), wuvsxt = tsop, polmnk = _d$203_1;break;case _drstvwu:
            feacb['warning']('attribute space is required"' + sqpurt + '\x22!!');case _domlnkj:
            polmnk = _d$203_1, wuvsxt = tsop;break;case _dedfba:
            polmnk = _dstwr, wuvsxt = tsop;break;case _dsnopr:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}tsop++;
  }
}function _dqtus(nmqrp, qrpso, $0_1z) {
  for (var upqrst = nmqrp['tagName'], $zw_ = null, hfdg = nmqrp['length']; hfdg--;) {
    var vzx$ = nmqrp[hfdg],
        z0$1_ = vzx$['qName'],
        uwsxtv = vzx$['value'],
        $zy_w = z0$1_['indexOf'](':');if ($zy_w > 0x0) var nromqp = vzx$['prefix'] = z0$1_['slice'](0x0, $zy_w),
        ljon = z0$1_['slice']($zy_w + 0x1),
        srnpq = 'xmlns' === nromqp && ljon;else ljon = z0$1_, nromqp = null, srnpq = 'xmlns' === z0$1_ && '';vzx$['localName'] = ljon, srnpq !== !0x1 && (null == $zw_ && ($zw_ = {}, _dghecf($0_1z, $0_1z = {})), $0_1z[srnpq] = $zw_[srnpq] = uwsxtv, vzx$['uri'] = 'http://www.w3.org/2000/xmlns/', qrpso['startPrefixMapping'](srnpq, uwsxtv));
  }for (var hfdg = nmqrp['length']; hfdg--;) {
    vzx$ = nmqrp[hfdg];var nromqp = vzx$['prefix'];nromqp && ('xml' === nromqp && (vzx$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== nromqp && (vzx$['uri'] = $0_1z[nromqp || '']));
  }var $zy_w = upqrst['indexOf'](':');$zy_w > 0x0 ? (nromqp = nmqrp['prefix'] = upqrst['slice'](0x0, $zy_w), ljon = nmqrp['localName'] = upqrst['slice']($zy_w + 0x1)) : (nromqp = null, ljon = nmqrp['localName'] = upqrst);var gfhde = nmqrp['uri'] = $0_1z[nromqp || ''];if (qrpso['startElement'](gfhde, ljon, upqrst, nmqrp), !nmqrp['closed']) return nmqrp['currentNSMap'] = $0_1z, nmqrp['localNSMap'] = $zw_, !0x0;if (qrpso['endElement'](gfhde, ljon, upqrst), $zw_) {
    for (nromqp in $zw_) qrpso['endPrefixMapping'](nromqp);
  }
}function _dlomqn(jhgef, ifgh, uxzwy, uvxyzw, vsqrtu) {
  if (/^(?:script|textarea)$/i['test'](uxzwy)) {
    var gjfki = jhgef['indexOf']('</' + uxzwy + '>', ifgh),
        nqro = jhgef['substring'](ifgh + 0x1, gjfki);if (/[&<]/['test'](nqro)) return (/^script$/i['test'](uxzwy) ? (vsqrtu['characters'](nqro, 0x0, nqro['length']), gjfki) : (nqro = nqro['replace'](/&#?\w+;/g, uvxyzw), vsqrtu['characters'](nqro, 0x0, nqro['length']), gjfki)
    );
  }return ifgh + 0x1;
}function _dmronp(cedfba, x$zyv, mkijln, tyuwvx) {
  var $03_ = tyuwvx[mkijln];return null == $03_ && ($03_ = cedfba['lastIndexOf']('</' + mkijln + '>'), x$zyv > $03_ && ($03_ = cedfba['lastIndexOf']('</' + mkijln)), tyuwvx[mkijln] = $03_), x$zyv > $03_;
}function _dghecf(prsotq, z0y$1) {
  for (var bgdecf in prsotq) z0y$1[bgdecf] = prsotq[bgdecf];
}function _dwuvyx(ghkjil, mkljin, nmoljk, pqnors) {
  var _14 = ghkjil['charAt'](mkljin + 0x2);switch (_14) {case '-':
      if ('-' === ghkjil['charAt'](mkljin + 0x3)) {
        var uqvsrt = ghkjil['indexOf']('-->', mkljin + 0x4);return uqvsrt > mkljin ? (nmoljk['comment'](ghkjil, mkljin + 0x4, uqvsrt - mkljin - 0x4), uqvsrt + 0x3) : (pqnors['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ghkjil['substr'](mkljin + 0x3, 0x6)) {
        var uqvsrt = ghkjil['indexOf'](']]>', mkljin + 0x9);return nmoljk['startCDATA'](), nmoljk['characters'](ghkjil, mkljin + 0x9, uqvsrt - mkljin - 0x9), nmoljk['endCDATA'](), uqvsrt + 0x3;
      }var zy0$ = _durtpq(ghkjil, mkljin),
          jomnkl = zy0$['length'];if (jomnkl > 0x1 && /!doctype/i['test'](zy0$[0x0][0x0])) {
        var x_yz$w = zy0$[0x1][0x0],
            fbcaed = jomnkl > 0x3 && /^public$/i['test'](zy0$[0x2][0x0]) && zy0$[0x3][0x0],
            pknmo = jomnkl > 0x4 && zy0$[0x4][0x0],
            ihfedg = zy0$[jomnkl - 0x1];return nmoljk['startDTD'](x_yz$w, fbcaed && fbcaed['replace'](/^(['"])(.*?)\1$/, '$2'), pknmo && pknmo['replace'](/^(['"])(.*?)\1$/, '$2')), nmoljk['endDTD'](), ihfedg['index'] + ihfedg[0x0]['length'];
      }}return -0x1;
}function _dfgdb(zxyuv, lq, $0312) {
  var sux = zxyuv['indexOf']('?>', lq);if (sux) {
    var fhejg = zxyuv['substring'](lq, sux)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (fhejg) {
      {
        fhejg[0x0]['length'];
      }return $0312['processingInstruction'](fhejg[0x1], fhejg[0x2]), sux + 0x2;
    }return -0x1;
  }return -0x1;
}function _dlikgj() {}function _drqonpm(xytuw, lmpnqo) {
  return xytuw['__proto__'] = lmpnqo, xytuw;
}function _durtpq(fbdcea, z0$yx) {
  var noqpl,
      orqtsp = [],
      ytu = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ytu['lastIndex'] = z0$yx, ytu['exec'](fbdcea); noqpl = ytu['exec'](fbdcea);) if (orqtsp['push'](noqpl), noqpl[0x1]) return orqtsp;
}var _dpkol = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _d_31402 = new RegExp('[\\-\\.0-9' + _dpkol['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dpolnmk = new RegExp('^' + _dpkol['source'] + _d_31402['source'] + '*(?::' + _dpkol['source'] + _d_31402['source'] + '*)?$'),
    _defcgb = 0x0,
    _d$203_1 = 0x1,
    _dz_wy$x = 0x2,
    _dedfba = 0x3,
    _dstwr = 0x4,
    _drstvwu = 0x5,
    _domlnkj = 0x6,
    _dsnopr = 0x7;_dfbcdea['prototype'] = { 'parse': function (yuvt, efdcgh, jfehg) {
    var efadc = this['domBuilder'];efadc['startDocument'](), _dghecf(efdcgh, efdcgh = {}), _dmonkjl(yuvt, efdcgh, jfehg, efadc, this['errorHandler']), efadc['endDocument']();
  } }, _dlikgj['prototype'] = { 'setTagName': function (higjl) {
    if (!_dpolnmk['test'](higjl)) throw new Error('invalid tagName:' + higjl);this['tagName'] = higjl;
  }, 'add': function (mjihl, gdfehc, xyzvuw) {
    if (!_dpolnmk['test'](mjihl)) throw new Error('invalid attribute:' + mjihl);this[this['length']++] = { 'qName': mjihl, 'value': gdfehc, 'offset': xyzvuw };
  }, 'length': 0x0, 'getLocalName': function (dgehc) {
    return this[dgehc]['localName'];
  }, 'getLocator': function (vywuxt) {
    return this[vywuxt]['locator'];
  }, 'getQName': function (onqplm) {
    return this[onqplm]['qName'];
  }, 'getURI': function (pqonml) {
    return this[pqonml]['uri'];
  }, 'getValue': function (stvrwu) {
    return this[stvrwu]['value'];
  } }, _drqonpm({}, _drqonpm['prototype']) instanceof _drqonpm || (_drqonpm = function (kjihl, vtwsux) {
  function oqnml() {}oqnml['prototype'] = vtwsux, oqnml = new oqnml();for (vtwsux in kjihl) oqnml[vtwsux] = kjihl[vtwsux];return oqnml;
}), exports['XMLReader'] = _dfbcdea;