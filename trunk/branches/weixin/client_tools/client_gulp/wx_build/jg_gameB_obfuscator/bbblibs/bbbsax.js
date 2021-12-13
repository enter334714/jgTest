var _ = wx.y$;
function _dtuxsw() {}function _dghecdf(kijghl, bfdec, iejf, wvx$yz, uvxtsw) {
  function sqr(spuq) {
    if (spuq > 0xffff) {
      spuq -= 0x10000;var _143 = 0xd800 + (spuq >> 0xa),
          uwtvxs = 0xdc00 + (0x3ff & spuq);return String['fromCharCode'](_143, uwtvxs);
    }return String['fromCharCode'](spuq);
  }function vxsuwt(hjlim) {
    var qromnp = hjlim['slice'](0x1, -0x1);return qromnp in iejf ? iejf[qromnp] : '#' === qromnp['charAt'](0x0) ? sqr(parseInt(qromnp['substr'](0x1)['replace']('x', '0x'))) : (uvxtsw['error']('entity not found:' + hjlim), hjlim);
  }function swtuvr(orstp) {
    if (orstp > x$wy_) {
      var vrqt = kijghl['substring'](x$wy_, orstp)['replace'](/&#?\w+;/g, vxsuwt);stuwv && vwtxus(x$wy_), wvx$yz['characters'](vrqt, 0x0, orstp - x$wy_), x$wy_ = orstp;
    }
  }function vwtxus(geihj, ljinkm) {
    for (; geihj >= qstrpo && (ljinkm = ropnqm['exec'](kijghl));) ywuv = ljinkm['index'], qstrpo = ywuv + ljinkm[0x0]['length'], stuwv['lineNumber']++;stuwv['columnNumber'] = geihj - ywuv + 0x1;
  }for (var ywuv = 0x0, qstrpo = 0x0, ropnqm = /.*(?:\r\n?|\n)|.*$/g, stuwv = wvx$yz['locator'], prsqo = [{ 'currentNSMap': bfdec }], xwytvu = {}, x$wy_ = 0x0;;) {
    try {
      var z_$0y1 = kijghl['indexOf']('<', x$wy_);if (0x0 > z_$0y1) {
        if (!kijghl['substr'](x$wy_)['match'](/^\s*$/)) {
          var onsqpr = wvx$yz['doc'],
              fecgdb = onsqpr['createTextNode'](kijghl['substr'](x$wy_));onsqpr['appendChild'](fecgdb), wvx$yz['currentElement'] = fecgdb;
        }return;
      }switch (z_$0y1 > x$wy_ && swtuvr(z_$0y1), kijghl['charAt'](z_$0y1 + 0x1)) {case '/':
          var w_x$y = kijghl['indexOf']('>', z_$0y1 + 0x3),
              $1230 = kijghl['substring'](z_$0y1 + 0x2, w_x$y),
              iljghk = prsqo['pop']();0x0 > w_x$y ? ($1230 = kijghl['substring'](z_$0y1 + 0x2)['replace'](/[\s<].*/, ''), uvxtsw['error']('end tag name: ' + $1230 + ' is not complete:' + iljghk['tagName']), w_x$y = z_$0y1 + 0x1 + $1230['length']) : $1230['match'](/\s</) && ($1230 = $1230['replace'](/[\s<].*/, ''), uvxtsw['error']('end tag name: ' + $1230 + ' maybe not complete'), w_x$y = z_$0y1 + 0x1 + $1230['length']);var dbcfea = iljghk['localNSMap'],
              jmlnok = iljghk['tagName'] == $1230,
              hegi = jmlnok || iljghk['tagName'] && iljghk['tagName']['toLowerCase']() == $1230['toLowerCase']();if (hegi) {
            if (wvx$yz['endElement'](iljghk['uri'], iljghk['localName'], $1230), dbcfea) {
              for (var fjgih in dbcfea) wvx$yz['endPrefixMapping'](fjgih);
            }jmlnok || uvxtsw['fatalError']('end tag name: ' + $1230 + ' is not match the current start tagName:' + iljghk['tagName']);
          } else prsqo['push'](iljghk);w_x$y++;break;case '?':
          stuwv && vwtxus(z_$0y1), w_x$y = _duwyxz(kijghl, z_$0y1, wvx$yz);break;case '!':
          stuwv && vwtxus(z_$0y1), w_x$y = _djmihl(kijghl, z_$0y1, wvx$yz, uvxtsw);break;default:
          stuwv && vwtxus(z_$0y1);var hkiml = new _dfidheg(),
              mkpnol = prsqo[prsqo['length'] - 0x1]['currentNSMap'],
              w_x$y = _dutwsxv(kijghl, z_$0y1, hkiml, mkpnol, vxsuwt, uvxtsw),
              mnljo = hkiml['length'];if (!hkiml['closed'] && _dnjlmi(kijghl, w_x$y, hkiml['tagName'], xwytvu) && (hkiml['closed'] = !0x0, iejf['nbsp'] || uvxtsw['warning']('unclosed xml attribute')), stuwv && mnljo) {
            for (var afbc = _dyw$z_x(stuwv, {}), bfgd = 0x0; mnljo > bfgd; bfgd++) {
              var onrpqs = hkiml[bfgd];vwtxus(onrpqs['offset']), onrpqs['locator'] = _dyw$z_x(stuwv, {});
            }wvx$yz['locator'] = afbc, _durqpt(hkiml, wvx$yz, mkpnol) && prsqo['push'](hkiml), wvx$yz['locator'] = stuwv;
          } else _durqpt(hkiml, wvx$yz, mkpnol) && prsqo['push'](hkiml);'http://www.w3.org/1999/xhtml' !== hkiml['uri'] || hkiml['closed'] ? w_x$y++ : w_x$y = _dlojmnk(kijghl, w_x$y, hkiml['tagName'], vxsuwt, wvx$yz);}
    } catch ($z_x0) {
      uvxtsw['error']('element parse error: ' + $z_x0), w_x$y = -0x1;
    }w_x$y > x$wy_ ? x$wy_ = w_x$y : swtuvr(Math['max'](z_$0y1, x$wy_) + 0x1);
  }
}function _dyw$z_x(bdeaf, deghif) {
  return deghif['lineNumber'] = bdeaf['lineNumber'], deghif['columnNumber'] = bdeaf['columnNumber'], deghif;
}function _dutwsxv(afbde, nqpo, echdgf, ghjilk, cedhf, xsuvwt) {
  for (var ljhkg, pqurst, fjgeh = ++nqpo, qrspto = _dhilmk;;) {
    var w_yz = afbde['charAt'](fjgeh);switch (w_yz) {case '=':
        if (qrspto === _dlhjigk) ljhkg = afbde['slice'](nqpo, fjgeh), qrspto = _dmrpnqo;else {
          if (qrspto !== _dcabf) throw new Error('attribute equal must after attrName');qrspto = _dmrpnqo;
        }break;case '\x27':case '\x22':
        if (qrspto === _dmrpnqo || qrspto === _dlhjigk) {
          if (qrspto === _dlhjigk && (xsuvwt['warning']('attribute value must after "="'), ljhkg = afbde['slice'](nqpo, fjgeh)), nqpo = fjgeh + 0x1, fjgeh = afbde['indexOf'](w_yz, nqpo), !(fjgeh > 0x0)) throw new Error('attribute value no end \'' + w_yz + '\' match');pqurst = afbde['slice'](nqpo, fjgeh)['replace'](/&#?\w+;/g, cedhf), echdgf['add'](ljhkg, pqurst, nqpo - 0x1), qrspto = _dutyxwv;
        } else {
          if (qrspto != _dfgche) throw new Error('attribute value must after "="');pqurst = afbde['slice'](nqpo, fjgeh)['replace'](/&#?\w+;/g, cedhf), echdgf['add'](ljhkg, pqurst, nqpo), xsuvwt['warning']('attribute "' + ljhkg + '" missed start quot(' + w_yz + ')!!'), nqpo = fjgeh + 0x1, qrspto = _dutyxwv;
        }break;case '/':
        switch (qrspto) {case _dhilmk:
            echdgf['setTagName'](afbde['slice'](nqpo, fjgeh));case _dutyxwv:case _dxyuwz:case _dpurqt:
            qrspto = _dpurqt, echdgf['closed'] = !0x0;case _dfgche:case _dlhjigk:case _dcabf:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return xsuvwt['error']('unexpected end of input'), qrspto == _dhilmk && echdgf['setTagName'](afbde['slice'](nqpo, fjgeh)), fjgeh;case '>':
        switch (qrspto) {case _dhilmk:
            echdgf['setTagName'](afbde['slice'](nqpo, fjgeh));case _dutyxwv:case _dxyuwz:case _dpurqt:
            break;case _dfgche:case _dlhjigk:
            pqurst = afbde['slice'](nqpo, fjgeh), '/' === pqurst['slice'](-0x1) && (echdgf['closed'] = !0x0, pqurst = pqurst['slice'](0x0, -0x1));case _dcabf:
            qrspto === _dcabf && (pqurst = ljhkg), qrspto == _dfgche ? (xsuvwt['warning']('attribute "' + pqurst + '" missed quot(")!!'), echdgf['add'](ljhkg, pqurst['replace'](/&#?\w+;/g, cedhf), nqpo)) : ('http://www.w3.org/1999/xhtml' === ghjilk[''] && pqurst['match'](/^(?:disabled|checked|selected)$/i) || xsuvwt['warning']('attribute "' + pqurst + '" missed value!! "' + pqurst + '" instead!!'), echdgf['add'](pqurst, pqurst, nqpo));break;case _dmrpnqo:
            throw new Error('attribute value missed!!');}return fjgeh;case '\u0080':
        w_yz = '\x20';default:
        if ('\x20' >= w_yz) switch (qrspto) {case _dhilmk:
            echdgf['setTagName'](afbde['slice'](nqpo, fjgeh)), qrspto = _dxyuwz;break;case _dlhjigk:
            ljhkg = afbde['slice'](nqpo, fjgeh), qrspto = _dcabf;break;case _dfgche:
            var pqurst = afbde['slice'](nqpo, fjgeh)['replace'](/&#?\w+;/g, cedhf);xsuvwt['warning']('attribute "' + pqurst + '" missed quot(")!!'), echdgf['add'](ljhkg, pqurst, nqpo);case _dutyxwv:
            qrspto = _dxyuwz;} else switch (qrspto) {case _dcabf:
            {
              echdgf['tagName'];
            }'http://www.w3.org/1999/xhtml' === ghjilk[''] && ljhkg['match'](/^(?:disabled|checked|selected)$/i) || xsuvwt['warning']('attribute "' + ljhkg + '" missed value!! "' + ljhkg + '" instead2!!'), echdgf['add'](ljhkg, ljhkg, nqpo), nqpo = fjgeh, qrspto = _dlhjigk;break;case _dutyxwv:
            xsuvwt['warning']('attribute space is required"' + ljhkg + '\x22!!');case _dxyuwz:
            qrspto = _dlhjigk, nqpo = fjgeh;break;case _dmrpnqo:
            qrspto = _dfgche, nqpo = fjgeh;break;case _dpurqt:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}fjgeh++;
  }
}function _durqpt(acb, opmnrq, plmnqo) {
  for (var bgdc = acb['tagName'], tvwrus = null, tqrusv = acb['length']; tqrusv--;) {
    var rstuq = acb[tqrusv],
        omknlp = rstuq['qName'],
        twrsuv = rstuq['value'],
        zxuvw = omknlp['indexOf'](':');if (zxuvw > 0x0) var rtvuq = rstuq['prefix'] = omknlp['slice'](0x0, zxuvw),
        gjlhik = omknlp['slice'](zxuvw + 0x1),
        nlmkp = 'xmlns' === rtvuq && gjlhik;else gjlhik = omknlp, rtvuq = null, nlmkp = 'xmlns' === omknlp && '';rstuq['localName'] = gjlhik, nlmkp !== !0x1 && (null == tvwrus && (tvwrus = {}, _dcehdf(plmnqo, plmnqo = {})), plmnqo[nlmkp] = tvwrus[nlmkp] = twrsuv, rstuq['uri'] = 'http://www.w3.org/2000/xmlns/', opmnrq['startPrefixMapping'](nlmkp, twrsuv));
  }for (var tqrusv = acb['length']; tqrusv--;) {
    rstuq = acb[tqrusv];var rtvuq = rstuq['prefix'];rtvuq && ('xml' === rtvuq && (rstuq['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== rtvuq && (rstuq['uri'] = plmnqo[rtvuq || '']));
  }var zxuvw = bgdc['indexOf'](':');zxuvw > 0x0 ? (rtvuq = acb['prefix'] = bgdc['slice'](0x0, zxuvw), gjlhik = acb['localName'] = bgdc['slice'](zxuvw + 0x1)) : (rtvuq = null, gjlhik = acb['localName'] = bgdc);var heidgf = acb['uri'] = plmnqo[rtvuq || ''];if (opmnrq['startElement'](heidgf, gjlhik, bgdc, acb), !acb['closed']) return acb['currentNSMap'] = plmnqo, acb['localNSMap'] = tvwrus, !0x0;if (opmnrq['endElement'](heidgf, gjlhik, bgdc), tvwrus) {
    for (rtvuq in tvwrus) opmnrq['endPrefixMapping'](rtvuq);
  }
}function _dlojmnk(bgdfc, bcdfe, lnmki, _0zxy, $_1z) {
  if (/^(?:script|textarea)$/i['test'](lnmki)) {
    var yxuvw = bgdfc['indexOf']('</' + lnmki + '>', bcdfe),
        rsquv = bgdfc['substring'](bcdfe + 0x1, yxuvw);if (/[&<]/['test'](rsquv)) return (/^script$/i['test'](lnmki) ? ($_1z['characters'](rsquv, 0x0, rsquv['length']), yxuvw) : (rsquv = rsquv['replace'](/&#?\w+;/g, _0zxy), $_1z['characters'](rsquv, 0x0, rsquv['length']), yxuvw)
    );
  }return bcdfe + 0x1;
}function _dnjlmi(gfihjk, tqsvu, qstro, jgfki) {
  var psqtru = jgfki[qstro];return null == psqtru && (psqtru = gfihjk['lastIndexOf']('</' + qstro + '>'), tqsvu > psqtru && (psqtru = gfihjk['lastIndexOf']('</' + qstro)), jgfki[qstro] = psqtru), tqsvu > psqtru;
}function _dcehdf(opstq, gbcd) {
  for (var urtsp in opstq) gbcd[urtsp] = opstq[urtsp];
}function _djmihl(afcde, xw$vzy, mlpo, $0zy_) {
  var pturqs = afcde['charAt'](xw$vzy + 0x2);switch (pturqs) {case '-':
      if ('-' === afcde['charAt'](xw$vzy + 0x3)) {
        var hijkg = afcde['indexOf']('-->', xw$vzy + 0x4);return hijkg > xw$vzy ? (mlpo['comment'](afcde, xw$vzy + 0x4, hijkg - xw$vzy - 0x4), hijkg + 0x3) : ($0zy_['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == afcde['substr'](xw$vzy + 0x3, 0x6)) {
        var hijkg = afcde['indexOf'](']]>', xw$vzy + 0x9);return mlpo['startCDATA'](), mlpo['characters'](afcde, xw$vzy + 0x9, hijkg - xw$vzy - 0x9), mlpo['endCDATA'](), hijkg + 0x3;
      }var lnopm = _dfgcedb(afcde, xw$vzy),
          pnoqrm = lnopm['length'];if (pnoqrm > 0x1 && /!doctype/i['test'](lnopm[0x0][0x0])) {
        var qtrpus = lnopm[0x1][0x0],
            zx_y$ = pnoqrm > 0x3 && /^public$/i['test'](lnopm[0x2][0x0]) && lnopm[0x3][0x0],
            zvwy$x = pnoqrm > 0x4 && lnopm[0x4][0x0],
            qustr = lnopm[pnoqrm - 0x1];return mlpo['startDTD'](qtrpus, zx_y$ && zx_y$['replace'](/^(['"])(.*?)\1$/, '$2'), zvwy$x && zvwy$x['replace'](/^(['"])(.*?)\1$/, '$2')), mlpo['endDTD'](), qustr['index'] + qustr[0x0]['length'];
      }}return -0x1;
}function _duwyxz(ojm, x$yzw, orq) {
  var eihgf = ojm['indexOf']('?>', x$yzw);if (eihgf) {
    var bfceda = ojm['substring'](x$yzw, eihgf)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (bfceda) {
      {
        bfceda[0x0]['length'];
      }return orq['processingInstruction'](bfceda[0x1], bfceda[0x2]), eihgf + 0x2;
    }return -0x1;
  }return -0x1;
}function _dfidheg() {}function _dxzvw$y(acfdeb, omplk) {
  return acfdeb['__proto__'] = omplk, acfdeb;
}function _dfgcedb(ebcfda, cfgdbe) {
  var afebc,
      srwuv = [],
      xy_z = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (xy_z['lastIndex'] = cfgdbe, xy_z['exec'](ebcfda); afebc = xy_z['exec'](ebcfda);) if (srwuv['push'](afebc), afebc[0x1]) return srwuv;
}var _d_1z0$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dgihf = new RegExp('[\\-\\.0-9' + _d_1z0$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _doplkmn = new RegExp('^' + _d_1z0$['source'] + _dgihf['source'] + '*(?::' + _d_1z0$['source'] + _dgihf['source'] + '*)?$'),
    _dhilmk = 0x0,
    _dlhjigk = 0x1,
    _dcabf = 0x2,
    _dmrpnqo = 0x3,
    _dfgche = 0x4,
    _dutyxwv = 0x5,
    _dxyuwz = 0x6,
    _dpurqt = 0x7;_dtuxsw['prototype'] = { 'parse': function (zw$_xy, xwy$, uyzxv) {
    var otsrp = this['domBuilder'];otsrp['startDocument'](), _dcehdf(xwy$, xwy$ = {}), _dghecdf(zw$_xy, xwy$, uyzxv, otsrp, this['errorHandler']), otsrp['endDocument']();
  } }, _dfidheg['prototype'] = { 'setTagName': function (mpq) {
    if (!_doplkmn['test'](mpq)) throw new Error('invalid tagName:' + mpq);this['tagName'] = mpq;
  }, 'add': function (tvswux, rtuvq, dcegf) {
    if (!_doplkmn['test'](tvswux)) throw new Error('invalid attribute:' + tvswux);this[this['length']++] = { 'qName': tvswux, 'value': rtuvq, 'offset': dcegf };
  }, 'length': 0x0, 'getLocalName': function (hjglk) {
    return this[hjglk]['localName'];
  }, 'getLocator': function (ijhegf) {
    return this[ijhegf]['locator'];
  }, 'getQName': function ($x_wzy) {
    return this[$x_wzy]['qName'];
  }, 'getURI': function (yxvwtu) {
    return this[yxvwtu]['uri'];
  }, 'getValue': function (kijfgh) {
    return this[kijfgh]['value'];
  } }, _dxzvw$y({}, _dxzvw$y['prototype']) instanceof _dxzvw$y || (_dxzvw$y = function (y01_, pnqro) {
  function xwvuz() {}xwvuz['prototype'] = pnqro, xwvuz = new xwvuz();for (pnqro in y01_) xwvuz[pnqro] = y01_[pnqro];return xwvuz;
}), exports['XMLReader'] = _dtuxsw;