var k = wx.$f;
function fxne8() {}function f$7ra(enrz8x, zx8er, o6cdjs, k642_5, k_6o) {
  function o4c6j(oc624j) {
    if (oc624j > 0xffff) {
      oc624j -= 0x10000;var thk05 = 0xd800 + (oc624j >> 0xa),
          iv19ub = 0xdc00 + (0x3ff & oc624j);return String['fromCharCode'](thk05, iv19ub);
    }return String['fromCharCode'](oc624j);
  }function b1v9i(ifm0th) {
    var ay$p = ifm0th['slice'](0x1, -0x1);return ay$p in o6cdjs ? o6cdjs[ay$p] : '#' === ay$p['charAt'](0x0) ? o4c6j(parseInt(ay$p['substr'](0x1)['replace']('x', '0x'))) : (k_6o['error']('entity not found:' + ifm0th), ifm0th);
  }function q0tf5(_h5q0) {
    if (_h5q0 > ftbm) {
      var ez7x8 = enrz8x['substring'](ftbm, _h5q0)['replace'](/&#?\w+;/g, b1v9i);bmitf && exwzn(ftbm), k642_5['characters'](ez7x8, 0x0, _h5q0 - ftbm), ftbm = _h5q0;
    }
  }function exwzn($7ap3, o4c6_) {
    for (; $7ap3 >= dncjs && (o4c6_ = snxdwj['exec'](enrz8x));) wdcoj = o4c6_['index'], dncjs = wdcoj + o4c6_[0x0]['length'], bmitf['lineNumber']++;bmitf['columnNumber'] = $7ap3 - wdcoj + 0x1;
  }for (var wdcoj = 0x0, dncjs = 0x0, snxdwj = /.*(?:\r\n?|\n)|.*$/g, bmitf = k642_5['locator'], htfq05 = [{ 'currentNSMap': zx8er }], mu1vbi = {}, ftbm = 0x0;;) {
    try {
      var jncdsw = enrz8x['indexOf']('<', ftbm);if (0x0 > jncdsw) {
        if (!enrz8x['substr'](ftbm)['match'](/^\s*$/)) {
          var jxswnd = k642_5['doc'],
              exn8 = jxswnd['createTextNode'](enrz8x['substr'](ftbm));jxswnd['appendChild'](exn8), k642_5['currentElement'] = exn8;
        }return;
      }switch (jncdsw > ftbm && q0tf5(jncdsw), enrz8x['charAt'](jncdsw + 0x1)) {case '/':
          var ubim = enrz8x['indexOf']('>', jncdsw + 0x3),
              nxes = enrz8x['substring'](jncdsw + 0x2, ubim),
              js6od = htfq05['pop']();0x0 > ubim ? (nxes = enrz8x['substring'](jncdsw + 0x2)['replace'](/[\s<].*/, ''), k_6o['error']('end tag name: ' + nxes + ' is not complete:' + js6od['tagName']), ubim = jncdsw + 0x1 + nxes['length']) : nxes['match'](/\s</) && (nxes = nxes['replace'](/[\s<].*/, ''), k_6o['error']('end tag name: ' + nxes + ' maybe not complete'), ubim = jncdsw + 0x1 + nxes['length']);var ry387$ = js6od['localNSMap'],
              k0_ = js6od['tagName'] == nxes,
              a3$ry7 = k0_ || js6od['tagName'] && js6od['tagName']['toLowerCase']() == nxes['toLowerCase']();if (a3$ry7) {
            if (k642_5['endElement'](js6od['uri'], js6od['localName'], nxes), ry387$) {
              for (var fh0qmt in ry387$) k642_5['endPrefixMapping'](fh0qmt);
            }k0_ || k_6o['fatalError']('end tag name: ' + nxes + ' is not match the current start tagName:' + js6od['tagName']);
          } else htfq05['push'](js6od);ubim++;break;case '?':
          bmitf && exwzn(jncdsw), ubim = fwnxezs(enrz8x, jncdsw, k642_5);break;case '!':
          bmitf && exwzn(jncdsw), ubim = fo26dc(enrz8x, jncdsw, k642_5, k_6o);break;default:
          bmitf && exwzn(jncdsw);var mit0h = new fu1iv9(),
              xdsw = htfq05[htfq05['length'] - 0x1]['currentNSMap'],
              ubim = fqtf0(enrz8x, jncdsw, mit0h, xdsw, b1v9i, k_6o),
              _5k624 = mit0h['length'];if (!mit0h['closed'] && fcjwdso(enrz8x, ubim, mit0h['tagName'], mu1vbi) && (mit0h['closed'] = !0x0, o6cdjs['nbsp'] || k_6o['warning']('unclosed xml attribute')), bmitf && _5k624) {
            for (var xdnsew = fnsjwd(bmitf, {}), sod6jc = 0x0; _5k624 > sod6jc; sod6jc++) {
              var so = mit0h[sod6jc];exwzn(so['offset']), so['locator'] = fnsjwd(bmitf, {});
            }k642_5['locator'] = xdnsew, fwex8zn(mit0h, k642_5, xdsw) && htfq05['push'](mit0h), k642_5['locator'] = bmitf;
          } else fwex8zn(mit0h, k642_5, xdsw) && htfq05['push'](mit0h);'http://www.w3.org/1999/xhtml' !== mit0h['uri'] || mit0h['closed'] ? ubim++ : ubim = fiv91(enrz8x, ubim, mit0h['tagName'], b1v9i, k642_5);}
    } catch (r7z8) {
      k_6o['error']('element parse error: ' + r7z8), ubim = -0x1;
    }ubim > ftbm ? ftbm = ubim : q0tf5(Math['max'](jncdsw, ftbm) + 0x1);
  }
}function fnsjwd(u1mivb, tmfv) {
  return tmfv['lineNumber'] = u1mivb['lineNumber'], tmfv['columnNumber'] = u1mivb['columnNumber'], tmfv;
}function fqtf0(ex78rz, zxn, jdnws, imtf, y37a$, djso) {
  for (var q4k52_, esz, ex8rz = ++zxn, ez7r$8 = fitfhb;;) {
    var xsnze = ex78rz['charAt'](ex8rz);switch (xsnze) {case '=':
        if (ez7r$8 === f$3rz8) q4k52_ = ex78rz['slice'](zxn, ex8rz), ez7r$8 = fesdxw;else {
          if (ez7r$8 !== ftq0kh5) throw new Error('attribute equal must after attrName');ez7r$8 = fesdxw;
        }break;case '\x27':case '\x22':
        if (ez7r$8 === fesdxw || ez7r$8 === f$3rz8) {
          if (ez7r$8 === f$3rz8 && (djso['warning']('attribute value must after "="'), q4k52_ = ex78rz['slice'](zxn, ex8rz)), zxn = ex8rz + 0x1, ex8rz = ex78rz['indexOf'](xsnze, zxn), !(ex8rz > 0x0)) throw new Error('attribute value no end \'' + xsnze + '\' match');esz = ex78rz['slice'](zxn, ex8rz)['replace'](/&#?\w+;/g, y37a$), jdnws['add'](q4k52_, esz, zxn - 0x1), ez7r$8 = fbimvtf;
        } else {
          if (ez7r$8 != ftfq5) throw new Error('attribute value must after "="');esz = ex78rz['slice'](zxn, ex8rz)['replace'](/&#?\w+;/g, y37a$), jdnws['add'](q4k52_, esz, zxn), djso['warning']('attribute "' + q4k52_ + '" missed start quot(' + xsnze + ')!!'), zxn = ex8rz + 0x1, ez7r$8 = fbimvtf;
        }break;case '/':
        switch (ez7r$8) {case fitfhb:
            jdnws['setTagName'](ex78rz['slice'](zxn, ex8rz));case fbimvtf:case f_56k:case fufmb:
            ez7r$8 = fufmb, jdnws['closed'] = !0x0;case ftfq5:case f$3rz8:case ftq0kh5:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return djso['error']('unexpected end of input'), ez7r$8 == fitfhb && jdnws['setTagName'](ex78rz['slice'](zxn, ex8rz)), ex8rz;case '>':
        switch (ez7r$8) {case fitfhb:
            jdnws['setTagName'](ex78rz['slice'](zxn, ex8rz));case fbimvtf:case f_56k:case fufmb:
            break;case ftfq5:case f$3rz8:
            esz = ex78rz['slice'](zxn, ex8rz), '/' === esz['slice'](-0x1) && (jdnws['closed'] = !0x0, esz = esz['slice'](0x0, -0x1));case ftq0kh5:
            ez7r$8 === ftq0kh5 && (esz = q4k52_), ez7r$8 == ftfq5 ? (djso['warning']('attribute "' + esz + '" missed quot(")!!'), jdnws['add'](q4k52_, esz['replace'](/&#?\w+;/g, y37a$), zxn)) : ('http://www.w3.org/1999/xhtml' === imtf[''] && esz['match'](/^(?:disabled|checked|selected)$/i) || djso['warning']('attribute "' + esz + '" missed value!! "' + esz + '" instead!!'), jdnws['add'](esz, esz, zxn));break;case fesdxw:
            throw new Error('attribute value missed!!');}return ex8rz;case '\u0080':
        xsnze = '\x20';default:
        if ('\x20' >= xsnze) switch (ez7r$8) {case fitfhb:
            jdnws['setTagName'](ex78rz['slice'](zxn, ex8rz)), ez7r$8 = f_56k;break;case f$3rz8:
            q4k52_ = ex78rz['slice'](zxn, ex8rz), ez7r$8 = ftq0kh5;break;case ftfq5:
            var esz = ex78rz['slice'](zxn, ex8rz)['replace'](/&#?\w+;/g, y37a$);djso['warning']('attribute "' + esz + '" missed quot(")!!'), jdnws['add'](q4k52_, esz, zxn);case fbimvtf:
            ez7r$8 = f_56k;} else switch (ez7r$8) {case ftq0kh5:
            {
              jdnws['tagName'];
            }'http://www.w3.org/1999/xhtml' === imtf[''] && q4k52_['match'](/^(?:disabled|checked|selected)$/i) || djso['warning']('attribute "' + q4k52_ + '" missed value!! "' + q4k52_ + '" instead2!!'), jdnws['add'](q4k52_, q4k52_, zxn), zxn = ex8rz, ez7r$8 = f$3rz8;break;case fbimvtf:
            djso['warning']('attribute space is required"' + q4k52_ + '\x22!!');case f_56k:
            ez7r$8 = f$3rz8, zxn = ex8rz;break;case fesdxw:
            ez7r$8 = ftfq5, zxn = ex8rz;break;case fufmb:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ex8rz++;
  }
}function fwex8zn(k46_o2, dwnesx, tfqh0m) {
  for (var sjnc = k46_o2['tagName'], sezx = null, xwsdne = k46_o2['length']; xwsdne--;) {
    var q0fhmt = k46_o2[xwsdne],
        q54_ = q0fhmt['qName'],
        q4k = q0fhmt['value'],
        ifbvm = q54_['indexOf'](':');if (ifbvm > 0x0) var e8zxnr = q0fhmt['prefix'] = q54_['slice'](0x0, ifbvm),
        m0htfi = q54_['slice'](ifbvm + 0x1),
        _564k2 = 'xmlns' === e8zxnr && m0htfi;else m0htfi = q54_, e8zxnr = null, _564k2 = 'xmlns' === q54_ && '';q0fhmt['localName'] = m0htfi, _564k2 !== !0x1 && (null == sezx && (sezx = {}, f$3a7y(tfqh0m, tfqh0m = {})), tfqh0m[_564k2] = sezx[_564k2] = q4k, q0fhmt['uri'] = 'http://www.w3.org/2000/xmlns/', dwnesx['startPrefixMapping'](_564k2, q4k));
  }for (var xwsdne = k46_o2['length']; xwsdne--;) {
    q0fhmt = k46_o2[xwsdne];var e8zxnr = q0fhmt['prefix'];e8zxnr && ('xml' === e8zxnr && (q0fhmt['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== e8zxnr && (q0fhmt['uri'] = tfqh0m[e8zxnr || '']));
  }var ifbvm = sjnc['indexOf'](':');ifbvm > 0x0 ? (e8zxnr = k46_o2['prefix'] = sjnc['slice'](0x0, ifbvm), m0htfi = k46_o2['localName'] = sjnc['slice'](ifbvm + 0x1)) : (e8zxnr = null, m0htfi = k46_o2['localName'] = sjnc);var iumb1v = k46_o2['uri'] = tfqh0m[e8zxnr || ''];if (dwnesx['startElement'](iumb1v, m0htfi, sjnc, k46_o2), !k46_o2['closed']) return k46_o2['currentNSMap'] = tfqh0m, k46_o2['localNSMap'] = sezx, !0x0;if (dwnesx['endElement'](iumb1v, m0htfi, sjnc), sezx) {
    for (e8zxnr in sezx) dwnesx['endPrefixMapping'](e8zxnr);
  }
}function fiv91(mhbti, _k542, k04_q5, q_450k, d6cjos) {
  if (/^(?:script|textarea)$/i['test'](k04_q5)) {
    var ok24 = mhbti['indexOf']('</' + k04_q5 + '>', _k542),
        imfub = mhbti['substring'](_k542 + 0x1, ok24);if (/[&<]/['test'](imfub)) return (/^script$/i['test'](k04_q5) ? (d6cjos['characters'](imfub, 0x0, imfub['length']), ok24) : (imfub = imfub['replace'](/&#?\w+;/g, q_450k), d6cjos['characters'](imfub, 0x0, imfub['length']), ok24)
    );
  }return _k542 + 0x1;
}function fcjwdso(exnwsd, k_4625, ftimv, $y37ra) {
  var k_6254 = $y37ra[ftimv];return null == k_6254 && (k_6254 = exnwsd['lastIndexOf']('</' + ftimv + '>'), k_4625 > k_6254 && (k_6254 = exnwsd['lastIndexOf']('</' + ftimv)), $y37ra[ftimv] = k_6254), k_4625 > k_6254;
}function f$3a7y(ocwdj, $78r3y) {
  for (var zrn8xe in ocwdj) $78r3y[zrn8xe] = ocwdj[zrn8xe];
}function fo26dc(enzr8x, $zre87, xwndsj, c6o2_4) {
  var bhmfi = enzr8x['charAt']($zre87 + 0x2);switch (bhmfi) {case '-':
      if ('-' === enzr8x['charAt']($zre87 + 0x3)) {
        var o6jscd = enzr8x['indexOf']('-->', $zre87 + 0x4);return o6jscd > $zre87 ? (xwndsj['comment'](enzr8x, $zre87 + 0x4, o6jscd - $zre87 - 0x4), o6jscd + 0x3) : (c6o2_4['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == enzr8x['substr']($zre87 + 0x3, 0x6)) {
        var o6jscd = enzr8x['indexOf'](']]>', $zre87 + 0x9);return xwndsj['startCDATA'](), xwndsj['characters'](enzr8x, $zre87 + 0x9, o6jscd - $zre87 - 0x9), xwndsj['endCDATA'](), o6jscd + 0x3;
      }var wnz8xe = fmbfht(enzr8x, $zre87),
          p7a3y = wnz8xe['length'];if (p7a3y > 0x1 && /!doctype/i['test'](wnz8xe[0x0][0x0])) {
        var coj6d = wnz8xe[0x1][0x0],
            itfvb = p7a3y > 0x3 && /^public$/i['test'](wnz8xe[0x2][0x0]) && wnz8xe[0x3][0x0],
            ewsz = p7a3y > 0x4 && wnz8xe[0x4][0x0],
            vmbi = wnz8xe[p7a3y - 0x1];return xwndsj['startDTD'](coj6d, itfvb && itfvb['replace'](/^(['"])(.*?)\1$/, '$2'), ewsz && ewsz['replace'](/^(['"])(.*?)\1$/, '$2')), xwndsj['endDTD'](), vmbi['index'] + vmbi[0x0]['length'];
      }}return -0x1;
}function fwnxezs(ez8x7r, c42_o, h0qtmf) {
  var i0f = ez8x7r['indexOf']('?>', c42_o);if (i0f) {
    var mbfui = ez8x7r['substring'](c42_o, i0f)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (mbfui) {
      {
        mbfui[0x0]['length'];
      }return h0qtmf['processingInstruction'](mbfui[0x1], mbfui[0x2]), i0f + 0x2;
    }return -0x1;
  }return -0x1;
}function fu1iv9() {}function fimufvb(y$37a, i1uvb9) {
  return y$37a['__proto__'] = i1uvb9, y$37a;
}function fmbfht(o642_, _k2o64) {
  var r7$z,
      kh0q_5 = [],
      muifv = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (muifv['lastIndex'] = _k2o64, muifv['exec'](o642_); r7$z = muifv['exec'](o642_);) if (kh0q_5['push'](r7$z), r7$z[0x1]) return kh0q_5;
}var fenr = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fayp7 = new RegExp('[\\-\\.0-9' + fenr['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fco6sjd = new RegExp('^' + fenr['source'] + fayp7['source'] + '*(?::' + fenr['source'] + fayp7['source'] + '*)?$'),
    fitfhb = 0x0,
    f$3rz8 = 0x1,
    ftq0kh5 = 0x2,
    fesdxw = 0x3,
    ftfq5 = 0x4,
    fbimvtf = 0x5,
    f_56k = 0x6,
    fufmb = 0x7;fxne8['prototype'] = { 'parse': function ($p7a3, zexr78, tmivbf) {
    var bv91u = this['domBuilder'];bv91u['startDocument'](), f$3a7y(zexr78, zexr78 = {}), f$7ra($p7a3, zexr78, tmivbf, bv91u, this['errorHandler']), bv91u['endDocument']();
  } }, fu1iv9['prototype'] = { 'setTagName': function (ez87$) {
    if (!fco6sjd['test'](ez87$)) throw new Error('invalid tagName:' + ez87$);this['tagName'] = ez87$;
  }, 'add': function (mub1vi, n8ew, wzxns) {
    if (!fco6sjd['test'](mub1vi)) throw new Error('invalid attribute:' + mub1vi);this[this['length']++] = { 'qName': mub1vi, 'value': n8ew, 'offset': wzxns };
  }, 'length': 0x0, 'getLocalName': function (co24_) {
    return this[co24_]['localName'];
  }, 'getLocator': function (_kq52) {
    return this[_kq52]['locator'];
  }, 'getQName': function (q4_k5) {
    return this[q4_k5]['qName'];
  }, 'getURI': function (wez8xn) {
    return this[wez8xn]['uri'];
  }, 'getValue': function (xdwjns) {
    return this[xdwjns]['value'];
  } }, fimufvb({}, fimufvb['prototype']) instanceof fimufvb || (fimufvb = function (iv9u1b, htimf0) {
  function nweds() {}nweds['prototype'] = htimf0, nweds = new nweds();for (htimf0 in iv9u1b) nweds[htimf0] = iv9u1b[htimf0];return nweds;
}), exports['XMLReader'] = fxne8;