var _ = wx.y$;
function _d_0zx$y() {}function _d$201_(degbfc, trsuv, rvuq, wtvrus, gefhij) {
  function cdeh(knojlm) {
    var uvrsqt = knojlm['slice'](0x1, -0x1);return uvrsqt in rvuq ? rvuq[uvrsqt] : '#' === uvrsqt['charAt'](0x0) ? 0xffff < (uvrsqt = parseInt(uvrsqt['substr'](0x1)['replace']('x', '0x'))) ? (uvrsqt -= 0x10000, String['fromCharCode'](0xd800 + (uvrsqt >> 0xa), 0xdc00 + (0x3ff & uvrsqt))) : String['fromCharCode'](uvrsqt) : (gefhij['error']('entity not found:' + knojlm), knojlm);
  }function cfdh(sqprno) {
    var tvuwsr;opt < sqprno && (tvuwsr = degbfc['substring'](opt, sqprno)['replace'](/&#?\w+;/g, cdeh), monrq && ijgefh(opt), wtvrus['characters'](tvuwsr, 0x0, sqprno - opt), opt = sqprno);
  }function ijgefh(zyu, qomln) {
    for (; ustxv <= zyu && (qomln = sxuwvt['exec'](degbfc));) ljg = qomln['index'], ustxv = ljg + qomln[0x0]['length'], monrq['lineNumber']++;monrq['columnNumber'] = zyu - ljg + 0x1;
  }for (var ljg = 0x0, ustxv = 0x0, sxuwvt = /.*(?:\r\n?|\n)|.*$/g, monrq = wtvrus['locator'], nklji = [{ 'currentNSMap': trsuv }], aedb = {}, opt = 0x0;;) {
    try {
      var gfhecd = degbfc['indexOf']('<', opt),
          fceda,
          ilmjn;if (gfhecd < 0x0) return void (degbfc['substr'](opt)['match'](/^\s*$/) || (ilmjn = (fceda = wtvrus['doc'])['createTextNode'](degbfc['substr'](opt)), fceda['appendChild'](ilmjn), wtvrus['currentElement'] = ilmjn));switch (opt < gfhecd && cfdh(gfhecd), degbfc['charAt'](gfhecd + 0x1)) {case '/':
          var knlomj = degbfc['indexOf']('>', gfhecd + 0x3),
              bdafce = degbfc['substring'](gfhecd + 0x2, knlomj),
              pqrots = nklji['pop']();knlomj < 0x0 ? (bdafce = degbfc['substring'](gfhecd + 0x2)['replace'](/[\s<].*/, ''), gefhij['error']('end tag name: ' + bdafce + ' is not complete:' + pqrots['tagName']), knlomj = gfhecd + 0x1 + bdafce['length']) : bdafce['match'](/\s</) && (bdafce = bdafce['replace'](/[\s<].*/, ''), gefhij['error']('end tag name: ' + bdafce + ' maybe not complete'), knlomj = gfhecd + 0x1 + bdafce['length']);var usxvt = pqrots['localNSMap'],
              nmqol = pqrots['tagName'] == bdafce;if (nmqol || pqrots['tagName'] && pqrots['tagName']['toLowerCase']() == bdafce['toLowerCase']()) {
            if (wtvrus['endElement'](pqrots['uri'], pqrots['localName'], bdafce), usxvt) {
              for (var mhkji in usxvt) wtvrus['endPrefixMapping'](mhkji);
            }nmqol || gefhij['fatalError']('end tag name: ' + bdafce + ' is not match the current start tagName:' + pqrots['tagName']);
          } else nklji['push'](pqrots);knlomj++;break;case '?':
          monrq && ijgefh(gfhecd), knlomj = _ddfeghc(degbfc, gfhecd, wtvrus);break;case '!':
          monrq && ijgefh(gfhecd), knlomj = _dcdbaf(degbfc, gfhecd, wtvrus, gefhij);break;default:
          monrq && ijgefh(gfhecd);var w$yvz = new _dhefgij(),
              hedcg = nklji[nklji['length'] - 0x1]['currentNSMap'],
              knlomj = _dsrqtp(degbfc, gfhecd, w$yvz, hedcg, cdeh, gefhij),
              pmnq = w$yvz['length'];if (!w$yvz['closed'] && _debd(degbfc, knlomj, w$yvz['tagName'], aedb) && (w$yvz['closed'] = !0x0, rvuq['nbsp'] || gefhij['warning']('unclosed xml attribute')), monrq && pmnq) {
            for (var mkhlij = _d$yvxz(monrq, {}), dgefih = 0x0; dgefih < pmnq; dgefih++) {
              var srpu = w$yvz[dgefih];ijgefh(srpu['offset']), srpu['locator'] = _d$yvxz(monrq, {});
            }wtvrus['locator'] = mkhlij, _dpmnql(w$yvz, wtvrus, hedcg) && nklji['push'](w$yvz), wtvrus['locator'] = monrq;
          } else _dpmnql(w$yvz, wtvrus, hedcg) && nklji['push'](w$yvz);'http://www.w3.org/1999/xhtml' !== w$yvz['uri'] || w$yvz['closed'] ? knlomj++ : knlomj = _djihlgk(degbfc, knlomj, w$yvz['tagName'], cdeh, wtvrus);}
    } catch (hgefji) {
      gefhij['error']('element parse error: ' + hgefji), knlomj = -0x1;
    }opt < knlomj ? opt = knlomj : cfdh(Math['max'](gfhecd, opt) + 0x1);
  }
}function _d$yvxz(omrpq, urpsq) {
  return urpsq['lineNumber'] = omrpq['lineNumber'], urpsq['columnNumber'] = omrpq['columnNumber'], urpsq;
}function _dsrqtp(dehg, srpnqo, ptqsor, acd, otpsr, xvtuw) {
  for (var njkm, lkgjh = ++srpnqo, tupqrs = _d_1$2;;) {
    var pmkol = dehg['charAt'](lkgjh);switch (pmkol) {case '=':
        if (tupqrs === _dqpnmlo) njkm = dehg['slice'](srpnqo, lkgjh), tupqrs = _dijnlkm;else {
          if (tupqrs !== _drwvsut) throw new Error('attribute equal must after attrName');tupqrs = _dijnlkm;
        }break;case '\x27':case '\x22':
        if (tupqrs === _dijnlkm || tupqrs === _dqpnmlo) {
          if (tupqrs === _dqpnmlo && (xvtuw['warning']('attribute value must after "="'), njkm = dehg['slice'](srpnqo, lkgjh)), !(0x0 < (lkgjh = dehg['indexOf'](pmkol, srpnqo = lkgjh + 0x1)))) throw new Error('attribute value no end \'' + pmkol + '\' match');wyxut = dehg['slice'](srpnqo, lkgjh)['replace'](/&#?\w+;/g, otpsr), ptqsor['add'](njkm, wyxut, srpnqo - 0x1), tupqrs = _ddeb;
        } else {
          if (tupqrs != _dpqormn) throw new Error('attribute value must after "="');wyxut = dehg['slice'](srpnqo, lkgjh)['replace'](/&#?\w+;/g, otpsr), ptqsor['add'](njkm, wyxut, srpnqo), xvtuw['warning']('attribute "' + njkm + '" missed start quot(' + pmkol + ')!!'), srpnqo = lkgjh + 0x1, tupqrs = _ddeb;
        }break;case '/':
        switch (tupqrs) {case _d_1$2:
            ptqsor['setTagName'](dehg['slice'](srpnqo, lkgjh));case _ddeb:case _dgkiljh:case _d_yzw$x:
            tupqrs = _d_yzw$x, ptqsor['closed'] = !0x0;case _dpqormn:case _dqpnmlo:case _drwvsut:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return xvtuw['error']('unexpected end of input'), tupqrs == _d_1$2 && ptqsor['setTagName'](dehg['slice'](srpnqo, lkgjh)), lkgjh;case '>':
        switch (tupqrs) {case _d_1$2:
            ptqsor['setTagName'](dehg['slice'](srpnqo, lkgjh));case _ddeb:case _dgkiljh:case _d_yzw$x:
            break;case _dpqormn:case _dqpnmlo:
            '/' === (wyxut = dehg['slice'](srpnqo, lkgjh))['slice'](-0x1) && (ptqsor['closed'] = !0x0, wyxut = wyxut['slice'](0x0, -0x1));case _drwvsut:
            tupqrs === _drwvsut && (wyxut = njkm), tupqrs == _dpqormn ? (xvtuw['warning']('attribute "' + wyxut + '" missed quot(")!!'), ptqsor['add'](njkm, wyxut['replace'](/&#?\w+;/g, otpsr), srpnqo)) : ('http://www.w3.org/1999/xhtml' === acd[''] && wyxut['match'](/^(?:disabled|checked|selected)$/i) || xvtuw['warning']('attribute "' + wyxut + '" missed value!! "' + wyxut + '" instead!!'), ptqsor['add'](wyxut, wyxut, srpnqo));break;case _dijnlkm:
            throw new Error('attribute value missed!!');}return lkgjh;case '\u0080':
        pmkol = '\x20';default:
        if (pmkol <= '\x20') switch (tupqrs) {case _d_1$2:
            ptqsor['setTagName'](dehg['slice'](srpnqo, lkgjh)), tupqrs = _dgkiljh;break;case _dqpnmlo:
            njkm = dehg['slice'](srpnqo, lkgjh), tupqrs = _drwvsut;break;case _dpqormn:
            var wyxut = dehg['slice'](srpnqo, lkgjh)['replace'](/&#?\w+;/g, otpsr);xvtuw['warning']('attribute "' + wyxut + '" missed quot(")!!'), ptqsor['add'](njkm, wyxut, srpnqo);case _ddeb:
            tupqrs = _dgkiljh;} else switch (tupqrs) {case _drwvsut:
            ptqsor['tagName'], 'http://www.w3.org/1999/xhtml' === acd[''] && njkm['match'](/^(?:disabled|checked|selected)$/i) || xvtuw['warning']('attribute "' + njkm + '" missed value!! "' + njkm + '" instead2!!'), ptqsor['add'](njkm, njkm, srpnqo), srpnqo = lkgjh, tupqrs = _dqpnmlo;break;case _ddeb:
            xvtuw['warning']('attribute space is required"' + njkm + '\x22!!');case _dgkiljh:
            tupqrs = _dqpnmlo, srpnqo = lkgjh;break;case _dijnlkm:
            tupqrs = _dpqormn, srpnqo = lkgjh;break;case _d_yzw$x:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}lkgjh++;
  }
}function _dpmnql(ceadb, xz0y$_, efighd) {
  for (var jeg = ceadb['tagName'], hejgif = null, caedb = ceadb['length']; caedb--;) {
    var jlkhgi = ceadb[caedb],
        qnmol = jlkhgi['qName'],
        $_0231 = jlkhgi['value'],
        wsvtr;qnmol = 0x0 < (yzuxv = qnmol['indexOf'](':')) ? (uvtqsr = jlkhgi['prefix'] = qnmol['slice'](0x0, yzuxv), wsvtr = qnmol['slice'](yzuxv + 0x1), 'xmlns' === uvtqsr && wsvtr) : (uvtqsr = null, 'xmlns' === (wsvtr = qnmol) && ''), jlkhgi['localName'] = wsvtr, !0x1 !== qnmol && (null == hejgif && (hejgif = {}, _dstwux(efighd, efighd = {})), efighd[qnmol] = hejgif[qnmol] = $_0231, jlkhgi['uri'] = 'http://www.w3.org/2000/xmlns/', xz0y$_['startPrefixMapping'](qnmol, $_0231));
  }for (caedb = ceadb['length']; caedb--;) (uvtqsr = (jlkhgi = ceadb[caedb])['prefix']) && ('xml' === uvtqsr && (jlkhgi['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== uvtqsr && (jlkhgi['uri'] = efighd[uvtqsr || '']));var yzuxv;wsvtr = 0x0 < (yzuxv = jeg['indexOf'](':')) ? (uvtqsr = ceadb['prefix'] = jeg['slice'](0x0, yzuxv), ceadb['localName'] = jeg['slice'](yzuxv + 0x1)) : (uvtqsr = null, ceadb['localName'] = jeg);var mlonq = ceadb['uri'] = efighd[uvtqsr || ''];if (xz0y$_['startElement'](mlonq, wsvtr, jeg, ceadb), !ceadb['closed']) return ceadb['currentNSMap'] = efighd, ceadb['localNSMap'] = hejgif, !0x0;if (xz0y$_['endElement'](mlonq, wsvtr, jeg), hejgif) {
    for (var uvtqsr in hejgif) xz0y$_['endPrefixMapping'](uvtqsr);
  }
}function _djihlgk(sruvw, fgj, ehifg, mjlkni, z$y) {
  if (/^(?:script|textarea)$/i['test'](ehifg)) {
    var hideg = sruvw['indexOf']('</' + ehifg + '>', fgj),
        sruvw = sruvw['substring'](fgj + 0x1, hideg);if (/[&<]/['test'](sruvw)) return (/^script$/i['test'](ehifg) || (sruvw = sruvw['replace'](/&#?\w+;/g, mjlkni)), z$y['characters'](sruvw, 0x0, sruvw['length']), hideg
    );
  }return fgj + 0x1;
}function _debd(qvtsur, ruvstw, trsvq, uqsrtv) {
  var x_z0y = uqsrtv[trsvq];return null == x_z0y && ((x_z0y = qvtsur['lastIndexOf']('</' + trsvq + '>')) < ruvstw && (x_z0y = qvtsur['lastIndexOf']('</' + trsvq)), uqsrtv[trsvq] = x_z0y), x_z0y < ruvstw;
}function _dstwux(qtspro, $zwy_) {
  for (var tvrw in qtspro) $zwy_[tvrw] = qtspro[tvrw];
}function _dcdbaf(lpq, qmnrp, rstopq, zyx$v) {
  var dcbfe = lpq['charAt'](qmnrp + 0x2);if ('-' === dcbfe) return '-' !== lpq['charAt'](qmnrp + 0x3) ? -0x1 : qmnrp < (vtyxw = lpq['indexOf']('-->', qmnrp + 0x4)) ? (rstopq['comment'](lpq, qmnrp + 0x4, vtyxw - qmnrp - 0x4), vtyxw + 0x3) : (zyx$v['error']('Unclosed comment'), -0x1);if ('CDATA[' == lpq['substr'](qmnrp + 0x3, 0x6)) {
    var vtyxw = lpq['indexOf'](']]>', qmnrp + 0x9);return rstopq['startCDATA'](), rstopq['characters'](lpq, qmnrp + 0x9, vtyxw - qmnrp - 0x9), rstopq['endCDATA'](), vtyxw + 0x3;
  }dcbfe = _dbgdf(lpq, qmnrp), zyx$v = dcbfe['length'];if (0x1 < zyx$v && /!doctype/i['test'](dcbfe[0x0][0x0])) return vtyxw = dcbfe[0x1][0x0], lpq = 0x3 < zyx$v && /^public$/i['test'](dcbfe[0x2][0x0]) && dcbfe[0x3][0x0], qmnrp = 0x4 < zyx$v && dcbfe[0x4][0x0], zyx$v = dcbfe[zyx$v - 0x1], (rstopq['startDTD'](vtyxw, lpq && lpq['replace'](/^(['"])(.*?)\1$/, '$2'), qmnrp && qmnrp['replace'](/^(['"])(.*?)\1$/, '$2')), rstopq['endDTD'](), zyx$v['index'] + zyx$v[0x0]['length']);return -0x1;
}function _ddfeghc(ehfigj, zwv$, hgdcf) {
  var lnko = ehfigj['indexOf']('?>', zwv$);if (lnko) return zwv$ = ehfigj['substring'](zwv$, lnko)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), zwv$ ? (zwv$[0x0]['length'], hgdcf['processingInstruction'](zwv$[0x1], zwv$[0x2]), lnko + 0x2) : -0x1;return -0x1;
}function _dhefgij() {}function _dmoknj(gjhlk, yvxutw) {
  return gjhlk['__proto__'] = yvxutw, gjhlk;
}function _dbgdf(vrtusq, xvywz$) {
  var jgihk,
      pokn = [],
      ecadb = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ecadb['lastIndex'] = xvywz$, ecadb['exec'](vrtusq); jgihk = ecadb['exec'](vrtusq);) if (pokn['push'](jgihk), jgihk[0x1]) return pokn;
}var _dgifhkj = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dwstu = new RegExp('[\\-\\.0-9' + _dgifhkj['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dxsvtw = new RegExp('^' + _dgifhkj['source'] + _dwstu['source'] + '*(?::' + _dgifhkj['source'] + _dwstu['source'] + '*)?$'),
    _d_1$2 = 0x0,
    _dqpnmlo = 0x1,
    _drwvsut = 0x2,
    _dijnlkm = 0x3,
    _dpqormn = 0x4,
    _ddeb = 0x5,
    _dgkiljh = 0x6,
    _d_yzw$x = 0x7;_d_0zx$y['prototype'] = { 'parse': function (sqtr, zwvxy, zx$y_0) {
    var dfecgh = this['domBuilder'];dfecgh['startDocument'](), _dstwux(zwvxy, zwvxy = {}), _d$201_(sqtr, zwvxy, zx$y_0, dfecgh, this['errorHandler']), dfecgh['endDocument']();
  } }, _dhefgij['prototype'] = { 'setTagName': function (qsurtp) {
    if (!_dxsvtw['test'](qsurtp)) throw new Error('invalid tagName:' + qsurtp);this['tagName'] = qsurtp;
  }, 'add': function (gkijhl, vxtuyw, ifkg) {
    if (!_dxsvtw['test'](gkijhl)) throw new Error('invalid attribute:' + gkijhl);this[this['length']++] = { 'qName': gkijhl, 'value': vxtuyw, 'offset': ifkg };
  }, 'length': 0x0, 'getLocalName': function (lnmpq) {
    return this[lnmpq]['localName'];
  }, 'getLocator': function (tqosrp) {
    return this[tqosrp]['locator'];
  }, 'getQName': function (kljmhi) {
    return this[kljmhi]['qName'];
  }, 'getURI': function (iljkhm) {
    return this[iljkhm]['uri'];
  }, 'getValue': function (storp) {
    return this[storp]['value'];
  } }, _dmoknj({}, _dmoknj['prototype']) instanceof _dmoknj || (_dmoknj = function (prqno, ywvxzu) {
  function uvyzw() {}for (ywvxzu in uvyzw['prototype'] = ywvxzu, uvyzw = new uvyzw(), prqno) uvyzw[ywvxzu] = prqno[ywvxzu];return uvyzw;
}), exports['XMLReader'] = _d_0zx$y;