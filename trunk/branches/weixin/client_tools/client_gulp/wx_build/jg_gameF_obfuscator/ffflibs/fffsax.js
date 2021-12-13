var k = wx.$f;
function fezx7r() {}function fze8nxw(c6sodj, mtif, xwsd, vifmbt, ftmbv) {
  function ub91i(ez78xr) {
    if (ez78xr > 0xffff) {
      ez78xr -= 0x10000;var h0fmi = 0xd800 + (ez78xr >> 0xa),
          ug9bv1 = 0xdc00 + (0x3ff & ez78xr);return String['fromCharCode'](h0fmi, ug9bv1);
    }return String['fromCharCode'](ez78xr);
  }function h0q_5k(tqf50h) {
    var d2cjo = tqf50h['slice'](0x1, -0x1);return d2cjo in xwsd ? xwsd[d2cjo] : '#' === d2cjo['charAt'](0x0) ? ub91i(parseInt(d2cjo['substr'](0x1)['replace']('x', '0x'))) : (ftmbv['error']('entity not found:' + tqf50h), tqf50h);
  }function e8rn(j426oc) {
    if (j426oc > r8znex) {
      var xesnd = c6sodj['substring'](r8znex, j426oc)['replace'](/&#?\w+;/g, h0q_5k);dscjow && ivtbfm(r8znex), vifmbt['characters'](xesnd, 0x0, j426oc - r8znex), r8znex = j426oc;
    }
  }function ivtbfm(bmuv1i, xre8z7) {
    for (; bmuv1i >= we8xzn && (xre8z7 = vi1u9['exec'](c6sodj));) nrxez8 = xre8z7['index'], we8xzn = nrxez8 + xre8z7[0x0]['length'], dscjow['lineNumber']++;dscjow['columnNumber'] = bmuv1i - nrxez8 + 0x1;
  }for (var nrxez8 = 0x0, we8xzn = 0x0, vi1u9 = /.*(?:\r\n?|\n)|.*$/g, dscjow = vifmbt['locator'], ex78z = [{ 'currentNSMap': mtif }], sdenx = {}, r8znex = 0x0;;) {
    try {
      var codjw = c6sodj['indexOf']('<', r8znex);if (0x0 > codjw) {
        if (!c6sodj['substr'](r8znex)['match'](/^\s*$/)) {
          var y3a = vifmbt['doc'],
              tkq50 = y3a['createTextNode'](c6sodj['substr'](r8znex));y3a['appendChild'](tkq50), vifmbt['currentElement'] = tkq50;
        }return;
      }switch (codjw > r8znex && e8rn(codjw), c6sodj['charAt'](codjw + 0x1)) {case '/':
          var nxwsd = c6sodj['indexOf']('>', codjw + 0x3),
              tmfhq = c6sodj['substring'](codjw + 0x2, nxwsd),
              wdsxj = ex78z['pop']();0x0 > nxwsd ? (tmfhq = c6sodj['substring'](codjw + 0x2)['replace'](/[\s<].*/, ''), ftmbv['error']('end tag name: ' + tmfhq + ' is not complete:' + wdsxj['tagName']), nxwsd = codjw + 0x1 + tmfhq['length']) : tmfhq['match'](/\s</) && (tmfhq = tmfhq['replace'](/[\s<].*/, ''), ftmbv['error']('end tag name: ' + tmfhq + ' maybe not complete'), nxwsd = codjw + 0x1 + tmfhq['length']);var x8e7zr = wdsxj['localNSMap'],
              ypa$ = wdsxj['tagName'] == tmfhq,
              bmifth = ypa$ || wdsxj['tagName'] && wdsxj['tagName']['toLowerCase']() == tmfhq['toLowerCase']();if (bmifth) {
            if (vifmbt['endElement'](wdsxj['uri'], wdsxj['localName'], tmfhq), x8e7zr) {
              for (var muib in x8e7zr) vifmbt['endPrefixMapping'](muib);
            }ypa$ || ftmbv['fatalError']('end tag name: ' + tmfhq + ' is not match the current start tagName:' + wdsxj['tagName']);
          } else ex78z['push'](wdsxj);nxwsd++;break;case '?':
          dscjow && ivtbfm(codjw), nxwsd = fubi19(c6sodj, codjw, vifmbt);break;case '!':
          dscjow && ivtbfm(codjw), nxwsd = fnswdex(c6sodj, codjw, vifmbt, ftmbv);break;default:
          dscjow && ivtbfm(codjw);var oscdj = new f$7z8er(),
              iv1u9b = ex78z[ex78z['length'] - 0x1]['currentNSMap'],
              nxwsd = fze$87r(c6sodj, codjw, oscdj, iv1u9b, h0q_5k, ftmbv),
              dswj = oscdj['length'];if (!oscdj['closed'] && ffvibu(c6sodj, nxwsd, oscdj['tagName'], sdenx) && (oscdj['closed'] = !0x0, xwsd['nbsp'] || ftmbv['warning']('unclosed xml attribute')), dscjow && dswj) {
            for (var hfmit0 = fy83$7(dscjow, {}), _5k04q = 0x0; dswj > _5k04q; _5k04q++) {
              var cd2o6j = oscdj[_5k04q];ivtbfm(cd2o6j['offset']), cd2o6j['locator'] = fy83$7(dscjow, {});
            }vifmbt['locator'] = hfmit0, fqfth(oscdj, vifmbt, iv1u9b) && ex78z['push'](oscdj), vifmbt['locator'] = dscjow;
          } else fqfth(oscdj, vifmbt, iv1u9b) && ex78z['push'](oscdj);'http://www.w3.org/1999/xhtml' !== oscdj['uri'] || oscdj['closed'] ? nxwsd++ : nxwsd = fxwnds(c6sodj, nxwsd, oscdj['tagName'], h0q_5k, vifmbt);}
    } catch (bu91g) {
      ftmbv['error']('element parse error: ' + bu91g), nxwsd = -0x1;
    }nxwsd > r8znex ? r8znex = nxwsd : e8rn(Math['max'](codjw, r8znex) + 0x1);
  }
}function fy83$7(jcwos, q2k) {
  return q2k['lineNumber'] = jcwos['lineNumber'], q2k['columnNumber'] = jcwos['columnNumber'], q2k;
}function fze$87r(ap3y7, wscdoj, z7$38r, z7rxe8, $rze87, f0itm) {
  for (var nxewds, o24jc6, x7z8 = ++wscdoj, vbgu91 = fsdxnjw;;) {
    var d6josc = ap3y7['charAt'](x7z8);switch (d6josc) {case '=':
        if (vbgu91 === fifuv) nxewds = ap3y7['slice'](wscdoj, x7z8), vbgu91 = fjnd;else {
          if (vbgu91 !== f_6k25) throw new Error('attribute equal must after attrName');vbgu91 = fjnd;
        }break;case '\x27':case '\x22':
        if (vbgu91 === fjnd || vbgu91 === fifuv) {
          if (vbgu91 === fifuv && (f0itm['warning']('attribute value must after "="'), nxewds = ap3y7['slice'](wscdoj, x7z8)), wscdoj = x7z8 + 0x1, x7z8 = ap3y7['indexOf'](d6josc, wscdoj), !(x7z8 > 0x0)) throw new Error('attribute value no end \'' + d6josc + '\' match');o24jc6 = ap3y7['slice'](wscdoj, x7z8)['replace'](/&#?\w+;/g, $rze87), z7$38r['add'](nxewds, o24jc6, wscdoj - 0x1), vbgu91 = fwex8;
        } else {
          if (vbgu91 != ftifbhm) throw new Error('attribute value must after "="');o24jc6 = ap3y7['slice'](wscdoj, x7z8)['replace'](/&#?\w+;/g, $rze87), z7$38r['add'](nxewds, o24jc6, wscdoj), f0itm['warning']('attribute "' + nxewds + '" missed start quot(' + d6josc + ')!!'), wscdoj = x7z8 + 0x1, vbgu91 = fwex8;
        }break;case '/':
        switch (vbgu91) {case fsdxnjw:
            z7$38r['setTagName'](ap3y7['slice'](wscdoj, x7z8));case fwex8:case fbtivmf:case f_4k256:
            vbgu91 = f_4k256, z7$38r['closed'] = !0x0;case ftifbhm:case fifuv:case f_6k25:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return f0itm['error']('unexpected end of input'), vbgu91 == fsdxnjw && z7$38r['setTagName'](ap3y7['slice'](wscdoj, x7z8)), x7z8;case '>':
        switch (vbgu91) {case fsdxnjw:
            z7$38r['setTagName'](ap3y7['slice'](wscdoj, x7z8));case fwex8:case fbtivmf:case f_4k256:
            break;case ftifbhm:case fifuv:
            o24jc6 = ap3y7['slice'](wscdoj, x7z8), '/' === o24jc6['slice'](-0x1) && (z7$38r['closed'] = !0x0, o24jc6 = o24jc6['slice'](0x0, -0x1));case f_6k25:
            vbgu91 === f_6k25 && (o24jc6 = nxewds), vbgu91 == ftifbhm ? (f0itm['warning']('attribute "' + o24jc6 + '" missed quot(")!!'), z7$38r['add'](nxewds, o24jc6['replace'](/&#?\w+;/g, $rze87), wscdoj)) : ('http://www.w3.org/1999/xhtml' === z7rxe8[''] && o24jc6['match'](/^(?:disabled|checked|selected)$/i) || f0itm['warning']('attribute "' + o24jc6 + '" missed value!! "' + o24jc6 + '" instead!!'), z7$38r['add'](o24jc6, o24jc6, wscdoj));break;case fjnd:
            throw new Error('attribute value missed!!');}return x7z8;case '\u0080':
        d6josc = '\x20';default:
        if ('\x20' >= d6josc) switch (vbgu91) {case fsdxnjw:
            z7$38r['setTagName'](ap3y7['slice'](wscdoj, x7z8)), vbgu91 = fbtivmf;break;case fifuv:
            nxewds = ap3y7['slice'](wscdoj, x7z8), vbgu91 = f_6k25;break;case ftifbhm:
            var o24jc6 = ap3y7['slice'](wscdoj, x7z8)['replace'](/&#?\w+;/g, $rze87);f0itm['warning']('attribute "' + o24jc6 + '" missed quot(")!!'), z7$38r['add'](nxewds, o24jc6, wscdoj);case fwex8:
            vbgu91 = fbtivmf;} else switch (vbgu91) {case f_6k25:
            {
              z7$38r['tagName'];
            }'http://www.w3.org/1999/xhtml' === z7rxe8[''] && nxewds['match'](/^(?:disabled|checked|selected)$/i) || f0itm['warning']('attribute "' + nxewds + '" missed value!! "' + nxewds + '" instead2!!'), z7$38r['add'](nxewds, nxewds, wscdoj), wscdoj = x7z8, vbgu91 = fifuv;break;case fwex8:
            f0itm['warning']('attribute space is required"' + nxewds + '\x22!!');case fbtivmf:
            vbgu91 = fifuv, wscdoj = x7z8;break;case fjnd:
            vbgu91 = ftifbhm, wscdoj = x7z8;break;case f_4k256:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}x7z8++;
  }
}function fqfth(kqh05_, snwzex, k5_462) {
  for (var nxes = kqh05_['tagName'], xeszn = null, u19vg = kqh05_['length']; u19vg--;) {
    var zxn8er = kqh05_[u19vg],
        q0t = zxn8er['qName'],
        nzx8e = zxn8er['value'],
        himf0t = q0t['indexOf'](':');if (himf0t > 0x0) var cosj = zxn8er['prefix'] = q0t['slice'](0x0, himf0t),
        rnzx = q0t['slice'](himf0t + 0x1),
        nz = 'xmlns' === cosj && rnzx;else rnzx = q0t, cosj = null, nz = 'xmlns' === q0t && '';zxn8er['localName'] = rnzx, nz !== !0x1 && (null == xeszn && (xeszn = {}, fufm(k5_462, k5_462 = {})), k5_462[nz] = xeszn[nz] = nzx8e, zxn8er['uri'] = 'http://www.w3.org/2000/xmlns/', snwzex['startPrefixMapping'](nz, nzx8e));
  }for (var u19vg = kqh05_['length']; u19vg--;) {
    zxn8er = kqh05_[u19vg];var cosj = zxn8er['prefix'];cosj && ('xml' === cosj && (zxn8er['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== cosj && (zxn8er['uri'] = k5_462[cosj || '']));
  }var himf0t = nxes['indexOf'](':');himf0t > 0x0 ? (cosj = kqh05_['prefix'] = nxes['slice'](0x0, himf0t), rnzx = kqh05_['localName'] = nxes['slice'](himf0t + 0x1)) : (cosj = null, rnzx = kqh05_['localName'] = nxes);var cs = kqh05_['uri'] = k5_462[cosj || ''];if (snwzex['startElement'](cs, rnzx, nxes, kqh05_), !kqh05_['closed']) return kqh05_['currentNSMap'] = k5_462, kqh05_['localNSMap'] = xeszn, !0x0;if (snwzex['endElement'](cs, rnzx, nxes), xeszn) {
    for (cosj in xeszn) snwzex['endPrefixMapping'](cosj);
  }
}function fxwnds(rz7e, fmbuiv, gb91uv, q0tfmh, ar7$y) {
  if (/^(?:script|textarea)$/i['test'](gb91uv)) {
    var ry8$37 = rz7e['indexOf']('</' + gb91uv + '>', fmbuiv),
        ex8nz = rz7e['substring'](fmbuiv + 0x1, ry8$37);if (/[&<]/['test'](ex8nz)) return (/^script$/i['test'](gb91uv) ? (ar7$y['characters'](ex8nz, 0x0, ex8nz['length']), ry8$37) : (ex8nz = ex8nz['replace'](/&#?\w+;/g, q0tfmh), ar7$y['characters'](ex8nz, 0x0, ex8nz['length']), ry8$37)
    );
  }return fmbuiv + 0x1;
}function ffvibu($e8rz, k2_64o, ya3$7r, ibfvmu) {
  var mftbi = ibfvmu[ya3$7r];return null == mftbi && (mftbi = $e8rz['lastIndexOf']('</' + ya3$7r + '>'), k2_64o > mftbi && (mftbi = $e8rz['lastIndexOf']('</' + ya3$7r)), ibfvmu[ya3$7r] = mftbi), k2_64o > mftbi;
}function fufm(erz7, c6dsj) {
  for (var exwnz in erz7) c6dsj[exwnz] = erz7[exwnz];
}function fnswdex(buv91g, fhmt0q, fit, tmfbhi) {
  var sxwdj = buv91g['charAt'](fhmt0q + 0x2);switch (sxwdj) {case '-':
      if ('-' === buv91g['charAt'](fhmt0q + 0x3)) {
        var zxnr8e = buv91g['indexOf']('-->', fhmt0q + 0x4);return zxnr8e > fhmt0q ? (fit['comment'](buv91g, fhmt0q + 0x4, zxnr8e - fhmt0q - 0x4), zxnr8e + 0x3) : (tmfbhi['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == buv91g['substr'](fhmt0q + 0x3, 0x6)) {
        var zxnr8e = buv91g['indexOf'](']]>', fhmt0q + 0x9);return fit['startCDATA'](), fit['characters'](buv91g, fhmt0q + 0x9, zxnr8e - fhmt0q - 0x9), fit['endCDATA'](), zxnr8e + 0x3;
      }var $8zr7e = fwsexz(buv91g, fhmt0q),
          a73$yp = $8zr7e['length'];if (a73$yp > 0x1 && /!doctype/i['test']($8zr7e[0x0][0x0])) {
        var swnj = $8zr7e[0x1][0x0],
            tq0mf = a73$yp > 0x3 && /^public$/i['test']($8zr7e[0x2][0x0]) && $8zr7e[0x3][0x0],
            c426oj = a73$yp > 0x4 && $8zr7e[0x4][0x0],
            x8zwen = $8zr7e[a73$yp - 0x1];return fit['startDTD'](swnj, tq0mf && tq0mf['replace'](/^(['"])(.*?)\1$/, '$2'), c426oj && c426oj['replace'](/^(['"])(.*?)\1$/, '$2')), fit['endDTD'](), x8zwen['index'] + x8zwen[0x0]['length'];
      }}return -0x1;
}function fubi19(nxdsj, uvimfb, z$37) {
  var $z8 = nxdsj['indexOf']('?>', uvimfb);if ($z8) {
    var k62_4o = nxdsj['substring'](uvimfb, $z8)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (k62_4o) {
      {
        k62_4o[0x0]['length'];
      }return z$37['processingInstruction'](k62_4o[0x1], k62_4o[0x2]), $z8 + 0x2;
    }return -0x1;
  }return -0x1;
}function f$7z8er() {}function fcjsdo6(xz78er, tbfhim) {
  return xz78er['__proto__'] = tbfhim, xz78er;
}function fwsexz(c624jo, $ze8) {
  var wsjcod,
      k_054q = [],
      ib9vu1 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ib9vu1['lastIndex'] = $ze8, ib9vu1['exec'](c624jo); wsjcod = ib9vu1['exec'](c624jo);) if (k_054q['push'](wsjcod), wsjcod[0x1]) return k_054q;
}var fv9g1ub = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ffmvit = new RegExp('[\\-\\.0-9' + fv9g1ub['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fbtmhfi = new RegExp('^' + fv9g1ub['source'] + ffmvit['source'] + '*(?::' + fv9g1ub['source'] + ffmvit['source'] + '*)?$'),
    fsdxnjw = 0x0,
    fifuv = 0x1,
    f_6k25 = 0x2,
    fjnd = 0x3,
    ftifbhm = 0x4,
    fwex8 = 0x5,
    fbtivmf = 0x6,
    f_4k256 = 0x7;fezx7r['prototype'] = { 'parse': function (z8$37r, s6odj, o24c6) {
    var kt05qh = this['domBuilder'];kt05qh['startDocument'](), fufm(s6odj, s6odj = {}), fze8nxw(z8$37r, s6odj, o24c6, kt05qh, this['errorHandler']), kt05qh['endDocument']();
  } }, f$7z8er['prototype'] = { 'setTagName': function (snwjcd) {
    if (!fbtmhfi['test'](snwjcd)) throw new Error('invalid tagName:' + snwjcd);this['tagName'] = snwjcd;
  }, 'add': function (vmfubi, scdwjn, fvibt) {
    if (!fbtmhfi['test'](vmfubi)) throw new Error('invalid attribute:' + vmfubi);this[this['length']++] = { 'qName': vmfubi, 'value': scdwjn, 'offset': fvibt };
  }, 'length': 0x0, 'getLocalName': function (qk50_4) {
    return this[qk50_4]['localName'];
  }, 'getLocator': function (p7y3$) {
    return this[p7y3$]['locator'];
  }, 'getQName': function (mufibv) {
    return this[mufibv]['qName'];
  }, 'getURI': function (a$y7r) {
    return this[a$y7r]['uri'];
  }, 'getValue': function (k50_qh) {
    return this[k50_qh]['value'];
  } }, fcjsdo6({}, fcjsdo6['prototype']) instanceof fcjsdo6 || (fcjsdo6 = function (vfimbu, thmfq) {
  function k5qh() {}k5qh['prototype'] = thmfq, k5qh = new k5qh();for (thmfq in vfimbu) k5qh[thmfq] = vfimbu[thmfq];return k5qh;
}), exports['XMLReader'] = fezx7r;