var S = wx.$J;
function j1_y0gcs() {}function j1_s6k7yo(oky6gs, iz9axh, qd2i8, q2m1d8, osg0y) {
  function lgcoy(mfqrd1) {
    if (mfqrd1 > 0xffff) {
      mfqrd1 -= 0x10000;var y7rs6k = 0xd800 + (mfqrd1 >> 0xa),
          socy0g = 0xdc00 + (0x3ff & mfqrd1);return String['fromCharCode'](y7rs6k, socy0g);
    }return String['fromCharCode'](mfqrd1);
  }function ugolc0(b4luec) {
    var yk6r7 = b4luec['slice'](0x1, -0x1);return yk6r7 in qd2i8 ? qd2i8[yk6r7] : '#' === yk6r7['charAt'](0x0) ? lgcoy(parseInt(yk6r7['substr'](0x1)['replace']('x', '0x'))) : (osg0y['error']('entity not found:' + b4luec), b4luec);
  }function ai9z(goky0s) {
    if (goky0s > clug04) {
      var ix29d = oky6gs['substring'](clug04, goky0s)['replace'](/&#?\w+;/g, ugolc0);ubpe4 && oky67(clug04), q2m1d8['characters'](ix29d, 0x0, goky0s - clug04), clug04 = goky0s;
    }
  }function oky67(r76yks, m2qd8) {
    for (; r76yks >= x8 && (m2qd8 = z8ai9x['exec'](oky6gs));) xa8z = m2qd8['index'], x8 = xa8z + m2qd8[0x0]['length'], ubpe4['lineNumber']++;ubpe4['columnNumber'] = r76yks - xa8z + 0x1;
  }for (var xa8z = 0x0, x8 = 0x0, z8ai9x = /.*(?:\r\n?|\n)|.*$/g, ubpe4 = q2m1d8['locator'], $zahx = [{ 'currentNSMap': iz9axh }], zi8x = {}, clug04 = 0x0;;) {
    try {
      var gsc = oky6gs['indexOf']('<', clug04);if (0x0 > gsc) {
        if (!oky6gs['substr'](clug04)['match'](/^\s*$/)) {
          var lc0ou = q2m1d8['doc'],
              $9zah = lc0ou['createTextNode'](oky6gs['substr'](clug04));lc0ou['appendChild']($9zah), q2m1d8['currentElement'] = $9zah;
        }return;
      }switch (gsc > clug04 && ai9z(gsc), oky6gs['charAt'](gsc + 0x1)) {case '/':
          var y0kgo = oky6gs['indexOf']('>', gsc + 0x3),
              f6sk7r = oky6gs['substring'](gsc + 0x2, y0kgo),
              d1frq = $zahx['pop']();0x0 > y0kgo ? (f6sk7r = oky6gs['substring'](gsc + 0x2)['replace'](/[\s<].*/, ''), osg0y['error']('end tag name: ' + f6sk7r + ' is not complete:' + d1frq['tagName']), y0kgo = gsc + 0x1 + f6sk7r['length']) : f6sk7r['match'](/\s</) && (f6sk7r = f6sk7r['replace'](/[\s<].*/, ''), osg0y['error']('end tag name: ' + f6sk7r + ' maybe not complete'), y0kgo = gsc + 0x1 + f6sk7r['length']);var fmq1dr = d1frq['localNSMap'],
              i2z98x = d1frq['tagName'] == f6sk7r,
              npjw53 = i2z98x || d1frq['tagName'] && d1frq['tagName']['toLowerCase']() == f6sk7r['toLowerCase']();if (npjw53) {
            if (q2m1d8['endElement'](d1frq['uri'], d1frq['localName'], f6sk7r), fmq1dr) {
              for (var jnp5e3 in fmq1dr) q2m1d8['endPrefixMapping'](jnp5e3);
            }i2z98x || osg0y['fatalError']('end tag name: ' + f6sk7r + ' is not match the current start tagName:' + d1frq['tagName']);
          } else $zahx['push'](d1frq);y0kgo++;break;case '?':
          ubpe4 && oky67(gsc), y0kgo = j1_xqd28i(oky6gs, gsc, q2m1d8);break;case '!':
          ubpe4 && oky67(gsc), y0kgo = j1_mfr67(oky6gs, gsc, q2m1d8, osg0y);break;default:
          ubpe4 && oky67(gsc);var ko76 = new j1_njbpe5(),
              lgc0u4 = $zahx[$zahx['length'] - 0x1]['currentNSMap'],
              y0kgo = j1_s7ok6y(oky6gs, gsc, ko76, lgc0u4, ugolc0, osg0y),
              bejp = ko76['length'];if (!ko76['closed'] && j1_bue4pn(oky6gs, y0kgo, ko76['tagName'], zi8x) && (ko76['closed'] = !0x0, qd2i8['nbsp'] || osg0y['warning']('unclosed xml attribute')), ubpe4 && bejp) {
            for (var cu4e = j1_q128di(ubpe4, {}), ubl = 0x0; bejp > ubl; ubl++) {
              var kyrs = ko76[ubl];oky67(kyrs['offset']), kyrs['locator'] = j1_q128di(ubpe4, {});
            }q2m1d8['locator'] = cu4e, j1_x8zi92(ko76, q2m1d8, lgc0u4) && $zahx['push'](ko76), q2m1d8['locator'] = ubpe4;
          } else j1_x8zi92(ko76, q2m1d8, lgc0u4) && $zahx['push'](ko76);'http://www.w3.org/1999/xhtml' !== ko76['uri'] || ko76['closed'] ? y0kgo++ : y0kgo = j1_neu4b(oky6gs, y0kgo, ko76['tagName'], ugolc0, q2m1d8);}
    } catch (n35) {
      osg0y['error']('element parse error: ' + n35), y0kgo = -0x1;
    }y0kgo > clug04 ? clug04 = y0kgo : ai9z(Math['max'](gsc, clug04) + 0x1);
  }
}function j1_q128di(mqd28, bpu4) {
  return bpu4['lineNumber'] = mqd28['lineNumber'], bpu4['columnNumber'] = mqd28['columnNumber'], bpu4;
}function j1_s7ok6y(o6syk, d218i, mfd, jvn35w, goclu, xqdi8) {
  for (var f6rm71, ksr6f7, ug4cl0 = ++d218i, wp3n5 = j1_rf671;;) {
    var j5bn = o6syk['charAt'](ug4cl0);switch (j5bn) {case '=':
        if (wp3n5 === j1_lu4ecb) f6rm71 = o6syk['slice'](d218i, ug4cl0), wp3n5 = j1_k7f6mr;else {
          if (wp3n5 !== j1_jn5epb) throw new Error('attribute equal must after attrName');wp3n5 = j1_k7f6mr;
        }break;case '\x27':case '\x22':
        if (wp3n5 === j1_k7f6mr || wp3n5 === j1_lu4ecb) {
          if (wp3n5 === j1_lu4ecb && (xqdi8['warning']('attribute value must after "="'), f6rm71 = o6syk['slice'](d218i, ug4cl0)), d218i = ug4cl0 + 0x1, ug4cl0 = o6syk['indexOf'](j5bn, d218i), !(ug4cl0 > 0x0)) throw new Error('attribute value no end \'' + j5bn + '\' match');ksr6f7 = o6syk['slice'](d218i, ug4cl0)['replace'](/&#?\w+;/g, goclu), mfd['add'](f6rm71, ksr6f7, d218i - 0x1), wp3n5 = j1_xi9;
        } else {
          if (wp3n5 != j1_ok0gsy) throw new Error('attribute value must after "="');ksr6f7 = o6syk['slice'](d218i, ug4cl0)['replace'](/&#?\w+;/g, goclu), mfd['add'](f6rm71, ksr6f7, d218i), xqdi8['warning']('attribute "' + f6rm71 + '" missed start quot(' + j5bn + ')!!'), d218i = ug4cl0 + 0x1, wp3n5 = j1_xi9;
        }break;case '/':
        switch (wp3n5) {case j1_rf671:
            mfd['setTagName'](o6syk['slice'](d218i, ug4cl0));case j1_xi9:case j1_u4eb:case j1_xzha9$:
            wp3n5 = j1_xzha9$, mfd['closed'] = !0x0;case j1_ok0gsy:case j1_lu4ecb:case j1_jn5epb:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return xqdi8['error']('unexpected end of input'), wp3n5 == j1_rf671 && mfd['setTagName'](o6syk['slice'](d218i, ug4cl0)), ug4cl0;case '>':
        switch (wp3n5) {case j1_rf671:
            mfd['setTagName'](o6syk['slice'](d218i, ug4cl0));case j1_xi9:case j1_u4eb:case j1_xzha9$:
            break;case j1_ok0gsy:case j1_lu4ecb:
            ksr6f7 = o6syk['slice'](d218i, ug4cl0), '/' === ksr6f7['slice'](-0x1) && (mfd['closed'] = !0x0, ksr6f7 = ksr6f7['slice'](0x0, -0x1));case j1_jn5epb:
            wp3n5 === j1_jn5epb && (ksr6f7 = f6rm71), wp3n5 == j1_ok0gsy ? (xqdi8['warning']('attribute "' + ksr6f7 + '" missed quot(")!!'), mfd['add'](f6rm71, ksr6f7['replace'](/&#?\w+;/g, goclu), d218i)) : ('http://www.w3.org/1999/xhtml' === jvn35w[''] && ksr6f7['match'](/^(?:disabled|checked|selected)$/i) || xqdi8['warning']('attribute "' + ksr6f7 + '" missed value!! "' + ksr6f7 + '" instead!!'), mfd['add'](ksr6f7, ksr6f7, d218i));break;case j1_k7f6mr:
            throw new Error('attribute value missed!!');}return ug4cl0;case '\u0080':
        j5bn = '\x20';default:
        if ('\x20' >= j5bn) switch (wp3n5) {case j1_rf671:
            mfd['setTagName'](o6syk['slice'](d218i, ug4cl0)), wp3n5 = j1_u4eb;break;case j1_lu4ecb:
            f6rm71 = o6syk['slice'](d218i, ug4cl0), wp3n5 = j1_jn5epb;break;case j1_ok0gsy:
            var ksr6f7 = o6syk['slice'](d218i, ug4cl0)['replace'](/&#?\w+;/g, goclu);xqdi8['warning']('attribute "' + ksr6f7 + '" missed quot(")!!'), mfd['add'](f6rm71, ksr6f7, d218i);case j1_xi9:
            wp3n5 = j1_u4eb;} else switch (wp3n5) {case j1_jn5epb:
            {
              mfd['tagName'];
            }'http://www.w3.org/1999/xhtml' === jvn35w[''] && f6rm71['match'](/^(?:disabled|checked|selected)$/i) || xqdi8['warning']('attribute "' + f6rm71 + '" missed value!! "' + f6rm71 + '" instead2!!'), mfd['add'](f6rm71, f6rm71, d218i), d218i = ug4cl0, wp3n5 = j1_lu4ecb;break;case j1_xi9:
            xqdi8['warning']('attribute space is required"' + f6rm71 + '\x22!!');case j1_u4eb:
            wp3n5 = j1_lu4ecb, d218i = ug4cl0;break;case j1_k7f6mr:
            wp3n5 = j1_ok0gsy, d218i = ug4cl0;break;case j1_xzha9$:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ug4cl0++;
  }
}function j1_x8zi92(zha$, je35pn, cgl0ou) {
  for (var o7k = zha$['tagName'], ucl0g = null, eplb4 = zha$['length']; eplb4--;) {
    var k0gsoy = zha$[eplb4],
        m2 = k0gsoy['qName'],
        clg = k0gsoy['value'],
        rsy7k6 = m2['indexOf'](':');if (rsy7k6 > 0x0) var nej53p = k0gsoy['prefix'] = m2['slice'](0x0, rsy7k6),
        lceub4 = m2['slice'](rsy7k6 + 0x1),
        ai8z = 'xmlns' === nej53p && lceub4;else lceub4 = m2, nej53p = null, ai8z = 'xmlns' === m2 && '';k0gsoy['localName'] = lceub4, ai8z !== !0x1 && (null == ucl0g && (ucl0g = {}, j1_cgul40(cgl0ou, cgl0ou = {})), cgl0ou[ai8z] = ucl0g[ai8z] = clg, k0gsoy['uri'] = 'http://www.w3.org/2000/xmlns/', je35pn['startPrefixMapping'](ai8z, clg));
  }for (var eplb4 = zha$['length']; eplb4--;) {
    k0gsoy = zha$[eplb4];var nej53p = k0gsoy['prefix'];nej53p && ('xml' === nej53p && (k0gsoy['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== nej53p && (k0gsoy['uri'] = cgl0ou[nej53p || '']));
  }var rsy7k6 = o7k['indexOf'](':');rsy7k6 > 0x0 ? (nej53p = zha$['prefix'] = o7k['slice'](0x0, rsy7k6), lceub4 = zha$['localName'] = o7k['slice'](rsy7k6 + 0x1)) : (nej53p = null, lceub4 = zha$['localName'] = o7k);var ahizx = zha$['uri'] = cgl0ou[nej53p || ''];if (je35pn['startElement'](ahizx, lceub4, o7k, zha$), !zha$['closed']) return zha$['currentNSMap'] = cgl0ou, zha$['localNSMap'] = ucl0g, !0x0;if (je35pn['endElement'](ahizx, lceub4, o7k), ucl0g) {
    for (nej53p in ucl0g) je35pn['endPrefixMapping'](nej53p);
  }
}function j1_neu4b(epnub, nbj5p, bpeu4, npe53, nep3) {
  if (/^(?:script|textarea)$/i['test'](bpeu4)) {
    var zi9xh = epnub['indexOf']('</' + bpeu4 + '>', nbj5p),
        $a9 = epnub['substring'](nbj5p + 0x1, zi9xh);if (/[&<]/['test']($a9)) return (/^script$/i['test'](bpeu4) ? (nep3['characters']($a9, 0x0, $a9['length']), zi9xh) : ($a9 = $a9['replace'](/&#?\w+;/g, npe53), nep3['characters']($a9, 0x0, $a9['length']), zi9xh)
    );
  }return nbj5p + 0x1;
}function j1_bue4pn(nbep5, fmrk76, kyog6, gc0yo) {
  var ebn4pu = gc0yo[kyog6];return null == ebn4pu && (ebn4pu = nbep5['lastIndexOf']('</' + kyog6 + '>'), fmrk76 > ebn4pu && (ebn4pu = nbep5['lastIndexOf']('</' + kyog6)), gc0yo[kyog6] = ebn4pu), fmrk76 > ebn4pu;
}function j1_cgul40(osg0c, nj3wv5) {
  for (var ocu0g in osg0c) nj3wv5[ocu0g] = osg0c[ocu0g];
}function j1_mfr67(fr1qdm, pbje5n, g0lyoc, uep4lb) {
  var y6os7k = fr1qdm['charAt'](pbje5n + 0x2);switch (y6os7k) {case '-':
      if ('-' === fr1qdm['charAt'](pbje5n + 0x3)) {
        var cyo0sg = fr1qdm['indexOf']('-->', pbje5n + 0x4);return cyo0sg > pbje5n ? (g0lyoc['comment'](fr1qdm, pbje5n + 0x4, cyo0sg - pbje5n - 0x4), cyo0sg + 0x3) : (uep4lb['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == fr1qdm['substr'](pbje5n + 0x3, 0x6)) {
        var cyo0sg = fr1qdm['indexOf'](']]>', pbje5n + 0x9);return g0lyoc['startCDATA'](), g0lyoc['characters'](fr1qdm, pbje5n + 0x9, cyo0sg - pbje5n - 0x9), g0lyoc['endCDATA'](), cyo0sg + 0x3;
      }var e5pjnb = j1_skyo6(fr1qdm, pbje5n),
          peub = e5pjnb['length'];if (peub > 0x1 && /!doctype/i['test'](e5pjnb[0x0][0x0])) {
        var d9xi8 = e5pjnb[0x1][0x0],
            r6kys7 = peub > 0x3 && /^public$/i['test'](e5pjnb[0x2][0x0]) && e5pjnb[0x3][0x0],
            mk6fr7 = peub > 0x4 && e5pjnb[0x4][0x0],
            b4eplu = e5pjnb[peub - 0x1];return g0lyoc['startDTD'](d9xi8, r6kys7 && r6kys7['replace'](/^(['"])(.*?)\1$/, '$2'), mk6fr7 && mk6fr7['replace'](/^(['"])(.*?)\1$/, '$2')), g0lyoc['endDTD'](), b4eplu['index'] + b4eplu[0x0]['length'];
      }}return -0x1;
}function j1_xqd28i(pune4, wv5jn3, guol0c) {
  var x9zi8 = pune4['indexOf']('?>', wv5jn3);if (x9zi8) {
    var jpeb5n = pune4['substring'](wv5jn3, x9zi8)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (jpeb5n) {
      {
        jpeb5n[0x0]['length'];
      }return guol0c['processingInstruction'](jpeb5n[0x1], jpeb5n[0x2]), x9zi8 + 0x2;
    }return -0x1;
  }return -0x1;
}function j1_njbpe5() {}function j1_luc4g(s6y7, srfk67) {
  return s6y7['__proto__'] = srfk67, s6y7;
}function j1_skyo6(z9x2i, z9h$xa) {
  var q21i,
      yg6oks = [],
      nj5wp = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (nj5wp['lastIndex'] = z9h$xa, nj5wp['exec'](z9x2i); q21i = nj5wp['exec'](z9x2i);) if (yg6oks['push'](q21i), q21i[0x1]) return yg6oks;
}var j1_f76mr1 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    j1_k6rf7m = new RegExp('[\\-\\.0-9' + j1_f76mr1['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    j1_hizax = new RegExp('^' + j1_f76mr1['source'] + j1_k6rf7m['source'] + '*(?::' + j1_f76mr1['source'] + j1_k6rf7m['source'] + '*)?$'),
    j1_rf671 = 0x0,
    j1_lu4ecb = 0x1,
    j1_jn5epb = 0x2,
    j1_k7f6mr = 0x3,
    j1_ok0gsy = 0x4,
    j1_xi9 = 0x5,
    j1_u4eb = 0x6,
    j1_xzha9$ = 0x7;j1_y0gcs['prototype'] = { 'parse': function (cebu, v35, ha9x$z) {
    var ocl0u = this['domBuilder'];ocl0u['startDocument'](), j1_cgul40(v35, v35 = {}), j1_s6k7yo(cebu, v35, ha9x$z, ocl0u, this['errorHandler']), ocl0u['endDocument']();
  } }, j1_njbpe5['prototype'] = { 'setTagName': function (qix8) {
    if (!j1_hizax['test'](qix8)) throw new Error('invalid tagName:' + qix8);this['tagName'] = qix8;
  }, 'add': function (eup4, h9x$z, pbe45n) {
    if (!j1_hizax['test'](eup4)) throw new Error('invalid attribute:' + eup4);this[this['length']++] = { 'qName': eup4, 'value': h9x$z, 'offset': pbe45n };
  }, 'length': 0x0, 'getLocalName': function (ug0l4) {
    return this[ug0l4]['localName'];
  }, 'getLocator': function (axh9zi) {
    return this[axh9zi]['locator'];
  }, 'getQName': function (oc0yg) {
    return this[oc0yg]['qName'];
  }, 'getURI': function (qdmf21) {
    return this[qdmf21]['uri'];
  }, 'getValue': function (lueb4p) {
    return this[lueb4p]['value'];
  } }, j1_luc4g({}, j1_luc4g['prototype']) instanceof j1_luc4g || (j1_luc4g = function (mk67r, l04cg) {
  function goyk0s() {}goyk0s['prototype'] = l04cg, goyk0s = new goyk0s();for (l04cg in mk67r) goyk0s[l04cg] = mk67r[l04cg];return goyk0s;
}), exports['XMLReader'] = j1_y0gcs;