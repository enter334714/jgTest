var Q = wx.$v;
function vo24tn3() {}function vhl6uy(yt2_1, rs9f, l1, bzule, ns$o34) {
  function p057v(jm0adc) {
    if (jm0adc > 0xffff) {
      jm0adc -= 0x10000;var foi = 0xd800 + (jm0adc >> 0xa),
          ois$f4 = 0xdc00 + (0x3ff & jm0adc);return String['fromCharCode'](foi, ois$f4);
    }return String['fromCharCode'](jm0adc);
  }function ewgq(luz) {
    var euq8bw = luz['slice'](0x1, -0x1);return euq8bw in l1 ? l1[euq8bw] : '#' === euq8bw['charAt'](0x0) ? p057v(parseInt(euq8bw['substr'](0x1)['replace']('x', '0x'))) : (ns$o34['error']('entity not found:' + luz), luz);
  }function t12_y(bqwg8) {
    if (bqwg8 > z8yu6l) {
      var mdk0cj = yt2_1['substring'](z8yu6l, bqwg8)['replace'](/&#?\w+;/g, ewgq);xqwbg && wqgpv(z8yu6l), bzule['characters'](mdk0cj, 0x0, bqwg8 - z8yu6l), z8yu6l = bqwg8;
    }
  }function wqgpv(mjd0kc, we8qg) {
    for (; mjd0kc >= cjm0da && (we8qg = zh61_y['exec'](yt2_1));) huy6zl = we8qg['index'], cjm0da = huy6zl + we8qg[0x0]['length'], xqwbg['lineNumber']++;xqwbg['columnNumber'] = mjd0kc - huy6zl + 0x1;
  }for (var huy6zl = 0x0, cjm0da = 0x0, zh61_y = /.*(?:\r\n?|\n)|.*$/g, xqwbg = bzule['locator'], qgpvx = [{ 'currentNSMap': rs9f }], bxgqw = {}, z8yu6l = 0x0;;) {
    try {
      var yhl6z = yt2_1['indexOf']('<', z8yu6l);if (0x0 > yhl6z) {
        if (!yt2_1['substr'](z8yu6l)['match'](/^\s*$/)) {
          var c7k5 = bzule['doc'],
              isfo9$ = c7k5['createTextNode'](yt2_1['substr'](z8yu6l));c7k5['appendChild'](isfo9$), bzule['currentElement'] = isfo9$;
        }return;
      }switch (yhl6z > z8yu6l && t12_y(yhl6z), yt2_1['charAt'](yhl6z + 0x1)) {case '/':
          var acj0m = yt2_1['indexOf']('>', yhl6z + 0x3),
              n21_3t = yt2_1['substring'](yhl6z + 0x2, acj0m),
              qv = qgpvx['pop']();0x0 > acj0m ? (n21_3t = yt2_1['substring'](yhl6z + 0x2)['replace'](/[\s<].*/, ''), ns$o34['error']('end tag name: ' + n21_3t + ' is not complete:' + qv['tagName']), acj0m = yhl6z + 0x1 + n21_3t['length']) : n21_3t['match'](/\s</) && (n21_3t = n21_3t['replace'](/[\s<].*/, ''), ns$o34['error']('end tag name: ' + n21_3t + ' maybe not complete'), acj0m = yhl6z + 0x1 + n21_3t['length']);var c7mk0 = qv['localNSMap'],
              lqueb8 = qv['tagName'] == n21_3t,
              b8gwq = lqueb8 || qv['tagName'] && qv['tagName']['toLowerCase']() == n21_3t['toLowerCase']();if (b8gwq) {
            if (bzule['endElement'](qv['uri'], qv['localName'], n21_3t), c7mk0) {
              for (var ebq8wg in c7mk0) bzule['endPrefixMapping'](ebq8wg);
            }lqueb8 || ns$o34['fatalError']('end tag name: ' + n21_3t + ' is not match the current start tagName:' + qv['tagName']);
          } else qgpvx['push'](qv);acj0m++;break;case '?':
          xqwbg && wqgpv(yhl6z), acj0m = vt_321n(yt2_1, yhl6z, bzule);break;case '!':
          xqwbg && wqgpv(yhl6z), acj0m = vt3on$4(yt2_1, yhl6z, bzule, ns$o34);break;default:
          xqwbg && wqgpv(yhl6z);var _1y6zh = new vyluz8(),
              y16z_h = qgpvx[qgpvx['length'] - 0x1]['currentNSMap'],
              acj0m = vxqwpv(yt2_1, yhl6z, _1y6zh, y16z_h, ewgq, ns$o34),
              if$s9o = _1y6zh['length'];if (!_1y6zh['closed'] && vu8lzeb(yt2_1, acj0m, _1y6zh['tagName'], bxgqw) && (_1y6zh['closed'] = !0x0, l1['nbsp'] || ns$o34['warning']('unclosed xml attribute')), xqwbg && if$s9o) {
            for (var pgv75x = vz8elu(xqwbg, {}), $s4foi = 0x0; if$s9o > $s4foi; $s4foi++) {
              var uzl = _1y6zh[$s4foi];wqgpv(uzl['offset']), uzl['locator'] = vz8elu(xqwbg, {});
            }bzule['locator'] = pgv75x, vbgew(_1y6zh, bzule, y16z_h) && qgpvx['push'](_1y6zh), bzule['locator'] = xqwbg;
          } else vbgew(_1y6zh, bzule, y16z_h) && qgpvx['push'](_1y6zh);'http://www.w3.org/1999/xhtml' !== _1y6zh['uri'] || _1y6zh['closed'] ? acj0m++ : acj0m = vmkjdc0(yt2_1, acj0m, _1y6zh['tagName'], ewgq, bzule);}
    } catch (_zhy6) {
      ns$o34['error']('element parse error: ' + _zhy6), acj0m = -0x1;
    }acj0m > z8yu6l ? z8yu6l = acj0m : t12_y(Math['max'](yhl6z, z8yu6l) + 0x1);
  }
}function vz8elu(yhz6, ewgqb) {
  return ewgqb['lineNumber'] = yhz6['lineNumber'], ewgqb['columnNumber'] = yhz6['columnNumber'], ewgqb;
}function vxqwpv(f$4so, luh6yz, v7gpx5, o$s43n, c0kdjm, nh2_) {
  for (var $34sio, xg5p7v, uzel8b = ++luh6yz, z6uhyl = vkdm7;;) {
    var wpxqg = f$4so['charAt'](uzel8b);switch (wpxqg) {case '=':
        if (z6uhyl === vo3n24) $34sio = f$4so['slice'](luh6yz, uzel8b), z6uhyl = vuqe8w;else {
          if (z6uhyl !== vo3s$i) throw new Error('attribute equal must after attrName');z6uhyl = vuqe8w;
        }break;case '\x27':case '\x22':
        if (z6uhyl === vuqe8w || z6uhyl === vo3n24) {
          if (z6uhyl === vo3n24 && (nh2_['warning']('attribute value must after "="'), $34sio = f$4so['slice'](luh6yz, uzel8b)), luh6yz = uzel8b + 0x1, uzel8b = f$4so['indexOf'](wpxqg, luh6yz), !(uzel8b > 0x0)) throw new Error('attribute value no end \'' + wpxqg + '\' match');xg5p7v = f$4so['slice'](luh6yz, uzel8b)['replace'](/&#?\w+;/g, c0kdjm), v7gpx5['add']($34sio, xg5p7v, luh6yz - 0x1), z6uhyl = vt23no;
        } else {
          if (z6uhyl != vwbqx) throw new Error('attribute value must after "="');xg5p7v = f$4so['slice'](luh6yz, uzel8b)['replace'](/&#?\w+;/g, c0kdjm), v7gpx5['add']($34sio, xg5p7v, luh6yz), nh2_['warning']('attribute "' + $34sio + '" missed start quot(' + wpxqg + ')!!'), luh6yz = uzel8b + 0x1, z6uhyl = vt23no;
        }break;case '/':
        switch (z6uhyl) {case vkdm7:
            v7gpx5['setTagName'](f$4so['slice'](luh6yz, uzel8b));case vt23no:case vo$3tn4:case vbu8zle:
            z6uhyl = vbu8zle, v7gpx5['closed'] = !0x0;case vwbqx:case vo3n24:case vo3s$i:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return nh2_['error']('unexpected end of input'), z6uhyl == vkdm7 && v7gpx5['setTagName'](f$4so['slice'](luh6yz, uzel8b)), uzel8b;case '>':
        switch (z6uhyl) {case vkdm7:
            v7gpx5['setTagName'](f$4so['slice'](luh6yz, uzel8b));case vt23no:case vo$3tn4:case vbu8zle:
            break;case vwbqx:case vo3n24:
            xg5p7v = f$4so['slice'](luh6yz, uzel8b), '/' === xg5p7v['slice'](-0x1) && (v7gpx5['closed'] = !0x0, xg5p7v = xg5p7v['slice'](0x0, -0x1));case vo3s$i:
            z6uhyl === vo3s$i && (xg5p7v = $34sio), z6uhyl == vwbqx ? (nh2_['warning']('attribute "' + xg5p7v + '" missed quot(")!!'), v7gpx5['add']($34sio, xg5p7v['replace'](/&#?\w+;/g, c0kdjm), luh6yz)) : ('http://www.w3.org/1999/xhtml' === o$s43n[''] && xg5p7v['match'](/^(?:disabled|checked|selected)$/i) || nh2_['warning']('attribute "' + xg5p7v + '" missed value!! "' + xg5p7v + '" instead!!'), v7gpx5['add'](xg5p7v, xg5p7v, luh6yz));break;case vuqe8w:
            throw new Error('attribute value missed!!');}return uzel8b;case '\u0080':
        wpxqg = '\x20';default:
        if ('\x20' >= wpxqg) switch (z6uhyl) {case vkdm7:
            v7gpx5['setTagName'](f$4so['slice'](luh6yz, uzel8b)), z6uhyl = vo$3tn4;break;case vo3n24:
            $34sio = f$4so['slice'](luh6yz, uzel8b), z6uhyl = vo3s$i;break;case vwbqx:
            var xg5p7v = f$4so['slice'](luh6yz, uzel8b)['replace'](/&#?\w+;/g, c0kdjm);nh2_['warning']('attribute "' + xg5p7v + '" missed quot(")!!'), v7gpx5['add']($34sio, xg5p7v, luh6yz);case vt23no:
            z6uhyl = vo$3tn4;} else switch (z6uhyl) {case vo3s$i:
            {
              v7gpx5['tagName'];
            }'http://www.w3.org/1999/xhtml' === o$s43n[''] && $34sio['match'](/^(?:disabled|checked|selected)$/i) || nh2_['warning']('attribute "' + $34sio + '" missed value!! "' + $34sio + '" instead2!!'), v7gpx5['add']($34sio, $34sio, luh6yz), luh6yz = uzel8b, z6uhyl = vo3n24;break;case vt23no:
            nh2_['warning']('attribute space is required"' + $34sio + '\x22!!');case vo$3tn4:
            z6uhyl = vo3n24, luh6yz = uzel8b;break;case vuqe8w:
            z6uhyl = vwbqx, luh6yz = uzel8b;break;case vbu8zle:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}uzel8b++;
  }
}function vbgew(pgxwv, t1n2h, yz68lu) {
  for (var i$fr = pgxwv['tagName'], xk5pv = null, e8lbzu = pgxwv['length']; e8lbzu--;) {
    var quel = pgxwv[e8lbzu],
        b6uz8 = quel['qName'],
        kp0v = quel['value'],
        o2t34 = b6uz8['indexOf'](':');if (o2t34 > 0x0) var pxgqew = quel['prefix'] = b6uz8['slice'](0x0, o2t34),
        qwpxgv = b6uz8['slice'](o2t34 + 0x1),
        th2n1 = 'xmlns' === pxgqew && qwpxgv;else qwpxgv = b6uz8, pxgqew = null, th2n1 = 'xmlns' === b6uz8 && '';quel['localName'] = qwpxgv, th2n1 !== !0x1 && (null == xk5pv && (xk5pv = {}, v$s3o4n(yz68lu, yz68lu = {})), yz68lu[th2n1] = xk5pv[th2n1] = kp0v, quel['uri'] = 'http://www.w3.org/2000/xmlns/', t1n2h['startPrefixMapping'](th2n1, kp0v));
  }for (var e8lbzu = pgxwv['length']; e8lbzu--;) {
    quel = pgxwv[e8lbzu];var pxgqew = quel['prefix'];pxgqew && ('xml' === pxgqew && (quel['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== pxgqew && (quel['uri'] = yz68lu[pxgqew || '']));
  }var o2t34 = i$fr['indexOf'](':');o2t34 > 0x0 ? (pxgqew = pgxwv['prefix'] = i$fr['slice'](0x0, o2t34), qwpxgv = pgxwv['localName'] = i$fr['slice'](o2t34 + 0x1)) : (pxgqew = null, qwpxgv = pgxwv['localName'] = i$fr);var v7xpg5 = pgxwv['uri'] = yz68lu[pxgqew || ''];if (t1n2h['startElement'](v7xpg5, qwpxgv, i$fr, pgxwv), !pgxwv['closed']) return pgxwv['currentNSMap'] = yz68lu, pgxwv['localNSMap'] = xk5pv, !0x0;if (t1n2h['endElement'](v7xpg5, qwpxgv, i$fr), xk5pv) {
    for (pxgqew in xk5pv) t1n2h['endPrefixMapping'](pxgqew);
  }
}function vmkjdc0(l8q, pgvxw5, h1t2_n, no$s, egwpx) {
  if (/^(?:script|textarea)$/i['test'](h1t2_n)) {
    var que8l = l8q['indexOf']('</' + h1t2_n + '>', pgvxw5),
        xqgvwp = l8q['substring'](pgvxw5 + 0x1, que8l);if (/[&<]/['test'](xqgvwp)) return (/^script$/i['test'](h1t2_n) ? (egwpx['characters'](xqgvwp, 0x0, xqgvwp['length']), que8l) : (xqgvwp = xqgvwp['replace'](/&#?\w+;/g, no$s), egwpx['characters'](xqgvwp, 0x0, xqgvwp['length']), que8l)
    );
  }return pgvxw5 + 0x1;
}function vu8lzeb($i9srf, kvc570, ebu8lz, q8bewg) {
  var v57xpk = q8bewg[ebu8lz];return null == v57xpk && (v57xpk = $i9srf['lastIndexOf']('</' + ebu8lz + '>'), kvc570 > v57xpk && (v57xpk = $i9srf['lastIndexOf']('</' + ebu8lz)), q8bewg[ebu8lz] = v57xpk), kvc570 > v57xpk;
}function v$s3o4n(t_h21, bzule8) {
  for (var sirf9$ in t_h21) bzule8[sirf9$] = t_h21[sirf9$];
}function vt3on$4(ht_1y2, h_1n, gqvxpw, t24_n3) {
  var mc507k = ht_1y2['charAt'](h_1n + 0x2);switch (mc507k) {case '-':
      if ('-' === ht_1y2['charAt'](h_1n + 0x3)) {
        var xwb = ht_1y2['indexOf']('-->', h_1n + 0x4);return xwb > h_1n ? (gqvxpw['comment'](ht_1y2, h_1n + 0x4, xwb - h_1n - 0x4), xwb + 0x3) : (t24_n3['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ht_1y2['substr'](h_1n + 0x3, 0x6)) {
        var xwb = ht_1y2['indexOf'](']]>', h_1n + 0x9);return gqvxpw['startCDATA'](), gqvxpw['characters'](ht_1y2, h_1n + 0x9, xwb - h_1n - 0x9), gqvxpw['endCDATA'](), xwb + 0x3;
      }var _hty = vzyl16(ht_1y2, h_1n),
          fos$i9 = _hty['length'];if (fos$i9 > 0x1 && /!doctype/i['test'](_hty[0x0][0x0])) {
        var mkjcd = _hty[0x1][0x0],
            wgpqxe = fos$i9 > 0x3 && /^public$/i['test'](_hty[0x2][0x0]) && _hty[0x3][0x0],
            _61yhz = fos$i9 > 0x4 && _hty[0x4][0x0],
            y_zh61 = _hty[fos$i9 - 0x1];return gqvxpw['startDTD'](mkjcd, wgpqxe && wgpqxe['replace'](/^(['"])(.*?)\1$/, '$2'), _61yhz && _61yhz['replace'](/^(['"])(.*?)\1$/, '$2')), gqvxpw['endDTD'](), y_zh61['index'] + y_zh61[0x0]['length'];
      }}return -0x1;
}function vt_321n(n$3s4o, mcad0j, $sfi) {
  var h1_n = n$3s4o['indexOf']('?>', mcad0j);if (h1_n) {
    var cd0ja = n$3s4o['substring'](mcad0j, h1_n)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (cd0ja) {
      {
        cd0ja[0x0]['length'];
      }return $sfi['processingInstruction'](cd0ja[0x1], cd0ja[0x2]), h1_n + 0x2;
    }return -0x1;
  }return -0x1;
}function vyluz8() {}function vbue8l(lebuz8, bwqxe) {
  return lebuz8['__proto__'] = bwqxe, lebuz8;
}function vzyl16(buqe8l, yz6_) {
  var dmjca,
      y_h1t2 = [],
      _t23n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_t23n['lastIndex'] = yz6_, _t23n['exec'](buqe8l); dmjca = _t23n['exec'](buqe8l);) if (y_h1t2['push'](dmjca), dmjca[0x1]) return y_h1t2;
}var vpv7g5x = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    vkcm0d7 = new RegExp('[\\-\\.0-9' + vpv7g5x['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    vn23 = new RegExp('^' + vpv7g5x['source'] + vkcm0d7['source'] + '*(?::' + vpv7g5x['source'] + vkcm0d7['source'] + '*)?$'),
    vkdm7 = 0x0,
    vo3n24 = 0x1,
    vo3s$i = 0x2,
    vuqe8w = 0x3,
    vwbqx = 0x4,
    vt23no = 0x5,
    vo$3tn4 = 0x6,
    vbu8zle = 0x7;vo24tn3['prototype'] = { 'parse': function (g7x5vp, l6yz8, q8ewg) {
    var o3tn2 = this['domBuilder'];o3tn2['startDocument'](), v$s3o4n(l6yz8, l6yz8 = {}), vhl6uy(g7x5vp, l6yz8, q8ewg, o3tn2, this['errorHandler']), o3tn2['endDocument']();
  } }, vyluz8['prototype'] = { 'setTagName': function (k5v0p) {
    if (!vn23['test'](k5v0p)) throw new Error('invalid tagName:' + k5v0p);this['tagName'] = k5v0p;
  }, 'add': function (dcm70, x5pgv, p70kv5) {
    if (!vn23['test'](dcm70)) throw new Error('invalid attribute:' + dcm70);this[this['length']++] = { 'qName': dcm70, 'value': x5pgv, 'offset': p70kv5 };
  }, 'length': 0x0, 'getLocalName': function (buez8l) {
    return this[buez8l]['localName'];
  }, 'getLocator': function (xgepqw) {
    return this[xgepqw]['locator'];
  }, 'getQName': function (a0cjmd) {
    return this[a0cjmd]['qName'];
  }, 'getURI': function (wqvpg) {
    return this[wqvpg]['uri'];
  }, 'getValue': function (qeubl8) {
    return this[qeubl8]['value'];
  } }, vbue8l({}, vbue8l['prototype']) instanceof vbue8l || (vbue8l = function (io$sf, _16h2) {
  function r9sif() {}r9sif['prototype'] = _16h2, r9sif = new r9sif();for (_16h2 in io$sf) r9sif[_16h2] = io$sf[_16h2];return r9sif;
}), exports['XMLReader'] = vo24tn3;