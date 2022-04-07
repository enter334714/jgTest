var v = wx.$d;
function zy7$pvl() {}function ztqguf(medih, $r1vwp, tdemiu, rw1x$8, qgk0zf) {
  function _5o93c(a0zgq) {
    if (a0zgq > 0xffff) {
      a0zgq -= 0x10000;var x8b0z = 0xd800 + (a0zgq >> 0xa),
          fkug = 0xdc00 + (0x3ff & a0zgq);return String['fromCharCode'](x8b0z, fkug);
    }return String['fromCharCode'](a0zgq);
  }function _39co5(yw7v) {
    var miud6e = yw7v['slice'](0x1, -0x1);return miud6e in tdemiu ? tdemiu[miud6e] : '#' === miud6e['charAt'](0x0) ? _5o93c(parseInt(miud6e['substr'](0x1)['replace']('x', '0x'))) : (qgk0zf['error']('entity not found:' + yw7v), yw7v);
  }function p$wrv1(n49_h) {
    if (n49_h > p$w7r) {
      var rp$8 = medih['substring'](p$w7r, n49_h)['replace'](/&#?\w+;/g, _39co5);uftk && dm6h(p$w7r), rw1x$8['characters'](rp$8, 0x0, n49_h - p$w7r), p$w7r = n49_h;
    }
  }function dm6h(d6hejm, eu) {
    for (; d6hejm >= zax8b0 && (eu = qazx0['exec'](medih));) nj_43 = eu['index'], zax8b0 = nj_43 + eu[0x0]['length'], uftk['lineNumber']++;uftk['columnNumber'] = d6hejm - nj_43 + 0x1;
  }for (var nj_43 = 0x0, zax8b0 = 0x0, qazx0 = /.*(?:\r\n?|\n)|.*$/g, uftk = rw1x$8['locator'], jmh6en = [{ 'currentNSMap': $r1vwp }], ra8bx1 = {}, p$w7r = 0x0;;) {
    try {
      var m6edhi = medih['indexOf']('<', p$w7r);if (0x0 > m6edhi) {
        if (!medih['substr'](p$w7r)['match'](/^\s*$/)) {
          var xa1br8 = rw1x$8['doc'],
              ftidue = xa1br8['createTextNode'](medih['substr'](p$w7r));xa1br8['appendChild'](ftidue), rw1x$8['currentElement'] = ftidue;
        }return;
      }switch (m6edhi > p$w7r && p$wrv1(m6edhi), medih['charAt'](m6edhi + 0x1)) {case '/':
          var k0fq = medih['indexOf']('>', m6edhi + 0x3),
              q0zgkf = medih['substring'](m6edhi + 0x2, k0fq),
              p7$v = jmh6en['pop']();0x0 > k0fq ? (q0zgkf = medih['substring'](m6edhi + 0x2)['replace'](/[\s<].*/, ''), qgk0zf['error']('end tag name: ' + q0zgkf + ' is not complete:' + p7$v['tagName']), k0fq = m6edhi + 0x1 + q0zgkf['length']) : q0zgkf['match'](/\s</) && (q0zgkf = q0zgkf['replace'](/[\s<].*/, ''), qgk0zf['error']('end tag name: ' + q0zgkf + ' maybe not complete'), k0fq = m6edhi + 0x1 + q0zgkf['length']);var bw = p7$v['localNSMap'],
              x18bza = p7$v['tagName'] == q0zgkf,
              y$7pl = x18bza || p7$v['tagName'] && p7$v['tagName']['toLowerCase']() == q0zgkf['toLowerCase']();if (y$7pl) {
            if (rw1x$8['endElement'](p7$v['uri'], p7$v['localName'], q0zgkf), bw) {
              for (var i6dmeu in bw) rw1x$8['endPrefixMapping'](i6dmeu);
            }x18bza || qgk0zf['fatalError']('end tag name: ' + q0zgkf + ' is not match the current start tagName:' + p7$v['tagName']);
          } else jmh6en['push'](p7$v);k0fq++;break;case '?':
          uftk && dm6h(m6edhi), k0fq = zmdj6e(medih, m6edhi, rw1x$8);break;case '!':
          uftk && dm6h(m6edhi), k0fq = zbz80x(medih, m6edhi, rw1x$8, qgk0zf);break;default:
          uftk && dm6h(m6edhi);var oc95_ = new zqtgkf(),
              prvw$ = jmh6en[jmh6en['length'] - 0x1]['currentNSMap'],
              k0fq = zx81ba(medih, m6edhi, oc95_, prvw$, _39co5, qgk0zf),
              fqz = oc95_['length'];if (!oc95_['closed'] && zvwr1$(medih, k0fq, oc95_['tagName'], ra8bx1) && (oc95_['closed'] = !0x0, tdemiu['nbsp'] || qgk0zf['warning']('unclosed xml attribute')), uftk && fqz) {
            for (var mj6he = zz0g(uftk, {}), pw$r8 = 0x0; fqz > pw$r8; pw$r8++) {
              var hiemd = oc95_[pw$r8];dm6h(hiemd['offset']), hiemd['locator'] = zz0g(uftk, {});
            }rw1x$8['locator'] = mj6he, zgfqk0z(oc95_, rw1x$8, prvw$) && jmh6en['push'](oc95_), rw1x$8['locator'] = uftk;
          } else zgfqk0z(oc95_, rw1x$8, prvw$) && jmh6en['push'](oc95_);'http://www.w3.org/1999/xhtml' !== oc95_['uri'] || oc95_['closed'] ? k0fq++ : k0fq = zjen6mh(medih, k0fq, oc95_['tagName'], _39co5, rw1x$8);}
    } catch (gk0aq) {
      qgk0zf['error']('element parse error: ' + gk0aq), k0fq = -0x1;
    }k0fq > p$w7r ? p$w7r = k0fq : p$wrv1(Math['max'](m6edhi, p$w7r) + 0x1);
  }
}function zz0g(lp7$v, $wp18r) {
  return $wp18r['lineNumber'] = lp7$v['lineNumber'], $wp18r['columnNumber'] = lp7$v['columnNumber'], $wp18r;
}function zx81ba(edftu, xw1, wp$8r, hj64mn, w8rp1, g0kzq) {
  for (var udeitm, etfuid, c2o93 = ++xw1, kfduit = zz0ax;;) {
    var w8x$1r = edftu['charAt'](c2o93);switch (w8x$1r) {case '=':
        if (kfduit === zqaz0bg) udeitm = edftu['slice'](xw1, c2o93), kfduit = zbazq0;else {
          if (kfduit !== z_hjn9) throw new Error('attribute equal must after attrName');kfduit = zbazq0;
        }break;case '\x27':case '\x22':
        if (kfduit === zbazq0 || kfduit === zqaz0bg) {
          if (kfduit === zqaz0bg && (g0kzq['warning']('attribute value must after "="'), udeitm = edftu['slice'](xw1, c2o93)), xw1 = c2o93 + 0x1, c2o93 = edftu['indexOf'](w8x$1r, xw1), !(c2o93 > 0x0)) throw new Error('attribute value no end \'' + w8x$1r + '\' match');etfuid = edftu['slice'](xw1, c2o93)['replace'](/&#?\w+;/g, w8rp1), wp$8r['add'](udeitm, etfuid, xw1 - 0x1), kfduit = zco34_9;
        } else {
          if (kfduit != zkt0g) throw new Error('attribute value must after "="');etfuid = edftu['slice'](xw1, c2o93)['replace'](/&#?\w+;/g, w8rp1), wp$8r['add'](udeitm, etfuid, xw1), g0kzq['warning']('attribute "' + udeitm + '" missed start quot(' + w8x$1r + ')!!'), xw1 = c2o93 + 0x1, kfduit = zco34_9;
        }break;case '/':
        switch (kfduit) {case zz0ax:
            wp$8r['setTagName'](edftu['slice'](xw1, c2o93));case zco34_9:case zxr8b1w:case zgzakq0:
            kfduit = zgzakq0, wp$8r['closed'] = !0x0;case zkt0g:case zqaz0bg:case z_hjn9:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return g0kzq['error']('unexpected end of input'), kfduit == zz0ax && wp$8r['setTagName'](edftu['slice'](xw1, c2o93)), c2o93;case '>':
        switch (kfduit) {case zz0ax:
            wp$8r['setTagName'](edftu['slice'](xw1, c2o93));case zco34_9:case zxr8b1w:case zgzakq0:
            break;case zkt0g:case zqaz0bg:
            etfuid = edftu['slice'](xw1, c2o93), '/' === etfuid['slice'](-0x1) && (wp$8r['closed'] = !0x0, etfuid = etfuid['slice'](0x0, -0x1));case z_hjn9:
            kfduit === z_hjn9 && (etfuid = udeitm), kfduit == zkt0g ? (g0kzq['warning']('attribute "' + etfuid + '" missed quot(")!!'), wp$8r['add'](udeitm, etfuid['replace'](/&#?\w+;/g, w8rp1), xw1)) : ('http://www.w3.org/1999/xhtml' === hj64mn[''] && etfuid['match'](/^(?:disabled|checked|selected)$/i) || g0kzq['warning']('attribute "' + etfuid + '" missed value!! "' + etfuid + '" instead!!'), wp$8r['add'](etfuid, etfuid, xw1));break;case zbazq0:
            throw new Error('attribute value missed!!');}return c2o93;case '\u0080':
        w8x$1r = '\x20';default:
        if ('\x20' >= w8x$1r) switch (kfduit) {case zz0ax:
            wp$8r['setTagName'](edftu['slice'](xw1, c2o93)), kfduit = zxr8b1w;break;case zqaz0bg:
            udeitm = edftu['slice'](xw1, c2o93), kfduit = z_hjn9;break;case zkt0g:
            var etfuid = edftu['slice'](xw1, c2o93)['replace'](/&#?\w+;/g, w8rp1);g0kzq['warning']('attribute "' + etfuid + '" missed quot(")!!'), wp$8r['add'](udeitm, etfuid, xw1);case zco34_9:
            kfduit = zxr8b1w;} else switch (kfduit) {case z_hjn9:
            {
              wp$8r['tagName'];
            }'http://www.w3.org/1999/xhtml' === hj64mn[''] && udeitm['match'](/^(?:disabled|checked|selected)$/i) || g0kzq['warning']('attribute "' + udeitm + '" missed value!! "' + udeitm + '" instead2!!'), wp$8r['add'](udeitm, udeitm, xw1), xw1 = c2o93, kfduit = zqaz0bg;break;case zco34_9:
            g0kzq['warning']('attribute space is required"' + udeitm + '\x22!!');case zxr8b1w:
            kfduit = zqaz0bg, xw1 = c2o93;break;case zbazq0:
            kfduit = zkt0g, xw1 = c2o93;break;case zgzakq0:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}c2o93++;
  }
}function zgfqk0z($wv, o329, tdueim) {
  for (var $7lpv = $wv['tagName'], hdem = null, bx80za = $wv['length']; bx80za--;) {
    var figkt = $wv[bx80za],
        fiutd = figkt['qName'],
        ne6jh = figkt['value'],
        pr$7vw = fiutd['indexOf'](':');if (pr$7vw > 0x0) var _49jh = figkt['prefix'] = fiutd['slice'](0x0, pr$7vw),
        $7wvr = fiutd['slice'](pr$7vw + 0x1),
        zx08ba = 'xmlns' === _49jh && $7wvr;else $7wvr = fiutd, _49jh = null, zx08ba = 'xmlns' === fiutd && '';figkt['localName'] = $7wvr, zx08ba !== !0x1 && (null == hdem && (hdem = {}, zpv$7ly(tdueim, tdueim = {})), tdueim[zx08ba] = hdem[zx08ba] = ne6jh, figkt['uri'] = 'http://www.w3.org/2000/xmlns/', o329['startPrefixMapping'](zx08ba, ne6jh));
  }for (var bx80za = $wv['length']; bx80za--;) {
    figkt = $wv[bx80za];var _49jh = figkt['prefix'];_49jh && ('xml' === _49jh && (figkt['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _49jh && (figkt['uri'] = tdueim[_49jh || '']));
  }var pr$7vw = $7lpv['indexOf'](':');pr$7vw > 0x0 ? (_49jh = $wv['prefix'] = $7lpv['slice'](0x0, pr$7vw), $7wvr = $wv['localName'] = $7lpv['slice'](pr$7vw + 0x1)) : (_49jh = null, $7wvr = $wv['localName'] = $7lpv);var q0fgtk = $wv['uri'] = tdueim[_49jh || ''];if (o329['startElement'](q0fgtk, $7wvr, $7lpv, $wv), !$wv['closed']) return $wv['currentNSMap'] = tdueim, $wv['localNSMap'] = hdem, !0x0;if (o329['endElement'](q0fgtk, $7wvr, $7lpv), hdem) {
    for (_49jh in hdem) o329['endPrefixMapping'](_49jh);
  }
}function zjen6mh(agqz, dtieu, uqtf, w$8xr, xwr8) {
  if (/^(?:script|textarea)$/i['test'](uqtf)) {
    var xqab0 = agqz['indexOf']('</' + uqtf + '>', dtieu),
        etif = agqz['substring'](dtieu + 0x1, xqab0);if (/[&<]/['test'](etif)) return (/^script$/i['test'](uqtf) ? (xwr8['characters'](etif, 0x0, etif['length']), xqab0) : (etif = etif['replace'](/&#?\w+;/g, w$8xr), xwr8['characters'](etif, 0x0, etif['length']), xqab0)
    );
  }return dtieu + 0x1;
}function zvwr1$(igu, a8z1x, n4_h, $v7wpr) {
  var q0a = $v7wpr[n4_h];return null == q0a && (q0a = igu['lastIndexOf']('</' + n4_h + '>'), a8z1x > q0a && (q0a = igu['lastIndexOf']('</' + n4_h)), $v7wpr[n4_h] = q0a), a8z1x > q0a;
}function zpv$7ly(az0gkq, $8w1pr) {
  for (var r7wp in az0gkq) $8w1pr[r7wp] = az0gkq[r7wp];
}function zbz80x(kftgq0, qzfgk0, gfkqut, ikftd) {
  var dm6u = kftgq0['charAt'](qzfgk0 + 0x2);switch (dm6u) {case '-':
      if ('-' === kftgq0['charAt'](qzfgk0 + 0x3)) {
        var tiduk = kftgq0['indexOf']('-->', qzfgk0 + 0x4);return tiduk > qzfgk0 ? (gfkqut['comment'](kftgq0, qzfgk0 + 0x4, tiduk - qzfgk0 - 0x4), tiduk + 0x3) : (ikftd['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == kftgq0['substr'](qzfgk0 + 0x3, 0x6)) {
        var tiduk = kftgq0['indexOf'](']]>', qzfgk0 + 0x9);return gfkqut['startCDATA'](), gfkqut['characters'](kftgq0, qzfgk0 + 0x9, tiduk - qzfgk0 - 0x9), gfkqut['endCDATA'](), tiduk + 0x3;
      }var jmhde = zxbza0q(kftgq0, qzfgk0),
          kufdi = jmhde['length'];if (kufdi > 0x1 && /!doctype/i['test'](jmhde[0x0][0x0])) {
        var h6_j4n = jmhde[0x1][0x0],
            o59c_ = kufdi > 0x3 && /^public$/i['test'](jmhde[0x2][0x0]) && jmhde[0x3][0x0],
            c_n39 = kufdi > 0x4 && jmhde[0x4][0x0],
            feduti = jmhde[kufdi - 0x1];return gfkqut['startDTD'](h6_j4n, o59c_ && o59c_['replace'](/^(['"])(.*?)\1$/, '$2'), c_n39 && c_n39['replace'](/^(['"])(.*?)\1$/, '$2')), gfkqut['endDTD'](), feduti['index'] + feduti[0x0]['length'];
      }}return -0x1;
}function zmdj6e(fkg0qz, $vwr7p, r8pw$1) {
  var enj6hm = fkg0qz['indexOf']('?>', $vwr7p);if (enj6hm) {
    var jh4nm6 = fkg0qz['substring']($vwr7p, enj6hm)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (jh4nm6) {
      {
        jh4nm6[0x0]['length'];
      }return r8pw$1['processingInstruction'](jh4nm6[0x1], jh4nm6[0x2]), enj6hm + 0x2;
    }return -0x1;
  }return -0x1;
}function zqtgkf() {}function zimd6u(p$vl7y, c9_43o) {
  return p$vl7y['__proto__'] = c9_43o, p$vl7y;
}function zxbza0q(_o943c, b8ar) {
  var ditume,
      qba0zg = [],
      aqxb = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (aqxb['lastIndex'] = b8ar, aqxb['exec'](_o943c); ditume = aqxb['exec'](_o943c);) if (qba0zg['push'](ditume), ditume[0x1]) return qba0zg;
}var ziftugk = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zqzagb0 = new RegExp('[\\-\\.0-9' + ziftugk['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zwvr$p1 = new RegExp('^' + ziftugk['source'] + zqzagb0['source'] + '*(?::' + ziftugk['source'] + zqzagb0['source'] + '*)?$'),
    zz0ax = 0x0,
    zqaz0bg = 0x1,
    z_hjn9 = 0x2,
    zbazq0 = 0x3,
    zkt0g = 0x4,
    zco34_9 = 0x5,
    zxr8b1w = 0x6,
    zgzakq0 = 0x7;zy7$pvl['prototype'] = { 'parse': function (umited, z0qabx, tdmie) {
    var q0zbx = this['domBuilder'];q0zbx['startDocument'](), zpv$7ly(z0qabx, z0qabx = {}), ztqguf(umited, z0qabx, tdmie, q0zbx, this['errorHandler']), q0zbx['endDocument']();
  } }, zqtgkf['prototype'] = { 'setTagName': function (aqz0g) {
    if (!zwvr$p1['test'](aqz0g)) throw new Error('invalid tagName:' + aqz0g);this['tagName'] = aqz0g;
  }, 'add': function (iuktd, je6hnm, x0ab8z) {
    if (!zwvr$p1['test'](iuktd)) throw new Error('invalid attribute:' + iuktd);this[this['length']++] = { 'qName': iuktd, 'value': je6hnm, 'offset': x0ab8z };
  }, 'length': 0x0, 'getLocalName': function (itefud) {
    return this[itefud]['localName'];
  }, 'getLocator': function (hm4n6j) {
    return this[hm4n6j]['locator'];
  }, 'getQName': function (uktig) {
    return this[uktig]['qName'];
  }, 'getURI': function (n49j_3) {
    return this[n49j_3]['uri'];
  }, 'getValue': function (ei6hm) {
    return this[ei6hm]['value'];
  } }, zimd6u({}, zimd6u['prototype']) instanceof zimd6u || (zimd6u = function ($vly7p, c5932o) {
  function ugktq() {}ugktq['prototype'] = c5932o, ugktq = new ugktq();for (c5932o in $vly7p) ugktq[c5932o] = $vly7p[c5932o];return ugktq;
}), exports['XMLReader'] = zy7$pvl;