var W = wx.$l;
function L9qzhjkl() {}function L9d$s(zqjkhl, goev1, kahjz, bjaz, hjqaz) {
  function i3mrc0(d$48s) {
    if (d$48s > 0xffff) {
      d$48s -= 0x10000;var jqhza = 0xd800 + (d$48s >> 0xa),
          l5o9 = 0xdc00 + (0x3ff & d$48s);return String['fromCharCode'](jqhza, l5o9);
    }return String['fromCharCode'](d$48s);
  }function _x4y8n(qth5lz) {
    var ri0c = qth5lz['slice'](0x1, -0x1);return ri0c in kahjz ? kahjz[ri0c] : '#' === ri0c['charAt'](0x0) ? i3mrc0(parseInt(ri0c['substr'](0x1)['replace']('x', '0x'))) : (hjqaz['error']('entity not found:' + qth5lz), qth5lz);
  }function ad$2s(s48_n$) {
    if (s48_n$ > i3r0cm) {
      var ljkzqh = zqjkhl['substring'](i3r0cm, s48_n$)['replace'](/&#?\w+;/g, _x4y8n);v7f91 && xn0y3_(i3r0cm), bjaz['characters'](ljkzqh, 0x0, s48_n$ - i3r0cm), i3r0cm = s48_n$;
    }
  }function xn0y3_(rm3ic0, ba2j) {
    for (; rm3ic0 >= evg7 && (ba2j = nx_48y['exec'](zqjkhl));) jahb = ba2j['index'], evg7 = jahb + ba2j[0x0]['length'], v7f91['lineNumber']++;v7f91['columnNumber'] = rm3ic0 - jahb + 0x1;
  }for (var jahb = 0x0, evg7 = 0x0, nx_48y = /.*(?:\r\n?|\n)|.*$/g, v7f91 = bjaz['locator'], cmry = [{ 'currentNSMap': goev1 }], d42$8 = {}, i3r0cm = 0x0;;) {
    try {
      var q5zlht = zqjkhl['indexOf']('<', i3r0cm);if (0x0 > q5zlht) {
        if (!zqjkhl['substr'](i3r0cm)['match'](/^\s*$/)) {
          var d2ja = bjaz['doc'],
              flot = d2ja['createTextNode'](zqjkhl['substr'](i3r0cm));d2ja['appendChild'](flot), bjaz['currentElement'] = flot;
        }return;
      }switch (q5zlht > i3r0cm && ad$2s(q5zlht), zqjkhl['charAt'](q5zlht + 0x1)) {case '/':
          var jlqhzt = zqjkhl['indexOf']('>', q5zlht + 0x3),
              d2bjka = zqjkhl['substring'](q5zlht + 0x2, jlqhzt),
              v1g6 = cmry['pop']();0x0 > jlqhzt ? (d2bjka = zqjkhl['substring'](q5zlht + 0x2)['replace'](/[\s<].*/, ''), hjqaz['error']('end tag name: ' + d2bjka + ' is not complete:' + v1g6['tagName']), jlqhzt = q5zlht + 0x1 + d2bjka['length']) : d2bjka['match'](/\s</) && (d2bjka = d2bjka['replace'](/[\s<].*/, ''), hjqaz['error']('end tag name: ' + d2bjka + ' maybe not complete'), jlqhzt = q5zlht + 0x1 + d2bjka['length']);var qjlh = v1g6['localNSMap'],
              lftzq5 = v1g6['tagName'] == d2bjka,
              of9t5 = lftzq5 || v1g6['tagName'] && v1g6['tagName']['toLowerCase']() == d2bjka['toLowerCase']();if (of9t5) {
            if (bjaz['endElement'](v1g6['uri'], v1g6['localName'], d2bjka), qjlh) {
              for (var qfl5t9 in qjlh) bjaz['endPrefixMapping'](qfl5t9);
            }lftzq5 || hjqaz['fatalError']('end tag name: ' + d2bjka + ' is not match the current start tagName:' + v1g6['tagName']);
          } else cmry['push'](v1g6);jlqhzt++;break;case '?':
          v7f91 && xn0y3_(q5zlht), jlqhzt = L9m3cir(zqjkhl, q5zlht, bjaz);break;case '!':
          v7f91 && xn0y3_(q5zlht), jlqhzt = L9kaj2bd(zqjkhl, q5zlht, bjaz, hjqaz);break;default:
          v7f91 && xn0y3_(q5zlht);var tzfql5 = new L9m3ryc(),
              x3c0y = cmry[cmry['length'] - 0x1]['currentNSMap'],
              jlqhzt = L9hqzklj(zqjkhl, q5zlht, tzfql5, x3c0y, _x4y8n, hjqaz),
              t5f79o = tzfql5['length'];if (!tzfql5['closed'] && L9nyx8_4(zqjkhl, jlqhzt, tzfql5['tagName'], d42$8) && (tzfql5['closed'] = !0x0, kahjz['nbsp'] || hjqaz['warning']('unclosed xml attribute')), v7f91 && t5f79o) {
            for (var $s84_d = L9l9oft5(v7f91, {}), g17oev = 0x0; t5f79o > g17oev; g17oev++) {
              var eo79 = tzfql5[g17oev];xn0y3_(eo79['offset']), eo79['locator'] = L9l9oft5(v7f91, {});
            }bjaz['locator'] = $s84_d, L9i3mc0(tzfql5, bjaz, x3c0y) && cmry['push'](tzfql5), bjaz['locator'] = v7f91;
          } else L9i3mc0(tzfql5, bjaz, x3c0y) && cmry['push'](tzfql5);'http://www.w3.org/1999/xhtml' !== tzfql5['uri'] || tzfql5['closed'] ? jlqhzt++ : jlqhzt = L9ryxc0(zqjkhl, jlqhzt, tzfql5['tagName'], _x4y8n, bjaz);}
    } catch (_y0x4) {
      hjqaz['error']('element parse error: ' + _y0x4), jlqhzt = -0x1;
    }jlqhzt > i3r0cm ? i3r0cm = jlqhzt : ad$2s(Math['max'](q5zlht, i3r0cm) + 0x1);
  }
}function L9l9oft5(v795f, zbjkha) {
  return zbjkha['lineNumber'] = v795f['lineNumber'], zbjkha['columnNumber'] = v795f['columnNumber'], zbjkha;
}function L9hqzklj(pgeu6, peug61, i3m0r, ynx40, ftl9o, rw) {
  for (var ogv7e1, bhzakj, lo95tf = ++peug61, lfq = L9e6vgu;;) {
    var sd48 = pgeu6['charAt'](lo95tf);switch (sd48) {case '=':
        if (lfq === L9ry3mc) ogv7e1 = pgeu6['slice'](peug61, lo95tf), lfq = L9e1vu6g;else {
          if (lfq !== L9iwr3) throw new Error('attribute equal must after attrName');lfq = L9e1vu6g;
        }break;case '\x27':case '\x22':
        if (lfq === L9e1vu6g || lfq === L9ry3mc) {
          if (lfq === L9ry3mc && (rw['warning']('attribute value must after "="'), ogv7e1 = pgeu6['slice'](peug61, lo95tf)), peug61 = lo95tf + 0x1, lo95tf = pgeu6['indexOf'](sd48, peug61), !(lo95tf > 0x0)) throw new Error('attribute value no end \'' + sd48 + '\' match');bhzakj = pgeu6['slice'](peug61, lo95tf)['replace'](/&#?\w+;/g, ftl9o), i3m0r['add'](ogv7e1, bhzakj, peug61 - 0x1), lfq = L9ci03mr;
        } else {
          if (lfq != L9htz5) throw new Error('attribute value must after "="');bhzakj = pgeu6['slice'](peug61, lo95tf)['replace'](/&#?\w+;/g, ftl9o), i3m0r['add'](ogv7e1, bhzakj, peug61), rw['warning']('attribute "' + ogv7e1 + '" missed start quot(' + sd48 + ')!!'), peug61 = lo95tf + 0x1, lfq = L9ci03mr;
        }break;case '/':
        switch (lfq) {case L9e6vgu:
            i3m0r['setTagName'](pgeu6['slice'](peug61, lo95tf));case L9ci03mr:case L9r3mc0y:case L9n8xs4:
            lfq = L9n8xs4, i3m0r['closed'] = !0x0;case L9htz5:case L9ry3mc:case L9iwr3:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return rw['error']('unexpected end of input'), lfq == L9e6vgu && i3m0r['setTagName'](pgeu6['slice'](peug61, lo95tf)), lo95tf;case '>':
        switch (lfq) {case L9e6vgu:
            i3m0r['setTagName'](pgeu6['slice'](peug61, lo95tf));case L9ci03mr:case L9r3mc0y:case L9n8xs4:
            break;case L9htz5:case L9ry3mc:
            bhzakj = pgeu6['slice'](peug61, lo95tf), '/' === bhzakj['slice'](-0x1) && (i3m0r['closed'] = !0x0, bhzakj = bhzakj['slice'](0x0, -0x1));case L9iwr3:
            lfq === L9iwr3 && (bhzakj = ogv7e1), lfq == L9htz5 ? (rw['warning']('attribute "' + bhzakj + '" missed quot(")!!'), i3m0r['add'](ogv7e1, bhzakj['replace'](/&#?\w+;/g, ftl9o), peug61)) : ('http://www.w3.org/1999/xhtml' === ynx40[''] && bhzakj['match'](/^(?:disabled|checked|selected)$/i) || rw['warning']('attribute "' + bhzakj + '" missed value!! "' + bhzakj + '" instead!!'), i3m0r['add'](bhzakj, bhzakj, peug61));break;case L9e1vu6g:
            throw new Error('attribute value missed!!');}return lo95tf;case '\u0080':
        sd48 = '\x20';default:
        if ('\x20' >= sd48) switch (lfq) {case L9e6vgu:
            i3m0r['setTagName'](pgeu6['slice'](peug61, lo95tf)), lfq = L9r3mc0y;break;case L9ry3mc:
            ogv7e1 = pgeu6['slice'](peug61, lo95tf), lfq = L9iwr3;break;case L9htz5:
            var bhzakj = pgeu6['slice'](peug61, lo95tf)['replace'](/&#?\w+;/g, ftl9o);rw['warning']('attribute "' + bhzakj + '" missed quot(")!!'), i3m0r['add'](ogv7e1, bhzakj, peug61);case L9ci03mr:
            lfq = L9r3mc0y;} else switch (lfq) {case L9iwr3:
            {
              i3m0r['tagName'];
            }'http://www.w3.org/1999/xhtml' === ynx40[''] && ogv7e1['match'](/^(?:disabled|checked|selected)$/i) || rw['warning']('attribute "' + ogv7e1 + '" missed value!! "' + ogv7e1 + '" instead2!!'), i3m0r['add'](ogv7e1, ogv7e1, peug61), peug61 = lo95tf, lfq = L9ry3mc;break;case L9ci03mr:
            rw['warning']('attribute space is required"' + ogv7e1 + '\x22!!');case L9r3mc0y:
            lfq = L9ry3mc, peug61 = lo95tf;break;case L9e1vu6g:
            lfq = L9htz5, peug61 = lo95tf;break;case L9n8xs4:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}lo95tf++;
  }
}function L9i3mc0(sn_48$, nxyr3, hkzlqj) {
  for (var b2khja = sn_48$['tagName'], wri3 = null, v91fo = sn_48$['length']; v91fo--;) {
    var s$48_n = sn_48$[v91fo],
        n_3yx0 = s$48_n['qName'],
        xny40_ = s$48_n['value'],
        qlft9 = n_3yx0['indexOf'](':');if (qlft9 > 0x0) var hkab = s$48_n['prefix'] = n_3yx0['slice'](0x0, qlft9),
        p1u6ge = n_3yx0['slice'](qlft9 + 0x1),
        bs$da = 'xmlns' === hkab && p1u6ge;else p1u6ge = n_3yx0, hkab = null, bs$da = 'xmlns' === n_3yx0 && '';s$48_n['localName'] = p1u6ge, bs$da !== !0x1 && (null == wri3 && (wri3 = {}, L9b8s2d(hkzlqj, hkzlqj = {})), hkzlqj[bs$da] = wri3[bs$da] = xny40_, s$48_n['uri'] = 'http://www.w3.org/2000/xmlns/', nxyr3['startPrefixMapping'](bs$da, xny40_));
  }for (var v91fo = sn_48$['length']; v91fo--;) {
    s$48_n = sn_48$[v91fo];var hkab = s$48_n['prefix'];hkab && ('xml' === hkab && (s$48_n['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hkab && (s$48_n['uri'] = hkzlqj[hkab || '']));
  }var qlft9 = b2khja['indexOf'](':');qlft9 > 0x0 ? (hkab = sn_48$['prefix'] = b2khja['slice'](0x0, qlft9), p1u6ge = sn_48$['localName'] = b2khja['slice'](qlft9 + 0x1)) : (hkab = null, p1u6ge = sn_48$['localName'] = b2khja);var d$4s82 = sn_48$['uri'] = hkzlqj[hkab || ''];if (nxyr3['startElement'](d$4s82, p1u6ge, b2khja, sn_48$), !sn_48$['closed']) return sn_48$['currentNSMap'] = hkzlqj, sn_48$['localNSMap'] = wri3, !0x0;if (nxyr3['endElement'](d$4s82, p1u6ge, b2khja), wri3) {
    for (hkab in wri3) nxyr3['endPrefixMapping'](hkab);
  }
}function L9ryxc0(kzjhba, fl5t9, ry0c, n40x_, epg61) {
  if (/^(?:script|textarea)$/i['test'](ry0c)) {
    var db$28 = kzjhba['indexOf']('</' + ry0c + '>', fl5t9),
        v597 = kzjhba['substring'](fl5t9 + 0x1, db$28);if (/[&<]/['test'](v597)) return (/^script$/i['test'](ry0c) ? (epg61['characters'](v597, 0x0, v597['length']), db$28) : (v597 = v597['replace'](/&#?\w+;/g, n40x_), epg61['characters'](v597, 0x0, v597['length']), db$28)
    );
  }return fl5t9 + 0x1;
}function L9nyx8_4(d2jak, jdkab2, f759ot, kabhz) {
  var lq5ftz = kabhz[f759ot];return null == lq5ftz && (lq5ftz = d2jak['lastIndexOf']('</' + f759ot + '>'), jdkab2 > lq5ftz && (lq5ftz = d2jak['lastIndexOf']('</' + f759ot)), kabhz[f759ot] = lq5ftz), jdkab2 > lq5ftz;
}function L9b8s2d(vfo795, _$ds4) {
  for (var d24s8 in vfo795) _$ds4[d24s8] = vfo795[d24s8];
}function L9kaj2bd(a$2dsb, n_8xs4, x4ns8_, l5o) {
  var cx3yr = a$2dsb['charAt'](n_8xs4 + 0x2);switch (cx3yr) {case '-':
      if ('-' === a$2dsb['charAt'](n_8xs4 + 0x3)) {
        var zfqt = a$2dsb['indexOf']('-->', n_8xs4 + 0x4);return zfqt > n_8xs4 ? (x4ns8_['comment'](a$2dsb, n_8xs4 + 0x4, zfqt - n_8xs4 - 0x4), zfqt + 0x3) : (l5o['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == a$2dsb['substr'](n_8xs4 + 0x3, 0x6)) {
        var zfqt = a$2dsb['indexOf'](']]>', n_8xs4 + 0x9);return x4ns8_['startCDATA'](), x4ns8_['characters'](a$2dsb, n_8xs4 + 0x9, zfqt - n_8xs4 - 0x9), x4ns8_['endCDATA'](), zfqt + 0x3;
      }var jbak2d = L9_4x0n(a$2dsb, n_8xs4),
          xyr03n = jbak2d['length'];if (xyr03n > 0x1 && /!doctype/i['test'](jbak2d[0x0][0x0])) {
        var ft9l5 = jbak2d[0x1][0x0],
            $ab2k = xyr03n > 0x3 && /^public$/i['test'](jbak2d[0x2][0x0]) && jbak2d[0x3][0x0],
            hlz5tq = xyr03n > 0x4 && jbak2d[0x4][0x0],
            hqajkz = jbak2d[xyr03n - 0x1];return x4ns8_['startDTD'](ft9l5, $ab2k && $ab2k['replace'](/^(['"])(.*?)\1$/, '$2'), hlz5tq && hlz5tq['replace'](/^(['"])(.*?)\1$/, '$2')), x4ns8_['endDTD'](), hqajkz['index'] + hqajkz[0x0]['length'];
      }}return -0x1;
}function L9m3cir(e1o, lqzhk, ge6p1u) {
  var zlq5 = e1o['indexOf']('?>', lqzhk);if (zlq5) {
    var vf5o97 = e1o['substring'](lqzhk, zlq5)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (vf5o97) {
      {
        vf5o97[0x0]['length'];
      }return ge6p1u['processingInstruction'](vf5o97[0x1], vf5o97[0x2]), zlq5 + 0x2;
    }return -0x1;
  }return -0x1;
}function L9m3ryc() {}function L9gup61(khqzl, jzhaqk) {
  return khqzl['__proto__'] = jzhaqk, khqzl;
}function L9_4x0n(hbkzaj, s4d$8) {
  var u1veg6,
      o19ev7 = [],
      g6eu1v = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (g6eu1v['lastIndex'] = s4d$8, g6eu1v['exec'](hbkzaj); u1veg6 = g6eu1v['exec'](hbkzaj);) if (o19ev7['push'](u1veg6), u1veg6[0x1]) return o19ev7;
}var L9f5t9ql = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9n4x8_y = new RegExp('[\\-\\.0-9' + L9f5t9ql['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9zkjbh = new RegExp('^' + L9f5t9ql['source'] + L9n4x8_y['source'] + '*(?::' + L9f5t9ql['source'] + L9n4x8_y['source'] + '*)?$'),
    L9e6vgu = 0x0,
    L9ry3mc = 0x1,
    L9iwr3 = 0x2,
    L9e1vu6g = 0x3,
    L9htz5 = 0x4,
    L9ci03mr = 0x5,
    L9r3mc0y = 0x6,
    L9n8xs4 = 0x7;L9qzhjkl['prototype'] = { 'parse': function (my0r, y0cxr3, ns_4$8) {
    var lqkzjh = this['domBuilder'];lqkzjh['startDocument'](), L9b8s2d(y0cxr3, y0cxr3 = {}), L9d$s(my0r, y0cxr3, ns_4$8, lqkzjh, this['errorHandler']), lqkzjh['endDocument']();
  } }, L9m3ryc['prototype'] = { 'setTagName': function (jbhk2a) {
    if (!L9zkjbh['test'](jbhk2a)) throw new Error('invalid tagName:' + jbhk2a);this['tagName'] = jbhk2a;
  }, 'add': function (lthzj, myc30, bad$s2) {
    if (!L9zkjbh['test'](lthzj)) throw new Error('invalid attribute:' + lthzj);this[this['length']++] = { 'qName': lthzj, 'value': myc30, 'offset': bad$s2 };
  }, 'length': 0x0, 'getLocalName': function (haqkz) {
    return this[haqkz]['localName'];
  }, 'getLocator': function (ny0r) {
    return this[ny0r]['locator'];
  }, 'getQName': function (zjkaqh) {
    return this[zjkaqh]['qName'];
  }, 'getURI': function (kqljh) {
    return this[kqljh]['uri'];
  }, 'getValue': function (e16u) {
    return this[e16u]['value'];
  } }, L9gup61({}, L9gup61['prototype']) instanceof L9gup61 || (L9gup61 = function (jbzahk, $2bads) {
  function s2$8b() {}s2$8b['prototype'] = $2bads, s2$8b = new s2$8b();for ($2bads in jbzahk) s2$8b[$2bads] = jbzahk[$2bads];return s2$8b;
}), exports['XMLReader'] = L9qzhjkl;