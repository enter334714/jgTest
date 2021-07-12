var _$ = wx.x$;
function __zxw$y() {}function __wzuvyx(efhgij, qprsut, $1yz2, jghief, acef) {
  function wturs(lnmqo) {
    var wrtusv = lnmqo['slice'](0x1, -0x1);return wrtusv in $1yz2 ? $1yz2[wrtusv] : '#' === wrtusv['charAt'](0x0) ? 0xffff < (wrtusv = parseInt(wrtusv['substr'](0x1)['replace']('x', '0x'))) ? (wrtusv -= 0x10000, String['fromCharCode'](0xd800 + (wrtusv >> 0xa), 0xdc00 + (0x3ff & wrtusv))) : String['fromCharCode'](wrtusv) : (acef['error']('entity not found:' + lnmqo), lnmqo);
  }function vrqut(baed) {
    var nloqp;gfhje < baed && (nloqp = efhgij['substring'](gfhje, baed)['replace'](/&#?\w+;/g, wturs), sqpn && idgf(gfhje), jghief['characters'](nloqp, 0x0, baed - gfhje), gfhje = baed);
  }function idgf(jiheg, monq) {
    for (; ehijg <= jiheg && (monq = ecabfd['exec'](efhgij));) ecfd = monq['index'], ehijg = ecfd + monq[0x0]['length'], sqpn['lineNumber']++;sqpn['columnNumber'] = jiheg - ecfd + 0x1;
  }for (var ecfd = 0x0, ehijg = 0x0, ecabfd = /.*(?:\r\n?|\n)|.*$/g, sqpn = jghief['locator'], vw$zxy = [{ 'currentNSMap': qprsut }], pusqt = {}, gfhje = 0x0;;) {
    try {
      var turp = efhgij['indexOf']('<', gfhje),
          mnjl,
          qpomrn;if (turp < 0x0) return void (efhgij['substr'](gfhje)['match'](/^\s*$/) || (qpomrn = (mnjl = jghief['doc'])['createTextNode'](efhgij['substr'](gfhje)), mnjl['appendChild'](qpomrn), jghief['currentElement'] = qpomrn));switch (gfhje < turp && vrqut(turp), efhgij['charAt'](turp + 0x1)) {case '/':
          var vrtuq = efhgij['indexOf']('>', turp + 0x3),
              oqrtsp = efhgij['substring'](turp + 0x2, vrtuq),
              nplomk = vw$zxy['pop']();vrtuq < 0x0 ? (oqrtsp = efhgij['substring'](turp + 0x2)['replace'](/[\s<].*/, ''), acef['error']('end tag name: ' + oqrtsp + ' is not complete:' + nplomk['tagName']), vrtuq = turp + 0x1 + oqrtsp['length']) : oqrtsp['match'](/\s</) && (oqrtsp = oqrtsp['replace'](/[\s<].*/, ''), acef['error']('end tag name: ' + oqrtsp + ' maybe not complete'), vrtuq = turp + 0x1 + oqrtsp['length']);var vtusqr = nplomk['localNSMap'],
              tuvrq = nplomk['tagName'] == oqrtsp;if (tuvrq || nplomk['tagName'] && nplomk['tagName']['toLowerCase']() == oqrtsp['toLowerCase']()) {
            if (jghief['endElement'](nplomk['uri'], nplomk['localName'], oqrtsp), vtusqr) {
              for (var inkjlm in vtusqr) jghief['endPrefixMapping'](inkjlm);
            }tuvrq || acef['fatalError']('end tag name: ' + oqrtsp + ' is not match the current start tagName:' + nplomk['tagName']);
          } else vw$zxy['push'](nplomk);vrtuq++;break;case '?':
          sqpn && idgf(turp), vrtuq = __z0xy1$(efhgij, turp, jghief);break;case '!':
          sqpn && idgf(turp), vrtuq = __jilmn(efhgij, turp, jghief, acef);break;default:
          sqpn && idgf(turp);var usvwt = new __nmjk(),
              tqvsr = vw$zxy[vw$zxy['length'] - 0x1]['currentNSMap'],
              vrtuq = __fecdbg(efhgij, turp, usvwt, tqvsr, wturs, acef),
              uqprs = usvwt['length'];if (!usvwt['closed'] && __$0312z(efhgij, vrtuq, usvwt['tagName'], pusqt) && (usvwt['closed'] = !0x0, $1yz2['nbsp'] || acef['warning']('unclosed xml attribute')), sqpn && uqprs) {
            for (var fbgd = __dbfeca(sqpn, {}), wvuxts = 0x0; wvuxts < uqprs; wvuxts++) {
              var qstv = usvwt[wvuxts];idgf(qstv['offset']), qstv['locator'] = __dbfeca(sqpn, {});
            }jghief['locator'] = fbgd, __srtpuq(usvwt, jghief, tqvsr) && vw$zxy['push'](usvwt), jghief['locator'] = sqpn;
          } else __srtpuq(usvwt, jghief, tqvsr) && vw$zxy['push'](usvwt);'http://www.w3.org/1999/xhtml' !== usvwt['uri'] || usvwt['closed'] ? vrtuq++ : vrtuq = __cbdef(efhgij, vrtuq, usvwt['tagName'], wturs, jghief);}
    } catch (fejgi) {
      acef['error']('element parse error: ' + fejgi), vrtuq = -0x1;
    }gfhje < vrtuq ? gfhje = vrtuq : vrqut(Math['max'](turp, gfhje) + 0x1);
  }
}function __dbfeca(kjnilm, bfgce) {
  return bfgce['lineNumber'] = kjnilm['lineNumber'], bfgce['columnNumber'] = kjnilm['columnNumber'], bfgce;
}function __fecdbg(lghj, knpm, ropqn, pnro, squtrv, surtqp) {
  for (var cdfhg, lkjhgi = ++knpm, ojml = __efghj;;) {
    var lqponm = lghj['charAt'](lkjhgi);switch (lqponm) {case '=':
        if (ojml === __dcgefb) cdfhg = lghj['slice'](knpm, lkjhgi), ojml = __ytwvxu;else {
          if (ojml !== __jglhk) throw new Error('attribute equal must after attrName');ojml = __ytwvxu;
        }break;case '\x27':case '\x22':
        if (ojml === __ytwvxu || ojml === __dcgefb) {
          if (ojml === __dcgefb && (surtqp['warning']('attribute value must after "="'), cdfhg = lghj['slice'](knpm, lkjhgi)), !(0x0 < (lkjhgi = lghj['indexOf'](lqponm, knpm = lkjhgi + 0x1)))) throw new Error('attribute value no end \'' + lqponm + '\' match');lpmnq = lghj['slice'](knpm, lkjhgi)['replace'](/&#?\w+;/g, squtrv), ropqn['add'](cdfhg, lpmnq, knpm - 0x1), ojml = __vsrqut;
        } else {
          if (ojml != __klmnjo) throw new Error('attribute value must after "="');lpmnq = lghj['slice'](knpm, lkjhgi)['replace'](/&#?\w+;/g, squtrv), ropqn['add'](cdfhg, lpmnq, knpm), surtqp['warning']('attribute "' + cdfhg + '" missed start quot(' + lqponm + ')!!'), knpm = lkjhgi + 0x1, ojml = __vsrqut;
        }break;case '/':
        switch (ojml) {case __efghj:
            ropqn['setTagName'](lghj['slice'](knpm, lkjhgi));case __vsrqut:case __pqlnm:case __ehfgd:
            ojml = __ehfgd, ropqn['closed'] = !0x0;case __klmnjo:case __dcgefb:case __jglhk:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return surtqp['error']('unexpected end of input'), ojml == __efghj && ropqn['setTagName'](lghj['slice'](knpm, lkjhgi)), lkjhgi;case '>':
        switch (ojml) {case __efghj:
            ropqn['setTagName'](lghj['slice'](knpm, lkjhgi));case __vsrqut:case __pqlnm:case __ehfgd:
            break;case __klmnjo:case __dcgefb:
            '/' === (lpmnq = lghj['slice'](knpm, lkjhgi))['slice'](-0x1) && (ropqn['closed'] = !0x0, lpmnq = lpmnq['slice'](0x0, -0x1));case __jglhk:
            ojml === __jglhk && (lpmnq = cdfhg), ojml == __klmnjo ? (surtqp['warning']('attribute "' + lpmnq + '" missed quot(")!!'), ropqn['add'](cdfhg, lpmnq['replace'](/&#?\w+;/g, squtrv), knpm)) : ('http://www.w3.org/1999/xhtml' === pnro[''] && lpmnq['match'](/^(?:disabled|checked|selected)$/i) || surtqp['warning']('attribute "' + lpmnq + '" missed value!! "' + lpmnq + '" instead!!'), ropqn['add'](lpmnq, lpmnq, knpm));break;case __ytwvxu:
            throw new Error('attribute value missed!!');}return lkjhgi;case '\u0080':
        lqponm = '\x20';default:
        if (lqponm <= '\x20') switch (ojml) {case __efghj:
            ropqn['setTagName'](lghj['slice'](knpm, lkjhgi)), ojml = __pqlnm;break;case __dcgefb:
            cdfhg = lghj['slice'](knpm, lkjhgi), ojml = __jglhk;break;case __klmnjo:
            var lpmnq = lghj['slice'](knpm, lkjhgi)['replace'](/&#?\w+;/g, squtrv);surtqp['warning']('attribute "' + lpmnq + '" missed quot(")!!'), ropqn['add'](cdfhg, lpmnq, knpm);case __vsrqut:
            ojml = __pqlnm;} else switch (ojml) {case __jglhk:
            ropqn['tagName'], 'http://www.w3.org/1999/xhtml' === pnro[''] && cdfhg['match'](/^(?:disabled|checked|selected)$/i) || surtqp['warning']('attribute "' + cdfhg + '" missed value!! "' + cdfhg + '" instead2!!'), ropqn['add'](cdfhg, cdfhg, knpm), knpm = lkjhgi, ojml = __dcgefb;break;case __vsrqut:
            surtqp['warning']('attribute space is required"' + cdfhg + '\x22!!');case __pqlnm:
            ojml = __dcgefb, knpm = lkjhgi;break;case __ytwvxu:
            ojml = __klmnjo, knpm = lkjhgi;break;case __ehfgd:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}lkjhgi++;
  }
}function __srtpuq(txuvsw, wutr, gjfik) {
  for (var $20z = txuvsw['tagName'], bacd = null, uwvyxt = txuvsw['length']; uwvyxt--;) {
    var kl = txuvsw[uwvyxt],
        ijkglh = kl['qName'],
        oqlpm = kl['value'],
        uyvw;ijkglh = 0x0 < (fkihjg = ijkglh['indexOf'](':')) ? (lgkjih = kl['prefix'] = ijkglh['slice'](0x0, fkihjg), uyvw = ijkglh['slice'](fkihjg + 0x1), 'xmlns' === lgkjih && uyvw) : (lgkjih = null, 'xmlns' === (uyvw = ijkglh) && ''), kl['localName'] = uyvw, !0x1 !== ijkglh && (null == bacd && (bacd = {}, __nosp(gjfik, gjfik = {})), gjfik[ijkglh] = bacd[ijkglh] = oqlpm, kl['uri'] = 'http://www.w3.org/2000/xmlns/', wutr['startPrefixMapping'](ijkglh, oqlpm));
  }for (uwvyxt = txuvsw['length']; uwvyxt--;) (lgkjih = (kl = txuvsw[uwvyxt])['prefix']) && ('xml' === lgkjih && (kl['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== lgkjih && (kl['uri'] = gjfik[lgkjih || '']));var fkihjg;uyvw = 0x0 < (fkihjg = $20z['indexOf'](':')) ? (lgkjih = txuvsw['prefix'] = $20z['slice'](0x0, fkihjg), txuvsw['localName'] = $20z['slice'](fkihjg + 0x1)) : (lgkjih = null, txuvsw['localName'] = $20z);var snpqor = txuvsw['uri'] = gjfik[lgkjih || ''];if (wutr['startElement'](snpqor, uyvw, $20z, txuvsw), !txuvsw['closed']) return txuvsw['currentNSMap'] = gjfik, txuvsw['localNSMap'] = bacd, !0x0;if (wutr['endElement'](snpqor, uyvw, $20z), bacd) {
    for (var lgkjih in bacd) wutr['endPrefixMapping'](lgkjih);
  }
}function __cbdef(klmhi, lnji, tvwyxu, jil, moknlp) {
  if (/^(?:script|textarea)$/i['test'](tvwyxu)) {
    var $x01zy = klmhi['indexOf']('</' + tvwyxu + '>', lnji),
        klmhi = klmhi['substring'](lnji + 0x1, $x01zy);if (/[&<]/['test'](klmhi)) return (/^script$/i['test'](tvwyxu) || (klmhi = klmhi['replace'](/&#?\w+;/g, jil)), moknlp['characters'](klmhi, 0x0, klmhi['length']), $x01zy
    );
  }return lnji + 0x1;
}function __$0312z(psrno, x1$y0, svtuxw, mlpnqo) {
  var wzxvyu = mlpnqo[svtuxw];return null == wzxvyu && ((wzxvyu = psrno['lastIndexOf']('</' + svtuxw + '>')) < x1$y0 && (wzxvyu = psrno['lastIndexOf']('</' + svtuxw)), mlpnqo[svtuxw] = wzxvyu), wzxvyu < x1$y0;
}function __nosp(jnmkil, vzxyu) {
  for (var qprsu in jnmkil) vzxyu[qprsu] = jnmkil[qprsu];
}function __jilmn(fdhe, stoqr, opsnr, jmnil) {
  var liknmj = fdhe['charAt'](stoqr + 0x2);if ('-' === liknmj) return '-' !== fdhe['charAt'](stoqr + 0x3) ? -0x1 : stoqr < (wusrtv = fdhe['indexOf']('-->', stoqr + 0x4)) ? (opsnr['comment'](fdhe, stoqr + 0x4, wusrtv - stoqr - 0x4), wusrtv + 0x3) : (jmnil['error']('Unclosed comment'), -0x1);if ('CDATA[' == fdhe['substr'](stoqr + 0x3, 0x6)) {
    var wusrtv = fdhe['indexOf'](']]>', stoqr + 0x9);return opsnr['startCDATA'](), opsnr['characters'](fdhe, stoqr + 0x9, wusrtv - stoqr - 0x9), opsnr['endCDATA'](), wusrtv + 0x3;
  }liknmj = __xzv$w(fdhe, stoqr), jmnil = liknmj['length'];if (0x1 < jmnil && /!doctype/i['test'](liknmj[0x0][0x0])) return wusrtv = liknmj[0x1][0x0], fdhe = 0x3 < jmnil && /^public$/i['test'](liknmj[0x2][0x0]) && liknmj[0x3][0x0], stoqr = 0x4 < jmnil && liknmj[0x4][0x0], jmnil = liknmj[jmnil - 0x1], (opsnr['startDTD'](wusrtv, fdhe && fdhe['replace'](/^(['"])(.*?)\1$/, '$2'), stoqr && stoqr['replace'](/^(['"])(.*?)\1$/, '$2')), opsnr['endDTD'](), jmnil['index'] + jmnil[0x0]['length']);return -0x1;
}function __z0xy1$(idgfhe, hjefg, z0yx$1) {
  var xuywt = idgfhe['indexOf']('?>', hjefg);if (xuywt) return hjefg = idgfhe['substring'](hjefg, xuywt)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), hjefg ? (hjefg[0x0]['length'], z0yx$1['processingInstruction'](hjefg[0x1], hjefg[0x2]), xuywt + 0x2) : -0x1;return -0x1;
}function __nmjk() {}function __rpqt(nrpso, nkpmol) {
  return nrpso['__proto__'] = nkpmol, nrpso;
}function __xzv$w(ehdc, mknil) {
  var xw0$yz,
      $zwyx0 = [],
      x1$zy = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (x1$zy['lastIndex'] = mknil, x1$zy['exec'](ehdc); xw0$yz = x1$zy['exec'](ehdc);) if ($zwyx0['push'](xw0$yz), xw0$yz[0x1]) return $zwyx0;
}var __oqrp = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    __zx01 = new RegExp('[\\-\\.0-9' + __oqrp['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    __igkhjl = new RegExp('^' + __oqrp['source'] + __zx01['source'] + '*(?::' + __oqrp['source'] + __zx01['source'] + '*)?$'),
    __efghj = 0x0,
    __dcgefb = 0x1,
    __jglhk = 0x2,
    __ytwvxu = 0x3,
    __klmnjo = 0x4,
    __vsrqut = 0x5,
    __pqlnm = 0x6,
    __ehfgd = 0x7;__zxw$y['prototype'] = { 'parse': function (kligjh, efbacd, zywu) {
    var fghji = this['domBuilder'];fghji['startDocument'](), __nosp(efbacd, efbacd = {}), __wzuvyx(kligjh, efbacd, zywu, fghji, this['errorHandler']), fghji['endDocument']();
  } }, __nmjk['prototype'] = { 'setTagName': function (yvtwux) {
    if (!__igkhjl['test'](yvtwux)) throw new Error('invalid tagName:' + yvtwux);this['tagName'] = yvtwux;
  }, 'add': function (yuxwvt, qrs, adfce) {
    if (!__igkhjl['test'](yuxwvt)) throw new Error('invalid attribute:' + yuxwvt);this[this['length']++] = { 'qName': yuxwvt, 'value': qrs, 'offset': adfce };
  }, 'length': 0x0, 'getLocalName': function (jhkilm) {
    return this[jhkilm]['localName'];
  }, 'getLocator': function (mhkij) {
    return this[mhkij]['locator'];
  }, 'getQName': function (kilhjg) {
    return this[kilhjg]['qName'];
  }, 'getURI': function (oqr) {
    return this[oqr]['uri'];
  }, 'getValue': function (sqput) {
    return this[sqput]['value'];
  } }, __rpqt({}, __rpqt['prototype']) instanceof __rpqt || (__rpqt = function (wtuxv, minjk) {
  function lmokjn() {}for (minjk in lmokjn['prototype'] = minjk, lmokjn = new lmokjn(), wtuxv) lmokjn[minjk] = wtuxv[minjk];return lmokjn;
}), exports['XMLReader'] = __zxw$y;