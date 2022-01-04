var Q = wx.$v;
function vos4n3() {}function vxqpe(_321, eqw8u, beqlu8, wbeq8u, bu68l) {
  function t3$n(h21n) {
    if (h21n > 0xffff) {
      h21n -= 0x10000;var p7vx5k = 0xd800 + (h21n >> 0xa),
          w5pvg = 0xdc00 + (0x3ff & h21n);return String['fromCharCode'](p7vx5k, w5pvg);
    }return String['fromCharCode'](h21n);
  }function xgebq(_t12n3) {
    var zu6hl = _t12n3['slice'](0x1, -0x1);return zu6hl in beqlu8 ? beqlu8[zu6hl] : '#' === zu6hl['charAt'](0x0) ? t3$n(parseInt(zu6hl['substr'](0x1)['replace']('x', '0x'))) : (bu68l['error']('entity not found:' + _t12n3), _t12n3);
  }function r9fi$(f$9rsi) {
    if (f$9rsi > m57kc) {
      var $s34o = _321['substring'](m57kc, f$9rsi)['replace'](/&#?\w+;/g, xgebq);$3oi4 && kc07(m57kc), wbeq8u['characters']($s34o, 0x0, f$9rsi - m57kc), m57kc = f$9rsi;
    }
  }function kc07(t_hn, amdj0) {
    for (; t_hn >= v5c0 && (amdj0 = bzlu['exec'](_321));) ul8eb = amdj0['index'], v5c0 = ul8eb + amdj0[0x0]['length'], $3oi4['lineNumber']++;$3oi4['columnNumber'] = t_hn - ul8eb + 0x1;
  }for (var ul8eb = 0x0, v5c0 = 0x0, bzlu = /.*(?:\r\n?|\n)|.*$/g, $3oi4 = wbeq8u['locator'], if$o9 = [{ 'currentNSMap': eqw8u }], dmk7c = {}, m57kc = 0x0;;) {
    try {
      var ulz = _321['indexOf']('<', m57kc);if (0x0 > ulz) {
        if (!_321['substr'](m57kc)['match'](/^\s*$/)) {
          var $ois34 = wbeq8u['doc'],
              yhuz6 = $ois34['createTextNode'](_321['substr'](m57kc));$ois34['appendChild'](yhuz6), wbeq8u['currentElement'] = yhuz6;
        }return;
      }switch (ulz > m57kc && r9fi$(ulz), _321['charAt'](ulz + 0x1)) {case '/':
          var y_62h1 = _321['indexOf']('>', ulz + 0x3),
              jmd0a = _321['substring'](ulz + 0x2, y_62h1),
              _23nt4 = if$o9['pop']();0x0 > y_62h1 ? (jmd0a = _321['substring'](ulz + 0x2)['replace'](/[\s<].*/, ''), bu68l['error']('end tag name: ' + jmd0a + ' is not complete:' + _23nt4['tagName']), y_62h1 = ulz + 0x1 + jmd0a['length']) : jmd0a['match'](/\s</) && (jmd0a = jmd0a['replace'](/[\s<].*/, ''), bu68l['error']('end tag name: ' + jmd0a + ' maybe not complete'), y_62h1 = ulz + 0x1 + jmd0a['length']);var qpgwex = _23nt4['localNSMap'],
              jmdc0 = _23nt4['tagName'] == jmd0a,
              e8qgbw = jmdc0 || _23nt4['tagName'] && _23nt4['tagName']['toLowerCase']() == jmd0a['toLowerCase']();if (e8qgbw) {
            if (wbeq8u['endElement'](_23nt4['uri'], _23nt4['localName'], jmd0a), qpgwex) {
              for (var nt_432 in qpgwex) wbeq8u['endPrefixMapping'](nt_432);
            }jmdc0 || bu68l['fatalError']('end tag name: ' + jmd0a + ' is not match the current start tagName:' + _23nt4['tagName']);
          } else if$o9['push'](_23nt4);y_62h1++;break;case '?':
          $3oi4 && kc07(ulz), y_62h1 = vcmkjd(_321, ulz, wbeq8u);break;case '!':
          $3oi4 && kc07(ulz), y_62h1 = vqxpwgv(_321, ulz, wbeq8u, bu68l);break;default:
          $3oi4 && kc07(ulz);var vp5x7k = new vlhy6(),
              f$sr9 = if$o9[if$o9['length'] - 0x1]['currentNSMap'],
              y_62h1 = vkmdj0(_321, ulz, vp5x7k, f$sr9, xgebq, bu68l),
              pvgq = vp5x7k['length'];if (!vp5x7k['closed'] && vk5m07(_321, y_62h1, vp5x7k['tagName'], dmk7c) && (vp5x7k['closed'] = !0x0, beqlu8['nbsp'] || bu68l['warning']('unclosed xml attribute')), $3oi4 && pvgq) {
            for (var vpqx = vdjc0($3oi4, {}), h2t1_ = 0x0; pvgq > h2t1_; h2t1_++) {
              var nt24o = vp5x7k[h2t1_];kc07(nt24o['offset']), nt24o['locator'] = vdjc0($3oi4, {});
            }wbeq8u['locator'] = vpqx, vcd7km(vp5x7k, wbeq8u, f$sr9) && if$o9['push'](vp5x7k), wbeq8u['locator'] = $3oi4;
          } else vcd7km(vp5x7k, wbeq8u, f$sr9) && if$o9['push'](vp5x7k);'http://www.w3.org/1999/xhtml' !== vp5x7k['uri'] || vp5x7k['closed'] ? y_62h1++ : y_62h1 = vo23tn4(_321, y_62h1, vp5x7k['tagName'], xgebq, wbeq8u);}
    } catch ($o3t) {
      bu68l['error']('element parse error: ' + $o3t), y_62h1 = -0x1;
    }y_62h1 > m57kc ? m57kc = y_62h1 : r9fi$(Math['max'](ulz, m57kc) + 0x1);
  }
}function vdjc0(uzlb8, f9i$s) {
  return f9i$s['lineNumber'] = uzlb8['lineNumber'], f9i$s['columnNumber'] = uzlb8['columnNumber'], f9i$s;
}function vkmdj0(lubqe, zu8e, $fio4, euwbq8, vpxgw, o34si$) {
  for (var jdcm0, of9is$, s3io = ++zu8e, yth1_ = vt3o2n;;) {
    var p75 = lubqe['charAt'](s3io);switch (p75) {case '=':
        if (yth1_ === vio$s4) jdcm0 = lubqe['slice'](zu8e, s3io), yth1_ = vewqb8g;else {
          if (yth1_ !== vo$fi9s) throw new Error('attribute equal must after attrName');yth1_ = vewqb8g;
        }break;case '\x27':case '\x22':
        if (yth1_ === vewqb8g || yth1_ === vio$s4) {
          if (yth1_ === vio$s4 && (o34si$['warning']('attribute value must after "="'), jdcm0 = lubqe['slice'](zu8e, s3io)), zu8e = s3io + 0x1, s3io = lubqe['indexOf'](p75, zu8e), !(s3io > 0x0)) throw new Error('attribute value no end \'' + p75 + '\' match');of9is$ = lubqe['slice'](zu8e, s3io)['replace'](/&#?\w+;/g, vpxgw), $fio4['add'](jdcm0, of9is$, zu8e - 0x1), yth1_ = v_4t32n;
        } else {
          if (yth1_ != vt3n4o$) throw new Error('attribute value must after "="');of9is$ = lubqe['slice'](zu8e, s3io)['replace'](/&#?\w+;/g, vpxgw), $fio4['add'](jdcm0, of9is$, zu8e), o34si$['warning']('attribute "' + jdcm0 + '" missed start quot(' + p75 + ')!!'), zu8e = s3io + 0x1, yth1_ = v_4t32n;
        }break;case '/':
        switch (yth1_) {case vt3o2n:
            $fio4['setTagName'](lubqe['slice'](zu8e, s3io));case v_4t32n:case vqew:case veqgxwp:
            yth1_ = veqgxwp, $fio4['closed'] = !0x0;case vt3n4o$:case vio$s4:case vo$fi9s:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return o34si$['error']('unexpected end of input'), yth1_ == vt3o2n && $fio4['setTagName'](lubqe['slice'](zu8e, s3io)), s3io;case '>':
        switch (yth1_) {case vt3o2n:
            $fio4['setTagName'](lubqe['slice'](zu8e, s3io));case v_4t32n:case vqew:case veqgxwp:
            break;case vt3n4o$:case vio$s4:
            of9is$ = lubqe['slice'](zu8e, s3io), '/' === of9is$['slice'](-0x1) && ($fio4['closed'] = !0x0, of9is$ = of9is$['slice'](0x0, -0x1));case vo$fi9s:
            yth1_ === vo$fi9s && (of9is$ = jdcm0), yth1_ == vt3n4o$ ? (o34si$['warning']('attribute "' + of9is$ + '" missed quot(")!!'), $fio4['add'](jdcm0, of9is$['replace'](/&#?\w+;/g, vpxgw), zu8e)) : ('http://www.w3.org/1999/xhtml' === euwbq8[''] && of9is$['match'](/^(?:disabled|checked|selected)$/i) || o34si$['warning']('attribute "' + of9is$ + '" missed value!! "' + of9is$ + '" instead!!'), $fio4['add'](of9is$, of9is$, zu8e));break;case vewqb8g:
            throw new Error('attribute value missed!!');}return s3io;case '\u0080':
        p75 = '\x20';default:
        if ('\x20' >= p75) switch (yth1_) {case vt3o2n:
            $fio4['setTagName'](lubqe['slice'](zu8e, s3io)), yth1_ = vqew;break;case vio$s4:
            jdcm0 = lubqe['slice'](zu8e, s3io), yth1_ = vo$fi9s;break;case vt3n4o$:
            var of9is$ = lubqe['slice'](zu8e, s3io)['replace'](/&#?\w+;/g, vpxgw);o34si$['warning']('attribute "' + of9is$ + '" missed quot(")!!'), $fio4['add'](jdcm0, of9is$, zu8e);case v_4t32n:
            yth1_ = vqew;} else switch (yth1_) {case vo$fi9s:
            {
              $fio4['tagName'];
            }'http://www.w3.org/1999/xhtml' === euwbq8[''] && jdcm0['match'](/^(?:disabled|checked|selected)$/i) || o34si$['warning']('attribute "' + jdcm0 + '" missed value!! "' + jdcm0 + '" instead2!!'), $fio4['add'](jdcm0, jdcm0, zu8e), zu8e = s3io, yth1_ = vio$s4;break;case v_4t32n:
            o34si$['warning']('attribute space is required"' + jdcm0 + '\x22!!');case vqew:
            yth1_ = vio$s4, zu8e = s3io;break;case vewqb8g:
            yth1_ = vt3n4o$, zu8e = s3io;break;case veqgxwp:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}s3io++;
  }
}function vcd7km(gwqbex, v0kp75, gqxwp) {
  for (var geb8q = gwqbex['tagName'], bel8u = null, s4$3o = gwqbex['length']; s4$3o--;) {
    var u6lh = gwqbex[s4$3o],
        ont$43 = u6lh['qName'],
        t31n_ = u6lh['value'],
        damcj = ont$43['indexOf'](':');if (damcj > 0x0) var xwvqpg = u6lh['prefix'] = ont$43['slice'](0x0, damcj),
        lbeuq8 = ont$43['slice'](damcj + 0x1),
        ue8zb = 'xmlns' === xwvqpg && lbeuq8;else lbeuq8 = ont$43, xwvqpg = null, ue8zb = 'xmlns' === ont$43 && '';u6lh['localName'] = lbeuq8, ue8zb !== !0x1 && (null == bel8u && (bel8u = {}, vylzh16(gqxwp, gqxwp = {})), gqxwp[ue8zb] = bel8u[ue8zb] = t31n_, u6lh['uri'] = 'http://www.w3.org/2000/xmlns/', v0kp75['startPrefixMapping'](ue8zb, t31n_));
  }for (var s4$3o = gwqbex['length']; s4$3o--;) {
    u6lh = gwqbex[s4$3o];var xwvqpg = u6lh['prefix'];xwvqpg && ('xml' === xwvqpg && (u6lh['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== xwvqpg && (u6lh['uri'] = gqxwp[xwvqpg || '']));
  }var damcj = geb8q['indexOf'](':');damcj > 0x0 ? (xwvqpg = gwqbex['prefix'] = geb8q['slice'](0x0, damcj), lbeuq8 = gwqbex['localName'] = geb8q['slice'](damcj + 0x1)) : (xwvqpg = null, lbeuq8 = gwqbex['localName'] = geb8q);var ub8z = gwqbex['uri'] = gqxwp[xwvqpg || ''];if (v0kp75['startElement'](ub8z, lbeuq8, geb8q, gwqbex), !gwqbex['closed']) return gwqbex['currentNSMap'] = gqxwp, gwqbex['localNSMap'] = bel8u, !0x0;if (v0kp75['endElement'](ub8z, lbeuq8, geb8q), bel8u) {
    for (xwvqpg in bel8u) v0kp75['endPrefixMapping'](xwvqpg);
  }
}function vo23tn4(o3n4$s, uelzb8, wvgqx, y2_th1, son43$) {
  if (/^(?:script|textarea)$/i['test'](wvgqx)) {
    var _zy61h = o3n4$s['indexOf']('</' + wvgqx + '>', uelzb8),
        _6y1h = o3n4$s['substring'](uelzb8 + 0x1, _zy61h);if (/[&<]/['test'](_6y1h)) return (/^script$/i['test'](wvgqx) ? (son43$['characters'](_6y1h, 0x0, _6y1h['length']), _zy61h) : (_6y1h = _6y1h['replace'](/&#?\w+;/g, y2_th1), son43$['characters'](_6y1h, 0x0, _6y1h['length']), _zy61h)
    );
  }return uelzb8 + 0x1;
}function vk5m07(xpwqg, $i3so4, lu8y, v5x7pg) {
  var z68bu = v5x7pg[lu8y];return null == z68bu && (z68bu = xpwqg['lastIndexOf']('</' + lu8y + '>'), $i3so4 > z68bu && (z68bu = xpwqg['lastIndexOf']('</' + lu8y)), v5x7pg[lu8y] = z68bu), $i3so4 > z68bu;
}function vylzh16(s4$foi, y2) {
  for (var b8lzue in s4$foi) y2[b8lzue] = s4$foi[b8lzue];
}function vqxpwgv(lhz61, rfi$s, r$9fsi, z68lbu) {
  var n32o4t = lhz61['charAt'](rfi$s + 0x2);switch (n32o4t) {case '-':
      if ('-' === lhz61['charAt'](rfi$s + 0x3)) {
        var cmkd7 = lhz61['indexOf']('-->', rfi$s + 0x4);return cmkd7 > rfi$s ? (r$9fsi['comment'](lhz61, rfi$s + 0x4, cmkd7 - rfi$s - 0x4), cmkd7 + 0x3) : (z68lbu['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == lhz61['substr'](rfi$s + 0x3, 0x6)) {
        var cmkd7 = lhz61['indexOf'](']]>', rfi$s + 0x9);return r$9fsi['startCDATA'](), r$9fsi['characters'](lhz61, rfi$s + 0x9, cmkd7 - rfi$s - 0x9), r$9fsi['endCDATA'](), cmkd7 + 0x3;
      }var z8lub6 = vvqpx(lhz61, rfi$s),
          t12_h = z8lub6['length'];if (t12_h > 0x1 && /!doctype/i['test'](z8lub6[0x0][0x0])) {
        var cmdkj = z8lub6[0x1][0x0],
            n4o3t2 = t12_h > 0x3 && /^public$/i['test'](z8lub6[0x2][0x0]) && z8lub6[0x3][0x0],
            elb8q = t12_h > 0x4 && z8lub6[0x4][0x0],
            bleuq = z8lub6[t12_h - 0x1];return r$9fsi['startDTD'](cmdkj, n4o3t2 && n4o3t2['replace'](/^(['"])(.*?)\1$/, '$2'), elb8q && elb8q['replace'](/^(['"])(.*?)\1$/, '$2')), r$9fsi['endDTD'](), bleuq['index'] + bleuq[0x0]['length'];
      }}return -0x1;
}function vcmkjd($i43s, xwqp, nt2_h1) {
  var eu8bq = $i43s['indexOf']('?>', xwqp);if (eu8bq) {
    var gqe = $i43s['substring'](xwqp, eu8bq)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (gqe) {
      {
        gqe[0x0]['length'];
      }return nt2_h1['processingInstruction'](gqe[0x1], gqe[0x2]), eu8bq + 0x2;
    }return -0x1;
  }return -0x1;
}function vlhy6() {}function vty2h(be8qlu, y1h_z) {
  return be8qlu['__proto__'] = y1h_z, be8qlu;
}function vvqpx(sif$o4, $rs9if) {
  var blz68u,
      n312 = [],
      pwvg5x = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (pwvg5x['lastIndex'] = $rs9if, pwvg5x['exec'](sif$o4); blz68u = pwvg5x['exec'](sif$o4);) if (n312['push'](blz68u), blz68u[0x1]) return n312;
}var vt1h_2n = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    vif$4so = new RegExp('[\\-\\.0-9' + vt1h_2n['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    v_t32n = new RegExp('^' + vt1h_2n['source'] + vif$4so['source'] + '*(?::' + vt1h_2n['source'] + vif$4so['source'] + '*)?$'),
    vt3o2n = 0x0,
    vio$s4 = 0x1,
    vo$fi9s = 0x2,
    vewqb8g = 0x3,
    vt3n4o$ = 0x4,
    v_4t32n = 0x5,
    vqew = 0x6,
    veqgxwp = 0x7;vos4n3['prototype'] = { 'parse': function (wgpx, m7dc0k, yuhz6) {
    var si$f4 = this['domBuilder'];si$f4['startDocument'](), vylzh16(m7dc0k, m7dc0k = {}), vxqpe(wgpx, m7dc0k, yuhz6, si$f4, this['errorHandler']), si$f4['endDocument']();
  } }, vlhy6['prototype'] = { 'setTagName': function (h_2yt1) {
    if (!v_t32n['test'](h_2yt1)) throw new Error('invalid tagName:' + h_2yt1);this['tagName'] = h_2yt1;
  }, 'add': function (q8buel, h1zy6l, kj0dmc) {
    if (!v_t32n['test'](q8buel)) throw new Error('invalid attribute:' + q8buel);this[this['length']++] = { 'qName': q8buel, 'value': h1zy6l, 'offset': kj0dmc };
  }, 'length': 0x0, 'getLocalName': function (fio$4) {
    return this[fio$4]['localName'];
  }, 'getLocator': function (gvxp75) {
    return this[gvxp75]['locator'];
  }, 'getQName': function (nt$4o) {
    return this[nt$4o]['qName'];
  }, 'getURI': function (c570) {
    return this[c570]['uri'];
  }, 'getValue': function (hzl6uy) {
    return this[hzl6uy]['value'];
  } }, vty2h({}, vty2h['prototype']) instanceof vty2h || (vty2h = function (t1nh_2, vc0k75) {
  function maj0() {}maj0['prototype'] = vc0k75, maj0 = new maj0();for (vc0k75 in t1nh_2) maj0[vc0k75] = t1nh_2[vc0k75];return maj0;
}), exports['XMLReader'] = vos4n3;