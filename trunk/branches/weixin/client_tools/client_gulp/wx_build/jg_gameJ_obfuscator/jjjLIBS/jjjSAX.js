var S = wx.$J;
function j1_ykg6() {}function j1_cbul4e(rskf, m1rf, s7kr6y, cgul04, n35pej) {
  function fsr6k(epn) {
    if (epn > 0xffff) {
      epn -= 0x10000;var o0ygcl = 0xd800 + (epn >> 0xa),
          m2dq18 = 0xdc00 + (0x3ff & epn);return String['fromCharCode'](o0ygcl, m2dq18);
    }return String['fromCharCode'](epn);
  }function f6m7kr(ok7y6s) {
    var cygs0o = ok7y6s['slice'](0x1, -0x1);return cygs0o in s7kr6y ? s7kr6y[cygs0o] : '#' === cygs0o['charAt'](0x0) ? fsr6k(parseInt(cygs0o['substr'](0x1)['replace']('x', '0x'))) : (n35pej['error']('entity not found:' + ok7y6s), ok7y6s);
  }function ebul4(mq8d) {
    if (mq8d > glc0o) {
      var oy0clg = rskf['substring'](glc0o, mq8d)['replace'](/&#?\w+;/g, f6m7kr);kgs0y && cu0(glc0o), cgul04['characters'](oy0clg, 0x0, mq8d - glc0o), glc0o = mq8d;
    }
  }function cu0(ys6k7, up4e) {
    for (; ys6k7 >= qi8x && (up4e = aix9z['exec'](rskf));) az9xh$ = up4e['index'], qi8x = az9xh$ + up4e[0x0]['length'], kgs0y['lineNumber']++;kgs0y['columnNumber'] = ys6k7 - az9xh$ + 0x1;
  }for (var az9xh$ = 0x0, qi8x = 0x0, aix9z = /.*(?:\r\n?|\n)|.*$/g, kgs0y = cgul04['locator'], q281 = [{ 'currentNSMap': m1rf }], z8xai = {}, glc0o = 0x0;;) {
    try {
      var k0soyg = rskf['indexOf']('<', glc0o);if (0x0 > k0soyg) {
        if (!rskf['substr'](glc0o)['match'](/^\s*$/)) {
          var b5epnj = cgul04['doc'],
              f6sk = b5epnj['createTextNode'](rskf['substr'](glc0o));b5epnj['appendChild'](f6sk), cgul04['currentElement'] = f6sk;
        }return;
      }switch (k0soyg > glc0o && ebul4(k0soyg), rskf['charAt'](k0soyg + 0x1)) {case '/':
          var ks76f = rskf['indexOf']('>', k0soyg + 0x3),
              jpeb5n = rskf['substring'](k0soyg + 0x2, ks76f),
              eclu = q281['pop']();0x0 > ks76f ? (jpeb5n = rskf['substring'](k0soyg + 0x2)['replace'](/[\s<].*/, ''), n35pej['error']('end tag name: ' + jpeb5n + ' is not complete:' + eclu['tagName']), ks76f = k0soyg + 0x1 + jpeb5n['length']) : jpeb5n['match'](/\s</) && (jpeb5n = jpeb5n['replace'](/[\s<].*/, ''), n35pej['error']('end tag name: ' + jpeb5n + ' maybe not complete'), ks76f = k0soyg + 0x1 + jpeb5n['length']);var e3njp5 = eclu['localNSMap'],
              mf21 = eclu['tagName'] == jpeb5n,
              yrs76 = mf21 || eclu['tagName'] && eclu['tagName']['toLowerCase']() == jpeb5n['toLowerCase']();if (yrs76) {
            if (cgul04['endElement'](eclu['uri'], eclu['localName'], jpeb5n), e3njp5) {
              for (var lgy0co in e3njp5) cgul04['endPrefixMapping'](lgy0co);
            }mf21 || n35pej['fatalError']('end tag name: ' + jpeb5n + ' is not match the current start tagName:' + eclu['tagName']);
          } else q281['push'](eclu);ks76f++;break;case '?':
          kgs0y && cu0(k0soyg), ks76f = j1_epn4b(rskf, k0soyg, cgul04);break;case '!':
          kgs0y && cu0(k0soyg), ks76f = j1_f16m7r(rskf, k0soyg, cgul04, n35pej);break;default:
          kgs0y && cu0(k0soyg);var enp5jb = new j1_k6m(),
              nep4ub = q281[q281['length'] - 0x1]['currentNSMap'],
              ks76f = j1_pubne4(rskf, k0soyg, enp5jb, nep4ub, f6m7kr, n35pej),
              x9a8zi = enp5jb['length'];if (!enp5jb['closed'] && j1_rmf76k(rskf, ks76f, enp5jb['tagName'], z8xai) && (enp5jb['closed'] = !0x0, s7kr6y['nbsp'] || n35pej['warning']('unclosed xml attribute')), kgs0y && x9a8zi) {
            for (var rf6km = j1_eub4pn(kgs0y, {}), ulcb4e = 0x0; x9a8zi > ulcb4e; ulcb4e++) {
              var m1rfq = enp5jb[ulcb4e];cu0(m1rfq['offset']), m1rfq['locator'] = j1_eub4pn(kgs0y, {});
            }cgul04['locator'] = rf6km, j1_i21dq(enp5jb, cgul04, nep4ub) && q281['push'](enp5jb), cgul04['locator'] = kgs0y;
          } else j1_i21dq(enp5jb, cgul04, nep4ub) && q281['push'](enp5jb);'http://www.w3.org/1999/xhtml' !== enp5jb['uri'] || enp5jb['closed'] ? ks76f++ : ks76f = j1_ylco0g(rskf, ks76f, enp5jb['tagName'], f6m7kr, cgul04);}
    } catch (bl4up) {
      n35pej['error']('element parse error: ' + bl4up), ks76f = -0x1;
    }ks76f > glc0o ? glc0o = ks76f : ebul4(Math['max'](k0soyg, glc0o) + 0x1);
  }
}function j1_eub4pn(n5ebp4, idq218) {
  return idq218['lineNumber'] = n5ebp4['lineNumber'], idq218['columnNumber'] = n5ebp4['columnNumber'], idq218;
}function j1_pubne4(clgyo, lu0cb4, b4elup, zh9, g6sko, fqr1m) {
  for (var y6sokg, z89ixa, z$a9x = ++lu0cb4, z9i8ax = j1_i9a8zx;;) {
    var fr1dqm = clgyo['charAt'](z$a9x);switch (fr1dqm) {case '=':
        if (z9i8ax === j1_u4cl0) y6sokg = clgyo['slice'](lu0cb4, z$a9x), z9i8ax = j1_sk6y7r;else {
          if (z9i8ax !== j1_wj35nv) throw new Error('attribute equal must after attrName');z9i8ax = j1_sk6y7r;
        }break;case '\x27':case '\x22':
        if (z9i8ax === j1_sk6y7r || z9i8ax === j1_u4cl0) {
          if (z9i8ax === j1_u4cl0 && (fqr1m['warning']('attribute value must after "="'), y6sokg = clgyo['slice'](lu0cb4, z$a9x)), lu0cb4 = z$a9x + 0x1, z$a9x = clgyo['indexOf'](fr1dqm, lu0cb4), !(z$a9x > 0x0)) throw new Error('attribute value no end \'' + fr1dqm + '\' match');z89ixa = clgyo['slice'](lu0cb4, z$a9x)['replace'](/&#?\w+;/g, g6sko), b4elup['add'](y6sokg, z89ixa, lu0cb4 - 0x1), z9i8ax = j1_bnej5p;
        } else {
          if (z9i8ax != j1_mdq182) throw new Error('attribute value must after "="');z89ixa = clgyo['slice'](lu0cb4, z$a9x)['replace'](/&#?\w+;/g, g6sko), b4elup['add'](y6sokg, z89ixa, lu0cb4), fqr1m['warning']('attribute "' + y6sokg + '" missed start quot(' + fr1dqm + ')!!'), lu0cb4 = z$a9x + 0x1, z9i8ax = j1_bnej5p;
        }break;case '/':
        switch (z9i8ax) {case j1_i9a8zx:
            b4elup['setTagName'](clgyo['slice'](lu0cb4, z$a9x));case j1_bnej5p:case j1_f2md1:case j1_yo0kg:
            z9i8ax = j1_yo0kg, b4elup['closed'] = !0x0;case j1_mdq182:case j1_u4cl0:case j1_wj35nv:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return fqr1m['error']('unexpected end of input'), z9i8ax == j1_i9a8zx && b4elup['setTagName'](clgyo['slice'](lu0cb4, z$a9x)), z$a9x;case '>':
        switch (z9i8ax) {case j1_i9a8zx:
            b4elup['setTagName'](clgyo['slice'](lu0cb4, z$a9x));case j1_bnej5p:case j1_f2md1:case j1_yo0kg:
            break;case j1_mdq182:case j1_u4cl0:
            z89ixa = clgyo['slice'](lu0cb4, z$a9x), '/' === z89ixa['slice'](-0x1) && (b4elup['closed'] = !0x0, z89ixa = z89ixa['slice'](0x0, -0x1));case j1_wj35nv:
            z9i8ax === j1_wj35nv && (z89ixa = y6sokg), z9i8ax == j1_mdq182 ? (fqr1m['warning']('attribute "' + z89ixa + '" missed quot(")!!'), b4elup['add'](y6sokg, z89ixa['replace'](/&#?\w+;/g, g6sko), lu0cb4)) : ('http://www.w3.org/1999/xhtml' === zh9[''] && z89ixa['match'](/^(?:disabled|checked|selected)$/i) || fqr1m['warning']('attribute "' + z89ixa + '" missed value!! "' + z89ixa + '" instead!!'), b4elup['add'](z89ixa, z89ixa, lu0cb4));break;case j1_sk6y7r:
            throw new Error('attribute value missed!!');}return z$a9x;case '\u0080':
        fr1dqm = '\x20';default:
        if ('\x20' >= fr1dqm) switch (z9i8ax) {case j1_i9a8zx:
            b4elup['setTagName'](clgyo['slice'](lu0cb4, z$a9x)), z9i8ax = j1_f2md1;break;case j1_u4cl0:
            y6sokg = clgyo['slice'](lu0cb4, z$a9x), z9i8ax = j1_wj35nv;break;case j1_mdq182:
            var z89ixa = clgyo['slice'](lu0cb4, z$a9x)['replace'](/&#?\w+;/g, g6sko);fqr1m['warning']('attribute "' + z89ixa + '" missed quot(")!!'), b4elup['add'](y6sokg, z89ixa, lu0cb4);case j1_bnej5p:
            z9i8ax = j1_f2md1;} else switch (z9i8ax) {case j1_wj35nv:
            {
              b4elup['tagName'];
            }'http://www.w3.org/1999/xhtml' === zh9[''] && y6sokg['match'](/^(?:disabled|checked|selected)$/i) || fqr1m['warning']('attribute "' + y6sokg + '" missed value!! "' + y6sokg + '" instead2!!'), b4elup['add'](y6sokg, y6sokg, lu0cb4), lu0cb4 = z$a9x, z9i8ax = j1_u4cl0;break;case j1_bnej5p:
            fqr1m['warning']('attribute space is required"' + y6sokg + '\x22!!');case j1_f2md1:
            z9i8ax = j1_u4cl0, lu0cb4 = z$a9x;break;case j1_sk6y7r:
            z9i8ax = j1_mdq182, lu0cb4 = z$a9x;break;case j1_yo0kg:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}z$a9x++;
  }
}function j1_i21dq(bc40, go0ly, yo7s6k) {
  for (var iaxz8 = bc40['tagName'], i82xz = null, yglc = bc40['length']; yglc--;) {
    var ul4gc = bc40[yglc],
        q2x8di = ul4gc['qName'],
        oucg = ul4gc['value'],
        a$9zxh = q2x8di['indexOf'](':');if (a$9zxh > 0x0) var eupn4b = ul4gc['prefix'] = q2x8di['slice'](0x0, a$9zxh),
        r6fm = q2x8di['slice'](a$9zxh + 0x1),
        lubpe4 = 'xmlns' === eupn4b && r6fm;else r6fm = q2x8di, eupn4b = null, lubpe4 = 'xmlns' === q2x8di && '';ul4gc['localName'] = r6fm, lubpe4 !== !0x1 && (null == i82xz && (i82xz = {}, j1_z8i2(yo7s6k, yo7s6k = {})), yo7s6k[lubpe4] = i82xz[lubpe4] = oucg, ul4gc['uri'] = 'http://www.w3.org/2000/xmlns/', go0ly['startPrefixMapping'](lubpe4, oucg));
  }for (var yglc = bc40['length']; yglc--;) {
    ul4gc = bc40[yglc];var eupn4b = ul4gc['prefix'];eupn4b && ('xml' === eupn4b && (ul4gc['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== eupn4b && (ul4gc['uri'] = yo7s6k[eupn4b || '']));
  }var a$9zxh = iaxz8['indexOf'](':');a$9zxh > 0x0 ? (eupn4b = bc40['prefix'] = iaxz8['slice'](0x0, a$9zxh), r6fm = bc40['localName'] = iaxz8['slice'](a$9zxh + 0x1)) : (eupn4b = null, r6fm = bc40['localName'] = iaxz8);var so6yk = bc40['uri'] = yo7s6k[eupn4b || ''];if (go0ly['startElement'](so6yk, r6fm, iaxz8, bc40), !bc40['closed']) return bc40['currentNSMap'] = yo7s6k, bc40['localNSMap'] = i82xz, !0x0;if (go0ly['endElement'](so6yk, r6fm, iaxz8), i82xz) {
    for (eupn4b in i82xz) go0ly['endPrefixMapping'](eupn4b);
  }
}function j1_ylco0g(j5nep3, gc0soy, r7fk6, g0ks, oygks0) {
  if (/^(?:script|textarea)$/i['test'](r7fk6)) {
    var jwnp3 = j5nep3['indexOf']('</' + r7fk6 + '>', gc0soy),
        mf7rk6 = j5nep3['substring'](gc0soy + 0x1, jwnp3);if (/[&<]/['test'](mf7rk6)) return (/^script$/i['test'](r7fk6) ? (oygks0['characters'](mf7rk6, 0x0, mf7rk6['length']), jwnp3) : (mf7rk6 = mf7rk6['replace'](/&#?\w+;/g, g0ks), oygks0['characters'](mf7rk6, 0x0, mf7rk6['length']), jwnp3)
    );
  }return gc0soy + 0x1;
}function j1_rmf76k(rkfs67, rm76, sk6gy, pe4nu) {
  var r7k6m = pe4nu[sk6gy];return null == r7k6m && (r7k6m = rkfs67['lastIndexOf']('</' + sk6gy + '>'), rm76 > r7k6m && (r7k6m = rkfs67['lastIndexOf']('</' + sk6gy)), pe4nu[sk6gy] = r7k6m), rm76 > r7k6m;
}function j1_z8i2(x9zia8, xzai9h) {
  for (var yokgs0 in x9zia8) xzai9h[yokgs0] = x9zia8[yokgs0];
}function j1_f16m7r(nb5p4e, p3wnj, iazx9, u0l4) {
  var eb4plu = nb5p4e['charAt'](p3wnj + 0x2);switch (eb4plu) {case '-':
      if ('-' === nb5p4e['charAt'](p3wnj + 0x3)) {
        var i98zx = nb5p4e['indexOf']('-->', p3wnj + 0x4);return i98zx > p3wnj ? (iazx9['comment'](nb5p4e, p3wnj + 0x4, i98zx - p3wnj - 0x4), i98zx + 0x3) : (u0l4['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == nb5p4e['substr'](p3wnj + 0x3, 0x6)) {
        var i98zx = nb5p4e['indexOf'](']]>', p3wnj + 0x9);return iazx9['startCDATA'](), iazx9['characters'](nb5p4e, p3wnj + 0x9, i98zx - p3wnj - 0x9), iazx9['endCDATA'](), i98zx + 0x3;
      }var a89zix = j1_uoc0(nb5p4e, p3wnj),
          p4bl = a89zix['length'];if (p4bl > 0x1 && /!doctype/i['test'](a89zix[0x0][0x0])) {
        var fmkr67 = a89zix[0x1][0x0],
            oclyg0 = p4bl > 0x3 && /^public$/i['test'](a89zix[0x2][0x0]) && a89zix[0x3][0x0],
            haix9 = p4bl > 0x4 && a89zix[0x4][0x0],
            clg0u4 = a89zix[p4bl - 0x1];return iazx9['startDTD'](fmkr67, oclyg0 && oclyg0['replace'](/^(['"])(.*?)\1$/, '$2'), haix9 && haix9['replace'](/^(['"])(.*?)\1$/, '$2')), iazx9['endDTD'](), clg0u4['index'] + clg0u4[0x0]['length'];
      }}return -0x1;
}function j1_epn4b(kyo6g, ul04bc, dxi8q) {
  var b4n5 = kyo6g['indexOf']('?>', ul04bc);if (b4n5) {
    var en54bp = kyo6g['substring'](ul04bc, b4n5)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (en54bp) {
      {
        en54bp[0x0]['length'];
      }return dxi8q['processingInstruction'](en54bp[0x1], en54bp[0x2]), b4n5 + 0x2;
    }return -0x1;
  }return -0x1;
}function j1_k6m() {}function j1_lgc40(ks67yo, id82q) {
  return ks67yo['__proto__'] = id82q, ks67yo;
}function j1_uoc0(gl0cy, pj35nw) {
  var s7kr,
      y67sok = [],
      lougc = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (lougc['lastIndex'] = pj35nw, lougc['exec'](gl0cy); s7kr = lougc['exec'](gl0cy);) if (y67sok['push'](s7kr), s7kr[0x1]) return y67sok;
}var j1_d21q8 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    j1_oky = new RegExp('[\\-\\.0-9' + j1_d21q8['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    j1_fr1q7m = new RegExp('^' + j1_d21q8['source'] + j1_oky['source'] + '*(?::' + j1_d21q8['source'] + j1_oky['source'] + '*)?$'),
    j1_i9a8zx = 0x0,
    j1_u4cl0 = 0x1,
    j1_wj35nv = 0x2,
    j1_sk6y7r = 0x3,
    j1_mdq182 = 0x4,
    j1_bnej5p = 0x5,
    j1_f2md1 = 0x6,
    j1_yo0kg = 0x7;j1_ykg6['prototype'] = { 'parse': function (p3j5n, soy76, kr6f7) {
    var yl0gco = this['domBuilder'];yl0gco['startDocument'](), j1_z8i2(soy76, soy76 = {}), j1_cbul4e(p3j5n, soy76, kr6f7, yl0gco, this['errorHandler']), yl0gco['endDocument']();
  } }, j1_k6m['prototype'] = { 'setTagName': function (syo76k) {
    if (!j1_fr1q7m['test'](syo76k)) throw new Error('invalid tagName:' + syo76k);this['tagName'] = syo76k;
  }, 'add': function (xaihz9, xiq2, qfm21d) {
    if (!j1_fr1q7m['test'](xaihz9)) throw new Error('invalid attribute:' + xaihz9);this[this['length']++] = { 'qName': xaihz9, 'value': xiq2, 'offset': qfm21d };
  }, 'length': 0x0, 'getLocalName': function (sf67) {
    return this[sf67]['localName'];
  }, 'getLocator': function (i9z82) {
    return this[i9z82]['locator'];
  }, 'getQName': function (rq71) {
    return this[rq71]['qName'];
  }, 'getURI': function (r7sk6y) {
    return this[r7sk6y]['uri'];
  }, 'getValue': function (qx82d) {
    return this[qx82d]['value'];
  } }, j1_lgc40({}, j1_lgc40['prototype']) instanceof j1_lgc40 || (j1_lgc40 = function (azix8, uo0glc) {
  function uple4b() {}uple4b['prototype'] = uo0glc, uple4b = new uple4b();for (uo0glc in azix8) uple4b[uo0glc] = azix8[uo0glc];return uple4b;
}), exports['XMLReader'] = j1_ykg6;