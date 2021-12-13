var I = wx.$R;
function r_ndpfe() {}function r_joxi2z(v3ls0t, ahb1_u, wiyok8, dpqgef, g7erw) {
  function xt2jzs(wymkr) {
    if (wymkr > 0xffff) {
      wymkr -= 0x10000;var i2ojy = 0xd800 + (wymkr >> 0xa),
          z32stl = 0xdc00 + (0x3ff & wymkr);return String['fromCharCode'](i2ojy, z32stl);
    }return String['fromCharCode'](wymkr);
  }function mr7gq(lszv3t) {
    var $49a = lszv3t['slice'](0x1, -0x1);return $49a in wiyok8 ? wiyok8[$49a] : '#' === $49a['charAt'](0x0) ? xt2jzs(parseInt($49a['substr'](0x1)['replace']('x', '0x'))) : (g7erw['error']('entity not found:' + lszv3t), lszv3t);
  }function m7ewg(q7degp) {
    if (q7degp > a_b1u$) {
      var zjts2 = v3ls0t['substring'](a_b1u$, q7degp)['replace'](/&#?\w+;/g, mr7gq);b9u$ && yixj8(a_b1u$), dpqgef['characters'](zjts2, 0x0, q7degp - a_b1u$), a_b1u$ = q7degp;
    }
  }function yixj8(cdf, kmywo8) {
    for (; cdf >= yok8ij && (kmywo8 = pqdefn['exec'](v3ls0t));) kwyo8 = kmywo8['index'], yok8ij = kwyo8 + kmywo8[0x0]['length'], b9u$['lineNumber']++;b9u$['columnNumber'] = cdf - kwyo8 + 0x1;
  }for (var kwyo8 = 0x0, yok8ij = 0x0, pqdefn = /.*(?:\r\n?|\n)|.*$/g, b9u$ = dpqgef['locator'], owi8k = [{ 'currentNSMap': ahb1_u }], dqnfpe = {}, a_b1u$ = 0x0;;) {
    try {
      var ywik8o = v3ls0t['indexOf']('<', a_b1u$);if (0x0 > ywik8o) {
        if (!v3ls0t['substr'](a_b1u$)['match'](/^\s*$/)) {
          var pe7gr = dpqgef['doc'],
              mk8oyw = pe7gr['createTextNode'](v3ls0t['substr'](a_b1u$));pe7gr['appendChild'](mk8oyw), dpqgef['currentElement'] = mk8oyw;
        }return;
      }switch (ywik8o > a_b1u$ && m7ewg(ywik8o), v3ls0t['charAt'](ywik8o + 0x1)) {case '/':
          var zjxt2s = v3ls0t['indexOf']('>', ywik8o + 0x3),
              pfqde = v3ls0t['substring'](ywik8o + 0x2, zjxt2s),
              o8jyxi = owi8k['pop']();0x0 > zjxt2s ? (pfqde = v3ls0t['substring'](ywik8o + 0x2)['replace'](/[\s<].*/, ''), g7erw['error']('end tag name: ' + pfqde + ' is not complete:' + o8jyxi['tagName']), zjxt2s = ywik8o + 0x1 + pfqde['length']) : pfqde['match'](/\s</) && (pfqde = pfqde['replace'](/[\s<].*/, ''), g7erw['error']('end tag name: ' + pfqde + ' maybe not complete'), zjxt2s = ywik8o + 0x1 + pfqde['length']);var qefgpd = o8jyxi['localNSMap'],
              e7rmqg = o8jyxi['tagName'] == pfqde,
              peq7dg = e7rmqg || o8jyxi['tagName'] && o8jyxi['tagName']['toLowerCase']() == pfqde['toLowerCase']();if (peq7dg) {
            if (dpqgef['endElement'](o8jyxi['uri'], o8jyxi['localName'], pfqde), qefgpd) {
              for (var _1au$b in qefgpd) dpqgef['endPrefixMapping'](_1au$b);
            }e7rmqg || g7erw['fatalError']('end tag name: ' + pfqde + ' is not match the current start tagName:' + o8jyxi['tagName']);
          } else owi8k['push'](o8jyxi);zjxt2s++;break;case '?':
          b9u$ && yixj8(ywik8o), zjxt2s = r_t32lz(v3ls0t, ywik8o, dpqgef);break;case '!':
          b9u$ && yixj8(ywik8o), zjxt2s = r_hnc6_(v3ls0t, ywik8o, dpqgef, g7erw);break;default:
          b9u$ && yixj8(ywik8o);var j8oyik = new r_b19au$(),
              fpqnd = owi8k[owi8k['length'] - 0x1]['currentNSMap'],
              zjxt2s = r_gqdep7(v3ls0t, ywik8o, j8oyik, fpqnd, mr7gq, g7erw),
              yoijx2 = j8oyik['length'];if (!j8oyik['closed'] && r_qd7gp(v3ls0t, zjxt2s, j8oyik['tagName'], dqnfpe) && (j8oyik['closed'] = !0x0, wiyok8['nbsp'] || g7erw['warning']('unclosed xml attribute')), b9u$ && yoijx2) {
            for (var k7gmwr = r_yioj8x(b9u$, {}), jxi2zs = 0x0; yoijx2 > jxi2zs; jxi2zs++) {
              var t2zsl3 = j8oyik[jxi2zs];yixj8(t2zsl3['offset']), t2zsl3['locator'] = r_yioj8x(b9u$, {});
            }dpqgef['locator'] = k7gmwr, r_oyx2i(j8oyik, dpqgef, fpqnd) && owi8k['push'](j8oyik), dpqgef['locator'] = b9u$;
          } else r_oyx2i(j8oyik, dpqgef, fpqnd) && owi8k['push'](j8oyik);'http://www.w3.org/1999/xhtml' !== j8oyik['uri'] || j8oyik['closed'] ? zjxt2s++ : zjxt2s = r_ijyo2x(v3ls0t, zjxt2s, j8oyik['tagName'], mr7gq, dpqgef);}
    } catch (zvtl3) {
      g7erw['error']('element parse error: ' + zvtl3), zjxt2s = -0x1;
    }zjxt2s > a_b1u$ ? a_b1u$ = zjxt2s : m7ewg(Math['max'](ywik8o, a_b1u$) + 0x1);
  }
}function r_yioj8x(ncdf5, oy8wik) {
  return oy8wik['lineNumber'] = ncdf5['lineNumber'], oy8wik['columnNumber'] = ncdf5['columnNumber'], oy8wik;
}function r_gqdep7(yo8kmw, z2xs3t, xi2joy, l3, kw8ym, epdgq7) {
  for (var zixsj2, xzt23s, ncfd56 = ++z2xs3t, a14$b = r_wiy;;) {
    var egpqr = yo8kmw['charAt'](ncfd56);switch (egpqr) {case '=':
        if (a14$b === r_c6_5nh) zixsj2 = yo8kmw['slice'](z2xs3t, ncfd56), a14$b = r_u1a_$b;else {
          if (a14$b !== r_stz3v) throw new Error('attribute equal must after attrName');a14$b = r_u1a_$b;
        }break;case '\x27':case '\x22':
        if (a14$b === r_u1a_$b || a14$b === r_c6_5nh) {
          if (a14$b === r_c6_5nh && (epdgq7['warning']('attribute value must after "="'), zixsj2 = yo8kmw['slice'](z2xs3t, ncfd56)), z2xs3t = ncfd56 + 0x1, ncfd56 = yo8kmw['indexOf'](egpqr, z2xs3t), !(ncfd56 > 0x0)) throw new Error('attribute value no end \'' + egpqr + '\' match');xzt23s = yo8kmw['slice'](z2xs3t, ncfd56)['replace'](/&#?\w+;/g, kw8ym), xi2joy['add'](zixsj2, xzt23s, z2xs3t - 0x1), a14$b = r_mkr7wg;
        } else {
          if (a14$b != r_c_h5u) throw new Error('attribute value must after "="');xzt23s = yo8kmw['slice'](z2xs3t, ncfd56)['replace'](/&#?\w+;/g, kw8ym), xi2joy['add'](zixsj2, xzt23s, z2xs3t), epdgq7['warning']('attribute "' + zixsj2 + '" missed start quot(' + egpqr + ')!!'), z2xs3t = ncfd56 + 0x1, a14$b = r_mkr7wg;
        }break;case '/':
        switch (a14$b) {case r_wiy:
            xi2joy['setTagName'](yo8kmw['slice'](z2xs3t, ncfd56));case r_mkr7wg:case r_kiyow8:case r_rem7g:
            a14$b = r_rem7g, xi2joy['closed'] = !0x0;case r_c_h5u:case r_c6_5nh:case r_stz3v:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return epdgq7['error']('unexpected end of input'), a14$b == r_wiy && xi2joy['setTagName'](yo8kmw['slice'](z2xs3t, ncfd56)), ncfd56;case '>':
        switch (a14$b) {case r_wiy:
            xi2joy['setTagName'](yo8kmw['slice'](z2xs3t, ncfd56));case r_mkr7wg:case r_kiyow8:case r_rem7g:
            break;case r_c_h5u:case r_c6_5nh:
            xzt23s = yo8kmw['slice'](z2xs3t, ncfd56), '/' === xzt23s['slice'](-0x1) && (xi2joy['closed'] = !0x0, xzt23s = xzt23s['slice'](0x0, -0x1));case r_stz3v:
            a14$b === r_stz3v && (xzt23s = zixsj2), a14$b == r_c_h5u ? (epdgq7['warning']('attribute "' + xzt23s + '" missed quot(")!!'), xi2joy['add'](zixsj2, xzt23s['replace'](/&#?\w+;/g, kw8ym), z2xs3t)) : ('http://www.w3.org/1999/xhtml' === l3[''] && xzt23s['match'](/^(?:disabled|checked|selected)$/i) || epdgq7['warning']('attribute "' + xzt23s + '" missed value!! "' + xzt23s + '" instead!!'), xi2joy['add'](xzt23s, xzt23s, z2xs3t));break;case r_u1a_$b:
            throw new Error('attribute value missed!!');}return ncfd56;case '\u0080':
        egpqr = '\x20';default:
        if ('\x20' >= egpqr) switch (a14$b) {case r_wiy:
            xi2joy['setTagName'](yo8kmw['slice'](z2xs3t, ncfd56)), a14$b = r_kiyow8;break;case r_c6_5nh:
            zixsj2 = yo8kmw['slice'](z2xs3t, ncfd56), a14$b = r_stz3v;break;case r_c_h5u:
            var xzt23s = yo8kmw['slice'](z2xs3t, ncfd56)['replace'](/&#?\w+;/g, kw8ym);epdgq7['warning']('attribute "' + xzt23s + '" missed quot(")!!'), xi2joy['add'](zixsj2, xzt23s, z2xs3t);case r_mkr7wg:
            a14$b = r_kiyow8;} else switch (a14$b) {case r_stz3v:
            {
              xi2joy['tagName'];
            }'http://www.w3.org/1999/xhtml' === l3[''] && zixsj2['match'](/^(?:disabled|checked|selected)$/i) || epdgq7['warning']('attribute "' + zixsj2 + '" missed value!! "' + zixsj2 + '" instead2!!'), xi2joy['add'](zixsj2, zixsj2, z2xs3t), z2xs3t = ncfd56, a14$b = r_c6_5nh;break;case r_mkr7wg:
            epdgq7['warning']('attribute space is required"' + zixsj2 + '\x22!!');case r_kiyow8:
            a14$b = r_c6_5nh, z2xs3t = ncfd56;break;case r_u1a_$b:
            a14$b = r_c_h5u, z2xs3t = ncfd56;break;case r_rem7g:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ncfd56++;
  }
}function r_oyx2i(t0sl, eqpn, t2jzxs) {
  for (var emgrq = t0sl['tagName'], fedq = null, bua1_h = t0sl['length']; bua1_h--;) {
    var z3svt = t0sl[bua1_h],
        mg7qre = z3svt['qName'],
        l3svt0 = z3svt['value'],
        nd6f5 = mg7qre['indexOf'](':');if (nd6f5 > 0x0) var _a$u1b = z3svt['prefix'] = mg7qre['slice'](0x0, nd6f5),
        fcqdnp = mg7qre['slice'](nd6f5 + 0x1),
        i2xzoj = 'xmlns' === _a$u1b && fcqdnp;else fcqdnp = mg7qre, _a$u1b = null, i2xzoj = 'xmlns' === mg7qre && '';z3svt['localName'] = fcqdnp, i2xzoj !== !0x1 && (null == fedq && (fedq = {}, r_q7rpge(t2jzxs, t2jzxs = {})), t2jzxs[i2xzoj] = fedq[i2xzoj] = l3svt0, z3svt['uri'] = 'http://www.w3.org/2000/xmlns/', eqpn['startPrefixMapping'](i2xzoj, l3svt0));
  }for (var bua1_h = t0sl['length']; bua1_h--;) {
    z3svt = t0sl[bua1_h];var _a$u1b = z3svt['prefix'];_a$u1b && ('xml' === _a$u1b && (z3svt['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _a$u1b && (z3svt['uri'] = t2jzxs[_a$u1b || '']));
  }var nd6f5 = emgrq['indexOf'](':');nd6f5 > 0x0 ? (_a$u1b = t0sl['prefix'] = emgrq['slice'](0x0, nd6f5), fcqdnp = t0sl['localName'] = emgrq['slice'](nd6f5 + 0x1)) : (_a$u1b = null, fcqdnp = t0sl['localName'] = emgrq);var a1_uhb = t0sl['uri'] = t2jzxs[_a$u1b || ''];if (eqpn['startElement'](a1_uhb, fcqdnp, emgrq, t0sl), !t0sl['closed']) return t0sl['currentNSMap'] = t2jzxs, t0sl['localNSMap'] = fedq, !0x0;if (eqpn['endElement'](a1_uhb, fcqdnp, emgrq), fedq) {
    for (_a$u1b in fedq) eqpn['endPrefixMapping'](_a$u1b);
  }
}function r_ijyo2x(nqpfe, p5, $19ba, $9, ncdqfp) {
  if (/^(?:script|textarea)$/i['test']($19ba)) {
    var kw8yrm = nqpfe['indexOf']('</' + $19ba + '>', p5),
        dfnpeq = nqpfe['substring'](p5 + 0x1, kw8yrm);if (/[&<]/['test'](dfnpeq)) return (/^script$/i['test']($19ba) ? (ncdqfp['characters'](dfnpeq, 0x0, dfnpeq['length']), kw8yrm) : (dfnpeq = dfnpeq['replace'](/&#?\w+;/g, $9), ncdqfp['characters'](dfnpeq, 0x0, dfnpeq['length']), kw8yrm)
    );
  }return p5 + 0x1;
}function r_qd7gp(tsx3, c5n, nfpq, ch6_u) {
  var $au1_b = ch6_u[nfpq];return null == $au1_b && ($au1_b = tsx3['lastIndexOf']('</' + nfpq + '>'), c5n > $au1_b && ($au1_b = tsx3['lastIndexOf']('</' + nfpq)), ch6_u[nfpq] = $au1_b), c5n > $au1_b;
}function r_q7rpge(qpdg7, dpqe) {
  for (var sjxz2t in qpdg7) dpqe[sjxz2t] = qpdg7[sjxz2t];
}function r_hnc6_(u_1ahb, g7pd, l2tzs, ts3l0v) {
  var eqmg = u_1ahb['charAt'](g7pd + 0x2);switch (eqmg) {case '-':
      if ('-' === u_1ahb['charAt'](g7pd + 0x3)) {
        var zsj2i = u_1ahb['indexOf']('-->', g7pd + 0x4);return zsj2i > g7pd ? (l2tzs['comment'](u_1ahb, g7pd + 0x4, zsj2i - g7pd - 0x4), zsj2i + 0x3) : (ts3l0v['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == u_1ahb['substr'](g7pd + 0x3, 0x6)) {
        var zsj2i = u_1ahb['indexOf'](']]>', g7pd + 0x9);return l2tzs['startCDATA'](), l2tzs['characters'](u_1ahb, g7pd + 0x9, zsj2i - g7pd - 0x9), l2tzs['endCDATA'](), zsj2i + 0x3;
      }var mk8ryw = r_mr7egq(u_1ahb, g7pd),
          kyw8oi = mk8ryw['length'];if (kyw8oi > 0x1 && /!doctype/i['test'](mk8ryw[0x0][0x0])) {
        var hc6u_ = mk8ryw[0x1][0x0],
            w7rmge = kyw8oi > 0x3 && /^public$/i['test'](mk8ryw[0x2][0x0]) && mk8ryw[0x3][0x0],
            ba419$ = kyw8oi > 0x4 && mk8ryw[0x4][0x0],
            s2zji = mk8ryw[kyw8oi - 0x1];return l2tzs['startDTD'](hc6u_, w7rmge && w7rmge['replace'](/^(['"])(.*?)\1$/, '$2'), ba419$ && ba419$['replace'](/^(['"])(.*?)\1$/, '$2')), l2tzs['endDTD'](), s2zji['index'] + s2zji[0x0]['length'];
      }}return -0x1;
}function r_t32lz(n_c6, ix2joz, rkm) {
  var c65nfh = n_c6['indexOf']('?>', ix2joz);if (c65nfh) {
    var rgemq = n_c6['substring'](ix2joz, c65nfh)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (rgemq) {
      {
        rgemq[0x0]['length'];
      }return rkm['processingInstruction'](rgemq[0x1], rgemq[0x2]), c65nfh + 0x2;
    }return -0x1;
  }return -0x1;
}function r_b19au$() {}function r_dpfneq(pg7eqr, nqdefp) {
  return pg7eqr['__proto__'] = nqdefp, pg7eqr;
}function r_mr7egq(epg7rq, v3lt0) {
  var z3t2l,
      $_1uab = [],
      q7depg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (q7depg['lastIndex'] = v3lt0, q7depg['exec'](epg7rq); z3t2l = q7depg['exec'](epg7rq);) if ($_1uab['push'](z3t2l), z3t2l[0x1]) return $_1uab;
}var r_nfqep = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    r_kwrmy = new RegExp('[\\-\\.0-9' + r_nfqep['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    r_ha_u1 = new RegExp('^' + r_nfqep['source'] + r_kwrmy['source'] + '*(?::' + r_nfqep['source'] + r_kwrmy['source'] + '*)?$'),
    r_wiy = 0x0,
    r_c6_5nh = 0x1,
    r_stz3v = 0x2,
    r_u1a_$b = 0x3,
    r_c_h5u = 0x4,
    r_mkr7wg = 0x5,
    r_kiyow8 = 0x6,
    r_rem7g = 0x7;r_ndpfe['prototype'] = { 'parse': function (oiz2, v3st, fcqpn) {
    var zvs3t = this['domBuilder'];zvs3t['startDocument'](), r_q7rpge(v3st, v3st = {}), r_joxi2z(oiz2, v3st, fcqpn, zvs3t, this['errorHandler']), zvs3t['endDocument']();
  } }, r_b19au$['prototype'] = { 'setTagName': function (rkm8yw) {
    if (!r_ha_u1['test'](rkm8yw)) throw new Error('invalid tagName:' + rkm8yw);this['tagName'] = rkm8yw;
  }, 'add': function (fh65n, oxi8yj, fpneqd) {
    if (!r_ha_u1['test'](fh65n)) throw new Error('invalid attribute:' + fh65n);this[this['length']++] = { 'qName': fh65n, 'value': oxi8yj, 'offset': fpneqd };
  }, 'length': 0x0, 'getLocalName': function (dfgqe) {
    return this[dfgqe]['localName'];
  }, 'getLocator': function (gm7w) {
    return this[gm7w]['locator'];
  }, 'getQName': function (t3vl0) {
    return this[t3vl0]['qName'];
  }, 'getURI': function (rgme) {
    return this[rgme]['uri'];
  }, 'getValue': function (u_1b) {
    return this[u_1b]['value'];
  } }, r_dpfneq({}, r_dpfneq['prototype']) instanceof r_dpfneq || (r_dpfneq = function (sx3t, _c65h) {
  function fc6d5() {}fc6d5['prototype'] = _c65h, fc6d5 = new fc6d5();for (_c65h in sx3t) fc6d5[_c65h] = sx3t[_c65h];return fc6d5;
}), exports['XMLReader'] = r_ndpfe;