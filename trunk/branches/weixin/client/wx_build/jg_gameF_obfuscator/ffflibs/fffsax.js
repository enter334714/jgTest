var k = wx.$f;
function frtfqh() {}function fz5eyb(dyzb, at$3r, _n9x1, sn_ux, ar$t) {
  function n9j1k(d_w2ux) {
    var ns_91x = d_w2ux['slice'](0x1, -0x1);return ns_91x in _n9x1 ? _n9x1[ns_91x] : '#' === ns_91x['charAt'](0x0) ? 0xffff < (ns_91x = parseInt(ns_91x['substr'](0x1)['replace']('x', '0x'))) ? (ns_91x -= 0x10000, String['fromCharCode'](0xd800 + (ns_91x >> 0xa), 0xdc00 + (0x3ff & ns_91x))) : String['fromCharCode'](ns_91x) : (ar$t['error']('entity not found:' + d_w2ux), d_w2ux);
  }function z5byd2(b5z2du) {
    var agr0;tqf3rh < b5z2du && (agr0 = dyzb['substring'](tqf3rh, b5z2du)['replace'](/&#?\w+;/g, n9j1k), o60a8 && sk_91n(tqf3rh), sn_ux['characters'](agr0, 0x0, b5z2du - tqf3rh), tqf3rh = b5z2du);
  }function sk_91n(d5zbye, $3a) {
    for (; og8a06 <= d5zbye && ($3a = r36$a['exec'](dyzb));) bz2du5 = $3a['index'], og8a06 = bz2du5 + $3a[0x0]['length'], o60a8['lineNumber']++;o60a8['columnNumber'] = d5zbye - bz2du5 + 0x1;
  }for (var bz2du5 = 0x0, og8a06 = 0x0, r36$a = /.*(?:\r\n?|\n)|.*$/g, o60a8 = sn_ux['locator'], zdu = [{ 'currentNSMap': at$3r }], mce7yv = {}, tqf3rh = 0x0;;) {
    try {
      var rht36 = dyzb['indexOf']('<', tqf3rh),
          o$ga,
          s91jn;if (rht36 < 0x0) return void (dyzb['substr'](tqf3rh)['match'](/^\s*$/) || (s91jn = (o$ga = sn_ux['doc'])['createTextNode'](dyzb['substr'](tqf3rh)), o$ga['appendChild'](s91jn), sn_ux['currentElement'] = s91jn));switch (tqf3rh < rht36 && z5byd2(rht36), dyzb['charAt'](rht36 + 0x1)) {case '/':
          var g0a6r$ = dyzb['indexOf']('>', rht36 + 0x3),
              oj8kg = dyzb['substring'](rht36 + 0x2, g0a6r$),
              wuzd2x = zdu['pop']();g0a6r$ < 0x0 ? (oj8kg = dyzb['substring'](rht36 + 0x2)['replace'](/[\s<].*/, ''), ar$t['error']('end tag name: ' + oj8kg + ' is not complete:' + wuzd2x['tagName']), g0a6r$ = rht36 + 0x1 + oj8kg['length']) : oj8kg['match'](/\s</) && (oj8kg = oj8kg['replace'](/[\s<].*/, ''), ar$t['error']('end tag name: ' + oj8kg + ' maybe not complete'), g0a6r$ = rht36 + 0x1 + oj8kg['length']);var wz2xdu = wuzd2x['localNSMap'],
              hqp4 = wuzd2x['tagName'] == oj8kg;if (hqp4 || wuzd2x['tagName'] && wuzd2x['tagName']['toLowerCase']() == oj8kg['toLowerCase']()) {
            if (sn_ux['endElement'](wuzd2x['uri'], wuzd2x['localName'], oj8kg), wz2xdu) {
              for (var ko91j8 in wz2xdu) sn_ux['endPrefixMapping'](ko91j8);
            }hqp4 || ar$t['fatalError']('end tag name: ' + oj8kg + ' is not match the current start tagName:' + wuzd2x['tagName']);
          } else zdu['push'](wuzd2x);g0a6r$++;break;case '?':
          o60a8 && sk_91n(rht36), g0a6r$ = fk8ojg1(dyzb, rht36, sn_ux);break;case '!':
          o60a8 && sk_91n(rht36), g0a6r$ = fqhrft(dyzb, rht36, sn_ux, ar$t);break;default:
          o60a8 && sk_91n(rht36);var gaoj80 = new ft36ar$(),
              f4pihq = zdu[zdu['length'] - 0x1]['currentNSMap'],
              g0a6r$ = fa0$t6r(dyzb, rht36, gaoj80, f4pihq, n9j1k, ar$t),
              w2uxs_ = gaoj80['length'];if (!gaoj80['closed'] && fec5myv(dyzb, g0a6r$, gaoj80['tagName'], mce7yv) && (gaoj80['closed'] = !0x0, _n9x1['nbsp'] || ar$t['warning']('unclosed xml attribute')), o60a8 && w2uxs_) {
            for (var ogja = fk9n1js(o60a8, {}), xw2_su = 0x0; xw2_su < w2uxs_; xw2_su++) {
              var vec5ym = gaoj80[xw2_su];sk_91n(vec5ym['offset']), vec5ym['locator'] = fk9n1js(o60a8, {});
            }sn_ux['locator'] = ogja, fwnux_(gaoj80, sn_ux, f4pihq) && zdu['push'](gaoj80), sn_ux['locator'] = o60a8;
          } else fwnux_(gaoj80, sn_ux, f4pihq) && zdu['push'](gaoj80);'http://www.w3.org/1999/xhtml' !== gaoj80['uri'] || gaoj80['closed'] ? g0a6r$++ : g0a6r$ = fn_s9xw(dyzb, g0a6r$, gaoj80['tagName'], n9j1k, sn_ux);}
    } catch (nsx19_) {
      ar$t['error']('element parse error: ' + nsx19_), g0a6r$ = -0x1;
    }tqf3rh < g0a6r$ ? tqf3rh = g0a6r$ : z5byd2(Math['max'](rht36, tqf3rh) + 0x1);
  }
}function fk9n1js(ok89, uz5d) {
  return uz5d['lineNumber'] = ok89['lineNumber'], uz5d['columnNumber'] = ok89['columnNumber'], uz5d;
}function fa0$t6r(xu2zd, mvyb5, duxzw2, ok9j1, dzy5b, s9n) {
  for (var dz2bwu, cve = ++mvyb5, d2zb5u = fduw2b;;) {
    var y5mvbe = xu2zd['charAt'](cve);switch (y5mvbe) {case '=':
        if (d2zb5u === fmvc5ye) dz2bwu = xu2zd['slice'](mvyb5, cve), d2zb5u = fx_2uws;else {
          if (d2zb5u !== fw_xdu) throw new Error('attribute equal must after attrName');d2zb5u = fx_2uws;
        }break;case '\x27':case '\x22':
        if (d2zb5u === fx_2uws || d2zb5u === fmvc5ye) {
          if (d2zb5u === fmvc5ye && (s9n['warning']('attribute value must after "="'), dz2bwu = xu2zd['slice'](mvyb5, cve)), !(0x0 < (cve = xu2zd['indexOf'](y5mvbe, mvyb5 = cve + 0x1)))) throw new Error('attribute value no end \'' + y5mvbe + '\' match');s_k9n = xu2zd['slice'](mvyb5, cve)['replace'](/&#?\w+;/g, dzy5b), duxzw2['add'](dz2bwu, s_k9n, mvyb5 - 0x1), d2zb5u = fxu2d_w;
        } else {
          if (d2zb5u != f_2dxwu) throw new Error('attribute value must after "="');s_k9n = xu2zd['slice'](mvyb5, cve)['replace'](/&#?\w+;/g, dzy5b), duxzw2['add'](dz2bwu, s_k9n, mvyb5), s9n['warning']('attribute "' + dz2bwu + '" missed start quot(' + y5mvbe + ')!!'), mvyb5 = cve + 0x1, d2zb5u = fxu2d_w;
        }break;case '/':
        switch (d2zb5u) {case fduw2b:
            duxzw2['setTagName'](xu2zd['slice'](mvyb5, cve));case fxu2d_w:case fifh3t:case fg8j1o:
            d2zb5u = fg8j1o, duxzw2['closed'] = !0x0;case f_2dxwu:case fmvc5ye:case fw_xdu:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return s9n['error']('unexpected end of input'), d2zb5u == fduw2b && duxzw2['setTagName'](xu2zd['slice'](mvyb5, cve)), cve;case '>':
        switch (d2zb5u) {case fduw2b:
            duxzw2['setTagName'](xu2zd['slice'](mvyb5, cve));case fxu2d_w:case fifh3t:case fg8j1o:
            break;case f_2dxwu:case fmvc5ye:
            '/' === (s_k9n = xu2zd['slice'](mvyb5, cve))['slice'](-0x1) && (duxzw2['closed'] = !0x0, s_k9n = s_k9n['slice'](0x0, -0x1));case fw_xdu:
            d2zb5u === fw_xdu && (s_k9n = dz2bwu), d2zb5u == f_2dxwu ? (s9n['warning']('attribute "' + s_k9n + '" missed quot(")!!'), duxzw2['add'](dz2bwu, s_k9n['replace'](/&#?\w+;/g, dzy5b), mvyb5)) : ('http://www.w3.org/1999/xhtml' === ok9j1[''] && s_k9n['match'](/^(?:disabled|checked|selected)$/i) || s9n['warning']('attribute "' + s_k9n + '" missed value!! "' + s_k9n + '" instead!!'), duxzw2['add'](s_k9n, s_k9n, mvyb5));break;case fx_2uws:
            throw new Error('attribute value missed!!');}return cve;case '\u0080':
        y5mvbe = '\x20';default:
        if (y5mvbe <= '\x20') switch (d2zb5u) {case fduw2b:
            duxzw2['setTagName'](xu2zd['slice'](mvyb5, cve)), d2zb5u = fifh3t;break;case fmvc5ye:
            dz2bwu = xu2zd['slice'](mvyb5, cve), d2zb5u = fw_xdu;break;case f_2dxwu:
            var s_k9n = xu2zd['slice'](mvyb5, cve)['replace'](/&#?\w+;/g, dzy5b);s9n['warning']('attribute "' + s_k9n + '" missed quot(")!!'), duxzw2['add'](dz2bwu, s_k9n, mvyb5);case fxu2d_w:
            d2zb5u = fifh3t;} else switch (d2zb5u) {case fw_xdu:
            duxzw2['tagName'], 'http://www.w3.org/1999/xhtml' === ok9j1[''] && dz2bwu['match'](/^(?:disabled|checked|selected)$/i) || s9n['warning']('attribute "' + dz2bwu + '" missed value!! "' + dz2bwu + '" instead2!!'), duxzw2['add'](dz2bwu, dz2bwu, mvyb5), mvyb5 = cve, d2zb5u = fmvc5ye;break;case fxu2d_w:
            s9n['warning']('attribute space is required"' + dz2bwu + '\x22!!');case fifh3t:
            d2zb5u = fmvc5ye, mvyb5 = cve;break;case fx_2uws:
            d2zb5u = f_2dxwu, mvyb5 = cve;break;case fg8j1o:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}cve++;
  }
}function fwnux_(pif3q, ns_xuw, d5yz) {
  for (var cevym7 = pif3q['tagName'], _wn9xs = null, d_2x = pif3q['length']; d_2x--;) {
    var r3ht6 = pif3q[d_2x],
        $r6at3 = r3ht6['qName'],
        cmy = r3ht6['value'],
        b52zdy;$r6at3 = 0x0 < (oj98k1 = $r6at3['indexOf'](':')) ? (a0r6$t = r3ht6['prefix'] = $r6at3['slice'](0x0, oj98k1), b52zdy = $r6at3['slice'](oj98k1 + 0x1), 'xmlns' === a0r6$t && b52zdy) : (a0r6$t = null, 'xmlns' === (b52zdy = $r6at3) && ''), r3ht6['localName'] = b52zdy, !0x1 !== $r6at3 && (null == _wn9xs && (_wn9xs = {}, fn_sw(d5yz, d5yz = {})), d5yz[$r6at3] = _wn9xs[$r6at3] = cmy, r3ht6['uri'] = 'http://www.w3.org/2000/xmlns/', ns_xuw['startPrefixMapping']($r6at3, cmy));
  }for (d_2x = pif3q['length']; d_2x--;) (a0r6$t = (r3ht6 = pif3q[d_2x])['prefix']) && ('xml' === a0r6$t && (r3ht6['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== a0r6$t && (r3ht6['uri'] = d5yz[a0r6$t || '']));var oj98k1;b52zdy = 0x0 < (oj98k1 = cevym7['indexOf'](':')) ? (a0r6$t = pif3q['prefix'] = cevym7['slice'](0x0, oj98k1), pif3q['localName'] = cevym7['slice'](oj98k1 + 0x1)) : (a0r6$t = null, pif3q['localName'] = cevym7);var j8ok1g = pif3q['uri'] = d5yz[a0r6$t || ''];if (ns_xuw['startElement'](j8ok1g, b52zdy, cevym7, pif3q), !pif3q['closed']) return pif3q['currentNSMap'] = d5yz, pif3q['localNSMap'] = _wn9xs, !0x0;if (ns_xuw['endElement'](j8ok1g, b52zdy, cevym7), _wn9xs) {
    for (var a0r6$t in _wn9xs) ns_xuw['endPrefixMapping'](a0r6$t);
  }
}function fn_s9xw(ogj1k, $arg0, $6aog, j08ga, arg) {
  if (/^(?:script|textarea)$/i['test']($6aog)) {
    var swn_u = ogj1k['indexOf']('</' + $6aog + '>', $arg0),
        ogj1k = ogj1k['substring']($arg0 + 0x1, swn_u);if (/[&<]/['test'](ogj1k)) return (/^script$/i['test']($6aog) || (ogj1k = ogj1k['replace'](/&#?\w+;/g, j08ga)), arg['characters'](ogj1k, 0x0, ogj1k['length']), swn_u
    );
  }return $arg0 + 0x1;
}function fec5myv(bu2dwz, rt$a60, zby5em, bed5) {
  var hq4fi = bed5[zby5em];return null == hq4fi && ((hq4fi = bu2dwz['lastIndexOf']('</' + zby5em + '>')) < rt$a60 && (hq4fi = bu2dwz['lastIndexOf']('</' + zby5em)), bed5[zby5em] = hq4fi), hq4fi < rt$a60;
}function fn_sw(f4phiq, x_sun) {
  for (var ar6t$ in f4phiq) x_sun[ar6t$] = f4phiq[ar6t$];
}function fqhrft($60a, jk0o8g, b5ezmy, bdy5ez) {
  var $rt6a3 = $60a['charAt'](jk0o8g + 0x2);if ('-' === $rt6a3) return '-' !== $60a['charAt'](jk0o8g + 0x3) ? -0x1 : jk0o8g < (ao08 = $60a['indexOf']('-->', jk0o8g + 0x4)) ? (b5ezmy['comment']($60a, jk0o8g + 0x4, ao08 - jk0o8g - 0x4), ao08 + 0x3) : (bdy5ez['error']('Unclosed comment'), -0x1);if ('CDATA[' == $60a['substr'](jk0o8g + 0x3, 0x6)) {
    var ao08 = $60a['indexOf'](']]>', jk0o8g + 0x9);return b5ezmy['startCDATA'](), b5ezmy['characters']($60a, jk0o8g + 0x9, ao08 - jk0o8g - 0x9), b5ezmy['endCDATA'](), ao08 + 0x3;
  }$rt6a3 = fwdu2($60a, jk0o8g), bdy5ez = $rt6a3['length'];if (0x1 < bdy5ez && /!doctype/i['test']($rt6a3[0x0][0x0])) return ao08 = $rt6a3[0x1][0x0], $60a = 0x3 < bdy5ez && /^public$/i['test']($rt6a3[0x2][0x0]) && $rt6a3[0x3][0x0], jk0o8g = 0x4 < bdy5ez && $rt6a3[0x4][0x0], bdy5ez = $rt6a3[bdy5ez - 0x1], (b5ezmy['startDTD'](ao08, $60a && $60a['replace'](/^(['"])(.*?)\1$/, '$2'), jk0o8g && jk0o8g['replace'](/^(['"])(.*?)\1$/, '$2')), b5ezmy['endDTD'](), bdy5ez['index'] + bdy5ez[0x0]['length']);return -0x1;
}function fk8ojg1(okg1j, uwbzd2, yd5ezb) {
  var tr3$a = okg1j['indexOf']('?>', uwbzd2);if (tr3$a) return uwbzd2 = okg1j['substring'](uwbzd2, tr3$a)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), uwbzd2 ? (uwbzd2[0x0]['length'], yd5ezb['processingInstruction'](uwbzd2[0x1], uwbzd2[0x2]), tr3$a + 0x2) : -0x1;return -0x1;
}function ft36ar$() {}function fphqi4(o$60ga, o08gk) {
  return o$60ga['__proto__'] = o08gk, o$60ga;
}function fwdu2(yv7c, zdy25) {
  var s9wn,
      z5ebmy = [],
      $tar06 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for ($tar06['lastIndex'] = zdy25, $tar06['exec'](yv7c); s9wn = $tar06['exec'](yv7c);) if (z5ebmy['push'](s9wn), s9wn[0x1]) return z5ebmy;
}var ffq4phi = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fymz5be = new RegExp('[\\-\\.0-9' + ffq4phi['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fn98k = new RegExp('^' + ffq4phi['source'] + fymz5be['source'] + '*(?::' + ffq4phi['source'] + fymz5be['source'] + '*)?$'),
    fduw2b = 0x0,
    fmvc5ye = 0x1,
    fw_xdu = 0x2,
    fx_2uws = 0x3,
    f_2dxwu = 0x4,
    fxu2d_w = 0x5,
    fifh3t = 0x6,
    fg8j1o = 0x7;frtfqh['prototype'] = { 'parse': function (k0o8j, f3$h, wsxnu_) {
    var g06$ra = this['domBuilder'];g06$ra['startDocument'](), fn_sw(f3$h, f3$h = {}), fz5eyb(k0o8j, f3$h, wsxnu_, g06$ra, this['errorHandler']), g06$ra['endDocument']();
  } }, ft36ar$['prototype'] = { 'setTagName': function (g0a86o) {
    if (!fn98k['test'](g0a86o)) throw new Error('invalid tagName:' + g0a86o);this['tagName'] = g0a86o;
  }, 'add': function (ux2wz, tra$3, w2x_us) {
    if (!fn98k['test'](ux2wz)) throw new Error('invalid attribute:' + ux2wz);this[this['length']++] = { 'qName': ux2wz, 'value': tra$3, 'offset': w2x_us };
  }, 'length': 0x0, 'getLocalName': function ($a6r3) {
    return this[$a6r3]['localName'];
  }, 'getLocator': function (ebmyv) {
    return this[ebmyv]['locator'];
  }, 'getQName': function (zybe5m) {
    return this[zybe5m]['qName'];
  }, 'getURI': function (jnk98) {
    return this[jnk98]['uri'];
  }, 'getValue': function (zxduw) {
    return this[zxduw]['value'];
  } }, fphqi4({}, fphqi4['prototype']) instanceof fphqi4 || (fphqi4 = function (ebzym5, t3rh) {
  function a0g6r$() {}for (t3rh in a0g6r$['prototype'] = t3rh, a0g6r$ = new a0g6r$(), ebzym5) a0g6r$[t3rh] = ebzym5[t3rh];return a0g6r$;
}), exports['XMLReader'] = frtfqh;