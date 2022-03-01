var k = wx.$f;
function f_56k24() {}function ftk0qh(mfith, dxswn, s6jdco, _k2465, wjndc) {
  function jswdn(umv1i) {
    if (umv1i > 0xffff) {
      umv1i -= 0x10000;var ufvmi = 0xd800 + (umv1i >> 0xa),
          ra37 = 0xdc00 + (0x3ff & umv1i);return String['fromCharCode'](ufvmi, ra37);
    }return String['fromCharCode'](umv1i);
  }function tfh5q0(vfmiub) {
    var bvimt = vfmiub['slice'](0x1, -0x1);return bvimt in s6jdco ? s6jdco[bvimt] : '#' === bvimt['charAt'](0x0) ? jswdn(parseInt(bvimt['substr'](0x1)['replace']('x', '0x'))) : (wjndc['error']('entity not found:' + vfmiub), vfmiub);
  }function q50h_k(ithf0) {
    if (ithf0 > cndsj) {
      var dcoswj = mfith['substring'](cndsj, ithf0)['replace'](/&#?\w+;/g, tfh5q0);mbiuv1 && bmuv1i(cndsj), _k2465['characters'](dcoswj, 0x0, ithf0 - cndsj), cndsj = ithf0;
    }
  }function bmuv1i(u1ib9, b9vg1) {
    for (; u1ib9 >= cswdo && (b9vg1 = a73$y['exec'](mfith));) joc62 = b9vg1['index'], cswdo = joc62 + b9vg1[0x0]['length'], mbiuv1['lineNumber']++;mbiuv1['columnNumber'] = u1ib9 - joc62 + 0x1;
  }for (var joc62 = 0x0, cswdo = 0x0, a73$y = /.*(?:\r\n?|\n)|.*$/g, mbiuv1 = _k2465['locator'], j2cd6 = [{ 'currentNSMap': dxswn }], t0mifh = {}, cndsj = 0x0;;) {
    try {
      var y7$r3a = mfith['indexOf']('<', cndsj);if (0x0 > y7$r3a) {
        if (!mfith['substr'](cndsj)['match'](/^\s*$/)) {
          var mu1i = _k2465['doc'],
              _q0h5k = mu1i['createTextNode'](mfith['substr'](cndsj));mu1i['appendChild'](_q0h5k), _k2465['currentElement'] = _q0h5k;
        }return;
      }switch (y7$r3a > cndsj && q50h_k(y7$r3a), mfith['charAt'](y7$r3a + 0x1)) {case '/':
          var xdnew = mfith['indexOf']('>', y7$r3a + 0x3),
              djo6 = mfith['substring'](y7$r3a + 0x2, xdnew),
              fqmh = j2cd6['pop']();0x0 > xdnew ? (djo6 = mfith['substring'](y7$r3a + 0x2)['replace'](/[\s<].*/, ''), wjndc['error']('end tag name: ' + djo6 + ' is not complete:' + fqmh['tagName']), xdnew = y7$r3a + 0x1 + djo6['length']) : djo6['match'](/\s</) && (djo6 = djo6['replace'](/[\s<].*/, ''), wjndc['error']('end tag name: ' + djo6 + ' maybe not complete'), xdnew = y7$r3a + 0x1 + djo6['length']);var qthfm = fqmh['localNSMap'],
              nez8w = fqmh['tagName'] == djo6,
              _5k624 = nez8w || fqmh['tagName'] && fqmh['tagName']['toLowerCase']() == djo6['toLowerCase']();if (_5k624) {
            if (_k2465['endElement'](fqmh['uri'], fqmh['localName'], djo6), qthfm) {
              for (var k56_42 in qthfm) _k2465['endPrefixMapping'](k56_42);
            }nez8w || wjndc['fatalError']('end tag name: ' + djo6 + ' is not match the current start tagName:' + fqmh['tagName']);
          } else j2cd6['push'](fqmh);xdnew++;break;case '?':
          mbiuv1 && bmuv1i(y7$r3a), xdnew = fznexs(mfith, y7$r3a, _k2465);break;case '!':
          mbiuv1 && bmuv1i(y7$r3a), xdnew = fbvu91i(mfith, y7$r3a, _k2465, wjndc);break;default:
          mbiuv1 && bmuv1i(y7$r3a);var o_c642 = new fft50hq(),
              wjsnd = j2cd6[j2cd6['length'] - 0x1]['currentNSMap'],
              xdnew = fnxsdew(mfith, y7$r3a, o_c642, wjsnd, tfh5q0, wjndc),
              $3y7r8 = o_c642['length'];if (!o_c642['closed'] && fqthf5(mfith, xdnew, o_c642['tagName'], t0mifh) && (o_c642['closed'] = !0x0, s6jdco['nbsp'] || wjndc['warning']('unclosed xml attribute')), mbiuv1 && $3y7r8) {
            for (var vbfmui = fm0hi(mbiuv1, {}), _k542 = 0x0; $3y7r8 > _k542; _k542++) {
              var _42ko = o_c642[_k542];bmuv1i(_42ko['offset']), _42ko['locator'] = fm0hi(mbiuv1, {});
            }_k2465['locator'] = vbfmui, fo4c2j6(o_c642, _k2465, wjsnd) && j2cd6['push'](o_c642), _k2465['locator'] = mbiuv1;
          } else fo4c2j6(o_c642, _k2465, wjsnd) && j2cd6['push'](o_c642);'http://www.w3.org/1999/xhtml' !== o_c642['uri'] || o_c642['closed'] ? xdnew++ : xdnew = fm1bvu(mfith, xdnew, o_c642['tagName'], tfh5q0, _k2465);}
    } catch (sdwjoc) {
      wjndc['error']('element parse error: ' + sdwjoc), xdnew = -0x1;
    }xdnew > cndsj ? cndsj = xdnew : q50h_k(Math['max'](y7$r3a, cndsj) + 0x1);
  }
}function fm0hi(ra$37y, swdcoj) {
  return swdcoj['lineNumber'] = ra$37y['lineNumber'], swdcoj['columnNumber'] = ra$37y['columnNumber'], swdcoj;
}function fnxsdew(z8wen, ez7x, th5q0, k5qh0_, p73a, _4k26o) {
  for (var oc4_26, snwzx, nxeszw = ++ez7x, hit0mf = fdcn;;) {
    var swenxd = z8wen['charAt'](nxeszw);switch (swenxd) {case '=':
        if (hit0mf === fcd6jso) oc4_26 = z8wen['slice'](ez7x, nxeszw), hit0mf = fmuivb1;else {
          if (hit0mf !== fvumi1b) throw new Error('attribute equal must after attrName');hit0mf = fmuivb1;
        }break;case '\x27':case '\x22':
        if (hit0mf === fmuivb1 || hit0mf === fcd6jso) {
          if (hit0mf === fcd6jso && (_4k26o['warning']('attribute value must after "="'), oc4_26 = z8wen['slice'](ez7x, nxeszw)), ez7x = nxeszw + 0x1, nxeszw = z8wen['indexOf'](swenxd, ez7x), !(nxeszw > 0x0)) throw new Error('attribute value no end \'' + swenxd + '\' match');snwzx = z8wen['slice'](ez7x, nxeszw)['replace'](/&#?\w+;/g, p73a), th5q0['add'](oc4_26, snwzx, ez7x - 0x1), hit0mf = fh0fitm;
        } else {
          if (hit0mf != fq2k4) throw new Error('attribute value must after "="');snwzx = z8wen['slice'](ez7x, nxeszw)['replace'](/&#?\w+;/g, p73a), th5q0['add'](oc4_26, snwzx, ez7x), _4k26o['warning']('attribute "' + oc4_26 + '" missed start quot(' + swenxd + ')!!'), ez7x = nxeszw + 0x1, hit0mf = fh0fitm;
        }break;case '/':
        switch (hit0mf) {case fdcn:
            th5q0['setTagName'](z8wen['slice'](ez7x, nxeszw));case fh0fitm:case fjxdwns:case fq0hm:
            hit0mf = fq0hm, th5q0['closed'] = !0x0;case fq2k4:case fcd6jso:case fvumi1b:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _4k26o['error']('unexpected end of input'), hit0mf == fdcn && th5q0['setTagName'](z8wen['slice'](ez7x, nxeszw)), nxeszw;case '>':
        switch (hit0mf) {case fdcn:
            th5q0['setTagName'](z8wen['slice'](ez7x, nxeszw));case fh0fitm:case fjxdwns:case fq0hm:
            break;case fq2k4:case fcd6jso:
            snwzx = z8wen['slice'](ez7x, nxeszw), '/' === snwzx['slice'](-0x1) && (th5q0['closed'] = !0x0, snwzx = snwzx['slice'](0x0, -0x1));case fvumi1b:
            hit0mf === fvumi1b && (snwzx = oc4_26), hit0mf == fq2k4 ? (_4k26o['warning']('attribute "' + snwzx + '" missed quot(")!!'), th5q0['add'](oc4_26, snwzx['replace'](/&#?\w+;/g, p73a), ez7x)) : ('http://www.w3.org/1999/xhtml' === k5qh0_[''] && snwzx['match'](/^(?:disabled|checked|selected)$/i) || _4k26o['warning']('attribute "' + snwzx + '" missed value!! "' + snwzx + '" instead!!'), th5q0['add'](snwzx, snwzx, ez7x));break;case fmuivb1:
            throw new Error('attribute value missed!!');}return nxeszw;case '\u0080':
        swenxd = '\x20';default:
        if ('\x20' >= swenxd) switch (hit0mf) {case fdcn:
            th5q0['setTagName'](z8wen['slice'](ez7x, nxeszw)), hit0mf = fjxdwns;break;case fcd6jso:
            oc4_26 = z8wen['slice'](ez7x, nxeszw), hit0mf = fvumi1b;break;case fq2k4:
            var snwzx = z8wen['slice'](ez7x, nxeszw)['replace'](/&#?\w+;/g, p73a);_4k26o['warning']('attribute "' + snwzx + '" missed quot(")!!'), th5q0['add'](oc4_26, snwzx, ez7x);case fh0fitm:
            hit0mf = fjxdwns;} else switch (hit0mf) {case fvumi1b:
            {
              th5q0['tagName'];
            }'http://www.w3.org/1999/xhtml' === k5qh0_[''] && oc4_26['match'](/^(?:disabled|checked|selected)$/i) || _4k26o['warning']('attribute "' + oc4_26 + '" missed value!! "' + oc4_26 + '" instead2!!'), th5q0['add'](oc4_26, oc4_26, ez7x), ez7x = nxeszw, hit0mf = fcd6jso;break;case fh0fitm:
            _4k26o['warning']('attribute space is required"' + oc4_26 + '\x22!!');case fjxdwns:
            hit0mf = fcd6jso, ez7x = nxeszw;break;case fmuivb1:
            hit0mf = fq2k4, ez7x = nxeszw;break;case fq0hm:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}nxeszw++;
  }
}function fo4c2j6(d6o2, er7, q5_40) {
  for (var ayp73 = d6o2['tagName'], szxwe = null, ze8x7 = d6o2['length']; ze8x7--;) {
    var qk0ht5 = d6o2[ze8x7],
        $re87z = qk0ht5['qName'],
        bv91ui = qk0ht5['value'],
        q450k_ = $re87z['indexOf'](':');if (q450k_ > 0x0) var _h05q = qk0ht5['prefix'] = $re87z['slice'](0x0, q450k_),
        fimth0 = $re87z['slice'](q450k_ + 0x1),
        oc26j4 = 'xmlns' === _h05q && fimth0;else fimth0 = $re87z, _h05q = null, oc26j4 = 'xmlns' === $re87z && '';qk0ht5['localName'] = fimth0, oc26j4 !== !0x1 && (null == szxwe && (szxwe = {}, fz78e$r(q5_40, q5_40 = {})), q5_40[oc26j4] = szxwe[oc26j4] = bv91ui, qk0ht5['uri'] = 'http://www.w3.org/2000/xmlns/', er7['startPrefixMapping'](oc26j4, bv91ui));
  }for (var ze8x7 = d6o2['length']; ze8x7--;) {
    qk0ht5 = d6o2[ze8x7];var _h05q = qk0ht5['prefix'];_h05q && ('xml' === _h05q && (qk0ht5['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _h05q && (qk0ht5['uri'] = q5_40[_h05q || '']));
  }var q450k_ = ayp73['indexOf'](':');q450k_ > 0x0 ? (_h05q = d6o2['prefix'] = ayp73['slice'](0x0, q450k_), fimth0 = d6o2['localName'] = ayp73['slice'](q450k_ + 0x1)) : (_h05q = null, fimth0 = d6o2['localName'] = ayp73);var mt0hfq = d6o2['uri'] = q5_40[_h05q || ''];if (er7['startElement'](mt0hfq, fimth0, ayp73, d6o2), !d6o2['closed']) return d6o2['currentNSMap'] = q5_40, d6o2['localNSMap'] = szxwe, !0x0;if (er7['endElement'](mt0hfq, fimth0, ayp73), szxwe) {
    for (_h05q in szxwe) er7['endPrefixMapping'](_h05q);
  }
}function fm1bvu(hq_05k, jc6so, fibmt, xsnj, vbgu9) {
  if (/^(?:script|textarea)$/i['test'](fibmt)) {
    var kq524_ = hq_05k['indexOf']('</' + fibmt + '>', jc6so),
        iu9bv = hq_05k['substring'](jc6so + 0x1, kq524_);if (/[&<]/['test'](iu9bv)) return (/^script$/i['test'](fibmt) ? (vbgu9['characters'](iu9bv, 0x0, iu9bv['length']), kq524_) : (iu9bv = iu9bv['replace'](/&#?\w+;/g, xsnj), vbgu9['characters'](iu9bv, 0x0, iu9bv['length']), kq524_)
    );
  }return jc6so + 0x1;
}function fqthf5(z738, qk04_, _h5q0k, $7zr38) {
  var jco42 = $7zr38[_h5q0k];return null == jco42 && (jco42 = z738['lastIndexOf']('</' + _h5q0k + '>'), qk04_ > jco42 && (jco42 = z738['lastIndexOf']('</' + _h5q0k)), $7zr38[_h5q0k] = jco42), qk04_ > jco42;
}function fz78e$r(ibfumv, yr3$a7) {
  for (var k2o6_ in ibfumv) yr3$a7[k2o6_] = ibfumv[k2o6_];
}function fbvu91i(k_426, ihbtfm, odsjwc, z8x7re) {
  var od26c = k_426['charAt'](ihbtfm + 0x2);switch (od26c) {case '-':
      if ('-' === k_426['charAt'](ihbtfm + 0x3)) {
        var imvtb = k_426['indexOf']('-->', ihbtfm + 0x4);return imvtb > ihbtfm ? (odsjwc['comment'](k_426, ihbtfm + 0x4, imvtb - ihbtfm - 0x4), imvtb + 0x3) : (z8x7re['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == k_426['substr'](ihbtfm + 0x3, 0x6)) {
        var imvtb = k_426['indexOf'](']]>', ihbtfm + 0x9);return odsjwc['startCDATA'](), odsjwc['characters'](k_426, ihbtfm + 0x9, imvtb - ihbtfm - 0x9), odsjwc['endCDATA'](), imvtb + 0x3;
      }var zwenx8 = fxeswd(k_426, ihbtfm),
          jdso6c = zwenx8['length'];if (jdso6c > 0x1 && /!doctype/i['test'](zwenx8[0x0][0x0])) {
        var k426_o = zwenx8[0x1][0x0],
            tmh0fq = jdso6c > 0x3 && /^public$/i['test'](zwenx8[0x2][0x0]) && zwenx8[0x3][0x0],
            r$3y7a = jdso6c > 0x4 && zwenx8[0x4][0x0],
            t0fmhi = zwenx8[jdso6c - 0x1];return odsjwc['startDTD'](k426_o, tmh0fq && tmh0fq['replace'](/^(['"])(.*?)\1$/, '$2'), r$3y7a && r$3y7a['replace'](/^(['"])(.*?)\1$/, '$2')), odsjwc['endDTD'](), t0fmhi['index'] + t0fmhi[0x0]['length'];
      }}return -0x1;
}function fznexs(pya73$, jcod62, q5_k0h) {
  var er78z = pya73$['indexOf']('?>', jcod62);if (er78z) {
    var oc6_ = pya73$['substring'](jcod62, er78z)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (oc6_) {
      {
        oc6_[0x0]['length'];
      }return q5_k0h['processingInstruction'](oc6_[0x1], oc6_[0x2]), er78z + 0x2;
    }return -0x1;
  }return -0x1;
}function fft50hq() {}function fze$8r(ojs6d, k_45) {
  return ojs6d['__proto__'] = k_45, ojs6d;
}function fxeswd(wjx, imufvb) {
  var $zer87,
      yp$a73 = [],
      nwsc = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (nwsc['lastIndex'] = imufvb, nwsc['exec'](wjx); $zer87 = nwsc['exec'](wjx);) if (yp$a73['push']($zer87), $zer87[0x1]) return yp$a73;
}var fdcj6o2 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ftm0qhf = new RegExp('[\\-\\.0-9' + fdcj6o2['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fh50tq = new RegExp('^' + fdcj6o2['source'] + ftm0qhf['source'] + '*(?::' + fdcj6o2['source'] + ftm0qhf['source'] + '*)?$'),
    fdcn = 0x0,
    fcd6jso = 0x1,
    fvumi1b = 0x2,
    fmuivb1 = 0x3,
    fq2k4 = 0x4,
    fh0fitm = 0x5,
    fjxdwns = 0x6,
    fq0hm = 0x7;f_56k24['prototype'] = { 'parse': function (_6c2, mih0t, wned) {
    var mfbvi = this['domBuilder'];mfbvi['startDocument'](), fz78e$r(mih0t, mih0t = {}), ftk0qh(_6c2, mih0t, wned, mfbvi, this['errorHandler']), mfbvi['endDocument']();
  } }, fft50hq['prototype'] = { 'setTagName': function (bhmt) {
    if (!fh50tq['test'](bhmt)) throw new Error('invalid tagName:' + bhmt);this['tagName'] = bhmt;
  }, 'add': function (_45, qfht5, tfvmb) {
    if (!fh50tq['test'](_45)) throw new Error('invalid attribute:' + _45);this[this['length']++] = { 'qName': _45, 'value': qfht5, 'offset': tfvmb };
  }, 'length': 0x0, 'getLocalName': function (gvbu19) {
    return this[gvbu19]['localName'];
  }, 'getLocator': function (hkq05) {
    return this[hkq05]['locator'];
  }, 'getQName': function (vbimu) {
    return this[vbimu]['qName'];
  }, 'getURI': function (xnwze) {
    return this[xnwze]['uri'];
  }, 'getValue': function (tq0f5h) {
    return this[tq0f5h]['value'];
  } }, fze$8r({}, fze$8r['prototype']) instanceof fze$8r || (fze$8r = function (h5tfq0, zenw8) {
  function r7z8$() {}r7z8$['prototype'] = zenw8, r7z8$ = new r7z8$();for (zenw8 in h5tfq0) r7z8$[zenw8] = h5tfq0[zenw8];return r7z8$;
}), exports['XMLReader'] = f_56k24;