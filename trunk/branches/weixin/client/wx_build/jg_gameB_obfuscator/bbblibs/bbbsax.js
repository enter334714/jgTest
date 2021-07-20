var _ = wx.y$;
function _dz012$() {}function _dkghjli(onqrm, cdafeb, rpusq, hjgfk, pqsrn) {
  function vxzy$(ghdef) {
    var knjom = ghdef['slice'](0x1, -0x1);return knjom in rpusq ? rpusq[knjom] : '#' === knjom['charAt'](0x0) ? 0xffff < (knjom = parseInt(knjom['substr'](0x1)['replace']('x', '0x'))) ? (knjom -= 0x10000, String['fromCharCode'](0xd800 + (knjom >> 0xa), 0xdc00 + (0x3ff & knjom))) : String['fromCharCode'](knjom) : (pqsrn['error']('entity not found:' + ghdef), ghdef);
  }function fdbe(swrvt) {
    var utxwy;rsnqpo < swrvt && (utxwy = onqrm['substring'](rsnqpo, swrvt)['replace'](/&#?\w+;/g, vxzy$), rwvuts && jghli(rsnqpo), hjgfk['characters'](utxwy, 0x0, swrvt - rsnqpo), rsnqpo = swrvt);
  }function jghli(gfed, qlpmon) {
    for (; srutwv <= gfed && (qlpmon = orqs['exec'](onqrm));) uyvzw = qlpmon['index'], srutwv = uyvzw + qlpmon[0x0]['length'], rwvuts['lineNumber']++;rwvuts['columnNumber'] = gfed - uyvzw + 0x1;
  }for (var uyvzw = 0x0, srutwv = 0x0, orqs = /.*(?:\r\n?|\n)|.*$/g, rwvuts = hjgfk['locator'], yxvwu = [{ 'currentNSMap': cdafeb }], toq = {}, rsnqpo = 0x0;;) {
    try {
      var lkmijn = onqrm['indexOf']('<', rsnqpo),
          wuxts,
          ikgjl;if (lkmijn < 0x0) return void (onqrm['substr'](rsnqpo)['match'](/^\s*$/) || (ikgjl = (wuxts = hjgfk['doc'])['createTextNode'](onqrm['substr'](rsnqpo)), wuxts['appendChild'](ikgjl), hjgfk['currentElement'] = ikgjl));switch (rsnqpo < lkmijn && fdbe(lkmijn), onqrm['charAt'](lkmijn + 0x1)) {case '/':
          var monklp = onqrm['indexOf']('>', lkmijn + 0x3),
              yx_z$ = onqrm['substring'](lkmijn + 0x2, monklp),
              jfiehg = yxvwu['pop']();monklp < 0x0 ? (yx_z$ = onqrm['substring'](lkmijn + 0x2)['replace'](/[\s<].*/, ''), pqsrn['error']('end tag name: ' + yx_z$ + ' is not complete:' + jfiehg['tagName']), monklp = lkmijn + 0x1 + yx_z$['length']) : yx_z$['match'](/\s</) && (yx_z$ = yx_z$['replace'](/[\s<].*/, ''), pqsrn['error']('end tag name: ' + yx_z$ + ' maybe not complete'), monklp = lkmijn + 0x1 + yx_z$['length']);var wvxuyz = jfiehg['localNSMap'],
              swtrv = jfiehg['tagName'] == yx_z$;if (swtrv || jfiehg['tagName'] && jfiehg['tagName']['toLowerCase']() == yx_z$['toLowerCase']()) {
            if (hjgfk['endElement'](jfiehg['uri'], jfiehg['localName'], yx_z$), wvxuyz) {
              for (var degf in wvxuyz) hjgfk['endPrefixMapping'](degf);
            }swtrv || pqsrn['fatalError']('end tag name: ' + yx_z$ + ' is not match the current start tagName:' + jfiehg['tagName']);
          } else yxvwu['push'](jfiehg);monklp++;break;case '?':
          rwvuts && jghli(lkmijn), monklp = _dqpsonr(onqrm, lkmijn, hjgfk);break;case '!':
          rwvuts && jghli(lkmijn), monklp = _dlinkj(onqrm, lkmijn, hjgfk, pqsrn);break;default:
          rwvuts && jghli(lkmijn);var jlimh = new _dompnkl(),
              wy$xz_ = yxvwu[yxvwu['length'] - 0x1]['currentNSMap'],
              monklp = _difehg(onqrm, lkmijn, jlimh, wy$xz_, vxzy$, pqsrn),
              nljmko = jlimh['length'];if (!jlimh['closed'] && _djhfi(onqrm, monklp, jlimh['tagName'], toq) && (jlimh['closed'] = !0x0, rpusq['nbsp'] || pqsrn['warning']('unclosed xml attribute')), rwvuts && nljmko) {
            for (var kgilj = _dljhkgi(rwvuts, {}), lmkjno = 0x0; lmkjno < nljmko; lmkjno++) {
              var ljnkmi = jlimh[lmkjno];jghli(ljnkmi['offset']), ljnkmi['locator'] = _dljhkgi(rwvuts, {});
            }hjgfk['locator'] = kgilj, _dfjkigh(jlimh, hjgfk, wy$xz_) && yxvwu['push'](jlimh), hjgfk['locator'] = rwvuts;
          } else _dfjkigh(jlimh, hjgfk, wy$xz_) && yxvwu['push'](jlimh);'http://www.w3.org/1999/xhtml' !== jlimh['uri'] || jlimh['closed'] ? monklp++ : monklp = _dwzyvux(onqrm, monklp, jlimh['tagName'], vxzy$, hjgfk);}
    } catch (hfeid) {
      pqsrn['error']('element parse error: ' + hfeid), monklp = -0x1;
    }rsnqpo < monklp ? rsnqpo = monklp : fdbe(Math['max'](lkmijn, rsnqpo) + 0x1);
  }
}function _dljhkgi(dfb, cgebd) {
  return cgebd['lineNumber'] = dfb['lineNumber'], cgebd['columnNumber'] = dfb['columnNumber'], cgebd;
}function _difehg(facbd, jhfig, ytxuwv, fjhi, decgf, z201) {
  for (var yzx$, egdcf = ++jhfig, edbca = _dlnijkm;;) {
    var mpoqnr = facbd['charAt'](egdcf);switch (mpoqnr) {case '=':
        if (edbca === _d$y1_) yzx$ = facbd['slice'](jhfig, egdcf), edbca = _deabf;else {
          if (edbca !== _d_0413) throw new Error('attribute equal must after attrName');edbca = _deabf;
        }break;case '\x27':case '\x22':
        if (edbca === _deabf || edbca === _d$y1_) {
          if (edbca === _d$y1_ && (z201['warning']('attribute value must after "="'), yzx$ = facbd['slice'](jhfig, egdcf)), !(0x0 < (egdcf = facbd['indexOf'](mpoqnr, jhfig = egdcf + 0x1)))) throw new Error('attribute value no end \'' + mpoqnr + '\' match');ptsqru = facbd['slice'](jhfig, egdcf)['replace'](/&#?\w+;/g, decgf), ytxuwv['add'](yzx$, ptsqru, jhfig - 0x1), edbca = _dsqvr;
        } else {
          if (edbca != _djighkf) throw new Error('attribute value must after "="');ptsqru = facbd['slice'](jhfig, egdcf)['replace'](/&#?\w+;/g, decgf), ytxuwv['add'](yzx$, ptsqru, jhfig), z201['warning']('attribute "' + yzx$ + '" missed start quot(' + mpoqnr + ')!!'), jhfig = egdcf + 0x1, edbca = _dsqvr;
        }break;case '/':
        switch (edbca) {case _dlnijkm:
            ytxuwv['setTagName'](facbd['slice'](jhfig, egdcf));case _dsqvr:case _dklmhij:case _dbfedca:
            edbca = _dbfedca, ytxuwv['closed'] = !0x0;case _djighkf:case _d$y1_:case _d_0413:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return z201['error']('unexpected end of input'), edbca == _dlnijkm && ytxuwv['setTagName'](facbd['slice'](jhfig, egdcf)), egdcf;case '>':
        switch (edbca) {case _dlnijkm:
            ytxuwv['setTagName'](facbd['slice'](jhfig, egdcf));case _dsqvr:case _dklmhij:case _dbfedca:
            break;case _djighkf:case _d$y1_:
            '/' === (ptsqru = facbd['slice'](jhfig, egdcf))['slice'](-0x1) && (ytxuwv['closed'] = !0x0, ptsqru = ptsqru['slice'](0x0, -0x1));case _d_0413:
            edbca === _d_0413 && (ptsqru = yzx$), edbca == _djighkf ? (z201['warning']('attribute "' + ptsqru + '" missed quot(")!!'), ytxuwv['add'](yzx$, ptsqru['replace'](/&#?\w+;/g, decgf), jhfig)) : ('http://www.w3.org/1999/xhtml' === fjhi[''] && ptsqru['match'](/^(?:disabled|checked|selected)$/i) || z201['warning']('attribute "' + ptsqru + '" missed value!! "' + ptsqru + '" instead!!'), ytxuwv['add'](ptsqru, ptsqru, jhfig));break;case _deabf:
            throw new Error('attribute value missed!!');}return egdcf;case '\u0080':
        mpoqnr = '\x20';default:
        if (mpoqnr <= '\x20') switch (edbca) {case _dlnijkm:
            ytxuwv['setTagName'](facbd['slice'](jhfig, egdcf)), edbca = _dklmhij;break;case _d$y1_:
            yzx$ = facbd['slice'](jhfig, egdcf), edbca = _d_0413;break;case _djighkf:
            var ptsqru = facbd['slice'](jhfig, egdcf)['replace'](/&#?\w+;/g, decgf);z201['warning']('attribute "' + ptsqru + '" missed quot(")!!'), ytxuwv['add'](yzx$, ptsqru, jhfig);case _dsqvr:
            edbca = _dklmhij;} else switch (edbca) {case _d_0413:
            ytxuwv['tagName'], 'http://www.w3.org/1999/xhtml' === fjhi[''] && yzx$['match'](/^(?:disabled|checked|selected)$/i) || z201['warning']('attribute "' + yzx$ + '" missed value!! "' + yzx$ + '" instead2!!'), ytxuwv['add'](yzx$, yzx$, jhfig), jhfig = egdcf, edbca = _d$y1_;break;case _dsqvr:
            z201['warning']('attribute space is required"' + yzx$ + '\x22!!');case _dklmhij:
            edbca = _d$y1_, jhfig = egdcf;break;case _deabf:
            edbca = _djighkf, jhfig = egdcf;break;case _dbfedca:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}egdcf++;
  }
}function _dfjkigh(y10_z, mlnokp, wuytx) {
  for (var rpns = y10_z['tagName'], vw$xy = null, jihef = y10_z['length']; jihef--;) {
    var hjikml = y10_z[jihef],
        dchfeg = hjikml['qName'],
        jihmk = hjikml['value'],
        wuzxy;dchfeg = 0x0 < (tqprso = dchfeg['indexOf'](':')) ? (gjhilk = hjikml['prefix'] = dchfeg['slice'](0x0, tqprso), wuzxy = dchfeg['slice'](tqprso + 0x1), 'xmlns' === gjhilk && wuzxy) : (gjhilk = null, 'xmlns' === (wuzxy = dchfeg) && ''), hjikml['localName'] = wuzxy, !0x1 !== dchfeg && (null == vw$xy && (vw$xy = {}, _dtrpsoq(wuytx, wuytx = {})), wuytx[dchfeg] = vw$xy[dchfeg] = jihmk, hjikml['uri'] = 'http://www.w3.org/2000/xmlns/', mlnokp['startPrefixMapping'](dchfeg, jihmk));
  }for (jihef = y10_z['length']; jihef--;) (gjhilk = (hjikml = y10_z[jihef])['prefix']) && ('xml' === gjhilk && (hjikml['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== gjhilk && (hjikml['uri'] = wuytx[gjhilk || '']));var tqprso;wuzxy = 0x0 < (tqprso = rpns['indexOf'](':')) ? (gjhilk = y10_z['prefix'] = rpns['slice'](0x0, tqprso), y10_z['localName'] = rpns['slice'](tqprso + 0x1)) : (gjhilk = null, y10_z['localName'] = rpns);var qvutr = y10_z['uri'] = wuytx[gjhilk || ''];if (mlnokp['startElement'](qvutr, wuzxy, rpns, y10_z), !y10_z['closed']) return y10_z['currentNSMap'] = wuytx, y10_z['localNSMap'] = vw$xy, !0x0;if (mlnokp['endElement'](qvutr, wuzxy, rpns), vw$xy) {
    for (var gjhilk in vw$xy) mlnokp['endPrefixMapping'](gjhilk);
  }
}function _dwzyvux(zy_0x$, xtvuws, ljhgki, jknm, $0z1y_) {
  if (/^(?:script|textarea)$/i['test'](ljhgki)) {
    var acef = zy_0x$['indexOf']('</' + ljhgki + '>', xtvuws),
        zy_0x$ = zy_0x$['substring'](xtvuws + 0x1, acef);if (/[&<]/['test'](zy_0x$)) return (/^script$/i['test'](ljhgki) || (zy_0x$ = zy_0x$['replace'](/&#?\w+;/g, jknm)), $0z1y_['characters'](zy_0x$, 0x0, zy_0x$['length']), acef
    );
  }return xtvuws + 0x1;
}function _djhfi(dfhegi, prqtu, bgfd, oqpnlm) {
  var jmhlk = oqpnlm[bgfd];return null == jmhlk && ((jmhlk = dfhegi['lastIndexOf']('</' + bgfd + '>')) < prqtu && (jmhlk = dfhegi['lastIndexOf']('</' + bgfd)), oqpnlm[bgfd] = jmhlk), jmhlk < prqtu;
}function _dtrpsoq(cbefd, lkmno) {
  for (var y_xzw in cbefd) lkmno[y_xzw] = cbefd[y_xzw];
}function _dlinkj(gefijh, ortsp, _1203$, kplmon) {
  var _wyzx = gefijh['charAt'](ortsp + 0x2);if ('-' === _wyzx) return '-' !== gefijh['charAt'](ortsp + 0x3) ? -0x1 : ortsp < (rsqpon = gefijh['indexOf']('-->', ortsp + 0x4)) ? (_1203$['comment'](gefijh, ortsp + 0x4, rsqpon - ortsp - 0x4), rsqpon + 0x3) : (kplmon['error']('Unclosed comment'), -0x1);if ('CDATA[' == gefijh['substr'](ortsp + 0x3, 0x6)) {
    var rsqpon = gefijh['indexOf'](']]>', ortsp + 0x9);return _1203$['startCDATA'](), _1203$['characters'](gefijh, ortsp + 0x9, rsqpon - ortsp - 0x9), _1203$['endCDATA'](), rsqpon + 0x3;
  }_wyzx = _drnpmoq(gefijh, ortsp), kplmon = _wyzx['length'];if (0x1 < kplmon && /!doctype/i['test'](_wyzx[0x0][0x0])) return rsqpon = _wyzx[0x1][0x0], gefijh = 0x3 < kplmon && /^public$/i['test'](_wyzx[0x2][0x0]) && _wyzx[0x3][0x0], ortsp = 0x4 < kplmon && _wyzx[0x4][0x0], kplmon = _wyzx[kplmon - 0x1], (_1203$['startDTD'](rsqpon, gefijh && gefijh['replace'](/^(['"])(.*?)\1$/, '$2'), ortsp && ortsp['replace'](/^(['"])(.*?)\1$/, '$2')), _1203$['endDTD'](), kplmon['index'] + kplmon[0x0]['length']);return -0x1;
}function _dqpsonr(wy_, ilkjn, opknl) {
  var fhdi = wy_['indexOf']('?>', ilkjn);if (fhdi) return ilkjn = wy_['substring'](ilkjn, fhdi)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), ilkjn ? (ilkjn[0x0]['length'], opknl['processingInstruction'](ilkjn[0x1], ilkjn[0x2]), fhdi + 0x2) : -0x1;return -0x1;
}function _dompnkl() {}function _dgjl(oqnpl, qstvr) {
  return oqnpl['__proto__'] = qstvr, oqnpl;
}function _drnpmoq(lonm, ghik) {
  var hljmik,
      uxyvw = [],
      vrsqut = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (vrsqut['lastIndex'] = ghik, vrsqut['exec'](lonm); hljmik = vrsqut['exec'](lonm);) if (uxyvw['push'](hljmik), hljmik[0x1]) return uxyvw;
}var _dnpom = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dfgiehd = new RegExp('[\\-\\.0-9' + _dnpom['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _d$wvzy = new RegExp('^' + _dnpom['source'] + _dfgiehd['source'] + '*(?::' + _dnpom['source'] + _dfgiehd['source'] + '*)?$'),
    _dlnijkm = 0x0,
    _d$y1_ = 0x1,
    _d_0413 = 0x2,
    _deabf = 0x3,
    _djighkf = 0x4,
    _dsqvr = 0x5,
    _dklmhij = 0x6,
    _dbfedca = 0x7;_dz012$['prototype'] = { 'parse': function (vsq, iehfdg, sqrp) {
    var xvwust = this['domBuilder'];xvwust['startDocument'](), _dtrpsoq(iehfdg, iehfdg = {}), _dkghjli(vsq, iehfdg, sqrp, xvwust, this['errorHandler']), xvwust['endDocument']();
  } }, _dompnkl['prototype'] = { 'setTagName': function (fgjih) {
    if (!_d$wvzy['test'](fgjih)) throw new Error('invalid tagName:' + fgjih);this['tagName'] = fgjih;
  }, 'add': function (z0_, dabecf, pomlkn) {
    if (!_d$wvzy['test'](z0_)) throw new Error('invalid attribute:' + z0_);this[this['length']++] = { 'qName': z0_, 'value': dabecf, 'offset': pomlkn };
  }, 'length': 0x0, 'getLocalName': function (prost) {
    return this[prost]['localName'];
  }, 'getLocator': function (ighefj) {
    return this[ighefj]['locator'];
  }, 'getQName': function (z$w_) {
    return this[z$w_]['qName'];
  }, 'getURI': function (hgfid) {
    return this[hgfid]['uri'];
  }, 'getValue': function (nrsq) {
    return this[nrsq]['value'];
  } }, _dgjl({}, _dgjl['prototype']) instanceof _dgjl || (_dgjl = function (x$z_, jhl) {
  function oqsprn() {}for (jhl in oqsprn['prototype'] = jhl, oqsprn = new oqsprn(), x$z_) oqsprn[jhl] = x$z_[jhl];return oqsprn;
}), exports['XMLReader'] = _dz012$;