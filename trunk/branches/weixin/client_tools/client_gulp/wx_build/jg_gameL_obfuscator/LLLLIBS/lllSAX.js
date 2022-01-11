var W = wx.$l;
function L9ajqkhz() {}function L9ogev17(g1u6ep, r0xyn, jahbzk, zt5flq, _ny48) {
  function s$48_n(dsa$2) {
    if (dsa$2 > 0xffff) {
      dsa$2 -= 0x10000;var eup16 = 0xd800 + (dsa$2 >> 0xa),
          kahjz = 0xdc00 + (0x3ff & dsa$2);return String['fromCharCode'](eup16, kahjz);
    }return String['fromCharCode'](dsa$2);
  }function hzjl(jkzbh) {
    var kabd2j = jkzbh['slice'](0x1, -0x1);return kabd2j in jahbzk ? jahbzk[kabd2j] : '#' === kabd2j['charAt'](0x0) ? s$48_n(parseInt(kabd2j['substr'](0x1)['replace']('x', '0x'))) : (_ny48['error']('entity not found:' + jkzbh), jkzbh);
  }function n3_(adkj) {
    if (adkj > zjkba) {
      var abd2$s = g1u6ep['substring'](zjkba, adkj)['replace'](/&#?\w+;/g, hzjl);$4d && y3m0rc(zjkba), zt5flq['characters'](abd2$s, 0x0, adkj - zjkba), zjkba = adkj;
    }
  }function y3m0rc(lq, lz5q) {
    for (; lq >= a2k$b && (lz5q = lqzth5['exec'](g1u6ep));) ljhzt = lz5q['index'], a2k$b = ljhzt + lz5q[0x0]['length'], $4d['lineNumber']++;$4d['columnNumber'] = lq - ljhzt + 0x1;
  }for (var ljhzt = 0x0, a2k$b = 0x0, lqzth5 = /.*(?:\r\n?|\n)|.*$/g, $4d = zt5flq['locator'], t5ofl = [{ 'currentNSMap': r0xyn }], g1u6p = {}, zjkba = 0x0;;) {
    try {
      var tf57 = g1u6ep['indexOf']('<', zjkba);if (0x0 > tf57) {
        if (!g1u6ep['substr'](zjkba)['match'](/^\s*$/)) {
          var qjazhk = zt5flq['doc'],
              tfq5l = qjazhk['createTextNode'](g1u6ep['substr'](zjkba));qjazhk['appendChild'](tfq5l), zt5flq['currentElement'] = tfq5l;
        }return;
      }switch (tf57 > zjkba && n3_(tf57), g1u6ep['charAt'](tf57 + 0x1)) {case '/':
          var n0ryx = g1u6ep['indexOf']('>', tf57 + 0x3),
              i3wmrc = g1u6ep['substring'](tf57 + 0x2, n0ryx),
              d$ba2 = t5ofl['pop']();0x0 > n0ryx ? (i3wmrc = g1u6ep['substring'](tf57 + 0x2)['replace'](/[\s<].*/, ''), _ny48['error']('end tag name: ' + i3wmrc + ' is not complete:' + d$ba2['tagName']), n0ryx = tf57 + 0x1 + i3wmrc['length']) : i3wmrc['match'](/\s</) && (i3wmrc = i3wmrc['replace'](/[\s<].*/, ''), _ny48['error']('end tag name: ' + i3wmrc + ' maybe not complete'), n0ryx = tf57 + 0x1 + i3wmrc['length']);var sd824 = d$ba2['localNSMap'],
              _d4$s = d$ba2['tagName'] == i3wmrc,
              b$a2 = _d4$s || d$ba2['tagName'] && d$ba2['tagName']['toLowerCase']() == i3wmrc['toLowerCase']();if (b$a2) {
            if (zt5flq['endElement'](d$ba2['uri'], d$ba2['localName'], i3wmrc), sd824) {
              for (var zkljhq in sd824) zt5flq['endPrefixMapping'](zkljhq);
            }_d4$s || _ny48['fatalError']('end tag name: ' + i3wmrc + ' is not match the current start tagName:' + d$ba2['tagName']);
          } else t5ofl['push'](d$ba2);n0ryx++;break;case '?':
          $4d && y3m0rc(tf57), n0ryx = L9sbad2$(g1u6ep, tf57, zt5flq);break;case '!':
          $4d && y3m0rc(tf57), n0ryx = L9bzkhja(g1u6ep, tf57, zt5flq, _ny48);break;default:
          $4d && y3m0rc(tf57);var bk$2a = new L9d$2s8(),
              gu6pe1 = t5ofl[t5ofl['length'] - 0x1]['currentNSMap'],
              n0ryx = L9_0x4y(g1u6ep, tf57, bk$2a, gu6pe1, hzjl, _ny48),
              l5fqtz = bk$2a['length'];if (!bk$2a['closed'] && L9e16uv(g1u6ep, n0ryx, bk$2a['tagName'], g1u6p) && (bk$2a['closed'] = !0x0, jahbzk['nbsp'] || _ny48['warning']('unclosed xml attribute')), $4d && l5fqtz) {
            for (var yrx3c0 = L9ug1p6($4d, {}), _x0yn = 0x0; l5fqtz > _x0yn; _x0yn++) {
              var hjklqz = bk$2a[_x0yn];y3m0rc(hjklqz['offset']), hjklqz['locator'] = L9ug1p6($4d, {});
            }zt5flq['locator'] = yrx3c0, L9bjhkz(bk$2a, zt5flq, gu6pe1) && t5ofl['push'](bk$2a), zt5flq['locator'] = $4d;
          } else L9bjhkz(bk$2a, zt5flq, gu6pe1) && t5ofl['push'](bk$2a);'http://www.w3.org/1999/xhtml' !== bk$2a['uri'] || bk$2a['closed'] ? n0ryx++ : n0ryx = L9q95tf(g1u6ep, n0ryx, bk$2a['tagName'], hzjl, zt5flq);}
    } catch (y40x_) {
      _ny48['error']('element parse error: ' + y40x_), n0ryx = -0x1;
    }n0ryx > zjkba ? zjkba = n0ryx : n3_(Math['max'](tf57, zjkba) + 0x1);
  }
}function L9ug1p6(j2adkb, fql9) {
  return fql9['lineNumber'] = j2adkb['lineNumber'], fql9['columnNumber'] = j2adkb['columnNumber'], fql9;
}function L9_0x4y(o57f, y_8xn4, x3cry0, das2b$, zkbaj, nxy4) {
  for (var cr3mi, w3ricm, sba2d = ++y_8xn4, fztql5 = L9$dsa2b;;) {
    var rx3y0 = o57f['charAt'](sba2d);switch (rx3y0) {case '=':
        if (fztql5 === L9ahjqk) cr3mi = o57f['slice'](y_8xn4, sba2d), fztql5 = L9ryc30;else {
          if (fztql5 !== L9hzbajk) throw new Error('attribute equal must after attrName');fztql5 = L9ryc30;
        }break;case '\x27':case '\x22':
        if (fztql5 === L9ryc30 || fztql5 === L9ahjqk) {
          if (fztql5 === L9ahjqk && (nxy4['warning']('attribute value must after "="'), cr3mi = o57f['slice'](y_8xn4, sba2d)), y_8xn4 = sba2d + 0x1, sba2d = o57f['indexOf'](rx3y0, y_8xn4), !(sba2d > 0x0)) throw new Error('attribute value no end \'' + rx3y0 + '\' match');w3ricm = o57f['slice'](y_8xn4, sba2d)['replace'](/&#?\w+;/g, zkbaj), x3cry0['add'](cr3mi, w3ricm, y_8xn4 - 0x1), fztql5 = L9d2kj;
        } else {
          if (fztql5 != L9xyrc30) throw new Error('attribute value must after "="');w3ricm = o57f['slice'](y_8xn4, sba2d)['replace'](/&#?\w+;/g, zkbaj), x3cry0['add'](cr3mi, w3ricm, y_8xn4), nxy4['warning']('attribute "' + cr3mi + '" missed start quot(' + rx3y0 + ')!!'), y_8xn4 = sba2d + 0x1, fztql5 = L9d2kj;
        }break;case '/':
        switch (fztql5) {case L9$dsa2b:
            x3cry0['setTagName'](o57f['slice'](y_8xn4, sba2d));case L9d2kj:case L9xc0:case L9lzjth:
            fztql5 = L9lzjth, x3cry0['closed'] = !0x0;case L9xyrc30:case L9ahjqk:case L9hzbajk:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return nxy4['error']('unexpected end of input'), fztql5 == L9$dsa2b && x3cry0['setTagName'](o57f['slice'](y_8xn4, sba2d)), sba2d;case '>':
        switch (fztql5) {case L9$dsa2b:
            x3cry0['setTagName'](o57f['slice'](y_8xn4, sba2d));case L9d2kj:case L9xc0:case L9lzjth:
            break;case L9xyrc30:case L9ahjqk:
            w3ricm = o57f['slice'](y_8xn4, sba2d), '/' === w3ricm['slice'](-0x1) && (x3cry0['closed'] = !0x0, w3ricm = w3ricm['slice'](0x0, -0x1));case L9hzbajk:
            fztql5 === L9hzbajk && (w3ricm = cr3mi), fztql5 == L9xyrc30 ? (nxy4['warning']('attribute "' + w3ricm + '" missed quot(")!!'), x3cry0['add'](cr3mi, w3ricm['replace'](/&#?\w+;/g, zkbaj), y_8xn4)) : ('http://www.w3.org/1999/xhtml' === das2b$[''] && w3ricm['match'](/^(?:disabled|checked|selected)$/i) || nxy4['warning']('attribute "' + w3ricm + '" missed value!! "' + w3ricm + '" instead!!'), x3cry0['add'](w3ricm, w3ricm, y_8xn4));break;case L9ryc30:
            throw new Error('attribute value missed!!');}return sba2d;case '\u0080':
        rx3y0 = '\x20';default:
        if ('\x20' >= rx3y0) switch (fztql5) {case L9$dsa2b:
            x3cry0['setTagName'](o57f['slice'](y_8xn4, sba2d)), fztql5 = L9xc0;break;case L9ahjqk:
            cr3mi = o57f['slice'](y_8xn4, sba2d), fztql5 = L9hzbajk;break;case L9xyrc30:
            var w3ricm = o57f['slice'](y_8xn4, sba2d)['replace'](/&#?\w+;/g, zkbaj);nxy4['warning']('attribute "' + w3ricm + '" missed quot(")!!'), x3cry0['add'](cr3mi, w3ricm, y_8xn4);case L9d2kj:
            fztql5 = L9xc0;} else switch (fztql5) {case L9hzbajk:
            {
              x3cry0['tagName'];
            }'http://www.w3.org/1999/xhtml' === das2b$[''] && cr3mi['match'](/^(?:disabled|checked|selected)$/i) || nxy4['warning']('attribute "' + cr3mi + '" missed value!! "' + cr3mi + '" instead2!!'), x3cry0['add'](cr3mi, cr3mi, y_8xn4), y_8xn4 = sba2d, fztql5 = L9ahjqk;break;case L9d2kj:
            nxy4['warning']('attribute space is required"' + cr3mi + '\x22!!');case L9xc0:
            fztql5 = L9ahjqk, y_8xn4 = sba2d;break;case L9ryc30:
            fztql5 = L9xyrc30, y_8xn4 = sba2d;break;case L9lzjth:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}sba2d++;
  }
}function L9bjhkz(evg61u, dbsa2$, e1v6gu) {
  for (var hlqtz = evg61u['tagName'], ajzbh = null, y_n40 = evg61u['length']; y_n40--;) {
    var f9l5t = evg61u[y_n40],
        jadb2 = f9l5t['qName'],
        vu1g7e = f9l5t['value'],
        $n8_s = jadb2['indexOf'](':');if ($n8_s > 0x0) var ugv17e = f9l5t['prefix'] = jadb2['slice'](0x0, $n8_s),
        jkhaq = jadb2['slice']($n8_s + 0x1),
        b2$ads = 'xmlns' === ugv17e && jkhaq;else jkhaq = jadb2, ugv17e = null, b2$ads = 'xmlns' === jadb2 && '';f9l5t['localName'] = jkhaq, b2$ads !== !0x1 && (null == ajzbh && (ajzbh = {}, L9of971(e1v6gu, e1v6gu = {})), e1v6gu[b2$ads] = ajzbh[b2$ads] = vu1g7e, f9l5t['uri'] = 'http://www.w3.org/2000/xmlns/', dbsa2$['startPrefixMapping'](b2$ads, vu1g7e));
  }for (var y_n40 = evg61u['length']; y_n40--;) {
    f9l5t = evg61u[y_n40];var ugv17e = f9l5t['prefix'];ugv17e && ('xml' === ugv17e && (f9l5t['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ugv17e && (f9l5t['uri'] = e1v6gu[ugv17e || '']));
  }var $n8_s = hlqtz['indexOf'](':');$n8_s > 0x0 ? (ugv17e = evg61u['prefix'] = hlqtz['slice'](0x0, $n8_s), jkhaq = evg61u['localName'] = hlqtz['slice']($n8_s + 0x1)) : (ugv17e = null, jkhaq = evg61u['localName'] = hlqtz);var d2s8$4 = evg61u['uri'] = e1v6gu[ugv17e || ''];if (dbsa2$['startElement'](d2s8$4, jkhaq, hlqtz, evg61u), !evg61u['closed']) return evg61u['currentNSMap'] = e1v6gu, evg61u['localNSMap'] = ajzbh, !0x0;if (dbsa2$['endElement'](d2s8$4, jkhaq, hlqtz), ajzbh) {
    for (ugv17e in ajzbh) dbsa2$['endPrefixMapping'](ugv17e);
  }
}function L9q95tf(rm0c3y, t5qf, lhqtz5, hkzajb, _84xns) {
  if (/^(?:script|textarea)$/i['test'](lhqtz5)) {
    var v19of7 = rm0c3y['indexOf']('</' + lhqtz5 + '>', t5qf),
        $bad2s = rm0c3y['substring'](t5qf + 0x1, v19of7);if (/[&<]/['test']($bad2s)) return (/^script$/i['test'](lhqtz5) ? (_84xns['characters']($bad2s, 0x0, $bad2s['length']), v19of7) : ($bad2s = $bad2s['replace'](/&#?\w+;/g, hkzajb), _84xns['characters']($bad2s, 0x0, $bad2s['length']), v19of7)
    );
  }return t5qf + 0x1;
}function L9e16uv(u1gve, bka$2, ynx03, akhjz) {
  var o759v = akhjz[ynx03];return null == o759v && (o759v = u1gve['lastIndexOf']('</' + ynx03 + '>'), bka$2 > o759v && (o759v = u1gve['lastIndexOf']('</' + ynx03)), akhjz[ynx03] = o759v), bka$2 > o759v;
}function L9of971(b$dka2, fz5q) {
  for (var f95tol in b$dka2) fz5q[f95tol] = b$dka2[f95tol];
}function L9bzkhja(abdjk2, ov57f9, o7t9f, yr3cm0) {
  var q9tf5 = abdjk2['charAt'](ov57f9 + 0x2);switch (q9tf5) {case '-':
      if ('-' === abdjk2['charAt'](ov57f9 + 0x3)) {
        var qlkhz = abdjk2['indexOf']('-->', ov57f9 + 0x4);return qlkhz > ov57f9 ? (o7t9f['comment'](abdjk2, ov57f9 + 0x4, qlkhz - ov57f9 - 0x4), qlkhz + 0x3) : (yr3cm0['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == abdjk2['substr'](ov57f9 + 0x3, 0x6)) {
        var qlkhz = abdjk2['indexOf'](']]>', ov57f9 + 0x9);return o7t9f['startCDATA'](), o7t9f['characters'](abdjk2, ov57f9 + 0x9, qlkhz - ov57f9 - 0x9), o7t9f['endCDATA'](), qlkhz + 0x3;
      }var m30ci = L9hzka(abdjk2, ov57f9),
          _x48sn = m30ci['length'];if (_x48sn > 0x1 && /!doctype/i['test'](m30ci[0x0][0x0])) {
        var khaqj = m30ci[0x1][0x0],
            o7e19 = _x48sn > 0x3 && /^public$/i['test'](m30ci[0x2][0x0]) && m30ci[0x3][0x0],
            p6gu = _x48sn > 0x4 && m30ci[0x4][0x0],
            kajhbz = m30ci[_x48sn - 0x1];return o7t9f['startDTD'](khaqj, o7e19 && o7e19['replace'](/^(['"])(.*?)\1$/, '$2'), p6gu && p6gu['replace'](/^(['"])(.*?)\1$/, '$2')), o7t9f['endDTD'](), kajhbz['index'] + kajhbz[0x0]['length'];
      }}return -0x1;
}function L9sbad2$(gvoe17, g7ev, gv7u) {
  var ns_4$8 = gvoe17['indexOf']('?>', g7ev);if (ns_4$8) {
    var fq5lzt = gvoe17['substring'](g7ev, ns_4$8)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (fq5lzt) {
      {
        fq5lzt[0x0]['length'];
      }return gv7u['processingInstruction'](fq5lzt[0x1], fq5lzt[0x2]), ns_4$8 + 0x2;
    }return -0x1;
  }return -0x1;
}function L9d$2s8() {}function L9db28(jdba, vo79f5) {
  return jdba['__proto__'] = vo79f5, jdba;
}function L9hzka(oe7v1g, qajkz) {
  var veug,
      s84_nx = [],
      hbzajk = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (hbzajk['lastIndex'] = qajkz, hbzajk['exec'](oe7v1g); veug = hbzajk['exec'](oe7v1g);) if (s84_nx['push'](veug), veug[0x1]) return s84_nx;
}var L9khja2b = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9n_8xy4 = new RegExp('[\\-\\.0-9' + L9khja2b['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9bak$2d = new RegExp('^' + L9khja2b['source'] + L9n_8xy4['source'] + '*(?::' + L9khja2b['source'] + L9n_8xy4['source'] + '*)?$'),
    L9$dsa2b = 0x0,
    L9ahjqk = 0x1,
    L9hzbajk = 0x2,
    L9ryc30 = 0x3,
    L9xyrc30 = 0x4,
    L9d2kj = 0x5,
    L9xc0 = 0x6,
    L9lzjth = 0x7;L9ajqkhz['prototype'] = { 'parse': function (n8_$s, v9e7o1, hba2jk) {
    var v7u1ge = this['domBuilder'];v7u1ge['startDocument'](), L9of971(v9e7o1, v9e7o1 = {}), L9ogev17(n8_$s, v9e7o1, hba2jk, v7u1ge, this['errorHandler']), v7u1ge['endDocument']();
  } }, L9d$2s8['prototype'] = { 'setTagName': function (abkhz) {
    if (!L9bak$2d['test'](abkhz)) throw new Error('invalid tagName:' + abkhz);this['tagName'] = abkhz;
  }, 'add': function (qakh, s2$, r3imc0) {
    if (!L9bak$2d['test'](qakh)) throw new Error('invalid attribute:' + qakh);this[this['length']++] = { 'qName': qakh, 'value': s2$, 'offset': r3imc0 };
  }, 'length': 0x0, 'getLocalName': function (ahzkjb) {
    return this[ahzkjb]['localName'];
  }, 'getLocator': function (jqhlzt) {
    return this[jqhlzt]['locator'];
  }, 'getQName': function (m0yrc) {
    return this[m0yrc]['qName'];
  }, 'getURI': function (jqkhza) {
    return this[jqkhza]['uri'];
  }, 'getValue': function ($ak) {
    return this[$ak]['value'];
  } }, L9db28({}, L9db28['prototype']) instanceof L9db28 || (L9db28 = function (yx30rn, klqjzh) {
  function s$a2bd() {}s$a2bd['prototype'] = klqjzh, s$a2bd = new s$a2bd();for (klqjzh in yx30rn) s$a2bd[klqjzh] = yx30rn[klqjzh];return s$a2bd;
}), exports['XMLReader'] = L9ajqkhz;