var v = wx.$d;
function zk0zqgf() {}function zxa8r1(zb0qxa, tdmu, imude, qzbxa0, a0bxzq) {
  function _4cn39(uied6) {
    if (uied6 > 0xffff) {
      uied6 -= 0x10000;var rbx8 = 0xd800 + (uied6 >> 0xa),
          $vp7r = 0xdc00 + (0x3ff & uied6);return String['fromCharCode'](rbx8, $vp7r);
    }return String['fromCharCode'](uied6);
  }function ihe6dm(dehm6j) {
    var w81p$r = dehm6j['slice'](0x1, -0x1);return w81p$r in imude ? imude[w81p$r] : '#' === w81p$r['charAt'](0x0) ? _4cn39(parseInt(w81p$r['substr'](0x1)['replace']('x', '0x'))) : (a0bxzq['error']('entity not found:' + dehm6j), dehm6j);
  }function c_39o(xbqz) {
    if (xbqz > xa80) {
      var azg0kq = zb0qxa['substring'](xa80, xbqz)['replace'](/&#?\w+;/g, ihe6dm);za0bgq && n_4hj(xa80), qzbxa0['characters'](azg0kq, 0x0, xbqz - xa80), xa80 = xbqz;
    }
  }function n_4hj(zk0q, o39_4c) {
    for (; zk0q >= _o94c3 && (o39_4c = gbq0z['exec'](zb0qxa));) gqabz0 = o39_4c['index'], _o94c3 = gqabz0 + o39_4c[0x0]['length'], za0bgq['lineNumber']++;za0bgq['columnNumber'] = zk0q - gqabz0 + 0x1;
  }for (var gqabz0 = 0x0, _o94c3 = 0x0, gbq0z = /.*(?:\r\n?|\n)|.*$/g, za0bgq = qzbxa0['locator'], f0qgz = [{ 'currentNSMap': tdmu }], pwy$v = {}, xa80 = 0x0;;) {
    try {
      var ufit = zb0qxa['indexOf']('<', xa80);if (0x0 > ufit) {
        if (!zb0qxa['substr'](xa80)['match'](/^\s*$/)) {
          var l7$yvp = qzbxa0['doc'],
              x81rwb = l7$yvp['createTextNode'](zb0qxa['substr'](xa80));l7$yvp['appendChild'](x81rwb), qzbxa0['currentElement'] = x81rwb;
        }return;
      }switch (ufit > xa80 && c_39o(ufit), zb0qxa['charAt'](ufit + 0x1)) {case '/':
          var emhi6d = zb0qxa['indexOf']('>', ufit + 0x3),
              qftg0k = zb0qxa['substring'](ufit + 0x2, emhi6d),
              wr$18p = f0qgz['pop']();0x0 > emhi6d ? (qftg0k = zb0qxa['substring'](ufit + 0x2)['replace'](/[\s<].*/, ''), a0bxzq['error']('end tag name: ' + qftg0k + ' is not complete:' + wr$18p['tagName']), emhi6d = ufit + 0x1 + qftg0k['length']) : qftg0k['match'](/\s</) && (qftg0k = qftg0k['replace'](/[\s<].*/, ''), a0bxzq['error']('end tag name: ' + qftg0k + ' maybe not complete'), emhi6d = ufit + 0x1 + qftg0k['length']);var x8wr = wr$18p['localNSMap'],
              $plv7y = wr$18p['tagName'] == qftg0k,
              c9n34 = $plv7y || wr$18p['tagName'] && wr$18p['tagName']['toLowerCase']() == qftg0k['toLowerCase']();if (c9n34) {
            if (qzbxa0['endElement'](wr$18p['uri'], wr$18p['localName'], qftg0k), x8wr) {
              for (var tgkfuq in x8wr) qzbxa0['endPrefixMapping'](tgkfuq);
            }$plv7y || a0bxzq['fatalError']('end tag name: ' + qftg0k + ' is not match the current start tagName:' + wr$18p['tagName']);
          } else f0qgz['push'](wr$18p);emhi6d++;break;case '?':
          za0bgq && n_4hj(ufit), emhi6d = zdi6eh(zb0qxa, ufit, qzbxa0);break;case '!':
          za0bgq && n_4hj(ufit), emhi6d = z_jn46h(zb0qxa, ufit, qzbxa0, a0bxzq);break;default:
          za0bgq && n_4hj(ufit);var mdeui = new zc34o_9(),
              tkqg = f0qgz[f0qgz['length'] - 0x1]['currentNSMap'],
              emhi6d = zftg0q(zb0qxa, ufit, mdeui, tkqg, ihe6dm, a0bxzq),
              hme6 = mdeui['length'];if (!mdeui['closed'] && zkzg0a(zb0qxa, emhi6d, mdeui['tagName'], pwy$v) && (mdeui['closed'] = !0x0, imude['nbsp'] || a0bxzq['warning']('unclosed xml attribute')), za0bgq && hme6) {
            for (var $p1wr = zdhjme6(za0bgq, {}), br1a8x = 0x0; hme6 > br1a8x; br1a8x++) {
              var xaz8 = mdeui[br1a8x];n_4hj(xaz8['offset']), xaz8['locator'] = zdhjme6(za0bgq, {});
            }qzbxa0['locator'] = $p1wr, z_94cn(mdeui, qzbxa0, tkqg) && f0qgz['push'](mdeui), qzbxa0['locator'] = za0bgq;
          } else z_94cn(mdeui, qzbxa0, tkqg) && f0qgz['push'](mdeui);'http://www.w3.org/1999/xhtml' !== mdeui['uri'] || mdeui['closed'] ? emhi6d++ : emhi6d = z$1p8rw(zb0qxa, emhi6d, mdeui['tagName'], ihe6dm, qzbxa0);}
    } catch (fkzg0) {
      a0bxzq['error']('element parse error: ' + fkzg0), emhi6d = -0x1;
    }emhi6d > xa80 ? xa80 = emhi6d : c_39o(Math['max'](ufit, xa80) + 0x1);
  }
}function zdhjme6(dkit, w7rvp) {
  return w7rvp['lineNumber'] = dkit['lineNumber'], w7rvp['columnNumber'] = dkit['columnNumber'], w7rvp;
}function zftg0q(_nc493, x0zbqa, p1w$vr, nh_4, umdi6e, $vr7pw) {
  for (var itumed, m6h4j, fuit = ++x0zbqa, zab18 = zwvp7r$;;) {
    var idftu = _nc493['charAt'](fuit);switch (idftu) {case '=':
        if (zab18 === zenhm6) itumed = _nc493['slice'](x0zbqa, fuit), zab18 = zw7vpr;else {
          if (zab18 !== zqfgtk) throw new Error('attribute equal must after attrName');zab18 = zw7vpr;
        }break;case '\x27':case '\x22':
        if (zab18 === zw7vpr || zab18 === zenhm6) {
          if (zab18 === zenhm6 && ($vr7pw['warning']('attribute value must after "="'), itumed = _nc493['slice'](x0zbqa, fuit)), x0zbqa = fuit + 0x1, fuit = _nc493['indexOf'](idftu, x0zbqa), !(fuit > 0x0)) throw new Error('attribute value no end \'' + idftu + '\' match');m6h4j = _nc493['slice'](x0zbqa, fuit)['replace'](/&#?\w+;/g, umdi6e), p1w$vr['add'](itumed, m6h4j, x0zbqa - 0x1), zab18 = zfg0tq;
        } else {
          if (zab18 != zw8rx$) throw new Error('attribute value must after "="');m6h4j = _nc493['slice'](x0zbqa, fuit)['replace'](/&#?\w+;/g, umdi6e), p1w$vr['add'](itumed, m6h4j, x0zbqa), $vr7pw['warning']('attribute "' + itumed + '" missed start quot(' + idftu + ')!!'), x0zbqa = fuit + 0x1, zab18 = zfg0tq;
        }break;case '/':
        switch (zab18) {case zwvp7r$:
            p1w$vr['setTagName'](_nc493['slice'](x0zbqa, fuit));case zfg0tq:case z$1wpr:case zikfgtu:
            zab18 = zikfgtu, p1w$vr['closed'] = !0x0;case zw8rx$:case zenhm6:case zqfgtk:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $vr7pw['error']('unexpected end of input'), zab18 == zwvp7r$ && p1w$vr['setTagName'](_nc493['slice'](x0zbqa, fuit)), fuit;case '>':
        switch (zab18) {case zwvp7r$:
            p1w$vr['setTagName'](_nc493['slice'](x0zbqa, fuit));case zfg0tq:case z$1wpr:case zikfgtu:
            break;case zw8rx$:case zenhm6:
            m6h4j = _nc493['slice'](x0zbqa, fuit), '/' === m6h4j['slice'](-0x1) && (p1w$vr['closed'] = !0x0, m6h4j = m6h4j['slice'](0x0, -0x1));case zqfgtk:
            zab18 === zqfgtk && (m6h4j = itumed), zab18 == zw8rx$ ? ($vr7pw['warning']('attribute "' + m6h4j + '" missed quot(")!!'), p1w$vr['add'](itumed, m6h4j['replace'](/&#?\w+;/g, umdi6e), x0zbqa)) : ('http://www.w3.org/1999/xhtml' === nh_4[''] && m6h4j['match'](/^(?:disabled|checked|selected)$/i) || $vr7pw['warning']('attribute "' + m6h4j + '" missed value!! "' + m6h4j + '" instead!!'), p1w$vr['add'](m6h4j, m6h4j, x0zbqa));break;case zw7vpr:
            throw new Error('attribute value missed!!');}return fuit;case '\u0080':
        idftu = '\x20';default:
        if ('\x20' >= idftu) switch (zab18) {case zwvp7r$:
            p1w$vr['setTagName'](_nc493['slice'](x0zbqa, fuit)), zab18 = z$1wpr;break;case zenhm6:
            itumed = _nc493['slice'](x0zbqa, fuit), zab18 = zqfgtk;break;case zw8rx$:
            var m6h4j = _nc493['slice'](x0zbqa, fuit)['replace'](/&#?\w+;/g, umdi6e);$vr7pw['warning']('attribute "' + m6h4j + '" missed quot(")!!'), p1w$vr['add'](itumed, m6h4j, x0zbqa);case zfg0tq:
            zab18 = z$1wpr;} else switch (zab18) {case zqfgtk:
            {
              p1w$vr['tagName'];
            }'http://www.w3.org/1999/xhtml' === nh_4[''] && itumed['match'](/^(?:disabled|checked|selected)$/i) || $vr7pw['warning']('attribute "' + itumed + '" missed value!! "' + itumed + '" instead2!!'), p1w$vr['add'](itumed, itumed, x0zbqa), x0zbqa = fuit, zab18 = zenhm6;break;case zfg0tq:
            $vr7pw['warning']('attribute space is required"' + itumed + '\x22!!');case z$1wpr:
            zab18 = zenhm6, x0zbqa = fuit;break;case zw7vpr:
            zab18 = zw8rx$, x0zbqa = fuit;break;case zikfgtu:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}fuit++;
  }
}function z_94cn(a0z8bx, nj6h4_, n493c) {
  for (var oc235 = a0z8bx['tagName'], tdufi = null, z08abx = a0z8bx['length']; z08abx--;) {
    var b0xqza = a0z8bx[z08abx],
        tmdiue = b0xqza['qName'],
        md6ej = b0xqza['value'],
        euitdf = tmdiue['indexOf'](':');if (euitdf > 0x0) var $wy = b0xqza['prefix'] = tmdiue['slice'](0x0, euitdf),
        fqktu = tmdiue['slice'](euitdf + 0x1),
        _j4n3 = 'xmlns' === $wy && fqktu;else fqktu = tmdiue, $wy = null, _j4n3 = 'xmlns' === tmdiue && '';b0xqza['localName'] = fqktu, _j4n3 !== !0x1 && (null == tdufi && (tdufi = {}, zeufdit(n493c, n493c = {})), n493c[_j4n3] = tdufi[_j4n3] = md6ej, b0xqza['uri'] = 'http://www.w3.org/2000/xmlns/', nj6h4_['startPrefixMapping'](_j4n3, md6ej));
  }for (var z08abx = a0z8bx['length']; z08abx--;) {
    b0xqza = a0z8bx[z08abx];var $wy = b0xqza['prefix'];$wy && ('xml' === $wy && (b0xqza['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $wy && (b0xqza['uri'] = n493c[$wy || '']));
  }var euitdf = oc235['indexOf'](':');euitdf > 0x0 ? ($wy = a0z8bx['prefix'] = oc235['slice'](0x0, euitdf), fqktu = a0z8bx['localName'] = oc235['slice'](euitdf + 0x1)) : ($wy = null, fqktu = a0z8bx['localName'] = oc235);var kfdui = a0z8bx['uri'] = n493c[$wy || ''];if (nj6h4_['startElement'](kfdui, fqktu, oc235, a0z8bx), !a0z8bx['closed']) return a0z8bx['currentNSMap'] = n493c, a0z8bx['localNSMap'] = tdufi, !0x0;if (nj6h4_['endElement'](kfdui, fqktu, oc235), tdufi) {
    for ($wy in tdufi) nj6h4_['endPrefixMapping']($wy);
  }
}function z$1p8rw(nj_h46, rw$18x, rwp$7, dhmei6, fk0qtg) {
  if (/^(?:script|textarea)$/i['test'](rwp$7)) {
    var fg0qt = nj_h46['indexOf']('</' + rwp$7 + '>', rw$18x),
        $pl7 = nj_h46['substring'](rw$18x + 0x1, fg0qt);if (/[&<]/['test']($pl7)) return (/^script$/i['test'](rwp$7) ? (fk0qtg['characters']($pl7, 0x0, $pl7['length']), fg0qt) : ($pl7 = $pl7['replace'](/&#?\w+;/g, dhmei6), fk0qtg['characters']($pl7, 0x0, $pl7['length']), fg0qt)
    );
  }return rw$18x + 0x1;
}function zkzg0a(nh4_, emn6hj, arx1, $1vpr) {
  var $p7yv = $1vpr[arx1];return null == $p7yv && ($p7yv = nh4_['lastIndexOf']('</' + arx1 + '>'), emn6hj > $p7yv && ($p7yv = nh4_['lastIndexOf']('</' + arx1)), $1vpr[arx1] = $p7yv), emn6hj > $p7yv;
}function zeufdit(mdhie6, hmedj6) {
  for (var t0qkf in mdhie6) hmedj6[t0qkf] = mdhie6[t0qkf];
}function z_jn46h($v7rp, h6j4nm, qt0, gazqk) {
  var gk0za = $v7rp['charAt'](h6j4nm + 0x2);switch (gk0za) {case '-':
      if ('-' === $v7rp['charAt'](h6j4nm + 0x3)) {
        var idmhe = $v7rp['indexOf']('-->', h6j4nm + 0x4);return idmhe > h6j4nm ? (qt0['comment']($v7rp, h6j4nm + 0x4, idmhe - h6j4nm - 0x4), idmhe + 0x3) : (gazqk['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == $v7rp['substr'](h6j4nm + 0x3, 0x6)) {
        var idmhe = $v7rp['indexOf'](']]>', h6j4nm + 0x9);return qt0['startCDATA'](), qt0['characters']($v7rp, h6j4nm + 0x9, idmhe - h6j4nm - 0x9), qt0['endCDATA'](), idmhe + 0x3;
      }var wy7v = za8b0x($v7rp, h6j4nm),
          $wr8x1 = wy7v['length'];if ($wr8x1 > 0x1 && /!doctype/i['test'](wy7v[0x0][0x0])) {
        var mu6de = wy7v[0x1][0x0],
            zgak = $wr8x1 > 0x3 && /^public$/i['test'](wy7v[0x2][0x0]) && wy7v[0x3][0x0],
            o9c32 = $wr8x1 > 0x4 && wy7v[0x4][0x0],
            ej6hm = wy7v[$wr8x1 - 0x1];return qt0['startDTD'](mu6de, zgak && zgak['replace'](/^(['"])(.*?)\1$/, '$2'), o9c32 && o9c32['replace'](/^(['"])(.*?)\1$/, '$2')), qt0['endDTD'](), ej6hm['index'] + ej6hm[0x0]['length'];
      }}return -0x1;
}function zdi6eh(ab08zx, umti, xb8r) {
  var a0qzbx = ab08zx['indexOf']('?>', umti);if (a0qzbx) {
    var qgaz0 = ab08zx['substring'](umti, a0qzbx)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (qgaz0) {
      {
        qgaz0[0x0]['length'];
      }return xb8r['processingInstruction'](qgaz0[0x1], qgaz0[0x2]), a0qzbx + 0x2;
    }return -0x1;
  }return -0x1;
}function zc34o_9() {}function zedm6jh(_34c, dtfie) {
  return _34c['__proto__'] = dtfie, _34c;
}function za8b0x(abqx, eifdt) {
  var ak0q,
      mueid6 = [],
      y$v7pl = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (y$v7pl['lastIndex'] = eifdt, y$v7pl['exec'](abqx); ak0q = y$v7pl['exec'](abqx);) if (mueid6['push'](ak0q), ak0q[0x1]) return mueid6;
}var zqkgf = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zzba1x = new RegExp('[\\-\\.0-9' + zqkgf['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    z$8w1p = new RegExp('^' + zqkgf['source'] + zzba1x['source'] + '*(?::' + zqkgf['source'] + zzba1x['source'] + '*)?$'),
    zwvp7r$ = 0x0,
    zenhm6 = 0x1,
    zqfgtk = 0x2,
    zw7vpr = 0x3,
    zw8rx$ = 0x4,
    zfg0tq = 0x5,
    z$1wpr = 0x6,
    zikfgtu = 0x7;zk0zqgf['prototype'] = { 'parse': function (futikd, kq0t, qzkgf0) {
    var mhe6j = this['domBuilder'];mhe6j['startDocument'](), zeufdit(kq0t, kq0t = {}), zxa8r1(futikd, kq0t, qzkgf0, mhe6j, this['errorHandler']), mhe6j['endDocument']();
  } }, zc34o_9['prototype'] = { 'setTagName': function (h9) {
    if (!z$8w1p['test'](h9)) throw new Error('invalid tagName:' + h9);this['tagName'] = h9;
  }, 'add': function (n_94j3, tkufq, hjm6en) {
    if (!z$8w1p['test'](n_94j3)) throw new Error('invalid attribute:' + n_94j3);this[this['length']++] = { 'qName': n_94j3, 'value': tkufq, 'offset': hjm6en };
  }, 'length': 0x0, 'getLocalName': function (v7pr$w) {
    return this[v7pr$w]['localName'];
  }, 'getLocator': function (c_493o) {
    return this[c_493o]['locator'];
  }, 'getQName': function (c94o) {
    return this[c94o]['qName'];
  }, 'getURI': function ($vyl7) {
    return this[$vyl7]['uri'];
  }, 'getValue': function (l7pyv) {
    return this[l7pyv]['value'];
  } }, zedm6jh({}, zedm6jh['prototype']) instanceof zedm6jh || (zedm6jh = function ($y7vl, j64) {
  function _o3() {}_o3['prototype'] = j64, _o3 = new _o3();for (j64 in $y7vl) _o3[j64] = $y7vl[j64];return _o3;
}), exports['XMLReader'] = zk0zqgf;