var _ = wx.y$;
function _dgfheid() {}function _dutrsp(tuvx, ikhjgl, xy0$z_, glh, jgkfi) {
  function edfh(fgdeb) {
    if (fgdeb > 0xffff) {
      fgdeb -= 0x10000;var mprq = 0xd800 + (fgdeb >> 0xa),
          hlijgk = 0xdc00 + (0x3ff & fgdeb);return String['fromCharCode'](mprq, hlijgk);
    }return String['fromCharCode'](fgdeb);
  }function ljnkmo(ikjn) {
    var vxwtuy = ikjn['slice'](0x1, -0x1);return vxwtuy in xy0$z_ ? xy0$z_[vxwtuy] : '#' === vxwtuy['charAt'](0x0) ? edfh(parseInt(vxwtuy['substr'](0x1)['replace']('x', '0x'))) : (jgkfi['error']('entity not found:' + ikjn), ikjn);
  }function ruqtv(lmkji) {
    if (lmkji > z10$_y) {
      var gljh = tuvx['substring'](z10$_y, lmkji)['replace'](/&#?\w+;/g, ljnkmo);onqrps && giejhf(z10$_y), glh['characters'](gljh, 0x0, lmkji - z10$_y), z10$_y = lmkji;
    }
  }function giejhf(hegd, srpo) {
    for (; hegd >= hdief && (srpo = xsuwvt['exec'](tuvx));) xwvuzy = srpo['index'], hdief = xwvuzy + srpo[0x0]['length'], onqrps['lineNumber']++;onqrps['columnNumber'] = hegd - xwvuzy + 0x1;
  }for (var xwvuzy = 0x0, hdief = 0x0, xsuwvt = /.*(?:\r\n?|\n)|.*$/g, onqrps = glh['locator'], $10_ = [{ 'currentNSMap': ikhjgl }], jo = {}, z10$_y = 0x0;;) {
    try {
      var uqt = tuvx['indexOf']('<', z10$_y);if (0x0 > uqt) {
        if (!tuvx['substr'](z10$_y)['match'](/^\s*$/)) {
          var nmlpk = glh['doc'],
              oknmlp = nmlpk['createTextNode'](tuvx['substr'](z10$_y));nmlpk['appendChild'](oknmlp), glh['currentElement'] = oknmlp;
        }return;
      }switch (uqt > z10$_y && ruqtv(uqt), tuvx['charAt'](uqt + 0x1)) {case '/':
          var mklpn = tuvx['indexOf']('>', uqt + 0x3),
              pqnso = tuvx['substring'](uqt + 0x2, mklpn),
              ptqurs = $10_['pop']();0x0 > mklpn ? (pqnso = tuvx['substring'](uqt + 0x2)['replace'](/[\s<].*/, ''), jgkfi['error']('end tag name: ' + pqnso + ' is not complete:' + ptqurs['tagName']), mklpn = uqt + 0x1 + pqnso['length']) : pqnso['match'](/\s</) && (pqnso = pqnso['replace'](/[\s<].*/, ''), jgkfi['error']('end tag name: ' + pqnso + ' maybe not complete'), mklpn = uqt + 0x1 + pqnso['length']);var mljkno = ptqurs['localNSMap'],
              nojl = ptqurs['tagName'] == pqnso,
              otsp = nojl || ptqurs['tagName'] && ptqurs['tagName']['toLowerCase']() == pqnso['toLowerCase']();if (otsp) {
            if (glh['endElement'](ptqurs['uri'], ptqurs['localName'], pqnso), mljkno) {
              for (var wzy_x in mljkno) glh['endPrefixMapping'](wzy_x);
            }nojl || jgkfi['fatalError']('end tag name: ' + pqnso + ' is not match the current start tagName:' + ptqurs['tagName']);
          } else $10_['push'](ptqurs);mklpn++;break;case '?':
          onqrps && giejhf(uqt), mklpn = _domrpq(tuvx, uqt, glh);break;case '!':
          onqrps && giejhf(uqt), mklpn = _djmhil(tuvx, uqt, glh, jgkfi);break;default:
          onqrps && giejhf(uqt);var mnlok = new _dtuxvs(),
              fcbda = $10_[$10_['length'] - 0x1]['currentNSMap'],
              mklpn = _diefjh(tuvx, uqt, mnlok, fcbda, ljnkmo, jgkfi),
              y$vxw = mnlok['length'];if (!mnlok['closed'] && _dvqsr(tuvx, mklpn, mnlok['tagName'], jo) && (mnlok['closed'] = !0x0, xy0$z_['nbsp'] || jgkfi['warning']('unclosed xml attribute')), onqrps && y$vxw) {
            for (var ijlghk = _dhjgk(onqrps, {}), jmnol = 0x0; y$vxw > jmnol; jmnol++) {
              var uqsrv = mnlok[jmnol];giejhf(uqsrv['offset']), uqsrv['locator'] = _dhjgk(onqrps, {});
            }glh['locator'] = ijlghk, _dopqr(mnlok, glh, fcbda) && $10_['push'](mnlok), glh['locator'] = onqrps;
          } else _dopqr(mnlok, glh, fcbda) && $10_['push'](mnlok);'http://www.w3.org/1999/xhtml' !== mnlok['uri'] || mnlok['closed'] ? mklpn++ : mklpn = _d_x$y0(tuvx, mklpn, mnlok['tagName'], ljnkmo, glh);}
    } catch (_x$zwy) {
      jgkfi['error']('element parse error: ' + _x$zwy), mklpn = -0x1;
    }mklpn > z10$_y ? z10$_y = mklpn : ruqtv(Math['max'](uqt, z10$_y) + 0x1);
  }
}function _dhjgk(qmopnl, pmoqnl) {
  return pmoqnl['lineNumber'] = qmopnl['lineNumber'], pmoqnl['columnNumber'] = qmopnl['columnNumber'], pmoqnl;
}function _diefjh(mpr, mjlhik, yvxtuw, wvtxs, kjoln, ejgif) {
  for (var ponqml, deifg, ghjief = ++mjlhik, $0z_xy = _dsorqp;;) {
    var fihe = mpr['charAt'](ghjief);switch (fihe) {case '=':
        if ($0z_xy === _duyvz) ponqml = mpr['slice'](mjlhik, ghjief), $0z_xy = _dhifjg;else {
          if ($0z_xy !== _dpnromq) throw new Error('attribute equal must after attrName');$0z_xy = _dhifjg;
        }break;case '\x27':case '\x22':
        if ($0z_xy === _dhifjg || $0z_xy === _duyvz) {
          if ($0z_xy === _duyvz && (ejgif['warning']('attribute value must after "="'), ponqml = mpr['slice'](mjlhik, ghjief)), mjlhik = ghjief + 0x1, ghjief = mpr['indexOf'](fihe, mjlhik), !(ghjief > 0x0)) throw new Error('attribute value no end \'' + fihe + '\' match');deifg = mpr['slice'](mjlhik, ghjief)['replace'](/&#?\w+;/g, kjoln), yvxtuw['add'](ponqml, deifg, mjlhik - 0x1), $0z_xy = _dtsv;
        } else {
          if ($0z_xy != _dhfidg) throw new Error('attribute value must after "="');deifg = mpr['slice'](mjlhik, ghjief)['replace'](/&#?\w+;/g, kjoln), yvxtuw['add'](ponqml, deifg, mjlhik), ejgif['warning']('attribute "' + ponqml + '" missed start quot(' + fihe + ')!!'), mjlhik = ghjief + 0x1, $0z_xy = _dtsv;
        }break;case '/':
        switch ($0z_xy) {case _dsorqp:
            yvxtuw['setTagName'](mpr['slice'](mjlhik, ghjief));case _dtsv:case _dusvtxw:case _dcdaefb:
            $0z_xy = _dcdaefb, yvxtuw['closed'] = !0x0;case _dhfidg:case _duyvz:case _dpnromq:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ejgif['error']('unexpected end of input'), $0z_xy == _dsorqp && yvxtuw['setTagName'](mpr['slice'](mjlhik, ghjief)), ghjief;case '>':
        switch ($0z_xy) {case _dsorqp:
            yvxtuw['setTagName'](mpr['slice'](mjlhik, ghjief));case _dtsv:case _dusvtxw:case _dcdaefb:
            break;case _dhfidg:case _duyvz:
            deifg = mpr['slice'](mjlhik, ghjief), '/' === deifg['slice'](-0x1) && (yvxtuw['closed'] = !0x0, deifg = deifg['slice'](0x0, -0x1));case _dpnromq:
            $0z_xy === _dpnromq && (deifg = ponqml), $0z_xy == _dhfidg ? (ejgif['warning']('attribute "' + deifg + '" missed quot(")!!'), yvxtuw['add'](ponqml, deifg['replace'](/&#?\w+;/g, kjoln), mjlhik)) : ('http://www.w3.org/1999/xhtml' === wvtxs[''] && deifg['match'](/^(?:disabled|checked|selected)$/i) || ejgif['warning']('attribute "' + deifg + '" missed value!! "' + deifg + '" instead!!'), yvxtuw['add'](deifg, deifg, mjlhik));break;case _dhifjg:
            throw new Error('attribute value missed!!');}return ghjief;case '\u0080':
        fihe = '\x20';default:
        if ('\x20' >= fihe) switch ($0z_xy) {case _dsorqp:
            yvxtuw['setTagName'](mpr['slice'](mjlhik, ghjief)), $0z_xy = _dusvtxw;break;case _duyvz:
            ponqml = mpr['slice'](mjlhik, ghjief), $0z_xy = _dpnromq;break;case _dhfidg:
            var deifg = mpr['slice'](mjlhik, ghjief)['replace'](/&#?\w+;/g, kjoln);ejgif['warning']('attribute "' + deifg + '" missed quot(")!!'), yvxtuw['add'](ponqml, deifg, mjlhik);case _dtsv:
            $0z_xy = _dusvtxw;} else switch ($0z_xy) {case _dpnromq:
            {
              yvxtuw['tagName'];
            }'http://www.w3.org/1999/xhtml' === wvtxs[''] && ponqml['match'](/^(?:disabled|checked|selected)$/i) || ejgif['warning']('attribute "' + ponqml + '" missed value!! "' + ponqml + '" instead2!!'), yvxtuw['add'](ponqml, ponqml, mjlhik), mjlhik = ghjief, $0z_xy = _duyvz;break;case _dtsv:
            ejgif['warning']('attribute space is required"' + ponqml + '\x22!!');case _dusvtxw:
            $0z_xy = _duyvz, mjlhik = ghjief;break;case _dhifjg:
            $0z_xy = _dhfidg, mjlhik = ghjief;break;case _dcdaefb:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ghjief++;
  }
}function _dopqr(psnqo, hifkjg, hfkgji) {
  for (var vtqr = psnqo['tagName'], ronqs = null, fgdehi = psnqo['length']; fgdehi--;) {
    var tusqvr = psnqo[fgdehi],
        gifdeh = tusqvr['qName'],
        hkljgi = tusqvr['value'],
        gdhi = gifdeh['indexOf'](':');if (gdhi > 0x0) var qosrpn = tusqvr['prefix'] = gifdeh['slice'](0x0, gdhi),
        $0_312 = gifdeh['slice'](gdhi + 0x1),
        beafd = 'xmlns' === qosrpn && $0_312;else $0_312 = gifdeh, qosrpn = null, beafd = 'xmlns' === gifdeh && '';tusqvr['localName'] = $0_312, beafd !== !0x1 && (null == ronqs && (ronqs = {}, _dgchd(hfkgji, hfkgji = {})), hfkgji[beafd] = ronqs[beafd] = hkljgi, tusqvr['uri'] = 'http://www.w3.org/2000/xmlns/', hifkjg['startPrefixMapping'](beafd, hkljgi));
  }for (var fgdehi = psnqo['length']; fgdehi--;) {
    tusqvr = psnqo[fgdehi];var qosrpn = tusqvr['prefix'];qosrpn && ('xml' === qosrpn && (tusqvr['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qosrpn && (tusqvr['uri'] = hfkgji[qosrpn || '']));
  }var gdhi = vtqr['indexOf'](':');gdhi > 0x0 ? (qosrpn = psnqo['prefix'] = vtqr['slice'](0x0, gdhi), $0_312 = psnqo['localName'] = vtqr['slice'](gdhi + 0x1)) : (qosrpn = null, $0_312 = psnqo['localName'] = vtqr);var y_0x$z = psnqo['uri'] = hfkgji[qosrpn || ''];if (hifkjg['startElement'](y_0x$z, $0_312, vtqr, psnqo), !psnqo['closed']) return psnqo['currentNSMap'] = hfkgji, psnqo['localNSMap'] = ronqs, !0x0;if (hifkjg['endElement'](y_0x$z, $0_312, vtqr), ronqs) {
    for (qosrpn in ronqs) hifkjg['endPrefixMapping'](qosrpn);
  }
}function _d_x$y0(nompr, rwvst, wy_xz, jinmlk, uvxzy) {
  if (/^(?:script|textarea)$/i['test'](wy_xz)) {
    var pronq = nompr['indexOf']('</' + wy_xz + '>', rwvst),
        uwvrts = nompr['substring'](rwvst + 0x1, pronq);if (/[&<]/['test'](uwvrts)) return (/^script$/i['test'](wy_xz) ? (uvxzy['characters'](uwvrts, 0x0, uwvrts['length']), pronq) : (uwvrts = uwvrts['replace'](/&#?\w+;/g, jinmlk), uvxzy['characters'](uwvrts, 0x0, uwvrts['length']), pronq)
    );
  }return rwvst + 0x1;
}function _dvqsr(pnro, olmjk, pnlok, knilm) {
  var $ywzxv = knilm[pnlok];return null == $ywzxv && ($ywzxv = pnro['lastIndexOf']('</' + pnlok + '>'), olmjk > $ywzxv && ($ywzxv = pnro['lastIndexOf']('</' + pnlok)), knilm[pnlok] = $ywzxv), olmjk > $ywzxv;
}function _dgchd(_xwzy$, ijkmlh) {
  for (var dfecba in _xwzy$) ijkmlh[dfecba] = _xwzy$[dfecba];
}function _djmhil(okmn, gdchf, $yw_, njlkim) {
  var yzx$wv = okmn['charAt'](gdchf + 0x2);switch (yzx$wv) {case '-':
      if ('-' === okmn['charAt'](gdchf + 0x3)) {
        var iegjh = okmn['indexOf']('-->', gdchf + 0x4);return iegjh > gdchf ? ($yw_['comment'](okmn, gdchf + 0x4, iegjh - gdchf - 0x4), iegjh + 0x3) : (njlkim['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == okmn['substr'](gdchf + 0x3, 0x6)) {
        var iegjh = okmn['indexOf'](']]>', gdchf + 0x9);return $yw_['startCDATA'](), $yw_['characters'](okmn, gdchf + 0x9, iegjh - gdchf - 0x9), $yw_['endCDATA'](), iegjh + 0x3;
      }var vrst = _dhmkjl(okmn, gdchf),
          $2z0_1 = vrst['length'];if ($2z0_1 > 0x1 && /!doctype/i['test'](vrst[0x0][0x0])) {
        var $0x_y = vrst[0x1][0x0],
            sptrqu = $2z0_1 > 0x3 && /^public$/i['test'](vrst[0x2][0x0]) && vrst[0x3][0x0],
            rtsuq = $2z0_1 > 0x4 && vrst[0x4][0x0],
            _wyz = vrst[$2z0_1 - 0x1];return $yw_['startDTD']($0x_y, sptrqu && sptrqu['replace'](/^(['"])(.*?)\1$/, '$2'), rtsuq && rtsuq['replace'](/^(['"])(.*?)\1$/, '$2')), $yw_['endDTD'](), _wyz['index'] + _wyz[0x0]['length'];
      }}return -0x1;
}function _domrpq(bafde, tvxwu, tvwuxs) {
  var yxuwvt = bafde['indexOf']('?>', tvxwu);if (yxuwvt) {
    var lihm = bafde['substring'](tvxwu, yxuwvt)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (lihm) {
      {
        lihm[0x0]['length'];
      }return tvwuxs['processingInstruction'](lihm[0x1], lihm[0x2]), yxuwvt + 0x2;
    }return -0x1;
  }return -0x1;
}function _dtuxvs() {}function _dompnlk(ebdfcg, cfbaed) {
  return ebdfcg['__proto__'] = cfbaed, ebdfcg;
}function _dhmkjl(zyvwux, abedcf) {
  var tq,
      dcfe = [],
      fkhj = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (fkhj['lastIndex'] = abedcf, fkhj['exec'](zyvwux); tq = fkhj['exec'](zyvwux);) if (dcfe['push'](tq), tq[0x1]) return dcfe;
}var _dmkojnl = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _diknl = new RegExp('[\\-\\.0-9' + _dmkojnl['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dz_x0$y = new RegExp('^' + _dmkojnl['source'] + _diknl['source'] + '*(?::' + _dmkojnl['source'] + _diknl['source'] + '*)?$'),
    _dsorqp = 0x0,
    _duyvz = 0x1,
    _dpnromq = 0x2,
    _dhifjg = 0x3,
    _dhfidg = 0x4,
    _dtsv = 0x5,
    _dusvtxw = 0x6,
    _dcdaefb = 0x7;_dgfheid['prototype'] = { 'parse': function (fgdceh, poqnrs, oqlmnp) {
    var $1z20_ = this['domBuilder'];$1z20_['startDocument'](), _dgchd(poqnrs, poqnrs = {}), _dutrsp(fgdceh, poqnrs, oqlmnp, $1z20_, this['errorHandler']), $1z20_['endDocument']();
  } }, _dtuxvs['prototype'] = { 'setTagName': function (ojnm) {
    if (!_dz_x0$y['test'](ojnm)) throw new Error('invalid tagName:' + ojnm);this['tagName'] = ojnm;
  }, 'add': function (ikf, cfdegb, nojkm) {
    if (!_dz_x0$y['test'](ikf)) throw new Error('invalid attribute:' + ikf);this[this['length']++] = { 'qName': ikf, 'value': cfdegb, 'offset': nojkm };
  }, 'length': 0x0, 'getLocalName': function (_12$0z) {
    return this[_12$0z]['localName'];
  }, 'getLocator': function (tsqvur) {
    return this[tsqvur]['locator'];
  }, 'getQName': function (tyuvw) {
    return this[tyuvw]['qName'];
  }, 'getURI': function (xuyw) {
    return this[xuyw]['uri'];
  }, 'getValue': function (xuvswt) {
    return this[xuvswt]['value'];
  } }, _dompnlk({}, _dompnlk['prototype']) instanceof _dompnlk || (_dompnlk = function (z2$1, lhkg) {
  function kijlm() {}kijlm['prototype'] = lhkg, kijlm = new kijlm();for (lhkg in z2$1) kijlm[lhkg] = z2$1[lhkg];return kijlm;
}), exports['XMLReader'] = _dgfheid;