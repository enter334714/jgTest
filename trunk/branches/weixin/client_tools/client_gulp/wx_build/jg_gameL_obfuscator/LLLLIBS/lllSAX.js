var W = wx.$l;
function L9_8xns4() {}function L9ny_3x(d$a2, snx4, e1uv7g, eu6g1, cmwi3) {
  function hjba2k(i30mr) {
    if (i30mr > 0xffff) {
      i30mr -= 0x10000;var dsb2a$ = 0xd800 + (i30mr >> 0xa),
          imcw3r = 0xdc00 + (0x3ff & i30mr);return String['fromCharCode'](dsb2a$, imcw3r);
    }return String['fromCharCode'](i30mr);
  }function hjklqz(o5ftl9) {
    var bds2a = o5ftl9['slice'](0x1, -0x1);return bds2a in e1uv7g ? e1uv7g[bds2a] : '#' === bds2a['charAt'](0x0) ? hjba2k(parseInt(bds2a['substr'](0x1)['replace']('x', '0x'))) : (cmwi3['error']('entity not found:' + o5ftl9), o5ftl9);
  }function m30ir(tfz5q) {
    if (tfz5q > g7u1e) {
      var adbj2 = d$a2['substring'](g7u1e, tfz5q)['replace'](/&#?\w+;/g, hjklqz);jazkb && fv79(g7u1e), eu6g1['characters'](adbj2, 0x0, tfz5q - g7u1e), g7u1e = tfz5q;
    }
  }function fv79(d$4s_, rc3y) {
    for (; d$4s_ >= sb$2a && (rc3y = c3i0m['exec'](d$a2));) sx_84n = rc3y['index'], sb$2a = sx_84n + rc3y[0x0]['length'], jazkb['lineNumber']++;jazkb['columnNumber'] = d$4s_ - sx_84n + 0x1;
  }for (var sx_84n = 0x0, sb$2a = 0x0, c3i0m = /.*(?:\r\n?|\n)|.*$/g, jazkb = eu6g1['locator'], hjl = [{ 'currentNSMap': snx4 }], v61ge = {}, g7u1e = 0x0;;) {
    try {
      var nsx8 = d$a2['indexOf']('<', g7u1e);if (0x0 > nsx8) {
        if (!d$a2['substr'](g7u1e)['match'](/^\s*$/)) {
          var kbzha = eu6g1['doc'],
              cyr0x = kbzha['createTextNode'](d$a2['substr'](g7u1e));kbzha['appendChild'](cyr0x), eu6g1['currentElement'] = cyr0x;
        }return;
      }switch (nsx8 > g7u1e && m30ir(nsx8), d$a2['charAt'](nsx8 + 0x1)) {case '/':
          var ahbz = d$a2['indexOf']('>', nsx8 + 0x3),
              rw3mci = d$a2['substring'](nsx8 + 0x2, ahbz),
              dkjab2 = hjl['pop']();0x0 > ahbz ? (rw3mci = d$a2['substring'](nsx8 + 0x2)['replace'](/[\s<].*/, ''), cmwi3['error']('end tag name: ' + rw3mci + ' is not complete:' + dkjab2['tagName']), ahbz = nsx8 + 0x1 + rw3mci['length']) : rw3mci['match'](/\s</) && (rw3mci = rw3mci['replace'](/[\s<].*/, ''), cmwi3['error']('end tag name: ' + rw3mci + ' maybe not complete'), ahbz = nsx8 + 0x1 + rw3mci['length']);var aqjzkh = dkjab2['localNSMap'],
              d$akb = dkjab2['tagName'] == rw3mci,
              v9o17e = d$akb || dkjab2['tagName'] && dkjab2['tagName']['toLowerCase']() == rw3mci['toLowerCase']();if (v9o17e) {
            if (eu6g1['endElement'](dkjab2['uri'], dkjab2['localName'], rw3mci), aqjzkh) {
              for (var akdj2b in aqjzkh) eu6g1['endPrefixMapping'](akdj2b);
            }d$akb || cmwi3['fatalError']('end tag name: ' + rw3mci + ' is not match the current start tagName:' + dkjab2['tagName']);
          } else hjl['push'](dkjab2);ahbz++;break;case '?':
          jazkb && fv79(nsx8), ahbz = L9m0c3ir(d$a2, nsx8, eu6g1);break;case '!':
          jazkb && fv79(nsx8), ahbz = L9ry3xn(d$a2, nsx8, eu6g1, cmwi3);break;default:
          jazkb && fv79(nsx8);var sbd$ = new L9jthqz(),
              l5o9ft = hjl[hjl['length'] - 0x1]['currentNSMap'],
              ahbz = L9ve1ug(d$a2, nsx8, sbd$, l5o9ft, hjklqz, cmwi3),
              qzjkl = sbd$['length'];if (!sbd$['closed'] && L9ov7f(d$a2, ahbz, sbd$['tagName'], v61ge) && (sbd$['closed'] = !0x0, e1uv7g['nbsp'] || cmwi3['warning']('unclosed xml attribute')), jazkb && qzjkl) {
            for (var $s2d4 = L9qlt59(jazkb, {}), lf5tz = 0x0; qzjkl > lf5tz; lf5tz++) {
              var bkd2 = sbd$[lf5tz];fv79(bkd2['offset']), bkd2['locator'] = L9qlt59(jazkb, {});
            }eu6g1['locator'] = $s2d4, L9b2ahj(sbd$, eu6g1, l5o9ft) && hjl['push'](sbd$), eu6g1['locator'] = jazkb;
          } else L9b2ahj(sbd$, eu6g1, l5o9ft) && hjl['push'](sbd$);'http://www.w3.org/1999/xhtml' !== sbd$['uri'] || sbd$['closed'] ? ahbz++ : ahbz = L9akd(d$a2, ahbz, sbd$['tagName'], hjklqz, eu6g1);}
    } catch (lq9ft) {
      cmwi3['error']('element parse error: ' + lq9ft), ahbz = -0x1;
    }ahbz > g7u1e ? g7u1e = ahbz : m30ir(Math['max'](nsx8, g7u1e) + 0x1);
  }
}function L9qlt59(v7fo95, tql95f) {
  return tql95f['lineNumber'] = v7fo95['lineNumber'], tql95f['columnNumber'] = v7fo95['columnNumber'], tql95f;
}function L9ve1ug(nx4s8_, mric30, qjhtlz, dkjb2a, o197v, lh5) {
  for (var qzf, t7f9o, kjhbza = ++mric30, v7u1e = L9fq95;;) {
    var t5hlz = nx4s8_['charAt'](kjhbza);switch (t5hlz) {case '=':
        if (v7u1e === L9rcm3wi) qzf = nx4s8_['slice'](mric30, kjhbza), v7u1e = L9tlo5f9;else {
          if (v7u1e !== L9qzakjh) throw new Error('attribute equal must after attrName');v7u1e = L9tlo5f9;
        }break;case '\x27':case '\x22':
        if (v7u1e === L9tlo5f9 || v7u1e === L9rcm3wi) {
          if (v7u1e === L9rcm3wi && (lh5['warning']('attribute value must after "="'), qzf = nx4s8_['slice'](mric30, kjhbza)), mric30 = kjhbza + 0x1, kjhbza = nx4s8_['indexOf'](t5hlz, mric30), !(kjhbza > 0x0)) throw new Error('attribute value no end \'' + t5hlz + '\' match');t7f9o = nx4s8_['slice'](mric30, kjhbza)['replace'](/&#?\w+;/g, o197v), qjhtlz['add'](qzf, t7f9o, mric30 - 0x1), v7u1e = L9$82sb;
        } else {
          if (v7u1e != L9q5lz) throw new Error('attribute value must after "="');t7f9o = nx4s8_['slice'](mric30, kjhbza)['replace'](/&#?\w+;/g, o197v), qjhtlz['add'](qzf, t7f9o, mric30), lh5['warning']('attribute "' + qzf + '" missed start quot(' + t5hlz + ')!!'), mric30 = kjhbza + 0x1, v7u1e = L9$82sb;
        }break;case '/':
        switch (v7u1e) {case L9fq95:
            qjhtlz['setTagName'](nx4s8_['slice'](mric30, kjhbza));case L9$82sb:case L9hqjzlk:case L9zjlqhk:
            v7u1e = L9zjlqhk, qjhtlz['closed'] = !0x0;case L9q5lz:case L9rcm3wi:case L9qzakjh:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return lh5['error']('unexpected end of input'), v7u1e == L9fq95 && qjhtlz['setTagName'](nx4s8_['slice'](mric30, kjhbza)), kjhbza;case '>':
        switch (v7u1e) {case L9fq95:
            qjhtlz['setTagName'](nx4s8_['slice'](mric30, kjhbza));case L9$82sb:case L9hqjzlk:case L9zjlqhk:
            break;case L9q5lz:case L9rcm3wi:
            t7f9o = nx4s8_['slice'](mric30, kjhbza), '/' === t7f9o['slice'](-0x1) && (qjhtlz['closed'] = !0x0, t7f9o = t7f9o['slice'](0x0, -0x1));case L9qzakjh:
            v7u1e === L9qzakjh && (t7f9o = qzf), v7u1e == L9q5lz ? (lh5['warning']('attribute "' + t7f9o + '" missed quot(")!!'), qjhtlz['add'](qzf, t7f9o['replace'](/&#?\w+;/g, o197v), mric30)) : ('http://www.w3.org/1999/xhtml' === dkjb2a[''] && t7f9o['match'](/^(?:disabled|checked|selected)$/i) || lh5['warning']('attribute "' + t7f9o + '" missed value!! "' + t7f9o + '" instead!!'), qjhtlz['add'](t7f9o, t7f9o, mric30));break;case L9tlo5f9:
            throw new Error('attribute value missed!!');}return kjhbza;case '\u0080':
        t5hlz = '\x20';default:
        if ('\x20' >= t5hlz) switch (v7u1e) {case L9fq95:
            qjhtlz['setTagName'](nx4s8_['slice'](mric30, kjhbza)), v7u1e = L9hqjzlk;break;case L9rcm3wi:
            qzf = nx4s8_['slice'](mric30, kjhbza), v7u1e = L9qzakjh;break;case L9q5lz:
            var t7f9o = nx4s8_['slice'](mric30, kjhbza)['replace'](/&#?\w+;/g, o197v);lh5['warning']('attribute "' + t7f9o + '" missed quot(")!!'), qjhtlz['add'](qzf, t7f9o, mric30);case L9$82sb:
            v7u1e = L9hqjzlk;} else switch (v7u1e) {case L9qzakjh:
            {
              qjhtlz['tagName'];
            }'http://www.w3.org/1999/xhtml' === dkjb2a[''] && qzf['match'](/^(?:disabled|checked|selected)$/i) || lh5['warning']('attribute "' + qzf + '" missed value!! "' + qzf + '" instead2!!'), qjhtlz['add'](qzf, qzf, mric30), mric30 = kjhbza, v7u1e = L9rcm3wi;break;case L9$82sb:
            lh5['warning']('attribute space is required"' + qzf + '\x22!!');case L9hqjzlk:
            v7u1e = L9rcm3wi, mric30 = kjhbza;break;case L9tlo5f9:
            v7u1e = L9q5lz, mric30 = kjhbza;break;case L9zjlqhk:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}kjhbza++;
  }
}function L9b2ahj(jqahk, f5o9lt, hklzj) {
  for (var m3ry0c = jqahk['tagName'], v17oge = null, euv = jqahk['length']; euv--;) {
    var t59lqf = jqahk[euv],
        q5t9 = t59lqf['qName'],
        yr0nx3 = t59lqf['value'],
        e6v1ug = q5t9['indexOf'](':');if (e6v1ug > 0x0) var yxcr0 = t59lqf['prefix'] = q5t9['slice'](0x0, e6v1ug),
        hlkq = q5t9['slice'](e6v1ug + 0x1),
        z5tf = 'xmlns' === yxcr0 && hlkq;else hlkq = q5t9, yxcr0 = null, z5tf = 'xmlns' === q5t9 && '';t59lqf['localName'] = hlkq, z5tf !== !0x1 && (null == v17oge && (v17oge = {}, L9v7fo9(hklzj, hklzj = {})), hklzj[z5tf] = v17oge[z5tf] = yr0nx3, t59lqf['uri'] = 'http://www.w3.org/2000/xmlns/', f5o9lt['startPrefixMapping'](z5tf, yr0nx3));
  }for (var euv = jqahk['length']; euv--;) {
    t59lqf = jqahk[euv];var yxcr0 = t59lqf['prefix'];yxcr0 && ('xml' === yxcr0 && (t59lqf['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== yxcr0 && (t59lqf['uri'] = hklzj[yxcr0 || '']));
  }var e6v1ug = m3ry0c['indexOf'](':');e6v1ug > 0x0 ? (yxcr0 = jqahk['prefix'] = m3ry0c['slice'](0x0, e6v1ug), hlkq = jqahk['localName'] = m3ry0c['slice'](e6v1ug + 0x1)) : (yxcr0 = null, hlkq = jqahk['localName'] = m3ry0c);var klzhqj = jqahk['uri'] = hklzj[yxcr0 || ''];if (f5o9lt['startElement'](klzhqj, hlkq, m3ry0c, jqahk), !jqahk['closed']) return jqahk['currentNSMap'] = hklzj, jqahk['localNSMap'] = v17oge, !0x0;if (f5o9lt['endElement'](klzhqj, hlkq, m3ry0c), v17oge) {
    for (yxcr0 in v17oge) f5o9lt['endPrefixMapping'](yxcr0);
  }
}function L9akd(d_s48$, h5tql, kbd$2a, ds4_$, wcr3mi) {
  if (/^(?:script|textarea)$/i['test'](kbd$2a)) {
    var $8ns_4 = d_s48$['indexOf']('</' + kbd$2a + '>', h5tql),
        fvo57 = d_s48$['substring'](h5tql + 0x1, $8ns_4);if (/[&<]/['test'](fvo57)) return (/^script$/i['test'](kbd$2a) ? (wcr3mi['characters'](fvo57, 0x0, fvo57['length']), $8ns_4) : (fvo57 = fvo57['replace'](/&#?\w+;/g, ds4_$), wcr3mi['characters'](fvo57, 0x0, fvo57['length']), $8ns_4)
    );
  }return h5tql + 0x1;
}function L9ov7f(kjhlz, ci03m, n4yx, $8sb2d) {
  var jkad2 = $8sb2d[n4yx];return null == jkad2 && (jkad2 = kjhlz['lastIndexOf']('</' + n4yx + '>'), ci03m > jkad2 && (jkad2 = kjhlz['lastIndexOf']('</' + n4yx)), $8sb2d[n4yx] = jkad2), ci03m > jkad2;
}function L9v7fo9(lzqh5t, zabhjk) {
  for (var t5ol in lzqh5t) zabhjk[t5ol] = lzqh5t[t5ol];
}function L9ry3xn(s4$d_, jkb2h, sd_$8, x4n_s8) {
  var _nx04 = s4$d_['charAt'](jkb2h + 0x2);switch (_nx04) {case '-':
      if ('-' === s4$d_['charAt'](jkb2h + 0x3)) {
        var dk2b$a = s4$d_['indexOf']('-->', jkb2h + 0x4);return dk2b$a > jkb2h ? (sd_$8['comment'](s4$d_, jkb2h + 0x4, dk2b$a - jkb2h - 0x4), dk2b$a + 0x3) : (x4n_s8['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == s4$d_['substr'](jkb2h + 0x3, 0x6)) {
        var dk2b$a = s4$d_['indexOf'](']]>', jkb2h + 0x9);return sd_$8['startCDATA'](), sd_$8['characters'](s4$d_, jkb2h + 0x9, dk2b$a - jkb2h - 0x9), sd_$8['endCDATA'](), dk2b$a + 0x3;
      }var sabd = L9lzhtjq(s4$d_, jkb2h),
          ci30r = sabd['length'];if (ci30r > 0x1 && /!doctype/i['test'](sabd[0x0][0x0])) {
        var n4$_8s = sabd[0x1][0x0],
            t95fo = ci30r > 0x3 && /^public$/i['test'](sabd[0x2][0x0]) && sabd[0x3][0x0],
            c03rim = ci30r > 0x4 && sabd[0x4][0x0],
            kb2$d = sabd[ci30r - 0x1];return sd_$8['startDTD'](n4$_8s, t95fo && t95fo['replace'](/^(['"])(.*?)\1$/, '$2'), c03rim && c03rim['replace'](/^(['"])(.*?)\1$/, '$2')), sd_$8['endDTD'](), kb2$d['index'] + kb2$d[0x0]['length'];
      }}return -0x1;
}function L9m0c3ir(x30nry, yx40n_, a2dbk) {
  var zhajkq = x30nry['indexOf']('?>', yx40n_);if (zhajkq) {
    var rcy0x3 = x30nry['substring'](yx40n_, zhajkq)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (rcy0x3) {
      {
        rcy0x3[0x0]['length'];
      }return a2dbk['processingInstruction'](rcy0x3[0x1], rcy0x3[0x2]), zhajkq + 0x2;
    }return -0x1;
  }return -0x1;
}function L9jthqz() {}function L9hka2jb(kazhjb, tqzf5l) {
  return kazhjb['__proto__'] = tqzf5l, kazhjb;
}function L9lzhtjq(xyn0_, qt5lfz) {
  var ftlz5,
      ak2hbj = [],
      e7ogv = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (e7ogv['lastIndex'] = qt5lfz, e7ogv['exec'](xyn0_); ftlz5 = e7ogv['exec'](xyn0_);) if (ak2hbj['push'](ftlz5), ftlz5[0x1]) return ak2hbj;
}var L9gv1ue6 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9ja2b = new RegExp('[\\-\\.0-9' + L9gv1ue6['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9_48nxs = new RegExp('^' + L9gv1ue6['source'] + L9ja2b['source'] + '*(?::' + L9gv1ue6['source'] + L9ja2b['source'] + '*)?$'),
    L9fq95 = 0x0,
    L9rcm3wi = 0x1,
    L9qzakjh = 0x2,
    L9tlo5f9 = 0x3,
    L9q5lz = 0x4,
    L9$82sb = 0x5,
    L9hqjzlk = 0x6,
    L9zjlqhk = 0x7;L9_8xns4['prototype'] = { 'parse': function ($2b8s, o9fv17, zlkhq) {
    var x_04ny = this['domBuilder'];x_04ny['startDocument'](), L9v7fo9(o9fv17, o9fv17 = {}), L9ny_3x($2b8s, o9fv17, zlkhq, x_04ny, this['errorHandler']), x_04ny['endDocument']();
  } }, L9jthqz['prototype'] = { 'setTagName': function (eov1) {
    if (!L9_48nxs['test'](eov1)) throw new Error('invalid tagName:' + eov1);this['tagName'] = eov1;
  }, 'add': function (tql5fz, s84_nx, e1uv7) {
    if (!L9_48nxs['test'](tql5fz)) throw new Error('invalid attribute:' + tql5fz);this[this['length']++] = { 'qName': tql5fz, 'value': s84_nx, 'offset': e1uv7 };
  }, 'length': 0x0, 'getLocalName': function (t5fq) {
    return this[t5fq]['localName'];
  }, 'getLocator': function (jkdba) {
    return this[jkdba]['locator'];
  }, 'getQName': function (kazhbj) {
    return this[kazhbj]['qName'];
  }, 'getURI': function (flq5t) {
    return this[flq5t]['uri'];
  }, 'getValue': function (zlq5th) {
    return this[zlq5th]['value'];
  } }, L9hka2jb({}, L9hka2jb['prototype']) instanceof L9hka2jb || (L9hka2jb = function ($sb28d, lf9o) {
  function _x0y4() {}_x0y4['prototype'] = lf9o, _x0y4 = new _x0y4();for (lf9o in $sb28d) _x0y4[lf9o] = $sb28d[lf9o];return _x0y4;
}), exports['XMLReader'] = L9_8xns4;