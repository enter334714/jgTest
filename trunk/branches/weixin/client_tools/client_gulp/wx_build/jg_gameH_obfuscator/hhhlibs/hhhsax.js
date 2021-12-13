var O = wx.$C;
function h_ng_4vf() {}function h_hz9r(y_nsv, ysn_av, mk5lot, zhjw, cuolp5) {
  function r8jzd(vgny_) {
    if (vgny_ > 0xffff) {
      vgny_ -= 0x10000;var j$9zr8 = 0xd800 + (vgny_ >> 0xa),
          tlp5c = 0xdc00 + (0x3ff & vgny_);return String['fromCharCode'](j$9zr8, tlp5c);
    }return String['fromCharCode'](vgny_);
  }function pl5t(j8z$r9) {
    var dr8zj9 = j8z$r9['slice'](0x1, -0x1);return dr8zj9 in mk5lot ? mk5lot[dr8zj9] : '#' === dr8zj9['charAt'](0x0) ? r8jzd(parseInt(dr8zj9['substr'](0x1)['replace']('x', '0x'))) : (cuolp5['error']('entity not found:' + j8z$r9), j8z$r9);
  }function w0qhx(eab26) {
    if (eab26 > wq0dh) {
      var vn4fg_ = y_nsv['substring'](wq0dh, eab26)['replace'](/&#?\w+;/g, pl5t);c8$ul && n6s_a(wq0dh), zhjw['characters'](vn4fg_, 0x0, eab26 - wq0dh), wq0dh = eab26;
    }
  }function n6s_a(v_sfg, gvf41) {
    for (; v_sfg >= a_y6ns && (gvf41 = i6aby2['exec'](y_nsv));) h9dwjz = gvf41['index'], a_y6ns = h9dwjz + gvf41[0x0]['length'], c8$ul['lineNumber']++;c8$ul['columnNumber'] = v_sfg - h9dwjz + 0x1;
  }for (var h9dwjz = 0x0, a_y6ns = 0x0, i6aby2 = /.*(?:\r\n?|\n)|.*$/g, c8$ul = zhjw['locator'], z9ur = [{ 'currentNSMap': ysn_av }], ba6e2 = {}, wq0dh = 0x0;;) {
    try {
      var r$j98z = y_nsv['indexOf']('<', wq0dh);if (0x0 > r$j98z) {
        if (!y_nsv['substr'](wq0dh)['match'](/^\s*$/)) {
          var dhwjz = zhjw['doc'],
              gf4v13 = dhwjz['createTextNode'](y_nsv['substr'](wq0dh));dhwjz['appendChild'](gf4v13), zhjw['currentElement'] = gf4v13;
        }return;
      }switch (r$j98z > wq0dh && w0qhx(r$j98z), y_nsv['charAt'](r$j98z + 0x1)) {case '/':
          var ayvs = y_nsv['indexOf']('>', r$j98z + 0x3),
              lot5km = y_nsv['substring'](r$j98z + 0x2, ayvs),
              $lcp5 = z9ur['pop']();0x0 > ayvs ? (lot5km = y_nsv['substring'](r$j98z + 0x2)['replace'](/[\s<].*/, ''), cuolp5['error']('end tag name: ' + lot5km + ' is not complete:' + $lcp5['tagName']), ayvs = r$j98z + 0x1 + lot5km['length']) : lot5km['match'](/\s</) && (lot5km = lot5km['replace'](/[\s<].*/, ''), cuolp5['error']('end tag name: ' + lot5km + ' maybe not complete'), ayvs = r$j98z + 0x1 + lot5km['length']);var nsy_av = $lcp5['localNSMap'],
              g13vf = $lcp5['tagName'] == lot5km,
              cmol5t = g13vf || $lcp5['tagName'] && $lcp5['tagName']['toLowerCase']() == lot5km['toLowerCase']();if (cmol5t) {
            if (zhjw['endElement']($lcp5['uri'], $lcp5['localName'], lot5km), nsy_av) {
              for (var a6sy_n in nsy_av) zhjw['endPrefixMapping'](a6sy_n);
            }g13vf || cuolp5['fatalError']('end tag name: ' + lot5km + ' is not match the current start tagName:' + $lcp5['tagName']);
          } else z9ur['push']($lcp5);ayvs++;break;case '?':
          c8$ul && n6s_a(r$j98z), ayvs = h_x1qw(y_nsv, r$j98z, zhjw);break;case '!':
          c8$ul && n6s_a(r$j98z), ayvs = h_jrz$9(y_nsv, r$j98z, zhjw, cuolp5);break;default:
          c8$ul && n6s_a(r$j98z);var ya_nv = new h_up$rc(),
              lopuc = z9ur[z9ur['length'] - 0x1]['currentNSMap'],
              ayvs = h_d0wj9h(y_nsv, r$j98z, ya_nv, lopuc, pl5t, cuolp5),
              iab26y = ya_nv['length'];if (!ya_nv['closed'] && h_aiys26(y_nsv, ayvs, ya_nv['tagName'], ba6e2) && (ya_nv['closed'] = !0x0, mk5lot['nbsp'] || cuolp5['warning']('unclosed xml attribute')), c8$ul && iab26y) {
            for (var r8cp$ = h_vsny_g(c8$ul, {}), v31f = 0x0; iab26y > v31f; v31f++) {
              var hz9dr = ya_nv[v31f];n6s_a(hz9dr['offset']), hz9dr['locator'] = h_vsny_g(c8$ul, {});
            }zhjw['locator'] = r8cp$, h_gn_y(ya_nv, zhjw, lopuc) && z9ur['push'](ya_nv), zhjw['locator'] = c8$ul;
          } else h_gn_y(ya_nv, zhjw, lopuc) && z9ur['push'](ya_nv);'http://www.w3.org/1999/xhtml' !== ya_nv['uri'] || ya_nv['closed'] ? ayvs++ : ayvs = h_oclp5(y_nsv, ayvs, ya_nv['tagName'], pl5t, zhjw);}
    } catch (_yvna) {
      cuolp5['error']('element parse error: ' + _yvna), ayvs = -0x1;
    }ayvs > wq0dh ? wq0dh = ayvs : w0qhx(Math['max'](r$j98z, wq0dh) + 0x1);
  }
}function h_vsny_g(rdhz, urz98) {
  return urz98['lineNumber'] = rdhz['lineNumber'], urz98['columnNumber'] = rdhz['columnNumber'], urz98;
}function h_d0wj9h(v_syng, cpl5u$, pzru8$, vf4_gn, h70xqw, hr9d) {
  for (var xj0dhw, o5mtk, $r8cpu = ++cpl5u$, a6y2 = h_zp$8;;) {
    var fgv413 = v_syng['charAt']($r8cpu);switch (fgv413) {case '=':
        if (a6y2 === h_ngf_vs) xj0dhw = v_syng['slice'](cpl5u$, $r8cpu), a6y2 = h_rjhz9d;else {
          if (a6y2 !== h_g734f) throw new Error('attribute equal must after attrName');a6y2 = h_rjhz9d;
        }break;case '\x27':case '\x22':
        if (a6y2 === h_rjhz9d || a6y2 === h_ngf_vs) {
          if (a6y2 === h_ngf_vs && (hr9d['warning']('attribute value must after "="'), xj0dhw = v_syng['slice'](cpl5u$, $r8cpu)), cpl5u$ = $r8cpu + 0x1, $r8cpu = v_syng['indexOf'](fgv413, cpl5u$), !($r8cpu > 0x0)) throw new Error('attribute value no end \'' + fgv413 + '\' match');o5mtk = v_syng['slice'](cpl5u$, $r8cpu)['replace'](/&#?\w+;/g, h70xqw), pzru8$['add'](xj0dhw, o5mtk, cpl5u$ - 0x1), a6y2 = h_nay_sv;
        } else {
          if (a6y2 != h_fn4_g) throw new Error('attribute value must after "="');o5mtk = v_syng['slice'](cpl5u$, $r8cpu)['replace'](/&#?\w+;/g, h70xqw), pzru8$['add'](xj0dhw, o5mtk, cpl5u$), hr9d['warning']('attribute "' + xj0dhw + '" missed start quot(' + fgv413 + ')!!'), cpl5u$ = $r8cpu + 0x1, a6y2 = h_nay_sv;
        }break;case '/':
        switch (a6y2) {case h_zp$8:
            pzru8$['setTagName'](v_syng['slice'](cpl5u$, $r8cpu));case h_nay_sv:case h_ai6yb:case h__6ansy:
            a6y2 = h__6ansy, pzru8$['closed'] = !0x0;case h_fn4_g:case h_ngf_vs:case h_g734f:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return hr9d['error']('unexpected end of input'), a6y2 == h_zp$8 && pzru8$['setTagName'](v_syng['slice'](cpl5u$, $r8cpu)), $r8cpu;case '>':
        switch (a6y2) {case h_zp$8:
            pzru8$['setTagName'](v_syng['slice'](cpl5u$, $r8cpu));case h_nay_sv:case h_ai6yb:case h__6ansy:
            break;case h_fn4_g:case h_ngf_vs:
            o5mtk = v_syng['slice'](cpl5u$, $r8cpu), '/' === o5mtk['slice'](-0x1) && (pzru8$['closed'] = !0x0, o5mtk = o5mtk['slice'](0x0, -0x1));case h_g734f:
            a6y2 === h_g734f && (o5mtk = xj0dhw), a6y2 == h_fn4_g ? (hr9d['warning']('attribute "' + o5mtk + '" missed quot(")!!'), pzru8$['add'](xj0dhw, o5mtk['replace'](/&#?\w+;/g, h70xqw), cpl5u$)) : ('http://www.w3.org/1999/xhtml' === vf4_gn[''] && o5mtk['match'](/^(?:disabled|checked|selected)$/i) || hr9d['warning']('attribute "' + o5mtk + '" missed value!! "' + o5mtk + '" instead!!'), pzru8$['add'](o5mtk, o5mtk, cpl5u$));break;case h_rjhz9d:
            throw new Error('attribute value missed!!');}return $r8cpu;case '\u0080':
        fgv413 = '\x20';default:
        if ('\x20' >= fgv413) switch (a6y2) {case h_zp$8:
            pzru8$['setTagName'](v_syng['slice'](cpl5u$, $r8cpu)), a6y2 = h_ai6yb;break;case h_ngf_vs:
            xj0dhw = v_syng['slice'](cpl5u$, $r8cpu), a6y2 = h_g734f;break;case h_fn4_g:
            var o5mtk = v_syng['slice'](cpl5u$, $r8cpu)['replace'](/&#?\w+;/g, h70xqw);hr9d['warning']('attribute "' + o5mtk + '" missed quot(")!!'), pzru8$['add'](xj0dhw, o5mtk, cpl5u$);case h_nay_sv:
            a6y2 = h_ai6yb;} else switch (a6y2) {case h_g734f:
            {
              pzru8$['tagName'];
            }'http://www.w3.org/1999/xhtml' === vf4_gn[''] && xj0dhw['match'](/^(?:disabled|checked|selected)$/i) || hr9d['warning']('attribute "' + xj0dhw + '" missed value!! "' + xj0dhw + '" instead2!!'), pzru8$['add'](xj0dhw, xj0dhw, cpl5u$), cpl5u$ = $r8cpu, a6y2 = h_ngf_vs;break;case h_nay_sv:
            hr9d['warning']('attribute space is required"' + xj0dhw + '\x22!!');case h_ai6yb:
            a6y2 = h_ngf_vs, cpl5u$ = $r8cpu;break;case h_rjhz9d:
            a6y2 = h_fn4_g, cpl5u$ = $r8cpu;break;case h__6ansy:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$r8cpu++;
  }
}function h_gn_y(w0qx7, rd9jh, zpru8$) {
  for (var d0wjh9 = w0qx7['tagName'], z9wjhd = null, zpr$u = w0qx7['length']; zpr$u--;) {
    var ul8$ = w0qx7[zpr$u],
        y6_ans = ul8$['qName'],
        ya6i2b = ul8$['value'],
        p$l8uc = y6_ans['indexOf'](':');if (p$l8uc > 0x0) var l5mok = ul8$['prefix'] = y6_ans['slice'](0x0, p$l8uc),
        $zjr98 = y6_ans['slice'](p$l8uc + 0x1),
        gns_fv = 'xmlns' === l5mok && $zjr98;else $zjr98 = y6_ans, l5mok = null, gns_fv = 'xmlns' === y6_ans && '';ul8$['localName'] = $zjr98, gns_fv !== !0x1 && (null == z9wjhd && (z9wjhd = {}, h_q714x3(zpru8$, zpru8$ = {})), zpru8$[gns_fv] = z9wjhd[gns_fv] = ya6i2b, ul8$['uri'] = 'http://www.w3.org/2000/xmlns/', rd9jh['startPrefixMapping'](gns_fv, ya6i2b));
  }for (var zpr$u = w0qx7['length']; zpr$u--;) {
    ul8$ = w0qx7[zpr$u];var l5mok = ul8$['prefix'];l5mok && ('xml' === l5mok && (ul8$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== l5mok && (ul8$['uri'] = zpru8$[l5mok || '']));
  }var p$l8uc = d0wjh9['indexOf'](':');p$l8uc > 0x0 ? (l5mok = w0qx7['prefix'] = d0wjh9['slice'](0x0, p$l8uc), $zjr98 = w0qx7['localName'] = d0wjh9['slice'](p$l8uc + 0x1)) : (l5mok = null, $zjr98 = w0qx7['localName'] = d0wjh9);var r8j$z9 = w0qx7['uri'] = zpru8$[l5mok || ''];if (rd9jh['startElement'](r8j$z9, $zjr98, d0wjh9, w0qx7), !w0qx7['closed']) return w0qx7['currentNSMap'] = zpru8$, w0qx7['localNSMap'] = z9wjhd, !0x0;if (rd9jh['endElement'](r8j$z9, $zjr98, d0wjh9), z9wjhd) {
    for (l5mok in z9wjhd) rd9jh['endPrefixMapping'](l5mok);
  }
}function h_oclp5(u8$rzp, dw9jz, f7431, xjd0, poul) {
  if (/^(?:script|textarea)$/i['test'](f7431)) {
    var vgy_ = u8$rzp['indexOf']('</' + f7431 + '>', dw9jz),
        c8pr$u = u8$rzp['substring'](dw9jz + 0x1, vgy_);if (/[&<]/['test'](c8pr$u)) return (/^script$/i['test'](f7431) ? (poul['characters'](c8pr$u, 0x0, c8pr$u['length']), vgy_) : (c8pr$u = c8pr$u['replace'](/&#?\w+;/g, xjd0), poul['characters'](c8pr$u, 0x0, c8pr$u['length']), vgy_)
    );
  }return dw9jz + 0x1;
}function h_aiys26(rp$uz, syv_ng, sv_fn, vy_ns) {
  var _3gf = vy_ns[sv_fn];return null == _3gf && (_3gf = rp$uz['lastIndexOf']('</' + sv_fn + '>'), syv_ng > _3gf && (_3gf = rp$uz['lastIndexOf']('</' + sv_fn)), vy_ns[sv_fn] = _3gf), syv_ng > _3gf;
}function h_q714x3(fv341, oul5p) {
  for (var sn2a in fv341) oul5p[sn2a] = fv341[sn2a];
}function h_jrz$9(nv_fsg, eb2a6, l$u8, y2n6sa) {
  var culp8 = nv_fsg['charAt'](eb2a6 + 0x2);switch (culp8) {case '-':
      if ('-' === nv_fsg['charAt'](eb2a6 + 0x3)) {
        var hjxd0 = nv_fsg['indexOf']('-->', eb2a6 + 0x4);return hjxd0 > eb2a6 ? (l$u8['comment'](nv_fsg, eb2a6 + 0x4, hjxd0 - eb2a6 - 0x4), hjxd0 + 0x3) : (y2n6sa['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == nv_fsg['substr'](eb2a6 + 0x3, 0x6)) {
        var hjxd0 = nv_fsg['indexOf'](']]>', eb2a6 + 0x9);return l$u8['startCDATA'](), l$u8['characters'](nv_fsg, eb2a6 + 0x9, hjxd0 - eb2a6 - 0x9), l$u8['endCDATA'](), hjxd0 + 0x3;
      }var v_ysna = h_g4_3(nv_fsg, eb2a6),
          f_nvg4 = v_ysna['length'];if (f_nvg4 > 0x1 && /!doctype/i['test'](v_ysna[0x0][0x0])) {
        var a_y = v_ysna[0x1][0x0],
            zjr9$ = f_nvg4 > 0x3 && /^public$/i['test'](v_ysna[0x2][0x0]) && v_ysna[0x3][0x0],
            zjrd98 = f_nvg4 > 0x4 && v_ysna[0x4][0x0],
            o5tc = v_ysna[f_nvg4 - 0x1];return l$u8['startDTD'](a_y, zjr9$ && zjr9$['replace'](/^(['"])(.*?)\1$/, '$2'), zjrd98 && zjrd98['replace'](/^(['"])(.*?)\1$/, '$2')), l$u8['endDTD'](), o5tc['index'] + o5tc[0x0]['length'];
      }}return -0x1;
}function h_x1qw(q7hxw0, octlm, zhwd9) {
  var q07w1 = q7hxw0['indexOf']('?>', octlm);if (q07w1) {
    var f1q = q7hxw0['substring'](octlm, q07w1)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (f1q) {
      {
        f1q[0x0]['length'];
      }return zhwd9['processingInstruction'](f1q[0x1], f1q[0x2]), q07w1 + 0x2;
    }return -0x1;
  }return -0x1;
}function h_up$rc() {}function h_ltpo5(l8up$c, gvnsf_) {
  return l8up$c['__proto__'] = gvnsf_, l8up$c;
}function h_g4_3($8lucp, $5cpl) {
  var c5polt,
      fgn_s = [],
      j9hrd = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (j9hrd['lastIndex'] = $5cpl, j9hrd['exec']($8lucp); c5polt = j9hrd['exec']($8lucp);) if (fgn_s['push'](c5polt), c5polt[0x1]) return fgn_s;
}var h_jh0dw9 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    h_zh9wjd = new RegExp('[\\-\\.0-9' + h_jh0dw9['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    h_n2a6s = new RegExp('^' + h_jh0dw9['source'] + h_zh9wjd['source'] + '*(?::' + h_jh0dw9['source'] + h_zh9wjd['source'] + '*)?$'),
    h_zp$8 = 0x0,
    h_ngf_vs = 0x1,
    h_g734f = 0x2,
    h_rjhz9d = 0x3,
    h_fn4_g = 0x4,
    h_nay_sv = 0x5,
    h_ai6yb = 0x6,
    h__6ansy = 0x7;h_ng_4vf['prototype'] = { 'parse': function (jh0d9, uplc8$, jz8rd) {
    var nsvg = this['domBuilder'];nsvg['startDocument'](), h_q714x3(uplc8$, uplc8$ = {}), h_hz9r(jh0d9, uplc8$, jz8rd, nsvg, this['errorHandler']), nsvg['endDocument']();
  } }, h_up$rc['prototype'] = { 'setTagName': function (hxjd0w) {
    if (!h_n2a6s['test'](hxjd0w)) throw new Error('invalid tagName:' + hxjd0w);this['tagName'] = hxjd0w;
  }, 'add': function (zj$r98, uz98, rd98zj) {
    if (!h_n2a6s['test'](zj$r98)) throw new Error('invalid attribute:' + zj$r98);this[this['length']++] = { 'qName': zj$r98, 'value': uz98, 'offset': rd98zj };
  }, 'length': 0x0, 'getLocalName': function (fv_4gn) {
    return this[fv_4gn]['localName'];
  }, 'getLocator': function (e6b2) {
    return this[e6b2]['locator'];
  }, 'getQName': function (w7q) {
    return this[w7q]['qName'];
  }, 'getURI': function (tol5) {
    return this[tol5]['uri'];
  }, 'getValue': function (xh0q) {
    return this[xh0q]['value'];
  } }, h_ltpo5({}, h_ltpo5['prototype']) instanceof h_ltpo5 || (h_ltpo5 = function (l$p5u, _vf43g) {
  function be2a6() {}be2a6['prototype'] = _vf43g, be2a6 = new be2a6();for (_vf43g in l$p5u) be2a6[_vf43g] = l$p5u[_vf43g];return be2a6;
}), exports['XMLReader'] = h_ng_4vf;