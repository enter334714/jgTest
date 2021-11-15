var M = wx.$T;
function tx0e7oq() {}function tfzoqe(yqeox0, bkagrj, rbjga, kabsju, dfo7p) {
  function g3816(tvci9$) {
    if (tvci9$ > 0xffff) {
      tvci9$ -= 0x10000;var $vdc9i = 0xd800 + (tvci9$ >> 0xa),
          jrbs = 0xdc00 + (0x3ff & tvci9$);return String['fromCharCode']($vdc9i, jrbs);
    }return String['fromCharCode'](tvci9$);
  }function g31rn8(eq0y) {
    var r3gn18 = eq0y['slice'](0x1, -0x1);return r3gn18 in rbjga ? rbjga[r3gn18] : '#' === r3gn18['charAt'](0x0) ? g3816(parseInt(r3gn18['substr'](0x1)['replace']('x', '0x'))) : (dfo7p['error']('entity not found:' + eq0y), eq0y);
  }function $7fzpd(yhxw_m) {
    if (yhxw_m > kabrs) {
      var zeo07 = yqeox0['substring'](kabrs, yhxw_m)['replace'](/&#?\w+;/g, g31rn8);nagb && it4l2(kabrs), kabsju['characters'](zeo07, 0x0, yhxw_m - kabrs), kabrs = yhxw_m;
    }
  }function it4l2($tc9, w15m6) {
    for (; $tc9 >= ez70q && (w15m6 = w6h8['exec'](yqeox0));) qe0xy = w15m6['index'], ez70q = qe0xy + w15m6[0x0]['length'], nagb['lineNumber']++;nagb['columnNumber'] = $tc9 - qe0xy + 0x1;
  }for (var qe0xy = 0x0, ez70q = 0x0, w6h8 = /.*(?:\r\n?|\n)|.*$/g, nagb = kabsju['locator'], yxwh_m = [{ 'currentNSMap': bkagrj }], bg3rj = {}, kabrs = 0x0;;) {
    try {
      var eoyx = yqeox0['indexOf']('<', kabrs);if (0x0 > eoyx) {
        if (!yqeox0['substr'](kabrs)['match'](/^\s*$/)) {
          var zef7po = kabsju['doc'],
              ywh5m_ = zef7po['createTextNode'](yqeox0['substr'](kabrs));zef7po['appendChild'](ywh5m_), kabsju['currentElement'] = ywh5m_;
        }return;
      }switch (eoyx > kabrs && $7fzpd(eoyx), yqeox0['charAt'](eoyx + 0x1)) {case '/':
          var rn8j3 = yqeox0['indexOf']('>', eoyx + 0x3),
              hxymw_ = yqeox0['substring'](eoyx + 0x2, rn8j3),
              abrgj = yxwh_m['pop']();0x0 > rn8j3 ? (hxymw_ = yqeox0['substring'](eoyx + 0x2)['replace'](/[\s<].*/, ''), dfo7p['error']('end tag name: ' + hxymw_ + ' is not complete:' + abrgj['tagName']), rn8j3 = eoyx + 0x1 + hxymw_['length']) : hxymw_['match'](/\s</) && (hxymw_ = hxymw_['replace'](/[\s<].*/, ''), dfo7p['error']('end tag name: ' + hxymw_ + ' maybe not complete'), rn8j3 = eoyx + 0x1 + hxymw_['length']);var bajks = abrgj['localNSMap'],
              _0ye = abrgj['tagName'] == hxymw_,
              xqo = _0ye || abrgj['tagName'] && abrgj['tagName']['toLowerCase']() == hxymw_['toLowerCase']();if (xqo) {
            if (kabsju['endElement'](abrgj['uri'], abrgj['localName'], hxymw_), bajks) {
              for (var xy0_m in bajks) kabsju['endPrefixMapping'](xy0_m);
            }_0ye || dfo7p['fatalError']('end tag name: ' + hxymw_ + ' is not match the current start tagName:' + abrgj['tagName']);
          } else yxwh_m['push'](abrgj);rn8j3++;break;case '?':
          nagb && it4l2(eoyx), rn8j3 = te07x(yqeox0, eoyx, kabsju);break;case '!':
          nagb && it4l2(eoyx), rn8j3 = tzq07oe(yqeox0, eoyx, kabsju, dfo7p);break;default:
          nagb && it4l2(eoyx);var exy_0 = new t$tciv(),
              ctl2i4 = yxwh_m[yxwh_m['length'] - 0x1]['currentNSMap'],
              rn8j3 = tzeof7(yqeox0, eoyx, exy_0, ctl2i4, g31rn8, dfo7p),
              h_xmyw = exy_0['length'];if (!exy_0['closed'] && tpdvi9(yqeox0, rn8j3, exy_0['tagName'], bg3rj) && (exy_0['closed'] = !0x0, rbjga['nbsp'] || dfo7p['warning']('unclosed xml attribute')), nagb && h_xmyw) {
            for (var r8g31 = tjbsuak(nagb, {}), g61 = 0x0; h_xmyw > g61; g61++) {
              var hm51 = exy_0[g61];it4l2(hm51['offset']), hm51['locator'] = tjbsuak(nagb, {});
            }kabsju['locator'] = r8g31, tjbaskr(exy_0, kabsju, ctl2i4) && yxwh_m['push'](exy_0), kabsju['locator'] = nagb;
          } else tjbaskr(exy_0, kabsju, ctl2i4) && yxwh_m['push'](exy_0);'http://www.w3.org/1999/xhtml' !== exy_0['uri'] || exy_0['closed'] ? rn8j3++ : rn8j3 = tkrasjb(yqeox0, rn8j3, exy_0['tagName'], g31rn8, kabsju);}
    } catch (zd7f$p) {
      dfo7p['error']('element parse error: ' + zd7f$p), rn8j3 = -0x1;
    }rn8j3 > kabrs ? kabrs = rn8j3 : $7fzpd(Math['max'](eoyx, kabrs) + 0x1);
  }
}function tjbsuak(ezofq, ey_0) {
  return ey_0['lineNumber'] = ezofq['lineNumber'], ey_0['columnNumber'] = ezofq['columnNumber'], ey_0;
}function tzeof7(g6n13, ngrj3, n8536, v9p$f, zoq7fe, kajs) {
  for (var e70ozq, jrkbas, v$i9c = ++ngrj3, w8135 = tdpv$f9;;) {
    var g318n = g6n13['charAt'](v$i9c);switch (g318n) {case '=':
        if (w8135 === th56mw) e70ozq = g6n13['slice'](ngrj3, v$i9c), w8135 = tmhy5w;else {
          if (w8135 !== tmw1) throw new Error('attribute equal must after attrName');w8135 = tmhy5w;
        }break;case '\x27':case '\x22':
        if (w8135 === tmhy5w || w8135 === th56mw) {
          if (w8135 === th56mw && (kajs['warning']('attribute value must after "="'), e70ozq = g6n13['slice'](ngrj3, v$i9c)), ngrj3 = v$i9c + 0x1, v$i9c = g6n13['indexOf'](g318n, ngrj3), !(v$i9c > 0x0)) throw new Error('attribute value no end \'' + g318n + '\' match');jrkbas = g6n13['slice'](ngrj3, v$i9c)['replace'](/&#?\w+;/g, zoq7fe), n8536['add'](e70ozq, jrkbas, ngrj3 - 0x1), w8135 = t$cvd;
        } else {
          if (w8135 != txyeoq) throw new Error('attribute value must after "="');jrkbas = g6n13['slice'](ngrj3, v$i9c)['replace'](/&#?\w+;/g, zoq7fe), n8536['add'](e70ozq, jrkbas, ngrj3), kajs['warning']('attribute "' + e70ozq + '" missed start quot(' + g318n + ')!!'), ngrj3 = v$i9c + 0x1, w8135 = t$cvd;
        }break;case '/':
        switch (w8135) {case tdpv$f9:
            n8536['setTagName'](g6n13['slice'](ngrj3, v$i9c));case t$cvd:case trng183:case tmwhxy_:
            w8135 = tmwhxy_, n8536['closed'] = !0x0;case txyeoq:case th56mw:case tmw1:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return kajs['error']('unexpected end of input'), w8135 == tdpv$f9 && n8536['setTagName'](g6n13['slice'](ngrj3, v$i9c)), v$i9c;case '>':
        switch (w8135) {case tdpv$f9:
            n8536['setTagName'](g6n13['slice'](ngrj3, v$i9c));case t$cvd:case trng183:case tmwhxy_:
            break;case txyeoq:case th56mw:
            jrkbas = g6n13['slice'](ngrj3, v$i9c), '/' === jrkbas['slice'](-0x1) && (n8536['closed'] = !0x0, jrkbas = jrkbas['slice'](0x0, -0x1));case tmw1:
            w8135 === tmw1 && (jrkbas = e70ozq), w8135 == txyeoq ? (kajs['warning']('attribute "' + jrkbas + '" missed quot(")!!'), n8536['add'](e70ozq, jrkbas['replace'](/&#?\w+;/g, zoq7fe), ngrj3)) : ('http://www.w3.org/1999/xhtml' === v9p$f[''] && jrkbas['match'](/^(?:disabled|checked|selected)$/i) || kajs['warning']('attribute "' + jrkbas + '" missed value!! "' + jrkbas + '" instead!!'), n8536['add'](jrkbas, jrkbas, ngrj3));break;case tmhy5w:
            throw new Error('attribute value missed!!');}return v$i9c;case '\u0080':
        g318n = '\x20';default:
        if ('\x20' >= g318n) switch (w8135) {case tdpv$f9:
            n8536['setTagName'](g6n13['slice'](ngrj3, v$i9c)), w8135 = trng183;break;case th56mw:
            e70ozq = g6n13['slice'](ngrj3, v$i9c), w8135 = tmw1;break;case txyeoq:
            var jrkbas = g6n13['slice'](ngrj3, v$i9c)['replace'](/&#?\w+;/g, zoq7fe);kajs['warning']('attribute "' + jrkbas + '" missed quot(")!!'), n8536['add'](e70ozq, jrkbas, ngrj3);case t$cvd:
            w8135 = trng183;} else switch (w8135) {case tmw1:
            {
              n8536['tagName'];
            }'http://www.w3.org/1999/xhtml' === v9p$f[''] && e70ozq['match'](/^(?:disabled|checked|selected)$/i) || kajs['warning']('attribute "' + e70ozq + '" missed value!! "' + e70ozq + '" instead2!!'), n8536['add'](e70ozq, e70ozq, ngrj3), ngrj3 = v$i9c, w8135 = th56mw;break;case t$cvd:
            kajs['warning']('attribute space is required"' + e70ozq + '\x22!!');case trng183:
            w8135 = th56mw, ngrj3 = v$i9c;break;case tmhy5w:
            w8135 = txyeoq, ngrj3 = v$i9c;break;case tmwhxy_:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}v$i9c++;
  }
}function tjbaskr(m0h_x, jbr3n, rngba) {
  for (var xyq_e0 = m0h_x['tagName'], hy5wm = null, i2ct9 = m0h_x['length']; i2ct9--;) {
    var g361 = m0h_x[i2ct9],
        rg1 = g361['qName'],
        fpdz7 = g361['value'],
        eoq0yx = rg1['indexOf'](':');if (eoq0yx > 0x0) var buskja = g361['prefix'] = rg1['slice'](0x0, eoq0yx),
        m6h15 = rg1['slice'](eoq0yx + 0x1),
        qxym_ = 'xmlns' === buskja && m6h15;else m6h15 = rg1, buskja = null, qxym_ = 'xmlns' === rg1 && '';g361['localName'] = m6h15, qxym_ !== !0x1 && (null == hy5wm && (hy5wm = {}, t$dfp9(rngba, rngba = {})), rngba[qxym_] = hy5wm[qxym_] = fpdz7, g361['uri'] = 'http://www.w3.org/2000/xmlns/', jbr3n['startPrefixMapping'](qxym_, fpdz7));
  }for (var i2ct9 = m0h_x['length']; i2ct9--;) {
    g361 = m0h_x[i2ct9];var buskja = g361['prefix'];buskja && ('xml' === buskja && (g361['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== buskja && (g361['uri'] = rngba[buskja || '']));
  }var eoq0yx = xyq_e0['indexOf'](':');eoq0yx > 0x0 ? (buskja = m0h_x['prefix'] = xyq_e0['slice'](0x0, eoq0yx), m6h15 = m0h_x['localName'] = xyq_e0['slice'](eoq0yx + 0x1)) : (buskja = null, m6h15 = m0h_x['localName'] = xyq_e0);var pzd7$ = m0h_x['uri'] = rngba[buskja || ''];if (jbr3n['startElement'](pzd7$, m6h15, xyq_e0, m0h_x), !m0h_x['closed']) return m0h_x['currentNSMap'] = rngba, m0h_x['localNSMap'] = hy5wm, !0x0;if (jbr3n['endElement'](pzd7$, m6h15, xyq_e0), hy5wm) {
    for (buskja in hy5wm) jbr3n['endPrefixMapping'](buskja);
  }
}function tkrasjb(q0ey_x, p$9idv, ictv2, c2l4it, wm5h1) {
  if (/^(?:script|textarea)$/i['test'](ictv2)) {
    var m0h_yx = q0ey_x['indexOf']('</' + ictv2 + '>', p$9idv),
        sujbka = q0ey_x['substring'](p$9idv + 0x1, m0h_yx);if (/[&<]/['test'](sujbka)) return (/^script$/i['test'](ictv2) ? (wm5h1['characters'](sujbka, 0x0, sujbka['length']), m0h_yx) : (sujbka = sujbka['replace'](/&#?\w+;/g, c2l4it), wm5h1['characters'](sujbka, 0x0, sujbka['length']), m0h_yx)
    );
  }return p$9idv + 0x1;
}function tpdvi9(q0xoye, xm_w, dp9vi, n1r8g3) {
  var ic9d = n1r8g3[dp9vi];return null == ic9d && (ic9d = q0xoye['lastIndexOf']('</' + dp9vi + '>'), xm_w > ic9d && (ic9d = q0xoye['lastIndexOf']('</' + dp9vi)), n1r8g3[dp9vi] = ic9d), xm_w > ic9d;
}function t$dfp9(xo0ye, bkgraj) {
  for (var i42ctl in xo0ye) bkgraj[i42ctl] = xo0ye[i42ctl];
}function tzq07oe(yx_q0, ajbskr, whm6_5, ct42i9) {
  var vfzp$ = yx_q0['charAt'](ajbskr + 0x2);switch (vfzp$) {case '-':
      if ('-' === yx_q0['charAt'](ajbskr + 0x3)) {
        var wh5m_ = yx_q0['indexOf']('-->', ajbskr + 0x4);return wh5m_ > ajbskr ? (whm6_5['comment'](yx_q0, ajbskr + 0x4, wh5m_ - ajbskr - 0x4), wh5m_ + 0x3) : (ct42i9['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == yx_q0['substr'](ajbskr + 0x3, 0x6)) {
        var wh5m_ = yx_q0['indexOf'](']]>', ajbskr + 0x9);return whm6_5['startCDATA'](), whm6_5['characters'](yx_q0, ajbskr + 0x9, wh5m_ - ajbskr - 0x9), whm6_5['endCDATA'](), wh5m_ + 0x3;
      }var f7eo = tabsjuk(yx_q0, ajbskr),
          $dfv = f7eo['length'];if ($dfv > 0x1 && /!doctype/i['test'](f7eo[0x0][0x0])) {
        var id$9c = f7eo[0x1][0x0],
            itvc9 = $dfv > 0x3 && /^public$/i['test'](f7eo[0x2][0x0]) && f7eo[0x3][0x0],
            $c9vid = $dfv > 0x4 && f7eo[0x4][0x0],
            w_5h6m = f7eo[$dfv - 0x1];return whm6_5['startDTD'](id$9c, itvc9 && itvc9['replace'](/^(['"])(.*?)\1$/, '$2'), $c9vid && $c9vid['replace'](/^(['"])(.*?)\1$/, '$2')), whm6_5['endDTD'](), w_5h6m['index'] + w_5h6m[0x0]['length'];
      }}return -0x1;
}function te07x(c$tiv9, n6g83, dci9$) {
  var xy_e = c$tiv9['indexOf']('?>', n6g83);if (xy_e) {
    var gjrbka = c$tiv9['substring'](n6g83, xy_e)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (gjrbka) {
      {
        gjrbka[0x0]['length'];
      }return dci9$['processingInstruction'](gjrbka[0x1], gjrbka[0x2]), xy_e + 0x2;
    }return -0x1;
  }return -0x1;
}function t$tciv() {}function tajn(d$z7fp, $9ipv) {
  return d$z7fp['__proto__'] = $9ipv, d$z7fp;
}function tabsjuk(yxeqo, uabkj) {
  var i2tcv,
      _y0mhx = [],
      oe70z = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (oe70z['lastIndex'] = uabkj, oe70z['exec'](yxeqo); i2tcv = oe70z['exec'](yxeqo);) if (_y0mhx['push'](i2tcv), i2tcv[0x1]) return _y0mhx;
}var teo7xq = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    tx7eoq0 = new RegExp('[\\-\\.0-9' + teo7xq['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    tjgn8 = new RegExp('^' + teo7xq['source'] + tx7eoq0['source'] + '*(?::' + teo7xq['source'] + tx7eoq0['source'] + '*)?$'),
    tdpv$f9 = 0x0,
    th56mw = 0x1,
    tmw1 = 0x2,
    tmhy5w = 0x3,
    txyeoq = 0x4,
    t$cvd = 0x5,
    trng183 = 0x6,
    tmwhxy_ = 0x7;tx0e7oq['prototype'] = { 'parse': function (n38615, $vct9, pfdvz) {
    var zd7fp$ = this['domBuilder'];zd7fp$['startDocument'](), t$dfp9($vct9, $vct9 = {}), tfzoqe(n38615, $vct9, pfdvz, zd7fp$, this['errorHandler']), zd7fp$['endDocument']();
  } }, t$tciv['prototype'] = { 'setTagName': function (e0q7ox) {
    if (!tjgn8['test'](e0q7ox)) throw new Error('invalid tagName:' + e0q7ox);this['tagName'] = e0q7ox;
  }, 'add': function (m6h_5w, dzvpf$, mh0_) {
    if (!tjgn8['test'](m6h_5w)) throw new Error('invalid attribute:' + m6h_5w);this[this['length']++] = { 'qName': m6h_5w, 'value': dzvpf$, 'offset': mh0_ };
  }, 'length': 0x0, 'getLocalName': function ($id9vc) {
    return this[$id9vc]['localName'];
  }, 'getLocator': function (q0oyx) {
    return this[q0oyx]['locator'];
  }, 'getQName': function (pzd7f) {
    return this[pzd7f]['qName'];
  }, 'getURI': function (jakgr) {
    return this[jakgr]['uri'];
  }, 'getValue': function (xmw_) {
    return this[xmw_]['value'];
  } }, tajn({}, tajn['prototype']) instanceof tajn || (tajn = function (m6w5_h, wh8561) {
  function garnjb() {}garnjb['prototype'] = wh8561, garnjb = new garnjb();for (wh8561 in m6w5_h) garnjb[wh8561] = m6w5_h[wh8561];return garnjb;
}), exports['XMLReader'] = tx0e7oq;