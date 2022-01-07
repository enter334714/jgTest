var O = wx.$C;
function h_pclto() {}function h_wdhq0x(v_g43f, d8zj, p8l$uc, nvsy_g, xjwh0) {
  function $lcp5(sny26) {
    if (sny26 > 0xffff) {
      sny26 -= 0x10000;var cu5olp = 0xd800 + (sny26 >> 0xa),
          f3471 = 0xdc00 + (0x3ff & sny26);return String['fromCharCode'](cu5olp, f3471);
    }return String['fromCharCode'](sny26);
  }function p5l$c(lcpu$5) {
    var s_6nya = lcpu$5['slice'](0x1, -0x1);return s_6nya in p8l$uc ? p8l$uc[s_6nya] : '#' === s_6nya['charAt'](0x0) ? $lcp5(parseInt(s_6nya['substr'](0x1)['replace']('x', '0x'))) : (xjwh0['error']('entity not found:' + lcpu$5), lcpu$5);
  }function f1g73(wh70xq) {
    if (wh70xq > kml5ot) {
      var zj9r8d = v_g43f['substring'](kml5ot, wh70xq)['replace'](/&#?\w+;/g, p5l$c);ng_ys && djxh0(kml5ot), nvsy_g['characters'](zj9r8d, 0x0, wh70xq - kml5ot), kml5ot = wh70xq;
    }
  }function djxh0(dj09w, lou5c) {
    for (; dj09w >= xwhd0q && (lou5c = u5p$cl['exec'](v_g43f));) _sfvgn = lou5c['index'], xwhd0q = _sfvgn + lou5c[0x0]['length'], ng_ys['lineNumber']++;ng_ys['columnNumber'] = dj09w - _sfvgn + 0x1;
  }for (var _sfvgn = 0x0, xwhd0q = 0x0, u5p$cl = /.*(?:\r\n?|\n)|.*$/g, ng_ys = nvsy_g['locator'], lcop5u = [{ 'currentNSMap': d8zj }], lu8p$c = {}, kml5ot = 0x0;;) {
    try {
      var pur8c = v_g43f['indexOf']('<', kml5ot);if (0x0 > pur8c) {
        if (!v_g43f['substr'](kml5ot)['match'](/^\s*$/)) {
          var cl8p$ = nvsy_g['doc'],
              r9hj = cl8p$['createTextNode'](v_g43f['substr'](kml5ot));cl8p$['appendChild'](r9hj), nvsy_g['currentElement'] = r9hj;
        }return;
      }switch (pur8c > kml5ot && f1g73(pur8c), v_g43f['charAt'](pur8c + 0x1)) {case '/':
          var g41f3 = v_g43f['indexOf']('>', pur8c + 0x3),
              xj0whd = v_g43f['substring'](pur8c + 0x2, g41f3),
              rzhj = lcop5u['pop']();0x0 > g41f3 ? (xj0whd = v_g43f['substring'](pur8c + 0x2)['replace'](/[\s<].*/, ''), xjwh0['error']('end tag name: ' + xj0whd + ' is not complete:' + rzhj['tagName']), g41f3 = pur8c + 0x1 + xj0whd['length']) : xj0whd['match'](/\s</) && (xj0whd = xj0whd['replace'](/[\s<].*/, ''), xjwh0['error']('end tag name: ' + xj0whd + ' maybe not complete'), g41f3 = pur8c + 0x1 + xj0whd['length']);var q03x71 = rzhj['localNSMap'],
              qx10w7 = rzhj['tagName'] == xj0whd,
              aei26b = qx10w7 || rzhj['tagName'] && rzhj['tagName']['toLowerCase']() == xj0whd['toLowerCase']();if (aei26b) {
            if (nvsy_g['endElement'](rzhj['uri'], rzhj['localName'], xj0whd), q03x71) {
              for (var t5mocl in q03x71) nvsy_g['endPrefixMapping'](t5mocl);
            }qx10w7 || xjwh0['fatalError']('end tag name: ' + xj0whd + ' is not match the current start tagName:' + rzhj['tagName']);
          } else lcop5u['push'](rzhj);g41f3++;break;case '?':
          ng_ys && djxh0(pur8c), g41f3 = h_byia2(v_g43f, pur8c, nvsy_g);break;case '!':
          ng_ys && djxh0(pur8c), g41f3 = h_$ur8(v_g43f, pur8c, nvsy_g, xjwh0);break;default:
          ng_ys && djxh0(pur8c);var ul$c = new h_aiby(),
              byi2a = lcop5u[lcop5u['length'] - 0x1]['currentNSMap'],
              g41f3 = h_z$rp8u(v_g43f, pur8c, ul$c, byi2a, p5l$c, xjwh0),
              cm5o = ul$c['length'];if (!ul$c['closed'] && h_qw1x07(v_g43f, g41f3, ul$c['tagName'], lu8p$c) && (ul$c['closed'] = !0x0, p8l$uc['nbsp'] || xjwh0['warning']('unclosed xml attribute')), ng_ys && cm5o) {
            for (var x4q173 = h_tcoml(ng_ys, {}), $8crp = 0x0; cm5o > $8crp; $8crp++) {
              var hqwd0x = ul$c[$8crp];djxh0(hqwd0x['offset']), hqwd0x['locator'] = h_tcoml(ng_ys, {});
            }nvsy_g['locator'] = x4q173, h_j$z9r8(ul$c, nvsy_g, byi2a) && lcop5u['push'](ul$c), nvsy_g['locator'] = ng_ys;
          } else h_j$z9r8(ul$c, nvsy_g, byi2a) && lcop5u['push'](ul$c);'http://www.w3.org/1999/xhtml' !== ul$c['uri'] || ul$c['closed'] ? g41f3++ : g41f3 = h_gf714(v_g43f, g41f3, ul$c['tagName'], p5l$c, nvsy_g);}
    } catch (rp8uz) {
      xjwh0['error']('element parse error: ' + rp8uz), g41f3 = -0x1;
    }g41f3 > kml5ot ? kml5ot = g41f3 : f1g73(Math['max'](pur8c, kml5ot) + 0x1);
  }
}function h_tcoml(syvn_a, $rjz8) {
  return $rjz8['lineNumber'] = syvn_a['lineNumber'], $rjz8['columnNumber'] = syvn_a['columnNumber'], $rjz8;
}function h_z$rp8u(_f4nvg, v4f_gn, ptlc5, ayb, w0xj, _yas6) {
  for (var s_gfnv, fv_4g, r$8z9u = ++v4f_gn, _y6san = h_r8u$pz;;) {
    var clpuo = _f4nvg['charAt'](r$8z9u);switch (clpuo) {case '=':
        if (_y6san === h_z8pur$) s_gfnv = _f4nvg['slice'](v4f_gn, r$8z9u), _y6san = h_cp$ul8;else {
          if (_y6san !== h_r$z89u) throw new Error('attribute equal must after attrName');_y6san = h_cp$ul8;
        }break;case '\x27':case '\x22':
        if (_y6san === h_cp$ul8 || _y6san === h_z8pur$) {
          if (_y6san === h_z8pur$ && (_yas6['warning']('attribute value must after "="'), s_gfnv = _f4nvg['slice'](v4f_gn, r$8z9u)), v4f_gn = r$8z9u + 0x1, r$8z9u = _f4nvg['indexOf'](clpuo, v4f_gn), !(r$8z9u > 0x0)) throw new Error('attribute value no end \'' + clpuo + '\' match');fv_4g = _f4nvg['slice'](v4f_gn, r$8z9u)['replace'](/&#?\w+;/g, w0xj), ptlc5['add'](s_gfnv, fv_4g, v4f_gn - 0x1), _y6san = h_whjxd;
        } else {
          if (_y6san != h_z$8jr9) throw new Error('attribute value must after "="');fv_4g = _f4nvg['slice'](v4f_gn, r$8z9u)['replace'](/&#?\w+;/g, w0xj), ptlc5['add'](s_gfnv, fv_4g, v4f_gn), _yas6['warning']('attribute "' + s_gfnv + '" missed start quot(' + clpuo + ')!!'), v4f_gn = r$8z9u + 0x1, _y6san = h_whjxd;
        }break;case '/':
        switch (_y6san) {case h_r8u$pz:
            ptlc5['setTagName'](_f4nvg['slice'](v4f_gn, r$8z9u));case h_whjxd:case h_u9z8r$:case h_u$l:
            _y6san = h_u$l, ptlc5['closed'] = !0x0;case h_z$8jr9:case h_z8pur$:case h_r$z89u:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _yas6['error']('unexpected end of input'), _y6san == h_r8u$pz && ptlc5['setTagName'](_f4nvg['slice'](v4f_gn, r$8z9u)), r$8z9u;case '>':
        switch (_y6san) {case h_r8u$pz:
            ptlc5['setTagName'](_f4nvg['slice'](v4f_gn, r$8z9u));case h_whjxd:case h_u9z8r$:case h_u$l:
            break;case h_z$8jr9:case h_z8pur$:
            fv_4g = _f4nvg['slice'](v4f_gn, r$8z9u), '/' === fv_4g['slice'](-0x1) && (ptlc5['closed'] = !0x0, fv_4g = fv_4g['slice'](0x0, -0x1));case h_r$z89u:
            _y6san === h_r$z89u && (fv_4g = s_gfnv), _y6san == h_z$8jr9 ? (_yas6['warning']('attribute "' + fv_4g + '" missed quot(")!!'), ptlc5['add'](s_gfnv, fv_4g['replace'](/&#?\w+;/g, w0xj), v4f_gn)) : ('http://www.w3.org/1999/xhtml' === ayb[''] && fv_4g['match'](/^(?:disabled|checked|selected)$/i) || _yas6['warning']('attribute "' + fv_4g + '" missed value!! "' + fv_4g + '" instead!!'), ptlc5['add'](fv_4g, fv_4g, v4f_gn));break;case h_cp$ul8:
            throw new Error('attribute value missed!!');}return r$8z9u;case '\u0080':
        clpuo = '\x20';default:
        if ('\x20' >= clpuo) switch (_y6san) {case h_r8u$pz:
            ptlc5['setTagName'](_f4nvg['slice'](v4f_gn, r$8z9u)), _y6san = h_u9z8r$;break;case h_z8pur$:
            s_gfnv = _f4nvg['slice'](v4f_gn, r$8z9u), _y6san = h_r$z89u;break;case h_z$8jr9:
            var fv_4g = _f4nvg['slice'](v4f_gn, r$8z9u)['replace'](/&#?\w+;/g, w0xj);_yas6['warning']('attribute "' + fv_4g + '" missed quot(")!!'), ptlc5['add'](s_gfnv, fv_4g, v4f_gn);case h_whjxd:
            _y6san = h_u9z8r$;} else switch (_y6san) {case h_r$z89u:
            {
              ptlc5['tagName'];
            }'http://www.w3.org/1999/xhtml' === ayb[''] && s_gfnv['match'](/^(?:disabled|checked|selected)$/i) || _yas6['warning']('attribute "' + s_gfnv + '" missed value!! "' + s_gfnv + '" instead2!!'), ptlc5['add'](s_gfnv, s_gfnv, v4f_gn), v4f_gn = r$8z9u, _y6san = h_z8pur$;break;case h_whjxd:
            _yas6['warning']('attribute space is required"' + s_gfnv + '\x22!!');case h_u9z8r$:
            _y6san = h_z8pur$, v4f_gn = r$8z9u;break;case h_cp$ul8:
            _y6san = h_z$8jr9, v4f_gn = r$8z9u;break;case h_u$l:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}r$8z9u++;
  }
}function h_j$z9r8(n_y6as, uz8r, l$8p) {
  for (var wdzh9 = n_y6as['tagName'], mcot = null, zd9hw = n_y6as['length']; zd9hw--;) {
    var cpto5l = n_y6as[zd9hw],
        rh = cpto5l['qName'],
        _na6 = cpto5l['value'],
        hx07w = rh['indexOf'](':');if (hx07w > 0x0) var r8pz$u = cpto5l['prefix'] = rh['slice'](0x0, hx07w),
        z8u$ = rh['slice'](hx07w + 0x1),
        v_3fg4 = 'xmlns' === r8pz$u && z8u$;else z8u$ = rh, r8pz$u = null, v_3fg4 = 'xmlns' === rh && '';cpto5l['localName'] = z8u$, v_3fg4 !== !0x1 && (null == mcot && (mcot = {}, h_x4317q(l$8p, l$8p = {})), l$8p[v_3fg4] = mcot[v_3fg4] = _na6, cpto5l['uri'] = 'http://www.w3.org/2000/xmlns/', uz8r['startPrefixMapping'](v_3fg4, _na6));
  }for (var zd9hw = n_y6as['length']; zd9hw--;) {
    cpto5l = n_y6as[zd9hw];var r8pz$u = cpto5l['prefix'];r8pz$u && ('xml' === r8pz$u && (cpto5l['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== r8pz$u && (cpto5l['uri'] = l$8p[r8pz$u || '']));
  }var hx07w = wdzh9['indexOf'](':');hx07w > 0x0 ? (r8pz$u = n_y6as['prefix'] = wdzh9['slice'](0x0, hx07w), z8u$ = n_y6as['localName'] = wdzh9['slice'](hx07w + 0x1)) : (r8pz$u = null, z8u$ = n_y6as['localName'] = wdzh9);var $lcup8 = n_y6as['uri'] = l$8p[r8pz$u || ''];if (uz8r['startElement']($lcup8, z8u$, wdzh9, n_y6as), !n_y6as['closed']) return n_y6as['currentNSMap'] = l$8p, n_y6as['localNSMap'] = mcot, !0x0;if (uz8r['endElement']($lcup8, z8u$, wdzh9), mcot) {
    for (r8pz$u in mcot) uz8r['endPrefixMapping'](r8pz$u);
  }
}function h_gf714(q0731, urp$c8, q0x17, ucp$5, ieb6a) {
  if (/^(?:script|textarea)$/i['test'](q0x17)) {
    var dxh = q0731['indexOf']('</' + q0x17 + '>', urp$c8),
        u5pc = q0731['substring'](urp$c8 + 0x1, dxh);if (/[&<]/['test'](u5pc)) return (/^script$/i['test'](q0x17) ? (ieb6a['characters'](u5pc, 0x0, u5pc['length']), dxh) : (u5pc = u5pc['replace'](/&#?\w+;/g, ucp$5), ieb6a['characters'](u5pc, 0x0, u5pc['length']), dxh)
    );
  }return urp$c8 + 0x1;
}function h_qw1x07(f3v_4g, jr$8z9, p5clt, cr8u$p) {
  var nsyg_v = cr8u$p[p5clt];return null == nsyg_v && (nsyg_v = f3v_4g['lastIndexOf']('</' + p5clt + '>'), jr$8z9 > nsyg_v && (nsyg_v = f3v_4g['lastIndexOf']('</' + p5clt)), cr8u$p[p5clt] = nsyg_v), jr$8z9 > nsyg_v;
}function h_x4317q(c5lpuo, m5to) {
  for (var f_4vg in c5lpuo) m5to[f_4vg] = c5lpuo[f_4vg];
}function h_$ur8(cltmo, ot, $cp5, r9hdjz) {
  var n26sy = cltmo['charAt'](ot + 0x2);switch (n26sy) {case '-':
      if ('-' === cltmo['charAt'](ot + 0x3)) {
        var rj9hdz = cltmo['indexOf']('-->', ot + 0x4);return rj9hdz > ot ? ($cp5['comment'](cltmo, ot + 0x4, rj9hdz - ot - 0x4), rj9hdz + 0x3) : (r9hdjz['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == cltmo['substr'](ot + 0x3, 0x6)) {
        var rj9hdz = cltmo['indexOf'](']]>', ot + 0x9);return $cp5['startCDATA'](), $cp5['characters'](cltmo, ot + 0x9, rj9hdz - ot - 0x9), $cp5['endCDATA'](), rj9hdz + 0x3;
      }var b6ae2 = h_ns_v(cltmo, ot),
          zdj89 = b6ae2['length'];if (zdj89 > 0x1 && /!doctype/i['test'](b6ae2[0x0][0x0])) {
        var hqwd0 = b6ae2[0x1][0x0],
            zjdrh = zdj89 > 0x3 && /^public$/i['test'](b6ae2[0x2][0x0]) && b6ae2[0x3][0x0],
            n_syv = zdj89 > 0x4 && b6ae2[0x4][0x0],
            p8$cu = b6ae2[zdj89 - 0x1];return $cp5['startDTD'](hqwd0, zjdrh && zjdrh['replace'](/^(['"])(.*?)\1$/, '$2'), n_syv && n_syv['replace'](/^(['"])(.*?)\1$/, '$2')), $cp5['endDTD'](), p8$cu['index'] + p8$cu[0x0]['length'];
      }}return -0x1;
}function h_byia2(otpl5c, as2ny, s_an6) {
  var q31f74 = otpl5c['indexOf']('?>', as2ny);if (q31f74) {
    var nay_sv = otpl5c['substring'](as2ny, q31f74)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (nay_sv) {
      {
        nay_sv[0x0]['length'];
      }return s_an6['processingInstruction'](nay_sv[0x1], nay_sv[0x2]), q31f74 + 0x2;
    }return -0x1;
  }return -0x1;
}function h_aiby() {}function h_f_4vng(lmoct5, y_ans) {
  return lmoct5['__proto__'] = y_ans, lmoct5;
}function h_ns_v(l5$cpu, u$z9r8) {
  var zdrj9,
      x713q = [],
      qf4731 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (qf4731['lastIndex'] = u$z9r8, qf4731['exec'](l5$cpu); zdrj9 = qf4731['exec'](l5$cpu);) if (x713q['push'](zdrj9), zdrj9[0x1]) return x713q;
}var h_p5t = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    h_ae62b = new RegExp('[\\-\\.0-9' + h_p5t['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    h__6ansy = new RegExp('^' + h_p5t['source'] + h_ae62b['source'] + '*(?::' + h_p5t['source'] + h_ae62b['source'] + '*)?$'),
    h_r8u$pz = 0x0,
    h_z8pur$ = 0x1,
    h_r$z89u = 0x2,
    h_cp$ul8 = 0x3,
    h_z$8jr9 = 0x4,
    h_whjxd = 0x5,
    h_u9z8r$ = 0x6,
    h_u$l = 0x7;h_pclto['prototype'] = { 'parse': function (hwdj0x, ng_vsy, ngvsy) {
    var dqw0h = this['domBuilder'];dqw0h['startDocument'](), h_x4317q(ng_vsy, ng_vsy = {}), h_wdhq0x(hwdj0x, ng_vsy, ngvsy, dqw0h, this['errorHandler']), dqw0h['endDocument']();
  } }, h_aiby['prototype'] = { 'setTagName': function (xdqh) {
    if (!h__6ansy['test'](xdqh)) throw new Error('invalid tagName:' + xdqh);this['tagName'] = xdqh;
  }, 'add': function (lc$pu5, f_4v3, p5oclt) {
    if (!h__6ansy['test'](lc$pu5)) throw new Error('invalid attribute:' + lc$pu5);this[this['length']++] = { 'qName': lc$pu5, 'value': f_4v3, 'offset': p5oclt };
  }, 'length': 0x0, 'getLocalName': function (ul8$c) {
    return this[ul8$c]['localName'];
  }, 'getLocator': function (ib26ae) {
    return this[ib26ae]['locator'];
  }, 'getQName': function (v41fg) {
    return this[v41fg]['qName'];
  }, 'getURI': function (wzh9dj) {
    return this[wzh9dj]['uri'];
  }, 'getValue': function (n_4gf) {
    return this[n_4gf]['value'];
  } }, h_f_4vng({}, h_f_4vng['prototype']) instanceof h_f_4vng || (h_f_4vng = function (j8zr9, l$5cup) {
  function iy2b() {}iy2b['prototype'] = l$5cup, iy2b = new iy2b();for (l$5cup in j8zr9) iy2b[l$5cup] = j8zr9[l$5cup];return iy2b;
}), exports['XMLReader'] = h_pclto;