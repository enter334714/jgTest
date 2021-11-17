var k = wx.$f;
function fenz() {}function f$ra37(yar$, bvitfm, nwezs, cwojs, k0q_h) {
  function xsdwne(dj6co2) {
    if (dj6co2 > 0xffff) {
      dj6co2 -= 0x10000;var m0 = 0xd800 + (dj6co2 >> 0xa),
          $r7 = 0xdc00 + (0x3ff & dj6co2);return String['fromCharCode'](m0, $r7);
    }return String['fromCharCode'](dj6co2);
  }function i1bm(tvb) {
    var q405k_ = tvb['slice'](0x1, -0x1);return q405k_ in nwezs ? nwezs[q405k_] : '#' === q405k_['charAt'](0x0) ? xsdwne(parseInt(q405k_['substr'](0x1)['replace']('x', '0x'))) : (k0q_h['error']('entity not found:' + tvb), tvb);
  }function ihfbt(y3$r7a) {
    if (y3$r7a > o24_c) {
      var m0it = yar$['substring'](o24_c, y3$r7a)['replace'](/&#?\w+;/g, i1bm);mfh0 && owdsj(o24_c), cwojs['characters'](m0it, 0x0, y3$r7a - o24_c), o24_c = y3$r7a;
    }
  }function owdsj(fhmb, thibfm) {
    for (; fhmb >= k_4q0 && (thibfm = _hkq05['exec'](yar$));) o6sj = thibfm['index'], k_4q0 = o6sj + thibfm[0x0]['length'], mfh0['lineNumber']++;mfh0['columnNumber'] = fhmb - o6sj + 0x1;
  }for (var o6sj = 0x0, k_4q0 = 0x0, _hkq05 = /.*(?:\r\n?|\n)|.*$/g, mfh0 = cwojs['locator'], w8nezx = [{ 'currentNSMap': bvitfm }], miv1bu = {}, o24_c = 0x0;;) {
    try {
      var tf0hqm = yar$['indexOf']('<', o24_c);if (0x0 > tf0hqm) {
        if (!yar$['substr'](o24_c)['match'](/^\s*$/)) {
          var k_h0q = cwojs['doc'],
              bifvum = k_h0q['createTextNode'](yar$['substr'](o24_c));k_h0q['appendChild'](bifvum), cwojs['currentElement'] = bifvum;
        }return;
      }switch (tf0hqm > o24_c && ihfbt(tf0hqm), yar$['charAt'](tf0hqm + 0x1)) {case '/':
          var xnrz8e = yar$['indexOf']('>', tf0hqm + 0x3),
              v1b9g = yar$['substring'](tf0hqm + 0x2, xnrz8e),
              zer8n = w8nezx['pop']();0x0 > xnrz8e ? (v1b9g = yar$['substring'](tf0hqm + 0x2)['replace'](/[\s<].*/, ''), k0q_h['error']('end tag name: ' + v1b9g + ' is not complete:' + zer8n['tagName']), xnrz8e = tf0hqm + 0x1 + v1b9g['length']) : v1b9g['match'](/\s</) && (v1b9g = v1b9g['replace'](/[\s<].*/, ''), k0q_h['error']('end tag name: ' + v1b9g + ' maybe not complete'), xnrz8e = tf0hqm + 0x1 + v1b9g['length']);var y$r783 = zer8n['localNSMap'],
              vbuimf = zer8n['tagName'] == v1b9g,
              tm0if = vbuimf || zer8n['tagName'] && zer8n['tagName']['toLowerCase']() == v1b9g['toLowerCase']();if (tm0if) {
            if (cwojs['endElement'](zer8n['uri'], zer8n['localName'], v1b9g), y$r783) {
              for (var fmiu in y$r783) cwojs['endPrefixMapping'](fmiu);
            }vbuimf || k0q_h['fatalError']('end tag name: ' + v1b9g + ' is not match the current start tagName:' + zer8n['tagName']);
          } else w8nezx['push'](zer8n);xnrz8e++;break;case '?':
          mfh0 && owdsj(tf0hqm), xnrz8e = fy73r8(yar$, tf0hqm, cwojs);break;case '!':
          mfh0 && owdsj(tf0hqm), xnrz8e = fdoc6(yar$, tf0hqm, cwojs, k0q_h);break;default:
          mfh0 && owdsj(tf0hqm);var _c26 = new f_q0k54(),
              bmu = w8nezx[w8nezx['length'] - 0x1]['currentNSMap'],
              xnrz8e = fy37r$8(yar$, tf0hqm, _c26, bmu, i1bm, k0q_h),
              nerz8x = _c26['length'];if (!_c26['closed'] && fbtfmi(yar$, xnrz8e, _c26['tagName'], miv1bu) && (_c26['closed'] = !0x0, nwezs['nbsp'] || k0q_h['warning']('unclosed xml attribute')), mfh0 && nerz8x) {
            for (var qk450 = fzr8e(mfh0, {}), fh0mqt = 0x0; nerz8x > fh0mqt; fh0mqt++) {
              var wsdcj = _c26[fh0mqt];owdsj(wsdcj['offset']), wsdcj['locator'] = fzr8e(mfh0, {});
            }cwojs['locator'] = qk450, fo6c2dj(_c26, cwojs, bmu) && w8nezx['push'](_c26), cwojs['locator'] = mfh0;
          } else fo6c2dj(_c26, cwojs, bmu) && w8nezx['push'](_c26);'http://www.w3.org/1999/xhtml' !== _c26['uri'] || _c26['closed'] ? xnrz8e++ : xnrz8e = frz83(yar$, xnrz8e, _c26['tagName'], i1bm, cwojs);}
    } catch (dexwns) {
      k0q_h['error']('element parse error: ' + dexwns), xnrz8e = -0x1;
    }xnrz8e > o24_c ? o24_c = xnrz8e : ihfbt(Math['max'](tf0hqm, o24_c) + 0x1);
  }
}function fzr8e(t0k5hq, m1ibv) {
  return m1ibv['lineNumber'] = t0k5hq['lineNumber'], m1ibv['columnNumber'] = t0k5hq['columnNumber'], m1ibv;
}function fy37r$8(ojc42, nrze, ihfmbt, k_04, e8z7, bfumv) {
  for (var jcnws, ex8znw, dcjo6 = ++nrze, tbmhi = fvbmfiu;;) {
    var kq_54 = ojc42['charAt'](dcjo6);switch (kq_54) {case '=':
        if (tbmhi === fsjwod) jcnws = ojc42['slice'](nrze, dcjo6), tbmhi = fk_5qh;else {
          if (tbmhi !== fer$78) throw new Error('attribute equal must after attrName');tbmhi = fk_5qh;
        }break;case '\x27':case '\x22':
        if (tbmhi === fk_5qh || tbmhi === fsjwod) {
          if (tbmhi === fsjwod && (bfumv['warning']('attribute value must after "="'), jcnws = ojc42['slice'](nrze, dcjo6)), nrze = dcjo6 + 0x1, dcjo6 = ojc42['indexOf'](kq_54, nrze), !(dcjo6 > 0x0)) throw new Error('attribute value no end \'' + kq_54 + '\' match');ex8znw = ojc42['slice'](nrze, dcjo6)['replace'](/&#?\w+;/g, e8z7), ihfmbt['add'](jcnws, ex8znw, nrze - 0x1), tbmhi = feznx8r;
        } else {
          if (tbmhi != fxews) throw new Error('attribute value must after "="');ex8znw = ojc42['slice'](nrze, dcjo6)['replace'](/&#?\w+;/g, e8z7), ihfmbt['add'](jcnws, ex8znw, nrze), bfumv['warning']('attribute "' + jcnws + '" missed start quot(' + kq_54 + ')!!'), nrze = dcjo6 + 0x1, tbmhi = feznx8r;
        }break;case '/':
        switch (tbmhi) {case fvbmfiu:
            ihfmbt['setTagName'](ojc42['slice'](nrze, dcjo6));case feznx8r:case fiumbv1:case fqthmf:
            tbmhi = fqthmf, ihfmbt['closed'] = !0x0;case fxews:case fsjwod:case fer$78:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return bfumv['error']('unexpected end of input'), tbmhi == fvbmfiu && ihfmbt['setTagName'](ojc42['slice'](nrze, dcjo6)), dcjo6;case '>':
        switch (tbmhi) {case fvbmfiu:
            ihfmbt['setTagName'](ojc42['slice'](nrze, dcjo6));case feznx8r:case fiumbv1:case fqthmf:
            break;case fxews:case fsjwod:
            ex8znw = ojc42['slice'](nrze, dcjo6), '/' === ex8znw['slice'](-0x1) && (ihfmbt['closed'] = !0x0, ex8znw = ex8znw['slice'](0x0, -0x1));case fer$78:
            tbmhi === fer$78 && (ex8znw = jcnws), tbmhi == fxews ? (bfumv['warning']('attribute "' + ex8znw + '" missed quot(")!!'), ihfmbt['add'](jcnws, ex8znw['replace'](/&#?\w+;/g, e8z7), nrze)) : ('http://www.w3.org/1999/xhtml' === k_04[''] && ex8znw['match'](/^(?:disabled|checked|selected)$/i) || bfumv['warning']('attribute "' + ex8znw + '" missed value!! "' + ex8znw + '" instead!!'), ihfmbt['add'](ex8znw, ex8znw, nrze));break;case fk_5qh:
            throw new Error('attribute value missed!!');}return dcjo6;case '\u0080':
        kq_54 = '\x20';default:
        if ('\x20' >= kq_54) switch (tbmhi) {case fvbmfiu:
            ihfmbt['setTagName'](ojc42['slice'](nrze, dcjo6)), tbmhi = fiumbv1;break;case fsjwod:
            jcnws = ojc42['slice'](nrze, dcjo6), tbmhi = fer$78;break;case fxews:
            var ex8znw = ojc42['slice'](nrze, dcjo6)['replace'](/&#?\w+;/g, e8z7);bfumv['warning']('attribute "' + ex8znw + '" missed quot(")!!'), ihfmbt['add'](jcnws, ex8znw, nrze);case feznx8r:
            tbmhi = fiumbv1;} else switch (tbmhi) {case fer$78:
            {
              ihfmbt['tagName'];
            }'http://www.w3.org/1999/xhtml' === k_04[''] && jcnws['match'](/^(?:disabled|checked|selected)$/i) || bfumv['warning']('attribute "' + jcnws + '" missed value!! "' + jcnws + '" instead2!!'), ihfmbt['add'](jcnws, jcnws, nrze), nrze = dcjo6, tbmhi = fsjwod;break;case feznx8r:
            bfumv['warning']('attribute space is required"' + jcnws + '\x22!!');case fiumbv1:
            tbmhi = fsjwod, nrze = dcjo6;break;case fk_5qh:
            tbmhi = fxews, nrze = dcjo6;break;case fqthmf:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}dcjo6++;
  }
}function fo6c2dj(ewn8zx, qf0tm, swnxde) {
  for (var $p73a = ewn8zx['tagName'], th0fi = null, cd62 = ewn8zx['length']; cd62--;) {
    var ay3p7$ = ewn8zx[cd62],
        dswnjx = ay3p7$['qName'],
        sc6 = ay3p7$['value'],
        fth0m = dswnjx['indexOf'](':');if (fth0m > 0x0) var nxe8zw = ay3p7$['prefix'] = dswnjx['slice'](0x0, fth0m),
        wexzs = dswnjx['slice'](fth0m + 0x1),
        wjoc = 'xmlns' === nxe8zw && wexzs;else wexzs = dswnjx, nxe8zw = null, wjoc = 'xmlns' === dswnjx && '';ay3p7$['localName'] = wexzs, wjoc !== !0x1 && (null == th0fi && (th0fi = {}, fk26o4_(swnxde, swnxde = {})), swnxde[wjoc] = th0fi[wjoc] = sc6, ay3p7$['uri'] = 'http://www.w3.org/2000/xmlns/', qf0tm['startPrefixMapping'](wjoc, sc6));
  }for (var cd62 = ewn8zx['length']; cd62--;) {
    ay3p7$ = ewn8zx[cd62];var nxe8zw = ay3p7$['prefix'];nxe8zw && ('xml' === nxe8zw && (ay3p7$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== nxe8zw && (ay3p7$['uri'] = swnxde[nxe8zw || '']));
  }var fth0m = $p73a['indexOf'](':');fth0m > 0x0 ? (nxe8zw = ewn8zx['prefix'] = $p73a['slice'](0x0, fth0m), wexzs = ewn8zx['localName'] = $p73a['slice'](fth0m + 0x1)) : (nxe8zw = null, wexzs = ewn8zx['localName'] = $p73a);var cjosw = ewn8zx['uri'] = swnxde[nxe8zw || ''];if (qf0tm['startElement'](cjosw, wexzs, $p73a, ewn8zx), !ewn8zx['closed']) return ewn8zx['currentNSMap'] = swnxde, ewn8zx['localNSMap'] = th0fi, !0x0;if (qf0tm['endElement'](cjosw, wexzs, $p73a), th0fi) {
    for (nxe8zw in th0fi) qf0tm['endPrefixMapping'](nxe8zw);
  }
}function frz83(m1buv, y3ra$7, csowd, wdoc, wnxsz) {
  if (/^(?:script|textarea)$/i['test'](csowd)) {
    var ojs6 = m1buv['indexOf']('</' + csowd + '>', y3ra$7),
        zsxen = m1buv['substring'](y3ra$7 + 0x1, ojs6);if (/[&<]/['test'](zsxen)) return (/^script$/i['test'](csowd) ? (wnxsz['characters'](zsxen, 0x0, zsxen['length']), ojs6) : (zsxen = zsxen['replace'](/&#?\w+;/g, wdoc), wnxsz['characters'](zsxen, 0x0, zsxen['length']), ojs6)
    );
  }return y3ra$7 + 0x1;
}function fbtfmi(tmh0qf, dcjso6, jnwsdc, cod62j) {
  var swoj = cod62j[jnwsdc];return null == swoj && (swoj = tmh0qf['lastIndexOf']('</' + jnwsdc + '>'), dcjso6 > swoj && (swoj = tmh0qf['lastIndexOf']('</' + jnwsdc)), cod62j[jnwsdc] = swoj), dcjso6 > swoj;
}function fk26o4_(tfmq0h, uivb91) {
  for (var hq5_0k in tfmq0h) uivb91[hq5_0k] = tfmq0h[hq5_0k];
}function fdoc6(fthm0i, jncs, eznw8x, cj2do) {
  var fmhtq0 = fthm0i['charAt'](jncs + 0x2);switch (fmhtq0) {case '-':
      if ('-' === fthm0i['charAt'](jncs + 0x3)) {
        var cwsn = fthm0i['indexOf']('-->', jncs + 0x4);return cwsn > jncs ? (eznw8x['comment'](fthm0i, jncs + 0x4, cwsn - jncs - 0x4), cwsn + 0x3) : (cj2do['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == fthm0i['substr'](jncs + 0x3, 0x6)) {
        var cwsn = fthm0i['indexOf'](']]>', jncs + 0x9);return eznw8x['startCDATA'](), eznw8x['characters'](fthm0i, jncs + 0x9, cwsn - jncs - 0x9), eznw8x['endCDATA'](), cwsn + 0x3;
      }var vu91 = fjswnd(fthm0i, jncs),
          szxne = vu91['length'];if (szxne > 0x1 && /!doctype/i['test'](vu91[0x0][0x0])) {
        var dxwsen = vu91[0x1][0x0],
            dnwjxs = szxne > 0x3 && /^public$/i['test'](vu91[0x2][0x0]) && vu91[0x3][0x0],
            rxe8n = szxne > 0x4 && vu91[0x4][0x0],
            vbu1i = vu91[szxne - 0x1];return eznw8x['startDTD'](dxwsen, dnwjxs && dnwjxs['replace'](/^(['"])(.*?)\1$/, '$2'), rxe8n && rxe8n['replace'](/^(['"])(.*?)\1$/, '$2')), eznw8x['endDTD'](), vbu1i['index'] + vbu1i[0x0]['length'];
      }}return -0x1;
}function fy73r8(b1v9, m0ith, jsxdw) {
  var r8enz = b1v9['indexOf']('?>', m0ith);if (r8enz) {
    var swcdoj = b1v9['substring'](m0ith, r8enz)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (swcdoj) {
      {
        swcdoj[0x0]['length'];
      }return jsxdw['processingInstruction'](swcdoj[0x1], swcdoj[0x2]), r8enz + 0x2;
    }return -0x1;
  }return -0x1;
}function f_q0k54() {}function fya$3r7(a$7py3, k42o6) {
  return a$7py3['__proto__'] = k42o6, a$7py3;
}function fjswnd(tmifbh, cjws) {
  var wen8x,
      xswedn = [],
      sj6d = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (sj6d['lastIndex'] = cjws, sj6d['exec'](tmifbh); wen8x = sj6d['exec'](tmifbh);) if (xswedn['push'](wen8x), wen8x[0x1]) return xswedn;
}var fhtbi = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    f_40qk5 = new RegExp('[\\-\\.0-9' + fhtbi['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fezs = new RegExp('^' + fhtbi['source'] + f_40qk5['source'] + '*(?::' + fhtbi['source'] + f_40qk5['source'] + '*)?$'),
    fvbmfiu = 0x0,
    fsjwod = 0x1,
    fer$78 = 0x2,
    fk_5qh = 0x3,
    fxews = 0x4,
    feznx8r = 0x5,
    fiumbv1 = 0x6,
    fqthmf = 0x7;fenz['prototype'] = { 'parse': function (r83y7, xe8wn, x8znew) {
    var soc6j = this['domBuilder'];soc6j['startDocument'](), fk26o4_(xe8wn, xe8wn = {}), f$ra37(r83y7, xe8wn, x8znew, soc6j, this['errorHandler']), soc6j['endDocument']();
  } }, f_q0k54['prototype'] = { 'setTagName': function (vmfuib) {
    if (!fezs['test'](vmfuib)) throw new Error('invalid tagName:' + vmfuib);this['tagName'] = vmfuib;
  }, 'add': function (jdcso6, z7$r83, q540) {
    if (!fezs['test'](jdcso6)) throw new Error('invalid attribute:' + jdcso6);this[this['length']++] = { 'qName': jdcso6, 'value': z7$r83, 'offset': q540 };
  }, 'length': 0x0, 'getLocalName': function (xwnez8) {
    return this[xwnez8]['localName'];
  }, 'getLocator': function (p$y3a) {
    return this[p$y3a]['locator'];
  }, 'getQName': function (rnxz8) {
    return this[rnxz8]['qName'];
  }, 'getURI': function (csjwdo) {
    return this[csjwdo]['uri'];
  }, 'getValue': function (k2q_54) {
    return this[k2q_54]['value'];
  } }, fya$3r7({}, fya$3r7['prototype']) instanceof fya$3r7 || (fya$3r7 = function (dcn, z7xr8e) {
  function gu9v1b() {}gu9v1b['prototype'] = z7xr8e, gu9v1b = new gu9v1b();for (z7xr8e in dcn) gu9v1b[z7xr8e] = dcn[z7xr8e];return gu9v1b;
}), exports['XMLReader'] = fenz;