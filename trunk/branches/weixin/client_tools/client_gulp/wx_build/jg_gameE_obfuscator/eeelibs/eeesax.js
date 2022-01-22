var b = wx.$e;
function elyrt() {}function ef4v7a_(fva4, _7vaf4, fvy4_, _f4a, mpaco7) {
  function qj$3ni(gj3i$x) {
    if (gj3i$x > 0xffff) {
      gj3i$x -= 0x10000;var ghrlx = 0xd800 + (gj3i$x >> 0xa),
          pocm7 = 0xdc00 + (0x3ff & gj3i$x);return String['fromCharCode'](ghrlx, pocm7);
    }return String['fromCharCode'](gj3i$x);
  }function g$3j(yhzrfl) {
    var yzrf4 = yhzrfl['slice'](0x1, -0x1);return yzrf4 in fvy4_ ? fvy4_[yzrf4] : '#' === yzrf4['charAt'](0x0) ? qj$3ni(parseInt(yzrf4['substr'](0x1)['replace']('x', '0x'))) : (mpaco7['error']('entity not found:' + yhzrfl), yhzrfl);
  }function yfz4v(fv_a47) {
    if (fv_a47 > cepmao) {
      var iu3 = fva4['substring'](cepmao, fv_a47)['replace'](/&#?\w+;/g, g$3j);j$xt && zfyvr4(cepmao), _f4a['characters'](iu3, 0x0, fv_a47 - cepmao), cepmao = fv_a47;
    }
  }function zfyvr4(zgtrlh, sq39n) {
    for (; zgtrlh >= rhflz && (sq39n = uq3jsn['exec'](fva4));) am7co = sq39n['index'], rhflz = am7co + sq39n[0x0]['length'], j$xt['lineNumber']++;j$xt['columnNumber'] = zgtrlh - am7co + 0x1;
  }for (var am7co = 0x0, rhflz = 0x0, uq3jsn = /.*(?:\r\n?|\n)|.*$/g, j$xt = _f4a['locator'], bd90k6 = [{ 'currentNSMap': _7vaf4 }], ju3qi = {}, cepmao = 0x0;;) {
    try {
      var qi3$nj = fva4['indexOf']('<', cepmao);if (0x0 > qi3$nj) {
        if (!fva4['substr'](cepmao)['match'](/^\s*$/)) {
          var nj3ui = _f4a['doc'],
              yfzhvr = nj3ui['createTextNode'](fva4['substr'](cepmao));nj3ui['appendChild'](yfzhvr), _f4a['currentElement'] = yfzhvr;
        }return;
      }switch (qi3$nj > cepmao && yfz4v(qi3$nj), fva4['charAt'](qi3$nj + 0x1)) {case '/':
          var bk6u = fva4['indexOf']('>', qi3$nj + 0x3),
              $gxtlh = fva4['substring'](qi3$nj + 0x2, bk6u),
              qn9u = bd90k6['pop']();0x0 > bk6u ? ($gxtlh = fva4['substring'](qi3$nj + 0x2)['replace'](/[\s<].*/, ''), mpaco7['error']('end tag name: ' + $gxtlh + ' is not complete:' + qn9u['tagName']), bk6u = qi3$nj + 0x1 + $gxtlh['length']) : $gxtlh['match'](/\s</) && ($gxtlh = $gxtlh['replace'](/[\s<].*/, ''), mpaco7['error']('end tag name: ' + $gxtlh + ' maybe not complete'), bk6u = qi3$nj + 0x1 + $gxtlh['length']);var u9b = qn9u['localNSMap'],
              _74fyv = qn9u['tagName'] == $gxtlh,
              ujinq = _74fyv || qn9u['tagName'] && qn9u['tagName']['toLowerCase']() == $gxtlh['toLowerCase']();if (ujinq) {
            if (_f4a['endElement'](qn9u['uri'], qn9u['localName'], $gxtlh), u9b) {
              for (var rlhzg in u9b) _f4a['endPrefixMapping'](rlhzg);
            }_74fyv || mpaco7['fatalError']('end tag name: ' + $gxtlh + ' is not match the current start tagName:' + qn9u['tagName']);
          } else bd90k6['push'](qn9u);bk6u++;break;case '?':
          j$xt && zfyvr4(qi3$nj), bk6u = ew281(fva4, qi3$nj, _f4a);break;case '!':
          j$xt && zfyvr4(qi3$nj), bk6u = ehryzfl(fva4, qi3$nj, _f4a, mpaco7);break;default:
          j$xt && zfyvr4(qi3$nj);var squ9k = new eocmep(),
              _v47f = bd90k6[bd90k6['length'] - 0x1]['currentNSMap'],
              bk6u = esnujq3(fva4, qi3$nj, squ9k, _v47f, g$3j, mpaco7),
              $lgtix = squ9k['length'];if (!squ9k['closed'] && eacpoe(fva4, bk6u, squ9k['tagName'], ju3qi) && (squ9k['closed'] = !0x0, fvy4_['nbsp'] || mpaco7['warning']('unclosed xml attribute')), j$xt && $lgtix) {
            for (var snjq3 = e$xtji(j$xt, {}), d25w18 = 0x0; $lgtix > d25w18; d25w18++) {
              var xtl$i = squ9k[d25w18];zfyvr4(xtl$i['offset']), xtl$i['locator'] = e$xtji(j$xt, {});
            }_f4a['locator'] = snjq3, eompc(squ9k, _f4a, _v47f) && bd90k6['push'](squ9k), _f4a['locator'] = j$xt;
          } else eompc(squ9k, _f4a, _v47f) && bd90k6['push'](squ9k);'http://www.w3.org/1999/xhtml' !== squ9k['uri'] || squ9k['closed'] ? bk6u++ : bk6u = eyhlr(fva4, bk6u, squ9k['tagName'], g$3j, _f4a);}
    } catch (maope) {
      mpaco7['error']('element parse error: ' + maope), bk6u = -0x1;
    }bk6u > cepmao ? cepmao = bk6u : yfz4v(Math['max'](qi3$nj, cepmao) + 0x1);
  }
}function e$xtji(j$qni, igjx$3) {
  return igjx$3['lineNumber'] = j$qni['lineNumber'], igjx$3['columnNumber'] = j$qni['columnNumber'], igjx$3;
}function esnujq3(nj3qu, txl$gi, nijq, iqn3u, rhzfyl, b85w0d) {
  for (var ceomp, sn9quk, thrxgl = ++txl$gi, nk69u = ebw5d8;;) {
    var kbd6 = nj3qu['charAt'](thrxgl);switch (kbd6) {case '=':
        if (nk69u === ebd60k9) ceomp = nj3qu['slice'](txl$gi, thrxgl), nk69u = ex3jqi;else {
          if (nk69u !== elthg$x) throw new Error('attribute equal must after attrName');nk69u = ex3jqi;
        }break;case '\x27':case '\x22':
        if (nk69u === ex3jqi || nk69u === ebd60k9) {
          if (nk69u === ebd60k9 && (b85w0d['warning']('attribute value must after "="'), ceomp = nj3qu['slice'](txl$gi, thrxgl)), txl$gi = thrxgl + 0x1, thrxgl = nj3qu['indexOf'](kbd6, txl$gi), !(thrxgl > 0x0)) throw new Error('attribute value no end \'' + kbd6 + '\' match');sn9quk = nj3qu['slice'](txl$gi, thrxgl)['replace'](/&#?\w+;/g, rhzfyl), nijq['add'](ceomp, sn9quk, txl$gi - 0x1), nk69u = ec4a;
        } else {
          if (nk69u != eglhrt) throw new Error('attribute value must after "="');sn9quk = nj3qu['slice'](txl$gi, thrxgl)['replace'](/&#?\w+;/g, rhzfyl), nijq['add'](ceomp, sn9quk, txl$gi), b85w0d['warning']('attribute "' + ceomp + '" missed start quot(' + kbd6 + ')!!'), txl$gi = thrxgl + 0x1, nk69u = ec4a;
        }break;case '/':
        switch (nk69u) {case ebw5d8:
            nijq['setTagName'](nj3qu['slice'](txl$gi, thrxgl));case ec4a:case ew8d5:case ezfvyhr:
            nk69u = ezfvyhr, nijq['closed'] = !0x0;case eglhrt:case ebd60k9:case elthg$x:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return b85w0d['error']('unexpected end of input'), nk69u == ebw5d8 && nijq['setTagName'](nj3qu['slice'](txl$gi, thrxgl)), thrxgl;case '>':
        switch (nk69u) {case ebw5d8:
            nijq['setTagName'](nj3qu['slice'](txl$gi, thrxgl));case ec4a:case ew8d5:case ezfvyhr:
            break;case eglhrt:case ebd60k9:
            sn9quk = nj3qu['slice'](txl$gi, thrxgl), '/' === sn9quk['slice'](-0x1) && (nijq['closed'] = !0x0, sn9quk = sn9quk['slice'](0x0, -0x1));case elthg$x:
            nk69u === elthg$x && (sn9quk = ceomp), nk69u == eglhrt ? (b85w0d['warning']('attribute "' + sn9quk + '" missed quot(")!!'), nijq['add'](ceomp, sn9quk['replace'](/&#?\w+;/g, rhzfyl), txl$gi)) : ('http://www.w3.org/1999/xhtml' === iqn3u[''] && sn9quk['match'](/^(?:disabled|checked|selected)$/i) || b85w0d['warning']('attribute "' + sn9quk + '" missed value!! "' + sn9quk + '" instead!!'), nijq['add'](sn9quk, sn9quk, txl$gi));break;case ex3jqi:
            throw new Error('attribute value missed!!');}return thrxgl;case '\u0080':
        kbd6 = '\x20';default:
        if ('\x20' >= kbd6) switch (nk69u) {case ebw5d8:
            nijq['setTagName'](nj3qu['slice'](txl$gi, thrxgl)), nk69u = ew8d5;break;case ebd60k9:
            ceomp = nj3qu['slice'](txl$gi, thrxgl), nk69u = elthg$x;break;case eglhrt:
            var sn9quk = nj3qu['slice'](txl$gi, thrxgl)['replace'](/&#?\w+;/g, rhzfyl);b85w0d['warning']('attribute "' + sn9quk + '" missed quot(")!!'), nijq['add'](ceomp, sn9quk, txl$gi);case ec4a:
            nk69u = ew8d5;} else switch (nk69u) {case elthg$x:
            {
              nijq['tagName'];
            }'http://www.w3.org/1999/xhtml' === iqn3u[''] && ceomp['match'](/^(?:disabled|checked|selected)$/i) || b85w0d['warning']('attribute "' + ceomp + '" missed value!! "' + ceomp + '" instead2!!'), nijq['add'](ceomp, ceomp, txl$gi), txl$gi = thrxgl, nk69u = ebd60k9;break;case ec4a:
            b85w0d['warning']('attribute space is required"' + ceomp + '\x22!!');case ew8d5:
            nk69u = ebd60k9, txl$gi = thrxgl;break;case ex3jqi:
            nk69u = eglhrt, txl$gi = thrxgl;break;case ezfvyhr:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}thrxgl++;
  }
}function eompc(b5w80, bd605, pcoaem) {
  for (var ns6ku9 = b5w80['tagName'], $igxjt = null, zyhrfv = b5w80['length']; zyhrfv--;) {
    var ku9sb = b5w80[zyhrfv],
        d2w58 = ku9sb['qName'],
        wd8b0 = ku9sb['value'],
        $3qjni = d2w58['indexOf'](':');if ($3qjni > 0x0) var b69 = ku9sb['prefix'] = d2w58['slice'](0x0, $3qjni),
        _ma = d2w58['slice']($3qjni + 0x1),
        d650b = 'xmlns' === b69 && _ma;else _ma = d2w58, b69 = null, d650b = 'xmlns' === d2w58 && '';ku9sb['localName'] = _ma, d650b !== !0x1 && (null == $igxjt && ($igxjt = {}, ea47v_(pcoaem, pcoaem = {})), pcoaem[d650b] = $igxjt[d650b] = wd8b0, ku9sb['uri'] = 'http://www.w3.org/2000/xmlns/', bd605['startPrefixMapping'](d650b, wd8b0));
  }for (var zyhrfv = b5w80['length']; zyhrfv--;) {
    ku9sb = b5w80[zyhrfv];var b69 = ku9sb['prefix'];b69 && ('xml' === b69 && (ku9sb['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== b69 && (ku9sb['uri'] = pcoaem[b69 || '']));
  }var $3qjni = ns6ku9['indexOf'](':');$3qjni > 0x0 ? (b69 = b5w80['prefix'] = ns6ku9['slice'](0x0, $3qjni), _ma = b5w80['localName'] = ns6ku9['slice']($3qjni + 0x1)) : (b69 = null, _ma = b5w80['localName'] = ns6ku9);var ks096b = b5w80['uri'] = pcoaem[b69 || ''];if (bd605['startElement'](ks096b, _ma, ns6ku9, b5w80), !b5w80['closed']) return b5w80['currentNSMap'] = pcoaem, b5w80['localNSMap'] = $igxjt, !0x0;if (bd605['endElement'](ks096b, _ma, ns6ku9), $igxjt) {
    for (b69 in $igxjt) bd605['endPrefixMapping'](b69);
  }
}function eyhlr(h$gt, dk5b06, oam7cp, t$xj, xlh$gt) {
  if (/^(?:script|textarea)$/i['test'](oam7cp)) {
    var _74yf = h$gt['indexOf']('</' + oam7cp + '>', dk5b06),
        kb6us = h$gt['substring'](dk5b06 + 0x1, _74yf);if (/[&<]/['test'](kb6us)) return (/^script$/i['test'](oam7cp) ? (xlh$gt['characters'](kb6us, 0x0, kb6us['length']), _74yf) : (kb6us = kb6us['replace'](/&#?\w+;/g, t$xj), xlh$gt['characters'](kb6us, 0x0, kb6us['length']), _74yf)
    );
  }return dk5b06 + 0x1;
}function eacpoe(vzry4, g$3i, $jgxit, wd518) {
  var $txigj = wd518[$jgxit];return null == $txigj && ($txigj = vzry4['lastIndexOf']('</' + $jgxit + '>'), g$3i > $txigj && ($txigj = vzry4['lastIndexOf']('</' + $jgxit)), wd518[$jgxit] = $txigj), g$3i > $txigj;
}function ea47v_(x$tlig, htyz) {
  for (var _zyv in x$tlig) htyz[_zyv] = x$tlig[_zyv];
}function ehryzfl($i3nqj, yrthzl, qj3ui, yv_f4z) {
  var hgtrlx = $i3nqj['charAt'](yrthzl + 0x2);switch (hgtrlx) {case '-':
      if ('-' === $i3nqj['charAt'](yrthzl + 0x3)) {
        var yfvzr4 = $i3nqj['indexOf']('-->', yrthzl + 0x4);return yfvzr4 > yrthzl ? (qj3ui['comment']($i3nqj, yrthzl + 0x4, yfvzr4 - yrthzl - 0x4), yfvzr4 + 0x3) : (yv_f4z['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == $i3nqj['substr'](yrthzl + 0x3, 0x6)) {
        var yfvzr4 = $i3nqj['indexOf'](']]>', yrthzl + 0x9);return qj3ui['startCDATA'](), qj3ui['characters']($i3nqj, yrthzl + 0x9, yfvzr4 - yrthzl - 0x9), qj3ui['endCDATA'](), yfvzr4 + 0x3;
      }var htlxr = eni3juq($i3nqj, yrthzl),
          r4yfzv = htlxr['length'];if (r4yfzv > 0x1 && /!doctype/i['test'](htlxr[0x0][0x0])) {
        var htxrlg = htlxr[0x1][0x0],
            b508 = r4yfzv > 0x3 && /^public$/i['test'](htlxr[0x2][0x0]) && htlxr[0x3][0x0],
            amc47 = r4yfzv > 0x4 && htlxr[0x4][0x0],
            snukq9 = htlxr[r4yfzv - 0x1];return qj3ui['startDTD'](htxrlg, b508 && b508['replace'](/^(['"])(.*?)\1$/, '$2'), amc47 && amc47['replace'](/^(['"])(.*?)\1$/, '$2')), qj3ui['endDTD'](), snukq9['index'] + snukq9[0x0]['length'];
      }}return -0x1;
}function ew281(zhytr, bk96us, k506bd) {
  var aco7mp = zhytr['indexOf']('?>', bk96us);if (aco7mp) {
    var zltrg = zhytr['substring'](bk96us, aco7mp)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (zltrg) {
      {
        zltrg[0x0]['length'];
      }return k506bd['processingInstruction'](zltrg[0x1], zltrg[0x2]), aco7mp + 0x2;
    }return -0x1;
  }return -0x1;
}function eocmep() {}function exgl$(ryvz4f, u9kn) {
  return ryvz4f['__proto__'] = u9kn, ryvz4f;
}function eni3juq(grtlhz, $3qinj) {
  var l$it,
      ry4zfv = [],
      j$n3qi = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (j$n3qi['lastIndex'] = $3qinj, j$n3qi['exec'](grtlhz); l$it = j$n3qi['exec'](grtlhz);) if (ry4zfv['push'](l$it), l$it[0x1]) return ry4zfv;
}var eig3j$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ei$3nq = new RegExp('[\\-\\.0-9' + eig3j$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    eji3g$x = new RegExp('^' + eig3j$['source'] + ei$3nq['source'] + '*(?::' + eig3j$['source'] + ei$3nq['source'] + '*)?$'),
    ebw5d8 = 0x0,
    ebd60k9 = 0x1,
    elthg$x = 0x2,
    ex3jqi = 0x3,
    eglhrt = 0x4,
    ec4a = 0x5,
    ew8d5 = 0x6,
    ezfvyhr = 0x7;elyrt['prototype'] = { 'parse': function (u69bks, fylrz, am4v7) {
    var qnsku = this['domBuilder'];qnsku['startDocument'](), ea47v_(fylrz, fylrz = {}), ef4v7a_(u69bks, fylrz, am4v7, qnsku, this['errorHandler']), qnsku['endDocument']();
  } }, eocmep['prototype'] = { 'setTagName': function (maoc7) {
    if (!eji3g$x['test'](maoc7)) throw new Error('invalid tagName:' + maoc7);this['tagName'] = maoc7;
  }, 'add': function (nsquk, usb9k6, wb850d) {
    if (!eji3g$x['test'](nsquk)) throw new Error('invalid attribute:' + nsquk);this[this['length']++] = { 'qName': nsquk, 'value': usb9k6, 'offset': wb850d };
  }, 'length': 0x0, 'getLocalName': function (tgil) {
    return this[tgil]['localName'];
  }, 'getLocator': function (_7avf4) {
    return this[_7avf4]['locator'];
  }, 'getQName': function (jn3i) {
    return this[jn3i]['qName'];
  }, 'getURI': function (t$xl) {
    return this[t$xl]['uri'];
  }, 'getValue': function (hytrl) {
    return this[hytrl]['value'];
  } }, exgl$({}, exgl$['prototype']) instanceof exgl$ || (exgl$ = function (_mo7a, am7cp) {
  function xi$3jg() {}xi$3jg['prototype'] = am7cp, xi$3jg = new xi$3jg();for (am7cp in _mo7a) xi$3jg[am7cp] = _mo7a[am7cp];return xi$3jg;
}), exports['XMLReader'] = elyrt;