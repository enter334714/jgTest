var W = wx.$l;
function L9uve61() {}function L9og7ev(ny4_8x, r30yn, tqzlh, c3m, vo1e7g) {
  function vgeo(hazkj) {
    if (hazkj > 0xffff) {
      hazkj -= 0x10000;var v1e6 = 0xd800 + (hazkj >> 0xa),
          s$d2ba = 0xdc00 + (0x3ff & hazkj);return String['fromCharCode'](v1e6, s$d2ba);
    }return String['fromCharCode'](hazkj);
  }function ve1ug6(_8s4n$) {
    var jhkzb = _8s4n$['slice'](0x1, -0x1);return jhkzb in tqzlh ? tqzlh[jhkzb] : '#' === jhkzb['charAt'](0x0) ? vgeo(parseInt(jhkzb['substr'](0x1)['replace']('x', '0x'))) : (vo1e7g['error']('entity not found:' + _8s4n$), _8s4n$);
  }function o5lft9(n3x0r) {
    if (n3x0r > zhaqkj) {
      var ov79f5 = ny4_8x['substring'](zhaqkj, n3x0r)['replace'](/&#?\w+;/g, ve1ug6);sn8$ && jabkh(zhaqkj), c3m['characters'](ov79f5, 0x0, n3x0r - zhaqkj), zhaqkj = n3x0r;
    }
  }function jabkh(yr3c0x, kj2ha) {
    for (; yr3c0x >= tflz && (kj2ha = ftzq5['exec'](ny4_8x));) ltjz = kj2ha['index'], tflz = ltjz + kj2ha[0x0]['length'], sn8$['lineNumber']++;sn8$['columnNumber'] = yr3c0x - ltjz + 0x1;
  }for (var ltjz = 0x0, tflz = 0x0, ftzq5 = /.*(?:\r\n?|\n)|.*$/g, sn8$ = c3m['locator'], kaqj = [{ 'currentNSMap': r30yn }], _48$ns = {}, zhaqkj = 0x0;;) {
    try {
      var d$2b8s = ny4_8x['indexOf']('<', zhaqkj);if (0x0 > d$2b8s) {
        if (!ny4_8x['substr'](zhaqkj)['match'](/^\s*$/)) {
          var v19oe7 = c3m['doc'],
              n_4xs = v19oe7['createTextNode'](ny4_8x['substr'](zhaqkj));v19oe7['appendChild'](n_4xs), c3m['currentElement'] = n_4xs;
        }return;
      }switch (d$2b8s > zhaqkj && o5lft9(d$2b8s), ny4_8x['charAt'](d$2b8s + 0x1)) {case '/':
          var n3y_ = ny4_8x['indexOf']('>', d$2b8s + 0x3),
              r0ci3m = ny4_8x['substring'](d$2b8s + 0x2, n3y_),
              yx8 = kaqj['pop']();0x0 > n3y_ ? (r0ci3m = ny4_8x['substring'](d$2b8s + 0x2)['replace'](/[\s<].*/, ''), vo1e7g['error']('end tag name: ' + r0ci3m + ' is not complete:' + yx8['tagName']), n3y_ = d$2b8s + 0x1 + r0ci3m['length']) : r0ci3m['match'](/\s</) && (r0ci3m = r0ci3m['replace'](/[\s<].*/, ''), vo1e7g['error']('end tag name: ' + r0ci3m + ' maybe not complete'), n3y_ = d$2b8s + 0x1 + r0ci3m['length']);var x0rc3 = yx8['localNSMap'],
              hkqza = yx8['tagName'] == r0ci3m,
              h5zqtl = hkqza || yx8['tagName'] && yx8['tagName']['toLowerCase']() == r0ci3m['toLowerCase']();if (h5zqtl) {
            if (c3m['endElement'](yx8['uri'], yx8['localName'], r0ci3m), x0rc3) {
              for (var n03yrx in x0rc3) c3m['endPrefixMapping'](n03yrx);
            }hkqza || vo1e7g['fatalError']('end tag name: ' + r0ci3m + ' is not match the current start tagName:' + yx8['tagName']);
          } else kaqj['push'](yx8);n3y_++;break;case '?':
          sn8$ && jabkh(d$2b8s), n3y_ = L9akqjhz(ny4_8x, d$2b8s, c3m);break;case '!':
          sn8$ && jabkh(d$2b8s), n3y_ = L9lt5fo(ny4_8x, d$2b8s, c3m, vo1e7g);break;default:
          sn8$ && jabkh(d$2b8s);var y3x0cr = new L9vg61u(),
              $adb = kaqj[kaqj['length'] - 0x1]['currentNSMap'],
              n3y_ = L9_x4n8s(ny4_8x, d$2b8s, y3x0cr, $adb, ve1ug6, vo1e7g),
              c3mwr = y3x0cr['length'];if (!y3x0cr['closed'] && L9n4xy0(ny4_8x, n3y_, y3x0cr['tagName'], _48$ns) && (y3x0cr['closed'] = !0x0, tqzlh['nbsp'] || vo1e7g['warning']('unclosed xml attribute')), sn8$ && c3mwr) {
            for (var eu16pg = L9jhzkqa(sn8$, {}), lhqz5t = 0x0; c3mwr > lhqz5t; lhqz5t++) {
              var uv1ge7 = y3x0cr[lhqz5t];jabkh(uv1ge7['offset']), uv1ge7['locator'] = L9jhzkqa(sn8$, {});
            }c3m['locator'] = eu16pg, L9xcr30y(y3x0cr, c3m, $adb) && kaqj['push'](y3x0cr), c3m['locator'] = sn8$;
          } else L9xcr30y(y3x0cr, c3m, $adb) && kaqj['push'](y3x0cr);'http://www.w3.org/1999/xhtml' !== y3x0cr['uri'] || y3x0cr['closed'] ? n3y_++ : n3y_ = L9vo719f(ny4_8x, n3y_, y3x0cr['tagName'], ve1ug6, c3m);}
    } catch (ci0r3m) {
      vo1e7g['error']('element parse error: ' + ci0r3m), n3y_ = -0x1;
    }n3y_ > zhaqkj ? zhaqkj = n3y_ : o5lft9(Math['max'](d$2b8s, zhaqkj) + 0x1);
  }
}function L9jhzkqa(djbak2, s48_d) {
  return s48_d['lineNumber'] = djbak2['lineNumber'], s48_d['columnNumber'] = djbak2['columnNumber'], s48_d;
}function L9_x4n8s(jbhaz, wrmi, da$sb2, n8s_$, $n84s_, ka2bdj) {
  for (var da$bs2, f9v71o, $da2b = ++wrmi, zqklj = L9uv16ge;;) {
    var m3i = jbhaz['charAt']($da2b);switch (m3i) {case '=':
        if (zqklj === L9mi3r) da$bs2 = jbhaz['slice'](wrmi, $da2b), zqklj = L9$82d;else {
          if (zqklj !== L9veg1o7) throw new Error('attribute equal must after attrName');zqklj = L9$82d;
        }break;case '\x27':case '\x22':
        if (zqklj === L9$82d || zqklj === L9mi3r) {
          if (zqklj === L9mi3r && (ka2bdj['warning']('attribute value must after "="'), da$bs2 = jbhaz['slice'](wrmi, $da2b)), wrmi = $da2b + 0x1, $da2b = jbhaz['indexOf'](m3i, wrmi), !($da2b > 0x0)) throw new Error('attribute value no end \'' + m3i + '\' match');f9v71o = jbhaz['slice'](wrmi, $da2b)['replace'](/&#?\w+;/g, $n84s_), da$sb2['add'](da$bs2, f9v71o, wrmi - 0x1), zqklj = L9ge1;
        } else {
          if (zqklj != L9zlt5hq) throw new Error('attribute value must after "="');f9v71o = jbhaz['slice'](wrmi, $da2b)['replace'](/&#?\w+;/g, $n84s_), da$sb2['add'](da$bs2, f9v71o, wrmi), ka2bdj['warning']('attribute "' + da$bs2 + '" missed start quot(' + m3i + ')!!'), wrmi = $da2b + 0x1, zqklj = L9ge1;
        }break;case '/':
        switch (zqklj) {case L9uv16ge:
            da$sb2['setTagName'](jbhaz['slice'](wrmi, $da2b));case L9ge1:case L9jqlh:case L9k$2d:
            zqklj = L9k$2d, da$sb2['closed'] = !0x0;case L9zlt5hq:case L9mi3r:case L9veg1o7:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ka2bdj['error']('unexpected end of input'), zqklj == L9uv16ge && da$sb2['setTagName'](jbhaz['slice'](wrmi, $da2b)), $da2b;case '>':
        switch (zqklj) {case L9uv16ge:
            da$sb2['setTagName'](jbhaz['slice'](wrmi, $da2b));case L9ge1:case L9jqlh:case L9k$2d:
            break;case L9zlt5hq:case L9mi3r:
            f9v71o = jbhaz['slice'](wrmi, $da2b), '/' === f9v71o['slice'](-0x1) && (da$sb2['closed'] = !0x0, f9v71o = f9v71o['slice'](0x0, -0x1));case L9veg1o7:
            zqklj === L9veg1o7 && (f9v71o = da$bs2), zqklj == L9zlt5hq ? (ka2bdj['warning']('attribute "' + f9v71o + '" missed quot(")!!'), da$sb2['add'](da$bs2, f9v71o['replace'](/&#?\w+;/g, $n84s_), wrmi)) : ('http://www.w3.org/1999/xhtml' === n8s_$[''] && f9v71o['match'](/^(?:disabled|checked|selected)$/i) || ka2bdj['warning']('attribute "' + f9v71o + '" missed value!! "' + f9v71o + '" instead!!'), da$sb2['add'](f9v71o, f9v71o, wrmi));break;case L9$82d:
            throw new Error('attribute value missed!!');}return $da2b;case '\u0080':
        m3i = '\x20';default:
        if ('\x20' >= m3i) switch (zqklj) {case L9uv16ge:
            da$sb2['setTagName'](jbhaz['slice'](wrmi, $da2b)), zqklj = L9jqlh;break;case L9mi3r:
            da$bs2 = jbhaz['slice'](wrmi, $da2b), zqklj = L9veg1o7;break;case L9zlt5hq:
            var f9v71o = jbhaz['slice'](wrmi, $da2b)['replace'](/&#?\w+;/g, $n84s_);ka2bdj['warning']('attribute "' + f9v71o + '" missed quot(")!!'), da$sb2['add'](da$bs2, f9v71o, wrmi);case L9ge1:
            zqklj = L9jqlh;} else switch (zqklj) {case L9veg1o7:
            {
              da$sb2['tagName'];
            }'http://www.w3.org/1999/xhtml' === n8s_$[''] && da$bs2['match'](/^(?:disabled|checked|selected)$/i) || ka2bdj['warning']('attribute "' + da$bs2 + '" missed value!! "' + da$bs2 + '" instead2!!'), da$sb2['add'](da$bs2, da$bs2, wrmi), wrmi = $da2b, zqklj = L9mi3r;break;case L9ge1:
            ka2bdj['warning']('attribute space is required"' + da$bs2 + '\x22!!');case L9jqlh:
            zqklj = L9mi3r, wrmi = $da2b;break;case L9$82d:
            zqklj = L9zlt5hq, wrmi = $da2b;break;case L9k$2d:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$da2b++;
  }
}function L9xcr30y($2abk, cm03, ri3c0) {
  for (var zhakb = $2abk['tagName'], d2s4$ = null, fo9lt = $2abk['length']; fo9lt--;) {
    var rmc3y = $2abk[fo9lt],
        rwi3cm = rmc3y['qName'],
        zqlt = rmc3y['value'],
        b82$sd = rwi3cm['indexOf'](':');if (b82$sd > 0x0) var x_84yn = rmc3y['prefix'] = rwi3cm['slice'](0x0, b82$sd),
        i3rmw = rwi3cm['slice'](b82$sd + 0x1),
        dbs2a$ = 'xmlns' === x_84yn && i3rmw;else i3rmw = rwi3cm, x_84yn = null, dbs2a$ = 'xmlns' === rwi3cm && '';rmc3y['localName'] = i3rmw, dbs2a$ !== !0x1 && (null == d2s4$ && (d2s4$ = {}, L9ov7f1(ri3c0, ri3c0 = {})), ri3c0[dbs2a$] = d2s4$[dbs2a$] = zqlt, rmc3y['uri'] = 'http://www.w3.org/2000/xmlns/', cm03['startPrefixMapping'](dbs2a$, zqlt));
  }for (var fo9lt = $2abk['length']; fo9lt--;) {
    rmc3y = $2abk[fo9lt];var x_84yn = rmc3y['prefix'];x_84yn && ('xml' === x_84yn && (rmc3y['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== x_84yn && (rmc3y['uri'] = ri3c0[x_84yn || '']));
  }var b82$sd = zhakb['indexOf'](':');b82$sd > 0x0 ? (x_84yn = $2abk['prefix'] = zhakb['slice'](0x0, b82$sd), i3rmw = $2abk['localName'] = zhakb['slice'](b82$sd + 0x1)) : (x_84yn = null, i3rmw = $2abk['localName'] = zhakb);var khqza = $2abk['uri'] = ri3c0[x_84yn || ''];if (cm03['startElement'](khqza, i3rmw, zhakb, $2abk), !$2abk['closed']) return $2abk['currentNSMap'] = ri3c0, $2abk['localNSMap'] = d2s4$, !0x0;if (cm03['endElement'](khqza, i3rmw, zhakb), d2s4$) {
    for (x_84yn in d2s4$) cm03['endPrefixMapping'](x_84yn);
  }
}function L9vo719f(cyx3r, db2$sa, jka2d, abhkj, _y3n) {
  if (/^(?:script|textarea)$/i['test'](jka2d)) {
    var gpue6 = cyx3r['indexOf']('</' + jka2d + '>', db2$sa),
        $b2sa = cyx3r['substring'](db2$sa + 0x1, gpue6);if (/[&<]/['test']($b2sa)) return (/^script$/i['test'](jka2d) ? (_y3n['characters']($b2sa, 0x0, $b2sa['length']), gpue6) : ($b2sa = $b2sa['replace'](/&#?\w+;/g, abhkj), _y3n['characters']($b2sa, 0x0, $b2sa['length']), gpue6)
    );
  }return db2$sa + 0x1;
}function L9n4xy0(f9lto5, mc3y, $s8_4d, e7gov1) {
  var rim3c = e7gov1[$s8_4d];return null == rim3c && (rim3c = f9lto5['lastIndexOf']('</' + $s8_4d + '>'), mc3y > rim3c && (rim3c = f9lto5['lastIndexOf']('</' + $s8_4d)), e7gov1[$s8_4d] = rim3c), mc3y > rim3c;
}function L9ov7f1(tflo9, m0rci) {
  for (var zqak in tflo9) m0rci[zqak] = tflo9[zqak];
}function L9lt5fo(ahzbk, s284d, my3rc0, ahbk) {
  var qlzth = ahzbk['charAt'](s284d + 0x2);switch (qlzth) {case '-':
      if ('-' === ahzbk['charAt'](s284d + 0x3)) {
        var zaqhk = ahzbk['indexOf']('-->', s284d + 0x4);return zaqhk > s284d ? (my3rc0['comment'](ahzbk, s284d + 0x4, zaqhk - s284d - 0x4), zaqhk + 0x3) : (ahbk['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ahzbk['substr'](s284d + 0x3, 0x6)) {
        var zaqhk = ahzbk['indexOf'](']]>', s284d + 0x9);return my3rc0['startCDATA'](), my3rc0['characters'](ahzbk, s284d + 0x9, zaqhk - s284d - 0x9), my3rc0['endCDATA'](), zaqhk + 0x3;
      }var bdkaj = L9uve71g(ahzbk, s284d),
          tfzlq5 = bdkaj['length'];if (tfzlq5 > 0x1 && /!doctype/i['test'](bdkaj[0x0][0x0])) {
        var ajhk = bdkaj[0x1][0x0],
            habkj = tfzlq5 > 0x3 && /^public$/i['test'](bdkaj[0x2][0x0]) && bdkaj[0x3][0x0],
            ym0cr3 = tfzlq5 > 0x4 && bdkaj[0x4][0x0],
            a2jkhb = bdkaj[tfzlq5 - 0x1];return my3rc0['startDTD'](ajhk, habkj && habkj['replace'](/^(['"])(.*?)\1$/, '$2'), ym0cr3 && ym0cr3['replace'](/^(['"])(.*?)\1$/, '$2')), my3rc0['endDTD'](), a2jkhb['index'] + a2jkhb[0x0]['length'];
      }}return -0x1;
}function L9akqjhz(jqzth, lhz5q, nx4s) {
  var qzkahj = jqzth['indexOf']('?>', lhz5q);if (qzkahj) {
    var mrcw = jqzth['substring'](lhz5q, qzkahj)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (mrcw) {
      {
        mrcw[0x0]['length'];
      }return nx4s['processingInstruction'](mrcw[0x1], mrcw[0x2]), qzkahj + 0x2;
    }return -0x1;
  }return -0x1;
}function L9vg61u() {}function L9bak$2(y30mcr, _0ny) {
  return y30mcr['__proto__'] = _0ny, y30mcr;
}function L9uve71g(tzhlq, o59ftl) {
  var k2ha,
      ab$2k = [],
      bakh2j = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (bakh2j['lastIndex'] = o59ftl, bakh2j['exec'](tzhlq); k2ha = bakh2j['exec'](tzhlq);) if (ab$2k['push'](k2ha), k2ha[0x1]) return ab$2k;
}var L9x8 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9dj2ak = new RegExp('[\\-\\.0-9' + L9x8['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9kadj = new RegExp('^' + L9x8['source'] + L9dj2ak['source'] + '*(?::' + L9x8['source'] + L9dj2ak['source'] + '*)?$'),
    L9uv16ge = 0x0,
    L9mi3r = 0x1,
    L9veg1o7 = 0x2,
    L9$82d = 0x3,
    L9zlt5hq = 0x4,
    L9ge1 = 0x5,
    L9jqlh = 0x6,
    L9k$2d = 0x7;L9uve61['prototype'] = { 'parse': function (gep61u, $8d2b, kd2bja) {
    var s$2bd8 = this['domBuilder'];s$2bd8['startDocument'](), L9ov7f1($8d2b, $8d2b = {}), L9og7ev(gep61u, $8d2b, kd2bja, s$2bd8, this['errorHandler']), s$2bd8['endDocument']();
  } }, L9vg61u['prototype'] = { 'setTagName': function (ug1v) {
    if (!L9kadj['test'](ug1v)) throw new Error('invalid tagName:' + ug1v);this['tagName'] = ug1v;
  }, 'add': function ($ds84_, $_84ns, v97o) {
    if (!L9kadj['test']($ds84_)) throw new Error('invalid attribute:' + $ds84_);this[this['length']++] = { 'qName': $ds84_, 'value': $_84ns, 'offset': v97o };
  }, 'length': 0x0, 'getLocalName': function (cim3wr) {
    return this[cim3wr]['localName'];
  }, 'getLocator': function (x4n_8s) {
    return this[x4n_8s]['locator'];
  }, 'getQName': function (jhakb) {
    return this[jhakb]['qName'];
  }, 'getURI': function (l5qt9f) {
    return this[l5qt9f]['uri'];
  }, 'getValue': function (r03ic) {
    return this[r03ic]['value'];
  } }, L9bak$2({}, L9bak$2['prototype']) instanceof L9bak$2 || (L9bak$2 = function (n_4yx8, y8_4) {
  function t9fo57() {}t9fo57['prototype'] = y8_4, t9fo57 = new t9fo57();for (y8_4 in n_4yx8) t9fo57[y8_4] = n_4yx8[y8_4];return t9fo57;
}), exports['XMLReader'] = L9uve61;