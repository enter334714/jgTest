var S = wx.$J;
function j1_l0gc4() {}function j1_axhz9$(n45e, dx8qi, q2xi8, epnu4, luepb) {
  function rsk76(xz9h) {
    if (xz9h > 0xffff) {
      xz9h -= 0x10000;var lygc0o = 0xd800 + (xz9h >> 0xa),
          m182 = 0xdc00 + (0x3ff & xz9h);return String['fromCharCode'](lygc0o, m182);
    }return String['fromCharCode'](xz9h);
  }function cuol0(r6f71) {
    var zia9x8 = r6f71['slice'](0x1, -0x1);return zia9x8 in q2xi8 ? q2xi8[zia9x8] : '#' === zia9x8['charAt'](0x0) ? rsk76(parseInt(zia9x8['substr'](0x1)['replace']('x', '0x'))) : (luepb['error']('entity not found:' + r6f71), r6f71);
  }function fks7r(o6ky7) {
    if (o6ky7 > mqf2d1) {
      var ahzxi = n45e['substring'](mqf2d1, o6ky7)['replace'](/&#?\w+;/g, cuol0);j5enpb && ks76(mqf2d1), epnu4['characters'](ahzxi, 0x0, o6ky7 - mqf2d1), mqf2d1 = o6ky7;
    }
  }function ks76(pun4be, ublpe) {
    for (; pun4be >= k6s7o && (ublpe = mf17r6['exec'](n45e));) lcy0o = ublpe['index'], k6s7o = lcy0o + ublpe[0x0]['length'], j5enpb['lineNumber']++;j5enpb['columnNumber'] = pun4be - lcy0o + 0x1;
  }for (var lcy0o = 0x0, k6s7o = 0x0, mf17r6 = /.*(?:\r\n?|\n)|.*$/g, j5enpb = epnu4['locator'], ceulb4 = [{ 'currentNSMap': dx8qi }], i182dq = {}, mqf2d1 = 0x0;;) {
    try {
      var qmrd = n45e['indexOf']('<', mqf2d1);if (0x0 > qmrd) {
        if (!n45e['substr'](mqf2d1)['match'](/^\s*$/)) {
          var bcu40l = epnu4['doc'],
              g6osk = bcu40l['createTextNode'](n45e['substr'](mqf2d1));bcu40l['appendChild'](g6osk), epnu4['currentElement'] = g6osk;
        }return;
      }switch (qmrd > mqf2d1 && fks7r(qmrd), n45e['charAt'](qmrd + 0x1)) {case '/':
          var zih9a = n45e['indexOf']('>', qmrd + 0x3),
              kgs0y = n45e['substring'](qmrd + 0x2, zih9a),
              id8xq = ceulb4['pop']();0x0 > zih9a ? (kgs0y = n45e['substring'](qmrd + 0x2)['replace'](/[\s<].*/, ''), luepb['error']('end tag name: ' + kgs0y + ' is not complete:' + id8xq['tagName']), zih9a = qmrd + 0x1 + kgs0y['length']) : kgs0y['match'](/\s</) && (kgs0y = kgs0y['replace'](/[\s<].*/, ''), luepb['error']('end tag name: ' + kgs0y + ' maybe not complete'), zih9a = qmrd + 0x1 + kgs0y['length']);var a9xhz = id8xq['localNSMap'],
              sgko6y = id8xq['tagName'] == kgs0y,
              kgs0o = sgko6y || id8xq['tagName'] && id8xq['tagName']['toLowerCase']() == kgs0y['toLowerCase']();if (kgs0o) {
            if (epnu4['endElement'](id8xq['uri'], id8xq['localName'], kgs0y), a9xhz) {
              for (var di92x in a9xhz) epnu4['endPrefixMapping'](di92x);
            }sgko6y || luepb['fatalError']('end tag name: ' + kgs0y + ' is not match the current start tagName:' + id8xq['tagName']);
          } else ceulb4['push'](id8xq);zih9a++;break;case '?':
          j5enpb && ks76(qmrd), zih9a = j1_b5ejp(n45e, qmrd, epnu4);break;case '!':
          j5enpb && ks76(qmrd), zih9a = j1_ixz8a9(n45e, qmrd, epnu4, luepb);break;default:
          j5enpb && ks76(qmrd);var syc0og = new j1_fr71q(),
              $haxz = ceulb4[ceulb4['length'] - 0x1]['currentNSMap'],
              zih9a = j1_fqrmd(n45e, qmrd, syc0og, $haxz, cuol0, luepb),
              xa89zi = syc0og['length'];if (!syc0og['closed'] && j1_lyo(n45e, zih9a, syc0og['tagName'], i182dq) && (syc0og['closed'] = !0x0, q2xi8['nbsp'] || luepb['warning']('unclosed xml attribute')), j5enpb && xa89zi) {
            for (var zi289 = j1_y6gkso(j5enpb, {}), i9xza8 = 0x0; xa89zi > i9xza8; i9xza8++) {
              var r1dmq = syc0og[i9xza8];ks76(r1dmq['offset']), r1dmq['locator'] = j1_y6gkso(j5enpb, {});
            }epnu4['locator'] = zi289, j1_m7r6kf(syc0og, epnu4, $haxz) && ceulb4['push'](syc0og), epnu4['locator'] = j5enpb;
          } else j1_m7r6kf(syc0og, epnu4, $haxz) && ceulb4['push'](syc0og);'http://www.w3.org/1999/xhtml' !== syc0og['uri'] || syc0og['closed'] ? zih9a++ : zih9a = j1_mqfd(n45e, zih9a, syc0og['tagName'], cuol0, epnu4);}
    } catch (ucgol) {
      luepb['error']('element parse error: ' + ucgol), zih9a = -0x1;
    }zih9a > mqf2d1 ? mqf2d1 = zih9a : fks7r(Math['max'](qmrd, mqf2d1) + 0x1);
  }
}function j1_y6gkso(ucb4, o7ksy) {
  return o7ksy['lineNumber'] = ucb4['lineNumber'], o7ksy['columnNumber'] = ucb4['columnNumber'], o7ksy;
}function j1_fqrmd(sco0gy, co0ys, jbpne5, drmq1, ahix9z, bpj5) {
  for (var n5v3w, d12q8i, xa89i = ++co0ys, q8dx = j1_qf1d2;;) {
    var dqi = sco0gy['charAt'](xa89i);switch (dqi) {case '=':
        if (q8dx === j1_b4uel) n5v3w = sco0gy['slice'](co0ys, xa89i), q8dx = j1_cosg0;else {
          if (q8dx !== j1_lbp4e) throw new Error('attribute equal must after attrName');q8dx = j1_cosg0;
        }break;case '\x27':case '\x22':
        if (q8dx === j1_cosg0 || q8dx === j1_b4uel) {
          if (q8dx === j1_b4uel && (bpj5['warning']('attribute value must after "="'), n5v3w = sco0gy['slice'](co0ys, xa89i)), co0ys = xa89i + 0x1, xa89i = sco0gy['indexOf'](dqi, co0ys), !(xa89i > 0x0)) throw new Error('attribute value no end \'' + dqi + '\' match');d12q8i = sco0gy['slice'](co0ys, xa89i)['replace'](/&#?\w+;/g, ahix9z), jbpne5['add'](n5v3w, d12q8i, co0ys - 0x1), q8dx = j1_p4ebul;
        } else {
          if (q8dx != j1_dq28xi) throw new Error('attribute value must after "="');d12q8i = sco0gy['slice'](co0ys, xa89i)['replace'](/&#?\w+;/g, ahix9z), jbpne5['add'](n5v3w, d12q8i, co0ys), bpj5['warning']('attribute "' + n5v3w + '" missed start quot(' + dqi + ')!!'), co0ys = xa89i + 0x1, q8dx = j1_p4ebul;
        }break;case '/':
        switch (q8dx) {case j1_qf1d2:
            jbpne5['setTagName'](sco0gy['slice'](co0ys, xa89i));case j1_p4ebul:case j1_yosgk:case j1_k6soy7:
            q8dx = j1_k6soy7, jbpne5['closed'] = !0x0;case j1_dq28xi:case j1_b4uel:case j1_lbp4e:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return bpj5['error']('unexpected end of input'), q8dx == j1_qf1d2 && jbpne5['setTagName'](sco0gy['slice'](co0ys, xa89i)), xa89i;case '>':
        switch (q8dx) {case j1_qf1d2:
            jbpne5['setTagName'](sco0gy['slice'](co0ys, xa89i));case j1_p4ebul:case j1_yosgk:case j1_k6soy7:
            break;case j1_dq28xi:case j1_b4uel:
            d12q8i = sco0gy['slice'](co0ys, xa89i), '/' === d12q8i['slice'](-0x1) && (jbpne5['closed'] = !0x0, d12q8i = d12q8i['slice'](0x0, -0x1));case j1_lbp4e:
            q8dx === j1_lbp4e && (d12q8i = n5v3w), q8dx == j1_dq28xi ? (bpj5['warning']('attribute "' + d12q8i + '" missed quot(")!!'), jbpne5['add'](n5v3w, d12q8i['replace'](/&#?\w+;/g, ahix9z), co0ys)) : ('http://www.w3.org/1999/xhtml' === drmq1[''] && d12q8i['match'](/^(?:disabled|checked|selected)$/i) || bpj5['warning']('attribute "' + d12q8i + '" missed value!! "' + d12q8i + '" instead!!'), jbpne5['add'](d12q8i, d12q8i, co0ys));break;case j1_cosg0:
            throw new Error('attribute value missed!!');}return xa89i;case '\u0080':
        dqi = '\x20';default:
        if ('\x20' >= dqi) switch (q8dx) {case j1_qf1d2:
            jbpne5['setTagName'](sco0gy['slice'](co0ys, xa89i)), q8dx = j1_yosgk;break;case j1_b4uel:
            n5v3w = sco0gy['slice'](co0ys, xa89i), q8dx = j1_lbp4e;break;case j1_dq28xi:
            var d12q8i = sco0gy['slice'](co0ys, xa89i)['replace'](/&#?\w+;/g, ahix9z);bpj5['warning']('attribute "' + d12q8i + '" missed quot(")!!'), jbpne5['add'](n5v3w, d12q8i, co0ys);case j1_p4ebul:
            q8dx = j1_yosgk;} else switch (q8dx) {case j1_lbp4e:
            {
              jbpne5['tagName'];
            }'http://www.w3.org/1999/xhtml' === drmq1[''] && n5v3w['match'](/^(?:disabled|checked|selected)$/i) || bpj5['warning']('attribute "' + n5v3w + '" missed value!! "' + n5v3w + '" instead2!!'), jbpne5['add'](n5v3w, n5v3w, co0ys), co0ys = xa89i, q8dx = j1_b4uel;break;case j1_p4ebul:
            bpj5['warning']('attribute space is required"' + n5v3w + '\x22!!');case j1_yosgk:
            q8dx = j1_b4uel, co0ys = xa89i;break;case j1_cosg0:
            q8dx = j1_dq28xi, co0ys = xa89i;break;case j1_k6soy7:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}xa89i++;
  }
}function j1_m7r6kf(k7r6m, jnp3w, leubc) {
  for (var l4c = k7r6m['tagName'], beupl = null, p4nbue = k7r6m['length']; p4nbue--;) {
    var ix9za = k7r6m[p4nbue],
        nbjep = ix9za['qName'],
        p5bej = ix9za['value'],
        ocl0ug = nbjep['indexOf'](':');if (ocl0ug > 0x0) var sko = ix9za['prefix'] = nbjep['slice'](0x0, ocl0ug),
        dm1f2q = nbjep['slice'](ocl0ug + 0x1),
        dmqf12 = 'xmlns' === sko && dm1f2q;else dm1f2q = nbjep, sko = null, dmqf12 = 'xmlns' === nbjep && '';ix9za['localName'] = dm1f2q, dmqf12 !== !0x1 && (null == beupl && (beupl = {}, j1_ix2d(leubc, leubc = {})), leubc[dmqf12] = beupl[dmqf12] = p5bej, ix9za['uri'] = 'http://www.w3.org/2000/xmlns/', jnp3w['startPrefixMapping'](dmqf12, p5bej));
  }for (var p4nbue = k7r6m['length']; p4nbue--;) {
    ix9za = k7r6m[p4nbue];var sko = ix9za['prefix'];sko && ('xml' === sko && (ix9za['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== sko && (ix9za['uri'] = leubc[sko || '']));
  }var ocl0ug = l4c['indexOf'](':');ocl0ug > 0x0 ? (sko = k7r6m['prefix'] = l4c['slice'](0x0, ocl0ug), dm1f2q = k7r6m['localName'] = l4c['slice'](ocl0ug + 0x1)) : (sko = null, dm1f2q = k7r6m['localName'] = l4c);var eun4b = k7r6m['uri'] = leubc[sko || ''];if (jnp3w['startElement'](eun4b, dm1f2q, l4c, k7r6m), !k7r6m['closed']) return k7r6m['currentNSMap'] = leubc, k7r6m['localNSMap'] = beupl, !0x0;if (jnp3w['endElement'](eun4b, dm1f2q, l4c), beupl) {
    for (sko in beupl) jnp3w['endPrefixMapping'](sko);
  }
}function j1_mqfd(bjp5n, fr17, je3np5, z28ix9, a9hxz$) {
  if (/^(?:script|textarea)$/i['test'](je3np5)) {
    var izx892 = bjp5n['indexOf']('</' + je3np5 + '>', fr17),
        o0scgy = bjp5n['substring'](fr17 + 0x1, izx892);if (/[&<]/['test'](o0scgy)) return (/^script$/i['test'](je3np5) ? (a9hxz$['characters'](o0scgy, 0x0, o0scgy['length']), izx892) : (o0scgy = o0scgy['replace'](/&#?\w+;/g, z28ix9), a9hxz$['characters'](o0scgy, 0x0, o0scgy['length']), izx892)
    );
  }return fr17 + 0x1;
}function j1_lyo(p4nub, bc4uel, ebnp5, s0oyg) {
  var l0cu4 = s0oyg[ebnp5];return null == l0cu4 && (l0cu4 = p4nub['lastIndexOf']('</' + ebnp5 + '>'), bc4uel > l0cu4 && (l0cu4 = p4nub['lastIndexOf']('</' + ebnp5)), s0oyg[ebnp5] = l0cu4), bc4uel > l0cu4;
}function j1_ix2d(sko0, xd8q) {
  for (var pjnw3 in sko0) xd8q[pjnw3] = sko0[pjnw3];
}function j1_ixz8a9(s6gk, n5e3pj, zx, sr6y7) {
  var df1qr = s6gk['charAt'](n5e3pj + 0x2);switch (df1qr) {case '-':
      if ('-' === s6gk['charAt'](n5e3pj + 0x3)) {
        var xia8 = s6gk['indexOf']('-->', n5e3pj + 0x4);return xia8 > n5e3pj ? (zx['comment'](s6gk, n5e3pj + 0x4, xia8 - n5e3pj - 0x4), xia8 + 0x3) : (sr6y7['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == s6gk['substr'](n5e3pj + 0x3, 0x6)) {
        var xia8 = s6gk['indexOf'](']]>', n5e3pj + 0x9);return zx['startCDATA'](), zx['characters'](s6gk, n5e3pj + 0x9, xia8 - n5e3pj - 0x9), zx['endCDATA'](), xia8 + 0x3;
      }var g6yk = j1_uel4pb(s6gk, n5e3pj),
          j5wnv3 = g6yk['length'];if (j5wnv3 > 0x1 && /!doctype/i['test'](g6yk[0x0][0x0])) {
        var zxh9a$ = g6yk[0x1][0x0],
            zax = j5wnv3 > 0x3 && /^public$/i['test'](g6yk[0x2][0x0]) && g6yk[0x3][0x0],
            f76r1m = j5wnv3 > 0x4 && g6yk[0x4][0x0],
            dm82 = g6yk[j5wnv3 - 0x1];return zx['startDTD'](zxh9a$, zax && zax['replace'](/^(['"])(.*?)\1$/, '$2'), f76r1m && f76r1m['replace'](/^(['"])(.*?)\1$/, '$2')), zx['endDTD'](), dm82['index'] + dm82[0x0]['length'];
      }}return -0x1;
}function j1_b5ejp(r1f6m7, bulp4e, x2) {
  var koy6s7 = r1f6m7['indexOf']('?>', bulp4e);if (koy6s7) {
    var x28zi9 = r1f6m7['substring'](bulp4e, koy6s7)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (x28zi9) {
      {
        x28zi9[0x0]['length'];
      }return x2['processingInstruction'](x28zi9[0x1], x28zi9[0x2]), koy6s7 + 0x2;
    }return -0x1;
  }return -0x1;
}function j1_fr71q() {}function j1_ai9zh(hax$9z, skgo0y) {
  return hax$9z['__proto__'] = skgo0y, hax$9z;
}function j1_uel4pb(fdmq1, mfd12) {
  var f7mr6,
      qm17f = [],
      h9xz$a = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (h9xz$a['lastIndex'] = mfd12, h9xz$a['exec'](fdmq1); f7mr6 = h9xz$a['exec'](fdmq1);) if (qm17f['push'](f7mr6), f7mr6[0x1]) return qm17f;
}var j1_krfs7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    j1_zi298x = new RegExp('[\\-\\.0-9' + j1_krfs7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    j1_i9a = new RegExp('^' + j1_krfs7['source'] + j1_zi298x['source'] + '*(?::' + j1_krfs7['source'] + j1_zi298x['source'] + '*)?$'),
    j1_qf1d2 = 0x0,
    j1_b4uel = 0x1,
    j1_lbp4e = 0x2,
    j1_cosg0 = 0x3,
    j1_dq28xi = 0x4,
    j1_p4ebul = 0x5,
    j1_yosgk = 0x6,
    j1_k6soy7 = 0x7;j1_l0gc4['prototype'] = { 'parse': function (eup, l4cg0u, krf67s) {
    var uclgo0 = this['domBuilder'];uclgo0['startDocument'](), j1_ix2d(l4cg0u, l4cg0u = {}), j1_axhz9$(eup, l4cg0u, krf67s, uclgo0, this['errorHandler']), uclgo0['endDocument']();
  } }, j1_fr71q['prototype'] = { 'setTagName': function (dm2qf1) {
    if (!j1_i9a['test'](dm2qf1)) throw new Error('invalid tagName:' + dm2qf1);this['tagName'] = dm2qf1;
  }, 'add': function (kgs6yo, ky0gos, cb4e) {
    if (!j1_i9a['test'](kgs6yo)) throw new Error('invalid attribute:' + kgs6yo);this[this['length']++] = { 'qName': kgs6yo, 'value': ky0gos, 'offset': cb4e };
  }, 'length': 0x0, 'getLocalName': function (xhza$) {
    return this[xhza$]['localName'];
  }, 'getLocator': function (eb4pun) {
    return this[eb4pun]['locator'];
  }, 'getQName': function (blc4ue) {
    return this[blc4ue]['qName'];
  }, 'getURI': function (oys0gk) {
    return this[oys0gk]['uri'];
  }, 'getValue': function (xiza) {
    return this[xiza]['value'];
  } }, j1_ai9zh({}, j1_ai9zh['prototype']) instanceof j1_ai9zh || (j1_ai9zh = function (d1qi, fqdr1m) {
  function uoclg0() {}uoclg0['prototype'] = fqdr1m, uoclg0 = new uoclg0();for (fqdr1m in d1qi) uoclg0[fqdr1m] = d1qi[fqdr1m];return uoclg0;
}), exports['XMLReader'] = j1_l0gc4;