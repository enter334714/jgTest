var b = wx.$e;
function ekd4_() {}function ethxq3u(imgvz, tx$uj3, x3quh, iz0m, wk71b) {
  function se2var(by1k7) {
    var n_5d64 = by1k7['slice'](0x1, -0x1);return n_5d64 in x3quh ? x3quh[n_5d64] : '#' === n_5d64['charAt'](0x0) ? 0xffff < (n_5d64 = parseInt(n_5d64['substr'](0x1)['replace']('x', '0x'))) ? (n_5d64 -= 0x10000, String['fromCharCode'](0xd800 + (n_5d64 >> 0xa), 0xdc00 + (0x3ff & n_5d64))) : String['fromCharCode'](n_5d64) : (wk71b['error']('entity not found:' + by1k7), by1k7);
  }function by7swp(ra2eps) {
    var d4n9_8;q3$txu < ra2eps && (d4n9_8 = imgvz['substring'](q3$txu, ra2eps)['replace'](/&#?\w+;/g, se2var), dn845_ && jixz(q3$txu), iz0m['characters'](d4n9_8, 0x0, ra2eps - q3$txu), q3$txu = ra2eps);
  }function jixz(ea2rsv, sa2e) {
    for (; q$x3 <= ea2rsv && (sa2e = jzgi0['exec'](imgvz));) uhqxtl = sa2e['index'], q$x3 = uhqxtl + sa2e[0x0]['length'], dn845_['lineNumber']++;dn845_['columnNumber'] = ea2rsv - uhqxtl + 0x1;
  }for (var uhqxtl = 0x0, q$x3 = 0x0, jzgi0 = /.*(?:\r\n?|\n)|.*$/g, dn845_ = iz0m['locator'], avsre2 = [{ 'currentNSMap': tx$uj3 }], rpb2es = {}, q3$txu = 0x0;;) {
    try {
      var _8491k = imgvz['indexOf']('<', q3$txu),
          xthqlu,
          zm0igv;if (_8491k < 0x0) return void (imgvz['substr'](q3$txu)['match'](/^\s*$/) || (zm0igv = (xthqlu = iz0m['doc'])['createTextNode'](imgvz['substr'](q3$txu)), xthqlu['appendChild'](zm0igv), iz0m['currentElement'] = zm0igv));switch (q3$txu < _8491k && by7swp(_8491k), imgvz['charAt'](_8491k + 0x1)) {case '/':
          var xhq3tu = imgvz['indexOf']('>', _8491k + 0x3),
              xji = imgvz['substring'](_8491k + 0x2, xhq3tu),
              gv2r0a = avsre2['pop']();xhq3tu < 0x0 ? (xji = imgvz['substring'](_8491k + 0x2)['replace'](/[\s<].*/, ''), wk71b['error']('end tag name: ' + xji + ' is not complete:' + gv2r0a['tagName']), xhq3tu = _8491k + 0x1 + xji['length']) : xji['match'](/\s</) && (xji = xji['replace'](/[\s<].*/, ''), wk71b['error']('end tag name: ' + xji + ' maybe not complete'), xhq3tu = _8491k + 0x1 + xji['length']);var bswpre = gv2r0a['localNSMap'],
              sewpbr = gv2r0a['tagName'] == xji;if (sewpbr || gv2r0a['tagName'] && gv2r0a['tagName']['toLowerCase']() == xji['toLowerCase']()) {
            if (iz0m['endElement'](gv2r0a['uri'], gv2r0a['localName'], xji), bswpre) {
              for (var wy7bp1 in bswpre) iz0m['endPrefixMapping'](wy7bp1);
            }sewpbr || wk71b['fatalError']('end tag name: ' + xji + ' is not match the current start tagName:' + gv2r0a['tagName']);
          } else avsre2['push'](gv2r0a);xhq3tu++;break;case '?':
          dn845_ && jixz(_8491k), xhq3tu = efd65no(imgvz, _8491k, iz0m);break;case '!':
          dn845_ && jixz(_8491k), xhq3tu = egjmz(imgvz, _8491k, iz0m, wk71b);break;default:
          dn845_ && jixz(_8491k);var k9y78 = new etjxi(),
              uhxtlq = avsre2[avsre2['length'] - 0x1]['currentNSMap'],
              xhq3tu = exi3$t(imgvz, _8491k, k9y78, uhxtlq, se2var, wk71b),
              k9y1w7 = k9y78['length'];if (!k9y78['closed'] && e$x3jz(imgvz, xhq3tu, k9y78['tagName'], rpb2es) && (k9y78['closed'] = !0x0, x3quh['nbsp'] || wk71b['warning']('unclosed xml attribute')), dn845_ && k9y1w7) {
            for (var b1wpy7 = ek9_481(dn845_, {}), brep2s = 0x0; brep2s < k9y1w7; brep2s++) {
              var resp2 = k9y78[brep2s];jixz(resp2['offset']), resp2['locator'] = ek9_481(dn845_, {});
            }iz0m['locator'] = b1wpy7, epb17(k9y78, iz0m, uhxtlq) && avsre2['push'](k9y78), iz0m['locator'] = dn845_;
          } else epb17(k9y78, iz0m, uhxtlq) && avsre2['push'](k9y78);'http://www.w3.org/1999/xhtml' !== k9y78['uri'] || k9y78['closed'] ? xhq3tu++ : xhq3tu = ek9_817(imgvz, xhq3tu, k9y78['tagName'], se2var, iz0m);}
    } catch (r0a2) {
      wk71b['error']('element parse error: ' + r0a2), xhq3tu = -0x1;
    }q3$txu < xhq3tu ? q3$txu = xhq3tu : by7swp(Math['max'](_8491k, q3$txu) + 0x1);
  }
}function ek9_481(tqxuh, zgi0jm) {
  return zgi0jm['lineNumber'] = tqxuh['lineNumber'], zgi0jm['columnNumber'] = tqxuh['columnNumber'], zgi0jm;
}function exi3$t(a2v0m, $3zjm, e2sar, u$t3q, y87, i$3) {
  for (var igz0mj, yepb = ++$3zjm, jmi$3 = eiz0gjm;;) {
    var _k8491 = a2v0m['charAt'](yepb);switch (_k8491) {case '=':
        if (jmi$3 === eimz3j$) igz0mj = a2v0m['slice']($3zjm, yepb), jmi$3 = eit$j3x;else {
          if (jmi$3 !== ebepwy) throw new Error('attribute equal must after attrName');jmi$3 = eit$j3x;
        }break;case '\x27':case '\x22':
        if (jmi$3 === eit$j3x || jmi$3 === eimz3j$) {
          if (jmi$3 === eimz3j$ && (i$3['warning']('attribute value must after "="'), igz0mj = a2v0m['slice']($3zjm, yepb)), !(0x0 < (yepb = a2v0m['indexOf'](_k8491, $3zjm = yepb + 0x1)))) throw new Error('attribute value no end \'' + _k8491 + '\' match');zim$0 = a2v0m['slice']($3zjm, yepb)['replace'](/&#?\w+;/g, y87), e2sar['add'](igz0mj, zim$0, $3zjm - 0x1), jmi$3 = ejx$3it;
        } else {
          if (jmi$3 != eof56nd) throw new Error('attribute value must after "="');zim$0 = a2v0m['slice']($3zjm, yepb)['replace'](/&#?\w+;/g, y87), e2sar['add'](igz0mj, zim$0, $3zjm), i$3['warning']('attribute "' + igz0mj + '" missed start quot(' + _k8491 + ')!!'), $3zjm = yepb + 0x1, jmi$3 = ejx$3it;
        }break;case '/':
        switch (jmi$3) {case eiz0gjm:
            e2sar['setTagName'](a2v0m['slice']($3zjm, yepb));case ejx$3it:case eva0gr2:case etj3i$x:
            jmi$3 = etj3i$x, e2sar['closed'] = !0x0;case eof56nd:case eimz3j$:case ebepwy:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return i$3['error']('unexpected end of input'), jmi$3 == eiz0gjm && e2sar['setTagName'](a2v0m['slice']($3zjm, yepb)), yepb;case '>':
        switch (jmi$3) {case eiz0gjm:
            e2sar['setTagName'](a2v0m['slice']($3zjm, yepb));case ejx$3it:case eva0gr2:case etj3i$x:
            break;case eof56nd:case eimz3j$:
            '/' === (zim$0 = a2v0m['slice']($3zjm, yepb))['slice'](-0x1) && (e2sar['closed'] = !0x0, zim$0 = zim$0['slice'](0x0, -0x1));case ebepwy:
            jmi$3 === ebepwy && (zim$0 = igz0mj), jmi$3 == eof56nd ? (i$3['warning']('attribute "' + zim$0 + '" missed quot(")!!'), e2sar['add'](igz0mj, zim$0['replace'](/&#?\w+;/g, y87), $3zjm)) : ('http://www.w3.org/1999/xhtml' === u$t3q[''] && zim$0['match'](/^(?:disabled|checked|selected)$/i) || i$3['warning']('attribute "' + zim$0 + '" missed value!! "' + zim$0 + '" instead!!'), e2sar['add'](zim$0, zim$0, $3zjm));break;case eit$j3x:
            throw new Error('attribute value missed!!');}return yepb;case '\u0080':
        _k8491 = '\x20';default:
        if (_k8491 <= '\x20') switch (jmi$3) {case eiz0gjm:
            e2sar['setTagName'](a2v0m['slice']($3zjm, yepb)), jmi$3 = eva0gr2;break;case eimz3j$:
            igz0mj = a2v0m['slice']($3zjm, yepb), jmi$3 = ebepwy;break;case eof56nd:
            var zim$0 = a2v0m['slice']($3zjm, yepb)['replace'](/&#?\w+;/g, y87);i$3['warning']('attribute "' + zim$0 + '" missed quot(")!!'), e2sar['add'](igz0mj, zim$0, $3zjm);case ejx$3it:
            jmi$3 = eva0gr2;} else switch (jmi$3) {case ebepwy:
            e2sar['tagName'], 'http://www.w3.org/1999/xhtml' === u$t3q[''] && igz0mj['match'](/^(?:disabled|checked|selected)$/i) || i$3['warning']('attribute "' + igz0mj + '" missed value!! "' + igz0mj + '" instead2!!'), e2sar['add'](igz0mj, igz0mj, $3zjm), $3zjm = yepb, jmi$3 = eimz3j$;break;case ejx$3it:
            i$3['warning']('attribute space is required"' + igz0mj + '\x22!!');case eva0gr2:
            jmi$3 = eimz3j$, $3zjm = yepb;break;case eit$j3x:
            jmi$3 = eof56nd, $3zjm = yepb;break;case etj3i$x:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}yepb++;
  }
}function epb17(j0mzi, $ijx3, vra2s) {
  for (var _6n45d = j0mzi['tagName'], nf5od6 = null, vg2are = j0mzi['length']; vg2are--;) {
    var jixz$3 = j0mzi[vg2are],
        z3$jx = jixz$3['qName'],
        jt$x3u = jixz$3['value'],
        htqlux;z3$jx = 0x0 < (d45n6f = z3$jx['indexOf'](':')) ? (u3xjt = jixz$3['prefix'] = z3$jx['slice'](0x0, d45n6f), htqlux = z3$jx['slice'](d45n6f + 0x1), 'xmlns' === u3xjt && htqlux) : (u3xjt = null, 'xmlns' === (htqlux = z3$jx) && ''), jixz$3['localName'] = htqlux, !0x1 !== z3$jx && (null == nf5od6 && (nf5od6 = {}, e$3xtu(vra2s, vra2s = {})), vra2s[z3$jx] = nf5od6[z3$jx] = jt$x3u, jixz$3['uri'] = 'http://www.w3.org/2000/xmlns/', $ijx3['startPrefixMapping'](z3$jx, jt$x3u));
  }for (vg2are = j0mzi['length']; vg2are--;) (u3xjt = (jixz$3 = j0mzi[vg2are])['prefix']) && ('xml' === u3xjt && (jixz$3['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== u3xjt && (jixz$3['uri'] = vra2s[u3xjt || '']));var d45n6f;htqlux = 0x0 < (d45n6f = _6n45d['indexOf'](':')) ? (u3xjt = j0mzi['prefix'] = _6n45d['slice'](0x0, d45n6f), j0mzi['localName'] = _6n45d['slice'](d45n6f + 0x1)) : (u3xjt = null, j0mzi['localName'] = _6n45d);var z$jm3 = j0mzi['uri'] = vra2s[u3xjt || ''];if ($ijx3['startElement'](z$jm3, htqlux, _6n45d, j0mzi), !j0mzi['closed']) return j0mzi['currentNSMap'] = vra2s, j0mzi['localNSMap'] = nf5od6, !0x0;if ($ijx3['endElement'](z$jm3, htqlux, _6n45d), nf5od6) {
    for (var u3xjt in nf5od6) $ijx3['endPrefixMapping'](u3xjt);
  }
}function ek9_817(t$j3u, seyp, ear2vg, zm0gij, k8d94_) {
  if (/^(?:script|textarea)$/i['test'](ear2vg)) {
    var qlxth = t$j3u['indexOf']('</' + ear2vg + '>', seyp),
        t$j3u = t$j3u['substring'](seyp + 0x1, qlxth);if (/[&<]/['test'](t$j3u)) return (/^script$/i['test'](ear2vg) || (t$j3u = t$j3u['replace'](/&#?\w+;/g, zm0gij)), k8d94_['characters'](t$j3u, 0x0, t$j3u['length']), qlxth
    );
  }return seyp + 0x1;
}function e$x3jz(imvg0z, rpbwes, hxqult, d56fon) {
  var seb2p = d56fon[hxqult];return null == seb2p && ((seb2p = imvg0z['lastIndexOf']('</' + hxqult + '>')) < rpbwes && (seb2p = imvg0z['lastIndexOf']('</' + hxqult)), d56fon[hxqult] = seb2p), seb2p < rpbwes;
}function e$3xtu(y19k78, ers2av) {
  for (var htul in y19k78) ers2av[htul] = y19k78[htul];
}function egjmz(jim3z, ywk791, a2rveg, k17ywb) {
  var p7y1bw = jim3z['charAt'](ywk791 + 0x2);if ('-' === p7y1bw) return '-' !== jim3z['charAt'](ywk791 + 0x3) ? -0x1 : ywk791 < (_4k89 = jim3z['indexOf']('-->', ywk791 + 0x4)) ? (a2rveg['comment'](jim3z, ywk791 + 0x4, _4k89 - ywk791 - 0x4), _4k89 + 0x3) : (k17ywb['error']('Unclosed comment'), -0x1);if ('CDATA[' == jim3z['substr'](ywk791 + 0x3, 0x6)) {
    var _4k89 = jim3z['indexOf'](']]>', ywk791 + 0x9);return a2rveg['startCDATA'](), a2rveg['characters'](jim3z, ywk791 + 0x9, _4k89 - ywk791 - 0x9), a2rveg['endCDATA'](), _4k89 + 0x3;
  }p7y1bw = etjx$u3(jim3z, ywk791), k17ywb = p7y1bw['length'];if (0x1 < k17ywb && /!doctype/i['test'](p7y1bw[0x0][0x0])) return _4k89 = p7y1bw[0x1][0x0], jim3z = 0x3 < k17ywb && /^public$/i['test'](p7y1bw[0x2][0x0]) && p7y1bw[0x3][0x0], ywk791 = 0x4 < k17ywb && p7y1bw[0x4][0x0], k17ywb = p7y1bw[k17ywb - 0x1], (a2rveg['startDTD'](_4k89, jim3z && jim3z['replace'](/^(['"])(.*?)\1$/, '$2'), ywk791 && ywk791['replace'](/^(['"])(.*?)\1$/, '$2')), a2rveg['endDTD'](), k17ywb['index'] + k17ywb[0x0]['length']);return -0x1;
}function efd65no(rbp2e, hutlxq, rvg0a) {
  var ypbswe = rbp2e['indexOf']('?>', hutlxq);if (ypbswe) return hutlxq = rbp2e['substring'](hutlxq, ypbswe)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), hutlxq ? (hutlxq[0x0]['length'], rvg0a['processingInstruction'](hutlxq[0x1], hutlxq[0x2]), ypbswe + 0x2) : -0x1;return -0x1;
}function etjxi() {}function edn89_(huxqt3, vrg2ea) {
  return huxqt3['__proto__'] = vrg2ea, huxqt3;
}function etjx$u3(lhutq, gma0) {
  var o5df6,
      zj3$xi = [],
      huq3x = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (huq3x['lastIndex'] = gma0, huq3x['exec'](lhutq); o5df6 = huq3x['exec'](lhutq);) if (zj3$xi['push'](o5df6), o5df6[0x1]) return zj3$xi;
}var e$zmij = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    em$0i = new RegExp('[\\-\\.0-9' + e$zmij['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    extu3h = new RegExp('^' + e$zmij['source'] + em$0i['source'] + '*(?::' + e$zmij['source'] + em$0i['source'] + '*)?$'),
    eiz0gjm = 0x0,
    eimz3j$ = 0x1,
    ebepwy = 0x2,
    eit$j3x = 0x3,
    eof56nd = 0x4,
    ejx$3it = 0x5,
    eva0gr2 = 0x6,
    etj3i$x = 0x7;ekd4_['prototype'] = { 'parse': function (wpsebr, i$0m, $ju3x) {
    var bywesp = this['domBuilder'];bywesp['startDocument'](), e$3xtu(i$0m, i$0m = {}), ethxq3u(wpsebr, i$0m, $ju3x, bywesp, this['errorHandler']), bywesp['endDocument']();
  } }, etjxi['prototype'] = { 'setTagName': function (n4_d65) {
    if (!extu3h['test'](n4_d65)) throw new Error('invalid tagName:' + n4_d65);this['tagName'] = n4_d65;
  }, 'add': function (persa2, mig0zv, $jx3t) {
    if (!extu3h['test'](persa2)) throw new Error('invalid attribute:' + persa2);this[this['length']++] = { 'qName': persa2, 'value': mig0zv, 'offset': $jx3t };
  }, 'length': 0x0, 'getLocalName': function (mvg20a) {
    return this[mvg20a]['localName'];
  }, 'getLocator': function (qux3ht) {
    return this[qux3ht]['locator'];
  }, 'getQName': function (t$q3u) {
    return this[t$q3u]['qName'];
  }, 'getURI': function (iv0zg) {
    return this[iv0zg]['uri'];
  }, 'getValue': function (a2sv) {
    return this[a2sv]['value'];
  } }, edn89_({}, edn89_['prototype']) instanceof edn89_ || (edn89_ = function (raep2s, n64df) {
  function jmz$() {}for (n64df in jmz$['prototype'] = n64df, jmz$ = new jmz$(), raep2s) jmz$[n64df] = raep2s[n64df];return jmz$;
}), exports['XMLReader'] = ekd4_;