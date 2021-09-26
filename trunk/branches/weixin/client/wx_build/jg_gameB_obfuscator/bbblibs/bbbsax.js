var _ = wx.y$;
function _dtpsorq() {}function _dlkjni(jfghki, bdec, bgd, lghikj, ifdg) {
  function z0$yx(x_y0) {
    var gijhfe = x_y0['slice'](0x1, -0x1);return gijhfe in bgd ? bgd[gijhfe] : '#' === gijhfe['charAt'](0x0) ? 0xffff < (gijhfe = parseInt(gijhfe['substr'](0x1)['replace']('x', '0x'))) ? (gijhfe -= 0x10000, String['fromCharCode'](0xd800 + (gijhfe >> 0xa), 0xdc00 + (0x3ff & gijhfe))) : String['fromCharCode'](gijhfe) : (ifdg['error']('entity not found:' + x_y0), x_y0);
  }function tuxyw(qruspt) {
    var _01z$;mqponl < qruspt && (_01z$ = jfghki['substring'](mqponl, qruspt)['replace'](/&#?\w+;/g, z0$yx), rnmop && eifgjh(mqponl), lghikj['characters'](_01z$, 0x0, qruspt - mqponl), mqponl = qruspt);
  }function eifgjh(khgijl, xtusv) {
    for (; lgjkhi <= khgijl && (xtusv = onlmp['exec'](jfghki));) efba = xtusv['index'], lgjkhi = efba + xtusv[0x0]['length'], rnmop['lineNumber']++;rnmop['columnNumber'] = khgijl - efba + 0x1;
  }for (var efba = 0x0, lgjkhi = 0x0, onlmp = /.*(?:\r\n?|\n)|.*$/g, rnmop = lghikj['locator'], x_z0 = [{ 'currentNSMap': bdec }], kilgj = {}, mqponl = 0x0;;) {
    try {
      var bgfedc = jfghki['indexOf']('<', mqponl),
          uvqtsr,
          gdfe;if (bgfedc < 0x0) return void (jfghki['substr'](mqponl)['match'](/^\s*$/) || (gdfe = (uvqtsr = lghikj['doc'])['createTextNode'](jfghki['substr'](mqponl)), uvqtsr['appendChild'](gdfe), lghikj['currentElement'] = gdfe));switch (mqponl < bgfedc && tuxyw(bgfedc), jfghki['charAt'](bgfedc + 0x1)) {case '/':
          var rqtspu = jfghki['indexOf']('>', bgfedc + 0x3),
              gjikl = jfghki['substring'](bgfedc + 0x2, rqtspu),
              glhjk = x_z0['pop']();rqtspu < 0x0 ? (gjikl = jfghki['substring'](bgfedc + 0x2)['replace'](/[\s<].*/, ''), ifdg['error']('end tag name: ' + gjikl + ' is not complete:' + glhjk['tagName']), rqtspu = bgfedc + 0x1 + gjikl['length']) : gjikl['match'](/\s</) && (gjikl = gjikl['replace'](/[\s<].*/, ''), ifdg['error']('end tag name: ' + gjikl + ' maybe not complete'), rqtspu = bgfedc + 0x1 + gjikl['length']);var wrvut = glhjk['localNSMap'],
              cfdbea = glhjk['tagName'] == gjikl;if (cfdbea || glhjk['tagName'] && glhjk['tagName']['toLowerCase']() == gjikl['toLowerCase']()) {
            if (lghikj['endElement'](glhjk['uri'], glhjk['localName'], gjikl), wrvut) {
              for (var rpnos in wrvut) lghikj['endPrefixMapping'](rpnos);
            }cfdbea || ifdg['fatalError']('end tag name: ' + gjikl + ' is not match the current start tagName:' + glhjk['tagName']);
          } else x_z0['push'](glhjk);rqtspu++;break;case '?':
          rnmop && eifgjh(bgfedc), rqtspu = _dw$_zx(jfghki, bgfedc, lghikj);break;case '!':
          rnmop && eifgjh(bgfedc), rqtspu = _decbdg(jfghki, bgfedc, lghikj, ifdg);break;default:
          rnmop && eifgjh(bgfedc);var mklih = new _dswtvu(),
              x_y$0 = x_z0[x_z0['length'] - 0x1]['currentNSMap'],
              rqtspu = _dilghj(jfghki, bgfedc, mklih, x_y$0, z0$yx, ifdg),
              rqtspo = mklih['length'];if (!mklih['closed'] && _dknlojm(jfghki, rqtspu, mklih['tagName'], kilgj) && (mklih['closed'] = !0x0, bgd['nbsp'] || ifdg['warning']('unclosed xml attribute')), rnmop && rqtspo) {
            for (var _2z1$ = _dpnmr(rnmop, {}), z10$2_ = 0x0; z10$2_ < rqtspo; z10$2_++) {
              var lkgh = mklih[z10$2_];eifgjh(lkgh['offset']), lkgh['locator'] = _dpnmr(rnmop, {});
            }lghikj['locator'] = _2z1$, _dcbedf(mklih, lghikj, x_y$0) && x_z0['push'](mklih), lghikj['locator'] = rnmop;
          } else _dcbedf(mklih, lghikj, x_y$0) && x_z0['push'](mklih);'http://www.w3.org/1999/xhtml' !== mklih['uri'] || mklih['closed'] ? rqtspu++ : rqtspu = _dtosrpq(jfghki, rqtspu, mklih['tagName'], z0$yx, lghikj);}
    } catch (qtvrs) {
      ifdg['error']('element parse error: ' + qtvrs), rqtspu = -0x1;
    }mqponl < rqtspu ? mqponl = rqtspu : tuxyw(Math['max'](bgfedc, mqponl) + 0x1);
  }
}function _dpnmr(eigfhd, fdgehi) {
  return fdgehi['lineNumber'] = eigfhd['lineNumber'], fdgehi['columnNumber'] = eigfhd['columnNumber'], fdgehi;
}function _dilghj(mokp, ikghlj, opkn, y_zx0$, dhfig, fedbg) {
  for (var qsuprt, rutwvs = ++ikghlj, heijfg = _dx$z0y_;;) {
    var egdfch = mokp['charAt'](rutwvs);switch (egdfch) {case '=':
        if (heijfg === _dlkjmno) qsuprt = mokp['slice'](ikghlj, rutwvs), heijfg = _dgdhei;else {
          if (heijfg !== _dxwy_) throw new Error('attribute equal must after attrName');heijfg = _dgdhei;
        }break;case '\x27':case '\x22':
        if (heijfg === _dgdhei || heijfg === _dlkjmno) {
          if (heijfg === _dlkjmno && (fedbg['warning']('attribute value must after "="'), qsuprt = mokp['slice'](ikghlj, rutwvs)), !(0x0 < (rutwvs = mokp['indexOf'](egdfch, ikghlj = rutwvs + 0x1)))) throw new Error('attribute value no end \'' + egdfch + '\' match');lkji = mokp['slice'](ikghlj, rutwvs)['replace'](/&#?\w+;/g, dhfig), opkn['add'](qsuprt, lkji, ikghlj - 0x1), heijfg = _doml;
        } else {
          if (heijfg != _difhe) throw new Error('attribute value must after "="');lkji = mokp['slice'](ikghlj, rutwvs)['replace'](/&#?\w+;/g, dhfig), opkn['add'](qsuprt, lkji, ikghlj), fedbg['warning']('attribute "' + qsuprt + '" missed start quot(' + egdfch + ')!!'), ikghlj = rutwvs + 0x1, heijfg = _doml;
        }break;case '/':
        switch (heijfg) {case _dx$z0y_:
            opkn['setTagName'](mokp['slice'](ikghlj, rutwvs));case _doml:case _d$yz_01:case _druqspt:
            heijfg = _druqspt, opkn['closed'] = !0x0;case _difhe:case _dlkjmno:case _dxwy_:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return fedbg['error']('unexpected end of input'), heijfg == _dx$z0y_ && opkn['setTagName'](mokp['slice'](ikghlj, rutwvs)), rutwvs;case '>':
        switch (heijfg) {case _dx$z0y_:
            opkn['setTagName'](mokp['slice'](ikghlj, rutwvs));case _doml:case _d$yz_01:case _druqspt:
            break;case _difhe:case _dlkjmno:
            '/' === (lkji = mokp['slice'](ikghlj, rutwvs))['slice'](-0x1) && (opkn['closed'] = !0x0, lkji = lkji['slice'](0x0, -0x1));case _dxwy_:
            heijfg === _dxwy_ && (lkji = qsuprt), heijfg == _difhe ? (fedbg['warning']('attribute "' + lkji + '" missed quot(")!!'), opkn['add'](qsuprt, lkji['replace'](/&#?\w+;/g, dhfig), ikghlj)) : ('http://www.w3.org/1999/xhtml' === y_zx0$[''] && lkji['match'](/^(?:disabled|checked|selected)$/i) || fedbg['warning']('attribute "' + lkji + '" missed value!! "' + lkji + '" instead!!'), opkn['add'](lkji, lkji, ikghlj));break;case _dgdhei:
            throw new Error('attribute value missed!!');}return rutwvs;case '\u0080':
        egdfch = '\x20';default:
        if (egdfch <= '\x20') switch (heijfg) {case _dx$z0y_:
            opkn['setTagName'](mokp['slice'](ikghlj, rutwvs)), heijfg = _d$yz_01;break;case _dlkjmno:
            qsuprt = mokp['slice'](ikghlj, rutwvs), heijfg = _dxwy_;break;case _difhe:
            var lkji = mokp['slice'](ikghlj, rutwvs)['replace'](/&#?\w+;/g, dhfig);fedbg['warning']('attribute "' + lkji + '" missed quot(")!!'), opkn['add'](qsuprt, lkji, ikghlj);case _doml:
            heijfg = _d$yz_01;} else switch (heijfg) {case _dxwy_:
            opkn['tagName'], 'http://www.w3.org/1999/xhtml' === y_zx0$[''] && qsuprt['match'](/^(?:disabled|checked|selected)$/i) || fedbg['warning']('attribute "' + qsuprt + '" missed value!! "' + qsuprt + '" instead2!!'), opkn['add'](qsuprt, qsuprt, ikghlj), ikghlj = rutwvs, heijfg = _dlkjmno;break;case _doml:
            fedbg['warning']('attribute space is required"' + qsuprt + '\x22!!');case _d$yz_01:
            heijfg = _dlkjmno, ikghlj = rutwvs;break;case _dgdhei:
            heijfg = _difhe, ikghlj = rutwvs;break;case _druqspt:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}rutwvs++;
  }
}function _dcbedf(kljmh, sqrtp, chefdg) {
  for (var cea = kljmh['tagName'], jiln = null, tsqvr = kljmh['length']; tsqvr--;) {
    var yvwtu = kljmh[tsqvr],
        vyuxtw = yvwtu['qName'],
        promnq = yvwtu['value'],
        qptros;vyuxtw = 0x0 < (sq = vyuxtw['indexOf'](':')) ? (loqpn = yvwtu['prefix'] = vyuxtw['slice'](0x0, sq), qptros = vyuxtw['slice'](sq + 0x1), 'xmlns' === loqpn && qptros) : (loqpn = null, 'xmlns' === (qptros = vyuxtw) && ''), yvwtu['localName'] = qptros, !0x1 !== vyuxtw && (null == jiln && (jiln = {}, _dsrw(chefdg, chefdg = {})), chefdg[vyuxtw] = jiln[vyuxtw] = promnq, yvwtu['uri'] = 'http://www.w3.org/2000/xmlns/', sqrtp['startPrefixMapping'](vyuxtw, promnq));
  }for (tsqvr = kljmh['length']; tsqvr--;) (loqpn = (yvwtu = kljmh[tsqvr])['prefix']) && ('xml' === loqpn && (yvwtu['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== loqpn && (yvwtu['uri'] = chefdg[loqpn || '']));var sq;qptros = 0x0 < (sq = cea['indexOf'](':')) ? (loqpn = kljmh['prefix'] = cea['slice'](0x0, sq), kljmh['localName'] = cea['slice'](sq + 0x1)) : (loqpn = null, kljmh['localName'] = cea);var nrpso = kljmh['uri'] = chefdg[loqpn || ''];if (sqrtp['startElement'](nrpso, qptros, cea, kljmh), !kljmh['closed']) return kljmh['currentNSMap'] = chefdg, kljmh['localNSMap'] = jiln, !0x0;if (sqrtp['endElement'](nrpso, qptros, cea), jiln) {
    for (var loqpn in jiln) sqrtp['endPrefixMapping'](loqpn);
  }
}function _dtosrpq($x_yzw, z1_2, npsqo, uvsrq, noqlpm) {
  if (/^(?:script|textarea)$/i['test'](npsqo)) {
    var njmli = $x_yzw['indexOf']('</' + npsqo + '>', z1_2),
        $x_yzw = $x_yzw['substring'](z1_2 + 0x1, njmli);if (/[&<]/['test']($x_yzw)) return (/^script$/i['test'](npsqo) || ($x_yzw = $x_yzw['replace'](/&#?\w+;/g, uvsrq)), noqlpm['characters']($x_yzw, 0x0, $x_yzw['length']), njmli
    );
  }return z1_2 + 0x1;
}function _dknlojm(wv$yx, dcbaef, $_wyxz, omqpln) {
  var z$y0x = omqpln[$_wyxz];return null == z$y0x && ((z$y0x = wv$yx['lastIndexOf']('</' + $_wyxz + '>')) < dcbaef && (z$y0x = wv$yx['lastIndexOf']('</' + $_wyxz)), omqpln[$_wyxz] = z$y0x), z$y0x < dcbaef;
}function _dsrw(ljg, tsporq) {
  for (var strwv in ljg) tsporq[strwv] = ljg[strwv];
}function _decbdg(rsvwt, uwrtv, rtqps, tqsur) {
  var jligk = rsvwt['charAt'](uwrtv + 0x2);if ('-' === jligk) return '-' !== rsvwt['charAt'](uwrtv + 0x3) ? -0x1 : uwrtv < (wtyv = rsvwt['indexOf']('-->', uwrtv + 0x4)) ? (rtqps['comment'](rsvwt, uwrtv + 0x4, wtyv - uwrtv - 0x4), wtyv + 0x3) : (tqsur['error']('Unclosed comment'), -0x1);if ('CDATA[' == rsvwt['substr'](uwrtv + 0x3, 0x6)) {
    var wtyv = rsvwt['indexOf'](']]>', uwrtv + 0x9);return rtqps['startCDATA'](), rtqps['characters'](rsvwt, uwrtv + 0x9, wtyv - uwrtv - 0x9), rtqps['endCDATA'](), wtyv + 0x3;
  }jligk = _dzvy$xw(rsvwt, uwrtv), tqsur = jligk['length'];if (0x1 < tqsur && /!doctype/i['test'](jligk[0x0][0x0])) return wtyv = jligk[0x1][0x0], rsvwt = 0x3 < tqsur && /^public$/i['test'](jligk[0x2][0x0]) && jligk[0x3][0x0], uwrtv = 0x4 < tqsur && jligk[0x4][0x0], tqsur = jligk[tqsur - 0x1], (rtqps['startDTD'](wtyv, rsvwt && rsvwt['replace'](/^(['"])(.*?)\1$/, '$2'), uwrtv && uwrtv['replace'](/^(['"])(.*?)\1$/, '$2')), rtqps['endDTD'](), tqsur['index'] + tqsur[0x0]['length']);return -0x1;
}function _dw$_zx(kg, wuty, ojlmkn) {
  var opmql = kg['indexOf']('?>', wuty);if (opmql) return wuty = kg['substring'](wuty, opmql)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), wuty ? (wuty[0x0]['length'], ojlmkn['processingInstruction'](wuty[0x1], wuty[0x2]), opmql + 0x2) : -0x1;return -0x1;
}function _dswtvu() {}function _dghfedc(ljn, lnkimj) {
  return ljn['__proto__'] = lnkimj, ljn;
}function _dzvy$xw(qptsro, yx_0z) {
  var ghifj,
      ghiljk = [],
      pqmno = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (pqmno['lastIndex'] = yx_0z, pqmno['exec'](qptsro); ghifj = pqmno['exec'](qptsro);) if (ghiljk['push'](ghifj), ghifj[0x1]) return ghiljk;
}var _dfjihgk = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dqopmln = new RegExp('[\\-\\.0-9' + _dfjihgk['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dpnomkl = new RegExp('^' + _dfjihgk['source'] + _dqopmln['source'] + '*(?::' + _dfjihgk['source'] + _dqopmln['source'] + '*)?$'),
    _dx$z0y_ = 0x0,
    _dlkjmno = 0x1,
    _dxwy_ = 0x2,
    _dgdhei = 0x3,
    _difhe = 0x4,
    _doml = 0x5,
    _d$yz_01 = 0x6,
    _druqspt = 0x7;_dtpsorq['prototype'] = { 'parse': function (tuqr, mpo, _0$3) {
    var _0zy$x = this['domBuilder'];_0zy$x['startDocument'](), _dsrw(mpo, mpo = {}), _dlkjni(tuqr, mpo, _0$3, _0zy$x, this['errorHandler']), _0zy$x['endDocument']();
  } }, _dswtvu['prototype'] = { 'setTagName': function (qptro) {
    if (!_dpnomkl['test'](qptro)) throw new Error('invalid tagName:' + qptro);this['tagName'] = qptro;
  }, 'add': function (cedab, wz$_yx, okmpl) {
    if (!_dpnomkl['test'](cedab)) throw new Error('invalid attribute:' + cedab);this[this['length']++] = { 'qName': cedab, 'value': wz$_yx, 'offset': okmpl };
  }, 'length': 0x0, 'getLocalName': function (onkmj) {
    return this[onkmj]['localName'];
  }, 'getLocator': function (y$0_x) {
    return this[y$0_x]['locator'];
  }, 'getQName': function (fghed) {
    return this[fghed]['qName'];
  }, 'getURI': function (xzyv$) {
    return this[xzyv$]['uri'];
  }, 'getValue': function (y0zx$_) {
    return this[y0zx$_]['value'];
  } }, _dghfedc({}, _dghfedc['prototype']) instanceof _dghfedc || (_dghfedc = function (optrqs, eigfdh) {
  function $_xy0() {}for (eigfdh in $_xy0['prototype'] = eigfdh, $_xy0 = new $_xy0(), optrqs) $_xy0[eigfdh] = optrqs[eigfdh];return $_xy0;
}), exports['XMLReader'] = _dtpsorq;