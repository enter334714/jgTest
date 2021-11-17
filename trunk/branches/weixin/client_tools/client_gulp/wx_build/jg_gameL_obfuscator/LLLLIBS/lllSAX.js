var W = wx.$l;
function L9ry3xc() {}function L9y3nr0(d$2bsa, hzljt, e9o1v, zqhjlk, hkzql) {
  function hqkza(ynx_04) {
    if (ynx_04 > 0xffff) {
      ynx_04 -= 0x10000;var to5fl9 = 0xd800 + (ynx_04 >> 0xa),
          da2b$s = 0xdc00 + (0x3ff & ynx_04);return String['fromCharCode'](to5fl9, da2b$s);
    }return String['fromCharCode'](ynx_04);
  }function t5ql9f(azjkh) {
    var as2db$ = azjkh['slice'](0x1, -0x1);return as2db$ in e9o1v ? e9o1v[as2db$] : '#' === as2db$['charAt'](0x0) ? hqkza(parseInt(as2db$['substr'](0x1)['replace']('x', '0x'))) : (hkzql['error']('entity not found:' + azjkh), azjkh);
  }function nyr0x3(b2d8$s) {
    if (b2d8$s > v91o7e) {
      var n_0yx3 = d$2bsa['substring'](v91o7e, b2d8$s)['replace'](/&#?\w+;/g, t5ql9f);lth5zq && vu6e(v91o7e), zqhjlk['characters'](n_0yx3, 0x0, b2d8$s - v91o7e), v91o7e = b2d8$s;
    }
  }function vu6e(l5f9, t5ofl) {
    for (; l5f9 >= n_xy3 && (t5ofl = tlo5f['exec'](d$2bsa));) v79e = t5ofl['index'], n_xy3 = v79e + t5ofl[0x0]['length'], lth5zq['lineNumber']++;lth5zq['columnNumber'] = l5f9 - v79e + 0x1;
  }for (var v79e = 0x0, n_xy3 = 0x0, tlo5f = /.*(?:\r\n?|\n)|.*$/g, lth5zq = zqhjlk['locator'], jlkz = [{ 'currentNSMap': hzljt }], ov179 = {}, v91o7e = 0x0;;) {
    try {
      var bs28 = d$2bsa['indexOf']('<', v91o7e);if (0x0 > bs28) {
        if (!d$2bsa['substr'](v91o7e)['match'](/^\s*$/)) {
          var yxrc0 = zqhjlk['doc'],
              qhtlzj = yxrc0['createTextNode'](d$2bsa['substr'](v91o7e));yxrc0['appendChild'](qhtlzj), zqhjlk['currentElement'] = qhtlzj;
        }return;
      }switch (bs28 > v91o7e && nyr0x3(bs28), d$2bsa['charAt'](bs28 + 0x1)) {case '/':
          var i03cmr = d$2bsa['indexOf']('>', bs28 + 0x3),
              zkhabj = d$2bsa['substring'](bs28 + 0x2, i03cmr),
              ov71e9 = jlkz['pop']();0x0 > i03cmr ? (zkhabj = d$2bsa['substring'](bs28 + 0x2)['replace'](/[\s<].*/, ''), hkzql['error']('end tag name: ' + zkhabj + ' is not complete:' + ov71e9['tagName']), i03cmr = bs28 + 0x1 + zkhabj['length']) : zkhabj['match'](/\s</) && (zkhabj = zkhabj['replace'](/[\s<].*/, ''), hkzql['error']('end tag name: ' + zkhabj + ' maybe not complete'), i03cmr = bs28 + 0x1 + zkhabj['length']);var hjbza = ov71e9['localNSMap'],
              y_30n = ov71e9['tagName'] == zkhabj,
              ve97o = y_30n || ov71e9['tagName'] && ov71e9['tagName']['toLowerCase']() == zkhabj['toLowerCase']();if (ve97o) {
            if (zqhjlk['endElement'](ov71e9['uri'], ov71e9['localName'], zkhabj), hjbza) {
              for (var xyr3c in hjbza) zqhjlk['endPrefixMapping'](xyr3c);
            }y_30n || hkzql['fatalError']('end tag name: ' + zkhabj + ' is not match the current start tagName:' + ov71e9['tagName']);
          } else jlkz['push'](ov71e9);i03cmr++;break;case '?':
          lth5zq && vu6e(bs28), i03cmr = L9vueg17(d$2bsa, bs28, zqhjlk);break;case '!':
          lth5zq && vu6e(bs28), i03cmr = L9e6p1(d$2bsa, bs28, zqhjlk, hkzql);break;default:
          lth5zq && vu6e(bs28);var jhtz = new L9iw3rc(),
              hlz5q = jlkz[jlkz['length'] - 0x1]['currentNSMap'],
              i03cmr = L9hbz(d$2bsa, bs28, jhtz, hlz5q, t5ql9f, hkzql),
              zajq = jhtz['length'];if (!jhtz['closed'] && L9v795fo(d$2bsa, i03cmr, jhtz['tagName'], ov179) && (jhtz['closed'] = !0x0, e9o1v['nbsp'] || hkzql['warning']('unclosed xml attribute')), lth5zq && zajq) {
            for (var hjqka = L9s$4_8d(lth5zq, {}), b$d2 = 0x0; zajq > b$d2; b$d2++) {
              var nx_s48 = jhtz[b$d2];vu6e(nx_s48['offset']), nx_s48['locator'] = L9s$4_8d(lth5zq, {});
            }zqhjlk['locator'] = hjqka, L9cyr30m(jhtz, zqhjlk, hlz5q) && jlkz['push'](jhtz), zqhjlk['locator'] = lth5zq;
          } else L9cyr30m(jhtz, zqhjlk, hlz5q) && jlkz['push'](jhtz);'http://www.w3.org/1999/xhtml' !== jhtz['uri'] || jhtz['closed'] ? i03cmr++ : i03cmr = L9ue61pg(d$2bsa, i03cmr, jhtz['tagName'], t5ql9f, zqhjlk);}
    } catch (g6pe1) {
      hkzql['error']('element parse error: ' + g6pe1), i03cmr = -0x1;
    }i03cmr > v91o7e ? v91o7e = i03cmr : nyr0x3(Math['max'](bs28, v91o7e) + 0x1);
  }
}function L9s$4_8d(klqzhj, rnx30) {
  return rnx30['lineNumber'] = klqzhj['lineNumber'], rnx30['columnNumber'] = klqzhj['columnNumber'], rnx30;
}function L9hbz(xny40_, o5t7f9, ric, mr0c3i, rcx03y, sab$) {
  for (var ov917f, x3n0y, gup1e6 = ++o5t7f9, o7egv1 = L9o1fv97;;) {
    var flztq = xny40_['charAt'](gup1e6);switch (flztq) {case '=':
        if (o7egv1 === L9xnyr30) ov917f = xny40_['slice'](o5t7f9, gup1e6), o7egv1 = L9qltzj;else {
          if (o7egv1 !== L9ka$d) throw new Error('attribute equal must after attrName');o7egv1 = L9qltzj;
        }break;case '\x27':case '\x22':
        if (o7egv1 === L9qltzj || o7egv1 === L9xnyr30) {
          if (o7egv1 === L9xnyr30 && (sab$['warning']('attribute value must after "="'), ov917f = xny40_['slice'](o5t7f9, gup1e6)), o5t7f9 = gup1e6 + 0x1, gup1e6 = xny40_['indexOf'](flztq, o5t7f9), !(gup1e6 > 0x0)) throw new Error('attribute value no end \'' + flztq + '\' match');x3n0y = xny40_['slice'](o5t7f9, gup1e6)['replace'](/&#?\w+;/g, rcx03y), ric['add'](ov917f, x3n0y, o5t7f9 - 0x1), o7egv1 = L9egp6;
        } else {
          if (o7egv1 != L9k2aj) throw new Error('attribute value must after "="');x3n0y = xny40_['slice'](o5t7f9, gup1e6)['replace'](/&#?\w+;/g, rcx03y), ric['add'](ov917f, x3n0y, o5t7f9), sab$['warning']('attribute "' + ov917f + '" missed start quot(' + flztq + ')!!'), o5t7f9 = gup1e6 + 0x1, o7egv1 = L9egp6;
        }break;case '/':
        switch (o7egv1) {case L9o1fv97:
            ric['setTagName'](xny40_['slice'](o5t7f9, gup1e6));case L9egp6:case L9kljhqz:case L9habkj:
            o7egv1 = L9habkj, ric['closed'] = !0x0;case L9k2aj:case L9xnyr30:case L9ka$d:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return sab$['error']('unexpected end of input'), o7egv1 == L9o1fv97 && ric['setTagName'](xny40_['slice'](o5t7f9, gup1e6)), gup1e6;case '>':
        switch (o7egv1) {case L9o1fv97:
            ric['setTagName'](xny40_['slice'](o5t7f9, gup1e6));case L9egp6:case L9kljhqz:case L9habkj:
            break;case L9k2aj:case L9xnyr30:
            x3n0y = xny40_['slice'](o5t7f9, gup1e6), '/' === x3n0y['slice'](-0x1) && (ric['closed'] = !0x0, x3n0y = x3n0y['slice'](0x0, -0x1));case L9ka$d:
            o7egv1 === L9ka$d && (x3n0y = ov917f), o7egv1 == L9k2aj ? (sab$['warning']('attribute "' + x3n0y + '" missed quot(")!!'), ric['add'](ov917f, x3n0y['replace'](/&#?\w+;/g, rcx03y), o5t7f9)) : ('http://www.w3.org/1999/xhtml' === mr0c3i[''] && x3n0y['match'](/^(?:disabled|checked|selected)$/i) || sab$['warning']('attribute "' + x3n0y + '" missed value!! "' + x3n0y + '" instead!!'), ric['add'](x3n0y, x3n0y, o5t7f9));break;case L9qltzj:
            throw new Error('attribute value missed!!');}return gup1e6;case '\u0080':
        flztq = '\x20';default:
        if ('\x20' >= flztq) switch (o7egv1) {case L9o1fv97:
            ric['setTagName'](xny40_['slice'](o5t7f9, gup1e6)), o7egv1 = L9kljhqz;break;case L9xnyr30:
            ov917f = xny40_['slice'](o5t7f9, gup1e6), o7egv1 = L9ka$d;break;case L9k2aj:
            var x3n0y = xny40_['slice'](o5t7f9, gup1e6)['replace'](/&#?\w+;/g, rcx03y);sab$['warning']('attribute "' + x3n0y + '" missed quot(")!!'), ric['add'](ov917f, x3n0y, o5t7f9);case L9egp6:
            o7egv1 = L9kljhqz;} else switch (o7egv1) {case L9ka$d:
            {
              ric['tagName'];
            }'http://www.w3.org/1999/xhtml' === mr0c3i[''] && ov917f['match'](/^(?:disabled|checked|selected)$/i) || sab$['warning']('attribute "' + ov917f + '" missed value!! "' + ov917f + '" instead2!!'), ric['add'](ov917f, ov917f, o5t7f9), o5t7f9 = gup1e6, o7egv1 = L9xnyr30;break;case L9egp6:
            sab$['warning']('attribute space is required"' + ov917f + '\x22!!');case L9kljhqz:
            o7egv1 = L9xnyr30, o5t7f9 = gup1e6;break;case L9qltzj:
            o7egv1 = L9k2aj, o5t7f9 = gup1e6;break;case L9habkj:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}gup1e6++;
  }
}function L9cyr30m(uge16p, jkad2b, x4_ny8) {
  for (var n84s = uge16p['tagName'], hzbjak = null, lqtfz = uge16p['length']; lqtfz--;) {
    var zbkahj = uge16p[lqtfz],
        t97f5o = zbkahj['qName'],
        qkazjh = zbkahj['value'],
        yxn_48 = t97f5o['indexOf'](':');if (yxn_48 > 0x0) var _8nx4 = zbkahj['prefix'] = t97f5o['slice'](0x0, yxn_48),
        bds82 = t97f5o['slice'](yxn_48 + 0x1),
        b$da = 'xmlns' === _8nx4 && bds82;else bds82 = t97f5o, _8nx4 = null, b$da = 'xmlns' === t97f5o && '';zbkahj['localName'] = bds82, b$da !== !0x1 && (null == hzbjak && (hzbjak = {}, L9s$42d(x4_ny8, x4_ny8 = {})), x4_ny8[b$da] = hzbjak[b$da] = qkazjh, zbkahj['uri'] = 'http://www.w3.org/2000/xmlns/', jkad2b['startPrefixMapping'](b$da, qkazjh));
  }for (var lqtfz = uge16p['length']; lqtfz--;) {
    zbkahj = uge16p[lqtfz];var _8nx4 = zbkahj['prefix'];_8nx4 && ('xml' === _8nx4 && (zbkahj['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _8nx4 && (zbkahj['uri'] = x4_ny8[_8nx4 || '']));
  }var yxn_48 = n84s['indexOf'](':');yxn_48 > 0x0 ? (_8nx4 = uge16p['prefix'] = n84s['slice'](0x0, yxn_48), bds82 = uge16p['localName'] = n84s['slice'](yxn_48 + 0x1)) : (_8nx4 = null, bds82 = uge16p['localName'] = n84s);var o9vf = uge16p['uri'] = x4_ny8[_8nx4 || ''];if (jkad2b['startElement'](o9vf, bds82, n84s, uge16p), !uge16p['closed']) return uge16p['currentNSMap'] = x4_ny8, uge16p['localNSMap'] = hzbjak, !0x0;if (jkad2b['endElement'](o9vf, bds82, n84s), hzbjak) {
    for (_8nx4 in hzbjak) jkad2b['endPrefixMapping'](_8nx4);
  }
}function L9ue61pg(e9o7v1, ft5lq9, hj2ab, qzl5t, of7v9) {
  if (/^(?:script|textarea)$/i['test'](hj2ab)) {
    var r03myc = e9o7v1['indexOf']('</' + hj2ab + '>', ft5lq9),
        aqjkh = e9o7v1['substring'](ft5lq9 + 0x1, r03myc);if (/[&<]/['test'](aqjkh)) return (/^script$/i['test'](hj2ab) ? (of7v9['characters'](aqjkh, 0x0, aqjkh['length']), r03myc) : (aqjkh = aqjkh['replace'](/&#?\w+;/g, qzl5t), of7v9['characters'](aqjkh, 0x0, aqjkh['length']), r03myc)
    );
  }return ft5lq9 + 0x1;
}function L9v795fo(x0n, $24sd, _nxy3, f5l9t) {
  var v7eog = f5l9t[_nxy3];return null == v7eog && (v7eog = x0n['lastIndexOf']('</' + _nxy3 + '>'), $24sd > v7eog && (v7eog = x0n['lastIndexOf']('</' + _nxy3)), f5l9t[_nxy3] = v7eog), $24sd > v7eog;
}function L9s$42d(c0mry3, ug6ep1) {
  for (var b2jad in c0mry3) ug6ep1[b2jad] = c0mry3[b2jad];
}function L9e6p1(zhak, $s_4n8, n0y_3x, e1v6u) {
  var mi03rc = zhak['charAt']($s_4n8 + 0x2);switch (mi03rc) {case '-':
      if ('-' === zhak['charAt']($s_4n8 + 0x3)) {
        var ry3c0x = zhak['indexOf']('-->', $s_4n8 + 0x4);return ry3c0x > $s_4n8 ? (n0y_3x['comment'](zhak, $s_4n8 + 0x4, ry3c0x - $s_4n8 - 0x4), ry3c0x + 0x3) : (e1v6u['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == zhak['substr']($s_4n8 + 0x3, 0x6)) {
        var ry3c0x = zhak['indexOf'](']]>', $s_4n8 + 0x9);return n0y_3x['startCDATA'](), n0y_3x['characters'](zhak, $s_4n8 + 0x9, ry3c0x - $s_4n8 - 0x9), n0y_3x['endCDATA'](), ry3c0x + 0x3;
      }var j2bkd = L9v5f(zhak, $s_4n8),
          kbhzja = j2bkd['length'];if (kbhzja > 0x1 && /!doctype/i['test'](j2bkd[0x0][0x0])) {
        var _y0n4x = j2bkd[0x1][0x0],
            hqkajz = kbhzja > 0x3 && /^public$/i['test'](j2bkd[0x2][0x0]) && j2bkd[0x3][0x0],
            qzfl5 = kbhzja > 0x4 && j2bkd[0x4][0x0],
            $ak2 = j2bkd[kbhzja - 0x1];return n0y_3x['startDTD'](_y0n4x, hqkajz && hqkajz['replace'](/^(['"])(.*?)\1$/, '$2'), qzfl5 && qzfl5['replace'](/^(['"])(.*?)\1$/, '$2')), n0y_3x['endDTD'](), $ak2['index'] + $ak2[0x0]['length'];
      }}return -0x1;
}function L9vueg17(adb$s2, _4$8ns, $2d48) {
  var fq5 = adb$s2['indexOf']('?>', _4$8ns);if (fq5) {
    var kazbjh = adb$s2['substring'](_4$8ns, fq5)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (kazbjh) {
      {
        kazbjh[0x0]['length'];
      }return $2d48['processingInstruction'](kazbjh[0x1], kazbjh[0x2]), fq5 + 0x2;
    }return -0x1;
  }return -0x1;
}function L9iw3rc() {}function L9qhazjk(zjlthq, q5flz) {
  return zjlthq['__proto__'] = q5flz, zjlthq;
}function L9v5f(_nxy4, ircm03) {
  var $24s,
      v57of9 = [],
      ge16pu = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ge16pu['lastIndex'] = ircm03, ge16pu['exec'](_nxy4); $24s = ge16pu['exec'](_nxy4);) if (v57of9['push']($24s), $24s[0x1]) return v57of9;
}var L9bakd2$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9cr3wmi = new RegExp('[\\-\\.0-9' + L9bakd2$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9akhzq = new RegExp('^' + L9bakd2$['source'] + L9cr3wmi['source'] + '*(?::' + L9bakd2$['source'] + L9cr3wmi['source'] + '*)?$'),
    L9o1fv97 = 0x0,
    L9xnyr30 = 0x1,
    L9ka$d = 0x2,
    L9qltzj = 0x3,
    L9k2aj = 0x4,
    L9egp6 = 0x5,
    L9kljhqz = 0x6,
    L9habkj = 0x7;L9ry3xc['prototype'] = { 'parse': function (s_$8n4, jhbak2, lzft) {
    var dsa = this['domBuilder'];dsa['startDocument'](), L9s$42d(jhbak2, jhbak2 = {}), L9y3nr0(s_$8n4, jhbak2, lzft, dsa, this['errorHandler']), dsa['endDocument']();
  } }, L9iw3rc['prototype'] = { 'setTagName': function (cx0y3r) {
    if (!L9akhzq['test'](cx0y3r)) throw new Error('invalid tagName:' + cx0y3r);this['tagName'] = cx0y3r;
  }, 'add': function (l9qf5t, lqjz, u7v) {
    if (!L9akhzq['test'](l9qf5t)) throw new Error('invalid attribute:' + l9qf5t);this[this['length']++] = { 'qName': l9qf5t, 'value': lqjz, 'offset': u7v };
  }, 'length': 0x0, 'getLocalName': function (zkjqha) {
    return this[zkjqha]['localName'];
  }, 'getLocator': function (ci30m) {
    return this[ci30m]['locator'];
  }, 'getQName': function (l9o5tf) {
    return this[l9o5tf]['qName'];
  }, 'getURI': function (yx48n) {
    return this[yx48n]['uri'];
  }, 'getValue': function ($s48_d) {
    return this[$s48_d]['value'];
  } }, L9qhazjk({}, L9qhazjk['prototype']) instanceof L9qhazjk || (L9qhazjk = function (ztq5hl, lztfq5) {
  function hkjza() {}hkjza['prototype'] = lztfq5, hkjza = new hkjza();for (lztfq5 in ztq5hl) hkjza[lztfq5] = ztq5hl[lztfq5];return hkjza;
}), exports['XMLReader'] = L9ry3xc;