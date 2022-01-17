var Q = wx.$v;
function vkvp7x5() {}function vwegxqp(c7k5m, lub8z6, dmac, x5gv7, $i3o4) {
  function t_n42(si$9r) {
    if (si$9r > 0xffff) {
      si$9r -= 0x10000;var osn3$4 = 0xd800 + (si$9r >> 0xa),
          dcmk = 0xdc00 + (0x3ff & si$9r);return String['fromCharCode'](osn3$4, dcmk);
    }return String['fromCharCode'](si$9r);
  }function bg8w(wqxgv) {
    var vw5pxg = wqxgv['slice'](0x1, -0x1);return vw5pxg in dmac ? dmac[vw5pxg] : '#' === vw5pxg['charAt'](0x0) ? t_n42(parseInt(vw5pxg['substr'](0x1)['replace']('x', '0x'))) : ($i3o4['error']('entity not found:' + wqxgv), wqxgv);
  }function ebl8(_t34) {
    if (_t34 > ue8qw) {
      var djmac0 = c7k5m['substring'](ue8qw, _t34)['replace'](/&#?\w+;/g, bg8w);l61z && y6uzl8(ue8qw), x5gv7['characters'](djmac0, 0x0, _t34 - ue8qw), ue8qw = _t34;
    }
  }function y6uzl8(sfio9, kp5v7x) {
    for (; sfio9 >= pweqx && (kp5v7x = mkj0d['exec'](c7k5m));) u86lzy = kp5v7x['index'], pweqx = u86lzy + kp5v7x[0x0]['length'], l61z['lineNumber']++;l61z['columnNumber'] = sfio9 - u86lzy + 0x1;
  }for (var u86lzy = 0x0, pweqx = 0x0, mkj0d = /.*(?:\r\n?|\n)|.*$/g, l61z = x5gv7['locator'], _thn = [{ 'currentNSMap': lub8z6 }], lqb8e = {}, ue8qw = 0x0;;) {
    try {
      var o4s = c7k5m['indexOf']('<', ue8qw);if (0x0 > o4s) {
        if (!c7k5m['substr'](ue8qw)['match'](/^\s*$/)) {
          var $no3 = x5gv7['doc'],
              n_t1h = $no3['createTextNode'](c7k5m['substr'](ue8qw));$no3['appendChild'](n_t1h), x5gv7['currentElement'] = n_t1h;
        }return;
      }switch (o4s > ue8qw && ebl8(o4s), c7k5m['charAt'](o4s + 0x1)) {case '/':
          var lzbu86 = c7k5m['indexOf']('>', o4s + 0x3),
              p0v57 = c7k5m['substring'](o4s + 0x2, lzbu86),
              gpv5x7 = _thn['pop']();0x0 > lzbu86 ? (p0v57 = c7k5m['substring'](o4s + 0x2)['replace'](/[\s<].*/, ''), $i3o4['error']('end tag name: ' + p0v57 + ' is not complete:' + gpv5x7['tagName']), lzbu86 = o4s + 0x1 + p0v57['length']) : p0v57['match'](/\s</) && (p0v57 = p0v57['replace'](/[\s<].*/, ''), $i3o4['error']('end tag name: ' + p0v57 + ' maybe not complete'), lzbu86 = o4s + 0x1 + p0v57['length']);var so$9f = gpv5x7['localNSMap'],
              xpvgw5 = gpv5x7['tagName'] == p0v57,
              h_2n1t = xpvgw5 || gpv5x7['tagName'] && gpv5x7['tagName']['toLowerCase']() == p0v57['toLowerCase']();if (h_2n1t) {
            if (x5gv7['endElement'](gpv5x7['uri'], gpv5x7['localName'], p0v57), so$9f) {
              for (var pgwqvx in so$9f) x5gv7['endPrefixMapping'](pgwqvx);
            }xpvgw5 || $i3o4['fatalError']('end tag name: ' + p0v57 + ' is not match the current start tagName:' + gpv5x7['tagName']);
          } else _thn['push'](gpv5x7);lzbu86++;break;case '?':
          l61z && y6uzl8(o4s), lzbu86 = vi4f$so(c7k5m, o4s, x5gv7);break;case '!':
          l61z && y6uzl8(o4s), lzbu86 = vz_1h6y(c7k5m, o4s, x5gv7, $i3o4);break;default:
          l61z && y6uzl8(o4s);var k7m5 = new vk0mc7d(),
              gwvpqx = _thn[_thn['length'] - 0x1]['currentNSMap'],
              lzbu86 = vdc0k(c7k5m, o4s, k7m5, gwvpqx, bg8w, $i3o4),
              sn3 = k7m5['length'];if (!k7m5['closed'] && vht_12n(c7k5m, lzbu86, k7m5['tagName'], lqb8e) && (k7m5['closed'] = !0x0, dmac['nbsp'] || $i3o4['warning']('unclosed xml attribute')), l61z && sn3) {
            for (var w5gpx = v$ifrs9(l61z, {}), _21nh = 0x0; sn3 > _21nh; _21nh++) {
              var n32t_4 = k7m5[_21nh];y6uzl8(n32t_4['offset']), n32t_4['locator'] = v$ifrs9(l61z, {});
            }x5gv7['locator'] = w5gpx, vf$io4s(k7m5, x5gv7, gwvpqx) && _thn['push'](k7m5), x5gv7['locator'] = l61z;
          } else vf$io4s(k7m5, x5gv7, gwvpqx) && _thn['push'](k7m5);'http://www.w3.org/1999/xhtml' !== k7m5['uri'] || k7m5['closed'] ? lzbu86++ : lzbu86 = vlz8b6(c7k5m, lzbu86, k7m5['tagName'], bg8w, x5gv7);}
    } catch (xg5) {
      $i3o4['error']('element parse error: ' + xg5), lzbu86 = -0x1;
    }lzbu86 > ue8qw ? ue8qw = lzbu86 : ebl8(Math['max'](o4s, ue8qw) + 0x1);
  }
}function v$ifrs9(euql8b, t4_23n) {
  return t4_23n['lineNumber'] = euql8b['lineNumber'], t4_23n['columnNumber'] = euql8b['columnNumber'], t4_23n;
}function vdc0k(y1t2_, jc0mad, is$4f, n2to, pxg57v, ofi9s$) {
  for (var o432, wbqu8e, _2nh1 = ++jc0mad, bzl8u6 = v_y2t;;) {
    var qxwgb = y1t2_['charAt'](_2nh1);switch (qxwgb) {case '=':
        if (bzl8u6 === vu6yz) o432 = y1t2_['slice'](jc0mad, _2nh1), bzl8u6 = vpvwqg;else {
          if (bzl8u6 !== vhly1) throw new Error('attribute equal must after attrName');bzl8u6 = vpvwqg;
        }break;case '\x27':case '\x22':
        if (bzl8u6 === vpvwqg || bzl8u6 === vu6yz) {
          if (bzl8u6 === vu6yz && (ofi9s$['warning']('attribute value must after "="'), o432 = y1t2_['slice'](jc0mad, _2nh1)), jc0mad = _2nh1 + 0x1, _2nh1 = y1t2_['indexOf'](qxwgb, jc0mad), !(_2nh1 > 0x0)) throw new Error('attribute value no end \'' + qxwgb + '\' match');wbqu8e = y1t2_['slice'](jc0mad, _2nh1)['replace'](/&#?\w+;/g, pxg57v), is$4f['add'](o432, wbqu8e, jc0mad - 0x1), bzl8u6 = v$34tn;
        } else {
          if (bzl8u6 != vqbe8wu) throw new Error('attribute value must after "="');wbqu8e = y1t2_['slice'](jc0mad, _2nh1)['replace'](/&#?\w+;/g, pxg57v), is$4f['add'](o432, wbqu8e, jc0mad), ofi9s$['warning']('attribute "' + o432 + '" missed start quot(' + qxwgb + ')!!'), jc0mad = _2nh1 + 0x1, bzl8u6 = v$34tn;
        }break;case '/':
        switch (bzl8u6) {case v_y2t:
            is$4f['setTagName'](y1t2_['slice'](jc0mad, _2nh1));case v$34tn:case vv5k7:case vdkjc0m:
            bzl8u6 = vdkjc0m, is$4f['closed'] = !0x0;case vqbe8wu:case vu6yz:case vhly1:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ofi9s$['error']('unexpected end of input'), bzl8u6 == v_y2t && is$4f['setTagName'](y1t2_['slice'](jc0mad, _2nh1)), _2nh1;case '>':
        switch (bzl8u6) {case v_y2t:
            is$4f['setTagName'](y1t2_['slice'](jc0mad, _2nh1));case v$34tn:case vv5k7:case vdkjc0m:
            break;case vqbe8wu:case vu6yz:
            wbqu8e = y1t2_['slice'](jc0mad, _2nh1), '/' === wbqu8e['slice'](-0x1) && (is$4f['closed'] = !0x0, wbqu8e = wbqu8e['slice'](0x0, -0x1));case vhly1:
            bzl8u6 === vhly1 && (wbqu8e = o432), bzl8u6 == vqbe8wu ? (ofi9s$['warning']('attribute "' + wbqu8e + '" missed quot(")!!'), is$4f['add'](o432, wbqu8e['replace'](/&#?\w+;/g, pxg57v), jc0mad)) : ('http://www.w3.org/1999/xhtml' === n2to[''] && wbqu8e['match'](/^(?:disabled|checked|selected)$/i) || ofi9s$['warning']('attribute "' + wbqu8e + '" missed value!! "' + wbqu8e + '" instead!!'), is$4f['add'](wbqu8e, wbqu8e, jc0mad));break;case vpvwqg:
            throw new Error('attribute value missed!!');}return _2nh1;case '\u0080':
        qxwgb = '\x20';default:
        if ('\x20' >= qxwgb) switch (bzl8u6) {case v_y2t:
            is$4f['setTagName'](y1t2_['slice'](jc0mad, _2nh1)), bzl8u6 = vv5k7;break;case vu6yz:
            o432 = y1t2_['slice'](jc0mad, _2nh1), bzl8u6 = vhly1;break;case vqbe8wu:
            var wbqu8e = y1t2_['slice'](jc0mad, _2nh1)['replace'](/&#?\w+;/g, pxg57v);ofi9s$['warning']('attribute "' + wbqu8e + '" missed quot(")!!'), is$4f['add'](o432, wbqu8e, jc0mad);case v$34tn:
            bzl8u6 = vv5k7;} else switch (bzl8u6) {case vhly1:
            {
              is$4f['tagName'];
            }'http://www.w3.org/1999/xhtml' === n2to[''] && o432['match'](/^(?:disabled|checked|selected)$/i) || ofi9s$['warning']('attribute "' + o432 + '" missed value!! "' + o432 + '" instead2!!'), is$4f['add'](o432, o432, jc0mad), jc0mad = _2nh1, bzl8u6 = vu6yz;break;case v$34tn:
            ofi9s$['warning']('attribute space is required"' + o432 + '\x22!!');case vv5k7:
            bzl8u6 = vu6yz, jc0mad = _2nh1;break;case vpvwqg:
            bzl8u6 = vqbe8wu, jc0mad = _2nh1;break;case vdkjc0m:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}_2nh1++;
  }
}function vf$io4s(zhy_16, pexgqw, _y2ht) {
  for (var ewb8qu = zhy_16['tagName'], io9s$f = null, qwgb8e = zhy_16['length']; qwgb8e--;) {
    var k0v7p5 = zhy_16[qwgb8e],
        r9sf = k0v7p5['qName'],
        vkp570 = k0v7p5['value'],
        qube = r9sf['indexOf'](':');if (qube > 0x0) var zy86ul = k0v7p5['prefix'] = r9sf['slice'](0x0, qube),
        qubel8 = r9sf['slice'](qube + 0x1),
        nt342o = 'xmlns' === zy86ul && qubel8;else qubel8 = r9sf, zy86ul = null, nt342o = 'xmlns' === r9sf && '';k0v7p5['localName'] = qubel8, nt342o !== !0x1 && (null == io9s$f && (io9s$f = {}, vc7d(_y2ht, _y2ht = {})), _y2ht[nt342o] = io9s$f[nt342o] = vkp570, k0v7p5['uri'] = 'http://www.w3.org/2000/xmlns/', pexgqw['startPrefixMapping'](nt342o, vkp570));
  }for (var qwgb8e = zhy_16['length']; qwgb8e--;) {
    k0v7p5 = zhy_16[qwgb8e];var zy86ul = k0v7p5['prefix'];zy86ul && ('xml' === zy86ul && (k0v7p5['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== zy86ul && (k0v7p5['uri'] = _y2ht[zy86ul || '']));
  }var qube = ewb8qu['indexOf'](':');qube > 0x0 ? (zy86ul = zhy_16['prefix'] = ewb8qu['slice'](0x0, qube), qubel8 = zhy_16['localName'] = ewb8qu['slice'](qube + 0x1)) : (zy86ul = null, qubel8 = zhy_16['localName'] = ewb8qu);var c0djma = zhy_16['uri'] = _y2ht[zy86ul || ''];if (pexgqw['startElement'](c0djma, qubel8, ewb8qu, zhy_16), !zhy_16['closed']) return zhy_16['currentNSMap'] = _y2ht, zhy_16['localNSMap'] = io9s$f, !0x0;if (pexgqw['endElement'](c0djma, qubel8, ewb8qu), io9s$f) {
    for (zy86ul in io9s$f) pexgqw['endPrefixMapping'](zy86ul);
  }
}function vlz8b6(lu8ebq, vx7pk5, $fs4o, n24t3_, lyzu6h) {
  if (/^(?:script|textarea)$/i['test']($fs4o)) {
    var yz6h = lu8ebq['indexOf']('</' + $fs4o + '>', vx7pk5),
        no$3t = lu8ebq['substring'](vx7pk5 + 0x1, yz6h);if (/[&<]/['test'](no$3t)) return (/^script$/i['test']($fs4o) ? (lyzu6h['characters'](no$3t, 0x0, no$3t['length']), yz6h) : (no$3t = no$3t['replace'](/&#?\w+;/g, n24t3_), lyzu6h['characters'](no$3t, 0x0, no$3t['length']), yz6h)
    );
  }return vx7pk5 + 0x1;
}function vht_12n(fs9io$, of$i9s, x75g, c507mk) {
  var rf9$is = c507mk[x75g];return null == rf9$is && (rf9$is = fs9io$['lastIndexOf']('</' + x75g + '>'), of$i9s > rf9$is && (rf9$is = fs9io$['lastIndexOf']('</' + x75g)), c507mk[x75g] = rf9$is), of$i9s > rf9$is;
}function vc7d(j0kd, pqwgxv) {
  for (var xpgv57 in j0kd) pqwgxv[xpgv57] = j0kd[xpgv57];
}function vz_1h6y(h6y_2, n31_2t, bql8ue, km0cj) {
  var $os3n = h6y_2['charAt'](n31_2t + 0x2);switch ($os3n) {case '-':
      if ('-' === h6y_2['charAt'](n31_2t + 0x3)) {
        var i3s$o4 = h6y_2['indexOf']('-->', n31_2t + 0x4);return i3s$o4 > n31_2t ? (bql8ue['comment'](h6y_2, n31_2t + 0x4, i3s$o4 - n31_2t - 0x4), i3s$o4 + 0x3) : (km0cj['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == h6y_2['substr'](n31_2t + 0x3, 0x6)) {
        var i3s$o4 = h6y_2['indexOf'](']]>', n31_2t + 0x9);return bql8ue['startCDATA'](), bql8ue['characters'](h6y_2, n31_2t + 0x9, i3s$o4 - n31_2t - 0x9), bql8ue['endCDATA'](), i3s$o4 + 0x3;
      }var to3$n = vk7dm0c(h6y_2, n31_2t),
          hyz = to3$n['length'];if (hyz > 0x1 && /!doctype/i['test'](to3$n[0x0][0x0])) {
        var qwgexb = to3$n[0x1][0x0],
            ck0m57 = hyz > 0x3 && /^public$/i['test'](to3$n[0x2][0x0]) && to3$n[0x3][0x0],
            ios9$f = hyz > 0x4 && to3$n[0x4][0x0],
            cm0a = to3$n[hyz - 0x1];return bql8ue['startDTD'](qwgexb, ck0m57 && ck0m57['replace'](/^(['"])(.*?)\1$/, '$2'), ios9$f && ios9$f['replace'](/^(['"])(.*?)\1$/, '$2')), bql8ue['endDTD'](), cm0a['index'] + cm0a[0x0]['length'];
      }}return -0x1;
}function vi4f$so(is$9fr, n3$o, b6u8z) {
  var gwqxeb = is$9fr['indexOf']('?>', n3$o);if (gwqxeb) {
    var o342 = is$9fr['substring'](n3$o, gwqxeb)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (o342) {
      {
        o342[0x0]['length'];
      }return b6u8z['processingInstruction'](o342[0x1], o342[0x2]), gwqxeb + 0x2;
    }return -0x1;
  }return -0x1;
}function vk0mc7d() {}function v_2tn4(zh6_y, o43$n) {
  return zh6_y['__proto__'] = o43$n, zh6_y;
}function vk7dm0c(osif4$, px75k) {
  var cdjk0,
      $is9o = [],
      kmc075 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (kmc075['lastIndex'] = px75k, kmc075['exec'](osif4$); cdjk0 = kmc075['exec'](osif4$);) if ($is9o['push'](cdjk0), cdjk0[0x1]) return $is9o;
}var va0dmj = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    vluz8b = new RegExp('[\\-\\.0-9' + va0dmj['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    v_h261 = new RegExp('^' + va0dmj['source'] + vluz8b['source'] + '*(?::' + va0dmj['source'] + vluz8b['source'] + '*)?$'),
    v_y2t = 0x0,
    vu6yz = 0x1,
    vhly1 = 0x2,
    vpvwqg = 0x3,
    vqbe8wu = 0x4,
    v$34tn = 0x5,
    vv5k7 = 0x6,
    vdkjc0m = 0x7;vkvp7x5['prototype'] = { 'parse': function (xk57vp, th_1n, $i9fo) {
    var xg5v = this['domBuilder'];xg5v['startDocument'](), vc7d(th_1n, th_1n = {}), vwegxqp(xk57vp, th_1n, $i9fo, xg5v, this['errorHandler']), xg5v['endDocument']();
  } }, vk0mc7d['prototype'] = { 'setTagName': function (y_h16z) {
    if (!v_h261['test'](y_h16z)) throw new Error('invalid tagName:' + y_h16z);this['tagName'] = y_h16z;
  }, 'add': function (mdk0jc, f$oi9s, t$3n) {
    if (!v_h261['test'](mdk0jc)) throw new Error('invalid attribute:' + mdk0jc);this[this['length']++] = { 'qName': mdk0jc, 'value': f$oi9s, 'offset': t$3n };
  }, 'length': 0x0, 'getLocalName': function (fi$s9o) {
    return this[fi$s9o]['localName'];
  }, 'getLocator': function (nt$3) {
    return this[nt$3]['locator'];
  }, 'getQName': function (bxegqw) {
    return this[bxegqw]['qName'];
  }, 'getURI': function (t24_3n) {
    return this[t24_3n]['uri'];
  }, 'getValue': function (exwqbg) {
    return this[exwqbg]['value'];
  } }, v_2tn4({}, v_2tn4['prototype']) instanceof v_2tn4 || (v_2tn4 = function (jd0, qxweb) {
  function m05kc() {}m05kc['prototype'] = qxweb, m05kc = new m05kc();for (qxweb in jd0) m05kc[qxweb] = jd0[qxweb];return m05kc;
}), exports['XMLReader'] = vkvp7x5;