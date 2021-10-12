var _ = wx.y$;
function _dcbea() {}function _dlkjghi(tuxw, xytuw, omnjlk, wsrvu, vwrs) {
  function _0z$12(fgcdh) {
    var mproq = fgcdh['slice'](0x1, -0x1);return mproq in omnjlk ? omnjlk[mproq] : '#' === mproq['charAt'](0x0) ? 0xffff < (mproq = parseInt(mproq['substr'](0x1)['replace']('x', '0x'))) ? (mproq -= 0x10000, String['fromCharCode'](0xd800 + (mproq >> 0xa), 0xdc00 + (0x3ff & mproq))) : String['fromCharCode'](mproq) : (vwrs['error']('entity not found:' + fgcdh), fgcdh);
  }function dghei(nmoqpr) {
    var edgihf;fdbe < nmoqpr && (edgihf = tuxw['substring'](fdbe, nmoqpr)['replace'](/&#?\w+;/g, _0z$12), lknjo && ghjief(fdbe), wsrvu['characters'](edgihf, 0x0, nmoqpr - fdbe), fdbe = nmoqpr);
  }function ghjief(wyz$, dcfhge) {
    for (; edafb <= wyz$ && (dcfhge = npolkm['exec'](tuxw));) fehgdc = dcfhge['index'], edafb = fehgdc + dcfhge[0x0]['length'], lknjo['lineNumber']++;lknjo['columnNumber'] = wyz$ - fehgdc + 0x1;
  }for (var fehgdc = 0x0, edafb = 0x0, npolkm = /.*(?:\r\n?|\n)|.*$/g, lknjo = wsrvu['locator'], dfbecg = [{ 'currentNSMap': xytuw }], mqr = {}, fdbe = 0x0;;) {
    try {
      var rvtqu = tuxw['indexOf']('<', fdbe),
          zy1_$0,
          cdfegh;if (rvtqu < 0x0) return void (tuxw['substr'](fdbe)['match'](/^\s*$/) || (cdfegh = (zy1_$0 = wsrvu['doc'])['createTextNode'](tuxw['substr'](fdbe)), zy1_$0['appendChild'](cdfegh), wsrvu['currentElement'] = cdfegh));switch (fdbe < rvtqu && dghei(rvtqu), tuxw['charAt'](rvtqu + 0x1)) {case '/':
          var dafbe = tuxw['indexOf']('>', rvtqu + 0x3),
              kjmih = tuxw['substring'](rvtqu + 0x2, dafbe),
              pkolnm = dfbecg['pop']();dafbe < 0x0 ? (kjmih = tuxw['substring'](rvtqu + 0x2)['replace'](/[\s<].*/, ''), vwrs['error']('end tag name: ' + kjmih + ' is not complete:' + pkolnm['tagName']), dafbe = rvtqu + 0x1 + kjmih['length']) : kjmih['match'](/\s</) && (kjmih = kjmih['replace'](/[\s<].*/, ''), vwrs['error']('end tag name: ' + kjmih + ' maybe not complete'), dafbe = rvtqu + 0x1 + kjmih['length']);var nmkpl = pkolnm['localNSMap'],
              _x$zwy = pkolnm['tagName'] == kjmih;if (_x$zwy || pkolnm['tagName'] && pkolnm['tagName']['toLowerCase']() == kjmih['toLowerCase']()) {
            if (wsrvu['endElement'](pkolnm['uri'], pkolnm['localName'], kjmih), nmkpl) {
              for (var yx$z0_ in nmkpl) wsrvu['endPrefixMapping'](yx$z0_);
            }_x$zwy || vwrs['fatalError']('end tag name: ' + kjmih + ' is not match the current start tagName:' + pkolnm['tagName']);
          } else dfbecg['push'](pkolnm);dafbe++;break;case '?':
          lknjo && ghjief(rvtqu), dafbe = _dolpkmn(tuxw, rvtqu, wsrvu);break;case '!':
          lknjo && ghjief(rvtqu), dafbe = _domnr(tuxw, rvtqu, wsrvu, vwrs);break;default:
          lknjo && ghjief(rvtqu);var ornpqm = new _dfhegc(),
              vwst = dfbecg[dfbecg['length'] - 0x1]['currentNSMap'],
              dafbe = _dijmkl(tuxw, rvtqu, ornpqm, vwst, _0z$12, vwrs),
              jighf = ornpqm['length'];if (!ornpqm['closed'] && _dnqpro(tuxw, dafbe, ornpqm['tagName'], mqr) && (ornpqm['closed'] = !0x0, omnjlk['nbsp'] || vwrs['warning']('unclosed xml attribute')), lknjo && jighf) {
            for (var kmhi = _dvrst(lknjo, {}), uvxwty = 0x0; uvxwty < jighf; uvxwty++) {
              var lmik = ornpqm[uvxwty];ghjief(lmik['offset']), lmik['locator'] = _dvrst(lknjo, {});
            }wsrvu['locator'] = kmhi, _dfhgei(ornpqm, wsrvu, vwst) && dfbecg['push'](ornpqm), wsrvu['locator'] = lknjo;
          } else _dfhgei(ornpqm, wsrvu, vwst) && dfbecg['push'](ornpqm);'http://www.w3.org/1999/xhtml' !== ornpqm['uri'] || ornpqm['closed'] ? dafbe++ : dafbe = _donpq(tuxw, dafbe, ornpqm['tagName'], _0z$12, wsrvu);}
    } catch (mkoj) {
      vwrs['error']('element parse error: ' + mkoj), dafbe = -0x1;
    }fdbe < dafbe ? fdbe = dafbe : dghei(Math['max'](rvtqu, fdbe) + 0x1);
  }
}function _dvrst(jhifkg, mklpo) {
  return mklpo['lineNumber'] = jhifkg['lineNumber'], mklpo['columnNumber'] = jhifkg['columnNumber'], mklpo;
}function _dijmkl(vswtx, oqtrps, mqlopn, xuwtv, z012_, wtuvyx) {
  for (var fdgh, xuwzy = ++oqtrps, omln = _dpnroq;;) {
    var oljn = vswtx['charAt'](xuwzy);switch (oljn) {case '=':
        if (omln === _ddgfcb) fdgh = vswtx['slice'](oqtrps, xuwzy), omln = _dz$0_;else {
          if (omln !== _dompnlq) throw new Error('attribute equal must after attrName');omln = _dz$0_;
        }break;case '\x27':case '\x22':
        if (omln === _dz$0_ || omln === _ddgfcb) {
          if (omln === _ddgfcb && (wtuvyx['warning']('attribute value must after "="'), fdgh = vswtx['slice'](oqtrps, xuwzy)), !(0x0 < (xuwzy = vswtx['indexOf'](oljn, oqtrps = xuwzy + 0x1)))) throw new Error('attribute value no end \'' + oljn + '\' match');ihmk = vswtx['slice'](oqtrps, xuwzy)['replace'](/&#?\w+;/g, z012_), mqlopn['add'](fdgh, ihmk, oqtrps - 0x1), omln = _dcedf;
        } else {
          if (omln != _dhjfki) throw new Error('attribute value must after "="');ihmk = vswtx['slice'](oqtrps, xuwzy)['replace'](/&#?\w+;/g, z012_), mqlopn['add'](fdgh, ihmk, oqtrps), wtuvyx['warning']('attribute "' + fdgh + '" missed start quot(' + oljn + ')!!'), oqtrps = xuwzy + 0x1, omln = _dcedf;
        }break;case '/':
        switch (omln) {case _dpnroq:
            mqlopn['setTagName'](vswtx['slice'](oqtrps, xuwzy));case _dcedf:case _dhfgedc:case _debfcg:
            omln = _debfcg, mqlopn['closed'] = !0x0;case _dhjfki:case _ddgfcb:case _dompnlq:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return wtuvyx['error']('unexpected end of input'), omln == _dpnroq && mqlopn['setTagName'](vswtx['slice'](oqtrps, xuwzy)), xuwzy;case '>':
        switch (omln) {case _dpnroq:
            mqlopn['setTagName'](vswtx['slice'](oqtrps, xuwzy));case _dcedf:case _dhfgedc:case _debfcg:
            break;case _dhjfki:case _ddgfcb:
            '/' === (ihmk = vswtx['slice'](oqtrps, xuwzy))['slice'](-0x1) && (mqlopn['closed'] = !0x0, ihmk = ihmk['slice'](0x0, -0x1));case _dompnlq:
            omln === _dompnlq && (ihmk = fdgh), omln == _dhjfki ? (wtuvyx['warning']('attribute "' + ihmk + '" missed quot(")!!'), mqlopn['add'](fdgh, ihmk['replace'](/&#?\w+;/g, z012_), oqtrps)) : ('http://www.w3.org/1999/xhtml' === xuwtv[''] && ihmk['match'](/^(?:disabled|checked|selected)$/i) || wtuvyx['warning']('attribute "' + ihmk + '" missed value!! "' + ihmk + '" instead!!'), mqlopn['add'](ihmk, ihmk, oqtrps));break;case _dz$0_:
            throw new Error('attribute value missed!!');}return xuwzy;case '\u0080':
        oljn = '\x20';default:
        if (oljn <= '\x20') switch (omln) {case _dpnroq:
            mqlopn['setTagName'](vswtx['slice'](oqtrps, xuwzy)), omln = _dhfgedc;break;case _ddgfcb:
            fdgh = vswtx['slice'](oqtrps, xuwzy), omln = _dompnlq;break;case _dhjfki:
            var ihmk = vswtx['slice'](oqtrps, xuwzy)['replace'](/&#?\w+;/g, z012_);wtuvyx['warning']('attribute "' + ihmk + '" missed quot(")!!'), mqlopn['add'](fdgh, ihmk, oqtrps);case _dcedf:
            omln = _dhfgedc;} else switch (omln) {case _dompnlq:
            mqlopn['tagName'], 'http://www.w3.org/1999/xhtml' === xuwtv[''] && fdgh['match'](/^(?:disabled|checked|selected)$/i) || wtuvyx['warning']('attribute "' + fdgh + '" missed value!! "' + fdgh + '" instead2!!'), mqlopn['add'](fdgh, fdgh, oqtrps), oqtrps = xuwzy, omln = _ddgfcb;break;case _dcedf:
            wtuvyx['warning']('attribute space is required"' + fdgh + '\x22!!');case _dhfgedc:
            omln = _ddgfcb, oqtrps = xuwzy;break;case _dz$0_:
            omln = _dhjfki, oqtrps = xuwzy;break;case _debfcg:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}xuwzy++;
  }
}function _dfhgei(_321, figkjh, lnop) {
  for (var pqonrm = _321['tagName'], hkjig = null, baecd = _321['length']; baecd--;) {
    var kiglhj = _321[baecd],
        $0_z = kiglhj['qName'],
        y$xwzv = kiglhj['value'],
        bfacd;$0_z = 0x0 < (jighlk = $0_z['indexOf'](':')) ? (uwsrv = kiglhj['prefix'] = $0_z['slice'](0x0, jighlk), bfacd = $0_z['slice'](jighlk + 0x1), 'xmlns' === uwsrv && bfacd) : (uwsrv = null, 'xmlns' === (bfacd = $0_z) && ''), kiglhj['localName'] = bfacd, !0x1 !== $0_z && (null == hkjig && (hkjig = {}, _dfgjeh(lnop, lnop = {})), lnop[$0_z] = hkjig[$0_z] = y$xwzv, kiglhj['uri'] = 'http://www.w3.org/2000/xmlns/', figkjh['startPrefixMapping']($0_z, y$xwzv));
  }for (baecd = _321['length']; baecd--;) (uwsrv = (kiglhj = _321[baecd])['prefix']) && ('xml' === uwsrv && (kiglhj['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== uwsrv && (kiglhj['uri'] = lnop[uwsrv || '']));var jighlk;bfacd = 0x0 < (jighlk = pqonrm['indexOf'](':')) ? (uwsrv = _321['prefix'] = pqonrm['slice'](0x0, jighlk), _321['localName'] = pqonrm['slice'](jighlk + 0x1)) : (uwsrv = null, _321['localName'] = pqonrm);var onmpr = _321['uri'] = lnop[uwsrv || ''];if (figkjh['startElement'](onmpr, bfacd, pqonrm, _321), !_321['closed']) return _321['currentNSMap'] = lnop, _321['localNSMap'] = hkjig, !0x0;if (figkjh['endElement'](onmpr, bfacd, pqonrm), hkjig) {
    for (var uwsrv in hkjig) figkjh['endPrefixMapping'](uwsrv);
  }
}function _donpq(dcgeb, xyuzv, v$zyw, klnmi, svuxw) {
  if (/^(?:script|textarea)$/i['test'](v$zyw)) {
    var mlijhk = dcgeb['indexOf']('</' + v$zyw + '>', xyuzv),
        dcgeb = dcgeb['substring'](xyuzv + 0x1, mlijhk);if (/[&<]/['test'](dcgeb)) return (/^script$/i['test'](v$zyw) || (dcgeb = dcgeb['replace'](/&#?\w+;/g, klnmi)), svuxw['characters'](dcgeb, 0x0, dcgeb['length']), mlijhk
    );
  }return xyuzv + 0x1;
}function _dnqpro(zx0y$_, kpnlo, hlmj, yzwuxv) {
  var xzy0_ = yzwuxv[hlmj];return null == xzy0_ && ((xzy0_ = zx0y$_['lastIndexOf']('</' + hlmj + '>')) < kpnlo && (xzy0_ = zx0y$_['lastIndexOf']('</' + hlmj)), yzwuxv[hlmj] = xzy0_), xzy0_ < kpnlo;
}function _dfgjeh(uyvw, zyxwvu) {
  for (var imkljh in uyvw) zyxwvu[imkljh] = uyvw[imkljh];
}function _domnr(ijkm, twvuy, wyuzvx, qprn) {
  var mljko = ijkm['charAt'](twvuy + 0x2);if ('-' === mljko) return '-' !== ijkm['charAt'](twvuy + 0x3) ? -0x1 : twvuy < (cedab = ijkm['indexOf']('-->', twvuy + 0x4)) ? (wyuzvx['comment'](ijkm, twvuy + 0x4, cedab - twvuy - 0x4), cedab + 0x3) : (qprn['error']('Unclosed comment'), -0x1);if ('CDATA[' == ijkm['substr'](twvuy + 0x3, 0x6)) {
    var cedab = ijkm['indexOf'](']]>', twvuy + 0x9);return wyuzvx['startCDATA'](), wyuzvx['characters'](ijkm, twvuy + 0x9, cedab - twvuy - 0x9), wyuzvx['endCDATA'](), cedab + 0x3;
  }mljko = _domjkn(ijkm, twvuy), qprn = mljko['length'];if (0x1 < qprn && /!doctype/i['test'](mljko[0x0][0x0])) return cedab = mljko[0x1][0x0], ijkm = 0x3 < qprn && /^public$/i['test'](mljko[0x2][0x0]) && mljko[0x3][0x0], twvuy = 0x4 < qprn && mljko[0x4][0x0], qprn = mljko[qprn - 0x1], (wyuzvx['startDTD'](cedab, ijkm && ijkm['replace'](/^(['"])(.*?)\1$/, '$2'), twvuy && twvuy['replace'](/^(['"])(.*?)\1$/, '$2')), wyuzvx['endDTD'](), qprn['index'] + qprn[0x0]['length']);return -0x1;
}function _dolpkmn(mqronp, mpnq, mqoprn) {
  var $zw_xy = mqronp['indexOf']('?>', mpnq);if ($zw_xy) return mpnq = mqronp['substring'](mpnq, $zw_xy)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), mpnq ? (mpnq[0x0]['length'], mqoprn['processingInstruction'](mpnq[0x1], mpnq[0x2]), $zw_xy + 0x2) : -0x1;return -0x1;
}function _dfhegc() {}function _dlhgkj(kpmno, ceba) {
  return kpmno['__proto__'] = ceba, kpmno;
}function _domjkn(onpmkl, mlp) {
  var ptsr,
      jmkol = [],
      kijgl = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (kijgl['lastIndex'] = mlp, kijgl['exec'](onpmkl); ptsr = kijgl['exec'](onpmkl);) if (jmkol['push'](ptsr), ptsr[0x1]) return jmkol;
}var _d_zwyx$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dvwstu = new RegExp('[\\-\\.0-9' + _d_zwyx$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _duzvxyw = new RegExp('^' + _d_zwyx$['source'] + _dvwstu['source'] + '*(?::' + _d_zwyx$['source'] + _dvwstu['source'] + '*)?$'),
    _dpnroq = 0x0,
    _ddgfcb = 0x1,
    _dompnlq = 0x2,
    _dz$0_ = 0x3,
    _dhjfki = 0x4,
    _dcedf = 0x5,
    _dhfgedc = 0x6,
    _debfcg = 0x7;_dcbea['prototype'] = { 'parse': function (gedfhi, lnoj, rswuvt) {
    var yz_$0 = this['domBuilder'];yz_$0['startDocument'](), _dfgjeh(lnoj, lnoj = {}), _dlkjghi(gedfhi, lnoj, rswuvt, yz_$0, this['errorHandler']), yz_$0['endDocument']();
  } }, _dfhegc['prototype'] = { 'setTagName': function (ief) {
    if (!_duzvxyw['test'](ief)) throw new Error('invalid tagName:' + ief);this['tagName'] = ief;
  }, 'add': function (pmnkl, pnmoqr, febc) {
    if (!_duzvxyw['test'](pmnkl)) throw new Error('invalid attribute:' + pmnkl);this[this['length']++] = { 'qName': pmnkl, 'value': pnmoqr, 'offset': febc };
  }, 'length': 0x0, 'getLocalName': function (rstpoq) {
    return this[rstpoq]['localName'];
  }, 'getLocator': function (xwyzv$) {
    return this[xwyzv$]['locator'];
  }, 'getQName': function (fhjige) {
    return this[fhjige]['qName'];
  }, 'getURI': function (qruvts) {
    return this[qruvts]['uri'];
  }, 'getValue': function (dcbfg) {
    return this[dcbfg]['value'];
  } }, _dlhgkj({}, _dlhgkj['prototype']) instanceof _dlhgkj || (_dlhgkj = function (molnj, v$yxzw) {
  function _$203() {}for (v$yxzw in _$203['prototype'] = v$yxzw, _$203 = new _$203(), molnj) _$203[v$yxzw] = molnj[v$yxzw];return _$203;
}), exports['XMLReader'] = _dcbea;