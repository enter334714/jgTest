var O = wx.$C;
function h_plu$c() {}function h_jw9dzh(nsv_y, sngf, h0w7xq, $cp8l, j9wdz) {
  function h0wjx($5cp) {
    if ($5cp > 0xffff) {
      $5cp -= 0x10000;var yb6ia = 0xd800 + ($5cp >> 0xa),
          olkm5t = 0xdc00 + (0x3ff & $5cp);return String['fromCharCode'](yb6ia, olkm5t);
    }return String['fromCharCode']($5cp);
  }function ur$98(xdwhj0) {
    var pulo5c = xdwhj0['slice'](0x1, -0x1);return pulo5c in h0w7xq ? h0w7xq[pulo5c] : '#' === pulo5c['charAt'](0x0) ? h0wjx(parseInt(pulo5c['substr'](0x1)['replace']('x', '0x'))) : (j9wdz['error']('entity not found:' + xdwhj0), xdwhj0);
  }function r98dz($8cplu) {
    if ($8cplu > wz9dj) {
      var _sgfv = nsv_y['substring'](wz9dj, $8cplu)['replace'](/&#?\w+;/g, ur$98);yvnsa_ && _vsfg(wz9dj), $cp8l['characters'](_sgfv, 0x0, $8cplu - wz9dj), wz9dj = $8cplu;
    }
  }function _vsfg(dh9zrj, g_v3f) {
    for (; dh9zrj >= c8u$lp && (g_v3f = x7301q['exec'](nsv_y));) rdj9zh = g_v3f['index'], c8u$lp = rdj9zh + g_v3f[0x0]['length'], yvnsa_['lineNumber']++;yvnsa_['columnNumber'] = dh9zrj - rdj9zh + 0x1;
  }for (var rdj9zh = 0x0, c8u$lp = 0x0, x7301q = /.*(?:\r\n?|\n)|.*$/g, yvnsa_ = $cp8l['locator'], $r8cu = [{ 'currentNSMap': sngf }], _4fg3v = {}, wz9dj = 0x0;;) {
    try {
      var dj9hrz = nsv_y['indexOf']('<', wz9dj);if (0x0 > dj9hrz) {
        if (!nsv_y['substr'](wz9dj)['match'](/^\s*$/)) {
          var b2i6 = $cp8l['doc'],
              by2i = b2i6['createTextNode'](nsv_y['substr'](wz9dj));b2i6['appendChild'](by2i), $cp8l['currentElement'] = by2i;
        }return;
      }switch (dj9hrz > wz9dj && r98dz(dj9hrz), nsv_y['charAt'](dj9hrz + 0x1)) {case '/':
          var y2san6 = nsv_y['indexOf']('>', dj9hrz + 0x3),
              n_6sy = nsv_y['substring'](dj9hrz + 0x2, y2san6),
              u8zpr = $r8cu['pop']();0x0 > y2san6 ? (n_6sy = nsv_y['substring'](dj9hrz + 0x2)['replace'](/[\s<].*/, ''), j9wdz['error']('end tag name: ' + n_6sy + ' is not complete:' + u8zpr['tagName']), y2san6 = dj9hrz + 0x1 + n_6sy['length']) : n_6sy['match'](/\s</) && (n_6sy = n_6sy['replace'](/[\s<].*/, ''), j9wdz['error']('end tag name: ' + n_6sy + ' maybe not complete'), y2san6 = dj9hrz + 0x1 + n_6sy['length']);var syavn_ = u8zpr['localNSMap'],
              ysv_a = u8zpr['tagName'] == n_6sy,
              fg4 = ysv_a || u8zpr['tagName'] && u8zpr['tagName']['toLowerCase']() == n_6sy['toLowerCase']();if (fg4) {
            if ($cp8l['endElement'](u8zpr['uri'], u8zpr['localName'], n_6sy), syavn_) {
              for (var q370x in syavn_) $cp8l['endPrefixMapping'](q370x);
            }ysv_a || j9wdz['fatalError']('end tag name: ' + n_6sy + ' is not match the current start tagName:' + u8zpr['tagName']);
          } else $r8cu['push'](u8zpr);y2san6++;break;case '?':
          yvnsa_ && _vsfg(dj9hrz), y2san6 = h_q0wdx(nsv_y, dj9hrz, $cp8l);break;case '!':
          yvnsa_ && _vsfg(dj9hrz), y2san6 = h_f_vnsg(nsv_y, dj9hrz, $cp8l, j9wdz);break;default:
          yvnsa_ && _vsfg(dj9hrz);var puz$ = new h_ul5c$(),
              $cp8u = $r8cu[$r8cu['length'] - 0x1]['currentNSMap'],
              y2san6 = h_dw9hjz(nsv_y, dj9hrz, puz$, $cp8u, ur$98, j9wdz),
              yn_gs = puz$['length'];if (!puz$['closed'] && h_vsgnf(nsv_y, y2san6, puz$['tagName'], _4fg3v) && (puz$['closed'] = !0x0, h0w7xq['nbsp'] || j9wdz['warning']('unclosed xml attribute')), yvnsa_ && yn_gs) {
            for (var c$pul8 = h_wh9j0(yvnsa_, {}), l$5pc = 0x0; yn_gs > l$5pc; l$5pc++) {
              var c$ur8 = puz$[l$5pc];_vsfg(c$ur8['offset']), c$ur8['locator'] = h_wh9j0(yvnsa_, {});
            }$cp8l['locator'] = c$pul8, h_d9rhzj(puz$, $cp8l, $cp8u) && $r8cu['push'](puz$), $cp8l['locator'] = yvnsa_;
          } else h_d9rhzj(puz$, $cp8l, $cp8u) && $r8cu['push'](puz$);'http://www.w3.org/1999/xhtml' !== puz$['uri'] || puz$['closed'] ? y2san6++ : y2san6 = h_$jrz89(nsv_y, y2san6, puz$['tagName'], ur$98, $cp8l);}
    } catch (tlmo5) {
      j9wdz['error']('element parse error: ' + tlmo5), y2san6 = -0x1;
    }y2san6 > wz9dj ? wz9dj = y2san6 : r98dz(Math['max'](dj9hrz, wz9dj) + 0x1);
  }
}function h_wh9j0(iayb62, n26sya) {
  return n26sya['lineNumber'] = iayb62['lineNumber'], n26sya['columnNumber'] = iayb62['columnNumber'], n26sya;
}function h_dw9hjz(q70x1, xwqh70, yasv_, vngsf_, rpz8u$, _aynvs) {
  for (var b2iay6, yn_sg, $j9z8r = ++xwqh70, cu8p$r = h_l5tkm;;) {
    var zu$r98 = q70x1['charAt']($j9z8r);switch (zu$r98) {case '=':
        if (cu8p$r === h_iayb26) b2iay6 = q70x1['slice'](xwqh70, $j9z8r), cu8p$r = h_$lpc;else {
          if (cu8p$r !== h_a2y6sn) throw new Error('attribute equal must after attrName');cu8p$r = h_$lpc;
        }break;case '\x27':case '\x22':
        if (cu8p$r === h_$lpc || cu8p$r === h_iayb26) {
          if (cu8p$r === h_iayb26 && (_aynvs['warning']('attribute value must after "="'), b2iay6 = q70x1['slice'](xwqh70, $j9z8r)), xwqh70 = $j9z8r + 0x1, $j9z8r = q70x1['indexOf'](zu$r98, xwqh70), !($j9z8r > 0x0)) throw new Error('attribute value no end \'' + zu$r98 + '\' match');yn_sg = q70x1['slice'](xwqh70, $j9z8r)['replace'](/&#?\w+;/g, rpz8u$), yasv_['add'](b2iay6, yn_sg, xwqh70 - 0x1), cu8p$r = h_nv_4;
        } else {
          if (cu8p$r != h_xq10w) throw new Error('attribute value must after "="');yn_sg = q70x1['slice'](xwqh70, $j9z8r)['replace'](/&#?\w+;/g, rpz8u$), yasv_['add'](b2iay6, yn_sg, xwqh70), _aynvs['warning']('attribute "' + b2iay6 + '" missed start quot(' + zu$r98 + ')!!'), xwqh70 = $j9z8r + 0x1, cu8p$r = h_nv_4;
        }break;case '/':
        switch (cu8p$r) {case h_l5tkm:
            yasv_['setTagName'](q70x1['slice'](xwqh70, $j9z8r));case h_nv_4:case h_c5tp:case h_a6_ys:
            cu8p$r = h_a6_ys, yasv_['closed'] = !0x0;case h_xq10w:case h_iayb26:case h_a2y6sn:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _aynvs['error']('unexpected end of input'), cu8p$r == h_l5tkm && yasv_['setTagName'](q70x1['slice'](xwqh70, $j9z8r)), $j9z8r;case '>':
        switch (cu8p$r) {case h_l5tkm:
            yasv_['setTagName'](q70x1['slice'](xwqh70, $j9z8r));case h_nv_4:case h_c5tp:case h_a6_ys:
            break;case h_xq10w:case h_iayb26:
            yn_sg = q70x1['slice'](xwqh70, $j9z8r), '/' === yn_sg['slice'](-0x1) && (yasv_['closed'] = !0x0, yn_sg = yn_sg['slice'](0x0, -0x1));case h_a2y6sn:
            cu8p$r === h_a2y6sn && (yn_sg = b2iay6), cu8p$r == h_xq10w ? (_aynvs['warning']('attribute "' + yn_sg + '" missed quot(")!!'), yasv_['add'](b2iay6, yn_sg['replace'](/&#?\w+;/g, rpz8u$), xwqh70)) : ('http://www.w3.org/1999/xhtml' === vngsf_[''] && yn_sg['match'](/^(?:disabled|checked|selected)$/i) || _aynvs['warning']('attribute "' + yn_sg + '" missed value!! "' + yn_sg + '" instead!!'), yasv_['add'](yn_sg, yn_sg, xwqh70));break;case h_$lpc:
            throw new Error('attribute value missed!!');}return $j9z8r;case '\u0080':
        zu$r98 = '\x20';default:
        if ('\x20' >= zu$r98) switch (cu8p$r) {case h_l5tkm:
            yasv_['setTagName'](q70x1['slice'](xwqh70, $j9z8r)), cu8p$r = h_c5tp;break;case h_iayb26:
            b2iay6 = q70x1['slice'](xwqh70, $j9z8r), cu8p$r = h_a2y6sn;break;case h_xq10w:
            var yn_sg = q70x1['slice'](xwqh70, $j9z8r)['replace'](/&#?\w+;/g, rpz8u$);_aynvs['warning']('attribute "' + yn_sg + '" missed quot(")!!'), yasv_['add'](b2iay6, yn_sg, xwqh70);case h_nv_4:
            cu8p$r = h_c5tp;} else switch (cu8p$r) {case h_a2y6sn:
            {
              yasv_['tagName'];
            }'http://www.w3.org/1999/xhtml' === vngsf_[''] && b2iay6['match'](/^(?:disabled|checked|selected)$/i) || _aynvs['warning']('attribute "' + b2iay6 + '" missed value!! "' + b2iay6 + '" instead2!!'), yasv_['add'](b2iay6, b2iay6, xwqh70), xwqh70 = $j9z8r, cu8p$r = h_iayb26;break;case h_nv_4:
            _aynvs['warning']('attribute space is required"' + b2iay6 + '\x22!!');case h_c5tp:
            cu8p$r = h_iayb26, xwqh70 = $j9z8r;break;case h_$lpc:
            cu8p$r = h_xq10w, xwqh70 = $j9z8r;break;case h_a6_ys:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$j9z8r++;
  }
}function h_d9rhzj(jdzh9, $cl8up, pu8$) {
  for (var f7g143 = jdzh9['tagName'], i62ay = null, r89zj = jdzh9['length']; r89zj--;) {
    var x03q17 = jdzh9[r89zj],
        u8$lp = x03q17['qName'],
        pc5l$ = x03q17['value'],
        i62bae = u8$lp['indexOf'](':');if (i62bae > 0x0) var zrpu8$ = x03q17['prefix'] = u8$lp['slice'](0x0, i62bae),
        _nvgsf = u8$lp['slice'](i62bae + 0x1),
        cp5ot = 'xmlns' === zrpu8$ && _nvgsf;else _nvgsf = u8$lp, zrpu8$ = null, cp5ot = 'xmlns' === u8$lp && '';x03q17['localName'] = _nvgsf, cp5ot !== !0x1 && (null == i62ay && (i62ay = {}, h_cu8p$l(pu8$, pu8$ = {})), pu8$[cp5ot] = i62ay[cp5ot] = pc5l$, x03q17['uri'] = 'http://www.w3.org/2000/xmlns/', $cl8up['startPrefixMapping'](cp5ot, pc5l$));
  }for (var r89zj = jdzh9['length']; r89zj--;) {
    x03q17 = jdzh9[r89zj];var zrpu8$ = x03q17['prefix'];zrpu8$ && ('xml' === zrpu8$ && (x03q17['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== zrpu8$ && (x03q17['uri'] = pu8$[zrpu8$ || '']));
  }var i62bae = f7g143['indexOf'](':');i62bae > 0x0 ? (zrpu8$ = jdzh9['prefix'] = f7g143['slice'](0x0, i62bae), _nvgsf = jdzh9['localName'] = f7g143['slice'](i62bae + 0x1)) : (zrpu8$ = null, _nvgsf = jdzh9['localName'] = f7g143);var d8z9jr = jdzh9['uri'] = pu8$[zrpu8$ || ''];if ($cl8up['startElement'](d8z9jr, _nvgsf, f7g143, jdzh9), !jdzh9['closed']) return jdzh9['currentNSMap'] = pu8$, jdzh9['localNSMap'] = i62ay, !0x0;if ($cl8up['endElement'](d8z9jr, _nvgsf, f7g143), i62ay) {
    for (zrpu8$ in i62ay) $cl8up['endPrefixMapping'](zrpu8$);
  }
}function h_$jrz89(iy2b, sgnv_f, f_4g3, jdhw, ai62by) {
  if (/^(?:script|textarea)$/i['test'](f_4g3)) {
    var dj9h0 = iy2b['indexOf']('</' + f_4g3 + '>', sgnv_f),
        oul5cp = iy2b['substring'](sgnv_f + 0x1, dj9h0);if (/[&<]/['test'](oul5cp)) return (/^script$/i['test'](f_4g3) ? (ai62by['characters'](oul5cp, 0x0, oul5cp['length']), dj9h0) : (oul5cp = oul5cp['replace'](/&#?\w+;/g, jdhw), ai62by['characters'](oul5cp, 0x0, oul5cp['length']), dj9h0)
    );
  }return sgnv_f + 0x1;
}function h_vsgnf(n6sa_, ucl$, ng_, lcoup5) {
  var hzjr = lcoup5[ng_];return null == hzjr && (hzjr = n6sa_['lastIndexOf']('</' + ng_ + '>'), ucl$ > hzjr && (hzjr = n6sa_['lastIndexOf']('</' + ng_)), lcoup5[ng_] = hzjr), ucl$ > hzjr;
}function h_cu8p$l(b6y2i, x70w1) {
  for (var p8u$rz in b6y2i) x70w1[p8u$rz] = b6y2i[p8u$rz];
}function h_f_vnsg(rzdhj, $pcl8, v31gf, $pzr) {
  var yan6 = rzdhj['charAt']($pcl8 + 0x2);switch (yan6) {case '-':
      if ('-' === rzdhj['charAt']($pcl8 + 0x3)) {
        var i6y2s = rzdhj['indexOf']('-->', $pcl8 + 0x4);return i6y2s > $pcl8 ? (v31gf['comment'](rzdhj, $pcl8 + 0x4, i6y2s - $pcl8 - 0x4), i6y2s + 0x3) : ($pzr['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == rzdhj['substr']($pcl8 + 0x3, 0x6)) {
        var i6y2s = rzdhj['indexOf'](']]>', $pcl8 + 0x9);return v31gf['startCDATA'](), v31gf['characters'](rzdhj, $pcl8 + 0x9, i6y2s - $pcl8 - 0x9), v31gf['endCDATA'](), i6y2s + 0x3;
      }var $p5lu = h_lotm(rzdhj, $pcl8),
          q3741x = $p5lu['length'];if (q3741x > 0x1 && /!doctype/i['test']($p5lu[0x0][0x0])) {
        var rjz98d = $p5lu[0x1][0x0],
            vfn_g = q3741x > 0x3 && /^public$/i['test']($p5lu[0x2][0x0]) && $p5lu[0x3][0x0],
            iab2y6 = q3741x > 0x4 && $p5lu[0x4][0x0],
            cotl = $p5lu[q3741x - 0x1];return v31gf['startDTD'](rjz98d, vfn_g && vfn_g['replace'](/^(['"])(.*?)\1$/, '$2'), iab2y6 && iab2y6['replace'](/^(['"])(.*?)\1$/, '$2')), v31gf['endDTD'](), cotl['index'] + cotl[0x0]['length'];
      }}return -0x1;
}function h_q0wdx(yvs_na, molc, puc$r) {
  var lotmk5 = yvs_na['indexOf']('?>', molc);if (lotmk5) {
    var nv_sfg = yvs_na['substring'](molc, lotmk5)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (nv_sfg) {
      {
        nv_sfg[0x0]['length'];
      }return puc$r['processingInstruction'](nv_sfg[0x1], nv_sfg[0x2]), lotmk5 + 0x2;
    }return -0x1;
  }return -0x1;
}function h_ul5c$() {}function h_q0hdw(a2by6, l5ocu) {
  return a2by6['__proto__'] = l5ocu, a2by6;
}function h_lotm(plc5u, lmct) {
  var ng_sv,
      z9w = [],
      biy62 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (biy62['lastIndex'] = lmct, biy62['exec'](plc5u); ng_sv = biy62['exec'](plc5u);) if (z9w['push'](ng_sv), ng_sv[0x1]) return z9w;
}var h__ysav = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    h_c5pluo = new RegExp('[\\-\\.0-9' + h__ysav['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    h_r$9z8 = new RegExp('^' + h__ysav['source'] + h_c5pluo['source'] + '*(?::' + h__ysav['source'] + h_c5pluo['source'] + '*)?$'),
    h_l5tkm = 0x0,
    h_iayb26 = 0x1,
    h_a2y6sn = 0x2,
    h_$lpc = 0x3,
    h_xq10w = 0x4,
    h_nv_4 = 0x5,
    h_c5tp = 0x6,
    h_a6_ys = 0x7;h_plu$c['prototype'] = { 'parse': function (x701q3, lup$c8, jz9rdh) {
    var tmklo = this['domBuilder'];tmklo['startDocument'](), h_cu8p$l(lup$c8, lup$c8 = {}), h_jw9dzh(x701q3, lup$c8, jz9rdh, tmklo, this['errorHandler']), tmklo['endDocument']();
  } }, h_ul5c$['prototype'] = { 'setTagName': function (abe26) {
    if (!h_r$9z8['test'](abe26)) throw new Error('invalid tagName:' + abe26);this['tagName'] = abe26;
  }, 'add': function (x0hdq, r$cp, e26a) {
    if (!h_r$9z8['test'](x0hdq)) throw new Error('invalid attribute:' + x0hdq);this[this['length']++] = { 'qName': x0hdq, 'value': r$cp, 'offset': e26a };
  }, 'length': 0x0, 'getLocalName': function (_fgnv) {
    return this[_fgnv]['localName'];
  }, 'getLocator': function (na2ys) {
    return this[na2ys]['locator'];
  }, 'getQName': function ($cpr8u) {
    return this[$cpr8u]['qName'];
  }, 'getURI': function (_vg4fn) {
    return this[_vg4fn]['uri'];
  }, 'getValue': function (c5u$) {
    return this[c5u$]['value'];
  } }, h_q0hdw({}, h_q0hdw['prototype']) instanceof h_q0hdw || (h_q0hdw = function (sy2n6a, gnfv_s) {
  function q701w() {}q701w['prototype'] = gnfv_s, q701w = new q701w();for (gnfv_s in sy2n6a) q701w[gnfv_s] = sy2n6a[gnfv_s];return q701w;
}), exports['XMLReader'] = h_plu$c;