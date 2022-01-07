var S = wx.$J;
function j1_f7rk6() {}function j1_gclo0u(je5pn3, o0gs, lcue4, c04ul, wj5n) {
  function mrqd1(x8i92d) {
    if (x8i92d > 0xffff) {
      x8i92d -= 0x10000;var n4up = 0xd800 + (x8i92d >> 0xa),
          ecbl4u = 0xdc00 + (0x3ff & x8i92d);return String['fromCharCode'](n4up, ecbl4u);
    }return String['fromCharCode'](x8i92d);
  }function ul4ebp(zi29x) {
    var b5pnj = zi29x['slice'](0x1, -0x1);return b5pnj in lcue4 ? lcue4[b5pnj] : '#' === b5pnj['charAt'](0x0) ? mrqd1(parseInt(b5pnj['substr'](0x1)['replace']('x', '0x'))) : (wj5n['error']('entity not found:' + zi29x), zi29x);
  }function m67r1(peubn4) {
    if (peubn4 > azxi) {
      var ycs0o = je5pn3['substring'](azxi, peubn4)['replace'](/&#?\w+;/g, ul4ebp);k6r7ys && z9axih(azxi), c04ul['characters'](ycs0o, 0x0, peubn4 - azxi), azxi = peubn4;
    }
  }function z9axih(csg0yo, z9xah) {
    for (; csg0yo >= id92 && (z9xah = n35pe['exec'](je5pn3));) r16m7 = z9xah['index'], id92 = r16m7 + z9xah[0x0]['length'], k6r7ys['lineNumber']++;k6r7ys['columnNumber'] = csg0yo - r16m7 + 0x1;
  }for (var r16m7 = 0x0, id92 = 0x0, n35pe = /.*(?:\r\n?|\n)|.*$/g, k6r7ys = c04ul['locator'], mrqf = [{ 'currentNSMap': o0gs }], o0clyg = {}, azxi = 0x0;;) {
    try {
      var rqf71 = je5pn3['indexOf']('<', azxi);if (0x0 > rqf71) {
        if (!je5pn3['substr'](azxi)['match'](/^\s*$/)) {
          var i28xqd = c04ul['doc'],
              r6kfs = i28xqd['createTextNode'](je5pn3['substr'](azxi));i28xqd['appendChild'](r6kfs), c04ul['currentElement'] = r6kfs;
        }return;
      }switch (rqf71 > azxi && m67r1(rqf71), je5pn3['charAt'](rqf71 + 0x1)) {case '/':
          var j3wv5 = je5pn3['indexOf']('>', rqf71 + 0x3),
              x829iz = je5pn3['substring'](rqf71 + 0x2, j3wv5),
              n5vw = mrqf['pop']();0x0 > j3wv5 ? (x829iz = je5pn3['substring'](rqf71 + 0x2)['replace'](/[\s<].*/, ''), wj5n['error']('end tag name: ' + x829iz + ' is not complete:' + n5vw['tagName']), j3wv5 = rqf71 + 0x1 + x829iz['length']) : x829iz['match'](/\s</) && (x829iz = x829iz['replace'](/[\s<].*/, ''), wj5n['error']('end tag name: ' + x829iz + ' maybe not complete'), j3wv5 = rqf71 + 0x1 + x829iz['length']);var ysoc0g = n5vw['localNSMap'],
              enu4pb = n5vw['tagName'] == x829iz,
              g0c4u = enu4pb || n5vw['tagName'] && n5vw['tagName']['toLowerCase']() == x829iz['toLowerCase']();if (g0c4u) {
            if (c04ul['endElement'](n5vw['uri'], n5vw['localName'], x829iz), ysoc0g) {
              for (var q1mfr7 in ysoc0g) c04ul['endPrefixMapping'](q1mfr7);
            }enu4pb || wj5n['fatalError']('end tag name: ' + x829iz + ' is not match the current start tagName:' + n5vw['tagName']);
          } else mrqf['push'](n5vw);j3wv5++;break;case '?':
          k6r7ys && z9axih(rqf71), j3wv5 = j1_r76mkf(je5pn3, rqf71, c04ul);break;case '!':
          k6r7ys && z9axih(rqf71), j3wv5 = j1_fsk6(je5pn3, rqf71, c04ul, wj5n);break;default:
          k6r7ys && z9axih(rqf71);var xi9a8 = new j1_jb5pne(),
              wnjp3 = mrqf[mrqf['length'] - 0x1]['currentNSMap'],
              j3wv5 = j1_lbc4u(je5pn3, rqf71, xi9a8, wnjp3, ul4ebp, wj5n),
              krsf6 = xi9a8['length'];if (!xi9a8['closed'] && j1_rf1qdm(je5pn3, j3wv5, xi9a8['tagName'], o0clyg) && (xi9a8['closed'] = !0x0, lcue4['nbsp'] || wj5n['warning']('unclosed xml attribute')), k6r7ys && krsf6) {
            for (var xd928 = j1_o0ucl(k6r7ys, {}), hzix = 0x0; krsf6 > hzix; hzix++) {
              var xaz = xi9a8[hzix];z9axih(xaz['offset']), xaz['locator'] = j1_o0ucl(k6r7ys, {});
            }c04ul['locator'] = xd928, j1_d12f(xi9a8, c04ul, wnjp3) && mrqf['push'](xi9a8), c04ul['locator'] = k6r7ys;
          } else j1_d12f(xi9a8, c04ul, wnjp3) && mrqf['push'](xi9a8);'http://www.w3.org/1999/xhtml' !== xi9a8['uri'] || xi9a8['closed'] ? j3wv5++ : j3wv5 = j1_r1mqdf(je5pn3, j3wv5, xi9a8['tagName'], ul4ebp, c04ul);}
    } catch (gculo0) {
      wj5n['error']('element parse error: ' + gculo0), j3wv5 = -0x1;
    }j3wv5 > azxi ? azxi = j3wv5 : m67r1(Math['max'](rqf71, azxi) + 0x1);
  }
}function j1_o0ucl(m716fr, q8dx2) {
  return q8dx2['lineNumber'] = m716fr['lineNumber'], q8dx2['columnNumber'] = m716fr['columnNumber'], q8dx2;
}function j1_lbc4u(i218d, clue4b, qdm, y6skr7, og0yc, i89z) {
  for (var kyo67s, pje5n, p5jn3e = ++clue4b, wjnv5 = j1_nbe4;;) {
    var p5neb4 = i218d['charAt'](p5jn3e);switch (p5neb4) {case '=':
        if (wjnv5 === j1_a8zx9i) kyo67s = i218d['slice'](clue4b, p5jn3e), wjnv5 = j1_h9$zxa;else {
          if (wjnv5 !== j1_id2q) throw new Error('attribute equal must after attrName');wjnv5 = j1_h9$zxa;
        }break;case '\x27':case '\x22':
        if (wjnv5 === j1_h9$zxa || wjnv5 === j1_a8zx9i) {
          if (wjnv5 === j1_a8zx9i && (i89z['warning']('attribute value must after "="'), kyo67s = i218d['slice'](clue4b, p5jn3e)), clue4b = p5jn3e + 0x1, p5jn3e = i218d['indexOf'](p5neb4, clue4b), !(p5jn3e > 0x0)) throw new Error('attribute value no end \'' + p5neb4 + '\' match');pje5n = i218d['slice'](clue4b, p5jn3e)['replace'](/&#?\w+;/g, og0yc), qdm['add'](kyo67s, pje5n, clue4b - 0x1), wjnv5 = j1_j5penb;
        } else {
          if (wjnv5 != j1_bne5pj) throw new Error('attribute value must after "="');pje5n = i218d['slice'](clue4b, p5jn3e)['replace'](/&#?\w+;/g, og0yc), qdm['add'](kyo67s, pje5n, clue4b), i89z['warning']('attribute "' + kyo67s + '" missed start quot(' + p5neb4 + ')!!'), clue4b = p5jn3e + 0x1, wjnv5 = j1_j5penb;
        }break;case '/':
        switch (wjnv5) {case j1_nbe4:
            qdm['setTagName'](i218d['slice'](clue4b, p5jn3e));case j1_j5penb:case j1_nj3vw:case j1_bl4ceu:
            wjnv5 = j1_bl4ceu, qdm['closed'] = !0x0;case j1_bne5pj:case j1_a8zx9i:case j1_id2q:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return i89z['error']('unexpected end of input'), wjnv5 == j1_nbe4 && qdm['setTagName'](i218d['slice'](clue4b, p5jn3e)), p5jn3e;case '>':
        switch (wjnv5) {case j1_nbe4:
            qdm['setTagName'](i218d['slice'](clue4b, p5jn3e));case j1_j5penb:case j1_nj3vw:case j1_bl4ceu:
            break;case j1_bne5pj:case j1_a8zx9i:
            pje5n = i218d['slice'](clue4b, p5jn3e), '/' === pje5n['slice'](-0x1) && (qdm['closed'] = !0x0, pje5n = pje5n['slice'](0x0, -0x1));case j1_id2q:
            wjnv5 === j1_id2q && (pje5n = kyo67s), wjnv5 == j1_bne5pj ? (i89z['warning']('attribute "' + pje5n + '" missed quot(")!!'), qdm['add'](kyo67s, pje5n['replace'](/&#?\w+;/g, og0yc), clue4b)) : ('http://www.w3.org/1999/xhtml' === y6skr7[''] && pje5n['match'](/^(?:disabled|checked|selected)$/i) || i89z['warning']('attribute "' + pje5n + '" missed value!! "' + pje5n + '" instead!!'), qdm['add'](pje5n, pje5n, clue4b));break;case j1_h9$zxa:
            throw new Error('attribute value missed!!');}return p5jn3e;case '\u0080':
        p5neb4 = '\x20';default:
        if ('\x20' >= p5neb4) switch (wjnv5) {case j1_nbe4:
            qdm['setTagName'](i218d['slice'](clue4b, p5jn3e)), wjnv5 = j1_nj3vw;break;case j1_a8zx9i:
            kyo67s = i218d['slice'](clue4b, p5jn3e), wjnv5 = j1_id2q;break;case j1_bne5pj:
            var pje5n = i218d['slice'](clue4b, p5jn3e)['replace'](/&#?\w+;/g, og0yc);i89z['warning']('attribute "' + pje5n + '" missed quot(")!!'), qdm['add'](kyo67s, pje5n, clue4b);case j1_j5penb:
            wjnv5 = j1_nj3vw;} else switch (wjnv5) {case j1_id2q:
            {
              qdm['tagName'];
            }'http://www.w3.org/1999/xhtml' === y6skr7[''] && kyo67s['match'](/^(?:disabled|checked|selected)$/i) || i89z['warning']('attribute "' + kyo67s + '" missed value!! "' + kyo67s + '" instead2!!'), qdm['add'](kyo67s, kyo67s, clue4b), clue4b = p5jn3e, wjnv5 = j1_a8zx9i;break;case j1_j5penb:
            i89z['warning']('attribute space is required"' + kyo67s + '\x22!!');case j1_nj3vw:
            wjnv5 = j1_a8zx9i, clue4b = p5jn3e;break;case j1_h9$zxa:
            wjnv5 = j1_bne5pj, clue4b = p5jn3e;break;case j1_bl4ceu:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}p5jn3e++;
  }
}function j1_d12f(yk67s, gyl0co, idq12) {
  for (var ysk67r = yk67s['tagName'], nue4b = null, m2qf = yk67s['length']; m2qf--;) {
    var iq218 = yk67s[m2qf],
        r7ky = iq218['qName'],
        dx8i2q = iq218['value'],
        epn4bu = r7ky['indexOf'](':');if (epn4bu > 0x0) var ep5bjn = iq218['prefix'] = r7ky['slice'](0x0, epn4bu),
        iz89 = r7ky['slice'](epn4bu + 0x1),
        c4l0b = 'xmlns' === ep5bjn && iz89;else iz89 = r7ky, ep5bjn = null, c4l0b = 'xmlns' === r7ky && '';iq218['localName'] = iz89, c4l0b !== !0x1 && (null == nue4b && (nue4b = {}, j1_frq1md(idq12, idq12 = {})), idq12[c4l0b] = nue4b[c4l0b] = dx8i2q, iq218['uri'] = 'http://www.w3.org/2000/xmlns/', gyl0co['startPrefixMapping'](c4l0b, dx8i2q));
  }for (var m2qf = yk67s['length']; m2qf--;) {
    iq218 = yk67s[m2qf];var ep5bjn = iq218['prefix'];ep5bjn && ('xml' === ep5bjn && (iq218['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ep5bjn && (iq218['uri'] = idq12[ep5bjn || '']));
  }var epn4bu = ysk67r['indexOf'](':');epn4bu > 0x0 ? (ep5bjn = yk67s['prefix'] = ysk67r['slice'](0x0, epn4bu), iz89 = yk67s['localName'] = ysk67r['slice'](epn4bu + 0x1)) : (ep5bjn = null, iz89 = yk67s['localName'] = ysk67r);var sykr6 = yk67s['uri'] = idq12[ep5bjn || ''];if (gyl0co['startElement'](sykr6, iz89, ysk67r, yk67s), !yk67s['closed']) return yk67s['currentNSMap'] = idq12, yk67s['localNSMap'] = nue4b, !0x0;if (gyl0co['endElement'](sykr6, iz89, ysk67r), nue4b) {
    for (ep5bjn in nue4b) gyl0co['endPrefixMapping'](ep5bjn);
  }
}function j1_r1mqdf(fdrqm1, gco0y, yog0sk, bne5, s67fk) {
  if (/^(?:script|textarea)$/i['test'](yog0sk)) {
    var srf6k = fdrqm1['indexOf']('</' + yog0sk + '>', gco0y),
        skygo6 = fdrqm1['substring'](gco0y + 0x1, srf6k);if (/[&<]/['test'](skygo6)) return (/^script$/i['test'](yog0sk) ? (s67fk['characters'](skygo6, 0x0, skygo6['length']), srf6k) : (skygo6 = skygo6['replace'](/&#?\w+;/g, bne5), s67fk['characters'](skygo6, 0x0, skygo6['length']), srf6k)
    );
  }return gco0y + 0x1;
}function j1_rf1qdm(e54nbp, g0syco, f71qr, nv5jw) {
  var fmr176 = nv5jw[f71qr];return null == fmr176 && (fmr176 = e54nbp['lastIndexOf']('</' + f71qr + '>'), g0syco > fmr176 && (fmr176 = e54nbp['lastIndexOf']('</' + f71qr)), nv5jw[f71qr] = fmr176), g0syco > fmr176;
}function j1_frq1md(fq1rm, r67kfm) {
  for (var mrf17q in fq1rm) r67kfm[mrf17q] = fq1rm[mrf17q];
}function j1_fsk6(k0osgy, azixh, m7rf, ep45bn) {
  var d8iq1 = k0osgy['charAt'](azixh + 0x2);switch (d8iq1) {case '-':
      if ('-' === k0osgy['charAt'](azixh + 0x3)) {
        var wp5j = k0osgy['indexOf']('-->', azixh + 0x4);return wp5j > azixh ? (m7rf['comment'](k0osgy, azixh + 0x4, wp5j - azixh - 0x4), wp5j + 0x3) : (ep45bn['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == k0osgy['substr'](azixh + 0x3, 0x6)) {
        var wp5j = k0osgy['indexOf'](']]>', azixh + 0x9);return m7rf['startCDATA'](), m7rf['characters'](k0osgy, azixh + 0x9, wp5j - azixh - 0x9), m7rf['endCDATA'](), wp5j + 0x3;
      }var g0coyl = j1_x9zah(k0osgy, azixh),
          bpe = g0coyl['length'];if (bpe > 0x1 && /!doctype/i['test'](g0coyl[0x0][0x0])) {
        var gys6k = g0coyl[0x1][0x0],
            r7m6fk = bpe > 0x3 && /^public$/i['test'](g0coyl[0x2][0x0]) && g0coyl[0x3][0x0],
            ahzi9x = bpe > 0x4 && g0coyl[0x4][0x0],
            os7yk6 = g0coyl[bpe - 0x1];return m7rf['startDTD'](gys6k, r7m6fk && r7m6fk['replace'](/^(['"])(.*?)\1$/, '$2'), ahzi9x && ahzi9x['replace'](/^(['"])(.*?)\1$/, '$2')), m7rf['endDTD'](), os7yk6['index'] + os7yk6[0x0]['length'];
      }}return -0x1;
}function j1_r76mkf(hx9a, md1rfq, i98zax) {
  var x2qd8 = hx9a['indexOf']('?>', md1rfq);if (x2qd8) {
    var pw3n5 = hx9a['substring'](md1rfq, x2qd8)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (pw3n5) {
      {
        pw3n5[0x0]['length'];
      }return i98zax['processingInstruction'](pw3n5[0x1], pw3n5[0x2]), x2qd8 + 0x2;
    }return -0x1;
  }return -0x1;
}function j1_jb5pne() {}function j1_ulp4b(f7m6rk, mdq28) {
  return f7m6rk['__proto__'] = mdq28, f7m6rk;
}function j1_x9zah(n4upbe, g0cuo) {
  var oysk,
      luc04b = [],
      clu40g = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (clu40g['lastIndex'] = g0cuo, clu40g['exec'](n4upbe); oysk = clu40g['exec'](n4upbe);) if (luc04b['push'](oysk), oysk[0x1]) return luc04b;
}var j1_e5bnj = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    j1_xhzi9 = new RegExp('[\\-\\.0-9' + j1_e5bnj['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    j1_gyoc0s = new RegExp('^' + j1_e5bnj['source'] + j1_xhzi9['source'] + '*(?::' + j1_e5bnj['source'] + j1_xhzi9['source'] + '*)?$'),
    j1_nbe4 = 0x0,
    j1_a8zx9i = 0x1,
    j1_id2q = 0x2,
    j1_h9$zxa = 0x3,
    j1_bne5pj = 0x4,
    j1_j5penb = 0x5,
    j1_nj3vw = 0x6,
    j1_bl4ceu = 0x7;j1_f7rk6['prototype'] = { 'parse': function (xi2d9, nu4peb, i2q18) {
    var fq7m = this['domBuilder'];fq7m['startDocument'](), j1_frq1md(nu4peb, nu4peb = {}), j1_gclo0u(xi2d9, nu4peb, i2q18, fq7m, this['errorHandler']), fq7m['endDocument']();
  } }, j1_jb5pne['prototype'] = { 'setTagName': function (j5bpe) {
    if (!j1_gyoc0s['test'](j5bpe)) throw new Error('invalid tagName:' + j5bpe);this['tagName'] = j5bpe;
  }, 'add': function (p35enj, ep5nj, zh$9x) {
    if (!j1_gyoc0s['test'](p35enj)) throw new Error('invalid attribute:' + p35enj);this[this['length']++] = { 'qName': p35enj, 'value': ep5nj, 'offset': zh$9x };
  }, 'length': 0x0, 'getLocalName': function (cb4lue) {
    return this[cb4lue]['localName'];
  }, 'getLocator': function (ygosk0) {
    return this[ygosk0]['locator'];
  }, 'getQName': function (cul4) {
    return this[cul4]['qName'];
  }, 'getURI': function (e4ublc) {
    return this[e4ublc]['uri'];
  }, 'getValue': function (ocg0ul) {
    return this[ocg0ul]['value'];
  } }, j1_ulp4b({}, j1_ulp4b['prototype']) instanceof j1_ulp4b || (j1_ulp4b = function (koy0gs, ejp5nb) {
  function d2xi9() {}d2xi9['prototype'] = ejp5nb, d2xi9 = new d2xi9();for (ejp5nb in koy0gs) d2xi9[ejp5nb] = koy0gs[ejp5nb];return d2xi9;
}), exports['XMLReader'] = j1_f7rk6;